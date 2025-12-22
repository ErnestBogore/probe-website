"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export const BlogCta = () => {
  return (
    <section className="my-16">
      <div className="rounded-2xl p-8 md:p-10" style={{ backgroundColor: '#8858ed' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tie AI visibility to
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              qualified demand.
            </span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Measure the prompts and engines that drive real traffic, conversions, and revenue.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          
          <div className="mt-6 text-sm text-purple-200">
            Covers ChatGPT, Perplexity, Claude, Copilot, Gemini
          </div>
        </div>
      </div>
    </section>
  );
};

// This component is a simplified version of the HeroCta component,
// designed specifically for blog posts with a more compact layout.
