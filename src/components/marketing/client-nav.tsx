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
            "group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#8858ed] focus:bg-accent focus:text-accent-foreground dark:text-white dark:hover:text-white",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none group-hover:text-white dark:text-white">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground group-hover:text-gray-200 dark:text-gray-300 dark:group-hover:text-gray-200">
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
      title: "Discover",
      description: "See how AI assistants talk about your product and which competitors are being recommended.",
      href: "/features/discover",
    },
    {
      title: "Monitor",
      description: "Track AI-driven traffic, conversions, and revenue from AI sources.",
      href: "/features/monitor",
    },
    {
      title: "Improve",
      description: "Find high-intent prompts you're losing and see why competitors win them.",
      href: "/features/improve",
    },
    {
      title: "Govern",
      description: "Monitor how AI represents your brand and catch risky claims early.",
      href: "/features/govern",
    },
  ];

  return (
    <>
      <NavigationMenu className="hidden lg:block">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700">
              <ul className="grid w-[600px] grid-cols-2 gap-3 p-4">
                {features.map((feature) => (
                  <ListItem key={feature.title} title={feature.title} href={feature.href}>
                    {feature.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/pricing" className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/blog" className={navigationMenuTriggerStyle()}>
              Blog
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/case-study" className={navigationMenuTriggerStyle()}>
              Success Stories
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="/free-tools/ai-website-audit-tool" className={navigationMenuTriggerStyle()}>
              Website AI Readiness Checker
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="hidden items-center gap-4 lg:flex">
        <Button asChild variant="outline">
          <a href="https://app.tryanalyze.ai/" target="_blank" rel="noopener noreferrer">
            Sign in
          </a>
        </Button>
        <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 font-bold">
          <a href="https://tryanalyze.ai/pricing" target="_blank" rel="noopener noreferrer">
            Show Me My AI Rankings
          </a>
        </Button>
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
              <Link href="/pricing" className="font-medium">
                Pricing
              </Link>
              <Link href="/blog" className="font-medium">
                Blog
              </Link>
              <Link href="/case-study" className="font-medium">
                Success Stories
              </Link>
              <Link href="/free-tools/ai-website-audit-tool" className="font-medium">
                Website AI Readiness Checker
              </Link>
            </div>
            <div className="mt-6 flex flex-col gap-4">
              <Button asChild variant="outline">
                <a href="https://app.tryanalyze.ai/" target="_blank" rel="noopener noreferrer">
                  Sign in
                </a>
              </Button>
              <Button asChild className="bg-gray-900 text-white hover:bg-gray-800 font-bold">
                <a href="https://tryanalyze.ai/pricing" target="_blank" rel="noopener noreferrer">
                  Show Me My AI Rankings
                </a>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};
