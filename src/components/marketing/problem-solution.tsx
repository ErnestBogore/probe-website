"use client";

import React from 'react';
import { X, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const problems = [
  {
    text: "You're paying Profound, Peec, and Athena premiums for \"visibility\" dashboards that inflate costs without improving go-to-market focus.",
  },
  {
    text: "You're told to treat GEO as a standalone channel, which creates content depth and quality debt and derails your entire content strategy.",
  },
  {
    text: "You can't tie \"AI visibility\" to pipeline and run decisions on vanity screenshots instead of attributable traffic, conversions, or revenue.",
  },
];

const solutions = [
  "See where you show up",
  "Track the prompts that matter", 
  "Know who you're losing to",
  "Make content easy to cite",
  "Prove AI-driven traffic, conversion, and revenue",
];

export const ProblemSolution = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-24 bg-gray-100" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
              You&apos;re being sold &quot;visibility&quot; that can&apos;t be verified or tied to outcomes...
            </h2>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Problems Column - Each in its own card */}
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div 
                  key={index} 
                  className={`bg-red-50 border border-red-200 rounded-xl p-6 transition-all duration-700 ${
                    inView 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms` 
                  }}
                >
                  <div className="flex items-start gap-4">
                    {/* Error Icon */}
                    <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mt-1">
                      <X className="w-5 h-5 text-red-600" />
                    </div>
                    {/* Problem Text */}
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {problem.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Solutions Column */}
            <div 
              className={`rounded-2xl p-8 lg:p-10 transition-all duration-700 ${
                inView 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                backgroundColor: '#8858ed',
                transitionDelay: '600ms' 
              }}
            >
              {/* Logo and Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center p-1">
                  <Image
                    src="/favicon-32x32.png"
                    alt="Analyze favicon"
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                <span className="text-white font-bold text-xl">ANALYZE</span>
              </div>
              
              <div className="bg-white rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  With ANALYZE, you can:
                </h4>
                
                <div className="space-y-4">
                  {solutions.map((solution, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">
                        {solution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
