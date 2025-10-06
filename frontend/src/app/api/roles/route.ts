import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createErrorResponse, createSuccessResponse } from "@/lib/api-utils";

/**
 * GET /api/roles
 * Returns all active roles
 */
export async function GET(): Promise<NextResponse> {
  try {
    const roles = await prisma.roles.findMany({
      where: { is_active: true },
      select: { id: true, name: true, description: true, is_active: true },
      orderBy: { name: "asc" },
    });

    const transformed = roles.map((r) => ({
      id: r.id,
      name: r.name,
      description: r.description ?? null,
      is_active: r.is_active,
    }));

    return createSuccessResponse(transformed, "Roles retrieved successfully");
  } catch (error) {
    console.error("Error fetching roles:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to retrieve roles",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
