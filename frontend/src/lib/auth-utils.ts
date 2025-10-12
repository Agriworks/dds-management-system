import { NextRequest } from "next/server";

export interface TokenValidationResult {
  isValid: boolean;
  externalId?: string;
  error?: string;
}

export async function validateAccessToken(
  request: NextRequest,
): Promise<TokenValidationResult> {
  try {
    const authHeader = request.headers.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return {
        isValid: false,
        error: "Missing or invalid authorization header",
      };
    }

    const token = authHeader.substring(7); // Remove 'Bearer ' prefix

    // For Google OAuth tokens, we can validate them by calling Google's tokeninfo endpoint
    const googleResponse = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`,
    );

    if (!googleResponse.ok) {
      return {
        isValid: false,
        error: "Invalid or expired access token",
      };
    }

    const tokenInfo = await googleResponse.json();

    return {
      isValid: true,
      externalId: tokenInfo.user_id,
    };
  } catch (error) {
    console.error("Error validating access token:", error);
    return {
      isValid: false,
      error: "Token validation failed",
    };
  }
}

export async function getExternalIdFromToken(
  accessToken: string,
): Promise<string | null> {
  try {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`,
    );

    if (!response.ok) {
      return null;
    }

    const tokenInfo = await response.json();
    return tokenInfo.user_id || null;
  } catch (error) {
    console.error("Error extracting external ID from token:", error);
    return null;
  }
}
