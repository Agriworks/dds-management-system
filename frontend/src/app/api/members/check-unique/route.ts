import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const phoneNumber = searchParams.get("phone_number")?.replace(/\D/g, "") || "";
    const aadharNumber = searchParams.get("aadhar_number")?.replace(/\D/g, "") || "";

    if (!phoneNumber || !aadharNumber) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Phone number and Aadhar number are required",
        400,
      );
    }

    if (phoneNumber.length !== 10) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Phone number must be exactly 10 digits",
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

    const [phoneMember, aadharMember] = await Promise.all([
      prisma.members.findFirst({
        where: { phone_number: phoneNumber },
        select: { id: true },
      }),
      prisma.members.findFirst({
        where: { aadhar_number: aadharNumber },
        select: { id: true },
      }),
    ]);

    return createSuccessResponse({
      phoneExists: !!phoneMember,
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
