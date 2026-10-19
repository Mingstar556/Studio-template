"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { Camera, Layers, Tv, Film, ArrowRight, CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassButton from "@/components/ui/GlassButton";

interface Milestone {
  year: string;
  title: string;
  description: string;
  tag: string;
}

const milestones: Milestone[] = [
  {
    year: "2012",
    title: "Studio Founded",
    tag: "ORIGIN",
    description:
      "Visibility Studio opened its doors in a converted industrial loft in New York's Creative District. Founded by three visual artists, the studio's early days were marked by raw passion, heavy medium-format cameras, and an obsession with sculpting shadow.",
  },
  {
    year: "2014",
    title: "First Major Brand Campaign",
    tag: "BREAKTHROUGH",
    description:
      "Captured our first international luxury watch and haute couture campaign. The high-contrast chiaroscuro visual signature received worldwide editorial acclaim, landing on cover spreads across Paris and Milan.",
  },
  {
    year: "2016",
    tag: "EXPANSION",
    title: "Expanded to Videography",
    description:
      "Recognizing the growing convergence of still imagery and cinema, we commissioned custom anamorphic optics and integrated high-speed cinema rigs, producing breathtaking 1,000fps motion pieces for global commercial brands.",
  },
  {
    year: "2018",
    tag: "GLOBAL REACH",
    title: "International Clients",
    description:
      "Formed transatlantic partnerships spanning Paris, London, Tokyo, and Zurich. Visibility became the premier destination for international fashion houses and automotive manufacturers requiring discrete, ultra-high-end productions.",
  },
  {
    year: "2020",
    tag: "INFRASTRUCTURE",
    title: "State-of-the-Art Studio Upgrade",
    description:
      "Acquired and completely redesigned our flagship 12,000-square-foot facility. Constructed three acoustically isolated soundstages, installed automated motorized truss grids, and built our dedicated Dolby Vision post-production finishing lab.",
  },
  {
    year: "2022",
    tag: "RECOGNITION",
    title: "Award-Winning Productions",
    description:
      "Honored with multiple Cannes Lions, D&AD Yellow Pencils, and Clio Awards for pioneering cinematography in automotive and luxury retail commercials. Ranked among the top visual production spaces worldwide.",
  },
  {
    year: "2024",
    tag: "THE FUTURE",
    title: "Industry Leaders",
    description:
      "Today, Visibility Studio stands at the vanguard of commercial and editorial visual art. Pioneering motion-control robotics, medium-format 150MP capture, and calibrated color workflows, we shape the visual identity of tomorrow's iconic brands.",
  },
];

interface StudioSpace {
  id: string;
  name: string;
  subtitle: string;
  size: string;
  ceiling: string;
  icon: React.ElementType;
  features: string[];
  specs: string;
  accent: string;
}

const studioSpaces: StudioSpace[] = [
  {
    id: "studio-a",
    name: "Studio A",
    subtitle: "Portrait & High-Fashion",
    size: "2,500 sq ft",
    ceiling: "20 ft clearance",
    icon: Camera,
    accent: "from-zinc-900 to-black",
    features: [
      "Two-wall seamless white cyclorama",
      "Profoto Pro-11 2400 AirTTL strobe pack suite",
      "Dedicated 4-station hair & makeup vanity suite",
      "Client VIP mezzanine lounge with live video feed",
    ],
    specs: "Capacity: 45 crew • Power: 3-Phase 200A",
  },
  {
    id: "studio-b",
    name: "Studio B",
    subtitle: "Commercial & Product Stills",
    size: "1,800 sq ft",
    ceiling: "18 ft clearance",
    icon: Layers,
    accent: "from-stone-900 to-black",
    features: [
      "Motorized acrylic shooting table & robotic turntable",
      "Broncolor Para 222 & continuous high-CRI lighting",
      "Micro-optical rail focus stacking workstation",
      "Ultra-matte black absorption wall baffles",
    ],
    specs: "Capacity: 25 crew • Vibration-isolated flooring",
  },
  {
    id: "studio-c",
    name: "Studio C",
    subtitle: "Cinema & High-Speed Film",
    size: "4,000 sq ft",
    ceiling: "24 ft clearance",
    icon: Film,
    accent: "from-slate-900 to-black",
    features: [
      "10-ton motorized truss grid with full DMX control",
      "Drive-in vehicle ramp for automotive shoots",
      "Sound-dampened acoustic walls (STC 65 rated)",
      "High-speed Phantom Flex 4K & ARRI 35 packages",
    ],
    specs: "Capacity: 80 crew • Power: 3-Phase 400A",
  },
  {
    id: "post-suite",
    name: "Post Suite",
    subtitle: "Color Grading & Finishing",
    size: "1,200 sq ft",
    ceiling: "Acoustically Treated",
    icon: Tv,
    accent: "from-neutral-900 to-black",
    features: [
      "Dolby Vision HDR certified master monitoring",
      "Flanders Scientific XMP310 QD-OLED master display",
      "Full DaVinci Resolve Advanced control surface",
      "10Gbps dedicated high-speed SAN fiber network",
    ],
    specs: "ACES 2065-1 Compliant • 7.1.4 Dolby Atmos",
  },
];

const clients = [
  "BALENCIAGA",
  "LEICA CAMERA",
  "VOGUE",
  "AUDEMARS PIGUET",
  "PORSCHE",
  "SENNHEISER",
  "SONY PRO",
  "RIMOWA",
  "SAINT LAURENT",
  "CARTIER",
  "BOTTEGA VENETA",
  "HARPER'S BAZAAR",
];

export default function BackgroundPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate timeline cards on scroll
      const items = gsap.utils.toArray<HTMLElement>(".timeline-card");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 40,
            scale: 0.96,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Animate vertical timeline line filling down
      gsap.fromTo(
        ".timeline-line-fill",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top center",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <PageTransition>
      <div
        ref={containerRef}
        className="min-h-screen bg-black text-[#fafafa] relative pb-28"
      >
        {/* Background ambient lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[450px] bg-gradient-to-b from-white/[0.04] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          {/* Hero Section */}
          <div className="text-center mb-20 md:mb-28">
            <SectionHeading
              badge="HERITAGE & CAPABILITY"
              title="Our Background"
              subtitle="From an underground artisanal loft to a globally recognized production sanctuary. Explore the timeline of our creative journey and our state-of-the-art facilities."
              align="center"
            />
          </div>

          {/* Timeline Section */}
          <section className="mb-32 relative" ref={timelineRef}>
            <div className="text-center mb-16">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
                12 Years of Continuous Evolution
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white mt-2">
                Studio Milestones
              </h3>
            </div>

            {/* Timeline container */}
            <div className="relative max-w-5xl mx-auto">
              {/* Central vertical track (background) */}
              <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-white/10" />

              {/* Central vertical track (GSAP animated fill) */}
              <div className="timeline-line-fill absolute left-6 md:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-white via-white/80 to-white/40" />

              <div className="flex flex-col gap-12 sm:gap-16">
                {milestones.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <div
                      key={item.year}
                      className={`timeline-card relative flex flex-col md:flex-row items-start ${
                        isEven ? "md:flex-row-reverse" : ""
                      } gap-8 md:gap-0`}
                    >
                      {/* Timeline Central Dot */}
                      <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 z-20 flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full bg-black border-2 border-white flex items-center justify-center shadow-lg shadow-white/20">
                          <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        </div>
                      </div>

                      {/* Content Card (Half width on desktop) */}
                      <div
                        className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                          isEven ? "md:pl-12" : "md:pr-12 md:text-right"
                        }`}
                      >
                        <div className="p-6 sm:p-8 rounded-2xl bg-[#18181B] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl shadow-black/60 relative group">
                          {/* Top Year & Tag */}
                          <div
                            className={`flex items-baseline gap-3 mb-3 ${
                              isEven ? "" : "md:justify-end"
                            }`}
                          >
                            <span className="text-4xl sm:text-5xl font-extrabold font-heading text-white group-hover:text-white transition-colors">
                              {item.year}
                            </span>
                            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 px-2.5 py-0.5 rounded bg-white/5 border border-white/10">
                              {item.tag}
                            </span>
                          </div>

                          <h4 className="text-xl sm:text-2xl font-bold font-heading text-white mb-3">
                            {item.title}
                          </h4>

                          <p className="text-sm sm:text-base text-neutral-400 font-body leading-relaxed">
                            {item.description}
                          </p>

                          {/* Optical decorative mark */}
                          <div
                            className={`mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-neutral-500 ${
                              isEven ? "" : "md:justify-end"
                            }`}
                          >
                            <span>ARCHIVE REF // #{index + 1}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Equipment & Studio Spaces Section */}
          <section className="mb-32">
            <div className="text-center mb-16">
              <SectionHeading
                badge="FACILITIES & HARDWARE"
                title="Studio Capabilities"
                subtitle="Engineered for world-class still and motion production with four specialized purpose-built facilities."
                align="center"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {studioSpaces.map((studio, index) => {
                const IconComponent = studio.icon;
                return (
                  <motion.div
                    key={studio.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative rounded-2xl bg-[#18181B] border border-white/10 p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group shadow-xl"
                  >
                    <div>
                      {/* Studio Header */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                            <IconComponent className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold font-heading text-white">
                              {studio.name}
                            </h3>
                            <span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                              {studio.subtitle}
                            </span>
                          </div>
                        </div>

                        <div className="text-right">
                          <div className="text-sm font-semibold text-white font-heading">
                            {studio.size}
                          </div>
                          <div className="text-xs font-mono text-neutral-400">
                            {studio.ceiling}
                          </div>
                        </div>
                      </div>

                      {/* Feature list */}
                      <div className="space-y-3 mb-6">
                        {studio.features.map((feat) => (
                          <div
                            key={feat}
                            className="flex items-start gap-2.5 text-sm text-neutral-300 font-body"
                          >
                            <CheckCircle2 className="w-4 h-4 text-white/70 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Specs Bar */}
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-neutral-400">
                      <span>{studio.specs}</span>
                      <span className="text-white group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Book Space <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Client Logos Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-2">
                Trusted By Industry Icons
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                Selected Commercial & Editorial Clients
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {clients.map((client) => (
                <div
                  key={client}
                  className="aspect-[3/2] rounded-xl bg-[#18181B] border border-white/10 hover:border-white/30 transition-all duration-300 flex items-center justify-center p-4 text-center group cursor-default hover:bg-white/[0.03]"
                >
                  <span className="text-xs sm:text-sm font-heading font-bold tracking-wider text-neutral-400 group-hover:text-white transition-colors uppercase">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Action Section */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#18181B] border border-white/15 text-center flex flex-col items-center justify-center">
            <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
              Bring your production to Visibility Studio.
            </h3>
            <p className="text-neutral-400 font-body text-base max-w-xl mx-auto mb-8">
              Whether you need Studio A for an editorial still shoot or Studio C for a multi-camera commercial production, our stage managers are ready.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <GlassButton
                variant="primary"
                size="md"
                href="/contact"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Inquire About Studio Availability
              </GlassButton>
              <GlassButton
                variant="outline"
                size="md"
                href="/work"
              >
                Explore Completed Work
              </GlassButton>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
