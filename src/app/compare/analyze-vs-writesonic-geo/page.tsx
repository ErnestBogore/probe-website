import { ResourceAllocationWritesonicGeo } from '@/components/compare/writesonic-geo/resource-allocation-writesonic-geo';
import { HeroComparisonWritesonicGeo } from '@/components/compare/writesonic-geo/hero-comparison-writesonic-geo';
import { ComparisonSectionWritesonicGeo } from '@/components/compare/writesonic-geo/comparison-section-writesonic-geo';
import { ComprehensiveSectionWritesonicGeo } from '@/components/compare/writesonic-geo/comprehensive-section-writesonic-geo';
import { FeaturesWritesonicGeo } from '@/components/compare/writesonic-geo/features-writesonic-geo';
import { FaqWritesonicGeo } from '@/components/compare/writesonic-geo/faq-writesonic-geo';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze vs. Writesonic GEO: Feature Comparison',
  description: 'Compare how Analyze and Writesonic GEO impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsWritesonicGeoPage = () => {

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "ANALYZE vs Writesonic GEO Comparison",
    description: "Compare ANALYZE and Writesonic GEO for AI search visibility tracking. See why ANALYZE offers superior AI-first analytics beyond traditional content tools.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-writesonic-geo",
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
      
      <HeroComparisonWritesonicGeo />
      <ComparisonSectionWritesonicGeo />
      <ComprehensiveSectionWritesonicGeo />
      <FeaturesWritesonicGeo />
      <ResourceAllocationWritesonicGeo />
      <FaqWritesonicGeo />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsWritesonicGeoPage;
