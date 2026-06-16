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
 * POST /api/members/:memberId/delete
 * Permanently deletes a member by setting is_archived=FALSE on all their
 * transactions in the transactions table (admin only).
 */
export async function POST(
  request: NextRequest,
  { params }: RouteParams,
): Promise<NextResponse> {
  try {
    const auth = await requireAdminAccess(request, "/members/browse");
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

    // Set is_archived = false on all transactions for this member
    const updateResult = await prisma.transactions.updateMany({
      where: { member_id: memberId },
      data: { is_archived: false },
    });

    // Archive the member so they no longer appear in the browse list
    await prisma.members.update({
      where: { id: memberId },
      data: { is_archived: false },
    });

    return createSuccessResponse(
      { id: memberId, is_archived: false, transactions_updated: updateResult.count },
      "Member deleted successfully",
    );
  } catch (error) {
    console.error("Error deleting member:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to delete member",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
