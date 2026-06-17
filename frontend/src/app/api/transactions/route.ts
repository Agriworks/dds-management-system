import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const createTransactionSchema = z.object({
  supervisor_id: z.string().uuid("Supervisor ID must be a valid UUID"),
  member_id: z.string().uuid("Member ID must be a valid UUID"),
  account_id: z.string().uuid("Account ID must be a valid UUID"),
  amount: z.number().int().positive("Amount must be a positive integer"),
  transaction_date: z
    .string()
    .datetime()
    .optional()
    .default(() => new Date().toISOString()),
  transaction_type: z.enum(["credit", "debit"]),
  comments: z.string().nullable().optional(),
  receipt_number: z.string().optional(),
});
/**
 * POST /api/transactions
 * Creates a new transaction
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();

    // Validate the request body
    const validationResult = createTransactionSchema.safeParse(body);
    if (!validationResult.success) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        `Invalid request data: ${validationResult.error.issues.map((i) => i.message).join(", ")}`,
        400,
        { validationErrors: validationResult.error.issues },
      );
    }

    const data = validationResult.data;

    // Validate that the user exists
    const user = await prisma.users.findUnique({
      where: { id: data.supervisor_id },
    });

    if (!user) {
      return createErrorResponse(
        "NOT_FOUND",
        `User with ID ${data.supervisor_id} not found`,
        404,
      );
    }

    // Validate that the member exists and is active
    const member = await prisma.members.findFirst({
      where: { id: data.member_id, is_archived: false },
    });

    if (!member) {
      return createErrorResponse(
        "NOT_FOUND",
        `Member with ID ${data.member_id} not found`,
        404,
      );
    }

    // Determine transaction type using the enum field
    // The request now accepts credit or debit directly
    const receiptNumber =
      data.receipt_number ||
      `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Validate account exists and is linked to this member and member's village
    const account = await prisma.accounts.findUnique({ where: { id: data.account_id } });
    if (!account) {
      return createErrorResponse(
        "NOT_FOUND",
        `Account with ID ${data.account_id} not found`,
        404,
      );
    }

    const memberLink = await prisma.members_accounts_onlink.findFirst({
      where: { member_id: data.member_id, account_id: data.account_id },
      select: { id: true },
    });
    if (!memberLink) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Selected account is not linked to this member",
        400,
      );
    }

    const balanceAdjustment = data.transaction_type === "credit" ? data.amount : -data.amount;

    const result = await prisma.$transaction(async (tx) => {
      const transaction = await tx.transactions.create({
        data: {
          id: crypto.randomUUID(),
          supervisor_id: data.supervisor_id,
          member_id: data.member_id,
          account_id: data.account_id,
          transaction_type: data.transaction_type,
          amount: data.amount,
          transaction_date: new Date(data.transaction_date),
          comments: data.comments || null,
          receipt_number: receiptNumber,
          is_archived: false,
        },
        include: {
          members: {
            select: {
              given_name: true,
              family_name: true,
            },
          },
          users: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
        },
      });

      await tx.accounts.update({
        where: { id: data.account_id },
        data: {
          balance: {
            increment: balanceAdjustment,
          },
        },
      });

      return transaction;
    });

    const memberName = `${result.members.given_name} ${result.members.family_name}`.trim();
    const supervisorName = `${result.users.first_name} ${result.users.last_name}`.trim();

    const transformedTransaction = {
      id: result.id,
      supervised_by: result.supervisor_id,
      member: result.member_id,
      amount: result.amount,
      comments: result.comments,
      transaction_type: result.transaction_type,
      transaction_date: result.transaction_date.toISOString(),
      receipt_number: result.receipt_number,
      is_archived: result.is_archived,
      created_at: result.created_at.toISOString(),
      updated_at: result.updated_at.toISOString(),
      member_name: memberName,
      supervisor_name: supervisorName,
      type: result.transaction_type,
      type_name: result.transaction_type,
      type_label_english: result.transaction_type,
      loan_type: null,
    };

    return createSuccessResponse(
      transformedTransaction,
      "Transaction created successfully",
    );
  } catch (error) {
    console.error("Error creating transaction:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to create transaction",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}

/**
 * GET /api/transactions?limit=number&offset=number&memberId=string&supervisorId=string&type=string
 * Returns paginated transactions with optional filters
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get("limit");
    const offsetParam = searchParams.get("offset");
    const memberId = searchParams.get("memberId");
    const supervisorId = searchParams.get("supervisorId");
    const type = searchParams.get("type");
    const isArchivedParam = searchParams.get("isArchived");

    // Parse and validate optional parameters
    const limit = limitParam ? parseInt(limitParam, 10) : 10;
    const offset = offsetParam ? parseInt(offsetParam, 10) : 0;

    if (isNaN(limit) || limit < 1 || limit > 100) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Limit must be a number between 1 and 100",
        400,
      );
    }

    if (isNaN(offset) || offset < 0) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Offset must be a non-negative number",
        400,
      );
    }

    // Build filter conditions
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereConditions: any = {
      is_deleted: false,
    };

    if (memberId) {
      whereConditions.member_id = memberId;
    }

    if (supervisorId) {
      whereConditions.supervisor_id = supervisorId;
    }

    // Only show active (non-archived/non-deleted) transactions by default
    if (isArchivedParam !== null) {
      whereConditions.is_archived = isArchivedParam === "true";
    } else {
      whereConditions.is_archived = false;
    }

    if (type) {
      const normalizedType = ["credit", "debit"].includes(type)
        ? type
        : type === "DEPOSIT" || type === "PAYBACK"
        ? "credit"
        : type === "LOAN" || type === "WITHDRAWAL"
        ? "debit"
        : null;

      if (normalizedType) {
        whereConditions.transaction_type = normalizedType;
      }
    }

    const [transactions, total] = await Promise.all([
      prisma.transactions.findMany({
        where: whereConditions,
        include: {
          members: {
            select: {
              given_name: true,
              family_name: true,
            },
          },
          users: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
        },
        orderBy: {
          created_at: "desc",
        },
        take: limit,
        skip: offset,
      }),
      prisma.transactions.count({
        where: whereConditions,
      }),
    ]);

    const transformedTransactions = transactions.map((transaction) => {
      const memberName = `${transaction.members?.given_name || ""} ${transaction.members?.family_name || ""}`.trim();
      const supervisorName = `${transaction.users?.first_name || ""} ${transaction.users?.last_name || ""}`.trim();

      return {
        id: transaction.id,
        supervised_by: transaction.supervisor_id,
        member: transaction.member_id,
        amount: transaction.amount,
        comments: transaction.comments,
        transaction_type: transaction.transaction_type,
        transaction_date: transaction.transaction_date.toISOString(),
        receipt_number: transaction.receipt_number,
        is_archived: transaction.is_archived,
        created_at: transaction.created_at.toISOString(),
        updated_at: transaction.updated_at.toISOString(),
        member_name: memberName,
        supervisor_name: supervisorName,
        type: transaction.transaction_type,
        type_name: transaction.transaction_type,
        type_label_english: transaction.transaction_type,
        loan_type: null,
      };
    });

    const paginatedResponse = {
      items: transformedTransactions,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    };

    return createSuccessResponse(
      paginatedResponse,
      `Found ${transactions.length} transactions (${total} total)`,
    );
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to retrieve transactions",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
