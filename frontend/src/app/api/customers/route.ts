import { NextRequest, NextResponse } from 'next/server';
import { createSuccessResponse, createErrorResponse, validateRequiredParams } from '@/lib/api-utils';
import { getCustomersByVillageAndMandal } from '@/lib/mock-data';

/**
 * GET /api/customers?villageId=string&mandalId=string&limit=number&offset=number&search=string
 * Returns paginated customers for a given village and mandal
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const villageId = searchParams.get('villageId');
    const mandalId = searchParams.get('mandalId');
    const limitParam = searchParams.get('limit');
    const offsetParam = searchParams.get('offset');
    const search = searchParams.get('search');

    // Validate required parameters
    const validationError = validateRequiredParams(
      { 
        villageId: villageId || undefined, 
        mandalId: mandalId || undefined 
      },
      ['villageId', 'mandalId']
    );
    if (validationError) {
      return createErrorResponse(
        'VALIDATION_ERROR',
        validationError,
        400
      );
    }

    // Parse and validate optional parameters
    const limit = limitParam ? parseInt(limitParam, 10) : 10;
    const offset = offsetParam ? parseInt(offsetParam, 10) : 0;

    if (isNaN(limit) || limit < 1 || limit > 100) {
      return createErrorResponse(
        'VALIDATION_ERROR',
        'Limit must be a number between 1 and 100',
        400
      );
    }

    if (isNaN(offset) || offset < 0) {
      return createErrorResponse(
        'VALIDATION_ERROR',
        'Offset must be a non-negative number',
        400
      );
    }

    // In a real application, you would validate that the village and mandal exist
    // and fetch customers from a database
    await new Promise(resolve => setTimeout(resolve, 150));

    const { customers, total } = getCustomersByVillageAndMandal(
      villageId!,
      mandalId!,
      limit,
      offset,
      search || undefined
    );

    const paginatedResponse = {
      items: customers,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    };

    return createSuccessResponse(
      paginatedResponse,
      `Found ${customers.length} customers (${total} total) for village ${villageId}`
    );
  } catch (error) {
    console.error('Error fetching customers:', error);
    return createErrorResponse(
      'INTERNAL_ERROR',
      'Failed to retrieve customers',
      500,
      { error: error instanceof Error ? error.message : 'Unknown error' }
    );
  }
}
