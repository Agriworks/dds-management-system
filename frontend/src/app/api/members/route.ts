import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";

interface CreateMemberRequest {
  given_name: string;
  family_name: string;
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

    // Check if member with same Aadhar number already exists (among non-archived members)
    const existingAadharMember = await prisma.members.findFirst({
      where: {
        aadhar_number: cleanAadharNumber,
        is_archived: true,
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

    // Telugu labels use the same text as English names for display consistency
    await prisma.member_name_labels.create({
      data: {
        id: crypto.randomUUID(),
        member_id: newMember.id,
        language_code: "te",
        given_name: given_name.trim(),
        family_name: family_name.trim(),
      },
    });

    const savingsAccountType = await prisma.account_types.findUnique({
      where: { name: "SAVINGS" },
    });
    const withdrawAccountType = await prisma.account_types.findUnique({
      where: { name: "WITHDRAW" },
    });
    const laagodiAccountType = await prisma.account_types.findUnique({
      where: { name: "LAAGODI" },
    });

    if (!savingsAccountType) {
      return createErrorResponse(
        "INTERNAL_ERROR",
        "SAVINGS account type not found in database",
        500,
      );
    }
    if (!withdrawAccountType) {
      return createErrorResponse(
        "INTERNAL_ERROR",
        "WITHDRAW account type not found in database",
        500,
      );
    }
    if (!laagodiAccountType) {
      return createErrorResponse(
        "INTERNAL_ERROR",
        "LAAGODI account type not found in database",
        500,
      );
    }

    // Next three sequential ACC### numbers (savings, withdrawal, laagodi)
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

    let seq = 1;
    if (existingAccounts.length > 0) {
      const lastAccountNumber = existingAccounts[0].account_number;
      const match = lastAccountNumber.match(/ACC(\d+)/);
      if (match) {
        seq = parseInt(match[1], 10) + 1;
      }
    }
    const savingsAccountNumber = `ACC${seq.toString().padStart(6, "0")}`;
    const withdrawAccountNumber = `ACC${(seq + 1).toString().padStart(6, "0")}`;
    const laagodiAccountNumber = `ACC${(seq + 2).toString().padStart(6, "0")}`;

    const memberFullName = `${given_name.trim()} ${family_name.trim()}`;

    const newSavingsAccount = await prisma.accounts.create({
      data: {
        id: crypto.randomUUID(),
        name: memberFullName,
        account_number: savingsAccountNumber,
        balance: 0,
        account_type_id: savingsAccountType.id,
        description: `Savings account for ${memberFullName}`,
        is_active: true,
      },
    });

    const newWithdrawAccount = await prisma.accounts.create({
      data: {
        id: crypto.randomUUID(),
        name: memberFullName,
        account_number: withdrawAccountNumber,
        balance: 0,
        account_type_id: withdrawAccountType.id,
        description: `Withdrawal account for ${memberFullName}`,
        is_active: true,
      },
    });

    const newLaagodiAccount = await prisma.accounts.create({
      data: {
        id: crypto.randomUUID(),
        name: memberFullName,
        account_number: laagodiAccountNumber,
        balance: 0,
        account_type_id: laagodiAccountType.id,
        description: `Laagodi account for ${memberFullName}`,
        is_active: true,
      },
    });

    await prisma.members_accounts_onlink.createMany({
      data: [
        {
          id: crypto.randomUUID(),
          member_id: newMember.id,
          account_id: newSavingsAccount.id,
        },
        {
          id: crypto.randomUUID(),
          member_id: newMember.id,
          account_id: newWithdrawAccount.id,
        },
        {
          id: crypto.randomUUID(),
          member_id: newMember.id,
          account_id: newLaagodiAccount.id,
        },
      ],
    });

    return createSuccessResponse(
      {
        message:
          "Member created successfully with savings, withdrawal, and Laagodi accounts",
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
        savings_account: {
          id: newSavingsAccount.id,
          account_number: newSavingsAccount.account_number,
          name: newSavingsAccount.name,
        },
        withdraw_account: {
          id: newWithdrawAccount.id,
          account_number: newWithdrawAccount.account_number,
          name: newWithdrawAccount.name,
        },
        laagodi_account: {
          id: newLaagodiAccount.id,
          account_number: newLaagodiAccount.account_number,
          name: newLaagodiAccount.name,
        },
      },
      "Member created successfully with savings, withdrawal, and Laagodi accounts",
    );
  } catch (error) {
    console.error("Error creating member:", error);

    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      const targetFields = Array.isArray(error.meta?.target)
        ? error.meta.target.map((value) => String(value))
        : [];

      if (targetFields.includes("aadhar_number")) {
        return createErrorResponse(
          "VALIDATION_ERROR",
          "Member with this Aadhar number already exists",
          409,
        );
      }

      return createErrorResponse(
        "VALIDATION_ERROR",
        "Member with this information already exists",
        409,
      );
    }

    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to create member",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
