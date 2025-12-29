/**
 * International Blog Post Component
 * 
 * Shared component for rendering individual international blog posts.
 * Used by each language-specific route (fr, de, es, it, nl).
 */

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format, Locale } from 'date-fns';
import { fr, de, es, it, nl } from 'date-fns/locale';
import { StructuredText, renderNodeRule } from 'react-datocms/structured-text';
import { isHeading, isParagraph, isLink, isList, isListItem } from 'datocms-structured-text-utils';
import { ArrowLeft } from 'lucide-react';
import React from 'react';
import { Breadcrumb } from "@/components/marketing/breadcrumb";
import { RelatedPostsInternational } from '@/components/related-posts-international';
import { TableOfContents } from '@/components/table-of-contents';
import { TableOfContentsHtml, extractHeadingsFromHtml, addAnchorIdsToHtml } from '@/components/table-of-contents-html';
import { Table } from '@/components/blocks/Table';
import { Takeaway } from '@/components/blocks/Takeaway';
import { generateAnchorId } from '@/lib/anchor-utils';
import { BlogCta } from '@/components/marketing/blog-cta';
import { BlogSidebarCta } from '@/components/blog/blog-sidebar-cta';
import { InternationalBlogPost as InternationalBlogPostType, SupportedLanguage, LANGUAGE_LABELS } from '@/types/blog';

// Sanitize TinyMCE HTML to remove inline font styles that override our CSS
function sanitizeHtml(html: string): string {
  return html
    // Remove font-size inline styles
    .replace(/font-size:\s*[^;]+;?/gi, '')
    // Remove font-family inline styles  
    .replace(/font-family:\s*[^;]+;?/gi, '')
    // Remove line-height inline styles
    .replace(/line-height:\s*[^;]+;?/gi, '')
    // Clean up empty style attributes
    .replace(/style="\s*"/gi, '')
    .replace(/style='\s*'/gi, '');
}

// Process HTML content: sanitize, add anchor IDs, and prepare for TOC injection
function processHtmlContent(html: string): { processedHtml: string; headings: { id: string; text: string; level: number }[] } {
  const sanitized = sanitizeHtml(html);
  const withAnchors = addAnchorIdsToHtml(sanitized);
  const headings = extractHeadingsFromHtml(sanitized);
  return { processedHtml: withAnchors, headings };
}

const DATE_LOCALES: Record<SupportedLanguage, Locale> = {
  fr,
  de,
  es,
  it,
  nl,
};

const LOCALIZED_UI: Record<SupportedLanguage, {
  backToAllPosts: string;
  lastUpdated: string;
  writtenBy: string;
  reviewedBy: string;
}> = {
  fr: {
    backToAllPosts: 'Retour à tous les articles',
    lastUpdated: 'Dernière mise à jour :',
    writtenBy: 'Écrit par',
    reviewedBy: 'Révisé par',
  },
  de: {
    backToAllPosts: 'Zurück zu allen Beiträgen',
    lastUpdated: 'Zuletzt aktualisiert:',
    writtenBy: 'Geschrieben von',
    reviewedBy: 'Überprüft von',
  },
  es: {
    backToAllPosts: 'Volver a todos los artículos',
    lastUpdated: 'Última actualización:',
    writtenBy: 'Escrito por',
    reviewedBy: 'Revisado por',
  },
  it: {
    backToAllPosts: 'Torna a tutti gli articoli',
    lastUpdated: 'Ultimo aggiornamento:',
    writtenBy: 'Scritto da',
    reviewedBy: 'Revisionato da',
  },
  nl: {
    backToAllPosts: 'Terug naar alle berichten',
    lastUpdated: 'Laatst bijgewerkt:',
    writtenBy: 'Geschreven door',
    reviewedBy: 'Beoordeeld door',
  },
};

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
        1: "text-4xl tracking-tight mt-12 mb-6 text-foreground",
        2: "text-3xl tracking-tight mt-10 mb-5 text-foreground", 
        3: "text-2xl tracking-tight mt-8 mb-4 text-foreground",
        4: "text-xl tracking-tight mt-6 mb-3 text-foreground",
        5: "text-lg tracking-tight mt-4 mb-2 text-foreground",
        6: "text-base tracking-tight mt-3 mb-2 text-foreground"
      };
      
      const headingText = extractTextFromChildren(children);
      const anchorId = headingText ? generateAnchorId(headingText) : undefined;
      
      const shouldInsertTOC = node.level === 2 && !firstH2Encountered;
      if (shouldInsertTOC) {
        firstH2Encountered = true;
      }
      
      const headingKey = `heading-${node.level}-${key}`;
      
      const HeadingElement = () => {
        switch (node.level) {
          case 1:
            return <h1 id={anchorId} className={headingClasses[1]}>{children}</h1>;
          case 2:
            return <h2 id={anchorId} className={headingClasses[2]}>{children}</h2>;
          case 3:
            return <h3 id={anchorId} className={headingClasses[3]}>{children}</h3>;
          case 4:
            return <h4 id={anchorId} className={headingClasses[4]}>{children}</h4>;
          case 5:
            return <h5 id={anchorId} className={headingClasses[5]}>{children}</h5>;
          case 6:
            return <h6 id={anchorId} className={headingClasses[6]}>{children}</h6>;
          default:
            return <h2 id={anchorId} className={headingClasses[2]}>{children}</h2>;
        }
      };

      if (shouldInsertTOC) {
        return (
          <React.Fragment key={`fragment-${key}`}>
            <TableOfContents content={content} />
            <HeadingElement />
          </React.Fragment>
        );
      }

      return <HeadingElement key={headingKey} />;
    }),
    
    renderNodeRule(isParagraph, ({ children, key }) => (
      <p key={`paragraph-${key}`} className="mb-6 text-muted-foreground leading-relaxed">
        {children}
      </p>
    )),
    
    renderNodeRule(isLink, ({ node, children, key }) => (
      <a
        key={`link-${key}`}
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
      const listKey = `list-${node.style || 'default'}-${key}`;
      
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
        const blockKey = `block-${blockRecord.id || blockRecord.__typename}`;
        
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
          const inlineKey = `inline-${imageRecord.id || 'image'}`;
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

/**
 * Component to render TinyMCE HTML content with Table of Contents
 * Injects TOC before the first H2, similar to StructuredTextWithTOC
 */
function HtmlContentWithTOC({ html }: { html: string }) {
  const { processedHtml, headings } = processHtmlContent(html);
  
  // Split HTML at the first H2 to inject TOC before it
  const firstH2Match = processedHtml.match(/<h2[^>]*>/i);
  
  if (firstH2Match && firstH2Match.index !== undefined && headings.length > 0) {
    const beforeFirstH2 = processedHtml.slice(0, firstH2Match.index);
    const fromFirstH2 = processedHtml.slice(firstH2Match.index);
    
    return (
      <>
        {beforeFirstH2 && (
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-blockquote:border-blue-500 prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-700 prose-ul:ml-6 prose-ol:ml-6 html-blog-content"
            style={{ '--tw-prose-bullets': '#374151', '--tw-prose-counters': '#374151' } as React.CSSProperties}
            dangerouslySetInnerHTML={{ __html: beforeFirstH2 }} 
          />
        )}
        <TableOfContentsHtml headings={headings} />
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-blockquote:border-blue-500 prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-700 prose-ul:ml-6 prose-ol:ml-6 html-blog-content"
          style={{ '--tw-prose-bullets': '#374151', '--tw-prose-counters': '#374151' } as React.CSSProperties}
          dangerouslySetInnerHTML={{ __html: fromFirstH2 }} 
        />
      </>
    );
  }
  
  // No H2 found, render without TOC
  return (
    <div 
      className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-blockquote:border-blue-500 prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-700 prose-ul:ml-6 prose-ol:ml-6 html-blog-content"
      style={{ '--tw-prose-bullets': '#374151', '--tw-prose-counters': '#374151' } as React.CSSProperties}
      dangerouslySetInnerHTML={{ __html: processedHtml }} 
    />
  );
}

interface InternationalBlogPostProps {
  blogPost: InternationalBlogPostType;
  language: SupportedLanguage;
}

export function InternationalBlogPostView({ blogPost, language }: InternationalBlogPostProps) {
  const dateLocale = DATE_LOCALES[language];
  const ui = LOCALIZED_UI[language];

  const publishedDate = blogPost.publishedDate 
    ? format(new Date(blogPost.publishedDate), 'dd MMMM yyyy', { locale: dateLocale })
    : blogPost._publishedAt 
    ? format(new Date(blogPost._publishedAt), 'dd MMMM yyyy', { locale: dateLocale })
    : null;

  const heroImage = blogPost.featuredImage || blogPost.seo?.image;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 flex justify-center">
            <Breadcrumb 
              items={[
                { name: 'Home', href: '/' },
                { name: LANGUAGE_LABELS[language], href: `/blog/${language}` },
                { name: blogPost.title, href: `/blog/${language}/${blogPost.slug}` },
              ]}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <article className="lg:col-span-3 order-1 lg:order-1">
            <header className="mb-8 text-center">
              <h1 className="text-4xl md:text-5xl tracking-tight text-foreground mb-6 leading-tight">
                {blogPost.title}
              </h1>

              {publishedDate && (
                <div className="mb-8">
                  <time 
                    dateTime={blogPost.publishedDate || blogPost._publishedAt}
                    className="text-muted-foreground font-medium text-lg"
                  >
                    {publishedDate}
                  </time>
                </div>
              )}

              {(blogPost.author || blogPost.reviewer) && (
                <div className="flex flex-col md:flex-row justify-center items-start gap-12 mb-8">
                  {blogPost.author && (
                    <div className="flex flex-col items-center min-w-[200px]">
                      <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">{ui.writtenBy}</p>
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
                      <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">{ui.reviewedBy}</p>
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

            {blogPost.editorType === 'html' && blogPost.bodyHtml ? (
              <HtmlContentWithTOC html={blogPost.bodyHtml} />
            ) : blogPost.body ? (
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-lg prose-blockquote:border-blue-500 prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-700 prose-ul:ml-6 prose-ol:ml-6" style={{ '--tw-prose-bullets': '#374151', '--tw-prose-counters': '#374151' } as React.CSSProperties}>
                <StructuredTextWithTOC content={blogPost.body} />
              </div>
            ) : null}

            <BlogCta />

            {blogPost.relatedPostsInternational && blogPost.relatedPostsInternational.length > 0 && (
              <RelatedPostsInternational 
                posts={blogPost.relatedPostsInternational} 
                language={language}
              />
            )}

            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <Link 
                  href={`/blog/${language}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {ui.backToAllPosts}
                </Link>
                
                {blogPost.updatedAt && (
                  <p className="text-sm text-gray-500">
                    {ui.lastUpdated} {format(new Date(blogPost.updatedAt), 'dd MMM yyyy', { locale: dateLocale })}
                  </p>
                )}
              </div>
            </footer>
          </article>

          <aside className="lg:col-span-1 order-2 lg:order-2">
            <BlogSidebarCta />
          </aside>
        </div>
      </div>
    </div>
  );
}
