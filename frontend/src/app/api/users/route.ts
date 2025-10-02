import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/users
 * Returns all users with their roles
 */
export async function GET(): Promise<NextResponse> {
  try {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
        updated_at: true,
        user_roles: {
          where: { is_active: true },
          select: {
            role: {
              select: {
                id: true,
                name: true,
                description: true,
              },
            },
          },
        },
      },
      orderBy: {
        name: "asc",
      },
    });

    // Transform the data to match the API response format
    const transformedUsers = users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      roles: user.user_roles.map((ur) => ur.role.name),
      created_at: user.created_at.toISOString(),
      updated_at: user.updated_at.toISOString(),
    }));

    return createSuccessResponse(
      transformedUsers,
      "Users retrieved successfully",
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to retrieve users",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
