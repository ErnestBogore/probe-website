'use client';

import { LucideIcon } from 'lucide-react';

export interface MetricCardData {
  label: string;
  value: string | number;
  icon?: LucideIcon;
  colorClass?: string;
}

interface MetricsCardGridProps {
  metrics: MetricCardData[];
}

export function MetricsCardGrid({ metrics }: MetricsCardGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;
        return (
          <div
            key={metric.label}
            className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col gap-1"
          >
            <div className="flex items-center gap-2">
              {Icon && <Icon className="w-4 h-4 text-gray-400" />}
              <span className="text-sm text-gray-500">{metric.label}</span>
            </div>
            <span className={`text-2xl font-bold ${metric.colorClass || 'text-gray-900'}`}>
              {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
