'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { getAllTools, ToolConfig } from '@/lib/ai-tools/tools-config';
import { ArrowRight, FileText, RefreshCw, Search, Type, ListChecks, Sparkles, PenTool, CheckCircle, Hash, FileCode, Smile, Shield } from 'lucide-react';
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
};

interface RelatedToolsProps {
  currentToolSlug: string;
}

export function RelatedTools({ currentToolSlug }: RelatedToolsProps) {
  const relatedTools = useMemo(() => {
    const allTools = getAllTools();
    // Filter out the current tool
    const otherTools = allTools.filter(tool => tool.slug !== currentToolSlug);
    
    // Shuffle and pick 12 tools
    const shuffled = [...otherTools].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 12);
  }, [currentToolSlug]);

  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            MORE FREE TOOLS
          </span>
        </div>

        {/* Centered heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl text-gray-900 mb-4">
            Other writing tools you may find helpful
          </h2>
          <Link 
            href="/free-tools" 
            className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors"
          >
            All AI tools
            <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        {/* Two column grid for tools with cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {relatedTools.map((tool) => {
            const Icon = toolIcons[tool.slug] || FileText;
            return (
              <Link
                key={tool.slug}
                href={`/free-tools/${tool.slug}`}
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
