"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const AffiliateFaq = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems: FaqItem[] = [
    {
      id: 'affiliate-faq-1',
      question: 'How much commission do I earn per referral?',
      answer: 'You earn 30% recurring commission for every customer you refer. This means if a customer pays $100/month, you earn $30 every month for as long as they remain a paying customer.'
    },
    {
      id: 'affiliate-faq-2',
      question: 'How long do I earn commissions?',
      answer: 'Forever! As long as the customer you referred continues to pay for Analyze AI, you will continue to receive your 30% commission. There are no time limits or caps on your earnings.'
    },
    {
      id: 'affiliate-faq-3',
      question: 'When do I get paid?',
      answer: 'Commissions are paid out monthly via PayPal (or your preferred payment method) once you reach our minimum threshold of $50. Payments are processed within the first week of each month.'
    },
    {
      id: 'affiliate-faq-4',
      question: 'How do I track my referrals and earnings?',
      answer: 'You\'ll get access to a dedicated affiliate dashboard where you can track clicks, conversions, earnings, and payment history in real-time. You\'ll also receive detailed monthly reports.'
    },
    {
      id: 'affiliate-faq-5',
      question: 'What marketing materials do you provide?',
      answer: 'We provide a complete marketing toolkit including banner ads, email templates, social media assets, product demos, case studies, and detailed product information to help you promote effectively.'
    },
    {
      id: 'affiliate-faq-6',
      question: 'Who is the ideal customer for Analyze AI?',
      answer: 'Marketing teams, SEO professionals, content creators, and businesses who want to understand and improve their visibility in AI search results. Anyone dealing with AI-driven search traffic will find value in Analyze AI.'
    },
    {
      id: 'affiliate-faq-7',
      question: 'Is there a limit to how much I can earn?',
      answer: 'Absolutely not! There are no caps on your earnings. The more qualified customers you refer, the more you earn. Some of our top affiliates earn thousands of dollars per month.'
    },
    {
      id: 'affiliate-faq-8',
      question: 'How do I get started?',
      answer: 'Simply apply for our affiliate program, get approved, and receive your unique referral link. Start promoting Analyze AI to your audience using our marketing materials and track your success through the affiliate dashboard.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900 mb-4">
              Affiliate Program FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about earning with the Analyze AI affiliate program.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div key={item.id} className="bg-gray-50 rounded-lg border border-gray-200">
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
