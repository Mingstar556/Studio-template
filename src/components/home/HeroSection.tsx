"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useMotionValue, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Camera, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CameraScene = dynamic(() => import("@/components/three/CameraScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[380px] md:min-h-[520px] flex items-center justify-center">
      <div className="relative w-64 h-64 rounded-full border border-white/10 flex items-center justify-center animate-pulse">
        <div className="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-32 h-32 rounded-full border border-white/30" />
        </div>
      </div>
    </div>
  ),
});

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 40;
    const y = (clientY / innerHeight - 0.5) * 40;
    mouseX.set(x);
    mouseY.set(y);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation: badge, heading lines, subtext, buttons
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (badgeRef.current) {
        tl.fromTo(
          badgeRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.8 }
        );
      }

      if (headingRef.current) {
        tl.fromTo(
          headingRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        );
      }

      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.65"
        );
      }

      if (buttonsRef.current) {
        const buttons = buttonsRef.current.children;
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
          "-=0.6"
        );
      }

      // Parallax scroll on heading using GSAP ScrollTrigger
      if (headingRef.current && containerRef.current) {
        gsap.to(headingRef.current, {
          y: 70,
          opacity: 0.75,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-24 pb-16 px-6 lg:px-12"
    >
      {/* Subtle Studio Grid Overlay Pattern */}
      <div className="absolute inset-0 bg-studio-grid opacity-5 pointer-events-none" />

      {/* Atmospheric Radial Studio Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-zinc-800/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Animated Camera Aperture Rings (SVG & CSS Decorations) */}
      <motion.div
        style={{ x: smoothMouseX, y: smoothMouseY }}
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
      >
        {/* Large Outer Viewfinder Aperture Ring */}
        <div className="absolute w-[580px] h-[580px] md:w-[720px] md:h-[720px] rounded-full border border-white/[0.04] animate-[spin_120s_linear_infinite]">
          {/* Tick marks on rim */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-white/20" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-white/20" />
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-1.5 bg-white/20" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-1.5 bg-white/20" />
        </div>

        {/* Medium Concentric Focus Ring */}
        <div className="absolute w-[440px] h-[440px] md:w-[540px] md:h-[540px] rounded-full border border-dashed border-white/[0.03] animate-[spin_80s_linear_infinite_reverse]" />

        {/* Viewfinder Corner Framing Brackets */}
        <div className="absolute w-[90%] max-w-6xl h-[80%] border-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
        </div>
      </motion.div>

      {/* Studio Viewfinder HUD Metadata (authentic camera feel) */}
      <div className="absolute top-28 left-8 hidden md:flex items-center gap-3 text-[11px] tracking-widest text-zinc-500 font-mono uppercase pointer-events-none">
        <span className="inline-block w-2 h-2 rounded-full bg-red-500/80 animate-ping" />
        <span>REC [4K 60FPS]</span>
        <span className="text-zinc-700">|</span>
        <span>f/1.4 · 1/250s · ISO 100</span>
      </div>

      <div className="absolute top-28 right-8 hidden md:flex items-center gap-3 text-[11px] tracking-widest text-zinc-500 font-mono uppercase pointer-events-none">
        <Camera className="w-3.5 h-3.5 text-zinc-400" />
        <span>VISIBILITY MK-VI STUDIO</span>
      </div>

      {/* Main Hero Content Grid */}
      <div className="container mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(100vh-8rem)]">
        {/* Left Column: Headlines & Action Buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-8">
          {/* Studio Tag Badge */}
          <div ref={badgeRef} className="opacity-0">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
              <span>Independent Production & Shooting Studio</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] opacity-0"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            We Capture <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
              What Others Miss
            </span>
          </h1>

          {/* Subheadline */}
          <p
            ref={subtextRef}
            className="text-lg md:text-xl text-zinc-400 max-w-xl font-normal leading-relaxed opacity-0"
            style={{ fontFamily: "var(--font-space)" }}
          >
            Premium photography &amp; videography studio crafting visual stories
            that elevate brands and captivate audiences.
          </p>

          {/* Two Glass UI Buttons */}
          <div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
          >
            {/* Primary Filled White Button */}
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-zinc-950 font-medium text-base shadow-[0_0_24px_rgba(255,255,255,0.2)] hover:bg-zinc-200 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)] transition-all duration-300 group"
            >
              <span>View Our Work</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Outline Glass Button with Glow */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-zinc-900/60 backdrop-blur-md border border-white/15 text-white font-medium text-base hover:bg-zinc-800/80 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.12)] transition-all duration-300"
            >
              <span>Book a Session</span>
            </a>
          </div>

          {/* Quick Features List */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap gap-8 text-xs text-zinc-400 font-mono uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Cyc Wall &amp; Light Grid</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Phase One &amp; Arri Cameras</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Full In-House Crew</span>
            </div>
          </div>
        </div>

        {/* Right Column: 3D Camera Lens Scene */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[540px]">
            {/* Subtle glow behind the 3D lens */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-zinc-700/10 to-transparent rounded-full blur-2xl pointer-events-none" />

            {/* 3D Canvas Element */}
            <CameraScene />

            {/* Viewfinder Focal Crosshairs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 pointer-events-none opacity-40">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-white" />
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-white" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-0.5 bg-white" />
            </div>

            {/* Subtle lens specs badge */}
            <div className="absolute bottom-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-zinc-400 uppercase tracking-widest pointer-events-none">
              T1.3 50mm Prime · Anamorphic
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-60">
        <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">Scroll Down</span>
        <div className="w-4 h-7 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
