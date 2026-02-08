import { ResourceAllocationSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/resource-allocation-semrush-ai-toolkit';
import { HeroComparisonSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/hero-comparison-semrush-ai-toolkit';
import { ComparisonSectionSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/comparison-section-semrush-ai-toolkit';
import { ComprehensiveSectionSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/comprehensive-section-semrush-ai-toolkit';
import { FeaturesSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/features-semrush-ai-toolkit';
import { FaqSemrushAiToolkit } from '@/components/compare/semrush-ai-toolkit/faq-semrush-ai-toolkit';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze AI vs. Semrush AI Toolkit: Feature Comparison',
  description: 'Compare how Analyze AI and Semrush AI Toolkit impact visibility, traffic, and conversions across AI engines.',
  alternates: {
    canonical: '/compare/analyze-vs-semrush-ai-toolkit',
  },
  openGraph: {
    type: 'website',
    url: '/compare/analyze-vs-semrush-ai-toolkit',
    images: [{
      url: 'https://www.tryanalyze.ai/AI%20Referral%20Traffic.png',
      width: 1920,
      height: 1080,
      alt: 'AI Referral Traffic Analytics Dashboard',
    }],
  },
};

const AnalyzeVsSemrushAiToolkitPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Analyze AI vs Semrush AI Toolkit Comparison",
    description: "Compare Analyze AI and Semrush AI Toolkit for AI search visibility tracking. See why Analyze AI offers superior AI-first analytics beyond traditional SEO tools.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Compare', href: '/compare/analyze-vs-semrush-ai-toolkit' },
            { name: 'Analyze vs Semrush AI Toolkit', href: '/compare/analyze-vs-semrush-ai-toolkit' },
          ]))
        }}
      />
      
      <HeroComparisonSemrushAiToolkit />
      <ComparisonSectionSemrushAiToolkit />
      <ComprehensiveSectionSemrushAiToolkit />
      <FeaturesSemrushAiToolkit />
      <ResourceAllocationSemrushAiToolkit />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqSemrushAiToolkit />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsSemrushAiToolkitPage;
