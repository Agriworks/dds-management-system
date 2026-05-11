import { NextRequest, NextResponse } from "next/server";
import {
  createSuccessResponse,
  createErrorResponse,
  validateRequiredParams,
} from "@/lib/api-utils";
import { prisma } from "@/lib/prisma";

/**
 * GET /api/customers?villageId=string&mandalId=string&limit=number&offset=number&search=string
 * Returns paginated customers for a given village and mandal
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const villageId = searchParams.get("villageId");
    const mandalId = searchParams.get("mandalId");
    const limitParam = searchParams.get("limit");
    const offsetParam = searchParams.get("offset");
    const search = searchParams.get("search");

    // Validate required parameters
    const validationError = validateRequiredParams(
      {
        villageId: villageId || undefined,
        mandalId: mandalId || undefined,
      },
      ["villageId", "mandalId"],
    );
    if (validationError) {
      return createErrorResponse("VALIDATION_ERROR", validationError, 400);
    }

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

    // Validate that the village exists and belongs to the specified mandal
    const village = await prisma.villages.findFirst({
      where: {
        id: villageId!,
        mandal_id: mandalId!,
      },
    });

    if (!village) {
      return createErrorResponse(
        "NOT_FOUND",
        `Village with ID ${villageId} not found in mandal ${mandalId}`,
        404,
      );
    }

    // Build search conditions
    const searchConditions = search
      ? {
          OR: [
            { given_name: { contains: search, mode: "insensitive" as const } },
            { family_name: { contains: search, mode: "insensitive" as const } },
            { phone_number: { contains: search } },
            {
              name_labels: {
                some: {
                  language_code: "te",
                  OR: [
                    { given_name: { contains: search, mode: "insensitive" as const } },
                    { family_name: { contains: search, mode: "insensitive" as const } },
                  ],
                },
              },
            },
            {
              husband_or_father_name: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
          ],
        }
      : {};

    // Fetch customers from the database with pagination
    const [customers, total] = await Promise.all([
      prisma.members.findMany({
        where: {
          village_id: villageId!,
          ...searchConditions,
        },
        select: {
          id: true,
          given_name: true,
          family_name: true,
          name_labels: {
            where: { language_code: "te" },
            select: {
              given_name: true,
              family_name: true,
            },
            take: 1,
          },
          village_id: true,
          phone_number: true,
          house_number: true,
          husband_or_father_name: true,
          created_at: true,
          updated_at: true,
        },
        orderBy: {
          given_name: "asc",
        },
        take: limit,
        skip: offset,
      }),
      prisma.members.count({
        where: {
          village_id: villageId!,
          ...searchConditions,
        },
      }),
    ]);

    // Transform the data to match the API response format
    const transformedCustomers = customers.map((customer) => ({
      full_name_telugu:
        customer.name_labels.length > 0
          ? `${customer.name_labels[0].given_name} ${customer.name_labels[0].family_name}`.trim()
          : `${customer.given_name} ${customer.family_name}`.trim(),
      id: customer.id,
      full_name_english: `${customer.given_name} ${customer.family_name}`.trim(),
      village_id: customer.village_id,
      house_number: customer.house_number,
      phone_number: customer.phone_number,
      husband_or_father_name: customer.husband_or_father_name,
      created_at: customer.created_at.toISOString(),
      updated_at: customer.updated_at.toISOString(),
    }));

    const paginatedResponse = {
      items: transformedCustomers,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    };

    return createSuccessResponse(
      paginatedResponse,
      `Found ${customers.length} customers (${total} total) for village ${villageId}`,
    );
  } catch (error) {
    console.error("Error fetching customers:", error);
    return createErrorResponse(
      "INTERNAL_ERROR",
      "Failed to retrieve customers",
      500,
      { error: error instanceof Error ? error.message : "Unknown error" },
    );
  }
}
