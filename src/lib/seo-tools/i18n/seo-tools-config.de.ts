import { SeoToolConfig } from '../seo-tools-config.types';

export const seoToolsDe: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: 'Keyword-Generator',
    title: 'Kostenloser Keyword-Generator',
    description: 'Finden Sie tausende Keyword-Ideen für Ihre SEO- und Content-Marketing-Kampagnen. Erhalten Sie Suchvolumen, Keyword-Schwierigkeit und CPC-Daten.',
    metaDescription: 'Generieren Sie Keyword-Ideen aus jedem Seed-Begriff. Sehen Sie Suchvolumen, Schwierigkeit und CPC für 15+ Länder — kostenlos, keine Anmeldung erforderlich.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Geben Sie ein Seed-Keyword ein',
    inputPlaceholder: 'z.B. E-Mail-Marketing',
    buttonText: 'Keywords finden',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'keyword-generator',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Land',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Vereinigte Staaten' },
          { value: '2826', label: 'Vereinigtes Königreich' },
          { value: '2276', label: 'Deutschland' },
          { value: '2250', label: 'Frankreich' },
          { value: '2724', label: 'Spanien' },
          { value: '2380', label: 'Italien' },
          { value: '2076', label: 'Brasilien' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Australien' },
          { value: '2356', label: 'Indien' },
          { value: '2392', label: 'Japan' },
          { value: '2528', label: 'Niederlande' },
          { value: '2792', label: 'Türkei' },
          { value: '2410', label: 'Südkorea' },
          { value: '2484', label: 'Mexiko' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Wettbewerb', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Keyword-Möglichkeiten in jedem Markt entdecken',
        description: 'Ob Sie in den britischen Markt expandieren, Käufer in Brasilien ansprechen oder eine lokale Kampagne in Japan durchführen — dieses Tool ermöglicht es Ihnen, die Keyword-Nachfrage in über 15 Ländern von einer einzigen Eingabe aus zu recherchieren. Geben Sie ein Seed-Keyword wie „E-Mail-Marketing" ein, wählen Sie Ihr Zielland aus dem Dropdown-Menü und entdecken Sie sofort die Begriffe, die echte Menschen bei Google eingeben. Dies ist besonders nützlich für internationale SEO-Teams, die Content-Rollouts über mehrere Regionen planen, oder E-Commerce-Marken, die die Produktnachfrage vor dem Eintritt in einen neuen Markt validieren.',
        image: '/Keyword Generator/ideate keywords from a seed keyword in any location.png',
      },
      {
        title: 'Verschaffen Sie sich einen Überblick über die Suchlandschaft eines Themas',
        description: 'Bevor Sie Ressourcen für einen Content-Cluster einsetzen, müssen Sie wissen, ob das Thema genügend Suchnachfrage hat und ob der Wettbewerb bewältigbar ist. Nach Eingabe Ihres Seed-Keywords liefert das Tool ein Zusammenfassungs-Dashboard mit Gesamt-Keywords (z.B. 50 Ergebnisse), Durchschnittlichem Volumen über diese Keywords und Durchschnittlicher Schwierigkeit. Dieser Snapshot ermöglicht es Content-Strategen und SEO-Managern, schnell einzuschätzen, ob ein Thema es wert ist, verfolgt zu werden, oder ob sie zu einem günstigeren Keyword-Territorium wechseln sollten.',
        image: '/Keyword Generator/See a comprehensive overview of your see keyword from search volume to difficulty to cpc.png',
      },
      {
        title: 'Bewerten Sie die Wettbewerbsfähigkeit auf Keyword-Ebene für die Content-Priorisierung',
        description: 'Die Ergebnistabelle zeigt jedes Keyword zusammen mit seinem monatlichen Suchvolumen, Keyword-Schwierigkeits-Score (KD), Cost Per Click (CPC) und Wettbewerbsindex. Diese Multi-Metriken-Ansicht ermöglicht es Ihnen, den Sweet Spot zu finden: hochvolumige Keywords mit niedriger Schwierigkeit und bedeutsamer kommerzieller Absicht. PPC-Manager können die CPC-Spalte zur Schätzung der Werbeausgaben nutzen, während SEO-Praktiker den KD-Score verwenden können, um zu entscheiden, welche Keywords mit Langform-Content angegangen werden sollten und welche eine Backlink-First-Strategie benötigen.',
        image: '/Keyword Generator/See any keywords competitive landscape from kyword difficulty to cpc.png',
      },
      {
        title: 'Semantisch verwandte Keywords für thematische Autorität erschließen',
        description: 'Googles Ranking-Algorithmus belohnt Seiten, die ein Thema umfassend abdecken. Diese Ansicht zeigt eine saubere Liste semantisch verwandter Keywords mit ihren jeweiligen Suchvolumina. Nutzen Sie diese, um sekundäre und LSI-Keywords (Latent Semantic Indexing) zu identifizieren, die in Ihren Überschriften, Fließtext und FAQ-Bereichen erscheinen sollten. Indem Sie diese verwandten Begriffe in Ihren Content einweben, signalisieren Sie Suchmaschinen thematische Tiefe — einer der stärksten On-Page-Ranking-Faktoren für informationelle Anfragen.',
        image: '/Keyword Generator/see other semantically relevant keywords (secondary keyword) and their volume close to your main keyword.png',
      },
    ],
    faqs: [
      {
        question: 'Was ist ein Keyword-Generator und wie funktioniert er?',
        answer: 'Ein Keyword-Generator ist ein Recherche-Tool, das ein Seed-Keyword nimmt — einen breiten Begriff oder eine Phrase, für die Sie ranken möchten — und eine Liste verwandter Suchanfragen zurückgibt, die echte Nutzer in Suchmaschinen eingeben. Der Keyword-Generator von Analyze AI funktioniert durch Abfrage einer Datenbank von Suchbegriffen, liefert bis zu 50 Keyword-Ideen pro Suche und zeigt für jedes Keyword das monatliche Suchvolumen, den Keyword-Schwierigkeits-Score, die Kosten pro Klick und das Wettbewerbsniveau an. Der Prozess dauert Sekunden und erfordert kein Konto oder Login.',
      },
      {
        question: 'Wie wird die Keyword-Schwierigkeit (KD) in diesem Tool berechnet?',
        answer: 'Die Keyword-Schwierigkeit ist ein Score von 0 bis 100, der schätzt, wie schwer es wäre, in den Top-10-Ergebnissen der organischen Suche für einen bestimmten Begriff zu ranken. Der Score berücksichtigt die Backlink-Stärke und Domain-Autorität der Seiten, die derzeit auf Seite eins von Google ranken. Ein KD von 0–10 gilt als einfach (neue Websites können konkurrieren), 11–30 ist mittel (erfordert soliden Content und einige Backlinks), 31–60 ist schwer (braucht starke Autorität und Linkaufbau) und 61–100 ist sehr schwer (dominiert von hochautoritativen Seiten wie Wikipedia, Amazon oder großen Publishern).',
      },
      {
        question: 'Was ist der Unterschied zwischen Suchvolumen und Keyword-Schwierigkeit?',
        answer: 'Das Suchvolumen gibt an, wie viele Menschen monatlich nach einem Begriff suchen — es misst die Nachfrage. Die Keyword-Schwierigkeit gibt an, wie wettbewerbsfähig die Suchergebnisse für diesen Begriff sind — sie misst den angebotsseitigen Widerstand. Ein Keyword mit 10.000 monatlichen Suchen, aber einem KD von 85 kann weniger wertvoll sein als ein Keyword mit 500 Suchen und einem KD von 8, weil Sie für letzteres realistisch ranken können. Die beste Keyword-Strategie balanciert beide Metriken aus.',
      },
      {
        question: 'Wie kann ich CPC-Daten aus einem kostenlosen Keyword-Tool nutzen, wenn ich nur SEO mache?',
        answer: 'CPC (Cost Per Click) spiegelt wider, wie viel Werbetreibende bereit sind, für einen einzelnen Klick auf dieses Keyword in Google Ads zu zahlen. Selbst wenn Sie keine bezahlten Kampagnen durchführen, ist CPC ein starker Indikator für kommerzielle Absicht. Keywords mit hohen CPCs (z.B. 15\u20AC+) zeigen an, dass Unternehmen diese Suchenden als wertvoll erachten — was bedeutet, dass sie einer Kaufentscheidung näher sind. Die Ausrichtung auf Keywords mit hohem CPC durch SEO-Content kann Traffic generieren, der mit höheren Raten konvertiert.',
      },
      {
        question: 'Wie viele Keywords kann ich pro Suche generieren?',
        answer: 'Jede Suche liefert bis zu 50 Keyword-Ideen aus dem eingegebenen Seed-Begriff. Um mehr Ideen zu generieren, versuchen Sie Variationen Ihres Seed-Keywords, verwenden Sie Long-Tail-Modifikatoren (z.B. „E-Mail-Marketing für Startups" statt „E-Mail-Marketing") oder suchen Sie in verschiedenen Ländern. Power-User führen oft 10–20 Seed-Keyword-Suchen durch und kompilieren die Ergebnisse in eine Master-Keyword-Liste, die dann dedupliziert und nach Volumen und Schwierigkeit priorisiert werden kann.',
      },
      {
        question: 'Kann ich dieses Tool für lokale SEO-Keyword-Recherche verwenden?',
        answer: 'Ja. Die Länderauswahl unterstützt über 15 Länder, darunter die Vereinigten Staaten, das Vereinigte Königreich, Deutschland, Frankreich, Spanien, Italien, Brasilien, Kanada, Australien, Indien und Japan. Durch Wechseln des Landes sehen Sie lokalisierte Suchvolumen-Daten für diesen Markt. Dies ist besonders wertvoll für lokale Unternehmen, regionale E-Commerce-Shops und Agenturen, die Multi-Standort-SEO-Kampagnen verwalten.',
      },
      {
        question: 'Was sind semantisch verwandte Keywords und warum sind sie wichtig für SEO?',
        answer: 'Semantisch verwandte Keywords sind Begriffe, die konzeptionell mit Ihrem Haupt-Keyword verbunden sind, auch wenn sie nicht die exakt gleichen Wörter enthalten. Beispielsweise könnten für das Seed-Keyword „E-Mail-Marketing" semantisch verwandte Begriffe „Newsletter-Automatisierung", „Drip-Kampagnen" und „Abonnenten-Engagement" sein. Google verwendet Natural Language Processing (NLP), um thematische Beziehungen zwischen Begriffen zu verstehen. Seiten, die natürlich semantisch verwandte Keywords enthalten, ranken tendenziell höher, weil sie eine umfassende Themenabdeckung signalisieren.',
      },
      {
        question: 'Wie finde ich Keywords mit geringem Wettbewerb mit diesem Tool?',
        answer: 'Sortieren Sie die Ergebnistabelle nach der KD-Spalte (Keyword-Schwierigkeit) in aufsteigender Reihenfolge. Suchen Sie nach Keywords mit einem KD zwischen 0 und 15, einem monatlichen Suchvolumen über 100 und einem Wettbewerbswert unter 30. Dies sind Ihre „Low-Hanging Fruits" — Begriffe, bei denen eine gut optimierte Seite mit originellem, ausführlichem Content ranken kann, ohne eine umfangreiche Backlink-Investition. Long-Tail-Keywords (3–5 Wörter) haben typischerweise einen geringeren Wettbewerb, weil sie engere Suchabsichten ansprechen, die große Wettbewerber oft übersehen.',
      },
      {
        question: 'Was ist die Wettbewerbswert-Spalte und wie unterscheidet sie sich von der Keyword-Schwierigkeit?',
        answer: 'Der Wettbewerbswert misst, wie viele Werbetreibende auf ein Keyword in der bezahlten Suche (Google Ads) bieten. Ein Score von 100 bedeutet, dass nahezu jeder Anzeigenplatz belegt ist — starker Werbetreiber-Wettbewerb. Die Keyword-Schwierigkeit hingegen misst den organischen Ranking-Wettbewerb basierend auf den Backlink-Profilen der Top-Ranking-Seiten. Ein Keyword kann hohen bezahlten Wettbewerb, aber niedrige organische Schwierigkeit haben (oder umgekehrt). Kluge Marketer vergleichen beide Metriken: Hoher bezahlter Wettbewerb bei niedriger organischer Schwierigkeit signalisiert ein profitables Keyword, das Sie mit SEO gewinnen können, anstatt für Anzeigen zu bezahlen.',
      },
      {
        question: 'Kann ich die Keyword-Ergebnisse exportieren?',
        answer: 'Ja. Das Tool enthält oben in der Ergebnistabelle eine Schaltfläche „CSV exportieren". Damit können Sie die vollständige Keyword-Liste — einschließlich Volumen, KD, CPC und Wettbewerbsdaten — in eine Tabelle herunterladen. Von dort aus können Sie Ergebnisse aus mehreren Suchen zusammenführen, benutzerdefinierte Filter anwenden, Content-Kalender erstellen oder die Daten mit Autoren und SEO-Teammitgliedern teilen.',
      },
      {
        question: 'Wie oft werden die Keyword-Daten aktualisiert?',
        answer: 'Die Keyword-Datenbank wird regelmäßig aktualisiert, um Genauigkeit und Relevanz sicherzustellen. Suchvolumenzahlen basieren auf gleitenden monatlichen Durchschnittswerten, was kurzfristige Spitzen und saisonale Schwankungen glättet. Für Trendthemen oder sich schnell entwickelnde Branchen ist es gute Praxis, Keyword-Tool-Daten mit Google Trends abzugleichen, um Echtzeit-Momentum zu erfassen, das möglicherweise noch nicht in durchschnittlichen monatlichen Volumina reflektiert wird.',
      },
      {
        question: 'Wie sollte ich diesen Keyword-Generator als Teil eines größeren SEO-Workflows verwenden?',
        answer: 'Der Keyword-Generator ist typischerweise der erste Schritt in einem fünfstufigen SEO-Content-Workflow: (1) Entdeckung — verwenden Sie dieses Tool, um Keyword-Ideen aus Seed-Begriffen zu generieren, (2) Qualifizierung — filtern Sie nach KD und Volumen, um tragfähige Ziele zu finden, (3) Clustering — gruppieren Sie semantisch verwandte Keywords in thematische Cluster, (4) Content-Erstellung — schreiben Sie Seiten, die primäre Keywords ansprechen und sekundäre Begriffe natürlich einbeziehen, (5) Tracking — verwenden Sie einen Rank-Checker, um die Performance Ihrer Seiten im Zeitverlauf zu überwachen.',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: 'Keyword-Schwierigkeits-Checker',
    title: 'Kostenloser Keyword-Schwierigkeits-Checker',
    description: 'Prüfen Sie, wie schwer es ist, für ein beliebiges Keyword zu ranken. Erhalten Sie einen Schwierigkeitswert von 0–100 zusammen mit Suchvolumen und Wettbewerbsdaten.',
    metaDescription: 'Prüfen Sie kostenlos die Ranking-Schwierigkeit eines beliebigen Keywords. Sehen Sie KD-Score, Suchvolumen und CPC, um Keywords zu priorisieren, für die Sie tatsächlich ranken können.',
    iconName: 'BarChart3',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Geben Sie ein Keyword ein',
    inputPlaceholder: 'z.B. beste Projektmanagement-Software',
    buttonText: 'Schwierigkeit prüfen',
    resultType: 'keyword-difficulty',
    metricsToShow: ['keyword_difficulty', 'search_volume', 'cpc'],
    apiEndpoint: 'keyword-difficulty',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'Land',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Vereinigte Staaten' },
          { value: '2826', label: 'Vereinigtes Königreich' },
          { value: '2276', label: 'Deutschland' },
          { value: '2250', label: 'Frankreich' },
          { value: '2724', label: 'Spanien' },
          { value: '2380', label: 'Italien' },
          { value: '2076', label: 'Brasilien' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Australien' },
          { value: '2356', label: 'Indien' },
          { value: '2392', label: 'Japan' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
    ],
    useCases: [
      {
        title: 'Schnell beurteilen, ob ein Keyword es wert ist, angestrebt zu werden',
        description: 'Bevor Sie ein einziges Wort Content schreiben, müssen Sie wissen, ob Sie realistisch für Ihr Ziel-Keyword ranken können. Geben Sie ein beliebiges Keyword ein, wählen Sie aus über 10 Ländern im Dropdown-Menü und erhalten Sie sofort eine Schwierigkeitsbewertung. Dies ist der erste Filter in jeder ernsthaften Content-Strategie — er verhindert, dass Sie wochenlang Aufwand in Keywords investieren, bei denen die Top 10-Ergebnisse von Websites mit Domain-Autoritäten dominiert werden, die Sie nicht erreichen können. Nutzen Sie es, um Kunden-Keyword-Anfragen zu prüfen, Blog-Themenideen zu validieren oder Begriffe aus Brainstorming-Sitzungen vorzuprüfen.',
        image: '/keyword difficulty checker/Check the difficulty of any keyword.png',
      },
      {
        title: 'Erhalten Sie einen 360-Grad-Wettbewerbs-Überblick über jedes Keyword',
        description: 'Das Ergebnis-Dashboard zeigt drei kritische Metriken nebeneinander: Keyword-Schwierigkeit (z.B. 58 „Schwer"), Suchvolumen (z.B. 1.900/Monat) und CPC (z.B. 32,40 $). Diese Drei-Metriken-Ansicht gibt Ihnen das vollständige Bild auf einen Blick. Ein Keyword mit hohem KD, aber auch hohem CPC, könnte es dennoch wert sein, mit einer langfristigen Autoritätsaufbau-Strategie verfolgt zu werden, weil die kommerzielle Absicht den Aufwand rechtfertigt. Umgekehrt kann ein Keyword mit niedrigem KD und null CPC Traffic generieren, aber keinen Umsatz. Nutzen Sie dieses Dashboard, um datengestützte redaktionelle Entscheidungen zu treffen.',
        image: '/keyword difficulty checker/see the keywords 360 competitiveness with cpc.png',
      },
      {
        title: 'Verstehen Sie, was ein Schwierigkeitswert tatsächlich bedeutet',
        description: 'Das KD-Messgerät bietet eine visuelle, intuitive Darstellung der Ranking-Schwierigkeit. Der Score läuft von 0 bis 100 mit farbcodierter Schwere: grün (Einfach, 0–20), gelb (Mittel, 21–40), orange (Schwer, 41–60) und rot (Sehr schwer, 61–100). Diese Visualisierung ist besonders nützlich, wenn Sie Keyword-Recherchen Stakeholdern oder Kunden präsentieren, die nicht täglich im SEO arbeiten und eine schnelle, visuelle Antwort auf „können wir dafür ranken?" benötigen.',
        image: '/keyword difficulty checker/see the keywords actual difficulty.png',
      },
      {
        title: 'Suchnachfrage validieren, bevor Sie in Content investieren',
        description: 'Das Suchvolumen ist die Grundlage aller Keyword-Targeting-Entscheidungen. Diese Karte isoliert die monatliche Suchvolumen-Metrik und lässt Sie bestätigen, dass genügend Menschen aktiv nach diesem Begriff suchen, um die Content-Erstellung zu rechtfertigen. Ein häufiger Fehler im SEO ist das Targeting von Keywords mit null oder vernachlässigbarem Volumen, einfach weil sie relevant erscheinen. Diese schnelle Prüfung verhindert das — und wenn sie mit dem KD-Score kombiniert wird, sagt sie Ihnen, ob die Chance sowohl real als auch erreichbar ist.',
        image: '/keyword difficulty checker/see the keywords actual search volume.png',
      },
    ],
    faqs: [
      {
        question: 'Was ist Keyword-Schwierigkeit und warum sollte ich sie prüfen, bevor ich Content erstelle?',
        answer: 'Keyword-Schwierigkeit (KD) ist eine Metrik, die schätzt, wie schwer es sein wird, in den Top 10 der organischen Suchergebnisse für ein bestimmtes Keyword zu ranken. Sie wird typischerweise auf einer Skala von 0–100 bewertet. Das Prüfen von KD vor der Content-Erstellung ist unerlässlich, weil es Sie davor bewahrt, Zeit und Geld in Seiten zu investieren, die fast keine Chance haben zu ranken. Wenn die Top 10-Ergebnisse für ein Keyword alle von Seiten wie Forbes, HubSpot und Wikipedia stammen — jede mit Hunderten von verweisenden Domains — wird eine neue oder mittelstarke Website ohne eine erhebliche Linkaufbau-Investition Schwierigkeiten haben zu konkurrieren.',
      },
      {
        question: 'Wie unterscheidet sich Keyword-Schwierigkeit vom Keyword-Wettbewerb?',
        answer: 'Keyword-Schwierigkeit misst die organische Such-Wettbewerbsfähigkeit — wie schwer es ist, in Googles unbezahlten Ergebnissen zu ranken. Sie wird basierend auf der Backlink-Stärke der Seiten berechnet, die derzeit in den Top 10 sind. Keyword-Wettbewerb (manchmal auch Wettbewerbsdichte genannt) misst die bezahlte Such-Wettbewerbsfähigkeit — wie viele Werbetreibende auf dieses Keyword in Google Ads bieten. Ein Keyword kann einfach organisch zu ranken sein (niedriger KD), aber heftigen bezahlten Wettbewerb haben (hoher Wettbewerbswert), oder umgekehrt.',
      },
      {
        question: 'Welchen KD-Score sollte ich als neue Website anstreben?',
        answer: 'Neue Websites (unter 1 Jahr alt, mit weniger als 50 verweisenden Domains) sollten Keywords mit einem KD von 0–15 anstreben. Dies sind typischerweise Long-Tail-Suchanfragen mit 3–5 Wörtern, für die größere Websites nicht speziell optimiert haben. Wenn Ihre Domain-Autorität durch konsequente Content-Erstellung und Linkaufbau wächst, können Sie schrittweise Keywords mit KD-Scores von 15–30, dann 30–50 anstreben. Der Versuch, für Keywords über KD 50 ohne substanzielle Domain-Autorität zu ranken, wird fast immer scheitern, unabhängig von der Content-Qualität.',
      },
      {
        question: 'Kann eine Seite für ein Keyword mit hoher Schwierigkeit ohne Backlinks ranken?',
        answer: 'Das ist äußerst selten. Keyword-Schwierigkeit wird größtenteils durch die Anzahl und Qualität der Backlinks bestimmt, die auf die Top-Ranking-Seiten verweisen. Es gibt jedoch Ausnahmefälle: Wenn Ihr Content signifikant besseren Informationsgewinn als bestehende Ergebnisse bietet (z.B. originäre Forschung, einzigartige Daten oder ein neuartiges Format) und Ihre Domain moderate Autorität hat, kann Google Ihre Seite in höheren Positionen testen. Allerdings sind für KD-Scores über 40 Backlinks fast immer eine Voraussetzung für nachhaltige Rankings.',
      },
      {
        question: 'Warum hat dasselbe Keyword unterschiedliche Schwierigkeitswerte bei verschiedenen Tools?',
        answer: 'Jedes SEO-Tool berechnet Keyword-Schwierigkeit mit seinem eigenen proprietären Algorithmus, Crawl-Index und Gewichtungsmethodik. Ahrefs betont verweisende Domains zu den Top 10-Ergebnissen, Moz verwendet seine eigenen Page Authority- und Domain Authority-Metriken, und SEMrush berücksichtigt zusätzliche SERP-Features und Content-Signale. Deshalb kann ein Keyword bei einem Tool KD 45 und bei einem anderen KD 62 anzeigen. Die absoluten Zahlen sind weniger wichtig als das relative Ranking — verwenden Sie dasselbe Tool konsistent, damit Ihre Schwierigkeitsvergleiche Äpfel mit Äpfeln sind.',
      },
      {
        question: 'Welche Rolle spielt CPC bei der Bewertung der Keyword-Schwierigkeit?',
        answer: 'CPC (Cost Per Click) beeinflusst die organische Ranking-Schwierigkeit nicht direkt, bietet aber kritischen Kontext. Ein Keyword mit KD 55 und CPC 0,50 $ deutet darauf hin, dass Ranken zwar schwer ist, die kommerzielle Auszahlung aber niedrig ist. Ein Keyword mit KD 55 und CPC 32,40 $ erzählt eine andere Geschichte: Dieser Traffic ist für Unternehmen äußerst wertvoll, was bedeutet, dass organisches Ranken signifikante Werbeausgaben ersetzen könnte. Wenn zwei Keywords ähnliche KD-Scores haben, priorisieren Sie das mit höherem CPC — es signalisiert stärkere Käuferabsicht und ROI-Potenzial.',
      },
      {
        question: 'Wie prüfe ich die Keyword-Schwierigkeit für ein bestimmtes Land?',
        answer: 'Verwenden Sie das Länder-Dropdown im Eingabeformular des Tools, um Ihren Zielmarkt auszuwählen. Keyword-Schwierigkeit kann zwischen Ländern erheblich variieren, weil die Wettbewerbslandschaft sich unterscheidet. Ein Keyword, das in den Vereinigten Staaten KD 60 hat, könnte in Brasilien KD 25 oder in Deutschland KD 40 sein, einfach weil weniger hochautoritative Websites in diesen Märkten konkurrieren. Prüfen Sie immer die Schwierigkeit für das spezifische Land, in dem sich Ihr Publikum befindet, anstatt standardmäßig US-Daten zu verwenden.',
      },
      {
        question: 'Was ist die Beziehung zwischen Keyword-Schwierigkeit und Suchvolumen?',
        answer: 'Generell tendieren Keywords mit höherem Volumen dazu, eine höhere Schwierigkeit zu haben, weil mehr Websites um beliebte Suchbegriffe konkurrieren. Dies ist jedoch nicht immer der Fall. Einige Keywords mit hohem Volumen haben überraschend niedrige Schwierigkeit (dies sind Goldgruben-Gelegenheiten), und einige Keywords mit niedrigem Volumen haben hohe Schwierigkeit, weil die Nische von autoritativen Spezialisten dominiert wird. Das ideale Keyword-Ziel hat ein Suchvolumen über Ihrem Minimum-Schwellenwert und einen KD-Score innerhalb der Wettbewerbsreichweite Ihrer Domain.',
      },
      {
        question: 'Sollte ich alle Keywords mit hoher Schwierigkeit vermeiden?',
        answer: 'Nein. Keywords mit hoher Schwierigkeit sollten Teil Ihrer langfristigen Content-Strategie sein — sie repräsentieren Ihre Aspirationsziele. Der Ansatz besteht darin, zuerst thematische Autorität aufzubauen, indem Sie für einfachere Keywords im selben Cluster ranken, dann interne Verlinkung und akkumulierte Autorität nutzen, um im Laufe der Zeit für die schwereren Begriffe zu konkurrieren. Sobald diese einfacheren Seiten ranken, stärken sie die thematische Autorität Ihrer Domain und verbessern Ihre Chancen beim wettbewerbsintensiven Haupt-Keyword.',
      },
      {
        question: 'Wie oft sollte ich die Keyword-Schwierigkeit erneut prüfen?',
        answer: 'Prüfen Sie die Keyword-Schwierigkeit vierteljährlich für Ihre Kern-Ziel-Keywords. Die Wettbewerbslandschaft verschiebt sich, wenn neuer Content veröffentlicht wird, Backlinks aufgebaut werden und Algorithmus-Updates ausgerollt werden. Ein Keyword, das vor sechs Monaten KD 45 hatte, könnte jetzt KD 35 sein, wenn eine zuvor hoch gerankte Seite Backlinks verloren hat oder deindexiert wurde. Die Überwachung des KD im Zeitverlauf hilft Ihnen auch zu verfolgen, ob Ihre eigenen SEO-Bemühungen die Wettbewerbslücke schließen.',
      },
      {
        question: 'Was bedeutet die KD-Farbcodierung (grün, gelb, orange, rot)?',
        answer: 'Das farbcodierte Messgerät bildet Schwierigkeitsbereiche ab: Grün (0–20) bedeutet, dass das Keyword relativ einfach zu ranken ist und für neue oder autoritätsschwache Seiten geeignet ist. Gelb (21–40) bedeutet moderaten Wettbewerb — Sie benötigen anständigen Content und einige Backlinks. Orange (41–60) zeigt harten Wettbewerb an — starker Content, technisches SEO und eine aktive Linkaufbau-Strategie sind erforderlich. Rot (61–100) signalisiert sehr harten Wettbewerb — nur hochautoritative Domains mit umfangreichen Backlink-Profilen halten diese Positionen typischerweise.',
      },
      {
        question: 'Kann ich die Schwierigkeit für mehrere Keywords auf einmal prüfen?',
        answer: 'Das kostenlose Tool prüft ein Keyword zur Zeit, was ideal für schnelle Spot-Checks und die Validierung einzelner Keyword-Ideen ist. Für Batch-Keyword-Schwierigkeitsanalyse — die gleichzeitige Prüfung von Dutzenden oder Hunderten von Keywords — würden Sie typischerweise Keywords aus dem Keyword-Generator-Tool exportieren und sie in einer Tabelle analysieren, oder die KD-Spalte nutzen, die bereits in der Ergebnistabelle des Keyword-Generators erscheint.',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: 'Website-Autoritäts-Checker',
    title: 'Kostenloser Website-Autoritäts-Checker',
    description: 'Prüfen Sie kostenlos die organische Such-Autorität jeder Website. Sehen Sie geschätzten organischen Traffic, gerankte Keywords, Top-10-Positionen und Keyword-Ranking-Verteilung.',
    metaDescription: 'Prüfen Sie kostenlos den Autoritätswert jeder Website. Sehen Sie Domain-Stärke, organischen Traffic, gerankte Keywords und SERP-Positionsverteilung sofort.',
    iconName: 'Globe',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Geben Sie eine Domain ein',
    inputPlaceholder: 'z.B. example.com',
    buttonText: 'Autorität prüfen',
    resultType: 'domain-authority',
    metricsToShow: ['domain_score', 'organic_traffic', 'ranked_keywords', 'top_10'],
    apiEndpoint: 'website-authority',
    freeResultLimit: 1,
    options: [],
    tableColumns: [
      { key: 'position', label: 'Positionsbereich', sortable: false, type: 'text' },
      { key: 'keywords', label: 'Keywords', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Prüfen Sie die Domain-Autorität jeder Website in Sekunden',
        description: 'Jede Linkaufbau-Entscheidung, Wettbewerbsanalyse und Partnerschaftsbewertung beginnt mit einer Frage: Wie autoritativ ist diese Domain? Geben Sie eine beliebige Domain in den Checker ein, klicken Sie auf „Autorität prüfen" und erhalten Sie sofort eine Bewertung. Ob Sie eine Gastbeitrag-Gelegenheit prüfen, einen Backlink-Interessenten bewerten oder Ihre Domain mit Wettbewerbern vergleichen — dies ist der schnellste Weg, die Gesamtstärke einer Website zu messen. SEO-Agenturen verwenden dieses Tool dutzende Male am Tag, wenn sie Link-Interessentenlisten erstellen und Outreach-Ziele qualifizieren.',
        image: '/Website authority checker/Check the autority of any website.png',
      },
      {
        title: 'Verstehen Sie die SERP-Positionsverteilung über alle Keywords hinweg',
        description: 'Diese Aufschlüsselung zeigt, für wie viele Keywords eine Website über jeden SERP-Positionsbereich rankt: #1, #2–3, #4–10, #11–20 und so weiter. Diese Verteilung erzählt eine tiefere Geschichte als eine einzelne Autoritätszahl. Eine Website mit Tausenden von #1-Rankings hat dominante Autorität. Eine Website mit den meisten Keywords in Positionen #21–50 hat aufkeimendes Potenzial, hat es aber noch nicht auf die erste Seite geschafft. Nutzen Sie dies, um die Wachstumstrajektorie Ihrer eigenen Website zu bewerten und Wettbewerber zu identifizieren, deren Rankings Sie realistisch herausfordern können.',
        image: '/Website authority checker/See any websites keywords ranking.png',
      },
      {
        title: 'Bewerten Sie Traffic und Ranking-Umfang einer Domain',
        description: 'Das Metriken-Dashboard zeigt organischen Traffic, Gesamt-gerankte Keywords und Keywords in Positionen 1–10. Diese Zahlen kontextualisieren den Autoritätswert mit Performance-Daten. Eine Domain kann einen hohen Autoritätswert, aber niedrigen Traffic haben (was bedeutet, dass ihr Backlink-Profil stark ist, aber ihre Content-Strategie schwach), oder moderate Autorität mit beeindruckendem Traffic (was bedeutet, dass ihre Content-Strategie ihr Linkprofil übertrifft). Diese Multi-Metriken-Ansicht verhindert Einzelmetriken-Entscheidungsfindung und gibt Ihnen das vollständige Wettbewerbsbild.',
        image: '/Website authority checker/See other details as traffick rankings positions.png',
      },
      {
        title: 'Sehen Sie den tatsächlichen Autoritätswert mit Schweregrad-Einstufung',
        description: 'Das Domain-Score-Messgerät zeigt eine 0–100-Bewertung mit farbcodiertem Schweregrad und einem Label (z.B. „99 — Sehr stark" für hubspot.com). Das visuelle Messgerät macht Autoritätswerte sofort interpretierbar: Grün bedeutet sehr stark, Gelb bedeutet moderat, Orange bedeutet im Aufbau und Rot bedeutet schwach. Nutzen Sie dies, um realistische Erwartungen zu setzen — wenn Ihre Website 25 Punkte erzielt und Ihr Wettbewerber 85, wissen Sie, dass der Wettbewerb um Haupt-Keywords eine erhebliche, langfristige Linkaufbau-Investition erfordert. Diese Visualisierung ist auch ideal für Kundenberichterstattung und Stakeholder-Präsentationen.',
        image: '/Website authority checker/See the actual authority score of your website. Score out of 100.png',
      },
    ],
    faqs: [
      {
        question: 'Was ist Website-Autorität und wie wird sie gemessen?',
        answer: 'Website-Autorität (auch Domain-Autorität oder Domain-Stärke genannt) ist eine SEO-Metrik, die die gesamte Ranking-Kraft einer Domain basierend auf der Quantität und Qualität der darauf verweisenden Backlinks schätzt. Sie wird auf einer logarithmischen Skala von 0–100 gemessen, was bedeutet, dass es exponentiell schwieriger wird, Ihren Score zu steigern, je höher Sie kommen. Ein Score von 30 ist mit grundlegendem Linkaufbau relativ leicht erreichbar, während der Sprung von 70 auf 80 deutlich mehr hochwertige Backlinks erfordert als der Sprung von 20 auf 30.',
      },
      {
        question: 'Was ist ein guter Website-Autoritätswert?',
        answer: 'Autorität ist relativ zu Ihrer Wettbewerbslandschaft. Ein Domain Score von 40 kann in einer Nischenbranche, in der Wettbewerber durchschnittlich 25 erreichen, ausgezeichnet sein, aber schwach in einem Bereich, in dem Wettbewerber durchschnittlich 70 erreichen. Als allgemeine Richtwerte: 0–20 ist neu oder unterentwickelt, 21–40 ist sich entwickelnd (typisch für kleine bis mittlere Unternehmen), 41–60 ist etabliert (in den meisten Nischen wettbewerbsfähig), 61–80 ist stark (wettbewerbsfähig für hochwertige Keywords), und 81–100 ist Elite (große Marken, Nachrichtenpublikationen und hochautoritative Plattformen).',
      },
      {
        question: 'Ist Website-Autorität ein Google-Ranking-Faktor?',
        answer: 'Google hat öffentlich erklärt, dass „Domain-Autorität" kein direkter Ranking-Faktor in seinem Algorithmus ist. Forschung zeigt jedoch konsistent eine starke Korrelation zwischen Domain-Autorität und Keyword-Rankings. Die praktische Schlussfolgerung ist: Auch wenn Google Drittanbieter-Autoritätswerte möglicherweise nicht direkt verwendet, sind die zugrunde liegenden Signale (Backlink-Qualität, Anzahl verweisender Domains, Link-Diversität) fundamentale Ranking-Faktoren. Autoritätswerte sind der beste verfügbare Indikator für diese Signale.',
      },
      {
        question: 'Wie unterscheidet sich Domain Score von Moz\'s Domain Authority (DA)?',
        answer: 'Beide Metriken zielen darauf ab, Domain-Stärke auf einer Skala von 0–100 zu messen, verwenden aber unterschiedliche Berechnungsmethoden und Datenquellen. Moz\'s DA basiert auf dem eigenen Link-Index und verwendet ein Machine-Learning-Modell zur Vorhersage der Ranking-Fähigkeit. Andere Domain-Score-Metriken nutzen ihre eigenen Crawl-Indizes und Berechnungsformeln. Die Scores sind nicht austauschbar — eine Website kann bei Moz DA 45 und bei einem anderen Tool Domain Score 52 haben. Entscheidend ist Konsistenz: Verwenden Sie für alle Vergleiche dasselbe Tool.',
      },
      {
        question: 'Wie verbessere ich den Autoritätswert meiner Website?',
        answer: 'Der einzige zuverlässige Weg, Domain-Autorität zu erhöhen, ist durch den Erwerb von Backlinks von mehr einzigartigen verweisenden Domains — insbesondere Domains, die selbst autoritativ sind. Effektive Strategien umfassen: die Erstellung von link-würdigem Content (originale Forschung, umfassende Leitfäden, kostenlose Tools), Gastbeiträge in Branchenpublikationen, digitale PR und Medienarbeit, Broken-Link-Building, Ressourcenseiten-Linkaufbau und den Aufbau von Beziehungen zu Branchenkollegen.',
      },
      {
        question: 'Was sagen mir die Metriken für organischen Traffic und gerankte Keywords über die Autorität?',
        answer: 'Diese Metriken kontextualisieren den Autoritätswert mit Performance-Daten. Ein hoher Autoritätswert mit niedrigem organischen Traffic deutet darauf hin, dass die Domain ein starkes Backlink-Profil, aber schwachen Content oder schlechtes Keyword-Targeting hat. Hoher Traffic mit moderater Autorität weist auf starken Content hin, der sein Linkprofil übertrifft. Die Metrik „Keywords in Position 1–10" zeigt, für wie viele Keywords eine Domain tatsächlich auf Seite eins dominiert — dies ist das ultimative Maß für wettbewerbliche Autorität in Aktion.',
      },
      {
        question: 'Was ist die Positionsverteilungs-Tabelle und wie lese ich sie?',
        answer: 'Die Positionsverteilungs-Tabelle schlüsselt auf, für wie viele Keywords eine Domain über verschiedene SERP-Positionen rankt: #1, #2–3, #4–10, #11–20, #21–30 und so weiter. Eine gesunde, wachsende Website zeigt eine Pyramidenform — weniger Keywords auf Position #1, mehr auf #2–10 und zunehmend mehr in niedrigeren Positionen. Wenn die meisten Keywords in den Positionen #41–100 clustern, hat die Website zwar Sichtbarkeit, aber es fehlt ihr an der nötigen Autorität oder Content-Qualität, um auf die erste Seite zu gelangen.',
      },
      {
        question: 'Kann ich Website-Autorität verwenden, um Backlink-Interessenten zu bewerten?',
        answer: 'Ja — dies ist einer der häufigsten Anwendungsfälle. Beim Aufbau von Backlinks priorisieren Sie Websites mit Domain-Scores über 30 und idealerweise über 50 für maximalen Link-Equity-Transfer. Der Autoritätswert allein ist jedoch nicht ausreichend. Prüfen Sie außerdem, ob die Website qualitativ hochwertigen Content veröffentlicht, eine relevante thematische Ausrichtung zu Ihrer Nische hat, echten organischen Traffic erhält und ein natürliches ausgehendes Linkprofil aufweist.',
      },
      {
        question: 'Warum haben einige Websites hohe Autorität, aber niedrigen Traffic?',
        answer: 'Dies geschieht aus mehreren Gründen: Die Website hat über Jahre Backlinks akkumuliert, erstellt aber nicht aktiv Content, der auf Such-Keywords abzielt; der Content der Website ist veraltet und entspricht nicht mehr der aktuellen Suchintention; die Website wurde von Google wegen anderer Qualitätsprobleme bestraft, obwohl sie starke Backlinks hat; oder die Website ist in einer Nische mit niedrigem Volumen, in der selbst Rankings auf der ersten Seite keinen massiven Traffic generieren.',
      },
      {
        question: 'Wie oft ändert sich die Website-Autorität?',
        answer: 'Autoritätswerte fluktuieren, wenn die zugrunde liegenden Backlink-Daten neu gecrawlt und aktualisiert werden. Neue Backlinks erhöhen Ihren Score; verlorene Backlinks verringern ihn. Große Änderungen benötigen normalerweise 4–8 Wochen, um in den Autoritätsmetriken reflektiert zu werden. Graduelle Steigerungen von 1–3 Punkten pro Monat sind typisch für Websites, die aktiv Links aufbauen. Plötzliche Rückgänge können auf den Verlust wichtiger Backlinks oder eine Neuberechnung durch das Bewertungstool hindeuten.',
      },
      {
        question: 'Was ist die Beziehung zwischen Website-Autorität und Link-Equity?',
        answer: 'Website-Autorität ist im Wesentlichen eine Zusammenfassung akkumulierter Link-Equity. Jeder Backlink von einer externen Website überträgt etwas Link-Equity an Ihre Domain, und die gesamte akkumulierte Equity spiegelt sich in Ihrem Autoritätswert wider. Verweisende Domains mit höherer Autorität übertragen mehr Link-Equity. Seiten auf Domains mit hoher Autorität erben Domain-Level-Equity und erhalten dadurch einen Vorsprung in den Rankings.',
      },
      {
        question: 'Sollte ich mich auf die Erhöhung meines Autoritätswerts oder meines organischen Traffics konzentrieren?',
        answer: 'Konzentrieren Sie sich auf organischen Traffic — Autorität ist ein Mittel zu diesem Zweck, nicht ein Ziel an sich. Die effektivste Strategie besteht darin, gleichzeitig Links aufzubauen (was die Autorität erhöht) und Keyword-zielgerichteten Content zu erstellen (was den Traffic erfasst). Ein hoher Autoritätswert ohne zielgerichteten Content generiert keinen Traffic. Großartiger Content ohne Autorität hat Schwierigkeiten, für wettbewerbsfähige Keywords zu ranken. Beide Aspekte wirken synergetisch zusammen.',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'SERP Checker',
    title: 'Kostenloser SERP Checker',
    description: 'Überprüfen Sie Google-Suchergebnisse für jedes Keyword. Sehen Sie, wer in den Top 10 organischen Positionen rankt, mit Titeln, URLs und Domains.',
    metaDescription: 'Analysieren Sie Googles Top-Ergebnisse für jedes Keyword in jedem Land. Sehen Sie Rankings, Domains, URLs und Gesamtergebnisse zur Planung Ihrer SEO-Strategie.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'keyword',
    inputLabel: 'Geben Sie ein Keyword ein',
    inputPlaceholder: 'z.B. beste Projektmanagement-Tools',
    buttonText: 'SERP prüfen',
    resultType: 'serp-results',
    metricsToShow: ['total_results', 'organic_results'],
    apiEndpoint: 'serp-checker',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'Land',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Vereinigte Staaten' },
          { value: '2826', label: 'Vereinigtes Königreich' },
          { value: '2276', label: 'Deutschland' },
          { value: '2250', label: 'Frankreich' },
          { value: '2724', label: 'Spanien' },
          { value: '2380', label: 'Italien' },
          { value: '2076', label: 'Brasilien' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Australien' },
          { value: '2356', label: 'Indien' },
          { value: '2392', label: 'Japan' },
          { value: '2528', label: 'Niederlande' },
          { value: '2792', label: 'Türkei' },
          { value: '2410', label: 'Südkorea' },
          { value: '2484', label: 'Mexiko' },
        ],
      },
    ],
    tableColumns: [
      { key: 'position', label: '#', sortable: true, type: 'number' },
      { key: 'title', label: 'Titel', sortable: false, type: 'text' },
      { key: 'domain', label: 'Domain', sortable: true, type: 'text' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Googles SERP für jedes Keyword in jedem Land prüfen',
        description: 'Zu verstehen, was derzeit rankt, ist die Grundlage jeder SEO-Kampagne. Geben Sie ein Keyword ein, wählen Sie Ihr Zielland aus über 15 Optionen und sehen Sie sofort die aktuelle SERP-Landschaft. Dies zeigt Ihnen, wer Ihre Wettbewerber sind, welche Content-Formate dominieren und wie überfüllt der Bereich ist. Internationale SEOs nutzen die Länderauswahl, um SERP-Zusammensetzungen über Märkte hinweg zu vergleichen.',
        image: '/SERP Checker/Check the SERP for any keyword for any given country.png',
      },
      {
        title: 'Content-Typen und Domains analysieren, die ranken',
        description: 'Die SERP-Ergebnisanzeige zeigt Gesamtergebnisse, Anzahl organischer Ergebnisse und die tatsächlich rankenden Seiten mit ihren Titeln, URLs und Beschreibungen. Dies ermöglicht Ihnen, Content-Format-Muster zu analysieren: Sind die Top-Ergebnisse Blog-Beiträge, Produktseiten, Vergleichsartikel oder Tools? Diese Intelligence sagt Ihnen genau, welches Content-Format Google für diese Anfrage belohnt.',
        image: '/SERP Checker/Find the different types of content that rank on the SERP.png',
      },
      {
        title: 'SERP-Wettbewerbsfähigkeit bewerten, bevor Sie ein Keyword anvisieren',
        description: 'Bevor Sie Ressourcen für ein Keyword einsetzen, lassen Sie es durch den SERP Checker laufen, um zu sehen, gegen wen Sie konkurrieren würden. Wenn die SERP von Sites mit massiver Autorität (Amazon, Wikipedia, Regierungsseiten) dominiert wird, benötigt dieses Keyword möglicherweise einen anderen Ansatz. Wenn die SERP kleinere oder neuere Sites enthält, gibt es einen realistischen Weg zum Ranking.',
        image: '/SERP Checker/See how competitive any keyword is on the SERP.png',
      },
      {
        title: 'Position Ihrer Marke für Ziel-Keywords verfolgen',
        description: 'Die detaillierte Ergebnistabelle zeigt Titel, Domain und vollständige URL für jede Ranking-Position. Scrollen Sie durch, um zu finden, ob Ihre Site (oder die Ihres Wettbewerbers) in den Ergebnissen erscheint. Nutzen Sie dies, um Rank-Tracker-Daten zu verifizieren, kritische Keywords vor Kundenmeetings zu prüfen oder zu bestätigen, dass eine neu veröffentlichte Seite in die SERP eingetreten ist.',
        image: '/SERP Checker/See your brands ranking for any keyword on the SERP.png',
      },
    ],
    faqs: [
      {
        question: 'Was ist ein SERP Checker und warum brauche ich einen?',
        answer: 'Ein SERP (Search Engine Results Page) Checker zeigt Ihnen die tatsächlichen Google-Suchergebnisse für jedes Keyword in jedem Land, ohne die Personalisierungsverzerrungen Ihres eigenen Browsers. Wenn Sie selbst bei Google suchen, werden Ihre Ergebnisse durch Ihren Suchverlauf, Ihren Standort, Ihr Gerät und Ihr eingeloggtes Google-Konto beeinflusst. Ein SERP Checker bietet eine neutrale, unvoreingenommene Ansicht der Rankings — dieselben Ergebnisse, die ein Erstbesucher sehen würde.',
      },
      {
        question: 'Wie behandelt der SERP Checker standortbasierte Ergebnisse?',
        answer: 'Das Tool verwendet die Länderauswahl, um Suchen vom Google-Index des ausgewählten Landes zu simulieren (z.B. google.com für die USA, google.co.uk für Großbritannien, google.de für Deutschland). Die SERP-Zusammensetzung kann zwischen Ländern dramatisch variieren — unterschiedliche Domains ranken, unterschiedliche Inhaltsformate erscheinen, und sogar die Anzahl der SERP-Features kann sich ändern. Prüfen Sie immer die SERP für Ihr Zielland, nicht nur die US-Standardeinstellung.',
      },
      {
        question: 'Was bedeuten „Gesamtergebnisse" und „Organische Ergebnisse"?',
        answer: '„Gesamtergebnisse" ist die Zahl, die Google für übereinstimmende Seiten meldet. Dies ist ein grober Indikator für die Themenbreite, eignet sich aber nicht zuverlässig für die Wettbewerbsanalyse. „Organische Ergebnisse" zählt, wie viele traditionelle Blau-Link-Ergebnisse auf Seite eins erscheinen. Wenn eine SERP nur 8 organische Ergebnisse statt der üblichen 10 zeigt, ist der verbleibende Platz von SERP-Features wie Featured Snippets, Maps, Videos oder „Nutzer fragen auch"-Boxen belegt.',
      },
      {
        question: 'Wie kann ich SERP-Daten nutzen, um das Content-Format zu bestimmen?',
        answer: 'Analysieren Sie die Top 10-Ergebnisse und kategorisieren Sie sie: Sind es How-to-Guides, Listicles, Tool-Seiten, Vergleichsartikel, Produktseiten oder Video-Ergebnisse? Wenn 7 von 10 Ergebnissen Listicles sind, hat Google bestimmt, dass Suchende Listen-Format-Content für dieses Keyword wollen. Ein anderes Format zu erstellen, wird wahrscheinlich schlechter abschneiden. Orientieren Sie sich am dominierenden Format und differenzieren Sie sich dann durch Tiefe, Aktualität, einzigartige Daten oder eine bessere Benutzererfahrung.',
      },
      {
        question: 'Warum unterscheiden sich SERPs zwischen Desktop und Mobil?',
        answer: 'Google unterhält separate Ranking-Algorithmen für Desktop- und Mobilsuche. Mobile SERPs priorisieren mobilfreundliche Seiten, gewichten Page-Speed-Metriken stärker und zeigen andere SERP-Features an. Eine Seite, die auf dem Desktop auf Platz 3 rankt, könnte auf Mobilgeräten auf Platz 7 fallen, wenn die mobile Nutzererfahrung schlecht ist. Prüfen Sie immer beide Versionen, wenn Ihr Publikum auf Geräte verteilt ist, und priorisieren Sie die mobile Optimierung, da Google Mobile-First-Indexierung verwendet.',
      },
      {
        question: 'Was sind SERP-Features und wie beeinflussen sie meine Klickrate?',
        answer: 'SERP-Features sind nicht-traditionelle Ergebnisse, einschließlich Featured Snippets, „Nutzer fragen auch"-Boxen, Video-Karussells, Bilderpacks, Knowledge Panels, lokale Kartenpacks und Shopping-Ergebnisse. Jedes erscheinende Feature reduziert Klicks auf organische Ergebnisse — ein Phänomen, das als „SERP-Feature-Kannibalisierung" bekannt ist. Wenn eine SERP voller Features ist, kann selbst ein organisches Ranking auf Platz 1 weniger Klicks erhalten als erwartet.',
      },
      {
        question: 'Wie oft ändern sich Google-SERPs für ein bestimmtes Keyword?',
        answer: 'SERP-Volatilität variiert nach Keyword-Typ. Immergrüne informationelle Keywords können stabile SERPs haben, die sich über Monate hinweg kaum verändern. Nachrichtenbezogene und Trend-Keywords können innerhalb von Stunden einen kompletten SERP-Wechsel erleben. Kommerzielle und wettbewerbsintensive Keywords erfahren typischerweise allmähliche Verschiebungen, wenn Seiten Backlinks gewinnen oder verlieren und Algorithmus-Updates ausgerollt werden. Monatliches Prüfen von SERPs für Ihre Kern-Keywords hilft, neue Konkurrenten zu erkennen.',
      },
      {
        question: 'Kann ich SERP-Daten für Wettbewerbs-Gap-Analysen nutzen?',
        answer: 'Absolut. Suchen Sie dasselbe Keyword über mehrere SERP-Checks und notieren Sie, welche Domains konsistent in den Top 10 erscheinen. Domains, die für viele Ihrer Ziel-Keywords ranken, sind Ihre primären SEO-Konkurrenten (die sich von Ihren geschäftlichen Konkurrenten unterscheiden können). Analysieren Sie, was diese Ranking-Seiten gemeinsam haben — Content-Länge, Struktur, Backlink-Anzahl, Content-Aktualität — und identifizieren Sie Lücken, wo Ihr Content überlegen sein könnte.',
      },
      {
        question: 'Was bedeutet es, wenn meine Seite in der SERP erscheint, aber auf einer niedrigen Position?',
        answer: 'Wenn Ihre Seite in Positionen 11–30 (Seite 2–3 von Google) erscheint, bedeutet dies, dass Google Ihren Content als relevant erkannt hat, aber noch nicht als autoritativ oder umfassend genug für Seite eins betrachtet. Dies ist tatsächlich ein positives Signal — Sie befinden sich im „Schlagdistanz"-Bereich. Verbesserungen, die Sie auf Seite eins bringen können, umfassen das Hinzufügen umfassenderer Inhalte, den Aufbau von 3–5 hochwertigen Backlinks, die Verbesserung der Seitengeschwindigkeit und das Hinzufügen unterstützender interner Links.',
      },
      {
        question: 'Wie nutze ich den SERP Checker, um Featured-Snippet-Chancen zu finden?',
        answer: 'Prüfen Sie SERPs für Ihre Ziel-Keywords und suchen Sie nach Anfragen, bei denen bereits ein Featured Snippet erscheint. Untersuchen Sie dann, ob der Snippet-Inhalt verbessert werden könnte. Zielen Sie auf Keywords, für die Sie bereits in Positionen 1–10 ranken, da Google Featured Snippets hauptsächlich von Seiten zieht, die bereits auf Seite eins sind. Erstellen Sie umfassendere Antworten, die speziell für die Snippet-Extraktion formatiert sind, mit klaren Überschriften, nummerierten Listen, Tabellen oder prägnanten Absatzantworten.',
      },
      {
        question: 'Welche Rolle spielt die URL-Struktur bei der SERP-Performance?',
        answer: 'Der SERP Checker zeigt vollständige URLs für jedes Ranking-Ergebnis, wodurch URL-Strukturmuster sichtbar werden. Saubere, beschreibende URLs, die das Ziel-Keyword enthalten, erscheinen tendenziell häufiger in Top-Positionen. Lange, parameterreiche URLs oder solche mit zufälligen Zeichenfolgen schneiden schlechter ab. Analysieren Sie die URL-Muster der Top-rankenden Seiten — wenn alle Top-Ergebnisse kurze, keyword-reiche Slugs verwenden, ist das ein Signal, dieses Muster zu übernehmen.',
      },
      {
        question: 'Können SERP-Checker-Daten bei PPC-Kampagnen helfen?',
        answer: 'Ja. SERP-Daten offenbaren die organische Wettbewerbslandschaft, was die Paid-Search-Strategie informiert: Wenn die organischen Ergebnisse von großen Wettbewerbern dominiert werden, könnte PPC ein schnellerer Weg zur Sichtbarkeit sein. Die Content-Formate in den organischen Ergebnissen geben Hinweise auf die Nutzerintention — passen Sie Ihre Anzeigen-Landingpage an diese Intention an, um höhere Quality Scores zu erzielen. Wenn wenige Anzeigen in der SERP erscheinen, gibt es geringe bezahlte Konkurrenz und potenziell günstige CPCs.',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: 'Keyword Rank Checker',
    title: 'Kostenloser Keyword Rank Checker',
    description: 'Prüfen Sie, für welche Keywords eine beliebige Website in Google rankt. Sehen Sie Ranking-Positionen, Suchvolumina und geschätzten Traffic für jedes Keyword.',
    metaDescription: 'Prüfen Sie die Keyword-Rankings Ihrer Website in jedem Land kostenlos. Sehen Sie Positionen, Traffic, CPC und Content-Performance über alle Ihre Seiten hinweg.',
    iconName: 'BarChart3',
    category: 'serp-ranking',
    inputType: 'keyword-url',
    inputLabel: 'Geben Sie eine Domain ein',
    inputPlaceholder: 'z.B. example.com',
    secondaryInputLabel: 'Nach Keyword filtern (optional)',
    secondaryInputPlaceholder: 'z.B. Marketing',
    buttonText: 'Rankings prüfen',
    resultType: 'rank-position',
    metricsToShow: ['total_keywords', 'top_3', 'top_10', 'top_50'],
    apiEndpoint: 'keyword-rank-checker',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Land',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Vereinigte Staaten' },
          { value: '2826', label: 'Vereinigtes Königreich' },
          { value: '2276', label: 'Deutschland' },
          { value: '2250', label: 'Frankreich' },
          { value: '2724', label: 'Spanien' },
          { value: '2380', label: 'Italien' },
          { value: '2076', label: 'Brasilien' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Australien' },
          { value: '2356', label: 'Indien' },
          { value: '2392', label: 'Japan' },
          { value: '2528', label: 'Niederlande' },
          { value: '2792', label: 'Türkei' },
          { value: '2410', label: 'Südkorea' },
          { value: '2484', label: 'Mexiko' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'position', label: 'Position', sortable: true, type: 'number' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'traffic', label: 'Traffic', sortable: true, type: 'number' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Prüfen Sie die Rankings Ihrer Website in jedem Land-SERP',
        description: 'Zu wissen, wo Sie ranken, ist die Anzeigetafel von SEO. Geben Sie Ihre Domain ein, filtern Sie optional nach einem bestimmten Keyword, wählen Sie Ihr Land und sehen Sie genau, wo Ihre Seite über Googles Ergebnisse erscheint. Der Keyword-Filter ist besonders mächtig — statt durch Hunderte von Rankings zu sieben, können Sie sofort einen bestimmten Zielbegriff prüfen. Internationale Marken und Multi-Markt-Agenturen nutzen die Länderauswahl, um Rankings separat für jeden Markt zu verfolgen, in dem sie tätig sind.',
        image: '/Rank checker/Check the rank of your website on any countrys SERP.png',
      },
      {
        title: 'Spionieren Sie Konkurrenten-Rankings über Länder hinweg aus',
        description: 'Geben Sie die Domain eines beliebigen Konkurrenten ein und wählen Sie aus über 15 Ländern, um deren vollständiges Ranking-Profil zu sehen. Dies offenbart, welche Keywords sie gewinnen, welche Märkte sie priorisieren und wo ihre SEO-Strategie am stärksten ist. Agenturen nutzen dies bei Konkurrenzanalysen und neuem Kunden-Onboarding zur Kartierung der Wettbewerbslandschaft.',
        image: '/Rank checker/Check how your competitors rank on Google.png',
      },
      {
        title: 'Analysieren Sie Keyword-Level-Content-Performance',
        description: 'Die Ergebnistabelle zeigt jedes Ranking-Keyword neben seiner Position, Suchvolumen, CPC, geschätztem Traffic und der spezifischen URL, die rankt. Diese Seitenebene-Ansicht ermöglicht es Ihnen, Ihren leistungsstärksten Content und Ihre Underperformer zu identifizieren.',
        image: '/Rank checker/See your websites content performance.png',
      },
      {
        title: 'Verstehen Sie die Gesamt-Ranking-Wettbewerbsfähigkeit Ihrer Seite',
        description: 'Das Zusammenfassungs-Dashboard schlüsselt Gesamt-Keywords, Top 3, Top 10 und Top 50 auf. Diese Verteilung zeigt Ihnen sofort, wo Ihre Seite steht. Verfolgen Sie diese Zahlen monatlich, um zu messen, ob Ihre SEO-Strategie Keywords nach oben durch die SERP-Positionen bewegt.',
        image: '/Rank checker/Understand your sites ranking and competitivement across keywords.png',
      },
    ],
    faqs: [
      {
        question: 'Was ist ein Keyword Rank Checker und wie unterscheidet er sich von einem SERP Checker?',
        answer: 'Ein Keyword Rank Checker zeigt Ihnen, wo IHRE spezifische Website (oder eine beliebige Domain) für Keywords rankt. Sie geben eine Domain ein und erhalten die Keywords und Positionen für diese Seite zurück. Ein SERP Checker hingegen zeigt Ihnen ALLE Websites, die für ein bestimmtes Keyword ranken. Stellen Sie es sich so vor: Ein Rank Checker beantwortet die Frage „für welche Keywords rankt meine Seite?", während ein SERP Checker die Frage „wer rankt für dieses Keyword?" beantwortet. Beide Tools sind unverzichtbar.',
      },
      {
        question: 'Wie genau sind Keyword-Rank-Checker-Ergebnisse?',
        answer: 'Rank-Checker-Ergebnisse spiegeln Googles organische Rankings zum Zeitpunkt der Abfrage wider, basierend auf dem ausgewählten Land und Standard-(nicht-personalisierten) Sucheinstellungen. Die Ergebnisse können leicht von dem abweichen, was Sie sehen, wenn Sie direkt bei Google suchen, da Ihr Browser die Ergebnisse auf Grundlage Ihres Suchverlaufs, Standorts und angemeldeten Kontos personalisiert. Verwenden Sie beim Tracking von Rankings daher immer ein Rank-Checker-Tool statt manueller Google-Suchen.',
      },
      {
        question: 'Was bedeutet die „Top 3", „Top 10" und „Top 50" Aufschlüsselung?',
        answer: '„Top 3" Keywords sind Ihre stärksten Positionen — die Positionen 1–3 fangen etwa 60 % aller organischen Klicks für eine Suchanfrage ab. „Top 10" bedeutet Seite eins von Google, wo praktisch der gesamte organische Traffic fließt. „Top 50" erfasst die Seiten 1–5, die Ihr sichtbares Keyword-Universum darstellen. Keywords außerhalb der Top 50 generieren selten messbaren Traffic.',
      },
      {
        question: 'Wie kann ich Keywords von Seite 2 auf Seite 1 von Google verschieben?',
        answer: 'Keywords, die in Positionen 11–20 ranken, sind Ihre höchstpriorisierten Optimierungsziele. Zu den Taktiken gehören: den Content aktualisieren und erweitern, um die Suchintention besser zu erfüllen, 3–5 qualitativ hochwertige Backlinks zur spezifischen Seite aufbauen, den Title-Tag und die Meta-Description für eine höhere Klickrate optimieren, interne Links von Ihren autoritätsstärksten Seiten hinzufügen, die Seitengeschwindigkeit und Core Web Vitals verbessern sowie strukturiertes Daten-Markup hinzufügen.',
      },
      {
        question: 'Wie oft sollte ich meine Keyword-Rankings prüfen?',
        answer: 'Prüfen Sie Ihre Kern-Ziel-Keywords (die 10–20 Keywords, die für Ihr Geschäft am wichtigsten sind) wöchentlich. Prüfen Sie Ihr breiteres Keyword-Portfolio monatlich. Vermeiden Sie tägliche Prüfungen — Rankings schwanken an jedem beliebigen Tag natürlich um 1–3 Positionen aufgrund von Googles Algorithmus-Anpassungen, Tests und Index-Aktualisierungen.',
      },
      {
        question: 'Warum unterscheiden sich meine Rankings zwischen Ländern?',
        answer: 'Google unterhält separate Such-Indizes und Ranking-Algorithmen für jedes Land. Zu den Faktoren, die länderspezifische Rankings beeinflussen, gehören: Content-Sprache und Lokalisierung, Server-Standort und CDN-Präsenz, länderspezifische Backlinks, lokale Business-Signale, hreflang-Tag-Implementierung sowie länderspezifisches Suchverhalten und Wettbewerb.',
      },
      {
        question: 'Was schätzt die Traffic-Spalte und wie zuverlässig ist sie?',
        answer: 'Die Traffic-Spalte schätzt die monatlichen organischen Besuche, die ein Keyword auf Ihre URL sendet, basierend auf der Ranking-Position und dem Suchvolumen des Keywords. Sie verwendet Klickraten-Modelle — Position #1 erhält etwa 27–31 % der Klicks, #2 erhält 15–17 %, #3 erhält 10–12 % und so weiter. Dies sind Schätzungen, keine exakten Zahlen, aber sie sind richtungsmäßig genau.',
      },
      {
        question: 'Wie nutze ich Rank-Daten zur Identifizierung von Content-Optimierungschancen?',
        answer: 'Suchen Sie nach Seiten, die in Positionen 4–15 für High-Volume-Keywords ranken — dies sind Ihre Optimierungsziele mit dem höchsten ROI. Analysieren Sie dann, warum sie nicht höher ranken: Ist der Content weniger umfassend als bei den Wettbewerbern? Hat die Seite weniger Backlinks? Ist der Title-Tag weniger überzeugend? Vergleichen Sie Ihre Seite mit den aktuellen Top 3 Ergebnissen für jedes Keyword.',
      },
      {
        question: 'Was sagen mir CPC-Daten in einem Rank Checker über meine Rankings?',
        answer: 'CPC offenbart den kommerziellen Wert jedes Keywords, für das Sie ranken. Wenn Sie auf Position #3 für ein Keyword mit $25 CPC ranken, spart Ihnen diese Position signifikante Werbeausgaben — Sie erhalten diese Klicks kostenlos, die über Google Ads jeweils $25 kosten würden. Multiplizieren Sie den geschätzten Traffic mit dem CPC, um den „Traffic-Wert" jedes Rankings zu berechnen.',
      },
      {
        question: 'Kann ich Rank-Ergebnisse nach bestimmten Keywords filtern?',
        answer: 'Ja. Das optionale Feld „Nach Keyword filtern" ermöglicht es Ihnen, ein bestimmtes Keyword oder eine Phrase einzugeben, um die Ergebnisse einzugrenzen. Dies ist nützlich, wenn Sie Ihre Rankings für ein bestimmtes Themencluster prüfen möchten, anstatt alle Keywords auf einmal anzuzeigen. Diese Filterfähigkeit macht das Tool praktisch, selbst für Seiten, die für Hunderte oder Tausende von Keywords ranken.',
      },
      {
        question: 'Wie verfolge ich Ranking-Verbesserungen im Zeitverlauf?',
        answer: 'Exportieren Sie Ihre Ranking-Daten bei jeder Prüfung als CSV und vergleichen Sie Positionsänderungen Monat für Monat. Erstellen Sie eine einfache Tabelle, die Ihre Top 20 Keywords, deren Positionen jeden Monat und die Richtung der Veränderung verfolgt. Über einen Zeitraum von 3–6 Monaten sollten Sie einen klaren Trend erkennen: Keywords, die sich schrittweise Richtung Positionen 1–10 bewegen, deuten auf eine funktionierende SEO-Strategie hin.',
      },
      {
        question: 'Was ist der Unterschied zwischen der URL-Spalte des Rank Checkers und dem SERP Checker?',
        answer: 'Die URL-Spalte des Rank Checkers zeigt, welche spezifische Seite auf IHRER Domain für jedes Keyword rankt. Dies ist leistungsstark für das interne SEO-Management: Sie können sehen, ob die richtige Seite rankt, Keyword-Kannibalisierung identifizieren (wenn zwei Ihrer Seiten für dasselbe Keyword konkurrieren) und Seiten entdecken, die für unerwartete Begriffe ranken. Der SERP Checker hingegen zeigt alle Domains, die für ein Keyword ranken.',
      },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'YouTube Keyword Tool',
    title: 'Kostenloses YouTube Keyword Tool',
    description: 'Finden Sie die besten Keywords für Ihre YouTube-Videos. Erhalten Sie Suchvolumen-, Schwierigkeits- und CPC-Daten zur Optimierung Ihrer Video-Titel, Beschreibungen und Tags.',
    metaDescription: 'Finden Sie YouTube-Keyword-Ideen für jede Nische. Sehen Sie Suchvolumen, Schwierigkeit und CPC zur Planung von Video-Content, der entdeckt und gerankt wird.',
    iconName: 'Youtube',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Geben Sie ein Keyword für YouTube ein',
    inputPlaceholder: 'z.B. wie man Videos bearbeitet',
    buttonText: 'Keywords finden',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'youtube-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Land',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Vereinigte Staaten' },
          { value: '2826', label: 'Vereinigtes Königreich' },
          { value: '2276', label: 'Deutschland' },
          { value: '2250', label: 'Frankreich' },
          { value: '2724', label: 'Spanien' },
          { value: '2380', label: 'Italien' },
          { value: '2076', label: 'Brasilien' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Australien' },
          { value: '2356', label: 'Indien' },
          { value: '2392', label: 'Japan' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Wettbewerb', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Recherchieren Sie Video-Themen, nach denen Menschen tatsächlich suchen',
        description: 'YouTube ist die zweitgrößte Suchmaschine der Welt, und die meisten Ersteller scheitern, weil sie Videos produzieren, nach denen niemand sucht. Geben Sie ein Keyword wie „wie man ein Video bearbeitet" ein, wählen Sie Ihr Zielland aus und sehen Sie sofort, was YouTube-Nutzer tatsächlich in die Suchleiste eingeben. Damit ersetzen Sie Vermutungen durch harte Daten — statt zu hoffen, dass ein Videothema gut abschneidet, wissen Sie im Voraus, dass eine echte Nachfrage besteht. Content-Ersteller, Video-Marketer und YouTube-Kanalmanager nutzen dies als Ausgangspunkt für jeden Redaktionskalender.',
        image: '/Youtube keyword tool/Research and plan your youtube content better.png',
      },
      {
        title: 'Bewerten Sie die Wettbewerbslandschaft von YouTube-Keywords',
        description: 'Die Ergebnistabelle zeigt jedes Keyword zusammen mit dem YouTube-spezifischen Volumen, der Keyword-Schwierigkeit (KD), dem CPC und dem Competition-Score. So können Sie ermitteln, welche Video-Themen für Ihre Kanalgröße erreichbar sind. Ein kleiner Kanal mit weniger als 1.000 Abonnenten sollte Keywords mit einem KD unter 20 anvisieren, während etablierte Kanäle auch bei schwierigeren Begriffen mithalten können. Die CPC-Spalte verrät außerdem, welche Keywords Werbeausgaben anziehen — nützlich, wenn Ihre Monetarisierungsstrategie auf YouTube-Werbeeinnahmen basiert, da Keywords mit höherem CPC in der Regel bessere RPMs generieren.',
        image: '/Youtube keyword tool/See how competitive your youtube content ideas are.png',
      },
      {
        title: 'Messen Sie die Gesamt-Themenviabilität vor der Verpflichtung zu einer Content-Serie',
        description: 'Das Zusammenfassungs-Dashboard zeigt die Gesamt-Keywords (50), das Durchschnittsvolumen und die Durchschnittsschwierigkeit für den Keyword-Cluster rund um Ihren Suchbegriff. Damit erkennen Sie, ob ein Thema genügend Tiefe und Nachfrage hat, um eine Video-Serie zu tragen. Wenn das Durchschnittsvolumen stark und die durchschnittliche Schwierigkeit überschaubar ist, haben Sie grünes Licht, eine mehrteilige Content-Serie rund um das Thema zu planen. Sind die Zahlen schwach, schwenken Sie um, bevor Sie Produktionszeit investieren. Videoproduktion ist teuer — diese 10-Sekunden-Prüfung kann Ihnen Stunden vergeblicher Arbeit ersparen.',
        image: '/Youtube keyword tool/See the search volume of your content ideas on youtube.png',
      },
      {
        title: 'Bauen Sie semantische Relevanz in Video-Titel, Tags und Beschreibungen ein',
        description: 'YouTubes Algorithmus belohnt — ähnlich wie Googles — Content, der thematische Tiefe demonstriert. Diese Ansicht zeigt verwandte Keywords und deren Suchvolumina, die in Ihren Video-Titel, Ihre Beschreibung, Tags und sogar in den gesprochenen Dialog eingewoben werden sollten (YouTube transkribiert und indexiert Audio). Wenn Ihr Haupt-Keyword zum Beispiel „wie man ein Video bearbeitet" lautet, sollten verwandte Begriffe wie „Videoclip erstellen", „Video-Bearbeitungssoftware rückwärts" und „Seitenverhältnis YouTube-Video" natürlich in Ihren Metadaten vorkommen. Diese semantische Optimierung verbessert die Auffindbarkeit bei verwandten Suchanfragen erheblich.',
        image: '/Youtube keyword tool/Use related keywords to make your youtube video semantically relevant.png',
      },
    ],
    faqs: [
      {
        question: 'Warum brauche ich ein YouTube-spezifisches Keyword-Tool statt eines regulären Keyword-Tools?',
        answer: 'YouTube und Google sind separate Suchmaschinen mit völlig unterschiedlichen Algorithmen, Nutzerverhalten und Suchmustern. Ein Keyword, das auf Google 10.000 Suchanfragen erzielt, könnte auf YouTube nur 200 erhalten — und umgekehrt. YouTube-Keyword-Tools beziehen ihre Daten gezielt aus dem Suchökosystem von YouTube und liefern Ihnen präzise Volumen-Schätzungen für genau die Plattform, auf der Ihre Videos tatsächlich ranken müssen. Google-Keyword-Daten für die YouTube-Optimierung zu nutzen, ist wie eine Straßenkarte zur Navigation auf dem Ozean zu verwenden — das Terrain ist grundlegend verschieden.',
      },
      {
        question: 'Wie unterscheidet sich YouTube-Keyword-Schwierigkeit von Google-Keyword-Schwierigkeit?',
        answer: 'YouTube KD misst den Wettbewerb unter Videos, nicht unter Webseiten. Zu den Faktoren, die das YouTube-Ranking beeinflussen, gehören Wiedergabezeit, Klickrate auf Thumbnails, Engagement (Likes, Kommentare, Shares), Kanal-Autorität und die Optimierung der Video-Metadaten. Während Backlinks bei Google eine größere Rolle spielen, sind Wiedergabezeit und Engagement bei YouTube deutlich wichtiger. Ein Keyword mit KD 20 auf YouTube bedeutet, dass Sie mit einem gut produzierten und gut optimierten Video konkurrenzfähig sind, selbst wenn Ihr Kanal relativ neu ist.',
      },
      {
        question: 'Wie kann ich Low-Competition-YouTube-Keywords für einen neuen Kanal finden?',
        answer: 'Filtern Sie die Ergebnisse nach Keywords mit einem KD zwischen 0 und 15 und einem Suchvolumen über 50. Konzentrieren Sie sich auf Long-Tail-Anfragen (3–6 Wörter), die spezifische Fragen oder Tutorials behandeln, zum Beispiel „wie man ein YouTube-Video auf dem iPhone bearbeitet" statt „Videobearbeitung". Neue Kanäle sollten zudem nach Frage-Keywords suchen (die mit wie, was, warum oder kann beginnen), da diese tendenziell weniger Wettbewerb und höheres Engagement aufweisen — Zuschauer schauen länger zu, wenn sie die Antwort wirklich brauchen.',
      },
      {
        question: 'Was bedeutet CPC für YouTube-Keywords?',
        answer: 'CPC steht für die Kosten, die Werbetreibende pro Klick auf Anzeigen zu diesem Keyword zahlen. Für YouTube-Ersteller bedeuten Keywords mit höherem CPC auch höhere Werbeeinnahmen pro tausend Aufrufe (RPM). Wenn Sie über das YouTube-Partnerprogramm monetarisiert sind, bedeutet das Anvisieren von Keywords mit CPCs über 3–5 $, dass Werbetreibende bereit sind, mehr für Ihr Publikum zu zahlen, was Ihre Einnahmen direkt steigert. Dies ist besonders relevant für Kanäle in den Bereichen Finanzen, Software, Versicherungen und B2B-Nischen, wo CPCs über 20 $ liegen können.',
      },
      {
        question: 'Wie nutze ich YouTube-Keywords zur Optimierung meiner Video-Metadaten?',
        answer: 'Platzieren Sie Ihr primäres Keyword im Video-Titel (vorzugsweise am Anfang), im ersten Satz der Beschreibung und als erstes Tag. Verwenden Sie sekundäre Keywords aus der Liste verwandter Begriffe als zusätzliche Tags, im Beschreibungstext und als Kapitelüberschriften, falls Sie Zeitstempel nutzen. YouTube transkribiert außerdem Ihr Audio und nutzt es fürs Ranking, also sprechen Sie Ihr Haupt-Keyword in den ersten 30 Sekunden des Videos aus. Diese Mehrfach-Platzierung signalisiert YouTube präzise, worum es in Ihrem Video geht.',
      },
      {
        question: 'Kann dieses Tool mir helfen, trendende YouTube-Themen zu finden?',
        answer: 'Das Tool zeigt durchschnittliche monatliche Suchvolumina, die nachhaltiges Interesse statt viraler Spitzen widerspiegeln. Für Trendthemen kombinieren Sie dieses Tool mit YouTube Trending, Google Trends (gefiltert nach YouTube-Suche) und Social-Listening-Tools. Die beste Strategie verbindet Trendbewusstsein mit Keyword-Daten: Wenn Sie ein Trendthema entdecken, prüfen Sie es im YouTube-Keyword-Tool, um zu sehen, ob auch Suchnachfrage besteht. Themen mit sowohl Trend-Momentum als auch Suchvolumen sind die vielversprechendsten Gelegenheiten.',
      },
      {
        question: 'Was ist ein guter Suchvolumen-Schwellenwert für YouTube-Keywords?',
        answer: 'Das hängt von Ihrer Nische ab. In breiten Nischen wie Gaming, Kochen oder Fitness sollten Sie Keywords mit über 500 monatlichen YouTube-Suchen anvisieren. In spezialisierten Nischen wie B2B-SaaS, Data Science oder Nischen-Hobbys können Keywords mit 50–200 Suchen bedeutenden Traffic generieren, weil das Publikum gezielter und wertvoller ist. Die entscheidende Metrik ist nicht nur das Volumen, sondern auch der Wettbewerb — ein Keyword mit 100 Suchanfragen und KD 5 ist oft wertvoller als eines mit 5.000 Suchanfragen und KD 70, besonders für wachsende Kanäle.',
      },
      {
        question: 'Wie plane ich eine YouTube-Content-Serie mit Keyword-Daten?',
        answer: 'Beginnen Sie, indem Sie ein breites Themen-Keyword eingeben und alle 50 Ergebnisse durchgehen. Gruppieren Sie verwandte Keywords in Cluster (z. B. Anfänger-Tutorials, fortgeschrittene Techniken, Tool-Reviews, Vergleiche). Jeder Cluster wird zu einer Playlist, und jedes Keyword innerhalb des Clusters wird zu einem eigenständigen Video. Dieser „Hub-and-Spoke"-Ansatz spiegelt wider, wie Google thematische Autorität belohnt — YouTube fördert ebenso Kanäle, die tiefgehende Expertise in einem Thema durch verknüpfte Playlists und konsistente Veröffentlichungen zu verwandten Themen demonstrieren.',
      },
      {
        question: 'Sollte ich dieselben Keywords auf YouTube und Google gleichzeitig anvisieren?',
        answer: 'Ja — das nennt man die Video-SEO-Double-Dip-Strategie. Viele Google-SERPs enthalten mittlerweile ein Video-Karussell, und YouTube-Videos erscheinen häufig in diesen Karussells. Indem Sie dasselbe Keyword auf beiden Plattformen anvisieren, können Sie Traffic sowohl aus Googles Video-Karussell ALS AUCH aus der nativen YouTube-Suche abgreifen. Priorisieren Sie Keywords, bei denen Google bereits Video-Ergebnisse anzeigt. Tutorial-, How-to- und Review-Anfragen lösen am häufigsten Video-Karussells aus.',
      },
      {
        question: 'Wie funktioniert der Competition-Score für YouTube-Keywords?',
        answer: 'Der Competition-Score (0–100) zeigt an, wie viele Werbetreibende auf dieses Keyword für YouTube-Anzeigenplatzierungen bieten. Ein Score von 100 bedeutet maximalen Wettbewerb unter Werbetreibenden; 0 bedeutet, dass keine Werbetreibenden auf das Keyword abzielen. Obwohl dies primär die Werbeeinnahmen und nicht das organische Ranking beeinflusst, signalisiert ein hoher Competition-Score kommerzielles Interesse an Ihrem Publikum. Ersteller können dies nutzen, indem sie Marken in wettbewerbsintensiven Nischen für Sponsoring-Deals ansprechen, da diese Marken bereits Geld ausgeben, um dieses Publikum über Werbeanzeigen zu erreichen.',
      },
      {
        question: 'Wie viele Keywords sollte ich in einem einzelnen YouTube-Video verwenden?',
        answer: 'Konzentrieren Sie sich auf ein primäres Keyword und 5–10 sekundäre Keywords pro Video. Ihr primäres Keyword bestimmt den Titel und das Hauptthema. Sekundäre Keywords erscheinen in der Beschreibung, den Tags und den Kapitelüberschriften. Keyword-Überladung schadet sowohl dem Zuschauererlebnis als auch dem YouTube-Algorithmus, der unnatürliche Wiederholungen erkennt. Die Liste verwandter Keywords aus diesem Tool liefert Ihnen die perfekte Auswahl an sekundären Begriffen, die semantisch verbunden sind und so sicherstellen, dass Ihre Metadaten natürlich klingen und gleichzeitig die Auffindbarkeit maximieren.',
      },
      {
        question: 'Kann ich dieses Tool für YouTube-Shorts-Keyword-Recherche nutzen?',
        answer: 'Ja. YouTube Shorts erscheinen in der YouTube-Suche, im Shorts-Feed und zunehmend auch in der Google-Suche. Die gleichen Keyword-Daten sind anwendbar — wenn ein Begriff ein hohes Suchvolumen auf YouTube hat, kann ein Short zu diesem Begriff zusätzliche Reichweite erzielen. Shorts eignen sich besonders gut für hochvolumige Anfragen mit geringer Informationstiefe wie „wie man [schnelle Aufgabe erledigt]" oder „[Produkt]-Review in 60 Sekunden". Nutzen Sie das Keyword-Tool, um diese mundgerechten Themen zu finden, und erstellen Sie dann Shorts für schnelle Erfolge, während Sie Langform-Videos für tiefergehende Keywords mit höherer Schwierigkeit reservieren.',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: 'Amazon Keyword Tool',
    title: 'Kostenloses Amazon Keyword Tool',
    description: 'Recherchieren Sie Keywords für Amazon-Produktlistings. Finden Sie suchstarke Begriffe mit Schwierigkeits- und CPC-Daten zur Optimierung Ihrer Produkttitel und -beschreibungen.',
    metaDescription: 'Recherchieren Sie Amazon-Produkt-Keywords kostenlos. Sehen Sie Suchvolumen, Schwierigkeit und CPC zur Listing-Optimierung und Entdeckung nachfragestarker Produktnischen.',
    iconName: 'ShoppingBag',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Geben Sie ein Produkt-Keyword ein',
    inputPlaceholder: 'z.B. kabellose Kopfhörer',
    buttonText: 'Keywords finden',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'amazon-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Land',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Vereinigte Staaten' },
          { value: '2826', label: 'Vereinigtes Königreich' },
          { value: '2276', label: 'Deutschland' },
          { value: '2250', label: 'Frankreich' },
          { value: '2724', label: 'Spanien' },
          { value: '2380', label: 'Italien' },
          { value: '2076', label: 'Brasilien' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Australien' },
          { value: '2356', label: 'Indien' },
          { value: '2392', label: 'Japan' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Wettbewerb', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Produktideen vor der Investition in Lagerbestände validieren',
        description: 'Ein Produkt auf Amazon ohne Keyword-Recherche zu launchen, ist wie einen Laden in einer Straße ohne Fußgängerverkehr zu eröffnen. Geben Sie ein Produkt-Keyword wie „kabellose Kopfhörer" ein, wählen Sie Ihr Land und sehen Sie sofort, wie viele Menschen nach Produkten in dieser Kategorie suchen. Das Länder-Dropdown ermöglicht es Ihnen, die Nachfrage über mehr als 10 Märkte hinweg zu vergleichen — so können Sie validieren, ob Ihr Produkt Suchnachfrage in den USA, UK, Deutschland oder anderen Amazon-Marktplätzen hat, bevor Sie sich zu Lagerkäufen, Produktionsaufträgen oder FBA-Sendungen verpflichten.',
        image: '/Amazon keyword tool/Check how viable your ideas are on amazon.png',
      },
      {
        title: 'Wettbewerbsdichte über Produkt-Keywords analysieren',
        description: 'Die Ergebnistabelle zeigt jedes Produkt-Keyword neben seinem Volumen, KD, CPC und Competition-Score. Top-Keywords können Volumen von 450.000 mit Competition-Scores von 100 aufweisen — das bedeutet, dies ist ein extrem gesättigter Markt. Doch tieferes Eintauchen offenbart weniger wettbewerbsintensive Sub-Nischen, in denen neue Verkäufer konkurrieren können. Diese Tabelle ist essentiell für Amazon-FBA-Verkäufer und Private-Label-Marken, die Produktnischen mit überschaubarem Wettbewerb identifizieren möchten.',
        image: '/Amazon keyword tool/See how competitive a business idea is on Amazon.png',
      },
      {
        title: 'Produktkategorie-Nachfrage auf einen Blick quantifizieren',
        description: 'Das Zusammenfassungs-Dashboard zeigt Gesamt-Keywords (50), Durchschnittsvolumen und Durchschnittsschwierigkeit für Ihre Produktkategorie. Amazon-Verkäufer nutzen diesen Snapshot zum Vergleich von Kategoriegrößen — wenn Sie sich zwischen dem Eintritt in einen Markt oder einen anderen entscheiden, liefert Ihnen dieses Dashboard den Nachfragevergleich in Sekunden. Die durchschnittliche Schwierigkeit verrät Ihnen außerdem, ob viele Long-Tail-Produkt-Keywords noch zugänglich sind.',
        image: '/Amazon keyword tool/See how popular and how many people search for a given idea on amazon.png',
      },
      {
        title: 'Backend-Keywords und Long-Tail-Produktbegriffe entdecken',
        description: 'Amazons A10-Algorithmus rankt Produkte teilweise basierend auf Keyword-Relevanz in Titeln, Bullet Points, Beschreibungen und Backend-Suchbegriffen. Diese Ansicht zeigt die vollständige Liste verwandter Produkt-Keywords und deren Volumen — von Hauptbegriffen bis hin zu Long-Tail-Variationen. Diese Long-Tail-Variationen sollten in das Backend-Suchbegriffe-Feld Ihres Produktlistings, in die Bullet Points und in den A+-Content eingefügt werden, um die Sichtbarkeit Ihres Listings über die größtmögliche Bandbreite an Käufer-Suchanfragen zu maximieren.',
        image: '/Amazon keyword tool/See other sematically relevant content ideas for your main ideas on amazon.png',
      },
    ],
    faqs: [
      {
        question: 'Warum unterscheiden sich Amazon-Keywords von Google-Keywords?',
        answer: 'Amazon und Google bedienen grundlegend unterschiedliche Nutzerabsichten. Google-Suchende recherchieren möglicherweise, vergleichen oder stöbern einfach nur. Amazon-Suchende befinden sich fast immer im Kaufmodus — sie haben Kaufabsicht. Das bedeutet, Amazon-Keywords sind produktfokussiert (Markennamen, Produktspezifikationen, Anwendungsfälle), während Google-Keywords informative, navigative und transaktionale Absichten abdecken.',
      },
      {
        question: 'Wie funktioniert Keyword-Schwierigkeit für Amazon-Produktlistings?',
        answer: 'Die Amazon-Keyword-Schwierigkeit schätzt, wie wettbewerbsintensiv es ist, Ihr Produkt-Listing auf Amazons erster Seite für diesen Suchbegriff zu ranken. Zu den Faktoren gehören die Anzahl etablierter Verkäufer, die auf das Keyword abzielen, deren Bewertungsanzahl, Verkaufsgeschwindigkeit, Listing-Optimierungsqualität und Werbeausgaben. Ein KD von 0–10 bedeutet, dass ein neues Listing mit guter Optimierung schnell auf Seite eins erscheinen kann. Ein KD über 40 erfordert typischerweise wettbewerbsfähige Preise, PPC-Kampagnen, starke Bewertungen und hochoptimierte Listings.',
      },
      {
        question: 'Was ist ein gutes Suchvolumen für ein Amazon-Produkt-Keyword?',
        answer: 'Für Private-Label-Verkäufer sollten primäre Keywords mit mindestens 1.000 monatlichen Suchen angestrebt werden, um ausreichende Nachfrage sicherzustellen. Hochvolumige Hauptbegriffe (100.000+) sind extrem wettbewerbsintensiv und werden in der Regel von großen Marken dominiert. Mid-Tail-Keywords (1.000–10.000) bieten oft das beste Gleichgewicht zwischen Nachfrage und Erreichbarkeit. Long-Tail-Keywords (unter 1.000) eignen sich gut als Backend-Suchbegriffe und in PPC-Kampagnen, wo spezifische Käuferabsicht zu höheren Konversionsraten führt.',
      },
      {
        question: 'Wie sollte ich Amazon-Keyword-Daten verwenden, um mein Produkt-Listing zu optimieren?',
        answer: 'Folgen Sie Amazons Keyword-Platzierungshierarchie: (1) Setzen Sie Ihr primäres Keyword in den Produkttitel, (2) Platzieren Sie Ihre Top-5-Sekundär-Keywords in den Bullet Points, (3) Verwenden Sie verbleibende Keywords in der Produktbeschreibung und im A+-Content, (4) Laden Sie alle übrigen relevanten Begriffe in die Backend-Suchbegriffe (bis zu 250 Bytes). Wiederholen Sie niemals Keywords über diese Felder hinweg — Amazons Algorithmus zählt jedes Keyword nur einmal, unabhängig davon, wie oft es vorkommt.',
      },
      {
        question: 'Kann ich dieses Tool für Amazon PPC-Kampagnenrecherche verwenden?',
        answer: 'Absolut. Die CPC-Spalte zeigt, was Werbetreibende für Klicks auf Sponsored Product Ads für jedes Keyword zahlen. Nutzen Sie diese Daten, um Ihr Werbebudget abzuschätzen, Keywords zu identifizieren, bei denen organisches Ranking Ihnen erhebliche Werbeausgaben ersparen würde, und CPC-günstige Keywords zu entdecken, mit denen Sie profitable PPC-Kampagnen durchführen können.',
      },
      {
        question: 'Wie finde ich profitable Produktnischen mit diesem Tool?',
        answer: 'Suchen Sie nach Keyword-Clustern, bei denen das durchschnittliche Suchvolumen über 5.000 liegt, aber der durchschnittliche KD unter 20. Prüfen Sie dann den CPC — ein höherer CPC deutet darauf hin, dass Verkäufer in dieser Nische profitabel genug sind, um sich Werbung leisten zu können. Die ideale Nische hat hohe Suchnachfrage, niedrigen Wettbewerb, gesunde Margen und Seite-eins-Produkte mit weniger als 500 Bewertungen (was auf Marktzugänglichkeit für neue Anbieter hinweist).',
      },
      {
        question: 'Was ist der Unterschied zwischen dem Wettbewerbs-Score und KD für Amazon-Keywords?',
        answer: 'Der Wettbewerbs-Score spiegelt die bezahlte Werbedichte wider — wie viele Verkäufer Sponsored Product Ads auf dieses Keyword schalten. KD spiegelt die organische Ranking-Schwierigkeit wider — wie schwer es ist, ohne Ads auf Seite eins zu erscheinen. Sie können ein Keyword mit niedrigem organischem KD aber hohem bezahltem Wettbewerb haben, was bedeutet, dass es einfach ist, organisch zu ranken, aber schwer, Anzeigensichtbarkeit zu erlangen.',
      },
      {
        question: 'Wie verwende ich Amazon-Keywords für Produktrecherche vor dem Launch?',
        answer: 'Verwenden Sie dieses Tool für Pre-Launch-Validierung: (1) Geben Sie breite Produktkategorie-Keywords ein, (2) Überprüfen Sie das Volumen verwandter Keywords, um die Nachfrage zu bestätigen, (3) Prüfen Sie den KD, um die wettbewerbliche Machbarkeit einzuschätzen, (4) Schauen Sie sich die Breite der Long-Tail-Keywords an — eine Nische mit vielen Long-Tail-Variationen bietet Raum für differenzierte Produkte, (5) Gleichen Sie dies mit Ihren Lieferantenkosten ab, um die Rentabilität abzuschätzen.',
      },
      {
        question: 'Sollte ich Markennamen-Keywords in meinem Amazon-Listing anvisieren?',
        answer: 'Fügen Sie niemals Konkurrenz-Markennamen in Ihren Produkttitel oder Ihre Bullet Points ein — Amazons Nutzungsbedingungen verbieten dies und können zur Unterdrückung Ihres Listings führen. Allerdings erscheinen markenbezogene Keywords natürlich in den Tool-Ergebnissen und sind nützlich, um die Wettbewerbslandschaft zu verstehen. Ihre Strategie sollte darauf abzielen, die generischen Entsprechungen zu bedienen und über Preis, Funktionen und Bewertungen zu konkurrieren.',
      },
      {
        question: 'Kann ich dieses Tool für Amazon-Märkte außerhalb der Vereinigten Staaten verwenden?',
        answer: 'Ja. Der Länder-Selektor unterstützt große Amazon-Marktplätze einschließlich USA, UK, Deutschland, Frankreich, Spanien, Italien, Brasilien, Kanada, Australien, Indien und Japan. Jeder Markt hat unterschiedliche Keyword-Volumen, Wettbewerbsniveaus und Käuferverhalten. Ein Produkt, das auf dem US-Markt übersättigt ist, könnte in Deutschland oder Japan unterversorgt sein.',
      },
      {
        question: 'Wie viele Keywords sollte ich in meine Amazon-Backend-Suchbegriffe aufnehmen?',
        answer: 'Amazon erlaubt bis zu 250 Bytes an Backend-Suchbegriffen (ungefähr 250 Zeichen für Englisch). Nutzen Sie diesen Platz für Keywords, die nicht natürlich in Ihren Titel, Ihre Bullet Points oder Beschreibung passen. Priorisieren Sie einzigartige Keywords — wiederholen Sie keine Begriffe, die bereits in Ihrem sichtbaren Listing enthalten sind. Verwenden Sie Leerzeichen zur Trennung der Begriffe (keine Kommas oder Semikolons — Amazon behandelt diese als verschwendete Bytes).',
      },
      {
        question: 'Wie nutzt der Amazon A10-Algorithmus Keywords, um Produktlistings zu ranken?',
        answer: 'Amazons A10-Algorithmus betrachtet Keyword-Relevanz als einen von mehreren Ranking-Faktoren neben Verkaufsgeschwindigkeit, Conversion-Rate, Klickrate, Verkäufer-Autorität und organischen Verkäufen. Listings mit dem Keyword im Titel ranken höher als solche, die es nur in den Backend-Begriffen haben. Über das reine Matching hinaus rankt der Algorithmus dann nach Performance-Metriken — das bedeutet, Keyword-Optimierung bringt Sie in den Index, aber Conversion-Rate und Verkäufe bestimmen Ihre Position.',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: 'Bing Keyword Tool',
    title: 'Kostenloses Bing Keyword Tool',
    description: 'Recherchieren Sie Keywords für die Bing-Suchmaschine. Erhalten Sie Bing-spezifisches Suchvolumen, CPC und Wettbewerbsdaten, um Ihre Inhalte für Microsofts Suchmaschine zu optimieren.',
    metaDescription: 'Finden Sie kostenlos Bing-Keyword-Ideen. Sehen Sie Suchvolumen, CPC und Wettbewerbsdaten, um Bings hochkonvertierende, weniger wettbewerbsintensive SERP zu nutzen.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Geben Sie ein Keyword ein',
    inputPlaceholder: 'z.B. Projektmanagement-Software',
    buttonText: 'Keywords finden',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume'],
    apiEndpoint: 'bing-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Land',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Vereinigte Staaten' },
          { value: '2826', label: 'Vereinigtes Königreich' },
          { value: '2276', label: 'Deutschland' },
          { value: '2250', label: 'Frankreich' },
          { value: '2724', label: 'Spanien' },
          { value: '2380', label: 'Italien' },
          { value: '2076', label: 'Brasilien' },
          { value: '2124', label: 'Kanada' },
          { value: '2036', label: 'Australien' },
          { value: '2356', label: 'Indien' },
          { value: '2392', label: 'Japan' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Keyword', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volumen', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Wettbewerb', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Recherchieren Sie Keywords speziell für das Bing-Such-Ökosystem',
        description: 'Bing betreibt die Suche für Microsoft Edge (den Standardbrowser auf jedem Windows-PC), Cortana, Yahoo Search und DuckDuckGos organische Ergebnisse. Das sind ungefähr 10–15 % des Desktop-Such-Traffics — ein Segment, das die meisten SEOs komplett ignorieren. Geben Sie ein beliebiges Keyword ein, wählen Sie Ihr Zielland und erhalten Sie Bing-spezifische Suchdaten. Dies ist besonders wertvoll für B2B-Marketer und Marken, die ältere Demografien ansprechen, da Bing-Nutzer tendenziell eher Desktop verwenden, ein höheres Einkommen haben und sich in Unternehmensumgebungen befinden, in denen Microsoft-Produkte der Standard sind.',
        image: '/Bing keyword tool/Search any keyword on any region on Bing.png',
      },
      {
        title: 'Bewerten Sie Bings einzigartiges Volumen und Keyword-Dichte',
        description: 'Das Zusammenfassungs-Dashboard zeigt die Gesamtzahl der Keyword-Ideen und deren durchschnittliches Volumen auf Bing. Ein Seed-Keyword, das über 1.000 verwandte Begriffe generiert, bedeutet, dass ein tiefes, semantisch reiches Themencluster auf Bings Plattform verfügbar ist. Diese Dichtemetrik hilft Ihnen zu entscheiden, ob sich die Bing-Optimierung für Ihre Nische lohnt. Für B2B-Software-Keywords, Enterprise-Tool-Abfragen und professionelle Dienstleistungen liefert Bing oft ein überraschend hohes Volumen an Suchenden, die eine höhere Kaufabsicht haben und günstiger zu konvertieren sind.',
        image: '/Bing keyword tool/See a keywords volume and semantic density on Bing.png',
      },
      {
        title: 'Vergleichen Sie organische und bezahlte Wettbewerbsfähigkeit auf Bing',
        description: 'Die Ergebnistabelle zeigt Volumen, CPC und Wettbewerb für jedes Keyword speziell auf Bing. Bing Ads (Microsoft Advertising) hat typischerweise niedrigere CPCs als Google Ads — oft 30–50 % günstiger für dieselben Keywords. Diese Tabelle ermöglicht es PPC-Managern, Keywords zu identifizieren, bei denen Bing einen besseren Cost-per-Acquisition als Google bietet. Außerdem können SEO-Fachleute sehen, welche Keywords auf Bing weniger organischem Wettbewerb ausgesetzt sind.',
        image: '/Bing keyword tool/Find how competitives organic and paid keywords are in bing.png',
      },
      {
        title: 'Entdecken Sie Keyword-Cluster und Content-Möglichkeiten einzigartig für Bing',
        description: 'Diese Ansicht zeigt die vollständige Liste von Keyword-Variationen mit ihren Suchvolumen auf Bing. Da Bings Nutzerbasis andere Demografien und Verhaltensweisen aufweist als Googles, kann sich die Keyword-Landschaft erheblich unterscheiden. Begriffe im Zusammenhang mit Enterprise-Software, Microsoft-Integrationen, professionellen Tools und bestimmten altersdemografischen Produkten performen oft überproportional gut auf Bing. Nutzen Sie diese Liste, um Content-Möglichkeiten zu identifizieren, die Ihre Konkurrenten verpassen, weil sie nur für Google optimieren.',
        image: '/Bing keyword tool/Check other clusters around your main keyword in bing.png',
      },
    ],
    faqs: [
      {
        question: 'Warum sollte ich mich um Bing-Keywords kümmern, wenn Google die Suche dominiert?',
        answer: 'Bing erfasst weltweit etwa 10–15 % des Desktop-Such-Traffics, was Hunderten von Millionen Suchanfragen pro Monat entspricht. Noch wichtiger ist, dass Bings Publikum tendenziell ein höheres Einkommen hat, älter ist und stärker unternehmensorientiert — Demografien, die oft höhere Conversion-Raten erzielen. Da weniger SEOs speziell für Bing optimieren, ist die Wettbewerbslandschaft deutlich weniger überfüllt.',
      },
      {
        question: 'Wie unterscheidet sich Bings Suchalgorithmus von Googles?',
        answer: 'Bings Ranking-Algorithmus weist Ähnlichkeiten mit Google auf, hat aber bemerkenswerte Unterschiede. Bing legt mehr Gewicht auf Exact-Match-Keywords in Titeln und Meta-Beschreibungen, bewertet Social Signals von Plattformen wie Facebook und LinkedIn, gibt eine leichte Präferenz für ältere, etablierte Domains und behandelt Multimedia-Inhalte prominenter in seinen SERPs. Bing neigt auch dazu, transparenter hinsichtlich seiner Ranking-Faktoren zu sein.',
      },
      {
        question: 'Welche Branchen profitieren am meisten von Bing-Keyword-Optimierung?',
        answer: 'Branchen, die überproportional von Bing profitieren, umfassen B2B-Software und SaaS (Enterprise-Nutzer mit Microsoft-Standard-Browsern), Finanzdienstleistungen (Demografien mit höherem Einkommen), Gesundheitswesen (ältere Demografien), Immobilien (Desktop-lastiges Rechercheverhalten), Bildung und professionelle Dienstleistungen. Jede Branche, deren Zielkunde wahrscheinlich einen Windows-Arbeitscomputer mit Edge als Standardbrowser verwendet, sollte Bing-Optimierung in Betracht ziehen.',
      },
      {
        question: 'Sind Bing Ads günstiger als Google Ads für dieselben Keywords?',
        answer: 'Ja, in den meisten Fällen. Die CPCs von Bing Ads (Microsoft Advertising) sind typischerweise 30–50 % niedriger als die von Google Ads für gleichwertige Keywords, da es auf der Plattform weniger Wettbewerb unter Werbetreibenden gibt. Die CPC-Daten in diesem Tool spiegeln Bing-spezifische Preise wider, sodass Sie potenzielle Einsparungen berechnen können. Viele Werbetreibende importieren ihre Google Ads-Kampagnen in Bing Ads und erzielen deutlich niedrigere Kosten pro Akquisition.',
      },
      {
        question: 'Wie viele Keyword-Ideen kann ich für Bing generieren?',
        answer: 'Das Tool kann über 1.000 Keyword-Ideen aus einem einzelnen Seed-Keyword auf Bing zurückgeben. Das ist deutlich mehr als die meisten Bing-spezifischen Recherche-Tools bieten. Die Menge der Keyword-Ideen zeigt die semantische Tiefe des Themas auf Bings Plattform an.',
      },
      {
        question: 'Hat Bing eine eigene Keyword-Schwierigkeitsmetrik?',
        answer: 'Dieses Tool liefert einen KD-Score basierend auf der Wettbewerbslandschaft von Bings organischen Ergebnissen, der separat von Googles Schwierigkeitsmetriken ist. Da weniger Websites aktiv für Bing optimieren, werden Sie oft feststellen, dass dieselben Keywords auf Bing deutlich leichter zu ranken sind als auf Google. Dies schafft eine Arbitrage-Möglichkeit.',
      },
      {
        question: 'Wie behandelt Bing Suchabsicht anders als Google?',
        answer: 'Bings Suchergebnisse bevorzugen tendenziell direkte Antworten und Exact-Match-Content stärker als Google, das zunehmend semantische Bedeutung interpretiert. Das bedeutet, dass auf Bing die exakte Keyword-Phrase in Ihrem Title Tag, H1 und URL-Slug einen stärkeren Einfluss auf das Ranking hat. Bing zeigt auch mehr visuelle Inhalte in den Suchergebnissen an und hat einen anderen Ansatz für die lokale Suche.',
      },
      {
        question: 'Kann ich Bing-Keyword-Daten verwenden, um meine Google-SEO-Strategie zu informieren?',
        answer: 'Ja — Bing-Keyword-Daten können wertvolle Suchtrends und Nutzerverhalten aufdecken, die auf Google aufgrund des höheren Wettbewerbs weniger sichtbar sind. Bings Keyword-Vorschläge bringen manchmal Long-Tail-Variationen und Frageformate an die Oberfläche, die in Googles Keyword-Tools nicht auftauchen. Diese Begriffe repräsentieren oft echte Nutzerbedürfnisse, die auch in Googles SERPs unterversorgt sind.',
      },
      {
        question: 'Was ist der Wettbewerbs-Score für Bing-Keywords?',
        answer: 'Der Wettbewerbs-Score (0–100) spiegelt wider, wie viele Werbetreibende auf dieses Keyword in Microsoft Advertising (Bing Ads) bieten. Ein Score von 0 bedeutet, dass keine Werbetreibenden darauf abzielen; 100 bedeutet starken Wettbewerb unter Werbetreibenden. Diese Metrik ist vom organischen Wettbewerb getrennt und ist primär für PPC-Kampagnen relevant. Allerdings signalisiert hoher bezahlter Wettbewerb auf Bing auch kommerziellen Wert.',
      },
      {
        question: 'Wie optimiere ich Content speziell für Bings Suchalgorithmus?',
        answer: 'Zu den wichtigsten Bing-Optimierungstaktiken gehören: Verwenden Sie Exact-Match-Keywords in Ihrem Title Tag und H1, schreiben Sie klare, keyword-reiche Meta-Beschreibungen, stellen Sie sicher, dass Ihre Website in den Bing Webmaster Tools verifiziert ist, bauen Sie Social Signals über LinkedIn- und Facebook-Shares auf, reichen Sie eine XML-Sitemap speziell bei Bing ein, verwenden Sie Multimedia-Inhalte mit Alt-Text und stellen Sie schnelle Ladezeiten sicher — Bing bestraft langsame Websites aggressiver als Google.',
      },
      {
        question: 'Welcher Prozentsatz meines Traffics könnte von Bing kommen?',
        answer: 'Für die meisten Websites liefert Bing 5–15 % des gesamten organischen Traffics, aber dies variiert dramatisch je nach Branche und Zielgruppe. B2B- und unternehmensorientierte Websites sehen oft 15–25 % des Traffics von Bing, während verbraucherorientierte Websites, die jüngere Demografien ansprechen, möglicherweise unter 5 % liegen. Prüfen Sie Ihre Analytics für die Quelle Bing/Organisch, um Ihre aktuelle Aufteilung zu sehen.',
      },
      {
        question: 'Deckt Bing-Keyword-Recherche auch Yahoo und DuckDuckGo ab?',
        answer: 'Teilweise ja. Bings organischer Such-Index betreibt die Yahoo Search-Ergebnisse und beeinflusst die organischen Ergebnisse von DuckDuckGo erheblich. Das bedeutet, dass die Optimierung für Bing-Keywords Ihnen effektiv Sichtbarkeit in drei Suchmaschinen gleichzeitig verschafft.',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: 'Website Traffic Checker',
    title: 'Kostenloser Website Traffic Checker',
    description: 'Prüfen Sie den geschätzten organischen und bezahlten Traffic jeder Website. Sehen Sie Gesamt-Keywords, Traffic-Wert und Ranking-Bewegungsdaten.',
    metaDescription: 'Prüfen Sie kostenlos den organischen und bezahlten Traffic jeder Website. Sehen Sie Keyword-Rankings, Traffic-Wert und Ranking-Trends zur Benchmarking von Wettbewerbern.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'url',
    inputLabel: 'Geben Sie eine Domain ein',
    inputPlaceholder: 'z.B. example.com',
    buttonText: 'Traffic prüfen',
    options: [],
    resultType: 'traffic-overview',
    metricsToShow: ['organic_traffic', 'paid_traffic', 'total_keywords', 'traffic_value'],
    tableColumns: [
      { key: 'metric', label: 'Metrik', sortable: false, type: 'text' },
      { key: 'value', label: 'Wert', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-traffic-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Den Such-Traffic jeder Website sofort schätzen',
        description: 'Bevor Sie in einen Markt eintreten, müssen Sie wissen, wie viel Such-Traffic Ihre Konkurrenten erfassen. Geben Sie eine beliebige Domain in den Traffic Checker ein und erhalten Sie sofort eine Schätzung ihrer organischen und bezahlten Suchleistung. Ob Sie einen Konkurrenten bewerten, eine potenzielle Akquisition recherchieren, einen Werbepartner prüfen oder die aktuelle Performance eines Kunden analysieren — dieses Tool gibt Ihnen die Traffic-Intelligenz, die früher teure Enterprise-Abonnements erforderte. Es ist der schnellste Weg, die Frage zu beantworten: „Wie viel Such-Traffic bekommt diese Seite tatsächlich?"',
        image: '/website traffic checker/check any websites traffic.png',
      },
      {
        title: 'Gesamt-Keyword-Rankings und monetären Traffic-Wert sehen',
        description: 'Das Dashboard zeigt Gesamt-Keywords (z.B. 47.854) und Traffic-Wert (z.B. 223.458 $). Gesamt-Keywords zeigt die Breite der Suchsichtbarkeit einer Website — wie viele verschiedene Suchbegriffe Besucher treiben. Der Traffic-Wert schätzt, wie viel dieser organische Traffic kosten würde, wenn er über Google Ads gekauft würde. Ein Traffic-Wert von 223.458 $ bedeutet, dass die organischen Rankings dieser Website fast eine Viertelmillion Dollar pro Monat an äquivalenten Werbeausgaben einsparen. Diese Metrik ist eine der überzeugendsten zur Demonstration des SEO-ROI gegenüber Führungskräften, Kunden und Stakeholdern.',
        image: '/website traffic checker/see how many keywords any site ranks for and traffic of any website traffic.png',
      },
      {
        title: 'Keyword-Bewegungstrends verfolgen: Steigend, Fallend, Neu, Verloren',
        description: 'Die Ranking-Trends-Tabelle schlüsselt Keywords in Top 3, Keywords in Top 10, Neue Keywords, Verbesserte Rankings, Verschlechterte Rankings und Verlorene Rankings auf. Dies ist der Puls der SEO-Performance. Wenn „Verbessert" „Verschlechtert" übersteigt, funktioniert die SEO der Website. Wenn „Verloren" hoch ist, ist etwas schiefgegangen — möglicherweise ein Algorithmus-Update, Content-Verfall oder Konkurrenten haben sie überholt. Agenturen präsentieren diese Daten in monatlichen Berichten, um Kunden zu zeigen, ob ihre SEO-Investition Vorwärtsmomentum generiert.',
        image: '/website traffic checker/see keywords in tops declining and improved keywords.png',
      },
      {
        title: 'Organischen vs. bezahlten Traffic-Strategie vergleichen',
        description: 'Die Split-Ansicht zeigt Organischen Traffic und Bezahlten Traffic nebeneinander. Dies offenbart die Suchstrategie einer Website auf einen Blick. Eine Website mit hohem organischen Traffic und null bezahltem Traffic hat stark in SEO investiert. Eine Website mit ausgewogenem organischen und bezahlten Traffic ist diversifiziert. Eine Website, die vollständig auf bezahlten Traffic angewiesen ist, ist anfällig für Budgetkürzungen. Nutzen Sie dies, um Ihre eigene Strategie zu benchmarken und Wettbewerbsvorteile zu identifizieren.',
        image: '/website traffic checker/see organic and paid traffic.png',
      },
    ],
    faqs: [
      {
        question: 'Wie schätzt ein Website Traffic Checker Traffic ohne Zugang zu Analytics?',
        answer: 'Traffic Checker schätzen organischen Traffic unter Verwendung einer Kombination aus Keyword-Ranking-Daten und Klickraten-Modellen. Das Tool identifiziert, für welche Keywords eine Website rankt, deren Ranking-Positionen und die monatlichen Suchvolumina für diese Keywords. Dann werden positionsbasierte Klickraten-Schätzungen angewendet (z.B. Position #1 erhält ~28% der Klicks, #2 erhält ~15%), um geschätzte monatliche Besuche aus jedem Keyword zu berechnen. Die Summe aller Keyword-bezogenen Traffic-Schätzungen ergibt die gesamte Traffic-Schätzung.',
      },
      {
        question: 'Was ist Traffic-Wert und wie wird er berechnet?',
        answer: 'Der Traffic-Wert repräsentiert die geschätzten monatlichen Kosten, den organischen Traffic einer Website durch Google Ads zu replizieren. Er wird berechnet, indem der geschätzte organische Traffic jedes Keywords mit seinem CPC (Cost Per Click) multipliziert und dann über alle Keywords summiert wird. Wenn eine Website beispielsweise 1.000 organische Besuche von einem Keyword mit einem CPC von 5 $ erhält, trägt dieses Keyword 5.000 $ zum Traffic-Wert bei. Diese Metrik demonstriert eindrucksvoll den monetären Wert von SEO-Investitionen.',
      },
      {
        question: 'Was ist der Unterschied zwischen organischem Traffic und bezahltem Traffic?',
        answer: 'Organischer Traffic kommt aus unbezahlten Suchmaschinenergebnissen — Nutzer klicken auf Ihr Listing, weil es natürlich in Google basierend auf Relevanz und Autorität erschienen ist. Bezahlter Traffic kommt aus Suchmaschinenwerbung (Google Ads) — Sie zahlen für jeden Klick auf Ihr gesponsertes Listing. Organischer Traffic ist „kostenlos" in dem Sinne, dass Sie nicht pro Klick zahlen, erfordert aber Investitionen in Content-Erstellung und SEO. Bezahlter Traffic liefert sofortige Sichtbarkeit, endet aber in dem Moment, in dem Sie Ihr Werbebudget pausieren.',
      },
      {
        question: 'Was bedeuten die Metriken „Neue Keywords", „Verbessert", „Verschlechtert" und „Verloren"?',
        answer: '„Neue Keywords" sind Suchbegriffe, für die die Website im letzten Zeitraum zu ranken begann — was darauf hinweist, dass frischer Content indexiert wird oder bestehender Content an Sichtbarkeit gewinnt. „Verbesserte Rankings" sind Keywords, bei denen die Position der Website nach oben rückte (näher an #1). „Verschlechterte Rankings" sind Keywords, bei denen die Position fiel. „Verlorene Rankings" sind Keywords, für die die Website zuvor rankte, aber nicht mehr in den Top 100 erscheint. Eine gesunde Website zeigt typischerweise, dass Neue + Verbesserte deutlich Verschlechterte + Verlorene übertreffen.',
      },
      {
        question: 'Wie genau sind Website-Traffic-Schätzungen für kleine vs. große Websites?',
        answer: 'Traffic-Schätzungen sind generell genauer für größere Websites mit tausenden von Rankings, weil das statistische Modell über viele Keywords gemittelt wird. Für kleine Websites, die für weniger als 100 Keywords ranken, können Schätzungen breitere Fehlermargen haben, da die Über- oder Unterschätzung eines einzelnen Keywords einen größeren Einfluss auf die Gesamtsumme hat. Für Wettbewerbs-Benchmarking ist der relative Vergleich (Ihre Website vs. Konkurrenten) zuverlässiger als die absoluten Zahlen.',
      },
      {
        question: 'Warum hat ein Konkurrent mit niedrigerer Autorität mehr Traffic als meine Website?',
        answer: 'Autorität und Traffic sind korreliert, aber nicht identisch. Ein Konkurrent kann Sie im Traffic übertreffen mit niedrigerer Autorität, wenn er: (1) eine bessere Content-Strategie hat, die auf Keywords mit höherem Suchvolumen abzielt, (2) häufiger und konsistenter Content produziert, (3) Long-Tail-Keywords anvisiert, die weniger Autorität zum Ranken erfordern, (4) überlegene On-Page-Optimierung und technisches SEO hat, oder (5) von thematischer Autorität in einer bestimmten Nische profitiert, trotz niedrigerer allgemeiner Domain-Metriken.',
      },
      {
        question: 'Wie kann ich Traffic-Checker-Daten für Wettbewerbsanalysen verwenden?',
        answer: 'Führen Sie den Traffic Checker für Ihre Top 5 Konkurrenten aus und vergleichen Sie: organischen Gesamt-Traffic, Gesamt-Keywords, Traffic-Wert, organisch vs. bezahlt Split und Keyword-Bewegungstrends. Dies zeigt, wer am schnellsten wächst, wer auf bezahlte Anzeigen angewiesen ist, wer den größten Keyword-Fußabdruck hat und wo jeder Konkurrent den meisten Wert generiert. Dann gehen Sie in die Tiefe bei spezifischen Keywords — wo ranken Konkurrenten, wo Sie es nicht tun? Dies sind Ihre Content-Gap-Möglichkeiten.',
      },
      {
        question: 'Was bedeutet es, wenn eine Website hohen Traffic-Wert aber moderates Traffic-Volumen hat?',
        answer: 'Dies bedeutet, dass die Website für kommerziell wertvolle Keywords mit hohen CPCs rankt, selbst wenn die Suchvolumina moderat sind. Eine Website mit 10.000 monatlichen Besuchen von Keywords mit durchschnittlich 20 $ CPC hat einen Traffic-Wert von 200.000 $ — mehr als eine Website mit 100.000 Besuchen von Keywords mit durchschnittlich 0,50 $ CPC (50.000 $ Traffic-Wert). Hoher Traffic-Wert relativ zum Traffic-Volumen zeigt an, dass die Website Bottom-of-Funnel, High-Intent-Keywords anvisiert, die Umsatz generieren.',
      },
      {
        question: 'Wie verfolge ich Traffic-Trends über die Zeit?',
        answer: 'Exportieren Sie die Traffic-Daten monatlich und erstellen Sie ein historisches Dashboard. Verfolgen Sie organischen Gesamt-Traffic, Gesamt-Keywords, Keywords in Top 3, Keywords in Top 10 und Traffic-Wert über 6–12 Monate. Stellen Sie diese als Trendlinien dar, um Wachstum oder Rückgang zu visualisieren. Die aussagekräftigste Metrik zum Verfolgen ist „Keywords in Top 10", da sie direkt mit dem Traffic korreliert — je mehr Keywords auf Seite eins, desto mehr Traffic erhalten Sie.',
      },
      {
        question: 'Kann ich dieses Tool verwenden, um den Umsatz einer Website zu schätzen?',
        answer: 'Obwohl Traffic-Checker-Daten allein keinen Umsatz offenbaren, können Sie grobe Schätzungen erstellen. Für werbegestützte Websites multiplizieren Sie geschätzten Traffic mit typischen RPMs (5–30 $ pro 1.000 Seitenaufrufe je nach Nische). Für E-Commerce-Websites wenden Sie branchendurchschnittliche Conversion-Raten (1–3%) und durchschnittliche Bestellwerte an. Für SaaS-Websites schätzen Sie Leads aus dem Traffic unter Verwendung typischer Conversion-Raten (2–5% zur kostenlosen Testversion) und bekannter Preisgestaltung.',
      },
      {
        question: 'Warum zeigt eine Website null bezahlten Traffic an?',
        answer: 'Null bezahlter Traffic bedeutet, dass die Website derzeit keine Google Ads-Kampagnen durchführt, die die Datenquellen des Tools erkennen können. Dies könnte bedeuten, dass die Website vollständig auf organisches SEO setzt (eine gängige Strategie für Content-getriebene Unternehmen), Anzeigen auf anderen Plattformen schaltet (Facebook, LinkedIn, Display-Netzwerke) anstelle von Google Search, oder kürzlich Kampagnen pausiert hat. Null bezahlter Traffic ist weder grundsätzlich gut noch schlecht — es zeigt einfach an, dass die Suchsichtbarkeitsstrategie der Website vollständig organisch ist.',
      },
      {
        question: 'Wie behandelt der Traffic Checker Subdomains und Unterordner?',
        answer: 'Das Tool prüft den Traffic für die gesamte eingegebene Domain. Wenn eine Website Subdomains verwendet (blog.example.com, shop.example.com), sind diese typischerweise in der Gesamt-Traffic-Schätzung der Root-Domain enthalten. Unterordner (example.com/blog/, example.com/shop/) sind immer enthalten, da sie Teil derselben Domain sind. Wenn Sie Traffic-Schätzungen für eine bestimmte Subdomain oder einen URL-Pfad benötigen, bieten einige Tools URL-Level-Analysen an, die den Traffic nach Seite oder Abschnitt aufschlüsseln.',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: 'Broken Link Checker',
    title: 'Kostenloser Broken Link & Seitengesundheits-Checker',
    description: 'Prüfen Sie jede Webseite auf defekte Links, SEO-Probleme und Seitengesundheitsprobleme. Erhalten Sie ein detailliertes Audit mit umsetzbaren Empfehlungen.',
    metaDescription: 'Prüfen Sie kostenlos jede Webseite auf defekte Links und SEO-Probleme. Erhalten Sie Seitengesundheits-Scores, interne/externe Link-Zählungen und Behebungsempfehlungen.',
    iconName: 'Link2',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Geben Sie eine URL ein',
    inputPlaceholder: 'z.B. https://example.com',
    buttonText: 'Seite prüfen',
    options: [],
    resultType: 'broken-links',
    metricsToShow: ['page_score', 'issues_found', 'internal_links', 'external_links'],
    tableColumns: [
      { key: 'issue', label: 'Problem', sortable: false, type: 'text' },
      { key: 'severity', label: 'Schweregrad', sortable: true, type: 'badge' },
      { key: 'description', label: 'Beschreibung', sortable: false, type: 'text' },
    ],
    apiEndpoint: 'broken-link-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Jede Seite auf defekte Links und technische SEO-Gesundheit prüfen',
        description: 'Defekte Links zerstören still die Nutzererfahrung und SEO-Performance. Geben Sie eine beliebige URL in den Checker ein, klicken Sie auf „Seite prüfen" und erhalten Sie ein sofortiges Audit der Link-Gesundheit und des technischen SEO-Status dieser Seite. Dies ersetzt manuelles Link-für-Link-Prüfen durch einen automatisierten Scan, der 404-Fehler, Redirect-Ketten und tote ausgehende Links erkennt. Website-Besitzer, SEO-Fachleute und Webmaster nutzen dies vor dem Start neuer Seiten, nach Site-Migrationen und als Teil regelmäßiger monatlicher Gesundheitschecks.',
        image: '/Broken link checker/check your website broken links and technical seo health.png',
      },
      {
        title: 'Ihren technischen SEO-Score und kritische Probleme überwachen',
        description: 'Über defekte Links hinaus liefert das Tool einen Page Score (0–100) und die Gesamtzahl der gefundenen Probleme. Ein Page Score von 100 mit 0 Problemen bedeutet, dass die Seite technisch gesund ist. Alles unter 80 signalisiert Probleme, die Aufmerksamkeit erfordern. Dieses Bewertungssystem gibt Ihnen eine schnelle Bestanden/Nicht-bestanden-Metrik für jede Seite Ihrer Website.',
        image: '/Broken link checker/See your websites technical seo score + number of critical seo issues.png',
      },
      {
        title: 'Interne und externe Link-Verteilung analysieren',
        description: 'Das Tool zählt und kategorisiert Interne Links (Links zu anderen Seiten derselben Domain) und Externe Links (Links zu anderen Websites). Diese Daten sind aus zwei Gründen kritisch: (1) Die interne Link-Verteilung beeinflusst, wie Suchmaschinen Ihre Website crawlen und indexieren, und (2) die Qualität externer Links beeinflusst die Vertrauenswürdigkeit Ihrer Seite.',
        image: '/Broken link checker/See internal links from a page external links.png',
      },
      {
        title: 'Spezifische technische Probleme identifizieren und priorisieren',
        description: 'Die Probleme-Tabelle listet jedes gefundene Problem, seinen Schweregrad (Info, Warnung, Kritisch) und eine Beschreibung auf. Probleme wie „Render-blockierende Ressourcen" und „Niedriger Content-Anteil" beeinflussen direkt Core Web Vitals und Content-Qualitätssignale. Jedes Problem kommt mit umsetzbarem Kontext — Sie wissen genau, was falsch ist und können basierend auf dem Schweregrad priorisieren.',
        image: '/Broken link checker/see details about techincal issues from your page.png',
      },
    ],
    faqs: [
      {
        question: 'Was ist ein defekter Link und wie beeinflusst er SEO?',
        answer: 'Ein defekter Link (auch toter Link oder 404-Fehler) ist ein Hyperlink, der auf eine Seite verweist, die nicht mehr existiert oder einen Fehler zurückgibt. Defekte Links beeinflussen SEO auf drei Arten: (1) Sie verschwenden Crawl-Budget, (2) Sie unterbrechen den Link-Equity-Fluss, und (3) Sie schaden der Nutzererfahrung.',
      },
      {
        question: 'Was ist ein Page Score und wie wird er berechnet?',
        answer: 'Der Page Score ist eine 0–100-Metrik, die die technische Gesamtgesundheit einer Webseite bewertet. Er berücksichtigt defekte Links, Seitenladeleistung, Meta-Tag-Vollständigkeit, Content-zu-HTML-Verhältnis, Render-blockierende Ressourcen und mobilfreundliche Indikatoren.',
      },
      {
        question: 'Was ist der Unterschied zwischen internen Links und externen Links im SEO?',
        answer: 'Interne Links verbinden Seiten innerhalb derselben Domain. Sie helfen Suchmaschinen, Ihren Content zu entdecken und zu crawlen, verteilen Link-Equity und etablieren Content-Hierarchien. Externe Links verweisen von Ihrer Website auf andere Domains und signalisieren Content-Qualität und thematische Relevanz.',
      },
      {
        question: 'Wie oft sollte ich meine Website auf defekte Links prüfen?',
        answer: 'Prüfen Sie Ihre wichtigsten Seiten monatlich. Führen Sie vierteljährlich ein vollständiges site-weites Audit durch. Prüfen Sie zusätzlich immer nach Site-Migrationen, CMS-Updates, URL-Strukturänderungen oder Content-Löschungen.',
      },
      {
        question: 'Was sind Render-blockierende Ressourcen und warum sind sie wichtig?',
        answer: 'Render-blockierende Ressourcen sind CSS-Stylesheets und JavaScript-Dateien, die den Browser daran hindern, die Seite anzuzeigen, bis sie vollständig geladen sind. Sie verlangsamen Core Web Vitals-Metriken, die Google als Ranking-Faktoren verwendet.',
      },
      {
        question: 'Was bedeutet „Niedriger Content-Anteil" im Problembericht?',
        answer: 'Niedriger Content-Anteil bedeutet, dass die Seite sehr wenig lesbaren Textinhalt im Verhältnis zu ihrem HTML-Code hat. Suchmaschinen können dies als Thin-Content-Seite interpretieren. Das typische gesunde Verhältnis liegt über 25% Text zu HTML.',
      },
      {
        question: 'Können defekte Links auf meiner Website Seiten beeinflussen, die selbst keine defekten Links haben?',
        answer: 'Ja, durch ein Konzept namens Crawl-Budget-Verschwendung. Suchmaschinen weisen jeder Website ein begrenztes Crawl-Budget zu. Wenn Bots auf defekte Links stoßen, verwenden sie Crawl-Budget für Sackgassen.',
      },
      {
        question: 'Sollte ich zuerst interne oder externe defekte Links beheben?',
        answer: 'Beheben Sie zuerst interne defekte Links. Interne defekte Links beeinflussen direkt die Crawlbarkeit, Navigation und interne Link-Equity-Verteilung Ihrer Website — alles, was Sie vollständig kontrollieren.',
      },
      {
        question: 'Was ist Link-Equity und wie beeinflussen defekte Links es?',
        answer: 'Link-Equity ist der Ranking-Wert, der von einer Seite zur anderen durch Hyperlinks übertragen wird. Wenn ein defekter Link auf einen 404-Fehler verweist, wird die Link-Equity verschwendet. Durch Einrichten von 301-Weiterleitungen können Sie verlorene Link-Equity zurückgewinnen.',
      },
      {
        question: 'Wie nutze ich defekte Link-Daten für Linkaufbau?',
        answer: 'Broken Link Building ist eine bewährte Link-Akquisitionsstrategie. Finden Sie defekte Seiten auf Konkurrenz- oder Branchenseiten, erstellen Sie Content auf Ihrer eigenen Website, der dasselbe Thema abdeckt, und kontaktieren Sie dann die Websites, die auf die defekte Seite verlinkt haben.',
      },
      {
        question: 'Welche HTTP-Statuscodes zeigen defekte Links an?',
        answer: 'Die häufigsten sind: 404 (Nicht gefunden), 410 (Entfernt), 500 (Interner Serverfehler), 502 (Bad Gateway) und 503 (Dienst nicht verfügbar). Zusätzlich verschwenden 301- und 302-Redirect-Ketten Link-Equity und verlangsamen Seitenladezeiten.',
      },
      {
        question: 'Können defekte Links dazu führen, dass Google meine Seiten de-indexiert?',
        answer: 'Einige wenige defekte Links verursachen keine De-Indexierung. Wenn jedoch ein signifikanter Prozentsatz der URLs Ihrer Website 404-Fehler zurückgibt, kann Google die Crawl-Rate für Ihre Domain reduzieren. Regelmäßiges Auditing verhindert diesen Verfall.',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'AI Visibility Checker',
    title: 'Kostenloser AI Visibility Checker',
    description: 'Sehen Sie, wie Google AI Overviews Ihre Website beeinflussen. Erfahren Sie, welcher Prozentsatz Ihrer Keywords AI Overviews auslöst, wie viel Traffic gefährdet ist, und erhalten Sie einen AI Visibility Score.',
    metaDescription: 'Prüfen Sie kostenlos, wie Google AI Overviews Ihre Website beeinflussen. Sehen Sie Ihre AI-Overview-Expositionsrate, betroffene Keywords, gefährdeten Traffic und AI Visibility Score.',
    iconName: 'Sparkles',
    category: 'other',
    inputType: 'url',
    inputLabel: 'Geben Sie eine Domain ein',
    inputPlaceholder: 'z.B. example.com',
    buttonText: 'AI-Sichtbarkeit prüfen',
    options: [],
    resultType: 'ai-visibility',
    metricsToShow: ['ai_exposure', 'ai_keywords', 'traffic_at_risk'],
    tableColumns: [
      { key: 'metric', label: 'Metrik', sortable: false, type: 'text' },
      { key: 'value', label: 'Wert', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'ai-visibility-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Die Sichtbarkeit jeder Website in KI-gestützter Suche prüfen',
        description: 'AI Overviews, ChatGPT, Perplexity und Gemini verändern grundlegend, wie Nutzer Informationen finden — und die meisten Websites haben keine Ahnung, wie sie in dieser neuen Landschaft abschneiden. Geben Sie eine beliebige Domain ein, klicken Sie auf „AI-Sichtbarkeit prüfen" und erhalten Sie ein umfassendes Audit, wie die Website in KI-Suchergebnissen erscheint. Dies ist der erste Schritt in der AI Engine Optimization (AEO), der aufkommenden Disziplin neben traditionellem SEO.',
        image: '/ai visibility checker/check any websites visibility in llms.png',
      },
      {
        title: 'AI-Overview-Keyword-Verteilung und Positionierung analysieren',
        description: 'Die detaillierten Metriken zeigen Gesamt-gerankte Keywords, Keywords mit AI Overviews, AI-Overview-Expositionsrate, Keyword-Verteilung nach Position (#1 AI Keywords, #2–3, #4–10), Organischer Traffic von AI Keywords und organischer Gesamt-Traffic. Diese detaillierte Aufschlüsselung zeigt genau, wie viel Ihres Keyword-Portfolios von Googles AI Overviews betroffen ist.',
        image: '/ai visibility checker/see keyword distribution for ai overview.png',
      },
      {
        title: 'Quantifizieren, wie viel Traffic durch AI Overviews gefährdet ist',
        description: 'Die Dual-Metrik-Anzeige zeigt Keywords mit AI Overviews und Gefährdeten Traffic. „Gefährdeter Traffic" schätzt den organischen Traffic, der abnehmen könnte, wenn AI Overviews Klicks absorbieren, die zuvor zu traditionellen organischen Ergebnissen führten. Dies ist die wichtigste Metrik zum Verständnis der Auswirkungen von KI-Suche auf Ihr Geschäft.',
        image: '/ai visibility checker/see number of keywords in ai overview and which percentage of your traffic is at risk with google ai overviews.png',
      },
      {
        title: 'Domain-Stärke gegen AI-Overview-Exposition benchmarken',
        description: 'Das Dashboard kombiniert Ihren Domain Score (z.B. 97 „Sehr stark") mit Ihrem AI-Overview-Expositionsprozentsatz. Diese Kombination ist entscheidend: eine starke Domain schützt Sie nicht vor AI Overviews. Selbst die autoritativsten Websites sind massiver Klickraten-Erosion durch KI-generierte Antworten ausgesetzt. Der Domain Score zeigt Ihre traditionelle SEO-Stärke, während die Expositionsmetrik zeigt, wie viel dieser Stärke durch KI bedroht ist.',
        image: '/ai visibility checker/see your domain score in ai overview and exposure level to ai overview.png',
      },
    ],
    faqs: [
      {
        question: 'Was ist AI-Sichtbarkeit und warum ist sie für SEO in 2025–2026 wichtig?',
        answer: 'AI-Sichtbarkeit bezieht sich darauf, wie prominent Ihre Website, Marke oder Ihr Content in KI-gestützten Sucherlebnissen erscheint — einschließlich Google AI Overviews, ChatGPT-Antworten, Perplexity-Antworten, Gemini-Ergebnissen und Microsoft Copilot. Es ist wichtig, weil diese KI-Systeme das Suchverhalten grundlegend verändern. Google AI Overviews erscheinen jetzt für über 70% der informationellen Anfragen.',
      },
      {
        question: 'Was sind Google AI Overviews und wie beeinflussen sie organischen Traffic?',
        answer: 'Google AI Overviews sind KI-generierte Antwort-Zusammenfassungen, die oben in Googles Suchergebnissen für viele Anfragen erscheinen. Studien zeigen, dass AI Overviews die Klickraten auf organische Ergebnisse um 18–64% reduzieren können, abhängig vom Anfragetyp.',
      },
      {
        question: 'Was bedeutet „Gefährdeter Traffic" und wie wird er berechnet?',
        answer: '„Gefährdeter Traffic" schätzt den organischen Traffic, der abnehmen könnte, wenn AI Overviews Klicks absorbieren. Er wird berechnet, indem alle Keywords identifiziert werden, bei denen Ihre Website rankt UND Google eine AI Overview anzeigt.',
      },
      {
        question: 'Was ist AI-Overview-Exposition und was bedeutet ein hoher Prozentsatz?',
        answer: 'AI-Overview-Exposition ist der Prozentsatz Ihrer gerankten Keywords, die Google AI Overviews auslösen. Eine Exposition von 76,8% bedeutet, dass für über drei Viertel Ihrer gerankten Keywords Google eine KI-generierte Antwort über den organischen Ergebnissen anzeigt.',
      },
      {
        question: 'Wie unterscheidet sich AI-Sichtbarkeit von traditioneller SEO-Sichtbarkeit?',
        answer: 'Traditionelle SEO-Sichtbarkeit misst Ihre Präsenz in Standard-organischen Suchergebnissen. AI-Sichtbarkeit misst Ihre Präsenz in KI-generierten Antworten. Die beiden können divergieren: eine Website auf Platz #1 organisch wird möglicherweise nicht in der AI Overview zitiert.',
      },
      {
        question: 'Was ist AI Engine Optimization (AEO) und wie beginne ich?',
        answer: 'AEO ist die Praxis, Ihren Content zu optimieren, um in KI-generierten Suchantworten referenziert, zitiert und vorgestellt zu werden. Schlüsselstrategien umfassen: klare, präzise Antworten bereitstellen, strukturierte Daten und Schema-Markup verwenden, thematische Autorität aufbauen, originelle Daten einbeziehen und hohe E-E-A-T-Signale aufrechterhalten.',
      },
      {
        question: 'Wie beeinflusst Domain-Stärke die AI-Overview-Zitierung?',
        answer: 'KI-Systeme, einschließlich Googles AI Overviews, tendieren dazu, autoritative, bekannte Quellen häufiger zu zitieren. Höhere Domain-Scores korrelieren mit höheren Zitierungsraten in KI-Antworten. Allerdings reicht Domain-Stärke allein nicht aus.',
      },
      {
        question: 'Welche Arten von Content sind am anfälligsten für AI-Overview-Traffic-Verlust?',
        answer: 'Informationeller Content, der einfache faktische Fragen beantwortet, ist am anfälligsten — Definitionen, schnelle How-to-Antworten, Statistiken, Vergleiche und „Was ist"-Anfragen. Resilientere Content-Typen umfassen: tiefgehende Analysen, interaktive Tools, originelle Forschung und Produktvergleiche mit persönlicher Erfahrung.',
      },
      {
        question: 'Kann ich sehen, welche KI-Plattformen meinen Content zitieren?',
        answer: 'Dieses Tool misst speziell die AI-Overview-Exposition auf Google. Für breiteres KI-Plattform-Monitoring (ChatGPT, Perplexity, Gemini, Copilot) verfolgen dedizierte Brand-Monitoring-Tools, wo und wie Ihre Marke über KI-Plattformen erscheint.',
      },
      {
        question: 'Was sollte ich tun, wenn meine AI-Overview-Exposition über 50% liegt?',
        answer: 'Hohe Exposition erfordert eine mehrstufige Reaktion: (1) Prüfen Sie, welche spezifischen Keywords AI Overviews auslösen, (2) Optimieren Sie Ihre höchst-trafficierten Seiten für KI-Zitierung, (3) Diversifizieren Sie Traffic-Quellen, (4) Erstellen Sie Content-Formate, die AI Overviews nicht replizieren können, und (5) Überwachen Sie monatlich.',
      },
      {
        question: 'Wie verhält sich der Domain Score im AI-Sichtbarkeitskontext zur traditionellen Autorität?',
        answer: 'Der Domain Score neben AI-Overview-Daten ist dieselbe Autoritätsmetrik basierend auf Backlink-Profil-Stärke. Im AI-Sichtbarkeitskontext bietet er entscheidende Perspektive: ein starker Domain Score bedeutet, Ihre traditionelle SEO-Grundlage ist solide, aber der AI-Expositionsprozentsatz zeigt, wie viel dieser Grundlage gestört wird.',
      },
      {
        question: 'Ist AI-Sichtbarkeit relevant für B2B- und Enterprise-Websites?',
        answer: 'Absolut. B2B-Käufer nutzen zunehmend KI-Tools für Anbieterrecherche, Technologiebewertung und Kaufentscheidungsunterstützung. Google AI Overviews sind besonders verbreitet für B2B-informationelle Anfragen. Enterprise-Marken, die als Zitierungen in AI Overviews erscheinen, gewinnen erhebliche Glaubwürdigkeit.',
      },
    ],
  },
};

export function getSeoToolBySlugDe(slug: string): SeoToolConfig | undefined {
  return seoToolsDe[slug];
}

export function getAllSeoToolsDe(): SeoToolConfig[] {
  return Object.values(seoToolsDe);
}

export function getAllSeoToolSlugsDe(): string[] {
  return Object.keys(seoToolsDe);
}
