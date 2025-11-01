"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze and HubSpot AI Search Grader?",
    answer: "Analyze is a continuous AI-visibility and traffic intelligence platform, while HubSpot AI Search Grader is a one-time assessment tool. HubSpot's grader provides a surface-level score of how well your brand appears across generative engines, but it doesn't track ongoing changes, traffic, or conversions. Analyze, on the other hand, turns AI visibility into measurable performance data by showing which engines send real visits, which pages attract those visits, and how those users convert. It replaces static \"grade\" snapshots with living analytics and actionable insights."
  },
  {
    question: "Does Analyze track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes. Analyze pulls verified session data from your GA4 account and attributes it to specific AI engines. This lets you see exactly how many visitors come from ChatGPT, Perplexity, Copilot, or Google AI Overviews, and how that traffic changes over time. HubSpot's grader doesn't measure traffic—it evaluates visibility factors algorithmically rather than through live referral data."
  },
  {
    question: "Can Analyze show which pages are getting AI-generated traffic?",
    answer: "Absolutely. Analyze reports which of your pages receive visits originating from AI engines. You can trace how each page performs, whether it's being surfaced by conversational answers, and where new discovery opportunities exist. HubSpot AI Search Grader doesn't provide page-level data; it only scores overall visibility and general content readiness."
  },
  {
    question: "Does Analyze measure conversions from AI traffic?",
    answer: "Yes. Conversions are core to Analyze's model. You can see form fills, sign-ups, and purchases tied to AI-engine referrals, connecting visibility directly to revenue. HubSpot's grader doesn't tie its grading output to conversion data, so it can't tell you what AI exposure is actually producing business results."
  },
  {
    question: "How does Analyze identify opportunities or actions to improve AI visibility?",
    answer: "Analyze continuously processes your data and generates prioritized \"next actions\"—specific steps to expand AI visibility or recover traffic. For example, it can recommend optimizing structured data for better inclusion in Overviews or updating metadata where drop-offs occur. HubSpot's grader provides broad suggestions but doesn't update dynamically or adapt to your actual traffic results."
  },
  {
    question: "Can Analyze monitor competitors' AI visibility too?",
    answer: "Yes. Analyze benchmarks your brand against competitors across AI engines, showing who appears in AI responses and who's receiving measurable traffic. HubSpot's grader can grade multiple domains, but it's not designed for continuous competitor monitoring."
  },
  {
    question: "How easy is it to set up Analyze compared to HubSpot AI Search Grader?",
    answer: "Setup for Analyze takes a few minutes: connect your GA4 property, add your domain, and select target AI engines. The platform immediately starts tracking. HubSpot's grader is even simpler but temporary—it requires no integration because it's a quick test, not an analytics system."
  },
  {
    question: "How much does Analyze cost?",
    answer: "Analyze costs $99 per month, including all tracking, reporting, and action features. HubSpot AI Search Grader is free but limited to snapshot grading, not full visibility analytics."
  },
  {
    question: "Who is Analyze best suited for?",
    answer: "Analyze is ideal for marketers, SMBs, and agencies that want to quantify AI traffic and act on data. HubSpot's grader is more for marketers looking for a quick awareness check or early diagnostic."
  },
  {
    question: "Can I use Analyze alongside HubSpot AI Search Grader or other analytics tools?",
    answer: "Yes. Many users run a HubSpot grade to benchmark and then rely on Analyze for continuous measurement. Analyze integrates cleanly with GA4, Looker, or other analytics, adding the AI-traffic and action layers those platforms lack."
  }
];

export const FaqHubspotAiSearchGrader = () => {
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
              Analyze vs HubSpot AI Search Grader: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze and HubSpot AI Search Grader for AI visibility tracking
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
