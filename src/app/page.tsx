/**
 * Main Page Component
 * 
 * The landing page of our application showcasing the integrated
 * shadcn components, animations, and modern UI patterns.
 */

import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { Testimonials } from "@/components/marketing/testimonials";
import { Cta } from "@/components/marketing/cta";

export default function Home() {
  return (
    <main>
      <Hero 
        title="The Analytics Platform for GEO"
        description="Monitor how ChatGPT, Claude, Perplexity, and other LLMs mention your brand. Track competitor visibility, optimize your AI presence, and capture revenue from the 40% of searches moving to generative engines. It's like Google Analytics but for GEO."
        primaryButtonText="Monitor Your AI Visibility"
        primaryButtonUrl="#"
      />
      <Features />
      <Testimonials />
      <Cta />
    </main>
  );
}
