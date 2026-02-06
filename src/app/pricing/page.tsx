import { PricingPlans } from '@/components/pricing/pricing-plans';
import { PricingFaq } from '@/components/pricing/pricing-faq';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Analyze AI - AI Search Analytics Platform',
  description: 'Choose the right AI search analytics plan for your team. Track brand visibility, measure AI traffic, and optimize your presence across all major AI engines.',
  openGraph: {
    title: 'Pricing | Analyze AI - AI Search Analytics Platform',
    description: 'Choose the right AI search analytics plan for your team. Track brand visibility, measure AI traffic, and optimize your presence across all major AI engines.',
    images: ['/pricing-hero.png'],
  },
};

const PricingPage = () => {
  // Generate service schema for pricing page
  const serviceSchema = generateServiceSchema({
    name: "AI Search Analytics Platform Pricing",
    description: "Flexible pricing plans for AI search analytics. Track brand visibility, measure AI traffic, and optimize your presence across all major AI engines.",
    url: "https://www.tryanalyze.ai/pricing",
    category: "Analytics Software",
    features: [
      "AI Engine Tracking",
      "Brand Visibility Monitoring", 
      "Traffic Attribution",
      "Competitive Intelligence"
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
      <PricingPlans />
      <PricingFaq />
      <HeroCta />
    </main>
  );
};

export default PricingPage;
