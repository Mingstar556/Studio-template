"use client";

import React, { useEffect, useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Commercial, fashion & editorial productions",
  },
  {
    value: 12,
    suffix: "",
    label: "Years Experience",
    description: "Pioneering creative studio excellence",
  },
  {
    value: 200,
    suffix: "+",
    label: "Global Clients",
    description: "Fortune 500s & luxury fashion houses",
  },
  {
    value: 50,
    suffix: "+",
    label: "Industry Awards",
    description: "Recognized for cinematography & visual craft",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-40px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, target, {
      duration: 2.4,
      ease: [0.25, 1, 0.5, 1],
      onUpdate: (val) => setCount(Math.floor(val)),
    });

    return () => controls.stop();
  }, [isInView, target]);

  return (
    <span ref={nodeRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative w-full bg-black border-y border-white/10 py-16 lg:py-24 px-6 lg:px-12">
      {/* Background glow accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent pointer-events-none" />

      <div ref={containerRef} className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              className="relative flex flex-col items-start lg:items-center text-left lg:text-center group"
            >
              {/* Divider on right for desktop */}
              {index < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[1px] bg-white/10" />
              )}

              {/* Number */}
              <div
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none mb-3 group-hover:text-zinc-200 transition-colors"
                style={{ fontFamily: "var(--font-archivo)" }}
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <h4
                className="text-sm md:text-base font-semibold text-zinc-200 tracking-wide mb-1"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {stat.label}
              </h4>

              {/* Description */}
              <p
                className="text-xs text-zinc-500 font-normal max-w-[200px]"
                style={{ fontFamily: "var(--font-space)" }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
