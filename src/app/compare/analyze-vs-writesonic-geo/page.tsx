import { ResourceAllocationWritesonicGeo } from '@/components/compare/writesonic-geo/resource-allocation-writesonic-geo';
import { HeroComparisonWritesonicGeo } from '@/components/compare/writesonic-geo/hero-comparison-writesonic-geo';
import { ComparisonSectionWritesonicGeo } from '@/components/compare/writesonic-geo/comparison-section-writesonic-geo';
import { ComprehensiveSectionWritesonicGeo } from '@/components/compare/writesonic-geo/comprehensive-section-writesonic-geo';
import { FeaturesWritesonicGeo } from '@/components/compare/writesonic-geo/features-writesonic-geo';
import { FaqWritesonicGeo } from '@/components/compare/writesonic-geo/faq-writesonic-geo';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze AI vs. Writesonic GEO: Feature Comparison',
  description: 'Compare how Analyze AI and Writesonic GEO impact visibility, traffic, and conversions across AI engines.',
  alternates: {
    canonical: '/compare/analyze-vs-writesonic-geo',
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

const AnalyzeVsWritesonicGeoPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Analyze AI vs Writesonic GEO Comparison",
    description: "Compare Analyze AI and Writesonic GEO for AI search visibility tracking. See why Analyze AI offers superior AI-first analytics beyond traditional content tools.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Compare', href: '/compare/analyze-vs-writesonic-geo' },
            { name: 'Analyze vs Writesonic GEO', href: '/compare/analyze-vs-writesonic-geo' },
          ]))
        }}
      />
      
      <HeroComparisonWritesonicGeo />
      <ComparisonSectionWritesonicGeo />
      <ComprehensiveSectionWritesonicGeo />
      <FeaturesWritesonicGeo />
      <ResourceAllocationWritesonicGeo />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqWritesonicGeo />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsWritesonicGeoPage;
