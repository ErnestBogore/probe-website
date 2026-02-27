import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';

export function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* DNS prefetch for 3rd-party origins */}
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      {/* Sitewide Structured Data: Organization + WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateOrganizationSchema())
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateWebsiteSchema())
        }}
      />
      <Navbar />
      {children}
      <Footer />

      {/* Emergency containment: third-party scripts temporarily disabled */}
    </>
  );
}
