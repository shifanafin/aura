'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const description = 'Passionate developer building innovative apps in 2026. Expert in Next.js and UI/UX.';

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image src="/images/hero-bg.jpg" alt="Hero" fill className="object-cover" priority />  {/* Add your image */}
      </motion.div>
      <div className="relative z-10 text-center px-4">
        <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-6xl font-bold mb-4">
          Hi, I'm Shifana
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-2xl mb-8">
          {description}
        </motion.p>
        <Button asChild>
          <a href="/resume.pdf" download className="flex items-center">
            <Download className="mr-2" /> Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
}