import { HeroGovern } from '@/components/features/govern/hero-govern';
import { FeaturesGovern } from '@/components/features/govern/features-govern';
import { ResourceAllocationGovern } from '@/components/features/govern/resource-allocation-govern';
import { Faq3 } from '@/components/faq3';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Govern | ANALYZE',
  description: "Monitor how AI represents your brand. Catch risky claims, negative shifts in sentiment, and channel drops early — before they show up in deals or exec conversations.",
  openGraph: {
    images: ['/monitor brand sentiment feature image.png'],
  },
};

const BrandSentimentAnalysisPage = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'Can ANALYZE alert us if AI tools are saying something inaccurate, risky, or off-message about our product?',
      answer: 'Yes. ANALYZE monitors how AI assistants describe your product and flags language that\'s inaccurate, out-of-date, non-compliant, or off-message. If an assistant claims you do something you don\'t, misstates capabilities, or frames you in a way you can\'t legally stand behind, you see it and can act before that shows up in a sales call or security review.'
    },
    {
      id: 'faq-2',
      question: 'Can we monitor sentiment toward our brand over time and compare that to key competitors?',
      answer: 'Yes. ANALYZE tracks sentiment toward your brand and your competitors across high-intent prompts over time. You can see whether the model is becoming more positive about you, more negative about you, or more enthusiastic about a competitor in a specific use case. This gives you early signal on perception shifts.'
    },
    {
      id: 'faq-3',
      question: 'Can we see when AI answers start making claims about us that legal, compliance, or comms would flag?',
      answer: 'Yes. ANALYZE captures and stores the exact answers AI assistants are giving buyers, including specific claims and promises. That means legal, compliance, and comms can review "Here\'s what\'s being said about us right now" with full context — instead of hearing later that a rep had to walk back something the model told a prospect.'
    },
    {
      id: 'faq-4',
      question: 'Can ANALYZE show which competitors are being positioned as "better for [use case]" so sales and PMM can respond?',
      answer: 'Yes. You can see, for a given use case or segment ("best for enterprise security," "best for small teams," etc.), which competitor AI is recommending and how it\'s justifying that recommendation. This gives PMM and Sales enablement real positioning intel: how we\'re being framed, how they\'re being framed, and what claims are winning those recommendations.'
    },
    {
      id: 'faq-5',
      question: 'Can we identify which sources (analyst sites, blogs, partner pages, competitor content) AI is using as "truth" when it talks about us?',
      answer: 'Yes. ANALYZE shows you the domains and URLs that AI assistants are citing to describe you and your competitors — review sites, comparison pages, blog posts, PDFs, landing pages. You see which sources are shaping the narrative, how often they\'re referenced, and whether they\'re friendly, neutral, misleading, or outright hostile.'
    },
    {
      id: 'faq-6',
      question: 'Can we tell if a specific AI channel that used to recommend us — like Copilot, Perplexity, or ChatGPT — quietly stopped doing it?',
      answer: 'Yes. ANALYZE tracks how each AI assistant / AI search engine treats you over time. If you were being recommended in a certain channel and that channel stops mentioning you (or starts preferring a competitor), you\'ll see that shift. That\'s an early warning that a source of qualified demand is eroding.'
    },
    {
      id: 'faq-7',
      question: 'Can we catch negative narrative drift early, before it becomes something our CRO or CMO gets asked about?',
      answer: 'Yes. Because ANALYZE tracks language, sentiment, and competitive framing over time, you can spot "We\'re suddenly being described as outdated / limited / not for enterprise" the moment it starts happening. That means you can correct messaging, prep leadership, and brief Sales before it shows up in pipeline reviews or board questions.'
    },
    {
      id: 'faq-8',
      question: 'Can these findings be shared with legal / PR / exec leadership without giving them full access to the rest of the platform?',
      answer: 'Yes. You can pull specific evidence — exact answers, timestamps, prompts, competitor positioning, sentiment trendlines — and share that in a lightweight format with comms, legal, or exec stakeholders. They get the receipts without needing to learn the full product.'
    },
    {
      id: 'faq-9',
      question: 'Does ANALYZE ingest or expose any private customer conversations, or is this all from public/observable model output?',
      answer: 'ANALYZE is working off of publicly observable model output and what AI assistants are telling buyers in-market. We\'re not ingesting your internal call recordings, emails, chat logs, or proprietary conversations. Your internal data and your workspace remain private to you.'
    },
    {
      id: 'faq-10',
      question: 'Is this only relevant for regulated categories, or should every go-to-market team be watching this now?',
      answer: 'Every GTM team needs this now. Regulated companies care about compliance and liability. Everyone else cares about reputation, positioning, and pipeline. AI assistants are already acting like evaluators, telling buyers who to consider and why. If that story drifts, you feel it in win rate — even if it\'s not "compliance risk."'
    },
    {
      id: 'faq-11',
      question: 'Do we need engineering resources to turn this on, or can marketing/comms run it directly?',
      answer: 'Marketing, PMM, comms, and leadership can run this directly. You\'re not being asked to deploy code, maintain scripts, or build a connector. You turn it on, pick the areas you care about, and start reviewing how you\'re being represented.'
    },
    {
      id: 'faq-12',
      question: 'How is this different from brand monitoring or social listening tools we already use?',
      answer: 'Brand monitoring tells you what people are saying about you on social and review platforms. ANALYZE tells you what AI assistants are saying to your buyers while they\'re in evaluation mode. That includes: how you\'re positioned vs. specific competitors, whether you\'re being recommended at all, whether you\'re being described accurately, and whether sentiment is tilting toward someone else. This isn\'t social chatter. This is what the "advisor" in the buying process is already telling your prospects.'
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
    name: "AI Brand Sentiment Analysis Tool",
    description: "Understand how AI perceives your brand. Track your brand sentiment across all major LLMs to identify positive, neutral, or negative perceptions and protect your reputation.",
    url: "https://www.tryanalyze.ai/features/govern",
    category: "Brand Monitoring Software",
    features: [
      "Cross-LLM Sentiment Tracking",
      "Detect Misinformation & Misattributions",
      "Analyze Sentiment Trends Over Time",
      "Protect Your Brand Reputation"
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
      <HeroGovern />
      <FeaturesGovern />
      <ResourceAllocationGovern />
    <Faq3 
      heading="Frequently Asked Questions"
      description="Answers to common questions about how ANALYZE helps you monitor messaging, sentiment, and brand risk across AI assistants."
      items={faqItems}
    />
    <HeroCta />
    </main>
  );
};

export default BrandSentimentAnalysisPage;
