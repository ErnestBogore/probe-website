import { SeoToolConfig } from '../seo-tools-config.types';

export const seoToolsPt: Record<string, SeoToolConfig> = {
  'keyword-generator-tool': {
    slug: 'keyword-generator-tool',
    name: 'Gerador de Palavras-chave',
    title: 'Gerador de Palavras-chave Gratuito',
    description: 'Encontre milhares de ideias de palavras-chave para suas campanhas de SEO e marketing de conteúdo. Obtenha dados de volume de busca, dificuldade de palavra-chave e CPC.',
    metaDescription: 'Gere ideias de palavras-chave a partir de qualquer termo semente. Veja volume de busca, dificuldade e CPC para mais de 15 países — gratuito, sem necessidade de cadastro.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Digite uma palavra-chave semente',
    inputPlaceholder: 'ex.: e-mail marketing',
    buttonText: 'Encontrar Palavras-chave',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'keyword-generator',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemanha' },
          { value: '2250', label: 'França' },
          { value: '2724', label: 'Espanha' },
          { value: '2380', label: 'Itália' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Austrália' },
          { value: '2356', label: 'Índia' },
          { value: '2392', label: 'Japão' },
          { value: '2528', label: 'Países Baixos' },
          { value: '2792', label: 'Turquia' },
          { value: '2410', label: 'Coreia do Sul' },
          { value: '2484', label: 'México' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Palavra-chave', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Concorrência', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Descubra oportunidades de palavras-chave em qualquer mercado',
        description: 'Seja expandindo para o mercado britânico, segmentando compradores no Brasil ou realizando uma campanha local no Japão — esta ferramenta permite pesquisar a demanda de palavras-chave em mais de 15 países a partir de uma única entrada. Digite uma palavra-chave semente como "e-mail marketing", selecione o país de destino no menu suspenso e descubra instantaneamente os termos que pessoas reais estão digitando no Google. Isso é especialmente útil para equipes internacionais de SEO que planejam lançamentos de conteúdo em várias regiões, ou marcas de e-commerce que validam a demanda de produtos antes de entrar em um novo mercado.',
        image: '/Keyword Generator/ideate keywords from a seed keyword in any location.png',
      },
      {
        title: 'Tenha uma visão panorâmica do cenário de busca de um tema',
        description: 'Antes de investir recursos em um cluster de conteúdo, você precisa saber se o tema possui demanda de busca suficiente e se a concorrência é administrável. Após inserir sua palavra-chave semente, a ferramenta retorna um painel resumo mostrando Total de Palavras-chave encontradas (ex.: 50 resultados), Volume Médio dessas palavras-chave e Dificuldade Média. Esse panorama permite que estrategistas de conteúdo e gestores de SEO avaliem rapidamente se vale a pena investir em um tema ou se devem migrar para um território de palavras-chave mais favorável.',
        image: '/Keyword Generator/See a comprehensive overview of your see keyword from search volume to difficulty to cpc.png',
      },
      {
        title: 'Avalie a competitividade no nível da palavra-chave para priorização de conteúdo',
        description: 'A tabela de resultados exibe cada palavra-chave junto com seu Volume de busca mensal, Score de Dificuldade de Palavra-chave (KD), Custo Por Clique (CPC) e Índice de Concorrência. Essa visão multi-métrica permite que você encontre o ponto ideal: palavras-chave de alto volume com baixa dificuldade e intenção comercial significativa. Gestores de PPC podem usar a coluna CPC para estimar gastos com anúncios, enquanto profissionais de SEO podem usar o score KD para decidir quais palavras-chave abordar com conteúdo extenso e quais precisam de uma estratégia focada em backlinks.',
        image: '/Keyword Generator/See any keywords competitive landscape from kyword difficulty to cpc.png',
      },
      {
        title: 'Explore palavras-chave semanticamente relacionadas para construir autoridade temática',
        description: 'O algoritmo de ranqueamento do Google recompensa páginas que cobrem um tema de forma abrangente. Esta visualização mostra uma lista organizada de palavras-chave semanticamente relacionadas com seus respectivos volumes de busca. Use-as para identificar palavras-chave secundárias e LSI (Latent Semantic Indexing) que devem aparecer nos seus títulos, texto corrido e seções de FAQ. Ao incorporar esses termos relacionados ao seu conteúdo, você sinaliza profundidade temática para os mecanismos de busca — um dos fatores de ranqueamento on-page mais poderosos para consultas informacionais.',
        image: '/Keyword Generator/see other semantically relevant keywords (secondary keyword) and their volume close to your main keyword.png',
      },
    ],
    faqs: [
      {
        question: 'O que é um gerador de palavras-chave e como ele funciona?',
        answer: 'Um gerador de palavras-chave é uma ferramenta de pesquisa que recebe uma palavra-chave semente — um termo ou frase ampla para a qual você deseja ranquear — e retorna uma lista de consultas de busca relacionadas que usuários reais digitam nos mecanismos de busca. O gerador de palavras-chave do Analyze AI funciona consultando um banco de dados de termos de busca, retornando até 50 ideias de palavras-chave por pesquisa e exibindo para cada uma o volume de busca mensal, score de dificuldade, custo por clique e nível de concorrência. O processo leva segundos e não requer conta nem login.',
      },
      {
        question: 'Como a dificuldade de palavra-chave (KD) é calculada nesta ferramenta?',
        answer: 'A dificuldade de palavra-chave é um score de 0 a 100 que estima quão difícil seria ranquear nos 10 primeiros resultados orgânicos para um determinado termo. O score considera a força dos backlinks e a autoridade de domínio das páginas atualmente posicionadas na primeira página do Google. Um KD de 0–10 é considerado fácil (sites novos podem competir), 11–30 é médio (requer conteúdo sólido e alguns backlinks), 31–60 é difícil (necessita autoridade forte e link building) e 61–100 é muito difícil (dominado por sites de alta autoridade como Wikipedia, Amazon ou grandes publicações).',
      },
      {
        question: 'Qual é a diferença entre volume de busca e dificuldade de palavra-chave?',
        answer: 'O volume de busca indica quantas pessoas pesquisam um termo por mês — ele mede a demanda. A dificuldade de palavra-chave indica quão competitivos são os resultados de busca para esse termo — ela mede a resistência do lado da oferta. Uma palavra-chave com 10.000 buscas mensais mas KD de 85 pode ser menos valiosa do que uma com 500 buscas e KD de 8, porque você pode realisticamente ranquear para a segunda. A melhor estratégia de palavras-chave equilibra ambas as métricas.',
      },
      {
        question: 'Como posso usar dados de CPC de uma ferramenta gratuita se eu só faço SEO?',
        answer: 'CPC (Custo Por Clique) reflete quanto os anunciantes estão dispostos a pagar por um único clique nessa palavra-chave no Google Ads. Mesmo que você não execute campanhas pagas, o CPC é um forte indicador de intenção comercial. Palavras-chave com CPCs altos (ex.: R$ 15+) indicam que empresas consideram esses pesquisadores valiosos — o que significa que estão mais próximos de uma decisão de compra. Segmentar palavras-chave de alto CPC com conteúdo SEO pode gerar tráfego que converte em taxas mais altas.',
      },
      {
        question: 'Quantas palavras-chave posso gerar por pesquisa?',
        answer: 'Cada pesquisa retorna até 50 ideias de palavras-chave a partir do termo semente inserido. Para gerar mais ideias, experimente variações da sua palavra-chave semente, use modificadores de cauda longa (ex.: "e-mail marketing para startups" em vez de "e-mail marketing") ou pesquise em diferentes países. Usuários avançados geralmente realizam 10–20 pesquisas de palavras-chave semente e compilam os resultados em uma lista mestra, que pode então ser deduplicada e priorizada por volume e dificuldade.',
      },
      {
        question: 'Posso usar esta ferramenta para pesquisa de palavras-chave de SEO local?',
        answer: 'Sim. O seletor de países suporta mais de 15 países, incluindo Estados Unidos, Reino Unido, Alemanha, França, Espanha, Itália, Brasil, Canadá, Austrália, Índia e Japão. Ao trocar o país, você vê dados de volume de busca localizados para aquele mercado. Isso é particularmente valioso para negócios locais, lojas de e-commerce regionais e agências que gerenciam campanhas de SEO em múltiplas localidades.',
      },
      {
        question: 'O que são palavras-chave semanticamente relacionadas e por que são importantes para SEO?',
        answer: 'Palavras-chave semanticamente relacionadas são termos conceitualmente conectados à sua palavra-chave principal, mesmo que não contenham exatamente as mesmas palavras. Por exemplo, para a palavra-chave semente "e-mail marketing", termos semanticamente relacionados podem incluir "automação de newsletter", "campanhas de drip" e "engajamento de assinantes". O Google usa Processamento de Linguagem Natural (PLN) para entender relações temáticas entre termos. Páginas que incluem naturalmente palavras-chave semanticamente relacionadas tendem a ranquear melhor porque sinalizam cobertura temática abrangente.',
      },
      {
        question: 'Como encontro palavras-chave de baixa concorrência com esta ferramenta?',
        answer: 'Ordene a tabela de resultados pela coluna KD (Dificuldade de Palavra-chave) em ordem crescente. Procure por palavras-chave com KD entre 0 e 15, volume de busca mensal acima de 100 e score de concorrência abaixo de 30. Estas são suas oportunidades mais fáceis — termos onde uma página bem otimizada com conteúdo original e aprofundado pode ranquear sem um investimento pesado em backlinks. Palavras-chave de cauda longa (3–5 palavras) tipicamente têm menor concorrência porque abordam intenções de busca mais específicas que grandes concorrentes frequentemente negligenciam.',
      },
      {
        question: 'O que é a coluna de pontuação de concorrência e como ela difere da dificuldade de palavra-chave?',
        answer: 'A pontuação de Concorrência mede quantos anunciantes estão fazendo lances em uma palavra-chave na busca paga (Google Ads). Uma pontuação de 100 significa que praticamente todos os espaços de anúncio estão preenchidos — alta concorrência entre anunciantes. A Dificuldade de Palavra-chave, por outro lado, mede a concorrência no ranqueamento orgânico baseada nos perfis de backlinks das páginas melhor posicionadas. Uma palavra-chave pode ter alta concorrência paga mas baixa dificuldade orgânica (ou vice-versa). Profissionais de marketing inteligentes cruzam ambas as métricas: alta concorrência paga com baixa dificuldade orgânica sinaliza uma palavra-chave lucrativa que você pode conquistar com SEO em vez de pagar por anúncios.',
      },
      {
        question: 'Posso exportar os resultados de palavras-chave?',
        answer: 'Sim. A ferramenta inclui um botão "Exportar CSV" no topo da tabela de resultados. Isso permite baixar a lista completa de palavras-chave — incluindo volume, KD, CPC e dados de concorrência — em uma planilha. A partir daí, você pode mesclar resultados de múltiplas pesquisas, aplicar filtros personalizados, criar calendários de conteúdo ou compartilhar os dados com redatores e membros da equipe de SEO.',
      },
      {
        question: 'Com que frequência os dados de palavras-chave são atualizados?',
        answer: 'O banco de dados de palavras-chave é atualizado regularmente para garantir precisão e relevância. Os valores de volume de busca são baseados em médias mensais móveis, o que suaviza picos de curto prazo e flutuações sazonais. Para temas em tendência ou setores em rápida evolução, é uma boa prática cruzar os dados da ferramenta de palavras-chave com o Google Trends para capturar o impulso em tempo real que pode ainda não estar refletido nos volumes mensais médios.',
      },
      {
        question: 'Como devo usar este gerador de palavras-chave como parte de um workflow de SEO mais amplo?',
        answer: 'O gerador de palavras-chave é tipicamente o primeiro passo em um workflow de conteúdo SEO de cinco etapas: (1) Descoberta — use esta ferramenta para gerar ideias de palavras-chave a partir de termos semente, (2) Qualificação — filtre por KD e volume para encontrar alvos viáveis, (3) Agrupamento — agrupe palavras-chave semanticamente relacionadas em clusters temáticos, (4) Criação de conteúdo — escreva páginas que visem palavras-chave primárias e incorporem naturalmente termos secundários, (5) Monitoramento — use um verificador de posições para acompanhar o desempenho das suas páginas ao longo do tempo.',
      },
    ],
  },

  'keyword-difficulty-checker': {
    slug: 'keyword-difficulty-checker',
    name: 'Verificador de Dificuldade de Palavra-chave',
    title: 'Verificador de Dificuldade de Palavra-chave Gratuito',
    description: 'Verifique quão difícil é ranquear para qualquer palavra-chave. Obtenha um score de dificuldade de 0–100 junto com volume de busca e dados de concorrência.',
    metaDescription: 'Verifique gratuitamente a dificuldade de ranqueamento de qualquer palavra-chave. Veja score KD, volume de busca e CPC para priorizar palavras-chave nas quais você realmente pode ranquear.',
    iconName: 'BarChart3',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Digite uma palavra-chave',
    inputPlaceholder: 'ex.: melhor software de gerenciamento de projetos',
    buttonText: 'Verificar Dificuldade',
    resultType: 'keyword-difficulty',
    metricsToShow: ['keyword_difficulty', 'search_volume', 'cpc'],
    apiEndpoint: 'keyword-difficulty',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemanha' },
          { value: '2250', label: 'França' },
          { value: '2724', label: 'Espanha' },
          { value: '2380', label: 'Itália' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Austrália' },
          { value: '2356', label: 'Índia' },
          { value: '2392', label: 'Japão' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Palavra-chave', sortable: true, type: 'text' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
    ],
    useCases: [
      {
        title: 'Avalie rapidamente se vale a pena segmentar uma palavra-chave',
        description: 'Antes de escrever uma única palavra de conteúdo, você precisa saber se pode realisticamente ranquear para sua palavra-chave alvo. Digite qualquer palavra-chave, selecione entre mais de 10 países no menu suspenso e obtenha uma avaliação instantânea de dificuldade. Este é o primeiro filtro em qualquer estratégia séria de conteúdo — ele evita que você desperdice semanas de esforço em palavras-chave onde os 10 primeiros resultados são dominados por sites com autoridades de domínio que você não consegue igualar. Use para avaliar solicitações de palavras-chave de clientes, validar ideias de temas para blog ou fazer uma triagem prévia de termos de sessões de brainstorming.',
        image: '/keyword difficulty checker/Check the difficulty of any keyword.png',
      },
      {
        title: 'Obtenha uma visão 360° da competitividade de qualquer palavra-chave',
        description: 'O painel de resultados mostra três métricas críticas lado a lado: Dificuldade de Palavra-chave (ex.: 58 "Difícil"), Volume de Busca (ex.: 1.900/mês) e CPC (ex.: US$ 32,40). Essa visão de três métricas oferece o panorama completo em uma única olhada. Uma palavra-chave com KD alto mas também CPC alto pode valer a pena ser perseguida com uma estratégia de construção de autoridade a longo prazo, porque a intenção comercial justifica o esforço. Por outro lado, uma palavra-chave com KD baixo e CPC zero pode gerar tráfego mas não receita. Use este painel para tomar decisões editoriais baseadas em dados.',
        image: '/keyword difficulty checker/see the keywords 360 competitiveness with cpc.png',
      },
      {
        title: 'Entenda o que um score de dificuldade realmente significa',
        description: 'O medidor de KD oferece uma representação visual e intuitiva da dificuldade de ranqueamento. O score vai de 0 a 100 com severidade codificada por cores: verde (Fácil, 0–20), amarelo (Médio, 21–40), laranja (Difícil, 41–60) e vermelho (Muito Difícil, 61–100). Essa visualização é especialmente útil quando você apresenta pesquisas de palavras-chave para stakeholders ou clientes que não trabalham com SEO diariamente e precisam de uma resposta visual rápida para "conseguimos ranquear para isso?".',
        image: '/keyword difficulty checker/see the keywords actual difficulty.png',
      },
      {
        title: 'Valide a demanda de busca antes de investir em conteúdo',
        description: 'O volume de busca é a base de todas as decisões de segmentação de palavras-chave. Este cartão isola a métrica de volume de busca mensal, permitindo confirmar que pessoas suficientes estão ativamente pesquisando por este termo para justificar a criação de conteúdo. Um erro comum em SEO é segmentar palavras-chave com volume zero ou insignificante simplesmente porque parecem relevantes. Essa verificação rápida previne isso — e quando combinada com o score KD, indica se a oportunidade é tanto real quanto alcançável.',
        image: '/keyword difficulty checker/see the keywords actual search volume.png',
      },
    ],
    faqs: [
      {
        question: 'O que é dificuldade de palavra-chave e por que devo verificá-la antes de criar conteúdo?',
        answer: 'Dificuldade de palavra-chave (KD) é uma métrica que estima quão difícil será ranquear nos 10 primeiros resultados orgânicos de busca para uma palavra-chave específica. É tipicamente pontuada em uma escala de 0–100. Verificar o KD antes de criar conteúdo é essencial porque evita que você invista tempo e dinheiro em páginas que têm quase nenhuma chance de ranquear. Se os 10 primeiros resultados para uma palavra-chave são todos páginas de sites como Forbes, HubSpot e Wikipedia — cada um com centenas de domínios referenciadores — um site novo ou de autoridade intermediária terá dificuldade para competir sem um investimento significativo em link building.',
      },
      {
        question: 'Como a dificuldade de palavra-chave difere da concorrência de palavra-chave?',
        answer: 'A dificuldade de palavra-chave mede a competitividade na busca orgânica — quão difícil é ranquear nos resultados não pagos do Google. É calculada com base na força dos backlinks das páginas atualmente no top 10. A concorrência de palavra-chave (às vezes chamada de densidade competitiva) mede a competitividade na busca paga — quantos anunciantes estão disputando essa palavra-chave no Google Ads. Uma palavra-chave pode ser fácil de ranquear organicamente (KD baixo) mas ter concorrência paga acirrada (score de competição alto), ou vice-versa.',
      },
      {
        question: 'Qual score KD devo mirar como um site novo?',
        answer: 'Sites novos (com menos de 1 ano, com menos de 50 domínios referenciadores) devem mirar palavras-chave com KD de 0–15. Estas são tipicamente consultas de cauda longa com 3–5 palavras para as quais sites maiores não otimizaram especificamente. Conforme sua autoridade de domínio cresce através da criação consistente de conteúdo e link building, você pode gradualmente mirar palavras-chave com scores KD de 15–30, depois 30–50. Tentar ranquear para palavras-chave com KD acima de 50 sem autoridade de domínio substancial quase sempre vai falhar, independentemente da qualidade do conteúdo.',
      },
      {
        question: 'Uma página pode ranquear para uma palavra-chave de alta dificuldade sem backlinks?',
        answer: 'É extremamente raro. A dificuldade de palavra-chave é amplamente determinada pelo número e qualidade dos backlinks apontando para as páginas mais bem posicionadas. Porém, existem casos excepcionais: se seu conteúdo oferece um ganho de informação significativamente melhor que os resultados existentes (por exemplo, pesquisa original, dados exclusivos ou um formato inovador), e seu domínio tem autoridade moderada, o Google pode testar sua página em posições mais altas. Dito isso, para scores KD acima de 40, backlinks são quase sempre um pré-requisito para ranqueamentos sustentados.',
      },
      {
        question: 'Por que a mesma palavra-chave tem scores de dificuldade diferentes em ferramentas diferentes?',
        answer: 'Cada ferramenta de SEO calcula a dificuldade de palavra-chave usando seu próprio algoritmo proprietário, índice de rastreamento e metodologia de ponderação. O Ahrefs enfatiza os domínios referenciadores para os top 10 resultados, o Moz usa suas próprias métricas de Page Authority e Domain Authority, e o SEMrush incorpora recursos adicionais de SERP e sinais de conteúdo. É por isso que uma palavra-chave pode mostrar KD 45 em uma ferramenta e KD 62 em outra. Os números absolutos são menos importantes do que o ranqueamento relativo — use a mesma ferramenta consistentemente para que suas comparações de dificuldade sejam comparações justas.',
      },
      {
        question: 'Qual o papel do CPC na avaliação da dificuldade de palavra-chave?',
        answer: 'CPC (Custo Por Clique) não afeta diretamente a dificuldade de ranqueamento orgânico, mas fornece contexto crítico. Uma palavra-chave com KD 55 e CPC US$ 0,50 sugere que, embora ranquear seja difícil, o retorno comercial é baixo. Uma palavra-chave com KD 55 e CPC US$ 32,40 conta outra história: esse tráfego é extremamente valioso para empresas, o que significa que ranquear organicamente para ela poderia substituir gastos significativos com anúncios. Quando duas palavras-chave têm scores KD similares, priorize a com CPC mais alto — isso sinaliza uma intenção de compra mais forte e maior potencial de ROI.',
      },
      {
        question: 'Como verifico a dificuldade de palavra-chave para um país específico?',
        answer: 'Use o menu suspenso de País no formulário de entrada da ferramenta para selecionar seu mercado-alvo. A dificuldade de palavra-chave pode variar significativamente entre países porque o cenário competitivo é diferente. Uma palavra-chave com KD 60 nos Estados Unidos pode ter KD 25 no Brasil ou KD 40 na Alemanha, simplesmente porque menos sites de alta autoridade estão competindo nesses mercados. Sempre verifique a dificuldade para o país específico onde seu público está, em vez de usar os dados dos EUA como padrão.',
      },
      {
        question: 'Qual é a relação entre dificuldade de palavra-chave e volume de busca?',
        answer: 'Geralmente, palavras-chave de maior volume tendem a ter maior dificuldade porque mais sites competem por termos de busca populares. Entretanto, nem sempre é o caso. Algumas palavras-chave de alto volume têm dificuldade surpreendentemente baixa (estas são oportunidades de ouro), e algumas palavras-chave de baixo volume têm dificuldade alta porque o nicho é dominado por especialistas autoritativos. O alvo ideal de palavra-chave tem um volume de busca acima do seu limite mínimo e um score KD dentro da faixa competitiva do seu domínio.',
      },
      {
        question: 'Devo evitar todas as palavras-chave de alta dificuldade?',
        answer: 'Não. Palavras-chave de alta dificuldade devem fazer parte da sua estratégia de conteúdo a longo prazo — elas representam seus objetivos aspiracionais. A abordagem é primeiro construir autoridade temática ranqueando para palavras-chave mais fáceis no mesmo cluster, depois usar linkagem interna e autoridade acumulada para competir pelos termos mais difíceis ao longo do tempo. Uma vez que essas páginas mais fáceis ranqueiem, elas fortalecem a autoridade temática do seu domínio e melhoram suas chances no termo principal mais competitivo.',
      },
      {
        question: 'Com que frequência devo verificar novamente a dificuldade de palavra-chave?',
        answer: 'Verifique a dificuldade de palavra-chave trimestralmente para suas palavras-chave-alvo principais. O cenário competitivo muda conforme novo conteúdo é publicado, backlinks são construídos e atualizações de algoritmo são implementadas. Uma palavra-chave que tinha KD 45 há seis meses pode agora ter KD 35 se uma página anteriormente bem posicionada perdeu backlinks ou foi desindexada. Monitorar o KD ao longo do tempo também ajuda você a acompanhar se seus próprios esforços de SEO estão fechando a lacuna competitiva.',
      },
      {
        question: 'O que significa a codificação de cores do KD (verde, amarelo, laranja, vermelho)?',
        answer: 'O medidor codificado por cores mapeia faixas de dificuldade: Verde (0–20) significa que a palavra-chave é relativamente fácil de ranquear e adequada para sites novos ou de baixa autoridade. Amarelo (21–40) significa concorrência moderada — você precisará de conteúdo decente e alguns backlinks. Laranja (41–60) indica concorrência difícil — conteúdo forte, SEO técnico e uma estratégia ativa de link building são necessários. Vermelho (61–100) sinaliza concorrência muito difícil — apenas domínios de alta autoridade com perfis extensos de backlinks tendem a manter essas posições.',
      },
      {
        question: 'Posso verificar a dificuldade de múltiplas palavras-chave de uma vez?',
        answer: 'A ferramenta gratuita verifica uma palavra-chave por vez, o que é ideal para verificações rápidas pontuais e validação de ideias individuais de palavras-chave. Para análise de dificuldade de palavras-chave em lote — verificando dezenas ou centenas de palavras-chave simultaneamente — você normalmente exportaria palavras-chave da ferramenta Gerador de Palavras-chave e as analisaria em uma planilha, ou usaria a coluna de KD que já aparece na tabela de resultados do Gerador de Palavras-chave.',
      },
    ],
  },

  'website-authority-checker': {
    slug: 'website-authority-checker',
    name: 'Verificador de Autoridade de Site',
    title: 'Verificador de Autoridade de Site Gratuito',
    description: 'Verifique gratuitamente a autoridade de busca orgânica de qualquer site. Veja tráfego orgânico estimado, palavras-chave ranqueadas, posições no top 10 e distribuição de ranqueamento por palavra-chave.',
    metaDescription: 'Verifique gratuitamente o score de autoridade de qualquer site. Veja força do domínio, tráfego orgânico, palavras-chave ranqueadas e distribuição de posições no SERP instantaneamente.',
    iconName: 'Globe',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Digite um domínio',
    inputPlaceholder: 'ex.: example.com',
    buttonText: 'Verificar Autoridade',
    resultType: 'domain-authority',
    metricsToShow: ['domain_score', 'organic_traffic', 'ranked_keywords', 'top_10'],
    apiEndpoint: 'website-authority',
    freeResultLimit: 1,
    options: [],
    tableColumns: [
      { key: 'position', label: 'Faixa de Posição', sortable: false, type: 'text' },
      { key: 'keywords', label: 'Palavras-chave', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Verifique a autoridade de domínio de qualquer site em segundos',
        description: 'Toda decisão de link building, análise de concorrentes e avaliação de parcerias começa com uma pergunta: quão autoritativo é este domínio? Insira qualquer domínio no verificador, clique em "Verificar Autoridade" e obtenha uma avaliação instantânea. Seja avaliando uma oportunidade de guest post, verificando um prospecto de backlink ou comparando seu domínio com concorrentes — este é o caminho mais rápido para medir a força geral de um site.',
        image: '/Website authority checker/Check the autority of any website.png',
      },
      {
        title: 'Entenda a distribuição de posições no SERP em todas as palavras-chave',
        description: 'Esta análise mostra para quantas palavras-chave um site ranqueia em cada faixa de posição do SERP: #1, #2–3, #4–10, #11–20 e assim por diante. Essa distribuição conta uma história mais profunda do que um único número de autoridade. Use isso para avaliar a trajetória de crescimento do seu próprio site e identificar concorrentes cujos ranqueamentos você pode realisticamente desafiar.',
        image: '/Website authority checker/See any websites keywords ranking.png',
      },
      {
        title: 'Avalie o tráfego e a escala de ranqueamento de um domínio',
        description: 'O painel de métricas mostra Tráfego Orgânico, total de Palavras-chave Ranqueadas e Palavras-chave nas Posições 1–10. Esses números contextualizam o score de autoridade com dados de desempenho. Essa visão multi-métrica previne decisões baseadas em uma única métrica e oferece o panorama competitivo completo.',
        image: '/Website authority checker/See other details as traffick rankings positions.png',
      },
      {
        title: 'Veja o score real de autoridade com classificação de severidade',
        description: 'O medidor de Domain Score exibe uma classificação de 0–100 com severidade codificada por cores e um rótulo (ex.: "99 — Muito Forte" para hubspot.com). O medidor visual torna os scores de autoridade imediatamente interpretáveis. Use isso para definir expectativas realistas. Essa visualização também é ideal para relatórios de clientes e apresentações para stakeholders.',
        image: '/Website authority checker/See the actual authority score of your website. Score out of 100.png',
      },
    ],
    faqs: [
      {
        question: 'O que é autoridade de site e como ela é medida?',
        answer: 'Autoridade de site (também chamada de autoridade de domínio ou força de domínio) é uma métrica de SEO que estima o poder total de ranqueamento de um domínio com base na quantidade e qualidade dos backlinks apontando para ele. É medida em uma escala logarítmica de 0–100, o que significa que fica exponencialmente mais difícil aumentar seu score conforme você sobe. Um score de 30 é relativamente fácil de alcançar com link building básico, enquanto passar de 70 para 80 exige significativamente mais backlinks de alta qualidade do que passar de 20 para 30.',
      },
      {
        question: 'Qual é um bom score de autoridade de site?',
        answer: 'A autoridade é relativa ao seu cenário competitivo. Um Domain Score de 40 pode ser excelente em um nicho onde os concorrentes têm média de 25, mas fraco em um espaço onde a média dos concorrentes é 70. Como referências gerais: 0–20 é novo ou subdesenvolvido, 21–40 é em desenvolvimento (típico de pequenas e médias empresas), 41–60 é estabelecido (competitivo na maioria dos nichos), 61–80 é forte (competitivo para palavras-chave de alto valor) e 81–100 é elite (grandes marcas, veículos de imprensa e plataformas de alta autoridade).',
      },
      {
        question: 'A autoridade do site é um fator de ranqueamento do Google?',
        answer: 'O Google declarou publicamente que "autoridade de domínio" não é um fator de ranqueamento direto em seu algoritmo. No entanto, pesquisas mostram consistentemente uma forte correlação entre autoridade de domínio e ranqueamento de palavras-chave. A conclusão prática é que, embora o Google possa não usar diretamente os scores de autoridade de terceiros, os sinais subjacentes (qualidade dos backlinks, contagem de domínios referenciadores, diversidade de links) são fatores de ranqueamento fundamentais. Os scores de autoridade são o melhor indicador disponível para esses sinais.',
      },
      {
        question: 'Como o Domain Score difere do Domain Authority (DA) da Moz?',
        answer: 'Ambas as métricas visam medir a força do domínio em uma escala de 0–100, mas usam metodologias de cálculo e fontes de dados diferentes. O DA da Moz é baseado em seu próprio índice de links e usa um modelo de machine learning para prever a capacidade de ranqueamento. Outras métricas de Domain Score utilizam seus próprios índices de rastreamento e fórmulas de cálculo. Os scores não são intercambiáveis — um site pode ter DA 45 na Moz e Domain Score 52 em outra ferramenta. O que importa é a consistência: use a mesma ferramenta para todas as comparações.',
      },
      {
        question: 'Como melhoro o score de autoridade do meu site?',
        answer: 'A única forma confiável de aumentar a autoridade de domínio é adquirindo backlinks de mais domínios referenciadores únicos — especialmente domínios que são eles próprios autoritativos. As estratégias eficazes incluem: criação de conteúdo digno de links (pesquisas originais, guias abrangentes, ferramentas gratuitas), guest posting em publicações do setor, ações de digital PR e assessoria de imprensa, broken link building, link building em páginas de recursos e construção de relacionamentos com profissionais do setor.',
      },
      {
        question: 'O que as métricas de Tráfego Orgânico e Palavras-chave Ranqueadas me dizem sobre autoridade?',
        answer: 'Essas métricas contextualizam o score de autoridade com dados de desempenho. Um score de autoridade alto com tráfego orgânico baixo sugere que o domínio tem um perfil de backlinks forte, mas conteúdo fraco ou segmentação de palavras-chave deficiente. Tráfego alto com autoridade moderada indica conteúdo forte que supera o desempenho esperado pelo seu perfil de links. A métrica de Palavras-chave nas Posições 1–10 revela quantas palavras-chave um domínio realmente domina na primeira página — esta é a medida definitiva da autoridade competitiva em ação.',
      },
      {
        question: 'O que é a tabela de distribuição de posições e como leio ela?',
        answer: 'A tabela de distribuição de posições mostra para quantas palavras-chave um domínio ranqueia em diferentes posições do SERP: #1, #2–3, #4–10, #11–20, #21–30 e assim por diante. Um site saudável e em crescimento apresenta uma forma de pirâmide — menos palavras-chave na posição #1, mais nas posições #2–10 e progressivamente mais nas posições inferiores. Se a maioria das palavras-chave se concentra nas posições #41–100, o site tem visibilidade, mas falta a autoridade ou a qualidade de conteúdo necessária para chegar à primeira página.',
      },
      {
        question: 'Posso usar a autoridade do site para avaliar prospectos de backlink?',
        answer: 'Sim — este é um dos casos de uso mais comuns. Ao construir backlinks, priorize sites com Domain Scores acima de 30 e idealmente acima de 50 para máxima transferência de link equity. No entanto, o score de autoridade sozinho não é suficiente. Verifique também se o site publica conteúdo de qualidade, possui alinhamento temático relevante com o seu nicho, recebe tráfego orgânico real e tem um perfil natural de links de saída.',
      },
      {
        question: 'Por que alguns sites têm alta autoridade mas baixo tráfego?',
        answer: 'Isso acontece por vários motivos: o site acumulou backlinks ao longo dos anos mas não cria ativamente conteúdo direcionado a palavras-chave de busca, o conteúdo do site está desatualizado e não corresponde mais à intenção de busca atual, o site foi penalizado pelo Google por outros problemas de qualidade apesar de ter backlinks fortes, ou o site está em um nicho de baixo volume onde mesmo ranqueamentos na primeira página não geram tráfego massivo.',
      },
      {
        question: 'Com que frequência a autoridade do site muda?',
        answer: 'Os scores de autoridade flutuam conforme os dados de backlinks subjacentes são rastreados e atualizados novamente. Novos backlinks aumentam seu score; backlinks perdidos o diminuem. Mudanças significativas normalmente levam de 4 a 8 semanas para serem refletidas nas métricas de autoridade. Aumentos graduais de 1 a 3 pontos por mês são típicos para sites que constroem links ativamente. Quedas repentinas podem indicar a perda de backlinks importantes ou um recálculo por parte da ferramenta de avaliação.',
      },
      {
        question: 'Qual é a relação entre autoridade do site e link equity?',
        answer: 'A autoridade do site é essencialmente um resumo do link equity acumulado. Cada backlink de um site externo transfere algum link equity para o seu domínio, e o total de equity acumulado se reflete no seu score de autoridade. Domínios referenciadores com maior autoridade transferem mais link equity. Páginas em domínios de alta autoridade herdam o equity no nível do domínio, obtendo uma vantagem inicial nos ranqueamentos.',
      },
      {
        question: 'Devo focar em aumentar meu score de autoridade ou meu tráfego orgânico?',
        answer: 'Foque no tráfego orgânico — autoridade é um meio para esse fim, não um objetivo em si. A estratégia mais eficaz é construir links simultaneamente (aumentando a autoridade) e criar conteúdo direcionado a palavras-chave (capturando tráfego). Um score de autoridade alto sem conteúdo direcionado não gera tráfego. Conteúdo excelente sem autoridade tem dificuldade para ranquear em palavras-chave competitivas. Os dois trabalham de forma sinérgica.',
      },
    ],
  },

  'serp-checker': {
    slug: 'serp-checker',
    name: 'Verificador de SERP',
    title: 'Verificador de SERP Gratuito',
    description: 'Confira os resultados de busca do Google para qualquer palavra-chave. Veja quem está ranqueando nas 10 primeiras posições orgânicas, com títulos, URLs e domínios.',
    metaDescription: 'Analise os principais resultados do Google para qualquer palavra-chave em qualquer país. Veja ranqueamentos, domínios, URLs e total de resultados para planejar sua estratégia de SEO.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'keyword',
    inputLabel: 'Digite uma palavra-chave',
    inputPlaceholder: 'ex.: melhores ferramentas de gerenciamento de projetos',
    buttonText: 'Verificar SERP',
    resultType: 'serp-results',
    metricsToShow: ['total_results', 'organic_results'],
    apiEndpoint: 'serp-checker',
    freeResultLimit: 10,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemanha' },
          { value: '2250', label: 'França' },
          { value: '2724', label: 'Espanha' },
          { value: '2380', label: 'Itália' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Austrália' },
          { value: '2356', label: 'Índia' },
          { value: '2392', label: 'Japão' },
          { value: '2528', label: 'Países Baixos' },
          { value: '2792', label: 'Turquia' },
          { value: '2410', label: 'Coreia do Sul' },
          { value: '2484', label: 'México' },
        ],
      },
    ],
    tableColumns: [
      { key: 'position', label: '#', sortable: true, type: 'number' },
      { key: 'title', label: 'Título', sortable: false, type: 'text' },
      { key: 'domain', label: 'Domínio', sortable: true, type: 'text' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Confira o SERP do Google para qualquer palavra-chave em qualquer país',
        description: 'Entender o que está ranqueando atualmente é a base de qualquer campanha de SEO. Digite uma palavra-chave, selecione seu país-alvo entre mais de 15 opções e veja instantaneamente o cenário atual do SERP. Isso mostra quem são seus concorrentes, quais formatos de conteúdo dominam e quão disputado é o espaço. SEOs internacionais usam o seletor de países para comparar composições de SERP entre mercados.',
        image: '/SERP Checker/Check the SERP for any keyword for any given country.png',
      },
      {
        title: 'Analise os tipos de conteúdo e domínios que ranqueiam',
        description: 'A exibição de resultados do SERP mostra Total de Resultados, contagem de Resultados Orgânicos e as páginas que efetivamente ranqueiam com seus títulos, URLs e descrições. Isso permite analisar padrões de formato de conteúdo: os primeiros resultados são posts de blog, páginas de produto, artigos comparativos ou ferramentas? Essa inteligência indica exatamente qual formato de conteúdo o Google recompensa para essa consulta.',
        image: '/SERP Checker/Find the different types of content that rank on the SERP.png',
      },
      {
        title: 'Avalie a competitividade do SERP antes de segmentar uma palavra-chave',
        description: 'Antes de comprometer recursos em uma palavra-chave, passe-a pelo Verificador de SERP para ver contra quem você competiria. Se o SERP é dominado por sites com autoridade massiva (Amazon, Wikipedia, sites governamentais), essa palavra-chave pode exigir uma abordagem diferente. Se o SERP inclui sites menores ou mais novos, existe um caminho realista para ranquear.',
        image: '/SERP Checker/See how competitive any keyword is on the SERP.png',
      },
      {
        title: 'Acompanhe a posição da sua marca para palavras-chave alvo',
        description: 'A tabela detalhada de resultados mostra Título, Domínio e URL completa para cada posição de ranqueamento. Navegue pelos resultados para encontrar se o seu site (ou o do seu concorrente) aparece nos resultados. Use isso para verificar dados de rastreamento de posição, conferir palavras-chave críticas antes de reuniões com clientes ou confirmar que uma página recém-publicada entrou no SERP.',
        image: '/SERP Checker/See your brands ranking for any keyword on the SERP.png',
      },
    ],
    faqs: [
      {
        question: 'O que é um verificador de SERP e por que preciso de um?',
        answer: 'Um verificador de SERP (Search Engine Results Page) mostra os resultados reais de busca do Google para qualquer palavra-chave em qualquer país, sem os vieses de personalização do seu próprio navegador. Quando você pesquisa no Google por conta própria, seus resultados são influenciados pelo seu histórico de buscas, localização, dispositivo e conta Google conectada. Um verificador de SERP oferece uma visão neutra e imparcial dos ranqueamentos — os mesmos resultados que um pesquisador de primeira vez veria.',
      },
      {
        question: 'Como o verificador de SERP lida com resultados baseados em localização?',
        answer: 'A ferramenta usa o seletor de países para simular buscas a partir do índice do Google do país selecionado (por exemplo, google.com para os EUA, google.co.uk para o Reino Unido, google.de para a Alemanha). A composição do SERP pode variar dramaticamente entre países — domínios diferentes ranqueiam, formatos de conteúdo diferentes aparecem e até o número de recursos do SERP pode mudar. Sempre verifique o SERP do seu país-alvo, não apenas o padrão dos EUA.',
      },
      {
        question: 'O que significam "Total de Resultados" e "Resultados Orgânicos"?',
        answer: '"Total de Resultados" é o número que o Google reporta para páginas correspondentes. Este é um indicador aproximado da abrangência do tópico, mas não é confiável para análise de concorrência. "Resultados Orgânicos" conta quantos resultados tradicionais de link azul aparecem na primeira página. Se um SERP mostra apenas 8 resultados orgânicos em vez dos 10 padrão, o espaço restante é ocupado por recursos do SERP como featured snippets, mapas, vídeos ou caixas "As pessoas também perguntam".',
      },
      {
        question: 'Como posso usar dados do SERP para determinar o formato de conteúdo?',
        answer: 'Analise os 10 primeiros resultados e categorize-os: são guias passo a passo, listas, páginas de ferramentas, artigos comparativos, páginas de produto ou resultados em vídeo? Se 7 dos 10 resultados são listas, o Google determinou que os pesquisadores querem conteúdo em formato de lista para essa palavra-chave. Criar um formato diferente provavelmente terá desempenho inferior. Siga o formato dominante e depois se diferencie através de maior profundidade, atualidade, dados exclusivos ou melhor experiência do usuário.',
      },
      {
        question: 'Por que os SERPs diferem entre desktop e mobile?',
        answer: 'O Google mantém algoritmos de ranqueamento separados para busca em desktop e mobile. SERPs mobile priorizam páginas mobile-friendly, dão mais peso a métricas de velocidade de página e exibem recursos de SERP diferentes. Uma página ranqueando em 3o lugar no desktop pode ficar em 7o no mobile se tiver uma experiência mobile ruim. Sempre verifique ambas as versões se seu público está distribuído entre dispositivos, e priorize a otimização mobile já que o Google utiliza indexação mobile-first.',
      },
      {
        question: 'O que são recursos do SERP e como eles afetam minha taxa de cliques?',
        answer: 'Recursos do SERP são resultados não tradicionais incluindo featured snippets, caixas "As pessoas também perguntam", carrosséis de vídeo, pacotes de imagens, painéis de conhecimento, pacotes de mapa local e resultados de shopping. Cada recurso que aparece reduz cliques nos resultados orgânicos — um fenômeno chamado "canibalização de recursos do SERP". Se um SERP está carregado de recursos, mesmo um ranqueamento orgânico na 1a posição pode receber menos cliques do que o esperado.',
      },
      {
        question: 'Com que frequência os SERPs do Google mudam para uma determinada palavra-chave?',
        answer: 'A volatilidade do SERP varia por tipo de palavra-chave. Palavras-chave informacionais perenes podem ter SERPs estáveis que mudam pouco ao longo dos meses. Palavras-chave relacionadas a notícias e tendências podem experimentar uma mudança completa do SERP em horas. Palavras-chave comerciais e competitivas tipicamente apresentam mudanças graduais conforme páginas ganham ou perdem backlinks e atualizações de algoritmo são implementadas. Verificar SERPs mensalmente para suas palavras-chave principais ajuda a detectar novos concorrentes.',
      },
      {
        question: 'Posso usar dados do SERP para análise de lacunas competitivas?',
        answer: 'Com certeza. Pesquise a mesma palavra-chave em múltiplas verificações de SERP e note quais domínios aparecem consistentemente no top 10. Domínios que ranqueiam para muitas das suas palavras-chave alvo são seus principais concorrentes de SEO (que podem ser diferentes dos seus concorrentes comerciais). Analise o que essas páginas ranqueadas têm em comum — extensão do conteúdo, estrutura, quantidade de backlinks, atualidade do conteúdo — e identifique lacunas onde seu conteúdo poderia ser superior.',
      },
      {
        question: 'O que significa se meu site aparece no SERP mas em uma posição baixa?',
        answer: 'Se sua página aparece nas posições 11–30 (página 2–3 do Google), significa que o Google reconheceu seu conteúdo como relevante, mas ainda não o considera autoritativo ou abrangente o suficiente para a primeira página. Este é na verdade um sinal positivo — você está na faixa de "distância de ataque". Melhorias que podem levá-lo à primeira página incluem adicionar conteúdo mais abrangente, construir de 3 a 5 backlinks de qualidade, melhorar a velocidade da página e adicionar links internos de suporte.',
      },
      {
        question: 'Como uso o verificador de SERP para encontrar oportunidades de featured snippet?',
        answer: 'Verifique SERPs para suas palavras-chave alvo e procure consultas onde um featured snippet já aparece. Em seguida, examine se o conteúdo do snippet poderia ser melhorado. Mire em palavras-chave onde você já ranqueia nas posições 1–10, pois o Google puxa featured snippets principalmente de páginas que já estão na primeira página. Crie respostas mais abrangentes formatadas especificamente para extração de snippets, usando cabeçalhos claros, listas numeradas, tabelas ou respostas em parágrafos concisos.',
      },
      {
        question: 'Qual papel a estrutura de URL desempenha no desempenho do SERP?',
        answer: 'O verificador de SERP mostra URLs completas para cada resultado ranqueado, o que revela padrões de estrutura de URL. URLs limpas e descritivas que incluem a palavra-chave alvo tendem a aparecer com mais frequência nas primeiras posições. URLs longas, cheias de parâmetros ou com strings de caracteres aleatórios têm desempenho pior. Analise os padrões de URL das páginas mais bem ranqueadas — se todos os primeiros resultados usam slugs curtos e ricos em palavras-chave, isso é um sinal para seguir o mesmo padrão.',
      },
      {
        question: 'Os dados do verificador de SERP podem ajudar com campanhas de PPC?',
        answer: 'Sim. Os dados do SERP revelam o cenário competitivo orgânico, o que informa a estratégia de busca paga: se os resultados orgânicos são dominados por concorrentes massivos, o PPC pode ser um caminho mais rápido para visibilidade. Os formatos de conteúdo nos resultados orgânicos indicam a intenção do usuário — alinhe sua landing page de anúncios a essa intenção para obter Quality Scores mais altos. Se poucos anúncios aparecem no SERP, há baixa concorrência paga e CPCs potencialmente mais baratos.',
      },
    ],
  },

  'keyword-rank-checker': {
    slug: 'keyword-rank-checker',
    name: 'Verificador de Posição de Palavra-chave',
    title: 'Verificador de Posição de Palavra-chave Gratuito',
    description: 'Verifique para quais palavras-chave qualquer site está ranqueando no Google. Veja posições de ranqueamento, volumes de busca e tráfego estimado para cada palavra-chave.',
    metaDescription: 'Verifique gratuitamente os ranqueamentos de palavras-chave do seu site em qualquer país. Veja posições, tráfego, CPC e desempenho de conteúdo em todas as suas páginas.',
    iconName: 'BarChart3',
    category: 'serp-ranking',
    inputType: 'keyword-url',
    inputLabel: 'Digite um domínio',
    inputPlaceholder: 'ex.: example.com',
    secondaryInputLabel: 'Filtrar por palavra-chave (opcional)',
    secondaryInputPlaceholder: 'ex.: marketing',
    buttonText: 'Verificar Posições',
    resultType: 'rank-position',
    metricsToShow: ['total_keywords', 'top_3', 'top_10', 'top_50'],
    apiEndpoint: 'keyword-rank-checker',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemanha' },
          { value: '2250', label: 'França' },
          { value: '2724', label: 'Espanha' },
          { value: '2380', label: 'Itália' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Austrália' },
          { value: '2356', label: 'Índia' },
          { value: '2392', label: 'Japão' },
          { value: '2528', label: 'Países Baixos' },
          { value: '2792', label: 'Turquia' },
          { value: '2410', label: 'Coreia do Sul' },
          { value: '2484', label: 'México' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Palavra-chave', sortable: true, type: 'text' },
      { key: 'position', label: 'Posição', sortable: true, type: 'number' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'traffic', label: 'Tráfego', sortable: true, type: 'number' },
      { key: 'url', label: 'URL', sortable: false, type: 'url' },
    ],
    useCases: [
      {
        title: 'Verifique os ranqueamentos do seu site no SERP de qualquer país',
        description: 'Saber onde você está ranqueando é o placar do SEO. Insira seu domínio, opcionalmente filtre por uma palavra-chave específica, selecione seu país e veja exatamente onde seu site aparece nos resultados do Google. O filtro de palavra-chave é especialmente poderoso — em vez de vasculhar centenas de ranqueamentos, você pode verificar instantaneamente um termo-alvo específico. Marcas internacionais e agências multimercado usam o seletor de países para rastrear ranqueamentos separadamente para cada mercado em que atuam.',
        image: '/Rank checker/Check the rank of your website on any countrys SERP.png',
      },
      {
        title: 'Espione os ranqueamentos de concorrentes entre países',
        description: 'Insira o domínio de qualquer concorrente e selecione entre mais de 15 países para ver seu perfil completo de ranqueamento. Isso revela quais palavras-chave eles estão ganhando, quais mercados priorizam e onde sua estratégia de SEO é mais forte. Agências usam isso durante auditorias de concorrência e onboarding de novos clientes para mapear o cenário competitivo.',
        image: '/Rank checker/Check how your competitors rank on Google.png',
      },
      {
        title: 'Analise o desempenho de conteúdo no nível de palavra-chave',
        description: 'A tabela de resultados mostra cada palavra-chave ranqueada junto com sua Posição, Volume de Busca, CPC, Tráfego estimado e a URL específica que está ranqueando. Essa visão no nível de página permite identificar seu conteúdo de melhor desempenho e seus conteúdos abaixo do esperado.',
        image: '/Rank checker/See your websites content performance.png',
      },
      {
        title: 'Entenda a competitividade geral de ranqueamento do seu site',
        description: 'O painel resumo decompõe Total de Palavras-chave, Top 3, Top 10 e Top 50. Essa distribuição mostra instantaneamente onde seu site está posicionado. Acompanhe esses números mensalmente para medir se sua estratégia de SEO está movendo palavras-chave para cima nas posições do SERP.',
        image: '/Rank checker/Understand your sites ranking and competitivement across keywords.png',
      },
    ],
    faqs: [
      {
        question: 'O que é um verificador de posição de palavra-chave e como difere de um verificador de SERP?',
        answer: 'Um verificador de posição de palavra-chave indica onde SEU site específico (ou qualquer domínio) ranqueia para palavras-chave. Você insere um domínio e ele retorna as palavras-chave e posições desse site. Um verificador de SERP mostra TODOS os sites que ranqueiam para uma palavra-chave específica. Pense da seguinte forma: um verificador de posição responde "para quais palavras-chave meu site ranqueia?", enquanto um verificador de SERP responde "quem ranqueia para esta palavra-chave?". Ambas as ferramentas são essenciais.',
      },
      {
        question: 'Quão precisos são os resultados do verificador de posição?',
        answer: 'Os resultados do verificador de posição refletem os ranqueamentos orgânicos do Google no momento da consulta, baseados no país selecionado e configurações de busca padrão (não personalizadas). Os resultados podem diferir ligeiramente do que você vê ao pesquisar diretamente no Google, pois seu navegador personaliza os resultados com base no seu histórico de pesquisa, localização e conta conectada. Sempre use uma ferramenta de verificação de posição em vez de buscas manuais no Google ao rastrear ranqueamentos.',
      },
      {
        question: 'O que significa a decomposição "Top 3", "Top 10" e "Top 50"?',
        answer: 'Palavras-chave "Top 3" são suas posições mais fortes (as posições 1 a 3 capturam aproximadamente 60% de todos os cliques orgânicos de uma consulta). "Top 10" significa primeira página do Google, onde praticamente todo o tráfego orgânico flui. "Top 50" captura as páginas 1 a 5, que representam seu universo visível de palavras-chave. Palavras-chave fora do top 50 raramente geram tráfego mensurável.',
      },
      {
        question: 'Como posso mover palavras-chave da página 2 para a página 1 do Google?',
        answer: 'Palavras-chave ranqueando nas posições 11 a 20 são seus alvos de otimização de maior prioridade. As táticas incluem: atualizar e expandir o conteúdo para melhor corresponder à intenção de busca, construir 3 a 5 backlinks de qualidade para a página específica, melhorar a title tag e meta description para aumentar a taxa de cliques, adicionar links internos a partir das suas páginas de maior autoridade, melhorar a velocidade da página e os Core Web Vitals, e adicionar marcação de dados estruturados.',
      },
      {
        question: 'Com que frequência devo verificar meus ranqueamentos de palavras-chave?',
        answer: 'Verifique suas palavras-chave-alvo principais (as 10 a 20 palavras-chave mais importantes para o seu negócio) semanalmente. Verifique seu portfólio mais amplo de palavras-chave mensalmente. Evite verificações diárias — os ranqueamentos flutuam naturalmente de 1 a 3 posições em qualquer dia devido aos ajustes de algoritmo do Google, testes e atualizações de índice.',
      },
      {
        question: 'Por que meus ranqueamentos diferem entre países?',
        answer: 'O Google mantém índices de busca e algoritmos de ranqueamento separados para cada país. Os fatores que influenciam os ranqueamentos específicos de cada país incluem idioma e localização do conteúdo, localização do servidor e presença de CDN, backlinks específicos do país, sinais de negócio local, implementação de tags hreflang, e comportamento de busca e concorrência específicos do país.',
      },
      {
        question: 'O que a coluna de Tráfego estima e quão confiável é?',
        answer: 'A coluna de Tráfego estima as visitas orgânicas mensais que uma palavra-chave envia para sua URL com base na posição de ranqueamento e no volume de busca da palavra-chave. Ela usa modelos de taxa de cliques — a posição #1 recebe aproximadamente 27 a 31% dos cliques, a #2 recebe 15 a 17%, a #3 recebe 10 a 12%, e assim por diante. São estimativas, não números exatos, mas são direcionalmente precisas.',
      },
      {
        question: 'Como uso dados de posição para identificar oportunidades de otimização de conteúdo?',
        answer: 'Procure páginas ranqueando nas posições 4 a 15 para palavras-chave de alto volume — estes são seus alvos de otimização com maior ROI. Em seguida, analise por que não estão ranqueando mais alto: o conteúdo é menos abrangente do que o dos concorrentes? A página tem menos backlinks? A title tag é menos atraente? Compare sua página com os 3 primeiros resultados atuais para cada palavra-chave.',
      },
      {
        question: 'O que os dados de CPC em um verificador de posição me dizem sobre meus ranqueamentos?',
        answer: 'O CPC revela o valor comercial de cada palavra-chave para a qual você ranqueia. Se você ranqueia em #3 para uma palavra-chave com CPC de US$ 25, essa posição está economizando gastos significativos com publicidade — você está recebendo esses cliques gratuitamente que custariam US$ 25 cada um via Google Ads. Multiplique o tráfego estimado pelo CPC para calcular o "valor de tráfego" de cada ranqueamento.',
      },
      {
        question: 'Posso filtrar resultados de posição por palavras-chave específicas?',
        answer: 'Sim. O campo opcional "Filtrar por palavra-chave" permite inserir uma palavra-chave ou frase específica para restringir os resultados. Isso é útil quando você deseja verificar seus ranqueamentos para um cluster temático específico em vez de visualizar todas as palavras-chave de uma vez. Essa capacidade de filtragem torna a ferramenta prática mesmo para sites que ranqueiam para centenas ou milhares de palavras-chave.',
      },
      {
        question: 'Como acompanho melhorias de ranqueamento ao longo do tempo?',
        answer: 'Exporte seus dados de ranqueamento em CSV cada vez que fizer uma verificação e compare as mudanças de posição mês a mês. Crie uma planilha simples rastreando suas 20 principais palavras-chave, suas posições a cada mês e a direção da mudança. Ao longo de 3 a 6 meses, você deve observar uma tendência clara: palavras-chave movendo-se gradualmente em direção às posições 1 a 10 indicam uma estratégia de SEO que está funcionando.',
      },
      {
        question: 'Qual é a diferença entre a coluna URL do verificador de posição e o verificador de SERP?',
        answer: 'A coluna URL do verificador de posição mostra qual página específica no SEU domínio ranqueia para cada palavra-chave. Isso é poderoso para a gestão de SEO interno: você pode ver se a página correta está ranqueando, identificar canibalização de palavras-chave (duas das suas páginas competindo pela mesma palavra-chave) e descobrir páginas que ranqueiam para termos inesperados. O verificador de SERP mostra todos os domínios que ranqueiam para uma palavra-chave.',
      },
    ],
  },

  'youtube-keyword-tool': {
    slug: 'youtube-keyword-tool',
    name: 'Ferramenta de Palavras-chave para YouTube',
    title: 'Ferramenta de Palavras-chave para YouTube Gratuita',
    description: 'Encontre as melhores palavras-chave para seus vídeos do YouTube. Obtenha dados de volume de busca, dificuldade e CPC para otimizar títulos, descrições e tags dos seus vídeos.',
    metaDescription: 'Encontre ideias de palavras-chave para YouTube em qualquer nicho. Veja volume de busca, dificuldade e CPC para planejar conteúdo em vídeo que seja descoberto e ranqueado.',
    iconName: 'Youtube',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Digite uma palavra-chave para YouTube',
    inputPlaceholder: 'ex.: como editar vídeos',
    buttonText: 'Encontrar Palavras-chave',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'youtube-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemanha' },
          { value: '2250', label: 'França' },
          { value: '2724', label: 'Espanha' },
          { value: '2380', label: 'Itália' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Austrália' },
          { value: '2356', label: 'Índia' },
          { value: '2392', label: 'Japão' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Palavra-chave', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Concorrência', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Pesquise temas de vídeo que as pessoas realmente estão buscando',
        description: 'O YouTube é o segundo maior mecanismo de busca do mundo, e a maioria dos criadores fracassa porque produz vídeos que ninguém está buscando. Digite uma palavra-chave como "como editar um vídeo", selecione seu país-alvo e veja instantaneamente o que os usuários do YouTube estão digitando na barra de pesquisa. Isso substitui suposições por dados — em vez de torcer para que um tema de vídeo tenha bom desempenho, você sabe antecipadamente que existe demanda real. Criadores de conteúdo, profissionais de vídeo marketing e gestores de canais do YouTube usam esta ferramenta como ponto de partida para cada calendário editorial.',
        image: '/Youtube keyword tool/Research and plan your youtube content better.png',
      },
      {
        title: 'Avalie o cenário competitivo de palavras-chave do YouTube',
        description: 'A tabela de resultados mostra cada palavra-chave junto com seu Volume específico do YouTube, Dificuldade de Palavra-chave (KD), CPC e Score de Concorrência. Isso permite identificar quais temas de vídeo são alcançáveis para o tamanho do seu canal. Um canal pequeno com menos de 1.000 inscritos deve mirar palavras-chave com KD abaixo de 20, enquanto canais estabelecidos podem competir por termos de maior dificuldade. A coluna CPC também revela quais palavras-chave atraem gastos publicitários — útil se sua estratégia de monetização depende da receita de anúncios do YouTube, já que palavras-chave com CPC mais alto geralmente geram RPMs melhores.',
        image: '/Youtube keyword tool/See how competitive your youtube content ideas are.png',
      },
      {
        title: 'Meça a viabilidade geral do tema antes de se comprometer com uma série de conteúdo',
        description: 'O painel resumo mostra Total de Palavras-chave (50), Volume Médio e Dificuldade Média para o cluster de palavras-chave ao redor do seu termo semente. Isso revela se um tema tem profundidade e demanda suficientes para sustentar uma série de vídeos. Se o volume médio for forte e a dificuldade média for administrável, você tem sinal verde para planejar uma série de conteúdo com múltiplos vídeos sobre o tema. Se os números forem fracos, mude de direção antes de investir tempo de produção. A produção de vídeo é cara — essa verificação de 10 segundos pode economizar horas de esforço desperdiçado.',
        image: '/Youtube keyword tool/See the search volume of your content ideas on youtube.png',
      },
      {
        title: 'Incorpore relevância semântica em títulos, tags e descrições de vídeos',
        description: 'O algoritmo do YouTube, assim como o do Google, recompensa conteúdo que demonstra profundidade temática. Esta visualização mostra palavras-chave relacionadas e seus volumes de busca, que devem ser incorporadas no título do vídeo, descrição, tags e até mesmo no diálogo falado (o YouTube transcreve e indexa o áudio). Por exemplo, se sua palavra-chave principal é "como editar um vídeo", termos relacionados como "criador de clipes de vídeo", "software de edição de vídeo reverso" e "proporção de aspecto vídeo youtube" devem aparecer naturalmente nos seus metadados. Essa otimização semântica melhora drasticamente a descoberta nas buscas relacionadas.',
        image: '/Youtube keyword tool/Use related keywords to make your youtube video semantically relevant.png',
      },
    ],
    faqs: [
      {
        question: 'Por que preciso de uma ferramenta de palavras-chave específica para YouTube em vez de uma ferramenta regular?',
        answer: 'YouTube e Google são mecanismos de busca separados com algoritmos, comportamentos de usuário e padrões de busca diferentes. Uma palavra-chave que recebe 10.000 buscas no Google pode receber apenas 200 no YouTube e vice-versa. Ferramentas de palavras-chave para YouTube extraem dados especificamente do ecossistema de busca do YouTube, fornecendo estimativas de volume precisas para a plataforma onde seus vídeos realmente precisam ranquear. Usar dados de palavras-chave do Google para otimização no YouTube é como usar um mapa rodoviário para navegar no oceano — o terreno é fundamentalmente diferente.',
      },
      {
        question: 'Como a dificuldade de palavra-chave do YouTube difere da dificuldade do Google?',
        answer: 'O KD do YouTube mede a concorrência entre vídeos, não páginas web. Os fatores que influenciam o ranqueamento no YouTube incluem tempo de visualização, taxa de cliques em thumbnails, engajamento (curtidas, comentários, compartilhamentos), autoridade do canal e otimização de metadados do vídeo. Enquanto backlinks importam mais para o Google, tempo de visualização e engajamento importam mais para o YouTube. Uma palavra-chave com KD 20 no YouTube significa que você pode competir com um vídeo bem produzido e bem otimizado, mesmo que seu canal seja relativamente novo.',
      },
      {
        question: 'Como encontro palavras-chave de baixa concorrência no YouTube para um canal novo?',
        answer: 'Filtre os resultados por palavras-chave com KD entre 0 e 15 e volume de busca acima de 50. Concentre-se em consultas de cauda longa (3 a 6 palavras) que abordam perguntas específicas ou tutoriais, como "como editar um vídeo do YouTube no iPhone" em vez de "edição de vídeo". Canais novos também devem procurar palavras-chave de "pergunta" (começando com como, o que, por que, pode) porque tendem a ter menor concorrência e maior engajamento, já que os espectadores assistem por mais tempo quando genuinamente precisam da resposta.',
      },
      {
        question: 'O que CPC significa para palavras-chave do YouTube?',
        answer: 'CPC representa quanto os anunciantes pagam por clique em anúncios exibidos para aquela palavra-chave. Para criadores do YouTube, palavras-chave com CPC mais alto se traduzem em maior receita publicitária por mil visualizações (RPM). Se você é monetizado pelo Programa de Parceiros do YouTube, segmentar palavras-chave com CPCs acima de US$3-5 significa que os anunciantes estão dispostos a pagar mais pelo seu público, o que aumenta diretamente seus ganhos. Isso é particularmente relevante para canais nos nichos de finanças, software, seguros e B2B, onde os CPCs podem ultrapassar US$20.',
      },
      {
        question: 'Como uso palavras-chave do YouTube para otimizar os metadados do meu vídeo?',
        answer: 'Coloque sua palavra-chave principal no título do vídeo (preferencialmente perto do início), na primeira frase da descrição e como primeira tag. Use palavras-chave secundárias da lista de palavras-chave relacionadas como tags adicionais, no corpo da descrição e como títulos de capítulos se você usar timestamps. O YouTube também transcreve seu áudio e usa para ranqueamento, então diga sua palavra-chave principal nos primeiros 30 segundos do vídeo. Esse posicionamento multi-toque de palavras-chave sinaliza ao YouTube exatamente sobre o que é seu vídeo.',
      },
      {
        question: 'Esta ferramenta pode me ajudar a encontrar temas em tendência no YouTube?',
        answer: 'A ferramenta mostra volumes de busca mensais médios, que refletem interesse sustentado em vez de picos virais. Para temas em tendência, combine esta ferramenta com o YouTube Trending, Google Trends (filtrado para Pesquisa do YouTube) e ferramentas de social listening. A melhor estratégia combina consciência de tendências com dados de palavras-chave: quando você identifica um tema em tendência, verifique-o na ferramenta de palavras-chave do YouTube para ver se também existe demanda de busca. Temas com tanto impulso de tendência quanto volume de busca são os alvos de maior oportunidade.',
      },
      {
        question: 'Qual é um bom limite de volume de busca para palavras-chave do YouTube?',
        answer: 'Depende do seu nicho. Em nichos amplos como gaming, culinária ou fitness, mire em palavras-chave com 500+ buscas mensais no YouTube. Em nichos especializados como SaaS B2B, ciência de dados ou hobbies de nicho, palavras-chave com 50 a 200 buscas podem gerar tráfego significativo porque o público é mais segmentado e valioso. A métrica chave não é apenas o volume, mas também a concorrência — uma palavra-chave de 100 buscas com KD 5 é frequentemente mais valiosa do que uma de 5.000 buscas com KD 70, especialmente para canais em crescimento.',
      },
      {
        question: 'Como planejar uma série de conteúdo no YouTube com dados de palavras-chave?',
        answer: 'Comece digitando uma palavra-chave de tema amplo e analise todos os 50 resultados. Agrupe palavras-chave relacionadas em clusters (ex.: tutoriais para iniciantes, técnicas avançadas, análises de ferramentas, comparações). Cada cluster se torna uma playlist, e cada palavra-chave dentro do cluster se torna um vídeo individual. Essa abordagem "hub and spoke" espelha como o Google recompensa autoridade temática — o YouTube da mesma forma impulsiona canais que demonstram expertise aprofundada em um assunto através de playlists interligadas e publicação consistente sobre temas relacionados.',
      },
      {
        question: 'Devo segmentar as mesmas palavras-chave no YouTube e no Google simultaneamente?',
        answer: 'Sim — isso é chamado de estratégia de double-dip de SEO para vídeos. Muitas SERPs do Google agora incluem um carrossel de vídeo, e vídeos do YouTube aparecem frequentemente nesses carrosséis. Ao segmentar a mesma palavra-chave em ambas as plataformas, você pode capturar tráfego tanto do carrossel de vídeo do Google QUANTO da busca nativa do YouTube. Priorize palavras-chave onde o Google já mostra resultados em vídeo. Consultas de tutorial, how-to e análises são as mais propensas a acionar carrosséis de vídeo.',
      },
      {
        question: 'Como funciona o score de Concorrência para palavras-chave do YouTube?',
        answer: 'O score de Concorrência (0 a 100) reflete quantos anunciantes estão disputando aquela palavra-chave para posicionamento de anúncios no YouTube. Um score de 100 significa concorrência máxima entre anunciantes; 0 significa que nenhum anunciante está segmentando-a. Embora isso afete principalmente a receita de anúncios em vez do ranqueamento orgânico, um score de concorrência alto indica interesse comercial no seu público. Criadores podem aproveitar isso abordando marcas em nichos de alta concorrência para acordos de patrocínio, já que essas marcas já estão gastando dinheiro para alcançar esse público por meio de anúncios.',
      },
      {
        question: 'Quantas palavras-chave devo usar em um único vídeo do YouTube?',
        answer: 'Concentre-se em uma palavra-chave principal e 5 a 10 palavras-chave secundárias por vídeo. Sua palavra-chave principal direciona o título e o tema principal. Palavras-chave secundárias aparecem na descrição, tags e títulos de capítulos. O excesso de palavras-chave prejudica tanto a experiência do espectador quanto o algoritmo do YouTube, que detecta repetição artificial. A lista de palavras-chave relacionadas desta ferramenta fornece o conjunto perfeito de termos secundários semanticamente conectados, garantindo que seus metadados soem naturais enquanto maximizam a descoberta.',
      },
      {
        question: 'Posso usar esta ferramenta para pesquisa de palavras-chave de YouTube Shorts?',
        answer: 'Sim. YouTube Shorts aparecem na busca do YouTube, no feed de Shorts e cada vez mais na busca do Google. Os mesmos dados de palavras-chave se aplicam — se um termo tem alto volume de busca no YouTube, criar um Short segmentando esse termo pode capturar exposição adicional. Shorts funcionam particularmente bem para consultas de alto volume e baixa profundidade como "como [tarefa rápida]" ou "análise de [produto] em 60 segundos". Use a ferramenta de palavras-chave para encontrar esses temas rápidos, depois crie Shorts para vitórias rápidas enquanto reserva vídeos longos para palavras-chave mais profundas e de maior dificuldade.',
      },
    ],
  },

  'amazon-keyword-tool': {
    slug: 'amazon-keyword-tool',
    name: 'Ferramenta de Palavras-chave para Amazon',
    title: 'Ferramenta de Palavras-chave para Amazon Gratuita',
    description: 'Pesquise palavras-chave para listagens de produtos na Amazon. Encontre termos de busca de alto volume com dados de dificuldade e CPC para otimizar títulos e descrições dos seus produtos.',
    metaDescription: 'Pesquise gratuitamente palavras-chave de produtos na Amazon. Veja volume de busca, dificuldade e CPC para otimizar listagens e descobrir nichos de produtos com alta demanda.',
    iconName: 'ShoppingBag',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Digite uma palavra-chave de produto',
    inputPlaceholder: 'ex.: fone de ouvido sem fio',
    buttonText: 'Encontrar Palavras-chave',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume', 'avg_difficulty'],
    apiEndpoint: 'amazon-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemanha' },
          { value: '2250', label: 'França' },
          { value: '2724', label: 'Espanha' },
          { value: '2380', label: 'Itália' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Austrália' },
          { value: '2356', label: 'Índia' },
          { value: '2392', label: 'Japão' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Palavra-chave', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'keyword_difficulty', label: 'KD', sortable: true, type: 'difficulty' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Concorrência', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Valide ideias de produto antes de investir em estoque',
        description: 'Lançar um produto na Amazon sem pesquisa de palavras-chave é como abrir uma loja em uma rua sem movimento de pedestres. Digite uma palavra-chave de produto como "fone de ouvido sem fio", selecione seu país e veja instantaneamente quantas pessoas estão buscando produtos nessa categoria. O menu suspenso de país permite comparar a demanda em mais de 10 mercados — assim você pode validar se o seu produto tem demanda de busca nos EUA, Reino Unido, Alemanha ou outros marketplaces da Amazon antes de se comprometer com compras de estoque, ciclos de produção ou envios FBA.',
        image: '/Amazon keyword tool/Check how viable your ideas are on amazon.png',
      },
      {
        title: 'Analise a densidade competitiva entre palavras-chave de produtos',
        description: 'A tabela de resultados exibe cada palavra-chave de produto junto com seu Volume, KD, CPC e Score de Concorrência. Palavras-chave principais podem mostrar volumes de 450.000 com scores de concorrência de 100 — significando que este é um mercado extremamente saturado. Mas aprofundando a análise, revelam-se sub-nichos menos competitivos onde novos vendedores podem competir. Essa tabela é essencial para vendedores Amazon FBA e marcas de marca própria que estão identificando nichos de produto com concorrência gerenciável.',
        image: '/Amazon keyword tool/See how competitive a business idea is on Amazon.png',
      },
      {
        title: 'Quantifique a demanda da categoria de produto em uma olhada',
        description: 'O painel resumo mostra Total de Palavras-chave (50), Volume Médio e Dificuldade Média para sua categoria de produto. Vendedores da Amazon usam esse panorama para comparar tamanhos de categorias — se você está decidindo entre entrar em um mercado ou outro, esse painel fornece a comparação de demanda em segundos. A dificuldade média também indica se muitas palavras-chave de produto de cauda longa permanecem acessíveis.',
        image: '/Amazon keyword tool/See how popular and how many people search for a given idea on amazon.png',
      },
      {
        title: 'Descubra palavras-chave de backend e termos de produto de cauda longa',
        description: 'O algoritmo A10 da Amazon ranqueia produtos parcialmente com base na relevância de palavras-chave em títulos, bullet points, descrições e termos de busca de backend. Esta visualização mostra a lista completa de palavras-chave de produto relacionadas e seus volumes — desde termos principais até variações de cauda longa. Essas variações de cauda longa devem ser colocadas no campo de termos de busca de backend da sua listagem de produto, nos bullet points e no conteúdo A+ para maximizar a visibilidade da sua listagem na mais ampla gama possível de consultas dos compradores.',
        image: '/Amazon keyword tool/See other sematically relevant content ideas for your main ideas on amazon.png',
      },
    ],
    faqs: [
      {
        question: 'Por que as palavras-chave da Amazon diferem das do Google?',
        answer: 'Amazon e Google atendem intenções de usuário fundamentalmente diferentes. Pesquisadores do Google podem estar pesquisando, comparando ou apenas navegando. Pesquisadores da Amazon estão quase sempre em modo de compra — eles têm intenção de compra. Isso significa que as palavras-chave da Amazon são focadas em produtos (nomes de marcas, especificações de produtos, casos de uso) enquanto as palavras-chave do Google abrangem intenções informacionais, navegacionais e transacionais.',
      },
      {
        question: 'Como funciona a dificuldade de palavra-chave para listagens de produtos na Amazon?',
        answer: 'A dificuldade de palavra-chave da Amazon estima quão competitivo é ranquear sua listagem de produto na primeira página da Amazon para aquele termo de busca. Os fatores incluem o número de vendedores estabelecidos que segmentam a palavra-chave, suas contagens de avaliações, velocidade de vendas, qualidade da otimização da listagem e gastos com publicidade. Um KD de 0–10 significa que uma nova listagem pode aparecer rapidamente na primeira página com boa otimização. Um KD acima de 40 tipicamente requer preços competitivos, campanhas PPC, avaliações sólidas e listagens altamente otimizadas.',
      },
      {
        question: 'Qual é um bom volume de busca para uma palavra-chave de produto na Amazon?',
        answer: 'Para vendedores de marca própria, as palavras-chave principais devem ter pelo menos 1.000 buscas mensais para garantir demanda suficiente. Termos head de alto volume (100.000+) são extremamente competitivos e geralmente dominados por grandes marcas. Palavras-chave de cauda média (1.000–10.000) geralmente oferecem o melhor equilíbrio entre demanda e viabilidade. Palavras-chave de cauda longa (abaixo de 1.000) funcionam bem como termos de busca de backend e em campanhas PPC onde a intenção de compra específica leva a taxas de conversão mais altas.',
      },
      {
        question: 'Como devo usar dados de palavras-chave da Amazon para otimizar minha listagem de produto?',
        answer: 'Siga a hierarquia de posicionamento de palavras-chave da Amazon: (1) Coloque sua palavra-chave principal no título do produto, (2) Posicione suas 5 principais palavras-chave secundárias nos bullet points, (3) Use as palavras-chave restantes na descrição do produto e no Conteúdo A+, (4) Carregue todos os termos relevantes restantes nos termos de busca de backend (até 250 bytes). Nunca repita palavras-chave entre esses campos — o algoritmo da Amazon conta cada palavra-chave apenas uma vez, independentemente de quantas vezes ela aparece.',
      },
      {
        question: 'Posso usar esta ferramenta para pesquisa de campanhas PPC na Amazon?',
        answer: 'Com certeza. A coluna CPC mostra o que os anunciantes estão pagando por cliques em anúncios de Sponsored Product para cada palavra-chave. Use esses dados para estimar seu orçamento de publicidade, identificar palavras-chave onde o ranqueamento orgânico economizaria gastos significativos com anúncios e descobrir palavras-chave de baixo CPC onde você pode executar campanhas PPC lucrativas.',
      },
      {
        question: 'Como encontro nichos de produtos lucrativos com esta ferramenta?',
        answer: 'Procure clusters de palavras-chave onde o volume de busca médio esteja acima de 5.000, mas o KD médio esteja abaixo de 20. Em seguida, verifique o CPC — um CPC mais alto indica que os vendedores nesse nicho são lucrativos o suficiente para investir em publicidade. O nicho ideal tem alta demanda de busca, baixa concorrência, margens saudáveis e produtos na primeira página com menos de 500 avaliações (indicando acessibilidade de mercado para novos entrantes).',
      },
      {
        question: 'Qual é a diferença entre o Score de Concorrência e KD para palavras-chave da Amazon?',
        answer: 'O Score de Concorrência reflete a densidade de publicidade paga — quantos vendedores estão executando anúncios de Sponsored Product naquela palavra-chave. O KD reflete a dificuldade de ranqueamento orgânico — quão difícil é aparecer na primeira página sem anúncios. Você pode ter uma palavra-chave com baixo KD orgânico mas alta concorrência paga, significando que é fácil ranquear organicamente mas difícil obter visibilidade em anúncios.',
      },
      {
        question: 'Como uso palavras-chave da Amazon para pesquisa de produto antes do lançamento?',
        answer: 'Use esta ferramenta para validação pré-lançamento: (1) Insira palavras-chave amplas de categoria de produto, (2) Analise o volume de palavras-chave relacionadas para confirmar a demanda, (3) Verifique o KD para avaliar a viabilidade competitiva, (4) Observe a amplitude de palavras-chave de cauda longa — um nicho com muitas variações de cauda longa tem espaço para produtos diferenciados, (5) Cruze os dados com os custos do seu fornecedor para estimar a lucratividade.',
      },
      {
        question: 'Devo segmentar palavras-chave de marca na minha listagem da Amazon?',
        answer: 'Nunca inclua nomes de marcas concorrentes no título ou bullet points do seu produto — os termos de serviço da Amazon proíbem isso e podem resultar na supressão da listagem. No entanto, palavras-chave relacionadas a marcas aparecem naturalmente nos resultados da ferramenta e são úteis para entender o cenário competitivo. Sua estratégia deve ser segmentar os equivalentes genéricos e competir em preço, funcionalidades e avaliações.',
      },
      {
        question: 'Posso usar esta ferramenta para marketplaces da Amazon fora dos Estados Unidos?',
        answer: 'Sim. O seletor de países suporta os principais marketplaces da Amazon incluindo EUA, Reino Unido, Alemanha, França, Espanha, Itália, Brasil, Canadá, Austrália, Índia e Japão. Cada mercado tem diferentes volumes de palavras-chave, níveis de concorrência e comportamentos de compradores. Um produto que está supersaturado no mercado dos EUA pode estar subatendido na Alemanha ou no Japão.',
      },
      {
        question: 'Quantas palavras-chave devo incluir nos meus termos de busca de backend na Amazon?',
        answer: 'A Amazon permite até 250 bytes de termos de busca de backend (aproximadamente 250 caracteres para inglês). Use esse espaço para palavras-chave que não se encaixam naturalmente no seu título, bullet points ou descrição. Priorize palavras-chave únicas — não repita termos que já estão na sua listagem visível. Use espaços para separar os termos (não vírgulas ou ponto e vírgula — a Amazon trata esses caracteres como bytes desperdiçados).',
      },
      {
        question: 'Como o algoritmo A10 da Amazon usa palavras-chave para ranquear listagens de produtos?',
        answer: 'O algoritmo A10 da Amazon considera a relevância de palavras-chave como um de vários fatores de ranqueamento, juntamente com velocidade de vendas, taxa de conversão, taxa de cliques, autoridade do vendedor e vendas orgânicas. Listagens com a palavra-chave no título ranqueiam mais alto do que aquelas que a contêm apenas nos termos de backend. Além da correspondência, o algoritmo então classifica por métricas de desempenho — o que significa que a otimização de palavras-chave faz você ser indexado, mas a taxa de conversão e as vendas determinam sua posição.',
      },
    ],
  },

  'bing-keyword-tool': {
    slug: 'bing-keyword-tool',
    name: 'Ferramenta de Palavras-chave para Bing',
    title: 'Ferramenta de Palavras-chave para Bing Gratuita',
    description: 'Pesquise palavras-chave para o mecanismo de busca Bing. Obtenha volume de busca, CPC e dados de concorrência específicos do Bing para otimizar seu conteúdo para o mecanismo de busca da Microsoft.',
    metaDescription: 'Encontre gratuitamente ideias de palavras-chave para o Bing. Veja volume de busca, CPC e dados de concorrência para aproveitar o SERP do Bing, menos competitivo e com alta taxa de conversão.',
    iconName: 'Search',
    category: 'keyword-research',
    inputType: 'keyword',
    inputLabel: 'Digite uma palavra-chave',
    inputPlaceholder: 'ex.: software de gerenciamento de projetos',
    buttonText: 'Encontrar Palavras-chave',
    resultType: 'keyword-list',
    metricsToShow: ['total_keywords', 'avg_volume'],
    apiEndpoint: 'bing-keyword-tool',
    freeResultLimit: 50,
    options: [
      {
        name: 'country',
        label: 'País',
        type: 'country-select',
        default: '2840',
        choices: [
          { value: '2840', label: 'Estados Unidos' },
          { value: '2826', label: 'Reino Unido' },
          { value: '2276', label: 'Alemanha' },
          { value: '2250', label: 'França' },
          { value: '2724', label: 'Espanha' },
          { value: '2380', label: 'Itália' },
          { value: '2076', label: 'Brasil' },
          { value: '2124', label: 'Canadá' },
          { value: '2036', label: 'Austrália' },
          { value: '2356', label: 'Índia' },
          { value: '2392', label: 'Japão' },
        ],
      },
    ],
    tableColumns: [
      { key: 'keyword', label: 'Palavra-chave', sortable: true, type: 'text' },
      { key: 'search_volume', label: 'Volume', sortable: true, type: 'number' },
      { key: 'cpc', label: 'CPC', sortable: true, type: 'currency' },
      { key: 'competition', label: 'Concorrência', sortable: true, type: 'number' },
    ],
    useCases: [
      {
        title: 'Pesquise palavras-chave especificamente para o ecossistema de busca do Bing',
        description: 'O Bing alimenta a busca do Microsoft Edge (o navegador padrão em todos os PCs com Windows), Cortana, Yahoo Search e os resultados orgânicos do DuckDuckGo. Isso representa aproximadamente 10–15% do tráfego de busca em desktop — um segmento que a maioria dos profissionais de SEO ignora completamente. Insira qualquer palavra-chave, selecione seu país-alvo e obtenha dados de busca específicos do Bing. Isso é especialmente valioso para profissionais de marketing B2B e marcas que segmentam demografias mais velhas, já que os usuários do Bing tendem a ser mais voltados ao desktop, com renda mais alta e em ambientes corporativos onde os produtos Microsoft são o padrão.',
        image: '/Bing keyword tool/Search any keyword on any region on Bing.png',
      },
      {
        title: 'Avalie o volume exclusivo e a densidade de palavras-chave do Bing',
        description: 'O painel resumo mostra o número total de ideias de palavras-chave e seu volume médio no Bing. Uma palavra-chave semente que gera mais de 1.000 termos relacionados significa que existe um cluster temático profundo e semanticamente rico disponível na plataforma do Bing. Essa métrica de densidade ajuda você a decidir se a otimização para o Bing vale o esforço para o seu nicho. Para palavras-chave de software B2B, consultas de ferramentas corporativas e serviços profissionais, o Bing frequentemente entrega um volume surpreendente de buscadores com maior intenção e menor custo de conversão.',
        image: '/Bing keyword tool/See a keywords volume and semantic density on Bing.png',
      },
      {
        title: 'Compare a competitividade orgânica e paga no Bing',
        description: 'A tabela de resultados mostra Volume, CPC e Concorrência para cada palavra-chave especificamente no Bing. O Bing Ads (Microsoft Advertising) tipicamente tem CPCs mais baixos que o Google Ads — frequentemente 30–50% mais baratos para as mesmas palavras-chave. Esta tabela permite que gestores de PPC identifiquem palavras-chave onde o Bing oferece um custo por aquisição melhor que o Google. Também permite que profissionais de SEO vejam quais palavras-chave enfrentam menos concorrência orgânica no Bing.',
        image: '/Bing keyword tool/Find how competitives organic and paid keywords are in bing.png',
      },
      {
        title: 'Descubra clusters de palavras-chave e oportunidades de conteúdo exclusivas do Bing',
        description: 'Esta visualização mostra a lista completa de variações de palavras-chave com seus volumes de busca no Bing. Como a base de usuários do Bing tem demografias e comportamentos diferentes dos do Google, o panorama de palavras-chave pode diferir significativamente. Termos relacionados a software empresarial, integrações Microsoft, ferramentas profissionais e determinados produtos voltados a faixas etárias específicas frequentemente performam desproporcionalmente bem no Bing. Use esta lista para identificar oportunidades de conteúdo que seus concorrentes estão perdendo por otimizarem apenas para o Google.',
        image: '/Bing keyword tool/Check other clusters around your main keyword in bing.png',
      },
    ],
    faqs: [
      {
        question: 'Por que devo me preocupar com palavras-chave do Bing se o Google domina a busca?',
        answer: 'O Bing captura aproximadamente 10–15% do tráfego de busca em desktop globalmente, o que se traduz em centenas de milhões de buscas por mês. Mais importante, o público do Bing tende a ter renda mais alta, ser mais velho e mais orientado ao ambiente corporativo — demografias que frequentemente convertem a taxas mais altas. Como menos profissionais de SEO otimizam especificamente para o Bing, o cenário competitivo é significativamente menos disputado.',
      },
      {
        question: 'Como o algoritmo de busca do Bing difere do Google?',
        answer: 'O algoritmo de ranqueamento do Bing compartilha semelhanças com o Google, mas tem diferenças notáveis. O Bing dá mais peso a palavras-chave de correspondência exata em títulos e meta descriptions, valoriza sinais sociais de plataformas como Facebook e LinkedIn, dá uma leve preferência a domínios mais antigos e estabelecidos, e trata conteúdo multimídia de forma mais proeminente em suas SERPs. O Bing também tende a ser mais transparente sobre seus fatores de ranqueamento.',
      },
      {
        question: 'Quais setores se beneficiam mais da otimização de palavras-chave no Bing?',
        answer: 'Os setores que se beneficiam desproporcionalmente do Bing incluem software B2B e SaaS (usuários corporativos em navegadores padrão da Microsoft), serviços financeiros (demografias de renda mais alta), saúde (demografias mais velhas), imóveis (comportamento de pesquisa predominantemente em desktop), educação e serviços profissionais. Qualquer setor onde o cliente-alvo provavelmente usa um computador Windows com o Edge como navegador padrão deve considerar a otimização para o Bing.',
      },
      {
        question: 'Os anúncios do Bing são mais baratos que os do Google para as mesmas palavras-chave?',
        answer: 'Sim, na maioria dos casos. Os CPCs do Bing Ads (Microsoft Advertising) são tipicamente 30–50% mais baixos que os do Google Ads para palavras-chave equivalentes, porque há menos concorrência entre anunciantes na plataforma. Os dados de CPC nesta ferramenta refletem os preços específicos do Bing, permitindo que você calcule as economias potenciais. Muitos anunciantes importam suas campanhas do Google Ads para o Bing Ads e conseguem um custo por aquisição significativamente menor.',
      },
      {
        question: 'Quantas ideias de palavras-chave posso gerar para o Bing?',
        answer: 'A ferramenta pode retornar mais de 1.000 ideias de palavras-chave a partir de uma única palavra-chave semente no Bing. Isso é significativamente mais do que muitas ferramentas de pesquisa específicas para o Bing oferecem. O volume de ideias de palavras-chave indica a profundidade semântica do tema na plataforma do Bing.',
      },
      {
        question: 'O Bing tem sua própria métrica de dificuldade de palavra-chave?',
        answer: 'Esta ferramenta fornece um score KD baseado no cenário competitivo dos resultados orgânicos do Bing, que é separado das métricas de dificuldade do Google. Como menos sites otimizam ativamente para o Bing, você frequentemente descobrirá que as mesmas palavras-chave são significativamente mais fáceis de ranquear no Bing do que no Google. Isso cria uma oportunidade de arbitragem.',
      },
      {
        question: 'Como o Bing lida com intenção de busca diferentemente do Google?',
        answer: 'Os resultados de busca do Bing tendem a favorecer respostas diretas e conteúdo de correspondência exata mais do que o Google, que interpreta cada vez mais o significado semântico. Isso significa que no Bing, ter a frase exata da palavra-chave na sua title tag, H1 e slug da URL tem um impacto mais forte no ranqueamento. O Bing também exibe mais conteúdo visual nos resultados de busca e tem uma abordagem diferente para a busca local.',
      },
      {
        question: 'Posso usar dados de palavras-chave do Bing para informar minha estratégia de SEO no Google?',
        answer: 'Sim — dados de palavras-chave do Bing podem revelar tendências de busca valiosas e comportamentos dos usuários que são menos visíveis no Google devido à maior concorrência. As sugestões de palavras-chave do Bing às vezes revelam variações de cauda longa e formatos de perguntas que não aparecem nas ferramentas de palavras-chave do Google. Esses termos frequentemente representam necessidades genuínas dos usuários que são mal atendidas também nas SERPs do Google.',
      },
      {
        question: 'O que é o Score de Concorrência para palavras-chave do Bing?',
        answer: 'O score de Concorrência (0–100) reflete quantos anunciantes estão disputando essa palavra-chave no Microsoft Advertising (Bing Ads). Um score de 0 significa que nenhum anunciante está segmentando-a; 100 significa forte concorrência publicitária. Esta métrica é distinta da concorrência orgânica e é relevante principalmente para campanhas de PPC. No entanto, alta concorrência paga no Bing também sinaliza valor comercial.',
      },
      {
        question: 'Como otimizo conteúdo especificamente para o algoritmo de busca do Bing?',
        answer: 'As principais táticas de otimização para o Bing incluem: usar palavras-chave de correspondência exata na title tag e H1, escrever meta descriptions claras e ricas em palavras-chave, garantir que seu site esteja verificado no Bing Webmaster Tools, construir sinais sociais através de compartilhamentos no LinkedIn e Facebook, enviar um sitemap XML especificamente para o Bing, usar conteúdo multimídia com alt text e garantir velocidades de carregamento rápidas — o Bing penaliza sites lentos de forma mais agressiva que o Google.',
      },
      {
        question: 'Que porcentagem do meu tráfego poderia vir do Bing?',
        answer: 'Para a maioria dos sites, o Bing gera 5–15% do tráfego orgânico total, mas isso varia drasticamente por setor e público. Sites B2B e focados em empresas frequentemente veem 15–25% do tráfego vindo do Bing, enquanto sites voltados ao consumidor que segmentam demografias mais jovens podem registrar menos de 5%. Verifique suas analytics para a fonte Bing/orgânico para ver sua distribuição atual.',
      },
      {
        question: 'A pesquisa de palavras-chave do Bing também cobre Yahoo e DuckDuckGo?',
        answer: 'Parcialmente sim. O índice de busca orgânica do Bing alimenta os resultados do Yahoo Search e influencia significativamente os resultados orgânicos do DuckDuckGo. Isso significa que otimizar para palavras-chave do Bing efetivamente lhe dá visibilidade em três mecanismos de busca simultaneamente.',
      },
    ],
  },

  'website-traffic-checker': {
    slug: 'website-traffic-checker',
    name: 'Verificador de Tráfego de Site',
    title: 'Verificador de Tráfego de Site Gratuito',
    description: 'Verifique o tráfego orgânico e pago estimado de qualquer site. Veja total de palavras-chave, valor do tráfego e dados de movimentação de ranqueamento.',
    metaDescription: 'Verifique gratuitamente o tráfego orgânico e pago de qualquer site. Veja ranqueamentos de palavras-chave, valor do tráfego e tendências de ranqueamento para fazer benchmarking de concorrentes.',
    iconName: 'TrendingUp',
    category: 'serp-ranking',
    inputType: 'url',
    inputLabel: 'Digite um domínio',
    inputPlaceholder: 'ex.: example.com',
    buttonText: 'Verificar Tráfego',
    options: [],
    resultType: 'traffic-overview',
    metricsToShow: ['organic_traffic', 'paid_traffic', 'total_keywords', 'traffic_value'],
    tableColumns: [
      { key: 'metric', label: 'Métrica', sortable: false, type: 'text' },
      { key: 'value', label: 'Valor', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'website-traffic-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Estime instantaneamente o tráfego de busca de qualquer site',
        description: 'Antes de entrar em qualquer mercado, você precisa saber quanto tráfego de busca seus concorrentes estão capturando. Insira qualquer domínio no verificador de tráfego e obtenha instantaneamente uma estimativa do desempenho de busca orgânica e paga. Seja avaliando um concorrente, pesquisando uma potencial aquisição, verificando um parceiro publicitário ou analisando o desempenho atual de um cliente — esta ferramenta fornece a inteligência de tráfego que antes exigia assinaturas empresariais caras. É o caminho mais rápido para responder à pergunta: "Quanto tráfego de busca esse site realmente recebe?"',
        image: '/website traffic checker/check any websites traffic.png',
      },
      {
        title: 'Veja o total de ranqueamentos de palavras-chave e o valor monetário do tráfego',
        description: 'O painel mostra Total de Palavras-chave (ex.: 47.854) e Valor do Tráfego (ex.: US$ 223.458). Total de Palavras-chave indica a amplitude da visibilidade de busca de um site — quantos termos de busca diferentes geram visitantes. O Valor do Tráfego estima quanto esse tráfego orgânico custaria se fosse comprado pelo Google Ads. Um valor de tráfego de US$ 223.458 significa que os ranqueamentos orgânicos desse site economizam quase um quarto de milhão de dólares por mês em gastos equivalentes com publicidade. Essa métrica é uma das mais convincentes para demonstrar o ROI de SEO para executivos, clientes e stakeholders.',
        image: '/website traffic checker/see how many keywords any site ranks for and traffic of any website traffic.png',
      },
      {
        title: 'Acompanhe tendências de movimentação de palavras-chave: Subindo, Caindo, Novas, Perdidas',
        description: 'A tabela de tendências de ranqueamento decompõe Palavras-chave no Top 3, Palavras-chave no Top 10, Novas Palavras-chave, Ranqueamentos Melhorados, Ranqueamentos em Declínio e Ranqueamentos Perdidos. Este é o pulso do desempenho de SEO. Se "Melhorados" supera "Em Declínio", o SEO do site está funcionando. Se "Perdidos" está alto, algo deu errado — possivelmente um impacto de atualização de algoritmo, deterioração de conteúdo ou concorrentes ultrapassando. Agências apresentam esses dados em relatórios mensais para mostrar aos clientes se o investimento em SEO está gerando impulso positivo.',
        image: '/website traffic checker/see keywords in tops declining and improved keywords.png',
      },
      {
        title: 'Compare estratégia de tráfego orgânico vs. pago',
        description: 'A visualização dividida mostra Tráfego Orgânico e Tráfego Pago lado a lado. Isso revela a estratégia de busca de um site em uma olhada. Um site com alto tráfego orgânico e zero tráfego pago investiu fortemente em SEO. Um site com tráfego orgânico e pago equilibrado é diversificado. Um site que depende inteiramente de tráfego pago é vulnerável a cortes de orçamento. Use isso para fazer benchmarking da sua própria estratégia e identificar vantagens competitivas.',
        image: '/website traffic checker/see organic and paid traffic.png',
      },
    ],
    faqs: [
      {
        question: 'Como um verificador de tráfego de site estima o tráfego sem acesso ao analytics?',
        answer: 'Verificadores de tráfego estimam o tráfego orgânico usando uma combinação de dados de ranqueamento de palavras-chave e modelos de taxa de cliques. A ferramenta identifica para quais palavras-chave um site ranqueia, suas posições de ranqueamento e os volumes de busca mensal dessas palavras-chave. Em seguida, aplica estimativas de taxa de cliques baseadas na posição (ex.: #1 recebe ~28% dos cliques, #2 recebe ~15%) para calcular visitas mensais estimadas de cada palavra-chave. A soma de todas as estimativas de tráfego por palavra-chave produz a estimativa total de tráfego.',
      },
      {
        question: 'O que é valor do tráfego e como é calculado?',
        answer: 'O valor do tráfego representa o custo mensal estimado de replicar o tráfego orgânico de um site através do Google Ads. É calculado multiplicando o tráfego orgânico estimado de cada palavra-chave pelo seu CPC (Custo Por Clique) e então somando todas as palavras-chave. Por exemplo, se um site recebe 1.000 visitas orgânicas de uma palavra-chave com CPC de US$ 5, essa palavra-chave contribui com US$ 5.000 para o valor do tráfego. Isso demonstra de forma poderosa o valor monetário do investimento em SEO.',
      },
      {
        question: 'Qual é a diferença entre tráfego orgânico e tráfego pago?',
        answer: 'Tráfego orgânico vem de resultados de mecanismos de busca não pagos — os usuários clicam no seu resultado porque ele apareceu naturalmente no Google com base em relevância e autoridade. Tráfego pago vem de publicidade em mecanismos de busca (Google Ads) — você paga por cada clique no seu anúncio patrocinado. Tráfego orgânico é "gratuito" no sentido de que você não paga por clique, mas requer investimento em criação de conteúdo e SEO. Tráfego pago oferece visibilidade imediata, mas para no momento em que você pausa seu orçamento de anúncios.',
      },
      {
        question: 'O que significam as métricas "Novas Palavras-chave", "Melhoradas", "Em Declínio" e "Perdidas"?',
        answer: '"Novas Palavras-chave" são termos de busca para os quais o site começou a ranquear no período mais recente — indicando que conteúdo novo está sendo indexado ou conteúdo existente está ganhando visibilidade. "Ranqueamentos Melhorados" são palavras-chave onde a posição do site subiu (mais próxima do #1). "Ranqueamentos em Declínio" são palavras-chave onde a posição caiu. "Ranqueamentos Perdidos" são palavras-chave para as quais o site anteriormente ranqueava mas não aparece mais no top 100. Um site saudável tipicamente mostra Novas + Melhoradas superando significativamente Em Declínio + Perdidas.',
      },
      {
        question: 'Quão precisas são as estimativas de tráfego para sites pequenos vs. grandes?',
        answer: 'Estimativas de tráfego são geralmente mais precisas para sites maiores com milhares de ranqueamentos, porque o modelo estatístico calcula a média em muitas palavras-chave. Para sites pequenos que ranqueiam para menos de 100 palavras-chave, as estimativas podem ter margens de erro mais amplas, pois a sobre- ou subestimação de uma única palavra-chave tem um impacto maior no total. Para benchmarking competitivo, a comparação relativa (seu site vs. concorrentes) é mais confiável do que os números absolutos.',
      },
      {
        question: 'Por que um concorrente com autoridade mais baixa tem mais tráfego que meu site?',
        answer: 'Autoridade e tráfego são correlacionados, mas não idênticos. Um concorrente pode superá-lo em tráfego com autoridade mais baixa se: (1) tiver uma melhor estratégia de conteúdo segmentando palavras-chave de maior volume, (2) produzir conteúdo com mais frequência e consistência, (3) segmentar palavras-chave de cauda longa que exigem menos autoridade para ranquear, (4) tiver otimização on-page e SEO técnico superiores, ou (5) se beneficiar de autoridade temática em um nicho específico apesar de métricas de domínio gerais mais baixas.',
      },
      {
        question: 'Como posso usar dados do verificador de tráfego para análise competitiva?',
        answer: 'Execute o verificador de tráfego para seus 5 principais concorrentes e compare: tráfego orgânico total, total de palavras-chave, valor do tráfego, divisão orgânico vs. pago e tendências de movimentação de palavras-chave. Isso revela quem está crescendo mais rápido, quem depende de anúncios pagos, quem tem a maior presença de palavras-chave e onde cada concorrente gera mais valor. Depois aprofunde em palavras-chave específicas — para quais palavras-chave os concorrentes ranqueiam que você não? Essas são suas oportunidades de lacuna de conteúdo.',
      },
      {
        question: 'O que significa se um site tem alto valor de tráfego mas volume de tráfego moderado?',
        answer: 'Isso significa que o site ranqueia para palavras-chave comercialmente valiosas com CPCs altos, mesmo que os volumes de busca sejam moderados. Um site recebendo 10.000 visitas mensais de palavras-chave com CPC médio de US$ 20 tem um valor de tráfego de US$ 200.000 — mais do que um site recebendo 100.000 visitas de palavras-chave com CPC médio de US$ 0,50 (US$ 50.000 de valor de tráfego). Alto valor de tráfego em relação ao volume de tráfego indica que o site segmenta palavras-chave de fundo de funil, de alta intenção que geram receita.',
      },
      {
        question: 'Como acompanho tendências de tráfego ao longo do tempo?',
        answer: 'Exporte os dados de tráfego mensalmente e construa um painel histórico. Acompanhe tráfego orgânico total, total de palavras-chave, palavras-chave no top 3, palavras-chave no top 10 e valor do tráfego ao longo de períodos de 6–12 meses. Plote esses dados como linhas de tendência para visualizar crescimento ou declínio. A métrica mais significativa para acompanhar é "Palavras-chave no Top 10" porque ela se correlaciona diretamente com o tráfego — quanto mais palavras-chave na primeira página, mais tráfego você recebe.',
      },
      {
        question: 'Posso usar esta ferramenta para estimar a receita de um site?',
        answer: 'Embora os dados do verificador de tráfego sozinhos não revelem receita, você pode criar estimativas aproximadas. Para sites sustentados por anúncios, multiplique o tráfego estimado por RPMs típicos (US$ 5–30 por 1.000 visualizações de página dependendo do nicho). Para sites de e-commerce, aplique taxas de conversão médias do setor (1–3%) e valores médios de pedido. Para sites SaaS, estime leads a partir do tráfego usando taxas de conversão típicas (2–5% para teste gratuito) e os preços conhecidos.',
      },
      {
        question: 'Por que um site mostra zero tráfego pago?',
        answer: 'Zero tráfego pago significa que o site não está executando campanhas do Google Ads que as fontes de dados da ferramenta podem detectar. Isso pode significar que o site depende inteiramente de SEO orgânico (uma estratégia comum para negócios baseados em conteúdo), veicula anúncios em outras plataformas (Facebook, LinkedIn, redes de display) em vez do Google Search, ou pausou campanhas recentemente. Zero tráfego pago não é inerentemente bom ou ruim — simplesmente indica que a estratégia de visibilidade de busca do site é inteiramente orgânica.',
      },
      {
        question: 'Como o verificador de tráfego lida com subdomínios e subpastas?',
        answer: 'A ferramenta verifica o tráfego para todo o domínio inserido. Se um site usa subdomínios (blog.example.com, shop.example.com), estes são tipicamente incluídos na estimativa de tráfego total do domínio raiz. Subpastas (example.com/blog/, example.com/shop/) são sempre incluídas já que fazem parte do mesmo domínio. Se você precisa de estimativas de tráfego para um subdomínio ou caminho de URL específico, algumas ferramentas oferecem análise em nível de URL que detalha o tráfego por página ou seção.',
      },
    ],
  },

  'broken-link-checker': {
    slug: 'broken-link-checker',
    name: 'Verificador de Links Quebrados',
    title: 'Verificador Gratuito de Links Quebrados e Saúde da Página',
    description: 'Verifique qualquer página web quanto a links quebrados, problemas de SEO e problemas de saúde da página. Obtenha uma auditoria detalhada com recomendações acionáveis.',
    metaDescription: 'Verifique gratuitamente qualquer página web quanto a links quebrados e problemas de SEO. Obtenha scores de saúde da página, contagem de links internos/externos e recomendações de correção.',
    iconName: 'Link2',
    category: 'link-building',
    inputType: 'url',
    inputLabel: 'Digite uma URL',
    inputPlaceholder: 'ex.: https://example.com',
    buttonText: 'Verificar Página',
    options: [],
    resultType: 'broken-links',
    metricsToShow: ['page_score', 'issues_found', 'internal_links', 'external_links'],
    tableColumns: [
      { key: 'issue', label: 'Problema', sortable: false, type: 'text' },
      { key: 'severity', label: 'Severidade', sortable: true, type: 'badge' },
      { key: 'description', label: 'Descrição', sortable: false, type: 'text' },
    ],
    apiEndpoint: 'broken-link-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Audite qualquer página quanto a links quebrados e saúde técnica de SEO',
        description: 'Links quebrados destroem silenciosamente a experiência do usuário e o desempenho de SEO. Insira qualquer URL no verificador, clique em "Verificar Página" e obtenha uma auditoria instantânea da saúde dos links e do status técnico de SEO dessa página. Isso substitui a verificação manual link por link com um scan automatizado que detecta erros 404, cadeias de redirecionamento e links externos mortos. Proprietários de sites, profissionais de SEO e webmasters usam isso antes de lançar novas páginas, após migrações de site e como parte de verificações regulares mensais de saúde.',
        image: '/Broken link checker/check your website broken links and technical seo health.png',
      },
      {
        title: 'Monitore seu score de SEO técnico e problemas críticos',
        description: 'Além de links quebrados, a ferramenta retorna um Page Score (0–100) e o total de Problemas Encontrados. Um Page Score de 100 com 0 problemas significa que a página é tecnicamente saudável. Qualquer coisa abaixo de 80 sinaliza problemas que precisam de atenção. Esse sistema de pontuação oferece uma métrica rápida de aprovação/reprovação para qualquer página do seu site.',
        image: '/Broken link checker/See your websites technical seo score + number of critical seo issues.png',
      },
      {
        title: 'Analise a distribuição de links internos e externos',
        description: 'A ferramenta conta e categoriza Links Internos (links para outras páginas no mesmo domínio) e Links Externos (links para outros sites). Esses dados são críticos por dois motivos: (1) A distribuição de links internos afeta como os mecanismos de busca rastreiam e indexam seu site, e (2) a qualidade dos links externos afeta a confiabilidade da sua página.',
        image: '/Broken link checker/See internal links from a page external links.png',
      },
      {
        title: 'Identifique e priorize problemas técnicos específicos para correção',
        description: 'A tabela de problemas lista cada problema encontrado, seu nível de severidade (Info, Aviso, Crítico) e uma descrição. Problemas como "Recursos que bloqueiam renderização" e "Baixa taxa de conteúdo" impactam diretamente os Core Web Vitals e sinais de qualidade de conteúdo. Cada problema vem com contexto acionável — você sabe exatamente o que está errado e pode priorizar com base na severidade.',
        image: '/Broken link checker/see details about techincal issues from your page.png',
      },
    ],
    faqs: [
      {
        question: 'O que é um link quebrado e como ele afeta o SEO?',
        answer: 'Um link quebrado (também chamado de link morto ou erro 404) é um hiperlink que aponta para uma página que não existe mais ou retorna um erro. Links quebrados afetam o SEO de três formas: (1) Desperdiçam orçamento de rastreamento, (2) Interrompem o fluxo de link equity, e (3) Prejudicam a experiência do usuário.',
      },
      {
        question: 'O que é Page Score e como é calculado?',
        answer: 'O Page Score é uma métrica de 0–100 que avalia a saúde técnica geral de uma página web. Ele considera links quebrados, desempenho de carregamento da página, completude de meta tags, proporção conteúdo/HTML, recursos que bloqueiam renderização e indicadores de compatibilidade mobile.',
      },
      {
        question: 'Qual é a diferença entre links internos e links externos no SEO?',
        answer: 'Links internos conectam páginas dentro do mesmo domínio. Eles ajudam os mecanismos de busca a descobrir e rastrear seu conteúdo, distribuir link equity e estabelecer hierarquias de conteúdo. Links externos apontam do seu site para outros domínios e sinalizam qualidade de conteúdo e relevância temática.',
      },
      {
        question: 'Com que frequência devo verificar meu site quanto a links quebrados?',
        answer: 'Verifique suas páginas mais importantes mensalmente. Execute uma auditoria completa do site trimestralmente. Além disso, sempre verifique após migrações de site, atualizações do CMS, mudanças na estrutura de URL ou exclusões de conteúdo.',
      },
      {
        question: 'O que são recursos que bloqueiam renderização e por que são importantes?',
        answer: 'Recursos que bloqueiam renderização são folhas de estilo CSS e arquivos JavaScript que impedem o navegador de exibir a página até que estejam completamente carregados. Eles degradam as métricas de Core Web Vitals que o Google usa como fatores de ranqueamento.',
      },
      {
        question: 'O que significa "Baixa taxa de conteúdo" no relatório de problemas?',
        answer: 'Baixa taxa de conteúdo significa que a página tem muito pouco conteúdo de texto legível em relação ao seu código HTML. Os mecanismos de busca podem interpretar isso como uma página de conteúdo fino. A proporção saudável típica é acima de 25% de texto em relação ao HTML.',
      },
      {
        question: 'Links quebrados no meu site podem afetar páginas que não têm links quebrados?',
        answer: 'Sim, através de um conceito chamado desperdício de orçamento de rastreamento. Os mecanismos de busca alocam um orçamento de rastreamento limitado para cada site. Quando os bots encontram links quebrados, usam orçamento de rastreamento em becos sem saída.',
      },
      {
        question: 'Devo corrigir primeiro links internos ou externos quebrados?',
        answer: 'Corrija primeiro os links internos quebrados. Links internos quebrados impactam diretamente a rastreabilidade, navegação e distribuição de link equity do seu site — tudo que você controla totalmente.',
      },
      {
        question: 'O que é link equity e como links quebrados o afetam?',
        answer: 'Link equity é o valor de ranqueamento transferido de uma página para outra através de hiperlinks. Quando um link quebrado aponta para um erro 404, o link equity é desperdiçado. Ao configurar redirecionamentos 301, você pode recuperar link equity perdido.',
      },
      {
        question: 'Como uso dados de links quebrados para link building?',
        answer: 'Link building com links quebrados é uma estratégia comprovada de aquisição de links. Encontre páginas quebradas em sites de concorrentes ou do setor, crie conteúdo no seu próprio site que cubra o mesmo tema e então entre em contato com os sites que linkavam para a página quebrada.',
      },
      {
        question: 'Quais códigos de status HTTP indicam links quebrados?',
        answer: 'Os mais comuns são: 404 (Não encontrado), 410 (Removido), 500 (Erro interno do servidor), 502 (Bad Gateway) e 503 (Serviço indisponível). Além disso, cadeias de redirecionamento 301 e 302 desperdiçam link equity e diminuem o tempo de carregamento da página.',
      },
      {
        question: 'Links quebrados podem fazer o Google desindexar minhas páginas?',
        answer: 'Alguns poucos links quebrados não causam desindexação. No entanto, se uma porcentagem significativa das URLs do seu site retorna erros 404, o Google pode reduzir a taxa de rastreamento do seu domínio. Auditorias regulares previnem essa deterioração.',
      },
    ],
  },

  'ai-visibility-checker': {
    slug: 'ai-visibility-checker',
    name: 'Verificador de Visibilidade em IA',
    title: 'Verificador de Visibilidade em IA Gratuito',
    description: 'Veja como os AI Overviews do Google afetam seu site. Descubra qual porcentagem das suas palavras-chave aciona AI Overviews, quanto tráfego está em risco e obtenha um Score de Visibilidade em IA.',
    metaDescription: 'Verifique gratuitamente como os AI Overviews do Google impactam seu site. Veja sua taxa de exposição a AI Overview, palavras-chave afetadas, tráfego em risco e Score de Visibilidade em IA.',
    iconName: 'Sparkles',
    category: 'other',
    inputType: 'url',
    inputLabel: 'Digite um domínio',
    inputPlaceholder: 'ex.: example.com',
    buttonText: 'Verificar Visibilidade em IA',
    options: [],
    resultType: 'ai-visibility',
    metricsToShow: ['ai_exposure', 'ai_keywords', 'traffic_at_risk'],
    tableColumns: [
      { key: 'metric', label: 'Métrica', sortable: false, type: 'text' },
      { key: 'value', label: 'Valor', sortable: true, type: 'number' },
    ],
    apiEndpoint: 'ai-visibility-checker',
    freeResultLimit: 1,
    useCases: [
      {
        title: 'Verifique a visibilidade de qualquer site na busca impulsionada por IA',
        description: 'AI Overviews, ChatGPT, Perplexity e Gemini estão reformulando como os usuários encontram informações — e a maioria dos sites não tem ideia de como está performando nessa nova paisagem. Insira qualquer domínio, clique em "Verificar Visibilidade em IA" e obtenha uma auditoria abrangente de como o site aparece nos resultados de busca por IA. Este é o primeiro passo na AI Engine Optimization (AEO), a disciplina emergente ao lado do SEO tradicional.',
        image: '/ai visibility checker/check any websites visibility in llms.png',
      },
      {
        title: 'Analise a distribuição de palavras-chave em AI Overview e posicionamento',
        description: 'As métricas detalhadas mostram Total de Palavras-chave Ranqueadas, Palavras-chave com AI Overviews, Taxa de Exposição a AI Overview, distribuição de palavras-chave por posição (#1 AI Keywords, #2–3, #4–10), Tráfego Orgânico de AI Keywords e Tráfego Orgânico total. Essa decomposição granular mostra exatamente quanto do seu portfólio de palavras-chave é afetado pelos AI Overviews do Google.',
        image: '/ai visibility checker/see keyword distribution for ai overview.png',
      },
      {
        title: 'Quantifique quanto tráfego está em risco por causa dos AI Overviews',
        description: 'A exibição de métrica dupla mostra Palavras-chave com AI Overviews e Tráfego em Risco. "Tráfego em Risco" estima o tráfego orgânico que poderia diminuir conforme AI Overviews absorvem cliques que anteriormente iam para resultados orgânicos tradicionais. Esta é a métrica mais importante para entender o impacto da busca por IA no seu negócio.',
        image: '/ai visibility checker/see number of keywords in ai overview and which percentage of your traffic is at risk with google ai overviews.png',
      },
      {
        title: 'Faça benchmarking da força do domínio contra exposição a AI Overview',
        description: 'O painel combina seu Domain Score (ex.: 97 "Muito Forte") com sua porcentagem de Exposição a AI Overview. Essa combinação é crucial: um domínio forte não o protege dos AI Overviews. Mesmo os sites mais autoritativos enfrentam erosão massiva da taxa de cliques por respostas geradas por IA. O Domain Score mostra sua força tradicional de SEO, enquanto a métrica de exposição mostra quanto dessa força está ameaçada pela IA.',
        image: '/ai visibility checker/see your domain score in ai overview and exposure level to ai overview.png',
      },
    ],
    faqs: [
      {
        question: 'O que é visibilidade em IA e por que é importante para SEO em 2025–2026?',
        answer: 'Visibilidade em IA refere-se a quão proeminente seu site, marca ou conteúdo aparece em experiências de busca impulsionadas por IA — incluindo Google AI Overviews, respostas do ChatGPT, respostas do Perplexity, resultados do Gemini e Microsoft Copilot. É importante porque esses sistemas de IA estão mudando fundamentalmente o comportamento de busca. Os AI Overviews do Google agora aparecem para mais de 70% das consultas informacionais.',
      },
      {
        question: 'O que são Google AI Overviews e como eles afetam o tráfego orgânico?',
        answer: 'Google AI Overviews são resumos de respostas gerados por IA que aparecem no topo dos resultados de busca do Google para muitas consultas. Estudos mostram que AI Overviews podem reduzir as taxas de cliques nos resultados orgânicos de 18 a 64%, dependendo do tipo de consulta.',
      },
      {
        question: 'O que significa "Tráfego em Risco" e como é calculado?',
        answer: '"Tráfego em Risco" estima o tráfego orgânico que poderia diminuir conforme AI Overviews absorvem cliques. É calculado identificando todas as palavras-chave onde seu site ranqueia E o Google exibe um AI Overview.',
      },
      {
        question: 'O que é Exposição a AI Overview e o que uma porcentagem alta significa?',
        answer: 'Exposição a AI Overview é a porcentagem das suas palavras-chave ranqueadas que acionam Google AI Overviews. Uma exposição de 76,8% significa que para mais de três quartos das suas palavras-chave ranqueadas, o Google está mostrando uma resposta gerada por IA acima dos resultados orgânicos.',
      },
      {
        question: 'Como a visibilidade em IA difere da visibilidade SEO tradicional?',
        answer: 'A visibilidade SEO tradicional mede sua presença nos resultados orgânicos padrão de busca. A visibilidade em IA mede sua presença em respostas geradas por IA. As duas podem divergir: um site na posição #1 organicamente pode não ser citado no AI Overview.',
      },
      {
        question: 'O que é AI Engine Optimization (AEO) e como começo?',
        answer: 'AEO é a prática de otimizar seu conteúdo para ser referenciado, citado e apresentado em respostas de busca geradas por IA. Estratégias-chave incluem: fornecer respostas claras e concisas, usar dados estruturados e Schema markup, construir autoridade temática, incluir dados originais e manter altos sinais de E-E-A-T.',
      },
      {
        question: 'Como a força do domínio afeta a citação em AI Overview?',
        answer: 'Sistemas de IA, incluindo os AI Overviews do Google, tendem a citar fontes autoritativas e reconhecidas com mais frequência. Scores de domínio mais altos correlacionam-se com taxas mais altas de citação em respostas de IA. Porém, a força do domínio sozinha não é suficiente.',
      },
      {
        question: 'Quais tipos de conteúdo são mais vulneráveis à perda de tráfego por AI Overview?',
        answer: 'Conteúdo informacional que responde perguntas factuais simples é o mais vulnerável — definições, respostas rápidas de como fazer, estatísticas, comparações e consultas "o que é". Tipos de conteúdo mais resilientes incluem: análises aprofundadas, ferramentas interativas, pesquisa original e comparações de produtos com experiência pessoal.',
      },
      {
        question: 'Posso ver quais plataformas de IA citam meu conteúdo?',
        answer: 'Esta ferramenta mede especificamente a exposição a AI Overview no Google. Para monitoramento mais amplo de plataformas de IA (ChatGPT, Perplexity, Gemini, Copilot), ferramentas dedicadas de monitoramento de marca rastreiam onde e como sua marca aparece nas plataformas de IA.',
      },
      {
        question: 'O que devo fazer se minha Exposição a AI Overview está acima de 50%?',
        answer: 'Alta exposição requer uma resposta multifacetada: (1) Audite quais palavras-chave específicas acionam AI Overviews, (2) Otimize suas páginas de maior tráfego para citação por IA, (3) Diversifique fontes de tráfego, (4) Crie formatos de conteúdo que AI Overviews não podem replicar, e (5) Monitore mensalmente.',
      },
      {
        question: 'Como o Domain Score no contexto de visibilidade em IA se relaciona com a autoridade tradicional?',
        answer: 'O Domain Score ao lado dos dados de AI Overview é a mesma métrica de autoridade baseada na força do perfil de backlinks. No contexto de visibilidade em IA, ele fornece perspectiva crucial: um Domain Score forte significa que sua base tradicional de SEO é sólida, mas a porcentagem de Exposição a AI mostra quanto dessa base está sendo perturbada.',
      },
      {
        question: 'A visibilidade em IA é relevante para sites B2B e corporativos?',
        answer: 'Com certeza. Compradores B2B utilizam cada vez mais ferramentas de IA para pesquisa de fornecedores, avaliação de tecnologia e suporte a decisões de compra. Os Google AI Overviews são especialmente prevalentes para consultas informacionais B2B. Marcas corporativas que aparecem como citações em AI Overviews ganham credibilidade significativa.',
      },
    ],
  },
};

export function getSeoToolBySlugPt(slug: string): SeoToolConfig | undefined {
  return seoToolsPt[slug];
}

export function getAllSeoToolsPt(): SeoToolConfig[] {
  return Object.values(seoToolsPt);
}

export function getAllSeoToolSlugsPt(): string[] {
  return Object.keys(seoToolsPt);
}
