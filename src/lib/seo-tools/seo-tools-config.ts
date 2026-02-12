import { SeoToolConfig } from './seo-tools-config.types';

export const seoTools: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: 'Keyword Generator',
    title: 'Free Keyword Generator',
    description: 'Find thousands of keyword ideas for your SEO and content marketing campaigns. Get search volume, keyword difficulty, and CPC data.',
    metaDescription: 'Generate keyword ideas for free. Enter a seed keyword and discover hundreds of related keywords with search volume, difficulty scores, and CPC data powered by real-time data.',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Enter a seed keyword',
    inputPlaceholder: 'e.g., email marketing',
    buttonText: 'Find Keywords',
    options: [
      {
        name: 'country',
        label: 'Country',
        choices: [
          { value: '2840', label: 'United States' },
          { value: '2826', label: 'United Kingdom' },
          { value: '2276', label: 'Germany' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Spain' },
          { value: '2380', label: 'Italy' },
          { value: '2076', label: 'Brazil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japan' },
          { value: '2528', label: 'Netherlands' },
          { value: '2792', label: 'Turkey' },
          { value: '2410', label: 'South Korea' },
          { value: '2484', label: 'Mexico' },
        ],
        default: '2840',
        type: 'country-select',
      },
    ],
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competition', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'keyword-generator',
    freeResultLimit: 50,
    useCases: [
      {
        title: 'Content Planning',
        description: 'Discover high-volume, low-competition keywords to plan your blog posts and content strategy around topics your audience is searching for.',
      },
      {
        title: 'SEO Campaign Research',
        description: 'Find the best keywords to target in your SEO campaigns by analyzing search volume, difficulty, and commercial intent.',
      },
      {
        title: 'Competitor Gap Analysis',
        description: 'Identify keyword opportunities your competitors may be missing by exploring related keyword variations and long-tail phrases.',
      },
      {
        title: 'PPC Campaign Planning',
        description: 'Use CPC data to estimate advertising costs and find cost-effective keywords for your Google Ads campaigns.',
      },
    ],
    faqs: [
      {
        question: 'How does the Keyword Generator work?',
        answer: 'Enter a seed keyword and select your target country. Our tool uses real-time search data to find related keyword ideas along with metrics like monthly search volume, keyword difficulty, and cost-per-click (CPC).',
      },
      {
        question: 'What is Keyword Difficulty (KD)?',
        answer: 'Keyword Difficulty is a score from 0 to 100 that estimates how hard it would be to rank in the top 10 organic search results for a given keyword. A higher score means more competition.',
      },
      {
        question: 'How many keywords can I generate for free?',
        answer: 'Each search returns up to 50 keyword ideas with full metrics. You can run multiple searches with different seed keywords to discover more ideas.',
      },
      {
        question: 'How often is the keyword data updated?',
        answer: 'Our keyword data is updated regularly and reflects the most recent search trends and volume estimates available.',
      },
      {
        question: 'Can I export the keyword results?',
        answer: 'Yes, you can export your keyword results as a CSV file using the export button in the results table.',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: 'Keyword Difficulty Checker',
    title: 'Free Keyword Difficulty Checker',
    description: 'Check how hard it is to rank for any keyword. Get a difficulty score from 0-100 along with search volume and competition data.',
    metaDescription: 'Check keyword difficulty for free. Enter any keyword to see how hard it is to rank in Google\'s top 10 results, with search volume and competitive analysis data.',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Enter a keyword',
    inputPlaceholder: 'e.g., best project management software',
    buttonText: 'Check Difficulty',
    options: [
      {
        name: 'country',
        label: 'Country',
        choices: [
          { value: '2840', label: 'United States' },
          { value: '2826', label: 'United Kingdom' },
          { value: '2276', label: 'Germany' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Spain' },
          { value: '2380', label: 'Italy' },
          { value: '2076', label: 'Brazil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japan' },
        ],
        default: '2840',
        type: 'country-select',
      },
    ],
    resultType: 'keyword-difficulty',
    metricsToShow: ['keyword_difficulty', 'search_volume', 'cpc'],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
    ],
    apiEndpoint: 'keyword-difficulty',
    freeResultLimit: 10,
    useCases: [
      {
        title: 'Keyword Prioritization',
        description: 'Focus your SEO efforts on keywords where you have a realistic chance of ranking by understanding the competitive landscape.',
      },
      {
        title: 'Content Strategy',
        description: 'Balance your content calendar between easy-win keywords and competitive terms to build authority over time.',
      },
      {
        title: 'Competitive Benchmarking',
        description: 'Understand where your site stands relative to competitors by checking the difficulty of keywords they rank for.',
      },
    ],
    faqs: [
      {
        question: 'What does the keyword difficulty score mean?',
        answer: 'The keyword difficulty score ranges from 0 to 100. Scores 0-30 are considered easy (good for new sites), 31-60 are moderate (require quality content and some backlinks), and 61-100 are hard (need strong domain authority and many quality backlinks).',
      },
      {
        question: 'How is keyword difficulty calculated?',
        answer: 'Keyword difficulty is calculated by analyzing the top-ranking pages for a keyword, considering factors like the number and quality of backlinks, domain authority, and content relevance of competing pages.',
      },
      {
        question: 'Can I check multiple keywords at once?',
        answer: 'Currently, you can check one keyword per search. Enter your keyword and we\'ll provide a detailed difficulty analysis with related metrics.',
      },
      {
        question: 'Should I only target low-difficulty keywords?',
        answer: 'Not necessarily. A balanced strategy includes a mix of low-difficulty keywords for quick wins and higher-difficulty keywords for long-term growth. Your choice should consider your domain authority and resources.',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: 'Website Authority Checker',
    title: 'Free Website Authority Checker',
    description: 'Check any website\'s organic search authority for free. See estimated organic traffic, ranked keywords, top-10 positions, and keyword ranking distribution.',
    metaDescription: 'Check any website\'s authority score for free. See organic traffic estimates, total ranked keywords, top-10 keyword positions, and SERP ranking distribution.',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Enter a domain',
    inputPlaceholder: 'e.g., example.com',
    buttonText: 'Check Authority',
    options: [],
    resultType: 'domain-authority',
    metricsToShow: ['domain_score', 'organic_traffic', 'ranked_keywords', 'top_10'],
    tableColumns: [
      { key: 'position', label: 'Position Range', sortable: false, type: 'text' },
      { key: 'keywords', label: 'Keywords', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-authority',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Competitive Analysis',
        description: 'Compare your website\'s organic authority against competitors to understand where you stand in search rankings.',
      },
      {
        title: 'SEO Benchmarking',
        description: 'Track how your site\'s organic visibility compares to industry leaders by analyzing ranked keywords and traffic estimates.',
      },
      {
        title: 'Site Acquisition',
        description: 'Assess the organic search value of a domain before purchasing by checking its traffic estimates and keyword rankings.',
      },
    ],
    faqs: [
      {
        question: 'What is the Domain Score?',
        answer: 'The Domain Score is a metric from 0 to 100 that estimates the overall organic search strength of a website based on its estimated traffic volume. Higher scores indicate stronger organic presence.',
      },
      {
        question: 'What does Organic Traffic mean?',
        answer: 'Organic Traffic is the estimated monthly number of visitors a website receives from organic (non-paid) search results on Google.',
      },
      {
        question: 'What are Ranked Keywords?',
        answer: 'Ranked Keywords is the total number of keywords for which the domain appears in Google\'s top 100 search results.',
      },
      {
        question: 'How is the ranking distribution useful?',
        answer: 'The ranking distribution shows how many keywords a site ranks for at each position range (e.g., #1, #2-3, #4-10). This helps you understand how much of a site\'s traffic comes from top positions vs. lower-visibility rankings.',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'SERP Checker',
    title: 'Free SERP Checker',
    description: 'Check Google search results for any keyword. See who ranks in the top 10 organic positions with titles, URLs, and domains.',
    metaDescription: 'Check Google SERP results for free. Enter any keyword to see the top 10 organic search results with position, title, URL, and domain data.',
    category: 'serp-ranking',
    inputType: 'keyword',
    inputLabel: 'Enter a keyword',
    inputPlaceholder: 'e.g., best project management tools',
    buttonText: 'Check SERP',
    options: [
      {
        name: 'country',
        label: 'Country',
        choices: [
          { value: '2840', label: 'United States' },
          { value: '2826', label: 'United Kingdom' },
          { value: '2276', label: 'Germany' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Spain' },
          { value: '2380', label: 'Italy' },
          { value: '2076', label: 'Brazil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japan' },
          { value: '2528', label: 'Netherlands' },
          { value: '2792', label: 'Turkey' },
          { value: '2410', label: 'South Korea' },
          { value: '2484', label: 'Mexico' },
        ],
        default: '2840',
        type: 'country-select',
      },
    ],
    resultType: 'serp-results',
    metricsToShow: ['total_results', 'organic_results'],
    tableColumns: [
      { key: 'position', label: '#', sortable: true, type: 'number' },
      { key: 'title', label: 'Title', sortable: false, type: 'text' },
      { key: 'domain', label: 'Domain', sortable: true, type: 'text' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    apiEndpoint: 'serp-checker',
    freeResultLimit: 10,
    useCases: [
      {
        title: 'Competitor Research',
        description: 'See which websites rank for your target keywords and analyze their content strategies to improve your own rankings.',
      },
      {
        title: 'Content Gap Analysis',
        description: 'Identify content opportunities by checking what types of pages (blogs, product pages, guides) dominate the SERPs for your keywords.',
      },
      {
        title: 'Rank Verification',
        description: 'Verify your website\'s position in search results for specific keywords across different countries.',
      },
      {
        title: 'SERP Feature Analysis',
        description: 'Understand the competitive landscape for any keyword by seeing the top organic results and their domains.',
      },
    ],
    faqs: [
      {
        question: 'What is a SERP?',
        answer: 'SERP stands for Search Engine Results Page. It\'s the page you see after typing a query into Google. Our SERP Checker shows you the top organic (non-paid) results for any keyword.',
      },
      {
        question: 'How many results does the SERP Checker show?',
        answer: 'The free SERP Checker shows up to 10 organic results, which represents the first page of Google search results.',
      },
      {
        question: 'Can I check SERP results for different countries?',
        answer: 'Yes, you can select from 15 different countries to see localized search results. The results reflect what users in that country would see when searching for your keyword.',
      },
      {
        question: 'How often are the SERP results updated?',
        answer: 'Our SERP data is fetched in real-time, so you always see the most current search results for your keyword.',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: 'Keyword Rank Checker',
    title: 'Free Keyword Rank Checker',
    description: 'Check what keywords any website ranks for in Google. See ranking positions, search volumes, and estimated traffic for each keyword.',
    metaDescription: 'Check keyword rankings for any domain for free. See which keywords a website ranks for in Google with position, search volume, CPC, and traffic data.',
    category: 'serp-ranking',
    inputType: 'keyword-url',
    inputLabel: 'Enter a domain',
    inputPlaceholder: 'e.g., example.com',
    secondaryInputLabel: 'Filter by keyword (optional)',
    secondaryInputPlaceholder: 'e.g., marketing',
    buttonText: 'Check Rankings',
    options: [
      {
        name: 'country',
        label: 'Country',
        choices: [
          { value: '2840', label: 'United States' },
          { value: '2826', label: 'United Kingdom' },
          { value: '2276', label: 'Germany' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Spain' },
          { value: '2380', label: 'Italy' },
          { value: '2076', label: 'Brazil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japan' },
          { value: '2528', label: 'Netherlands' },
          { value: '2792', label: 'Turkey' },
          { value: '2410', label: 'South Korea' },
          { value: '2484', label: 'Mexico' },
        ],
        default: '2840',
        type: 'country-select',
      },
    ],
    resultType: 'rank-position',
    metricsToShow: ['total_keywords', 'top_3', 'top_10', 'top_50'],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'position', label: 'Position', sortable: true, type: 'number' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'traffic', label: 'Traffic', sortable: true, type: 'number' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    apiEndpoint: 'keyword-rank-checker',
    freeResultLimit: 50,
    useCases: [
      {
        title: 'Track Your Rankings',
        description: 'Monitor which keywords your website ranks for and at what positions to measure your SEO progress over time.',
      },
      {
        title: 'Competitor Keyword Analysis',
        description: 'Discover which keywords your competitors rank for to find new content and SEO opportunities.',
      },
      {
        title: 'Content Performance',
        description: 'Check which of your pages rank for target keywords and identify pages that need optimization.',
      },
      {
        title: 'Keyword Cannibalization',
        description: 'Identify if multiple pages on your site rank for the same keyword, which can hurt your rankings.',
      },
    ],
    faqs: [
      {
        question: 'How does the Keyword Rank Checker work?',
        answer: 'Enter a domain name and optionally filter by a keyword. The tool shows up to 50 keywords the domain ranks for in Google, sorted by position from highest to lowest.',
      },
      {
        question: 'What data does each keyword show?',
        answer: 'For each keyword, you\'ll see the ranking position in Google, monthly search volume, cost-per-click (CPC), estimated monthly traffic from that keyword, and the ranking URL.',
      },
      {
        question: 'Can I filter results by a specific keyword?',
        answer: 'Yes, use the optional keyword filter field to narrow results to keywords containing your search term. For example, entering "marketing" will show only keywords that contain the word "marketing".',
      },
      {
        question: 'What does the Traffic metric mean?',
        answer: 'Traffic is the estimated number of monthly organic visitors the domain receives from each keyword, based on the keyword\'s search volume and the domain\'s ranking position.',
      },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'YouTube Keyword Tool',
    title: 'Free YouTube Keyword Tool',
    description: 'Find the best keywords for your YouTube videos. Get search volume, difficulty, and CPC data to optimize your video titles, descriptions, and tags.',
    metaDescription: 'Discover high-performing YouTube keywords for free. Research keyword ideas with search volume, difficulty, and CPC data to grow your YouTube channel.',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Enter a keyword for YouTube',
    inputPlaceholder: 'e.g., how to edit videos',
    buttonText: 'Find Keywords',
    options: [
      {
        name: 'country',
        label: 'Country',
        choices: [
          { value: '2840', label: 'United States' },
          { value: '2826', label: 'United Kingdom' },
          { value: '2276', label: 'Germany' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Spain' },
          { value: '2380', label: 'Italy' },
          { value: '2076', label: 'Brazil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japan' },
        ],
        default: '2840',
        type: 'country-select',
      },
    ],
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competition', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'youtube-keyword-tool',
    freeResultLimit: 50,
    useCases: [
      {
        title: 'Video Title Optimization',
        description: 'Find high-volume keywords to include in your YouTube video titles for better discoverability and higher click-through rates.',
      },
      {
        title: 'Content Planning',
        description: 'Discover trending topics and keyword ideas to plan your YouTube content calendar around what viewers are searching for.',
      },
      {
        title: 'Tag Research',
        description: 'Generate a list of relevant keywords to use as tags on your YouTube videos to improve search visibility.',
      },
      {
        title: 'Competitor Analysis',
        description: 'Research what keywords successful YouTube channels are targeting to find content gaps and opportunities.',
      },
    ],
    faqs: [
      {
        question: 'How does the YouTube Keyword Tool work?',
        answer: 'Enter a seed keyword related to your YouTube content. The tool returns related keyword ideas with search volume, keyword difficulty, and CPC data to help you optimize your videos.',
      },
      {
        question: 'Can I use these keywords for YouTube SEO?',
        answer: 'Yes! Use the keyword ideas to optimize your video titles, descriptions, and tags. Focus on keywords with good search volume and lower difficulty for the best results.',
      },
      {
        question: 'How many keywords can I generate?',
        answer: 'Each search returns up to 50 keyword ideas. Run multiple searches with different seed keywords to build a comprehensive keyword list for your YouTube channel.',
      },
      {
        question: 'What does Keyword Difficulty mean for YouTube?',
        answer: 'Keyword Difficulty (KD) is a score from 0-100 indicating how competitive a keyword is. Lower scores mean easier rankings. For YouTube, aim for keywords with moderate difficulty and decent volume.',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: 'Amazon Keyword Tool',
    title: 'Free Amazon Keyword Tool',
    description: 'Research keywords for Amazon product listings. Find high-volume search terms with difficulty and CPC data to optimize your product titles and descriptions.',
    metaDescription: 'Find the best Amazon keywords for free. Research keyword ideas with search volume, difficulty, and CPC to optimize your product listings and boost sales.',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Enter a product keyword',
    inputPlaceholder: 'e.g., wireless headphones',
    buttonText: 'Find Keywords',
    options: [
      {
        name: 'country',
        label: 'Country',
        choices: [
          { value: '2840', label: 'United States' },
          { value: '2826', label: 'United Kingdom' },
          { value: '2276', label: 'Germany' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Spain' },
          { value: '2380', label: 'Italy' },
          { value: '2076', label: 'Brazil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japan' },
        ],
        default: '2840',
        type: 'country-select',
      },
    ],
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competition', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'amazon-keyword-tool',
    freeResultLimit: 50,
    useCases: [
      {
        title: 'Product Listing Optimization',
        description: 'Find the most searched keywords to include in your Amazon product titles, bullet points, and descriptions for higher visibility.',
      },
      {
        title: 'PPC Campaign Keywords',
        description: 'Discover cost-effective keywords for your Amazon Sponsored Products campaigns using CPC and competition data.',
      },
      {
        title: 'Product Research',
        description: 'Identify popular product niches by analyzing search volume and competition for product-related keywords.',
      },
      {
        title: 'Competitor Keyword Analysis',
        description: 'Research what keywords top-selling products target to improve your own listing strategy.',
      },
    ],
    faqs: [
      {
        question: 'How does the Amazon Keyword Tool work?',
        answer: 'Enter a product-related keyword and the tool returns related keyword ideas with search volume, difficulty, and CPC data. Use these to optimize your Amazon product listings.',
      },
      {
        question: 'Can I use these keywords for Amazon SEO?',
        answer: 'Yes! These keywords help you understand what shoppers are searching for. Include relevant high-volume keywords in your product title, bullet points, description, and backend search terms.',
      },
      {
        question: 'What is CPC data useful for on Amazon?',
        answer: 'CPC (Cost Per Click) data helps estimate how much you might pay for Amazon PPC (Sponsored Products) ads targeting those keywords. Higher CPC usually indicates higher commercial intent.',
      },
      {
        question: 'How do I choose the best keywords for my product?',
        answer: 'Look for keywords with high search volume and moderate competition. Prioritize keywords that are highly relevant to your product, as relevance matters more than volume for conversions.',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: 'Bing Keyword Tool',
    title: 'Free Bing Keyword Tool',
    description: 'Research keywords for Bing search engine. Get Bing-specific search volume, CPC, and competition data to optimize your content for Microsoft\'s search engine.',
    metaDescription: 'Find Bing keywords for free. Get real Bing search volume, CPC, and competition data to optimize your content and ads for Microsoft Bing search.',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Enter a keyword',
    inputPlaceholder: 'e.g., project management software',
    buttonText: 'Find Keywords',
    options: [
      {
        name: 'country',
        label: 'Country',
        choices: [
          { value: '2840', label: 'United States' },
          { value: '2826', label: 'United Kingdom' },
          { value: '2276', label: 'Germany' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Spain' },
          { value: '2380', label: 'Italy' },
          { value: '2076', label: 'Brazil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Japan' },
        ],
        default: '2840',
        type: 'country-select',
      },
    ],
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume'],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competition', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'bing-keyword-tool',
    freeResultLimit: 50,
    useCases: [
      {
        title: 'Bing SEO Optimization',
        description: 'Optimize your content specifically for Bing search with real Bing search volume data. Bing has a different user demographic than Google.',
      },
      {
        title: 'Microsoft Advertising',
        description: 'Plan your Microsoft Ads (Bing Ads) campaigns with accurate Bing CPC and competition data.',
      },
      {
        title: 'Diversify Traffic Sources',
        description: 'Don\'t rely solely on Google. Bing powers around 10% of desktop searches and is the default search engine for Microsoft Edge.',
      },
      {
        title: 'Cross-Platform Comparison',
        description: 'Compare keyword search volumes between Google and Bing to understand how your audience searches across different platforms.',
      },
    ],
    faqs: [
      {
        question: 'How does the Bing Keyword Tool work?',
        answer: 'Enter a seed keyword and the tool returns related keyword ideas with Bing-specific search volume, CPC, and competition data. This data comes directly from Bing\'s keyword database.',
      },
      {
        question: 'Why should I care about Bing keywords?',
        answer: 'Bing powers about 10% of desktop searches globally and is the default search engine for Microsoft Edge. Bing users tend to be older, with higher incomes, making it valuable for certain niches.',
      },
      {
        question: 'Is the data from Bing or Google?',
        answer: 'This tool returns real Bing search data, not Google data. The search volumes, CPC, and competition metrics are specific to Bing\'s search engine.',
      },
      {
        question: 'Can I use Bing keyword data for Microsoft Ads?',
        answer: 'Absolutely! The CPC and competition data is directly relevant to Microsoft Advertising (formerly Bing Ads) campaign planning.',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: 'Website Traffic Checker',
    title: 'Free Website Traffic Checker',
    description: 'Check any website\'s estimated organic and paid traffic. See total keywords, traffic value, and ranking movement data.',
    metaDescription: 'Check any website\'s traffic for free. See estimated organic traffic, paid traffic, traffic value, keyword rankings, and ranking trends.',
    category: 'serp-ranking',
    inputType: 'url',
    inputLabel: 'Enter a domain',
    inputPlaceholder: 'e.g., example.com',
    buttonText: 'Check Traffic',
    options: [],
    resultType: 'traffic-overview',
    metricsToShow: ['organic_traffic', 'paid_traffic', 'total_keywords', 'traffic_value'],
    tableColumns: [
      { key: 'metric', label: 'Metric', sortable: false, type: 'text' },
      { key: 'value', label: 'Value', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-traffic-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Competitor Traffic Analysis',
        description: 'Estimate how much organic traffic your competitors receive and compare it to your own site\'s performance.',
      },
      {
        title: 'Market Research',
        description: 'Evaluate the online presence of businesses in your niche by checking their estimated traffic and keyword rankings.',
      },
      {
        title: 'Investment Due Diligence',
        description: 'Assess the traffic value and organic performance of websites before making acquisition or investment decisions.',
      },
      {
        title: 'Campaign Benchmarking',
        description: 'Track keyword ranking movements (new, improved, declined, lost) to measure the impact of your SEO campaigns.',
      },
    ],
    faqs: [
      {
        question: 'How is website traffic estimated?',
        answer: 'Traffic is estimated based on the number of keywords a website ranks for, their search volumes, and the website\'s ranking positions. Higher positions for high-volume keywords result in more estimated traffic.',
      },
      {
        question: 'What does Traffic Value mean?',
        answer: 'Traffic Value is the estimated cost of acquiring the same amount of organic traffic through paid advertising (Google Ads). It indicates the commercial value of a site\'s organic presence.',
      },
      {
        question: 'What do the ranking movements show?',
        answer: 'The table shows how many keywords have changed in rankings: new keywords entering the index, improved positions, declined positions, and keywords lost from the index entirely.',
      },
      {
        question: 'How accurate are the traffic estimates?',
        answer: 'Traffic estimates are based on search volume data and click-through rate models. While they provide a good relative comparison between sites, actual traffic may vary.',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: 'Broken Link Checker',
    title: 'Free Broken Link & Page Health Checker',
    description: 'Check any webpage for broken links, SEO issues, and page health problems. Get a detailed audit with actionable recommendations.',
    metaDescription: 'Check any webpage for broken links and SEO issues for free. Get page health scores, loading times, meta tag analysis, and actionable fix recommendations.',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Enter a URL to check',
    inputPlaceholder: 'e.g., https://example.com',
    buttonText: 'Check Page',
    options: [],
    resultType: 'broken-links',
    metricsToShow: ['page_score', 'issues_found', 'internal_links', 'external_links'],
    tableColumns: [
      { key: 'issue', label: 'Issue', sortable: false, type: 'text' },
      { key: 'severity', label: 'Severity', sortable: true, type: 'badge' },
      { key: 'description', label: 'Description', sortable: false, type: 'text' },
    ],
    apiEndpoint: 'broken-link-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Website Maintenance',
        description: 'Regularly check your pages for broken links and resources that could hurt user experience and search rankings.',
      },
      {
        title: 'Pre-Launch Audit',
        description: 'Audit your pages before launching a new website or after a major redesign to catch issues early.',
      },
      {
        title: 'SEO Health Check',
        description: 'Identify SEO issues like missing meta tags, slow loading times, and poor content-to-code ratio that affect rankings.',
      },
      {
        title: 'Competitor Page Analysis',
        description: 'Analyze competitor pages to find weaknesses in their on-page SEO that you can exploit in your own content.',
      },
    ],
    faqs: [
      {
        question: 'What does the Page Score mean?',
        answer: 'The Page Score (0-100) is an overall assessment of the page\'s technical health and SEO readiness. Higher scores indicate fewer issues and better optimization.',
      },
      {
        question: 'What types of issues does it check?',
        answer: 'The checker looks for broken links, broken resources, HTTPS issues, missing meta tags, slow loading, missing H1 tags, image accessibility, page size, and many more SEO best practices.',
      },
      {
        question: 'What do the severity levels mean?',
        answer: 'Error = critical issues that need immediate attention. Warning = important issues that should be fixed. Info = minor improvements that could enhance performance.',
      },
      {
        question: 'Does it check all links on the page?',
        answer: 'The tool checks the page itself and identifies if broken links or resources are present. For a comprehensive site-wide audit, use this tool on your most important pages.',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'AI Visibility Checker',
    title: 'Free AI Visibility Checker',
    description: 'See how Google AI Overviews affect your website. Find out what percentage of your keywords trigger AI Overviews, how much traffic is at risk, and get an AI Visibility Score.',
    metaDescription: 'Check how Google AI Overviews impact your website for free. See your AI Overview exposure rate, keywords affected, traffic at risk, and AI Visibility Score.',
    category: 'other',
    inputType: 'url',
    inputLabel: 'Enter a domain',
    inputPlaceholder: 'e.g., example.com',
    buttonText: 'Check AI Visibility',
    options: [],
    resultType: 'ai-visibility',
    metricsToShow: ['ai_exposure', 'ai_keywords', 'traffic_at_risk'],
    tableColumns: [
      { key: 'metric', label: 'Metric', sortable: false, type: 'text' },
      { key: 'value', label: 'Value', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'ai-visibility-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'AI Overview Impact Assessment',
        description: 'Discover what percentage of your ranked keywords trigger Google AI Overviews, and how much organic traffic could be affected by AI-generated answers.',
      },
      {
        title: 'Traffic Risk Analysis',
        description: 'Identify how much of your organic traffic comes from keywords where AI Overviews appear, helping you prioritize content that needs optimization.',
      },
      {
        title: 'Competitive AI Benchmarking',
        description: 'Compare your AI Overview exposure against competitors to understand who is more at risk from AI-driven search changes.',
      },
      {
        title: 'Content Strategy Planning',
        description: 'Use AI visibility data to focus your content strategy on keywords where AI Overviews are less prevalent or where you can earn citations.',
      },
    ],
    faqs: [
      {
        question: 'What is the AI Visibility Score?',
        answer: 'The AI Visibility Score (0-100) measures how exposed your website is to Google AI Overviews. It combines your AI Overview exposure rate, the number of top-10 keywords affected, and the volume of traffic at risk. A higher score means more of your keywords are impacted by AI Overviews.',
      },
      {
        question: 'What is AI Overview Exposure?',
        answer: 'AI Overview Exposure is the percentage of your ranked keywords where Google displays an AI Overview (AI-generated answer) in the search results. For example, if 60% of your keywords trigger AI Overviews, a significant portion of your search visibility could be affected.',
      },
      {
        question: 'What does Traffic at Risk mean?',
        answer: 'Traffic at Risk is the estimated organic traffic you receive from keywords where Google shows AI Overviews. These keywords may see reduced click-through rates as users get answers directly from AI-generated content instead of clicking through to your site.',
      },
      {
        question: 'How can I reduce my AI Overview exposure risk?',
        answer: 'Focus on creating in-depth, authoritative content that AI Overviews are likely to cite. Target long-tail keywords and topics where AI Overviews are less common. Build topical authority so your domain is referenced as a source in AI-generated answers.',
      },
    ],
  },
};

export function getSeoToolBySlug(slug: string): SeoToolConfig | undefined {
  return seoTools[slug];
}

export function getAllSeoTools(): SeoToolConfig[] {
  return Object.values(seoTools);
}

export function getAllSeoToolSlugs(): string[] {
  return Object.keys(seoTools);
}
