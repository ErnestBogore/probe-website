import { PricingPlans } from '@/components/pricing/pricing-plans';
import { PricingFaq } from '@/components/pricing/pricing-faq';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateProductSchema, generateBreadcrumbSchema } from '@/lib/schema';
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
  // Generate structured data
  const productSchema = generateProductSchema({
    name: "Analyze AI — AI Search Analytics Platform",
    description: "Flexible pricing plans for AI search analytics. Track brand visibility, measure AI traffic, and optimize your presence across all major AI engines.",
    url: "https://www.tryanalyze.ai/pricing",
    offers: [
      { name: "Starter", price: "0", priceCurrency: "USD", description: "Free plan for getting started with AI search analytics", url: "https://www.tryanalyze.ai/pricing" },
      { name: "Growth", price: "150", priceCurrency: "USD", description: "For growing teams tracking AI visibility", url: "https://www.tryanalyze.ai/pricing" },
      { name: "Pro", price: "450", priceCurrency: "USD", description: "For teams needing advanced AI analytics and attribution", url: "https://www.tryanalyze.ai/pricing" },
    ]
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
  ]);

  return (
    <main className="bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <PricingPlans />
      <PricingFaq />
      <HeroCta />
    </main>
  );
};

export default PricingPage;
