import { NextRequest, NextResponse } from "next/server";
import { createErrorResponse, createSuccessResponse, validateRequiredParams } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

// GET /api/accounts/available?memberId=uuid&villageId=uuid
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const memberId = searchParams.get("memberId");
    const villageId = searchParams.get("villageId");

    const validationError = validateRequiredParams(
      { memberId: memberId || undefined, villageId: villageId || undefined },
      ["memberId", "villageId"],
    );
    if (validationError) {
      return createErrorResponse("VALIDATION_ERROR", validationError, 400);
    }

    // Ensure member exists and belongs to villageId
    const member = await prisma.members.findUnique({ where: { id: memberId! } });
    if (!member) {
      return createErrorResponse("NOT_FOUND", `Member ${memberId} not found`, 404);
    }
    if (member.village_id !== villageId) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Member does not belong to the selected village",
        400,
      );
    }

    // Accounts that are linked to both member and village
    const memberAccountIds = await prisma.members_accounts_onlink.findMany({
      where: { member_id: memberId! },
      select: { account_id: true },
    });
    const accountIds = memberAccountIds.map((m) => m.account_id);

    if (accountIds.length === 0) {
      return createSuccessResponse([], "No accounts linked to this member");
    }

    const villageAccounts = await prisma.villages_accounts_onlink.findMany({
      where: { village_id: villageId!, account_id: { in: accountIds } },
      select: { account_id: true },
    });
    const availableIds = new Set(villageAccounts.map((v) => v.account_id));

    const accounts = await prisma.accounts.findMany({
      where: { id: { in: Array.from(availableIds) } },
      select: {
        id: true,
        name: true,
        account_number: true,
        account_type_id: true,
        account_types: { select: { id: true, name: true, label_english: true } },
      },
      orderBy: { name: "asc" },
    });

    const transformed = accounts.map((a) => ({
      id: a.id,
      name: a.name,
      account_number: a.account_number,
      account_type_id: a.account_type_id,
      account_type_name: a.account_types?.name ?? null,
      account_type_label_english: a.account_types?.label_english ?? null,
    }));

    return createSuccessResponse(transformed, "Available accounts fetched");
  } catch (error) {
    console.error("Error fetching available accounts:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to fetch accounts",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}


