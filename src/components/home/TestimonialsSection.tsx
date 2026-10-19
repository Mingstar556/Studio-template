"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarInitials: string;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Visibility Studio completely redefined our global campaign. Their control over lighting, camera movement, and aesthetic nuances resulted in imagery that increased our engagement metrics by over 300%.",
    name: "Elena Rostova",
    role: "Global Creative Director",
    company: "Aura Maison Luxury",
    avatarInitials: "ER",
    projectType: "Campaign Photography & Film",
  },
  {
    quote:
      "Working with the Visibility crew on our flagship automotive reveal was seamless. From storyboard to the final color grade, the level of precision and visual discipline was second to none.",
    name: "Marcus Vance",
    role: "Head of Brand Marketing",
    company: "Veloce Motors",
    avatarInitials: "MV",
    projectType: "Cinematic Commercial",
  },
  {
    quote:
      "The architectural stills and films they produced captured the raw textures and monolithic volumes of our buildings exactly as conceived. They don't just take photos; they sculpt emotion.",
    name: "Sophia Chen",
    role: "Principal Architect",
    company: "Studio Form & Space",
    avatarInitials: "SC",
    projectType: "Spatial & Architectural Series",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-28 px-6 lg:px-12 bg-black border-t border-white/5">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
              Client Endorsements
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            What Clients Say
          </h2>
          <p
            className="mt-4 text-base md:text-lg text-zinc-400 font-normal leading-relaxed"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Trusted by iconic fashion labels, visionary architects, and forward-thinking enterprises
            to bring ambitious ideas to light.
          </p>
        </div>

        {/* 3 Testimonial Cards in Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="relative bg-[#18181B] border border-white/5 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            >
              {/* Quote Icon Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:border-white/25 transition-colors">
                    <Quote className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-zinc-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                    ))}
                  </div>
                </div>

                {/* Project Badge */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-900 px-2.5 py-1 rounded border border-white/5">
                    {item.projectType}
                  </span>
                </div>

                {/* Quote Text */}
                <p
                  className="text-zinc-300 text-sm md:text-base leading-relaxed mb-8 italic font-light"
                  style={{ fontFamily: "var(--font-space)" }}
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Client Profile Info */}
              <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-zinc-800 border border-white/15 flex items-center justify-center font-mono text-sm font-semibold text-white">
                  {item.avatarInitials}
                </div>
                <div>
                  <h4
                    className="text-sm font-bold text-white tracking-wide"
                    style={{ fontFamily: "var(--font-archivo)" }}
                  >
                    {item.name}
                  </h4>
                  <p
                    className="text-xs text-zinc-400"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {item.role} · <span className="text-zinc-300 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
