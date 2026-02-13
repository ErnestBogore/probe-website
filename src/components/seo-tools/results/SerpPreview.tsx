'use client';

import { translateMetricLabel } from '@/lib/seo-tools/metric-label-translations';

interface SerpItem {
  position: number;
  title: string;
  url: string;
  domain: string;
  description: string;
}

interface SerpPreviewProps {
  items: SerpItem[];
  keyword: string;
  locale?: string;
}

export function SerpPreview({ items, keyword, locale }: SerpPreviewProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium text-gray-500">
        {translateMetricLabel('Google results for', locale)} <span className="font-semibold text-gray-900">&ldquo;{keyword}&rdquo;</span>
      </h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item.position}
            className="bg-white rounded-xl border border-gray-200 p-4 hover:border-purple-200 transition-colors"
          >
            <div className="flex items-start gap-3">
              {/* Position badge */}
              <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-purple-600">{item.position}</span>
              </div>

              <div className="flex-1 min-w-0">
                {/* Breadcrumb / URL line */}
                <div className="flex items-center gap-1 text-sm text-green-700 truncate mb-0.5">
                  <span className="truncate">{item.url}</span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-medium text-blue-700 hover:underline line-clamp-1 mb-1">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h4>

                {/* Description */}
                {item.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
