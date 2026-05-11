import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { v4 as uuidv4 } from "uuid";
import { validateAccessToken, getExternalIdFromToken } from "@/lib/auth-utils";

interface OAuthSyncRequest {
  first_name: string | null;
  last_name: string | null;
  email: string | null;
  phone: string | null;
  external_id: string;
  access_token: string;
}

export async function POST(request: Request): Promise<NextResponse> {
  try {
    const payload: OAuthSyncRequest = await request.json();

    // Validate access token
    const tokenValidation = await validateAccessToken(request as NextRequest);
    if (!tokenValidation.isValid) {
      return NextResponse.json(
        { error: "Invalid access token", details: tokenValidation.error },
        { status: 401 },
      );
    }

    // Extract external_id from token if not provided in payload
    let externalId: string | null = payload.external_id;
    if (!externalId && payload.access_token) {
      externalId = await getExternalIdFromToken(payload.access_token);
    }

    console.log("OAuth sync request:", payload);

    // Validate required fields
    if (!payload.email || !externalId) {
      return NextResponse.json(
        { error: "Email and external_id are required" },
        { status: 400 },
      );
    }

    // Check if user already exists by email
    const user = await prisma.users.findUnique({
      where: { email: payload.email },
    });

    if (user) {
      console.log("User already exists:", user.email);
      return NextResponse.json({
        id: user.id,
        message: "User already exists",
      });
    }

    // Create new user
    const newUser = await prisma.users.create({
      data: {
        id: uuidv4(),
        first_name: payload.first_name || "Unknown",
        last_name: payload.last_name || "User",
        email: payload.email,
        external_id: externalId,
      },
    });

    console.log("Created new user:", newUser.email);

    // Assign default "user" role to new users
    const userRole = await prisma.roles.findUnique({
      where: { name: "user" },
    });

    if (userRole) {
      await prisma.user_roles_mapping.create({
        data: {
          id: uuidv4(),
          user_id: newUser.id,
          role_id: userRole.id,
          assigned_by: newUser.id, // Self-assigned for new users
          is_active: true,
        },
      });
      console.log("Assigned default 'user' role to new user");
    } else {
      console.warn("Default 'user' role not found in database");
    }

    return NextResponse.json({
      id: newUser.id,
      message: "User created successfully",
    });
  } catch (error) {
    console.error("Error in OAuth sync:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
