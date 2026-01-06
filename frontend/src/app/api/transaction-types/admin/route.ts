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
        description: true,
        parent_id: true,
        is_active: true,
        created_at: true,
        updated_at: true,
        other_transaction_types: {
          select: {
            id: true,
            name: true,
            label_english: true,
            description: true,
            parent_id: true,
            is_active: true,
            created_at: true,
            updated_at: true,
            other_transaction_types: {
              select: {
                id: true,
                name: true,
                label_english: true,
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

    // Collect all transaction type IDs (including nested children)
    const collectIds = (types: typeof allTypes): string[] => {
      const ids: string[] = [];
      for (const type of types) {
        ids.push(type.id);
        if (type.other_transaction_types && type.other_transaction_types.length > 0) {
          ids.push(...collectIds(type.other_transaction_types as typeof allTypes));
        }
      }
      return ids;
    };

    const allTypeIds = collectIds(allTypes);

    // Fetch Telugu labels from i18n_labels for all transaction types
    const teLabels = allTypeIds.length
      ? await prisma.i18n_labels.findMany({
          where: {
            entity_table: "transaction_types",
            field: "label_telugu",
            language_code: "te",
            entity_id: { in: allTypeIds },
          },
          select: { entity_id: true, text: true },
        })
      : [];

    const teById = new Map(teLabels.map((l) => [l.entity_id, l.text]));

    // Helper function to merge Telugu labels recursively
    type TransactionTypeWithChildren = {
      id: string;
      name: string;
      label_english: string;
      description: string | null;
      parent_id: string | null;
      is_active: boolean;
      created_at: Date;
      updated_at: Date;
      other_transaction_types?: TransactionTypeWithChildren[];
    };

    const mergeTeluguLabels = (types: TransactionTypeWithChildren[]): Array<Omit<TransactionTypeWithChildren, 'other_transaction_types'> & { label_telugu: string | null; children?: Array<Omit<TransactionTypeWithChildren, 'other_transaction_types'> & { label_telugu: string | null }> }> => {
      return types.map((type) => {
        const { other_transaction_types, ...rest } = type;
        return {
          ...rest,
          label_telugu: teById.get(type.id) ?? null,
          children:
            other_transaction_types && other_transaction_types.length > 0
              ? mergeTeluguLabels(other_transaction_types)
              : undefined,
        };
      });
    };

    const allTypesWithTelugu = mergeTeluguLabels(allTypes);

    // Separate main types (no parent) and subtypes
    const mainTypes = allTypesWithTelugu.filter((type) => !type.parent_id);
    const subtypes = allTypesWithTelugu.filter((type) => type.parent_id);

    return NextResponse.json({
      success: true,
      data: {
        mainTypes,
        subtypes,
        allTypes: allTypesWithTelugu,
        count: allTypesWithTelugu.length,
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
      { status: 500 },
    );
  }
}
