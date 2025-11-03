import { HeroImprove } from '@/components/features/improve/hero-improve';
import { FeaturesImprove } from '@/components/features/improve/features-improve';
import { ResourceAllocationImprove } from '@/components/features/improve/resource-allocation-improve';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { FaqFeatures } from '@/components/features/faq-features';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Improve | ANALYZE',
  description: "Find high-intent prompts you're losing, see why competitors win them, defend areas where you're slipping, and double down on pages already converting from AI traffic.",
  openGraph: {
    images: ['/ai-improvement-feature.png'],
  },
};

const AIImproveToolPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  const faqItems = [
    {
      id: 'faq-1',
      question: 'Can ANALYZE show the specific buying questions where we\'re being left out and a competitor is winning the recommendation?',
      answer: 'Yes. ANALYZE surfaces the high-intent prompts where buyers are clearly in evaluation mode ("best platform for [ICP]," "[competitor] alternatives," "[tool] vs [tool]") and shows where a competitor is being recommended and you\'re not. You get "we\'re missing here, they\'re winning here" in plain language — not just abstract share-of-voice.'
    },
    {
      id: 'faq-2',
      question: 'Does ANALYZE tell me which gaps to prioritize first instead of dropping a giant list on me?',
      answer: 'Yes. Gaps are ranked, not dumped. ANALYZE scores each missed prompt by intent level, recency, competitive exposure, and strategic importance so you know which missed moments matter most right now. You get an ordered list of "fix these first," not 200 rows in a spreadsheet.'
    },
    {
      id: 'faq-3',
      question: 'Can I see why a competitor is winning a specific prompt — including the messaging and pages the model is pulling from?',
      answer: 'Yes. For any high-value prompt, ANALYZE shows you the exact language AI models are using to justify recommending that competitor, plus the specific URLs being cited (comparison pages, feature breakdowns, top-tool listicles, etc.). You see the pitch that\'s beating you, and the assets that are powering it.'
    },
    {
      id: 'faq-4',
      question: 'Can ANALYZE track whether our updates (new page, new positioning, new proof point) actually move us into that conversation over time?',
      answer: 'Yes. After you ship changes — new messaging, refreshed content, new proof — you can watch whether you start getting mentioned for that prompt, whether your position improves, and whether sentiment shifts. It\'s not "we published it and hope for the best," it\'s "did we enter the consideration set for that exact buying moment?"'
    },
    {
      id: 'faq-5',
      question: 'Can we see early signs that our presence is slipping in a high-value space, before it turns into lost pipeline?',
      answer: 'Yes. ANALYZE tracks your visibility and rank for the prompts that matter to you and shows when that presence starts to drop. If you\'re losing ground for a core use case, or you\'re being replaced by another vendor, you\'ll see it as it starts — not after Sales starts complaining about lead quality.'
    },
    {
      id: 'faq-6',
      question: 'Does ANALYZE show which AI engines (ChatGPT, Perplexity, Copilot, etc.) are slowing down for us so we know where we\'re losing distribution?',
      answer: 'Yes. You can see how each AI assistant or AI search engine is treating you over time: who\'s still recommending you, who\'s cooled off, and who has started favoring a competitor. That lets you say, "Perplexity dropped us this month and Copilot is tilting toward [Competitor]" instead of guessing where demand went.'
    },
    {
      id: 'faq-7',
      question: 'Can we identify which pages on our site are already getting AI-driven sessions and converting, so we know what to scale?',
      answer: 'Yes. ANALYZE shows which of your pages are already getting traffic from AI assistants and AI search, how many sessions those pages are generating, and which of those sessions turn into meaningful actions. That tells you what\'s already working so you can double down with promotion, refresh, localization, or paid support.'
    },
    {
      id: 'faq-8',
      question: 'Is this something marketing can act on directly, or does it just generate analysis for someone else to interpret?',
      answer: 'Marketing can act on it directly. The output is not an abstract dashboard — it\'s a prioritized list of "we\'re missing in these prompts," "this competitor is winning because of this message and this page," and "this page is already converting from AI-driven demand." It\'s literally a content / PMM / demand-gen work plan.'
    },
    {
      id: 'faq-9',
      question: 'Can we export a punchlist for content / PMM / demand gen so teams know exactly what to build or update?',
      answer: 'Yes. You can pull down a focused action list that says: which prompts you\'re losing, who\'s beating you there, which asset they\'re using to win, and which of your pages are worth scaling. It\'s designed to plug straight into roadmap, sprint planning, or enablement without rewriting it manually in a doc.'
    },
    {
      id: 'faq-10',
      question: 'How does this help me justify resourcing ("we need to work on this prompt now, not next quarter")?',
      answer: 'You can point to revenue impact and active loss. ANALYZE shows: "This prompt is clearly in-buying-cycle, we\'re not in it, [Competitor] is." "This is trending down for us and they\'re starting to replace us." "This page is already converting from AI-sourced traffic. We should amplify it now." You can walk into a resourcing conversation with "here\'s where pipeline is leaking and here\'s where pipeline is already forming," not "I think we should write a blog."'
    },
    {
      id: 'faq-11',
      question: 'Does this replace traditional SEO tools, or is this solving a different problem than search ranking?',
      answer: 'It\'s a different problem. SEO tools show how you rank in traditional web search. ANALYZE shows how AI assistants recommend vendors, explain your product, compare you with competitors, and route buyers to specific pages — and whether that visibility is turning into traffic and conversions. Classic SEO can\'t tell you that.'
    },
    {
      id: 'faq-12',
      question: 'How quickly does ANALYZE start surfacing opportunity gaps after we connect?',
      answer: 'Very quickly. Once ANALYZE is set up, you start seeing: prompts where you\'re absent but competitors are present, which competitors are being favored for those prompts, and which of your existing pages are already pulling qualified AI-driven traffic. You don\'t need weeks of "learning mode" before you can take action.'
    }
  ];

  const logos = [
    { src: '/openai.png', alt: 'OpenAI Logo', className: 'top-[70%] left-[10%] md:left-[15%]' },
    { src: '/anthropic.png', alt: 'Anthropic Logo', className: 'top-[70%] right-[10%] md:right-[15%]' },
    { src: '/gemini-color.png', alt: 'Gemini Logo', className: 'top-[50%] left-[2%] md:left-[5%]' },
    { src: '/copilot-color.png', alt: 'Copilot Logo', className: 'top-[50%] right-[2%] md:right-[5%]' },
    { src: '/deepseek-color.png', alt: 'DeepSeek Logo', className: 'top-[5%] left-[10%] md:left-[15%]' },
    { src: '/grok.png', alt: 'Grok Logo', className: 'top-[5%] right-[10%] md:right-[15%]' },
  ];

  // Generate service schema
  const serviceSchema = generateServiceSchema({
    name: "AI Content Improvement Tool",
    description: "Improve your AI search performance with data-driven insights. Get actionable recommendations to optimize content and increase visibility across AI answer engines.",
    url: "https://www.tryanalyze.ai/features/improve",
    category: "Content Optimization Tool",
    features: [
      "Performance Gap Analysis",
      "Content Optimization Recommendations", 
      "Competitive Improvement Strategies",
      "AI Algorithm Alignment"
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
      <HeroImprove />
      <FeaturesImprove />
      <ResourceAllocationImprove />
      
      <ResourcesUseCases posts={resourcePosts} />
      
      <FaqFeatures 
        heading="Frequently Asked Questions"
        description="Answers to common questions about how ANALYZE identifies content opportunities and helps you win high-intent AI prompts."
        items={faqItems}
      />
      <HeroCta />
    </main>
  );
};

export default AIImproveToolPage;
