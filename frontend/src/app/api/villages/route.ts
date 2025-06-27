import { NextRequest, NextResponse } from 'next/server';
import { createSuccessResponse, createErrorResponse, validateRequiredParams } from '@/lib/api-utils';
import { getVillagesByMandalId } from '@/lib/mock-data';

/**
 * GET /api/villages?mandalId=string
 * Returns all villages for a given mandal
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(request.url);
    const mandalId = searchParams.get('mandalId');

    // Validate required parameters
    const validationError = validateRequiredParams({ mandalId: mandalId || undefined }, ['mandalId']);
    if (validationError) {
      return createErrorResponse(
        'VALIDATION_ERROR',
        validationError,
        400
      );
    }

    // In a real application, you would validate that the mandal exists
    // and fetch villages from a database
    await new Promise(resolve => setTimeout(resolve, 100));

    const villages = getVillagesByMandalId(mandalId!);

    return createSuccessResponse(
      villages,
      `Found ${villages.length} villages for mandal ${mandalId}`
    );
  } catch (error) {
    console.error('Error fetching villages:', error);
    return createErrorResponse(
      'INTERNAL_ERROR',
      'Failed to retrieve villages',
      500,
      { error: error instanceof Error ? error.message : 'Unknown error' }
    );
  }
}
