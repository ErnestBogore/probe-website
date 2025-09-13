import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI Website Audit Tool | Probe Analytics',
  description: 'Get a comprehensive AI-powered audit of your website\'s performance, SEO, and user experience.',
  openGraph: {
    title: 'Free AI Website Audit Tool | Probe Analytics',
    description: 'Get a comprehensive AI-powered audit of your website\'s performance, SEO, and user experience.',
    url: 'https://tryprobe.com/free-tools/ai-website-audit-tool',
    type: 'website',
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
