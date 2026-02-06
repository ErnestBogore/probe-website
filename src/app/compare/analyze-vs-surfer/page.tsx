import { ResourceAllocationSurfer } from '@/components/compare/surfer/resource-allocation-surfer';
import { HeroComparisonSurfer } from '@/components/compare/surfer/hero-comparison-surfer';
import { ComparisonSectionSurfer } from '@/components/compare/surfer/comparison-section-surfer';
import { ComprehensiveSectionSurfer } from '@/components/compare/surfer/comprehensive-section-surfer';
import { FeaturesSurfer } from '@/components/compare/surfer/features-surfer';
import { FaqSurfer } from '@/components/compare/surfer/faq-surfer';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze AI vs. Surfer: Feature Comparison',
  description: 'Compare how Analyze AI and Surfer impact visibility, traffic, and conversions across AI engines.',
  alternates: {
    canonical: '/compare/analyze-vs-surfer',
  },
  openGraph: {
    type: 'website',
    images: [{
      url: 'https://www.tryanalyze.ai/AI%20Referral%20Traffic.png',
      width: 1920,
      height: 1080,
      alt: 'AI Referral Traffic Analytics Dashboard',
    }],
  },
};

const AnalyzeVsSurferPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Analyze AI vs Surfer Comparison",
    description: "Compare Analyze AI and Surfer for AI search visibility tracking. See why Analyze AI offers superior AI-first analytics beyond traditional SEO tools.",
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
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqSurfer />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsSurferPage;
