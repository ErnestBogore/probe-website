import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { PromotionalOverlay } from "@/components/marketing/promotional-overlay";
import { Geist, Geist_Mono } from "next/font/google";
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tryanalyze.ai'),
  title: "AI Search Analytics Platform For Marketing Teams",
  description: "Monitor your brand's visibility and sentiment across all major AI answer engines with Analyze AI.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Sitewide Structured Data: Organization + WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema())
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <PromotionalOverlay />
        {children}
        <Footer />

        {/* Google Analytics — loads after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S5FYJJYT0H"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S5FYJJYT0H');
          `}
        </Script>

        {/* Simple Analytics — lightweight, loads after interactive */}
        <Script
          src="https://scripts.simpleanalyticscdn.com/latest.js"
          strategy="afterInteractive"
        />

        {/* Microsoft Clarity — deferred to after page load */}
        <Script id="clarity-init" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "unwbdjoriw");
          `}
        </Script>

        {/* ConvertBox — deferred to after page load */}
        <Script id="convertbox-init" strategy="lazyOnload">
          {`!function(e,t){(e=t.createElement("script")).src="https://cdn.convertbox.com/convertbox/js/embed.js",e.id="app-convertbox-script",e.async=true,e.dataset.uuid="92151c5c-e8df-44b8-9c8e-96097edc1184",document.getElementsByTagName("head")[0].appendChild(e)}(window,document);`}
        </Script>

        {/* PartneroJS — deferred to after page load */}
        <Script id="partnero-init" strategy="lazyOnload">
          {`(function(p,t,n,e,r,o){ p['__partnerObject']=r;function f(){
var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
f.q=f.q||[];p[r]=p[r]||f.bind(f.q);p[r].q=p[r].q||f.q;o=t.createElement(n);
var _=t.getElementsByTagName(n)[0];o.async=1;o.src=e+'?v'+(~~(new Date().getTime()/1e6));
_.parentNode.insertBefore(o,_);})(window, document, 'script', 'https://app.partnero.com/js/universal.js', 'po');
po('settings', 'assets_host', 'https://assets.partnero.com');
po('program', 'TY8NQLFA', 'load');`}
        </Script>

        {/* Intercom Messenger — deferred to after page load */}
        <Script id="intercom-settings" strategy="lazyOnload">
          {`
            window.intercomSettings = {
              api_base: "https://api-iam.intercom.io",
              app_id: "cs5wyv8i",
            };
          `}
        </Script>
        <Script id="intercom-init" strategy="lazyOnload">
          {`
            (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/cs5wyv8i';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
          `}
        </Script>
      </body>
    </html>
  );
}
