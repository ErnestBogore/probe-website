/**
 * Main AI Prompts Page
 * 
 * Displays all AI prompts, grouped by category.
 */

import { getAllPromptsGroupedByCategory } from '@/lib/datocms';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { PromptPage } from '@/types/prompt';

export const metadata: Metadata = {
  title: 'The Best Template Library for ChatGPT Prompts | Analyze',
  description: 'Battle-tested prompts for marketing, SEO, social media, and more. Copy, customize, and get results in minutes.',
};

export default async function AllPromptsPage() {
  const { allPromptCategories, allPromptPages } = await getAllPromptsGroupedByCategory();


  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mt-8 mb-12 text-center">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            ChatGPT Prompt Library
          </div>
          <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4 text-balance">
            The Best Template Library <br /> for ChatGPT Prompts
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Battle-tested prompts for marketing, SEO, social media, and more. Copy, customize, and get results in minutes.
          </p>
        </header>

        <div className="my-12 flex justify-center flex-wrap gap-3">
          <Link
            href="/prompts"
            className="inline-block bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
          >
            All Prompts
          </Link>
          {allPromptCategories.map(category => (
            <Link
              key={category.id}
              href={`/prompts/${category.slugCategory}`}
              className="inline-block bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allPromptPages.map((prompt: PromptPage) => (
            <div key={prompt.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-lg transition-all duration-300">
              {prompt.seoPrompt?.image && (
                <Link href={`/prompts/${prompt.category?.slugCategory}/${prompt.slug}`} className="block relative w-full h-48">
                  <Image
                    src={prompt.seoPrompt.image.url}
                    alt={prompt.seoPrompt.image.alt || prompt.title}
                    fill
                    className="object-cover"
                  />
                </Link>
              )}
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  <Link href={`/prompts/${prompt.category?.slugCategory}/${prompt.slug}`} className="hover:text-purple-700">
                    {prompt.title}
                  </Link>
                </h3>
                <p className="text-gray-600 line-clamp-3 flex-grow">{prompt.description}</p>
                <div className="mt-auto pt-4">
                  <div className="flex items-center gap-2">
                    {prompt.difficultyLevel && (
                      <span className="inline-block bg-gray-100 text-gray-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        Level: {prompt.difficultyLevel}
                      </span>
                    )}
                    {prompt.category && (
                      <span className="inline-block bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {prompt.category.name}
                      </span>
                    )}
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link href={`/prompts/${prompt.category?.slugCategory}/${prompt.slug}`} className="text-purple-600 hover:text-purple-800 font-semibold">
                      Go to prompt &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
