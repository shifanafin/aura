'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

export function Projects() {
  const projects:Project[] = [
    { title: 'Project 1', image: '/images/project1.jpg', description: 'Cool app.', stack: ['Next.js', 'Tailwind'], url: 'https://example.com' },
    { title: 'Project 2', image: '/images/project1.jpg', description: 'Cool app.', stack: ['Next.js', 'Tailwind'], url: 'https://example.com' },
    { title: 'Project 3', image: '/images/project1.jpg', description: 'Cool app.', stack: ['Next.js', 'Tailwind'], url: 'https://example.com' },
    { title: 'Project 4', image: '/images/project1.jpg', description: 'Cool app.', stack: ['Next.js', 'Tailwind'], url: 'https://example.com' },
  ];

  return (
    <section id="projects" className="p-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects?.map((proj) => (
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} key={proj.title}>
            <Card>
              <CardHeader>
                <Image src={proj.image} alt={proj.title} width={50} height={50} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{proj.title}</CardTitle>
                <CardDescription>{proj.description}</CardDescription>
                <div className="flex space-x-2 mt-2">
                  {proj.stack.map((tech) => <span key={tech} className="badge bg-primary text-white px-2 py-1 rounded">{tech}</span>)}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <a href={proj.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" /> View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}