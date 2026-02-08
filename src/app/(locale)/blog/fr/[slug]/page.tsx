/**
 * French Blog Post Page
 */

import { getInternationalBlogPostBySlug, getAllInternationalBlogPostSlugs } from '@/lib/datocms';
import { InternationalBlogPostView } from '@/components/blog/international-blog-post';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const LANGUAGE = 'fr' as const;

export default async function FrenchBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  try {
    const { blogPostInternational } = await getInternationalBlogPostBySlug(LANGUAGE, slug);

    if (!blogPostInternational || blogPostInternational.contentType === 'case_study') {
      notFound();
    }

    return <InternationalBlogPostView blogPost={blogPostInternational} language={LANGUAGE} />;
  } catch (error) {
    console.error('Error fetching French blog post:', error);
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getAllInternationalBlogPostSlugs();
    return posts
      .filter(post => post.language === LANGUAGE && post.contentType !== 'case_study')
      .map(post => ({ slug: post.slug }));
  } catch (error) {
    console.error('Error generating static params for French blog posts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  try {
    const { blogPostInternational } = await getInternationalBlogPostBySlug(LANGUAGE, slug);

    if (!blogPostInternational) {
      return {
        title: 'Article non trouvé',
        description: 'L\'article demandé n\'a pas pu être trouvé.',
      };
    }

    const title = blogPostInternational.seo?.title || blogPostInternational.title;
    const description = blogPostInternational.seo?.description || blogPostInternational.excerpt || 'Lisez cet article perspicace d\'Analyze AI.';
    const image = blogPostInternational.seo?.image || blogPostInternational.featuredImage;

    return {
      title: `${title}`,
      description,
      alternates: {
        canonical: `/blog/fr/${slug}`,
      },
      openGraph: {
        title: `${title}`,
        description,
        url: `/blog/fr/${slug}`,
        type: 'article',
        publishedTime: blogPostInternational.publishedDate,
        modifiedTime: blogPostInternational.updatedAt,
        authors: blogPostInternational.author?.name ? [blogPostInternational.author.name] : undefined,
        locale: 'fr_FR',
        images: image ? [
          {
            url: image.url,
            alt: image.alt || title,
            width: image.width,
            height: image.height,
          }
        ] : undefined,
      },
      twitter: {
        card: 'summary_large_image',
        title: `${title}`,
        description,
        images: image ? [image.url] : undefined,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Article',
      description: 'Lisez cet article perspicace d\'Analyze AI.',
    };
  }
}
