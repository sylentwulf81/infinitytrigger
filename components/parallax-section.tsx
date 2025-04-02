"use client";

import { useEffect, useState, type ReactNode } from "react";

interface ParallaxSectionProps {
  backgroundImage: string;
  overlayColor?: string;
  overlayOpacity?: number;
  children: ReactNode;
  className?: string;
}

export function ParallaxSection({
  backgroundImage,
  overlayColor = "rgb(30, 30, 30)", // Changed to a neutral dark gray
  overlayOpacity = 0.6, // Reduced opacity to show more of the background
  children,
  className = "",
}: ParallaxSectionProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Call handler right away to update initial position
    handleScroll();

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={`relative overflow-hidden ${className}`}>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
          willChange: "transform",
          height: "120%", // Make the background slightly taller to prevent gaps
          top: "-10%", // Center the extra height
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, ${overlayColor} 0%, ${overlayColor} 70%, rgba(0,0,0,0.8) 100%)`,
          opacity: overlayOpacity,
        }}
      />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
