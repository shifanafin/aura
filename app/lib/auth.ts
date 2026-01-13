import { cookies } from "next/headers";

export async function getUserFromSession() {
  const sessionId = (await cookies()).get("sessionId")?.value;

  if (!sessionId) return null;

  return {
    id: "user_1",
    email: "user@test.com",
  };
}
