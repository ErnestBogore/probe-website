'use client';

import { translateMetricLabel } from '@/lib/seo-tools/metric-label-translations';

interface DomainAuthorityBadgeProps {
  rank: number;
  domain: string;
  label?: string;
  locale?: string;
}

function getScoreColor(score: number): string {
  if (score >= 80) return '#22c55e'; // green-500
  if (score >= 60) return '#3b82f6'; // blue-500
  if (score >= 40) return '#eab308'; // yellow-500
  if (score >= 20) return '#f97316'; // orange-500
  return '#6b7280'; // gray-500
}

function getScoreLabel(score: number): string {
  if (score >= 80) return 'Very Strong';
  if (score >= 60) return 'Strong';
  if (score >= 40) return 'Moderate';
  if (score >= 20) return 'Developing';
  return 'Low';
}

export function DomainAuthorityBadge({ rank, domain, label: customLabel, locale }: DomainAuthorityBadgeProps) {
  const color = getScoreColor(rank);
  const label = translateMetricLabel(getScoreLabel(rank), locale);
  const heading = translateMetricLabel(customLabel || 'Domain Score', locale);

  // SVG semicircle gauge (same style as KD gauge)
  const radius = 80;
  const circumference = Math.PI * radius;
  const progress = (rank / 100) * circumference;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
      <h3 className="text-sm font-medium text-gray-500 mb-4">{heading}</h3>
      <div className="relative w-48 h-28">
        <svg viewBox="0 0 200 110" className="w-full h-full">
          {/* Background arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="12"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
          />
          {/* Score text */}
          <text x="100" y="85" textAnchor="middle" className="text-4xl font-bold" fill={color} fontSize="36">
            {rank}
          </text>
          <text x="100" y="105" textAnchor="middle" fill="#6b7280" fontSize="14">
            {label}
          </text>
        </svg>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-center">
        <span className="font-medium text-gray-900">{domain}</span>
      </p>
    </div>
  );
}
