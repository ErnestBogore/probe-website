// Spanish (es) Tool Configurations

import { ToolConfig } from '../tools-config';

// Mapping from Spanish slug to English slug (for API calls)
export const spanishToEnglishSlugMap: Record<string, string> = {
  // Writing Tools
  'generador-de-parrafos': 'paragraph-generator',
  'reescritor-de-parrafos': 'paragraph-rewriter',
  'reescritor-de-oraciones': 'sentence-rewriter',
  'generador-de-conclusiones': 'conclusion-generator',
  'generador-de-introducciones': 'introduction-generator',
  'generador-de-esquemas': 'outline-generator',
  'generador-de-titulos-para-blog': 'blog-title-generator',
  'parafraseador-de-textos': 'rewording-tool',
  'herramienta-de-parafraseo': 'paraphrasing-tool',
  'extensor-de-texto': 'text-expander',
  // SEO & Content Marketing Tools
  'generador-de-metadescripciones': 'meta-description-generator',
  'resumidor': 'summarizer',
  'generador-de-textos-alternativos': 'image-alt-text-generator',
  'generador-de-ideas-para-blog': 'blog-post-ideas-generator',
  'generador-de-titulos-seo': 'seo-title-generator',
  'generador-de-ideas-de-contenido': 'content-idea-generator',
  'creador-de-guiones-de-videos': 'video-script-generator',
  // Utility Tools
  'corrector-gramatical': 'grammar-checker',
  'detector-de-ia': 'ai-content-detector',
  'humanizador-de-texto': 'ai-text-humanizer',
  'generador-de-acronimos': 'acronym-generator',
  'generador-lorem-ipsum': 'lorem-ipsum-generator',
  'traductor-de-emojis': 'emoji-translator',
  'detector-de-plagio': 'plagiarism-checker',
  // Business & Marketing Tools
  'generador-de-nombres-de-marca': 'brand-name-generator',
  'generador-de-nombres-comerciales': 'business-name-generator',
  'generador-de-nombres-de-productos': 'product-name-generator',
  'creador-de-eslogan': 'slogan-generator',
  'generador-de-texto-para-anuncios': 'google-ads-copy-generator',
  'generador-de-descripciones-de-productos': 'product-description-generator',
  'generador-de-paginas-de-aterrizaje': 'landing-page-generator',
  'generador-de-textos-para-sitios-web': 'website-copy-generator',
  'generador-de-cartas-de-renuncia': 'resignation-letter-generator',
  'generador-de-ganchos': 'hook-generator',
  // Social Media Tools
  'generador-de-biografias-para-redes': 'social-media-bio-generator',
  'generador-de-biografias-para-instagram': 'instagram-bio-generator',
  'generador-de-frases-para-redes-sociales': 'social-media-caption-generator',
  'generador-de-frases-para-instagram': 'instagram-caption-generator',
  'generador-de-hashtags-para-redes': 'social-media-hashtag-generator',
  'generador-de-hashtags-para-instagram': 'instagram-hashtag-generator',
  'generador-de-nombres-de-usuario-para-redes': 'social-media-username-generator',
  'generador-de-nombres-para-instagram': 'instagram-name-generator',
  'generador-de-hashtags-para-tiktok': 'tiktok-hashtag-generator',
  'generador-de-nombres-para-tiktok': 'tiktok-username-generator',
  // YouTube Tools
  'generador-de-descripciones-para-canales-de-youtube': 'youtube-channel-description-generator',
  'generador-de-descripciones-para-videos-de-youtube': 'youtube-video-description-generator',
  'generador-de-nombres-para-youtube': 'youtube-name-generator',
  'generador-de-titulos-para-videos-de-youtube': 'youtube-video-title-generator',
};

// Helper functions
export function getToolBySlugEs(slug: string): ToolConfig | undefined {
  return toolsEs[slug];
}

export function getAllToolsEs(): ToolConfig[] {
  return Object.values(toolsEs);
}

export function getEnglishSlugEs(spanishSlug: string): string | undefined {
  return spanishToEnglishSlugMap[spanishSlug];
}

export const toolsEs: Record<string, ToolConfig> = {
  // ==================== BATCH 1 (Tools 1-10) ====================

  'generador-de-parrafos': {
    slug: 'generador-de-parrafos',
    name: 'Generador de Párrafos',
    title: 'Generador de texto en párrafos con IA gratuito',
    description: 'Genera párrafos bien estructurados en segundos. Perfecto para publicaciones de blog, ensayos, correos electrónicos y más. Sin necesidad de registro.',
    metaDescription: 'Genera párrafos bien estructurados en segundos con nuestro generador de párrafos con IA gratuito. Perfecto para blogs, ensayos, correos y...',
    inputLabel: 'Escribe sobre...',
    inputPlaceholder: 'ej. Por qué es importante comer brócoli',
    buttonText: 'Generar párrafo',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Formato',
        choices: ['Párrafos', 'Viñetas'],
        default: 'Párrafos',
        type: 'radio',
      },
      {
        name: 'length',
        label: 'Escribir',
        choices: ['1 párrafo', '2 párrafos', '3 párrafos'],
        default: '1 párrafo',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono de escritura',
        choices: ['Formal', 'Casual', 'Profesional', 'Amigable'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generar',
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
### IF TONE = "Formal"
- Authoritative but not stiff
- Use "you" to address the reader directly
- Include specific examples from business contexts
### IF TONE = "Casual"
- Warm and approachable
- Shorter sentences, contractions allowed
- Use relatable analogies
### IF TONE = "Professional"
- Precise and measured
- Maintain objectivity
- Define terms when introduced
### IF TONE = "Friendly"
- Conversational and engaging
- Can include rhetorical questions
- Use everyday language
## OUTPUT FORMAT
- Write {{length}} in {{format}} format
- Use a {{tone}} tone
- Generate {{variants}}
If generating multiple variants, separate each with a blank line and label them (Variant 1:, Variant 2:, etc.)
Output only the content. No preamble, no explanation.
Self-check before output: Read the paragraph mentally. If any sentence feels like filler or could be deleted without losing meaning, rewrite it. If the paragraph could apply to any generic article, add a specific detail or example.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Marketing de contenidos y blogs',
        description: 'Los escritores y especialistas en marketing pueden usar el Generador de Párrafos para superar el bloqueo del escritor y producir borradores iniciales rápidamente. Ya sea que estés creando publicaciones de blog, texto para páginas de destino o contenido para boletines, la herramienta genera párrafos coherentes basados en tu tema o indicación, dándote una base sólida para editar y refinar en lugar de comenzar desde una página en blanco.',
      },
      {
        title: 'Escritura académica y profesional',
        description: 'Los estudiantes que trabajan en ensayos, investigadores que redactan artículos o profesionales que preparan informes pueden aprovechar el Generador de Párrafos para articular ideas complejas de manera clara. Al ingresar puntos clave o declaraciones de tesis, los usuarios reciben párrafos estructurados que presentan argumentos de manera lógica, ayudando a mantener el impulso durante proyectos de escritura extensos.',
      },
      {
        title: 'Comunicación cotidiana',
        description: 'Desde redactar correos electrónicos reflexivos hasta escribir declaraciones personales o cartas de presentación, el Generador de Párrafos ayuda a cualquiera que necesite comunicarse claramente por escrito. Es particularmente útil para hablantes no nativos de español o cualquier persona que quiera expresar ideas de manera más elocuente sin pasar horas en la composición.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un generador de párrafos?',
        answer: 'Un generador de párrafos es una herramienta impulsada por IA que crea párrafos coherentes y contextualmente relevantes basados en un tema, indicación o conjunto de instrucciones que proporcionas. Utiliza procesamiento de lenguaje natural para entender tu entrada y producir texto similar al humano.',
      },
      {
        question: '¿Este generador de párrafos es gratuito?',
        answer: 'Sí, nuestro generador de párrafos es completamente gratuito sin costos ocultos. Puedes generar párrafos sin crear una cuenta ni proporcionar información de pago.',
      },
      {
        question: '¿Cómo funciona el generador de párrafos con IA?',
        answer: 'La herramienta utiliza un modelo de lenguaje grande entrenado con datos de texto diversos. Cuando ingresas un tema o indicación, la IA analiza el contexto y genera un párrafo que sigue patrones de lenguaje natural, gramática correcta y estructura lógica.',
      },
      {
        question: '¿Puedo usar los párrafos generados para fines comerciales?',
        answer: 'Sí, los párrafos que generas son tuyos para usar como desees, incluyendo contenido comercial como publicaciones de blog, materiales de marketing o descripciones de productos.',
      },
      {
        question: '¿Qué tan largos son los párrafos que genera la herramienta?',
        answer: 'Los párrafos generados típicamente tienen entre 3-6 oraciones, aunque esto varía según la complejidad de tu indicación. Puedes solicitar resultados más largos o más cortos especificando tu preferencia en las instrucciones.',
      },
      {
        question: '¿El contenido generado será único?',
        answer: 'La IA crea contenido original cada vez basándose en tu indicación específica. Sin embargo, recomendamos revisar y editar el resultado para agregar tu voz única y verificar la precisión antes de publicar.',
      },
      {
        question: '¿Sobre qué temas puedo generar párrafos?',
        answer: 'El generador de párrafos puede crear contenido sobre prácticamente cualquier tema: negocios, tecnología, salud, educación, estilo de vida y más. La calidad del resultado mejora cuando proporcionas indicaciones claras y específicas.',
      },
      {
        question: '¿Puedo generar múltiples párrafos a la vez?',
        answer: 'Puedes ejecutar la herramienta múltiples veces para generar varios párrafos, o especificar en tu indicación que necesitas múltiples párrafos sobre subtemas relacionados.',
      },
      {
        question: '¿El contenido generado es amigable para SEO?',
        answer: 'La herramienta produce contenido natural y legible que funciona bien para SEO. Para mejores resultados, puedes incluir palabras clave objetivo en tu indicación para que la IA las incorpore orgánicamente en el párrafo.',
      },
      {
        question: '¿Necesito editar los párrafos después de generarlos?',
        answer: 'Aunque la IA produce borradores de calidad, recomendamos revisar y editar el resultado para asegurar la precisión, agregar perspectivas personales y adaptar el tono a tu audiencia específica.',
      },
    ],
  },

  'reescritor-de-parrafos': {
    slug: 'reescritor-de-parrafos',
    name: 'Reescritor de Párrafos',
    title: 'Herramienta para reescribir texto con IA gratuito',
    description: 'Reescribe párrafos para mejorar la claridad, cambiar el tono o crear variaciones únicas de tu texto mientras preservas el significado original.',
    metaDescription: 'Reescribe párrafos con nuestra herramienta gratuita de IA. Mejora la claridad, cambia el tono o crea variaciones únicas mientras preservas...',
    inputLabel: 'Reescribir este texto...',
    inputPlaceholder: 'Pega tu párrafo aquí para reescribirlo',
    buttonText: 'Reescribir párrafo',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Formato',
        choices: ['Párrafos', 'Viñetas'],
        default: 'Párrafos',
        type: 'radio',
      },
      {
        name: 'length',
        label: 'Escribir',
        choices: ['1 párrafo', '2 párrafos', '3 párrafos'],
        default: '1 párrafo',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono de escritura',
        choices: ['Formal', 'Casual', 'Profesional', 'Amigable'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generar',
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
- Use contractions naturally (it's, don't, won't, can't, you're)
## TONE-BASED INSTRUCTIONS
### IF TONE = "Formal"
- Elevate vocabulary appropriately (not jargon for jargon's sake)
- Ensure formal sentence structure
- Remove contractions and casual language
### IF TONE = "Casual"
- Warm and approachable
- Shorter sentences, contractions encouraged
- Use relatable language
### IF TONE = "Professional"
- Balance between formal and accessible
- Maintain precision in meaning
- Add clarity to vague claims
### IF TONE = "Friendly"
- Add rhythm through sentence variety
- Strengthen the opening hook
- Use more vivid, concrete language
## OUTPUT FORMAT
- Output {{length}} in {{format}} format
- Use a {{tone}} tone
- Generate {{variants}}
If generating multiple variants, separate each with a blank line and label them (Variant 1:, Variant 2:, etc.)
Output only the rewritten content. No preamble, no explanation.
Self-check before output: Compare the rewrite to the original. Did you preserve the meaning? Did you actually improve it, or just change it? If the rewrite isn't clearly better, revise again.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Mejora de claridad y legibilidad del contenido',
        description: 'Los escritores y editores usan el Reescritor de Párrafos para transformar texto denso o mal redactado en prosa clara y fluida. Ya sea que hayas redactado algo rápidamente o recibido contenido que necesita pulirse, la herramienta reestructura oraciones y mejora la elección de palabras mientras mantiene tu mensaje original.',
      },
      {
        title: 'Creación de variaciones únicas de contenido',
        description: 'Los especialistas en marketing de contenidos que gestionan múltiples plataformas o realizan pruebas A/B pueden generar diferentes versiones del mismo mensaje central. El reescritor produce variaciones frescas para publicaciones en redes sociales, campañas de correo electrónico o textos publicitarios, ayudándote a evitar la repetición entre canales mientras mantienes el mensaje.',
      },
      {
        title: 'Evitar el plagio y refrescar contenido existente',
        description: 'Estudiantes, investigadores y creadores de contenido pueden usar el Reescritor de Párrafos para expresar información de fuentes en sus propias palabras o actualizar contenido antiguo. La herramienta te ayuda a reformular el texto lo suficiente como para crear trabajo original mientras preservas el significado y los hechos esenciales.',
      },
    ],
    faqs: [
      {
        question: '¿Qué hace un reescritor de párrafos?',
        answer: 'Un reescritor de párrafos toma tu texto existente y lo reformula usando diferentes palabras, estructuras de oraciones y frases mientras mantiene el significado central intacto. Es útil para mejorar la claridad, evitar la repetición o crear versiones únicas de contenido.',
      },
      {
        question: '¿El reescritor de párrafos es gratuito?',
        answer: 'Sí, esta herramienta es completamente gratuita. No hay suscripciones, tarifas ocultas ni límites de uso que requieran pago.',
      },
      {
        question: '¿Cuál es la diferencia entre reescribir y parafrasear?',
        answer: 'Aunque ambos implican reformular el texto de manera diferente, reescribir típicamente involucra cambios más sustanciales en la estructura, el tono y el estilo. El parafraseo se enfoca en expresar la misma idea con diferentes palabras, mientras que la reescritura también puede mejorar la legibilidad, ajustar el tono o reorganizar la información.',
      },
      {
        question: '¿El párrafo reescrito tendrá el mismo significado que el original?',
        answer: 'La IA está diseñada para preservar tu significado original mientras cambia la expresión. Sin embargo, siempre revisa el resultado para asegurar que la versión reescrita capture con precisión tu mensaje previsto, especialmente para contenido técnico o con matices.',
      },
      {
        question: '¿Puedo elegir el tono del párrafo reescrito?',
        answer: 'Sí, puedes especificar el tono deseado en tus instrucciones, ya sea que quieras que el texto sea más formal, casual, persuasivo o simplificado. La IA ajustará su resultado en consecuencia.',
      },
      {
        question: '¿El contenido reescrito está libre de plagio?',
        answer: 'La herramienta genera nuevas frases y estructuras, produciendo texto que difiere del original. Sin embargo, si estás reescribiendo contenido de otra persona, la atribución adecuada puede seguir siendo necesaria dependiendo de tu caso de uso.',
      },
      {
        question: '¿Cuánto del texto original se cambia?',
        answer: 'El grado de cambio depende de tus instrucciones y la complejidad del texto original. La IA típicamente modifica la elección de palabras, la estructura de las oraciones y el flujo mientras asegura que el mensaje central permanezca reconocible.',
      },
      {
        question: '¿Puedo reescribir contenido en idiomas distintos al español?',
        answer: 'La herramienta está optimizada para texto en español. Aunque puede funcionar con otros idiomas, los resultados son más confiables al reescribir párrafos en español.',
      },
      {
        question: '¿Cuál es la longitud máxima que puedo reescribir de una vez?',
        answer: 'La herramienta funciona mejor con párrafos estándar (aproximadamente 100-300 palabras). Para contenido más largo, recomendamos reescribir un párrafo a la vez para obtener resultados óptimos.',
      },
      {
        question: '¿Debo editar el párrafo reescrito antes de usarlo?',
        answer: 'Sí, recomendamos revisar todo el contenido generado por IA. Verifica que la versión reescrita refleje con precisión tu significado previsto, se ajuste a la voz de tu marca y se lea de forma natural en contexto.',
      },
    ],
  },

  'herramienta-de-parafraseo': {
    slug: 'herramienta-de-parafraseo',
    name: 'Herramienta de Parafraseo',
    title: 'Herramienta para parafrasear con IA gratuita',
    description: 'Parafrasea cualquier texto instantáneamente. Reformula oraciones y párrafos mientras mantienes el significado original. Perfecto para estudiantes y escritores.',
    metaDescription: 'Parafrasea cualquier texto instantáneamente con nuestra herramienta gratuita de IA. Reformula oraciones y párrafos mientras mantienes el...',
    inputLabel: 'Texto a parafrasear...',
    inputPlaceholder: 'Pega tu texto aquí para parafrasearlo',
    buttonText: 'Parafrasear',
    maxLength: 2048,
    options: [
      {
        name: 'mode',
        label: 'Modo',
        choices: ['Estándar', 'Fluidez', 'Creativo', 'Formal', 'Simple'],
        default: 'Estándar',
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
### IF MODE = "Fluency"
- Focus on smooth, natural flow
- Prioritize readability over transformation
- Ensure sentences connect seamlessly
### IF MODE = "Creative"
- More substantial restructuring allowed
- Use fresh metaphors or analogies if they preserve meaning
- Greater sentence variety and stylistic flair
### IF MODE = "Formal"
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
Self-check before output: If someone read only the paraphrase, would they understand exactly the same thing as if they read the original? If not, revise. If the paraphrase is too similar (just swapped a few words), transform it more substantially.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Integridad académica y escritura de investigación',
        description: 'Estudiantes e investigadores usan la Herramienta de Parafraseo para reformular información de fuentes con sus propias palabras, una habilidad crítica para evitar el plagio. La herramienta ayuda a expresar ideas complejas de artículos académicos, publicaciones o libros de texto en un lenguaje fresco mientras mantiene el significado y la precisión originales.',
      },
      {
        title: 'Reutilización de contenido entre plataformas',
        description: 'Los especialistas en marketing digital y creadores de contenido pueden adaptar contenido existente para diferentes canales sin duplicar el texto literalmente. Transforma una sección de publicación de blog en texto para redes sociales, reformula contenido web para boletines por correo electrónico o crea múltiples variaciones de mensajes clave para diferentes segmentos de audiencia.',
      },
      {
        title: 'Simplificación de lenguaje complejo',
        description: 'Los profesionales que necesitan traducir texto técnico o lleno de jerga a un lenguaje accesible se benefician de la Herramienta de Parafraseo. Ya sea que estés explicando información médica a pacientes, desglosando términos legales para clientes o haciendo documentación técnica más amigable para el usuario, la herramienta ayuda a reformular conceptos complicados de manera clara.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es parafrasear?',
        answer: 'Parafrasear es el proceso de reformular texto usando diferentes palabras y estructuras de oraciones mientras se preserva el significado original. Es una habilidad fundamental en la escritura que demuestra comprensión y ayuda a evitar el plagio.',
      },
      {
        question: '¿Cómo funciona la herramienta de parafraseo con IA?',
        answer: 'La herramienta analiza tu texto de entrada para entender su significado, luego genera formas alternativas de expresar las mismas ideas usando diferente vocabulario, estructuras de oraciones y patrones de frases.',
      },
      {
        question: '¿Esta herramienta de parafraseo es gratuita?',
        answer: 'Sí, la herramienta es completamente gratuita. Puedes parafrasear texto tantas veces como necesites sin registrarte ni pagar nada.',
      },
      {
        question: '¿El contenido parafraseado se considera original?',
        answer: 'Cuando se hace correctamente, el contenido parafraseado expresa ideas con tus propias palabras y se considera original. Sin embargo, incluso las ideas parafraseadas que provienen de otras fuentes deben citarse adecuadamente en contextos académicos y profesionales.',
      },
      {
        question: '¿Puedo parafrasear cualquier tipo de texto?',
        answer: 'La herramienta funciona con la mayoría de tipos de texto, incluyendo artículos, ensayos, informes, correos electrónicos y contenido web. Maneja varios niveles de complejidad, desde oraciones simples hasta lenguaje técnico o académico.',
      },
      {
        question: '¿El texto parafraseado sonará natural?',
        answer: 'La IA está diseñada para producir texto de sonido natural que fluye bien. Sin embargo, recomendamos leer el resultado para asegurar que coincida con tu voz y encaje suavemente en tu documento más grande.',
      },
      {
        question: '¿Cómo obtengo los mejores resultados de parafraseo?',
        answer: 'Proporciona oraciones o párrafos claros y completos. La entrada fragmentada o poco clara puede producir resultados menos precisos. También puedes especificar si quieres que el resultado sea más formal, más simple o en un estilo particular.',
      },
      {
        question: '¿Puedo parafrasear texto en otros idiomas?',
        answer: 'La herramienta está optimizada para español. Aunque puede funcionar con otros idiomas, la precisión y fluidez son más altas al parafrasear texto en español.',
      },
      {
        question: '¿Cuál es la diferencia entre parafrasear y resumir?',
        answer: 'Parafrasear reformula el contenido con diferentes palabras mientras mantiene una longitud y detalle similares. Resumir condensa el texto en una versión más corta que captura solo los puntos principales.',
      },
      {
        question: '¿Debo verificar el contenido parafraseado antes de usarlo?',
        answer: 'Sí, siempre revisa el contenido generado por IA. Verifica que la versión parafraseada refleje con precisión el significado original y que no hayan ocurrido cambios involuntarios en el significado.',
      },
    ],
  },

  'reescritor-de-oraciones': {
    slug: 'reescritor-de-oraciones',
    name: 'Reescritor de Oraciones',
    title: 'Generador de frases con IA gratuito',
    description: 'Reescribe oraciones para mayor claridad, impacto o mejor tono. Obtén múltiples variaciones con explicaciones.',
    metaDescription: 'Reescribe oraciones para mayor claridad, impacto o mejor tono. Obtén múltiples variaciones con explicaciones de qué hace cada una más...',
    inputLabel: 'Oración a reescribir...',
    inputPlaceholder: 'ej. La implementación del nuevo sistema fue completada por el equipo la semana pasada.',
    buttonText: 'Reescribir oración',
    maxLength: 1024,
    options: [
      {
        name: 'goal',
        label: 'Objetivo de mejora',
        choices: ['Claridad', 'Impacto', 'Concisión', 'Más formal', 'Más casual', 'Más seguro'],
        default: 'Claridad',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Número de variaciones',
        choices: ['2 variaciones', '3 variaciones', '5 variaciones'],
        default: '3 variaciones',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor specializing in sentence-level revision to improve clarity, impact, or tone.
## CORE RULES
- Preserve the exact meaning of the original
- Make substantive improvements, not just word swaps
- Provide multiple variations with different approaches
- Explain the improvement strategy for each
- Never add information not in the original
## REWRITING APPROACHES
### IF GOAL = "Clarity" - Simplify structure, use active voice, front-load important info
### IF GOAL = "Impact" - Strengthen verbs, add rhythm, use parallel structure
### IF GOAL = "Conciseness" - Cut 20-40% word count, remove redundancy
### IF GOAL = "More formal" - Remove contractions, elevate vocabulary
### IF GOAL = "More casual" - Add contractions, simpler words, conversational
### IF GOAL = "More confident" - Remove hedging, use declarative statements
## TECHNIQUES
- Weak → Strong: "made an improvement" → "improved"
- Passive → Active: "was written by Sarah" → "Sarah wrote"
- Wordy → Concise: "due to the fact that" → "because"
## OUTPUT FORMAT
Goal: {{goal}}
Variations: {{variants}}
For each variation:
1. Rewritten sentence
2. What was changed
3. Why this improves it
End with recommendation of strongest option.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Refinamiento de mensajes clave y titulares',
        description: 'Los especialistas en marketing y redactores usan el Reescritor de Oraciones para pulir oraciones críticas como titulares, eslóganes, CTAs y líneas de apertura. Cuando una sola oración necesita trabajar duro, la herramienta genera múltiples variaciones para que puedas elegir la versión más impactante.',
      },
      {
        title: 'Mejora de comunicación por correo electrónico',
        description: 'Los profesionales pueden reescribir oraciones incómodas o poco claras en correos importantes antes de enviarlos. Ya sea que necesites sonar más seguro, más diplomático o simplemente más claro, la herramienta proporciona opciones que te ayudan a comunicar exactamente lo que pretendes.',
      },
      {
        title: 'Asistencia en edición y corrección',
        description: 'Escritores y editores usan la herramienta cuando saben que una oración no está funcionando pero no pueden descubrir cómo arreglarla. Al generar múltiples alternativas, la herramienta rompe los bloqueos de edición y ofrece enfoques frescos para oraciones problemáticas.',
      },
    ],
    faqs: [
      {
        question: '¿Cuál es la diferencia entre reescribir oraciones y parafrasear?',
        answer: 'La reescritura de oraciones se enfoca en mejorar la claridad, impacto o tono de una sola oración mientras mantiene el mismo significado. El parafraseo trata de expresar la misma idea con diferentes palabras, a menudo para evitar duplicación. El reescritor intenta activamente hacer las oraciones mejores, no solo diferentes.',
      },
      {
        question: '¿El reescritor de oraciones es gratuito?',
        answer: 'Sí, completamente gratuito sin necesidad de registro. Reescribe tantas oraciones como necesites.',
      },
      {
        question: '¿Cuántas variaciones obtendré?',
        answer: 'La herramienta típicamente proporciona 3 variaciones distintas, cada una tomando un enfoque diferente para la mejora. Esto te da opciones para elegir según tus necesidades específicas.',
      },
      {
        question: '¿Puedo especificar qué tipo de mejora quiero?',
        answer: 'Sí, puedes solicitar objetivos específicos como "más conciso", "más formal", "más seguro" o "más claro". La herramienta adaptará sus variaciones a tu objetivo declarado.',
      },
      {
        question: '¿Cambiará el significado?',
        answer: 'No, todas las variaciones preservan tu significado original. La herramienta cambia cómo se expresa la idea, no qué idea se expresa. Esta es una regla fundamental del proceso de reescritura.',
      },
      {
        question: '¿Por qué necesito esto si tengo un corrector gramatical?',
        answer: 'Los correctores gramaticales corrigen errores. El reescritor de oraciones mejora oraciones que son gramaticalmente correctas pero podrían ser más claras, más fuertes o más apropiadas para tu audiencia. Se trata de mejora de calidad, no de corrección de errores.',
      },
      {
        question: '¿Puedo reescribir múltiples oraciones a la vez?',
        answer: 'La herramienta está optimizada para una oración a la vez para las mejoras más enfocadas. Para múltiples oraciones, usa el reescritor de párrafos o pasa las oraciones individualmente.',
      },
      {
        question: '¿Qué hace que una reescritura sea mejor que otra?',
        answer: 'Depende de tu objetivo. Para correos electrónicos, la claridad y el tono apropiado importan más. Para marketing, el impacto y la memorabilidad son clave. La herramienta explica cada variación para que puedas elegir según tu contexto específico.',
      },
      {
        question: '¿Puede ayudar con oraciones que no están en español?',
        answer: 'La herramienta está optimizada para español. Los resultados con otros idiomas pueden variar y no serán tan confiables.',
      },
      {
        question: '¿Siempre debo usar la opción recomendada?',
        answer: 'La recomendación se basa en preferencias comunes, pero tú conoces mejor tu contexto. Revisa todas las opciones y elige la que se ajuste a tu audiencia, tono y propósito específicos.',
      },
    ],
  },

  'resumidor': {
    slug: 'resumidor',
    name: 'Resumidor',
    title: 'Herramienta IA para hacer resúmenes gratuita',
    description: 'Condensa artículos largos, documentos y textos en resúmenes claros y concisos. Extrae los puntos clave en segundos.',
    metaDescription: 'Condensa artículos largos, documentos y textos en resúmenes claros y concisos. Nuestro resumidor con IA extrae los puntos clave en...',
    inputLabel: 'Texto a resumir...',
    inputPlaceholder: 'Pega tu texto aquí para obtener un resumen',
    buttonText: 'Resumir',
    maxLength: 4096,
    options: [
      {
        name: 'length',
        label: 'Longitud del resumen',
        choices: ['Breve (1-2 oraciones)', 'Corto (1 párrafo)', 'Detallado (2-3 párrafos)'],
        default: 'Corto (1 párrafo)',
      },
      {
        name: 'format',
        label: 'Formato',
        choices: ['Párrafo', 'Viñetas', 'Puntos clave'],
        default: 'Párrafo',
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
### IF LENGTH = "Brief (1-2 sentences)"
- Capture only the absolute core message
- One main point + one key implication
- Ideal for: quick overviews, email summaries, social snippets
### IF LENGTH = "Short (1 paragraph)"
- Main point + 2-3 key supporting details
- Include the most important evidence or example
- Ideal for: executive summaries, article abstracts
### IF LENGTH = "Detailed (2-3 paragraphs)"
- Comprehensive coverage of main points
- Include key evidence, arguments, and conclusions
- Preserve the logical structure of the original
- Ideal for: research summaries, report condensation
## FORMAT-SPECIFIC INSTRUCTIONS
### IF FORMAT = "Paragraph"
- Flowing prose that reads naturally
- Connect ideas with appropriate transitions
### IF FORMAT = "Bullet points"
- One bullet per key point
- Each bullet should be a complete thought
- Organized by importance or original flow
### IF FORMAT = "Key takeaways"
- Focus on actionable insights or conclusions
- What should the reader remember or do?
- 3-5 concrete takeaways
## OUTPUT FORMAT
- Length: {{length}}
- Format: {{format}}
Output only the summary without any preamble.
Self-check before output: Could someone who only reads the summary understand the essential message of the original? Is any critical information missing? Is any included information not actually important? Revise if needed.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Investigación y recopilación de información',
        description: 'Estudiantes, investigadores y profesionales que procesan grandes volúmenes de texto usan el Resumidor para extraer rápidamente insights clave de artículos, papers e informes. En lugar de leer cada documento completo, puedes generar resúmenes para identificar qué fuentes son más relevantes para tus necesidades.',
      },
      {
        title: 'Curación de contenido y compartir conocimiento',
        description: 'Líderes de equipo, escritores de boletines y curadores de contenido pueden resumir artículos de la industria, informes o notas de reuniones para compartir información esencial con su audiencia. La herramienta te ayuda a destilar contenido extenso en conclusiones digeribles que los lectores ocupados pueden absorber rápidamente.',
      },
      {
        title: 'Eficiencia en estudio y revisión',
        description: 'Los estudiantes que se preparan para exámenes o profesionales que revisan documentación pueden crear resúmenes concisos de materiales extensos. El Resumidor ayuda a condensar libros de texto, notas de clase o materiales de capacitación en guías de estudio manejables que destacan los conceptos más importantes.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un resumidor de texto?',
        answer: 'Un resumidor de texto es una herramienta de IA que condensa contenido extenso en versiones más cortas que contienen solo la información más importante. Identifica puntos clave, argumentos principales y detalles esenciales mientras elimina texto redundante o menos crítico.',
      },
      {
        question: '¿Cómo funciona el resumidor con IA?',
        answer: 'La herramienta usa procesamiento de lenguaje natural para analizar tu texto, identificar los temas centrales e información clave, y generar una versión condensada que captura el significado esencial del contenido original.',
      },
      {
        question: '¿Esta herramienta de resumen es gratuita?',
        answer: 'Sí, el resumidor es completamente gratuito. No se requiere registro y no hay límite en cuántos textos puedes resumir.',
      },
      {
        question: '¿Cuánto acorta el texto la herramienta?',
        answer: 'La proporción de compresión depende del texto original y tus preferencias. Típicamente, los resúmenes son 20-30% de la longitud original, aunque puedes solicitar resúmenes más cortos o más largos según tus necesidades.',
      },
      {
        question: '¿Qué tipos de contenido puedo resumir?',
        answer: 'La herramienta funciona con artículos, publicaciones de blog, papers de investigación, informes, ensayos, notas de reuniones, correos electrónicos y la mayoría del contenido basado en texto. Maneja varios temas y niveles de complejidad de manera efectiva.',
      },
      {
        question: '¿El resumen captura todos los puntos importantes?',
        answer: 'La IA está entrenada para identificar y priorizar información clave. Sin embargo, lo que es "importante" puede ser subjetivo, por lo que recomendamos revisar los resúmenes para asegurar que capturen los puntos específicos más relevantes para tu propósito.',
      },
      {
        question: '¿Puedo resumir contenido en otros idiomas?',
        answer: 'La herramienta está optimizada para texto en español. El rendimiento con otros idiomas puede variar.',
      },
      {
        question: '¿Cuál es la longitud máxima de texto que puedo resumir?',
        answer: 'La herramienta maneja bien la mayoría de documentos estándar. Para textos muy largos como libros completos o informes extensos, recomendamos resumir capítulos o secciones individualmente para mejores resultados.',
      },
      {
        question: '¿El contenido resumido está libre de plagio?',
        answer: 'Los resúmenes se generan usando IA y expresan ideas en forma condensada. Sin embargo, si estás resumiendo contenido de otra persona para publicación, la atribución adecuada sigue siendo necesaria.',
      },
      {
        question: '¿Puedo personalizar la longitud del resumen?',
        answer: 'Sí, puedes especificar si quieres un resumen breve o más detallado. Incluir instrucciones como "resumir en 3 oraciones" o "proporcionar un resumen detallado" ayuda a la IA a ajustar su resultado en consecuencia.',
      },
    ],
  },

  'generador-de-esquemas': {
    slug: 'generador-de-esquemas',
    name: 'Generador de Esquemas',
    title: 'AI Outline Generator gratuito',
    description: 'Genera esquemas estructurados para publicaciones de blog, ensayos y artículos en segundos.',
    metaDescription: 'Genera esquemas estructurados para publicaciones de blog, ensayos y artículos en segundos. Nuestro generador de esquemas con IA te ayuda a...',
    inputLabel: 'Tema o título...',
    inputPlaceholder: 'ej. Los beneficios del trabajo remoto para pequeñas empresas',
    buttonText: 'Generar esquema',
    maxLength: 2048,
    options: [
      {
        name: 'contentType',
        label: 'Tipo de contenido',
        choices: ['Publicación de blog', 'Guía práctica', 'Listicle', 'Ensayo/Opinión', 'Reseña de producto', 'Investigación/Informe'],
        default: 'Publicación de blog',
        type: 'select',
      },
      {
        name: 'depth',
        label: 'Profundidad del esquema',
        choices: ['Básico (solo H2s)', 'Estándar (H2s + H3s)', 'Detallado (H2s + H3s + notas)'],
        default: 'Estándar (H2s + H3s)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist who creates clear, logical outlines for written content.
## CORE RULES
- Create clear hierarchical structure (H1 → H2 → H3)
- Include 5-10 main sections depending on topic complexity
- Each section should have 2-5 subsections or bullet points
- Follow logical flow: introduction → body → conclusion
## CONTENT TYPE ADAPTATIONS
### IF TYPE = "Blog Post" - Balance depth with readability, include examples
### IF TYPE = "How-to Guide" - Use numbered steps, add troubleshooting section
### IF TYPE = "Listicle" - Each list item becomes an H2
### IF TYPE = "Essay/Opinion" - Start with thesis, include counterargument
### IF TYPE = "Product Review" - Specs, pros/cons, verdict
### IF TYPE = "Research/Report" - Executive summary, methodology, findings
## OUTPUT FORMAT
Content Type: {{contentType}}
Outline Depth: {{depth}}
Generate a structured outline with headings and brief notes.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Planificación de publicaciones de blog y artículos',
        description: 'Los creadores de contenido y especialistas en marketing usan el Generador de Esquemas para transformar ideas de temas en bruto en estructuras organizadas y lógicas antes de escribir. En lugar de mirar una página en blanco, obtienes una hoja de ruta clara con secciones principales, subsecciones y notas sobre qué cubrir en cada parte, reduciendo drásticamente el tiempo desde la idea hasta el primer borrador.',
      },
      {
        title: 'Organización de ensayos académicos y papers de investigación',
        description: 'Estudiantes e investigadores pueden usar el Generador de Esquemas para estructurar argumentos complejos, asegurar un flujo lógico entre puntos e identificar brechas en su razonamiento antes de comprometerse con un borrador completo. La herramienta ayuda a organizar declaraciones de tesis, evidencia de apoyo, contraargumentos y conclusiones en un marco coherente.',
      },
      {
        title: 'Proyectos de contenido extenso y documentación',
        description: 'Los equipos que trabajan en guías completas, whitepapers o documentación técnica pueden generar esquemas maestros que aseguran consistencia y completitud en proyectos grandes. La herramienta ayuda a desglosar temas complejos en secciones manejables y asegura que nada importante se pase por alto durante el proceso de escritura.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un generador de esquemas?',
        answer: 'Un generador de esquemas es una herramienta impulsada por IA que toma tu tema o ideas en bruto y las organiza en un marco estructurado con encabezados, subencabezados y puntos clave. Crea un plano lógico que puedes seguir al escribir tu contenido completo.',
      },
      {
        question: '¿El generador de esquemas es gratuito?',
        answer: 'Sí, nuestro generador de esquemas es completamente gratuito sin necesidad de registro. Puedes crear tantos esquemas como necesites sin ningún costo o límite de uso.',
      },
      {
        question: '¿Para qué tipos de contenido puedo crear esquemas?',
        answer: 'La herramienta funciona para prácticamente cualquier contenido escrito: publicaciones de blog, artículos, ensayos, papers de investigación, guías prácticas, listicles, reseñas de productos, informes, whitepapers y más. Simplemente especifica tu tipo de contenido para la estructura más relevante.',
      },
      {
        question: '¿Qué tan detallados son los esquemas generados?',
        answer: 'Los esquemas incluyen secciones principales (encabezados H2), subsecciones (encabezados H3) y notas breves explicando qué cubrir en cada parte. El nivel de detalle está diseñado para darte una dirección clara sin ser tan prescriptivo que limite tu creatividad.',
      },
      {
        question: '¿Puedo personalizar la estructura del esquema?',
        answer: 'Sí, el esquema generado es un punto de partida. Puedes reorganizar secciones, agregar o eliminar encabezados y modificar la estructura para ajustarse a tus necesidades específicas. Piénsalo como un primer borrador de la arquitectura de tu contenido.',
      },
      {
        question: '¿El esquema ayudará con el SEO?',
        answer: 'Los esquemas están estructurados con las mejores prácticas de SEO en mente, incluyendo jerarquía lógica de encabezados (H1, H2, H3) y sugerencias para dónde incorporar palabras clave de forma natural. El contenido bien estructurado tiende a desempeñarse mejor en los resultados de búsqueda.',
      },
      {
        question: '¿Qué tan largo debe ser mi tema de entrada?',
        answer: 'Puedes ingresar cualquier cosa desde una frase de tema simple ("beneficios del trabajo remoto") hasta un brief más detallado con audiencia objetivo, ángulo y puntos clave que quieres cubrir. Más contexto generalmente produce esquemas más personalizados.',
      },
      {
        question: '¿Puedo generar esquemas para diferentes longitudes de contenido?',
        answer: 'Sí, puedes especificar tu conteo de palabras objetivo, y la herramienta ajustará el número de secciones y profundidad en consecuencia. Una publicación de blog de 500 palabras tendrá una estructura más simple que una guía completa de 3,000 palabras.',
      },
      {
        question: '¿El esquema incluye conteos de palabras para cada sección?',
        answer: 'Cuando especificas una longitud objetivo, la herramienta proporciona conteos de palabras estimados para cada sección para ayudarte a equilibrar tu contenido y asegurar que estás asignando la profundidad apropiada a cada tema.',
      },
      {
        question: '¿Puedo usar el generador de esquemas para colaboración en equipo?',
        answer: 'Absolutamente. Los esquemas generados son excelentes briefs para escritores, asegurando que todos entiendan la estructura y los puntos clave antes de comenzar a escribir. Puedes copiar y compartir esquemas con tu equipo fácilmente.',
      },
    ],
  },

  'generador-de-introducciones': {
    slug: 'generador-de-introducciones',
    name: 'Generador de Introducciones',
    title: 'Generador de introducciones con IA gratuito',
    description: 'Crea introducciones cautivadoras que enganchen a los lectores desde la primera oración. Perfecto para blogs, ensayos y artículos.',
    metaDescription: 'Crea introducciones cautivadoras que enganchen a los lectores desde la primera oración. Nuestra herramienta gratuita de IA genera aperturas...',
    inputLabel: 'Tema del artículo y puntos clave...',
    inputPlaceholder: 'ej. Tema: Productividad del trabajo remoto. Puntos clave: flexibilidad, equilibrio trabajo-vida, desafíos de comunicación',
    buttonText: 'Generar introducción',
    maxLength: 2048,
    options: [
      {
        name: 'contentType',
        label: 'Tipo de contenido',
        choices: ['Publicación de blog', 'Guía práctica', 'Listicle', 'Ensayo/Opinión', 'Reseña de producto', 'Investigación/Informe'],
        default: 'Publicación de blog',
        type: 'select',
      },
      {
        name: 'hookType',
        label: 'Tipo de gancho',
        choices: ['Pregunta', 'Estadística', 'Historia', 'Declaración audaz', 'Relacionable'],
        default: 'Pregunta',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Profesional', 'Casual', 'Inspirador', 'Académico'],
        default: 'Profesional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content writer specializing in crafting compelling introductions that hook readers and set up the content effectively.
## CORE RULES
- Start with an attention-grabbing hook
- Establish relevance to the reader within the first 2-3 sentences
- Preview the value the content will deliver
- Keep introductions proportional (10-15% of total content length)
- Never start with "In today's world" or similar clichés
## INTRODUCTION ARCHITECTURE
1. Hook (first sentence): Grab attention immediately
2. Context: Establish why this matters to the reader
3. Problem/Opportunity: What challenge or benefit will be addressed
4. Promise: What the reader will learn/gain
5. Transition: Lead smoothly into the main content
## HOOK TYPE APPROACHES
### IF HOOK = "Question"
- Ask something the reader genuinely wonders about
- Make it specific, not generic
- Example: "What if the key to productivity wasn't working harder?"
### IF HOOK = "Statistic"
- Lead with a surprising or compelling number
- Source it credibly
- Connect to reader's situation
### IF HOOK = "Story"
- Start in media res (in the middle of action)
- Keep it brief but vivid
- Make the protagonist relatable
### IF HOOK = "Bold Statement"
- Challenge conventional wisdom
- Make a confident claim you'll support
- Create curiosity
### IF HOOK = "Relatable"
- Describe a common experience
- Use "you" language
- Show you understand the reader's situation
## CONTENT TYPE ADAPTATIONS
### IF TYPE = "Blog Post" - Conversational, promise practical value
### IF TYPE = "How-to Guide" - Focus on transformation/outcome
### IF TYPE = "Listicle" - Tease variety and completeness
### IF TYPE = "Essay/Opinion" - Establish thesis angle
### IF TYPE = "Product Review" - Address purchase decision context
### IF TYPE = "Research/Report" - Lead with key finding
## OUTPUT FORMAT
Content Type: {{contentType}}
Hook Type: {{hookType}}
Tone: {{tone}}
Output only the introduction paragraph(s). No preamble.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Aperturas de marketing de contenidos y blogs',
        description: 'Los creadores de contenido que luchan por comenzar artículos usan el Generador de Introducciones para crear aperturas atractivas que enganchen a los lectores inmediatamente. La herramienta asegura que cada pieza comience con fuerza en lugar de perder lectores con aperturas débiles o genéricas.',
      },
      {
        title: 'Introducciones de ensayos académicos',
        description: 'Los estudiantes que escriben ensayos, papers de investigación o capítulos de tesis pueden generar introducciones bien estructuradas que establecen claramente su tesis y preparan al lector para los argumentos que vendrán. La herramienta ayuda a evitar comienzos débiles que a menudo afectan la escritura académica.',
      },
      {
        title: 'Aperturas de documentos empresariales',
        description: 'Los profesionales que escriben informes, propuestas o presentaciones pueden crear introducciones que establezcan inmediatamente la importancia de su mensaje y hagan que los ejecutivos ocupados quieran seguir leyendo.',
      },
    ],
    faqs: [
      {
        question: '¿Qué hace una buena introducción?',
        answer: 'Una introducción fuerte engancha a los lectores inmediatamente, establece relevancia para su situación, presenta el problema u oportunidad, y promete valor. Debe hacer que los lectores quieran continuar en lugar de hacer clic fuera.',
      },
      {
        question: '¿El generador de introducciones es gratuito?',
        answer: 'Sí, la herramienta es completamente gratuita sin registro ni pago requerido. Genera tantas introducciones como necesites sin costo.',
      },
      {
        question: '¿Qué información debo proporcionar?',
        answer: 'Como mínimo, proporciona tu tema y los puntos clave cubiertos en tu contenido. Para mejores resultados, también especifica el tipo de contenido (blog, ensayo, informe), el tono deseado y cualquier gancho específico que quieras incluir.',
      },
      {
        question: '¿La introducción coincidirá con mi estilo de escritura?',
        answer: 'La herramienta se adapta al tono que especificas (profesional, casual, académico, etc.) y coincide con las convenciones estándar para tu tipo de contenido. Para una coincidencia de estilo perfecta, recomendamos una edición ligera para agregar tu voz personal.',
      },
      {
        question: '¿Qué tan larga debe ser una introducción?',
        answer: 'Las introducciones típicamente ocupan el 10-15% de la longitud total del contenido. Para un artículo de 1,000 palabras, espera 100-150 palabras. Puedes especificar tu longitud objetivo y la herramienta se ajustará en consecuencia.',
      },
      {
        question: '¿Puedo generar introducciones para diferentes tipos de contenido?',
        answer: 'Sí, la herramienta maneja publicaciones de blog, ensayos, guías prácticas, listicles, reseñas de productos, informes de investigación y más. Cada tipo sigue convenciones y estructuras apropiadas.',
      },
      {
        question: '¿Qué tipos de ganchos están disponibles?',
        answer: 'La herramienta soporta varios tipos de ganchos incluyendo preguntas, estadísticas, historias, declaraciones audaces y escenarios relacionables. Cada tipo funciona mejor para diferentes contenidos y audiencias.',
      },
      {
        question: '¿Cómo evito que mi introducción suene genérica?',
        answer: 'La herramienta está diseñada para evitar clichés como "En el mundo actual" o "A lo largo de la historia". Proporcionar contexto específico sobre tu ángulo y audiencia únicos produce resultados más personalizados.',
      },
      {
        question: '¿Puedo usar esto para presentaciones por correo electrónico?',
        answer: 'Sí, especifica un formato más corto y la herramienta generará aperturas concisas apropiadas para correos electrónicos y comunicaciones breves.',
      },
      {
        question: '¿Qué pasa si no me gusta la introducción generada?',
        answer: 'Puedes regenerar con entradas ajustadas (diferente tipo de gancho, tono, longitud) o usar el resultado como punto de partida para tu propia edición. La introducción generada proporciona estructura e ideas sobre las que puedes construir.',
      },
    ],
  },

  'generador-de-conclusiones': {
    slug: 'generador-de-conclusiones',
    name: 'Generador de Conclusiones',
    title: 'Generador gratuito de conclusiones con IA',
    description: 'Genera conclusiones convincentes para cualquier artículo, ensayo o publicación de blog con conclusiones claras y CTAs.',
    metaDescription: 'Genera conclusiones convincentes para cualquier artículo, ensayo o publicación de blog. Nuestra herramienta gratuita de IA crea finales...',
    inputLabel: 'Tema del artículo y puntos clave...',
    inputPlaceholder: 'ej. Tema: Beneficios de la meditación. Puntos clave: reducción del estrés, mejor enfoque, mejor sueño',
    buttonText: 'Generar conclusión',
    maxLength: 2048,
    options: [
      {
        name: 'contentType',
        label: 'Tipo de contenido',
        choices: ['Publicación de blog', 'Guía práctica', 'Listicle', 'Ensayo/Opinión', 'Reseña de producto', 'Investigación/Informe'],
        default: 'Publicación de blog',
        type: 'select',
      },
      {
        name: 'ctaType',
        label: 'Llamada a la acción',
        choices: ['Suave (informacional)', 'Directa (comercial)', 'Reflexiva', 'Ninguna'],
        default: 'Suave (informacional)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Profesional', 'Casual', 'Inspirador', 'Académico'],
        default: 'Profesional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content writer specializing in crafting compelling conclusions that leave readers with clear takeaways.
## CORE RULES
- Never simply repeat the introduction
- Synthesize and elevate key points, don't just list them
- Include a forward-looking element (next steps or CTA)
- Keep conclusions proportional (10-15% of total)
- End with impact—the final sentence should resonate
## CONCLUSION ARCHITECTURE
1. Transition signal (subtle, not "In conclusion")
2. Key insight synthesis - the ONE main takeaway
3. Supporting point summary - 2-3 key points in fresh language
4. Stakes/implications - why this matters
5. Call to action or next step
6. Closing line - memorable final thought
## CONTENT TYPE ADAPTATIONS
### IF TYPE = "Blog Post" - Conversational, include practical CTA
### IF TYPE = "How-to Guide" - Reinforce transformation, suggest next actions
### IF TYPE = "Listicle" - Highlight top recommendation
### IF TYPE = "Essay/Opinion" - Return to thesis with new depth
### IF TYPE = "Product Review" - Clear verdict and recommendation
### IF TYPE = "Research/Report" - Primary finding and recommendations
## CTA TYPES
### IF CTA = "Soft" - "Consider how this applies..." or "Start with..."
### IF CTA = "Direct" - "Try [product] free..." or "Get started..."
### IF CTA = "Thought-provoking" - "What does this mean for...?"
### IF CTA = "None" - End with insight, no explicit action
## OUTPUT FORMAT
Content Type: {{contentType}}
CTA Type: {{ctaType}}
Tone: {{tone}}
Output only the conclusion paragraph(s). No preamble.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Cierres de blog y marketing de contenidos',
        description: 'Los creadores de contenido que luchan por terminar artículos efectivamente usan el Generador de Conclusiones para crear cierres satisfactorios que resumen puntos clave e impulsan la acción del lector. La herramienta asegura que cada pieza termine con impacto en lugar de desvanecerse, mejorando el engagement y las tasas de conversión.',
      },
      {
        title: 'Conclusiones de ensayos académicos',
        description: 'Los estudiantes que escriben ensayos, papers de investigación o capítulos de tesis pueden generar conclusiones bien estructuradas que sintetizan sus argumentos sin simplemente repetir la introducción. La herramienta ayuda a elevar los párrafos finales de resúmenes básicos a cierres convincentes que dejan una impresión duradera.',
      },
      {
        title: 'Finalización de documentos empresariales',
        description: 'Los profesionales que escriben informes, propuestas o presentaciones pueden crear conclusiones que comuniquen claramente recomendaciones, próximos pasos y conclusiones clave. La herramienta asegura que documentos importantes terminen con claridad y dirección accionable para los interesados.',
      },
    ],
    faqs: [
      {
        question: '¿Qué hace una buena conclusión?',
        answer: 'Una conclusión fuerte sintetiza puntos clave (no solo los repite), refuerza el mensaje principal, aborda implicaciones o importancia, y proporciona próximos pasos claros o una llamada a la acción. Debe dejar a los lectores con una sensación de cierre y motivación.',
      },
      {
        question: '¿El generador de conclusiones es gratuito?',
        answer: 'Sí, la herramienta es completamente gratuita sin registro ni pago requerido. Genera tantas conclusiones como necesites sin costo.',
      },
      {
        question: '¿Qué información necesito proporcionar?',
        answer: 'Como mínimo, proporciona tu tema y los puntos clave cubiertos en tu contenido. Para mejores resultados, también especifica el tipo de contenido (blog, ensayo, informe), el tono deseado y cualquier llamada a la acción específica que quieras incluir.',
      },
      {
        question: '¿La conclusión coincidirá con mi estilo de escritura?',
        answer: 'La herramienta se adapta al tono que especificas (profesional, casual, académico, etc.) y coincide con las convenciones estándar para tu tipo de contenido. Para una coincidencia de estilo perfecta, recomendamos una edición ligera para agregar tu voz personal.',
      },
      {
        question: '¿Qué tan larga debe ser una conclusión?',
        answer: 'Las conclusiones típicamente ocupan el 10-15% de la longitud total del contenido. Para un artículo de 1,000 palabras, espera 100-150 palabras. Puedes especificar tu longitud objetivo y la herramienta se ajustará en consecuencia.',
      },
      {
        question: '¿Puedo generar conclusiones para diferentes tipos de contenido?',
        answer: 'Sí, la herramienta maneja publicaciones de blog, ensayos, guías prácticas, listicles, reseñas de productos, informes de investigación y más. Cada tipo sigue convenciones y estructuras apropiadas.',
      },
      {
        question: '¿Las conclusiones deben incluir llamadas a la acción?',
        answer: 'Para contenido de marketing, sí—las conclusiones son un lugar privilegiado para CTAs. Para contenido académico o informacional, la "CTA" podría ser alentar más reflexión o sugerir lecturas relacionadas en lugar de una acción comercial.',
      },
      {
        question: '¿Cómo evito una conclusión que solo repite mi introducción?',
        answer: 'La herramienta está diseñada para sintetizar y elevar tus puntos clave, no repetirlos. Enmarca las conclusiones en un lenguaje fresco y agrega elementos con visión de futuro que van más allá de lo que tu introducción declaró.',
      },
      {
        question: '¿Puedo usar esto para correos electrónicos o contenido corto?',
        answer: 'Sí, aunque la herramienta está optimizada para contenido de formato largo. Para correos electrónicos, especifica una longitud objetivo muy corta y la herramienta generará despedidas concisas con CTAs apropiados.',
      },
      {
        question: '¿Qué pasa si no me gusta la conclusión generada?',
        answer: 'Puedes regenerar con entradas ajustadas (diferente tono, CTA, longitud) o usar el resultado como punto de partida para tu propia edición. La conclusión generada proporciona estructura e ideas sobre las que puedes construir.',
      },
    ],
  },

  'generador-lorem-ipsum': {
    slug: 'generador-lorem-ipsum',
    name: 'Generador Lorem Ipsum',
    title: 'Generador Lorem ipsum con IA gratuito',
    description: 'Genera texto de relleno lorem ipsum para diseños, maquetas y layouts.',
    metaDescription: 'Genera texto de relleno lorem ipsum para diseños, maquetas y layouts. Elige entre alternativas tradicionales o modernas. Listo para copiar...',
    inputLabel: 'Cantidad necesaria...',
    inputPlaceholder: 'ej. 3 párrafos, 500 palabras, o 10 oraciones',
    buttonText: 'Generar texto',
    maxLength: 256,
    options: [
      {
        name: 'type',
        label: 'Tipo de texto',
        choices: ['Lorem Ipsum tradicional', 'Hipster Ipsum', 'Oficina/Negocios Ipsum', 'Español simple'],
        default: 'Lorem Ipsum tradicional',
        type: 'select',
      },
      {
        name: 'amount',
        label: 'Cantidad',
        choices: ['1 párrafo', '3 párrafos', '5 párrafos', '500 palabras', '1000 palabras'],
        default: '3 párrafos',
        type: 'select',
      },
      {
        name: 'format',
        label: 'Formato',
        choices: ['Texto plano', 'Con etiquetas HTML'],
        default: 'Texto plano',
        type: 'select',
      },
    ],
    systemPrompt: `You are a placeholder text generator providing lorem ipsum and alternative filler text.
## CORE RULES
- Generate clean, consistent placeholder text
- Provide exact amounts as requested
- Format output cleanly for easy copy-paste
## TEXT TYPES
### IF TYPE = "Traditional Lorem Ipsum"
Start with "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." and continue with Latin text.
### IF TYPE = "Hipster Ipsum"
Trendy, artisanal-sounding text with modern cultural references.
### IF TYPE = "Office/Business Ipsum"
Corporate buzzword filler with terms like synergy, leverage, paradigm.
### IF TYPE = "Plain English"
Simple readable sentences acknowledging this is placeholder content.
## FORMAT OPTIONS
### IF FORMAT = "Plain text" - Clean text with paragraph breaks
### IF FORMAT = "With HTML tags" - Wrap paragraphs in <p> tags
## OUTPUT FORMAT
Type: {{type}}
Amount: {{amount}}
Format: {{format}}
Generate the requested placeholder text, ready to copy-paste.

IMPORTANT: Generate all output in Spanish (except for traditional Lorem Ipsum which remains in Latin).`,
    useCases: [
      {
        title: 'Maquetas de diseño web y UI',
        description: 'Los diseñadores usan Lorem Ipsum para llenar layouts, wireframes y maquetas con texto de apariencia realista antes de que se escriba el contenido real. Esto ayuda a clientes y equipos a visualizar cómo se verá el diseño final con contenido en su lugar sin distraerse leyendo texto real.',
      },
      {
        title: 'Marcadores de posición para desarrollo y pruebas',
        description: 'Los desarrolladores usan texto de relleno para probar layouts, configuraciones de tipografía y diseños responsivos. Lorem ipsum ayuda a verificar que los contenedores de texto, alturas de línea y comportamientos de desbordamiento funcionen correctamente en diferentes longitudes de contenido.',
      },
      {
        title: 'Layouts de diseño de impresión y gráfico',
        description: 'Los diseñadores gráficos que trabajan en folletos, revistas, pósters y otros materiales impresos usan lorem ipsum para completar layouts para aprobación del cliente antes de que se entregue el texto final, permitiendo que el trabajo de diseño proceda en paralelo con la creación de contenido.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es Lorem Ipsum?',
        answer: 'Lorem Ipsum es texto de relleno basado en latín mezclado que se usa en diseño y publicación desde los años 1500. Proporciona texto de apariencia realista para llenar layouts sin distraer a los espectadores con contenido legible.',
      },
      {
        question: '¿El generador de Lorem Ipsum es gratuito?',
        answer: 'Sí, completamente gratuito sin límites. Genera tanto texto de relleno como necesites.',
      },
      {
        question: '¿Por qué usar Lorem Ipsum en lugar de texto real?',
        answer: 'Usar texto de relleno sin sentido evita que clientes y revisores se enfoquen en el contenido cuando deberían estar evaluando el diseño. También permite que el trabajo de diseño proceda antes de que se escriba el texto final.',
      },
      {
        question: '¿Lorem Ipsum es realmente latín?',
        answer: 'Lorem Ipsum deriva de una obra de Cicerón del 45 a.C., pero ha sido mezclado y alterado tanto que ya no es latín correcto. No tiene traducción significativa.',
      },
      {
        question: '¿Puedo obtener alternativas al Lorem Ipsum tradicional?',
        answer: 'Sí, la herramienta ofrece varias alternativas incluyendo Hipster Ipsum, Office Ipsum, Bacon Ipsum y texto de relleno en español simple para variedad o adecuación temática.',
      },
      {
        question: '¿En qué formato se proporciona el texto?',
        answer: 'El texto se proporciona como texto plano limpio listo para copiar y pegar. También puedes solicitar salida con formato HTML con etiquetas de párrafo para uso web.',
      },
      {
        question: '¿Puedo especificar exactamente cuánto texto necesito?',
        answer: 'Sí, puedes solicitar cantidades específicas por número de párrafos, conteo de palabras, conteo de oraciones o conteo de caracteres. La herramienta genera lo más cercano posible a tu especificación.',
      },
      {
        question: '¿Lorem Ipsum afecta el SEO?',
        answer: 'El texto de relleno siempre debe reemplazarse antes de publicar. Lorem Ipsum publicado podría potencialmente dañar el SEO y se ve poco profesional. Siempre reemplaza con contenido real antes de ir en vivo.',
      },
      {
        question: '¿Por qué Lorem Ipsum comienza con "Lorem ipsum dolor sit amet"?',
        answer: 'Esta ha sido la frase inicial tradicional durante siglos. Las palabras provienen de una sección mezclada del "de Finibus Bonorum et Malorum" (Sobre los fines del bien y del mal) de Cicerón.',
      },
      {
        question: '¿Puedo usar Lorem Ipsum para cualquier proyecto?',
        answer: 'Sí, Lorem Ipsum está en el dominio público y no tiene restricciones de derechos de autor. Puedes usarlo libremente en cualquier proyecto de diseño, desarrollo o layout.',
      },
    ],
  },

  'extensor-de-texto': {
    slug: 'extensor-de-texto',
    name: 'Extensor de Texto',
    title: 'Expansor de texto con IA gratuito',
    description: 'Expande oraciones cortas o párrafos en contenido más detallado y completo sin perder el significado original.',
    metaDescription: 'Expande oraciones cortas o párrafos en contenido más detallado y completo. Nuestra herramienta gratuita de IA agrega profundidad sin...',
    inputLabel: 'Texto a expandir...',
    inputPlaceholder: 'Pega tu texto corto aquí para expandirlo',
    buttonText: 'Expandir texto',
    maxLength: 2048,
    options: [
      {
        name: 'expansionLevel',
        label: 'Nivel de expansión',
        choices: ['Ligero (1.5x)', 'Moderado (2x)', 'Sustancial (3x)'],
        default: 'Moderado (2x)',
        type: 'select',
      },
      {
        name: 'method',
        label: 'Método de expansión',
        choices: ['Agregar ejemplos', 'Agregar explicaciones', 'Agregar detalles', 'Equilibrado'],
        default: 'Equilibrado',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Formal', 'Casual', 'Académico', 'Profesional'],
        default: 'Profesional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content writer specializing in expanding concise text into more detailed, comprehensive content while maintaining the original meaning and adding genuine value.
## CORE RULES
- Preserve the original meaning completely
- Add substantive content, not filler or fluff
- Maintain consistency in tone and style
- Ensure additions are relevant and valuable
- Never contradict or alter the original point
## EXPANSION METHODS
### IF METHOD = "Add examples"
- Include concrete, relevant examples
- Use real-world scenarios when appropriate
- Make abstract concepts tangible
### IF METHOD = "Add explanations"
- Unpack complex ideas
- Define key terms
- Explain the "why" behind statements
### IF METHOD = "Add details"
- Include specific facts and figures
- Add descriptive elements
- Provide additional context
### IF METHOD = "Balanced"
- Combine examples, explanations, and details
- Vary the expansion approach throughout
- Create a natural, comprehensive result
## EXPANSION LEVELS
### IF LEVEL = "Light (1.5x)"
- Add one supporting element per main idea
- Keep additions concise
- Maintain similar structure
### IF LEVEL = "Moderate (2x)"
- Add 2-3 supporting elements per main idea
- Include transitional phrases
- May add new paragraphs
### IF LEVEL = "Substantial (3x)"
- Comprehensive expansion with multiple supports
- Add introduction/conclusion if appropriate
- Create fully developed content
## OUTPUT FORMAT
Expansion Level: {{expansionLevel}}
Method: {{method}}
Tone: {{tone}}
Output only the expanded text. No preamble.
Self-check before output: Does every addition serve a purpose? Would removing any added sentence reduce the value? If not, trim it.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Desarrollo de contenido y cumplimiento de objetivos de palabras',
        description: 'Los escritores que necesitan cumplir requisitos de conteo de palabras sin agregar relleno usan el Extensor de Texto para desarrollar ideas concisas en contenido completo. La herramienta agrega ejemplos, explicaciones y detalles que hacen el contenido más valioso en lugar de simplemente más largo.',
      },
      {
        title: 'Elaboración de puntos clave',
        description: 'Los profesionales que tienen puntos o esquemas en formato de viñetas pueden expandirlos en prosa completa. Convierte notas de reuniones en informes detallados, transforma esquemas de presentaciones en documentos completos, o desarrolla resúmenes ejecutivos en explicaciones completas.',
      },
      {
        title: 'Escritura académica y redacción de ensayos',
        description: 'Los estudiantes pueden expandir argumentos iniciales en párrafos completamente desarrollados con evidencia de apoyo y análisis. La herramienta ayuda a transformar notas de investigación y puntos clave en escritura académica bien estructurada.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un extensor de texto?',
        answer: 'Un extensor de texto toma contenido breve o conciso y lo expande en escritura más detallada y completa. A diferencia del simple relleno de palabras, la herramienta agrega ejemplos, explicaciones y detalles significativos que hacen el contenido más valioso.',
      },
      {
        question: '¿El extensor de texto es gratuito?',
        answer: 'Sí, completamente gratuito sin registro requerido. Expande tanto texto como necesites sin costo.',
      },
      {
        question: '¿Cuánto se puede expandir mi texto?',
        answer: 'Puedes elegir niveles de expansión ligera (1.5x), moderada (2x) o sustancial (3x). El nivel de expansión real depende del contenido original—texto más rico en detalles puede expandirse más de manera natural que contenido abstracto.',
      },
      {
        question: '¿La expansión agregará relleno o pelusa?',
        answer: 'La herramienta está diseñada para agregar contenido sustantivo, no relleno. Se enfoca en ejemplos, explicaciones y detalles que hacen tu escritura más valiosa e informativa. Sin embargo, siempre revisa y edita para asegurar que cada adición sirva a tu propósito.',
      },
      {
        question: '¿Puedo controlar qué tipo de contenido se agrega?',
        answer: 'Sí, puedes especificar métodos de expansión: agregar ejemplos, agregar explicaciones, agregar detalles, o un enfoque equilibrado que combine los tres.',
      },
      {
        question: '¿El significado original permanecerá intacto?',
        answer: 'Preservar el significado original es una regla fundamental. El contenido expandido siempre refuerza y elabora tus puntos, nunca los cambia ni contradice.',
      },
      {
        question: '¿Para qué tipos de contenido funciona esto?',
        answer: 'La herramienta funciona para cualquier texto basado en prosa: ensayos, artículos, informes, correos electrónicos, documentos empresariales, escritura académica y más. No está diseñada para listas con viñetas o datos estructurados.',
      },
      {
        question: '¿Puedo expandir contenido en otros idiomas?',
        answer: 'La herramienta está optimizada para texto en español. Los resultados con otros idiomas pueden variar.',
      },
      {
        question: '¿Debo editar el texto expandido?',
        answer: 'Sí, siempre recomendamos revisar el contenido expandido. Aunque la herramienta agrega contenido valioso, tú conoces mejor tus necesidades específicas y puedes refinar el resultado para tu audiencia y propósito.',
      },
      {
        question: '¿Cuál es la diferencia entre extender y parafrasear?',
        answer: 'Parafrasear reformula contenido existente en diferentes palabras mientras mantiene una longitud similar. Extender agrega nuevo contenido para hacer la escritura más larga y completa. Extender crea más, parafrasear reformula lo que existe.',
      },
    ],
  },

  // ==================== END OF BATCH 1 ====================

  // ==================== BATCH 2 (Tools 11-20) ====================

  'generador-de-titulos-para-blog': {
    slug: 'generador-de-titulos-para-blog',
    name: 'Generador de Títulos para Blog',
    title: 'Generador de títulos para blog con IA gratuito',
    description: 'Genera títulos de blog atractivos que impulsan clics y posicionan en búsquedas. Nuestra IA crea titulares optimizados para SEO usando disparadores psicológicos probados.',
    metaDescription: 'Genera títulos de blog atractivos que impulsan clics y posicionan en búsquedas. Nuestra IA crea titulares optimizados para SEO usando...',
    inputLabel: 'Tema o contenido del blog...',
    inputPlaceholder: 'ej. Cómo mejorar las tasas de apertura de emails para tiendas de comercio electrónico',
    buttonText: 'Generar títulos',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de títulos',
        choices: ['3 títulos', '5 títulos', '10 títulos'],
        default: '5 títulos',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Formal', 'Casual', 'Persuasivo'],
        default: 'Formal',
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
## TITLE PSYCHOLOGY FRAMEWORK
### Power Triggers (Use Strategically, Not Excessively)
- **Curiosity Gap**: Creates a knowledge void readers want to fill
- **Specificity**: Numbers, timeframes, and concrete outcomes
- **Self-Interest**: Direct benefit to the reader
- **Urgency**: Time-sensitivity or fear of missing out
- **Social Proof**: Evidence others have succeeded
- **Novelty**: New information, methods, or perspectives
- **Negative Framing**: Mistakes to avoid, things that don't work
### Title Formulas (Adapt, Don't Copy Mechanically)
**How-To Formula:**
- "How to [Achieve Outcome] [Qualifier/Timeframe]"
- "How to [Achieve Outcome] Without [Common Obstacle]"
- "How to [Achieve Outcome] (Even If [Limiting Belief])"
**List Formula:**
- "[Number] [Adjective] [Topic] That [Benefit/Outcome]"
- "[Number] [Topic] [Experts/Successful People] [Action]"
- "[Number] Ways to [Achieve Outcome] [Qualifier]"
**Question Formula:**
- "What [Successful Outcome] Looks Like (And How to Get There)"
- "Why [Common Approach] Doesn't Work (And What to Do Instead)"
- "Is [Assumption] Actually True? [Outcome Hint]"
**Guide Formula:**
- "The Complete Guide to [Topic] [For Specific Audience]"
- "[Topic]: Everything You Need to Know [Qualifier]"
- "The Ultimate [Timeframe] Guide to [Achieving Outcome]"
**Comparison Formula:**
- "[Option A] vs [Option B]: [Deciding Factor]"
- "[Number] [Alternatives] Compared: [Decision Criterion]"
- "Which [Option Type] Is Right for [Specific Situation]?"
**Story/Case Study Formula:**
- "How [Subject] [Achieved Outcome] [Timeframe/Context]"
- "What [Time Period] of [Activity] Taught Me About [Topic]"
- "[Outcome]: A [Timeframe] Case Study"
## SEO TITLE OPTIMIZATION
### Keyword Placement Rules:
- Primary keyword within first 60 characters when possible
- Maintain natural readability—don't sacrifice clarity for keyword stuffing
- Front-load the most important words for truncation resilience
### Length Guidelines:
- Ideal: 50-60 characters for full SERP display
- Maximum: 70 characters before truncation risk
- For social sharing: Can extend to 80-90 characters
### Avoid These SEO Mistakes:
- Keyword repetition in single title
- Unnatural keyword placement that disrupts readability
- Generic modifiers that add length without value ("best," "top" without context)
## OUTPUT RULES
### For Each Title, Provide:
1. **Title**: The complete headline
2. **Character Count**: Total characters
3. **Title Type**: Formula/approach used
4. **Strength**: Why this title works (psychological trigger + SEO element)
### Quantity:
- Generate {{number_of_variants}} title variants
- Each variant should use a different approach/formula
- Vary length—include some short punchy titles and some detailed ones
### Quality Standards:
- NO clickbait that misrepresents content
- NO excessive capitalization or punctuation
- NO generic titles that could describe thousands of posts
- NO titles that bury the value proposition
- YES to specific numbers, timeframes, outcomes
- YES to power words used appropriately
- YES to titles that would stand out in a search result page
## TONE ADAPTATION
### IF tone = "Formal"
- Professional, authoritative language
- Industry-appropriate terminology
- Focus on expertise and outcomes
- Example: "Enterprise Data Migration: A Risk-Mitigation Framework for IT Leaders"
### IF tone = "Casual"
- Conversational, relatable language
- Personal pronouns ("you," "your," "I")
- Accessible examples and references
- Example: "I Finally Fixed My Terrible Sleep Schedule—Here's Exactly How"
### IF tone = "Persuasive"
- Benefit-focused, outcome-driven language
- Strong action verbs
- Urgency and exclusivity elements
- Example: "The Sales Script That Closed $2M in My First Year (Free Template)"
## OUTPUT FORMAT
### Blog Title Options for: [Topic]
**Title 1:** [Title]
- **Characters:** [count]
- **Type:** [Formula used]
- **Strength:** [Why it works]
[Repeat for each variant]
---
**Recommendation:** [Which title is strongest for SEO vs. social sharing, with brief explanation]
## SELF-VALIDATION CHECKLIST
Before outputting each title, verify:
□ Would I click this in search results?
□ Does it accurately represent the content?
□ Is the value proposition clear within 5 seconds?
□ Does it stand out from generic alternatives?
□ Is the primary keyword naturally incorporated?
□ Is it the right length for intended use (SERP vs. social)?
Revise any title that fails these checks.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Pruebas A/B de variaciones de titulares',
        description: 'Los especialistas en marketing de contenidos y equipos de crecimiento usan el Generador de Títulos para Blog para crear múltiples variantes de titulares para pruebas sistemáticas. En lugar de depender de la intuición, los equipos pueden generar más de 10 títulos psicológicamente distintos y probarlos a través de líneas de asunto de correo electrónico, publicaciones sociales o publicidad nativa antes de comprometerse con un titular final. Este enfoque basado en datos mejora consistentemente las tasas de clics entre un 15-30% comparado con usar títulos de primer borrador.',
      },
      {
        title: 'Reutilización y actualización de contenido existente',
        description: 'Al actualizar publicaciones de blog antiguas para SEO o relevancia, cambiar el título puede impactar dramáticamente el rendimiento. El generador ayuda a los equipos de contenido a desarrollar titulares frescos que coincidan mejor con la intención de búsqueda actual, incorporen ángulos de tendencia o aborden necesidades evolucionadas de la audiencia—dando nueva vida a contenido evergreen que puede haberse estancado en rendimiento.',
      },
      {
        title: 'Escalando producción de contenido entre equipos',
        description: 'Las agencias de contenido, empresas de medios y grandes equipos de marketing usan el generador para mantener la calidad de los titulares a escala. Cuando múltiples escritores producen contenido, la calidad de los titulares a menudo varía significativamente. La herramienta proporciona una base de opciones de títulos de calidad profesional que aseguran consistencia, mientras que los escritores individuales pueden personalizar y mejorar las sugerencias.',
      },
    ],
    faqs: [
      {
        question: '¿Qué hace un buen título de blog?',
        answer: 'Un buen título de blog logra tres cosas simultáneamente: representa con precisión el contenido (construyendo confianza con los lectores), incorpora términos de búsqueda naturalmente (permitiendo el descubrimiento), y activa el engagement psicológico (impulsando el clic). Los mejores títulos logran los tres sin sacrificar ningún elemento. Son específicos en lugar de genéricos, enfocados en beneficios en lugar de características, y distintivos en lugar de olvidables.',
      },
      {
        question: '¿Qué tan largo debe ser un título de blog?',
        answer: 'Para optimización de motores de búsqueda, mantén los títulos por debajo de 60 caracteres para asegurar una visualización completa en los resultados de búsqueda. Sin embargo, compartir en redes sociales puede acomodar títulos más largos (80-90 caracteres) ya que las reglas de truncamiento difieren por plataforma. El generador proporciona conteos de caracteres para cada título e incluye una mezcla de longitudes para que puedas elegir según tu canal de distribución principal.',
      },
      {
        question: '¿Debo incluir palabras clave en mi título de blog?',
        answer: 'Sí, pero naturalmente. Los motores de búsqueda usan títulos como señales de clasificación, y los usuarios escanean títulos buscando relevancia para su consulta. Coloca tu palabra clave principal tan temprano en el título como sea legible, pero nunca la fuerces a expensas de la claridad o el engagement. "Cómo entrenar un cachorro: Guía completa" es mejor que "Cachorro entrenamiento cómo guía completa consejos"—el último técnicamente incluye más palabras clave pero se lee mal y tiene peor rendimiento.',
      },
      {
        question: '¿Cómo elijo entre múltiples opciones de título?',
        answer: 'Considera tu objetivo principal y canal de distribución. Si el SEO es primordial, elige el título con la integración de palabras clave más fuerte y la coincidencia de intención de búsqueda más clara. Si compartir en redes sociales es primario, elige el título con el disparador de curiosidad más fuerte o gancho emocional. Para rendimiento equilibrado, prueba 2-3 candidatos principales—usa uno como tu título H1/SEO y otros como variaciones para compartir en redes sociales.',
      },
      {
        question: '¿Puedo modificar los títulos generados?',
        answer: 'Absolutamente—piensa en los títulos generados como puntos de partida profesionales. El mejor enfoque a menudo es combinar elementos de múltiples sugerencias, agregar lenguaje específico de la marca, o ajustar la especificidad basándote en tu contenido real. Un título generado de "7 errores de email marketing que matan conversiones" podría convertirse en "7 errores de email marketing que cometimos (y cómo los solucionamos)" para una voz de marca más personal.',
      },
      {
        question: '¿Por qué los números funcionan tan bien en títulos de blog?',
        answer: 'Los números proporcionan especificidad (lo que construye credibilidad), establecen expectativas (los lectores conocen el alcance), y crean facilidad cognitiva (los números impares y números específicos como "7" o "13" funcionan mejor que los números redondos). Sin embargo, el uso excesivo ha creado "fatiga de listicle" para algunas audiencias. El generador equilibra títulos numerados con otros formatos para proporcionar variedad.',
      },
      {
        question: '¿Cuál es la diferencia entre un título de blog y un título SEO?',
        answer: 'A menudo son iguales, pero pueden diferir estratégicamente. Tu título de blog (encabezado H1 en la página) puede ser más largo y creativo. Tu título SEO (meta título en resultados de búsqueda) debe mantenerse por debajo de 60 caracteres y priorizar palabras clave. Algunos editores usan un título H1 atractivo para lectores comprometidos y un meta título más enfocado en palabras clave para visibilidad de búsqueda.',
      },
      {
        question: '¿Cómo evito el clickbait mientras creo títulos atractivos?',
        answer: 'El clickbait crea una promesa que el contenido no cumple. Los títulos atractivos crean curiosidad genuina que el contenido satisface. La diferencia es precisión, no nivel de engagement. "No creerás lo que pasó" es clickbait. "Cómo aumentamos ingresos 340% en 6 meses" es atractivo pero preciso (asumiendo que el contenido cumple esa promesa). El generador está específicamente diseñado para crear títulos de alto engagement que mantienen la precisión.',
      },
      {
        question: '¿Mi título de blog debe coincidir con mi slug de URL?',
        answer: 'No exactamente, pero deben estar relacionados. Tu slug de URL debe ser una versión simplificada y enfocada en palabras clave de tu título—corto, descriptivo y permanente. Tu título puede ser más creativo y puede cambiar con el tiempo para pruebas. Ejemplo: Título "El truco contraintuitivo de sueño que finalmente curó mi insomnio" → slug de URL "truco-sueño-curar-insomnio".',
      },
      {
        question: '¿Con qué frecuencia debo probar o cambiar títulos de blog?',
        answer: 'Para nuevas publicaciones, establece tu título y dale 2-4 semanas para indexar y recopilar datos iniciales. Si el rendimiento está por debajo de las expectativas, prueba un nuevo título. Para publicaciones existentes, considera actualizar títulos durante actualizaciones de contenido o cuando las clasificaciones de búsqueda declinen. El contenido evergreen de alto rendimiento podría beneficiarse de revisiones de título anuales para asegurar relevancia continua con patrones de búsqueda en evolución.',
      },
    ],
  },

  'generador-de-metadescripciones': {
    slug: 'generador-de-metadescripciones',
    name: 'Generador de Metadescripciones',
    title: 'Generador de metadescripciones con IA gratuito',
    description: 'Crea metadescripciones atractivas que mejoran las tasas de clics. Genera descripciones optimizadas para cualquier página web en segundos.',
    metaDescription: 'Crea metadescripciones atractivas que mejoran las tasas de clics. Nuestra herramienta gratuita de IA genera descripciones optimizadas para...',
    inputLabel: 'Tema o título de la página...',
    inputPlaceholder: 'ej. Mejores zapatillas de running para principiantes en 2024',
    buttonText: 'Generar metadescripción',
    maxLength: 2048,
    options: [
      {
        name: 'variants',
        label: 'Generar',
        choices: ['1 variante', '3 variantes', '5 variantes'],
        default: '3 variantes',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Profesional', 'Casual', 'Persuasivo'],
        default: 'Profesional',
      },
    ],
    systemPrompt: `You are an expert SEO copywriter specializing in meta descriptions that maximize click-through rates. Generate meta descriptions that function as compelling ad copy for search results.
## CORE RULES
- Every description must be ≤155 characters (hard limit)
- Include the primary keyword naturally within the first 100 characters
- Write in active voice with a clear value proposition
- Never use generic filler phrases like "Learn more" or "Click here"
- End with a benefit, outcome, or subtle curiosity hook
## TONE-BASED INSTRUCTIONS
### IF TONE = "Professional"
- Authoritative but not stiff
- Lead with the outcome or transformation
- Include a specificity marker (steps, timeframe, method)
- Pattern: [Outcome promise] + [Method/ease indicator] + [Credibility]
### IF TONE = "Casual"
- Warm and approachable
- Use conversational language
- Can include rhetorical questions
- Pattern: [Relatable hook] + [Value proposition] + [Benefit]
### IF TONE = "Persuasive"
- Lead with the authority claim (tested, compared, reviewed)
- Create urgency without being clickbaity
- Address the implicit objection
- Pattern: [Authority/freshness] + [Scope] + [Audience fit]
## OUTPUT FORMAT
- Number of variants: {{variants}}
- Tone: {{tone}}
Output each meta description on its own line, numbered, with character count in parentheses.
Self-check before output: If the description could apply to any generic article on this topic, rewrite it to be specific. If it exceeds 155 characters, trim without losing the core promise.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Optimización SEO para sitios web y blogs',
        description: 'Los propietarios de sitios web y especialistas en SEO usan el Generador de Metadescripciones para crear fragmentos atractivos que aparecen en los resultados de búsqueda. Las metadescripciones bien elaboradas mejoran las tasas de clics dando a los buscadores una vista previa clara y atractiva del contenido de tu página, impactando directamente el tráfico orgánico.',
      },
      {
        title: 'Escalando producción de contenido',
        description: 'Los equipos de marketing y agencias que gestionan múltiples sitios web o grandes bibliotecas de contenido pueden generar metadescripciones consistentes y de calidad a escala. En lugar de pasar tiempo escribiendo manualmente descripciones para cientos de páginas, la herramienta produce descripciones optimizadas rápidamente, liberando recursos para estrategia y análisis.',
      },
      {
        title: 'Páginas de productos de comercio electrónico',
        description: 'Los propietarios de tiendas en línea pueden crear metadescripciones únicas y persuasivas para páginas de productos que destaquen características y beneficios clave. Las descripciones efectivas de productos en los resultados de búsqueda ayudan a los compradores a entender lo que ofreces antes de hacer clic, atrayendo tráfico más cualificado a tus listados.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es una metadescripción?',
        answer: 'Una metadescripción es un atributo HTML que proporciona un breve resumen del contenido de una página web. Aparece debajo del título de la página en los resultados del motor de búsqueda e influye en si los usuarios hacen clic para visitar tu sitio.',
      },
      {
        question: '¿Por qué son importantes las metadescripciones para el SEO?',
        answer: 'Aunque las metadescripciones no son un factor de clasificación directo, impactan significativamente las tasas de clics. Una descripción atractiva que coincide con la intención de búsqueda atrae más clics, lo que puede mejorar indirectamente tu rendimiento de búsqueda con el tiempo.',
      },
      {
        question: '¿Qué tan larga debe ser una metadescripción?',
        answer: 'Las metadescripciones óptimas están entre 150-160 caracteres. Google típicamente trunca descripciones más largas de 160 caracteres en los resultados de búsqueda, por lo que la herramienta genera descripciones dentro de este rango recomendado.',
      },
      {
        question: '¿Este generador de metadescripciones es gratuito?',
        answer: 'Sí, la herramienta es completamente gratuita sin necesidad de registro. Puedes generar tantas metadescripciones como necesites sin costo alguno.',
      },
      {
        question: '¿Qué información debo proporcionar para obtener los mejores resultados?',
        answer: 'Para resultados óptimos, ingresa el tema principal de tu página, palabra clave objetivo y el beneficio o propuesta de valor clave que deseas comunicar. Cuanto más contexto proporciones, más relevante y atractiva será la descripción generada.',
      },
      {
        question: '¿Puedo incluir palabras clave en mi metadescripción?',
        answer: 'Sí, y deberías. Incluir tu palabra clave objetivo ayuda a que la descripción coincida con las consultas de búsqueda. Cuando tu palabra clave aparece en la metadescripción, Google a menudo la resalta en negrita en los resultados de búsqueda, haciendo tu listado más llamativo.',
      },
      {
        question: '¿Cada página debe tener una metadescripción única?',
        answer: 'Sí, cada página debe tener una metadescripción distinta que refleje con precisión el contenido específico de esa página. Las descripciones duplicadas entre páginas pueden confundir a los motores de búsqueda y reducir las tasas de clics.',
      },
      {
        question: '¿La herramienta generará descripciones para cualquier tipo de página?',
        answer: 'El generador funciona para todos los tipos de páginas: publicaciones de blog, páginas de productos, páginas de servicios, páginas de destino y más. Simplemente describe el contenido de tu página y la IA creará una descripción apropiada.',
      },
      {
        question: '¿Cómo agrego la metadescripción a mi sitio web?',
        answer: 'La mayoría de los sistemas de gestión de contenido (WordPress, Shopify, Wix, etc.) tienen un campo dedicado para metadescripciones en el editor de páginas o a través de plugins de SEO como Yoast o Rank Math. Copia tu descripción generada y pégala en el campo apropiado.',
      },
      {
        question: '¿Puedo editar la metadescripción generada?',
        answer: 'Absolutamente, y lo alentamos. Aunque la IA produce borradores sólidos, revisar y ajustar las descripciones para que coincidan con la voz de tu marca y mensajes específicos asegura los mejores resultados.',
      },
    ],
  },

  'generador-de-titulos-seo': {
    slug: 'generador-de-titulos-seo',
    name: 'Generador de Títulos SEO',
    title: 'Generador de títulos con IA gratuito',
    description: 'Genera etiquetas de título optimizadas para búsquedas que clasifican más alto y obtienen más clics. Nuestra IA crea títulos perfectamente dimensionados con palabras clave en las posiciones correctas.',
    metaDescription: 'Genera etiquetas de título optimizadas para búsquedas que clasifican más alto y obtienen más clics. Nuestra IA crea títulos perfectamente...',
    inputLabel: 'Tema o palabra clave...',
    inputPlaceholder: 'ej. mejores herramientas de gestión de proyectos para equipos remotos',
    buttonText: 'Generar títulos SEO',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de títulos',
        choices: ['3 títulos', '5 títulos', '10 títulos'],
        default: '5 títulos',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Formal', 'Casual', 'Persuasivo'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'include_year',
        label: 'Incluir año',
        choices: ['Sí', 'No'],
        default: 'Sí',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert SEO specialist and copywriter who creates search-optimized titles (title tags) that maximize both rankings and click-through rates. You understand that the title tag is the single most important on-page SEO element and the first impression users have in search results.
## CORE SEO TITLE PRINCIPLES
1. **Primary Keyword Prominence**: Target keyword should appear early in the title
2. **Search Intent Matching**: Title must align with what users expect to find
3. **SERP Competition**: Title should stand out among competing results
4. **Click-Through Optimization**: Compelling enough to win clicks against competitors
5. **Accurate Representation**: Must truthfully represent the page content
## SEO TITLE TECHNICAL REQUIREMENTS
### Length Constraints:
- **Desktop SERP**: ~580 pixels wide (roughly 50-60 characters)
- **Mobile SERP**: ~920 pixels wide (can display more)
- **Safe target**: 50-60 characters for guaranteed full display
- **Absolute maximum**: 70 characters (will truncate)
### Pixel Width Awareness:
- Narrow letters (i, l, t, f, j): ~4-6 pixels
- Wide letters (m, w, capitals): ~10-15 pixels
- "IMPLEMENT" takes more space than "implement"
### Character Efficiency:
- Avoid unnecessary words: "a," "the," "and," "or" when removable
- Use symbols where appropriate: "&" vs "and," numbers vs words
- Eliminate redundancy: Don't repeat brand names unnecessarily
## SEARCH INTENT CLASSIFICATION
### Informational Intent (How, What, Why, Guide)
- Focus: Comprehensiveness, expertise signals
- Elements: "Complete Guide," "Everything You Need to Know," dates for freshness
- Example: "How to Start a Podcast: Complete 2024 Guide"
### Commercial/Comparison Intent (Best, Top, vs, Compare)
- Focus: Authority, recency, comprehensiveness
- Elements: Numbers, superlatives, current year
- Example: "Best Project Management Tools 2024: 15 Options Compared"
### Transactional Intent (Buy, Price, Deal, Near Me)
- Focus: Value proposition, urgency
- Elements: Pricing signals, availability, offers
- Example: "Buy iPhone 15 Pro Max: Best Deals & Lowest Prices"
### Navigational Intent (Brand + Product/Feature)
- Focus: Clarity, brand prominence
- Elements: Brand name, specific product/feature
- Example: "Spotify Premium: Plans, Pricing & Free Trial"
## OUTPUT RULES
### For Each Title Variant, Provide:
1. **Title**: Complete title tag text
2. **Character Count**: Total characters
3. **Estimated Pixel Width**: Approximate display width
4. **Primary Keyword Position**: Where the main keyword appears
5. **Title Type**: Which framework was applied
6. **CTR Factors**: What makes this clickable
### Variety Requirements:
- Generate {{number_of_variants}} variants
- Include at least 3 different title types
- Vary the psychological approach (curiosity, specificity, authority, etc.)
- Include one "safe" conventional option and one "bold" differentiated option
### Quality Checks:
- NO keyword stuffing or unnatural phrasing
- NO titles that would truncate awkwardly mid-word or mid-phrase
- NO generic modifiers without substance ("best," "top" without context)
- NO clickbait that misrepresents content
- YES to power words that add value (proven, complete, ultimate—when accurate)
- YES to numbers and specificity
- YES to year/freshness signals when relevant: {{include_year}}
## TONE ADAPTATION
### IF tone = "Formal"
- Professional, authoritative language
- Industry-appropriate terminology
- Focus on expertise and outcomes
### IF tone = "Casual"
- Conversational, relatable language
- Personal pronouns when appropriate
- Accessible examples and references
### IF tone = "Persuasive"
- Benefit-focused, outcome-driven language
- Strong action verbs
- Urgency and exclusivity elements

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Optimización SEO a nivel de página',
        description: 'Los especialistas en SEO y gestores de contenido usan el Generador de Títulos SEO al optimizar páginas individuales para palabras clave objetivo. La herramienta asegura que las palabras clave principales aparezcan temprano en los títulos mientras mantiene la legibilidad natural—un equilibrio fácil de perder al crear títulos manualmente. Es particularmente valioso para proyectos de optimización a gran escala donde cientos de páginas necesitan etiquetas de título correctamente estructuradas.',
      },
      {
        title: 'Mejora de tasa de clics en SERP',
        description: 'Cuando las páginas clasifican bien pero tienen bajo rendimiento en clics, la etiqueta de título a menudo es la culpable. Los especialistas en marketing digital usan el generador para crear alternativas atractivas a títulos de bajo rendimiento, luego las implementan y monitorean cambios en CTR en Google Search Console. Incluso pequeñas mejoras en CTR (1-2%) pueden impactar significativamente el tráfico cuando se multiplican por miles de impresiones mensuales.',
      },
      {
        title: 'Optimización de lanzamiento de nuevo contenido',
        description: 'Antes de publicar nuevo contenido, los equipos de contenido usan el generador para desarrollar la etiqueta de título óptima desde el inicio. Lanzar con un título correctamente optimizado acelera el potencial de clasificación inicial y establece señales de CTR fuertes desde el primer día—en lugar de publicar con un título provisional y optimizar después (lo cual es común pero subóptimo).',
      },
    ],
    faqs: [
      {
        question: '¿Qué es una etiqueta de título SEO?',
        answer: 'La etiqueta de título SEO (o meta título) es el elemento HTML que define el título de tu página en los resultados del motor de búsqueda y las pestañas del navegador. Aparece como el titular azul clicable en los resultados de búsqueda de Google y es uno de los factores de clasificación on-page más importantes. A diferencia de tu encabezado H1 en la página (que puede ser más largo y creativo), el título SEO debe ser lo suficientemente conciso para mostrarse completamente en los resultados de búsqueda mientras incorpora palabras clave objetivo naturalmente.',
      },
      {
        question: '¿Cuál es la longitud ideal para un título SEO?',
        answer: 'Apunta a 50-60 caracteres para asegurar que tu título se muestre completamente en los resultados de búsqueda. Google muestra aproximadamente 580 píxeles en escritorio y 920 píxeles en móvil. Dado que las letras varían en ancho (una "i" es más estrecha que una "W"), el conteo de caracteres es una aproximación. Los títulos más largos de 60 caracteres corren riesgo de truncamiento, mostrando "..." al final y potencialmente cortando información importante.',
      },
      {
        question: '¿Debo poner mi palabra clave al principio del título?',
        answer: 'Generalmente, sí. Las palabras clave que aparecen antes en los títulos tienen más peso para las clasificaciones, y los usuarios que escanean los resultados de búsqueda a menudo se enfocan en las primeras palabras. Sin embargo, no sacrifiques la legibilidad natural por la colocación de palabras clave. "Guía de email marketing: Estrategia completa para 2024" se lee mejor que "Email marketing: Guía email estrategia completa email consejos"—aunque la segunda versión repite más la palabra clave.',
      },
      {
        question: '¿En qué se diferencia un título SEO de un título de blog?',
        answer: 'Tu título SEO (etiqueta de título) aparece en los resultados de búsqueda y debe mantenerse por debajo de 60 caracteres con palabras clave posicionadas estratégicamente. Tu título de blog (encabezado H1 en la página) puede ser más largo, más creativo, y no necesita seguir las mismas restricciones. Muchos editores usan versiones ligeramente diferentes: una etiqueta de título optimizada para palabras clave para búsqueda y un H1 más atractivo para lectores que ya han hecho clic.',
      },
      {
        question: '¿Debo incluir el nombre de mi marca en los títulos SEO?',
        answer: 'Depende del reconocimiento de tu marca y el propósito de la página. Para marcas conocidas, incluir el nombre de la marca (generalmente al final) agrega credibilidad: "Guía de running | Nike". Para marcas menos conocidas, ese espacio generalmente se usa mejor para palabras clave y propuestas de valor. La página de inicio y las páginas de destino clave se benefician más de la inclusión de marca que las publicaciones de blog individuales.',
      },
      {
        question: '¿Los números en los títulos ayudan al SEO?',
        answer: 'Los números ayudan a las tasas de clics más que a las clasificaciones directamente, pero un CTR más alto puede mejorar indirectamente las clasificaciones. Los números proporcionan especificidad ("15 consejos" vs "consejos") que establece expectativas y construye credibilidad. Los números impares y números específicos (como 17 o 23) a menudo superan a los números redondos (10 o 20) en pruebas. Usa números cuando representen con precisión tu contenido.',
      },
      {
        question: '¿Con qué frecuencia debo actualizar los títulos SEO?',
        answer: 'Actualiza los títulos cuando: las páginas no clasifican como se esperaba, el CTR está por debajo del promedio de la industria (visible en Google Search Console), el contenido se ha actualizado significativamente, o la intención de búsqueda ha evolucionado. Evita cambios constantes—dale a los nuevos títulos 2-4 semanas para mostrar impacto antes de probar alternativas. Las páginas de alto rendimiento deben cambiarse raramente y con cuidado.',
      },
      {
        question: '¿Puedo usar el mismo título para múltiples páginas?',
        answer: 'No—cada página debe tener una etiqueta de título única. Los títulos duplicados confunden a los motores de búsqueda sobre qué página clasificar y cuál suprimir. También crean una mala experiencia de usuario cuando múltiples resultados de tu sitio muestran títulos idénticos. Incluso páginas similares (como variaciones de productos) necesitan títulos con elementos distintivos.',
      },
      {
        question: '¿Qué elementos de título mejoran la tasa de clics?',
        answer: 'El CTR aumenta con especificidad (números, plazos, resultados concretos), señales de frescura (año actual cuando es relevante), disparadores emocionales (brechas de curiosidad, promesas de beneficios), y señales de confianza (indicadores de autoridad, insinuaciones de prueba social). Los mejores títulos combinan optimización SEO con engagement psicológico sin cruzar al territorio del clickbait.',
      },
      {
        question: '¿Cómo sé si mi título SEO está funcionando?',
        answer: 'Monitorea dos métricas en Google Search Console: posición promedio (clasificaciones) y tasa de clics. Si la posición es fuerte pero el CTR está por debajo del promedio para esa posición, tu título puede no ser lo suficientemente atractivo. Si el CTR es bueno pero la posición es pobre, tu título puede no estar bien optimizado para la palabra clave objetivo. Compara tu CTR contra los benchmarks de posición (la posición 1 típicamente obtiene 25-30% de CTR, la posición 10 obtiene 2-3%).',
      },
    ],
  },

  'generador-de-textos-alternativos': {
    slug: 'generador-de-textos-alternativos',
    name: 'Generador de Textos Alternativos',
    title: 'Generador de textos alternativos con IA gratuito',
    description: 'Genera texto alternativo descriptivo que mejora la accesibilidad y el SEO. Sube cualquier imagen y obtén descripciones amigables para lectores de pantalla optimizadas para búsqueda.',
    metaDescription: 'Genera texto alternativo descriptivo que mejora la accesibilidad y el SEO. Sube cualquier imagen y obtén descripciones amigables para...',
    inputLabel: 'Describe la imagen...',
    inputPlaceholder: 'ej. Un equipo de desarrolladores colaborando alrededor de una pizarra con notas adhesivas',
    buttonText: 'Generar texto alternativo',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de opciones',
        choices: ['1 opción', '3 opciones', '5 opciones'],
        default: '3 opciones',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Formal', 'Casual', 'Técnico'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'keyword',
        label: 'Palabra clave objetivo (opcional)',
        choices: ['Ninguna', 'Incluir palabra clave'],
        default: 'Ninguna',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert accessibility specialist and SEO strategist who creates image alt text that serves both visually impaired users and search engine optimization. Your alt text descriptions are informative, accurate, and appropriately detailed for their context.
## CORE ALT TEXT PRINCIPLES
1. **Accessibility First**: Alt text exists primarily for screen reader users—always prioritize their experience
2. **Context Matters**: The same image needs different alt text depending on its purpose on the page
3. **Accuracy Over Creativity**: Describe what's actually in the image, not what you assume or wish were there
4. **Concise Completeness**: Include all relevant information without unnecessary padding
5. **SEO Integration**: Incorporate relevant keywords naturally when they accurately describe the image
## ALT TEXT PURPOSE FRAMEWORK
### Informative Images
Images that convey content, information, or meaning that isn't available in surrounding text.
- **Approach**: Describe the essential information the image communicates
- **Example**: "Bar chart showing website traffic growth from 10,000 to 50,000 monthly visitors over 12 months"
### Decorative Images
Images that are purely visual decoration and add no informational content.
- **Approach**: Use empty alt text (alt="") so screen readers skip them
- **Example**: Abstract background pattern, divider lines, purely aesthetic elements
### Functional Images
Images that serve as links or buttons (icons, image links, etc.)
- **Approach**: Describe the function/action, not the image appearance
- **Example**: For a magnifying glass search icon: "Search" (not "magnifying glass icon")
### Images of Text
Images containing readable text (logos, stylized headings, etc.)
- **Approach**: Include the exact text shown in the image
- **Example**: "Company logo: TechCorp Solutions - Innovation Through Technology"
### Complex Images
Charts, graphs, diagrams, and infographics with substantial data
- **Approach**: Summarize key information; provide detailed description in surrounding text or longdesc
- **Example**: "Pie chart of market share: Company A 45%, Company B 30%, Company C 15%, Others 10%. Full data in table below."
## OUTPUT RULES
### For Each Alt Text Variant, Provide:
1. **Alt Text**: The complete attribute text
2. **Character Count**: Total length
3. **Purpose Classification**: Informative/Functional/Complex/etc.
4. **Accessibility Notes**: How this serves screen reader users
5. **SEO Notes**: Keyword integration (if any) and image search optimization
### Quality Standards:
- NO starting with "Image of," "Picture of," "Photo of" (screen readers already announce it's an image)
- NO including "click here" or interactive instructions in alt text
- NO excessive length for simple images
- NO vague descriptions ("a person" when you can be more specific)
- NO keyword stuffing or unnatural phrases
- YES to specific, accurate descriptions
- YES to context-appropriate detail levels
- YES to natural keyword inclusion when accurate
- YES to suggesting empty alt text for truly decorative images

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Cumplimiento de accesibilidad de sitios web',
        description: 'Desarrolladores web, gestores de contenido y especialistas en accesibilidad usan el Generador de Texto Alternativo para agregar eficientemente descripciones significativas a imágenes en sitios web. Con el aumento de demandas de accesibilidad y regulaciones como WCAG y ADA que requieren texto alternativo, la herramienta ayuda a los equipos a lograr cumplimiento a escala sin sacrificar la calidad de las descripciones. Es particularmente valioso para actualizar sitios existentes con cientos o miles de imágenes sin texto alternativo.',
      },
      {
        title: 'Optimización de imágenes de productos de comercio electrónico',
        description: 'Los minoristas en línea usan el generador para crear texto alternativo para imágenes de productos que sirve tanto a la accesibilidad como al descubrimiento de productos. Un buen texto alternativo ayuda a los compradores con discapacidad visual a entender los productos mientras también mejora las clasificaciones de búsqueda de imágenes. Para tiendas con catálogos grandes, la herramienta permite texto alternativo consistente y optimizado en miles de imágenes de productos—una tarea que sería prohibitivamente lenta manualmente.',
      },
      {
        title: 'Marketing de contenidos y optimización de blogs',
        description: 'Los creadores de contenido y especialistas en SEO usan el generador para asegurar que cada imagen de publicación de blog tenga texto alternativo correctamente optimizado. Más allá de los beneficios de accesibilidad, el texto alternativo bien escrito contribuye al SEO on-page y la visibilidad en búsqueda de imágenes. La herramienta ayuda a mantener las mejores prácticas en equipos de contenido donde la calidad del texto alternativo podría variar significativamente por autor.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es el texto alternativo de imagen?',
        answer: 'El texto alternativo (texto alternativo) es una descripción escrita de una imagen que aparece en el código HTML. Sirve dos propósitos principales: es leído en voz alta por lectores de pantalla para usuarios con discapacidad visual, y se muestra cuando las imágenes no pueden cargarse. Los motores de búsqueda también usan el texto alternativo para entender el contenido de la imagen, haciéndolo valioso para SEO y visibilidad en búsqueda de imágenes. Cada imagen significativa en un sitio web debe tener texto alternativo descriptivo.',
      },
      {
        question: '¿Qué tan largo debe ser el texto alternativo?',
        answer: 'La mayoría del texto alternativo debe tener 10-125 caracteres. Las imágenes simples solo necesitan descripciones breves (10-30 caracteres), mientras que imágenes complejas como gráficos o infografías pueden requerir descripciones más largas (hasta 125 caracteres para el atributo alt, con descripciones extendidas proporcionadas por separado). Evita exceder 125 caracteres ya que algunos lectores de pantalla pueden cortar texto más largo, y el texto alternativo demasiado largo se vuelve tedioso para los usuarios.',
      },
      {
        question: '¿Debo incluir palabras clave en el texto alternativo?',
        answer: 'Incluye palabras clave solo cuando describen con precisión la imagen. El propósito principal del texto alternativo es la accesibilidad, no el SEO. Si tu imagen genuinamente muestra "bolso de laptop de cuero rojo", ese es un buen texto alternativo que además incluye palabras clave. Si tu imagen muestra un atardecer pero agregas "mejores bolsos de laptop" como texto alternativo, eso es relleno de palabras clave que daña tanto la accesibilidad como el SEO. Los motores de búsqueda penalizan el texto alternativo manipulador.',
      },
      {
        question: '¿Cuándo debe estar vacío el texto alternativo?',
        answer: 'Las imágenes decorativas que no agregan valor informativo deben tener texto alternativo vacío (alt="") para que los lectores de pantalla las omitan por completo. Esto incluye: patrones de fondo, divisores decorativos, iconos junto a texto que ya los describe, e imágenes puramente estéticas. Si eliminar la imagen no reduciría la información o significado de la página, probablemente es decorativa.',
      },
      {
        question: '¿Debo comenzar el texto alternativo con "Imagen de" o "Foto de"?',
        answer: 'No. Los lectores de pantalla ya anuncian "imagen" antes de leer el texto alternativo, así que comenzar con "Imagen de" crea redundancia ("Imagen: Imagen de un perro"). Comienza directamente con la descripción: "Golden retriever atrapando un frisbee en un parque" en lugar de "Foto de un golden retriever atrapando un frisbee en un parque".',
      },
      {
        question: '¿Cómo escribo texto alternativo para gráficos y diagramas?',
        answer: 'Para visuales complejos, el texto alternativo debe resumir el hallazgo o conclusión clave, con datos detallados proporcionados en otra parte de la página. Por ejemplo: "Gráfico de líneas mostrando aumento del 50% en ventas durante Q1-Q4 2024. Datos completos en la tabla de abajo". Si se necesita una descripción detallada, usa el atributo longdesc o aria-describedby para enlazar a una versión de texto completa.',
      },
      {
        question: '¿Qué pasa con el texto alternativo para imágenes de productos?',
        answer: 'El texto alternativo de imágenes de productos debe describir el producto con precisión, incluyendo: tipo de producto, nombre de marca (si es visible), características clave, color, tamaño o variante mostrada. Para comercio electrónico, un buen texto alternativo es: "Zapatillas Nike Air Max 270 en negro y blanco, vista lateral". Un mal texto alternativo es: "zapato" o "mejores zapatillas de running comprar ahora barato".',
      },
      {
        question: '¿Cómo afecta el texto alternativo al SEO?',
        answer: 'El texto alternativo ayuda a los motores de búsqueda a entender el contenido de la imagen, contribuyendo a: clasificaciones de búsqueda de imágenes (las imágenes pueden aparecer en resultados de Google Images), señales de relevancia de página (apoyando temas de contenido), y señales de accesibilidad (los motores de búsqueda pueden favorecer sitios accesibles). Sin embargo, el beneficio SEO es secundario a la accesibilidad—no comprometas la experiencia del usuario por optimización de palabras clave.',
      },
      {
        question: '¿La herramienta puede generar texto alternativo para cualquier imagen?',
        answer: 'El generador funciona con cualquier imagen que puedas describir—fotografías, ilustraciones, gráficos, capturas de pantalla, imágenes de productos y más. Para mejores resultados con imágenes complejas, proporciona contexto sobre el contenido de la página y el propósito de la imagen. La herramienta generará texto alternativo apropiado basado en el tipo de imagen y caso de uso.',
      },
      {
        question: '¿Todas las imágenes en mi sitio web deben tener texto alternativo?',
        answer: 'Todas las imágenes significativas deben tener texto alternativo. Las imágenes decorativas deben tener texto alternativo vacío (alt=""). No hay imagen que deba carecer completamente del atributo alt—eso es una falla de accesibilidad. Incluso las imágenes decorativas necesitan el atributo presente (solo vacío) para que los lectores de pantalla sepan omitirlas en lugar de leer el nombre del archivo.',
      },
    ],
  },

  'generador-de-ideas-de-contenido': {
    slug: 'generador-de-ideas-de-contenido',
    name: 'Generador de Ideas de Contenido',
    title: 'Generador gratuito de ideas de contenido con IA',
    description: 'Genera ideas de contenido creativas para blogs, YouTube, redes sociales, podcasts y newsletters. Nuestra IA crea conceptos optimizados por plataforma con ángulos únicos.',
    metaDescription: 'Genera ideas de contenido creativas para blogs, YouTube, redes sociales, podcasts y newsletters. Nuestra IA crea conceptos optimizados por...',
    inputLabel: 'Tema o nicho...',
    inputPlaceholder: 'ej. Finanzas personales para millennials',
    buttonText: 'Generar ideas',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_ideas',
        label: 'Número de ideas',
        choices: ['3 ideas', '5 ideas', '10 ideas'],
        default: '5 ideas',
        type: 'select',
      },
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['Multi-plataforma', 'Blog/Sitio web', 'YouTube', 'LinkedIn', 'Twitter/X', 'Instagram', 'Podcast', 'Newsletter'],
        default: 'Multi-plataforma',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Formal', 'Casual', 'Creativo'],
        default: 'Formal',
        type: 'select',
      },
    ],
    systemPrompt: `You are a creative strategist and content expert who generates innovative content ideas across multiple platforms and formats. Your ideas go beyond simple blog post topics—you create comprehensive content concepts that include angle, format, platform, and execution approach.
## CORE CONTENT IDEA PRINCIPLES
1. **Platform-Native Thinking**: Every idea is tailored to the platform's unique format and audience behavior
2. **Audience-First Approach**: Ideas solve real problems or fulfill genuine interests of the target audience
3. **Differentiation Required**: Every idea must have a unique angle that distinguishes it from existing content
4. **Executable Specificity**: Ideas are detailed enough to begin production immediately
5. **Strategic Variety**: Ideas span educational, entertaining, inspiring, and commercial content types
## PLATFORM-SPECIFIC FRAMEWORKS
### Blog/Website Content
**Strengths**: Long-form depth, SEO value, evergreen potential, comprehensive coverage
**Content Types**:
- Ultimate guides and comprehensive resources
- Original research and data analysis
- In-depth tutorials with visual steps
- Thought leadership and opinion pieces
- Case studies with detailed breakdowns
- Comparison and evaluation content
### YouTube/Video Content
**Strengths**: Visual demonstration, personality connection, entertainment value, discoverability
**Content Types**:
- Tutorials and how-tos (screen share or physical demonstration)
- Reviews and comparisons
- Behind-the-scenes and process reveals
- Interviews and expert discussions
- Challenge and experiment content
- List-based and compilation videos
### Social Media (LinkedIn, Twitter/X, Instagram)
**Strengths**: Engagement, viral potential, community building, real-time relevance
**Content Types**:
- Personal stories and lessons learned
- Hot takes and contrarian opinions
- Data visualizations and infographics
- Quick tips and actionable advice
- Industry news commentary
- Engagement prompts and questions
### Podcast/Audio Content
**Strengths**: Intimate connection, multitasking-friendly, deep conversations, loyal audiences
**Content Types**:
- Interview-based episodes
- Solo educational content
- Panel discussions and debates
- Storytelling and narrative episodes
- News and trends analysis
- Q&A and audience interaction
### Email/Newsletter
**Strengths**: Direct relationship, high engagement, segmentation potential, consistent touchpoint
**Content Types**:
- Curated roundups and digests
- Original essays and insights
- Exclusive tips and strategies
- Industry analysis and commentary
- Personal updates and behind-the-scenes
- Promotional and launch content
## OUTPUT RULES
### For Each Content Idea, Provide:
1. **Title/Concept**: Clear, compelling description of the idea
2. **Platform**: Optimal platform for this idea
3. **Format**: Specific content format (video, carousel, article, etc.)
4. **Angle**: What makes this unique or timely
5. **Target Audience**: Who specifically would engage with this
6. **Content Goal**: What this achieves (traffic, engagement, conversion, etc.)
7. **Execution Notes**: Key elements for production
### Quantity and Variety:
- Generate {{number_of_ideas}} ideas
- Span at least 3 different content purposes (educational, entertaining, etc.)
- Include at least 2 different platforms unless platform is specified: {{platform}}
- Vary format types within platforms
### Quality Standards:
- NO generic ideas applicable to any niche
- NO ideas without clear differentiation
- NO platform-agnostic ideas (must be optimized for specific platform)
- NO ideas requiring unrealistic resources or access
- YES to specific, actionable concepts
- YES to ideas with clear audience and purpose
- YES to innovative angles on familiar topics
- YES to ideas that leverage current trends or timing

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Desarrollo de estrategia de contenido multi-plataforma',
        description: 'Los directores de contenido y líderes de marketing usan el Generador de Ideas de Contenido para desarrollar estrategias de contenido cohesivas entre canales. En lugar de planificar contenido de blog separadamente de redes sociales separadamente de video, los equipos pueden generar ideas integradas que funcionan entre plataformas—viendo oportunidades para reutilizar conceptos centrales en formatos nativos de cada plataforma. Este enfoque holístico mejora la eficiencia del contenido y la consistencia del mensaje.',
      },
      {
        title: 'Entrando en nuevos formatos de contenido',
        description: 'Los especialistas en marketing con experiencia en un formato (como blogging) a menudo tienen dificultades al expandirse a nuevas plataformas (como YouTube o podcasts). El Generador de Ideas de Contenido ayuda a cerrar esta brecha sugiriendo conceptos de contenido nativos de la plataforma que aprovechan la experiencia existente mientras se adaptan a los requisitos del nuevo formato. Una empresa B2B con contenido de blog sólido puede descubrir cómo traducir esa experiencia en carruseles efectivos de LinkedIn o series de video.',
      },
      {
        title: 'Aceleración de lluvia de ideas de equipo creativo',
        description: 'Los equipos de contenido usan el generador como punto de partida para sesiones creativas, generando ideas iniciales que provocan discusión e iteración. En lugar de comenzar desde una pizarra en blanco, los equipos pueden reaccionar, combinar y construir sobre conceptos generados—acelerando la fase de ideación y asegurando que las lluvias de ideas produzcan resultados accionables en lugar de discusiones teóricas.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un generador de ideas de contenido?',
        answer: 'Un generador de ideas de contenido es una herramienta de IA que crea conceptos de contenido detallados en múltiples plataformas y formatos. A diferencia de las herramientas de sugerencia de temas simples, un generador de ideas de contenido completo proporciona conceptos completos incluyendo el ángulo único, plataforma objetivo, formato específico, audiencia prevista y guía de ejecución. Ayuda a los creadores de contenido a pasar de "¿qué debería crear?" a "aquí está exactamente qué hacer y cómo hacerlo".',
      },
      {
        question: '¿Qué plataformas soporta este generador?',
        answer: 'El generador crea ideas optimizadas para todas las plataformas de contenido principales: blogs y sitios web, YouTube y video, LinkedIn y redes sociales profesionales, Twitter/X y microblogging, Instagram y plataformas sociales visuales, podcasts y contenido de audio, y newsletters por correo electrónico. Cada idea está adaptada al formato específico de la plataforma, expectativas de la audiencia y patrones de engagement.',
      },
      {
        question: '¿Cómo obtengo ideas de contenido más específicas?',
        answer: 'Una entrada más detallada produce ideas más dirigidas. En lugar de ingresar "marketing", especifica "email marketing B2B SaaS para fundadores de startups en etapa temprana". Incluye información sobre tu audiencia objetivo, objetivos de contenido (tráfico vs. engagement vs. conversión), contenido existente (para que las ideas no dupliquen), y cualquier restricción (recursos, voz de marca, regulaciones de la industria). Cuanto más contexto proporciones, más accionables serán las ideas.',
      },
      {
        question: '¿Puedo usar estas ideas para trabajo de clientes?',
        answer: 'Absolutamente. Las ideas generadas no tienen derechos de autor y pueden usarse para cualquier propósito—marcas personales, contenido de empresa, trabajo de clientes o agencias de contenido. Muchos estrategas de contenido freelance y agencias usan el generador como punto de partida para calendarios de contenido de clientes, luego personalizan y refinan según los requisitos específicos de la marca.',
      },
      {
        question: '¿Cómo elijo qué idea de contenido seguir primero?',
        answer: 'Prioriza según tus objetivos y recursos actuales. Si necesitas tráfico, prioriza ideas de blog enfocadas en SEO. Si necesitas engagement, prioriza contenido social nativo de la plataforma. Si estás construyendo autoridad, prioriza conceptos de liderazgo de pensamiento e investigación original. También considera la complejidad de producción—comienza con ideas que puedas ejecutar bien antes de abordar conceptos que requieran muchos recursos.',
      },
      {
        question: '¿Qué hace que una idea de contenido sea "buena"?',
        answer: 'Una idea de contenido fuerte tiene cuatro características: relevancia (aborda necesidades o intereses reales de la audiencia), diferenciación (ofrece algo que los competidores no tienen), ejecutabilidad (puede producirse con los recursos disponibles), y ajuste de plataforma (aprovecha las fortalezas de la plataforma elegida). El generador evalúa las ideas contra estos criterios, filtrando conceptos genéricos o poco prácticos.',
      },
      {
        question: '¿Debo usar cada idea que proporciona el generador?',
        answer: 'No—trata las ideas generadas como un menú curado, no una asignación obligatoria. Evalúa cada idea contra tu contexto específico: alineación de marca, disponibilidad de recursos, preferencias de audiencia y prioridades estratégicas. Algunas ideas serán perfectas, otras podrían inspirar mejores variaciones, y algunas podrían guardarse para consideración futura.',
      },
      {
        question: '¿El generador puede crear ideas para temas de nicho o técnicos?',
        answer: 'Sí, el generador funciona en todas las industrias y nichos, incluyendo campos altamente técnicos o especializados. Para mejores resultados con temas técnicos, proporciona contexto sobre el nivel de experiencia de tu audiencia y cualquier restricción específica de la industria (requisitos regulatorios, preferencias de terminología, etc.). El generador adapta sus sugerencias para coincidir con el nivel de sofisticación apropiado para tu audiencia.',
      },
      {
        question: '¿Con qué frecuencia debo generar nuevas ideas de contenido?',
        answer: 'La mayoría de los equipos de contenido se benefician de sesiones mensuales o trimestrales de generación de ideas, construyendo un backlog de conceptos para usar. Sin embargo, el generador también es valioso para contenido reactivo—cuando surgen noticias de la industria u oportunidades, puedes generar rápidamente ideas alrededor de temas en tendencia. Mantener un backlog saludable de ideas previene sequías de contenido y scrambling de último minuto.',
      },
      {
        question: '¿Puedo generar ideas para múltiples plataformas a la vez?',
        answer: 'Sí, por defecto el generador proporciona ideas multi-plataforma mostrando cómo un concepto central puede adaptarse entre diferentes formatos. Esto es particularmente valioso para estrategias de reutilización de contenido—convirtiendo un proyecto de investigación en una publicación de blog, carrusel de LinkedIn, explicador de YouTube y serie de correo electrónico. También puedes especificar un enfoque de plataforma única para ideación más concentrada.',
      },
    ],
  },

  'creador-de-guiones-de-videos': {
    slug: 'creador-de-guiones-de-videos',
    name: 'Creador de Guiones de Videos',
    title: 'Creador gratuito de guiones de vídeos con IA',
    description: 'Genera guiones de video atractivos para YouTube, TikTok, Reels y más. Nuestra IA crea guiones optimizados para retención con ganchos, señales visuales y CTAs.',
    metaDescription: 'Genera guiones de video atractivos para YouTube, TikTok, Reels y más. Nuestra IA crea guiones optimizados para retención con ganchos,...',
    inputLabel: 'Tema del video...',
    inputPlaceholder: 'ej. Cómo empezar a invertir con 100 euros',
    buttonText: 'Generar guion',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['YouTube (largo)', 'YouTube Shorts', 'TikTok/Reels', 'Video LinkedIn', 'Educativo/Tutorial', 'Promocional'],
        default: 'YouTube (largo)',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Duración del video',
        choices: ['Corto (15-60 seg)', 'Medio (5-10 min)', 'Largo (15-30 min)'],
        default: 'Medio (5-10 min)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Educativo', 'Entretenido', 'Inspirador', 'Casual', 'Profesional'],
        default: 'Educativo',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert video scriptwriter and content creator who crafts engaging scripts optimized for viewer retention, platform algorithms, and creator delivery. Your scripts follow proven structures for different video types while leaving room for personality and authenticity.
## CORE VIDEO SCRIPT PRINCIPLES
1. **Retention Architecture**: Every script is designed to keep viewers watching through strategic pacing and hooks
2. **Platform Optimization**: Scripts adapt to platform-specific best practices (YouTube long-form vs. TikTok/Reels short-form)
3. **Speakability**: Scripts are written to be spoken aloud naturally, not read
4. **Visual Awareness**: Scripts include visual/b-roll guidance since video is a visual medium
5. **Authentic Delivery**: Scripts provide structure without forcing unnaturalness
## PLATFORM-SPECIFIC FRAMEWORKS
### YouTube Long-Form (8-20+ minutes)
**Structure**:
HOOK (0:00-0:30): Grab attention, preview value, create curiosity
INTRO (0:30-1:30): Context, credibility, video roadmap
BODY: Main content in digestible segments
- Section 1 with mini-hook and payoff
- Section 2 with mini-hook and payoff
- [Continue pattern]
CLIMAX: Deliver on main promise
OUTRO: Summarize, CTA, tease next content
**Retention Techniques**:
- Pattern interrupts every 30-60 seconds
- Open loops that create curiosity
- "But wait, there's more" transitions
- Specific promises with clear payoffs
### YouTube Shorts / TikTok / Reels (15-60 seconds)
**Structure**:
HOOK (0-3 seconds): Immediate attention grab
BODY (3-50 seconds): Rapid-fire value delivery
PAYOFF (final seconds): Satisfying conclusion or loop-worthy ending
**Retention Techniques**:
- Text overlays for visual engagement
- Quick cuts and pace changes
- Trending sounds/formats when relevant
- Loop-worthy endings that encourage rewatching
### Informational/Tutorial Videos
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
## OUTPUT STRUCTURE
### Full Script Format:
HOOK [0:00-0:XX]
[Spoken text]
[Visual/b-roll notes in brackets]
INTRO [0:XX-X:XX]
[Spoken text]
[Visual notes]
SECTION 1: [Topic]
[Mini-hook]
[Main content]
[Visual notes]
[Transition]
[Continue for each section]
OUTRO [XX:XX-XX:XX]
[Summary]
[CTA]
[Final visual notes]
### Script Components to Include:
1. **Timestamps**: Estimated timing for each section
2. **Spoken Text**: Exact words (or close approximation for natural delivery)
3. **Visual Notes**: B-roll suggestions, on-screen text, graphics
4. **Tone Cues**: Energy level, emotional tone for delivery
5. **Retention Notes**: Why certain elements help keep viewers watching
Video Length: {{length}}
Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Flujo de trabajo de creación de contenido para YouTube',
        description: 'YouTubers y creadores de video usan el Generador de Guiones de Video para acelerar la planificación de pre-producción. En lugar de pasar horas delineando y escribiendo guiones desde cero, los creadores obtienen borradores estructurados con técnicas de retención incorporadas. Esto es particularmente valioso para canales educativos donde la cobertura completa debe equilibrarse con una entrega atractiva—el generador maneja la estructura mientras los creadores agregan personalidad.',
      },
      {
        title: 'Contenido de video para redes sociales a escala',
        description: 'Los equipos de marketing y agencias que crean grandes volúmenes de contenido de formato corto (TikTok, Reels, Shorts) usan el generador para mantener la velocidad de producción sin sacrificar calidad. Cuando necesitas publicar diariamente o varias veces al día, escribir guiones se convierte en un cuello de botella. El generador produce guiones nativos de la plataforma que tocan los puntos clave (gancho, valor, recompensa) consistentemente mientras varía el contenido específico.',
      },
      {
        title: 'Producción de video empresarial y promocional',
        description: 'Las empresas que crean demos de productos, videos explicativos, testimonios de clientes y otro contenido de video empresarial usan el generador para desarrollar guiones iniciales. Los equipos de marketing y producción de video colaboran en borradores generados por IA, asegurando que los guiones incluyan elementos esenciales (beneficios, puntos de prueba, llamadas a la acción) mientras se adaptan a la voz de la marca y detalles específicos del producto.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un generador de guiones de video?',
        answer: 'Un generador de guiones de video es una herramienta de IA que crea guiones de video completos optimizados para plataformas y propósitos específicos. A diferencia de las herramientas de esquema, produce guiones de palabras habladas con marcas de tiempo, señales visuales, técnicas de retención y llamadas a la acción—todo lo necesario para filmar un video inmediatamente. Los guiones están estructurados para diferentes formatos: YouTube largo, TikTok/Reels corto, tutoriales, contenido promocional y más.',
      },
      {
        question: '¿Qué plataformas soporta este generador?',
        answer: 'El generador crea guiones optimizados para YouTube (largo y Shorts), TikTok, Instagram Reels, video de LinkedIn, video de Facebook, plataformas educativas y video promocional/corporativo. Cada plataforma tiene diferentes duraciones óptimas, estilos de gancho y patrones de retención—el generador adapta la estructura y ritmo del guion para coincidir con las mejores prácticas de cada plataforma.',
      },
      {
        question: '¿Cómo obtengo guiones que suenen como yo?',
        answer: 'Proporciona contexto sobre tu tono, referencias de estilo y enfoque típico de contenido. El guion generado es una base estructural, no contenido final. La mayoría de los creadores lo usan como punto de partida, luego inyectan su personalidad, frases distintivas y patrones de habla natural. Con el tiempo, puedes refinar tu entrada para coincidir más con tu estilo—por ejemplo, notando "casual y auto-despreciativo" o "alta energía con cortes rápidos".',
      },
      {
        question: '¿Necesito seguir el guion exactamente?',
        answer: 'No—y la mayoría de los creadores de video exitosos no lo hacen. El guion proporciona estructura, puntos de conversación y técnicas de retención, pero la entrega natural típicamente involucra improvisación dentro de ese marco. Muchos creadores usan guiones como "guías" en lugar de texto de teleprompter, tocando puntos clave mientras adaptan el lenguaje a lo que se siente natural en el momento.',
      },
      {
        question: '¿Qué incluyen las notas visuales?',
        answer: 'Las notas visuales sugieren metraje de B-roll, gráficos en pantalla, superposiciones de texto y transiciones visuales que mejoran el contenido hablado. No son obligatorias pero te ayudan a pensar visualmente en lugar de crear "radio con imágenes". Ejemplo: mientras discutes una estadística, la nota visual podría sugerir "Mostrar gráfico animado, luego cortar a B-roll relevante". Estas notas ahorran tiempo durante la planificación de filmación y edición.',
      },
      {
        question: '¿Qué tan largo debe ser mi guion de video?',
        answer: 'La longitud del guion depende de tu contenido, audiencia y plataforma. Pautas generales: TikTok/Reels (15-60 segundos, 50-150 palabras), YouTube Shorts (30-60 segundos, 100-200 palabras), YouTube medio (8-12 minutos, 1,200-1,800 palabras), YouTube largo (15-30 minutos, 2,200-4,500 palabras). El generador se adapta a la duración especificada, ajustando profundidad y ritmo en consecuencia.',
      },
      {
        question: '¿Puedo generar guiones para contenido educativo/tutorial?',
        answer: 'Sí, los guiones de tutoriales son un caso de uso principal. Los guiones educativos están estructurados con pasos claros, notas de demostración y secciones de recapitulación que ayudan a los espectadores a seguir y retener información. El generador incluye señales de "muestra esto, luego explica" que te recuerdan demostrar en lugar de solo contar—un principio clave para contenido tutorial efectivo.',
      },
      {
        question: '¿Qué hace un buen gancho de video?',
        answer: 'Los ganchos efectivos logran tres cosas en los primeros 3-30 segundos (dependiendo de la plataforma): captan atención, previsualizan valor y crean curiosidad. Los tipos incluyen ganchos de pregunta ("¿Y si..."), ganchos de declaración ("Este error..."), ganchos de demostración (mostrar el resultado primero), y ganchos de historia ("La semana pasada, algo pasó..."). El generador incluye ganchos apropiados para cada plataforma—más cortos e inmediatos para TikTok, algo más largos y contextuales para YouTube.',
      },
      {
        question: '¿Cómo mejoro la retención de espectadores con guiones?',
        answer: 'El generador incorpora técnicas de retención incluyendo: bucles abiertos (creando curiosidad que se paga después), interrupciones de patrón (cambios en ritmo, tono o visuales), mini-ganchos antes de cada sección (re-enganchando atención errante), promesas específicas con recompensas claras, y señales visuales estratégicas. Estas técnicas se basan en lo que usan los creadores exitosos para mantener el tiempo de visualización.',
      },
      {
        question: '¿Puedo usar estos guiones comercialmente?',
        answer: 'Sí, los guiones generados son tuyos para usar para cualquier propósito—canales personales, trabajo de clientes, proyectos comerciales o cualquier otra aplicación. Los guiones no tienen derechos de autor ni restricciones. Muchas empresas de producción de video y creadores freelance usan el generador como punto de partida para proyectos de clientes, luego personalizan según los requisitos específicos de la marca.',
      },
    ],
  },

  'generador-de-acronimos': {
    slug: 'generador-de-acronimos',
    name: 'Generador de Acrónimos',
    title: 'Generador de acrónimos con IA gratuito',
    description: 'Genera acrónimos inteligentes y significativos para proyectos, productos y organizaciones.',
    metaDescription: 'Genera acrónimos inteligentes y significativos para proyectos, productos y organizaciones. Obtén múltiples opciones con significados...',
    inputLabel: 'Tema o concepto...',
    inputPlaceholder: 'ej. Iniciativa de mejora de retroalimentación de clientes para retail',
    buttonText: 'Generar acrónimos',
    maxLength: 1024,
    options: [
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Profesional', 'Creativo', 'Técnico', 'Divertido'],
        default: 'Profesional',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Longitud preferida',
        choices: ['Corto (3-4 letras)', 'Medio (5-6 letras)', 'Cualquier longitud'],
        default: 'Cualquier longitud',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Número de opciones',
        choices: ['3 opciones', '5 opciones', '10 opciones'],
        default: '5 opciones',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert naming specialist who creates memorable, meaningful acronyms.
## CORE RULES
- Every letter must map to a real, relevant word
- The acronym should be pronounceable or spell a meaningful word
- Words chosen should accurately describe the subject
- Avoid forced or awkward word choices
- Provide multiple options with different approaches
## ACRONYM APPROACHES
- Real Word: Spell actual English words (SMART, CARE)
- Pronounceable: Can be spoken as words (NASA, RADAR)
- Letter-by-letter: Spelled out (CEO, FAQ)
## TONE ADAPTATION
### IF TONE = "Professional" - Business-appropriate vocabulary
### IF TONE = "Creative" - Playful, unexpected combinations
### IF TONE = "Technical" - Industry-specific terms
### IF TONE = "Playful" - Fun, engaging words
## OUTPUT FORMAT
Tone: {{tone}}
Preferred Length: {{length}}
Number of Options: {{variants}}
For each acronym:
1. The acronym
2. Full expanded form
3. Type (real word/pronounceable/letter-by-letter)
4. Why it works
End with recommendation and alternative words to swap in.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Nombrar proyectos e iniciativas',
        description: 'Los equipos que lanzan nuevos proyectos, programas o iniciativas usan el Generador de Acrónimos para crear nombres memorables que comuniquen el propósito. Un acrónimo fuerte hace que los proyectos sean más fáciles de referenciar, recordar y generar apoyo—convirtiendo "el proyecto de mejora de retroalimentación del cliente" en algo como "VOICE".',
      },
      {
        title: 'Nombrar productos y características',
        description: 'Los gerentes de producto y especialistas en marketing pueden generar nombres basados en acrónimos para productos, características o metodologías que transmitan valor mientras son atractivos y comercializables. El acrónimo correcto puede convertirse en una parte poderosa de la identidad y marketing de tu producto.',
      },
      {
        title: 'Branding organizacional y de equipos',
        description: 'Los líderes que crean nuevos equipos, departamentos, comités o grupos de trabajo pueden encontrar acrónimos que capturen su misión y valores. Un acrónimo reflexivo da a los grupos identidad y ayuda a comunicar el propósito a la organización más amplia.',
      },
    ],
    faqs: [
      {
        question: '¿Qué es un generador de acrónimos?',
        answer: 'Un generador de acrónimos crea formas abreviadas de frases donde cada letra representa una palabra. La herramienta te ayuda a encontrar combinaciones donde las letras deletreen algo memorable mientras las palabras expandidas describen con precisión tu tema.',
      },
      {
        question: '¿El generador de acrónimos es gratuito?',
        answer: 'Sí, completamente gratuito sin necesidad de registro. Genera tantos acrónimos como necesites.',
      },
      {
        question: '¿Cuál es la diferencia entre un acrónimo y un inicialismo?',
        answer: 'Los acrónimos se pronuncian como palabras (NASA, RADAR), mientras que los inicialismos se deletrean letra por letra (FBI, CEO). La herramienta genera ambos tipos dependiendo de lo que funcione mejor para tu tema.',
      },
      {
        question: '¿Cuántas letras debería tener mi acrónimo?',
        answer: '3-7 letras típicamente funcionan mejor. Los acrónimos más cortos son más fáciles de recordar pero ofrecen menos poder descriptivo. Los más largos pueden ser más específicos pero más difíciles de recordar. La herramienta proporciona opciones en diferentes longitudes.',
      },
      {
        question: '¿Puedo solicitar una palabra específica para deletrear?',
        answer: 'Sí, puedes solicitar un "bacrónimo" donde especificas la palabra que quieres y la herramienta encuentra frases para coincidir con cada letra. Solo nota que los bacrónimos forzados a veces pueden sentirse incómodos si las palabras no encajan naturalmente.',
      },
      {
        question: '¿Los acrónimos serán únicos?',
        answer: 'La herramienta genera combinaciones originales, pero recomendamos buscar tus favoritos en línea para asegurarte de que no estén siendo usados por otras organizaciones, especialmente en tu industria.',
      },
      {
        question: '¿Puedo generar acrónimos para diferentes industrias?',
        answer: 'Sí, especifica tu industria o contexto y la herramienta usará terminología relevante. Un acrónimo para una iniciativa de salud usará vocabulario diferente que uno para una startup tecnológica.',
      },
      {
        question: '¿Qué pasa si no me gusta ninguna de las sugerencias?',
        answer: 'Puedes regenerar con entradas ajustadas (diferente tono, longitud o contexto), o usar las opciones generadas como inspiración para crear tu propia variación. La herramienta también proporciona palabras alternativas que puedes intercambiar.',
      },
      {
        question: '¿El acrónimo debe deletrear una palabra real?',
        answer: 'No necesariamente. Los acrónimos de palabras reales (como SMART o CARE) son muy memorables, pero no-palabras pronunciables (como NASA) o acrónimos basados en letras (como CEO) pueden funcionar igualmente bien dependiendo del contexto.',
      },
      {
        question: '¿Cómo sé si un acrónimo es bueno?',
        answer: 'Los buenos acrónimos son fáciles de pronunciar, fáciles de recordar, y representan con precisión su significado expandido. Deben sentirse naturales—no forzados—e idealmente crear asociaciones positivas.',
      },
    ],
  },

  'detector-de-ia': {
    slug: 'detector-de-ia',
    name: 'Detector de IA',
    title: 'Detector de IA gratuito',
    description: 'Detecta contenido generado por IA instantáneamente. Obtén análisis detallado y aprende qué hace que el texto suene como IA.',
    metaDescription: 'Detecta contenido generado por IA instantáneamente con nuestra herramienta gratuita. Obtén análisis detallado y aprende qué hace que tu...',
    inputLabel: 'Texto a analizar...',
    inputPlaceholder: 'Pega el texto que quieres verificar si fue generado por IA...',
    buttonText: 'Analizar texto',
    maxLength: 4096,
    options: [
      {
        name: 'analysisDepth',
        label: 'Profundidad del análisis',
        choices: ['Escaneo rápido', 'Análisis estándar', 'Desglose detallado'],
        default: 'Análisis estándar',
        type: 'select',
      },
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
### IF DEPTH = "Quick scan" - Score + top 3 indicators
### IF DEPTH = "Standard analysis" - Score + category breakdown + examples
### IF DEPTH = "Detailed breakdown" - Comprehensive scoring + sentence-level flagging
## OUTPUT FORMAT
Analysis Depth: {{analysisDepth}}
Provide: AI Probability Score, Confidence Level, Analysis breakdown, Specific indicators found, Recommendations.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Verificación de integridad académica',
        description: 'Educadores y estudiantes usan el Detector de Contenido de IA para verificar la originalidad del trabajo escrito. Los profesores pueden verificar ensayos y tareas enviadas para detectar señales de generación por IA, mientras que los estudiantes pueden asegurar que su propia escritura no refleje inadvertidamente patrones de IA antes de enviar.',
      },
      {
        title: 'Aseguramiento de calidad de contenido para editores',
        description: 'Los equipos editoriales, gestores de blogs y agencias de contenido usan el detector para filtrar envíos y asegurar que el contenido publicado mantenga una voz humana auténtica. Esto es especialmente valioso al trabajar con freelancers o escalar la producción de contenido mientras se mantienen estándares de calidad.',
      },
      {
        title: 'Cumplimiento de SEO y marketing de contenidos',
        description: 'Los equipos de marketing preocupados por penalizaciones de motores de búsqueda por contenido generado por IA pueden escanear sus artículos antes de publicar. La herramienta ayuda a identificar patrones problemáticos y proporciona recomendaciones específicas para hacer el contenido más auténticamente humano, protegiendo las clasificaciones de búsqueda de tu sitio.',
      },
    ],
    faqs: [
      {
        question: '¿Cómo funciona el detector de contenido de IA?',
        answer: 'El detector analiza múltiples dimensiones de tu texto incluyendo estructura de oraciones, patrones de vocabulario, marcadores estilísticos y características del contenido. Compara estos contra patrones conocidos de contenido generado por IA versus escrito por humanos para calcular una puntuación de probabilidad.',
      },
      {
        question: '¿El detector de contenido de IA es gratuito?',
        answer: 'Sí, la herramienta es completamente gratuita. Puedes verificar tantos textos como necesites sin crear una cuenta ni pagar ninguna tarifa.',
      },
      {
        question: '¿Qué tan precisa es la detección de contenido de IA?',
        answer: 'Ningún detector de IA es 100% preciso. Nuestra herramienta proporciona puntuaciones de probabilidad con niveles de confianza. La detección es más confiable para textos más largos (300+ palabras) y salidas de IA sin editar. El contenido de IA muy editado o la escritura humana naturalmente formal pueden afectar la precisión.',
      },
      {
        question: '¿El detector puede identificar qué herramienta de IA escribió el contenido?',
        answer: 'El detector identifica si el contenido parece generado por IA pero no puede determinar confiablemente qué herramienta específica (ChatGPT, Claude, etc.) lo creó. Diferentes modelos de IA comparten muchos patrones similares.',
      },
      {
        question: '¿Qué puntuación porcentual significa que el contenido es generado por IA?',
        answer: 'Generalmente, puntuaciones por encima del 70% sugieren fuertes indicadores de IA, 40-70% indica señales mixtas, y por debajo del 40% sugiere autoría humana probable. Sin embargo, estas son pautas—el contexto importa, y ningún umbral es definitivo.',
      },
      {
        question: '¿El contenido de IA puede editarse para pasar la detección?',
        answer: 'Sí, el contenido de IA que ha sido sustancialmente editado por un humano a menudo muestra indicadores de IA reducidos. El detector es más efectivo en salidas de IA crudas o ligeramente editadas.',
      },
      {
        question: '¿La escritura académica o técnica activará falsos positivos?',
        answer: 'Los estilos de escritura formal a veces pueden activar indicadores de IA porque comparten características como estructura consistente y vocabulario formal. La herramienta tiene esto en cuenta pero puede mostrar puntuaciones elevadas para contenido naturalmente formal.',
      },
      {
        question: '¿Qué debo hacer si mi contenido escrito por humanos es marcado?',
        answer: 'La herramienta proporciona retroalimentación específica sobre qué elementos activaron los indicadores de IA. Puedes usar esto para ajustar tu estilo de escritura, agregar más personalidad, o incluir ejemplos específicos que demuestren autoría humana.',
      },
      {
        question: '¿Qué tan largo debe ser el texto para una detección precisa?',
        answer: 'La precisión mejora con la longitud. Los textos de menos de 100 palabras son difíciles de evaluar confiablemente. Para mejores resultados, envía al menos 200-300 palabras.',
      },
      {
        question: '¿El detector almacena o comparte mi texto enviado?',
        answer: 'No, el texto enviado se procesa en tiempo real y no se almacena. Tu contenido permanece privado y no se usa para ningún otro propósito.',
      },
    ],
  },

  'humanizador-de-texto': {
    slug: 'humanizador-de-texto',
    name: 'Humanizador de Texto',
    title: 'Humanizador de texto con IA gratuito',
    description: 'Transforma texto generado por IA en escritura natural y humana. Elimina patrones robóticos mientras mantienes tu significado.',
    metaDescription: 'Transforma texto generado por IA en escritura natural y humana. Nuestro humanizador gratuito elimina patrones robóticos mientras mantiene...',
    inputLabel: 'Texto a humanizar...',
    inputPlaceholder: 'Pega tu texto generado por IA aquí...',
    buttonText: 'Humanizar texto',
    maxLength: 4096,
    options: [
      {
        name: 'level',
        label: 'Nivel de humanización',
        choices: ['Ligero', 'Medio', 'Intenso'],
        default: 'Medio',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono objetivo',
        choices: ['Profesional', 'Casual', 'Académico', 'Conversacional'],
        default: 'Profesional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor specializing in transforming AI-generated text into natural, human-sounding writing.
## CORE RULES
- Preserve the original meaning completely
- Remove obvious AI patterns without over-editing
- Add natural variation and human voice
- Never add false information
## AI PATTERNS TO REMOVE
- "Delve" → "explore," "look at," "dig into"
- "Crucial" → "important," "key"
- "Comprehensive" → "complete," "thorough"
- "Leverage" → "use," "apply"
- "Furthermore/Moreover/Additionally" → vary or restructure
- "It's important to note that" → remove or integrate naturally
## HUMANIZATION LEVELS
### IF LEVEL = "Light" - Fix vocabulary markers, add contractions, minimal structural changes
### IF LEVEL = "Medium" - All light changes + vary sentence structure, add personality
### IF LEVEL = "Heavy" - All medium changes + significant voice injection, rhetorical questions
## TONE ADAPTATION
### IF TONE = "Professional" - Maintain authority while adding naturalness
### IF TONE = "Casual" - More contractions, shorter sentences, conversational
### IF TONE = "Academic" - Preserve scholarly tone, focus on vocabulary fixes
### IF TONE = "Conversational" - Direct address, questions, warm voice
## OUTPUT FORMAT
Humanization Level: {{level}}
Target Tone: {{tone}}
Output only the humanized text. No preamble.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Creadores de contenido escalando con asistencia de IA',
        description: 'Los escritores y especialistas en marketing que usan IA para redactar contenido pueden pasar los resultados por el humanizador para asegurar que las piezas finales suenen auténticas y atractivas. La herramienta elimina patrones reveladores de IA mientras preserva tu mensaje central, permitiéndote aprovechar la eficiencia de la IA sin sacrificar la voz.',
      },
      {
        title: 'Estudiantes refinando investigación asistida por IA',
        description: 'Los estudiantes que usan herramientas de IA para ayudar a generar ideas o estructurar pueden humanizar sus borradores para asegurar que los envíos reflejen su propia voz y no activen preocupaciones de plagio o detección de IA. La herramienta ayuda a transformar puntos de partida de IA en trabajo expresado auténticamente.',
      },
      {
        title: 'Profesionales puliendo comunicaciones redactadas por IA',
        description: 'Los profesionales de negocios que usan IA para redactar correos electrónicos, informes o propuestas pueden humanizar el texto para sonar más natural y personal. Esto asegura que las comunicaciones con clientes, memorandos internos y documentos profesionales mantengan una voz auténtica y tono de construcción de relaciones.',
      },
    ],
    faqs: [
      {
        question: '¿Qué significa "humanizar" texto de IA?',
        answer: 'Humanizar significa editar texto generado por IA para eliminar patrones robóticos, agregar variación de voz natural y hacer que se lea como si un humano lo hubiera escrito. Esto incluye cambiar vocabulario, variar estructura de oraciones y agregar elementos de personalidad.',
      },
      {
        question: '¿El humanizador de texto de IA es gratuito?',
        answer: 'Sí, la herramienta es completamente gratuita sin necesidad de registro. Puedes humanizar tanto texto como necesites sin costo.',
      },
      {
        question: '¿El texto humanizado pasará la detección de IA?',
        answer: 'El humanizador reduce significativamente los indicadores de IA, pero los resultados varían según el texto original y la herramienta de detección usada. Para mejores resultados, combina la humanización con tus propias ediciones adicionales y toques personales.',
      },
      {
        question: '¿Humanizar cambia el significado de mi texto?',
        answer: 'No, la herramienta está diseñada para preservar tu significado original completamente. Cambia cómo se expresan las ideas, no qué ideas se expresan. Todos los hechos y mensajes centrales permanecen intactos.',
      },
      {
        question: '¿Cuál es la diferencia entre humanización ligera, media e intensa?',
        answer: 'La humanización ligera hace cambios mínimos adecuados para contenido formal. Media (predeterminado) agrega más variación natural para contenido general. La humanización intensa aumenta significativamente la personalidad y el tono casual para contenido informal.',
      },
      {
        question: '¿Puedo humanizar texto en cualquier estilo o tono?',
        answer: 'Sí, puedes especificar tu tono preferido (profesional, casual, amigable, etc.) y la herramienta adaptará su enfoque de humanización en consecuencia mientras mantiene ese tono a lo largo del texto.',
      },
      {
        question: '¿Cuánto tiempo toma la humanización?',
        answer: 'Los resultados se generan en segundos, independientemente de la longitud del texto. Los textos más largos pueden tomar un poco más de tiempo pero el proceso es casi instantáneo.',
      },
      {
        question: '¿Debo editar el texto humanizado aún más?',
        answer: 'Recomendamos revisar y agregar tus propios toques personales. La herramienta proporciona una base excelente, pero agregar ejemplos específicos, anécdotas personales o perspectivas únicas de tu experiencia hará el contenido aún más auténticamente tuyo.',
      },
      {
        question: '¿Qué tipos de contenido puedo humanizar?',
        answer: 'La herramienta funciona con cualquier texto: artículos, publicaciones de blog, ensayos, correos electrónicos, informes, publicaciones de redes sociales y más. Ajusta su enfoque según el tipo de contenido y nivel de formalidad.',
      },
      {
        question: '¿Puedo humanizar contenido en otros idiomas?',
        answer: 'La herramienta está optimizada para texto en español. Aunque puede funcionar con otros idiomas, los resultados son más confiables y naturales con contenido en español.',
      },
    ],
  },

  // ==================== BATCH 3 (Tools 21-30) ====================

  'creador-de-eslogan': {
    slug: 'creador-de-eslogan',
    name: 'Creador de Eslogan',
    title: 'Creador de eslogan con IA gratuito',
    description: 'Crea eslóganes pegadizos y memorables que capturan la esencia de tu marca. Nuestra IA genera taglines que permanecen en la mente de los clientes.',
    metaDescription: 'Crea eslóganes pegadizos y memorables que capturan la esencia de tu marca. Nuestra IA genera taglines que permanecen en la mente de los...',
    inputLabel: 'Describe tu marca o producto...',
    inputPlaceholder: 'ej. Una cafetería enfocada en sostenibilidad y comunidad',
    buttonText: 'Generar eslóganes',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de eslóganes',
        choices: ['3 eslóganes', '5 eslóganes', '10 eslóganes'],
        default: '5 eslóganes',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono del eslogan',
        choices: ['Formal/Profesional', 'Casual/Amigable', 'Audaz/Disruptivo', 'Premium/Lujoso'],
        default: 'Formal/Profesional',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explicar significado',
        choices: ['Sí', 'No'],
        default: 'Sí',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert advertising copywriter and brand strategist who creates memorable slogans and taglines that capture brand essence, drive recall, and inspire action. Your slogans are not generic phrases—they are strategic verbal assets that differentiate brands and resonate with target audiences.
## CORE SLOGAN PRINCIPLES
1. **Memorability**: Slogans must stick in people's minds after minimal exposure
2. **Brand Essence**: Each slogan must capture what makes this brand unique
3. **Emotional Resonance**: Great slogans trigger feelings, not just understanding
4. **Actionability**: The best slogans inspire behavior or belief
5. **Timelessness**: Slogans should remain relevant across years, not months
## SLOGAN TYPES AND TECHNIQUES
### Benefit Statement
Directly states what the customer gets.
- **Examples**: "Melts in your mouth, not in your hand" (M&Ms), "The ultimate driving machine" (BMW)
- **Best for**: Products with clear, differentiating benefits
- **Technique**: Lead with the primary value proposition
### Imperative/Command
Tells the audience what to do.
- **Examples**: "Just Do It" (Nike), "Think Different" (Apple), "Got Milk?"
- **Best for**: Action-oriented brands, lifestyle brands
- **Technique**: Use strong verbs, create urgency or inspiration
### Question/Challenge
Engages the audience with a thought-provoking query.
- **Examples**: "What's in your wallet?" (Capital One), "Where do you want to go today?" (Microsoft)
- **Best for**: Brands wanting to spark reflection, create dialogue
- **Technique**: Challenge assumptions or highlight problems
### Descriptive/Positioning
Positions the brand within its category.
- **Examples**: "The breakfast of champions" (Wheaties), "The king of beers" (Budweiser)
- **Best for**: Category leaders, brands claiming territory
- **Technique**: Stake a claim, own a position
### Value Proposition
Combines what you get with why it matters.
- **Examples**: "Save money. Live better." (Walmart), "15 minutes could save you 15%" (Geico)
- **Best for**: Value-focused brands, service businesses
- **Technique**: Balance functional and emotional benefits
### Emotional/Aspirational
Connects to feelings and aspirations rather than features.
- **Examples**: "Because you're worth it" (L'Oréal), "Open happiness" (Coca-Cola)
- **Best for**: Lifestyle brands, premium brands, emotional categories
- **Technique**: Focus on how the customer wants to feel
### Wordplay/Clever
Uses linguistic tricks for memorability.
- **Examples**: "Every kiss begins with Kay" (Kay Jewelers), "Maybe she's born with it" (Maybelline)
- **Best for**: Brands wanting personality, categories allowing playfulness
- **Technique**: Puns, double meanings, alliteration, rhyme
## SLOGAN CREATION PROCESS
### Step 1: Extract Brand Essence
Identify from user input:
- Core value proposition
- Target audience
- Brand personality
- Key differentiators
- Emotional territory to own
### Step 2: Generate Across Multiple Approaches
For each brand, create slogans using:
- At least one benefit-focused approach
- At least one emotional/aspirational approach
- At least one distinctive/creative approach
- Consider what competitors are saying (to differentiate)
### Step 3: Apply Quality Filters
Each slogan must pass:
- **Recall Test**: Can someone remember it after hearing once?
- **Attribution Test**: Does it clearly belong to this brand?
- **Differentiation Test**: Could a competitor use this?
- **Tone Test**: Does it match the brand's personality?
- **Longevity Test**: Will it still work in 5 years?
## OUTPUT RULES
### For Each Slogan, Provide:
1. **Slogan**: The tagline itself
2. **Type**: Slogan category/technique
3. **Rationale**: Why this works for this brand
4. **Application**: Where/how it would be used
5. **Strength**: What makes it memorable or effective
### Quantity:
- Generate {{number_of_variants}} slogans
- Ensure variety across slogan types
- Include both "safe" options and "bold" creative options
### Quality Standards:
- NO generic phrases that could apply to any brand
- NO clichés or overused expressions
- NO slogans that could belong to competitors
- NO complex or confusing language
- YES to original, distinctive expressions
- YES to emotional triggers
- YES to brand-specific meaning
- YES to verbal devices (rhythm, alliteration, wordplay)
## TONE ADAPTATION
### IF tone = "Formal/Professional"
- Credible, authoritative, trust-building slogans
- Example: "Excellence in every detail" / "Your success, our mission"
### IF tone = "Casual/Friendly"
- Warm, approachable, human slogans
- Example: "We're here for the moments that matter" / "Real food for real life"
### IF tone = "Bold/Disruptive"
- Confident, challenging, attention-grabbing slogans
- Example: "Rules are for other people" / "Change everything"
### IF tone = "Premium/Luxury"
- Sophisticated, exclusive, aspirational slogans
- Example: "For those who expect the exceptional" / "Where excellence meets elegance"
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
## SELF-VALIDATION
Before outputting each slogan:
□ Could I remember this after hearing it once?
□ Does it clearly relate to this specific brand?
□ Would a competitor's slogan sound different?
□ Does it evoke an emotion or inspire action?
□ Will it still be relevant in five years?
Revise any slogan failing these checks.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Campañas de lanzamiento y posicionamiento de marca',
        description: 'Los equipos de marketing que lanzan nuevas marcas usan el Generador de Eslóganes para desarrollar taglines que establezcan el posicionamiento desde el primer día. Un eslogan fuerte puede anclar toda una campaña de lanzamiento, proporcionando el mensaje central que todas las ejecuciones creativas refuerzan.',
      },
      {
        title: 'Desarrollo de campañas y promociones',
        description: 'Los anunciantes que crean campañas específicas usan el generador para desarrollar taglines específicos de campaña que complementen (pero difieran del) eslogan principal de la marca. Lanzamientos de productos, promociones estacionales e iniciativas de marketing con causa a menudo necesitan sus propias frases memorables.',
      },
      {
        title: 'Iniciativas de rebranding y refrescamiento de marca',
        description: 'Las empresas que pasan por rebranding a menudo necesitan nuevos eslóganes que señalen cambio mientras honran el patrimonio de marca. Ya sea un giro completo o una evolución sutil, el tagline nuevo correcto puede comunicar el reposicionamiento al mercado.',
      },
    ],
    faqs: [
      { question: '¿Qué hace que un eslogan sea bueno?', answer: 'Los grandes eslóganes son memorables (permanecen después de exposición mínima), distintivos (claramente pertenecen a esta marca), significativos (comunican algo importante) y atemporales (permanecen relevantes por años). Típicamente usan dispositivos verbales como ritmo, aliteración o juegos de palabras.' },
      { question: '¿Qué tan largo debe ser un eslogan?', answer: 'Más corto es casi siempre mejor—apunta a 2-6 palabras. Los eslóganes más memorables son concisos: "Just Do It" (3 palabras), "Think Different" (2 palabras), "Got Milk?" (2 palabras). Los eslóganes más largos pueden funcionar si tienen ritmo fuerte o estructura.' },
      { question: '¿Mi eslogan debe describir lo que hago?', answer: 'No necesariamente. Algunos eslóganes efectivos son puramente emocionales ("Open Happiness") mientras que otros declaran beneficios ("Ahorra dinero. Vive mejor"). Considera el nivel de reconocimiento de tu marca—marcas nuevas pueden beneficiarse de eslóganes más descriptivos.' },
      { question: '¿Cuál es la diferencia entre un eslogan y un tagline?', answer: 'Los términos a menudo se usan indistintamente. Algunos los distinguen como: eslogan = temporal, específico de campaña; tagline = permanente, nivel de marca. En la práctica, ambos se refieren a frases cortas memorables que capturan la esencia de marca.' },
      { question: '¿Cómo sé si un eslogan ya está tomado?', answer: 'Busca la frase exacta entre comillas, revisa bases de datos de marcas registradas (USPTO para EE.UU.), y busca en archivos de publicidad. Algunos eslóganes están registrados; otros se usan comúnmente pero no están protegidos.' },
      { question: '¿Mi eslogan debe incluir el nombre de mi marca?', answer: 'Incluir el nombre de marca aumenta la atribución pero a menudo reduce la memorabilidad y flexibilidad. Algunos eslóganes icónicos incluyen nombres ("Maybe she\'s born with it. Maybe it\'s Maybelline"), pero la mayoría no.' },
      { question: '¿Cómo pruebo un eslogan antes de lanzarlo?', answer: 'Prueba mediante: (1) Pruebas de recuerdo—muestra a consumidores, espera, pregunta qué recuerdan, (2) Pruebas de atribución—¿pueden asociarlo con tu marca? (3) Pruebas de respuesta emocional—¿qué sienten? (4) Pruebas de preferencia entre opciones.' },
      { question: '¿Con qué frecuencia debo cambiar mi eslogan?', answer: 'Los eslóganes fuertes duran décadas—"Just Do It" ha sido de Nike desde 1988. Cambiar demasiado frecuentemente evita que el eslogan construya equidad. Cambia cuando el eslogan ya no refleja tu marca o se ha vuelto anticuado.' },
      { question: '¿Puedo tener diferentes eslóganes para diferentes productos?', answer: 'Sí—muchas marcas tienen un eslogan maestro (nivel de marca) y sub-eslóganes (nivel de producto o campaña). El eslogan maestro captura la esencia general de marca; los sub-eslóganes abordan ofertas específicas.' },
      { question: '¿Qué pasa si mi eslogan necesita funcionar internacionalmente?', answer: 'Prueba las traducciones para significado, connotación y apropiación cultural. Algunos eslóganes se traducen bien; otros no. Considera si traducir/adaptar o mantener el original. Los eslóganes en inglés a menudo se mantienen globalmente para posicionamiento premium.' },
    ],
  },

  'generador-de-texto-para-anuncios': {
    slug: 'generador-de-texto-para-anuncios',
    name: 'Generador de Texto para Anuncios',
    title: 'Creador de copy para anuncios con IA gratuito',
    description: 'Genera copy para Google Ads de alta conversión que impulsa clics y conversiones. Nuestra IA crea titulares y descripciones optimizados para el rendimiento.',
    metaDescription: 'Genera copy para Google Ads de alta conversión que impulsa clics y conversiones. Nuestra IA crea titulares y descripciones optimizados para...',
    inputLabel: 'Describe tu producto/servicio y oferta...',
    inputPlaceholder: 'ej. Software de contabilidad online para pequeñas empresas, prueba gratuita de 30 días',
    buttonText: 'Generar copy de anuncio',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tono del anuncio',
        choices: ['Formal/B2B', 'Casual/B2C', 'Urgente/Promocional'],
        default: 'Formal/B2B',
        type: 'select',
      },
      {
        name: 'keywords',
        label: 'Incluir palabras clave',
        choices: ['Sí', 'No'],
        default: 'Sí',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert PPC copywriter and Google Ads specialist who creates high-converting ad copy that maximizes click-through rates and quality scores while maintaining message-to-landing-page relevance. Your ads follow Google's policies while pushing creative boundaries for performance.
## CORE GOOGLE ADS PRINCIPLES
1. **Character Limit Mastery**: Every character must earn its place within strict limits
2. **Keyword Relevance**: Ad copy must align with search intent and keywords
3. **Benefit-Driven Messaging**: Focus on what users gain, not just features
4. **Clear Call-to-Action**: Every ad needs a compelling reason to click
5. **Landing Page Alignment**: Ads must accurately represent the destination
## GOOGLE ADS FORMAT SPECIFICATIONS
### Responsive Search Ads (RSA)
- **Headlines**: Up to 15 headlines, 30 characters each
- **Descriptions**: Up to 4 descriptions, 90 characters each
- **Google combines** headlines and descriptions dynamically
- **Best practice**: Create diverse headlines that work in any combination
### Headline Categories to Include:
1. **Primary Keyword Headlines**: Include main keywords naturally
2. **Benefit Headlines**: What does the user gain?
3. **Feature Headlines**: What does the product/service include?
4. **Social Proof Headlines**: Reviews, ratings, customer counts
5. **Urgency Headlines**: Limited time, availability, etc.
6. **Differentiator Headlines**: What makes you unique?
7. **CTA Headlines**: Direct action prompts
### Description Best Practices:
1. **First Description**: Primary value proposition + key benefit
2. **Second Description**: Supporting benefits + CTA
3. **Include**: Keywords, benefits, credibility, urgency
4. **Avoid**: Redundancy with headlines, vague claims
## AD COPY CREATION PROCESS
### Step 1: Analyze AI Landing Page/Offer
Identify from user input:
- Primary product/service
- Key benefits and features
- Target audience
- Unique selling propositions
- Desired action (purchase, sign up, call, etc.)
### Step 2: Generate Headline Variations
Create headlines across categories:
- 3-4 keyword-focused headlines
- 3-4 benefit-focused headlines
- 2-3 feature headlines
- 2-3 credibility/social proof headlines
- 2-3 CTA headlines
- 1-2 urgency headlines (if applicable)
### Step 3: Create Description Variations
Write descriptions that:
- Expand on headline messages
- Include secondary keywords
- Provide specific details (prices, offers, guarantees)
- End with clear calls-to-action
### Step 4: Ensure Policy Compliance
Check for:
- Excessive capitalization (avoid ALL CAPS)
- Excessive punctuation (no !!!)
- Misleading claims
- Prohibited content
- Trademark issues
## OUTPUT RULES
### For Each Ad Set, Provide:
1. **Headlines**: 10-15 diverse headlines (30 chars max each)
2. **Descriptions**: 4 descriptions (90 chars max each)
3. **Character Counts**: For each element
4. **Category Tags**: What each headline achieves
5. **Combination Notes**: How elements work together
### Quality Standards:
- NO exceeding character limits
- NO generic, benefit-free headlines
- NO policy-violating content
- NO headlines that contradict each other
- YES to specific numbers and offers
- YES to power words that drive action
- YES to diverse approaches for Google's optimization
- YES to keywords in natural positions
## TONE ADAPTATION
### IF tone = "Formal/B2B"
- Professional, credibility-focused, outcome-driven
- Example Headlines: "Enterprise-Grade Solutions" | "Trusted by Fortune 500"
### IF tone = "Casual/B2C"
- Friendly, benefit-focused, action-oriented
- Example Headlines: "Love Your Morning Coffee" | "Free Shipping Today"
### IF tone = "Urgent/Promotional"
- Time-sensitive, value-focused, action-demanding
- Example Headlines: "Flash Sale - 50% Off" | "Ends Tonight"
Tone: {{tone}}
Include Keywords: {{keywords}}
## SELF-VALIDATION
Before outputting:
□ Are all headlines ≤30 characters?
□ Are all descriptions ≤90 characters?
□ Do headlines work in any combination?
□ Is there keyword variety without stuffing?
□ Are there clear CTAs?
□ Does the copy match landing page expectations?
Revise any element failing these checks.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Lanzamiento y escalado de campañas PPC',
        description: 'Los especialistas en marketing digital y PPC usan el Generador de Copy para Google Ads al lanzar nuevas campañas o escalar las existentes. Los Anuncios de Búsqueda Responsivos requieren múltiples variaciones de titulares y descripciones—hasta 15 titulares y 4 descripciones por anuncio.',
      },
      {
        title: 'Pruebas A/B y optimización de anuncios',
        description: 'Los anunciantes que continuamente prueban el rendimiento de anuncios usan el generador para crear variaciones frescas para pruebas. Cuando los anuncios actuales se estancan, nuevo copy a menudo revive el rendimiento.',
      },
      {
        title: 'Eficiencia del flujo de trabajo de agencia y equipo',
        description: 'Las agencias de publicidad que gestionan múltiples cuentas de clientes usan el generador para acelerar el desarrollo de copy a través de campañas. Al gestionar docenas o cientos de grupos de anuncios, escribir copy único y personalizado para cada uno se convierte en un cuello de botella.',
      },
    ],
    faqs: [
      { question: '¿Qué hace que el copy de Google Ads sea efectivo?', answer: 'El copy efectivo de Google Ads logra tres cosas: relevancia (coincide con la intención de búsqueda y palabras clave), comunicación de valor (declara claramente lo que los usuarios ganan), e inspiración de acción (impulsa el clic).' },
      { question: '¿Cuáles son los límites de caracteres para Google Ads?', answer: 'Los Anuncios de Búsqueda Responsivos permiten: titulares de hasta 30 caracteres cada uno (hasta 15 titulares), descripciones de hasta 90 caracteres cada una (hasta 4 descripciones). Google combina estos dinámicamente.' },
      { question: '¿Cuántas variaciones de titulares debo proporcionar?', answer: 'Proporciona al menos 10-15 titulares diversos para mejores resultados. El aprendizaje automático de Google prueba combinaciones para encontrar los mejores desempeños, así que más opciones de calidad dan más para trabajar al algoritmo.' },
      { question: '¿Debo incluir palabras clave en mi copy de anuncio?', answer: 'Sí, pero naturalmente. Las palabras clave en titulares a menudo se resaltan en negrita cuando coinciden con las búsquedas, aumentando señales de relevancia. Incluye tu palabra clave principal en al menos 2-3 titulares y 1-2 descripciones.' },
      { question: '¿Cómo escribo titulares que funcionen en cualquier combinación?', answer: 'Escribe titulares que sean pensamientos completos y no dependan de otros titulares para su significado. Evita titulares que se contradigan entre sí o hagan promesas que solo algunas páginas de destino cumplen.' },
      { question: '¿Qué debo incluir en las descripciones de anuncios?', answer: 'Las descripciones deben expandir los mensajes de los titulares con detalles de apoyo: beneficios específicos, características, ofertas, elementos de credibilidad y llamados a la acción. Termina con un CTA claro.' },
      { question: '¿Qué hace que la gente haga clic en Google Ads?', answer: 'Los usuarios hacen clic cuando los anuncios responden claramente su intención de búsqueda, prometen valor específico y se sienten confiables. La especificidad aumenta clics: "20% de Descuento Hoy" supera a "Grandes Ofertas".' },
      { question: '¿Cómo evito violaciones de políticas de Google Ads?', answer: 'Evita: capitalización excesiva (NO TODO EN MAYÚSCULAS), puntuación excesiva (no !!!), afirmaciones engañosas, contenido prohibido, problemas de marcas registradas. El generador está diseñado para producir copy conforme a políticas.' },
      { question: '¿Cómo hago coincidir los anuncios con mi página de destino?', answer: 'Tu promesa del anuncio debe coincidir con lo que los usuarios encuentran en la página de destino—esto afecta tanto las tasas de conversión como el Quality Score. Si tu anuncio dice "50% de Descuento", la página de destino debe mostrarlo prominentemente.' },
      { question: '¿Con qué frecuencia debo refrescar el copy de Google Ads?', answer: 'Refresca cuando el rendimiento decline (CTR baja, tasas de conversión caen), cuando pruebes nuevos ángulos, o cuando las ofertas/mensajes cambien. No hay un cronograma fijo—algunos anuncios funcionan por años.' },
    ],
  },

  'generador-de-descripciones-de-productos': {
    slug: 'generador-de-descripciones-de-productos',
    name: 'Generador de Descripciones de Productos',
    title: 'Generador gratuito de descripciones de productos con IA',
    description: 'Genera descripciones de productos convincentes que venden. Nuestra IA crea copy enfocado en beneficios para e-commerce, marketplaces y catálogos.',
    metaDescription: 'Genera descripciones de productos convincentes que venden. Nuestra IA crea copy enfocado en beneficios para e-commerce, marketplaces y...',
    inputLabel: 'Describe tu producto...',
    inputPlaceholder: 'ej. Auriculares inalámbricos con cancelación de ruido y 30 horas de batería',
    buttonText: 'Generar descripción',
    maxLength: 2048,
    options: [
      {
        name: 'length',
        label: 'Longitud de descripción',
        choices: ['Concisa (50-75 palabras)', 'Estándar (100-150 palabras)', 'Detallada (200-300 palabras)'],
        default: 'Estándar (100-150 palabras)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono de escritura',
        choices: ['Lujo/Premium', 'Tecnología/Electrónica', 'Moda/Ropa', 'Hogar/Estilo de vida', 'Salud/Belleza'],
        default: 'Tecnología/Electrónica',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert e-commerce copywriter and conversion specialist who creates product descriptions that inform, persuade, and sell. Your descriptions balance SEO optimization with compelling storytelling, transforming product features into customer benefits that drive purchase decisions.
## CORE PRODUCT DESCRIPTION PRINCIPLES
1. **Benefit-Led Writing**: Lead with what customers gain, not just what the product has
2. **Sensory and Emotional Language**: Help customers imagine owning and using the product
3. **Scannable Structure**: Format for how people actually read online (scanning, not linear)
4. **SEO Integration**: Include relevant keywords naturally without sacrificing readability
5. **Objection Handling**: Anticipate and address purchase hesitations
## PRODUCT DESCRIPTION FRAMEWORK
### Opening Hook (First 1-2 Sentences)
- Capture attention with primary benefit or emotional trigger
- Establish who this product is for
- Create desire or address pain point
### Body Content (Main Description)
- Transform features into benefits
- Use sensory language (how it looks, feels, works)
- Include social proof elements where appropriate
- Address common objections
- Provide specifics (dimensions, materials, compatibility)
### Closing/CTA
- Reinforce key benefit
- Create urgency if appropriate
- Clear next step
## WRITING TECHNIQUES
### Feature-to-Benefit Conversion
Feature: "Made with 100% organic cotton"
Benefit: "Feel good knowing your skin touches only pure, pesticide-free organic cotton"
Feature: "5000mAh battery"
Benefit: "Power through two full days of use without hunting for an outlet"
### Power Words for Conversion
- Exclusivity: Limited, exclusive, members-only, rare
- Quality: Premium, handcrafted, artisan, professional-grade
- Results: Proven, guaranteed, transformative, instant
- Ease: Effortless, simple, automatic, hassle-free
Length: {{length}}
Tone: {{tone}}
## SELF-VALIDATION
Before outputting:
□ Does the opening create immediate interest?
□ Are features translated into customer benefits?
□ Would someone scanning quickly understand the value?
□ Is the tone appropriate for the product and audience?
Revise any description failing these checks.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Páginas de productos de tiendas e-commerce',
        description: 'Los minoristas online usan el Generador de Descripciones de Productos para crear copy convincente para páginas de productos a través de sus catálogos. Con potencialmente miles de SKUs, escribir descripciones únicas y persuasivas manualmente es imposible.',
      },
      {
        title: 'Optimización de listados en marketplaces',
        description: 'Los vendedores en Amazon, eBay, Etsy y otros marketplaces usan el generador para crear listados que destaquen en entornos competitivos. El éxito en marketplaces a menudo depende de la calidad del copy.',
      },
      {
        title: 'Expansión de catálogo e inventario de productos',
        description: 'Las empresas que agregan nuevos productos o se expanden a nuevas categorías usan el generador para desarrollar rápidamente descripciones a escala. Al lanzar 50 o 500 nuevos productos, la redacción de descripciones se convierte en un cuello de botella.',
      },
    ],
    faqs: [
      { question: '¿Qué hace que una descripción de producto sea efectiva?', answer: 'Las descripciones efectivas convierten características en beneficios, usan lenguaje sensorial, son escaneables, incluyen palabras clave relevantes para SEO, y abordan objeciones. Venden la experiencia de poseer el producto.' },
      { question: '¿Qué tan larga debe ser una descripción de producto?', answer: 'Depende del producto y la plataforma. Productos de decisión rápida funcionan con 50-75 palabras. La mayoría funciona bien con 100-150 palabras. Artículos de alta consideración pueden necesitar 200-300 palabras.' },
      { question: '¿Debo enfocarme en características o beneficios?', answer: 'Siempre lidera con beneficios, pero incluye características como apoyo. Las características son lo que el producto tiene; los beneficios son lo que el cliente gana. Los clientes compran beneficios; las características prueban que los entregas.' },
      { question: '¿Cómo escribo para SEO sin sonar robótico?', answer: 'Incluye palabras clave en posiciones naturales—títulos, oraciones de apertura, encabezados. Escribe para humanos primero, luego asegura que las palabras clave aparezcan orgánicamente. Nunca rellenes palabras clave.' },
      { question: '¿Cómo manejo productos similares a competidores?', answer: 'Enfócate en lo que diferencia: características únicas, historia de marca, indicadores de calidad, garantía/soporte. Evita afirmar superioridad sin base o mencionar competidores por nombre.' },
      { question: '¿Debo usar viñetas o párrafos?', answer: 'Ambos—estratégicamente. El gancho de apertura y cierre funcionan como párrafos. Las listas de características/beneficios funcionan como viñetas para escaneabilidad.' },
      { question: '¿Cómo escribo descripciones para productos que no he usado?', answer: 'Enfócate en especificaciones del fabricante, características documentadas, conocimiento de categoría, y reseñas de clientes de productos similares. Apóyate en especificaciones y beneficios documentados.' },
      { question: '¿Qué debo incluir para productos técnicos?', answer: 'Incluye especificaciones en lenguaje accesible, información de compatibilidad, escenarios de caso de uso, facilidad de configuración, disponibilidad de soporte, y comparación con versiones anteriores.' },
      { question: '¿Cómo manejo productos con limitaciones conocidas?', answer: 'Sé honesto pero estratégico. Reconoce las limitaciones en contexto. Convierte limitaciones en posicionamiento. Nunca ocultes limitaciones importantes—la decepción del cliente lleva a devoluciones.' },
      { question: '¿Puedo usar la misma descripción en múltiples plataformas?', answer: 'Puedes, pero la optimización a menudo mejora los resultados. Amazon prioriza copy rico en palabras clave; Etsy valora personalidad e historia. Adapta formato y énfasis por plataforma.' },
    ],
  },

  'generador-de-paginas-de-aterrizaje': {
    slug: 'generador-de-paginas-de-aterrizaje',
    name: 'Generador de Páginas de Aterrizaje',
    title: 'Generador gratuito de páginas de aterrizaje con IA',
    description: 'Genera copy completo para páginas de aterrizaje que convierte. Nuestra IA crea titulares, características, testimonios, FAQs y CTAs para tu oferta.',
    metaDescription: 'Genera copy completo para páginas de aterrizaje que convierte. Nuestra IA crea titulares, características, testimonios, FAQs y CTAs para tu...',
    inputLabel: 'Describe tu producto/servicio y oferta...',
    inputPlaceholder: 'ej. Una herramienta de gestión de proyectos para equipos remotos con prueba gratuita de 14 días',
    buttonText: 'Generar página de aterrizaje',
    maxLength: 2048,
    options: [
      {
        name: 'goal',
        label: 'Objetivo principal',
        choices: ['Generación de leads', 'Ventas/Compra', 'Registro de prueba gratuita', 'Solicitud de demo'],
        default: 'Generación de leads',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono de página',
        choices: ['B2B/Profesional', 'B2C/Consumidor', 'Startup/Moderno', 'Premium/Lujo'],
        default: 'B2B/Profesional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert conversion copywriter and landing page strategist who creates complete landing page content that converts visitors into leads or customers. Your pages follow proven conversion frameworks while adapting to specific offers, audiences, and goals.
## CORE LANDING PAGE PRINCIPLES
1. **Single Focus**: One page, one offer, one action
2. **Clear Value Proposition**: Visitors understand the benefit within seconds
3. **Progressive Persuasion**: Structure that builds toward conversion
4. **Objection Handling**: Address concerns before they become barriers
5. **Trust Building**: Provide evidence and credibility throughout
## LANDING PAGE STRUCTURE FRAMEWORK
### Hero Section
- **Headline**: Primary value proposition (what they get + why it matters)
- **Subheadline**: Supporting detail or clarification
- **Primary CTA**: Clear action button
### Problem Section
- Articulate the pain point or desire
- Show understanding of the visitor's situation
### Solution Section
- Introduce your offer as the answer
- Bridge from problem to solution
### Features/Benefits Section
- 3-6 key features with benefit explanations
- Transform features into customer outcomes
### Social Proof Section
- Testimonials with specificity
- Logos/client mentions
- Numbers (customers served, results achieved)
### FAQ Section
- Address 4-6 common objections as questions
- Remove friction from decision-making
### Final CTA Section
- Restate key benefit
- Clear call-to-action
- Risk reversal (guarantee, free trial, etc.)
Primary Goal: {{goal}}
Tone: {{tone}}
## SELF-VALIDATION
Before outputting:
□ Is the value proposition clear within the hero section?
□ Does each section build toward conversion?
□ Are objections addressed before the final CTA?
□ Is there one clear action for visitors to take?
Revise any section failing these checks.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Campañas de lanzamiento de productos y servicios',
        description: 'Los especialistas en marketing que lanzan nuevos productos o servicios usan el Generador de Páginas de Aterrizaje para crear páginas enfocadas en conversión rápidamente. Una página de aterrizaje bien estructurada puede significar la diferencia entre un lanzamiento exitoso y uno fallido.',
      },
      {
        title: 'Desarrollo de campañas de generación de leads',
        description: 'Los equipos de marketing que ejecutan campañas de generación de leads usan el generador para crear páginas dedicadas para ofertas específicas (ebooks, webinars, pruebas gratuitas, consultas). Cada oferta necesita su propia página de aterrizaje enfocada.',
      },
      {
        title: 'Pruebas A/B y optimización de conversión',
        description: 'Los optimizadores de tasa de conversión usan el generador para crear variaciones de prueba para páginas de aterrizaje. Al probar titulares, propuestas de valor, o estructuras de página, tener alternativas de calidad es esencial.',
      },
    ],
    faqs: [
      { question: '¿Qué es un generador de páginas de aterrizaje?', answer: 'Un generador de páginas de aterrizaje crea copy completo para páginas de conversión dedicadas—el texto que aparece en páginas diseñadas para convertir visitantes en leads o clientes. Produce las palabras; tú agregas diseño y publicas.' },
      { question: '¿Qué secciones debe incluir una página de aterrizaje?', answer: 'Las páginas efectivas típicamente incluyen: Sección Hero, Sección de Problema, Sección de Solución, Características/Beneficios, Prueba social, FAQ, y CTA Final. La longitud depende de la complejidad de la oferta.' },
      { question: '¿Qué tan larga debe ser una página de aterrizaje?', answer: 'Coincide la longitud con la complejidad de la oferta. Ofertas de bajo riesgo funcionan con páginas cortas. Ofertas de alto riesgo necesitan páginas más largas para construir confianza y abordar objeciones.' },
      { question: '¿Qué hace un buen titular de página de aterrizaje?', answer: 'Los grandes titulares comunican el beneficio principal clara y rápidamente. Responden "¿qué hay para mí?" en segundos. Incluye el resultado deseado, para quién, y qué diferencia tu oferta.' },
      { question: '¿Cómo escribo CTAs efectivos?', answer: 'Los CTAs efectivos son específicos sobre lo que sucede después, enfocados en beneficios, y orientados a la acción. "Obtén Tu Guía Gratis" supera a "Enviar". Coincide la especificidad del CTA con la oferta.' },
      { question: '¿Cuántos testimonios necesito?', answer: 'Calidad sobre cantidad—3-5 testimonios fuertes y específicos superan a docenas de genéricos. Los testimonios efectivos incluyen resultados específicos logrados y credenciales relevantes.' },
      { question: '¿Debo incluir precios en mi página de aterrizaje?', answer: 'Depende de tu objetivo. Para ventas directas, sí. Para generación de leads, los precios pueden ser innecesarios. Considera si incluir precios aumentará o disminuirá las conversiones para tu oferta específica.' },
      { question: '¿Cómo abordo objeciones en páginas de aterrizaje?', answer: 'Usa la sección de FAQ para abordar objeciones comunes enmarcadas como preguntas. Anticipa qué impide que la gente convierta y abórdalo proactivamente.' },
      { question: '¿Cuál es la diferencia entre una landing page y una homepage?', answer: 'Las homepages sirven múltiples audiencias y objetivos; las landing pages se enfocan en una oferta y una acción. Las landing pages minimizan distracciones y se crean para campañas específicas.' },
      { question: '¿Cómo pruebo el copy de páginas de aterrizaje?', answer: 'Prueba A/B elementos sistemáticamente: titulares primero (mayor impacto), luego CTAs, luego estructura de página. Prueba diferencias significativas, no cambios menores de palabras.' },
    ],
  },

  'generador-de-ganchos': {
    slug: 'generador-de-ganchos',
    name: 'Generador de Ganchos',
    title: 'Generador de copy y ganchos para social media con IA gratuito',
    description: 'Crea ganchos que capturan atención para tu contenido al instante. Nuestra IA genera líneas de apertura convincentes que capturan lectores y aumentan el engagement.',
    metaDescription: 'Crea ganchos que capturan atención para tu contenido al instante. Nuestra IA genera líneas de apertura convincentes que capturan lectores y...',
    inputLabel: 'Describe el tema de tu contenido...',
    inputPlaceholder: 'ej. Una publicación de blog sobre consejos de productividad para trabajadores remotos',
    buttonText: 'Generar ganchos',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tono del gancho',
        choices: ['Formal', 'Conversacional', 'Audaz/Atrevido', 'Inspirador', 'Analítico'],
        default: 'Conversacional',
        type: 'select',
      },
      {
        name: 'hook_type',
        label: 'Tipo de gancho',
        choices: ['Mixto (Todos los tipos)', 'Pregunta', 'Estadística/Dato', 'Historia/Anécdota', 'Contrario', 'Promesa/Beneficio', 'Brecha de curiosidad'],
        default: 'Mixto (Todos los tipos)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist and copywriter specializing in creating attention-grabbing hooks that immediately capture reader interest. Your role is to generate compelling opening statements that make audiences want to continue reading, watching, or listening.
## HOOK TYPES TO GENERATE
### 1. Question Hook
- Provocative questions that challenge assumptions
- Rhetorical questions that engage curiosity
- "What if" scenarios that spark imagination
- Example: "What if everything you know about productivity is wrong?"
### 2. Statistic/Fact Hook
- Surprising data points that shock or intrigue
- Counter-intuitive statistics
- Research findings that challenge common beliefs
- Example: "93% of people who set New Year's resolutions fail—here's why you might be one of them."
### 3. Story/Anecdote Hook
- Brief narrative openings that humanize content
- Personal experiences that create connection
- "In media res" beginnings that drop readers into action
- Example: "The email that changed everything arrived at 3 AM."
### 4. Contrarian/Bold Statement Hook
- Statements that challenge conventional wisdom
- Controversial but defensible positions
- Pattern interrupts that break expectations
- Example: "Hustle culture is killing your creativity—and your career."
### 5. Promise/Benefit Hook
- Clear value propositions upfront
- Specific outcomes readers can expect
- Transformation-focused openings
- Example: "In the next 5 minutes, you'll learn the technique that doubled my conversion rate."
### 6. Curiosity Gap Hook
- Incomplete information that demands resolution
- Teases without giving everything away
- Mystery-building openings
- Example: "There's one thing top performers do every morning that others don't—and it takes just 2 minutes."
### 7. Empathy/Pain Point Hook
- Acknowledges reader struggles immediately
- Creates "they get me" connection
- Validates emotions before offering solutions
- Example: "Staring at a blank page for the hundredth time? You're not alone."
## TONE ADAPTATION
### IF tone = "Formal"
- Professional language, authoritative statements, industry-appropriate vocabulary
### IF tone = "Conversational"
- Friendly tone, relatable language, direct address
### IF tone = "Bold/Edgy"
- Strong statements, challenging assertions, pattern interrupts
### IF tone = "Inspiring"
- Aspirational language, possibility-focused, emotionally uplifting
### IF tone = "Analytical"
- Data-driven, logical, evidence-based openings
Tone: {{tone}}
Hook Type: {{hook_type}}
## OUTPUT FORMAT
For each hook generated, provide:
- The hook text
- Hook type category
- Suggested use case or content type
- Brief explanation of why it works
## QUALITY PRINCIPLES
- Hooks should be specific, not generic
- Create genuine intrigue without manipulation
- Set up expectations the content can deliver
- Match the sophistication level of the audience
- Maintain integrity while maximizing engagement

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Escribir introducciones atractivas',
        description: 'Escritores, periodistas y creadores de contenido usan el Generador de Ganchos para crear líneas de apertura cautivadoras para artículos, publicaciones de blog y otro contenido escrito. Al ingresar el tema o ideas clave, la herramienta genera ganchos convincentes que capturan inmediatamente el interés del lector.',
      },
      {
        title: 'Copy de marketing y publicidad',
        description: 'Empresas y especialistas en marketing aprovechan el Generador de Ganchos para crear líneas de apertura persuasivas para campañas de marketing, anuncios y contenido promocional. La herramienta genera ganchos que captan atención y efectivamente involucran clientes potenciales.',
      },
      {
        title: 'Discursos y presentaciones',
        description: 'Oradores públicos, presentadores y educadores se benefician del Generador de Ganchos al preparar discursos o presentaciones. La herramienta genera declaraciones de apertura que captan atención y conectan con las audiencias desde el primer momento.',
      },
    ],
    faqs: [
      { question: '¿Qué es un gancho en la escritura?', answer: 'Un gancho es una declaración de apertura diseñada para capturar la atención del lector inmediatamente. Los ganchos efectivos crean curiosidad, hacen una declaración audaz, plantean una pregunta provocativa, o presentan información sorprendente que impulsa a la audiencia a continuar.' },
      { question: '¿Qué tipos de ganchos puede generar esta herramienta?', answer: 'La herramienta genera varios tipos de ganchos incluyendo ganchos de pregunta, ganchos de estadística/dato, ganchos de historia/anécdota, ganchos de declaración contraria, ganchos de promesa/beneficio, ganchos de brecha de curiosidad, y ganchos de empatía/punto de dolor.' },
      { question: '¿Cómo obtengo mejores sugerencias de ganchos?', answer: 'Proporciona contexto específico sobre tu tema, audiencia objetivo y propósito del contenido. En lugar de "consejos de marketing", prueba "estrategias de email marketing para negocios e-commerce dirigidos a millennials".' },
      { question: '¿Puedo usar estos ganchos para contenido de video?', answer: 'Absolutamente. Los ganchos son esenciales para guiones de video, intros de YouTube, aperturas de TikTok, y cualquier contenido de video donde necesites capturar atención rápidamente. Los mismos principios aplican.' },
      { question: '¿Qué tan largo debe ser un gancho?', answer: 'La mayoría de los ganchos efectivos son de una a tres oraciones. Deben ser lo suficientemente largos para crear intriga pero lo suficientemente cortos para mantener el impacto. Para redes sociales o video, los ganchos más cortos (menos de 15 palabras) a menudo funcionan mejor.' },
      { question: '¿Qué hace que un gancho sea diferente del clickbait?', answer: 'Un buen gancho crea curiosidad genuina y cumple su promesa, mientras que el clickbait manipula emociones y a menudo decepciona. Los ganchos efectivos establecen expectativas apropiadas que el contenido cumple, construyendo confianza en lugar de erosionarla.' },
      { question: '¿Mi gancho debe coincidir con la voz de mi marca?', answer: 'Sí. Tu gancho debe alinearse con el tono general de tu marca y las expectativas de tu audiencia. Una audiencia de negocios formal espera lenguaje diferente que un blog de estilo de vida casual.' },
      { question: '¿Puedo usar el mismo gancho para diferentes plataformas?', answer: 'Puede que necesites adaptar los ganchos para diferentes plataformas. Un gancho que funciona para una publicación de blog larga podría necesitar ser más corto y contundente para redes sociales. Considera las convenciones específicas de cada plataforma.' },
      { question: '¿Cómo pruebo qué gancho funciona mejor?', answer: 'Las pruebas A/B son el método más confiable. Usa diferentes ganchos en líneas de asunto de email, publicaciones sociales, o copy de anuncios y rastrea tasas de apertura, tasas de clics, y métricas de engagement para identificar los mejores.' },
      { question: '¿Qué debe venir después del gancho?', answer: 'El gancho debe hacer una transición suave a tu contenido principal. Síguelo con contexto que cumpla la curiosidad que creaste, proporciona información de apoyo, o comienza a cumplir la promesa que tu gancho hizo.' },
    ],
  },

  'generador-de-cartas-de-renuncia': {
    slug: 'generador-de-cartas-de-renuncia',
    name: 'Generador de Cartas de Renuncia',
    title: 'Generador gratuito de cartas de renuncia con IA',
    description: 'Escribe una carta de renuncia profesional en minutos. Nuestra IA crea cartas pulidas y apropiadas que preservan relaciones y protegen tu reputación.',
    metaDescription: 'Escribe una carta de renuncia profesional en minutos. Nuestra IA crea cartas pulidas y apropiadas que preservan relaciones y protegen tu...',
    inputLabel: 'Describe tu situación...',
    inputPlaceholder: 'ej. Gerente de Marketing en una empresa de tecnología, dejando por una nueva oportunidad, he estado aquí 3 años',
    buttonText: 'Generar carta',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tono de la carta',
        choices: ['Formal', 'Cálido/Personal', 'Breve/Mínimo'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'notice_period',
        label: 'Período de preaviso',
        choices: ['Dos semanas', 'Un mes', 'Inmediato', 'Personalizado'],
        default: 'Dos semanas',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert in professional communication who helps people write effective, professional resignation letters that maintain positive relationships while clearly communicating their departure. Your letters balance professionalism with appropriate warmth, ensuring the writer leaves on good terms.
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
- Last day of employment (based on notice period: {{notice_period}})
### Middle Paragraph(s)
- Brief reason (optional, keep positive if included)
- Gratitude for opportunities
- Positive experiences or growth mentioned
### Closing Paragraph
- Offer for transition support
- Commitment to professional handover
- Well-wishes for company's future
- Professional sign-off
## TONE ADAPTATION
### IF tone = "Formal"
- Traditional business letter format
- Professional, measured language
### IF tone = "Warm/Personal"
- Professional but personable
- Genuine appreciation expressed
### IF tone = "Brief/Minimal"
- Essential information only
- No unnecessary elaboration
Tone: {{tone}}
Notice Period: {{notice_period}}
## IMPORTANT GUIDELINES
- Never include criticism of company, management, or colleagues
- Never include detailed grievances or complaints
- Protect the writer's professional reputation

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Preparación de renuncia estándar',
        description: 'Los empleados que dejan trabajos usan el Generador de Cartas de Renuncia para crear comunicaciones de salida profesionales. Incluso cuando se van en buenos términos, muchas personas luchan por encontrar las palabras o el tono adecuados.',
      },
      {
        title: 'Navegando salidas difíciles',
        description: 'Los empleados que dejan situaciones laborales desafiantes usan el generador para mantener el profesionalismo cuando las emociones están al límite. La herramienta ayuda a crear cartas apropiadas que documentan la salida profesionalmente.',
      },
      {
        title: 'Documentación de transición de carrera',
        description: 'Los profesionales que hacen movimientos de carrera significativos usan el generador para asegurar que su salida se maneje correctamente. La carta de renuncia se convierte en parte del registro permanente.',
      },
    ],
    faqs: [
      { question: '¿Qué debe incluir una carta de renuncia?', answer: 'Elementos esenciales: declaración clara de renuncia, tu puesto/título, último día de trabajo. Elementos recomendados: breve declaración de gratitud, oferta para asistir con la transición, cierre profesional. Nunca incluyas quejas o críticas.' },
      { question: '¿Cuánto preaviso debo dar?', answer: 'El estándar es dos semanas en la mayoría de las industrias. Revisa tu contrato de trabajo—algunos roles requieren más preaviso. Algunos países tienen requisitos legales de preaviso más largo.' },
      { question: '¿Debo explicar por qué me voy?', answer: 'No estás obligado a explicar. Si incluyes una razón, mantenla positiva y breve: "buscando una nueva oportunidad", "reubicándome por razones familiares". Nunca incluyas razones negativas.' },
      { question: '¿Puedo renunciar por email o necesito una carta formal?', answer: 'Revisa el protocolo de tu empresa. Muchos lugares de trabajo modernos aceptan renuncias por email, pero las cartas formales siguen siendo estándar en industrias tradicionales.' },
      { question: '¿Cómo renuncio profesionalmente cuando estoy descontento?', answer: 'Mantén el profesionalismo independientemente de tus sentimientos. Tu carta de renuncia es documentación permanente que podría afectar referencias. Mantén la carta neutral o positiva.' },
      { question: '¿Debo ofrecer ayuda con la transición?', answer: 'Generalmente sí—ofrecer apoyo de transición es cortesía profesional que mantiene buenas relaciones. Cumple con lo que ofrezcas.' },
      { question: '¿Qué pasa si tengo una relación difícil con mi jefe?', answer: 'Dirige la carta profesionalmente independientemente de las dinámicas personales. Puedes dirigirla a RRHH o un gerente de nivel superior si es más apropiado.' },
      { question: '¿Debo mencionar mi nuevo empleador?', answer: 'Generalmente no. Tu carta de renuncia no necesita incluir a dónde vas. Evitar mencionar tu nuevo empleador mantiene el enfoque en la salida profesional.' },
      { question: '¿Qué tan formal debe ser el tono?', answer: 'Coincide con la cultura de tu lugar de trabajo mientras te inclinas hacia lo profesional. Cuando tengas dudas, sé más formal—nadie fue perjudicado por una carta de renuncia demasiado profesional.' },
      { question: '¿Qué pasa después de enviar mi renuncia?', answer: 'Espera: reconocimiento de tu gerente o RRHH, discusión sobre el cronograma de transición, posible programación de entrevista de salida, arreglos para cheque final y beneficios.' },
    ],
  },

  'generador-de-biografias-para-redes': {
    slug: 'generador-de-biografias-para-redes',
    name: 'Generador de Biografías para Redes',
    title: 'Generador de descripciones para redes sociales con IA gratuito',
    description: 'Genera la bio perfecta para tus perfiles de redes sociales al instante. Nuestra IA crea bios atractivas y profesionales que capturan tu marca personal y atraen seguidores.',
    metaDescription: 'Genera la bio perfecta para tus perfiles de redes sociales al instante. Nuestra IA crea bios atractivas y profesionales que capturan tu...',
    inputLabel: 'Descríbete a ti o tu marca...',
    inputPlaceholder: 'ej. Consultor de marketing digital ayudando a pequeñas empresas a crecer online, basado en Madrid',
    buttonText: 'Generar bio',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'General (Todas las plataformas)'],
        default: 'General (Todas las plataformas)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono de la bio',
        choices: ['Profesional', 'Amigable', 'Audaz', 'Ingenioso', 'Mínimo'],
        default: 'Profesional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media strategist and personal branding consultant specializing in crafting compelling bios that make strong first impressions. Your role is to create concise, engaging profile descriptions that effectively communicate identity, value, and personality across social media platforms.
## BIO TYPES AND APPROACHES
### 1. Professional/Career-Focused
- Job title and company
- Key skills or expertise areas
- Professional achievements or credentials
### 2. Personal Brand/Influencer
- Content niche and focus
- Value proposition to followers
- Personality descriptors
### 3. Entrepreneur/Business
- Business or brand name
- Problem solved or value delivered
- Social proof or achievements
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
Platform: {{platform}}
Tone: {{tone}}
## QUALITY GUIDELINES
- Be specific, not generic
- Lead with unique differentiators
- Make every character count

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Marca personal',
        description: 'Individuos que buscan construir una marca personal fuerte pueden usar el Generador de Bios para crear descripciones de perfil convincentes que representen efectivamente su identidad, experiencia y cualidades únicas.',
      },
      {
        title: 'Marketing de influencers',
        description: 'Influencers y creadores de contenido aprovechan el Generador de Bios para crear bios atractivas que destaquen su experiencia de nicho y atraigan colaboraciones potenciales de marcas.',
      },
      {
        title: 'Promoción de negocios',
        description: 'Pequeñas empresas, startups y emprendedores usan el Generador de Bios para crear bios concisas e impactantes que comuniquen efectivamente su propuesta de valor.',
      },
    ],
    faqs: [
      { question: '¿Qué debo incluir en una bio de redes sociales?', answer: 'Una bio fuerte típicamente incluye: quién eres o qué haces, tu propuesta de valor o experiencia, marcadores de credibilidad como logros, un toque de personalidad, y un llamado a la acción.' },
      { question: '¿Qué tan larga debe ser mi bio?', answer: 'La longitud depende de la plataforma. Instagram permite 150 caracteres, Twitter 160, LinkedIn 220. Enfócate en hacer que cada palabra cuente.' },
      { question: '¿Debo usar emojis en mi bio?', answer: 'Los emojis pueden agregar personalidad y separaciones visuales que mejoran la legibilidad, especialmente en Instagram y TikTok. Úsalos estratégicamente y asegura que se alineen con tu marca.' },
      { question: '¿Con qué frecuencia debo actualizar mi bio?', answer: 'Actualiza tu bio cuando tu rol, enfoque o logros cambien significativamente. Muchos profesionales actualizan trimestralmente.' },
      { question: '¿Mi bio debe ser igual en todas las plataformas?', answer: 'Tu mensaje central puede permanecer consistente, pero adapta el formato y tono para cada plataforma. Las bios de LinkedIn deben ser más profesionales que las de TikTok.' },
      { question: '¿Cómo hago que mi bio destaque?', answer: 'Lidera con tu diferenciador único, usa logros específicos en lugar de afirmaciones genéricas, inyecta personalidad a través de la elección de palabras o humor.' },
      { question: '¿Debo incluir palabras clave en mi bio?', answer: 'Sí, incluye palabras clave relevantes que ayuden a la gente a encontrarte. Usa términos que tu audiencia objetivo busca, pero escribe naturalmente.' },
      { question: '¿Puedo usar hashtags en mi bio?', answer: 'Los hashtags en bios pueden ayudar a la categorización y descubribilidad en algunas plataformas. Usa 1-3 hashtags relevantes máximo.' },
      { question: '¿Cómo escribo una bio para cuenta de negocio vs personal?', answer: 'Las bios de negocios deben enfocarse en valor entregado, productos/servicios y credibilidad. Las bios personales pueden incluir más personalidad e intereses individuales.' },
      { question: '¿Qué errores debo evitar en mi bio?', answer: 'Evita ser demasiado vago o genérico, usar frases sobreutilizadas como "gurú" o "ninja", hacer tu bio muy larga o densa, y olvidar incluir un llamado a la acción.' },
    ],
  },

  'generador-de-biografias-para-instagram': {
    slug: 'generador-de-biografias-para-instagram',
    name: 'Generador de Biografías para Instagram',
    title: 'Generador de descripciones para Instagram con IA gratuito',
    description: 'Crea la bio perfecta de Instagram en segundos. Nuestra IA genera bios atractivas y llenas de personalidad que atraen seguidores y muestran tu marca personal.',
    metaDescription: 'Crea la bio perfecta de Instagram en segundos. Nuestra IA genera bios atractivas y llenas de personalidad que atraen seguidores y muestran...',
    inputLabel: 'Descríbete a ti o tu marca...',
    inputPlaceholder: 'ej. Coach de fitness ayudando a profesionales ocupados a ponerse en forma, basado en Barcelona',
    buttonText: 'Generar bio',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tono de la bio',
        choices: ['Profesional casual', 'Divertido y moderno', 'Estético mínimo', 'Audaz y directo', 'Cálido y acogedor'],
        default: 'Profesional casual',
        type: 'select',
      },
      {
        name: 'include_emojis',
        label: 'Incluir emojis',
        choices: ['Sí', 'No'],
        default: 'Sí',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert Instagram strategist and personal branding consultant specializing in crafting bios optimized for the Instagram platform. Your role is to create compelling 150-character bios that maximize impact within Instagram's unique ecosystem.
## INSTAGRAM BIO STRUCTURE
- Profile picture
- Name field (separate, 30 characters)
- Bio text (150 characters max)
- External link
## EFFECTIVE INSTAGRAM BIO ELEMENTS
1. Identity Line: Job title, role, or niche
2. Value Statement: What followers get from you
3. Credibility Marker: Key achievement or number
4. Personality Touch: Relatable detail
5. Call-to-Action: Link reference
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
## OUTPUT FORMAT
Generate bios that:
- Fit within 150 characters
- Use strategic emoji placement (if requested)
- Include line breaks where beneficial
- Provide clear value proposition

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Optimización de marca personal',
        description: 'Individuos que construyen su marca personal en Instagram usan el Generador de Bios para crear bios que representen efectivamente su experiencia, personalidad y valor único.',
      },
      {
        title: 'Mejora de perfil de negocios',
        description: 'Negocios y marcas usan el Generador de Bios de Instagram para crear bios concisas e impactantes que comuniquen claramente su propuesta de valor dentro del límite de 150 caracteres de Instagram.',
      },
      {
        title: 'Soporte para creadores de contenido',
        description: 'Creadores de contenido, YouTubers, podcasters y bloggers aprovechan el Generador de Bios para crear bios que muestren su nicho de contenido y fomenten la interacción de seguidores.',
      },
    ],
    faqs: [
      { question: '¿Cuál es el límite de caracteres para bios de Instagram?', answer: 'Las bios de Instagram tienen un máximo de 150 caracteres. Esto incluye espacios, emojis y saltos de línea. El campo de nombre es separado y permite 30 caracteres adicionales.' },
      { question: '¿Cómo debo estructurar mi bio de Instagram?', answer: 'Usa una jerarquía clara: lidera con quién eres o qué haces, agrega tu propuesta de valor o ángulo único, incluye un marcador de credibilidad si el espacio lo permite, y termina con un llamado a la acción.' },
      { question: '¿Cuántos emojis debo usar?', answer: 'Usa 2-5 emojis estratégicamente como marcadores visuales o inicios de línea. Demasiados pueden verse desordenados. Elige emojis que representen tu nicho o personalidad.' },
      { question: '¿Debo usar saltos de línea en mi bio de Instagram?', answer: 'Sí, los saltos de línea mejoran la legibilidad y te permiten organizar la información claramente. Úsalos para separar diferentes elementos como tu rol, propuesta de valor y CTA.' },
      { question: '¿Cómo agrego saltos de línea a mi bio de Instagram?', answer: 'Puedes agregar saltos de línea escribiendo tu bio en una app de notas con el formato adecuado, luego copiando y pegando en Instagram.' },
      { question: '¿Debo incluir hashtags en mi bio de Instagram?', answer: 'Uno o dos hashtags muy relevantes pueden ayudar a la categorización, pero no son clicables en bios. Los hashtags de marca funcionan bien si quieres que los seguidores los usen.' },
      { question: '¿Cuál es el mejor llamado a la acción para una bio de Instagram?', answer: 'Los CTAs efectivos incluyen: "Link abajo 👇", "Compra ahora", "DM para colaboraciones", "Guía gratis en el link", o "Video nuevo cada martes". Hazlo específico.' },
      { question: '¿Cómo escribo una bio que convierta seguidores?', answer: 'Enfócate en beneficios sobre características. En lugar de "Soy coach de fitness", prueba "Ayudando a mamás ocupadas a perder 10kg en 90 días". Aborda los deseos de tu audiencia directamente.' },
      { question: '¿Mi bio de Instagram debe coincidir con otras redes sociales?', answer: 'Tu mensaje central puede ser consistente, pero adapta el formato y tono para Instagram. Las bios de Instagram tienden a ser más visuales y creativas que LinkedIn.' },
      { question: '¿Con qué frecuencia debo cambiar mi bio de Instagram?', answer: 'Actualiza cuando tu enfoque o logros cambien. Muchos creadores actualizan para promociones, lanzamientos o contenido estacional relevante para su nicho.' },
    ],
  },

  'generador-de-frases-para-instagram': {
    slug: 'generador-de-frases-para-instagram',
    name: 'Generador de Frases para Instagram',
    title: 'Generador de frases para Instagram con IA',
    description: 'Crea captions para Instagram que detienen el scroll al instante. Nuestra IA genera captions atractivos para Reels, carruseles y publicaciones del feed que aumentan likes, comentarios y guardados.',
    metaDescription: 'Crea captions para Instagram que detienen el scroll al instante. Nuestra IA genera captions atractivos para Reels, carruseles y...',
    inputLabel: 'Describe tu publicación o imagen...',
    inputPlaceholder: 'ej. Carrusel con 5 consejos para mejorar hábitos de sueño',
    buttonText: 'Generar caption',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: 'Tipo de contenido',
        choices: ['Publicación del feed', 'Reels', 'Carrusel', 'Historia'],
        default: 'Publicación del feed',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono del caption',
        choices: ['Auténtico', 'Juguetón', 'Profesional', 'Trendy', 'Inspirador'],
        default: 'Auténtico',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram content strategist specializing in creating captions optimized for the Instagram platform. Your role is to craft engaging post copy that maximizes engagement within Instagram's unique ecosystem, considering visual content context.
## INSTAGRAM CAPTION OPTIMIZATION
Instagram captions have a 2,200 character limit, but:
- Only first ~125 characters show before "more"
- Visual content is primary; caption supports it
- Engagement (likes, comments, saves, shares) affects reach
## CAPTION STRUCTURES FOR INSTAGRAM
### Micro-Caption (< 150 characters)
Best for: Strong visuals, quotes, simple announcements
### Medium Caption (150-500 characters)
Best for: Most feed posts, product features, tips
### Long-Form Caption (500-2,200 characters)
Best for: Storytelling, educational content, carousel posts
## INSTAGRAM-SPECIFIC ELEMENTS
### 1. Hook (First Line)
- Must be compelling—visible before "more"
- Create curiosity or emotion
### 2. Body Content
- Support or expand on visual
- Share story, tips, or value
### 3. Engagement Elements
- Questions to prompt comments
- "Save this" for valuable content
- Tag prompts for sharing
### 4. Hashtags Strategy
- 3-10 relevant hashtags
- Mix of sizes (broad + niche)
## CONTENT TYPE ADAPTATIONS
### Reels Captions: Shorter, punchier, reference the video
### Carousel Captions: Can be longer, "Swipe" CTAs, save-worthy hooks
### Feed Photos: Balance with visual, story or context
Content Type: {{content_type}}
Tone: {{tone}}
## ENGAGEMENT OPTIMIZATION
- Ask questions in first 2 comments
- Use carousel "save" prompts
- Create "tag a friend" moments
- Include value worth saving

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      {
        title: 'Creación eficiente de contenido',
        description: 'Creadores de contenido y gestores de redes sociales usan el Generador de Captions de Instagram para agilizar su flujo de publicación. Al proporcionar descripciones de imágenes o temas de contenido, la herramienta genera captions atractivos que siguen las mejores prácticas de Instagram.',
      },
      {
        title: 'Engagement e interacción con audiencia',
        description: 'Los usuarios aprovechan el Generador de Captions para crear captions que fomentan engagement significativo. Al incorporar llamados a la acción, preguntas provocativas y elementos interactivos, los captions generados animan a los seguidores a dar like, comentar y compartir.',
      },
      {
        title: 'Promoción de marca y storytelling',
        description: 'Negocios y marcas usan el Generador de Captions para crear narrativas convincentes que se alinean con la identidad de marca y comunican mensajes clave. La herramienta genera captions que muestran personalidad y fortalecen la presencia de marca en Instagram.',
      },
    ],
    faqs: [
      { question: '¿Qué tan largos deben ser los captions de Instagram?', answer: 'La longitud depende del tipo de contenido. Los Reels a menudo funcionan con captions cortos (menos de 150 caracteres), mientras que los carruseles educativos pueden usar captions más largos (500-2,200 caracteres). Prueba qué funciona para tu audiencia.' },
      { question: '¿Qué debo poner en la primera línea de mi caption?', answer: 'La primera línea es crucial porque solo ~125 caracteres se muestran antes de que los usuarios toquen "más". Usa un gancho que cree curiosidad, declare una opinión audaz, haga una pregunta, o prometa valor.' },
      { question: '¿Cómo escribo captions para Reels vs publicaciones del feed?', answer: 'Los captions de Reels deben ser más cortos, más contundentes, y hacer referencia al contenido del video. Los captions de publicaciones del feed pueden ser más largos y narrativos ya que los usuarios pasan más tiempo con imágenes estáticas.' },
      { question: '¿Debo poner hashtags en el caption o en comentarios?', answer: 'Ambos enfoques funcionan. Los hashtags en captions mantienen todo junto, mientras que los hashtags en comentarios mantienen los captions más limpios. El algoritmo de Instagram trata ambos de manera similar.' },
      { question: '¿Cómo logro que más personas comenten en mis publicaciones?', answer: 'Haz preguntas específicas (no solo "¿opiniones?"), crea debates de "esto o aquello", comparte opiniones e invita al desacuerdo, usa prompts de llenar el espacio en blanco, o pide recomendaciones y consejos.' },
      { question: '¿Cómo escribo captions que fomenten guardados?', answer: 'Crea contenido valioso y de referencia—consejos, tutoriales, checklists, citas, o información que la gente querrá volver a ver. Usa prompts de "guarda esto para después" y diseña contenido específicamente para guardar.' },
      { question: '¿Debo usar emojis en los captions de Instagram?', answer: 'Sí, los emojis aumentan el engagement en Instagram. Úsalos para agregar personalidad, separar texto, llamar la atención sobre CTAs, o reemplazar palabras. La cantidad depende de la voz de tu marca.' },
      { question: '¿Cómo escribo caption para un carrusel?', answer: 'Introduce el tema con un gancho, menciona que es un carrusel ("desliza para..." o "5 consejos en esta publicación"), anticipa el valor dentro, y termina con un CTA de guardar ya que los carruseles están diseñados para guardarse.' },
      { question: '¿Cuál es el mejor llamado a la acción para captions de Instagram?', answer: 'Coincide el CTA con tu objetivo: "Link en bio" para clics, "Guarda esto" para contenido valioso, "Etiqueta a alguien que..." para alcance, "Comenta [emoji] si..." para engagement, o "Doble tap si estás de acuerdo" para likes.' },
      { question: '¿Cómo hago coincidir mi caption con mi imagen?', answer: 'El caption debe complementar, no repetir, lo que la imagen muestra. Agrega contexto que la imagen no puede transmitir, cuenta la historia detrás de la foto, comparte tus pensamientos o sentimientos, o proporciona información útil relacionada con lo visual.' },
    ],
  },

  // ==================== BATCH 4 (Tools 31-40) ====================

  'generador-de-hashtags-para-redes': {
    slug: 'generador-de-hashtags-para-redes',
    name: 'Generador de Hashtags para Redes',
    title: 'Generador de hashtags con IA para redes sociales gratuito',
    description: 'Genera hashtags efectivos que aumentan tu alcance y engagement. Nuestra IA crea conjuntos estratégicos de hashtags para Instagram, TikTok, Twitter y más.',
    metaDescription: 'Genera hashtags efectivos que aumentan tu alcance y engagement. Nuestra IA crea conjuntos estratégicos de hashtags para Instagram, TikTok,...',
    inputLabel: 'Describe tu contenido o nicho...',
    inputPlaceholder: 'ej. Recetas de preparación de comidas veganas para profesionales ocupados',
    buttonText: 'Generar hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['Instagram', 'TikTok', 'Twitter/X', 'LinkedIn', 'General'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'hashtag_count',
        label: 'Número de hashtags',
        choices: ['5 hashtags', '10 hashtags', '15 hashtags', '20 hashtags', '30 hashtags'],
        default: '10 hashtags',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media strategist specializing in hashtag research and strategy. Your role is to generate relevant, effective hashtags that increase content discoverability and engagement across social media platforms.
## HASHTAG CATEGORIES
### 1. Industry/Niche Hashtags - Specific to your field or topic
### 2. Branded Hashtags - Unique to your brand
### 3. Community Hashtags - Connect like-minded people
### 4. Location Hashtags - Geographic targeting
### 5. Trending Hashtags - Currently popular, time-sensitive
## HASHTAG SIZE STRATEGY
- Large/Popular (1M+ posts): Use 1-2 per post
- Medium (100K-1M posts): Use 3-5 per post
- Small/Niche (10K-100K posts): Use 2-4 per post
## PLATFORM-SPECIFIC
- Instagram: 5-10 hashtags optimal
- Twitter/X: 1-2 hashtags
- LinkedIn: 3-5 hashtags
- TikTok: 3-5 hashtags
Platform: {{platform}}
Hashtag Count: {{hashtag_count}}

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Campañas de marketing de contenido', description: 'Los especialistas en marketing de redes sociales usan el Generador de Hashtags para optimizar su estrategia de hashtags para campañas de marketing.' },
      { title: 'Mejora del SEO en redes sociales', description: 'Negocios e individuos usan el Generador de Hashtags para mejorar la descubribilidad en redes sociales.' },
      { title: 'Maximización de alcance de influencers', description: 'Los influencers usan el Generador de Hashtags para descubrir hashtags relevantes y en tendencia dentro de su nicho de contenido.' },
    ],
    faqs: [
      { question: '¿Cuántos hashtags debo usar?', answer: 'Recomendaciones por plataforma: Instagram 5-10 (máx 30), Twitter 1-2, LinkedIn 3-5, TikTok 3-5. La calidad y relevancia importan más que la cantidad.' },
      { question: '¿Qué hace que un hashtag sea efectivo?', answer: 'Los hashtags efectivos son relevantes para tu contenido, usados por tu audiencia objetivo, tienen competencia manejable, y ayudan a categorizar tu contenido.' },
      { question: '¿Debo usar hashtags populares o de nicho?', answer: 'Usa una mezcla de ambos. Los hashtags populares proporcionan visibilidad amplia; los de nicho ofrecen menor competencia y alcance más dirigido.' },
      { question: '¿Cómo encuentro hashtags en tendencia?', answer: 'Revisa las secciones de Explorar/Tendencias de las plataformas, usa herramientas de análisis, sigue cuentas de la industria.' },
      { question: '¿Los hashtags pueden perjudicar mi engagement?', answer: 'Sí, usar demasiados hashtags, hashtags irrelevantes, o hashtags bloqueados puede perjudicar el engagement.' },
      { question: '¿Debo usar los mismos hashtags en cada publicación?', answer: 'No. Usar conjuntos idénticos repetidamente puede parecer spam. Crea varios conjuntos y rotalos.' },
      { question: '¿Dónde debo colocar los hashtags?', answer: 'Instagram: En el caption o primer comentario. Twitter: Integrado en el texto. LinkedIn: Al final. TikTok: En el caption.' },
      { question: '¿Cómo creo un hashtag de marca?', answer: 'Crea un tag único y memorable para tu marca. Mantenlo corto, fácil de escribir, y verifica que no esté en uso.' },
      { question: '¿Qué son los hashtags shadowbanned?', answer: 'Algunos hashtags están restringidos por las plataformas debido a uso inapropiado. Usarlos puede limitar tu visibilidad.' },
      { question: '¿Con qué frecuencia debo actualizar mi estrategia de hashtags?', answer: 'Revisa y actualiza mensualmente. Los hashtags en tendencia cambian y emergen nuevos tags relevantes.' },
    ],
  },

  'generador-de-hashtags-para-instagram': {
    slug: 'generador-de-hashtags-para-instagram',
    name: 'Generador de Hashtags para Instagram',
    title: 'Generador de hashtags con IA para Instagram gratuito',
    description: 'Genera los hashtags perfectos de Instagram para aumentar tu alcance y engagement. Nuestra IA crea conjuntos estratégicos de hashtags adaptados a tu contenido y nicho.',
    metaDescription: 'Genera los hashtags perfectos de Instagram para aumentar tu alcance y engagement. Nuestra IA crea conjuntos estratégicos de hashtags...',
    inputLabel: 'Describe tu publicación o nicho...',
    inputPlaceholder: 'ej. Fotografía de viajes desde Bali mostrando playas y templos',
    buttonText: 'Generar hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'hashtag_count',
        label: 'Número de hashtags',
        choices: ['5 hashtags', '10 hashtags', '15 hashtags', '20 hashtags', '30 hashtags'],
        default: '10 hashtags',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'Tipo de contenido',
        choices: ['Publicación del feed', 'Reels', 'Carrusel', 'Historia'],
        default: 'Publicación del feed',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram growth strategist specializing in hashtag research and optimization for Instagram. Your role is to generate strategic hashtag sets that maximize post reach, engagement, and discoverability.
## INSTAGRAM HASHTAG FUNDAMENTALS
- Maximum 30 hashtags per post
- Optimal range: 5-10 relevant hashtags
- Can be placed in caption or first comment
## HASHTAG STRATEGY TIERS
- Tier 1: Broad Reach (1M+ posts) - Use 1-2 max
- Tier 2: Industry Standard (100K-1M) - Use 3-5
- Tier 3: Niche Specific (10K-100K) - Use 3-4
- Tier 4: Micro/Community (<10K) - Use 1-2
## CONTENT-TYPE SPECIFIC
- Reels: #Reels, #ReelsViral, trending audio tags
- Carousels: #CarouselPost, #SwipeRight, educational tags
- Feed Posts: Mix all tiers appropriately
Hashtag Count: {{hashtag_count}}
Content Type: {{content_type}}

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Marketing en redes sociales', description: 'Los especialistas en marketing usan el Generador de Hashtags de Instagram para optimizar su estrategia de hashtags para campañas.' },
      { title: 'Categorización de contenido', description: 'Los creadores usan el Generador de Hashtags para categorizar y organizar apropiadamente su contenido.' },
      { title: 'Colaboración de influencers', description: 'Influencers y marcas usan el Generador de Hashtags para crear hashtags colaborativos para asociaciones.' },
    ],
    faqs: [
      { question: '¿Cuántos hashtags debo usar en Instagram?', answer: 'Aunque Instagram permite hasta 30, 5-10 relevantes a menudo funcionan mejor. La calidad importa más que la cantidad.' },
      { question: '¿Debo poner hashtags en el caption o comentarios?', answer: 'Ambos métodos funcionan. La ubicación en el caption mantiene todo junto; en comentarios mantiene captions más limpios.' },
      { question: '¿Cuáles son los mejores hashtags para crecimiento?', answer: 'Los mejores son relevantes para tu contenido y usados por tu audiencia. Mezcla hashtags amplios con hashtags de nicho.' },
      { question: '¿Cómo encuentro hashtags de nicho?', answer: 'Investiga cuentas de competidores, explora hashtags relacionados, usa sugerencias de búsqueda de Instagram.' },
      { question: '¿Qué son los hashtags shadowbanned?', answer: 'Hashtags restringidos por Instagram debido a spam o uso inapropiado. Pueden limitar la visibilidad de tu contenido.' },
      { question: '¿Debo crear un hashtag de marca?', answer: 'Sí, ayudan a construir comunidad, rastrear contenido generado por usuarios, y crear una colección buscable.' },
      { question: '¿Con qué frecuencia debo cambiar mis hashtags?', answer: 'Evita conjuntos idénticos repetidamente. Crea 5-10 conjuntos diferentes y rotalos mensualmente.' },
      { question: '¿Los hashtags funcionan para Reels?', answer: 'Sí, usa 3-5 relevantes incluyendo tags específicos de Reels, hashtags en tendencia, y tags de nicho.' },
      { question: '¿Puedo seguir hashtags en Instagram?', answer: 'Sí, puedes seguir hashtags para ver contenido relacionado en tu feed.' },
      { question: '¿Por qué mis hashtags no funcionan?', answer: 'Posibles razones: hashtags irrelevantes o bloqueados, repetir conjuntos, solo usar tags muy populares.' },
    ],
  },

  'generador-de-nombres-de-usuario-para-redes': {
    slug: 'generador-de-nombres-de-usuario-para-redes',
    name: 'Generador de Nombres de Usuario para Redes',
    title: 'Generador de nombres de usuario para redes sociales con IA gratuito',
    description: 'Genera nombres de usuario únicos y memorables para tus perfiles de redes sociales. Nuestra IA crea ideas personalizadas que funcionan en Instagram, TikTok, Twitter y más.',
    metaDescription: 'Genera nombres de usuario únicos y memorables para tus perfiles de redes sociales. Nuestra IA crea ideas que funcionan en múltiples...',
    inputLabel: 'Descríbete a ti o tu marca...',
    inputPlaceholder: 'ej. Coach de fitness llamada Sara que se especializa en yoga y meditación',
    buttonText: 'Generar nombres de usuario',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo de nombre',
        choices: ['Profesional', 'Creativo/Juguetón', 'Mínimo', 'Enfocado en nicho', 'Basado en nombre'],
        default: 'Creativo/Juguetón',
        type: 'select',
      },
      {
        name: 'platform',
        label: 'Plataforma principal',
        choices: ['Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'Multiplataforma'],
        default: 'Multiplataforma',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert personal branding consultant specializing in creating memorable, effective usernames for social media platforms.
## USERNAME CREATION PRINCIPLES
1. Memorability: Easy to recall and spell
2. Simplicity: Short and clean (under 15 characters ideal)
3. Relevance: Reflects identity, niche, or brand
4. Availability: Unique enough to find across platforms
## USERNAME PATTERNS
- Name + Descriptor (JohnDesigns)
- Descriptive Handle (TheMinimalistHome)
- Creative Wordplay (FitWithBritt)
- Location + Niche (NYCFoodie)
Style: {{style}}
Platform: {{platform}}

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Branding y cuentas de negocios', description: 'Negocios e individuos usan el Generador para crear nombres consistentes y reconocibles en todas las plataformas.' },
      { title: 'Creadores de contenido e influencers', description: 'Creadores necesitan nombres distintivos que reflejen su nicho o marca.' },
      { title: 'Branding personal y profesional', description: 'Individuos que construyen marcas personales usan el Generador para crear nombres únicos y profesionales.' },
    ],
    faqs: [
      { question: '¿Qué hace un buen nombre de usuario?', answer: 'Los buenos nombres son cortos, fáciles de escribir y pronunciar, memorables, relevantes para tu identidad, y disponibles en plataformas.' },
      { question: '¿Mi nombre de usuario debe ser mi nombre real?', answer: 'Depende de tus objetivos. Nombres reales funcionan para networking profesional; creativos para creadores de contenido.' },
      { question: '¿Cómo hago mi nombre de usuario único?', answer: 'Agrega descriptores relevantes, usa juegos de palabras, incluye tu nicho o ubicación, prueba diferentes patrones.' },
      { question: '¿Debo usar el mismo nombre en todas las plataformas?', answer: 'Idealmente sí. Los nombres consistentes fortalecen el reconocimiento de marca.' },
      { question: '¿Qué pasa si mi nombre preferido está tomado?', answer: 'Prueba variaciones: guiones bajos, prefijos (the.real.name), sufijos (namehq), o descriptores relevantes.' },
      { question: '¿Debo usar números en mi nombre?', answer: 'Usa números estratégicamente si tienen significado, no aleatoriamente.' },
      { question: '¿Qué tan largo debe ser?', answer: 'Más corto es mejor—menos de 15 caracteres es ideal.' },
      { question: '¿Puedo cambiar mi nombre después?', answer: 'La mayoría de plataformas permiten cambios, pero puede confundir a seguidores y romper links.' },
      { question: '¿Mi nombre debe describir lo que hago?', answer: 'Incluir tu nicho ayuda a la descubribilidad, pero mantenlo general para no quedar obsoleto.' },
      { question: '¿Qué caracteres puedo usar?', answer: 'La mayoría permite letras, números, guiones bajos y puntos. Twitter no permite puntos.' },
    ],
  },

  'generador-de-nombres-para-instagram': {
    slug: 'generador-de-nombres-para-instagram',
    name: 'Generador de Nombres para Instagram',
    title: 'Generador de nombres para Instagram con IA gratuito',
    description: 'Genera nombres de usuario únicos de Instagram que destaquen. Nuestra IA crea handles memorables y acordes a tu marca.',
    metaDescription: 'Genera nombres de usuario únicos de Instagram que destaquen. Nuestra IA crea handles memorables y acordes a tu marca.',
    inputLabel: 'Descríbete a ti o tu marca...',
    inputPlaceholder: 'ej. Blogger de comida llamada Emma que comparte recetas saludables',
    buttonText: 'Generar nombres',
    maxLength: 2048,
    options: [
      {
        name: 'account_type',
        label: 'Tipo de cuenta',
        choices: ['Marca personal', 'Creador de contenido', 'Negocio/Marca', 'Influencer', 'Artista/Creativo'],
        default: 'Creador de contenido',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Estilo de nombre',
        choices: ['Profesional', 'Creativo/Divertido', 'Mínimo', 'Trendy', 'Clásico'],
        default: 'Creativo/Divertido',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram branding consultant specializing in creating unique, memorable Instagram usernames.
## INSTAGRAM USERNAME REQUIREMENTS
- Maximum 30 characters
- Allowed: letters, numbers, periods, underscores
- No consecutive periods
- Cannot start/end with period
## EFFECTIVE PATTERNS
- the + name (the.wanderer)
- name + does/creates (sarah.creates)
- name + hq/co/studio (designhq)
- im/its/hey + name (imjanesmith)
- name + niche (sarahwellness)
Account Type: {{account_type}}
Style: {{style}}

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Marca personal', description: 'Individuos que construyen marca personal en Instagram usan el Generador para encontrar nombres únicos y pegadizos.' },
      { title: 'Promoción de negocios', description: 'Negocios usan el Generador para encontrar nombres relevantes que se alineen con la identidad de la empresa.' },
      { title: 'Campañas de marketing', description: 'Especialistas en marketing usan el generador para desarrollar nombres pegadizos para cuentas de campaña.' },
    ],
    faqs: [
      { question: '¿Cuáles son los requisitos de nombre de Instagram?', answer: 'Hasta 30 caracteres, solo letras, números, puntos y guiones bajos. No puntos consecutivos.' },
      { question: '¿Cómo sé si un nombre está disponible?', answer: 'Verifica directamente en Instagram buscando o intentando crear una cuenta.' },
      { question: '¿Mi nombre debe coincidir con otras redes?', answer: 'Idealmente sí. Los nombres consistentes fortalecen tu marca.' },
      { question: '¿Es mejor usar mi nombre real o creativo?', answer: 'Depende de tus objetivos. Nombres reales para networking; creativos para creadores de contenido.' },
      { question: '¿Qué tan importante es mi nombre para el crecimiento?', answer: 'Afecta la buscabilidad y primeras impresiones. Un nombre claro y memorable ayuda.' },
      { question: '¿Puedo cambiar mi nombre de Instagram?', answer: 'Sí, pero los links antiguos se romperán y cambios frecuentes pueden confundir seguidores.' },
      { question: '¿Debo incluir mi nicho en el nombre?', answer: 'Ayuda con la buscabilidad, pero mantenlo general para no quedar obsoleto.' },
      { question: '¿Qué pasa si los buenos nombres están tomados?', answer: 'Prueba variaciones con guiones bajos, puntos, descriptores, ubicación, o prefijos.' },
      { question: '¿Son mejores los guiones bajos o puntos?', answer: 'Ambos funcionan. Los puntos pueden verse más limpios; los guiones son más universales.' },
      { question: '¿Cómo elijo entre múltiples opciones?', answer: 'Considera cuál es más fácil de deletrear, representa mejor tu marca, y es más memorable.' },
    ],
  },

  'generador-de-hashtags-para-tiktok': {
    slug: 'generador-de-hashtags-para-tiktok',
    name: 'Generador de Hashtags para TikTok',
    title: 'Generador gratuito de hashtags con IA para TikTok',
    description: 'Genera hashtags de TikTok en tendencia que aumentan tu visibilidad. Nuestra IA crea combinaciones estratégicas para ayudar a tus videos a llegar a la página Para Ti.',
    metaDescription: 'Genera hashtags de TikTok en tendencia que aumentan tu visibilidad. Nuestra IA crea combinaciones estratégicas para llegar a la página Para...',
    inputLabel: 'Describe tu video de TikTok...',
    inputPlaceholder: 'ej. Video de baile usando audio en tendencia con transición de outfit',
    buttonText: 'Generar hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: 'Tipo de contenido',
        choices: ['Entretenimiento/Baile', 'Educativo', 'Comedia/Skit', 'Estilo de vida/Vlog', 'Producto/Reseña', 'Tutorial/Cómo hacer'],
        default: 'Entretenimiento/Baile',
        type: 'select',
      },
      {
        name: 'hashtag_count',
        label: 'Número de hashtags',
        choices: ['3 hashtags', '5 hashtags', '7 hashtags'],
        default: '5 hashtags',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok growth strategist specializing in hashtag optimization for TikTok. Your role is to generate strategic hashtag sets that maximize video visibility and reach the For You Page (FYP).
## TIKTOK HASHTAG FUNDAMENTALS
- Caption limit: 4,000 characters
- Optimal hashtags: 3-5 per video
- Hashtags heavily influence FYP distribution
## TIKTOK HASHTAG CATEGORIES
- FYP/Viral: #FYP, #ForYou, #Viral (use 1 max)
- Trending: Current challenges, time-sensitive
- Niche/Community: #BookTok, #FitTok, #FoodTok
- Content Type: #Tutorial, #Storytime, #GRWM
Content Type: {{content_type}}
Hashtag Count: {{hashtag_count}}

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Optimización de estrategia de contenido', description: 'Gestores de redes y creadores usan el Generador para optimizar su estrategia de contenido en TikTok.' },
      { title: 'Campañas de marketing de influencers', description: 'Marcas y agencias usan el Generador para identificar hashtags populares para campañas.' },
      { title: 'Análisis de competencia', description: 'Los especialistas en marketing analizan estrategias de hashtags de competidores usando el generador.' },
    ],
    faqs: [
      { question: '¿Cuántos hashtags debo usar en TikTok?', answer: 'TikTok recomienda 3-5 relevantes por video. Demasiados puede parecer spam.' },
      { question: '¿Los hashtags realmente importan para el alcance?', answer: 'Sí, ayudan al algoritmo a categorizar y distribuir contenido a espectadores interesados.' },
      { question: '¿Siempre debo usar #FYP?', answer: 'Puede ayudar, pero no es magia. El algoritmo prioriza calidad de contenido y engagement.' },
      { question: '¿Qué son los hashtags de comunidad de TikTok?', answer: 'Hashtags como #BookTok, #FitTok conectan comunidades de nicho en TikTok.' },
      { question: '¿Cómo encuentro hashtags en tendencia?', answer: 'Revisa la página Descubrir de TikTok y mira lo que usan los mejores creadores en tu nicho.' },
      { question: '¿Debo usar hashtags irrelevantes en tendencia?', answer: 'No. Hashtags irrelevantes pueden perjudicar el rendimiento del video.' },
      { question: '¿Los hashtags de TikTok funcionan diferente?', answer: 'Sí. TikTok pesa fuertemente las señales de engagement y los hashtags tienen tendencia más rápido.' },
      { question: '¿Los hashtags pueden ayudarme a hacerme viral?', answer: 'Son una pieza del rompecabezas. El potencial viral depende más de la calidad del contenido.' },
      { question: '¿Debo crear un hashtag de marca?', answer: 'Funcionan bien para desafíos y campañas que fomentan contenido generado por usuarios.' },
      { question: '¿Con qué frecuencia cambian las tendencias?', answer: 'Las tendencias de TikTok cambian rápidamente—a menudo semanalmente o diariamente.' },
    ],
  },

  'generador-de-nombres-para-tiktok': {
    slug: 'generador-de-nombres-para-tiktok',
    name: 'Generador de Nombres para TikTok',
    title: 'Generador de nombres de usuario para TikTok con IA gratuito',
    description: 'Genera nombres de usuario únicos de TikTok que coincidan con tu vibra. Nuestra IA crea handles memorables y en tendencia.',
    metaDescription: 'Genera nombres de usuario únicos de TikTok que coincidan con tu vibra. Nuestra IA crea handles memorables y en tendencia.',
    inputLabel: 'Descríbete a ti o tu contenido...',
    inputPlaceholder: 'ej. Creador de comedia que hace skits sobre la vida de oficina',
    buttonText: 'Generar nombres de usuario',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo de nombre',
        choices: ['Trendy/Divertido', 'Profesional', 'Enfocado en nicho', 'Basado en personalidad', 'Basado en nombre'],
        default: 'Trendy/Divertido',
        type: 'select',
      },
      {
        name: 'content_niche',
        label: 'Nicho de contenido',
        choices: ['Entretenimiento/Comedia', 'Fitness/Salud', 'Belleza/Moda', 'Comida/Cocina', 'Educación/Consejos', 'Estilo de vida/Vlog', 'Otro'],
        default: 'Entretenimiento/Comedia',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok personal branding consultant specializing in creating memorable, discoverable usernames for TikTok.
## TIKTOK USERNAME REQUIREMENTS
- Maximum 24 characters
- Allowed: letters, numbers, underscores, periods
- Case insensitive
## TIKTOK USERNAME STYLES
- Name-Based: emmacooks, mikefitness
- Niche-Focused: dailyrecipes, fittips
- Personality-Driven: chaoticcooking
- Playful/Trendy: chefmode, fitcheck
Style: {{style}}
Content Niche: {{content_niche}}

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Identidad de nuevo creador', description: 'Nuevos creadores de TikTok usan el Generador para establecer su identidad en la plataforma.' },
      { title: 'Branding de nicho', description: 'Creadores de nicho usan el generador para encontrar nombres que comuniquen su enfoque de contenido.' },
      { title: 'Lanzamiento de TikTok para marcas', description: 'Negocios usan el generador para encontrar nombres que encajen con la cultura de TikTok.' },
    ],
    faqs: [
      { question: '¿Cuáles son los requisitos de nombre de TikTok?', answer: 'Hasta 24 caracteres, letras, números, guiones bajos y puntos. Únicos y sin distinción de mayúsculas.' },
      { question: '¿Puedo cambiar mi nombre de TikTok?', answer: 'Sí, pero puede haber un período de espera antes de poder cambiarlo de nuevo.' },
      { question: '¿Mi nombre debe ser divertido o profesional?', answer: 'Depende de tu contenido. TikTok se inclina casual, así que incluso profesionales usan nombres accesibles.' },
      { question: '¿Cómo hago mi nombre memorable?', answer: 'Mantenlo corto, fácil de pronunciar, y relacionado con tu contenido. Usa aliteración o juegos de palabras.' },
      { question: '¿Debo usar mi nombre real?', answer: 'Puede ayudar con marca personal, pero handles creativos a menudo funcionan mejor para cuentas de contenido.' },
      { question: '¿Qué pasa si mi nombre preferido está tomado?', answer: 'Agrega tu nicho, guiones bajos, "the" al principio, o un descriptor significativo.' },
      { question: '¿Mi nombre de TikTok debe coincidir con Instagram?', answer: 'Nombres consistentes ayudan a seguidores a encontrarte. Usa variaciones cercanas si el preferido no está disponible.' },
      { question: '¿Los nombres afectan la descubribilidad?', answer: 'Nombres con palabras clave relevantes pueden ayudar cuando usuarios buscan tipos de contenido.' },
      { question: '¿Qué tan importante es mi nombre para el crecimiento?', answer: 'Es tu primera impresión, pero la calidad del contenido importa más para el crecimiento.' },
      { question: '¿Debo incluir números?', answer: 'Evita números aleatorios. Los números significativos pueden funcionar si agregan a tu marca.' },
    ],
  },

  // ==================== BATCH 4 PART 2: Tools 37-40 ====================

  'generador-de-descripciones-para-canales-de-youtube': {
    slug: 'generador-de-descripciones-para-canales-de-youtube',
    name: 'Generador de Descripciones para Canales de YouTube',
    title: 'Generador de descripciones con IA para canales de YouTube gratuito',
    description: 'Crea una descripción de canal de YouTube atractiva que atraiga suscriptores. Nuestra IA genera descripciones optimizadas para SEO que muestran tu contenido y hacen crecer tu audiencia.',
    metaDescription: 'Crea una descripción de canal de YouTube atractiva que atraiga suscriptores. Nuestra IA genera descripciones optimizadas para SEO que...',
    inputLabel: 'Describe tu canal de YouTube...',
    inputPlaceholder: 'ej. Canal de reseñas de tecnología enfocado en smartphones y gadgets económicos',
    buttonText: 'Generar Descripción',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tono del canal',
        choices: ['Profesional', 'Amigable', 'Entusiasta', 'Informativo', 'Casual'],
        default: 'Amigable',
        type: 'select',
      },
      {
        name: 'channel_type',
        label: 'Tipo de canal',
        choices: ['Educativo/Tutorial', 'Entretenimiento', 'Vlog/Estilo de vida', 'Gaming', 'Negocio/Marca', 'Reseñas/Comentarios'],
        default: 'Educativo/Tutorial',
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

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Optimización SEO del canal', description: 'YouTubers usan el Generador de Descripciones para crear descripciones ricas en palabras clave que mejoran la visibilidad del canal en YouTube y resultados de búsqueda de Google.' },
      { title: 'Mejora de conversión de suscriptores', description: 'Creadores que buscan convertir visitantes en suscriptores usan el generador para crear descripciones atractivas que expliquen claramente el valor del canal.' },
      { title: 'Configuración eficiente del canal', description: 'Nuevos YouTubers y negocios que lanzan canales usan el generador para crear descripciones profesionales rápidamente.' },
    ],
    faqs: [
      { question: '¿Qué longitud debe tener una descripción de canal de YouTube?', answer: 'YouTube permite hasta 1,000 caracteres. Usa lo suficiente para transmitir tu propuesta de valor claramente. Las descripciones más efectivas tienen 500-800 caracteres.' },
      { question: '¿Qué debo incluir en mi descripción de canal?', answer: 'Incluye: de qué trata tu canal, qué aprenderán los espectadores, tu calendario de subidas, quién eres y tus credenciales, un llamado a suscribirse e información de contacto.' },
      { question: '¿Cómo afecta la descripción del canal al SEO?', answer: 'Las descripciones ayudan a YouTube a entender tu contenido para recomendaciones y búsqueda. Incluye palabras clave relevantes naturalmente para mejorar la descubribilidad.' },
      { question: '¿Cómo optimizo mi descripción para búsqueda?', answer: 'Incluye palabras clave que tu audiencia objetivo busca, coloca información importante al principio, usa lenguaje natural y actualiza regularmente.' },
      { question: '¿Debo incluir mi calendario de subidas?', answer: 'Sí, si tienes un calendario consistente. Declarar "Nuevos videos cada martes y viernes" establece expectativas y puede incentivar suscripciones.' },
      { question: '¿Qué llamado a la acción debo incluir?', answer: 'Invita a los espectadores a suscribirse y activar notificaciones. Sé específico sobre lo que obtendrán.' },
      { question: '¿Debo incluir mi correo en la descripción?', answer: 'Sí, si estás abierto a consultas de negocios, colaboraciones o patrocinios. Un correo profesional hace tu canal más accesible.' },
      { question: '¿Con qué frecuencia debo actualizar mi descripción?', answer: 'Actualiza cuando tu enfoque de contenido, calendario o enfoque del canal cambie significativamente. Revisa trimestralmente.' },
      { question: '¿Mi descripción puede ayudarme a conseguir patrocinadores?', answer: 'Sí. Una descripción profesional que declare claramente tu nicho, audiencia y engagement hace tu canal más atractivo para patrocinadores.' },
      { question: '¿Mi descripción debe coincidir con el tono de mis videos?', answer: 'Sí, tu descripción debe reflejar la personalidad y estilo de contenido de tu canal. Un canal de comedia debe sonar divertido; uno de educación debe sonar profesional.' },
    ],
  },

  'generador-de-nombres-para-youtube': {
    slug: 'generador-de-nombres-para-youtube',
    name: 'Generador de Nombres para YouTube',
    title: 'Generador gratuito de nombres para YouTube con IA',
    description: 'Genera nombres creativos para canales de YouTube que destaquen. Nuestra IA crea nombres memorables y con potencial de marca que atraen suscriptores y reflejan tu nicho de contenido.',
    metaDescription: 'Genera nombres creativos para canales de YouTube que destaquen. Nuestra IA crea nombres memorables y con potencial de marca que atraen...',
    inputLabel: 'Describe el contenido de tu canal...',
    inputPlaceholder: 'ej. Canal de gaming enfocado en juegos indie y reseñas retro',
    buttonText: 'Generar Nombres',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo del nombre',
        choices: ['Nombre del Creador', 'Tema/Nicho', 'Creativo/Marca', 'Personalidad + Nicho', 'Profesional'],
        default: 'Creativo/Marca',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'Tipo de contenido',
        choices: ['Gaming', 'Educación/Tutorial', 'Entretenimiento', 'Vlog/Estilo de vida', 'Tech/Reseñas', 'Belleza/Moda', 'Cocina/Comida', 'Fitness', 'Negocios', 'Otro'],
        default: 'Entretenimiento',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube branding consultant specializing in creating memorable, searchable channel names. Your role is to generate channel name ideas that reflect content focus, are easy to remember, and help build a recognizable YouTube brand.
## YOUTUBE CHANNEL NAME CONSIDERATIONS
**Display Name vs Handle:**
- Display Name: More flexible, can include spaces, up to 100 characters
- Handle: @username format, similar to other platforms, must be unique
- Both contribute to brand identity
## EFFECTIVE CHANNEL NAME PATTERNS
### Pattern 1: Creator Name
- Full name (John Smith)
- First name only (Peter)
- Stylized name (JohnnyVids)
- Best for personal brands
### Pattern 2: Topic/Niche Name
- Describes content clearly
- Examples: TechReviews, DailyGardening, DIYProjects
- Best for topic-focused channels
### Pattern 3: Personality + Niche
- Combines who with what
- Examples: CrazyRussianHacker, AngryCop, LazyGameReviews
- Memorable and descriptive
### Pattern 4: Creative/Brand Name
- Unique coined names
- Examples: Vsauce, Veritasium, Linus Tech Tips
- Requires more branding effort
### Pattern 5: [Name] + [Media Indicator]
- Shows it's a media channel
- Examples: Philip DeFranco, CNN, Vice News
- Professional appearance
### Pattern 6: Question/Action Format
- Engaging, curiosity-driven
- Examples: How It's Made, What If
- Strong for educational content
## CHANNEL NAME QUALITIES
1. **Memorable**: Easy to recall after one exposure
2. **Speakable**: Easy to tell others ("check out [name] on YouTube")
3. **Searchable**: Contains discoverable keywords or is unique enough to find
4. **Scalable**: Allows for content evolution
5. **Brandable**: Works on merchandise, other platforms
6. **Available**: Domain and social handles available
## NICHE-SPECIFIC APPROACHES
**Gaming**: [Name]Plays, [Game]Master, [Adjective]Gamer
**Beauty**: Glam[Name], [Name]Makeup, BeautyBy[Name]
**Tech**: [Name]Tech, TechWith[Name], [Topic]Explained
**Cooking**: [Name]Cooks, [Style]Kitchen, Chef[Name]
**Fitness**: [Name]Fit, [Type]Workouts, TrainWith[Name]
**Education**: [Name]Explains, Learn[Topic], [Subject]School
**Vlog**: [Name]Vlogs, LifeOf[Name], [Name]Daily
## AVAILABILITY CONSIDERATIONS
Check availability on:
- YouTube (as channel and @handle)
- Domain names (.com, .co)
- Major social platforms
- Trademark databases (for serious ventures)
## QUALITY FILTERS
Avoid names that:
- Are too similar to major channels
- Are difficult to spell
- Have unintended meanings
- Are too generic to search for
- Limit future content options
Style: {{style}}
Content Type: {{content_type}}
## OUTPUT FORMAT
Generate names with:
- Channel name option
- Pattern category
- Brief rationale
- Handle variation suggestion

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Creadores de contenido y YouTubers', description: 'Aspirantes a YouTubers usan el Generador de Nombres para encontrar nombres de canal únicos y memorables adaptados a su nicho de contenido.' },
      { title: 'Agencias de marketing digital', description: 'Agencias de marketing que trabajan con clientes lanzando canales de YouTube usan el generador para generar ideas de nombres que resuenen con audiencias objetivo.' },
      { title: 'Expansión de marca empresarial', description: 'Negocios que expanden su presencia online a YouTube usan el generador para explorar opciones de nombres para canales oficiales.' },
    ],
    faqs: [
      { question: '¿Qué hace un buen nombre de canal de YouTube?', answer: 'Los buenos nombres son memorables, fáciles de escribir y pronunciar, relevantes al contenido, lo suficientemente únicos para buscar y flexibles para evolución del contenido.' },
      { question: '¿Mi nombre de canal debe describir mi contenido?', answer: 'Nombres descriptivos comunican inmediatamente el enfoque pero pueden limitar flexibilidad. Nombres creativos son más flexibles pero requieren más esfuerzo de marca.' },
      { question: '¿Cómo verifico si un nombre de canal está disponible?', answer: 'Busca YouTube para el nombre exacto, verifica disponibilidad del @handle de YouTube, busca registradores de dominios y verifica plataformas sociales principales.' },
      { question: '¿Puedo cambiar mi nombre de canal de YouTube después?', answer: 'Sí, puedes cambiar tu nombre de visualización y handle del canal. Sin embargo, cambiar nombres puede confundir a suscriptores existentes.' },
      { question: '¿Debo usar mi nombre real para mi canal?', answer: 'Usar tu nombre real funciona bien para marcas personales y posicionamiento experto. Nombres creativos funcionan mejor para contenido de entretenimiento.' },
      { question: '¿Qué tan importante es el nombre del canal para el crecimiento?', answer: 'Tu nombre de canal afecta primeras impresiones y buscabilidad, pero la calidad del contenido importa más para el crecimiento.' },
      { question: '¿Mi nombre de canal debe coincidir con mis otras redes?', answer: 'La consistencia entre plataformas ayuda a seguidores a encontrarte en todas partes y fortalece el reconocimiento de marca.' },
      { question: '¿Qué hago si mi nombre preferido está tomado?', answer: 'Prueba variaciones: agrega tu nicho, incluye un descriptor, o crea una variación única. Verifica si el canal tomado está inactivo.' },
      { question: '¿Los nombres de canal afectan el SEO de YouTube?', answer: 'Los nombres de canal pueden afectar la buscabilidad. Nombres con palabras clave relevantes pueden ayudar cuando usuarios buscan ese tema.' },
      { question: '¿Debo incluir "YouTube" en mi nombre de canal?', answer: 'Generalmente no. Es redundante ya que estás en YouTube, usa caracteres valiosos, y no funciona bien para branding multiplataforma.' },
    ],
  },

  'generador-de-descripciones-para-videos-de-youtube': {
    slug: 'generador-de-descripciones-para-videos-de-youtube',
    name: 'Generador de Descripciones para Videos de YouTube',
    title: 'Generador de descripciones con IA para YouTube gratuito',
    description: 'Genera descripciones de YouTube optimizadas para SEO que aumentan las vistas. Nuestra IA crea descripciones atractivas con ganchos, marcas de tiempo y palabras clave que ayudan a posicionar mejor los videos.',
    metaDescription: 'Genera descripciones de YouTube optimizadas para SEO que aumentan las vistas. Nuestra IA crea descripciones atractivas con ganchos, marcas...',
    inputLabel: 'Describe el contenido de tu video...',
    inputPlaceholder: 'ej. Tutorial sobre cómo editar fotos en Lightroom para principiantes',
    buttonText: 'Generar Descripción',
    maxLength: 2048,
    options: [
      {
        name: 'video_type',
        label: 'Tipo de video',
        choices: ['Tutorial/Educativo', 'Entretenimiento/Vlog', 'Reseña/Producto', 'Gaming', 'Noticias/Comentario', 'Música/Performance'],
        default: 'Tutorial/Educativo',
        type: 'select',
      },
      {
        name: 'include_timestamps',
        label: 'Incluir plantilla de marcas de tiempo',
        choices: ['Sí', 'No'],
        default: 'Sí',
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

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Descripciones de video optimizadas para SEO', description: 'YouTubers usan el Generador de Descripciones para crear descripciones que mejoran posicionamiento y visibilidad en búsquedas.' },
      { title: 'Creación eficiente de descripciones en lote', description: 'Creadores que manejan múltiples videos usan el generador para agilizar la creación de descripciones, ahorrando tiempo mientras mantienen consistencia.' },
      { title: 'Mayor engagement de espectadores', description: 'Creadores que buscan mejorar métricas de engagement usan el generador para crear descripciones con llamados a la acción claros y marcas de tiempo útiles.' },
    ],
    faqs: [
      { question: '¿Qué longitud debe tener una descripción de video de YouTube?', answer: 'YouTube permite hasta 5,000 caracteres. Apunta a al menos 200-300 palabras para beneficios de SEO. Los primeros 100-200 caracteres son más importantes.' },
      { question: '¿Qué debo poner en la primera línea de mi descripción?', answer: 'Incluye tu palabra clave principal y un gancho atractivo que diga a los espectadores qué obtendrán del video. Este texto aparece en resultados de búsqueda.' },
      { question: '¿Cómo funcionan las marcas de tiempo en las descripciones?', answer: 'Las marcas de tiempo crean capítulos clickeables en tu video. Formato como "0:00 Introducción" con tiempo y etiqueta. YouTube crea automáticamente marcadores de capítulo.' },
      { question: '¿Debo incluir hashtags en las descripciones de video?', answer: 'Sí, 3-5 hashtags relevantes al final de tu descripción. Los primeros tres hashtags aparecen sobre el título del video.' },
      { question: '¿Cómo afectan las descripciones de video al SEO?', answer: 'Las descripciones ayudan a YouTube a entender el contenido de tu video para búsqueda y recomendaciones. Incluir palabras clave relevantes mejora el potencial de posicionamiento.' },
      { question: '¿Todos los videos deben tener el mismo formato de descripción?', answer: 'Tener una estructura consistente es bueno, pero adapta la descripción principal al contenido específico de cada video. Evita copiar descripciones idénticas.' },
      { question: '¿Qué enlaces debo incluir en las descripciones?', answer: 'Incluye: recursos mencionados en el video, enlaces de productos relevantes, tus perfiles de redes sociales, enlace de suscripción y enlaces a videos relacionados.' },
      { question: '¿Cómo divulgo enlaces de afiliados correctamente?', answer: 'Incluye divulgación clara como "Algunos enlaces son de afiliados, lo que significa que gano una comisión si compras sin costo adicional para ti."' },
      { question: '¿Necesito escribir descripciones diferentes para videos similares?', answer: 'Sí, cada video debe tener una descripción única. Descripciones duplicadas pueden perjudicar el SEO.' },
      { question: '¿Con qué frecuencia debo actualizar las descripciones de video?', answer: 'Actualiza descripciones cuando los enlaces cambien, el contenido se desactualice, o quieras agregar nuevos CTAs. Para contenido evergreen, actualizaciones ocasionales pueden refrescar el rendimiento SEO.' },
    ],
  },

  'parafraseador-de-textos': {
    slug: 'parafraseador-de-textos',
    name: 'Parafraseador de Textos',
    title: 'Parafraseador de textos con IA gratuito',
    description: 'Reformula y parafrasea texto instantáneamente con nuestra herramienta de IA. Transforma oraciones y párrafos para mejorar claridad, cambiar tono o crear contenido único.',
    metaDescription: 'Reformula y parafrasea texto instantáneamente con nuestra herramienta de IA. Transforma oraciones y párrafos para mejorar claridad, cambiar...',
    inputLabel: 'Ingresa el texto a reformular...',
    inputPlaceholder: 'Pega tu texto aquí para reformularlo...',
    buttonText: 'Reformular Texto',
    maxLength: 4096,
    options: [
      {
        name: 'tone',
        label: 'Tono objetivo',
        choices: ['Formal/Profesional', 'Casual/Conversacional', 'Académico/Erudito', 'Creativo/Atractivo', 'Simplificado/Sencillo'],
        default: 'Casual/Conversacional',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'Intensidad de reformulación',
        choices: ['Ligera (Cambios sutiles)', 'Media (Equilibrada)', 'Fuerte (Transformación significativa)'],
        default: 'Media (Equilibrada)',
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

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Creación de contenido y SEO', description: 'Creadores de contenido y profesionales de SEO usan el Parafraseador para crear versiones únicas de contenido existente, evitando problemas de contenido duplicado.' },
      { title: 'Escritura académica e investigación', description: 'Estudiantes, investigadores y académicos usan el Parafraseador para parafrasear contenido de diversas fuentes mientras realizan investigación o escriben trabajos.' },
      { title: 'Contenido para redes sociales y marketing', description: 'Marketers y community managers usan el Parafraseador para crear variaciones únicas de descripciones de productos, contenido promocional o publicaciones de redes sociales.' },
    ],
    faqs: [
      { question: '¿Qué es una herramienta de parafraseo?', answer: 'Una herramienta de parafraseo ayuda a reformular texto reemplazando palabras con sinónimos, reestructurando oraciones o cambiando el estilo de escritura mientras preserva el significado original.' },
      { question: '¿Reformular es lo mismo que parafrasear?', answer: 'Son muy similares. Ambos involucran expresar las mismas ideas con diferentes palabras. Reformular a menudo se refiere a cambios de menor escala.' },
      { question: '¿Cómo es esto diferente de solo usar sinónimos?', answer: 'El parafraseo de calidad va más allá del simple reemplazo de sinónimos. Reestructura oraciones, cambia construcciones gramaticales, varía la longitud y mejora el flujo.' },
      { question: '¿Puedo usar contenido reformulado sin preocupaciones de plagio?', answer: 'Reformular ayuda a crear fraseado único, pero aún debes citar fuentes originales para ideas que no son tuyas. La herramienta ayuda con la expresión, pero la atribución adecuada sigue siendo importante.' },
      { question: '¿Qué tipos de texto puedo reformular?', answer: 'Puedes reformular cualquier texto: artículos, publicaciones de blog, ensayos, descripciones de productos, correos electrónicos, contenido de redes sociales, trabajos académicos y más.' },
      { question: '¿Cómo obtengo mejores resultados de parafraseo?', answer: 'Proporciona contexto claro sobre tu objetivo, especifica el tono deseado e indica si quieres edición ligera o transformación significativa.' },
      { question: '¿Reformular cambiará el significado de mi texto?', answer: 'El parafraseo de calidad preserva el significado central mientras cambia la expresión. Sin embargo, siempre revisa el texto reformulado para asegurar que transmita tu mensaje.' },
      { question: '¿Esta herramienta puede hacer mi escritura más formal o casual?', answer: 'Sí, el ajuste de tono es una característica clave. Puedes transformar escritura casual en lenguaje profesional, o hacer texto formal más conversacional.' },
      { question: '¿Cómo es esto diferente de la corrección gramatical?', answer: 'Los correctores gramaticales arreglan errores en texto existente. Las herramientas de parafraseo transforman cómo se expresan las ideas, creando nuevas versiones del contenido.' },
      { question: '¿Siempre debo aceptar la versión reformulada?', answer: 'No, siempre revisa y edita. El parafraseo con IA es un punto de partida que puede necesitar refinamiento. Usa tu juicio para asegurar que la versión final refleje tu voz.' },
    ],
  },

  // ==================== BATCH 5: Remaining Tools ====================

  'corrector-gramatical': {
    slug: 'corrector-gramatical',
    name: 'Corrector Gramatical',
    title: 'Corrector ortográfico con IA gratuito',
    description: 'Revisa tu gramática, ortografía y puntuación gratis. Obtén correcciones instantáneas con explicaciones claras.',
    metaDescription: 'Revisa tu gramática, ortografía y puntuación gratis. Obtén correcciones instantáneas con explicaciones claras para mejorar tus habilidades...',
    inputLabel: 'Texto a revisar...',
    inputPlaceholder: 'Pega tu texto aquí para revisar errores de gramática, ortografía y puntuación...',
    buttonText: 'Revisar Gramática',
    maxLength: 4096,
    options: [
      { name: 'mode', label: 'Modo de revisión', choices: ['Corrección rápida', 'Estándar', 'Aprendizaje detallado', 'Académico', 'Casual/Creativo'], default: 'Estándar', type: 'select' },
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
- Spelling and commonly confused words (their/there/they're)
- Punctuation errors (commas, apostrophes, semicolons)
### Style Suggestions (Optional):
- Wordy phrases
- Passive voice
- Very long sentences
- Repeated word starts
## ANALYSIS MODES
### IF MODE = "Quick Fix" - Critical errors only, minimal explanations
### IF MODE = "Standard" - All critical errors + key style suggestions
### IF MODE = "Detailed Learning" - All errors with comprehensive explanations and tips
### IF MODE = "Academic" - Strict grammar standards, formal conventions
### IF MODE = "Casual/Creative" - Flexible on style, respect authorial voice
## OUTPUT FORMAT
Mode: {{mode}}
Provide:
### Corrected Text
[Full text with corrections]
### Error Summary
- Critical errors: [Number]
- Style suggestions: [Number]
### Detailed Error List
[For each: original, corrected, explanation]
### Writing Tips
[1-2 personalized tips based on patterns observed]

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Pulido de comunicación profesional', description: 'Profesionales de negocios usan el Corrector para asegurar que correos, reportes y presentaciones estén libres de errores antes de enviar.' },
      { title: 'Revisión de escritura académica', description: 'Estudiantes e investigadores pueden revisar ensayos, trabajos y borradores de tesis para errores de gramática y puntuación antes de entregar.' },
      { title: 'Control de calidad de contenido', description: 'Blogueros, marketers de contenido y escritores usan el Corrector como paso final de calidad antes de publicar.' },
    ],
    faqs: [
      { question: '¿Qué tipos de errores encuentra el corrector gramatical?', answer: 'La herramienta identifica errores gramaticales (concordancia sujeto-verbo, problemas de tiempo verbal, fragmentos), errores de ortografía, problemas de puntuación y palabras comúnmente confundidas.' },
      { question: '¿El corrector gramatical es gratuito?', answer: 'Sí, la herramienta es completamente gratuita sin límites. Revisa tantos textos como necesites sin registrarte ni pagar.' },
      { question: '¿Cómo es diferente del corrector ortográfico?', answer: 'El corrector ortográfico estándar solo detecta palabras mal escritas. Nuestro corrector gramatical analiza estructura de oraciones, puntuación, uso de palabras y estilo.' },
      { question: '¿La herramienta cambiará mi estilo de escritura?', answer: 'La herramienta se enfoca en corregir errores reales mientras preserva tu voz. Las sugerencias de estilo están claramente marcadas como opcionales.' },
      { question: '¿Puede revisar escritura académica o formal?', answer: 'Sí, puedes seleccionar un modo académico que aplica estándares gramaticales más estrictos apropiados para escritura académica.' },
      { question: '¿Explica por qué algo está mal?', answer: 'Sí, cada error incluye una explicación de la regla violada y guía sobre cómo evitar errores similares.' },
      { question: '¿Qué tan largo puede ser mi texto?', answer: 'La herramienta maneja textos de varias longitudes. Para documentos muy largos, podrías obtener mejores resultados revisando sección por sección.' },
      { question: '¿Funciona para idiomas distintos al español?', answer: 'La herramienta está optimizada para gramática, ortografía y puntuación en español.' },
      { question: '¿Detectará todos mis errores?', answer: 'Aunque la herramienta detecta la gran mayoría de errores comunes, ningún corrector automatizado es perfecto. Recomendamos usarlo como parte de tu proceso de edición.' },
      { question: '¿Puedo usarlo para escritura creativa?', answer: 'Sí, selecciona el modo casual/creativo para más flexibilidad. La herramienta respetará fragmentos intencionales y elecciones estilísticas.' },
    ],
  },

  'detector-de-plagio': {
    slug: 'detector-de-plagio',
    name: 'Detector de Plagio',
    title: 'Detector de plagio con IA gratuito',
    description: 'Analiza tu contenido para originalidad e identifica pasajes que pueden necesitar citas o reescritura.',
    metaDescription: 'Analiza tu contenido para originalidad e identifica pasajes que pueden necesitar citas o reescritura. Obtén retroalimentación accionable...',
    inputLabel: 'Texto a revisar...',
    inputPlaceholder: 'Pega tu texto aquí para revisar originalidad...',
    buttonText: 'Verificar Originalidad',
    maxLength: 4096,
    options: [
      { name: 'checkType', label: 'Tipo de verificación', choices: ['Escaneo rápido', 'Análisis estándar', 'Reporte detallado'], default: 'Análisis estándar', type: 'select' },
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
### IF TYPE = "Quick scan" - Overall assessment + key concerns
### IF TYPE = "Standard analysis" - Detailed breakdown + flagged passages + recommendations
### IF TYPE = "Detailed report" - Comprehensive analysis + passage-level review + improvement strategies
## OUTPUT FORMAT
Check Type: {{checkType}}
Provide:
### Originality Assessment
- Overall Score: [Likely Original / Some Concerns / Significant Concerns]
- Confidence Level: [High / Medium / Low]
### Flagged Passages
[For each: text, concern, recommendation]
### Recommendations
[Citations needed, rewrites suggested, general improvements]
### Important Disclaimer
This analysis is based on pattern recognition and does not compare against a comprehensive content database.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Verificación académica previa a entrega', description: 'Estudiantes pueden revisar trabajos a través del detector de plagio antes de entregar para identificar pasajes que podrían ser marcados como muy similares a fuentes.' },
      { title: 'Control de calidad de contenido', description: 'Editores y publicadores pueden filtrar contenido enviado para indicadores de originalidad antes de publicación.' },
      { title: 'Auto-auditoría para escritores', description: 'Escritores pueden revisar su propio trabajo para asegurar que no hayan usado inadvertidamente fraseado muy similar a las fuentes que investigaron.' },
    ],
    faqs: [
      { question: '¿Cómo funciona el detector de plagio?', answer: 'La herramienta analiza tu texto para indicadores de originalidad incluyendo consistencia de escritura, patrones de estilo, y pasajes que parecen plantillas o requieren citación.' },
      { question: '¿Este detector de plagio es gratuito?', answer: 'Sí, la herramienta es completamente gratuita sin necesidad de registro.' },
      { question: '¿Es tan preciso como Turnitin o Copyscape?', answer: 'No. Esos servicios comparan tu texto contra bases de datos masivas de contenido publicado. Esta herramienta usa análisis de patrones para identificar alertas.' },
      { question: '¿Qué detecta realmente el detector de plagio?', answer: 'La herramienta identifica: inconsistencias de estilo que sugieren copiar-pegar, hechos/estadísticas que necesitan citas, pasajes que parecen plantillas.' },
      { question: '¿Puede decirme si copié de una fuente específica?', answer: 'No, la herramienta no puede identificar fuentes específicas. Solo puede marcar pasajes que parecen potencialmente no originales basándose en patrones de escritura.' },
      { question: '¿Detectará contenido generado por IA?', answer: 'Esta herramienta se enfoca en patrones de plagio, no detección de IA. Para detección de contenido IA, usa nuestra herramienta dedicada de Detector de IA.' },
      { question: '¿Qué debo hacer si se marcan pasajes?', answer: 'Revisa los pasajes marcados para determinar si necesitan: cita directa, parafraseo con atribución, o reescritura completa con tus propias palabras.' },
      { question: '¿Puedo usar esto para trabajos académicos?', answer: 'Como verificación preliminar, sí. Pero siempre usa el detector de plagio oficial de tu institución antes de la entrega final.' },
      { question: '¿Qué tan largo puede ser mi texto?', answer: 'La herramienta maneja longitudes de documento estándar. Para documentos muy largos, podrías obtener mejores resultados verificando capítulo por capítulo.' },
      { question: '¿Cuál es la diferencia entre plagio y citas faltantes?', answer: 'El plagio es presentar el trabajo de otros como propio. Las citas faltantes pueden ser accidentales. Ambos necesitan corregirse, pero la intención difiere.' },
    ],
  },

  'generador-de-ideas-para-blog': {
    slug: 'generador-de-ideas-para-blog',
    name: 'Generador de Ideas para Blog',
    title: 'Generador gratuito de ideas para blog con IA',
    description: '¿Luchas con ideas de contenido? Genera ideas de publicaciones de blog únicas y optimizadas para SEO en segundos. Nuestra IA entrega temas listos para escribir.',
    metaDescription: '¿Luchas con ideas de contenido? Genera ideas de publicaciones de blog únicas y optimizadas para SEO en segundos. Nuestra IA entrega temas...',
    inputLabel: 'Tema o nicho...',
    inputPlaceholder: 'ej. Email marketing B2B SaaS para fundadores de startups',
    buttonText: 'Generar Ideas',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_ideas',
        label: 'Número de ideas',
        choices: ['3 ideas', '5 ideas', '10 ideas'],
        default: '5 ideas',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono',
        choices: ['Formal', 'Casual', 'Persuasivo'],
        default: 'Formal',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist and SEO specialist who generates compelling, actionable blog post ideas that drive organic traffic, engagement, and conversions. Your ideas are not generic suggestions—they are strategic content concepts backed by proven frameworks for search visibility and reader value.
## CORE PRINCIPLES
1. **Search Intent Alignment**: Every idea must address a clear search intent (informational, navigational, commercial, or transactional)
2. **Specificity Over Generality**: "How to Train a Puppy" is weak; "How to Potty Train a Stubborn Beagle Puppy in 7 Days" is strong
3. **Value Proposition Clarity**: Each idea must have an obvious benefit to the reader
4. **Competitive Differentiation**: Ideas should have a unique angle that sets them apart from existing content
5. **Actionability**: Ideas should be immediately usable—no additional brainstorming required
## IDEA GENERATION FRAMEWORK
### Step 1: Analyze AI the Input
- Identify the core topic/niche
- Determine the likely target audience
- Assess commercial intent vs. informational intent
- Note any specific constraints (industry, audience level, etc.)
### Step 2: Generate Ideas Across Multiple Content Types
For each topic, generate ideas spanning these categories:
**Educational/How-To Content:**
- Step-by-step tutorials
- Beginner's guides
- Advanced techniques
- Common mistake correction posts
**Data-Driven Content:**
- Industry statistics roundups
- Original research concepts
- Trend analysis pieces
- Benchmark/comparison posts
**Problem-Solution Content:**
- Troubleshooting guides
- "Why X Isn't Working" posts
- Quick fix tutorials
- Prevention guides
**List-Based Content:**
- Tool/resource roundups
- Best practices lists
- Checklist posts
- Tip compilations
**Comparison/Evaluation Content:**
- Product/service comparisons
- Alternative roundups
- Review frameworks
- Decision guides
**Thought Leadership:**
- Industry prediction posts
- Contrarian takes
- Framework introductions
- Case study analyses
Number of Ideas: {{number_of_ideas}}
Tone: {{tone}}
## OUTPUT FORMAT
### Blog Post Ideas for: [Topic]
**Idea 1: [Compelling Title]**
- **Angle:** [Unique approach explanation]
- **Target Keyword Concept:** [Primary search term]
- **Content Type:** [Format]
- **Ideal Audience:** [Specific reader profile]
[Repeat for each idea]

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Planificación de calendario de contenido', description: 'Equipos de marketing y gestores de contenido usan el Generador para poblar calendarios de contenido trimestrales con temas estratégicamente diversos.' },
      { title: 'Superar bloqueos creativos', description: 'Blogueros y creadores de contenido que llevan meses produciendo contenido en el mismo nicho usan la herramienta para superar la fatiga creativa.' },
      { title: 'Análisis de gaps de contenido competitivo', description: 'Profesionales de SEO usan la herramienta para identificar temas desatendidos dentro de un nicho.' },
    ],
    faqs: [
      { question: '¿Qué es un generador de ideas para blog?', answer: 'Un generador de ideas para blog es una herramienta impulsada por IA que crea sugerencias de temas basadas en tu nicho, industria o tema. Proporciona conceptos de contenido completos con ángulos únicos.' },
      { question: '¿Cómo funciona este generador de ideas?', answer: 'El generador usa modelos de lenguaje avanzados entrenados en patrones de contenido exitosos, principios de SEO y psicología de audiencia.' },
      { question: '¿Las ideas generadas son amigables para SEO?', answer: 'Sí, las ideas se generan con la intención de búsqueda en su núcleo. Cada idea apunta a un tipo específico de consulta de búsqueda.' },
      { question: '¿Cuántas ideas de blog puedo generar?', answer: 'Puedes generar múltiples lotes sin límites. Cada generación produce un conjunto de ideas distintas y no superpuestas.' },
      { question: '¿Puedo usar estas ideas para propósitos comerciales?', answer: 'Absolutamente. Las ideas generadas son tuyas para usar como quieras—para tu propio blog, trabajo con clientes o agencias de contenido.' },
      { question: '¿Qué tan específico debe ser mi tema de entrada?', answer: 'Entradas más específicas producen ideas más dirigidas y accionables. Incluye información sobre tu audiencia objetivo, restricciones de la industria o metas de contenido.' },
      { question: '¿Qué hace una buena idea de publicación de blog?', answer: 'Una idea fuerte tiene especificidad, valor claro, alineación de búsqueda y diferenciación. El generador evalúa ideas contra estos criterios.' },
      { question: '¿La herramienta puede generar ideas para cualquier nicho?', answer: 'Sí, el generador funciona en todas las industrias y nichos—desde temas técnicos B2B hasta contenido de estilo de vida y entretenimiento.' },
      { question: '¿Debo usar cada idea que la herramienta genera?', answer: 'No—trata las ideas generadas como un punto de partida curado, no un plan de contenido final. Evalúa cada idea contra tus metas específicas de negocio.' },
      { question: '¿Con qué frecuencia debo generar nuevas ideas de blog?', answer: 'Los equipos de contenido típicamente generan nuevas ideas durante sesiones de planificación trimestrales o mensuales, poblando calendarios 3-6 meses adelante.' },
    ],
  },

  'traductor-de-emojis': {
    slug: 'traductor-de-emojis',
    name: 'Traductor de Emojis',
    title: 'Traductor de emojis con IA gratuito',
    description: 'Traduce texto a emojis expresivos o decodifica mensajes de emojis.',
    metaDescription: 'Traduce texto a emojis expresivos o decodifica mensajes de emojis. Perfecto para redes sociales, mensajería y comunicación divertida....',
    inputLabel: 'Texto o emojis...',
    inputPlaceholder: 'ej. "¡Estoy muy emocionado por el fin de semana!" o pega emojis para decodificar',
    buttonText: 'Traducir',
    maxLength: 1024,
    options: [
      { name: 'direction', label: 'Dirección de traducción', choices: ['Texto a Emojis', 'Emojis a Texto'], default: 'Texto a Emojis', type: 'radio' },
      { name: 'style', label: 'Estilo de emoji', choices: ['Reemplazo completo', 'Texto con emojis', 'Solo conceptos clave'], default: 'Texto con emojis', type: 'select' },
    ],
    systemPrompt: `You are an expert at translating between text and emojis.
## CORE RULES
- Match emojis to the meaning and emotion of the text
- Use commonly understood emojis
- Maintain the tone and sentiment
- Don't overuse emojis—select the most impactful ones
## TRANSLATION MODES
### IF DIRECTION = "Text to Emojis"
#### IF STYLE = "Full replacement" - Replace entire message with emojis only
#### IF STYLE = "Text with emojis" - Add emojis to enhance text (2-4 per sentence max)
#### IF STYLE = "Key concepts only" - Translate only main nouns/verbs/emotions
### IF DIRECTION = "Emojis to Text"
- Interpret the emoji sequence
- Provide most likely meaning
- Note alternative interpretations if ambiguous
## EMOJI SELECTION
- Happy: 😊 😄 🎉 ✨ ❤️
- Sad: 😢 😞 💔
- Excited: 🎉 🔥 🚀
- Love: ❤️ 💕 😍
- Success: 🏆 ⭐ 🎯 ✅
## OUTPUT FORMAT
Direction: {{direction}}
Style: {{style}}
Provide the translation with explanation of key emojis used.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Mejora de redes sociales y mensajería', description: 'Usuarios que buscan agregar personalidad a sus textos, tweets o publicaciones sociales pueden traducir mensajes a versiones mejoradas con emojis.' },
      { title: 'Interpretación y comprensión de emojis', description: 'Cuando recibes una cadena confusa de emojis, el traductor ayuda a decodificar el significado probable.' },
      { title: 'Creación de contenido y marketing', description: 'Community managers y creadores de contenido pueden encontrar combinaciones creativas de emojis para hacer que las publicaciones destaquen.' },
    ],
    faqs: [
      { question: '¿Cómo funciona el traductor de emojis?', answer: 'Para texto a emoji, la herramienta analiza el significado y emoción de tu mensaje y selecciona emojis que representan esos conceptos. Para emoji a texto, interpreta significados comunes.' },
      { question: '¿El traductor de emojis es gratuito?', answer: 'Sí, completamente gratuito sin necesidad de registro. Traduce todo lo que quieras.' },
      { question: '¿Todos entenderán mi traducción de emojis?', answer: 'La herramienta usa emojis comúnmente entendidos, pero la interpretación puede variar por edad, cultura y plataforma.' },
      { question: '¿Puedo traducir emojis de vuelta a texto?', answer: 'Sí, pega una secuencia de emojis y la herramienta proporcionará interpretaciones probables de lo que significan.' },
      { question: '¿Por qué algunos emojis significan cosas diferentes?', answer: 'Los significados de emojis evolucionan a través de la cultura de internet y pueden variar entre generaciones, comunidades y plataformas.' },
      { question: '¿Debo reemplazar todo el texto con emojis o solo agregar algunos?', answer: 'Depende del contexto. Para mensajes casuales, el reemplazo completo puede ser divertido. Para la mayoría de comunicaciones, agregar algunos emojis estratégicos es más efectivo.' },
      { question: '¿Los emojis se ven igual en todos los dispositivos?', answer: 'No, los diseños de emojis varían por plataforma (Apple, Google, Samsung, etc.). El significado se mantiene similar, pero la apariencia visual difiere.' },
      { question: '¿Cuántos emojis debo usar?', answer: 'Menos es a menudo más. Unos pocos emojis bien elegidos tienen más impacto que una pared de iconos.' },
      { question: '¿Esto puede ayudar con SEO de emojis?', answer: 'Los emojis pueden aparecer en resultados de búsqueda y mejorar tasas de clics en publicaciones sociales.' },
      { question: '¿Hay emojis que debo evitar?', answer: 'Algunos emojis han adquirido significados que difieren de su apariencia literal, particularmente entre usuarios más jóvenes.' },
    ],
  },

  'generador-de-nombres-de-marca': {
    slug: 'generador-de-nombres-de-marca',
    name: 'Generador de Nombres de Marca',
    title: 'Generador gratuito de nombres de marca con IA',
    description: 'Genera nombres de marca únicos y memorables al instante. Nuestra IA crea nombres distintivos con significado estratégico para la identidad de tu negocio.',
    metaDescription: 'Genera nombres de marca únicos y memorables al instante. Nuestra IA crea nombres distintivos con significado estratégico para la identidad...',
    inputLabel: 'Describe tu marca...',
    inputPlaceholder: 'ej. Una marca de moda sostenible dirigida a millennials eco-conscientes',
    buttonText: 'Generar Nombres',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de nombres',
        choices: ['3 nombres', '5 nombres', '10 nombres'],
        default: '5 nombres',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono de marca',
        choices: ['Formal/Profesional', 'Casual/Amigable', 'Innovador/Tech', 'Lujo/Premium'],
        default: 'Formal/Profesional',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explicar significado',
        choices: ['Sí', 'No'],
        default: 'Sí',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert brand strategist and naming specialist who creates memorable, distinctive brand names that resonate with target audiences and support long-term business success. Your names are not random word combinations—they are strategic assets designed for trademark viability, memorability, and market positioning.
## CORE NAMING PRINCIPLES
1. **Memorability**: Names must be easy to remember, spell, and pronounce
2. **Distinctiveness**: Names must stand out from competitors and avoid generic descriptors
3. **Scalability**: Names should allow for business evolution and expansion
4. **Domain/Trademark Viability**: Consider practical availability factors
5. **Emotional Resonance**: Names should evoke appropriate feelings and associations
## BRAND NAME CATEGORIES
### Invented/Coined Names
Created words that have no prior meaning.
- **Approach**: Combine morphemes, blend words, or create entirely new phonetic combinations
- **Examples**: Kodak, Xerox, Spotify, Häagen-Dazs
### Descriptive Names
Names that directly describe what the business does.
- **Examples**: General Motors, PayPal, Whole Foods
### Evocative/Suggestive Names
Names that suggest qualities or experiences without being literal.
- **Examples**: Amazon, Apple, Nike, Virgin
### Founder/Personal Names
Names based on people (real or fictional).
- **Examples**: Ford, Disney, Ben & Jerry's, Tesla
### Acronym/Initialism Names
Names using letters that may or may not stand for something.
- **Examples**: IBM, BMW, IKEA, H&M
### Compound/Portmanteau Names
Names combining two words or concepts.
- **Examples**: Facebook, Instagram, Pinterest, Netflix
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
## OUTPUT FORMAT
For each name provide:
1. **Name**: The brand name itself
2. **Category**: Type of name
3. **Meaning/Origin**: Explanation
4. **Brand Fit**: Why it works
5. **Considerations**: Practical notes

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Naming de startups y nuevos emprendimientos', description: 'Fundadores y emprendedores usan el Generador durante las etapas críticas iniciales de formación del negocio.' },
      { title: 'Desarrollo de líneas de productos y sub-marcas', description: 'Empresas establecidas que lanzan nuevas líneas de productos o sub-marcas usan el generador para crear nombres que complementen su arquitectura de marca existente.' },
      { title: 'Iniciativas de rebranding', description: 'Empresas que atraviesan pivotes estratégicos, fusiones o reinicios de reputación usan el generador para explorar nuevas direcciones de naming.' },
    ],
    faqs: [
      { question: '¿Qué es un generador de nombres de marca?', answer: 'Un generador de nombres de marca es una herramienta de IA que crea nombres potenciales de negocio y marca basados en tu descripción, industria y posicionamiento deseado.' },
      { question: '¿Cómo obtengo mejores sugerencias de nombres?', answer: 'Cuanto más contexto proporciones, mejores serán los resultados. Incluye información sobre tu audiencia objetivo, personalidad de marca y diferenciadores clave.' },
      { question: '¿Estos nombres están disponibles para trademark?', answer: 'Los nombres generados son sugerencias que requieren verificación independiente. Antes de comprometerte con cualquier nombre, debes realizar una búsqueda de marca registrada.' },
      { question: '¿Qué hace un buen nombre de marca?', answer: 'Los nombres fuertes comparten varias características: memorables, distintivos, pronunciables, escribibles, escalables y significativos.' },
      { question: '¿Mi nombre de marca debe describir lo que hago?', answer: 'No necesariamente. Las marcas más valiosas del mundo a menudo usan nombres evocativos o inventados: Apple, Amazon, Nike, Google.' },
      { question: '¿Cómo funcionan los nombres inventados/acuñados?', answer: 'Los nombres inventados son palabras creadas sin significado previo en el diccionario. Su ventaja es máxima distintividad y fortaleza de trademark.' },
      { question: '¿Debo verificar disponibilidad de dominio antes de elegir un nombre?', answer: 'Sí—la disponibilidad de dominio es una consideración práctica para marcas modernas.' },
      { question: '¿Cuántos nombres de marca debo generar antes de decidir?', answer: 'Genera suficientes para ver patrones y posibilidades—usualmente 15-30 opciones a través de múltiples lotes.' },
      { question: '¿El generador puede crear nombres para cualquier industria?', answer: 'Sí, el generador se adapta a cualquier industria—desde tecnología y finanzas hasta comida y moda.' },
      { question: '¿Qué debo hacer después de generar nombres de marca?', answer: 'Después de identificar candidatos prometedores: realiza búsquedas de marca, verifica disponibilidad de dominio, prueba pronunciación y obtén retroalimentación de clientes objetivo.' },
    ],
  },

  'generador-de-nombres-comerciales': {
    slug: 'generador-de-nombres-comerciales',
    name: 'Generador de Nombres Comerciales',
    title: 'Generador de nombres comerciales con IA gratuito',
    description: 'Genera nombres de negocio creativos que funcionan en el mundo real. Nuestra IA crea nombres profesionales y memorables para cualquier industria.',
    metaDescription: 'Genera nombres de negocio creativos que funcionan en el mundo real. Nuestra IA crea nombres profesionales y memorables para cualquier...',
    inputLabel: 'Describe tu negocio...',
    inputPlaceholder: 'ej. Una empresa de plomería local que sirve el área metropolitana de Madrid',
    buttonText: 'Generar Nombres',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de nombres',
        choices: ['3 nombres', '5 nombres', '10 nombres'],
        default: '5 nombres',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono del negocio',
        choices: ['Formal/Corporativo', 'Casual/Amigable', 'Innovador/Moderno'],
        default: 'Formal/Corporativo',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explicar significado',
        choices: ['Sí', 'No'],
        default: 'Sí',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert business naming consultant who creates practical, memorable business names that work in the real world. Your names balance creativity with commercial viability—they need to be distinctive enough to stand out, but practical enough to work on signage, in conversation, and across digital platforms.
## CORE BUSINESS NAMING PRINCIPLES
1. **Commercial Viability**: Names must work in actual business contexts (signage, invoices, phone calls)
2. **Industry Appropriateness**: Names should fit industry expectations while allowing differentiation
3. **Local vs. Scale Considerations**: Names should match the business's geographic ambitions
4. **Practical Memorability**: Easy to remember, spell, and share via word-of-mouth
5. **Longevity**: Names should remain relevant as the business evolves
## BUSINESS NAME CATEGORIES
### Functional/Descriptive Names
- Examples: "Portland Plumbing," "Quick Print Solutions," "Family Dental Care"
### Founder/Personal Names
- Examples: "Johnson & Associates," "Maria's Kitchen," "The Thompson Group"
### Abstract/Evocative Names
- Examples: "Evergreen Solutions," "Summit Consulting," "Horizon Media"
### Location-Based Names
- Examples: "Bay Area Tech," "Midwest Manufacturing," "Brooklyn Bakery"
### Invented/Modern Names
- Examples: "Synergy Labs," "TechNova," "FlexiServ"
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
## OUTPUT FORMAT
For each name provide:
1. **Name**: The complete business name
2. **Style**: Naming category
3. **Rationale**: Why it works
4. **Best Use Case**: Where it shines
5. **Considerations**: Practical notes

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Registro de nuevo negocio y formación de LLC', description: 'Emprendedores en el proceso de formación de negocio usan el Generador para encontrar nombres antes de registrar con autoridades estatales.' },
      { title: 'Naming de franquicias y negocios multi-ubicación', description: 'Dueños de negocios planeando escalar a través de franquicias o múltiples ubicaciones usan el generador para encontrar nombres que funcionen en todos los mercados.' },
      { title: 'Pivoteo o rebranding de negocios existentes', description: 'Negocios establecidos atravesando cambios estratégicos usan el generador para explorar opciones de rebranding.' },
    ],
    faqs: [
      { question: '¿Cuál es la diferencia entre un nombre de marca y un nombre comercial?', answer: 'Un nombre comercial es el nombre de tu entidad legal. Un nombre de marca es cómo te conocen los clientes—puede ser igual o diferente al nombre comercial.' },
      { question: '¿Mi nombre comercial debe describir lo que hago?', answer: 'Depende de tu modelo de negocio y metas. Los nombres descriptivos proporcionan claridad inmediata y ayudan con SEO local, pero son menos distintivos.' },
      { question: '¿Cómo verifico si un nombre comercial está disponible?', answer: 'Revisa múltiples niveles: base de datos de registro estatal, base de datos de marcas registradas, disponibilidad de dominio, búsqueda en Google y plataformas de redes sociales.' },
      { question: '¿Debo incluir mi ubicación en mi nombre comercial?', answer: 'Incluir ubicación puede fortalecer la identidad local y ayudar con SEO local, pero puede limitar el alcance percibido si te expandes.' },
      { question: '¿Qué tan importante es tener un dominio que coincida?', answer: 'Importante pero no esencial. Los dominios exactos .com son valiosos, pero muchos negocios exitosos usan alternativas.' },
      { question: '¿Puedo usar mi propio nombre para mi negocio?', answer: 'Sí—los nombres personales son un enfoque clásico, especialmente para servicios profesionales y negocios creativos.' },
      { question: '¿Qué hace un nombre comercial memorable?', answer: 'Los nombres memorables son típicamente: cortos (1-3 palabras), fáciles de pronunciar, fáciles de escribir, fonéticamente agradables y con significado.' },
      { question: '¿Cómo pruebo un nombre comercial antes de comprometerme?', answer: 'Prueba diciendo el nombre en voz alta en diferentes contextos, pidiendo a otros que lo deletreen después de escucharlo, y verificando cómo se ve en un mockup de logo.' },
      { question: '¿Debo evitar nombres similares a competidores?', answer: 'Generalmente sí. Nombres similares crean confusión, pueden desencadenar problemas de marca registrada y hacen la diferenciación más difícil.' },
      { question: '¿Qué pasa si quiero cambiar mi nombre comercial después?', answer: 'Puedes cambiar nombres comerciales, pero involucra costos: tarifas de re-registro, nuevos materiales de marketing, potencialmente nuevos dominios y señalización.' },
    ],
  },

  'generador-de-nombres-de-productos': {
    slug: 'generador-de-nombres-de-productos',
    name: 'Generador de Nombres de Productos',
    title: 'Generador gratuito de nombres de productos con IA',
    description: 'Genera nombres de productos creativos que venden. Nuestra IA crea nombres memorables y listos para el mercado que destacan en estantes y en la mente de los clientes.',
    metaDescription: 'Genera nombres de productos creativos que venden. Nuestra IA crea nombres memorables y listos para el mercado que destacan en estantes y en...',
    inputLabel: 'Describe tu producto...',
    inputPlaceholder: 'ej. Una proteína vegetal en polvo para entusiastas del fitness',
    buttonText: 'Generar Nombres',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de nombres',
        choices: ['3 nombres', '5 nombres', '10 nombres'],
        default: '5 nombres',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono del producto',
        choices: ['Premium/Lujo', 'Divertido/Juguetón', 'Profesional/Técnico', 'Natural/Orgánico'],
        default: 'Premium/Lujo',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explicar significado',
        choices: ['Sí', 'No'],
        default: 'Sí',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert product naming strategist who creates compelling product names that drive recognition, recall, and purchase decisions. Your names are designed to work on packaging, in advertising, and in customer conversations—supporting both immediate appeal and long-term brand building.
## CORE PRODUCT NAMING PRINCIPLES
1. **Shelf Impact**: Names must stand out in crowded retail or digital environments
2. **Benefit Suggestion**: Names should hint at what the product delivers
3. **Target Audience Fit**: Names must resonate with specific buyer demographics
4. **Verbal Shareability**: Names should spread naturally through word-of-mouth
5. **Brand Architecture**: Names should work within existing brand portfolios
## PRODUCT NAME CATEGORIES
### Descriptive Product Names
- Examples: "Head & Shoulders," "Lean Cuisine," "Miracle-Gro"
### Evocative/Suggestive Names
- Examples: "Tide," "Axe," "Dove," "Bounty"
### Invented/Coined Names
- Examples: "Prozac," "Verizon," "Acura"
### Alphanumeric Names
- Examples: "WD-40," "Formula 409," "iPhone 15"
### Founder/Character Names
- Examples: "Mrs. Butterworth's," "Chef Boyardee," "Ben & Jerry's"
### Compound/Blend Names
- Examples: "NyQuil," "Pinterest," "Instagram"
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
## OUTPUT FORMAT
For each name provide:
1. **Name**: The product name
2. **Category**: Naming style
3. **Meaning/Logic**: Why it works
4. **Market Fit**: Competitive positioning
5. **Usage Notes**: Packaging, advertising use

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Preparación de lanzamiento de nuevo producto', description: 'Gerentes de producto y equipos de marketing usan el Generador durante la fase crítica de naming antes del lanzamiento.' },
      { title: 'Extensión de línea de productos y naming de variantes', description: 'Empresas que expanden líneas de productos existentes usan el generador para crear nombres para nuevas variantes.' },
      { title: 'Desarrollo de productos de marca privada', description: 'Minoristas creando productos de marca privada usan el generador para nombrar productos que compitan con marcas establecidas.' },
    ],
    faqs: [
      { question: '¿Qué hace un buen nombre de producto?', answer: 'Los nombres efectivos de productos son memorables, significativos, pronunciables, distintivos y apropiados para el público objetivo.' },
      { question: '¿Mi nombre de producto debe describir lo que hace?', answer: 'Depende de tu categoría y estrategia. Los nombres descriptivos proporcionan claridad instantánea pero son más difíciles de registrar como marca.' },
      { question: '¿Cómo nombro productos en una línea de productos?', answer: 'El naming de líneas de productos típicamente sigue una de varias arquitecturas: casa de marca, marcas respaldadas, o casa de marcas.' },
      { question: '¿Debo registrar mi nombre de producto como marca?', answer: 'Para productos en los que inviertes significativamente, sí. El registro de marca proporciona protección legal contra copias.' },
      { question: '¿Cómo pruebo un nombre de producto antes del lanzamiento?', answer: 'Prueba a través de: grupos focales o encuestas con clientes objetivo, pruebas A/B en publicidad digital, pruebas de pronunciación.' },
      { question: '¿Qué pasa si mi nombre de producto es similar al de un competidor?', answer: 'Nombres similares crean confusión y potenciales problemas legales. Busca exhaustivamente antes de comprometerte.' },
      { question: '¿Puedo usar números en mi nombre de producto?', answer: 'Los números pueden funcionar bien para versiones de productos o para sugerir fórmulas/ingredientes. Funcionan particularmente bien en productos tecnológicos.' },
      { question: '¿Qué tan largo debe ser mi nombre de producto?', answer: '1-3 palabras es lo ideal para la mayoría de productos. Nombres más largos son más difíciles de recordar y pueden no encajar bien en empaques.' },
      { question: '¿El nombre de producto debe funcionar internacionalmente?', answer: 'Si planeas vender globalmente, verifica traducciones y connotaciones en mercados clave. Algunos nombres suenan bien en un idioma pero tienen significados problemáticos en otros.' },
      { question: '¿Puedo cambiar mi nombre de producto después del lanzamiento?', answer: 'Sí, pero viene con costos significativos. Renombrar requiere nuevo empaque, marketing y esfuerzos de re-educación del cliente.' },
    ],
  },

  'generador-de-textos-para-sitios-web': {
    slug: 'generador-de-textos-para-sitios-web',
    name: 'Generador de Textos para Sitios Web',
    title: 'Generador gratuito de textos publicitarios para sitios web con IA',
    description: 'Genera contenido profesional para sitios web en minutos. Nuestra IA crea textos para páginas de inicio, páginas de nosotros, páginas de servicios y más.',
    metaDescription: 'Genera contenido profesional para sitios web en minutos. Nuestra IA crea textos para páginas de inicio, páginas de nosotros, páginas de...',
    inputLabel: 'Describe tu negocio...',
    inputPlaceholder: 'ej. Una agencia de marketing digital especializada en SEO para marcas de e-commerce',
    buttonText: 'Generar Textos Web',
    maxLength: 2048,
    options: [
      {
        name: 'pages',
        label: 'Páginas a generar',
        choices: ['Solo Inicio', 'Inicio + Nosotros', 'Inicio + Nosotros + Servicios', 'Todas las Páginas Principales'],
        default: 'Inicio + Nosotros + Servicios',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono de marca',
        choices: ['Profesional/Corporativo', 'Amigable/Cercano', 'Audaz/Seguro', 'Minimalista/Limpio'],
        default: 'Profesional/Corporativo',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert website copywriter who creates compelling, conversion-focused content for business websites. Your copy balances brand storytelling with strategic messaging, ensuring every page serves both user needs and business objectives.
## CORE WEBSITE COPY PRINCIPLES
1. **User-Centric Messaging**: Write for what visitors need, not what businesses want to say
2. **Clear Information Architecture**: Structure content for how people navigate websites
3. **Brand Voice Consistency**: Maintain consistent tone across all pages
4. **Conversion Integration**: Every page should guide visitors toward business goals
5. **SEO Awareness**: Incorporate keywords naturally throughout
## WEBSITE PAGE TYPES AND PURPOSES
### Homepage
- **Purpose**: First impression, navigation hub, value proposition overview
- **Key Elements**: Hero statement, service/product overview, credibility signals, clear pathways
### About Page
- **Purpose**: Build trust, humanize the brand, share story and values
- **Key Elements**: Origin story, mission/vision, team introduction, values/philosophy
### Services/Products Page
- **Purpose**: Explain offerings clearly, drive inquiries or purchases
- **Key Elements**: Service descriptions, benefits, process overview, CTAs
### Contact Page
- **Purpose**: Make connecting easy, provide necessary information
- **Key Elements**: Contact form, location, hours, expectations
Pages to Generate: {{pages}}
Tone: {{tone}}
## OUTPUT FORMAT
Provide complete copy for each requested page including:
- Headlines and subheads
- Body copy
- CTAs
- SEO notes

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Desarrollo y lanzamiento de nuevo sitio web', description: 'Negocios construyendo nuevos sitios web usan el Generador para desarrollar contenido inicial en todas las páginas.' },
      { title: 'Rediseño de sitio web y actualización de contenido', description: 'Empresas atravesando rediseños de sitio web usan el generador para crear textos frescos que coincidan con su posicionamiento de marca evolucionado.' },
      { title: 'Producción de contenido multi-página', description: 'Equipos de marketing responsables de sitios web con mucho contenido usan el generador para mantener calidad consistente en muchas páginas.' },
    ],
    faqs: [
      { question: '¿Qué páginas debe incluir un sitio web de negocios?', answer: 'Páginas esenciales para la mayoría de negocios: Inicio, Nosotros, Servicios/Productos, Contacto. Páginas adicionales dependen de tu negocio.' },
      { question: '¿Cómo escribo una buena página de inicio?', answer: 'Las páginas de inicio deben responder tres preguntas rápidamente: ¿Qué haces? ¿Para quién? ¿Por qué elegirte?' },
      { question: '¿Qué tan largo debe ser el texto del sitio web?', answer: 'Ajusta la longitud al propósito de la página e intención del usuario. Inicio: escaneable (300-600 palabras). Nosotros: flexibilidad narrativa (400-800 palabras).' },
      { question: '¿Qué hace efectivo el texto de la página de nosotros?', answer: 'Las grandes páginas de nosotros construyen confianza a través de autenticidad. Incluye: historia de origen, misión y valores, introducción del equipo.' },
      { question: '¿Cómo escribo descripciones de servicios que conviertan?', answer: 'Lidera con beneficios, sigue con características, incluye proceso y termina con CTA. Aborda preguntas y objeciones comunes.' },
      { question: '¿El texto del sitio web debe ser formal o casual?', answer: 'Ajusta a tu audiencia objetivo y expectativas de la industria. La consistencia importa más que cualquier estilo específico.' },
      { question: '¿Cómo optimizo el texto del sitio web para SEO?', answer: 'Incluye palabras clave relevantes en: títulos de página, encabezados, primer párrafo, naturalmente a través del texto, y texto alt de imágenes.' },
      { question: '¿Qué hace un buen llamado a la acción?', answer: 'Los CTAs efectivos son específicos, enfocados en beneficios, visibles y posicionados bien después de proporcionar suficiente información.' },
      { question: '¿Cómo escribo para usuarios móviles?', answer: 'La mayoría del tráfico web es móvil. Escribe para pantallas pequeñas: párrafos más cortos, encabezados claros, estructura escaneable.' },
      { question: '¿Con qué frecuencia debo actualizar el texto del sitio web?', answer: 'Actualiza cuando: las ofertas del negocio cambien, el posicionamiento evolucione, el texto no esté funcionando, o la información se desactualice.' },
    ],
  },

  'generador-de-frases-para-redes-sociales': {
    slug: 'generador-de-frases-para-redes-sociales',
    name: 'Generador de Frases para Redes Sociales',
    title: 'Generador de frases para redes sociales con IA gratuito',
    description: 'Genera frases atractivas para redes sociales que impulsan likes, comentarios y compartidos. Nuestra IA crea textos convincentes para Instagram, Facebook, Twitter y más.',
    metaDescription: 'Genera frases atractivas para redes sociales que impulsan likes, comentarios y compartidos. Nuestra IA crea textos convincentes para...',
    inputLabel: 'Describe el contenido de tu publicación...',
    inputPlaceholder: 'ej. Foto de mi lanzamiento de nuevo producto - botellas de agua sostenibles para entusiastas del aire libre',
    buttonText: 'Generar Frase',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', 'General'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono de la frase',
        choices: ['Profesional', 'Casual', 'Humorístico', 'Inspiracional', 'Atrevido'],
        default: 'Casual',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media content strategist specializing in creating engaging captions that drive engagement across multiple platforms. Your role is to craft compelling post copy that resonates with audiences and prompts interaction.
## CAPTION TYPES AND PURPOSES
### 1. Educational/Value-Driven
- Share tips, tricks, or insights
- Teach something useful
- Position as an authority
### 2. Storytelling/Personal
- Share experiences and journeys
- Create emotional connections
- Build authenticity and trust
### 3. Engagement/Interactive
- Ask questions
- Request opinions
- Create polls or debates
### 4. Promotional/Sales
- Highlight products/services
- Drive conversions
- Create urgency
### 5. Inspirational/Motivational
- Uplift and encourage
- Share quotes or mantras
- Create shareable content
### 6. Behind-the-Scenes
- Show process and work
- Humanize the brand
- Build curiosity
## PLATFORM-SPECIFIC ADAPTATIONS
### Instagram
- Up to 2,200 characters
- First 125 characters visible
- Emojis enhance engagement
### Facebook
- Similar length flexibility
- Less emoji-heavy
- More complete sentences
### Twitter/X
- 280 characters max
- Concise and punchy
### LinkedIn
- Professional tone
- First 140 characters visible
- Hashtags at end (3-5 max)
### TikTok
- 150 characters max
- Casual and trendy
- Hashtag-heavy
Platform: {{platform}}
Tone: {{tone}}
## ENGAGEMENT TACTICS
- Ask questions to prompt comments
- Use "save this" for valuable content
- Request shares for relatable content
- Tag others when relevant

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Creación eficiente de contenido para redes sociales', description: 'Community managers y creadores de contenido usan el Generador para agilizar su proceso de creación de contenido.' },
      { title: 'Optimización de textos para campañas publicitarias', description: 'Negocios ejecutando campañas de publicidad en redes sociales usan el Generador para crear variaciones de textos publicitarios convincentes.' },
      { title: 'Mejora del engagement de marca', description: 'Marcas que buscan impulsar el engagement usan el Generador para crear contenido alineado con temas tendencia e intereses de la audiencia.' },
    ],
    faqs: [
      { question: '¿Qué hace una frase efectiva?', answer: 'Las frases efectivas tienen un gancho fuerte que detiene el scroll, entregan valor o emoción en el cuerpo, e incluyen un llamado a la acción claro.' },
      { question: '¿Qué tan largas deben ser las frases para redes sociales?', answer: 'La longitud depende de la plataforma y propósito. Instagram permite hasta 2,200 caracteres pero más corto a menudo funciona mejor. Twitter está limitado a 280.' },
      { question: '¿Debo usar emojis en mis frases?', answer: 'Los emojis pueden aumentar el engagement agregando interés visual y personalidad. Úsalos para separar texto, enfatizar puntos o agregar emoción.' },
      { question: '¿Cuántos hashtags debo incluir?', answer: 'Instagram: 3-10 hashtags relevantes. Twitter: 1-2 máximo. LinkedIn: 3-5 al final. TikTok: 3-5 trending y de nicho.' },
      { question: '¿Cuál es el mejor llamado a la acción para frases?', answer: 'Ajusta tu CTA a tu meta: "Comenta abajo" para engagement, "Guarda esto" para contenido valioso, "Link en bio" para conversiones.' },
      { question: '¿Cómo escribo frases que obtengan más comentarios?', answer: 'Haz preguntas específicas, comparte opiniones e invita debate, usa prompts de "esto o aquello", cuenta historias incompletas.' },
      { question: '¿Las frases deben escribirse diferente para cada plataforma?', answer: 'Sí. Cada plataforma tiene diferentes límites de caracteres, expectativas de audiencia y mejores prácticas.' },
      { question: '¿Cómo mantengo la voz de marca en las frases?', answer: 'Crea plantillas de frases y guías, usa vocabulario y expresiones consistentes, mantén estilos similares de emoji y formato.' },
      { question: '¿Cuál es la parte más importante de una frase?', answer: 'La primera línea (gancho) es más importante porque es lo que los usuarios ven antes de hacer clic en "más".' },
      { question: '¿Con qué frecuencia debo publicar con nuevas frases?', answer: 'La frecuencia de publicación depende de tu plataforma y capacidad para crear contenido de calidad. La consistencia importa más que la frecuencia.' },
    ],
  },

  // ==================== END OF SPANISH TRANSLATION ====================

  'generador-de-titulos-para-videos-de-youtube': {
    slug: 'generador-de-titulos-para-videos-de-youtube',
    name: 'Generador de Títulos para Videos de YouTube',
    title: 'Generador gratuito de títulos para videos de YouTube con IA',
    description: 'Genera títulos de YouTube atractivos que obtienen visualizaciones. Nuestra IA crea títulos optimizados para SEO.',
    metaDescription: 'Genera títulos de YouTube atractivos que obtienen visualizaciones. Nuestra IA crea títulos optimizados para SEO que atraen espectadores...',
    inputLabel: 'Describe el tema de tu video...',
    inputPlaceholder: 'ej. Tutorial de Lightroom para edición de fotos de retrato',
    buttonText: 'Generar títulos',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Estilo del título', choices: ['Informativo/Claro', 'Atractivo/Clickbait', 'Pregunta', 'Lista/Números', 'Cómo hacer'], default: 'Informativo/Claro', type: 'select' },
      { name: 'video_type', label: 'Tipo de video', choices: ['Tutorial/Educativo', 'Entretenimiento/Vlog', 'Reseña/Producto', 'Gaming', 'Noticias/Comentario'], default: 'Tutorial/Educativo', type: 'select' },
    ],
    systemPrompt: `You are an expert YouTube content strategist specializing in creating compelling video titles.
Style: {{style}}
Video Type: {{video_type}}
Generate 8-10 title options under 60 characters when possible. For each title, briefly explain why it works.

IMPORTANT: Generate all output in Spanish.`,
    useCases: [
      { title: 'Optimización de tasa de clics', description: 'Los creadores de YouTube usan el generador para crear títulos que maximizan la tasa de clics.' },
      { title: 'Mejora de SEO de video', description: 'Los YouTubers usan el generador para crear títulos optimizados para palabras clave.' },
      { title: 'Pruebas A/B de títulos', description: 'Los creadores prueban diferentes enfoques de títulos para encontrar los mejores.' },
    ],
    faqs: [
      { question: '¿Cuánto debe medir un título de YouTube?', answer: 'YouTube permite hasta 100 caracteres, pero apunta a 60-70 para visibilidad total en resultados de búsqueda.' },
      { question: '¿El título afecta el SEO de YouTube?', answer: 'Sí, los títulos son uno de los factores de ranking más importantes.' },
    ],
  },
};
