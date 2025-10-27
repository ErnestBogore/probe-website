import { Faq3 } from '@/components/faq3';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FeaturesClaude } from '@/components/use-cases/claude/features-claude';
import { HeroClaude } from '@/components/use-cases/claude/hero-claude';
import { ModernFeaturesClaude } from '@/components/use-cases/claude/modern-features-claude';
import { ProblemSolutionClaude } from '@/components/use-cases/claude/problem-solution-claude';
import { ResourceAllocationClaude } from '@/components/use-cases/claude/resource-allocation-claude';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Best Claude Visibility Tracking Tool for Brands',
  description: 'Track brand and website visibility within Claude answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.',
  openGraph: {
    images: ['/AI Traffic By Page.png'],
  },
};

const ClaudeUseCasePage = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'How does ANALYZE know what Claude is saying about us?',
      answer: 'ANALYZE monitors how Claude answers real buyer-style prompts (for example "best [category] for [ICP]," "[Competitor] alternatives," "[Tool] vs [Tool] for [Use Case]"). We capture how you\'re described, whether you\'re recommended, and which competitors are offered instead — so you can see how Claude positions you in live evaluation moments.'
    },
    {
      id: 'faq-2',
      question: 'Can ANALYZE show when Claude recommends a competitor instead of us?',
      answer: 'Yes. You\'ll see a list of prompts where Claude puts a competitor forward and leaves you out. For each of those prompts, you\'ll see who\'s getting recommended, how they\'re being pitched, and which proof points Claude is repeating on their behalf. This is your "we\'re losing qualified demand here" map.'
    },
    {
      id: 'faq-3',
      question: 'Can I see why Claude is choosing that competitor?',
      answer: 'Yes. ANALYZE shows the exact language Claude is using to justify the recommendation and the specific URLs and domains it\'s citing as evidence. You get the messaging, claims, and assets that are winning that moment — not just "you lost."'
    },
    {
      id: 'faq-4',
      question: 'Can ANALYZE show if Claude is sending us traffic, not just talking about us?',
      answer: 'Yes. By connecting GA4, you can see how many sessions Claude is driving to your site, which pages those visitors land on, and which pages convert. You can answer "Is Claude creating pipeline for us?" with real numbers instead of screenshots.'
    },
    {
      id: 'faq-5',
      question: 'Can I track how our visibility in Claude changes over time?',
      answer: 'Yes. ANALYZE shows how often you appear, how you\'re positioned, who you\'re compared to, and whether that\'s trending up or down. If Claude starts preferring a competitor for a high-intent use case, you\'ll see it before Sales feels it.'
    },
    {
      id: 'faq-6',
      question: 'Will ANALYZE tell me which prompts we should go win first in Claude?',
      answer: 'Yes. ANALYZE ranks the highest-value prompts you\'re currently losing in Claude — the ones most tied to buying intent — and shows you which to fix first. That gives PMM, content, and demand gen a focused "work on these now" list instead of 200 vague ideas.'
    },
    {
      id: 'faq-7',
      question: 'Does this replace SEO tools?',
      answer: 'No. SEO tools tell you how you rank in traditional web search. ANALYZE tells you how Claude talks about you, who Claude is recommending, which competitors it positions you against, and whether Claude is driving traffic and conversions. This is AI buying-path visibility and attribution, not classic search rank tracking.'
    },
    {
      id: 'faq-8',
      question: 'Do I need engineering resources to set this up?',
      answer: 'No. You don\'t need to ship code or embed a script to see how Claude is positioning you versus competitors. If you want traffic and conversion attribution, you connect GA4 — that\'s a standard marketing-level integration.'
    },
    {
      id: 'faq-9',
      question: 'Who on my team should own this?',
      answer: 'Most teams loop in three groups: Product marketing: to understand positioning and competitive claims inside Claude. Demand gen / growth: to prove that Claude is (or isn\'t) driving traffic, conversions, and pipeline. Content / SEO: to see which prompts to win next and which pages Claude already trusts. Comms / legal also taps in when inaccurate or risky claims start to show up.'
    },
    {
      id: 'faq-10',
      question: 'Is any of this data shared with other customers or exposed to competitors?',
      answer: 'No. Your tracked prompts, competitor set, traffic data, and insights are private to your workspace. ANALYZE doesn\'t reshare your view of how Claude talks about you.'
    },
    {
      id: 'faq-11',
      question: 'Can I use ANALYZE for more than Claude?',
      answer: 'Yes. You can run this same analysis across multiple AI assistants and AI search engines (for example, Claude, Perplexity, Copilot, ChatGPT, Gemini, etc.). That lets you see which channel is actually driving demand right now — and where you\'re starting to slip.'
    }
  ];

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Claude Visibility Tracking Tool",
    description: "Track brand and website visibility within Claude answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.",
    url: "https://www.tryanalyze.ai/use-cases/claude",
    category: "Analytics Software",
    features: [
      "Claude Brand Mention Tracking",
      "Anthropic AI Analysis",
      "Claude Traffic Attribution",
      "Professional Context Monitoring",
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
      
      <HeroClaude />
      <ProblemSolutionClaude />
      <ModernFeaturesClaude />
      <FeaturesClaude />
      <ResourceAllocationClaude />
      
      <Faq3 
        heading="Claude Visibility Tracking FAQ"
        description="Common questions about tracking your brand's visibility and performance in Anthropic's Claude."
        items={faqItems}
      />
      
      <HeroCta />
    </main>
  );
};

export default ClaudeUseCasePage;
