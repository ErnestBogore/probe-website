import { FaqUseCases } from '@/components/use-cases/faq-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FeaturesMetaAI } from '@/components/use-cases/meta-ai/features-meta-ai';
import { HeroMetaAI } from '@/components/use-cases/meta-ai/hero-meta-ai';
import { ModernFeaturesMetaAI } from '@/components/use-cases/meta-ai/modern-features-meta-ai';
import { ProblemSolutionMetaAI } from '@/components/use-cases/meta-ai/problem-solution-meta-ai';
import { ResourceAllocationMetaAI } from '@/components/use-cases/meta-ai/resource-allocation-meta-ai';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { generateServiceSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Best Meta AI Visibility Tracking Tool for Brands',
  description: 'Track brand and website visibility within Meta AI answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.',
  openGraph: {
    images: ['/AI Traffic By Page.png'],
  },
};

const MetaAIUseCasePage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);
  const faqItems = [
    {
      id: 'faq-1',
      question: 'How does Analyze AI know what Meta AI is saying about us?',
      answer: 'Analyze AI monitors how Meta AI answers real buyer-style prompts (for example "best [category] for [ICP]," "[Competitor] alternatives," "[Tool] vs [Tool] for [Use Case]"). We capture how you\'re described, whether you\'re recommended, and which competitors are offered instead — so you can see how Meta AI positions you in live evaluation moments.'
    },
    {
      id: 'faq-2',
      question: 'Can Analyze AI show when Meta AI recommends a competitor instead of us?',
      answer: 'Yes. You\'ll see a list of prompts where Meta AI puts a competitor forward and leaves you out. For each of those prompts, you\'ll see who\'s getting recommended, how they\'re being pitched, and which proof points Meta AI is repeating on their behalf. This is your "we\'re losing qualified demand here" map.'
    },
    {
      id: 'faq-3',
      question: 'Can I see why Meta AI is choosing that competitor?',
      answer: 'Yes. Analyze AI shows the exact language Meta AI is using to justify the recommendation and the specific URLs and domains it\'s citing as evidence. You get the messaging, claims, and assets that are winning that moment — not just "you lost."'
    },
    {
      id: 'faq-4',
      question: 'Can Analyze AI show if Meta AI is sending us traffic, not just talking about us?',
      answer: 'Yes. By connecting GA4, you can see how many sessions Meta AI is driving to your site, which pages those visitors land on, and which pages convert. You can answer "Is Meta AI creating pipeline for us?" with real numbers instead of screenshots.'
    },
    {
      id: 'faq-5',
      question: 'Can I track how our visibility in Meta AI changes over time?',
      answer: 'Yes. Analyze AI shows how often you appear, how you\'re positioned, who you\'re compared to, and whether that\'s trending up or down. If Meta AI starts preferring a competitor for a high-intent use case, you\'ll see it before Sales feels it.'
    },
    {
      id: 'faq-6',
      question: 'Will Analyze AI tell me which prompts we should go win first in Meta AI?',
      answer: 'Yes. Analyze AI ranks the highest-value prompts you\'re currently losing in Meta AI — the ones most tied to buying intent — and shows you which to fix first. That gives PMM, content, and demand gen a focused "work on these now" list instead of 200 vague ideas.'
    },
    {
      id: 'faq-7',
      question: 'Does this replace SEO tools?',
      answer: 'No. SEO tools tell you how you rank in traditional web search. Analyze AI tells you how Meta AI talks about you, who Meta AI is recommending, which competitors it positions you against, and whether Meta AI is driving traffic and conversions. This is AI buying-path visibility and attribution, not classic search rank tracking.'
    },
    {
      id: 'faq-8',
      question: 'Do I need engineering resources to set this up?',
      answer: 'No. You don\'t need to ship code or embed a script to see how Meta AI is positioning you versus competitors. If you want traffic and conversion attribution, you connect GA4 — that\'s a standard marketing-level integration.'
    },
    {
      id: 'faq-9',
      question: 'Who on my team should own this?',
      answer: 'Most teams loop in three groups: Product marketing: to understand positioning and competitive claims inside Meta AI. Demand gen / growth: to prove that Meta AI is (or isn\'t) driving traffic, conversions, and pipeline. Content / SEO: to see which prompts to win next and which pages Meta AI already trusts. Comms / legal also taps in when inaccurate or risky claims start to show up.'
    },
    {
      id: 'faq-10',
      question: 'Is any of this data shared with other customers or exposed to competitors?',
      answer: 'No. Your tracked prompts, competitor set, traffic data, and insights are private to your workspace. Analyze AI doesn\'t reshare your view of how Meta AI talks about you.'
    },
    {
      id: 'faq-11',
      question: 'Can I use Analyze AI for more than Meta AI?',
      answer: 'Yes. You can run this same analysis across multiple AI assistants and AI search engines (for example, Meta AI, Perplexity, Copilot, Gemini, Claude, etc.). That lets you see which channel is actually driving demand right now — and where you\'re starting to slip.'
    }
  ];

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "Meta AI Visibility Tracking Tool",
    description: "Track brand and website visibility within Meta AI answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.",
    url: "https://www.tryanalyze.ai/use-cases/meta-ai",
    category: "Analytics Software",
    features: [
      "Meta AI Brand Tracking",
      "Social Commerce Analysis",
      "Meta AI Traffic Attribution",
      "Cross-Platform Monitoring"
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
      
      <HeroMetaAI />
      <ProblemSolutionMetaAI />
      <ModernFeaturesMetaAI />
      <FeaturesMetaAI />
      <ResourceAllocationMetaAI />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqUseCases 
        heading="Meta AI Visibility Tracking FAQ"
        description="Common questions about tracking your brand's visibility and performance in Meta AI."
        items={faqItems}
      />
      
      <HeroCta />
    </main>
  );
};

export default MetaAIUseCasePage;
