"use client";

import React, { useState, useEffect } from "react";
import { Aperture, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 flex items-center justify-between">
        {/* Studio Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center text-white group-hover:border-white/30 transition-all">
            <Aperture className="w-5 h-5 text-white transition-transform duration-500 group-hover:rotate-90" />
          </div>
          <div className="flex flex-col">
            <span
              className="text-lg font-black tracking-tight text-white leading-none"
              style={{ fontFamily: "var(--font-archivo)" }}
            >
              VISIBILITY
            </span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
              STUDIO · NYC
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#services" className="hover:text-white transition-colors">
            Expertise
          </a>
          <a href="#work" className="hover:text-white transition-colors">
            Selected Work
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            Studio
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs uppercase tracking-wider font-mono hover:bg-white/20 hover:border-white/30 transition-all"
          >
            <span>Book Studio</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-zinc-300 hover:text-white p-2"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-white/10 px-6 py-6 space-y-4">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-base font-medium py-1"
          >
            Expertise
          </a>
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-base font-medium py-1"
          >
            Selected Work
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-base font-medium py-1"
          >
            Studio
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-zinc-300 hover:text-white text-base font-medium py-1"
          >
            Contact
          </a>
          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-white text-black font-semibold text-sm"
            >
              <span>Book Studio Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
