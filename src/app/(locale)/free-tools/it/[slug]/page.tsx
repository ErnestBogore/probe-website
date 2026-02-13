import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlugIt, getAllToolsIt, getEnglishSlugIt } from '@/lib/ai-tools/i18n/tools-config.it';
import { generateToolHreflangAlternates } from '@/lib/ai-tools/hreflang-utils';
import { ToolPage } from '@/components/ai-tools/ToolPage';
import { computeRelatedTools } from '@/lib/ai-tools/related-tools-utils';
import { getSeoToolBySlugIt, getAllSeoToolSlugsIt } from '@/lib/seo-tools/i18n/seo-tools-config.it';
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
        "url": `https://www.tryanalyze.ai/free-tools/it/${tool.slug}`,
        "inLanguage": "it"
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
  const aiTools = getAllToolsIt();
  const seoToolSlugs = getAllSeoToolSlugsIt();
  return [
    ...aiTools.map((tool) => ({ slug: tool.slug })),
    ...seoToolSlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlugIt(slug);
  const seoTool = getSeoToolBySlugIt(slug);

  const activeTool = tool || seoTool;

  if (!activeTool) {
    return {
      title: 'Strumento Non Trovato',
    };
  }

  const hreflangAlternates = seoTool
    ? generateSeoToolHreflangAlternates(activeTool.slug)
    : generateToolHreflangAlternates(getEnglishSlugIt(activeTool.slug) ?? activeTool.slug, 'tool');

  return {
    title: `${activeTool.title}`,
    description: activeTool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/it/${activeTool.slug}`,
      languages: hreflangAlternates,
    },
    openGraph: {
      title: `${activeTool.title}`,
      description: activeTool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/it/${activeTool.slug}`,
      type: 'website',
      locale: 'it_IT',
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

export default async function ItalianToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlugIt(slug);
  const seoTool = getSeoToolBySlugIt(slug);

  if (!tool && !seoTool) {
    notFound();
  }

  // SEO Data Tool rendering path
  if (seoTool) {
    const faqSchema = generateFAQPageSchema(seoTool.faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Strumenti Gratuiti', href: '/free-tools/it' },
      { name: seoTool.name, href: `/free-tools/it/${seoTool.slug}` },
    ]);
    const webAppSchema = generateWebApplicationSchema({
      name: seoTool.title,
      description: seoTool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/it/${seoTool.slug}`,
      applicationCategory: 'SEOApplication',
    });

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <SeoToolPage tool={seoTool} locale="it" relatedTools={computeSeoRelatedTools(slug, 'it')} />
      </>
    );
  }

  // AI Tool rendering path (existing)
  const structuredData = generateToolFAQSchema(tool!);
  const englishSlug = getEnglishSlugIt(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ToolPage tool={tool!} locale="it" englishSlug={englishSlug} relatedTools={computeRelatedTools(getAllToolsIt(), slug)} />
    </>
  );
}
