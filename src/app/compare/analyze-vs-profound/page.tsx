import { ResourceAllocationProfound } from '@/components/compare/profound/resource-allocation-profound';
import { HeroComparisonProfound } from '@/components/compare/profound/hero-comparison-profound';
import { ComparisonSectionProfound } from '@/components/compare/profound/comparison-section-profound';
import { ComprehensiveSectionProfound } from '@/components/compare/profound/comprehensive-section-profound';
import { FeaturesProfound } from '@/components/compare/profound/features-profound';
import { FaqProfound } from '@/components/compare/profound/faq-profound';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze vs. Profound: Feature Comparison',
  description: 'Compare how Analyze and Profound impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsProfoundPage = () => {

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "ANALYZE vs Profound Comparison",
    description: "Compare ANALYZE and Profound for AI search visibility tracking. See why ANALYZE offers superior AI-first analytics beyond traditional analysis tools.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-profound",
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
      
      <HeroComparisonProfound />
      <ComparisonSectionProfound />
      <ComprehensiveSectionProfound />
      <FeaturesProfound />
      <ResourceAllocationProfound />
      <FaqProfound />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsProfoundPage;
