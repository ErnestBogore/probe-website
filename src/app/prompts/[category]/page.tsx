/**
 * AI Prompts Category Page
 * 
 * Displays a list of all AI prompts within a specific category, with a layout matching the main prompts page.
 */

import { getPromptsByCategory, getCategoryBySlug, getAllCategorySlugs, getAllPromptsGroupedByCategory } from '@/lib/datocms';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { PromptPage } from '@/types/prompt';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

// Generate metadata for the page
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const { promptCategory } = await getCategoryBySlug(category);

  if (!promptCategory) {
    return { title: 'Category Not Found' };
  }

  const title = promptCategory.seoCategory?.title || promptCategory.name;
  const description = promptCategory.seoCategory?.description || `Browse all AI prompts in the ${promptCategory.name} category.`;
  const image = promptCategory.seoCategory?.image;

  return {
    title: `${title} | AI Prompts`,
    description,
    openGraph: {
      title: `${title} | AI Prompts`,
      description,
      images: image ? [image.url] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | AI Prompts`,
      description,
      images: image ? [image.url] : [],
    },
  };
}

// Main page component
export default async function PromptCategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;

  // Fetch the current category details to get its ID
  const { promptCategory } = await getCategoryBySlug(categorySlug);
  if (!promptCategory) {
    notFound();
  }

  // Fetch prompts for the current category using its ID, and fetch all categories for the filter pills
  const [{ allPromptPages }, { allPromptCategories }] = await Promise.all([
    getPromptsByCategory(promptCategory.id),
    getAllPromptsGroupedByCategory(),
  ]);

  if (!allPromptPages) {
    notFound();
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mt-8 mb-12 text-center">
          <div className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            ChatGPT Prompt Library
          </div>
          <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-4 text-balance">
            The Best ChatGPT Prompts for {promptCategory.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {promptCategory.seoCategory?.description || `Battle-tested ${promptCategory.name} prompts. Copy, customize, and get results in minutes.`}
          </p>
        </header>

        <div className="my-12 flex justify-center flex-wrap gap-3">
          <Link
            href="/prompts"
            className="inline-block bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700 text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
          >
            All Prompts
          </Link>
          {allPromptCategories.map(category => (
            <Link
              key={category.id}
              href={`/prompts/${category.slugCategory}`}
              className={`inline-block text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 ${
                category.slugCategory === categorySlug
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 hover:bg-purple-100 text-gray-700 hover:text-purple-700'
              }`}>
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

// Generate static paths for all categories
export async function generateStaticParams() {
  const categories = await getAllCategorySlugs();
  return categories.map(cat => ({
    category: cat.slugCategory,
  }));
}
