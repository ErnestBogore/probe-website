"use client";

import { TrendingUp, DollarSign, Infinity, ShoppingCart, Calendar } from "lucide-react";

export const AffiliateBenefits = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900 mb-4">Why promote Analyze AI to your audience?</h2>
          <p className="text-lg text-gray-600">Make money by helping your audience get traffic from ChatGPT, Claude, and other major answer engines.</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Fast-growing platform */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Fast-growing platform</h3>
            </div>
            <p className="text-gray-600">With AI-driven search referral traffic becoming a major growth channel, Analyze AI is growing by 20% month over month. As you refer more clients into our ecosystem, your earnings scale with our growth.</p>
          </div>

          {/* High earning potential */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">High earning potential</h3>
            </div>
            <p className="text-gray-600">We offer generous lifetime commissions for every paying client you refer. Just multiply $30 by how many clients you refer every month.</p>
          </div>

          {/* Unlimited earnings */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Infinity className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Unlimited earnings</h3>
            </div>
            <p className="text-gray-600">There's absolutely no cap. Every qualified referral you bring in keeps paying you commission for the duration of their subscription. More referrals = more income, period.</p>
          </div>
          </div>

          {/* Second row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Easy-to-sell product */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <ShoppingCart className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Easy-to-sell product</h3>
            </div>
            <p className="text-gray-600">Analyze AI solves the real-world problem of proving AI-search ROI. It's not a vague "visibility dashboard" — it connects AI assistant referrals (ChatGPT, Claude, Gemini, etc.) to actual sessions, conversions and revenue. That makes it a compelling offer for marketing teams tired of vanity metrics.</p>
          </div>

          {/* Monthly payouts */}
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <Calendar className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Monthly payouts</h3>
            </div>
            <p className="text-gray-600">Commissions are paid out on a regular monthly basis through PayPal (or your chosen method) once you hit our minimum threshold of $50. It's fast, reliable and straightforward.</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
