"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Experience } from "../types";
import { Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export function Experience() {
  const experiences: Experience[] = [
    {
      company: "TechCorp FZ-LLC",
      logo: "/images/logos/techcorp.png",
      role: "Senior Full-Stack Developer",
      period: "Jan 2024 – Present",
      location: "Dubai, UAE",
      description: [
        "Led development of high-traffic SaaS platform using Next.js 14+ & TypeScript",
        "Reduced page load time by 62% through code-splitting, image optimization & caching strategy",
        "Mentored 4 junior developers and established component library + design system",
        "Implemented real-time features with WebSockets & Server Actions",
      ],
    },
    {
      company: "FinTech Innovations",
      logo: "/images/logos/fintech.png",
      role: "Frontend Engineer",
      period: "Mar 2022 – Dec 2023",
      location: "Dubai, UAE",
      description: [
        "Built responsive dashboard used by 120k+ monthly active users",
        "Migrated legacy React codebase to Next.js App Router (40% bundle size reduction)",
        "Integrated complex charting library (Recharts + D3) for financial visualizations",
        "Collaborated with UX team to ship pixel-perfect interfaces",
      ],
    },
    {
      company: "StartupX",
      logo: "/images/logos/startupx.png",
      role: "Full-Stack Developer",
      period: "Jun 2020 – Feb 2022",
      location: "Remote / Dubai",
      description: [
        "Developed MVP e-commerce platform from scratch (Next.js + Prisma + PostgreSQL)",
        "Implemented secure payment gateway integration (Stripe)",
        "Achieved 99.9% uptime during peak launch period",
        "Set up CI/CD pipeline with GitHub Actions & Vercel",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div className="container px-5 sm:px-6 lg:px-8 mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            3+ years building scalable web applications in fast-paced
            environments
          </p>
        </motion.div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border/60 transform -translate-x-1/2" />

          <div className="space-y-16 md:space-y-8">
            {experiences?.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={cn(
                    "relative flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center",
                    isEven ? "md:flex-row" : "md:flex-row-reverse",
                  )}
                >
                  <div className="absolute left-0 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className="
                      w-5 h-5 rounded-full bg-primary/10 border-4 border-primary
                      shadow-lg shadow-primary/20 flex items-center justify-center
                    "
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                    </div>
                  </div>

                  <div
                    className={cn(
                      "w-full md:w-5/12",
                      "bg-card border border-border/50 rounded-2xl overflow-hidden",
                      "shadow-xl shadow-black/5 dark:shadow-black/30",
                      "hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500",
                      isEven ? "md:mr-auto" : "md:ml-auto",
                    )}
                  >
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-5">
                        <div
                          className="
                          w-14 h-14 md:w-16 md:h-16 rounded-xl overflow-hidden
                          bg-background/80 backdrop-blur-sm border border-border/40
                          shrink-0 shadow-sm
                        "
                        >
                          <Image
                            src={exp.logo}
                            alt={exp.company}
                            width={64}
                            height={64}
                            className="object-contain p-2"
                          />
                        </div>

                        <div>
                          <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                            {exp.company}
                          </h3>
                          <p className="text-primary font-medium">{exp.role}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                      <ul className="space-y-3 text-muted-foreground">
                        {exp?.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-1.5 block w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
