import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getToolBySlug, getAllTools } from '@/lib/ai-tools/tools-config';
import { generateToolHreflangAlternates } from '@/lib/ai-tools/hreflang-utils';
import { ToolPage } from '@/components/ai-tools/ToolPage';
import { computeRelatedTools } from '@/lib/ai-tools/related-tools-utils';
import { generateWebApplicationSchema, generateFAQPageSchema, generateBreadcrumbSchema, generateHowToSchema } from '@/lib/schema';
import { getSeoToolBySlug, getAllSeoToolSlugs } from '@/lib/seo-tools/seo-tools-config';
import { generateSeoToolHreflangAlternates } from '@/lib/seo-tools/seo-hreflang-utils';
import { SeoToolPage } from '@/components/seo-tools/SeoToolPage';
import { computeSeoRelatedTools } from '@/lib/seo-tools/seo-related-tools-utils';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const aiTools = getAllTools();
  const seoToolSlugs = getAllSeoToolSlugs();
  return [
    ...aiTools.map((tool) => ({ slug: tool.slug })),
    ...seoToolSlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  const seoTool = getSeoToolBySlug(slug);

  const activeTool = tool || seoTool;

  if (!activeTool) {
    return {
      title: 'Tool Not Found',
    };
  }

  const hreflangAlternates = seoTool
    ? generateSeoToolHreflangAlternates(activeTool.slug)
    : generateToolHreflangAlternates(activeTool.slug, 'tool');

  return {
    title: `${activeTool.title}`,
    description: activeTool.metaDescription,
    alternates: {
      canonical: `/free-tools/${activeTool.slug}`,
      languages: hreflangAlternates,
    },
    openGraph: {
      title: `${activeTool.title}`,
      description: activeTool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/${activeTool.slug}`,
      type: 'website',
      locale: 'en_US',
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

export default async function DynamicToolPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  const seoTool = getSeoToolBySlug(slug);

  if (!tool && !seoTool) {
    notFound();
  }

  // SEO Data Tool rendering path
  if (seoTool) {
    const faqSchema = generateFAQPageSchema(seoTool.faqs);
    const breadcrumbSchema = generateBreadcrumbSchema([
      { name: 'Home', href: '/' },
      { name: 'Free Tools', href: '/free-tools' },
      { name: seoTool.name, href: `/free-tools/${seoTool.slug}` },
    ]);
    const webAppSchema = generateWebApplicationSchema({
      name: seoTool.title,
      description: seoTool.metaDescription,
      url: `https://www.tryanalyze.ai/free-tools/${seoTool.slug}`,
      applicationCategory: 'SEOApplication',
    });

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <SeoToolPage tool={seoTool} relatedTools={computeSeoRelatedTools(slug)} />
      </>
    );
  }

  // AI Tool rendering path (existing)
  const webAppSchema = generateWebApplicationSchema({
    name: tool!.title,
    description: tool!.metaDescription,
    url: `https://www.tryanalyze.ai/free-tools/${tool!.slug}`,
    applicationCategory: 'BusinessApplication',
  });
  const faqSchema = generateFAQPageSchema(tool!.faqs);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Free Tools', href: '/free-tools' },
    { name: tool!.name, href: `/free-tools/${tool!.slug}` },
  ]);
  const howToSchema = generateHowToSchema({
    name: `How to Use the ${tool!.name}`,
    description: tool!.description,
    url: `https://www.tryanalyze.ai/free-tools/${tool!.slug}`,
    totalTime: 'PT2M',
    steps: [
      { name: 'Enter your topic or prompt', text: `Type your content into the input field. ${tool!.inputPlaceholder ? `For example: "${tool!.inputPlaceholder}"` : ''}` },
      ...tool!.options.map(opt => ({
        name: `Choose your ${opt.label.toLowerCase()}`,
        text: `Select from available options: ${opt.choices.join(', ')}.`
      })),
      { name: `Click "${tool!.buttonText}"`, text: `Click the "${tool!.buttonText}" button to generate your content using AI.` },
      { name: 'Review and copy your result', text: 'Review the generated content and copy it to use wherever you need.' },
    ],
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webAppSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema)
        }}
      />
      <ToolPage tool={tool!} relatedTools={computeRelatedTools(getAllTools(), slug)} />
    </>
  );
}
