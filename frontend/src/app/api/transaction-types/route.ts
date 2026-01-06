import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { z } from "zod";

const prisma = new PrismaClient();

// Validation schema for creating transaction types (aligned with DB schema)
const createTransactionTypeSchema = z.object({
  name: z.string().min(1, "Name is required").max(255, "Name too long"),
  label_english: z
    .string()
    .min(1, "English label is required")
    .max(255, "English label too long"),
  // credit_debit_type enum in DB: 'credit' | 'debit'
  debit_or_credit: z.enum(["credit", "debit"]),
  description: z.string().optional(),
});

// Get main transaction types (Level 1 - no parent_id)
export async function GET() {
  try {
    const mainTypes = await prisma.transaction_types.findMany({
      where: {
        is_active: true,
        parent_id: null,
      },
      select: {
        id: true,
        name: true,
        label_english: true,
        description: true,
        debit_or_credit: true,
      },
      orderBy: {
        label_english: "asc",
      },
    });

    // Fetch Telugu labels from i18n_labels for these transaction types
    const transactionTypeIds = mainTypes.map((t) => t.id);
    const teLabels = transactionTypeIds.length
      ? await prisma.i18n_labels.findMany({
          where: {
            entity_table: "transaction_types",
            field: "label_telugu",
            language_code: "te",
            entity_id: { in: transactionTypeIds },
          },
          select: { entity_id: true, text: true },
        })
      : [];

    const teById = new Map(teLabels.map((l) => [l.entity_id, l.text]));

    // Merge Telugu labels into the response
    const mainTypesWithTelugu = mainTypes.map((type) => ({
      ...type,
      label_telugu: teById.get(type.id) ?? null,
    }));

    return NextResponse.json({
      success: true,
      data: {
        mainTypes: mainTypesWithTelugu,
        count: mainTypesWithTelugu.length,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching main transaction types:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "FETCH_MAIN_TYPES_ERROR",
          message: "Failed to fetch main transaction types",
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}

// Create new transaction type
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate input
    const validatedData = createTransactionTypeSchema.parse(body);

    // Check if name already exists
    const existingType = await prisma.transaction_types.findUnique({
      where: { name: validatedData.name },
    });

    if (existingType) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "DUPLICATE_NAME",
            message: "Transaction type with this name already exists",
          },
          timestamp: new Date().toISOString(),
        },
        { status: 400 },
      );
    }

    // Create the transaction type
    const newType = await prisma.transaction_types.create({
      data: {
        name: validatedData.name,
        label_english: validatedData.label_english,
        description: validatedData.description || null,
        debit_or_credit: validatedData.debit_or_credit,
        is_active: true,
      },
      select: {
        id: true,
        name: true,
        label_english: true,
        description: true,
        debit_or_credit: true,
        is_active: true,
        created_at: true,
        updated_at: true,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        transactionType: newType,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error creating transaction type:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "VALIDATION_ERROR",
            message: "Invalid input data",
            details: error.errors,
          },
          timestamp: new Date().toISOString(),
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      {
        success: false,
        error: {
          code: "CREATE_TYPE_ERROR",
          message: "Failed to create transaction type",
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 },
    );
  }
}
