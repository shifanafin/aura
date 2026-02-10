import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Briefcase, School, Code } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { SessionProvider } from "next-auth/react";

export default async function DashboardPage() {
  // You can fetch real stats from Prisma here
  const stats = [
    { label: "Total Skills", value: "12", icon: Code },
    { label: "Projects", value: "8", icon: Briefcase },
    { label: "Education", value: "3", icon: School },
    { label: "Users", value: "2", icon: Users },
  ];

  return (
    <SessionProvider>
      <SidebarProvider>
        <div className="flex h-screen">
          {/* Beautiful Sidebar */}
          <AppSidebar />
          {/* <div className="flex-1 flex flex-col overflow-hidden"> */}
          {/* Top Header with User Info + Logout */}
          {/* <DashboardHeader user={session.user} /> */}
          <div>
            <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-medium">
                      {stat.label}
                    </CardTitle>
                    <stat.icon className="h-5 w-5 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        {/* </div> */}
      </SidebarProvider>
    </SessionProvider>
  );
}
