'use client';

import { SeoToolConfig } from '@/lib/seo-tools/seo-tools-config.types';
import { MetricsCardGrid, MetricCardData } from './results/MetricsCardGrid';
import { SeoDataTable } from './results/SeoDataTable';
import { KeywordDifficultyGauge } from './results/KeywordDifficultyGauge';
import { DomainAuthorityBadge } from './results/DomainAuthorityBadge';
import { SerpPreview } from './results/SerpPreview';
import { Loader2, AlertCircle } from 'lucide-react';
import { Search, Link, BarChart3, Globe, TrendingUp } from 'lucide-react';
import { translateMetricLabel } from '@/lib/seo-tools/metric-label-translations';

export interface SerpItemData {
  position: number;
  title: string;
  url: string;
  domain: string;
  description: string;
}

export interface SeoToolResultData {
  metrics?: MetricCardData[];
  tableData?: Record<string, unknown>[];
  // For keyword difficulty gauge
  difficultyScore?: number;
  difficultyKeyword?: string;
  // For domain authority badge
  domainRank?: number;
  domainName?: string;
  // For SERP checker
  serpItems?: SerpItemData[];
  keyword?: string;
}

interface SeoToolResultsProps {
  tool: SeoToolConfig;
  data: SeoToolResultData | null;
  isLoading: boolean;
  error: string | null;
  locale?: string;
}

export function SeoToolResults({ tool, data, isLoading, error, locale }: SeoToolResultsProps) {
  if (!isLoading && !data && !error) return null;

  // Translate metric labels for display while keeping English keys for icon mapping
  const translateMetrics = (metrics: MetricCardData[]): MetricCardData[] => {
    return metrics.map(m => ({
      ...m,
      label: translateMetricLabel(m.label, locale),
    }));
  };

  return (
    <div className="space-y-6">
      {/* Loading state */}
      {isLoading && (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 flex flex-col items-center justify-center gap-3">
          <Loader2 className="w-8 h-8 text-purple-600 animate-spin" />
          <p className="text-gray-500 text-sm">{translateMetricLabel('Fetching data...', locale)}</p>
        </div>
      )}

      {/* Error state */}
      {error && !isLoading && (
        <div className="bg-red-50 rounded-2xl border border-red-200 p-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-red-800 font-medium">{translateMetricLabel('Something went wrong', locale)}</p>
            <p className="text-red-600 text-sm mt-1">{error}</p>
          </div>
        </div>
      )}

      {/* Results */}
      {data && !isLoading && (
        <>
          {/* Domain Authority specific layout */}
          {tool.resultType === 'domain-authority' && data.domainRank !== undefined && data.domainName && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
              <DomainAuthorityBadge rank={data.domainRank} domain={data.domainName} locale={locale} />
              {data.metrics && translateMetrics(data.metrics).map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center"
                >
                  <span className="text-sm font-medium text-gray-500 mb-4">{metric.label}</span>
                  <div className="flex-1 flex items-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Keyword Difficulty specific layout */}
          {tool.resultType === 'keyword-difficulty' && data.difficultyScore !== undefined && data.difficultyKeyword && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              <KeywordDifficultyGauge score={data.difficultyScore} keyword={data.difficultyKeyword} locale={locale} />
              {data.metrics && translateMetrics(data.metrics).map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center"
                >
                  <span className="text-sm font-medium text-gray-500 mb-4">{metric.label}</span>
                  <div className="flex-1 flex items-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* SERP results layout */}
          {tool.resultType === 'serp-results' && data.serpItems && data.serpItems.length > 0 && (
            <>
              {data.metrics && (
                <MetricsCardGrid metrics={translateMetrics(addMetricIcons(data.metrics, tool.resultType))} />
              )}
              <SerpPreview items={data.serpItems} keyword={data.keyword || ''} locale={locale} />
            </>
          )}

          {/* Rank position layout (standard metrics + table) */}
          {tool.resultType === 'rank-position' && data.metrics && (
            <MetricsCardGrid metrics={translateMetrics(addMetricIcons(data.metrics, tool.resultType))} />
          )}

          {/* AI Visibility layout (gauge + metrics like domain-authority) */}
          {tool.resultType === 'ai-visibility' && data.domainRank !== undefined && data.domainName && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
              <DomainAuthorityBadge rank={data.domainRank} domain={data.domainName} label="Visibility Score" locale={locale} />
              {data.metrics && translateMetrics(data.metrics).map((metric) => (
                <div
                  key={metric.label}
                  className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center text-center"
                >
                  <span className="text-sm font-medium text-gray-500 mb-4">{metric.label}</span>
                  <div className="flex-1 flex items-center">
                    <span className="text-5xl font-bold text-gray-900">
                      {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Standard metrics (for non-special layouts) */}
          {!['domain-authority', 'keyword-difficulty', 'serp-results', 'rank-position', 'ai-visibility'].includes(tool.resultType) && data.metrics && (
            <MetricsCardGrid metrics={translateMetrics(addMetricIcons(data.metrics, tool.resultType))} />
          )}

          {/* Data table */}
          {data.tableData && data.tableData.length > 0 && tool.tableColumns.length > 0 && (
            <SeoDataTable
              data={data.tableData}
              columns={tool.tableColumns}
              filename={tool.slug}
              locale={locale}
            />
          )}
        </>
      )}
    </div>
  );
}

function addMetricIcons(metrics: MetricCardData[], resultType: string): MetricCardData[] {
  const iconMap: Record<string, Record<string, typeof Search>> = {
    'keyword-list': {
      'Total Keywords': Search,
      'Avg. Volume': BarChart3,
      'Avg. Difficulty': BarChart3,
    },
    'backlink-list': {
      'Total Backlinks': Link,
      'Referring Domains': Globe,
    },
    'serp-results': {
      'Total Results': Globe,
      'Organic Results': Search,
    },
    'rank-position': {
      'Total Keywords': Search,
      'Top 3': TrendingUp,
      'Top 10': TrendingUp,
      'Top 50': BarChart3,
    },
    'traffic-overview': {
      'Organic Traffic': TrendingUp,
      'Paid Traffic': BarChart3,
      'Total Keywords': Search,
      'Traffic Value': Globe,
    },
    'broken-links': {
      'Page Score': BarChart3,
      'Issues Found': Search,
      'Internal Links': Link,
      'External Links': Link,
    },
    'ai-visibility': {
      'AI Overview Exposure': Globe,
      'Keywords with AI Overviews': Search,
      'Traffic at Risk': TrendingUp,
    },
  };

  const icons = iconMap[resultType];
  if (!icons) return metrics;

  return metrics.map(m => ({
    ...m,
    icon: icons[m.label] || m.icon,
  }));
}
