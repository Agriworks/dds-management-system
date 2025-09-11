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
        mandal: mandalId!,
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
            {
              full_name_english: {
                contains: search,
                mode: "insensitive" as const,
              },
            },
            {
              phone_number: {
                contains: search,
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
          full_name_english: true,
          phone_number: true,
          house_number: true,
          husband_or_father_name: true,
          created_at: true,
          updated_at: true,
        },
        orderBy: {
          full_name_english: "asc",
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
      id: customer.id,
      name: customer.full_name_english,
      phone: customer.phone_number,
      houseNumber: customer.house_number,
      fatherOrHusbandName: customer.husband_or_father_name,
      createdAt: customer.created_at.toISOString(),
      updatedAt: customer.updated_at.toISOString(),
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
