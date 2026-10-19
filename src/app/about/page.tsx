"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { Crosshair, Sparkles, Award, ArrowRight, CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/ui/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassButton from "@/components/ui/GlassButton";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  initials: string;
  gear: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Elena Vance",
    role: "Creative Director",
    initials: "EV",
    bio: "Visionary storyteller with over 14 years shaping editorial campaigns for Parisian fashion houses and boundary-pushing independent luxury labels.",
    specialty: "High-Fashion Direction & Art Concepting",
    gear: "Leica SL2-S • Cooke Panchro",
  },
  {
    name: "Marcus Chen",
    role: "Lead Photographer",
    initials: "MC",
    bio: "Master of light sculpting and high-contrast composition, former Magnum Photos fellow specializing in medium format still life and architectural form.",
    specialty: "Medium Format • Broncolor Strobe Arrays",
    gear: "Hasselblad H6D • Phase One IQ4",
  },
  {
    name: "Sofia Rodriguez",
    role: "Cinematographer",
    initials: "SR",
    bio: "Specialist in high-speed optical capture, Phantom Flex choreography, and anamorphic lens character for international automotive and luxury spots.",
    specialty: "1000fps High-Speed • Anamorphic Optics",
    gear: "ARRI Alexa Mini LF • Master Anamorphic",
  },
  {
    name: "David Kael",
    role: "Post-Production Lead",
    initials: "DK",
    bio: "Colorist and master retoucher overseeing calibrated ACES and Dolby Vision workflows to ensure flawless tonal balance across every frame.",
    specialty: "Dolby Vision HDR • ACES Color Pipeline",
    gear: "DaVinci Advanced Panel • Flanders OLED",
  },
];

const values = [
  {
    title: "Precision",
    icon: Crosshair,
    tag: "01 / CALIBRATION",
    description:
      "Every millimeter of light, shadow depth, and color grade is calibrated with scientific exactitude. We believe the difference between good and iconic lies in the micron-level control of optics and illumination.",
  },
  {
    title: "Creativity",
    icon: Sparkles,
    tag: "02 / INNOVATION",
    description:
      "Defying convention through disruptive lighting techniques, avant-garde composition, and bold art direction that breaks through the noise to build enduring cultural resonance.",
  },
  {
    title: "Excellence",
    icon: Award,
    tag: "03 / MASTERY",
    description:
      "Delivering world-class commercial and editorial assets that exceed the highest demands of luxury brands, streaming networks, and international print publications.",
  },
];

const stats = [
  { label: "Founded", value: "2012" },
  { label: "Campaigns Executed", value: "650+" },
  { label: "Studio Space", value: "12,000 sq ft" },
  { label: "Industry Awards", value: "24" },
];

export default function AboutPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-[#fafafa] relative pb-28">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[400px] bg-gradient-to-b from-white/[0.05] via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-16">
          {/* Hero Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto mb-20 md:mb-28"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-widest uppercase text-white/70 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse" />
                ABOUT THE STUDIO
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold font-heading tracking-tight text-white mb-6 leading-[1.05]"
            >
              About Visibility
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-neutral-400 font-body max-w-2xl mx-auto leading-relaxed"
            >
              Where cinematic lighting, medium format optics, and uncompromising art direction converge to build striking visual legacies.
            </motion.p>

            {/* Quick Stat Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="p-4 rounded-xl bg-[#18181B]/50 border border-white/5">
                  <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Story Section: Two-Column Layout */}
          <section className="mb-28 md:mb-36">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column: Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400">
                  <span className="w-8 h-[1px] bg-white/30" />
                  Our Story & Philosophy
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-white leading-tight">
                  The architecture of shadow, light, and narrative.
                </h2>

                <div className="space-y-4 text-neutral-300 font-body text-base sm:text-lg leading-relaxed">
                  <p className="text-white font-medium">
                    Founded in 2012, Visibility Studio began with a simple belief:
                    every brand has a story worth telling through the lens.
                  </p>
                  <p className="text-neutral-400 text-base">
                    What started as an underground studio loft in New York&apos;s Creative
                    District has evolved into an expansive 12,000-square-foot production
                    facility. We engineer each frame with mathematical discipline, sculpt
                    light with museum-grade precision, and obsess over texture, tone, and
                    falloff.
                  </p>
                  <p className="text-neutral-400 text-base">
                    Our approach rejects cookie-cutter commercial tropes. We believe true
                    visual resonance lives in the nuance—the quiet gradient between pure
                    black and incandescent highlight, the tactile grain of medium format
                    glass, and the emotional pacing of high-speed cinema.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#18181B] border border-white/10 text-xs font-mono text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Calibrated ACES Color Workflow</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#18181B] border border-white/10 text-xs font-mono text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Custom Optical Baffling</span>
                  </div>
                  <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#18181B] border border-white/10 text-xs font-mono text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                    <span>Motorized Grid Rigging</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: Image Placeholder / Studio Aesthetic Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl bg-[#18181B] border border-white/15 overflow-hidden p-8 flex flex-col justify-between shadow-2xl">
                  {/* Subtle studio gradient fill */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-950 via-[#18181B] to-zinc-900 opacity-90" />

                  {/* Viewfinder Grid overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

                  {/* Framing brackets */}
                  <div className="absolute top-6 left-6 w-5 h-5 border-t-2 border-l-2 border-white/40" />
                  <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-white/40" />
                  <div className="absolute bottom-6 left-6 w-5 h-5 border-b-2 border-l-2 border-white/40" />
                  <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-white/40" />

                  {/* Top Header of viewfinder */}
                  <div className="relative z-10 flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                      <span className="text-white font-semibold">REC [RAW 8K]</span>
                    </div>
                    <span className="text-neutral-400">FPS: 24.000 • SHUTTER: 180°</span>
                  </div>

                  {/* Center Optical Crosshair */}
                  <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center">
                    <div className="relative w-36 h-36 rounded-full border border-dashed border-white/20 flex items-center justify-center animate-[spin_60s_linear_infinite]">
                      <div className="w-24 h-24 rounded-full border border-white/30 flex items-center justify-center">
                        <Crosshair className="w-8 h-8 text-white/80" />
                      </div>
                    </div>
                    <div className="mt-6 font-mono text-xs uppercase tracking-widest text-neutral-300">
                      Studio A • Cyclorama Stage 01
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500 mt-1">
                      40°45&apos;09.2&quot;N 73°59&apos;38.6&quot;W
                    </div>
                  </div>

                  {/* Bottom Viewfinder Telemetry */}
                  <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/10 text-xs font-mono text-neutral-400">
                    <div>ISO 800</div>
                    <div>5000K WB</div>
                    <div>f/1.4 T-STOP</div>
                    <div className="text-white">ACES 2065-1</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-28 md:mb-36">
            <div className="text-center mb-16">
              <SectionHeading
                badge="COLLECTIVE"
                title="The Leadership"
                subtitle="The directors, optical artisans, and technical specialists steering Visibility Studio."
                align="center"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative rounded-2xl bg-[#18181B] border border-white/10 p-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 hover:shadow-xl hover:shadow-black/60"
                >
                  <div>
                    {/* Placeholder Avatar Area */}
                    <div className="relative w-full aspect-square rounded-xl bg-black border border-white/10 mb-6 overflow-hidden flex items-center justify-center group-hover:border-white/25 transition-colors">
                      {/* Abstract background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900 via-[#27272A] to-zinc-800 opacity-60 group-hover:opacity-80 transition-opacity" />

                      {/* Monogram initials & camera circle */}
                      <div className="relative z-10 flex flex-col items-center justify-center">
                        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center font-heading font-bold text-xl text-white group-hover:scale-110 transition-transform duration-300">
                          {member.initials}
                        </div>
                        <span className="text-[10px] font-mono tracking-widest text-neutral-400 mt-2 uppercase">
                          Visibility Crew
                        </span>
                      </div>

                      {/* Viewfinder corner accents */}
                      <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/30" />
                      <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/30" />
                    </div>

                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block mb-1">
                      {member.role}
                    </span>
                    <h3 className="text-xl font-bold font-heading text-white mb-3">
                      {member.name}
                    </h3>
                    <p className="text-sm text-neutral-400 font-body leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex flex-col gap-1 text-[11px] font-mono text-neutral-400">
                    <span className="text-white/80 font-medium">
                      {member.specialty}
                    </span>
                    <span className="text-neutral-500">{member.gear}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Values Section: 3 values in a row */}
          <section className="mb-28">
            <div className="text-center mb-16">
              <SectionHeading
                badge="OUR PILLARS"
                title="Guiding Values"
                subtitle="The foundational principles that define every shoot, cut, and color decision."
                align="center"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {values.map((val, index) => {
                const IconComponent = val.icon;
                return (
                  <motion.div
                    key={val.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative p-8 rounded-2xl bg-[#18181B] border border-white/10 hover:border-white/30 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xs font-mono text-neutral-500">
                          {val.tag}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold font-heading text-white mb-3">
                        {val.title}
                      </h3>
                      <p className="text-neutral-400 font-body text-sm leading-relaxed">
                        {val.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-neutral-500">
                      <span>STANDARD OF WORK</span>
                      <span className="text-white">VERIFIED</span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Studio Tour Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 sm:p-12 rounded-3xl bg-[#18181B] border border-white/15 text-center flex flex-col items-center justify-center relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-3xl sm:text-4xl font-bold font-heading text-white mb-4">
                Experience our facility in person.
              </h3>
              <p className="text-neutral-400 font-body text-base mb-8">
                Tour our three soundstages, inspect our lighting inventory, and meet the
                directors behind our iconic work.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <GlassButton
                  variant="primary"
                  size="md"
                  href="/contact"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Schedule a Studio Tour
                </GlassButton>
                <GlassButton
                  variant="outline"
                  size="md"
                  href="/background"
                >
                  View Studio Background
                </GlassButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
