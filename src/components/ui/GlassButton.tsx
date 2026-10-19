"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export type GlassButtonVariant = "primary" | "outline" | "glow";
export type GlassButtonSize = "sm" | "md" | "lg";

export interface GlassButtonProps {
  children: React.ReactNode;
  variant?: GlassButtonVariant;
  size?: GlassButtonSize;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export default function GlassButton({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  target,
  rel,
  icon,
  iconPosition = "right",
}: GlassButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle 3D tilt: max +/- 8 degrees
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    // Track sheen position
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    setRotate({ x: rotateX, y: rotateY });
    setSheenPos({ x: percentX, y: percentY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setSheenPos((prev) => ({ ...prev, opacity: 0 }));
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs gap-1.5 tracking-wider",
    md: "px-6 py-3 text-sm gap-2 tracking-wide",
    lg: "px-8 py-4 text-base gap-2.5 tracking-wide",
  }[size];

  const variantClasses = {
    primary:
      "bg-white text-black font-semibold hover:bg-neutral-200 border border-transparent shadow-lg shadow-white/5",
    outline:
      "bg-white/5 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 hover:border-white/30",
    glow: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:border-white/40",
  }[variant];

  const baseClasses = `relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 cursor-pointer overflow-hidden select-none disabled:opacity-50 disabled:cursor-not-allowed ${sizeClasses} ${variantClasses} ${className}`;

  const transformStyle: React.CSSProperties = {
    transform: `perspective(600px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    transformStyle: "preserve-3d",
    transition:
      rotate.x === 0 && rotate.y === 0
        ? "transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)"
        : "transform 0.08s linear",
  };

  const innerContent = (
    <>
      {/* Dynamic light reflection/sheen effect */}
      <span
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
        style={{
          opacity: sheenPos.opacity,
          background: `radial-gradient(circle 90px at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.2), transparent)`,
        }}
        aria-hidden="true"
      />

      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === "left" && (
          <span className="inline-flex shrink-0 items-center justify-center">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="inline-flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </span>
    </>
  );

  if (href) {
    return (
      <motion.div
        ref={containerRef}
        style={transformStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        className="inline-block"
      >
        <Link
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className={`group ${baseClasses}`}
        >
          {innerContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={transformStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`group ${baseClasses}`}
    >
      {innerContent}
    </motion.button>
  );
}
