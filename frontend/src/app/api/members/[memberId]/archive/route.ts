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
 * POST /api/members/:memberId/archive
 * Soft-archives a member (admin only).
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

    if (member.is_archived) {
      return createSuccessResponse(
        { id: member.id, is_archived: true },
        "Member already archived",
      );
    }

    await prisma.members.update({
      where: { id: memberId },
      data: { is_archived: true },
    });

    return createSuccessResponse(
      { id: memberId, is_archived: true },
      "Member archived successfully",
    );
  } catch (error) {
    console.error("Error archiving member:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to archive member",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
