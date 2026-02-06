'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllBusinessNameGenerators, BusinessNameGeneratorConfig } from '@/lib/ai-tools/business-name-generators-config';
import { getAllBusinessNameGeneratorsFr } from '@/lib/ai-tools/i18n/business-name-generators-config.fr';
import { getAllBusinessNameGeneratorsEs } from '@/lib/ai-tools/i18n/business-name-generators-config.es';
import { getAllBusinessNameGeneratorsDe } from '@/lib/ai-tools/i18n/business-name-generators-config.de';
import { getAllBusinessNameGeneratorsIt } from '@/lib/ai-tools/i18n/business-name-generators-config.it';
import { getAllBusinessNameGeneratorsPt } from '@/lib/ai-tools/i18n/business-name-generators-config.pt';
import { getAllBusinessNameGeneratorsJa } from '@/lib/ai-tools/i18n/business-name-generators-config.ja';
import { getAllBusinessNameGeneratorsKo } from '@/lib/ai-tools/i18n/business-name-generators-config.ko';
import { getAllBusinessNameGeneratorsZh } from '@/lib/ai-tools/i18n/business-name-generators-config.zh';
import { getAllBusinessNameGeneratorsTr } from '@/lib/ai-tools/i18n/business-name-generators-config.tr';
import { ArrowRight, Building2, Sparkles, Briefcase, Smartphone, Baby, Heart, ShoppingBag, Coffee, Cake, Flame, Candy, Shirt, Cookie, Palette, Scissors, IceCream, Megaphone, Cpu, PartyPopper, Store, Dumbbell, Flower2, UtensilsCrossed, Truck, Laugh, Sofa, Gamepad2, PenTool, Gem, Stethoscope, Home, Monitor, Music2, Droplets, Camera, Printer, Key, Footprints, Leaf, Sparkle, Bath, Trophy, Plane } from 'lucide-react';
import { DashedLine } from '@/components/dashed-line';

const generatorIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'aesthetic': Sparkles,
  'agency': Briefcase,
  'app': Smartphone,
  'babysitting': Baby,
  'beauty': Heart,
  'boutique': ShoppingBag,
  'cafe': Coffee,
  'cake': Cake,
  'candle': Flame,
  'candy': Candy,
  'clothing-store': Shirt,
  'cookie': Cookie,
  'cosmetic': Palette,
  'craft-store': Scissors,
  'crochet': Scissors,
  'dessert': IceCream,
  'digital-marketing': Megaphone,
  'electronics': Cpu,
  'event': PartyPopper,
  'fashion-store': Store,
  'fitness': Dumbbell,
  'flower-shop': Flower2,
  'food': UtensilsCrossed,
  'food-truck': Truck,
  'funny': Laugh,
  'furniture-store': Sofa,
  'game': Gamepad2,
  'graphic-design': PenTool,
  'hair': Scissors,
  'health': Stethoscope,
  'ice-cream': IceCream,
  'interior-design': Home,
  'it': Monitor,
  'jewelry-store': Gem,
  'lip-gloss': Sparkle,
  'marketing': Megaphone,
  'music': Music2,
  'perfume': Droplets,
  'photography': Camera,
  'print-shop': Printer,
  'real-estate': Key,
  'shoes': Footprints,
  'skin-care': Leaf,
  'slime': Sparkle,
  'soap': Bath,
  'sportswear': Trophy,
  't-shirt': Shirt,
  'tea': Coffee,
  'tech': Cpu,
  'travel': Plane,
};

interface RelatedBusinessNameGeneratorsProps {
  currentToolSlug: string;
  locale?: string;
}

// Localized UI strings
const localeStrings: Record<string, {
  moreGenerators: string;
  heading: string;
  allToolsLink: string;
  allToolsHref: string;
  toolHref: (slug: string) => string;
}> = {
  en: {
    moreGenerators: 'MORE NAME GENERATORS',
    heading: 'Other business name generators you may find helpful',
    allToolsLink: 'All AI tools',
    allToolsHref: '/free-tools',
    toolHref: (slug) => `/free-tools/business-name-generator/${slug}`,
  },
  fr: {
    moreGenerators: 'PLUS DE GÉNÉRATEURS DE NOMS',
    heading: 'Autres générateurs de noms d\'entreprise qui pourraient vous être utiles',
    allToolsLink: 'Tous les outils IA',
    allToolsHref: '/free-tools/fr',
    toolHref: (slug) => `/free-tools/fr/business-name-generator/${slug}`,
  },
  es: {
    moreGenerators: 'MÁS GENERADORES DE NOMBRES',
    heading: 'Otros generadores de nombres de empresas que pueden resultarte útiles',
    allToolsLink: 'Todas las herramientas IA',
    allToolsHref: '/free-tools/es',
    toolHref: (slug) => `/free-tools/es/business-name-generator/${slug}`,
  },
  de: {
    moreGenerators: 'MEHR NAMENSGENERATOREN',
    heading: 'Andere Geschäftsnamen-Generatoren, die Ihnen helfen könnten',
    allToolsLink: 'Alle KI-Tools',
    allToolsHref: '/free-tools/de',
    toolHref: (slug) => `/free-tools/de/business-name-generator/${slug}`,
  },
  it: {
    moreGenerators: 'ALTRI GENERATORI DI NOMI',
    heading: 'Altri generatori di nomi aziendali che potrebbero esserti utili',
    allToolsLink: 'Tutti gli strumenti IA',
    allToolsHref: '/free-tools/it',
    toolHref: (slug) => `/free-tools/it/business-name-generator/${slug}`,
  },
  pt: {
    moreGenerators: 'MAIS GERADORES DE NOMES',
    heading: 'Outros geradores de nomes comerciais que podem ser úteis',
    allToolsLink: 'Todas as ferramentas IA',
    allToolsHref: '/free-tools/pt',
    toolHref: (slug) => `/free-tools/pt/business-name-generator/${slug}`,
  },
  ja: {
    moreGenerators: 'その他のネームジェネレーター',
    heading: 'お役に立てるかもしれない他のビジネスネームジェネレーター',
    allToolsLink: 'すべてのAIツール',
    allToolsHref: '/free-tools/ja',
    toolHref: (slug) => `/free-tools/ja/business-name-generator/${slug}`,
  },
  ko: {
    moreGenerators: '더 많은 이름 생성기',
    heading: '도움이 될 수 있는 다른 비즈니스 이름 생성기',
    allToolsLink: '모든 AI 도구',
    allToolsHref: '/free-tools/ko',
    toolHref: (slug) => `/free-tools/ko/business-name-generator/${slug}`,
  },
  zh: {
    moreGenerators: '更多名称生成器',
    heading: '其他可能对您有帮助的企业名称生成器',
    allToolsLink: '所有AI工具',
    allToolsHref: '/free-tools/zh',
    toolHref: (slug) => `/free-tools/zh/business-name-generator/${slug}`,
  },
  tr: {
    moreGenerators: 'DAHA FAZLA İSİM ÜRETECİ',
    heading: 'Faydalı bulabileceğiniz diğer işletme adı üreteçleri',
    allToolsLink: 'Tüm AI Araçları',
    allToolsHref: '/free-tools/tr',
    toolHref: (slug) => `/free-tools/tr/business-name-generator/${slug}`,
  },
};

function RelatedToolsContent({ tools, locale = 'en' }: { tools: BusinessNameGeneratorConfig[]; locale?: string }) {
  const strings = localeStrings[locale] || localeStrings.en;
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            {strings.moreGenerators}
          </span>
        </div>

        {/* Centered heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
            {strings.heading}
          </h2>
          <Link 
            href={strings.allToolsHref} 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            {strings.allToolsLink}
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        {/* Two column grid for tools with cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool) => {
            const Icon = generatorIcons[tool.slug] || Building2;
            return (
              <Link
                key={tool.slug}
                href={strings.toolHref(tool.slug)}
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

function getGeneratorsByLocale(locale: string): BusinessNameGeneratorConfig[] {
  switch (locale) {
    case 'fr':
      return getAllBusinessNameGeneratorsFr();
    case 'es':
      return getAllBusinessNameGeneratorsEs();
    case 'de':
      return getAllBusinessNameGeneratorsDe();
    case 'it':
      return getAllBusinessNameGeneratorsIt();
    case 'pt':
      return getAllBusinessNameGeneratorsPt();
    case 'ja':
      return getAllBusinessNameGeneratorsJa();
    case 'ko':
      return getAllBusinessNameGeneratorsKo();
    case 'zh':
      return getAllBusinessNameGeneratorsZh();
    case 'tr':
      return getAllBusinessNameGeneratorsTr();
    default:
      return getAllBusinessNameGenerators();
  }
}

export function RelatedBusinessNameGenerators({ currentToolSlug, locale = 'en' }: RelatedBusinessNameGeneratorsProps) {
  // Chinese and Turkish show 12 tools, others show 10
  const toolCount = (locale === 'zh' || locale === 'tr') ? 12 : 10;
  
  const [relatedTools, setRelatedTools] = useState<BusinessNameGeneratorConfig[]>(() => {
    // Initialize with deterministic order for SSR
    const allTools = getGeneratorsByLocale(locale);
    return allTools.filter(tool => tool.slug !== currentToolSlug).slice(0, toolCount);
  });

  useEffect(() => {
    // Shuffle on client side only
    const allTools = getGeneratorsByLocale(locale);
    const otherTools = allTools.filter(tool => tool.slug !== currentToolSlug);
    const shuffled = [...otherTools].sort(() => Math.random() - 0.5);
    setRelatedTools(shuffled.slice(0, toolCount));
  }, [currentToolSlug, locale, toolCount]);

  return <RelatedToolsContent tools={relatedTools} locale={locale} />;
}
