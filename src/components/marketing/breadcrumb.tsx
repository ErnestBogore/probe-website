import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav className="flex font-sans" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        {items.map((item, index) => (
          <li key={item.name} className="inline-flex items-center">
            {index > 0 && (
              <ChevronRight className="w-3 h-3 text-gray-400 mx-1" />
            )}
            {index < items.length - 1 ? (
              <Link href={item.href} className="text-xs font-medium text-gray-700 hover:text-blue-600 tracking-tight">
                {item.name}
              </Link>
            ) : (
              <span className="text-xs font-medium text-gray-500 truncate max-w-xs md:max-w-sm tracking-tight">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
