import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import {
  createErrorResponse,
  createSuccessResponse,
} from "../../../../../lib/api-utils";
import { z } from "zod";

type RouteParams = { params: Promise<{ transactionId: string }> };

const transactionIdSchema = z.string().uuid();

/**
 * POST /api/transactions/:transactionId/invalidate
 * Marks a transaction invalid by setting is_archived=true and reverses its balance effect.
 */
export async function POST(
  _request: NextRequest,
  { params }: RouteParams,
): Promise<NextResponse> {
  try {
    const { transactionId: rawTransactionId } = await params;

    const validation = transactionIdSchema.safeParse(rawTransactionId);
    if (!validation.success) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Transaction ID must be a valid UUID",
        400,
        { validationErrors: validation.error.issues },
      );
    }

    const transactionId = validation.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transaction = await (prisma.transactions.findUnique as any)({
      where: { id: transactionId },
      select: {
        id: true,
        is_archived: true,
        amount: true,
        account_id: true,
        transaction_types: {
          select: {
            debit_or_credit: true,
          },
        },
      },
    });

    if (!transaction) {
      return createErrorResponse(
        "NOT_FOUND",
        `Transaction with ID ${transactionId} not found`,
        404,
      );
    }

    if (transaction.is_archived) {
      return createSuccessResponse(
        { id: transaction.id, is_archived: true },
        "Transaction already invalidated",
      );
    }

    const debitOrCredit = transaction.transaction_types?.debit_or_credit as
      | "credit"
      | "debit"
      | undefined;

    if (!debitOrCredit) {
      return createErrorResponse(
        "INTERNAL_ERROR",
        "Transaction type missing debit/credit metadata",
        500,
      );
    }

    // Reverse the original balance adjustment.
    // Credit increased balance => now decrement.
    // Debit decreased balance => now increment.
    const reverseAdjustment =
      debitOrCredit === "credit" ? -transaction.amount : transaction.amount;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (prisma.$transaction as any)(async (tx: any) => {
      await tx.transactions.update({
        where: { id: transactionId },
        data: { is_archived: true },
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
      { id: transactionId, is_archived: true },
      "Transaction invalidated successfully",
    );
  } catch (error) {
    console.error("Error invalidating transaction:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to invalidate transaction",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}

