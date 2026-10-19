"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight, Aperture } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "Fashion" | "Product" | "Architecture" | "Portrait" | "Editorial" | "Commercial";
  year: string;
  gridSpan: string;
  aspectRatio: string;
  bgGradient: string;
  lensSpec: string;
}

const projects: Project[] = [
  {
    id: "neo-chrome",
    title: "NEO CHROME FW26",
    subtitle: "High-Fashion Editorial & Runway Campaign",
    category: "Fashion",
    year: "2026",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2",
    aspectRatio: "aspect-[3/4] lg:aspect-auto lg:h-full",
    bgGradient: "from-zinc-900 via-zinc-950 to-black",
    lensSpec: "85mm f/1.4 GM",
  },
  {
    id: "lumen-aura",
    title: "LUMEN HOROLOGY",
    subtitle: "Macro Swiss Timepiece Imagery",
    category: "Product",
    year: "2025",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
    bgGradient: "from-neutral-900 via-zinc-900 to-black",
    lensSpec: "90mm f/2.8 Macro",
  },
  {
    id: "monolithic",
    title: "MONOLITHIC CONCRETE",
    subtitle: "Brutalist Architecture Spatial Study",
    category: "Architecture",
    year: "2025",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[4/3]",
    bgGradient: "from-stone-900 via-zinc-900 to-black",
    lensSpec: "24mm f/1.4 Tilt-Shift",
  },
  {
    id: "solitude",
    title: "SOLITUDE IN SHADOW",
    subtitle: "Chiaroscuro Fine Art Portraiture",
    category: "Portrait",
    year: "2025",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[1/1]",
    bgGradient: "from-zinc-800/80 via-zinc-950 to-black",
    lensSpec: "105mm f/1.4 Art",
  },
  {
    id: "velvet-dusk",
    title: "VELVET DUSK EDITORIAL",
    subtitle: "International Magazine Cover Story",
    category: "Editorial",
    year: "2026",
    gridSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    aspectRatio: "aspect-[1/1]",
    bgGradient: "from-slate-900 via-zinc-950 to-black",
    lensSpec: "50mm f/1.2 L",
  },
  {
    id: "aerodynamics",
    title: "AERODYNAMICS EV-X",
    subtitle: "Global Electric Hypercar Reveal Campaign",
    category: "Commercial",
    year: "2026",
    gridSpan: "col-span-1 md:col-span-2 lg:col-span-2",
    aspectRatio: "aspect-[16/9] md:aspect-[21/9]",
    bgGradient: "from-zinc-900 via-zinc-950 to-black",
    lensSpec: "35mm Cine T1.5",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Fashion", "Product", "Architecture", "Portrait", "Editorial", "Commercial"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="relative w-full py-28 px-6 lg:px-12 bg-black border-t border-white/5">
      {/* Background glow accents */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        {/* Section Header with Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-white/60" />
              <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
                Portfolio Showcase
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              Selected Work
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-300 cursor-pointer whitespace-nowrap ${
                  activeFilter === cat
                    ? "bg-white text-black font-semibold shadow-[0_0_15px_rgba(255,255,255,0.25)]"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/5 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Grid */}
        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className={`group relative rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-white/30 transition-colors duration-300 ${project.gridSpan} ${project.aspectRatio}`}
              >
                {/* Visual Canvas Representation with Studio Depth */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} flex items-center justify-center overflow-hidden`}
                >
                  {/* Subtle photographic lens simulation elements */}
                  <div className="absolute inset-0 bg-studio-grid opacity-10 pointer-events-none" />

                  {/* Concentric aperture circle decoration in background */}
                  <div className="w-48 h-48 rounded-full border border-white/[0.06] flex items-center justify-center transition-transform duration-700 group-hover:scale-125">
                    <div className="w-32 h-32 rounded-full border border-dashed border-white/[0.04]" />
                  </div>

                  {/* Camera metadata watermark */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500">
                    <Aperture className="w-3 h-3 text-zinc-600" />
                    <span>{project.lensSpec}</span>
                  </div>

                  <div className="absolute top-4 right-4 text-[10px] font-mono text-zinc-500">
                    {project.year}
                  </div>
                </div>

                {/* Dark gradient overlay that dims and enhances text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Floating View Project Action Icon */}
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                {/* Bottom Content: Category Tag, Title slides up on hover */}
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Category Pill Tag */}
                  <div className="mb-2.5">
                    <span className="inline-block px-3 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-mono uppercase tracking-wider text-zinc-200">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Subtitle with slide-up transform on hover */}
                  <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-zinc-100"
                      style={{ fontFamily: "var(--font-archivo)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs md:text-sm text-zinc-400 font-normal mt-1 leading-relaxed opacity-85 group-hover:opacity-100"
                      style={{ fontFamily: "var(--font-space)" }}
                    >
                      {project.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects link at bottom */}
        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-zinc-900 border border-white/10 text-white font-medium text-sm md:text-base hover:bg-zinc-800 hover:border-white/25 hover:shadow-[0_0_30px_rgba(255,255,255,0.08)] transition-all duration-300"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
