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

    if (transaction.is_deleted) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Cannot invalidate an archived transaction",
        400,
      );
    }

    if (transaction.is_archived) {
      return createSuccessResponse(
        { id: transaction.id, is_archived: true },
        "Transaction already invalidated",
      );
    }

    if (!transaction.transaction_type) {
      return createErrorResponse(
        "INTERNAL_ERROR",
        "Transaction type is missing",
        500,
      );
    }

    const reverseAdjustment =
      transaction.transaction_type === "credit" ? -transaction.amount : transaction.amount;

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

