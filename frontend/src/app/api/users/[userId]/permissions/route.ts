import { NextRequest, NextResponse } from "next/server";
import { validateAccessToken } from "@/lib/auth-utils";
import { prisma } from "@/lib/prisma";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
): Promise<NextResponse> {
  try {
    // Validate access token
    const tokenValidation = await validateAccessToken(request);
    if (!tokenValidation.isValid) {
      return NextResponse.json(
        { error: "Invalid access token", details: tokenValidation.error },
        { status: 401 },
      );
    }

    const { userId } = await params;
    const { searchParams } = new URL(request.url);
    const endpoint = searchParams.get("endpoint");

    if (!endpoint) {
      return NextResponse.json(
        { error: "Endpoint parameter is required" },
        { status: 400 },
      );
    }

    console.log(
      `Getting permissions for user ${userId} on endpoint ${endpoint}`,
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
      return NextResponse.json({
        viewer: false,
        contributor: false,
        admin: false,
      });
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
      return NextResponse.json({
        viewer: false,
        contributor: false,
        admin: false,
      });
    }

    // Combine permissions from all roles - user gets the highest level of access
    const permissions = {
      viewer: endpointAccessList.some((access) => access.viewer) || false,
      contributor:
        endpointAccessList.some((access) => access.contributor) || false,
      admin: endpointAccessList.some((access) => access.admin) || false,
    };

    console.log("User permissions:", permissions);
    return NextResponse.json(permissions);
  } catch (error) {
    console.error("Error getting user permissions:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
