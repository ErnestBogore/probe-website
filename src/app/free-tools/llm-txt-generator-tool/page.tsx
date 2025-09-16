import { Metadata } from 'next';
import { Faq3 } from '@/components/faq3';

export const metadata: Metadata = {
  title: '[Free Tool] Generate LLM.txt in Minutes',
  description: 'Generate LLM.txt files with our free LLM.txt Generator tool.',
  openGraph: {
    title: '[Free Tool] Generate LLM.txt in Minutes',
    description: 'Generate LLM.txt files with our free LLM.txt Generator tool.',
    url: 'https://tryprobe.com/free-tools/llm-txt-generator-tool',
    type: 'website',
    images: [
      {
        url: '/llmtxt-og.png',
        width: 1200,
        height: 630,
        alt: 'LLM.txt Generator Tool by Probe Analytics',
      },
    ],
  },
};

const faqItems = [
  {
    id: 'faq-1',
    question: 'What is an LLMs.txt file?',
    answer: 'An LLMs.txt file is a new standard that lets website owners control how their content is accessed, used, and referenced by AI models. Similar to robots.txt for search engines, LLMs.txt gives guidance to large language models (LLMs) about crawling and training permissions.'
  },
  {
    id: 'faq-2',
    question: 'Why should I generate an LLMs.txt file for my website?',
    answer: 'Adding an LLMs.txt file makes your site more discoverable and accessible to AI models. It helps ensure your content is read correctly, attributed properly, and optionally restricted from unwanted AI training. It\'s quickly becoming a best practice for websites that want to prepare for the AI-driven web.'
  },
  {
    id: 'faq-3',
    question: 'How does the LLMs.txt Generator work?',
    answer: 'Simply enter your website\'s domain into the tool. It automatically scans your site and produces an LLMs.txt file (and a more detailed llms-full.txt) that you can download and place at the root of your domain.'
  },
  {
    id: 'faq-4',
    question: 'What is the difference between llms.txt and llms-full.txt?',
    answer: 'llms.txt: A lightweight file with essential guidance for AI crawlers.\nllms-full.txt: A more detailed version that lists your site\'s content in greater depth, making it easier for LLMs to understand your full structure.'
  },
  {
    id: 'faq-5',
    question: 'Where should I place my LLMs.txt file once generated?',
    answer: 'Place it in the root directory of your domain (e.g., example.com/llms.txt). This ensures AI crawlers can easily locate it, just like robots.txt or sitemap.xml.'
  },
  {
    id: 'faq-6',
    question: 'Will this stop AI from training on my content?',
    answer: 'Not entirely. LLMs.txt is a developing standard, and adoption varies by provider. Some AI crawlers (like those respecting robots.txt) will honor your LLMs.txt rules. Others may not yet fully comply. However, having the file gives you greater visibility and control.'
  },
  {
    id: 'faq-7',
    question: 'Does adding an LLMs.txt file affect SEO?',
    answer: 'No. LLMs.txt is separate from traditional search engine files like robots.txt and sitemap.xml. It doesn\'t impact how Google or Bing index your site. It\'s designed specifically for AI models and generative engines.'
  },
  {
    id: 'faq-8',
    question: 'Do I need technical skills to use this generator?',
    answer: 'No. The generator automatically produces the correct format. You just need access to your website\'s root directory or hosting environment to upload the file.'
  },
  {
    id: 'faq-9',
    question: 'How often should I update my LLMs.txt file?',
    answer: 'Update it whenever you make major changes to your site structure or content, especially if you want to adjust how AI systems discover and reference your material. For dynamic sites, quarterly updates are recommended.'
  }
];

export default function LLMTxtGeneratorPage() {
  return (
    <div className="space-y-16 pb-16">
      <div className="flex flex-col h-[calc(100vh-64px)]">
        <iframe 
          src="https://llm-txt-generator-beta.vercel.app/" 
          className="flex-grow w-full border-0"
          title="LLM.txt Generator Tool"
          allowFullScreen
        />
      </div>
      
      <div className="container">
        <Faq3 
          heading="LLM.txt Generator Tool - FAQs"
          description="Find answers to common questions about our LLM.txt generator and how to optimize your website for AI."
          items={faqItems}
        />
      </div>
    </div>
  );
}
