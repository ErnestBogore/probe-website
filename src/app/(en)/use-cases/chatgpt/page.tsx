import { FaqUseCases } from '@/components/use-cases/faq-use-cases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FeaturesChatGPT } from '@/components/use-cases/chatgpt/features-chatgpt';
import { HeroChatGPT } from '@/components/use-cases/chatgpt/hero-chatgpt';
import { ModernFeaturesChatGPT } from '@/components/use-cases/chatgpt/modern-features-chatgpt';
import { ProblemSolutionChatGPT } from '@/components/use-cases/chatgpt/problem-solution-chatgpt';
import { ResourceAllocationChatGPT } from '@/components/use-cases/chatgpt/resource-allocation-chatgpt';
import { ResourcesChatGPT } from '@/components/use-cases/chatgpt/resources-chatgpt';
import { generateServiceSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Best ChatGPT Visibility Tracking Tool for Brands',
  description: 'Track brand and website visibility within ChatGPT answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.',
  alternates: {
    canonical: '/use-cases/chatgpt',
  },
  openGraph: {
    type: 'website',
    url: '/use-cases/chatgpt',
    images: [{
      url: 'https://www.tryanalyze.ai/AI%20Traffic%20By%20Page.png',
      width: 1920,
      height: 1080,
      alt: 'AI Traffic By Page Analytics Dashboard',
    }],
  },
};

const ChatGPTUseCasePage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);
  const faqItems = [
    {
      id: 'faq-1',
      question: 'How does Analyze AI know what ChatGPT is saying about us?',
      answer: 'Analyze AI monitors how ChatGPT answers real buyer-style prompts (for example "best [category] for [ICP]," "[Competitor] alternatives," "[Tool] vs [Tool] for [Use Case]"). We capture how you\'re described, whether you\'re recommended, and which competitors are offered instead — so you can see how ChatGPT positions you in live evaluation moments.'
    },
    {
      id: 'faq-2',
      question: 'Can Analyze AI show when ChatGPT recommends a competitor instead of us?',
      answer: 'Yes. You\'ll see a list of prompts where ChatGPT puts a competitor forward and leaves you out. For each of those prompts, you\'ll see who\'s getting recommended, how they\'re being pitched, and which proof points ChatGPT is repeating on their behalf. This is your "we\'re losing qualified demand here" map.'
    },
    {
      id: 'faq-3',
      question: 'Can I see why ChatGPT is choosing that competitor?',
      answer: 'Yes. Analyze AI shows the exact language ChatGPT is using to justify the recommendation and the specific URLs and domains it\'s citing as evidence. You get the messaging, claims, and assets that are winning that moment — not just "you lost."'
    },
    {
      id: 'faq-4',
      question: 'Can Analyze AI show if ChatGPT is sending us traffic, not just talking about us?',
      answer: 'Yes. By connecting GA4, you can see how many sessions ChatGPT is driving to your site, which pages those visitors land on, and which pages convert. You can answer "Is ChatGPT creating pipeline for us?" with real numbers instead of screenshots.'
    },
    {
      id: 'faq-5',
      question: 'Can I track how our visibility in ChatGPT changes over time?',
      answer: 'Yes. Analyze AI shows how often you appear, how you\'re positioned, who you\'re compared to, and whether that\'s trending up or down. If ChatGPT starts preferring a competitor for a high-intent use case, you\'ll see it before Sales feels it.'
    },
    {
      id: 'faq-6',
      question: 'Will Analyze AI tell me which prompts we should go win first in ChatGPT?',
      answer: 'Yes. Analyze AI ranks the highest-value prompts you\'re currently losing in ChatGPT — the ones most tied to buying intent — and shows you which to fix first. That gives PMM, content, and demand gen a focused "work on these now" list instead of 200 vague ideas.'
    },
    {
      id: 'faq-7',
      question: 'Does this replace SEO tools?',
      answer: 'No. SEO tools tell you how you rank in traditional web search. Analyze AI tells you how ChatGPT talks about you, who ChatGPT is recommending, which competitors it positions you against, and whether ChatGPT is driving traffic and conversions. This is AI buying-path visibility and attribution, not classic search rank tracking.'
    },
    {
      id: 'faq-8',
      question: 'Do I need engineering resources to set this up?',
      answer: 'No. You don\'t need to ship code or embed a script to see how ChatGPT is positioning you versus competitors. If you want traffic and conversion attribution, you connect GA4 — that\'s a standard marketing-level integration.'
    },
    {
      id: 'faq-9',
      question: 'Who on my team should own this?',
      answer: 'Most teams loop in three groups: Product marketing: to understand positioning and competitive claims inside ChatGPT. Demand gen / growth: to prove that ChatGPT is (or isn\'t) driving traffic, conversions, and pipeline. Content / SEO: to see which prompts to win next and which pages ChatGPT already trusts. Comms / legal also taps in when inaccurate or risky claims start to show up.'
    },
    {
      id: 'faq-10',
      question: 'Is any of this data shared with other customers or exposed to competitors?',
      answer: 'No. Your tracked prompts, competitor set, traffic data, and insights are private to your workspace. Analyze AI doesn\'t reshare your view of how ChatGPT talks about you.'
    },
    {
      id: 'faq-11',
      question: 'Can I use Analyze AI for more than ChatGPT?',
      answer: 'Yes. You can run this same analysis across multiple AI assistants and AI search engines (for example, ChatGPT, Perplexity, Copilot, Gemini, Claude, etc.). That lets you see which channel is actually driving demand right now — and where you\'re starting to slip.'
    }
  ];

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "ChatGPT Visibility Tracking Tool",
    description: "Track brand and website visibility within ChatGPT answers. Monitor mentions, links, get real traffic data and competitors, and review actual answers.",
    url: "https://www.tryanalyze.ai/use-cases/chatgpt",
    category: "Analytics Software",
    features: [
      "ChatGPT Brand Mention Tracking",
      "Competitor Analysis in ChatGPT", 
      "ChatGPT Traffic Attribution",
      "Prompt Opportunity Analysis",
      "Real-time ChatGPT Monitoring",
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
            { name: 'Use Cases', href: '/use-cases/chatgpt' },
            { name: 'ChatGPT', href: '/use-cases/chatgpt' },
          ]))
        }}
      />
      
      <HeroChatGPT />
      <ProblemSolutionChatGPT />
      <ModernFeaturesChatGPT />
      <FeaturesChatGPT />
      <ResourceAllocationChatGPT />
      
      <ResourcesChatGPT posts={resourcePosts} />
      
      <FaqUseCases 
        heading="ChatGPT Visibility Tracking FAQ"
        description="Common questions about tracking your brand's visibility and performance in ChatGPT."
        items={faqItems}
      />
      
      <HeroCta />
    </main>
  );
};

export default ChatGPTUseCasePage;
