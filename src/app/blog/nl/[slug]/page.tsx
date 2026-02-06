/**
 * Dutch Blog Post Page
 */

import { getInternationalBlogPostBySlug, getAllInternationalBlogPostSlugs } from '@/lib/datocms';
import { InternationalBlogPostView } from '@/components/blog/international-blog-post';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const LANGUAGE = 'nl' as const;

export default async function DutchBlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  try {
    const { blogPostInternational } = await getInternationalBlogPostBySlug(LANGUAGE, slug);

    if (!blogPostInternational || blogPostInternational.contentType === 'case_study') {
      notFound();
    }

    return <InternationalBlogPostView blogPost={blogPostInternational} language={LANGUAGE} />;
  } catch (error) {
    console.error('Error fetching Dutch blog post:', error);
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
    console.error('Error generating static params for Dutch blog posts:', error);
    return [];
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  try {
    const { blogPostInternational } = await getInternationalBlogPostBySlug(LANGUAGE, slug);

    if (!blogPostInternational) {
      return {
        title: 'Bericht niet gevonden | Analyze AI',
        description: 'Het gevraagde blogbericht kon niet worden gevonden.',
      };
    }

    const title = blogPostInternational.seo?.title || blogPostInternational.title;
    const description = blogPostInternational.seo?.description || blogPostInternational.excerpt || 'Lees dit inzichtelijke blogbericht van Analyze AI.';
    const image = blogPostInternational.seo?.image || blogPostInternational.featuredImage;

    return {
      title: `${title} | Analyze AI`,
      description,
      openGraph: {
        title: `${title} | Analyze AI`,
        description,
        type: 'article',
        publishedTime: blogPostInternational.publishedDate,
        modifiedTime: blogPostInternational.updatedAt,
        authors: blogPostInternational.author?.name ? [blogPostInternational.author.name] : undefined,
        locale: 'nl_NL',
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
        title: `${title} | Analyze AI`,
        description,
        images: image ? [image.url] : undefined,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blogbericht | Analyze AI',
      description: 'Lees dit inzichtelijke blogbericht van Analyze AI.',
    };
  }
}
