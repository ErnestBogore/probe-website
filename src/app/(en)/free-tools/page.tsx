import { Metadata } from 'next';
import Link from 'next/link';
import { getAllTools } from '@/lib/ai-tools/tools-config';
import { generateToolsListingHreflangAlternates } from '@/lib/ai-tools/hreflang-utils';
import { getAllBusinessNameGenerators } from '@/lib/ai-tools/business-name-generators-config';
import { getAllBusinessNameGeneratorsDe } from '@/lib/ai-tools/i18n/business-name-generators-config.de';
import { getAllBusinessNameGeneratorsEs } from '@/lib/ai-tools/i18n/business-name-generators-config.es';
import { getAllBusinessNameGeneratorsFr } from '@/lib/ai-tools/i18n/business-name-generators-config.fr';
import { getAllBusinessNameGeneratorsIt } from '@/lib/ai-tools/i18n/business-name-generators-config.it';
import { getAllBusinessNameGeneratorsJa } from '@/lib/ai-tools/i18n/business-name-generators-config.ja';
import { getAllBusinessNameGeneratorsKo } from '@/lib/ai-tools/i18n/business-name-generators-config.ko';
import { getAllBusinessNameGeneratorsPt } from '@/lib/ai-tools/i18n/business-name-generators-config.pt';
import { getAllBusinessNameGeneratorsTr } from '@/lib/ai-tools/i18n/business-name-generators-config.tr';
import { getAllBusinessNameGeneratorsZh } from '@/lib/ai-tools/i18n/business-name-generators-config.zh';
import { getAllSeoTools } from '@/lib/seo-tools/seo-tools-config';
import { DashedLine } from '@/components/dashed-line';
import { generateItemListSchema, generateBreadcrumbSchema } from '@/lib/schema';
import { Button } from '@/components/ui/button';
import { HeroCta } from '@/components/marketing/hero-cta';
import {
  FileText,
  RefreshCw,
  Search,
  Type,
  ListChecks,
  Sparkles,
  PenTool,
  CheckCircle,
  Hash,
  FileCode,
  Smile,
  Shield,
  Globe,
  Zap,
  Image,
  Lightbulb,
  Video,
  Building2,
  Briefcase,
  Package,
  Megaphone,
  MousePointerClick,
  ShoppingBag,
  Layout,
  FileSignature,
  AtSign,
  Instagram,
  Music2,
  Youtube,
  MessageSquare,
  Users,
  Repeat,
  BarChart3,
  Link2,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free AI Writing Tools',
  description: 'Access our collection of free AI writing tools including paragraph generators, paraphrasers, summarizers, grammar checkers, and more. No signup required.',
  alternates: {
    canonical: '/free-tools',
    languages: generateToolsListingHreflangAlternates(),
  },
  openGraph: {
    title: 'Free AI Writing Tools',
    description: 'Access our collection of free AI writing tools including paragraph generators, paraphrasers, summarizers, grammar checkers, and more. No signup required.',
    url: 'https://www.tryanalyze.ai/free-tools',
    type: 'website',
    images: [
      {
        url: 'https://www.tryanalyze.ai/og-free-ai-marketing-tools.png',
        width: 1200,
        height: 630,
        alt: 'Free AI Writing Tools',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Writing Tools',
    description: 'Access our collection of free AI writing tools including paragraph generators, paraphrasers, summarizers, grammar checkers, and more. No signup required.',
    images: ['https://www.tryanalyze.ai/og-free-ai-marketing-tools.png'],
  },
};

const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  // Writing Tools
  'paragraph-generator': FileText,
  'paragraph-rewriter': RefreshCw,
  'sentence-rewriter': PenTool,
  'conclusion-generator': FileText,
  'outline-generator': ListChecks,
  'blog-title-generator': Sparkles,
  'rewording-tool': Repeat,
  // SEO & Content Marketing Tools
  'meta-description-generator': Search,
  'summarizer': ListChecks,
  'paraphrasing-tool': Type,
  'blog-post-ideas-generator': Lightbulb,
  'seo-title-generator': Search,
  'image-alt-text-generator': Image,
  'content-idea-generator': Lightbulb,
  'video-script-generator': Video,
  // Utility Tools
  'grammar-checker': CheckCircle,
  'ai-content-detector': Search,
  'ai-text-humanizer': Sparkles,
  'plagiarism-checker': Shield,
  'acronym-generator': Hash,
  'lorem-ipsum-generator': FileCode,
  'emoji-translator': Smile,
  // Business & Marketing Tools
  'brand-name-generator': Building2,
  'business-name-generator': Briefcase,
  'product-name-generator': Package,
  'slogan-generator': Megaphone,
  'google-ads-copy-generator': MousePointerClick,
  'product-description-generator': ShoppingBag,
  'landing-page-generator': Layout,
  'website-copy-generator': Globe,
  'resignation-letter-generator': FileSignature,
  // Social Media Tools
  'hook-generator': Zap,
  'social-media-bio-generator': Users,
  'instagram-bio-generator': Instagram,
  'social-media-caption-generator': MessageSquare,
  'instagram-caption-generator': Instagram,
  'social-media-hashtag-generator': Hash,
  'instagram-hashtag-generator': Instagram,
  'social-media-username-generator': AtSign,
  'instagram-name-generator': Instagram,
  'tiktok-hashtag-generator': Music2,
  'tiktok-username-generator': Music2,
  'youtube-channel-description-generator': Youtube,
  'youtube-name-generator': Youtube,
  'youtube-video-description-generator': Youtube,
};

const standaloneTools = [
  {
    slug: 'ai-website-audit-tool',
    name: 'AI Website Audit Tool',
    description: 'Analyze AI your website\'s AI readiness and get actionable recommendations.',
    icon: Globe,
  },
  {
    slug: 'llm-txt-generator-tool',
    name: 'LLM.txt Generator',
    description: 'Generate an LLM.txt file to help AI models understand your content.',
    icon: FileCode,
  },
  {
    slug: 'perplexity-ai-alternative',
    name: 'Perplexity AI Alternative',
    description: 'A free alternative for AI-powered search and research.',
    icon: Zap,
  },
];

const seoToolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'keyword-generator-tool': Search,
  'keyword-difficulty-checker': BarChart3,
  'website-authority-checker': Globe,
  'backlink-checker': Link2,
  'serp-checker': TrendingUp,
  'keyword-rank-checker': BarChart3,
  'youtube-keyword-tool': Youtube,
  'amazon-keyword-tool': ShoppingBag,
  'bing-keyword-tool': Search,
  'website-traffic-checker': TrendingUp,
  'broken-link-checker': Link2,
  'ai-visibility-checker': Sparkles,
};

// Categorize tools
const writingTools = ['paragraph-generator', 'paragraph-rewriter', 'sentence-rewriter', 'conclusion-generator', 'outline-generator', 'blog-title-generator', 'rewording-tool'];
const seoTools = ['meta-description-generator', 'summarizer', 'paraphrasing-tool', 'blog-post-ideas-generator', 'seo-title-generator', 'image-alt-text-generator', 'content-idea-generator', 'video-script-generator'];
const utilityTools = ['grammar-checker', 'ai-content-detector', 'ai-text-humanizer', 'plagiarism-checker', 'acronym-generator', 'lorem-ipsum-generator', 'emoji-translator'];
const businessTools = ['brand-name-generator', 'business-name-generator', 'product-name-generator', 'slogan-generator', 'google-ads-copy-generator', 'product-description-generator', 'landing-page-generator', 'website-copy-generator', 'resignation-letter-generator'];
const socialMediaTools = ['hook-generator', 'social-media-bio-generator', 'instagram-bio-generator', 'social-media-caption-generator', 'instagram-caption-generator', 'social-media-hashtag-generator', 'instagram-hashtag-generator', 'social-media-username-generator', 'instagram-name-generator', 'tiktok-hashtag-generator', 'tiktok-username-generator', 'youtube-channel-description-generator', 'youtube-name-generator', 'youtube-video-description-generator'];

export default function FreeToolsPage() {
  const allTools = getAllTools();
  
  const getToolsByCategory = (slugs: string[]) => {
    return allTools.filter(tool => slugs.includes(tool.slug));
  };

  const writing = getToolsByCategory(writingTools);
  const seo = getToolsByCategory(seoTools);
  const utility = getToolsByCategory(utilityTools);
  const business = getToolsByCategory(businessTools);
  const socialMedia = getToolsByCategory(socialMediaTools);

  // Get one random business name generator from each language
  const enGenerators = getAllBusinessNameGenerators();
  const deGenerators = getAllBusinessNameGeneratorsDe();
  const esGenerators = getAllBusinessNameGeneratorsEs();
  const frGenerators = getAllBusinessNameGeneratorsFr();
  const itGenerators = getAllBusinessNameGeneratorsIt();
  const jaGenerators = getAllBusinessNameGeneratorsJa();
  const koGenerators = getAllBusinessNameGeneratorsKo();
  const ptGenerators = getAllBusinessNameGeneratorsPt();
  const trGenerators = getAllBusinessNameGeneratorsTr();
  const zhGenerators = getAllBusinessNameGeneratorsZh();

  // Pick one random generator from each language (use fixed index for SSR consistency)
  const enGen = enGenerators[0];
  const deGen = deGenerators[5];
  const esGen = esGenerators[10];
  const frGen = frGenerators[15];
  const itGen = itGenerators[20];
  const jaGen = jaGenerators[25];
  const koGen = koGenerators[30];
  const ptGen = ptGenerators[35];
  const trGen = trGenerators[40];
  const zhGen = zhGenerators[45];

  const businessNameIdeas = [
    { lang: 'en', langCode: 'EN', flag: '🇺🇸', title: enGen.title, description: enGen.metaDescription, url: `/free-tools/business-name-generator/${enGen.slug}` },
    { lang: 'de', langCode: 'DE', flag: '🇩🇪', title: deGen.title, description: deGen.metaDescription, url: `/free-tools/de/business-name-generator/${deGen.slug}` },
    { lang: 'es', langCode: 'ES', flag: '🇪🇸', title: esGen.title, description: esGen.metaDescription, url: `/free-tools/es/business-name-generator/${esGen.slug}` },
    { lang: 'fr', langCode: 'FR', flag: '🇫🇷', title: frGen.title, description: frGen.metaDescription, url: `/free-tools/fr/business-name-generator/${frGen.slug}` },
    { lang: 'it', langCode: 'IT', flag: '🇮🇹', title: itGen.title, description: itGen.metaDescription, url: `/free-tools/it/business-name-generator/${itGen.slug}` },
    { lang: 'ja', langCode: 'JA', flag: '🇯🇵', title: jaGen.title, description: jaGen.metaDescription, url: `/free-tools/ja/business-name-generator/${jaGen.slug}` },
    { lang: 'ko', langCode: 'KO', flag: '🇰🇷', title: koGen.title, description: koGen.metaDescription, url: `/free-tools/ko/business-name-generator/${koGen.slug}` },
    { lang: 'pt', langCode: 'PT', flag: '🇧🇷', title: ptGen.title, description: ptGen.metaDescription, url: `/free-tools/pt/business-name-generator/${ptGen.slug}` },
    { lang: 'tr', langCode: 'TR', flag: '🇹🇷', title: trGen.title, description: trGen.metaDescription, url: `/free-tools/tr/business-name-generator/${trGen.slug}` },
    { lang: 'zh', langCode: 'ZH', flag: '🇨🇳', title: zhGen.title, description: zhGen.metaDescription, url: `/free-tools/zh/business-name-generator/${zhGen.slug}` },
  ];

  const itemListSchema = generateItemListSchema({
    name: 'Free AI Writing Tools',
    description: 'Access our collection of free AI writing tools including paragraph generators, paraphrasers, summarizers, grammar checkers, and more.',
    url: 'https://www.tryanalyze.ai/free-tools',
    items: allTools.map(tool => ({
      name: tool.name,
      url: `https://www.tryanalyze.ai/free-tools/${tool.slug}`,
      description: tool.description,
    })),
    itemListOrder: 'unordered',
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', href: '/' },
    { name: 'Free Tools', href: '/free-tools' },
  ]);

  return (
    <main className="bg-gray-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-20 overflow-hidden">
        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300 opacity-30" />
          <div className="absolute top-40 right-20 w-24 h-24 border border-gray-300 opacity-20" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-300 opacity-25" />
          <div className="absolute top-16 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
          <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
              <span className="text-sm font-medium text-gray-700">Free AI Tools</span>
              <span className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Free AI Writing Tools
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Analyze AI's AI writing tools help you produce high-quality content that drives clicks, sign-ups, and sales. Whether you&apos;re looking to generate a title, write a report, or anything else, our AI writing tools have got you covered.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <a href="#writing-tools" className="bg-gray-900 text-white hover:bg-gray-800">
                  Explore Tools
                </a>
              </Button>
            </div>

            {/* Language Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <span className="text-sm text-gray-500">Other languages:</span>
              <Link href="/free-tools/fr" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">FR</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/de" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">DE</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/es" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">ES</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/pt" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">PT</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/it" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">IT</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/ja" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">JA</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/zh" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">ZH</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/ko" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">KO</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/tr" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">TR</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Writing Tools Section */}
      <section id="writing-tools" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              WRITING TOOLS
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              Writing Tools
            </h2>
            <p className="text-gray-600">
              Generate, rewrite, and improve your content with AI-powered writing assistants.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {writing.map((tool) => {
              const Icon = toolIcons[tool.slug] || FileText;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEO & Content Marketing Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              SEO & CONTENT MARKETING
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              SEO & Content Marketing Tools
            </h2>
            <p className="text-gray-600">
              Optimize your content for search engines and create compelling marketing copy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seo.map((tool) => {
              const Icon = toolIcons[tool.slug] || FileText;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Utility Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              UTILITY TOOLS
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              Utility Tools
            </h2>
            <p className="text-gray-600">
              Check grammar, detect AI content, generate placeholders, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {utility.map((tool) => {
              const Icon = toolIcons[tool.slug] || FileText;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business & Marketing Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              BUSINESS & MARKETING
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              Business & Marketing Tools
            </h2>
            <p className="text-gray-600">
              Generate brand names, slogans, product descriptions, and marketing copy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {business.map((tool) => {
              const Icon = toolIcons[tool.slug] || FileText;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Media Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              SOCIAL MEDIA
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              Social Media Tools
            </h2>
            <p className="text-gray-600">
              Create engaging bios, captions, hashtags, and usernames for all platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {socialMedia.map((tool) => {
              const Icon = toolIcons[tool.slug] || FileText;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Name Ideas Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              BUSINESS NAME IDEAS
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              Business Name Ideas
            </h2>
            <p className="text-gray-600">
              Generate creative and memorable business names for any industry. Available in 10 languages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {businessNameIdeas.map((item) => (
              <Link
                key={item.lang}
                href={item.url}
                className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <span className="text-lg font-bold text-purple-600">{item.flag}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors truncate">
                      {item.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                      {item.langCode}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Data Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              FREE SEO TOOLS
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              Free SEO Tools
            </h2>
            <p className="text-gray-600">
              Research keywords, analyze backlinks, check rankings, and audit websites with real-time SEO data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {getAllSeoTools().map((tool) => {
              const Icon = seoToolIcons[tool.slug] || Search;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI SEO & Analysis Tools Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center mb-10">
            <DashedLine className="text-muted-foreground" />
            <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
              AI SEO & ANALYSIS
            </span>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              AI SEO & Analysis Tools
            </h2>
            <p className="text-gray-600">
              Analyze AI your website&apos;s AI readiness and optimize for AI search engines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {standaloneTools.map((tool) => {
              const Icon = tool.icon;
              return (
                <Link
                  key={tool.slug}
                  href={`/free-tools/${tool.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {tool.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <HeroCta />
    </main>
  );
}
