"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export const AffiliateCta = () => {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl" style={{ backgroundColor: '#8858ed' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 via-transparent to-indigo-600/20" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center min-h-[700px]">
            {/* Left side - Content */}
            <div className="p-8 md:p-12 lg:p-16 z-10">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Start earning
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
                  30% forever.
                </span>
              </h2>
              
              <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-lg">
                Join our affiliate program and earn recurring commissions by helping your audience understand their AI search visibility.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild
                  size="lg" 
                  className="bg-white text-[#8858ed] hover:bg-purple-50 font-semibold px-8 py-4 text-lg h-auto shadow-lg"
                >
                  <a href="https://analyze.partneroapp.com/register">
                    Apply Now
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => {
                    const calculatorSection = document.querySelector('[data-calculator-section]');
                    calculatorSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white font-semibold px-8 py-4 text-lg h-auto"
                >
                  Calculate My Earnings
                </Button>
              </div>
              
              <div className="mt-8 text-sm text-purple-200">
                30% recurring commission • No earning limits • Monthly payouts
              </div>
            </div>
            
            {/* Right side - Affiliate Dashboard Mockup */}
            <div className="relative flex items-center justify-center min-h-[600px]">
              <div 
                className="relative w-full group cursor-pointer"
                style={{ perspective: '1000px' }}
              >
                <div
                  className="w-full h-auto mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(0deg) rotateY(0deg) scale(1)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'rotateX(-2deg) rotateY(3deg) scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
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
                >
                  {/* Affiliate Dashboard Mockup */}
                  <div className="space-y-6">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold mb-4">Your Affiliate Dashboard</h3>
                    </div>
                    
                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-purple-200 text-sm">This Month</div>
                        <div className="text-white text-2xl font-bold">$2,847</div>
                      </div>
                      <div className="bg-white/20 rounded-lg p-4">
                        <div className="text-purple-200 text-sm">Total Earned</div>
                        <div className="text-white text-2xl font-bold">$18,392</div>
                      </div>
                    </div>
                    
                    {/* Referrals */}
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="text-purple-200 text-sm mb-2">Active Referrals</div>
                      <div className="text-white text-3xl font-bold">47</div>
                      <div className="text-purple-200 text-sm">customers paying monthly</div>
                    </div>
                    
                    {/* Growth Chart Placeholder */}
                    <div className="bg-white/20 rounded-lg p-4 h-32 flex items-end justify-between">
                      <div className="w-4 bg-white/40 rounded-t" style={{ height: '40%' }}></div>
                      <div className="w-4 bg-white/60 rounded-t" style={{ height: '60%' }}></div>
                      <div className="w-4 bg-white/80 rounded-t" style={{ height: '80%' }}></div>
                      <div className="w-4 bg-white rounded-t" style={{ height: '100%' }}></div>
                      <div className="w-4 bg-white/80 rounded-t" style={{ height: '85%' }}></div>
                      <div className="w-4 bg-white/60 rounded-t" style={{ height: '70%' }}></div>
                    </div>
                  </div>
                </div>
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
