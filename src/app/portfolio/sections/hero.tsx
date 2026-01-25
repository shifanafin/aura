"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className={`
        relative min-h-screen flex items-center justify-center
        overflow-hidden
      `}
    >
      <div className="relative z-10 container mx-auto px-5 ">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-8 md:space-y-10 lg:space-y-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 md:space-y-6"
            >
              <h1
                className="
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl
                font-extrabold tracking-tight leading-[0.92]
              "
              >
                <span
                  className="
                  bg-linear-to-r from-primary via-primary/90 to-primary/70
                  bg-clip-text text-transparent
                "
                >
                  Shifana CT
                </span>
              </h1>

              <p
                className="
                text-2xl sm:text-3xl md:text-4xl font-medium
                text-foreground/90
              "
              >
                Full-Stack Developer
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="
                text-lg sm:text-xl md:text-2xl
                text-muted-foreground max-w-3xl mx-auto lg:mx-0
                leading-relaxed
              "
            >
              Building fast, beautiful, and scalable digital experiences with
              modern JavaScript stacks • Currently focused on Next.js,
              TypeScript & creative UI engineering
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start pt-4 md:pt-6"
            >
              <Button
                size="lg"
                className="
                  h-14 px-8 text-lg font-medium rounded-xl
                  shadow-lg shadow-primary/15 hover:shadow-primary/25
                  transition-all duration-400 group
                  bg-linear-to-r from-primary to-primary/90
                  hover:from-primary hover:to-primary/80
                "
              >
                <span className="flex items-center gap-2.5">
                  View Projects
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                </span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="
                  h-14 px-8 text-lg font-medium rounded-xl
                  border-2 backdrop-blur-sm bg-background/60
                  hover:bg-background/80 transition-all duration-300
                "
                asChild
              >
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-2.5"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center lg:justify-end"
          >
            <div
              className="
              relative w-72 sm:w-80 md:w-96 lg:w-150 aspect-square
              rounded-3xl overflow-hidden
              shadow-2xl shadow-black/15 dark:shadow-black/40
              border border-border/40 dark:border-border/30
              backdrop-blur-sm bg-background/40
            "
            >
              <div
                className="
                absolute inset-0 rounded-3xl
                bg-linear-to-tr from-primary/8 via-transparent to-primary/5
                dark:from-primary/12 dark:via-transparent dark:to-primary/8
                pointer-events-none
              "
              />

              <Image
                src="/images/profile-hero.jpg" // ← high-quality portrait recommended
                alt="Shifana – Full-Stack Developer"
                fill
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                priority
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
