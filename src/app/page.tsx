"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Camera, Film, Layers } from "lucide-react";
import GlassButton from "@/components/ui/GlassButton";
import PageTransition from "@/components/ui/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";

const featuredProjects = [
  {
    title: "Vogue Noir",
    category: "Fashion Editorial",
    year: "2024",
    client: "Vogue Scandinavia",
    gear: "Hasselblad H6D-100c",
    gradient: "from-zinc-900 via-neutral-900 to-black",
  },
  {
    title: "Aura Chronograph",
    category: "Commercial Product",
    year: "2024",
    client: "Audemars Piguet",
    gear: "Phase One IQ4 150MP",
    gradient: "from-amber-950/40 via-zinc-900 to-black",
  },
  {
    title: "Titan Hypercar",
    category: "Commercial Film",
    year: "2024",
    client: "Porsche Motorsport",
    gear: "RED V-Raptor XL 8K",
    gradient: "from-rose-950/30 via-zinc-900 to-black",
  },
];

const studioHighlights = [
  {
    name: "Studio A",
    type: "Portrait & Fashion",
    size: "2,500 sq ft",
    desc: "Two-wall cyclorama with automated Profoto Pro-11 strobe ceiling grid.",
    icon: Camera,
  },
  {
    name: "Studio B",
    type: "Commercial Still Life",
    size: "1,800 sq ft",
    desc: "Motorized optical turntables and micro-focus stacking workstations.",
    icon: Layers,
  },
  {
    name: "Studio C",
    type: "Cinematic Soundstage",
    size: "4,000 sq ft",
    desc: "24ft sound-dampened ceiling with drive-in vehicle ramp and 10-ton truss.",
    icon: Film,
  },
];

const clients = [
  "BALENCIAGA",
  "LEICA",
  "VOGUE",
  "AUDEMARS PIGUET",
  "PORSCHE",
  "RIMOWA",
];

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-[#fafafa] relative overflow-hidden">
        {/* Ambient Studio Lighting Glows */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-white/[0.08] via-white/[0.02] to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="absolute top-40 -left-40 w-96 h-96 bg-zinc-800/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute top-60 -right-40 w-96 h-96 bg-zinc-800/20 blur-3xl rounded-full pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-16 pb-24 md:pt-24 md:pb-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Studio Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-widest text-white/80 bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span>PREMIER NEW YORK PRODUCTION SANCTUARY</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black font-heading tracking-tight text-white max-w-5xl leading-[1.02]"
            >
              WHERE LIGHT MEETS SCULPTURAL FORM.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 text-lg sm:text-xl text-neutral-400 font-body max-w-2xl leading-relaxed"
            >
              Visibility Studio is a premier dark-themed shooting sanctuary engineered for haute couture campaigns, luxury commercial still life, and high-speed cinema productions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <GlassButton
                variant="primary"
                size="lg"
                href="/work"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore Our Work
              </GlassButton>
              <GlassButton
                variant="glow"
                size="lg"
                href="/contact"
              >
                Book Studio Session
              </GlassButton>
            </motion.div>

            {/* Viewfinder Telemetry Banner */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.45 }}
              className="mt-16 w-full max-w-4xl p-4 rounded-2xl bg-[#18181B]/70 border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-neutral-400"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>3 STAGES OPERATIONAL</span>
              </div>
              <div>PHASE ONE 150MP &bull; ARRI 35</div>
              <div>PROFOTO PRO-11 DMX GRID</div>
              <div className="text-white">DOLBY VISION CERTIFIED</div>
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Showcase */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeading
              badge="SELECTED PORTFOLIO"
              title="Iconic Campaigns"
              subtitle="Precision-crafted visual narratives for the world's most exacting luxury and fashion houses."
              align="left"
            />
            <GlassButton
              variant="outline"
              size="sm"
              href="/work"
              icon={<ArrowUpRight className="w-4 h-4" />}
            >
              View Full Archive (12 Projects)
            </GlassButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="group relative"
              >
                <Link
                  href="/work"
                  className="block relative aspect-[3/4] rounded-2xl bg-[#18181B] border border-white/10 overflow-hidden p-6 flex flex-col justify-end group-hover:border-white/30 transition-all duration-500 shadow-xl"
                >
                  {/* Background abstract gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70 group-hover:scale-105 transition-transform duration-700`}
                  />

                  {/* Crosshair accents */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/40" />
                  <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/40" />
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/40" />
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/40" />

                  {/* Gradient shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block mb-1">
                      {project.category} &bull; {project.year}
                    </span>
                    <h3 className="text-2xl font-bold font-heading text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10 text-xs font-mono text-neutral-400">
                      <span>{project.client}</span>
                      <span className="text-white flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Explore <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Studio Spaces Highlights */}
        <section className="py-24 bg-[#0a0a0a] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <SectionHeading
                badge="STAGES & INFRASTRUCTURE"
                title="Three Distinct Production Stages"
                subtitle="Engineered for silence, power, and optical precision."
                align="center"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {studioHighlights.map((studio, idx) => {
                const IconComponent = studio.icon;
                return (
                  <motion.div
                    key={studio.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="p-8 rounded-2xl bg-[#18181B] border border-white/10 hover:border-white/25 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-mono text-neutral-400">
                          {studio.size}
                        </span>
                      </div>
                      <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                        {studio.type}
                      </span>
                      <h3 className="text-2xl font-bold font-heading text-white mb-3">
                        {studio.name}
                      </h3>
                      <p className="text-sm text-neutral-400 font-body leading-relaxed">
                        {studio.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                      <Link
                        href="/background"
                        className="text-xs font-mono text-white inline-flex items-center gap-1 hover:underline"
                      >
                        Technical Specs <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Roster Banner */}
        <section className="py-16 border-t border-white/10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 shrink-0">
              TRUSTED WORLDWIDE BY
            </span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {clients.map((brand) => (
                <span
                  key={brand}
                  className="text-sm font-heading font-bold tracking-widest text-neutral-500 hover:text-white transition-colors uppercase"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#18181B] border border-white/15 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3 block">
                NOW ACCEPTING BOOKINGS FOR 2024 &bull; 2025
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold font-heading text-white mb-6">
                Ready to frame your next campaign?
              </h2>
              <p className="text-neutral-400 font-body text-base mb-8">
                Connect with our production producers to request rate sheets, lock down stage calendar dates, or review equipment rentals.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <GlassButton
                  variant="primary"
                  size="lg"
                  href="/contact"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Inquire Now
                </GlassButton>
                <GlassButton
                  variant="outline"
                  size="lg"
                  href="/about"
                >
                  About Our Philosophy
                </GlassButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
