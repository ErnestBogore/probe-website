"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze AI and Ahrefs Brand Radar?",
    answer: "The main difference is that Analyze AI not only tracks visibility across AI engines but also connects that traffic to real GA4 data (sessions, conversions, pages), and surfaces prioritized actions. In contrast, Ahrefs Brand Radar offers a strong brand-and-AI-visibility layer (mentions, share of voice across AI Overviews, etc.) but lacks explicit GA4-based traffic + conversion attribution."
  },
  {
    question: "Does Analyze AI track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes. Analyze AI connects to your analytics (e.g., GA4) and attributes actual user sessions and pages to specific AI-engines, showing real traffic from those sources. Ahrefs Brand Radar does not clearly provide GA4-based traffic attribution for AI engines—it focuses on prompts, mentions, and share of voice."
  },
  {
    question: "Can Analyze AI show which pages are getting AI-generated traffic?",
    answer: "Yes — Analyze AI surfaces precisely which pages on your site are receiving visits attributable to AI engine referrals, enabling you to understand page-level performance. Ahrefs Brand Radar offers insights like which domains are cited, and topic-ownership, but does not explicitly map AI-engine traffic to your internal page analytics."
  },
  {
    question: "Does Analyze AI measure conversions from AI traffic?",
    answer: "Yes — Analyze AI measures not just visits but conversions (goals/e-commerce) originating from AI engine traffic, so you can evaluate ROI from AI visibility. Ahrefs Brand Radar does not prominently claim conversions from AI engine traffic; it is more focused on visibility and share-of-voice metrics."
  },
  {
    question: "How does Analyze AI identify opportunities or actions to improve AI visibility?",
    answer: "Analyze AI provides prioritized, actionable recommendations (for example: \"page X has high drops in AI referrals—optimize for prompt Y\", or \"your competitor is gaining in AI engine Z—here's how to close the gap\"). It moves beyond dashboards to action-ticks. Ahrefs Brand Radar offers strong diagnostics (visibility gaps, topic ownership, competitor comparison) but less in the way of prescriptive, prioritized action steps tied to your site's traffic and conversion outcomes."
  },
  {
    question: "Can Analyze AI monitor competitors' AI visibility too?",
    answer: "Yes — Analyze AI offers competitive monitoring, showing how you stack up versus peers across AI engine traffic, visibility, conversions, and actionable gaps. Ahrefs Brand Radar also supports competitor benchmarking (share of voice, topic ownership) in its AI visibility layer."
  },
  {
    question: "How easy is it to set up Analyze AI compared to Ahrefs Brand Radar?",
    answer: "Analyze AI is designed for relatively low setup time: connect GA4, choose AI engines you care about, and you're live. Ahrefs Brand Radar is very low-setup for visibility tracking (no site tagging required), but because it lacks deep integration with your conversions, you'll need to pair it with analytics externally if you want full attribution."
  },
  {
    question: "How much does Analyze AI cost?",
    answer: "Analyze AI is priced at $99 / month (flat). Ahrefs Brand Radar is an add-on to Ahrefs; the AI indexes are now available at ~$99/mo each, but you still need a base Ahrefs plan, making total costs higher."
  },
  {
    question: "Who is Analyze AI best suited for?",
    answer: "Analyze AI is best for small to mid-sized businesses, agencies, marketers who want concrete AI-engine traffic insights, page-level detail, and conversion attribution—without the enterprise price tag. Ahrefs Brand Radar is suited for brands or agencies already using Ahrefs who primarily want visibility tracking and share-of-voice across AI, and are comfortable doing deeper attribution externally."
  },
  {
    question: "Can I use Analyze AI alongside Ahrefs Brand Radar or other analytics tools?",
    answer: "Yes — Analyze AI is built to integrate with GA4 and other analytics tools, and it can run alongside Ahrefs Brand Radar (or other SEO/visibility tools). Many teams will use Analyze AI for AI-traffic/conversion attribution and still use Ahrefs for broader SEO/keyword rank tracking. Ahrefs Brand Radar likewise can coexist with other analytics tools; its visibility layer can supplement what Analyze AI provides."
  }
];

export const FaqAhrefsBrandRadar = () => {
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
              Analyze AI vs Ahrefs Brand Radar: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze AI and Ahrefs Brand Radar for AI visibility tracking
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
