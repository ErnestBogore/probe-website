import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getBusinessNameGeneratorFr, getAllBusinessNameGeneratorsFr } from '@/lib/ai-tools/i18n/business-name-generators-config.fr';
import { BusinessNameGeneratorPage } from '@/components/ai-tools/BusinessNameGeneratorPage';

function generateToolFAQSchema(tool: { title: string; slug: string; faqs: { question: string; answer: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "name": tool.title,
        "url": `https://www.tryanalyze.ai/free-tools/fr/business-name-generator/${tool.slug}`,
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
  const tools = getAllBusinessNameGeneratorsFr();
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getBusinessNameGeneratorFr(slug);

  if (!tool) {
    return {
      title: 'Outil Non Trouvé | Analyze AI',
    };
  }

  return {
    title: `${tool.title} | Analyze AI`,
    description: tool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/fr/business-name-generator/${tool.slug}`,
      languages: {
        'en': `https://www.tryanalyze.ai/free-tools/business-name-generator/${tool.slug}`,
        'fr': `https://www.tryanalyze.ai/free-tools/fr/business-name-generator/${tool.slug}`,
      },
    },
    openGraph: {
      title: `${tool.title} | Analyze AI`,
      description: tool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/fr/business-name-generator/${tool.slug}`,
      type: 'website',
      locale: 'fr_FR',
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
      title: `${tool.title} | Analyze AI`,
      description: tool.metaDescription,
      images: ['https://www.tryanalyze.ai/og-free-business-name-generator.png'],
    },
  };
}

export default async function FrenchBusinessNameGeneratorPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getBusinessNameGeneratorFr(slug);

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
      <BusinessNameGeneratorPage tool={tool} locale="fr" />
    </>
  );
}
