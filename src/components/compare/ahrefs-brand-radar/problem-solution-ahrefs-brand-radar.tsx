"use client";

import React from 'react';
import { X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const problems = [
  {
    text: "Ahrefs Brand Radar shows traditional web mentions but can't track how AI assistants like ChatGPT, Claude, or Perplexity talk about your brand in their answers.",
  },
  {
    text: "You see competitor mentions in traditional search but miss when AI assistants recommend competitors instead of you for high-intent buying prompts.",
  },
  {
    text: "Ahrefs tracks traditional traffic sources but can't measure actual traffic and conversions from AI channels that are reshaping the customer journey.",
  },
];

export const ProblemSolutionAhrefsBrandRadar = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="pt-6 pb-24 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
              Ahrefs Brand Radar tracks traditional mentions. ANALYZE tracks AI search performance.
            </h2>
          </div>

          {/* Problems Only - Single Column */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className={`bg-red-50 border border-red-200 rounded-xl p-8 transition-all duration-700 ${
                    inView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms` 
                  }}
                >
                  <div className="flex items-start gap-6">
                    {/* Error Icon */}
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <X className="w-7 h-7 text-red-600" />
                    </div>
                    {/* Problem Text */}
                    <p className="text-xl text-gray-700 leading-relaxed">
                      {problem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
