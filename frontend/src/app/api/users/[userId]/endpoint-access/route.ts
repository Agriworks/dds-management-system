import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateAccessToken } from "@/lib/auth-utils";

interface EndpointAccessRequest {
  endpoint: string;
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
): Promise<NextResponse> {
  try {
    // Validate access token
    const tokenValidation = await validateAccessToken(request as NextRequest);
    if (!tokenValidation.isValid) {
      return NextResponse.json(
        { error: "Invalid access token", details: tokenValidation.error },
        { status: 401 },
      );
    }

    const { userId } = await params;
    const { endpoint }: EndpointAccessRequest = await request.json();

    console.log(
      `Checking endpoint access for user ${userId} on endpoint ${endpoint}`,
    );

    // Get user's active roles
    const userRoles = await prisma.user_roles_mapping.findMany({
      where: {
        user_id: userId,
        is_active: true,
      },
      include: {
        role: true,
      },
    });

    if (!userRoles || userRoles.length === 0) {
      console.log("No active roles found for user:", userId);
      return NextResponse.json(null);
    }

    const roleNames = userRoles.map((ur) => ur.role.name);
    console.log("User roles:", roleNames);

    // Get endpoint access permissions for ALL user's roles
    const endpointAccessList = await prisma.endpointaccess.findMany({
      where: {
        endpoint: endpoint,
        role: {
          in: roleNames,
        },
      },
    });

    if (!endpointAccessList || endpointAccessList.length === 0) {
      console.log("No endpoint access found for endpoint:", endpoint);
      return NextResponse.json(null);
    }

    // Combine permissions from all roles - user gets the highest level of access
    const permissions = {
      viewer: endpointAccessList.some((access) => access.viewer) || false,
      contributor:
        endpointAccessList.some((access) => access.contributor) || false,
      admin: endpointAccessList.some((access) => access.admin) || false,
    };

    console.log("Endpoint permissions:", permissions);
    return NextResponse.json(permissions);
  } catch (error) {
    console.error("Error checking endpoint access:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
