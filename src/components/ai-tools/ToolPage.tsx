'use client';

import { useState, useCallback } from 'react';
import { ToolForm } from './ToolForm';
import { ToolOutput } from './ToolOutput';
import { ToolUseCases } from './ToolUseCases';
import { HeroCta } from '@/components/marketing/hero-cta';
import { FaqHomepage } from '@/components/marketing/faq-homepage';
import { ToolConfig } from '@/lib/ai-tools/tools-config';

interface ToolPageProps {
  tool: ToolConfig;
}

export function ToolPage({ tool }: ToolPageProps) {
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
          toolSlug: tool.slug,
          input,
          options,
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
  }, [tool.slug]);

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
            
            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
              {tool.title.replace('Free AI ', '')}
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
              {tool.description}
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
      <ToolUseCases toolName={tool.name} useCases={tool.useCases} />

      {/* FAQ Section */}
      <FaqHomepage 
        heading="Frequently Asked Questions"
        description={`Common questions about our ${tool.name} tool.`}
        items={tool.faqs.map((faq, index) => ({
          id: `faq-${index}`,
          question: faq.question,
          answer: faq.answer,
        }))}
      />
    </div>
  );
}
