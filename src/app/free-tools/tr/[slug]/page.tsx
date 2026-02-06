import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlugTr, getAllToolsTr, getEnglishSlugTr } from '@/lib/ai-tools/i18n/tools-config.tr';
import { generateToolHreflangAlternates } from '@/lib/ai-tools/hreflang-utils';
import { ToolPage } from '@/components/ai-tools/ToolPage';
import { computeRelatedTools } from '@/lib/ai-tools/related-tools-utils';

function generateToolFAQSchema(tool: { title: string; slug: string; faqs: { question: string; answer: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": tool.title,
        "url": `https://www.tryanalyze.ai/free-tools/tr/${tool.slug}`,
        "inLanguage": "tr"
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
  const tools = getAllToolsTr();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlugTr(slug);

  if (!tool) {
    return {
      title: 'Araç Bulunamadı',
    };
  }

  return {
    title: `${tool.title}`,
    description: tool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/tr/${tool.slug}`,
      languages: generateToolHreflangAlternates(getEnglishSlugTr(tool.slug), 'tool'),
    },
    openGraph: {
      title: `${tool.title}`,
      description: tool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/tr/${tool.slug}`,
      type: 'website',
      locale: 'tr_TR',
      images: [
        {
          url: 'https://www.tryanalyze.ai/og-free-ai-marketing-tools.png',
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
      images: ['https://www.tryanalyze.ai/og-free-ai-marketing-tools.png'],
    },
  };
}

export default async function TurkishToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlugTr(slug);

  if (!tool) {
    notFound();
  }

  const structuredData = generateToolFAQSchema(tool);
  
  // Get the English slug for API calls (Turkish uses English slugs, so it's the same)
  const englishSlug = getEnglishSlugTr(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ToolPage tool={tool} locale="tr" englishSlug={englishSlug} relatedTools={computeRelatedTools(getAllToolsTr(), slug)} />
    </>
  );
}
