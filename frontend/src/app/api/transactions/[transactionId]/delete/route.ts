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
 * POST /api/transactions/:transactionId/delete
 * Deletes a transaction by setting is_archived=false and reverses its balance effect (admin only).
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
        is_archived: true,
        is_deleted: true,
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
        "Transaction already deleted",
      );
    }

    // Since transaction is active (is_archived=true), we must reverse its balance effect when setting is_archived=false
    const reverseAdjustment =
      transaction.transaction_type === "credit"
        ? -transaction.amount
        : transaction.amount;

    await prisma.$transaction(async (tx) => {
      await tx.transactions.update({
        where: { id: transactionId },
        data: { is_archived: false },
      });

      await tx.accounts.update({
        where: { id: transaction.account_id },
        data: {
          balance: {
            increment: reverseAdjustment,
          },
        },
      });
    });

    return createSuccessResponse(
      { id: transactionId, is_archived: false },
      "Transaction deleted successfully",
    );
  } catch (error) {
    console.error("Error deleting transaction:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to delete transaction",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
