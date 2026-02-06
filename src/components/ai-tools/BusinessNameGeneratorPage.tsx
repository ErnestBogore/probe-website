'use client';

import { useState, useCallback } from 'react';
import { ToolForm } from './ToolForm';
import { ToolOutput } from './ToolOutput';
import { ToolUseCases } from './ToolUseCases';
import { RelatedBusinessNameGenerators } from './RelatedBusinessNameGenerators';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FaqHomepage } from '@/components/marketing/faq-homepage';
import { BusinessNameGeneratorConfig } from '@/lib/ai-tools/business-name-generators-config';
import { RelatedToolData } from '@/lib/ai-tools/related-tools-utils';

interface BusinessNameGeneratorPageProps {
  tool: BusinessNameGeneratorConfig;
  locale?: string;
  relatedTools: RelatedToolData[];
}

// Localized UI strings
const localeStrings: Record<string, {
  howToChooseTitle: (name: string) => string;
  ideasTitle: (name: string) => string;
  ideasDescription: string;
  faqHeading: string;
  faqDescription: (name: string) => string;
  moreGenerators: string;
  otherGeneratorsHeading: string;
  allAiTools: string;
}> = {
  en: {
    howToChooseTitle: (name) => `How to Choose ${name.replace(' Generator', '')}`,
    ideasTitle: (name) => `20 ${name.replace(' Generator', '')} Ideas`,
    ideasDescription: 'Need inspiration? Here are some creative name ideas to spark your imagination.',
    faqHeading: 'Frequently Asked Questions',
    faqDescription: (name) => `Common questions about our ${name} tool.`,
    moreGenerators: 'MORE NAME GENERATORS',
    otherGeneratorsHeading: 'Other business name generators you may find helpful',
    allAiTools: 'All AI tools',
  },
  fr: {
    howToChooseTitle: (name) => `Comment choisir le nom de votre entreprise ${name.replace('Générateur de noms d\'entreprise ', '').replace(' Generator', '')}`,
    ideasTitle: (name) => `20 idées de noms d'entreprise ${name.replace('Générateur de noms d\'entreprise ', '').replace(' Generator', '')}`,
    ideasDescription: 'Besoin d\'inspiration ? Voici quelques idées de noms créatifs pour stimuler votre imagination.',
    faqHeading: 'Questions Fréquemment Posées',
    faqDescription: (name) => `Questions courantes sur notre outil ${name}.`,
    moreGenerators: 'PLUS DE GÉNÉRATEURS DE NOMS',
    otherGeneratorsHeading: 'Autres générateurs de noms d\'entreprise qui pourraient vous être utiles',
    allAiTools: 'Tous les outils IA',
  },
  es: {
    howToChooseTitle: (name) => `Cómo elegir el nombre de tu empresa ${name.replace('Generador de nombres de empresas de ', '').replace(' Generator', '')}`,
    ideasTitle: (name) => `20 ideas de nombres de empresas ${name.replace('Generador de nombres de empresas de ', '').replace(' Generator', '')}`,
    ideasDescription: '¿Necesitas inspiración? Aquí tienes algunas ideas creativas de nombres para despertar tu imaginación.',
    faqHeading: 'Preguntas Frecuentes',
    faqDescription: (name) => `Preguntas comunes sobre nuestra herramienta ${name}.`,
    moreGenerators: 'MÁS GENERADORES DE NOMBRES',
    otherGeneratorsHeading: 'Otros generadores de nombres de empresas que pueden resultarte útiles',
    allAiTools: 'Todas las herramientas IA',
  },
  de: {
    howToChooseTitle: (name) => `So wählen Sie den Namen für Ihr Unternehmen ${name.replace('Ästhetik-Geschäftsnamen-Generator', 'Ästhetik').replace('-Geschäftsnamen-Generator', '').replace(' Generator', '')}`,
    ideasTitle: (name) => `20 Geschäftsnamen-Ideen ${name.replace('-Geschäftsnamen-Generator', '').replace(' Generator', '')}`,
    ideasDescription: 'Brauchen Sie Inspiration? Hier sind einige kreative Namensideen, um Ihre Fantasie anzuregen.',
    faqHeading: 'Häufig Gestellte Fragen',
    faqDescription: (name) => `Häufige Fragen zu unserem ${name} Tool.`,
    moreGenerators: 'MEHR NAMENSGENERATOREN',
    otherGeneratorsHeading: 'Andere Geschäftsnamen-Generatoren, die Ihnen helfen könnten',
    allAiTools: 'Alle KI-Tools',
  },
  it: {
    howToChooseTitle: (name) => `Come scegliere il nome per la tua attività ${name.replace('Generatore di nomi aziendali per ', '').replace(' Generator', '')}`,
    ideasTitle: (name) => `20 idee di nomi aziendali ${name.replace('Generatore di nomi aziendali per ', '').replace(' Generator', '')}`,
    ideasDescription: 'Hai bisogno di ispirazione? Ecco alcune idee creative di nomi per stimolare la tua immaginazione.',
    faqHeading: 'Domande Frequenti',
    faqDescription: (name) => `Domande comuni sul nostro strumento ${name}.`,
    moreGenerators: 'ALTRI GENERATORI DI NOMI',
    otherGeneratorsHeading: 'Altri generatori di nomi aziendali che potrebbero esserti utili',
    allAiTools: 'Tutti gli strumenti IA',
  },
  pt: {
    howToChooseTitle: (name) => `Como escolher o nome para seu negócio ${name.replace('Gerador de Nomes para ', '').replace(' Generator', '')}`,
    ideasTitle: (name) => `20 ideias de nomes comerciais ${name.replace('Gerador de Nomes para ', '').replace(' Generator', '')}`,
    ideasDescription: 'Precisa de inspiração? Aqui estão algumas ideias criativas de nomes para estimular sua imaginação.',
    faqHeading: 'Perguntas Frequentes',
    faqDescription: (name) => `Perguntas comuns sobre nossa ferramenta ${name}.`,
    moreGenerators: 'MAIS GERADORES DE NOMES',
    otherGeneratorsHeading: 'Outros geradores de nomes comerciais que podem ser úteis',
    allAiTools: 'Todas as ferramentas IA',
  },
  ja: {
    howToChooseTitle: (name) => `${name.replace('ジェネレーター', '').replace(' Generator', '')}の名前の選び方`,
    ideasTitle: (name) => `${name.replace('ジェネレーター', '').replace(' Generator', '')}の名前アイデア20選`,
    ideasDescription: 'インスピレーションが必要ですか？創造力を刺激するクリエイティブな名前のアイデアをご紹介します。',
    faqHeading: 'よくある質問',
    faqDescription: (name) => `${name}ツールに関するよくある質問。`,
    moreGenerators: 'その他のネームジェネレーター',
    otherGeneratorsHeading: 'お役に立てるかもしれない他のビジネスネームジェネレーター',
    allAiTools: 'すべてのAIツール',
  },
  ko: {
    howToChooseTitle: (name) => `${name.replace('이름 생성기', '').replace(' Generator', '')} 이름 선택 방법`,
    ideasTitle: (name) => `${name.replace('이름 생성기', '').replace(' Generator', '')} 이름 아이디어 20선`,
    ideasDescription: '영감이 필요하신가요? 창의력을 자극하는 크리에이티브한 이름 아이디어를 소개합니다.',
    faqHeading: '자주 묻는 질문',
    faqDescription: (name) => `${name} 도구에 관한 자주 묻는 질문입니다.`,
    moreGenerators: '더 많은 이름 생성기',
    otherGeneratorsHeading: '도움이 될 수 있는 다른 비즈니스 이름 생성기',
    allAiTools: '모든 AI 도구',
  },
  zh: {
    howToChooseTitle: (name) => `如何选择${name.replace('企业名称生成器', '').replace(' Generator', '')}企业名称`,
    ideasTitle: (name) => `20个${name.replace('企业名称生成器', '').replace(' Generator', '')}企业名称创意`,
    ideasDescription: '需要灵感？这里有一些创意名称想法，激发您的想象力。',
    faqHeading: '常见问题',
    faqDescription: (name) => `关于我们${name}工具的常见问题。`,
    moreGenerators: '更多名称生成器',
    otherGeneratorsHeading: '其他可能对您有帮助的企业名称生成器',
    allAiTools: '所有AI工具',
  },
  tr: {
    howToChooseTitle: (name) => `${name.replace('İşletme Adı Üreteci', '').replace(' Generator', '')} İşletme Adı Nasıl Seçilir`,
    ideasTitle: (name) => `20 ${name.replace('İşletme Adı Üreteci', '').replace(' Generator', '')} İşletme Adı Fikri`,
    ideasDescription: 'İlhama mı ihtiyacınız var? İşte hayal gücünüzü harekete geçirecek yaratıcı isim fikirleri.',
    faqHeading: 'Sıkça Sorulan Sorular',
    faqDescription: (name) => `${name} aracımız hakkında sık sorulan sorular.`,
    moreGenerators: 'Daha Fazla İsim Üreteci',
    otherGeneratorsHeading: 'Faydalı bulabileceğiniz diğer işletme adı üreteçleri',
    allAiTools: 'Tüm AI Araçları',
  },
};

export function BusinessNameGeneratorPage({ tool, locale = 'en', relatedTools }: BusinessNameGeneratorPageProps) {
  const strings = localeStrings[locale] || localeStrings.en;
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
          toolSlug: `business-name-generator-${tool.slug}`,
          input,
          options,
          locale,
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
  }, [tool.slug, locale]);

  const handleReset = useCallback(() => {
    setOutput('');
  }, []);

  // Convert tool config to ToolConfig format for ToolForm
  const toolFormConfig = {
    slug: tool.slug,
    name: tool.name,
    title: tool.title,
    description: tool.description,
    metaDescription: tool.metaDescription,
    inputLabel: tool.inputLabel,
    inputPlaceholder: tool.inputPlaceholder,
    buttonText: tool.buttonText,
    maxLength: tool.maxLength,
    options: tool.options,
    systemPrompt: tool.systemPrompt,
    useCases: tool.useCases,
    faqs: tool.faqs,
  };

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
              tool={toolFormConfig} 
              onSubmit={handleSubmit} 
              isLoading={isLoading} 
            />
            <ToolOutput 
              output={output} 
              isLoading={isLoading} 
              onReset={handleReset}
              locale={locale}
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <HeroCta />

      {/* Use Cases Section */}
      <ToolUseCases toolName={tool.name} useCases={tool.useCases} locale={locale} />

      {/* How to Choose Section - Left/Right Alternating Layout */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              {strings.howToChooseTitle(tool.name)}
            </h2>
            <p className="text-gray-600">
              {tool.howToChoose.intro}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {tool.howToChoose.steps.map((step, index) => (
              <div 
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
              >
                {/* Step Number Visual */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 aspect-square flex items-center justify-center">
                    <span className="text-9xl font-bold text-purple-200">{index + 1}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-3/5">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Name Ideas Section - Bullet List */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
              {strings.ideasTitle(tool.name)}
            </h2>
            <p className="text-gray-600">
              {strings.ideasDescription}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tool.businessNameIdeas.map((idea, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {idea.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {idea.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FaqHomepage 
        heading={strings.faqHeading}
        description={strings.faqDescription(tool.name)}
        items={tool.faqs.map((faq, index) => ({
          id: `faq-${index}`,
          question: faq.question,
          answer: faq.answer,
        }))}
      />

      {/* Related Tools Section */}
      <RelatedBusinessNameGenerators tools={relatedTools} locale={locale} />

      {/* Bottom CTA Section */}
      <HeroCta />
    </div>
  );
}
