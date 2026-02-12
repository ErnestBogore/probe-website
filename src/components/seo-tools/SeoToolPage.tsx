'use client';

import { useState, useCallback } from 'react';
import { SeoToolForm } from './SeoToolForm';
import { SeoToolResults, SeoToolResultData } from './SeoToolResults';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FaqHomepage } from '@/components/marketing/faq-homepage';
import { SeoToolConfig, SeoToolIconName } from '@/lib/seo-tools/seo-tools-config.types';
import { SeoRelatedToolData } from '@/lib/seo-tools/seo-related-tools-utils';
import Link from 'next/link';
import Image from 'next/image';
import {
  Search,
  BarChart3,
  Globe,
  Link2,
  TrendingUp,
  Youtube,
  ShoppingBag,
  Sparkles,
} from 'lucide-react';

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

interface SeoToolPageProps {
  tool: SeoToolConfig;
  locale?: string;
  relatedTools: SeoRelatedToolData[];
}

const translations: Record<string, { faqHeading: string; faqDescription: (toolName: string) => string; useCasesHeading: string; relatedToolsHeading: string }> = {
  en: {
    faqHeading: 'Frequently Asked Questions',
    faqDescription: (toolName: string) => `Common questions about our ${toolName} tool.`,
    useCasesHeading: 'Use Cases',
    relatedToolsHeading: 'Related SEO Tools',
  },
  fr: {
    faqHeading: 'Questions Fr\u00e9quemment Pos\u00e9es',
    faqDescription: (toolName: string) => `Questions courantes sur notre outil ${toolName}.`,
    useCasesHeading: 'Cas d\'utilisation',
    relatedToolsHeading: 'Outils SEO associ\u00e9s',
  },
  de: {
    faqHeading: 'H\u00e4ufig Gestellte Fragen',
    faqDescription: (toolName: string) => `H\u00e4ufige Fragen zu unserem ${toolName} Werkzeug.`,
    useCasesHeading: 'Anwendungsf\u00e4lle',
    relatedToolsHeading: 'Verwandte SEO-Tools',
  },
  es: {
    faqHeading: 'Preguntas Frecuentes',
    faqDescription: (toolName: string) => `Preguntas comunes sobre nuestra herramienta ${toolName}.`,
    useCasesHeading: 'Casos de uso',
    relatedToolsHeading: 'Herramientas SEO relacionadas',
  },
  pt: {
    faqHeading: 'Perguntas Frequentes',
    faqDescription: (toolName: string) => `Perguntas comuns sobre nossa ferramenta ${toolName}.`,
    useCasesHeading: 'Casos de uso',
    relatedToolsHeading: 'Ferramentas SEO relacionadas',
  },
  it: {
    faqHeading: 'Domande Frequenti',
    faqDescription: (toolName: string) => `Domande comuni sul nostro strumento ${toolName}.`,
    useCasesHeading: 'Casi d\'uso',
    relatedToolsHeading: 'Strumenti SEO correlati',
  },
  ja: {
    faqHeading: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    faqDescription: (toolName: string) => `${toolName}\u30c4\u30fc\u30eb\u306b\u95a2\u3059\u308b\u3088\u304f\u3042\u308b\u8cea\u554f\u3002`,
    useCasesHeading: '\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9',
    relatedToolsHeading: '\u95a2\u9023SEO\u30c4\u30fc\u30eb',
  },
  zh: {
    faqHeading: '\u5e38\u89c1\u95ee\u9898',
    faqDescription: (toolName: string) => `\u5173\u4e8e${toolName}\u5de5\u5177\u7684\u5e38\u89c1\u95ee\u9898\u3002`,
    useCasesHeading: '\u7528\u4f8b',
    relatedToolsHeading: '\u76f8\u5173SEO\u5de5\u5177',
  },
  ko: {
    faqHeading: '\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38',
    faqDescription: (toolName: string) => `${toolName} \ub3c4\uad6c\uc5d0 \ub300\ud55c \uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38\uc785\ub2c8\ub2e4.`,
    useCasesHeading: '\uc0ac\uc6a9 \uc0ac\ub840',
    relatedToolsHeading: '\uad00\ub828 SEO \ub3c4\uad6c',
  },
  tr: {
    faqHeading: 'S\u0131k\u00e7a Sorulan Sorular',
    faqDescription: (toolName: string) => `${toolName} arac\u0131 hakk\u0131nda s\u0131k\u00e7a sorulan sorular.`,
    useCasesHeading: 'Kullan\u0131m Alanlar\u0131',
    relatedToolsHeading: '\u0130lgili SEO Ara\u00e7lar\u0131',
  },
};

export function SeoToolPage({ tool, locale, relatedTools }: SeoToolPageProps) {
  const [resultData, setResultData] = useState<SeoToolResultData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const t = translations[locale || 'en'] || translations.en;

  const handleSubmit = useCallback(async (input: string, options: Record<string, string>, secondaryInput?: string) => {
    setIsLoading(true);
    setError(null);
    setResultData(null);

    try {
      const response = await fetch(`/api/seo-tools/${tool.apiEndpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input,
          options,
          secondaryInput,
        }),
      });

      if (response.status === 429) {
        setError('You\'ve reached the rate limit. Please wait a moment and try again.');
        return;
      }

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        setError(errData.error || 'An error occurred. Please try again.');
        return;
      }

      const data = await response.json();
      setResultData(data);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  }, [tool.apiEndpoint]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Grain Background */}
      <div className="relative bg-gray-100 pt-16 pb-8 lg:pt-24 lg:pb-12 overflow-hidden">
        {/* Grain texture overlay */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 border border-gray-300 opacity-30" />
          <div className="absolute top-40 right-20 w-24 h-24 border border-gray-300 opacity-20" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border border-gray-300 opacity-25" />
          <div className="absolute top-16 left-1/3 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
          <div className="absolute top-32 right-1/3 w-1.5 h-1.5 bg-purple-500 rounded-full opacity-50" />
          <div className="absolute bottom-32 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-40" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm mb-6">
              <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              <span className="w-5 h-5 bg-purple-600 rounded flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {tool.title}
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              {tool.metaDescription}
            </p>
          </div>

          {/* Form + Results */}
          <div className="max-w-4xl mx-auto space-y-8">
            <SeoToolForm
              tool={tool}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />
            <SeoToolResults
              tool={tool}
              data={resultData}
              isLoading={isLoading}
              error={error}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <HeroCta />

      {/* Use Cases Section */}
      {tool.useCases.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                {t.useCasesHeading}
              </h2>
            </div>
            <div className="flex flex-col gap-16 max-w-5xl mx-auto">
              {tool.useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
                >
                  {uc.image && (
                    <div className="w-full md:w-1/2 flex-shrink-0">
                      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                        <Image
                          src={uc.image}
                          alt={uc.title}
                          width={800}
                          height={500}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  )}
                  <div className={uc.image ? 'w-full md:w-1/2' : 'w-full'}>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{uc.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{uc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {tool.faqs.length > 0 && (
        <FaqHomepage
          heading={t.faqHeading}
          description={t.faqDescription(tool.name)}
          items={tool.faqs.map((faq, index) => ({
            id: `faq-${index}`,
            question: faq.question,
            answer: faq.answer,
          }))}
        />
      )}

      {/* Related Tools Section */}
      {relatedTools.length > 0 && (
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
                {t.relatedToolsHeading}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {relatedTools.map((rt) => {
                const Icon = seoToolIconMap[rt.iconName] || Search;
                return (
                  <Link
                    key={rt.slug}
                    href={locale ? `/free-tools/${locale}/${rt.slug}` : `/free-tools/${rt.slug}`}
                    className="group flex gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-11 h-11 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 mb-0.5 group-hover:text-purple-600 transition-colors">
                        {rt.name}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {rt.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA Section */}
      <HeroCta />
    </div>
  );
}
