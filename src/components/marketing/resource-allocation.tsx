import { DashedLine } from "../dashed-line";

import { cn } from "@/lib/utils";

const topItems = [
  {
    title: "Accept smart prompt suggestions.",
    description:
      "One-click \"Track\" suggested prompts by cluster to auto-schedule daily runs and expand coverage.",
    images: [
      {
        src: "/Prompt Suggestion.png",
        alt: "Smart prompt suggestions interface",
        width: 495,
        height: 186,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Prune noise from your prompt set.",
    description: "Remove off-strategy prompts from tracking to keep trends, win rates, and attribution clean.",
    images: [
      {
        src: "/Prompt Removal.png",
        alt: "Prompt removal interface",
        width: 495,
        height: 186,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
];

const bottomItems = [
  {
    title: "Audit the domains shaping AI answers.",
    description:
      "See the most-cited domains—including competitors—to target citation wins that turn visibility into sessions.",
    images: [
      {
        src: "/Top Sources.png",
        alt: "Domain audit interface",
        width: 320,
        height: 103,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
  },
  {
    title: "Benchmark presence and citations by model.",
    description:
      "Compare presence and citation share across providers to invest where models already trust you.",
    images: [
      {
        src: "/Model level metrics.png",
        alt: "Model benchmarking interface",
        width: 305,
        height: 280,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

const lastRowItems = [
  {
    title: "Prioritize engines that actually send sessions.",
    description:
      "Rank top LLM referrers by 30-day sessions and change to focus optimization where traffic comes.",
    images: [
      {
        src: "/Trend By Engine.png",
        alt: "Engine prioritization interface",
        width: 305,
        height: 280,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
];

export const ResourceAllocation = () => {
  return (
    <section
      id="resource-allocation"
      className="overflow-hidden pb-24"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl tracking-tight md:text-4xl lg:text-5xl text-balance">
          And so much more you need to nail your generative engine optimization strategy.
        </h2>

        <div className="mx-auto max-w-6xl">
          <div className="mt-8 md:mt-12 lg:mt-20">
            <DashedLine
              orientation="horizontal"
              className="scale-x-105"
            />

            {/* Top Features Grid - 2 items */}
            <div className="relative flex max-md:flex-col">
              {topItems.map((item, i) => (
                <Item key={i} item={item} isLast={i === topItems.length - 1} />
              ))}
            </div>
            <DashedLine
              orientation="horizontal"
              className="scale-x-110"
            />

            {/* Bottom Features Grid - 2 items */}
            <div className="relative flex flex-col md:flex-row">
              {bottomItems.map((item, i) => (
                <Item
                  key={i}
                  item={item}
                  isLast={i === bottomItems.length - 1}
                  className="md:pb-0 flex-1"
                />
              ))}
            </div>
            <DashedLine
              orientation="horizontal"
              className="scale-x-110"
            />

            {/* Last Row - 1 item */}
            <div className="relative flex justify-center">
              {lastRowItems.map((item, i) => (
                <Item
                  key={i}
                  item={item}
                  isLast={true}
                  className="md:pb-0 max-w-4xl w-full"
                  isHorizontal={true}
                />
              ))}
            </div>
          </div>
          <DashedLine
            orientation="horizontal"
            className="scale-x-110"
          />
        </div>
      </div>
    </section>
  );
};

interface ItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number] | (typeof lastRowItems)[number];
  isLast?: boolean;
  className?: string;
  isHorizontal?: boolean;
}

const Item = ({ item, isLast, className, isHorizontal }: ItemProps) => {
  if (isHorizontal) {
    return (
      <div
        className={cn(
          "relative flex flex-col md:flex-row items-center gap-6 md:gap-8 px-0 py-6 md:px-6 md:py-8",
          className,
        )}
      >
        <div className="flex-1 text-balance">
          <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
          <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
        </div>
        
        <div className="flex-shrink-0 w-full md:w-auto md:max-w-xs">
          <div className="image-container">
            {item.images.map((image, j) => (
              <div key={j} className="flex-shrink-0 relative">
                <div className="rounded-lg p-4" style={{ background: 'linear-gradient(135deg, rgba(136, 88, 237, 0.1), rgba(136, 88, 237, 0.05))' }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain object-center w-full h-auto max-w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {!isLast && (
          <>
            <DashedLine
              orientation="vertical"
              className="absolute top-0 right-0 max-md:hidden"
            />
            <DashedLine
              orientation="horizontal"
              className="absolute inset-x-0 bottom-0 md:hidden"
            />
          </>
        )}
      </div>
    );
  }
  
  return (
    <div
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.images.length > 4 ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images.slice(0, 4).map((image, j) => (
                <div
                  key={j}
                  className="grid aspect-square size-16 place-items-center rounded-2xl p-2 lg:size-20"
                  style={{ background: 'linear-gradient(135deg, rgba(136, 88, 237, 0.1), rgba(136, 88, 237, 0.05))' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
                </div>
              ))}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.images.slice(4).map((image, j) => (
                <div
                  key={j}
                  className="grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
                  style={{ background: 'linear-gradient(135deg, rgba(136, 88, 237, 0.1), rgba(136, 88, 237, 0.05))' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container flex flex-col gap-4 rounded-lg p-4" style={{ background: 'linear-gradient(135deg, rgba(136, 88, 237, 0.1), rgba(136, 88, 237, 0.05))' }}>
          {item.images.map((image, j) => (
            <div key={j} className="flex-shrink-0">
              <img
                src={image.src}
                alt={image.alt}
                className="object-contain object-left-top w-full h-auto max-w-full"
              />
            </div>
          ))}
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </div>
  );
};
