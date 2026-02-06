'use client';

import { useState, useCallback } from 'react';
import { ToolForm } from './ToolForm';
import { ToolOutput } from './ToolOutput';
import { ToolUseCases } from './ToolUseCases';
import { RelatedTools } from './RelatedTools';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FaqHomepage } from '@/components/marketing/faq-homepage';
import { ToolConfig } from '@/lib/ai-tools/tools-config';
import { RelatedToolData } from '@/lib/ai-tools/related-tools-utils';

interface ToolPageProps {
  tool: ToolConfig;
  locale?: string;
  englishSlug?: string;
  relatedTools: RelatedToolData[];
}

// Translations for UI elements
const translations: Record<string, { faqHeading: string; faqDescription: (toolName: string) => string }> = {
  en: {
    faqHeading: 'Frequently Asked Questions',
    faqDescription: (toolName: string) => `Common questions about our ${toolName} tool.`,
  },
  fr: {
    faqHeading: 'Questions Fréquemment Posées',
    faqDescription: (toolName: string) => `Questions courantes sur notre outil ${toolName}.`,
  },
  de: {
    faqHeading: 'Häufig Gestellte Fragen',
    faqDescription: (toolName: string) => `Häufige Fragen zu unserem ${toolName} Werkzeug.`,
  },
  es: {
    faqHeading: 'Preguntas Frecuentes',
    faqDescription: (toolName: string) => `Preguntas comunes sobre nuestra herramienta ${toolName}.`,
  },
  pt: {
    faqHeading: 'Perguntas Frequentes',
    faqDescription: (toolName: string) => `Perguntas comuns sobre nossa ferramenta ${toolName}.`,
  },
  it: {
    faqHeading: 'Domande Frequenti',
    faqDescription: (toolName: string) => `Domande comuni sul nostro strumento ${toolName}.`,
  },
  ja: {
    faqHeading: 'よくある質問',
    faqDescription: (toolName: string) => `${toolName}ツールに関するよくある質問。`,
  },
  zh: {
    faqHeading: '常见问题',
    faqDescription: (toolName: string) => `关于${toolName}工具的常见问题。`,
  },
  ko: {
    faqHeading: '자주 묻는 질문',
    faqDescription: (toolName: string) => `${toolName} 도구에 대한 자주 묻는 질문입니다.`,
  },
  tr: {
    faqHeading: 'Sıkça Sorulan Sorular',
    faqDescription: (toolName: string) => `${toolName} aracı hakkında sıkça sorulan sorular.`,
  },
};

export function ToolPage({ tool, locale, englishSlug, relatedTools }: ToolPageProps) {
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Use English slug for API calls (API expects English tool slugs)
  const apiSlug = englishSlug || tool.slug;

  const handleSubmit = useCallback(async (input: string, options: Record<string, string>) => {
    setIsLoading(true);
    setOutput('');

    try {
      const response = await fetch('/api/ai-tools/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          toolSlug: apiSlug,
          input,
          options,
          locale: locale || 'en',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate content');
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No response body');
      }

      const decoder = new TextDecoder();
      let result = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        const chunk = decoder.decode(value, { stream: true });
        result += chunk;
        setOutput(result);
      }
    } catch (error) {
      console.error('Generation error:', error);
      setOutput('An error occurred while generating content. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [apiSlug, locale]);

  const handleReset = useCallback(() => {
    setOutput('');
  }, []);

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
          {/* Decorative dots */}
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
            
            {/* H1 - uses meta title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {tool.title}
            </h1>
            
            {/* Subtext - uses meta description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              {tool.metaDescription}
            </p>
          </div>

          {/* Tool Form */}
          <div className="max-w-4xl mx-auto space-y-8">
            <ToolForm 
              tool={tool} 
              onSubmit={handleSubmit} 
              isLoading={isLoading} 
            />
            <ToolOutput 
              output={output} 
              isLoading={isLoading} 
              onReset={handleReset} 
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <HeroCta />

      {/* Use Cases Section */}
      <ToolUseCases toolName={tool.name} useCases={tool.useCases} locale={locale} />

      {/* FAQ Section */}
      <FaqHomepage 
        heading={locale === 'fr' ? translations.fr.faqHeading : translations.en.faqHeading}
        description={locale === 'fr' ? translations.fr.faqDescription(tool.name) : translations.en.faqDescription(tool.name)}
        items={tool.faqs.map((faq, index) => ({
          id: `faq-${index}`,
          question: faq.question,
          answer: faq.answer,
        }))}
      />

      {/* Related Tools Section */}
      <RelatedTools tools={relatedTools} locale={locale} />

      {/* Bottom CTA Section */}
      <HeroCta />
    </div>
  );
}
