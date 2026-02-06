import { ResourceAllocationGsc } from '@/components/compare/gsc/resource-allocation-gsc';
import { HeroComparisonGsc } from '@/components/compare/gsc/hero-comparison-gsc';
import { ComparisonSectionGsc } from '@/components/compare/gsc/comparison-section-gsc';
import { ComprehensiveSectionGsc } from '@/components/compare/gsc/comprehensive-section-gsc';
import { FeaturesGsc } from '@/components/compare/gsc/features-gsc';
import { FaqGsc } from '@/components/compare/gsc/faq-gsc';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze AI vs. Google Search Console: Feature Comparison',
  description: 'Compare how Analyze AI and Google Search Console impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsGscPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Analyze AI vs GSC Comparison",
    description: "Compare Analyze AI and Google Search Console for AI search visibility tracking. See why Analyze AI offers superior AI-first analytics beyond traditional search tools.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-gsc",
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
      
      <HeroComparisonGsc />
      <ComparisonSectionGsc />
      <ComprehensiveSectionGsc />
      <FeaturesGsc />
      <ResourceAllocationGsc />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqGsc />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsGscPage;
