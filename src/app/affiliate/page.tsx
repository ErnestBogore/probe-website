import { AffiliateHero } from '@/components/affiliate/affiliate-hero';
import { AffiliateSteps } from '@/components/affiliate/affiliate-steps';
import { AffiliateBenefits } from '@/components/affiliate/affiliate-benefits';
import { AffiliateCalculator } from '@/components/affiliate/affiliate-calculator';
import { AffiliateFaq } from '@/components/affiliate/affiliate-faq';
import { AffiliateCta } from '@/components/affiliate/affiliate-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Become An Affiliate - Earn 30% Recurring Commission',
  description: 'Join the Analyze AI affiliate program and earn 30% recurring commission forever. Promote the fastest-growing AI traffic analytics platform.',
  openGraph: {
    title: 'Become An Affiliate - Earn 30% Recurring Commission',
    description: 'Join the Analyze AI affiliate program and earn 30% recurring commission forever. Promote the fastest-growing AI traffic analytics platform.',
    images: ['/affiliate-hero.png'],
  },
};

const AffiliatePage = () => {
  // Generate service schema for affiliate page
  const serviceSchema = generateServiceSchema({
    name: "Analyze AI Affiliate Program",
    description: "Earn 30% recurring commission forever promoting the fastest-growing AI traffic analytics platform.",
    url: "https://www.tryanalyze.ai/affiliate",
    category: "Affiliate Program",
    features: [
      "30% Recurring Commission",
      "Forever Commission Structure", 
      "AI Analytics Platform",
      "Marketing Support"
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
      <AffiliateHero />
      <AffiliateBenefits />
      <AffiliateCalculator />
      <AffiliateSteps />
      <AffiliateFaq />
      <AffiliateCta />
    </main>
  );
};

export default AffiliatePage;
