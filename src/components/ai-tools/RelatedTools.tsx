'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getAllTools, ToolConfig } from '@/lib/ai-tools/tools-config';
import { getAllToolsFr } from '@/lib/ai-tools/i18n/tools-config.fr';
import { getAllToolsDe } from '@/lib/ai-tools/i18n/tools-config.de';
import { getAllToolsEs } from '@/lib/ai-tools/i18n/tools-config.es';
import { getAllToolsPt } from '@/lib/ai-tools/i18n/tools-config.pt';
import { getAllToolsIt } from '@/lib/ai-tools/i18n/tools-config.it';
import { getAllToolsJa } from '@/lib/ai-tools/i18n/tools-config.ja';
import { getAllToolsZh } from '@/lib/ai-tools/i18n/tools-config.zh';
import { getAllToolsKo } from '@/lib/ai-tools/i18n/tools-config.ko';
import { getAllToolsTr } from '@/lib/ai-tools/i18n/tools-config.tr';
import { ArrowRight, FileText, RefreshCw, Search, Type, ListChecks, Sparkles, PenTool, CheckCircle, Hash, FileCode, Smile, Shield, Lightbulb, Video, ImageIcon } from 'lucide-react';
import { DashedLine } from '@/components/dashed-line';

const toolIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'paragraph-generator': FileText,
  'paragraph-rewriter': RefreshCw,
  'meta-description-generator': Search,
  'paraphrasing-tool': Type,
  'summarizer': ListChecks,
  'blog-title-generator': Sparkles,
  'outline-generator': ListChecks,
  'ai-content-detector': Search,
  'ai-text-humanizer': Sparkles,
  'conclusion-generator': FileText,
  'grammar-checker': CheckCircle,
  'sentence-rewriter': PenTool,
  'acronym-generator': Hash,
  'lorem-ipsum-generator': FileCode,
  'emoji-translator': Smile,
  'plagiarism-checker': Shield,
  'blog-post-ideas-generator': Lightbulb,
  'seo-title-generator': Search,
  'image-alt-text-generator': ImageIcon,
  'content-idea-generator': Lightbulb,
  'video-script-generator': Video,
};

interface RelatedToolsProps {
  currentToolSlug: string;
  locale?: string;
}

const translations: Record<string, { sectionLabel: string; heading: string; allToolsLink: string }> = {
  en: {
    sectionLabel: 'MORE FREE TOOLS',
    heading: 'Other writing tools you may find helpful',
    allToolsLink: 'All AI tools',
  },
  fr: {
    sectionLabel: 'PLUS D\'OUTILS GRATUITS',
    heading: 'Autres outils de rédaction qui pourraient vous être utiles',
    allToolsLink: 'Tous les outils IA',
  },
  de: {
    sectionLabel: 'WEITERE KOSTENLOSE WERKZEUGE',
    heading: 'Andere Schreibwerkzeuge, die Ihnen helfen könnten',
    allToolsLink: 'Alle KI-Werkzeuge',
  },
  es: {
    sectionLabel: 'MÁS HERRAMIENTAS GRATIS',
    heading: 'Otras herramientas de escritura que podrían ayudarte',
    allToolsLink: 'Todas las herramientas IA',
  },
  pt: {
    sectionLabel: 'MAIS FERRAMENTAS GRÁTIS',
    heading: 'Outras ferramentas de escrita que podem ajudar',
    allToolsLink: 'Todas as ferramentas IA',
  },
  it: {
    sectionLabel: 'ALTRI STRUMENTI GRATUITI',
    heading: 'Altri strumenti di scrittura che potrebbero esserti utili',
    allToolsLink: 'Tutti gli strumenti IA',
  },
  ja: {
    sectionLabel: 'その他の無料ツール',
    heading: 'お役に立つかもしれない他のライティングツール',
    allToolsLink: 'すべてのAIツール',
  },
  zh: {
    sectionLabel: '更多免费工具',
    heading: '可能对您有帮助的其他写作工具',
    allToolsLink: '所有AI工具',
  },
  ko: {
    sectionLabel: '더 많은 무료 도구',
    heading: '도움이 될 수 있는 다른 글쓰기 도구',
    allToolsLink: '모든 AI 도구',
  },
  tr: {
    sectionLabel: 'DAHA FAZLA ÜCRETSIZ ARAÇ',
    heading: 'Yararlı olabilecek diğer yazma araçları',
    allToolsLink: 'Tüm AI Araçları',
  },
};

// Helper component to render the tools grid
function RelatedToolsContent({ tools, locale }: { tools: ToolConfig[]; locale?: string }) {
  const t = translations[locale || 'en'] || translations.en;
  const toolsBasePath = locale ? `/free-tools/${locale}` : '/free-tools';
  const allToolsPath = locale ? `/free-tools/${locale}` : '/free-tools';
  
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            {t.sectionLabel}
          </span>
        </div>

        {/* Centered heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
            {t.heading}
          </h2>
          <Link 
            href={allToolsPath} 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            {t.allToolsLink}
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        {/* Two column grid for tools with cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tools.map((tool) => {
            const Icon = toolIcons[tool.slug] || FileText;
            return (
              <Link
                key={tool.slug}
                href={`${toolsBasePath}/${tool.slug}`}
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

function getToolsByLocale(locale?: string): ToolConfig[] {
  if (locale === 'fr') return getAllToolsFr();
  if (locale === 'de') return getAllToolsDe();
  if (locale === 'es') return getAllToolsEs();
  if (locale === 'pt') return getAllToolsPt();
  if (locale === 'it') return getAllToolsIt();
  if (locale === 'ja') return getAllToolsJa();
  if (locale === 'zh') return getAllToolsZh();
  if (locale === 'ko') return getAllToolsKo();
  if (locale === 'tr') return getAllToolsTr();
  return getAllTools();
}

export function RelatedTools({ currentToolSlug, locale }: RelatedToolsProps) {
  const [relatedTools, setRelatedTools] = useState<ToolConfig[]>(() => {
    // Initialize with deterministic order for SSR
    const allTools = getToolsByLocale(locale);
    return allTools.filter(tool => tool.slug !== currentToolSlug).slice(0, 12);
  });

  useEffect(() => {
    // Shuffle on client side only
    const allTools = getToolsByLocale(locale);
    const otherTools = allTools.filter(tool => tool.slug !== currentToolSlug);
    const shuffled = [...otherTools].sort(() => Math.random() - 0.5);
    setRelatedTools(shuffled.slice(0, 12));
  }, [currentToolSlug, locale]);

  return <RelatedToolsContent tools={relatedTools} locale={locale} />;
}
