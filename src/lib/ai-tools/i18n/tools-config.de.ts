// German (de) Tool Configurations
// Auto-generated translations from English source
// SEO titles from fixed_ahrefs_de_urls.csv

import { ToolConfig } from '../tools-config';

// Helper functions
export function getToolBySlugDe(slug: string): ToolConfig | undefined {
  return toolsDe[slug];
}

export function getAllToolsDe(): ToolConfig[] {
  return Object.values(toolsDe);
}

// German uses English slugs, so no mapping needed - just return the slug as-is
export function getEnglishSlugDe(germanSlug: string): string {
  return germanSlug;
}

export const toolsDe: Record<string, ToolConfig> = {
  // ==================== BATCH 1: Tools 1-10 ====================

  'paragraph-generator': {
    slug: 'paragraph-generator',
    name: 'Absatz-Generator',
    title: 'Kostenloser KI-Absatz-Generator',
    description: 'Generiere sofort gut strukturierte Absätze zu jedem Thema. Perfekt für Aufsätze, Artikel, Blog-Beiträge und mehr.',
    metaDescription: 'Generiere sofort gut strukturierte Absätze zu jedem Thema. Perfekt für Aufsätze, Artikel, Blog-Beiträge und mehr.',
    inputLabel: 'Worüber soll Ihr Absatz handeln?',
    inputPlaceholder: 'z.B. die Vorteile erneuerbarer Energiequellen',
    buttonText: 'Absatz Generieren',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Schreibton',
        choices: ['Sachlich', 'Akademisch', 'Locker', 'Überzeugend', 'Kreativ'],
        default: 'Sachlich',
        type: 'select',
      },
      {
        name: 'paragraph_count',
        label: 'Anzahl der Absätze',
        choices: ['1 Absatz', '2 Absätze', '3 Absätze'],
        default: '1 Absatz',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content writer who creates well-structured, engaging paragraphs on any topic.

## CORE RULES
- Create paragraphs that are complete, coherent, and well-organized
- Start with a clear topic sentence that introduces the main idea
- Support the topic with relevant details, examples, or evidence
- Maintain logical flow between sentences using appropriate transitions
- End with a concluding sentence that reinforces the main point
- Vary sentence structure for readability
- Keep paragraphs focused on one main idea

## STRUCTURE
Each paragraph should have:
1. Topic Sentence - introduces the main idea
2. Supporting Sentences - 3-5 sentences that develop the idea
3. Concluding Sentence - wraps up or transitions

## TONE GUIDELINES
### IF tone = "Factual"
- Use objective, neutral language
- Cite facts and data where relevant
- Avoid opinion or emotional language
- Focus on informing the reader

### IF tone = "Academic"
- Use formal vocabulary and structure
- Include scholarly language
- Maintain third-person perspective
- Support claims with reasoning

### IF tone = "Casual"
- Use conversational language
- Include contractions naturally
- Write as if speaking to a friend
- Keep sentences shorter

### IF tone = "Persuasive"
- Lead with strong arguments
- Use emotional appeals appropriately
- Include calls to action
- Build toward a conclusion

### IF tone = "Creative"
- Use vivid, descriptive language
- Include metaphors and analogies
- Engage the reader's imagination
- Vary sentence rhythm

Tone: {{tone}}
Paragraph Count: {{paragraph_count}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Aufsatzschreiben und Schulaufgaben', description: 'Schüler und Studenten nutzen den Absatz-Generator, um gut strukturierte Absätze für Aufsätze, Forschungsarbeiten und Aufgaben zu erstellen.' },
      { title: 'Blog- und Artikelerstellung', description: 'Content-Ersteller nutzen das Tool, um Schreibblockaden zu überwinden und schnell Absätze für Blogs, Artikel und Webinhalte zu generieren.' },
      { title: 'Geschäftskommunikation', description: 'Berufstätige nutzen den Generator für Berichte, Präsentationen und andere geschäftliche Dokumente.' },
    ],
    faqs: [
      { question: 'Was ist ein KI-Absatz-Generator?', answer: 'Ein KI-Absatz-Generator ist ein Tool, das automatisch Absätze basierend auf Ihrem Thema und Ihren Einstellungen erstellt. Es nutzt fortschrittliche Sprachmodelle zur Erstellung kohärenter, gut strukturierter Absätze.' },
      { question: 'Ist der Absatz-Generator kostenlos?', answer: 'Ja, das Tool ist völlig kostenlos zu nutzen, ohne Einschränkungen bei der Anzahl der generierten Absätze.' },
      { question: 'Kann ich den Schreibstil anpassen?', answer: 'Ja, Sie können verschiedene Töne auswählen: Sachlich, Akademisch, Locker, Überzeugend oder Kreativ, um Ihren spezifischen Bedürfnissen zu entsprechen.' },
      { question: 'Wie lang sind die generierten Absätze?', answer: 'Die Absätze sind typischerweise 4-7 Sätze lang, abhängig von der Komplexität des Themas und dem gewählten Ton.' },
      { question: 'Ist der generierte Inhalt einzigartig?', answer: 'Ja, jeder Absatz wird basierend auf Ihrer Eingabe erstellt und ist daher einzigartig für Ihre Anfrage.' },
      { question: 'Kann ich die Absätze für akademische Arbeiten verwenden?', answer: 'Der Generator kann Entwürfe und Ideen liefern, aber akademische Arbeiten sollten immer in Ihren eigenen Worten und mit korrekter Zitierung bearbeitet werden.' },
      { question: 'Für welche Themen kann ich Absätze generieren?', answer: 'Das Tool kann Absätze zu nahezu jedem Thema generieren, von Wissenschaft und Geschichte bis hin zu Wirtschaft und Kreativschreiben.' },
      { question: 'Wie oft kann ich den Generator nutzen?', answer: 'Sie können den Generator beliebig oft nutzen. Es gibt keine täglichen oder monatlichen Grenzen.' },
      { question: 'Muss ich mich anmelden, um das Tool zu nutzen?', answer: 'Nein, es ist keine Registrierung erforderlich. Sie können sofort mit der Generierung von Absätzen beginnen.' },
      { question: 'Kann ich mehrere Absätze auf einmal generieren?', answer: 'Ja, Sie können zwischen 1-3 Absätzen pro Generierung wählen, um zusammenhängenden Inhalt zu erstellen.' },
    ],
  },

  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: 'Absatz-Umformulierer',
    title: 'Kostenloser KI-Absatz-Umformulierer',
    description: 'Formulieren Sie Absätze um, um Klarheit, Ton oder Einzigartigkeit zu verbessern. Behalten Sie die Bedeutung bei und verbessern Sie Ihren Text.',
    metaDescription: 'Formulieren Sie Absätze um, um Klarheit, Ton oder Einzigartigkeit zu verbessern. Behalten Sie die Bedeutung bei und verbessern Sie Ihren...',
    inputLabel: 'Absatz zum Umformulieren...',
    inputPlaceholder: 'Fügen Sie hier Ihren Absatz zum Umformulieren ein...',
    buttonText: 'Absatz Umformulieren',
    maxLength: 4096,
    options: [
      {
        name: 'goal',
        label: 'Umformulierungsziel',
        choices: ['Klarheit verbessern', 'Einzigartig machen', 'Ton ändern', 'Vereinfachen', 'Kürzen'],
        default: 'Klarheit verbessern',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'Änderungsintensität',
        choices: ['Leicht', 'Mittel', 'Stark'],
        default: 'Mittel',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor who rewrites paragraphs to improve clarity, uniqueness, or tone while preserving the original meaning.

## CORE RULES
- Preserve the original meaning and key information
- Improve readability and flow
- Maintain appropriate paragraph structure
- Use varied vocabulary and sentence structures
- Ensure the rewritten text sounds natural

## REWRITING GOALS
### IF goal = "Improve clarity"
- Simplify complex sentences
- Use clearer word choices
- Improve logical flow
- Remove ambiguity

### IF goal = "Make unique"
- Significantly change sentence structures
- Replace vocabulary with synonyms
- Reorganize information presentation
- Maintain meaning while changing expression

### IF goal = "Change tone"
- Adjust formality level as needed
- Modify word choices for tone
- Restructure for desired effect

### IF goal = "Simplify"
- Use shorter sentences
- Choose simpler words
- Break up complex ideas
- Improve accessibility

### IF goal = "Make concise"
- Remove redundancy
- Eliminate filler words
- Combine related ideas
- Preserve essential information

## INTENSITY LEVELS
### Light: Subtle changes, mostly word-level
### Medium: Sentence restructuring and vocabulary changes
### Heavy: Significant transformation while keeping meaning

Goal: {{goal}}
Intensity: {{intensity}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Akademisches Schreiben', description: 'Studenten nutzen den Umformulierer, um Recherchematerial in ihre eigenen Worte umzuschreiben und dabei die Bedeutung beizubehalten.' },
      { title: 'Content-Optimierung', description: 'Blogger und Marketer nutzen das Tool zur Verbesserung bestehender Inhalte für bessere Lesbarkeit und Engagement.' },
      { title: 'Professionelle Dokumente', description: 'Berufstätige schreiben E-Mails, Berichte und Präsentationen um, um Klarheit und Wirkung zu verbessern.' },
    ],
    faqs: [
      { question: 'Was macht ein Absatz-Umformulierer?', answer: 'Ein Absatz-Umformulierer nimmt Ihren vorhandenen Text und formuliert ihn um, um Klarheit, Einzigartigkeit oder Ton zu verbessern, während die ursprüngliche Bedeutung erhalten bleibt.' },
      { question: 'Wird das Umformulieren meine Bedeutung ändern?', answer: 'Das Tool ist darauf ausgelegt, Ihre Kernbotschaft zu bewahren, während sich die Ausdrucksweise ändert. Überprüfen Sie immer die Ausgabe, um die Genauigkeit sicherzustellen.' },
      { question: 'Kann ich kontrollieren, wie stark der Text geändert wird?', answer: 'Ja, Sie können Intensitätsstufen wählen: Leicht für subtile Änderungen, Mittel für ausgewogene Umstrukturierung oder Stark für signifikante Transformation.' },
      { question: 'Ist dies für akademische Arbeiten geeignet?', answer: 'Das Tool kann bei der Umformulierung von Recherchematerial helfen, aber richtige Zitierung ist wesentlich. Verwenden Sie es als Unterstützung beim Schreiben.' },
      { question: 'Wie unterscheidet sich dies von der Plagiatsprüfung?', answer: 'Das Umformulieren macht Ihren Text einzigartig, die Plagiatsprüfung erkennt Ähnlichkeiten. Beide arbeiten zusammen für originelle Inhalte.' },
      { question: 'Kann es meinen Text formeller oder lockerer machen?', answer: 'Ja, mit "Ton ändern" können Sie die Formalitätsstufe an Ihre Bedürfnisse anpassen.' },
      { question: 'Gibt es eine Zeichenbegrenzung?', answer: 'Das Tool verarbeitet Absätze unterschiedlicher Länge. Für sehr lange Dokumente können Sie abschnittsweise umformulieren.' },
      { question: 'Muss ich mich registrieren?', answer: 'Nein, das Tool ist kostenlos und erfordert keine Registrierung.' },
      { question: 'Kann es technische oder spezialisierte Inhalte verarbeiten?', answer: 'Ja, das Tool kann verschiedene Themen verarbeiten und behält technische Terminologie bei, wenn es angemessen ist.' },
      { question: 'Wie stelle ich sicher, dass der umformulierte Text gut ist?', answer: 'Überprüfen und bearbeiten Sie die Ausgabe immer. Das Tool bietet einen Ausgangspunkt, aber Ihre Überprüfung gewährleistet Qualität.' },
    ],
  },

  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: 'Paraphrasier-Tool',
    title: 'Kostenloses KI-Paraphrasier-Tool',
    description: 'Formulieren Sie jeden Text in Sekunden um. Behalten Sie die Bedeutung bei, verbessern Sie den Stil und vermeiden Sie Plagiate mit KI-gestütztem Paraphrasieren.',
    metaDescription: 'Formulieren Sie jeden Text in Sekunden um. Behalten Sie die Bedeutung bei, verbessern Sie den Stil und vermeiden Sie Plagiate mit...',
    inputLabel: 'Text zum Paraphrasieren...',
    inputPlaceholder: 'Fügen Sie hier Ihren Text zum Paraphrasieren ein...',
    buttonText: 'Text Paraphrasieren',
    maxLength: 4096,
    options: [
      {
        name: 'style',
        label: 'Ausgabestil',
        choices: ['Standard', 'Akademisch', 'Kreativ', 'Vereinfacht', 'Ausgearbeitet'],
        default: 'Standard',
        type: 'select',
      },
      {
        name: 'change_level',
        label: 'Änderungsgrad',
        choices: ['Minimal', 'Moderat', 'Signifikant'],
        default: 'Moderat',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert paraphrasing specialist who rephrases text while maintaining meaning and improving quality.

## CORE RULES
- Preserve the original meaning completely
- Use different words and sentence structures
- Maintain the same level of detail
- Ensure natural, fluent output
- Adapt to the specified style

## STYLE OPTIONS
### Standard
- Clear, neutral language
- Balanced restructuring
- General-purpose output

### Academic
- Formal vocabulary
- Scholarly tone
- Precise language

### Creative
- Varied expressions
- Engaging language
- Stylistic flair

### Simplified
- Easy-to-understand words
- Shorter sentences
- Accessible language

### Elaborated
- Added context
- More detailed explanations
- Extended expressions

## CHANGE LEVELS
### Minimal: Light word changes, structure mostly preserved
### Moderate: Sentence restructuring with vocabulary changes
### Significant: Major transformation, completely fresh expression

Style: {{style}}
Change Level: {{change_level}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Akademisches Schreiben', description: 'Studenten paraphrasieren Quellmaterial, um Plagiate zu vermeiden und Inhalte in eigenen Worten auszudrücken.' },
      { title: 'Content-Erstellung', description: 'Autoren erstellen einzigartige Versionen von Inhalten für verschiedene Plattformen und Zielgruppen.' },
      { title: 'Geschäftskommunikation', description: 'Berufstätige verbessern E-Mails und Dokumente mit klarerer, wirkungsvollerer Sprache.' },
    ],
    faqs: [
      { question: 'Was ist ein Paraphrasier-Tool?', answer: 'Ein Paraphrasier-Tool formuliert Text um und drückt dieselben Ideen mit anderen Worten aus, während die ursprüngliche Bedeutung erhalten bleibt.' },
      { question: 'Wie unterscheidet sich dies vom Umformulieren?', answer: 'Paraphrasieren und Umformulieren sind ähnlich. Paraphrasieren betont oft größere Änderungen in der Ausdrucksweise, während Umformulieren subtiler sein kann.' },
      { question: 'Hilft dies bei der Vermeidung von Plagiaten?', answer: 'Ja, Paraphrasieren erstellt einzigartige Formulierungen, aber korrekte Quellenangabe für Ideen, die nicht Ihre eigenen sind, ist dennoch wichtig.' },
      { question: 'Kann ich den Grad der Änderung kontrollieren?', answer: 'Ja, wählen Sie zwischen Minimalen, Moderaten oder Signifikanten Änderungsgraden je nach Ihren Bedürfnissen.' },
      { question: 'Ist das Tool für technische Inhalte geeignet?', answer: 'Ja, es kann technische Texte verarbeiten und behält Fachterminologie bei, während Struktur und Ausdruck geändert werden.' },
      { question: 'Gibt es eine Längenbegrenzung?', answer: 'Das Tool verarbeitet Texte verschiedener Längen. Für längere Dokumente arbeiten Sie am besten abschnittsweise.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, das Tool ist kostenlos und ohne Registrierung nutzbar.' },
      { question: 'Kann es meinen Text formeller machen?', answer: 'Ja, mit dem Akademischen Stil wird eine formellere Sprache verwendet.' },
      { question: 'Bleibt die Bedeutung wirklich gleich?', answer: 'Das Tool ist darauf ausgelegt, die Bedeutung zu bewahren. Überprüfen Sie die Ausgabe immer, um Genauigkeit sicherzustellen.' },
      { question: 'Kann ich das Ergebnis weiter bearbeiten?', answer: 'Ja, die Ausgabe ist ein Ausgangspunkt. Bearbeiten Sie nach Bedarf, um Ihren Anforderungen zu entsprechen.' },
    ],
  },

  'sentence-rewriter': {
    slug: 'sentence-rewriter',
    name: 'Satz-Umformulierer',
    title: 'Kostenloses KI Sentence Rewriter Tool',
    description: 'Formulieren Sie Sätze für Klarheit, Wirkung oder besseren Ton um. Erhalten Sie mehrere Varianten mit Erklärungen.',
    metaDescription: 'Formulieren Sie Sätze für Klarheit, Wirkung oder besseren Ton um. Erhalten Sie mehrere Varianten mit Erklärungen dessen, was jede stärker...',
    inputLabel: 'Satz zum Umformulieren...',
    inputPlaceholder: 'z.B. Die Implementierung des neuen Systems wurde letzte Woche vom Team abgeschlossen.',
    buttonText: 'Satz Umformulieren',
    maxLength: 1024,
    options: [
      { name: 'goal', label: 'Verbesserungsziel', choices: ['Klarheit', 'Wirkung', 'Kürze', 'Formeller', 'Lockerer', 'Selbstbewusster'], default: 'Klarheit', type: 'select' },
      { name: 'variants', label: 'Anzahl Varianten', choices: ['2 Varianten', '3 Varianten', '5 Varianten'], default: '3 Varianten', type: 'select' },
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Verfeinerung von Schlüsselbotschaften', description: 'Marketer nutzen den Satz-Umformulierer, um kritische Sätze wie Überschriften, Slogans und Handlungsaufrufe zu perfektionieren.' },
      { title: 'E-Mail-Kommunikation verbessern', description: 'Berufstätige können unklare Sätze in wichtigen E-Mails umformulieren, bevor sie sie senden.' },
      { title: 'Unterstützung beim Bearbeiten', description: 'Autoren nutzen das Tool, wenn ein Satz nicht funktioniert und sie Alternativen erkunden möchten.' },
    ],
    faqs: [
      { question: 'Was ist der Unterschied zwischen Satz-Umformulieren und Paraphrasieren?', answer: 'Satz-Umformulieren konzentriert sich auf die Verbesserung eines einzelnen Satzes in Bezug auf Klarheit, Wirkung oder Ton. Paraphrasieren drückt dieselbe Idee in anderen Worten aus.' },
      { question: 'Ist der Satz-Umformulierer kostenlos?', answer: 'Ja, völlig kostenlos ohne Registrierung. Formulieren Sie beliebig viele Sätze um.' },
      { question: 'Wie viele Varianten bekomme ich?', answer: 'Das Tool bietet typischerweise 3 verschiedene Varianten, jede mit einem anderen Verbesserungsansatz.' },
      { question: 'Kann ich angeben, welche Art von Verbesserung ich möchte?', answer: 'Ja, Sie können Ziele wie "klarer", "formeller", "selbstbewusster" oder "kürzer" angeben.' },
      { question: 'Ändert sich die Bedeutung?', answer: 'Nein, alle Varianten behalten Ihre ursprüngliche Bedeutung bei. Das Tool ändert den Ausdruck, nicht die Idee.' },
      { question: 'Warum brauche ich das, wenn ich einen Grammatikprüfer habe?', answer: 'Grammatikprüfer beheben Fehler. Der Satz-Umformulierer verbessert grammatisch korrekte Sätze für mehr Klarheit und Wirkung.' },
      { question: 'Kann ich mehrere Sätze auf einmal umformulieren?', answer: 'Das Tool ist für einzelne Sätze optimiert. Für mehrere Sätze nutzen Sie den Absatz-Umformulierer.' },
      { question: 'Was macht eine Variante besser als eine andere?', answer: 'Es hängt von Ihrem Ziel ab. Das Tool erklärt jede Variante, damit Sie je nach Kontext wählen können.' },
      { question: 'Kann es nicht-deutsche Sätze verarbeiten?', answer: 'Das Tool ist für Deutsch optimiert. Ergebnisse mit anderen Sprachen können variieren.' },
      { question: 'Sollte ich immer die empfohlene Option verwenden?', answer: 'Die Empfehlung basiert auf allgemeinen Präferenzen, aber Sie kennen Ihren Kontext am besten. Wählen Sie basierend auf Ihren spezifischen Bedürfnissen.' },
    ],
  },

  'summarizer': {
    slug: 'summarizer',
    name: 'Zusammenfassungs-Tool',
    title: 'Kostenloses Tool für KI-Zusammenfassungen',
    description: 'Fassen Sie Artikel, Dokumente und Texte sofort zusammen. Erhalten Sie prägnante Zusammenfassungen, die die wichtigsten Punkte erfassen.',
    metaDescription: 'Fassen Sie Artikel, Dokumente und Texte sofort zusammen. Erhalten Sie prägnante Zusammenfassungen, die die wichtigsten Punkte erfassen.',
    inputLabel: 'Text zum Zusammenfassen...',
    inputPlaceholder: 'Fügen Sie den zu zusammenfassenden Text ein...',
    buttonText: 'Zusammenfassen',
    maxLength: 8192,
    options: [
      {
        name: 'length',
        label: 'Zusammenfassungslänge',
        choices: ['Kurz (1-2 Sätze)', 'Mittel (3-5 Sätze)', 'Detailliert (Absatz)'],
        default: 'Mittel (3-5 Sätze)',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Zusammenfassungsstil',
        choices: ['Stichpunkte', 'Fließtext', 'Kernpunkte'],
        default: 'Fließtext',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at summarizing complex content into clear, concise summaries that capture essential information.

## CORE RULES
- Identify and extract the main ideas
- Preserve factual accuracy
- Maintain logical structure
- Remove unnecessary details
- Create readable output

## LENGTH OPTIONS
### Short (1-2 sentences)
- Only the most critical point
- Highly condensed

### Medium (3-5 sentences)
- Main points covered
- Key supporting details

### Detailed (Paragraph)
- Comprehensive coverage
- Important nuances included

## STYLE OPTIONS
### Bullet Points
- List format
- Easy scanning
- Clear hierarchy

### Paragraph
- Flowing prose
- Connected ideas
- Narrative structure

### Key Points
- Numbered main ideas
- Direct statements
- Action-oriented

Length: {{length}}
Style: {{style}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Recherche und Studium', description: 'Studenten fassen lange Artikel und Quellen für effiziente Recherche zusammen.' },
      { title: 'Geschäftsdokumente', description: 'Berufstätige kondensieren Berichte und Dokumente für schnelle Übersichten.' },
      { title: 'Inhaltskonsum', description: 'Leser erfassen die Hauptpunkte langer Artikel ohne den gesamten Text zu lesen.' },
    ],
    faqs: [
      { question: 'Wie funktioniert der Zusammenfasser?', answer: 'Das Tool analysiert Ihren Text, identifiziert Hauptideen und kondensiert sie in eine klare Zusammenfassung unter Beibehaltung der Genauigkeit.' },
      { question: 'Wie lang kann mein Text sein?', answer: 'Das Tool verarbeitet Texte bis zu mehreren tausend Wörtern. Für sehr lange Dokumente teilen Sie sie in Abschnitte.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Nutzungslimits.' },
      { question: 'Kann ich die Zusammenfassungslänge wählen?', answer: 'Ja, wählen Sie zwischen kurz (1-2 Sätze), mittel (3-5 Sätze) oder detailliert (Absatz).' },
      { question: 'Funktioniert es für technische Inhalte?', answer: 'Ja, das Tool kann technische und fachliche Texte verarbeiten.' },
      { question: 'Bleibt die Bedeutung erhalten?', answer: 'Ja, das Tool bewahrt die Hauptideen und faktische Genauigkeit.' },
      { question: 'Kann ich Stichpunkte statt Absätze bekommen?', answer: 'Ja, Sie können zwischen Stichpunkten, Fließtext oder Kernpunkten wählen.' },
      { question: 'Muss ich mich registrieren?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Kann ich die Zusammenfassung bearbeiten?', answer: 'Ja, die Ausgabe ist ein Ausgangspunkt, den Sie nach Bedarf anpassen können.' },
      { question: 'Für welche Dokumente funktioniert es am besten?', answer: 'Artikel, Berichte, Forschungsarbeiten, Nachrichten und jeder textbasierte Inhalt.' },
    ],
  },

  'outline-generator': {
    slug: 'outline-generator',
    name: 'Gliederungs-Generator',
    title: 'Kostenloser KI-Outline-Generator',
    description: 'Erstellen Sie strukturierte Gliederungen für Aufsätze, Artikel, Präsentationen und mehr. Organisieren Sie Ihre Ideen mit Leichtigkeit.',
    metaDescription: 'Erstellen Sie strukturierte Gliederungen für Aufsätze, Artikel, Präsentationen und mehr. Organisieren Sie Ihre Ideen mit Leichtigkeit.',
    inputLabel: 'Thema für die Gliederung...',
    inputPlaceholder: 'z.B. die Auswirkungen künstlicher Intelligenz auf das Gesundheitswesen',
    buttonText: 'Gliederung Generieren',
    maxLength: 2048,
    options: [
      {
        name: 'type',
        label: 'Gliederungstyp',
        choices: ['Aufsatz', 'Artikel/Blog', 'Präsentation', 'Forschungsarbeit', 'Allgemein'],
        default: 'Aufsatz',
        type: 'select',
      },
      {
        name: 'depth',
        label: 'Detailtiefe',
        choices: ['Basis (Hauptabschnitte)', 'Standard (mit Unterpunkten)', 'Detailliert (vollständige Struktur)'],
        default: 'Standard (mit Unterpunkten)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating well-organized outlines for various content types.

## CORE RULES
- Create logical, hierarchical structures
- Include main sections and subsections as needed
- Ensure comprehensive topic coverage
- Maintain clear organization
- Adapt to the content type

## OUTLINE TYPES
### Essay
- Introduction with thesis
- Body paragraphs with arguments
- Conclusion

### Article/Blog
- Attention-grabbing intro
- Key points with examples
- Practical takeaways

### Presentation
- Opening hook
- Main sections
- Call to action

### Research Paper
- Introduction and background
- Methodology
- Findings and discussion
- Conclusion

## DEPTH LEVELS
### Basic: Main sections only
### Standard: Sections with key subsections
### Detailed: Complete hierarchical structure

Type: {{type}}
Depth: {{depth}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Akademisches Schreiben', description: 'Studenten erstellen Gliederungen für Aufsätze und Forschungsarbeiten vor dem Schreiben.' },
      { title: 'Content-Planung', description: 'Autoren strukturieren Blog-Beiträge und Artikel für bessere Organisation.' },
      { title: 'Präsentationsvorbereitung', description: 'Berufstätige planen Präsentationsstrukturen und Folienabläufe.' },
    ],
    faqs: [
      { question: 'Was ist ein Gliederungs-Generator?', answer: 'Ein Tool, das strukturierte Gliederungen basierend auf Ihrem Thema erstellt und Ihnen hilft, Ideen vor dem Schreiben zu organisieren.' },
      { question: 'Für welche Inhaltstypen kann ich Gliederungen erstellen?', answer: 'Aufsätze, Blog-Beiträge, Artikel, Präsentationen, Forschungsarbeiten und allgemeine Dokumente.' },
      { question: 'Kann ich die Detailtiefe wählen?', answer: 'Ja, von Basis (Hauptabschnitte) bis Detailliert (vollständige hierarchische Struktur).' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Einschränkungen.' },
      { question: 'Kann ich die Gliederung anpassen?', answer: 'Ja, die Gliederung ist ein Ausgangspunkt, den Sie nach Bedarf ändern können.' },
      { question: 'Funktioniert es für technische Themen?', answer: 'Ja, das Tool kann Gliederungen für verschiedene Fachgebiete erstellen.' },
      { question: 'Wie detailliert ist die Ausgabe?', answer: 'Abhängig von der gewählten Tiefe kann die Gliederung Hauptpunkte oder vollständige Unterstrukturen enthalten.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Kann ich mehrere Gliederungen erstellen?', answer: 'Ja, generieren Sie beliebig viele Gliederungen.' },
      { question: 'Ersetzt dies das eigene Schreiben?', answer: 'Nein, es hilft bei der Planung. Das eigentliche Schreiben bleibt bei Ihnen.' },
    ],
  },

  'conclusion-generator': {
    slug: 'conclusion-generator',
    name: 'Schlussfolgerungs-Generator',
    title: 'Kostenloser KI Conclusion Generator',
    description: 'Generieren Sie überzeugende Schlussfolgerungen für Aufsätze, Artikel und Berichte. Fassen Sie Ihre wichtigsten Punkte wirkungsvoll zusammen.',
    metaDescription: 'Generieren Sie überzeugende Schlussfolgerungen für Aufsätze, Artikel und Berichte. Fassen Sie Ihre wichtigsten Punkte wirkungsvoll zusammen.',
    inputLabel: 'Hauptpunkte für die Schlussfolgerung...',
    inputPlaceholder: 'z.B. Erneuerbare Energien sind wesentlich für die Nachhaltigkeit, die Kosten sinken, und Regierungen sollten mehr investieren',
    buttonText: 'Schlussfolgerung Generieren',
    maxLength: 2048,
    options: [
      {
        name: 'type',
        label: 'Art der Schlussfolgerung',
        choices: ['Zusammenfassend', 'Handlungsaufruf', 'Zum Nachdenken anregend', 'Zukunftsorientiert'],
        default: 'Zusammenfassend',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Länge',
        choices: ['Kurz (2-3 Sätze)', 'Mittel (4-5 Sätze)', 'Lang (Absatz)'],
        default: 'Mittel (4-5 Sätze)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at writing compelling conclusions that effectively wrap up content and leave lasting impressions.

## CORE RULES
- Summarize key points without repetition
- Provide closure while maintaining interest
- Match the tone of the content
- End with impact
- Avoid introducing new ideas

## CONCLUSION TYPES
### Summary
- Recap main arguments
- Reinforce thesis
- Clear wrap-up

### Call to Action
- Inspire action
- Clear next steps
- Motivational tone

### Thought-Provoking
- Open-ended reflection
- Broader implications
- Leave impact

### Forward-Looking
- Future possibilities
- What comes next
- Optimistic outlook

Type: {{type}}
Length: {{length}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Akademisches Schreiben', description: 'Studenten generieren Schlussfolgerungen für Aufsätze und Forschungsarbeiten.' },
      { title: 'Blog-Beiträge', description: 'Blogger erstellen wirkungsvolle Abschlüsse für ihre Artikel.' },
      { title: 'Geschäftsberichte', description: 'Berufstätige verfassen überzeugende Schlussfolgerungen für Präsentationen und Berichte.' },
    ],
    faqs: [
      { question: 'Was macht eine gute Schlussfolgerung aus?', answer: 'Eine gute Schlussfolgerung fasst Hauptpunkte zusammen, bietet Abschluss und hinterlässt einen bleibenden Eindruck beim Leser.' },
      { question: 'Sollte ich in der Schlussfolgerung neue Informationen einführen?', answer: 'Nein, Schlussfolgerungen sollten zusammenfassen und abschließen, nicht neue Ideen einführen.' },
      { question: 'Kann ich verschiedene Schlussfolgerungsarten wählen?', answer: 'Ja, wählen Sie zwischen Zusammenfassung, Handlungsaufruf, Zum Nachdenken anregend oder Zukunftsorientiert.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Anmeldung.' },
      { question: 'Wie lang sollte eine Schlussfolgerung sein?', answer: 'Wählen Sie zwischen kurz (2-3 Sätze), mittel (4-5 Sätze) oder lang (Absatz) je nach Bedarf.' },
      { question: 'Funktioniert es für alle Themen?', answer: 'Ja, das Tool kann Schlussfolgerungen für verschiedene Themen und Inhaltstypen generieren.' },
      { question: 'Kann ich die Ausgabe bearbeiten?', answer: 'Ja, passen Sie die generierte Schlussfolgerung nach Bedarf an.' },
      { question: 'Wie gebe ich meine Hauptpunkte ein?', answer: 'Listen Sie Ihre wichtigsten Argumente oder Punkte auf, die zusammengefasst werden sollen.' },
      { question: 'Passt die Schlussfolgerung zu meinem Ton?', answer: 'Das Tool passt sich dem Inhalt an. Geben Sie bei Bedarf zusätzlichen Kontext.' },
      { question: 'Kann ich mehrere Varianten generieren?', answer: 'Ja, generieren Sie verschiedene Versionen und wählen Sie die beste.' },
    ],
  },

  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    title: 'Kostenloser KI-Lorem-Ipsum-Generator',
    description: 'Generieren Sie Lorem Ipsum Platzhaltertext für Designs, Mockups und Layouts.',
    metaDescription: 'Generieren Sie Lorem Ipsum Platzhaltertext für Designs, Mockups und Layouts. Wählen Sie traditionelle oder moderne Alternativen. Sofort...',
    inputLabel: 'Benötigte Menge...',
    inputPlaceholder: 'z.B. 3 Absätze, 500 Wörter oder 10 Sätze',
    buttonText: 'Text Generieren',
    maxLength: 256,
    options: [
      { name: 'type', label: 'Texttyp', choices: ['Traditionelles Lorem Ipsum', 'Hipster Ipsum', 'Business Ipsum', 'Einfaches Deutsch'], default: 'Traditionelles Lorem Ipsum', type: 'select' },
      { name: 'amount', label: 'Menge', choices: ['1 Absatz', '3 Absätze', '5 Absätze', '500 Wörter', '1000 Wörter'], default: '3 Absätze', type: 'select' },
      { name: 'format', label: 'Format', choices: ['Reiner Text', 'Mit HTML-Tags'], default: 'Reiner Text', type: 'select' },
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
### IF TYPE = "Business Ipsum"
Corporate buzzword filler with terms like synergy, leverage, paradigm.
### IF TYPE = "Plain German"
Simple readable sentences acknowledging this is placeholder content.
## FORMAT OPTIONS
### IF FORMAT = "Plain text" - Clean text with paragraph breaks
### IF FORMAT = "With HTML tags" - Wrap paragraphs in <p> tags
## OUTPUT FORMAT
Type: {{type}}
Amount: {{amount}}
Format: {{format}}
Generate the requested placeholder text, ready to copy-paste.`,
    useCases: [
      { title: 'Web- und UI-Design-Mockups', description: 'Designer verwenden Lorem Ipsum, um Layouts und Wireframes mit realistisch aussehendem Text zu füllen.' },
      { title: 'Entwicklung und Tests', description: 'Entwickler nutzen Platzhaltertext zum Testen von Layouts und Typografie-Einstellungen.' },
      { title: 'Print- und Grafikdesign', description: 'Grafikdesigner nutzen Lorem Ipsum für Broschüren und andere Druckmaterialien.' },
    ],
    faqs: [
      { question: 'Was ist Lorem Ipsum?', answer: 'Lorem Ipsum ist lateinbasierter Platzhaltertext, der seit den 1500er Jahren in Design und Verlagswesen verwendet wird.' },
      { question: 'Ist der Generator kostenlos?', answer: 'Ja, völlig kostenlos ohne Limits.' },
      { question: 'Warum Lorem Ipsum statt echtem Text?', answer: 'Bedeutungsloser Platzhaltertext verhindert, dass Betrachter sich auf Inhalte konzentrieren, wenn sie Design bewerten sollten.' },
      { question: 'Ist Lorem Ipsum echtes Latein?', answer: 'Es basiert auf einem Werk von Cicero aus 45 v. Chr., ist aber so verändert, dass es kein korrektes Latein mehr ist.' },
      { question: 'Gibt es Alternativen zum traditionellen Lorem Ipsum?', answer: 'Ja, das Tool bietet Hipster Ipsum, Business Ipsum und einfachen deutschen Platzhaltertext.' },
      { question: 'In welchem Format wird der Text bereitgestellt?', answer: 'Reiner Text oder HTML-formatiert mit Absatz-Tags für Webnutzung.' },
      { question: 'Kann ich die genaue Textmenge angeben?', answer: 'Ja, wählen Sie nach Absatzanzahl, Wortanzahl oder Satzanzahl.' },
      { question: 'Beeinflusst Lorem Ipsum SEO?', answer: 'Platzhaltertext sollte vor der Veröffentlichung ersetzt werden. Lorem Ipsum auf einer Live-Site kann SEO schaden.' },
      { question: 'Kann ich Lorem Ipsum für jedes Projekt verwenden?', answer: 'Ja, Lorem Ipsum ist gemeinfrei und hat keine Urheberrechtsbeschränkungen.' },
      { question: 'Warum beginnt Lorem Ipsum mit "Lorem ipsum dolor sit amet"?', answer: 'Dies ist seit Jahrhunderten der traditionelle Anfang. Die Worte stammen aus einem verstümmelten Abschnitt von Ciceros Werk.' },
    ],
  },

  'seo-title-generator': {
    slug: 'seo-title-generator',
    name: 'SEO-Titel-Generator',
    title: 'Kostenloser KI Title Generator',
    description: 'Generieren Sie suchoptimierte Titel-Tags, die höher ranken und mehr Klicks erhalten. Unsere KI erstellt perfekt dimensionierte Titel mit Keywords an den richtigen Positionen.',
    metaDescription: 'Generieren Sie suchoptimierte Titel-Tags, die höher ranken und mehr Klicks erhalten. Unsere KI erstellt perfekt dimensionierte Titel mit...',
    inputLabel: 'Thema oder Keyword...',
    inputPlaceholder: 'z.B. beste Projektmanagement-Tools für Remote-Teams',
    buttonText: 'SEO-Titel Generieren',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Anzahl Titel',
        choices: ['3 Titel', '5 Titel', '10 Titel'],
        default: '5 Titel',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Formell', 'Locker', 'Überzeugend'],
        default: 'Formell',
        type: 'select',
      },
      {
        name: 'include_year',
        label: 'Jahr einbeziehen',
        choices: ['Ja', 'Nein'],
        default: 'Ja',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert SEO specialist and copywriter who creates search-optimized titles (title tags) that maximize both rankings and click-through rates.

## CORE SEO TITLE PRINCIPLES
1. **Primary Keyword Prominence**: Target keyword should appear early in the title
2. **Search Intent Matching**: Title must align with what users expect to find
3. **SERP Competition**: Title should stand out among competing results
4. **Click-Through Optimization**: Compelling enough to win clicks against competitors
5. **Accurate Representation**: Must truthfully represent the page content

## SEO TITLE TECHNICAL REQUIREMENTS
- Character limit: 50-60 characters ideal (max 60)
- Pixel width: ~580 pixels max for full display
- Keyword position: Primary keyword within first 5-7 words
- Format: Often [Primary Phrase] | [Secondary/Brand]

## TITLE FORMATS BY INTENT
### Informational
- "How to [Action] in [Year]"
- "[Number] Ways to [Achieve Result]"
- "What Is [Topic]: Complete Guide"

### Commercial
- "Best [Product] for [Use Case] ([Year])"
- "[Number] Top [Products] Compared"
- "[Product] vs [Product]: Which Is Better?"

### Transactional
- "Buy [Product]: [Key Benefit]"
- "[Product] - [USP] | [Brand]"

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Include Year: {{include_year}}

## OUTPUT FORMAT
For each title:
1. The title itself
2. Character count
3. Primary keyword position
4. Why it works

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Blog- und Artikel-SEO', description: 'Content-Ersteller generieren optimierte Titel für bessere Suchmaschinenplatzierungen.' },
      { title: 'Produktseiten-Optimierung', description: 'E-Commerce-Teams erstellen klickwürdige Titel für Produktlistings.' },
      { title: 'Website-Seitenoptimierung', description: 'Marketer verbessern Titel-Tags auf bestehenden Seiten für bessere Performance.' },
    ],
    faqs: [
      { question: 'Was ist ein SEO-Titel-Tag?', answer: 'Ein Titel-Tag ist das HTML-Element, das den Titel einer Webseite definiert und in Suchergebnissen und Browser-Tabs erscheint.' },
      { question: 'Wie lang sollte mein Titel-Tag sein?', answer: 'Ideal sind 50-60 Zeichen. Längere Titel werden in Suchergebnissen abgeschnitten.' },
      { question: 'Wo sollte mein Keyword erscheinen?', answer: 'Primäre Keywords sollten früh im Titel erscheinen, idealerweise in den ersten 5-7 Wörtern.' },
      { question: 'Sollte ich das Jahr einbeziehen?', answer: 'Für zeitbezogene Inhalte kann das aktuelle Jahr die Klickrate erhöhen, da Nutzer aktuelle Inhalte suchen.' },
      { question: 'Kann ein Titel zu kurz sein?', answer: 'Ja, sehr kurze Titel nutzen den verfügbaren Platz nicht aus und können weniger informativ wirken.' },
      { question: 'Ist das Tool kostenlos?', answer: 'Ja, völlig kostenlos ohne Einschränkungen.' },
      { question: 'Kann ich verschiedene Varianten vergleichen?', answer: 'Ja, das Tool generiert mehrere Optionen zum Vergleichen.' },
      { question: 'Beeinflusst der Titel wirklich Rankings?', answer: 'Ja, der Titel-Tag ist eines der wichtigsten On-Page-SEO-Elemente.' },
      { question: 'Sollte jede Seite einen einzigartigen Titel haben?', answer: 'Ja, jede Seite braucht einen einzigartigen, beschreibenden Titel.' },
      { question: 'Kann ich Markenamen einbeziehen?', answer: 'Ja, oft am Ende des Titels nach einem Trennzeichen wie | oder -.' },
    ],
  },

  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: 'Meta-Beschreibungs-Generator',
    title: 'Kostenloser KI-Meta-Description Generator',
    description: 'Erstellen Sie überzeugende Meta-Beschreibungen, die Klicks erzielen. Unsere KI schreibt SEO-optimierte Beschreibungen mit der perfekten Länge und Keywords.',
    metaDescription: 'Erstellen Sie überzeugende Meta-Beschreibungen, die Klicks erzielen. Unsere KI schreibt SEO-optimierte Beschreibungen mit der perfekten...',
    inputLabel: 'Seite oder Thema beschreiben...',
    inputPlaceholder: 'z.B. Blog-Beitrag über die Vorteile der Meditation für Anfänger',
    buttonText: 'Beschreibungen Generieren',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Anzahl Beschreibungen',
        choices: ['3 Beschreibungen', '5 Beschreibungen'],
        default: '3 Beschreibungen',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Informativ', 'Überzeugend', 'Freundlich', 'Professionell'],
        default: 'Informativ',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert SEO copywriter who creates compelling meta descriptions that maximize click-through rates.

## CORE PRINCIPLES
1. **Optimal Length**: 150-160 characters for full display
2. **Include Keywords**: Naturally incorporate target keywords
3. **Clear Value**: Tell users what they'll get
4. **Call to Action**: Encourage clicks
5. **Accurate Preview**: Reflect actual page content

## META DESCRIPTION STRUCTURE
- Hook or value statement
- Key information/benefit
- Call to action or engagement prompt

## BEST PRACTICES
- Include primary keyword naturally
- Write in active voice
- Create urgency or curiosity when appropriate
- Avoid duplicate descriptions
- Match search intent

Tone: {{tone}}
Number of Variants: {{number_of_variants}}

## OUTPUT FORMAT
For each description:
1. The meta description
2. Character count
3. Why it works

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Website-SEO-Optimierung', description: 'Websitebetreiber erstellen optimierte Meta-Beschreibungen für bessere Klickraten.' },
      { title: 'Content-Marketing', description: 'Marketer schreiben überzeugende Beschreibungen für Blog-Beiträge und Artikel.' },
      { title: 'E-Commerce', description: 'Online-Shops optimieren Produktseitenbeschreibungen für Suchergebnisse.' },
    ],
    faqs: [
      { question: 'Was ist eine Meta-Beschreibung?', answer: 'Eine Meta-Beschreibung ist ein HTML-Attribut, das eine kurze Zusammenfassung einer Webseite bietet und oft in Suchergebnissen erscheint.' },
      { question: 'Wie lang sollte eine Meta-Beschreibung sein?', answer: 'Ideal sind 150-160 Zeichen. Längere Beschreibungen werden in Suchergebnissen abgeschnitten.' },
      { question: 'Beeinflusst die Meta-Beschreibung Rankings?', answer: 'Nicht direkt, aber sie beeinflusst die Klickrate, was indirekt Rankings beeinflussen kann.' },
      { question: 'Sollte jede Seite eine einzigartige Beschreibung haben?', answer: 'Ja, jede Seite sollte eine einzigartige Meta-Beschreibung haben, die ihren Inhalt widerspiegelt.' },
      { question: 'Ist das Tool kostenlos?', answer: 'Ja, völlig kostenlos ohne Einschränkungen.' },
      { question: 'Kann ich Keywords einbeziehen?', answer: 'Ja, das Tool integriert Keywords natürlich in die Beschreibungen.' },
      { question: 'Was passiert, wenn ich keine Meta-Beschreibung setze?', answer: 'Suchmaschinen extrahieren automatisch Text von der Seite, was möglicherweise nicht optimal ist.' },
      { question: 'Kann ich die Beschreibungen bearbeiten?', answer: 'Ja, die generierten Beschreibungen sind Vorschläge, die Sie anpassen können.' },
      { question: 'Wie oft sollte ich Meta-Beschreibungen aktualisieren?', answer: 'Aktualisieren Sie sie, wenn sich der Seiteninhalt ändert oder die Klickrate verbessert werden soll.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
    ],
  },

  // ==================== BATCH 2: Tools 11-20 ====================

  'ai-content-detector': {
    slug: 'ai-content-detector',
    name: 'KI-Inhaltsdetektor',
    title: 'Kostenloser KI-Detektor',
    description: 'Erkennen Sie, ob Text von einer KI geschrieben wurde. Analysieren Sie Inhalte auf charakteristische KI-Muster.',
    metaDescription: 'Erkennen Sie, ob Text von einer KI geschrieben wurde. Analysieren Sie Inhalte auf charakteristische KI-Muster und erhalten Sie...',
    inputLabel: 'Zu analysierender Text...',
    inputPlaceholder: 'Fügen Sie den zu analysierenden Text hier ein...',
    buttonText: 'Text Analysieren',
    maxLength: 4096,
    options: [
      { name: 'analysis_depth', label: 'Analysetiefe', choices: ['Schnell', 'Standard', 'Detailliert'], default: 'Standard', type: 'select' },
    ],
    systemPrompt: `You are an expert at analyzing text to determine if it was written by AI or a human.

## ANALYSIS CRITERIA
- Sentence structure patterns
- Vocabulary consistency
- Creativity and unpredictability
- Personal voice and style markers
- Natural language flow

## OUTPUT FORMAT
Provide:
1. Overall assessment (Likely AI / Mixed / Likely Human)
2. Confidence level
3. Key indicators found
4. Specific passages that influenced the assessment

Analysis Depth: {{analysis_depth}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Akademische Integrität', description: 'Pädagogen prüfen eingereichte Arbeiten auf KI-generierten Inhalt.' },
      { title: 'Content-Qualitätsprüfung', description: 'Redakteure überprüfen eingereichten Content auf Authentizität.' },
      { title: 'Selbstprüfung', description: 'Autoren prüfen, ob ihr eigener KI-unterstützter Text zu erkennbar maschinell wirkt.' },
    ],
    faqs: [
      { question: 'Wie genau ist die KI-Erkennung?', answer: 'Kein Detektor ist 100% genau. Das Tool bietet Wahrscheinlichkeitsbewertungen basierend auf Textmusteranalyse.' },
      { question: 'Welche Muster erkennt das Tool?', answer: 'Es analysiert Satzstrukturen, Vokabelmuster, Kreativitätsmarker und stilistische Konsistenz.' },
      { question: 'Kann bearbeiteter KI-Text erkannt werden?', answer: 'Stark bearbeiteter Text kann schwerer zu erkennen sein. Das Tool analysiert verbleibende Muster.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Einschränkungen.' },
      { question: 'Werden meine Texte gespeichert?', answer: 'Nein, eingereichte Texte werden nicht gespeichert oder für Training verwendet.' },
      { question: 'Kann es zwischen verschiedenen KIs unterscheiden?', answer: 'Das Tool erkennt allgemeine KI-Muster, identifiziert aber nicht spezifische Modelle.' },
      { question: 'Wie lang sollte der Text sein?', answer: 'Längere Texte liefern zuverlässigere Ergebnisse. Mindestens 100 Wörter werden empfohlen.' },
      { question: 'Funktioniert es für alle Sprachen?', answer: 'Das Tool ist primär für deutsche Texte optimiert.' },
      { question: 'Kann ich das Ergebnis anfechten?', answer: 'Ergebnisse sind Wahrscheinlichkeitsschätzungen, keine definitiven Urteile. Menschliche Überprüfung wird empfohlen.' },
      { question: 'Für welche Texttypen funktioniert es?', answer: 'Alle Texttypen: Aufsätze, Artikel, E-Mails, Berichte und mehr.' },
    ],
  },

  'ai-text-humanizer': {
    slug: 'ai-text-humanizer',
    name: 'KI-Text-Humanisierer',
    title: 'Kostenloser KI-Text- Humanizer',
    description: 'Machen Sie KI-generierten Text menschlicher. Fügen Sie Persönlichkeit, Variationen und natürlichen Fluss hinzu.',
    metaDescription: 'Machen Sie KI-generierten Text menschlicher. Fügen Sie Persönlichkeit, Variationen und natürlichen Fluss hinzu, um KI-Erkennung zu umgehen.',
    inputLabel: 'Zu humanisierender Text...',
    inputPlaceholder: 'Fügen Sie hier Ihren KI-generierten Text ein...',
    buttonText: 'Text Humanisieren',
    maxLength: 4096,
    options: [
      { name: 'intensity', label: 'Humanisierungsgrad', choices: ['Leicht', 'Mittel', 'Stark'], default: 'Mittel', type: 'select' },
      { name: 'style', label: 'Schreibstil', choices: ['Locker', 'Professionell', 'Akademisch', 'Kreativ'], default: 'Professionell', type: 'select' },
    ],
    systemPrompt: `You are an expert at transforming AI-generated text to sound more natural and human-written.

## HUMANIZATION TECHNIQUES
- Add natural variations in sentence length
- Include conversational elements
- Add personal voice markers
- Vary vocabulary unpredictably
- Include minor imperfections that humans naturally make
- Break rigid patterns

## STYLE GUIDELINES
### Casual: Conversational, contractions, personal
### Professional: Polished but not robotic
### Academic: Formal but with human nuances
### Creative: Unique voice, varied rhythm

Intensity: {{intensity}}
Style: {{style}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Content-Verbesserung', description: 'Autoren verbessern KI-Entwürfe, um authentischer zu klingen.' },
      { title: 'Geschäftskommunikation', description: 'Berufstätige machen KI-generierte E-Mails und Berichte persönlicher.' },
      { title: 'Akademisches Schreiben', description: 'Studenten verbessern KI-unterstützte Entwürfe für natürlicheren Klang.' },
    ],
    faqs: [
      { question: 'Was bedeutet Text humanisieren?', answer: 'Humanisierung fügt natürliche Variationen, persönliche Stimme und menschliche Elemente zu maschinell wirkendem Text hinzu.' },
      { question: 'Wird die Bedeutung geändert?', answer: 'Die Kernbedeutung bleibt erhalten, während Ausdruck und Stil natürlicher werden.' },
      { question: 'Kann humanisierter Text immer noch erkannt werden?', answer: 'Starke Humanisierung reduziert Erkennbarkeit erheblich, aber keine Garantie ist möglich.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Limits.' },
      { question: 'Für welche Texte funktioniert es?', answer: 'Alle Texttypen: Aufsätze, Artikel, E-Mails, Berichte, Blog-Beiträge.' },
      { question: 'Kann ich den Humanisierungsgrad wählen?', answer: 'Ja, von leicht bis stark, je nach Bedarf.' },
      { question: 'Werden Grammatikfehler eingeführt?', answer: 'Nein, der Text bleibt grammatisch korrekt, erhält aber natürlichere Variationen.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Kann ich den Stil wählen?', answer: 'Ja, zwischen locker, professionell, akademisch oder kreativ.' },
      { question: 'Wie unterscheidet sich dies vom Umformulieren?', answer: 'Humanisierung fokussiert speziell auf das Entfernen von KI-Mustern, während Umformulieren allgemeine Neuformulierung ist.' },
    ],
  },

  'content-idea-generator': {
    slug: 'content-idea-generator',
    name: 'Content-Ideen-Generator',
    title: 'Kostenloser AI Content Idea Generator',
    description: 'Generieren Sie kreative Content-Ideen für Blogs, Social Media und Marketing. Überwinden Sie Schreibblockaden sofort.',
    metaDescription: 'Generieren Sie kreative Content-Ideen für Blogs, Social Media und Marketing. Überwinden Sie Schreibblockaden mit KI-generierten...',
    inputLabel: 'Thema oder Nische...',
    inputPlaceholder: 'z.B. nachhaltiges Leben, Digitalmarketing, Fitness für Anfänger',
    buttonText: 'Ideen Generieren',
    maxLength: 2048,
    options: [
      { name: 'content_type', label: 'Content-Typ', choices: ['Blog-Beiträge', 'Social Media', 'Video-Ideen', 'Newsletter', 'Alle Typen'], default: 'Alle Typen', type: 'select' },
      { name: 'number_of_ideas', label: 'Anzahl Ideen', choices: ['5 Ideen', '10 Ideen', '15 Ideen'], default: '10 Ideen', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist who generates creative, actionable content ideas.

## IDEA GENERATION PRINCIPLES
- Create specific, actionable topics
- Mix evergreen and trending angles
- Consider SEO potential
- Vary content formats
- Ensure uniqueness and freshness

## CONTENT TYPES
### Blog Posts
- How-to guides
- List posts
- Case studies
- Opinion pieces

### Social Media
- Engaging questions
- Quick tips
- Story ideas
- Interactive content

### Video Ideas
- Tutorials
- Behind-the-scenes
- Interviews
- Reviews

### Newsletter
- Updates
- Curated content
- Exclusive insights
- Reader Q&A

Content Type: {{content_type}}
Number of Ideas: {{number_of_ideas}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Content-Planung', description: 'Marketer füllen Content-Kalender mit frischen Ideen.' },
      { title: 'Überwindung von Schreibblockaden', description: 'Autoren finden Inspiration für neue Beiträge und Artikel.' },
      { title: 'Social-Media-Strategie', description: 'Social-Media-Manager generieren Post-Ideen für verschiedene Plattformen.' },
    ],
    faqs: [
      { question: 'Wie generiert das Tool Ideen?', answer: 'Es analysiert Ihr Thema und generiert kreative, umsetzbare Content-Ideen basierend auf bewährten Formaten und Trends.' },
      { question: 'Sind die Ideen einzigartig?', answer: 'Jede Generierung liefert frische Ideen, obwohl allgemeine Konzepte in der Branche existieren können.' },
      { question: 'Kann ich für verschiedene Plattformen generieren?', answer: 'Ja, wählen Sie spezifische Content-Typen oder lassen Sie alle Typen generieren.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Limits.' },
      { question: 'Wie viele Ideen kann ich generieren?', answer: 'Wählen Sie zwischen 5, 10 oder 15 Ideen pro Generierung.' },
      { question: 'Kann ich die Ideen anpassen?', answer: 'Ja, nutzen Sie die generierten Ideen als Ausgangspunkt und passen Sie sie an.' },
      { question: 'Funktioniert es für jede Nische?', answer: 'Ja, das Tool funktioniert für alle Branchen und Themen.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Enthält es SEO-Tipps?', answer: 'Ideen werden mit SEO-Potenzial im Hinterkopf generiert.' },
      { question: 'Kann ich erneut generieren, wenn mir die Ideen nicht gefallen?', answer: 'Ja, generieren Sie beliebig oft mit demselben oder geändertem Thema.' },
    ],
  },

  'video-script-generator': {
    slug: 'video-script-generator',
    name: 'Video-Skript-Generator',
    title: 'Kostenloser KI-Video-Skript-Generator',
    description: 'Erstellen Sie ansprechende Videoskripte für YouTube, TikTok und mehr. Unsere KI erstellt Skripte, die Zuschauer fesseln.',
    metaDescription: 'Erstellen Sie ansprechende Videoskripte für YouTube, TikTok und mehr. Unsere KI erstellt Skripte, die Zuschauer von Anfang bis Ende fesseln.',
    inputLabel: 'Videothema...',
    inputPlaceholder: 'z.B. 5 Produktivitäts-Tipps für Remote-Arbeiter',
    buttonText: 'Skript Generieren',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Plattform', choices: ['YouTube (Lang)', 'YouTube Shorts', 'TikTok', 'Instagram Reels', 'Allgemein'], default: 'YouTube (Lang)', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Informativ', 'Unterhaltend', 'Inspirierend', 'Locker'], default: 'Informativ', type: 'select' },
      { name: 'length', label: 'Videolänge', choices: ['Kurz (< 1 Min)', 'Mittel (1-5 Min)', 'Lang (5-10 Min)', 'Ausführlich (10+ Min)'], default: 'Mittel (1-5 Min)', type: 'select' },
    ],
    systemPrompt: `You are an expert video scriptwriter who creates engaging scripts for various platforms.

## SCRIPT STRUCTURE
### Hook (First 5-15 seconds)
- Attention-grabbing opening
- Promise of value
- Pattern interrupt

### Body
- Main content points
- Supporting examples
- Visual cues for editing
- Engagement prompts

### Closing
- Summary of key points
- Call to action
- Engagement request

## PLATFORM ADAPTATIONS
### YouTube Long-Form
- Detailed scripts with timestamps
- B-roll suggestions
- Transition notes

### YouTube Shorts / TikTok / Reels
- Punchy, fast-paced
- Hook in first 1-2 seconds
- Trendy formats

Platform: {{platform}}
Tone: {{tone}}
Length: {{length}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'YouTube-Content-Erstellung', description: 'YouTuber erstellen strukturierte Skripte für ihre Videos.' },
      { title: 'Social-Media-Videos', description: 'Creator produzieren Kurzvideos für TikTok und Instagram.' },
      { title: 'Geschäftsvideos', description: 'Unternehmen erstellen Erklär- und Marketingvideos.' },
    ],
    faqs: [
      { question: 'Was enthält ein Videoskript?', answer: 'Hook, Hauptinhalt, Übergänge, Handlungsaufrufe und optional Regieanweisungen.' },
      { question: 'Kann ich die Plattform wählen?', answer: 'Ja, wählen Sie zwischen YouTube, TikTok, Instagram Reels oder allgemein.' },
      { question: 'Enthält das Skript Regieanweisungen?', answer: 'Ja, längere Formate enthalten Vorschläge für B-Roll und visuelle Hinweise.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Einschränkungen.' },
      { question: 'Kann ich die Videolänge wählen?', answer: 'Ja, von kurz (< 1 Min) bis ausführlich (10+ Min).' },
      { question: 'Wie ist der Hook strukturiert?', answer: 'Das Skript beginnt mit einem aufmerksamkeitsstarken Einstieg in den ersten Sekunden.' },
      { question: 'Kann ich das Skript bearbeiten?', answer: 'Ja, das Skript ist ein Ausgangspunkt zur Anpassung.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Funktioniert es für alle Themen?', answer: 'Ja, das Tool kann Skripte für verschiedene Themen erstellen.' },
      { question: 'Enthält es Zeitstempel?', answer: 'Längere YouTube-Skripte können Zeitstempel-Vorschläge enthalten.' },
    ],
  },

  'acronym-generator': {
    slug: 'acronym-generator',
    name: 'Akronym-Generator',
    title: 'Kostenloser KI-Akronym-Generator',
    description: 'Generieren Sie clevere, bedeutungsvolle Akronyme für Projekte, Produkte und Organisationen.',
    metaDescription: 'Generieren Sie clevere, bedeutungsvolle Akronyme für Projekte, Produkte und Organisationen. Erhalten Sie mehrere Optionen mit erweiterten...',
    inputLabel: 'Thema oder Konzept...',
    inputPlaceholder: 'z.B. Kundenfeedback-Verbesserungsinitiative für den Einzelhandel',
    buttonText: 'Akronyme Generieren',
    maxLength: 1024,
    options: [
      { name: 'tone', label: 'Ton', choices: ['Professionell', 'Kreativ', 'Technisch', 'Verspielt'], default: 'Professionell', type: 'select' },
      { name: 'length', label: 'Bevorzugte Länge', choices: ['Kurz (3-4 Buchstaben)', 'Mittel (5-6 Buchstaben)', 'Beliebige Länge'], default: 'Beliebige Länge', type: 'select' },
      { name: 'variants', label: 'Anzahl Optionen', choices: ['3 Optionen', '5 Optionen', '10 Optionen'], default: '5 Optionen', type: 'select' },
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
### IF TONE = "Professional" - Business-appropriate vocabulary
### IF TONE = "Creative" - Playful, unexpected combinations
### IF TONE = "Technical" - Industry-specific terms
### IF TONE = "Playful" - Fun, engaging words
Tone: {{tone}}
Preferred Length: {{length}}
Number of Options: {{variants}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Projekt- und Initiativenbenennung', description: 'Teams erstellen einprägsame Namen für neue Projekte und Programme.' },
      { title: 'Produkt- und Feature-Benennung', description: 'Produktmanager generieren Akronym-basierte Namen für Produkte und Features.' },
      { title: 'Organisations- und Team-Branding', description: 'Führungskräfte finden Akronyme für Teams und Abteilungen.' },
    ],
    faqs: [
      { question: 'Was ist ein Akronym-Generator?', answer: 'Ein Tool, das gekürzte Formen von Phrasen erstellt, bei denen jeder Buchstabe für ein Wort steht.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Anmeldung.' },
      { question: 'Was ist der Unterschied zwischen Akronym und Initialismus?', answer: 'Akronyme werden als Wörter ausgesprochen (NASA), Initialismen buchstabiert (FBI).' },
      { question: 'Wie viele Buchstaben sollte mein Akronym haben?', answer: '3-7 Buchstaben funktionieren typischerweise am besten.' },
      { question: 'Kann ich ein bestimmtes Wort anfordern?', answer: 'Ja, Sie können ein "Backronym" anfordern, bei dem Sie das Wort angeben.' },
      { question: 'Sind die Akronyme einzigartig?', answer: 'Das Tool generiert originelle Kombinationen, aber überprüfen Sie online auf vorhandene Verwendung.' },
      { question: 'Kann ich für verschiedene Branchen generieren?', answer: 'Ja, geben Sie Ihre Branche an für relevante Terminologie.' },
      { question: 'Was, wenn mir die Vorschläge nicht gefallen?', answer: 'Generieren Sie erneut mit angepassten Eingaben.' },
      { question: 'Sollte das Akronym ein echtes Wort ergeben?', answer: 'Nicht unbedingt. Aussprechbare Nicht-Wörter können auch funktionieren.' },
      { question: 'Woran erkenne ich ein gutes Akronym?', answer: 'Gute Akronyme sind leicht auszusprechen, zu merken und repräsentieren ihre Bedeutung genau.' },
    ],
  },

  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: 'Blog-Titel-Generator',
    title: 'Kostenloser AI-Blog-Title-Generator',
    description: 'Generieren Sie klickwürdige Blog-Titel, die Leser anziehen. Unsere KI erstellt aufmerksamkeitsstarke Überschriften.',
    metaDescription: 'Generieren Sie klickwürdige Blog-Titel, die Leser anziehen. Unsere KI erstellt aufmerksamkeitsstarke Überschriften für jeden Themenbereich.',
    inputLabel: 'Blog-Thema...',
    inputPlaceholder: 'z.B. Tipps zur Produktivitätssteigerung im Homeoffice',
    buttonText: 'Titel Generieren',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Titelstil', choices: ['How-To/Anleitung', 'Liste', 'Frage', 'Statement', 'Gemischt'], default: 'Gemischt', type: 'select' },
      { name: 'number_of_titles', label: 'Anzahl Titel', choices: ['5 Titel', '10 Titel', '15 Titel'], default: '10 Titel', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist who creates compelling blog titles that drive clicks and engagement.

## TITLE FORMULAS
### How-To
- "Wie Sie [Ergebnis] in [Zeitraum] erreichen"
- "Der ultimative Leitfaden zu [Thema]"

### Lists
- "[Anzahl] Wege, um [Ziel] zu erreichen"
- "[Anzahl] Fehler, die Sie bei [Thema] vermeiden sollten"

### Questions
- "Was ist [Thema] und warum ist es wichtig?"
- "Warum funktioniert [Methode] nicht?"

### Statements
- "Die Wahrheit über [Thema]"
- "[Thema]: Alles, was Sie wissen müssen"

## BEST PRACTICES
- Keep titles under 60 characters for SEO
- Include power words for emotion
- Be specific and promise value
- Create curiosity

Style: {{style}}
Number of Titles: {{number_of_titles}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Blog-Content-Erstellung', description: 'Blogger finden packende Titel für neue Beiträge.' },
      { title: 'SEO-Optimierung', description: 'Marketer erstellen klickwürdige Titel für bessere Suchergebnisse.' },
      { title: 'Content-Planung', description: 'Redakteure planen Artikel mit überzeugenden Überschriften.' },
    ],
    faqs: [
      { question: 'Was macht einen guten Blog-Titel aus?', answer: 'Gute Titel sind spezifisch, versprechen Wert, erzeugen Neugier und sind unter 60 Zeichen für SEO.' },
      { question: 'Wie lang sollte ein Blog-Titel sein?', answer: 'Ideal sind 50-60 Zeichen, damit er in Suchergebnissen vollständig angezeigt wird.' },
      { question: 'Kann ich verschiedene Stile wählen?', answer: 'Ja, wählen Sie zwischen How-To, Liste, Frage, Statement oder gemischt.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Limits.' },
      { question: 'Sind die Titel SEO-optimiert?', answer: 'Ja, Titel werden mit SEO-Best-Practices erstellt.' },
      { question: 'Kann ich mehrere Optionen generieren?', answer: 'Ja, generieren Sie 5, 10 oder 15 Titel auf einmal.' },
      { question: 'Kann ich die Titel bearbeiten?', answer: 'Ja, nutzen Sie sie als Ausgangspunkt und passen Sie an.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Funktioniert es für alle Themen?', answer: 'Ja, das Tool funktioniert für alle Branchen und Nischen.' },
      { question: 'Enthält es Powerwords?', answer: 'Ja, Titel enthalten emotionale Wörter für mehr Engagement.' },
    ],
  },

  'image-alt-text-generator': {
    slug: 'image-alt-text-generator',
    name: 'Bild-Alt-Text-Generator',
    title: 'Kostenloser AI Image Alt Text Generator',
    description: 'Generieren Sie beschreibende Alt-Texte für Bilder. Verbessern Sie Barrierefreiheit und SEO mit aussagekräftigen Beschreibungen.',
    metaDescription: 'Generieren Sie beschreibende Alt-Texte für Bilder. Verbessern Sie Barrierefreiheit und SEO mit aussagekräftigen Beschreibungen.',
    inputLabel: 'Bild beschreiben...',
    inputPlaceholder: 'z.B. Ein Team von Geschäftsleuten in einer Besprechung um einen Konferenztisch',
    buttonText: 'Alt-Text Generieren',
    maxLength: 1024,
    options: [
      { name: 'purpose', label: 'Verwendungszweck', choices: ['Allgemein', 'E-Commerce', 'Blog/Artikel', 'Social Media'], default: 'Allgemein', type: 'select' },
      { name: 'length', label: 'Länge', choices: ['Kurz (< 50 Zeichen)', 'Mittel (50-100 Zeichen)', 'Beschreibend (100-150 Zeichen)'], default: 'Mittel (50-100 Zeichen)', type: 'select' },
    ],
    systemPrompt: `You are an expert at writing accessible, SEO-friendly image alt text.

## ALT TEXT PRINCIPLES
- Describe the image content accurately
- Be concise but informative
- Include relevant keywords naturally
- Avoid "Bild von" or "Foto von" phrases
- Convey the purpose and context

## PURPOSE ADAPTATIONS
### General: Clear, descriptive text
### E-Commerce: Include product details
### Blog/Article: Support the content context
### Social Media: Engaging descriptions

Purpose: {{purpose}}
Length: {{length}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Website-Barrierefreiheit', description: 'Webdesigner erstellen barrierefreie Alt-Texte für Screenreader.' },
      { title: 'E-Commerce-SEO', description: 'Online-Shops optimieren Produktbilder für Suchmaschinen.' },
      { title: 'Content-Optimierung', description: 'Blogger verbessern Bilder in Artikeln für bessere SEO.' },
    ],
    faqs: [
      { question: 'Was ist Alt-Text?', answer: 'Alt-Text ist eine Beschreibung eines Bildes, die von Screenreadern verwendet wird und bei Nichtladen des Bildes angezeigt wird.' },
      { question: 'Warum ist Alt-Text wichtig?', answer: 'Er verbessert Barrierefreiheit für Sehbehinderte und hilft bei SEO.' },
      { question: 'Wie lang sollte Alt-Text sein?', answer: 'Ideal sind 50-125 Zeichen. Zu lang kann überflüssig sein.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Einschränkungen.' },
      { question: 'Sollte ich Keywords einbeziehen?', answer: 'Ja, wenn relevant, aber natürlich und nicht übertrieben.' },
      { question: 'Was sollte ich vermeiden?', answer: 'Vermeiden Sie "Bild von" oder "Foto von" - beschreiben Sie direkt den Inhalt.' },
      { question: 'Kann ich verschiedene Zwecke wählen?', answer: 'Ja, passen Sie Alt-Text für Allgemein, E-Commerce, Blog oder Social Media an.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Funktioniert es für alle Bildtypen?', answer: 'Ja, für Fotos, Grafiken, Diagramme und mehr.' },
      { question: 'Kann ich den Text bearbeiten?', answer: 'Ja, passen Sie den generierten Text nach Bedarf an.' },
    ],
  },

  'slogan-generator': {
    slug: 'slogan-generator',
    name: 'Slogan-Generator',
    title: 'Kostenloser KI-Slogan-Generator',
    description: 'Erstellen Sie einprägsame Slogans und Taglines für Ihre Marke. Unsere KI generiert unvergessliche Werbesprüche.',
    metaDescription: 'Erstellen Sie einprägsame Slogans und Taglines für Ihre Marke. Unsere KI generiert unvergessliche Werbesprüche, die im Gedächtnis bleiben.',
    inputLabel: 'Marke oder Produkt beschreiben...',
    inputPlaceholder: 'z.B. Umweltfreundliches Reinigungsunternehmen, das natürliche Produkte verwendet',
    buttonText: 'Slogans Generieren',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'Ton', choices: ['Professionell', 'Freundlich', 'Verspielt', 'Inspirierend', 'Luxuriös'], default: 'Professionell', type: 'select' },
      { name: 'number_of_slogans', label: 'Anzahl Slogans', choices: ['5 Slogans', '10 Slogans', '15 Slogans'], default: '10 Slogans', type: 'select' },
    ],
    systemPrompt: `You are an expert brand copywriter who creates memorable slogans and taglines.

## SLOGAN PRINCIPLES
- Be concise (3-7 words ideal)
- Be memorable and catchy
- Communicate brand value
- Evoke emotion
- Be unique and distinctive

## SLOGAN TYPES
- Benefit-focused: What you get
- Emotional: How you feel
- Action-oriented: What to do
- Descriptive: What we are
- Question-based: Make them think

Tone: {{tone}}
Number of Slogans: {{number_of_slogans}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Marken-Branding', description: 'Unternehmen entwickeln unvergessliche Taglines für ihre Marke.' },
      { title: 'Marketingkampagnen', description: 'Marketer erstellen Slogans für Werbekampagnen.' },
      { title: 'Produktlancierungen', description: 'Produktmanager finden einprägsame Sprüche für neue Produkte.' },
    ],
    faqs: [
      { question: 'Was macht einen guten Slogan aus?', answer: 'Gute Slogans sind kurz, einprägsam, kommunizieren Wert und erzeugen Emotion.' },
      { question: 'Wie lang sollte ein Slogan sein?', answer: 'Ideal sind 3-7 Wörter für maximale Einprägsamkeit.' },
      { question: 'Kann ich verschiedene Töne wählen?', answer: 'Ja, von professionell bis verspielt, passend zu Ihrer Marke.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Limits.' },
      { question: 'Wie viele Slogans kann ich generieren?', answer: 'Wählen Sie zwischen 5, 10 oder 15 Slogans pro Generierung.' },
      { question: 'Sind die Slogans einzigartig?', answer: 'Jede Generierung erstellt frische Slogans, überprüfen Sie aber auf Markenrechtskonflikte.' },
      { question: 'Kann ich die Slogans bearbeiten?', answer: 'Ja, nutzen Sie sie als Inspiration und passen Sie an.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Funktioniert es für alle Branchen?', answer: 'Ja, das Tool funktioniert für jede Branche und jeden Markt.' },
      { question: 'Wie wähle ich den besten Slogan?', answer: 'Testen Sie Favoriten mit Ihrer Zielgruppe und wählen Sie den einprägsamsten.' },
    ],
  },

  'product-description-generator': {
    slug: 'product-description-generator',
    name: 'Produktbeschreibungs-Generator',
    title: 'Kostenloser AI Product Description Generator',
    description: 'Erstellen Sie überzeugende Produktbeschreibungen, die verkaufen. Unsere KI schreibt konversionsoptimierte Texte.',
    metaDescription: 'Erstellen Sie überzeugende Produktbeschreibungen, die verkaufen. Unsere KI schreibt konversionsoptimierte Texte für Ihren Online-Shop.',
    inputLabel: 'Produkt beschreiben...',
    inputPlaceholder: 'z.B. Bluetooth-Kopfhörer mit Geräuschunterdrückung und 30 Stunden Akkulaufzeit',
    buttonText: 'Beschreibung Generieren',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'Ton', choices: ['Professionell', 'Freundlich', 'Luxuriös', 'Lässig', 'Technisch'], default: 'Professionell', type: 'select' },
      { name: 'length', label: 'Länge', choices: ['Kurz (50-100 Wörter)', 'Mittel (100-200 Wörter)', 'Lang (200-300 Wörter)'], default: 'Mittel (100-200 Wörter)', type: 'select' },
    ],
    systemPrompt: `You are an expert e-commerce copywriter who creates compelling product descriptions.

## PRODUCT DESCRIPTION STRUCTURE
1. Headline: Attention-grabbing opener
2. Benefits: What the customer gains
3. Features: Key specifications
4. Social proof hint: Trust signals
5. Call to action: Next step

## PERSUASION TECHNIQUES
- Focus on benefits over features
- Use sensory language
- Address pain points
- Create urgency when appropriate
- Include specifications naturally

Tone: {{tone}}
Length: {{length}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'E-Commerce-Shops', description: 'Online-Händler erstellen überzeugende Produkttexte.' },
      { title: 'Marktplatz-Listings', description: 'Verkäufer optimieren Produktbeschreibungen für Amazon, eBay etc.' },
      { title: 'Produktkataloge', description: 'Unternehmen erstellen konsistente Beschreibungen für Kataloge.' },
    ],
    faqs: [
      { question: 'Was macht eine gute Produktbeschreibung aus?', answer: 'Gute Beschreibungen fokussieren auf Vorteile, nutzen überzeugende Sprache und enthalten klare Handlungsaufrufe.' },
      { question: 'Wie lang sollte eine Produktbeschreibung sein?', answer: 'Es hängt vom Produkt ab. Einfache Produkte: 50-100 Wörter, komplexe: 200-300 Wörter.' },
      { question: 'Sollte ich mich auf Vorteile oder Features konzentrieren?', answer: 'Führen Sie mit Vorteilen (was der Kunde gewinnt) und unterstützen Sie mit Features (Spezifikationen).' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Einschränkungen.' },
      { question: 'Kann ich verschiedene Töne wählen?', answer: 'Ja, von professionell bis luxuriös, passend zu Ihrer Marke.' },
      { question: 'Enthält es SEO-Keywords?', answer: 'Das Tool integriert relevante Keywords natürlich im Text.' },
      { question: 'Kann ich die Beschreibung bearbeiten?', answer: 'Ja, nutzen Sie sie als Ausgangspunkt und passen Sie an.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Funktioniert es für alle Produkttypen?', answer: 'Ja, von Elektronik bis Mode, für alle Produkte.' },
      { question: 'Kann ich mehrere Varianten generieren?', answer: 'Ja, generieren Sie beliebig oft für verschiedene Optionen.' },
    ],
  },

  // ==================== BATCH 3: Tools 21-30 ====================

  'landing-page-generator': {
    slug: 'landing-page-generator',
    name: 'Landingpage-Generator',
    title: 'Kostenloser AI Landing Page Generator',
    description: 'Erstellen Sie konversionsstarke Landingpage-Texte. Unsere KI schreibt überzeugende Headlines, Vorteile und Calls-to-Action.',
    metaDescription: 'Erstellen Sie konversionsstarke Landingpage-Texte. Unsere KI schreibt überzeugende Headlines, Vorteile und Calls-to-Action für höhere...',
    inputLabel: 'Produkt oder Service beschreiben...',
    inputPlaceholder: 'z.B. SaaS-Tool für Projektmanagement mit Echtzeit-Zusammenarbeit',
    buttonText: 'Landingpage Generieren',
    maxLength: 2048,
    options: [
      { name: 'page_type', label: 'Seitentyp', choices: ['Produkt-Launch', 'Lead-Generierung', 'SaaS/App', 'E-Commerce', 'Event/Webinar'], default: 'Lead-Generierung', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Professionell', 'Freundlich', 'Dringend', 'Inspirierend'], default: 'Professionell', type: 'select' },
    ],
    systemPrompt: `You are an expert conversion copywriter who creates high-converting landing page copy.

## LANDING PAGE STRUCTURE
1. Headline: Clear value proposition
2. Subheadline: Supporting statement
3. Benefits: 3-5 key benefits
4. Features: Key features with benefits
5. Social Proof: Trust elements
6. CTA: Clear call to action

## CONVERSION PRINCIPLES
- Focus on the transformation
- Address pain points
- Create urgency
- Build trust
- Clear single CTA

Page Type: {{page_type}}
Tone: {{tone}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Produkt-Launches', description: 'Unternehmen erstellen überzeugende Landingpages für neue Produkte.' },
      { title: 'Lead-Generierung', description: 'Marketer erstellen Opt-in-Seiten für E-Mail-Listen.' },
      { title: 'SaaS-Marketing', description: 'Software-Unternehmen erstellen konversionsstarke Produktseiten.' },
    ],
    faqs: [
      { question: 'Was enthält der Landingpage-Text?', answer: 'Headline, Subheadline, Vorteile, Features, Social-Proof-Elemente und Call-to-Action.' },
      { question: 'Für welche Seitentypen funktioniert es?', answer: 'Produkt-Launch, Lead-Generierung, SaaS/App, E-Commerce und Event-Seiten.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Limits.' },
      { question: 'Enthält es CTAs?', answer: 'Ja, jede Landingpage enthält überzeugende Handlungsaufrufe.' },
      { question: 'Kann ich den Ton anpassen?', answer: 'Ja, von professionell bis dringend, passend zu Ihrer Kampagne.' },
      { question: 'Ist der Text SEO-optimiert?', answer: 'Der Fokus liegt auf Konversion, aber Keywords können integriert werden.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Kann ich den Text bearbeiten?', answer: 'Ja, nutzen Sie ihn als Ausgangspunkt und passen Sie an.' },
      { question: 'Wie lang ist der generierte Text?', answer: 'Typischerweise alle wichtigen Sektionen einer Landingpage.' },
      { question: 'Enthält es Vorteile und Features?', answer: 'Ja, strukturierte Vorteile und Features sind enthalten.' },
    ],
  },

  'google-ads-copy-generator': {
    slug: 'google-ads-copy-generator',
    name: 'Google-Ads-Copy-Generator',
    title: 'Kostenloser AI Google Ads Copy Generator',
    description: 'Erstellen Sie klickstarke Google-Ads-Texte. Unsere KI schreibt überzeugende Anzeigen, die Klicks und Konversionen steigern.',
    metaDescription: 'Erstellen Sie klickstarke Google-Ads-Texte. Unsere KI schreibt überzeugende Anzeigen, die Klicks und Konversionen steigern.',
    inputLabel: 'Produkt oder Service beschreiben...',
    inputPlaceholder: 'z.B. Online-Buchhaltungssoftware für Kleinunternehmer',
    buttonText: 'Anzeigen Generieren',
    maxLength: 2048,
    options: [
      { name: 'ad_type', label: 'Anzeigentyp', choices: ['Suchanzeige', 'Responsive Suchanzeige', 'Display-Anzeige'], default: 'Suchanzeige', type: 'select' },
      { name: 'goal', label: 'Ziel', choices: ['Leads', 'Verkäufe', 'Traffic', 'Brand Awareness'], default: 'Leads', type: 'select' },
    ],
    systemPrompt: `You are an expert PPC copywriter who creates high-performing Google Ads copy.

## GOOGLE ADS STRUCTURE
### Search Ads
- Headlines: 3 x 30 characters max
- Descriptions: 2 x 90 characters max
- Display URL paths

### BEST PRACTICES
- Include keywords naturally
- Strong call to action
- Unique value proposition
- Create urgency
- Address search intent

Ad Type: {{ad_type}}
Goal: {{goal}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'PPC-Kampagnen', description: 'Marketer erstellen Anzeigentexte für Google-Ads-Kampagnen.' },
      { title: 'A/B-Testing', description: 'Werbetreibende generieren Varianten zum Testen.' },
      { title: 'Kampagnen-Skalierung', description: 'Agenturen erstellen schnell Anzeigen für mehrere Kunden.' },
    ],
    faqs: [
      { question: 'Was enthält eine generierte Anzeige?', answer: 'Headlines, Beschreibungen und Display-URL-Pfade gemäß Google-Spezifikationen.' },
      { question: 'Hält es sich an Zeichenlimits?', answer: 'Ja, alle Elemente entsprechen den Google-Ads-Zeichenbegrenzungen.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Einschränkungen.' },
      { question: 'Kann ich verschiedene Anzeigentypen erstellen?', answer: 'Ja, Such-, responsive Such- und Display-Anzeigen.' },
      { question: 'Enthält es Keywords?', answer: 'Das Tool integriert relevante Keywords natürlich.' },
      { question: 'Kann ich mehrere Varianten generieren?', answer: 'Ja, generieren Sie beliebig oft für A/B-Tests.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Sind die Anzeigen konversionsoptimiert?', answer: 'Ja, mit starken CTAs und Wertversprechen.' },
      { question: 'Kann ich den Text bearbeiten?', answer: 'Ja, nutzen Sie ihn als Ausgangspunkt.' },
      { question: 'Für welche Ziele funktioniert es?', answer: 'Leads, Verkäufe, Traffic und Brand Awareness.' },
    ],
  },

  'hook-generator': {
    slug: 'hook-generator',
    name: 'Hook-Generator',
    title: 'Kostenloser KI Hook Generator',
    description: 'Erstellen Sie fesselnde Hooks für Social Media, Videos und Artikel. Stoppen Sie den Scroll mit aufmerksamkeitsstarken Einstiegen.',
    metaDescription: 'Erstellen Sie fesselnde Hooks für Social Media, Videos und Artikel. Stoppen Sie den Scroll mit aufmerksamkeitsstarken Einstiegen.',
    inputLabel: 'Content-Thema beschreiben...',
    inputPlaceholder: 'z.B. Tipps zum Geldsparen für Berufseinsteiger',
    buttonText: 'Hooks Generieren',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Plattform', choices: ['Social Media', 'YouTube', 'Blog/Artikel', 'E-Mail', 'Allgemein'], default: 'Social Media', type: 'select' },
      { name: 'hook_type', label: 'Hook-Typ', choices: ['Frage', 'Statement', 'Statistik', 'Geschichte', 'Konträr', 'Gemischt'], default: 'Gemischt', type: 'select' },
      { name: 'number_of_hooks', label: 'Anzahl Hooks', choices: ['5 Hooks', '10 Hooks', '15 Hooks'], default: '10 Hooks', type: 'select' },
    ],
    systemPrompt: `You are an expert content creator who writes attention-grabbing hooks.

## HOOK TYPES
### Question: Spark curiosity
### Statement: Bold claims
### Statistic: Surprising data
### Story: Personal opening
### Contrarian: Challenge beliefs

## PLATFORM ADAPTATIONS
- Social Media: Short, punchy, emoji-friendly
- YouTube: First 5 seconds crucial
- Blog: Engaging first paragraph
- Email: Subject line and opener

Platform: {{platform}}
Hook Type: {{hook_type}}
Number of Hooks: {{number_of_hooks}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Social-Media-Content', description: 'Creator erstellen scroll-stoppende Einstiege für Posts.' },
      { title: 'Video-Einstiege', description: 'YouTuber schreiben fesselnde Video-Anfänge.' },
      { title: 'Blog-Einleitungen', description: 'Blogger fangen Leser mit starken Eröffnungen.' },
    ],
    faqs: [
      { question: 'Was ist ein Hook?', answer: 'Ein Hook ist ein aufmerksamkeitsstarker Einstieg, der Leser/Zuschauer zum Weiterlesen/-schauen bringt.' },
      { question: 'Für welche Plattformen funktioniert es?', answer: 'Social Media, YouTube, Blogs, E-Mails und allgemeine Inhalte.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Limits.' },
      { question: 'Welche Hook-Typen gibt es?', answer: 'Fragen, Statements, Statistiken, Geschichten und konträre Aussagen.' },
      { question: 'Wie viele Hooks kann ich generieren?', answer: 'Wählen Sie 5, 10 oder 15 Hooks pro Generierung.' },
      { question: 'Kann ich die Hooks bearbeiten?', answer: 'Ja, nutzen Sie sie als Inspiration.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Wie lang sind die Hooks?', answer: 'Kurz und prägnant, angepasst an die Plattform.' },
      { question: 'Funktioniert es für alle Themen?', answer: 'Ja, für jedes Thema und jede Nische.' },
      { question: 'Wie wähle ich den besten Hook?', answer: 'Testen Sie verschiedene und wählen Sie den mit bestem Engagement.' },
    ],
  },

  'resignation-letter-generator': {
    slug: 'resignation-letter-generator',
    name: 'Kündigungsschreiben-Generator',
    title: 'Kostenloser KI Resignation Letter Generator',
    description: 'Schreiben Sie ein professionelles Kündigungsschreiben in Minuten. Unsere KI erstellt höfliche Schreiben, die Beziehungen erhalten.',
    metaDescription: 'Schreiben Sie ein professionelles Kündigungsschreiben in Minuten. Unsere KI erstellt höfliche Schreiben, die Beziehungen erhalten und Ihren...',
    inputLabel: 'Situation beschreiben...',
    inputPlaceholder: 'z.B. Marketing-Manager bei Tech-Unternehmen, verlasse für neue Gelegenheit, bin seit 3 Jahren hier',
    buttonText: 'Schreiben Generieren',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'Ton', choices: ['Formell', 'Herzlich/Persönlich', 'Kurz/Minimal'], default: 'Formell', type: 'select' },
      { name: 'notice_period', label: 'Kündigungsfrist', choices: ['Zwei Wochen', 'Ein Monat', 'Sofort', 'Individuell'], default: 'Zwei Wochen', type: 'select' },
    ],
    systemPrompt: `You are an expert in professional communication who helps write effective resignation letters.

## RESIGNATION LETTER STRUCTURE
### Opening: Clear statement of resignation and last day
### Middle: Brief reason (optional), gratitude, positive experiences
### Closing: Offer for transition help, well-wishes, signature

## TONE OPTIONS
### Formal: Professional, concise
### Warm/Personal: Relationship emphasis
### Brief/Minimal: Just the essentials

Tone: {{tone}}
Notice Period: {{notice_period}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Jobwechsel', description: 'Mitarbeiter schreiben professionelle Kündigungen bei Stellenwechsel.' },
      { title: 'Karrierewechsel', description: 'Berufstätige formulieren Kündigungen bei Branchenwechsel.' },
      { title: 'Persönliche Gründe', description: 'Mitarbeiter erstellen respektvolle Kündigungen aus persönlichen Gründen.' },
    ],
    faqs: [
      { question: 'Was sollte ein Kündigungsschreiben enthalten?', answer: 'Kündigungsabsicht, letzter Arbeitstag, kurze Dankbarkeit und Angebot zur Übergabe.' },
      { question: 'Sollte ich den Grund für die Kündigung nennen?', answer: 'Optional. Halten Sie es kurz und positiv, wenn Sie es tun.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos ohne Limits.' },
      { question: 'Welche Töne sind verfügbar?', answer: 'Formell, herzlich/persönlich oder kurz/minimal.' },
      { question: 'Kann ich die Kündigungsfrist angeben?', answer: 'Ja, von zwei Wochen bis sofort oder individuell.' },
      { question: 'Wird es Beziehungen erhalten?', answer: 'Ja, der Text ist professionell und positiv gestaltet.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Kann ich das Schreiben bearbeiten?', answer: 'Ja, passen Sie es an Ihre Situation an.' },
      { question: 'Enthält es ein Übergabeangebot?', answer: 'Ja, formelle Schreiben enthalten Unterstützungsangebote.' },
      { question: 'Für welche Branchen funktioniert es?', answer: 'Für alle Branchen und Positionen.' },
    ],
  },

  'social-media-bio-generator': {
    slug: 'social-media-bio-generator',
    name: 'Social-Media-Bio-Generator',
    title: 'Kostenloser KI-basierter Bio-Generator für soziale Medien',
    description: 'Erstellen Sie einprägsame Social-Media-Bios für Instagram, Twitter, LinkedIn und mehr.',
    metaDescription: 'Erstellen Sie einprägsame Social-Media-Bios für Instagram, Twitter, LinkedIn und mehr. Kostenlos und sofort.',
    inputLabel: 'Über sich selbst erzählen...',
    inputPlaceholder: 'z.B. Digital-Marketing-Spezialist, der Kaffee und Wandern liebt',
    buttonText: 'Bio Generieren',
    maxLength: 1024,
    options: [
      { name: 'platform', label: 'Plattform', choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'Allgemein'], default: 'Instagram', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Professionell', 'Locker', 'Kreativ', 'Witzig'], default: 'Locker', type: 'select' },
    ],
    systemPrompt: `You are an expert at creating compelling social media bios.

## BIO PRINCIPLES
- Communicate who you are quickly
- Include relevant keywords
- Show personality
- Include call to action if relevant
- Respect character limits

## PLATFORM ADAPTATIONS
- Instagram: 150 chars, emojis welcome
- Twitter: 160 chars, punchy
- LinkedIn: Professional, longer allowed
- TikTok: Trendy, casual

Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Personal Branding', description: 'Personen erstellen einprägsame Bios für ihre Profile.' },
      { title: 'Business-Profile', description: 'Unternehmen optimieren Social-Media-Beschreibungen.' },
      { title: 'Influencer-Marketing', description: 'Creator präsentieren sich professionell.' },
    ],
    faqs: [
      { question: 'Wie lang sollte eine Bio sein?', answer: 'Instagram: 150 Zeichen, Twitter: 160 Zeichen, LinkedIn: flexibler.' },
      { question: 'Sollte ich Emojis verwenden?', answer: 'Auf Instagram und TikTok ja, auf LinkedIn sparsamer.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos.' },
      { question: 'Kann ich für verschiedene Plattformen generieren?', answer: 'Ja, wählen Sie die Plattform für optimierte Länge und Stil.' },
      { question: 'Enthält es Keywords?', answer: 'Ja, relevante Keywords für Auffindbarkeit werden integriert.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung erforderlich.' },
      { question: 'Kann ich mehrere Varianten erstellen?', answer: 'Ja, generieren Sie beliebig oft.' },
      { question: 'Wie zeige ich Persönlichkeit?', answer: 'Wählen Sie einen passenden Ton und fügen Sie persönliche Details hinzu.' },
      { question: 'Sollte ich einen CTA einbeziehen?', answer: 'Wenn relevant, ja, z.B. "Link zum Shop" oder "DM für Anfragen".' },
      { question: 'Funktioniert es für Unternehmen?', answer: 'Ja, für Privatpersonen und Unternehmen.' },
    ],
  },

  'instagram-bio-generator': {
    slug: 'instagram-bio-generator',
    name: 'Instagram-Bio-Generator',
    title: 'Kostenloser KI-Instagram-Bio-Generator',
    description: 'Erstellen Sie die perfekte Instagram-Bio, die Follower anzieht. 150 Zeichen, die zählen.',
    metaDescription: 'Erstellen Sie die perfekte Instagram-Bio, die Follower anzieht. Optimiert für 150 Zeichen.',
    inputLabel: 'Über sich erzählen...',
    inputPlaceholder: 'z.B. Reiseblogger und Fotograf aus Berlin',
    buttonText: 'Bio Generieren',
    maxLength: 1024,
    options: [
      { name: 'account_type', label: 'Account-Typ', choices: ['Persönlich', 'Business', 'Creator'], default: 'Persönlich', type: 'select' },
      { name: 'style', label: 'Stil', choices: ['Minimalistisch', 'Kreativ', 'Professionell', 'Witzig'], default: 'Kreativ', type: 'select' },
    ],
    systemPrompt: `You are an Instagram bio expert who creates compelling 150-character bios.

## INSTAGRAM BIO ELEMENTS
- Who you are
- What you do
- What followers get
- Personality/flavor
- CTA if relevant

## STYLE OPTIONS
- Minimal: Clean, simple
- Creative: Unique, artistic
- Professional: Business-like
- Witty: Humor, wordplay

Account Type: {{account_type}}
Style: {{style}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Personal Branding', description: 'Nutzer erstellen einprägsame persönliche Bios.' },
      { title: 'Business-Accounts', description: 'Unternehmen präsentieren ihre Marke.' },
      { title: 'Creator-Profile', description: 'Content-Creator zeigen, was sie bieten.' },
    ],
    faqs: [
      { question: 'Wie lang ist die Instagram-Bio?', answer: 'Maximal 150 Zeichen.' },
      { question: 'Sollte ich Emojis verwenden?', answer: 'Ja, sie sparen Zeichen und fügen visuelles Interesse hinzu.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos.' },
      { question: 'Was macht eine gute Instagram-Bio?', answer: 'Klar, einprägsam, zeigt Persönlichkeit und hat einen Zweck.' },
      { question: 'Sollte ich einen CTA einbeziehen?', answer: 'Wenn relevant, z.B. "Link unten" oder "DM für Kollabs".' },
      { question: 'Kann ich verschiedene Stile wählen?', answer: 'Ja, minimalistisch bis witzig.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung.' },
      { question: 'Funktioniert es für Business-Accounts?', answer: 'Ja, mit spezifischen Business-Optionen.' },
      { question: 'Kann ich mehrere generieren?', answer: 'Ja, beliebig oft.' },
      { question: 'Wie oft sollte ich meine Bio ändern?', answer: 'Bei Änderungen an Fokus oder Angeboten.' },
    ],
  },

  'instagram-caption-generator': {
    slug: 'instagram-caption-generator',
    name: 'Instagram-Caption-Generator',
    title: 'Kostenloser AI Instagram Caption Generator',
    description: 'Erstellen Sie scroll-stoppende Instagram-Captions. Für Reels, Carousels und Feed-Posts.',
    metaDescription: 'Erstellen Sie scroll-stoppende Instagram-Captions für Reels, Carousels und Feed-Posts. Steigern Sie Likes, Kommentare und Saves.',
    inputLabel: 'Post oder Bild beschreiben...',
    inputPlaceholder: 'z.B. Carousel-Post mit 5 Tipps für besseren Schlaf',
    buttonText: 'Caption Generieren',
    maxLength: 2048,
    options: [
      { name: 'content_type', label: 'Content-Typ', choices: ['Feed Post', 'Reels', 'Carousel', 'Story'], default: 'Feed Post', type: 'select' },
      { name: 'tone', label: 'Ton', choices: ['Authentisch', 'Verspielt', 'Professionell', 'Trendy', 'Inspirierend'], default: 'Authentisch', type: 'select' },
    ],
    systemPrompt: `You are an Instagram content expert who creates engaging captions.

## CAPTION STRUCTURE
- Hook: First 125 characters visible
- Body: Value, story, or information
- CTA: Engagement prompt
- Hashtags: 3-10 relevant tags

## CONTENT TYPE ADAPTATIONS
- Feed: Can be longer, storytelling
- Reels: Short, punchy, trending
- Carousel: Educational, list-style
- Story: Quick, casual

Content Type: {{content_type}}
Tone: {{tone}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Content-Erstellung', description: 'Creator schreiben ansprechende Captions für Posts.' },
      { title: 'Brand Marketing', description: 'Marken erstellen einheitliche Caption-Stile.' },
      { title: 'Influencer-Content', description: 'Influencer maximieren Engagement mit starken Captions.' },
    ],
    faqs: [
      { question: 'Wie lang sollte eine Instagram-Caption sein?', answer: 'Bis zu 2.200 Zeichen, aber die ersten 125 sind am wichtigsten.' },
      { question: 'Was ist der Hook?', answer: 'Die ersten 125 Zeichen, die vor "mehr" angezeigt werden.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos.' },
      { question: 'Enthält es Hashtags?', answer: 'Ja, relevante Hashtags werden vorgeschlagen.' },
      { question: 'Für welche Content-Typen funktioniert es?', answer: 'Feed Posts, Reels, Carousels und Stories.' },
      { question: 'Sollte ich CTAs einbeziehen?', answer: 'Ja, um Engagement wie Kommentare und Saves zu fördern.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung.' },
      { question: 'Kann ich den Ton wählen?', answer: 'Ja, von authentisch bis trendy.' },
      { question: 'Wie viele Hashtags sollte ich verwenden?', answer: '3-10 relevante Hashtags sind optimal.' },
      { question: 'Funktioniert es für alle Nischen?', answer: 'Ja, für jede Nische und Branche.' },
    ],
  },

  'instagram-hashtag-generator': {
    slug: 'instagram-hashtag-generator',
    name: 'Instagram-Hashtag-Generator',
    title: 'Kostenloser KI-Instagram-Hashtag-Generator',
    description: 'Generieren Sie relevante Hashtags für mehr Instagram-Reichweite. Mix aus beliebten und Nischen-Tags.',
    metaDescription: 'Generieren Sie relevante Hashtags für mehr Instagram-Reichweite. Optimaler Mix aus beliebten und Nischen-Tags.',
    inputLabel: 'Post-Thema beschreiben...',
    inputPlaceholder: 'z.B. Fitness-Motivation, Workout-Tipps für Anfänger',
    buttonText: 'Hashtags Generieren',
    maxLength: 1024,
    options: [
      { name: 'niche', label: 'Nische', choices: ['Lifestyle', 'Fitness', 'Food', 'Travel', 'Business', 'Beauty', 'Tech', 'Allgemein'], default: 'Allgemein', type: 'select' },
      { name: 'hashtag_count', label: 'Anzahl', choices: ['10 Hashtags', '20 Hashtags', '30 Hashtags'], default: '20 Hashtags', type: 'select' },
    ],
    systemPrompt: `You are an Instagram growth expert who recommends effective hashtags.

## HASHTAG STRATEGY
- Mix of sizes: Large, medium, niche
- Relevant to content
- Not banned or shadowbanned
- Mix of English and German as appropriate

## CATEGORIES
- Large: 1M+ posts
- Medium: 100K-1M posts
- Small/Niche: <100K posts

Niche: {{niche}}
Hashtag Count: {{hashtag_count}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Post-Optimierung', description: 'Creator finden die besten Hashtags für Reichweite.' },
      { title: 'Nischen-Marketing', description: 'Spezialisten erreichen ihre Zielgruppe.' },
      { title: 'Wachstumsstrategie', description: 'Accounts steigern systematisch ihre Sichtbarkeit.' },
    ],
    faqs: [
      { question: 'Wie viele Hashtags sollte ich verwenden?', answer: 'Instagram erlaubt 30, aber 10-20 relevante sind oft optimal.' },
      { question: 'Was ist der Mix aus Größen?', answer: 'Große für Reichweite, mittlere für Engagement, kleine für Nischen-Sichtbarkeit.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos.' },
      { question: 'Sind die Hashtags aktuell?', answer: 'Das Tool empfiehlt gängige, nicht gebannte Hashtags.' },
      { question: 'Kann ich Nischen wählen?', answer: 'Ja, von Lifestyle über Fitness bis Tech.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung.' },
      { question: 'Sollte ich immer dieselben Hashtags verwenden?', answer: 'Variieren Sie für bessere Ergebnisse und vermeiden Sie Spam-Signale.' },
      { question: 'Enthält es deutsche Hashtags?', answer: 'Ja, eine Mischung aus deutschen und englischen je nach Zielgruppe.' },
      { question: 'Kann ich die Anzahl wählen?', answer: 'Ja, 10, 20 oder 30 Hashtags.' },
      { question: 'Wie finde ich Nischen-Hashtags?', answer: 'Das Tool mischt automatisch verschiedene Größen.' },
    ],
  },

  'social-media-hashtag-generator': {
    slug: 'social-media-hashtag-generator',
    name: 'Social-Media-Hashtag-Generator',
    title: 'Kostenloser KI Social Media Hashtag-Generator',
    description: 'Generieren Sie effektive Hashtags für alle Social-Media-Plattformen. Steigern Sie Reichweite und Engagement.',
    metaDescription: 'Generieren Sie effektive Hashtags für Instagram, Twitter, LinkedIn und mehr. Steigern Sie Reichweite und Engagement.',
    inputLabel: 'Content-Thema...',
    inputPlaceholder: 'z.B. Nachhaltigkeit, umweltfreundliche Produkte',
    buttonText: 'Hashtags Generieren',
    maxLength: 1024,
    options: [
      { name: 'platform', label: 'Plattform', choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'Alle'], default: 'Alle', type: 'select' },
      { name: 'count', label: 'Anzahl', choices: ['10 Hashtags', '20 Hashtags', '30 Hashtags'], default: '20 Hashtags', type: 'select' },
    ],
    systemPrompt: `You are a social media expert who recommends platform-optimized hashtags.

## PLATFORM GUIDELINES
- Instagram: Up to 30, mix of sizes
- Twitter: 1-3, focused
- LinkedIn: 3-5, professional
- TikTok: Trending + niche

Platform: {{platform}}
Count: {{count}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Cross-Platform-Content', description: 'Marketer optimieren Hashtags für verschiedene Plattformen.' },
      { title: 'Kampagnen-Hashtags', description: 'Marken erstellen einheitliche Hashtag-Strategien.' },
      { title: 'Content-Reichweite', description: 'Creator maximieren die Sichtbarkeit ihrer Posts.' },
    ],
    faqs: [
      { question: 'Unterscheiden sich Hashtags je nach Plattform?', answer: 'Ja, jede Plattform hat optimale Mengen und Stile.' },
      { question: 'Wie viele Hashtags pro Plattform?', answer: 'Instagram: 10-30, Twitter: 1-3, LinkedIn: 3-5, TikTok: 3-5.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos.' },
      { question: 'Kann ich für alle Plattformen gleichzeitig generieren?', answer: 'Ja, wählen Sie "Alle" für plattformübergreifende Vorschläge.' },
      { question: 'Enthält es Trend-Hashtags?', answer: 'Für TikTok und Twitter werden trending Tags berücksichtigt.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung.' },
      { question: 'Sind die Hashtags aktuell?', answer: 'Das Tool empfiehlt relevante, nicht gebannte Tags.' },
      { question: 'Kann ich die Anzahl wählen?', answer: 'Ja, 10, 20 oder 30 Hashtags.' },
      { question: 'Funktioniert es für B2B-Content?', answer: 'Ja, besonders mit LinkedIn-Fokus.' },
      { question: 'Wie oft sollte ich Hashtags wechseln?', answer: 'Variieren Sie regelmäßig für bessere Ergebnisse.' },
    ],
  },

  'tiktok-hashtag-generator': {
    slug: 'tiktok-hashtag-generator',
    name: 'TikTok-Hashtag-Generator',
    title: 'Kostenloser KI-TikTok-Hashtag-Generator',
    description: 'Generieren Sie virale TikTok-Hashtags. Mix aus trending und Nischen-Tags für maximale Reichweite.',
    metaDescription: 'Generieren Sie virale TikTok-Hashtags für maximale Reichweite auf der For You Page.',
    inputLabel: 'Video-Thema...',
    inputPlaceholder: 'z.B. Kochtutorial für schnelle Rezepte',
    buttonText: 'Hashtags Generieren',
    maxLength: 1024,
    options: [
      { name: 'content_type', label: 'Content-Typ', choices: ['Entertainment', 'Educational', 'Lifestyle', 'Comedy', 'Beauty', 'Fitness', 'Food', 'Allgemein'], default: 'Allgemein', type: 'select' },
      { name: 'count', label: 'Anzahl', choices: ['5 Hashtags', '10 Hashtags', '15 Hashtags'], default: '10 Hashtags', type: 'select' },
    ],
    systemPrompt: `You are a TikTok growth expert who recommends effective hashtags for the For You Page.

## TIKTOK HASHTAG STRATEGY
- Mix trending and niche
- Keep total under 4-5 for best results (some say more is fine)
- Include #fyp variations when relevant
- Content-type specific tags

Content Type: {{content_type}}
Count: {{count}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'FYP-Optimierung', description: 'Creator optimieren für die For You Page.' },
      { title: 'Nischen-Reichweite', description: 'Spezialisten erreichen ihre Zielgruppe.' },
      { title: 'Virales Potenzial', description: 'Videos werden für maximale Verbreitung optimiert.' },
    ],
    faqs: [
      { question: 'Wie viele Hashtags für TikTok?', answer: '3-5 fokussierte Hashtags sind oft optimal, manche verwenden mehr.' },
      { question: 'Was ist FYP?', answer: 'For You Page - die Hauptseite, auf der virale Inhalte erscheinen.' },
      { question: 'Ist es kostenlos?', answer: 'Ja, völlig kostenlos.' },
      { question: 'Enthält es Trend-Hashtags?', answer: 'Ja, trending und nischenspezifische Tags werden kombiniert.' },
      { question: 'Sollte ich #fyp verwenden?', answer: 'Kann helfen, ist aber nicht garantiert effektiv.' },
      { question: 'Muss ich mich anmelden?', answer: 'Nein, keine Registrierung.' },
      { question: 'Wie finde ich Nischen-Hashtags?', answer: 'Das Tool mischt automatisch verschiedene Tag-Typen.' },
      { question: 'Funktioniert es für alle Content-Typen?', answer: 'Ja, von Entertainment bis Educational.' },
      { question: 'Wie oft wechseln Trends?', answer: 'TikTok-Trends ändern sich schnell, aktualisieren Sie regelmäßig.' },
      { question: 'Kann ich die Anzahl wählen?', answer: 'Ja, 5, 10 oder 15 Hashtags.' },
    ],
  },

  // ==================== END OF BATCH 3 ====================

  // ==================== BATCH 4 (Tools 31-40) ====================

  'social-media-username-generator': {
    slug: 'social-media-username-generator',
    name: 'Social-Media-Benutzernamen-Generator',
    title: 'Kostenloser KI-Benutzernamen-Generator für soziale Medien',
    description: 'Erstellen Sie einzigartige, einprägsame Benutzernamen für Ihre Social-Media-Profile. Unsere KI kreiert personalisierte Benutzernamen-Ideen, die auf Instagram, TikTok, Twitter und mehr funktionieren.',
    metaDescription: 'Erstellen Sie einzigartige, einprägsame Benutzernamen für Ihre Social-Media-Profile. Unsere KI kreiert personalisierte Benutzernamen-Ideen,...',
    inputLabel: 'Beschreiben Sie sich oder Ihre Marke...',
    inputPlaceholder: 'z.B. Fitness-Coach namens Sarah, spezialisiert auf Yoga und Meditation',
    buttonText: 'Benutzernamen generieren',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Benutzernamen-Stil',
        choices: ['Professionell', 'Kreativ/Verspielt', 'Minimalistisch', 'Nischen-fokussiert', 'Namensbasiert'],
        default: 'Kreativ/Verspielt',
        type: 'select',
      },
      {
        name: 'platform',
        label: 'Primäre Plattform',
        choices: ['Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'Plattformübergreifend'],
        default: 'Plattformübergreifend',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert personal branding consultant specializing in creating memorable, effective usernames for social media platforms. Your role is to generate unique, available-friendly username ideas that reflect identity, are easy to remember, and work across multiple platforms.
## USERNAME CREATION PRINCIPLES
1. **Memorability**: Easy to recall and spell
2. **Simplicity**: Short and clean (ideally under 15 characters)
3. **Relevance**: Reflects identity, niche, or brand
4. **Availability**: Unique enough to find across platforms
5. **Professionalism**: Appropriate for intended audience
6. **Longevity**: Won't feel dated as trends change
## USERNAME PATTERNS AND STYLES
### Pattern 1: Name + Descriptor
- FirstNameRole (JohnDesigns, SarahCooks)
- NameNiche (MikeTravel, JenFitness)
- Works for personal brands
### Pattern 2: Name + Numbers
- Name + birth year or meaningful number
- Use strategically (avoid random numbers)
- Example: Sarah2023, Mike_87
### Pattern 3: Descriptive Handle
- NicheDescriptor (TheMinimalistHome, DailyDesignTips)
- What you do or offer
- Works for topic-focused accounts
### Pattern 4: Creative Wordplay
- Puns, alliteration, rhymes
- Memorable combinations
- Example: FitWithBritt, CookWithKook
### Pattern 5: Abbreviated/Acronym
- Initials + descriptor
- Shortened phrases
- Example: JKPhotos, SMMarketingPro
### Pattern 6: Location + Niche
- CityActivity (NYCFoodie, LAFitness)
- Geographic personal branding
- Good for local businesses
### Pattern 7: Action-Based
- Verb + Noun format
- What you help people do
- Example: GrowYourBrand, LearnToCode
## USERNAME VARIATIONS TO GENERATE
For availability purposes, generate variations using:
- Underscores: the_real_name, name_official
- Periods: name.creates, first.last
- Prefixes: hey.name, im.name, its.name
- Suffixes: name.co, name.xyz, name.studio
- Modifiers: realname, officialname, namehq
## PLATFORM-SPECIFIC CONSIDERATIONS
### Instagram
- 30 characters max
- Letters, numbers, periods, underscores only
- No consecutive periods
- Case insensitive
### Twitter/X
- 15 characters max
- Letters, numbers, underscores only
- Case insensitive
### TikTok
- 24 characters max
- Letters, numbers, underscores, periods
- Case insensitive
### YouTube
- Channel name more flexible
- Handle rules similar to Instagram
- Can include spaces in display name
### LinkedIn
- URL customizable
- Professional preference
- Usually real name based
## QUALITY FILTERS
Before suggesting usernames, check:
- Easy to pronounce and spell
- No unintended meanings or associations
- Works when spoken aloud
- Appropriate for professional contexts
- Not too similar to existing famous accounts
- Available across major platforms (if possible)
Style: {{style}}
Platform: {{platform}}
## OUTPUT FORMAT
For each username suggestion, provide:
- Username
- Style/pattern category
- Meaning or rationale (if requested)
- Variations for availability backup

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Branding und Geschäftskonten', description: 'Unternehmen und Einzelpersonen, die Online-Präsenz aufbauen, nutzen den Benutzernamen-Generator, um konsistente, wiedererkennbare Benutzernamen plattformübergreifend zu erstellen. Ein einheitlicher Benutzername fördert Markenbekanntheit und erleichtert Kunden und Followern das Finden und Verbinden mit der Marke.' },
      { title: 'Content-Ersteller und Influencer', description: 'Content-Ersteller, Blogger, Vlogger und Influencer benötigen markante Benutzernamen, die ihre Nische oder Marke widerspiegeln. Das Tool generiert relevante, ansprechende Benutzernamen, die beim Publikum ankommen und auf Plattformen wie Instagram, YouTube, Twitter und TikTok leicht zu merken sind.' },
      { title: 'Persönliches und professionelles Branding', description: 'Einzelpersonen, die persönliche Marken aufbauen, nutzen den Benutzernamen-Generator, um einzigartige, professionelle Benutzernamen zu erstellen. Konsistente Benutzernamen auf allen Plattformen helfen beim Aufbau einer kohärenten Online-Identität für Networking, Jobmöglichkeiten oder persönlichen Ausdruck.' },
    ],
    faqs: [
      { question: 'Was macht einen guten Social-Media-Benutzernamen aus?', answer: 'Gute Benutzernamen sind kurz (unter 15 Zeichen ideal), leicht zu buchstabieren und auszusprechen, einprägsam, relevant für Ihre Identität oder Nische, auf allen Plattformen verfügbar und professionell genug für Ihr Zielpublikum.' },
      { question: 'Sollte mein Benutzername mein echter Name sein?', answer: 'Es hängt von Ihren Zielen ab. Echte Namen funktionieren gut für Personal Branding und professionelles Networking. Kreative Benutzernamen eignen sich besser für Content-Ersteller oder wenn Sie eine Marke aufbauen möchten, die von Ihrer Identität getrennt ist.' },
      { question: 'Wie mache ich meinen Benutzernamen einzigartig?', answer: 'Fügen Sie relevante Beschreibungen hinzu, verwenden Sie Wortspiele oder Alliterationen, integrieren Sie Ihre Nische oder Ihren Standort, probieren Sie verschiedene Muster (Unterstriche, Punkte) oder kombinieren Sie unerwartete Wörter, die Ihre Marke repräsentieren.' },
      { question: 'Sollte ich denselben Benutzernamen auf allen Plattformen verwenden?', answer: 'Idealerweise ja. Konsistente Benutzernamen erleichtern das Auffinden und stärken die Markenbekanntheit. Wenn Ihr bevorzugter Benutzername auf einigen Plattformen vergeben ist, verwenden Sie nahe Variationen mit derselben Kernidentität.' },
      { question: 'Was, wenn mein bevorzugter Benutzername schon vergeben ist?', answer: 'Probieren Sie Variationen: Unterstriche hinzufügen (name_creates), Präfixe (the.real.name), Suffixe (namehq) oder mit relevanten Beschreibungen kombinieren. Der Generator liefert aus diesem Grund mehrere Variationen.' },
      { question: 'Sollte ich Zahlen in meinem Benutzernamen verwenden?', answer: 'Verwenden Sie Zahlen strategisch, wenn sie eine Bedeutung haben (Geburtsjahr, Gründungsjahr) statt zufällig. Zufällige Zahlen können Benutzernamen schwerer merkbar und weniger professionell erscheinen lassen.' },
      { question: 'Wie lang sollte mein Benutzername sein?', answer: 'Kürzer ist generell besser – unter 15 Zeichen ist ideal. Dies gewährleistet Verfügbarkeit auf allen Plattformen (Twitter hat ein 15-Zeichen-Limit) und macht ihn leichter merkbar und tippbar.' },
      { question: 'Kann ich meinen Benutzernamen später ändern?', answer: 'Die meisten Plattformen erlauben Benutzernamen-Änderungen, aber dies kann Follower verwirren und bestehende Links unterbrechen. Wählen Sie sorgfältig von Anfang an, um Änderungen zu vermeiden.' },
      { question: 'Sollte mein Benutzername beschreiben, was ich tue?', answer: 'Die Integration Ihrer Nische oder Aktivität kann bei der Auffindbarkeit helfen und Ihren Fokus sofort kommunizieren. Halten Sie es jedoch allgemein genug, damit Sie es nicht überwachsen, wenn sich Ihr Content weiterentwickelt.' },
      { question: 'Welche Zeichen kann ich in Benutzernamen verwenden?', answer: 'Die meisten Plattformen erlauben Buchstaben, Zahlen, Unterstriche und Punkte. Twitter erlaubt keine Punkte. Instagram erlaubt keine aufeinanderfolgenden Punkte. Vermeiden Sie Sonderzeichen für breiteste Kompatibilität.' },
    ],
  },

  'instagram-name-generator': {
    slug: 'instagram-name-generator',
    name: 'Instagram-Namensgenerator',
    title: 'Kostenloser AI-Instagram-Namensgenerator',
    description: 'Erstellen Sie einzigartige Instagram-Benutzernamen, die herausstechen. Unsere KI kreiert einprägsame, markenkonforme Handles, die Ihnen helfen, Ihre Präsenz aufzubauen und entdeckt zu werden.',
    metaDescription: 'Erstellen Sie einzigartige Instagram-Benutzernamen, die herausstechen. Unsere KI kreiert einprägsame, markenkonforme Handles, die Ihnen...',
    inputLabel: 'Beschreiben Sie sich oder Ihre Marke...',
    inputPlaceholder: 'z.B. Food-Bloggerin namens Emma, die gesunde Rezepte teilt',
    buttonText: 'Namen generieren',
    maxLength: 2048,
    options: [
      {
        name: 'account_type',
        label: 'Kontotyp',
        choices: ['Persönliche Marke', 'Content Creator', 'Unternehmen/Marke', 'Influencer', 'Künstler/Kreativ'],
        default: 'Content Creator',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Namensstil',
        choices: ['Professionell', 'Kreativ/Lustig', 'Minimalistisch', 'Trendy', 'Klassisch'],
        default: 'Kreativ/Lustig',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram branding consultant specializing in creating unique, memorable Instagram usernames. Your role is to generate username ideas optimized for Instagram's platform requirements and best practices.
## INSTAGRAM USERNAME REQUIREMENTS
- Maximum 30 characters
- Allowed: letters, numbers, periods, underscores
- No consecutive periods
- Case insensitive (displays as typed)
- Must be unique on platform
- Cannot start/end with period
## INSTAGRAM USERNAME CATEGORIES
### Personal Branding
- First + Last name variations
- Name + profession/niche
- Creative name combinations
- Examples: jane.smith.design, johnmarketingpro
### Content Creator
- Niche-focused names
- Topic + personality blend
- Memorable handles
- Examples: dailymakeuptips, fitnesswithfiona
### Business/Brand
- Company name adaptations
- Product/service indicators
- Professional variations
- Examples: acme.studio, shophandmade.co
### Influencer
- Personal brand names
- Category indicators
- Lifestyle descriptors
- Examples: wanderlust.jane, healthy.eats.sam
### Artist/Creative
- Art form references
- Style indicators
- Creative wordplay
- Examples: pixels.by.pete, brushstrokesart
## EFFECTIVE INSTAGRAM NAME PATTERNS
### Pattern 1: the + name
- the.wanderer, thefoodiegirl
- Creates distinction, sounds established
### Pattern 2: name + does/creates/makes
- sarah.creates, mike.makes.music
- Action-oriented, clear value
### Pattern 3: name + hq/co/studio
- designhq, studio.jane, photo.co
- Professional, business-like
### Pattern 4: im/its/hey + name
- imjanesmith, its.mike.travel
- Casual, personality-forward
### Pattern 5: name + niche
- sarahwellness, mikephotography
- Clear categorization
### Pattern 6: location + niche
- nycfoodie, lafitnessgirl
- Geographic targeting
### Pattern 7: adjective + name
- creativejane, healthymikeeats
- Personality descriptors
## INSTAGRAM-SPECIFIC BEST PRACTICES
1. **Searchability**: Include keywords your audience searches
2. **Pronounceability**: Easy to say when giving out verbally
3. **Memorability**: Distinct enough to remember after one view
4. **Professionalism**: Appropriate for potential sponsors/partners
5. **Flexibility**: Allows for content evolution
6. **Cross-platform**: Works on other social platforms too
## AVAILABILITY TACTICS
When common names are taken:
- Add location indicators
- Include profession/niche
- Use creative separators (periods, underscores)
- Add meaningful numbers sparingly
- Try action verbs + name
- Flip word order
Account Type: {{account_type}}
Style: {{style}}
## OUTPUT REQUIREMENTS
Generate usernames that are:
- Instagram-compliant (length, characters)
- Easy to spell verbally
- Professional yet memorable
- Searchable by target audience
- Distinct from existing popular accounts
- Provided with meaning explanation if requested

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Personal Branding', description: 'Personen, die eine persönliche Marke auf Instagram aufbauen möchten, nutzen den Namensgenerator, um einzigartige, eingängige Benutzernamen zu finden, die ihre Leidenschaft und Expertise widerspiegeln. Ein einprägsamer Benutzername hilft beim Aufbau einer starken Online-Präsenz und verbessert die Personal-Branding-Bemühungen auf der Plattform.' },
      { title: 'Geschäfts- und Produktwerbung', description: 'Unternehmen und Unternehmer nutzen den Instagram-Namensgenerator, um markenrelevante Benutzernamen zu finden, die mit der Unternehmensidentität und den Werten übereinstimmen. Konsistentes Branding auf allen Plattformen hilft Kunden, die Marke zu erkennen und sich zu merken, was zu erhöhter Sichtbarkeit führt.' },
      { title: 'Social-Media-Marketingkampagnen', description: 'Marketer, die kampagnenspezifische Konten erstellen oder einzigartige Handles für Promotionen benötigen, nutzen den Generator, um schnell eingängige Benutzernamen zu entwickeln. Dies ist besonders nützlich für Events, Produkteinführungen oder zeitlich begrenzte Aktionen, die eine dedizierte Instagram-Präsenz erfordern.' },
    ],
    faqs: [
      { question: 'Was sind die Anforderungen an Instagram-Benutzernamen?', answer: 'Instagram-Benutzernamen können bis zu 30 Zeichen lang sein und nur Buchstaben, Zahlen, Punkte und Unterstriche verwenden. Aufeinanderfolgende Punkte sind nicht erlaubt, und Namen können nicht mit einem Punkt beginnen oder enden.' },
      { question: 'Wie weiß ich, ob ein Benutzername verfügbar ist?', answer: 'Überprüfen Sie direkt auf Instagram durch Suche oder beim Erstellen eines Kontos. Drittanbieter-Tools können auch die Verfügbarkeit auf mehreren Plattformen gleichzeitig prüfen.' },
      { question: 'Sollte mein Instagram-Benutzername zu meinen anderen Social Media passen?', answer: 'Idealerweise ja. Konsistente Benutzernamen auf allen Plattformen stärken Ihre Marke, machen Sie leichter auffindbar und schaffen eine kohärente Online-Identität.' },
      { question: 'Ist es besser, meinen echten Namen oder einen kreativen Benutzernamen zu verwenden?', answer: 'Es hängt von Ihren Zielen ab. Echte Namen funktionieren gut für Personal Branding und professionelles Networking. Kreative Benutzernamen eignen sich besser für Nischen-Content-Ersteller oder wenn Sie eine Marke aufbauen, die von Ihrer Identität getrennt ist.' },
      { question: 'Wie wichtig ist mein Instagram-Benutzername für das Wachstum?', answer: 'Ihr Benutzername beeinflusst Auffindbarkeit und ersten Eindruck. Ein klarer, einprägsamer Benutzername, der Ihre Nische anzeigt, kann Menschen helfen, Sie zu finden und Ihren Content auf einen Blick zu verstehen.' },
      { question: 'Kann ich meinen Instagram-Benutzernamen ändern?', answer: 'Ja, Sie können ihn in den Einstellungen ändern. Allerdings werden alte Links ungültig, und häufige Änderungen können Follower verwirren. Wählen Sie sorgfältig, um Änderungen zu minimieren.' },
      { question: 'Sollte ich meine Nische in meinem Benutzernamen einbeziehen?', answer: 'Die Einbeziehung Ihrer Nische (wie Fotografie, Fitness oder Food) hilft bei der Auffindbarkeit und kommuniziert sofort Ihren Fokus. Halten Sie es jedoch allgemein genug für Content-Entwicklung.' },
      { question: 'Was, wenn alle guten Benutzernamen vergeben sind?', answer: 'Probieren Sie Variationen mit Unterstrichen oder Punkten, fügen Sie relevante Beschreibungen hinzu, integrieren Sie Ihren Standort, verwenden Sie Aktionswörter (creates, makes) oder Präfixe wie "the" oder "its".' },
      { question: 'Sind Unterstriche oder Punkte in Benutzernamen besser?', answer: 'Beide funktionieren gut. Punkte können sauberer aussehen (first.last), während Unterstriche universeller erkannt werden (first_last). Wählen Sie basierend auf Lesbarkeit und ästhetischer Präferenz.' },
      { question: 'Wie wähle ich zwischen mehreren Benutzernamen-Optionen?', answer: 'Überlegen Sie: Welcher ist am einfachsten verbal zu buchstabieren? Welcher repräsentiert Ihre Marke langfristig am besten? Welcher ist am einprägsamsten? Fragen Sie Freunde, welchen sie nach einmaligem Hören behalten würden.' },
    ],
  },

  'tiktok-username-generator': {
    slug: 'tiktok-username-generator',
    name: 'TikTok-Benutzernamen-Generator',
    title: 'Kostenloser KI TikTok Username Generator',
    description: 'Erstellen Sie einzigartige TikTok-Benutzernamen, die zu Ihrem Vibe passen. Unsere KI kreiert einprägsame, trendige Handles, die Ihnen helfen, sich abzuheben und Ihre Followerschaft zu vergrößern.',
    metaDescription: 'Erstellen Sie einzigartige TikTok-Benutzernamen, die zu Ihrem Vibe passen. Unsere KI kreiert einprägsame, trendige Handles, die Ihnen...',
    inputLabel: 'Beschreiben Sie sich oder Ihren Content...',
    inputPlaceholder: 'z.B. Comedy-Creator, der Sketche über Büroalltag macht',
    buttonText: 'Benutzernamen generieren',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Benutzernamen-Stil',
        choices: ['Trendy/Lustig', 'Professionell', 'Nischen-fokussiert', 'Persönlichkeitsgetrieben', 'Namensbasiert'],
        default: 'Trendy/Lustig',
        type: 'select',
      },
      {
        name: 'content_niche',
        label: 'Content-Nische',
        choices: ['Unterhaltung/Comedy', 'Fitness/Gesundheit', 'Beauty/Mode', 'Food/Kochen', 'Bildung/Tipps', 'Lifestyle/Vlog', 'Sonstiges'],
        default: 'Unterhaltung/Comedy',
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Neue Creator-Identität', description: 'Neue TikTok-Creator nutzen den Benutzernamen-Generator, um ihre Plattform-Identität zu etablieren. Durch Eingabe ihres Content-Fokus, ihrer Persönlichkeitsmerkmale und Interessen generiert das Tool Benutzernamen-Ideen, die beim TikTok-Publikum ankommen und ihre einzigartige Creator-Marke widerspiegeln.' },
      { title: 'Content-Nischen-Branding', description: 'Creator, die sich auf spezifische Nischen wie Fitness, Kochen, Comedy oder Beauty konzentrieren, nutzen den Generator, um Benutzernamen zu finden, die ihren Content-Fokus sofort kommunizieren. Ein klarer nischenbezogener Benutzername hilft, das richtige Publikum anzuziehen und Autorität in diesem Bereich zu etablieren.' },
      { title: 'Marken- und Business-TikTok-Launch', description: 'Unternehmen, die eine TikTok-Präsenz starten, nutzen den Generator, um Benutzernamen zu finden, die mit ihrer Marke übereinstimmen und gleichzeitig zur lockeren, kreativen Kultur von TikTok passen. Das Tool hilft, Handles zu erstellen, die professionell und dennoch zugänglich für das Plattform-Publikum sind.' },
    ],
    faqs: [
      { question: 'Was sind die TikTok-Benutzernamen-Anforderungen?', answer: 'TikTok-Benutzernamen können bis zu 24 Zeichen lang sein und Buchstaben, Zahlen, Unterstriche und Punkte verwenden. Sie müssen einzigartig sein, sind nicht case-sensitive und können geändert werden (mit Wartezeit zwischen den Änderungen).' },
      { question: 'Kann ich meinen TikTok-Benutzernamen ändern?', answer: 'Ja, Sie können Ihren TikTok-Benutzernamen in den Einstellungen ändern. Allerdings gibt es möglicherweise eine Wartezeit, bevor Sie ihn erneut ändern können, und Ihr alter Benutzername wird für andere verfügbar.' },
      { question: 'Sollte mein TikTok-Benutzername lustig oder professionell sein?', answer: 'Es hängt von Ihrem Content ab. Die TikTok-Kultur tendiert zu locker und lustig, daher verwenden auch professionelle Creator oft zugängliche Benutzernamen. Passen Sie Ihren Benutzernamen an Ihren Content-Stil und die Erwartungen Ihrer Zielgruppe an.' },
      { question: 'Wie mache ich meinen TikTok-Benutzernamen einprägsam?', answer: 'Halten Sie ihn kurz, leicht auszusprechen und mit Ihrem Content verbunden. Alliterationen, Reime oder clevere Wortspiele helfen. Er sollte leicht zu merken sein, nachdem man nur ein Video gesehen hat.' },
      { question: 'Sollte ich meinen echten Namen auf TikTok verwenden?', answer: 'Ihr echter Name kann beim Personal Branding und bei der plattformübergreifenden Wiedererkennung helfen. Kreative Handles funktionieren jedoch oft besser für content-fokussierte Accounts und bieten mehr Flexibilität.' },
      { question: 'Was, wenn mein bevorzugter Benutzername vergeben ist?', answer: 'Versuchen Sie, Ihre Nische hinzuzufügen (mikefitness), Unterstriche zu verwenden (mike_creates), "the" hinzuzufügen (themikefitness) oder eine bedeutungsvolle Beschreibung einzufügen, die Sie unterscheidet.' },
      { question: 'Sollte mein TikTok-Benutzername zu meinem Instagram passen?', answer: 'Konsistente Benutzernamen auf allen Plattformen helfen Followern, Sie überall zu finden. Wenn Ihr bevorzugter Name nicht auf beiden verfügbar ist, verwenden Sie nahe Variationen, die deutlich miteinander verbunden sind.' },
      { question: 'Beeinflussen TikTok-Benutzernamen die Auffindbarkeit?', answer: 'Benutzernamen mit relevanten Schlüsselwörtern können helfen, wenn Nutzer nach Content-Typen suchen. Content-Qualität und Hashtags sind jedoch wichtiger für die Gesamtauffindbarkeit auf TikTok.' },
      { question: 'Wie wichtig ist mein Benutzername für TikTok-Wachstum?', answer: 'Ihr Benutzername ist Ihr erster Eindruck und Ihre Markenidentität, aber Content-Qualität ist wichtiger für das Wachstum. Ein guter Benutzername hilft, aber großartiger Content ist das, was tatsächlich Ihre Followerschaft vergrößert.' },
      { question: 'Sollte ich Zahlen in meinem TikTok-Benutzernamen verwenden?', answer: 'Vermeiden Sie zufällige Zahlen, die unbeabsichtigt aussehen. Bedeutungsvolle Zahlen (Geburtsjahr, Gründungsjahr) können funktionieren, wenn sie zu Ihrer Marke beitragen, aber reine Buchstaben-Benutzernamen sehen generell professioneller aus.' },
    ],
  },

  'youtube-channel-description-generator': {
    slug: 'youtube-channel-description-generator',
    name: 'YouTube-Kanal-Beschreibung-Generator',
    title: 'Kostenloser AI YouTube Channel Description Generator',
    description: 'Erstellen Sie eine überzeugende YouTube-Kanal-Beschreibung, die Abonnenten anzieht. Unsere KI generiert SEO-optimierte Beschreibungen, die Ihren Content präsentieren und Ihr Publikum vergrößern.',
    metaDescription: 'Erstellen Sie eine überzeugende YouTube-Kanal-Beschreibung, die Abonnenten anzieht. Unsere KI generiert SEO-optimierte Beschreibungen, die...',
    inputLabel: 'Beschreiben Sie Ihren YouTube-Kanal...',
    inputPlaceholder: 'z.B. Tech-Review-Kanal mit Fokus auf Budget-Smartphones und Gadgets',
    buttonText: 'Beschreibung generieren',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Kanal-Ton',
        choices: ['Professionell', 'Freundlich', 'Enthusiastisch', 'Informativ', 'Locker'],
        default: 'Freundlich',
        type: 'select',
      },
      {
        name: 'channel_type',
        label: 'Kanaltyp',
        choices: ['Bildung/Tutorial', 'Unterhaltung', 'Vlog/Lifestyle', 'Gaming', 'Business/Marke', 'Review/Kommentar'],
        default: 'Bildung/Tutorial',
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Kanal-SEO-Optimierung', description: 'YouTuber nutzen den Kanal-Beschreibung-Generator, um keyword-reiche Beschreibungen zu erstellen, die die Kanalsichtbarkeit in YouTube- und Google-Suchergebnissen verbessern. Durch Eingabe von Kanalfokus, Ziel-Keywords und Content-Typen generiert das Tool optimierte Beschreibungen, die potenziellen Zuschauern helfen, den Kanal zu entdecken.' },
      { title: 'Verbesserung der Abonnenten-Konversion', description: 'Creator, die Kanalbesucher in Abonnenten umwandeln möchten, nutzen den Generator, um überzeugende Beschreibungen zu erstellen, die den Kanalwert klar erklären. Gut formulierte Beschreibungen, die einzigartige Wertversprechen kommunizieren und klare Erwartungen setzen, führen zu höheren Abo-Raten.' },
      { title: 'Effiziente Kanal-Einrichtung', description: 'Neue YouTuber und Unternehmen, die Kanäle starten, nutzen den Generator, um schnell professionelle Beschreibungen zu erstellen. Dies spart Zeit bei der Kanal-Einrichtung und stellt sicher, dass die Info-Seite von Anfang an einen starken ersten Eindruck macht.' },
    ],
    faqs: [
      { question: 'Wie lang sollte eine YouTube-Kanal-Beschreibung sein?', answer: 'YouTube erlaubt bis zu 1.000 Zeichen für Kanal-Beschreibungen. Verwenden Sie genug, um Ihr Wertversprechen klar zu vermitteln, aber füllen Sie nicht mit unnötigem Content. Die effektivsten Beschreibungen sind 500-800 Zeichen lang.' },
      { question: 'Was sollte ich in meine Kanal-Beschreibung aufnehmen?', answer: 'Enthalten Sie: worum es auf Ihrem Kanal geht, was Zuschauer lernen oder erleben werden, Ihren Upload-Zeitplan, wer Sie sind und Ihre Referenzen, einen Abo-Call-to-Action und Kontaktinformationen für Geschäftsanfragen.' },
      { question: 'Wie beeinflusst die Kanal-Beschreibung SEO?', answer: 'Kanal-Beschreibungen helfen YouTube, Ihren Content für Empfehlungen und Suche zu verstehen. Integrieren Sie relevante Keywords natürlich, um die Auffindbarkeit zu verbessern. Die ersten 100-150 Zeichen sind besonders wichtig für Suchergebnis-Vorschauen.' },
      { question: 'Wie optimiere ich meine Beschreibung für die Suche?', answer: 'Integrieren Sie Keywords, nach denen Ihre Zielgruppe sucht, laden Sie wichtige Informationen vorne, verwenden Sie natürliche Sprache (kein Keyword-Stuffing) und aktualisieren Sie regelmäßig, um Content frisch und relevant zu halten.' },
      { question: 'Sollte ich meinen Upload-Zeitplan angeben?', answer: 'Ja, wenn Sie einen konsistenten Zeitplan haben. Die Angabe "Neue Videos jeden Dienstag und Freitag" setzt Zuschauererwartungen und kann Abonnements von Menschen fördern, die regelmäßigen Content möchten.' },
      { question: 'Welchen Call-to-Action sollte ich einbinden?', answer: 'Laden Sie Zuschauer ein, zu abonnieren und Benachrichtigungen zu aktivieren. Seien Sie konkret, was sie bekommen werden. Beispiel: "Abonnieren und auf die Glocke drücken für wöchentliche Koch-Tutorials, die die Abendessensvorbereitung vereinfachen."' },
      { question: 'Sollte ich meine E-Mail in der Beschreibung angeben?', answer: 'Ja, wenn Sie offen für Geschäftsanfragen, Kooperationen oder Sponsorings sind. Eine professionelle E-Mail-Adresse lässt Ihren Kanal etablierter und zugänglicher für potenzielle Partner erscheinen.' },
      { question: 'Wie oft sollte ich meine Kanal-Beschreibung aktualisieren?', answer: 'Aktualisieren Sie, wenn sich Ihr Content-Fokus, Upload-Zeitplan oder Kanalfokus signifikant ändert. Überprüfen Sie vierteljährlich, um sicherzustellen, dass Informationen aktuell und relevant bleiben.' },
      { question: 'Kann meine Kanal-Beschreibung mir helfen, Sponsoren zu bekommen?', answer: 'Ja. Eine professionelle Beschreibung, die Ihre Nische, Ihr Publikum und Engagement klar angibt, macht Ihren Kanal attraktiver für potenzielle Sponsoren, die nach relevanten Creatorn suchen.' },
      { question: 'Sollte meine Kanal-Beschreibung zum Ton meiner Videos passen?', answer: 'Ja, Ihre Beschreibung sollte die Persönlichkeit und den Content-Stil Ihres Kanals widerspiegeln. Ein Comedy-Kanal sollte lustig und ansprechend klingen; ein Business-Education-Kanal sollte professionell und autoritativ wirken.' },
    ],
  },

  'youtube-name-generator': {
    slug: 'youtube-name-generator',
    name: 'YouTube-Namen-Generator',
    title: 'Kostenloser KI YouTube Name Generator',
    description: 'Generieren Sie kreative YouTube-Kanalnamen, die herausstechen. Unsere KI erstellt einprägsame, markenfähige Namen, die Abonnenten anziehen und Ihre Content-Nische widerspiegeln.',
    metaDescription: 'Generieren Sie kreative YouTube-Kanalnamen, die herausstechen. Unsere KI erstellt einprägsame, markenfähige Namen, die Abonnenten anziehen...',
    inputLabel: 'Beschreiben Sie Ihren Kanal-Content...',
    inputPlaceholder: 'z.B. Gaming-Kanal mit Fokus auf Indie-Spiele und Retro-Reviews',
    buttonText: 'Namen generieren',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Namensstil',
        choices: ['Creator-Name', 'Thema/Nische', 'Kreativ/Marke', 'Persönlichkeit + Nische', 'Professionell'],
        default: 'Kreativ/Marke',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'Content-Typ',
        choices: ['Gaming', 'Bildung/Tutorial', 'Unterhaltung', 'Vlog/Lifestyle', 'Tech/Reviews', 'Beauty/Mode', 'Kochen/Food', 'Fitness', 'Business', 'Sonstiges'],
        default: 'Unterhaltung',
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Content-Ersteller und YouTuber', description: 'Angehende YouTuber nutzen den Namen-Generator, um einzigartige, einprägsame Kanalnamen zu finden, die auf ihre Content-Nische zugeschnitten sind. Ob Gaming, Kochen, Tech oder Lifestyle-Vlogging – das Tool liefert Vorschläge, die zur Creator-Markenidentität passen und helfen, eine starke Online-Präsenz zu etablieren.' },
      { title: 'Digitale Marketing-Agenturen', description: 'Marketing-Agenturen, die mit Kunden arbeiten, die YouTube-Kanäle starten, nutzen den Generator zum Brainstorming von Namen, die bei Zielgruppen ankommen. Das Tool hilft bei der Entwicklung von Kanalnamen-Ideen, die mit Kundenmarke, Branche und Content-Fokus übereinstimmen.' },
      { title: 'Business-Marken-Erweiterung', description: 'Unternehmen, die ihre Online-Präsenz auf YouTube erweitern, nutzen den Generator, um Namensoptionen für offizielle Kanäle zu erkunden. Das Tool hilft, Namen zu finden, die die bestehende Markenidentität ergänzen und gleichzeitig für YouTubes Plattform optimiert sind.' },
    ],
    faqs: [
      { question: 'Was macht einen guten YouTube-Kanalnamen aus?', answer: 'Gute Kanalnamen sind einprägsam, leicht zu buchstabieren und auszusprechen, relevant für den Content, einzigartig genug zum Suchen und flexibel genug für Content-Entwicklung. Sie sollten gut gesprochen und als visuelles Branding funktionieren.' },
      { question: 'Sollte mein Kanalname meinen Content beschreiben?', answer: 'Beschreibende Namen (TechReviews, DailyGardening) kommunizieren sofort den Content-Fokus, können aber Flexibilität einschränken. Kreative Namen (Vsauce, MrBeast) sind flexibler, erfordern aber mehr Branding-Aufwand. Wählen Sie basierend auf Ihren Zielen.' },
      { question: 'Wie prüfe ich, ob ein Kanalname verfügbar ist?', answer: 'Suchen Sie YouTube nach dem genauen Namen, prüfen Sie die YouTube-@Handle-Verfügbarkeit, durchsuchen Sie Domain-Registrare auf Website-Verfügbarkeit und prüfen Sie wichtige Social-Media-Plattformen auf Benutzernamen-Konsistenz.' },
      { question: 'Kann ich meinen YouTube-Kanalnamen später ändern?', answer: 'Ja, Sie können Ihren Kanal-Anzeigenamen und Handle ändern (mit Einschränkungen). Namensänderungen können jedoch bestehende Abonnenten verwirren und die Markenbekanntheit beeinträchtigen, wählen Sie also anfangs sorgfältig.' },
      { question: 'Sollte ich meinen echten Namen für meinen Kanal verwenden?', answer: 'Ihr echter Name funktioniert gut für Personal Brands, Experten-Positionierung und langfristigen Karriereaufbau. Kreative Namen eignen sich besser für unterhaltungsfokussierten Content oder wenn Sie eine Marke aufbauen, die von Ihrer persönlichen Identität getrennt ist.' },
      { question: 'Wie wichtig ist der Kanalname für das Wachstum?', answer: 'Ihr Kanalname beeinflusst den ersten Eindruck und die Auffindbarkeit, aber Content-Qualität ist wichtiger für das Wachstum. Ein klarer, einprägsamer Name hilft, aber großartiger Content ist es, der tatsächlich Ihre Abonnentenzahl vergrößert.' },
      { question: 'Sollte mein Kanalname zu meinen anderen Social Media passen?', answer: 'Konsistenz auf allen Plattformen hilft Followern, Sie überall zu finden und stärkt die Markenbekanntheit. Wenn exakte Übereinstimmungen nicht verfügbar sind, verwenden Sie nahe Variationen, die deutlich miteinander verbunden sind.' },
      { question: 'Was, wenn mein bevorzugter Kanalname vergeben ist?', answer: 'Probieren Sie Variationen: Ihre Nische hinzufügen (Mike Tech Tips), eine Beschreibung einbauen (The Cooking Channel) oder eine einzigartige Variation erstellen. Prüfen Sie, ob der vergebene Kanal inaktiv ist – Namen von gelöschten Kanälen werden irgendwann wieder verfügbar.' },
      { question: 'Beeinflussen Kanalnamen YouTube-SEO?', answer: 'Kanalnamen können die Auffindbarkeit beeinflussen. Namen mit relevanten Keywords können helfen, wenn Nutzer nach diesem Thema suchen. Einzigartige, markenfähige Namen ohne Keywords können jedoch mit ordentlicher Optimierung immer noch gut ranken.' },
      { question: 'Sollte ich "YouTube" in meinem Kanalnamen haben?', answer: 'Generell nein. Es ist überflüssig, da Sie auf YouTube sind, verbraucht wertvolle Zeichen und funktioniert nicht gut für plattformübergreifendes Branding. Halten Sie Ihren Namen plattformneutral.' },
    ],
  },

  'youtube-video-description-generator': {
    slug: 'youtube-video-description-generator',
    name: 'YouTube-Video-Beschreibung-Generator',
    title: 'Kostenloser KI YouTube Video Description Generator',
    description: 'Generieren Sie SEO-optimierte YouTube-Beschreibungen, die Views steigern. Unsere KI erstellt überzeugende Beschreibungen mit Hooks, Zeitstempeln und Keywords, die Videos höher ranken lassen.',
    metaDescription: 'Generieren Sie SEO-optimierte YouTube-Beschreibungen, die Views steigern. Unsere KI erstellt überzeugende Beschreibungen mit Hooks,...',
    inputLabel: 'Beschreiben Sie Ihren Video-Content...',
    inputPlaceholder: 'z.B. Tutorial zur Fotobearbeitung in Lightroom für Anfänger',
    buttonText: 'Beschreibung generieren',
    maxLength: 2048,
    options: [
      {
        name: 'video_type',
        label: 'Video-Typ',
        choices: ['Tutorial/Bildung', 'Unterhaltung/Vlog', 'Review/Produkt', 'Gaming', 'News/Kommentar', 'Musik/Performance'],
        default: 'Tutorial/Bildung',
        type: 'select',
      },
      {
        name: 'include_timestamps',
        label: 'Zeitstempel-Vorlage einbinden',
        choices: ['Ja', 'Nein'],
        default: 'Ja',
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'SEO-optimierte Video-Beschreibungen', description: 'YouTuber nutzen den Video-Beschreibung-Generator, um Beschreibungen zu erstellen, die Such-Rankings und Sichtbarkeit verbessern. Durch Eingabe von Video-Content, Ziel-Keywords und Kernpunkten generiert das Tool SEO-freundliche Beschreibungen, die Videos helfen, höher in YouTube- und Google-Suchergebnissen zu ranken.' },
      { title: 'Effiziente Massen-Video-Beschreibungserstellung', description: 'Creator, die mehrere Videos verwalten, nutzen den Generator, um die Beschreibungserstellung zu optimieren. Das Tool ermöglicht die Eingabe grundlegender Informationen und generiert angepasste Beschreibungen für Video-Batches, was Zeit spart und gleichzeitig Konsistenz und Qualität über den Content hinweg gewährleistet.' },
      { title: 'Erhöhtes Zuschauer-Engagement', description: 'Creator, die Engagement-Metriken verbessern möchten, nutzen den Generator, um Beschreibungen mit klaren Calls-to-Action, hilfreichen Zeitstempeln und überzeugenden Gründen zum Anschauen zu erstellen. Gut strukturierte Beschreibungen fördern Likes, Abos und Klicks auf verwandten Content.' },
    ],
    faqs: [
      { question: 'Wie lang sollte eine YouTube-Video-Beschreibung sein?', answer: 'YouTube erlaubt bis zu 5.000 Zeichen. Streben Sie mindestens 200-300 Wörter für SEO-Vorteile an. Die ersten 100-200 Zeichen sind am wichtigsten, da sie in Suchergebnissen erscheinen, also laden Sie Schlüsselinformationen vorne.' },
      { question: 'Was sollte ich in die erste Zeile meiner Beschreibung setzen?', answer: 'Fügen Sie Ihr primäres Keyword und einen überzeugenden Hook ein, der Zuschauern sagt, was sie vom Video bekommen. Dieser Text erscheint in Suchergebnissen und beeinflusst die Klickrate.' },
      { question: 'Wie funktionieren Zeitstempel in Beschreibungen?', answer: 'Zeitstempel erstellen klickbare Kapitel in Ihrem Video. Formatieren Sie als "0:00 Einführung" mit Zeit und Label. YouTube erstellt automatisch Kapitelmarker, wenn Zeitstempel richtig formatiert sind.' },
      { question: 'Sollte ich Hashtags in Video-Beschreibungen aufnehmen?', answer: 'Ja, 3-5 relevante Hashtags am Ende Ihrer Beschreibung. Die ersten drei Hashtags erscheinen über Ihrem Video-Titel und erhöhen die Auffindbarkeit für diese Themen.' },
      { question: 'Wie beeinflussen Video-Beschreibungen SEO?', answer: 'Beschreibungen helfen YouTube, Ihren Video-Content für Suche und Empfehlungen zu verstehen. Die Integration relevanter Keywords, umfassender Informationen und korrekter Formatierung verbessert das Ranking-Potenzial.' },
      { question: 'Sollte jedes Video dasselbe Beschreibungsformat haben?', answer: 'Eine konsistente Struktur (wie Kanalinfo am Ende) ist gut, aber passen Sie die Hauptbeschreibung an den spezifischen Video-Content an. Vermeiden Sie identische Beschreibungen über Videos hinweg.' },
      { question: 'Welche Links sollte ich in Beschreibungen aufnehmen?', answer: 'Enthalten Sie: im Video erwähnte Ressourcen, relevante Produkt-Links (mit Affiliate-Offenlegung falls zutreffend), Ihre Social-Media-Profile, Abo-Link und Links zu verwandten Videos oder Playlists.' },
      { question: 'Wie offenlege ich Affiliate-Links korrekt?', answer: 'Fügen Sie eine klare Offenlegung ein wie "Einige Links oben sind Affiliate-Links, was bedeutet, dass ich eine Provision verdiene, wenn Sie kaufen, ohne Mehrkosten für Sie." Platzieren Sie dies nahe den Affiliate-Links für Transparenz.' },
      { question: 'Muss ich für ähnliche Videos unterschiedliche Beschreibungen schreiben?', answer: 'Ja, jedes Video sollte eine einzigartige Beschreibung haben. Doppelte Beschreibungen über Videos hinweg können SEO schaden und bieten Zuschauern keinen spezifischen Wert für jedes einzelne Video.' },
      { question: 'Wie oft sollte ich Video-Beschreibungen aktualisieren?', answer: 'Aktualisieren Sie Beschreibungen, wenn sich Links ändern, Content veraltet ist oder Sie neue CTAs hinzufügen möchten. Bei Evergreen-Content können gelegentliche Updates auch die SEO-Performance auffrischen.' },
    ],
  },

  'rewording-tool': {
    slug: 'rewording-tool',
    name: 'Umformulierungs-Tool',
    title: 'Kostenloses KI-Tool zum Umformulieren',
    description: 'Formulieren Sie Text sofort mit unserem KI-Tool um. Transformieren Sie Sätze und Absätze für bessere Klarheit, anderen Ton oder einzigartigen Content.',
    metaDescription: 'Formulieren Sie Text sofort mit unserem KI-Tool um. Transformieren Sie Sätze und Absätze für bessere Klarheit, anderen Ton oder...',
    inputLabel: 'Text zum Umformulieren eingeben...',
    inputPlaceholder: 'Fügen Sie Ihren Text hier ein, um ihn umzuformulieren...',
    buttonText: 'Text umformulieren',
    maxLength: 4096,
    options: [
      {
        name: 'tone',
        label: 'Ziel-Ton',
        choices: ['Formell/Professionell', 'Locker/Umgangssprachlich', 'Akademisch/Wissenschaftlich', 'Kreativ/Ansprechend', 'Vereinfacht/Einfach'],
        default: 'Locker/Umgangssprachlich',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'Umformulierungs-Intensität',
        choices: ['Leicht (Subtile Änderungen)', 'Mittel (Ausgewogen)', 'Stark (Signifikante Transformation)'],
        default: 'Mittel (Ausgewogen)',
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Content-Erstellung und SEO', description: 'Content-Ersteller und SEO-Profis nutzen das Umformulierungs-Tool, um einzigartige Versionen bestehender Inhalte zu erstellen. Dies hilft, Duplicate-Content-Probleme zu vermeiden und gleichzeitig frische, originelle Beiträge zu generieren, die die Website-Suchmaschinenrankings verbessern.' },
      { title: 'Akademisches und wissenschaftliches Schreiben', description: 'Studenten, Forscher und Akademiker nutzen das Umformulierungs-Tool, um Inhalte aus verschiedenen Quellen beim Recherchieren oder Schreiben von Arbeiten zu paraphrasieren. Das Tool hilft, Erkenntnisse, Zitate oder Informationen in eigenen Worten umzuschreiben und dabei Genauigkeit zu wahren und Plagiate zu vermeiden.' },
      { title: 'Social-Media- und Marketing-Content', description: 'Marketer und Social-Media-Manager nutzen das Umformulierungs-Tool, um einzigartige Variationen von Produktbeschreibungen, Werbe-Content oder Social-Media-Posts zu erstellen. Das Umformulieren von Marketing-Nachrichten hilft, Publikumsaufmerksamkeit zu gewinnen und ermöglicht das Testen verschiedener Ansätze auf Plattformen.' },
    ],
    faqs: [
      { question: 'Was ist ein Umformulierungs-Tool?', answer: 'Ein Umformulierungs-Tool hilft, Text umzuformulieren, indem Wörter durch Synonyme ersetzt, Sätze umstrukturiert oder der Schreibstil geändert wird, während die ursprüngliche Bedeutung erhalten bleibt. Es ist nützlich für das Erstellen einzigartiger Inhalte, die Verbesserung der Klarheit oder die Anpassung des Tons.' },
      { question: 'Ist Umformulieren dasselbe wie Paraphrasieren?', answer: 'Sie sind sehr ähnlich. Beide beinhalten das Ausdrücken derselben Ideen mit anderen Worten. Umformulieren bezieht sich oft auf kleinere Änderungen (Sätze oder Absätze), während Paraphrasieren manchmal ein Zusammenfassen oder größere Transformation impliziert.' },
      { question: 'Wie unterscheidet sich das von der bloßen Verwendung von Synonymen?', answer: 'Qualitatives Umformulieren geht über einfaches Synonym-Ersetzen hinaus. Es strukturiert Sätze um, ändert grammatische Konstruktionen, variiert Satzlängen und verbessert den Fluss – was zu natürlich klingendem Text führt, nicht roboterhaft.' },
      { question: 'Kann ich umformulierten Content ohne Plagiatsbedenken verwenden?', answer: 'Umformulieren hilft, einzigartige Formulierungen zu erstellen, aber Sie sollten dennoch Originalquellen für Ideen zitieren, die nicht Ihre eigenen sind. Das Tool hilft beim Ausdruck, aber korrekte Attribution für Konzepte und Forschung bleibt wichtig.' },
      { question: 'Welche Texttypen kann ich umformulieren?', answer: 'Sie können jeden Text umformulieren: Artikel, Blog-Posts, Essays, Produktbeschreibungen, E-Mails, Social-Media-Content, akademische Arbeiten, Marketing-Texte und mehr. Das Tool passt sich verschiedenen Content-Typen an.' },
      { question: 'Wie bekomme ich bessere Umformulierungs-Ergebnisse?', answer: 'Geben Sie klaren Kontext zu Ihrem Ziel (Klarheit, Förmlichkeit, Einzigartigkeit), spezifizieren Sie den gewünschten Ton und geben Sie an, ob Sie leichte Bearbeitung oder signifikante Transformation wünschen. Je spezifischer Ihre Anfrage, desto besser das Ergebnis.' },
      { question: 'Wird Umformulieren die Bedeutung meines Textes ändern?', answer: 'Qualitatives Umformulieren bewahrt die Kernbedeutung bei gleichzeitiger Änderung des Ausdrucks. Überprüfen Sie jedoch immer umformulierten Text, um sicherzustellen, dass er Ihre beabsichtigte Botschaft korrekt vermittelt, besonders bei technischem oder spezialisiertem Content.' },
      { question: 'Kann dieses Tool mein Schreiben formeller oder lockerer machen?', answer: 'Ja, Tonanpassung ist eine Kernfunktion. Sie können lockeres Schreiben in professionelle Sprache für Geschäftsdokumente umwandeln oder formellen Text für Social Media und Blogs gesprächiger gestalten.' },
      { question: 'Wie unterscheidet sich das von einer Grammatikprüfung?', answer: 'Grammatikprüfer beheben Fehler in bestehendem Text. Umformulierungs-Tools transformieren, wie Ideen ausgedrückt werden, und erstellen neue Versionen von Content. Sie dienen unterschiedlichen Zwecken, können aber zusammen für polierte Ergebnisse verwendet werden.' },
      { question: 'Sollte ich immer die umformulierte Version akzeptieren?', answer: 'Nein, überprüfen und bearbeiten Sie immer. KI-Umformulierung ist ein Ausgangspunkt, der möglicherweise verfeinert werden muss. Nutzen Sie Ihr Urteil, um sicherzustellen, dass die endgültige Version Ihre Stimme genau wiedergibt, Genauigkeit bewahrt und zu Ihrem spezifischen Kontext passt.' },
    ],
  },

  'grammar-checker': {
    slug: 'grammar-checker',
    name: 'Grammatik-Prüfer',
    title: 'Kostenloser KI-Grammatik-Prüfer',
    description: 'Prüfen Sie Ihre Grammatik, Rechtschreibung und Zeichensetzung kostenlos. Erhalten Sie sofortige Korrekturen mit klaren Erklärungen.',
    metaDescription: 'Prüfen Sie Ihre Grammatik, Rechtschreibung und Zeichensetzung kostenlos. Erhalten Sie sofortige Korrekturen mit klaren Erklärungen zur...',
    inputLabel: 'Text zur Prüfung...',
    inputPlaceholder: 'Fügen Sie Ihren Text hier ein, um ihn auf Grammatik-, Rechtschreib- und Zeichensetzungsfehler zu prüfen...',
    buttonText: 'Grammatik prüfen',
    maxLength: 4096,
    options: [
      { name: 'mode', label: 'Prüfmodus', choices: ['Schnellkorrektur', 'Standard', 'Detailliertes Lernen', 'Akademisch', 'Locker/Kreativ'], default: 'Standard', type: 'select' },
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Professionelle Kommunikation polieren', description: 'Business-Profis nutzen den Grammatik-Prüfer, um sicherzustellen, dass E-Mails, Berichte und Präsentationen fehlerfrei sind, bevor sie an Kollegen, Kunden oder Führungskräfte gesendet werden. Sauberes, professionelles Schreiben baut Glaubwürdigkeit auf und verhindert peinliche Fehler, die Ihre Botschaft untergraben können.' },
      { title: 'Akademisches Korrekturlesen', description: 'Studenten und Forscher können Essays, Arbeiten und Dissertation-Entwürfe vor der Einreichung auf Grammatik- und Zeichensetzungsfehler prüfen. Das Tool erkennt Fehler, die die Rechtschreibprüfung übersieht, und liefert Erklärungen, die helfen, Schreibfähigkeiten im Laufe der Zeit zu verbessern.' },
      { title: 'Content-Erstellung Qualitätssicherung', description: 'Blogger, Content-Marketer und Autoren nutzen den Grammatik-Prüfer als finalen Qualitäts-Check vor der Veröffentlichung. Selbst professionelle Autoren übersehen Fehler bei der Selbstbearbeitung, und das Tool bietet eine frische automatisierte Überprüfung, die Versehen erkennt.' },
    ],
    faqs: [
      { question: 'Welche Fehlertypen findet der Grammatik-Prüfer?', answer: 'Das Tool identifiziert Grammatikfehler (Subjekt-Verb-Übereinstimmung, Zeitenprobleme, Satzfragmente), Rechtschreibfehler, Zeichensetzungsprobleme (Kommas, Apostrophe, Semikolons) und häufig verwechselte Wörter. Es kennzeichnet auch Stilvorschläge für Klarheit und Lesbarkeit.' },
      { question: 'Ist der Grammatik-Prüfer kostenlos?', answer: 'Ja, das Tool ist komplett kostenlos ohne Limits. Prüfen Sie so viele Texte wie nötig, ohne sich anzumelden oder etwas zu bezahlen.' },
      { question: 'Wie unterscheidet sich das von der Rechtschreibprüfung?', answer: 'Die Standard-Rechtschreibprüfung erkennt nur Tippfehler. Unser Grammatik-Prüfer analysiert Satzstruktur, Zeichensetzung, Wortverwendung und Stil – und erkennt Fehler wie "ihr geht nach Hause", die die Rechtschreibprüfung übersieht, weil alle Wörter richtig geschrieben sind.' },
      { question: 'Wird das Tool meinen Schreibstil ändern?', answer: 'Das Tool konzentriert sich auf die Korrektur tatsächlicher Fehler und bewahrt dabei Ihre Stimme. Stilvorschläge sind deutlich als optional markiert, und Sie wählen, welche Änderungen Sie akzeptieren. Es macht Ihr Schreiben nicht generisch oder roboterhaft.' },
      { question: 'Kann es akademisches oder formelles Schreiben prüfen?', answer: 'Ja, Sie können einen akademischen Modus wählen, der strengere Grammatikstandards und formelle Konventionen anwendet, die für wissenschaftliches Schreiben, Geschäftsdokumente oder professionelle Kommunikation geeignet sind.' },
      { question: 'Erklärt es, warum etwas falsch ist?', answer: 'Ja, jeder Fehler enthält eine Erklärung der verletzten Regel und Hinweise, wie ähnliche Fehler vermieden werden können. Dies hilft Ihnen zu lernen und sich zu verbessern, nicht nur das unmittelbare Problem zu beheben.' },
      { question: 'Wie lang kann mein Text sein?', answer: 'Das Tool verarbeitet Texte verschiedener Längen, von kurzen E-Mails bis zu langen Dokumenten. Bei sehr langen Dokumenten erzielen Sie möglicherweise bessere Ergebnisse, wenn Sie Abschnitt für Abschnitt prüfen.' },
      { question: 'Funktioniert es für andere Sprachen als Englisch?', answer: 'Das Tool ist für deutsche Grammatik, Rechtschreibung und Zeichensetzung optimiert. Es kann einige Fehler in anderen Sprachen erkennen, ist aber nicht für umfassende nicht-deutsche Prüfung konzipiert.' },
      { question: 'Wird es alle meine Fehler finden?', answer: 'Während das Tool die große Mehrheit häufiger Fehler erkennt, ist kein automatischer Prüfer perfekt. Wir empfehlen, es als Teil Ihres Bearbeitungsprozesses zu verwenden, nicht als vollständigen Ersatz für menschliches Korrekturlesen bei kritischen Dokumenten.' },
      { question: 'Kann ich es für kreatives Schreiben verwenden?', answer: 'Ja, wählen Sie den locker/kreativ Modus für mehr Flexibilität. Das Tool respektiert beabsichtigte Fragmente, informelle Sprache und stilistische Entscheidungen, während es echte Fehler erkennt.' },
    ],
  },

  'plagiarism-checker': {
    slug: 'plagiarism-checker',
    name: 'Plagiat-Prüfer',
    title: 'Kostenloser AI Plagiarism Checker',
    description: 'Analysieren Sie Ihren Content auf Originalität und identifizieren Sie Passagen, die möglicherweise Zitate oder Umschreibung benötigen.',
    metaDescription: 'Analysieren Sie Ihren Content auf Originalität und identifizieren Sie Passagen, die möglicherweise Zitate oder Umschreibung benötigen....',
    inputLabel: 'Text zur Prüfung...',
    inputPlaceholder: 'Fügen Sie Ihren Text hier ein, um ihn auf Originalität zu prüfen...',
    buttonText: 'Originalität prüfen',
    maxLength: 4096,
    options: [
      { name: 'checkType', label: 'Prüfungstyp', choices: ['Schnell-Scan', 'Standard-Analyse', 'Detaillierter Bericht'], default: 'Standard-Analyse', type: 'select' },
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Akademische Vor-Einreichungs-Prüfung', description: 'Studenten können Arbeiten vor der Einreichung durch den Plagiat-Prüfer laufen lassen, um Passagen zu identifizieren, die möglicherweise als zu ähnlich zu Quellen markiert werden könnten. Das Tool hilft zu identifizieren, wo Zitate benötigt werden und welche Abschnitte von einer Umschreibung in originellerer Sprache profitieren könnten.' },
      { title: 'Content-Qualitätssicherung', description: 'Verlage und Editoren können eingereichten Content vor der Veröffentlichung auf Originalitätsindikatoren prüfen. Obwohl kein Ersatz für umfassende datenbankbasierte Tools, bietet es eine schnelle Erstprüfung auf offensichtliche Plagiat-Warnsignale oder inkonsistente Schreibqualität.' },
      { title: 'Selbst-Audit für Autoren', description: 'Autoren können ihre eigene Arbeit prüfen, um sicherzustellen, dass sie nicht versehentlich Formulierungen verwendet haben, die recherchierten Quellen zu ähnlich sind. Das Tool hilft zu identifizieren, wo originelle Sprache oder korrekte Attribution benötigt wird, um die Schreibintegrität zu wahren.' },
    ],
    faqs: [
      { question: 'Wie funktioniert der Plagiat-Prüfer?', answer: 'Das Tool analysiert Ihren Text auf Originalitätsindikatoren einschließlich Schreibkonsistenz, Stilmuster und Passagen, die vorlagenbasiert erscheinen oder Zitation erfordern. Es markiert potenzielle Bedenken und liefert Verbesserungsempfehlungen.' },
      { question: 'Ist dieser Plagiat-Prüfer kostenlos?', answer: 'Ja, das Tool ist komplett kostenlos ohne Registrierung.' },
      { question: 'Ist das so genau wie Turnitin oder Copyscape?', answer: 'Nein. Diese Dienste vergleichen Ihren Text mit massiven Datenbanken veröffentlichter Inhalte. Dieses Tool verwendet Musteranalyse zur Identifizierung von Warnsignalen, kann aber nicht definitiv bestätigen, ob Text anderswo online erscheint. Für Hochrisiko-Prüfungen verwenden Sie einen dedizierten Service.' },
      { question: 'Was erkennt der Plagiat-Prüfer tatsächlich?', answer: 'Das Tool identifiziert: Stilinkonsistenzen, die auf Copy-Paste hindeuten, Fakten/Statistiken, die Zitation benötigen, Passagen, die vorlagenbasiert erscheinen, und Qualitätsverschiebungen, die auf nicht-originellen Content hindeuten könnten.' },
      { question: 'Kann es erkennen, ob ich aus einer bestimmten Quelle kopiert habe?', answer: 'Nein, das Tool kann keine spezifischen Quellen identifizieren. Es kann nur Passagen markieren, die aufgrund von Schreibmustern potenziell nicht-original erscheinen. Sie benötigen ein datenbankbasiertes Tool, um gegen spezifische Quellen abzugleichen.' },
      { question: 'Wird es KI-generierten Content erkennen?', answer: 'Dieses Tool konzentriert sich auf Plagiatsmuster, nicht auf KI-Erkennung. Für KI-Content-Erkennung verwenden Sie unser dediziertes KI-Content-Detektor-Tool.' },
      { question: 'Was sollte ich tun, wenn Passagen markiert werden?', answer: 'Überprüfen Sie markierte Passagen, um festzustellen, ob sie benötigen: direktes Zitat (wenn zitiert wird), Paraphrasierung mit Attribution (wenn Quellen zusammengefasst werden) oder vollständiges Umschreiben in eigenen Worten.' },
      { question: 'Kann ich das für akademische Arbeiten verwenden?', answer: 'Als Vorabprüfung ja. Verwenden Sie aber immer den offiziellen Plagiat-Prüfer Ihrer Institution (normalerweise Turnitin) vor der endgültigen Einreichung, da dies das ist, was Ihre Dozenten verwenden werden.' },
      { question: 'Wie lang kann mein Text sein?', answer: 'Das Tool verarbeitet Standard-Dokumentlängen. Bei sehr langen Dokumenten erzielen Sie möglicherweise bessere Ergebnisse, wenn Sie Kapitel für Kapitel prüfen.' },
      { question: 'Was ist der Unterschied zwischen Plagiat und fehlenden Zitaten?', answer: 'Plagiat bedeutet, die Arbeit anderer als eigene auszugeben. Fehlende Zitate können versehentlich sein – Sie wissen, dass Sie Informationen irgendwoher haben, aber vergaßen zu zitieren. Beides muss behoben werden, aber die Absicht unterscheidet sich. Das Tool markiert beide Probleme.' },
    ],
  },

  'blog-post-ideas-generator': {
    slug: 'blog-post-ideas-generator',
    name: 'Blog-Artikel-Ideen-Generator',
    title: 'Kostenloser KI-Blogartikel-Generator',
    description: 'Keine Content-Ideen? Generieren Sie einzigartige, SEO-optimierte Blog-Post-Ideen in Sekunden. Unsere KI liefert schreibfertige Themen.',
    metaDescription: 'Keine Content-Ideen? Generieren Sie einzigartige, SEO-optimierte Blog-Post-Ideen in Sekunden. Unsere KI liefert schreibfertige Themen.',
    inputLabel: 'Thema oder Nische...',
    inputPlaceholder: 'z.B. B2B SaaS E-Mail-Marketing für Startup-Gründer',
    buttonText: 'Ideen generieren',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_ideas',
        label: 'Anzahl der Ideen',
        choices: ['3 Ideen', '5 Ideen', '10 Ideen'],
        default: '5 Ideen',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Ton',
        choices: ['Formell', 'Locker', 'Überzeugend'],
        default: 'Formell',
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
### Step 3: Apply the SPARK Formula to Each Idea
- **S**pecific: Is the topic narrow enough to rank and satisfy intent?
- **P**ractical: Can readers immediately apply this information?
- **A**udience-focused: Does it address a real pain point or desire?
- **R**ankable: Is there realistic opportunity to rank for related terms?
- **K**nowledge gap: Does it fill a gap in existing content?
## OUTPUT RULES
### For Each Idea, Provide:
1. **Title**: A compelling, click-worthy headline (60-70 characters ideal)
2. **Angle**: 1-2 sentences explaining the unique approach or perspective
3. **Target Keyword Concept**: The primary search term this would target
4. **Content Type**: The format (how-to, listicle, comparison, etc.)
5. **Audience**: Who specifically would search for and benefit from this
### Quantity Guidelines:
- Generate {{number_of_ideas}} distinct ideas
- Ensure variety across content types
- No duplicate angles or overlapping topics
### Quality Standards:
- NO generic ideas that could apply to any niche
- NO ideas that are too broad to rank competitively
- NO clickbait without substance
- NO ideas requiring insider access or resources unavailable to most creators
- YES to ideas with clear differentiation
- YES to ideas targeting underserved subtopics
- YES to ideas with obvious reader benefit
## TONE AND STYLE ADAPTATION
### IF tone = "Formal"
- Use professional, industry-appropriate language
- Focus on business outcomes and ROI
- Emphasize data and expertise
- Example: "Enterprise SaaS Onboarding: A Framework for Reducing Time-to-Value by 40%"
### IF tone = "Casual"
- Use conversational, approachable language
- Include relatable scenarios and examples
- Add personality and warmth
- Example: "I Tried 12 Productivity Apps So You Don't Have To (Here's What Actually Works)"
### IF tone = "Persuasive"
- Lead with benefits and outcomes
- Use power words that drive action
- Create urgency or fear of missing out
- Example: "The LinkedIn Strategy That Landed Me 3 Dream Clients in 30 Days"
## OUTPUT FORMAT
### Blog Post Ideas for: [Topic]
**Idea 1: [Compelling Title]**
- **Angle:** [Unique approach explanation]
- **Target Keyword Concept:** [Primary search term]
- **Content Type:** [Format]
- **Ideal Audience:** [Specific reader profile]
[Repeat for each idea]
---
**Content Strategy Notes:**

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Content-Kalender-Planung', description: 'Marketing-Teams und Blogger nutzen den Ideen-Generator, um Content-Kalender Wochen oder Monate im Voraus zu füllen. Durch Eingabe ihrer Nische und Zielgruppe erhalten sie einen stetigen Strom von Themenideen, die mit ihrer Content-Strategie und SEO-Zielen übereinstimmen.' },
      { title: 'Überwindung von Schreibblockaden', description: 'Content-Ersteller, die mit kreativer Erschöpfung kämpfen, nutzen den Generator, um frische Perspektiven zu gewinnen. Das Tool liefert unerwartete Blickwinkel und Ansätze zu vertrauten Themen, die helfen, kreative Blockaden zu durchbrechen und neue Begeisterung zu wecken.' },
      { title: 'SEO-Content-Strategie', description: 'SEO-Profis und Content-Strategen nutzen den Generator, um Themen zu identifizieren, die sowohl Suchvolumen als auch realistische Ranking-Möglichkeiten haben. Die strukturierten Ideen mit Keyword-Konzepten und Zielgruppen-Fokus erleichtern die Priorisierung und Planung.' },
    ],
    faqs: [
      { question: 'Wie generiert die KI Blog-Post-Ideen?', answer: 'Die KI analysiert Ihre Themeneingabe, identifiziert relevante Zielgruppen und Suchintentionen und generiert dann Ideen basierend auf bewährten Content-Frameworks. Jede Idee wird mit SPARK-Kriterien geprüft: Spezifisch, Praktisch, Publikumsorientiert, Rankbar und Wissenslücke füllend.' },
      { question: 'Sind die Ideen einzigartig und original?', answer: 'Die Ideen sind strategische Konzepte, keine fertigen Artikel. Sie bieten einzigartige Blickwinkel und Ansätze, die Sie mit Ihrer eigenen Expertise und Stimme umsetzen können. Das Tool fokussiert auf unterversorgte Nischen und differenzierte Perspektiven.' },
      { question: 'Kann ich die Ideen für SEO verwenden?', answer: 'Ja, jede Idee kommt mit einem Ziel-Keyword-Konzept und ist auf Suchintent ausgerichtet. Die Ideen sind so konzipiert, dass sie realistische Ranking-Möglichkeiten haben, besonders wenn Sie spezifischere Long-Tail-Themen wählen.' },
      { question: 'Wie viele Ideen sollte ich generieren?', answer: 'Beginnen Sie mit 5 Ideen, um einen guten Mix aus Content-Typen zu sehen. Wenn Sie einen Content-Kalender füllen oder mehr Optionen zum Auswählen möchten, können Sie auf 10 Ideen erweitern.' },
      { question: 'Welchen Ton sollte ich wählen?', answer: 'Wählen Sie basierend auf Ihrer Marke und Zielgruppe: Formell für B2B und professionelle Themen, Locker für lifestyle-orientierte und persönliche Blogs, Überzeugend wenn Sie Konversionen oder Aktionen anstreben.' },
      { question: 'Kann ich die Ideen direkt verwenden?', answer: 'Die Ideen sind als Ausgangspunkte konzipiert. Sie liefern Titel, Blickwinkel und Struktur, aber Sie sollten Ihre eigene Recherche, Expertise und Stimme hinzufügen, um den vollständigen Artikel zu erstellen.' },
      { question: 'Funktioniert das für jede Nische?', answer: 'Ja, der Generator passt sich verschiedenen Branchen und Themen an. Je spezifischer Ihre Eingabe (z.B. "B2B SaaS E-Mail-Marketing für Startup-Gründer" statt nur "E-Mail-Marketing"), desto relevanter und zielgerichteter werden die Ideen.' },
      { question: 'Wie unterscheiden sich die Content-Typen?', answer: 'Der Generator bietet Vielfalt über How-To-Anleitungen, Listicles, Vergleiche, Datenanalysen und Thought-Leadership-Stücke. Diese Mischung hilft, verschiedene Suchintentionen anzusprechen und Ihren Content-Mix interessant zu halten.' },
      { question: 'Kann ich Ideen für eine Content-Serie bekommen?', answer: 'Generieren Sie 10 Ideen zu einem spezifischen Thema und suchen Sie nach zusammenhängenden Ansätzen, die eine natürliche Serie bilden könnten. Sie können auch verwandte Unter-Themen eingeben, um miteinander verknüpfbare Inhalte zu erstellen.' },
      { question: 'Was mache ich mit den Keyword-Konzepten?', answer: 'Nutzen Sie die Keyword-Konzepte als Ausgangspunkt für weitere Keyword-Recherche. Prüfen Sie Suchvolumen und Wettbewerb mit SEO-Tools und passen Sie Ihre finale Keyword-Strategie entsprechend an.' },
    ],
  },

  // ==================== END OF BATCH 4 ====================

  // ==================== BATCH 5 (Remaining Tools) ====================

  'emoji-translator': {
    slug: 'emoji-translator',
    name: 'Emoji-Übersetzer',
    title: 'Kostenloser KI-Emoji-Übersetzer',
    description: 'Übersetzen Sie Text in ausdrucksstarke Emojis oder entschlüsseln Sie Emoji-Nachrichten.',
    metaDescription: 'Übersetzen Sie Text in ausdrucksstarke Emojis oder entschlüsseln Sie Emoji-Nachrichten. Perfekt für Social Media, Messaging und lustige...',
    inputLabel: 'Text oder Emojis...',
    inputPlaceholder: 'z.B. "Ich freue mich so auf das Wochenende!" oder Emojis zum Entschlüsseln einfügen',
    buttonText: 'Übersetzen',
    maxLength: 1024,
    options: [
      { name: 'direction', label: 'Übersetzungsrichtung', choices: ['Text zu Emojis', 'Emojis zu Text'], default: 'Text zu Emojis', type: 'radio' },
      { name: 'style', label: 'Emoji-Stil', choices: ['Vollständiger Ersatz', 'Text mit Emojis', 'Nur Schlüsselkonzepte'], default: 'Text mit Emojis', type: 'select' },
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

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Social Media und Messaging verbessern', description: 'Nutzer, die ihren Texten, Tweets oder Social-Media-Posts Persönlichkeit verleihen möchten, können Nachrichten in emoji-verbesserte Versionen übersetzen. Das Tool hilft, die perfekten Emojis zu finden, um Ton und Emotion zu vermitteln, was digitale Kommunikation ausdrucksstärker und ansprechender macht.' },
      { title: 'Emoji-Interpretation und Verständnis', description: 'Wenn Sie eine verwirrende Emoji-Kette erhalten, hilft der Übersetzer, die wahrscheinliche Bedeutung zu entschlüsseln. Dies ist besonders hilfreich, um generationsspezifische Emoji-Verwendung, plattformspezifische Bedeutungen oder kreative Emoji-Kombinationen zu verstehen.' },
      { title: 'Content-Erstellung und Marketing', description: 'Social-Media-Manager und Content-Ersteller können kreative Emoji-Kombinationen finden, um Posts hervorzuheben. Das Tool hilft, Markenbotschaften in emoji-freundliche Formate zu übersetzen, die auf visuellen Plattformen wie Instagram und Twitter gut funktionieren.' },
    ],
    faqs: [
      { question: 'Wie funktioniert der Emoji-Übersetzer?', answer: 'Für Text-zu-Emoji analysiert das Tool die Bedeutung und Emotion Ihrer Nachricht und wählt Emojis aus, die diese Konzepte repräsentieren. Für Emoji-zu-Text interpretiert es gängige Bedeutungen und liefert wahrscheinliche Übersetzungen.' },
      { question: 'Ist der Emoji-Übersetzer kostenlos?', answer: 'Ja, komplett kostenlos ohne Registrierung. Übersetzen Sie so viel Sie möchten.' },
      { question: 'Wird jeder meine Emoji-Übersetzung verstehen?', answer: 'Das Tool verwendet allgemein verstandene Emojis, aber Emoji-Interpretation kann je nach Alter, Kultur und Plattform variieren. Wir kennzeichnen Emojis, die mehrere gängige Bedeutungen haben.' },
      { question: 'Kann ich Emojis zurück zu Text übersetzen?', answer: 'Ja, fügen Sie eine Emoji-Sequenz ein und das Tool liefert wahrscheinliche Interpretationen dessen, was die Emojis bedeuten, einschließlich alternativer Lesarten für mehrdeutige Kombinationen.' },
      { question: 'Warum bedeuten manche Emojis verschiedene Dinge?', answer: 'Emoji-Bedeutungen entwickeln sich durch Internetkultur und können zwischen Generationen, Communities und Plattformen variieren. Ein einzelnes Emoji kann seine wörtliche Bedeutung plus Slang- oder ironische Verwendungen haben. Das Tool notiert diese Variationen.' },
      { question: 'Sollte ich allen Text durch Emojis ersetzen oder nur einige hinzufügen?', answer: 'Es hängt vom Kontext ab. Für lockere Nachrichten kann vollständiger Emoji-Ersatz Spaß machen. Für die meiste Kommunikation ist das Hinzufügen einiger strategischer Emojis zur Textverbesserung effektiver und klarer.' },
      { question: 'Sehen Emojis auf allen Geräten gleich aus?', answer: 'Nein, Emoji-Designs variieren je nach Plattform (Apple, Google, Samsung usw.). Die Bedeutung bleibt ähnlich, aber das visuelle Erscheinungsbild unterscheidet sich. Wir empfehlen, Emojis mit klaren, universellen Bedeutungen zu verwenden.' },
      { question: 'Wie viele Emojis sollte ich verwenden?', answer: 'Weniger ist oft mehr. Ein paar gut gewählte Emojis haben mehr Wirkung als eine Wand von Icons. Das Tool empfiehlt angemessene Mengen basierend auf Ihrer Nachrichtenlänge und Kontext.' },
      { question: 'Kann das bei Emoji-SEO helfen?', answer: 'Emojis können in Suchergebnissen erscheinen und Klickraten auf Social-Media-Posts verbessern. Das Tool hilft, relevante Emojis zu Ihrem Thema zu identifizieren, die die Sichtbarkeit erhöhen könnten.' },
      { question: 'Gibt es Emojis, die ich vermeiden sollte?', answer: 'Einige Emojis haben Bedeutungen erlangt, die sich von ihrem wörtlichen Aussehen unterscheiden, besonders bei jüngeren Nutzern. Das Tool kennzeichnet potenziell missverstandene Emojis, wenn relevant.' },
    ],
  },

  'brand-name-generator': {
    slug: 'brand-name-generator',
    name: 'Markennamen-Generator',
    title: 'Kostenloser KI Brand Name Generator',
    description: 'Erstellen Sie einzigartige, einprägsame Markennamen sofort. Unsere KI kreiert markante Namen mit strategischer Bedeutung für Ihre Geschäftsidentität.',
    metaDescription: 'Erstellen Sie einzigartige, einprägsame Markennamen sofort. Unsere KI kreiert markante Namen mit strategischer Bedeutung für Ihre...',
    inputLabel: 'Beschreiben Sie Ihre Marke...',
    inputPlaceholder: 'z.B. Eine nachhaltige Modemarke für umweltbewusste Millennials',
    buttonText: 'Namen generieren',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Anzahl der Namen',
        choices: ['3 Namen', '5 Namen', '10 Namen'],
        default: '5 Namen',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Markenton',
        choices: ['Formell/Professionell', 'Locker/Freundlich', 'Innovativ/Tech', 'Luxus/Premium'],
        default: 'Formell/Professionell',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Bedeutung erklären',
        choices: ['Ja', 'Nein'],
        default: 'Ja',
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
- **Strengths**: Highly distinctive, easier to trademark, no baggage
- **Examples**: Kodak, Xerox, Spotify, Häagen-Dazs
- **Best for**: Tech companies, innovative products, global brands
### Descriptive Names
Names that directly describe what the business does.
- **Approach**: Use clear, functional language
- **Strengths**: Immediate clarity, low marketing cost to explain
- **Weaknesses**: Harder to trademark, less distinctive
- **Examples**: General Motors, PayPal, Whole Foods
- **Best for**: Service businesses, B2B companies, startups needing quick clarity
### Evocative/Suggestive Names
Names that suggest qualities or experiences without being literal.
- **Approach**: Use metaphor, allusion, or abstract concepts
- **Strengths**: Memorable, emotional, flexible for expansion
- **Examples**: Amazon, Apple, Nike, Virgin
- **Best for**: Consumer brands, lifestyle companies, brands seeking emotional connection
### Founder/Personal Names
Names based on people (real or fictional).
- **Approach**: Use founder names, invented personas, or meaningful figures
- **Strengths**: Personal connection, heritage, authenticity
- **Examples**: Ford, Disney, Ben & Jerry's, Tesla
- **Best for**: Luxury brands, professional services, legacy businesses
### Acronym/Initialism Names
Names using letters that may or may not stand for something.
- **Approach**: Create from longer names or design original letter combinations
- **Strengths**: Short, professional, can evolve meaning
- **Examples**: IBM, BMW, IKEA, H&M
- **Best for**: Corporate, tech, established brands shortening legacy names
### Compound/Portmanteau Names
Names combining two words or concepts.
- **Approach**: Blend related words, concepts, or sounds
- **Strengths**: Meaningful, memorable, tells a story
- **Examples**: Facebook, Instagram, Pinterest, Netflix
- **Best for**: Tech startups, creative industries, modern brands
## NAME GENERATION PROCESS
### Step 1: Analyze AI Brand Context
Extract from user input:
- Industry/category
- Target audience
- Brand personality (modern, traditional, playful, serious, etc.)
- Key differentiators or values
- Geographic scope (local, national, global)
### Step 2: Generate Across Multiple Categories
For each request, create names spanning:
- At least 2 invented/coined options
- At least 1 evocative/suggestive option
- At least 1 compound/blend option
- Additional options based on what fits the brand context
### Step 3: Apply Quality Filters
Each name must pass:
- **Pronunciation Test**: Can it be said easily in the target market's language?
- **Spelling Test**: Can people spell it after hearing it once?
- **Search Test**: Is it distinct enough to be findable online?
- **Expansion Test**: Does it limit future business directions?
- **Negative Connotation Test**: Does it have unintended meanings in relevant languages?
### Step 4: Explain the Strategic Rationale
For each name, explain:
- The linguistic/conceptual origin
- Why it fits this specific brand
- Potential trademark/domain considerations
- How it would work in practice
## OUTPUT RULES
### For Each Brand Name, Provide:
1. **Name**: The brand name itself
2. **Category**: Type of name (Invented, Evocative, Compound, etc.)
3. **Meaning/Origin**: Explanation of the name's construction and meaning
4. **Brand Fit**: Why this works for the specific brand/business
5. **Considerations**: Practical notes (domain likelihood, trademark considerations)
### Quantity:
- Generate {{number_of_variants}} names
- Ensure variety across naming categories
- Include at least one "safe" conventional option and one "bold" distinctive option
### Quality Standards:
- NO generic, forgettable names
- NO names that are difficult to spell or pronounce
- NO names with obvious negative connotations
- NO names that are direct copies of famous brands
- YES to names that tell a story
Tone: {{tone}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Startup-Gründung und Branding', description: 'Unternehmer nutzen den Markennamen-Generator, um den Grundstein für ihre neue Geschäftsidentität zu legen. Das Tool generiert strategisch fundierte Namensoptionen, die Zielgruppen ansprechen und Wachstumspotenzial haben.' },
      { title: 'Produkt- und Untermarken-Entwicklung', description: 'Etablierte Unternehmen nutzen den Generator bei der Einführung neuer Produktlinien oder Untermarken. Das Tool hilft, Namen zu finden, die zur bestehenden Markenarchitektur passen und gleichzeitig eigene Identität entwickeln.' },
      { title: 'Marken-Relaunch und Umbenennung', description: 'Unternehmen, die sich neu positionieren oder nach Fusionen neu benennen, nutzen den Generator für frische Namensideen. Die strategische Herangehensweise stellt sicher, dass neue Namen mit der gewünschten Markenwahrnehmung übereinstimmen.' },
    ],
    faqs: [
      { question: 'Was macht einen guten Markennamen aus?', answer: 'Gute Markennamen sind einprägsam, leicht zu buchstabieren und auszusprechen, unterscheidungskräftig von Wettbewerbern, skalierbar für zukünftiges Wachstum und emotional resonant mit der Zielgruppe.' },
      { question: 'Sollte mein Markenname beschreiben, was ich tue?', answer: 'Nicht unbedingt. Beschreibende Namen bieten Klarheit, aber evokative oder erfundene Namen sind oft einprägsamer und flexibler. Die beste Wahl hängt von Ihrer Strategie ab.' },
      { question: 'Wie wichtig ist die Markenverfügbarkeit?', answer: 'Sehr wichtig. Prüfen Sie Markenregister, Domain-Verfügbarkeit und Social-Media-Handles, bevor Sie sich festlegen. Der Generator berücksichtigt Unterscheidungskraft, die Markenschutz erleichtert.' },
      { question: 'Sollte der Name international funktionieren?', answer: 'Wenn Sie globale Expansion planen, ja. Prüfen Sie Namen auf unbeabsichtigte Bedeutungen in Zielsprachen. Erfundene Namen haben oft weniger kulturelle Stolperfallen.' },
      { question: 'Wie viele Namensoptionen sollte ich generieren?', answer: 'Beginnen Sie mit 5 Namen für eine gute Auswahl. Bei wichtigen Branding-Entscheidungen können Sie auf 10 erweitern und dann eine engere Auswahl treffen.' },
      { question: 'Was bedeuten die verschiedenen Namens-Kategorien?', answer: 'Erfundene Namen sind Neuschöpfungen (Kodak), evokative Namen suggerieren Qualitäten (Amazon), beschreibende Namen erklären direkt (PayPal), Gründernamen sind persönlich (Ford), und zusammengesetzte Namen kombinieren Konzepte (Facebook).' },
      { question: 'Wie teste ich einen Markennamen?', answer: 'Testen Sie die Aussprache (können Leute ihn aussprechen?), die Schreibung (können sie ihn nach einmaligem Hören schreiben?), die Assoziation (welche Gefühle weckt er?) und die Unterscheidbarkeit (verwechseln sie ihn mit anderen Marken?).' },
      { question: 'Kann ich den Namen später ändern?', answer: 'Ja, aber es ist kostspielig und riskant. Namensänderungen erfordern umfassendes Rebranding und können bestehende Kunden verwirren. Wählen Sie anfangs sorgfältig.' },
      { question: 'Was, wenn mein bevorzugter Name vergeben ist?', answer: 'Erwägen Sie Variationen (Präfixe, Suffixe), alternative Schreibweisen oder ähnliche Konzepte. Der Generator liefert mehrere Optionen, um Alternativen zu haben.' },
      { question: 'Wie unterscheidet sich das von einem Business-Namensgenerator?', answer: 'Markennamen-Generatoren fokussieren auf strategische Markenbildung und emotionale Resonanz. Business-Namensgeneratoren sind oft praktischer und funktionaler für Unternehmensregistrierung.' },
    ],
  },

  'business-name-generator': {
    slug: 'business-name-generator',
    name: 'Geschäftsnamen-Generator',
    title: 'Kostenloser AI Business Name Generator',
    description: 'Generieren Sie kreative Geschäftsnamen, die in der realen Welt funktionieren. Unsere KI erstellt professionelle, einprägsame Namen für jede Branche.',
    metaDescription: 'Generieren Sie kreative Geschäftsnamen, die in der realen Welt funktionieren. Unsere KI erstellt professionelle, einprägsame Namen für jede...',
    inputLabel: 'Beschreiben Sie Ihr Unternehmen...',
    inputPlaceholder: 'z.B. Ein lokales Sanitärunternehmen, das den Großraum München bedient',
    buttonText: 'Namen generieren',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Anzahl der Namen',
        choices: ['3 Namen', '5 Namen', '10 Namen'],
        default: '5 Namen',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Geschäftston',
        choices: ['Formell/Corporate', 'Locker/Freundlich', 'Innovativ/Modern'],
        default: 'Formell/Corporate',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Bedeutung erklären',
        choices: ['Ja', 'Nein'],
        default: 'Ja',
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
Names that clearly indicate the business type or offering.
- **Examples**: "Portland Plumbing," "Quick Print Solutions," "Family Dental Care"
- **Best for**: Local service businesses, B2B companies, professional services
- **Pros**: Immediate clarity, SEO benefits for local search
- **Cons**: Less distinctive, harder to trademark
### Founder/Personal Names
Names incorporating the owner's name or a meaningful personal element.
- **Examples**: "Johnson & Associates," "Maria's Kitchen," "The Thompson Group"
- **Best for**: Professional services, restaurants, family businesses, consultancies
- **Pros**: Personal trust, legacy potential, built-in story
- **Cons**: Succession challenges, personal liability perception
### Abstract/Evocative Names
Names that suggest qualities or feelings without literal description.
- **Examples**: "Evergreen Solutions," "Summit Consulting," "Horizon Media"
- **Best for**: Companies planning to scale, those wanting brand flexibility
- **Pros**: More memorable, easier to trademark, expansion-friendly
- **Cons**: Requires more explanation initially
### Location-Based Names
Names incorporating geographic elements.
- **Examples**: "Bay Area Tech," "Midwest Manufacturing," "Brooklyn Bakery"
- **Best for**: Businesses with strong local identity, regional pride positioning
- **Pros**: Local connection, community appeal, location SEO
- **Cons**: Can limit expansion, suggests geographic constraints
### Invented/Modern Names
Created words or modern constructions.
- **Examples**: "Synergy Labs," "TechNova," "FlexiServ"
- **Best for**: Tech companies, innovative businesses, franchise models
- **Pros**: Distinctive, trademark-friendly, modern feel
- **Cons**: Can feel generic, may lack warmth
## NAME GENERATION PROCESS
### Step 1: Understand Business Context
Identify from user input:
- Business type/industry
- Service or product focus
- Target customer (B2B/B2C, demographic, geographic)
- Business scale ambitions (local, regional, national, global)
- Competitive landscape considerations
### Step 2: Generate Across Categories
Create names spanning multiple approaches:
- Industry-appropriate descriptive options
- Evocative/abstract options for differentiation
- Modern/invented options if applicable
- Personal/founder-style options if appropriate
### Step 3: Apply Business Reality Filters
Each name must pass:
- **Phone Test**: Can you say it clearly in a phone call?
- **Signage Test**: Would it look good on a storefront or truck?
- **Email Test**: Is the email address professional (info@businessname.com)?
- **Referral Test**: Can customers easily tell friends about you?
- **Invoice Test**: Does it look professional on business documents?
## OUTPUT RULES
### For Each Business Name, Provide:
1. **Name**: The complete business name
2. **Style**: Naming category used
3. **Rationale**: Why this name works for this business
4. **Best Use Case**: Where/when this name would shine
5. **Considerations**: Practical notes for implementation
### Quantity:
- Generate {{number_of_variants}} names
- Include variety across naming styles
- Balance creative options with practical options
### Quality Standards:
- NO names that are hard to say or spell
- NO names with unintended double meanings
- NO names too similar to dominant competitors
- NO names that would look unprofessional
- YES to names that work in conversation
- YES to names that photograph/display well
- YES to names customers would feel comfortable recommending
## TONE ADAPTATION
### IF tone = "Formal/Corporate"
- Professional, established, trust-building names
- Example: "Meridian Business Solutions," "Cornerstone Consulting"
### IF tone = "Casual/Friendly"
- Approachable, warm, community-oriented names
- Example: "Friendly Neighborhood Plumbing," "The Coffee Spot"
### IF tone = "Innovative/Modern"
- Forward-thinking, tech-adjacent, fresh names
- Example: "NexGen Services," "Spark Digital"
Tone: {{tone}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Neugründungen und Unternehmensstart', description: 'Gründer nutzen den Geschäftsnamen-Generator, um professionelle Namen für ihre neuen Unternehmen zu finden. Das Tool generiert Namen, die bei Gewerbeanmeldung, auf Visitenkarten und in der Kommunikation mit Kunden funktionieren.' },
      { title: 'Lokale Dienstleistungsunternehmen', description: 'Handwerker, Berater und lokale Dienstleister nutzen den Generator, um vertrauenswürdige, einprägsame Namen zu finden. Namen, die sowohl auf dem Firmenfahrzeug als auch am Telefon gut funktionieren.' },
      { title: 'Franchise und Expansion', description: 'Unternehmer, die skalieren möchten, nutzen den Generator, um Namen zu finden, die nicht geografisch eingeschränkt sind und in verschiedenen Märkten funktionieren können.' },
    ],
    faqs: [
      { question: 'Was macht einen guten Geschäftsnamen aus?', answer: 'Gute Geschäftsnamen sind leicht auszusprechen, zu buchstabieren und zu merken. Sie funktionieren auf Schildern, in E-Mail-Adressen und am Telefon. Sie passen zur Branche und Zielgruppe.' },
      { question: 'Sollte mein Geschäftsname beschreiben, was ich tue?', answer: 'Beschreibende Namen bieten sofortige Klarheit und lokale SEO-Vorteile. Abstrakte Namen sind flexibler für Wachstum. Die Wahl hängt von Ihrer Geschäftsstrategie ab.' },
      { question: 'Wie prüfe ich, ob ein Name verfügbar ist?', answer: 'Prüfen Sie das Handelsregister, Domain-Verfügbarkeit, Social-Media-Handles und Markenregister. Der Generator liefert unterscheidungskräftige Namen, die Verfügbarkeit wahrscheinlicher machen.' },
      { question: 'Sollte ich meinen Namen in den Geschäftsnamen aufnehmen?', answer: 'Gründernamen funktionieren gut für Beratungen, Arztpraxen und Familienunternehmen. Sie bauen persönliches Vertrauen auf, können aber Nachfolgeprobleme schaffen.' },
      { question: 'Was, wenn mein bevorzugter Name vergeben ist?', answer: 'Probieren Sie Variationen mit Branchenbezug, Standort oder Suffix (GmbH, Solutions). Der Generator liefert mehrere Optionen, um Alternativen zu haben.' },
      { question: 'Wie wichtig ist der Geschäftsname für den Erfolg?', answer: 'Der Name ist wichtig für ersten Eindruck und Mundpropaganda, aber Qualität und Service sind wichtiger für langfristigen Erfolg. Ein guter Name erleichtert Marketing.' },
      { question: 'Sollte der Name lokal oder national klingen?', answer: 'Passen Sie den Namen an Ihre Wachstumspläne an. Lokale Namen schaffen Verbundenheit, können aber spätere Expansion erschweren. Neutrale Namen sind flexibler.' },
      { question: 'Kann ich den Geschäftsnamen später ändern?', answer: 'Ja, aber es erfordert rechtliche Änderungen, neues Marketing-Material und kann Kunden verwirren. Wählen Sie anfangs sorgfältig für langfristige Nutzung.' },
      { question: 'Was bedeuten die Namens-Kategorien?', answer: 'Funktional/Beschreibend erklärt direkt (München Sanitär), Gründernamen sind persönlich (Schmidt Consulting), Evokativ suggeriert Qualitäten (Summit Solutions), standortbasiert zeigt Gebiet, und modern/erfunden sind Neuschöpfungen.' },
      { question: 'Funktioniert der Name in meiner Branche?', answer: 'Der Generator berücksichtigt Branchenerwartungen. Ein Anwaltskanzlei-Name unterscheidet sich von einem Café-Namen. Geben Sie Ihre Branche an für passende Vorschläge.' },
    ],
  },

  'product-name-generator': {
    slug: 'product-name-generator',
    name: 'Produktnamen-Generator',
    title: 'Kostenloser AI Product Name Generator',
    description: 'Generieren Sie kreative Produktnamen, die verkaufen. Unsere KI erstellt einprägsame, marktreife Namen, die im Regal und im Kopf der Kunden herausstechen.',
    metaDescription: 'Generieren Sie kreative Produktnamen, die verkaufen. Unsere KI erstellt einprägsame, marktreife Namen, die im Regal und im Kopf der Kunden...',
    inputLabel: 'Beschreiben Sie Ihr Produkt...',
    inputPlaceholder: 'z.B. Ein pflanzliches Proteinpulver für Fitness-Enthusiasten',
    buttonText: 'Namen generieren',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Anzahl der Namen',
        choices: ['3 Namen', '5 Namen', '10 Namen'],
        default: '5 Namen',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Produktton',
        choices: ['Premium/Luxus', 'Lustig/Verspielt', 'Professionell/Technisch', 'Natürlich/Organisch'],
        default: 'Premium/Luxus',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Bedeutung erklären',
        choices: ['Ja', 'Nein'],
        default: 'Ja',
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
Names that directly describe the product or its function.
- **Examples**: "Head & Shoulders," "Lean Cuisine," "Miracle-Gro"
- **Best for**: Products where clear communication matters, crowded categories
- **Pros**: Immediate understanding, functional positioning
- **Cons**: Less distinctive, harder to trademark
### Evocative/Suggestive Names
Names that suggest benefits or feelings without literal description.
- **Examples**: "Tide," "Axe," "Dove," "Bounty"
- **Best for**: Consumer products, emotional purchase categories
- **Pros**: Memorable, emotional resonance, trademark-friendly
- **Cons**: Requires marketing to build meaning
### Invented/Coined Names
Created words with no prior meaning.
- **Examples**: "Prozac," "Verizon," "Acura"
- **Best for**: Tech products, pharmaceuticals, premium positioning
- **Pros**: Maximum distinctiveness, strong trademark
- **Cons**: No inherent meaning, higher marketing investment
### Alphanumeric Names
Names using letters, numbers, or combinations.
- **Examples**: "WD-40," "Formula 409," "iPhone 15"
- **Best for**: Tech products, industrial products, version-based lines
- **Pros**: Technical feel, easy versioning
- **Cons**: Can lack personality, harder to remember
### Founder/Character Names
Names based on people (real or fictional).
- **Examples**: "Mrs. Butterworth's," "Chef Boyardee," "Ben & Jerry's"
- **Best for**: Food products, heritage brands, trust-building
- **Pros**: Personal connection, storytelling opportunity
- **Cons**: Can limit brand evolution
### Compound/Blend Names
Names combining two words or concepts.
- **Examples**: "NyQuil," "Pinterest," "Instagram"
- **Best for**: Tech products, innovative products, concept combinations
- **Pros**: Meaningful, distinctive, tells a story
- **Cons**: Can sound forced if not elegant
## NAME GENERATION PROCESS
### Step 1: Analyze AI Product Context
Identify from user input:
- Product category and function
- Key benefits or differentiators
- Target customer profile
- Price positioning (value, mid-market, premium)
- Competitive landscape
### Step 2: Generate Across Categories
Create names spanning:
- Benefit-suggestive options
- Evocative/emotional options
- Invented/distinctive options
- Descriptive options (where appropriate)
### Step 3: Apply Product-Specific Filters
- **Packaging Test**: How does it look on a label?
- **Advertising Test**: Does it work in a tagline or headline?
- **Search Test**: Is it distinct enough for online discovery?
- **Social Test**: Would people share this product name naturally?
- **Global Test**: Any problematic meanings in key markets?
## OUTPUT RULES
### For Each Product Name, Provide:
1. **Name**: The product name
2. **Category**: Naming style used
3. **Meaning/Logic**: Why this name works for this product
4. **Market Fit**: How it positions in the competitive landscape
5. **Usage Notes**: How it would work in practice (packaging, advertising)
### Quantity:
- Generate {{number_of_variants}} names
- Include variety across naming approaches
- Consider both "safe" options and "bold" options
### Quality Standards:
- NO names that are hard to pronounce
- NO names with negative connotations in major markets
- NO names too similar to category leaders
- NO names that limit product line extension
- YES to names with strong phonetic appeal
- YES to names that suggest benefits
- YES to names that work in marketing contexts
## TONE ADAPTATION
### IF tone = "Premium/Luxury"
- Elegant, sophisticated, exclusive-feeling names
- Example: "Lumina," "Artisan Reserve," "Infinité"
### IF tone = "Fun/Playful"
- Energetic, youthful, approachable names
- Example: "Zingo," "Snappy Fresh," "PopBurst"
### IF tone = "Professional/Technical"
- Precise, credible, expert-focused names
- Example: "ProCore," "TechPure," "Precision Plus"
### IF tone = "Natural/Organic"
- Earthy, wholesome, eco-conscious names
- Example: "Earthborn," "Pure Harvest," "GreenRoot"
Tone: {{tone}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Neue Produkteinführung', description: 'Unternehmen, die neue Produkte auf den Markt bringen, nutzen den Generator für Namen, die Aufmerksamkeit erregen und Vorteile kommunizieren. Namen, die auf Verpackung, in Werbung und im Gespräch funktionieren.' },
      { title: 'Produktlinien-Erweiterung', description: 'Marken, die bestehende Linien erweitern, nutzen den Generator, um Namen zu finden, die zur Markenarchitektur passen und gleichzeitig die neue Variante differenzieren.' },
      { title: 'Rebranding und Neupositionierung', description: 'Produkte, die sich neu positionieren, nutzen den Generator für frische Namen, die die gewünschte Wahrnehmung unterstützen – ob Premium, natürlich oder technisch.' },
    ],
    faqs: [
      { question: 'Was macht einen guten Produktnamen aus?', answer: 'Gute Produktnamen sind einprägsam, leicht auszusprechen, suggerieren Vorteile, passen zur Zielgruppe und funktionieren auf Verpackung sowie in Werbung. Sie sollten sich von der Konkurrenz abheben.' },
      { question: 'Sollte der Produktname den Nutzen beschreiben?', answer: 'Beschreibende Namen bieten Klarheit, aber evokative Namen sind oft einprägsamer. Die Wahl hängt von Kategorie und Positionierung ab – in neuen Kategorien kann Klarheit wichtiger sein.' },
      { question: 'Wie teste ich einen Produktnamen?', answer: 'Testen Sie, wie er auf Verpackung aussieht, ob er in Werbung funktioniert, ob Leute ihn natürlich weiterempfehlen würden, und prüfen Sie auf unbeabsichtigte Bedeutungen in Zielmärkten.' },
      { question: 'Wie wichtig ist der Markenfit?', answer: 'Sehr wichtig, wenn das Produkt zu einer bestehenden Marke gehört. Der Name sollte zur Markenarchitektur und zum Gesamtbild passen, kann aber auch Eigenständigkeit haben.' },
      { question: 'Was bedeuten die Tonoptionen?', answer: 'Premium/Luxus suggeriert Exklusivität, Lustig/Verspielt spricht jüngere Zielgruppen an, Professionell/Technisch vermittelt Expertise, und Natürlich/Organisch betont Umweltbewusstsein.' },
      { question: 'Kann ich den Namen für eine Produktlinie verwenden?', answer: 'Ja, der Generator berücksichtigt Erweiterungsfähigkeit. Namen, die nicht zu spezifisch sind, ermöglichen Varianten (z.B. ProCore Plus, ProCore Mini).' },
      { question: 'Wie unterscheidet sich das vom Markennamen-Generator?', answer: 'Produktnamen-Generatoren fokussieren auf Regalwirkung und Kaufentscheidungen. Markennamen-Generatoren fokussieren auf Unternehmensidentität und langfristige Positionierung.' },
      { question: 'Was, wenn der Name in anderen Sprachen schlecht klingt?', answer: 'Der Generator berücksichtigt potenzielle Probleme. Prüfen Sie Namen trotzdem in Ihren Zielmärkten auf kulturelle Sensibilität und unbeabsichtigte Bedeutungen.' },
      { question: 'Wie wähle ich zwischen mehreren guten Optionen?', answer: 'Berücksichtigen Sie Zielgruppen-Resonanz, Differenzierung von Wettbewerbern, Markenverfügbarkeit und praktische Aspekte wie Verpackungsdesign und Werbekampagnen.' },
      { question: 'Sind erfundene Namen besser als beschreibende?', answer: 'Es hängt ab. Erfundene Namen sind unterscheidungskräftiger und einfacher zu schützen, erfordern aber mehr Marketinginvestitionen. Beschreibende Namen kommunizieren sofort, sind aber weniger einzigartig.' },
    ],
  },

  'website-copy-generator': {
    slug: 'website-copy-generator',
    name: 'Website-Texte-Generator',
    title: 'Kostenloser AI Website Copy Generator',
    description: 'Generieren Sie professionelle Website-Inhalte in Minuten. Unsere KI erstellt Texte für Startseiten, Über-uns-Seiten, Leistungsseiten und mehr.',
    metaDescription: 'Generieren Sie professionelle Website-Inhalte in Minuten. Unsere KI erstellt Texte für Startseiten, Über-uns-Seiten, Leistungsseiten und...',
    inputLabel: 'Beschreiben Sie Ihr Unternehmen...',
    inputPlaceholder: 'z.B. Eine Digital-Marketing-Agentur, spezialisiert auf SEO für E-Commerce-Marken',
    buttonText: 'Website-Texte generieren',
    maxLength: 2048,
    options: [
      {
        name: 'pages',
        label: 'Zu generierende Seiten',
        choices: ['Nur Startseite', 'Startseite + Über uns', 'Startseite + Über uns + Leistungen', 'Alle Kernseiten'],
        default: 'Startseite + Über uns + Leistungen',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Markenton',
        choices: ['Professionell/Corporate', 'Freundlich/Zugänglich', 'Mutig/Selbstbewusst', 'Minimalistisch/Clean'],
        default: 'Professionell/Corporate',
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
- **Focus**: What do you do, for whom, why choose you
### About Page
- **Purpose**: Build trust, humanize the brand, share story and values
- **Key Elements**: Origin story, mission/vision, team introduction, values/philosophy
- **Focus**: Why this business exists and who's behind it
### Services/Products Page
- **Purpose**: Explain offerings clearly, drive inquiries or purchases
- **Key Elements**: Service descriptions, benefits, process overview, CTAs
- **Focus**: What you offer and why it's valuable
### Contact Page
- **Purpose**: Make connecting easy, provide necessary information
- **Key Elements**: Contact form, location, hours, expectations
- **Focus**: Reduce friction to getting in touch
### FAQ/Support Page
- **Purpose**: Answer common questions, reduce support burden
- **Key Elements**: Organized questions, clear answers, search/navigation
- **Focus**: Help visitors self-serve information
## CONTENT STRUCTURE PATTERNS
### Standard Page Structure
1. Page Header/Title
2. Introduction (value proposition for this page)
3. Main Content Sections
4. Supporting Elements (testimonials, trust signals)
5. Call-to-Action
6. Related Links/Next Steps
### Section Writing Framework
For each section:
- **Header**: Clear, benefit-oriented
- **Body**: Information + persuasion balanced
- **Evidence**: Proof, examples, or specifics
- **Transition**: Connection to next section or CTA
## TONE AND VOICE ADAPTATION
### Professional/Corporate
- Formal but accessible language
- Emphasis on expertise and reliability
- Third-person or formal second-person
- Example: "Our team delivers comprehensive solutions..."
### Friendly/Approachable
- Conversational, warm language
- Personal touches and relatability
- Direct second-person address
- Example: "We know how frustrating it can be when..."
### Bold/Confident
- Direct, assertive statements
- Differentiation emphasis
- Confident claims with backing
- Example: "Other companies talk about innovation. We deliver it."
### Minimal/Clean
- Concise, stripped-down language
- White space emphasis
- Impact through brevity
- Example: "Simple. Powerful. Yours."
## OUTPUT RULES
### For Website Copy, Provide:
1. **Page-by-Page Content**: Complete copy for requested pages
2. **Headlines and Subheads**: For structure and scannability
3. **Body Copy**: Persuasive, informative paragraphs
4. **CTAs**: Calls-to-action for each page
5. **SEO Notes**: Keyword integration guidance
### Quality Standards:
- NO jargon without explanation
- NO walls of text without structure
- NO generic copy that fits any business
- NO missing CTAs or next steps
- YES to specific, concrete language
- YES to benefit-focused messaging
- YES to consistent brand voice
- YES to natural keyword inclusion
Pages to Generate: {{pages}}
Tone: {{tone}}
## SELF-VALIDATION
Before outputting:
□ Does each page have a clear purpose and CTA?
□ Is the brand voice consistent throughout?
□ Are benefits emphasized over features?
□ Is the copy scannable with clear headers?
□ Are keywords integrated naturally?
□ Would a visitor know what to do next?
Revise any section failing these checks.

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Neue Website-Entwicklung und Launch', description: 'Unternehmen, die neue Websites erstellen, nutzen den Website-Texte-Generator, um erste Inhalte für alle Seiten zu entwickeln. Website-Projekte stocken oft bei den Texten – Design ist fertig, aber Inhalt fehlt. Das Tool generiert komplette Seiteninhalte (Startseite, Über uns, Leistungen, Kontakt) in konsistenter Markenstimme.' },
      { title: 'Website-Redesign und Content-Refresh', description: 'Unternehmen, die Websites redesignen, nutzen den Generator, um frische Texte zu erstellen, die zur weiterentwickelten Markenpositionierung passen. Alte Websites haben oft Texte, die über Jahre ohne strategische Kohärenz entstanden sind. Das Tool generiert strategisch abgestimmte Inhalte.' },
      { title: 'Multi-Page-Content-Produktion', description: 'Marketing-Teams, die für content-intensive Websites verantwortlich sind, nutzen den Generator, um konsistente Qualität über viele Seiten hinweg zu gewährleisten. Ob Standortseiten, Leistungsvarianten oder Content-Hubs – das Tool hilft, markenkonformen Text in großem Umfang zu produzieren.' },
    ],
    faqs: [
      { question: 'Welche Seiten sollte eine Unternehmenswebsite haben?', answer: 'Essenzielle Seiten: Startseite (erster Eindruck und Navigation), Über-uns-Seite (Vertrauen und Markengeschichte), Leistungs-/Produktseiten (was Sie anbieten), Kontaktseite (Erreichbarkeit). Weitere Seiten: FAQ, Team, Portfolio, Blog, Referenzen, Preise usw.' },
      { question: 'Wie schreibe ich eine gute Startseite?', answer: 'Startseiten sollten drei Fragen schnell beantworten: Was tun Sie? Für wen? Warum Sie wählen? Enthalten Sie: klare Kernbotschaft, Überblick über Angebote, Glaubwürdigkeitssignale (Logos, Testimonials) und klare Pfade zu wichtigen Seiten.' },
      { question: 'Wie lang sollten Website-Texte sein?', answer: 'Länge an Seitenzweck und Nutzerintent anpassen. Startseiten: scanbar, fokussiert (300-600 Wörter). Über-uns-Seiten: Storytelling-Flexibilität (400-800 Wörter). Leistungsseiten: umfassend aber scanbar (400-1000 Wörter). Struktur ist wichtiger als Wortanzahl.' },
      { question: 'Was macht Über-uns-Texte effektiv?', answer: 'Großartige Über-uns-Seiten bauen Vertrauen durch Authentizität auf. Enthalten Sie: Entstehungsgeschichte, Mission und Werte, Team-Vorstellung und Alleinstellungsmerkmale. Vermeiden Sie generisches Corporate-Speak und Selbstbeweihräucherung.' },
      { question: 'Wie schreibe ich Leistungsbeschreibungen, die konvertieren?', answer: 'Beginnen Sie mit Vorteilen (was Kunden gewinnen), folgen Sie mit Features (was Sie liefern), beschreiben Sie den Prozess (wie die Zusammenarbeit aussieht) und enden Sie mit CTA (nächster Schritt). Seien Sie spezifisch – "Antwort innerhalb von 2 Stunden" schlägt "schneller Service".' },
      { question: 'Sollten Website-Texte formell oder locker sein?', answer: 'Passen Sie an Ihre Zielgruppe und Branchenerwartungen an. Professionelle Dienstleistungen erfordern oft formelle-aber-zugängliche Sprache. Verbrauchermarken profitieren von freundlicher, lockerer Stimme. Konsistenz ist wichtiger als jeder bestimmte Stil.' },
      { question: 'Wie optimiere ich Website-Texte für SEO?', answer: 'Integrieren Sie relevante Keywords in: Seitentiteln, Überschriften (H1, H2), erstem Absatz, natürlich im Text und Bild-Alt-Texten. Schreiben Sie zuerst für Menschen – Suchmaschinen belohnen Inhalte, die Nutzern dienen. Vermeiden Sie Keyword-Stuffing.' },
      { question: 'Was macht einen guten Call-to-Action aus?', answer: 'Effektive CTAs sind spezifisch (was genau passiert), nutzenorientiert (was sie gewinnen), sichtbar (stechen visuell hervor) und gut positioniert (nach ausreichender Information). Passen Sie CTA an Seitenzweck an.' },
      { question: 'Wie schreibe ich für mobile Nutzer?', answer: 'Die meisten Website-Besuche sind mobil. Schreiben Sie für kleine Bildschirme: kürzere Absätze, klare Überschriften, scanbare Struktur, wichtige Informationen zuerst. Testen Sie, wie Text auf Handybildschirmen aussieht.' },
      { question: 'Wie oft sollte ich Website-Texte aktualisieren?', answer: 'Aktualisieren Sie, wenn: Angebote sich ändern, Positionierung sich entwickelt, Texte nicht performen (hohe Absprungraten), Informationen veralten oder Markenstimme Auffrischung braucht. Kern-Seiten brauchen gelegentliche Überprüfung.' },
    ],
  },

  'social-media-caption-generator': {
    slug: 'social-media-caption-generator',
    name: 'Social-Media-Bildunterschriften-Generator',
    title: 'Kostenloser AI-Bildunterschriften-Generator für soziale Medien',
    description: 'Generieren Sie ansprechende Social-Media-Bildunterschriften, die Likes, Kommentare und Shares antreiben. Unsere KI erstellt überzeugende Post-Texte für Instagram, Facebook, Twitter und mehr.',
    metaDescription: 'Generieren Sie ansprechende Social-Media-Bildunterschriften, die Likes, Kommentare und Shares antreiben. Unsere KI erstellt überzeugende...',
    inputLabel: 'Beschreiben Sie Ihren Post-Inhalt...',
    inputPlaceholder: 'z.B. Foto meiner neuen Produkteinführung - nachhaltige Wasserflaschen für Outdoor-Enthusiasten',
    buttonText: 'Bildunterschrift generieren',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plattform',
        choices: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', 'Allgemein'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Bildunterschriften-Ton',
        choices: ['Professionell', 'Locker', 'Humorvoll', 'Inspirierend', 'Mutig'],
        default: 'Locker',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media content strategist specializing in creating engaging captions that drive engagement across multiple platforms. Your role is to craft compelling post copy that resonates with audiences and prompts interaction.
## CAPTION TYPES AND PURPOSES
### 1. Educational/Value-Driven
- Share tips, tricks, or insights
- Teach something useful
- Position as an authority
- Example: "3 things I wish I knew before starting my business..."
### 2. Storytelling/Personal
- Share experiences and journeys
- Create emotional connections
- Build authenticity and trust
- Example: "Last year, I almost gave up. Here's what changed everything..."
### 3. Engagement/Interactive
- Ask questions
- Request opinions
- Create polls or debates
- Example: "Hot take: Morning routines are overrated. Agree or disagree? 👇"
### 4. Promotional/Sales
- Highlight products/services
- Drive conversions
- Create urgency
- Example: "This sold out in 24 hours last time. Restock is LIVE. Link in bio 🔗"
### 5. Inspirational/Motivational
- Uplift and encourage
- Share quotes or mantras
- Create shareable content
- Example: "Reminder: Your pace is not a limitation. It's your path."
### 6. Behind-the-Scenes
- Show process and work
- Humanize the brand
- Build curiosity
- Example: "Currently in the studio creating something you've been asking for... 👀"
### 7. Trend/Cultural
- Participate in conversations
- React to current events
- Show relevance
- Example: "If [trending topic] was a [your niche]..."
## CAPTION STRUCTURE ELEMENTS
### 1. Hook (First 125 characters visible before "more")
- Attention-grabbing opening
- Creates curiosity or emotion
- Stops the scroll
### 2. Body
- Delivers value or story
- Maintains engagement
- Supports the hook promise
### 3. Call-to-Action (CTA)
- Prompts specific action
- Drives engagement metrics
- Clear and direct
### 4. Hashtags (optional, platform-dependent)
- Relevant to content
- Mix of sizes (broad and niche)
- Strategic placement
## PLATFORM-SPECIFIC ADAPTATIONS
### Instagram
- Up to 2,200 characters
- First 125 characters visible
- Hashtags in caption or comments
- Emojis enhance engagement
### Facebook
- Similar length flexibility
- Less emoji-heavy
- More complete sentences
- Link sharing common
### Twitter/X
- 280 characters max
- Concise and punchy
- Thread option for longer content
- Hashtags more limited
### LinkedIn
- Professional tone
- First 140 characters visible
- More text-heavy content accepted
- Hashtags at end (3-5 max)
### TikTok
- 150 characters max
- Casual and trendy
- Hashtag-heavy for discovery
- Short and punchy
## TONE VARIATIONS
### IF tone = "Professional"
- Industry language, thoughtful, polished
### IF tone = "Casual"
- Conversational, relatable, friendly
### IF tone = "Humorous"
- Witty, playful, entertaining
### IF tone = "Inspirational"
- Uplifting, encouraging, motivational
### IF tone = "Edgy"
- Bold, provocative, attention-grabbing
Platform: {{platform}}
Tone: {{tone}}
## ENGAGEMENT TACTICS
- Ask questions to prompt comments
- Use "save this" for valuable content
- Request shares for relatable content
- Tag others when relevant
- Create FOMO with limited offers
- Use controversy (carefully) for debate

IMPORTANT: Generate all output in German.`,
    useCases: [
      { title: 'Effiziente Social-Media-Content-Erstellung', description: 'Social-Media-Manager und Content-Ersteller nutzen den Bildunterschriften-Generator, um ihren Content-Erstellungsprozess zu optimieren. Durch Eingabe relevanter Keywords oder Content-Beschreibungen generiert das Tool schnell ansprechende Bildunterschriften und spart Zeit bei gleichbleibender Qualität.' },
      { title: 'Optimierung von Werbekampagnen-Texten', description: 'Unternehmen, die Social-Media-Werbekampagnen durchführen, nutzen den Bildunterschriften-Generator, um überzeugende Anzeigentextvarianten zu erstellen. Durch Eingabe von Produktdetails, Zielgruppeninformationen und Kampagnenzielen generiert das Tool persuasive Bildunterschriften, die Klicks und Conversions steigern.' },
      { title: 'Steigerung der Marken-Engagement', description: 'Marken, die ihre Social-Media-Engagement-Metriken verbessern möchten, nutzen den Generator, um interaktive, teilbare Bildunterschriften zu erstellen, die Likes, Kommentare und Shares fördern und so eine stärkere Community aufbauen.' },
    ],
    faqs: [
      { question: 'Was macht eine Bildunterschrift effektiv?', answer: 'Effektive Bildunterschriften haben einen starken Hook, der das Scrollen stoppt, liefern Wert oder Emotion im Hauptteil und enthalten einen klaren Call-to-Action. Sie sind für die spezifische Zielgruppe und Plattform geschrieben, mit angemessenem Ton und Länge.' },
      { question: 'Wie lang sollten Social-Media-Bildunterschriften sein?', answer: 'Länge hängt von Plattform und Zweck ab. Instagram erlaubt bis zu 2.200 Zeichen, aber kürzer performt oft besser. Twitter ist auf 280 Zeichen begrenzt. LinkedIn-Posts können länger sein. Testen Sie verschiedene Längen mit Ihrer Zielgruppe.' },
      { question: 'Sollte ich Emojis in meinen Bildunterschriften verwenden?', answer: 'Emojis können Engagement erhöhen, indem sie visuelles Interesse und Persönlichkeit hinzufügen. Verwenden Sie sie, um Text aufzubrechen, Punkte zu betonen oder Emotion hinzuzufügen. Die angemessene Menge hängt von Ihrer Markenstimme und Plattform ab.' },
      { question: 'Wie viele Hashtags sollte ich einbinden?', answer: 'Instagram: 3-10 relevante Hashtags. Twitter: maximal 1-2. LinkedIn: 3-5 am Ende. TikTok: 3-5 trendige und Nischen-Hashtags. Qualität und Relevanz sind wichtiger als Quantität.' },
      { question: 'Was ist der beste Call-to-Action für Bildunterschriften?', answer: 'Passen Sie Ihren CTA an Ihr Ziel an: "Kommentiere unten" für Engagement, "Speicher das" für wertvolle Inhalte, "Link in Bio" für Conversions, "Teile mit jemandem, der..." für Reichweite oder "Was denkst du?" für Diskussion.' },
      { question: 'Wie unterscheiden sich Bildunterschriften pro Plattform?', answer: 'Instagram betont Visuelles mit längeren Captions und Hashtags. Twitter erfordert Kürze. LinkedIn ist professioneller. Facebook ist familiärer. TikTok ist casual und trend-orientiert. Passen Sie Ton und Länge entsprechend an.' },
      { question: 'Sollte ich Fragen in Bildunterschriften stellen?', answer: 'Ja, Fragen sind eine effektive Engagement-Taktik. Sie laden zur Interaktion ein und signalisieren dem Algorithmus, dass Ihr Inhalt Gespräche anregt. Stellen Sie echte, leicht zu beantwortende Fragen.' },
      { question: 'Wie schreibe ich einen guten Hook?', answer: 'Ein guter Hook stoppt das Scrollen in den ersten Worten. Verwenden Sie überraschende Aussagen, provokante Fragen, persönliche Geständnisse oder Wert-Versprechen. Die ersten 125 Zeichen (Instagram) oder 140 Zeichen (LinkedIn) sind am wichtigsten.' },
      { question: 'Wie oft sollte ich den Bildunterschriften-Stil variieren?', answer: 'Variieren Sie regelmäßig zwischen Educational, Storytelling, Promotional und Engagement-Posts. Ein guter Mix hält Ihr Publikum interessiert und verhindert Content-Müdigkeit. Planen Sie verschiedene Typen in Ihrem Content-Kalender.' },
      { question: 'Kann ich dieselbe Bildunterschrift auf mehreren Plattformen verwenden?', answer: 'Es ist besser, Bildunterschriften für jede Plattform anzupassen. Was auf Instagram funktioniert, passt möglicherweise nicht zu LinkedIns professionellem Ton oder Twitters Zeichenlimit. Passen Sie Hook, Länge und Ton an.' },
    ],
  },

  // ==================== TRANSLATION COMPLETE ====================
};
