import { Metadata } from 'next';
import { Faq3 } from '@/components/faq3';

export const metadata: Metadata = {
  title: '[Free Tool] Best Perplexity AI Alternative',
  description: 'Using this Perplexity Alternative, you can search anything and get a structured result along with a citation report.',
  openGraph: {
    title: '[Free Tool] Best Perplexity AI Alternative',
    description: 'Using this Perplexity Alternative, you can search anything and get a structured result along with a citation report.',
    url: 'https://tryprobe.com/free-tools/perplexity-ai-alternative',
    type: 'website',
    images: [
      {
        url: '/perplexity alternative og.png',
        width: 1200,
        height: 630,
        alt: 'Perplexity AI Alternative by Probe Analytics',
      },
    ],
  },
};

const faqItems = [
  {
    id: 'faq-1',
    question: 'What is the Perplexity AI Alternative tool?',
    answer: 'This tool helps you see exactly how answer engines perceive your brand. By entering high-intent queries (like "best CRM for small businesses" or "most secure cloud storage providers"), you can uncover which competitors dominate AI-powered search results in your category.'
  },
  {
    id: 'faq-2',
    question: 'How is this different from Perplexity AI itself?',
    answer: 'Perplexity is an AI-powered answer engine. The Perplexity AI Alternative is a research tool that shows you how engines like Perplexity, ChatGPT, or Gemini present competitors for the same queries. Instead of giving you an answer, it reveals the competitive landscape behind those answers.'
  },
  {
    id: 'faq-3',
    question: 'Who should use this tool?',
    answer: 'It\'s designed for marketers, SEOs, founders, and content strategists who want to understand how their brand and competitors are positioned in AI search. If you care about category dominance in emerging AI-driven discovery, this tool is for you.'
  },
  {
    id: 'faq-4',
    question: 'What kinds of queries can I test?',
    answer: 'You can test any high-intent query, such as:\n"Best CRM software for small businesses"\n"Top project management tools 2024"\n"Most reliable web hosting services"\nThe tool works best with commercial or product-focused queries where buyers are actively comparing solutions.'
  },
  {
    id: 'faq-5',
    question: 'How does the tool gather results?',
    answer: 'The tool queries leading answer engines and extracts the sources, brand mentions, and answer snippets. It then organizes them so you can see which competitors are consistently surfaced and how they\'re positioned.'
  },
  {
    id: 'faq-6',
    question: 'Can I see how my brand compares to competitors?',
    answer: 'Yes. By running queries relevant to your industry, you\'ll see whether your brand is being cited, which sources are carrying your competitors, and how often they appear compared to you.'
  },
  {
    id: 'faq-7',
    question: 'How does this help with SEO or AI visibility?',
    answer: 'Traditional SEO tools show how you rank in Google. This tool shows how you rank in AI answer engines. As more users turn to AI for discovery, this gives you a new layer of competitive intelligence and helps you plan content strategies tailored for AI-first search.'
  },
  {
    id: 'faq-8',
    question: 'Is this a free tool?',
    answer: 'Yes, the Perplexity AI Alternative tool is free to use. You can enter as many queries as you\'d like to test your brand\'s visibility across answer engines.'
  },
  {
    id: 'faq-9',
    question: 'How often should I use this tool?',
    answer: 'Use it when launching new products, testing new content strategies, or monitoring your brand visibility against competitors. For most businesses, running checks monthly or quarterly ensures you stay ahead of shifts in AI search results.'
  }
];

export default function PerplexityAlternativePage() {
  return (
    <div className="space-y-16 pb-16">
      <div className="flex flex-col h-[calc(100vh-64px)]">
        <iframe 
          src="https://search-anything-lovat.vercel.app/" 
          className="flex-grow w-full border-0"
          title="Perplexity AI Alternative Search Tool"
          allowFullScreen
        />
      </div>
      
      <div className="container">
        <Faq3 
          heading="Perplexity AI Alternative - FAQs"
          description="Find answers to common questions about our AI-powered search tool and how to get the most structured results with citations."
          items={faqItems}
        />
      </div>
    </div>
  );
}
