import Script from 'next/script'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Talk To A Human',
  description: 'Schedule a demo with our team to see how ANALYZE can help you track your AI visibility.',
}

export default function TalkToAHumanPage() {
  return (
    <>
      <main className="min-h-screen p-8">
        <div className="tidycal-embed" data-path="analyze/demo"></div>
      </main>
      
      <Script 
        src="https://asset-tidycal.b-cdn.net/js/embed.js" 
        strategy="afterInteractive"
      />
    </>
  )
}
