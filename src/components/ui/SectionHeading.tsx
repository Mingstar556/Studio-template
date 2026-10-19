"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";

export interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  badge?: string;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  badge,
  className = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {badge && (
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest uppercase text-white/70 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
            {badge}
          </span>
        </motion.div>
      )}

      <motion.h2
        variants={itemVariants}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white font-heading leading-[1.08]"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={`text-lg text-neutral-400 mt-4 max-w-2xl font-body leading-relaxed ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
