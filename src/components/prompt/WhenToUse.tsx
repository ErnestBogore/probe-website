'use client';

import { StructuredText, renderNodeRule } from 'react-datocms/structured-text';
import { isList, isListItem, isParagraph } from 'datocms-structured-text-utils';
import { CheckCircle, Target } from 'lucide-react';
import { DatoCMSStructuredText } from '@/types/datocms';

const customNodeRules = [
  renderNodeRule(isList, ({ children, key }) => (
    <div key={key} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">{children}</div>
  )),
  renderNodeRule(isListItem, ({ children, key }) => (
    <div key={key} className="bg-white/50 rounded-lg p-4 flex items-center gap-3 border border-purple-200/50 shadow-sm">
      <CheckCircle size={16} className="text-purple-500 flex-shrink-0" />
      {children}
    </div>
  )),
  renderNodeRule(isParagraph, ({ children, key }) => (
    <p key={key} className="text-purple-900/80 font-medium m-0">{children}</p>
  )),
];

export function WhenToUse({ data }: { data: DatoCMSStructuredText }) {
  return (
    <div className="bg-purple-50/70 border border-purple-200/70 rounded-lg p-6">
      <h2 className="font-bold text-lg text-purple-900 mb-3 flex items-center gap-2">
        <Target size={20} className="text-purple-500" />
        When to use this prompt
      </h2>
      <div className="prose text-sm max-w-none">
        <StructuredText
          data={data}
          customNodeRules={customNodeRules}
        />
      </div>
    </div>
  );
}
