import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  createErrorResponse,
  createSuccessResponse,
} from "@/lib/api-utils";
import { requireAdminAccess } from "@/lib/admin-auth";
import { z } from "zod";

type RouteParams = { params: Promise<{ transactionId: string }> };

const transactionIdSchema = z.string().uuid();

/**
 * POST /api/transactions/:transactionId/archive
 * Soft-deletes a transaction and reverses its balance effect (admin only).
 */
export async function POST(
  request: NextRequest,
  { params }: RouteParams,
): Promise<NextResponse> {
  try {
    const auth = await requireAdminAccess(request, "/transactions/browse");
    if (!auth.authorized) {
      return createErrorResponse("FORBIDDEN", auth.message, auth.status);
    }

    const { transactionId: rawTransactionId } = await params;
    const validation = transactionIdSchema.safeParse(rawTransactionId);
    if (!validation.success) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Transaction ID must be a valid UUID",
        400,
      );
    }

    const transactionId = validation.data;
    const transaction = await prisma.transactions.findUnique({
      where: { id: transactionId },
      select: {
        id: true,
        is_deleted: true,
        is_archived: true,
        amount: true,
        account_id: true,
        transaction_type: true,
      },
    });

    if (!transaction) {
      return createErrorResponse(
        "NOT_FOUND",
        `Transaction with ID ${transactionId} not found`,
        404,
      );
    }

    if (transaction.is_deleted) {
      return createSuccessResponse(
        { id: transaction.id, is_deleted: true },
        "Transaction already archived",
      );
    }

    // Only reverse balance for validated transactions (is_archived=false).
    // Pending (never validated) and invalidated transactions already had balance handled.
    const shouldReverseBalance = !transaction.is_archived;

    const reverseAdjustment = shouldReverseBalance
      ? transaction.transaction_type === "credit"
        ? -transaction.amount
        : transaction.amount
      : 0;

    await prisma.$transaction(async (tx) => {
      await tx.transactions.update({
        where: { id: transactionId },
        data: { is_deleted: true },
      });

      if (shouldReverseBalance) {
        await tx.accounts.update({
          where: { id: transaction.account_id },
          data: {
            balance: {
              increment: reverseAdjustment,
            },
          },
        });
      }
    });

    return createSuccessResponse(
      { id: transactionId, is_deleted: true },
      "Transaction archived successfully",
    );
  } catch (error) {
    console.error("Error archiving transaction:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to archive transaction",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
