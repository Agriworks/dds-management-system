import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

interface CreateMemberRequest {
  given_name: string;
  family_name: string;
  given_name_telugu: string;
  family_name_telugu: string;
  village_id: string;
  house_number: string;
  phone_number: string;
  husband_or_father_name: string;
  aadhar_number: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  console.log("POST /api/members called");
  try {
    const body: CreateMemberRequest = await request.json();
    console.log("Request body:", body);
    const {
      given_name,
      family_name,
      given_name_telugu,
      family_name_telugu,
      village_id,
      house_number,
      phone_number,
      husband_or_father_name,
      aadhar_number,
    } = body;

    // Validate required fields
    if (
      !given_name ||
      !family_name ||
      !given_name_telugu ||
      !family_name_telugu ||
      !village_id ||
      !house_number ||
      !phone_number ||
      !husband_or_father_name ||
      !aadhar_number
    ) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "All fields are required",
        400,
      );
    }

    // Validate phone number format (10 digits)
    const cleanPhoneNumber = phone_number.replace(/\D/g, "");
    if (cleanPhoneNumber.length !== 10) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Phone number must be exactly 10 digits",
        400,
      );
    }

    // Validate Aadhar number format (12 digits)
    const cleanAadharNumber = aadhar_number.replace(/\D/g, "");
    if (cleanAadharNumber.length !== 12) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Aadhar number must be exactly 12 digits",
        400,
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
        400,
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
        409,
      );
    }

    // Check if member with same Aadhar number already exists
    const existingAadharMember = await prisma.members.findFirst({
      where: {
        aadhar_number: cleanAadharNumber,
      },
    });

    if (existingAadharMember) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Member with this Aadhar number already exists",
        409,
      );
    }

    // Create the member
    const newMember = await prisma.members.create({
      data: {
        id: crypto.randomUUID(),
        given_name: given_name.trim(),
        family_name: family_name.trim(),
        village_id: village_id,
        house_number: house_number.trim(),
        phone_number: cleanPhoneNumber,
        husband_or_father_name: husband_or_father_name.trim(),
        aadhar_number: cleanAadharNumber,
      },
      include: {
        villages: {
          select: {
            label_english: true,
            mandals: {
              select: {
                label_english: true,
              },
            },
          },
        },
      },
    });

    // Create Telugu name labels for the member
    await prisma.member_name_labels.create({
      data: {
        id: crypto.randomUUID(),
        member_id: newMember.id,
        language_code: "te",
        given_name: given_name_telugu.trim(),
        family_name: family_name_telugu.trim(),
      },
    });

    // Get the SAVINGS account type
    const savingsAccountType = await prisma.account_types.findUnique({
      where: { name: "SAVINGS" },
    });

    if (!savingsAccountType) {
      // If SAVINGS account type doesn't exist, return error
      return createErrorResponse(
        "INTERNAL_ERROR",
        "SAVINGS account type not found in database",
        500,
      );
    }

    // Generate next account number
    // Find the highest existing account number with pattern ACC###
    const existingAccounts = await prisma.accounts.findMany({
      where: {
        account_number: {
          startsWith: "ACC",
        },
      },
      orderBy: {
        account_number: "desc",
      },
      take: 1,
    });

    let nextAccountNumber = "ACC001";
    if (existingAccounts.length > 0) {
      const lastAccountNumber = existingAccounts[0].account_number;
      const match = lastAccountNumber.match(/ACC(\d+)/);
      if (match) {
        const lastNumber = parseInt(match[1], 10);
        const nextNumber = lastNumber + 1;
        nextAccountNumber = `ACC${nextNumber.toString().padStart(3, "0")}`;
      }
    }

    // Create the savings account
    const memberFullName = `${given_name.trim()} ${family_name.trim()}`;
    const newAccount = await prisma.accounts.create({
      data: {
        id: crypto.randomUUID(),
        name: memberFullName,
        account_number: nextAccountNumber,
        balance: 0,
        account_type_id: savingsAccountType.id,
        description: `Main savings account for ${memberFullName}`,
        is_active: true,
      },
    });

    // Link account to member
    await prisma.members_accounts_onlink.create({
      data: {
        id: crypto.randomUUID(),
        member_id: newMember.id,
        account_id: newAccount.id,
      },
    });

    // Link account to village
    await prisma.villages_accounts_onlink.create({
      data: {
        id: crypto.randomUUID(),
        village_id: village_id,
        account_id: newAccount.id,
      },
    });

    return createSuccessResponse(
      {
        message: "Member created successfully with savings account",
        member: {
          id: newMember.id,
          given_name: newMember.given_name,
          family_name: newMember.family_name,
          phone_number: newMember.phone_number,
          house_number: newMember.house_number,
          husband_or_father_name: newMember.husband_or_father_name,
          aadhar_number: newMember.aadhar_number,
          village: newMember.villages.label_english,
          mandal: newMember.villages.mandals.label_english,
          created_at: newMember.created_at,
        },
        account: {
          id: newAccount.id,
          account_number: newAccount.account_number,
          name: newAccount.name,
        },
      },
      "Member created successfully with savings account",
    );
  } catch (error) {
    console.error("Error creating member:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to create member",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
