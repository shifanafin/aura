import { Navbar } from "@/portfolio/components/Navbar"
import { ThemeProvider } from "next-themes"



export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {   
    return (
      <html lang="en" suppressHydrationWarning >
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <main>{children}</main>
    </ThemeProvider>
  </body>
    </html>)}