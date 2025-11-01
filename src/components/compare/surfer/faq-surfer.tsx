"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze and Surfer?",
    answer: "Analyze focuses on measuring and improving visibility within AI search engines, while Surfer focuses on traditional SEO optimization for Google rankings. Surfer helps you improve content for search engine results pages (SERPs), but it doesn't track AI-engine exposure, traffic, or conversions. Analyze bridges that gap by tracking real traffic and conversions coming from ChatGPT, Perplexity, Copilot, and other AI engines, allowing you to see how generative search truly impacts your site performance."
  },
  {
    question: "Does Analyze track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes. Analyze uses GA4-based attribution to detect and measure visits coming from specific AI sources, showing real session counts, pageviews, and engagement. Surfer currently does not measure traffic from AI engines—it remains focused on traditional SEO visibility and keyword rankings."
  },
  {
    question: "Can Analyze show which pages are getting AI-generated traffic?",
    answer: "Yes. Analyze provides a clear breakdown of which pages receive visits from AI-generated sources, showing what content is being surfaced most often in AI responses. Surfer can show which pages rank in Google SERPs, but it does not track which pages are being cited or visited through AI platforms."
  },
  {
    question: "Does Analyze measure conversions from AI traffic?",
    answer: "Yes. Analyze tracks conversions from AI-attributed sessions, allowing you to measure ROI from generative visibility. Surfer focuses on SEO performance metrics like keyword rankings, backlinks, and content scores—valuable for optimization but disconnected from AI-driven conversion data."
  },
  {
    question: "How does Analyze identify opportunities or actions to improve AI visibility?",
    answer: "Analyze automatically prioritizes next steps—like optimizing schema, updating metadata for AI snippets, or targeting prompt classes driving competitor visibility. Surfer offers excellent content optimization guidance but not in the context of AI-engine exposure or performance."
  },
  {
    question: "Can Analyze monitor competitors' AI visibility too?",
    answer: "Yes. Analyze benchmarks your AI visibility and traffic against competitors, showing which domains are gaining ground across AI search results. Surfer includes competitor comparisons for SEO keyword rankings, not AI-engine mentions or visibility trends."
  },
  {
    question: "How easy is it to set up Analyze compared to Surfer?",
    answer: "Analyze setup is extremely lightweight—connect GA4, select AI engines, and start tracking automatically. Surfer requires you to input keywords, connect your site, and optimize individual content pieces—effective but more manual."
  },
  {
    question: "How much does Analyze cost?",
    answer: "Analyze costs $99 per month, covering full AI-traffic analytics, conversions, and competitive tracking. Surfer's plans vary from roughly $95 to $175 per month depending on the number of content credits and features used."
  },
  {
    question: "Who is Analyze best suited for?",
    answer: "Analyze is built for marketers and growth teams who want to understand and act on AI-driven traffic and conversions. Surfer is best for SEO writers and strategists optimizing content for Google search."
  },
  {
    question: "Can I use Analyze alongside Surfer or other analytics tools?",
    answer: "Yes. Many users run both—Surfer for optimizing search rankings, and Analyze for tracking what happens in the generative AI landscape. Together, they give you full visibility into both traditional and emerging discovery channels."
  }
];

export const FaqSurfer = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Analyze vs Surfer: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze and Surfer for AI visibility tracking
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg border border-gray-200">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
