'use client'


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Experience } from '../types';

export function Experience() {
  const experiences :Experience[]= [
    { company: 'Company A', logo: '/images/company-a.png', role: 'Developer', period: '2024-2026', description: 'Built apps.' },
    { company: 'Company b', logo: '/images/company-a.png', role: 'Developer', period: '2024-2026', description: 'Built apps.' },
    { company: 'Company c', logo: '/images/company-a.png', role: 'Developer', period: '2024-2026', description: 'Built apps.' },
    { company: 'Company d', logo: '/images/company-a.png', role: 'Developer', period: '2024-2026', description: 'Built apps.' },
    { company: 'Company e', logo: '/images/company-a.png', role: 'Developer', period: '2024-2026', description: 'Built apps.' },
    { company: 'Company f', logo: '/images/company-a.png', role: 'Developer', period: '2024-2026', description: 'Built apps.' },
    { company: 'Company g', logo: '/images/company-a.png', role: 'Developer', period: '2024-2026', description: 'Built apps.' },
    { company: 'Company h', logo: '/images/company-a.png', role: 'Developer', period: '2024-2026', description: 'Built apps.' },
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Experience</h2>
      <Accordion type="single" collapsible className="max-w-3xl mx-auto">
        {experiences.map((exp, i) => (
          <AccordionItem key={exp.company} value={`item-${i}`}>
            <AccordionTrigger className="flex items-center">
              <Image src={exp.logo} alt={exp.company} width={40} height={40} className="mr-4" />
              {exp.company} - {exp.role} ({exp.period})
            </AccordionTrigger>
            <AccordionContent>
              <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} transition={{ duration: 0.5 }}>
                {exp.description}
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}