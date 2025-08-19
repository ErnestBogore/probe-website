/**
 * Takeaway Component for Blog Posts
 * 
 * Renders highlighted takeaway boxes with purple styling
 */

import React from 'react';

interface TakeawayProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export function Takeaway({ children, title = "Takeaway:", className = '' }: TakeawayProps) {
  return (
    <div className={`my-8 p-6 bg-purple-50 border-l-4 border-purple-600 rounded-r-lg shadow-sm ${className}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
            <svg 
              className="w-3 h-3 text-white" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="ml-4 flex-1">
          <h4 className="text-lg font-semibold text-purple-900 mb-2">
            {title}
          </h4>
          <div className="text-gray-700 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Takeaway;
