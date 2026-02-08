import { ResourceAllocationAthenaHQ } from '@/components/compare/athenahq/resource-allocation-athenahq';
import { HeroComparisonAthenaHQ } from '@/components/compare/athenahq/hero-comparison-athenahq';
import { ComparisonSectionAthenaHQ } from '@/components/compare/athenahq/comparison-section-athenahq';
import { ComprehensiveSectionAthenaHQ } from '@/components/compare/athenahq/comprehensive-section-athenahq';
import { FeaturesAthenaHQ } from '@/components/compare/athenahq/features-athenahq';
import { FaqAthenaHQ } from '@/components/compare/athenahq/faq-athenahq';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze AI vs. AthenaHQ: Feature Comparison',
  description: 'Compare how Analyze AI and AthenaHQ impact visibility, traffic, and conversions across AI engines. See which platform offers deeper prompt-level analytics, real traffic attribution, and actionable improvement plans for your AI search presence.',
  alternates: {
    canonical: '/compare/analyze-vs-athenahq',
  },
  openGraph: {
    type: 'website',
    url: '/compare/analyze-vs-athenahq',
    images: [{
      url: 'https://www.tryanalyze.ai/AI%20Referral%20Traffic.png',
      width: 1920,
      height: 1080,
      alt: 'AI Referral Traffic Analytics Dashboard',
    }],
  },
};

const AnalyzeVsAthenaHQPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Analyze AI vs AthenaHQ Comparison",
    description: "Compare Analyze AI and AthenaHQ for AI search visibility tracking. See why Analyze AI offers superior AI-first analytics beyond traditional research tools.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-athenahq",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Compare', href: '/compare/analyze-vs-athenahq' },
            { name: 'Analyze vs AthenaHQ', href: '/compare/analyze-vs-athenahq' },
          ]))
        }}
      />
      
      <HeroComparisonAthenaHQ />
      <ComparisonSectionAthenaHQ />
      <ComprehensiveSectionAthenaHQ />
      <FeaturesAthenaHQ />
      <ResourceAllocationAthenaHQ />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqAthenaHQ />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsAthenaHQPage;
