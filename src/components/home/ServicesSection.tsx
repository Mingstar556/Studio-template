"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera, Video, Aperture, SlidersHorizontal, ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceItem {
  id: string;
  title: string;
  number: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  description: string;
  deliverables: string[];
}

const services: ServiceItem[] = [
  {
    id: "commercial-photography",
    number: "01",
    title: "Commercial Photography",
    icon: Camera,
    description:
      "High-impact product, lookbook, and campaign photography crafted with precision lighting and medium-format optics to elevate commercial presence.",
    deliverables: ["Product Stills", "Campaign Imagery", "E-Commerce Suites", "High-Res Retouching"],
  },
  {
    id: "cinematic-videography",
    number: "02",
    title: "Cinematic Videography",
    icon: Video,
    description:
      "Narrative-driven brand films, television commercials, and dynamic social content shot on cinema-grade cameras with bespoke art direction.",
    deliverables: ["Brand Films", "Commercial Spots", "Editorial Videos", "Motion Direction"],
  },
  {
    id: "brand-identity-shoots",
    number: "03",
    title: "Brand Identity Shoots",
    icon: Aperture,
    description:
      "Holistic visual ecosystems tailored to brand guidelines. We craft full seasonal image libraries that establish unmatched visual distinction.",
    deliverables: ["Visual Architecture", "Lookbook Direction", "Founder Portraits", "Social Asset Libraries"],
  },
  {
    id: "post-production",
    number: "04",
    title: "Post-Production",
    icon: SlidersHorizontal,
    description:
      "Comprehensive color grading, compositing, master retouching, and sound design that brings pristine polish and emotional resonance to every frame.",
    deliverables: ["DaVinci Color Grading", "Master Retouching", "CGI Integration", "Sound & Audio Mastering"],
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Section Title
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Staggered Entrance for Cards
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-28 px-6 lg:px-12 bg-black border-t border-white/5"
    >
      {/* Background glow accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div ref={headingRef} className="max-w-2xl mb-16 opacity-0">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
              Capabilities &amp; Disciplines
            </span>
          </div>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight"
            style={{ fontFamily: "var(--font-archivo)" }}
          >
            Our Expertise
          </h2>
          <p
            className="mt-4 text-base md:text-lg text-zinc-400 font-normal leading-relaxed"
            style={{ fontFamily: "var(--font-space)" }}
          >
            From high-fashion editorial to cinematic brand narratives, our multidisciplinary team
            executes with uncompromising technical rigor and artistic vision.
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-[#18181B] border border-white/5 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.8)] opacity-0 flex flex-col justify-between"
              >
                {/* Subtle top edge highlight */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Top Bar inside Card: Icon & Number */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white transition-colors duration-300 group-hover:bg-zinc-800 group-hover:border-white/25">
                      <Icon size={32} className="text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-sm font-mono text-zinc-500 tracking-widest group-hover:text-zinc-300 transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Card Title */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <h3
                      className="text-2xl md:text-3xl font-bold text-white tracking-tight group-hover:text-zinc-100"
                      style={{ fontFamily: "var(--font-archivo)" }}
                    >
                      {service.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Card Description */}
                  <p
                    className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8"
                    style={{ fontFamily: "var(--font-space)" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Deliverables tags */}
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {service.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-md bg-zinc-900/90 border border-white/5 text-xs text-zinc-400 font-mono group-hover:border-white/15 group-hover:text-zinc-300 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
