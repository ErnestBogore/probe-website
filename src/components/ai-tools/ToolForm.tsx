'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { ToolConfig, ToolOption } from '@/lib/ai-tools/tools-config';

interface ToolFormProps {
  tool: ToolConfig;
  onSubmit: (input: string, options: Record<string, string>) => void;
  isLoading: boolean;
}

export function ToolForm({ tool, onSubmit, isLoading }: ToolFormProps) {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    tool.options.forEach((opt) => {
      defaults[opt.name] = opt.default || opt.choices[0];
    });
    return defaults;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSubmit(input, options);
  };

  const handleOptionChange = (name: string, value: string) => {
    setOptions((prev) => ({ ...prev, [name]: value }));
  };

  const renderOption = (option: ToolOption) => {
    if (option.type === 'radio') {
      return (
        <div className="flex flex-col gap-2">
          {option.choices.map((choice) => (
            <label key={choice} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={option.name}
                value={choice}
                checked={options[option.name] === choice}
                onChange={(e) => handleOptionChange(option.name, e.target.value)}
                disabled={isLoading}
                className="w-4 h-4 text-orange-500 border-gray-300 focus:ring-orange-500"
              />
              <span className="text-sm text-gray-700">{choice}</span>
            </label>
          ))}
        </div>
      );
    }

    return (
      <select
        value={options[option.name]}
        onChange={(e) => handleOptionChange(option.name, e.target.value)}
        className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 bg-white text-sm"
        disabled={isLoading}
      >
        {option.choices.map((choice) => (
          <option key={choice} value={choice}>
            {choice}
          </option>
        ))}
      </select>
    );
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="p-6 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Input Section */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-900 mb-2">
              {tool.inputLabel}
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={tool.inputPlaceholder}
              maxLength={tool.maxLength}
              className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-400"
              disabled={isLoading}
            />
            <div className="flex justify-end mt-2">
              <span className="text-sm text-gray-500">
                {input.length} / {tool.maxLength}
              </span>
            </div>
          </div>

          {/* Options Section */}
          {tool.options.length > 0 && (
            <div className="lg:w-48 space-y-5">
              {tool.options.map((option) => (
                <div key={option.name}>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    {option.label}
                  </label>
                  {renderOption(option)}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="px-6 pb-6 lg:px-8 lg:pb-8">
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="w-full lg:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          {isLoading ? 'Generating...' : tool.buttonText}
        </button>
      </div>
    </form>
  );
}
