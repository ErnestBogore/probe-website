import { ResourceAllocationSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/resource-allocation-semrush-ai-toolkit';
import { HeroComparisonSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/hero-comparison-semrush-ai-toolkit';
import { ComparisonSectionSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/comparison-section-semrush-ai-toolkit';
import { ComprehensiveSectionSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/comprehensive-section-semrush-ai-toolkit';
import { FeaturesSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/features-semrush-ai-toolkit';
import { FaqSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/faq-semrush-ai-toolkit';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze vs. Semrush AI Toolkit: Feature Comparison',
  description: 'Compare how Analyze and Semrush AI Toolkit impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsSemrushAiToolkitPage = () => {

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "ANALYZE vs Semrush AI Toolkit Comparison",
    description: "Compare ANALYZE and Semrush AI Toolkit for AI search visibility tracking. See why ANALYZE offers superior AI-first analytics beyond traditional SEO tools.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-semrush-ai-toolkit",
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
      
      <HeroComparisonSemrushAiToolkit />
      <ComparisonSectionSemrushAiToolkit />
      <ComprehensiveSectionSemrushAiToolkit />
      <FeaturesSemrushAiToolkit />
      <ResourceAllocationSemrushAiToolkit />
      <FaqSemrushAiToolkit />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsSemrushAiToolkitPage;
