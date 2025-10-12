import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkRole } from "./lib/roles";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip middleware for static assets, API routes, and auth pages
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/auth") ||
    pathname.includes(".js") ||
    pathname.includes(".css") ||
    pathname.includes(".ico") ||
    pathname.includes(".png") ||
    pathname.includes(".jpg") ||
    pathname.includes(".jpeg") ||
    pathname.includes(".gif") ||
    pathname.includes(".svg") ||
    pathname === "/access-restricted" ||
    pathname === "/"
  ) {
    return NextResponse.next();
  }

  // Only apply middleware to authenticated routes
  if (
    !pathname.startsWith("/dashboard") &&
    !pathname.startsWith("/transactions") &&
    !pathname.startsWith("/members") &&
    !pathname.startsWith("/customers") &&
    !pathname.startsWith("/transaction_types")
  ) {
    return NextResponse.next();
  }

  const token = await getToken({ req });
  console.log("Middleware - Current Path:", pathname);
  console.log("Middleware - Token exists:", !!token);

  // If no token, redirect to login
  if (!token || !token.sub) {
    console.log("No auth token - redirecting to login");
    return NextResponse.redirect(new URL("/api/auth/signin", req.url));
  }

  try {
    // Check access for the current path using user ID from token
    const accessObject = await checkRole(
      token.sub as string,
      pathname,
      token.accessToken as string,
    );
    console.log("Access check result:", accessObject);

    if (!accessObject) {
      console.log(
        "No access permissions found - redirecting to access restricted",
      );
      return NextResponse.redirect(new URL("/access-restricted", req.url));
    }

    // Allow access if user has any of the required permissions
    if (accessObject.viewer || accessObject.contributor || accessObject.admin) {
      const response = NextResponse.next();
      response.headers.set("x-user-permissions", JSON.stringify(accessObject));
      response.headers.set("x-user-id", token.sub as string);
      response.headers.set("x-access-token", token.accessToken as string);
      return response;
    }

    // If no permissions found, redirect to access restricted page
    console.log("User has no permissions for this endpoint");
    return NextResponse.redirect(new URL("/access-restricted", req.url));
  } catch (error) {
    console.error("Error checking access:", error);
    return NextResponse.redirect(new URL("/access-restricted", req.url));
  }
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/transactions/:path*",
    "/members/:path*",
    "/customers/:path*",
    "/transaction_types/:path*",
  ],
};
