import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlugFr, getAllToolsFr, getEnglishSlug } from '@/lib/ai-tools/i18n/tools-config.fr';
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
        "url": `https://www.tryanalyze.ai/free-tools/fr/${tool.slug}`,
        "inLanguage": "fr"
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
  const tools = getAllToolsFr();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlugFr(slug);

  if (!tool) {
    return {
      title: 'Outil Non Trouvé',
    };
  }

  return {
    title: `${tool.title}`,
    description: tool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/fr/${tool.slug}`,
      languages: generateToolHreflangAlternates(getEnglishSlug(tool.slug) || tool.slug, 'tool'),
    },
    openGraph: {
      title: `${tool.title}`,
      description: tool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/fr/${tool.slug}`,
      type: 'website',
      locale: 'fr_FR',
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

export default async function FrenchToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlugFr(slug);

  if (!tool) {
    notFound();
  }

  const structuredData = generateToolFAQSchema(tool);
  
  // Get the English slug for API calls
  const englishSlug = getEnglishSlug(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ToolPage tool={tool} locale="fr" englishSlug={englishSlug} relatedTools={computeRelatedTools(getAllToolsFr(), slug)} />
    </>
  );
}
