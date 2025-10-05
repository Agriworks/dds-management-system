import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// Admin API: Get all transaction types (including inactive) with hierarchy
export async function GET() {
  try {
    const allTypes = await prisma.transaction_types.findMany({
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
        children: {
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
            children: {
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
              },
              orderBy: {
                label_english: "asc",
              },
            },
          },
          orderBy: {
            label_english: "asc",
          },
        },
      },
      orderBy: {
        label_english: "asc",
      },
    });

    // Separate main types (no parent) and subtypes
    const mainTypes = allTypes.filter(type => !type.parent_id);
    const subtypes = allTypes.filter(type => type.parent_id);

    return NextResponse.json({
      success: true,
      data: {
        mainTypes,
        subtypes,
        allTypes,
        count: allTypes.length,
      },
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching all transaction types:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "FETCH_ALL_TYPES_ERROR",
          message: "Failed to fetch all transaction types",
        },
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
