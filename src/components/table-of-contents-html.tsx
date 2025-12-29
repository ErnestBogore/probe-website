/**
 * Table of Contents Component for HTML Content (TinyMCE)
 * 
 * Extracts headings from HTML string content and generates
 * a collapsible table of contents with smooth anchor navigation.
 */

'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronRight, List } from 'lucide-react';
import { generateAnchorId } from '@/lib/anchor-utils';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsHtmlProps {
  headings: TOCItem[];
  title?: string;
  className?: string;
  isCollapsible?: boolean;
  defaultCollapsed?: boolean;
}

/**
 * Extracts H2 headings from HTML string content
 */
export function extractHeadingsFromHtml(html: string): TOCItem[] {
  const headings: TOCItem[] = [];
  
  // Match H2 tags and extract their text content
  const h2Regex = /<h2[^>]*>([\s\S]*?)<\/h2>/gi;
  let match;
  
  while ((match = h2Regex.exec(html)) !== null) {
    // Strip HTML tags from the heading content to get plain text
    const text = match[1]
      .replace(/<[^>]*>/g, '') // Remove HTML tags
      .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
      .replace(/&amp;/g, '&')  // Replace &amp; with &
      .replace(/&lt;/g, '<')   // Replace &lt; with <
      .replace(/&gt;/g, '>')   // Replace &gt; with >
      .replace(/&quot;/g, '"') // Replace &quot; with "
      .trim();
    
    if (text) {
      const id = generateAnchorId(text);
      headings.push({
        id,
        text,
        level: 2
      });
    }
  }
  
  return headings;
}

/**
 * Processes HTML to add anchor IDs to H2 headings
 */
export function addAnchorIdsToHtml(html: string): string {
  return html.replace(/<h2([^>]*)>([\s\S]*?)<\/h2>/gi, (match, attrs, content) => {
    // Extract text content for generating ID
    const text = content
      .replace(/<[^>]*>/g, '')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
    
    if (text) {
      const id = generateAnchorId(text);
      // Check if id attribute already exists
      if (attrs.includes('id=')) {
        return match; // Keep existing ID
      }
      return `<h2${attrs} id="${id}">${content}</h2>`;
    }
    return match;
  });
}

/**
 * Smooth scroll to anchor
 */
function scrollToAnchor(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const offset = 100; // Account for fixed headers
    const elementPosition = element.offsetTop - offset;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
}

export function TableOfContentsHtml({
  headings,
  title = "Table of Contents",
  className = "",
  isCollapsible = true,
  defaultCollapsed = false
}: TableOfContentsHtmlProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  // Don't render if no headings found
  if (headings.length === 0) {
    return null;
  }

  const toggleCollapse = () => {
    if (isCollapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  return (
    <div className={`bg-gray-50 border border-gray-200 rounded-lg p-6 my-8 ${className}`}>
      {/* Header */}
      <div 
        className={`flex items-center justify-between mb-4 ${isCollapsible ? 'cursor-pointer' : ''}`}
        onClick={toggleCollapse}
      >
        <div className="flex items-center space-x-2">
          <List className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
        
        {isCollapsible && (
          <button
            className="p-1 rounded-md hover:bg-gray-200 transition-colors"
            aria-label={isCollapsed ? 'Expand table of contents' : 'Collapse table of contents'}
          >
            {isCollapsed ? (
              <ChevronRight className="w-4 h-4 text-gray-600" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-600" />
            )}
          </button>
        )}
      </div>

      {/* Content */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
        isCollapsed ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'
      }`}>
        <nav className="space-y-2">
          {headings.map((heading, index) => {
            const indentClass = heading.level === 3 ? 'ml-4' : heading.level === 4 ? 'ml-8' : '';
            
            return (
              <button
                key={`toc-html-${heading.id}-${index}`}
                onClick={(e) => {
                  e.stopPropagation();
                  scrollToAnchor(heading.id);
                }}
                className={`block w-full text-left p-2 rounded-md text-sm hover:bg-gray-200 transition-colors group ${indentClass}`}
              >
                <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                  {heading.text}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
