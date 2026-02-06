import { ResourceAllocationAhrefsBrandRadar } from '@/components/compare/ahrefs-brand-radar/resource-allocation-ahrefs-brand-radar';
import { HeroComparisonAhrefsBrandRadar } from '@/components/compare/ahrefs-brand-radar/hero-comparison-ahrefs-brand-radar';
import { ComparisonSectionAhrefsBrandRadar } from '@/components/compare/ahrefs-brand-radar/comparison-section-ahrefs-brand-radar';
import { ComprehensiveSectionAhrefsBrandRadar } from '@/components/compare/ahrefs-brand-radar/comprehensive-section-ahrefs-brand-radar';
import { FeaturesAhrefsBrandRadar } from '@/components/compare/ahrefs-brand-radar/features-ahrefs-brand-radar';
import { FaqAhrefsBrandRadar } from '@/components/compare/ahrefs-brand-radar/faq-ahrefs-brand-radar';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze AI vs. Ahrefs Brand Radar: Feature Comparison',
  description: 'Compare how Analyze AI and Ahrefs Brand Radar impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsAhrefsBrandRadarPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Analyze AI vs Ahrefs Brand Radar Comparison",
    description: "Compare Analyze AI and Ahrefs Brand Radar for AI search visibility tracking. See why Analyze AI offers superior AI-first analytics beyond traditional brand monitoring.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-ahrefs-brand-radar",
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
      
      <HeroComparisonAhrefsBrandRadar />
      <ComparisonSectionAhrefsBrandRadar />
      <ComprehensiveSectionAhrefsBrandRadar />
      <FeaturesAhrefsBrandRadar />
      <ResourceAllocationAhrefsBrandRadar />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqAhrefsBrandRadar />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsAhrefsBrandRadarPage;
