import { Hero115 } from '@/components/features/ai-search-analytics/hero-115';
import { Faq3 } from '@/components/faq3';
import { Feature166 } from '@/components/feature166';
import { Cta } from '@/components/marketing/cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'AI Search Analytics Platform | Analyze',
  description: "Measure what matters in the new era of search. Track AI rankings, analyze competitors, and connect your AI visibility to traffic and conversions with Analyze.",
  openGraph: {
    images: ['/Hero-image-feature.png'],
  },
};

const AISearchAnalyticsPage = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'What is AI Search Analytics?',
      answer: 'AI Search Analytics helps you understand how your brand appears in AI-powered search results, like those from Perplexity, and Google\'s AI Overviews. It tracks your visibility and performance beyond traditional search engines.'
    },
    {
      id: 'faq-2',
      question: 'Which AI search engines do you support?',
      answer: 'We support a growing list of major AI search and answer engines, including Google SGE, Perplexity, ChatGPT, and more. Our goal is to provide the most comprehensive coverage of the AI search landscape.'
    },
    {
      id: 'faq-3',
      question: 'How is this different from traditional SEO?',
      answer: 'While traditional SEO focuses on ranking in blue-link search results, AI Search Analytics focuses on your brand\'s inclusion and visibility within AI-generated summaries and answers. It\'s the next evolution of search performance measurement.'
    },
    {
      id: 'faq-4',
      question: 'Can I track my competitors?',
      answer: 'Yes, our platform allows you to track your competitors\' visibility in AI search results, giving you a complete picture of the competitive landscape.'
    }
  ];

  const logos = [
    { src: '/openai.png', alt: 'OpenAI Logo', className: 'top-[70%] left-[10%] md:left-[15%]' },
    { src: '/anthropic.png', alt: 'Anthropic Logo', className: 'top-[70%] right-[10%] md:right-[15%]' },
    { src: '/gemini-color.png', alt: 'Gemini Logo', className: 'top-[50%] left-[2%] md:left-[5%]' },
    { src: '/copilot-color.png', alt: 'Copilot Logo', className: 'top-[50%] right-[2%] md:right-[5%]' },
    { src: '/deepseek-color.png', alt: 'DeepSeek Logo', className: 'top-[5%] left-[10%] md:left-[15%]' },
    { src: '/grok.png', alt: 'Grok Logo', className: 'top-[5%] right-[10%] md:right-[15%]' },
  ];

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "AI Search Analytics Platform",
    description: "Measure what matters in the new era of search. Track AI rankings, analyze competitors, and connect your AI visibility to traffic and conversions.",
    url: "https://www.tryanalyze.ai/features/ai-search-analytics",
    category: "Analytics Software",
    features: [
      "Track AI Answer Engine Rankings",
      "Competitive Intelligence",
      "Content Opportunity Analysis", 
      "Performance Impact Measurement"
    ]
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <Hero115 
      pillText="AI Search Analytics Platform"
      heading="Understand Your True AI Search Performance"
      description="Go beyond vanity metrics. Analyze gives you a complete picture of your brand's visibility across major AI answer engines, so you can measure what matters and make smarter decisions."
      button={{
        text: "Show Me My AI Rankings",
        url: "/signup",
      }}
      imageSrc="/Hero-image-feature.png"
      imageAlt="A dashboard showing AI traffic analytics and referral trends."
      logos={logos}
    />
    <Feature166 
      heading="Key Features for AI Search Dominance"
      description="Our platform is packed with features to help you understand, strategize, and win in the new era of AI-driven search."
      feature1={{
        title: "Track AI Answer Engine Rankings",
        description: "Monitor your brand's visibility across major AI answer engines like Google SGE and Perplexity to see where you stand.",
        image: "/AI traffic.png"
      }}
      feature2={{
        title: "Competitive Intelligence",
        description: "Gain insights into your competitors' AI search performance and identify opportunities to outperform them.",
        image: "/Competitive insights.png"
      }}
      feature3={{
        title: "Content Opportunity Analysis",
        description: "Discover content gaps and topics where you can become the authoritative source for AI-generated answers.",
        image: "/Artboard (1).png"
      }}
      feature4={{
        title: "Performance Impact Measurement",
        description: "Connect AI search visibility to your business goals by tracking referral traffic and conversions.",
        image: "/Chats.png"
      }}
    />
    <Faq3 
      heading="Frequently Asked Questions"
      description="Find answers to common questions about our AI Search Analytics platform."
      items={faqItems}
    />
    <Cta />
    </>
  );
};

export default AISearchAnalyticsPage;
