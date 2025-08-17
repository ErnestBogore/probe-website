/**
 * Main Page Component
 * 
 * The landing page of our application showcasing the integrated
 * shadcn components, animations, and modern UI patterns.
 */

import type { Metadata } from 'next';
import { Hero } from "@/components/marketing/hero";
import { Features } from "@/components/marketing/features";
import { Testimonials } from "@/components/marketing/testimonials";
import { Cta } from "@/components/marketing/cta";
import Image from "next/image";
import React from "react";

const llms = [
  { name: "ChatGPT", domain: "chatgpt.com" },
  { name: "Perplexity", domain: "perplexity.ai" },
  { name: "Claude", domain: "claude.ai" },
];

export const metadata: Metadata = {
  title: 'AI Search Analytics For Marketing Teams.',
  description: 'Understand how AI sees your brand. Monitor search rankings, analyze sentiment, and protect your reputation with our powerful AI analytics platform. Get started today.',
};

export default function Home() {
  const description = (
    <>
      Right now,{" "}
      {llms.map((llm, index) => (
        <React.Fragment key={llm.name}>
          <Image
            src={`https://s2.googleusercontent.com/s2/favicons?domain=${llm.domain}&sz=32`}
            alt={`${llm.name} favicon`}
            width={20}
            height={20}
            className="inline-block mr-1 h-5 w-5 align-middle" 
          />
          {llm.name}
          {index < llms.length - 1 && ", "}
        </React.Fragment>
      ))}
      {', and other LLMs are recommending your competitors to thousands of prospects you’ll never meet. Probe Analytics shows you exactly where you’ve vanished — and how to take back your place in AI search results.'}
    </>
  );

  return (
    <main>
      <Hero 
        title="Discover What AI Answer Engines Say About Your Brand"
        description={description}
        primaryButtonText="Show Me My AI Rankings"
        primaryButtonUrl="#"
      />
      <Testimonials />
      <Features />
      <Cta />
    </main>
  );
}
