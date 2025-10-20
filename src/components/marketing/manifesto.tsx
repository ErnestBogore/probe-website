import { DashedLine } from "../dashed-line";

export const Manifesto = () => {
  return (
    <section className="pt-6 pb-16 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            BECAUSE WE&apos;RE FUNDAMENTALLY DIFFERENT
          </span>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            OUR MANIFESTO
          </h2>
        </div>
        
        {/* A4 Paper Container - Stacked Papers */}
        <div className="max-w-4xl mx-auto relative min-h-[1200px]">
          {/* Bottom Paper (Second Page) - Positioned behind and rotated */}
          <div className="bg-white shadow-xl p-12 md:p-16 absolute inset-0 transform rotate-3 hover:rotate-1 transition-transform duration-300 z-10">
            {/* Paper texture/lines effect */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  transparent,
                  transparent 24px,
                  #e5e7eb 24px,
                  #e5e7eb 25px
                )`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-gray-700 mb-8 font-serif">
                  What changes is where that quality must be legible—to crawlers, to models, and to the people asking better questions. In this new layer, all voices—supportive or critical—can surface, and the most helpful will win.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8 font-serif">
                  We exist to help you navigate AI search by strengthening what already works: rigorous content strategy, technical clarity, and measurement that separates signal from sales theater. We do not sell shortcuts. We build durable moats.
                </p>
                
                <div className="mt-12">
                  <p className="text-xl font-serif text-gray-800 mb-8">
                    We promise:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-2xl font-bold text-red-500 mr-4 mt-1">NO</span>
                      <p className="text-lg text-gray-700 font-serif">
                        fear-based upsells or &ldquo;GEO replaces SEO&rdquo; pitches; you will get sober guidance grounded in your data and your market reality.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-2xl font-bold text-red-500 mr-4 mt-1">NO</span>
                      <p className="text-lg text-gray-700 font-serif">
                        vanity metrics; we tie effort to qualified demand, attributable revenue, and defensible share of voice across web and answer engines.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-2xl font-bold text-red-500 mr-4 mt-1">NO</span>
                      <p className="text-lg text-gray-700 font-serif">
                        panic or FOMO marketing—the kind that fuels hype cycles instead of results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Top Paper (First Page) - Positioned in front with different rotation */}
          <div className="bg-white shadow-2xl p-12 md:p-16 absolute inset-0 transform -rotate-2 hover:rotate-0 transition-transform duration-300 z-20 translate-x-4 -translate-y-4">
            {/* Paper texture/lines effect */}
            <div className="absolute inset-0 opacity-5">
              <div className="h-full w-full" style={{
                backgroundImage: `repeating-linear-gradient(
                  transparent,
                  transparent 24px,
                  #e5e7eb 24px,
                  #e5e7eb 25px
                )`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl leading-relaxed text-gray-700 mb-8 font-serif">
                  <span className="text-6xl font-serif text-gray-800 float-left mr-3 mt-1 leading-none">I</span>
                  In a moment when every headline declares that &ldquo;GEO is the new SEO,&rdquo; when dashboards multiply faster than insights, and when companies are told to start over instead of evolve, it is easy to lose sight of what actually works.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8 font-serif">
                  Leaders are told to abandon the craft that built their brands and to buy &ldquo;AI visibility&rdquo; at a premium—even though generative engines still account for a small slice of total traffic for most companies. The result is confusion, waste, and teams drifting from the fundamentals that have always compounded.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8 font-serif">
                  At tryanalyze.ai, we believe <strong className="text-gray-900 font-bold">GEO isn&rsquo;t a replacement for SEO</strong>—it&rsquo;s the next transformation of it. Search is expanding from ten blue links to multi-modal, prompt-shaped answers. Quality still governs visibility. Authority still comes from depth, originality, structure, and usefulness.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8 font-serif">
                  What changes is where that quality must be legible—to crawlers, to models, and to the people asking better questions. In this new layer, all voices—supportive or critical—can surface, and the most helpful will win.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-700 mb-8 font-serif">
                  We exist to help you navigate AI search by strengthening what already works: rigorous content strategy, technical clarity, and measurement that separates signal from sales theater. We do not sell shortcuts. We build durable moats.
                </p>
                
                <div className="mt-12">
                  <p className="text-xl font-serif text-gray-800 mb-8">
                    We promise:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <span className="text-2xl font-bold text-red-500 mr-4 mt-1">NO</span>
                      <p className="text-lg text-gray-700 font-serif">
                        fear-based upsells or &ldquo;GEO replaces SEO&rdquo; pitches; you will get sober guidance grounded in your data and your market reality.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-2xl font-bold text-red-500 mr-4 mt-1">NO</span>
                      <p className="text-lg text-gray-700 font-serif">
                        vanity metrics; we tie effort to qualified demand, attributable revenue, and defensible share of voice across web and answer engines.
                      </p>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-2xl font-bold text-red-500 mr-4 mt-1">NO</span>
                      <p className="text-lg text-gray-700 font-serif">
                        panic or FOMO marketing—the kind that fuels hype cycles instead of results.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Signature */}
                <div className="mt-16 text-right">
                  <p className="text-2xl text-gray-600 transform -rotate-2" style={{ fontFamily: 'Brush Script MT, cursive' }}>
                    — the Analyze team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
