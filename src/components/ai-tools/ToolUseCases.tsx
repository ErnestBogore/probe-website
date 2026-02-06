'use client';

import { UseCase } from '@/lib/ai-tools/tools-config';
import { DashedLine } from '@/components/dashed-line';

interface ToolUseCasesProps {
  toolName: string;
  useCases: UseCase[];
  locale?: string;
}

const translations: Record<string, { sectionLabel: string; heading: (toolName: string) => string }> = {
  en: {
    sectionLabel: 'HOW YOU CAN USE THIS TOOL',
    heading: (toolName: string) => `Use cases of Analyze AI's ${toolName}`,
  },
  fr: {
    sectionLabel: 'COMMENT UTILISER CET OUTIL',
    heading: (toolName: string) => `Cas d'utilisation du ${toolName} d'Analyze AI`,
  },
  de: {
    sectionLabel: 'SO KÖNNEN SIE DIESES WERKZEUG NUTZEN',
    heading: (toolName: string) => `Anwendungsfälle für Analyze AI's ${toolName}`,
  },
  es: {
    sectionLabel: 'CÓMO PUEDES USAR ESTA HERRAMIENTA',
    heading: (toolName: string) => `Casos de uso del ${toolName} de Analyze AI`,
  },
  pt: {
    sectionLabel: 'COMO VOCÊ PODE USAR ESTA FERRAMENTA',
    heading: (toolName: string) => `Casos de uso do ${toolName} da Analyze AI`,
  },
  it: {
    sectionLabel: 'COME PUOI USARE QUESTO STRUMENTO',
    heading: (toolName: string) => `Casi d'uso del ${toolName} di Analyze AI`,
  },
  ja: {
    sectionLabel: 'このツールの使い方',
    heading: (toolName: string) => `Analyze AIの${toolName}の活用例`,
  },
  zh: {
    sectionLabel: '如何使用此工具',
    heading: (toolName: string) => `Analyze AI ${toolName}的使用案例`,
  },
  ko: {
    sectionLabel: '이 도구 사용 방법',
    heading: (toolName: string) => `Analyze AI ${toolName}의 사용 사례`,
  },
  tr: {
    sectionLabel: 'BU ARACI NASIL KULLANABİLİRSİNİZ',
    heading: (toolName: string) => `Analyze AI ${toolName} Kullanım Örnekleri`,
  },
};

export function ToolUseCases({ toolName, useCases, locale }: ToolUseCasesProps) {
  const t = translations[locale || 'en'] || translations.en;
  
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

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            {t.heading(toolName)}
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="border-l-4 border-purple-500 pl-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
