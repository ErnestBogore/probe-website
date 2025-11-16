"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { useEffect, useRef } from "react";

const features = [
  "3 answer engines (Claude, Perplexity, ChatGPT)",
  "25 tracked prompts (daily)/2250 answers",
  "50 ad hoc searches/month",
  "Unlimited competitor tracking",
  "AI Traffic Analytics (GA4 integration)",
  "Onboarding workshop (15 minutes)",
  "Priority support",
  "Unlimited seats"
];

interface RankingsPopupProps {
  isOpen: boolean;
  onClose: () => void;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
}

export const RankingsPopup = ({ isOpen, onClose, triggerRef }: RankingsPopupProps) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    const handleScroll = () => {
      onClose();
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('scroll', handleScroll, true);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose, triggerRef]);

  if (!isOpen) return null;

  return (
    <div 
      ref={popupRef}
      className="absolute top-full right-0 mt-2 w-96 z-50"
      style={{
        transform: triggerRef.current ? `translateX(${triggerRef.current.offsetWidth - 384}px)` : 'translateX(-100%)'
      }}
    >
      <Card className="border-2 border-purple-200 shadow-2xl bg-white rounded-2xl overflow-hidden">
        <div className="relative">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          <div className="p-6">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                The Most Comprehensive AI Visibility Tool
              </div>
            </div>

            {/* CTA Button */}
            <Button className="w-full mb-6 bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full text-lg font-semibold">
              Show Me My AI Rankings →
            </Button>
            
            <div className="text-center mb-6">
              <span className="text-sm text-gray-600 font-medium">
                Cancel anytime. No questions asked!
              </span>
            </div>

            {/* Features */}
            <div className="mb-4">
              <h4 className="font-bold text-gray-900 mb-4 text-base">What's included:</h4>
            </div>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-purple-600" />
                  </div>
                  <span className="text-gray-800 text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
