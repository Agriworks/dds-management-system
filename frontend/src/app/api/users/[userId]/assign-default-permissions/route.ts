import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { validateAccessToken } from "@/lib/auth-utils";

interface AssignPermissionsRequest {
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
    const { endpoint }: AssignPermissionsRequest = await request.json();

    console.log(
      `Assigning default permissions for user ${userId} on endpoint ${endpoint}`,
    );

    // Check if user exists
    const user = await prisma.users.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Assign default "user" role if no roles exist
    const existingRoles = await prisma.user_roles_mapping.findMany({
      where: {
        user_id: userId,
        is_active: true,
      },
    });

    if (existingRoles.length === 0) {
      const userRole = await prisma.roles.findUnique({
        where: { name: "user" },
      });

      if (userRole) {
        await prisma.user_roles_mapping.create({
          data: {
            id: uuidv4(),
            user_id: userId,
            role_id: userRole.id,
            assigned_by: userId,
            is_active: true,
          },
        });
        console.log("Assigned default 'user' role to user");
      }
    }

    // Check if endpoint permissions already exist for 'user' role
    const existingAccess = await prisma.endpointaccess.findFirst({
      where: {
        role: "user",
        endpoint: endpoint,
      },
    });

    if (!existingAccess) {
      await prisma.endpointaccess.create({
        data: {
          role: "user",
          endpoint: endpoint,
          viewer: true,
          contributor: false,
          admin: false,
        },
      });
      console.log(`Created default permissions for endpoint: ${endpoint}`);
    }

    // Return the permissions
    return NextResponse.json({
      viewer: true,
      contributor: false,
      admin: false,
    });
  } catch (error) {
    console.error("Error assigning default permissions:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
