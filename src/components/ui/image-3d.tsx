"use client";

import { type ReactNode } from "react";

interface Image3DProps {
  children: ReactNode;
  className?: string;
}

/**
 * Thin client wrapper that adds 3D perspective hover effects to its children.
 * Keeps the actual image as a server-rendered child to minimize client JS.
 */
export function Image3D({ children, className = "" }: Image3DProps) {
  return (
    <div
      className={`relative w-full group cursor-pointer ${className}`}
      style={{ perspective: "1000px" }}
      onMouseEnter={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
          img.style.transform = "rotateX(-2deg) rotateY(3deg) scale(1.02)";
        }
      }}
      onMouseLeave={(e) => {
        const img = e.currentTarget.querySelector("img");
        if (img) {
          img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
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
        img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
      }}
    >
      {children}
    </div>
  );
}
