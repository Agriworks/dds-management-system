import { NextRequest, NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

// Validation schema for creating transactions
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
  comments: z.string().nullable().optional(),
  transaction_type_id: z
    .string()
    .uuid("Transaction type ID must be a valid UUID"),
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

    // Validate that the member exists
    const member = await prisma.members.findUnique({
      where: { id: data.member_id },
    });

    if (!member) {
      return createErrorResponse(
        "NOT_FOUND",
        `Member with ID ${data.member_id} not found`,
        404,
      );
    }

    // Validate that the transaction type exists and is active
    const selectedTransactionType = await prisma.transaction_types.findUnique({
      where: { id: data.transaction_type_id },
      select: {
        id: true,
        name: true,
        label_english: true,
        is_active: true,
        debit_or_credit: true,
      },
    });

    if (!selectedTransactionType || !selectedTransactionType.is_active) {
      return createErrorResponse(
        "NOT_FOUND",
        `Transaction type with ID ${data.transaction_type_id} not found or inactive`,
        404,
      );
    }

    // CRITICAL: Only accept leaf types (transaction types with no subtypes)
    // Transactions must always store the deepest/leaf subtype, never a parent type
    // This ensures data consistency and proper categorization
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const hasSubtypes = await (prisma.transaction_types.findFirst as any)({
      where: {
        parent_id: data.transaction_type_id,
        is_active: true,
      },
    });

    if (hasSubtypes) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        `Transaction type "${selectedTransactionType.label_english}" has subtypes. Only leaf types (types with no subtypes) can be used for transactions. Please select the deepest subtype.`,
        400,
      );
    }

    // Generate a unique receipt number if not provided
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

    const memberVillage = member.village_id;
    const villageLink = await prisma.villages_accounts_onlink.findFirst({
      where: { village_id: memberVillage, account_id: data.account_id },
      select: { id: true },
    });
    if (!villageLink) {
      return createErrorResponse(
        "VALIDATION_ERROR",
        "Selected account is not available for the member's village",
        400,
      );
    }

    // Determine balance adjustment based on debit_or_credit
    // Credit increases balance, Debit decreases balance
    const balanceAdjustment =
      selectedTransactionType.debit_or_credit === "credit"
        ? data.amount
        : -data.amount;

    // Use Prisma transaction to atomically create transaction and update account balance
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result = await (prisma.$transaction as any)(async (tx: any) => {
      // Create the transaction
      const transaction = await tx.transactions.create({
        data: {
          id: crypto.randomUUID(),
          supervisor_id: data.supervisor_id,
          member_id: data.member_id,
          account_id: data.account_id,
          transaction_type_id: data.transaction_type_id,
          amount: data.amount,
          transaction_date: new Date(data.transaction_date),
          comments: data.comments || null,
          receipt_number: receiptNumber,
        },
        include: {
          members: {
            select: {
              given_name: true,
              family_name: true,
              phone_number: true,
            },
          },
          users: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
          transaction_types: {
            include: {
              transaction_types: true, // parent type via self-reference
            },
          },
        },
      });

      // Update account balance
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

    const transaction = result;

    // Transform the response to match the expected format
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transactionType = (transaction as any).transaction_types;
    const parentType = transactionType?.transaction_types; // parent type via self-relation (could be null)
    
    // Build member name from given_name and family_name
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const memberName = `${(transaction as any).members.given_name} ${(transaction as any).members.family_name}`.trim();

    const transformedTransaction = {
      id: transaction.id,
      supervised_by: transaction.supervisor_id,
      member: transaction.member_id,
      amount: transaction.amount,
      comments: transaction.comments,
      transaction_type_id: transactionType.id,
      transaction_date: transaction.transaction_date.toISOString(),
      receipt_number: transaction.receipt_number,
      created_at: transaction.created_at.toISOString(),
      updated_at: transaction.updated_at.toISOString(),
      member_name: memberName,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      supervisor_name: `${(transaction as any).users.first_name} ${(transaction as any).users.last_name}`.trim(),
      type: parentType?.name || transactionType.name,
      type_name: parentType?.name || transactionType.name,
      type_label_english: parentType?.label_english || transactionType.label_english,
      loan_type: parentType ? transactionType.name : null,
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const whereConditions: any = {};

    if (memberId) {
      whereConditions.member_id = memberId;
    }

    if (supervisorId) {
      whereConditions.supervisor_id = supervisorId;
    }

    if (type && ["DEPOSIT", "WITHDRAWAL", "LOAN", "PAYBACK"].includes(type)) {
      whereConditions.transaction_types = {
        name: type,
      };
    }

    // Fetch transactions from the database with pagination
    // Type assertion needed because Prisma types may be out of sync with schema
    const [transactions, total] = await Promise.all([
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (prisma.transactions.findMany as any)({
        where: whereConditions,
        include: {
          members: {
            select: {
              given_name: true,
              family_name: true,
              phone_number: true,
            },
          },
          users: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
          transaction_types: {
            include: {
              transaction_types: true, // parent type via self-reference
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

    // Transform the data to match the API response format
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const transformedTransactions = transactions.map((transaction: any) => {
      const transactionType = transaction.transaction_types;
      const parentType = transactionType?.transaction_types; // parent type via self-relation
      const memberName = `${transaction.members?.given_name || ''} ${transaction.members?.family_name || ''}`.trim();

      return {
        id: transaction.id,
        supervised_by: transaction.supervisor_id,
        member: transaction.member_id,
        amount: transaction.amount,
        comments: transaction.comments,
        transaction_type_id: transactionType?.id || null,
        transaction_date: transaction.transaction_date.toISOString(),
        receipt_number: transaction.receipt_number,
        created_at: transaction.created_at.toISOString(),
        updated_at: transaction.updated_at.toISOString(),
        member_name: memberName,
        supervisor_name: `${transaction.users?.first_name || ''} ${transaction.users?.last_name || ''}`.trim(),
        type: parentType?.name || transactionType?.name || null,
        type_name: parentType?.name || transactionType?.name || null,
        type_label_english: parentType?.label_english || transactionType?.label_english || null,
        loan_type: parentType ? transactionType?.name : null, // Subtype is the child type when parent exists
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
