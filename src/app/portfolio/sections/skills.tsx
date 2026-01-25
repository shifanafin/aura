"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPrisma,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
} from "react-icons/si";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

// ────────────────────────────────────────────────
//  Type & Data
// ────────────────────────────────────────────────

type FloatingSkill = {
  name: string;
  icon: React.ReactNode;
  color?: string;
};

const SKILLS: FloatingSkill[] = [
  { name: "Next.js", icon: <SiNextdotjs size={38} />, color: "#F24E1E" },
  { name: "React", icon: <SiReact size={38} />, color: "#61DAFB" },
  { name: "TypeScript", icon: <SiTypescript size={38} />, color: "#3178C6" },
  { name: "Tailwind", icon: <SiTailwindcss size={38} />, color: "#38BDF8" },
  { name: "JavaScript", icon: <SiJavascript size={38} />, color: "#F7DF1E" },
  { name: "Node.js", icon: <SiNodedotjs size={38} />, color: "#339933" },
  { name: "Prisma", icon: <SiPrisma size={38} />, color: "#2D3748" },
  { name: "PostgreSQL", icon: <SiPostgresql size={38} />, color: "#4169E1" },
  { name: "Git", icon: <SiGit size={38} />, color: "#F05032" },
  { name: "GitHub", icon: <SiGithub size={38} />, color: "#181717" },
  { name: "Docker", icon: <SiDocker size={38} />, color: "#2496ED" },
  { name: "Figma", icon: <SiFigma size={38} />, color: "#F24E1E" },
];

// ────────────────────────────────────────────────
//  Helpers
// ────────────────────────────────────────────────

function getRandomPosition() {
  const x = Math.random() * 70 + 1;
  const y = Math.random() * 70 + 1;
  return { x, y };
}

function getRandomDelay() {
  return Math.random() * 2 + 0.4;
}

export function Skills() {
  const [positions, setPositions] = useState(() =>
    SKILLS?.map(() => getRandomPosition()),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(SKILLS?.map(() => getRandomPosition()));
    }, 4800);

    return () => clearInterval(interval);
  }, []);

  // Memoize rendered items so motion doesn't re-create unnecessarily
  const skillElements = useMemo(
    () =>
      SKILLS?.map((skill, index) => {
        const { x, y } = positions[index];

        return (
          <motion.div
            key={skill.name}
            className={cn(
              "absolute flex flex-col items-center gap-2 pointer-events-none",
              "text-muted-foreground hover:text-foreground transition-colors",
            )}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              x: `${x}vw`,
              y: `${y}vh`,
            }}
            transition={{
              duration: 4.2,
              ease: [0.43, 0.13, 0.23, 0.96],
              delay: getRandomDelay(),
            }}
            whileHover={{
              scale: 1.25,
              y: -12,
              transition: { duration: 0.35, type: "spring", stiffness: 400 },
            }}
          >
            <div
              className={cn(
                "p-4.5 rounded-2xl",
                "bg-background/70 backdrop-blur-md",
                "border border-border/50 shadow-md",
                "hover:shadow-lg hover:scale-[1.04] transition-all duration-300",
              )}
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        );
      }),
    [positions],
  );

  return (
    <section id="skills" className="py-6 md:py-10">
      <div className="container px-5 sm:px-6 lg:px-8 mx-auto">
        <h2
          className="
          text-4xl sm:text-5xl font-bold tracking-tight
          text-center mb-5
        "
        >
          Skills{" "}
        </h2>

        <div
          className="
          relative w-full 
          h-[80vh]  overflow-hidden
        "
        >
          {skillElements}
        </div>
      </div>
    </section>
  );
}
