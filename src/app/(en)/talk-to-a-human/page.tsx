import Script from 'next/script'
import type { Metadata } from 'next'
import { TalkToHumanHero } from '@/components/talk-to-human/talk-to-human-hero'
import { ResourcesTalkToHuman } from '@/components/talk-to-human/resources-talk-to-human'
import { FaqTalkToHuman } from '@/components/talk-to-human/faq-talk-to-human'
import { getBlogPostsBySlugs } from '@/lib/datocms'

export const metadata: Metadata = {
  title: 'Talk To A Human - AI Search Analytics Platform',
  description: 'Schedule a demo with our team to see how Analyze AI can help you track your AI visibility across major AI engines.',
  alternates: {
    canonical: '/talk-to-a-human',
  },
  openGraph: {
    type: 'website',
    url: '/talk-to-a-human',
    title: 'Talk To A Human - AI Search Analytics Platform',
    description: 'Schedule a demo with our team to see how Analyze AI can help you track your AI visibility across major AI engines.',
    images: [{
      url: 'https://www.tryanalyze.ai/Artboard%20(1).png',
      width: 1536,
      height: 1024,
      alt: 'Schedule a Demo with Analyze AI',
    }],
  },
}

export default async function TalkToAHumanPage() {
  // Fetch the specific blog posts for the resources section
  const resourcePosts = await getBlogPostsBySlugs([
    'outrank-competitors-in-ai-search',
    'how-to-rank-on-chatgpt',
    'how-to-rank-on-perplexity'
  ]);

  // FAQ items for talk-to-a-human page
  const talkToHumanFaqItems = [
    {
      id: 'faq-1',
      question: 'What happens during the demo?',
      answer: 'During our 15-30 minute demo, we\'ll show you how Analyze AI tracks your brand across AI engines, walk through your current visibility, and discuss how our platform can help you improve your AI search presence. We\'ll also answer any specific questions about your use case.'
    },
    {
      id: 'faq-2',
      question: 'Do I need to prepare anything for the call?',
      answer: 'No preparation needed! Just come with questions about your brand\'s AI visibility. If you have specific competitors or search terms you\'re curious about, feel free to mention them during the call.'
    },
    {
      id: 'faq-3',
      question: 'How long does the demo take?',
      answer: 'Most demos take 15-30 minutes. We keep them focused and actionable, showing you exactly how Analyze AI works and how it applies to your specific situation.'
    },
    {
      id: 'faq-4',
      question: 'Is this a sales call?',
      answer: 'While we\'re happy to discuss pricing if you\'re interested, our primary goal is to show you how AI search analytics works and help you understand your current visibility. There\'s no pressure to buy anything.'
    },
    {
      id: 'faq-5',
      question: 'Can I reschedule if needed?',
      answer: 'Absolutely! You can reschedule or cancel anytime using the link in your confirmation email. We understand schedules change.'
    },
    {
      id: 'faq-6',
      question: 'Who will I be talking to?',
      answer: 'You\'ll speak with someone from our team who understands both the technical aspects of AI search and the marketing challenges you\'re facing. They\'ll be able to answer detailed questions about implementation and strategy.'
    }
  ];

  return (
    <>
      <main className="min-h-screen">
        <TalkToHumanHero />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="tidycal-embed" data-path="analyze/demo"></div>
          </div>
        </div>

        <ResourcesTalkToHuman posts={resourcePosts} />
        
        <FaqTalkToHuman 
          heading="Questions about the demo?"
          description="Here are answers to common questions about scheduling and what to expect during your demo call."
          items={talkToHumanFaqItems}
        />
      </main>
      
      <Script 
        src="https://asset-tidycal.b-cdn.net/js/embed.js" 
        strategy="afterInteractive"
      />
    </>
  )
}
