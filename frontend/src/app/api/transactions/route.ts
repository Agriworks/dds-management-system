import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Validation schema for creating transactions
const createTransactionSchema = z
  .object({
    supervised_by: z.string().uuid("Supervisor ID must be a valid UUID"),
    member: z.string().uuid("Member ID must be a valid UUID"),
    amount: z.number().int().positive("Amount must be a positive integer"),
    transaction_date: z
      .string()
      .datetime()
      .optional()
      .default(() => new Date().toISOString()),
    comments: z.string().nullable().optional(),
    transaction_type_id: z.string().uuid("Transaction type ID must be a valid UUID"),
    receipt_number: z.string().optional(),
  })
;

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

    // Validate that the supervisor exists
    const supervisor = await prisma.supervisors.findUnique({
      where: { id: data.supervised_by },
    });

    if (!supervisor) {
      return createErrorResponse(
        "NOT_FOUND",
        `Supervisor with ID ${data.supervised_by} not found`,
        404,
      );
    }

    // Validate that the member exists
    const member = await prisma.members.findUnique({
      where: { id: data.member },
    });

    if (!member) {
      return createErrorResponse(
        "NOT_FOUND",
        `Member with ID ${data.member} not found`,
        404,
      );
    }

    // Validate that the transaction type exists and is active
    const transactionType = await prisma.transaction_types.findUnique({
      where: { id: data.transaction_type_id },
    });

    if (!transactionType || !transactionType.is_active) {
      return createErrorResponse(
        "NOT_FOUND",
        `Transaction type with ID ${data.transaction_type_id} not found or inactive`,
        404,
      );
    }


    // Generate a unique receipt number if not provided
    const receiptNumber =
      data.receipt_number ||
      `TXN-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create the transaction
    const transaction = await prisma.transactions.create({
      data: {
        id: crypto.randomUUID(),
        supervised_by: data.supervised_by,
        member: data.member,
        amount: data.amount,
        transaction_date: new Date(data.transaction_date),
        comments: data.comments || null,
        transaction_type_id: data.transaction_type_id,
        receipt_number: receiptNumber,
      },
      include: {
        members: {
          select: {
            full_name_english: true,
            phone_number: true,
          },
        },
        supervisors: {
          select: {
            full_name_english: true,
          },
        },
        transaction_type: true,
      },
    });

    // Transform the response to match the expected format
    const transformedTransaction = {
      id: transaction.id,
      supervised_by: transaction.supervised_by,
      member: transaction.member,
      amount: transaction.amount,
      comments: transaction.comments,
      transaction_type_id: transaction.transaction_type_id,
      transaction_date: transaction.transaction_date.toISOString(),
      receipt_number: transaction.receipt_number,
      created_at: transaction.created_at.toISOString(),
      updated_at: transaction.updated_at.toISOString(),
      member_name: transaction.members.full_name_english,
      supervisor_name: transaction.supervisors.full_name_english,
      type: transaction.transaction_type?.name,
      type_name: transaction.transaction_type?.name,
      type_label_english: transaction.transaction_type?.label_english,
      type_label_telugu: transaction.transaction_type?.label_telugu,
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
    const whereConditions: {
      member?: string;
      supervised_by?: string;
      transaction_type?: {
        name: string;
      };
    } = {};

    if (memberId) {
      whereConditions.member = memberId;
    }

    if (supervisorId) {
      whereConditions.supervised_by = supervisorId;
    }

    if (type && ["DEPOSIT", "WITHDRAWAL", "LOAN", "PAYBACK"].includes(type)) {
      whereConditions.transaction_type = {
        name: type,
      };
    }

    // Fetch transactions from the database with pagination
    const [transactions, total] = await Promise.all([
      prisma.transactions.findMany({
        where: whereConditions,
        include: {
          members: {
            select: {
              full_name_english: true,
              phone_number: true,
            },
          },
          supervisors: {
            select: {
              full_name_english: true,
            },
          },
          transaction_type: true,
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

    // Transform the data to match the API response format
    const transformedTransactions = transactions.map((transaction) => ({
      id: transaction.id,
      supervised_by: transaction.supervised_by,
      member: transaction.member,
      amount: transaction.amount,
      comments: transaction.comments,
      transaction_type_id: transaction.transaction_type_id,
      transaction_date: transaction.transaction_date.toISOString(),
      receipt_number: transaction.receipt_number,
      created_at: transaction.created_at.toISOString(),
      updated_at: transaction.updated_at.toISOString(),
      member_name: transaction.members.full_name_english,
      supervisor_name: transaction.supervisors.full_name_english,
    }));

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
