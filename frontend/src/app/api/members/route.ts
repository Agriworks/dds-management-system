import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

interface CreateMemberRequest {
  full_name_english: string;
  village_id: string;
  house_number: string;
  phone_number: string;
  husband_or_father_name: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  console.log("POST /api/members called");
  try {
    const body: CreateMemberRequest = await request.json();
    console.log("Request body:", body);
    const { full_name_english, village_id, house_number, phone_number, husband_or_father_name } = body;

    // Validate required fields
    if (!full_name_english || !village_id || !house_number || !phone_number || !husband_or_father_name) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "All fields are required",
        400
      );
    }

    // Validate phone number format (10 digits)
    const cleanPhoneNumber = phone_number.replace(/\D/g, "");
    if (cleanPhoneNumber.length !== 10) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Phone number must be exactly 10 digits",
        400
      );
    }

    // Check if village exists
    const village = await prisma.villages.findUnique({
      where: {
        id: village_id,
      },
    });

    if (!village) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Selected village not found",
        400
      );
    }

    // Check if member with same phone number already exists
    const existingMember = await prisma.members.findFirst({
      where: {
        phone_number: cleanPhoneNumber,
      },
    });

    if (existingMember) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Member with this phone number already exists",
        409
      );
    }

    // Create the member
    const newMember = await prisma.members.create({
      data: {
        id: crypto.randomUUID(),
        full_name_english: full_name_english.trim(),
        village_id: village_id,
        house_number: house_number.trim(),
        phone_number: cleanPhoneNumber,
        husband_or_father_name: husband_or_father_name.trim(),
      },
      include: {
        villages: {
          select: {
            label_english: true,
            label_telugu: true,
            mandals: {
              select: {
                label_english: true,
                label_telugu: true,
              },
            },
          },
        },
      },
    });

    return createSuccessResponse(
      {
        message: "Member created successfully",
        member: {
          id: newMember.id,
          full_name_english: newMember.full_name_english,
          phone_number: newMember.phone_number,
          house_number: newMember.house_number,
          husband_or_father_name: newMember.husband_or_father_name,
          village: newMember.villages.label_english,
          mandal: newMember.villages.mandals.label_english,
          created_at: newMember.created_at,
        },
      },
      "Member created successfully"
    );
  } catch (error) {
    console.error("Error creating member:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to create member",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" }
    );
  }
}
