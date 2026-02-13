import { Metadata } from 'next';
import Link from 'next/link';
import { getAllToolsTr } from '@/lib/ai-tools/i18n/tools-config.tr';
import { generateToolsListingHreflangAlternates } from '@/lib/ai-tools/hreflang-utils';
import { getAllBusinessNameGeneratorsTr } from '@/lib/ai-tools/i18n/business-name-generators-config.tr';
import { getAllSeoToolsTr } from '@/lib/seo-tools/i18n/seo-tools-config.tr';
import { SeoToolIconName } from '@/lib/seo-tools/seo-tools-config.types';
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
  BarChart3,
  Link2,
  TrendingUp,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ücretsiz AI Yazma Araçları',
  description: 'Ücretsiz AI yazma araçları koleksiyonumuza erişin: paragraf oluşturucu, yeniden ifade, özet, dilbilgisi denetleyici ve daha fazlası. Kayıt gerekmez.',
  alternates: {
    canonical: 'https://www.tryanalyze.ai/free-tools/tr',
    languages: generateToolsListingHreflangAlternates(),
  },
  openGraph: {
    title: 'Ücretsiz AI Yazma Araçları',
    description: 'Ücretsiz AI yazma araçları koleksiyonumuza erişin: paragraf oluşturucu, yeniden ifade, özet, dilbilgisi denetleyici ve daha fazlası. Kayıt gerekmez.',
    url: 'https://www.tryanalyze.ai/free-tools/tr',
    type: 'website',
    locale: 'tr_TR',
    images: [
      {
        url: 'https://www.tryanalyze.ai/og-free-ai-marketing-tools.png',
        width: 1200,
        height: 630,
        alt: 'Ücretsiz AI Yazma Araçları',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ücretsiz AI Yazma Araçları',
    description: 'Ücretsiz AI yazma araçları koleksiyonumuza erişin: paragraf oluşturucu, yeniden ifade, özet, dilbilgisi denetleyici ve daha fazlası. Kayıt gerekmez.',
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

const seoToolIconMap: Record<SeoToolIconName, React.ComponentType<{ className?: string }>> = {
  Search,
  BarChart3,
  Globe,
  Link2,
  TrendingUp,
  Youtube,
  ShoppingBag,
  Sparkles,
};

function SeoToolsSection() {
  const seoTools = getAllSeoToolsTr();
  if (seoTools.length === 0) return null;

  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            SEO ARAÇLARI
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
            SEO Araçları
          </h2>
          <p className="text-gray-600">
            Anahtar kelimeleri analiz edin, sıralamaları kontrol edin, geri bağlantıları izleyin ve veriye dayalı SEO araçlarıyla arama motoru performansınızı optimize edin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {seoTools.map((tool) => {
            const Icon = seoToolIconMap[tool.iconName] || Search;
            return (
              <Link
                key={tool.slug}
                href={`/free-tools/tr/${tool.slug}`}
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
  );
}

export default function FreeToolsTrPage() {
  const allTools = getAllToolsTr();
  
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
  const businessNameGenerators = getAllBusinessNameGeneratorsTr();

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
              <span className="text-sm font-medium text-gray-700">Ücretsiz AI Araçları</span>
              <span className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ücretsiz AI Yazma Araçları
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Analyze AI'ın AI yazma araçları, tıklama, kayıt ve satış sağlayan yüksek kaliteli içerik oluşturmanıza yardımcı olur. Başlık oluşturma, rapor yazma veya başka herhangi bir şey için AI araçlarımız yanınızda.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <a href="#writing-tools" className="bg-gray-900 text-white hover:bg-gray-800">
                  Araçları Keşfet
                </a>
              </Button>
            </div>

            {/* Language Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <span className="text-sm text-gray-500">Diğer diller:</span>
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
              <Link href="/free-tools/it" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">IT</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/ja" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">JA</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/zh" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">ZH</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/ko" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">KO</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Tools Section */}
      <SeoToolsSection />

      {/* Writing Tools Section */}
      {writing.length > 0 && (
        <section id="writing-tools" className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                YAZMA ARAÇLARI
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Yazma Araçları
              </h2>
              <p className="text-gray-600">
                AI asistanlarla içerik oluşturun, yeniden yazın ve geliştirin.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {writing.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/tr/${tool.slug}`}
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
                SEO & İÇERİK PAZARLAMA
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                SEO & İçerik Pazarlama Araçları
              </h2>
              <p className="text-gray-600">
                İçeriğinizi arama motorları için optimize edin ve etkili pazarlama metinleri oluşturun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {seo.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/tr/${tool.slug}`}
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
                YARDIMCI ARAÇLAR
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Yardımcı Araçlar
              </h2>
              <p className="text-gray-600">
                Dilbilgisi kontrolü, AI içerik tespiti, metin insanlaştırma ve daha fazlası.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {utility.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/tr/${tool.slug}`}
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
                İŞ & PAZARLAMA
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                İş & Pazarlama Araçları
              </h2>
              <p className="text-gray-600">
                Marka adları, sloganlar, ürün açıklamaları ve pazarlama metinleri oluşturun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {business.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/tr/${tool.slug}`}
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
                SOSYAL MEDYA
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Sosyal Medya Araçları
              </h2>
              <p className="text-gray-600">
                Etkileyici profiller, başlıklar, hashtagler ve gönderiler oluşturun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {socialMedia.map((tool) => {
                const Icon = toolIcons[tool.slug] || MessageSquare;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/tr/${tool.slug}`}
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
                YOUTUBE ARAÇLARI
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                YouTube Araçları
              </h2>
              <p className="text-gray-600">
                YouTube videolarınız için başlıklar, açıklamalar ve senaryolar oluşturun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {youtube.map((tool) => {
                const Icon = toolIcons[tool.slug] || Youtube;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/tr/${tool.slug}`}
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
                İŞLETME ADI FİKİRLERİ
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                İşletme Adı Fikir Oluşturucu
              </h2>
              <p className="text-gray-600">
                Her sektör için yaratıcı ve akılda kalıcı işletme adları oluşturun.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {businessNameGenerators.map((generator) => (
                <Link
                  key={generator.slug}
                  href={`/free-tools/tr/business-name-generator/${generator.slug}`}
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
