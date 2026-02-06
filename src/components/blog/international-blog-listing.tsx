/**
 * International Blog Listing Component
 * 
 * Shared component for international blog listing pages.
 * Used by each language-specific route (fr, de, es, it, nl).
 */

import { getAllInternationalBlogPosts } from "@/lib/datocms";
import { Blog7 } from "@/components/blog7";
import { InternationalBlogPost, SupportedLanguage } from '@/types/blog';

const LOCALIZED_CONTENT: Record<SupportedLanguage, {
  title: string;
  description: string;
  subtitle: string;
}> = {
  fr: {
    title: 'Blog Analyze AI',
    description: 'Où les marketeurs apprennent les stratégies et tactiques pour tirer le meilleur parti de la recherche IA',
    subtitle: 'Chez Analyze AI, nous étudions constamment comment les LLMs redéfinissent la façon dont les gens découvrent, apprennent et achètent des produits en ligne. Nous partageons nos insights sur comment faire mentionner votre marque dans les moteurs de réponse, comment attribuer la visibilité IA au revenu et au trafic réel, et plus encore.',
  },
  de: {
    title: 'Analyze AI Blog',
    description: 'Wo Marketer Strategien und Taktiken lernen, um das Beste aus der KI-Suche herauszuholen',
    subtitle: 'Bei Analyze AI untersuchen wir ständig, wie LLMs die Art und Weise neu definieren, wie Menschen Produkte online entdecken, lernen und kaufen. Wir teilen unsere Erkenntnisse darüber, wie Sie Ihre Marke in Antwortmaschinen erwähnen lassen, wie Sie KI-Sichtbarkeit auf Umsatz und echten Traffic zurückführen können, und mehr.',
  },
  es: {
    title: 'Blog de Analyze AI',
    description: 'Donde los marketers aprenden estrategias y tácticas para aprovechar al máximo la búsqueda con IA',
    subtitle: 'En Analyze AI, estudiamos constantemente cómo los LLMs están redefiniendo la forma en que las personas descubren, aprenden y compran productos en línea. Compartimos nuestros conocimientos sobre cómo hacer que tu marca sea mencionada en los motores de respuesta, cómo atribuir la visibilidad de IA a ingresos y tráfico real, y más.',
  },
  it: {
    title: 'Blog Analyze AI',
    description: 'Dove i marketer imparano strategie e tattiche per sfruttare al meglio la ricerca AI',
    subtitle: 'In Analyze AI, studiamo costantemente come i LLM stanno ridefinendo il modo in cui le persone scoprono, imparano e acquistano prodotti online. Condividiamo le nostre intuizioni su come far menzionare il tuo brand nei motori di risposta, come attribuire la visibilità AI ai ricavi e al traffico reale, e altro ancora.',
  },
  nl: {
    title: 'Analyze AI Blog',
    description: 'Waar marketeers strategieën en tactieken leren om het meeste uit AI-zoekopdrachten te halen',
    subtitle: 'Bij Analyze AI bestuderen we voortdurend hoe LLMs de manier waarop mensen producten online ontdekken, leren en kopen opnieuw definiëren. We delen onze inzichten over hoe je je merk kunt laten vermelden in antwoordmachines, hoe je AI-zichtbaarheid kunt toeschrijven aan omzet en echt verkeer, en meer.',
  },
};

interface InternationalBlogListingProps {
  language: SupportedLanguage;
}

export async function InternationalBlogListing({ language }: InternationalBlogListingProps) {
  const { allBlogPostInternationals } = await getAllInternationalBlogPosts(language);

  const postsForComponent = allBlogPostInternationals
    .filter(post => post.contentType !== 'case_study')
    .map((post: InternationalBlogPost) => ({
      id: post.id,
      url: `/blog/${language}/${post.slug}`,
      image: post.featuredImage?.url || post.seo?.image?.url || '',
      title: post.title,
      summary: post.excerpt ?? '',
      author: post.author?.name || 'Anonymous',
      date: (post.publishedDate || post._publishedAt) ?? '',
    }));

  const localizedContent = LOCALIZED_CONTENT[language];

  return (
    <Blog7 
      posts={postsForComponent}
      title={localizedContent.title}
      description={localizedContent.description}
      subtitle={localizedContent.subtitle}
    />
  );
}

export function getLocalizedMetadata(language: SupportedLanguage) {
  const localizedContent = LOCALIZED_CONTENT[language];
  
  return {
    title: `${localizedContent.title}`,
    description: localizedContent.description,
    openGraph: {
      title: `${localizedContent.title}`,
      description: localizedContent.description,
      type: 'website',
    },
    alternates: {
      canonical: `/blog/${language}`,
      languages: {
        'fr': '/blog/fr',
        'de': '/blog/de',
        'es': '/blog/es',
        'it': '/blog/it',
        'nl': '/blog/nl',
      },
    },
  };
}
