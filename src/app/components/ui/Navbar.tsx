import Link from "next/link";
import {Home, Code, Briefcase, School, Download, BookOpen} from 'lucide-react'


export function Navbar({className}: {className?: string}) {
  return (
    <nav className={`bg-gray-800 p-4 ${className || ''}`}>
      <div className="container mx-auto">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href='/skills' className="ml-4 text-white hover:text-gray-300 flex items-center">
          <Code className="mr-1 h-4 w-4"/> Skills
        </Link>
      </div>
    </nav>
  );
}


export function MobileNavbar({className}: {className?: string}) {
  return (
    <nav className={`bg-red-800 p-4 ${className || ''}`}>
      <div className="container mx-auto">
        <Link href="/" className="text-white hover:text-gray-300">
          Home
        </Link>
        <Link href='/skills' className="ml-4 text-white hover:text-gray-300 flex items-center">
          <Code className="mr-1 h-4 w-4"/> Skills
        </Link>
      </div>
    </nav>
  );
}