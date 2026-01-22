'use client';  

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SiNextdotjs, SiTailwindcss, SiReact, SiTypescript } from 'react-icons/si';  
import { Skill } from '../types';

export function Skills() {
  const skills :Skill[]= [
    { name: 'Next.js', icon: <SiNextdotjs size={48} /> },
    { name: 'Tailwind', icon: <SiTailwindcss size={48} /> },
  ];

  const [positions, setPositions] = useState(skills?.map(() => ({ x: Math.random() * 100 - 30, y: Math.random() * 80 - 20 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(skills?.map(() => ({ x: Math.random() * 100 - 10, y: Math.random() * 60 - 10 })));
    }, 3000);
    return () => clearInterval(interval);
  }, [skills]);



  return (
    <section id="skills" className="py-10 px-30 text-center">
      <h2 className="text-4xl font-bold mb-8">Skills</h2>
      <div className="relative h-96">
        {skills.map((skill, i) => (
          <motion.div
            key={skill?.name}
            className="absolute"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, x: positions[i].x + 'vw', y: positions[i].y + 'vh' }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            {skill.icon}
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}