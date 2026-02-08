import Script from "next/script";
import { Navbar } from "@/components/marketing/navbar";
import { Footer } from "@/components/marketing/footer";
import { DeferredScripts } from "@/components/deferred-scripts";
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/schema';

export function SharedLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <head>
        {/* DNS prefetch for 3rd-party origins */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://scripts.simpleanalyticscdn.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://widget.intercom.io" />
        <link rel="dns-prefetch" href="https://cdn.convertbox.com" />
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
      <Navbar />
      {children}
      <Footer />

      {/* Google Analytics — deferred to after page load */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-S5FYJJYT0H"
        strategy="lazyOnload"
      />
      <Script id="ga-init" strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-S5FYJJYT0H');
        `}
      </Script>

      {/* Simple Analytics — deferred to after page load */}
      <Script
        src="https://scripts.simpleanalyticscdn.com/latest.js"
        strategy="lazyOnload"
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

      {/* Intercom + ConvertBox — deferred until user interaction or 10s idle */}
      <DeferredScripts />
    </>
  );
}
