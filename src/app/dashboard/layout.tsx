// src/app/(dashboard)/layout.tsx
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  // 1. Check if logged in
  //   if (!session?.user) {
  //     redirect("/dashboard/login");
  //   }

  // 2. Role-based access (Optional: Restrict dashboard to ADMIN only)
  // if (session.user.role !== "ADMIN") {
  //   redirect("/"); // or show "Access Denied"
  // }

  return (
    <SidebarProvider>
      <div className="flex h-screen">
        {/* Beautiful Sidebar */}
        <AppSidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Top Header with User Info + Logout */}
          {/* <DashboardHeader user={session.user} /> */}

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-background p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
