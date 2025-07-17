/**
 * Table of Contents Component
 * 
 * Automatically extracts headings from StructuredText content and generates
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

interface TableOfContentsProps {
  content: unknown; // StructuredText content
  title?: string;
  className?: string;
  isCollapsible?: boolean;
  defaultCollapsed?: boolean;
}

/**
 * Extracts headings from StructuredText content
 */
function extractHeadings(content: unknown): TOCItem[] {
  // Type guard for expected structure
  if (
    !content ||
    typeof content !== 'object' ||
    !('value' in content) ||
    typeof (content as { value: unknown }).value !== 'object' ||
    !('document' in (content as { value: { document: unknown } }).value) ||
    typeof (content as { value: { document: unknown } }).value.document !== 'object' ||
    !('children' in (content as { value: { document: { children: unknown } } }).value.document)
  )
    return [];

  const headings: TOCItem[] = [];

  function traverseNodes(nodes: unknown[]) {
    nodes.forEach((node) => {
      if (
        node &&
        typeof node === 'object' &&
        'type' in node &&
        (node as { type: string }).type === 'heading' &&
        'level' in node &&
        typeof (node as { level: number }).level === 'number' &&
        (node as { level: number }).level >= 2 &&
        (node as { level: number }).level <= 4
      ) {
        // Extract text from heading children
        const text = extractTextFromNode(node);
        if (text) {
          const id = generateAnchorId(text);
          headings.push({
            id,
            text,
            level: (node as { level: number }).level
          });
        }
      }
      // Recursively traverse children
      if (node && typeof node === 'object' && 'children' in node) {
        traverseNodes((node as { children: unknown[] }).children);
      }
    });
  }

  traverseNodes((content as { value: { document: { children: unknown[] } } }).value.document.children);
  return headings;
}

/**
 * Extracts plain text from a heading node
 */
function extractTextFromNode(node: unknown): string {
  if (!node || typeof node !== 'object' || !('children' in node)) return '';
  return ((node as { children: unknown[] }).children as unknown[])
    .map((child: unknown) => {
              if (child && typeof child === 'object' && 'type' in child && (child as { type: string }).type === 'span') {
          return (child as { value?: string }).value || '';
        }
      if (child && typeof child === 'object' && 'children' in child) {
        return extractTextFromNode(child);
      }
      return '';
    })
    .join('')
    .trim();
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

export function TableOfContents({
  content,
  title = "Table of Contents",
  className = "",
  isCollapsible = true,
  defaultCollapsed = false
}: TableOfContentsProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  
  const headings = useMemo(() => extractHeadings(content), [content]);

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
                key={`toc-${heading.id}-${index}`}
                onClick={() => scrollToAnchor(heading.id)}
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

// Export the utility functions for use in other components
export { extractHeadings }; 