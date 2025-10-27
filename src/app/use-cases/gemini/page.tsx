import { Faq3 } from '@/components/faq3';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FeaturesGemini } from '@/components/use-cases/gemini/features-gemini';
import { HeroGemini } from '@/components/use-cases/gemini/hero-gemini';
import { ModernFeaturesGemini } from '@/components/use-cases/gemini/modern-features-gemini';
import { ProblemSolutionGemini } from '@/components/use-cases/gemini/problem-solution-gemini';
import { ResourceAllocationGemini } from '@/components/use-cases/gemini/resource-allocation-gemini';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Best Gemini Visibility Tracking Tool for Brands',
  description: 'Track brand and website visibility within Gemini answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.',
  openGraph: {
    images: ['/AI Traffic By Page.png'],
  },
};

const GeminiUseCasePage = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'How does ANALYZE know what Gemini is saying about us?',
      answer: 'ANALYZE monitors how Gemini answers real buyer-style prompts (for example "best [category] for [ICP]," "[Competitor] alternatives," "[Tool] vs [Tool] for [Use Case]"). We capture how you\'re described, whether you\'re recommended, and which competitors are offered instead — so you can see how Gemini positions you in live evaluation moments.'
    },
    {
      id: 'faq-2',
      question: 'Can ANALYZE show when Gemini recommends a competitor instead of us?',
      answer: 'Yes. You\'ll see a list of prompts where Gemini puts a competitor forward and leaves you out. For each of those prompts, you\'ll see who\'s getting recommended, how they\'re being pitched, and which proof points Gemini is repeating on their behalf. This is your "we\'re losing qualified demand here" map.'
    },
    {
      id: 'faq-3',
      question: 'Can I see why Gemini is choosing that competitor?',
      answer: 'Yes. ANALYZE shows the exact language Gemini is using to justify the recommendation and the specific URLs and domains it\'s citing as evidence. You get the messaging, claims, and assets that are winning that moment — not just "you lost."'
    },
    {
      id: 'faq-4',
      question: 'Can ANALYZE show if Gemini is sending us traffic, not just talking about us?',
      answer: 'Yes. By connecting GA4, you can see how many sessions Gemini is driving to your site, which pages those visitors land on, and which pages convert. You can answer "Is Gemini creating pipeline for us?" with real numbers instead of screenshots.'
    },
    {
      id: 'faq-5',
      question: 'Can I track how our visibility in Gemini changes over time?',
      answer: 'Yes. ANALYZE shows how often you appear, how you\'re positioned, who you\'re compared to, and whether that\'s trending up or down. If Gemini starts preferring a competitor for a high-intent use case, you\'ll see it before Sales feels it.'
    },
    {
      id: 'faq-6',
      question: 'Will ANALYZE tell me which prompts we should go win first in Gemini?',
      answer: 'Yes. ANALYZE ranks the highest-value prompts you\'re currently losing in Gemini — the ones most tied to buying intent — and shows you which to fix first. That gives PMM, content, and demand gen a focused "work on these now" list instead of 200 vague ideas.'
    },
    {
      id: 'faq-7',
      question: 'Does this replace SEO tools?',
      answer: 'No. SEO tools tell you how you rank in traditional web search. ANALYZE tells you how Gemini talks about you, who Gemini is recommending, which competitors it positions you against, and whether Gemini is driving traffic and conversions. This is AI buying-path visibility and attribution, not classic search rank tracking.'
    },
    {
      id: 'faq-8',
      question: 'Do I need engineering resources to set this up?',
      answer: 'No. You don\'t need to ship code or embed a script to see how Gemini is positioning you versus competitors. If you want traffic and conversion attribution, you connect GA4 — that\'s a standard marketing-level integration.'
    },
    {
      id: 'faq-9',
      question: 'Who on my team should own this?',
      answer: 'Most teams loop in three groups: Product marketing: to understand positioning and competitive claims inside Gemini. Demand gen / growth: to prove that Gemini is (or isn\'t) driving traffic, conversions, and pipeline. Content / SEO: to see which prompts to win next and which pages Gemini already trusts. Comms / legal also taps in when inaccurate or risky claims start to show up.'
    },
    {
      id: 'faq-10',
      question: 'Is any of this data shared with other customers or exposed to competitors?',
      answer: 'No. Your tracked prompts, competitor set, traffic data, and insights are private to your workspace. ANALYZE doesn\'t reshare your view of how Gemini talks about you.'
    },
    {
      id: 'faq-11',
      question: 'Can I use ANALYZE for more than Gemini?',
      answer: 'Yes. You can run this same analysis across multiple AI assistants and AI search engines (for example, Gemini, Perplexity, Copilot, ChatGPT, Claude, etc.). That lets you see which channel is actually driving demand right now — and where you\'re starting to slip.'
    }
  ];

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Gemini Visibility Tracking Tool",
    description: "Track brand and website visibility within Gemini answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.",
    url: "https://www.tryanalyze.ai/use-cases/gemini",
    category: "Analytics Software",
    features: [
      "Gemini Brand Mention Tracking",
      "Google AI Integration Analysis",
      "Gemini Traffic Attribution",
      "Real-time Conversation Monitoring",
      "Citation Source Analysis",
      "Competitive Positioning Analysis"
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
      
      <HeroGemini />
      <ProblemSolutionGemini />
      <ModernFeaturesGemini />
      <FeaturesGemini />
      <ResourceAllocationGemini />
      
      <Faq3 
        heading="Gemini Visibility Tracking FAQ"
        description="Common questions about tracking your brand's visibility and performance in Google Gemini."
        items={faqItems}
      />
      
      <HeroCta />
    </main>
  );
};

export default GeminiUseCasePage;
