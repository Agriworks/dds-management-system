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
        { status: 400 },
      );
    }

    // Fetch subtypes from transaction_types where parent_id = parentId
    const subtypes = await prisma.transaction_types.findMany({
      where: {
        parent_id: parentId,
        is_active: true,
      },
      select: {
        id: true,
        name: true,
        label_english: true,
        description: true,
        parent_id: true,
      },
      orderBy: {
        label_english: "asc",
      },
    });

    // Fetch Telugu labels from i18n_labels for these subtypes
    const subTypeIds = subtypes.map((s) => s.id);
    const teLabels = subTypeIds.length
      ? await prisma.i18n_labels.findMany({
          where: {
            entity_table: "transaction_types",
            field: "label_telugu",
            language_code: "te",
            entity_id: { in: subTypeIds },
          },
          select: { entity_id: true, text: true },
        })
      : [];

    const teById = new Map(teLabels.map((l) => [l.entity_id, l.text]));

    // Merge Telugu labels into the response
    const subtypesWithTelugu = subtypes.map((item) => ({
      ...item,
      label_telugu: teById.get(item.id) ?? null,
    }));

    return NextResponse.json({
      success: true,
      data: {
        subtypes: subtypesWithTelugu,
        parentId,
        count: subtypesWithTelugu.length,
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
      { status: 500 },
    );
  }
}
