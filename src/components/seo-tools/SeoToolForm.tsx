'use client';

import { useState } from 'react';
import { SeoToolConfig } from '@/lib/seo-tools/seo-tools-config.types';
import { Search, Loader2 } from 'lucide-react';
import { translateMetricLabel } from '@/lib/seo-tools/metric-label-translations';

interface SeoToolFormProps {
  tool: SeoToolConfig;
  onSubmit: (input: string, options: Record<string, string>, secondaryInput?: string) => void;
  isLoading: boolean;
  locale?: string;
}

export function SeoToolForm({ tool, onSubmit, isLoading, locale }: SeoToolFormProps) {
  const [input, setInput] = useState('');
  const [secondaryInput, setSecondaryInput] = useState('');
  const [options, setOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    for (const opt of tool.options) {
      defaults[opt.name] = opt.default;
    }
    return defaults;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSubmit(input.trim(), options, secondaryInput.trim() || undefined);
  };

  const handleOptionChange = (name: string, value: string) => {
    setOptions(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-4">
      <div className="space-y-4">
        {/* Primary input */}
        <div>
          <label htmlFor="seo-input" className="block text-sm font-medium text-gray-700 mb-2">
            {tool.inputLabel}
          </label>
          <div className="relative">
            <input
              id="seo-input"
              type={tool.inputType === 'url' ? 'url' : 'text'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={tool.inputPlaceholder}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
              disabled={isLoading}
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Secondary input (for keyword-url type) */}
        {tool.inputType === 'keyword-url' && tool.secondaryInputLabel && (
          <div>
            <label htmlFor="seo-secondary-input" className="block text-sm font-medium text-gray-700 mb-2">
              {tool.secondaryInputLabel}
            </label>
            <input
              id="seo-secondary-input"
              type="text"
              value={secondaryInput}
              onChange={(e) => setSecondaryInput(e.target.value)}
              placeholder={tool.secondaryInputPlaceholder || ''}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
              disabled={isLoading}
            />
          </div>
        )}

        {/* Options row */}
        {tool.options.length > 0 && (
          <div className="flex flex-wrap gap-4">
            {tool.options.map((opt) => (
              <div key={opt.name} className="flex-1 min-w-[200px]">
                <label htmlFor={`opt-${opt.name}`} className="block text-sm font-medium text-gray-700 mb-2">
                  {opt.label}
                </label>
                <select
                  id={`opt-${opt.name}`}
                  value={options[opt.name] || opt.default}
                  onChange={(e) => handleOptionChange(opt.name, e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-shadow"
                  disabled={isLoading}
                >
                  {opt.choices.map((choice) => (
                    <option key={choice.value} value={choice.value}>
                      {choice.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>{translateMetricLabel('Analyzing...', locale)}</span>
          </>
        ) : (
          <span>{tool.buttonText}</span>
        )}
      </button>
    </form>
  );
}
