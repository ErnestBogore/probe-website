import { ResourceAllocationSurfer } from '@/components/compare/surfer/resource-allocation-surfer';
import { HeroComparisonSurfer } from '@/components/compare/surfer/hero-comparison-surfer';
import { ComparisonSectionSurfer } from '@/components/compare/surfer/comparison-section-surfer';
import { ComprehensiveSectionSurfer } from '@/components/compare/surfer/comprehensive-section-surfer';
import { FeaturesSurfer } from '@/components/compare/surfer/features-surfer';
import { FaqSurfer } from '@/components/compare/surfer/faq-surfer';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze vs. Surfer: Feature Comparison',
  description: 'Compare how Analyze and Surfer impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsSurferPage = () => {

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "ANALYZE vs Surfer Comparison",
    description: "Compare ANALYZE and Surfer for AI search visibility tracking. See why ANALYZE offers superior AI-first analytics beyond traditional SEO tools.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-surfer",
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
      
      <HeroComparisonSurfer />
      <ComparisonSectionSurfer />
      <ComprehensiveSectionSurfer />
      <FeaturesSurfer />
      <ResourceAllocationSurfer />
      <FaqSurfer />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsSurferPage;
