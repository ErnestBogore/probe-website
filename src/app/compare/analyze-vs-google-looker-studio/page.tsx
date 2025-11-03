import { ResourceAllocationGoogleLookerStudio } from '@/components/compare/google-looker-studio/resource-allocation-google-looker-studio';
import { HeroComparisonGoogleLookerStudio } from '@/components/compare/google-looker-studio/hero-comparison-google-looker-studio';
import { ComparisonSectionGoogleLookerStudio } from '@/components/compare/google-looker-studio/comparison-section-google-looker-studio';
import { ComprehensiveSectionGoogleLookerStudio } from '@/components/compare/google-looker-studio/comprehensive-section-google-looker-studio';
import { FeaturesGoogleLookerStudio } from '@/components/compare/google-looker-studio/features-google-looker-studio';
import { FaqGoogleLookerStudio } from '@/components/compare/google-looker-studio/faq-google-looker-studio';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Analyze vs. Google Looker Studio: Feature Comparison',
  description: 'Compare how Analyze and Google Looker Studio impact visibility, traffic, and conversions across AI engines.',
  openGraph: {
    images: ['/AI Referral Traffic.png'],
  },
};

const AnalyzeVsGoogleLookerStudioPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "ANALYZE vs Google Looker Studio Comparison",
    description: "Compare ANALYZE and Google Looker Studio for AI search visibility tracking. See why ANALYZE offers superior AI-first analytics beyond traditional data visualization.",
    url: "https://www.tryanalyze.ai/compare/analyze-vs-google-looker-studio",
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
      
      <HeroComparisonGoogleLookerStudio />
      <ComparisonSectionGoogleLookerStudio />
      <ComprehensiveSectionGoogleLookerStudio />
      <FeaturesGoogleLookerStudio />
      <ResourceAllocationGoogleLookerStudio />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqGoogleLookerStudio />
      <HeroCta />
    </main>
  );
};

export default AnalyzeVsGoogleLookerStudioPage;
