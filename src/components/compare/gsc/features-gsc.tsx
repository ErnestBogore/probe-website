import Image from "next/image";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Choose the competitors that actually matter",
    description:
      "Set the rivals you care about and track how often they're recommended across high-intent prompts. Get an always-current scoreboard of visibility share, sentiment, and movement—no manual checks.",
    image: "/Competitor Overview.png",
    alt: "Competitor overview dashboard showing visibility share and sentiment tracking across AI prompts.",
  },
  {
    title: "Diagnose prompt-level presence and gaps",
    description:
      "See visibility, sentiment, and position for every tracked buying question. Spot where you're absent or under-represented and where a rival is replacing you.",
    image: "/Prompt Level Analytics.png",
    alt: "Prompt-level analytics dashboard showing visibility and sentiment analysis for individual AI prompts.",
  },
  {
    title: "Audit the sources models trust",
    description:
      "Identify which of your URLs—and which external domains—are cited to justify recommendations. Expose the pages powering competitor credibility and the citations you still need to earn.",
    image: "/Citation Analytics.png",
    alt: "Citation analytics dashboard showing source analysis and domain citation patterns from AI models.",
  },
  {
    title: "Attribute AI-driven sessions to your site",
    description:
      "Quantify visits from AI assistants/search, trend them over time, and see AI's share of overall traffic. Establish baselines leadership will back.",
    image: "/AI Referral Traffic.png",
    alt: "AI referral traffic dashboard showing session attribution and traffic trends from AI assistants.",
  },
  {
    title: "See which pages get that traffic",
    description:
      "Pinpoint the landing pages AI actually sends users to, the sessions each receives, and which convert—so you can double down on winners and fix underperformers.",
    image: "/AI Traffic By Page.png",
    alt: "Page-level AI traffic attribution showing landing page performance and referral sources from AI.",
  },
  {
    title: "Optimize your exposure over time",
    description:
      "Watch presence and traffic trends by source. Catch drops early, see where a competitor starts overtaking you, and intervene before it hurts pipeline.",
    image: "/Analytics By Engine.png",
    alt: "AI-specific analytics dashboard showing performance trends and optimization opportunities.",
  },
];

export const FeaturesGsc = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            Moreover, customers choose Analyze AI because it's actionnable and allows you to do things that Google Search Console can't
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            One platform to see where you stand, prove what it's worth, and know what to do next.
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
