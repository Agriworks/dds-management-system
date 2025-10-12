import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateAccessToken } from "@/lib/auth-utils";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
): Promise<NextResponse> {
  try {
    // Validate access token
    const tokenValidation = await validateAccessToken(request as NextRequest);
    if (!tokenValidation.isValid) {
      return NextResponse.json(
        { error: "Invalid access token", details: tokenValidation.error },
        { status: 401 },
      );
    }

    const { userId } = await params;

    console.log(`Getting roles for user: ${userId}`);

    const userRoles = await prisma.user_roles_mapping.findMany({
      where: {
        user_id: userId,
        is_active: true,
      },
      include: {
        role: true,
      },
    });

    const roles = userRoles.map((ur) => ur.role.name);

    return NextResponse.json({ roles });
  } catch (error) {
    console.error("Error fetching user roles:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    );
  }
}
