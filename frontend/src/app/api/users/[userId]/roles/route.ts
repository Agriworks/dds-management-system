import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateAccessToken } from "@/lib/auth-utils";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";

export async function GET(
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

    console.log(`Getting roles for user: ${userId}`);

    const userRoles = await prisma.user_roles_mapping.findMany({
      where: {
        user_id: userId,
        is_active: true,
      },
      include: {
        role: true,
      },
    });

    const roles = userRoles.map((ur) => ur.role.name);

    return NextResponse.json({ roles });
  } catch (error) {
    console.error("Error fetching user roles:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
): Promise<NextResponse> {
  try {
    // Validate access token
    const tokenValidation = await validateAccessToken(request as NextRequest);
    if (!tokenValidation.isValid) {
      return createErrorResponse("UNAUTHORIZED", "Invalid access token", 401, {
        details: tokenValidation.error,
      });
    }

    const { userId } = await params;
    const { roles }: { roles: string[] } = await request.json();

    console.log(`Updating roles for user: ${userId}`, { roles });

    // Validate that all roles exist and are active
    const validRoles = await prisma.roles.findMany({
      where: {
        name: { in: roles },
        is_active: true,
      },
    });

    if (validRoles.length !== roles.length) {
      const invalidRoles = roles.filter(
        (role) => !validRoles.some((vr) => vr.name === role),
      );
      return createErrorResponse(
        "INVALID_ROLES",
        `Invalid or inactive roles: ${invalidRoles.join(", ")}`,
        400,
      );
    }

    // Start a transaction to update user roles
    await prisma.$transaction(async (tx) => {
      // First, deactivate all existing role mappings for this user
      await tx.user_roles_mapping.updateMany({
        where: {
          user_id: userId,
          is_active: true,
        },
        data: {
          is_active: false,
          updated_at: new Date(),
        },
      });

      // Then, create new role mappings for the provided roles
      for (const roleName of roles) {
        const role = validRoles.find((r) => r.name === roleName);
        if (role) {
          // Check if a mapping already exists (inactive)
          const existingMapping = await tx.user_roles_mapping.findFirst({
            where: {
              user_id: userId,
              role_id: role.id,
            },
          });

          if (existingMapping) {
            // Reactivate existing mapping
            await tx.user_roles_mapping.update({
              where: {
                id: existingMapping.id,
              },
              data: {
                is_active: true,
                updated_at: new Date(),
              },
            });
          } else {
            // Create new mapping
            await tx.user_roles_mapping.create({
              data: {
                user_id: userId,
                role_id: role.id,
                is_active: true,
                created_at: new Date(),
                updated_at: new Date(),
              },
            });
          }
        }
      }
    });

    return createSuccessResponse(
      { message: "User roles updated successfully" },
      "User roles updated successfully",
    );
  } catch (error) {
    console.error("Error updating user roles:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to update user roles",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
