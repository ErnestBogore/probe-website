import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlugDe, getAllToolsDe, getEnglishSlugDe } from '@/lib/ai-tools/i18n/tools-config.de';
import { ToolPage } from '@/components/ai-tools/ToolPage';

function generateToolFAQSchema(tool: { title: string; slug: string; faqs: { question: string; answer: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": tool.title,
        "url": `https://www.tryanalyze.ai/free-tools/de/${tool.slug}`,
        "inLanguage": "de"
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
  const tools = getAllToolsDe();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlugDe(slug);

  if (!tool) {
    return {
      title: 'Werkzeug Nicht Gefunden | Analyze',
    };
  }

  return {
    title: `${tool.title} | Analyze`,
    description: tool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/de/${tool.slug}`,
      languages: {
        'en': `https://www.tryanalyze.ai/free-tools/${getEnglishSlugDe(tool.slug)}`,
        'de': `https://www.tryanalyze.ai/free-tools/de/${tool.slug}`,
      },
    },
    openGraph: {
      title: `${tool.title} | Analyze`,
      description: tool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/de/${tool.slug}`,
      type: 'website',
      locale: 'de_DE',
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

export default async function GermanToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlugDe(slug);

  if (!tool) {
    notFound();
  }

  const structuredData = generateToolFAQSchema(tool);
  
  // Get the English slug for API calls (German uses English slugs, so it's the same)
  const englishSlug = getEnglishSlugDe(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ToolPage tool={tool} locale="de" englishSlug={englishSlug} />
    </>
  );
}
