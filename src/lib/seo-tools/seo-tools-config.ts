import { SeoToolConfig } from './seo-tools-config.types';

export const seoTools: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: 'Keyword Generator',
    title: 'Free Keyword Generator',
    description: 'Find thousands of keyword ideas for your SEO and content marketing campaigns. Get search volume, keyword difficulty, and CPC data.',
    metaDescription: 'Generate keyword ideas from any seed term. See search volume, difficulty, and CPC for 15+ countries — free, no signup required.',
    iconName: 'Search',
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
        title: 'Discover Keyword Opportunities in Any Market',
        description: 'Whether you are expanding into the UK, targeting shoppers in Brazil, or running a local campaign in Japan, this tool lets you research keyword demand across 15+ countries from a single input. Enter a seed keyword like "email marketing," select your target country from the dropdown, and instantly surface the terms real people are typing into Google. This is especially useful for international SEO teams planning content rollouts across multiple regions, or e-commerce brands validating product demand before entering a new market.',
        image: '/Keyword Generator/ideate keywords from a seed keyword in any location.png',
      },
      {
        title: 'Get a Bird\'s-Eye View of a Topic\'s Search Landscape',
        description: 'Before committing resources to a content cluster, you need to know whether the topic has enough search demand and whether the competition is manageable. After entering your seed keyword, the tool returns a summary dashboard showing Total Keywords found (e.g., 50 results), Average Volume across those keywords, and Average Difficulty. This snapshot lets content strategists and SEO managers quickly triage whether a topic is worth pursuing or if they should pivot to a more favorable keyword territory.',
        image: '/Keyword Generator/See a comprehensive overview of your see keyword from search volume to difficulty to cpc.png',
      },
      {
        title: 'Evaluate Keyword-Level Competitiveness for Content Prioritization',
        description: 'The results table surfaces each keyword alongside its monthly search Volume, Keyword Difficulty (KD) score, Cost Per Click (CPC), and Competition index. This multi-metric view allows you to sort and filter for the sweet spot: high-volume, low-difficulty keywords with meaningful commercial intent. PPC managers can use the CPC column to estimate ad spend, while SEO practitioners can use the KD score to decide which keywords to target with long-form content versus which ones need a backlink-first strategy.',
        image: '/Keyword Generator/See any keywords competitive landscape from kyword difficulty to cpc.png',
      },
      {
        title: 'Mine Semantically Related Keywords to Build Topical Authority',
        description: 'Google\'s ranking algorithm rewards pages that comprehensively cover a topic. This view strips away the competitive metrics and shows a clean list of semantically related keywords with their respective search volumes. Use this to identify secondary and LSI (Latent Semantic Indexing) keywords that should appear in your headings, body text, and FAQ sections. By weaving these related terms into your content, you signal topical depth to search engines — which is one of the strongest on-page ranking factors for informational queries.',
        image: '/Keyword Generator/see other semantically relevant keywords (secondary keyword) and their volume close to your main keyword.png',
      },
    ],
    faqs: [
      {
        question: 'What is a keyword generator and how does it work?',
        answer: 'A keyword generator is a research tool that takes a seed keyword — a broad topic or phrase you want to rank for — and returns a list of related search queries that real users type into search engines. Analyze AI\'s keyword generator works by querying a database of search terms, pulling back up to 50 keyword ideas per search, and displaying each keyword\'s monthly search volume, keyword difficulty score, cost per click, and competition level. The process takes seconds and requires no account or login.',
      },
      {
        question: 'How is keyword difficulty (KD) calculated in this tool?',
        answer: 'Keyword difficulty is a score from 0 to 100 that estimates how hard it would be to rank in the top 10 organic results for a given term. The score factors in the backlink strength and domain authority of the pages currently ranking on page one of Google. A KD of 0–10 is considered easy (new sites can compete), 11–30 is medium (requires solid content and some backlinks), 31–60 is hard (needs strong authority and link-building), and 61–100 is very hard (dominated by high-authority sites like Wikipedia, Amazon, or major publishers).',
      },
      {
        question: 'What is the difference between search volume and keyword difficulty?',
        answer: 'Search volume tells you how many people search for a term each month — it measures demand. Keyword difficulty tells you how competitive the search results are for that term — it measures supply-side friction. A keyword with 10,000 monthly searches but a KD of 85 may be less valuable to target than a keyword with 500 searches and a KD of 8, because you can realistically rank for the latter. The best keyword strategy balances both metrics to find terms with adequate demand and achievable competition.',
      },
      {
        question: 'How can I use CPC data from a free keyword tool if I only do SEO?',
        answer: 'CPC (Cost Per Click) reflects how much advertisers are willing to pay for a single click on that keyword in Google Ads. Even if you do not run paid campaigns, CPC is a powerful proxy for commercial intent. Keywords with high CPCs (e.g., $15+) indicate that businesses find these searchers valuable — meaning they are closer to a purchase decision. Targeting high-CPC keywords with SEO content can drive traffic that converts at higher rates, making CPC one of the most underused metrics in organic keyword research.',
      },
      {
        question: 'How many keywords can I generate per search?',
        answer: 'Each search returns up to 50 keyword ideas from the seed term you enter. To generate more ideas, try variations of your seed keyword, use long-tail modifiers (e.g., "email marketing for startups" instead of "email marketing"), or search in different countries. Power users often run 10–20 seed keyword searches and compile the results into a master keyword list, which can then be deduplicated and prioritized by volume and difficulty.',
      },
      {
        question: 'Can I use this tool for local SEO keyword research?',
        answer: 'Yes. The country selector supports 15+ countries including the United States, United Kingdom, Germany, France, Spain, Italy, Brazil, Canada, Australia, India, and Japan. By switching the country, you see localized search volume data for that market. This is particularly valuable for local businesses, regional e-commerce shops, and agencies managing multi-location SEO campaigns.',
      },
      {
        question: 'What are semantically related keywords and why do they matter for SEO?',
        answer: 'Semantically related keywords are terms that are conceptually connected to your main keyword even if they don\'t contain the exact same words. For example, for the seed keyword "email marketing," semantically related terms might include "newsletter automation," "drip campaigns," and "subscriber engagement." Google uses natural language processing (NLP) to understand topical relationships between terms. Pages that naturally include semantically related keywords tend to rank higher because they signal comprehensive topic coverage.',
      },
      {
        question: 'How do I find low-competition keywords with this tool?',
        answer: 'Sort the results table by the KD (Keyword Difficulty) column in ascending order. Look for keywords with a KD between 0 and 15, a monthly search volume above 100, and a Competition score below 30. These are your low-hanging fruit — terms where a well-optimized page with original, in-depth content can rank without a heavy backlink investment. Long-tail keywords (3–5 words) typically have lower competition because they target narrower search intents that large competitors often overlook.',
      },
      {
        question: 'What is the competition score column and how is it different from keyword difficulty?',
        answer: 'The Competition score measures how many advertisers are bidding on a keyword in paid search (Google Ads). A score of 100 means nearly every ad slot is filled — heavy advertiser competition. Keyword Difficulty, on the other hand, measures organic ranking competition based on backlink profiles of the top-ranking pages. A keyword can have high paid competition but low organic difficulty (or vice versa). Smart marketers cross-reference both metrics: high paid competition with low organic difficulty signals a profitable keyword you can win with SEO instead of paying for ads.',
      },
      {
        question: 'Can I export the keyword results?',
        answer: 'Yes. The tool includes an Export CSV button at the top of the results table. This lets you download the full keyword list — including volume, KD, CPC, and competition data — into a spreadsheet. From there, you can merge results from multiple searches, apply custom filters, create content calendars, or share the data with writers and SEO team members.',
      },
      {
        question: 'How often is the keyword data updated?',
        answer: 'The keyword database is refreshed regularly to ensure accuracy and relevance. Search volume figures are based on rolling monthly averages, which smooths out short-term spikes and seasonal fluctuations. For trending topics or rapidly evolving industries, it is good practice to cross-reference keyword tool data with Google Trends to capture real-time momentum that may not yet be reflected in average monthly volumes.',
      },
      {
        question: 'How should I use this keyword generator as part of a larger SEO workflow?',
        answer: 'The keyword generator is typically the first step in a five-stage SEO content workflow: (1) Discovery — use this tool to generate keyword ideas from seed terms, (2) Qualification — filter by KD and volume to find viable targets, (3) Clustering — group semantically related keywords into topic clusters, (4) Content Creation — write pages that target primary keywords and naturally incorporate secondary terms, (5) Tracking — use a rank checker to monitor how your pages perform over time.',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: 'Keyword Difficulty Checker',
    title: 'Free Keyword Difficulty Checker',
    description: 'Check how hard it is to rank for any keyword. Get a difficulty score from 0-100 along with search volume and competition data.',
    metaDescription: 'Check any keyword\'s ranking difficulty for free. See KD score, search volume, and CPC to prioritize keywords you can actually rank for.',
    iconName: 'BarChart3',
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
        title: 'Quickly Assess Whether a Keyword Is Worth Targeting',
        description: 'Before writing a single word of content, you need to know if you can realistically rank for your target keyword. Enter any keyword, select from 10+ countries in the dropdown, and get an instant difficulty assessment. This is the first filter in any serious content strategy — it prevents you from wasting weeks of effort on keywords where the top 10 results are dominated by sites with domain authorities you cannot match. Use it to vet client keyword requests, validate blog topic ideas, or pre-screen terms from brainstorming sessions.',
        image: '/keyword difficulty checker/Check the difficulty of any keyword.png',
      },
      {
        title: 'Get a 360-Degree Competitive Snapshot of Any Keyword',
        description: 'The results dashboard shows three critical metrics side by side: Keyword Difficulty (e.g., 58 "Hard"), Search Volume (e.g., 1,900/month), and CPC (e.g., $32.40). This three-metric view gives you the complete picture in one glance. A keyword with a high KD but also high CPC might still be worth pursuing with a long-term authority-building strategy because the commercial intent justifies the effort. Conversely, a low-KD keyword with zero CPC may drive traffic but not revenue. Use this dashboard to make data-driven editorial decisions.',
        image: '/keyword difficulty checker/see the keywords 360 competitiveness with cpc.png',
      },
      {
        title: 'Understand What a Difficulty Score Actually Means',
        description: 'The KD gauge provides a visual, intuitive representation of ranking difficulty. The score runs from 0 to 100 with color-coded severity: green (Easy, 0–20), yellow (Medium, 21–40), orange (Hard, 41–60), and red (Very Hard, 61–100). This visualization is especially useful when presenting keyword research to stakeholders or clients who don\'t work in SEO daily and need a quick, visual answer to "can we rank for this?"',
        image: '/keyword difficulty checker/see the keywords actual difficulty.png',
      },
      {
        title: 'Validate Search Demand Before Investing in Content',
        description: 'Search volume is the foundation of all keyword targeting decisions. This card isolates the monthly search volume metric, letting you confirm that enough people are actively searching for this term to justify creating content. A common mistake in SEO is targeting keywords with zero or negligible volume simply because they seem relevant. This quick check prevents that — and when combined with the KD score, tells you whether the opportunity is both real and achievable.',
        image: '/keyword difficulty checker/see the keywords actual search volume.png',
      },
    ],
    faqs: [
      {
        question: 'What is keyword difficulty and why should I check it before creating content?',
        answer: 'Keyword difficulty (KD) is a metric that estimates how hard it will be to rank in the top 10 organic search results for a specific keyword. It is typically scored on a 0–100 scale. Checking KD before creating content is essential because it prevents you from investing time and money into pages that have almost no chance of ranking. If the top 10 results for a keyword are all pages from sites like Forbes, HubSpot, and Wikipedia — with hundreds of referring domains each — a new or mid-authority site will struggle to compete without a significant link-building investment.',
      },
      {
        question: 'How is keyword difficulty different from keyword competition?',
        answer: 'Keyword difficulty measures organic search competitiveness — how hard it is to rank in Google\'s unpaid results. It is calculated based on the backlink strength of the pages currently in the top 10. Keyword competition (sometimes called competitive density) measures paid search competitiveness — how many advertisers are bidding on that keyword in Google Ads. A keyword can be easy to rank for organically (low KD) but have fierce paid competition (high competition score), or vice versa.',
      },
      {
        question: 'What KD score should I target as a new website?',
        answer: 'New websites (under 1 year old, with fewer than 50 referring domains) should target keywords with a KD of 0–15. These are typically long-tail queries with 3–5 words that larger sites have not specifically optimized for. As your domain authority grows through consistent content creation and link building, you can gradually target keywords with KD scores of 15–30, then 30–50. Attempting to rank for keywords above KD 50 without substantial domain authority will almost always fail, regardless of content quality.',
      },
      {
        question: 'Can a page rank for a high-difficulty keyword without backlinks?',
        answer: 'It is extremely rare. Keyword difficulty is largely determined by the number and quality of backlinks pointing to the top-ranking pages. However, there are edge cases: if your content provides significantly better information gain than existing results (e.g., original research, unique data, or a novel format), and your domain has moderate authority, Google may test your page in higher positions. That said, for KD scores above 40, backlinks are almost always a prerequisite for sustained rankings.',
      },
      {
        question: 'Why does the same keyword have different difficulty scores on different tools?',
        answer: 'Each SEO tool calculates keyword difficulty using its own proprietary algorithm, crawl index, and weighting methodology. Ahrefs emphasizes referring domains to the top 10 results, Moz uses its own Page Authority and Domain Authority metrics, and SEMrush incorporates additional SERP features and content signals. This is why a keyword might show KD 45 on one tool and KD 62 on another. The absolute numbers are less important than the relative ranking — use the same tool consistently so your difficulty comparisons are apples-to-apples.',
      },
      {
        question: 'What role does CPC play in evaluating keyword difficulty?',
        answer: 'CPC (Cost Per Click) does not directly affect organic ranking difficulty, but it provides critical context. A keyword with KD 55 and CPC $0.50 suggests that while ranking is hard, the commercial payoff is low. A keyword with KD 55 and CPC $32.40 tells a different story: this traffic is extremely valuable to businesses, which means ranking organically for it could replace significant ad spend. When two keywords have similar KD scores, prioritize the one with higher CPC — it signals stronger buyer intent and ROI potential.',
      },
      {
        question: 'How do I check keyword difficulty for a specific country?',
        answer: 'Use the Country dropdown on the tool\'s input form to select your target market. Keyword difficulty can vary significantly between countries because the competitive landscape differs. A keyword that is KD 60 in the United States might be KD 25 in Brazil or KD 40 in Germany, simply because fewer high-authority sites are competing in those markets. Always check difficulty for the specific country where your audience is, rather than defaulting to US data.',
      },
      {
        question: 'What is the relationship between keyword difficulty and search volume?',
        answer: 'Generally, higher-volume keywords tend to have higher difficulty because more websites compete for popular search terms. However, this is not always the case. Some high-volume keywords have surprisingly low difficulty (these are goldmine opportunities), and some low-volume keywords have high difficulty because the niche is dominated by authoritative specialists. The ideal keyword target has a search volume above your minimum threshold and a KD score within your domain\'s competitive range.',
      },
      {
        question: 'Should I avoid all high-difficulty keywords?',
        answer: 'No. High-difficulty keywords should be part of your long-term content strategy — they represent your aspirational targets. The approach is to build topical authority first by ranking for easier keywords in the same cluster, then use internal linking and accumulated authority to compete for the harder terms over time. Once those easier pages rank, they strengthen your domain\'s topical authority and improve your chances on the competitive head term.',
      },
      {
        question: 'How often should I re-check keyword difficulty?',
        answer: 'Re-check keyword difficulty quarterly for your core target keywords. The competitive landscape shifts as new content gets published, backlinks are built, and algorithm updates roll out. A keyword that was KD 45 six months ago might now be KD 35 if a previously top-ranking page lost backlinks or was deindexed. Monitoring KD over time also helps you track whether your own SEO efforts are closing the competitive gap.',
      },
      {
        question: 'What does the KD color coding mean (green, yellow, orange, red)?',
        answer: 'The color-coded gauge maps to difficulty ranges: Green (0–20) means the keyword is relatively easy to rank for and suitable for new or low-authority sites. Yellow (21–40) means moderate competition — you\'ll need decent content and some backlinks. Orange (41–60) indicates hard competition — strong content, technical SEO, and an active link-building strategy are needed. Red (61–100) signals very hard competition — only high-authority domains with extensive backlink profiles tend to hold these positions.',
      },
      {
        question: 'Can I check difficulty for multiple keywords at once?',
        answer: 'The free tool checks one keyword at a time, which is ideal for quick spot-checks and validating individual keyword ideas. For batch keyword difficulty analysis — checking dozens or hundreds of keywords simultaneously — you would typically export keywords from the Keyword Generator tool and analyze them in a spreadsheet, or use the KD column that already appears in the Keyword Generator results table.',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: 'Website Authority Checker',
    title: 'Free Website Authority Checker',
    description: 'Check any website\'s organic search authority for free. See estimated organic traffic, ranked keywords, top-10 positions, and keyword ranking distribution.',
    metaDescription: 'Check any website\'s authority score for free. See domain strength, organic traffic, ranked keywords, and SERP position distribution instantly.',
    iconName: 'Globe',
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
        title: 'Check the Domain Authority of Any Website in Seconds',
        description: 'Every link-building decision, competitor analysis, and partnership evaluation starts with one question: how authoritative is this domain? Enter any domain into the checker, click "Check Authority," and get an instant assessment. Whether you\'re vetting a guest post opportunity, evaluating a backlink prospect, or benchmarking your domain against competitors, this is the fastest way to gauge a website\'s overall strength. SEO agencies use this tool dozens of times per day when building link prospect lists and qualifying outreach targets.',
        image: '/Website authority checker/Check the autority of any website.png',
      },
      {
        title: 'Understand SERP Position Distribution Across All Keywords',
        description: 'This breakdown shows how many keywords a site ranks for across each SERP position range: #1, #2–3, #4–10, #11–20, and so on. This distribution tells a deeper story than a single authority number. A site with thousands of #1 rankings has dominant authority. A site with most keywords in positions #21–50 has emerging potential but hasn\'t broken through to page one yet. Use this to assess your own site\'s growth trajectory and to identify competitors whose rankings you can realistically challenge.',
        image: '/Website authority checker/See any websites keywords ranking.png',
      },
      {
        title: 'Evaluate a Domain\'s Traffic and Ranking Scale',
        description: 'The metrics dashboard shows Organic Traffic, total Ranked Keywords, and Keywords in Positions 1–10. These numbers contextualize the authority score with performance data. A domain can have a high authority score but low traffic (meaning its backlink profile is strong but its content strategy is weak), or moderate authority with impressive traffic (meaning its content strategy outperforms its link profile). This multi-metric view prevents single-metric decision-making and gives you the full competitive picture.',
        image: '/Website authority checker/See other details as traffick, rankings, positions.png',
      },
      {
        title: 'See the Actual Authority Score with Severity Grading',
        description: 'The Domain Score gauge displays a 0–100 rating with color-coded severity and a label (e.g., "99 — Very Strong" for hubspot.com). The visual gauge makes authority scores immediately interpretable: green means very strong, yellow means moderate, orange means developing, and red means weak. Use this to set realistic expectations — if your site scores 25 and your competitor scores 85, you know that competing for head terms will require a significant, long-term link-building investment. This visual is also ideal for client reporting and stakeholder presentations.',
        image: '/Website authority checker/See the actual authority score of your website. Score out of 100.png',
      },
    ],
    faqs: [
      {
        question: 'What is website authority and how is it measured?',
        answer: 'Website authority (also called domain authority or domain strength) is an SEO metric that estimates the overall ranking power of a domain based on the quantity and quality of backlinks pointing to it. It is measured on a 0–100 logarithmic scale, meaning it gets exponentially harder to increase your score as you move higher. A score of 30 is relatively easy to achieve with basic link building, while moving from 70 to 80 requires significantly more high-quality backlinks than moving from 20 to 30.',
      },
      {
        question: 'What is a good website authority score?',
        answer: 'Authority is relative to your competitive landscape. A Domain Score of 40 might be excellent in a niche industry where competitors average 25, but weak in a space where competitors average 70. As general benchmarks: 0–20 is new or underdeveloped, 21–40 is developing (typical of small-to-medium businesses), 41–60 is established (competitive in most niches), 61–80 is strong (competitive for high-value keywords), and 81–100 is elite (major brands, news publications, and high-authority platforms).',
      },
      {
        question: 'Is website authority a Google ranking factor?',
        answer: 'Google has publicly stated that "domain authority" is not a direct ranking factor in its algorithm. However, research consistently shows a strong correlation between domain authority and keyword rankings. The practical takeaway is that while Google may not use third-party authority scores directly, the underlying signals (backlink quality, referring domain count, link diversity) are fundamental ranking factors. Authority scores are the best available proxy for these signals.',
      },
      {
        question: 'How is Domain Score different from Moz\'s Domain Authority (DA)?',
        answer: 'Both metrics aim to measure domain strength on a 0–100 scale, but they use different calculation methodologies and data sources. Moz\'s DA is based on its own link index and uses a machine learning model to predict ranking ability. Other Domain Score metrics use their own crawl indexes and calculation formulas. The scores are not interchangeable — a site might be DA 45 on Moz and Domain Score 52 on another tool. What matters is consistency: use the same tool for all comparisons.',
      },
      {
        question: 'How do I improve my website\'s authority score?',
        answer: 'The only reliable way to increase domain authority is by acquiring backlinks from more unique referring domains — especially domains that are themselves authoritative. Effective strategies include: creating link-worthy content (original research, comprehensive guides, free tools), guest posting on industry publications, digital PR and media outreach, broken link building, resource page link building, and building relationships with industry peers.',
      },
      {
        question: 'What do the Organic Traffic and Ranked Keywords metrics tell me about authority?',
        answer: 'These metrics contextualize the authority score with performance data. A high authority score with low organic traffic suggests the domain has a strong backlink profile but weak content or poor keyword targeting. High traffic with moderate authority indicates strong content that outperforms its link profile. The Keywords in Pos. 1–10 metric reveals how many keywords a domain actually dominates on page one — this is the ultimate measure of competitive authority in action.',
      },
      {
        question: 'What is the position distribution table and how do I read it?',
        answer: 'The position distribution table breaks down how many keywords a domain ranks for across different SERP positions: #1, #2–3, #4–10, #11–20, #21–30, and so on. A healthy, growing site shows a pyramid shape — fewer keywords at position #1, more at #2–10, and progressively more in lower positions. If most keywords cluster in positions #41–100, the site has visibility but lacks the authority or content quality to break onto page one.',
      },
      {
        question: 'Can I use website authority to evaluate backlink prospects?',
        answer: 'Yes — this is one of the most common use cases. When building backlinks, prioritize sites with Domain Scores above 30 and ideally above 50 for maximum link equity transfer. However, authority score alone is insufficient. Also check whether the site publishes quality content, has relevant topical alignment with your niche, gets real organic traffic, and has a natural outbound link profile.',
      },
      {
        question: 'Why do some websites have high authority but low traffic?',
        answer: 'This happens for several reasons: the site has accumulated backlinks over years but doesn\'t actively create content targeting search keywords, the site\'s content is outdated and no longer matches current search intent, the site has been penalized by Google for other quality issues despite having strong backlinks, or the site is in a low-volume niche where even first-page rankings don\'t generate massive traffic.',
      },
      {
        question: 'How often does website authority change?',
        answer: 'Authority scores fluctuate as the underlying backlink data is recrawled and updated. New backlinks increase your score; lost backlinks decrease it. Major changes usually take 4–8 weeks to be reflected in authority metrics. Gradual increases of 1–3 points per month are typical for sites actively building links. Sudden drops may indicate a loss of important backlinks or a recalculation by the scoring tool.',
      },
      {
        question: 'What is the relationship between website authority and link equity?',
        answer: 'Website authority is essentially a summary of accumulated link equity. Every backlink from an external site passes some link equity to your domain, and the total accumulated equity is reflected in your authority score. Higher-authority referring domains pass more link equity. Pages on high-authority domains inherit domain-level equity, giving them a head start in rankings.',
      },
      {
        question: 'Should I focus on increasing my authority score or my organic traffic?',
        answer: 'Focus on organic traffic — authority is a means to that end, not a goal in itself. The most effective strategy is to simultaneously build links (increasing authority) and create keyword-targeted content (capturing traffic). A high authority score without targeted content generates no traffic. Great content without authority struggles to rank for competitive keywords. The two work synergistically.',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'SERP Checker',
    title: 'Free SERP Checker',
    description: 'Check Google search results for any keyword. See who ranks in the top 10 organic positions with titles, URLs, and domains.',
    metaDescription: 'Analyze Google\'s top results for any keyword in any country. See rankings, domains, URLs, and total results to plan your SEO strategy.',
    iconName: 'TrendingUp',
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
        title: 'Check Google\'s SERP for Any Keyword in Any Country',
        description: 'Understanding what currently ranks is the foundation of any SEO campaign. Enter a keyword, select your target country from 15+ options, and instantly see the live SERP landscape. This tells you who your competitors are, what content formats dominate, and how crowded the space is. International SEOs use the country selector to compare SERP compositions across markets — the #1 result in the US may not even rank in Germany, revealing localization opportunities.',
        image: '/SERP Checker/Check the SERP for any keyword for any given country.png',
      },
      {
        title: 'Analyze the Content Types and Domains That Rank',
        description: 'The SERP results display shows Total Results, Organic Results count, and the actual ranking pages with their titles, URLs, and descriptions. This lets you analyze content format patterns: are the top results blog posts, product pages, comparison articles, or tools? This intelligence tells you exactly what content format Google rewards for this query, so you can match or differentiate your approach.',
        image: '/SERP Checker/Find the different types of content that rank on the SERP.png',
      },
      {
        title: 'Assess SERP Competitiveness Before Targeting a Keyword',
        description: 'Before committing resources to a keyword, run it through the SERP Checker to see who you\'d be competing against. If the SERP is dominated by sites with massive authority (Amazon, Wikipedia, government sites), that keyword may require a different approach — like targeting a long-tail variation or a featured snippet opportunity. If the SERP includes smaller or newer sites, there\'s a realistic path to ranking.',
        image: '/SERP Checker/See how competitive any keyword is on the SERP.png',
      },
      {
        title: 'Track Your Brand\'s Position for Target Keywords',
        description: 'The detailed results table shows Title, Domain, and full URL for each ranking position. Scroll through to find whether your site (or your competitor\'s site) appears in the results. Use this to verify rank tracker data, spot check critical keywords before client meetings, or confirm that a newly published page has entered the SERP.',
        image: '/SERP Checker/See your brands ranking for any keyword on the SERP.png',
      },
    ],
    faqs: [
      {
        question: 'What is a SERP checker and why do I need one?',
        answer: 'A SERP (Search Engine Results Page) checker shows you the actual Google search results for any keyword in any country, without the personalization biases of your own browser. When you search Google yourself, your results are influenced by your search history, location, device, and logged-in Google account. A SERP checker provides a neutral, unbiased view of rankings — the same results a first-time searcher would see.',
      },
      {
        question: 'How does the SERP Checker handle location-based results?',
        answer: 'The tool uses the country selector to simulate searches from the selected country\'s Google index (e.g., google.com for the US, google.co.uk for the UK, google.de for Germany). SERP composition can vary dramatically between countries — different domains rank, different content formats appear, and even the number of SERP features can change. Always check the SERP for your target country, not just the US default.',
      },
      {
        question: 'What do "Total Results" and "Organic Results" numbers mean?',
        answer: '"Total Results" is the number Google reports for matching pages. This is a rough indicator of topic breadth but is not reliable for competition analysis. "Organic Results" counts how many traditional blue-link results appear on page one. If a SERP shows only 8 organic results instead of the standard 10, the remaining space is occupied by SERP features like featured snippets, maps, videos, or People Also Ask boxes.',
      },
      {
        question: 'How can I use SERP data to decide what content format to create?',
        answer: 'Analyze the top 10 results and categorize them: Are they how-to guides, listicles, tool pages, comparison articles, product pages, or video results? If 7 out of 10 results are listicles, Google has determined that searchers want list-format content for this keyword. Creating a different format will likely underperform. Match the dominant format, then differentiate through depth, freshness, unique data, or better user experience.',
      },
      {
        question: 'Why do SERPs differ between desktop and mobile?',
        answer: 'Google maintains separate ranking algorithms for desktop and mobile search. Mobile SERPs prioritize mobile-friendly pages, give more weight to page speed metrics, and show different SERP features. A page ranking #3 on desktop might rank #7 on mobile if it has poor mobile experience. Always check both versions if your audience is split across devices, and prioritize mobile optimization since Google uses mobile-first indexing.',
      },
      {
        question: 'What are SERP features and how do they affect my click-through rate?',
        answer: 'SERP features are non-traditional results including featured snippets, People Also Ask boxes, video carousels, image packs, knowledge panels, local map packs, and shopping results. Each feature that appears reduces clicks to organic results — a phenomenon called "SERP feature cannibalization." If a SERP is loaded with features, even a #1 organic ranking may get fewer clicks than expected.',
      },
      {
        question: 'How often do Google SERPs change for a given keyword?',
        answer: 'SERP volatility varies by keyword type. Evergreen informational keywords may have stable SERPs that change little over months. News-related and trending keywords can see complete SERP turnover within hours. Commercial and competitive keywords typically experience gradual shifts as pages gain or lose backlinks and algorithm updates roll out. Checking SERPs monthly for your core keywords helps detect new competitors.',
      },
      {
        question: 'Can I use SERP data for competitive gap analysis?',
        answer: 'Absolutely. Search the same keyword across multiple SERP checks and note which domains appear consistently in the top 10. Domains that rank for many of your target keywords are your primary SEO competitors (which may differ from your business competitors). Analyze what these ranking pages have in common — content length, structure, backlink count, content freshness — and identify gaps where your content could be superior.',
      },
      {
        question: 'What does it mean if my site appears in the SERP but at a low position?',
        answer: 'If your page appears in positions 11–30 (page 2–3 of Google), it means Google has recognized your content as relevant but doesn\'t yet consider it authoritative or comprehensive enough for page one. This is actually a positive signal — you\'re in the "striking distance" range. Improvements that can push you to page one include adding more comprehensive content, building 3–5 quality backlinks, improving page speed, and adding supporting internal links.',
      },
      {
        question: 'How do I use the SERP Checker to find featured snippet opportunities?',
        answer: 'Check SERPs for your target keywords and look for queries where a featured snippet currently appears. Then examine whether the snippet content could be improved. Target keywords where you already rank in positions 1–10, since Google primarily pulls featured snippets from pages already on page one. Create more comprehensive answers formatted specifically for snippet extraction using clear headings, numbered lists, tables, or concise paragraph answers.',
      },
      {
        question: 'What role does the URL structure play in SERP performance?',
        answer: 'The SERP checker shows full URLs for each ranking result, which reveals URL structure patterns. Clean, descriptive URLs that include the target keyword tend to appear more frequently in top positions. Long, parameter-heavy URLs or those with random character strings perform worse. Analyze the URL patterns of top-ranking pages — if all top results use short, keyword-rich slugs, that\'s a signal to match this pattern.',
      },
      {
        question: 'Can SERP Checker data help with PPC campaigns?',
        answer: 'Yes. SERP data reveals the organic competitive landscape, which informs paid search strategy: if organic results are dominated by massive competitors, PPC might be a faster path to visibility. The content formats in organic results hint at user intent — match your ad landing page to this intent for higher Quality Scores. If few ads appear on the SERP, there\'s low paid competition and potentially cheap CPCs.',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: 'Keyword Rank Checker',
    title: 'Free Keyword Rank Checker',
    description: 'Check what keywords any website ranks for in Google. See ranking positions, search volumes, and estimated traffic for each keyword.',
    metaDescription: 'Check your website\'s keyword rankings in any country for free. See positions, traffic, CPC, and content performance across all your pages.',
    iconName: 'BarChart3',
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
        title: 'Check Your Website\'s Rankings on Any Country\'s SERP',
        description: 'Knowing where you rank is the scoreboard of SEO. Enter your domain, optionally filter by a specific keyword, select your country, and see exactly where your site appears across Google\'s results. The keyword filter is especially powerful — instead of sifting through hundreds of rankings, you can instantly check a specific target term. International brands and multi-market agencies use the country selector to track rankings separately for each market they operate in.',
        image: '/Rank checker/Check the rank of your website on any countrys SERP.png',
      },
      {
        title: 'Spy on Competitor Rankings Across Countries',
        description: 'Enter any competitor\'s domain and select from 15+ countries to see their complete ranking profile. This reveals which keywords they are winning, which markets they prioritize, and where their SEO strategy is strongest. Combined with their content analysis, this tells you exactly where your competitors are most vulnerable — keywords where they rank #5–10 (potentially beatable) versus #1–2 (defended). Agencies use this during competitor audits and new client onboarding to map the competitive landscape.',
        image: '/Rank checker/Check how your competitors rank on Google.png',
      },
      {
        title: 'Analyze Keyword-Level Content Performance',
        description: 'The results table shows every ranking keyword alongside its Position, Search Volume, CPC, estimated Traffic, and the specific URL that ranks. This page-level view lets you identify your best-performing content (pages ranking for multiple high-volume keywords) and your underperformers (pages ranking for low-volume terms or stuck on page 2). Cross-reference the URL column with your content strategy — if a page you invested heavily in isn\'t ranking well, it may need content updates, additional internal links, or targeted backlinks.',
        image: '/Rank checker/See your websites content performance.png',
      },
      {
        title: 'Understand Your Site\'s Overall Ranking Competitiveness',
        description: 'The summary dashboard breaks down Total Keywords, Top 3, Top 10, and Top 50. This distribution instantly tells you where your site stands: having keywords indexed means Google sees your content, but only a few in the top 10 means authority needs to grow. Having many in the top 50 shows strong potential — these are "striking distance" keywords that could reach page one with targeted effort. Track these numbers monthly to measure whether your SEO strategy is moving keywords upward through the SERP positions.',
        image: '/Rank checker/Understand your sites ranking and competitivement across keywords.png',
      },
    ],
    faqs: [
      { question: 'What is a keyword rank checker and how is it different from a SERP checker?', answer: 'A keyword rank checker tells you where YOUR specific website (or any domain) ranks for keywords. You input a domain and it returns the keywords and positions for that site. A SERP checker shows you ALL websites that rank for a specific keyword. Think of it this way: a rank checker answers "what keywords does my site rank for?" while a SERP checker answers "who ranks for this keyword?" Both tools are essential.' },
      { question: 'How accurate are keyword rank checker results?', answer: 'Rank checker results reflect Google\'s organic rankings at the time of the query, based on the selected country and standard (non-personalized) search settings. Results may differ slightly from what you see when you Google directly because your browser personalizes results based on your search history, location, and logged-in account. Always use a rank checker tool rather than manual Google searches when tracking rankings.' },
      { question: 'What does the "Top 3," "Top 10," and "Top 50" breakdown mean?', answer: '"Top 3" keywords are your strongest positions (positions 1–3 capture roughly 60% of all organic clicks for a query). "Top 10" means page one of Google, where virtually all organic traffic flows. "Top 50" captures pages 1–5, which represent your visible keyword universe. Keywords outside the top 50 rarely drive measurable traffic.' },
      { question: 'How can I move keywords from page 2 to page 1 of Google?', answer: 'Keywords ranking in positions 11–20 are your highest-priority optimization targets. Tactics include: update and expand the content to better match search intent, build 3–5 quality backlinks to the specific page, improve the page\'s title tag and meta description for higher click-through rate, add internal links from your highest-authority pages, improve page speed and Core Web Vitals, and add structured data markup.' },
      { question: 'How often should I check my keyword rankings?', answer: 'Check your core target keywords (the 10–20 keywords most important to your business) weekly. Check your broader keyword portfolio monthly. Avoid checking daily — rankings fluctuate naturally by 1–3 positions on any given day due to Google\'s algorithm adjustments, testing, and index refreshes.' },
      { question: 'Why do my rankings differ between countries?', answer: 'Google maintains separate search indexes and ranking algorithms for each country. Factors that influence country-specific rankings include content language and localization, server location and CDN presence, country-specific backlinks, local business signals, hreflang tag implementation, and country-specific search behavior and competition.' },
      { question: 'What does the Traffic column estimate and how reliable is it?', answer: 'The Traffic column estimates the monthly organic visits a keyword sends to your URL based on its ranking position and the keyword\'s search volume. It uses click-through rate models — position #1 gets approximately 27–31% of clicks, #2 gets 15–17%, #3 gets 10–12%, and so on. These are estimates, not exact numbers, but they are directionally accurate.' },
      { question: 'How do I use rank data to identify content optimization opportunities?', answer: 'Look for pages ranking in positions 4–15 for high-volume keywords — these are your highest-ROI optimization targets. Then analyze why they aren\'t ranking higher: Is the content less comprehensive than competitors? Does the page have fewer backlinks? Is the title tag less compelling? Compare your page against the current top 3 results for each keyword.' },
      { question: 'What does CPC data in a rank checker tell me about my rankings?', answer: 'CPC reveals the commercial value of each keyword you rank for. If you rank #3 for a keyword with $25 CPC, that position is saving you significant advertising spend — you\'re getting those clicks for free that would cost $25 each through Google Ads. Multiply the estimated traffic by CPC to calculate the "traffic value" of each ranking.' },
      { question: 'Can I filter rank results by specific keywords?', answer: 'Yes. The optional "Filter by keyword" field lets you enter a specific keyword or phrase to narrow results. This is useful when you want to check your rankings for a particular topic cluster rather than viewing all keywords at once. This filtering capability makes the tool practical even for sites ranking for hundreds or thousands of keywords.' },
      { question: 'How do I track ranking improvements over time?', answer: 'Export your ranking data to CSV each time you run a check, and compare position changes month over month. Create a simple spreadsheet tracking your top 20 keywords, their positions each month, and the direction of change. Over 3–6 months, you should see a clear trend: keywords gradually moving toward positions 1–10 indicates a working SEO strategy.' },
      { question: 'What is the difference between the rank checker\'s URL column and the SERP checker?', answer: 'The rank checker\'s URL column shows which specific page on YOUR domain ranks for each keyword. This is powerful for internal SEO management: you can see whether the right page is ranking, identify keyword cannibalization (two of your pages competing for the same keyword), and discover pages that rank for unexpected terms. The SERP checker shows all domains ranking for a keyword.' },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'YouTube Keyword Tool',
    title: 'Free YouTube Keyword Tool',
    description: 'Find the best keywords for your YouTube videos. Get search volume, difficulty, and CPC data to optimize your video titles, descriptions, and tags.',
    metaDescription: 'Find YouTube keyword ideas for any niche. See search volume, difficulty, and CPC to plan video content that gets discovered and ranked.',
    iconName: 'Youtube',
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
        title: 'Research Video Topics People Are Actually Searching For',
        description: 'YouTube is the second largest search engine in the world, and most creators fail because they make videos nobody is searching for. Enter a keyword like "how to edit a video," select your target country, and instantly see what YouTube users are typing into the search bar. This replaces guesswork with data — instead of hoping a video topic performs well, you know in advance that real demand exists. Content creators, video marketers, and YouTube channel managers use this as the starting point for every editorial calendar.',
        image: '/Youtube keyword tool/Research and plan your youtube content better.png',
      },
      {
        title: 'Evaluate the Competitive Landscape of YouTube Keywords',
        description: 'The results table shows each keyword alongside its YouTube-specific Volume, Keyword Difficulty (KD), CPC, and Competition score. This lets you identify which video topics are achievable for your channel size. A small channel with under 1,000 subscribers should target keywords with KD below 20, while established channels can compete for higher-difficulty terms. The CPC column also reveals which keywords attract advertiser spending — useful if your monetization strategy depends on YouTube ad revenue, since higher-CPC keywords typically generate better RPMs.',
        image: '/Youtube keyword tool/See how competitive your youtube content ideas are.png',
      },
      {
        title: 'Gauge Overall Topic Viability Before Committing to a Content Series',
        description: 'The summary dashboard shows Total Keywords (50), Average Volume, and Average Difficulty for the keyword cluster around your seed term. This tells you whether a topic has enough depth and demand to sustain a video series. If the average volume is strong and average difficulty is manageable, you have a green light to plan a multi-video content series around the topic. If the numbers are weak, pivot before investing production time. Video production is expensive — this 10-second check can save hours of wasted effort.',
        image: '/Youtube keyword tool/See the search volume of your content ideas on youtube.png',
      },
      {
        title: 'Build Semantic Relevance Into Video Titles, Tags, and Descriptions',
        description: 'YouTube\'s algorithm, like Google\'s, rewards content that demonstrates topical depth. This view shows related keywords and their search volumes, which should be woven into your video title, description, tags, and even spoken dialogue (YouTube transcribes and indexes audio). For example, if your main keyword is "how to edit a video," related terms like "video clip maker," "reverse video editing software," and "aspect ratio youtube video" should appear naturally in your metadata. This semantic optimization dramatically improves discoverability across related searches.',
        image: '/Youtube keyword tool/Use related keywords to make your youtube video semantically relevant.png',
      },
    ],
    faqs: [
      {
        question: 'Why do I need a YouTube-specific keyword tool instead of a regular keyword tool?',
        answer: 'YouTube and Google are separate search engines with different algorithms, user behaviors, and search patterns. A keyword that gets 10,000 searches on Google might get only 200 on YouTube, and vice versa. YouTube keyword tools pull data from YouTube\'s search ecosystem specifically, giving you accurate volume estimates for the platform where your videos actually need to rank. Using Google keyword data for YouTube optimization is like using a road map to navigate the ocean — the terrain is fundamentally different.',
      },
      {
        question: 'How does YouTube keyword difficulty differ from Google keyword difficulty?',
        answer: 'YouTube KD measures the competition among videos, not web pages. Factors that influence YouTube ranking include watch time, click-through rate on thumbnails, engagement (likes, comments, shares), channel authority, and video metadata optimization. While backlinks matter more for Google, watch time and engagement matter more for YouTube. A keyword with KD 20 on YouTube means you can compete with a well-produced, well-optimized video even if your channel is relatively new.',
      },
      {
        question: 'How can I find low-competition YouTube keywords for a new channel?',
        answer: 'Filter results for keywords with KD between 0 and 15 and a search volume above 50. Focus on long-tail queries (3–6 words) that address specific questions or tutorials, such as "how to edit a YouTube video on iPhone" rather than "video editing." New channels should also look for "question" keywords (starting with how, what, why, can) because these tend to have lower competition and higher engagement, since viewers watch longer when they genuinely need the answer.',
      },
      {
        question: 'What does CPC mean for YouTube keywords and how should creators use it?',
        answer: 'CPC represents how much advertisers pay per click for ads shown against that keyword. For YouTube creators, higher CPC keywords translate to higher ad revenue per thousand views (RPM). If you are monetized through the YouTube Partner Program, targeting keywords with CPCs above $3–5 means advertisers are willing to pay more for your audience, which directly increases your earnings. This is particularly relevant for channels in finance, software, insurance, and B2B niches where CPCs can exceed $20.',
      },
      {
        question: 'How do I use YouTube keywords to optimize my video metadata?',
        answer: 'Place your primary keyword in the video title (preferably near the beginning), the first sentence of the description, and as the first tag. Use secondary keywords from the related keywords list as additional tags, in your description body, and as chapter titles if you use timestamps. YouTube also transcribes your audio and uses it for ranking, so say your primary keyword in the first 30 seconds of the video. This multi-touch keyword placement signals to YouTube exactly what your video is about.',
      },
      {
        question: 'Can this tool help me find trending YouTube topics?',
        answer: 'The tool shows average monthly search volumes, which reflect sustained interest rather than viral spikes. For trending topics, pair this tool with YouTube Trending, Google Trends (filtered to YouTube Search), and social listening tools. The best strategy combines trending awareness with keyword data: when you spot a trending topic, check it in the YouTube keyword tool to see if there is also search demand. Topics with both trend momentum and search volume are the highest-opportunity targets.',
      },
      {
        question: 'What is a good search volume threshold for YouTube keywords?',
        answer: 'It depends on your niche. In broad niches like gaming, cooking, or fitness, target keywords with 500+ monthly YouTube searches. In specialized niches like B2B SaaS, data science, or niche hobbies, keywords with 50–200 searches can drive meaningful traffic because the audience is more targeted and valuable. The key metric is not just volume but also competition — a 100-volume keyword with KD 5 is often more valuable than a 5,000-volume keyword with KD 70, especially for growing channels.',
      },
      {
        question: 'How do I plan a YouTube content series using keyword data?',
        answer: 'Start by entering a broad topic keyword and reviewing all 50 results. Group related keywords into clusters (e.g., beginner tutorials, advanced techniques, tool reviews, comparisons). Each cluster becomes a playlist, and each keyword within the cluster becomes an individual video. This "hub and spoke" approach mirrors how Google rewards topical authority — YouTube similarly boosts channels that demonstrate deep expertise in a subject through interlinked playlists and consistent publishing on related topics.',
      },
      {
        question: 'Should I target the same keywords on YouTube and Google simultaneously?',
        answer: 'Yes — this is called a video SEO double-dip strategy. Many Google SERPs now include a video carousel, and YouTube videos frequently appear in these carousels. By targeting the same keyword on both platforms, you can capture traffic from Google\'s video carousel AND YouTube\'s native search. Prioritize keywords where Google already shows video results. Tutorial, how-to, and review queries are the most likely to trigger video carousels.',
      },
      {
        question: 'How does the Competition score for YouTube keywords work?',
        answer: 'The Competition score (0–100) reflects how many advertisers are bidding on that keyword for YouTube ad placements. A score of 100 means maximum advertiser competition; 0 means no advertisers are targeting it. While this primarily affects ad revenue rather than organic ranking, a high competition score indicates commercial interest in your audience. Creators can leverage this by approaching brands in high-competition niches for sponsorship deals, since those brands are already spending money to reach that audience through ads.',
      },
      {
        question: 'How many keywords should I use in a single YouTube video?',
        answer: 'Focus on one primary keyword and 5–10 secondary keywords per video. Your primary keyword drives the title and main topic. Secondary keywords appear in the description, tags, and chapter headings. Overstuffing keywords harms both the viewer experience and YouTube\'s algorithm, which detects unnatural repetition. The related keywords list from this tool gives you the perfect set of secondary terms that are semantically connected, ensuring your metadata reads naturally while maximizing discoverability.',
      },
      {
        question: 'Can I use this tool for YouTube Shorts keyword research?',
        answer: 'Yes. YouTube Shorts surface in YouTube Search, the Shorts feed, and increasingly in Google Search. The same keyword data applies — if a term has high search volume on YouTube, creating a Short targeting that term can capture additional exposure. Shorts work particularly well for high-volume, low-depth queries like "how to [quick task]" or "[product] review in 60 seconds." Use the keyword tool to find these snackable topics, then create Shorts for quick wins while reserving long-form videos for deeper, higher-difficulty keywords.',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: 'Amazon Keyword Tool',
    title: 'Free Amazon Keyword Tool',
    description: 'Research keywords for Amazon product listings. Find high-volume search terms with difficulty and CPC data to optimize your product titles and descriptions.',
    metaDescription: 'Research Amazon product keywords for free. See search volume, difficulty, and CPC to optimize listings and discover high-demand product niches.',
    iconName: 'ShoppingBag',
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
        title: 'Validate Product Ideas Before Investing in Inventory',
        description: 'Launching a product on Amazon without keyword research is like opening a store on a street with no foot traffic. Enter a product keyword like "wireless headphones," select your country, and instantly see how many people are searching for products in that category. The country dropdown lets you compare demand across 10+ markets — so you can validate whether your product has search demand in the US, UK, Germany, or other Amazon marketplaces before committing to inventory purchases, manufacturing runs, or FBA shipments.',
        image: '/Amazon keyword tool/Check how viable your ideas are on amazon.png',
      },
      {
        title: 'Analyze Competitive Density Across Product Keywords',
        description: 'The results table displays each product keyword alongside its Volume, KD, CPC, and Competition score. Top keywords may show volumes of 450,000 with competition scores of 100 — meaning this is an extremely saturated market. But drilling deeper reveals less competitive sub-niches where new sellers can compete. This table is essential for Amazon FBA sellers and private-label brands identifying product niches with manageable competition.',
        image: '/Amazon keyword tool/See how competitive a business idea is on Amazon.png',
      },
      {
        title: 'Quantify Product Category Demand at a Glance',
        description: 'The summary dashboard shows Total Keywords (50), Average Volume, and Average Difficulty for your product category. Amazon sellers use this snapshot to compare category sizes — if you\'re deciding between entering one market versus another, this dashboard gives you the demand comparison in seconds. The average difficulty also tells you whether many long-tail product keywords remain accessible.',
        image: '/Amazon keyword tool/See how popular and how many people search for a given idea on amazon.png',
      },
      {
        title: 'Discover Backend Keywords and Long-Tail Product Terms',
        description: 'Amazon\'s A10 algorithm ranks products partly based on keyword relevance in titles, bullet points, descriptions, and backend search terms. This view shows the full list of related product keywords and their volumes — from head terms to long-tail variations. These long-tail variations should be placed in your product listing\'s backend search terms field, bullet points, and A+ content to maximize your listing\'s visibility across the widest possible range of shopper queries.',
        image: '/Amazon keyword tool/See other sematically relevant content ideas for your main ideas on amazon.png',
      },
    ],
    faqs: [
      {
        question: 'Why do Amazon keywords differ from Google keywords?',
        answer: 'Amazon and Google serve fundamentally different user intents. Google searchers may be researching, comparing, or just browsing. Amazon searchers are almost always in buying mode — they have purchase intent. This means Amazon keywords are product-focused (brand names, product specifications, use cases) while Google keywords span informational, navigational, and transactional intent.',
      },
      {
        question: 'How does keyword difficulty work for Amazon product listings?',
        answer: 'Amazon keyword difficulty estimates how competitive it is to rank your product listing on Amazon\'s first page for that search term. Factors include the number of established sellers targeting the keyword, their review counts, sales velocity, listing optimization quality, and advertising spend. A KD of 0–10 means a new listing can appear on page one quickly with good optimization. A KD above 40 typically requires competitive pricing, PPC campaigns, strong reviews, and highly optimized listings.',
      },
      {
        question: 'What is a good search volume for an Amazon product keyword?',
        answer: 'For private-label sellers, target primary keywords with at least 1,000 monthly searches to ensure sufficient demand. High-volume head terms (100,000+) are extremely competitive and usually dominated by major brands. Mid-tail keywords (1,000–10,000) often offer the best balance of demand and achievability. Long-tail keywords (under 1,000) work well as backend search terms and in PPC campaigns where specific buyer intent leads to higher conversion rates.',
      },
      {
        question: 'How should I use Amazon keyword data to optimize my product listing?',
        answer: 'Follow Amazon\'s keyword placement hierarchy: (1) Put your primary keyword in the product title, (2) Place your top 5 secondary keywords in bullet points, (3) Use remaining keywords in the product description and A+ Content, (4) Load all remaining relevant terms into backend search terms (up to 250 bytes). Never repeat keywords across these fields — Amazon\'s algorithm counts each keyword once regardless of how many times it appears.',
      },
      {
        question: 'Can I use this tool for Amazon PPC campaign research?',
        answer: 'Absolutely. The CPC column shows what advertisers are paying for clicks on Sponsored Product ads for each keyword. Use this data to estimate your advertising budget, identify keywords where organic ranking would save you significant ad spend, and discover low-CPC keywords where you can run profitable PPC campaigns.',
      },
      {
        question: 'How do I find profitable product niches using this tool?',
        answer: 'Look for keyword clusters where the average search volume is above 5,000 but the average KD is below 20. Then check the CPC — higher CPC indicates that sellers in this niche are profitable enough to afford advertising. The ideal niche has high search demand, low competition, healthy margins, and page-one products with fewer than 500 reviews (indicating market accessibility for new entrants).',
      },
      {
        question: 'What is the difference between the Competition score and KD for Amazon keywords?',
        answer: 'The Competition score reflects paid advertising density — how many sellers are running Sponsored Product ads on that keyword. KD reflects organic ranking difficulty — how hard it is to appear on page one without ads. You can have a keyword with low organic KD but high paid competition, meaning it\'s easy to rank organically but hard to get ad visibility.',
      },
      {
        question: 'How do I use Amazon keywords for product research before launching?',
        answer: 'Use this tool for pre-launch validation: (1) Enter broad product category keywords, (2) Review the volume of related keywords to confirm demand, (3) Check KD to assess competitive feasibility, (4) Look at the breadth of long-tail keywords — a niche with many long-tail variations has room for differentiated products, (5) Cross-reference with your supplier costs to estimate profitability.',
      },
      {
        question: 'Should I target brand-name keywords in my Amazon listing?',
        answer: 'Never include competitor brand names in your product title or bullet points — Amazon\'s terms of service prohibit this and can result in listing suppression. However, brand-related keywords naturally appear in the tool results and are useful for understanding the competitive landscape. Your strategy should be to target the generic equivalents and compete on price, features, and reviews.',
      },
      {
        question: 'Can I use this tool for Amazon markets outside the United States?',
        answer: 'Yes. The country selector supports major Amazon marketplaces including the US, UK, Germany, France, Spain, Italy, Brazil, Canada, Australia, India, and Japan. Each market has different keyword volumes, competition levels, and buyer behaviors. A product that is oversaturated in the US market might be underserved in Germany or Japan.',
      },
      {
        question: 'How many keywords should I include in my Amazon backend search terms?',
        answer: 'Amazon allows up to 250 bytes of backend search terms (roughly 250 characters for English). Use this space for keywords that don\'t naturally fit in your title, bullet points, or description. Prioritize unique keywords — don\'t repeat terms already in your visible listing. Use spaces to separate terms (not commas or semicolons — Amazon treats those as wasted bytes).',
      },
      {
        question: 'How does the Amazon A10 algorithm use keywords to rank product listings?',
        answer: 'Amazon\'s A10 algorithm considers keyword relevance as one of several ranking factors alongside sales velocity, conversion rate, click-through rate, seller authority, and organic sales. Listings with the keyword in the title rank higher than those with it only in backend terms. Beyond matching, the algorithm then ranks by performance metrics — meaning keyword optimization gets you indexed, but conversion rate and sales determine your position.',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: 'Bing Keyword Tool',
    title: 'Free Bing Keyword Tool',
    description: 'Research keywords for Bing search engine. Get Bing-specific search volume, CPC, and competition data to optimize your content for Microsoft\'s search engine.',
    metaDescription: 'Find Bing keyword ideas for free. See search volume, CPC, and competition data to tap into Bing\'s high-converting, less competitive SERP.',
    iconName: 'Search',
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
        title: 'Research Keywords Specifically for the Bing Search Ecosystem',
        description: 'Bing powers search for Microsoft Edge (the default browser on every Windows PC), Cortana, Yahoo Search, and DuckDuckGo\'s organic results. That\'s roughly 10–15% of desktop search traffic — a segment most SEOs ignore entirely. Enter any keyword, select your target country, and get Bing-specific search data. This is especially valuable for B2B marketers and brands targeting older demographics, since Bing users tend to skew toward desktop, higher income, and enterprise environments where Microsoft products are the default.',
        image: '/Bing keyword tool/Search any keyword on any region on Bing.png',
      },
      {
        title: 'Evaluate Bing\'s Unique Volume and Keyword Density',
        description: 'The summary dashboard reveals the total number of keyword ideas and their average volume on Bing. A seed keyword generating over 1,000 related terms means there is a deep, semantically rich topic cluster available on Bing\'s platform. This density metric helps you decide if Bing optimization is worth the effort for your niche. For B2B software keywords, enterprise tool queries, and professional services, Bing often delivers a surprising volume of searchers who are higher-intent and less expensive to convert.',
        image: '/Bing keyword tool/See a keywords volume and semantic density on Bing.png',
      },
      {
        title: 'Compare Organic and Paid Competitiveness on Bing',
        description: 'The results table shows Volume, CPC, and Competition for each keyword on Bing specifically. Bing Ads (Microsoft Advertising) typically has lower CPCs than Google Ads — often 30–50% cheaper for the same keywords. This table lets PPC managers identify keywords where Bing offers a better cost-per-acquisition than Google. It also lets SEO professionals see which keywords face less organic competition on Bing.',
        image: '/Bing keyword tool/Find how competitives organic and paid keywords are in bing.png',
      },
      {
        title: 'Discover Keyword Clusters and Content Opportunities Unique to Bing',
        description: 'This view shows the full list of keyword variations with their search volumes on Bing. Since Bing\'s user base has different demographics and behaviors than Google\'s, the keyword landscape can differ significantly. Terms related to enterprise software, Microsoft integrations, professional tools, and certain age-demographic products often perform disproportionately well on Bing. Use this list to identify content opportunities that your competitors are missing by only optimizing for Google.',
        image: '/Bing keyword tool/Check other clusters around your main keyword in bing.png',
      },
    ],
    faqs: [
      {
        question: 'Why should I care about Bing keywords when Google dominates search?',
        answer: 'Bing captures approximately 10–15% of desktop search traffic globally, which translates to hundreds of millions of searches per month. More importantly, Bing\'s audience tends to be higher-income, older, and more enterprise-oriented — demographics that often convert at higher rates. Because fewer SEOs optimize specifically for Bing, the competitive landscape is significantly less crowded.',
      },
      {
        question: 'How is Bing\'s search algorithm different from Google\'s?',
        answer: 'Bing\'s ranking algorithm shares similarities with Google but has notable differences. Bing places more weight on exact-match keywords in titles and meta descriptions, values social signals from platforms like Facebook and LinkedIn, gives a slight preference to older, established domains, and handles multimedia content more prominently in its SERPs. Bing also tends to be more transparent about its ranking factors.',
      },
      {
        question: 'What industries benefit most from Bing keyword optimization?',
        answer: 'Industries that disproportionately benefit from Bing include B2B software and SaaS (enterprise users on Microsoft-default browsers), financial services (higher-income demographics), healthcare (older demographics), real estate (desktop-heavy research behavior), education, and professional services. Any industry where the target customer is likely using a Windows work computer with Edge as the default browser should consider Bing optimization.',
      },
      {
        question: 'Are Bing Ads cheaper than Google Ads for the same keywords?',
        answer: 'Yes, in most cases. Bing Ads (Microsoft Advertising) CPCs are typically 30–50% lower than Google Ads for equivalent keywords, because there is less advertiser competition on the platform. The CPC data in this tool reflects Bing-specific pricing, letting you calculate potential savings. Many advertisers import their Google Ads campaigns into Bing Ads and achieve significantly lower cost-per-acquisition.',
      },
      {
        question: 'How many keyword ideas can I generate for Bing with this tool?',
        answer: 'The tool can return over 1,000 keyword ideas from a single seed keyword on Bing. This is significantly more than many Bing-specific research tools offer. The volume of keyword ideas indicates the semantic depth of the topic on Bing\'s platform.',
      },
      {
        question: 'Does Bing have its own keyword difficulty metric?',
        answer: 'This tool provides a KD score based on the competitive landscape of Bing\'s organic results, which is separate from Google\'s difficulty metrics. Since fewer websites actively optimize for Bing, you will often find that the same keywords are significantly easier to rank for on Bing than on Google. This creates an arbitrage opportunity.',
      },
      {
        question: 'How does Bing handle search intent differently from Google?',
        answer: 'Bing\'s search results tend to favor direct answers and exact-match content more than Google, which increasingly interprets semantic meaning. This means that on Bing, having the exact keyword phrase in your title tag, H1, and URL slug has a stronger impact on rankings. Bing also surfaces more visual content in search results and has a different approach to local search.',
      },
      {
        question: 'Can I use Bing keyword data to inform my Google SEO strategy?',
        answer: 'Yes — Bing keyword data can reveal valuable search trends and user behaviors that are less visible on Google due to higher competition. Bing\'s keyword suggestions sometimes surface long-tail variations and question formats that don\'t appear in Google\'s keyword tools. These terms often represent genuine user needs that are underserved in Google\'s SERPs too.',
      },
      {
        question: 'What is the Competition score for Bing keywords?',
        answer: 'The Competition score (0–100) reflects how many advertisers are bidding on that keyword in Microsoft Advertising (Bing Ads). A score of 0 means no advertisers are targeting it; 100 means heavy advertiser competition. This metric is distinct from organic competition and primarily matters for PPC campaigns. However, high paid competition on Bing also signals commercial value.',
      },
      {
        question: 'How do I optimize content specifically for Bing\'s search algorithm?',
        answer: 'Key Bing optimization tactics include: use exact-match keywords in your title tag and H1, write clear keyword-rich meta descriptions, ensure your site is verified on Bing Webmaster Tools, build social signals through LinkedIn and Facebook shares, submit an XML sitemap to Bing specifically, use multimedia content with alt text, and ensure fast loading speeds — Bing penalizes slow sites more aggressively than Google.',
      },
      {
        question: 'What percentage of my traffic could come from Bing?',
        answer: 'For most websites, Bing delivers 5–15% of total organic traffic, but this varies dramatically by industry and audience. B2B and enterprise-focused sites often see 15–25% of traffic from Bing, while consumer-focused sites targeting younger demographics may see under 5%. Check your analytics for the Bing/organic source to see your current split.',
      },
      {
        question: 'Does Bing keyword research also cover Yahoo and DuckDuckGo?',
        answer: 'Partially, yes. Bing\'s organic search index powers Yahoo Search results and significantly influences DuckDuckGo\'s organic results. This means optimizing for Bing keywords effectively gives you visibility across three search engines simultaneously.',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: 'Website Traffic Checker',
    title: 'Free Website Traffic Checker',
    description: 'Check any website\'s estimated organic and paid traffic. See total keywords, traffic value, and ranking movement data.',
    metaDescription: 'Check any website\'s organic and paid traffic for free. See keyword rankings, traffic value, and ranking trends to benchmark competitors.',
    iconName: 'TrendingUp',
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
        title: 'Estimate Any Website\'s Search Traffic Instantly',
        description: 'Before entering any market, you need to know how much search traffic your competitors are capturing. Enter any domain into the traffic checker and get an instant estimate of their organic and paid search performance. Whether you\'re evaluating a competitor, researching a potential acquisition, vetting an advertising partner, or analyzing a client\'s current performance, this tool gives you the traffic intelligence that used to require expensive enterprise subscriptions. It\'s the fastest way to answer the question: "How much search traffic does this site actually get?"',
        image: '/website traffic checker/check any websites traffic.png',
      },
      {
        title: 'See Total Keyword Rankings and Traffic Monetary Value',
        description: 'The dashboard shows Total Keywords (e.g., 47,854) and Traffic Value (e.g., $223,458). Total Keywords tells you the breadth of a site\'s search visibility — how many different search terms drive visitors. Traffic Value estimates how much that organic traffic would cost if purchased through Google Ads. A traffic value of $223,458 means this site\'s organic rankings save it nearly a quarter million dollars per month in equivalent ad spend. This metric is one of the most compelling for demonstrating SEO ROI to executives, clients, and stakeholders.',
        image: '/website traffic checker/see how many keywords any site ranks for and traffic of any website traffic.png',
      },
      {
        title: 'Track Keyword Movement Trends: Rising, Falling, New, Lost',
        description: 'The ranking trends table breaks down Keywords in Top 3, Keywords in Top 10, New Keywords, Improved Rankings, Declined Rankings, and Lost Rankings. This is the pulse of SEO performance. If "Improved" outnumbers "Declined," the site\'s SEO is working. If "Lost" is high, something went wrong — possibly an algorithm update hit, content decay, or competitors overtook them. Agencies present this data in monthly reports to show clients whether their SEO investment is generating forward momentum.',
        image: '/website traffic checker/see keywords in tops, declining and improved keywords.png',
      },
      {
        title: 'Compare Organic vs. Paid Traffic Strategy',
        description: 'The split view shows Organic Traffic and Paid Traffic side by side. This reveals a site\'s search strategy at a glance. A site with high organic traffic and zero paid traffic has invested heavily in SEO. A site with balanced organic and paid traffic is diversified. A site relying entirely on paid traffic is vulnerable to budget cuts. Use this to benchmark your own strategy and identify competitive advantages — if your competitor runs zero ads, they may be beatable in paid search, and vice versa.',
        image: '/website traffic checker/see organic and paid traffic.png',
      },
    ],
    faqs: [
      {
        question: 'How does a website traffic checker estimate traffic without access to analytics?',
        answer: 'Traffic checkers estimate organic traffic using a combination of keyword ranking data and click-through rate models. The tool identifies which keywords a site ranks for, their ranking positions, and the monthly search volumes for those keywords. It then applies position-based click-through rate estimates (e.g., #1 gets ~28% of clicks, #2 gets ~15%) to calculate estimated monthly visits from each keyword. The sum of all keyword-level traffic estimates produces the total traffic estimate.',
      },
      {
        question: 'What is traffic value and how is it calculated?',
        answer: 'Traffic value represents the estimated monthly cost of replicating a site\'s organic traffic through Google Ads. It is calculated by multiplying each keyword\'s estimated organic traffic by its CPC (Cost Per Click), then summing across all keywords. For example, if a site gets 1,000 organic visits from a keyword with a $5 CPC, that keyword contributes $5,000 to the traffic value. This powerfully demonstrates the monetary value of SEO investment.',
      },
      {
        question: 'What is the difference between organic traffic and paid traffic?',
        answer: 'Organic traffic comes from unpaid search engine results — users click on your listing because it appeared naturally in Google based on relevance and authority. Paid traffic comes from search advertising (Google Ads) — you pay for each click on your sponsored listing. Organic traffic is "free" in the sense that you don\'t pay per click, but it requires investment in content creation and SEO. Paid traffic delivers immediate visibility but stops the moment you pause your ad budget.',
      },
      {
        question: 'What do the "New Keywords," "Improved," "Declined," and "Lost" metrics mean?',
        answer: '"New Keywords" are search terms the site started ranking for during the most recent period — indicating fresh content is being indexed or existing content is gaining visibility. "Improved Rankings" are keywords where the site\'s position moved up (closer to #1). "Declined Rankings" are keywords where the position dropped. "Lost Rankings" are keywords the site previously ranked for but no longer appears in the top 100. A healthy site typically shows New + Improved significantly outpacing Declined + Lost.',
      },
      {
        question: 'How accurate are website traffic estimates for small sites vs. large sites?',
        answer: 'Traffic estimates are generally more accurate for larger sites with thousands of rankings because the statistical model averages out across many keywords. For small sites ranking for fewer than 100 keywords, estimates can have wider margins of error because a single keyword\'s over- or under-estimation has a larger impact on the total. For competitive benchmarking, the relative comparison (your site vs. competitors) is more reliable than the absolute numbers.',
      },
      {
        question: 'Why does a competitor with lower authority have more traffic than my site?',
        answer: 'Authority and traffic are correlated but not identical. A competitor can outperform you in traffic with lower authority if they: (1) Have a better content strategy targeting higher-volume keywords, (2) Produce content more frequently and consistently, (3) Target long-tail keywords that require less authority to rank, (4) Have superior on-page optimization and technical SEO, or (5) Benefit from topical authority in a specific niche despite lower overall domain metrics.',
      },
      {
        question: 'How can I use traffic checker data for competitive analysis?',
        answer: 'Run the traffic checker on your top 5 competitors and compare: total organic traffic, total keywords, traffic value, organic vs. paid split, and keyword movement trends. This reveals who is growing fastest, who relies on paid ads, who has the largest keyword footprint, and where each competitor generates the most value. Then drill into specific keywords — where do competitors rank that you don\'t? These are your content gap opportunities.',
      },
      {
        question: 'What does it mean if a site has high traffic value but moderate traffic volume?',
        answer: 'This means the site ranks for commercially valuable keywords with high CPCs, even if the search volumes are moderate. A site getting 10,000 monthly visits from keywords averaging $20 CPC has a traffic value of $200,000 — more than a site getting 100,000 visits from keywords averaging $0.50 CPC ($50,000 traffic value). High traffic value relative to traffic volume indicates the site targets bottom-of-funnel, high-intent keywords that drive revenue.',
      },
      {
        question: 'How do I track traffic trends over time?',
        answer: 'Export the traffic data monthly and build a historical dashboard. Track total organic traffic, total keywords, keywords in top 3, keywords in top 10, and traffic value over 6–12 month periods. Plot these as trend lines to visualize growth or decline. The most meaningful metric to trend is "Keywords in Top 10" because it directly correlates with traffic — the more keywords on page one, the more traffic you receive.',
      },
      {
        question: 'Can I use this tool to estimate a website\'s revenue?',
        answer: 'While traffic checker data alone doesn\'t reveal revenue, you can create rough estimates. For ad-supported sites, multiply estimated traffic by typical RPMs ($5–$30 per 1,000 pageviews depending on niche). For e-commerce sites, apply industry-average conversion rates (1–3%) and average order values. For SaaS sites, estimate leads from traffic using typical conversion rates (2–5% to free trial) and known pricing.',
      },
      {
        question: 'Why might a site show zero paid traffic?',
        answer: 'Zero paid traffic means the site is not currently running Google Ads campaigns that the tool\'s data sources can detect. This could mean the site relies entirely on organic SEO (a common strategy for content-driven businesses), runs ads on other platforms (Facebook, LinkedIn, display networks) instead of Google Search, or has recently paused campaigns. Zero paid traffic is not inherently good or bad — it simply indicates the site\'s search visibility strategy is entirely organic.',
      },
      {
        question: 'How does the traffic checker handle subdomains and subfolders?',
        answer: 'The tool checks traffic for the entire domain you enter. If a site uses subdomains (blog.example.com, shop.example.com), these are typically included in the root domain\'s total traffic estimate. Subfolders (example.com/blog/, example.com/shop/) are always included since they are part of the same domain. If you need traffic estimates for a specific subdomain or URL path, some tools offer URL-level analysis that breaks down traffic by page or section.',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: 'Broken Link Checker',
    title: 'Free Broken Link & Page Health Checker',
    description: 'Check any webpage for broken links, SEO issues, and page health problems. Get a detailed audit with actionable recommendations.',
    metaDescription: 'Check any webpage for broken links and SEO issues for free. Get page health scores, internal/external link counts, and fix recommendations.',
    iconName: 'Link2',
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
        title: 'Audit Any Page for Broken Links and Technical SEO Health',
        description: 'Broken links silently destroy user experience and SEO performance. Enter any URL into the checker, click "Check Page," and get an instant audit of that page\'s link health and technical SEO status. This replaces manual link-by-link checking with an automated scan that catches 404 errors, redirect chains, and dead outbound links. Website owners, SEO professionals, and webmasters use this before launching new pages, after site migrations, and as part of regular monthly health checks to prevent link rot from accumulating.',
        image: '/Broken link checker/check your website broken links and technical seo health.png',
      },
      {
        title: 'Monitor Your Technical SEO Score and Critical Issues',
        description: 'Beyond broken links, the tool returns a Page Score (0–100) and the total number of Issues Found. A Page Score of 100 with 0 issues means the page is technically healthy. Anything below 80 signals problems that need attention. This scoring system gives you a quick pass/fail metric for any page on your site, making it easy to prioritize which pages need immediate technical SEO fixes versus which ones are performing well. Use it to benchmark your pages against competitors — if their Page Score is higher, their technical foundation is stronger.',
        image: '/Broken link checker/See your websites technical seo score + number of critical seo issues.png',
      },
      {
        title: 'Analyze Internal and External Link Distribution',
        description: 'The tool counts and categorizes Internal Links (links pointing to other pages on the same domain) and External Links (links pointing to other websites). This data is critical for two reasons: (1) Internal link distribution affects how search engines crawl and index your site — pages with too few internal links get crawled less frequently, and (2) External link quality affects your page\'s trustworthiness — linking out to authoritative sources signals content quality, while links to spammy sites can harm your SEO.',
        image: '/Broken link checker/See internal links from a page, external links.png',
      },
      {
        title: 'Identify and Prioritize Specific Technical Issues to Fix',
        description: 'The issues table lists each problem found, its severity level (info, warning, critical), and a description. Issues like "Render-Blocking Resources" and "Low Content Rate" directly impact Core Web Vitals and content quality signals. Each issue comes with actionable context — you know exactly what\'s wrong and can triage based on severity. This transforms a vague sense of "something is off with my SEO" into a concrete fix list that developers and webmasters can work through systematically.',
        image: '/Broken link checker/see details about techincal issues from your page.png',
      },
    ],
    faqs: [
      {
        question: 'What is a broken link and how does it affect SEO?',
        answer: 'A broken link (also called a dead link or 404 error) is a hyperlink that points to a page that no longer exists or returns an error. Broken links affect SEO in three ways: (1) They waste crawl budget — search engine bots spend time on dead ends instead of indexing useful pages, (2) They break link equity flow — if external sites are linking to a page on your site that returns a 404, you lose the ranking value of those backlinks, and (3) They harm user experience — visitors who encounter broken links lose trust in your site, increasing bounce rate.',
      },
      {
        question: 'What is a Page Score and how is it calculated?',
        answer: 'The Page Score is a 0–100 metric that evaluates the overall technical health of a webpage. It factors in broken links (internal and external), page loading performance, meta tag completeness, content-to-HTML ratio, render-blocking resources, mobile-friendliness indicators, and other technical SEO signals. A score of 90–100 indicates excellent health, 70–89 is good but has room for improvement, 50–69 needs attention, and below 50 suggests serious technical issues that are likely hurting search performance.',
      },
      {
        question: 'What is the difference between internal links and external links in SEO?',
        answer: 'Internal links connect pages within the same domain (e.g., your homepage linking to your blog). They help search engines discover and crawl your content, distribute link equity (ranking power) across your site, and establish content hierarchies. External links (also called outbound links) point from your site to other domains. They signal content quality and topical relevance to search engines when they link to authoritative sources. Both types of links are essential for SEO — a healthy page typically has a strong internal link structure and a few relevant external links to trusted sources.',
      },
      {
        question: 'How often should I check my website for broken links?',
        answer: 'Check your most important pages (homepage, top landing pages, highest-traffic blog posts) monthly. Run a full site-wide broken link audit quarterly. Additionally, always run a check after site migrations, CMS updates, URL structure changes, or content deletions — these are the most common events that create broken links. For large sites with thousands of pages, consider scheduling weekly automated crawls to catch new broken links before they accumulate.',
      },
      {
        question: 'What are render-blocking resources and why do they matter?',
        answer: 'Render-blocking resources are CSS stylesheets and JavaScript files that prevent a browser from displaying the page until they are fully loaded. They slow down the time to first meaningful paint — the moment a user sees actual content. This directly impacts Core Web Vitals metrics like Largest Contentful Paint (LCP) and First Contentful Paint (FCP), which Google uses as ranking factors. Fixes include deferring non-critical JavaScript, inlining critical CSS, and using async loading for non-essential scripts.',
      },
      {
        question: 'What does "Low Content Rate" mean in the issues report?',
        answer: 'Low Content Rate (also called low text-to-HTML ratio) means the page has very little readable text content relative to its HTML code. Search engines may interpret this as a thin content page that provides limited value to users. The typical healthy ratio is above 25% text to HTML. Pages heavy on JavaScript frameworks, large navigation menus, or excessive ads can trigger this issue. The fix is to ensure each page has substantial, unique, informative text content that serves the user\'s search intent.',
      },
      {
        question: 'Can broken links on my site affect pages that don\'t have broken links themselves?',
        answer: 'Yes, through a concept called crawl budget waste. Search engines allocate a limited crawl budget to each site — the number of pages they will crawl per visit. When bots encounter broken links, they follow them to dead ends, using up crawl budget that could have been spent indexing your good pages. On large sites (10,000+ pages), excessive broken links can cause important new content to be discovered and indexed more slowly, indirectly harming the rankings of perfectly healthy pages.',
      },
      {
        question: 'Should I fix internal broken links or external broken links first?',
        answer: 'Fix internal broken links first. Internal broken links directly impact your site\'s crawlability, user navigation, and internal link equity distribution — all of which you fully control. External broken links (links from your page to other sites that have gone down) matter too, but their impact is less severe. For external broken links, either remove the link, replace it with a link to an updated source, or use the Wayback Machine to find archived versions of the content.',
      },
      {
        question: 'What is link equity and how do broken links affect it?',
        answer: 'Link equity (formerly called "link juice") is the ranking value passed from one page to another through hyperlinks. When an authoritative site links to your page, it passes link equity that helps your page rank higher. If that link points to a page on your site that returns a 404 error, the link equity is wasted — it flows into a dead end. By finding broken inbound links and setting up 301 redirects to relevant live pages, you can reclaim this lost link equity and improve your rankings.',
      },
      {
        question: 'How do I use broken link data for link building?',
        answer: 'Broken link building is a proven link acquisition strategy. Find broken pages on competitor or industry sites using a broken link checker. Then create content on your own site that covers the same topic as the dead page. Finally, reach out to the websites that were linking to the broken page and suggest they replace the dead link with a link to your live, relevant content. This strategy works because you\'re helping webmasters fix a real problem while earning a backlink.',
      },
      {
        question: 'What HTTP status codes indicate broken links?',
        answer: 'The most common broken link status codes are: 404 (Not Found — the page doesn\'t exist), 410 (Gone — the page was intentionally removed), 500 (Internal Server Error — the server failed), 502 (Bad Gateway), and 503 (Service Unavailable). Additionally, 301 (Permanent Redirect) and 302 (Temporary Redirect) aren\'t "broken" per se, but redirect chains (multiple redirects in sequence) waste link equity and slow page loads. This tool detects all of these status codes and categorizes them by severity.',
      },
      {
        question: 'Can broken links cause Google to de-index my pages?',
        answer: 'A few broken links won\'t cause de-indexing. However, if a significant percentage of your site\'s URLs return 404 errors, or if critical pages linked from your navigation consistently fail, Google may reduce its crawl rate for your domain and flag your site as poorly maintained. In extreme cases where broken links create orphaned pages (pages with no valid links pointing to them), those specific pages may be dropped from the index. Regular broken link auditing prevents this degradation.',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'AI Visibility Checker',
    title: 'Free AI Visibility Checker',
    description: 'See how Google AI Overviews affect your website. Find out what percentage of your keywords trigger AI Overviews, how much traffic is at risk, and get an AI Visibility Score.',
    metaDescription: 'Check how Google AI Overviews impact your website for free. See your AI Overview exposure rate, keywords affected, traffic at risk, and AI Visibility Score.',
    iconName: 'Sparkles',
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
        title: 'Audit Any Website\'s Visibility in AI-Powered Search',
        description: 'AI Overviews, ChatGPT, Perplexity, and Gemini are reshaping how users find information — and most websites have no idea how they\'re performing in this new landscape. Enter any domain, click "Check Visibility," and get a comprehensive audit of how the site appears in AI search results. This is the first step in AI Engine Optimization (AEO), the emerging discipline that sits alongside traditional SEO. Marketing teams, brand managers, and SEO professionals use this to understand their exposure to AI-driven search disruption.',
        image: '/ai visibility checker/check any websites visibility in llms.png',
      },
      {
        title: 'Analyze AI Overview Keyword Distribution and Positioning',
        description: 'The detailed metrics table shows Total Ranked Keywords, Keywords with AI Overviews, AI Overview Exposure Rate, keyword distribution by position (#1 AI Keywords, #2–3, #4–10), Organic Traffic from AI Keywords, and total Organic Traffic. This granular breakdown tells you exactly how much of your keyword portfolio is affected by Google\'s AI Overviews. For example, if the majority of your ranked keywords have AI Overviews, Google is inserting AI-generated answers above the traditional organic results — fundamentally changing your click-through rates.',
        image: '/ai visibility checker/see keyword distribution for ai overview.png',
      },
      {
        title: 'Quantify How Much Traffic Is at Risk from AI Overviews',
        description: 'The dual-metric display shows Keywords with AI Overviews and Traffic at Risk. "Traffic at Risk" estimates the organic traffic that could decrease as AI Overviews absorb clicks that previously went to traditional organic results. This is the single most important metric for understanding AI search impact on your business. If substantial monthly visits are at risk, you need a mitigation strategy: optimizing content to be cited within AI Overviews, diversifying traffic sources, and building brand recognition that drives direct searches.',
        image: '/ai visibility checker/see number of keywords in ai overview and which percentage of your traffic is at risk with google ai overviews.png',
      },
      {
        title: 'Benchmark Domain Strength Against AI Overview Exposure',
        description: 'The dashboard pairs your Domain Score (e.g., 97 "Very Strong") with your AI Overview Exposure percentage. This combination is crucial: a strong domain doesn\'t protect you from AI Overviews. Even the highest-authority sites face massive exposure to click-through rate erosion from AI-generated answers. The domain score tells you your traditional SEO strength, while the exposure metric tells you how much of that strength is threatened by AI. Sites with high authority but high exposure need to pivot toward AEO strategies to maintain traffic.',
        image: '/ai visibility checker/see your domain score in ai overview and exposure level to ai overview.png',
      },
    ],
    faqs: [
      {
        question: 'What is AI visibility and why does it matter for SEO in 2025–2026?',
        answer: 'AI visibility refers to how prominently your website, brand, or content appears in AI-powered search experiences — including Google AI Overviews, ChatGPT responses, Perplexity answers, Gemini results, and Microsoft Copilot. It matters because these AI systems are fundamentally changing search behavior. Google AI Overviews now appear for over 70% of informational queries, often answering the user\'s question directly without requiring a click to any website. This means traditional SEO rankings alone no longer guarantee traffic.',
      },
      {
        question: 'What are Google AI Overviews and how do they affect organic traffic?',
        answer: 'Google AI Overviews (formerly SGE — Search Generative Experience) are AI-generated answer summaries that appear at the top of Google\'s search results for many queries. They synthesize information from multiple sources and present a direct answer, reducing the need for users to click through to individual websites. Studies show AI Overviews can reduce click-through rates to organic results by 18–64%, depending on the query type. Informational queries are most affected, while navigational and transactional queries are less impacted.',
      },
      {
        question: 'What does "Traffic at Risk" mean and how is it calculated?',
        answer: '"Traffic at Risk" estimates the organic traffic that could decrease as AI Overviews absorb clicks. It is calculated by identifying all keywords where (a) your site currently ranks and receives traffic and (b) Google displays an AI Overview for that query. The traffic from those keywords represents the at-risk volume, as AI Overviews may reduce the click-through rates that previously sent visitors to your pages.',
      },
      {
        question: 'What is AI Overview Exposure and what does a high percentage mean?',
        answer: 'AI Overview Exposure is the percentage of your ranked keywords that trigger Google AI Overviews. An exposure of 76.8% means that for over three-quarters of the keywords you rank for, Google is showing an AI-generated answer above the organic results. A high exposure percentage signals significant vulnerability to traffic erosion but also significant opportunity — if you can optimize your content to be cited as a source within those AI Overviews, you may actually gain visibility.',
      },
      {
        question: 'How does AI visibility differ from traditional SEO visibility?',
        answer: 'Traditional SEO visibility measures your presence in standard organic search results (blue links). AI visibility measures your presence in AI-generated answers. The two can diverge: a site ranking #1 organically might not be cited in the AI Overview for the same keyword, or a site ranking #5 might be the primary citation source for the AI answer. AI visibility depends on different factors — content comprehensiveness, structured data, entity recognition, factual accuracy, and whether AI systems can easily extract and cite your information.',
      },
      {
        question: 'What is AI Engine Optimization (AEO) and how do I start?',
        answer: 'AEO is the practice of optimizing your content to be referenced, cited, and featured in AI-generated search responses. Key AEO strategies include: (1) Provide clear, concise, fact-based answers that AI can extract, (2) Use structured data and schema markup to help AI understand your content, (3) Build topical authority through comprehensive content clusters, (4) Include original data, statistics, and research that AI systems cite as sources, (5) Maintain high E-E-A-T (Experience, Expertise, Authoritativeness, Trust) signals.',
      },
      {
        question: 'How does domain strength affect AI Overview citation?',
        answer: 'AI systems, including Google\'s AI Overviews, tend to cite authoritative, well-known sources more frequently. Higher domain scores correlate with higher citation rates in AI answers. However, domain strength alone isn\'t sufficient — the AI also evaluates content specificity, factual accuracy, freshness, and how well the content answers the specific query. A niche site with deep expertise on a specific topic can be cited over a high-authority generalist site if its content is more relevant and comprehensive.',
      },
      {
        question: 'Which types of content are most vulnerable to AI Overview traffic loss?',
        answer: 'Informational content that answers simple factual questions is most vulnerable — definitions, quick how-to answers, statistics, comparisons, and "what is" queries. These are precisely the queries where AI Overviews can provide a complete answer without requiring a click. Content types that are more resilient include: in-depth analysis and opinion, interactive tools and calculators, original research and proprietary data, product comparisons with personal experience, and content requiring visual elements.',
      },
      {
        question: 'Can I see which AI platforms cite my content?',
        answer: 'This tool specifically measures AI Overview exposure on Google. For broader AI platform monitoring (ChatGPT, Perplexity, Gemini, Copilot), dedicated brand monitoring tools track where and how your brand and content appear across AI platforms. The metrics in this tool — particularly the keyword-level AI Overview data — give you the Google-specific picture, which is the highest-impact channel since Google still dominates search traffic.',
      },
      {
        question: 'What should I do if my AI Overview exposure is above 50%?',
        answer: 'High exposure requires a multi-pronged response: (1) Audit which specific keywords trigger AI Overviews and whether your content is being cited as a source, (2) Optimize your highest-traffic pages to include clear, extractable answer formats that AI can cite, (3) Diversify traffic sources beyond Google organic (build email lists, social media audiences, direct traffic through brand building), (4) Create content formats that AI Overviews can\'t replicate (interactive tools, video content, community forums), and (5) Monitor monthly as AI Overview rollout continues evolving.',
      },
      {
        question: 'How does the Domain Score in the AI visibility context relate to traditional authority?',
        answer: 'The Domain Score shown alongside AI Overview data is the same authority metric based on backlink profile strength. In the AI visibility context, it provides crucial perspective: a strong domain score means your traditional SEO foundation is solid, but the AI Exposure percentage reveals how much of that foundation is being disrupted. A site with Domain Score 90 and AI Exposure 80% has significant traditional authority that is under significant AI-driven threat.',
      },
      {
        question: 'Is AI visibility relevant for B2B and enterprise websites?',
        answer: 'Absolutely. B2B buyers increasingly use AI tools for vendor research, technology evaluation, and purchase decision support. Google AI Overviews are especially prevalent for B2B informational queries like "best CRM for small business" or "how to implement SSO." Enterprise brands that appear as citations in AI Overviews gain significant credibility — being named by an AI system is perceived as an endorsement. Conversely, B2B brands absent from AI responses risk being invisible to an emerging generation of decision-makers.',
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
