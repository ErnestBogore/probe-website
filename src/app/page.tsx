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
import { ProblemSolution } from "@/components/marketing/problem-solution";
import { Testimonials } from "@/components/marketing/testimonials";
import { Manifesto } from "@/components/marketing/manifesto";
import { HeroCta } from "@/components/marketing/hero-cta";
import { ResourceAllocationHomepage } from "@/components/marketing/resource-allocation-homepage";
import { ResourcesUseCases } from "@/components/use-cases/resources-use-cases";
import { FaqHomepage } from "@/components/marketing/faq-homepage";
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';

export const metadata: Metadata = {
  title: 'AI Search Analytics For Marketing Teams',
  description: 'Understand how AI sees your brand. Monitor search rankings, analyze sentiment, and protect your reputation with our powerful...',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    title: 'AI Search Analytics For Marketing Teams',
    description: 'Understand how AI sees your brand. Monitor search rankings, analyze sentiment, and protect your reputation with our powerful...',
    images: [{
      url: 'https://www.tryanalyze.ai/Artboard%20(1).png',
      width: 1536,
      height: 1024,
      alt: 'Analyze AI - AI Search Analytics Platform',
    }],
  },
};

export default async function Home() {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);
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

  // Homepage FAQ items
  const homepageFaqItems = [
    {
      id: 'faq-1',
      question: 'What is Analyze AI—and what does it actually do?',
      answer: 'Analyze AI is an AI search analytics platform. It maps how AI answer engines portray your brand (what\'s said, where you appear, and who appears beside you), then ties that visibility to GA4 traffic, conversions, and revenue—so you can invest where results compound.'
    },
    {
      id: 'faq-2',
      question: 'How is Analyze AI different from "GEO tools"?',
      answer: 'Most GEO tools stop at screenshots of mentions. AI search analytics goes further: Tracks appearance + placement + sentiment across engines, Attributes AI referrals to sessions, pages, and conversions via GA4, Adds competitive and citation context (who else appears, which sources shape answers), Guides specific improvements (entities, sources, gaps) rather than generic scores.'
    },
    {
      id: 'faq-3',
      question: 'How does Analyze AI work, in practice?',
      answer: 'We follow a four-step loop that mirrors how teams operate: Discover: See where you do/don\'t appear; view sources models cite. Measure: Track share of answers, positions, sentiment, and movement by topic, product, and competitor. Improve: Get the citations, entities, and content gaps that influence model responses. Govern: Monitor risk terms and reputational drift; catch negative narratives early. No code to start. Connect GA4 to unlock attribution.'
    },
    {
      id: 'faq-4',
      question: 'Which AI engines do you monitor?',
      answer: 'We track major answer engines and assistants (e.g., ChatGPT, Claude, Gemini, Perplexity, Copilot, and others as they gain adoption). You\'ll see engine-level contribution to traffic and visibility, month by month.'
    },
    {
      id: 'faq-5',
      question: 'What counts as an "appearance" or "mention" in Analyze AI?',
      answer: 'An appearance is when an engine names your brand, product, or site in its answer or includes your domain among citations/sources. We record position/ordering, sentiment, and co-mentions (who else appears alongside you).'
    },
    {
      id: 'faq-6',
      question: 'Can Analyze AI show when AI is positive or negative about us?',
      answer: 'Yes. We capture portrayal and sentiment at the prompt level (supportive, neutral, critical) and surface risk terms (e.g., pricing controversy, reliability complaints) so comms/content teams can respond with evidence.'
    },
    {
      id: 'faq-7',
      question: 'Can I track competitors?',
      answer: 'Absolutely. Set the rivals that matter; Analyze AI maintains a rolling scoreboard by cluster and prompt—share of answers, sentiment, movement, and citation share—so you know where to push and how.'
    },
    {
      id: 'faq-8',
      question: 'How does attribution work?',
      answer: 'Connect GA4 and we attribute AI-referred sessions to: Engine/model (e.g., Perplexity vs. Copilot), Landing pages (which pages earn visits and convert), Time trends (30-day, MoM). This closes the loop from appearance → session → conversion.'
    },
    {
      id: 'faq-9',
      question: 'What data do you collect from AI answers?',
      answer: 'For each tracked prompt/cluster: full answer text, citations/domains, your presence and position, co-mentioned brands, sentiment, and engine metadata. With GA4 connected, we add referrer and landing page outcomes.'
    },
    {
      id: 'faq-10',
      question: 'How do you suggest improvements without "gaming" models?',
      answer: 'We don\'t "game." We operationalize quality: Show exact citations/domains engines rely on (earn, update, or outrank), Highlight entity coverage and evidence gaps, Recommend content depth and structure that makes quality legible to crawlers and models. This aligns with your manifesto: the most helpful content wins.'
    },
    {
      id: 'faq-11',
      question: 'Who should use Analyze AI?',
      answer: 'Marketing & SEO leaders proving impact and prioritizing content, Content teams needing prompt-level gaps and citation targets, Comms/brand monitoring narrative and risk terms, Growth & RevOps connecting AI visibility to pipeline and revenue.'
    },
    {
      id: 'faq-12',
      question: 'Does Analyze AI support multiple regions or languages?',
      answer: 'Yes. Track locale and language variants where engines provide them. Results are segmented so you can compare market by market.'
    },
    {
      id: 'faq-13',
      question: 'How often is data refreshed?',
      answer: 'Prompts run on a scheduled cadence (daily by default) so you can see movement and consistency over time and avoid manual checks.'
    },
    {
      id: 'faq-14',
      question: 'How do I get started?',
      answer: 'Create a project and define topics/clusters. Select competitors and initial prompts (use our suggestions or add your own). Connect GA4 to unlock attribution. Review your Discover → Measure dashboards and prioritize Improve actions. You\'ll have your first visibility baseline within minutes; attribution populates as traffic flows.'
    },
    {
      id: 'faq-15',
      question: 'Do I need to change my site or install code?',
      answer: 'No code is required to start. GA4 connection is optional but recommended for attribution. For improvement work, we provide clear briefs your team can implement in your CMS.'
    }
  ];

  return (
    <main className="bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <Hero />
      <ProblemSolution />
      <ModernFeatures />
      <Manifesto />
      <HeroCta />
      <Testimonials />
      <Features />
      <ResourceAllocationHomepage />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqHomepage 
        heading="Frequently Asked Questions"
        description="Find answers to common questions about our AI search analytics platform. Can't find what you're looking for? Contact our support team."
        items={homepageFaqItems}
      />
      <HeroCta />
    </main>
  );
}
