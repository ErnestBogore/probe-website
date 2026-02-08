import { HeroDiscover } from '@/components/features/discover/hero-discover';
import { FeaturesDiscover } from '@/components/features/discover/features-discover';
import { ResourceAllocationDiscover } from '@/components/features/discover/resource-allocation-discover';
import { ResourcesUseCases } from '@/components/use-cases/resources-use-cases';
import { FaqFeatures } from '@/components/features/faq-features';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateSoftwareApplicationSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { getBlogPostsBySlugs } from '@/lib/datocms';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Discover | Analyze AI',
  description: "See how AI assistants talk about your product, which competitors are being recommended, and where you're missing from buyer...",
  alternates: {
    canonical: '/features/discover',
  },
  openGraph: {
    type: 'website',
    url: '/features/discover',
    images: [{
      url: 'https://www.tryanalyze.ai/Discover%20hero.png',
      width: 2940,
      height: 1880,
      alt: 'AI Search Discovery Dashboard',
    }],
  },
};

const AISearchToolPage = async () => {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);
  const faqItems = [
    {
      id: 'faq-1',
      question: 'How does Analyze AI figure out which prompts buyers are actually asking in the market?',
      answer: 'Analyze AI monitors real, high-intent buying questions that people ask AI assistants and AI search engines (e.g. "best [category] for [ICP]," "alternatives to [competitor]," "[tool] vs [tool] for [use case]"). We cluster and score those prompts around purchase intent, segment, and product line. You\'re not guessing what buyers might ask — you\'re looking at the actual evaluation language that shows up in-market.'
    },
    {
      id: 'faq-2',
      question: 'Can I check how we\'re showing up for a specific prompt or question without adding it to ongoing tracking?',
      answer: 'Yes. You can run any prompt on demand and see how you\'re positioned in that specific buying moment — who\'s recommended, what\'s said about each vendor, and where you rank — without committing it to your tracked set. This is useful for quick "Are we in this?" checks before you decide a prompt is worth attention.'
    },
    {
      id: 'faq-3',
      question: 'Can Analyze AI highlight the prompts where we\'re not being mentioned but competitors are?',
      answer: 'Yes. Analyze AI flags prompts where buyers are clearly in-market ("top platforms for X," "best alternative to Y") and your competitors are being recommended but you\'re either missing or underrepresented. You get a list of "we\'re invisible here / they\'re getting picked instead," which becomes a direct gaps list for PMM, content, and demand gen.'
    },
    {
      id: 'faq-4',
      question: 'Can I see how AI tools are describing our product — claims, positioning, value props — so I know what buyers are hearing?',
      answer: 'Yes. For every prompt, you can read how the assistant is describing you: what you do, who you\'re "best for," which strengths it attaches to you, and which differentiators it thinks you own. You\'ll also see tone and messaging accuracy, so you can catch things like outdated positioning, overpromises, or off-strategy value props.'
    },
    {
      id: 'faq-5',
      question: 'Does Analyze AI show which competitors are getting mentioned next to us most often, and in what context?',
      answer: 'Yes. Analyze AI shows which vendors are most frequently listed alongside you in answers to high-intent prompts, and for which use cases. You can see, for example, "When buyers ask about mid-market CRM, we\'re being compared to A, B, and C — and here\'s how each of us is framed." That gives you a live competitive set for each motion, not just a static \'competitors\' slide.'
    },
    {
      id: 'faq-6',
      question: 'Can Analyze AI surface "new" or unexpected competitors that sales/PMM hasn\'t even been watching yet?',
      answer: 'Yes. When we detect brands that keep getting recommended for your category but aren\'t in your tracked competitor list, we surface them as suggested competitors. This helps you catch fast-moving or niche challengers before they start showing up on sales calls or in RFPs.'
    },
    {
      id: 'faq-7',
      question: 'Can I see which exact sources and URLs AI is citing when it recommends a competitor over us?',
      answer: 'Yes. Analyze AI shows the specific pages models are pulling from to justify recommendations — competitor comparison pages, "top tools for [use case]" listicles, blog posts, analyst-style breakdowns, etc. You don\'t just see "they\'re winning"; you see why they\'re winning and which assets are persuading the model.'
    },
    {
      id: 'faq-8',
      question: 'Can I slice this by use case, product line, vertical, or ICP?',
      answer: 'Yes. You can look at prompts and competitive positioning through the lens that matters to you: SMB vs enterprise, ecommerce vs healthcare, "marketing automation" vs "customer service," etc. That lets you answer questions like "How are we positioned for enterprise adoption?" instead of only getting one generic view.'
    },
    {
      id: 'faq-9',
      question: 'How is this different from manually asking ChatGPT \'Who are the best tools for X?\' and screenshotting the answer?',
      answer: 'Manual checks give you one answer, once. Analyze AI gives you: Coverage across many high-intent prompts, not one guess. Competitor frequency and momentum, not just a snapshot. How you\'re being positioned, not just whether you appear. The sources and URLs backing those claims. Suggested gaps (where you\'re missing but should be in the conversation). In other words, it\'s structured market intelligence, not screenshots.'
    },
    {
      id: 'faq-10',
      question: 'Do I need GA4 connected to get this analysis, or is it separate from traffic attribution?',
      answer: 'You don\'t need GA4 to use Discover. Discover is focused on how AI assistants talk about you, who they recommend, and which competitors are winning specific buying moments. GA4 comes in when you want to tie that visibility to actual traffic, sessions, and conversions — that\'s handled in the Monitor view.'
    },
    {
      id: 'faq-11',
      question: 'Who should own this inside my team — demand gen, content, PMM, or competitive intelligence?',
      answer: 'Typically: PMM uses it to understand positioning and head-to-head narratives. Content / SEO / growth uses it to decide what to build or update next. Demand gen uses it to understand which problems/segments are actually showing intent. Competitive intel / leadership uses it to spot emerging rivals early. Most teams end up sharing it because it drives both strategy (messaging) and output (content roadmap).'
    },
    {
      id: 'faq-12',
      question: 'Is any of this data exposed to other customers or shared back to competitors?',
      answer: 'No. Your workspace, tracked prompts, competitive set, and insights are private to your account. We don\'t expose your view of the market — or your gaps — to anyone else.'
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
    name: "Analyze AI — Discover",
    description: "See how AI assistants talk about your product, which competitors are being recommended, and where you're missing from buyer conversations.",
    url: "https://www.tryanalyze.ai/features/discover",
    applicationCategory: "BusinessApplication",
    offers: { price: "0", priceCurrency: "USD", url: "https://www.tryanalyze.ai/pricing" },
    featureList: [
      "Real-Time SERP Analysis",
      "Citation & Source Tracking",
      "Competitive Positioning Analysis",
      "Prompt Gap Detection"
    ]
  });
  const faqSchema = generateFAQPageSchema(faqItems.map(item => ({ question: item.question, answer: item.answer })));
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features/discover' },
    { name: 'Discover', href: '/features/discover' },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <HeroDiscover />
      <FeaturesDiscover />
      <ResourceAllocationDiscover />
      
      <ResourcesUseCases posts={resourcePosts} />
      
    <FaqFeatures 
      heading="Frequently Asked Questions"
      description="Answers to common questions about how Analyze AI maps AI buying moments, competitive positioning, and where you're being mentioned (or not)."
      items={faqItems}
    />
    <HeroCta />
    </main>
  );
};

export default AISearchToolPage;
