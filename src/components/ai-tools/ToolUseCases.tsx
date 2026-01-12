'use client';

import { UseCase } from '@/lib/ai-tools/tools-config';
import { DashedLine } from '@/components/dashed-line';

interface ToolUseCasesProps {
  toolName: string;
  useCases: UseCase[];
}

export function ToolUseCases({ toolName, useCases }: ToolUseCasesProps) {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            HOW YOU CAN USE THIS TOOL
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            Use cases of Analyze&apos;s {toolName}
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
