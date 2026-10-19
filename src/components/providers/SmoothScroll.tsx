'use client';

import React, { useEffect } from 'react';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    // Apply CSS smooth scrolling to html and body
    const root = document.documentElement;
    root.style.scrollBehavior = 'smooth';

    return () => {
      root.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="smooth-scroll-wrapper relative w-full min-h-screen flex flex-col bg-black text-[#FAFAFA]">
      {children}
    </div>
  );
}

export { SmoothScroll };
