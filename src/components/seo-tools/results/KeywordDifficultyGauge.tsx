'use client';

import { translateMetricLabel } from '@/lib/seo-tools/metric-label-translations';

interface KeywordDifficultyGaugeProps {
  score: number;
  keyword: string;
  locale?: string;
}

function getDifficultyColor(score: number): string {
  if (score <= 15) return '#22c55e'; // green-500
  if (score <= 30) return '#84cc16'; // lime-500
  if (score <= 50) return '#eab308'; // yellow-500
  if (score <= 70) return '#f97316'; // orange-500
  return '#ef4444'; // red-500
}

function getDifficultyLabel(score: number): string {
  if (score <= 15) return 'Easy';
  if (score <= 30) return 'Moderate';
  if (score <= 50) return 'Medium';
  if (score <= 70) return 'Hard';
  return 'Very Hard';
}

export function KeywordDifficultyGauge({ score, keyword, locale }: KeywordDifficultyGaugeProps) {
  const color = getDifficultyColor(score);
  const label = translateMetricLabel(getDifficultyLabel(score), locale);

  // SVG semicircle gauge
  const radius = 80;
  const circumference = Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 flex flex-col items-center">
      <h3 className="text-sm font-medium text-gray-500 mb-4">{translateMetricLabel('Keyword Difficulty', locale)}</h3>
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
            {score}
          </text>
          <text x="100" y="105" textAnchor="middle" fill="#6b7280" fontSize="14">
            {label}
          </text>
        </svg>
      </div>
      <p className="text-sm text-gray-600 mt-2 text-center">
        <span className="font-medium text-gray-900">&quot;{keyword}&quot;</span>
      </p>
    </div>
  );
}

export function getDifficultyBadgeColor(score: number): string {
  if (score <= 15) return 'bg-green-100 text-green-700';
  if (score <= 30) return 'bg-lime-100 text-lime-700';
  if (score <= 50) return 'bg-yellow-100 text-yellow-700';
  if (score <= 70) return 'bg-orange-100 text-orange-700';
  return 'bg-red-100 text-red-700';
}
