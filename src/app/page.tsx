/**
 * Main Page Component
 * 
 * The landing page of our application showcasing the integrated
 * shadcn components, animations, and modern UI patterns.
 */

import type { Metadata } from 'next';
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { ModernFeatures } from "@/components/marketing/modern-features";
import { ResourceAllocation } from "@/components/marketing/resource-allocation";
import { ProblemSolution } from "@/components/marketing/problem-solution";
import { Testimonials } from "@/components/marketing/testimonials";
import { Manifesto } from "@/components/marketing/manifesto";
import { Cta } from "@/components/marketing/cta";
import { Faq3 } from "@/components/faq3";
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Search Analytics For Marketing Teams | Analyze',
  description: 'Understand how AI sees your brand. Monitor search rankings, analyze sentiment, and protect your reputation with our powerful AI analytics platform. Get started today.',
  openGraph: {
    title: 'AI Search Analytics For Marketing Teams | Analyze',
    description: 'Understand how AI sees your brand. Monitor search rankings, analyze sentiment, and protect your reputation with our powerful AI analytics platform. Get started today.',
    images: ['/Artboard (1).png'],
  },
};

export default function Home() {
  // Generate combined structured data for homepage
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { ...organizationSchema, "@context": undefined },
      { ...websiteSchema, "@context": undefined }
    ]
  };

  // Homepage FAQ items
  const homepageFaqItems = [
    {
      id: 'faq-1',
      question: 'What is Analyze and how does it work?',
      answer: 'Analyze is an AI search analytics platform that helps you understand how your brand appears in AI-powered search results. We track your visibility across major AI answer engines like Google SGE, Perplexity, and ChatGPT, giving you insights into your AI search performance.'
    },
    {
      id: 'faq-2',
      question: 'Why is AI search analytics important for my business?',
      answer: 'As AI-powered search becomes more prevalent, traditional SEO metrics are no longer enough. AI search analytics helps you understand how your brand is represented in AI-generated answers, which is crucial for maintaining visibility and authority in the new search landscape.'
    },
    {
      id: 'faq-3',
      question: 'Which AI search engines do you monitor?',
      answer: 'We monitor a comprehensive list of AI search and answer engines including Google SGE (Search Generative Experience), Perplexity, ChatGPT, Microsoft Copilot, and other emerging AI-powered search platforms.'
    },
    {
      id: 'faq-4',
      question: 'How is this different from traditional SEO tools?',
      answer: 'Traditional SEO tools focus on ranking in blue-link search results. Analyze focuses on your brand\'s inclusion and visibility within AI-generated summaries and answers. It\'s designed for the new era of AI-driven search where answers are synthesized rather than just linked.'
    },
    {
      id: 'faq-5',
      question: 'Can I track my competitors with Analyze?',
      answer: 'Yes! Our platform includes competitive intelligence features that allow you to track your competitors\' visibility in AI search results, helping you identify opportunities and benchmark your performance against industry leaders.'
    },
    {
      id: 'faq-6',
      question: 'How do I get started with Analyze?',
      answer: 'Getting started is simple. Sign up for a free account, add your website and key topics you want to monitor, and we\'ll begin tracking your AI search performance. You\'ll get insights and recommendations to improve your visibility in AI-generated answers.'
    }
  ];

  return (
    <main className="bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Hero />
      <ProblemSolution />
      <ModernFeatures />
      <Manifesto />
      <Testimonials />
      <Features />
      <ResourceAllocation />
      <Faq3 
        heading="Frequently Asked Questions"
        description="Find answers to common questions about our AI search analytics platform. Can't find what you're looking for? Contact our support team."
        items={homepageFaqItems}
      />
      <Cta />
    </main>
  );
}
