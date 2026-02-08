import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBusinessNameGeneratorJa, getAllBusinessNameGeneratorsJa } from '@/lib/ai-tools/i18n/business-name-generators-config.ja';
import { generateToolHreflangAlternates } from '@/lib/ai-tools/hreflang-utils';
import { BusinessNameGeneratorPage } from '@/components/ai-tools/BusinessNameGeneratorPage';
import { computeRelatedTools } from '@/lib/ai-tools/related-tools-utils';

function generateToolFAQSchema(tool: { title: string; slug: string; faqs: { question: string; answer: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": tool.title,
        "url": `https://www.tryanalyze.ai/free-tools/ja/business-name-generator/${tool.slug}`,
        "inLanguage": "ja"
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
  const tools = getAllBusinessNameGeneratorsJa();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getBusinessNameGeneratorJa(slug);

  if (!tool) {
    return {
      title: 'ツールが見つかりません',
    };
  }

  return {
    title: `${tool.title}`,
    description: tool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/ja/business-name-generator/${tool.slug}`,
      languages: generateToolHreflangAlternates(tool.slug, 'business-name-generator'),
    },
    openGraph: {
      title: `${tool.title}`,
      description: tool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/ja/business-name-generator/${tool.slug}`,
      type: 'website',
      locale: 'ja_JP',
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
      title: `${tool.title}`,
      description: tool.metaDescription,
      images: ['https://www.tryanalyze.ai/og-free-business-name-generator.png'],
    },
  };
}

export default async function JapaneseBusinessNameGeneratorPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getBusinessNameGeneratorJa(slug);

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
      <BusinessNameGeneratorPage tool={tool} locale="ja" relatedTools={computeRelatedTools(getAllBusinessNameGeneratorsJa(), slug)} />
    </>
  );
}
