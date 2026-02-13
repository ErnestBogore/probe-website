import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlugKo, getAllToolsKo, getEnglishSlugKo } from '@/lib/ai-tools/i18n/tools-config.ko';
import { generateToolHreflangAlternates } from '@/lib/ai-tools/hreflang-utils';
import { ToolPage } from '@/components/ai-tools/ToolPage';
import { computeRelatedTools } from '@/lib/ai-tools/related-tools-utils';
import { getSeoToolBySlugKo, getAllSeoToolSlugsKo } from '@/lib/seo-tools/i18n/seo-tools-config.ko';
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
        "url": `https://www.tryanalyze.ai/free-tools/ko/${tool.slug}`,
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
  const aiTools = getAllToolsKo();
  const seoToolSlugs = getAllSeoToolSlugsKo();
  return [
    ...aiTools.map((tool) => ({ slug: tool.slug })),
    ...seoToolSlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlugKo(slug);
  const seoTool = getSeoToolBySlugKo(slug);

  const activeTool = tool || seoTool;

  if (!activeTool) {
    return {
      title: '도구를 찾을 수 없습니다',
    };
  }

  const hreflangAlternates = seoTool
    ? generateSeoToolHreflangAlternates(activeTool.slug)
    : generateToolHreflangAlternates(getEnglishSlugKo(activeTool.slug) ?? activeTool.slug, 'tool');

  return {
    title: `${activeTool.title}`,
    description: activeTool.metaDescription,
    alternates: {
      canonical: `https://www.tryanalyze.ai/free-tools/ko/${activeTool.slug}`,
      languages: hreflangAlternates,
    },
    openGraph: {
      title: `${activeTool.title}`,
      description: activeTool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/ko/${activeTool.slug}`,
      type: 'website',
      locale: 'ko_KR',
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

export default async function KoreanToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlugKo(slug);
  const seoTool = getSeoToolBySlugKo(slug);

  if (!tool && !seoTool) {
    notFound();
  }

  // SEO Data Tool rendering path
  if (seoTool) {
    const faqSchema = generateFAQPageSchema(seoTool.faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: '홈', href: '/' },
      { name: '무료 도구', href: '/free-tools/ko' },
      { name: seoTool.name, href: `/free-tools/ko/${seoTool.slug}` },
    ]);
    const webAppSchema = generateWebApplicationSchema({
      name: seoTool.title,
      description: seoTool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/ko/${seoTool.slug}`,
      applicationCategory: 'SEOApplication',
    });

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
        {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <SeoToolPage tool={seoTool} locale="ko" relatedTools={computeSeoRelatedTools(slug, 'ko')} />
      </>
    );
  }

  // AI Tool rendering path (existing)
  const structuredData = generateToolFAQSchema(tool!);
  const englishSlug = getEnglishSlugKo(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <ToolPage tool={tool!} locale="ko" englishSlug={englishSlug} relatedTools={computeRelatedTools(getAllToolsKo(), slug)} />
    </>
  );
}
