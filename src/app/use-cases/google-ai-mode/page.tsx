import { FaqUseCases } from '@/components/use-cases/faq-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FeaturesGoogleAIMode } from '@/components/use-cases/google-ai-mode/features-google-ai-mode';
import { HeroGoogleAIMode } from '@/components/use-cases/google-ai-mode/hero-google-ai-mode';
import { ModernFeaturesGoogleAIMode } from '@/components/use-cases/google-ai-mode/modern-features-google-ai-mode';
import { ProblemSolutionGoogleAIMode } from '@/components/use-cases/google-ai-mode/problem-solution-google-ai-mode';
import { ResourceAllocationGoogleAIMode } from '@/components/use-cases/google-ai-mode/resource-allocation-google-ai-mode';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { generateServiceSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Best Google AI Mode Visibility Tracking Tool for Brands',
  description: 'Track brand and website visibility within Google AI Mode answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.',
  alternates: {
    canonical: '/use-cases/google-ai-mode',
  },
  openGraph: {
    type: 'website',
    images: [{
      url: 'https://www.tryanalyze.ai/AI%20Traffic%20By%20Page.png',
      width: 1920,
      height: 1080,
      alt: 'AI Traffic By Page Analytics Dashboard',
    }],
  },
};

const GoogleAiModeUseCasePage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);
  const faqItems = [
    {
      id: 'faq-1',
      question: 'How does Analyze AI know what Google AI Mode is saying about us?',
      answer: 'Analyze AI monitors how Google AI Mode answers real buyer-style prompts (for example "best [category] for [ICP]," "[Competitor] alternatives," "[Tool] vs [Tool] for [Use Case]"). We capture how you\'re described, whether you\'re recommended, and which competitors are offered instead — so you can see how Google AI Mode positions you in live evaluation moments.'
    },
    {
      id: 'faq-2',
      question: 'Can Analyze AI show when Google AI Mode recommends a competitor instead of us?',
      answer: 'Yes. You\'ll see a list of prompts where Google AI Mode puts a competitor forward and leaves you out. For each of those prompts, you\'ll see who\'s getting recommended, how they\'re being pitched, and which proof points Google AI Mode is repeating on their behalf. This is your "we\'re losing qualified demand here" map.'
    },
    {
      id: 'faq-3',
      question: 'Can I see why Google AI Mode is choosing that competitor?',
      answer: 'Yes. Analyze AI shows the exact language Google AI Mode is using to justify the recommendation and the specific URLs and domains it\'s citing as evidence. You get the messaging, claims, and assets that are winning that moment — not just "you lost."'
    },
    {
      id: 'faq-4',
      question: 'Can Analyze AI show if Google AI Mode is sending us traffic, not just talking about us?',
      answer: 'Yes. By connecting GA4, you can see how many sessions Google AI Mode is driving to your site, which pages those visitors land on, and which pages convert. You can answer "Is Google AI Mode creating pipeline for us?" with real numbers instead of screenshots.'
    },
    {
      id: 'faq-5',
      question: 'Can I track how our visibility in Google AI Mode changes over time?',
      answer: 'Yes. Analyze AI shows how often you appear, how you\'re positioned, who you\'re compared to, and whether that\'s trending up or down. If Google AI Mode starts preferring a competitor for a high-intent use case, you\'ll see it before Sales feels it.'
    },
    {
      id: 'faq-6',
      question: 'Will Analyze AI tell me which prompts we should go win first in Google AI Mode?',
      answer: 'Yes. Analyze AI ranks the highest-value prompts you\'re currently losing in Google AI Mode — the ones most tied to buying intent — and shows you which to fix first. That gives PMM, content, and demand gen a focused "work on these now" list instead of 200 vague ideas.'
    },
    {
      id: 'faq-7',
      question: 'Does this replace SEO tools?',
      answer: 'No. SEO tools tell you how you rank in traditional web search. Analyze AI tells you how Google AI Mode talks about you, who Google AI Mode is recommending, which competitors it positions you against, and whether Google AI Mode is driving traffic and conversions. This is AI buying-path visibility and attribution, not classic search rank tracking.'
    },
    {
      id: 'faq-8',
      question: 'Do I need engineering resources to set this up?',
      answer: 'No. You don\'t need to ship code or embed a script to see how Google AI Mode is positioning you versus competitors. If you want traffic and conversion attribution, you connect GA4 — that\'s a standard marketing-level integration.'
    },
    {
      id: 'faq-9',
      question: 'Who on my team should own this?',
      answer: 'Most teams loop in three groups: Product marketing: to understand positioning and competitive claims inside Google AI Mode. Demand gen / growth: to prove that Google AI Mode is (or isn\'t) driving traffic, conversions, and pipeline. Content / SEO: to see which prompts to win next and which pages Google AI Mode already trusts. Comms / legal also taps in when inaccurate or risky claims start to show up.'
    },
    {
      id: 'faq-10',
      question: 'Is any of this data shared with other customers or exposed to competitors?',
      answer: 'No. Your tracked prompts, competitor set, traffic data, and insights are private to your workspace. Analyze AI doesn\'t reshare your view of how Google AI Mode talks about you.'
    },
    {
      id: 'faq-11',
      question: 'Can I use Analyze AI for more than Google AI Mode?',
      answer: 'Yes. You can run this same analysis across multiple AI assistants and AI search engines (for example, Google AI Mode, Perplexity, Copilot, Gemini, Claude, etc.). That lets you see which channel is actually driving demand right now — and where you\'re starting to slip.'
    }
  ];

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Google AI Mode Visibility Tracking Tool",
    description: "Track brand and website visibility within Google AI Mode answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.",
    url: "https://www.tryanalyze.ai/use-cases/google-ai-mode",
    category: "Analytics Software",
    features: [
      "Google AI Mode Brand Tracking",
      "AI Overview Visibility Analysis",
      "Google AI Mode Traffic Attribution",
      "Search Intent Analysis",
      "Real-time Google AI Monitoring",
      "Citation Source Analysis"
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
          __html: JSON.stringify(generateFAQPageSchema(faqItems.map(item => ({ question: item.question, answer: item.answer }))))
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema([
            { name: 'Home', href: '/' },
            { name: 'Use Cases', href: '/use-cases/google-ai-mode' },
            { name: 'Google AI Mode', href: '/use-cases/google-ai-mode' },
          ]))
        }}
      />
      
      <HeroGoogleAIMode />
      <ProblemSolutionGoogleAIMode />
      <ModernFeaturesGoogleAIMode />
      <FeaturesGoogleAIMode />
      <ResourceAllocationGoogleAIMode />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqUseCases 
        heading="Google AI Mode Visibility Tracking FAQ"
        description="Common questions about tracking your brand's visibility and performance in Google AI Mode."
        items={faqItems}
      />
      
      <HeroCta />
    </main>
  );
};

export default GoogleAiModeUseCasePage;
