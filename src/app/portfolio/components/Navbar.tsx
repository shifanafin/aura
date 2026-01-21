'use client';  

import Link from 'next/link';
import { Home, Code2, Briefcase, School, DownloadCloud } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

export function Navbar({className}:{className:string}) {
  return (
    <nav className={cn('fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md shadow-md z-50 py-4',className)}>
      <div className="max-w-10/12 mx-auto flex justify-between items-center px-4">
        <Link href="/portfolio" className="text-4xl font-bold">Portfolio</Link>
        <div className="flex space-x-15">
          <Link href="#hero" className="flex items-center"><Home className="mr-2" /> Home</Link>
          <Link href="#skills"><Code2 className="mr-2" /> Skills</Link>
          <Link href="#experience"><Briefcase className="mr-2" /> Experience</Link>
          <Link href="#projects"><Briefcase className="mr-2" /> Projects</Link>
          <Link href="#education"><School className="mr-2" /> Education</Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}