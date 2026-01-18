import { Navbar,MobileNavbar } from "@/components/ui/Navbar"



export default function PortfolioLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {   
    return (
    <div className="min-h-screen">
      <Navbar className=" md:block"/>
    <main>{children}</main>
    <MobileNavbar/>
    
  </div>)}