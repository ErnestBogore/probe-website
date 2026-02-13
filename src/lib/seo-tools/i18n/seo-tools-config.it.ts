import { SeoToolConfig } from '../seo-tools-config.types';

export const seoToolsIt: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: 'Generatore di Keyword',
    title: 'Generatore di Keyword Gratuito',
    description: 'Trova migliaia di idee di keyword per le tue campagne SEO e di content marketing. Ottieni dati su volume di ricerca, difficolta delle keyword e CPC.',
    metaDescription: 'Genera idee di keyword da qualsiasi termine seed. Visualizza volume di ricerca, difficolta e CPC per oltre 15 paesi — gratis, senza registrazione.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Inserisci una keyword seed',
    inputPlaceholder: 'es. email marketing',
    buttonText: 'Trova keyword',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'keyword-generator',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Paese',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Stati Uniti' },
          { value: '2826', label: 'Regno Unito' },
          { value: '2276', label: 'Germania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'Spagna' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasile' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Giappone' },
          { value: '2528', label: 'Paesi Bassi' },
          { value: '2792', label: 'Turchia' },
          { value: '2410', label: 'Corea del Sud' },
          { value: '2484', label: 'Messico' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competizione', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Scopri opportunita di keyword in qualsiasi mercato',
        description: 'Che tu stia espandendoti nel mercato britannico, rivolgendoti ad acquirenti in Brasile o conducendo una campagna locale in Giappone, questo strumento ti consente di ricercare la domanda di keyword in oltre 15 paesi partendo da un singolo termine. Inserisci una keyword seed come "email marketing", seleziona il paese target dal menu a tendina e scopri immediatamente i termini che le persone reali digitano su Google. Questo e particolarmente utile per i team SEO internazionali che pianificano il lancio di contenuti in piu regioni, o per i brand e-commerce che vogliono validare la domanda di un prodotto prima di entrare in un nuovo mercato.',
        image: '/Keyword Generator/ideate keywords from a seed keyword in any location.png',
      },
      {
        title: 'Ottieni una panoramica completa del panorama di ricerca di un argomento',
        description: 'Prima di investire risorse in un cluster di contenuti, devi sapere se l\'argomento ha sufficiente domanda di ricerca e se la competizione e gestibile. Dopo aver inserito la tua keyword seed, lo strumento fornisce una dashboard riepilogativa con Keyword totali (es. 50 risultati), Volume medio su queste keyword e Difficolta media. Questo snapshot consente ai content strategist e ai SEO manager di valutare rapidamente se un argomento merita di essere perseguito o se conviene spostarsi verso un territorio di keyword piu favorevole.',
        image: '/Keyword Generator/See a comprehensive overview of your see keyword from search volume to difficulty to cpc.png',
      },
      {
        title: 'Valuta la competitivita a livello di keyword per la prioritizzazione dei contenuti',
        description: 'La tabella dei risultati mostra ogni keyword insieme al suo volume di ricerca mensile, punteggio di difficolta della keyword (KD), costo per clic (CPC) e indice di competizione. Questa vista multi-metrica ti consente di trovare il punto ideale: keyword ad alto volume con bassa difficolta e significativa intenzione commerciale. I manager PPC possono utilizzare la colonna CPC per stimare la spesa pubblicitaria, mentre i professionisti SEO possono usare il punteggio KD per decidere quali keyword affrontare con contenuti di lunga durata e quali necessitano di una strategia basata sui backlink.',
        image: '/Keyword Generator/See any keywords competitive landscape from kyword difficulty to cpc.png',
      },
      {
        title: 'Scopri keyword semanticamente correlate per l\'autorita tematica',
        description: 'L\'algoritmo di ranking di Google premia le pagine che coprono un argomento in modo completo. Questa vista mostra un elenco pulito di keyword semanticamente correlate con i rispettivi volumi di ricerca. Usale per identificare keyword secondarie e LSI (Latent Semantic Indexing) che dovrebbero apparire nei tuoi titoli, nel corpo del testo e nelle sezioni FAQ. Integrando questi termini correlati nei tuoi contenuti, segnali ai motori di ricerca una profondita tematica — uno dei piu potenti fattori di ranking on-page per le query informative.',
        image: '/Keyword Generator/see other semantically relevant keywords (secondary keyword) and their volume close to your main keyword.png',
      },
    ],
    faqs: [
      {
        question: 'Cos\'e un generatore di keyword e come funziona?',
        answer: 'Un generatore di keyword e uno strumento di ricerca che prende una keyword seed — un termine o frase ampia per cui vuoi posizionarti — e restituisce un elenco di query di ricerca correlate che gli utenti reali digitano nei motori di ricerca. Il generatore di keyword di Analyze AI funziona interrogando un database di termini di ricerca, fornendo fino a 50 idee di keyword per ricerca e mostrando per ciascuna il volume di ricerca mensile, il punteggio di difficolta della keyword, il costo per clic e il livello di competizione. Il processo richiede pochi secondi e non necessita di account o login.',
      },
      {
        question: 'Come viene calcolata la difficolta della keyword (KD) in questo strumento?',
        answer: 'La difficolta della keyword e un punteggio da 0 a 100 che stima quanto sarebbe difficile posizionarsi nei primi 10 risultati di ricerca organica per un determinato termine. Il punteggio tiene conto della forza dei backlink e dell\'autorita del dominio delle pagine attualmente in prima pagina su Google. Un KD di 0-10 e considerato facile (i nuovi siti possono competere), 11-30 e medio (richiede contenuti solidi e alcuni backlink), 31-60 e difficile (necessita di forte autorita e link building) e 61-100 e molto difficile (dominato da pagine ad alta autorita come Wikipedia, Amazon o grandi editori).',
      },
      {
        question: 'Qual e la differenza tra volume di ricerca e difficolta della keyword?',
        answer: 'Il volume di ricerca indica quante persone cercano un termine mensilmente — misura la domanda. La difficolta della keyword indica quanto sono competitivi i risultati di ricerca per quel termine — misura la resistenza dal lato dell\'offerta. Una keyword con 10.000 ricerche mensili ma un KD di 85 puo essere meno preziosa di una keyword con 500 ricerche e un KD di 8, perche per quest\'ultima puoi realisticamente posizionarti. La migliore strategia di keyword bilancia entrambe le metriche.',
      },
      {
        question: 'Come posso utilizzare i dati CPC di uno strumento keyword gratuito se faccio solo SEO?',
        answer: 'Il CPC (Costo per Clic) riflette quanto gli inserzionisti sono disposti a pagare per un singolo clic su quella keyword in Google Ads. Anche se non gestisci campagne a pagamento, il CPC e un forte indicatore di intenzione commerciale. Le keyword con CPC elevati (es. 15\u20AC+) indicano che le aziende considerano quegli utenti preziosi — il che significa che sono piu vicini a una decisione d\'acquisto. Targetizzare keyword ad alto CPC tramite contenuti SEO puo generare traffico che converte a tassi piu elevati.',
      },
      {
        question: 'Quante keyword posso generare per ogni ricerca?',
        answer: 'Ogni ricerca fornisce fino a 50 idee di keyword a partire dal termine seed inserito. Per generare piu idee, prova variazioni della tua keyword seed, usa modificatori long-tail (es. "email marketing per startup" invece di "email marketing") o cerca in paesi diversi. Gli utenti esperti spesso eseguono 10-20 ricerche con keyword seed e compilano i risultati in un elenco master di keyword che puo poi essere deduplicato e prioritizzato per volume e difficolta.',
      },
      {
        question: 'Posso usare questo strumento per la ricerca keyword SEO locale?',
        answer: 'Si. Il selettore del paese supporta oltre 15 paesi, tra cui Stati Uniti, Regno Unito, Germania, Francia, Spagna, Italia, Brasile, Canada, Australia, India e Giappone. Cambiando il paese, visualizzi i dati di volume di ricerca localizzati per quel mercato. Questo e particolarmente prezioso per le attivita locali, i negozi e-commerce regionali e le agenzie che gestiscono campagne SEO multi-sede.',
      },
      {
        question: 'Cosa sono le keyword semanticamente correlate e perche sono importanti per la SEO?',
        answer: 'Le keyword semanticamente correlate sono termini concettualmente collegati alla tua keyword principale, anche se non contengono esattamente le stesse parole. Ad esempio, per la keyword seed "email marketing", i termini semanticamente correlati potrebbero essere "automazione newsletter", "campagne drip" e "coinvolgimento degli iscritti". Google utilizza l\'elaborazione del linguaggio naturale (NLP) per comprendere le relazioni tematiche tra i termini. Le pagine che contengono naturalmente keyword semanticamente correlate tendono a posizionarsi meglio perche segnalano una copertura completa dell\'argomento.',
      },
      {
        question: 'Come trovo keyword a bassa competizione con questo strumento?',
        answer: 'Ordina la tabella dei risultati per la colonna KD (Difficolta della Keyword) in ordine crescente. Cerca keyword con un KD tra 0 e 15, un volume di ricerca mensile superiore a 100 e un punteggio di competizione inferiore a 30. Queste sono le tue "opportunita facili" — termini per cui una pagina ben ottimizzata con contenuti originali e approfonditi puo posizionarsi senza un investimento massiccio in backlink. Le keyword long-tail (3-5 parole) hanno tipicamente una competizione inferiore perche si rivolgono a intenti di ricerca piu specifici che i grandi competitor spesso trascurano.',
      },
      {
        question: 'Cos\'e la colonna del punteggio di competizione e in cosa si differenzia dalla difficolta della keyword?',
        answer: 'Il punteggio di Competizione misura quanti inserzionisti stanno facendo offerte su una keyword nella ricerca a pagamento (Google Ads). Un punteggio di 100 significa che quasi tutti gli spazi pubblicitari sono occupati — forte concorrenza tra inserzionisti. La Difficolta della Keyword, invece, misura la concorrenza nel posizionamento organico basandosi sui profili di backlink delle pagine meglio posizionate. Una keyword puo avere alta concorrenza nella ricerca a pagamento ma bassa difficolta organica (o viceversa). I professionisti del marketing intelligenti confrontano entrambe le metriche: alta concorrenza a pagamento con bassa difficolta organica segnala una keyword redditizia che puoi conquistare con la SEO invece di pagare per gli annunci.',
      },
      {
        question: 'Posso esportare i risultati delle keyword?',
        answer: 'Si. Lo strumento include un pulsante "Esporta CSV" nella parte superiore della tabella dei risultati. Questo ti consente di scaricare l\'elenco completo delle keyword — inclusi volume, KD, CPC e dati sulla competizione — in un foglio di calcolo. Da li puoi unire i risultati di piu ricerche, applicare filtri personalizzati, creare calendari editoriali o condividere i dati con autori e membri del team SEO.',
      },
      {
        question: 'Con quale frequenza vengono aggiornati i dati delle keyword?',
        answer: 'Il database delle keyword viene aggiornato regolarmente per garantire accuratezza e rilevanza. I dati sul volume di ricerca si basano su medie mensili mobili, che attenuano i picchi a breve termine e le fluttuazioni stagionali. Per argomenti di tendenza o settori in rapida evoluzione, e buona pratica incrociare i dati dello strumento keyword con Google Trends per catturare il momentum in tempo reale che potrebbe non essere ancora riflesso nei volumi mensili medi.',
      },
      {
        question: 'Come dovrei usare questo generatore di keyword come parte di un workflow SEO piu ampio?',
        answer: 'Il generatore di keyword e tipicamente il primo passo in un workflow di contenuto SEO in cinque fasi: (1) Scoperta — usa questo strumento per generare idee di keyword da termini seed, (2) Qualificazione — filtra per KD e volume per trovare obiettivi validi, (3) Clustering — raggruppa le keyword semanticamente correlate in cluster tematici, (4) Creazione di contenuti — scrivi pagine che targetizzano le keyword primarie e integrano naturalmente i termini secondari, (5) Monitoraggio — usa un rank checker per monitorare le performance delle tue pagine nel tempo.',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: 'Checker Difficolta Keyword',
    title: 'Checker Difficolta Keyword Gratuito',
    description: 'Verifica quanto e difficile posizionarsi per qualsiasi keyword. Ottieni un punteggio di difficolta da 0 a 100 insieme a volume di ricerca e dati sulla competizione.',
    metaDescription: 'Verifica gratuitamente la difficolta di posizionamento di qualsiasi keyword. Visualizza punteggio KD, volume di ricerca e CPC per prioritizzare le keyword per cui puoi realmente posizionarti.',
    iconName: 'BarChart3',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Inserisci una keyword',
    inputPlaceholder: 'es. miglior software gestione progetti',
    buttonText: 'Verifica difficolta',
    resultType: 'keyword-difficulty',
    metricsToShow: ['keyword_difficulty', 'search_volume', 'cpc'],
    apiEndpoint: 'keyword-difficulty',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'Paese',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Stati Uniti' },
          { value: '2826', label: 'Regno Unito' },
          { value: '2276', label: 'Germania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'Spagna' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasile' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Giappone' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
    ],
    useCases: [
      {
        title: 'Valuta rapidamente se una keyword merita di essere targetizzata',
        description: 'Prima di scrivere una singola parola di contenuto, devi sapere se puoi realisticamente posizionarti per la tua keyword target. Inserisci una qualsiasi keyword, seleziona tra oltre 10 paesi nel menu a tendina e ottieni immediatamente una valutazione della difficolta. Questo e il primo filtro in qualsiasi strategia di contenuti seria — ti impedisce di investire settimane di lavoro su keyword in cui i primi 10 risultati sono dominati da siti web con autorita di dominio irraggiungibili. Usalo per verificare le richieste di keyword dei clienti, validare idee per articoli del blog o valutare preventivamente i termini emersi dalle sessioni di brainstorming.',
        image: '/keyword difficulty checker/Check the difficulty of any keyword.png',
      },
      {
        title: 'Ottieni una panoramica competitiva a 360 gradi su qualsiasi keyword',
        description: 'La dashboard dei risultati mostra tre metriche critiche affiancate: Difficolta della Keyword (es. 58 "Difficile"), Volume di Ricerca (es. 1.900/mese) e CPC (es. 32,40 $). Questa vista a tre metriche ti offre il quadro completo a colpo d\'occhio. Una keyword con alto KD ma anche alto CPC potrebbe comunque valere la pena di essere perseguita con una strategia di costruzione dell\'autorita a lungo termine, perche l\'intenzione commerciale giustifica lo sforzo. Al contrario, una keyword con basso KD e CPC zero puo generare traffico ma non ricavi. Usa questa dashboard per prendere decisioni editoriali basate sui dati.',
        image: '/keyword difficulty checker/see the keywords 360 competitiveness with cpc.png',
      },
      {
        title: 'Comprendi cosa significa realmente un punteggio di difficolta',
        description: 'L\'indicatore KD offre una rappresentazione visiva e intuitiva della difficolta di posizionamento. Il punteggio va da 0 a 100 con severita codificata per colore: verde (Facile, 0-20), giallo (Medio, 21-40), arancione (Difficile, 41-60) e rosso (Molto difficile, 61-100). Questa visualizzazione e particolarmente utile quando presenti ricerche di keyword a stakeholder o clienti che non lavorano quotidianamente nella SEO e necessitano di una risposta visiva rapida a "possiamo posizionarci per questa?".',
        image: '/keyword difficulty checker/see the keywords actual difficulty.png',
      },
      {
        title: 'Valida la domanda di ricerca prima di investire nei contenuti',
        description: 'Il volume di ricerca e la base di tutte le decisioni di targeting delle keyword. Questa scheda isola la metrica del volume di ricerca mensile e ti consente di confermare che un numero sufficiente di persone sta attivamente cercando quel termine per giustificare la creazione di contenuti. Un errore comune nella SEO e targetizzare keyword con volume nullo o trascurabile semplicemente perche sembrano rilevanti. Questo rapido controllo lo previene — e combinato con il punteggio KD, ti dice se l\'opportunita e sia reale che raggiungibile.',
        image: '/keyword difficulty checker/see the keywords actual search volume.png',
      },
    ],
    faqs: [
      {
        question: 'Cos\'e la difficolta della keyword e perche dovrei verificarla prima di creare contenuti?',
        answer: 'La difficolta della keyword (KD) e una metrica che stima quanto sara difficile posizionarsi nei primi 10 risultati di ricerca organica per una specifica keyword. Viene tipicamente valutata su una scala da 0 a 100. Verificare il KD prima della creazione dei contenuti e essenziale perche ti evita di investire tempo e denaro in pagine che hanno quasi zero possibilita di posizionarsi. Se i primi 10 risultati per una keyword sono tutti pagine di siti come Forbes, HubSpot e Wikipedia — ciascuno con centinaia di domini referenti — un sito nuovo o di media autorita avra difficolta a competere senza un investimento significativo nella link building.',
      },
      {
        question: 'In che modo la difficolta della keyword si differenzia dalla competizione delle keyword?',
        answer: 'La difficolta della keyword misura la competitivita nella ricerca organica — quanto e difficile posizionarsi nei risultati non a pagamento di Google. Viene calcolata in base alla forza dei backlink delle pagine attualmente nei primi 10. La competizione delle keyword (talvolta chiamata densita competitiva) misura la competitivita nella ricerca a pagamento — quanti inserzionisti fanno offerte su quella keyword in Google Ads. Una keyword puo essere facile da posizionare organicamente (KD basso) ma avere una concorrenza feroce a pagamento (punteggio di competizione alto), o viceversa.',
      },
      {
        question: 'Quale punteggio KD dovrei puntare come nuovo sito web?',
        answer: 'I nuovi siti web (meno di 1 anno, con meno di 50 domini referenti) dovrebbero puntare a keyword con un KD di 0-15. Queste sono tipicamente query long-tail di 3-5 parole per cui i siti piu grandi non hanno specificamente ottimizzato. Man mano che la tua autorita di dominio cresce attraverso la creazione costante di contenuti e la link building, puoi gradualmente mirare a keyword con punteggi KD di 15-30, poi 30-50. Tentare di posizionarsi per keyword con KD superiore a 50 senza una sostanziale autorita di dominio fallira quasi sempre, indipendentemente dalla qualita dei contenuti.',
      },
      {
        question: 'Una pagina puo posizionarsi per una keyword ad alta difficolta senza backlink?',
        answer: 'E estremamente raro. La difficolta della keyword e in gran parte determinata dal numero e dalla qualita dei backlink che puntano alle pagine meglio posizionate. Tuttavia, ci sono casi eccezionali: se il tuo contenuto offre un guadagno informativo significativamente superiore rispetto ai risultati esistenti (ad esempio ricerche originali, dati unici o un formato innovativo), e il tuo dominio ha un\'autorita moderata, Google potrebbe testare la tua pagina in posizioni piu alte. Detto questo, per punteggi KD superiori a 40, i backlink sono quasi sempre un prerequisito per posizionamenti sostenuti.',
      },
      {
        question: 'Perche la stessa keyword ha punteggi di difficolta diversi su strumenti diversi?',
        answer: 'Ogni strumento SEO calcola la difficolta della keyword con il proprio algoritmo proprietario, indice di crawl e metodologia di ponderazione. Ahrefs enfatizza i domini referenti ai primi 10 risultati, Moz utilizza le proprie metriche di Page Authority e Domain Authority, e SEMrush incorpora funzionalita SERP aggiuntive e segnali di contenuto. Ecco perche una keyword potrebbe mostrare KD 45 su uno strumento e KD 62 su un altro. I numeri assoluti sono meno importanti del ranking relativo — usa lo stesso strumento in modo coerente in modo che i tuoi confronti di difficolta siano omogenei.',
      },
      {
        question: 'Che ruolo gioca il CPC nella valutazione della difficolta della keyword?',
        answer: 'Il CPC (Costo per Clic) non influenza direttamente la difficolta di posizionamento organico, ma fornisce un contesto critico. Una keyword con KD 55 e CPC 0,50 $ suggerisce che, sebbene posizionarsi sia difficile, il ritorno commerciale e basso. Una keyword con KD 55 e CPC 32,40 $ racconta una storia diversa: questo traffico e estremamente prezioso per le aziende, il che significa che posizionarsi organicamente per essa potrebbe sostituire una spesa pubblicitaria significativa. Quando due keyword hanno punteggi KD simili, dai priorita a quella con CPC piu alto — segnala un intento di acquisto piu forte e un potenziale ROI maggiore.',
      },
      {
        question: 'Come verifico la difficolta della keyword per un paese specifico?',
        answer: 'Utilizza il menu a tendina del paese nel modulo di input dello strumento per selezionare il tuo mercato target. La difficolta della keyword puo variare significativamente tra i paesi perche il panorama competitivo e diverso. Una keyword con KD 60 negli Stati Uniti potrebbe avere KD 25 in Brasile o KD 40 in Germania, semplicemente perche meno siti ad alta autorita competono in quei mercati. Verifica sempre la difficolta per il paese specifico in cui si trova il tuo pubblico, piuttosto che utilizzare i dati degli Stati Uniti come impostazione predefinita.',
      },
      {
        question: 'Qual e la relazione tra difficolta della keyword e volume di ricerca?',
        answer: 'In generale, le keyword con volume piu elevato tendono ad avere una difficolta piu alta perche piu siti web competono per i termini di ricerca popolari. Tuttavia, questo non e sempre il caso. Alcune keyword ad alto volume hanno una difficolta sorprendentemente bassa (queste sono opportunita d\'oro), e alcune keyword a basso volume hanno una difficolta elevata perche la nicchia e dominata da specialisti autorevoli. L\'obiettivo ideale per una keyword e avere un volume di ricerca superiore alla tua soglia minima e un punteggio KD all\'interno del range competitivo del tuo dominio.',
      },
      {
        question: 'Dovrei evitare tutte le keyword ad alta difficolta?',
        answer: 'No. Le keyword ad alta difficolta dovrebbero far parte della tua strategia di contenuti a lungo termine — rappresentano i tuoi obiettivi aspirazionali. L\'approccio consiste nel costruire prima l\'autorita tematica posizionandosi per keyword piu facili nello stesso cluster, poi sfruttare i link interni e l\'autorita accumulata per competere nel tempo per i termini piu difficili. Una volta che quelle pagine piu facili si posizionano, rafforzano l\'autorita tematica del tuo dominio e migliorano le tue possibilita sul termine competitivo principale.',
      },
      {
        question: 'Con quale frequenza dovrei ricontrollare la difficolta della keyword?',
        answer: 'Ricontrolla la difficolta della keyword trimestralmente per le tue keyword target principali. Il panorama competitivo si sposta man mano che vengono pubblicati nuovi contenuti, vengono costruiti backlink e vengono rilasciati aggiornamenti dell\'algoritmo. Una keyword che aveva KD 45 sei mesi fa potrebbe ora essere KD 35 se una pagina precedentemente in cima alla classifica ha perso backlink o e stata deindicizzata. Monitorare il KD nel tempo ti aiuta anche a verificare se i tuoi sforzi SEO stanno colmando il divario competitivo.',
      },
      {
        question: 'Cosa significa la codifica a colori del KD (verde, giallo, arancione, rosso)?',
        answer: 'L\'indicatore codificato a colori mappa gli intervalli di difficolta: Verde (0-20) significa che la keyword e relativamente facile da posizionare ed e adatta a siti nuovi o con bassa autorita. Giallo (21-40) indica competizione moderata — avrai bisogno di contenuti decenti e alcuni backlink. Arancione (41-60) indica competizione intensa — sono necessari contenuti solidi, SEO tecnica e una strategia attiva di link building. Rosso (61-100) segnala competizione molto intensa — solo domini ad alta autorita con profili di backlink estesi tendono a mantenere queste posizioni.',
      },
      {
        question: 'Posso verificare la difficolta di piu keyword contemporaneamente?',
        answer: 'Lo strumento gratuito verifica una keyword alla volta, il che e ideale per controlli rapidi puntuali e per validare singole idee di keyword. Per l\'analisi batch della difficolta delle keyword — verificando decine o centinaia di keyword contemporaneamente — dovresti tipicamente esportare le keyword dallo strumento Generatore di Keyword e analizzarle in un foglio di calcolo, oppure utilizzare la colonna KD che appare gia nella tabella dei risultati del Generatore di Keyword.',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: 'Checker Autorita del Sito',
    title: 'Checker Autorita del Sito Gratuito',
    description: 'Verifica gratuitamente l\'autorita di ricerca organica di qualsiasi sito web. Visualizza traffico organico stimato, keyword posizionate, posizioni top 10 e distribuzione del posizionamento delle keyword.',
    metaDescription: 'Verifica gratuitamente il punteggio di autorita di qualsiasi sito web. Visualizza la forza del dominio, il traffico organico, le keyword posizionate e la distribuzione delle posizioni SERP istantaneamente.',
    iconName: 'Globe',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Inserisci un dominio',
    inputPlaceholder: 'es. example.com',
    buttonText: 'Verifica autorita',
    resultType: 'domain-authority',
    metricsToShow: ['domain_score', 'organic_traffic', 'ranked_keywords', 'top_10'],
    apiEndpoint: 'website-authority',
    freeResultLimit: 1,
    options: [],
    tableColumns: [
      { key: 'position', label: 'Intervallo posizione', sortable: false, type: 'text' },
      { key: 'keywords', label: 'Keyword', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Verifica l\'autorita di dominio di qualsiasi sito web in pochi secondi',
        description: 'Ogni decisione di link building, analisi competitiva e valutazione di partnership inizia con una domanda: quanto e autorevole questo dominio? Inserisci un qualsiasi dominio nel checker, clicca su "Verifica autorita" e ottieni immediatamente una valutazione. Che tu stia valutando un\'opportunita di guest post, esaminando un potenziale backlink o confrontando il tuo dominio con i competitor, questo e il modo piu rapido per misurare la forza complessiva di un sito web. Le agenzie SEO utilizzano questo strumento decine di volte al giorno quando costruiscono liste di prospect per il link building e qualificano i target di outreach.',
        image: '/Website authority checker/Check the autority of any website.png',
      },
      {
        title: 'Comprendi la distribuzione delle posizioni SERP su tutte le keyword',
        description: 'Questa analisi mostra per quante keyword un sito web si posiziona in ogni intervallo di posizione SERP: #1, #2-3, #4-10, #11-20 e cosi via. Questa distribuzione racconta una storia molto piu profonda di un singolo numero di autorita. Un sito con migliaia di posizioni #1 ha un\'autorita dominante. Un sito con la maggior parte delle keyword nelle posizioni #21-50 ha un potenziale emergente ma non e ancora riuscito a sfondare in prima pagina. Usa questa informazione per valutare la traiettoria di crescita del tuo sito e per identificare competitor i cui posizionamenti puoi realisticamente sfidare.',
        image: '/Website authority checker/See any websites keywords ranking.png',
      },
      {
        title: 'Valuta traffico e ampiezza dei posizionamenti di un dominio',
        description: 'La dashboard delle metriche mostra Traffico Organico, Keyword Totali Posizionate e Keyword nelle Posizioni 1-10. Questi numeri contestualizzano il punteggio di autorita con dati reali sulle performance. Un dominio puo avere un punteggio di autorita elevato ma traffico basso (il che significa che il suo profilo di backlink e forte ma la strategia di contenuti e debole), oppure un\'autorita moderata con traffico impressionante (il che significa che la strategia di contenuti supera il profilo di link). Questa vista multi-metrica previene decisioni basate su una singola metrica e ti offre il quadro competitivo completo.',
        image: '/Website authority checker/See other details as traffick, rankings, positions.png',
      },
      {
        title: 'Visualizza il punteggio di autorita reale con classificazione di severita',
        description: 'L\'indicatore del Domain Score mostra una valutazione da 0 a 100 con severita codificata a colori e un\'etichetta (es. "99 — Molto Forte" per hubspot.com). L\'indicatore visivo rende i punteggi di autorita immediatamente interpretabili: il verde indica molto forte, il giallo moderato, l\'arancione in via di sviluppo e il rosso debole. Usalo per impostare aspettative realistiche — se il tuo sito ha un punteggio di 25 e il tuo competitor ha un punteggio di 85, sai che competere per le keyword principali richiedera un investimento significativo e a lungo termine nel link building. Questa visualizzazione e anche ideale per la reportistica ai clienti e le presentazioni agli stakeholder.',
        image: '/Website authority checker/See the actual authority score of your website. Score out of 100.png',
      },
    ],
    faqs: [
      {
        question: 'Cos\'e l\'autorita di un sito web e come viene misurata?',
        answer: 'L\'autorita del sito web (chiamata anche autorita di dominio o forza del dominio) e una metrica SEO che stima la forza complessiva di posizionamento di un dominio basandosi sulla quantita e qualita dei backlink che puntano ad esso. Viene misurata su una scala logaritmica da 0 a 100, il che significa che diventa esponenzialmente piu difficile aumentare il proprio punteggio man mano che si sale. Un punteggio di 30 e relativamente facile da raggiungere con un link building di base, mentre passare da 70 a 80 richiede un numero significativamente maggiore di backlink di alta qualita rispetto al passaggio da 20 a 30.',
      },
      {
        question: 'Qual e un buon punteggio di autorita del sito web?',
        answer: 'L\'autorita e relativa al tuo panorama competitivo. Un Domain Score di 40 potrebbe essere eccellente in un settore di nicchia dove i competitor hanno una media di 25, ma debole in uno spazio dove la media dei competitor e 70. Come linee guida generali: 0-20 e nuovo o sottosviluppato, 21-40 e in sviluppo (tipico delle piccole e medie imprese), 41-60 e consolidato (competitivo nella maggior parte delle nicchie), 61-80 e forte (competitivo per keyword ad alto valore) e 81-100 e elite (grandi marchi, testate giornalistiche e piattaforme ad alta autorita).',
      },
      {
        question: 'L\'autorita del sito web e un fattore di ranking di Google?',
        answer: 'Google ha dichiarato pubblicamente che l\'"autorita di dominio" non e un fattore di ranking diretto nel suo algoritmo. Tuttavia, la ricerca mostra costantemente una forte correlazione tra autorita di dominio e posizionamento delle keyword. La conclusione pratica e che, sebbene Google possa non utilizzare direttamente i punteggi di autorita di terze parti, i segnali sottostanti (qualita dei backlink, numero di domini referenti, diversita dei link) sono fattori di ranking fondamentali. I punteggi di autorita rappresentano il miglior indicatore disponibile per questi segnali.',
      },
      {
        question: 'In che modo il Domain Score si differenzia dalla Domain Authority (DA) di Moz?',
        answer: 'Entrambe le metriche mirano a misurare la forza del dominio su una scala da 0 a 100, ma utilizzano metodi di calcolo e fonti di dati differenti. Il DA di Moz si basa sul proprio indice di link e utilizza un modello di machine learning per prevedere la capacita di posizionamento. Altre metriche di Domain Score utilizzano i propri indici di crawling e formule di calcolo. I punteggi non sono intercambiabili — un sito potrebbe avere DA 45 su Moz e Domain Score 52 su un altro strumento. Cio che conta e la coerenza: utilizza lo stesso strumento per tutti i confronti.',
      },
      {
        question: 'Come posso migliorare il punteggio di autorita del mio sito web?',
        answer: 'L\'unico modo affidabile per aumentare l\'autorita di dominio e attraverso l\'acquisizione di backlink da un numero sempre maggiore di domini referenti unici — in particolare domini che sono essi stessi autorevoli. Le strategie efficaci includono: la creazione di contenuti meritevoli di link (ricerche originali, guide complete, strumenti gratuiti), il guest posting su pubblicazioni di settore, le attivita di digital PR e media outreach, il broken link building, il link building tramite pagine risorse e la costruzione di relazioni con i colleghi del settore.',
      },
      {
        question: 'Cosa mi dicono le metriche di traffico organico e keyword posizionate sull\'autorita?',
        answer: 'Queste metriche contestualizzano il punteggio di autorita con dati sulle performance. Un alto punteggio di autorita con basso traffico organico suggerisce che il dominio ha un forte profilo di backlink ma contenuti deboli o un targeting delle keyword inefficace. Un traffico elevato con autorita moderata indica contenuti forti che superano le aspettative rispetto al profilo di link. La metrica Keyword nelle Posizioni 1-10 rivela per quante keyword un dominio domina effettivamente in prima pagina — questa e la misura definitiva dell\'autorita competitiva in azione.',
      },
      {
        question: 'Cos\'e la tabella di distribuzione delle posizioni e come si legge?',
        answer: 'La tabella di distribuzione delle posizioni mostra per quante keyword un dominio si posiziona nelle varie posizioni SERP: #1, #2-3, #4-10, #11-20, #21-30 e cosi via. Un sito web sano e in crescita mostra una forma a piramide — meno keyword in posizione #1, di piu in #2-10 e progressivamente di piu nelle posizioni inferiori. Se la maggior parte delle keyword si concentra nelle posizioni #41-100, il sito ha visibilita ma manca dell\'autorita o della qualita dei contenuti necessaria per raggiungere la prima pagina.',
      },
      {
        question: 'Posso usare l\'autorita del sito web per valutare i potenziali backlink?',
        answer: 'Si — questo e uno dei casi d\'uso piu comuni. Quando costruisci backlink, dai priorita ai siti web con Domain Score superiore a 30 e idealmente superiore a 50 per il massimo trasferimento di link equity. Tuttavia, il punteggio di autorita da solo non e sufficiente. Verifica anche che il sito pubblichi contenuti di qualita, abbia un allineamento tematico rilevante con la tua nicchia, riceva traffico organico reale e abbia un profilo di link in uscita naturale.',
      },
      {
        question: 'Perche alcuni siti web hanno alta autorita ma basso traffico?',
        answer: 'Questo accade per diverse ragioni: il sito web ha accumulato backlink nel corso degli anni ma non crea attivamente contenuti mirati alle keyword di ricerca, i contenuti del sito sono obsoleti e non corrispondono piu all\'intento di ricerca attuale, il sito web e stato penalizzato da Google per altri problemi di qualita nonostante abbia backlink forti, oppure il sito opera in una nicchia a basso volume dove anche i posizionamenti in prima pagina non generano traffico elevato.',
      },
      {
        question: 'Con quale frequenza cambia l\'autorita del sito web?',
        answer: 'I punteggi di autorita fluttuano quando i dati sui backlink sottostanti vengono ricrawlati e aggiornati. Nuovi backlink aumentano il tuo punteggio; backlink persi lo diminuiscono. I cambiamenti significativi richiedono normalmente 4-8 settimane per riflettersi nelle metriche di autorita. Aumenti graduali di 1-3 punti al mese sono tipici per i siti che costruiscono link attivamente. Cali improvvisi possono indicare la perdita di backlink importanti o un ricalcolo da parte dello strumento di valutazione.',
      },
      {
        question: 'Qual e la relazione tra autorita del sito web e link equity?',
        answer: 'L\'autorita del sito web e essenzialmente un riepilogo della link equity accumulata. Ogni backlink da un sito web esterno trasferisce una certa link equity al tuo dominio, e il totale della equity accumulata si riflette nel tuo punteggio di autorita. I domini referenti con autorita piu elevata trasferiscono piu link equity. Le pagine su domini ad alta autorita ereditano la equity a livello di dominio, ottenendo un vantaggio iniziale nei posizionamenti.',
      },
      {
        question: 'Dovrei concentrarmi sull\'aumento del punteggio di autorita o del traffico organico?',
        answer: 'Concentrati sul traffico organico — l\'autorita e un mezzo per raggiungere un fine, non un fine in se stesso. La strategia piu efficace consiste nel costruire simultaneamente link (aumentando l\'autorita) e creare contenuti mirati alle keyword (catturando il traffico). Un punteggio di autorita elevato senza contenuti mirati non genera traffico. Contenuti eccellenti senza autorita faticano a posizionarsi per keyword competitive. I due elementi lavorano in sinergia.',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'SERP Checker',
    title: 'SERP Checker Gratuito',
    description: 'Controlla i risultati di ricerca Google per qualsiasi keyword. Scopri chi si posiziona nelle prime 10 posizioni organiche, con titoli, URL e domini.',
    metaDescription: 'Analizza i risultati top di Google per qualsiasi keyword in qualsiasi paese. Visualizza posizionamenti, domini, URL e risultati totali per pianificare la tua strategia SEO.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'keyword',
    inputLabel: 'Inserisci una keyword',
    inputPlaceholder: 'es. migliori strumenti gestione progetti',
    buttonText: 'Controlla SERP',
    resultType: 'serp-results',
    metricsToShow: ['total_results', 'organic_results'],
    apiEndpoint: 'serp-checker',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'Paese',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Stati Uniti' },
          { value: '2826', label: 'Regno Unito' },
          { value: '2276', label: 'Germania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'Spagna' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasile' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Giappone' },
          { value: '2528', label: 'Paesi Bassi' },
          { value: '2792', label: 'Turchia' },
          { value: '2410', label: 'Corea del Sud' },
          { value: '2484', label: 'Messico' },
        ],
      },
    ],
    tableColumns: [
      { key: 'position', label: '#', sortable: true, type: 'number' },
      { key: 'title', label: 'Titolo', sortable: false, type: 'text' },
      { key: 'domain', label: 'Dominio', sortable: true, type: 'text' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Controlla la SERP di Google per qualsiasi keyword in qualsiasi paese',
        description: 'Capire cosa si posiziona attualmente e la base di qualsiasi campagna SEO. Inserisci una keyword, seleziona il tuo paese target tra oltre 15 opzioni e visualizza immediatamente il panorama SERP attuale. Questo ti mostra chi sono i tuoi competitor, quali formati di contenuto dominano e quanto e affollato lo spazio. I professionisti SEO internazionali usano il selettore del paese per confrontare le composizioni SERP tra diversi mercati.',
        image: '/SERP Checker/Check the SERP for any keyword for any given country.png',
      },
      {
        title: 'Analizza i tipi di contenuto e i domini che si posizionano',
        description: 'La visualizzazione dei risultati SERP mostra i risultati totali, il numero di risultati organici e le pagine effettivamente posizionate con i loro titoli, URL e descrizioni. Questo ti consente di analizzare i pattern dei formati di contenuto: i risultati top sono articoli di blog, pagine prodotto, articoli comparativi o strumenti? Questa intelligence ti dice esattamente quale formato di contenuto Google premia per quella query.',
        image: '/SERP Checker/Find the different types of content that rank on the SERP.png',
      },
      {
        title: 'Valuta la competitivita della SERP prima di targetizzare una keyword',
        description: 'Prima di investire risorse su una keyword, passala attraverso il SERP Checker per vedere contro chi competeresti. Se la SERP e dominata da siti con autorita massiccia (Amazon, Wikipedia, siti governativi), quella keyword potrebbe richiedere un approccio diverso. Se la SERP contiene siti piu piccoli o piu recenti, esiste un percorso realistico per il posizionamento.',
        image: '/SERP Checker/See how competitive any keyword is on the SERP.png',
      },
      {
        title: 'Traccia la posizione del tuo brand per le keyword target',
        description: 'La tabella dettagliata dei risultati mostra titolo, dominio e URL completo per ogni posizione di ranking. Scorri per trovare se il tuo sito (o quello di un competitor) appare nei risultati. Usalo per verificare i dati dei rank tracker, controllare keyword critiche prima di riunioni con i clienti o confermare che una pagina appena pubblicata e entrata nella SERP.',
        image: '/SERP Checker/See your brands ranking for any keyword on the SERP.png',
      },
    ],
    faqs: [
      {
        question: 'Cos\'e un SERP Checker e perche ne ho bisogno?',
        answer: 'Un SERP (Search Engine Results Page) Checker ti mostra i risultati di ricerca effettivi di Google per qualsiasi keyword in qualsiasi paese, senza i bias di personalizzazione del tuo browser. Quando effettui una ricerca su Google in prima persona, i tuoi risultati sono influenzati dalla cronologia delle ricerche, dalla posizione geografica, dal dispositivo e dall\'account Google con cui hai effettuato l\'accesso. Un SERP Checker fornisce una vista neutrale e imparziale dei posizionamenti — gli stessi risultati che vedrebbe un utente che effettua la ricerca per la prima volta.',
      },
      {
        question: 'Come gestisce il SERP Checker i risultati basati sulla localizzazione?',
        answer: 'Lo strumento utilizza il selettore del paese per simulare ricerche dall\'indice Google del paese selezionato (ad esempio, google.com per gli Stati Uniti, google.co.uk per il Regno Unito, google.de per la Germania). La composizione della SERP puo variare drasticamente tra i paesi — domini diversi si posizionano, formati di contenuto diversi appaiono e persino il numero di funzionalita SERP puo cambiare. Controlla sempre la SERP per il tuo paese target, non solo l\'impostazione predefinita degli Stati Uniti.',
      },
      {
        question: 'Cosa significano "Risultati totali" e "Risultati organici"?',
        answer: '"Risultati totali" e il numero che Google riporta per le pagine corrispondenti. Si tratta di un indicatore approssimativo dell\'ampiezza dell\'argomento, ma non e affidabile per l\'analisi della concorrenza. "Risultati organici" conta quanti risultati tradizionali con link blu appaiono in prima pagina. Se una SERP mostra solo 8 risultati organici invece dei soliti 10, lo spazio rimanente e occupato da funzionalita SERP come featured snippet, mappe, video o box "Le persone chiedono anche".',
      },
      {
        question: 'Come posso usare i dati SERP per determinare il formato dei contenuti?',
        answer: 'Analizza i primi 10 risultati e categorizzali: sono guide how-to, listicle, pagine strumento, articoli comparativi, pagine prodotto o risultati video? Se 7 risultati su 10 sono listicle, Google ha determinato che gli utenti desiderano contenuti in formato lista per quella keyword. Creare un formato diverso probabilmente portera a risultati inferiori. Allineati al formato dominante, poi differenziati attraverso maggiore profondita, freschezza dei contenuti, dati esclusivi o una migliore esperienza utente.',
      },
      {
        question: 'Perche le SERP differiscono tra desktop e mobile?',
        answer: 'Google mantiene algoritmi di ranking separati per la ricerca desktop e mobile. Le SERP mobile danno priorita alle pagine ottimizzate per mobile, pesano maggiormente le metriche di velocita della pagina e mostrano funzionalita SERP diverse. Una pagina posizionata al terzo posto su desktop potrebbe trovarsi al settimo su mobile se ha una scarsa esperienza mobile. Controlla sempre entrambe le versioni se il tuo pubblico e distribuito tra dispositivi, e dai priorita all\'ottimizzazione mobile poiche Google utilizza l\'indicizzazione mobile-first.',
      },
      {
        question: 'Cosa sono le funzionalita SERP e come influenzano il mio tasso di clic?',
        answer: 'Le funzionalita SERP sono risultati non tradizionali, inclusi Featured Snippet, box "Le persone chiedono anche", caroselli video, pacchetti immagini, Knowledge Panel, pacchetti mappe locali e risultati shopping. Ogni funzionalita che appare riduce i clic sui risultati organici — un fenomeno chiamato "cannibalizzazione delle funzionalita SERP". Se una SERP e ricca di funzionalita, anche un posizionamento organico al primo posto potrebbe ricevere meno clic del previsto.',
      },
      {
        question: 'Con quale frequenza cambiano le SERP di Google per una specifica keyword?',
        answer: 'La volatilita della SERP varia in base al tipo di keyword. Le keyword informative evergreen possono avere SERP stabili che cambiano poco nel corso dei mesi. Le keyword legate alle notizie e ai trend possono subire un cambio completo della SERP nel giro di ore. Le keyword commerciali e competitive tipicamente mostrano cambiamenti graduali man mano che le pagine acquisiscono o perdono backlink e vengono rilasciati aggiornamenti dell\'algoritmo. Controllare mensilmente le SERP per le tue keyword principali aiuta a individuare nuovi competitor.',
      },
      {
        question: 'Posso usare i dati SERP per analisi di gap competitivo?',
        answer: 'Assolutamente. Cerca la stessa keyword attraverso piu controlli SERP e annota quali domini appaiono costantemente nei primi 10. I domini che si posizionano per molte delle tue keyword target sono i tuoi principali competitor SEO (che potrebbero essere diversi dai tuoi competitor aziendali). Analizza cosa hanno in comune queste pagine posizionate — lunghezza dei contenuti, struttura, numero di backlink, freschezza dei contenuti — e identifica le lacune dove i tuoi contenuti potrebbero essere superiori.',
      },
      {
        question: 'Cosa significa quando la mia pagina appare nella SERP ma in una posizione bassa?',
        answer: 'Se la tua pagina appare nelle posizioni 11-30 (pagina 2-3 di Google), significa che Google ha riconosciuto i tuoi contenuti come rilevanti ma non li considera ancora sufficientemente autorevoli o completi per la prima pagina. Questo e in realta un segnale positivo — ti trovi nella zona di "distanza di attacco". I miglioramenti che possono spingerti in prima pagina includono l\'aggiunta di contenuti piu completi, la costruzione di 3-5 backlink di qualita, il miglioramento della velocita della pagina e l\'aggiunta di link interni di supporto.',
      },
      {
        question: 'Come uso il SERP Checker per trovare opportunita di Featured Snippet?',
        answer: 'Controlla le SERP per le tue keyword target e cerca le query dove appare gia un Featured Snippet. Poi esamina se il contenuto dello snippet potrebbe essere migliorato. Punta alle keyword per cui sei gia posizionato nelle posizioni 1-10, poiche Google attinge i Featured Snippet principalmente dalle pagine gia in prima pagina. Crea risposte piu complete formattate specificamente per l\'estrazione degli snippet, utilizzando intestazioni chiare, elenchi numerati, tabelle o risposte in paragrafi concisi.',
      },
      {
        question: 'Che ruolo gioca la struttura dell\'URL nella performance SERP?',
        answer: 'Il SERP Checker mostra gli URL completi per ogni risultato posizionato, il che rivela i pattern della struttura degli URL. URL puliti e descrittivi che contengono la keyword target tendono ad apparire piu frequentemente nelle posizioni top. URL lunghi, pieni di parametri o con stringhe di caratteri casuali hanno prestazioni peggiori. Analizza i pattern degli URL delle pagine meglio posizionate — se tutti i risultati in cima utilizzano slug brevi e ricchi di keyword, questo e un segnale per adottare lo stesso approccio.',
      },
      {
        question: 'I dati del SERP Checker possono aiutare con le campagne PPC?',
        answer: 'Si. I dati SERP rivelano il panorama competitivo organico, il che informa la strategia di ricerca a pagamento: se i risultati organici sono dominati da competitor enormi, il PPC potrebbe essere un percorso piu rapido verso la visibilita. I formati di contenuto nei risultati organici suggeriscono l\'intento dell\'utente — allinea la tua landing page pubblicitaria a questo intento per ottenere Quality Score piu alti. Se pochi annunci appaiono nella SERP, c\'e poca competizione a pagamento e potenzialmente CPC favorevoli.',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: 'Keyword Rank Checker',
    title: 'Keyword Rank Checker Gratuito',
    description: 'Controlla per quali keyword qualsiasi sito web si posiziona su Google. Visualizza posizioni di ranking, volumi di ricerca e traffico stimato per ogni keyword.',
    metaDescription: 'Controlla gratuitamente i posizionamenti delle keyword del tuo sito web in qualsiasi paese. Visualizza posizioni, traffico, CPC e performance dei contenuti su tutte le tue pagine.',
    iconName: 'BarChart3',
    category: 'serp-ranking',
    inputType: 'keyword-url',
    inputLabel: 'Inserisci un dominio',
    inputPlaceholder: 'es. example.com',
    secondaryInputLabel: 'Filtra per keyword (opzionale)',
    secondaryInputPlaceholder: 'es. marketing',
    buttonText: 'Controlla posizionamenti',
    resultType: 'rank-position',
    metricsToShow: ['total_keywords', 'top_3', 'top_10', 'top_50'],
    apiEndpoint: 'keyword-rank-checker',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Paese',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Stati Uniti' },
          { value: '2826', label: 'Regno Unito' },
          { value: '2276', label: 'Germania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'Spagna' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasile' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Giappone' },
          { value: '2528', label: 'Paesi Bassi' },
          { value: '2792', label: 'Turchia' },
          { value: '2410', label: 'Corea del Sud' },
          { value: '2484', label: 'Messico' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'position', label: 'Posizione', sortable: true, type: 'number' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'traffic', label: 'Traffico', sortable: true, type: 'number' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Controlla i posizionamenti del tuo sito web nella SERP di qualsiasi paese',
        description: 'Sapere dove ti posizioni e il tabellone segnapunti della SEO. Inserisci il tuo dominio, filtra opzionalmente per una keyword specifica, seleziona il tuo paese e vedi esattamente dove la tua pagina appare nei risultati di Google. Il filtro per keyword e particolarmente potente — invece di setacciare centinaia di posizionamenti, puoi verificare istantaneamente uno specifico termine target. I brand internazionali e le agenzie multi-mercato usano il selettore del paese per monitorare i posizionamenti separatamente per ogni mercato in cui operano.',
        image: '/Rank checker/Check the rank of your website on any countrys SERP.png',
      },
      {
        title: 'Spia i posizionamenti dei competitor in diversi paesi',
        description: 'Inserisci il dominio di qualsiasi competitor e seleziona tra oltre 15 paesi per vedere il loro profilo completo di posizionamento. Questo rivela quali keyword stanno conquistando, quali mercati stanno prioritizzando e dove la loro strategia SEO e piu forte. Le agenzie lo usano durante le analisi competitive e l\'onboarding di nuovi clienti per mappare il panorama competitivo.',
        image: '/Rank checker/Check how your competitors rank on Google.png',
      },
      {
        title: 'Analizza la performance dei contenuti a livello di keyword',
        description: 'La tabella dei risultati mostra ogni keyword posizionata accanto alla sua posizione, volume di ricerca, CPC, traffico stimato e l\'URL specifico che si posiziona. Questa vista a livello di pagina ti consente di identificare i tuoi contenuti migliori e quelli con performance inferiore.',
        image: '/Rank checker/See your websites content performance.png',
      },
      {
        title: 'Comprendi la competitivita complessiva del posizionamento del tuo sito',
        description: 'La dashboard riepilogativa analizza Keyword totali, Top 3, Top 10 e Top 50. Questa distribuzione ti mostra immediatamente dove si trova il tuo sito. Monitora questi numeri mensilmente per misurare se la tua strategia SEO sta spostando le keyword verso l\'alto attraverso le posizioni SERP.',
        image: '/Rank checker/Understand your sites ranking and competitivement across keywords.png',
      },
    ],
    faqs: [
      {
        question: 'Cos\'e un Keyword Rank Checker e come si differenzia da un SERP Checker?',
        answer: 'Un Keyword Rank Checker ti indica dove il TUO specifico sito web (o qualsiasi dominio) si posiziona per le keyword. Inserisci un dominio e lo strumento restituisce le keyword e le posizioni per quel sito. Un SERP Checker, invece, ti mostra TUTTI i siti web che si posizionano per una specifica keyword. Pensala cosi: un Rank Checker risponde alla domanda "per quali keyword si posiziona il mio sito?", mentre un SERP Checker risponde a "chi si posiziona per questa keyword?". Entrambi gli strumenti sono essenziali per una strategia SEO completa.',
      },
      {
        question: 'Quanto sono accurati i risultati del Keyword Rank Checker?',
        answer: 'I risultati del Rank Checker riflettono i posizionamenti organici di Google al momento della query, basati sul paese selezionato e sulle impostazioni di ricerca standard (non personalizzate). I risultati possono differire leggermente da cio che vedi quando cerchi direttamente su Google, perche il tuo browser personalizza i risultati in base alla tua cronologia di ricerca, alla tua posizione geografica e al tuo account con cui sei collegato. Per monitorare i posizionamenti in modo affidabile, usa sempre uno strumento rank checker piuttosto che ricerche manuali su Google.',
      },
      {
        question: 'Cosa significa la suddivisione "Top 3", "Top 10" e "Top 50"?',
        answer: 'Le keyword "Top 3" sono le tue posizioni piu forti (le posizioni 1-3 catturano circa il 60% di tutti i clic organici per una query). "Top 10" significa prima pagina di Google, dove confluisce praticamente tutto il traffico organico. "Top 50" comprende le pagine 1-5, che rappresentano il tuo universo di keyword visibili. Le keyword al di fuori delle prime 50 posizioni raramente generano traffico misurabile.',
      },
      {
        question: 'Come posso spostare le keyword dalla pagina 2 alla pagina 1 di Google?',
        answer: 'Le keyword posizionate nelle posizioni 11-20 sono i tuoi obiettivi di ottimizzazione a piu alta priorita. Le tattiche includono: aggiornare e ampliare il contenuto per corrispondere meglio all\'intento di ricerca, costruire 3-5 backlink di qualita verso la pagina specifica, migliorare il title tag e la meta description per un tasso di clic piu alto, aggiungere link interni dalle tue pagine con maggiore autorita, migliorare la velocita della pagina e i Core Web Vitals, e aggiungere markup di dati strutturati.',
      },
      {
        question: 'Con quale frequenza dovrei controllare i miei posizionamenti delle keyword?',
        answer: 'Controlla le tue keyword target principali (le 10-20 keyword piu importanti per il tuo business) settimanalmente. Controlla il tuo portfolio di keyword piu ampio mensilmente. Evita i controlli giornalieri — i posizionamenti fluttuano naturalmente di 1-3 posizioni in un qualsiasi giorno a causa degli aggiustamenti dell\'algoritmo di Google, dei test e degli aggiornamenti dell\'indice.',
      },
      {
        question: 'Perche i miei posizionamenti differiscono tra i paesi?',
        answer: 'Google mantiene indici di ricerca e algoritmi di ranking separati per ogni paese. I fattori che influenzano i posizionamenti specifici per paese includono: lingua e localizzazione dei contenuti, posizione del server e presenza CDN, backlink specifici per paese, segnali aziendali locali, implementazione dei tag hreflang, e comportamento di ricerca e concorrenza specifici per paese.',
      },
      {
        question: 'Cosa stima la colonna Traffico e quanto e affidabile?',
        answer: 'La colonna Traffico stima le visite organiche mensili che una keyword invia al tuo URL, basandosi sulla posizione di ranking e sul volume di ricerca della keyword. Utilizza modelli di tasso di clic (CTR) — la posizione #1 ottiene circa il 27-31% dei clic, la #2 ottiene il 15-17%, la #3 ottiene il 10-12%, e cosi via a scalare. Queste sono stime, non numeri esatti, ma sono direzionalmente accurate.',
      },
      {
        question: 'Come uso i dati di posizionamento per identificare opportunita di ottimizzazione dei contenuti?',
        answer: 'Cerca pagine posizionate nelle posizioni 4-15 per keyword ad alto volume — questi sono i tuoi obiettivi di ottimizzazione con il ROI piu alto. Poi analizza perche non si posizionano piu in alto: il contenuto e meno completo rispetto a quello dei competitor? La pagina ha meno backlink? Il title tag e meno accattivante? Confronta la tua pagina con i primi 3 risultati attuali per ogni keyword.',
      },
      {
        question: 'Cosa mi dicono i dati CPC in un Rank Checker sui miei posizionamenti?',
        answer: 'Il CPC rivela il valore commerciale di ogni keyword per cui ti posizioni. Se sei in posizione #3 per una keyword con CPC di 25 $, quella posizione ti sta facendo risparmiare significative spese pubblicitarie — stai ottenendo gratuitamente quei clic che costerebbero 25 $ ciascuno tramite Google Ads. Moltiplica il traffico stimato per il CPC per calcolare il "valore del traffico" di ogni posizionamento.',
      },
      {
        question: 'Posso filtrare i risultati di posizionamento per keyword specifiche?',
        answer: 'Si. Il campo opzionale "Filtra per keyword" ti consente di inserire una keyword o frase specifica per restringere i risultati. Questo e utile quando vuoi controllare i tuoi posizionamenti per un particolare cluster tematico piuttosto che visualizzare tutte le keyword contemporaneamente. Questa capacita di filtraggio rende lo strumento pratico anche per siti che si posizionano per centinaia o migliaia di keyword.',
      },
      {
        question: 'Come traccio i miglioramenti di posizionamento nel tempo?',
        answer: 'Esporta i tuoi dati di posizionamento in CSV ogni volta che esegui un controllo, e confronta i cambiamenti di posizione mese per mese. Crea un semplice foglio di calcolo che traccia le tue 20 keyword principali, le loro posizioni ogni mese e la direzione del cambiamento. Nell\'arco di 3-6 mesi, dovresti vedere una tendenza chiara: keyword che si spostano gradualmente verso le posizioni 1-10 indicano una strategia SEO che funziona.',
      },
      {
        question: 'Qual e la differenza tra la colonna URL del Rank Checker e il SERP Checker?',
        answer: 'La colonna URL del Rank Checker mostra quale pagina specifica sul TUO dominio si posiziona per ogni keyword. Questo e molto utile per la gestione SEO interna: puoi vedere se la pagina giusta si sta posizionando, identificare la cannibalizzazione delle keyword (due delle tue pagine che competono per la stessa keyword) e scoprire pagine che si posizionano per termini inaspettati. Il SERP Checker, invece, mostra tutti i domini che si posizionano per una keyword.',
      },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'YouTube Keyword Tool',
    title: 'YouTube Keyword Tool Gratuito',
    description: 'Trova le migliori keyword per i tuoi video YouTube. Ottieni dati su volume di ricerca, difficolta e CPC per ottimizzare titoli, descrizioni e tag dei tuoi video.',
    metaDescription: 'Trova idee di keyword per YouTube in qualsiasi nicchia. Visualizza volume di ricerca, difficolta e CPC per pianificare contenuti video che vengano scoperti e posizionati.',
    iconName: 'Youtube',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Inserisci una keyword per YouTube',
    inputPlaceholder: 'es. come montare video',
    buttonText: 'Trova keyword',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'youtube-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Paese',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Stati Uniti' },
          { value: '2826', label: 'Regno Unito' },
          { value: '2276', label: 'Germania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'Spagna' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasile' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Giappone' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competizione', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Ricerca argomenti video che le persone cercano realmente',
        description: 'YouTube e il secondo motore di ricerca al mondo, e la maggior parte dei creator fallisce perche crea video che nessuno cerca. Inserisci una keyword come "come montare un video", seleziona il tuo paese target e visualizza immediatamente cosa gli utenti YouTube digitano nella barra di ricerca. Questo sostituisce le supposizioni con i dati — invece di sperare che un argomento video funzioni bene, sai in anticipo che esiste una domanda reale. Content creator, video marketer e gestori di canali YouTube usano questo strumento come punto di partenza per ogni calendario editoriale.',
        image: '/Youtube keyword tool/Research and plan your youtube content better.png',
      },
      {
        title: 'Valuta il panorama competitivo delle keyword YouTube',
        description: 'La tabella dei risultati mostra ogni keyword accanto al suo volume specifico per YouTube, Keyword Difficulty (KD), CPC e punteggio di competizione. Questo ti consente di identificare quali argomenti video sono raggiungibili per le dimensioni del tuo canale. Un piccolo canale con meno di 1.000 iscritti dovrebbe puntare a keyword con KD inferiore a 20, mentre i canali affermati possono competere per termini a difficolta piu elevata. La colonna CPC rivela anche quali keyword attirano spesa pubblicitaria — utile se la tua strategia di monetizzazione dipende dalle entrate pubblicitarie di YouTube, poiche le keyword con CPC piu alto generano tipicamente RPM migliori.',
        image: '/Youtube keyword tool/See how competitive your youtube content ideas are.png',
      },
      {
        title: 'Misura la viabilita complessiva di un argomento prima di impegnarti in una serie di contenuti',
        description: 'La dashboard riepilogativa mostra Keyword totali (50), Volume medio e Difficolta media per il cluster di keyword attorno al tuo termine seed. Questo ti indica se un argomento ha sufficiente profondita e domanda per sostenere una serie di video. Se il volume medio e forte e la difficolta media e gestibile, hai il via libera per pianificare una serie di contenuti multi-video attorno all\'argomento. Se i numeri sono deboli, cambia direzione prima di investire tempo nella produzione. La produzione video e costosa — questo controllo di 10 secondi puo farti risparmiare ore di sforzo sprecato.',
        image: '/Youtube keyword tool/See the search volume of your content ideas on youtube.png',
      },
      {
        title: 'Integra rilevanza semantica in titoli, tag e descrizioni dei video',
        description: 'L\'algoritmo di YouTube, come quello di Google, premia i contenuti che dimostrano profondita tematica. Questa vista mostra keyword correlate e i loro volumi di ricerca, che dovrebbero essere integrati nel titolo del video, nella descrizione, nei tag e persino nel dialogo parlato (YouTube trascrive e indicizza l\'audio). Ad esempio, se la tua keyword principale e "come montare un video", termini correlati come "programma per creare video clip", "software per invertire video" e "proporzioni video YouTube" dovrebbero apparire naturalmente nei tuoi metadati. Questa ottimizzazione semantica migliora drasticamente la scopribilita attraverso le ricerche correlate.',
        image: '/Youtube keyword tool/Use related keywords to make your youtube video semantically relevant.png',
      },
    ],
    faqs: [
      {
        question: 'Perche ho bisogno di uno strumento keyword specifico per YouTube invece di uno strumento keyword generico?',
        answer: 'YouTube e Google sono motori di ricerca separati con algoritmi, comportamenti degli utenti e pattern di ricerca diversi. Una keyword che ottiene 10.000 ricerche su Google potrebbe ottenerne solo 200 su YouTube e viceversa. Gli strumenti keyword per YouTube estraggono dati specificamente dall\'ecosistema di ricerca di YouTube, fornendoti stime di volume accurate per la piattaforma dove i tuoi video devono effettivamente posizionarsi. Usare dati keyword di Google per l\'ottimizzazione YouTube e come usare una mappa stradale per navigare nell\'oceano — il terreno e fondamentalmente diverso.',
      },
      {
        question: 'Come si differenzia la difficolta delle keyword YouTube dalla difficolta delle keyword Google?',
        answer: 'Il KD di YouTube misura la competizione tra video, non tra pagine web. I fattori che influenzano il posizionamento su YouTube includono tempo di visualizzazione, tasso di clic sulle miniature, engagement (like, commenti, condivisioni), autorita del canale e ottimizzazione dei metadati video. Mentre i backlink contano di piu per Google, il tempo di visualizzazione e l\'engagement contano di piu per YouTube. Una keyword con KD 20 su YouTube significa che puoi competere con un video ben prodotto e ben ottimizzato anche se il tuo canale e relativamente nuovo.',
      },
      {
        question: 'Come posso trovare keyword YouTube a bassa competizione per un nuovo canale?',
        answer: 'Filtra i risultati per keyword con KD tra 0 e 15 e volume di ricerca superiore a 50. Concentrati su query long-tail (3-6 parole) che rispondono a domande specifiche o tutorial, come "come montare un video YouTube su iPhone" piuttosto che "montaggio video". I nuovi canali dovrebbero anche cercare keyword "domanda" (che iniziano con come, cosa, perche, si puo) perche tendono ad avere competizione piu bassa ed engagement piu alto, dato che gli spettatori guardano piu a lungo quando hanno davvero bisogno della risposta.',
      },
      {
        question: 'Cosa significa il CPC per le keyword YouTube?',
        answer: 'Il CPC rappresenta quanto gli inserzionisti pagano per clic sugli annunci mostrati per quella keyword. Per i creator YouTube, keyword con CPC piu alto si traducono in ricavi pubblicitari piu elevati per mille visualizzazioni (RPM). Se sei monetizzato attraverso il Programma Partner di YouTube, targetizzare keyword con CPC superiori a 3-5$ significa che gli inserzionisti sono disposti a pagare di piu per il tuo pubblico, il che aumenta direttamente i tuoi guadagni. Questo e particolarmente rilevante per i canali nei settori finanza, software, assicurazioni e B2B dove i CPC possono superare i 20$.',
      },
      {
        question: 'Come uso le keyword YouTube per ottimizzare i metadati del mio video?',
        answer: 'Inserisci la tua keyword principale nel titolo del video (preferibilmente vicino all\'inizio), nella prima frase della descrizione e come primo tag. Usa le keyword secondarie dalla lista di keyword correlate come tag aggiuntivi, nel corpo della descrizione e come titoli dei capitoli se usi i timestamp. YouTube trascrive anche il tuo audio e lo usa per il posizionamento, quindi pronuncia la tua keyword principale nei primi 30 secondi del video. Questo posizionamento multi-touch delle keyword segnala a YouTube esattamente di cosa tratta il tuo video.',
      },
      {
        question: 'Questo strumento puo aiutarmi a trovare argomenti di tendenza su YouTube?',
        answer: 'Lo strumento mostra i volumi di ricerca mensili medi, che riflettono un interesse sostenuto piuttosto che picchi virali. Per gli argomenti di tendenza, combina questo strumento con YouTube Trending, Google Trends (filtrato per Ricerca YouTube) e strumenti di social listening. La strategia migliore combina la consapevolezza dei trend con i dati delle keyword: quando individui un argomento di tendenza, verificalo nel YouTube keyword tool per vedere se esiste anche una domanda di ricerca. Gli argomenti con sia slancio di trend che volume di ricerca sono gli obiettivi con le opportunita piu alte.',
      },
      {
        question: 'Qual e una buona soglia di volume di ricerca per le keyword YouTube?',
        answer: 'Dipende dalla tua nicchia. Nelle nicchie ampie come gaming, cucina o fitness, punta a keyword con oltre 500 ricerche mensili su YouTube. Nelle nicchie specializzate come SaaS B2B, data science o hobby di nicchia, keyword con 50-200 ricerche possono generare traffico significativo perche il pubblico e piu mirato e di valore. La metrica chiave non e solo il volume ma anche la competizione — una keyword da 100 ricerche con KD 5 e spesso piu preziosa di una keyword da 5.000 ricerche con KD 70, specialmente per i canali in crescita.',
      },
      {
        question: 'Come pianifico una serie di contenuti YouTube con i dati delle keyword?',
        answer: 'Inizia inserendo una keyword tematica ampia e rivedi tutti i 50 risultati. Raggruppa le keyword correlate in cluster (es. tutorial per principianti, tecniche avanzate, recensioni strumenti, confronti). Ogni cluster diventa una playlist, e ogni keyword all\'interno del cluster diventa un singolo video. Questo approccio "hub and spoke" rispecchia il modo in cui Google premia l\'autorita tematica — YouTube allo stesso modo favorisce i canali che dimostrano competenza approfondita in un argomento attraverso playlist collegate e pubblicazione costante su argomenti correlati.',
      },
      {
        question: 'Dovrei targetizzare le stesse keyword su YouTube e Google contemporaneamente?',
        answer: 'Si — questa si chiama strategia di double-dip Video SEO. Molte SERP di Google ora includono un carosello video, e i video YouTube appaiono frequentemente in questi caroselli. Targetizzando la stessa keyword su entrambe le piattaforme, puoi catturare traffico sia dal carosello video di Google CHE dalla ricerca nativa di YouTube. Dai priorita alle keyword dove Google mostra gia risultati video. Le query tutorial, how-to e recensioni sono le piu propense ad attivare i caroselli video.',
      },
      {
        question: 'Come funziona il punteggio di competizione per le keyword YouTube?',
        answer: 'Il punteggio di competizione (0-100) riflette quanti inserzionisti fanno offerte su quella keyword per il posizionamento degli annunci su YouTube. Un punteggio di 100 significa massima competizione tra inserzionisti; 0 significa che nessun inserzionista la sta targetizzando. Sebbene questo influenzi principalmente i ricavi pubblicitari piuttosto che il posizionamento organico, un punteggio di competizione alto indica interesse commerciale nel tuo pubblico. I creator possono sfruttare questo contattando brand nelle nicchie ad alta competizione per accordi di sponsorizzazione, dato che quei brand stanno gia spendendo denaro per raggiungere quel pubblico attraverso gli annunci.',
      },
      {
        question: 'Quante keyword dovrei usare in un singolo video YouTube?',
        answer: 'Concentrati su una keyword principale e 5-10 keyword secondarie per video. La tua keyword principale guida il titolo e l\'argomento principale. Le keyword secondarie appaiono nella descrizione, nei tag e nei titoli dei capitoli. Riempire eccessivamente di keyword danneggia sia l\'esperienza dello spettatore che l\'algoritmo di YouTube, che rileva la ripetizione innaturale. La lista di keyword correlate di questo strumento ti fornisce il set perfetto di termini secondari semanticamente collegati, assicurando che i tuoi metadati siano naturali massimizzando al contempo la scopribilita.',
      },
      {
        question: 'Posso usare questo strumento per la ricerca keyword degli YouTube Shorts?',
        answer: 'Si. Gli YouTube Shorts appaiono nella ricerca YouTube, nel feed Shorts e sempre piu nella ricerca Google. Gli stessi dati keyword sono applicabili — se un termine ha un alto volume di ricerca su YouTube, creare uno Short che targetizza quel termine puo catturare esposizione aggiuntiva. Gli Shorts funzionano particolarmente bene per query ad alto volume e bassa profondita come "come fare [attivita veloce]" o "recensione [prodotto] in 60 secondi". Usa lo strumento keyword per trovare questi argomenti veloci, poi crea Shorts per vittorie rapide riservando i video long-form per keyword piu approfondite e a difficolta maggiore.',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: 'Amazon Keyword Tool',
    title: 'Amazon Keyword Tool Gratuito',
    description: 'Ricerca keyword per le inserzioni di prodotti Amazon. Trova termini ad alto volume di ricerca con dati su difficoltà e CPC per ottimizzare i tuoi titoli e descrizioni prodotto.',
    metaDescription: 'Ricerca keyword per prodotti Amazon gratuitamente. Visualizza volume di ricerca, difficoltà e CPC per ottimizzare le inserzioni e scoprire nicchie di prodotto ad alta domanda.',
    iconName: 'ShoppingBag',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Inserisci una keyword prodotto',
    inputPlaceholder: 'es. cuffie wireless',
    buttonText: 'Trova keyword',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'amazon-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Paese',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Stati Uniti' },
          { value: '2826', label: 'Regno Unito' },
          { value: '2276', label: 'Germania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'Spagna' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasile' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Giappone' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competizione', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Validare idee di prodotto prima di investire in inventario',
        description: 'Lanciare un prodotto su Amazon senza ricerca keyword è come aprire un negozio in una strada senza passaggio pedonale. Inserisci una keyword prodotto come "cuffie wireless", seleziona il tuo paese e visualizza immediatamente quante persone cercano prodotti in quella categoria. Il menu a tendina del paese ti permette di confrontare la domanda in oltre 10 mercati — così puoi verificare se il tuo prodotto ha domanda di ricerca negli Stati Uniti, nel Regno Unito, in Germania o in altri marketplace Amazon prima di impegnarti in acquisti di inventario, cicli di produzione o spedizioni FBA.',
        image: '/Amazon keyword tool/Check how viable your ideas are on amazon.png',
      },
      {
        title: 'Analizzare la densità competitiva delle keyword prodotto',
        description: 'La tabella dei risultati mostra ogni keyword prodotto con il relativo Volume, KD, CPC e punteggio di Competizione. Le keyword principali possono mostrare volumi di 450.000 con punteggi di competizione di 100 — il che significa che si tratta di un mercato estremamente saturo. Ma analizzando più in profondità si scoprono sotto-nicchie meno competitive dove i nuovi venditori possono competere. Questa tabella è essenziale per i venditori Amazon FBA e i marchi private label che cercano nicchie di prodotto con una competizione gestibile.',
        image: '/Amazon keyword tool/See how competitive a business idea is on Amazon.png',
      },
      {
        title: 'Quantificare la domanda di una categoria prodotto a colpo d\'occhio',
        description: 'Il pannello di riepilogo mostra Keyword Totali (50), Volume Medio e Difficoltà Media per la tua categoria prodotto. I venditori Amazon usano questa istantanea per confrontare le dimensioni delle categorie — se stai decidendo tra entrare in un mercato piuttosto che in un altro, questa dashboard ti fornisce il confronto della domanda in pochi secondi. La difficoltà media ti indica anche se molte keyword prodotto long-tail rimangono ancora accessibili.',
        image: '/Amazon keyword tool/See how popular and how many people search for a given idea on amazon.png',
      },
      {
        title: 'Scoprire keyword backend e termini prodotto long-tail',
        description: 'L\'algoritmo A10 di Amazon classifica i prodotti in parte basandosi sulla rilevanza delle keyword nei titoli, bullet point, descrizioni e termini di ricerca backend. Questa vista mostra la lista completa delle keyword prodotto correlate e i loro volumi — dai termini principali alle variazioni long-tail. Queste variazioni long-tail dovrebbero essere inserite nel campo dei termini di ricerca backend della tua inserzione prodotto, nei bullet point e nel contenuto A+ per massimizzare la visibilità della tua inserzione attraverso la più ampia gamma possibile di query degli acquirenti.',
        image: '/Amazon keyword tool/See other sematically relevant content ideas for your main ideas on amazon.png',
      },
    ],
    faqs: [
      {
        question: 'Perché le keyword Amazon sono diverse dalle keyword Google?',
        answer: 'Amazon e Google servono intenti utente fondamentalmente diversi. Chi cerca su Google potrebbe stare facendo ricerche, confrontando o semplicemente navigando. Chi cerca su Amazon è quasi sempre in modalità acquisto — ha intenzione di comprare. Questo significa che le keyword Amazon sono focalizzate sul prodotto (nomi di brand, specifiche del prodotto, casi d\'uso) mentre le keyword Google coprono intenti informativi, navigazionali e transazionali.',
      },
      {
        question: 'Come funziona la difficoltà keyword per le inserzioni prodotto Amazon?',
        answer: 'La difficoltà keyword Amazon stima quanto sia competitivo posizionare la tua inserzione prodotto nella prima pagina di Amazon per quel termine di ricerca. I fattori includono il numero di venditori consolidati che targetizzano la keyword, il loro numero di recensioni, la velocità delle vendite, la qualità dell\'ottimizzazione dell\'inserzione e la spesa pubblicitaria. Un KD di 0–10 significa che una nuova inserzione può apparire rapidamente in prima pagina con una buona ottimizzazione. Un KD superiore a 40 richiede tipicamente prezzi competitivi, campagne PPC, recensioni solide e inserzioni altamente ottimizzate.',
      },
      {
        question: 'Qual è un buon volume di ricerca per una keyword prodotto Amazon?',
        answer: 'Per venditori private label, le keyword principali dovrebbero avere almeno 1.000 ricerche mensili per garantire una domanda sufficiente. I termini head ad alto volume (100.000+) sono estremamente competitivi e solitamente dominati dai grandi brand. Le keyword mid-tail (1.000–10.000) offrono spesso il miglior equilibrio tra domanda e raggiungibilità. Le keyword long-tail (sotto 1.000) funzionano bene come termini di ricerca backend e nelle campagne PPC dove l\'intento d\'acquisto specifico porta a tassi di conversione più elevati.',
      },
      {
        question: 'Come dovrei usare i dati keyword Amazon per ottimizzare la mia inserzione?',
        answer: 'Segui la gerarchia di posizionamento keyword di Amazon: (1) Inserisci la keyword principale nel titolo del prodotto, (2) Posiziona le 5 keyword secondarie più importanti nei bullet point, (3) Usa le keyword rimanenti nella descrizione del prodotto e nel contenuto A+, (4) Carica tutti i termini rilevanti rimanenti nei termini di ricerca backend (fino a 250 byte). Non ripetere mai le keyword in questi campi — l\'algoritmo di Amazon conta ogni keyword una sola volta indipendentemente da quante volte appare.',
      },
      {
        question: 'Posso usare questo strumento per la ricerca di campagne Amazon PPC?',
        answer: 'Assolutamente. La colonna CPC mostra quanto gli inserzionisti pagano per i clic sugli annunci Sponsored Product per ogni keyword. Usa questi dati per stimare il tuo budget pubblicitario, identificare le keyword dove il posizionamento organico ti farebbe risparmiare una spesa pubblicitaria significativa e scoprire keyword a basso CPC dove puoi gestire campagne PPC redditizie.',
      },
      {
        question: 'Come trovo nicchie di prodotto redditizie con questo strumento?',
        answer: 'Cerca cluster di keyword dove il volume di ricerca medio è superiore a 5.000 ma il KD medio è inferiore a 20. Poi controlla il CPC — un CPC più alto indica che i venditori in questa nicchia sono abbastanza redditizi da potersi permettere la pubblicità. La nicchia ideale ha alta domanda di ricerca, bassa competizione, margini sani e prodotti in prima pagina con meno di 500 recensioni (indicando l\'accessibilità del mercato per i nuovi entranti).',
      },
      {
        question: 'Qual è la differenza tra punteggio di competizione e KD per le keyword Amazon?',
        answer: 'Il punteggio di Competizione riflette la densità della pubblicità a pagamento — quanti venditori stanno pubblicando annunci Sponsored Product su quella keyword. Il KD riflette la difficoltà di posizionamento organico — quanto è difficile apparire in prima pagina senza annunci. Puoi avere una keyword con KD organico basso ma alta competizione a pagamento, il che significa che è facile posizionarsi organicamente ma difficile ottenere visibilità pubblicitaria.',
      },
      {
        question: 'Come uso le keyword Amazon per la ricerca prodotto pre-lancio?',
        answer: 'Usa questo strumento per la validazione pre-lancio: (1) Inserisci keyword ampie della categoria prodotto, (2) Esamina il volume delle keyword correlate per confermare la domanda, (3) Controlla il KD per valutare la fattibilità competitiva, (4) Osserva l\'ampiezza delle keyword long-tail — una nicchia con molte variazioni long-tail ha spazio per prodotti differenziati, (5) Incrocia i dati con i costi del tuo fornitore per stimare la redditività.',
      },
      {
        question: 'Dovrei targetizzare keyword con nomi di brand nella mia inserzione Amazon?',
        answer: 'Non inserire mai nomi di brand concorrenti nel titolo o nei bullet point del prodotto — i termini di servizio di Amazon lo vietano e ciò può portare alla soppressione dell\'inserzione. Tuttavia, le keyword legate ai brand appaiono naturalmente nei risultati dello strumento e sono utili per comprendere il panorama competitivo. La tua strategia dovrebbe essere quella di targetizzare gli equivalenti generici e competere su prezzo, caratteristiche e recensioni.',
      },
      {
        question: 'Posso usare questo strumento per marketplace Amazon al di fuori degli Stati Uniti?',
        answer: 'Sì. Il selettore paese supporta i principali marketplace Amazon inclusi USA, UK, Germania, Francia, Spagna, Italia, Brasile, Canada, Australia, India e Giappone. Ogni mercato ha volumi di keyword, livelli di competizione e comportamenti degli acquirenti differenti. Un prodotto che è sovrasaturo nel mercato statunitense potrebbe essere poco servito in Germania o in Giappone.',
      },
      {
        question: 'Quante keyword dovrei includere nei termini di ricerca backend di Amazon?',
        answer: 'Amazon consente fino a 250 byte di termini di ricerca backend (circa 250 caratteri per l\'inglese). Usa questo spazio per keyword che non si inseriscono naturalmente nel tuo titolo, bullet point o descrizione. Dai priorità alle keyword uniche — non ripetere termini già presenti nella tua inserzione visibile. Usa gli spazi per separare i termini (non virgole o punti e virgola — Amazon li tratta come byte sprecati).',
      },
      {
        question: 'Come utilizza l\'algoritmo Amazon A10 le keyword per classificare le inserzioni prodotto?',
        answer: 'L\'algoritmo A10 di Amazon considera la rilevanza delle keyword come uno dei diversi fattori di ranking insieme alla velocità delle vendite, al tasso di conversione, al tasso di clic, all\'autorità del venditore e alle vendite organiche. Le inserzioni con la keyword nel titolo si posizionano più in alto rispetto a quelle che la contengono solo nei termini backend. Oltre alla corrispondenza, l\'algoritmo classifica poi in base alle metriche di performance — il che significa che l\'ottimizzazione delle keyword ti fa indicizzare, ma il tasso di conversione e le vendite determinano la tua posizione.',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: 'Bing Keyword Tool',
    title: 'Bing Keyword Tool Gratuito',
    description: 'Ricerca keyword per il motore di ricerca Bing. Ottieni volume di ricerca specifico per Bing, CPC e dati sulla concorrenza per ottimizzare i tuoi contenuti per il motore di ricerca Microsoft.',
    metaDescription: 'Trova idee di keyword per Bing gratuitamente. Visualizza volume di ricerca, CPC e dati sulla concorrenza per sfruttare le SERP meno competitive e ad alta conversione di Bing.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Inserisci una keyword',
    inputPlaceholder: 'es. software gestione progetti',
    buttonText: 'Trova keyword',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume'],
    apiEndpoint: 'bing-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Paese',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Stati Uniti' },
          { value: '2826', label: 'Regno Unito' },
          { value: '2276', label: 'Germania' },
          { value: '2250', label: 'Francia' },
          { value: '2724', label: 'Spagna' },
          { value: '2380', label: 'Italia' },
          { value: '2076', label: 'Brasile' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australia' },
          { value: '2356', label: 'India' },
          { value: '2392', label: 'Giappone' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Competizione', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Ricercare keyword specifiche per l\'ecosistema di ricerca Bing',
        description: 'Bing alimenta la ricerca per Microsoft Edge (il browser predefinito su ogni PC Windows), Cortana, Yahoo Search e i risultati organici di DuckDuckGo. Questo rappresenta circa il 10–15% del traffico di ricerca desktop — un segmento che la maggior parte dei professionisti SEO ignora completamente. Inserisci qualsiasi keyword, seleziona il tuo paese target e ottieni dati di ricerca specifici per Bing. Questo è particolarmente prezioso per i marketer B2B e i brand che puntano a demografie più mature, poiché gli utenti di Bing tendono a essere più orientati al desktop, con redditi più alti e in ambienti enterprise dove i prodotti Microsoft sono lo standard.',
        image: '/Bing keyword tool/Search any keyword on any region on Bing.png',
      },
      {
        title: 'Valutare il volume unico e la densità keyword di Bing',
        description: 'Il pannello di riepilogo mostra il numero totale di idee keyword e il loro volume medio su Bing. Una keyword seed che genera oltre 1.000 termini correlati indica un cluster tematico profondo e semanticamente ricco disponibile sulla piattaforma di Bing. Questa metrica di densità ti aiuta a decidere se l\'ottimizzazione per Bing vale lo sforzo per la tua nicchia. Per le keyword relative a software B2B, query su strumenti enterprise e servizi professionali, Bing spesso offre un volume sorprendente di utenti con intento più elevato e meno costosi da convertire.',
        image: '/Bing keyword tool/See a keywords volume and semantic density on Bing.png',
      },
      {
        title: 'Confrontare la competitività organica e a pagamento su Bing',
        description: 'La tabella dei risultati mostra Volume, CPC e Competizione per ogni keyword specificamente su Bing. Bing Ads (Microsoft Advertising) ha tipicamente CPC inferiori rispetto a Google Ads — spesso del 30–50% più economici per le stesse keyword. Questa tabella permette ai gestori PPC di identificare le keyword dove Bing offre un costo per acquisizione migliore rispetto a Google. Consente inoltre ai professionisti SEO di vedere quali keyword affrontano meno competizione organica su Bing.',
        image: '/Bing keyword tool/Find how competitives organic and paid keywords are in bing.png',
      },
      {
        title: 'Scoprire cluster di keyword e opportunità di contenuto uniche per Bing',
        description: 'Questa vista mostra la lista completa delle variazioni keyword con i loro volumi di ricerca su Bing. Poiché la base utenti di Bing ha demografie e comportamenti diversi rispetto a quella di Google, il panorama delle keyword può differire significativamente. Termini relativi a software enterprise, integrazioni Microsoft, strumenti professionali e determinati prodotti legati a fasce demografiche specifiche spesso performano in modo sproporzionato su Bing. Usa questa lista per identificare opportunità di contenuto che i tuoi concorrenti stanno perdendo ottimizzando solo per Google.',
        image: '/Bing keyword tool/Check other clusters around your main keyword in bing.png',
      },
    ],
    faqs: [
      {
        question: 'Perché dovrei interessarmi alle keyword Bing quando Google domina la ricerca?',
        answer: 'Bing cattura circa il 10–15% del traffico di ricerca desktop a livello globale, il che si traduce in centinaia di milioni di ricerche al mese. Ancora più importante, il pubblico di Bing tende ad avere redditi più alti, essere più maturo e più orientato all\'ambito enterprise — demografie che spesso convertono a tassi più elevati. Poiché meno professionisti SEO ottimizzano specificamente per Bing, il panorama competitivo è significativamente meno affollato.',
      },
      {
        question: 'Come si differenzia l\'algoritmo di ricerca di Bing da quello di Google?',
        answer: 'L\'algoritmo di ranking di Bing condivide somiglianze con Google ma presenta differenze notevoli. Bing attribuisce più peso alle keyword a corrispondenza esatta nei titoli e nelle meta descrizioni, valuta i segnali social provenienti da piattaforme come Facebook e LinkedIn, dà una leggera preferenza ai domini più vecchi e consolidati, e gestisce i contenuti multimediali in modo più prominente nelle sue SERP. Bing tende inoltre ad essere più trasparente riguardo ai propri fattori di ranking.',
      },
      {
        question: 'Quali settori traggono maggior beneficio dall\'ottimizzazione keyword su Bing?',
        answer: 'I settori che beneficiano in modo sproporzionato da Bing includono software B2B e SaaS (utenti enterprise su browser predefiniti Microsoft), servizi finanziari (demografie a reddito più elevato), sanità (demografie più mature), immobiliare (comportamento di ricerca prevalentemente da desktop), istruzione e servizi professionali. Qualsiasi settore in cui il cliente target utilizza probabilmente un computer Windows con Edge come browser predefinito dovrebbe prendere in considerazione l\'ottimizzazione per Bing.',
      },
      {
        question: 'Gli annunci Bing sono più economici degli annunci Google per le stesse keyword?',
        answer: 'Sì, nella maggior parte dei casi. I CPC di Bing Ads (Microsoft Advertising) sono tipicamente inferiori del 30–50% rispetto a Google Ads per keyword equivalenti, poiché c\'è meno competizione tra gli inserzionisti sulla piattaforma. I dati CPC in questo strumento riflettono i prezzi specifici di Bing, permettendoti di calcolare i potenziali risparmi. Molti inserzionisti importano le loro campagne Google Ads in Bing Ads e ottengono un costo per acquisizione significativamente inferiore.',
      },
      {
        question: 'Quante idee keyword posso generare per Bing?',
        answer: 'Lo strumento può restituire oltre 1.000 idee keyword da una singola keyword seed su Bing. Questo è significativamente più di quanto offrano molti strumenti di ricerca specifici per Bing. Il volume di idee keyword indica la profondità semantica dell\'argomento sulla piattaforma di Bing.',
      },
      {
        question: 'Bing ha una propria metrica di difficoltà keyword?',
        answer: 'Questo strumento fornisce un punteggio KD basato sul panorama competitivo dei risultati organici di Bing, che è separato dalle metriche di difficoltà di Google. Poiché meno siti web ottimizzano attivamente per Bing, scoprirai spesso che le stesse keyword sono significativamente più facili da posizionare su Bing rispetto a Google. Questo crea un\'opportunità di arbitraggio.',
      },
      {
        question: 'Come gestisce Bing l\'intento di ricerca diversamente da Google?',
        answer: 'I risultati di ricerca di Bing tendono a favorire risposte dirette e contenuti a corrispondenza esatta più di Google, che interpreta sempre più il significato semantico. Questo significa che su Bing, avere la frase keyword esatta nel title tag, H1 e URL slug ha un impatto più forte sul posizionamento. Bing inoltre mostra più contenuti visivi nei risultati di ricerca e ha un approccio diverso alla ricerca locale.',
      },
      {
        question: 'Posso usare i dati keyword Bing per informare la mia strategia SEO Google?',
        answer: 'Sì — i dati keyword Bing possono rivelare tendenze di ricerca preziose e comportamenti degli utenti che sono meno visibili su Google a causa della maggiore competizione. I suggerimenti keyword di Bing a volte fanno emergere variazioni long-tail e formati di domande che non compaiono negli strumenti keyword di Google. Questi termini spesso rappresentano esigenze reali degli utenti che sono poco servite anche nelle SERP di Google.',
      },
      {
        question: 'Cos\'è il punteggio di competizione per le keyword Bing?',
        answer: 'Il punteggio di Competizione (0–100) riflette quanti inserzionisti stanno facendo offerte su quella keyword in Microsoft Advertising (Bing Ads). Un punteggio di 0 significa che nessun inserzionista la sta targetizzando; 100 significa forte competizione pubblicitaria. Questa metrica è distinta dalla competizione organica e riguarda principalmente le campagne PPC. Tuttavia, un\'alta competizione a pagamento su Bing segnala anche valore commerciale.',
      },
      {
        question: 'Come ottimizzo i contenuti specificamente per l\'algoritmo di ricerca di Bing?',
        answer: 'Le tattiche chiave per l\'ottimizzazione su Bing includono: usare keyword a corrispondenza esatta nel title tag e H1, scrivere meta descrizioni chiare e ricche di keyword, assicurarsi che il tuo sito sia verificato su Bing Webmaster Tools, costruire segnali social attraverso condivisioni su LinkedIn e Facebook, inviare una sitemap XML specificamente a Bing, utilizzare contenuti multimediali con alt text e garantire tempi di caricamento rapidi — Bing penalizza i siti lenti in modo più aggressivo rispetto a Google.',
      },
      {
        question: 'Quale percentuale del mio traffico potrebbe provenire da Bing?',
        answer: 'Per la maggior parte dei siti web, Bing genera il 5–15% del traffico organico totale, ma questo varia drasticamente in base al settore e al pubblico. I siti B2B e focalizzati sull\'enterprise vedono spesso il 15–25% del traffico proveniente da Bing, mentre i siti orientati al consumatore che targetizzano demografie più giovani possono registrare meno del 5%. Controlla le tue analytics per la sorgente Bing/organic per vedere la tua suddivisione attuale.',
      },
      {
        question: 'La ricerca keyword Bing copre anche Yahoo e DuckDuckGo?',
        answer: 'In parte sì. L\'indice di ricerca organica di Bing alimenta i risultati di Yahoo Search e influenza significativamente i risultati organici di DuckDuckGo. Questo significa che ottimizzare per le keyword di Bing ti dà effettivamente visibilità su tre motori di ricerca contemporaneamente.',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: 'Website Traffic Checker',
    title: 'Website Traffic Checker Gratuito',
    description: 'Controlla il traffico organico e a pagamento stimato di qualsiasi sito web. Visualizza keyword totali, valore del traffico e dati sui movimenti di posizionamento.',
    metaDescription: 'Controlla gratuitamente il traffico organico e a pagamento di qualsiasi sito web. Visualizza posizionamenti keyword, valore del traffico e tendenze di ranking per il benchmarking competitivo.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'url',
    inputLabel: 'Inserisci un dominio',
    inputPlaceholder: 'es. example.com',
    buttonText: 'Controlla traffico',
    options: [],
    resultType: 'traffic-overview',
    metricsToShow: ['organic_traffic', 'paid_traffic', 'total_keywords', 'traffic_value'],
    tableColumns: [
      { key: 'metric', label: 'Metrica', sortable: false, type: 'text' },
      { key: 'value', label: 'Valore', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-traffic-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Stimare istantaneamente il traffico di ricerca di qualsiasi sito web',
        description: 'Prima di entrare in un mercato, devi sapere quanto traffico di ricerca catturano i tuoi concorrenti. Inserisci qualsiasi dominio nel Traffic Checker e ottieni immediatamente una stima delle prestazioni di ricerca organica e a pagamento. Che tu stia valutando un concorrente, ricercando una potenziale acquisizione, verificando un partner pubblicitario o analizzando le prestazioni attuali di un cliente — questo strumento ti fornisce l\'intelligence sul traffico che prima richiedeva costosi abbonamenti enterprise. È il modo più veloce per rispondere alla domanda: "Quanto traffico di ricerca riceve effettivamente questo sito?"',
        image: '/website traffic checker/check any websites traffic.png',
      },
      {
        title: 'Vedere keyword totali posizionate e valore monetario del traffico',
        description: 'Il pannello mostra Keyword Totali (es. 47.854) e Valore del Traffico (es. 223.458 $). Le Keyword Totali mostrano l\'ampiezza della visibilità di ricerca di un sito — quanti termini di ricerca diversi generano visite. Il Valore del Traffico stima quanto costerebbe quel traffico organico se acquistato tramite Google Ads. Un valore del traffico di 223.458 $ significa che i posizionamenti organici del sito risparmiano quasi un quarto di milione di dollari al mese in spesa pubblicitaria equivalente. Questa metrica è una delle più convincenti per dimostrare il ROI SEO a dirigenti, clienti e stakeholder.',
        image: '/website traffic checker/see how many keywords any site ranks for and traffic of any website traffic.png',
      },
      {
        title: 'Monitorare le tendenze di movimento keyword: In Salita, In Discesa, Nuove, Perse',
        description: 'La tabella delle tendenze di posizionamento suddivide le keyword in Top 3, Keyword in Top 10, Nuove Keyword, Posizionamenti Migliorati, Posizionamenti Peggiorati e Posizionamenti Persi. Questo è il polso delle prestazioni SEO. Se "Migliorati" supera "Peggiorati", la SEO del sito funziona. Se "Persi" è alto, qualcosa è andato storto — forse un aggiornamento dell\'algoritmo, decadimento dei contenuti o i concorrenti li hanno superati. Le agenzie presentano questi dati nei report mensili per mostrare ai clienti se il loro investimento SEO sta generando slancio.',
        image: '/website traffic checker/see keywords in tops, declining and improved keywords.png',
      },
      {
        title: 'Confrontare la strategia di traffico organico vs. a pagamento',
        description: 'La vista divisa mostra Traffico Organico e Traffico a Pagamento affiancati. Questo rivela la strategia di ricerca di un sito a colpo d\'occhio. Un sito con alto traffico organico e zero traffico a pagamento ha investito fortemente nella SEO. Un sito con traffico organico e a pagamento bilanciato è diversificato. Un sito completamente dipendente dal traffico a pagamento è vulnerabile ai tagli di budget. Usa questo per confrontare la tua strategia e identificare vantaggi competitivi.',
        image: '/website traffic checker/see organic and paid traffic.png',
      },
    ],
    faqs: [
      {
        question: 'Come stima il traffico un Website Traffic Checker senza accesso all\'analytics?',
        answer: 'I traffic checker stimano il traffico organico usando una combinazione di dati di posizionamento keyword e modelli di tasso di clic. Lo strumento identifica per quali keyword un sito si posiziona, le posizioni di ranking e i volumi di ricerca mensili per quelle keyword. Poi applica stime di tasso di clic basate sulla posizione (es. il risultato #1 ottiene circa il 28% dei clic, il #2 circa il 15%) per calcolare le visite mensili stimate da ogni keyword. La somma di tutte le stime di traffico a livello di keyword produce la stima di traffico totale.',
      },
      {
        question: 'Cos\'è il Valore del Traffico e come viene calcolato?',
        answer: 'Il Valore del Traffico rappresenta il costo mensile stimato per replicare il traffico organico di un sito tramite Google Ads. Viene calcolato moltiplicando il traffico organico stimato di ogni keyword per il suo CPC (Costo Per Clic), poi sommando su tutte le keyword. Ad esempio, se un sito riceve 1.000 visite organiche da una keyword con un CPC di 5 $, quella keyword contribuisce 5.000 $ al valore del traffico. Questo dimostra in modo potente il valore monetario dell\'investimento SEO.',
      },
      {
        question: 'Qual è la differenza tra traffico organico e traffico a pagamento?',
        answer: 'Il traffico organico proviene dai risultati non a pagamento dei motori di ricerca — gli utenti cliccano sul tuo annuncio perché è apparso naturalmente su Google in base a rilevanza e autorità. Il traffico a pagamento proviene dalla pubblicità sui motori di ricerca (Google Ads) — paghi per ogni clic sul tuo annuncio sponsorizzato. Il traffico organico è "gratuito" nel senso che non paghi per clic, ma richiede investimenti nella creazione di contenuti e SEO. Il traffico a pagamento offre visibilità immediata ma si interrompe nel momento in cui metti in pausa il budget pubblicitario.',
      },
      {
        question: 'Cosa significano le metriche "Nuove Keyword", "Migliorate", "Peggiorate" e "Perse"?',
        answer: '"Nuove Keyword" sono termini di ricerca per i quali il sito ha iniziato a posizionarsi nell\'ultimo periodo — indicando che nuovi contenuti vengono indicizzati o che contenuti esistenti stanno guadagnando visibilità. "Posizionamenti Migliorati" sono keyword dove la posizione del sito è salita (più vicina al #1). "Posizionamenti Peggiorati" sono keyword dove la posizione è scesa. "Posizionamenti Persi" sono keyword per le quali il sito era precedentemente posizionato ma non appare più nella top 100. Un sito sano tipicamente mostra Nuove + Migliorate che superano significativamente Peggiorate + Perse.',
      },
      {
        question: 'Quanto sono accurate le stime di traffico per siti piccoli vs. grandi?',
        answer: 'Le stime di traffico sono generalmente più accurate per siti più grandi con migliaia di posizionamenti, perché il modello statistico viene mediato su molte keyword. Per siti piccoli che si posizionano per meno di 100 keyword, le stime possono avere margini di errore più ampi poiché la sovra- o sotto-stima di una singola keyword ha un impatto maggiore sul totale. Per il benchmarking competitivo, il confronto relativo (il tuo sito vs. i concorrenti) è più affidabile dei numeri assoluti.',
      },
      {
        question: 'Perché un concorrente con autorità inferiore ha più traffico del mio sito?',
        answer: 'Autorità e traffico sono correlati ma non identici. Un concorrente può superarti nel traffico con autorità inferiore se: (1) ha una migliore strategia di contenuti che targetizza keyword ad alto volume, (2) produce contenuti più frequentemente e costantemente, (3) targetizza keyword long-tail che richiedono meno autorità per posizionarsi, (4) ha un\'ottimizzazione on-page e SEO tecnica superiori, o (5) beneficia di autorità topica in una nicchia specifica nonostante metriche di dominio complessivamente inferiori.',
      },
      {
        question: 'Come posso usare i dati del traffic checker per l\'analisi competitiva?',
        answer: 'Esegui il Traffic Checker per i tuoi top 5 concorrenti e confronta: traffico organico totale, keyword totali, valore del traffico, split organico vs. a pagamento e tendenze di movimento keyword. Questo rivela chi sta crescendo più velocemente, chi si affida agli annunci a pagamento, chi ha il footprint di keyword più ampio e dove ogni concorrente genera più valore. Poi approfondisci le keyword specifiche — per quali keyword si posizionano i concorrenti dove tu non ci sei? Queste sono le tue opportunità di content gap.',
      },
      {
        question: 'Cosa significa quando un sito ha alto valore del traffico ma volume di traffico moderato?',
        answer: 'Questo significa che il sito si posiziona per keyword commercialmente preziose con CPC alti, anche se i volumi di ricerca sono moderati. Un sito che riceve 10.000 visite mensili da keyword con CPC medio di 20 $ ha un valore del traffico di 200.000 $ — più di un sito che riceve 100.000 visite da keyword con CPC medio di 0,50 $ (50.000 $ di valore del traffico). Un alto valore del traffico relativo al volume di traffico indica che il sito targetizza keyword bottom-of-funnel, ad alta intenzione che generano ricavi.',
      },
      {
        question: 'Come monitoro le tendenze di traffico nel tempo?',
        answer: 'Esporta i dati sul traffico mensilmente e crea un pannello storico. Monitora traffico organico totale, keyword totali, keyword in Top 3, keyword in Top 10 e valore del traffico su periodi di 6–12 mesi. Traccia questi come linee di tendenza per visualizzare crescita o declino. La metrica più significativa da monitorare è "Keyword in Top 10" perché correla direttamente con il traffico — più keyword in prima pagina hai, più traffico ricevi.',
      },
      {
        question: 'Posso usare questo strumento per stimare i ricavi di un sito web?',
        answer: 'Sebbene i dati del traffic checker da soli non rivelino i ricavi, puoi creare stime approssimative. Per siti supportati dalla pubblicità, moltiplica il traffico stimato per gli RPM tipici (5–30 $ per 1.000 visualizzazioni di pagina a seconda della nicchia). Per siti e-commerce, applica tassi di conversione medi del settore (1–3%) e valori medi degli ordini. Per siti SaaS, stima i lead dal traffico usando tassi di conversione tipici (2–5% alla prova gratuita) e i prezzi noti.',
      },
      {
        question: 'Perché un sito mostra zero traffico a pagamento?',
        answer: 'Zero traffico a pagamento significa che il sito attualmente non gestisce campagne Google Ads che le fonti dati dello strumento possono rilevare. Questo potrebbe significare che il sito si affida completamente alla SEO organica (una strategia comune per aziende content-driven), fa pubblicità su altre piattaforme (Facebook, LinkedIn, reti display) invece che su Google Search, o ha recentemente messo in pausa le campagne. Zero traffico a pagamento non è intrinsecamente positivo o negativo — indica semplicemente che la strategia di visibilità nelle ricerche del sito è interamente organica.',
      },
      {
        question: 'Come gestisce il Traffic Checker sottodomini e sottocartelle?',
        answer: 'Lo strumento controlla il traffico per l\'intero dominio inserito. Se un sito usa sottodomini (blog.example.com, shop.example.com), questi sono tipicamente inclusi nella stima di traffico totale del dominio radice. Le sottocartelle (example.com/blog/, example.com/shop/) sono sempre incluse poiché fanno parte dello stesso dominio. Se hai bisogno di stime di traffico per un sottodominio o percorso URL specifico, alcuni strumenti offrono analisi a livello di URL che suddivide il traffico per pagina o sezione.',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: 'Broken Link Checker',
    title: 'Broken Link e Page Health Checker Gratuito',
    description: 'Controlla qualsiasi pagina web per link rotti, problemi SEO e problemi di salute della pagina. Ottieni un audit dettagliato con raccomandazioni operative.',
    metaDescription: 'Controlla gratuitamente qualsiasi pagina web per link rotti e problemi SEO. Ottieni punteggi di salute della pagina, conteggi di link interni/esterni e raccomandazioni di correzione.',
    iconName: 'Link2',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Inserisci un URL',
    inputPlaceholder: 'es. https://example.com',
    buttonText: 'Controlla pagina',
    options: [],
    resultType: 'broken-links',
    metricsToShow: ['page_score', 'issues_found', 'internal_links', 'external_links'],
    tableColumns: [
      { key: 'issue', label: 'Problema', sortable: false, type: 'text' },
      { key: 'severity', label: 'Gravità', sortable: true, type: 'badge' },
      { key: 'description', label: 'Descrizione', sortable: false, type: 'text' },
    ],
    apiEndpoint: 'broken-link-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Controllare qualsiasi pagina per link rotti e salute SEO tecnica',
        description: 'I link rotti distruggono silenziosamente l\'esperienza utente e le prestazioni SEO. Inserisci qualsiasi URL nel checker, clicca su "Controlla pagina" e ottieni un audit istantaneo della salute dei link e dello stato SEO tecnico di quella pagina. Questo sostituisce il controllo manuale link per link con una scansione automatizzata che rileva errori 404, catene di redirect e link esterni morti. Proprietari di siti, professionisti SEO e webmaster lo usano prima del lancio di nuove pagine, dopo migrazioni del sito e come parte dei controlli di salute mensili regolari.',
        image: '/Broken link checker/check your website broken links and technical seo health.png',
      },
      {
        title: 'Monitorare il punteggio SEO tecnico e i problemi critici',
        description: 'Oltre ai link rotti, lo strumento fornisce un Page Score (0–100) e il numero totale di problemi trovati. Un Page Score di 100 con 0 problemi significa che la pagina è tecnicamente sana. Qualsiasi valore sotto 80 segnala problemi che richiedono attenzione. Questo sistema di punteggio ti dà una metrica rapida passa/non passa per ogni pagina del tuo sito.',
        image: '/Broken link checker/See your websites technical seo score + number of critical seo issues.png',
      },
      {
        title: 'Analizzare la distribuzione dei link interni ed esterni',
        description: 'Lo strumento conta e categorizza Link Interni (link ad altre pagine dello stesso dominio) e Link Esterni (link ad altri siti). Questi dati sono critici per due ragioni: (1) la distribuzione dei link interni influenza come i motori di ricerca scansionano e indicizzano il tuo sito, e (2) la qualità dei link esterni influenza l\'affidabilità della tua pagina.',
        image: '/Broken link checker/See internal links from a page, external links.png',
      },
      {
        title: 'Identificare e prioritizzare problemi tecnici specifici',
        description: 'La tabella dei problemi elenca ogni problema trovato, la sua gravità (Info, Avviso, Critico) e una descrizione. Problemi come "Risorse che bloccano il rendering" e "Basso rapporto di contenuto" impattano direttamente i Core Web Vitals e i segnali di qualità del contenuto. Ogni problema viene fornito con contesto operativo — sai esattamente cosa c\'è di sbagliato e puoi prioritizzare in base alla gravità.',
        image: '/Broken link checker/see details about techincal issues from your page.png',
      },
    ],
    faqs: [
      {
        question: 'Cos\'è un link rotto e come influenza la SEO?',
        answer: 'Un link rotto (anche detto link morto o errore 404) è un collegamento ipertestuale che punta a una pagina che non esiste più o restituisce un errore. I link rotti influenzano la SEO in tre modi: (1) Sprecano il crawl budget — i bot dei motori di ricerca spendono tempo su vicoli ciechi invece di indicizzare pagine utili, (2) Interrompono il flusso di link equity — se siti esterni linkano a una pagina del tuo sito che restituisce un 404, perdi il valore di ranking di quei backlink, e (3) Danneggiano l\'esperienza utente — i visitatori che incontrano link rotti perdono fiducia nel tuo sito, aumentando la frequenza di rimbalzo.',
      },
      {
        question: 'Cos\'è un Page Score e come viene calcolato?',
        answer: 'Il Page Score è una metrica 0–100 che valuta la salute tecnica complessiva di una pagina web. Considera link rotti (interni ed esterni), prestazioni di caricamento della pagina, completezza dei meta tag, rapporto contenuto-HTML, risorse che bloccano il rendering, indicatori di compatibilità mobile e altri segnali SEO tecnici. Un punteggio di 90–100 indica una salute eccellente, 70–89 è buono ma con margini di miglioramento, 50–69 necessita attenzione, e sotto 50 suggerisce problemi tecnici seri che probabilmente stanno danneggiando le prestazioni di ricerca.',
      },
      {
        question: 'Qual è la differenza tra link interni e link esterni nella SEO?',
        answer: 'I link interni collegano pagine all\'interno dello stesso dominio (es. la tua homepage che linka al tuo blog). Aiutano i motori di ricerca a scoprire e scansionare i tuoi contenuti, distribuiscono link equity (potere di ranking) attraverso il tuo sito e stabiliscono gerarchie di contenuto. I link esterni (anche detti link in uscita) puntano dal tuo sito ad altri domini. Segnalano qualità del contenuto e rilevanza tematica ai motori di ricerca quando linkano a fonti autorevoli. Entrambi i tipi di link sono essenziali per la SEO — una pagina sana tipicamente ha una forte struttura di link interni e alcuni link esterni pertinenti verso fonti affidabili.',
      },
      {
        question: 'Ogni quanto dovrei controllare il mio sito per link rotti?',
        answer: 'Controlla le tue pagine più importanti (homepage, pagine di atterraggio principali, articoli del blog con più traffico) mensilmente. Esegui un audit completo di link rotti a livello di sito trimestralmente. Inoltre, controlla sempre dopo migrazioni del sito, aggiornamenti CMS, modifiche alla struttura URL o eliminazioni di contenuto — questi sono gli eventi più comuni che creano link rotti. Per siti grandi con migliaia di pagine, considera di programmare scansioni automatizzate settimanali per individuare i nuovi link rotti prima che si accumulino.',
      },
      {
        question: 'Cosa sono le risorse che bloccano il rendering e perché sono importanti?',
        answer: 'Le risorse che bloccano il rendering sono fogli di stile CSS e file JavaScript che impediscono al browser di visualizzare la pagina fino a quando non sono completamente caricati. Rallentano il tempo al primo rendering significativo — il momento in cui un utente vede il contenuto reale. Questo impatta direttamente le metriche Core Web Vitals come il Largest Contentful Paint (LCP) e il First Contentful Paint (FCP), che Google usa come fattori di ranking. Le soluzioni includono il differimento del JavaScript non critico, l\'inline del CSS critico e il caricamento asincrono degli script non essenziali.',
      },
      {
        question: 'Cosa significa "Basso rapporto di contenuto" nel report dei problemi?',
        answer: 'Basso rapporto di contenuto (anche detto basso rapporto testo-HTML) significa che la pagina ha molto poco testo leggibile rispetto al suo codice HTML. I motori di ricerca possono interpretare questo come una pagina thin content che offre valore limitato agli utenti. Il rapporto sano tipico è superiore al 25% di testo rispetto all\'HTML. Le pagine pesanti di framework JavaScript, grandi menu di navigazione o pubblicità eccessiva possono attivare questo problema. La soluzione è assicurarsi che ogni pagina abbia contenuto testuale sostanziale, unico e informativo che soddisfi l\'intento di ricerca dell\'utente.',
      },
      {
        question: 'I link rotti sul mio sito possono influenzare pagine che non hanno link rotti?',
        answer: 'Sì, attraverso un concetto chiamato spreco di crawl budget. I motori di ricerca assegnano un crawl budget limitato a ogni sito web — il numero di pagine che scansionano per visita. Quando i bot incontrano link rotti, li seguono fino a vicoli ciechi, usando crawl budget che avrebbe potuto essere speso per indicizzare le tue pagine buone. Sui siti grandi (10.000+ pagine), link rotti eccessivi possono causare che nuovi contenuti importanti vengano scoperti e indicizzati più lentamente, danneggiando indirettamente il ranking di pagine perfettamente sane.',
      },
      {
        question: 'Dovrei correggere prima i link rotti interni o esterni?',
        answer: 'Correggi prima i link rotti interni. I link rotti interni influenzano direttamente la scansionabilità, la navigazione e la distribuzione di link equity interna del tuo sito — tutto ciò che controlli completamente. I link rotti esterni (link dalla tua pagina ad altri siti che sono andati offline) contano anche, ma il loro impatto è meno grave. Per i link rotti esterni, puoi rimuovere il link, sostituirlo con un link a una fonte aggiornata, o usare la Wayback Machine per trovare versioni archiviate del contenuto.',
      },
      {
        question: 'Cos\'è la link equity e come la influenzano i link rotti?',
        answer: 'La link equity (precedentemente chiamata "link juice") è il valore di ranking trasferito da una pagina all\'altra attraverso i collegamenti ipertestuali. Quando un sito autorevole linka alla tua pagina, trasmette link equity che aiuta la tua pagina a posizionarsi meglio. Se quel link punta a una pagina del tuo sito che restituisce un errore 404, la link equity viene sprecata — fluisce in un vicolo cieco. Trovando i link in entrata rotti e configurando redirect 301 verso pagine attive pertinenti, puoi recuperare questa link equity persa e migliorare il tuo posizionamento.',
      },
      {
        question: 'Come uso i dati sui link rotti per il link building?',
        answer: 'Il Broken Link Building è una strategia comprovata di acquisizione link. Trova pagine rotte su siti concorrenti o di settore utilizzando un verificatore di link rotti. Poi crea contenuto sul tuo sito che copre lo stesso argomento della pagina morta. Infine, contatta i siti web che linkavano alla pagina rotta e suggerisci loro di sostituire il link morto con un link al tuo contenuto attivo e pertinente. Questa strategia funziona perché stai aiutando i webmaster a risolvere un problema reale mentre guadagni un backlink.',
      },
      {
        question: 'Quali codici di stato HTTP indicano link rotti?',
        answer: 'I codici di stato più comuni per link rotti sono: 404 (Non trovato — la pagina non esiste), 410 (Rimosso — la pagina è stata intenzionalmente eliminata), 500 (Errore interno del server — il server ha avuto un errore), 502 (Bad Gateway) e 503 (Servizio non disponibile). Inoltre, 301 (Redirect permanente) e 302 (Redirect temporaneo) non sono propriamente "rotti", ma le catene di redirect (redirect multipli in sequenza) sprecano link equity e rallentano i tempi di caricamento. Questo strumento rileva tutti questi codici di stato e li categorizza per gravità.',
      },
      {
        question: 'I link rotti possono causare la de-indicizzazione delle mie pagine da Google?',
        answer: 'Pochi link rotti non causeranno la de-indicizzazione. Tuttavia, se una percentuale significativa degli URL del tuo sito restituisce errori 404, o se pagine critiche linkate dalla tua navigazione falliscono costantemente, Google può ridurre il tasso di scansione per il tuo dominio e segnalare il tuo sito come mal mantenuto. In casi estremi dove i link rotti creano pagine orfane (pagine senza link validi che puntano ad esse), quelle pagine specifiche possono essere rimosse dall\'indice. L\'audit regolare di link rotti previene questo deterioramento.',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'AI Visibility Checker',
    title: 'AI Visibility Checker Gratuito',
    description: 'Scopri come le AI Overview di Google influenzano il tuo sito web. Scopri quale percentuale delle tue keyword attiva AI Overview, quanto traffico è a rischio e ottieni un punteggio di visibilità AI.',
    metaDescription: 'Controlla gratuitamente come le AI Overview di Google influenzano il tuo sito. Visualizza il tasso di esposizione alle AI Overview, le keyword interessate, il traffico a rischio e il punteggio di visibilità AI.',
    iconName: 'Sparkles',
    category: 'other',
    inputType: 'url',
    inputLabel: 'Inserisci un dominio',
    inputPlaceholder: 'es. example.com',
    buttonText: 'Controlla visibilità AI',
    options: [],
    resultType: 'ai-visibility',
    metricsToShow: ['ai_exposure', 'ai_keywords', 'traffic_at_risk'],
    tableColumns: [
      { key: 'metric', label: 'Metrica', sortable: false, type: 'text' },
      { key: 'value', label: 'Valore', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'ai-visibility-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Controllare la visibilità di qualsiasi sito nella ricerca basata sull\'AI',
        description: 'Le AI Overview, ChatGPT, Perplexity e Gemini stanno cambiando fondamentalmente il modo in cui gli utenti trovano informazioni — e la maggior parte dei siti non ha idea di come si comporta in questo nuovo panorama. Inserisci qualsiasi dominio, clicca su "Controlla visibilità AI" e ottieni un audit completo di come il sito appare nei risultati di ricerca basati sull\'AI. Questo è il primo passo nella AI Engine Optimization (AEO), la disciplina emergente accanto alla SEO tradizionale.',
        image: '/ai visibility checker/check any websites visibility in llms.png',
      },
      {
        title: 'Analizzare la distribuzione e il posizionamento delle keyword nelle AI Overview',
        description: 'Le metriche dettagliate mostrano Keyword Totali Posizionate, Keyword con AI Overview, Tasso di Esposizione AI Overview, Distribuzione Keyword per Posizione (#1 AI Keywords, #2–3, #4–10), Traffico Organico da Keyword AI e Traffico Organico Totale. Questa suddivisione dettagliata mostra esattamente quanto del tuo portfolio keyword è interessato dalle AI Overview di Google.',
        image: '/ai visibility checker/see keyword distribution for ai overview.png',
      },
      {
        title: 'Quantificare quanto traffico è a rischio a causa delle AI Overview',
        description: 'La visualizzazione a doppia metrica mostra Keyword con AI Overview e Traffico a Rischio. Il "Traffico a Rischio" stima il traffico organico che potrebbe diminuire se le AI Overview assorbono i clic che precedentemente andavano ai risultati organici tradizionali. Questa è la metrica più importante per comprendere l\'impatto della ricerca AI sul tuo business.',
        image: '/ai visibility checker/see number of keywords in ai overview and which percentage of your traffic is at risk with google ai overviews.png',
      },
      {
        title: 'Confrontare la forza del dominio con l\'esposizione alle AI Overview',
        description: 'Il pannello combina il tuo Domain Score (es. 97 "Molto forte") con la tua percentuale di esposizione alle AI Overview. Questa combinazione è cruciale: un dominio forte non ti protegge dalle AI Overview. Anche i siti più autorevoli sono esposti a un\'erosione massiccia del tasso di clic dalle risposte generate dall\'AI. Il Domain Score mostra la tua forza SEO tradizionale, mentre la metrica di esposizione mostra quanto di quella forza è minacciata dall\'AI.',
        image: '/ai visibility checker/see your domain score in ai overview and exposure level to ai overview.png',
      },
    ],
    faqs: [
      {
        question: 'Cos\'è la visibilità AI e perché è importante per la SEO nel 2025–2026?',
        answer: 'La visibilità AI si riferisce a quanto prominentemente il tuo sito web, marchio o contenuto appare nelle esperienze di ricerca basate sull\'AI — incluse le AI Overview di Google, le risposte di ChatGPT, le risposte di Perplexity, i risultati di Gemini e Microsoft Copilot. È importante perché questi sistemi AI stanno cambiando fondamentalmente il comportamento di ricerca. Le AI Overview di Google appaiono ora per oltre il 70% delle query informazionali, spesso rispondendo direttamente alla domanda dell\'utente senza richiedere un clic verso alcun sito web. Questo significa che i posizionamenti SEO tradizionali da soli non garantiscono più il traffico.',
      },
      {
        question: 'Cosa sono le AI Overview di Google e come influenzano il traffico organico?',
        answer: 'Le AI Overview di Google (precedentemente SGE — Search Generative Experience) sono riassunti di risposta generati dall\'AI che appaiono in cima ai risultati di ricerca di Google per molte query. Sintetizzano informazioni da fonti multiple e presentano una risposta diretta, riducendo la necessità per gli utenti di cliccare verso siti web individuali. Gli studi mostrano che le AI Overview possono ridurre i tassi di clic sui risultati organici del 18–64%, a seconda del tipo di query. Le query informazionali sono le più colpite, mentre le query navigazionali e transazionali sono meno impattate.',
      },
      {
        question: 'Cosa significa "Traffico a Rischio" e come viene calcolato?',
        answer: 'Il "Traffico a Rischio" stima il traffico organico che potrebbe diminuire se le AI Overview assorbono i clic. Viene calcolato identificando tutte le keyword per cui (a) il tuo sito si posiziona attualmente e riceve traffico e (b) Google mostra una AI Overview per quella query. Il traffico proveniente da quelle keyword rappresenta il volume a rischio, poiché le AI Overview possono ridurre i tassi di clic che precedentemente inviavano visitatori alle tue pagine.',
      },
      {
        question: 'Cos\'è l\'esposizione alle AI Overview e cosa significa una percentuale alta?',
        answer: 'L\'esposizione alle AI Overview è la percentuale delle tue keyword posizionate che attivano le AI Overview di Google. Un\'esposizione del 76,8% significa che per oltre tre quarti delle tue keyword posizionate, Google mostra una risposta generata dall\'AI sopra i risultati organici.',
      },
      {
        question: 'Come si differenzia la visibilità AI dalla visibilità SEO tradizionale?',
        answer: 'La visibilità SEO tradizionale misura la tua presenza nei risultati di ricerca organici standard (link blu). La visibilità AI misura la tua presenza nelle risposte generate dall\'AI. Le due possono divergere: un sito in posizione #1 organica potrebbe non essere citato nella AI Overview per la stessa keyword, o un sito in posizione #5 potrebbe essere la fonte di citazione principale per la risposta AI. La visibilità AI dipende da fattori diversi — completezza del contenuto, dati strutturati, riconoscimento di entità, accuratezza fattuale e quanto facilmente i sistemi AI possono estrarre e citare le tue informazioni.',
      },
      {
        question: 'Cos\'è l\'AI Engine Optimization (AEO) e come inizio?',
        answer: 'L\'AEO è la pratica di ottimizzare i tuoi contenuti per essere referenziati, citati e presentati nelle risposte di ricerca generate dall\'AI. Le strategie chiave includono: fornire risposte chiare e concise, usare dati strutturati e schema markup, costruire autorità tematica, includere dati originali e mantenere alti segnali E-E-A-T.',
      },
      {
        question: 'Come influenza la forza del dominio la citazione nelle AI Overview?',
        answer: 'I sistemi AI, incluse le AI Overview di Google, tendono a citare fonti autorevoli e conosciute più frequentemente. Punteggi di dominio più alti correlano con tassi di citazione più alti nelle risposte AI. Tuttavia, la forza del dominio da sola non è sufficiente — l\'AI valuta anche la specificità del contenuto, l\'accuratezza fattuale, la freschezza e quanto bene il contenuto risponde alla query specifica. Un sito di nicchia con profonda esperienza su un argomento specifico può essere citato al posto di un sito generalista ad alta autorità se il suo contenuto è più rilevante e completo.',
      },
      {
        question: 'Quali tipi di contenuto sono più vulnerabili alla perdita di traffico dalle AI Overview?',
        answer: 'I contenuti informazionali che rispondono a semplici domande fattuali sono i più vulnerabili — definizioni, risposte how-to rapide, statistiche, confronti e query "Cos\'è". I tipi di contenuto più resilienti includono: analisi approfondite, strumenti interattivi, ricerche originali e confronti di prodotti con esperienza personale.',
      },
      {
        question: 'Posso vedere quali piattaforme AI citano i miei contenuti?',
        answer: 'Questo strumento misura specificamente l\'esposizione alle AI Overview su Google. Per il monitoraggio più ampio delle piattaforme AI (ChatGPT, Perplexity, Gemini, Copilot), strumenti dedicati di brand monitoring tracciano dove e come il tuo marchio e contenuto appaiono attraverso le piattaforme AI. Le metriche di questo strumento — in particolare i dati di AI Overview a livello di keyword — ti danno il quadro specifico di Google, che è il canale a più alto impatto dato che Google domina ancora il traffico di ricerca.',
      },
      {
        question: 'Cosa dovrei fare se la mia esposizione alle AI Overview è superiore al 50%?',
        answer: 'Un\'esposizione alta richiede una risposta multi-livello: (1) Verifica quali keyword specifiche attivano le AI Overview, (2) Ottimizza le tue pagine con più traffico per la citazione AI, (3) Diversifica le fonti di traffico, (4) Crea formati di contenuto che le AI Overview non possono replicare, e (5) Monitora mensilmente.',
      },
      {
        question: 'Come si rapporta il Domain Score nel contesto della visibilità AI all\'autorità tradizionale?',
        answer: 'Il Domain Score accanto ai dati delle AI Overview è la stessa metrica di autorità basata sulla forza del profilo backlink. Nel contesto della visibilità AI, offre una prospettiva cruciale: un Domain Score forte significa che la tua base SEO tradizionale è solida, ma la percentuale di esposizione AI mostra quanto di quella base viene perturbata.',
      },
      {
        question: 'La visibilità AI è rilevante per i siti B2B ed enterprise?',
        answer: 'Assolutamente. Gli acquirenti B2B usano sempre più strumenti AI per la ricerca di fornitori, la valutazione tecnologica e il supporto alle decisioni di acquisto. Le AI Overview di Google sono particolarmente prevalenti per le query informazionali B2B come "miglior CRM per piccole imprese" o "come implementare il SSO". I marchi enterprise che appaiono come citazioni nelle AI Overview guadagnano una credibilità significativa — essere menzionati da un sistema AI è percepito come un endorsement. Al contrario, i marchi B2B assenti dalle risposte AI rischiano di essere invisibili per una generazione emergente di decisori.',
      },
    ],
  },
};

export function getSeoToolBySlugIt(slug: string): SeoToolConfig | undefined {
  return seoToolsIt[slug];
}

export function getAllSeoToolsIt(): SeoToolConfig[] {
  return Object.values(seoToolsIt);
}

export function getAllSeoToolSlugsIt(): string[] {
  return Object.keys(seoToolsIt);
}
