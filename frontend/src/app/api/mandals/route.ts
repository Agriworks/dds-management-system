import { NextResponse } from 'next/server';
import { createSuccessResponse, createErrorResponse } from '@/lib/api-utils';
import { mockMandals } from '@/lib/mock-data';

/**
 * GET /api/mandals
 * Returns all available mandals
 */
export async function GET(): Promise<NextResponse> {
  try {
    // In a real application, you would fetch from a database
    // For now, we'll use mock data with a small delay to simulate network request
    await new Promise(resolve => setTimeout(resolve, 100));

    return createSuccessResponse(mockMandals, 'Mandals retrieved successfully');
  } catch (error) {
    console.error('Error fetching mandals:', error);
    return createErrorResponse(
      'INTERNAL_ERROR',
      'Failed to retrieve mandals',
      500,
      { error: error instanceof Error ? error.message : 'Unknown error' }
    );
  }
}
