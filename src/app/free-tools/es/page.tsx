import { Metadata } from 'next';
import Link from 'next/link';
import { getAllToolsEs } from '@/lib/ai-tools/i18n/tools-config.es';
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
  title: 'Herramientas de Escritura con IA Gratis | Analyze',
  description: 'Accede a nuestra colección de herramientas de escritura con IA gratuitas: generadores de párrafos, parafraseadores, resumidores, correctores gramaticales y más. Sin registro.',
  alternates: {
    canonical: 'https://www.tryanalyze.ai/free-tools/es',
    languages: {
      'en': 'https://www.tryanalyze.ai/free-tools',
      'es': 'https://www.tryanalyze.ai/free-tools/es',
    },
  },
  openGraph: {
    title: 'Herramientas de Escritura con IA Gratis | Analyze',
    description: 'Accede a nuestra colección de herramientas de escritura con IA gratuitas: generadores de párrafos, parafraseadores, resumidores, correctores gramaticales y más. Sin registro.',
    url: 'https://www.tryanalyze.ai/free-tools/es',
    type: 'website',
    locale: 'es_ES',
    images: [
      {
        url: 'https://www.tryanalyze.ai/og-free-ai-marketing-tools.png',
        width: 1200,
        height: 630,
        alt: 'Herramientas de Escritura con IA Gratis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Herramientas de Escritura con IA Gratis | Analyze',
    description: 'Accede a nuestra colección de herramientas de escritura con IA gratuitas: generadores de párrafos, parafraseadores, resumidores, correctores gramaticales y más. Sin registro.',
    images: ['https://www.tryanalyze.ai/og-free-ai-marketing-tools.png'],
  },
};

// Map Spanish slugs to icons
const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  // Writing Tools
  'generador-de-parrafos': FileText,
  'reescritor-de-parrafos': RefreshCw,
  'reescritor-de-oraciones': PenTool,
  'generador-de-conclusiones': FileText,
  'generador-de-introducciones': FileText,
  'generador-de-esquemas': ListChecks,
  'generador-de-titulos-para-blog': Sparkles,
  'parafraseador-de-textos': Repeat,
  'herramienta-de-parafraseo': Type,
  'extensor-de-texto': FileText,
  // SEO & Content Marketing Tools
  'generador-de-metadescripciones': Search,
  'resumidor': ListChecks,
  'generador-de-textos-alternativos': Image,
  'generador-de-ideas-para-blog': Lightbulb,
  'generador-de-titulos-seo': Search,
  'generador-de-ideas-de-contenido': Lightbulb,
  'creador-de-guiones-de-videos': Video,
  // Utility Tools
  'corrector-gramatical': CheckCircle,
  'detector-de-ia': Search,
  'humanizador-de-texto': Sparkles,
  'generador-de-acronimos': Hash,
  'generador-lorem-ipsum': FileCode,
  'traductor-de-emojis': Smile,
  'detector-de-plagio': Shield,
  // Business & Marketing Tools
  'generador-de-nombres-de-marca': Building2,
  'generador-de-nombres-comerciales': Briefcase,
  'generador-de-nombres-de-productos': Package,
  'creador-de-eslogan': Megaphone,
  'generador-de-texto-para-anuncios': MousePointerClick,
  'generador-de-descripciones-de-productos': ShoppingBag,
  'generador-de-paginas-de-aterrizaje': Layout,
  'generador-de-textos-para-sitios-web': Globe,
  'generador-de-cartas-de-renuncia': FileSignature,
  'generador-de-ganchos': Zap,
  // Social Media Tools
  'generador-de-biografias-para-redes': Users,
  'generador-de-biografias-para-instagram': Instagram,
  'generador-de-frases-para-redes-sociales': MessageSquare,
  'generador-de-frases-para-instagram': Instagram,
  'generador-de-hashtags-para-redes': Hash,
  'generador-de-hashtags-para-instagram': Instagram,
  'generador-de-nombres-de-usuario-para-redes': AtSign,
  'generador-de-nombres-para-instagram': Instagram,
  'generador-de-hashtags-para-tiktok': Music2,
  'generador-de-nombres-para-tiktok': Music2,
  // YouTube Tools
  'generador-de-descripciones-para-canales-de-youtube': Youtube,
  'generador-de-descripciones-para-videos-de-youtube': Youtube,
  'generador-de-nombres-para-youtube': Youtube,
};

// Categorize tools by slug patterns
const writingToolSlugs = [
  'generador-de-parrafos', 
  'reescritor-de-parrafos',
  'reescritor-de-oraciones',
  'generador-de-conclusiones',
  'generador-de-introducciones',
  'generador-de-esquemas', 
  'generador-de-titulos-para-blog',
  'parafraseador-de-textos',
  'herramienta-de-parafraseo',
  'extensor-de-texto'
];

const seoToolSlugs = [
  'generador-de-metadescripciones', 
  'resumidor', 
  'generador-de-textos-alternativos',
  'generador-de-ideas-para-blog',
  'generador-de-titulos-seo',
  'generador-de-ideas-de-contenido',
  'creador-de-guiones-de-videos'
];

const utilityToolSlugs = [
  'corrector-gramatical', 
  'detector-de-ia', 
  'humanizador-de-texto',
  'generador-de-acronimos',
  'generador-lorem-ipsum',
  'traductor-de-emojis',
  'detector-de-plagio'
];

const businessToolSlugs = [
  'generador-de-nombres-de-marca',
  'generador-de-nombres-comerciales',
  'generador-de-nombres-de-productos',
  'creador-de-eslogan',
  'generador-de-texto-para-anuncios',
  'generador-de-descripciones-de-productos',
  'generador-de-paginas-de-aterrizaje',
  'generador-de-textos-para-sitios-web',
  'generador-de-cartas-de-renuncia',
  'generador-de-ganchos'
];

const socialMediaToolSlugs = [
  'generador-de-biografias-para-redes',
  'generador-de-biografias-para-instagram',
  'generador-de-frases-para-redes-sociales',
  'generador-de-frases-para-instagram',
  'generador-de-hashtags-para-redes',
  'generador-de-hashtags-para-instagram',
  'generador-de-nombres-de-usuario-para-redes',
  'generador-de-nombres-para-instagram',
  'generador-de-hashtags-para-tiktok',
  'generador-de-nombres-para-tiktok'
];

const youtubeToolSlugs = [
  'generador-de-descripciones-para-canales-de-youtube',
  'generador-de-descripciones-para-videos-de-youtube',
  'generador-de-nombres-para-youtube'
];

export default function FreeToolsEsPage() {
  const allTools = getAllToolsEs();
  
  const getToolsByCategory = (slugs: string[]) => {
    return allTools.filter(tool => slugs.includes(tool.slug));
  };

  const writing = getToolsByCategory(writingToolSlugs);
  const seo = getToolsByCategory(seoToolSlugs);
  const utility = getToolsByCategory(utilityToolSlugs);
  const business = getToolsByCategory(businessToolSlugs);
  const socialMedia = getToolsByCategory(socialMediaToolSlugs);
  const youtube = getToolsByCategory(youtubeToolSlugs);

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
              <span className="text-sm font-medium text-gray-700">Herramientas IA Gratis</span>
              <span className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Herramientas de Escritura con IA Gratis
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Las herramientas de escritura con IA de Analyze te ayudan a crear contenido de alta calidad que genera clics, registros y ventas. Ya sea que necesites generar un título, escribir un informe o cualquier otra cosa, nuestras herramientas de IA están aquí para ayudarte.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <a href="#herramientas-escritura" className="bg-gray-900 text-white hover:bg-gray-800">
                  Explorar Herramientas
                </a>
              </Button>
            </div>

            {/* Language Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <span className="text-sm text-gray-500">Otros idiomas:</span>
              <Link href="/free-tools" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">EN</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/fr" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">FR</Link>
              <span className="text-gray-300">|</span>
              <Link href="/free-tools/de" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">DE</Link>
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
      {writing.length > 0 && (
        <section id="herramientas-escritura" className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                HERRAMIENTAS DE ESCRITURA
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Herramientas de Escritura
              </h2>
              <p className="text-gray-600">
                Genera, reescribe y mejora tu contenido con asistentes de escritura impulsados por IA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {writing.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/es/${tool.slug}`}
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
                SEO Y MARKETING DE CONTENIDOS
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Herramientas de SEO y Marketing de Contenidos
              </h2>
              <p className="text-gray-600">
                Optimiza tu contenido para motores de búsqueda y crea textos de marketing impactantes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {seo.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/es/${tool.slug}`}
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
                HERRAMIENTAS UTILITARIAS
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Herramientas Utilitarias
              </h2>
              <p className="text-gray-600">
                Verifica gramática, detecta contenido de IA, humaniza tus textos y más.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {utility.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/es/${tool.slug}`}
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
                NEGOCIOS Y MARKETING
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Herramientas de Negocios y Marketing
              </h2>
              <p className="text-gray-600">
                Genera nombres de marca, eslóganes, descripciones de productos y textos de marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {business.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/es/${tool.slug}`}
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
                REDES SOCIALES
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Herramientas para Redes Sociales
              </h2>
              <p className="text-gray-600">
                Crea biografías atractivas, subtítulos, hashtags y publicaciones para todas las plataformas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {socialMedia.map((tool) => {
                const Icon = toolIcons[tool.slug] || MessageSquare;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/es/${tool.slug}`}
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
                HERRAMIENTAS YOUTUBE
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Herramientas para YouTube
              </h2>
              <p className="text-gray-600">
                Genera títulos, descripciones y guiones para tus videos de YouTube.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {youtube.map((tool) => {
                const Icon = toolIcons[tool.slug] || Youtube;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/es/${tool.slug}`}
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

      {/* CTA Section */}
      <HeroCta />
    </main>
  );
}
