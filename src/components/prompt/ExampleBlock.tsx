'use client';

import { useState } from 'react';
import { StructuredText } from 'react-datocms/structured-text';
import { User, Bot } from 'lucide-react';
import { DatoCMSStructuredText } from '@/types/datocms';

interface ExampleBlockProps {
  exampleInput: DatoCMSStructuredText;
  exampleOutput: DatoCMSStructuredText;
}

export function ExampleBlock({ exampleInput, exampleOutput }: ExampleBlockProps) {
  const [activeTab, setActiveTab] = useState('prompt');

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          <button
            onClick={() => setActiveTab('prompt')}
            className={`w-1/2 py-3 px-1 text-center border-b-2 font-medium text-sm transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'prompt'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <User size={16} />
            The Prompt in Action
          </button>
          <button
            onClick={() => setActiveTab('response')}
            className={`w-1/2 py-3 px-1 text-center border-b-2 font-medium text-sm transition-colors flex items-center justify-center gap-2 ${
              activeTab === 'response'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <Bot size={16} />
            The AI&apos;s Response
          </button>
        </nav>
      </div>

      <div className="p-6">
        {activeTab === 'prompt' ? (
          <div className="prose prose-lg max-w-none bg-gray-50 p-4 rounded-md">
            <StructuredText data={exampleInput} />
          </div>
        ) : (
          <div className="prose prose-lg max-w-none bg-green-50/50 p-4 rounded-md">
            <StructuredText data={exampleOutput} />
          </div>
        )}
      </div>
    </div>
  );
}
