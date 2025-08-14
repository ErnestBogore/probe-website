/**
 * Hero195 Component
 * 
 * A clean, focused landing page for showcasing shadcn UI blocks and components.
 * Matches the design pattern of component showcase websites with navigation
 * tabs and live component previews.
 * 
 * Features:
 * - Clean, centered header design
 * - Category navigation tabs
 * - Live component preview area
 * - Dashboard/admin interface showcase
 */

"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart3, 
  TrendingUp, 
  Sparkles,
  MessageSquare
} from "lucide-react";

export function Hero195() {

  return (
    <div className="min-h-screen bg-background">
             {/* Header Section */}
       <div className="text-center py-24 px-6">
         <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-8 leading-relaxed">
           The Analytics Platform for<br />
           Generative Engine Optimization (GEO)
         </h1>
         <p className="text-sm md:text-base text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
           Monitor how ChatGPT, Claude, Perplexity, and other LLMs mention your brand. Track competitor visibility, optimize your AI presence, and capture revenue from the 40% of searches moving to generative engines.<br />
           It&apos;s like Google Analytics but for GEO.
         </p>
         <Button size="default" className="bg-black text-white hover:bg-black/90">
           Monitor Your AI Visibility
         </Button>
       </div>

             {/* Navigation Tabs */}
       <div className="max-w-4xl mx-auto px-6 mb-8">
                  <Tabs defaultValue="monitoring" className="w-full">
           <TabsList className="grid w-full grid-cols-4 bg-muted border border-border shadow-sm p-1">
             <TabsTrigger value="monitoring" className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-border">
               <BarChart3 className="h-4 w-4" />
               AI Monitoring
             </TabsTrigger>
             <TabsTrigger value="analytics" className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-border">
               <TrendingUp className="h-4 w-4" />
               360° Analytics
             </TabsTrigger>
             <TabsTrigger value="conversations" className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-border">
               <MessageSquare className="h-4 w-4" />
               Live Conversations
             </TabsTrigger>
             <TabsTrigger value="suggestions" className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-lg data-[state=active]:border data-[state=active]:border-border">
               <Sparkles className="h-4 w-4" />
               Smart Suggestions
             </TabsTrigger>
          </TabsList>

                     {/* Component Preview Area */}
           <TabsContent value="monitoring" className="mt-8">
             <Card className="w-full max-w-5xl mx-auto overflow-hidden">
               <CardHeader className="text-center py-8 bg-gradient-to-b from-muted/30 to-background border-b border-border">
                 <h3 className="text-3xl font-bold text-foreground mb-2">AI Monitoring</h3>
                 <p className="text-lg text-muted-foreground">Track and monitor your AI model performance in real-time</p>
               </CardHeader>
               <CardContent className="p-6">
                 <div className="w-full bg-muted/20 p-4 rounded-lg">
                   <Image 
                    src="/Tracked.png" 
                    alt="AI Monitoring Dashboard"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                 </div>
               </CardContent>
             </Card>
           </TabsContent>

           <TabsContent value="analytics" className="mt-8">
             <Card className="w-full max-w-5xl mx-auto overflow-hidden">
               <CardHeader className="text-center py-8 bg-gradient-to-b from-muted/30 to-background border-b border-border">
                 <h3 className="text-3xl font-bold text-foreground mb-2">360° Analytics</h3>
                 <p className="text-lg text-muted-foreground">Comprehensive analytics and insights for every prompt</p>
               </CardHeader>
               <CardContent className="p-6">
                 <div className="w-full bg-muted/20 p-4 rounded-lg">
                   <Image 
                    src="/Prompt Details.png" 
                    alt="360° Prompt Analytics"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                 </div>
               </CardContent>
             </Card>
           </TabsContent>

           <TabsContent value="conversations" className="mt-8">
             <Card className="w-full max-w-5xl mx-auto overflow-hidden">
               <CardHeader className="text-center py-8 bg-gradient-to-b from-muted/30 to-background border-b border-border">
                 <h3 className="text-3xl font-bold text-foreground mb-2">Live Conversations</h3>
                 <p className="text-lg text-muted-foreground">See actual LLM chat outputs and conversations in real-time</p>
               </CardHeader>
               <CardContent className="p-6">
                 <div className="w-full bg-muted/20 p-4 rounded-lg">
                   <Image 
                    src="/Chats.png" 
                    alt="Live Chat Conversations"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                 </div>
               </CardContent>
             </Card>
           </TabsContent>

           <TabsContent value="suggestions" className="mt-8">
             <Card className="w-full max-w-5xl mx-auto overflow-hidden">
               <CardHeader className="text-center py-8 bg-gradient-to-b from-muted/30 to-background border-b border-border">
                 <h3 className="text-3xl font-bold text-foreground mb-2">Smart Suggestions</h3>
                 <p className="text-lg text-muted-foreground">Get intelligent prompt suggestions powered by AI</p>
               </CardHeader>
               <CardContent className="p-6">
                 <div className="w-full bg-muted/20 p-4 rounded-lg">
                   <Image 
                    src="/Suggest.png" 
                    alt="Smart Suggestions Interface"
                    width={1200}
                    height={800}
                    className="w-full h-auto object-cover rounded-lg shadow-md"
                  />
                 </div>
               </CardContent>
             </Card>
           </TabsContent>
        </Tabs>
      </div>
    </div>
  );
} 