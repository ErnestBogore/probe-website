import { Metadata } from 'next';
import Link from 'next/link';
import { getAllToolsIt } from '@/lib/ai-tools/i18n/tools-config.it';
import { getAllBusinessNameGeneratorsIt } from '@/lib/ai-tools/i18n/business-name-generators-config.it';
import { DashedLine } from '@/components/dashed-line';
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
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Strumenti di Scrittura IA Gratuiti | Analyze',
  description: 'Accedi alla nostra collezione di strumenti di scrittura IA gratuiti: generatori di paragrafi, parafrasi, riassunti, correttori grammaticali e altro. Nessuna registrazione richiesta.',
  alternates: {
    canonical: 'https://www.tryanalyze.ai/free-tools/it',
    languages: {
      'en': 'https://www.tryanalyze.ai/free-tools',
      'it': 'https://www.tryanalyze.ai/free-tools/it',
    },
  },
  openGraph: {
    title: 'Strumenti di Scrittura IA Gratuiti | Analyze',
    description: 'Accedi alla nostra collezione di strumenti di scrittura IA gratuiti: generatori di paragrafi, parafrasi, riassunti, correttori grammaticali e altro. Nessuna registrazione richiesta.',
    url: 'https://www.tryanalyze.ai/free-tools/it',
    type: 'website',
    locale: 'it_IT',
    images: [
      {
        url: 'https://www.tryanalyze.ai/og-free-ai-marketing-tools.png',
        width: 1200,
        height: 630,
        alt: 'Strumenti di Scrittura IA Gratuiti',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strumenti di Scrittura IA Gratuiti | Analyze',
    description: 'Accedi alla nostra collezione di strumenti di scrittura IA gratuiti: generatori di paragrafi, parafrasi, riassunti, correttori grammaticali e altro. Nessuna registrazione richiesta.',
    images: ['https://www.tryanalyze.ai/og-free-ai-marketing-tools.png'],
  },
};

// Map English slugs to icons
const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  // Writing Tools
  'paragraph-generator': FileText,
  'paragraph-rewriter': RefreshCw,
  'sentence-rewriter': PenTool,
  'conclusion-generator': FileText,
  'outline-generator': ListChecks,
  'blog-title-generator': Sparkles,
  'rewording-tool': Repeat,
  'paraphrasing-tool': Type,
  // SEO & Content Marketing Tools
  'meta-description-generator': Search,
  'summarizer': ListChecks,
  'image-alt-text-generator': Image,
  'blog-post-ideas-generator': Lightbulb,
  'seo-title-generator': Search,
  'content-idea-generator': Lightbulb,
  'video-script-generator': Video,
  // Utility Tools
  'grammar-checker': CheckCircle,
  'ai-content-detector': Search,
  'ai-text-humanizer': Sparkles,
  'acronym-generator': Hash,
  'lorem-ipsum-generator': FileCode,
  'emoji-translator': Smile,
  'plagiarism-checker': Shield,
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
  'hook-generator': Zap,
  // Social Media Tools
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
  // YouTube Tools
  'youtube-channel-description-generator': Youtube,
  'youtube-video-description-generator': Youtube,
  'youtube-name-generator': Youtube,
};

// Categorize tools by slug patterns
const writingToolSlugs = [
  'paragraph-generator', 
  'paragraph-rewriter',
  'sentence-rewriter',
  'conclusion-generator', 
  'outline-generator', 
  'blog-title-generator',
  'rewording-tool',
  'paraphrasing-tool'
];

const seoToolSlugs = [
  'meta-description-generator', 
  'summarizer', 
  'image-alt-text-generator',
  'blog-post-ideas-generator',
  'seo-title-generator',
  'content-idea-generator',
  'video-script-generator'
];

const utilityToolSlugs = [
  'grammar-checker', 
  'ai-content-detector', 
  'ai-text-humanizer',
  'acronym-generator',
  'lorem-ipsum-generator',
  'emoji-translator',
  'plagiarism-checker'
];

const businessToolSlugs = [
  'brand-name-generator',
  'business-name-generator',
  'product-name-generator',
  'slogan-generator',
  'google-ads-copy-generator',
  'product-description-generator',
  'landing-page-generator',
  'website-copy-generator',
  'resignation-letter-generator',
  'hook-generator'
];

const socialMediaToolSlugs = [
  'social-media-bio-generator',
  'instagram-bio-generator',
  'social-media-caption-generator',
  'instagram-caption-generator',
  'social-media-hashtag-generator',
  'instagram-hashtag-generator',
  'social-media-username-generator',
  'instagram-name-generator',
  'tiktok-hashtag-generator',
  'tiktok-username-generator'
];

const youtubeToolSlugs = [
  'youtube-channel-description-generator',
  'youtube-video-description-generator',
  'youtube-name-generator'
];

export default function FreeToolsItPage() {
  const allTools = getAllToolsIt();
  
  const getToolsByCategory = (slugs: string[]) => {
    return allTools.filter(tool => slugs.includes(tool.slug));
  };

  const writing = getToolsByCategory(writingToolSlugs);
  const seo = getToolsByCategory(seoToolSlugs);
  const utility = getToolsByCategory(utilityToolSlugs);
  const business = getToolsByCategory(businessToolSlugs);
  const socialMedia = getToolsByCategory(socialMediaToolSlugs);
  const youtube = getToolsByCategory(youtubeToolSlugs);

  // Get 5 business name generators for this language
  const businessNameGenerators = getAllBusinessNameGeneratorsIt().slice(0, 5);

  return (
    <main className="bg-gray-100">
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
              <span className="text-sm font-medium text-gray-700">Strumenti IA Gratuiti</span>
              <span className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Strumenti di Scrittura IA Gratuiti
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Gli strumenti di scrittura IA di Analyze ti aiutano a creare contenuti di alta qualità che generano clic, iscrizioni e vendite. Che tu debba generare un titolo, scrivere un report o qualsiasi altra cosa, i nostri strumenti IA sono qui per te.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <a href="#strumenti-scrittura" className="bg-gray-900 text-white hover:bg-gray-800">
                  Esplora Strumenti
                </a>
              </Button>
            </div>

            {/* Language Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <span className="text-sm text-gray-500">Altre lingue:</span>
              <Link href="/free-tools" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">EN</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/fr" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">FR</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/de" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">DE</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/es" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">ES</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/pt" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">PT</Link>
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
      {writing.length > 0 && (
        <section id="strumenti-scrittura" className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                STRUMENTI DI SCRITTURA
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Strumenti di Scrittura
              </h2>
              <p className="text-gray-600">
                Genera, riformula e migliora i tuoi contenuti con assistenti di scrittura basati su IA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {writing.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/it/${tool.slug}`}
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
      )}

      {/* SEO & Content Marketing Tools Section */}
      {seo.length > 0 && (
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
                Strumenti SEO & Content Marketing
              </h2>
              <p className="text-gray-600">
                Ottimizza i tuoi contenuti per i motori di ricerca e crea testi di marketing efficaci.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {seo.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/it/${tool.slug}`}
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
      )}

      {/* Utility Tools Section */}
      {utility.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                STRUMENTI UTILITÀ
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Strumenti di Utilità
              </h2>
              <p className="text-gray-600">
                Controlla la grammatica, rileva contenuti IA, umanizza i tuoi testi e altro ancora.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {utility.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/it/${tool.slug}`}
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
      )}

      {/* Business & Marketing Tools Section */}
      {business.length > 0 && (
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
                Strumenti Business & Marketing
              </h2>
              <p className="text-gray-600">
                Genera nomi di brand, slogan, descrizioni prodotto e testi di marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {business.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/it/${tool.slug}`}
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
      )}

      {/* Social Media Tools Section */}
      {socialMedia.length > 0 && (
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
                Strumenti Social Media
              </h2>
              <p className="text-gray-600">
                Crea bio accattivanti, didascalie, hashtag e post per tutte le piattaforme.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {socialMedia.map((tool) => {
                const Icon = toolIcons[tool.slug] || MessageSquare;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/it/${tool.slug}`}
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
      )}

      {/* YouTube Tools Section */}
      {youtube.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                STRUMENTI YOUTUBE
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Strumenti YouTube
              </h2>
              <p className="text-gray-600">
                Genera titoli, descrizioni e script per i tuoi video YouTube.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {youtube.map((tool) => {
                const Icon = toolIcons[tool.slug] || Youtube;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/it/${tool.slug}`}
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
      )}

      {/* Business Name Ideas Section */}
      {businessNameGenerators.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                IDEE PER NOMI AZIENDALI
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Generatore di Idee per Nomi Aziendali
              </h2>
              <p className="text-gray-600">
                Genera nomi aziendali creativi e memorabili per qualsiasi settore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {businessNameGenerators.map((generator) => (
                <Link
                  key={generator.slug}
                  href={`/free-tools/it/business-name-generator/${generator.slug}`}
                  className="group flex gap-4 p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
                      {generator.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {generator.metaDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <HeroCta />
    </main>
  );
}
