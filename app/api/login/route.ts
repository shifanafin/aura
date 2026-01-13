import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  // Here you would normally validate the user credentials
  // 1. Validate user (mocked)
  if (email !== "user@test.com" || password !== "123456") {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
  (await cookies()).set("sessionId", crypto.randomUUID(), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
  return NextResponse.json({ message: "Login successful" });
}
