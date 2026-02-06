import { Metadata } from 'next';
import { Faq3 } from '@/components/faq3';

export const metadata: Metadata = {
  title: 'Free AI Website Audit Tool | Analyze AI',
  description: 'Analyze AI your website\'s AI readiness with our free AI website audit tool',
  openGraph: {
    title: 'Free AI Website Audit Tool | Analyze AI',
    description: 'Analyze AI your website\'s AI readiness with our free AI website audit tool',
    url: 'https://www.tryanalyze.ai/free-tools/ai-website-audit-tool',
    type: 'website',
    images: [
      {
        url: '/og-ai-website-audit-tool.png',
        width: 1200,
        height: 630,
        alt: 'AI Website Audit Tool by Analyze AI',
      },
    ],
  },
};

const faqItems = [
  {
    id: 'faq-1',
    question: 'What is the AI Readiness Analysis tool?',
    answer: 'It\'s a free AI website analysis tool that shows how well your site is prepared for both search engines and AI answer engines. Unlike a standard SEO audit, this tool checks technical structure, content quality, and AI readiness in one place.'
  },
  {
    id: 'faq-2',
    question: 'How is this different from other SEO analyzers?',
    answer: 'Traditional SEO analyzers focus on ranking factors like backlinks or keywords. Our tool works more like an AI SEO analyzer—it measures how AI models interpret your site, whether your content is structured for training, and if it can appear in AI-powered search results.'
  },
  {
    id: 'faq-3',
    question: 'Who should use an AI SEO audit?',
    answer: 'Marketers, SEOs, and business owners who want to future-proof their visibility. An AI SEO audit is especially valuable if you rely on organic search traffic, since search is shifting toward AI summaries and recommendations.'
  },
  {
    id: 'faq-4',
    question: 'Is the AI website analysis free?',
    answer: 'Yes. This is a free AI website analysis tool. You can run it anytime to get an instant score on your site\'s technical health and AI readiness.'
  },
  {
    id: 'faq-5',
    question: 'What does this AI website analyzer check?',
    answer: 'The AI website analyzer looks at your site in two layers:\n\n1. Basic SEO factors: robots.txt, sitemap, headings, metadata, accessibility.\n2. AI-enhanced factors: entity recognition, knowledge graph readiness, content completeness, AI training value.'
  },
  {
    id: 'faq-6',
    question: 'How does the AI website audit tool calculate my score?',
    answer: 'Your score combines technical SEO audit checks with AI-specific signals. Think of it as merging a website audit with an AI SEO audit. The result is a single readiness percentage that highlights strengths and weaknesses.'
  },
  {
    id: 'faq-7',
    question: 'How often should I run a technical SEO audit with AI?',
    answer: 'Run an AI technical SEO audit after major updates to your site, or at least quarterly. This ensures new content and technical changes don\'t weaken your site\'s AI visibility.'
  },
  {
    id: 'faq-8',
    question: 'What should I fix first if my AI analysis score is low?',
    answer: 'Start with basics like robots.txt, sitemap, and accessibility. Then strengthen AI factors—improve content readability, add schema markup, expand context, and ensure entities (like products or brands) are clearly identifiable. These are exactly what AI-powered tools for technical SEO audits are designed to highlight.'
  },
  {
    id: 'faq-9',
    question: 'Can this AI SEO audit guarantee better traffic?',
    answer: 'No tool can guarantee rankings or traffic. However, improving your AI readiness increases the chance your site appears in AI search engines like ChatGPT, Gemini, and Perplexity, giving you a strong competitive edge.'
  }
];

export default function AIToolPage() {
  return (
    <div className="space-y-16 pb-16">
      <div className="flex flex-col h-[calc(100vh-64px)]">
        <iframe 
          src="https://site-ai-readiness-tool.vercel.app/" 
          className="flex-grow w-full border-0"
          title="AI Website Audit Tool"
          allowFullScreen
        />
      </div>
      
      <div className="container">
        <Faq3 
          heading="AI Website Audit Tool - FAQs"
          description="Find answers to common questions about our AI-powered website audit tool."
          items={faqItems}
        />
      </div>
    </div>
  );
}
