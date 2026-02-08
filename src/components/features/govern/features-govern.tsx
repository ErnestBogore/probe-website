import Image from "next/image";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "See how AI feels about your brand — and when that turns",
    description:
      "Track sentiment (0–100) for your brand versus competitors across key prompts, and watch how it moves over time. If an assistant's answers suddenly get more negative about you — or start praising a rival — you'll see it immediately instead of hearing about it from a prospect on a call.",
    image: "/Sentiment Analysis.png",
    alt: "Sentiment analysis dashboard tracking brand sentiment scores over time across AI assistants.",
  },
  {
    title: "Catch risky claims and off-message positioning before they spread",
    description:
      "See the actual AI answers being given to buyers: what questions they're asking, how you're being described, which competitors are mentioned alongside you, and which sources those answers cite. This helps you flag outdated messaging, overpromises you can't legally stand behind, and feature gaps competitors are weaponizing — before those narratives harden in-market.",
    image: "/Chat Overview.png",
    alt: "Chat overview showing actual AI responses and how your brand is being positioned to buyers.",
  },
  {
    title: "Know when an AI channel stops sending you demand",
    description:
      "See how your visibility and presence trend across each AI surface (ChatGPT, Perplexity, Copilot, etc.) and how your position changes against competitors day by day. If a source that used to drive high-intent traffic starts dropping you, you get an early alert — so you can intervene before inbound volume or win rate takes a hit.",
    image: "/Trends By Engines.png",
    alt: "Trend analysis showing visibility and position changes across AI channels over time.",
  },
  {
    title: "See which domains AI is trusting to talk about you — and whether that's a problem",
    description:
      "Get a ranked list of the most-cited domains models use when answering about your category: media, review sites, partner blogs, competitor content, etc. You'll know who's shaping the story, how often they're cited, and whether those sources are friendly, neutral, or competitive. This lets you spot unapproved / inaccurate sources fast, and target the ones you actually want models to lean on.",
    image: "/Top Sources 2.png",
    alt: "Top sources analysis showing which domains AI models trust and cite when discussing your brand.",
  },
];

export const FeaturesGovern = () => {
  return (
    <section className="pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl tracking-tight md:text-4xl lg:text-5xl text-gray-900">
            Protect your brand in AI answers: spot narrative risk, inaccurate claims, and channel drops before they become a problem
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
