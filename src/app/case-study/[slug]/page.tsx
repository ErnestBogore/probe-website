/**
 * Dynamic Case Study Page
 * 
 * Renders individual case studies fetched from DatoCMS by slug.
 */

import { getBlogPostBySlug, getAllBlogPostSlugs } from '@/lib/datocms';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text';
import { isHeading, isParagraph, isLink, isList, isListItem } from 'datocms-structured-text-utils';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { RelatedPosts } from '@/components/related-posts';
import { TableOfContents } from '@/components/table-of-contents';
import { Table } from '../../../components/blocks/Table';
import { Takeaway } from '../../../components/blocks/Takeaway';
import { generateAnchorId } from '@/lib/anchor-utils';
import { generateBlogPostSchema } from '@/lib/schema';

interface CaseStudyPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function parseSimpleTable(headers: string, rows: string) {
  const columns = headers.split(',').map(h => h.trim());
  const data = rows.split('\n')
    .filter(row => row.trim())
    .map(row => {
      const values = row.split(',').map(v => v.trim());
      const rowObj: Record<string, string> = {};
      columns.forEach((col, i) => {
        rowObj[col] = values[i] || '';
      });
      return rowObj;
    });
  return { columns, data };
}

function extractTextFromChildren(children: unknown): string {
  if (typeof children === 'string') {
    return children;
  }
  
  if (Array.isArray(children)) {
    return children.map(child => extractTextFromChildren(child)).join('');
  }
  
  if (children && typeof children === 'object' && 'props' in children && children.props && typeof children.props === 'object' && 'children' in children.props) {
    return extractTextFromChildren((children.props as { children: unknown }).children);
  }
  
  return '';
}

function StructuredTextWithTOC({ content }: { content: unknown }) {
  let firstH2Encountered = false;

  const customNodeRules = [
    renderNodeRule(isHeading, ({ node, children, key }) => {
      const headingClasses = {
        1: "text-4xl font-bold mt-12 mb-6 text-gray-900",
        2: "text-3xl font-bold mt-10 mb-5 text-gray-900", 
        3: "text-2xl font-bold mt-8 mb-4 text-gray-900",
        4: "text-xl font-bold mt-6 mb-3 text-gray-900",
        5: "text-lg font-bold mt-4 mb-2 text-gray-900",
        6: "text-base font-bold mt-3 mb-2 text-gray-900"
      };
      
      const headingText = extractTextFromChildren(children);
      const anchorId = headingText ? generateAnchorId(headingText) : undefined;
      
      const shouldInsertTOC = node.level === 2 && !firstH2Encountered;
      if (shouldInsertTOC) {
        firstH2Encountered = true;
      }
      
      const HeadingComponent = () => {
        const headingKey = `heading-${node.level}-${key}-${Date.now()}`;
        
        switch (node.level) {
          case 1:
            return <h1 key={headingKey} id={anchorId} className={headingClasses[1]}>{children}</h1>;
          case 2:
            return <h2 key={headingKey} id={anchorId} className={headingClasses[2]}>{children}</h2>;
          case 3:
            return <h3 key={headingKey} id={anchorId} className={headingClasses[3]}>{children}</h3>;
          case 4:
            return <h4 key={headingKey} id={anchorId} className={headingClasses[4]}>{children}</h4>;
          case 5:
            return <h5 key={headingKey} id={anchorId} className={headingClasses[5]}>{children}</h5>;
          case 6:
            return <h6 key={headingKey} id={anchorId} className={headingClasses[6]}>{children}</h6>;
          default:
            return <h2 key={headingKey} id={anchorId} className={headingClasses[2]}>{children}</h2>;
        }
      };

      if (shouldInsertTOC) {
        return (
          <React.Fragment key={`fragment-${key}-${Date.now()}`}>
            <TableOfContents content={content} />
            <HeadingComponent key={`heading-in-fragment-${key}-${Date.now()}`} />
          </React.Fragment>
        );
      }

      return <HeadingComponent key={`heading-wrapper-${key}-${Date.now()}`} />;
    }),
    
    renderNodeRule(isParagraph, ({ children, key }) => (
      <p key={`paragraph-${key}-${Date.now()}`} className="mb-6 text-gray-700 leading-relaxed">
        {children}
      </p>
    )),
    
    renderNodeRule(isLink, ({ node, children, key }) => (
      <a
        key={`link-${key}-${Date.now()}`}
        href={node.url}
        target={node.meta?.find((meta) => meta.id === 'target')?.value}
        rel={node.url.startsWith('http') ? 'noopener noreferrer' : undefined}
        className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
      >
        {children}
      </a>
    )),
    
    renderNodeRule(isList, ({ node, children, key }) => {
      const listClasses = "my-4 ml-6 space-y-2";
      const listKey = `list-${node.style || 'default'}-${key}-${Date.now()}`;
      
      if (node.style === 'bulleted') {
        return (
          <ul key={listKey} className={`${listClasses} list-disc list-outside`}>
            {children}
          </ul>
        );
      } else if (node.style === 'numbered') {
        return (
          <ol key={listKey} className={`${listClasses} list-decimal list-outside`}>
            {children}
          </ol>
        );
      }
      
      return (
        <ul key={listKey} className={`${listClasses} list-disc list-outside`}>
          {children}
        </ul>
      );
    }),
    
    renderNodeRule(isListItem, ({ children, key }) => (
      <li key={`list-item-${key}`} className="text-gray-700 leading-relaxed pl-2">
        {children}
      </li>
    ))
  ];

  return (
    <StructuredText
      data={content as { value: { document: { children: unknown[] } } }}
      customNodeRules={customNodeRules}
      renderBlock={({ record }) => {
        const blockRecord = record as { id?: string; __typename?: string; image?: { url: string; alt?: string; width?: number; height?: number }; video?: { url: string; title?: string; width?: number; height?: number } };
        const blockKey = `block-${blockRecord.id || blockRecord.__typename}-${Date.now()}`;
        
        switch (blockRecord.__typename) {
          case 'ImageBlockRecord':
            return (
              <div key={blockKey} className="my-8">
                <Image
                  src={blockRecord.image?.url || ''}
                  alt={blockRecord.image?.alt || 'Blog image'}
                  width={blockRecord.image?.width || 800}
                  height={blockRecord.image?.height || 600}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
            );
          case 'VideoBlockRecord':
            return (
              <div key={blockKey} className="my-8">
                <video
                  src={blockRecord.video?.url || ''}
                  title={blockRecord.video?.title || 'Blog video'}
                  width={blockRecord.video?.width || 800}
                  height={blockRecord.video?.height || 450}
                  controls
                  className="rounded-lg shadow-md w-full h-auto"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            );
          case 'TableRecord':
            const tableRecord = blockRecord as { id?: string; title?: string; headers?: string; rows?: string };
            if (tableRecord.headers && tableRecord.rows) {
              const tableData = parseSimpleTable(tableRecord.headers, tableRecord.rows);
              return (
                <div key={blockKey}>
                  {tableRecord.title && (
                    <h3 className="text-xl font-semibold mb-4 text-gray-900">{tableRecord.title}</h3>
                  )}
                  <Table data={tableData} />
                </div>
              );
            }
            return null;
          case 'TakeawayRecord':
            const takeawayRecord = blockRecord as { id?: string; title?: string; content?: string };
            return (
              <Takeaway key={blockKey} title={takeawayRecord.title}>
                {takeawayRecord.content}
              </Takeaway>
            );
          default:
            return null;
        }
      }}
      renderInlineRecord={({ record }) => {
        if (record.__typename === 'ImageBlockRecord') {
          const imageRecord = record as { id?: string; image?: { url: string; alt?: string; width?: number; height?: number } };
          const inlineKey = `inline-${imageRecord.id || 'image'}-${Date.now()}`;
          return (
            <span key={inlineKey} className="inline-block my-2 mx-1">
              <Image
                src={imageRecord.image?.url || ''}
                alt={imageRecord.image?.alt || 'Inline image'}
                width={imageRecord.image?.width || 400}
                height={imageRecord.image?.height || 300}
                className="rounded-md max-w-full h-auto"
              />
            </span>
          );
        }
        return null;
      }}
    />
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  try {
    const { slug } = await params;
    const { blogPost } = await getBlogPostBySlug(slug);


    if (!blogPost || blogPost.contentType !== 'case_study') {
      notFound();
    }

    const publishedDate = blogPost.publishedDate 
      ? format(new Date(blogPost.publishedDate), 'MMMM dd, yyyy')
      : blogPost._publishedAt 
      ? format(new Date(blogPost._publishedAt), 'MMMM dd, yyyy')
      : null;

    const heroImage = blogPost.featuredImage || blogPost.seo?.image;
    const structuredData = generateBlogPostSchema(blogPost);

    return (
      <div className="min-h-screen bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />


        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          <Breadcrumb 
            items={[
              { name: 'Home', href: '/' },
              { name: 'Case Studies', href: '/case-study' },
              { name: blogPost.title, href: `/case-study/${blogPost.slug}` },
            ]}
          />
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
          <header className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blogPost.title}
            </h1>

            {publishedDate && (
              <div className="mb-8">
                <time 
                  dateTime={blogPost.publishedDate || blogPost._publishedAt}
                  className="text-gray-500 font-medium text-lg"
                >
                  {publishedDate}
                </time>
              </div>
            )}

            {(blogPost.author || blogPost.reviewer) && (
              <div className="flex flex-col md:flex-row justify-center items-start gap-12 mb-8">
                {blogPost.author && (
                  <div className="flex flex-col items-center min-w-[200px]">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Written by</p>
                    <div className="flex items-center">
                      {blogPost.author.image && (
                        <div className="w-12 h-12 mr-4 flex-shrink-0">
                          <Image
                            src={blogPost.author.image.url}
                            alt={blogPost.author.image.alt || blogPost.author.name || 'Author'}
                            width={48}
                            height={48}
                            className="rounded-full object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 text-base">{blogPost.author.name}</h3>
                        {blogPost.author.title && (
                          <p className="text-sm text-gray-600 mt-1">{blogPost.author.title}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                
                {blogPost.reviewer && (
                  <div className="flex flex-col items-center min-w-[200px]">
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">Reviewed by</p>
                    <div className="flex items-center">
                      {blogPost.reviewer.image && (
                        <div className="w-12 h-12 mr-4 flex-shrink-0">
                          <Image
                            src={blogPost.reviewer.image.url}
                            alt={blogPost.reviewer.image.alt || blogPost.reviewer.name || 'Reviewer'}
                            width={48}
                            height={48}
                            className="rounded-full object-cover w-full h-full"
                          />
                        </div>
                      )}
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-900 text-base">{blogPost.reviewer.name}</h3>
                        {blogPost.reviewer.title && (
                          <p className="text-sm text-gray-600 mt-1">{blogPost.reviewer.title}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {heroImage && (
              <div className="flex justify-center mb-8">
                <Image
                  src={heroImage.url}
                  alt={heroImage.alt || blogPost.title}
                  width={heroImage.width || 1200}
                  height={heroImage.height || 628}
                  className="rounded-lg shadow-md max-w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                />
              </div>
            )}
          </header>

          {blogPost.body && (
            <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-blockquote:border-blue-500 prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-700 prose-ul:ml-6 prose-ol:ml-6" style={{ '--tw-prose-bullets': '#374151', '--tw-prose-counters': '#374151' } as React.CSSProperties}>
              <StructuredTextWithTOC content={blogPost.body} />
            </div>
          )}

          {blogPost.relatedPosts && blogPost.relatedPosts.length > 0 && (
            <RelatedPosts posts={blogPost.relatedPosts} />
          )}

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link 
                href="/case-study"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to all case studies
              </Link>
              
              {blogPost.updatedAt && (
                <p className="text-sm text-gray-500">
                  Last updated: {format(new Date(blogPost.updatedAt), 'MMM dd, yyyy')}
                </p>
              )}
            </div>
          </footer>
        </article>
      </div>
    );
  } catch (error) {
    console.error('Error fetching case study:', error);
    notFound();
  }
}

export async function generateStaticParams() {
  try {
    const posts = await getAllBlogPostSlugs();
    const caseStudySlugs = posts
      .filter(post => post.contentType === 'case_study')
      .map(post => ({ slug: post.slug }));
    return caseStudySlugs;
  } catch (error) {
    console.error('Error generating static params for case studies:', error);
    return [];
  }
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  try {
    const { slug } = await params;
    const { blogPost } = await getBlogPostBySlug(slug);

    if (!blogPost) {
      return {
        title: 'Case Study Not Found | Analyze',
        description: 'The requested case study could not be found.',
      };
    }

    const title = blogPost.seo?.title || blogPost.title;
    const description = blogPost.seo?.description || blogPost.excerpt || 'Read this case study from Analyze.';
    const image = blogPost.seo?.image || blogPost.featuredImage;

    const structuredData = generateBlogPostSchema(blogPost);

    return {
      title: `${title} | Analyze`,
      description,
      openGraph: {
        title: `${title} | Analyze`,
        description,
        type: 'article',
        publishedTime: blogPost.publishedDate,
        modifiedTime: blogPost.updatedAt,
        authors: blogPost.author?.name ? [blogPost.author.name] : undefined,
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
        title: `${title} | Analyze`,
        description,
        images: image ? [image.url] : undefined,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Case Study | Analyze',
      description: 'Read this case study from Analyze.',
    };
  }
}
