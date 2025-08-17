"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export const ClientNav = () => {
  const features = [
    {
      title: "AI Search Analytics Platform",
      description: "Track your brand's visibility across all major AI answer engines.",
      href: "/features/ai-search-analytics",
    },
    {
      title: "Brand Sentiment Analysis Tool",
      description: "Monitor how AI perceives your brand and protect your reputation.",
      href: "/features/brand-sentiment-analysis",
    },
    {
      title: "AI Search Tool",
      description: "Run on-demand searches to get real-time AI rankings.",
      href: "/features/ai-search-tool",
    },
  ];

  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white dark:bg-zinc-900 shadow-lg">
              <ul className="grid w-[600px] grid-cols-2 gap-3 p-4">
                {features.map((feature) => (
                  <Link
                    href={feature.href}
                    key={feature.title}
                    passHref
                    legacyBehavior
                  >
                    <ListItem title={feature.title}>
                      {feature.description}
                    </ListItem>
                  </Link>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden items-center gap-4 lg:flex">
        <Button variant="outline">Sign in</Button>
        <Button className="bg-gray-900 text-white hover:bg-gray-800 font-bold">Show Me My AI Rankings</Button>
      </div>
      <Sheet>
        <SheetTrigger asChild className="lg:hidden">
          <Button variant="outline" size="icon">
            <MenuIcon className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="top" className="max-h-screen overflow-auto">
          <SheetHeader>
            <SheetTitle>
                          </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col p-4">
            <Accordion type="single" collapsible className="mt-4 mb-2">
              <AccordionItem value="solutions" className="border-none">
                <AccordionTrigger className="text-base hover:no-underline">
                  Features
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid md:grid-cols-2">
                    {features.map((feature) => (
                      <Link
                        href={feature.href}
                        key={feature.title}
                        className="rounded-md p-3 transition-colors hover:bg-muted/70"
                      >
                        <div>
                          <p className="mb-1 font-semibold text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <div className="flex flex-col gap-6">
              <Link href="#" className="font-medium">
                Products
              </Link>
              <Link href="/blog" className="font-medium">
                Blog
              </Link>
              <Link href="#" className="font-medium">
                Contact
              </Link>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <Button variant="outline">Sign in</Button>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 font-bold">Show Me My AI Rankings</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
