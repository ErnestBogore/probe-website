import { Hero115 } from '@/components/features/monitor/hero-115';
import { FaqFeatures } from '@/components/features/faq-features';
import { HeroCta } from '@/components/marketing/hero-cta';
import { ProblemSolutionMonitor } from '@/components/features/monitor/problem-solution-monitor';
import { FeaturesMonitor } from '@/components/features/monitor/features-monitor';
import { ResourceAllocationMonitor } from '@/components/features/monitor/resource-allocation-monitor';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { generateSoftwareApplicationSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Monitor',
  description: "Track AI-driven traffic, conversions, and revenue. See which AI sources send you visitors, which pages they land on, and how AI is performing as a real channel.",
  alternates: {
    canonical: '/features/monitor',
  },
  openGraph: {
    type: 'website',
    images: [{
      url: 'https://www.tryanalyze.ai/AI%20traffic.png',
      width: 1782,
      height: 1501,
      alt: 'AI Traffic Analytics Dashboard',
    }],
  },
};

const AISearchAnalyticsPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);
  const faqItems = [
    {
      id: 'faq-1',
      question: 'How does Analyze AI actually measure "AI traffic"?',
      answer: 'We detect and attribute sessions that originate from LLMs (ChatGPT, Perplexity, Copilot, Gemini, etc.), then tie those sessions to the landing pages they hit and the actions they take on your site.'
    },
    {
      id: 'faq-2',
      question: 'Do I need to change my tracking or add custom scripts?',
      answer: 'No. You connect GA4 and we layer intelligence on top of what you already collect. You don\'t have to rebuild your analytics setup to get AI attribution.'
    },
    {
      id: 'faq-3',
      question: 'Which AI engines and assistants do you track?',
      answer: 'We break out traffic from major AI search engines like ChatGPT, Perplexity, Copilot, Gemini, Claude, and others. You\'ll see which of them is actually sending you traffic, how much, and how that\'s moving over time.'
    },
    {
      id: 'faq-4',
      question: 'Can I see which pages AI traffic is landing on?',
      answer: 'Yes. You get a ranked list of URLs on your site that are getting traffic from AI sources, with session counts and key events. You\'ll know which content is already "recommended" by AI and which pages are converting.'
    },
    {
      id: 'faq-5',
      question: 'How is this different from "AI visibility" tools that just show mentions?',
      answer: 'Most tools stop at "You appeared in an AI answer." Analyze AI shows: did that appearance drive a visit, to which page, and did that visit do anything valuable (sign up, request demo, etc.). In other words, we track performance, not vanity.'
    },
    {
      id: 'faq-6',
      question: 'Can I monitor competitors?',
      answer: 'Yes. You can select the competitors you care about and see how often they\'re being recommended for high-intent prompts. We\'ll also flag emerging competitors you might not be tracking yet.'
    },
    {
      id: 'faq-7',
      question: 'Can I see where I\'m losing vs. competitors, prompt by prompt?',
      answer: 'Yes. For any prompt (like "best [category] for [ICP]"), you can see who\'s being mentioned, which URLs are getting cited, and which model (ChatGPT, Perplexity, etc.) is recommending them. You\'ll know exactly why they\'re winning that moment instead of you.'
    },
    {
      id: 'faq-8',
      question: 'Do you tell me what to do next, or just show data?',
      answer: 'We surface "opportunities": high-intent prompts where your competitors are getting mentioned and you aren\'t. You get a prioritized list of where to build / update / enable next.'
    },
    {
      id: 'faq-9',
      question: 'How fast can I get insight after connecting?',
      answer: 'You\'ll get immediate historical attribution from GA4 plus forward-looking tracking going live from that point on. You don\'t have to "train" anything or wait weeks to start seeing AI traffic reporting.'
    },
    {
      id: 'faq-10',
      question: 'Who is this for inside my team?',
      answer: 'Marketing / Growth: prove channel value, plan content, defend spend\n\nContent / SEO: know what pages AI is already recommending and where the gaps are\n\nLeadership / RevOps: quantify AI\'s contribution to pipeline instead of guessing'
    },
    {
      id: 'faq-11',
      question: 'Does this replace my SEO platform?',
      answer: 'No — it answers a different question. SEO tells you how you rank in traditional search. Analyze AI tells you how AI assistants talk about you, whether that visibility turns into site traffic, and whether that traffic converts.'
    },
    {
      id: 'faq-12',
      question: 'Is the data private to us?',
      answer: 'Yes. We\'re reporting on your traffic and the public surfaces where you and your competitors are being recommended. We don\'t resell or pool your GA4 data.'
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

  // Generate structured data
  const softwareSchema = generateSoftwareApplicationSchema({
    name: "Analyze AI — Monitor",
    description: "Track AI-driven traffic, conversions, and revenue. See which AI sources send you visitors, which pages they land on, and how AI is performing as a real channel.",
    url: "https://www.tryanalyze.ai/features/monitor",
    applicationCategory: "BusinessApplication",
    offers: { price: "0", priceCurrency: "USD", url: "https://www.tryanalyze.ai/pricing" },
    featureList: [
      "Track AI Answer Engine Rankings",
      "AI Traffic Attribution",
      "Competitive Intelligence",
      "Performance Impact Measurement"
    ]
  });
  const faqSchema = generateFAQPageSchema(faqItems.map(item => ({ question: item.question, answer: item.answer })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features/monitor' },
    { name: 'Monitor', href: '/features/monitor' },
  ]);

  return (
    <main className="bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Hero115 />
      <ProblemSolutionMonitor />
      <FeaturesMonitor />
      <ResourceAllocationMonitor />
      <ResourcesUseCases posts={resourcePosts} />
      <FaqFeatures 
        heading="Frequently Asked Questions"
        description="Answers to common questions about how Analyze AI attributes AI-driven traffic, conversions, and revenue back to specific sources."
        items={faqItems}
      />
      <HeroCta />
    </main>
  );
};

export default AISearchAnalyticsPage;
