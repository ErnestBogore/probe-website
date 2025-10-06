/**
 * Dynamic AI Prompt Page
 * 
 * Renders an individual AI prompt fetched from DatoCMS by its category and slug.
 */

import { getPromptBySlug, getAllPromptSlugs } from '@/lib/datocms';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { StructuredTextRenderer } from '@/components/StructuredTextRenderer';
import { ArrowLeft, Code } from 'lucide-react';
import { WhenToUse } from '@/components/prompt/WhenToUse';
import { ProTips } from '@/components/prompt/ProTips';
import { Cta } from '@/components/marketing/cta';
import { Metadata } from 'next';
import { CopyButton } from '@/components/copy-button';
import { render as structuredTextToPlainText } from 'datocms-structured-text-to-plain-text';

interface PromptPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: PromptPageProps): Promise<Metadata> {
  const { slug } = await params;
  const { promptPage } = await getPromptBySlug(slug);

  if (!promptPage) {
    return { title: 'Prompt Not Found' };
  }

  const title = promptPage.seoPrompt?.title || promptPage.title;
  const description = promptPage.seoPrompt?.description || promptPage.description;
  const image = promptPage.seoPrompt?.image;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [image.url] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image.url] : [],
    },
  };
}

// Main page component
export default async function PromptPage({ params }: PromptPageProps) {
  const { slug, category } = await params;
  const { promptPage } = await getPromptBySlug(slug);

  if (!promptPage || promptPage.category?.slugCategory !== category) {
    notFound();
  }

  const promptText = (promptPage.promptContent ? structuredTextToPlainText(promptPage.promptContent) : '') || '';

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/prompts" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 font-semibold">
          <ArrowLeft size={16} />
          Back to All Prompts
        </Link>

        <header className="mt-8 mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {promptPage.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {promptPage.description}
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <main className="space-y-8">
            {/* When to Use */}
            {promptPage.whenToUse && <WhenToUse data={promptPage.whenToUse} />}
            {/* The Prompt */}
            <div className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center gap-3">
                  <Code size={20} className="text-gray-500" />
                  <h2 className="text-xl font-bold text-gray-800">The prompt</h2>
                </div>
                <CopyButton textToCopy={promptText} />
              </div>

              {/* Prompt Content */}
              <div className="p-6 text-gray-800">
                <div className="prose prose-lg max-w-none">
                  <StructuredTextRenderer data={promptPage.promptContent} />
                </div>
              </div>

              {/* Variables */}
              {promptPage.variablesToReplace && (
                <div className="p-4 border-t border-gray-200 bg-gray-50/70">
                  <h3 className="text-sm font-semibold text-gray-600 mb-3">Variables to replace:</h3>
                  <div className="flex flex-wrap gap-2">
                    {promptPage.variablesToReplace.split(/[,\n]/).map((variable: string) => variable.trim()).filter(Boolean).map((variable: string) => (
                      <span key={variable} className="px-2.5 py-1 bg-gray-200 text-gray-800 text-xs font-mono rounded-md">
                        {variable}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Example Input */}
            {promptPage.exampleInput && (
              <div className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Real-life example of how to use this prompt</h2>
                <div className="prose prose-lg max-w-none bg-gray-50 p-4 rounded-md">
                  <StructuredTextRenderer data={promptPage.exampleInput} />
                </div>
              </div>
            )}

            {/* Example Output */}
            {promptPage.exampleOutput && (
              <div className="border border-gray-200 rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Example output from ChatGPT for this prompt</h2>
                <div className="prose prose-lg max-w-none bg-green-50/50 p-4 rounded-md">
                  <StructuredTextRenderer data={promptPage.exampleOutput} />
                </div>
              </div>
            )}

            {/* Pro Tips */}
            {promptPage.proTips && <ProTips data={promptPage.proTips} />}

            {/* Related Prompts */}
            {promptPage.relatedPrompts && promptPage.relatedPrompts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Related prompts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {promptPage.relatedPrompts.map((prompt) => (
                    <Link key={prompt.id} href={`/prompts/${prompt.category.slugCategory}/${prompt.slug}`} className="group block border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="relative w-full h-48 bg-gray-100">
                        {prompt.seoPrompt?.image ? (
                          <Image
                            src={prompt.seoPrompt.image.url}
                            alt={prompt.seoPrompt.image.alt || prompt.title}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-300"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200"></div> // Placeholder
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-lg text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">{prompt.title}</h4>
                        <p className="text-sm text-gray-600 line-clamp-2">{prompt.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <div className="-mt-12">
        <Cta />
      </div>
    </div>
  );
}

// Generate static paths
export async function generateStaticParams() {
  const prompts = await getAllPromptSlugs();
  return prompts.map((prompt: { slug: string; category: { slugCategory: string } }) => ({
    category: prompt.category.slugCategory,
    slug: prompt.slug,
  }));
}
