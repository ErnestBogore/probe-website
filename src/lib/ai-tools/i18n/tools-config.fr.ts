// French translations for AI Tools
// Non-translated fields (systemPrompt, maxLength, name in options) are kept in English

import { ToolConfig } from '../tools-config';

// Mapping from French slug to English slug (for API calls)
export const frenchToEnglishSlugMap: Record<string, string> = {
  // Writing Tools
  'generateur-de-paragraphe': 'paragraph-generator',
  'reformulateur-de-paragraphe': 'paragraph-rewriter',
  'generateur-de-conclusion': 'conclusion-generator',
  'generateur-de-plan': 'outline-generator',
  'generateur-de-titres-de-blog': 'blog-title-generator',
  'reecriveur-de-phrase': 'sentence-rewriter',
  'outil-reformulation': 'rewording-tool',
  // SEO & Content Marketing Tools
  'generateur-de-meta-description': 'meta-description-generator',
  'outil-de-paraphrase': 'paraphrasing-tool',
  'outil-de-resume': 'summarizer',
  'generateur-texte-alternatif-image': 'image-alt-text-generator',
  'generateur-idees-articles-blog': 'blog-post-ideas-generator',
  'generateur-titres-seo': 'seo-title-generator',
  'generateur-idees-contenu': 'content-idea-generator',
  'generateur-script-video': 'video-script-generator',
  // Utility Tools
  'verificateur-de-grammaire': 'grammar-checker',
  'detecteur-de-contenu-ia': 'ai-content-detector',
  'humanisateur-de-texte-ia': 'ai-text-humanizer',
  'generateur-acronymes': 'acronym-generator',
  'generateur-lorem-ipsum': 'lorem-ipsum-generator',
  'traducteur-emoji': 'emoji-translator',
  'verificateur-plagiat': 'plagiarism-checker',
  // Business & Marketing Tools
  'generateur-nom-marque': 'brand-name-generator',
  'generateur-nom-entreprise': 'business-name-generator',
  'generateur-nom-produit': 'product-name-generator',
  'generateur-slogan': 'slogan-generator',
  'generateur-texte-google-ads': 'google-ads-copy-generator',
  'generateur-description-produit': 'product-description-generator',
  'generateur-page-destination': 'landing-page-generator',
  'generateur-contenu-site-web': 'website-copy-generator',
  'generateur-lettre-demission': 'resignation-letter-generator',
  'generateur-accroche': 'hook-generator',
  // Social Media Tools
  'generateur-bio-reseaux-sociaux': 'social-media-bio-generator',
  'generateur-bio-instagram': 'instagram-bio-generator',
  'generateur-legende-reseaux-sociaux': 'social-media-caption-generator',
  'generateur-legende-instagram': 'instagram-caption-generator',
  'generateur-hashtag-reseaux-sociaux': 'social-media-hashtag-generator',
  'generateur-hashtag-instagram': 'instagram-hashtag-generator',
  'generateur-nom-utilisateur-reseaux-sociaux': 'social-media-username-generator',
  'generateur-nom-instagram': 'instagram-name-generator',
  'generateur-hashtag-tiktok': 'tiktok-hashtag-generator',
  'generateur-nom-utilisateur-tiktok': 'tiktok-username-generator',
  // YouTube Tools
  'generateur-description-chaine-youtube': 'youtube-channel-description-generator',
  'generateur-description-video-youtube': 'youtube-video-description-generator',
  'generateur-titre-video-youtube': 'youtube-video-title-generator',
};

// Helper functions
export function getToolBySlugFr(slug: string): ToolConfig | undefined {
  return toolsFr[slug];
}

export function getAllToolsFr(): ToolConfig[] {
  return Object.values(toolsFr);
}

export function getEnglishSlug(frenchSlug: string): string | undefined {
  return frenchToEnglishSlugMap[frenchSlug];
}

export const toolsFr: Record<string, ToolConfig> = {
  'generateur-de-paragraphe': {
    slug: 'generateur-de-paragraphe',
    name: 'Générateur de Paragraphe',
    title: 'Générateur IA pour créer des paragraphes gratuitement',
    description: 'Générez des paragraphes bien structurés en quelques secondes. Parfait pour les articles de blog, essais, e-mails et plus encore. Aucune inscription requise.',
    metaDescription: 'Générez des paragraphes bien structurés en quelques secondes avec notre générateur de paragraphe IA gratuit. Parfait pour les articles de blog, essais, e-mails et plus encore. Aucune inscription requise.',
    inputLabel: 'Écrire sur...',
    inputPlaceholder: 'ex. Pourquoi il est important de manger du brocoli',
    buttonText: 'Générer un Paragraphe',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Format',
        choices: ['Paragraphes', 'Points de liste'],
        default: 'Paragraphes',
        type: 'radio',
      },
      {
        name: 'length',
        label: 'Écrire',
        choices: ['1 paragraphe', '2 paragraphes', '3 paragraphes'],
        default: '1 paragraphe',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de rédaction',
        choices: ['Formel', 'Décontracté', 'Professionnel', 'Amical'],
        default: 'Formel',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Générer',
        choices: ['1 variante', '3 variantes', '5 variantes'],
        default: '1 variante',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content writer who creates compelling, well-structured paragraphs. Generate paragraphs that are clear, engaging, and purposeful—never generic filler.
## CORE RULES
- Every paragraph must have a clear point (topic sentence + support + implication)
- Write in active voice unless passive is strategically necessary
- Vary sentence length for rhythm (mix short punchy sentences with longer explanatory ones)
- Avoid clichés, vague modifiers, and filler phrases
- Each paragraph should be 4-6 sentences unless otherwise specified
- Avoid fancy words like "crucial", "essential", "comprehensive", "robust", "leverage", "utilize", "facilitate"
## STRUCTURE FRAMEWORK
Every paragraph must follow this architecture:
1. Lead sentence: State the main point clearly
2. Expansion: Unpack why it matters or provide context
3. Evidence/Example: Concrete detail, scenario, or data point
4. Implication: Connect back to the reader's situation or stakes
## TONE CALIBRATION
### IF TONE = "Formel"
- Authoritative but not stiff
- Use "you" to address the reader directly
- Include specific examples from business contexts
### IF TONE = "Décontracté"
- Warm and approachable
- Shorter sentences, contractions allowed
- Use relatable analogies
### IF TONE = "Professionnel"
- Precise and measured
- Maintain objectivity
- Define terms when introduced
### IF TONE = "Amical"
- Conversational and engaging
- Can include rhetorical questions
- Use everyday language
## OUTPUT FORMAT
- Write {{length}} in {{format}} format
- Use a {{tone}} tone
- Generate {{variants}}
If generating multiple variants, separate each with a blank line and label them (Variante 1:, Variante 2:, etc.)
Output only the content. No preamble, no explanation.
IMPORTANT: Generate content in French.
Self-check before output: Read the paragraph mentally. If any sentence feels like filler or could be deleted without losing meaning, rewrite it. If the paragraph could apply to any generic article, add a specific detail or example.`,
    useCases: [
      {
        title: 'Marketing de contenu et blogging',
        description: 'Les rédacteurs et marketeurs peuvent utiliser le Générateur de Paragraphe pour surmonter le syndrome de la page blanche et produire rapidement des premiers jets. Que vous créiez des articles de blog, du contenu de page d\'accueil ou des newsletters, l\'outil génère des paragraphes cohérents basés sur votre sujet, vous donnant une base solide à éditer plutôt que de partir de zéro.',
      },
      {
        title: 'Rédaction académique et professionnelle',
        description: 'Les étudiants travaillant sur des essais, les chercheurs rédigeant des articles ou les professionnels préparant des rapports peuvent utiliser le Générateur de Paragraphe pour articuler clairement des idées complexes. En entrant des points clés ou des énoncés de thèse, les utilisateurs reçoivent des paragraphes structurés qui présentent les arguments de manière logique.',
      },
      {
        title: 'Communication quotidienne',
        description: 'De la rédaction d\'e-mails réfléchis aux déclarations personnelles ou lettres de motivation, le Générateur de Paragraphe aide quiconque a besoin de communiquer clairement par écrit. Il est particulièrement utile pour les non-francophones ou ceux qui veulent exprimer leurs idées plus éloquemment.',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'un générateur de paragraphe ?',
        answer: 'Un générateur de paragraphe est un outil alimenté par l\'IA qui crée des paragraphes cohérents et contextuellement pertinents basés sur un sujet, une consigne ou un ensemble d\'instructions que vous fournissez. Il utilise le traitement du langage naturel pour comprendre votre entrée et produire un texte semblable à celui d\'un humain.',
      },
      {
        question: 'Ce générateur de paragraphe est-il gratuit ?',
        answer: 'Oui, notre générateur de paragraphe est entièrement gratuit sans coûts cachés. Vous pouvez générer des paragraphes sans créer de compte ni fournir d\'informations de paiement.',
      },
      {
        question: 'Comment fonctionne le générateur de paragraphe IA ?',
        answer: 'L\'outil utilise un grand modèle de langage entraîné sur des données textuelles diverses. Lorsque vous entrez un sujet ou une consigne, l\'IA analyse le contexte et génère un paragraphe qui suit les modèles de langage naturel, une grammaire correcte et une structure logique.',
      },
      {
        question: 'Puis-je utiliser les paragraphes générés à des fins commerciales ?',
        answer: 'Oui, les paragraphes que vous générez vous appartiennent et vous pouvez les utiliser comme bon vous semble, y compris pour du contenu commercial tel que des articles de blog, des supports marketing ou des descriptions de produits.',
      },
      {
        question: 'Quelle est la longueur des paragraphes générés ?',
        answer: 'Les paragraphes générés comprennent généralement de 3 à 6 phrases, bien que cela varie selon la complexité de votre consigne. Vous pouvez demander des sorties plus longues ou plus courtes en précisant votre préférence dans les instructions.',
      },
      {
        question: 'Le contenu généré sera-t-il unique ?',
        answer: 'L\'IA crée du contenu original à chaque fois en fonction de votre consigne spécifique. Cependant, nous recommandons de réviser et d\'éditer le résultat pour ajouter votre voix unique et vérifier l\'exactitude avant de publier.',
      },
      {
        question: 'Sur quels sujets puis-je générer des paragraphes ?',
        answer: 'Le générateur de paragraphe peut créer du contenu sur pratiquement n\'importe quel sujet—affaires, technologie, santé, éducation, style de vie, et plus encore. La qualité du résultat s\'améliore lorsque vous fournissez des consignes claires et spécifiques.',
      },
      {
        question: 'Puis-je générer plusieurs paragraphes à la fois ?',
        answer: 'Vous pouvez exécuter l\'outil plusieurs fois pour générer plusieurs paragraphes, ou préciser dans votre consigne que vous avez besoin de plusieurs paragraphes sur des sous-thèmes connexes.',
      },
      {
        question: 'Le contenu généré est-il optimisé pour le SEO ?',
        answer: 'L\'outil produit du contenu naturel et lisible qui fonctionne bien pour le SEO. Pour de meilleurs résultats, vous pouvez inclure des mots-clés cibles dans votre consigne afin que l\'IA les incorpore naturellement dans le paragraphe.',
      },
      {
        question: 'Dois-je éditer les paragraphes après les avoir générés ?',
        answer: 'Bien que l\'IA produise des premiers jets de qualité, nous recommandons de réviser et d\'éditer le résultat pour assurer l\'exactitude, ajouter des insights personnels et adapter le ton à votre audience spécifique.',
      },
    ],
  },

  'reformulateur-de-paragraphe': {
    slug: 'reformulateur-de-paragraphe',
    name: 'Reformulateur de Paragraphe',
    title: 'Réécriture gratuite de paragraphes par IA',
    description: 'Reformulez des paragraphes pour améliorer la clarté, changer le ton ou créer des variations uniques de votre texte tout en préservant le sens original.',
    metaDescription: 'Reformulez vos paragraphes avec notre outil IA gratuit. Améliorez la clarté, changez le ton ou créez des variations uniques de votre texte tout en préservant le sens original.',
    inputLabel: 'Reformuler ce texte...',
    inputPlaceholder: 'Collez votre paragraphe ici pour le reformuler',
    buttonText: 'Reformuler le Paragraphe',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Format',
        choices: ['Paragraphes', 'Points de liste'],
        default: 'Paragraphes',
        type: 'radio',
      },
      {
        name: 'length',
        label: 'Écrire',
        choices: ['1 paragraphe', '2 paragraphes', '3 paragraphes'],
        default: '1 paragraphe',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de rédaction',
        choices: ['Formel', 'Décontracté', 'Professionnel', 'Amical'],
        default: 'Formel',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Générer',
        choices: ['1 variante', '3 variantes', '5 variantes'],
        default: '1 variante',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor who rewrites paragraphs to improve clarity, impact, and readability while preserving the original meaning.
## CORE RULES
- Preserve the original meaning and key information
- Improve sentence structure, flow, and word choice
- Remove redundancy and filler without reducing depth
- Maintain or enhance the original tone unless instructed otherwise
- Never add information that wasn't in the original
- Avoid: "crucial", "essential", "comprehensive", "robust", "leverage", "utilize", "facilitate", "nuanced", "multifaceted"
## REWRITING FRAMEWORK
### Step 1: Identify the Core Message
- What is the single main point of this paragraph?
- What evidence or examples support it?
### Step 2: Restructure for Clarity
- Lead with the strongest version of the main point
- Ensure each sentence flows logically into the next
### Step 3: Tighten the Language
- Replace weak verbs with strong, specific ones
- Cut unnecessary qualifiers ("very," "really," "basically")
- Eliminate redundant phrases ("in order to" → "to")
- Convert passive voice to active where appropriate
### Step 4: Enhance Readability
- Vary sentence length (short sentences for impact, longer for explanation)
- Break up run-on sentences
- Use contractions naturally (c'est, n'est pas, etc.)
## OUTPUT FORMAT
- Output {{length}} in {{format}} format
- Use a {{tone}} tone
- Generate {{variants}}
If generating multiple variants, separate each with a blank line and label them (Variante 1:, Variante 2:, etc.)
Output only the rewritten content. No preamble, no explanation.
IMPORTANT: Generate content in French.
Self-check before output: Compare the rewrite to the original. Did you preserve the meaning? Did you actually improve it, or just change it? If the rewrite isn't clearly better, revise again.`,
    useCases: [
      {
        title: 'Améliorer la clarté et la lisibilité du contenu',
        description: 'Les rédacteurs et éditeurs utilisent le Reformulateur de Paragraphe pour transformer un texte dense ou maladroitement formulé en prose claire et fluide. Que vous ayez rédigé quelque chose rapidement ou reçu du contenu nécessitant un polissage, l\'outil restructure les phrases et améliore le choix des mots tout en maintenant votre message original.',
      },
      {
        title: 'Créer des variations de contenu uniques',
        description: 'Les marketeurs de contenu gérant plusieurs plateformes ou effectuant des tests A/B peuvent générer différentes versions du même message central. Le reformulateur produit des variations fraîches pour les publications sur les réseaux sociaux, les campagnes e-mail ou les textes publicitaires, vous aidant à éviter la répétition tout en restant cohérent.',
      },
      {
        title: 'Éviter le plagiat et rafraîchir le contenu existant',
        description: 'Les étudiants, chercheurs et créateurs de contenu peuvent utiliser le Reformulateur de Paragraphe pour exprimer des informations sources dans leurs propres mots ou mettre à jour du contenu ancien. L\'outil aide à reformuler le texte de manière substantielle pour créer un travail original tout en préservant le sens essentiel et les faits.',
      },
    ],
    faqs: [
      {
        question: 'Que fait un reformulateur de paragraphe ?',
        answer: 'Un reformulateur de paragraphe prend votre texte existant et le reformule en utilisant différents mots, structures de phrases et formulations tout en gardant le sens central intact. C\'est utile pour améliorer la clarté, éviter la répétition ou créer des versions uniques du contenu.',
      },
      {
        question: 'Le reformulateur de paragraphe est-il gratuit ?',
        answer: 'Oui, cet outil est entièrement gratuit. Il n\'y a pas d\'abonnements, de frais cachés ou de limites d\'utilisation nécessitant un paiement.',
      },
      {
        question: 'Quelle est la différence entre reformuler et paraphraser ?',
        answer: 'Bien que les deux impliquent de reformuler le texte différemment, la réécriture implique généralement des changements plus substantiels de structure, de ton et de style. La paraphrase se concentre sur l\'expression de la même idée avec des mots différents, tandis que la réécriture peut également améliorer la lisibilité, ajuster le ton ou réorganiser l\'information.',
      },
      {
        question: 'Le paragraphe reformulé aura-t-il le même sens que l\'original ?',
        answer: 'L\'IA est conçue pour préserver votre sens original tout en changeant l\'expression. Cependant, révisez toujours le résultat pour vous assurer que la version reformulée capture fidèlement votre message prévu, surtout pour du contenu technique ou nuancé.',
      },
      {
        question: 'Puis-je choisir le ton du paragraphe reformulé ?',
        answer: 'Oui, vous pouvez spécifier le ton souhaité dans vos instructions—que vous vouliez que le texte soit plus formel, décontracté, persuasif ou simplifié. L\'IA ajustera sa sortie en conséquence.',
      },
      {
        question: 'Le contenu reformulé est-il exempt de plagiat ?',
        answer: 'L\'outil génère de nouvelles formulations et structures, produisant un texte différent de l\'original. Cependant, si vous reformulez le contenu de quelqu\'un d\'autre, une attribution appropriée peut toujours être requise selon votre cas d\'utilisation.',
      },
      {
        question: 'Quelle partie du texte original est modifiée ?',
        answer: 'Le degré de changement dépend de vos instructions et de la complexité du texte original. L\'IA modifie généralement le choix des mots, la structure des phrases et le flux tout en s\'assurant que le message central reste reconnaissable.',
      },
      {
        question: 'Puis-je reformuler du contenu dans d\'autres langues que le français ?',
        answer: 'L\'outil est optimisé pour le texte français. Bien qu\'il puisse fonctionner avec d\'autres langues, les résultats sont plus fiables lors de la reformulation de paragraphes en français.',
      },
      {
        question: 'Quelle est la longueur maximale que je peux reformuler à la fois ?',
        answer: 'L\'outil fonctionne mieux avec des paragraphes standards (environ 100-300 mots). Pour du contenu plus long, nous recommandons de reformuler un paragraphe à la fois pour des résultats optimaux.',
      },
      {
        question: 'Dois-je éditer le paragraphe reformulé avant de l\'utiliser ?',
        answer: 'Oui, nous recommandons de réviser tout contenu généré par l\'IA. Vérifiez que la version reformulée reflète fidèlement votre sens prévu, correspond à la voix de votre marque et se lit naturellement dans le contexte.',
      },
    ],
  },

  'generateur-de-meta-description': {
    slug: 'generateur-de-meta-description',
    name: 'Générateur de Méta Description',
    title: 'Générateur de méta-descriptions SEO gratuit',
    description: 'Créez des méta descriptions percutantes qui améliorent les taux de clics. Générez des descriptions optimisées pour n\'importe quelle page web en quelques secondes.',
    metaDescription: 'Créez des méta descriptions percutantes qui améliorent les taux de clics. Notre outil IA gratuit génère des descriptions optimisées pour n\'importe quelle page web en quelques secondes.',
    inputLabel: 'Sujet ou titre de la page...',
    inputPlaceholder: 'ex. Meilleures chaussures de running pour débutants en 2024',
    buttonText: 'Générer une Méta Description',
    maxLength: 2048,
    options: [
      {
        name: 'variants',
        label: 'Générer',
        choices: ['1 variante', '3 variantes', '5 variantes'],
        default: '3 variantes',
      },
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Professionnel', 'Décontracté', 'Persuasif'],
        default: 'Professionnel',
      },
    ],
    systemPrompt: `You are an expert SEO copywriter specializing in meta descriptions that maximize click-through rates. Generate meta descriptions that function as compelling ad copy for search results.
## CORE RULES
- Every description must be ≤155 characters (hard limit)
- Include the primary keyword naturally within the first 100 characters
- Write in active voice with a clear value proposition
- Never use generic filler phrases like "En savoir plus" or "Cliquez ici"
- End with a benefit, outcome, or subtle curiosity hook
## TONE-BASED INSTRUCTIONS
### IF TONE = "Professionnel"
- Authoritative but not stiff
- Lead with the outcome or transformation
- Include a specificity marker (steps, timeframe, method)
- Pattern: [Outcome promise] + [Method/ease indicator] + [Credibility]
### IF TONE = "Décontracté"
- Warm and approachable
- Use conversational language
- Can include rhetorical questions
- Pattern: [Relatable hook] + [Value proposition] + [Benefit]
### IF TONE = "Persuasif"
- Lead with the authority claim (tested, compared, reviewed)
- Create urgency without being clickbaity
- Address the implicit objection
- Pattern: [Authority/freshness] + [Scope] + [Audience fit]
## OUTPUT FORMAT
- Number of variants: {{variants}}
- Tone: {{tone}}
Output each meta description on its own line, numbered, with character count in parentheses.
IMPORTANT: Generate content in French.
Self-check before output: If the description could apply to any generic article on this topic, rewrite it to be specific. If it exceeds 155 characters, trim without losing the core promise.`,
    useCases: [
      {
        title: 'Optimisation SEO pour sites web et blogs',
        description: 'Les propriétaires de sites web et spécialistes SEO utilisent le Générateur de Méta Description pour créer des extraits percutants qui apparaissent dans les résultats de recherche. Des méta descriptions bien rédigées améliorent les taux de clics en donnant aux chercheurs un aperçu clair et attrayant du contenu de votre page, impactant directement le trafic organique.',
      },
      {
        title: 'Production de contenu à grande échelle',
        description: 'Les équipes marketing et agences gérant plusieurs sites web ou de grandes bibliothèques de contenu peuvent générer des méta descriptions cohérentes et de qualité à grande échelle. Au lieu de passer du temps à rédiger manuellement des descriptions pour des centaines de pages, l\'outil produit des descriptions optimisées rapidement, libérant des ressources pour la stratégie et l\'analyse.',
      },
      {
        title: 'Pages produits e-commerce',
        description: 'Les propriétaires de boutiques en ligne peuvent créer des méta descriptions uniques et persuasives pour les pages produits qui mettent en avant les caractéristiques et avantages clés. Des descriptions de produits efficaces dans les résultats de recherche aident les acheteurs à comprendre ce que vous offrez avant de cliquer, attirant un trafic plus qualifié vers vos fiches.',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'une méta description ?',
        answer: 'Une méta description est un attribut HTML qui fournit un bref résumé du contenu d\'une page web. Elle apparaît sous le titre de la page dans les résultats des moteurs de recherche et influence si les utilisateurs cliquent pour accéder à votre site.',
      },
      {
        question: 'Pourquoi les méta descriptions sont-elles importantes pour le SEO ?',
        answer: 'Bien que les méta descriptions ne soient pas un facteur de classement direct, elles impactent significativement les taux de clics. Une description percutante qui correspond à l\'intention de recherche attire plus de clics, ce qui peut indirectement améliorer vos performances de recherche au fil du temps.',
      },
      {
        question: 'Quelle devrait être la longueur d\'une méta description ?',
        answer: 'Les méta descriptions optimales font entre 150 et 160 caractères. Google tronque généralement les descriptions de plus de 160 caractères dans les résultats de recherche, donc l\'outil génère des descriptions dans cette plage recommandée.',
      },
      {
        question: 'Ce générateur de méta description est-il gratuit ?',
        answer: 'Oui, l\'outil est entièrement gratuit sans inscription requise. Vous pouvez générer autant de méta descriptions que nécessaire sans aucun coût.',
      },
      {
        question: 'Quelles informations dois-je fournir pour obtenir les meilleurs résultats ?',
        answer: 'Pour des résultats optimaux, entrez le sujet principal de votre page, le mot-clé cible et l\'avantage ou proposition de valeur clé que vous souhaitez communiquer. Plus vous fournissez de contexte, plus la description générée sera pertinente et percutante.',
      },
      {
        question: 'Puis-je inclure des mots-clés dans ma méta description ?',
        answer: 'Oui, et vous devriez le faire. Inclure votre mot-clé cible aide la description à correspondre aux requêtes de recherche. Lorsque votre mot-clé apparaît dans la méta description, Google le met souvent en gras dans les résultats de recherche, rendant votre listing plus accrocheur.',
      },
      {
        question: 'Chaque page doit-elle avoir une méta description unique ?',
        answer: 'Oui, chaque page devrait avoir une méta description distincte qui reflète fidèlement le contenu spécifique de cette page. Les descriptions dupliquées sur plusieurs pages peuvent confondre les moteurs de recherche et réduire les taux de clics.',
      },
      {
        question: 'L\'outil génère-t-il des descriptions pour tout type de page ?',
        answer: 'Le générateur fonctionne pour tous les types de pages—articles de blog, pages produits, pages de services, pages d\'atterrissage, et plus encore. Décrivez simplement le contenu de votre page et l\'IA créera une description appropriée.',
      },
      {
        question: 'Comment ajouter la méta description à mon site web ?',
        answer: 'La plupart des systèmes de gestion de contenu (WordPress, Shopify, Wix, etc.) ont un champ dédié pour les méta descriptions dans l\'éditeur de page ou via des plugins SEO comme Yoast ou Rank Math. Copiez votre description générée et collez-la dans le champ approprié.',
      },
      {
        question: 'Puis-je modifier la méta description générée ?',
        answer: 'Absolument, et nous vous y encourageons. Bien que l\'IA produise de solides premiers jets, réviser et ajuster les descriptions pour correspondre à la voix de votre marque et à votre message spécifique garantit les meilleurs résultats.',
      },
    ],
  },

  'outil-de-paraphrase': {
    slug: 'outil-de-paraphrase',
    name: 'Outil de Paraphrase',
    title: 'Outil IA gratuit de paraphrase',
    description: 'Paraphrasez n\'importe quel texte instantanément. Reformulez phrases et paragraphes tout en conservant le sens original. Parfait pour étudiants et rédacteurs.',
    metaDescription: 'Paraphrasez n\'importe quel texte instantanément avec notre outil IA gratuit. Reformulez phrases et paragraphes tout en conservant le sens original. Parfait pour étudiants et rédacteurs.',
    inputLabel: 'Texte à paraphraser...',
    inputPlaceholder: 'Collez votre texte ici pour le paraphraser',
    buttonText: 'Paraphraser',
    maxLength: 2048,
    options: [
      {
        name: 'mode',
        label: 'Mode',
        choices: ['Standard', 'Fluidité', 'Créatif', 'Formel', 'Simple'],
        default: 'Standard',
      },
    ],
    systemPrompt: `You are an expert paraphrasing specialist who restates text in fresh language while preserving the exact meaning and intent of the original.
## CORE RULES
- The paraphrased version must mean exactly the same thing as the original
- Use substantially different vocabulary and sentence structure
- Never add, remove, or alter the factual content
- Maintain the same level of formality unless instructed otherwise
- The output should not be recognizable as a direct derivative of the input
## PARAPHRASING FRAMEWORK
### Step 1: Understand Before Rewriting
- Identify the core claim or point
- Note any specific data, names, or facts that must remain accurate
- Recognize the tone (formal, casual, technical, persuasive)
### Step 2: Transform Structure
- Change sentence order where logical
- Split complex sentences or combine simple ones
- Convert active ↔ passive strategically
- Restructure clauses (move dependent clauses, change emphasis)
### Step 3: Replace Vocabulary
- Swap words with true synonyms (same meaning in context)
- Rephrase idioms and expressions
- Preserve technical terms that have no true synonym
- Avoid thesaurus abuse (don't use obscure words just to be different)
### Step 4: Verify Accuracy
- Does the paraphrase say exactly what the original said?
- Are all facts, figures, and proper nouns preserved?
## MODE-SPECIFIC INSTRUCTIONS
### IF MODE = "Standard"
- Balance between similarity and transformation
- Change at least 60% of the phrasing
- Maintain same approximate length
### IF MODE = "Fluidité"
- Focus on smooth, natural flow
- Prioritize readability over transformation
- Ensure sentences connect seamlessly
### IF MODE = "Créatif"
- More substantial restructuring allowed
- Use fresh metaphors or analogies if they preserve meaning
- Greater sentence variety and stylistic flair
### IF MODE = "Formel"
- Elevate the register and vocabulary
- Use complete sentences, no contractions
- Appropriate for academic or professional contexts
### IF MODE = "Simple"
- Break complex ideas into simpler terms
- Use shorter sentences and common vocabulary
- Target reading level: general audience
## OUTPUT FORMAT
Mode: {{mode}}
Output only the paraphrased text. Do not include any preamble or explanation.
IMPORTANT: Generate content in French.
Self-check before output: If someone read only the paraphrase, would they understand exactly the same thing as if they read the original? If not, revise. If the paraphrase is too similar (just swapped a few words), transform it more substantially.`,
    useCases: [
      {
        title: 'Intégrité académique et rédaction de recherche',
        description: 'Les étudiants et chercheurs utilisent l\'Outil de Paraphrase pour reformuler des informations provenant de sources dans leurs propres mots, une compétence critique pour éviter le plagiat. L\'outil aide à exprimer des idées complexes issues d\'articles académiques, d\'articles ou de manuels dans un langage frais tout en maintenant le sens et l\'exactitude originaux.',
      },
      {
        title: 'Réutilisation de contenu sur plusieurs plateformes',
        description: 'Les marketeurs digitaux et créateurs de contenu peuvent adapter du contenu existant pour différents canaux sans dupliquer le texte mot pour mot. Transformez une section d\'article de blog en contenu de réseaux sociaux, retravaillez le contenu de site web pour des newsletters par e-mail, ou créez plusieurs variations de messages clés pour différents segments d\'audience.',
      },
      {
        title: 'Simplification d\'un langage complexe',
        description: 'Les professionnels qui doivent traduire un texte technique ou rempli de jargon en langage accessible bénéficient de l\'Outil de Paraphrase. Que vous expliquiez des informations médicales à des patients, décomposiez des termes juridiques pour des clients, ou rendiez une documentation technique plus conviviale, l\'outil aide à reformuler clairement des concepts compliqués.',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce que la paraphrase ?',
        answer: 'La paraphrase est le processus de reformulation d\'un texte en utilisant des mots et structures de phrases différents tout en préservant le sens original. C\'est une compétence fondamentale en rédaction qui démontre la compréhension et aide à éviter le plagiat.',
      },
      {
        question: 'Comment fonctionne l\'outil de paraphrase IA ?',
        answer: 'L\'outil analyse votre texte d\'entrée pour comprendre son sens, puis génère des façons alternatives d\'exprimer les mêmes idées en utilisant un vocabulaire, des structures de phrases et des modèles de formulation différents.',
      },
      {
        question: 'Cet outil de paraphrase est-il gratuit ?',
        answer: 'Oui, l\'outil est entièrement gratuit. Vous pouvez paraphraser du texte autant de fois que nécessaire sans vous inscrire ni payer quoi que ce soit.',
      },
      {
        question: 'Le contenu paraphrasé est-il considéré comme original ?',
        answer: 'Lorsqu\'elle est bien faite, la paraphrase exprime des idées dans vos propres mots et est considérée comme originale. Cependant, même les idées paraphrasées provenant d\'autres sources devraient être correctement citées dans les contextes académiques et professionnels.',
      },
      {
        question: 'Puis-je paraphraser n\'importe quel type de texte ?',
        answer: 'L\'outil fonctionne avec la plupart des types de textes, y compris les articles, essais, rapports, e-mails et contenu web. Il gère divers niveaux de complexité, des phrases simples au langage technique ou académique.',
      },
      {
        question: 'Le texte paraphrasé sonnera-t-il naturel ?',
        answer: 'L\'IA est conçue pour produire un texte au son naturel qui coule bien. Cependant, nous recommandons de relire le résultat pour vous assurer qu\'il correspond à votre voix et s\'intègre harmonieusement dans votre document plus large.',
      },
      {
        question: 'Comment obtenir les meilleurs résultats de paraphrase ?',
        answer: 'Fournissez des phrases ou paragraphes clairs et complets. Une entrée fragmentée ou peu claire peut produire des résultats moins précis. Vous pouvez également spécifier si vous voulez que le résultat soit plus formel, plus simple, ou dans un style particulier.',
      },
      {
        question: 'Puis-je paraphraser du texte dans d\'autres langues ?',
        answer: 'L\'outil est optimisé pour le français. Bien qu\'il puisse fonctionner avec d\'autres langues, la précision et la fluidité sont les plus élevées lors de la paraphrase de texte français.',
      },
      {
        question: 'Quelle est la différence entre paraphraser et résumer ?',
        answer: 'La paraphrase reformule le contenu avec des mots différents tout en maintenant une longueur et un niveau de détail similaires. Le résumé condense le texte en une version plus courte qui ne capture que les points principaux.',
      },
      {
        question: 'Dois-je vérifier le contenu paraphrasé avant de l\'utiliser ?',
        answer: 'Oui, révisez toujours le contenu généré par l\'IA. Vérifiez que la version paraphrasée reflète fidèlement le sens original et qu\'aucun changement de sens involontaire ne s\'est produit.',
      },
    ],
  },

  'outil-de-resume': {
    slug: 'outil-de-resume',
    name: 'Outil de Résumé',
    title: 'Outil de synthèse d\'IA gratuit',
    description: 'Condensez de longs articles, documents et textes en résumés clairs et concis. Extrayez les points clés en quelques secondes.',
    metaDescription: 'Condensez de longs articles, documents et textes en résumés clairs et concis. Notre outil de résumé IA gratuit extrait les points clés en quelques secondes. Essayez-le maintenant.',
    inputLabel: 'Texte à résumer...',
    inputPlaceholder: 'Collez votre texte ici pour obtenir un résumé',
    buttonText: 'Résumer',
    maxLength: 4096,
    options: [
      {
        name: 'length',
        label: 'Longueur du résumé',
        choices: ['Bref (1-2 phrases)', 'Court (1 paragraphe)', 'Détaillé (2-3 paragraphes)'],
        default: 'Court (1 paragraphe)',
      },
      {
        name: 'format',
        label: 'Format',
        choices: ['Paragraphe', 'Points de liste', 'Points clés à retenir'],
        default: 'Paragraphe',
      },
    ],
    systemPrompt: `You are an expert summarizer who condenses text into clear, accurate summaries that capture the essential meaning without losing critical information.
## CORE RULES
- Capture the main point(s) and key supporting details
- Never add information not present in the original
- Never distort or misrepresent the original meaning
- Use clear, direct language
- Maintain appropriate length based on the original (typically 20-30% of original length)
## SUMMARIZATION FRAMEWORK
### Step 1: Identify What Matters
- What is the central thesis or main point?
- What are the key supporting arguments or evidence?
- What conclusions or implications are drawn?
- What can be safely omitted without losing meaning?
### Step 2: Prioritize Information
- Tier 1 (Must include): Core thesis, main conclusions, critical data
- Tier 2 (Include if space): Key supporting points, important examples
- Tier 3 (Omit): Background context, tangential points, redundant examples
### Step 3: Condense and Clarify
- Combine related points into single statements
- Replace specific examples with general categories where appropriate
- Cut redundancy and filler
- Use precise language that captures nuance
## LENGTH-SPECIFIC INSTRUCTIONS
### IF LENGTH = "Bref (1-2 phrases)"
- Capture only the absolute core message
- One main point + one key implication
- Ideal for: quick overviews, email summaries, social snippets
### IF LENGTH = "Court (1 paragraphe)"
- Main point + 2-3 key supporting details
- Include the most important evidence or example
- Ideal for: executive summaries, article abstracts
### IF LENGTH = "Détaillé (2-3 paragraphes)"
- Comprehensive coverage of main points
- Include key evidence, arguments, and conclusions
- Preserve the logical structure of the original
- Ideal for: research summaries, report condensation
## FORMAT-SPECIFIC INSTRUCTIONS
### IF FORMAT = "Paragraphe"
- Flowing prose that reads naturally
- Connect ideas with appropriate transitions
### IF FORMAT = "Points de liste"
- One bullet per key point
- Each bullet should be a complete thought
- Organized by importance or original flow
### IF FORMAT = "Points clés à retenir"
- Focus on actionable insights or conclusions
- What should the reader remember or do?
- 3-5 concrete takeaways
## OUTPUT FORMAT
- Length: {{length}}
- Format: {{format}}
Output only the summary without any preamble.
IMPORTANT: Generate content in French.
Self-check before output: Could someone who only reads the summary understand the essential message of the original? Is any critical information missing? Is any included information not actually important? Revise if needed.`,
    useCases: [
      {
        title: 'Recherche et collecte d\'informations',
        description: 'Les étudiants, chercheurs et professionnels traitant de grands volumes de texte utilisent l\'Outil de Résumé pour extraire rapidement les insights clés des articles, études et rapports. Au lieu de lire chaque document en entier, vous pouvez générer des résumés pour identifier quelles sources sont les plus pertinentes pour vos besoins.',
      },
      {
        title: 'Curation de contenu et partage de connaissances',
        description: 'Les chefs d\'équipe, rédacteurs de newsletters et curateurs de contenu peuvent résumer des articles sectoriels, rapports ou notes de réunion pour partager des informations essentielles avec leur audience. L\'outil aide à distiller un contenu long en points clés digestes que les lecteurs occupés peuvent rapidement absorber.',
      },
      {
        title: 'Efficacité d\'étude et de révision',
        description: 'Les étudiants préparant des examens ou les professionnels révisant de la documentation peuvent créer des résumés concis de matériaux volumineux. L\'Outil de Résumé aide à condenser les manuels, notes de cours ou supports de formation en guides d\'étude gérables qui mettent en évidence les concepts les plus importants.',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'un outil de résumé de texte ?',
        answer: 'Un outil de résumé de texte est un outil IA qui condense un contenu long en versions plus courtes contenant uniquement les informations les plus importantes. Il identifie les points clés, les arguments principaux et les détails essentiels tout en supprimant le texte redondant ou moins critique.',
      },
      {
        question: 'Comment fonctionne l\'outil de résumé IA ?',
        answer: 'L\'outil utilise le traitement du langage naturel pour analyser votre texte, identifier les thèmes centraux et informations clés, et générer une version condensée qui capture le sens essentiel du contenu original.',
      },
      {
        question: 'Cet outil de résumé est-il gratuit ?',
        answer: 'Oui, l\'outil de résumé est entièrement gratuit. Aucune inscription n\'est requise et il n\'y a pas de limite au nombre de textes que vous pouvez résumer.',
      },
      {
        question: 'De combien l\'outil raccourcit-il le texte ?',
        answer: 'Le taux de compression dépend du texte original et de vos préférences. Généralement, les résumés font 20-30% de la longueur originale, bien que vous puissiez demander des résumés plus courts ou plus longs selon vos besoins.',
      },
      {
        question: 'Quels types de contenu puis-je résumer ?',
        answer: 'L\'outil fonctionne avec des articles, posts de blog, articles de recherche, rapports, essais, notes de réunion, e-mails et la plupart des autres contenus textuels. Il gère efficacement divers sujets et niveaux de complexité.',
      },
      {
        question: 'Le résumé capture-t-il tous les points importants ?',
        answer: 'L\'IA est entraînée à identifier et prioriser les informations clés. Cependant, ce qui est "important" peut être subjectif, donc nous recommandons de réviser les résumés pour vous assurer qu\'ils capturent les points spécifiques les plus pertinents pour votre objectif.',
      },
      {
        question: 'Puis-je résumer du contenu dans d\'autres langues ?',
        answer: 'L\'outil est optimisé pour le texte français. Les performances avec d\'autres langues peuvent varier.',
      },
      {
        question: 'Quelle est la longueur maximale de texte que je peux résumer ?',
        answer: 'L\'outil gère bien la plupart des documents standards. Pour des textes très longs comme des livres entiers ou des rapports extensifs, nous recommandons de résumer les chapitres ou sections individuellement pour de meilleurs résultats.',
      },
      {
        question: 'Le contenu résumé est-il exempt de plagiat ?',
        answer: 'Les résumés sont générés par l\'IA et expriment les idées sous forme condensée. Cependant, si vous résumez le contenu de quelqu\'un d\'autre pour publication, une attribution appropriée reste nécessaire.',
      },
      {
        question: 'Puis-je personnaliser la longueur du résumé ?',
        answer: 'Oui, vous pouvez spécifier si vous voulez un bref aperçu ou un résumé plus détaillé. Inclure des instructions comme "résumer en 3 phrases" ou "fournir un résumé détaillé" aide l\'IA à ajuster sa sortie en conséquence.',
      },
    ],
  },

  'generateur-de-titres-de-blog': {
    slug: 'generateur-de-titres-de-blog',
    name: 'Générateur de Titres de Blog',
    title: 'Générateur de titres de blog IA gratuit',
    description: 'Générez des titres de blog percutants qui attirent les clics et se classent dans les recherches. Notre IA crée des titres optimisés pour le SEO en utilisant des déclencheurs psychologiques éprouvés.',
    metaDescription: 'Générez des titres de blog percutants qui attirent les clics et se classent dans les recherches. Notre IA crée des titres optimisés pour le SEO en utilisant des déclencheurs psychologiques éprouvés.',
    inputLabel: 'Sujet ou contenu du blog...',
    inputPlaceholder: 'ex. Comment améliorer les taux d\'ouverture d\'e-mails pour les boutiques e-commerce',
    buttonText: 'Générer des Titres',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Nombre de titres',
        choices: ['3 titres', '5 titres', '10 titres'],
        default: '5 titres',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Formel', 'Décontracté', 'Persuasif'],
        default: 'Formel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert copywriter and headline specialist who creates blog titles that maximize click-through rates while accurately representing content value. Your titles balance SEO optimization with psychological engagement triggers, never sacrificing accuracy for clickbait.
## CORE TITLE PRINCIPLES
1. **Promise-Delivery Alignment**: The title must accurately represent what the content delivers
2. **Specificity Creates Credibility**: Vague titles signal vague content; specific titles signal expertise
3. **Emotional + Rational Balance**: Great titles engage both emotional triggers and logical benefits
4. **Search + Social Optimization**: Titles should work in both search results and social shares
5. **First 60 Characters Matter Most**: Front-load value for truncated displays
## TITLE FORMULAS (Adapt for French)
**How-To Formula:**
- "Comment [Atteindre un Résultat] [Qualificatif/Délai]"
- "Comment [Atteindre un Résultat] Sans [Obstacle Courant]"
**List Formula:**
- "[Nombre] [Adjectif] [Sujet] Qui [Bénéfice/Résultat]"
- "[Nombre] Façons de [Atteindre un Résultat] [Qualificatif]"
**Guide Formula:**
- "Le Guide Complet pour [Sujet] [Pour un Public Spécifique]"
- "[Sujet] : Tout Ce Que Vous Devez Savoir [Qualificatif]"
## SEO TITLE OPTIMIZATION
### Keyword Placement Rules:
- Primary keyword within first 60 characters when possible
- Maintain natural readability
- Front-load the most important words
### Length Guidelines:
- Ideal: 50-60 characters for full SERP display
- Maximum: 70 characters before truncation risk
## OUTPUT RULES
### For Each Title, Provide:
1. **Titre**: The complete headline
2. **Caractères**: Total characters
3. **Type**: Formula/approach used
4. **Force**: Why this title works
### Quantity:
- Generate {{number_of_variants}} title variants
- Each variant should use a different approach/formula
## TONE ADAPTATION
### IF tone = "Formel" - Professional, authoritative language
### IF tone = "Décontracté" - Conversational, relatable language
### IF tone = "Persuasif" - Benefit-focused, outcome-driven language
IMPORTANT: Generate all titles in French.
End with recommendation of strongest option for SEO vs. social sharing.`,
    useCases: [
      {
        title: 'Tests A/B de variations de titres',
        description: 'Les marketeurs de contenu et équipes de croissance utilisent le Générateur de Titres de Blog pour créer plusieurs variantes de titres pour des tests systématiques. Au lieu de se fier à l\'intuition, les équipes peuvent générer plus de 10 titres psychologiquement distincts et les tester via des lignes d\'objet d\'e-mail, des publications sociales ou de la publicité native avant de s\'engager sur un titre final.',
      },
      {
        title: 'Réutilisation et mise à jour de contenu existant',
        description: 'Lors de l\'actualisation d\'anciens articles de blog pour le SEO ou la pertinence, changer le titre peut impacter dramatiquement les performances. Le générateur aide les équipes de contenu à développer des titres frais qui correspondent mieux à l\'intention de recherche actuelle, incorporent des angles tendance ou répondent aux besoins évolués de l\'audience.',
      },
      {
        title: 'Production de contenu à grande échelle',
        description: 'Les agences de contenu, sociétés de médias et grandes équipes marketing utilisent le générateur pour maintenir la qualité des titres à grande échelle. Lorsque plusieurs rédacteurs produisent du contenu, la qualité des titres varie souvent significativement. L\'outil fournit une base d\'options de titres de qualité professionnelle qui assurent la cohérence.',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qui fait un bon titre de blog ?',
        answer: 'Un bon titre de blog accomplit trois choses simultanément : il représente fidèlement le contenu (construisant la confiance avec les lecteurs), il incorpore naturellement les termes de recherche (permettant la découverte), et il déclenche un engagement psychologique (incitant au clic). Les meilleurs titres atteignent les trois sans en sacrifier aucun.',
      },
      {
        question: 'Quelle devrait être la longueur d\'un titre de blog ?',
        answer: 'Pour l\'optimisation des moteurs de recherche, gardez les titres sous 60 caractères pour assurer un affichage complet dans les résultats de recherche. Cependant, le partage sur les réseaux sociaux peut accommoder des titres plus longs (80-90 caractères) car les règles de troncature diffèrent selon les plateformes.',
      },
      {
        question: 'Dois-je inclure des mots-clés dans mon titre de blog ?',
        answer: 'Oui, mais naturellement. Les moteurs de recherche utilisent les titres comme signaux de classement, et les utilisateurs scannent les titres pour leur pertinence à leur requête. Placez votre mot-clé principal aussi tôt que possible dans le titre, mais ne le forcez jamais au détriment de la clarté ou de l\'engagement.',
      },
      {
        question: 'Comment choisir entre plusieurs options de titres ?',
        answer: 'Considérez votre objectif principal et canal de distribution. Si le SEO est primordial, choisissez le titre avec la plus forte intégration de mots-clés et la correspondance d\'intention de recherche la plus claire. Si le partage social est prioritaire, choisissez le titre avec le déclencheur de curiosité ou l\'accroche émotionnelle la plus forte.',
      },
      {
        question: 'Puis-je modifier les titres générés ?',
        answer: 'Absolument—pensez aux titres générés comme des points de départ professionnels. La meilleure approche est souvent de combiner des éléments de plusieurs suggestions, d\'ajouter un langage spécifique à la marque, ou d\'ajuster la spécificité en fonction de votre contenu réel.',
      },
      {
        question: 'Pourquoi les chiffres fonctionnent-ils si bien dans les titres de blog ?',
        answer: 'Les chiffres fournissent de la spécificité (qui construit la crédibilité), définissent les attentes (les lecteurs connaissent l\'étendue), et créent une facilité cognitive (les nombres impairs et les nombres spécifiques comme "7" ou "13" performent mieux que les nombres ronds).',
      },
      {
        question: 'Quelle est la différence entre un titre de blog et un titre SEO ?',
        answer: 'Ils sont souvent les mêmes, mais peuvent différer stratégiquement. Votre titre de blog (titre H1 sur la page) peut être plus long et plus créatif. Votre titre SEO (méta titre dans les résultats de recherche) devrait rester sous 60 caractères et prioriser les mots-clés.',
      },
      {
        question: 'Comment éviter le clickbait tout en créant des titres engageants ?',
        answer: 'Le clickbait crée une promesse que le contenu ne tient pas. Les titres engageants créent une véritable curiosité que le contenu satisfait. La différence est l\'exactitude, pas le niveau d\'engagement. Le générateur est spécifiquement conçu pour créer des titres à fort engagement qui maintiennent l\'exactitude.',
      },
      {
        question: 'Mon titre de blog doit-il correspondre à mon slug URL ?',
        answer: 'Pas exactement, mais ils devraient être liés. Votre slug URL devrait être une version simplifiée et axée sur les mots-clés de votre titre—court, descriptif et permanent. Votre titre peut être plus créatif et peut changer au fil du temps pour des tests.',
      },
      {
        question: 'À quelle fréquence dois-je tester ou changer les titres de blog ?',
        answer: 'Pour les nouveaux articles, définissez votre titre et donnez-lui 2-4 semaines pour s\'indexer et rassembler des données initiales. Si les performances sont en dessous des attentes, testez un nouveau titre. Pour les articles existants, envisagez des rafraîchissements de titres lors des mises à jour de contenu ou lorsque les classements de recherche déclinent.',
      },
    ],
  },

  'generateur-de-plan': {
    slug: 'generateur-de-plan',
    name: 'Générateur de Plan',
    title: 'Générateur de contour par IA gratuit',
    description: 'Générez des plans structurés pour articles de blog, essais et articles en quelques secondes.',
    metaDescription: 'Générez des plans structurés pour articles de blog, essais et articles en quelques secondes. Notre générateur de plan IA gratuit vous aide à organiser vos idées et à écrire plus vite.',
    inputLabel: 'Sujet ou titre...',
    inputPlaceholder: 'ex. Les avantages du télétravail pour les petites entreprises',
    buttonText: 'Générer un Plan',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'Type de contenu', choices: ['Article de Blog', 'Guide Pratique', 'Listicle', 'Essai/Opinion', 'Avis Produit', 'Recherche/Rapport'], default: 'Article de Blog', type: 'select' },
      { name: 'depth', label: 'Profondeur du plan', choices: ['Basique (H2 uniquement)', 'Standard (H2 + H3)', 'Détaillé (H2 + H3 + notes)'], default: 'Standard (H2 + H3)', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist who creates clear, logical outlines for written content.
## CORE RULES
- Create clear hierarchical structure (H1 → H2 → H3)
- Include 5-10 main sections depending on topic complexity
- Each section should have 2-5 subsections or bullet points
- Follow logical flow: introduction → body → conclusion
## CONTENT TYPE ADAPTATIONS
### IF TYPE = "Article de Blog" - Balance depth with readability, include examples
### IF TYPE = "Guide Pratique" - Use numbered steps, add troubleshooting section
### IF TYPE = "Listicle" - Each list item becomes an H2
### IF TYPE = "Essai/Opinion" - Start with thesis, include counterargument
### IF TYPE = "Avis Produit" - Specs, pros/cons, verdict
### IF TYPE = "Recherche/Rapport" - Executive summary, methodology, findings
## OUTPUT FORMAT
Type de contenu: {{contentType}}
Profondeur du plan: {{depth}}
Generate a structured outline with headings and brief notes.
IMPORTANT: Generate all content in French.`,
    useCases: [
      {
        title: 'Planification d\'articles de blog et d\'articles',
        description: 'Les créateurs de contenu et marketeurs utilisent le Générateur de Plan pour transformer des idées de sujets bruts en structures organisées et logiques avant d\'écrire. Au lieu de fixer une page blanche, vous obtenez une feuille de route claire avec des sections principales, des sous-sections et des notes sur ce qu\'il faut couvrir dans chaque partie.',
      },
      {
        title: 'Organisation d\'essais académiques et de documents de recherche',
        description: 'Les étudiants et chercheurs peuvent utiliser le Générateur de Plan pour structurer des arguments complexes, assurer un flux logique entre les points et identifier les lacunes dans leur raisonnement avant de s\'engager dans un brouillon complet. L\'outil aide à organiser les énoncés de thèse, les preuves à l\'appui, les contre-arguments et les conclusions dans un cadre cohérent.',
      },
      {
        title: 'Projets de contenu long et de documentation',
        description: 'Les équipes travaillant sur des guides complets, des livres blancs ou de la documentation technique peuvent générer des plans maîtres qui assurent la cohérence et l\'exhaustivité sur de grands projets. L\'outil aide à décomposer des sujets complexes en sections gérables et garantit que rien d\'important n\'est oublié pendant le processus de rédaction.',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'un générateur de plan ?',
        answer: 'Un générateur de plan est un outil alimenté par l\'IA qui prend votre sujet ou vos idées brutes et les organise dans un cadre structuré avec des titres, sous-titres et points clés. Il crée un plan logique que vous pouvez suivre lors de la rédaction de votre contenu complet.',
      },
      {
        question: 'Le générateur de plan est-il gratuit ?',
        answer: 'Oui, notre générateur de plan est entièrement gratuit sans inscription requise. Vous pouvez créer autant de plans que nécessaire sans aucun coût ou limite d\'utilisation.',
      },
      {
        question: 'Pour quels types de contenu puis-je créer des plans ?',
        answer: 'L\'outil fonctionne pour pratiquement tout contenu écrit : articles de blog, articles, essais, documents de recherche, guides pratiques, listicles, avis produits, rapports, livres blancs, et plus encore. Spécifiez simplement votre type de contenu pour la structure la plus pertinente.',
      },
      {
        question: 'Quel est le niveau de détail des plans générés ?',
        answer: 'Les plans incluent des sections principales (titres H2), des sous-sections (titres H3) et de brèves notes expliquant ce qu\'il faut couvrir dans chaque partie. Le niveau de détail est conçu pour vous donner une direction claire sans être si prescriptif qu\'il limite votre créativité.',
      },
      {
        question: 'Puis-je personnaliser la structure du plan ?',
        answer: 'Oui, le plan généré est un point de départ. Vous pouvez réorganiser les sections, ajouter ou supprimer des titres et modifier la structure pour répondre à vos besoins spécifiques. Pensez-y comme un premier brouillon de l\'architecture de votre contenu.',
      },
      {
        question: 'Le plan aidera-t-il avec le SEO ?',
        answer: 'Les plans sont structurés avec les meilleures pratiques SEO en tête, incluant une hiérarchie de titres logique (H1, H2, H3) et des suggestions sur où incorporer naturellement les mots-clés. Un contenu bien structuré tend à mieux performer dans les résultats de recherche.',
      },
      {
        question: 'Quelle devrait être la longueur de mon sujet d\'entrée ?',
        answer: 'Vous pouvez entrer n\'importe quoi, d\'une simple phrase de sujet ("avantages du télétravail") à un brief plus détaillé avec audience cible, angle et points clés que vous souhaitez couvrir. Plus de contexte produit généralement des plans plus adaptés.',
      },
      {
        question: 'Puis-je générer des plans pour différentes longueurs de contenu ?',
        answer: 'Oui, vous pouvez spécifier votre nombre de mots cible, et l\'outil ajustera le nombre de sections et la profondeur en conséquence. Un article de blog de 500 mots aura une structure plus simple qu\'un guide complet de 3 000 mots.',
      },
      {
        question: 'Le plan inclut-il des comptages de mots pour chaque section ?',
        answer: 'Lorsque vous spécifiez une longueur cible, l\'outil fournit des comptages de mots estimés pour chaque section pour vous aider à équilibrer votre contenu et vous assurer que vous allouez une profondeur appropriée à chaque sujet.',
      },
      {
        question: 'Puis-je utiliser le générateur de plan pour la collaboration d\'équipe ?',
        answer: 'Absolument. Les plans générés font d\'excellents briefs pour les rédacteurs, assurant que tout le monde comprend la structure et les points clés avant de commencer à écrire. Vous pouvez facilement copier et partager les plans avec votre équipe.',
      },
    ],
  },

  'detecteur-de-contenu-ia': {
    slug: 'detecteur-de-contenu-ia',
    name: 'Détecteur de Contenu IA',
    title: 'Détecteur de contenu IA gratuit',
    description: 'Détectez le contenu généré par l\'IA instantanément. Obtenez une analyse détaillée et découvrez ce qui rend un texte artificiel.',
    metaDescription: 'Détectez le contenu généré par l\'IA instantanément avec notre outil gratuit. Obtenez une analyse détaillée et découvrez ce qui rend votre texte artificiel. Aucune inscription requise.',
    inputLabel: 'Texte à analyser...',
    inputPlaceholder: 'Collez le texte que vous souhaitez vérifier pour la génération IA...',
    buttonText: 'Analyser le Texte',
    maxLength: 4096,
    options: [
      { name: 'analysisDepth', label: 'Profondeur d\'analyse', choices: ['Scan rapide', 'Analyse standard', 'Analyse détaillée'], default: 'Analyse standard', type: 'select' },
    ],
    systemPrompt: `You are an expert AI content analyst specializing in detecting whether text was written by a human or generated by AI.
## CORE RULES
- Provide a percentage score indicating likelihood of AI generation
- Analyze AI multiple dimensions of the text
- Explain reasoning with specific examples
- Acknowledge uncertainty when indicators are mixed
- Never claim 100% certainty
## DETECTION FRAMEWORK
### AI Indicators:
- Overly consistent paragraph/sentence lengths
- Overuse of: "delve," "crucial," "comprehensive," "leverage," "robust"
- Hedging: "it's important to note," "it's worth mentioning"
- Formulaic transitions: "Furthermore," "Moreover," "Additionally"
- Lack of personal voice, humor, or specific anecdotes
- Perfect grammar throughout
### Human Indicators:
- Unique voice and personality
- Specific anecdotes or experiences
- Natural variation in structure
- Occasional minor errors
- Cultural references, humor
## ANALYSIS DEPTH
### IF DEPTH = "Scan rapide" - Score + top 3 indicators
### IF DEPTH = "Analyse standard" - Score + category breakdown + examples
### IF DEPTH = "Analyse détaillée" - Comprehensive scoring + sentence-level flagging
## OUTPUT FORMAT
Profondeur d'analyse: {{analysisDepth}}
Provide: Probabilité IA Score, Niveau de Confiance, Analyse breakdown, Indicateurs spécifiques trouvés, Recommandations.
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Vérification de l\'intégrité académique',
        description: 'Les enseignants et étudiants utilisent le Détecteur de Contenu IA pour vérifier l\'originalité des travaux écrits. Les professeurs peuvent vérifier les essais et devoirs soumis pour des signes de génération IA, tandis que les étudiants peuvent s\'assurer que leur propre écriture ne reproduit pas involontairement des modèles IA avant la soumission.',
      },
      {
        title: 'Assurance qualité du contenu pour les éditeurs',
        description: 'Les équipes éditoriales, gestionnaires de blogs et agences de contenu utilisent le détecteur pour filtrer les soumissions et s\'assurer que le contenu publié maintient une voix humaine authentique. C\'est particulièrement précieux lors du travail avec des freelances ou lors de la mise à l\'échelle de la production de contenu tout en maintenant les standards de qualité.',
      },
      {
        title: 'Conformité SEO et marketing de contenu',
        description: 'Les équipes marketing préoccupées par les pénalités des moteurs de recherche pour le contenu généré par l\'IA peuvent scanner leurs articles avant publication. L\'outil aide à identifier les modèles problématiques et fournit des recommandations spécifiques pour rendre le contenu plus authentiquement humain, protégeant le classement de votre site.',
      },
    ],
    faqs: [
      {
        question: 'Comment fonctionne le détecteur de contenu IA ?',
        answer: 'Le détecteur analyse plusieurs dimensions de votre texte incluant la structure des phrases, les modèles de vocabulaire, les marqueurs stylistiques et les caractéristiques du contenu. Il compare ceux-ci aux modèles connus de contenu généré par l\'IA versus écrit par des humains pour calculer un score de probabilité.',
      },
      {
        question: 'Le détecteur de contenu IA est-il gratuit ?',
        answer: 'Oui, l\'outil est entièrement gratuit. Vous pouvez vérifier autant de textes que nécessaire sans créer de compte ni payer de frais.',
      },
      {
        question: 'Quelle est la précision de la détection de contenu IA ?',
        answer: 'Aucun détecteur IA n\'est précis à 100%. Notre outil fournit des scores de probabilité avec des niveaux de confiance. La détection est plus fiable pour les textes plus longs (300+ mots) et les sorties IA non éditées. Un contenu IA fortement édité ou une écriture humaine naturellement formelle peuvent affecter la précision.',
      },
      {
        question: 'Le détecteur peut-il identifier quel outil IA a écrit le contenu ?',
        answer: 'Le détecteur identifie si le contenu semble généré par l\'IA mais ne peut pas déterminer de manière fiable quel outil spécifique (ChatGPT, Claude, etc.) l\'a créé. Différents modèles IA partagent de nombreux modèles similaires.',
      },
      {
        question: 'Quel score de pourcentage signifie que le contenu est généré par l\'IA ?',
        answer: 'Généralement, les scores au-dessus de 70% suggèrent de forts indicateurs IA, 40-70% indique des signaux mixtes, et en dessous de 40% suggère une rédaction probablement humaine. Cependant, ce sont des directives—le contexte compte, et aucun seuil n\'est définitif.',
      },
      {
        question: 'Le contenu IA peut-il être édité pour passer la détection ?',
        answer: 'Oui, le contenu IA qui a été substantiellement édité par un humain montre souvent des indicateurs IA réduits. Le détecteur est plus efficace sur les sorties IA brutes ou légèrement éditées.',
      },
      {
        question: 'L\'écriture académique ou technique déclenchera-t-elle des faux positifs ?',
        answer: 'Les styles d\'écriture formels peuvent parfois déclencher des indicateurs IA car ils partagent des caractéristiques comme une structure cohérente et un vocabulaire formel. L\'outil en tient compte mais peut montrer des scores élevés pour du contenu naturellement formel.',
      },
      {
        question: 'Que dois-je faire si mon contenu écrit par un humain est signalé ?',
        answer: 'L\'outil fournit des retours spécifiques sur quels éléments ont déclenché des indicateurs IA. Vous pouvez utiliser cela pour ajuster votre style d\'écriture, ajouter plus de personnalité, ou inclure des exemples spécifiques qui démontrent la paternité humaine.',
      },
      {
        question: 'Quelle longueur le texte doit-il avoir pour une détection précise ?',
        answer: 'La précision s\'améliore avec la longueur. Les textes de moins de 100 mots sont difficiles à évaluer de manière fiable. Pour de meilleurs résultats, soumettez au moins 200-300 mots.',
      },
      {
        question: 'Le détecteur stocke-t-il ou partage-t-il mon texte soumis ?',
        answer: 'Non, le texte soumis est traité en temps réel et n\'est pas stocké. Votre contenu reste privé et n\'est utilisé à aucune autre fin.',
      },
    ],
  },

  'humanisateur-de-texte-ia': {
    slug: 'humanisateur-de-texte-ia',
    name: 'Humanisateur de Texte IA',
    title: 'Gratuit : L\'outil web pour humaniser vos contenus IA',
    description: 'Transformez le texte généré par l\'IA en écriture naturelle et humaine. Supprimez les modèles robotiques tout en gardant votre sens.',
    metaDescription: 'Transformez le texte généré par l\'IA en écriture naturelle et humaine. Notre humanisateur gratuit supprime les modèles robotiques tout en gardant votre sens original intact.',
    inputLabel: 'Texte à humaniser...',
    inputPlaceholder: 'Collez votre texte généré par l\'IA ici...',
    buttonText: 'Humaniser le Texte',
    maxLength: 4096,
    options: [
      { name: 'level', label: 'Niveau d\'humanisation', choices: ['Léger', 'Moyen', 'Intense'], default: 'Moyen', type: 'select' },
      { name: 'tone', label: 'Ton cible', choices: ['Professionnel', 'Décontracté', 'Académique', 'Conversationnel'], default: 'Professionnel', type: 'select' },
    ],
    systemPrompt: `You are an expert editor specializing in transforming AI-generated text into natural, human-sounding writing.
## CORE RULES
- Preserve the original meaning completely
- Remove obvious AI patterns without over-editing
- Add natural variation and human voice
- Never add false information
## AI PATTERNS TO REMOVE (French equivalents)
- Overuse of formal connectors: "De plus", "En outre", "Par ailleurs" → vary or restructure
- "Il est important de noter que" → remove or integrate naturally
- Overly perfect structure → add natural variation
## HUMANIZATION LEVELS
### IF LEVEL = "Léger" - Fix vocabulary markers, add contractions, minimal structural changes
### IF LEVEL = "Moyen" - All light changes + vary sentence structure, add personality
### IF LEVEL = "Intense" - All medium changes + significant voice injection, rhetorical questions
## TONE ADAPTATION
### IF TONE = "Professionnel" - Maintain authority while adding naturalness
### IF TONE = "Décontracté" - More contractions, shorter sentences, conversational
### IF TONE = "Académique" - Preserve scholarly tone, focus on vocabulary fixes
### IF TONE = "Conversationnel" - Direct address, questions, warm voice
## OUTPUT FORMAT
Niveau d'humanisation: {{level}}
Ton cible: {{tone}}
Output only the humanized text. No preamble.
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Créateurs de contenu utilisant l\'assistance IA',
        description: 'Les rédacteurs et marketeurs qui utilisent l\'IA pour rédiger du contenu peuvent passer les sorties par l\'humanisateur pour s\'assurer que les pièces finales sonnent authentiques et engageantes. L\'outil supprime les modèles IA révélateurs tout en préservant votre message central, vous permettant de tirer parti de l\'efficacité de l\'IA sans sacrifier la voix.',
      },
      {
        title: 'Étudiants affinant la recherche assistée par IA',
        description: 'Les étudiants qui utilisent des outils IA pour aider à brainstormer ou structurer des idées peuvent humaniser leurs brouillons pour s\'assurer que les soumissions reflètent leur propre voix et ne déclenchent pas de préoccupations de plagiat ou de détection IA. L\'outil aide à transformer les points de départ IA en travail final authentiquement exprimé.',
      },
      {
        title: 'Professionnels polissant les communications rédigées par IA',
        description: 'Les professionnels qui utilisent l\'IA pour rédiger des e-mails, rapports ou propositions peuvent humaniser le texte pour qu\'il sonne plus naturel et personnel. Cela garantit que les communications clients, mémos internes et documents professionnels maintiennent une voix authentique et un ton de construction de relations.',
      },
    ],
    faqs: [
      {
        question: 'Que signifie "humaniser" un texte IA ?',
        answer: 'Humaniser signifie éditer un texte généré par l\'IA pour supprimer les modèles robotiques, ajouter une variation de voix naturelle et le faire lire comme si un humain l\'avait écrit. Cela inclut le changement de vocabulaire, la variation de la structure des phrases et l\'ajout d\'éléments de personnalité.',
      },
      {
        question: 'L\'humanisateur de texte IA est-il gratuit ?',
        answer: 'Oui, l\'outil est entièrement gratuit sans inscription requise. Vous pouvez humaniser autant de texte que nécessaire sans aucun coût.',
      },
      {
        question: 'Le texte humanisé passera-t-il la détection IA ?',
        answer: 'L\'humanisateur réduit significativement les indicateurs IA, mais les résultats varient selon le texte original et l\'outil de détection utilisé. Pour de meilleurs résultats, combinez l\'humanisation avec vos propres éditions supplémentaires et touches personnelles.',
      },
      {
        question: 'L\'humanisation change-t-elle le sens de mon texte ?',
        answer: 'Non, l\'outil est conçu pour préserver complètement votre sens original. Il change comment les idées sont exprimées, pas quelles idées sont exprimées. Tous les faits et messages centraux restent intacts.',
      },
      {
        question: 'Quelle est la différence entre humanisation légère, moyenne et intense ?',
        answer: 'L\'humanisation légère fait des changements minimaux adaptés au contenu formel. Moyenne (par défaut) ajoute plus de variation naturelle pour le contenu général. L\'humanisation intense augmente significativement la personnalité et le ton décontracté pour le contenu informel.',
      },
      {
        question: 'Puis-je humaniser du texte dans n\'importe quel style ou ton ?',
        answer: 'Oui, vous pouvez spécifier votre ton préféré (professionnel, décontracté, amical, etc.) et l\'outil adaptera son approche d\'humanisation en conséquence tout en maintenant ce ton tout au long.',
      },
      {
        question: 'Combien de temps prend l\'humanisation ?',
        answer: 'Les résultats sont générés en quelques secondes, quelle que soit la longueur du texte. Les textes plus longs peuvent prendre légèrement plus de temps mais le processus est presque instantané.',
      },
      {
        question: 'Dois-je éditer davantage le texte humanisé ?',
        answer: 'Nous recommandons de réviser et d\'ajouter vos propres touches personnelles. L\'outil fournit une excellente base, mais ajouter des exemples spécifiques, des anecdotes personnelles ou des insights uniques de votre expérience rendra le contenu encore plus authentiquement vôtre.',
      },
      {
        question: 'Quels types de contenu puis-je humaniser ?',
        answer: 'L\'outil fonctionne avec n\'importe quel texte : articles, posts de blog, essais, e-mails, rapports, publications sur les réseaux sociaux, et plus encore. Il ajuste son approche en fonction du type de contenu et du niveau de formalité.',
      },
      {
        question: 'Puis-je humaniser du contenu dans d\'autres langues ?',
        answer: 'L\'outil est optimisé pour le texte français. Bien qu\'il puisse fonctionner avec d\'autres langues, les résultats sont plus fiables et naturels avec du contenu français.',
      },
    ],
  },

  'generateur-de-conclusion': {
    slug: 'generateur-de-conclusion',
    name: 'Générateur de Conclusion',
    title: 'Générateur de conclusions IA gratuit',
    description: 'Générez des conclusions percutantes pour tout article, essai ou post de blog avec des points clés et des appels à l\'action.',
    metaDescription: 'Générez des conclusions percutantes pour tout article, essai ou post de blog. Notre outil IA gratuit crée des fins satisfaisantes avec des points clés et des appels à l\'action.',
    inputLabel: 'Sujet de l\'article et points clés...',
    inputPlaceholder: 'ex. Sujet : Bienfaits de la méditation. Points clés : réduction du stress, concentration améliorée, meilleur sommeil',
    buttonText: 'Générer une Conclusion',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'Type de contenu', choices: ['Article de Blog', 'Guide Pratique', 'Listicle', 'Essai/Opinion', 'Avis Produit', 'Recherche/Rapport'], default: 'Article de Blog', type: 'select' },
      { name: 'ctaType', label: 'Appel à l\'action', choices: ['Doux (informatif)', 'Direct (commercial)', 'Réflexion', 'Aucun'], default: 'Doux (informatif)', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Professionnel', 'Décontracté', 'Inspirant', 'Académique'], default: 'Professionnel', type: 'select' },
    ],
    systemPrompt: `You are an expert content writer specializing in crafting compelling conclusions that leave readers with clear takeaways.
## CORE RULES
- Never simply repeat the introduction
- Synthesize and elevate key points, don't just list them
- Include a forward-looking element (next steps or CTA)
- Keep conclusions proportional (10-15% of total)
- End with impact—the final sentence should resonate
## CONCLUSION ARCHITECTURE
1. Transition signal (subtle, not "En conclusion")
2. Key insight synthesis - the ONE main takeaway
3. Supporting point summary - 2-3 key points in fresh language
4. Stakes/implications - why this matters
5. Call to action or next step
6. Closing line - memorable final thought
## CONTENT TYPE ADAPTATIONS
### IF TYPE = "Article de Blog" - Conversational, include practical CTA
### IF TYPE = "Guide Pratique" - Reinforce transformation, suggest next actions
### IF TYPE = "Listicle" - Highlight top recommendation
### IF TYPE = "Essai/Opinion" - Return to thesis with new depth
### IF TYPE = "Avis Produit" - Clear verdict and recommendation
### IF TYPE = "Recherche/Rapport" - Primary finding and recommendations
## CTA TYPES
### IF CTA = "Doux (informatif)" - "Réfléchissez à comment cela s'applique..." or "Commencez par..."
### IF CTA = "Direct (commercial)" - "Essayez [produit] gratuitement..." or "Démarrez..."
### IF CTA = "Réflexion" - "Qu'est-ce que cela signifie pour...?"
### IF CTA = "Aucun" - End with insight, no explicit action
## OUTPUT FORMAT
Type de contenu: {{contentType}}
Type de CTA: {{ctaType}}
Ton: {{tone}}
Output only the conclusion paragraph(s). No preamble.
IMPORTANT: Generate all content in French.`,
    useCases: [
      {
        title: 'Conclusions de blog et marketing de contenu',
        description: 'Les créateurs de contenu qui ont du mal à terminer efficacement leurs articles utilisent le Générateur de Conclusion pour rédiger des clôtures satisfaisantes qui résument les points clés et incitent à l\'action du lecteur. L\'outil assure que chaque pièce se termine avec impact plutôt que de s\'essouffler, améliorant l\'engagement et les taux de conversion.',
      },
      {
        title: 'Conclusions d\'essais académiques',
        description: 'Les étudiants rédigeant des essais, des documents de recherche ou des chapitres de thèse peuvent générer des conclusions bien structurées qui synthétisent leurs arguments sans simplement répéter l\'introduction. L\'outil aide à élever les paragraphes finaux de simples résumés à des clôtures percutantes qui laissent une impression durable.',
      },
      {
        title: 'Finalisation de documents professionnels',
        description: 'Les professionnels rédigeant des rapports, propositions ou présentations peuvent créer des conclusions qui communiquent clairement les recommandations, les prochaines étapes et les points clés à retenir. L\'outil assure que les documents importants se terminent avec clarté et direction actionnable pour les parties prenantes.',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qui fait une bonne conclusion ?',
        answer: 'Une conclusion forte synthétise les points clés (ne les répète pas simplement), renforce le message principal, aborde les implications ou enjeux, et fournit des prochaines étapes claires ou un appel à l\'action. Elle devrait laisser les lecteurs avec un sentiment de clôture et de motivation.',
      },
      {
        question: 'Le générateur de conclusion est-il gratuit ?',
        answer: 'Oui, l\'outil est entièrement gratuit sans inscription ni paiement requis. Générez autant de conclusions que nécessaire sans aucun coût.',
      },
      {
        question: 'Quelles informations dois-je fournir ?',
        answer: 'Au minimum, fournissez votre sujet et les points clés couverts dans votre contenu. Pour de meilleurs résultats, spécifiez également le type de contenu (blog, essai, rapport), le ton souhaité et tout appel à l\'action spécifique que vous souhaitez inclure.',
      },
      {
        question: 'La conclusion correspondra-t-elle à mon style d\'écriture ?',
        answer: 'L\'outil s\'adapte au ton que vous spécifiez (professionnel, décontracté, académique, etc.) et correspond aux conventions standard pour votre type de contenu. Pour une correspondance parfaite du style, nous recommandons une légère édition pour ajouter votre voix personnelle.',
      },
      {
        question: 'Quelle devrait être la longueur d\'une conclusion ?',
        answer: 'Les conclusions font généralement 10-15% de la longueur totale du contenu. Pour un article de 1 000 mots, attendez-vous à 100-150 mots. Vous pouvez spécifier votre longueur cible et l\'outil s\'ajustera en conséquence.',
      },
      {
        question: 'Puis-je générer des conclusions pour différents types de contenu ?',
        answer: 'Oui, l\'outil gère les articles de blog, essais, guides pratiques, listicles, avis produits, rapports de recherche, et plus encore. Chaque type suit les conventions et structures appropriées.',
      },
      {
        question: 'Les conclusions doivent-elles inclure des appels à l\'action ?',
        answer: 'Pour le contenu marketing, oui—les conclusions sont un espace privilégié pour les CTA. Pour le contenu académique ou informatif, le "CTA" pourrait être d\'encourager une réflexion plus approfondie ou de suggérer des lectures connexes plutôt qu\'une action commerciale.',
      },
      {
        question: 'Comment éviter une conclusion qui répète simplement mon introduction ?',
        answer: 'L\'outil est conçu pour synthétiser et élever vos points clés, pas les répéter. Il formule les points à retenir dans un langage frais et ajoute des éléments prospectifs qui vont au-delà de ce que votre introduction a énoncé.',
      },
      {
        question: 'Puis-je utiliser cela pour des e-mails ou du contenu court ?',
        answer: 'Oui, bien que l\'outil soit optimisé pour du contenu plus long. Pour les e-mails, spécifiez une longueur cible très courte et l\'outil générera des conclusions concises avec des CTA appropriés.',
      },
      {
        question: 'Et si je n\'aime pas la conclusion générée ?',
        answer: 'Vous pouvez régénérer avec des entrées ajustées (ton différent, CTA, longueur) ou utiliser le résultat comme point de départ pour votre propre édition. La conclusion générée fournit une structure et des idées sur lesquelles vous pouvez bâtir.',
      },
    ],
  },

  // ==================== BATCH 2: Tools 11-20 ====================

  'verificateur-de-grammaire': {
    slug: 'verificateur-de-grammaire',
    name: 'Vérificateur de Grammaire',
    title: 'Vérificateur de grammaire IA gratuit',
    description: 'Vérifiez votre grammaire, orthographe et ponctuation gratuitement. Obtenez des corrections instantanées avec des explications claires.',
    metaDescription: 'Vérifiez votre grammaire, orthographe et ponctuation gratuitement. Obtenez des corrections instantanées avec des explications claires pour améliorer vos compétences rédactionnelles.',
    inputLabel: 'Texte à vérifier...',
    inputPlaceholder: 'Collez votre texte ici pour vérifier les erreurs de grammaire, orthographe et ponctuation...',
    buttonText: 'Vérifier la Grammaire',
    maxLength: 4096,
    options: [
      { name: 'mode', label: 'Mode de vérification', choices: ['Correction rapide', 'Standard', 'Apprentissage détaillé', 'Académique', 'Décontracté/Créatif'], default: 'Standard', type: 'select' },
    ],
    systemPrompt: `You are an expert editor and grammar specialist who identifies and corrects errors while explaining issues clearly.
## CORE RULES
- Identify ALL grammar, spelling, and punctuation errors
- Provide corrected text with all fixes applied
- Explain each error type clearly
- Distinguish between errors (must fix) and style suggestions (optional)
- Maintain the author's voice and intent
## ERROR CATEGORIES
### Critical Errors (Always Flag):
- Subject-verb agreement
- Tense consistency
- Fragment and run-on sentences
- Spelling and commonly confused words
- Punctuation errors (commas, apostrophes, semicolons)
### Style Suggestions (Optional):
- Wordy phrases
- Passive voice
- Very long sentences
- Repeated word starts
## ANALYSIS MODES
### IF MODE = "Correction rapide" - Critical errors only, minimal explanations
### IF MODE = "Standard" - All critical errors + key style suggestions
### IF MODE = "Apprentissage détaillé" - All errors with comprehensive explanations and tips
### IF MODE = "Académique" - Strict grammar standards, formal conventions
### IF MODE = "Décontracté/Créatif" - Flexible on style, respect authorial voice
## OUTPUT FORMAT
Mode: {{mode}}
Provide:
### Texte Corrigé
[Full text with corrections]
### Résumé des Erreurs
- Erreurs critiques: [Number]
- Suggestions de style: [Number]
### Liste Détaillée des Erreurs
[For each: original, corrected, explanation]
### Conseils de Rédaction
[1-2 personalized tips based on patterns observed]
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Polissage des communications professionnelles',
        description: 'Les professionnels utilisent le Vérificateur de Grammaire pour s\'assurer que leurs e-mails, rapports et présentations sont exempts d\'erreurs avant de les envoyer à leurs collègues, clients ou dirigeants. Une rédaction propre et professionnelle renforce la crédibilité et évite les erreurs embarrassantes qui peuvent nuire à votre message.',
      },
      {
        title: 'Relecture de travaux académiques',
        description: 'Les étudiants et chercheurs peuvent vérifier leurs essais, articles et brouillons de thèse pour les erreurs de grammaire et de ponctuation avant soumission. L\'outil détecte les erreurs que le correcteur orthographique manque et fournit des explications qui aident à améliorer les compétences rédactionnelles au fil du temps.',
      },
      {
        title: 'Assurance qualité de la création de contenu',
        description: 'Les blogueurs, marketeurs de contenu et rédacteurs utilisent le Vérificateur de Grammaire comme passe finale de qualité avant publication. Même les rédacteurs professionnels manquent des erreurs lors de l\'auto-édition, et l\'outil fournit une révision automatisée fraîche qui détecte les oublis.',
      },
    ],
    faqs: [
      { question: 'Quels types d\'erreurs le vérificateur de grammaire trouve-t-il ?', answer: 'L\'outil identifie les erreurs de grammaire (accord sujet-verbe, problèmes de temps, fragments), les fautes d\'orthographe, les problèmes de ponctuation (virgules, apostrophes, points-virgules) et les mots fréquemment confondus. Il signale également les suggestions de style pour la clarté et la lisibilité.' },
      { question: 'Le vérificateur de grammaire est-il gratuit ?', answer: 'Oui, l\'outil est entièrement gratuit sans limites. Vérifiez autant de textes que nécessaire sans vous inscrire ni payer quoi que ce soit.' },
      { question: 'En quoi est-ce différent d\'un correcteur orthographique ?', answer: 'Le correcteur orthographique standard ne détecte que les fautes d\'orthographe. Notre vérificateur de grammaire analyse la structure des phrases, la ponctuation, l\'utilisation des mots et le style—détectant des erreurs comme les accords incorrects que le correcteur orthographique manque.' },
      { question: 'L\'outil changera-t-il mon style d\'écriture ?', answer: 'L\'outil se concentre sur la correction des erreurs réelles tout en préservant votre voix. Les suggestions de style sont clairement marquées comme optionnelles, et vous choisissez les changements à accepter. Il ne rendra pas votre écriture générique ou robotique.' },
      { question: 'Peut-il vérifier des textes académiques ou formels ?', answer: 'Oui, vous pouvez sélectionner un mode académique qui applique des normes grammaticales plus strictes et des conventions formelles appropriées pour l\'écriture académique, les documents professionnels ou les communications d\'affaires.' },
      { question: 'Explique-t-il pourquoi quelque chose est faux ?', answer: 'Oui, chaque erreur inclut une explication de la règle violée et des conseils sur comment éviter des erreurs similaires. Cela vous aide à apprendre et à vous améliorer, pas seulement à corriger le problème immédiat.' },
      { question: 'Quelle peut être la longueur de mon texte ?', answer: 'L\'outil gère des textes de différentes longueurs, des courts e-mails aux longs documents. Pour les documents très longs, vous pourriez obtenir de meilleurs résultats en vérifiant section par section.' },
      { question: 'Fonctionne-t-il pour d\'autres langues que le français ?', answer: 'L\'outil est optimisé pour la grammaire, l\'orthographe et la ponctuation françaises. Il peut détecter certaines erreurs dans d\'autres langues mais n\'est pas conçu pour une vérification complète non francophone.' },
      { question: 'Détectera-t-il toutes mes erreurs ?', answer: 'Bien que l\'outil détecte la grande majorité des erreurs courantes, aucun vérificateur automatisé n\'est parfait. Nous recommandons de l\'utiliser comme partie de votre processus d\'édition, pas comme un remplacement complet de la relecture humaine pour les documents critiques.' },
      { question: 'Puis-je l\'utiliser pour l\'écriture créative ?', answer: 'Oui, sélectionnez le mode décontracté/créatif pour plus de flexibilité. L\'outil respectera les fragments intentionnels, le langage informel et les choix stylistiques tout en détectant les véritables erreurs.' },
    ],
  },

  'reecriveur-de-phrase': {
    slug: 'reecriveur-de-phrase',
    name: 'Réécriveur de Phrase',
    title: 'Outil d\'IA gratuit de réécriture de phrases',
    description: 'Réécrivez des phrases pour plus de clarté, d\'impact ou un meilleur ton. Obtenez plusieurs variations avec des explications.',
    metaDescription: 'Réécrivez des phrases pour plus de clarté, d\'impact ou un meilleur ton. Obtenez plusieurs variations avec des explications de ce qui rend chacune plus forte. Gratuit, sans inscription.',
    inputLabel: 'Phrase à réécrire...',
    inputPlaceholder: 'ex. La mise en œuvre du nouveau système a été complétée par l\'équipe la semaine dernière.',
    buttonText: 'Réécrire la Phrase',
    maxLength: 1024,
    options: [
      { name: 'goal', label: 'Objectif d\'amélioration', choices: ['Clarté', 'Impact', 'Concision', 'Plus formel', 'Plus décontracté', 'Plus confiant'], default: 'Clarté', type: 'select' },
      { name: 'variants', label: 'Nombre de variations', choices: ['2 variations', '3 variations', '5 variations'], default: '3 variations', type: 'select' },
    ],
    systemPrompt: `You are an expert editor specializing in sentence-level revision to improve clarity, impact, or tone.
## CORE RULES
- Preserve the exact meaning of the original
- Make substantive improvements, not just word swaps
- Provide multiple variations with different approaches
- Explain the improvement strategy for each
- Never add information not in the original
## REWRITING APPROACHES
### IF GOAL = "Clarté" - Simplify structure, use active voice, front-load important info
### IF GOAL = "Impact" - Strengthen verbs, add rhythm, use parallel structure
### IF GOAL = "Concision" - Cut 20-40% word count, remove redundancy
### IF GOAL = "Plus formel" - Remove contractions, elevate vocabulary
### IF GOAL = "Plus décontracté" - Add contractions, simpler words, conversational
### IF GOAL = "Plus confiant" - Remove hedging, use declarative statements
## TECHNIQUES
- Weak → Strong: "a fait une amélioration" → "a amélioré"
- Passive → Active: "a été écrit par Sarah" → "Sarah a écrit"
- Wordy → Concise: "en raison du fait que" → "parce que"
## OUTPUT FORMAT
Objectif: {{goal}}
Variations: {{variants}}
For each variation:
1. Phrase réécrite
2. Ce qui a été changé
3. Pourquoi cela améliore la phrase
End with recommendation of strongest option.
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Affiner les messages clés et les titres',
        description: 'Les marketeurs et copywriters utilisent le Réécriveur de Phrase pour polir les phrases critiques comme les titres, slogans, CTAs et phrases d\'accroche. Quand une seule phrase doit avoir un impact fort, l\'outil génère plusieurs variations pour que vous puissiez choisir la version la plus percutante.',
      },
      {
        title: 'Améliorer la communication par e-mail',
        description: 'Les professionnels peuvent réécrire des phrases maladroites ou peu claires dans des e-mails importants avant de les envoyer. Que vous ayez besoin de paraître plus confiant, plus diplomatique ou simplement plus clair, l\'outil fournit des options qui vous aident à communiquer exactement ce que vous voulez dire.',
      },
      {
        title: 'Assistance à l\'édition et à la relecture',
        description: 'Les rédacteurs et éditeurs utilisent l\'outil quand ils savent qu\'une phrase ne fonctionne pas mais ne savent pas comment la corriger. En générant plusieurs alternatives, l\'outil permet de surmonter les blocages d\'édition et offre des approches fraîches pour les phrases problématiques.',
      },
    ],
    faqs: [
      { question: 'Quelle est la différence entre réécriture de phrase et paraphrase ?', answer: 'La réécriture de phrase se concentre sur l\'amélioration de la clarté, de l\'impact ou du ton d\'une seule phrase tout en gardant le même sens. La paraphrase consiste à exprimer la même idée avec des mots différents, souvent pour éviter la duplication. Le réécriveur essaie activement de rendre les phrases meilleures, pas juste différentes.' },
      { question: 'Le réécriveur de phrase est-il gratuit ?', answer: 'Oui, entièrement gratuit sans inscription requise. Réécrivez autant de phrases que nécessaire.' },
      { question: 'Combien de variations vais-je obtenir ?', answer: 'L\'outil fournit généralement 3 variations distinctes, chacune adoptant une approche différente d\'amélioration. Cela vous donne des options parmi lesquelles choisir selon vos besoins spécifiques.' },
      { question: 'Puis-je spécifier quel type d\'amélioration je veux ?', answer: 'Oui, vous pouvez demander des objectifs spécifiques comme "plus concis", "plus formel", "plus confiant" ou "plus clair". L\'outil adaptera ses variations à votre objectif déclaré.' },
      { question: 'Le sens changera-t-il ?', answer: 'Non, toutes les variations préservent votre sens original. L\'outil change comment l\'idée est exprimée, pas quelle idée est exprimée. C\'est une règle fondamentale du processus de réécriture.' },
      { question: 'Pourquoi ai-je besoin de cela si j\'ai un vérificateur de grammaire ?', answer: 'Les vérificateurs de grammaire corrigent les erreurs. Le réécriveur de phrase améliore les phrases grammaticalement correctes mais qui pourraient être plus claires, plus fortes ou plus appropriées pour votre audience. Il s\'agit d\'amélioration de la qualité, pas de correction d\'erreurs.' },
      { question: 'Puis-je réécrire plusieurs phrases à la fois ?', answer: 'L\'outil est optimisé pour une phrase à la fois pour les améliorations les plus ciblées. Pour plusieurs phrases, utilisez le reformulateur de paragraphe ou passez les phrases individuellement.' },
      { question: 'Qu\'est-ce qui rend une réécriture meilleure qu\'une autre ?', answer: 'Cela dépend de votre objectif. Pour les e-mails, la clarté et le ton approprié comptent le plus. Pour le marketing, l\'impact et la mémorabilité sont clés. L\'outil explique chaque variation pour que vous puissiez choisir selon votre contexte spécifique.' },
      { question: 'Peut-il aider avec des phrases non francophones ?', answer: 'L\'outil est optimisé pour le français. Les résultats avec d\'autres langues peuvent varier et ne seront pas aussi fiables.' },
      { question: 'Dois-je toujours utiliser l\'option recommandée ?', answer: 'La recommandation est basée sur les préférences communes, mais vous connaissez mieux votre contexte. Passez en revue toutes les options et choisissez celle qui correspond le mieux à votre audience, ton et objectif spécifiques.' },
    ],
  },

  'generateur-acronymes': {
    slug: 'generateur-acronymes',
    name: 'Générateur d\'Acronymes',
    title: 'Générateur d\'acronymes par IA gratuit',
    description: 'Générez des acronymes astucieux et significatifs pour vos projets, produits et organisations.',
    metaDescription: 'Générez des acronymes astucieux et significatifs pour vos projets, produits et organisations. Obtenez plusieurs options avec les significations développées. Gratuit et instantané.',
    inputLabel: 'Sujet ou concept...',
    inputPlaceholder: 'ex. Initiative d\'amélioration des retours clients pour le commerce de détail',
    buttonText: 'Générer des Acronymes',
    maxLength: 1024,
    options: [
      { name: 'tone', label: 'Ton', choices: ['Professionnel', 'Créatif', 'Technique', 'Ludique'], default: 'Professionnel', type: 'select' },
      { name: 'length', label: 'Longueur préférée', choices: ['Court (3-4 lettres)', 'Moyen (5-6 lettres)', 'Toute longueur'], default: 'Toute longueur', type: 'select' },
      { name: 'variants', label: 'Nombre d\'options', choices: ['3 options', '5 options', '10 options'], default: '5 options', type: 'select' },
    ],
    systemPrompt: `You are an expert naming specialist who creates memorable, meaningful acronyms.
## CORE RULES
- Every letter must map to a real, relevant word
- The acronym should be pronounceable or spell a meaningful word
- Words chosen should accurately describe the subject
- Avoid forced or awkward word choices
- Provide multiple options with different approaches
## ACRONYM APPROACHES
- Real Word: Spell actual words (SMART, CARE)
- Pronounceable: Can be spoken as words (NASA, RADAR)
- Letter-by-letter: Spelled out (CEO, FAQ)
## TONE ADAPTATION
### IF TONE = "Professionnel" - Business-appropriate vocabulary
### IF TONE = "Créatif" - Playful, unexpected combinations
### IF TONE = "Technique" - Industry-specific terms
### IF TONE = "Ludique" - Fun, engaging words
## OUTPUT FORMAT
Ton: {{tone}}
Longueur préférée: {{length}}
Nombre d'options: {{variants}}
For each acronym:
1. L'acronyme
2. Forme développée complète
3. Type (mot réel/prononçable/lettre par lettre)
4. Pourquoi ça fonctionne
End with recommendation and alternative words to swap in.
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Nommage de projets et initiatives',
        description: 'Les équipes lançant de nouveaux projets, programmes ou initiatives utilisent le Générateur d\'Acronymes pour créer des noms mémorables qui communiquent l\'objectif. Un acronyme fort rend les projets plus faciles à référencer, à retenir et à rallier—transformant "le projet d\'amélioration des retours clients" en quelque chose comme "VOIX".',
      },
      {
        title: 'Nommage de produits et fonctionnalités',
        description: 'Les chefs de produit et marketeurs peuvent générer des noms basés sur des acronymes pour des produits, fonctionnalités ou méthodologies qui transmettent la valeur tout en étant accrocheurs et de marque. Le bon acronyme peut devenir une partie puissante de l\'identité et du marketing de votre produit.',
      },
      {
        title: 'Branding organisationnel et d\'équipe',
        description: 'Les leaders créant de nouvelles équipes, départements, comités ou groupes de travail peuvent trouver des acronymes qui capturent leur mission et leurs valeurs. Un acronyme réfléchi donne aux groupes une identité et aide à communiquer l\'objectif à l\'organisation plus large.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'un générateur d\'acronymes ?', answer: 'Un générateur d\'acronymes crée des formes abrégées de phrases où chaque lettre représente un mot. L\'outil vous aide à trouver des combinaisons où les lettres épellent quelque chose de mémorable tandis que les mots développés décrivent précisément votre sujet.' },
      { question: 'Le générateur d\'acronymes est-il gratuit ?', answer: 'Oui, entièrement gratuit sans inscription requise. Générez autant d\'acronymes que nécessaire.' },
      { question: 'Quelle est la différence entre un acronyme et un sigle ?', answer: 'Les acronymes se prononcent comme des mots (NASA, RADAR), tandis que les sigles sont épelés lettre par lettre (FBI, CEO). L\'outil génère les deux types selon ce qui fonctionne le mieux pour votre sujet.' },
      { question: 'Combien de lettres mon acronyme devrait-il avoir ?', answer: '3-7 lettres fonctionnent généralement le mieux. Les acronymes plus courts sont plus faciles à retenir mais offrent moins de pouvoir descriptif. Les plus longs peuvent être plus spécifiques mais plus difficiles à mémoriser. L\'outil fournit des options de différentes longueurs.' },
      { question: 'Puis-je demander un mot spécifique à épeler ?', answer: 'Oui, vous pouvez demander un "rétronyme" où vous spécifiez le mot que vous voulez et l\'outil trouve des phrases pour correspondre à chaque lettre. Notez simplement que les rétronymes forcés peuvent parfois sembler maladroits si les mots ne correspondent pas naturellement.' },
      { question: 'Les acronymes seront-ils uniques ?', answer: 'L\'outil génère des combinaisons originales, mais nous recommandons de rechercher vos favoris en ligne pour vous assurer qu\'ils ne sont pas déjà utilisés par d\'autres organisations, surtout dans votre secteur.' },
      { question: 'Puis-je générer des acronymes pour différentes industries ?', answer: 'Oui, spécifiez votre industrie ou contexte et l\'outil utilisera une terminologie pertinente. Un acronyme pour une initiative de santé utilisera un vocabulaire différent de celui d\'une startup technologique.' },
      { question: 'Et si aucune des suggestions ne me plaît ?', answer: 'Vous pouvez régénérer avec des entrées ajustées (ton, longueur ou contexte différents), ou utiliser les options générées comme inspiration pour créer votre propre variation. L\'outil fournit également des mots alternatifs que vous pouvez substituer.' },
      { question: 'L\'acronyme doit-il épeler un vrai mot ?', answer: 'Pas nécessairement. Les acronymes de vrais mots (comme SMART ou CARE) sont très mémorables, mais les non-mots prononçables (comme NASA) ou les acronymes basés sur les lettres (comme CEO) peuvent fonctionner tout aussi bien selon le contexte.' },
      { question: 'Comment savoir si un acronyme est bon ?', answer: 'Les bons acronymes sont faciles à prononcer, faciles à retenir et représentent fidèlement leur signification développée. Ils doivent sembler naturels—pas forcés—et idéalement créer des associations positives.' },
    ],
  },

  'generateur-lorem-ipsum': {
    slug: 'generateur-lorem-ipsum',
    name: 'Générateur Lorem Ipsum',
    title: 'Générateur d\'IA Lorem Ipsum gratuit',
    description: 'Générez du texte de remplissage lorem ipsum pour vos designs, maquettes et mises en page.',
    metaDescription: 'Générez du texte de remplissage lorem ipsum pour vos designs, maquettes et mises en page. Choisissez entre traditionnel ou alternatives modernes. Prêt à copier-coller.',
    inputLabel: 'Quantité nécessaire...',
    inputPlaceholder: 'ex. 3 paragraphes, 500 mots, ou 10 phrases',
    buttonText: 'Générer le Texte',
    maxLength: 256,
    options: [
      { name: 'type', label: 'Type de texte', choices: ['Lorem Ipsum Traditionnel', 'Hipster Ipsum', 'Business/Corporate Ipsum', 'Français Simple'], default: 'Lorem Ipsum Traditionnel', type: 'select' },
      { name: 'amount', label: 'Quantité', choices: ['1 paragraphe', '3 paragraphes', '5 paragraphes', '500 mots', '1000 mots'], default: '3 paragraphes', type: 'select' },
      { name: 'format', label: 'Format', choices: ['Texte brut', 'Avec balises HTML'], default: 'Texte brut', type: 'select' },
    ],
    systemPrompt: `You are a placeholder text generator providing lorem ipsum and alternative filler text.
## CORE RULES
- Generate clean, consistent placeholder text
- Provide exact amounts as requested
- Format output cleanly for easy copy-paste
## TEXT TYPES
### IF TYPE = "Lorem Ipsum Traditionnel"
Start with "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." and continue with Latin text.
### IF TYPE = "Hipster Ipsum"
Trendy, artisanal-sounding text with modern cultural references.
### IF TYPE = "Business/Corporate Ipsum"
Corporate buzzword filler with terms like synergy, leverage, paradigm.
### IF TYPE = "Français Simple"
Simple readable sentences in French acknowledging this is placeholder content.
## FORMAT OPTIONS
### IF FORMAT = "Texte brut" - Clean text with paragraph breaks
### IF FORMAT = "Avec balises HTML" - Wrap paragraphs in <p> tags
## OUTPUT FORMAT
Type: {{type}}
Quantité: {{amount}}
Format: {{format}}
Generate the requested placeholder text, ready to copy-paste.`,
    useCases: [
      {
        title: 'Maquettes de design web et UI',
        description: 'Les designers utilisent Lorem Ipsum pour remplir les mises en page, wireframes et maquettes avec du texte d\'apparence réaliste avant que le contenu réel ne soit écrit. Cela aide les clients et équipes à visualiser à quoi ressemblera le design final avec le contenu en place sans être distraits par la lecture du texte réel.',
      },
      {
        title: 'Placeholders de développement et de test',
        description: 'Les développeurs utilisent du texte de remplissage pour tester les mises en page, les paramètres typographiques et les designs responsifs. Le lorem ipsum aide à vérifier que les conteneurs de texte, les hauteurs de ligne et les comportements de débordement fonctionnent correctement pour différentes longueurs de contenu.',
      },
      {
        title: 'Mises en page d\'impression et de design graphique',
        description: 'Les designers graphiques travaillant sur des brochures, magazines, affiches et autres supports imprimés utilisent le lorem ipsum pour compléter les mises en page pour approbation client avant que la copie finale ne soit livrée, permettant au travail de design de progresser en parallèle avec la création de contenu.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce que Lorem Ipsum ?', answer: 'Lorem Ipsum est un texte de remplissage basé sur du latin brouillé, utilisé dans le design et l\'édition depuis les années 1500. Il fournit un texte d\'apparence réaliste pour remplir les mises en page sans distraire les spectateurs avec un contenu lisible.' },
      { question: 'Le générateur Lorem Ipsum est-il gratuit ?', answer: 'Oui, entièrement gratuit sans limites. Générez autant de texte de remplissage que nécessaire.' },
      { question: 'Pourquoi utiliser Lorem Ipsum au lieu de vrai texte ?', answer: 'Utiliser du texte de remplissage sans signification empêche les clients et réviseurs de se concentrer sur le contenu quand ils devraient évaluer le design. Cela permet également au travail de design de progresser avant que la copie finale ne soit écrite.' },
      { question: 'Le Lorem Ipsum est-il vraiment du latin ?', answer: 'Lorem Ipsum est dérivé d\'une œuvre de Cicéron de 45 av. J.-C., mais il a été tellement brouillé et altéré qu\'il n\'est plus du latin correct. Il n\'a pas de traduction significative.' },
      { question: 'Puis-je obtenir des alternatives au Lorem Ipsum traditionnel ?', answer: 'Oui, l\'outil offre plusieurs alternatives incluant Hipster Ipsum, Office Ipsum, et du texte de remplissage en français simple pour la variété ou l\'appropriation thématique.' },
      { question: 'Dans quel format le texte est-il fourni ?', answer: 'Le texte est fourni en texte brut propre prêt à copier-coller. Vous pouvez également demander une sortie formatée en HTML avec des balises de paragraphe pour l\'utilisation web.' },
      { question: 'Puis-je spécifier exactement combien de texte j\'ai besoin ?', answer: 'Oui, vous pouvez demander des quantités spécifiques par nombre de paragraphes, nombre de mots, nombre de phrases ou nombre de caractères. L\'outil génère aussi près que possible de votre spécification.' },
      { question: 'Le Lorem Ipsum affecte-t-il le SEO ?', answer: 'Le texte de remplissage devrait toujours être remplacé avant publication. Du Lorem Ipsum publié pourrait potentiellement nuire au SEO et paraît non professionnel. Remplacez toujours par du vrai contenu avant de mettre en ligne.' },
      { question: 'Pourquoi Lorem Ipsum commence-t-il par "Lorem ipsum dolor sit amet" ?', answer: 'C\'est la phrase de départ traditionnelle depuis des siècles. Les mots proviennent d\'une section brouillée du "de Finibus Bonorum et Malorum" de Cicéron (Des fins des biens et des maux).' },
      { question: 'Puis-je utiliser Lorem Ipsum pour n\'importe quel projet ?', answer: 'Oui, Lorem Ipsum est dans le domaine public et n\'a pas de restrictions de droits d\'auteur. Vous pouvez l\'utiliser librement dans n\'importe quel projet de design, développement ou mise en page.' },
    ],
  },

  'traducteur-emoji': {
    slug: 'traducteur-emoji',
    name: 'Traducteur d\'Émojis',
    title: 'Traducteur d\'émojis par IA gratuit',
    description: 'Traduisez du texte en émojis expressifs ou décodez des messages d\'émojis.',
    metaDescription: 'Traduisez du texte en émojis expressifs ou décodez des messages d\'émojis. Parfait pour les réseaux sociaux, la messagerie et la communication ludique. Gratuit.',
    inputLabel: 'Texte ou émojis...',
    inputPlaceholder: 'ex. "Je suis tellement excité pour le week-end !" ou collez des émojis à décoder',
    buttonText: 'Traduire',
    maxLength: 1024,
    options: [
      { name: 'direction', label: 'Direction de traduction', choices: ['Texte vers Émojis', 'Émojis vers Texte'], default: 'Texte vers Émojis', type: 'radio' },
      { name: 'style', label: 'Style d\'émoji', choices: ['Remplacement complet', 'Texte avec émojis', 'Concepts clés seulement'], default: 'Texte avec émojis', type: 'select' },
    ],
    systemPrompt: `You are an expert at translating between text and emojis.
## CORE RULES
- Match emojis to the meaning and emotion of the text
- Use commonly understood emojis
- Maintain the tone and sentiment
- Don't overuse emojis—select the most impactful ones
## TRANSLATION MODES
### IF DIRECTION = "Texte vers Émojis"
#### IF STYLE = "Remplacement complet" - Replace entire message with emojis only
#### IF STYLE = "Texte avec émojis" - Add emojis to enhance text (2-4 per sentence max)
#### IF STYLE = "Concepts clés seulement" - Translate only main nouns/verbs/emotions
### IF DIRECTION = "Émojis vers Texte"
- Interpret the emoji sequence
- Provide most likely meaning
- Note alternative interpretations if ambiguous
## EMOJI SELECTION
- Joyeux: 😊 😄 🎉 ✨ ❤️
- Triste: 😢 😞 💔
- Excité: 🎉 🔥 🚀
- Amour: ❤️ 💕 😍
- Succès: 🏆 ⭐ 🎯 ✅
## OUTPUT FORMAT
Direction: {{direction}}
Style: {{style}}
Provide the translation with explanation of key emojis used.
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Amélioration des réseaux sociaux et de la messagerie',
        description: 'Les utilisateurs cherchant à ajouter de la personnalité à leurs textes, tweets ou publications sociales peuvent traduire leurs messages en versions améliorées avec des émojis. L\'outil aide à trouver les émojis parfaits pour transmettre le ton et l\'émotion, rendant la communication numérique plus expressive et engageante.',
      },
      {
        title: 'Interprétation et compréhension des émojis',
        description: 'Quand vous recevez une chaîne confuse d\'émojis, le traducteur aide à décoder la signification probable. C\'est particulièrement utile pour comprendre l\'utilisation générationnelle des émojis, les significations spécifiques aux plateformes ou les combinaisons créatives d\'émojis.',
      },
      {
        title: 'Création de contenu et marketing',
        description: 'Les gestionnaires de réseaux sociaux et créateurs de contenu peuvent trouver des combinaisons créatives d\'émojis pour faire ressortir leurs publications. L\'outil aide à traduire les messages de marque en formats adaptés aux émojis qui performent bien sur les plateformes visuelles comme Instagram et Twitter.',
      },
    ],
    faqs: [
      { question: 'Comment fonctionne le traducteur d\'émojis ?', answer: 'Pour le texte vers émojis, l\'outil analyse le sens et l\'émotion de votre message et sélectionne des émojis qui représentent ces concepts. Pour les émojis vers texte, il interprète les significations communes et fournit des traductions probables.' },
      { question: 'Le traducteur d\'émojis est-il gratuit ?', answer: 'Oui, entièrement gratuit sans inscription requise. Traduisez autant que vous voulez.' },
      { question: 'Tout le monde comprendra-t-il ma traduction en émojis ?', answer: 'L\'outil utilise des émojis couramment compris, mais l\'interprétation des émojis peut varier selon l\'âge, la culture et la plateforme. Nous signalons les émojis qui ont plusieurs significations communes.' },
      { question: 'Puis-je traduire des émojis en texte ?', answer: 'Oui, collez une séquence d\'émojis et l\'outil fournira des interprétations probables de ce que signifient les émojis, incluant des lectures alternatives pour les combinaisons ambiguës.' },
      { question: 'Pourquoi certains émojis signifient-ils des choses différentes ?', answer: 'Les significations des émojis évoluent à travers la culture internet et peuvent varier entre générations, communautés et plateformes. Un seul émoji peut avoir sa signification littérale plus des utilisations argotiques ou ironiques. L\'outil note ces variations.' },
      { question: 'Dois-je remplacer tout le texte par des émojis ou juste en ajouter quelques-uns ?', answer: 'Cela dépend du contexte. Pour les messages décontractés, le remplacement complet par des émojis peut être amusant. Pour la plupart des communications, ajouter quelques émojis stratégiques pour améliorer le texte est plus efficace et plus clair.' },
      { question: 'Les émojis ont-ils la même apparence sur tous les appareils ?', answer: 'Non, les designs d\'émojis varient selon la plateforme (Apple, Google, Samsung, etc.). La signification reste similaire, mais l\'apparence visuelle diffère. Nous recommandons d\'utiliser des émojis avec des significations claires et universelles.' },
      { question: 'Combien d\'émojis dois-je utiliser ?', answer: 'Moins c\'est souvent mieux. Quelques émojis bien choisis ont plus d\'impact qu\'un mur d\'icônes. L\'outil recommande des quantités appropriées en fonction de la longueur de votre message et du contexte.' },
      { question: 'Cela peut-il aider avec le SEO des émojis ?', answer: 'Les émojis peuvent apparaître dans les résultats de recherche et peuvent améliorer les taux de clics sur les publications sociales. L\'outil aide à identifier les émojis pertinents pour votre sujet qui pourraient améliorer la visibilité.' },
      { question: 'Y a-t-il des émojis que je devrais éviter ?', answer: 'Certains émojis ont acquis des significations qui diffèrent de leur apparence littérale, particulièrement parmi les utilisateurs plus jeunes. L\'outil signale les émojis potentiellement mal compris quand c\'est pertinent.' },
    ],
  },

  'verificateur-plagiat': {
    slug: 'verificateur-plagiat',
    name: 'Vérificateur de Plagiat',
    title: 'Vérificateur de plagiat IA gratuit',
    description: 'Analysez votre contenu pour l\'originalité et identifiez les passages qui pourraient nécessiter des citations ou une réécriture.',
    metaDescription: 'Analysez votre contenu pour l\'originalité et identifiez les passages qui pourraient nécessiter des citations ou une réécriture. Obtenez des retours actionnables pour améliorer votre écriture.',
    inputLabel: 'Texte à vérifier...',
    inputPlaceholder: 'Collez votre texte ici pour vérifier l\'originalité...',
    buttonText: 'Vérifier l\'Originalité',
    maxLength: 4096,
    options: [
      { name: 'checkType', label: 'Type de vérification', choices: ['Scan rapide', 'Analyse standard', 'Rapport détaillé'], default: 'Analyse standard', type: 'select' },
    ],
    systemPrompt: `You are an expert text analysis tool that checks content for originality by identifying potentially copied or closely paraphrased passages.
## IMPORTANT LIMITATIONS
This tool provides analysis based on pattern recognition. It does not have access to a comprehensive database of all published content. For high-stakes situations (academic submission, legal matters), use dedicated plagiarism services with full database access.
## CORE RULES
- Analyze AI text for originality indicators and red flags
- Identify passages that appear copied or heavily templated
- Distinguish between common phrases and potentially plagiarized content
- Provide actionable feedback for improving originality
- Never make definitive plagiarism accusations
## ANALYSIS FRAMEWORK
### Red Flag Indicators:
- Style inconsistency (sudden shifts in writing quality)
- Vocabulary level changes mid-document
- Extremely polished passages in otherwise rough drafts
- Facts or statistics without attribution
- Direct quotes without quotation marks
### Originality Indicators:
- Consistent voice throughout
- Personal examples or experiences
- Original analysis or synthesis
- Appropriate citations
## CHECK TYPES
### IF TYPE = "Scan rapide" - Overall assessment + key concerns
### IF TYPE = "Analyse standard" - Detailed breakdown + flagged passages + recommendations
### IF TYPE = "Rapport détaillé" - Comprehensive analysis + passage-level review + improvement strategies
## OUTPUT FORMAT
Type de vérification: {{checkType}}
Provide:
### Évaluation de l'Originalité
- Score global: [Probablement Original / Quelques Préoccupations / Préoccupations Significatives]
- Niveau de Confiance: [Élevé / Moyen / Faible]
### Passages Signalés
[For each: text, concern, recommendation]
### Recommandations
[Citations needed, rewrites suggested, general improvements]
### Avertissement Important
Cette analyse est basée sur la reconnaissance de modèles et ne compare pas contre une base de données complète de contenu.
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Vérification académique pré-soumission',
        description: 'Les étudiants peuvent passer leurs travaux par le vérificateur de plagiat avant soumission pour identifier les passages qui pourraient être signalés comme trop similaires aux sources. L\'outil aide à identifier où les citations sont nécessaires et quelles sections pourraient bénéficier d\'une réécriture dans un langage plus original.',
      },
      {
        title: 'Assurance qualité du contenu',
        description: 'Les éditeurs et rédacteurs en chef peuvent filtrer le contenu soumis pour les indicateurs d\'originalité avant publication. Bien que ce ne soit pas un remplacement pour les outils complets basés sur des bases de données, il fournit une vérification rapide de premier passage pour les signaux d\'alerte évidents de plagiat ou la qualité d\'écriture incohérente.',
      },
      {
        title: 'Auto-audit pour les rédacteurs',
        description: 'Les rédacteurs peuvent vérifier leur propre travail pour s\'assurer qu\'ils n\'ont pas involontairement utilisé une formulation trop similaire aux sources qu\'ils ont recherchées. L\'outil aide à identifier où un langage original ou une attribution appropriée est nécessaire, maintenant l\'intégrité de l\'écriture.',
      },
    ],
    faqs: [
      { question: 'Comment fonctionne le vérificateur de plagiat ?', answer: 'L\'outil analyse votre texte pour les indicateurs d\'originalité incluant la cohérence de l\'écriture, les modèles de style et les passages qui semblent modélisés ou nécessitent une citation. Il signale les préoccupations potentielles et fournit des recommandations pour l\'amélioration.' },
      { question: 'Ce vérificateur de plagiat est-il gratuit ?', answer: 'Oui, l\'outil est entièrement gratuit à utiliser sans inscription requise.' },
      { question: 'Est-ce aussi précis que Turnitin ou Copyscape ?', answer: 'Non. Ces services comparent votre texte contre d\'énormes bases de données de contenu publié. Cet outil utilise l\'analyse de modèles pour identifier les signaux d\'alerte mais ne peut pas confirmer définitivement si le texte apparaît ailleurs en ligne. Pour une vérification à enjeux élevés, utilisez un service dédié.' },
      { question: 'Que détecte réellement le vérificateur de plagiat ?', answer: 'L\'outil identifie : les incohérences de style suggérant un copier-coller, les faits/statistiques nécessitant des citations, les passages qui semblent modélisés et les changements de qualité qui pourraient indiquer un contenu non original.' },
      { question: 'Peut-il dire si j\'ai copié d\'une source spécifique ?', answer: 'Non, l\'outil ne peut pas identifier des sources spécifiques. Il peut seulement signaler les passages qui semblent potentiellement non originaux basé sur les modèles d\'écriture. Vous aurez besoin d\'un outil basé sur une base de données pour faire correspondre contre des sources spécifiques.' },
      { question: 'Détectera-t-il le contenu généré par l\'IA ?', answer: 'Cet outil se concentre sur les modèles de plagiat, pas la détection d\'IA. Pour la détection de contenu IA, utilisez notre outil dédié Détecteur de Contenu IA.' },
      { question: 'Que dois-je faire si des passages sont signalés ?', answer: 'Passez en revue les passages signalés pour déterminer s\'ils nécessitent : une citation directe (si vous citez), une paraphrase avec attribution (si vous résumez des sources), ou une réécriture complète dans vos propres mots.' },
      { question: 'Puis-je l\'utiliser pour des travaux académiques ?', answer: 'Comme vérification préliminaire, oui. Mais utilisez toujours le vérificateur de plagiat officiel de votre institution (généralement Turnitin) avant la soumission finale, car c\'est ce que vos instructeurs utiliseront.' },
      { question: 'Quelle peut être la longueur de mon texte ?', answer: 'L\'outil gère les longueurs de documents standards. Pour les documents très longs, vous pourriez obtenir de meilleurs résultats en vérifiant chapitre par chapitre.' },
      { question: 'Quelle est la différence entre plagiat et citations manquantes ?', answer: 'Le plagiat est la présentation du travail d\'autrui comme le vôtre. Les citations manquantes pourraient être accidentelles—vous savez que vous avez obtenu l\'information quelque part mais avez oublié de la citer. Les deux doivent être corrigés, mais l\'intention diffère. L\'outil signale les deux problèmes.' },
    ],
  },

  'generateur-idees-articles-blog': {
    slug: 'generateur-idees-articles-blog',
    name: 'Générateur d\'Idées d\'Articles de Blog',
    title: 'Générateur d\'idées d\'articles de blog gratuit boosté à l\'IA',
    description: 'En panne d\'idées de contenu ? Générez des idées d\'articles de blog uniques et optimisées SEO en quelques secondes. Notre IA livre des sujets prêts à écrire.',
    metaDescription: 'En panne d\'idées de contenu ? Générez des idées d\'articles de blog uniques et optimisées SEO en quelques secondes. Notre IA livre des sujets prêts à écrire.',
    inputLabel: 'Sujet ou niche...',
    inputPlaceholder: 'ex. Marketing par e-mail B2B SaaS pour fondateurs de startups',
    buttonText: 'Générer des Idées',
    maxLength: 2048,
    options: [
      { name: 'number_of_ideas', label: 'Nombre d\'idées', choices: ['3 idées', '5 idées', '10 idées'], default: '5 idées', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Formel', 'Décontracté', 'Persuasif'], default: 'Formel', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist and SEO specialist who generates compelling, actionable blog post ideas that drive organic traffic, engagement, and conversions. Your ideas are not generic suggestions—they are strategic content concepts backed by proven frameworks for search visibility and reader value.
## CORE PRINCIPLES
1. **Search Intent Alignment**: Every idea must address a clear search intent
2. **Specificity Over Generality**: Specific topics rank better than broad ones
3. **Value Proposition Clarity**: Each idea must have an obvious benefit to the reader
4. **Competitive Differentiation**: Ideas should have a unique angle
5. **Actionability**: Ideas should be immediately usable
## OUTPUT RULES
### For Each Idea, Provide:
1. **Titre**: A compelling, click-worthy headline (60-70 characters ideal)
2. **Angle**: 1-2 sentences explaining the unique approach
3. **Concept de Mot-clé Cible**: The primary search term this would target
4. **Type de Contenu**: The format (tutoriel, liste, comparaison, etc.)
5. **Audience**: Who specifically would search for and benefit from this
### Quantity Guidelines:
- Generate {{number_of_ideas}} distinct ideas
- Ensure variety across content types
- No duplicate angles or overlapping topics
## TONE ADAPTATION
### IF tone = "Formel" - Professional, industry-appropriate language
### IF tone = "Décontracté" - Conversational, approachable language
### IF tone = "Persuasif" - Benefit-focused, outcome-driven language
## OUTPUT FORMAT
### Idées d'Articles de Blog pour: [Topic]
**Idée 1: [Compelling Title]**
- **Angle:** [Unique approach explanation]
- **Concept de Mot-clé Cible:** [Primary search term]
- **Type de Contenu:** [Format]
- **Audience Idéale:** [Specific reader profile]
[Repeat for each idea]
---
**Notes de Stratégie de Contenu:**
- [1-2 observations about the topic landscape]
- [Suggestion for content sequencing]
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Planification de calendrier de contenu et stratégie éditoriale',
        description: 'Les équipes marketing et gestionnaires de contenu utilisent le Générateur d\'Idées d\'Articles de Blog pour peupler les calendriers de contenu trimestriels avec des sujets stratégiquement diversifiés. Au lieu de passer des heures en réunions de brainstorming, les équipes peuvent générer des dizaines d\'idées validées en minutes, puis prioriser en fonction des objectifs commerciaux, de la difficulté des mots-clés et de la disponibilité des ressources.',
      },
      {
        title: 'Surmonter les blocages créatifs et la fatigue de contenu',
        description: 'Les blogueurs solo, rédacteurs freelance et créateurs de contenu atteignent souvent des murs après des mois ou années de production de contenu dans la même niche. Le Générateur d\'Idées d\'Articles de Blog brise la fatigue créative en faisant émerger des angles et sous-sujets que le créateur n\'avait pas considérés, ravivant l\'enthousiasme et révélant des opportunités inexploitées dans des territoires familiers.',
      },
      {
        title: 'Analyse des lacunes de contenu compétitives',
        description: 'Les professionnels SEO et stratèges de contenu utilisent l\'outil pour identifier les sujets sous-desservis dans une niche. En générant des idées et en les recoupant avec le contenu existant (le leur et celui des concurrents), les équipes peuvent découvrir des lacunes de contenu précieuses où la demande de recherche existe mais pas le contenu de qualité.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'un générateur d\'idées d\'articles de blog ?', answer: 'Un générateur d\'idées d\'articles de blog est un outil alimenté par l\'IA qui crée des suggestions de sujets basées sur votre niche, industrie ou sujet. Contrairement aux simples outils de mots-clés qui listent juste des termes de recherche, un générateur d\'idées sophistiqué fournit des concepts de contenu complets avec des angles uniques, des audiences cibles et un positionnement stratégique.' },
      { question: 'Comment fonctionne ce générateur d\'idées d\'articles de blog ?', answer: 'Le générateur utilise des modèles de langage avancés entraînés sur des modèles de contenu réussis, des principes SEO et la psychologie de l\'audience. Quand vous entrez votre sujet, il analyse le paysage de la niche, identifie les opportunités de contenu à travers plusieurs formats et applique des cadres stratégiques pour s\'assurer que chaque idée a un véritable potentiel de recherche et d\'engagement.' },
      { question: 'Les idées d\'articles de blog générées sont-elles optimisées pour le SEO ?', answer: 'Oui, les idées sont générées avec l\'intention de recherche au cœur. Chaque idée cible un type spécifique de requête de recherche et est structurée pour répondre à ce que les vrais utilisateurs recherchent. Le générateur met l\'accent sur la spécificité—des sujets étroits qui peuvent réalistement concurrencer dans les résultats de recherche.' },
      { question: 'Combien d\'idées d\'articles de blog puis-je générer ?', answer: 'Vous pouvez générer plusieurs lots sans limites. Chaque génération produit un ensemble d\'idées distinctes et non chevauchantes. Pour une planification de contenu complète, nous recommandons de générer plusieurs lots avec de légères variations dans votre entrée pour construire une bibliothèque d\'idées robuste.' },
      { question: 'Puis-je utiliser ces idées à des fins commerciales ?', answer: 'Absolument. Les idées générées sont les vôtres à utiliser comme bon vous semble—pour votre propre blog, le travail client, les agences de contenu ou tout autre but. Les idées sont générées fraîchement pour chaque demande et ne sont pas protégées par le droit d\'auteur ou restreintes.' },
      { question: 'À quel point mon sujet d\'entrée devrait-il être spécifique ?', answer: 'Des entrées plus spécifiques donnent des idées plus ciblées et actionnables. Entrer "marketing" produira des idées génériques appropriées pour n\'importe quel blog de marketing. Entrer "marketing par e-mail B2B SaaS pour fondateurs de startups" produira des idées hautement spécifiques adaptées à ce contexte et audience exacts.' },
      { question: 'Qu\'est-ce qui fait une bonne idée d\'article de blog ?', answer: 'Une idée forte d\'article de blog a quatre caractéristiques : la spécificité (assez étroite pour couvrir en profondeur et se classer), une valeur claire (bénéfice évident pour le lecteur), l\'alignement de recherche (correspond à ce que les gens recherchent réellement) et la différenciation (offre quelque chose que le contenu existant n\'offre pas).' },
      { question: 'L\'outil peut-il générer des idées pour n\'importe quelle niche ou industrie ?', answer: 'Oui, le générateur fonctionne dans toutes les industries et niches—des sujets B2B software hautement techniques au contenu lifestyle et divertissement. Il adapte son approche en fonction de la niche, reconnaissant que ce qui fait une idée convaincante en fintech diffère de ce qui fonctionne en blogging culinaire.' },
      { question: 'Dois-je utiliser chaque idée générée par l\'outil ?', answer: 'Non—traitez les idées générées comme un point de départ curé, pas un plan de contenu final. Évaluez chaque idée par rapport à vos objectifs commerciaux spécifiques, votre bibliothèque de contenu existante et vos contraintes de ressources. Certaines idées seront des correspondances parfaites ; d\'autres pourraient déclencher de meilleures idées par itération.' },
      { question: 'À quelle fréquence dois-je générer de nouvelles idées d\'articles de blog ?', answer: 'Les équipes de contenu bénéficient généralement de sessions de génération d\'idées trimestrielles ou mensuelles, utilisant l\'outil pour peupler les calendriers 3-6 mois à l\'avance. Cependant, l\'outil est également précieux pour le contenu réactif—quand des actualités de l\'industrie émergent ou de nouvelles opportunités se présentent, vous pouvez rapidement générer des idées autour de sujets tendance.' },
    ],
  },

  'generateur-titres-seo': {
    slug: 'generateur-titres-seo',
    name: 'Générateur de Titres SEO',
    title: 'Générateur de titres IA gratuit',
    description: 'Générez des balises de titre optimisées pour la recherche qui se classent mieux et obtiennent plus de clics. Notre IA crée des titres parfaitement dimensionnés avec les mots-clés aux bonnes positions.',
    metaDescription: 'Générez des balises de titre optimisées pour la recherche qui se classent mieux et obtiennent plus de clics. Notre IA crée des titres parfaitement dimensionnés avec les mots-clés aux bonnes positions.',
    inputLabel: 'Sujet ou mot-clé...',
    inputPlaceholder: 'ex. meilleurs outils de gestion de projet pour équipes distantes',
    buttonText: 'Générer des Titres SEO',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'Nombre de titres', choices: ['3 titres', '5 titres', '10 titres'], default: '5 titres', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Formel', 'Décontracté', 'Persuasif'], default: 'Formel', type: 'select' },
      { name: 'include_year', label: 'Inclure l\'année', choices: ['Oui', 'Non'], default: 'Oui', type: 'radio' },
    ],
    systemPrompt: `You are an expert SEO specialist and copywriter who creates search-optimized titles (title tags) that maximize both rankings and click-through rates.
## CORE SEO TITLE PRINCIPLES
1. **Primary Keyword Prominence**: Target keyword should appear early in the title
2. **Search Intent Matching**: Title must align with what users expect to find
3. **SERP Competition**: Title should stand out among competing results
4. **Click-Through Optimization**: Compelling enough to win clicks against competitors
5. **Accurate Representation**: Must truthfully represent the page content
## SEO TITLE TECHNICAL REQUIREMENTS
### Length Constraints:
- **Safe target**: 50-60 characters for guaranteed full display
- **Absolute maximum**: 70 characters (will truncate)
## OUTPUT RULES
### For Each Title Variant, Provide:
1. **Titre**: Complete title tag text
2. **Nombre de Caractères**: Total characters
3. **Position du Mot-clé Principal**: Where the main keyword appears
4. **Type de Titre**: Which framework was applied
5. **Facteurs CTR**: What makes this clickable
### Quantity:
- Generate {{number_of_variants}} variants
- Include at least 3 different title types
- Include one "safe" conventional option and one "bold" differentiated option
## TONE ADAPTATION
### IF tone = "Formel" - Professional, authoritative language
### IF tone = "Décontracté" - Conversational, relatable language
### IF tone = "Persuasif" - Benefit-focused, outcome-driven language
## OUTPUT FORMAT
### Options de Titre SEO pour: [Topic/Keyword]
**Titre 1:** [Title]
- **Caractères:** [count]
- **Position du Mot-clé:** [Early/Middle/Late]
- **Type:** [Framework used]
- **Facteurs CTR:** [Why users will click]
[Repeat for each variant]
---
**Recommandation Stratégique:**
- **Meilleur pour les Rankings:** [Title #] — [Reason]
- **Meilleur pour le CTR:** [Title #] — [Reason]
- **Choix Équilibré:** [Title #] — [Reason]
Include year if: {{include_year}}
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Optimisation SEO au niveau de la page',
        description: 'Les spécialistes SEO et gestionnaires de contenu utilisent le Générateur de Titres SEO lors de l\'optimisation de pages individuelles pour des mots-clés cibles. L\'outil assure que les mots-clés principaux apparaissent tôt dans les titres tout en maintenant une lisibilité naturelle—un équilibre facile à rater lors de la rédaction manuelle des titres.',
      },
      {
        title: 'Amélioration du taux de clics SERP',
        description: 'Quand les pages se classent bien mais sous-performent en clics, la balise de titre est souvent le coupable. Les marketeurs digitaux utilisent le générateur pour créer des alternatives convaincantes aux titres sous-performants, puis les implémentent et surveillent les changements de CTR dans Google Search Console.',
      },
      {
        title: 'Optimisation du lancement de nouveau contenu',
        description: 'Avant de publier du nouveau contenu, les équipes de contenu utilisent le générateur pour développer la balise de titre optimale dès le départ. Lancer avec un titre correctement optimisé accélère le potentiel de classement initial et établit des signaux CTR forts dès le premier jour.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'une balise de titre SEO ?', answer: 'La balise de titre SEO (ou méta titre) est l\'élément HTML qui définit le titre de votre page dans les résultats des moteurs de recherche et les onglets de navigateur. Elle apparaît comme le titre bleu cliquable dans les résultats de recherche Google et est l\'un des facteurs de classement on-page les plus importants.' },
      { question: 'Quelle est la longueur idéale pour un titre SEO ?', answer: 'Visez 50-60 caractères pour assurer que votre titre s\'affiche complètement dans les résultats de recherche. Google affiche environ 580 pixels sur desktop et 920 pixels sur mobile. Les titres de plus de 60 caractères risquent la troncature, montrant "..." à la fin.' },
      { question: 'Dois-je mettre mon mot-clé au début du titre ?', answer: 'Généralement, oui. Les mots-clés apparaissant plus tôt dans les titres ont plus de poids pour les classements, et les utilisateurs parcourant les résultats de recherche se concentrent souvent sur les premiers mots. Cependant, ne sacrifiez pas la lisibilité naturelle pour le placement de mot-clé.' },
      { question: 'Quelle est la différence entre un titre SEO et un titre de blog ?', answer: 'Votre titre SEO (balise de titre) apparaît dans les résultats de recherche et doit rester sous 60 caractères avec des mots-clés positionnés stratégiquement. Votre titre de blog (heading H1 sur la page) peut être plus long, plus créatif et ne doit pas suivre les mêmes contraintes.' },
      { question: 'Dois-je inclure le nom de ma marque dans les titres SEO ?', answer: 'Cela dépend de la reconnaissance de votre marque et de l\'objectif de la page. Pour les marques bien connues, inclure le nom de marque (généralement à la fin) ajoute de la crédibilité. Pour les marques moins connues, cet espace est généralement mieux utilisé pour les mots-clés et propositions de valeur.' },
      { question: 'Les chiffres dans les titres aident-ils le SEO ?', answer: 'Les chiffres aident les taux de clics plus que les classements directement, mais un CTR plus élevé peut indirectement améliorer les classements. Les chiffres fournissent de la spécificité ("15 Conseils" vs "Conseils") qui définit les attentes et construit la crédibilité.' },
      { question: 'À quelle fréquence dois-je mettre à jour les titres SEO ?', answer: 'Mettez à jour les titres quand : les pages ne se classent pas comme prévu, le CTR est en dessous de la moyenne de l\'industrie, le contenu a été significativement mis à jour, ou l\'intention de recherche a évolué. Évitez les changements constants—donnez aux nouveaux titres 2-4 semaines pour montrer leur impact.' },
      { question: 'Puis-je utiliser le même titre pour plusieurs pages ?', answer: 'Non—chaque page devrait avoir une balise de titre unique. Les titres dupliqués confondent les moteurs de recherche sur quelle page classer et laquelle supprimer. Ils créent également une mauvaise expérience utilisateur quand plusieurs résultats de votre site montrent des titres identiques.' },
      { question: 'Quels éléments de titre améliorent le taux de clics ?', answer: 'Le CTR augmente avec la spécificité (chiffres, délais, résultats concrets), les signaux de fraîcheur (année actuelle quand pertinent), les déclencheurs émotionnels (lacunes de curiosité, promesses de bénéfices) et les signaux de confiance (indicateurs d\'autorité, indices de preuve sociale).' },
      { question: 'Comment savoir si mon titre SEO fonctionne ?', answer: 'Surveillez deux métriques dans Google Search Console : position moyenne (classements) et taux de clics. Si la position est forte mais le CTR est en dessous de la moyenne pour cette position, votre titre pourrait ne pas être assez convaincant.' },
    ],
  },

  'generateur-texte-alternatif-image': {
    slug: 'generateur-texte-alternatif-image',
    name: 'Générateur de Texte Alternatif d\'Image',
    title: 'Générateur de texte alternatif d\'image SEO gratuit',
    description: 'Générez du texte alternatif descriptif qui améliore l\'accessibilité et le SEO. Téléchargez n\'importe quelle image et obtenez des descriptions compatibles avec les lecteurs d\'écran optimisées pour la recherche.',
    metaDescription: 'Générez du texte alternatif descriptif qui améliore l\'accessibilité et le SEO. Téléchargez n\'importe quelle image et obtenez des descriptions compatibles avec les lecteurs d\'écran optimisées pour la recherche.',
    inputLabel: 'Décrivez l\'image...',
    inputPlaceholder: 'ex. Une équipe de développeurs collaborant autour d\'un tableau blanc avec des post-its',
    buttonText: 'Générer le Texte Alt',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'Nombre d\'options', choices: ['1 option', '3 options', '5 options'], default: '3 options', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Formel', 'Décontracté', 'Technique'], default: 'Formel', type: 'select' },
      { name: 'keyword', label: 'Mot-clé cible (optionnel)', choices: ['Aucun', 'Inclure mot-clé'], default: 'Aucun', type: 'radio' },
    ],
    systemPrompt: `You are an expert accessibility specialist and SEO strategist who creates image alt text that serves both visually impaired users and search engine optimization.
## CORE ALT TEXT PRINCIPLES
1. **Accessibility First**: Alt text exists primarily for screen reader users
2. **Context Matters**: The same image needs different alt text depending on its purpose
3. **Accuracy Over Creativity**: Describe what's actually in the image
4. **Concise Completeness**: Include all relevant information without unnecessary padding
5. **SEO Integration**: Incorporate relevant keywords naturally when they accurately describe the image
## OUTPUT RULES
### For Each Alt Text Variant, Provide:
1. **Texte Alt**: The complete attribute text
2. **Nombre de Caractères**: Total length
3. **Classification d'Objectif**: Informative/Functional/Complex/etc.
4. **Notes d'Accessibilité**: How this serves screen reader users
5. **Notes SEO**: Keyword integration (if any) and image search optimization
### Quality Standards:
- NO starting with "Image de," "Photo de" (screen readers already announce it's an image)
- NO including "cliquez ici" or interactive instructions in alt text
- NO excessive length for simple images
- NO vague descriptions
- YES to specific, accurate descriptions
- YES to context-appropriate detail levels
- YES to natural keyword inclusion when accurate
## TONE ADAPTATION
### IF tone = "Formel" - Professional, technical language
### IF tone = "Décontracté" - Friendly, accessible language
### IF tone = "Technique" - Detailed specifications and terminology
## OUTPUT FORMAT
### Options de Texte Alt pour: [Image Description]
**Option 1:** [Alt text]
- **Caractères:** [count]
- **Type:** [Informative/Functional/Complex]
- **Accessibilité:** [How this helps screen reader users]
- **SEO:** [Keyword integration notes]
[Repeat for each variant]
---
**Recommandation:** [Which option is best and why]
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Conformité à l\'accessibilité des sites web',
        description: 'Les développeurs web, gestionnaires de contenu et spécialistes de l\'accessibilité utilisent le Générateur de Texte Alternatif d\'Image pour ajouter efficacement des descriptions significatives aux images sur les sites web. Avec les poursuites pour accessibilité en augmentation et les réglementations comme WCAG et ADA exigeant du texte alt, l\'outil aide les équipes à atteindre la conformité à grande échelle.',
      },
      {
        title: 'Optimisation des images de produits e-commerce',
        description: 'Les détaillants en ligne utilisent le générateur pour créer du texte alt pour les images de produits qui sert à la fois l\'accessibilité et la découverte de produits. Un bon texte alt aide les acheteurs malvoyants à comprendre les produits tout en améliorant les classements de recherche d\'images.',
      },
      {
        title: 'Optimisation du marketing de contenu et des blogs',
        description: 'Les créateurs de contenu et spécialistes SEO utilisent le générateur pour s\'assurer que chaque image d\'article de blog a un texte alt correctement optimisé. Au-delà des avantages d\'accessibilité, un texte alt bien écrit contribue au SEO on-page et à la visibilité dans la recherche d\'images.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce que le texte alternatif d\'image ?', answer: 'Le texte alt (texte alternatif) est une description écrite d\'une image qui apparaît dans le code HTML. Il sert deux objectifs principaux : il est lu à voix haute par les lecteurs d\'écran pour les utilisateurs malvoyants, et il s\'affiche quand les images ne peuvent pas se charger. Les moteurs de recherche utilisent également le texte alt pour comprendre le contenu des images.' },
      { question: 'Quelle devrait être la longueur du texte alt ?', answer: 'La plupart des textes alt devraient faire 10-125 caractères. Les images simples nécessitent seulement de brèves descriptions (10-30 caractères), tandis que les images complexes comme les graphiques peuvent nécessiter des descriptions plus longues. Évitez de dépasser 125 caractères car certains lecteurs d\'écran peuvent couper le texte plus long.' },
      { question: 'Dois-je inclure des mots-clés dans le texte alt ?', answer: 'Incluez des mots-clés seulement quand ils décrivent précisément l\'image. L\'objectif principal du texte alt est l\'accessibilité, pas le SEO. Si votre image montre vraiment un "sac pour ordinateur portable en cuir rouge", c\'est un bon texte alt qui inclut naturellement des mots-clés.' },
      { question: 'Quand le texte alt devrait-il être vide ?', answer: 'Les images décoratives qui n\'ajoutent aucune valeur informationnelle devraient avoir un texte alt vide (alt="") pour que les lecteurs d\'écran les sautent entièrement. Cela inclut : les motifs de fond, les séparateurs décoratifs, les icônes à côté de texte qui les décrit déjà.' },
      { question: 'Dois-je commencer le texte alt par "Image de" ou "Photo de" ?', answer: 'Non. Les lecteurs d\'écran annoncent déjà "image" avant de lire le texte alt, donc commencer par "Image de" crée une redondance ("Image : Image d\'un chien"). Commencez directement par la description.' },
      { question: 'Comment écrire du texte alt pour les graphiques ?', answer: 'Pour les visuels complexes, le texte alt devrait résumer la découverte ou conclusion clé, avec les données détaillées fournies ailleurs sur la page. Par exemple : "Graphique linéaire montrant une augmentation de 50% des ventes sur T1-T4 2024. Données complètes dans le tableau ci-dessous."' },
      { question: 'Qu\'en est-il du texte alt pour les images de produits ?', answer: 'Le texte alt des images de produits devrait décrire le produit avec précision, incluant : type de produit, nom de marque (si visible), caractéristiques clés, couleur, taille ou variante montrée.' },
      { question: 'Comment le texte alt affecte-t-il le SEO ?', answer: 'Le texte alt aide les moteurs de recherche à comprendre le contenu des images, contribuant à : les classements de recherche d\'images, les signaux de pertinence de page et les signaux d\'accessibilité. Cependant, le bénéfice SEO est secondaire à l\'accessibilité.' },
      { question: 'L\'outil peut-il générer du texte alt pour n\'importe quelle image ?', answer: 'Le générateur fonctionne avec n\'importe quelle image que vous pouvez décrire—photographies, illustrations, graphiques, captures d\'écran, images de produits et plus encore. Pour de meilleurs résultats avec des images complexes, fournissez du contexte sur le contenu de la page et l\'objectif de l\'image.' },
      { question: 'Toutes les images de mon site web doivent-elles avoir du texte alt ?', answer: 'Toutes les images significatives devraient avoir du texte alt. Les images décoratives devraient avoir un texte alt vide (alt=""). Il n\'y a pas d\'image qui devrait manquer complètement l\'attribut alt—c\'est un échec d\'accessibilité.' },
    ],
  },

  'generateur-idees-contenu': {
    slug: 'generateur-idees-contenu',
    name: 'Générateur d\'Idées de Contenu',
    title: 'Générateur d\'idées de contenu IA gratuit',
    description: 'Générez des idées de contenu créatives pour blogs, YouTube, réseaux sociaux, podcasts et newsletters. Notre IA crée des concepts optimisés par plateforme avec des angles uniques.',
    metaDescription: 'Générez des idées de contenu créatives pour blogs, YouTube, réseaux sociaux, podcasts et newsletters. Notre IA crée des concepts optimisés par plateforme avec des angles uniques.',
    inputLabel: 'Sujet ou niche...',
    inputPlaceholder: 'ex. Finances personnelles pour les millennials',
    buttonText: 'Générer des Idées',
    maxLength: 2048,
    options: [
      { name: 'number_of_ideas', label: 'Nombre d\'idées', choices: ['3 idées', '5 idées', '10 idées'], default: '5 idées', type: 'select' },
      { name: 'platform', label: 'Plateforme', choices: ['Multi-plateforme', 'Blog/Site Web', 'YouTube', 'LinkedIn', 'Twitter/X', 'Instagram', 'Podcast', 'Newsletter'], default: 'Multi-plateforme', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Formel', 'Décontracté', 'Créatif'], default: 'Formel', type: 'select' },
    ],
    systemPrompt: `You are a creative strategist and content expert who generates innovative content ideas across multiple platforms and formats. Your ideas go beyond simple blog post topics—you create comprehensive content concepts that include angle, format, platform, and execution approach.
## CORE CONTENT IDEA PRINCIPLES
1. **Platform-Native Thinking**: Every idea is tailored to the platform's unique format and audience behavior
2. **Audience-First Approach**: Ideas solve real problems or fulfill genuine interests
3. **Differentiation Required**: Every idea must have a unique angle
4. **Executable Specificity**: Ideas are detailed enough to begin production immediately
5. **Strategic Variety**: Ideas span educational, entertaining, inspiring, and commercial content types
## OUTPUT RULES
### For Each Content Idea, Provide:
1. **Titre/Concept**: Clear, compelling description of the idea
2. **Plateforme**: Optimal platform for this idea
3. **Format**: Specific content format (video, carousel, article, etc.)
4. **Angle**: What makes this unique or timely
5. **Audience Cible**: Who specifically would engage with this
6. **Objectif du Contenu**: What this achieves (traffic, engagement, conversion, etc.)
7. **Notes d'Exécution**: Key elements for production
### Quantity and Variety:
- Generate {{number_of_ideas}} ideas
- Span at least 3 different content purposes
- Include at least 2 different platforms unless platform is specified: {{platform}}
## TONE ADAPTATION
### IF tone = "Formel" - Professional content for B2B or corporate audiences
### IF tone = "Décontracté" - Conversational content for general audiences
### IF tone = "Créatif" - Experimental, boundary-pushing content concepts
## OUTPUT FORMAT
### Idées de Contenu pour: [Topic/Niche]
**Idée 1: [Title/Concept]**
- **Plateforme:** [YouTube/Blog/LinkedIn/etc.]
- **Format:** [Video/Carousel/Article/etc.]
- **Angle:** [Unique differentiation]
- **Audience:** [Specific target]
- **Objectif:** [Traffic/Engagement/Conversion/Brand]
- **Exécution:** [Key production notes]
[Repeat for each idea]
---
**Notes de Stratégie de Contenu:**
- [How these ideas work together]
- [Suggested prioritization]
- [Repurposing opportunities across platforms]
IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Développement de stratégie de contenu multi-plateforme',
        description: 'Les directeurs de contenu et leaders marketing utilisent le Générateur d\'Idées de Contenu pour développer des stratégies de contenu cohérentes à travers les canaux. Plutôt que de planifier le contenu du blog séparément des réseaux sociaux séparément de la vidéo, les équipes peuvent générer des idées intégrées qui fonctionnent sur toutes les plateformes.',
      },
      {
        title: 'Se lancer dans de nouveaux formats de contenu',
        description: 'Les marketeurs expérimentés avec un format (comme le blogging) ont souvent du mal à s\'étendre à de nouvelles plateformes (comme YouTube ou les podcasts). Le Générateur d\'Idées de Contenu aide à combler cet écart en suggérant des concepts de contenu natifs à la plateforme qui exploitent l\'expertise existante tout en s\'adaptant aux nouvelles exigences de format.',
      },
      {
        title: 'Accélération du brainstorming des équipes créatives',
        description: 'Les équipes de contenu utilisent le générateur comme point de départ pour les sessions créatives, générant des idées initiales qui stimulent la discussion et l\'itération. Plutôt que de partir d\'un tableau blanc vide, les équipes peuvent réagir à, combiner et développer les concepts générés.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'un générateur d\'idées de contenu ?', answer: 'Un générateur d\'idées de contenu est un outil IA qui crée des concepts de contenu détaillés à travers plusieurs plateformes et formats. Contrairement aux simples outils de suggestion de sujets, un générateur complet fournit des concepts complets incluant l\'angle unique, la plateforme cible, le format spécifique, l\'audience visée et les conseils d\'exécution.' },
      { question: 'Quelles plateformes ce générateur supporte-t-il ?', answer: 'Le générateur crée des idées optimisées pour toutes les principales plateformes de contenu : blogs et sites web, YouTube et vidéo, LinkedIn et réseaux sociaux professionnels, Twitter/X et microblogging, Instagram et plateformes sociales visuelles, podcasts et contenu audio, et newsletters par e-mail.' },
      { question: 'Comment obtenir des idées de contenu plus spécifiques ?', answer: 'Une entrée plus détaillée produit des idées plus ciblées. Au lieu d\'entrer "marketing", spécifiez "marketing par e-mail B2B SaaS pour fondateurs de startups en phase de démarrage". Incluez des informations sur votre audience cible, vos objectifs de contenu et toute contrainte.' },
      { question: 'Puis-je utiliser ces idées pour du travail client ?', answer: 'Absolument. Les idées générées ne sont pas protégées par le droit d\'auteur et peuvent être utilisées à n\'importe quelle fin—marques personnelles, contenu d\'entreprise, travail client ou agences de contenu.' },
      { question: 'Comment choisir quelle idée de contenu poursuivre en premier ?', answer: 'Priorisez en fonction de vos objectifs et ressources actuels. Si vous avez besoin de trafic, priorisez les idées de blog axées sur le SEO. Si vous avez besoin d\'engagement, priorisez le contenu social natif à la plateforme. Considérez également la complexité de production.' },
      { question: 'Qu\'est-ce qui fait une "bonne" idée de contenu ?', answer: 'Une idée de contenu forte a quatre caractéristiques : la pertinence (répond à de vrais besoins de l\'audience), la différenciation (offre quelque chose que les concurrents n\'offrent pas), l\'exécutabilité (peut être produit avec les ressources disponibles) et l\'adéquation à la plateforme (exploite les forces de la plateforme choisie).' },
      { question: 'Dois-je utiliser chaque idée fournie par le générateur ?', answer: 'Non—traitez les idées générées comme un menu curé, pas une mission obligatoire. Évaluez chaque idée par rapport à votre contexte spécifique : alignement de marque, disponibilité des ressources, préférences de l\'audience et priorités stratégiques.' },
      { question: 'Le générateur peut-il créer des idées pour des sujets de niche ou techniques ?', answer: 'Oui, le générateur fonctionne dans toutes les industries et niches, y compris les domaines hautement techniques ou spécialisés. Pour de meilleurs résultats avec des sujets techniques, fournissez du contexte sur le niveau d\'expertise de votre audience et toute contrainte spécifique à l\'industrie.' },
      { question: 'À quelle fréquence dois-je générer de nouvelles idées de contenu ?', answer: 'La plupart des équipes de contenu bénéficient de sessions de génération d\'idées mensuelles ou trimestrielles, construisant un backlog de concepts à exploiter. Cependant, le générateur est également précieux pour le contenu réactif—quand des actualités de l\'industrie émergent ou des opportunités se présentent.' },
      { question: 'Puis-je générer des idées pour plusieurs plateformes à la fois ?', answer: 'Oui, par défaut le générateur fournit des idées multi-plateforme montrant comment un concept central peut être adapté à travers différents formats. C\'est particulièrement précieux pour les stratégies de réutilisation de contenu.' },
    ],
  },

  // ==================== BATCH 3 (Tools 21-30) ====================

  'generateur-script-video': {
    slug: 'generateur-script-video',
    name: 'Générateur de Script Vidéo',
    title: 'Générateur de scripts vidéo gratuit',
    description: 'Créez des scripts vidéo professionnels pour YouTube, TikTok et les réseaux sociaux. Notre IA génère du contenu structuré et engageant qui retient l\'attention des spectateurs.',
    metaDescription: 'Créez des scripts vidéo professionnels pour YouTube, TikTok et les réseaux sociaux. Notre IA génère du contenu structuré et engageant qui retient l\'attention des spectateurs.',
    inputLabel: 'Décrivez votre sujet vidéo...',
    inputPlaceholder: 'ex. 5 astuces de productivité pour les travailleurs à distance',
    buttonText: 'Générer le Script',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plateforme',
        choices: ['YouTube (Long)', 'YouTube Shorts', 'TikTok', 'Instagram Reels', 'LinkedIn'],
        default: 'YouTube (Long)',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Durée de la vidéo',
        choices: ['Court (< 60 sec)', 'Moyen (2-5 min)', 'Long (8-15 min)', 'Très long (15-30 min)'],
        default: 'Moyen (2-5 min)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de la vidéo',
        choices: ['Éducatif', 'Divertissant', 'Inspirant', 'Décontracté', 'Professionnel'],
        default: 'Éducatif',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert video scriptwriter who creates engaging, platform-optimized video scripts. You understand retention techniques, hook creation, and storytelling for video content across different platforms and formats.

## SCRIPT STRUCTURE BY VIDEO TYPE
### Educational/Tutorial Videos
**Structure**:
HOOK: "By the end of this video, you'll know how to..."
PROBLEM: Why viewers need this information
SOLUTION: Step-by-step breakdown
DEMONSTRATION: Show, don't just tell
RECAP: Quick summary of key steps
CTA: What to do next

### Storytelling/Narrative Videos
**Structure**:
HOOK: Compelling moment or question
SETUP: Context and characters
RISING ACTION: Build tension and interest
CLIMAX: Main event or revelation
RESOLUTION: Outcomes and lessons
CTA: Connection to viewer's situation

### Promotional/Product Videos
**Structure**:
HOOK: Problem or desire trigger
AGITATE: Deepen the problem understanding
SOLUTION: Introduce the product/service
BENEFITS: Show specific outcomes
PROOF: Social proof or demonstration
CTA: Clear next step with urgency

## OUTPUT FORMAT
### Video Script: [Topic]
**Platform:** [YouTube/TikTok/etc.]
**Estimated Length:** [X:XX - X:XX]
**Tone:** [Educational/Entertaining/etc.]

---
**HOOK [0:00-0:XX]**
[Script text]
*[Visual notes]*

**INTRO [0:XX-X:XX]**
[Script text]
*[Visual notes]*

**[SECTION NAME] [X:XX-X:XX]**
[Script text]
*[Visual notes]*

[Continue for all sections]

**OUTRO [X:XX-X:XX]**
[Script text]
*[Visual notes]*

---
**Production Notes:**
- [Key retention strategies used]
- [Thumbnail/title suggestions]
- [Potential B-roll needs]

Video Length: {{length}}
Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Workflow de création de contenu YouTube',
        description: 'Les YouTubeurs et créateurs vidéo utilisent le Générateur de Script Vidéo pour accélérer la planification de pré-production. Au lieu de passer des heures à élaborer et écrire des scripts de zéro, les créateurs obtiennent des premiers brouillons structurés avec des techniques de rétention intégrées.',
      },
      {
        title: 'Contenu vidéo social à grande échelle',
        description: 'Les équipes marketing et agences créant de grands volumes de contenu court (TikTok, Reels, Shorts) utilisent le générateur pour maintenir la vélocité de production sans sacrifier la qualité.',
      },
      {
        title: 'Production de vidéos commerciales et promotionnelles',
        description: 'Les entreprises créant des démos de produits, vidéos explicatives et témoignages clients utilisent le générateur pour développer des scripts initiaux incluant tous les éléments essentiels.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'un générateur de script vidéo ?', answer: 'Un générateur de script vidéo est un outil IA qui crée des scripts vidéo complets optimisés pour des plateformes et objectifs spécifiques. Il produit des scripts avec des horodatages, des notes visuelles, des techniques de rétention et des appels à l\'action.' },
      { question: 'Quelles plateformes ce générateur supporte-t-il ?', answer: 'Le générateur crée des scripts optimisés pour YouTube (long et Shorts), TikTok, Instagram Reels, LinkedIn vidéo et Facebook vidéo. Chaque plateforme a des longueurs optimales et des styles d\'accroche différents.' },
      { question: 'Comment obtenir des scripts qui me ressemblent ?', answer: 'Fournissez du contexte sur votre ton, vos références de style et votre approche de contenu habituelle. Le script généré est une base structurelle que vous pouvez personnaliser avec votre personnalité.' },
      { question: 'Dois-je suivre le script exactement ?', answer: 'Non—et la plupart des créateurs à succès ne le font pas. Le script fournit structure et points clés, mais une livraison naturelle implique généralement de l\'improvisation dans ce cadre.' },
      { question: 'Qu\'est-ce qui est inclus dans les notes visuelles ?', answer: 'Les notes visuelles suggèrent des séquences b-roll, graphiques à l\'écran, superpositions de texte et transitions visuelles qui améliorent le contenu parlé.' },
      { question: 'Quelle devrait être la longueur de mon script vidéo ?', answer: 'Cela dépend de votre contenu, audience et plateforme. TikTok/Reels : 50-150 mots, YouTube court : 100-200 mots, YouTube moyen : 1200-1800 mots, YouTube long : 2200-4500 mots.' },
    ],
  },

  'generateur-nom-marque': {
    slug: 'generateur-nom-marque',
    name: 'Générateur de Nom de Marque',
    title: 'Générateur de nom de marque IA gratuit',
    description: 'Générez des noms de marque uniques et mémorables instantanément. Notre IA crée des noms distinctifs avec une signification stratégique pour votre identité d\'entreprise.',
    metaDescription: 'Générez des noms de marque uniques et mémorables instantanément. Notre IA crée des noms distinctifs avec une signification stratégique pour votre identité d\'entreprise.',
    inputLabel: 'Décrivez votre marque...',
    inputPlaceholder: 'ex. Une marque de mode durable ciblant les millennials éco-responsables',
    buttonText: 'Générer des Noms',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Nombre de noms',
        choices: ['3 noms', '5 noms', '10 noms'],
        default: '5 noms',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de la marque',
        choices: ['Formel/Professionnel', 'Décontracté/Amical', 'Innovant/Tech', 'Luxe/Premium'],
        default: 'Formel/Professionnel',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Expliquer la signification',
        choices: ['Oui', 'Non'],
        default: 'Oui',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert brand strategist and naming specialist who creates memorable, distinctive brand names that resonate with target audiences and support long-term business success.

## CORE NAMING PRINCIPLES
1. **Memorability**: Names must be easy to remember, spell, and pronounce
2. **Distinctiveness**: Names must stand out from competitors
3. **Scalability**: Names should allow for business evolution
4. **Domain/Trademark Viability**: Consider practical availability factors
5. **Emotional Resonance**: Names should evoke appropriate feelings

## BRAND NAME CATEGORIES
### Invented/Coined Names
Created words with no prior meaning.
- Examples: Kodak, Xerox, Spotify

### Evocative/Suggestive Names
Names that suggest qualities without being literal.
- Examples: Amazon, Apple, Nike

### Compound/Portmanteau Names
Names combining two words or concepts.
- Examples: Facebook, Instagram, Pinterest

## OUTPUT FORMAT
For each brand name, provide:
1. **Name**: The brand name itself
2. **Category**: Type of name (Invented, Evocative, Compound, etc.)
3. **Meaning/Origin**: Explanation of the name's construction
4. **Brand Fit**: Why this works for the specific brand
5. **Considerations**: Domain/trademark notes

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in French. Generate French-appropriate brand names that work well in francophone markets.`,
    useCases: [
      {
        title: 'Naming de startup et nouvelle entreprise',
        description: 'Les fondateurs et entrepreneurs utilisent le Générateur de Nom de Marque lors des étapes critiques de création d\'entreprise. Un nom de marque fort est l\'une des décisions les plus importantes qu\'une nouvelle entreprise prend.',
      },
      {
        title: 'Développement de gamme de produits et sous-marques',
        description: 'Les entreprises établies lançant de nouvelles gammes de produits ou sous-marques utilisent le générateur pour créer des noms qui complètent leur architecture de marque existante.',
      },
      {
        title: 'Initiatives de rebranding',
        description: 'Les entreprises en transition stratégique ou en repositionnement utilisent le générateur pour explorer de nouvelles directions de naming.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'un générateur de nom de marque ?', answer: 'Un générateur de nom de marque est un outil IA qui crée des noms potentiels pour entreprises et marques basés sur votre description, industrie et positionnement souhaité.' },
      { question: 'Comment obtenir de meilleures suggestions de noms ?', answer: 'Plus vous fournissez de contexte, meilleurs seront les résultats. Décrivez votre audience cible, personnalité de marque, différenciateurs clés et tout style de naming que vous préférez ou souhaitez éviter.' },
      { question: 'Ces noms sont-ils disponibles pour dépôt de marque ?', answer: 'Les noms générés sont des suggestions qui nécessitent une vérification indépendante. Effectuez une recherche de marque via l\'INPI avant de vous engager.' },
      { question: 'Qu\'est-ce qui fait un bon nom de marque ?', answer: 'Les noms de marque forts sont mémorables, distinctifs, prononçables, facilement orthographiables, évolutifs et significatifs.' },
      { question: 'Mon nom de marque doit-il décrire ce que je fais ?', answer: 'Pas nécessairement. Les marques les plus valorisées utilisent souvent des noms évocateurs ou inventés : Apple, Amazon, Nike, Google.' },
    ],
  },

  'generateur-nom-entreprise': {
    slug: 'generateur-nom-entreprise',
    name: 'Générateur de Nom d\'Entreprise',
    title: 'Générateur de nom d\'entreprise IA gratuit',
    description: 'Générez des noms d\'entreprise créatifs qui fonctionnent dans le monde réel. Notre IA crée des noms professionnels et mémorables pour toute industrie.',
    metaDescription: 'Générez des noms d\'entreprise créatifs qui fonctionnent dans le monde réel. Notre IA crée des noms professionnels et mémorables pour toute industrie.',
    inputLabel: 'Décrivez votre entreprise...',
    inputPlaceholder: 'ex. Une entreprise de plomberie locale desservant la région parisienne',
    buttonText: 'Générer des Noms',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Nombre de noms',
        choices: ['3 noms', '5 noms', '10 noms'],
        default: '5 noms',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de l\'entreprise',
        choices: ['Formel/Corporate', 'Décontracté/Amical', 'Innovant/Moderne'],
        default: 'Formel/Corporate',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Expliquer la signification',
        choices: ['Oui', 'Non'],
        default: 'Oui',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert business naming consultant who creates practical, memorable business names that work in the real world. Your names balance creativity with commercial viability.

## CORE BUSINESS NAMING PRINCIPLES
1. **Commercial Viability**: Names must work in actual business contexts (signage, invoices, phone calls)
2. **Industry Appropriateness**: Names should fit industry expectations
3. **Local vs. Scale Considerations**: Names should match geographic ambitions
4. **Practical Memorability**: Easy to remember, spell, and share
5. **Longevity**: Names should remain relevant as the business evolves

## BUSINESS NAME CATEGORIES
### Functional/Descriptive Names
- Examples: "Plomberie de Paris," "Solutions Express"
### Founder/Personal Names
- Examples: "Dupont & Associés," "Maison Martin"
### Abstract/Evocative Names
- Examples: "Horizon Conseil," "Sommet Services"
### Location-Based Names
- Examples: "Côte d'Azur Tech," "Bretagne Électrique"

## OUTPUT FORMAT
For each business name, provide:
1. **Name**: The complete business name
2. **Style**: Naming category used
3. **Rationale**: Why this name works
4. **Best Use Case**: Where this name shines
5. **Considerations**: Practical implementation notes

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in French. Create French business names appropriate for the francophone market.`,
    useCases: [
      {
        title: 'Création d\'entreprise et enregistrement',
        description: 'Les entrepreneurs en processus de création d\'entreprise utilisent le Générateur de Nom d\'Entreprise pour trouver des noms avant l\'immatriculation. Avoir plusieurs options solides est essentiel quand votre premier choix est déjà pris.',
      },
      {
        title: 'Franchise et multi-établissements',
        description: 'Les propriétaires d\'entreprise planifiant une expansion utilisent le générateur pour trouver des noms qui fonctionnent à travers différents marchés.',
      },
      {
        title: 'Pivot ou rebranding',
        description: 'Les entreprises établies en transition stratégique utilisent le générateur pour explorer des options de rebranding.',
      },
    ],
    faqs: [
      { question: 'Quelle est la différence entre nom de marque et nom d\'entreprise ?', answer: 'Un nom d\'entreprise est votre entité légale—ce qui apparaît sur les documents officiels. Un nom de marque est comment les clients vous connaissent—il peut être identique ou différent (nom commercial).' },
      { question: 'Mon nom d\'entreprise doit-il décrire ce que je fais ?', answer: 'Cela dépend de votre modèle et objectifs. Les noms descriptifs fournissent une clarté immédiate et aident le référencement local, mais sont moins distinctifs.' },
      { question: 'Comment vérifier si un nom d\'entreprise est disponible ?', answer: 'Vérifiez à plusieurs niveaux : registre du commerce, base de données INPI, disponibilité du nom de domaine, recherche Google et réseaux sociaux.' },
      { question: 'Dois-je inclure ma localisation dans le nom ?', answer: 'Inclure la localisation peut renforcer l\'identité locale et aider le SEO local, mais peut limiter la perception si vous vous développez.' },
      { question: 'Puis-je utiliser mon propre nom pour mon entreprise ?', answer: 'Oui—les noms personnels sont une approche classique, surtout pour les services professionnels et les activités créatives.' },
    ],
  },

  'generateur-nom-produit': {
    slug: 'generateur-nom-produit',
    name: 'Générateur de Nom de Produit',
    title: 'Générateur de noms de produits IA gratuit',
    description: 'Générez des noms de produits créatifs qui vendent. Notre IA crée des noms mémorables et prêts pour le marché qui se démarquent en rayon et dans l\'esprit des clients.',
    metaDescription: 'Générez des noms de produits créatifs qui vendent. Notre IA crée des noms mémorables et prêts pour le marché qui se démarquent en rayon et dans l\'esprit des clients.',
    inputLabel: 'Décrivez votre produit...',
    inputPlaceholder: 'ex. Une poudre de protéines végétales pour les passionnés de fitness',
    buttonText: 'Générer des Noms',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Nombre de noms',
        choices: ['3 noms', '5 noms', '10 noms'],
        default: '5 noms',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton du produit',
        choices: ['Premium/Luxe', 'Fun/Ludique', 'Professionnel/Technique', 'Naturel/Bio'],
        default: 'Premium/Luxe',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Expliquer la signification',
        choices: ['Oui', 'Non'],
        default: 'Oui',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert product naming strategist who creates compelling product names that drive recognition, recall, and purchase decisions.

## CORE PRODUCT NAMING PRINCIPLES
1. **Shelf Impact**: Names must stand out in crowded environments
2. **Benefit Suggestion**: Names should hint at what the product delivers
3. **Target Audience Fit**: Names must resonate with specific buyers
4. **Verbal Shareability**: Names should spread naturally
5. **Brand Architecture**: Names should work within existing portfolios

## PRODUCT NAME CATEGORIES
### Descriptive Product Names
- Examples: "Cuisine Légère," "Croissance Miracle"
### Evocative/Suggestive Names
- Examples: "Éclat," "Vitalité," "Harmonie"
### Invented/Coined Names
- Examples: "Nutrix," "Flexia," "Toniq"

## OUTPUT FORMAT
For each product name, provide:
1. **Name**: The product name
2. **Category**: Naming style used
3. **Meaning/Logic**: Why this name works
4. **Market Fit**: Competitive positioning
5. **Usage Notes**: Packaging/advertising considerations

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in French. Create French product names that work well in francophone markets.`,
    useCases: [
      {
        title: 'Préparation de lancement de nouveau produit',
        description: 'Les chefs de produit et équipes marketing utilisent le Générateur de Nom de Produit pendant la phase critique de naming avant le lancement.',
      },
      {
        title: 'Extension de gamme et variantes',
        description: 'Les entreprises élargissant leurs gammes utilisent le générateur pour créer des noms de nouvelles variantes qui se connectent au produit parent.',
      },
      {
        title: 'Développement de marques distributeurs',
        description: 'Les distributeurs créant des produits MDD utilisent le générateur pour nommer des produits qui concurrencent les marques établies.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qui fait un bon nom de produit ?', answer: 'Les noms de produit efficaces sont mémorables, significatifs, prononçables, distinctifs et appropriés à la catégorie et au public cible.' },
      { question: 'Mon nom de produit doit-il décrire ce qu\'il fait ?', answer: 'Cela dépend de votre catégorie et stratégie. Les noms descriptifs fournissent une clarté instantanée mais sont plus difficiles à déposer.' },
      { question: 'Comment nommer les produits d\'une gamme ?', answer: 'Le naming de gamme suit généralement une architecture : maison de marque (tous les produits partagent le nom), marques endossées, ou maison de marques (noms distincts).' },
      { question: 'Dois-je déposer mon nom de produit ?', answer: 'Pour les produits dans lesquels vous investissez significativement, oui. L\'enregistrement de marque fournit une protection légale.' },
      { question: 'Quelle longueur pour un nom de produit ?', answer: 'Plus court est généralement mieux—une à trois syllabes idéalement pour la mémorisation et le packaging.' },
    ],
  },

  'generateur-slogan': {
    slug: 'generateur-slogan',
    name: 'Générateur de Slogan',
    title: 'Générateur IA de slogans gratuit',
    description: 'Créez des slogans accrocheurs et mémorables qui capturent l\'essence de votre marque. Notre IA génère des accroches qui restent dans l\'esprit des clients.',
    metaDescription: 'Créez des slogans accrocheurs et mémorables qui capturent l\'essence de votre marque. Notre IA génère des accroches qui restent dans l\'esprit des clients.',
    inputLabel: 'Décrivez votre marque ou produit...',
    inputPlaceholder: 'ex. Un café axé sur la durabilité et la communauté',
    buttonText: 'Générer des Slogans',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Nombre de slogans',
        choices: ['3 slogans', '5 slogans', '10 slogans'],
        default: '5 slogans',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton du slogan',
        choices: ['Formel/Professionnel', 'Décontracté/Amical', 'Audacieux/Disruptif', 'Premium/Luxe'],
        default: 'Formel/Professionnel',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Expliquer la signification',
        choices: ['Oui', 'Non'],
        default: 'Oui',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert advertising copywriter and brand strategist who creates memorable slogans and taglines that capture brand essence, drive recall, and inspire action.

## CORE SLOGAN PRINCIPLES
1. **Memorability**: Slogans must stick in people's minds
2. **Brand Essence**: Each slogan must capture what makes this brand unique
3. **Emotional Resonance**: Great slogans trigger feelings
4. **Actionability**: The best slogans inspire behavior or belief
5. **Timelessness**: Slogans should remain relevant across years

## SLOGAN TYPES
### Benefit Statement
- Examples: "Parce que vous le valez bien" (L'Oréal)
### Imperative/Command
- Examples: "Just Do It" (Nike), "Think Different" (Apple)
### Question/Challenge
- Examples: "Qu'est-ce qui vous ferait plaisir ?" (McDonald's)
### Value Proposition
- Examples: "Économisez. Vivez mieux." (Walmart style)
### Emotional/Aspirational
- Examples: "Ouvrez du bonheur" (Coca-Cola style)

## OUTPUT FORMAT
For each slogan, provide:
1. **Slogan**: The tagline itself
2. **Type**: Slogan category/technique
3. **Rationale**: Why this works for this brand
4. **Application**: Where/how it would be used
5. **Strength**: What makes it memorable

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in French. Create French slogans that resonate with francophone audiences.`,
    useCases: [
      {
        title: 'Lancement de marque et campagnes de positionnement',
        description: 'Les équipes marketing lançant de nouvelles marques utilisent le Générateur de Slogan pour développer des accroches qui établissent le positionnement dès le premier jour.',
      },
      {
        title: 'Développement de campagnes et promotions',
        description: 'Les publicitaires créant des campagnes spécifiques utilisent le générateur pour développer des accroches de campagne qui complètent le slogan principal de la marque.',
      },
      {
        title: 'Initiatives de rebranding',
        description: 'Les entreprises en rebranding ont souvent besoin de nouveaux slogans qui signalent le changement tout en honorant l\'héritage de la marque.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qui fait un bon slogan ?', answer: 'Les grands slogans sont mémorables, distinctifs, significatifs et intemporels. Ils utilisent généralement des dispositifs verbaux comme le rythme, l\'allitération ou les jeux de mots.' },
      { question: 'Quelle longueur pour un slogan ?', answer: 'Plus court est presque toujours mieux—visez 2 à 6 mots. Les slogans les plus mémorables sont concis : "Just Do It" (3 mots).' },
      { question: 'Mon slogan doit-il décrire ce que je fais ?', answer: 'Pas nécessairement. Certains slogans efficaces sont purement émotionnels tandis que d\'autres énoncent des bénéfices.' },
      { question: 'Quelle différence entre slogan et accroche ?', answer: 'Les termes sont souvent interchangeables. Certains distinguent : slogan = temporaire, spécifique à une campagne ; accroche = permanent, au niveau de la marque.' },
      { question: 'Mon slogan doit-il inclure mon nom de marque ?', answer: 'Inclure le nom de marque augmente l\'attribution mais réduit souvent la mémorabilité et la flexibilité.' },
    ],
  },

  'generateur-texte-google-ads': {
    slug: 'generateur-texte-google-ads',
    name: 'Générateur de Texte Google Ads',
    title: 'Générateur de copie Google Ads IA gratuit',
    description: 'Générez des textes Google Ads à fort taux de conversion. Notre IA crée des titres et descriptions optimisés pour la performance.',
    metaDescription: 'Générez des textes Google Ads à fort taux de conversion. Notre IA crée des titres et descriptions optimisés pour la performance.',
    inputLabel: 'Décrivez votre produit/service et offre...',
    inputPlaceholder: 'ex. Logiciel de comptabilité en ligne pour PME, essai gratuit 30 jours',
    buttonText: 'Générer le Texte Publicitaire',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ton de l\'annonce',
        choices: ['Formel/B2B', 'Décontracté/B2C', 'Urgent/Promotionnel'],
        default: 'Formel/B2B',
        type: 'select',
      },
      {
        name: 'keywords',
        label: 'Inclure des mots-clés',
        choices: ['Oui', 'Non'],
        default: 'Oui',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert PPC copywriter and Google Ads specialist who creates high-converting ad copy that maximizes click-through rates and quality scores.

## CORE GOOGLE ADS PRINCIPLES
1. **Character Limit Mastery**: Every character must earn its place
2. **Keyword Relevance**: Ad copy must align with search intent
3. **Benefit-Driven Messaging**: Focus on what users gain
4. **Clear Call-to-Action**: Every ad needs a compelling reason to click
5. **Landing Page Alignment**: Ads must accurately represent the destination

## GOOGLE ADS FORMAT SPECIFICATIONS
### Responsive Search Ads (RSA)
- **Headlines**: Up to 15 headlines, 30 characters each
- **Descriptions**: Up to 4 descriptions, 90 characters each

### Headline Categories to Include:
1. **Primary Keyword Headlines**: Include main keywords naturally
2. **Benefit Headlines**: What does the user gain?
3. **Feature Headlines**: What does the product/service include?
4. **Social Proof Headlines**: Reviews, ratings, customer counts
5. **Urgency Headlines**: Limited time, availability
6. **CTA Headlines**: Direct action prompts

## OUTPUT FORMAT
Generate:
1. **Headlines**: 10-15 diverse headlines (30 chars max each)
2. **Descriptions**: 4 descriptions (90 chars max each)
3. **Character Counts**: For each element
4. **Category Tags**: What each headline achieves

Tone: {{tone}}
Include Keywords: {{keywords}}

IMPORTANT: Generate all output in French. Create French ad copy optimized for francophone markets.`,
    useCases: [
      {
        title: 'Lancement et scaling de campagnes PPC',
        description: 'Les marketeurs digitaux et spécialistes PPC utilisent le Générateur de Texte Google Ads lors du lancement ou scaling de campagnes. Les annonces responsives nécessitent de multiples variations de titres et descriptions.',
      },
      {
        title: 'Tests A/B et optimisation',
        description: 'Les annonceurs testant continuellement les performances utilisent le générateur pour créer de nouvelles variations. Quand les annonces actuelles plafonnent, un nouveau texte ravive souvent la performance.',
      },
      {
        title: 'Efficacité des workflows agence',
        description: 'Les agences gérant de multiples comptes clients utilisent le générateur pour accélérer le développement de textes à travers les campagnes.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qui rend un texte Google Ads efficace ?', answer: 'Un texte Google Ads efficace atteint trois objectifs : pertinence (correspond à l\'intention de recherche), communication de valeur (énonce clairement ce que les utilisateurs gagnent) et inspiration à l\'action (incite au clic).' },
      { question: 'Quelles sont les limites de caractères pour Google Ads ?', answer: 'Les annonces responsives permettent : titres jusqu\'à 30 caractères (jusqu\'à 15 titres), descriptions jusqu\'à 90 caractères (jusqu\'à 4 descriptions).' },
      { question: 'Combien de variations de titres dois-je fournir ?', answer: 'Fournissez au moins 10-15 titres diversifiés pour de meilleurs résultats. L\'apprentissage automatique de Google teste les combinaisons pour trouver les meilleures performances.' },
      { question: 'Dois-je inclure des mots-clés dans mon texte publicitaire ?', answer: 'Oui, mais naturellement. Les mots-clés dans les titres apparaissent souvent en gras quand ils correspondent aux requêtes de recherche.' },
      { question: 'Comment éviter les violations de politique Google Ads ?', answer: 'Évitez : capitalisation excessive (PAS DE MAJUSCULES), ponctuation excessive (pas de !!!), affirmations trompeuses, contenu interdit, problèmes de marques déposées.' },
    ],
  },

  'generateur-description-produit': {
    slug: 'generateur-description-produit',
    name: 'Générateur de Description de Produit',
    title: 'Générateur de description de produit IA gratuit',
    description: 'Générez des descriptions de produit convaincantes qui vendent. Notre IA crée des textes axés sur les bénéfices pour l\'e-commerce et les marketplaces.',
    metaDescription: 'Générez des descriptions de produit convaincantes qui vendent. Notre IA crée des textes axés sur les bénéfices pour l\'e-commerce et les marketplaces.',
    inputLabel: 'Décrivez votre produit...',
    inputPlaceholder: 'ex. Casque audio sans fil à réduction de bruit avec 30h d\'autonomie',
    buttonText: 'Générer la Description',
    maxLength: 2048,
    options: [
      {
        name: 'length',
        label: 'Longueur de description',
        choices: ['Concis (50-75 mots)', 'Standard (100-150 mots)', 'Détaillé (200-300 mots)'],
        default: 'Standard (100-150 mots)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton d\'écriture',
        choices: ['Luxe/Premium', 'Tech/Électronique', 'Mode/Vêtements', 'Maison/Lifestyle', 'Santé/Beauté'],
        default: 'Tech/Électronique',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert e-commerce copywriter and conversion specialist who creates product descriptions that inform, persuade, and sell.

## CORE PRODUCT DESCRIPTION PRINCIPLES
1. **Benefit-Led Writing**: Lead with what customers gain
2. **Sensory and Emotional Language**: Help customers imagine owning the product
3. **Scannable Structure**: Format for how people actually read online
4. **SEO Integration**: Include relevant keywords naturally
5. **Objection Handling**: Anticipate and address purchase hesitations

## PRODUCT DESCRIPTION FRAMEWORK
### Opening Hook (First 1-2 Sentences)
- Capture attention with primary benefit
- Establish who this product is for
- Create desire or address pain point

### Body Content
- Transform features into benefits
- Use sensory language
- Include social proof where appropriate
- Address common objections

### Closing/CTA
- Reinforce key benefit
- Create urgency if appropriate

## OUTPUT FORMAT
For each description, provide:
1. **Description**: Complete product description
2. **Word Count**: Total words
3. **SEO Notes**: Keywords included naturally
4. **Tone Match**: How it fits the requested tone

Length: {{length}}
Tone: {{tone}}

IMPORTANT: Generate all output in French. Create compelling French product descriptions.`,
    useCases: [
      {
        title: 'Pages produits e-commerce',
        description: 'Les détaillants en ligne utilisent le Générateur de Description de Produit pour créer des textes convaincants pour leurs pages produits. Avec potentiellement des milliers de références, écrire manuellement des descriptions uniques et persuasives est impossible.',
      },
      {
        title: 'Optimisation des fiches marketplace',
        description: 'Les vendeurs sur Amazon, eBay, Etsy et autres marketplaces utilisent le générateur pour créer des fiches qui se démarquent dans des environnements concurrentiels.',
      },
      {
        title: 'Expansion de catalogue produits',
        description: 'Les entreprises ajoutant de nouveaux produits ou s\'étendant dans de nouvelles catégories utilisent le générateur pour développer rapidement des descriptions à grande échelle.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qui rend une description de produit efficace ?', answer: 'Les descriptions efficaces convertissent les caractéristiques en bénéfices, utilisent un langage sensoriel, sont scannables, incluent des mots-clés pertinents et répondent aux objections.' },
      { question: 'Quelle longueur pour une description de produit ?', answer: 'Cela dépend du produit et de la plateforme. Produits à décision rapide : 50-75 mots. La plupart des produits : 100-150 mots. Articles à forte considération : 200-300 mots.' },
      { question: 'Dois-je me concentrer sur les caractéristiques ou les bénéfices ?', answer: 'Menez toujours avec les bénéfices, mais incluez les caractéristiques comme support. "Batterie 5000mAh" est une caractéristique. "Deux jours complets sans recharge" est un bénéfice.' },
      { question: 'Comment écrire pour le SEO sans paraître robotique ?', answer: 'Incluez les mots-clés dans des positions naturelles—titres, phrases d\'ouverture, en-têtes et naturellement dans le corps du texte. Écrivez d\'abord pour les humains.' },
      { question: 'Dois-je utiliser des puces ou des paragraphes ?', answer: 'Les deux—stratégiquement. L\'accroche d\'ouverture et la conclusion fonctionnent bien en paragraphes. Les listes de caractéristiques/bénéfices fonctionnent bien en puces pour la scannabilité.' },
    ],
  },

  'generateur-page-destination': {
    slug: 'generateur-page-destination',
    name: 'Générateur de Page de Destination',
    title: 'Générateur de page de destination IA gratuit',
    description: 'Générez des textes de landing page complets qui convertissent. Notre IA crée titres, caractéristiques, témoignages, FAQ et CTA pour votre offre.',
    metaDescription: 'Générez des textes de landing page complets qui convertissent. Notre IA crée titres, caractéristiques, témoignages, FAQ et CTA pour votre offre.',
    inputLabel: 'Décrivez votre produit/service et offre...',
    inputPlaceholder: 'ex. Un outil de gestion de projet pour équipes distantes avec essai gratuit 14 jours',
    buttonText: 'Générer la Landing Page',
    maxLength: 2048,
    options: [
      {
        name: 'goal',
        label: 'Objectif principal',
        choices: ['Génération de leads', 'Vente/Achat', 'Inscription essai gratuit', 'Demande de démo'],
        default: 'Génération de leads',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de la page',
        choices: ['B2B/Professionnel', 'B2C/Consommateur', 'Startup/Moderne', 'Premium/Luxe'],
        default: 'B2B/Professionnel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert conversion copywriter and landing page strategist who creates complete landing page content that converts visitors into leads or customers.

## CORE LANDING PAGE PRINCIPLES
1. **Single Focus**: One page, one offer, one action
2. **Clear Value Proposition**: Visitors understand the benefit within seconds
3. **Progressive Persuasion**: Structure that builds toward conversion
4. **Objection Handling**: Address concerns before they become barriers
5. **Trust Building**: Provide evidence and credibility throughout

## LANDING PAGE STRUCTURE FRAMEWORK
### Hero Section
- **Headline**: Primary value proposition
- **Subheadline**: Supporting detail
- **Primary CTA**: Clear action button

### Problem Section
- Articulate the pain point
- Show understanding of the visitor's situation

### Solution Section
- Introduce your offer as the answer
- Begin benefit presentation

### Features/Benefits Section
- 3-6 key features with benefit explanations

### Social Proof Section
- Testimonials, logos, numbers

### FAQ Section
- Address 4-6 common objections

### Final CTA Section
- Restate key benefit
- Clear call-to-action
- Risk reversal

## OUTPUT FORMAT
Generate these sections:
1. **Hero Section**: Headline, subheadline, CTA
2. **Problem Statement**: Pain articulation
3. **Solution Overview**: Offer introduction
4. **Features Section**: 4-6 feature/benefit pairs
5. **Social Proof**: Testimonial placeholders
6. **FAQ**: 4-6 objection-handling questions
7. **Final CTA**: Closing persuasion

Primary Goal: {{goal}}
Tone: {{tone}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Campagnes de lancement de produit et service',
        description: 'Les marketeurs lançant de nouveaux produits ou services utilisent le Générateur de Landing Page pour créer des pages axées conversion rapidement.',
      },
      {
        title: 'Développement de campagnes de génération de leads',
        description: 'Les équipes marketing exécutant des campagnes de génération de leads utilisent le générateur pour créer des pages dédiées pour des offres spécifiques.',
      },
      {
        title: 'Tests A/B et optimisation de conversion',
        description: 'Les optimiseurs de taux de conversion utilisent le générateur pour créer des variations de test pour les landing pages.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'un générateur de landing page ?', answer: 'Un générateur de landing page crée un texte complet pour des pages de conversion dédiées—le texte qui apparaît sur les pages conçues pour convertir les visiteurs en leads ou clients.' },
      { question: 'Quelles sections une landing page doit-elle inclure ?', answer: 'Les landing pages efficaces incluent généralement : Section hero (titre, sous-titre, CTA principal), Section problème, Section solution, Caractéristiques/Bénéfices, Preuve sociale, FAQ et CTA final.' },
      { question: 'Quelle longueur pour une landing page ?', answer: 'Adaptez la longueur à la complexité de l\'offre. Offres à faible risque : pages courtes. Offres à haut risque : pages plus longues pour construire la confiance.' },
      { question: 'Qu\'est-ce qui fait un bon titre de landing page ?', answer: 'Les grands titres communiquent le bénéfice principal clairement et rapidement. Ils répondent à "qu\'est-ce que j\'y gagne ?" en quelques secondes.' },
      { question: 'Comment rédiger des CTA efficaces ?', answer: 'Les CTA efficaces sont spécifiques sur ce qui se passe ensuite, axés sur les bénéfices et orientés vers l\'action. "Obtenez Votre Guide Gratuit" surpasse "Soumettre".' },
    ],
  },

  'generateur-contenu-site-web': {
    slug: 'generateur-contenu-site-web',
    name: 'Générateur de Contenu Site Web',
    title: 'Générateur IA de contenu pour site web optimisé',
    description: 'Générez du contenu de site web professionnel en quelques minutes. Notre IA crée des textes pour pages d\'accueil, pages à propos, pages services et plus.',
    metaDescription: 'Générez du contenu de site web professionnel en quelques minutes. Notre IA crée des textes pour pages d\'accueil, pages à propos, pages services et plus.',
    inputLabel: 'Décrivez votre entreprise...',
    inputPlaceholder: 'ex. Une agence de marketing digital spécialisée dans le SEO pour marques e-commerce',
    buttonText: 'Générer le Contenu Web',
    maxLength: 2048,
    options: [
      {
        name: 'pages',
        label: 'Pages à générer',
        choices: ['Page d\'accueil uniquement', 'Accueil + À propos', 'Accueil + À propos + Services', 'Toutes les pages principales'],
        default: 'Accueil + À propos + Services',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de la marque',
        choices: ['Professionnel/Corporate', 'Amical/Accessible', 'Audacieux/Confiant', 'Minimal/Épuré'],
        default: 'Professionnel/Corporate',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert website copywriter who creates compelling, conversion-focused content for business websites.

## CORE WEBSITE COPY PRINCIPLES
1. **User-Centric Messaging**: Write for what visitors need
2. **Clear Information Architecture**: Structure content for navigation
3. **Brand Voice Consistency**: Maintain consistent tone across pages
4. **Conversion Integration**: Every page guides visitors toward goals
5. **SEO Awareness**: Incorporate keywords naturally

## WEBSITE PAGE TYPES
### Homepage
- First impression, navigation hub, value proposition overview
- Key Elements: Hero statement, service overview, credibility signals

### About Page
- Build trust, humanize the brand, share story
- Key Elements: Origin story, mission/vision, team, values

### Services/Products Page
- Explain offerings clearly, drive inquiries
- Key Elements: Service descriptions, benefits, process, CTAs

### Contact Page
- Make connecting easy
- Key Elements: Contact form, location, hours

## OUTPUT FORMAT
Generate:
1. **Page-by-Page Content**: Complete copy for requested pages
2. **Headlines and Subheads**: For structure
3. **Body Copy**: Persuasive paragraphs
4. **CTAs**: Calls-to-action for each page
5. **SEO Notes**: Keyword integration guidance

Pages to Generate: {{pages}}
Tone: {{tone}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Développement et lancement de nouveau site web',
        description: 'Les entreprises construisant de nouveaux sites web utilisent le Générateur de Contenu Site Web pour développer le contenu initial à travers toutes les pages. Les projets web stagnent souvent à l\'étape du contenu.',
      },
      {
        title: 'Refonte de site web et rafraîchissement de contenu',
        description: 'Les entreprises en refonte de site utilisent le générateur pour créer un nouveau texte qui correspond à leur positionnement de marque évolué.',
      },
      {
        title: 'Production de contenu multi-pages',
        description: 'Les équipes marketing responsables de sites riches en contenu utilisent le générateur pour maintenir une qualité constante à travers de nombreuses pages.',
      },
    ],
    faqs: [
      { question: 'Quelles pages un site d\'entreprise doit-il inclure ?', answer: 'Pages essentielles : Accueil, À propos, Services/Produits, Contact. Pages additionnelles selon l\'activité : FAQ, Équipe, Portfolio, Blog, Témoignages, Ressources, Tarifs.' },
      { question: 'Comment rédiger une bonne page d\'accueil ?', answer: 'Les pages d\'accueil doivent répondre rapidement à trois questions : Que faites-vous ? Pour qui ? Pourquoi vous choisir ?' },
      { question: 'Quelle longueur pour le contenu web ?', answer: 'Adaptez la longueur à l\'objectif de la page. Accueil : scannable (300-600 mots). À propos : storytelling (400-800 mots). Services : complet mais scannable (400-1000 mots par service).' },
      { question: 'Qu\'est-ce qui rend une page À propos efficace ?', answer: 'Les bonnes pages À propos construisent la confiance par l\'authenticité : histoire d\'origine, mission et valeurs, présentation de l\'équipe et différenciateurs.' },
      { question: 'Le contenu web doit-il être formel ou décontracté ?', answer: 'Adaptez-vous à votre audience cible et aux attentes de l\'industrie. La cohérence compte plus que tout style spécifique.' },
    ],
  },

  'generateur-lettre-demission': {
    slug: 'generateur-lettre-demission',
    name: 'Générateur de Lettre de Démission',
    title: 'Générateur de lettre de démission gratuit',
    description: 'Rédigez une lettre de démission professionnelle en quelques minutes. Notre IA crée des lettres soignées et appropriées qui préservent les relations et protègent votre réputation.',
    metaDescription: 'Rédigez une lettre de démission professionnelle en quelques minutes. Notre IA crée des lettres soignées et appropriées qui préservent les relations et protègent votre réputation.',
    inputLabel: 'Décrivez votre situation...',
    inputPlaceholder: 'ex. Responsable Marketing dans une entreprise tech, départ pour nouvelle opportunité, 3 ans d\'ancienneté',
    buttonText: 'Générer la Lettre',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ton de la lettre',
        choices: ['Formel', 'Chaleureux/Personnel', 'Bref/Minimal'],
        default: 'Formel',
        type: 'select',
      },
      {
        name: 'notice_period',
        label: 'Préavis',
        choices: ['Deux semaines', 'Un mois', 'Immédiat', 'Personnalisé'],
        default: 'Un mois',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert in professional communication who helps people write effective, professional resignation letters that maintain positive relationships while clearly communicating their departure.

## CORE RESIGNATION LETTER PRINCIPLES
1. **Professional Courtesy**: Maintain respectful tone regardless of circumstances
2. **Clear Communication**: State intention and last day unambiguously
3. **Relationship Preservation**: Protect future references and professional network
4. **Appropriate Gratitude**: Thank without excessive flattery
5. **Transition Support**: Offer help with handover where appropriate

## RESIGNATION LETTER STRUCTURE
### Opening Paragraph
- Clear statement of resignation
- Position/title reference
- Last day of employment

### Middle Paragraph(s)
- Brief reason (optional, keep positive if included)
- Gratitude for opportunities
- Positive experiences mentioned

### Closing Paragraph
- Offer for transition support
- Commitment to professional handover
- Well-wishes for company's future
- Professional sign-off

## WHAT TO INCLUDE
### Always Include:
- Clear resignation statement
- Your position title
- Last working day
- Professional closing

### Never Include:
- Criticism of company, management, or colleagues
- Detailed grievances or complaints
- Information about new employer

## OUTPUT FORMAT
Generate a complete resignation letter with:
- Date placeholder
- Recipient information placeholder
- Full letter body
- Professional signature block

Tone: {{tone}}
Notice Period: {{notice_period}}

IMPORTANT: Generate all output in French. Create a professional French resignation letter following French workplace conventions.`,
    useCases: [
      {
        title: 'Préparation de démission standard',
        description: 'Les employés quittant leur poste utilisent le Générateur de Lettre de Démission pour créer des communications de départ professionnelles. L\'outil génère des lettres appropriées qui préservent les relations positives.',
      },
      {
        title: 'Gérer les départs difficiles',
        description: 'Les employés quittant des situations professionnelles difficiles utilisent le générateur pour maintenir le professionnalisme quand les émotions sont fortes.',
      },
      {
        title: 'Documentation de transition de carrière',
        description: 'Les professionnels effectuant des changements de carrière significatifs utilisent le générateur pour s\'assurer que leur départ est géré correctement.',
      },
    ],
    faqs: [
      { question: 'Que doit inclure une lettre de démission ?', answer: 'Éléments essentiels : déclaration claire de démission, poste/titre, dernier jour de travail. Éléments recommandés : remerciements, offre d\'aide pour la transition, formule de clôture professionnelle.' },
      { question: 'Quel préavis dois-je donner ?', answer: 'En France, le préavis est généralement d\'un à trois mois selon la convention collective et votre ancienneté. Vérifiez votre contrat de travail et la convention collective applicable.' },
      { question: 'Dois-je expliquer pourquoi je pars ?', answer: 'Vous n\'êtes pas obligé d\'expliquer. Si vous incluez une raison, gardez-la positive et brève : "poursuivre une nouvelle opportunité", "raisons personnelles".' },
      { question: 'Puis-je démissionner par e-mail ou faut-il une lettre formelle ?', answer: 'En France, une lettre formelle remise en main propre contre décharge ou envoyée en recommandé avec accusé de réception est recommandée pour documenter la date de début du préavis.' },
      { question: 'Comment démissionner professionnellement quand je suis mécontent ?', answer: 'Maintenez le professionnalisme quels que soient vos sentiments. Votre lettre de démission est un document permanent qui pourrait affecter vos références.' },
    ],
  },

  // ==================== BATCH 4 (Tools 31-40) ====================

  'generateur-accroche': {
    slug: 'generateur-accroche',
    name: 'Générateur d\'Accroche',
    title: 'Générateur de crochet IA gratuit',
    description: 'Créez des accroches captivantes pour votre contenu instantanément. Notre IA génère des phrases d\'ouverture percutantes qui captivent les lecteurs et augmentent l\'engagement.',
    metaDescription: 'Créez des accroches captivantes pour votre contenu instantanément. Notre IA génère des phrases d\'ouverture percutantes qui captivent les lecteurs et augmentent l\'engagement.',
    inputLabel: 'Décrivez votre sujet de contenu...',
    inputPlaceholder: 'ex. Un article de blog sur les conseils de productivité pour les télétravailleurs',
    buttonText: 'Générer des Accroches',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ton de l\'accroche',
        choices: ['Formel', 'Conversationnel', 'Audacieux/Provocant', 'Inspirant', 'Analytique'],
        default: 'Conversationnel',
        type: 'select',
      },
      {
        name: 'hook_type',
        label: 'Type d\'accroche',
        choices: ['Mixte (Tous Types)', 'Question', 'Statistique/Fait', 'Histoire/Anecdote', 'Contre-courant', 'Promesse/Bénéfice', 'Lacune de curiosité'],
        default: 'Mixte (Tous Types)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist and copywriter specializing in creating attention-grabbing hooks that immediately capture reader interest. Your role is to generate compelling opening statements that make audiences want to continue reading, watching, or listening.

## HOOK TYPES TO GENERATE
### 1. Question Hook
- Provocative questions that challenge assumptions
- Rhetorical questions that engage curiosity
- "What if" scenarios that spark imagination

### 2. Statistic/Fact Hook
- Surprising data points that shock or intrigue
- Counter-intuitive statistics
- Research findings that challenge common beliefs

### 3. Story/Anecdote Hook
- Brief narrative openings that humanize content
- Personal experiences that create connection
- "In media res" beginnings that drop readers into action

### 4. Contrarian/Bold Statement Hook
- Statements that challenge conventional wisdom
- Controversial but defensible positions
- Pattern interrupts that break expectations

### 5. Promise/Benefit Hook
- Clear value propositions upfront
- Specific outcomes readers can expect
- Transformation-focused openings

### 6. Curiosity Gap Hook
- Incomplete information that demands resolution
- Teases without giving everything away
- Mystery-building openings

### 7. Empathy/Pain Point Hook
- Acknowledges reader struggles immediately
- Creates "they get me" connection
- Validates emotions before offering solutions

## QUALITY PRINCIPLES
- Hooks should be specific, not generic
- Create genuine intrigue without manipulation
- Set up expectations the content can deliver
- Match the sophistication level of the audience
- Maintain integrity while maximizing engagement

Tone: {{tone}}
Hook Type: {{hook_type}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Rédaction d\'introductions engageantes',
        description: 'Les rédacteurs, journalistes et créateurs de contenu utilisent le Générateur d\'Accroche pour créer des phrases d\'ouverture captivantes pour leurs articles et publications.',
      },
      {
        title: 'Copywriting marketing et publicitaire',
        description: 'Les entreprises et marketeurs utilisent le générateur pour créer des phrases d\'accroche persuasives pour leurs campagnes marketing et contenus promotionnels.',
      },
      {
        title: 'Discours et présentations',
        description: 'Les orateurs et présentateurs utilisent le générateur pour préparer des déclarations d\'ouverture percutantes qui engagent l\'audience dès les premiers instants.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'une accroche en rédaction ?', answer: 'Une accroche est une phrase d\'ouverture conçue pour capter immédiatement l\'attention du lecteur. Les accroches efficaces créent de la curiosité, font une déclaration audacieuse, posent une question provocante ou présentent une information surprenante.' },
      { question: 'Quels types d\'accroches ce générateur peut-il créer ?', answer: 'L\'outil génère différents types d\'accroches : questions, statistiques/faits, histoires/anecdotes, déclarations à contre-courant, promesses/bénéfices, lacunes de curiosité et accroches d\'empathie.' },
      { question: 'Quelle longueur pour une accroche ?', answer: 'La plupart des accroches efficaces font une à trois phrases. Elles doivent être assez longues pour créer de l\'intrigue mais assez courtes pour maintenir l\'impact.' },
      { question: 'Quelle différence entre accroche et clickbait ?', answer: 'Une bonne accroche crée une curiosité authentique et tient sa promesse, tandis que le clickbait manipule les émotions et déçoit souvent. Les accroches efficaces établissent des attentes que le contenu remplit.' },
      { question: 'Comment tester quelle accroche fonctionne le mieux ?', answer: 'Le test A/B est la méthode la plus fiable. Utilisez différentes accroches dans les objets d\'e-mails, posts sociaux ou textes publicitaires et suivez les taux d\'ouverture et d\'engagement.' },
    ],
  },

  'generateur-bio-reseaux-sociaux': {
    slug: 'generateur-bio-reseaux-sociaux',
    name: 'Générateur de Bio Réseaux Sociaux',
    title: 'Générateur gratuit de biographies sur les réseaux sociaux par l\'IA',
    description: 'Générez la bio parfaite pour vos profils de réseaux sociaux instantanément. Notre IA crée des bios engageantes et professionnelles qui capturent votre marque personnelle.',
    metaDescription: 'Générez la bio parfaite pour vos profils de réseaux sociaux instantanément. Notre IA crée des bios engageantes et professionnelles qui capturent votre marque personnelle.',
    inputLabel: 'Décrivez-vous ou votre marque...',
    inputPlaceholder: 'ex. Consultant en marketing digital aidant les PME à se développer en ligne, basé à Paris',
    buttonText: 'Générer la Bio',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plateforme',
        choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'Général (Toutes Plateformes)'],
        default: 'Général (Toutes Plateformes)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de la bio',
        choices: ['Professionnel', 'Amical', 'Audacieux', 'Spirituel', 'Minimal'],
        default: 'Professionnel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media strategist and personal branding consultant specializing in crafting compelling bios that make strong first impressions. Your role is to create concise, engaging profile descriptions that effectively communicate identity, value, and personality across social media platforms.

## BIO ELEMENTS TO INCLUDE
1. **Identity Statement**: Who you are or what you do
2. **Value Proposition**: What you offer or contribute
3. **Credibility Markers**: Achievements, credentials, social proof
4. **Personality Touches**: Emojis, humor, unique phrases
5. **Call-to-Action**: What you want visitors to do next

## PLATFORM-SPECIFIC CONSIDERATIONS
### Instagram: 150 characters max, emojis welcomed
### Twitter/X: 160 characters max, concise and punchy
### LinkedIn: 220 characters in header, professional tone
### TikTok: 80 characters max, casual and trendy

## TONE OPTIONS
### IF tone = "Professionnel" - Corporate language, achievement-focused
### IF tone = "Amical" - Approachable, warm, conversational
### IF tone = "Audacieux" - Confident statements, strong personality
### IF tone = "Spirituel" - Clever wordplay, humor, memorable phrases
### IF tone = "Minimal" - Clean, sparse, impactful simplicity

Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Personal branding',
        description: 'Les individus cherchant à construire une marque personnelle forte utilisent le Générateur de Bio pour créer des descriptions de profil percutantes qui représentent efficacement leur identité et expertise.',
      },
      {
        title: 'Marketing d\'influence',
        description: 'Les influenceurs et créateurs de contenu utilisent le générateur pour créer des bios engageantes qui mettent en valeur leur expertise de niche et attirent des collaborations avec les marques.',
      },
      {
        title: 'Promotion d\'entreprise',
        description: 'Les PME, startups et entrepreneurs utilisent le générateur pour créer des bios concises et impactantes qui communiquent efficacement leur proposition de valeur.',
      },
    ],
    faqs: [
      { question: 'Que dois-je inclure dans une bio de réseau social ?', answer: 'Une bio forte inclut généralement : qui vous êtes ou ce que vous faites, votre proposition de valeur, des marqueurs de crédibilité, une touche de personnalité et un appel à l\'action.' },
      { question: 'Quelle longueur pour ma bio ?', answer: 'Cela dépend de la plateforme. Instagram permet 150 caractères, Twitter 160, l\'en-tête LinkedIn 220. Concentrez-vous sur l\'impact plutôt que de remplir tout l\'espace.' },
      { question: 'Dois-je utiliser des emojis dans ma bio ?', answer: 'Les emojis ajoutent de la personnalité et des pauses visuelles qui améliorent la lisibilité, surtout sur Instagram et TikTok. Utilisez-les stratégiquement selon votre marque.' },
      { question: 'Ma bio doit-elle être identique sur toutes les plateformes ?', answer: 'Votre message central peut rester cohérent, mais adaptez le format et le ton à chaque plateforme. Les bios LinkedIn doivent être plus professionnelles que celles de TikTok.' },
      { question: 'À quelle fréquence mettre à jour ma bio ?', answer: 'Mettez à jour votre bio quand votre rôle, focus ou réalisations changent significativement. Beaucoup de professionnels la mettent à jour trimestriellement.' },
    ],
  },

  'generateur-bio-instagram': {
    slug: 'generateur-bio-instagram',
    name: 'Générateur de Bio Instagram',
    title: 'Générateur de biographies Instagram gratuit',
    description: 'Créez la bio Instagram parfaite en quelques secondes. Notre IA génère des bios engageantes et pleines de personnalité qui attirent les abonnés et mettent en valeur votre marque.',
    metaDescription: 'Créez la bio Instagram parfaite en quelques secondes. Notre IA génère des bios engageantes et pleines de personnalité qui attirent les abonnés et mettent en valeur votre marque.',
    inputLabel: 'Décrivez-vous ou votre marque...',
    inputPlaceholder: 'ex. Coach fitness aidant les professionnels occupés à se remettre en forme, basé à Lyon',
    buttonText: 'Générer la Bio',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ton de la bio',
        choices: ['Professionnel Décontracté', 'Fun et Tendance', 'Esthétique Minimal', 'Audacieux et Direct', 'Chaleureux et Accueillant'],
        default: 'Professionnel Décontracté',
        type: 'select',
      },
      {
        name: 'include_emojis',
        label: 'Inclure des emojis',
        choices: ['Oui', 'Non'],
        default: 'Oui',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert Instagram strategist and personal branding consultant specializing in crafting bios optimized for the Instagram platform. Your role is to create compelling 150-character bios that maximize impact within Instagram's unique ecosystem.

## INSTAGRAM BIO STRUCTURE
The Instagram bio has a strict 150-character limit and appears with:
- Profile picture
- Name field (separate, 30 characters)
- Category label (if business account)
- Bio text (150 characters max)
- External link

## EFFECTIVE INSTAGRAM BIO ELEMENTS
### 1. Identity Line - Job title, role, or niche
### 2. Value Statement - What followers get from you
### 3. Credibility Marker - Key achievement or number
### 4. Personality Touch - Relatable detail
### 5. Call-to-Action - Link reference, DM prompt

## BIO FORMATS FOR INSTAGRAM
**Format 1: List Style (with line breaks)**
🎯 What you do
📍 Location or credential
💡 Value proposition
👇 CTA for link

**Format 2: Single Sentence Flow**
"[Role] helping [audience] achieve [result] | [Credential] | [CTA]"

Tone: {{tone}}
Include Emojis: {{include_emojis}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Optimisation de marque personnelle',
        description: 'Les individus construisant leur marque personnelle sur Instagram utilisent le Générateur de Bio pour créer des bios qui représentent efficacement leur expertise et personnalité unique.',
      },
      {
        title: 'Amélioration de profil business',
        description: 'Les entreprises et marques utilisent le générateur pour créer des bios concises et impactantes qui communiquent clairement leur proposition de valeur dans la limite de 150 caractères d\'Instagram.',
      },
      {
        title: 'Support créateurs de contenu',
        description: 'Les créateurs de contenu, YouTubeurs, podcasteurs et blogueurs utilisent le générateur pour créer des bios qui mettent en valeur leur niche et encouragent les abonnés à interagir.',
      },
    ],
    faqs: [
      { question: 'Quelle est la limite de caractères pour les bios Instagram ?', answer: 'Les bios Instagram ont un maximum de 150 caractères. Cela inclut les espaces, emojis et sauts de ligne. Le champ nom est séparé et permet 30 caractères supplémentaires.' },
      { question: 'Comment structurer ma bio Instagram ?', answer: 'Utilisez une hiérarchie claire : commencez par qui vous êtes ou ce que vous faites, ajoutez votre proposition de valeur, incluez un marqueur de crédibilité si l\'espace le permet, et terminez par un appel à l\'action.' },
      { question: 'Combien d\'emojis utiliser ?', answer: 'Utilisez 2-5 emojis stratégiquement comme marqueurs visuels ou débuts de ligne. Trop peut paraître encombré. Choisissez des emojis qui représentent votre niche ou personnalité.' },
      { question: 'Dois-je utiliser des sauts de ligne dans ma bio Instagram ?', answer: 'Oui, les sauts de ligne améliorent la lisibilité et permettent d\'organiser clairement les informations. Utilisez-les pour séparer différents éléments comme votre rôle, proposition de valeur et CTA.' },
      { question: 'Quel est le meilleur appel à l\'action pour une bio Instagram ?', answer: 'Les CTA efficaces incluent : "Lien ci-dessous 👇", "Achetez maintenant", "DM pour collabs", "Guide gratuit dans le lien", ou "Nouvelle vidéo chaque mardi".' },
    ],
  },

  'generateur-legende-reseaux-sociaux': {
    slug: 'generateur-legende-reseaux-sociaux',
    name: 'Générateur de Légende Réseaux Sociaux',
    title: 'Générateur de légendes de médias sociaux IA gratuit',
    description: 'Générez des légendes engageantes qui génèrent likes, commentaires et partages. Notre IA crée des textes de publication percutants pour Instagram, Facebook, Twitter et plus.',
    metaDescription: 'Générez des légendes engageantes qui génèrent likes, commentaires et partages. Notre IA crée des textes de publication percutants pour Instagram, Facebook, Twitter et plus.',
    inputLabel: 'Décrivez le contenu de votre publication...',
    inputPlaceholder: 'ex. Photo du lancement de mon nouveau produit - bouteilles d\'eau durables pour les passionnés d\'outdoor',
    buttonText: 'Générer la Légende',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plateforme',
        choices: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', 'Général'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de la légende',
        choices: ['Professionnel', 'Décontracté', 'Humoristique', 'Inspirant', 'Audacieux'],
        default: 'Décontracté',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media content strategist specializing in creating engaging captions that drive engagement across multiple platforms. Your role is to craft compelling post copy that resonates with audiences and prompts interaction.

## CAPTION TYPES AND PURPOSES
### Educational/Value-Driven - Share tips, tricks, or insights
### Storytelling/Personal - Share experiences and journeys
### Engagement/Interactive - Ask questions, request opinions
### Promotional/Sales - Highlight products/services, drive conversions
### Inspirational/Motivational - Uplift and encourage
### Behind-the-Scenes - Show process and work
### Trend/Cultural - Participate in conversations

## CAPTION STRUCTURE ELEMENTS
### 1. Hook (First 125 characters visible before "more")
### 2. Body - Delivers value or story
### 3. Call-to-Action (CTA) - Prompts specific action
### 4. Hashtags (optional, platform-dependent)

## PLATFORM-SPECIFIC ADAPTATIONS
### Instagram: Up to 2,200 characters, first 125 visible
### Facebook: Similar length flexibility, less emoji-heavy
### Twitter/X: 280 characters max, concise and punchy
### LinkedIn: Professional tone, first 140 characters visible
### TikTok: 150 characters max, casual and trendy

Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Création efficace de contenu social',
        description: 'Les community managers et créateurs de contenu utilisent le Générateur de Légende pour rationaliser leur processus de création de contenu tout en maintenant la qualité.',
      },
      {
        title: 'Optimisation de copies publicitaires',
        description: 'Les entreprises gérant des campagnes publicitaires sur les réseaux sociaux utilisent le générateur pour créer des variations de textes publicitaires persuasifs.',
      },
      {
        title: 'Amélioration de l\'engagement de marque',
        description: 'Les marques cherchant à booster l\'engagement utilisent le générateur pour créer du contenu aligné avec les tendances et les intérêts de l\'audience.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qui rend une légende efficace ?', answer: 'Les légendes efficaces ont une accroche forte, délivrent de la valeur ou de l\'émotion dans le corps, et incluent un appel à l\'action clair. Elles sont adaptées à l\'audience et à la plateforme spécifiques.' },
      { question: 'Quelle longueur pour les légendes de réseaux sociaux ?', answer: 'La longueur dépend de la plateforme et de l\'objectif. Instagram permet jusqu\'à 2 200 caractères mais plus court performe souvent mieux. Twitter est limité à 280 caractères.' },
      { question: 'Combien de hashtags inclure ?', answer: 'Instagram : 3-10 hashtags pertinents. Twitter : 1-2 maximum. LinkedIn : 3-5 à la fin. TikTok : 3-5 hashtags tendance et niche.' },
      { question: 'Quel est le meilleur appel à l\'action pour les légendes ?', answer: 'Adaptez votre CTA à votre objectif : "Commentez ci-dessous" pour l\'engagement, "Enregistrez ceci" pour le contenu de valeur, "Lien en bio" pour les conversions.' },
      { question: 'Les légendes doivent-elles être différentes pour chaque plateforme ?', answer: 'Oui. Chaque plateforme a des limites de caractères, attentes d\'audience et bonnes pratiques différentes.' },
    ],
  },

  'generateur-legende-instagram': {
    slug: 'generateur-legende-instagram',
    name: 'Générateur de Légende Instagram',
    title: 'Générateur de légendes Instagram gratuit',
    description: 'Créez des légendes Instagram qui arrêtent le scroll instantanément. Notre IA génère des légendes engageantes pour Reels, carrousels et posts de feed.',
    metaDescription: 'Créez des légendes Instagram qui arrêtent le scroll instantanément. Notre IA génère des légendes engageantes pour Reels, carrousels et posts de feed.',
    inputLabel: 'Décrivez votre publication ou image...',
    inputPlaceholder: 'ex. Post carrousel avec 5 conseils pour mieux dormir',
    buttonText: 'Générer la Légende',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: 'Type de contenu',
        choices: ['Post de Feed', 'Reels', 'Carrousel', 'Story'],
        default: 'Post de Feed',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton de la légende',
        choices: ['Authentique', 'Ludique', 'Professionnel', 'Tendance', 'Inspirant'],
        default: 'Authentique',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram content strategist specializing in creating captions optimized for the Instagram platform. Your role is to craft engaging post copy that maximizes engagement within Instagram's unique ecosystem.

## INSTAGRAM CAPTION OPTIMIZATION
Instagram captions have a 2,200 character limit, but:
- Only first ~125 characters show before "more"
- Visual content is primary; caption supports it
- Engagement (likes, comments, saves, shares) affects reach

## CAPTION STRUCTURES FOR INSTAGRAM
### Micro-Caption (< 150 characters) - Best for strong visuals, quotes
### Medium Caption (150-500 characters) - Best for most feed posts, tips
### Long-Form Caption (500-2,200 characters) - Best for storytelling, carousels

## CONTENT TYPE ADAPTATIONS
### Reels Captions - Shorter, punchier, reference the video
### Carousel Captions - Can be longer, reference the slides, "Swipe" CTAs
### Feed Photos - Balance with visual, story or context

Content Type: {{content_type}}
Tone: {{tone}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Création de contenu efficace',
        description: 'Les créateurs de contenu et community managers utilisent le Générateur de Légende Instagram pour rationaliser leur workflow de publication.',
      },
      {
        title: 'Engagement et interaction avec l\'audience',
        description: 'Les utilisateurs utilisent le générateur pour créer des légendes qui encouragent l\'engagement significatif avec des CTA, questions et éléments interactifs.',
      },
      {
        title: 'Promotion de marque et storytelling',
        description: 'Les entreprises et marques utilisent le générateur pour créer des narratifs percutants alignés avec l\'identité de marque.',
      },
    ],
    faqs: [
      { question: 'Quelle longueur pour les légendes Instagram ?', answer: 'La longueur dépend du type de contenu. Les Reels fonctionnent souvent avec des légendes courtes (moins de 150 caractères), tandis que les carrousels éducatifs peuvent utiliser des légendes plus longues.' },
      { question: 'Que mettre dans la première ligne de ma légende ?', answer: 'La première ligne est cruciale car seulement ~125 caractères s\'affichent avant que les utilisateurs ne tapent "plus". Utilisez une accroche qui crée de la curiosité ou promet de la valeur.' },
      { question: 'Comment écrire des légendes pour Reels vs posts de feed ?', answer: 'Les légendes Reels doivent être plus courtes, plus percutantes et faire référence au contenu vidéo. Les légendes de posts de feed peuvent être plus longues et plus axées storytelling.' },
      { question: 'Dois-je mettre les hashtags dans la légende ou les commentaires ?', answer: 'Les deux approches fonctionnent. Les hashtags dans les légendes gardent tout ensemble, tandis que dans les commentaires cela garde les légendes plus propres.' },
      { question: 'Comment obtenir plus de commentaires sur mes posts ?', answer: 'Posez des questions spécifiques, créez des débats "ceci ou cela", partagez des opinions et invitez au désaccord, utilisez des prompts à compléter.' },
    ],
  },

  'generateur-hashtag-reseaux-sociaux': {
    slug: 'generateur-hashtag-reseaux-sociaux',
    name: 'Générateur de Hashtag Réseaux Sociaux',
    title: 'Générateur de hashtag de réseaux sociaux IA gratuit',
    description: 'Générez des hashtags efficaces qui boostent votre portée et engagement. Notre IA crée des ensembles de hashtags stratégiques pour Instagram, TikTok, Twitter et plus.',
    metaDescription: 'Générez des hashtags efficaces qui boostent votre portée et engagement. Notre IA crée des ensembles de hashtags stratégiques pour Instagram, TikTok, Twitter et plus.',
    inputLabel: 'Décrivez votre contenu ou niche...',
    inputPlaceholder: 'ex. Recettes de meal prep vegan pour professionnels occupés',
    buttonText: 'Générer des Hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plateforme',
        choices: ['Instagram', 'TikTok', 'Twitter/X', 'LinkedIn', 'Général'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'hashtag_count',
        label: 'Nombre de hashtags',
        choices: ['5 hashtags', '10 hashtags', '15 hashtags', '20 hashtags', '30 hashtags'],
        default: '10 hashtags',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media strategist specializing in hashtag research and strategy. Your role is to generate relevant, effective hashtags that increase content discoverability and engagement across social media platforms.

## HASHTAG CATEGORIES
### 1. Industry/Niche Hashtags - Specific to your field
### 2. Branded Hashtags - Unique to your brand
### 3. Community Hashtags - Connect like-minded people
### 4. Location Hashtags - Geographic targeting
### 5. Trending/Viral Hashtags - Currently popular
### 6. Content Descriptor Hashtags - Describe post type

## HASHTAG SIZE STRATEGY
### Large/Popular (1M+ posts) - High visibility, high competition, use 1-2
### Medium (100K-1M posts) - Good balance, use 3-5
### Small/Niche (10K-100K posts) - Lower competition, use 2-4
### Micro/Emerging (<10K posts) - Very targeted, use 1-2

## PLATFORM-SPECIFIC STRATEGIES
### Instagram: Optimal 5-10, max 30
### Twitter/X: Optimal 1-2
### LinkedIn: Optimal 3-5
### TikTok: Optimal 3-5

Platform: {{platform}}
Hashtag Count: {{hashtag_count}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Campagnes de marketing de contenu',
        description: 'Les marketeurs social media utilisent le Générateur de Hashtag pour optimiser leur stratégie de hashtags et maximiser la visibilité du contenu.',
      },
      {
        title: 'Amélioration du SEO social media',
        description: 'Les entreprises et individus utilisent le générateur pour améliorer la découvrabilité sur les réseaux sociaux et étendre leur présence en ligne.',
      },
      {
        title: 'Maximisation de la portée des influenceurs',
        description: 'Les influenceurs utilisent le générateur pour découvrir des hashtags tendance pertinents dans leur niche de contenu.',
      },
    ],
    faqs: [
      { question: 'Combien de hashtags utiliser ?', answer: 'Recommandations par plateforme : Instagram 5-10 (max 30), Twitter 1-2, LinkedIn 3-5, TikTok 3-5. La qualité et la pertinence comptent plus que la quantité.' },
      { question: 'Qu\'est-ce qui rend un hashtag efficace ?', answer: 'Les hashtags efficaces sont pertinents pour votre contenu, utilisés par votre audience cible, ont une compétition gérable et aident à catégoriser votre contenu.' },
      { question: 'Dois-je utiliser des hashtags populaires ou de niche ?', answer: 'Utilisez un mélange des deux. Les hashtags populaires (1M+ posts) offrent une large visibilité mais haute compétition. Les hashtags de niche offrent une portée plus ciblée.' },
      { question: 'Les hashtags peuvent-ils nuire à mon engagement ?', answer: 'Oui, utiliser trop de hashtags, des hashtags non pertinents, ou des hashtags bannis/shadowbannés peut nuire à l\'engagement.' },
      { question: 'Où placer les hashtags dans mes posts ?', answer: 'Instagram : Dans la légende ou premier commentaire. Twitter : Intégrés naturellement dans le texte. LinkedIn : À la fin de votre post. TikTok : Dans la légende.' },
    ],
  },

  'generateur-hashtag-instagram': {
    slug: 'generateur-hashtag-instagram',
    name: 'Générateur de Hashtag Instagram',
    title: 'Générateur de hashtags Instagram gratuit',
    description: 'Générez les hashtags Instagram parfaits pour booster votre portée et engagement. Notre IA crée des ensembles de hashtags stratégiques adaptés à votre contenu et niche.',
    metaDescription: 'Générez les hashtags Instagram parfaits pour booster votre portée et engagement. Notre IA crée des ensembles de hashtags stratégiques adaptés à votre contenu et niche.',
    inputLabel: 'Décrivez votre post ou niche...',
    inputPlaceholder: 'ex. Photographie de voyage de Bali avec plages et temples',
    buttonText: 'Générer des Hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'hashtag_count',
        label: 'Nombre de hashtags',
        choices: ['5 hashtags', '10 hashtags', '15 hashtags', '20 hashtags', '30 hashtags'],
        default: '10 hashtags',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'Type de contenu',
        choices: ['Post de Feed', 'Reels', 'Carrousel', 'Story'],
        default: 'Post de Feed',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram growth strategist specializing in hashtag research and optimization for the Instagram platform. Your role is to generate strategic hashtag sets that maximize post reach and discoverability.

## INSTAGRAM HASHTAG FUNDAMENTALS
- Maximum 30 hashtags per post
- Optimal range: 5-10 relevant hashtags
- Can be placed in caption or first comment
- Instagram algorithm uses hashtags for content categorization

## HASHTAG STRATEGY TIERS
### Tier 1: Broad Reach (1M+ posts) - Use 1-2 maximum
### Tier 2: Industry Standard (100K-1M posts) - Use 3-5
### Tier 3: Niche Specific (10K-100K posts) - Use 3-4
### Tier 4: Micro/Community (<10K posts) - Use 1-2

## CONTENT-TYPE SPECIFIC HASHTAGS
### For Reels: #Reels, #ReelsViral, trending audio hashtags
### For Carousels: #CarouselPost, educational content tags
### For Feed Posts: Full hashtag strategy applicable

Hashtag Count: {{hashtag_count}}
Content Type: {{content_type}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Marketing sur les réseaux sociaux',
        description: 'Les marketeurs utilisent le Générateur de Hashtag Instagram pour optimiser leur stratégie de hashtags et augmenter la visibilité et découvrabilité des posts de marque.',
      },
      {
        title: 'Catégorisation et organisation du contenu',
        description: 'Les créateurs de contenu utilisent le générateur pour catégoriser et organiser leur contenu de manière appropriée.',
      },
      {
        title: 'Collaboration et partenariats influenceurs',
        description: 'Les influenceurs et marques utilisent le générateur pour créer des hashtags collaboratifs uniques pour les partenariats ou campagnes sponsorisées.',
      },
    ],
    faqs: [
      { question: 'Combien de hashtags utiliser sur Instagram ?', answer: 'Bien qu\'Instagram permette jusqu\'à 30 hashtags, les recherches suggèrent que 5-10 hashtags pertinents performent souvent mieux. La qualité et la pertinence comptent plus que la quantité.' },
      { question: 'Dois-je mettre les hashtags dans la légende ou les commentaires ?', answer: 'Les deux méthodes fonctionnent efficacement. Le placement en légende garde tout ensemble, tandis que le placement en commentaire garde les légendes plus propres.' },
      { question: 'Quels sont les meilleurs hashtags pour la croissance Instagram ?', answer: 'Les meilleurs hashtags sont ceux pertinents à votre contenu spécifique et utilisés par votre audience cible. Mélangez hashtags larges (100K-1M posts) et hashtags de niche (10K-100K posts).' },
      { question: 'Qu\'est-ce qu\'un hashtag shadowbanné ?', answer: 'Certains hashtags sont restreints par Instagram en raison de spam ou d\'utilisation inappropriée. Les utiliser peut limiter la visibilité de votre contenu.' },
      { question: 'Les hashtags fonctionnent-ils pour les Reels Instagram ?', answer: 'Oui, les hashtags aident la découvrabilité des Reels. Utilisez 3-5 hashtags pertinents incluant des tags spécifiques aux Reels, hashtags tendance et tags de niche.' },
    ],
  },

  'generateur-nom-utilisateur-reseaux-sociaux': {
    slug: 'generateur-nom-utilisateur-reseaux-sociaux',
    name: 'Générateur de Nom d\'Utilisateur Réseaux Sociaux',
    title: 'Générateur de nom d\'utilisateur de médias sociaux par IA gratuit',
    description: 'Générez des noms d\'utilisateur uniques et mémorables pour vos profils de réseaux sociaux. Notre IA crée des idées personnalisées qui fonctionnent sur Instagram, TikTok, Twitter et plus.',
    metaDescription: 'Générez des noms d\'utilisateur uniques et mémorables pour vos profils de réseaux sociaux. Notre IA crée des idées personnalisées qui fonctionnent sur Instagram, TikTok, Twitter et plus.',
    inputLabel: 'Décrivez-vous ou votre marque...',
    inputPlaceholder: 'ex. Coach fitness nommée Sarah spécialisée en yoga et méditation',
    buttonText: 'Générer des Noms d\'Utilisateur',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Style du nom d\'utilisateur',
        choices: ['Professionnel', 'Créatif/Ludique', 'Minimal', 'Axé Niche', 'Basé sur le Nom'],
        default: 'Créatif/Ludique',
        type: 'select',
      },
      {
        name: 'platform',
        label: 'Plateforme principale',
        choices: ['Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'Multi-Plateforme'],
        default: 'Multi-Plateforme',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert personal branding consultant specializing in creating memorable, effective usernames for social media platforms. Your role is to generate unique, available-friendly username ideas that reflect identity and work across multiple platforms.

## USERNAME CREATION PRINCIPLES
1. **Memorability**: Easy to recall and spell
2. **Simplicity**: Short and clean (ideally under 15 characters)
3. **Relevance**: Reflects identity, niche, or brand
4. **Availability**: Unique enough to find across platforms
5. **Professionalism**: Appropriate for intended audience
6. **Longevity**: Won't feel dated as trends change

## USERNAME PATTERNS AND STYLES
### Pattern 1: Name + Descriptor (JohnDesigns, SarahCooks)
### Pattern 2: Name + Numbers (Sarah2023, Mike_87)
### Pattern 3: Descriptive Handle (TheMinimalistHome, DailyDesignTips)
### Pattern 4: Creative Wordplay (FitWithBritt, CookWithKook)
### Pattern 5: Abbreviated/Acronym (JKPhotos, SMMarketingPro)
### Pattern 6: Location + Niche (NYCFoodie, LAFitness)
### Pattern 7: Action-Based (GrowYourBrand, LearnToCode)

Style: {{style}}
Platform: {{platform}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Branding et comptes business',
        description: 'Les entreprises et individus établissant leur présence en ligne utilisent le générateur pour créer des noms d\'utilisateur cohérents et reconnaissables sur toutes les plateformes.',
      },
      {
        title: 'Créateurs de contenu et influenceurs',
        description: 'Les créateurs de contenu ont besoin de noms d\'utilisateur distinctifs qui reflètent leur niche ou marque et sont faciles à retenir.',
      },
      {
        title: 'Personal et professional branding',
        description: 'Les individus construisant leur marque personnelle utilisent le générateur pour créer des noms d\'utilisateur uniques et professionnels.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qui fait un bon nom d\'utilisateur de réseau social ?', answer: 'Les bons noms d\'utilisateur sont courts (moins de 15 caractères idéalement), faciles à épeler et prononcer, mémorables, pertinents pour votre identité ou niche, et disponibles sur les plateformes.' },
      { question: 'Mon nom d\'utilisateur doit-il être mon vrai nom ?', answer: 'Cela dépend de vos objectifs. Les vrais noms fonctionnent bien pour le personal branding et le networking professionnel. Les noms créatifs fonctionnent mieux pour les créateurs de contenu.' },
      { question: 'Dois-je utiliser le même nom d\'utilisateur sur toutes les plateformes ?', answer: 'Idéalement, oui. Des noms d\'utilisateur cohérents vous rendent plus facile à trouver et renforcent la reconnaissance de marque.' },
      { question: 'Que faire si mon nom d\'utilisateur préféré est déjà pris ?', answer: 'Essayez des variations : ajoutez des underscores (name_creates), des préfixes (the.real.name), des suffixes (namehq), ou combinez avec des descripteurs pertinents.' },
      { question: 'Dois-je utiliser des chiffres dans mon nom d\'utilisateur ?', answer: 'Utilisez les chiffres stratégiquement s\'ils ont un sens (année de naissance, année de fondation) plutôt qu\'au hasard. Les chiffres aléatoires peuvent rendre les noms moins mémorables.' },
    ],
  },

  'generateur-nom-instagram': {
    slug: 'generateur-nom-instagram',
    name: 'Générateur de Nom Instagram',
    title: 'Générateur de noms Instagram gratuit',
    description: 'Générez des noms d\'utilisateur Instagram uniques qui se démarquent. Notre IA crée des handles mémorables et en phase avec votre marque qui vous aident à vous faire remarquer.',
    metaDescription: 'Générez des noms d\'utilisateur Instagram uniques qui se démarquent. Notre IA crée des handles mémorables et en phase avec votre marque qui vous aident à vous faire remarquer.',
    inputLabel: 'Décrivez-vous ou votre marque...',
    inputPlaceholder: 'ex. Food blogueuse nommée Emma qui partage des recettes saines',
    buttonText: 'Générer des Noms',
    maxLength: 2048,
    options: [
      {
        name: 'account_type',
        label: 'Type de compte',
        choices: ['Marque Personnelle', 'Créateur de Contenu', 'Business/Marque', 'Influenceur', 'Artiste/Créatif'],
        default: 'Créateur de Contenu',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Style du nom',
        choices: ['Professionnel', 'Créatif/Fun', 'Minimal', 'Tendance', 'Classique'],
        default: 'Créatif/Fun',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram branding consultant specializing in creating unique, memorable Instagram usernames. Your role is to generate username ideas optimized for Instagram's platform requirements.

## INSTAGRAM USERNAME REQUIREMENTS
- Maximum 30 characters
- Allowed: letters, numbers, periods, underscores
- No consecutive periods
- Case insensitive (displays as typed)
- Must be unique on platform
- Cannot start/end with period

## INSTAGRAM USERNAME CATEGORIES
### Personal Branding - First + Last name variations, Name + profession
### Content Creator - Niche-focused names, Topic + personality blend
### Business/Brand - Company name adaptations, Professional variations
### Influencer - Personal brand names, Lifestyle descriptors
### Artist/Creative - Art form references, Creative wordplay

## EFFECTIVE INSTAGRAM NAME PATTERNS
### Pattern 1: the + name (the.wanderer, thefoodiegirl)
### Pattern 2: name + does/creates/makes (sarah.creates)
### Pattern 3: name + hq/co/studio (designhq, studio.jane)
### Pattern 4: im/its/hey + name (imjanesmith, its.mike.travel)
### Pattern 5: name + niche (sarahwellness, mikephotography)

Account Type: {{account_type}}
Style: {{style}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Personal branding',
        description: 'Les individus cherchant à construire une marque personnelle sur Instagram utilisent le générateur pour trouver des noms d\'utilisateur uniques et accrocheurs qui reflètent leur passion et expertise.',
      },
      {
        title: 'Promotion business et produit',
        description: 'Les entreprises et entrepreneurs utilisent le générateur pour trouver des noms de marque pertinents qui s\'alignent avec l\'identité et les valeurs de l\'entreprise.',
      },
      {
        title: 'Campagnes marketing sur les réseaux sociaux',
        description: 'Les marketeurs créant des comptes spécifiques à des campagnes utilisent le générateur pour développer rapidement des noms d\'utilisateur accrocheurs.',
      },
    ],
    faqs: [
      { question: 'Quelles sont les exigences de nom d\'utilisateur Instagram ?', answer: 'Les noms d\'utilisateur Instagram peuvent faire jusqu\'à 30 caractères, utilisant uniquement lettres, chiffres, points et underscores. Pas de points consécutifs, et les noms ne peuvent pas commencer ou finir par un point.' },
      { question: 'Comment savoir si un nom d\'utilisateur est disponible ?', answer: 'Vérifiez directement sur Instagram en cherchant ou en tentant de créer un compte. Des outils tiers peuvent aussi vérifier la disponibilité sur plusieurs plateformes.' },
      { question: 'Vaut-il mieux utiliser mon vrai nom ou un nom créatif ?', answer: 'Cela dépend de vos objectifs. Les vrais noms fonctionnent bien pour le personal branding professionnel. Les noms créatifs fonctionnent mieux pour les créateurs de contenu de niche.' },
      { question: 'Puis-je changer mon nom d\'utilisateur Instagram ?', answer: 'Oui, vous pouvez le changer dans les paramètres. Cependant, les anciens liens seront cassés, et les changements fréquents peuvent confondre les abonnés.' },
      { question: 'Dois-je inclure ma niche dans mon nom d\'utilisateur ?', answer: 'Inclure votre niche (comme photographie, fitness, ou food) aide la recherchabilité et communique immédiatement votre focus. Gardez-le assez général pour l\'évolution du contenu.' },
    ],
  },

  'generateur-hashtag-tiktok': {
    slug: 'generateur-hashtag-tiktok',
    name: 'Générateur de Hashtag TikTok',
    title: 'Générateur de hashtag IA pour TikTok gratuit',
    description: 'Générez des hashtags TikTok tendance qui boostent votre visibilité. Notre IA crée des combinaisons de hashtags stratégiques pour aider vos vidéos à atteindre la page Pour Toi.',
    metaDescription: 'Générez des hashtags TikTok tendance qui boostent votre visibilité. Notre IA crée des combinaisons de hashtags stratégiques pour aider vos vidéos à atteindre la page Pour Toi.',
    inputLabel: 'Décrivez votre vidéo TikTok...',
    inputPlaceholder: 'ex. Vidéo de danse utilisant un audio tendance avec transition d\'outfit',
    buttonText: 'Générer des Hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: 'Type de contenu',
        choices: ['Divertissement/Danse', 'Éducatif', 'Comédie/Sketch', 'Lifestyle/Vlog', 'Produit/Review', 'Tutoriel/How-To'],
        default: 'Divertissement/Danse',
        type: 'select',
      },
      {
        name: 'hashtag_count',
        label: 'Nombre de hashtags',
        choices: ['3 hashtags', '5 hashtags', '7 hashtags'],
        default: '5 hashtags',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok growth strategist specializing in hashtag optimization for the TikTok platform. Your role is to generate strategic hashtag sets that maximize video visibility and reach the For You Page (FYP).

## TIKTOK HASHTAG FUNDAMENTALS
- Caption limit: 4,000 characters
- Optimal hashtags: 3-5 per video
- Hashtags heavily influence FYP distribution
- Trending hashtags change rapidly
- Sounds/audio also affect discovery

## TIKTOK HASHTAG CATEGORIES
### 1. FYP/Viral Hashtags - #FYP, #ForYou, #Viral (use 1 max)
### 2. Trending/Challenge Hashtags - Currently popular challenges
### 3. Niche/Community Hashtags - #BookTok, #FitTok, #FoodTok
### 4. Content Type Hashtags - #Tutorial, #Storytime, #GRWM, #POV
### 5. Sound/Audio Hashtags - Related to trending sounds

## TIKTOK NICHE COMMUNITIES
**BookTok**: #BookTok #BookRecommendations
**FitTok**: #FitTok #WorkoutRoutine #GymTok
**FoodTok**: #FoodTok #Cooking #Recipe
**CleanTok**: #CleanTok #CleaningMotivation
**BeautyTok**: #BeautyTok #MakeupTutorial #GRWM

Content Type: {{content_type}}
Hashtag Count: {{hashtag_count}}

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Optimisation de stratégie de contenu TikTok',
        description: 'Les community managers et créateurs de contenu utilisent le Générateur de Hashtag TikTok pour optimiser leur stratégie de contenu et atteindre des audiences plus larges.',
      },
      {
        title: 'Campagnes de marketing d\'influence',
        description: 'Les marques et agences marketing utilisent le générateur pour identifier les hashtags populaires dans leur industrie pour les campagnes d\'influence.',
      },
      {
        title: 'Analyse de la concurrence et benchmarking',
        description: 'Les marketeurs analysent les stratégies de hashtags des concurrents pour découvrir les tags couramment utilisés dans leur industrie.',
      },
    ],
    faqs: [
      { question: 'Combien de hashtags utiliser sur TikTok ?', answer: 'TikTok recommande 3-5 hashtags pertinents par vidéo. En utiliser trop peut paraître spam et diluer votre ciblage. La qualité et la pertinence comptent plus que la quantité.' },
      { question: 'Les hashtags comptent-ils vraiment pour la portée TikTok ?', answer: 'Oui, les hashtags aident l\'algorithme TikTok à catégoriser et distribuer votre contenu aux spectateurs intéressés. C\'est l\'un des facteurs affectant si votre vidéo atteint la page Pour Toi.' },
      { question: 'Dois-je toujours utiliser #FYP ou #ForYou ?', answer: 'Utiliser un hashtag FYP peut aider, mais ce n\'est pas magique. L\'algorithme priorise la qualité du contenu et l\'engagement par rapport aux hashtags seuls.' },
      { question: 'Que sont les hashtags de communauté TikTok ?', answer: 'Les hashtags de communauté comme #BookTok, #FitTok, ou #FoodTok connectent des communautés de niche sur TikTok et aident à atteindre des audiences engagées.' },
      { question: 'Les hashtags TikTok fonctionnent-ils différemment des hashtags Instagram ?', answer: 'Oui. L\'algorithme TikTok pèse fortement les signaux d\'engagement, et les hashtags fonctionnent avec les sons, le taux de complétion et d\'autres facteurs. Les hashtags TikTok tendent et disparaissent aussi plus vite.' },
    ],
  },

  // ==================== BATCH 5 (Tools 41-45) ====================

  'generateur-nom-utilisateur-tiktok': {
    slug: 'generateur-nom-utilisateur-tiktok',
    name: 'TikTok Username Generator',
    title: 'Générateur de nom d\'utilisateur IA pour TikTok gratuit',
    description: 'Générez des noms d\'utilisateur TikTok uniques qui correspondent à votre style. Notre IA crée des pseudos mémorables et tendance qui vous aident à vous démarquer et à développer votre audience.',
    metaDescription: 'Générez des noms d\'utilisateur TikTok uniques qui correspondent à votre style. Notre IA crée des pseudos mémorables et tendance qui vous aident à vous démarquer et à développer votre audience.',
    inputLabel: 'Décrivez-vous ou votre contenu...',
    inputPlaceholder: 'ex. Créateur de comédie qui fait des sketchs sur la vie de bureau',
    buttonText: 'Générer des Noms d\'Utilisateur',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Style de nom d\'utilisateur',
        choices: ['Tendance/Fun', 'Professionnel', 'Axé sur la Niche', 'Axé sur la Personnalité', 'Basé sur le Prénom'],
        default: 'Tendance/Fun',
        type: 'select',
      },
      {
        name: 'content_niche',
        label: 'Niche de contenu',
        choices: ['Divertissement/Comédie', 'Fitness/Santé', 'Beauté/Mode', 'Cuisine/Food', 'Éducation/Conseils', 'Lifestyle/Vlog', 'Autre'],
        default: 'Divertissement/Comédie',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok personal branding consultant specializing in creating memorable, discoverable usernames for the TikTok platform. Your role is to generate username ideas that resonate with TikTok's young, trend-aware audience while reflecting creator identity.
## TIKTOK USERNAME REQUIREMENTS
- Maximum 24 characters
- Allowed: letters, numbers, underscores, periods
- Must be unique on platform
- Case insensitive
- Can be changed (with limitations)
## TIKTOK USERNAME CHARACTERISTICS
**Platform Culture:**
- Casual and fun tone
- Personality-forward
- Trend-aware
- Often playful or witty
- Less corporate than LinkedIn
**Successful Patterns:**
- Short and punchy
- Easy to remember from quick videos
- Sounds good when spoken
- Works in duets and stitches
- Reflects content niche
## TIKTOK USERNAME STYLES
### 1. Name-Based
- First name + descriptor
- Name + niche
- Examples: emmacooks, mikefitness, sarahstyle
### 2. Niche-Focused
- Content description handle
- What you post about
- Examples: dailyrecipes, fittips, budgethacks
### 3. Personality-Driven
- Character or vibe focused
- Personality descriptors
- Examples: chaoticcooking, anxiouschef, lazyworkouts
### 4. Creator Brand
- Established brand names
- Business identity
- Examples: [brandname]official, [business]hq
### 5. Playful/Trendy
- Wordplay and puns
- Current slang integration
- Examples: chefmode, fitcheck, slaywithsarah
### 6. The[Niche][Person]
- Common TikTok pattern
- Examples: themealprepking, theplantgirl
## TIKTOK-SPECIFIC CONSIDERATIONS
1. **Speakability**: Easy to say in videos ("follow me @...")
2. **Searchability**: Contains words audience would search
3. **Duet/Stitch Friendly**: Looks good when tagged
4. **Age Appropriate**: Resonates with TikTok demographics
5. **Trend Adaptable**: Won't feel dated quickly
6. **Cross-Platform Potential**: Available on other platforms
## AVAILABILITY STRATEGIES
If common names taken:
- Add underscores strategically
- Include content niche
- Use number sparingly (meaningful ones)
- Try "the" or "its" prefix
- Add location indicator
- Use action verbs
## NICHE-SPECIFIC USERNAME IDEAS
**Fitness**: fitby[name], [name]lifts, strongwith[name]
**Food**: [name]cooks, hungry[name], chef[name]
**Beauty**: glam[name], [name]glows, beautyby[name]
**Comedy**: [name]laughs, funny[name], lolwith[name]
**Education**: learn[topic], [name]explains, [subject]teacher
Style: {{style}}
Content Niche: {{content_niche}}
## OUTPUT FORMAT
Generate usernames that are:
- TikTok compliant
- Culturally relevant
- Easy to pronounce
- Memorable from quick exposure
- Provided with style category
- Meaning explanation if requested

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Création d\'identité de nouveau créateur',
        description: 'Les nouveaux créateurs TikTok utilisent le Générateur de Nom d\'Utilisateur pour établir leur identité sur la plateforme. En saisissant leur focus de contenu, traits de personnalité et centres d\'intérêt, l\'outil génère des idées de noms qui résonnent avec l\'audience TikTok et reflètent leur marque créateur unique.',
      },
      {
        title: 'Branding de niche de contenu',
        description: 'Les créateurs se concentrant sur des niches spécifiques comme le fitness, la cuisine, la comédie ou la beauté utilisent le générateur pour trouver des noms qui communiquent immédiatement leur focus de contenu. Un nom clair lié à la niche aide à attirer la bonne audience et établit l\'autorité dans cet espace.',
      },
      {
        title: 'Lancement TikTok de marque et entreprise',
        description: 'Les entreprises lançant une présence TikTok utilisent le générateur pour trouver des noms qui s\'alignent avec leur marque tout en s\'adaptant à la culture casual et créative de TikTok. L\'outil aide à créer des pseudos professionnels mais accessibles pour l\'audience de la plateforme.',
      },
    ],
    faqs: [
      { question: 'Quelles sont les exigences de nom d\'utilisateur TikTok ?', answer: 'Les noms d\'utilisateur TikTok peuvent avoir jusqu\'à 24 caractères, utilisant lettres, chiffres, underscores et points. Ils doivent être uniques, sont insensibles à la casse, et peuvent être changés (avec un délai d\'attente entre les changements).' },
      { question: 'Puis-je changer mon nom d\'utilisateur TikTok ?', answer: 'Oui, vous pouvez changer votre nom d\'utilisateur TikTok dans les paramètres. Cependant, il peut y avoir un délai d\'attente avant de pouvoir le changer à nouveau, et votre ancien nom devient disponible pour d\'autres.' },
      { question: 'Mon nom d\'utilisateur TikTok doit-il être drôle ou professionnel ?', answer: 'Ça dépend de votre contenu. La culture TikTok tend vers le casual et fun, donc même les créateurs professionnels utilisent souvent des noms accessibles. Alignez votre nom avec votre style de contenu et les attentes de votre audience cible.' },
      { question: 'Comment rendre mon nom d\'utilisateur TikTok mémorable ?', answer: 'Gardez-le court, facile à prononcer, et lié à votre contenu. L\'allitération, les rimes ou les jeux de mots malins aident. Il doit être facile à retenir après avoir regardé une seule vidéo.' },
      { question: 'Dois-je utiliser mon vrai nom sur TikTok ?', answer: 'Utiliser votre vrai nom peut aider pour le personal branding et la reconnaissance multi-plateforme. Cependant, les pseudos créatifs fonctionnent souvent mieux pour les comptes axés sur le contenu et offrent plus de flexibilité.' },
      { question: 'Que faire si mon nom d\'utilisateur préféré est pris ?', answer: 'Essayez d\'ajouter votre niche (mikefitness), utiliser des underscores (mike_creates), ajouter "the" (themikefitness), ou inclure un descripteur significatif qui vous différencie.' },
      { question: 'Mon nom d\'utilisateur TikTok doit-il correspondre à mon Instagram ?', answer: 'Des noms d\'utilisateur cohérents sur les plateformes aident les followers à vous trouver partout. Si votre nom préféré n\'est pas disponible sur les deux, utilisez des variations proches clairement connectées.' },
      { question: 'Les noms d\'utilisateur TikTok affectent-ils la découvrabilité ?', answer: 'Les noms contenant des mots-clés pertinents peuvent aider quand les utilisateurs recherchent des types de contenu. Cependant, la qualité du contenu et les hashtags comptent plus pour la découvrabilité globale sur TikTok.' },
      { question: 'Quelle est l\'importance de mon nom d\'utilisateur pour la croissance TikTok ?', answer: 'Votre nom est votre première impression et identité de marque, mais la qualité du contenu compte plus pour la croissance. Un bon nom aide, mais c\'est le contenu de qualité qui fait réellement grandir votre audience.' },
      { question: 'Dois-je inclure des chiffres dans mon nom d\'utilisateur TikTok ?', answer: 'Évitez les chiffres aléatoires qui semblent non intentionnels. Les chiffres significatifs (année de naissance, année de création) peuvent fonctionner s\'ils ajoutent à votre marque, mais les noms uniquement avec des lettres semblent généralement plus professionnels.' },
    ],
  },

  'generateur-description-chaine-youtube': {
    slug: 'generateur-description-chaine-youtube',
    name: 'YouTube Channel Description Generator',
    title: 'Générateur gratuit de descriptions de chaînes YouTube',
    description: 'Créez une description de chaîne YouTube convaincante qui attire les abonnés. Notre IA génère des descriptions optimisées SEO qui mettent en valeur votre contenu et développent votre audience.',
    metaDescription: 'Créez une description de chaîne YouTube convaincante qui attire les abonnés. Notre IA génère des descriptions optimisées SEO qui mettent en valeur votre contenu et développent votre audience.',
    inputLabel: 'Décrivez votre chaîne YouTube...',
    inputPlaceholder: 'ex. Chaîne de tests tech axée sur les smartphones et gadgets à petit budget',
    buttonText: 'Générer la Description',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ton de la chaîne',
        choices: ['Professionnel', 'Amical', 'Enthousiaste', 'Informatif', 'Décontracté'],
        default: 'Amical',
        type: 'select',
      },
      {
        name: 'channel_type',
        label: 'Type de chaîne',
        choices: ['Éducatif/Tutoriel', 'Divertissement', 'Vlog/Lifestyle', 'Gaming', 'Business/Marque', 'Review/Commentaire'],
        default: 'Éducatif/Tutoriel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube strategist specializing in channel optimization and discoverability. Your role is to create compelling channel descriptions that clearly communicate channel value, improve searchability, and convert visitors into subscribers.
## YOUTUBE CHANNEL DESCRIPTION STRUCTURE
**Character Limit**: 1,000 characters
**Visible on**:
- About page (full description)
- Channel banner area (first ~200 characters)
- Search results (truncated)
## OPTIMAL DESCRIPTION ELEMENTS
### 1. Hook/Value Statement (First 1-2 sentences)
- What the channel is about
- What viewers will get
- Why they should subscribe
- Appears in search previews
### 2. Content Overview (Middle section)
- Types of videos you create
- Upload schedule if consistent
- Topics you cover
- What makes you different
### 3. Creator/Brand Info (Brief)
- Who you are
- Relevant credentials
- Why you're qualified
### 4. Call-to-Action (End)
- Subscribe invitation
- Notification reminder
- Social media links mention
### 5. Contact Information
- Business email
- Social media handles
- Website link
## DESCRIPTION TEMPLATES
**Template 1: Creator-Focused**
Welcome to [Channel Name]! I'm [Name], and I help [audience] [achieve what/learn what].
Here you'll find [content type 1], [content type 2], and [content type 3]. I upload [schedule].
Subscribe and hit the bell to join [number or growing] viewers on their [journey/goal].
📧 Business: [email]
📱 [Social platform]: [handle]
**Template 2: Topic/Niche-Focused**
Your destination for [topic/niche] content!
Whether you're looking for [type 1], [type 2], or [type 3], you'll find it here. New videos every [schedule].
Why subscribe? [Unique value proposition or channel differentiator].
Connect:
📧 [email]
🔗 [website]
**Template 3: Business/Brand**
[Brand/Company Name] – [Tagline or mission statement]
We create [content type] to help [audience] with [problem/goal]. Our videos include [format 1], [format 2], and [format 3].
[Brief company description or credentials]
Subscribe for [benefit/schedule].
📧 Business inquiries: [email]
🌐 [website]
## YOUTUBE SEO CONSIDERATIONS
- Include relevant keywords naturally
- Front-load important information
- Use keywords your audience searches for
- Don't keyword stuff
- Update regularly to stay current
## TONE OPTIONS
### IF tone = "Professional"
- Polished, authoritative, business-appropriate
### IF tone = "Friendly"
- Warm, inviting, community-focused
### IF tone = "Enthusiastic"
- Energetic, passionate, exciting
### IF tone = "Informative"
- Clear, educational, straightforward
### IF tone = "Casual"
- Relaxed, approachable, conversational
Tone: {{tone}}
Channel Type: {{channel_type}}
## OUTPUT REQUIREMENTS
Generate descriptions that:
- Fit within 1,000 characters
- Lead with key value proposition
- Include clear content overview
- Have appropriate CTAs
- Are SEO-friendly
- Match the channel's tone

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Optimisation SEO de chaîne',
        description: 'Les YouTubeurs utilisent le Générateur de Description de Chaîne pour créer des descriptions riches en mots-clés qui améliorent la visibilité dans les résultats de recherche YouTube et Google. En saisissant le focus de la chaîne, les mots-clés cibles et les types de contenu, l\'outil génère des descriptions optimisées qui aident les spectateurs potentiels à découvrir la chaîne.',
      },
      {
        title: 'Amélioration de la conversion en abonnés',
        description: 'Les créateurs cherchant à convertir les visiteurs en abonnés utilisent le générateur pour créer des descriptions convaincantes qui expliquent clairement la valeur de la chaîne. Des descriptions bien rédigées qui communiquent les propositions de valeur uniques et fixent des attentes claires mènent à des taux d\'abonnement plus élevés.',
      },
      {
        title: 'Configuration efficace de chaîne',
        description: 'Les nouveaux YouTubeurs et entreprises lançant des chaînes utilisent le générateur pour créer rapidement des descriptions professionnelles. Cela économise du temps pendant la configuration et garantit que la page À propos fait une forte première impression dès le premier jour.',
      },
    ],
    faqs: [
      { question: 'Quelle longueur doit avoir une description de chaîne YouTube ?', answer: 'YouTube permet jusqu\'à 1 000 caractères pour les descriptions de chaîne. Utilisez assez pour transmettre clairement votre proposition de valeur, mais ne remplissez pas avec du contenu inutile. Les descriptions les plus efficaces font 500-800 caractères.' },
      { question: 'Que dois-je inclure dans ma description de chaîne ?', answer: 'Incluez : de quoi parle votre chaîne, ce que les spectateurs apprendront ou vivront, votre calendrier de publication, qui vous êtes et vos références, un appel à l\'action pour s\'abonner, et des informations de contact pour les demandes professionnelles.' },
      { question: 'Comment la description de chaîne affecte-t-elle le SEO ?', answer: 'Les descriptions de chaîne aident YouTube à comprendre votre contenu pour les recommandations et la recherche. Incluez des mots-clés pertinents naturellement pour améliorer la découvrabilité. Les 100-150 premiers caractères sont particulièrement importants pour les aperçus dans les résultats de recherche.' },
      { question: 'Comment optimiser ma description pour la recherche ?', answer: 'Incluez des mots-clés que votre audience cible recherche, mettez les informations importantes en premier, utilisez un langage naturel (pas de bourrage de mots-clés), et mettez à jour régulièrement pour garder le contenu frais et pertinent.' },
      { question: 'Dois-je inclure mon calendrier de publication ?', answer: 'Oui, si vous avez un calendrier cohérent. Indiquer "Nouvelles vidéos tous les mardis et vendredis" fixe les attentes des spectateurs et peut encourager les abonnements de ceux qui veulent du contenu régulier.' },
      { question: 'Quel appel à l\'action inclure ?', answer: 'Invitez les spectateurs à s\'abonner et activer les notifications. Soyez spécifique sur ce qu\'ils obtiendront. Exemple : "Abonnez-vous et activez la cloche pour des tutoriels de cuisine hebdomadaires qui simplifient la préparation du dîner."' },
      { question: 'Dois-je inclure mon email dans la description ?', answer: 'Oui, si vous êtes ouvert aux demandes professionnelles, collaborations ou sponsoring. Une adresse email professionnelle rend votre chaîne plus établie et accessible aux partenaires potentiels.' },
      { question: 'À quelle fréquence mettre à jour ma description de chaîne ?', answer: 'Mettez à jour chaque fois que votre focus de contenu, calendrier de publication ou orientation de chaîne change significativement. Révisez trimestriellement pour vous assurer que les informations restent actuelles et pertinentes.' },
      { question: 'Ma description de chaîne peut-elle m\'aider à obtenir des sponsors ?', answer: 'Oui. Une description professionnelle qui indique clairement votre niche, audience et engagement rend votre chaîne plus attractive pour les sponsors potentiels recherchant des créateurs pertinents.' },
      { question: 'Ma description de chaîne doit-elle correspondre au ton de mes vidéos ?', answer: 'Oui, votre description doit refléter la personnalité et le style de contenu de votre chaîne. Une chaîne de comédie doit sembler fun et engageante ; une chaîne d\'éducation business doit sembler professionnelle et autoritaire.' },
    ],
  },

  'generateur-description-video-youtube': {
    slug: 'generateur-description-video-youtube',
    name: 'YouTube Video Description Generator',
    title: 'Générateur IA gratuit de descriptions de vidéos YouTube',
    description: 'Générez des descriptions YouTube optimisées SEO qui boostent les vues. Notre IA crée des descriptions convaincantes avec accroches, horodatages et mots-clés qui aident les vidéos à mieux se classer.',
    metaDescription: 'Générez des descriptions YouTube optimisées SEO qui boostent les vues. Notre IA crée des descriptions convaincantes avec accroches, horodatages et mots-clés qui aident les vidéos à mieux se classer.',
    inputLabel: 'Décrivez le contenu de votre vidéo...',
    inputPlaceholder: 'ex. Tutoriel sur comment éditer des photos dans Lightroom pour débutants',
    buttonText: 'Générer la Description',
    maxLength: 2048,
    options: [
      {
        name: 'video_type',
        label: 'Type de vidéo',
        choices: ['Tutoriel/Éducatif', 'Divertissement/Vlog', 'Review/Produit', 'Gaming', 'News/Commentaire', 'Musique/Performance'],
        default: 'Tutoriel/Éducatif',
        type: 'select',
      },
      {
        name: 'include_timestamps',
        label: 'Inclure modèle d\'horodatages',
        choices: ['Oui', 'Non'],
        default: 'Oui',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert YouTube SEO specialist and content strategist. Your role is to create compelling, optimized video descriptions that improve search rankings, provide value to viewers, and drive engagement actions like likes, subscribes, and clicks.
## YOUTUBE VIDEO DESCRIPTION STRUCTURE
**Character Limit**: 5,000 characters
**Visible Preview**: First ~100-200 characters shown before "show more"
**SEO Impact**: Descriptions affect search rankings and suggested video appearances
## OPTIMAL DESCRIPTION ANATOMY
### 1. Above-the-Fold (First 100-200 characters)
- Hook or key value statement
- Primary keywords included
- Reason to watch
- Appears in search results
### 2. Video Summary (Next 150-300 words)
- What the video covers
- Key topics or chapters
- What viewers will learn/see
- Additional context
### 3. Timestamps (If applicable)
- Chapter markers for longer videos
- Improves viewer experience
- Can appear in search results
- Format: 0:00 Introduction
### 4. Links Section
- Mentioned resources
- Product links
- Social media profiles
- Affiliate/sponsor disclosures
### 5. About/Boilerplate
- Brief channel description
- Subscribe CTA
- Regular links
### 6. Tags/Hashtags
- 3-5 relevant hashtags
- Placed at end
- First 3 appear above title
## DESCRIPTION TEMPLATES
**Template 1: Tutorial/Educational**
[Hook: What you'll learn and why it matters]
In this video, I'll show you [main topic]. You'll learn:
✅ [Key point 1]
✅ [Key point 2]
✅ [Key point 3]
Timestamps:
0:00 Introduction
[time] [Topic]
[etc.]
🔗 Resources mentioned:
[Link 1]
[Link 2]
📺 Related videos:
[Related video link]
👋 About [Channel Name]:
[Brief channel description]
Subscribe for more [content type]: [subscribe link]
#hashtag1 #hashtag2 #hashtag3
**Template 2: Entertainment/Vlog**
[Engaging hook about what happens in the video]
[Brief context or story setup]
Don't forget to LIKE and SUBSCRIBE if you enjoyed!
🎬 Featured in this video:
[Person/thing 1]: [link/handle]
[etc.]
📱 Follow me:
Instagram: [link]
TikTok: [link]
Twitter: [link]
📧 Business inquiries: [email]
#hashtag1 #hashtag2 #hashtag3
**Template 3: Review/Product**
[Product name] Review - [Key verdict or hook]
[What's covered in the review and why it matters]
⏱ Timestamps:
0:00 Introduction
[time] Unboxing
[time] Features
[time] Performance
[time] Verdict
🛒 Where to buy:
[Affiliate link with disclosure]
[FTC disclosure if applicable]
📺 More reviews: [Playlist link]
#hashtag1 #hashtag2 #hashtag3
## SEO OPTIMIZATION
- Include primary keyword in first 25 words
- Use secondary keywords naturally throughout
- Front-load important information
- Include variations and related terms
- Don't keyword stuff—write for humans
Video Type: {{video_type}}
Include Timestamps: {{include_timestamps}}
## OUTPUT OPTIONS
- Include/exclude timestamps template
- Include/exclude hashtags
- Concise vs. detailed format
- Specify link placeholders

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Descriptions vidéo optimisées SEO',
        description: 'Les YouTubeurs utilisent le Générateur de Description Vidéo pour créer des descriptions qui améliorent le classement et la visibilité dans les recherches. En saisissant le contenu vidéo, les mots-clés cibles et les points clés, l\'outil génère des descriptions SEO-friendly qui aident les vidéos à mieux se classer dans les résultats de recherche YouTube et Google.',
      },
      {
        title: 'Création efficace de descriptions en masse',
        description: 'Les créateurs gérant plusieurs vidéos utilisent le générateur pour rationaliser la création de descriptions. L\'outil permet de saisir des informations de base et génère des descriptions personnalisées pour des lots de vidéos, économisant du temps tout en maintenant la cohérence et la qualité du contenu.',
      },
      {
        title: 'Augmentation de l\'engagement des spectateurs',
        description: 'Les créateurs cherchant à améliorer les métriques d\'engagement utilisent le générateur pour créer des descriptions avec des appels à l\'action clairs, des horodatages utiles et des raisons convaincantes de regarder. Des descriptions bien structurées encouragent les likes, abonnements et clics vers le contenu associé.',
      },
    ],
    faqs: [
      { question: 'Quelle longueur doit avoir une description de vidéo YouTube ?', answer: 'YouTube permet jusqu\'à 5 000 caractères. Visez au moins 200-300 mots pour les avantages SEO. Les 100-200 premiers caractères sont les plus importants car ils apparaissent dans les résultats de recherche, donc mettez les informations clés en premier.' },
      { question: 'Que mettre dans la première ligne de ma description ?', answer: 'Incluez votre mot-clé principal et une accroche convaincante qui dit aux spectateurs ce qu\'ils obtiendront de la vidéo. Ce texte apparaît dans les résultats de recherche et affecte le taux de clics.' },
      { question: 'Comment fonctionnent les horodatages dans les descriptions ?', answer: 'Les horodatages créent des chapitres cliquables dans votre vidéo. Formatez comme "0:00 Introduction" avec l\'heure et le libellé. YouTube crée automatiquement des marqueurs de chapitre quand les horodatages sont correctement formatés.' },
      { question: 'Dois-je inclure des hashtags dans les descriptions vidéo ?', answer: 'Oui, 3-5 hashtags pertinents à la fin de votre description. Les trois premiers hashtags apparaissent au-dessus du titre de votre vidéo, augmentant la découvrabilité pour ces sujets.' },
      { question: 'Comment les descriptions vidéo affectent-elles le SEO ?', answer: 'Les descriptions aident YouTube à comprendre le contenu de votre vidéo pour la recherche et les recommandations. Inclure des mots-clés pertinents, des informations complètes et un formatage approprié améliore le potentiel de classement.' },
      { question: 'Chaque vidéo doit-elle avoir le même format de description ?', answer: 'Avoir une structure cohérente (comme vos infos de chaîne à la fin) est bien, mais adaptez la description principale au contenu spécifique de chaque vidéo. Évitez de copier des descriptions identiques entre vidéos.' },
      { question: 'Quels liens inclure dans les descriptions ?', answer: 'Incluez : les ressources mentionnées dans la vidéo, les liens produits pertinents (avec divulgation d\'affiliation si applicable), vos profils réseaux sociaux, le lien d\'abonnement, et les liens vers les vidéos ou playlists associées.' },
      { question: 'Comment divulguer correctement les liens affiliés ?', answer: 'Incluez une divulgation claire comme "Certains liens ci-dessus sont des liens affiliés, ce qui signifie que je reçois une commission si vous achetez sans coût supplémentaire pour vous." Placez ceci près des liens affiliés pour la transparence.' },
      { question: 'Dois-je écrire des descriptions différentes pour des vidéos similaires ?', answer: 'Oui, chaque vidéo doit avoir une description unique. Les descriptions en double entre vidéos peuvent nuire au SEO et ne fournissent pas de valeur spécifique aux spectateurs de chaque vidéo individuelle.' },
      { question: 'À quelle fréquence mettre à jour les descriptions vidéo ?', answer: 'Mettez à jour les descriptions quand les liens changent, le contenu devient obsolète, ou vous voulez ajouter de nouveaux CTAs. Pour le contenu evergreen, des mises à jour occasionnelles peuvent aussi rafraîchir la performance SEO.' },
    ],
  },

  'generateur-titre-video-youtube': {
    slug: 'generateur-titre-video-youtube',
    name: 'YouTube Video Title Generator',
    title: 'Générateur de titre de vidéo YouTube gratuit',
    description: 'Générez des titres YouTube accrocheurs qui obtiennent des clics. Notre IA crée des titres optimisés SEO qui attirent les spectateurs et boostent les vues de vos vidéos.',
    metaDescription: 'Générez des titres YouTube accrocheurs qui obtiennent des clics. Notre IA crée des titres optimisés SEO qui attirent les spectateurs et boostent les vues de vos vidéos.',
    inputLabel: 'Décrivez le sujet de votre vidéo...',
    inputPlaceholder: 'ex. Tutoriel Lightroom pour éditer des photos de portrait',
    buttonText: 'Générer des Titres',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Style de titre',
        choices: ['Informatif/Clair', 'Accrocheur/Clickbait', 'Question', 'Liste/Numéros', 'Comment faire'],
        default: 'Informatif/Clair',
        type: 'select',
      },
      {
        name: 'video_type',
        label: 'Type de vidéo',
        choices: ['Tutoriel/Éducatif', 'Divertissement/Vlog', 'Review/Produit', 'Gaming', 'News/Commentaire'],
        default: 'Tutoriel/Éducatif',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube content strategist specializing in creating compelling, click-worthy video titles. Your role is to generate title ideas that maximize click-through rates while accurately representing video content and following YouTube SEO best practices.
## YOUTUBE TITLE FUNDAMENTALS
**Character Limit**: 100 characters (60-70 recommended for full visibility)
**SEO Impact**: Titles are the primary ranking factor for YouTube search
**CTR Impact**: Titles directly affect whether viewers click on your video
## EFFECTIVE TITLE PATTERNS
### Pattern 1: How-To/Tutorial
- "How to [Achieve Result] in [Timeframe]"
- "The Complete Guide to [Topic]"
- "[Number] Ways to [Achieve Result]"
### Pattern 2: List/Number-Based
- "[Number] [Things] You Didn't Know About [Topic]"
- "Top [Number] [Category] of [Year]"
- "[Number] Mistakes to Avoid When [Doing Something]"
### Pattern 3: Question-Based
- "Why Does [Thing] [Do Something]?"
- "Is [Thing] Worth It in [Year]?"
- "What Happens When [Scenario]?"
### Pattern 4: Curiosity/Hook
- "I Tried [Thing] for [Time Period] - Here's What Happened"
- "The Truth About [Topic]"
- "[Unexpected Result] Changed Everything"
### Pattern 5: Direct/Clear
- "[Topic] Explained in [Time]"
- "[Product] Review: [Key Verdict]"
- "[Topic] Tutorial for Beginners"
## TITLE OPTIMIZATION TIPS
1. **Front-load keywords**: Put main keyword in first 3-4 words
2. **Create curiosity**: Make viewers want to know more
3. **Be specific**: Vague titles get fewer clicks
4. **Use numbers**: Specific numbers outperform general claims
5. **Match search intent**: Title should match what people search for
6. **Avoid clickbait**: Title must accurately represent content
7. **Consider thumbnail**: Title + thumbnail work together
## POWER WORDS FOR CTR
- Ultimate, Complete, Essential
- Secrets, Hidden, Unknown
- Mistakes, Avoid, Never
- Easy, Simple, Quick
- Proven, Tested, Works
- Free, Best, Top
Style: {{style}}
Video Type: {{video_type}}
## OUTPUT FORMAT
Generate titles that are:
- Under 60 characters when possible
- Keyword-optimized
- Click-worthy but not misleading
- Appropriate for the content type
- Varied in approach

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Optimisation du taux de clics',
        description: 'Les créateurs YouTube utilisent le Générateur de Titre Vidéo pour créer des titres qui maximisent les taux de clics. En saisissant le sujet vidéo et les mots-clés cibles, l\'outil génère des options de titres conçues pour attirer les spectateurs tout en représentant fidèlement le contenu.',
      },
      {
        title: 'Amélioration du SEO vidéo',
        description: 'Les YouTubeurs cherchant à améliorer leur classement dans les recherches utilisent le générateur pour créer des titres optimisés pour les mots-clés. L\'outil aide à identifier les meilleures façons de structurer les titres pour la visibilité dans les recherches tout en maintenant l\'attrait pour les spectateurs.',
      },
      {
        title: 'Tests A/B de titres',
        description: 'Les créateurs testant différentes approches de titres utilisent le générateur pour produire plusieurs variations. Cela permet de tester quels styles de titres résonnent le mieux avec leur audience et génèrent le plus de vues.',
      },
    ],
    faqs: [
      { question: 'Quelle longueur doit avoir un titre de vidéo YouTube ?', answer: 'YouTube permet jusqu\'à 100 caractères, mais visez 60-70 caractères pour une visibilité complète dans les résultats de recherche. Les titres plus longs peuvent être coupés selon l\'appareil et le contexte.' },
      { question: 'Comment créer des titres YouTube accrocheurs ?', answer: 'Utilisez des mots puissants, des chiffres, des questions ou de la curiosité. Soyez spécifique sur ce que les spectateurs obtiendront. Combinez clarté avec intrigue - les spectateurs doivent savoir de quoi parle la vidéo tout en voulant en savoir plus.' },
      { question: 'Le titre affecte-t-il le SEO YouTube ?', answer: 'Oui, les titres sont l\'un des facteurs de classement les plus importants. Incluez votre mot-clé principal dans les 3-4 premiers mots et utilisez un langage qui correspond à ce que les spectateurs recherchent.' },
      { question: 'Dois-je utiliser des majuscules dans mes titres ?', answer: 'La casse de titre (première lettre de chaque mot en majuscule) est courante et professionnelle. Les TOUT MAJUSCULES peuvent sembler spam. La casse de phrase fonctionne pour les titres décontractés. Soyez cohérent avec votre style de marque.' },
      { question: 'Comment éviter les titres clickbait ?', answer: 'Assurez-vous que votre titre représente fidèlement le contenu. La curiosité est bien ; la tromperie ne l\'est pas. Les spectateurs qui cliquent et partent rapidement nuisent à votre classement.' },
      { question: 'Puis-je changer mes titres YouTube après publication ?', answer: 'Oui, vous pouvez changer les titres à tout moment. Certains créateurs testent différents titres pour optimiser la performance. Cependant, des changements fréquents peuvent affecter le classement temporairement.' },
      { question: 'Dois-je inclure l\'année dans mes titres ?', answer: 'Inclure l\'année (ex. "Meilleurs outils de 2024") peut augmenter les clics pour le contenu actuel mais nécessitera des mises à jour. Utilisez pour les sujets sensibles au temps ; évitez pour le contenu evergreen.' },
      { question: 'Comment le titre fonctionne-t-il avec la miniature ?', answer: 'Le titre et la miniature doivent se compléter, pas se répéter. Si votre miniature montre une réaction, votre titre peut expliquer pourquoi. Ensemble, ils doivent raconter une histoire convaincante.' },
    ],
  },

  'outil-reformulation': {
    slug: 'outil-reformulation',
    name: 'Rewording Tool',
    title: 'Outil pour reformuler un texte, gratuit et boosté à l\'IA',
    description: 'Reformulez et paraphrasez du texte instantanément avec notre outil IA. Transformez des phrases et paragraphes pour améliorer la clarté, changer le ton ou créer du contenu unique.',
    metaDescription: 'Reformulez et paraphrasez du texte instantanément avec notre outil IA. Transformez des phrases et paragraphes pour améliorer la clarté, changer le ton ou créer du contenu unique.',
    inputLabel: 'Entrez le texte à reformuler...',
    inputPlaceholder: 'Collez votre texte ici pour le reformuler...',
    buttonText: 'Reformuler le Texte',
    maxLength: 4096,
    options: [
      {
        name: 'tone',
        label: 'Ton cible',
        choices: ['Formel/Professionnel', 'Décontracté/Conversationnel', 'Académique/Savant', 'Créatif/Engageant', 'Simplifié/Clair'],
        default: 'Décontracté/Conversationnel',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'Intensité de reformulation',
        choices: ['Légère (Changements subtils)', 'Moyenne (Équilibrée)', 'Forte (Transformation significative)'],
        default: 'Moyenne (Équilibrée)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor and writing assistant specializing in rephrasing, rewording, and improving text clarity. Your role is to transform input text while preserving meaning, improving readability, and adapting tone as needed.
## REWORDING OBJECTIVES
1. **Clarity Enhancement**: Make complex text more understandable
2. **Tone Adjustment**: Shift between formal, casual, academic, professional
3. **Uniqueness**: Create original phrasing while preserving meaning
4. **Conciseness**: Remove wordiness without losing information
5. **Engagement**: Make text more compelling and readable
## REWORDING APPROACHES
### 1. Synonym Replacement
- Swap words with equivalent alternatives
- Maintain meaning and context
- Improve vocabulary variety
### 2. Sentence Restructuring
- Change sentence construction
- Vary sentence length
- Improve flow and rhythm
### 3. Active/Passive Voice Shifts
- Convert passive to active for directness
- Or active to passive for formal tone
- Based on desired style
### 4. Simplification
- Break complex sentences
- Replace jargon with plain language
- Improve accessibility
### 5. Expansion
- Add detail or explanation
- Enhance sparse content
- Improve comprehensiveness
### 6. Condensation
- Remove redundancy
- Eliminate filler words
- Tighten prose
## TONE OPTIONS
### IF tone = "Formal/Professional"
- Sophisticated vocabulary
- Complete sentences
- No contractions
- Objective language
### IF tone = "Casual/Conversational"
- Natural flow
- Contractions okay
- Relatable language
- Personal pronouns
### IF tone = "Academic/Scholarly"
- Technical precision
- Citation-ready style
- Passive voice acceptable
- Formal structure
### IF tone = "Creative/Engaging"
- Vivid language
- Varied rhythm
- Emotional resonance
- Memorable phrasing
### IF tone = "Simplified/Plain"
- Short sentences
- Common words
- Clear structure
- Easy comprehension
## EDITING OPTIONS
### Light Reword
- Minimal changes
- Key phrase updates
- Subtle improvements
### Medium Reword
- Balanced restructuring
- Moderate phrasing changes
- Noticeable but faithful
### Heavy Reword
- Significant restructuring
- Major phrasing changes
- Complete transformation
Tone: {{tone}}
Intensity: {{intensity}}
## QUALITY GUIDELINES
1. **Preserve Meaning**: Core message must remain intact
2. **Maintain Accuracy**: Facts and data unchanged
3. **Keep Context**: Appropriate for original purpose
4. **Natural Flow**: Should read smoothly
5. **Original Output**: Not just word-for-word synonyms
## OUTPUT FORMAT
Provide reworded text that:
- Matches requested tone
- Achieves specified goal (clarity, uniqueness, etc.)
- Maintains original meaning
- Reads naturally and fluently
- Is ready to use
If multiple variants requested:
- Provide clearly labeled alternatives
- Explain key differences
- Note strengths of each version

IMPORTANT: Generate all output in French.`,
    useCases: [
      {
        title: 'Création de contenu et SEO',
        description: 'Les créateurs de contenu et professionnels SEO utilisent l\'Outil de Reformulation pour créer des versions uniques de contenu existant. Cela aide à éviter les problèmes de contenu dupliqué tout en générant des pièces fraîches et originales qui améliorent le classement des sites dans les moteurs de recherche.',
      },
      {
        title: 'Rédaction académique et recherche',
        description: 'Les étudiants, chercheurs et universitaires utilisent l\'Outil de Reformulation pour paraphraser du contenu provenant de diverses sources lors de leurs recherches ou de la rédaction d\'articles. L\'outil aide à réécrire les découvertes, citations ou informations dans leurs propres mots tout en maintenant l\'exactitude et en évitant le plagiat.',
      },
      {
        title: 'Contenu réseaux sociaux et marketing',
        description: 'Les marketeurs et community managers utilisent l\'Outil de Reformulation pour créer des variations uniques de descriptions de produits, contenus promotionnels ou publications sur les réseaux sociaux. Reformuler les messages marketing aide à captiver l\'attention de l\'audience et permet de tester différentes approches sur les plateformes.',
      },
    ],
    faqs: [
      { question: 'Qu\'est-ce qu\'un outil de reformulation ?', answer: 'Un outil de reformulation aide à paraphraser du texte en remplaçant les mots par des synonymes, restructurant les phrases ou changeant le style d\'écriture tout en préservant le sens original. C\'est utile pour créer du contenu unique, améliorer la clarté ou adapter le ton.' },
      { question: 'La reformulation est-elle la même chose que la paraphrase ?', answer: 'Elles sont très similaires. Les deux impliquent d\'exprimer les mêmes idées avec des mots différents. La reformulation fait souvent référence à des changements plus petits (phrases ou paragraphes), tandis que la paraphrase implique parfois de résumer ou une transformation plus significative.' },
      { question: 'En quoi est-ce différent d\'utiliser simplement des synonymes ?', answer: 'Une reformulation de qualité va au-delà du simple remplacement par des synonymes. Elle restructure les phrases, change les constructions grammaticales, varie la longueur des phrases et améliore le flux — résultant en un texte qui se lit naturellement, pas de façon robotique.' },
      { question: 'Puis-je utiliser du contenu reformulé sans souci de plagiat ?', answer: 'La reformulation aide à créer une formulation unique, mais vous devriez toujours citer les sources originales pour les idées qui ne sont pas les vôtres. L\'outil aide avec l\'expression, mais l\'attribution correcte des concepts et recherches reste importante.' },
      { question: 'Quels types de texte puis-je reformuler ?', answer: 'Vous pouvez reformuler tout texte : articles, posts de blog, essais, descriptions de produits, emails, contenu réseaux sociaux, articles académiques, textes marketing et plus. L\'outil s\'adapte à différents types de contenu.' },
      { question: 'Comment obtenir de meilleurs résultats de reformulation ?', answer: 'Fournissez un contexte clair sur votre objectif (clarté, formalité, unicité), spécifiez le ton souhaité, et indiquez si vous voulez une édition légère ou une transformation significative. Plus votre demande est spécifique, meilleur sera le résultat.' },
      { question: 'La reformulation changera-t-elle le sens de mon texte ?', answer: 'Une reformulation de qualité préserve le sens central tout en changeant l\'expression. Cependant, relisez toujours le texte reformulé pour vous assurer qu\'il transmet fidèlement votre message prévu, surtout pour le contenu technique ou spécialisé.' },
      { question: 'Cet outil peut-il rendre mon écriture plus formelle ou décontractée ?', answer: 'Oui, l\'ajustement du ton est une fonctionnalité clé. Vous pouvez transformer une écriture décontractée en langage professionnel pour les documents d\'affaires, ou rendre un texte formel plus conversationnel pour les réseaux sociaux et blogs.' },
      { question: 'En quoi est-ce différent de la vérification grammaticale ?', answer: 'Les correcteurs grammaticaux corrigent les erreurs dans le texte existant. Les outils de reformulation transforment la façon dont les idées sont exprimées, créant de nouvelles versions du contenu. Ils servent des objectifs différents mais peuvent être utilisés ensemble pour des résultats soignés.' },
      { question: 'Dois-je toujours accepter la version reformulée ?', answer: 'Non, relisez et éditez toujours. La reformulation par IA est un point de départ qui peut nécessiter un raffinement. Utilisez votre jugement pour vous assurer que la version finale reflète fidèlement votre voix, maintient l\'exactitude et correspond à votre contexte spécifique.' },
    ],
  },
};
