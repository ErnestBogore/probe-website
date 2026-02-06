"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What is the main difference between Analyze AI and Google Search Console?",
    answer: "Analyze AI measures visibility and performance across AI engines—like ChatGPT, Perplexity, and Google AI Overviews—whereas Google Search Console measures web search visibility within Google's own SERPs. GSC provides traditional SEO metrics such as clicks, impressions, and indexing coverage, while Analyze AI extends analytics into the AI-driven web to show where and how generative tools are sending visitors."
  },
  {
    question: "Does Analyze AI track real traffic from AI engines like ChatGPT, Perplexity, or Google AI Overviews?",
    answer: "Yes. Analyze AI directly identifies and tracks sessions from AI engines inside GA4, showing the quantity and quality of traffic they deliver. GSC does not recognize AI engines as a traffic source—it only tracks standard search clicks from Google."
  },
  {
    question: "Can Analyze AI show which pages are getting AI-generated traffic?",
    answer: "Yes. Analyze AI lists every page receiving AI-driven visits, providing a clear sense of which content resonates with generative engines. GSC can show which pages rank in Google search, but it doesn't separate or identify AI Overview traffic or generative responses."
  },
  {
    question: "Does Analyze AI measure conversions from AI traffic?",
    answer: "Yes. Analyze AI integrates with GA4 to show conversions tied to AI-sourced sessions. GSC does not track conversions—it's focused on search visibility, not user behavior after the click."
  },
  {
    question: "How does Analyze AI identify opportunities or actions to improve AI visibility?",
    answer: "Analyze AI proactively highlights opportunities to improve AI exposure—such as adding structured data, enhancing meta language, or fixing pages losing AI referrals. GSC provides valuable SEO suggestions but doesn't include AI visibility diagnostics or to-do prioritization."
  },
  {
    question: "Can Analyze AI monitor competitors' AI visibility too?",
    answer: "Yes. Analyze AI benchmarks your visibility against competitors across AI engines. GSC only provides data for your verified domains and cannot be used for competitive tracking."
  },
  {
    question: "How easy is it to set up Analyze AI compared to Google Search Console?",
    answer: "Both are simple to set up. GSC requires site verification through DNS or HTML tags; Analyze AI only requires connecting GA4 and entering your domain. The difference lies in purpose—Analyze AI starts showing AI data immediately, while GSC focuses on web search."
  },
  {
    question: "How much does Analyze AI cost?",
    answer: "Analyze AI is $99 per month. GSC is free but limited to Google search data and lacks AI visibility, traffic attribution, or conversion reporting."
  },
  {
    question: "Who is Analyze AI best suited for?",
    answer: "Analyze AI is for marketers, agencies, and SEO teams ready to move beyond traditional search analytics into AI visibility and performance tracking. GSC remains indispensable for basic SEO insights but doesn't address the emerging AI discovery layer."
  },
  {
    question: "Can I use Analyze AI alongside Google Search Console or other analytics tools?",
    answer: "Absolutely. Analyze AI complements GSC perfectly: GSC covers traditional search visibility, while Analyze AI shows where AI engines generate new traffic opportunities. Together, they give a complete view of organic and generative performance."
  }
];

export const FaqGsc = () => {
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
              Analyze AI vs Google Search Console: FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about choosing between Analyze AI and Google Search Console for AI visibility tracking
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
