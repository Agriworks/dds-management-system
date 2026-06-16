import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const aadharNumber = searchParams.get("aadhar_number")?.replace(/\D/g, "") || "";

    if (!aadharNumber) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Aadhar number is required",
        400,
      );
    }

    if (aadharNumber.length !== 12) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Aadhar number must be exactly 12 digits",
        400,
      );
    }

    const aadharMember = await prisma.members.findFirst({
      where: { aadhar_number: aadharNumber, is_archived: false },
      select: { id: true },
    });

    return createSuccessResponse({
      aadharExists: !!aadharMember,
    });
  } catch (error) {
    console.error("Error checking member uniqueness:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to validate member uniqueness",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
