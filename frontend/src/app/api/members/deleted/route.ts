import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";
import { requireAdminAccess } from "@/lib/admin-auth";
import { getMemberBalancesForMembers } from "@/lib/member-account-balances";

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const auth = await requireAdminAccess(request, "/members/deleted");
    if (!auth.authorized) {
      return createErrorResponse("FORBIDDEN", auth.message, auth.status);
    }

    const members = await prisma.members.findMany({
      where: {
        is_archived: true,
      },
      orderBy: {
        given_name: "asc",
      },
      select: {
        id: true,
        given_name: true,
        family_name: true,
        aadhar_number: true,
        phone_number: true,
        house_number: true,
        husband_or_father_name: true,
        village_id: true,
        villages: {
          select: {
            mandal_id: true,
            label_english: true,
            mandals: {
              select: {
                label_english: true,
              },
            },
          },
        },
        name_labels: {
          where: { language_code: "te" },
          select: {
            given_name: true,
            family_name: true,
          },
          take: 1,
        },
      },
    });

    const balanceByMember = await getMemberBalancesForMembers(members.map((m) => m.id));

    const villageIds = Array.from(new Set(members.map((m) => m.village_id)));
    const mandalIds = Array.from(new Set(members.map((m) => m.villages.mandal_id)));

    const teVillageLabels = villageIds.length
      ? await prisma.i18n_labels.findMany({
          where: {
            entity_table: "villages",
            field: "label_telugu",
            language_code: "te",
            entity_id: { in: villageIds },
          },
          select: { entity_id: true, text: true },
        })
      : [];

    const teMandalLabels = mandalIds.length
      ? await prisma.i18n_labels.findMany({
          where: {
            entity_table: "mandals",
            field: "label_telugu",
            language_code: "te",
            entity_id: { in: mandalIds },
          },
          select: { entity_id: true, text: true },
        })
      : [];

    const teVillageById = new Map(teVillageLabels.map((l) => [l.entity_id, l.text]));
    const teMandalById = new Map(teMandalLabels.map((l) => [l.entity_id, l.text]));

    const transformedMembers = members.map((member) => {
      const teluguName = member.name_labels.length > 0 ? member.name_labels[0] : null;
      const bal = balanceByMember.get(member.id) || { savingsBalance: 0, withdrawBalance: 0, laagodiBalance: 0 };
      return {
        id: member.id,
        givenNameEnglish: member.given_name,
        familyNameEnglish: member.family_name,
        givenNameTelugu: teluguName ? teluguName.given_name : member.given_name,
        familyNameTelugu: teluguName ? teluguName.family_name : member.family_name,
        husbandOrFatherName: member.husband_or_father_name,
        aadharNumber: member.aadhar_number,
        mandalEnglish: member.villages.mandals.label_english,
        mandalTelugu: teMandalById.get(member.villages.mandal_id) ?? member.villages.mandals.label_english,
        phoneNumber: member.phone_number,
        villageEnglish: member.villages.label_english,
        villageTelugu: teVillageById.get(member.village_id) ?? member.villages.label_english,
        savingsBalance: bal.savingsBalance,
        withdrawBalance: bal.withdrawBalance,
        laagodiBalance: bal.laagodiBalance,
      };
    });

    return createSuccessResponse(
      transformedMembers,
      `Found ${members.length} deleted members`,
    );
  } catch (error) {
    console.error("Error fetching deleted members:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to fetch deleted members",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
