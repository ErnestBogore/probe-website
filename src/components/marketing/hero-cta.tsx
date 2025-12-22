"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export const HeroCta = () => {

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl" style={{ backgroundColor: '#8858ed' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-indigo-600/20" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center min-h-[700px]">
            {/* Left side - Content */}
            <div className="p-8 md:p-12 lg:p-16 z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Tie AI visibility to
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  qualified demand.
                </span>
              </h2>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-lg">
                Measure the prompts and engines that drive real traffic, conversions, and revenue.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-[#8858ed] hover:bg-purple-50 font-semibold px-8 py-4 text-lg h-auto shadow-lg"
                >
                  <a href="https://tryanalyze.ai/pricing" target="_blank" rel="noopener noreferrer">
                    Show Me My AI Rankings
                  </a>
                </Button>
                <Button 
                  asChild
                  variant="outline" 
                  size="lg" 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-4 text-lg h-auto"
                >
                  <a href="/talk-to-a-human">
                    Talk To A Human
                  </a>
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-purple-200">
                Covers ChatGPT, Perplexity, Claude, Copilot, Gemini
              </div>
            </div>
            
            {/* Right side - Large Interactive Dashboard */}
            <div className="relative flex items-center justify-center min-h-[600px]">
              <div 
                className="relative w-full group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <img
                  src="/CTA Image.png"
                  alt="ANALYZE Dashboard - AI Search Analytics Platform"
                  className="w-full h-auto mx-auto"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
                    transition: 'transform 0.3s ease-out',
                    imageRendering: 'crisp-edges'
                  }}
                  onMouseEnter={(e) => {
                    console.log('Mouse entered image');
                    e.currentTarget.style.transform = 'rotateX(-2deg) rotateY(3deg) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    console.log('Mouse left image');
                    e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / centerY * -5;
                    const rotateY = (x - centerX) / centerX * 5;
                    
                    e.currentTarget.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                  }}
                />
              </div>
            </div>
          </div>
          
          {/* Enhanced background pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 pointer-events-none" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px, 40px 40px'
            }} />
          </div>
          
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse opacity-30 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
