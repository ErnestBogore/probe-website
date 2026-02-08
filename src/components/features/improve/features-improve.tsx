import Image from "next/image";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Know which competitors AI is pushing the hardest",
    description:
      "Track the vendors that show up alongside you most often — and the ones that are suddenly showing up even if you've never considered them a competitor. You'll see mentions, recency, and suggested new competitors to start monitoring before sales starts losing to them.",
    image: "/Competitor Overview.png",
    alt: "Competitor overview dashboard showing which vendors AI is recommending most frequently alongside your brand.",
  },
  {
    title: "See why they're winning that prompt — down to the exact URL",
    description:
      "For any high-intent question, we show you the specific pages AI is citing to recommend your competitors: their comparison pages, \"top tools\" listicles, feature breakdowns, etc. You get the proof and messaging those models are lifting, not just the fact that you're losing.",
    image: "/Citation Analytics.png",
    alt: "Citation analytics showing exact URLs and pages AI models use to recommend competitors.",
  },
  {
    title: "See where you're getting left out — and who's taking that demand",
    description:
      "Get a prioritized list of buyer prompts where you're not being mentioned but a competitor is. For each one, see the competitor name, last time we saw it, and how often you were skipped. This becomes your \"we should be in this conversation\" list for content, PMM, and demand gen.",
    image: "/Oportunity.png",
    alt: "Opportunity analysis dashboard showing buyer prompts where competitors are mentioned but you're not.",
  },
  {
    title: "Catch slippage early, before it shows up in pipeline",
    description:
      "Watch how your presence changes over time by AI source (ChatGPT, Perplexity, Copilot, etc.). If a referrer that used to drive traffic is dropping you, you'll see it. If a competitor is climbing, you'll see that too. This lets you defend share before leadership asks why inbound slowed.",
    image: "/Trends By Engines.png",
    alt: "Trend analysis showing presence changes over time across different AI sources and engines.",
  },
  {
    title: "Double down on the pages AI is already sending qualified traffic to",
    description:
      "See which URLs on your site AI search is actively sending users to, how many sessions each page drove, and which pages trigger key events. This tells you what's already converting from AI-driven demand so you can amplify it (internal links, paid acceleration, refresh, localization) instead of guessing.",
    image: "/AI Traffic By Page.png",
    alt: "AI traffic by page analysis showing which URLs receive the most qualified AI-driven traffic.",
  },
  {
    title: "Catch narrative and sentiment in AI answers before it hurts your reputation",
    description:
      "Monitor how AI is talking about you across products, regions, and segments. Spot negative claims, outdated messaging, or off-label promises early.",
    image: "/Sentiment Analysis.png",
    alt: "Sentiment analysis dashboard monitoring brand narrative across AI responses and segments.",
  },
];

export const FeaturesImprove = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            Turn AI visibility into an action plan: fix where you're losing, defend what's slipping, and double down on what's working
          </h2>
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
