"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze and AthenaHQ?",
    answer: "Analyze is designed as a lightweight, actionable analytics platform for AI visibility and real traffic attribution. AthenaHQ, in contrast, is an enterprise intelligence suite for AI model monitoring and performance analytics. It focuses more on internal AI and data-governance metrics than on website visibility and conversions. Analyze zeroes in on external visibility—how AI engines drive traffic and results to your site—and translates that into tangible marketing outcomes."
  },
  {
    question: "Does Analyze track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes. Analyze tracks and categorizes authentic GA4 sessions by AI source. AthenaHQ monitors AI model outputs and performance metrics but doesn't connect to your GA4 or track inbound AI-engine traffic to your website."
  },
  {
    question: "Can Analyze show which pages are getting AI-generated traffic?",
    answer: "Yes. Analyze lists all pages receiving AI-engine visits and helps you understand which content is performing best within generative search environments. AthenaHQ doesn't provide web-traffic analytics—it's focused on internal model analytics and performance dashboards."
  },
  {
    question: "Does Analyze measure conversions from AI traffic?",
    answer: "Yes. Conversions from AI sources are automatically captured, allowing you to quantify the business value of AI visibility. AthenaHQ does not measure marketing conversions; it measures AI-system metrics like response accuracy, latency, or compliance."
  },
  {
    question: "How does Analyze identify opportunities or actions to improve AI visibility?",
    answer: "Analyze provides dynamic recommendations—highlighting declining pages, missed AI queries, and optimization paths. It helps teams act on opportunities quickly. AthenaHQ focuses on performance management and system alerts rather than marketing actions or content opportunities."
  },
  {
    question: "Can Analyze monitor competitors' AI visibility too?",
    answer: "Yes. Analyze benchmarks your visibility and AI-traffic trends against competitors, showing where your brand is winning or losing share. AthenaHQ is not designed for competitive marketing analysis—it's a platform for internal AI governance."
  },
  {
    question: "How easy is it to set up Analyze compared to AthenaHQ?",
    answer: "Analyze is plug-and-play—connect GA4, add your site, and start viewing results in minutes. AthenaHQ typically requires enterprise onboarding, API access, and account configuration, reflecting its focus on corporate AI operations."
  },
  {
    question: "How much does Analyze cost?",
    answer: "Analyze costs $99 per month. AthenaHQ operates at enterprise-level pricing, often several hundred dollars per month or more, depending on usage tiers and data volumes."
  },
  {
    question: "Who is Analyze best suited for?",
    answer: "Analyze is tailored for marketing, growth, and SEO teams who want actionable AI visibility and performance insights. AthenaHQ is best suited for enterprises managing AI models, compliance, and operational performance internally."
  },
  {
    question: "Can I use Analyze alongside AthenaHQ or other analytics tools?",
    answer: "Yes. They serve completely different purposes: Analyze focuses on marketing and audience analytics, while AthenaHQ supports internal AI model governance. They can coexist seamlessly without overlap."
  }
];

export const FaqAthenaHQ = () => {
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
              Analyze vs AthenaHQ: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze and AthenaHQ for AI visibility tracking
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
