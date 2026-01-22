'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function Education() {
  const educations= [
    { institution: 'University X', image: '/images/uni-x.jpg', degree: 'BS Computer Science', year: '2020-2024', description: 'Studied AI.' },
  ];

  return (
    <section id="education" className="py-10 px-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Education</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {educations.map((edu, i) => (
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.2 }} key={edu.institution}>
            <Card>
              <CardHeader>
                <Image src={edu.image} alt={edu.institution} width={300} height={200} className="rounded-t-lg" />
              </CardHeader>
              <CardContent>
                <CardTitle>{edu.institution} - {edu.degree} ({edu.year})</CardTitle>
                <p>{edu.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}