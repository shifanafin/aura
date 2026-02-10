import { auth } from "@/lib/auth";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aura Portfolio",
  description: "Personal portfolio with admin dashboard",
};
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 1. Check if logged in
  //   if (!session?.user) {
  //     redirect("/dashboard/login");
  //   }

  // 2. Role-based access (Optional: Restrict dashboard to ADMIN only)
  // if (session.user.role !== "ADMIN") {
  //   redirect("/"); // or show "Access Denied"
  // }

  return (
    <main className="flex-1 overflow-y-auto bg-background p-6">{children}</main>
  );
}
