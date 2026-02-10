// src/app/api/auth/[...nextauth]/route.ts

// This is the ONLY file needed for NextAuth v5 to work
// It forwards all /api/auth/* requests to your auth config

import { handlers } from "@/lib/auth";

export const { GET, POST } = handlers;
