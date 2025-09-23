import { Hero115 } from '@/components/features/ai-search-analytics/hero-115';
import { Faq3 } from '@/components/faq3';
import { Feature166 } from '@/components/feature166';
import { Cta } from '@/components/marketing/cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Real-Time AI Search & Competitor Analysis Tool | Analyze',
  description: "Get immediate AI search insights. Our on-demand tool lets you run ad-hoc searches to see real-time rankings, analyze competitors, and view full LLM responses.",
  openGraph: {
    images: ['/ai search tool image.png'],
  },
};

const AISearchToolPage = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'What is the AI Search Tool?',
      answer: 'The AI Search Tool allows you to perform ad-hoc searches to see your real-time rankings across multiple Large Language Models (LLMs). It provides immediate insights without needing to set up a tracked project.'
    },
    {
      id: 'faq-2',
      question: 'Is this different from the AI Search Analytics platform?',
      answer: 'Yes. The AI Search Tool is for on-demand, single-query searches to get a snapshot of the current landscape. The full analytics platform is for continuous tracking, trend analysis, and deeper competitive insights over time.'
    },
    {
      id: 'faq-3',
      question: 'What kind of insights can I get from a single search?',
      answer: 'You can instantly see who dominates the search results for your query, identify the sources influencing the LLM responses through our citation engine, and read the full chat responses from each supported answer engine.'
    },
    {
      id: 'faq-4',
      question: 'Can I use this to check on my competitors?',
      answer: 'Absolutely. The tool is perfect for quick competitive spot-checks. You can see how your competitors are ranking for specific terms and identify who the top-ranking brands are for any given query across all LLMs.'
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
    name: "AI Search Tool",
    description: "Get immediate AI search insights. Run ad-hoc searches to see real-time rankings, analyze competitors, and view full LLM responses across all major answer engines with Analyze.",
    url: "https://www.tryanalyze.ai/features/ai-search-tool",
    category: "Search Analysis Tool",
    features: [
      "Real-Time SERP Analysis",
      "Citation & Source Tracking",
      "Full Chat Response Viewer",
      "Identify Market Dominators"
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
      pillText="AI Search Tool"
      heading="Get Instant AI Search Insights, On-Demand"
      description="Run ad-hoc searches to see your real-time rankings, analyze competitors, and understand the sources influencing LLM results across all major answer engines."
      button={{
        text: "Show Me My AI Rankings",
        url: "/signup",
      }}
      imageSrc="/ai search tool image.png"
      imageAlt="An image of the AI Search Tool interface showing search results across different LLMs."
      logos={logos}
    />
    <Feature166 
      heading="One Search, Total Clarity"
      description="Our AI Search Tool gives you the power to query the entire AI search landscape in a single click. Here’s what you can uncover."
      feature1={{
        title: "Real-Time SERP Analysis",
        description: "Instantly see how you, your competitors, or any brand ranks across all major LLMs for any search term.",
        image: "/Competitive insights.png"
      }}
      feature2={{
        title: "Citation & Source Tracking",
        description: "Uncover the exact sources and citations that LLMs use to formulate their answers, and identify key influencers.",
        image: "/Artboard (1).png"
      }}
      feature3={{
        title: "Full Chat Response Viewer",
        description: "Read the complete, unaltered chat responses from every answer engine to understand the full context of your search.",
        image: "/Chats.png"
      }}
      feature4={{
        title: "Identify Market Dominators",
        description: "Quickly identify which brands are dominating the conversation for your most important keywords and topics.",
        image: "/AI traffic.png"
      }}
    />
    <Faq3 
      heading="Frequently Asked Questions"
      description="Find answers to common questions about our ad-hoc AI Search Tool."
      items={faqItems}
    />
    <Cta />
    </>
  );
};

export default AISearchToolPage;
