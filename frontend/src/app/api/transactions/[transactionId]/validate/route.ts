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
 * POST /api/transactions/:transactionId/validate
 * Marks a transaction as validated by setting is_archived=false.
 * This should only be done by accountants on pending transactions (is_archived=true).
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
        "Transaction already validated",
      );
    }

    // Update transaction to mark as validated
    await prisma.transactions.update({
      where: { id: transactionId },
      data: { is_archived: false },
    });

    return createSuccessResponse(
      { id: transactionId, is_archived: false },
      "Transaction validated successfully",
    );
  } catch (error) {
    console.error("Error validating transaction:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to validate transaction",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
