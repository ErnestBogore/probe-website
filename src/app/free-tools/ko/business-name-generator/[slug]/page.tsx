import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBusinessNameGeneratorKo, getAllBusinessNameGeneratorsKo } from '@/lib/ai-tools/i18n/business-name-generators-config.ko';
import { BusinessNameGeneratorPage } from '@/components/ai-tools/BusinessNameGeneratorPage';

function generateToolFAQSchema(tool: { title: string; slug: string; faqs: { question: string; answer: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": tool.title,
        "url": `https://www.tryanalyze.ai/free-tools/ko/business-name-generator/${tool.slug}`,
        "inLanguage": "ko"
      },
      {
        "@type": "FAQPage",
        "mainEntity": tool.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tools = getAllBusinessNameGeneratorsKo();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getBusinessNameGeneratorKo(slug);

  if (!tool) {
    return {
      title: '도구를 찾을 수 없습니다 | Analyze',
    };
  }

  return {
    title: `${tool.title} | Analyze`,
    description: tool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/ko/business-name-generator/${tool.slug}`,
      languages: {
        'en': `https://www.tryanalyze.ai/free-tools/business-name-generator/${tool.slug}`,
        'ko': `https://www.tryanalyze.ai/free-tools/ko/business-name-generator/${tool.slug}`,
      },
    },
    openGraph: {
      title: `${tool.title} | Analyze`,
      description: tool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/ko/business-name-generator/${tool.slug}`,
      type: 'website',
      locale: 'ko_KR',
      images: [
        {
          url: 'https://www.tryanalyze.ai/og-free-business-name-generator.png',
          width: 1200,
          height: 630,
          alt: `${tool.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.title} | Analyze`,
      description: tool.metaDescription,
      images: ['https://www.tryanalyze.ai/og-free-business-name-generator.png'],
    },
  };
}

export default async function KoreanBusinessNameGeneratorPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getBusinessNameGeneratorKo(slug);

  if (!tool) {
    notFound();
  }

  const structuredData = generateToolFAQSchema(tool);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <BusinessNameGeneratorPage tool={tool} locale="ko" />
    </>
  );
}
