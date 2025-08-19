/**
 * Simple Table Component for Blog Posts
 * 
 * Renders tables with responsive design and clean styling
 */

import React from 'react';

interface TableData {
  columns: string[];
  data: Record<string, string>[];
}

interface TableProps {
  data: TableData;
  className?: string;
}

export function Table({ data, className = '' }: TableProps) {
  if (!data?.columns || !data?.data || data.columns.length === 0) {
    return null;
  }

  const { columns, data: rows } = data;

  return (
    <div className={`my-8 overflow-x-auto ${className}`}>
      <div className="min-w-full inline-block align-middle">
        <div className="overflow-hidden border border-gray-200 rounded-2xl shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={`header-${index}-${column}`}
                    scope="col"
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rows.map((row, rowIndex) => (
                <tr 
                  key={`row-${rowIndex}`}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={`cell-${rowIndex}-${colIndex}-${column}`}
                      className="px-6 py-4 text-sm text-black/70 leading-relaxed"
                    >
                      {row[column] || ''}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
