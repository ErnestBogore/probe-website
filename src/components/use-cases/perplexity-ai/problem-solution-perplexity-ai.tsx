"use client";

import React from 'react';
import { X } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const problems = [
  {
    text: "You can't measure what matters. You see Perplexity AI mentions, but you can't connect them to actual traffic, conversions, or revenue. Leadership asks \"Is Perplexity AI search working?\" and you have no data to answer.",
  },
  {
    text: "You can't compete strategically. You know competitors appear in Perplexity AI answers, but you don't know which prompts they're winning, why they're chosen, or what content gaps are costing you visibility.",
  },
  {
    text: "You can't prioritize improvements. You get generic \"optimize for Perplexity AI\" advice, but no specific guidance on which citations to earn, which content to update, or which prompts to target first.",
  },
];

export const ProblemSolutionPerplexityAI = () => {
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
              Most Perplexity AI monitoring tools show you mentions BUT never show you actual traffic data from Perplexity AI.
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
