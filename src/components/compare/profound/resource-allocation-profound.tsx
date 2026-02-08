import Image from "next/image";
import { DashedLine } from "../../dashed-line";
import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "See why competitors win—down to the source URL",
    description: "For any prompt, view who's mentioned, the pages being cited, how often they're pulled, and which claims get repeated. You get the playbook, not just the score.",
    images: [{ src: "/Prompt Level Citation.png", alt: "Prompt level citation analysis interface", width: 495, height: 186 }],
    className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Benchmark presence and citations by model",
    description: "Compare presence and citation share across providers to invest where models already trust you.",
    images: [{ src: "/Model level metrics.png", alt: "Model level metrics interface", width: 495, height: 186 }],
    className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
];

const bottomItems = [
  {
    title: "Watch position vs competitors over time",
    description: "See daily movement in answer rankings across your competitive set. Know when you're holding #1, slipping, or being replaced—before it shows up in forecasts.",
    images: [{ src: "/Position by competitors.png", alt: "Position tracking interface", width: 320, height: 103 }],
    className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Get a prioritized list of prompts to win next",
    description: "We surface high-intent prompts where you're not mentioned but a competitor is. You see the gap, the competitor, and recency—ready to hand to content, PMM, and enablement.",
    images: [{ src: "/Opportunities.png", alt: "Opportunity prioritization interface", width: 305, height: 280 }],
    className: "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

export const ResourceAllocationProfound = () => {
  return (
    <section id="resource-allocation" className="overflow-hidden pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl tracking-tight md:text-4xl lg:text-5xl text-balance">
          Everything you need to compete—and win
        </h2>
        <p className="text-center text-lg text-gray-600 mt-6 max-w-4xl mx-auto">
          Know who's getting the nod, why they're getting it, how your position is moving, and which prompts to win next.
        </p>
        <div className="mx-auto max-w-6xl">
          <div className="mt-8 md:mt-12 lg:mt-20">
            <DashedLine orientation="horizontal" className="scale-x-105" />
            <div className="relative flex max-md:flex-col">
              {topItems.map((item, i) => (<Item key={i} item={item} isLast={i === topItems.length - 1} />))}
            </div>
            <DashedLine orientation="horizontal" className="scale-x-110" />
            <div className="relative flex flex-col md:flex-row">
              {bottomItems.map((item, i) => (<Item key={i} item={item} isLast={i === bottomItems.length - 1} className="md:pb-0 flex-1" />))}
            </div>
            <DashedLine orientation="horizontal" className="scale-x-110" />
          </div>
          <DashedLine orientation="horizontal" className="scale-x-110" />
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number];
  isLast?: boolean;
  className?: string;
  isHorizontal?: boolean;
}

const Item = ({ item, isLast, className, isHorizontal }: ItemProps) => {
  if (isHorizontal) {
    return (
      <div className={cn("relative flex flex-col md:flex-row items-center gap-6 md:gap-8 px-0 py-6 md:px-6 md:py-8", className)}>
        <div className="flex-1 text-balance">
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
        </div>
        <div className="flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <div className="image-container">
            {item.images.map((image, j) => (
              <div key={j} className="flex-shrink-0 relative">
                <div className="rounded-lg p-4" style={{ background: 'linear-gradient(135deg, rgba(136, 88, 237, 0.1), rgba(136, 88, 237, 0.05))' }}>
                  <Image src={image.src} alt={image.alt} width={image.width || 495} height={image.height || 186} quality={85} sizes="(max-width: 768px) 100vw, 40vw" className="object-contain object-center w-full h-auto max-w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        {!isLast && (
          <>
            <DashedLine orientation="vertical" className="absolute top-0 right-0 max-md:hidden" />
            <DashedLine orientation="horizontal" className="absolute inset-x-0 bottom-0 md:hidden" />
          </>
        )}
      </div>
    );
  }
  
  return (
    <div className={cn("relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8", className, item.className)}>
      <div className="title-container text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>
      {item.fade.includes("bottom") && (<div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />)}
      <div className="image-container flex flex-col gap-4 rounded-lg p-4" style={{ background: 'linear-gradient(135deg, rgba(136, 88, 237, 0.1), rgba(136, 88, 237, 0.05))' }}>
        {item.images.map((image, j) => (
          <div key={j} className="flex-shrink-0">
            <Image src={image.src} alt={image.alt} width={image.width || 495} height={image.height || 186} quality={85} sizes="(max-width: 768px) 100vw, 40vw" className="object-contain object-left-top w-full h-auto max-w-full" />
          </div>
        ))}
      </div>
      {!isLast && (
        <>
          <DashedLine orientation="vertical" className="absolute top-0 right-0 max-md:hidden" />
          <DashedLine orientation="horizontal" className="absolute inset-x-0 bottom-0 md:hidden" />
        </>
      )}
    </div>
  );
};
