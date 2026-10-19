"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassButton from "@/components/ui/GlassButton";

type Category =
  | "All"
  | "Fashion"
  | "Product"
  | "Architecture"
  | "Portrait"
  | "Editorial"
  | "Commercial";

interface Project {
  id: string;
  title: string;
  category: Category;
  year: string;
  aspect: "aspect-[3/4]" | "aspect-[4/3]";
  client: string;
  gear: string;
  description: string;
  accentGradient: string;
  focalLength: string;
  aperture: string;
  iso: string;
}

const projects: Project[] = [
  {
    id: "vogue-noir",
    title: "Vogue Noir",
    category: "Fashion",
    year: "2024",
    aspect: "aspect-[3/4]",
    client: "Vogue Scandinavia",
    gear: "Hasselblad H6D-100c",
    focalLength: "100mm",
    aperture: "f/2.2",
    iso: "ISO 64",
    description:
      "A high-contrast monochrome exploration of sculptural silhouettes and light gradients in Studio A.",
    accentGradient: "from-zinc-900 via-neutral-900 to-black",
  },
  {
    id: "aura-chronograph",
    title: "Aura Chronograph",
    category: "Product",
    year: "2024",
    aspect: "aspect-[4/3]",
    client: "Audemars Piguet",
    gear: "Phase One IQ4 150MP",
    focalLength: "120mm Macro",
    aperture: "f/8.0",
    iso: "ISO 50",
    description:
      "Micro-optical focus-stacking capture revealing hand-beveled tourbillon mechanics beneath sapphire crystal.",
    accentGradient: "from-amber-950/40 via-zinc-900 to-black",
  },
  {
    id: "brutalist-monolith",
    title: "Brutalist Monolith",
    category: "Architecture",
    year: "2023",
    aspect: "aspect-[4/3]",
    client: "Foster & Partners",
    gear: "Leica S3 Medium Format",
    focalLength: "30mm Summarit-S",
    aperture: "f/11",
    iso: "ISO 100",
    description:
      "Precision perspective correction documenting the interplay of raw fluted concrete and morning raking light.",
    accentGradient: "from-slate-900/60 via-zinc-900 to-black",
  },
  {
    id: "elysian-solitude",
    title: "Elysian Solitude",
    category: "Portrait",
    year: "2024",
    aspect: "aspect-[3/4]",
    client: "Vanity Fair",
    gear: "Sony A1 Cine Edition",
    focalLength: "85mm GM II",
    aperture: "f/1.2",
    iso: "ISO 100",
    description:
      "Intimate medium format portraiture utilizing Broncolor Para 222FB diffusion for painterly skin falloff.",
    accentGradient: "from-stone-900 via-zinc-900 to-black",
  },
  {
    id: "metropolis-dusk",
    title: "Metropolis Dusk",
    category: "Editorial",
    year: "2023",
    aspect: "aspect-[4/3]",
    client: "Numéro Homme",
    gear: "ARRI Alexa Mini LF",
    focalLength: "40mm Zeiss Supreme",
    aperture: "f/1.5",
    iso: "ISO 800",
    description:
      "Cinematic night exterior narrative infused with sodium-vapor styling and anamorphic streak filtration.",
    accentGradient: "from-cyan-950/40 via-zinc-900 to-black",
  },
  {
    id: "titan-hypercar",
    title: "Titan Hypercar",
    category: "Commercial",
    year: "2024",
    aspect: "aspect-[3/4]",
    client: "Porsche Motorsport",
    gear: "RED V-Raptor XL 8K",
    focalLength: "50mm Cooke Anamorphic",
    aperture: "f/2.8",
    iso: "ISO 250",
    description:
      "40-foot continuous softbox rig sweeping along carbon-fiber bodywork inside Studio C soundstage.",
    accentGradient: "from-rose-950/30 via-zinc-900 to-black",
  },
  {
    id: "luminary-silk",
    title: "Luminary Silk",
    category: "Fashion",
    year: "2024",
    aspect: "aspect-[4/3]",
    client: "Saint Laurent",
    gear: "Hasselblad 907X 50C",
    focalLength: "55mm f/2.5",
    aperture: "f/4.0",
    iso: "ISO 100",
    description:
      "Dynamic movement capture of flying silk textiles illuminated by 1/8000s high-speed strobe bursts.",
    accentGradient: "from-purple-950/30 via-zinc-900 to-black",
  },
  {
    id: "zenith-acoustics",
    title: "Zenith Acoustics",
    category: "Product",
    year: "2023",
    aspect: "aspect-[3/4]",
    client: "Sennheiser Pro",
    gear: "Canon EOS R5 C",
    focalLength: "100mm Macro RF",
    aperture: "f/5.6",
    iso: "ISO 100",
    description:
      "Industrial design still life highlighting laser-etched aluminum grilles and magnetic fluid dampening.",
    accentGradient: "from-zinc-800 via-neutral-900 to-black",
  },
  {
    id: "concrete-shadow",
    title: "Concrete & Shadow",
    category: "Architecture",
    year: "2024",
    aspect: "aspect-[3/4]",
    client: "Tadao Ando Foundation",
    gear: "Phase One XT",
    focalLength: "Rodenstock 32mm",
    aperture: "f/9.0",
    iso: "ISO 50",
    description:
      "Geometry and negative space in minimalist monolithic architecture under harsh geometric sunlight.",
    accentGradient: "from-neutral-800 via-zinc-900 to-black",
  },
  {
    id: "prism-persona",
    title: "Prism & Persona",
    category: "Portrait",
    year: "2023",
    aspect: "aspect-[4/3]",
    client: "Harper's Bazaar",
    gear: "Fujifilm GFX 100 II",
    focalLength: "GF 110mm f/2 R LM",
    aperture: "f/2.0",
    iso: "ISO 125",
    description:
      "Optical diffraction prisms splitting cold-cathode tube highlights across avant-garde editorial styling.",
    accentGradient: "from-indigo-950/40 via-zinc-900 to-black",
  },
  {
    id: "cybernetic-horizon",
    title: "Cybernetic Horizon",
    category: "Editorial",
    year: "2024",
    aspect: "aspect-[3/4]",
    client: "Wired Magazine",
    gear: "Phantom Flex 4K",
    focalLength: "Master Anamorphic 60mm",
    aperture: "f/1.9",
    iso: "ISO 640",
    description:
      "High-speed 1000fps capture of crystalline liquid splashing across iridescent carbon compounds.",
    accentGradient: "from-emerald-950/30 via-zinc-900 to-black",
  },
  {
    id: "apex-kinetic",
    title: "Apex Kinetic",
    category: "Commercial",
    year: "2024",
    aspect: "aspect-[4/3]",
    client: "Rimowa",
    gear: "ARRI Alexa 35",
    focalLength: "Signature Prime 40mm",
    aperture: "f/2.8",
    iso: "ISO 400",
    description:
      "Global luggage launch campaign captured on custom motion-control rig with atmospheric smoke layering.",
    accentGradient: "from-sky-950/30 via-zinc-900 to-black",
  },
];

const categories: Category[] = [
  "All",
  "Fashion",
  "Product",
  "Architecture",
  "Portrait",
  "Editorial",
  "Commercial",
];

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-[#fafafa] relative pb-28">
        {/* Subtle background ambient studio light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-16">
            <SectionHeading
              badge="PORTFOLIO"
              title="Our Work"
              subtitle="A curated collection of our finest projects"
              align="center"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center mb-14 overflow-x-auto py-2 px-4 no-scrollbar">
            <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[#18181B] border border-white/10 backdrop-blur-xl">
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-4 sm:px-5 py-2 text-xs sm:text-sm font-medium tracking-wide rounded-full transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-black font-semibold"
                        : "text-neutral-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeFilterPill"
                        className="absolute inset-0 bg-white rounded-full shadow-lg shadow-white/10"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Project Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92, y: 15 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative"
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className={`relative w-full ${project.aspect} bg-[#18181B] rounded-2xl overflow-hidden border border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-xl shadow-black/60 cursor-pointer flex flex-col justify-end p-6`}
                  >
                    {/* Background abstract studio lighting artwork */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.accentGradient} opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700`}
                    />

                    {/* Camera lens crosshair grid pattern */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                    {/* Studio framing corners */}
                    <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-white/30 group-hover:border-white/70 transition-colors" />
                    <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/30 group-hover:border-white/70 transition-colors" />
                    <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/30 group-hover:border-white/70 transition-colors" />
                    <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-white/30 group-hover:border-white/70 transition-colors" />

                    {/* Top metadata tags */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between px-3 z-10">
                      <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-mono text-white/50 bg-black/40 px-2 py-0.5 rounded backdrop-blur-sm">
                        {project.year}
                      </span>
                    </div>

                    {/* Optical center circle watermark */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/10 group-hover:border-white/25 group-hover:scale-110 transition-all duration-500 flex items-center justify-center pointer-events-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white/70 transition-colors" />
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />

                    {/* Card Content with Slide-Up Hover Effect */}
                    <div className="relative z-20 flex flex-col transition-transform duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center gap-2 mb-1.5 text-xs text-neutral-400 font-mono">
                        <span>{project.gear}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold font-heading text-white tracking-tight leading-tight group-hover:text-white transition-colors">
                        {project.title}
                      </h3>

                      {/* View Project text reveals on hover */}
                      <div className="overflow-hidden mt-3 max-h-0 group-hover:max-h-12 transition-all duration-300 ease-in-out">
                        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-xs font-mono text-white">
                          <span className="flex items-center gap-1 tracking-wider uppercase">
                            View Project
                          </span>
                          <span className="p-1 rounded-full bg-white text-black">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.92, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.92, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-2xl bg-[#18181B] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/10 text-white border border-white/15">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {selectedProject.year}
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-neutral-400 text-sm mb-6 font-body leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Technical Specs Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-black/40 border border-white/10 mb-6 font-mono text-xs">
                  <div>
                    <span className="text-neutral-500 block mb-1">CLIENT</span>
                    <span className="text-white font-medium">
                      {selectedProject.client}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">CAMERA</span>
                    <span className="text-white font-medium">
                      {selectedProject.gear}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">OPTICS</span>
                    <span className="text-white font-medium">
                      {selectedProject.focalLength} • {selectedProject.aperture}
                    </span>
                  </div>
                  <div>
                    <span className="text-neutral-500 block mb-1">SENSITIVITY</span>
                    <span className="text-white font-medium">
                      {selectedProject.iso}
                    </span>
                  </div>
                </div>

                {/* Modal CTA */}
                <div className="flex items-center justify-end gap-3">
                  <GlassButton
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </GlassButton>
                  <GlassButton
                    variant="glow"
                    size="sm"
                    href="/contact"
                    icon={<ArrowUpRight className="w-3.5 h-3.5" />}
                  >
                    Book Similar Shoot
                  </GlassButton>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </PageTransition>
  );
}
