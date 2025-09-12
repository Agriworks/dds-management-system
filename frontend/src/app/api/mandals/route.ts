import { NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/mandals
 * Returns all available mandals
 */
export async function GET(): Promise<NextResponse> {
  try {
    // Fetch mandals from the database
    const mandals = await prisma.mandals.findMany({
      select: {
        id: true,
        label_english: true,
        label_telugu: true,
        created_at: true,
        updated_at: true,
      },
      orderBy: {
        label_english: "asc",
      },
    });

    // Transform the data to match the API response format
    const transformedMandals = mandals.map((mandal) => ({
      id: mandal.id,
      label_english: mandal.label_english,
      label_telugu: mandal.label_telugu,
      createdAt: mandal.created_at.toISOString(),
      updatedAt: mandal.updated_at.toISOString(),
    }));

    return createSuccessResponse(
      transformedMandals,
      "Mandals retrieved successfully",
    );
  } catch (error) {
    console.error("Error fetching mandals:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to retrieve mandals",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
