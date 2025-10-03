import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API 1: Get main transaction types (Level 1 - no parent_id)
export async function GET() {
  try {
    const mainTypes = await prisma.transaction_types.findMany({
      where: {
        parent_id: null,
        is_active: true,
      },
      select: {
        id: true,
        name: true,
        label_english: true,
        label_telugu: true,
        description: true,
        parent_id: true,
      },
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
