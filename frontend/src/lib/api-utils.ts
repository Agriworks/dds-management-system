import { NextResponse } from 'next/server';
import { ApiResponse, ApiError } from '@/types/api';

export function createSuccessResponse<T>(data: T, message?: string): NextResponse<ApiResponse<T>> {
  return NextResponse.json({
    success: true,
    data,
    message,
    timestamp: new Date().toISOString(),
  });
}

export function createErrorResponse(
  code: string,
  message: string,
  status: number = 400,
  details?: Record<string, unknown>
): NextResponse<ApiError> {
  return NextResponse.json(
    {
      success: false,
      error: {
        code,
        message,
        details,
      },
      timestamp: new Date().toISOString(),
    },
    { status }
  );
}

export function validateRequiredParams(
  params: Record<string, string | undefined>,
  required: string[]
): string | null {
  for (const param of required) {
    if (!params[param] || params[param]?.trim() === '') {
      return `Missing required parameter: ${param}`;
    }
  }
  return null;
}
