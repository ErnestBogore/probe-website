"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze and Peec AI?",
    answer: "The main difference is that Analyze ties AI-engine visibility not only to mentions/prompts but to actual website traffic, page-level insights, conversions and prioritized actions, while Peec AI focuses more on monitoring visibility, mentions, prompts, and share-of-voice across AI engines without full attribution to GA4 traffic + conversions or deep actionable optimization steps."
  },
  {
    question: "Does Analyze track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes — Analyze brings real traffic data from AI engines into GA4-based dashboards and links to actual website metrics. Peec AI does not clearly provide GA4-based traffic or conversion attribution; it primarily tracks prompts, mentions, visibility in AI."
  },
  {
    question: "Can Analyze show which pages are getting AI-generated traffic?",
    answer: "Yes — Analyze surfaces page-level data showing which pages are receiving AI-engine referrals and conversions. Peec AI gives prompt-level visibility and mentions, but review commentary says it lacks detailed mapping of traffic to pages."
  },
  {
    question: "Does Analyze measure conversions from AI traffic?",
    answer: "Yes — Analyze supports conversion tracking for AI-engine derived traffic, enabling ROI measurement. Peec AI does not visibly offer conversion attribution in its public materials; it is strong on tracking brand visibility but weaker on \"what to do\" and \"what conversion benefit\"."
  },
  {
    question: "How does Analyze identify opportunities or actions to improve AI visibility?",
    answer: "Analyze delivers prioritized action items (e.g., fix pages with high drop-off, optimize content for specific AI engine prompt classes, competitor gap closes). Peec AI does offer insights like \"which prompts trigger your brand\" and \"which sources are cited\", but according to reviews it lacks deeper optimization guidance and actionable road-map steps."
  },
  {
    question: "Can Analyze monitor competitors' AI visibility too?",
    answer: "Yes — Analyze includes competitor monitoring: you can track your brand vs others across AI-engine traffic, visibility, conversions, and gaps. Peec AI also provides competitor benchmarking (brand mentions, prompt coverage) across AI platforms."
  },
  {
    question: "How easy is it to set up Analyze compared to Peec AI?",
    answer: "Analyze setup is straightforward: connect GA4, select engines, define goals/pages; built for rapid time-to-value. Peec AI also markets ease-of-use (\"plug and play\"), especially for visibility tracking. But if you need conversion attribution or page-level traffic details, you may need extra setup/workarounds."
  },
  {
    question: "How much does Analyze cost?",
    answer: "Analyze is priced at $99/month (flat). Peec AI entry plan is €89/month (~$95) for limited prompts/engines; pricing rises with more prompts/engines to €199 or €499+."
  },
  {
    question: "Who is Analyze best suited for?",
    answer: "Analyze is best for SMBs, agencies, growth-teams that want to measure real AI-engine derived traffic and conversions, optimize page by page, and act on prioritized recommendations—without high cost. Peec AI is more suited for teams who want to track brand presence-in-AI search, prompts, mentions, and competitor share but may not yet need deep conversion attribution or optimization workflows."
  },
  {
    question: "Can I use Analyze alongside Peec AI or other analytics tools?",
    answer: "Yes — You can run Analyze alongside Peec AI (or other visibility tools). For example, you might use Peec for high-level visibility/mention tracking, and Analyze for traffic/conversion attribution and action-planning. They complement rather than exclude each other. Peec AI likewise can be used alongside analytics tools; many users layer visibility dashboards with GA4 and other tools to fill gaps."
  }
];

export const FaqPeecAi = () => {
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
              Analyze vs Peec AI: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze and Peec AI for AI visibility tracking
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
