'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, type Variants } from 'framer-motion';
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

/* -------------------------------------------------------------------------
   Lucide-style Stroke SVGs for Brand Platforms (24x24 stroke aesthetic)
------------------------------------------------------------------------- */
function InstagramIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" />
    </svg>
  );
}

function VimeoIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 8.5C3.3 7 5.2 4.5 7.4 4.5c2.3 0 2.8 2.1 3 4.2.3 2.5.6 5.1 1.6 5.1.7 0 1.7-1.4 2.2-2.5.5-1.1.8-2.3 0-2.3-.3 0-.6.1-.8.2.7-2.3 2.6-3.7 4.7-3.7 2.1 0 2.5 1.7 2.1 4.1-.7 3.9-3.2 8.5-6.5 8.5-3.1 0-4-3-4.4-6.4-.3-2.6-.7-4.2-1.6-4.2-.4 0-1.2.7-2 1.8l-1.2-1z" />
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(footerRef, { once: true, margin: '-60px' });

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.12,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      handle: '@visibility.studio',
      icon: InstagramIcon,
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      handle: 'Visibility Studio',
      icon: YoutubeIcon,
    },
    {
      name: 'Vimeo',
      href: 'https://vimeo.com',
      handle: 'Visibility Films',
      icon: VimeoIcon,
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Work', href: '/work' },
    { name: 'About', href: '/about' },
    { name: 'Background', href: '/background' },
    { name: 'Contact', href: '/contact' },
    { name: 'Book a Session', href: '/contact' },
  ];

  const services = [
    { name: 'Cyclorama Soundstage Rental', badge: 'Stage A' },
    { name: 'Commercial Video Production', badge: 'Cinema 8K' },
    { name: 'Editorial & Fashion Stills', badge: 'Hasselblad' },
    { name: 'High-Key & Low-Key Lighting', badge: 'Profoto/Aputure' },
    { name: 'Product & Macro Stills', badge: 'Tabletop' },
    { name: 'Post-Production & Color Grading', badge: 'DaVinci Resolve' },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-black text-zinc-400 border-t border-white/10 pt-20 pb-10 overflow-hidden"
    >
      {/* Background Studio Vignette & Accent Glow */}
      <div className="absolute inset-0 studio-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-white/[0.02] blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10"
      >
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Column 1: Studio Info (4 cols on lg) */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/15 text-white group-hover:border-white/40 transition-colors">
                <Camera className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black tracking-widest text-xl text-white uppercase leading-none">
                  VISIBILITY
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-medium mt-1">
                  STUDIO
                </span>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
              Visibility Studio is an architectural darkroom soundstage engineered for luxury fashion editorials, cinematic commercial productions, and optical visual experimentation.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Studio 04 • 4,500 sq ft Cyclorama Stage</span>
            </div>

            {/* Social Links with Hover Glow */}
            <div className="pt-2">
              <span className="text-xs uppercase font-heading tracking-widest text-zinc-400 font-semibold block mb-3">
                Connect Channels
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.name} profile`}
                      className="glass-btn p-3 rounded-xl border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white transition-all duration-300 group hover:shadow-[0_0_20px_rgba(248,250,252,0.2)]"
                    >
                      <Icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Column 2: Quick Links (2 cols on lg) */}
          <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-white/70" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Studio Services (3 cols on lg) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Studio Capabilities
            </h3>
            <ul className="flex flex-col gap-3 text-sm">
              {services.map((service) => (
                <li key={service.name} className="flex flex-col">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-zinc-300 font-medium text-xs sm:text-sm">
                      {service.name}
                    </span>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-400 shrink-0">
                      {service.badge}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact & Studio Info (3 cols on lg) */}
          <motion.div variants={itemVariants} className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white">
              Direct Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span>
                  108 Studio Way, Soundstage 04
                  <br />
                  Arts District, New York & Tokyo
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href="mailto:contact@visibilitystudio.com"
                  className="hover:text-white transition-colors"
                >
                  contact@visibilitystudio.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-zinc-400 shrink-0" />
                <a
                  href="tel:+12125550199"
                  className="hover:text-white transition-colors font-mono text-xs"
                >
                  +1 (212) 555-0199
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-zinc-400 shrink-0 mt-0.5" />
                <span className="text-xs">
                  Mon – Sun: 08:00 – 23:00 EST
                  <br />
                  <span className="text-zinc-400 font-mono">24/7 Access for Booked Shoots</span>
                </span>
              </li>
            </ul>

            {/* Quick Session Inquiry Glass Action */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="glass-btn w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider font-heading text-white border border-white/20 hover:border-white/50 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                <span>Request Availability</span>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Massive Full-Width 'VISIBILITY' Wordmark */}
        <motion.div
          variants={itemVariants}
          className="w-full overflow-hidden select-none pointer-events-none py-8 md:py-12"
        >
          <h2 className="font-heading font-black text-6xl md:text-8xl lg:text-[11.5vw] tracking-tighter text-white opacity-10 text-center uppercase whitespace-nowrap leading-none">
            VISIBILITY
          </h2>
        </motion.div>

        {/* Bottom Bar: Copyright, Verification Badge, & Legal */}
        <motion.div
          variants={itemVariants}
          className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-400"
        >
          {/* LICENSE Verification Badge */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span className="glass-panel px-3 py-1 rounded-full border border-white/15 text-white/90 font-mono text-[11px] inline-flex items-center gap-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Licensed & Verified Studio © 2024 Visibility Studio. All Rights Reserved. License #VS-2024-PRO</span>
            </span>
          </div>

          {/* Legal / Studio Protocols */}
          <div className="flex items-center gap-5 text-zinc-400 text-[11px]">
            <Link href="/contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Terms of Production
            </Link>
            <span className="text-zinc-700">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Stage Safety Protocols
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}

export { Footer };
