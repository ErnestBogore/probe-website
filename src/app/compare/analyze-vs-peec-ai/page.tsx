import { ResourceAllocationPeecAi } from '@/components/compare/peec-ai/resource-allocation-peec-ai';
import { HeroComparisonPeecAi } from '@/components/compare/peec-ai/hero-comparison-peec-ai';
import { ComparisonSectionPeecAi } from '@/components/compare/peec-ai/comparison-section-peec-ai';
import { ComprehensiveSectionPeecAi } from '@/components/compare/peec-ai/comprehensive-section-peec-ai';
import { FeaturesPeecAi } from '@/components/compare/peec-ai/features-peec-ai';
import { FaqPeecAi } from '@/components/compare/peec-ai/faq-peec-ai';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze AI vs. Peec AI: Feature Comparison',
  description: 'Compare how Analyze AI and Peec AI impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsPeecAiPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Analyze AI vs Peec AI Comparison",
    description: "Compare Analyze AI and Peec AI for AI search visibility tracking. See why Analyze AI offers superior AI-first analytics beyond traditional AI tools.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-peec-ai",
    category: "Analytics Software",
    features: [
      "AI Search Visibility Tracking",
      "AI Traffic Attribution", 
      "Competitor Analysis in AI",
      "Real-time AI Monitoring",
      "Citation Source Analysis",
      "AI Performance Metrics"
    ]
  });

  return (
    <main className="bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      
      <HeroComparisonPeecAi />
      <ComparisonSectionPeecAi />
      <ComprehensiveSectionPeecAi />
      <FeaturesPeecAi />
      <ResourceAllocationPeecAi />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqPeecAi />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsPeecAiPage;
