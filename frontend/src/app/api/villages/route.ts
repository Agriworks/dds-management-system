import { NextRequest, NextResponse } from "next/server";
import {
  createSuccessResponse,
  createErrorResponse,
  validateRequiredParams,
} from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/villages?mandalId=string
 * Returns all villages for a given mandal
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const mandalId = searchParams.get("mandalId");

    // Validate required parameters
    const validationError = validateRequiredParams(
      { mandalId: mandalId || undefined },
      ["mandalId"],
    );
    if (validationError) {
      return createErrorResponse("VALIDATION_ERROR", validationError, 400);
    }

    // Validate that the mandal exists
    const mandal = await prisma.mandals.findUnique({
      where: { id: mandalId! },
    });

    if (!mandal) {
      return createErrorResponse(
        "NOT_FOUND",
        `Mandal with ID ${mandalId} not found`,
        404,
      );
    }

    // Fetch villages from the database
    const villages = await prisma.villages.findMany({
      where: {
        mandal: mandalId!,
      },
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
    const transformedVillages = villages.map((village) => ({
      id: village.id,
      label_english: village.label_english,
      label_telugu: village.label_telugu,
      createdAt: village.created_at.toISOString(),
      updatedAt: village.updated_at.toISOString(),
    }));

    return createSuccessResponse(
      transformedVillages,
      `Found ${villages.length} villages for mandal ${mandalId}`,
    );
  } catch (error) {
    console.error("Error fetching villages:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to retrieve villages",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
