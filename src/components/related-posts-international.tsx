/**
 * RelatedPostsInternational Component
 * 
 * Displays a grid of related international blog posts at the end of blog articles.
 * Shows up to 6 related posts with images, titles, dates, and authors.
 * Uses language-specific URLs: /blog/[lang]/[slug]
 */

import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { InternationalBlogPostSummary, SupportedLanguage } from '@/types/blog';

interface RelatedPostsInternationalProps {
  posts: InternationalBlogPostSummary[];
  language: SupportedLanguage;
  title?: string;
  subtitle?: string;
}

const LOCALIZED_TITLES: Record<SupportedLanguage, { title: string; subtitle: string }> = {
  fr: {
    title: 'Contenu similaire que vous pourriez vouloir lire',
    subtitle: 'Découvrez plus d\'insights et de perspectives sur des sujets connexes',
  },
  de: {
    title: 'Ähnliche Inhalte, die Sie interessieren könnten',
    subtitle: 'Entdecken Sie weitere Einblicke und Perspektiven zu verwandten Themen',
  },
  es: {
    title: 'Contenido similar que podría interesarte',
    subtitle: 'Descubre más insights y perspectivas sobre temas relacionados',
  },
  it: {
    title: 'Contenuti simili che potresti voler leggere',
    subtitle: 'Scopri più approfondimenti e prospettive su argomenti correlati',
  },
  nl: {
    title: 'Vergelijkbare content die je misschien wilt lezen',
    subtitle: 'Ontdek meer inzichten en perspectieven over gerelateerde onderwerpen',
  },
};

export function RelatedPostsInternational({ 
  posts, 
  language,
  title,
  subtitle,
}: RelatedPostsInternationalProps) {
  if (!posts || posts.length === 0) {
    return null;
  }

  const localizedText = LOCALIZED_TITLES[language];
  const displayTitle = title || localizedText.title;
  const displaySubtitle = subtitle || localizedText.subtitle;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200 -mx-16 px-16 lg:-mx-32 lg:px-32">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          {displayTitle}
        </h2>
        <p className="text-gray-600 text-center">
          {displaySubtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.slice(0, 6).map((post) => {
          const publishedDate = post.publishedDate 
            ? format(new Date(post.publishedDate), 'MMM dd, yyyy')
            : 'No date';

          const cardImage = post.featuredImage || post.seo?.image;

          return (
            <Link 
              key={post.id}
              href={`/blog/${language}/${post.slug}`}
              className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
            >
              {cardImage && (
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={cardImage.url}
                    alt={cardImage.alt || post.title}
                    fill
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              )}

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight min-h-[3rem]">
                  {post.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                  <div className="flex items-center space-x-2">
                    {post.author?.image && (
                      <Image
                        src={post.author.image.url}
                        alt={post.author.image.alt || post.author.name || 'Author'}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    )}
                    <span className="font-medium">{post.author?.name || 'Anonymous'}</span>
                  </div>
                  <time className="font-medium">{publishedDate}</time>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
