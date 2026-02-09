// src/types/next-auth.d.ts

import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** Custom field: user ID from DB */
      id: string;
      /** Custom field: role from Prisma enum */
      role: "ADMIN" | "USER";
    } & DefaultSession["user"];
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * as well as the `user` returned by the `authorize` function in Credentials
   */
  interface User extends DefaultUser {
    id: string;
    role: "ADMIN" | "USER";
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends DefaultJWT {
    id: string;
    role: "ADMIN" | "USER";
  }
}
