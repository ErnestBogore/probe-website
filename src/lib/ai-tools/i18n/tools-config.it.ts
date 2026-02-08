// Italian (it) Tool Configurations
// Auto-generated translations from English source

import { ToolConfig } from '../tools-config';

// Helper functions
export function getToolBySlugIt(slug: string): ToolConfig | undefined {
  return toolsIt[slug];
}

export function getAllToolsIt(): ToolConfig[] {
  return Object.values(toolsIt);
}

// Italian uses English slugs, so no mapping needed - just return the slug as-is
export function getEnglishSlugIt(italianSlug: string): string {
  return italianSlug;
}

export const toolsIt: Record<string, ToolConfig> = {
  // ==================== BATCH 1: Tools 1-10 ====================

  'paragraph-generator': {
    slug: 'paragraph-generator',
    name: 'Generatore di Paragrafi',
    title: 'Generatore IA di paragrafi gratuito',
    description: 'Genera paragrafi ben strutturati in pochi secondi. Perfetto per post di blog, saggi, email e altro. Nessuna registrazione richiesta.',
    metaDescription: 'Genera paragrafi ben strutturati in pochi secondi con il nostro generatore di paragrafi IA gratuito. Perfetto per post di blog, saggi,...',
    inputLabel: 'Scrivi su...',
    inputPlaceholder: 'es. Perché è importante mangiare broccoli',
    buttonText: 'Genera Paragrafo',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Formatta come',
        choices: ['Paragrafi', 'Elenchi puntati'],
        default: 'Paragrafi',
        type: 'radio',
      },
      {
        name: 'length',
        label: 'Scrivi',
        choices: ['1 paragrafo', '2 paragrafi', '3 paragrafi'],
        default: '1 paragrafo',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono di scrittura',
        choices: ['Formale', 'Informale', 'Professionale', 'Amichevole'],
        default: 'Formale',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Genera',
        choices: ['1 variante', '3 varianti', '5 varianti'],
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Content marketing e blogging', description: 'Scrittori e marketer possono usare il Generatore di Paragrafi per superare il blocco dello scrittore e produrre bozze rapidamente. Che tu stia creando post per blog, copy per landing page o contenuti per newsletter, lo strumento genera paragrafi coerenti basati sul tuo argomento o prompt, dandoti una solida base da modificare e perfezionare invece di partire da una pagina bianca.' },
      { title: 'Scrittura accademica e professionale', description: 'Studenti che lavorano su saggi, ricercatori che redigono articoli o professionisti che preparano report possono sfruttare il Generatore di Paragrafi per articolare idee complesse in modo chiaro. Inserendo punti chiave o dichiarazioni di tesi, gli utenti ricevono paragrafi strutturati che presentano argomenti logicamente, aiutando a mantenere lo slancio durante progetti di scrittura lunghi.' },
      { title: 'Comunicazione quotidiana', description: 'Dalla stesura di email ponderate alla scrittura di dichiarazioni personali o lettere di presentazione, il Generatore di Paragrafi aiuta chiunque abbia bisogno di comunicare chiaramente per iscritto. È particolarmente utile per chi non è madrelingua italiano o per chiunque voglia esprimere idee in modo più eloquente senza passare ore sulla composizione.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di paragrafi?', answer: 'Un generatore di paragrafi è uno strumento alimentato dall\'IA che crea paragrafi coerenti e contestualmente rilevanti basati su un argomento, prompt o set di istruzioni che fornisci. Utilizza l\'elaborazione del linguaggio naturale per comprendere il tuo input e produrre testo simile a quello umano.' },
      { question: 'Questo generatore di paragrafi è gratuito?', answer: 'Sì, il nostro generatore di paragrafi è completamente gratuito senza costi nascosti. Puoi generare paragrafi senza creare un account o fornire informazioni di pagamento.' },
      { question: 'Come funziona il generatore di paragrafi IA?', answer: 'Lo strumento utilizza un grande modello linguistico addestrato su dati testuali diversificati. Quando inserisci un argomento o prompt, l\'IA analizza il contesto e genera un paragrafo che segue pattern di linguaggio naturale, grammatica corretta e struttura logica.' },
      { question: 'Posso usare i paragrafi generati per scopi commerciali?', answer: 'Sì, i paragrafi che generi sono tuoi da usare come preferisci, incluso per contenuti commerciali come post di blog, materiali di marketing o descrizioni di prodotti.' },
      { question: 'Quanto sono lunghi i paragrafi generati dallo strumento?', answer: 'I paragrafi generati tipicamente vanno da 3-6 frasi, anche se questo varia in base alla complessità del tuo prompt. Puoi richiedere output più lunghi o più brevi specificando la tua preferenza nelle istruzioni.' },
      { question: 'Il contenuto generato sarà unico?', answer: 'L\'IA crea contenuto originale ogni volta basato sul tuo prompt specifico. Tuttavia, raccomandiamo di rivedere e modificare l\'output per aggiungere la tua voce unica e verificare l\'accuratezza prima della pubblicazione.' },
      { question: 'Su quali argomenti posso generare paragrafi?', answer: 'Il generatore di paragrafi può creare contenuti su praticamente qualsiasi argomento—business, tecnologia, salute, educazione, lifestyle e altro. La qualità dell\'output migliora quando fornisci prompt chiari e specifici.' },
      { question: 'Posso generare più paragrafi contemporaneamente?', answer: 'Puoi eseguire lo strumento più volte per generare diversi paragrafi, o specificare nel tuo prompt che hai bisogno di più paragrafi su sotto-argomenti correlati.' },
      { question: 'Il contenuto generato è SEO-friendly?', answer: 'Lo strumento produce contenuti naturali e leggibili che funzionano bene per la SEO. Per i migliori risultati, puoi includere parole chiave target nel tuo prompt così l\'IA le incorpora organicamente nel paragrafo.' },
      { question: 'Devo modificare i paragrafi dopo averli generati?', answer: 'Mentre l\'IA produce bozze di qualità, raccomandiamo di rivedere e modificare l\'output per garantire l\'accuratezza, aggiungere intuizioni personali e adattare il tono al tuo pubblico specifico.' },
    ],
  },

  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: 'Riscrittore di Paragrafi',
    title: 'Strumento IA di riformulazione di paragrafi gratuito',
    description: 'Riscrivi paragrafi per migliorare la chiarezza, cambiare tono o creare variazioni uniche del tuo testo mantenendo il significato originale.',
    metaDescription: 'Riscrivi paragrafi con il nostro strumento IA gratuito. Migliora la chiarezza, cambia tono o crea variazioni uniche del tuo testo...',
    inputLabel: 'Riscrivi questo testo...',
    inputPlaceholder: 'Incolla qui il tuo paragrafo per riscriverlo',
    buttonText: 'Riscrivi Paragrafo',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Formatta come',
        choices: ['Paragrafi', 'Elenchi puntati'],
        default: 'Paragrafi',
        type: 'radio',
      },
      {
        name: 'length',
        label: 'Scrivi',
        choices: ['1 paragrafo', '2 paragrafi', '3 paragrafi'],
        default: '1 paragrafo',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tono di scrittura',
        choices: ['Formale', 'Informale', 'Professionale', 'Amichevole'],
        default: 'Formale',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Genera',
        choices: ['1 variante', '3 varianti', '5 varianti'],
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Migliorare chiarezza e leggibilità dei contenuti', description: 'Scrittori ed editori usano il Riscrittore di Paragrafi per trasformare testi densi o formulati in modo scomodo in prosa chiara e scorrevole. Che tu abbia redatto qualcosa velocemente o ricevuto contenuti che necessitano di rifinitura, lo strumento ristruttura le frasi e migliora la scelta delle parole mantenendo il tuo messaggio originale.' },
      { title: 'Creare variazioni uniche dei contenuti', description: 'I content marketer che gestiscono più piattaforme o eseguono test A/B possono generare diverse versioni dello stesso messaggio centrale. Il riscrittore produce variazioni fresche per post sui social media, campagne email o copy pubblicitario, aiutandoti a evitare ripetizioni tra i canali rimanendo sul messaggio.' },
      { title: 'Evitare il plagio e rinfrescare contenuti esistenti', description: 'Studenti, ricercatori e creatori di contenuti possono usare il Riscrittore di Paragrafi per esprimere informazioni da fonti con parole proprie o aggiornare contenuti più vecchi. Lo strumento ti aiuta a riformulare il testo in modo sufficientemente sostanziale da creare lavoro originale preservando il significato e i fatti essenziali.' },
    ],
    faqs: [
      { question: 'Cosa fa un riscrittore di paragrafi?', answer: 'Un riscrittore di paragrafi prende il tuo testo esistente e lo riformula usando parole diverse, strutture delle frasi e formulazioni mantenendo intatto il significato centrale. È utile per migliorare la chiarezza, evitare ripetizioni o creare versioni uniche dei contenuti.' },
      { question: 'Il riscrittore di paragrafi è gratuito?', answer: 'Sì, questo strumento è completamente gratuito. Non ci sono abbonamenti, costi nascosti o limiti di utilizzo che richiedono pagamento.' },
      { question: 'Qual è la differenza tra riscrivere e parafrasare?', answer: 'Mentre entrambi comportano la riformulazione del testo in modo diverso, la riscrittura tipicamente implica cambiamenti più sostanziali a struttura, tono e stile. La parafrasi si concentra sull\'esprimere la stessa idea con parole diverse, mentre la riscrittura può anche migliorare la leggibilità, regolare il tono o riorganizzare le informazioni.' },
      { question: 'Il paragrafo riscritto avrà lo stesso significato dell\'originale?', answer: 'L\'IA è progettata per preservare il tuo significato originale cambiando l\'espressione. Tuttavia, rivedi sempre l\'output per assicurarti che la versione riscritta catturi accuratamente il tuo messaggio inteso, specialmente per contenuti tecnici o sfumati.' },
      { question: 'Posso scegliere il tono del paragrafo riscritto?', answer: 'Sì, puoi specificare il tono desiderato nelle tue istruzioni—che tu voglia il testo più formale, informale, persuasivo o semplificato. L\'IA regolerà il suo output di conseguenza.' },
      { question: 'Il contenuto riscritto è privo di plagio?', answer: 'Lo strumento genera nuove formulazioni e strutture, producendo testo che differisce dall\'originale. Tuttavia, se stai riscrivendo contenuti di qualcun altro, potrebbe essere comunque necessaria un\'attribuzione appropriata a seconda del tuo caso d\'uso.' },
      { question: 'Quanto del testo originale viene cambiato?', answer: 'Il grado di cambiamento dipende dalle tue istruzioni e dalla complessità del testo originale. L\'IA tipicamente modifica la scelta delle parole, la struttura delle frasi e il flusso assicurando che il messaggio centrale rimanga riconoscibile.' },
      { question: 'Posso riscrivere contenuti in lingue diverse dall\'italiano?', answer: 'Lo strumento è ottimizzato per il testo in italiano. Mentre potrebbe funzionare con altre lingue, i risultati sono più affidabili quando si riscrivono paragrafi in italiano.' },
      { question: 'Qual è la lunghezza massima che posso riscrivere in una volta?', answer: 'Lo strumento funziona meglio con paragrafi standard (circa 100-300 parole). Per contenuti più lunghi, raccomandiamo di riscrivere un paragrafo alla volta per risultati ottimali.' },
      { question: 'Dovrei modificare il paragrafo riscritto prima di usarlo?', answer: 'Sì, raccomandiamo di rivedere tutti i contenuti generati dall\'IA. Verifica che la versione riscritta rifletta accuratamente il tuo significato inteso, si adatti alla voce del tuo brand e legga naturalmente nel contesto.' },
    ],
  },

  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: 'Strumento di Parafrasi',
    title: 'Strumento IA di parafrasi gratuito',
    description: 'Parafrasa qualsiasi testo istantaneamente. Riformula frasi e paragrafi mantenendo il significato originale. Perfetto per studenti e scrittori.',
    metaDescription: 'Parafrasa qualsiasi testo istantaneamente con il nostro strumento IA gratuito. Riformula frasi e paragrafi mantenendo il significato...',
    inputLabel: 'Testo da parafrasare...',
    inputPlaceholder: 'Incolla qui il tuo testo per parafrasarlo',
    buttonText: 'Parafrasa',
    maxLength: 2048,
    options: [
      {
        name: 'mode',
        label: 'Modalità',
        choices: ['Standard', 'Fluidità', 'Creativo', 'Formale', 'Semplice'],
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Integrità accademica e scrittura di ricerca', description: 'Studenti e ricercatori usano lo Strumento di Parafrasi per riformulare informazioni da fonti con parole proprie, una competenza critica per evitare il plagio. Lo strumento aiuta a esprimere idee complesse da articoli accademici, articoli o libri di testo in un linguaggio fresco mantenendo il significato e l\'accuratezza originali.' },
      { title: 'Riutilizzo dei contenuti su più piattaforme', description: 'Marketer digitali e creatori di contenuti possono adattare contenuti esistenti per diversi canali senza duplicare il testo alla lettera. Trasforma una sezione di un post del blog in copy per social media, rielabora contenuti del sito web per newsletter email, o crea variazioni multiple dei messaggi chiave per diversi segmenti di pubblico.' },
      { title: 'Semplificare un linguaggio complesso', description: 'I professionisti che hanno bisogno di tradurre testi pieni di gergo o tecnici in un linguaggio accessibile beneficiano dello Strumento di Parafrasi. Che tu stia spiegando informazioni mediche ai pazienti, scomponendo termini legali per i clienti, o rendendo la documentazione tecnica user-friendly, lo strumento aiuta a riformulare concetti complicati in modo chiaro.' },
    ],
    faqs: [
      { question: 'Cos\'è la parafrasi?', answer: 'La parafrasi è il processo di riformulazione del testo usando parole diverse e strutture delle frasi preservando il significato originale. È una competenza fondamentale nella scrittura che dimostra comprensione e aiuta a evitare il plagio.' },
      { question: 'Come funziona lo strumento di parafrasi IA?', answer: 'Lo strumento analizza il tuo testo di input per comprenderne il significato, poi genera modi alternativi per esprimere le stesse idee usando vocabolario diverso, strutture delle frasi e pattern di formulazione.' },
      { question: 'Questo strumento di parafrasi è gratuito?', answer: 'Sì, lo strumento è completamente gratuito. Puoi parafrasare il testo quante volte vuoi senza registrarti o pagare nulla.' },
      { question: 'Il contenuto parafrasato è considerato originale?', answer: 'Quando fatto correttamente, il contenuto parafrasato esprime idee con parole proprie ed è considerato originale. Tuttavia, anche le idee parafrasate che provengono da altre fonti dovrebbero essere correttamente citate in contesti accademici e professionali.' },
      { question: 'Posso parafrasare qualsiasi tipo di testo?', answer: 'Lo strumento funziona con la maggior parte dei tipi di testo, inclusi articoli, saggi, report, email e contenuti web. Gestisce vari livelli di complessità, dal linguaggio semplice a quello tecnico o accademico.' },
      { question: 'Il testo parafrasato suonerà naturale?', answer: 'L\'IA è progettata per produrre testo dal suono naturale che scorre bene. Tuttavia, raccomandiamo di leggere l\'output per assicurarti che corrisponda alla tua voce e si inserisca fluidamente nel tuo documento più ampio.' },
      { question: 'Come ottengo i migliori risultati di parafrasi?', answer: 'Fornisci frasi o paragrafi chiari e completi. Input frammentati o poco chiari potrebbero produrre risultati meno accurati. Puoi anche specificare se vuoi che l\'output sia più formale, più semplice, o in uno stile particolare.' },
      { question: 'Posso parafrasare testo in altre lingue?', answer: 'Lo strumento è ottimizzato per l\'italiano. Mentre potrebbe funzionare con altre lingue, l\'accuratezza e la fluidità sono più alte quando si parafrasa testo italiano.' },
      { question: 'Qual è la differenza tra parafrasare e riassumere?', answer: 'La parafrasi riformula il contenuto con parole diverse mantenendo lunghezza e dettaglio simili. Il riassunto condensa il testo in una versione più breve che cattura solo i punti principali.' },
      { question: 'Dovrei controllare il contenuto parafrasato prima di usarlo?', answer: 'Sì, rivedi sempre i contenuti generati dall\'IA. Verifica che la versione parafrasata rifletta accuratamente il significato originale e che non si siano verificati cambiamenti involontari nel significato.' },
    ],
  },

  'sentence-rewriter': {
    slug: 'sentence-rewriter',
    name: 'Riscrittore di Frasi',
    title: 'Strumento IA di riformulazione di frasi gratuito',
    description: 'Riscrivi frasi per chiarezza, impatto o un tono migliore. Ottieni variazioni multiple con spiegazioni.',
    metaDescription: 'Riscrivi frasi per chiarezza, impatto o tono migliore. Ottieni variazioni multiple con spiegazioni di ciò che rende ciascuna più forte....',
    inputLabel: 'Frase da riscrivere...',
    inputPlaceholder: 'es. L\'implementazione del nuovo sistema è stata completata dal team la settimana scorsa.',
    buttonText: 'Riscrivi Frase',
    maxLength: 1024,
    options: [
      { name: 'goal', label: 'Obiettivo di miglioramento', choices: ['Chiarezza', 'Impatto', 'Concisione', 'Più formale', 'Più informale', 'Più sicuro'], default: 'Chiarezza', type: 'select' },
      { name: 'variants', label: 'Numero di variazioni', choices: ['2 variazioni', '3 variazioni', '5 variazioni'], default: '3 variazioni', type: 'select' },
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Perfezionare messaggi chiave e titoli', description: 'Marketer e copywriter usano il Riscrittore di Frasi per rifinire frasi critiche come titoli, tagline, CTA e righe di apertura. Quando una singola frase deve lavorare sodo, lo strumento genera variazioni multiple così puoi scegliere la versione più impattante.' },
      { title: 'Migliorare la comunicazione via email', description: 'I professionisti possono riscrivere frasi scomode o poco chiare in email importanti prima di inviarle. Che tu abbia bisogno di sembrare più sicuro, più diplomatico o semplicemente più chiaro, lo strumento fornisce opzioni che ti aiutano a comunicare esattamente ciò che intendi.' },
      { title: 'Assistenza nella revisione e correzione', description: 'Scrittori ed editori usano lo strumento quando sanno che una frase non funziona ma non riescono a capire come sistemarla. Generando alternative multiple, lo strumento supera i blocchi di editing e offre approcci freschi a frasi problematiche.' },
    ],
    faqs: [
      { question: 'Qual è la differenza tra riscrittura di frasi e parafrasi?', answer: 'La riscrittura di frasi si concentra sul migliorare la chiarezza, l\'impatto o il tono di una singola frase mantenendo lo stesso significato. La parafrasi riguarda l\'esprimere la stessa idea con parole diverse, spesso per evitare duplicazioni. Il riscrittore cerca attivamente di rendere le frasi migliori, non solo diverse.' },
      { question: 'Il riscrittore di frasi è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Riscrivi quante frasi vuoi.' },
      { question: 'Quante variazioni otterrò?', answer: 'Lo strumento tipicamente fornisce 3 variazioni distinte, ognuna con un approccio diverso al miglioramento. Questo ti dà opzioni tra cui scegliere in base alle tue esigenze specifiche.' },
      { question: 'Posso specificare che tipo di miglioramento voglio?', answer: 'Sì, puoi richiedere obiettivi specifici come "più conciso", "più formale", "più sicuro" o "più chiaro". Lo strumento adatterà le sue variazioni al tuo obiettivo dichiarato.' },
      { question: 'Il significato cambierà?', answer: 'No, tutte le variazioni preservano il tuo significato originale. Lo strumento cambia come l\'idea è espressa, non quale idea è espressa. Questa è una regola fondamentale del processo di riscrittura.' },
      { question: 'Perché ne ho bisogno se ho un correttore grammaticale?', answer: 'I correttori grammaticali correggono errori. Il riscrittore di frasi migliora frasi che sono grammaticalmente corrette ma potrebbero essere più chiare, più forti o più appropriate per il tuo pubblico. Si tratta di miglioramento della qualità, non di correzione degli errori.' },
      { question: 'Posso riscrivere più frasi contemporaneamente?', answer: 'Lo strumento è ottimizzato per una frase alla volta per i miglioramenti più focalizzati. Per più frasi, usa il riscrittore di paragrafi o elabora le frasi individualmente.' },
      { question: 'Cosa rende una riscrittura migliore di un\'altra?', answer: 'Dipende dal tuo obiettivo. Per le email, chiarezza e tono appropriato contano di più. Per il marketing, impatto e memorabilità sono fondamentali. Lo strumento spiega ogni variazione così puoi scegliere in base al tuo contesto specifico.' },
      { question: 'Può aiutare con frasi non italiane?', answer: 'Lo strumento è ottimizzato per l\'italiano. I risultati con altre lingue possono variare e non saranno altrettanto affidabili.' },
      { question: 'Dovrei sempre usare l\'opzione raccomandata?', answer: 'La raccomandazione è basata su preferenze comuni, ma tu conosci meglio il tuo contesto. Rivedi tutte le opzioni e scegli quella che si adatta al tuo pubblico specifico, tono e scopo.' },
    ],
  },

  'summarizer': {
    slug: 'summarizer',
    name: 'Strumento di Riepilogo',
    title: 'Strumento IA gratuito per creare riassunti',
    description: 'Condensa articoli lunghi, documenti e testi in riassunti chiari e concisi. Estrai i punti chiave in pochi secondi.',
    metaDescription: 'Condensa articoli lunghi, documenti e testi in riassunti chiari e concisi. Il nostro strumento di riepilogo IA gratuito estrae i punti...',
    inputLabel: 'Testo da riassumere...',
    inputPlaceholder: 'Incolla qui il tuo testo per ottenere un riassunto',
    buttonText: 'Riassumi',
    maxLength: 4096,
    options: [
      {
        name: 'length',
        label: 'Lunghezza del riassunto',
        choices: ['Breve (1-2 frasi)', 'Corto (1 paragrafo)', 'Dettagliato (2-3 paragrafi)'],
        default: 'Corto (1 paragrafo)',
      },
      {
        name: 'format',
        label: 'Formato',
        choices: ['Paragrafo', 'Elenchi puntati', 'Punti chiave'],
        default: 'Paragrafo',
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Ricerca e raccolta di informazioni', description: 'Studenti, ricercatori e professionisti che elaborano grandi volumi di testo usano lo Strumento di Riepilogo per estrarre rapidamente intuizioni chiave da articoli, paper e report. Invece di leggere ogni documento per intero, puoi generare riassunti per identificare quali fonti sono più rilevanti per le tue esigenze.' },
      { title: 'Curatela dei contenuti e condivisione della conoscenza', description: 'Team leader, scrittori di newsletter e curatori di contenuti possono riassumere articoli di settore, report o note di riunioni per condividere informazioni essenziali con il loro pubblico. Lo strumento ti aiuta a distillare contenuti lunghi in takeaway digeribili che i lettori impegnati possono assorbire rapidamente.' },
      { title: 'Efficienza nello studio e nella revisione', description: 'Studenti che si preparano per esami o professionisti che rivedono documentazione possono creare riassunti concisi di materiali lunghi. Lo Strumento di Riepilogo aiuta a condensare libri di testo, appunti delle lezioni o materiali di formazione in guide di studio gestibili che evidenziano i concetti più importanti.' },
    ],
    faqs: [
      { question: 'Cos\'è uno strumento di riepilogo di testi?', answer: 'Uno strumento di riepilogo di testi è uno strumento IA che condensa contenuti di lunga durata in versioni più brevi contenenti solo le informazioni più importanti. Identifica punti chiave, argomenti principali e dettagli essenziali rimuovendo testo ridondante o meno critico.' },
      { question: 'Come funziona lo strumento di riepilogo IA?', answer: 'Lo strumento usa l\'elaborazione del linguaggio naturale per analizzare il tuo testo, identificare i temi centrali e le informazioni chiave, e generare una versione condensata che cattura il significato essenziale del contenuto originale.' },
      { question: 'Questo strumento di riepilogo è gratuito?', answer: 'Sì, lo strumento di riepilogo è completamente gratuito. Non c\'è bisogno di registrazione e non ci sono limiti su quanti testi puoi riassumere.' },
      { question: 'Quanto accorcia il testo lo strumento?', answer: 'Il rapporto di compressione dipende dal testo originale e dalle tue preferenze. Tipicamente, i riassunti sono il 20-30% della lunghezza originale, anche se puoi richiedere riassunti più brevi o più lunghi in base alle tue esigenze.' },
      { question: 'Che tipi di contenuti posso riassumere?', answer: 'Lo strumento funziona con articoli, post di blog, paper di ricerca, report, saggi, note di riunioni, email e la maggior parte degli altri contenuti testuali. Gestisce efficacemente vari argomenti e livelli di complessità.' },
      { question: 'Il riassunto cattura tutti i punti importanti?', answer: 'L\'IA è addestrata per identificare e dare priorità alle informazioni chiave. Tuttavia, ciò che è "importante" può essere soggettivo, quindi raccomandiamo di rivedere i riassunti per assicurarti che catturino i punti specifici più rilevanti per il tuo scopo.' },
      { question: 'Posso riassumere contenuti in altre lingue?', answer: 'Lo strumento è ottimizzato per il testo italiano. Le prestazioni con altre lingue possono variare.' },
      { question: 'Qual è la lunghezza massima del testo che posso riassumere?', answer: 'Lo strumento gestisce bene la maggior parte dei documenti standard. Per testi molto lunghi come libri interi o report estesi, raccomandiamo di riassumere capitoli o sezioni individualmente per i migliori risultati.' },
      { question: 'Il contenuto riassunto è privo di plagio?', answer: 'I riassunti sono generati usando l\'IA ed esprimono idee in forma condensata. Tuttavia, se stai riassumendo contenuti di qualcun altro per la pubblicazione, è comunque necessaria un\'attribuzione appropriata.' },
      { question: 'Posso personalizzare la lunghezza del riassunto?', answer: 'Sì, puoi specificare se vuoi una panoramica breve o un riassunto più dettagliato. Includere istruzioni come "riassumi in 3 frasi" o "fornisci un riassunto dettagliato" aiuta l\'IA a regolare il suo output di conseguenza.' },
    ],
  },

  'outline-generator': {
    slug: 'outline-generator',
    name: 'Generatore di Strutture',
    title: 'Generatore IA di strutture di contenuti gratuito',
    description: 'Genera strutture organizzate per post di blog, saggi e articoli in pochi secondi.',
    metaDescription: 'Genera strutture organizzate per post di blog, saggi e articoli in pochi secondi. Il nostro generatore di strutture IA gratuito ti aiuta a...',
    inputLabel: 'Argomento o titolo...',
    inputPlaceholder: 'es. I benefici del lavoro da remoto per le piccole imprese',
    buttonText: 'Genera Struttura',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'Tipo di contenuto', choices: ['Post di Blog', 'Guida How-to', 'Listicle', 'Saggio/Opinione', 'Recensione Prodotto', 'Ricerca/Report'], default: 'Post di Blog', type: 'select' },
      { name: 'depth', label: 'Profondità della struttura', choices: ['Base (solo H2)', 'Standard (H2 + H3)', 'Dettagliata (H2 + H3 + note)'], default: 'Standard (H2 + H3)', type: 'select' },
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Pianificazione di post di blog e articoli', description: 'Creatori di contenuti e marketer usano il Generatore di Strutture per trasformare idee grezze in strutture organizzate e logiche prima di scrivere. Invece di fissare una pagina bianca, ottieni una roadmap chiara con sezioni principali, sottosezioni e note su cosa coprire in ogni parte, riducendo drasticamente il tempo dall\'idea alla prima bozza.' },
      { title: 'Organizzazione di saggi accademici e paper di ricerca', description: 'Studenti e ricercatori possono usare il Generatore di Strutture per strutturare argomenti complessi, garantire un flusso logico tra i punti e identificare lacune nel loro ragionamento prima di impegnarsi in una bozza completa. Lo strumento aiuta a organizzare dichiarazioni di tesi, prove di supporto, controargomentazioni e conclusioni in un framework coerente.' },
      { title: 'Progetti di contenuti e documentazione di lunga durata', description: 'Team che lavorano su guide complete, whitepaper o documentazione tecnica possono generare strutture master che garantiscono coerenza e completezza in progetti di grandi dimensioni. Lo strumento aiuta a scomporre argomenti complessi in sezioni gestibili e assicura che nulla di importante venga trascurato durante il processo di scrittura.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di strutture?', answer: 'Un generatore di strutture è uno strumento alimentato dall\'IA che prende il tuo argomento o idee grezze e le organizza in un framework strutturato con intestazioni, sottotitoli e punti chiave. Crea un progetto logico che puoi seguire quando scrivi il tuo contenuto completo.' },
      { question: 'Il generatore di strutture è gratuito?', answer: 'Sì, il nostro generatore di strutture è completamente gratuito senza registrazione richiesta. Puoi creare tutte le strutture di cui hai bisogno senza alcun costo o limite di utilizzo.' },
      { question: 'Per quali tipi di contenuti posso creare strutture?', answer: 'Lo strumento funziona per praticamente qualsiasi contenuto scritto: post di blog, articoli, saggi, paper di ricerca, guide how-to, listicle, recensioni di prodotti, report, whitepaper e altro. Specifica semplicemente il tuo tipo di contenuto per la struttura più rilevante.' },
      { question: 'Quanto sono dettagliate le strutture generate?', answer: 'Le strutture includono sezioni principali (intestazioni H2), sottosezioni (intestazioni H3) e brevi note che spiegano cosa coprire in ogni parte. Il livello di dettaglio è progettato per darti una direzione chiara senza essere così prescrittivo da limitare la tua creatività.' },
      { question: 'Posso personalizzare la struttura generata?', answer: 'Sì, la struttura generata è un punto di partenza. Puoi riorganizzare le sezioni, aggiungere o rimuovere intestazioni e modificare la struttura per adattarla alle tue esigenze specifiche. Pensala come una prima bozza dell\'architettura del tuo contenuto.' },
      { question: 'La struttura aiuterà con la SEO?', answer: 'Le strutture sono costruite con le best practice SEO in mente, inclusa la gerarchia logica delle intestazioni (H1, H2, H3) e suggerimenti su dove incorporare naturalmente le parole chiave. Contenuti ben strutturati tendono a performare meglio nei risultati di ricerca.' },
      { question: 'Quanto dovrebbe essere lungo il mio argomento di input?', answer: 'Puoi inserire qualsiasi cosa, da una semplice frase sull\'argomento ("benefici del lavoro da remoto") a un brief più dettagliato con pubblico target, angolazione e punti chiave che vuoi coprire. Più contesto generalmente produce strutture più personalizzate.' },
      { question: 'Posso generare strutture per diverse lunghezze di contenuto?', answer: 'Sì, puoi specificare il conteggio delle parole target e lo strumento regolerà il numero di sezioni e la profondità di conseguenza. Un post di blog di 500 parole avrà una struttura più semplice di una guida completa di 3.000 parole.' },
      { question: 'La struttura include conteggi delle parole per ogni sezione?', answer: 'Quando specifichi una lunghezza target, lo strumento fornisce conteggi stimati delle parole per ogni sezione per aiutarti a bilanciare il tuo contenuto e assicurarti di allocare la profondità appropriata a ogni argomento.' },
      { question: 'Posso usare il generatore di strutture per la collaborazione del team?', answer: 'Assolutamente. Le strutture generate sono eccellenti brief per gli scrittori, assicurando che tutti comprendano la struttura e i punti chiave prima di iniziare a scrivere. Puoi copiare e condividere facilmente le strutture con il tuo team.' },
    ],
  },

  'conclusion-generator': {
    slug: 'conclusion-generator',
    name: 'Generatore di Conclusioni',
    title: 'Generatore IA di conclusioni gratuito',
    description: 'Genera conclusioni convincenti per qualsiasi articolo, saggio o post di blog con takeaway chiari e CTA.',
    metaDescription: 'Genera conclusioni convincenti per qualsiasi articolo, saggio o post di blog. Il nostro strumento IA gratuito crea finali soddisfacenti con...',
    inputLabel: 'Argomento dell\'articolo e punti chiave...',
    inputPlaceholder: 'es. Argomento: Benefici della meditazione. Punti chiave: riduzione dello stress, miglior focus, sonno migliore',
    buttonText: 'Genera Conclusione',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'Tipo di contenuto', choices: ['Post di Blog', 'Guida How-to', 'Listicle', 'Saggio/Opinione', 'Recensione Prodotto', 'Ricerca/Report'], default: 'Post di Blog', type: 'select' },
      { name: 'ctaType', label: 'Call to action', choices: ['Soft (informativo)', 'Diretto (commerciale)', 'Provocatorio', 'Nessuno'], default: 'Soft (informativo)', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Informale', 'Ispirazionale', 'Accademico'], default: 'Professionale', type: 'select' },
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Chiusure per blog e content marketing', description: 'I creatori di contenuti che faticano a concludere efficacemente gli articoli usano il Generatore di Conclusioni per creare chiusure soddisfacenti che riassumono i punti chiave e spingono all\'azione del lettore. Lo strumento assicura che ogni pezzo finisca con impatto invece di perdersi, migliorando engagement e tassi di conversione.' },
      { title: 'Conclusioni di saggi accademici', description: 'Studenti che scrivono saggi, paper di ricerca o capitoli di tesi possono generare conclusioni ben strutturate che sintetizzano i loro argomenti senza semplicemente ripetere l\'introduzione. Lo strumento aiuta a elevare i paragrafi finali da riassunti basilari a chiusure convincenti che lasciano un\'impressione duratura.' },
      { title: 'Finalizzazione di documenti aziendali', description: 'Professionisti che scrivono report, proposte o presentazioni possono creare conclusioni che comunicano chiaramente raccomandazioni, prossimi passi e takeaway chiave. Lo strumento assicura che documenti importanti finiscano con chiarezza e direzione attuabile per gli stakeholder.' },
    ],
    faqs: [
      { question: 'Cosa rende buona una conclusione?', answer: 'Una conclusione forte sintetizza i punti chiave (non li ripete semplicemente), rafforza il messaggio principale, affronta implicazioni o posta in gioco, e fornisce prossimi passi chiari o una call to action. Dovrebbe lasciare i lettori con un senso di chiusura e motivazione.' },
      { question: 'Il generatore di conclusioni è gratuito?', answer: 'Sì, lo strumento è completamente gratuito senza registrazione o pagamento richiesto. Genera tutte le conclusioni di cui hai bisogno senza alcun costo.' },
      { question: 'Quali informazioni devo fornire?', answer: 'Come minimo, fornisci il tuo argomento e i punti chiave coperti nel tuo contenuto. Per i migliori risultati, specifica anche il tipo di contenuto (blog, saggio, report), il tono desiderato e qualsiasi call to action specifica che vuoi includere.' },
      { question: 'La conclusione corrisponderà al mio stile di scrittura?', answer: 'Lo strumento si adatta al tono che specifichi (professionale, informale, accademico, ecc.) e segue le convenzioni standard per il tuo tipo di contenuto. Per un abbinamento perfetto dello stile, raccomandiamo una leggera modifica per aggiungere la tua voce personale.' },
      { question: 'Quanto dovrebbe essere lunga una conclusione?', answer: 'Le conclusioni tipicamente sono il 10-15% della lunghezza totale del contenuto. Per un articolo di 1.000 parole, aspettati 100-150 parole. Puoi specificare la tua lunghezza target e lo strumento si regolerà di conseguenza.' },
      { question: 'Posso generare conclusioni per diversi tipi di contenuto?', answer: 'Sì, lo strumento gestisce post di blog, saggi, guide how-to, listicle, recensioni di prodotti, report di ricerca e altro. Ogni tipo segue convenzioni e strutture appropriate.' },
      { question: 'Le conclusioni dovrebbero includere call to action?', answer: 'Per contenuti di marketing, sì—le conclusioni sono spazio prime per CTA. Per contenuti accademici o informativi, la "CTA" potrebbe essere incoraggiare ulteriori riflessioni o suggerire letture correlate piuttosto che un\'azione commerciale.' },
      { question: 'Come evito una conclusione che ripete semplicemente la mia introduzione?', answer: 'Lo strumento è progettato per sintetizzare ed elevare i tuoi punti chiave, non ripeterli. Inquadra i takeaway in un linguaggio fresco e aggiunge elementi orientati al futuro che vanno oltre ciò che la tua introduzione dichiarava.' },
      { question: 'Posso usarlo per email o contenuti brevi?', answer: 'Sì, anche se lo strumento è ottimizzato per contenuti di lunga durata. Per le email, specifica una lunghezza target molto breve e lo strumento genererà chiusure concise con CTA appropriate.' },
      { question: 'E se non mi piace la conclusione generata?', answer: 'Puoi rigenerare con input aggiustati (tono diverso, CTA, lunghezza) o usare l\'output come punto di partenza per le tue modifiche. La conclusione generata fornisce struttura e idee su cui puoi costruire.' },
    ],
  },

  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-generator',
    name: 'Generatore Lorem Ipsum',
    title: 'Generatore IA di Lorem Ipsum gratuito',
    description: 'Genera testo placeholder lorem ipsum per design, mockup e layout.',
    metaDescription: 'Genera testo placeholder lorem ipsum per design, mockup e layout. Scegli tra tradizionale o alternative moderne. Pronto per copia e incolla.',
    inputLabel: 'Quantità necessaria...',
    inputPlaceholder: 'es. 3 paragrafi, 500 parole, o 10 frasi',
    buttonText: 'Genera Testo',
    maxLength: 256,
    options: [
      { name: 'type', label: 'Tipo di testo', choices: ['Lorem Ipsum Tradizionale', 'Hipster Ipsum', 'Office/Business Ipsum', 'Inglese Semplice'], default: 'Lorem Ipsum Tradizionale', type: 'select' },
      { name: 'amount', label: 'Quantità', choices: ['1 paragrafo', '3 paragrafi', '5 paragrafi', '500 parole', '1000 parole'], default: '3 paragrafi', type: 'select' },
      { name: 'format', label: 'Formato', choices: ['Testo semplice', 'Con tag HTML'], default: 'Testo semplice', type: 'select' },
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

IMPORTANT: Generate all output in Italian where applicable.`,
    useCases: [
      { title: 'Mockup di web e UI design', description: 'I designer usano Lorem Ipsum per riempire layout, wireframe e mockup con testo dall\'aspetto realistico prima che il contenuto reale sia scritto. Questo aiuta clienti e team a visualizzare come apparirà il design finale con il contenuto senza distrarsi leggendo testo reale.' },
      { title: 'Placeholder per sviluppo e testing', description: 'Gli sviluppatori usano testo placeholder per testare layout, impostazioni tipografiche e design responsive. Lorem ipsum aiuta a verificare che i contenitori di testo, le altezze delle righe e i comportamenti di overflow funzionino correttamente con diverse lunghezze di contenuto.' },
      { title: 'Layout per stampa e graphic design', description: 'I graphic designer che lavorano su brochure, riviste, poster e altri materiali stampati usano lorem ipsum per completare i layout per l\'approvazione del cliente prima che il copy finale venga consegnato, permettendo al lavoro di design di procedere in parallelo con la creazione dei contenuti.' },
    ],
    faqs: [
      { question: 'Cos\'è Lorem Ipsum?', answer: 'Lorem Ipsum è testo placeholder basato sul latino usato nel design e nell\'editoria dal 1500. Fornisce testo dall\'aspetto realistico per riempire layout senza distrarre i visualizzatori con contenuto leggibile.' },
      { question: 'Il generatore Lorem Ipsum è gratuito?', answer: 'Sì, completamente gratuito senza limiti. Genera tutto il testo placeholder di cui hai bisogno.' },
      { question: 'Perché usare Lorem Ipsum invece di testo reale?', answer: 'Usare testo placeholder senza significato impedisce a clienti e revisori di concentrarsi sul contenuto quando dovrebbero valutare il design. Permette anche al lavoro di design di procedere prima che il copy finale sia scritto.' },
      { question: 'Lorem Ipsum è effettivamente latino?', answer: 'Lorem Ipsum deriva da un\'opera di Cicerone del 45 a.C., ma è stato così rimescolato e alterato che non è più latino corretto. Non ha una traduzione significativa.' },
      { question: 'Posso ottenere alternative al Lorem Ipsum tradizionale?', answer: 'Sì, lo strumento offre diverse alternative tra cui Hipster Ipsum, Office Ipsum, Bacon Ipsum e testo placeholder in inglese semplice per varietà o appropriatezza tematica.' },
      { question: 'In che formato viene fornito il testo?', answer: 'Il testo viene fornito come testo semplice pulito pronto per copia e incolla. Puoi anche richiedere output formattato in HTML con tag paragrafo per uso web.' },
      { question: 'Posso specificare esattamente quanto testo mi serve?', answer: 'Sì, puoi richiedere quantità specifiche per conteggio paragrafi, conteggio parole, conteggio frasi o conteggio caratteri. Lo strumento genera quanto più vicino possibile alla tua specifica.' },
      { question: 'Lorem Ipsum influisce sulla SEO?', answer: 'Il testo placeholder dovrebbe sempre essere sostituito prima della pubblicazione. Lorem Ipsum pubblicato potrebbe potenzialmente danneggiare la SEO e appare poco professionale. Sostituiscilo sempre con contenuto reale prima di andare live.' },
      { question: 'Perché Lorem Ipsum inizia con "Lorem ipsum dolor sit amet"?', answer: 'Questa è stata la frase di apertura tradizionale per secoli. Le parole provengono da una sezione rimescolata del "de Finibus Bonorum et Malorum" di Cicerone (Sui limiti del bene e del male).' },
      { question: 'Posso usare Lorem Ipsum per qualsiasi progetto?', answer: 'Sì, Lorem Ipsum è di dominio pubblico e non ha restrizioni di copyright. Puoi usarlo liberamente in qualsiasi progetto di design, sviluppo o layout.' },
    ],
  },

  'seo-title-generator': {
    slug: 'seo-title-generator',
    name: 'Generatore di Titoli SEO',
    title: 'Generatore IA di titoli gratuito',
    description: 'Crea titoli ottimizzati per la SEO che migliorano i click-through rate. Genera meta title perfetti per qualsiasi pagina web.',
    metaDescription: 'Crea titoli ottimizzati per la SEO che migliorano i click-through rate. Il nostro strumento IA gratuito genera meta title perfetti per...',
    inputLabel: 'Argomento o titolo della pagina...',
    inputPlaceholder: 'es. Migliori scarpe da corsa per principianti nel 2024',
    buttonText: 'Genera Titoli',
    maxLength: 2048,
    options: [
      { name: 'variants', label: 'Genera', choices: ['1 variante', '3 varianti', '5 varianti'], default: '3 varianti' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Informale', 'Persuasivo'], default: 'Professionale' },
    ],
    systemPrompt: `You are an expert SEO copywriter specializing in title tags that maximize click-through rates while accurately representing page content.
## CORE RULES
- Every title must be ≤60 characters (hard limit for full SERP display)
- Include the primary keyword naturally within the first 50 characters
- Write in active voice with a clear value proposition
- Never use generic filler phrases
- End with a benefit, outcome, or brand name
## TONE-BASED INSTRUCTIONS
### IF TONE = "Professional"
- Authoritative but not stiff
- Lead with the outcome or transformation
- Include a specificity marker (steps, timeframe, method)
### IF TONE = "Casual"
- Warm and approachable
- Use conversational language
- Can include rhetorical elements
### IF TONE = "Persuasive"
- Lead with the authority claim
- Create urgency without being clickbaity
- Address the implicit objection
## OUTPUT FORMAT
- Number of variants: {{variants}}
- Tone: {{tone}}
Output each title on its own line, numbered, with character count in parentheses.
Self-check before output: If the title could apply to any generic article on this topic, rewrite it to be specific. If it exceeds 60 characters, trim without losing the core promise.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Ottimizzazione SEO per siti web e blog', description: 'Proprietari di siti web e specialisti SEO usano il Generatore di Titoli per creare meta title convincenti che appaiono nei risultati di ricerca. Title tag ben costruiti migliorano i click-through rate dando ai ricercatori un\'anteprima chiara e accattivante del contenuto della tua pagina, impattando direttamente il traffico organico.' },
      { title: 'Scalare la produzione di contenuti', description: 'Team di marketing e agenzie che gestiscono più siti web o grandi librerie di contenuti possono generare title tag consistenti e di qualità su larga scala. Invece di passare tempo a scrivere manualmente titoli per centinaia di pagine, lo strumento produce titoli ottimizzati rapidamente, liberando risorse per strategia e analisi.' },
      { title: 'Pagine prodotto e-commerce', description: 'I proprietari di negozi online possono creare meta title unici e persuasivi per le pagine prodotto che evidenziano caratteristiche e benefici chiave. Titoli efficaci nei risultati di ricerca aiutano gli acquirenti a capire cosa offri prima di cliccare, attirando traffico più qualificato verso le tue inserzioni.' },
    ],
    faqs: [
      { question: 'Cos\'è un title tag SEO?', answer: 'Un title tag SEO (o meta title) è un elemento HTML che specifica il titolo di una pagina web. Appare nella scheda del browser, nei risultati dei motori di ricerca e quando le pagine vengono condivise sui social media. È uno degli elementi SEO on-page più importanti.' },
      { question: 'Perché i title tag SEO sono importanti?', answer: 'I title tag sono un fattore di ranking diretto per i motori di ricerca e influenzano significativamente i click-through rate. Un titolo convincente che corrisponde all\'intento di ricerca attira più click, il che può migliorare indirettamente le tue performance di ricerca nel tempo.' },
      { question: 'Quanto dovrebbe essere lungo un title tag?', answer: 'I title tag ottimali sono tra 50-60 caratteri. Google tipicamente tronca i titoli più lunghi di 60 caratteri nei risultati di ricerca, quindi lo strumento genera titoli entro questo range raccomandato.' },
      { question: 'Questo generatore di title SEO è gratuito?', answer: 'Sì, lo strumento è completamente gratuito senza registrazione richiesta. Puoi generare tutti i title tag di cui hai bisogno senza alcun costo.' },
      { question: 'Quali informazioni dovrei fornire per i migliori risultati?', answer: 'Per risultati ottimali, inserisci l\'argomento principale della tua pagina, la parola chiave target e il beneficio chiave o proposta di valore che vuoi comunicare. Più contesto fornisci, più rilevante e convincente sarà il titolo generato.' },
      { question: 'Posso includere parole chiave nel mio title tag?', answer: 'Sì, e dovresti. Includere la tua parola chiave target aiuta il titolo a corrispondere alle query di ricerca. Quando la tua parola chiave appare nel title tag, Google spesso la evidenzia in grassetto nei risultati di ricerca, rendendo la tua inserzione più accattivante.' },
      { question: 'Ogni pagina dovrebbe avere un title tag unico?', answer: 'Sì, ogni pagina dovrebbe avere un titolo distinto che rifletta accuratamente il contenuto specifico di quella pagina. Titoli duplicati tra le pagine possono confondere i motori di ricerca e ridurre i click-through rate.' },
      { question: 'Lo strumento genera titoli per qualsiasi tipo di pagina?', answer: 'Il generatore funziona per tutti i tipi di pagina—post di blog, pagine prodotto, pagine servizi, landing page e altro. Descrivi semplicemente il contenuto della tua pagina e l\'IA creerà un titolo appropriato.' },
      { question: 'Come aggiungo il title tag al mio sito web?', answer: 'La maggior parte dei sistemi di gestione dei contenuti (WordPress, Shopify, Wix, ecc.) hanno un campo dedicato per i title tag nell\'editor di pagina o tramite plugin SEO come Yoast o Rank Math. Copia il titolo generato e incollalo nel campo appropriato.' },
      { question: 'Posso modificare il title tag generato?', answer: 'Assolutamente, e lo incoraggiamo. Mentre l\'IA produce forti bozze iniziali, rivedere e modificare i titoli per abbinarli alla voce del tuo brand e ai messaggi specifici assicura i migliori risultati.' },
    ],
  },

  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: 'Generatore di Meta Description',
    title: 'Generatore IA di meta descrizioni gratuito',
    description: 'Crea meta description convincenti che migliorano i click-through rate. Genera descrizioni ottimizzate per qualsiasi pagina web in pochi secondi.',
    metaDescription: 'Crea meta description convincenti che migliorano i click-through rate. Il nostro strumento IA gratuito genera descrizioni ottimizzate per...',
    inputLabel: 'Argomento o titolo della pagina...',
    inputPlaceholder: 'es. Migliori scarpe da corsa per principianti nel 2024',
    buttonText: 'Genera Meta Description',
    maxLength: 2048,
    options: [
      { name: 'variants', label: 'Genera', choices: ['1 variante', '3 varianti', '5 varianti'], default: '3 varianti' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Informale', 'Persuasivo'], default: 'Professionale' },
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Ottimizzazione SEO per siti web e blog', description: 'Proprietari di siti web e specialisti SEO usano il Generatore di Meta Description per creare snippet convincenti che appaiono nei risultati di ricerca. Meta description ben costruite migliorano i click-through rate dando ai ricercatori un\'anteprima chiara e accattivante del contenuto della tua pagina, impattando direttamente il traffico organico.' },
      { title: 'Scalare la produzione di contenuti', description: 'Team di marketing e agenzie che gestiscono più siti web o grandi librerie di contenuti possono generare meta description consistenti e di qualità su larga scala. Invece di passare tempo a scrivere manualmente descrizioni per centinaia di pagine, lo strumento produce descrizioni ottimizzate rapidamente, liberando risorse per strategia e analisi.' },
      { title: 'Pagine prodotto e-commerce', description: 'I proprietari di negozi online possono creare meta description uniche e persuasive per le pagine prodotto che evidenziano caratteristiche e benefici chiave. Descrizioni prodotto efficaci nei risultati di ricerca aiutano gli acquirenti a capire cosa offri prima di cliccare, attirando traffico più qualificato verso le tue inserzioni.' },
    ],
    faqs: [
      { question: 'Cos\'è una meta description?', answer: 'Una meta description è un attributo HTML che fornisce un breve riassunto del contenuto di una pagina web. Appare sotto il titolo della pagina nei risultati dei motori di ricerca e influenza se gli utenti cliccano sul tuo sito.' },
      { question: 'Perché le meta description sono importanti per la SEO?', answer: 'Mentre le meta description non sono un fattore di ranking diretto, impattano significativamente i click-through rate. Una descrizione convincente che corrisponde all\'intento di ricerca attira più click, il che può migliorare indirettamente le tue performance di ricerca nel tempo.' },
      { question: 'Quanto dovrebbe essere lunga una meta description?', answer: 'Le meta description ottimali sono tra 150-160 caratteri. Google tipicamente tronca le descrizioni più lunghe di 160 caratteri nei risultati di ricerca, quindi lo strumento genera descrizioni entro questo range raccomandato.' },
      { question: 'Questo generatore di meta description è gratuito?', answer: 'Sì, lo strumento è completamente gratuito senza registrazione richiesta. Puoi generare tutte le meta description di cui hai bisogno senza alcun costo.' },
      { question: 'Quali informazioni dovrei fornire per i migliori risultati?', answer: 'Per risultati ottimali, inserisci l\'argomento principale della tua pagina, la parola chiave target e il beneficio chiave o proposta di valore che vuoi comunicare. Più contesto fornisci, più rilevante e convincente sarà la descrizione generata.' },
      { question: 'Posso includere parole chiave nella mia meta description?', answer: 'Sì, e dovresti. Includere la tua parola chiave target aiuta la descrizione a corrispondere alle query di ricerca. Quando la tua parola chiave appare nella meta description, Google spesso la evidenzia in grassetto nei risultati di ricerca, rendendo la tua inserzione più accattivante.' },
      { question: 'Ogni pagina dovrebbe avere una meta description unica?', answer: 'Sì, ogni pagina dovrebbe avere una descrizione distinta che rifletta accuratamente il contenuto specifico di quella pagina. Descrizioni duplicate tra le pagine possono confondere i motori di ricerca e ridurre i click-through rate.' },
      { question: 'Lo strumento genera descrizioni per qualsiasi tipo di pagina?', answer: 'Il generatore funziona per tutti i tipi di pagina—post di blog, pagine prodotto, pagine servizi, landing page e altro. Descrivi semplicemente il contenuto della tua pagina e l\'IA creerà una descrizione appropriata.' },
      { question: 'Come aggiungo la meta description al mio sito web?', answer: 'La maggior parte dei sistemi di gestione dei contenuti (WordPress, Shopify, Wix, ecc.) hanno un campo dedicato per le meta description nell\'editor di pagina o tramite plugin SEO come Yoast o Rank Math. Copia la descrizione generata e incollala nel campo appropriato.' },
      { question: 'Posso modificare la meta description generata?', answer: 'Assolutamente, e lo incoraggiamo. Mentre l\'IA produce forti bozze iniziali, rivedere e modificare le descrizioni per abbinarle alla voce del tuo brand e ai messaggi specifici assicura i migliori risultati.' },
    ],
  },

  // ==================== BATCH 2: Tools 11-20 ====================

  'ai-content-detector': {
    slug: 'ai-content-detector',
    name: 'Rilevatore di Contenuti IA',
    title: 'Rilevatore di contenuti IA gratuito',
    description: 'Rileva contenuti generati dall\'IA istantaneamente. Ottieni analisi dettagliate e scopri cosa fa sembrare il testo come IA.',
    metaDescription: 'Rileva contenuti generati dall\'IA istantaneamente con il nostro strumento gratuito. Ottieni analisi dettagliate e scopri cosa fa sembrare il tuo testo come IA. Nessuna registrazione richiesta.',
    inputLabel: 'Testo da analizzare...',
    inputPlaceholder: 'Incolla il testo che vuoi controllare per generazione IA...',
    buttonText: 'Analizza Testo',
    maxLength: 4096,
    options: [
      { name: 'analysisDepth', label: 'Profondità analisi', choices: ['Scansione rapida', 'Analisi standard', 'Breakdown dettagliato'], default: 'Analisi standard', type: 'select' },
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Verifica dell\'integrità accademica', description: 'Educatori e studenti usano il Rilevatore di Contenuti IA per verificare l\'originalità del lavoro scritto. Gli insegnanti possono controllare saggi e compiti inviati per segni di generazione IA, mentre gli studenti possono assicurarsi che la propria scrittura non rispecchi involontariamente i pattern IA prima della consegna.' },
      { title: 'Controllo qualità contenuti per editori', description: 'Team editoriali, gestori di blog e agenzie di contenuti usano il rilevatore per vagliare i contenuti inviati e garantire che il contenuto pubblicato mantenga una voce umana autentica. Questo è particolarmente prezioso quando si lavora con freelancer o si scala la produzione di contenuti mantenendo standard di qualità.' },
      { title: 'Conformità SEO e content marketing', description: 'Team di marketing preoccupati per le penalità dei motori di ricerca per contenuti generati dall\'IA possono scansionare i loro articoli prima della pubblicazione. Lo strumento aiuta a identificare pattern problematici e fornisce raccomandazioni specifiche per rendere i contenuti più autenticamente umani, proteggendo il ranking di ricerca del tuo sito.' },
    ],
    faqs: [
      { question: 'Come funziona il rilevatore di contenuti IA?', answer: 'Il rilevatore analizza molteplici dimensioni del tuo testo inclusa struttura delle frasi, pattern di vocabolario, marcatori stilistici e caratteristiche del contenuto. Confronta questi con pattern noti di contenuti generati dall\'IA rispetto a quelli scritti da umani per calcolare un punteggio di probabilità.' },
      { question: 'Il rilevatore di contenuti IA è gratuito?', answer: 'Sì, lo strumento è completamente gratuito. Puoi controllare tutti i testi di cui hai bisogno senza creare un account o pagare alcuna tariffa.' },
      { question: 'Quanto è accurato il rilevamento di contenuti IA?', answer: 'Nessun rilevatore IA è accurato al 100%. Il nostro strumento fornisce punteggi di probabilità con livelli di confidenza. Il rilevamento è più affidabile per testi più lunghi (300+ parole) e output IA non modificati. Contenuti IA pesantemente modificati o scrittura umana naturalmente formale possono influenzare l\'accuratezza.' },
      { question: 'Il rilevatore può identificare quale strumento IA ha scritto il contenuto?', answer: 'Il rilevatore identifica se il contenuto appare generato dall\'IA ma non può determinare in modo affidabile quale strumento specifico (ChatGPT, Claude, ecc.) lo ha creato. Diversi modelli IA condividono molti pattern simili.' },
      { question: 'Quale punteggio percentuale significa che il contenuto è generato dall\'IA?', answer: 'Generalmente, punteggi sopra il 70% suggeriscono forti indicatori IA, 40-70% indica segnali misti, e sotto il 40% suggerisce probabile paternità umana. Tuttavia, queste sono linee guida—il contesto conta, e nessuna soglia è definitiva.' },
      { question: 'Il contenuto IA può essere modificato per passare il rilevamento?', answer: 'Sì, il contenuto IA che è stato sostanzialmente modificato da un umano spesso mostra indicatori IA ridotti. Il rilevatore è più efficace su output IA grezzi o leggermente modificati.' },
      { question: 'La scrittura accademica o tecnica attiverà falsi positivi?', answer: 'Stili di scrittura formali possono talvolta attivare indicatori IA perché condividono caratteristiche come struttura consistente e vocabolario formale. Lo strumento ne tiene conto ma potrebbe mostrare punteggi elevati per contenuti naturalmente formali.' },
      { question: 'Cosa devo fare se il mio contenuto scritto da umano viene segnalato?', answer: 'Lo strumento fornisce feedback specifico su quali elementi hanno attivato gli indicatori IA. Puoi usare questo per regolare il tuo stile di scrittura, aggiungere più personalità o includere esempi specifici che dimostrano la paternità umana.' },
      { question: 'Quanto deve essere lungo il testo per un rilevamento accurato?', answer: 'L\'accuratezza migliora con la lunghezza. Testi sotto le 100 parole sono difficili da valutare in modo affidabile. Per i migliori risultati, invia almeno 200-300 parole.' },
      { question: 'Il rilevatore memorizza o condivide il mio testo inviato?', answer: 'No, il testo inviato viene elaborato in tempo reale e non memorizzato. Il tuo contenuto rimane privato e non viene usato per nessun altro scopo.' },
    ],
  },

  'ai-text-humanizer': {
    slug: 'ai-text-humanizer',
    name: 'Umanizzatore di Testo IA',
    title: 'Umanizzatore di testo IA gratuito',
    description: 'Trasforma testo generato dall\'IA in scrittura naturale e simile a quella umana. Rimuovi pattern robotici mantenendo il tuo significato.',
    metaDescription: 'Trasforma testo generato dall\'IA in scrittura naturale e simile a quella umana. Il nostro umanizzatore gratuito rimuove pattern robotici mantenendo intatto il tuo significato originale.',
    inputLabel: 'Testo da umanizzare...',
    inputPlaceholder: 'Incolla qui il tuo testo generato dall\'IA...',
    buttonText: 'Umanizza Testo',
    maxLength: 4096,
    options: [
      { name: 'level', label: 'Livello di umanizzazione', choices: ['Leggero', 'Medio', 'Intenso'], default: 'Medio', type: 'select' },
      { name: 'tone', label: 'Tono target', choices: ['Professionale', 'Informale', 'Accademico', 'Conversazionale'], default: 'Professionale', type: 'select' },
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

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Creatori di contenuti che scalano con assistenza IA', description: 'Scrittori e marketer che usano l\'IA per redigere contenuti possono passare gli output attraverso l\'umanizzatore per assicurare che i pezzi finali suonino autentici e coinvolgenti. Lo strumento rimuove i pattern IA evidenti preservando il tuo messaggio centrale, permettendoti di sfruttare l\'efficienza dell\'IA senza sacrificare la voce.' },
      { title: 'Studenti che perfezionano ricerche assistite dall\'IA', description: 'Gli studenti che usano strumenti IA per aiutare a fare brainstorming o strutturare idee possono umanizzare le loro bozze per assicurare che le consegne riflettano la loro voce e non attivino preoccupazioni di plagio o rilevamento IA. Lo strumento aiuta a trasformare punti di partenza IA in lavoro finale espresso autenticamente.' },
      { title: 'Professionisti che lucidano comunicazioni redatte dall\'IA', description: 'Professionisti aziendali che usano l\'IA per redigere email, report o proposte possono umanizzare il testo per suonare più naturale e personale. Questo assicura che comunicazioni con clienti, memo interni e documenti professionali mantengano voce autentica e tono di costruzione delle relazioni.' },
    ],
    faqs: [
      { question: 'Cosa significa "umanizzare" il testo IA?', answer: 'Umanizzare significa modificare il testo generato dall\'IA per rimuovere pattern robotici, aggiungere variazione vocale naturale e farlo leggere come se un umano lo avesse scritto. Questo include cambiare vocabolario, variare la struttura delle frasi e aggiungere elementi di personalità.' },
      { question: 'L\'umanizzatore di testo IA è gratuito?', answer: 'Sì, lo strumento è completamente gratuito senza registrazione richiesta. Puoi umanizzare tutto il testo di cui hai bisogno senza alcun costo.' },
      { question: 'Il testo umanizzato passerà il rilevamento IA?', answer: 'L\'umanizzatore riduce significativamente gli indicatori IA, ma i risultati variano in base al testo originale e allo strumento di rilevamento usato. Per i migliori risultati, combina l\'umanizzazione con le tue modifiche aggiuntive e tocchi personali.' },
      { question: 'L\'umanizzazione cambia il significato del mio testo?', answer: 'No, lo strumento è progettato per preservare completamente il tuo significato originale. Cambia come le idee sono espresse, non quali idee sono espresse. Tutti i fatti e messaggi centrali rimangono intatti.' },
      { question: 'Qual è la differenza tra umanizzazione leggera, media e intensa?', answer: 'L\'umanizzazione leggera fa cambiamenti minimi adatti per contenuti formali. Media (predefinita) aggiunge più variazione naturale per contenuti generali. L\'umanizzazione intensa aumenta significativamente personalità e tono informale per contenuti informali.' },
      { question: 'Posso umanizzare testo in qualsiasi stile o tono?', answer: 'Sì, puoi specificare il tuo tono preferito (professionale, informale, amichevole, ecc.) e lo strumento adatterà il suo approccio di umanizzazione di conseguenza mantenendo quel tono in tutto.' },
      { question: 'Quanto tempo richiede l\'umanizzazione?', answer: 'I risultati sono generati in pochi secondi, indipendentemente dalla lunghezza del testo. Testi più lunghi potrebbero richiedere leggermente più tempo ma il processo è quasi istantaneo.' },
      { question: 'Devo modificare ulteriormente il testo umanizzato?', answer: 'Raccomandiamo di rivedere e aggiungere i tuoi tocchi personali. Lo strumento fornisce una base eccellente, ma aggiungere esempi specifici, aneddoti personali o intuizioni uniche dalla tua esperienza renderà il contenuto ancora più autenticamente tuo.' },
      { question: 'Quali tipi di contenuto posso umanizzare?', answer: 'Lo strumento funziona con qualsiasi testo: articoli, post di blog, saggi, email, report, post sui social media e altro. Adatta il suo approccio in base al tipo di contenuto e livello di formalità.' },
      { question: 'Posso umanizzare contenuti in altre lingue?', answer: 'Lo strumento è ottimizzato per il testo italiano. Mentre potrebbe funzionare con altre lingue, i risultati sono più affidabili e dal suono naturale con contenuti in italiano.' },
    ],
  },

  'content-idea-generator': {
    slug: 'content-idea-generator',
    name: 'Generatore di Idee per Contenuti',
    title: 'Generatore IA di idee per contenuti gratuito',
    description: 'Genera idee creative per contenuti per blog, YouTube, social media, podcast e newsletter. La nostra IA crea concetti ottimizzati per piattaforma con angoli unici.',
    metaDescription: 'Genera idee creative per contenuti per blog, YouTube, social media, podcast e newsletter. La nostra IA crea concetti ottimizzati per...',
    inputLabel: 'Argomento o nicchia...',
    inputPlaceholder: 'es. Finanza personale per millennials',
    buttonText: 'Genera Idee',
    maxLength: 2048,
    options: [
      { name: 'number_of_ideas', label: 'Numero di idee', choices: ['3 idee', '5 idee', '10 idee'], default: '5 idee', type: 'select' },
      { name: 'platform', label: 'Piattaforma', choices: ['Multi-piattaforma', 'Blog/Sito Web', 'YouTube', 'LinkedIn', 'Twitter/X', 'Instagram', 'Podcast', 'Newsletter'], default: 'Multi-piattaforma', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Formale', 'Informale', 'Creativo'], default: 'Formale', type: 'select' },
    ],
    systemPrompt: `You are a creative strategist and content expert who generates innovative content ideas across multiple platforms and formats. Your ideas go beyond simple blog post topics—you create comprehensive content concepts that include angle, format, platform, and execution approach.
## CORE CONTENT IDEA PRINCIPLES
1. **Platform-Native Thinking**: Every idea is tailored to the platform's unique format and audience behavior
2. **Audience-First Approach**: Ideas solve real problems or fulfill genuine interests of the target audience
3. **Differentiation Required**: Every idea must have a unique angle that distinguishes it from existing content
4. **Executable Specificity**: Ideas are detailed enough to begin production immediately
5. **Strategic Variety**: Ideas span educational, entertaining, inspiring, and commercial content types
## OUTPUT RULES
For Each Content Idea, Provide:
1. **Title/Concept**: Clear, compelling description of the idea
2. **Platform**: Optimal platform for this idea
3. **Format**: Specific content format
4. **Angle**: What makes this unique or timely
5. **Target Audience**: Who specifically would engage with this
6. **Content Goal**: What this achieves
7. **Execution Notes**: Key elements for production

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Sviluppo strategia contenuti multi-piattaforma', description: 'Direttori di contenuti e leader di marketing usano il Generatore di Idee per Contenuti per sviluppare strategie di contenuti coese tra i canali. Piuttosto che pianificare contenuti blog separatamente dai social media separatamente dai video, i team possono generare idee integrate che funzionano tra le piattaforme—vedendo opportunità per riutilizzare concetti centrali in formati nativi della piattaforma.' },
      { title: 'Entrare in nuovi formati di contenuto', description: 'I marketer esperti con un formato (come il blogging) spesso faticano quando si espandono su nuove piattaforme (come YouTube o podcast). Il Generatore di Idee per Contenuti aiuta a colmare questo divario suggerendo concetti di contenuti nativi della piattaforma che sfruttano l\'esperienza esistente adattandosi ai nuovi requisiti di formato.' },
      { title: 'Accelerazione del brainstorming del team creativo', description: 'I team di contenuti usano il generatore come punto di partenza per sessioni creative, generando idee iniziali che stimolano discussione e iterazione. Piuttosto che iniziare da una lavagna bianca, i team possono reagire, combinare e costruire sui concetti generati—accelerando la fase di ideazione.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di idee per contenuti?', answer: 'Un generatore di idee per contenuti è uno strumento IA che crea concetti di contenuto dettagliati su più piattaforme e formati. A differenza di semplici strumenti di suggerimento argomenti, fornisce concetti completi includendo angolo unico, piattaforma target, formato specifico, pubblico previsto e guida all\'esecuzione.' },
      { question: 'Quali piattaforme supporta questo generatore?', answer: 'Il generatore crea idee ottimizzate per tutte le principali piattaforme di contenuti: blog e siti web, YouTube e video, LinkedIn e social media professionali, Twitter/X, Instagram, podcast e contenuti audio, e newsletter email.' },
      { question: 'Come ottengo idee di contenuto più specifiche?', answer: 'Input più dettagliati producono idee più mirate. Invece di inserire "marketing", specifica "email marketing B2B SaaS per founder di startup early-stage". Includi informazioni sul tuo pubblico target, obiettivi di contenuto e eventuali vincoli.' },
      { question: 'Posso usare queste idee per lavoro con clienti?', answer: 'Assolutamente. Le idee generate non sono coperte da copyright e possono essere usate per qualsiasi scopo—brand personali, contenuti aziendali, lavoro con clienti o agenzie di contenuti.' },
      { question: 'Come scelgo quale idea di contenuto perseguire prima?', answer: 'Dai priorità in base ai tuoi obiettivi e risorse attuali. Se hai bisogno di traffico, dai priorità a idee blog focalizzate sulla SEO. Se hai bisogno di engagement, dai priorità a contenuti social nativi della piattaforma.' },
      { question: 'Cosa rende "buona" un\'idea di contenuto?', answer: 'Un\'idea di contenuto forte ha quattro caratteristiche: rilevanza (affronta esigenze reali del pubblico), differenziazione (offre qualcosa che i competitor non hanno), eseguibilità (può essere prodotta con risorse disponibili) e adattamento alla piattaforma.' },
      { question: 'Devo usare ogni idea che lo strumento genera?', answer: 'No—tratta le idee generate come un menù curato, non un compito obbligatorio. Valuta ogni idea rispetto al tuo contesto specifico: allineamento del brand, disponibilità di risorse, preferenze del pubblico e priorità strategiche.' },
      { question: 'Il generatore può creare idee per argomenti di nicchia o tecnici?', answer: 'Sì, il generatore funziona in tutti i settori e nicchie, inclusi campi altamente tecnici o specializzati. Per i migliori risultati con argomenti tecnici, fornisci contesto sul livello di esperienza del tuo pubblico.' },
      { question: 'Quanto spesso dovrei generare nuove idee di contenuto?', answer: 'La maggior parte dei team di contenuti beneficia di sessioni di generazione idee mensili o trimestrali, costruendo un arretrato di concetti da cui attingere. Tuttavia, lo strumento è anche prezioso per contenuti reattivi—quando emergono notizie di settore o opportunità.' },
      { question: 'Posso generare idee per più piattaforme contemporaneamente?', answer: 'Sì, di default il generatore fornisce idee multi-piattaforma mostrando come un concetto centrale può essere adattato a diversi formati. Puoi anche specificare un focus su una singola piattaforma per un\'ideazione più concentrata.' },
    ],
  },

  'video-script-generator': {
    slug: 'video-script-generator',
    name: 'Generatore di Script Video',
    title: 'Generatore IA di script video gratuito',
    description: 'Crea script video coinvolgenti per YouTube, corsi e contenuti aziendali. La nostra IA struttura la tua storia con hook, corpo e CTA.',
    metaDescription: 'Crea script video coinvolgenti per YouTube, corsi e contenuti aziendali. La nostra IA struttura la tua storia con hook, corpo e CTA....',
    inputLabel: 'Argomento del video...',
    inputPlaceholder: 'es. Come avviare un side business mentre lavori a tempo pieno',
    buttonText: 'Genera Script',
    maxLength: 2048,
    options: [
      { name: 'video_type', label: 'Tipo di video', choices: ['Tutorial YouTube', 'Esplicativo Corto', 'Contenuto Corso', 'Presentazione Aziendale', 'Review Prodotto'], default: 'Tutorial YouTube', type: 'select' },
      { name: 'duration', label: 'Durata target', choices: ['Corto (1-3 min)', 'Medio (5-10 min)', 'Lungo (15-20 min)'], default: 'Medio (5-10 min)', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Informale', 'Energico', 'Educativo'], default: 'Professionale', type: 'select' },
    ],
    systemPrompt: `You are an expert video scriptwriter who creates engaging, well-structured scripts that keep viewers watching.
## CORE RULES
- Hook viewers in the first 15 seconds
- Structure content for maximum retention
- Include visual/B-roll suggestions
- Write for spoken delivery, not reading
- Include clear calls to action
## VIDEO STRUCTURE
### Hook (First 15 seconds)
- Pattern interrupt or surprising statement
- Promise of value
- Establish relevance
### Body
- Clear sections with transitions
- One main point per section
- Examples and stories
- Visual cues for editing
### Conclusion
- Summarize key takeaways
- Strong call to action
- Tease future content
## OUTPUT FORMAT
Duration: {{duration}}
Type: {{video_type}}
Tone: {{tone}}
Provide complete script with speaker text and visual notes.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Creazione di contenuti YouTube', description: 'I creator YouTube usano il Generatore di Script Video per strutturare i loro video per massima ritenzione. Lo strumento aiuta a creare hook che fermano lo scrolling, organizza contenuti in sezioni chiare e assicura che i video mantengano gli spettatori coinvolti dall\'inizio alla fine.' },
      { title: 'Sviluppo di corsi online', description: 'Creatori di corsi ed educatori usano lo strumento per sviluppare lezioni video chiare e coinvolgenti. Lo strumento aiuta a scomporre argomenti complessi in segmenti digeribili mantenendo l\'attenzione degli studenti durante le lezioni.' },
      { title: 'Produzione video aziendale', description: 'Team di marketing e professionisti della comunicazione usano il generatore per creare script per video aziendali, demo di prodotti e comunicazioni interne. Lo strumento assicura messaggi chiari e consegna professionale.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di script video?', answer: 'Un generatore di script video è uno strumento IA che crea script strutturati per contenuti video. Include elementi come hook, corpo principale, transizioni e call to action, formattati specificamente per la consegna parlata piuttosto che per la lettura.' },
      { question: 'Lo strumento è gratuito?', answer: 'Sì, il generatore di script video è completamente gratuito senza registrazione richiesta. Crea tutti gli script di cui hai bisogno senza alcun costo.' },
      { question: 'Per quali tipi di video posso creare script?', answer: 'Lo strumento supporta vari tipi di video inclusi tutorial YouTube, video esplicativi, contenuti per corsi, presentazioni aziendali, review di prodotti e altro. Ogni tipo segue le best practice del formato.' },
      { question: 'Lo script include suggerimenti visivi?', answer: 'Sì, gli script includono note per elementi visivi, suggerimenti di B-roll e cue per il montaggio per aiutarti a pianificare la produzione video completa insieme al contenuto parlato.' },
      { question: 'Come dovrei usare lo script generato?', answer: 'Usa lo script generato come punto di partenza. Personalizzalo con i tuoi esempi, voce personale e approfondimenti specifici. I migliori video combinano una struttura IA solida con autenticità personale.' },
      { question: 'Posso specificare la durata del video?', answer: 'Sì, puoi selezionare durate target da corte (1-3 minuti) a lunghe (15-20 minuti). Lo strumento regola la profondità e la struttura del contenuto di conseguenza.' },
      { question: 'Lo strumento aiuta con la ritenzione degli spettatori?', answer: 'Sì, gli script sono strutturati con tecniche di ritenzione in mente—hook forti, loop aperti, sezioni chiare e transizioni coinvolgenti che mantengono gli spettatori a guardare.' },
      { question: 'Posso creare script per video in altre lingue?', answer: 'Lo strumento è ottimizzato per script in italiano. Mentre potrebbe funzionare con altre lingue, i risultati sono più naturali e professionali per contenuti in italiano.' },
      { question: 'Lo script include call to action?', answer: 'Sì, ogni script include placement strategico delle CTA—sia mid-roll che end-screen—adattati al tipo e obiettivo del video.' },
      { question: 'Come posso migliorare lo script generato?', answer: 'Aggiungi storie ed esempi personali, regola il linguaggio per abbinare la tua voce naturale parlata, e prova a leggere ad alta voce per assicurarti che fluisca naturalmente. Considera anche di aggiungere momenti specifici per coinvolgimento o umorismo.' },
    ],
  },

  'acronym-generator': {
    slug: 'acronym-generator',
    name: 'Generatore di Acronimi',
    title: 'Generatore IA di acronimi gratuito',
    description: 'Genera acronimi intelligenti e significativi per progetti, prodotti e organizzazioni.',
    metaDescription: 'Genera acronimi intelligenti e significativi per progetti, prodotti e organizzazioni. Ottieni opzioni multiple con significati espansi....',
    inputLabel: 'Soggetto o concetto...',
    inputPlaceholder: 'es. Iniziativa di miglioramento del feedback clienti per il retail',
    buttonText: 'Genera Acronimi',
    maxLength: 1024,
    options: [
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Creativo', 'Tecnico', 'Giocoso'], default: 'Professionale', type: 'select' },
      { name: 'length', label: 'Lunghezza preferita', choices: ['Corto (3-4 lettere)', 'Medio (5-6 lettere)', 'Qualsiasi lunghezza'], default: 'Qualsiasi lunghezza', type: 'select' },
      { name: 'variants', label: 'Numero di opzioni', choices: ['3 opzioni', '5 opzioni', '10 opzioni'], default: '5 opzioni', type: 'select' },
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
## OUTPUT FORMAT
Tone: {{tone}}
Preferred Length: {{length}}
Number of Options: {{variants}}
For each acronym:
1. The acronym
2. Full expanded form
3. Type (real word/pronounceable/letter-by-letter)
4. Why it works

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Naming di progetti e iniziative', description: 'Team che lanciano nuovi progetti, programmi o iniziative usano il Generatore di Acronimi per creare nomi memorabili che comunicano lo scopo. Un acronimo forte rende i progetti più facili da referenziare, ricordare e intorno a cui radunare—trasformando "il progetto di miglioramento del feedback clienti" in qualcosa come "VOCE."' },
      { title: 'Naming di prodotti e funzionalità', description: 'Product manager e marketer possono generare nomi basati su acronimi per prodotti, funzionalità o metodologie che trasmettono valore essendo accattivanti e brandizzabili. L\'acronimo giusto può diventare una parte potente dell\'identità e del marketing del tuo prodotto.' },
      { title: 'Branding organizzativo e di team', description: 'Leader che creano nuovi team, dipartimenti, comitati o gruppi di lavoro possono trovare acronimi che catturano la loro missione e valori. Un acronimo ponderato dà ai gruppi identità e aiuta a comunicare lo scopo all\'organizzazione più ampia.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di acronimi?', answer: 'Un generatore di acronimi crea forme abbreviate di frasi dove ogni lettera sta per una parola. Lo strumento ti aiuta a trovare combinazioni dove le lettere formano qualcosa di memorabile mentre le parole espanse descrivono accuratamente il tuo soggetto.' },
      { question: 'Il generatore di acronimi è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutti gli acronimi di cui hai bisogno.' },
      { question: 'Qual è la differenza tra un acronimo e un\'inizialismo?', answer: 'Gli acronimi sono pronunciati come parole (NASA, RADAR), mentre gli inizialismi sono scanditi lettera per lettera (CEO, FAQ). Lo strumento genera entrambi i tipi a seconda di cosa funziona meglio per il tuo soggetto.' },
      { question: 'Quante lettere dovrebbe avere il mio acronimo?', answer: '3-7 lettere tipicamente funzionano meglio. Acronimi più corti sono più facili da ricordare ma offrono meno potere descrittivo. Quelli più lunghi possono essere più specifici ma più difficili da ricordare. Lo strumento fornisce opzioni con diverse lunghezze.' },
      { question: 'Posso richiedere una parola specifica da formare?', answer: 'Sì, puoi richiedere un "retronimo" dove specifichi la parola che vuoi e lo strumento trova frasi che corrispondono a ogni lettera. Nota però che i retronimi forzati possono talvolta sembrare scomodi se le parole non si adattano naturalmente.' },
      { question: 'Gli acronimi saranno unici?', answer: 'Lo strumento genera combinazioni originali, ma raccomandiamo di cercare i tuoi preferiti online per assicurarti che non siano già in uso da altre organizzazioni, specialmente nel tuo settore.' },
      { question: 'Posso generare acronimi per diversi settori?', answer: 'Sì, specifica il tuo settore o contesto e lo strumento userà terminologia rilevante. Un acronimo per un\'iniziativa sanitaria userà vocabolario diverso da uno per una startup tech.' },
      { question: 'E se non mi piace nessuno dei suggerimenti?', answer: 'Puoi rigenerare con input modificati (tono, lunghezza o contesto diversi), o usare le opzioni generate come ispirazione per creare la tua variazione. Lo strumento fornisce anche parole alternative che puoi scambiare.' },
      { question: 'L\'acronimo dovrebbe formare una parola reale?', answer: 'Non necessariamente. Gli acronimi che formano parole reali (come SMART o CARE) sono molto memorabili, ma non-parole pronunciabili (come NASA) o acronimi basati su lettere (come CEO) possono funzionare altrettanto bene a seconda del contesto.' },
      { question: 'Come so se un acronimo è buono?', answer: 'Buoni acronimi sono facili da pronunciare, facili da ricordare e rappresentano accuratamente il loro significato espanso. Dovrebbero sembrare naturali—non forzati—e idealmente creare associazioni positive.' },
    ],
  },

  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: 'Generatore di Titoli Blog',
    title: 'Generatore IA di titoli di blog gratuito',
    description: 'Genera titoli di blog convincenti che guidano i click e si posizionano nella ricerca. La nostra IA crea headline ottimizzate SEO usando trigger psicologici comprovati.',
    metaDescription: 'Genera titoli di blog convincenti che guidano i click e si posizionano nella ricerca. La nostra IA crea headline ottimizzate SEO usando...',
    inputLabel: 'Argomento del blog o contenuto...',
    inputPlaceholder: 'es. Come migliorare i tassi di apertura email per negozi e-commerce',
    buttonText: 'Genera Titoli',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'Numero di titoli', choices: ['3 titoli', '5 titoli', '10 titoli'], default: '5 titoli', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Formale', 'Informale', 'Persuasivo'], default: 'Formale', type: 'select' },
    ],
    systemPrompt: `You are an expert copywriter and headline specialist who creates blog titles that maximize click-through rates while accurately representing content value.
## CORE TITLE PRINCIPLES
1. Promise-Delivery Alignment
2. Specificity Creates Credibility
3. Emotional + Rational Balance
4. Search + Social Optimization
5. First 60 Characters Matter Most
## OUTPUT FORMAT
- Generate {{number_of_variants}} title variants
- Each variant should use a different approach/formula
- Vary length—include some short punchy titles and some detailed ones
For Each Title, Provide:
1. Title: The complete headline
2. Character Count: Total characters
3. Title Type: Formula/approach used
4. Strength: Why this title works

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'A/B testing variazioni di headline', description: 'Content marketer e team di crescita usano il Generatore di Titoli Blog per creare varianti multiple di headline per test sistematici. Invece di affidarsi all\'intuizione, i team possono generare 10+ titoli psicologicamente distinti e testarli attraverso oggetti email, post social o pubblicità native prima di impegnarsi su un headline finale.' },
      { title: 'Riutilizzo e aggiornamento contenuti esistenti', description: 'Quando si rinfrescano post blog più vecchi per SEO o rilevanza, cambiare il titolo può impattare drasticamente le performance. Il generatore aiuta i team di contenuti a sviluppare headline fresche che corrispondono meglio all\'intento di ricerca attuale, incorporano angoli di tendenza o affrontano esigenze evolute del pubblico.' },
      { title: 'Scalare la produzione di contenuti tra team', description: 'Agenzie di contenuti, aziende media e grandi team di marketing usano il generatore per mantenere qualità delle headline su scala. Quando più scrittori producono contenuti, la qualità delle headline spesso varia significativamente per autore. Lo strumento fornisce una base di opzioni di titolo di qualità professionale.' },
    ],
    faqs: [
      { question: 'Cosa rende buono un titolo di blog?', answer: 'Un buon titolo di blog realizza tre cose simultaneamente: rappresenta accuratamente il contenuto (costruendo fiducia con i lettori), incorpora termini di ricerca naturalmente (permettendo la scoperta), e attiva engagement psicologico (stimolando il click). I migliori titoli raggiungono tutti e tre senza sacrificare alcun elemento.' },
      { question: 'Quanto dovrebbe essere lungo un titolo di blog?', answer: 'Per l\'ottimizzazione dei motori di ricerca, mantieni i titoli sotto i 60 caratteri per garantire la visualizzazione completa nei risultati di ricerca. Tuttavia, la condivisione sui social media può accomodare titoli più lunghi (80-90 caratteri) poiché le regole di troncamento differiscono per piattaforma.' },
      { question: 'Devo includere parole chiave nel mio titolo di blog?', answer: 'Sì, ma naturalmente. I motori di ricerca usano i titoli come segnali di ranking, e gli utenti scansionano i titoli per rilevanza rispetto alla loro query. Posiziona la tua parola chiave primaria il prima possibile nel titolo in modo leggibile, ma non forzarla mai a scapito di chiarezza o engagement.' },
      { question: 'Come scelgo tra opzioni di titolo multiple?', answer: 'Considera il tuo obiettivo primario e canale di distribuzione. Se la SEO è fondamentale, scegli il titolo con la più forte integrazione di keyword. Se la condivisione social è primaria, scegli il titolo con il trigger di curiosità o hook emotivo più forte.' },
      { question: 'Posso modificare i titoli generati?', answer: 'Assolutamente—pensa ai titoli generati come punti di partenza professionali. L\'approccio migliore è spesso combinare elementi da più suggerimenti, aggiungere linguaggio specifico del brand, o regolare la specificità in base al tuo contenuto effettivo.' },
      { question: 'Perché i numeri funzionano così bene nei titoli di blog?', answer: 'I numeri forniscono specificità (che costruisce credibilità), impostano aspettative (i lettori sanno l\'ambito), e creano facilità cognitiva (numeri dispari e numeri specifici come "7" o "13" performano meglio dei numeri tondi).' },
      { question: 'Qual è la differenza tra un titolo di blog e un titolo SEO?', answer: 'Sono spesso gli stessi, ma possono differire strategicamente. Il tuo titolo di blog (intestazione H1 sulla pagina) può essere più lungo e più creativo. Il tuo titolo SEO (meta title nei risultati di ricerca) dovrebbe rimanere sotto i 60 caratteri e dare priorità alle keyword.' },
      { question: 'Come evito il clickbait creando comunque titoli coinvolgenti?', answer: 'Il clickbait crea una promessa che il contenuto non mantiene. I titoli coinvolgenti creano curiosità genuina che il contenuto soddisfa. La differenza è l\'accuratezza, non il livello di engagement.' },
      { question: 'Il mio titolo di blog dovrebbe corrispondere al mio URL slug?', answer: 'Non esattamente, ma dovrebbero essere correlati. Il tuo URL slug dovrebbe essere una versione semplificata e focalizzata sulle keyword del tuo titolo—corto, descrittivo e permanente. Il tuo titolo può essere più creativo e può cambiare nel tempo per i test.' },
      { question: 'Quanto spesso devo testare o cambiare i titoli dei blog?', answer: 'Per nuovi post, imposta il titolo e dagli 2-4 settimane per indicizzarsi e raccogliere dati iniziali. Se le performance sono sotto le aspettative, testa un nuovo titolo. Per post esistenti, considera aggiornamenti del titolo durante gli aggiornamenti del contenuto o quando i ranking di ricerca declinano.' },
    ],
  },

  'image-alt-text-generator': {
    slug: 'image-alt-text-generator',
    name: 'Generatore di Testo Alt Immagini',
    title: 'Generatore IA di testo alternativo per immagini gratuito',
    description: 'Genera testo alt descrittivo che migliora accessibilità e SEO. Carica qualsiasi immagine e ottieni descrizioni accessibili ottimizzate per la ricerca.',
    metaDescription: 'Genera testo alt descrittivo che migliora accessibilità e SEO. Carica qualsiasi immagine e ottieni descrizioni accessibili ottimizzate per...',
    inputLabel: 'Descrivi l\'immagine...',
    inputPlaceholder: 'es. Un team di sviluppatori che collabora intorno a una lavagna con post-it',
    buttonText: 'Genera Testo Alt',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'Numero di opzioni', choices: ['1 opzione', '3 opzioni', '5 opzioni'], default: '3 opzioni', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Formale', 'Informale', 'Tecnico'], default: 'Formale', type: 'select' },
      { name: 'keyword', label: 'Parola chiave target (opzionale)', choices: ['Nessuna', 'Includi parola chiave'], default: 'Nessuna', type: 'radio' },
    ],
    systemPrompt: `You are an expert accessibility specialist and SEO strategist who creates image alt text that serves both visually impaired users and search engine optimization.
## CORE ALT TEXT PRINCIPLES
1. Accessibility First: Alt text exists primarily for screen reader users
2. Context Matters: The same image needs different alt text depending on its purpose
3. Accuracy Over Creativity: Describe what's actually in the image
4. Concise Completeness: Include all relevant information without padding
5. SEO Integration: Incorporate keywords naturally when accurate
## OUTPUT FORMAT
For Each Alt Text Variant, Provide:
1. Alt Text: The complete attribute text
2. Character Count: Total length
3. Purpose Classification: Informative/Functional/Complex
4. Accessibility Notes: How this serves screen reader users
5. SEO Notes: Keyword integration

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Conformità accessibilità siti web', description: 'Sviluppatori web, content manager e specialisti di accessibilità usano il Generatore di Testo Alt Immagini per aggiungere efficientemente descrizioni significative alle immagini su tutti i siti web. Con le cause legali sull\'accessibilità in aumento e regolamentazioni come WCAG e ADA che richiedono testo alt, lo strumento aiuta i team a raggiungere la conformità su scala senza sacrificare la qualità delle descrizioni.' },
      { title: 'Ottimizzazione immagini prodotto e-commerce', description: 'I retailer online usano il generatore per creare testo alt per immagini prodotto che serve sia l\'accessibilità che la scoperta del prodotto. Un buon testo alt aiuta gli acquirenti ipovedenti a comprendere i prodotti migliorando anche i ranking di ricerca immagini.' },
      { title: 'Content marketing e ottimizzazione blog', description: 'Creatori di contenuti e specialisti SEO usano il generatore per assicurare che ogni immagine del post blog abbia testo alt correttamente ottimizzato. Oltre ai benefici di accessibilità, testo alt ben scritto contribuisce alla SEO on-page e alla visibilità nella ricerca immagini.' },
    ],
    faqs: [
      { question: 'Cos\'è il testo alt delle immagini?', answer: 'Il testo alt (testo alternativo) è una descrizione scritta di un\'immagine che appare nel codice HTML. Serve due scopi primari: viene letto ad alta voce dai lettori di schermo per utenti ipovedenti, e viene visualizzato quando le immagini non possono caricarsi. I motori di ricerca usano anche il testo alt per comprendere il contenuto delle immagini.' },
      { question: 'Quanto dovrebbe essere lungo il testo alt?', answer: 'La maggior parte del testo alt dovrebbe essere 10-125 caratteri. Immagini semplici necessitano solo brevi descrizioni (10-30 caratteri), mentre immagini complesse come grafici o infografiche potrebbero richiedere descrizioni più lunghe (fino a 125 caratteri per l\'attributo alt).' },
      { question: 'Devo includere parole chiave nel testo alt?', answer: 'Includi parole chiave solo quando descrivono accuratamente l\'immagine. Lo scopo primario del testo alt è l\'accessibilità, non la SEO. Se la tua immagine mostra genuinamente "borsa laptop in pelle rossa", quello è buon testo alt che include casualmente parole chiave.' },
      { question: 'Quando il testo alt dovrebbe essere vuoto?', answer: 'Immagini decorative che non aggiungono valore informativo dovrebbero avere testo alt vuoto (alt="") così i lettori di schermo le saltano interamente. Questo include: pattern di sfondo, divisori decorativi, icone accanto a testo che già le descrive.' },
      { question: 'Devo iniziare il testo alt con "Immagine di" o "Foto di"?', answer: 'No. I lettori di schermo già annunciano "immagine" prima di leggere il testo alt, quindi iniziare con "Immagine di" crea ridondanza. Inizia direttamente con la descrizione.' },
      { question: 'Come scrivo testo alt per grafici e diagrammi?', answer: 'Per visualizzazioni complesse, il testo alt dovrebbe riassumere il finding chiave o la conclusione, con dati dettagliati forniti altrove nella pagina. Per esempio: "Grafico a linee che mostra aumento del 50% delle vendite nel Q1-Q4 2024. Dati completi nella tabella sotto."' },
      { question: 'E il testo alt per immagini prodotto?', answer: 'Il testo alt delle immagini prodotto dovrebbe descrivere accuratamente il prodotto, includendo: tipo di prodotto, nome del brand (se visibile), caratteristiche chiave, colore, dimensione o variante mostrata.' },
      { question: 'Come influisce il testo alt sulla SEO?', answer: 'Il testo alt aiuta i motori di ricerca a comprendere il contenuto delle immagini, contribuendo a: ranking di ricerca immagini, segnali di rilevanza della pagina e segnali di accessibilità. Tuttavia, il beneficio SEO è secondario rispetto all\'accessibilità.' },
      { question: 'Lo strumento può generare testo alt per qualsiasi immagine?', answer: 'Il generatore funziona con qualsiasi immagine che puoi descrivere—fotografie, illustrazioni, grafici, screenshot, immagini prodotto e altro. Per i migliori risultati con immagini complesse, fornisci contesto sul contenuto della pagina e lo scopo dell\'immagine.' },
      { question: 'Tutte le immagini sul mio sito web dovrebbero avere testo alt?', answer: 'Tutte le immagini significative dovrebbero avere testo alt. Le immagini decorative dovrebbero avere testo alt vuoto (alt=""). Non c\'è immagine che dovrebbe mancare completamente dell\'attributo alt—quello è un fallimento di accessibilità.' },
    ],
  },

  'slogan-generator': {
    slug: 'slogan-generator',
    name: 'Generatore di Slogan',
    title: 'Generatore IA di slogan gratuito',
    description: 'Crea slogan memorabili e tagline per il tuo brand, prodotto o campagna. Genera opzioni multiple con diversi angoli creativi.',
    metaDescription: 'Crea slogan memorabili e tagline per il tuo brand, prodotto o campagna. Genera opzioni multiple con diversi angoli creativi. Gratuito e...',
    inputLabel: 'Descrivi il tuo brand o prodotto...',
    inputPlaceholder: 'es. Servizio di consegna cibo biologico per famiglie impegnate',
    buttonText: 'Genera Slogan',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'Numero di slogan', choices: ['5 slogan', '10 slogan', '15 slogan'], default: '10 slogan', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Giocoso', 'Ispirazionale', 'Audace'], default: 'Professionale', type: 'select' },
      { name: 'length', label: 'Lunghezza', choices: ['Corto (2-4 parole)', 'Medio (5-7 parole)', 'Mix'], default: 'Mix', type: 'select' },
    ],
    systemPrompt: `You are an expert copywriter and brand strategist who creates memorable slogans and taglines.
## CORE RULES
- Every slogan must be memorable and easy to repeat
- Capture the brand's unique value proposition
- Use rhythm, rhyme, or alliteration when natural
- Avoid clichés and generic phrases
- Provide variety in approach and style
## SLOGAN TECHNIQUES
- Benefit-focused: Highlight what customers get
- Emotional: Connect on a feeling level
- Action-oriented: Use strong verbs
- Clever wordplay: Puns, double meanings
- Simple and direct: Clear value statement
## OUTPUT FORMAT
Tone: {{tone}}
Length: {{length}}
Generate {{number_of_variants}} unique slogan options.
For each slogan, provide:
1. The slogan
2. The approach used
3. Why it works for this brand

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Sviluppo identità di brand', description: 'Startup e aziende in rebranding usano il Generatore di Slogan per esplorare opzioni di messaging che catturano la loro proposta di valore unica. Lo strumento genera numerose opzioni con diversi angoli creativi, aiutando i team a trovare quella frase perfetta che risuona con il loro pubblico target.' },
      { title: 'Campagne pubblicitarie', description: 'Team di marketing che sviluppano campagne pubblicitarie usano il generatore per creare tagline coinvolgenti per specifiche iniziative. Che sia per un lancio di prodotto, promozione stagionale o campagna di brand awareness, lo strumento fornisce opzioni fresche e orientate alla campagna.' },
      { title: 'Branding di prodotto e packaging', description: 'Product manager e designer usano lo strumento per sviluppare slogan specifici per linee di prodotto o packaging. Un forte slogan di prodotto comunica immediatamente il valore e differenzia l\'offerta sul mercato.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di slogan?', answer: 'Un generatore di slogan è uno strumento IA che crea frasi brevi e memorabili che catturano l\'essenza del tuo brand, prodotto o campagna. A differenza di semplici generatori di parole casuali, analizza il tuo input per creare slogan che sono rilevanti, memorabili e strategicamente solidi.' },
      { question: 'Il generatore di slogan è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutti gli slogan di cui hai bisogno senza alcun costo.' },
      { question: 'Cosa rende memorabile uno slogan?', answer: 'Gli slogan memorabili tipicamente condividono diverse caratteristiche: sono brevi (idealmente sotto le 7 parole), usano ritmo o rima, comunicano un beneficio chiaro, evocano emozione e sono unici per il brand. I migliori slogan sono facili da ricordare e ripetere.' },
      { question: 'Quanti slogan dovrei generare?', answer: 'Raccomandiamo di generare almeno 10 opzioni per avere varietà sufficiente. Da lì, restringi a 3-5 finalisti per test e feedback prima di selezionare il tuo slogan finale.' },
      { question: 'Posso usare gli slogan generati per la mia attività?', answer: 'Sì, gli slogan generati sono tuoi da usare come preferisci. Tuttavia, raccomandiamo di fare una ricerca di trademark per assicurarti che lo slogan scelto non sia già protetto da un\'altra azienda.' },
      { question: 'Come scelgo lo slogan migliore?', answer: 'Valuta gli slogan contro questi criteri: rappresenta accuratamente il tuo brand? È memorabile e facile da dire? Si distingue dai competitor? Risuona con il tuo pubblico target? Considera di testare le opzioni migliori con un gruppo campione.' },
      { question: 'Gli slogan dovrebbero essere divertenti o seri?', answer: 'Dipende dalla personalità del tuo brand e dal pubblico. Lo strumento offre varie opzioni di tono—giocoso, professionale, ispirazionale, audace—così puoi trovare slogan che corrispondono alla voce del tuo brand.' },
      { question: 'Posso modificare gli slogan generati?', answer: 'Assolutamente. Tratta gli slogan generati come punti di partenza. Molti brand raffinano e combinano elementi da più suggerimenti per creare il loro slogan finale perfetto.' },
      { question: 'Quanto dovrebbe essere lungo uno slogan?', answer: 'Gli slogan più efficaci sono tipicamente 2-7 parole. Slogan più brevi sono più facili da ricordare e più versatili per il branding. Lo strumento può generare varie lunghezze così puoi trovare cosa funziona meglio per le tue esigenze.' },
      { question: 'Il generatore può creare slogan per qualsiasi settore?', answer: 'Sì, lo strumento funziona per tutti i settori—tech, cibo, moda, finanza, salute, intrattenimento e altro. Fornisci contesto sul tuo settore e pubblico target per i risultati più rilevanti.' },
    ],
  },

  'product-description-generator': {
    slug: 'product-description-generator',
    name: 'Generatore di Descrizioni Prodotto',
    title: 'Generatore IA di descrizioni dei prodotti gratuito',
    description: 'Crea descrizioni di prodotto convincenti che convertono i visitatori in acquirenti. Genera copy che evidenzia benefici e guida le vendite.',
    metaDescription: 'Crea descrizioni di prodotto convincenti che convertono i visitatori in acquirenti. Genera copy che evidenzia benefici e guida le vendite....',
    inputLabel: 'Dettagli del prodotto...',
    inputPlaceholder: 'es. Bottiglia d\'acqua in acciaio inox, 750ml, isolata, mantiene le bevande fredde 24 ore',
    buttonText: 'Genera Descrizione',
    maxLength: 2048,
    options: [
      { name: 'format', label: 'Formato', choices: ['Paragrafo', 'Elenchi puntati', 'Paragrafo + punti elenco'], default: 'Paragrafo + punti elenco', type: 'select' },
      { name: 'length', label: 'Lunghezza', choices: ['Corta (50-100 parole)', 'Media (100-200 parole)', 'Lunga (200-300 parole)'], default: 'Media (100-200 parole)', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Informale', 'Lusso', 'Tecnico'], default: 'Professionale', type: 'select' },
    ],
    systemPrompt: `You are an expert e-commerce copywriter who creates product descriptions that drive conversions.
## CORE RULES
- Lead with benefits, support with features
- Use sensory and emotional language
- Address customer pain points
- Include social proof elements where natural
- Create urgency without being pushy
- Optimize for SEO with natural keyword placement
## DESCRIPTION STRUCTURE
1. Hook: Attention-grabbing opening
2. Benefits: What the customer gains
3. Features: Technical specifications
4. Social proof: Credibility builders
5. CTA: Clear next step
## OUTPUT FORMAT
Format: {{format}}
Length: {{length}}
Tone: {{tone}}
Provide a complete product description ready for use.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Ottimizzazione negozio e-commerce', description: 'I retailer online usano il Generatore di Descrizioni Prodotto per creare copy convincente che converte i visitatori in acquirenti. Lo strumento aiuta a evidenziare i benefici del prodotto, affrontare i punti dolenti dei clienti e creare urgenza che guida le vendite.' },
      { title: 'Scaling catalogo prodotti', description: 'Aziende con grandi cataloghi usano il generatore per creare descrizioni consistenti e di alta qualità su scala. Invece di passare ore a scrivere descrizioni individuali, i team possono produrre copy professionale rapidamente mantenendo la voce del brand.' },
      { title: 'Ottimizzazione listing marketplace', description: 'Venditori su marketplace come Amazon, eBay o Etsy usano lo strumento per creare descrizioni che si distinguono e si posizionano bene nella ricerca. Il generatore aiuta a ottimizzare per algoritmi specifici della piattaforma incorporando parole chiave rilevanti naturalmente.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di descrizioni prodotto?', answer: 'Un generatore di descrizioni prodotto è uno strumento IA che crea copy di vendita per prodotti basato sulle caratteristiche e benefici che fornisci. Va oltre l\'elenco delle specifiche per creare descrizioni coinvolgenti e persuasive che guidano le conversioni.' },
      { question: 'Il generatore di descrizioni prodotto è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Crea tutte le descrizioni prodotto di cui hai bisogno.' },
      { question: 'Cosa rende efficace una descrizione prodotto?', answer: 'Descrizioni prodotto efficaci guidano con i benefici (cosa ottiene il cliente), includono dettagli sensoriali, affrontano obiezioni, usano parole potenti che evocano emozione e includono una chiara call to action. Bilanciano informatività con persuasività.' },
      { question: 'Le descrizioni sono ottimizzate SEO?', answer: 'Sì, le descrizioni sono create con la SEO in mente, incorporando parole chiave rilevanti naturalmente nel copy. Per i migliori risultati, menziona le tue parole chiave target nei dettagli del prodotto che fornisci.' },
      { question: 'Posso usare queste descrizioni su qualsiasi piattaforma?', answer: 'Sì, le descrizioni funzionano per qualsiasi piattaforma e-commerce—Shopify, WooCommerce, Amazon, Etsy, eBay e altre. Potresti voler regolare la formattazione per abbinare i requisiti specifici della piattaforma.' },
      { question: 'Come fornisco i dettagli del prodotto?', answer: 'Includi quante più informazioni rilevanti: nome prodotto, caratteristiche chiave, materiali, dimensioni, benefici, pubblico target e punti di vendita unici. Più contesto fornisci, migliore sarà la descrizione.' },
      { question: 'Devo modificare le descrizioni generate?', answer: 'Raccomandiamo di rivedere e personalizzare le descrizioni per abbinarle alla tua voce di brand e aggiungere eventuali dettagli specifici del prodotto. Lo strumento fornisce una solida base che puoi perfezionare.' },
      { question: 'Posso generare descrizioni per qualsiasi tipo di prodotto?', answer: 'Sì, il generatore funziona per tutti i tipi di prodotto—fisici, digitali, servizi e altro. Regola il suo approccio in base alla categoria di prodotto e al tono che specifichi.' },
      { question: 'Quanto dovrebbe essere lunga una descrizione prodotto?', answer: 'La lunghezza ideale dipende dal prodotto e dalla piattaforma. Prodotti semplici potrebbero necessitare solo 50-100 parole, mentre prodotti complessi o tecnici beneficiano di 200-300 parole. Lo strumento offre opzioni di lunghezza per abbinare le tue esigenze.' },
      { question: 'Le descrizioni aiutano ad aumentare le conversioni?', answer: 'Sì, descrizioni prodotto ben scritte sono uno dei fattori più impattanti nelle conversioni e-commerce. Descrizioni convincenti aiutano i clienti a comprendere il valore, superare obiezioni e sentirsi sicuri nel loro acquisto.' },
    ],
  },

  'landing-page-generator': {
    slug: 'landing-page-generator',
    name: 'Generatore di Landing Page',
    title: 'Generatore IA gratuito di landing page',
    description: 'Crea copy di landing page ad alta conversione che trasforma visitatori in clienti. Genera headline, benefici, CTA e altro.',
    metaDescription: 'Crea copy di landing page ad alta conversione che trasforma visitatori in clienti. Genera headline, benefici, CTA e altro. Gratuito per...',
    inputLabel: 'Descrivi il tuo prodotto o servizio...',
    inputPlaceholder: 'es. App di gestione progetti per team remoti con tracciamento del tempo e collaborazione',
    buttonText: 'Genera Copy Landing Page',
    maxLength: 2048,
    options: [
      { name: 'page_type', label: 'Tipo di pagina', choices: ['Generazione Lead', 'Vendita Prodotto', 'Lancio App', 'Iscrizione Servizio', 'Registrazione Evento'], default: 'Generazione Lead', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Amichevole', 'Urgente', 'Premium'], default: 'Professionale', type: 'select' },
      { name: 'length', label: 'Lunghezza pagina', choices: ['Corta (above fold)', 'Media (3-4 sezioni)', 'Lunga (pagina vendita completa)'], default: 'Media (3-4 sezioni)', type: 'select' },
    ],
    systemPrompt: `You are an expert conversion copywriter who creates landing page copy that maximizes conversions.
## CORE RULES
- Lead with the strongest benefit
- Use clear, compelling headlines
- Address objections proactively
- Include social proof strategically
- Create one clear call to action
- Write for scanning (short paragraphs, bullets)
## LANDING PAGE STRUCTURE
1. Hero: Headline + subheadline + CTA
2. Problem: Pain point agitation
3. Solution: Your offer as the answer
4. Benefits: What they get
5. Features: How it works
6. Social Proof: Testimonials, logos, stats
7. FAQ: Objection handling
8. Final CTA: Strong closing
## OUTPUT FORMAT
Page Type: {{page_type}}
Tone: {{tone}}
Length: {{length}}
Provide complete landing page copy organized by section.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Campagne di generazione lead', description: 'Marketer che gestiscono campagne di lead generation usano il Generatore di Landing Page per creare copy che cattura lead efficacemente. Lo strumento aiuta a creare headline convincenti, copy orientato ai benefici e CTA forti che massimizzano i tassi di conversione.' },
      { title: 'Lanci di prodotto', description: 'Team che lanciano nuovi prodotti o funzionalità usano il generatore per creare pagine di lancio che costruiscono eccitazione e guidano i primi utilizzatori. Lo strumento struttura il copy per comunicare efficacemente il valore e incoraggiare l\'azione immediata.' },
      { title: 'Registrazioni servizi', description: 'Aziende SaaS e fornitori di servizi usano lo strumento per creare pagine di registrazione che convertono i visitatori in utenti trial o abbonati paganti. Il generatore aiuta ad affrontare obiezioni comuni e comunicare chiaramente le proposte di valore.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di copy per landing page?', answer: 'Un generatore di copy per landing page è uno strumento IA che crea testo persuasivo per landing page progettate per convertire visitatori. Include tutti gli elementi chiave: headline, sottotitoli, benefici, caratteristiche, prova sociale e call to action.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Crea tutto il copy per landing page di cui hai bisogno.' },
      { question: 'Cosa rende efficace il copy di una landing page?', answer: 'Copy efficace per landing page: guida con benefici non caratteristiche, affronta i punti dolenti dei clienti, include prova sociale, crea urgenza o scarsità, ha una CTA chiara e singola, e usa linguaggio che risuona con il pubblico target.' },
      { question: 'Quanto copy viene generato?', answer: 'Lo strumento genera copy completo per landing page incluso: headline e sottotitoli, sezioni benefici, elenchi caratteristiche, elementi di prova sociale, sezione FAQ, e molteplici call to action. La lunghezza varia in base alla tua selezione.' },
      { question: 'Posso personalizzare il copy generato?', answer: 'Assolutamente. Il copy generato è un punto di partenza che dovresti personalizzare per il tuo brand, aggiungere testimonianze reali e regolare in base alla tua proposta di valore specifica. Trattalo come una prima bozza professionale.' },
      { question: 'Lo strumento crea il design effettivo della pagina?', answer: 'Lo strumento genera il copy (testo) per la tua landing page, non il design visivo. Dovrai usare un costruttore di landing page o un web designer per implementare il copy in un design pagina reale.' },
      { question: 'Il copy funziona per qualsiasi settore?', answer: 'Sì, il generatore si adatta a qualsiasi settore o nicchia. Fornisci contesto sul tuo prodotto/servizio, pubblico target e proposta di valore unica per risultati più personalizzati.' },
      { question: 'Come devo strutturare la mia landing page?', answer: 'Il copy generato segue la struttura comprovata della landing page: hero section con headline/CTA, dichiarazione del problema, introduzione della soluzione, benefici/caratteristiche, prova sociale, FAQ e CTA finale. Puoi riorganizzare le sezioni come necessario.' },
      { question: 'Il copy aiuterà con le conversioni?', answer: 'Il copy è scritto usando principi di copywriting a risposta diretta comprovati e framework di conversione. Tuttavia, i tassi di conversione dipendono anche dal design, dall\'offerta, dal traffico e da altri fattori oltre al solo copy.' },
      { question: 'Posso usare questo per pagine multiple?', answer: 'Sì, puoi generare copy per quante landing page vuoi. Molti marketer usano lo strumento per creare pagine varianti per diversi segmenti di pubblico o test A/B.' },
    ],
  },

  // ==================== BATCH 3: Tools 21-30 ====================

  'google-ads-copy-generator': {
    slug: 'google-ads-copy-generator',
    name: 'Generatore di Copy Google Ads',
    title: 'Generatore IA di Google Ads gratuito',
    description: 'Crea copy Google Ads ad alta conversione che guida click e conversioni. Genera headline, descrizioni e estensioni ottimizzate per RSA.',
    metaDescription: 'Crea copy Google Ads ad alta conversione che guida click e conversioni. Genera headline, descrizioni e estensioni ottimizzate per RSA....',
    inputLabel: 'Descrivi il tuo prodotto/servizio...',
    inputPlaceholder: 'es. Software CRM basato su cloud per piccole imprese con automazione email e tracciamento pipeline',
    buttonText: 'Genera Copy Annunci',
    maxLength: 2048,
    options: [
      { name: 'campaign_type', label: 'Tipo di campagna', choices: ['Ricerca (RSA)', 'Display', 'Performance Max', 'Remarketing'], default: 'Ricerca (RSA)', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Urgente', 'Amichevole', 'Premium'], default: 'Professionale', type: 'select' },
      { name: 'include_cta', label: 'Includi CTA', choices: ['Sì', 'No'], default: 'Sì', type: 'radio' },
    ],
    systemPrompt: `You are an expert Google Ads copywriter who creates high-converting ad copy within Google's strict character limits and policies.
## CORE RULES
- Headlines: Max 30 characters each
- Descriptions: Max 90 characters each
- Follow Google Ads policies (no excessive caps, no misleading claims)
- Include keywords naturally
- Focus on benefits and unique value propositions
## RSA STRUCTURE
Generate:
- 15 unique headlines (30 chars max each)
- 4 unique descriptions (90 chars max each)
- Ensure headlines work in any combination
## OUTPUT FORMAT
Campaign Type: {{campaign_type}}
Tone: {{tone}}
Include CTA: {{include_cta}}
Provide complete ad copy with character counts.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Lancio e ottimizzazione campagne di ricerca', description: 'Marketer digitali e proprietari di piccole imprese usano il Generatore di Copy Google Ads per creare annunci di ricerca responsive (RSA) che richiedono headline e descrizioni multiple. Lo strumento genera variazioni conformi ai limiti di caratteri aderendo alle best practice per il quality score e i tassi di click-through.' },
      { title: 'Test A/B variazioni di copy degli annunci', description: 'Team PPC usano il generatore per produrre rapidamente variazioni multiple di copy degli annunci per i test. Invece di scrivere manualmente dozzine di headline e descrizioni, i team possono generare opzioni mirate e testarle sistematicamente per trovare le combinazioni più performanti.' },
      { title: 'Scaling di copy annunci per campagne grandi', description: 'Agenzie e team di marketing aziendale che gestiscono centinaia di gruppi di annunci usano lo strumento per scalare la creazione di copy mantenendo la qualità. Il generatore assicura output consistente e conforme alle policy su grandi volumi di campagne.' },
    ],
    faqs: [
      { question: 'Quali sono i limiti di caratteri per Google Ads?', answer: 'Le headline sono limitate a 30 caratteri ciascuna, le descrizioni a 90 caratteri ciascuna. Gli annunci di ricerca responsive richiedono 3-15 headline e 2-4 descrizioni. Lo strumento genera copy entro questi limiti e fornisce conteggi dei caratteri per verifica.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutto il copy degli annunci di cui hai bisogno.' },
      { question: 'Il copy segue le policy di Google Ads?', answer: 'Lo strumento genera copy progettato per essere conforme alle policy—evitando capitalizzazione eccessiva, affermazioni fuorvianti e contenuti proibiti. Tuttavia, dovresti sempre rivedere gli annunci prima dell\'invio poiché l\'applicazione delle policy può variare.' },
      { question: 'Come includo le parole chiave nel copy degli annunci?', answer: 'Fornisci le tue parole chiave target nella descrizione dell\'input. Il generatore le incorporerà naturalmente nelle headline e descrizioni mantenendo leggibilità e conformità ai limiti di caratteri.' },
      { question: 'Posso generare copy per annunci display?', answer: 'Sì, lo strumento supporta annunci di ricerca, display, Performance Max e remarketing. Ogni tipo ha requisiti leggermente diversi che il generatore adatta.' },
      { question: 'Quante headline devo usare?', answer: 'Google raccomanda di usare tutte le 15 posizioni di headline per gli RSA per dare al sistema più opzioni da testare. Lo strumento genera headline multiple progettate per funzionare in qualsiasi combinazione.' },
      { question: 'Il copy aiuterà con il Quality Score?', answer: 'Un buon copy degli annunci è un fattore nel Quality Score, insieme alla rilevanza della pagina di destinazione e al CTR atteso. Il generatore crea copy rilevante e focalizzato sulle parole chiave che supporta punteggi di qualità più alti.' },
      { question: 'Come testo quale copy degli annunci funziona meglio?', answer: 'Crea gruppi di annunci multipli con diverse variazioni di copy, poi monitora le metriche di performance (CTR, tasso di conversione, CPA) in Google Ads. Il generatore ti aiuta a creare abbastanza variazioni per test significativi.' },
      { question: 'Posso usare questo per campagne locali?', answer: 'Sì, includi informazioni sulla tua località nella descrizione. Lo strumento può generare copy che incorpora elementi locali, aree di servizio e CTA specifiche per la geografia.' },
      { question: 'Il copy include call to action?', answer: 'Sì, quando selezionato, lo strumento include CTA appropriate come "Prova Gratis", "Richiedi Preventivo" o "Acquista Ora" che si adattano ai limiti di caratteri e al tono della campagna.' },
    ],
  },

  'hook-generator': {
    slug: 'hook-generator',
    name: 'Generatore di Hook',
    title: 'Generatore IA di hook gratuito',
    description: 'Crea hook irresistibili che catturano l\'attenzione nei primi secondi. Perfetto per video, post e contenuti che fermano lo scrolling.',
    metaDescription: 'Crea hook irresistibili che catturano l\'attenzione nei primi secondi. Perfetto per video, post social e contenuti che fermano lo scrolling. Gratuito da usare.',
    inputLabel: 'Argomento o idea del contenuto...',
    inputPlaceholder: 'es. Perché la maggior parte delle persone fallisce nel risparmio per la pensione',
    buttonText: 'Genera Hook',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Piattaforma', choices: ['YouTube', 'TikTok/Reels', 'Podcast', 'Post Blog', 'Email', 'Presentazione'], default: 'YouTube', type: 'select' },
      { name: 'number_of_hooks', label: 'Numero di hook', choices: ['3 hook', '5 hook', '10 hook'], default: '5 hook', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Informativo', 'Provocatorio', 'Narrativo', 'Urgente'], default: 'Informativo', type: 'select' },
    ],
    systemPrompt: `You are an expert content creator specializing in attention-grabbing hooks that stop the scroll and keep audiences engaged.
## CORE RULES
- First 3 seconds are critical for video
- First line is critical for written content
- Create curiosity without being clickbait
- Match hook style to platform norms
- Deliver on the promise the hook makes
## HOOK TYPES
1. Question hooks: Pose a compelling question
2. Statement hooks: Make a bold claim
3. Story hooks: Start mid-action
4. Statistic hooks: Lead with surprising data
5. Controversy hooks: Challenge common beliefs
## OUTPUT FORMAT
Platform: {{platform}}
Number: {{number_of_hooks}}
Tone: {{tone}}
For each hook, provide:
1. The hook text
2. Hook type used
3. Why it works for this platform

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Ritenzione video YouTube e social media', description: 'I creator di contenuti usano il Generatore di Hook per creare aperture che fermano il pollice dallo scrolling e mantengono gli spettatori a guardare. I primi 3 secondi determinano se gli spettatori rimangono o se ne vanno, rendendo hook forti cruciali per il successo algoritmico.' },
      { title: 'Tassi di apertura email e newsletter', description: 'Email marketer usano hook come righe di apertura che convincono i lettori a continuare dopo l\'oggetto. Un hook forte nei primi secondi della lettura di un\'email aumenta significativamente l\'engagement e i tassi di click-through.' },
      { title: 'Aperture di presentazioni e discorsi', description: 'Speaker e presenter usano hook per catturare l\'attenzione del pubblico fin dall\'inizio. Che sia una riunione aziendale o un keynote, iniziare con un hook avvincente stabilisce il tono e l\'engagement per tutto il resto.' },
    ],
    faqs: [
      { question: 'Cos\'è un hook nei contenuti?', answer: 'Un hook è la frase di apertura, la domanda o l\'affermazione progettata per catturare immediatamente l\'attenzione e rendere impossibile per il pubblico distogliere lo sguardo. Crea curiosità, sfida ipotesi o promette valore che tiene le persone coinvolte.' },
      { question: 'Il generatore di hook è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutti gli hook di cui hai bisogno.' },
      { question: 'Cosa rende un hook efficace?', answer: 'Hook efficaci creano un gap di curiosità (le persone vogliono sapere di più), sfidano credenze comuni, promettono valore specifico, usano linguaggio emotivo, o iniziano nel mezzo dell\'azione. I migliori hook sono specifici al loro pubblico e piattaforma.' },
      { question: 'Quanto dovrebbe essere lungo un hook?', answer: 'La lunghezza dell\'hook dipende dalla piattaforma. Per video TikTok/Reels: 1-3 secondi parlati. Per YouTube: 5-15 secondi. Per contenuti scritti: 1-2 frasi. Per email: la prima riga dopo il saluto. Lo strumento genera lunghezze appropriate per piattaforma.' },
      { question: 'Gli hook sono diversi dal clickbait?', answer: 'Sì. Gli hook creano curiosità genuina che il contenuto soddisfa. Il clickbait fa promesse che il contenuto non mantiene. La differenza chiave è l\'allineamento promessa-consegna—buoni hook promettono ciò che il contenuto effettivamente fornisce.' },
      { question: 'Posso usare lo stesso hook su piattaforme diverse?', answer: 'Generalmente no. Ogni piattaforma ha norme e aspettative diverse. Ciò che funziona su TikTok (veloce, diretto) potrebbe non funzionare su LinkedIn (professionale, sfumato). Lo strumento genera hook ottimizzati per piattaforma.' },
      { question: 'Come testo quale hook funziona meglio?', answer: 'Usa l\'A/B testing. Pubblica lo stesso contenuto con hook diversi, poi confronta le metriche di engagement (tempo di visione, tasso di lettura, click). Per i video, controlla i grafici di ritenzione per vedere dove il pubblico abbandona.' },
      { question: 'Dovrei sempre iniziare il contenuto con un hook?', answer: 'Per la maggior parte dei contenuti digitali, sì. L\'attenzione è limitata e la competizione è alta. Tuttavia, alcuni formati (newsletter per fan dedicati, contenuti educativi di lunga durata) potrebbero permettere aperture più lente una volta che ti sei guadagnato la fiducia del pubblico.' },
      { question: 'Posso personalizzare il tono dell\'hook?', answer: 'Sì, lo strumento offre varie opzioni di tono—informativo, provocatorio, narrativo, urgente—così puoi abbinare gli hook alla voce del tuo brand e al tono del contenuto.' },
      { question: 'Quanti hook dovrei testare?', answer: 'Inizia con 3-5 variazioni per pezzo di contenuto. Tieni traccia della performance nel tempo per imparare quali stili di hook funzionano meglio per il tuo pubblico specifico. Lo strumento ti aiuta a generare abbastanza variazioni per test significativi.' },
    ],
  },

  'resignation-letter-generator': {
    slug: 'resignation-letter-generator',
    name: 'Generatore di Lettere di Dimissioni',
    title: 'Generatore IA di lettere di dimissioni gratuito',
    description: 'Crea lettere di dimissioni professionali che mantengono le relazioni e proteggono la tua reputazione. Genera lettere formali educate per qualsiasi situazione.',
    metaDescription: 'Crea lettere di dimissioni professionali che mantengono le relazioni e proteggono la tua reputazione. Genera lettere formali educate per...',
    inputLabel: 'Dettagli sulle tue dimissioni...',
    inputPlaceholder: 'es. Dimissioni da Marketing Manager dopo 3 anni, passaggio a nuova opportunità, ultimo giorno tra 2 settimane',
    buttonText: 'Genera Lettera',
    maxLength: 2048,
    options: [
      { name: 'tone', label: 'Tono', choices: ['Formale Standard', 'Caldo e Grato', 'Breve e Diretto', 'Professionale Dettagliato'], default: 'Formale Standard', type: 'select' },
      { name: 'notice_period', label: 'Periodo di preavviso', choices: ['2 settimane', '1 mese', '3 mesi', 'Immediato', 'Personalizzato'], default: '2 settimane', type: 'select' },
      { name: 'include_reason', label: 'Includi motivo', choices: ['Sì, brevemente', 'No, mantieni privato'], default: 'Sì, brevemente', type: 'radio' },
    ],
    systemPrompt: `You are an expert HR writer who creates professional resignation letters that protect relationships and reputations while clearly communicating the employee's departure.
## CORE RULES
- Always maintain professionalism regardless of circumstances
- Include all essential elements: last day, gratitude, transition offer
- Never burn bridges or include negative comments
- Keep it concise—one page maximum
- Make it easy for HR to process
## LETTER STRUCTURE
1. Clear statement of resignation
2. Last working day
3. Brief reason (if included)
4. Gratitude and positive experiences
5. Transition assistance offer
6. Professional sign-off
## OUTPUT FORMAT
Tone: {{tone}}
Notice Period: {{notice_period}}
Include Reason: {{include_reason}}
Provide a complete, ready-to-use resignation letter.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Transizioni di carriera e nuove opportunità', description: 'Professionisti che passano a nuovi ruoli usano il Generatore di Lettere di Dimissioni per creare lettere che comunicano la loro partenza professionalmente mantenendo relazioni positive per future referenze e networking.' },
      { title: 'Partenze in circostanze difficili', description: 'Dipendenti che lasciano a causa di circostanze impegnative—problemi con il management, cultura aziendale, o insoddisfazione—usano lo strumento per creare lettere neutrali e professionali che proteggono la loro reputazione senza bruciare ponti.' },
      { title: 'Dimissioni di dirigenti e senior', description: 'Leader senior e dirigenti usano il generatore per creare lettere appropriate al loro livello che affrontano i toni giusti di gratitudine, transizione e professionalità attesi nelle partenze di alto livello.' },
    ],
    faqs: [
      { question: 'Cosa devo includere in una lettera di dimissioni?', answer: 'Elementi essenziali: dichiarazione chiara che stai dimettendoti, il tuo ultimo giorno di lavoro, breve gratitudine per l\'opportunità, e offerta di assistere con la transizione. Elementi opzionali: breve motivo della partenza (non richiesto), evidenziazione delle esperienze positive.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Crea tutte le lettere di dimissioni di cui hai bisogno.' },
      { question: 'Devo spiegare perché me ne vado?', answer: 'No—non sei legalmente obbligato a fornire un motivo. Se scegli di includerne uno, mantienilo breve e positivo ("perseguendo una nuova opportunità", "motivi familiari"). Evita ragioni negative anche se vere.' },
      { question: 'Quanto dovrebbe essere lunga una lettera di dimissioni?', answer: 'Mantienila su una pagina o meno—tipicamente 3-5 brevi paragrafi. Le lettere di dimissioni dovrebbero essere concise e al punto. Informazioni dettagliate sulla transizione possono essere comunicate separatamente.' },
      { question: 'Dovrei menzionare cose negative?', answer: 'Mai. Indipendentemente dalle tue ragioni per andartene, la lettera di dimissioni non è il posto per lamentele. Commenti negativi possono danneggiare le referenze e le future opportunità di networking. Mantieni tutto professionale e positivo.' },
      { question: 'Quanto preavviso devo dare?', answer: 'Due settimane è standard nella maggior parte dei settori, anche se i ruoli senior spesso richiedono 1-3 mesi. Controlla il tuo contratto per requisiti specifici. Lo strumento può generare lettere per qualsiasi periodo di preavviso.' },
      { question: 'Posso usare questa lettera per qualsiasi settore?', answer: 'Sì, lo strumento genera lettere professionali appropriate per qualsiasi settore. Le convenzioni variano leggermente—la finanza tende a essere più formale, le startup più casuali—e puoi selezionare il tono di conseguenza.' },
      { question: 'Dovrei consegnare la lettera di persona o via email?', answer: 'La best practice: prima incontro di persona con il tuo manager, poi fai seguire con la lettera formale via email a HR e al tuo manager. Lo strumento genera una lettera adatta per consegna email.' },
      { question: 'Cosa se me ne vado in circostanze difficili?', answer: 'Lo strumento può generare lettere neutrali e professionali che non menzionano circostanze negative. Concentrati sui fatti (ultimo giorno, transizione) e mantieni il linguaggio positivo generico. Documenta eventuali problemi separatamente se necessario.' },
      { question: 'Posso negoziare dopo aver dato le dimissioni?', answer: 'Sì, la lettera di dimissioni non impedisce la negoziazione. Se la tua azienda fa una controfferta, puoi discuterla. Tuttavia, le statistiche mostrano che la maggior parte delle persone che accettano controfferte lascia comunque entro un anno. Considera attentamente.' },
    ],
  },

  'social-media-bio-generator': {
    slug: 'social-media-bio-generator',
    name: 'Generatore di Bio Social Media',
    title: 'Generatore IA di bio per social media gratuito',
    description: 'Crea bio accattivanti per qualsiasi piattaforma social. Genera descrizioni profilo che attirano follower e trasmettono la tua identità unica.',
    metaDescription: 'Crea bio accattivanti per qualsiasi piattaforma social. Genera descrizioni profilo che attirano follower e trasmettono la tua identità...',
    inputLabel: 'Parlaci di te o del tuo brand...',
    inputPlaceholder: 'es. Graphic designer freelance specializzato in brand identity, amante del minimalismo, con sede a Milano',
    buttonText: 'Genera Bio',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Piattaforma', choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'YouTube', 'Multi-piattaforma'], default: 'Multi-piattaforma', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Creativo', 'Divertente', 'Ispirazionale'], default: 'Professionale', type: 'select' },
      { name: 'number_of_variants', label: 'Numero di varianti', choices: ['3 varianti', '5 varianti'], default: '3 varianti', type: 'select' },
    ],
    systemPrompt: `You are an expert social media strategist who creates compelling bios that capture attention and build followings.
## CORE RULES
- Match platform character limits and norms
- Include key identifiers and value proposition
- Use appropriate emoji sparingly
- Include CTA when relevant
- Make it memorable and unique
## PLATFORM LIMITS
- Instagram: 150 characters
- Twitter/X: 160 characters
- LinkedIn: 2600 characters (but keep summary concise)
- TikTok: 80 characters
## OUTPUT FORMAT
Platform: {{platform}}
Tone: {{tone}}
Generate {{number_of_variants}} with character counts.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Costruzione del personal brand', description: 'Professionisti, creator e imprenditori usano il Generatore di Bio Social Media per creare descrizioni profilo che comunicano chi sono e il valore che forniscono. Una bio forte attira il pubblico giusto e stabilisce credibilità immediatamente.' },
      { title: 'Profili aziendali e di brand', description: 'Team di marketing e proprietari di piccole imprese usano lo strumento per creare bio di brand consistenti su più piattaforme che comunicano chiaramente la proposta di valore mantenendo la voce del brand.' },
      { title: 'Rinnovo e ottimizzazione profilo', description: 'Utenti che cercano di rinfrescare i loro profili dopo cambiamenti di carriera, lanci di prodotti, o evoluzione di strategia dei contenuti usano il generatore per creare bio aggiornate che riflettono la loro direzione attuale.' },
    ],
    faqs: [
      { question: 'Cosa rende una buona bio sui social media?', answer: 'Bio efficaci comunicano chiaramente chi sei, cosa fai e il valore che fornisci—il tutto nel limite di caratteri della piattaforma. Le migliori bio sono memorabili, specifiche, e includono una call to action o elemento di aggancio che incoraggia l\'engagement.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le bio di cui hai bisogno.' },
      { question: 'Dovrei usare emoji nella mia bio?', answer: 'Dipende dalla piattaforma e dal tuo brand. Instagram e TikTok favoriscono l\'uso di emoji; LinkedIn generalmente meno. Il generatore usa emoji appropriatamente in base alla piattaforma e al tono che selezioni.' },
      { question: 'Dovrei usare la stessa bio su ogni piattaforma?', answer: 'Generalmente no. Ogni piattaforma ha limiti di caratteri, norme del pubblico e aspettative diverse. Lo strumento può generare bio ottimizzate per piattaforma che mantengono la tua identità centrale adattandosi alle convenzioni di ogni piattaforma.' },
      { question: 'Quanto spesso dovrei aggiornare la mia bio?', answer: 'Aggiorna quando: il tuo ruolo/focus cambia, lanci qualcosa di nuovo, i tuoi risultati evolvono, o vuoi sottolineare campagne stagionali. Per la maggior parte delle persone, revisioni trimestrali sono sufficienti.' },
      { question: 'Dovrei includere parole chiave nella mia bio?', answer: 'Per LinkedIn e piattaforme con funzionalità di ricerca, sì—includere parole chiave rilevanti aiuta con la scoperta. Per Instagram e TikTok, concentrati più sulla leggibilità e personalità poiché le bio non sono pesantemente ricercate.' },
      { question: 'Cosa dovrei evitare in una bio social media?', answer: 'Evita: descrizioni generiche ("amo la vita"), troppi emoji, gergo che il tuo pubblico non comprende, informazioni obsolete, e cercare di inserire troppo. Mantienila focalizzata e autentica.' },
      { question: 'Come includo una CTA nella mia bio?', answer: 'Le CTA comuni includono: link al sito, hashtag del brand, prossimo evento, o invito all\'engagement ("DM per collaborazioni"). Lo strumento può incorporare CTA che si adattano ai limiti di caratteri e alle norme della piattaforma.' },
      { question: 'Posso usare questo per profili aziendali?', answer: 'Sì, lo strumento funziona sia per bio personali che aziendali. Indica che stai creando una bio di brand nel tuo input per risultati ottimizzati per il business.' },
      { question: 'Cosa se la mia bio non si adatta al limite di caratteri?', answer: 'Lo strumento genera bio entro i limiti di ogni piattaforma. Se hai bisogno di versioni più corte, seleziona piattaforme con limiti più stretti (TikTok a 80 caratteri) o richiedi bio più brevi nella tua descrizione.' },
    ],
  },

  'instagram-bio-generator': {
    slug: 'instagram-bio-generator',
    name: 'Generatore di Bio Instagram',
    title: 'Generatore IA di bio Instagram gratuito',
    description: 'Crea bio Instagram accattivanti che convertono i visitatori in follower. Genera descrizioni profilo ottimizzate per il limite di 150 caratteri.',
    metaDescription: 'Crea bio Instagram accattivanti che convertono i visitatori in follower. Genera descrizioni profilo ottimizzate per il limite di 150...',
    inputLabel: 'Parlaci del tuo profilo Instagram...',
    inputPlaceholder: 'es. Food blogger, ricette vegane, con sede a Roma, appassionata di cucina sostenibile',
    buttonText: 'Genera Bio',
    maxLength: 2048,
    options: [
      { name: 'account_type', label: 'Tipo di account', choices: ['Personale/Creator', 'Business/Brand', 'Influencer', 'Portfolio Professionale'], default: 'Personale/Creator', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Giocoso', 'Minimalista', 'Ispirazionale'], default: 'Professionale', type: 'select' },
      { name: 'include_emoji', label: 'Includi emoji', choices: ['Sì', 'No', 'Minimi'], default: 'Sì', type: 'radio' },
    ],
    systemPrompt: `You are an Instagram optimization expert who creates bio copy that maximizes profile visits-to-follows conversion.
## CORE RULES
- Maximum 150 characters
- Make every character count
- Include value proposition
- Consider line breaks for visual appeal
- Strategic emoji use for visual impact
## BIO ELEMENTS
1. Who you are/what you do
2. Value you provide
3. Unique differentiator
4. CTA or contact method
## OUTPUT FORMAT
Account Type: {{account_type}}
Tone: {{tone}}
Include Emoji: {{include_emoji}}
Generate 5 bio options with character counts, all under 150 characters.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Profili creator e influencer', description: 'Creator di contenuti usano il Generatore di Bio Instagram per creare descrizioni che comunicano immediatamente la loro nicchia, valore e personalità ai potenziali follower nei pochi secondi prima che decidano se seguire o no.' },
      { title: 'Account business e brand', description: 'Piccole imprese e brand usano lo strumento per creare bio che comunicano chiaramente cosa offrono e perché qualcuno dovrebbe seguire, includendo CTA appropriate come link al negozio o informazioni di contatto.' },
      { title: 'Portfolio professionali', description: 'Freelancer, artisti e professionisti usano il generatore per creare bio che stabiliscono credibilità e incoraggiano lead di lavoro e richieste di collaborazione tramite i loro profili Instagram.' },
    ],
    faqs: [
      { question: 'Qual è il limite di caratteri della bio Instagram?', answer: 'Le bio Instagram sono limitate a 150 caratteri. Lo strumento genera tutte le opzioni entro questo limite e fornisce conteggi dei caratteri per ogni variazione.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le bio Instagram di cui hai bisogno.' },
      { question: 'Dovrei usare emoji nella mia bio Instagram?', answer: 'Gli emoji sono comuni e accettati nelle bio Instagram—aiutano con l\'impatto visivo e risparmiano caratteri. Tuttavia, un uso eccessivo può sembrare poco professionale. Lo strumento offre opzioni per vari livelli di utilizzo degli emoji.' },
      { question: 'Come faccio ad aggiungere interruzioni di riga nella mia bio?', answer: 'Instagram permette interruzioni di riga nelle bio. Lo strumento può suggerire formattazione che usa gli a capo efficacemente per creare una struttura visivamente accattivante e facile da scansionare.' },
      { question: 'Dovrei includere hashtag nella mia bio?', answer: 'Gli hashtag nella bio sono cliccabili ma generalmente non raccomandati—portano gli utenti lontano dal tuo profilo. Eccezioni: hashtag del brand o hashtag della community che costruisci intorno al tuo contenuto.' },
      { question: 'Come ottimizzo la mia bio per la ricerca?', answer: 'Il campo nome (separato dalla bio) è ricercabile su Instagram. Includi parole chiave lì. La bio stessa dovrebbe concentrarsi su leggibilità e conversione piuttosto che su parole chiave di ricerca.' },
      { question: 'Cosa dovrei mettere nel mio link bio?', answer: 'Il tuo link bio dovrebbe portare alla tua destinazione più importante—sito web, landing page, link tree, o prodotto attuale. Lo strumento si concentra sul copy della bio, ma considera cosa promuove il link della tua bio.' },
      { question: 'Quanto spesso dovrei cambiare la mia bio Instagram?', answer: 'Cambiala quando: il tuo focus cambia, stai promuovendo qualcosa di nuovo, o la bio attuale non converte bene. Molti creator aggiornano stagionalmente o per campagne importanti.' },
      { question: 'Posso vedere quanti visitatori del profilo convertono in follower?', answer: 'Gli account business/creator Instagram forniscono insight sulle visite al profilo. Confrontale con la crescita dei follower per stimare il tasso di conversione. Una buona bio migliora questo tasso di conversione.' },
      { question: 'Cosa rende le persone propense a seguire dalla bio?', answer: 'Gli elementi chiave: chiara proposta di valore (perché dovrei seguire?), credibilità (risultati, affiliazioni), personalità (voce unica), e rilevanza (sei nella mia area di interesse?). Le migliori bio raggiungono la maggior parte di questi in 150 caratteri.' },
    ],
  },

  'instagram-caption-generator': {
    slug: 'instagram-caption-generator',
    name: 'Generatore di Didascalie Instagram',
    title: 'Generatore IA di didascalie Instagram gratuito',
    description: 'Crea didascalie Instagram coinvolgenti che guidano like, commenti e condivisioni. Genera copy perfetto per qualsiasi post.',
    metaDescription: 'Crea didascalie Instagram coinvolgenti che guidano like, commenti e condivisioni. Genera copy perfetto per qualsiasi post. Gratuito per...',
    inputLabel: 'Descrivi il tuo post...',
    inputPlaceholder: 'es. Foto al tramonto dalla cima di una montagna dopo un\'escursione di 5 ore',
    buttonText: 'Genera Didascalia',
    maxLength: 2048,
    options: [
      { name: 'content_type', label: 'Tipo di contenuto', choices: ['Foto Personale', 'Post Business', 'Contenuto Lifestyle', 'Post Educativo', 'Post Prodotto', 'Citazione Motivazionale'], default: 'Foto Personale', type: 'select' },
      { name: 'length', label: 'Lunghezza didascalia', choices: ['Corta (1-2 frasi)', 'Media (3-4 frasi)', 'Lunga (storytelling)'], default: 'Media (3-4 frasi)', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Informale/Amichevole', 'Professionale', 'Divertente', 'Ispirazionale', 'Informativo'], default: 'Informale/Amichevole', type: 'select' },
    ],
    systemPrompt: `You are an Instagram content expert who creates captions that maximize engagement while maintaining authentic voice.
## CORE RULES
- Hook in the first line (before "more")
- Include engagement trigger (question, CTA)
- Match tone to content type
- Strategic hashtag placement
- Consider line breaks for readability
## CAPTION STRUCTURE
1. Hook/attention grabber
2. Story or context
3. Value or insight
4. Engagement prompt
5. Hashtags (if included)
## OUTPUT FORMAT
Content Type: {{content_type}}
Length: {{length}}
Tone: {{tone}}
Generate 3 caption options with first line clearly marked.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Engagement quotidiano sui contenuti', description: 'Creator e utenti normali usano il Generatore di Didascalie Instagram per creare copy coinvolgente per post quotidiani senza passare ore a scrivere. Lo strumento aiuta a mantenere una qualità di posting consistente anche quando l\'ispirazione è bassa.' },
      { title: 'Account business e brand', description: 'I social media manager usano lo strumento per creare didascalie che bilanciano voce del brand con stile nativo della piattaforma, mantenendo gli account aziendali freschi e coinvolgenti invece che sterili e corporate.' },
      { title: 'Contenuti in batch e pianificazione', description: 'Creator che preparano contenuti in anticipo usano il generatore per creare didascalie multiple in una sessione, permettendo produzione efficiente di contenuti in batch mantenendo la qualità su molti post.' },
    ],
    faqs: [
      { question: 'Qual è la lunghezza ideale di una didascalia Instagram?', answer: 'Dipende dal tuo contenuto e pubblico. Didascalie corte (sotto 125 caratteri) mostrano interamente senza "altro". Didascalie lunghe possono guidare l\'engagement attraverso lo storytelling. Testa entrambe per vedere cosa risuona con il tuo pubblico.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le didascalie di cui hai bisogno.' },
      { question: 'Dovrei includere hashtag nelle mie didascalie?', answer: 'Gli hashtag aiutano con la scoperta. Puoi metterli alla fine della didascalia, in un primo commento, o entrambi. Lo strumento può suggerire strategie di hashtag, anche se la generazione di hashtag è meglio gestita dal nostro strumento dedicato per hashtag.' },
      { question: 'Perché la prima riga è così importante?', answer: 'Instagram tronca le didascalie dopo circa 125 caratteri (prima di "altro"). La tua prima riga deve agganciare i lettori abbastanza da farli cliccare per espandere. Lo strumento dà priorità a prime righe forti.' },
      { question: 'Come faccio ad aumentare l\'engagement con le didascalie?', answer: 'Includi elementi che invitano alla risposta: domande, "tagga qualcuno che...", opinioni che invitano al dibattito, o CTA. Lo strumento incorpora questi trigger di engagement in modo naturale.' },
      { question: 'Posso usarlo per contenuti business?', answer: 'Sì, lo strumento funziona per didascalie personali e business. Seleziona "Post Business" o "Post Prodotto" come tipo di contenuto per didascalie ottimizzate per account commerciali.' },
      { question: 'Come mantengo la mia voce unica?', answer: 'Usa le didascalie generate come punti di partenza, poi modifica per abbinare il tuo stile personale. Nel tempo, puoi fornire più contesto su tono e voce per ottenere risultati più personalizzati.' },
      { question: 'Le didascalie dovrebbero essere diverse per feed vs. Reels?', answer: 'Sì. I post del feed spesso permettono didascalie più lunghe e narrative. I Reels tipicamente usano didascalie più corte e incisive poiché il video porta il contenuto. Lo strumento si adatta in base al tipo di contenuto.' },
      { question: 'Quanto spesso dovrei postare con nuove didascalie?', answer: 'La consistenza conta più della frequenza. Che sia quotidiano o alcune volte a settimana, l\'importante è postare regolarmente con didascalie di qualità. Lo strumento aiuta a mantenere la qualità anche con orari impegnativi.' },
      { question: 'Posso generare didascalie per post carosello?', answer: 'Sì, i post carosello spesso necessitano di didascalie che fanno riferimento a più slide. Descrivi che è un carosello nel tuo input e lo strumento genererà didascalie che funzionano con contenuti multi-immagine.' },
    ],
  },

  'instagram-hashtag-generator': {
    slug: 'instagram-hashtag-generator',
    name: 'Generatore di Hashtag Instagram',
    title: 'Generatore IA di hashtag Instagram gratuito',
    description: 'Genera hashtag Instagram ottimizzati per raggiungere il tuo pubblico target. Trova il mix perfetto di tag popolari e di nicchia.',
    metaDescription: 'Genera hashtag Instagram ottimizzati per raggiungere il tuo pubblico target. Trova il mix perfetto di tag popolari e di nicchia. Gratuito.',
    inputLabel: 'Descrivi il tuo post o nicchia...',
    inputPlaceholder: 'es. Foto di fitness femminile, allenamento in palestra, post motivazionale',
    buttonText: 'Genera Hashtag',
    maxLength: 2048,
    options: [
      { name: 'number_of_hashtags', label: 'Numero di hashtag', choices: ['10 hashtag', '20 hashtag', '30 hashtag'], default: '20 hashtag', type: 'select' },
      { name: 'mix_type', label: 'Mix di hashtag', choices: ['Bilanciato (piccoli + medi + grandi)', 'Focalizzato sulla nicchia', 'Alto volume'], default: 'Bilanciato (piccoli + medi + grandi)', type: 'select' },
      { name: 'include_branded', label: 'Includi di brand', choices: ['Sì', 'No'], default: 'No', type: 'radio' },
    ],
    systemPrompt: `You are an Instagram growth expert who creates strategic hashtag sets for maximum reach and engagement.
## CORE RULES
- Mix of small (under 100K), medium (100K-1M), and large (1M+) hashtags
- All hashtags must be relevant to content
- Avoid banned or shadow-banned hashtags
- Group by category for easy selection
- Consider hashtag competitiveness
## HASHTAG CATEGORIES
- Niche-specific (highly relevant, lower competition)
- Community (engagement-focused)
- Broad category (discovery)
- Trending (current relevance)
## OUTPUT FORMAT
Number: {{number_of_hashtags}}
Mix Type: {{mix_type}}
Include Branded: {{include_branded}}
Organize by size category with engagement potential notes.

IMPORTANT: Generate hashtags relevant to Italian-speaking audience when appropriate.`,
    useCases: [
      { title: 'Crescita organica e scoperta', description: 'Creator che cercano di crescere organicamente usano il Generatore di Hashtag Instagram per trovare hashtag che li aiutano a essere scoperti da nuovo pubblico senza perdersi in tag troppo competitivi dove il loro contenuto affonda.' },
      { title: 'Costruzione di community di nicchia', description: 'Account focalizzati su nicchie specifiche usano lo strumento per trovare hashtag di community che li connettono con pubblico altamente coinvolto nella loro area, costruendo follower dedicati piuttosto che solo numeri.' },
      { title: 'Strategia di contenuti in batch', description: 'Social media manager che preparano contenuti in anticipo usano il generatore per creare set di hashtag per diversi temi o categorie di contenuti, semplificando la pianificazione e il scheduling dei post.' },
    ],
    faqs: [
      { question: 'Quanti hashtag dovrei usare su Instagram?', answer: 'Instagram permette 30 hashtag per post. Studi suggeriscono che 20-30 hashtag rilevanti performano bene per la scoperta, anche se alcuni account hanno successo con meno. Testa per trovare cosa funziona per il tuo pubblico specifico.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutti i set di hashtag di cui hai bisogno.' },
      { question: 'Cosa sono gli hashtag piccoli, medi e grandi?', answer: 'Le dimensioni si riferiscono a quanti post usano quell\'hashtag. Piccoli (sotto 100K post) hanno meno competizione ma meno reach. Grandi (1M+) hanno enorme reach ma il tuo post potrebbe perdersi. Un mix bilanciato è tipicamente la migliore strategia.' },
      { question: 'Dovrei usare gli stessi hashtag per ogni post?', answer: 'No—Instagram potrebbe vederlo come comportamento spam. Ruota i set di hashtag, mantieni gruppi di hashtag per diversi tipi di contenuti, e includi sempre alcuni tag specifici per il contenuto di quel particolare post.' },
      { question: 'Posso mettere hashtag nei commenti invece che nella didascalia?', answer: 'Sì, entrambi funzionano per la scoperta. I commenti mantengono le didascalie pulite ma potrebbero avere reach leggermente inferiore. Testa entrambi gli approcci per vedere cosa funziona per il tuo account.' },
      { question: 'Come so se un hashtag è bannato?', answer: 'Gli hashtag bannati non mostrano post recenti quando li cerchi. Lo strumento evita hashtag comunemente bannati, ma controlla sempre se noti cali insoliti di engagement—potrebbe indicare un hashtag problematico.' },
      { question: 'Gli hashtag aiutano ancora con l\'algoritmo di Instagram?', answer: 'Sì, gli hashtag rimangono uno strumento di scoperta, anche se l\'algoritmo di Instagram è evoluto. Sono particolarmente importanti per raggiungere pubblico nuovo al di là dei tuoi follower attuali.' },
      { question: 'Come dovrei organizzare i miei set di hashtag?', answer: 'Crea gruppi per: tipo di contenuto (prodotto, lifestyle, educational), livello di competizione (piccolo, medio, grande), e temi specifici. Mescola e abbina da questi gruppi per ogni post.' },
      { question: 'Gli hashtag funzionano allo stesso modo per Reels?', answer: 'Gli hashtag funzionano per i Reels ma possono avere meno impatto rispetto al feed—l\'algoritmo Reels pesa molto sull\'engagement del contenuto. Usa comunque hashtag rilevanti ma concentrati sulla qualità del contenuto come priorità.' },
      { question: 'Dovrei usare hashtag di brand?', answer: 'Se hai un hashtag di brand, sì—costruisce community e rende i contenuti user-generated scopribili. Lo strumento può suggerire strutture di hashtag di brand se selezionato.' },
    ],
  },

  'social-media-hashtag-generator': {
    slug: 'social-media-hashtag-generator',
    name: 'Generatore di Hashtag Social Media',
    title: 'Generatore IA di hashtag per social media gratuito',
    description: 'Genera hashtag ottimizzati per qualsiasi piattaforma social. Trova tag di tendenza e di nicchia che aumentano la tua visibilità.',
    metaDescription: 'Genera hashtag ottimizzati per qualsiasi piattaforma social. Trova tag di tendenza e di nicchia che aumentano la tua visibilità. Gratuito.',
    inputLabel: 'Descrivi il tuo contenuto...',
    inputPlaceholder: 'es. Video tutorial di make-up, look naturale, per principianti',
    buttonText: 'Genera Hashtag',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Piattaforma', choices: ['Instagram', 'TikTok', 'Twitter/X', 'LinkedIn', 'YouTube', 'Multi-piattaforma'], default: 'Multi-piattaforma', type: 'select' },
      { name: 'number_of_hashtags', label: 'Numero di hashtag', choices: ['10 hashtag', '20 hashtag', '30 hashtag'], default: '20 hashtag', type: 'select' },
      { name: 'focus', label: 'Focus', choices: ['Reach massimo', 'Nicchia mirata', 'Tendenza/Virale', 'Bilanciato'], default: 'Bilanciato', type: 'select' },
    ],
    systemPrompt: `You are a social media growth expert who creates platform-optimized hashtag strategies for maximum visibility and engagement.
## CORE RULES
- Match hashtag style to platform norms
- Consider platform-specific limits and best practices
- Balance reach with relevance
- Include mix of competition levels
- Avoid overused or banned tags
## PLATFORM DIFFERENCES
- Instagram: Up to 30, mix of sizes
- TikTok: 3-5 focused, trending matters
- Twitter: 1-3 max, integrated in tweet
- LinkedIn: 3-5 professional tags
- YouTube: Include in description
## OUTPUT FORMAT
Platform: {{platform}}
Number: {{number_of_hashtags}}
Focus: {{focus}}
Provide hashtags organized by category with usage notes.

IMPORTANT: Generate hashtags relevant to Italian-speaking audience when appropriate.`,
    useCases: [
      { title: 'Gestione contenuti multi-piattaforma', description: 'Creator e marketer che gestiscono presenza su multiple piattaforme usano il Generatore di Hashtag Social Media per creare set di tag ottimizzati per piattaforma che rispettano le diverse convenzioni e best practice di ogni canale.' },
      { title: 'Ricerca e scoperta di tendenze', description: 'Professionisti dei social media usano lo strumento per identificare hashtag di tendenza rilevanti che possono aumentare la visibilità sui contenuti tempestivi e mantenere gli account coinvolti nelle conversazioni attuali.' },
      { title: 'Targeting di nicchia', description: 'Business e creator mirando a pubblici specifici usano il generatore per trovare hashtag di community che li connettono con pubblici altamente coinvolti nella loro nicchia, anche se questi tag hanno volumi inferiori.' },
    ],
    faqs: [
      { question: 'Quanti hashtag dovrei usare per piattaforma?', answer: 'Varia per piattaforma: Instagram (20-30), TikTok (3-5), Twitter (1-3), LinkedIn (3-5), YouTube (5-15 nella descrizione). Lo strumento genera numeri appropriati per piattaforma basati sulla tua selezione.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera hashtag per qualsiasi piattaforma.' },
      { question: 'Gli stessi hashtag funzionano su tutte le piattaforme?', answer: 'No—ogni piattaforma ha cultura e best practice diverse. Ciò che è popolare su Instagram potrebbe non funzionare su LinkedIn. Lo strumento adatta i suggerimenti per ogni piattaforma specifica.' },
      { question: 'Come trovo hashtag di tendenza?', answer: 'Seleziona "Tendenza/Virale" come focus. Lo strumento suggerisce hashtag con attuale momentum, anche se i trend cambiano rapidamente. Controlla sempre le tendenze della piattaforma in tempo reale per conferma.' },
      { question: 'Gli hashtag aiutano su ogni piattaforma?', answer: 'Il loro impatto varia. Instagram e TikTok usano pesantemente gli hashtag per la scoperta. Twitter li usa per argomenti. LinkedIn li usa moderatamente. YouTube li considera come metadati. Lo strumento pesa i suggerimenti di conseguenza.' },
      { question: 'Dovrei creare il mio hashtag di brand?', answer: 'Sì, se stai costruendo una community. Gli hashtag di brand aiutano ad aggregare contenuti user-generated e costruire riconoscimento. Lo strumento può suggerire strutture di hashtag di brand se richiesto.' },
      { question: 'Come so se un hashtag è troppo competitivo?', answer: 'Hashtag con milioni di post rendono difficile emergere per i contenuti. Lo strumento categorizza per livello di competizione, aiutandoti a trovare un mix che include opportunità raggiungibili insieme a tag ad alto reach.' },
      { question: 'Posso salvare set di hashtag per riutilizzarli?', answer: 'Lo strumento genera set freschi ogni volta. Per il riutilizzo, copia i set generati in un documento organizzato per tipo di contenuto o tema. Ruota tra set piuttosto che usare gli stessi ripetutamente.' },
      { question: 'Dovrei mettere hashtag nella didascalia o nei commenti?', answer: 'Per Instagram, entrambi funzionano. I commenti mantengono le didascalie pulite; le didascalie potrebbero avere reach leggermente migliore. Per altre piattaforme, segui le norme—Twitter li integra, LinkedIn alla fine dei post.' },
      { question: 'Quanto spesso dovrei aggiornare la mia strategia di hashtag?', answer: 'Rivedi mensilmente o quando l\'engagement cala. I trend cambiano, nuovi hashtag emergono, e i pattern di popolarità si spostano. Aggiornamenti regolari mantengono la tua strategia efficace.' },
    ],
  },

  'tiktok-hashtag-generator': {
    slug: 'tiktok-hashtag-generator',
    name: 'Generatore di Hashtag TikTok',
    title: 'Generatore IA di hashtag TikTok gratuito',
    description: 'Genera hashtag TikTok ottimizzati per visibilità e viralità. Trova tag di tendenza e di nicchia per la tua pagina For You.',
    metaDescription: 'Genera hashtag TikTok ottimizzati per visibilità e viralità. Trova tag di tendenza e di nicchia per la tua pagina For You. Gratuito.',
    inputLabel: 'Descrivi il tuo video TikTok...',
    inputPlaceholder: 'es. Video di danza su canzone popolare, coreografia divertente, per adolescenti',
    buttonText: 'Genera Hashtag',
    maxLength: 2048,
    options: [
      { name: 'content_type', label: 'Tipo di contenuto', choices: ['Intrattenimento/Divertente', 'Educational', 'Danza/Trend', 'Lifestyle', 'Business/Marketing', 'Nicchia'], default: 'Intrattenimento/Divertente', type: 'select' },
      { name: 'number_of_hashtags', label: 'Numero di hashtag', choices: ['3-5 (raccomandato)', '5-10', '10+'], default: '3-5 (raccomandato)', type: 'select' },
      { name: 'trend_focus', label: 'Focus sui trend', choices: ['Solo tendenze attuali', 'Mix trend + nicchia', 'Focalizzato sulla nicchia'], default: 'Mix trend + nicchia', type: 'select' },
    ],
    systemPrompt: `You are a TikTok growth expert who creates hashtag strategies optimized for the TikTok algorithm and For You Page discovery.
## CORE RULES
- TikTok favors fewer, more relevant hashtags (3-5 recommended)
- Trending sounds and hashtags work together
- Niche hashtags can outperform broad ones
- FYP is algorithmically driven, hashtags are one signal
- Avoid overused generic tags like #fyp alone
## TIKTOK SPECIFICS
- Mix trending + niche + broad
- Consider current challenges and sounds
- Community hashtags build engagement
- Branded hashtags for campaigns
## OUTPUT FORMAT
Content Type: {{content_type}}
Number: {{number_of_hashtags}}
Trend Focus: {{trend_focus}}
Provide hashtags with trend status and usage notes.

IMPORTANT: Generate hashtags relevant to Italian-speaking TikTok audience when appropriate.`,
    useCases: [
      { title: 'Ottimizzazione per la pagina For You', description: 'Creator TikTok usano il Generatore di Hashtag TikTok per trovare tag che aiutano i loro video a essere scoperti nella For You Page, bilanciando hashtag di tendenza con tag di nicchia per reach ottimale.' },
      { title: 'Partecipazione a trend e challenge', description: 'Creator che partecipano a challenge o trend virali usano lo strumento per identificare gli hashtag corretti da usare, assicurandosi che il loro contenuto appaia accanto ad altri contenuti correlati.' },
      { title: 'Costruzione di community di nicchia', description: 'Creator focalizzati su nicchie specifiche usano il generatore per trovare hashtag di community che li connettono con pubblici appassionati nella loro area di contenuti.' },
    ],
    faqs: [
      { question: 'Quanti hashtag dovrei usare su TikTok?', answer: 'TikTok raccomanda 3-5 hashtag rilevanti. A differenza di Instagram dove di più può essere meglio, TikTok sembra favorire un uso più focalizzato degli hashtag. La qualità e la rilevanza contano più della quantità.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera hashtag TikTok per tutti i tuoi video.' },
      { question: '#FYP e #ForYou funzionano effettivamente?', answer: 'Sono estremamente saturi, rendendo difficile il ranking. Hashtag di nicchia e trend-specifici tipicamente performano meglio per la scoperta. Lo strumento si concentra su opzioni più efficaci.' },
      { question: 'Come trovo hashtag di tendenza per TikTok?', answer: 'Controlla la pagina Discover di TikTok e presta attenzione ai suoni e challenge di tendenza. Lo strumento suggerisce hashtag con attuale momentum, anche se i trend TikTok si muovono velocemente.' },
      { question: 'Gli hashtag contano davvero sull\'algoritmo TikTok?', answer: 'Gli hashtag sono uno dei segnali che TikTok usa, insieme a tempo di visione, engagement, suono e comportamento dell\'utente. Non sono magici, ma gli hashtag giusti aiutano a categorizzare il contenuto per il pubblico rilevante.' },
      { question: 'Dovrei usare gli stessi hashtag per ogni video?', answer: 'No—abbina gli hashtag al contenuto specifico di ogni video. Temi diversi dovrebbero usare tag diversi. Il riutilizzo degli stessi hashtag può apparire spam e potrebbe limitare la varietà del tuo pubblico.' },
      { question: 'Posso usare hashtag di altre piattaforme su TikTok?', answer: 'Alcuni si sovrappongono, ma le norme degli hashtag TikTok differiscono. Gli hashtag Instagram tendono a essere più lunghi; quelli TikTok sono spesso più brevi e legati ai trend. Usa hashtag nativi della piattaforma per i migliori risultati.' },
      { question: 'Come funzionano gli hashtag delle challenge?', answer: 'Le challenge hanno hashtag specifici che le identificano. Partecipare con l\'hashtag corretto aiuta il tuo video ad apparire accanto ad altri partecipanti, aumentando la scoperta dagli spettatori della challenge.' },
      { question: 'Dovrei creare il mio hashtag di brand?', answer: 'Se stai costruendo una presenza di brand, sì. Gli hashtag di brand aiutano ad aggregare contenuti intorno al tuo account. Mantienili brevi e memorabili. Lo strumento può suggerire strutture se richiesto.' },
      { question: 'Quanto velocemente cambiano i trend degli hashtag TikTok?', answer: 'Molto velocemente—i trend TikTok possono emergere e svanire in giorni. Controlla sempre i trend attuali prima di postare. Lo strumento fornisce suggerimenti di tendenza ma conferma la rilevanza sulla pagina Discover di TikTok.' },
    ],
  },

  'social-media-username-generator': {
    slug: 'social-media-username-generator',
    name: 'Generatore di Username Social Media',
    title: 'Generatore IA di username per social media gratuito',
    description: 'Crea username unici e memorabili per qualsiasi piattaforma social. Genera handle disponibili che riflettono la tua identità.',
    metaDescription: 'Crea username unici e memorabili per qualsiasi piattaforma social. Genera handle disponibili che riflettono la tua identità. Gratuito.',
    inputLabel: 'Descrivi la tua identità o brand...',
    inputPlaceholder: 'es. Food blogger italiana, amante della pasta, nome Sara',
    buttonText: 'Genera Username',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Piattaforma', choices: ['Multi-piattaforma', 'Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'Gaming'], default: 'Multi-piattaforma', type: 'select' },
      { name: 'style', label: 'Stile', choices: ['Professionale', 'Creativo/Unico', 'Semplice/Pulito', 'Divertente/Giocoso'], default: 'Creativo/Unico', type: 'select' },
      { name: 'number_of_options', label: 'Numero di opzioni', choices: ['10 opzioni', '20 opzioni', '30 opzioni'], default: '20 opzioni', type: 'select' },
    ],
    systemPrompt: `You are a branding expert who creates memorable, available-looking usernames that work across social platforms.
## CORE RULES
- Must be memorable and easy to type
- Avoid excessive numbers or underscores
- Consider platform character limits
- Make it pronounceable
- Suggest variations for availability
## USERNAME TECHNIQUES
- Name + descriptor (SaraCreates)
- Action words (TheRunningChef)
- Alliteration (FitnessFranco)
- Industry terms (PixelPro)
- Creative spelling (Kre8tive)
## OUTPUT FORMAT
Platform: {{platform}}
Style: {{style}}
Generate {{number_of_options}} with notes on style and potential availability.

IMPORTANT: Generate usernames that work well in Italian context.`,
    useCases: [
      { title: 'Nuovi account social media', description: 'Creator e professionisti che lanciano nuovi profili usano il Generatore di Username Social Media per trovare handle unici e disponibili che riflettono la loro identità e sono facili da ricordare e condividere.' },
      { title: 'Rebranding e rinnovamento account', description: 'Utenti che cercano di rinfrescare la loro presenza social o fare rebranding usano lo strumento per esplorare nuove opzioni di username che meglio rappresentano la loro direzione evoluta.' },
      { title: 'Consistenza tra piattaforme', description: 'Creator che cercano lo stesso username su multiple piattaforme usano il generatore per trovare opzioni che probabilmente saranno disponibili ovunque, mantenendo un\'identità consistente.' },
    ],
    faqs: [
      { question: 'Come creo un buon username?', answer: 'Buoni username sono: memorabili, facili da digitare, facili da pronunciare, coerenti con il tuo brand, e disponibili sulle tue piattaforme target. Evita numeri eccessivi o caratteri speciali che rendono difficile la condivisione.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le opzioni di username di cui hai bisogno.' },
      { question: 'Come so se un username è disponibile?', answer: 'Lo strumento genera opzioni probabilmente disponibili basate su pattern unici. Tuttavia, devi verificare la disponibilità direttamente su ogni piattaforma—la disponibilità può cambiare rapidamente.' },
      { question: 'Dovrei usare lo stesso username ovunque?', answer: 'Idealmente sì—la consistenza aiuta le persone a trovarti su più piattaforme. Se il tuo username preferito non è disponibile ovunque, lo strumento suggerisce variazioni che mantengono riconoscibilità.' },
      { question: 'Posso usare numeri nel mio username?', answer: 'Puoi, ma usali strategicamente. Evita numeri casuali (marco87). Considera numeri significativi o pattern che si integrano (Studio42, Team360). Lo strumento minimizza i numeri a meno che non aggiungano valore.' },
      { question: 'Quanto dovrebbe essere lungo un username?', answer: 'Più corto è meglio—più facile da ricordare e digitare. La maggior parte delle piattaforme permette 15-30 caratteri, ma mira a 15 o meno quando possibile. Lo strumento prioritizza la concisione.' },
      { question: 'Gli underscore e i punti funzionano negli username?', answer: 'Funzionano tecnicamente ma possono complicare la condivisione. "Marco_Rossi_Chef" è più difficile da ricordare di "MarcoChef". Lo strumento li usa con parsimonia e solo quando aggiungono chiarezza.' },
      { question: 'Posso cambiare username dopo aver iniziato?', answer: 'La maggior parte delle piattaforme lo permette, anche se potresti perdere riconoscimento del brand. È meglio scegliere bene dall\'inizio, ma il rebranding è possibile. Alcune piattaforme hanno periodi di attesa o limitazioni.' },
      { question: 'Come rendo il mio username memorabile?', answer: 'Usa tecniche come: allitterazione (FitnessFranco), giochi di parole (ByteSize), parole d\'azione (CreatesDaily), o combinazioni uniche (PixelPasta). Lo strumento incorpora queste tecniche nei suggerimenti.' },
      { question: 'Cosa se tutti gli username che voglio sono presi?', answer: 'Lo strumento genera molte variazioni. Considera: aggiungere prefissi/suffissi (TheMarco, MarcoCreates), ortografie alternative, o parole correlate. A volte un username completamente diverso è meglio di una variazione forzata.' },
    ],
  },

  // ==================== BATCH 4: Tools 31-40 ====================

  'instagram-name-generator': {
    slug: 'instagram-name-generator',
    name: 'Generatore di Nomi Instagram',
    title: 'Generatore IA di nomi Instagram gratuito',
    description: 'Crea nomi Instagram unici e memorabili che catturano l\'attenzione. Genera handle disponibili per il tuo profilo personale o di brand.',
    metaDescription: 'Crea nomi Instagram unici e memorabili che catturano l\'attenzione. Genera handle disponibili per il tuo profilo personale o di brand. Gratuito.',
    inputLabel: 'Descrivi il tuo profilo Instagram...',
    inputPlaceholder: 'es. Fotografa di viaggi, esploro l\'Italia, mi chiamo Giulia',
    buttonText: 'Genera Nomi',
    maxLength: 2048,
    options: [
      { name: 'account_type', label: 'Tipo di account', choices: ['Personale/Creator', 'Business/Brand', 'Influencer', 'Portfolio Artistico'], default: 'Personale/Creator', type: 'select' },
      { name: 'style', label: 'Stile del nome', choices: ['Professionale', 'Creativo/Unico', 'Minimalista', 'Divertente'], default: 'Creativo/Unico', type: 'select' },
      { name: 'number_of_options', label: 'Numero di opzioni', choices: ['10 opzioni', '20 opzioni', '30 opzioni'], default: '20 opzioni', type: 'select' },
    ],
    systemPrompt: `You are an Instagram branding expert who creates memorable, unique usernames optimized for the platform.
## CORE RULES
- Maximum 30 characters
- Only letters, numbers, periods, underscores
- Must be memorable and easy to share
- Avoid excessive special characters
- Consider searchability
## INSTAGRAM SPECIFICS
- Short names are premium (harder to get)
- Periods and underscores accepted but use sparingly
- Name field (separate) is searchable
- Username appears in URL
## OUTPUT FORMAT
Account Type: {{account_type}}
Style: {{style}}
Generate {{number_of_options}} username options with character counts.

IMPORTANT: Generate usernames that work well in Italian context.`,
    useCases: [
      { title: 'Lancio di nuovi account Instagram', description: 'Creator e influencer che avviano nuovi account Instagram usano il Generatore di Nomi Instagram per trovare handle unici e memorabili che riflettono la loro nicchia e personalità e che sono probabilmente disponibili.' },
      { title: 'Rebranding account esistenti', description: 'Utenti che evolvono il loro contenuto o focus usano lo strumento per esplorare nuove opzioni di nome che meglio rappresentano la loro direzione aggiornata mentre mantengono appello memorabile.' },
      { title: 'Account business e brand', description: 'Piccole imprese che stabiliscono presenza Instagram usano il generatore per trovare handle professionali che si allineano con la loro identità di brand e sono facili da condividere con i clienti.' },
    ],
    faqs: [
      { question: 'Qual è il limite di caratteri per un nome Instagram?', answer: 'I nomi utente Instagram possono avere massimo 30 caratteri e possono includere solo lettere, numeri, punti e underscore. Nomi più corti sono generalmente migliori per la memorabilità e la condivisione.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le opzioni di nome di cui hai bisogno.' },
      { question: 'Come so se un nome è disponibile?', answer: 'Lo strumento genera nomi unici probabilmente disponibili. Tuttavia, devi verificare direttamente su Instagram—la disponibilità cambia costantemente mentre le persone creano nuovi account.' },
      { question: 'Dovrei usare underscore o punti?', answer: 'Usali con parsimonia. Rendono i nomi più difficili da ricordare e condividere verbalmente. Se necessario per disponibilità, un singolo punto o underscore è meglio di multipli.' },
      { question: 'Posso cambiare il mio nome Instagram dopo?', answer: 'Sì, Instagram permette cambi di username, ma il tuo vecchio nome diventa immediatamente disponibile per altri. Se hai costruito un seguito, il cambio di nome può causare confusione e perdita di riconoscimento.' },
      { question: 'Dovrei includere il mio nome reale?', answer: 'Dipende dai tuoi obiettivi. I nomi personali costruiscono connessione autentica; i nomi di brand costruiscono identità business. Molti creator usano il loro nome più un descrittore (GiuliaCreates, ChefMarco).' },
      { question: 'I numeri funzionano nei nomi Instagram?', answer: 'Possono funzionare se significativi (Studio42) ma evita numeri casuali (marco1987) che sembrano generici. Lo strumento usa i numeri strategicamente solo quando aggiungono valore.' },
      { question: 'Come rendo il mio nome più memorabile?', answer: 'Usa tecniche come: allitterazione (FotografiaFranca), giochi di parole, combinazioni uniche, o parole d\'azione. Lo strumento incorpora queste tecniche nei suggerimenti.' },
      { question: 'Dovrei abbinare il mio nome su altre piattaforme?', answer: 'Idealmente sì per consistenza di brand. Lo strumento può generare nomi probabilmente disponibili su più piattaforme se specifichi l\'esigenza multi-piattaforma.' },
      { question: 'Cosa rende un nome Instagram "professionale"?', answer: 'Nomi professionali sono: puliti e leggibili, facili da pronunciare, privi di caratteri eccessivi, e trasmettono competenza. Evita riferimenti troppo casuali o datati.' },
    ],
  },

  'tiktok-username-generator': {
    slug: 'tiktok-username-generator',
    name: 'Generatore di Username TikTok',
    title: 'Generatore IA di username TikTok gratuito',
    description: 'Crea username TikTok unici e accattivanti che si distinguono. Genera handle memorabili per il tuo profilo creator.',
    metaDescription: 'Crea username TikTok unici e accattivanti che si distinguono. Genera handle memorabili per il tuo profilo creator. Gratuito.',
    inputLabel: 'Descrivi il tuo contenuto TikTok...',
    inputPlaceholder: 'es. Video di cucina italiana, ricette veloci, mi chiamo Luca',
    buttonText: 'Genera Username',
    maxLength: 2048,
    options: [
      { name: 'content_type', label: 'Tipo di contenuto', choices: ['Intrattenimento/Comico', 'Educational', 'Danza/Trend', 'Lifestyle', 'Gaming', 'Business'], default: 'Intrattenimento/Comico', type: 'select' },
      { name: 'style', label: 'Stile', choices: ['Trendy/Moderno', 'Unico/Creativo', 'Semplice/Pulito', 'Divertente/Giocoso'], default: 'Trendy/Moderno', type: 'select' },
      { name: 'number_of_options', label: 'Numero di opzioni', choices: ['10 opzioni', '20 opzioni', '30 opzioni'], default: '20 opzioni', type: 'select' },
    ],
    systemPrompt: `You are a TikTok branding expert who creates usernames that resonate with the platform's young, trend-focused audience.
## CORE RULES
- Maximum 24 characters
- Letters, numbers, underscores, periods
- Should feel native to TikTok culture
- Easy to tag and mention
- Memorable for viral potential
## TIKTOK CULTURE
- Trendy, current feel
- Often playful or creative
- Short and snappy preferred
- Consider how it looks in video credits
## OUTPUT FORMAT
Content Type: {{content_type}}
Style: {{style}}
Generate {{number_of_options}} username options with character counts.

IMPORTANT: Generate usernames that work well in Italian TikTok context.`,
    useCases: [
      { title: 'Nuovi account TikTok', description: 'Creator che lanciano su TikTok usano il Generatore di Username TikTok per trovare handle che si adattano alla cultura della piattaforma e risuonano con il suo pubblico giovane e focalizzato sui trend.' },
      { title: 'Transizione da altre piattaforme', description: 'Creator affermati che si espandono su TikTok usano lo strumento per trovare versioni dei loro nomi esistenti o alternative fresche che funzionano specificamente per il pubblico TikTok.' },
      { title: 'Creator di nicchia', description: 'Creator che si concentrano su nicchie specifiche usano il generatore per trovare username che segnalano immediatamente il loro tipo di contenuto ai potenziali follower.' },
    ],
    faqs: [
      { question: 'Qual è il limite di caratteri per un username TikTok?', answer: 'Gli username TikTok possono avere massimo 24 caratteri. Possono includere lettere, numeri, underscore e punti. Nomi più corti sono tipicamente migliori per la memorabilità.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le opzioni di username di cui hai bisogno.' },
      { question: 'Come faccio a far sembrare il mio username "TikTok"?', answer: 'Gli username TikTok spesso sono trendy, giocosi e attuali. Evita formati datati. Lo strumento genera nomi che si adattano alla cultura della piattaforma e al suo pubblico giovane.' },
      { question: 'Posso cambiare il mio username TikTok?', answer: 'Sì, ma ci sono limitazioni su quanto spesso. TikTok richiede 30 giorni tra i cambi di username. Scegli saggiamente dall\'inizio quando possibile.' },
      { question: 'Il mio username TikTok dovrebbe corrispondere ad altre piattaforme?', answer: 'La consistenza aiuta con il riconoscimento cross-platform, ma TikTok ha la sua cultura. Alcuni creator usano username specifici per TikTok che si adattano meglio al vibe della piattaforma.' },
      { question: 'Cosa rende un username TikTok memorabile?', answer: 'Username memorabili sono: facili da dire e digitare, unici ma non troppo complicati, rilevanti per il tuo contenuto, e hanno un suono o ritmo accattivante.' },
      { question: 'Dovrei includere il mio tipo di contenuto nel nome?', answer: 'Può aiutare con la scoperta—i nuovi spettatori capiscono immediatamente cosa fai. Bilancia questo con flessibilità nel caso il tuo contenuto evolva.' },
      { question: 'I numeri funzionano negli username TikTok?', answer: 'Possono se significativi o creativi. Evita numeri casuali che sembrano aggiunte forzate. Lo strumento usa i numeri strategicamente quando aggiungono valore.' },
      { question: 'Come controllo la disponibilità?', answer: 'Lo strumento genera username probabilmente disponibili, ma devi verificare direttamente su TikTok. Cerca l\'username nella barra di ricerca dell\'app per vedere se esiste.' },
      { question: 'Posso usare emoji nel mio username?', answer: 'No, TikTok non permette emoji negli username. Solo lettere, numeri, underscore e punti sono accettati.' },
    ],
  },

  'youtube-channel-description-generator': {
    slug: 'youtube-channel-description-generator',
    name: 'Generatore di Descrizioni Canale YouTube',
    title: 'Generatore IA di descrizioni canale YouTube gratuito',
    description: 'Crea descrizioni canale YouTube avvincenti che attirano iscritti. Genera bio ottimizzate per SEO che spiegano il valore del tuo canale.',
    metaDescription: 'Crea descrizioni canale YouTube avvincenti che attirano iscritti. Genera bio ottimizzate per SEO che spiegano il valore del tuo canale....',
    inputLabel: 'Descrivi il tuo canale YouTube...',
    inputPlaceholder: 'es. Tutorial di programmazione Python per principianti, con focus su progetti pratici',
    buttonText: 'Genera Descrizione',
    maxLength: 2048,
    options: [
      { name: 'channel_type', label: 'Tipo di canale', choices: ['Educational/Tutorial', 'Intrattenimento', 'Gaming', 'Vlog/Lifestyle', 'Business/Marketing', 'Recensioni/Tech'], default: 'Educational/Tutorial', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Amichevole', 'Energico', 'Ispirazionale'], default: 'Professionale', type: 'select' },
      { name: 'length', label: 'Lunghezza', choices: ['Breve (200 parole)', 'Media (400 parole)', 'Completa (600+ parole)'], default: 'Media (400 parole)', type: 'select' },
    ],
    systemPrompt: `You are a YouTube growth expert who creates channel descriptions that convert visitors into subscribers.
## CORE RULES
- First 200 characters appear in search results
- Include relevant keywords naturally
- Clear value proposition
- Upload schedule if consistent
- Links and social handles at end
## DESCRIPTION STRUCTURE
1. Hook/value proposition (first 200 chars)
2. What viewers will learn/get
3. About the creator
4. Upload schedule
5. Call to subscribe
6. Links and contact
## OUTPUT FORMAT
Channel Type: {{channel_type}}
Tone: {{tone}}
Length: {{length}}
Provide complete description ready for use.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Lancio di nuovi canali', description: 'Creator che iniziano canali YouTube usano il Generatore di Descrizioni Canale YouTube per creare pagine About avvincenti che spiegano chiaramente il valore del canale e incoraggiano gli iscritti fin dal primo giorno.' },
      { title: 'Rebranding e rinnovo canale', description: 'Canali affermati che evolvono focus o pubblico usano lo strumento per aggiornare le loro descrizioni per riflettere la loro direzione attuale e attrarre nuovi iscritti.' },
      { title: 'Ottimizzazione SEO', description: 'Creator che cercano di migliorare la scopribilità usano il generatore per creare descrizioni ricche di parole chiave che aiutano i loro canali a comparire nella ricerca YouTube.' },
    ],
    faqs: [
      { question: 'Perché la descrizione del canale è importante?', answer: 'La descrizione del canale appare nei risultati di ricerca (primi 200 caratteri) e sulla tua pagina About. Una descrizione forte aiuta i visitatori a capire il tuo valore e decidere se iscriversi.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Crea descrizioni del canale quante volte vuoi.' },
      { question: 'Quanto dovrebbe essere lunga una descrizione del canale?', answer: 'YouTube permette 1.000 caratteri. Usa abbastanza per spiegare il tuo valore chiaramente, ma concentra le informazioni più importanti nei primi 200 caratteri che appaiono nei risultati di ricerca.' },
      { question: 'Cosa dovrei includere nella mia descrizione?', answer: 'Elementi chiave: cosa offre il tuo canale (proposta di valore), per chi è, programma di upload, breve bio del creator, e call to action per iscriversi. Aggiungi link ai social alla fine.' },
      { question: 'Come ottimizzo per la ricerca YouTube?', answer: 'Includi parole chiave rilevanti naturalmente nella descrizione—termini che le persone cercano quando cercano contenuti come i tuoi. Lo strumento incorpora parole chiave mentre mantiene la leggibilità.' },
      { question: 'Dovrei menzionare il mio programma di upload?', answer: 'Sì, se sei consistente. Gli iscritti apprezzano sapere quando aspettarsi nuovi contenuti. Se non hai un programma fisso, è meglio non promettere una frequenza specifica.' },
      { question: 'Quanto spesso dovrei aggiornare la mia descrizione?', answer: 'Aggiorna quando: il focus del tuo canale cambia, il tuo programma di upload cambia, vuoi promuovere qualcosa di nuovo, o la descrizione attuale sembra datata. Revisioni trimestrali sono una buona pratica.' },
      { question: 'Dovrei includere link nella descrizione?', answer: 'Sì, aggiungi link ai tuoi social media, sito web, o altre risorse importanti alla fine della descrizione. YouTube rende questi link cliccabili sulla pagina About.' },
      { question: 'Posso usare emoji nella descrizione del canale?', answer: 'Sì, emoji possono aggiungere personalità e aiutare a spezzare il testo. Usali con parsimonia e appropriatamente per il tono del tuo canale.' },
      { question: 'La descrizione del canale influisce sul ranking?', answer: 'La descrizione del canale è un segnale tra molti che YouTube usa per capire di cosa tratta il tuo canale. Parole chiave pertinenti possono aiutare con la scoperta, ma la qualità del contenuto rimane il fattore più importante.' },
    ],
  },

  'youtube-name-generator': {
    slug: 'youtube-name-generator',
    name: 'Generatore di Nomi Canale YouTube',
    title: 'Generatore IA di nomi canale YouTube gratuito',
    description: 'Crea nomi canale YouTube unici e memorabili che catturano la tua essenza di creator. Genera opzioni brandizzabili per il tuo canale.',
    metaDescription: 'Crea nomi canale YouTube unici e memorabili che catturano la tua essenza di creator. Genera opzioni brandizzabili per il tuo canale....',
    inputLabel: 'Descrivi il tuo canale YouTube...',
    inputPlaceholder: 'es. Canale di fitness per donne over 40, allenamenti a casa, tono motivazionale',
    buttonText: 'Genera Nomi',
    maxLength: 2048,
    options: [
      { name: 'channel_type', label: 'Tipo di canale', choices: ['Educational/Tutorial', 'Intrattenimento', 'Gaming', 'Vlog/Lifestyle', 'Business/Marketing', 'Recensioni/Tech'], default: 'Educational/Tutorial', type: 'select' },
      { name: 'style', label: 'Stile del nome', choices: ['Professionale/Corporate', 'Personale/Creator', 'Creativo/Unico', 'Descrittivo/Chiaro'], default: 'Personale/Creator', type: 'select' },
      { name: 'number_of_options', label: 'Numero di opzioni', choices: ['10 opzioni', '20 opzioni', '30 opzioni'], default: '20 opzioni', type: 'select' },
    ],
    systemPrompt: `You are a YouTube branding expert who creates channel names that are memorable, searchable, and brandable.
## CORE RULES
- Must be unique and memorable
- Consider searchability
- Should work as a brand beyond YouTube
- Easy to say and spell
- Avoid dates or trends that will age
## CHANNEL NAME TYPES
- Personal brand (Creator's name)
- Descriptive (Clear topic focus)
- Abstract (Unique coined name)
- Community (Inviting, inclusive)
## OUTPUT FORMAT
Channel Type: {{channel_type}}
Style: {{style}}
Generate {{number_of_options}} channel name options with notes on brandability.

IMPORTANT: Generate channel names that work well in Italian context.`,
    useCases: [
      { title: 'Lancio di nuovi canali', description: 'Creator che avviano canali YouTube usano il Generatore di Nomi Canale YouTube per trovare nomi brandizzabili che riflettono il loro contenuto e sono facili da ricordare e cercare.' },
      { title: 'Rebranding canali esistenti', description: 'Canali che evolvono o pivotano usano lo strumento per esplorare nuove opzioni di nome che meglio rappresentano la loro direzione aggiornata e aprono nuove opportunità di crescita.' },
      { title: 'Strategia di personal brand', description: 'Creator che costruiscono personal brand usano il generatore per trovare nomi che funzionano sia come identità YouTube che come brand più ampio su altre piattaforme.' },
    ],
    faqs: [
      { question: 'Cosa rende un buon nome canale YouTube?', answer: 'Buoni nomi canale sono: memorabili, facili da dire e scrivere, ricercabili, unici, e riflettono il tuo contenuto o personalità. Dovrebbero funzionare come brand oltre YouTube.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le opzioni di nome di cui hai bisogno.' },
      { question: 'Dovrei usare il mio nome reale?', answer: 'Dipende dai tuoi obiettivi. I nomi personali costruiscono connessione autentica e personal brand. I nomi di canale creano identità separata e possono essere più flessibili se vendi il canale o aggiungi collaboratori.' },
      { question: 'Come so se un nome è disponibile?', answer: 'Cerca direttamente su YouTube e fai ricerche Google. Controlla anche i social media per consistenza di brand. Lo strumento genera nomi probabilmente disponibili ma devi verificare.' },
      { question: 'Posso cambiare il nome del canale dopo?', answer: 'Sì, ma il cambio può causare confusione tra gli iscritti esistenti e perdita di riconoscimento del brand. È meglio scegliere bene dall\'inizio. YouTube permette cambi di nome periodici.' },
      { question: 'Il mio nome canale dovrebbe descrivere il mio contenuto?', answer: 'Può aiutare con la scoperta iniziale (CucinaItaliana è chiaro), ma nomi descrittivi possono limitare l\'evoluzione. Nomi più astratti (come MrBeast) offrono più flessibilità.' },
      { question: 'Quanto è importante il nome per il successo?', answer: 'Il nome è uno dei molti fattori. Un nome forte aiuta con la memorabilità e il branding, ma il contenuto di qualità è ciò che costruisce il pubblico. Non lasciare che la scelta del nome ti blocchi dall\'iniziare.' },
      { question: 'Dovrei evitare numeri e caratteri speciali?', answer: 'Generalmente sì. Rendono i nomi più difficili da ricordare e possono sembrare poco professionali. Eccezioni: numeri significativi che sono parte dell\'identità del brand.' },
      { question: 'Come testo quale nome funziona meglio?', answer: 'Prima di impegnarti: prova a dirlo ad alta voce, chiedi ad amici di scriverlo dopo averlo sentito, immaginalo su thumbnail e grafiche, e cercalo per vedere le associazioni esistenti.' },
      { question: 'Il nome influisce sulla SEO di YouTube?', answer: 'Il nome del canale appare nelle ricerche, quindi includere parole chiave rilevanti può aiutare. Tuttavia, la qualità del contenuto, i titoli dei video e le descrizioni hanno più peso per la SEO complessiva.' },
    ],
  },

  'youtube-video-description-generator': {
    slug: 'youtube-video-description-generator',
    name: 'Generatore di Descrizioni Video YouTube',
    title: 'Generatore IA di descrizioni video YouTube gratuito',
    description: 'Crea descrizioni video YouTube ottimizzate per SEO che migliorano il ranking e l\'engagement. Genera descrizioni complete con timestamp e link.',
    metaDescription: 'Crea descrizioni video YouTube ottimizzate per SEO che migliorano il ranking e l\'engagement. Genera descrizioni complete con timestamp e link. Gratuito.',
    inputLabel: 'Descrivi il tuo video...',
    inputPlaceholder: 'es. Tutorial su come creare un sito web WordPress da zero, per principianti, 20 minuti',
    buttonText: 'Genera Descrizione',
    maxLength: 2048,
    options: [
      { name: 'video_type', label: 'Tipo di video', choices: ['Tutorial/How-to', 'Vlog', 'Recensione', 'Intrattenimento', 'Educational', 'Prodotto/Business'], default: 'Tutorial/How-to', type: 'select' },
      { name: 'include_timestamps', label: 'Includi timestamp', choices: ['Sì', 'No'], default: 'Sì', type: 'radio' },
      { name: 'length', label: 'Lunghezza descrizione', choices: ['Breve (100 parole)', 'Media (200 parole)', 'Completa (300+ parole)'], default: 'Media (200 parole)', type: 'select' },
    ],
    systemPrompt: `You are a YouTube SEO expert who creates video descriptions that maximize discoverability and viewer engagement.
## CORE RULES
- First 2-3 lines appear above "show more"
- Include primary keywords naturally
- Timestamps enable chapters
- Include relevant links
- Call to action for engagement
## DESCRIPTION STRUCTURE
1. Hook + summary (above fold)
2. Full description
3. Timestamps (if applicable)
4. Links and resources
5. About the channel
6. Hashtags (3-5)
## OUTPUT FORMAT
Video Type: {{video_type}}
Include Timestamps: {{include_timestamps}}
Length: {{length}}
Provide complete description ready for use.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Ottimizzazione SEO dei video', description: 'Creator YouTube usano il Generatore di Descrizioni Video YouTube per creare descrizioni ricche di parole chiave che aiutano i loro video a comparire nei risultati di ricerca e video suggeriti.' },
      { title: 'Efficienza nella produzione di contenuti', description: 'Creator che pubblicano regolarmente usano lo strumento per velocizzare il processo post-produzione, generando descrizioni professionali senza passare tempo eccessivo a scriverle manualmente.' },
      { title: 'Miglioramento dell\'engagement', description: 'Creator che cercano di aumentare il tempo di visione usano descrizioni con timestamp e contenuti strutturati che aiutano gli spettatori a navigare i video e trovare le sezioni rilevanti.' },
    ],
    faqs: [
      { question: 'Perché le descrizioni video sono importanti?', answer: 'Le descrizioni video aiutano YouTube a capire di cosa tratta il tuo video per la ricerca e i suggerimenti. Forniscono anche contesto agli spettatori e possono includere link, timestamp e call to action.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Crea descrizioni per tutti i tuoi video.' },
      { question: 'Quanto dovrebbe essere lunga una descrizione video?', answer: 'YouTube permette 5.000 caratteri. Usa abbastanza per spiegare il tuo video e includere parole chiave, ma concentra le informazioni chiave nelle prime 2-3 righe che appaiono prima di "mostra altro".' },
      { question: 'Cosa dovrei mettere nelle prime righe?', answer: 'Le prime 2-3 righe sono le più importanti—appaiono nei risultati di ricerca e prima dell\'espansione. Includi: hook accattivante, parola chiave principale, e preview del valore del video.' },
      { question: 'Come funzionano i timestamp?', answer: 'I timestamp nel formato "0:00 Introduzione" creano automaticamente capitoli cliccabili. Devono iniziare da 0:00, avere almeno 3 timestamp, e ogni sezione deve essere di almeno 10 secondi.' },
      { question: 'Quali parole chiave dovrei includere?', answer: 'Includi la parola chiave principale e variazioni correlate naturalmente nella descrizione. Pensa a cosa cercherebbe qualcuno per trovare il tuo video. Lo strumento incorpora parole chiave pertinenti al tuo argomento.' },
      { question: 'Dovrei includere hashtag?', answer: 'Sì, 3-5 hashtag rilevanti. YouTube li rende cliccabili e li mostra sopra il titolo del video. Non esagerare—troppi hashtag possono sembrare spam.' },
      { question: 'Quali link dovrei aggiungere?', answer: 'Aggiungi link a: risorse menzionate nel video, i tuoi social media, video correlati, prodotti affiliati (con disclosure), e la tua pagina di iscrizione al canale.' },
      { question: 'Quanto spesso dovrei aggiornare le descrizioni?', answer: 'Aggiorna quando: aggiungi nuovi link o risorse, ottimizzi per nuove parole chiave, o correggi informazioni obsolete. I video evergreen beneficiano di aggiornamenti periodici delle descrizioni.' },
      { question: 'La descrizione influisce sul ranking del video?', answer: 'Sì, YouTube usa le descrizioni come uno dei segnali per capire l\'argomento del video. Parole chiave pertinenti nella descrizione aiutano con la ricerca e i video suggeriti.' },
    ],
  },

  'rewording-tool': {
    slug: 'rewording-tool',
    name: 'Strumento di Riformulazione',
    title: 'Strumento IA di riformulazione gratuito',
    description: 'Riformula qualsiasi testo per migliorare chiarezza, cambiare tono o evitare ripetizioni. Ottieni variazioni multiple istantaneamente.',
    metaDescription: 'Riformula qualsiasi testo per migliorare chiarezza, cambiare tono o evitare ripetizioni. Ottieni variazioni multiple istantaneamente....',
    inputLabel: 'Testo da riformulare...',
    inputPlaceholder: 'Incolla qui il testo che vuoi riformulare',
    buttonText: 'Riformula',
    maxLength: 2048,
    options: [
      { name: 'goal', label: 'Obiettivo', choices: ['Migliorare chiarezza', 'Cambiare tono', 'Semplificare', 'Rendere formale', 'Rendere informale'], default: 'Migliorare chiarezza', type: 'select' },
      { name: 'variants', label: 'Numero di varianti', choices: ['1 variante', '3 varianti', '5 varianti'], default: '3 varianti', type: 'select' },
    ],
    systemPrompt: `You are an expert editor who rewords text to achieve specific goals while preserving the original meaning.
## CORE RULES
- Preserve the exact meaning
- Achieve the specified goal
- Maintain appropriate tone
- Provide multiple variations when requested
- Each variation should use a different approach
## REWORDING APPROACHES
- Synonym replacement
- Sentence restructuring
- Voice changes (active/passive)
- Complexity adjustment
- Tone shifts
## OUTPUT FORMAT
Goal: {{goal}}
Variants: {{variants}}
Provide the reworded text with brief notes on changes made.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Miglioramento della scrittura quotidiana', description: 'Professionisti e studenti usano lo Strumento di Riformulazione per migliorare email, documenti e compiti, trovando modi migliori per esprimere le loro idee in modo più chiaro o appropriato per il contesto.' },
      { title: 'Evitare ripetizioni nei contenuti', description: 'Scrittori e content creator usano lo strumento per trovare modi alternativi di esprimere concetti ripetuti, mantenendo i testi freschi e coinvolgenti senza sacrificare chiarezza o coerenza.' },
      { title: 'Adattamento del tono', description: 'Professionisti che devono adattare messaggi per diversi pubblici usano lo strumento per trasformare testi formali in informali o viceversa, mantenendo il messaggio centrale intatto.' },
    ],
    faqs: [
      { question: 'Cos\'è la riformulazione?', answer: 'La riformulazione è il processo di esprimere lo stesso significato usando parole o strutture diverse. È utile per migliorare la chiarezza, adattare il tono, evitare ripetizioni, o rendere il testo più appropriato per un pubblico specifico.' },
      { question: 'Lo strumento è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Riformula tutto il testo di cui hai bisogno.' },
      { question: 'La riformulazione cambia il significato?', answer: 'No, lo strumento preserva il significato originale mentre cambia come è espresso. Tutte le varianti mantengono lo stesso messaggio centrale in formulazioni diverse.' },
      { question: 'Qual è la differenza tra riformulare e parafrasare?', answer: 'Sono molto simili. La riformulazione tende a essere più focalizzata su obiettivi specifici (chiarezza, tono) mentre la parafrasi è più generale. Lo strumento offre entrambi i tipi di trasformazione.' },
      { question: 'Posso specificare il tono desiderato?', answer: 'Sì, puoi selezionare obiettivi come "rendere formale", "rendere informale", o "semplificare". Lo strumento adatta l\'output di conseguenza.' },
      { question: 'Quante varianti posso ottenere?', answer: 'Lo strumento può generare da 1 a 5 varianti. Ogni variante usa un approccio leggermente diverso, dandoti opzioni tra cui scegliere.' },
      { question: 'Lo strumento funziona per qualsiasi tipo di testo?', answer: 'Sì, funziona per email, documenti, saggi, post social, contenuti web e altro. Adatta il suo approccio in base al tipo di testo e all\'obiettivo selezionato.' },
      { question: 'Posso usarlo per contenuti accademici?', answer: 'Sì, lo strumento può aiutare a riformulare testi accademici per chiarezza o per esprimere idee con parole proprie. Ricorda che le fonti originali dovrebbero comunque essere citate appropriatamente.' },
      { question: 'Come scelgo tra le varianti?', answer: 'Leggi ogni variante considerando il tuo contesto specifico: chi leggerà il testo, qual è il tono appropriato, e quale versione comunica il messaggio nel modo più efficace.' },
      { question: 'Lo strumento corregge anche errori grammaticali?', answer: 'Lo strumento può migliorare la grammatica durante la riformulazione, ma per correzioni grammaticali specifiche è meglio usare il nostro correttore grammaticale dedicato.' },
    ],
  },

  'grammar-checker': {
    slug: 'grammar-checker',
    name: 'Correttore Grammaticale',
    title: 'Correttore grammaticale IA gratuito',
    description: 'Correggi errori grammaticali, di ortografia e punteggiatura istantaneamente. Ottieni suggerimenti per migliorare la tua scrittura.',
    metaDescription: 'Correggi errori grammaticali, di ortografia e punteggiatura istantaneamente. Ottieni suggerimenti per migliorare la tua scrittura. Gratuito.',
    inputLabel: 'Testo da correggere...',
    inputPlaceholder: 'Incolla qui il testo che vuoi correggere',
    buttonText: 'Correggi Testo',
    maxLength: 4096,
    options: [
      { name: 'check_level', label: 'Livello di controllo', choices: ['Solo errori', 'Errori + miglioramenti', 'Analisi completa'], default: 'Errori + miglioramenti', type: 'select' },
      { name: 'writing_style', label: 'Stile di scrittura', choices: ['Generale', 'Formale/Accademico', 'Business', 'Informale'], default: 'Generale', type: 'select' },
    ],
    systemPrompt: `You are an expert editor and language specialist who identifies and corrects grammatical errors while providing clear explanations.
## CORE RULES
- Identify all grammatical, spelling, and punctuation errors
- Provide corrections with explanations
- Suggest improvements when relevant
- Maintain the author's voice
- Be educational—help users learn
## CHECK CATEGORIES
- Grammar (subject-verb agreement, tense, etc.)
- Spelling and typos
- Punctuation
- Word choice
- Sentence structure
- Style improvements (when requested)
## OUTPUT FORMAT
Check Level: {{check_level}}
Writing Style: {{writing_style}}
Provide:
1. Corrected text
2. List of errors with explanations
3. Suggestions for improvement (if selected)

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Revisione di documenti professionali', description: 'Professionisti usano il Correttore Grammaticale per revisionare email, report, proposte e altri documenti di lavoro prima di inviarli, assicurando comunicazione chiara e professionale.' },
      { title: 'Scrittura accademica', description: 'Studenti usano lo strumento per correggere saggi, tesi e compiti, identificando errori che potrebbero influenzare i voti e imparando dalle spiegazioni fornite.' },
      { title: 'Content creation', description: 'Blogger, copywriter e content creator usano lo strumento per assicurare che i loro contenuti siano privi di errori prima della pubblicazione, mantenendo credibilità professionale.' },
    ],
    faqs: [
      { question: 'Quali tipi di errori corregge lo strumento?', answer: 'Lo strumento corregge: errori grammaticali (concordanza, tempi verbali, ecc.), errori di ortografia, errori di punteggiatura, scelta delle parole inappropriata, e problemi di struttura delle frasi. Può anche suggerire miglioramenti di stile.' },
      { question: 'Il correttore grammaticale è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Correggi tutto il testo di cui hai bisogno.' },
      { question: 'Lo strumento spiega gli errori?', answer: 'Sì, per ogni correzione lo strumento fornisce una spiegazione del perché era un errore e della regola grammaticale applicata. Questo ti aiuta a imparare e evitare errori simili in futuro.' },
      { question: 'Posso usarlo per diversi stili di scrittura?', answer: 'Sì, puoi selezionare lo stile di scrittura (formale, business, informale, accademico) e lo strumento adatta i suoi suggerimenti di conseguenza. Ciò che è accettabile in un\'email informale potrebbe non esserlo in un documento accademico.' },
      { question: 'Lo strumento cambia il mio stile di scrittura?', answer: 'Lo strumento corregge errori mantenendo la tua voce originale. I suggerimenti di miglioramento sono opzionali e mirati a chiarezza, non a cambiare il tuo stile personale.' },
      { question: 'Quanto testo posso correggere alla volta?', answer: 'Lo strumento funziona meglio con testi fino a 1.000-2.000 parole alla volta. Per documenti più lunghi, considera di correggere sezioni separatamente per risultati migliori.' },
      { question: 'Lo strumento funziona con testo tecnico?', answer: 'Sì, anche se il vocabolario tecnico specifico del settore potrebbe non essere riconosciuto. Lo strumento si concentra sulla grammatica e struttura piuttosto che sulla terminologia specializzata.' },
      { question: 'Posso ignorare alcuni suggerimenti?', answer: 'Assolutamente. I suggerimenti sono raccomandazioni, non regole assolute. Usa il tuo giudizio, specialmente per scelte stilistiche intenzionali o linguaggio creativo.' },
      { question: 'Lo strumento corregge anche la punteggiatura?', answer: 'Sì, lo strumento identifica errori di punteggiatura inclusi: virgole mancanti o errate, punti, apostrofi, virgolette, e altra punteggiatura.' },
      { question: 'È utile per chi non è madrelingua italiano?', answer: 'Sì, molto. Le spiegazioni degli errori aiutano i non madrelingua a capire le regole grammaticali italiane e a migliorare le loro competenze linguistiche nel tempo.' },
    ],
  },

  'plagiarism-checker': {
    slug: 'plagiarism-checker',
    name: 'Rilevatore di Plagio',
    title: 'Rilevatore di plagio IA gratuito',
    description: 'Controlla il tuo contenuto per potenziale plagio e duplicazioni. Assicurati che la tua scrittura sia originale prima della pubblicazione.',
    metaDescription: 'Controlla il tuo contenuto per potenziale plagio e duplicazioni. Assicurati che la tua scrittura sia originale prima della pubblicazione....',
    inputLabel: 'Testo da controllare...',
    inputPlaceholder: 'Incolla qui il testo che vuoi verificare per originalità',
    buttonText: 'Controlla Plagio',
    maxLength: 4096,
    options: [
      { name: 'check_type', label: 'Tipo di controllo', choices: ['Controllo base', 'Controllo approfondito', 'Analisi accademica'], default: 'Controllo base', type: 'select' },
      { name: 'report_detail', label: 'Dettaglio report', choices: ['Riassunto', 'Dettagliato'], default: 'Dettagliato', type: 'radio' },
    ],
    systemPrompt: `You are an academic integrity specialist who analyzes text for potential plagiarism indicators and writing patterns that suggest non-original content.
## CORE RULES
- Analyze AI text for patterns suggesting copied content
- Look for style inconsistencies
- Check for common plagiarism indicators
- Provide constructive feedback
- Be fair and avoid false accusations
## ANALYSIS AREAS
- Style consistency throughout text
- Vocabulary level consistency
- Sentence structure patterns
- Topic flow and coherence
- Common phrases that might be copied
## OUTPUT FORMAT
Check Type: {{check_type}}
Report Detail: {{report_detail}}
Provide:
1. Overall originality assessment
2. Potential issues identified
3. Recommendations for improvement

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Verifica pre-consegna accademica', description: 'Studenti usano il Rilevatore di Plagio per verificare i loro saggi e compiti prima della consegna, assicurandosi che il loro lavoro sia sufficientemente originale e che le citazioni siano gestite correttamente.' },
      { title: 'Controllo qualità contenuti', description: 'Editori e content manager usano lo strumento per verificare l\'originalità dei contenuti ricevuti da freelancer o collaboratori prima della pubblicazione.' },
      { title: 'Verifica contenuti SEO', description: 'Specialisti SEO usano lo strumento per assicurarsi che i contenuti del sito siano originali, evitando penalità dei motori di ricerca per contenuti duplicati.' },
    ],
    faqs: [
      { question: 'Come funziona il rilevatore di plagio?', answer: 'Lo strumento analizza il testo per pattern che suggeriscono contenuto non originale: inconsistenze di stile, variazioni nel livello di vocabolario, e frasi che potrebbero essere copiate. Fornisce un\'analisi basata su questi indicatori.' },
      { question: 'Il rilevatore di plagio è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Controlla tutto il testo di cui hai bisogno.' },
      { question: 'Il tool confronta con database online?', answer: 'Lo strumento analizza pattern nel testo stesso per indicatori di plagio. Per controlli contro database web specifici, strumenti dedicati come Turnitin possono essere più appropriati per contesti accademici formali.' },
      { question: 'Quanto è accurato il rilevamento?', answer: 'Lo strumento identifica indicatori di potenziale plagio basandosi su pattern testuali. Nessun rilevatore è accurato al 100%. I risultati dovrebbero essere usati come guida, non come verdetto definitivo.' },
      { question: 'Cosa indica un "alto rischio" di plagio?', answer: 'Alto rischio indica pattern significativi che suggeriscono contenuto potenzialmente copiato: forti inconsistenze di stile, frasi che sembrano non originali, o altre bandiere rosse. Richiede revisione attenta del contenuto.' },
      { question: 'Posso usarlo per contenuti accademici?', answer: 'Sì, lo strumento può aiutare studenti a verificare i loro lavori prima della consegna. Per controlli ufficiali, le istituzioni accademiche spesso usano strumenti specifici come Turnitin.' },
      { question: 'Lo strumento memorizza il mio testo?', answer: 'No, il testo viene analizzato in tempo reale e non viene memorizzato. Il tuo contenuto rimane privato e non viene usato per altri scopi.' },
      { question: 'Cosa devo fare se il mio testo viene segnalato?', answer: 'Rivedi le sezioni segnalate. Se hai usato fonti, assicurati di citarle correttamente. Se è lavoro originale, considera di riformulare le sezioni problematiche per evitare somiglianze involontarie.' },
      { question: 'Il plagio accidentale è possibile?', answer: 'Sì, è possibile scrivere qualcosa che somiglia inconsapevolmente a contenuto esistente. Lo strumento aiuta a identificare queste situazioni così puoi riformulare prima della pubblicazione.' },
      { question: 'Quanto testo posso controllare?', answer: 'Lo strumento funziona meglio con testi di lunghezza ragionevole (500-2.000 parole). Per documenti molto lunghi, considera di controllare sezioni separatamente.' },
    ],
  },

  'blog-post-ideas-generator': {
    slug: 'blog-post-ideas-generator',
    name: 'Generatore di Idee per Post Blog',
    title: 'Generatore IA di idee per post di blog gratuito',
    description: 'Genera idee creative e strategiche per post blog nella tua nicchia. Ottieni titoli, angoli e approcci unici per il tuo contenuto.',
    metaDescription: 'Genera idee creative e strategiche per post blog nella tua nicchia. Ottieni titoli, angoli e approcci unici per il tuo contenuto. Gratuito.',
    inputLabel: 'La tua nicchia o argomento...',
    inputPlaceholder: 'es. Marketing digitale per piccole imprese italiane',
    buttonText: 'Genera Idee',
    maxLength: 2048,
    options: [
      { name: 'number_of_ideas', label: 'Numero di idee', choices: ['5 idee', '10 idee', '20 idee'], default: '10 idee', type: 'select' },
      { name: 'content_type', label: 'Tipo di contenuto', choices: ['Mix variato', 'How-to/Tutorial', 'Listicle', 'Guide approfondite', 'Opinione/Thought leadership'], default: 'Mix variato', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Formale', 'Informale', 'Persuasivo'], default: 'Formale', type: 'select' },
    ],
    systemPrompt: `You are a content strategist who generates strategic, SEO-friendly blog post ideas with unique angles.
## CORE RULES
- Each idea must have a unique angle
- Include SEO potential consideration
- Provide complete concept with approach
- Mix content types for variety
- Make ideas actionable and specific
## IDEA COMPONENTS
For each idea provide:
1. Title (compelling, SEO-aware)
2. Angle (what makes it unique)
3. Target keyword concept
4. Content type (how-to, listicle, etc.)
5. Audience (who would read this)
## OUTPUT FORMAT
Number of Ideas: {{number_of_ideas}}
Content Type Focus: {{content_type}}
Tone: {{tone}}
Generate blog post ideas with all components.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Pianificazione del calendario editoriale', description: 'Blogger e team di marketing usano il Generatore di Idee per Post Blog per popolare i loro calendari editoriali con idee strategiche e diversificate che coprono vari argomenti nella loro nicchia.' },
      { title: 'Superare il blocco dello scrittore', description: 'Creator che si sentono bloccati usano lo strumento per generare nuove idee e angoli che non avevano considerato, riaccendendo la creatività e trovando nuove direzioni per i contenuti.' },
      { title: 'Strategia di contenuti SEO', description: 'Specialisti SEO usano il generatore per identificare opportunità di contenuto che potrebbero posizionarsi bene nella ricerca, con angoli che si differenziano dalla concorrenza esistente.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di idee per post blog?', answer: 'È uno strumento IA che crea concetti completi per post blog basati sulla tua nicchia. A differenza di semplici generatori di titoli, fornisce angoli unici, approcci al contenuto, e considerazioni strategiche per ogni idea.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le idee di cui hai bisogno.' },
      { question: 'Le idee sono ottimizzate per la SEO?', answer: 'Sì, ogni idea include considerazioni SEO come concetti di parole chiave target e angoli che potrebbero differenziarsi nei risultati di ricerca. Dovresti comunque fare ricerca di parole chiave per confermare il potenziale.' },
      { question: 'Quante idee dovrei generare?', answer: 'Genera abbastanza per avere varietà—tipicamente 10-20 idee. Da lì, seleziona le migliori basandoti sui tuoi obiettivi, risorse disponibili, e potenziale di posizionamento.' },
      { question: 'Come scelgo le idee migliori da sviluppare?', answer: 'Considera: rilevanza per il tuo pubblico, potenziale di posizionamento per le parole chiave target, allineamento con i tuoi obiettivi di business, e risorse disponibili per creare il contenuto. Non ogni idea sarà adatta.' },
      { question: 'Posso personalizzare il tipo di idee?', answer: 'Sì, puoi selezionare tipi di contenuto specifici (how-to, listicle, guide) o chiedere un mix variato. Puoi anche specificare il tono desiderato.' },
      { question: 'Lo strumento considera la mia nicchia specifica?', answer: 'Sì, le idee sono generate basandosi sulla nicchia o argomento che fornisci. Più contesto dai, più rilevanti e specifiche saranno le idee.' },
      { question: 'Dovrei usare tutte le idee generate?', answer: 'No, tratta le idee come un menu di opzioni. Valuta ogni idea rispetto ai tuoi obiettivi specifici e seleziona quelle più adatte. Alcune idee potrebbero ispirare variazioni ancora migliori.' },
      { question: 'Le idee sono uniche o generate per altri?', answer: 'Le idee sono generate in base al tuo input specifico. Tuttavia, concetti simili potrebbero esistere—l\'unicità vera viene dal tuo angolo, esecuzione, e voce unica nel contenuto finale.' },
      { question: 'Quanto spesso dovrei generare nuove idee?', answer: 'La maggior parte dei team di contenuti beneficia di sessioni di generazione idee mensili o trimestrali. Costruisci un arretrato di idee da cui attingere, e aggiornalo regolarmente per rimanere rilevante.' },
    ],
  },

  // ==================== BATCH 5: Tools 41-46 ====================

  'emoji-translator': {
    slug: 'emoji-translator',
    name: 'Traduttore Emoji',
    title: 'Traduttore di testo in emoji IA gratuito',
    description: 'Trasforma testo in emoji o traduci emoji in testo. Perfetto per messaggi divertenti e comunicazione creativa.',
    metaDescription: 'Trasforma testo in emoji o traduci emoji in testo. Perfetto per messaggi divertenti e comunicazione creativa. Gratuito.',
    inputLabel: 'Testo o emoji da tradurre...',
    inputPlaceholder: 'es. Sono molto felice oggi! oppure 😀🎉🎊',
    buttonText: 'Traduci',
    maxLength: 1024,
    options: [
      { name: 'direction', label: 'Direzione', choices: ['Testo → Emoji', 'Emoji → Testo', 'Misto (aggiungi emoji)'], default: 'Testo → Emoji', type: 'select' },
      { name: 'style', label: 'Stile', choices: ['Divertente', 'Minimalista', 'Esagerato'], default: 'Divertente', type: 'select' },
    ],
    systemPrompt: `You are an emoji expert who translates between text and emoji in creative and accurate ways.
## CORE RULES
- Match emoji to meaning accurately
- Be creative but understandable
- Consider cultural emoji meanings
- Maintain the original message intent
## TRANSLATION MODES
### Text → Emoji
- Replace words with matching emoji
- Keep flow and readability
- Use combinations for complex concepts
### Emoji → Text
- Interpret emoji meaning in context
- Provide natural language translation
- Consider emoji combinations
### Mixed (Add emoji)
- Enhance text with relevant emoji
- Don't overdo it
- Place emoji naturally
## OUTPUT FORMAT
Direction: {{direction}}
Style: {{style}}
Provide the translation with explanation of choices.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Messaggi social divertenti', description: 'Utenti che vogliono rendere i loro messaggi più espressivi usano il Traduttore Emoji per trasformare testo ordinario in versioni ricche di emoji che catturano l\'attenzione e trasmettono emozioni.' },
      { title: 'Comprensione di messaggi emoji', description: 'Chi riceve messaggi pieni di emoji e fatica a interpretarli usa lo strumento per tradurre combinazioni di emoji in testo comprensibile.' },
      { title: 'Content creation giocoso', description: 'Creator di contenuti usano lo strumento per aggiungere personalità ai loro post social, creando versioni emoji di messaggi o combinazioni creative.' },
    ],
    faqs: [
      { question: 'Come funziona il traduttore emoji?', answer: 'Lo strumento analizza il testo e lo converte in emoji corrispondenti, o interpreta sequenze di emoji e le traduce in testo. Considera il significato, il contesto e le combinazioni comuni di emoji.' },
      { question: 'Il traduttore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Traduci quanto vuoi.' },
      { question: 'Posso tradurre in entrambe le direzioni?', answer: 'Sì, puoi tradurre testo in emoji o emoji in testo. C\'è anche un\'opzione "mista" che aggiunge emoji al tuo testo senza sostituire le parole.' },
      { question: 'Le traduzioni sono sempre accurate?', answer: 'Lo strumento fa del suo meglio per abbinare emoji ai significati, ma gli emoji possono avere interpretazioni diverse. Le traduzioni sono pensate per essere divertenti e approssimativamente accurate, non perfettamente letterali.' },
      { question: 'Funziona con tutti gli emoji?', answer: 'Lo strumento riconosce la maggior parte degli emoji comuni. Emoji molto nuovi o oscuri potrebbero non essere interpretati correttamente. Le combinazioni standard funzionano meglio.' },
      { question: 'Posso usarlo per messaggi di lavoro?', answer: 'Lo strumento è ottimizzato per comunicazione informale e divertente. Per messaggi professionali, l\'uso di emoji dovrebbe essere moderato e appropriato al contesto.' },
      { question: 'Gli emoji hanno gli stessi significati ovunque?', answer: 'Non sempre. Alcuni emoji hanno significati diversi in culture diverse. Lo strumento usa interpretazioni generalmente accettate, ma sii consapevole delle differenze culturali.' },
      { question: 'Quanto testo posso tradurre?', answer: 'Lo strumento funziona meglio con frasi o messaggi brevi. Testi molto lunghi potrebbero produrre risultati meno coerenti.' },
      { question: 'Posso copiare i risultati?', answer: 'Sì, puoi copiare il testo tradotto o gli emoji generati per usarli altrove—messaggi, social media, email informali, ecc.' },
      { question: 'Lo strumento inventa significati per gli emoji?', answer: 'Lo strumento interpreta gli emoji basandosi su significati comunemente accettati e contesto. Per combinazioni insolite, cerca di dedurre il significato inteso in modo ragionevole.' },
    ],
  },

  'brand-name-generator': {
    slug: 'brand-name-generator',
    name: 'Generatore di Nomi di Brand',
    title: 'Generatore IA di nomi di brand gratuito',
    description: 'Genera nomi di brand unici e memorabili istantaneamente. La nostra IA crea nomi distintivi con significato strategico per la tua identità aziendale.',
    metaDescription: 'Genera nomi di brand unici e memorabili istantaneamente. La nostra IA crea nomi distintivi con significato strategico per la tua identità...',
    inputLabel: 'Descrivi il tuo brand...',
    inputPlaceholder: 'es. Brand di moda sostenibile che mira a millennial eco-consapevoli',
    buttonText: 'Genera Nomi',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'Numero di nomi', choices: ['3 nomi', '5 nomi', '10 nomi'], default: '5 nomi', type: 'select' },
      { name: 'tone', label: 'Tono del brand', choices: ['Formale/Professionale', 'Informale/Amichevole', 'Innovativo/Tech', 'Lusso/Premium'], default: 'Formale/Professionale', type: 'select' },
      { name: 'explain_meaning', label: 'Spiega il significato', choices: ['Sì', 'No'], default: 'Sì', type: 'radio' },
    ],
    systemPrompt: `You are an expert brand strategist and naming specialist who creates memorable, distinctive brand names that resonate with target audiences.
## CORE NAMING PRINCIPLES
1. Memorability: Names must be easy to remember
2. Distinctiveness: Names must stand out
3. Scalability: Names should allow business evolution
4. Domain/Trademark Viability: Consider availability
5. Emotional Resonance: Names should evoke appropriate feelings
## BRAND NAME CATEGORIES
- Invented/Coined: New words (Kodak, Spotify)
- Descriptive: What the business does
- Evocative: Suggest qualities (Amazon, Nike)
- Founder/Personal: Based on people
- Compound: Combining words (Facebook, Instagram)
## OUTPUT FORMAT
Tone: {{tone}}
Number: {{number_of_variants}}
Explain: {{explain_meaning}}
For each name provide: the name, category, meaning, and why it fits.

IMPORTANT: Generate names that work well in Italian market context.`,
    useCases: [
      { title: 'Naming di startup e nuove imprese', description: 'Fondatori e imprenditori usano il Generatore di Nomi di Brand durante le fasi critiche iniziali della formazione aziendale. Un nome di brand forte influisce su tutto, dalla registrazione del marchio alla percezione dei clienti.' },
      { title: 'Sviluppo di linee di prodotto e sub-brand', description: 'Aziende affermate che lanciano nuove linee di prodotto o sub-brand usano il generatore per creare nomi che complementano la loro architettura di brand esistente.' },
      { title: 'Iniziative di rebranding', description: 'Aziende che attraversano pivot strategici, fusioni o refresh di reputazione usano il generatore per esplorare nuove direzioni di naming.' },
    ],
    faqs: [
      { question: 'Cos\'è un generatore di nomi di brand?', answer: 'È uno strumento IA che crea potenziali nomi aziendali e di brand basati sulla tua descrizione, settore e posizionamento desiderato. Applica principi di naming strategy considerando fattori come memorabilità, viabilità per trademark, e posizionamento di mercato.' },
      { question: 'Come ottengo suggerimenti migliori?', answer: 'Più contesto fornisci, migliori i risultati. Invece di "un\'azienda tech", descrivi "una piattaforma SaaS B2B che aiuta piccoli studi legali ad automatizzare l\'intake clienti, rivolta a praticanti individuali in Italia."' },
      { question: 'I nomi generati sono disponibili per trademark?', answer: 'I nomi sono suggerimenti che richiedono verifica indipendente. Prima di impegnarti, dovresti fare ricerche di trademark, controllare la disponibilità di dominio, e idealmente consultare un avvocato specializzato.' },
      { question: 'Cosa rende un buon nome di brand?', answer: 'Nomi forti sono: memorabili, distintivi, pronunciabili, scrivibili, scalabili, e significativi. I migliori nomi spesso diventano verbi o riferimenti culturali.' },
      { question: 'Il mio nome dovrebbe descrivere cosa faccio?', answer: 'Non necessariamente. I brand di maggior valore usano spesso nomi evocativi o inventati: Apple, Amazon, Nike. Questi funzionano perché il branding forte costruisce significato nel tempo.' },
      { question: 'Come funzionano i nomi inventati/coniati?', answer: 'Sono parole create senza significato precedente (come Kodak, Spotify). Sono costruiti usando principi linguistici che rendono le parole piacevoli e memorabili. Il vantaggio è massima distintività e forza di trademark.' },
      { question: 'Dovrei controllare la disponibilità del dominio?', answer: 'Sì—la disponibilità del dominio è una considerazione pratica importante. Tuttavia, non lasciare che sia l\'unico filtro. Molti brand di successo usano variazioni o estensioni alternative.' },
      { question: 'Quanti nomi dovrei generare prima di decidere?', answer: 'Genera abbastanza per vedere pattern e possibilità—solitamente 15-30 opzioni in più sessioni. Poi restringi a 5-10 finalisti per test e feedback prima di selezionare.' },
      { question: 'Il generatore può creare nomi per qualsiasi settore?', answer: 'Sì, si adatta a qualsiasi settore. Fornisci contesto sulle convenzioni di naming del tuo settore e se vuoi adattarti o distinguerti.' },
      { question: 'Cosa dovrei fare dopo aver generato nomi?', answer: 'Identifica i candidati promettenti, conduci ricerche di trademark, controlla disponibilità di dominio e social handle, testa la pronuncia, ricerca il nome in altre lingue, e ottieni feedback dal pubblico target.' },
    ],
  },

  'business-name-generator': {
    slug: 'business-name-generator',
    name: 'Generatore di Nomi Aziendali',
    title: 'Generatore IA di nomi aziendali gratuito',
    description: 'Genera nomi aziendali creativi che funzionano nel mondo reale. La nostra IA crea nomi professionali e memorabili per qualsiasi settore.',
    metaDescription: 'Genera nomi aziendali creativi che funzionano nel mondo reale. La nostra IA crea nomi professionali e memorabili per qualsiasi settore.',
    inputLabel: 'Descrivi la tua attività...',
    inputPlaceholder: 'es. Studio di architettura specializzato in ristrutturazioni sostenibili a Milano',
    buttonText: 'Genera Nomi',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'Numero di nomi', choices: ['3 nomi', '5 nomi', '10 nomi'], default: '5 nomi', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Formale/Corporate', 'Informale/Amichevole', 'Innovativo/Moderno'], default: 'Formale/Corporate', type: 'select' },
      { name: 'explain_meaning', label: 'Spiega il significato', choices: ['Sì', 'No'], default: 'Sì', type: 'radio' },
    ],
    systemPrompt: `You are an expert business naming consultant who creates practical, memorable business names that work in the real world.
## CORE PRINCIPLES
1. Commercial Viability: Names must work in actual business contexts
2. Industry Appropriateness: Names should fit expectations while differentiating
3. Local vs Scale: Names should match geographic ambitions
4. Practical Memorability: Easy to remember, spell, and share
5. Longevity: Names should remain relevant as business evolves
## BUSINESS NAME CATEGORIES
- Functional/Descriptive: Clearly indicate business type
- Founder/Personal: Incorporating owner's name
- Abstract/Evocative: Suggest qualities without literal description
- Location-Based: Geographic elements
- Invented/Modern: Created words
## OUTPUT FORMAT
Tone: {{tone}}
Number: {{number_of_variants}}
Explain: {{explain_meaning}}
For each name provide: name, style, rationale, and best use case.

IMPORTANT: Generate names that work well in Italian business context.`,
    useCases: [
      { title: 'Registrazione nuova attività', description: 'Imprenditori nel processo di formazione aziendale usano il Generatore di Nomi Aziendali per trovare nomi prima della registrazione. Poiché la disponibilità varia, avere più opzioni forti è essenziale.' },
      { title: 'Naming per franchise e multi-sede', description: 'Imprenditori che pianificano di scalare attraverso franchising o sedi multiple usano il generatore per trovare nomi che funzionano in diversi mercati.' },
      { title: 'Pivot o rebranding', description: 'Attività consolidate che attraversano cambiamenti strategici usano il generatore per esplorare opzioni di rebranding quando il nome attuale non serve più al meglio.' },
    ],
    faqs: [
      { question: 'Qual è la differenza tra nome di brand e nome aziendale?', answer: 'Il nome aziendale è la denominazione legale—quello che appare su registrazioni e documenti fiscali. Il nome di brand è come i clienti ti conoscono—può essere lo stesso o diverso dal nome legale.' },
      { question: 'Il mio nome aziendale dovrebbe descrivere cosa faccio?', answer: 'Dipende dal modello e obiettivi. Nomi descrittivi ("Idraulica Milano") forniscono chiarezza immediata. Per attività che pianificano di scalare, nomi più astratti possono essere preferibili.' },
      { question: 'Come verifico se un nome è disponibile?', answer: 'Controlla: il registro delle imprese per registrazioni esistenti, i database dei marchi, la disponibilità del dominio, Google per vedere chi usa nomi simili, e i social media.' },
      { question: 'Dovrei includere la località nel nome?', answer: 'Può rafforzare l\'identità locale e aiutare con la SEO locale, ma potrebbe limitare la percezione di portata se ti espandi. Considera i tuoi piani a lungo termine.' },
      { question: 'Quanto è importante avere un dominio corrispondente?', answer: 'Importante ma non essenziale. Molte attività di successo usano variazioni (.it, .eu) o prefissi/suffissi. Il .com esatto è prezioso ma non obbligatorio.' },
      { question: 'Posso usare il mio nome personale?', answer: 'Sì—nomi personali sono un approccio classico, specialmente per servizi professionali. Considera però: leghi l\'attività alla tua identità personale? Cosa succede se vendi o aggiungi soci?' },
      { question: 'Cosa rende un nome aziendale memorabile?', answer: 'Nomi memorabili sono: corti (1-3 parole), facili da pronunciare e scrivere, foneticamente piacevoli, e portano un significato o gancio.' },
      { question: 'Come testo un nome prima di impegnarmi?', answer: 'Testa: dicendolo ad alta voce in diversi contesti, chiedendo ad altri di scriverlo dopo averlo sentito, vedendo come appare in un mockup logo, cercando quali associazioni potrebbe avere.' },
      { question: 'Dovrei evitare nomi simili ai concorrenti?', answer: 'Generalmente sì. Nomi simili creano confusione e potenziali problemi legali. Cerca i concorrenti nel tuo mercato prima di finalizzare.' },
      { question: 'Posso cambiare nome aziendale in seguito?', answer: 'Puoi, ma comporta costi: spese di ri-registrazione, nuovi materiali di marketing, potenzialmente nuovi domini, e ri-educazione dei clienti. È meglio scegliere bene dall\'inizio.' },
    ],
  },

  'product-name-generator': {
    slug: 'product-name-generator',
    name: 'Generatore di Nomi Prodotto',
    title: 'Generatore IA di nomi prodotto gratuito',
    description: 'Genera nomi prodotto creativi che vendono. La nostra IA crea nomi memorabili e pronti per il mercato che si distinguono sugli scaffali e nelle menti dei clienti.',
    metaDescription: 'Genera nomi prodotto creativi che vendono. La nostra IA crea nomi memorabili e pronti per il mercato che si distinguono sugli scaffali e...',
    inputLabel: 'Descrivi il tuo prodotto...',
    inputPlaceholder: 'es. Proteine vegetali in polvere per appassionati di fitness',
    buttonText: 'Genera Nomi',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: 'Numero di nomi', choices: ['3 nomi', '5 nomi', '10 nomi'], default: '5 nomi', type: 'select' },
      { name: 'tone', label: 'Tono prodotto', choices: ['Premium/Lusso', 'Divertente/Giocoso', 'Professionale/Tecnico', 'Naturale/Organico'], default: 'Premium/Lusso', type: 'select' },
      { name: 'explain_meaning', label: 'Spiega il significato', choices: ['Sì', 'No'], default: 'Sì', type: 'radio' },
    ],
    systemPrompt: `You are an expert product naming strategist who creates compelling product names that drive recognition, recall, and purchase decisions.
## CORE PRINCIPLES
1. Shelf Impact: Names must stand out in crowded environments
2. Benefit Suggestion: Names should hint at what the product delivers
3. Target Audience Fit: Names must resonate with specific buyers
4. Verbal Shareability: Names should spread naturally
5. Brand Architecture: Names should work within brand portfolios
## PRODUCT NAME CATEGORIES
- Descriptive: Directly describe function
- Evocative: Suggest benefits/feelings
- Invented/Coined: Created words
- Alphanumeric: Letters, numbers
- Founder/Character: Based on people
- Compound/Blend: Combining concepts
## OUTPUT FORMAT
Tone: {{tone}}
Number: {{number_of_variants}}
Explain: {{explain_meaning}}
For each name: name, category, meaning, market fit, usage notes.

IMPORTANT: Generate names that work well in Italian market context.`,
    useCases: [
      { title: 'Preparazione lancio nuovo prodotto', description: 'Product manager e team di marketing usano il Generatore di Nomi Prodotto durante la fase critica di naming prima del lancio. Un nome forte può fare la differenza tra successo e oscurità.' },
      { title: 'Estensione linea prodotti', description: 'Aziende che espandono linee di prodotto esistenti usano il generatore per creare nomi per nuove varianti che si collegano al prodotto parent distinguendo la nuova offerta.' },
      { title: 'Sviluppo prodotti private label', description: 'Retailer che creano prodotti a marchio proprio usano il generatore per nominare prodotti che competono con brand affermati senza i budget marketing delle grandi aziende.' },
    ],
    faqs: [
      { question: 'Cosa rende un buon nome prodotto?', answer: 'Nomi efficaci sono: memorabili, significativi (suggeriscono benefici), pronunciabili, distintivi, e appropriati per categoria e pubblico target. I migliori nomi spesso diventano sinonimi della categoria.' },
      { question: 'Il mio nome prodotto dovrebbe descrivere cosa fa?', answer: 'Dipende dalla strategia. Nomi descrittivi forniscono chiarezza istantanea. Nomi suggestivi permettono protezione trademark. Nomi inventati sono più distintivi ma richiedono più marketing.' },
      { question: 'Come nomino prodotti in una linea?', answer: 'L\'architettura di linea segue tipicamente uno di questi pattern: branded house (tutti condividono il brand), endorsed brands (sub-brand con endorsement parent), house of brands (nomi distinti).' },
      { question: 'Dovrei registrare il marchio del mio nome prodotto?', answer: 'Per prodotti in cui investi significativamente, sì. La registrazione fornisce protezione legale. Fai una ricerca di trademark e considera di consultare un avvocato specializzato prima di lanciare.' },
      { question: 'Come testo un nome prodotto prima del lancio?', answer: 'Testa attraverso: focus group con clienti target, A/B testing in pubblicità digitale, test di pronuncia con pubblici diversi, test di posizionamento competitivo. Per lanci importanti, la ricerca professionale vale l\'investimento.' },
      { question: 'E se il mio nome prodotto è simile a un concorrente?', answer: 'Nomi simili creano confusione e potenziali problemi legali. Cerca approfonditamente prima di impegnarti. Se scopri somiglianze tardi, valuta: quanto è simile davvero? Come proteggono il loro marchio?' },
      { question: 'Quanto dovrebbe essere lungo un nome prodotto?', answer: 'Più corto è meglio—una a tre sillabe ideale per ricordo e packaging. Tuttavia, l\'efficacia conta più della lunghezza.' },
      { question: 'Posso usare parole straniere o inventate?', answer: 'Sì—entrambe sono strategie comuni. Le parole straniere possono suggerire origine o associazioni specifiche. Le parole inventate forniscono massima distintività. Assicurati che siano pronunciabili nei tuoi mercati target.' },
      { question: 'Come nomino prodotti per mercati internazionali?', answer: 'Verifica i nomi per significati problematici nelle lingue target, testa la pronuncia nei vari mercati, considera se il nome dovrebbe tradursi o rimanere consistente globalmente.' },
      { question: 'E se devo rinominare un prodotto esistente?', answer: 'Il rinominare comporta costi ma può essere necessario per ragioni legali, riposizionamento, o associazioni negative. Esegui attentamente: comunica il cambio chiaramente, mantieni segnali visivi durante la transizione.' },
    ],
  },

  'website-copy-generator': {
    slug: 'website-copy-generator',
    name: 'Generatore di Copy per Siti Web',
    title: 'Generatore IA di copy per siti web gratuito',
    description: 'Crea copy per siti web che converte visitatori in clienti. Genera testi persuasivi per homepage, pagine about, servizi e altro.',
    metaDescription: 'Crea copy per siti web che converte visitatori in clienti. Genera testi persuasivi per homepage, pagine about, servizi e altro. Gratuito.',
    inputLabel: 'Descrivi il tuo sito web o pagina...',
    inputPlaceholder: 'es. Homepage per agenzia di web design che serve piccole imprese locali',
    buttonText: 'Genera Copy',
    maxLength: 2048,
    options: [
      { name: 'page_type', label: 'Tipo di pagina', choices: ['Homepage', 'Pagina About', 'Pagina Servizi', 'Pagina Prodotto', 'Pagina Contatti', 'Landing Page'], default: 'Homepage', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Amichevole', 'Premium/Lusso', 'Tecnico'], default: 'Professionale', type: 'select' },
      { name: 'length', label: 'Lunghezza', choices: ['Breve (200 parole)', 'Media (400 parole)', 'Completa (600+ parole)'], default: 'Media (400 parole)', type: 'select' },
    ],
    systemPrompt: `You are an expert conversion copywriter who creates website copy that turns visitors into customers.
## CORE RULES
- Lead with benefits, not features
- Write for scanners (short paragraphs, clear headings)
- Include social proof strategically
- Clear call to action on every page
- Match copy to page purpose
## PAGE-SPECIFIC APPROACHES
### Homepage
- Hero: Clear value proposition
- Problem/Solution framework
- Key benefits
- Social proof
- CTA
### About Page
- Brand story
- Mission/Values
- Team/Expertise
- Why choose us
### Services Page
- Problem awareness
- Service benefits
- Process explanation
- Pricing/Packages hints
- CTA
## OUTPUT FORMAT
Page Type: {{page_type}}
Tone: {{tone}}
Length: {{length}}
Provide complete page copy organized by section.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Lancio di nuovi siti web', description: 'Imprenditori e piccole imprese che lanciano nuovi siti usano il Generatore di Copy per creare testi professionali che comunicano chiaramente il valore e incoraggiano l\'azione senza dover assumere copywriter.' },
      { title: 'Refresh e ottimizzazione siti esistenti', description: 'Proprietari di siti che cercano di migliorare conversioni usano lo strumento per riscrivere pagine con copy più efficace, testando nuovi approcci di messaging.' },
      { title: 'Scaling della produzione di contenuti web', description: 'Agenzie web e freelancer usano il generatore per velocizzare la produzione di copy per progetti clienti, ottenendo bozze professionali da personalizzare.' },
    ],
    faqs: [
      { question: 'Quali tipi di pagine web posso generare?', answer: 'Lo strumento genera copy per: homepage, pagine about, pagine servizi, pagine prodotto, pagine contatti, landing page. Ogni tipo segue best practice specifiche per la conversione.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Crea copy per tutte le pagine di cui hai bisogno.' },
      { question: 'Il copy è ottimizzato per SEO?', answer: 'Il copy è scritto per essere chiaro e persuasivo, incorporando naturalmente parole chiave rilevanti. Per ottimizzazione SEO specifica, puoi menzionare le tue parole chiave target nell\'input.' },
      { question: 'Quanto copy viene generato?', answer: 'Dipende dalla lunghezza selezionata: breve (~200 parole), media (~400 parole), o completa (600+ parole). La lunghezza è adattata al tipo di pagina e alle best practice.' },
      { question: 'Devo modificare il copy generato?', answer: 'Raccomandiamo di personalizzare il copy per il tuo brand specifico: aggiungi dettagli unici, adatta il tono alla tua voce, e inserisci prove sociali reali come testimonianze e casi studio.' },
      { question: 'Il copy funziona per qualsiasi settore?', answer: 'Sì, lo strumento si adatta a qualsiasi settore. Fornisci contesto dettagliato sulla tua attività e pubblico target per risultati più personalizzati.' },
      { question: 'Come struttura il copy la homepage?', answer: 'Le homepage seguono una struttura provata: hero con proposta di valore, sezione problema/soluzione, benefici chiave, prova sociale, e call to action. Lo strumento organizza il contenuto in queste sezioni.' },
      { question: 'Posso generare copy per più pagine?', answer: 'Sì, genera copy per ogni pagina separatamente selezionando il tipo appropriato. Questo assicura che ogni pagina sia ottimizzata per il suo scopo specifico.' },
      { question: 'Il copy include call to action?', answer: 'Sì, ogni pagina include CTA appropriate posizionate strategicamente. Le CTA sono adattate al tipo di pagina e all\'obiettivo di conversione.' },
      { question: 'Come rendo il copy più persuasivo?', answer: 'Aggiungi: testimonianze reali, dati specifici e risultati, garanzie, elementi di urgenza quando appropriato, e assicurati che ogni sezione abbia un chiaro beneficio per il lettore.' },
    ],
  },

  'social-media-caption-generator': {
    slug: 'social-media-caption-generator',
    name: 'Generatore di Didascalie Social Media',
    title: 'Generatore IA di didascalie social gratuito',
    description: 'Crea didascalie coinvolgenti per qualsiasi piattaforma social. Genera copy perfetto che guida like, commenti e condivisioni.',
    metaDescription: 'Crea didascalie coinvolgenti per qualsiasi piattaforma social. Genera copy perfetto che guida like, commenti e condivisioni. Gratuito.',
    inputLabel: 'Descrivi il tuo post...',
    inputPlaceholder: 'es. Foto del team durante un evento aziendale, celebriamo il raggiungimento di un traguardo',
    buttonText: 'Genera Didascalia',
    maxLength: 2048,
    options: [
      { name: 'platform', label: 'Piattaforma', choices: ['Instagram', 'LinkedIn', 'Twitter/X', 'Facebook', 'TikTok', 'Multi-piattaforma'], default: 'Multi-piattaforma', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Informale/Amichevole', 'Divertente', 'Ispirazionale', 'Informativo'], default: 'Professionale', type: 'select' },
      { name: 'length', label: 'Lunghezza', choices: ['Corta (1-2 frasi)', 'Media (3-4 frasi)', 'Lunga (storytelling)'], default: 'Media (3-4 frasi)', type: 'select' },
    ],
    systemPrompt: `You are a social media expert who creates platform-optimized captions that maximize engagement.
## CORE RULES
- Match tone to platform culture
- Hook in the first line
- Include engagement trigger
- Respect platform character limits
- Strategic hashtag placement
## PLATFORM SPECIFICS
- Instagram: Up to 2200 chars, hashtags important
- LinkedIn: Professional tone, no hashtags in main text
- Twitter: 280 chars max, concise
- Facebook: Conversational, medium length
- TikTok: Short, punchy, trend-aware
## CAPTION STRUCTURE
1. Hook (attention grabber)
2. Context/Story
3. Value/Insight
4. Engagement prompt (question, CTA)
5. Hashtags (platform dependent)
## OUTPUT FORMAT
Platform: {{platform}}
Tone: {{tone}}
Length: {{length}}
Generate caption with engagement elements.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Gestione quotidiana dei social media', description: 'Social media manager e creator usano il Generatore di Didascalie per produrre copy coinvolgente per i post quotidiani su tutte le piattaforme, mantenendo qualità consistente anche con orari impegnativi.' },
      { title: 'Account aziendali e brand', description: 'Team di marketing usano lo strumento per creare didascalie che bilanciano voce professionale del brand con stile nativo della piattaforma, mantenendo gli account aziendali freschi e coinvolgenti.' },
      { title: 'Produzione contenuti in batch', description: 'Creator che preparano contenuti in anticipo usano il generatore per creare didascalie multiple in una sessione, permettendo produzione efficiente mantenendo qualità su molti post.' },
    ],
    faqs: [
      { question: 'Per quali piattaforme funziona lo strumento?', answer: 'Lo strumento genera didascalie ottimizzate per Instagram, LinkedIn, Twitter/X, Facebook, TikTok, e può creare versioni multi-piattaforma adattate alle convenzioni di ciascuna.' },
      { question: 'Il generatore è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta. Genera tutte le didascalie di cui hai bisogno.' },
      { question: 'Le didascalie sono ottimizzate per ogni piattaforma?', answer: 'Sì, lo strumento adatta lunghezza, tono, struttura e uso degli hashtag alle best practice di ogni piattaforma. Quello che funziona su Instagram è diverso da LinkedIn.' },
      { question: 'Come aumento l\'engagement con le didascalie?', answer: 'Le didascalie generate includono elementi di engagement: hook iniziali, domande, call to action, e prompt che invitano alla risposta. Personalizza ulteriormente con domande specifiche per il tuo pubblico.' },
      { question: 'Posso usarlo per post business e personali?', answer: 'Sì, seleziona il tono appropriato (professionale per business, informale per personale) e lo strumento adatta lo stile di conseguenza.' },
      { question: 'La prima riga è davvero così importante?', answer: 'Sì, specialmente su Instagram dove le didascalie sono troncate. La prima riga deve agganciare i lettori abbastanza da farli cliccare per espandere. Lo strumento dà priorità a prime righe forti.' },
      { question: 'Dovrei includere hashtag?', answer: 'Dipende dalla piattaforma. Instagram: sì, 20-30 rilevanti. LinkedIn: pochi o nessuno nel testo principale. Twitter: 1-3 integrati. Lo strumento adatta i suggerimenti per piattaforma.' },
      { question: 'Quanto dovrebbe essere lunga una didascalia?', answer: 'Varia per piattaforma e contenuto. Lo strumento offre opzioni corte, medie e lunghe. Testa cosa risuona meglio con il tuo pubblico specifico.' },
      { question: 'Posso generare didascalie per caroselli?', answer: 'Sì, menziona che è un carosello nel tuo input. Lo strumento genererà didascalie che fanno riferimento a contenuti multi-slide e incoraggiano lo scorrimento.' },
      { question: 'Come mantengo la mia voce unica?', answer: 'Usa le didascalie generate come punto di partenza, poi modifica per abbinare il tuo stile personale. Aggiungi aneddoti, espressioni caratteristiche, e tocchi personali che ti rendono riconoscibile.' },
    ],
  },

  // ==================== TRANSLATION COMPLETE ====================

  'introduction-generator': {
    slug: 'introduction-generator',
    name: 'Generatore di Introduzioni',
    title: 'Generatore gratuito di introduzioni con IA',
    description: 'Crea introduzioni accattivanti che catturano i lettori dalla prima frase. Perfetto per blog, saggi e articoli.',
    metaDescription: 'Crea introduzioni accattivanti che catturano i lettori dalla prima frase. Il nostro strumento IA gratuito genera aperture convincenti...',
    inputLabel: 'Argomento dell\'articolo e punti chiave...',
    inputPlaceholder: 'es. Argomento: Produttività nel lavoro remoto. Punti chiave: flessibilità, equilibrio vita-lavoro, sfide comunicative',
    buttonText: 'Genera introduzione',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'Tipo di contenuto', choices: ['Post del blog', 'Guida pratica', 'Listicle', 'Saggio/Opinione', 'Recensione prodotto', 'Ricerca/Report'], default: 'Post del blog', type: 'select' },
      { name: 'hookType', label: 'Tipo di gancio', choices: ['Domanda', 'Statistica', 'Storia', 'Affermazione audace', 'Relazionabile'], default: 'Domanda', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Professionale', 'Informale', 'Ispirazionale', 'Accademico'], default: 'Professionale', type: 'select' },
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
Content Type: {{contentType}}
Hook Type: {{hookType}}
Tone: {{tone}}
Output only the introduction paragraph(s). No preamble.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Content marketing e aperture blog', description: 'I creatori di contenuti usano il Generatore di Introduzioni per creare aperture coinvolgenti che catturano immediatamente i lettori.' },
      { title: 'Introduzioni di saggi accademici', description: 'Gli studenti possono generare introduzioni ben strutturate che stabiliscono chiaramente la loro tesi.' },
      { title: 'Aperture di documenti aziendali', description: 'I professionisti possono creare introduzioni che stabiliscono immediatamente l\'importanza del loro messaggio.' },
    ],
    faqs: [
      { question: 'Cosa rende una buona introduzione?', answer: 'Un\'introduzione forte cattura i lettori immediatamente, stabilisce rilevanza, presenta il problema o l\'opportunità e promette valore.' },
      { question: 'Il generatore di introduzioni è gratuito?', answer: 'Sì, lo strumento è completamente gratuito senza registrazione o pagamento richiesto.' },
      { question: 'Quanto dovrebbe essere lunga un\'introduzione?', answer: 'Le introduzioni occupano tipicamente il 10-15% della lunghezza totale del contenuto.' },
      { question: 'Quali tipi di gancio sono disponibili?', answer: 'Lo strumento supporta domande, statistiche, storie, affermazioni audaci e scenari relazionabili.' },
    ],
  },

  'text-expander': {
    slug: 'text-expander',
    name: 'Espansore di Testo',
    title: 'Espansore di testo IA gratuito',
    description: 'Espandi frasi brevi o paragrafi in contenuti più dettagliati e completi senza perdere il significato originale.',
    metaDescription: 'Espandi frasi brevi o paragrafi in contenuti più dettagliati. Il nostro strumento IA gratuito aggiunge profondità senza cambiare il significato...',
    inputLabel: 'Testo da espandere...',
    inputPlaceholder: 'Incolla il tuo testo breve qui per espanderlo',
    buttonText: 'Espandi testo',
    maxLength: 2048,
    options: [
      { name: 'expansionLevel', label: 'Livello di espansione', choices: ['Leggero (1,5x)', 'Moderato (2x)', 'Sostanziale (3x)'], default: 'Moderato (2x)', type: 'select' },
      { name: 'method', label: 'Metodo di espansione', choices: ['Aggiungi esempi', 'Aggiungi spiegazioni', 'Aggiungi dettagli', 'Bilanciato'], default: 'Bilanciato', type: 'select' },
      { name: 'tone', label: 'Tono', choices: ['Formale', 'Informale', 'Accademico', 'Professionale'], default: 'Professionale', type: 'select' },
    ],
    systemPrompt: `You are an expert content writer specializing in expanding concise text into more detailed, comprehensive content while maintaining the original meaning.
## CORE RULES
- Preserve the original meaning completely
- Add substantive content, not filler or fluff
- Maintain consistency in tone and style
- Never contradict or alter the original point
Expansion Level: {{expansionLevel}}
Method: {{method}}
Tone: {{tone}}
Output only the expanded text. No preamble.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Sviluppo contenuti', description: 'Gli scrittori usano l\'Espansore di Testo per sviluppare idee concise in contenuti completi con esempi e dettagli.' },
      { title: 'Elaborazione punti chiave', description: 'I professionisti possono espandere punti elenco o schemi in prosa completa.' },
      { title: 'Scrittura accademica', description: 'Gli studenti possono espandere argomenti iniziali in paragrafi completamente sviluppati.' },
    ],
    faqs: [
      { question: 'Cos\'è un espansore di testo?', answer: 'Un espansore di testo prende contenuti brevi e li espande in testi più dettagliati con esempi, spiegazioni e dettagli significativi.' },
      { question: 'L\'espansore di testo è gratuito?', answer: 'Sì, completamente gratuito senza registrazione richiesta.' },
      { question: 'L\'espansione aggiungerà riempitivo?', answer: 'Lo strumento aggiunge contenuto sostanziale, non riempitivo. Si concentra su esempi, spiegazioni e dettagli.' },
      { question: 'Il significato originale rimarrà intatto?', answer: 'Preservare il significato originale è una regola fondamentale.' },
    ],
  },

  'youtube-video-title-generator': {
    slug: 'youtube-video-title-generator',
    name: 'Generatore di Titoli Video YouTube',
    title: 'Generatore gratuito di titoli video YouTube con IA',
    description: 'Genera titoli YouTube accattivanti che ottengono visualizzazioni. La nostra IA crea titoli ottimizzati per SEO.',
    metaDescription: 'Genera titoli YouTube accattivanti che ottengono visualizzazioni. La nostra IA crea titoli ottimizzati per SEO che attirano spettatori...',
    inputLabel: 'Descrivi l\'argomento del tuo video...',
    inputPlaceholder: 'es. Tutorial Lightroom per editing foto ritratto',
    buttonText: 'Genera titoli',
    maxLength: 2048,
    options: [
      { name: 'style', label: 'Stile titolo', choices: ['Informativo/Chiaro', 'Accattivante/Clickbait', 'Domanda', 'Lista/Numeri', 'Come fare'], default: 'Informativo/Chiaro', type: 'select' },
      { name: 'video_type', label: 'Tipo video', choices: ['Tutorial/Educativo', 'Intrattenimento/Vlog', 'Recensione/Prodotto', 'Gaming', 'Notizie/Commento'], default: 'Tutorial/Educativo', type: 'select' },
    ],
    systemPrompt: `You are an expert YouTube content strategist specializing in creating compelling, click-worthy video titles.
## YOUTUBE TITLE FUNDAMENTALS
**Character Limit**: 100 characters (60-70 recommended)
**SEO Impact**: Titles are the primary ranking factor for YouTube search
Style: {{style}}
Video Type: {{video_type}}
Generate 8-10 title options under 60 characters when possible. For each title, briefly explain why it works.

IMPORTANT: Generate all output in Italian.`,
    useCases: [
      { title: 'Ottimizzazione click-through rate', description: 'I creator YouTube usano il generatore per creare titoli che massimizzano il tasso di clic.' },
      { title: 'Miglioramento SEO video', description: 'YouTuber usano il generatore per creare titoli ottimizzati per le parole chiave.' },
      { title: 'A/B testing titoli', description: 'I creator testano diversi approcci ai titoli per trovare quelli che funzionano meglio.' },
    ],
    faqs: [
      { question: 'Quanto dovrebbe essere lungo un titolo YouTube?', answer: 'YouTube permette fino a 100 caratteri, ma punta a 60-70 per piena visibilità nei risultati di ricerca.' },
      { question: 'Il titolo influenza la SEO di YouTube?', answer: 'Sì, i titoli sono uno dei fattori di ranking più importanti.' },
      { question: 'Posso cambiare i titoli dopo la pubblicazione?', answer: 'Sì, puoi cambiare i titoli in qualsiasi momento.' },
    ],
  },
};
