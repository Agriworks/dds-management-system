import { NextRequest } from "next/server";
import { validateAccessToken } from "@/lib/auth-utils";
import { prisma } from "@/lib/prisma";

export async function requireAdminAccess(
  request: NextRequest,
  endpoint: string,
): Promise<{ authorized: true; userId: string } | { authorized: false; status: number; message: string }> {
  const tokenValidation = await validateAccessToken(request);
  if (!tokenValidation.isValid) {
    return { authorized: false, status: 401, message: "Invalid access token" };
  }

  const externalId = tokenValidation.externalId;
  if (!externalId) {
    return { authorized: false, status: 401, message: "Invalid access token" };
  }

  const user = await prisma.users.findFirst({
    where: { external_id: externalId },
    select: { id: true },
  });

  if (!user) {
    return { authorized: false, status: 404, message: "User not found" };
  }

  const userRoles = await prisma.user_roles_mapping.findMany({
    where: { user_id: user.id, is_active: true },
    include: { role: true },
  });

  if (userRoles.length === 0) {
    return { authorized: false, status: 403, message: "Admin access required" };
  }

  const roleNames = userRoles.map((ur) => ur.role.name);
  const endpointAccessList = await prisma.endpointaccess.findMany({
    where: {
      endpoint,
      role: { in: roleNames },
    },
  });

  const isAdmin = endpointAccessList.some((access) => access.admin);
  if (!isAdmin) {
    return { authorized: false, status: 403, message: "Admin access required" };
  }

  return { authorized: true, userId: user.id };
}
