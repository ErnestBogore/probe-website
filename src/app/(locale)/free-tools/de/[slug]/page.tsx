import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlugDe, getAllToolsDe, getEnglishSlugDe } from '@/lib/ai-tools/i18n/tools-config.de';
import { generateToolHreflangAlternates } from '@/lib/ai-tools/hreflang-utils';
import { ToolPage } from '@/components/ai-tools/ToolPage';
import { computeRelatedTools } from '@/lib/ai-tools/related-tools-utils';
import { getSeoToolBySlugDe, getAllSeoToolSlugsDe } from '@/lib/seo-tools/i18n/seo-tools-config.de';
import { generateSeoToolHreflangAlternates } from '@/lib/seo-tools/seo-hreflang-utils';
import { SeoToolPage } from '@/components/seo-tools/SeoToolPage';
import { computeSeoRelatedTools } from '@/lib/seo-tools/seo-related-tools-utils';
import { generateWebApplicationSchema, generateFAQPageSchema, generateBreadcrumbSchema } from '@/lib/schema';

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
  const aiTools = getAllToolsDe();
  const seoToolSlugs = getAllSeoToolSlugsDe();
  return [
    ...aiTools.map((tool) => ({ slug: tool.slug })),
    ...seoToolSlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlugDe(slug);
  const seoTool = getSeoToolBySlugDe(slug);

  const activeTool = tool || seoTool;

  if (!activeTool) {
    return {
      title: 'Werkzeug Nicht Gefunden',
    };
  }

  const hreflangAlternates = seoTool
    ? generateSeoToolHreflangAlternates(activeTool.slug)
    : generateToolHreflangAlternates(getEnglishSlugDe(activeTool.slug) ?? activeTool.slug, 'tool');

  return {
    title: `${activeTool.title}`,
    description: activeTool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/de/${activeTool.slug}`,
      languages: hreflangAlternates,
    },
    openGraph: {
      title: `${activeTool.title}`,
      description: activeTool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/de/${activeTool.slug}`,
      type: 'website',
      locale: 'de_DE',
      images: [
        {
          url: 'https://www.tryanalyze.ai/og-free-ai-marketing-tools.png',
          width: 1200,
          height: 630,
          alt: `${activeTool.title}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${activeTool.title}`,
      description: activeTool.metaDescription,
      images: ['https://www.tryanalyze.ai/og-free-ai-marketing-tools.png'],
    },
  };
}

export default async function GermanToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlugDe(slug);
  const seoTool = getSeoToolBySlugDe(slug);

  if (!tool && !seoTool) {
    notFound();
  }

  // SEO Data Tool rendering path
  if (seoTool) {
    const faqSchema = generateFAQPageSchema(seoTool.faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Startseite', href: '/' },
      { name: 'Kostenlose Werkzeuge', href: '/free-tools/de' },
      { name: seoTool.name, href: `/free-tools/de/${seoTool.slug}` },
    ]);
    const webAppSchema = generateWebApplicationSchema({
      name: seoTool.title,
      description: seoTool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/de/${seoTool.slug}`,
      applicationCategory: 'SEOApplication',
    });

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <SeoToolPage tool={seoTool} locale="de" relatedTools={computeSeoRelatedTools(slug, 'de')} />
      </>
    );
  }

  // AI Tool rendering path (existing)
  const structuredData = generateToolFAQSchema(tool!);
  const englishSlug = getEnglishSlugDe(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ToolPage tool={tool!} locale="de" englishSlug={englishSlug} relatedTools={computeRelatedTools(getAllToolsDe(), slug)} />
    </>
  );
}
