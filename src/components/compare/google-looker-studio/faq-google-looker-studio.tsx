"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze AI and Google Looker Studio?",
    answer: "Analyze AI is a purpose-built AI-visibility analytics platform; Looker Studio is a visualization tool. Looker can visualize any data source but doesn't natively know how to detect or classify AI-engine referrals. Analyze, by contrast, already connects those dots—it ingests GA4 data, detects traffic from AI sources, maps it to pages, trends, and conversions, and adds interpretation and prioritization."
  },
  {
    question: "Does Analyze AI track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes. Analyze AI automatically identifies and segments visits from AI engines within your GA4 data. Looker Studio can only show that data if you build and maintain the models yourself; it doesn't have built-in logic for AI-engine attribution."
  },
  {
    question: "Can Analyze AI show which pages are getting AI-generated traffic?",
    answer: "Yes. Analyze AI provides clear page-level reports showing exactly which URLs gain traffic from AI engines and how those visits behave. Looker Studio can theoretically show the same if you manually build filters and datasets—but Analyze AI does it out-of-the-box."
  },
  {
    question: "Does Analyze AI measure conversions from AI traffic?",
    answer: "Yes. Conversions from AI visits are automatically calculated inside Analyze AI, including goal and e-commerce metrics. Looker Studio only visualizes whatever conversion data you supply—it won't isolate AI-related conversions without extensive manual setup."
  },
  {
    question: "How does Analyze AI identify opportunities or actions to improve AI visibility?",
    answer: "Analyze AI evaluates shifts in traffic, engine trends, and page performance, then ranks actions such as \"optimize schema for Google Overviews\" or \"expand prompt coverage for ChatGPT.\" Looker Studio provides no built-in recommendations; it's a reporting canvas."
  },
  {
    question: "Can Analyze AI monitor competitors' AI visibility too?",
    answer: "Yes. Analyze AI tracks competitive domains within the same AI engines, showing comparative visibility, traffic, and growth patterns. Looker Studio depends on you to supply competitor data; it doesn't collect any by default."
  },
  {
    question: "How easy is it to set up Analyze AI compared to Looker Studio?",
    answer: "Analyze AI setup is plug-and-play: connect GA4, choose AI engines, and insights appear. Looker Studio requires data connectors, schema design, and manual configuration, making setup more technical."
  },
  {
    question: "How much does Analyze AI cost?",
    answer: "Analyze AI costs $99 per month. Looker Studio is free for basic use, but meaningful AI-tracking requires third-party connectors and engineering time, which often cost more than Analyze AI's subscription."
  },
  {
    question: "Who is Analyze AI best suited for?",
    answer: "Analyze AI is ideal for marketers who need instant clarity on AI traffic and actions without building dashboards. Looker Studio is better for data analysts or teams already maintaining custom BI environments."
  },
  {
    question: "Can I use Analyze AI alongside Looker Studio or other analytics tools?",
    answer: "Yes. Analyze AI can export its AI-traffic metrics to Looker Studio, GA4, or any BI layer, enabling you to enrich your existing dashboards with real AI-specific data."
  }
];

export const FaqGoogleLookerStudio = () => {
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
              Analyze AI vs Google Looker Studio: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze AI and Google Looker Studio for AI visibility tracking
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
