"use client";

import Link from "next/link";
import {
  Home,
  Code2,
  Briefcase,
  School,
  DownloadCloud,
  Rocket,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { motion, easeOut, easeInOut } from "framer-motion";
import { useEffect, useState } from "react";

export function Navbar({ className }: { className: string }) {
  const navItems = [
    { href: "#hero", label: "Home", icon: Home },
    { href: "#skills", label: "Skills", icon: Code2 },
    { href: "#experience", label: "Experience", icon: Briefcase },
    { href: "#projects", label: "Projects", icon: Rocket },
    { href: "#education", label: "Education", icon: School },
  ];
  const [activeSection, setActiveSection] = useState<string>("hero");
  // section detection
  useEffect(() => {
    const activeSectionId = new IntersectionObserver(
      (entries) => {
        entries?.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.01, rootMargin: "-80px 0px -80% 0px" },
    );
    // Observe all sections
    document.querySelectorAll("section[id]")?.forEach((section) => {
      activeSectionId.observe(section);
    });

    return () => activeSectionId.disconnect();
  }, []);
  // Animation variants for each icon
  const iconVariants = {
    rest: {
      scale: 1,
      rotate: 0,
      y: 0,
      transition: { duration: 0.4, ease: easeOut },
    },
    hover: {
      scale: 1.35,
      rotate: [0, -8, 8, -4, 0],
      y: -6,
      transition: {
        scale: { duration: 0.3 },
        rotate: {
          duration: 0.6,
          ease: easeInOut,
          times: [0, 0.2, 0.5, 0.8, 1],
        },
        y: { duration: 0.25, ease: easeOut },
      },
    },
    active: {
      scale: 1.25,
      y: -4,
      rotate: 0,
      transition: { duration: 0.35, stiffness: 300, damping: 15 },
    },
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md shadow-md z-50 py-4",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link href="/" className="text-2xl font-bold">
            Portfolio
          </Link>
        </motion.div>

        {/* Nav items */}
        <div className="flex space-x-28">
          {navItems?.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group relative flex flex-col items-center"
              >
                <motion.div
                  className={cn(
                    "p-3 rounded-full transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground group-hover:text-foreground",
                  )}
                  variants={iconVariants}
                  initial="rest"
                  whileHover="hover"
                  animate={isActive ? "active" : "rest"}
                >
                  <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                </motion.div>
                {/* <span
                  className={cn(
                    "text-xs mt-1.5 font-medium transition-colors",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground group-hover:text-foreground",
                  )}
                >
                  {item.label}
                </span> */}
              </Link>
            );
          })}
        </div>

        {/* ----------------Theme toggle------------ */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
