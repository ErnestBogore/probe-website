'use client';

import { Download } from 'lucide-react';
import { translateMetricLabel } from '@/lib/seo-tools/metric-label-translations';

interface ExportButtonProps {
  data: Record<string, unknown>[];
  columns: { key: string; label: string }[];
  filename?: string;
  locale?: string;
}

export function ExportButton({ data, columns, filename = 'seo-data', locale }: ExportButtonProps) {
  const handleExport = () => {
    if (data.length === 0) return;

    const headers = columns.map(c => c.label);
    const rows = data.map(row =>
      columns.map(col => {
        const val = row[col.key];
        if (val === null || val === undefined) return '';
        // Escape commas and quotes in CSV
        const str = String(val);
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
          return `"${str.replace(/"/g, '""')}"`;
        }
        return str;
      })
    );

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${filename}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  if (data.length === 0) return null;

  return (
    <button
      onClick={handleExport}
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <Download className="w-4 h-4" />
      {translateMetricLabel('Export CSV', locale)}
    </button>
  );
}
