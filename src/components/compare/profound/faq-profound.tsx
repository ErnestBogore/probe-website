"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze AI and Profound?",
    answer: "Analyze AI democratizes AI visibility analytics for SMBs—measuring real traffic, conversions, and opportunities—whereas Profound is an enterprise-grade platform focused on visibility intelligence and reporting for large organizations. Profound offers deep dashboards and custom data visualizations, but Analyze AI provides the action layer that ties visibility to revenue impact and makes insights accessible without an analyst."
  },
  {
    question: "Does Analyze AI track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes. Analyze AI directly attributes traffic from AI engines to your GA4 data, letting you see verified sessions and trends per engine. Profound focuses on visibility scoring and brand presence but does not include GA4-based attribution or conversion tracking."
  },
  {
    question: "Can Analyze AI show which pages are getting AI-generated traffic?",
    answer: "Yes. Analyze AI shows page-level traffic insights from each AI engine, revealing where AI-driven discovery is happening on your site. Profound's reports tend to summarize visibility at the brand or topic level, not the page level."
  },
  {
    question: "Does Analyze AI measure conversions from AI traffic?",
    answer: "Yes. Conversions are part of Analyze AI's core design—tracking leads and purchases from AI-engine referrals. Profound typically does not include conversion analytics; its primary purpose is monitoring visibility, trends, and sentiment."
  },
  {
    question: "How does Analyze AI identify opportunities or actions to improve AI visibility?",
    answer: "Analyze AI prioritizes opportunities into an actionable to-do list. Each insight comes with a recommended fix—such as strengthening structured data, enhancing page metadata, or targeting new AI prompts. Profound delivers powerful dashboards but expects analysts or strategists to interpret and act on the data manually."
  },
  {
    question: "Can Analyze AI monitor competitors' AI visibility too?",
    answer: "Yes. Analyze AI continuously tracks competitor visibility, traffic trends, and AI citation share. Profound also includes competitive intelligence, though it's positioned more for corporate insight teams than agile marketing teams."
  },
  {
    question: "How easy is it to set up Analyze AI compared to Profound?",
    answer: "Analyze AI is extremely quick to deploy—connect GA4, verify your site, and select competitors. Profound requires enterprise onboarding, custom account setup, and data-integration support."
  },
  {
    question: "How much does Analyze AI cost?",
    answer: "Analyze AI is $99 per month, designed for SMBs and agencies. Profound operates on enterprise contracts, typically in the $400–$500 per month range or higher."
  },
  {
    question: "Who is Analyze AI best suited for?",
    answer: "Analyze AI suits marketing teams, agencies, and founders who want fast, clear visibility into AI-generated traffic and ROI. Profound suits corporate insight teams with dedicated analysts managing multiple brands and data pipelines."
  },
  {
    question: "Can I use Analyze AI alongside Profound or other analytics tools?",
    answer: "Yes. Analyze AI can run alongside Profound or any other analytics suite. Many organizations use Profound for corporate-level visibility and Analyze AI for hands-on, GA4-based performance tracking and execution support."
  }
];

export const FaqProfound = () => {
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
              Analyze AI vs Profound: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze AI and Profound for AI visibility tracking
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
