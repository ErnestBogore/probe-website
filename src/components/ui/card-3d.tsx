"use client";

import { type ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
}

/**
 * Thin client wrapper that adds 3D perspective hover effects to card images.
 * Targets the first <img> inside the container.
 */
export function Card3D({ children, className = "" }: Card3DProps) {
  return (
    <div
      className={className}
      style={{ perspective: "1000px" }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
          img.style.transform = "rotateX(-2deg) rotateY(3deg) scale(1.05)";
          img.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.25)";
        }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
          img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
          img.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
        }
      }}
      onMouseMove={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (!img) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
      }}
    >
      {children}
    </div>
  );
}
