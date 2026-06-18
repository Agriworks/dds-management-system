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
 * POST /api/transactions/:transactionId/restore
 * Restores a deleted transaction and re-applies its balance effect (admin only).
 */
export async function POST(
  request: NextRequest,
  { params }: RouteParams,
): Promise<NextResponse> {
  try {
    const auth = await requireAdminAccess(request, "/transactions/deleted");
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

    if (!transaction.is_archived) {
      return createSuccessResponse(
        { id: transaction.id, is_archived: false },
        "Transaction is already active",
      );
    }

    // Calculate the balance adjustment to re-apply the transaction
    const balanceAdjustment =
      transaction.transaction_type === "credit"
        ? transaction.amount
        : -transaction.amount;

    await prisma.$transaction(async (tx) => {
      await tx.transactions.update({
        where: { id: transactionId },
        data: { is_archived: false },
      });

      await tx.accounts.update({
        where: { id: transaction.account_id },
        data: {
          balance: {
            increment: balanceAdjustment,
          },
        },
      });
    });

    return createSuccessResponse(
      { id: transactionId, is_archived: false },
      "Transaction restored successfully",
    );
  } catch (error) {
    console.error("Error restoring transaction:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to restore transaction",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
