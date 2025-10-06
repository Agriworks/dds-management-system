import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

/**
 * PUT /api/users/[userId]/roles
 * Updates user roles
 */
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> },
): Promise<NextResponse> {
  try {
    const { userId } = await params;
    const body = await request.json();
    const { roles }: { roles: string[] } = body;

    if (!Array.isArray(roles)) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Roles must be an array",
        400,
      );
    }

    // Get role IDs from role names
    const roleRecords = await prisma.roles.findMany({
      where: {
        name: { in: roles },
        is_active: true,
      },
      select: { id: true, name: true },
    });

    if (roleRecords.length !== roles.length) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "One or more roles not found",
        400,
      );
    }

    // Start transaction
    await prisma.$transaction(async (tx) => {
      // Get current user roles
      const currentRoles = await tx.user_roles_mapping.findMany({
        where: {
          user_id: userId,
          is_active: true,
        },
        select: { role_id: true, role: { select: { name: true } } },
      });

      const currentRoleNames = currentRoles.map((ur) => ur.role.name);

      // Find roles to add and remove
      const rolesToAdd = roles.filter(
        (role) => !currentRoleNames.includes(role),
      );
      const rolesToRemove = currentRoleNames.filter(
        (role) => !roles.includes(role),
      );

      // Remove roles that are no longer needed
      if (rolesToRemove.length > 0) {
        // Get role IDs for roles to remove from current user roles
        const roleIdsToRemove = currentRoles
          .filter((ur) => rolesToRemove.includes(ur.role.name))
          .map((ur) => ur.role_id);

        await tx.user_roles_mapping.updateMany({
          where: {
            user_id: userId,
            role_id: { in: roleIdsToRemove },
          },
          data: {
            is_active: false,
          },
        });
      }

      // Add new roles
      if (rolesToAdd.length > 0) {
        const roleIdsToAdd = roleRecords
          .filter((role) => rolesToAdd.includes(role.name))
          .map((role) => role.id);

        // Check for existing inactive mappings and reactivate them instead of creating new ones
        for (const roleId of roleIdsToAdd) {
          const existingMapping = await tx.user_roles_mapping.findFirst({
            where: {
              user_id: userId,
              role_id: roleId,
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
                assigned_by: userId,
              },
            });
          } else {
            // Create new mapping
            await tx.user_roles_mapping.create({
              data: {
                user_id: userId,
                role_id: roleId,
                assigned_by: userId,
                is_active: true,
              },
            });
          }
        }
      }
    });

    return createSuccessResponse(
      { message: "User roles updated successfully" },
      "Roles updated successfully",
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
