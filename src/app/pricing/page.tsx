import { PricingPlans } from '@/components/pricing/pricing-plans';
import { PricingFaq } from '@/components/pricing/pricing-faq';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing - AI Search Analytics Platform',
  description: 'Choose the right AI search analytics plan for your team. Track brand visibility, measure AI traffic, and optimize your presence across all major AI engines.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    type: 'website',
    title: 'Pricing - AI Search Analytics Platform',
    description: 'Choose the right AI search analytics plan for your team. Track brand visibility, measure AI traffic, and optimize your presence across all major AI engines.',
    images: [{
      url: 'https://www.tryanalyze.ai/Artboard%20(1).png',
      width: 1536,
      height: 1024,
      alt: 'Analyze AI Pricing Plans',
    }],
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
