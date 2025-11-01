import { ResourceAllocationPeecAi } from '@/components/compare/peec-ai/resource-allocation-peec-ai';
import { HeroComparisonPeecAi } from '@/components/compare/peec-ai/hero-comparison-peec-ai';
import { ComparisonSectionPeecAi } from '@/components/compare/peec-ai/comparison-section-peec-ai';
import { ComprehensiveSectionPeecAi } from '@/components/compare/peec-ai/comprehensive-section-peec-ai';
import { FeaturesPeecAi } from '@/components/compare/peec-ai/features-peec-ai';
import { FaqPeecAi } from '@/components/compare/peec-ai/faq-peec-ai';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze vs. Peec AI: Feature Comparison',
  description: 'Compare how Analyze and Peec AI impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsPeecAiPage = () => {

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "ANALYZE vs Peec AI Comparison",
    description: "Compare ANALYZE and Peec AI for AI search visibility tracking. See why ANALYZE offers superior AI-first analytics beyond traditional AI tools.",
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
      <FaqPeecAi />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsPeecAiPage;
