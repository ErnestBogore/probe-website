'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CopyButtonProps {
  textToCopy: string;
}

export const CopyButton = ({ textToCopy }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 transition-colors disabled:opacity-50"
      disabled={isCopied}
      aria-label="Copy prompt"
    >
      {isCopied ? <Check size={16} /> : <Copy size={16} />}
    </button>
  );
}
