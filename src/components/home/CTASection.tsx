"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Calendar } from "lucide-react";

export default function CTASection() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -14;
    const rY = ((x - centerX) / centerX) * 14;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-32 px-6 lg:px-12 bg-gradient-to-b from-[#000000] via-[#0e0e11] to-[#18181B] border-t border-white/5 overflow-hidden"
    >
      {/* Studio lighting atmospheric blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-white/[0.05] via-zinc-800/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-studio-grid opacity-5 pointer-events-none" />

      {/* Subtle Viewfinder Crosshair in background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.03] rounded-full pointer-events-none flex items-center justify-center">
        <div className="w-[300px] h-[300px] border border-dashed border-white/[0.03] rounded-full" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10 text-center flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 text-xs font-mono text-zinc-300 tracking-wider uppercase mb-8 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Accepting Q3 / Q4 Production Bookings</span>
        </motion.div>

        {/* Large Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.98] max-w-4xl"
          style={{ fontFamily: "var(--font-archivo)" }}
        >
          Ready to Create{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
            Something Extraordinary?
          </span>
        </motion.h2>

        {/* Subtext about booking */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 text-base md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed"
          style={{ fontFamily: "var(--font-space)" }}
        >
          Whether you require a full soundstage shoot, international campaign photography, or bespoke visual identity
          production, our studio is engineered to execute your vision without compromise.
        </motion.p>

        {/* 3D Interactive Glass UI Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 [perspective:1000px]"
        >
          <a
            ref={buttonRef}
            href="mailto:contact@visibilitystudio.com"
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${
                isHovered ? "scale(1.05)" : "scale(1)"
              }`,
              transition: isHovered
                ? "transform 0.1s ease-out, box-shadow 0.3s ease, border-color 0.3s ease"
                : "transform 0.5s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
            }}
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white font-medium text-lg tracking-wide hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:border-white/40 cursor-pointer"
          >
            {/* Subtle inner reflection sheen */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-transparent via-white/[0.04] to-white/10 pointer-events-none" />

            <span className="relative z-10 font-semibold" style={{ fontFamily: "var(--font-archivo)" }}>
              Start Your Project
            </span>
            <ArrowUpRight className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        {/* Studio Contact Cards Footer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-6 text-left"
        >
          <div className="p-6 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-zinc-400 mb-2">
              <Mail className="w-4 h-4 text-zinc-300" />
              <span className="text-xs font-mono uppercase tracking-wider">Inquiries</span>
            </div>
            <p className="text-sm font-medium text-white">hello@visibilitystudio.com</p>
            <p className="text-xs text-zinc-500 mt-1">Direct response within 24 hours</p>
          </div>

          <div className="p-6 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-zinc-400 mb-2">
              <MapPin className="w-4 h-4 text-zinc-300" />
              <span className="text-xs font-mono uppercase tracking-wider">Studio Stage</span>
            </div>
            <p className="text-sm font-medium text-white">Stage 04, Visual Arts District</p>
            <p className="text-xs text-zinc-500 mt-1">4,500 sq ft Cyc Wall &amp; Grid</p>
          </div>

          <div className="p-6 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
            <div className="flex items-center gap-3 text-zinc-400 mb-2">
              <Calendar className="w-4 h-4 text-zinc-300" />
              <span className="text-xs font-mono uppercase tracking-wider">Working Hours</span>
            </div>
            <p className="text-sm font-medium text-white">Mon — Sat: 08:00 – 20:00</p>
            <p className="text-xs text-zinc-500 mt-1">24/7 Production access available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
