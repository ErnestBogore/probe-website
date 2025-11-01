"use client";

import { Faq3 } from "@/components/faq3";

export const PricingFaq = () => {
  const pricingFaqItems = [
    {
      id: 'pricing-faq-1',
      question: 'What\'s included in the $99/month plan?',
      answer: 'You get 3 AI answer engines (Claude, Perplexity, ChatGPT), 25 tracked prompts daily (2,250 answers/month), 50 ad hoc searches, unlimited competitor tracking, AI traffic analytics with GA4 integration, onboarding workshop, priority support, and unlimited seats.'
    },
    {
      id: 'pricing-faq-2',
      question: 'Which AI engines are included vs add-ons?',
      answer: 'The core plan includes Claude, Perplexity, and ChatGPT. Additional engines like DeepSeek, Grok, Gemini, and AI Mode are available as add-ons for expanded coverage.'
    },
    {
      id: 'pricing-faq-3',
      question: 'What\'s the difference between tracked prompts and ad hoc searches?',
      answer: 'Tracked prompts are monitored daily automatically (25 prompts = 2,250 total responses/month). Ad hoc searches are on-demand, one-time searches you can run anytime to test new prompts or do competitive analysis (50/month).'
    },
    {
      id: 'pricing-faq-4',
      question: 'How does the GA4 integration work?',
      answer: 'Connect your Google Analytics 4 property to see real AI referral traffic, which engines drive visits, which pages convert, and total AI traffic trends. We help with setup during your 15-minute onboarding workshop.'
    },
    {
      id: 'pricing-faq-5',
      question: 'What does "unlimited competitor tracking" mean?',
      answer: 'Track any number of competitors across all AI engines. See competitive positioning, share of voice metrics, who appears alongside you in AI responses, and head-to-head performance comparisons.'
    },
    {
      id: 'pricing-faq-6',
      question: 'What happens in the onboarding workshop?',
      answer: 'A 15-minute session where we explain any confusing parts, help with GA4 setup if needed, assist with GA4 conversion tracking, and share best practices for prompt selection and monitoring.'
    },
    {
      id: 'pricing-faq-7',
      question: 'Can I cancel anytime?',
      answer: 'Yes, cancel anytime with no questions asked. No long-term contracts or cancellation fees. Your subscription will remain active until the end of your current billing period.'
    },
    {
      id: 'pricing-faq-8',
      question: 'Do you offer annual discounts?',
      answer: 'Yes! Annual plans receive a 20% discount compared to monthly billing. You\'ll also get priority support and additional features with annual subscriptions.'
    },
    {
      id: 'pricing-faq-9',
      question: 'How many team members can use the account?',
      answer: 'Unlimited seats are included. Add as many team members as needed at no additional cost. Perfect for marketing teams, agencies, and growing businesses.'
    },
    {
      id: 'pricing-faq-10',
      question: 'What kind of support do you provide?',
      answer: 'Priority support with faster response times, plus the 15-minute onboarding workshop to get you started. We help with setup, best practices, and ongoing optimization.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 pb-0 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Faq3 
          heading="Pricing FAQ"
          description="Common questions about our pricing plans and features. Need more help? Contact our support team."
          items={pricingFaqItems}
        />
      </div>
    </section>
  );
};
