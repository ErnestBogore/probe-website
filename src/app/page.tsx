/**
 * Main Page Component
 * 
 * The landing page of our application showcasing the integrated
 * shadcn components, animations, and modern UI patterns.
 */

import type { Metadata } from 'next';
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { ModernFeatures } from "@/components/marketing/modern-features";
import { ResourceAllocation } from "@/components/marketing/resource-allocation";
import { Testimonials } from "@/components/marketing/testimonials";
import { Manifesto } from "@/components/marketing/manifesto";
import { Cta } from "@/components/marketing/cta";
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'AI Search Analytics For Marketing Teams | Analyze',
  description: 'Understand how AI sees your brand. Monitor search rankings, analyze sentiment, and protect your reputation with our powerful AI analytics platform. Get started today.',
  openGraph: {
    title: 'AI Search Analytics For Marketing Teams | Analyze',
    description: 'Understand how AI sees your brand. Monitor search rankings, analyze sentiment, and protect your reputation with our powerful AI analytics platform. Get started today.',
    images: ['/Artboard (1).png'],
  },
};

export default function Home() {
  // Generate combined structured data for homepage
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { ...organizationSchema, "@context": undefined },
      { ...websiteSchema, "@context": undefined }
    ]
  };

  return (
    <main className="bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Hero />
      <Manifesto />
      <ModernFeatures />
      <ResourceAllocation />
      <Testimonials />
      <Features />
      <Cta />
    </main>
  );
}
