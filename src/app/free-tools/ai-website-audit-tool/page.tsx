import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Website Audit Tool | Probe Analytics',
  description: 'Analyze your website\'s AI readiness with our free AI website audit tool',
  openGraph: {
    title: 'Free AI Website Audit Tool | Probe Analytics',
    description: 'Analyze your website\'s AI readiness with our free AI website audit tool',
    url: 'https://tryprobe.com/free-tools/ai-website-audit-tool',
    type: 'website',
    images: [
      {
        url: '/og-ai-website-audit-tool.png',
        width: 1200,
        height: 630,
        alt: 'AI Website Audit Tool by Probe Analytics',
      },
    ],
  },
};

export default function AIToolPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <iframe 
        src="https://site-ai-readiness-tool.vercel.app/" 
        className="flex-grow w-full border-0"
        title="AI Website Audit Tool"
        allowFullScreen
      />
    </div>
  );
}
