import { Metadata } from 'next';
import Link from 'next/link';
import { getAllToolsFr } from '@/lib/ai-tools/i18n/tools-config.fr';
import { getAllBusinessNameGeneratorsFr } from '@/lib/ai-tools/i18n/business-name-generators-config.fr';
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
  Mail,
  Linkedin,
  Twitter
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Outils IA Gratuits pour la Rédaction | Analyze',
  description: 'Accédez à notre collection d\'outils IA gratuits pour la rédaction : générateurs de paragraphes, paraphraseurs, résumeurs, correcteurs grammaticaux et plus encore. Aucune inscription requise.',
  alternates: {
    canonical: 'https://www.tryanalyze.ai/free-tools/fr',
    languages: {
      'en': 'https://www.tryanalyze.ai/free-tools',
      'fr': 'https://www.tryanalyze.ai/free-tools/fr',
    },
  },
  openGraph: {
    title: 'Outils IA Gratuits pour la Rédaction | Analyze',
    description: 'Accédez à notre collection d\'outils IA gratuits pour la rédaction : générateurs de paragraphes, paraphraseurs, résumeurs, correcteurs grammaticaux et plus encore. Aucune inscription requise.',
    url: 'https://www.tryanalyze.ai/free-tools/fr',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: 'https://www.tryanalyze.ai/og-free-ai-marketing-tools.png',
        width: 1200,
        height: 630,
        alt: 'Outils IA Gratuits pour la Rédaction',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outils IA Gratuits pour la Rédaction | Analyze',
    description: 'Accédez à notre collection d\'outils IA gratuits pour la rédaction : générateurs de paragraphes, paraphraseurs, résumeurs, correcteurs grammaticaux et plus encore. Aucune inscription requise.',
    images: ['https://www.tryanalyze.ai/og-free-ai-marketing-tools.png'],
  },
};

// Map French slugs to icons (based on actual slugs in tools-config.fr.ts)
const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  // Outils de Rédaction
  'generateur-de-paragraphe': FileText,
  'reformulateur-de-paragraphe': RefreshCw,
  'reecriveur-de-phrase': PenTool,
  'generateur-de-conclusion': FileText,
  'generateur-de-plan': ListChecks,
  'generateur-de-titres-de-blog': Sparkles,
  'outil-reformulation': Repeat,
  // Outils SEO & Marketing de Contenu
  'generateur-de-meta-description': Search,
  'outil-de-resume': ListChecks,
  'outil-de-paraphrase': Type,
  'generateur-texte-alternatif-image': Image,
  'generateur-idees-articles-blog': Lightbulb,
  'generateur-titres-seo': Search,
  'generateur-idees-contenu': Lightbulb,
  'generateur-script-video': Video,
  // Outils Utilitaires
  'verificateur-de-grammaire': CheckCircle,
  'detecteur-de-contenu-ia': Search,
  'humanisateur-de-texte-ia': Sparkles,
  'generateur-acronymes': Hash,
  'generateur-lorem-ipsum': FileCode,
  'traducteur-emoji': Smile,
  'verificateur-plagiat': Shield,
  // Outils Business & Marketing
  'generateur-nom-marque': Building2,
  'generateur-nom-entreprise': Briefcase,
  'generateur-nom-produit': Package,
  'generateur-slogan': Megaphone,
  'generateur-texte-google-ads': MousePointerClick,
  'generateur-description-produit': ShoppingBag,
  'generateur-page-destination': Layout,
  'generateur-contenu-site-web': Globe,
  'generateur-lettre-demission': FileSignature,
  // Outils Réseaux Sociaux
  'generateur-accroche': Zap,
  'generateur-bio-reseaux-sociaux': Users,
  'generateur-bio-instagram': Instagram,
  'generateur-legende-reseaux-sociaux': MessageSquare,
  'generateur-legende-instagram': Instagram,
  'generateur-hashtag-reseaux-sociaux': Hash,
  'generateur-hashtag-instagram': Instagram,
  'generateur-nom-utilisateur-reseaux-sociaux': AtSign,
  'generateur-nom-instagram': Instagram,
  'generateur-hashtag-tiktok': Music2,
  'generateur-nom-utilisateur-tiktok': Music2,
  // Outils YouTube
  'generateur-description-chaine-youtube': Youtube,
  'generateur-description-video-youtube': Youtube,
  'generateur-titre-video-youtube': Youtube,
};

// Categorize French tools by slug patterns (based on actual slugs in tools-config.fr.ts)
const writingToolSlugs = [
  'generateur-de-paragraphe', 
  'reformulateur-de-paragraphe',
  'reecriveur-de-phrase',
  'generateur-de-conclusion', 
  'generateur-de-plan', 
  'generateur-de-titres-de-blog',
  'outil-reformulation'
];

const seoToolSlugs = [
  'generateur-de-meta-description', 
  'outil-de-resume', 
  'outil-de-paraphrase',
  'generateur-texte-alternatif-image',
  'generateur-idees-articles-blog',
  'generateur-titres-seo',
  'generateur-idees-contenu',
  'generateur-script-video'
];

const utilityToolSlugs = [
  'verificateur-de-grammaire', 
  'detecteur-de-contenu-ia', 
  'humanisateur-de-texte-ia',
  'generateur-acronymes',
  'generateur-lorem-ipsum',
  'traducteur-emoji',
  'verificateur-plagiat'
];

const businessToolSlugs = [
  'generateur-nom-marque',
  'generateur-nom-entreprise',
  'generateur-nom-produit',
  'generateur-slogan',
  'generateur-texte-google-ads',
  'generateur-description-produit',
  'generateur-page-destination',
  'generateur-contenu-site-web',
  'generateur-lettre-demission'
];

const socialMediaToolSlugs = [
  'generateur-accroche',
  'generateur-bio-reseaux-sociaux',
  'generateur-bio-instagram',
  'generateur-legende-reseaux-sociaux',
  'generateur-legende-instagram',
  'generateur-hashtag-reseaux-sociaux',
  'generateur-hashtag-instagram',
  'generateur-nom-utilisateur-reseaux-sociaux',
  'generateur-nom-instagram',
  'generateur-hashtag-tiktok',
  'generateur-nom-utilisateur-tiktok'
];

const emailToolSlugs: string[] = [];

const youtubeToolSlugs = [
  'generateur-description-chaine-youtube',
  'generateur-description-video-youtube',
  'generateur-titre-video-youtube'
];

const otherToolSlugs = [
  'generateur-de-etude-cas',
  'generateur-de-temoignage',
  'generateur-de-faq'
];

export default function FreeToolsFrPage() {
  const allTools = getAllToolsFr();
  
  const getToolsByCategory = (slugs: string[]) => {
    return allTools.filter(tool => slugs.includes(tool.slug));
  };

  const writing = getToolsByCategory(writingToolSlugs);
  const seo = getToolsByCategory(seoToolSlugs);
  const utility = getToolsByCategory(utilityToolSlugs);
  const business = getToolsByCategory(businessToolSlugs);
  const socialMedia = getToolsByCategory(socialMediaToolSlugs);
  const email = getToolsByCategory(emailToolSlugs);
  const youtube = getToolsByCategory(youtubeToolSlugs);
  const other = getToolsByCategory(otherToolSlugs);

  // Get 5 business name generators for this language
  const businessNameGenerators = getAllBusinessNameGeneratorsFr().slice(0, 5);

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
              <span className="text-sm font-medium text-gray-700">Outils IA Gratuits</span>
              <span className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                <Sparkles className="w-3 h-3 text-white" />
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Outils IA Gratuits pour la Rédaction
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Les outils de rédaction IA d&apos;Analyze vous aident à produire du contenu de haute qualité qui génère des clics, des inscriptions et des ventes. Que vous cherchiez à générer un titre, rédiger un rapport ou autre chose, nos outils IA sont là pour vous.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button asChild>
                <a href="#outils-redaction" className="bg-gray-900 text-white hover:bg-gray-800">
                  Explorer les Outils
                </a>
              </Button>
            </div>

            {/* Language Navigation */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              <span className="text-sm text-gray-500">Autres langues:</span>
              <Link href="/free-tools" className="text-sm text-purple-600 hover:text-purple-800 hover:underline">EN</Link>
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
      {writing.length > 0 && (
        <section id="outils-redaction" className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                OUTILS DE RÉDACTION
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Outils de Rédaction
              </h2>
              <p className="text-gray-600">
                Générez, reformulez et améliorez votre contenu avec des assistants de rédaction alimentés par l&apos;IA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {writing.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/fr/${tool.slug}`}
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
                SEO & MARKETING DE CONTENU
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Outils SEO & Marketing de Contenu
              </h2>
              <p className="text-gray-600">
                Optimisez votre contenu pour les moteurs de recherche et créez des textes marketing percutants.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {seo.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/fr/${tool.slug}`}
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
                OUTILS UTILITAIRES
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Outils Utilitaires
              </h2>
              <p className="text-gray-600">
                Vérifiez la grammaire, détectez le contenu IA, humanisez vos textes et plus encore.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {utility.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/fr/${tool.slug}`}
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
                Outils Business & Marketing
              </h2>
              <p className="text-gray-600">
                Générez des noms de marque, slogans, descriptions de produits et textes marketing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {business.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/fr/${tool.slug}`}
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

      {/* Email Tools Section */}
      {email.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                OUTILS EMAIL
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Outils Email
              </h2>
              <p className="text-gray-600">
                Créez des objets d&apos;email percutants, des emails de prospection et des réponses professionnelles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {email.map((tool) => {
                const Icon = toolIcons[tool.slug] || Mail;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/fr/${tool.slug}`}
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
                RÉSEAUX SOCIAUX
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Outils Réseaux Sociaux
              </h2>
              <p className="text-gray-600">
                Créez des bios engageantes, des légendes, des hashtags et des publications pour toutes les plateformes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {socialMedia.map((tool) => {
                const Icon = toolIcons[tool.slug] || MessageSquare;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/fr/${tool.slug}`}
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
                OUTILS YOUTUBE
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Outils YouTube
              </h2>
              <p className="text-gray-600">
                Générez des titres, descriptions et scripts pour vos vidéos YouTube.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {youtube.map((tool) => {
                const Icon = toolIcons[tool.slug] || Youtube;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/fr/${tool.slug}`}
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

      {/* Other Tools Section */}
      {other.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-center mb-10">
              <DashedLine className="text-muted-foreground" />
              <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
                AUTRES OUTILS
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Autres Outils
              </h2>
              <p className="text-gray-600">
                Communiqués de presse, études de cas, témoignages et FAQ générés par l&apos;IA.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {other.map((tool) => {
                const Icon = toolIcons[tool.slug] || FileText;
                return (
                  <Link
                    key={tool.slug}
                    href={`/free-tools/fr/${tool.slug}`}
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
                IDÉES DE NOMS D&apos;ENTREPRISE
              </span>
            </div>

            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                Générateur d&apos;Idées de Noms d&apos;Entreprise
              </h2>
              <p className="text-gray-600">
                Générez des noms d&apos;entreprise créatifs et mémorables pour tous les secteurs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {businessNameGenerators.map((generator) => (
                <Link
                  key={generator.slug}
                  href={`/free-tools/fr/business-name-generator/${generator.slug}`}
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
