import { ResourceAllocationHubspotAiSearchGrader } from '@/components/compare/hubspot-ai-search-grader/resource-allocation-hubspot-ai-search-grader';
import { HeroComparisonHubspotAiSearchGrader } from '@/components/compare/hubspot-ai-search-grader/hero-comparison-hubspot-ai-search-grader';
import { ComparisonSectionHubspotAiSearchGrader } from '@/components/compare/hubspot-ai-search-grader/comparison-section-hubspot-ai-search-grader';
import { ComprehensiveSectionHubspotAiSearchGrader } from '@/components/compare/hubspot-ai-search-grader/comprehensive-section-hubspot-ai-search-grader';
import { FeaturesHubspotAiSearchGrader } from '@/components/compare/hubspot-ai-search-grader/features-hubspot-ai-search-grader';
import { FaqHubspotAiSearchGrader } from '@/components/compare/hubspot-ai-search-grader/faq-hubspot-ai-search-grader';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze vs. HubSpot AI Search Grader: Feature Comparison',
  description: 'Compare how Analyze and HubSpot AI Search Grader impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsHubspotAiSearchGraderPage = () => {

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "ANALYZE vs HubSpot AI Search Grader Comparison",
    description: "Compare ANALYZE and HubSpot AI Search Grader for AI search visibility tracking. See why ANALYZE offers superior AI-first analytics beyond traditional SEO tools.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-hubspot-ai-search-grader",
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
      
      <HeroComparisonHubspotAiSearchGrader />
      <ComparisonSectionHubspotAiSearchGrader />
      <ComprehensiveSectionHubspotAiSearchGrader />
      <FeaturesHubspotAiSearchGrader />
      <ResourceAllocationHubspotAiSearchGrader />
      <FaqHubspotAiSearchGrader />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsHubspotAiSearchGraderPage;
