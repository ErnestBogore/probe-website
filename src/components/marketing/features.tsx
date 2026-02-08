import Image from "next/image";
import { cn } from "@/lib/utils";
import { DashedLine } from "../dashed-line";

const featuresData = [
  {
    title: "Select competitors to track across your clusters",
    description:
      "Set the rivals that matter. Your scheduled prompts run daily to measure visibility share, sentiment, and movement by cluster—so you have a rolling scoreboard you can act on without manual checks.",
    image: "/Competitor Overview.png",
    alt: "Competitor overview dashboard showing visibility share and sentiment tracking across clusters.",
  },
  {
    title: "Diagnose prompt-level presence and gaps",
    description:
      "See visibility, sentiment, and position for every tracked prompt with a response timeline. Spot where you're absent or under-represented, then target content and messaging to win specific prompts.",
    image: "/Prompt Level Analytics.png",
    alt: "Prompt-level analytics dashboard showing visibility and sentiment analysis for individual prompts.",
  },
  {
    title: "Audit the sources AI relies on (citations & domains)",
    description:
      "Identify which of your URLs and which external domains models cite, how often, and in which engines. Expose citation gaps, competitor wins, and the exact sources to outrank or earn.",
    image: "/Citation Analytics.png",
    alt: "Citation analytics dashboard showing source analysis and domain citation patterns.",
  },
  {
    title: "Attribute AI-driven sessions to your site",
    description:
      "Quantify total sessions from AI search, trend them over time, and understand AI's share of overall traffic. This proves channel impact and establishes baselines for growth goals.",
    image: "/AI Referral Traffic.png",
    alt: "AI referral traffic dashboard showing session attribution and traffic trends from AI engines.",
  },
  {
    title: "Attribute down to the landing page",
    description:
      "Pinpoint the pages AI engines send traffic to, matched with the referring model/site and sessions. Double down on winners, repair underperformers, and brief editors on formats AI prefers.",
    image: "/AI Traffic By Page.png",
    alt: "Page-level AI traffic attribution showing landing page performance and referral sources.",
  },
  {
    title: "Optimize by engine mix",
    description:
      "Compare contribution from ChatGPT, Perplexity, Claude, Copilot, Gemini, and more—month by month. Prioritize the engines that move the needle and tailor content and distribution for each.",
    image: "/Analytics By Engine.png",
    alt: "Engine-specific analytics dashboard comparing performance across different AI platforms.",
  },
];

export const Features = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center mb-10">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-gray-100 text-muted-foreground absolute px-4 font-mono text-sm font-medium tracking-wide max-md:hidden">
            THE FEATURES
          </span>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            One platform to see, compete, and prove ROI of AI search
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Track visibility, outpace rivals, and tie AI answers to real traffic and conversions.
          </p>
        </div>

        <div className="mt-20 grid gap-16">
          {featuresData.map((feature, index) => (
            <div
              key={feature.title}
              className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 items-center"
            >
              <div
                className={cn(
                  "text-left md:col-span-2",
                  index % 2 === 1 && "md:order-last"
                )}
              >
                <h3 className="text-3xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-4 text-lg text-gray-600 max-w-[44ch]">
                  {feature.description}
                </p>
              </div>
              <div className="md:col-span-3 aspect-[16/9] relative">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={1200}
                  height={675}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


