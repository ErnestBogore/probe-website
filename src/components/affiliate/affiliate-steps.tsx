"use client";

export const AffiliateSteps = () => {
  return (
    <section className="py-16 lg:py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900 mb-4">How to become an affiliate for Analyze AI?</h2>
          <p className="text-lg text-gray-600">It's very simple to join our partner program. As simple as ABC.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Step 1: Sign up */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-2xl font-bold text-purple-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Sign up</h3>
            </div>
            <p className="text-gray-600">Apply for our referral program and get a unique referral link.</p>
          </div>

          {/* Step 2: Distribute */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Distribute</h3>
            </div>
            <p className="text-gray-600">Tell your audience about Analyze AI.</p>
          </div>

          {/* Step 3: Earn */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">Earn</h3>
            </div>
            <p className="text-gray-600">Get $30 every month for every customer that pays. Easily earn thousands of dollars a month.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
