import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlugEs, getAllToolsEs, getEnglishSlugEs } from '@/lib/ai-tools/i18n/tools-config.es';
import { ToolPage } from '@/components/ai-tools/ToolPage';

function generateToolFAQSchema(tool: { title: string; slug: string; faqs: { question: string; answer: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": tool.title,
        "url": `https://www.tryanalyze.ai/free-tools/es/${tool.slug}`,
        "inLanguage": "es"
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
  const tools = getAllToolsEs();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlugEs(slug);

  if (!tool) {
    return {
      title: 'Herramienta No Encontrada | Analyze',
    };
  }

  return {
    title: `${tool.title} | Analyze`,
    description: tool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/es/${tool.slug}`,
      languages: {
        'en': `https://www.tryanalyze.ai/free-tools/${getEnglishSlugEs(tool.slug) || tool.slug}`,
        'es': `https://www.tryanalyze.ai/free-tools/es/${tool.slug}`,
      },
    },
    openGraph: {
      title: `${tool.title} | Analyze`,
      description: tool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/es/${tool.slug}`,
      type: 'website',
      locale: 'es_ES',
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
      title: `${tool.title} | Analyze`,
      description: tool.metaDescription,
      images: ['https://www.tryanalyze.ai/og-free-ai-marketing-tools.png'],
    },
  };
}

export default async function SpanishToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlugEs(slug);

  if (!tool) {
    notFound();
  }

  const structuredData = generateToolFAQSchema(tool);
  
  // Get the English slug for API calls
  const englishSlug = getEnglishSlugEs(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ToolPage tool={tool} locale="es" englishSlug={englishSlug} />
    </>
  );
}
