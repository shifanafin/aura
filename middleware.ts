import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const session = req.cookies.get("sessionId");

  if (!session && req.nextUrl.pathname.startsWith("/cart")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}
