import { Hero115 } from '@/components/features/ai-search-analytics/hero-115';
import { Faq3 } from '@/components/faq3';
import { Feature166 } from '@/components/feature166';
import { HeroCta } from '@/components/marketing/hero-cta';
import { generateServiceSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'AI Brand Sentiment Analysis Tool | Analyze',
  description: "Understand how AI perceives your brand. Our sentiment analysis tool tracks whether the narrative is positive, neutral, or negative across LLMs to protect your reputation.",
  openGraph: {
    images: ['/monitor brand sentiment feature image.png'],
  },
};

const BrandSentimentAnalysisPage = () => {
  const faqItems = [
    {
      id: 'faq-1',
      question: 'What is Brand Sentiment Analysis for LLMs?',
      answer: 'It\'s the process of tracking and analyzing how AI answer engines portray your brand, classifying the sentiment as positive, neutral, or negative to ensure your brand is represented accurately.'
    },
    {
      id: 'faq-2',
      question: 'Why is it important to monitor AI sentiment?',
      answer: 'AI can misinterpret information or misattribute features, leading to negative or inaccurate brand portrayals. Monitoring allows you to identify and address these issues to protect your reputation.'
    },
    {
      id: 'faq-3',
      question: 'How do you determine the sentiment?',
      answer: 'Our proprietary models analyze the language, context, and attributes used by LLMs in their responses to classify the overall sentiment towards your brand with high accuracy.'
    },
    {
      id: 'faq-4',
      question: 'Can this tool help with crisis management?',
      answer: 'Yes. By providing early warnings of negative sentiment trends, our tool allows you to respond proactively to potential reputational threats before they escalate.'
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
    url: "https://www.tryanalyze.ai/features/brand-sentiment-analysis",
    category: "Brand Monitoring Software",
    features: [
      "Cross-LLM Sentiment Tracking",
      "Detect Misinformation & Misattributions",
      "Analyze Sentiment Trends Over Time",
      "Protect Your Brand Reputation"
    ]
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <Hero115 
      pillText="Brand Sentiment Analysis Tool"
      heading="Monitor How AI Perceives <br /> Your Brand"
      description="Track your brand sentiment across all major LLMs. Understand whether the AI's perception is positive, neutral, or negative, and catch misinterpretations before they impact your reputation."
      button={{
        text: "Show Me My AI Rankings",
        url: "/signup",
      }}
      imageSrc="/monitor brand sentiment feature image.png"
      imageAlt="A dashboard showing brand sentiment analysis across different AI models."
      logos={logos}
    />
    <Feature166 
      heading="Stay Ahead of the AI Narrative"
      description="AI can misinterpret context or misattribute features. Our tools help you monitor and correct the narrative before it becomes a problem."
      feature1={{
        title: "Cross-LLM Sentiment Tracking",
        description: "Get a unified view of your brand sentiment (positive, neutral, negative) across every major AI answer engine.",
        image: "/AI traffic.png"
      }}
      feature2={{
        title: "Detect Misinformation & Misattributions",
        description: "Identify when AI models are misrepresenting your products or services, so you can take corrective action.",
        image: "/Competitive insights.png"
      }}
      feature3={{
        title: "Analyze Sentiment Trends Over Time",
        description: "Track how your brand sentiment evolves and measure the impact of your marketing and PR efforts on AI perception.",
        image: "/Artboard (1).png"
      }}
      feature4={{
        title: "Protect Your Brand Reputation",
        description: "Proactively manage your online reputation by staying informed about how AI is portraying your brand to the world.",
        image: "/Chats.png"
      }}
    />
    <Faq3 
      heading="Frequently Asked Questions"
      description="Find answers to common questions about our Brand Sentiment Analysis feature."
      items={faqItems}
    />
    <HeroCta />
    </>
  );
};

export default BrandSentimentAnalysisPage;
