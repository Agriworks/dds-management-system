import { NextResponse } from "next/server";
import { createSuccessResponse, createErrorResponse } from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const items = await prisma.account_types.findMany({
      where: { is_active: true },
      select: {
        id: true,
        name: true,
        label_english: true,
        description: true,
        created_at: true,
        updated_at: true,
      },
      orderBy: { label_english: "asc" },
    });

    // Fetch Telugu labels from i18n_labels for these account types
    const accountTypeIds = items.map((a) => a.id);
    const teLabels = accountTypeIds.length
      ? await prisma.i18n_labels.findMany({
          where: {
            entity_table: "account_types",
            field: "label_telugu",
            language_code: "te",
            entity_id: { in: accountTypeIds },
          },
          select: { entity_id: true, text: true },
        })
      : [];

    const teById = new Map(teLabels.map((l) => [l.entity_id, l.text]));

    // Merge Telugu labels into the response
    const itemsWithTelugu = items.map((item) => ({
      ...item,
      label_telugu: teById.get(item.id) ?? null,
    }));

    return createSuccessResponse(itemsWithTelugu, "Account types retrieved successfully");
  } catch (error) {
    console.error("Error fetching account types:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to retrieve account types",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}


