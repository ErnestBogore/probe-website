"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze AI and Writesonic GEO?",
    answer: "Analyze AI focuses on the measurement and monetization of AI visibility—how it translates into traffic, conversions, and business results—whereas Writesonic GEO is a discovery and visibility-tracking layer within the Writesonic ecosystem. GEO highlights how brands appear across AI search platforms, but it doesn't connect that visibility to verified GA4 traffic or conversion data. Analyze AI takes those insights further, turning visibility into performance metrics and prioritized actions for growth."
  },
  {
    question: "Does Analyze AI track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes. Analyze AI attributes verified GA4 traffic to each AI engine, showing exactly how many visitors and sessions originate from each source. Writesonic GEO focuses on detecting mentions and appearance rates across AI engines but doesn't tie that to analytics-verified web traffic."
  },
  {
    question: "Can Analyze AI show which pages are getting AI-generated traffic?",
    answer: "Yes. Analyze AI shows precisely which URLs receive traffic from AI engines and how those visitors behave once they land on your site. It delivers page-level visibility, so you can identify your strongest AI-performing pages. GEO doesn't provide this page-specific analytics view; it focuses on brand-level visibility."
  },
  {
    question: "Does Analyze AI measure conversions from AI traffic?",
    answer: "Yes. Analyze AI integrates directly with GA4 to measure sign-ups, purchases, and other conversions coming from AI referrals. Writesonic GEO doesn't track conversions—it measures presence and share of AI exposure rather than downstream ROI."
  },
  {
    question: "How does Analyze AI identify opportunities or actions to improve AI visibility?",
    answer: "Analyze AI automatically surfaces prioritized \"to-do\" recommendations based on where your visibility or traffic is trending. For example, it might flag a page losing traction in ChatGPT or reveal keywords you should target for Google Overviews inclusion. GEO provides directional insights but not automated, data-driven recommendations tied to measurable outcomes."
  },
  {
    question: "Can Analyze AI monitor competitors' AI visibility too?",
    answer: "Yes. Analyze AI benchmarks your AI traffic and visibility against competitors, helping you see who is gaining ground and where to react. GEO also offers competitor benchmarking, but it remains at the visibility layer rather than connecting competitor performance to conversion metrics."
  },
  {
    question: "How easy is it to set up Analyze AI compared to Writesonic GEO?",
    answer: "Analyze AI requires only a GA4 connection and domain entry—it's live in minutes. GEO setup is also straightforward but depends on integration within the broader Writesonic platform, which may involve account setup and linking if you're not an existing user."
  },
  {
    question: "How much does Analyze AI cost?",
    answer: "Analyze AI costs $99 per month, all-inclusive. GEO is part of higher Writesonic tiers, generally starting at around $199 per month, with pricing increasing for advanced features."
  },
  {
    question: "Who is Analyze AI best suited for?",
    answer: "Analyze AI serves SMBs, marketing teams, and agencies that want measurable AI traffic data, conversion tracking, and clear improvement guidance without enterprise-level costs. GEO fits larger content or brand-marketing teams who mainly want visibility reporting inside the Writesonic ecosystem."
  },
  {
    question: "Can I use Analyze AI alongside Writesonic GEO or other analytics tools?",
    answer: "Yes. Many users combine them—using GEO to see visibility snapshots and Analyze AI to measure the actual impact of that visibility in traffic and conversions. They complement each other rather than compete."
  }
];

export const FaqWritesonicGeo = () => {
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
              Analyze AI vs Writesonic GEO: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze AI and Writesonic GEO for AI visibility tracking
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
