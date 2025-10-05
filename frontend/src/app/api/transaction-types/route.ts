import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { z } from "zod";

const prisma = new PrismaClient();

// Validation schema for creating transaction types
const createTransactionTypeSchema = z.object({
  name: z.string().min(1, "Name is required").max(255, "Name too long"),
  label_english: z.string().min(1, "English label is required").max(255, "English label too long"),
  label_telugu: z.string().min(1, "Telugu label is required").max(255, "Telugu label too long"),
  description: z.string().optional(),
  parent_id: z.string().uuid().optional().nullable(),
});


// Get main transaction types (Level 1 - no parent_id)
export async function GET() {
  try {
    const mainTypes = await prisma.transaction_types.findMany({
      where: {
        parent_id: null,
        is_active: true,
      } as any,
      select: {
        id: true,
        name: true,
        label_english: true,
        label_telugu: true,
        description: true,
        parent_id: true,
      } as any,
      orderBy: {
        label_english: "asc",
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        mainTypes,
        count: mainTypes.length,
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
      { status: 500 }
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
        { status: 400 }
      );
    }
    
    // Validate parent_id if provided
    if (validatedData.parent_id) {
      const parentExists = await prisma.transaction_types.findUnique({
        where: { id: validatedData.parent_id },
      });
      
      if (!parentExists) {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: "INVALID_PARENT",
              message: "Parent transaction type not found",
            },
            timestamp: new Date().toISOString(),
          },
          { status: 400 }
        );
      }
    }
    
    // Create the transaction type
    const newType = await prisma.transaction_types.create({
      data: {
        name: validatedData.name,
        label_english: validatedData.label_english,
        label_telugu: validatedData.label_telugu,
        description: validatedData.description || null,
        parent_id: validatedData.parent_id || null,
        is_active: true,
      } as any,
      select: {
        id: true,
        name: true,
        label_english: true,
        label_telugu: true,
        description: true,
        parent_id: true,
        is_active: true,
        created_at: true,
        updated_at: true,
      } as any,
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
        { status: 400 }
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
      { status: 500 }
    );
  }
}

