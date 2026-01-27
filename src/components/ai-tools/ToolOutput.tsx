'use client';

import { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ToolOutputProps {
  output: string;
  isLoading: boolean;
  onReset: () => void;
}

export function ToolOutput({ output, isLoading, onReset }: ToolOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!output && !isLoading) {
    return null;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
        <h3 className="font-semibold text-gray-900">Generated Content</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            disabled={!output || isLoading}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title="Copy to clipboard"
          >
            {copied ? (
              <Check className="w-5 h-5 text-green-600" />
            ) : (
              <Copy className="w-5 h-5" />
            )}
          </button>
          <button
            onClick={onReset}
            disabled={isLoading}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title="Clear and start over"
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {isLoading && !output ? (
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
            <span>Generating content...</span>
          </div>
        ) : (
          <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:marker:text-purple-600">
            <ReactMarkdown>
              {output}
            </ReactMarkdown>
            {isLoading && (
              <span className="inline-block w-2 h-5 bg-purple-600 animate-pulse ml-1" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
