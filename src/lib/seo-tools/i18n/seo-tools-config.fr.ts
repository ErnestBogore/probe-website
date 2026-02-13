import { SeoToolConfig } from '../seo-tools-config.types';

export const seoToolsFr: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: 'Generateur de mots-cles',
    title: 'Generateur de mots-cles gratuit',
    description: 'Trouvez des milliers d\'idees de mots-cles pour vos campagnes SEO et de marketing de contenu. Obtenez le volume de recherche, la difficulte des mots-cles et les donnees CPC.',
    metaDescription: 'Generez des idees de mots-cles a partir de n\'importe quel terme de depart. Consultez le volume de recherche, la difficulte et le CPC pour plus de 15 pays — gratuit, sans inscription.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Entrez un mot-cle de depart',
    inputPlaceholder: 'ex. marketing par e-mail',
    buttonText: 'Trouver des mots-cles',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'keyword-generator',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Pays',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Etats-Unis' },
          { value: '2826', label: 'Royaume-Uni' },
          { value: '2276', label: 'Allemagne' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Espagne' },
          { value: '2380', label: 'Italie' },
          { value: '2076', label: 'Bresil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australie' },
          { value: '2356', label: 'Inde' },
          { value: '2392', label: 'Japon' },
          { value: '2528', label: 'Pays-Bas' },
          { value: '2792', label: 'Turquie' },
          { value: '2410', label: 'Coree du Sud' },
          { value: '2484', label: 'Mexique' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Mot-cle', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Concurrence', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Decouvrez des opportunites de mots-cles dans n\'importe quel marche',
        description: 'Que vous vous developpiez sur le marche britannique, que vous cibliez des acheteurs au Bresil ou que vous meniez une campagne locale au Japon, cet outil vous permet de rechercher la demande de mots-cles dans plus de 15 pays a partir d\'une seule saisie. Entrez un mot-cle de depart comme « marketing par e-mail », selectionnez votre pays cible dans le menu deroulant et decouvrez instantanement les termes que les internautes saisissent reellement dans Google. Cet outil est particulierement utile pour les equipes SEO internationales qui planifient des deploiements de contenu sur plusieurs regions, ou pour les marques e-commerce qui valident la demande de produits avant de penetrer un nouveau marche.',
        image: '/Keyword Generator/ideate keywords from a seed keyword in any location.png',
      },
      {
        title: 'Obtenez une vue d\'ensemble du paysage de recherche d\'un sujet',
        description: 'Avant d\'investir des ressources dans un cluster de contenu, vous devez savoir si le sujet genere suffisamment de demande de recherche et si la concurrence est geerable. Apres avoir saisi votre mot-cle de depart, l\'outil fournit un tableau de bord recapitulatif affichant le nombre total de mots-cles (par ex. 50 resultats), le volume moyen sur l\'ensemble de ces mots-cles et la difficulte moyenne. Cet apercu permet aux strateges de contenu et aux responsables SEO d\'evaluer rapidement si un sujet merite d\'etre explore ou s\'ils devraient se tourner vers un territoire de mots-cles plus favorable.',
        image: '/Keyword Generator/See a comprehensive overview of your see keyword from search volume to difficulty to cpc.png',
      },
      {
        title: 'Evaluez la competitivite au niveau des mots-cles pour prioriser votre contenu',
        description: 'Le tableau de resultats affiche chaque mot-cle accompagne de son volume de recherche mensuel, de son score de difficulte (KD), du cout par clic (CPC) et de l\'indice de concurrence. Cette vue multi-metriques vous permet de trouver le juste equilibre : des mots-cles a fort volume avec une faible difficulte et une intention commerciale significative. Les responsables PPC peuvent utiliser la colonne CPC pour estimer les depenses publicitaires, tandis que les praticiens SEO peuvent utiliser le score KD pour decider quels mots-cles cibler avec du contenu long format et lesquels necessitent une strategie axee sur les backlinks.',
        image: '/Keyword Generator/See any keywords competitive landscape from kyword difficulty to cpc.png',
      },
      {
        title: 'Exploitez les mots-cles semantiquement lies pour construire une autorite thematique',
        description: 'L\'algorithme de classement de Google recompense les pages qui couvrent un sujet de maniere exhaustive. Cette vue presente une liste claire de mots-cles semantiquement lies avec leurs volumes de recherche respectifs. Utilisez-la pour identifier les mots-cles secondaires et LSI (Latent Semantic Indexing) qui devraient apparaitre dans vos titres, votre texte principal et vos sections FAQ. En integrant ces termes connexes dans votre contenu, vous signalez aux moteurs de recherche une profondeur thematique — l\'un des facteurs de classement on-page les plus puissants pour les requetes informationnelles.',
        image: '/Keyword Generator/see other semantically relevant keywords (secondary keyword) and their volume close to your main keyword.png',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'un generateur de mots-cles et comment fonctionne-t-il ?',
        answer: 'Un generateur de mots-cles est un outil de recherche qui prend un mot-cle de depart — un terme ou une expression generale pour laquelle vous souhaitez vous positionner — et renvoie une liste de requetes de recherche associees que les vrais utilisateurs saisissent dans les moteurs de recherche. Le generateur de mots-cles d\'Analyze AI fonctionne en interrogeant une base de donnees de termes de recherche, fournissant jusqu\'a 50 idees de mots-cles par recherche et affichant pour chaque mot-cle le volume de recherche mensuel, le score de difficulte, le cout par clic et le niveau de concurrence. Le processus ne prend que quelques secondes et ne necessite aucun compte ni connexion.',
      },
      {
        question: 'Comment la difficulte des mots-cles (KD) est-elle calculee dans cet outil ?',
        answer: 'La difficulte des mots-cles est un score de 0 a 100 qui estime la difficulte de se positionner dans les 10 premiers resultats organiques pour un terme donne. Le score prend en compte la force des backlinks et l\'autorite de domaine des pages actuellement classees en premiere page de Google. Un KD de 0 a 10 est considere comme facile (les nouveaux sites peuvent rivaliser), 11 a 30 est moyen (necessite un contenu solide et quelques backlinks), 31 a 60 est difficile (necessite une forte autorite et une strategie de link building) et 61 a 100 est tres difficile (domine par des sites a forte autorite comme Wikipedia, Amazon ou de grands editeurs).',
      },
      {
        question: 'Quelle est la difference entre le volume de recherche et la difficulte des mots-cles ?',
        answer: 'Le volume de recherche indique combien de personnes recherchent un terme chaque mois — il mesure la demande. La difficulte des mots-cles indique a quel point les resultats de recherche sont competitifs pour ce terme — elle mesure la resistance cote offre. Un mot-cle avec 10 000 recherches mensuelles mais un KD de 85 peut etre moins interessant a cibler qu\'un mot-cle avec 500 recherches et un KD de 8, car vous pouvez vous positionner de maniere realiste pour ce dernier. La meilleure strategie de mots-cles equilibre les deux metriques.',
      },
      {
        question: 'Comment utiliser les donnees CPC d\'un outil de mots-cles gratuit si je ne fais que du SEO ?',
        answer: 'Le CPC (cout par clic) reflete le montant que les annonceurs sont prets a payer pour un seul clic sur ce mot-cle dans Google Ads. Meme si vous ne gerez pas de campagnes payantes, le CPC est un indicateur puissant de l\'intention commerciale. Les mots-cles avec des CPC eleves (par ex. 15 EUR+) indiquent que les entreprises considerent ces internautes comme precieux — ce qui signifie qu\'ils sont plus proches d\'une decision d\'achat. Cibler des mots-cles a CPC eleve avec du contenu SEO peut generer un trafic qui convertit a des taux plus eleves.',
      },
      {
        question: 'Combien de mots-cles puis-je generer par recherche ?',
        answer: 'Chaque recherche renvoie jusqu\'a 50 idees de mots-cles a partir du terme de depart saisi. Pour generer plus d\'idees, essayez des variations de votre mot-cle de depart, utilisez des modificateurs longue traine (par ex. « marketing par e-mail pour startups » au lieu de « marketing par e-mail ») ou recherchez dans differents pays. Les utilisateurs avances effectuent souvent 10 a 20 recherches de mots-cles de depart et compilent les resultats dans une liste maitresse de mots-cles, qui peut ensuite etre dedupliquee et priorisee par volume et difficulte.',
      },
      {
        question: 'Puis-je utiliser cet outil pour la recherche de mots-cles en SEO local ?',
        answer: 'Oui. Le selecteur de pays prend en charge plus de 15 pays, dont les Etats-Unis, le Royaume-Uni, l\'Allemagne, la France, l\'Espagne, l\'Italie, le Bresil, le Canada, l\'Australie, l\'Inde et le Japon. En changeant de pays, vous voyez les donnees de volume de recherche localisees pour ce marche. Cela est particulierement precieux pour les entreprises locales, les boutiques e-commerce regionales et les agences qui gerent des campagnes SEO multi-sites.',
      },
      {
        question: 'Que sont les mots-cles semantiquement lies et pourquoi sont-ils importants pour le SEO ?',
        answer: 'Les mots-cles semantiquement lies sont des termes conceptuellement connectes a votre mot-cle principal meme s\'ils ne contiennent pas exactement les memes mots. Par exemple, pour le mot-cle de depart « marketing par e-mail », les termes semantiquement lies pourraient inclure « automatisation de newsletter », « campagnes de drip » et « engagement des abonnes ». Google utilise le traitement du langage naturel (NLP) pour comprendre les relations thematiques entre les termes. Les pages qui incluent naturellement des mots-cles semantiquement lies tendent a mieux se classer car elles signalent une couverture thematique exhaustive.',
      },
      {
        question: 'Comment trouver des mots-cles a faible concurrence avec cet outil ?',
        answer: 'Triez le tableau de resultats par la colonne KD (difficulte des mots-cles) par ordre croissant. Recherchez les mots-cles avec un KD entre 0 et 15, un volume de recherche mensuel superieur a 100 et un score de concurrence inferieur a 30. Ce sont vos « fruits a portee de main » — des termes pour lesquels une page bien optimisee avec un contenu original et approfondi peut se positionner sans investissement massif en backlinks. Les mots-cles longue traine (3 a 5 mots) ont generalement une concurrence plus faible car ils ciblent des intentions de recherche plus precises que les grands concurrents negligent souvent.',
      },
      {
        question: 'Qu\'est-ce que la colonne du score de concurrence et en quoi differe-t-elle de la difficulte des mots-cles ?',
        answer: 'Le score de Concurrence mesure le nombre d\'annonceurs qui encherissent sur un mot-cle en recherche payante (Google Ads). Un score de 100 signifie que pratiquement tous les emplacements publicitaires sont occupes — forte concurrence entre annonceurs. La Difficulte des mots-cles, en revanche, mesure la concurrence organique basee sur les profils de backlinks des pages les mieux classees. Un mot-cle peut avoir une forte concurrence payante mais une faible difficulte organique (ou inversement). Les marketeurs avises croisent les deux metriques : une forte concurrence payante combinee a une faible difficulte organique signale un mot-cle rentable que vous pouvez remporter avec le SEO au lieu de payer pour des annonces.',
      },
      {
        question: 'Puis-je exporter les resultats de mots-cles ?',
        answer: 'Oui. L\'outil comprend un bouton « Exporter en CSV » en haut du tableau de resultats. Cela vous permet de telecharger la liste complete des mots-cles — y compris le volume, le KD, le CPC et les donnees de concurrence — dans un tableur. A partir de la, vous pouvez fusionner les resultats de plusieurs recherches, appliquer des filtres personnalises, creer des calendriers de contenu ou partager les donnees avec les redacteurs et les membres de l\'equipe SEO.',
      },
      {
        question: 'A quelle frequence les donnees de mots-cles sont-elles mises a jour ?',
        answer: 'La base de donnees de mots-cles est regulierement actualisee pour garantir precision et pertinence. Les chiffres de volume de recherche sont bases sur des moyennes mensuelles glissantes, ce qui lisse les pics a court terme et les fluctuations saisonnieres. Pour les sujets tendance ou les secteurs en evolution rapide, il est recommande de croiser les donnees de l\'outil de mots-cles avec Google Trends pour capter le momentum en temps reel qui peut ne pas encore etre reflete dans les volumes mensuels moyens.',
      },
      {
        question: 'Comment utiliser ce generateur de mots-cles dans le cadre d\'un workflow SEO plus large ?',
        answer: 'Le generateur de mots-cles est generalement la premiere etape d\'un workflow de contenu SEO en cinq phases : (1) Decouverte — utilisez cet outil pour generer des idees de mots-cles a partir de termes de depart, (2) Qualification — filtrez par KD et volume pour trouver des cibles viables, (3) Regroupement — regroupez les mots-cles semantiquement lies en clusters thematiques, (4) Creation de contenu — redigez des pages ciblant les mots-cles principaux et integrant naturellement les termes secondaires, (5) Suivi — utilisez un outil de suivi de positionnement pour surveiller les performances de vos pages dans le temps.',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: 'Verificateur de difficulte de mots-cles',
    title: 'Verificateur de difficulte de mots-cles gratuit',
    description: 'Verifiez la difficulte de positionnement pour n\'importe quel mot-cle. Obtenez un score de difficulte de 0 a 100 accompagne du volume de recherche et des donnees de concurrence.',
    metaDescription: 'Verifiez gratuitement la difficulte de positionnement de n\'importe quel mot-cle. Consultez le score KD, le volume de recherche et le CPC pour prioriser les mots-cles sur lesquels vous pouvez reellement vous positionner.',
    iconName: 'BarChart3',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Entrez un mot-cle',
    inputPlaceholder: 'ex. meilleur logiciel de gestion de projet',
    buttonText: 'Verifier la difficulte',
    resultType: 'keyword-difficulty',
    metricsToShow: ['keyword_difficulty', 'search_volume', 'cpc'],
    apiEndpoint: 'keyword-difficulty',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'Pays',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Etats-Unis' },
          { value: '2826', label: 'Royaume-Uni' },
          { value: '2276', label: 'Allemagne' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Espagne' },
          { value: '2380', label: 'Italie' },
          { value: '2076', label: 'Bresil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australie' },
          { value: '2356', label: 'Inde' },
          { value: '2392', label: 'Japon' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Mot-cle', sortable: true, type: 'text' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
    ],
    useCases: [
      {
        title: 'Evaluez rapidement si un mot-cle merite d\'etre cible',
        description: 'Avant d\'ecrire le moindre mot de contenu, vous devez savoir si vous pouvez vous positionner de maniere realiste sur votre mot-cle cible. Entrez n\'importe quel mot-cle, selectionnez parmi plus de 10 pays dans le menu deroulant et obtenez instantanement une evaluation de la difficulte. C\'est le premier filtre dans toute strategie de contenu serieuse — il vous empeche de gaspiller des semaines d\'efforts sur des mots-cles dont les 10 premiers resultats sont domines par des sites dont l\'autorite de domaine est hors de votre portee. Utilisez-le pour evaluer les demandes de mots-cles des clients, valider des idees de sujets de blog ou pre-filtrer des termes issus de sessions de brainstorming.',
        image: '/keyword difficulty checker/Check the difficulty of any keyword.png',
      },
      {
        title: 'Obtenez un apercu concurrentiel a 360 degres de n\'importe quel mot-cle',
        description: 'Le tableau de bord des resultats affiche trois metriques essentielles cote a cote : la difficulte du mot-cle (par ex. 58 « Difficile »), le volume de recherche (par ex. 1 900/mois) et le CPC (par ex. 32,40 $). Cette vue a trois metriques vous donne une image complete en un coup d\'oeil. Un mot-cle avec un KD eleve mais aussi un CPC eleve peut tout de meme meriter d\'etre poursuivi avec une strategie de construction d\'autorite a long terme, car l\'intention commerciale justifie l\'effort. A l\'inverse, un mot-cle a faible KD avec un CPC nul peut generer du trafic mais pas de revenus. Utilisez ce tableau de bord pour prendre des decisions editoriales basees sur les donnees.',
        image: '/keyword difficulty checker/see the keywords 360 competitiveness with cpc.png',
      },
      {
        title: 'Comprenez ce que signifie reellement un score de difficulte',
        description: 'La jauge KD fournit une representation visuelle et intuitive de la difficulte de positionnement. Le score va de 0 a 100 avec un code couleur : vert (Facile, 0-20), jaune (Moyen, 21-40), orange (Difficile, 41-60) et rouge (Tres difficile, 61-100). Cette visualisation est particulierement utile lorsque vous presentez des recherches de mots-cles a des parties prenantes ou des clients qui ne travaillent pas quotidiennement dans le SEO et ont besoin d\'une reponse visuelle rapide a la question « pouvons-nous nous positionner sur ce terme ? ».',
        image: '/keyword difficulty checker/see the keywords actual difficulty.png',
      },
      {
        title: 'Validez la demande de recherche avant d\'investir dans du contenu',
        description: 'Le volume de recherche est le fondement de toutes les decisions de ciblage de mots-cles. Cette carte isole la metrique de volume de recherche mensuel, vous permettant de confirmer qu\'un nombre suffisant de personnes recherchent activement ce terme pour justifier la creation de contenu. Une erreur courante en SEO est de cibler des mots-cles avec un volume nul ou negligeable simplement parce qu\'ils semblent pertinents. Cette verification rapide empeche cela — et combinee avec le score KD, elle vous indique si l\'opportunite est a la fois reelle et realisable.',
        image: '/keyword difficulty checker/see the keywords actual search volume.png',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce que la difficulte des mots-cles et pourquoi la verifier avant de creer du contenu ?',
        answer: 'La difficulte des mots-cles (KD) est une metrique qui estime la difficulte de se classer dans les 10 premiers resultats de recherche organique pour un mot-cle specifique. Elle est generalement notee sur une echelle de 0 a 100. Verifier le KD avant de creer du contenu est essentiel car cela vous empeche d\'investir du temps et de l\'argent dans des pages qui n\'ont quasiment aucune chance de se positionner. Si les 10 premiers resultats pour un mot-cle sont tous des pages de sites comme Forbes, HubSpot et Wikipedia — avec des centaines de domaines referents chacun — un site nouveau ou d\'autorite moyenne aura du mal a rivaliser sans un investissement significatif en creation de liens.',
      },
      {
        question: 'En quoi la difficulte des mots-cles differe-t-elle de la concurrence des mots-cles ?',
        answer: 'La difficulte des mots-cles mesure la competitivite de la recherche organique — la difficulte de se classer dans les resultats non payes de Google. Elle est calculee sur la base de la force des backlinks des pages actuellement dans le top 10. La concurrence des mots-cles (parfois appelee densite concurrentielle) mesure la competitivite de la recherche payante — combien d\'annonceurs encherissent sur ce mot-cle dans Google Ads. Un mot-cle peut etre facile a classer en organique (KD faible) mais avoir une concurrence payante feroce (score de concurrence eleve), ou inversement.',
      },
      {
        question: 'Quel score KD devrais-je viser en tant que nouveau site web ?',
        answer: 'Les nouveaux sites web (moins d\'un an, avec moins de 50 domaines referents) devraient cibler des mots-cles avec un KD de 0 a 15. Ce sont generalement des requetes longue traine de 3 a 5 mots pour lesquelles les grands sites ne se sont pas specifiquement optimises. A mesure que votre autorite de domaine grandit grace a la creation de contenu reguliere et a la construction de liens, vous pouvez progressivement cibler des mots-cles avec des scores KD de 15 a 30, puis de 30 a 50. Tenter de se positionner sur des mots-cles au-dessus de KD 50 sans une autorite de domaine substantielle echouera presque toujours, quelle que soit la qualite du contenu.',
      },
      {
        question: 'Une page peut-elle se classer sur un mot-cle a haute difficulte sans backlinks ?',
        answer: 'C\'est extremement rare. La difficulte des mots-cles est largement determinee par le nombre et la qualite des backlinks pointant vers les pages les mieux classees. Il existe cependant des cas exceptionnels : si votre contenu offre un gain informationnel significativement superieur aux resultats existants (par exemple, une recherche originale, des donnees uniques ou un format novateur), et que votre domaine dispose d\'une autorite moderee, Google peut tester votre page dans des positions plus elevees. Cela dit, pour des scores KD superieurs a 40, les backlinks sont presque toujours un prerequis pour des classements durables.',
      },
      {
        question: 'Pourquoi le meme mot-cle a-t-il des scores de difficulte differents selon les outils ?',
        answer: 'Chaque outil SEO calcule la difficulte des mots-cles avec son propre algorithme proprietaire, son index d\'exploration et sa methodologie de ponderation. Ahrefs met l\'accent sur les domaines referents des 10 premiers resultats, Moz utilise ses propres metriques de Page Authority et Domain Authority, et SEMrush integre des fonctionnalites SERP supplementaires et des signaux de contenu. C\'est pourquoi un mot-cle peut afficher KD 45 sur un outil et KD 62 sur un autre. Les chiffres absolus sont moins importants que le classement relatif — utilisez le meme outil de maniere coherente pour que vos comparaisons de difficulte soient fiables et comparables.',
      },
      {
        question: 'Quel role le CPC joue-t-il dans l\'evaluation de la difficulte des mots-cles ?',
        answer: 'Le CPC (cout par clic) n\'affecte pas directement la difficulte de classement organique, mais il fournit un contexte essentiel. Un mot-cle avec un KD de 55 et un CPC de 0,50 $ suggere que bien que le classement soit difficile, le retour commercial est faible. Un mot-cle avec un KD de 55 et un CPC de 32,40 $ raconte une histoire differente : ce trafic est extremement precieux pour les entreprises, ce qui signifie que se classer en organique pour ce terme pourrait remplacer des depenses publicitaires significatives. Lorsque deux mots-cles ont des scores KD similaires, privilegiez celui avec le CPC le plus eleve — cela signale une intention d\'achat plus forte et un meilleur potentiel de retour sur investissement.',
      },
      {
        question: 'Comment verifier la difficulte des mots-cles pour un pays specifique ?',
        answer: 'Utilisez le menu deroulant Pays dans le formulaire de l\'outil pour selectionner votre marche cible. La difficulte des mots-cles peut varier considerablement entre les pays car le paysage concurrentiel differe. Un mot-cle qui affiche un KD de 60 aux Etats-Unis pourrait avoir un KD de 25 au Bresil ou un KD de 40 en Allemagne, simplement parce que moins de sites a forte autorite sont en concurrence sur ces marches. Verifiez toujours la difficulte pour le pays specifique ou se trouve votre audience, plutot que de vous fier par defaut aux donnees americaines.',
      },
      {
        question: 'Quelle est la relation entre la difficulte des mots-cles et le volume de recherche ?',
        answer: 'En general, les mots-cles a fort volume tendent a avoir une difficulte plus elevee car davantage de sites web rivalisent pour les termes de recherche populaires. Cependant, ce n\'est pas toujours le cas. Certains mots-cles a fort volume ont une difficulte etonnamment basse (ce sont des opportunites en or), et certains mots-cles a faible volume ont une difficulte elevee parce que la niche est dominee par des specialistes faisant autorite. La cible ideale de mots-cles a un volume de recherche superieur a votre seuil minimum et un score KD dans la plage competitive de votre domaine.',
      },
      {
        question: 'Devrais-je eviter tous les mots-cles a haute difficulte ?',
        answer: 'Non. Les mots-cles a haute difficulte devraient faire partie de votre strategie de contenu a long terme — ils representent vos objectifs ambitieux. L\'approche consiste a construire d\'abord une autorite thematique en se positionnant sur des mots-cles plus faciles dans le meme cluster, puis a utiliser le maillage interne et l\'autorite accumulee pour rivaliser sur les termes plus difficiles au fil du temps. Une fois que ces pages plus faciles se classent, elles renforcent l\'autorite thematique de votre domaine et ameliorent vos chances sur le terme principal competitif.',
      },
      {
        question: 'A quelle frequence devrais-je reverifier la difficulte des mots-cles ?',
        answer: 'Reverifiez la difficulte des mots-cles tous les trimestres pour vos mots-cles cibles principaux. Le paysage concurrentiel evolue a mesure que de nouveaux contenus sont publies, que des backlinks sont construits et que des mises a jour d\'algorithme sont deployees. Un mot-cle qui avait un KD de 45 il y a six mois pourrait maintenant etre a KD 35 si une page precedemment bien classee a perdu des backlinks ou a ete desindexee. Surveiller le KD dans le temps vous aide egalement a suivre si vos propres efforts SEO reduisent l\'ecart concurrentiel.',
      },
      {
        question: 'Que signifie le code couleur KD (vert, jaune, orange, rouge) ?',
        answer: 'La jauge a code couleur correspond a des plages de difficulte : Vert (0-20) signifie que le mot-cle est relativement facile a classer et convient aux sites nouveaux ou a faible autorite. Jaune (21-40) indique une concurrence moderee — vous aurez besoin d\'un contenu de qualite et de quelques backlinks. Orange (41-60) indique une concurrence elevee — un contenu solide, un SEO technique et une strategie active de creation de liens sont necessaires. Rouge (61-100) signale une concurrence tres elevee — seuls les domaines a forte autorite avec des profils de backlinks etendus tendent a occuper ces positions.',
      },
      {
        question: 'Puis-je verifier la difficulte de plusieurs mots-cles a la fois ?',
        answer: 'L\'outil gratuit verifie un mot-cle a la fois, ce qui est ideal pour des verifications rapides et la validation d\'idees de mots-cles individuels. Pour une analyse de difficulte de mots-cles par lot — verifier des dizaines ou des centaines de mots-cles simultanement — vous pouvez generalement exporter les mots-cles depuis l\'outil Generateur de mots-cles et les analyser dans un tableur, ou utiliser la colonne KD qui apparait deja dans le tableau de resultats du Generateur de mots-cles.',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: 'Verificateur d\'autorite de site web',
    title: 'Verificateur d\'autorite de site web gratuit',
    description: 'Verifiez gratuitement l\'autorite de recherche organique de n\'importe quel site web. Consultez le trafic organique estime, les mots-cles classes, les positions top 10 et la distribution des classements de mots-cles.',
    metaDescription: 'Verifiez gratuitement le score d\'autorite de n\'importe quel site web. Consultez la force du domaine, le trafic organique, les mots-cles classes et la distribution des positions SERP instantanement.',
    iconName: 'Globe',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Entrez un domaine',
    inputPlaceholder: 'ex. example.com',
    buttonText: 'Verifier l\'autorite',
    resultType: 'domain-authority',
    metricsToShow: ['domain_score', 'organic_traffic', 'ranked_keywords', 'top_10'],
    apiEndpoint: 'website-authority',
    freeResultLimit: 1,
    options: [],
    tableColumns: [
      { key: 'position', label: 'Plage de positions', sortable: false, type: 'text' },
      { key: 'keywords', label: 'Mots-cles', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Verifiez l\'autorite de domaine de n\'importe quel site web en quelques secondes',
        description: 'Chaque decision de link building, d\'analyse concurrentielle et d\'evaluation de partenariat commence par une question : quel est le niveau d\'autorite de ce domaine ? Entrez n\'importe quel domaine dans le verificateur, cliquez sur « Verifier l\'autorite » et obtenez instantanement une evaluation. Que vous evaluiez une opportunite de guest post, que vous qualifiiez un prospect de backlink ou que vous compariez votre domaine avec vos concurrents, c\'est le moyen le plus rapide de mesurer la force globale d\'un site web.',
        image: '/Website authority checker/Check the autority of any website.png',
      },
      {
        title: 'Comprenez la distribution des positions SERP sur l\'ensemble des mots-cles',
        description: 'Cette ventilation montre combien de mots-cles un site classe pour chaque plage de positions SERP : #1, #2-3, #4-10, #11-20, et ainsi de suite. Cette distribution raconte une histoire plus profonde qu\'un simple chiffre d\'autorite. Utilisez cela pour evaluer la trajectoire de croissance de votre propre site web et identifier les concurrents dont vous pouvez realistement contester les classements.',
        image: '/Website authority checker/See any websites keywords ranking.png',
      },
      {
        title: 'Evaluez le trafic et l\'envergure de classement d\'un domaine',
        description: 'Le tableau de bord des metriques affiche le trafic organique, le nombre total de mots-cles classes et les mots-cles en positions 1-10. Ces chiffres contextualisent le score d\'autorite avec des donnees de performance. Cette vue multi-metriques empeche les decisions basees sur une seule metrique et vous donne une image concurrentielle complete.',
        image: '/Website authority checker/See other details as traffick rankings positions.png',
      },
      {
        title: 'Consultez le score d\'autorite reel avec une echelle de gravite',
        description: 'La jauge de score de domaine affiche une note de 0 a 100 avec un code couleur de gravite et une etiquette (par ex. « 99 — Tres fort » pour hubspot.com). La jauge visuelle rend les scores d\'autorite immediatement interpretables. Utilisez cela pour definir des attentes realistes. Cette visualisation est egalement ideale pour les rapports clients et les presentations aux parties prenantes.',
        image: '/Website authority checker/See the actual authority score of your website. Score out of 100.png',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce que l\'autorite d\'un site web et comment est-elle mesuree ?',
        answer: 'L\'autorite d\'un site web (egalement appelee autorite de domaine ou force de domaine) est une metrique SEO qui estime la puissance globale de classement d\'un domaine basee sur la quantite et la qualite des backlinks qui y pointent. Elle est mesuree sur une echelle logarithmique de 0 a 100, ce qui signifie qu\'il devient exponentiellement plus difficile d\'augmenter votre score a mesure que vous progressez. Un score de 30 est relativement facile a atteindre avec un link building de base, tandis que passer de 70 a 80 necessite considerablement plus de backlinks de haute qualite que passer de 20 a 30.',
      },
      {
        question: 'Qu\'est-ce qu\'un bon score d\'autorite de site web ?',
        answer: 'L\'autorite est relative a votre paysage concurrentiel. Un Domain Score de 40 peut etre excellent dans un secteur de niche ou les concurrents sont en moyenne a 25, mais faible dans un espace ou les concurrents sont en moyenne a 70. En guise de reperes generaux : 0-20 est nouveau ou sous-developpe, 21-40 est en developpement (typique des petites et moyennes entreprises), 41-60 est etabli (competitif dans la plupart des niches), 61-80 est fort (competitif pour les mots-cles a forte valeur), et 81-100 est d\'elite (grandes marques, publications d\'actualites et plateformes a haute autorite).',
      },
      {
        question: 'L\'autorite du site web est-elle un facteur de classement Google ?',
        answer: 'Google a publiquement declare que l\' « autorite de domaine » n\'est pas un facteur de classement direct dans son algorithme. Cependant, la recherche montre systematiquement une forte correlation entre l\'autorite de domaine et les classements de mots-cles. La conclusion pratique est que, meme si Google n\'utilise peut-etre pas directement les scores d\'autorite tiers, les signaux sous-jacents (qualite des backlinks, nombre de domaines referents, diversite des liens) sont des facteurs de classement fondamentaux. Les scores d\'autorite sont le meilleur indicateur disponible pour ces signaux.',
      },
      {
        question: 'En quoi le Domain Score differe-t-il du Domain Authority (DA) de Moz ?',
        answer: 'Les deux metriques visent a mesurer la force d\'un domaine sur une echelle de 0 a 100, mais elles utilisent des methodes de calcul et des sources de donnees differentes. Le DA de Moz est base sur son propre index de liens et utilise un modele de machine learning pour predire la capacite de classement. D\'autres metriques de Domain Score utilisent leurs propres index d\'exploration et formules de calcul. Les scores ne sont pas interchangeables — un site peut afficher un DA de 45 sur Moz et un Domain Score de 52 sur un autre outil. Ce qui compte, c\'est la coherence : utilisez le meme outil pour toutes les comparaisons.',
      },
      {
        question: 'Comment ameliorer le score d\'autorite de mon site web ?',
        answer: 'La seule methode fiable pour augmenter l\'autorite de domaine est d\'acquerir des backlinks provenant de plus de domaines referents uniques — en particulier des domaines qui sont eux-memes autoritaires. Les strategies efficaces comprennent : la creation de contenu digne de liens (recherches originales, guides complets, outils gratuits), la publication d\'articles invites dans des publications sectorielles, les relations publiques numeriques et la sensibilisation mediatique, le broken link building, le link building sur les pages de ressources, et le developpement de relations avec des pairs de l\'industrie.',
      },
      {
        question: 'Que me disent les metriques de trafic organique et de mots-cles classes sur l\'autorite ?',
        answer: 'Ces metriques contextualisent le score d\'autorite avec des donnees de performance. Un score d\'autorite eleve avec un faible trafic organique suggere que le domaine a un profil de backlinks solide mais un contenu faible ou un ciblage de mots-cles inadequat. Un trafic eleve avec une autorite moderee indique un contenu solide qui surpasse son profil de liens. La metrique des mots-cles en positions 1-10 revele combien de mots-cles un domaine domine reellement en premiere page — c\'est la mesure ultime de l\'autorite concurrentielle en action.',
      },
      {
        question: 'Qu\'est-ce que le tableau de distribution des positions et comment le lire ?',
        answer: 'Le tableau de distribution des positions ventile le nombre de mots-cles pour lesquels un domaine se positionne a travers differentes positions SERP : #1, #2-3, #4-10, #11-20, #21-30, et ainsi de suite. Un site en bonne sante et en croissance montre une forme de pyramide — moins de mots-cles en position #1, davantage en #2-10, et progressivement plus dans les positions inferieures. Si la majorite des mots-cles se concentrent en positions #41-100, le site a de la visibilite mais manque de l\'autorite ou de la qualite de contenu necessaire pour atteindre la premiere page.',
      },
      {
        question: 'Puis-je utiliser l\'autorite du site web pour evaluer des prospects de backlinks ?',
        answer: 'Oui — c\'est l\'un des cas d\'utilisation les plus courants. Lors de la construction de backlinks, privilegiez les sites avec des scores de domaine superieurs a 30 et idealement superieurs a 50 pour un transfert maximal d\'equite de lien. Cependant, le score d\'autorite seul est insuffisant. Verifiez egalement si le site publie du contenu de qualite, presente un alignement thematique pertinent avec votre niche, recoit du trafic organique reel et dispose d\'un profil naturel de liens sortants.',
      },
      {
        question: 'Pourquoi certains sites web ont-ils une autorite elevee mais un faible trafic ?',
        answer: 'Cela se produit pour plusieurs raisons : le site a accumule des backlinks au fil des annees mais ne cree pas activement de contenu ciblant des mots-cles de recherche ; le contenu du site est obsolete et ne correspond plus a l\'intention de recherche actuelle ; le site a ete penalise par Google pour d\'autres problemes de qualite malgre des backlinks solides ; ou le site est dans une niche a faible volume ou meme les classements en premiere page ne generent pas un trafic massif.',
      },
      {
        question: 'A quelle frequence l\'autorite du site web change-t-elle ?',
        answer: 'Les scores d\'autorite fluctuent a mesure que les donnees de backlinks sous-jacentes sont reexplorees et mises a jour. Les nouveaux backlinks augmentent votre score ; les backlinks perdus le diminuent. Les changements majeurs prennent generalement 4 a 8 semaines pour se refleter dans les metriques d\'autorite. Des augmentations graduelles de 1 a 3 points par mois sont typiques pour les sites qui construisent activement des liens. Des baisses soudaines peuvent indiquer la perte de backlinks importants ou un recalcul par l\'outil de notation.',
      },
      {
        question: 'Quelle est la relation entre l\'autorite du site web et l\'equite de lien ?',
        answer: 'L\'autorite du site web est essentiellement un resume de l\'equite de lien accumulee. Chaque backlink provenant d\'un site externe transfere une certaine equite de lien a votre domaine, et le total de l\'equite accumulee se reflete dans votre score d\'autorite. Les domaines referents a plus haute autorite transferent davantage d\'equite de lien. Les pages sur les domaines a haute autorite heritent de l\'equite au niveau du domaine, ce qui leur donne une longueur d\'avance dans les classements.',
      },
      {
        question: 'Devrais-je me concentrer sur l\'augmentation de mon score d\'autorite ou de mon trafic organique ?',
        answer: 'Concentrez-vous sur le trafic organique — l\'autorite est un moyen pour atteindre cette fin, pas un objectif en soi. La strategie la plus efficace consiste a construire simultanement des liens (augmentant l\'autorite) et a creer du contenu cible sur les mots-cles (captant le trafic). Un score d\'autorite eleve sans contenu cible ne genere aucun trafic. Un excellent contenu sans autorite a du mal a se classer pour des mots-cles competitifs. Les deux fonctionnent en synergie.',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'SERP Checker',
    title: 'SERP Checker gratuit',
    description: 'Consultez les resultats de recherche Google pour n\'importe quel mot-cle. Decouvrez qui se positionne dans les 10 premieres positions organiques, avec les titres, URLs et domaines.',
    metaDescription: 'Analysez les meilleurs resultats Google pour n\'importe quel mot-cle dans n\'importe quel pays. Consultez les classements, domaines, URLs et resultats totaux pour planifier votre strategie SEO.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'keyword',
    inputLabel: 'Entrez un mot-cle',
    inputPlaceholder: 'ex. meilleurs outils de gestion de projet',
    buttonText: 'Verifier la SERP',
    resultType: 'serp-results',
    metricsToShow: ['total_results', 'organic_results'],
    apiEndpoint: 'serp-checker',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'Pays',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Etats-Unis' },
          { value: '2826', label: 'Royaume-Uni' },
          { value: '2276', label: 'Allemagne' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Espagne' },
          { value: '2380', label: 'Italie' },
          { value: '2076', label: 'Bresil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australie' },
          { value: '2356', label: 'Inde' },
          { value: '2392', label: 'Japon' },
          { value: '2528', label: 'Pays-Bas' },
          { value: '2792', label: 'Turquie' },
          { value: '2410', label: 'Coree du Sud' },
          { value: '2484', label: 'Mexique' },
        ],
      },
    ],
    tableColumns: [
      { key: 'position', label: '#', sortable: true, type: 'number' },
      { key: 'title', label: 'Titre', sortable: false, type: 'text' },
      { key: 'domain', label: 'Domaine', sortable: true, type: 'text' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Consultez la SERP Google pour n\'importe quel mot-cle dans n\'importe quel pays',
        description: 'Comprendre ce qui se classe actuellement est le fondement de toute campagne SEO. Entrez un mot-cle, selectionnez votre pays cible parmi plus de 15 options et consultez instantanement le paysage SERP en cours. Cela vous montre qui sont vos concurrents, quels formats de contenu dominent et a quel point l\'espace est encombre. Les professionnels du SEO international utilisent le selecteur de pays pour comparer les compositions SERP a travers les marches.',
        image: '/SERP Checker/Check the SERP for any keyword for any given country.png',
      },
      {
        title: 'Analysez les types de contenu et les domaines qui se classent',
        description: 'L\'affichage des resultats SERP montre le nombre total de resultats, le nombre de resultats organiques et les pages reellement classees avec leurs titres, URLs et descriptions. Cela vous permet d\'analyser les tendances de format de contenu : les meilleurs resultats sont-ils des articles de blog, des pages produit, des articles comparatifs ou des outils ? Cette intelligence vous indique exactement quel format de contenu Google recompense pour cette requete.',
        image: '/SERP Checker/Find the different types of content that rank on the SERP.png',
      },
      {
        title: 'Evaluez la competitivite de la SERP avant de cibler un mot-cle',
        description: 'Avant d\'investir des ressources dans un mot-cle, passez-le dans le SERP Checker pour voir contre qui vous seriez en concurrence. Si la SERP est dominee par des sites a forte autorite (Amazon, Wikipedia, sites gouvernementaux), ce mot-cle necessite peut-etre une approche differente. Si la SERP inclut des sites plus petits ou plus recents, il existe un chemin realiste vers le classement.',
        image: '/SERP Checker/See how competitive any keyword is on the SERP.png',
      },
      {
        title: 'Suivez la position de votre marque pour les mots-cles cibles',
        description: 'Le tableau detaille des resultats montre le titre, le domaine et l\'URL complete pour chaque position de classement. Faites defiler pour trouver si votre site (ou celui de votre concurrent) apparait dans les resultats. Utilisez cela pour verifier les donnees du suivi de classement, pour verifier les mots-cles critiques avant les reunions clients ou pour confirmer qu\'une page nouvellement publiee est entree dans la SERP.',
        image: '/SERP Checker/See your brands ranking for any keyword on the SERP.png',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'un SERP Checker et pourquoi en ai-je besoin ?',
        answer: 'Un SERP (Search Engine Results Page) Checker vous montre les resultats de recherche Google reels pour n\'importe quel mot-cle dans n\'importe quel pays, sans les biais de personnalisation de votre propre navigateur. Lorsque vous effectuez vous-meme une recherche sur Google, vos resultats sont influences par votre historique de recherche, votre localisation, votre appareil et votre compte Google connecte. Un SERP Checker fournit une vue neutre et impartiale des classements — les memes resultats qu\'un internaute effectuant sa premiere recherche verrait.',
      },
      {
        question: 'Comment le SERP Checker gere-t-il les resultats bases sur la localisation ?',
        answer: 'L\'outil utilise le selecteur de pays pour simuler des recherches depuis l\'index Google du pays selectionne (par exemple, google.com pour les Etats-Unis, google.co.uk pour le Royaume-Uni, google.de pour l\'Allemagne). La composition de la SERP peut varier considerablement entre les pays — differents domaines se classent, differents formats de contenu apparaissent, et meme le nombre de fonctionnalites SERP peut changer. Verifiez toujours la SERP pour votre pays cible, pas uniquement les resultats americains par defaut.',
      },
      {
        question: 'Que signifient « Resultats totaux » et « Resultats organiques » ?',
        answer: '« Resultats totaux » est le nombre que Google signale pour les pages correspondantes. C\'est un indicateur approximatif de l\'etendue du sujet, mais il n\'est pas fiable pour l\'analyse concurrentielle. « Resultats organiques » compte le nombre de resultats traditionnels sous forme de liens bleus qui apparaissent en premiere page. Si une SERP n\'affiche que 8 resultats organiques au lieu des 10 habituels, l\'espace restant est occupe par des fonctionnalites SERP comme les extraits en vedette, les cartes, les videos ou les boites « Autres questions posees ».',
      },
      {
        question: 'Comment utiliser les donnees SERP pour determiner le format de contenu ?',
        answer: 'Analysez les 10 premiers resultats et categorisez-les : sont-ce des guides pratiques, des listes, des pages d\'outils, des articles comparatifs, des pages produit ou des resultats video ? Si 7 resultats sur 10 sont des listes, Google a determine que les internautes veulent du contenu au format liste pour ce mot-cle. Creer un format different sera probablement moins performant. Adoptez le format dominant, puis differenciez-vous par la profondeur, la fraicheur, des donnees uniques ou une meilleure experience utilisateur.',
      },
      {
        question: 'Pourquoi les SERP different-elles entre ordinateur et mobile ?',
        answer: 'Google maintient des algorithmes de classement distincts pour la recherche sur ordinateur et sur mobile. Les SERP mobiles privilegient les pages optimisees pour le mobile, accordent plus de poids aux metriques de vitesse de page et affichent des fonctionnalites SERP differentes. Une page classee en position 3 sur ordinateur pourrait se retrouver en position 7 sur mobile si son experience mobile est mediocre. Verifiez toujours les deux versions si votre audience est repartie entre les appareils, et privilegiez l\'optimisation mobile puisque Google utilise l\'indexation mobile-first.',
      },
      {
        question: 'Que sont les fonctionnalites SERP et comment affectent-elles mon taux de clic ?',
        answer: 'Les fonctionnalites SERP sont des resultats non traditionnels incluant les extraits en vedette, les boites « Autres questions posees », les carrousels video, les packs d\'images, les panneaux de connaissances, les packs locaux et les resultats shopping. Chaque fonctionnalite qui apparait reduit les clics sur les resultats organiques — un phenomene appele « cannibalisation des fonctionnalites SERP ». Si une SERP est surchargee de fonctionnalites, meme un classement organique en position 1 peut recevoir moins de clics que prevu.',
      },
      {
        question: 'A quelle frequence les SERP Google changent-elles pour un mot-cle donne ?',
        answer: 'La volatilite de la SERP varie selon le type de mot-cle. Les mots-cles informationnels perennes peuvent avoir des SERP stables qui changent peu pendant des mois. Les mots-cles lies a l\'actualite et aux tendances peuvent connaitre un renouvellement complet de la SERP en quelques heures. Les mots-cles commerciaux et concurrentiels connaissent generalement des evolutions progressives a mesure que les pages gagnent ou perdent des backlinks et que les mises a jour d\'algorithme sont deployees. Verifier les SERP mensuellement pour vos mots-cles principaux aide a detecter les nouveaux concurrents.',
      },
      {
        question: 'Puis-je utiliser les donnees SERP pour une analyse des ecarts concurrentiels ?',
        answer: 'Absolument. Recherchez le meme mot-cle a travers plusieurs verifications SERP et notez quels domaines apparaissent systematiquement dans le top 10. Les domaines qui se classent pour de nombreux mots-cles que vous ciblez sont vos principaux concurrents SEO (qui peuvent differer de vos concurrents commerciaux). Analysez ce que ces pages classees ont en commun — longueur du contenu, structure, nombre de backlinks, fraicheur du contenu — et identifiez les lacunes ou votre contenu pourrait etre superieur.',
      },
      {
        question: 'Que signifie le fait que mon site apparaisse dans la SERP mais a une position basse ?',
        answer: 'Si votre page apparait aux positions 11-30 (pages 2-3 de Google), cela signifie que Google a reconnu votre contenu comme pertinent mais ne le considere pas encore suffisamment autoritaire ou complet pour la premiere page. C\'est en fait un signal positif — vous etes dans la zone de « distance de frappe ». Les ameliorations qui peuvent vous propulser en premiere page incluent l\'ajout de contenu plus complet, la construction de 3 a 5 backlinks de qualite, l\'amelioration de la vitesse de page et l\'ajout de liens internes de soutien.',
      },
      {
        question: 'Comment utiliser le SERP Checker pour trouver des opportunites de featured snippet ?',
        answer: 'Verifiez les SERP pour vos mots-cles cibles et recherchez les requetes ou un featured snippet apparait deja. Examinez ensuite si le contenu du snippet pourrait etre ameliore. Ciblez les mots-cles pour lesquels vous etes deja classe en positions 1-10, car Google extrait principalement les featured snippets des pages deja en premiere page. Creez des reponses plus completes formatees specifiquement pour l\'extraction de snippets en utilisant des titres clairs, des listes numerotees, des tableaux ou des reponses concises en paragraphes.',
      },
      {
        question: 'Quel role la structure d\'URL joue-t-elle dans la performance SERP ?',
        answer: 'Le SERP Checker montre les URLs completes pour chaque resultat classe, ce qui revele les tendances en matiere de structure d\'URL. Les URLs propres et descriptives qui incluent le mot-cle cible tendent a apparaitre plus frequemment dans les positions superieures. Les URLs longues, chargees de parametres ou contenant des chaines de caracteres aleatoires sont moins performantes. Analysez les structures d\'URL des pages les mieux classees — si tous les premiers resultats utilisent des slugs courts et riches en mots-cles, c\'est un signal pour adopter ce meme schema.',
      },
      {
        question: 'Les donnees du SERP Checker peuvent-elles aider les campagnes PPC ?',
        answer: 'Oui. Les donnees SERP revelent le paysage concurrentiel organique, ce qui informe la strategie de recherche payante : si les resultats organiques sont domines par des concurrents massifs, le PPC pourrait etre un chemin plus rapide vers la visibilite. Les formats de contenu dans les resultats organiques indiquent l\'intention de l\'utilisateur — adaptez la page de destination de votre annonce a cette intention pour obtenir de meilleurs Quality Scores. Si peu d\'annonces apparaissent dans la SERP, il y a une faible concurrence payante et potentiellement des CPC abordables.',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: 'Verificateur de classement de mots-cles',
    title: 'Verificateur de classement de mots-cles gratuit',
    description: 'Verifiez pour quels mots-cles n\'importe quel site web se classe dans Google. Consultez les positions de classement, les volumes de recherche et le trafic estime pour chaque mot-cle.',
    metaDescription: 'Verifiez gratuitement les classements de mots-cles de votre site web dans n\'importe quel pays. Consultez les positions, le trafic, le CPC et la performance du contenu sur toutes vos pages.',
    iconName: 'BarChart3',
    category: 'serp-ranking',
    inputType: 'keyword-url',
    inputLabel: 'Entrez un domaine',
    inputPlaceholder: 'ex. example.com',
    secondaryInputLabel: 'Filtrer par mot-cle (optionnel)',
    secondaryInputPlaceholder: 'ex. marketing',
    buttonText: 'Verifier les classements',
    resultType: 'rank-position',
    metricsToShow: ['total_keywords', 'top_3', 'top_10', 'top_50'],
    apiEndpoint: 'keyword-rank-checker',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Pays',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Etats-Unis' },
          { value: '2826', label: 'Royaume-Uni' },
          { value: '2276', label: 'Allemagne' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Espagne' },
          { value: '2380', label: 'Italie' },
          { value: '2076', label: 'Bresil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australie' },
          { value: '2356', label: 'Inde' },
          { value: '2392', label: 'Japon' },
          { value: '2528', label: 'Pays-Bas' },
          { value: '2792', label: 'Turquie' },
          { value: '2410', label: 'Coree du Sud' },
          { value: '2484', label: 'Mexique' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Mot-cle', sortable: true, type: 'text' },
      { key: 'position', label: 'Position', sortable: true, type: 'number' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'traffic', label: 'Trafic', sortable: true, type: 'number' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Verifiez les classements de votre site web dans la SERP de n\'importe quel pays',
        description: 'Savoir ou vous vous classez est le tableau de bord du SEO. Entrez votre domaine, filtrez optionnellement par un mot-cle specifique, selectionnez votre pays et voyez exactement ou votre site apparait dans les resultats Google. Le filtre par mot-cle est particulierement puissant — au lieu de passer en revue des centaines de classements, vous pouvez verifier instantanement un terme cible specifique. Les marques internationales et les agences multi-marches utilisent le selecteur de pays pour suivre les classements separement pour chaque marche ou elles operent.',
        image: '/Rank checker/Check the rank of your website on any countrys SERP.png',
      },
      {
        title: 'Espionnez les classements des concurrents a travers les pays',
        description: 'Entrez le domaine de n\'importe quel concurrent et selectionnez parmi plus de 15 pays pour voir leur profil de classement complet. Cela revele quels mots-cles ils gagnent, quels marches ils priorisent et ou leur strategie SEO est la plus forte. Les agences utilisent cela lors des audits concurrentiels et de l\'integration de nouveaux clients pour cartographier le paysage concurrentiel.',
        image: '/Rank checker/Check how your competitors rank on Google.png',
      },
      {
        title: 'Analysez la performance du contenu au niveau des mots-cles',
        description: 'Le tableau de resultats affiche chaque mot-cle classe avec sa position, son volume de recherche, son CPC, son trafic estime et l\'URL specifique qui se classe. Cette vue au niveau de la page vous permet d\'identifier votre contenu le plus performant et celui qui sous-performe.',
        image: '/Rank checker/See your websites content performance.png',
      },
      {
        title: 'Comprenez la competitivite globale de classement de votre site',
        description: 'Le tableau de bord recapitulatif ventile les mots-cles totaux, le top 3, le top 10 et le top 50. Cette distribution vous montre immediatement ou se situe votre site. Suivez ces chiffres mensuellement pour mesurer si votre strategie SEO fait progresser les mots-cles vers le haut dans les positions SERP.',
        image: '/Rank checker/Understand your sites ranking and competitivement across keywords.png',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'un verificateur de classement de mots-cles et en quoi differe-t-il d\'un SERP Checker ?',
        answer: 'Un verificateur de classement de mots-cles vous indique ou VOTRE site web specifique (ou n\'importe quel domaine) se classe pour les mots-cles. Vous saisissez un domaine et il vous renvoie les mots-cles et les positions de ce site. Un SERP Checker vous montre TOUS les sites web qui se classent pour un mot-cle specifique. Pensez-y de cette maniere : un verificateur de classement repond a « pour quels mots-cles mon site se classe-t-il ? », tandis qu\'un SERP Checker repond a « qui se classe pour ce mot-cle ? ». Les deux outils sont essentiels.',
      },
      {
        question: 'Quelle est la precision des resultats du verificateur de classement ?',
        answer: 'Les resultats du verificateur de classement refletent les classements organiques de Google au moment de la requete, bases sur le pays selectionne et les parametres de recherche standard (non personnalises). Les resultats peuvent differer legerement de ce que vous voyez lorsque vous effectuez une recherche Google directement, car votre navigateur personnalise les resultats en fonction de votre historique de recherche, de votre localisation et de votre compte connecte. Utilisez toujours un outil de verification de classement plutot que des recherches Google manuelles pour le suivi des classements.',
      },
      {
        question: 'Que signifie la ventilation « Top 3 », « Top 10 » et « Top 50 » ?',
        answer: 'Les mots-cles « Top 3 » sont vos positions les plus fortes (les positions 1 a 3 captent environ 60 % de tous les clics organiques pour une requete). « Top 10 » signifie la premiere page de Google, ou circule la quasi-totalite du trafic organique. « Top 50 » couvre les pages 1 a 5, qui representent votre univers visible de mots-cles. Les mots-cles en dehors du top 50 generent rarement un trafic mesurable.',
      },
      {
        question: 'Comment deplacer des mots-cles de la page 2 a la page 1 de Google ?',
        answer: 'Les mots-cles classes en positions 11-20 sont vos cibles d\'optimisation a plus haute priorite. Les tactiques incluent : mettre a jour et enrichir le contenu pour mieux correspondre a l\'intention de recherche, construire 3 a 5 backlinks de qualite vers la page specifique, ameliorer le title tag et la meta description pour augmenter le taux de clics, ajouter des liens internes depuis vos pages a plus forte autorite, ameliorer la vitesse de page et les Core Web Vitals, et ajouter du balisage de donnees structurees.',
      },
      {
        question: 'A quelle frequence devrais-je verifier mes classements de mots-cles ?',
        answer: 'Verifiez vos mots-cles cibles principaux (les 10 a 20 mots-cles les plus importants pour votre activite) chaque semaine. Verifiez votre portefeuille de mots-cles plus large chaque mois. Evitez les verifications quotidiennes — les classements fluctuent naturellement de 1 a 3 positions d\'un jour a l\'autre en raison des ajustements de l\'algorithme de Google, des tests et des rafraichissements de l\'index.',
      },
      {
        question: 'Pourquoi mes classements different-ils entre les pays ?',
        answer: 'Google maintient des index de recherche et des algorithmes de classement distincts pour chaque pays. Les facteurs qui influencent les classements specifiques a chaque pays incluent la langue et la localisation du contenu, l\'emplacement du serveur et la presence CDN, les backlinks specifiques au pays, les signaux commerciaux locaux, l\'implementation des balises hreflang, ainsi que le comportement de recherche et la concurrence specifiques au pays.',
      },
      {
        question: 'Qu\'estime la colonne Trafic et quelle est sa fiabilite ?',
        answer: 'La colonne Trafic estime les visites organiques mensuelles qu\'un mot-cle envoie vers votre URL en fonction de sa position de classement et du volume de recherche du mot-cle. Elle utilise des modeles de taux de clic — la position #1 capte environ 27-31 % des clics, la #2 capte 15-17 %, la #3 capte 10-12 %, et ainsi de suite. Ce sont des estimations, pas des chiffres exacts, mais elles sont directionnellement precises.',
      },
      {
        question: 'Comment utiliser les donnees de classement pour identifier des opportunites d\'optimisation du contenu ?',
        answer: 'Recherchez les pages classees aux positions 4-15 pour des mots-cles a fort volume — ce sont vos cibles d\'optimisation au meilleur retour sur investissement. Ensuite, analysez pourquoi elles ne sont pas mieux classees : le contenu est-il moins complet que celui des concurrents ? La page a-t-elle moins de backlinks ? Le title tag est-il moins convaincant ? Comparez votre page avec les 3 premiers resultats actuels pour chaque mot-cle.',
      },
      {
        question: 'Que me disent les donnees CPC dans un verificateur de classement sur mes classements ?',
        answer: 'Le CPC revele la valeur commerciale de chaque mot-cle pour lequel vous etes classe. Si vous etes classe #3 pour un mot-cle avec un CPC de 25 $, cette position vous economise des depenses publicitaires significatives — vous obtenez ces clics gratuitement alors qu\'ils couteraient 25 $ chacun via Google Ads. Multipliez le trafic estime par le CPC pour calculer la « valeur du trafic » de chaque classement.',
      },
      {
        question: 'Puis-je filtrer les resultats de classement par mots-cles specifiques ?',
        answer: 'Oui. Le champ optionnel « Filtrer par mot-cle » vous permet de saisir un mot-cle ou une expression specifique pour affiner les resultats. Cela est utile lorsque vous souhaitez verifier vos classements pour un cluster thematique particulier plutot que de visualiser tous les mots-cles a la fois. Cette capacite de filtrage rend l\'outil pratique meme pour les sites qui se classent pour des centaines ou des milliers de mots-cles.',
      },
      {
        question: 'Comment suivre les ameliorations de classement dans le temps ?',
        answer: 'Exportez vos donnees de classement en CSV a chaque verification et comparez les changements de position mois apres mois. Creez un tableur simple qui suit vos 20 principaux mots-cles, leurs positions chaque mois et la direction du changement. Sur 3 a 6 mois, vous devriez observer une tendance claire : des mots-cles progressant graduellement vers les positions 1-10 indiquent une strategie SEO qui fonctionne.',
      },
      {
        question: 'Quelle est la difference entre la colonne URL du verificateur de classement et le SERP Checker ?',
        answer: 'La colonne URL du verificateur de classement montre quelle page specifique de VOTRE domaine se classe pour chaque mot-cle. C\'est un atout puissant pour la gestion SEO interne : vous pouvez verifier si la bonne page se classe, identifier la cannibalisation de mots-cles (deux de vos pages en competition pour le meme mot-cle) et decouvrir des pages qui se classent pour des termes inattendus. Le SERP Checker montre tous les domaines qui se classent pour un mot-cle.',
      },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'Outil de mots-cles YouTube',
    title: 'Outil de mots-cles YouTube gratuit',
    description: 'Trouvez les meilleurs mots-cles pour vos videos YouTube. Obtenez des donnees de volume de recherche, de difficulte et de CPC pour optimiser vos titres, descriptions et tags video.',
    metaDescription: 'Trouvez des idees de mots-cles YouTube pour n\'importe quelle niche. Consultez le volume de recherche, la difficulte et le CPC pour planifier du contenu video qui sera decouvert et classe.',
    iconName: 'Youtube',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Entrez un mot-cle pour YouTube',
    inputPlaceholder: 'ex. comment monter des videos',
    buttonText: 'Trouver des mots-cles',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'youtube-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Pays',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Etats-Unis' },
          { value: '2826', label: 'Royaume-Uni' },
          { value: '2276', label: 'Allemagne' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Espagne' },
          { value: '2380', label: 'Italie' },
          { value: '2076', label: 'Bresil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australie' },
          { value: '2356', label: 'Inde' },
          { value: '2392', label: 'Japon' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Mot-cle', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Concurrence', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Recherchez des sujets video que les gens recherchent reellement',
        description: 'YouTube est le deuxieme plus grand moteur de recherche au monde, et la plupart des createurs echouent parce qu\'ils produisent des videos que personne ne recherche. Entrez un mot-cle comme « comment monter une video », selectionnez votre pays cible et voyez instantanement ce que les utilisateurs YouTube saisissent dans la barre de recherche. Cela remplace les suppositions par des donnees concretes — au lieu d\'esperer qu\'un sujet de video performe bien, vous savez a l\'avance qu\'une demande reelle existe. Les createurs de contenu, les specialistes du marketing video et les gestionnaires de chaines YouTube utilisent cet outil comme point de depart pour chaque calendrier editorial.',
        image: '/Youtube keyword tool/Research and plan your youtube content better.png',
      },
      {
        title: 'Evaluez le paysage concurrentiel des mots-cles YouTube',
        description: 'Le tableau de resultats affiche chaque mot-cle avec son volume specifique YouTube, sa difficulte de mot-cle (KD), son CPC et son score de concurrence. Cela vous permet d\'identifier quels sujets video sont realisables pour la taille de votre chaine. Une petite chaine avec moins de 1 000 abonnes devrait cibler des mots-cles avec un KD inferieur a 20, tandis que les chaines etablies peuvent concourir sur des termes plus difficiles. La colonne CPC revele egalement quels mots-cles attirent des depenses publicitaires — utile si votre strategie de monetisation repose sur les revenus publicitaires YouTube, car les mots-cles a CPC eleve generent generalement de meilleurs RPMs.',
        image: '/Youtube keyword tool/See how competitive your youtube content ideas are.png',
      },
      {
        title: 'Evaluez la viabilite globale d\'un sujet avant de vous engager dans une serie de contenu',
        description: 'Le tableau de bord recapitulatif affiche le nombre total de mots-cles (50), le volume moyen et la difficulte moyenne pour le cluster de mots-cles autour de votre terme de base. Cela vous montre si un sujet a suffisamment de profondeur et de demande pour soutenir une serie de videos. Si le volume moyen est solide et la difficulte moyenne est geerable, vous avez le feu vert pour planifier une serie de contenu multi-videos autour du sujet. Si les chiffres sont faibles, pivotez avant d\'investir du temps de production. La production video est couteuse — cette verification de 10 secondes peut vous faire economiser des heures d\'efforts inutiles.',
        image: '/Youtube keyword tool/See the search volume of your content ideas on youtube.png',
      },
      {
        title: 'Integrez la pertinence semantique dans les titres, tags et descriptions video',
        description: 'L\'algorithme de YouTube, comme celui de Google, recompense le contenu qui demontre une profondeur thematique. Cette vue montre les mots-cles connexes et leurs volumes de recherche, qui devraient etre integres dans le titre, la description, les tags et meme les dialogues parles de votre video (YouTube transcrit et indexe l\'audio). Par exemple, si votre mot-cle principal est « comment monter une video », des termes associes comme « createur de clips video », « logiciel de montage video inverse » et « ratio d\'aspect video YouTube » devraient apparaitre naturellement dans vos metadonnees. Cette optimisation semantique ameliore considerablement la decouverte dans les recherches connexes.',
        image: '/Youtube keyword tool/Use related keywords to make your youtube video semantically relevant.png',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi ai-je besoin d\'un outil de mots-cles specifique a YouTube plutot qu\'un outil de mots-cles classique ?',
        answer: 'YouTube et Google sont des moteurs de recherche distincts avec des algorithmes, des comportements d\'utilisateurs et des modeles de recherche completement differents. Un mot-cle qui recoit 10 000 recherches sur Google pourrait n\'en recevoir que 200 sur YouTube, et vice versa. Les outils de mots-cles YouTube extraient les donnees specifiquement de l\'ecosysteme de recherche de YouTube, vous fournissant des estimations de volume precises pour la plateforme ou vos videos doivent reellement se classer. Utiliser les donnees de mots-cles Google pour l\'optimisation YouTube, c\'est comme utiliser une carte routiere pour naviguer sur l\'ocean — le terrain est fondamentalement different.',
      },
      {
        question: 'En quoi la difficulte des mots-cles YouTube differe-t-elle de la difficulte des mots-cles Google ?',
        answer: 'Le KD YouTube mesure la concurrence parmi les videos, pas les pages web. Les facteurs qui influencent le classement YouTube incluent le temps de visionnage, le taux de clic sur les miniatures, l\'engagement (likes, commentaires, partages), l\'autorite de la chaine et l\'optimisation des metadonnees video. Alors que les backlinks comptent davantage pour Google, le temps de visionnage et l\'engagement sont plus importants pour YouTube. Un mot-cle avec un KD de 20 sur YouTube signifie que vous pouvez etre competitif avec une video bien produite et bien optimisee, meme si votre chaine est relativement nouvelle.',
      },
      {
        question: 'Comment trouver des mots-cles YouTube a faible concurrence pour une nouvelle chaine ?',
        answer: 'Filtrez les resultats pour les mots-cles avec un KD entre 0 et 15 et un volume de recherche superieur a 50. Concentrez-vous sur les requetes longue traine (3 a 6 mots) qui abordent des questions specifiques ou des tutoriels, comme « comment monter une video YouTube sur iPhone » plutot que « montage video ». Les nouvelles chaines devraient aussi rechercher les mots-cles de type « question » (commencant par comment, quel, pourquoi, peut-on) car ils ont tendance a avoir moins de concurrence et un engagement plus eleve, puisque les spectateurs regardent plus longtemps quand ils ont reellement besoin de la reponse.',
      },
      {
        question: 'Que signifie le CPC pour les mots-cles YouTube ?',
        answer: 'Le CPC represente le montant que les annonceurs paient par clic pour les publicites affichees sur ce mot-cle. Pour les createurs YouTube, les mots-cles a CPC eleve se traduisent par des revenus publicitaires plus importants pour mille vues (RPM). Si vous etes monetise via le Programme Partenaire YouTube, cibler des mots-cles avec des CPC superieurs a 3-5 $ signifie que les annonceurs sont prets a payer davantage pour votre audience, ce qui augmente directement vos revenus. C\'est particulierement pertinent pour les chaines dans les niches finance, logiciel, assurance et B2B, ou les CPC peuvent depasser 20 $.',
      },
      {
        question: 'Comment utiliser les mots-cles YouTube pour optimiser les metadonnees de ma video ?',
        answer: 'Placez votre mot-cle principal dans le titre de la video (de preference au debut), dans la premiere phrase de la description et comme premier tag. Utilisez les mots-cles secondaires de la liste de mots-cles connexes comme tags supplementaires, dans le corps de la description et comme titres de chapitres si vous utilisez des horodatages. YouTube transcrit egalement votre audio et l\'utilise pour le classement, donc prononcez votre mot-cle principal dans les 30 premieres secondes de la video. Ce placement multi-points signale a YouTube exactement le sujet de votre video.',
      },
      {
        question: 'Cet outil peut-il m\'aider a trouver des sujets tendance sur YouTube ?',
        answer: 'L\'outil affiche les volumes de recherche mensuels moyens, qui refletent un interet soutenu plutot que des pics viraux. Pour les sujets tendance, combinez cet outil avec YouTube Trending, Google Trends (filtre sur la recherche YouTube) et les outils de veille sociale. La meilleure strategie combine la conscience des tendances avec les donnees de mots-cles : quand vous repérez un sujet tendance, verifiez-le dans l\'outil de mots-cles YouTube pour voir s\'il existe aussi une demande de recherche. Les sujets qui combinent a la fois l\'elan de la tendance et le volume de recherche sont les cibles a plus fort potentiel.',
      },
      {
        question: 'Quel est un bon seuil de volume de recherche pour les mots-cles YouTube ?',
        answer: 'Cela depend de votre niche. Dans les niches larges comme le gaming, la cuisine ou le fitness, ciblez des mots-cles avec plus de 500 recherches YouTube mensuelles. Dans les niches specialisees comme le SaaS B2B, la data science ou les loisirs de niche, des mots-cles avec 50 a 200 recherches peuvent generer un trafic significatif car l\'audience est plus ciblee et plus precieuse. La metrique cle n\'est pas seulement le volume mais aussi la concurrence — un mot-cle avec 100 recherches et un KD de 5 est souvent plus precieux qu\'un mot-cle avec 5 000 recherches et un KD de 70, surtout pour les chaines en croissance.',
      },
      {
        question: 'Comment planifier une serie de contenu YouTube avec les donnees de mots-cles ?',
        answer: 'Commencez par entrer un mot-cle de sujet large et examinez les 50 resultats. Regroupez les mots-cles connexes en clusters (par exemple, tutoriels debutants, techniques avancees, avis d\'outils, comparatifs). Chaque cluster devient une playlist, et chaque mot-cle au sein du cluster devient une video individuelle. Cette approche en « hub et rayons » reflete la facon dont Google recompense l\'autorite thematique — YouTube stimule de la meme maniere les chaines qui demonstrent une expertise approfondie dans un sujet a travers des playlists interconnectees et une publication reguliere sur des sujets connexes.',
      },
      {
        question: 'Devrais-je cibler les memes mots-cles sur YouTube et Google simultanement ?',
        answer: 'Oui — c\'est ce qu\'on appelle la strategie de double presence video SEO. De nombreuses SERPs Google incluent desormais un carrousel video, et les videos YouTube apparaissent frequemment dans ces carrousels. En ciblant le meme mot-cle sur les deux plateformes, vous pouvez capter du trafic a la fois du carrousel video de Google ET de la recherche native YouTube. Privilegiez les mots-cles pour lesquels Google affiche deja des resultats video. Les requetes de type tutoriel, comment faire et avis sont les plus susceptibles de declencher des carrousels video.',
      },
      {
        question: 'Comment fonctionne le score de concurrence pour les mots-cles YouTube ?',
        answer: 'Le score de concurrence (0-100) reflete le nombre d\'annonceurs qui encherissent sur ce mot-cle pour des placements publicitaires YouTube. Un score de 100 signifie une concurrence maximale entre annonceurs ; 0 signifie qu\'aucun annonceur ne cible ce mot-cle. Bien que cela affecte principalement les revenus publicitaires plutot que le classement organique, un score de concurrence eleve indique un interet commercial pour votre audience. Les createurs peuvent tirer parti de cela en approchant des marques dans les niches a forte concurrence pour des accords de sponsoring, puisque ces marques depensent deja de l\'argent pour atteindre cette audience via la publicite.',
      },
      {
        question: 'Combien de mots-cles devrais-je utiliser dans une seule video YouTube ?',
        answer: 'Concentrez-vous sur un mot-cle principal et 5 a 10 mots-cles secondaires par video. Votre mot-cle principal definit le titre et le sujet central. Les mots-cles secondaires apparaissent dans la description, les tags et les titres de chapitres. Le bourrage de mots-cles nuit a la fois a l\'experience du spectateur et a l\'algorithme de YouTube, qui detecte les repetitions non naturelles. La liste de mots-cles connexes de cet outil vous fournit l\'ensemble parfait de termes secondaires qui sont semantiquement lies, garantissant que vos metadonnees se lisent naturellement tout en maximisant la visibilite.',
      },
      {
        question: 'Puis-je utiliser cet outil pour la recherche de mots-cles YouTube Shorts ?',
        answer: 'Oui. Les YouTube Shorts apparaissent dans la recherche YouTube, dans le flux Shorts et de plus en plus dans la recherche Google. Les memes donnees de mots-cles s\'appliquent — si un terme a un volume de recherche eleve sur YouTube, creer un Short ciblant ce terme peut capter une exposition supplementaire. Les Shorts fonctionnent particulierement bien pour les requetes a fort volume et faible profondeur comme « comment [tache rapide] » ou « avis [produit] en 60 secondes ». Utilisez l\'outil de mots-cles pour trouver ces sujets courts, puis creez des Shorts pour des gains rapides tout en reservant les videos longues pour les mots-cles plus approfondis et a difficulte plus elevee.',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: 'Outil de mots-cles Amazon',
    title: 'Outil de mots-cles Amazon gratuit',
    description: 'Recherchez des mots-cles pour les fiches produit Amazon. Trouvez des termes a fort volume de recherche avec des donnees de difficulte et de CPC pour optimiser vos titres et descriptions de produits.',
    metaDescription: 'Recherchez gratuitement des mots-cles produit Amazon. Consultez le volume de recherche, la difficulte et le CPC pour optimiser vos fiches et decouvrir des niches produit a forte demande.',
    iconName: 'ShoppingBag',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Entrez un mot-cle produit',
    inputPlaceholder: 'ex. ecouteurs sans fil',
    buttonText: 'Trouver des mots-cles',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'amazon-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Pays',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Etats-Unis' },
          { value: '2826', label: 'Royaume-Uni' },
          { value: '2276', label: 'Allemagne' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Espagne' },
          { value: '2380', label: 'Italie' },
          { value: '2076', label: 'Bresil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australie' },
          { value: '2356', label: 'Inde' },
          { value: '2392', label: 'Japon' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Mot-cle', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Concurrence', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Decouvrez les termes de recherche Amazon a forte intention d\'achat pour votre niche produit',
        description: 'Entrez un mot-cle produit — comme « tapis de yoga » — et l\'outil renvoie jusqu\'a 50 termes de recherche produit Amazon associes. Contrairement aux mots-cles Google qui incluent des requetes informationnelles, il s\'agit exclusivement de mots-cles a intention d\'achat que les vrais acheteurs Amazon saisissent lorsqu\'ils sont prets a acheter. Utilisez ces termes dans le titre de votre produit, les puces, les termes de recherche backend et les campagnes PPC pour capter une visibilite maximale sur la place de marche Amazon.',
        image: '/Amazon keyword tool/Check how viable your ideas are on amazon.png',
      },
      {
        title: 'Analysez la densite concurrentielle a travers les mots-cles produit',
        description: 'Le tableau de resultats affiche chaque mot-cle produit avec son volume, son KD, son CPC et son score de concurrence. Les mots-cles principaux peuvent afficher des volumes de 450 000 avec des scores de concurrence de 100 — ce qui signifie que c\'est un marche extremement sature. Mais en creusant plus profondement, on decouvre des sous-niches moins concurrentielles ou les nouveaux vendeurs peuvent se positionner. Ce tableau est essentiel pour les vendeurs Amazon FBA et les marques de marque propre qui cherchent a identifier des niches produit avec une concurrence geerable.',
        image: '/Amazon keyword tool/See how competitive a business idea is on Amazon.png',
      },
      {
        title: 'Quantifiez la demande d\'une categorie de produits en un coup d\'oeil',
        description: 'Le tableau de bord recapitulatif affiche le nombre total de mots-cles (50), le volume moyen et la difficulte moyenne pour votre categorie de produits. Les vendeurs Amazon utilisent cet apercu pour comparer les tailles de categories — si vous hesitez entre entrer sur un marche ou un autre, ce tableau de bord vous donne la comparaison de la demande en quelques secondes. La difficulte moyenne vous indique egalement si de nombreux mots-cles produit longue traine restent accessibles.',
        image: '/Amazon keyword tool/See how popular and how many people search for a given idea on amazon.png',
      },
      {
        title: 'Decouvrez les mots-cles backend et les termes produit longue traine',
        description: 'L\'algorithme A10 d\'Amazon classe les produits en partie sur la pertinence des mots-cles dans les titres, les puces, les descriptions et les termes de recherche backend. Cette vue montre la liste complete des mots-cles produit associes et leurs volumes — des termes principaux aux variations longue traine. Ces variations longue traine devraient etre placees dans le champ des termes de recherche backend de votre fiche produit, dans les puces et dans le contenu A+ pour maximiser la visibilite de votre fiche sur le plus large eventail possible de requetes des acheteurs.',
        image: '/Amazon keyword tool/See other sematically relevant content ideas for your main ideas on amazon.png',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi les mots-cles Amazon different-ils des mots-cles Google ?',
        answer: 'Amazon et Google servent des intentions d\'utilisateur fondamentalement differentes. Les internautes sur Google peuvent etre en phase de recherche, de comparaison ou simplement de navigation. Les utilisateurs d\'Amazon sont presque toujours en mode achat — ils ont une intention d\'achat. Cela signifie que les mots-cles Amazon sont axes sur les produits (noms de marque, specifications de produit, cas d\'utilisation) tandis que les mots-cles Google couvrent des intentions informationnelles, de navigation et transactionnelles.',
      },
      {
        question: 'Comment fonctionne la difficulte des mots-cles pour les fiches produit Amazon ?',
        answer: 'La difficulte des mots-cles Amazon estime a quel point il est competitif de classer votre fiche produit en premiere page d\'Amazon pour ce terme de recherche. Les facteurs incluent le nombre de vendeurs etablis ciblant le mot-cle, leur nombre d\'avis, la velocite des ventes, la qualite d\'optimisation de la fiche et les depenses publicitaires. Un KD de 0-10 signifie qu\'une nouvelle fiche peut apparaitre rapidement en premiere page avec une bonne optimisation. Un KD superieur a 40 necessite generalement des prix competitifs, des campagnes PPC, des avis solides et des fiches hautement optimisees.',
      },
      {
        question: 'Quel est un bon volume de recherche pour un mot-cle produit Amazon ?',
        answer: 'Pour les vendeurs de marque propre, ciblez des mots-cles principaux avec au moins 1 000 recherches mensuelles pour assurer une demande suffisante. Les termes de tete a fort volume (100 000+) sont extremement competitifs et generalement domines par les grandes marques. Les mots-cles mid-tail (1 000-10 000) offrent souvent le meilleur equilibre entre demande et accessibilite. Les mots-cles longue traine (moins de 1 000) fonctionnent bien comme termes de recherche backend et dans les campagnes PPC ou l\'intention d\'achat specifique conduit a des taux de conversion plus eleves.',
      },
      {
        question: 'Comment utiliser les donnees de mots-cles Amazon pour optimiser ma fiche produit ?',
        answer: 'Suivez la hierarchie de placement de mots-cles d\'Amazon : (1) Placez votre mot-cle principal dans le titre du produit, (2) Mettez vos 5 meilleurs mots-cles secondaires dans les puces, (3) Utilisez les mots-cles restants dans la description du produit et le contenu A+, (4) Chargez tous les termes pertinents restants dans les termes de recherche backend (jusqu\'a 250 octets). Ne repetez jamais les mots-cles dans ces champs — l\'algorithme d\'Amazon compte chaque mot-cle une seule fois, quel que soit le nombre de fois ou il apparait.',
      },
      {
        question: 'Puis-je utiliser cet outil pour la recherche de campagnes Amazon PPC ?',
        answer: 'Absolument. La colonne CPC montre ce que les annonceurs paient pour les clics sur les annonces Sponsored Product pour chaque mot-cle. Utilisez ces donnees pour estimer votre budget publicitaire, identifier les mots-cles ou un classement organique vous ferait economiser des depenses publicitaires significatives, et decouvrir des mots-cles a faible CPC ou vous pouvez lancer des campagnes PPC rentables.',
      },
      {
        question: 'Comment trouver des niches produit rentables avec cet outil ?',
        answer: 'Recherchez des clusters de mots-cles ou le volume de recherche moyen est superieur a 5 000 mais le KD moyen est inferieur a 20. Verifiez ensuite le CPC — un CPC plus eleve indique que les vendeurs dans cette niche sont suffisamment rentables pour se permettre de la publicite. La niche ideale a une forte demande de recherche, une faible concurrence, des marges saines et des produits en premiere page avec moins de 500 avis (indiquant l\'accessibilite du marche pour les nouveaux entrants).',
      },
      {
        question: 'Quelle est la difference entre le score de concurrence et le KD pour les mots-cles Amazon ?',
        answer: 'Le score de concurrence reflete la densite de publicite payante — combien de vendeurs diffusent des annonces Sponsored Product sur ce mot-cle. Le KD reflete la difficulte de classement organique — a quel point il est difficile d\'apparaitre en premiere page sans publicite. Vous pouvez avoir un mot-cle avec un KD organique faible mais une concurrence payante elevee, ce qui signifie qu\'il est facile de se classer organiquement mais difficile d\'obtenir de la visibilite publicitaire.',
      },
      {
        question: 'Comment utiliser les mots-cles Amazon pour la recherche de produits avant le lancement ?',
        answer: 'Utilisez cet outil pour la validation pre-lancement : (1) Entrez des mots-cles de categorie de produits larges, (2) Examinez le volume des mots-cles associes pour confirmer la demande, (3) Verifiez le KD pour evaluer la faisabilite concurrentielle, (4) Regardez l\'etendue des mots-cles longue traine — une niche avec de nombreuses variations longue traine offre de la place pour des produits differencies, (5) Croisez avec vos couts fournisseurs pour estimer la rentabilite.',
      },
      {
        question: 'Devrais-je cibler les mots-cles de noms de marque dans ma fiche Amazon ?',
        answer: 'N\'incluez jamais les noms de marque de concurrents dans le titre ou les puces de votre produit — les conditions d\'utilisation d\'Amazon l\'interdisent et cela peut entrainer la suppression de votre fiche. Cependant, les mots-cles lies aux marques apparaissent naturellement dans les resultats de l\'outil et sont utiles pour comprendre le paysage concurrentiel. Votre strategie devrait etre de cibler les equivalents generiques et de rivaliser sur le prix, les fonctionnalites et les avis.',
      },
      {
        question: 'Puis-je utiliser cet outil pour les places de marche Amazon en dehors des Etats-Unis ?',
        answer: 'Oui. Le selecteur de pays prend en charge les principales places de marche Amazon, y compris les Etats-Unis, le Royaume-Uni, l\'Allemagne, la France, l\'Espagne, l\'Italie, le Bresil, le Canada, l\'Australie, l\'Inde et le Japon. Chaque marche a des volumes de mots-cles, des niveaux de concurrence et des comportements d\'acheteurs differents. Un produit sursature sur le marche americain pourrait etre sous-desservi en Allemagne ou au Japon.',
      },
      {
        question: 'Combien de mots-cles devrais-je inclure dans mes termes de recherche backend Amazon ?',
        answer: 'Amazon autorise jusqu\'a 250 octets de termes de recherche backend (environ 250 caracteres pour l\'anglais). Utilisez cet espace pour les mots-cles qui ne s\'integrent pas naturellement dans votre titre, vos puces ou votre description. Privilegiez les mots-cles uniques — ne repetez pas les termes deja presents dans votre fiche visible. Utilisez des espaces pour separer les termes (pas de virgules ni de points-virgules — Amazon les considere comme des octets gaspilles).',
      },
      {
        question: 'Comment l\'algorithme A10 d\'Amazon utilise-t-il les mots-cles pour classer les fiches produit ?',
        answer: 'L\'algorithme A10 d\'Amazon considere la pertinence des mots-cles comme l\'un de plusieurs facteurs de classement aux cotes de la velocite des ventes, du taux de conversion, du taux de clics, de l\'autorite du vendeur et des ventes organiques. Les fiches avec le mot-cle dans le titre se classent plus haut que celles qui ne l\'ont que dans les termes backend. Au-dela de la correspondance, l\'algorithme classe ensuite par metriques de performance — ce qui signifie que l\'optimisation des mots-cles vous permet d\'etre indexe, mais le taux de conversion et les ventes determinent votre position.',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: 'Outil de mots-cles Bing',
    title: 'Outil de mots-cles Bing gratuit',
    description: 'Recherchez des mots-cles pour le moteur de recherche Bing. Obtenez le volume de recherche specifique a Bing, le CPC et les donnees de concurrence pour optimiser votre contenu pour le moteur de recherche de Microsoft.',
    metaDescription: 'Trouvez gratuitement des idees de mots-cles Bing. Consultez le volume de recherche, le CPC et les donnees de concurrence pour exploiter la SERP de Bing, moins concurrentielle et a fort taux de conversion.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Entrez un mot-cle',
    inputPlaceholder: 'ex. logiciel de gestion de projet',
    buttonText: 'Trouver des mots-cles',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume'],
    apiEndpoint: 'bing-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'Pays',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Etats-Unis' },
          { value: '2826', label: 'Royaume-Uni' },
          { value: '2276', label: 'Allemagne' },
          { value: '2250', label: 'France' },
          { value: '2724', label: 'Espagne' },
          { value: '2380', label: 'Italie' },
          { value: '2076', label: 'Bresil' },
          { value: '2124', label: 'Canada' },
          { value: '2036', label: 'Australie' },
          { value: '2356', label: 'Inde' },
          { value: '2392', label: 'Japon' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Mot-cle', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Concurrence', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Recherchez des mots-cles specifiquement pour l\'ecosysteme de recherche Bing',
        description: 'Bing alimente la recherche pour Microsoft Edge (le navigateur par defaut sur chaque PC Windows), Cortana, Yahoo Search et les resultats organiques de DuckDuckGo. Cela represente environ 10-15 % du trafic de recherche desktop — un segment que la plupart des SEOs ignorent completement. Saisissez n\'importe quel mot-cle, selectionnez votre pays cible et obtenez des donnees de recherche specifiques a Bing. C\'est particulierement precieux pour les marketeurs B2B et les marques ciblant des demographiques plus ages, car les utilisateurs de Bing tendent a privilegier le desktop, a avoir des revenus plus eleves et a evoluer dans des environnements professionnels ou les produits Microsoft sont le standard.',
        image: '/Bing keyword tool/Search any keyword on any region on Bing.png',
      },
      {
        title: 'Evaluez le volume unique et la densite de mots-cles de Bing',
        description: 'Le tableau de bord recapitulatif montre le nombre total d\'idees de mots-cles et leur volume moyen sur Bing. Un mot-cle de depart qui genere plus de 1 000 termes associes signifie qu\'un cluster thematique profond et semantiquement riche est disponible sur la plateforme de Bing. Cette metrique de densite vous aide a decider si l\'optimisation pour Bing vaut l\'effort pour votre niche. Pour les mots-cles de logiciels B2B, les requetes d\'outils d\'entreprise et les services professionnels, Bing offre souvent un volume surprenant de chercheurs a plus forte intention d\'achat et moins couteux a convertir.',
        image: '/Bing keyword tool/See a keywords volume and semantic density on Bing.png',
      },
      {
        title: 'Comparez la competitivite organique et payante sur Bing',
        description: 'Le tableau de resultats affiche le volume, le CPC et la concurrence pour chaque mot-cle specifiquement sur Bing. Bing Ads (Microsoft Advertising) a generalement des CPC inferieurs a ceux de Google Ads — souvent 30-50 % moins chers pour les memes mots-cles. Ce tableau permet aux gestionnaires PPC d\'identifier les mots-cles ou Bing offre un meilleur cout par acquisition que Google. Il permet egalement aux professionnels du SEO de voir quels mots-cles font face a moins de concurrence organique sur Bing.',
        image: '/Bing keyword tool/Find how competitives organic and paid keywords are in bing.png',
      },
      {
        title: 'Decouvrez des clusters de mots-cles et des opportunites de contenu uniques a Bing',
        description: 'Cette vue montre la liste complete des variations de mots-cles avec leurs volumes de recherche sur Bing. Comme la base d\'utilisateurs de Bing a des demographiques et des comportements differents de ceux de Google, le paysage des mots-cles peut differer considerablement. Les termes lies aux logiciels d\'entreprise, aux integrations Microsoft, aux outils professionnels et a certains produits cibles par tranche d\'age performent souvent de maniere disproportionnee sur Bing. Utilisez cette liste pour identifier des opportunites de contenu que vos concurrents manquent en n\'optimisant que pour Google.',
        image: '/Bing keyword tool/Check other clusters around your main keyword in bing.png',
      },
    ],
    faqs: [
      {
        question: 'Pourquoi devrais-je me soucier des mots-cles Bing quand Google domine la recherche ?',
        answer: 'Bing capte environ 10-15 % du trafic de recherche desktop a l\'echelle mondiale, ce qui represente des centaines de millions de recherches par mois. Plus important encore, l\'audience de Bing tend vers des revenus plus eleves, un age plus avance et une orientation plus professionnelle — des demographiques qui convertissent souvent a des taux plus eleves. Parce que moins de SEOs optimisent specifiquement pour Bing, le paysage concurrentiel est considerablement moins encombre.',
      },
      {
        question: 'En quoi l\'algorithme de recherche de Bing differe-t-il de celui de Google ?',
        answer: 'L\'algorithme de classement de Bing partage des similitudes avec Google mais presente des differences notables. Bing accorde plus de poids aux mots-cles en correspondance exacte dans les titres et les meta descriptions, valorise les signaux sociaux provenant de plateformes comme Facebook et LinkedIn, accorde une legere preference aux domaines plus anciens et etablis, et met en avant le contenu multimedia plus en evidence dans ses SERPs. Bing tend egalement a etre plus transparent concernant ses facteurs de classement.',
      },
      {
        question: 'Quels secteurs beneficient le plus de l\'optimisation des mots-cles Bing ?',
        answer: 'Les secteurs qui beneficient de maniere disproportionnee de Bing incluent les logiciels B2B et le SaaS (utilisateurs professionnels sur des navigateurs Microsoft par defaut), les services financiers (demographiques a revenus eleves), la sante (demographiques plus ages), l\'immobilier (comportement de recherche principalement sur desktop), l\'education et les services professionnels. Tout secteur dont le client cible utilise probablement un ordinateur de travail Windows avec Edge comme navigateur par defaut devrait envisager l\'optimisation pour Bing.',
      },
      {
        question: 'Les Bing Ads sont-ils moins chers que les Google Ads pour les memes mots-cles ?',
        answer: 'Oui, dans la plupart des cas. Les CPC de Bing Ads (Microsoft Advertising) sont generalement 30-50 % inferieurs a ceux de Google Ads pour des mots-cles equivalents, car il y a moins de concurrence entre annonceurs sur la plateforme. Les donnees de CPC dans cet outil refletent les tarifs specifiques a Bing, vous permettant de calculer les economies potentielles. De nombreux annonceurs importent leurs campagnes Google Ads dans Bing Ads et obtiennent un cout par acquisition significativement plus bas.',
      },
      {
        question: 'Combien d\'idees de mots-cles puis-je generer pour Bing ?',
        answer: 'L\'outil peut renvoyer plus de 1 000 idees de mots-cles a partir d\'un seul mot-cle de depart sur Bing. C\'est significativement plus que ce que proposent la plupart des outils de recherche specifiques a Bing. Le volume d\'idees de mots-cles indique la profondeur semantique du sujet sur la plateforme de Bing.',
      },
      {
        question: 'Bing a-t-il sa propre metrique de difficulte des mots-cles ?',
        answer: 'Cet outil fournit un score KD base sur le paysage concurrentiel des resultats organiques de Bing, qui est distinct des metriques de difficulte de Google. Comme moins de sites web optimisent activement pour Bing, vous constaterez souvent que les memes mots-cles sont significativement plus faciles a classer sur Bing que sur Google. Cela cree une opportunite d\'arbitrage.',
      },
      {
        question: 'Comment Bing gere-t-il l\'intention de recherche differemment de Google ?',
        answer: 'Les resultats de recherche de Bing tendent a favoriser les reponses directes et le contenu en correspondance exacte davantage que Google, qui interprete de plus en plus le sens semantique. Cela signifie que sur Bing, avoir la phrase exacte du mot-cle dans votre title tag, votre H1 et votre slug d\'URL a un impact plus fort sur les classements. Bing affiche egalement plus de contenu visuel dans les resultats de recherche et adopte une approche differente pour la recherche locale.',
      },
      {
        question: 'Puis-je utiliser les donnees de mots-cles Bing pour informer ma strategie SEO Google ?',
        answer: 'Oui — les donnees de mots-cles Bing peuvent reveler des tendances de recherche precieuses et des comportements utilisateurs qui sont moins visibles sur Google en raison de la concurrence plus elevee. Les suggestions de mots-cles de Bing font parfois emerger des variations longue traine et des formats de questions qui n\'apparaissent pas dans les outils de mots-cles de Google. Ces termes representent souvent des besoins utilisateurs reels qui sont egalement mal desservis dans les SERPs de Google.',
      },
      {
        question: 'Qu\'est-ce que le score de concurrence pour les mots-cles Bing ?',
        answer: 'Le score de concurrence (0-100) reflete le nombre d\'annonceurs qui encherissent sur ce mot-cle dans Microsoft Advertising (Bing Ads). Un score de 0 signifie qu\'aucun annonceur ne le cible ; 100 signifie une forte concurrence entre annonceurs. Cette metrique est distincte de la concurrence organique et concerne principalement les campagnes PPC. Cependant, une forte concurrence payante sur Bing signale egalement une valeur commerciale.',
      },
      {
        question: 'Comment optimiser le contenu specifiquement pour l\'algorithme de recherche de Bing ?',
        answer: 'Les tactiques cles d\'optimisation pour Bing incluent : utilisez des mots-cles en correspondance exacte dans votre title tag et votre H1, redigez des meta descriptions claires et riches en mots-cles, assurez-vous que votre site est verifie dans Bing Webmaster Tools, construisez des signaux sociaux via les partages LinkedIn et Facebook, soumettez un sitemap XML a Bing specifiquement, utilisez du contenu multimedia avec du texte alternatif et assurez des vitesses de chargement rapides — Bing penalise les sites lents plus agressivement que Google.',
      },
      {
        question: 'Quel pourcentage de mon trafic pourrait provenir de Bing ?',
        answer: 'Pour la plupart des sites web, Bing genere 5-15 % du trafic organique total, mais cela varie considerablement selon le secteur et l\'audience. Les sites orientes B2B et entreprise voient souvent 15-25 % de leur trafic provenir de Bing, tandis que les sites grand public ciblant des demographiques plus jeunes peuvent voir moins de 5 %. Consultez vos analytics pour la source Bing/organique afin de voir votre repartition actuelle.',
      },
      {
        question: 'La recherche de mots-cles Bing couvre-t-elle aussi Yahoo et DuckDuckGo ?',
        answer: 'Partiellement oui. L\'index de recherche organique de Bing alimente les resultats de Yahoo Search et influence significativement les resultats organiques de DuckDuckGo. Cela signifie qu\'optimiser pour les mots-cles Bing vous donne effectivement de la visibilite sur trois moteurs de recherche simultanement.',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: 'Verificateur de trafic de site web',
    title: 'Verificateur de trafic de site web gratuit',
    description: 'Verifiez le trafic organique et payant estime de n\'importe quel site web. Consultez le nombre total de mots-cles, la valeur du trafic et les donnees de mouvement de classement.',
    metaDescription: 'Verifiez gratuitement le trafic organique et payant de n\'importe quel site web. Consultez les classements de mots-cles, la valeur du trafic et les tendances de classement pour benchmarker vos concurrents.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'url',
    inputLabel: 'Entrez un domaine',
    inputPlaceholder: 'ex. example.com',
    buttonText: 'Verifier le trafic',
    options: [],
    resultType: 'traffic-overview',
    metricsToShow: ['organic_traffic', 'paid_traffic', 'total_keywords', 'traffic_value'],
    tableColumns: [
      { key: 'metric', label: 'Metrique', sortable: false, type: 'text' },
      { key: 'value', label: 'Valeur', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-traffic-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Estimez instantanement le trafic de recherche de n\'importe quel site web',
        description: 'Avant de penetrer un marche, vous devez savoir combien de trafic de recherche vos concurrents captent. Entrez n\'importe quel domaine dans le verificateur de trafic et obtenez instantanement une estimation de leur performance en recherche organique et payante. Que vous evaluiez un concurrent, que vous recherchiez une acquisition potentielle, que vous verifiez un partenaire publicitaire ou que vous analysiez la performance actuelle d\'un client, cet outil vous fournit l\'intelligence trafic qui necessitait auparavant des abonnements entreprise couteux. C\'est le moyen le plus rapide de repondre a la question : « Combien de trafic de recherche ce site recoit-il reellement ? »',
        image: '/website traffic checker/check any websites traffic.png',
      },
      {
        title: 'Consultez le nombre total de classements de mots-cles et la valeur monetaire du trafic',
        description: 'Le tableau de bord affiche le nombre total de mots-cles (par ex. 47 854) et la valeur du trafic (par ex. 223 458 $). Le nombre total de mots-cles montre l\'etendue de la visibilite de recherche d\'un site web — combien de termes de recherche differents attirent des visiteurs. La valeur du trafic estime combien ce trafic organique couterait s\'il etait achete via Google Ads. Une valeur de trafic de 223 458 $ signifie que les classements organiques de ce site lui economisent pres d\'un quart de million de dollars par mois en depenses publicitaires equivalentes. Cette metrique est l\'une des plus convaincantes pour demontrer le ROI du SEO aux dirigeants, clients et parties prenantes.',
        image: '/website traffic checker/see how many keywords any site ranks for and traffic of any website traffic.png',
      },
      {
        title: 'Suivez les tendances de mouvement des mots-cles : en hausse, en baisse, nouveaux, perdus',
        description: 'Le tableau des tendances de classement ventile les mots-cles dans le top 3, les mots-cles dans le top 10, les nouveaux mots-cles, les classements ameliores, les classements en baisse et les classements perdus. C\'est le pouls de la performance SEO. Si « Ameliore » depasse « En baisse », le SEO du site fonctionne. Si « Perdu » est eleve, quelque chose s\'est mal passe — peut-etre une mise a jour d\'algorithme, la degradation du contenu ou les concurrents les ont depasses. Les agences presentent ces donnees dans des rapports mensuels pour montrer aux clients si leur investissement SEO genere un elan positif.',
        image: '/website traffic checker/see keywords in tops declining and improved keywords.png',
      },
      {
        title: 'Comparez la strategie de trafic organique vs. payant',
        description: 'La vue partageee montre le trafic organique et le trafic payant cote a cote. Cela revele la strategie de recherche d\'un site en un coup d\'oeil. Un site avec un trafic organique eleve et zero trafic payant a fortement investi dans le SEO. Un site avec un trafic organique et payant equilibre est diversifie. Un site entierement dependant du trafic payant est vulnerable aux coupes budgetaires. Utilisez cela pour benchmarker votre propre strategie et identifier des avantages concurrentiels.',
        image: '/website traffic checker/see organic and paid traffic.png',
      },
    ],
    faqs: [
      {
        question: 'Comment un verificateur de trafic de site web estime-t-il le trafic sans acces aux analytics ?',
        answer: 'Les verificateurs de trafic estiment le trafic organique en utilisant une combinaison de donnees de classement de mots-cles et de modeles de taux de clic. L\'outil identifie les mots-cles pour lesquels un site se classe, leurs positions de classement et les volumes de recherche mensuels pour ces mots-cles. Il applique ensuite des estimations de taux de clic basees sur la position (par exemple, la position #1 obtient ~28% des clics, la #2 obtient ~15%) pour calculer les visites mensuelles estimees a partir de chaque mot-cle. La somme de toutes les estimations de trafic au niveau des mots-cles produit l\'estimation totale du trafic.',
      },
      {
        question: 'Qu\'est-ce que la valeur du trafic et comment est-elle calculee ?',
        answer: 'La valeur du trafic represente le cout mensuel estime pour repliquer le trafic organique d\'un site web via Google Ads. Elle est calculee en multipliant le trafic organique estime de chaque mot-cle par son CPC (Cout Par Clic), puis en additionnant l\'ensemble des mots-cles. Par exemple, si un site recoit 1 000 visites organiques a partir d\'un mot-cle avec un CPC de 5 $, ce mot-cle contribue 5 000 $ a la valeur du trafic. Cette metrique demontre puissamment la valeur monetaire de l\'investissement SEO.',
      },
      {
        question: 'Quelle est la difference entre le trafic organique et le trafic payant ?',
        answer: 'Le trafic organique provient des resultats de recherche non payants — les utilisateurs cliquent sur votre listing parce qu\'il apparait naturellement dans Google en fonction de la pertinence et de l\'autorite. Le trafic payant provient de la publicite sur les moteurs de recherche (Google Ads) — vous payez pour chaque clic sur votre listing sponsorise. Le trafic organique est « gratuit » dans le sens ou vous ne payez pas par clic, mais il necessite un investissement en creation de contenu et en SEO. Le trafic payant offre une visibilite immediate mais s\'arrete au moment ou vous mettez en pause votre budget publicitaire.',
      },
      {
        question: 'Que signifient les metriques « Nouveaux mots-cles », « Ameliores », « En baisse » et « Perdus » ?',
        answer: '« Nouveaux mots-cles » sont des termes de recherche pour lesquels le site a commence a se classer lors de la periode la plus recente — indiquant que du contenu frais est indexe ou que le contenu existant gagne en visibilite. « Classements ameliores » sont des mots-cles ou la position du site a progresse (plus proche de la position #1). « Classements en baisse » sont des mots-cles ou la position a chute. « Classements perdus » sont des mots-cles pour lesquels le site se classait precedemment mais n\'apparait plus dans le top 100. Un site en bonne sante montre generalement des Nouveaux + Ameliores depassant significativement les En baisse + Perdus.',
      },
      {
        question: 'Quelle est la precision des estimations de trafic pour les petits vs. grands sites ?',
        answer: 'Les estimations de trafic sont generalement plus precises pour les sites plus grands avec des milliers de classements, car le modele statistique calcule une moyenne sur de nombreux mots-cles. Pour les petits sites classant moins de 100 mots-cles, les estimations peuvent avoir des marges d\'erreur plus larges car la sur- ou sous-estimation d\'un seul mot-cle a un impact plus important sur le total. Pour le benchmarking concurrentiel, la comparaison relative (votre site vs. vos concurrents) est plus fiable que les chiffres absolus.',
      },
      {
        question: 'Pourquoi un concurrent avec une autorite plus basse a-t-il plus de trafic que mon site ?',
        answer: 'L\'autorite et le trafic sont correles mais pas identiques. Un concurrent peut vous surpasser en trafic avec une autorite plus basse s\'il : (1) a une meilleure strategie de contenu ciblant des mots-cles a plus fort volume, (2) produit du contenu plus frequemment et de maniere plus reguliere, (3) cible des mots-cles longue traine qui necessitent moins d\'autorite pour se classer, (4) possede une optimisation on-page et un SEO technique superieurs, ou (5) beneficie d\'une autorite thematique dans une niche specifique malgre des metriques de domaine globales plus faibles.',
      },
      {
        question: 'Comment utiliser les donnees du verificateur de trafic pour l\'analyse concurrentielle ?',
        answer: 'Lancez le verificateur de trafic sur vos 5 principaux concurrents et comparez : le trafic organique total, le nombre total de mots-cles, la valeur du trafic, la repartition organique vs. payant et les tendances de mouvement des mots-cles. Cela revele qui croit le plus vite, qui depend des publicites payantes, qui a l\'empreinte de mots-cles la plus large et ou chaque concurrent genere le plus de valeur. Ensuite, examinez les mots-cles specifiques — pour quels termes vos concurrents se classent-ils et pas vous ? Ce sont vos opportunites de lacunes de contenu.',
      },
      {
        question: 'Que signifie le fait qu\'un site ait une valeur de trafic elevee mais un volume de trafic modere ?',
        answer: 'Cela signifie que le site se classe pour des mots-cles commercialement precieux avec des CPC eleves, meme si les volumes de recherche sont moderes. Un site recevant 10 000 visites mensuelles a partir de mots-cles avec un CPC moyen de 20 $ a une valeur de trafic de 200 000 $ — plus qu\'un site recevant 100 000 visites a partir de mots-cles avec un CPC moyen de 0,50 $ (valeur de trafic de 50 000 $). Une valeur de trafic elevee par rapport au volume de trafic indique que le site cible des mots-cles de bas de funnel a forte intention qui generent du chiffre d\'affaires.',
      },
      {
        question: 'Comment suivre les tendances de trafic dans le temps ?',
        answer: 'Exportez les donnees de trafic mensuellement et creez un tableau de bord historique. Suivez le trafic organique total, le nombre total de mots-cles, les mots-cles dans le top 3, les mots-cles dans le top 10 et la valeur du trafic sur des periodes de 6 a 12 mois. Tracez ces donnees sous forme de courbes de tendance pour visualiser la croissance ou le declin. La metrique la plus significative a suivre est « Mots-cles dans le Top 10 » car elle est directement correlee au trafic — plus vous avez de mots-cles en premiere page, plus vous recevez de trafic.',
      },
      {
        question: 'Puis-je utiliser cet outil pour estimer le chiffre d\'affaires d\'un site web ?',
        answer: 'Bien que les donnees du verificateur de trafic seules ne revelent pas le chiffre d\'affaires, vous pouvez creer des estimations approximatives. Pour les sites finances par la publicite, multipliez le trafic estime par les RPM typiques (5 $ a 30 $ pour 1 000 pages vues selon la niche). Pour les sites e-commerce, appliquez les taux de conversion moyens du secteur (1-3 %) et les valeurs moyennes de commande. Pour les sites SaaS, estimez les leads a partir du trafic en utilisant les taux de conversion typiques (2-5 % vers un essai gratuit) et la tarification connue.',
      },
      {
        question: 'Pourquoi un site affiche-t-il zero trafic payant ?',
        answer: 'Zero trafic payant signifie que le site ne mene pas actuellement de campagnes Google Ads que les sources de donnees de l\'outil peuvent detecter. Cela pourrait signifier que le site mise entierement sur le SEO organique (une strategie courante pour les entreprises axees sur le contenu), diffuse des publicites sur d\'autres plateformes (Facebook, LinkedIn, reseaux display) au lieu de la recherche Google, ou a recemment mis en pause ses campagnes. Zero trafic payant n\'est ni intrinsequement bon ni mauvais — cela indique simplement que la strategie de visibilite en recherche du site est entierement organique.',
      },
      {
        question: 'Comment le verificateur de trafic gere-t-il les sous-domaines et les sous-dossiers ?',
        answer: 'L\'outil verifie le trafic pour le domaine entier saisi. Si un site utilise des sous-domaines (blog.example.com, shop.example.com), ceux-ci sont generalement inclus dans l\'estimation totale de trafic du domaine racine. Les sous-dossiers (example.com/blog/, example.com/shop/) sont toujours inclus car ils font partie du meme domaine. Si vous avez besoin d\'estimations de trafic pour un sous-domaine ou un chemin URL specifique, certains outils proposent une analyse au niveau de l\'URL qui detaille le trafic par page ou par section.',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: 'Verificateur de liens casses',
    title: 'Verificateur gratuit de liens casses et de sante de page',
    description: 'Verifiez n\'importe quelle page web pour les liens casses, les problemes SEO et les problemes de sante de page. Obtenez un audit detaille avec des recommandations actionnables.',
    metaDescription: 'Verifiez gratuitement n\'importe quelle page web pour les liens casses et les problemes SEO. Obtenez des scores de sante de page, le nombre de liens internes/externes et des recommandations de correction.',
    iconName: 'Link2',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Entrez une URL',
    inputPlaceholder: 'ex. https://example.com',
    buttonText: 'Verifier la page',
    options: [],
    resultType: 'broken-links',
    metricsToShow: ['page_score', 'issues_found', 'internal_links', 'external_links'],
    tableColumns: [
      { key: 'issue', label: 'Probleme', sortable: false, type: 'text' },
      { key: 'severity', label: 'Gravite', sortable: true, type: 'badge' },
      { key: 'description', label: 'Description', sortable: false, type: 'text' },
    ],
    apiEndpoint: 'broken-link-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Auditez n\'importe quelle page pour les liens casses et la sante technique SEO',
        description: 'Les liens casses detruisent silencieusement l\'experience utilisateur et la performance SEO. Entrez n\'importe quelle URL dans le verificateur, cliquez sur « Verifier la page » et obtenez un audit instantane de la sante des liens et de l\'etat technique SEO de cette page. Cela remplace la verification manuelle lien par lien par un scan automatise qui detecte les erreurs 404, les chaines de redirection et les liens sortants morts. Les proprietaires de sites, les professionnels du SEO et les webmasters utilisent cela avant le lancement de nouvelles pages, apres les migrations de site et dans le cadre de controles de sante mensuels reguliers.',
        image: '/Broken link checker/check your website broken links and technical seo health.png',
      },
      {
        title: 'Surveillez votre score SEO technique et les problemes critiques',
        description: 'Au-dela des liens casses, l\'outil fournit un score de page (0-100) et le nombre total de problemes trouves. Un score de page de 100 avec 0 probleme signifie que la page est techniquement saine. Tout ce qui est en dessous de 80 signale des problemes necessitant une attention. Ce systeme de notation vous donne une metrique rapide de reussite/echec pour chaque page de votre site.',
        image: '/Broken link checker/See your websites technical seo score + number of critical seo issues.png',
      },
      {
        title: 'Analysez la distribution des liens internes et externes',
        description: 'L\'outil compte et categorise les liens internes (liens vers d\'autres pages du meme domaine) et les liens externes (liens vers d\'autres sites web). Ces donnees sont critiques pour deux raisons : (1) la distribution des liens internes affecte la facon dont les moteurs de recherche explorent et indexent votre site, et (2) la qualite des liens externes affecte la fiabilite de votre page.',
        image: '/Broken link checker/See internal links from a page external links.png',
      },
      {
        title: 'Identifiez et priorisez les problemes techniques specifiques a corriger',
        description: 'Le tableau des problemes liste chaque probleme trouve, son niveau de gravite (info, avertissement, critique) et une description. Les problemes comme « Ressources bloquant le rendu » et « Faible taux de contenu » impactent directement les Core Web Vitals et les signaux de qualite du contenu. Chaque probleme est accompagne d\'un contexte actionnable — vous savez exactement ce qui ne va pas et pouvez prioriser en fonction de la gravite.',
        image: '/Broken link checker/see details about techincal issues from your page.png',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce qu\'un lien casse et comment affecte-t-il le SEO ?',
        answer: 'Un lien casse (aussi appele lien mort ou erreur 404) est un lien hypertexte qui pointe vers une page qui n\'existe plus ou qui renvoie une erreur. Les liens casses affectent le SEO de trois manieres : (1) Ils gaspillent le budget d\'exploration — les robots des moteurs de recherche passent du temps sur des impasses au lieu d\'indexer des pages utiles, (2) Ils interrompent le flux d\'equite de lien — si des sites externes lient vers une page de votre site qui renvoie une 404, vous perdez la valeur de classement de ces backlinks, et (3) Ils nuisent a l\'experience utilisateur — les visiteurs qui rencontrent des liens casses perdent confiance en votre site, augmentant le taux de rebond.',
      },
      {
        question: 'Qu\'est-ce qu\'un score de page et comment est-il calcule ?',
        answer: 'Le score de page est une metrique de 0 a 100 qui evalue la sante technique globale d\'une page web. Il prend en compte les liens casses (internes et externes), la performance de chargement de page, la completude des meta tags, le rapport contenu/HTML, les ressources bloquant le rendu, les indicateurs de compatibilite mobile et d\'autres signaux SEO techniques. Un score de 90-100 indique une excellente sante, 70-89 est bon mais peut etre ameliore, 50-69 necessite une attention, et en dessous de 50 suggere des problemes techniques serieux qui nuisent probablement a la performance de recherche.',
      },
      {
        question: 'Quelle est la difference entre les liens internes et les liens externes en SEO ?',
        answer: 'Les liens internes connectent les pages au sein d\'un meme domaine (par ex., votre page d\'accueil liant a votre blog). Ils aident les moteurs de recherche a decouvrir et explorer votre contenu, distribuent l\'equite de lien (pouvoir de classement) a travers votre site et etablissent des hierarchies de contenu. Les liens externes (aussi appeles liens sortants) pointent de votre site vers d\'autres domaines. Ils signalent la qualite du contenu et la pertinence thematique aux moteurs de recherche lorsqu\'ils lient vers des sources autoritaires. Les deux types de liens sont essentiels pour le SEO — une page saine a generalement une structure de liens internes solide et quelques liens externes pertinents vers des sources fiables.',
      },
      {
        question: 'A quelle frequence devrais-je verifier les liens casses de mon site ?',
        answer: 'Verifiez vos pages les plus importantes (page d\'accueil, principales pages d\'atterrissage, articles de blog les plus visites) mensuellement. Effectuez un audit complet de liens casses a l\'echelle du site trimestriellement. Verifiez en plus toujours apres les migrations de site, les mises a jour CMS, les changements de structure d\'URL ou les suppressions de contenu — ce sont les evenements les plus courants qui creent des liens casses. Pour les grands sites avec des milliers de pages, envisagez de planifier des explorations automatisees hebdomadaires pour detecter les nouveaux liens casses avant qu\'ils ne s\'accumulent.',
      },
      {
        question: 'Que sont les ressources bloquant le rendu et pourquoi sont-elles importantes ?',
        answer: 'Les ressources bloquant le rendu sont des feuilles de style CSS et des fichiers JavaScript qui empechent le navigateur d\'afficher la page jusqu\'a ce qu\'ils soient entierement charges. Elles ralentissent le temps jusqu\'au premier affichage significatif — le moment ou un utilisateur voit du contenu reel. Cela impacte directement les metriques Core Web Vitals comme le Largest Contentful Paint (LCP) et le First Contentful Paint (FCP), que Google utilise comme facteurs de classement. Les solutions incluent le report du JavaScript non critique, l\'inline du CSS critique et le chargement asynchrone des scripts non essentiels.',
      },
      {
        question: 'Que signifie « Faible taux de contenu » dans le rapport de problemes ?',
        answer: 'Un faible taux de contenu (aussi appele faible ratio texte/HTML) signifie que la page a tres peu de texte lisible par rapport a son code HTML. Les moteurs de recherche peuvent interpreter cela comme une page a contenu faible qui offre une valeur limitee aux utilisateurs. Le ratio sain typique est superieur a 25 % de texte par rapport au HTML. Les pages lourdes en frameworks JavaScript, grands menus de navigation ou publicites excessives peuvent declencher ce probleme. La solution est de s\'assurer que chaque page a un contenu textuel substantiel, unique et informatif qui repond a l\'intention de recherche de l\'utilisateur.',
      },
      {
        question: 'Les liens casses sur mon site peuvent-ils affecter des pages qui n\'ont pas elles-memes de liens casses ?',
        answer: 'Oui, par un concept appele gaspillage de budget d\'exploration. Les moteurs de recherche allouent un budget d\'exploration limite a chaque site — le nombre de pages qu\'ils exploreront par visite. Lorsque les robots rencontrent des liens casses, ils les suivent jusqu\'a des impasses, utilisant un budget d\'exploration qui aurait pu etre consacre a l\'indexation de vos bonnes pages. Sur les grands sites (10 000+ pages), des liens casses excessifs peuvent ralentir la decouverte et l\'indexation de nouveau contenu important, nuisant indirectement au classement de pages parfaitement saines.',
      },
      {
        question: 'Devrais-je corriger d\'abord les liens casses internes ou externes ?',
        answer: 'Corrigez d\'abord les liens casses internes. Les liens casses internes impactent directement la capacite d\'exploration, la navigation et la distribution de l\'equite de lien interne de votre site — tout ce que vous controlez entierement. Les liens casses externes (liens de votre page vers d\'autres sites qui sont tombes) comptent aussi, mais leur impact est moins severe. Pour les liens casses externes, vous pouvez soit supprimer le lien, le remplacer par un lien vers une source a jour, ou utiliser la Wayback Machine pour trouver des versions archivees du contenu.',
      },
      {
        question: 'Qu\'est-ce que l\'equite de lien et comment les liens casses l\'affectent-ils ?',
        answer: 'L\'equite de lien (anciennement appelee « link juice ») est la valeur de classement transferee d\'une page a une autre via les liens hypertextes. Lorsqu\'un site autoritaire lie vers votre page, il transmet de l\'equite de lien qui aide votre page a mieux se classer. Si ce lien pointe vers une page de votre site qui renvoie une erreur 404, l\'equite de lien est gaspillee — elle coule dans une impasse. En trouvant les liens entrants casses et en mettant en place des redirections 301 vers des pages actives pertinentes, vous pouvez recuperer cette equite de lien perdue et ameliorer vos classements.',
      },
      {
        question: 'Comment utiliser les donnees de liens casses pour le link building ?',
        answer: 'Le Broken Link Building est une strategie eprouvee d\'acquisition de liens. Trouvez des pages cassees sur des sites concurrents ou de votre secteur a l\'aide d\'un verificateur de liens casses. Ensuite, creez du contenu sur votre propre site couvrant le meme sujet que la page morte. Enfin, contactez les sites web qui liaient a la page cassee et suggerez-leur de remplacer le lien mort par un lien vers votre contenu actif et pertinent. Cette strategie fonctionne parce que vous aidez les webmasters a corriger un vrai probleme tout en gagnant un backlink.',
      },
      {
        question: 'Quels codes de statut HTTP indiquent des liens casses ?',
        answer: 'Les codes de statut de liens casses les plus courants sont : 404 (Non trouve — la page n\'existe pas), 410 (Supprime — la page a ete intentionnellement retiree), 500 (Erreur interne du serveur — le serveur a echoue), 502 (Bad Gateway) et 503 (Service indisponible). De plus, 301 (Redirection permanente) et 302 (Redirection temporaire) ne sont pas « casses » en soi, mais les chaines de redirection (plusieurs redirections en sequence) gaspillent l\'equite de lien et ralentissent le chargement des pages. Cet outil detecte tous ces codes de statut et les categorise par gravite.',
      },
      {
        question: 'Les liens casses peuvent-ils amener Google a desindexer mes pages ?',
        answer: 'Quelques liens casses ne causeront pas de desindexation. Cependant, si un pourcentage significatif des URLs de votre site renvoie des erreurs 404, ou si des pages critiques liees depuis votre navigation echouent constamment, Google peut reduire le taux d\'exploration de votre domaine et signaler votre site comme mal entretenu. Dans les cas extremes ou les liens casses creent des pages orphelines (pages sans aucun lien valide pointant vers elles), ces pages specifiques peuvent etre retirees de l\'index. Un audit regulier de liens casses previent cette deterioration.',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'Verificateur de visibilite IA',
    title: 'Verificateur de visibilite IA gratuit',
    description: 'Decouvrez comment les Google AI Overviews affectent votre site web. Decouvrez quel pourcentage de vos mots-cles declenche des AI Overviews, combien de trafic est menace, et obtenez un score de visibilite IA.',
    metaDescription: 'Verifiez gratuitement comment les Google AI Overviews impactent votre site web. Consultez votre taux d\'exposition aux AI Overviews, les mots-cles affectes, le trafic menace et le score de visibilite IA.',
    iconName: 'Sparkles',
    category: 'other',
    inputType: 'url',
    inputLabel: 'Entrez un domaine',
    inputPlaceholder: 'ex. example.com',
    buttonText: 'Verifier la visibilite IA',
    options: [],
    resultType: 'ai-visibility',
    metricsToShow: ['ai_exposure', 'ai_keywords', 'traffic_at_risk'],
    tableColumns: [
      { key: 'metric', label: 'Metrique', sortable: false, type: 'text' },
      { key: 'value', label: 'Valeur', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'ai-visibility-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Auditez la visibilite de n\'importe quel site web dans la recherche alimentee par l\'IA',
        description: 'Les AI Overviews, ChatGPT, Perplexity et Gemini transforment fondamentalement la maniere dont les utilisateurs trouvent l\'information — et la plupart des sites web n\'ont aucune idee de leur performance dans ce nouveau paysage. Entrez n\'importe quel domaine, cliquez sur « Verifier la visibilite IA » et obtenez un audit complet de la facon dont le site apparait dans les resultats de recherche IA. C\'est la premiere etape de l\'AI Engine Optimization (AEO), la discipline emergente qui accompagne le SEO traditionnel.',
        image: '/ai visibility checker/check any websites visibility in llms.png',
      },
      {
        title: 'Analysez la distribution et le positionnement des mots-cles dans les AI Overviews',
        description: 'Les metriques detaillees montrent le nombre total de mots-cles classes, les mots-cles avec des AI Overviews, le taux d\'exposition aux AI Overviews, la distribution des mots-cles par position (mots-cles AI #1, #2-3, #4-10), le trafic organique provenant des mots-cles AI et le trafic organique total. Cette ventilation detaillee vous montre exactement quelle part de votre portefeuille de mots-cles est affectee par les AI Overviews de Google.',
        image: '/ai visibility checker/see keyword distribution for ai overview.png',
      },
      {
        title: 'Quantifiez le trafic menace par les AI Overviews',
        description: 'L\'affichage a double metrique montre les mots-cles avec des AI Overviews et le trafic menace. Le « trafic menace » estime le trafic organique qui pourrait diminuer si les AI Overviews absorbent les clics qui allaient auparavant aux resultats organiques traditionnels. C\'est la metrique la plus importante pour comprendre l\'impact de la recherche IA sur votre activite.',
        image: '/ai visibility checker/see number of keywords in ai overview and which percentage of your traffic is at risk with google ai overviews.png',
      },
      {
        title: 'Comparez la force du domaine a l\'exposition aux AI Overviews',
        description: 'Le tableau de bord combine votre score de domaine (par ex. 97 « Tres fort ») avec votre pourcentage d\'exposition aux AI Overviews. Cette combinaison est cruciale : un domaine fort ne vous protege pas des AI Overviews. Meme les sites les plus autoritaires font face a une erosion massive du taux de clic par les reponses generees par l\'IA. Le score de domaine montre votre force SEO traditionnelle, tandis que la metrique d\'exposition montre dans quelle mesure cette force est menacee par l\'IA.',
        image: '/ai visibility checker/see your domain score in ai overview and exposure level to ai overview.png',
      },
    ],
    faqs: [
      {
        question: 'Qu\'est-ce que la visibilite IA et pourquoi est-elle importante pour le SEO en 2025-2026 ?',
        answer: 'La visibilite IA fait reference a la facon dont votre site web, votre marque ou votre contenu apparait de maniere proeminente dans les experiences de recherche alimentees par l\'IA — y compris les Google AI Overviews, les reponses ChatGPT, les reponses Perplexity, les resultats Gemini et Microsoft Copilot. C\'est important car ces systemes d\'IA changent fondamentalement le comportement de recherche. Les Google AI Overviews apparaissent desormais pour plus de 70 % des requetes informationnelles, repondant souvent directement a la question de l\'utilisateur sans necessiter de clic vers un site web. Cela signifie que les classements SEO traditionnels seuls ne garantissent plus le trafic.',
      },
      {
        question: 'Que sont les Google AI Overviews et comment affectent-ils le trafic organique ?',
        answer: 'Les Google AI Overviews (anciennement SGE — Search Generative Experience) sont des resumes de reponses generes par l\'IA qui apparaissent en haut des resultats de recherche de Google pour de nombreuses requetes. Ils synthetisent des informations provenant de multiples sources et presentent une reponse directe, reduisant le besoin pour les utilisateurs de cliquer vers des sites web individuels. Les etudes montrent que les AI Overviews peuvent reduire les taux de clic sur les resultats organiques de 18 a 64 %, selon le type de requete. Les requetes informationnelles sont les plus affectees, tandis que les requetes navigationnelles et transactionnelles sont moins impactees.',
      },
      {
        question: 'Que signifie « trafic menace » et comment est-il calcule ?',
        answer: 'Le « trafic menace » estime le trafic organique qui pourrait diminuer si les AI Overviews absorbent les clics. Il est calcule en identifiant tous les mots-cles pour lesquels (a) votre site se classe actuellement et recoit du trafic et (b) Google affiche une AI Overview pour cette requete. Le trafic provenant de ces mots-cles represente le volume a risque, car les AI Overviews peuvent reduire les taux de clic qui envoyaient precedemment des visiteurs vers vos pages.',
      },
      {
        question: 'Qu\'est-ce que l\'exposition aux AI Overviews et que signifie un pourcentage eleve ?',
        answer: 'L\'exposition aux AI Overviews est le pourcentage de vos mots-cles classes qui declenchent des Google AI Overviews. Une exposition de 76,8 % signifie que pour plus des trois quarts de vos mots-cles classes, Google affiche une reponse generee par l\'IA au-dessus des resultats organiques.',
      },
      {
        question: 'En quoi la visibilite IA differe-t-elle de la visibilite SEO traditionnelle ?',
        answer: 'La visibilite SEO traditionnelle mesure votre presence dans les resultats de recherche organiques standard (liens bleus). La visibilite IA mesure votre presence dans les reponses generees par l\'IA. Les deux peuvent diverger : un site classe #1 organiquement pourrait ne pas etre cite dans l\'AI Overview pour le meme mot-cle, ou un site classe #5 pourrait etre la source de citation principale de la reponse IA. La visibilite IA depend de facteurs differents — exhaustivite du contenu, donnees structurees, reconnaissance d\'entites, exactitude factuelle et capacite des systemes d\'IA a extraire et citer facilement vos informations.',
      },
      {
        question: 'Qu\'est-ce que l\'AI Engine Optimization (AEO) et comment commencer ?',
        answer: 'L\'AEO est la pratique d\'optimiser votre contenu pour etre reference, cite et mis en avant dans les reponses de recherche generees par l\'IA. Les strategies cles incluent : fournir des reponses claires et precises, utiliser des donnees structurees et le balisage schema, construire une autorite thematique, inclure des donnees originales et maintenir des signaux E-E-A-T eleves.',
      },
      {
        question: 'Comment la force du domaine affecte-t-elle la citation dans les AI Overviews ?',
        answer: 'Les systemes d\'IA, y compris les AI Overviews de Google, tendent a citer les sources autoritaires et bien connues plus frequemment. Des scores de domaine plus eleves sont correles avec des taux de citation plus eleves dans les reponses IA. Cependant, la force du domaine seule n\'est pas suffisante — l\'IA evalue egalement la specificite du contenu, l\'exactitude factuelle, la fraicheur et la pertinence du contenu par rapport a la requete specifique. Un site de niche avec une expertise approfondie sur un sujet specifique peut etre cite avant un site generaliste a forte autorite si son contenu est plus pertinent et complet.',
      },
      {
        question: 'Quels types de contenu sont les plus vulnerables a la perte de trafic par les AI Overviews ?',
        answer: 'Le contenu informationnel qui repond a des questions factuelles simples est le plus vulnerable — definitions, reponses rapides de type « comment faire », statistiques, comparaisons et requetes « qu\'est-ce que ». Les types de contenu plus resilients incluent : les analyses approfondies, les outils interactifs, la recherche originale et les comparaisons de produits avec experience personnelle.',
      },
      {
        question: 'Puis-je voir quelles plateformes d\'IA citent mon contenu ?',
        answer: 'Cet outil mesure specifiquement l\'exposition aux AI Overviews sur Google. Pour un monitoring plus large des plateformes d\'IA (ChatGPT, Perplexity, Gemini, Copilot), des outils dedies de surveillance de marque suivent ou et comment votre marque et contenu apparaissent a travers les plateformes d\'IA. Les metriques de cet outil — en particulier les donnees d\'AI Overview au niveau des mots-cles — vous donnent l\'image specifique a Google, qui est le canal le plus impactant puisque Google domine toujours le trafic de recherche.',
      },
      {
        question: 'Que devrais-je faire si mon exposition aux AI Overviews depasse 50 % ?',
        answer: 'Une exposition elevee necessite une reponse a plusieurs volets : (1) Auditez quels mots-cles specifiques declenchent des AI Overviews, (2) Optimisez vos pages a plus fort trafic pour la citation IA, (3) Diversifiez les sources de trafic, (4) Creez des formats de contenu que les AI Overviews ne peuvent pas repliquer, et (5) Surveillez mensuellement.',
      },
      {
        question: 'Comment le score de domaine dans le contexte de la visibilite IA se rapporte-t-il a l\'autorite traditionnelle ?',
        answer: 'Le score de domaine affiche a cote des donnees d\'AI Overview est la meme metrique d\'autorite basee sur la force du profil de backlinks. Dans le contexte de la visibilite IA, il offre une perspective cruciale : un score de domaine eleve signifie que votre fondation SEO traditionnelle est solide, mais le pourcentage d\'exposition IA revele dans quelle mesure cette fondation est perturbee.',
      },
      {
        question: 'La visibilite IA est-elle pertinente pour les sites web B2B et d\'entreprise ?',
        answer: 'Absolument. Les acheteurs B2B utilisent de plus en plus les outils d\'IA pour la recherche de fournisseurs, l\'evaluation technologique et le soutien aux decisions d\'achat. Les Google AI Overviews sont particulierement frequents pour les requetes informationnelles B2B comme « meilleur CRM pour petites entreprises » ou « comment implementer le SSO ». Les marques entreprise qui apparaissent comme citations dans les AI Overviews gagnent une credibilite significative — etre nomme par un systeme d\'IA est percu comme un gage de confiance. A l\'inverse, les marques B2B absentes des reponses IA risquent d\'etre invisibles pour une generation emergente de decideurs.',
      },
    ],
  },
};

export function getSeoToolBySlugFr(slug: string): SeoToolConfig | undefined {
  return seoToolsFr[slug];
}

export function getAllSeoToolsFr(): SeoToolConfig[] {
  return Object.values(seoToolsFr);
}

export function getAllSeoToolSlugsFr(): string[] {
  return Object.keys(seoToolsFr);
}
