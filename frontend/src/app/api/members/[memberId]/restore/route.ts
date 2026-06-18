import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@/lib/api-utils";
import { requireAdminAccess } from "@/lib/admin-auth";
import { z } from "zod";

type RouteParams = { params: Promise<{ memberId: string }> };

const memberIdSchema = z.string().uuid();

/**
 * POST /api/members/:memberId/restore
 * Restores a deleted member and their transactions (admin only).
 */
export async function POST(
  request: NextRequest,
  { params }: RouteParams,
): Promise<NextResponse> {
  try {
    const auth = await requireAdminAccess(request, "/members/deleted");
    if (!auth.authorized) {
      return createErrorResponse("FORBIDDEN", auth.message, auth.status);
    }

    const { memberId: rawMemberId } = await params;
    const validation = memberIdSchema.safeParse(rawMemberId);
    if (!validation.success) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Member ID must be a valid UUID",
        400,
      );
    }

    const memberId = validation.data;
    const member = await prisma.members.findUnique({
      where: { id: memberId },
      select: { id: true, is_archived: true },
    });

    if (!member) {
      return createErrorResponse(
        "NOT_FOUND",
        `Member with ID ${memberId} not found`,
        404,
      );
    }

    if (!member.is_archived) {
      return createSuccessResponse(
        { id: member.id, is_archived: false },
        "Member is already active",
      );
    }

    // Restore member and their transactions in a transaction
    await prisma.$transaction(async (tx) => {
      // Set is_archived = false on all transactions for this member
      await tx.transactions.updateMany({
        where: { member_id: memberId },
        data: { is_archived: false },
      });

      // Restore the member so they appear in browse list
      await tx.members.update({
        where: { id: memberId },
        data: { is_archived: false },
      });
    });

    return createSuccessResponse(
      { id: memberId, is_archived: false },
      "Member and transactions restored successfully",
    );
  } catch (error) {
    console.error("Error restoring member:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to restore member",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
