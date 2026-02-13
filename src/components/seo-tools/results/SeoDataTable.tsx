'use client';

import { useState, useMemo } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { TableColumnDef } from '@/lib/seo-tools/seo-tools-config.types';
import { getDifficultyBadgeColor } from './KeywordDifficultyGauge';
import { ExportButton } from './ExportButton';
import { translateMetricLabel } from '@/lib/seo-tools/metric-label-translations';

interface SeoDataTableProps {
  data: Record<string, unknown>[];
  columns: TableColumnDef[];
  filename?: string;
  locale?: string;
}

type SortDir = 'asc' | 'desc';

export function SeoDataTable({ data, columns, filename, locale }: SeoDataTableProps) {
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>('desc');
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const sortedData = useMemo(() => {
    if (!sortKey) return data;
    return [...data].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];
      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
      }
      const aStr = String(aVal);
      const bStr = String(bVal);
      return sortDir === 'asc' ? aStr.localeCompare(bStr) : bStr.localeCompare(aStr);
    });
  }, [data, sortKey, sortDir]);

  const totalPages = Math.ceil(sortedData.length / pageSize);
  const paginatedData = sortedData.slice(page * pageSize, (page + 1) * pageSize);

  const handleSort = (key: string) => {
    if (sortKey === key) {
      setSortDir(prev => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('desc');
    }
    setPage(0);
  };

  const renderCell = (row: Record<string, unknown>, col: TableColumnDef) => {
    const value = row[col.key];
    if (value === null || value === undefined) return <span className="text-gray-400">—</span>;

    switch (col.type) {
      case 'number':
        return <span>{Number(value).toLocaleString()}</span>;
      case 'currency':
        return <span>${Number(value).toFixed(2)}</span>;
      case 'difficulty': {
        const score = Number(value);
        return (
          <span className={`inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium ${getDifficultyBadgeColor(score)}`}>
            {score}
          </span>
        );
      }
      case 'url':
        return (
          <a
            href={String(value)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 hover:underline truncate max-w-[300px] block"
          >
            {String(value)}
          </a>
        );
      case 'badge':
        return (
          <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-700">
            {String(value)}
          </span>
        );
      default:
        return <span className="truncate max-w-[300px] block">{String(value)}</span>;
    }
  };

  if (data.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{data.length} {translateMetricLabel('results', locale)}</p>
        <ExportButton data={data} columns={columns} filename={filename} locale={locale} />
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                      col.sortable ? 'cursor-pointer hover:text-gray-700 select-none' : ''
                    }`}
                    onClick={() => col.sortable && handleSort(col.key)}
                  >
                    <div className="flex items-center gap-1">
                      {col.label}
                      {col.sortable && sortKey === col.key && (
                        sortDir === 'asc'
                          ? <ChevronUp className="w-3 h-3" />
                          : <ChevronDown className="w-3 h-3" />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {paginatedData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-gray-900 whitespace-nowrap">
                      {renderCell(row, col)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">{translateMetricLabel('Rows per page:', locale)}</span>
              <select
                value={pageSize}
                onChange={(e) => { setPageSize(Number(e.target.value)); setPage(0); }}
                className="text-sm border border-gray-300 rounded-md px-2 py-1 bg-white"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">
                {page * pageSize + 1}–{Math.min((page + 1) * pageSize, sortedData.length)} of {sortedData.length}
              </span>
              <button
                onClick={() => setPage(p => Math.max(0, p - 1))}
                disabled={page === 0}
                className="px-2 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                {translateMetricLabel('Prev', locale)}
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                disabled={page >= totalPages - 1}
                className="px-2 py-1 text-sm border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
              >
                {translateMetricLabel('Next', locale)}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
