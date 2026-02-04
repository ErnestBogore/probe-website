'use client';

import { useState } from 'react';
import { Copy, Check, RefreshCw } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ToolOutputProps {
  output: string;
  isLoading: boolean;
  onReset: () => void;
  locale?: string;
}

const localeStrings: Record<string, { generatedContent: string; generating: string; copyToClipboard: string; clearAndStartOver: string }> = {
  en: {
    generatedContent: 'Generated Content',
    generating: 'Generating content...',
    copyToClipboard: 'Copy to clipboard',
    clearAndStartOver: 'Clear and start over',
  },
  fr: {
    generatedContent: 'Contenu Généré',
    generating: 'Génération en cours...',
    copyToClipboard: 'Copier dans le presse-papiers',
    clearAndStartOver: 'Effacer et recommencer',
  },
  es: {
    generatedContent: 'Contenido Generado',
    generating: 'Generando contenido...',
    copyToClipboard: 'Copiar al portapapeles',
    clearAndStartOver: 'Borrar y empezar de nuevo',
  },
  de: {
    generatedContent: 'Generierter Inhalt',
    generating: 'Inhalt wird generiert...',
    copyToClipboard: 'In die Zwischenablage kopieren',
    clearAndStartOver: 'Löschen und neu beginnen',
  },
  it: {
    generatedContent: 'Contenuto Generato',
    generating: 'Generazione in corso...',
    copyToClipboard: 'Copia negli appunti',
    clearAndStartOver: 'Cancella e ricomincia',
  },
  pt: {
    generatedContent: 'Conteúdo Gerado',
    generating: 'Gerando conteúdo...',
    copyToClipboard: 'Copiar para área de transferência',
    clearAndStartOver: 'Limpar e recomeçar',
  },
  ja: {
    generatedContent: '生成されたコンテンツ',
    generating: 'コンテンツを生成中...',
    copyToClipboard: 'クリップボードにコピー',
    clearAndStartOver: 'クリアしてやり直す',
  },
  ko: {
    generatedContent: '생성된 콘텐츠',
    generating: '콘텐츠 생성 중...',
    copyToClipboard: '클립보드에 복사',
    clearAndStartOver: '지우고 다시 시작',
  },
};

export function ToolOutput({ output, isLoading, onReset, locale = 'en' }: ToolOutputProps) {
  const strings = localeStrings[locale] || localeStrings.en;
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
        <h3 className="font-semibold text-gray-900">{strings.generatedContent}</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={handleCopy}
            disabled={!output || isLoading}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-200 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            title={strings.copyToClipboard}
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
            title={strings.clearAndStartOver}
          >
            <RefreshCw className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-6 lg:p-8">
        {isLoading && !output ? (
          <div className="flex items-center gap-3 text-gray-500">
            <div className="w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full animate-spin" />
            <span>{strings.generating}</span>
          </div>
        ) : (
          <div className="prose prose-gray max-w-none prose-headings:text-gray-900 prose-headings:font-semibold prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:marker:text-purple-600 prose-table:border-collapse prose-table:w-full prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
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
