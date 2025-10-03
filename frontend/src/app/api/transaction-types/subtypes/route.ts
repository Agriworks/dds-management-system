import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// API 2: Get subtypes based on parent_id
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const parentId = searchParams.get("parentId");

    if (!parentId) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "MISSING_PARENT_ID",
            message: "parentId query parameter is required",
          },
          timestamp: new Date().toISOString(),
        },
        { status: 400 }
      );
    }

    const subtypes = await prisma.transaction_types.findMany({
      where: {
        parent_id: parentId,
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
        subtypes,
        parentId,
        count: subtypes.length,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching transaction subtypes:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "FETCH_SUBTYPES_ERROR",
          message: "Failed to fetch transaction subtypes",
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
