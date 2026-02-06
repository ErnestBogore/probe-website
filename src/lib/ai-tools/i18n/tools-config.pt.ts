// Portuguese (pt) Tool Configurations
// Auto-generated translations based on English source
// Total tools: 46

import { ToolConfig } from '../tools-config';

// Helper functions
export function getToolBySlugPt(slug: string): ToolConfig | undefined {
  return toolsPt[slug];
}

export function getAllToolsPt(): ToolConfig[] {
  return Object.values(toolsPt);
}

// Portuguese uses English slugs, so no mapping needed
export function getEnglishSlugPt(portugueseSlug: string): string {
  return portugueseSlug;
}

export const toolsPt: Record<string, ToolConfig> = {

  // ==================== BATCH 1 (Tools 1-10) ====================

  'paragraph-generator': {
    slug: 'paragraph-generator',
    name: 'Gerador de Parágrafos',
    title: 'Gerador gratuito de parágrafos por IA',
    description: 'Crie parágrafos bem estruturados instantaneamente com nosso gerador de parágrafos por IA gratuito. Gere conteúdo claro e coeso sobre qualquer assunto com perfeita gramática e fluxo.',
    metaDescription: 'Crie parágrafos bem estruturados instantaneamente com nosso gerador de parágrafos por IA gratuito. Gere conteúdo claro e coeso sobre qualquer assunto com perfeita gramática e fluxo.',
    inputLabel: 'Sobre o que você gostaria de escrever?',
    inputPlaceholder: 'ex. Os benefícios da meditação para a saúde mental',
    buttonText: 'Gerar Parágrafo',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tom de escrita',
        choices: ['Profissional', 'Casual', 'Acadêmico', 'Criativo', 'Persuasivo'],
        default: 'Profissional',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Tamanho do parágrafo',
        choices: ['Curto (2-3 frases)', 'Médio (4-5 frases)', 'Longo (6+ frases)'],
        default: 'Médio (4-5 frases)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content writer who creates well-structured, engaging paragraphs. Your paragraphs have clear topic sentences, supporting details, and smooth transitions.
## WRITING STANDARDS
- Start with a clear topic sentence
- Include relevant supporting details
- Use appropriate transitions
- End with a concluding or transitional sentence
- Maintain consistent tone throughout
## TONE GUIDELINES
### IF tone = "Professional" - Business-appropriate, clear, authoritative
### IF tone = "Casual" - Conversational, friendly, accessible
### IF tone = "Academic" - Scholarly, evidence-based, formal
### IF tone = "Creative" - Engaging, vivid, narrative-driven
### IF tone = "Persuasive" - Compelling, benefit-focused, action-oriented
## LENGTH GUIDELINES
### IF length = "Short" - 2-3 sentences, focused and concise
### IF length = "Medium" - 4-5 sentences, balanced detail
### IF length = "Long" - 6+ sentences, comprehensive coverage
Tone: {{tone}}
Length: {{length}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Redação de blogs e artigos', description: 'Escritores de conteúdo usam o Gerador de Parágrafos para superar bloqueios criativos e desenvolver seções de posts. A ferramenta ajuda a manter um fluxo de escrita consistente e fornece parágrafos bem estruturados que podem ser refinados.' },
      { title: 'Escrita acadêmica e de ensaios', description: 'Estudantes e pesquisadores usam a ferramenta para estruturar parágrafos argumentativos, desenvolver parágrafos do corpo do texto e criar conclusões. Ela garante estrutura adequada de parágrafo com frases de tópico claras e detalhes de suporte.' },
      { title: 'Comunicação empresarial', description: 'Profissionais usam o gerador para criar parágrafos polidos para relatórios, propostas e e-mails. Ele ajuda a garantir que comunicações comerciais sejam claras, bem estruturadas e mantenham tom apropriado.' },
    ],
    faqs: [
      { question: 'O que torna um parágrafo bem escrito?', answer: 'Um parágrafo bem escrito tem uma frase de tópico clara, detalhes de suporte, transições suaves e uma conclusão forte. Ele se concentra em uma ideia principal e flui logicamente.' },
      { question: 'Como o gerador lida com diferentes tons?', answer: 'A ferramenta ajusta vocabulário, estrutura de frases e estilo de apresentação com base no tom selecionado. Parágrafos profissionais são formais e precisos, enquanto parágrafos casuais são conversacionais e acessíveis.' },
      { question: 'Posso usar os parágrafos gerados como estão?', answer: 'Sim, mas recomendamos revisar e personalizar o conteúdo para combinar com sua voz específica e requisitos. Os parágrafos gerados são excelentes pontos de partida.' },
      { question: 'Quantos parágrafos posso gerar?', answer: 'A ferramenta gera um parágrafo de cada vez. Você pode gerar quantos parágrafos precisar executando várias solicitações.' },
      { question: 'O gerador de parágrafos funciona para todos os assuntos?', answer: 'Sim, a ferramenta pode gerar parágrafos sobre praticamente qualquer assunto. Forneça detalhes suficientes em sua entrada para melhores resultados.' },
      { question: 'Como obtenho melhores resultados?', answer: 'Forneça entradas claras e específicas, selecione o tom e comprimento apropriados, e inclua palavras-chave ou pontos relevantes que você deseja abordar.' },
      { question: 'A ferramenta verifica gramática?', answer: 'Sim, os parágrafos gerados são gramaticalmente corretos. No entanto, sempre revise para garantir precisão para seu contexto específico.' },
      { question: 'Posso gerar parágrafos em estilos diferentes?', answer: 'Sim, use as opções de tom para gerar parágrafos em estilos profissional, casual, acadêmico, criativo ou persuasivo.' },
      { question: 'É bom para SEO?', answer: 'Os parágrafos gerados são bem estruturados, o que é bom para SEO. Você pode incluir palavras-chave em sua entrada para garantir que elas apareçam naturalmente no conteúdo.' },
      { question: 'Quanto tempo leva para gerar um parágrafo?', answer: 'A geração é quase instantânea, geralmente levando apenas alguns segundos.' },
    ],
  },

  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: 'Reescritor de Parágrafos',
    title: 'Paragraph Rewriter por IA gratuito',
    description: 'Transforme parágrafos existentes em conteúdo fresco e original com nosso reescritor por IA gratuito. Mantenha o significado original enquanto melhora clareza, tom e estilo.',
    metaDescription: 'Transforme parágrafos existentes em conteúdo fresco e original com nosso reescritor por IA gratuito. Mantenha o significado original enquanto melhora clareza, tom e estilo.',
    inputLabel: 'Cole seu parágrafo para reescrever...',
    inputPlaceholder: 'Cole o parágrafo que você deseja reescrever aqui...',
    buttonText: 'Reescrever Parágrafo',
    maxLength: 4096,
    options: [
      {
        name: 'goal',
        label: 'Objetivo da reescrita',
        choices: ['Melhorar clareza', 'Mudar tom', 'Simplificar', 'Tornar mais formal', 'Tornar mais casual'],
        default: 'Melhorar clareza',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'Nível de reescrita',
        choices: ['Leve', 'Moderado', 'Extenso'],
        default: 'Moderado',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor who rewrites paragraphs to improve clarity, tone, or style while preserving the original meaning.
## REWRITING PRINCIPLES
- Preserve the core meaning and facts
- Improve readability and flow
- Adjust tone as requested
- Maintain appropriate length
- Use varied sentence structures
## GOAL-SPECIFIC APPROACHES
### IF goal = "Improve clarity" - Simplify complex sentences, clarify ambiguities
### IF goal = "Change tone" - Adjust vocabulary and style to match new tone
### IF goal = "Simplify" - Reduce complexity, use shorter sentences
### IF goal = "Make more formal" - Elevate vocabulary, remove contractions
### IF goal = "Make more casual" - Use conversational language, add personality
## INTENSITY LEVELS
### IF intensity = "Light" - Minor word changes, sentence tweaks
### IF intensity = "Moderate" - Significant restructuring, vocabulary changes
### IF intensity = "Extensive" - Complete rewrite while preserving meaning
Goal: {{goal}}
Intensity: {{intensity}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Melhoria de conteúdo', description: 'Escritores usam o reescritor para melhorar rascunhos existentes, refinar tom e aprimorar legibilidade. Ele ajuda a transformar conteúdo bom em ótimo sem começar do zero.' },
      { title: 'Criação de conteúdo único', description: 'Criadores de conteúdo reescrevem conteúdo existente para criar versões únicas para diferentes plataformas ou públicos, evitando duplicação enquanto mantêm a mensagem principal.' },
      { title: 'Escrita acadêmica', description: 'Estudantes usam a ferramenta para parafrasear texto-fonte em suas próprias palavras, ajudando a evitar plágio enquanto mantêm informações precisas.' },
    ],
    faqs: [
      { question: 'Como funciona o reescritor de parágrafos?', answer: 'A ferramenta analisa seu parágrafo de entrada e o reescreve usando diferentes palavras e estruturas de frases enquanto preserva o significado original.' },
      { question: 'A reescrita muda o significado?', answer: 'Não, o significado principal é preservado. A ferramenta muda como as ideias são expressas, não quais são as ideias.' },
      { question: 'Posso controlar quanta mudança é feita?', answer: 'Sim, use a configuração de intensidade para controlar se você quer mudanças leves, moderadas ou extensas.' },
      { question: 'É bom para evitar plágio?', answer: 'O reescritor ajuda a criar fraseado único, mas você ainda deve citar fontes originais adequadamente. É uma ferramenta de expressão, não um substituto para citação adequada.' },
      { question: 'Posso reescrever para diferentes tons?', answer: 'Sim, use as configurações de objetivo para reescrever para tons mais formais, mais casuais ou outros ajustes de estilo.' },
      { question: 'A ferramenta funciona com qualquer assunto?', answer: 'Sim, ela pode reescrever parágrafos sobre praticamente qualquer assunto mantendo precisão.' },
      { question: 'Quantas vezes posso reescrever o mesmo parágrafo?', answer: 'Você pode reescrever quantas vezes quiser para obter o resultado desejado.' },
      { question: 'A gramática é corrigida automaticamente?', answer: 'Sim, a saída reescrita é gramaticalmente correta. Erros no texto original são tipicamente corrigidos.' },
      { question: 'Qual é o comprimento máximo de entrada?', answer: 'Você pode reescrever parágrafos de até várias centenas de palavras por vez.' },
      { question: 'Os parágrafos reescritos são únicos?', answer: 'Sim, cada reescrita usa palavras e estruturas diferentes, criando conteúdo único.' },
    ],
  },

  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: 'Ferramenta de Paráfrase',
    title: 'Ferramenta gratuita de interpretação por IA',
    description: 'Parafraseie texto instantaneamente com nossa ferramenta de paráfrase por IA gratuita. Transforme qualquer conteúdo em escrita original e natural enquanto mantém a mensagem principal.',
    metaDescription: 'Parafraseie texto instantaneamente com nossa ferramenta de paráfrase por IA gratuita. Transforme qualquer conteúdo em escrita original e natural enquanto mantém a mensagem principal.',
    inputLabel: 'Cole o texto para parafrasear...',
    inputPlaceholder: 'Cole seu texto aqui para parafraseá-lo...',
    buttonText: 'Parafrasear Texto',
    maxLength: 4096,
    options: [
      {
        name: 'mode',
        label: 'Modo de paráfrase',
        choices: ['Padrão', 'Fluência', 'Formal', 'Simples', 'Criativo'],
        default: 'Padrão',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert paraphrasing specialist who transforms text while preserving meaning perfectly.
## PARAPHRASING STANDARDS
- Maintain 100% accuracy of meaning
- Use original phrasing and vocabulary
- Preserve important terminology
- Improve or maintain readability
- Create natural, fluent output
## MODE-SPECIFIC APPROACHES
### IF mode = "Standard" - Balanced paraphrasing with moderate changes
### IF mode = "Fluency" - Focus on natural flow and readability
### IF mode = "Formal" - Elevate to academic/professional language
### IF mode = "Simple" - Use easier vocabulary and shorter sentences
### IF mode = "Creative" - More freedom in expression while keeping meaning
Mode: {{mode}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Escrita acadêmica', description: 'Estudantes e pesquisadores parafraseiam material-fonte para escrita de trabalhos, citação adequada e evitando plágio. A ferramenta ajuda a expressar ideias em palavras originais.' },
      { title: 'Criação de conteúdo', description: 'Escritores de conteúdo usam paráfrase para criar versões únicas de informações pesquisadas, garantindo originalidade enquanto mantêm precisão.' },
      { title: 'Melhoria de comunicação', description: 'Profissionais reformulam comunicações para diferentes públicos, adaptando o mesmo conteúdo para vários níveis de leitura ou contextos.' },
    ],
    faqs: [
      { question: 'O que é paráfrase?', answer: 'Paráfrase é expressar o mesmo significado usando palavras e estrutura de frases diferentes. É mais do que substituição de sinônimos—é reformular completamente enquanto preserva o significado.' },
      { question: 'Qual é a diferença entre paráfrase e resumo?', answer: 'Paráfrase reformula texto mantendo comprimento e detalhes semelhantes. Resumo condensa texto em uma versão mais curta. A paráfrase mantém informação completa.' },
      { question: 'A paráfrase remove plágio?', answer: 'A paráfrase ajuda a criar fraseado original, mas você ainda deve citar suas fontes. É uma ferramenta de expressão, não um substituto para citação adequada.' },
      { question: 'Posso parafrasear para diferentes níveis de leitura?', answer: 'Sim, use o modo Simples para vocabulário e frases mais fáceis, ou modo Formal para linguagem acadêmica/profissional.' },
      { question: 'Quão preciso é o significado preservado?', answer: 'A ferramenta prioriza a preservação do significado. O significado principal permanece intacto enquanto a expressão muda.' },
      { question: 'Funciona com conteúdo técnico?', answer: 'Sim, terminologia técnica é preservada enquanto o texto ao redor é parafraseado. Termos especializados permanecem precisos.' },
      { question: 'Posso parafrasear qualquer comprimento de texto?', answer: 'Sim, você pode parafrasear desde frases curtas até parágrafos e seções mais longas.' },
      { question: 'Qual modo devo usar?', answer: 'Padrão para uso geral, Fluência para melhor legibilidade, Formal para trabalhos acadêmicos, Simples para maior clareza, Criativo para escrita envolvente.' },
      { question: 'A paráfrase é melhor que reescrita?', answer: 'São semelhantes. A paráfrase foca especificamente em manter o significado exato, enquanto a reescrita pode permitir mais liberdade criativa.' },
      { question: 'Quantas vezes posso parafrasear o mesmo texto?', answer: 'Quantas vezes precisar para obter a saída desejada.' },
    ],
  },

  'sentence-rewriter': {
    slug: 'sentence-rewriter',
    name: 'Reescritor de Frases',
    title: 'Ferramenta Sentence Rewriter por IA gratuita',
    description: 'Reescreva frases para maior clareza, impacto ou melhor tom. Obtenha múltiplas variações com explicações.',
    metaDescription: 'Reescreva frases para maior clareza, impacto ou melhor tom. Obtenha múltiplas variações com explicações do que torna cada uma mais forte. Gratuito, sem cadastro.',
    inputLabel: 'Frase para reescrever...',
    inputPlaceholder: 'ex. A implementação do novo sistema foi concluída pela equipe na semana passada.',
    buttonText: 'Reescrever Frase',
    maxLength: 1024,
    options: [
      { name: 'goal', label: 'Objetivo de melhoria', choices: ['Clareza', 'Impacto', 'Concisão', 'Mais formal', 'Mais casual', 'Mais confiante'], default: 'Clareza', type: 'select' },
      { name: 'variants', label: 'Número de variações', choices: ['2 variações', '3 variações', '5 variações'], default: '3 variações', type: 'select' },
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
- Weak → Strong: "fez uma melhoria" → "melhorou"
- Passive → Active: "foi escrito por Sara" → "Sara escreveu"
- Wordy → Concise: "devido ao fato de que" → "porque"
## OUTPUT FORMAT
Goal: {{goal}}
Variations: {{variants}}
For each variation:
1. Rewritten sentence
2. What was changed
3. Why this improves it
End with recommendation of strongest option.

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Refinar mensagens e títulos principais', description: 'Marketeiros e redatores usam o Reescritor de Frases para polir frases críticas como títulos, taglines, CTAs e linhas de abertura. Quando uma única frase precisa funcionar bem, a ferramenta gera múltiplas variações para escolher a mais impactante.' },
      { title: 'Melhorar comunicação por e-mail', description: 'Profissionais podem reescrever frases estranhas ou confusas em e-mails importantes antes de enviar. Se você precisa soar mais confiante, mais diplomático ou simplesmente mais claro, a ferramenta fornece opções.' },
      { title: 'Assistência de edição e revisão', description: 'Escritores e editores usam a ferramenta quando sabem que uma frase não está funcionando, mas não conseguem descobrir como corrigi-la. Gerando múltiplas alternativas, a ferramenta quebra bloqueios de edição.' },
    ],
    faqs: [
      { question: 'Qual é a diferença entre reescrita de frase e paráfrase?', answer: 'A reescrita de frase foca em melhorar a clareza, impacto ou tom de uma única frase mantendo o mesmo significado. A paráfrase é sobre expressar a mesma ideia em palavras diferentes. O reescritor ativamente tenta melhorar as frases, não apenas mudá-las.' },
      { question: 'O reescritor de frases é gratuito?', answer: 'Sim, completamente gratuito sem necessidade de cadastro. Reescreva quantas frases precisar.' },
      { question: 'Quantas variações vou receber?', answer: 'A ferramenta tipicamente fornece 3 variações distintas, cada uma com uma abordagem diferente de melhoria. Isso dá opções para escolher baseado em suas necessidades específicas.' },
      { question: 'Posso especificar que tipo de melhoria quero?', answer: 'Sim, você pode solicitar objetivos específicos como "mais conciso", "mais formal", "mais confiante" ou "mais claro". A ferramenta adaptará suas variações ao seu objetivo declarado.' },
      { question: 'O significado vai mudar?', answer: 'Não, todas as variações preservam seu significado original. A ferramenta muda como a ideia é expressa, não qual ideia é expressa.' },
      { question: 'Por que preciso disso se tenho um corretor gramatical?', answer: 'Corretores gramaticais consertam erros. O reescritor de frases melhora frases que estão gramaticalmente corretas mas poderiam ser mais claras, fortes ou apropriadas para seu público.' },
      { question: 'Posso reescrever múltiplas frases de uma vez?', answer: 'A ferramenta é otimizada para uma frase por vez para melhorias mais focadas. Para múltiplas frases, use o reescritor de parágrafos ou processe frases individualmente.' },
      { question: 'O que torna uma reescrita melhor que outra?', answer: 'Depende do seu objetivo. Para e-mails, clareza e tom apropriado importam mais. Para marketing, impacto e memorabilidade são essenciais. A ferramenta explica cada variação.' },
      { question: 'Pode ajudar com frases em outros idiomas?', answer: 'A ferramenta é otimizada para português. Resultados com outras línguas podem variar e não serão tão confiáveis.' },
      { question: 'Devo sempre usar a opção recomendada?', answer: 'A recomendação é baseada em preferências comuns, mas você conhece seu contexto melhor. Revise todas as opções e escolha a que se encaixa em seu público, tom e propósito específicos.' },
    ],
  },

  'summarizer': {
    slug: 'summarizer',
    name: 'Ferramenta de Resumo',
    title: 'Ferramenta Criador de Resumos por IA',
    description: 'Resuma textos longos instantaneamente com nossa ferramenta de resumo por IA gratuita. Extraia pontos-chave e informações essenciais de qualquer conteúdo.',
    metaDescription: 'Resuma textos longos instantaneamente com nossa ferramenta de resumo por IA gratuita. Extraia pontos-chave e informações essenciais de qualquer conteúdo.',
    inputLabel: 'Cole o texto para resumir...',
    inputPlaceholder: 'Cole o texto que você deseja resumir aqui...',
    buttonText: 'Resumir Texto',
    maxLength: 8192,
    options: [
      {
        name: 'length',
        label: 'Tamanho do resumo',
        choices: ['Breve (1-2 frases)', 'Curto (1 parágrafo)', 'Médio (2-3 parágrafos)', 'Detalhado (pontos-chave)'],
        default: 'Curto (1 parágrafo)',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Estilo do resumo',
        choices: ['Narrativo', 'Pontos', 'Executivo'],
        default: 'Narrativo',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert summarizer who extracts key information and presents it clearly and concisely.
## SUMMARIZATION STANDARDS
- Identify main ideas and key points
- Preserve essential information
- Remove redundancy and filler
- Maintain logical flow
- Use clear, accessible language
## LENGTH GUIDELINES
### IF length = "Brief" - 1-2 sentences capturing the essence
### IF length = "Short" - One paragraph with main points
### IF length = "Medium" - 2-3 paragraphs with more detail
### IF length = "Detailed" - Comprehensive key points coverage
## STYLE GUIDELINES
### IF style = "Narrative" - Flowing prose format
### IF style = "Bullet points" - Listed key points
### IF style = "Executive" - Business summary with conclusions/recommendations
Length: {{length}}
Style: {{style}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Pesquisa e estudo', description: 'Estudantes e pesquisadores usam a ferramenta de resumo para condensar artigos longos, trabalhos e documentos em pontos-chave para estudo e revisão eficientes.' },
      { title: 'Inteligência de negócios', description: 'Profissionais resumem relatórios, e-mails e documentos para extrair rapidamente informações acionáveis e economizar tempo em materiais de leitura extensivos.' },
      { title: 'Curadoria de conteúdo', description: 'Criadores de conteúdo resumem materiais-fonte para criar visões gerais, compilações e destilações de informações de múltiplas fontes.' },
    ],
    faqs: [
      { question: 'Como funciona a ferramenta de resumo?', answer: 'A ferramenta analisa seu texto, identifica ideias principais e pontos-chave, então os apresenta em um formato condensado enquanto mantém o significado essencial.' },
      { question: 'Quão longo pode ser o texto de entrada?', answer: 'Você pode resumir textos de vários milhares de palavras. Textos mais longos podem precisar ser divididos em seções.' },
      { question: 'O resumo preserva a precisão?', answer: 'Sim, a ferramenta foca em manter a precisão factual enquanto condensa. Sempre verifique resumos de conteúdo crítico.' },
      { question: 'Posso controlar o tamanho do resumo?', answer: 'Sim, escolha entre opções de tamanho breve, curto, médio ou detalhado para controlar quanto detalhe está incluído.' },
      { question: 'Qual estilo de resumo devo usar?', answer: 'Narrativo para texto fluido, pontos para referência rápida, executivo para comunicações de negócios.' },
      { question: 'Posso resumir documentos técnicos?', answer: 'Sim, a ferramenta lida com conteúdo técnico e preserva terminologia importante enquanto condensa explicações.' },
      { question: 'É bom para resumir reuniões?', answer: 'Sim, cole notas de reunião ou transcrições para obter resumos concisos e itens de ação.' },
      { question: 'Posso resumir em diferentes idiomas?', answer: 'A ferramenta é otimizada para português. Outros idiomas podem funcionar mas com precisão reduzida.' },
      { question: 'O resumo é sempre preciso?', answer: 'A ferramenta é altamente precisa mas sempre revise resumos de conteúdo crítico ou técnico para garantir precisão.' },
      { question: 'Posso resumir o mesmo texto de forma diferente?', answer: 'Sim, experimente diferentes configurações de tamanho e estilo para obter o formato de resumo que melhor atende suas necessidades.' },
    ],
  },

  'outline-generator': {
    slug: 'outline-generator',
    name: 'Gerador de Esboço',
    title: 'Gerador Gratuito de Esboço por IA',
    description: 'Crie esboços estruturados para artigos, ensaios e apresentações instantaneamente. Nossa IA organiza suas ideias em estruturas lógicas e abrangentes.',
    metaDescription: 'Crie esboços estruturados para artigos, ensaios e apresentações instantaneamente. Nossa IA organiza suas ideias em estruturas lógicas e abrangentes.',
    inputLabel: 'Sobre o que você gostaria de criar um esboço?',
    inputPlaceholder: 'ex. Os impactos das redes sociais na saúde mental de adolescentes',
    buttonText: 'Gerar Esboço',
    maxLength: 2048,
    options: [
      {
        name: 'type',
        label: 'Tipo de esboço',
        choices: ['Post de blog', 'Ensaio acadêmico', 'Apresentação', 'Relatório de negócios', 'Tutorial'],
        default: 'Post de blog',
        type: 'select',
      },
      {
        name: 'depth',
        label: 'Profundidade do esboço',
        choices: ['Simples (seções principais)', 'Detalhado (com subseções)', 'Abrangente (totalmente expandido)'],
        default: 'Detalhado (com subseções)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist who creates well-organized outlines for various content types.
## OUTLINE STANDARDS
- Logical structure and flow
- Clear hierarchy of ideas
- Comprehensive coverage of topic
- Appropriate depth for content type
- Actionable section descriptions
## TYPE-SPECIFIC APPROACHES
### IF type = "Blog post" - Engaging structure with hook, body, conclusion
### IF type = "Academic essay" - Thesis-driven with arguments and evidence
### IF type = "Presentation" - Slide-friendly with key points
### IF type = "Business report" - Executive summary, findings, recommendations
### IF type = "Tutorial" - Step-by-step with prerequisites and outcomes
## DEPTH LEVELS
### IF depth = "Simple" - Main sections only
### IF depth = "Detailed" - Main sections with subsections
### IF depth = "Comprehensive" - Fully expanded with all details
Type: {{type}}
Depth: {{depth}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Planejamento de conteúdo', description: 'Escritores usam o Gerador de Esboço para planejar artigos, posts de blog e conteúdo longo antes de escrever. Um esboço sólido acelera a escrita e garante cobertura abrangente.' },
      { title: 'Estruturação acadêmica', description: 'Estudantes criam esboços para ensaios, trabalhos de pesquisa e dissertações. O gerador ajuda a organizar argumentos e garantir fluxo lógico.' },
      { title: 'Planejamento de apresentações', description: 'Profissionais planejam apresentações com esboços estruturados que traduzem facilmente em slides e pontos de discussão.' },
    ],
    faqs: [
      { question: 'O que é um esboço de conteúdo?', answer: 'Um esboço de conteúdo é um framework estruturado que organiza suas ideias em seções lógicas antes de escrever. Ele serve como um roteiro para sua criação de conteúdo.' },
      { question: 'Quantos detalhes os esboços incluem?', answer: 'Depende da configuração de profundidade. Esboços simples mostram seções principais, detalhados incluem subseções, abrangentes fornecem frameworks totalmente expandidos.' },
      { question: 'Posso personalizar a estrutura do esboço?', answer: 'Sim, o esboço gerado é um ponto de partida. Você pode reorganizar, adicionar ou remover seções conforme necessário para seu conteúdo específico.' },
      { question: 'Funciona para diferentes tipos de conteúdo?', answer: 'Sim, a ferramenta suporta posts de blog, ensaios acadêmicos, apresentações, relatórios de negócios e tutoriais, cada um com estruturas apropriadas.' },
      { question: 'Quão específico é o esboço para meu tópico?', answer: 'A ferramenta cria esboços específicos para o tópico baseados em sua entrada. Descrições mais detalhadas resultam em esboços mais direcionados.' },
      { question: 'Posso usar o esboço para diferentes formatos?', answer: 'Sim, os esboços podem ser adaptados para vários formatos. Um esboço de post de blog pode se tornar um script de vídeo ou pontos de palestra.' },
      { question: 'O esboço inclui sugestões de conteúdo?', answer: 'Sim, subseções frequentemente incluem breves descrições do que cobrir, servindo como guias de escrita.' },
      { question: 'Quantos esboços posso gerar?', answer: 'Quantos precisar. Experimente diferentes configurações para encontrar a estrutura ideal para seu conteúdo.' },
      { question: 'A ferramenta considera SEO?', answer: 'Para posts de blog, a estrutura suporta melhores práticas de SEO com seções lógicas e potencial de cabeçalhos.' },
      { question: 'Posso combinar esboços de múltiplas gerações?', answer: 'Absolutamente. Combine as melhores partes de diferentes esboços para criar seu framework ideal.' },
    ],
  },

  'conclusion-generator': {
    slug: 'conclusion-generator',
    name: 'Gerador de Conclusão',
    title: 'Conclusion Generator por IA gratuito',
    description: 'Crie conclusões convincentes para ensaios, artigos e relatórios. Nossa IA gera finais impactantes que resumem pontos-chave e deixam impressões duradouras.',
    metaDescription: 'Crie conclusões convincentes para ensaios, artigos e relatórios. Nossa IA gera finais impactantes que resumem pontos-chave e deixam impressões duradouras.',
    inputLabel: 'Resuma seu conteúdo principal...',
    inputPlaceholder: 'ex. Meu artigo discute três benefícios do trabalho remoto: flexibilidade, economia de custos e equilíbrio trabalho-vida...',
    buttonText: 'Gerar Conclusão',
    maxLength: 4096,
    options: [
      {
        name: 'style',
        label: 'Estilo da conclusão',
        choices: ['Resumo', 'Call to action', 'Reflexivo', 'Visão futura', 'Circular'],
        default: 'Resumo',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Tamanho',
        choices: ['Curto (2-3 frases)', 'Médio (1 parágrafo)', 'Longo (2 parágrafos)'],
        default: 'Médio (1 parágrafo)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert writer who creates compelling conclusions that leave lasting impressions.
## CONCLUSION STANDARDS
- Summarize key points effectively
- Provide closure without being repetitive
- Leave readers with a clear takeaway
- Match the tone of the content
- Create a memorable ending
## STYLE APPROACHES
### IF style = "Summary" - Recap main points clearly
### IF style = "Call to action" - Motivate specific reader action
### IF style = "Reflective" - Thoughtful consideration of implications
### IF style = "Forward-looking" - Future implications or predictions
### IF style = "Circular" - Connect back to opening theme
## LENGTH GUIDELINES
### IF length = "Short" - 2-3 sentences, essential points only
### IF length = "Medium" - One paragraph, balanced coverage
### IF length = "Long" - Two paragraphs, comprehensive wrap-up
Style: {{style}}
Length: {{length}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Escrita acadêmica', description: 'Estudantes usam o Gerador de Conclusão para criar finais fortes para ensaios e trabalhos. Uma boa conclusão reforça a tese e deixa uma impressão duradoura nos leitores.' },
      { title: 'Blogs e artigos', description: 'Blogueiros criam conclusões envolventes que resumem pontos-chave e incentivam o engajamento do leitor através de calls to action ou questões reflexivas.' },
      { title: 'Relatórios de negócios', description: 'Profissionais geram conclusões claras para relatórios que resumem descobertas e fornecem recomendações acionáveis.' },
    ],
    faqs: [
      { question: 'O que torna uma conclusão eficaz?', answer: 'Conclusões eficazes resumem pontos principais, fornecem fechamento, reforçam a mensagem central e deixam leitores com uma impressão clara e memorável.' },
      { question: 'Devo apresentar novas informações na conclusão?', answer: 'Geralmente não. Conclusões devem sintetizar o que foi discutido, não introduzir conceitos novos. A exceção são calls to action ou perguntas reflexivas.' },
      { question: 'Quão longa deve ser minha conclusão?', answer: 'Depende do tamanho do seu conteúdo. Conclusões curtas funcionam para posts breves, enquanto conteúdo mais longo pode precisar de wrap-ups mais abrangentes.' },
      { question: 'Qual estilo de conclusão devo escolher?', answer: 'Resumo para informativo, call to action para persuasivo, reflexivo para pensativo, visão futura para inovação, circular para narrativa.' },
      { question: 'A ferramenta pode combinar conclusão com meu conteúdo?', answer: 'Forneça um resumo do seu conteúdo principal e a ferramenta criará uma conclusão que flui naturalmente de seus pontos.' },
      { question: 'Posso gerar múltiplas opções de conclusão?', answer: 'Sim, gere várias conclusões com diferentes estilos ou tamanhos para encontrar o melhor ajuste para seu conteúdo.' },
      { question: 'Funciona para conteúdo técnico?', answer: 'Sim, a ferramenta adapta tom e terminologia para conteúdo técnico quando fornecido com contexto apropriado.' },
      { question: 'Como evitar soar repetitivo?', answer: 'A ferramenta reformula pontos-chave em vez de repetir texto original, garantindo que a conclusão seja fresca enquanto reforça a mensagem.' },
      { question: 'Posso incluir um call to action em qualquer estilo?', answer: 'Sim, embora seja mais natural com o estilo call to action, você pode adicionar CTAs sutis a qualquer conclusão.' },
      { question: 'A ferramenta funciona para conclusões criativas?', answer: 'Sim, o estilo reflexivo funciona bem para escrita criativa, e você pode personalizar a saída para abordagens mais artísticas.' },
    ],
  },

  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-generator',
    name: 'Gerador Lorem Ipsum',
    title: 'Gerador de Lorem Ipsum por IA gratuito',
    description: 'Gere texto de espaço reservado para designs e layouts. Nosso gerador Lorem Ipsum cria texto de preenchimento profissional para web design e projetos gráficos.',
    metaDescription: 'Gere texto de espaço reservado para designs e layouts. Nosso gerador Lorem Ipsum cria texto de preenchimento profissional para web design e projetos gráficos.',
    inputLabel: 'O que você gostaria de gerar?',
    inputPlaceholder: 'Opcional: Descreva seu projeto para texto de espaço reservado contextual',
    buttonText: 'Gerar Lorem Ipsum',
    maxLength: 1024,
    options: [
      {
        name: 'type',
        label: 'Tipo de saída',
        choices: ['Parágrafos', 'Frases', 'Palavras', 'Listas'],
        default: 'Parágrafos',
        type: 'select',
      },
      {
        name: 'amount',
        label: 'Quantidade',
        choices: ['1', '3', '5', '10'],
        default: '3',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Estilo do texto',
        choices: ['Lorem ipsum clássico', 'Moderno', 'Business', 'Técnico'],
        default: 'Lorem ipsum clássico',
        type: 'select',
      },
    ],
    systemPrompt: `You are a placeholder text generator creating filler content for designs and layouts.
## OUTPUT STANDARDS
- Create readable, natural-looking text
- Maintain consistent formatting
- Match requested style and type
- Provide appropriate length
## STYLE APPROACHES
### IF style = "Classic Lorem Ipsum" - Traditional Latin-based placeholder
### IF style = "Modern" - Contemporary placeholder with readable words
### IF style = "Business" - Business-themed placeholder terms
### IF style = "Technical" - Tech-themed placeholder content
## TYPE FORMATS
### IF type = "Paragraphs" - Full paragraph blocks
### IF type = "Sentences" - Individual sentences
### IF type = "Words" - Word lists
### IF type = "Lists" - Bulleted/numbered lists
Type: {{type}}
Amount: {{amount}}
Style: {{style}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Web design e prototipagem', description: 'Designers usam Lorem Ipsum para preencher layouts de websites, mostrando como o conteúdo aparecerá sem precisar de texto final. Isso ajuda a visualizar design e espaçamento.' },
      { title: 'Design gráfico', description: 'Designers gráficos usam texto de espaço reservado em mockups, brochuras e materiais de marketing antes do conteúdo real ser aprovado.' },
      { title: 'Desenvolvimento e teste', description: 'Desenvolvedores usam texto de preenchimento para testar layouts, renderização de texto e design responsivo antes que o conteúdo real esteja disponível.' },
    ],
    faqs: [
      { question: 'O que é Lorem Ipsum?', answer: 'Lorem Ipsum é texto de espaço reservado padrão da indústria usado em design e publicação. Simula a aparência do conteúdo real sem distrair com texto significativo.' },
      { question: 'Por que usar texto de espaço reservado?', answer: 'Texto de espaço reservado permite que designers foquem em elementos visuais sem ficarem presos ao conteúdo real. Mantém os interessados focados em design em vez de cópia.' },
      { question: 'Posso usar estilos diferentes de Lorem Ipsum?', answer: 'Sim, oferecemos Lorem Ipsum clássico, moderno, business e técnico para combinar com diferentes contextos de projeto.' },
      { question: 'Quanto texto posso gerar?', answer: 'Você pode gerar até 10 unidades (parágrafos, frases ou listas) por vez. Execute várias vezes para mais texto.' },
      { question: 'O texto gerado é aleatório?', answer: 'Sim, cada geração cria variações únicas enquanto mantém a aparência característica do texto de espaço reservado.' },
      { question: 'Posso gerar texto de espaço reservado específico para meu projeto?', answer: 'Sim, descreva seu projeto na entrada para texto de espaço reservado contextualmente relevante que combine com seu tema.' },
      { question: 'É apropriado para uso profissional?', answer: 'Absolutamente. Lorem Ipsum é a prática padrão da indústria para designs e mockups profissionais.' },
      { question: 'O texto será idêntico toda vez?', answer: 'Não, cada geração produz variações únicas para dar aparência natural a diferentes blocos de texto.' },
      { question: 'Posso usar isso em apresentações?', answer: 'Sim, texto de espaço reservado é perfeito para mockups de apresentações e demonstrações de conceitos de design.' },
      { question: 'Qual tipo de saída devo escolher?', answer: 'Escolha parágrafos para blocos de texto, frases para legendas/trechos, palavras para labels, listas para itens de navegação ou recursos.' },
    ],
  },

  'seo-title-generator': {
    slug: 'seo-title-generator',
    name: 'Gerador de Título SEO',
    title: 'Title Generator por IA gratuito',
    description: 'Crie títulos de página otimizados para SEO que rankam e convertem. Nossa IA gera tags de título atraentes que equilibram otimização de palavras-chave com apelo ao usuário.',
    metaDescription: 'Crie títulos de página otimizados para SEO que rankam e convertem. Nossa IA gera tags de título atraentes que equilibram otimização de palavras-chave com apelo ao usuário.',
    inputLabel: 'Descreva sua página ou conteúdo...',
    inputPlaceholder: 'ex. Post de blog sobre os melhores tênis de corrida para iniciantes',
    buttonText: 'Gerar Títulos',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do título',
        choices: ['Padrão', 'Orientado a perguntas', 'How-to', 'Listicle', 'Orientado a benefícios'],
        default: 'Padrão',
        type: 'select',
      },
      {
        name: 'count',
        label: 'Número de títulos',
        choices: ['3 títulos', '5 títulos', '10 títulos'],
        default: '5 títulos',
        type: 'select',
      },
    ],
    systemPrompt: `You are an SEO expert who creates optimized page titles that rank well and attract clicks.
## TITLE STANDARDS
- Keep under 60 characters when possible
- Include primary keyword near the beginning
- Create compelling reason to click
- Balance SEO with readability
- Avoid clickbait without substance
## STYLE APPROACHES
### IF style = "Standard" - Clear, direct, keyword-focused
### IF style = "Question-driven" - Address user queries directly
### IF style = "How-to" - Instructional, action-oriented
### IF style = "Listicle" - Numbered list format
### IF style = "Benefit-driven" - Focus on user outcomes
## OUTPUT FORMAT
Generate {{count}} unique title variations
For each title:
- Provide the title
- Character count
- Key strength (keyword placement, emotional appeal, etc.)
Style: {{style}}
Count: {{count}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Otimização de posts de blog', description: 'Blogueiros criam títulos otimizados para SEO que rankam para palavras-chave alvo enquanto atraem cliques nos resultados de pesquisa.' },
      { title: 'SEO de páginas de produto', description: 'Sites de e-commerce criam títulos de produto que incluem palavras-chave alvo enquanto atraem compradores potenciais.' },
      { title: 'Títulos de landing pages', description: 'Marketeiros criam títulos atraentes para landing pages que equilibram otimização de pesquisa com foco em conversão.' },
    ],
    faqs: [
      { question: 'Quão longo deve ser um título SEO?', answer: 'Títulos idealmente devem ter menos de 60 caracteres para evitar truncamento nos resultados de pesquisa. Títulos críticos devem manter informações-chave nos primeiros 50-55 caracteres.' },
      { question: 'Posicionamento de palavra-chave importa em títulos?', answer: 'Sim, colocar sua palavra-chave principal perto do início do título pode melhorar SEO e comunicar imediatamente o tópico da página para pesquisadores.' },
      { question: 'Devo incluir minha marca no título?', answer: 'Depende do reconhecimento da marca e do comprimento do título. Se a marca é forte, inclua no final. Se o título é muito longo, priorize a palavra-chave.' },
      { question: 'Títulos podem ser muito otimizados?', answer: 'Sim, excesso de palavras-chave parece spam e pode prejudicar CTR. Equiliore otimização de palavras-chave com apelo natural que encoraje cliques.' },
      { question: 'Com que frequência devo atualizar títulos?', answer: 'Atualize títulos quando eles não estão performando (baixo CTR ou rankings), quando palavras-chave alvo mudam, ou quando testar novas abordagens.' },
      { question: 'Títulos listicle performam melhor?', answer: 'Frequentemente, sim. Números chamam atenção e prometem conteúdo específico e escaneável. Teste diferentes formatos para seu público.' },
      { question: 'Devo usar palavras poderosas em títulos?', answer: 'Sim, palavras como "melhor", "guia", "comprovado" podem aumentar cliques quando usadas apropriadamente. Evite hipérbole que não cumpre.' },
      { question: 'Como faço títulos amigáveis para mobile?', answer: 'Mantenha informações essenciais nos primeiros 40-50 caracteres, já que telas mobile truncam mais cedo que desktop.' },
      { question: 'Posso testar diferentes títulos?', answer: 'Absolutamente. Teste A/B de títulos é uma prática padrão de SEO. Muitos CMS permitem testar variações de título.' },
      { question: 'Títulos afetam cliques em redes sociais?', answer: 'Sim, embora plataformas sociais frequentemente usem tags OG separadas. Seus títulos SEO devem funcionar bem em ambos os contextos ou você deve usar meta tags distintas para social.' },
    ],
  },

  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: 'Gerador de Meta Descrição',
    title: 'Gerador gratuito de meta descrições por IA',
    description: 'Crie meta descrições atraentes que melhorem taxas de clique. Nossa IA gera snippets otimizados para SEO que atraem pesquisadores a clicar.',
    metaDescription: 'Crie meta descrições atraentes que melhorem taxas de clique. Nossa IA gera snippets otimizados para SEO que atraem pesquisadores a clicar.',
    inputLabel: 'Descreva o conteúdo da sua página...',
    inputPlaceholder: 'ex. Artigo comparando os 5 melhores aplicativos de gerenciamento de tarefas para equipes remotas',
    buttonText: 'Gerar Meta Descrições',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo da descrição',
        choices: ['Informativo', 'Persuasivo', 'Orientado a perguntas', 'Focado em benefícios'],
        default: 'Informativo',
        type: 'select',
      },
      {
        name: 'count',
        label: 'Número de descrições',
        choices: ['3 descrições', '5 descrições', '10 descrições'],
        default: '5 descrições',
        type: 'select',
      },
    ],
    systemPrompt: `You are an SEO expert who creates compelling meta descriptions that improve click-through rates.
## META DESCRIPTION STANDARDS
- Keep between 150-160 characters
- Include primary keyword naturally
- Create a compelling reason to click
- Include a call-to-action when appropriate
- Accurately represent page content
## STYLE APPROACHES
### IF style = "Informative" - Clear, factual, comprehensive
### IF style = "Persuasive" - Benefit-focused, action-oriented
### IF style = "Question-driven" - Address user queries
### IF style = "Benefit-focused" - Emphasize outcomes and value
## OUTPUT FORMAT
Generate {{count}} unique meta description variations
For each description:
- Provide the meta description
- Character count
- Key strength
Style: {{style}}
Count: {{count}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Otimização SEO para websites e blogs', description: 'Proprietários de sites e especialistas em SEO usam o Gerador de Meta Descrição para criar snippets atraentes que aparecem nos resultados de pesquisa. Meta descrições bem elaboradas melhoram taxas de clique ao dar aos pesquisadores uma prévia clara e atraente do conteúdo da página.' },
      { title: 'Escalando produção de conteúdo', description: 'Equipes de marketing e criadores de conteúdo usam o gerador para produzir meta descrições consistentes e de qualidade em grande escala. Para sites com centenas ou milhares de páginas, a ferramenta agiliza a otimização de metadados.' },
      { title: 'Marketing e-commerce', description: 'Lojas online criam meta descrições atraentes para páginas de produtos que destacam características e benefícios principais enquanto incluem palavras-chave alvo.' },
    ],
    faqs: [
      { question: 'Quão longa deve ser uma meta descrição?', answer: 'Meta descrições devem ter 150-160 caracteres. Google pode truncar descrições mais longas nos resultados de pesquisa, cortando sua mensagem.' },
      { question: 'Meta descrições afetam rankings?', answer: 'Meta descrições não são um fator direto de ranking, mas afetam taxa de clique (CTR), o que pode influenciar indiretamente rankings ao longo do tempo.' },
      { question: 'Devo incluir palavras-chave em meta descrições?', answer: 'Sim, inclua sua palavra-chave principal naturalmente. Google destaca termos correspondentes em negrito, tornando sua listagem mais visível para pesquisadores.' },
      { question: 'Cada página pode ter a mesma meta descrição?', answer: 'Não, cada página deve ter uma meta descrição única que descreva precisamente seu conteúdo específico. Meta descrições duplicadas são uma oportunidade perdida.' },
      { question: 'O que devo incluir em uma meta descrição?', answer: 'Inclua: benefício claro ou proposta de valor, palavra-chave principal, descrição precisa do conteúdo e call-to-action quando apropriado.' },
      { question: 'Google sempre usa minha meta descrição?', answer: 'Não sempre. Google às vezes gera seus próprios snippets baseados na consulta de pesquisa. No entanto, meta descrições bem escritas são usadas com mais frequência.' },
      { question: 'Como faço meta descrições se destacarem?', answer: 'Use linguagem ativa, inclua números ou estatísticas quando relevante, adicione proposta de valor única e considere incluir um call-to-action.' },
      { question: 'Posso usar emojis em meta descrições?', answer: 'Sim, emojis podem chamar atenção em listagens de pesquisa, mas use com moderação e garantindo que sejam apropriados para sua marca e público.' },
      { question: 'Com que frequência devo atualizar meta descrições?', answer: 'Atualize quando o conteúdo da página muda significativamente, quando CTR está baixa, ou quando testando novas abordagens para melhorar performance.' },
      { question: 'Meta descrições são as mesmas para mobile e desktop?', answer: 'Sim, mas mobile frequentemente mostra menos caracteres. Mantenha informações críticas nos primeiros 120 caracteres para melhor visibilidade mobile.' },
    ],
  },

  // ==================== END OF BATCH 1 ====================

  // ==================== BATCH 2 (Tools 11-20) ====================

  'ai-content-detector': {
    slug: 'ai-content-detector',
    name: 'Detector de Conteúdo IA',
    title: 'Detector de IA gratuito',
    description: 'Detecte conteúdo gerado por IA com nossa ferramenta gratuita. Analise texto para identificar escrita por IA versus humana com explicações detalhadas.',
    metaDescription: 'Detecte conteúdo gerado por IA com nossa ferramenta gratuita. Analise texto para identificar escrita por IA versus humana com explicações detalhadas.',
    inputLabel: 'Cole o texto para analisar...',
    inputPlaceholder: 'Cole o texto que você deseja verificar para conteúdo gerado por IA...',
    buttonText: 'Analisar Texto',
    maxLength: 4096,
    options: [
      {
        name: 'detail_level',
        label: 'Nível de detalhe',
        choices: ['Rápido', 'Padrão', 'Detalhado'],
        default: 'Padrão',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at analyzing text to identify characteristics of AI-generated versus human-written content.
## ANALYSIS FRAMEWORK
- Examine sentence structure patterns
- Check vocabulary distribution
- Analyze AI creativity and unpredictability
- Look for AI-typical phrasings
- Assess coherence and flow patterns
## INDICATORS TO CHECK
### AI Indicators:
- Overly consistent sentence length
- Formulaic transitions
- Generic examples
- Perfect grammar throughout
- Lack of personal voice
### Human Indicators:
- Variable sentence structure
- Personal anecdotes
- Unique expressions
- Minor imperfections
- Distinctive voice
## OUTPUT FORMAT
Detail Level: {{detail_level}}
Provide:
- Overall assessment (Likely AI / Likely Human / Mixed)
- Confidence level
- Key indicators found
- Specific examples from text

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Verificação de integridade acadêmica', description: 'Educadores usam o Detector de Conteúdo IA para identificar trabalhos potencialmente gerados por IA. A ferramenta ajuda a manter padrões acadêmicos ao sinalizar conteúdo que pode precisar de revisão adicional.' },
      { title: 'Garantia de qualidade de conteúdo', description: 'Editores e gerentes de conteúdo verificam submissões para conteúdo gerado por IA para garantir originalidade e manter padrões de qualidade em publicações.' },
      { title: 'Autenticidade de marca', description: 'Equipes de marketing verificam que conteúdo mantém autenticidade de voz humana e não parece excessivamente automatizado ou genérico.' },
    ],
    faqs: [
      { question: 'Quão precisa é a detecção de IA?', answer: 'A detecção de IA não é perfeita. A ferramenta identifica padrões típicos de conteúdo IA, mas textos bem editados ou reescritos podem ser mais difíceis de detectar. Use como uma ferramenta entre várias.' },
      { question: 'O que a ferramenta procura?', answer: 'A ferramenta analisa padrões de estrutura de frases, distribuição de vocabulário, previsibilidade e outros marcadores linguísticos associados a texto gerado por IA.' },
      { question: 'Pode detectar todo conteúdo de IA?', answer: 'Não, nenhum detector é 100% preciso. Conteúdo de IA fortemente editado por humanos pode não ser detectável. A ferramenta fornece indicadores, não julgamentos definitivos.' },
      { question: 'Funciona para todos os idiomas?', answer: 'A ferramenta é otimizada para português. Outros idiomas podem funcionar mas com precisão reduzida.' },
      { question: 'Por que às vezes dá falsos positivos?', answer: 'Escrita formal, técnica ou muito polida pode parecer com IA. A ferramenta analisa padrões que às vezes aparecem em escrita humana cuidadosa.' },
      { question: 'Posso usar para verificar minha própria escrita?', answer: 'Sim, você pode verificar se seu texto parece muito "robótico" e ajustar para parecer mais natural.' },
      { question: 'A ferramenta armazena meu texto?', answer: 'Não armazenamos texto submetido para análise. Sua privacidade é respeitada.' },
      { question: 'Quanto texto preciso submeter?', answer: 'Textos mais longos (200+ palavras) dão resultados mais precisos. Textos muito curtos podem não ter padrões suficientes para análise.' },
      { question: 'A detecção funciona para todos os modelos de IA?', answer: 'A ferramenta detecta padrões comuns em vários modelos de IA, mas modelos mais novos podem ter padrões diferentes.' },
      { question: 'Devo confiar completamente nos resultados?', answer: 'Use os resultados como um indicador, não como prova definitiva. Combine com outras verificações e julgamento humano.' },
    ],
  },

  'ai-text-humanizer': {
    slug: 'ai-text-humanizer',
    name: 'Humanizador de Texto IA',
    title: 'Humanizador de texto por IA, gratuito',
    description: 'Transforme texto gerado por IA em escrita natural e humana. Nossa ferramenta adiciona personalidade, variação e autenticidade ao conteúdo.',
    metaDescription: 'Transforme texto gerado por IA em escrita natural e humana. Nossa ferramenta adiciona personalidade, variação e autenticidade ao conteúdo.',
    inputLabel: 'Cole o texto para humanizar...',
    inputPlaceholder: 'Cole o texto gerado por IA que você deseja tornar mais natural...',
    buttonText: 'Humanizar Texto',
    maxLength: 4096,
    options: [
      {
        name: 'intensity',
        label: 'Intensidade da humanização',
        choices: ['Leve', 'Moderada', 'Forte'],
        default: 'Moderada',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tom alvo',
        choices: ['Profissional', 'Casual', 'Amigável', 'Autoritativo'],
        default: 'Profissional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor who transforms AI-generated text into natural, human-sounding content.
## HUMANIZATION TECHNIQUES
- Vary sentence length and structure
- Add conversational elements
- Include natural transitions
- Remove overly formal phrasings
- Add personality and voice
## INTENSITY LEVELS
### IF intensity = "Light" - Minor adjustments, preserve structure
### IF intensity = "Moderate" - Balanced changes, add personality
### IF intensity = "Strong" - Significant rewrite, very natural
## TONE ADAPTATION
### IF tone = "Professional" - Business-appropriate but warm
### IF tone = "Casual" - Relaxed, conversational
### IF tone = "Friendly" - Warm, approachable
### IF tone = "Authoritative" - Confident, expert
Intensity: {{intensity}}
Tone: {{tone}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Melhoria de conteúdo de marketing', description: 'Marketeiros humanizam rascunhos gerados por IA para criar conteúdo que ressoa com públicos e mantém voz de marca autêntica.' },
      { title: 'Comunicação empresarial', description: 'Profissionais transformam e-mails e documentos rascunhados por IA em comunicações naturais e personalizadas.' },
      { title: 'Criação de conteúdo', description: 'Escritores usam a ferramenta para adicionar personalidade e fluxo natural a rascunhos iniciais gerados por IA.' },
    ],
    faqs: [
      { question: 'O que significa humanizar texto?', answer: 'Humanizar texto significa transformar escrita que parece robótica ou genérica em conteúdo que soa natural, tem personalidade e flui como escrita humana.' },
      { question: 'A humanização muda o significado?', answer: 'Não, o significado central é preservado. A ferramenta muda como as ideias são expressas, não quais são as ideias.' },
      { question: 'Quanto tempo leva para humanizar?', answer: 'A humanização é quase instantânea, geralmente apenas alguns segundos.' },
      { question: 'Posso controlar quanto é mudado?', answer: 'Sim, use as configurações de intensidade para controlar desde mudanças leves até reescritas mais significativas.' },
      { question: 'O texto humanizado passa em detectores de IA?', answer: 'A humanização pode ajudar, mas não há garantia. Detectores de IA também estão melhorando. Use para melhorar qualidade, não para enganar.' },
      { question: 'Funciona para qualquer tipo de texto?', answer: 'Sim, funciona para e-mails, artigos, posts, documentos e qualquer conteúdo que você deseja tornar mais natural.' },
      { question: 'Posso especificar um tom específico?', answer: 'Sim, escolha entre profissional, casual, amigável ou autoritativo para combinar com seu contexto.' },
      { question: 'A gramática é mantida correta?', answer: 'Sim, o texto humanizado mantém gramática correta enquanto adiciona naturalidade.' },
      { question: 'Posso humanizar o mesmo texto várias vezes?', answer: 'Sim, você pode executar múltiplas vezes ou com diferentes configurações para obter o resultado desejado.' },
      { question: 'É diferente de reescrever?', answer: 'Humanização foca especificamente em tornar texto mais natural e humano, enquanto reescrita pode ter outros objetivos como clareza ou tom.' },
    ],
  },

  'content-idea-generator': {
    slug: 'content-idea-generator',
    name: 'Gerador de Ideias de Conteúdo',
    title: 'AI Content Idea Generator gratuito',
    description: 'Gere ideias de conteúdo criativas para blogs, redes sociais e marketing. Nossa IA fornece tópicos únicos e ângulos que ressoam com seu público.',
    metaDescription: 'Gere ideias de conteúdo criativas para blogs, redes sociais e marketing. Nossa IA fornece tópicos únicos e ângulos que ressoam com seu público.',
    inputLabel: 'Descreva seu nicho ou tópico...',
    inputPlaceholder: 'ex. Marketing digital para pequenas empresas de e-commerce',
    buttonText: 'Gerar Ideias',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: 'Tipo de conteúdo',
        choices: ['Posts de blog', 'Redes sociais', 'Vídeos', 'E-mail marketing', 'Geral'],
        default: 'Posts de blog',
        type: 'select',
      },
      {
        name: 'count',
        label: 'Número de ideias',
        choices: ['5 ideias', '10 ideias', '15 ideias'],
        default: '10 ideias',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist who generates creative, actionable content ideas.
## IDEA GENERATION PRINCIPLES
- Focus on audience value and interest
- Consider search intent and SEO potential
- Include variety of angles and formats
- Provide specific, actionable topics
- Consider trending topics and evergreen content
## CONTENT TYPE APPROACHES
### IF type = "Blog posts" - Long-form, SEO-focused topics
### IF type = "Social media" - Engaging, shareable concepts
### IF type = "Videos" - Visual, tutorial-friendly ideas
### IF type = "Email marketing" - Campaign and sequence ideas
### IF type = "General" - Mixed format suggestions
## OUTPUT FORMAT
Generate {{count}} unique ideas
For each idea:
- Topic title
- Brief description
- Target audience
- Content angle
Content Type: {{content_type}}
Count: {{count}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Planejamento de calendário editorial', description: 'Equipes de marketing usam o gerador para preencher calendários de conteúdo com ideias relevantes e variadas para semanas ou meses.' },
      { title: 'Superar bloqueio criativo', description: 'Criadores de conteúdo usam a ferramenta quando estão sem ideias, obtendo inspiração fresca e ângulos únicos.' },
      { title: 'Exploração de nicho', description: 'Novos criadores exploram diferentes aspectos de seu nicho para descobrir oportunidades de conteúdo.' },
    ],
    faqs: [
      { question: 'Como a IA gera ideias de conteúdo?', answer: 'A IA analisa seu nicho, considera tendências, intenção de pesquisa e melhores práticas para sugerir tópicos relevantes e envolventes.' },
      { question: 'As ideias são únicas?', answer: 'As ideias são sugestões estratégicas baseadas em seu nicho. Você deve adaptá-las com sua perspectiva e expertise únicas.' },
      { question: 'Posso especificar meu público-alvo?', answer: 'Sim, inclua detalhes sobre seu público na descrição do nicho para ideias mais direcionadas.' },
      { question: 'As ideias consideram SEO?', answer: 'Sim, especialmente para posts de blog, as ideias são formuladas considerando potencial de busca e intenção do usuário.' },
      { question: 'Quantas ideias devo gerar?', answer: 'Comece com 10 para ter uma boa variedade. Gere mais se estiver planejando um calendário extenso.' },
      { question: 'Posso combinar ideias?', answer: 'Absolutamente. Muitas vezes as melhores peças de conteúdo vêm de combinar elementos de múltiplas ideias.' },
      { question: 'As ideias funcionam para qualquer nicho?', answer: 'Sim, a ferramenta adapta sugestões baseadas no nicho que você descreve. Quanto mais detalhes você fornecer, melhores as ideias.' },
      { question: 'Com que frequência devo gerar novas ideias?', answer: 'Regularmente conforme você planeja conteúdo. Muitas equipes geram ideias mensalmente ou trimestralmente.' },
      { question: 'As ideias incluem formatos específicos?', answer: 'Sim, dependendo do tipo de conteúdo selecionado, as ideias são adaptadas para formatos específicos.' },
      { question: 'Posso refinar ideias geradas?', answer: 'Sim, use as ideias como pontos de partida e refine-as para se adequar à sua voz e estratégia específicas.' },
    ],
  },

  'video-script-generator': {
    slug: 'video-script-generator',
    name: 'Gerador de Roteiro de Vídeo',
    title: 'Gerador gratuito de roteiro de vídeo por IA',
    description: 'Crie roteiros de vídeo envolventes para YouTube, TikTok e mais. Nossa IA gera scripts estruturados com ganchos, conteúdo e calls to action.',
    metaDescription: 'Crie roteiros de vídeo envolventes para YouTube, TikTok e mais. Nossa IA gera scripts estruturados com ganchos, conteúdo e calls to action.',
    inputLabel: 'Descreva seu vídeo...',
    inputPlaceholder: 'ex. Tutorial de 5 minutos sobre como fazer café cold brew em casa',
    buttonText: 'Gerar Roteiro',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['YouTube', 'TikTok', 'Instagram Reels', 'Curso online', 'Geral'],
        default: 'YouTube',
        type: 'select',
      },
      {
        name: 'duration',
        label: 'Duração do vídeo',
        choices: ['Curto (< 1 min)', 'Médio (1-5 min)', 'Longo (5-15 min)', 'Muito longo (15+ min)'],
        default: 'Médio (1-5 min)',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Estilo do roteiro',
        choices: ['Educacional', 'Entretenimento', 'Tutorial', 'Storytelling', 'Promocional'],
        default: 'Educacional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert video scriptwriter who creates engaging scripts optimized for different platforms.
## SCRIPT STRUCTURE
1. Hook (first 3-5 seconds)
2. Introduction/Context
3. Main content (organized sections)
4. Call to action
5. Outro
## PLATFORM OPTIMIZATION
### IF platform = "YouTube" - Longer form, detailed, chapter-friendly
### IF platform = "TikTok" - Quick, punchy, trend-aware
### IF platform = "Instagram Reels" - Visual-first, quick value
### IF platform = "Online course" - Educational, structured
### IF platform = "General" - Flexible format
## DURATION GUIDELINES
### IF duration = "Short" - Under 60 seconds, essential points only
### IF duration = "Medium" - 1-5 minutes, balanced detail
### IF duration = "Long" - 5-15 minutes, comprehensive
### IF duration = "Very long" - 15+ minutes, in-depth coverage
Platform: {{platform}}
Duration: {{duration}}
Style: {{style}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Criação de conteúdo YouTube', description: 'YouTubers usam o gerador para criar roteiros estruturados com ganchos fortes, conteúdo organizado e CTAs eficazes.' },
      { title: 'Conteúdo de formato curto', description: 'Criadores de TikTok e Reels usam a ferramenta para scripts rápidos e impactantes otimizados para engajamento.' },
      { title: 'Desenvolvimento de cursos', description: 'Educadores criam roteiros de aulas estruturados para cursos online com objetivos de aprendizagem claros.' },
    ],
    faqs: [
      { question: 'O que torna um roteiro de vídeo eficaz?', answer: 'Roteiros eficazes têm ganchos fortes nos primeiros segundos, estrutura clara, valor consistente e um call to action convincente.' },
      { question: 'Como o roteiro é estruturado?', answer: 'O roteiro inclui gancho, introdução, seções de conteúdo principal, call to action e encerramento, tudo organizado para máximo engajamento.' },
      { question: 'Posso adaptar o roteiro para meu estilo?', answer: 'Sim, o roteiro gerado é um ponto de partida. Adicione sua personalidade, exemplos específicos e ajuste o tom.' },
      { question: 'Funciona para diferentes plataformas?', answer: 'Sim, selecione a plataforma e a ferramenta otimiza estrutura, comprimento e estilo de acordo.' },
      { question: 'Como determino a duração certa?', answer: 'Depende da plataforma e conteúdo. TikTok prefere vídeos curtos, YouTube aceita conteúdo mais longo se valioso.' },
      { question: 'O roteiro inclui direções de câmera?', answer: 'O foco é no texto falado. Você pode adicionar notas de produção depois baseadas no roteiro.' },
      { question: 'Posso gerar roteiros para séries?', answer: 'Sim, gere roteiros individuais para cada episódio mantendo consistência na abordagem.' },
      { question: 'Como faço um bom gancho?', answer: 'O gerador cria ganchos que capturam atenção nos primeiros segundos usando perguntas, estatísticas ou declarações intrigantes.' },
      { question: 'Devo memorizar o roteiro?', answer: 'Não necessariamente. Use como guia, fale naturalmente e adicione sua personalidade durante a gravação.' },
      { question: 'O roteiro considera retenção de audiência?', answer: 'Sim, a estrutura é projetada para manter espectadores engajados com value drops regulares e transições claras.' },
    ],
  },

  'acronym-generator': {
    slug: 'acronym-generator',
    name: 'Gerador de Siglas',
    title: 'AI Acronym Generator gratuito',
    description: 'Crie siglas memoráveis para projetos, produtos e iniciativas. Nossa IA gera acrônimos significativos que são fáceis de lembrar.',
    metaDescription: 'Crie siglas memoráveis para projetos, produtos e iniciativas. Nossa IA gera acrônimos significativos que são fáceis de lembrar.',
    inputLabel: 'Descreva seu conceito...',
    inputPlaceholder: 'ex. Sistema de gerenciamento de tarefas para equipes remotas',
    buttonText: 'Gerar Siglas',
    maxLength: 1024,
    options: [
      {
        name: 'style',
        label: 'Estilo',
        choices: ['Profissional', 'Criativo', 'Técnico', 'Divertido'],
        default: 'Profissional',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Tamanho preferido',
        choices: ['Curto (3-4 letras)', 'Médio (5-6 letras)', 'Longo (7+ letras)'],
        default: 'Curto (3-4 letras)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating memorable acronyms and initialisms.
## ACRONYM PRINCIPLES
- Create meaningful connections between letters and concepts
- Ensure easy pronunciation
- Make it memorable
- Avoid unintended meanings
- Consider how it looks written
## STYLE APPROACHES
### IF style = "Professional" - Business-appropriate, serious
### IF style = "Creative" - Playful, unique combinations
### IF style = "Technical" - Industry-relevant terminology
### IF style = "Fun" - Catchy, memorable, lighthearted
## LENGTH GUIDELINES
### IF length = "Short" - 3-4 letters, punchy
### IF length = "Medium" - 5-6 letters, balanced
### IF length = "Long" - 7+ letters, comprehensive
Style: {{style}}
Length: {{length}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Naming de projetos', description: 'Gerentes de projeto criam siglas memoráveis para iniciativas internas que são fáceis de referenciar e lembrar.' },
      { title: 'Naming de produtos', description: 'Equipes de produto desenvolvem acrônimos para produtos ou recursos que comunicam propósito enquanto são fáceis de lembrar.' },
      { title: 'Frameworks e metodologias', description: 'Consultores e treinadores criam siglas para frameworks que ajudam na memorização e aplicação.' },
    ],
    faqs: [
      { question: 'O que torna uma boa sigla?', answer: 'Boas siglas são memoráveis, fáceis de pronunciar, significativas e evitam associações negativas não intencionais.' },
      { question: 'Quantas opções são geradas?', answer: 'A ferramenta gera múltiplas opções de siglas para você escolher a melhor para seu contexto.' },
      { question: 'As siglas são verificadas para significados negativos?', answer: 'A ferramenta tenta evitar combinações problemáticas, mas sempre verifique em seu contexto específico.' },
      { question: 'Posso especificar letras específicas?', answer: 'Descreva seu conceito em detalhes e a ferramenta criará siglas baseadas nas palavras-chave relevantes.' },
      { question: 'Funciona para qualquer idioma?', answer: 'A ferramenta é otimizada para português, mas conceitos podem ser descritos de forma flexível.' },
      { question: 'A pronúncia é considerada?', answer: 'Sim, siglas são criadas considerando facilidade de pronúncia e memorabilidade.' },
      { question: 'Posso usar as siglas comercialmente?', answer: 'As siglas geradas são sugestões. Verifique marcas registradas antes de uso comercial.' },
      { question: 'Como escolho entre múltiplas opções?', answer: 'Considere facilidade de pronúncia, significado, como soa quando falado e adequação ao seu contexto.' },
      { question: 'As siglas incluem explicações?', answer: 'Sim, cada sigla vem com a frase completa que representa e explicação do significado.' },
      { question: 'Posso gerar siglas para frases específicas?', answer: 'Sim, forneça a frase e a ferramenta criará siglas baseadas nas palavras principais.' },
    ],
  },

  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: 'Gerador de Título de Blog',
    title: 'Blog Title Generator por IA gratuito',
    description: 'Crie títulos de blog atraentes que geram cliques e engajamento. Nossa IA gera opções otimizadas para SEO e apelo ao leitor.',
    metaDescription: 'Crie títulos de blog atraentes que geram cliques e engajamento. Nossa IA gera opções otimizadas para SEO e apelo ao leitor.',
    inputLabel: 'Sobre o que é seu post de blog?',
    inputPlaceholder: 'ex. Dicas de produtividade para trabalhadores remotos',
    buttonText: 'Gerar Títulos',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do título',
        choices: ['How-to', 'Lista', 'Pergunta', 'Guia definitivo', 'Problema/Solução'],
        default: 'How-to',
        type: 'select',
      },
      {
        name: 'count',
        label: 'Número de títulos',
        choices: ['5 títulos', '10 títulos', '15 títulos'],
        default: '10 títulos',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating compelling blog titles that drive clicks and engagement.
## TITLE PRINCIPLES
- Create curiosity and interest
- Include relevant keywords
- Promise clear value
- Be specific, not vague
- Avoid clickbait without substance
## STYLE APPROACHES
### IF style = "How-to" - Instructional, actionable
### IF style = "List" - Numbered, scannable
### IF style = "Question" - Curiosity-driven
### IF style = "Ultimate guide" - Comprehensive, authoritative
### IF style = "Problem/Solution" - Pain point focused
## OUTPUT FORMAT
Generate {{count}} unique title options
For each:
- The title
- Why it works
Style: {{style}}
Count: {{count}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Otimização de blog posts', description: 'Blogueiros criam títulos que atraem leitores enquanto incorporam palavras-chave importantes para SEO.' },
      { title: 'Testes A/B de títulos', description: 'Equipes de marketing geram múltiplas opções para testar qual título performa melhor com seu público.' },
      { title: 'Calendário editorial', description: 'Criadores de conteúdo planejam séries de posts com títulos consistentes e envolventes.' },
    ],
    faqs: [
      { question: 'O que torna um título de blog eficaz?', answer: 'Títulos eficazes são específicos, prometem valor claro, criam curiosidade e incluem palavras-chave relevantes para SEO.' },
      { question: 'Quantos caracteres deve ter um título?', answer: 'Idealmente entre 50-60 caracteres para evitar truncamento em resultados de busca. Informações importantes nos primeiros 50 caracteres.' },
      { question: 'Números em títulos funcionam melhor?', answer: 'Frequentemente sim. Números são específicos e prometem conteúdo escaneável. "7 Dicas" performa melhor que "Algumas Dicas".' },
      { question: 'Devo usar palavras-chave no título?', answer: 'Sim, inclua sua palavra-chave principal naturalmente, preferencialmente perto do início do título.' },
      { question: 'Como evito títulos clickbait?', answer: 'Garanta que seu conteúdo cumpra o que o título promete. Gere curiosidade genuína, não engano.' },
      { question: 'Qual estilo de título devo usar?', answer: 'Depende do conteúdo. How-to para tutoriais, listas para coleções de dicas, perguntas para resolver dúvidas.' },
      { question: 'Posso combinar estilos?', answer: 'Sim, títulos como "Como Fazer X: 7 Passos para [Benefício]" combinam efetivamente múltiplos estilos.' },
      { question: 'Os títulos são únicos?', answer: 'A ferramenta gera variações únicas, mas sempre verifique para garantir que não duplica títulos existentes em seu nicho.' },
      { question: 'Posso personalizar após gerar?', answer: 'Absolutamente. Use os títulos como base e ajuste para sua voz e público específicos.' },
      { question: 'Os títulos consideram SEO?', answer: 'Sim, os títulos são formulados para equilibrar apelo ao leitor com otimização para mecanismos de busca.' },
    ],
  },

  'image-alt-text-generator': {
    slug: 'image-alt-text-generator',
    name: 'Gerador de Texto Alt para Imagens',
    title: 'Gerador gratuito de texto alternativo por IA para imagens',
    description: 'Crie texto alternativo descritivo e acessível para imagens. Nossa IA gera descrições que melhoram SEO e acessibilidade.',
    metaDescription: 'Crie texto alternativo descritivo e acessível para imagens. Nossa IA gera descrições que melhoram SEO e acessibilidade.',
    inputLabel: 'Descreva sua imagem...',
    inputPlaceholder: 'ex. Foto de uma equipe trabalhando em um escritório moderno com laptops',
    buttonText: 'Gerar Texto Alt',
    maxLength: 1024,
    options: [
      {
        name: 'purpose',
        label: 'Propósito da imagem',
        choices: ['Informativa', 'Decorativa', 'Funcional', 'Complexa (gráfico/diagrama)'],
        default: 'Informativa',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Tamanho da descrição',
        choices: ['Curto (< 50 caracteres)', 'Médio (50-100 caracteres)', 'Longo (100-150 caracteres)'],
        default: 'Médio (50-100 caracteres)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating accessible, SEO-friendly alt text for images.
## ALT TEXT PRINCIPLES
- Be descriptive but concise
- Convey the purpose and content
- Avoid "image of" or "picture of"
- Include relevant keywords naturally
- Consider context of use
## PURPOSE APPROACHES
### IF purpose = "Informative" - Describe what the image shows and why it matters
### IF purpose = "Decorative" - Keep minimal or suggest empty alt
### IF purpose = "Functional" - Describe the action/function
### IF purpose = "Complex" - Provide brief summary, suggest longer description
## LENGTH GUIDELINES
### IF length = "Short" - Under 50 characters
### IF length = "Medium" - 50-100 characters
### IF length = "Long" - 100-150 characters
Purpose: {{purpose}}
Length: {{length}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Otimização de websites', description: 'Desenvolvedores e profissionais de SEO criam texto alt para todas as imagens do site, melhorando acessibilidade e rankings de busca.' },
      { title: 'E-commerce', description: 'Lojas online criam descrições acessíveis para imagens de produtos que ajudam compradores e melhoram SEO.' },
      { title: 'Conformidade de acessibilidade', description: 'Organizações garantem que seus sites atendam a padrões de acessibilidade com texto alt adequado para todas as imagens.' },
    ],
    faqs: [
      { question: 'O que é texto alt?', answer: 'Texto alt é uma descrição de texto de uma imagem que é lida por leitores de tela e exibida quando a imagem não carrega. É essencial para acessibilidade e SEO.' },
      { question: 'Quão longo deve ser o texto alt?', answer: 'Geralmente 50-150 caracteres. Seja conciso mas descritivo. Para imagens complexas, pode ser mais longo ou apontar para descrição estendida.' },
      { question: 'Devo usar palavras-chave no texto alt?', answer: 'Sim, inclua palavras-chave relevantes naturalmente, mas priorize descrição precisa sobre stuffing de palavras-chave.' },
      { question: 'Preciso de texto alt para imagens decorativas?', answer: 'Imagens puramente decorativas podem ter alt vazio (alt=""). Isso indica que a imagem não adiciona informação ao conteúdo.' },
      { question: 'Texto alt afeta SEO?', answer: 'Sim, texto alt ajuda mecanismos de busca a entender o conteúdo da imagem, melhorando rankings e aparecendo em busca de imagens.' },
      { question: 'Como descrevo gráficos e diagramas?', answer: 'Forneça um resumo breve no alt e considere adicionar descrição detalhada separada para dados complexos.' },
      { question: 'Devo começar com "Imagem de..."?', answer: 'Não, evite "imagem de" ou "foto de". Leitores de tela já anunciam que é uma imagem. Vá direto à descrição.' },
      { question: 'Posso usar a mesma descrição para imagens similares?', answer: 'Evite. Cada imagem deve ter texto alt único e específico para seu conteúdo e contexto.' },
      { question: 'A ferramenta funciona sem ver a imagem?', answer: 'Você descreve a imagem e a ferramenta cria texto alt otimizado. Quanto mais detalhes você fornecer, melhor o resultado.' },
      { question: 'O texto alt deve descrever texto na imagem?', answer: 'Sim, se a imagem contém texto importante, esse texto deve ser incluído na descrição alt.' },
    ],
  },

  'slogan-generator': {
    slug: 'slogan-generator',
    name: 'Gerador de Slogan',
    title: 'Gerador gratuito de slogan por IA',
    description: 'Crie slogans memoráveis e impactantes para sua marca. Nossa IA gera taglines que capturam a essência do seu negócio.',
    metaDescription: 'Crie slogans memoráveis e impactantes para sua marca. Nossa IA gera taglines que capturam a essência do seu negócio.',
    inputLabel: 'Descreva sua marca ou produto...',
    inputPlaceholder: 'ex. Cafeteria artesanal focada em sustentabilidade e qualidade',
    buttonText: 'Gerar Slogans',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do slogan',
        choices: ['Inspirador', 'Divertido', 'Direto', 'Emocional', 'Luxuoso'],
        default: 'Inspirador',
        type: 'select',
      },
      {
        name: 'count',
        label: 'Número de slogans',
        choices: ['5 slogans', '10 slogans', '15 slogans'],
        default: '10 slogans',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert brand strategist who creates memorable, impactful slogans.
## SLOGAN PRINCIPLES
- Be memorable and distinctive
- Capture brand essence
- Keep it short and punchy
- Create emotional connection
- Be timeless, not trendy
## STYLE APPROACHES
### IF style = "Inspirational" - Uplifting, motivating
### IF style = "Fun" - Playful, catchy
### IF style = "Direct" - Clear, benefit-focused
### IF style = "Emotional" - Heart-touching, resonant
### IF style = "Luxurious" - Premium, sophisticated
## OUTPUT FORMAT
Generate {{count}} slogan options
For each:
- The slogan
- Why it works for the brand
Style: {{style}}
Count: {{count}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Lançamento de marca', description: 'Novas empresas criam slogans que estabelecem identidade de marca e ressoam com seu público-alvo desde o início.' },
      { title: 'Campanhas de marketing', description: 'Equipes de marketing desenvolvem taglines para campanhas específicas que complementam a marca principal.' },
      { title: 'Rebranding', description: 'Empresas em processo de rebranding criam novos slogans que refletem sua identidade atualizada.' },
    ],
    faqs: [
      { question: 'O que torna um slogan memorável?', answer: 'Slogans memoráveis são curtos, rítmicos, únicos e conectam emocionalmente. Eles capturam a essência da marca em poucas palavras.' },
      { question: 'Quão curto deve ser um slogan?', answer: 'Idealmente 3-7 palavras. Os melhores slogans são concisos e fáceis de lembrar e repetir.' },
      { question: 'Devo usar rimas ou aliterações?', answer: 'Podem ajudar na memorabilidade, mas não force. Um slogan autêntico sem rimas é melhor que um artificial com rimas.' },
      { question: 'O slogan deve incluir o nome da marca?', answer: 'Geralmente não. O slogan complementa o nome da marca, não o repete. Eles são usados juntos.' },
      { question: 'Como sei se um slogan funciona?', answer: 'Teste com seu público-alvo. Bons slogans são fáceis de lembrar, ressoam emocionalmente e diferenciam sua marca.' },
      { question: 'Posso usar os slogans gerados comercialmente?', answer: 'Os slogans são sugestões. Verifique marcas registradas e considere proteção legal antes de uso comercial.' },
      { question: 'Quantos slogans devo gerar?', answer: 'Gere 10-15 para ter boas opções. Então reduza para os 2-3 melhores para teste com seu público.' },
      { question: 'O slogan deve mencionar o produto?', answer: 'Não necessariamente. Pode focar no benefício, emoção ou valor em vez do produto específico.' },
      { question: 'Como diferencio de concorrentes?', answer: 'Inclua detalhes sobre seus diferenciais na descrição para slogans que destaquem o que torna sua marca única.' },
      { question: 'Slogans devem mudar com o tempo?', answer: 'Grandes slogans são atemporais. Evite tendências passageiras. Mude apenas se sua marca evoluir significativamente.' },
    ],
  },

  'product-description-generator': {
    slug: 'product-description-generator',
    name: 'Gerador de Descrição de Produto',
    title: 'AI Product Description Generator gratuito',
    description: 'Crie descrições de produto convincentes que vendem. Nossa IA gera textos que destacam benefícios e convertem visitantes em compradores.',
    metaDescription: 'Crie descrições de produto convincentes que vendem. Nossa IA gera textos que destacam benefícios e convertem visitantes em compradores.',
    inputLabel: 'Descreva seu produto...',
    inputPlaceholder: 'ex. Fone de ouvido Bluetooth com cancelamento de ruído, 30h de bateria, dobrável',
    buttonText: 'Gerar Descrição',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tom da descrição',
        choices: ['Profissional', 'Casual', 'Luxuoso', 'Técnico', 'Divertido'],
        default: 'Profissional',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Tamanho',
        choices: ['Curto (50-100 palavras)', 'Médio (100-200 palavras)', 'Longo (200-300 palavras)'],
        default: 'Médio (100-200 palavras)',
        type: 'select',
      },
      {
        name: 'format',
        label: 'Formato',
        choices: ['Parágrafos', 'Bullet points', 'Misto'],
        default: 'Misto',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert copywriter who creates compelling product descriptions that drive sales.
## DESCRIPTION PRINCIPLES
- Lead with benefits, support with features
- Create desire and urgency
- Address customer pain points
- Use sensory and emotional language
- Include proof and credibility
## TONE APPROACHES
### IF tone = "Professional" - Business-appropriate, trustworthy
### IF tone = "Casual" - Friendly, approachable
### IF tone = "Luxurious" - Premium, exclusive
### IF tone = "Technical" - Detailed, specification-focused
### IF tone = "Fun" - Playful, energetic
## FORMAT OPTIONS
### IF format = "Paragraphs" - Flowing prose
### IF format = "Bullet points" - Scannable list
### IF format = "Mixed" - Paragraph intro + bullet features
Tone: {{tone}}
Length: {{length}}
Format: {{format}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'E-commerce e varejo online', description: 'Lojas online criam descrições de produto que convertem visitantes em compradores, destacando benefícios e diferenciação.' },
      { title: 'Catálogos de produtos', description: 'Empresas criam descrições consistentes para catálogos de produtos extensos, mantendo qualidade em escala.' },
      { title: 'Marketplaces', description: 'Vendedores em marketplaces como Amazon e Mercado Livre criam listagens otimizadas que se destacam da concorrência.' },
    ],
    faqs: [
      { question: 'O que torna uma descrição de produto eficaz?', answer: 'Descrições eficazes focam em benefícios para o cliente, usam linguagem sensorial e emocional, e incluem especificações importantes de forma clara.' },
      { question: 'Devo focar em características ou benefícios?', answer: 'Comece com benefícios (o que o cliente ganha) e suporte com características (como o produto entrega esses benefícios).' },
      { question: 'Quão longa deve ser a descrição?', answer: 'Depende do produto e plataforma. Produtos simples podem ter 50-100 palavras, produtos complexos podem precisar de 200-300 palavras.' },
      { question: 'As descrições são otimizadas para SEO?', answer: 'Sim, incluímos palavras-chave relevantes naturalmente. Forneça detalhes sobre seu produto para melhor otimização.' },
      { question: 'Posso usar bullet points?', answer: 'Sim, selecione o formato "Bullet points" ou "Misto" para descrições escaneáveis com pontos destacados.' },
      { question: 'Como destaco meu produto da concorrência?', answer: 'Inclua seus diferenciais na descrição do produto. A ferramenta destacará o que torna seu produto único.' },
      { question: 'As descrições funcionam para qualquer produto?', answer: 'Sim, de produtos físicos a serviços e produtos digitais. Adapte a entrada para seu tipo específico de produto.' },
      { question: 'Posso personalizar o tom?', answer: 'Sim, escolha entre profissional, casual, luxuoso, técnico ou divertido para combinar com sua marca.' },
      { question: 'A descrição inclui call to action?', answer: 'Sim, incluímos CTAs sutis ou explícitos dependendo do contexto e tom escolhido.' },
      { question: 'Posso gerar múltiplas versões?', answer: 'Sim, execute várias vezes ou com diferentes configurações para obter variações para teste A/B.' },
    ],
  },

  'landing-page-generator': {
    slug: 'landing-page-generator',
    name: 'Gerador de Landing Page',
    title: 'AI Landing Page Generator gratuito',
    description: 'Crie textos de landing page que convertem. Nossa IA gera estruturas persuasivas com headlines, benefícios e calls to action.',
    metaDescription: 'Crie textos de landing page que convertem. Nossa IA gera estruturas persuasivas com headlines, benefícios e calls to action.',
    inputLabel: 'Descreva sua oferta...',
    inputPlaceholder: 'ex. Curso online de marketing digital para iniciantes com 10 módulos e certificado',
    buttonText: 'Gerar Landing Page',
    maxLength: 2048,
    options: [
      {
        name: 'goal',
        label: 'Objetivo da página',
        choices: ['Vendas', 'Geração de leads', 'Inscrição', 'Download', 'Demonstração'],
        default: 'Vendas',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tom',
        choices: ['Profissional', 'Urgente', 'Amigável', 'Autoritativo', 'Exclusivo'],
        default: 'Profissional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert conversion copywriter who creates high-converting landing page copy.
## LANDING PAGE STRUCTURE
1. Headline (attention-grabbing, benefit-focused)
2. Subheadline (supporting, clarifying)
3. Problem/Pain points
4. Solution/Benefits
5. Features with benefits
6. Social proof section
7. FAQ suggestions
8. Call to action
## GOAL-SPECIFIC APPROACHES
### IF goal = "Sales" - Conversion-focused, value-emphasis
### IF goal = "Lead generation" - Low-friction, value-exchange
### IF goal = "Signup" - Benefit-focused, easy process
### IF goal = "Download" - Value of resource, immediate benefit
### IF goal = "Demo" - See it in action, no commitment
## TONE APPROACHES
### IF tone = "Professional" - Trustworthy, business-appropriate
### IF tone = "Urgent" - Time-sensitive, scarcity
### IF tone = "Friendly" - Approachable, relatable
### IF tone = "Authoritative" - Expert, confident
### IF tone = "Exclusive" - Premium, limited access
Goal: {{goal}}
Tone: {{tone}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Lançamento de produtos', description: 'Empresas criam landing pages persuasivas para lançamentos de produtos, maximizando conversões e vendas iniciais.' },
      { title: 'Campanhas de marketing', description: 'Equipes de marketing desenvolvem páginas otimizadas para campanhas específicas com mensagens focadas.' },
      { title: 'Geração de leads', description: 'B2B e SaaS criam páginas para captura de leads qualificados com propostas de valor claras.' },
    ],
    faqs: [
      { question: 'O que é uma landing page?', answer: 'Uma landing page é uma página focada em um único objetivo de conversão, como venda, inscrição ou download. Diferente de páginas gerais, tem uma ação principal clara.' },
      { question: 'Que elementos a ferramenta gera?', answer: 'Geramos headline, subheadline, seção de problema, benefícios, features, sugestões de prova social, FAQ e calls to action.' },
      { question: 'A landing page está pronta para usar?', answer: 'O texto gerado é um framework completo. Você precisará adaptar para seu design e adicionar elementos visuais específicos.' },
      { question: 'Como otimizo para conversão?', answer: 'A estrutura já segue melhores práticas de conversão. Refine com testes A/B e dados de seu público específico.' },
      { question: 'Devo ter uma ou múltiplas CTAs?', answer: 'Geralmente uma CTA principal repetida estrategicamente. A ferramenta fornece variações para diferentes pontos da página.' },
      { question: 'A página considera mobile?', answer: 'O texto é estruturado para funcionar em qualquer dispositivo. O design responsivo é responsabilidade do desenvolvimento.' },
      { question: 'Posso gerar para diferentes objetivos?', answer: 'Sim, selecione entre vendas, geração de leads, inscrição, download ou demonstração para estrutura adequada.' },
      { question: 'Como incluo prova social?', answer: 'A ferramenta sugere seções para prova social. Você adiciona depoimentos e dados específicos do seu negócio.' },
      { question: 'A página inclui SEO?', answer: 'O texto é estruturado com boas práticas, mas landing pages focam mais em conversão que em SEO orgânico.' },
      { question: 'Posso personalizar após gerar?', answer: 'Absolutamente. Use o texto como base e adapte para sua voz de marca e ofertas específicas.' },
    ],
  },

  // ==================== END OF BATCH 2 ====================

  // ==================== BATCH 3 (Tools 21-30) ====================

  'google-ads-copy-generator': {
    slug: 'google-ads-copy-generator',
    name: 'Gerador de Anúncios Google Ads',
    title: 'Gerador gratuito de anúncios do Google Ads por IA',
    description: 'Crie textos de anúncios Google Ads que convertem. Nossa IA gera headlines e descrições otimizadas para cliques e conversões.',
    metaDescription: 'Crie textos de anúncios Google Ads que convertem. Nossa IA gera headlines e descrições otimizadas para cliques e conversões.',
    inputLabel: 'Descreva seu produto/serviço...',
    inputPlaceholder: 'ex. Software de gestão de projetos para equipes remotas com teste grátis de 14 dias',
    buttonText: 'Gerar Anúncios',
    maxLength: 2048,
    options: [
      {
        name: 'ad_type',
        label: 'Tipo de anúncio',
        choices: ['Busca responsiva', 'Busca expandida', 'Display'],
        default: 'Busca responsiva',
        type: 'select',
      },
      {
        name: 'goal',
        label: 'Objetivo',
        choices: ['Vendas', 'Leads', 'Tráfego', 'Awareness'],
        default: 'Vendas',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Google Ads copywriter who creates high-converting ad copy.
## GOOGLE ADS REQUIREMENTS
### Responsive Search Ads:
- Headlines: Up to 15 (30 characters each)
- Descriptions: Up to 4 (90 characters each)
### Key Principles:
- Include keywords in headlines
- Clear value proposition
- Strong call to action
- Address user intent
## GOAL APPROACHES
### IF goal = "Sales" - Direct, benefit-focused, urgency
### IF goal = "Leads" - Value exchange, low commitment
### IF goal = "Traffic" - Curiosity, information promise
### IF goal = "Awareness" - Brand message, differentiation
## OUTPUT FORMAT
Generate multiple headline and description options
For each:
- The copy
- Character count
- Why it works
Ad Type: {{ad_type}}
Goal: {{goal}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Campanhas de busca', description: 'Anunciantes criam textos de anúncio otimizados para campanhas de busca do Google, maximizando CTR e Quality Score.' },
      { title: 'Testes A/B', description: 'Equipes de marketing geram múltiplas variações para testar quais textos performam melhor com seu público.' },
      { title: 'Escalando campanhas', description: 'Agências criam textos de anúncio de qualidade consistente para múltiplos clientes e campanhas.' },
    ],
    faqs: [
      { question: 'Quantos caracteres posso usar em headlines?', answer: 'Headlines do Google Ads têm limite de 30 caracteres cada. A ferramenta gera headlines dentro desse limite.' },
      { question: 'Quantas headlines devo usar?', answer: 'Anúncios responsivos de busca permitem até 15 headlines. Use pelo menos 10-12 para melhor otimização pelo Google.' },
      { question: 'As descrições têm limite?', answer: 'Sim, descrições têm limite de 90 caracteres cada. Você pode ter até 4 descrições por anúncio responsivo.' },
      { question: 'Como incluo palavras-chave?', answer: 'Inclua suas palavras-chave alvo na descrição do produto. A ferramenta as incorporará naturalmente nos textos.' },
      { question: 'O que torna um anúncio eficaz?', answer: 'Anúncios eficazes têm proposta de valor clara, incluem palavras-chave relevantes, têm CTA forte e diferenciam da concorrência.' },
      { question: 'Posso usar emojis?', answer: 'Google Ads geralmente não permite emojis no texto do anúncio. Use palavras impactantes em vez disso.' },
      { question: 'Como melhoro meu Quality Score?', answer: 'Inclua palavras-chave relevantes, garanta que o anúncio corresponda à intenção de busca e que a landing page seja relevante.' },
      { question: 'Os anúncios seguem políticas do Google?', answer: 'Os textos são criados seguindo melhores práticas, mas sempre revise contra políticas atuais do Google antes de publicar.' },
      { question: 'Posso adaptar para diferentes campanhas?', answer: 'Sim, gere textos para diferentes objetivos e públicos, personalizando a entrada para cada campanha.' },
      { question: 'Quantas variações são geradas?', answer: 'A ferramenta gera múltiplas headlines e descrições para você escolher as melhores combinações.' },
    ],
  },

  'hook-generator': {
    slug: 'hook-generator',
    name: 'Gerador de Ganchos',
    title: 'Hook Generator por IA gratuito',
    description: 'Crie ganchos irresistíveis para vídeos, posts e conteúdo. Nossa IA gera aberturas que capturam atenção nos primeiros segundos.',
    metaDescription: 'Crie ganchos irresistíveis para vídeos, posts e conteúdo. Nossa IA gera aberturas que capturam atenção nos primeiros segundos.',
    inputLabel: 'Descreva seu conteúdo...',
    inputPlaceholder: 'ex. Vídeo sobre erros comuns de iniciantes em investimentos',
    buttonText: 'Gerar Ganchos',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['YouTube', 'TikTok', 'Instagram', 'Blog', 'Podcast', 'Geral'],
        default: 'YouTube',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Estilo do gancho',
        choices: ['Pergunta', 'Estatística', 'Declaração ousada', 'História', 'Problema/Dor', 'Curiosidade'],
        default: 'Curiosidade',
        type: 'select',
      },
      {
        name: 'count',
        label: 'Número de ganchos',
        choices: ['5 ganchos', '10 ganchos', '15 ganchos'],
        default: '10 ganchos',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content creator who specializes in creating attention-grabbing hooks.
## HOOK PRINCIPLES
- Capture attention in first 3 seconds
- Create curiosity or emotional response
- Promise value or resolution
- Be specific, not vague
- Match platform expectations
## STYLE APPROACHES
### IF style = "Question" - Provocative, thought-provoking questions
### IF style = "Statistic" - Surprising data or numbers
### IF style = "Bold statement" - Contrarian or unexpected claims
### IF style = "Story" - Mini-narrative, personal opening
### IF style = "Problem/Pain" - Address pain points directly
### IF style = "Curiosity" - Create information gap
## PLATFORM OPTIMIZATION
### YouTube - 5-10 seconds, visual-friendly
### TikTok - 1-3 seconds, punchy, trend-aware
### Instagram - Visual-first, lifestyle-oriented
### Blog - Longer, can be one paragraph
### Podcast - Conversational, audio-friendly
Platform: {{platform}}
Style: {{style}}
Count: {{count}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Criação de vídeos', description: 'YouTubers e criadores de TikTok criam aberturas que prendem espectadores nos primeiros segundos, melhorando retenção.' },
      { title: 'Copywriting', description: 'Copywriters criam aberturas impactantes para sales letters, e-mails e páginas de vendas.' },
      { title: 'Blogs e artigos', description: 'Escritores criam introduções que engajam leitores e os mantêm lendo até o final.' },
    ],
    faqs: [
      { question: 'O que é um hook?', answer: 'Um hook é a abertura do seu conteúdo que captura atenção imediatamente. Nos primeiros segundos, você decide se a pessoa continua ou sai.' },
      { question: 'Quão longo deve ser um hook?', answer: 'Depende da plataforma. TikTok: 1-3 segundos. YouTube: 5-10 segundos. Blog: pode ser um parágrafo curto. Mais curto geralmente é melhor.' },
      { question: 'Qual estilo de hook funciona melhor?', answer: 'Depende do seu conteúdo e público. Perguntas funcionam bem para engajamento, estatísticas para credibilidade, histórias para conexão emocional.' },
      { question: 'Posso usar o mesmo hook em múltiplas plataformas?', answer: 'É melhor adaptar para cada plataforma. Um hook de YouTube pode ser muito longo para TikTok, por exemplo.' },
      { question: 'Quantos hooks devo testar?', answer: 'Gere 10-15 opções e teste os melhores com seu público. Dados de retenção mostrarão quais funcionam melhor.' },
      { question: 'Hooks devem ser sensacionalistas?', answer: 'Evite clickbait que não cumpre. Hooks devem ser intrigantes mas verdadeiros ao conteúdo que segue.' },
      { question: 'Como sei se meu hook funciona?', answer: 'Métricas de retenção (quanto tempo as pessoas ficam) e taxa de clique/visualização indicam eficácia do hook.' },
      { question: 'Posso combinar estilos de hook?', answer: 'Sim, uma pergunta com estatística ("Você sabia que 80% das pessoas...") combina estilos efetivamente.' },
      { question: 'Hooks funcionam para e-mail?', answer: 'Absolutamente. A linha de assunto e primeira frase do e-mail são hooks cruciais para abertura e leitura.' },
      { question: 'Devo personalizar hooks gerados?', answer: 'Sim, adapte para sua voz e público específico. Os hooks gerados são excelentes pontos de partida.' },
    ],
  },

  'resignation-letter-generator': {
    slug: 'resignation-letter-generator',
    name: 'Gerador de Carta de Demissão',
    title: 'Gerador gratuito de cartas de demissão por IA',
    description: 'Crie cartas de demissão profissionais e respeitosas. Nossa IA gera cartas que mantêm relacionamentos positivos.',
    metaDescription: 'Crie cartas de demissão profissionais e respeitosas. Nossa IA gera cartas que mantêm relacionamentos positivos.',
    inputLabel: 'Descreva sua situação...',
    inputPlaceholder: 'ex. Trabalhei 3 anos como gerente de marketing, saindo para nova oportunidade',
    buttonText: 'Gerar Carta',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tom da carta',
        choices: ['Formal', 'Cordial', 'Breve', 'Detalhado'],
        default: 'Cordial',
        type: 'select',
      },
      {
        name: 'notice_period',
        label: 'Período de aviso',
        choices: ['Imediato', '2 semanas', '30 dias', 'Negociável'],
        default: '30 dias',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at writing professional resignation letters that maintain positive relationships.
## RESIGNATION LETTER STRUCTURE
1. Clear statement of resignation
2. Last working day
3. Gratitude for opportunities
4. Offer to help transition
5. Professional closing
## TONE APPROACHES
### IF tone = "Formal" - Very professional, minimal personal
### IF tone = "Cordial" - Warm, appreciative
### IF tone = "Brief" - Short, to the point
### IF tone = "Detailed" - More explanation, thorough
## KEY PRINCIPLES
- Be clear about departure date
- Express gratitude genuinely
- Offer transition assistance
- Keep reasons brief or omit
- Maintain professionalism
Tone: {{tone}}
Notice Period: {{notice_period}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Transição de carreira', description: 'Profissionais que mudam de emprego criam cartas de demissão que mantêm portas abertas e preservam relacionamentos.' },
      { title: 'Saída profissional', description: 'Funcionários garantem que sua saída seja documentada profissionalmente, independentemente das circunstâncias.' },
      { title: 'Relocação ou mudança de vida', description: 'Pessoas que se mudam ou mudam de carreira comunicam sua decisão de forma respeitosa e clara.' },
    ],
    faqs: [
      { question: 'O que devo incluir na carta de demissão?', answer: 'Inclua: declaração clara de demissão, último dia de trabalho, agradecimento pela oportunidade, oferta de ajuda na transição e despedida profissional.' },
      { question: 'Preciso explicar por que estou saindo?', answer: 'Não é obrigatório. Você pode manter razões vagas ou omiti-las completamente. Mantenha breve se incluir.' },
      { question: 'Quão longa deve ser a carta?', answer: 'Uma página é suficiente. Seja conciso e direto ao ponto. Detalhes excessivos não são necessários.' },
      { question: 'Devo mencionar problemas com a empresa?', answer: 'Não. Carta de demissão não é lugar para feedback negativo. Mantenha profissional e positivo.' },
      { question: 'Qual período de aviso é apropriado?', answer: 'Geralmente 2 semanas a 30 dias, dependendo do cargo e contrato. Verifique seu contrato de trabalho.' },
      { question: 'Posso pedir recomendação na carta?', answer: 'É melhor fazer isso em conversa separada. A carta deve focar na demissão em si.' },
      { question: 'A carta deve ser impressa ou por e-mail?', answer: 'Idealmente, entregue uma cópia impressa pessoalmente e envie por e-mail como registro. Converse primeiro com seu gestor.' },
      { question: 'Devo ser específico sobre o novo emprego?', answer: 'Não é necessário. Você pode mencionar "nova oportunidade" sem detalhes específicos.' },
      { question: 'Como mantenho portas abertas?', answer: 'Seja genuinamente grato, ofereça ajuda na transição e mantenha tom positivo. Evite queimar pontes.' },
      { question: 'A ferramenta funciona para qualquer situação?', answer: 'Sim, adapta para diferentes contextos. Descreva sua situação específica para carta personalizada.' },
    ],
  },

  'social-media-bio-generator': {
    slug: 'social-media-bio-generator',
    name: 'Gerador de Bio para Redes Sociais',
    title: 'Gerador de biografia por IA para redes sociais gratuito',
    description: 'Crie bios impactantes para todas as suas redes sociais. Nossa IA gera descrições que capturam sua essência e atraem seguidores.',
    metaDescription: 'Crie bios impactantes para todas as suas redes sociais. Nossa IA gera descrições que capturam sua essência e atraem seguidores.',
    inputLabel: 'Descreva você ou sua marca...',
    inputPlaceholder: 'ex. Coach de carreira que ajuda profissionais de tecnologia a conseguir promoções',
    buttonText: 'Gerar Bio',
    maxLength: 1024,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'Geral'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Estilo',
        choices: ['Profissional', 'Criativo', 'Divertido', 'Minimalista', 'Inspirador'],
        default: 'Profissional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert at creating compelling social media bios that capture attention and build following.
## BIO PRINCIPLES
- Clear value proposition
- Personality and authenticity
- Relevant credentials or achievements
- Call to action when appropriate
- Platform-appropriate length and tone
## PLATFORM REQUIREMENTS
### Instagram - 150 characters, emoji-friendly
### Twitter - 160 characters, witty works
### LinkedIn - Professional, detailed possible
### TikTok - Short, personality-forward
## STYLE APPROACHES
### IF style = "Professional" - Credentials, achievements
### IF style = "Creative" - Unique, memorable
### IF style = "Fun" - Playful, personality-driven
### IF style = "Minimalist" - Brief, impactful
### IF style = "Inspirational" - Mission-driven
Platform: {{platform}}
Style: {{style}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Personal branding', description: 'Profissionais criam bios que comunicam seu valor único e atraem as conexões certas.' },
      { title: 'Perfis de negócios', description: 'Empresas criam bios que representam sua marca e atraem clientes potenciais.' },
      { title: 'Criadores de conteúdo', description: 'Influenciadores e criadores desenvolvem bios que expressam sua personalidade e nicho.' },
    ],
    faqs: [
      { question: 'Quão longa deve ser minha bio?', answer: 'Depende da plataforma. Instagram: 150 caracteres, Twitter: 160 caracteres, LinkedIn permite mais. Seja conciso mas informativo.' },
      { question: 'Devo usar emojis na bio?', answer: 'Para Instagram e TikTok, emojis podem adicionar personalidade. Para LinkedIn, use com moderação ou evite.' },
      { question: 'O que devo incluir na bio?', answer: 'Quem você é, o que você faz, para quem, e uma proposta de valor clara. Adicione CTA se apropriado.' },
      { question: 'Devo incluir conquistas?', answer: 'Credenciais relevantes podem adicionar credibilidade. Escolha as mais impactantes para seu público.' },
      { question: 'A mesma bio funciona para todas as plataformas?', answer: 'É melhor adaptar para cada plataforma. O tom e comprimento variam entre LinkedIn e TikTok, por exemplo.' },
      { question: 'Como incluo um call to action?', answer: 'Adicione link ou direção clara do que você quer que as pessoas façam: "Link na bio", "DM para...", etc.' },
      { question: 'Devo ser profissional ou pessoal?', answer: 'Depende da plataforma e objetivos. LinkedIn tende a ser profissional, enquanto TikTok permite mais personalidade.' },
      { question: 'Com que frequência devo atualizar minha bio?', answer: 'Atualize quando suas ofertas, foco ou conquistas mudarem significativamente. Revise regularmente.' },
      { question: 'Posso usar humor na bio?', answer: 'Sim, se combinar com sua marca e plataforma. Humor bem feito é memorável e diferenciador.' },
      { question: 'Hashtags funcionam em bios?', answer: 'No Instagram, hashtags em bio são clicáveis mas raramente usadas. Em LinkedIn, podem ajudar descobribilidade.' },
    ],
  },

  'instagram-bio-generator': {
    slug: 'instagram-bio-generator',
    name: 'Gerador de Bio para Instagram',
    title: 'Gerador gratuito de biografias para Instagram por IA',
    description: 'Crie bios de Instagram que convertem visitantes em seguidores. Nossa IA gera descrições impactantes em 150 caracteres.',
    metaDescription: 'Crie bios de Instagram que convertem visitantes em seguidores. Nossa IA gera descrições impactantes em 150 caracteres.',
    inputLabel: 'Descreva você ou sua marca...',
    inputPlaceholder: 'ex. Fotógrafa de viagens compartilhando destinos escondidos e dicas de fotografia',
    buttonText: 'Gerar Bio',
    maxLength: 1024,
    options: [
      {
        name: 'account_type',
        label: 'Tipo de conta',
        choices: ['Criador de conteúdo', 'Negócio', 'Pessoal', 'Artista', 'Coach/Consultor'],
        default: 'Criador de conteúdo',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Estilo',
        choices: ['Profissional', 'Criativo', 'Divertido', 'Minimalista', 'Inspirador'],
        default: 'Criativo',
        type: 'select',
      },
      {
        name: 'include_emojis',
        label: 'Incluir emojis',
        choices: ['Sim', 'Não'],
        default: 'Sim',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an Instagram bio expert who creates compelling profiles that drive follows.
## INSTAGRAM BIO REQUIREMENTS
- Maximum 150 characters
- Can include line breaks
- Emojis are platform-appropriate
- One clickable link allowed (mention)
- Hashtags are clickable but rarely used
## BIO ELEMENTS
1. Who you are/what you do
2. Value proposition
3. Personality/unique angle
4. CTA (optional but effective)
## ACCOUNT TYPE APPROACHES
### Creators - Niche + personality + content promise
### Business - Value prop + credibility + CTA
### Personal - Interests + personality + vibe
### Artists - Medium + style + portfolio hint
### Coaches - Who you help + transformation
## STYLE OPTIONS
### Professional - Clean, credible, results-focused
### Creative - Unique, memorable, artistic
### Fun - Playful, emoji-rich, personality
### Minimalist - Brief, impactful, clean
### Inspirational - Mission, purpose, impact
Account Type: {{account_type}}
Style: {{style}}
Include Emojis: {{include_emojis}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Perfis de criadores', description: 'Influenciadores e criadores de conteúdo criam bios que comunicam seu nicho e atraem seguidores engajados.' },
      { title: 'Contas comerciais', description: 'Empresas criam bios que representam sua marca e direcionam visitantes para ação.' },
      { title: 'Perfis pessoais', description: 'Indivíduos criam bios que expressam personalidade e conectam com pessoas semelhantes.' },
    ],
    faqs: [
      { question: 'Quantos caracteres posso usar no Instagram?', answer: 'A bio do Instagram permite até 150 caracteres. Use quebras de linha para estruturar e tornar mais legível.' },
      { question: 'Devo usar emojis na bio?', answer: 'Emojis são comuns e eficazes no Instagram. Usados estrategicamente, eles adicionam personalidade e ajudam a destacar pontos-chave.' },
      { question: 'Como uso quebras de linha?', answer: 'Escreva sua bio em notas, adicione quebras de linha lá, e cole no Instagram. Isso estrutura melhor a informação.' },
      { question: 'Devo incluir hashtags na bio?', answer: 'Hashtags em bios são clicáveis mas levam pessoas para fora do seu perfil. Use com cautela ou evite.' },
      { question: 'Que call to action funciona melhor?', answer: '"Link na bio", "DM para...", "Clique para..." são comuns. Seja claro sobre o que você quer que façam.' },
      { question: 'A bio afeta minha descobribilidade?', answer: 'Sim, palavras-chave na bio podem ajudar quando pessoas pesquisam. Inclua termos relevantes ao seu nicho.' },
      { question: 'Com que frequência devo mudar a bio?', answer: 'Atualize quando tiver novas ofertas, conquistas ou mudanças de foco. Mantenha relevante e atual.' },
      { question: 'Posso mencionar outras contas?', answer: 'Sim, @menções são clicáveis. Útil para vincular a contas relacionadas ou marca principal.' },
      { question: 'Como destaco minha bio?', answer: 'Use formato criativo, emojis estratégicos, proposta de valor clara e personalidade autêntica.' },
      { question: 'Devo incluir minha localização?', answer: 'Depende do negócio. Para negócios locais, sim. Para criadores digitais, pode não ser necessário.' },
    ],
  },

  'instagram-caption-generator': {
    slug: 'instagram-caption-generator',
    name: 'Gerador de Legendas para Instagram',
    title: 'Gerador gratuito de legendas para Instagram por IA',
    description: 'Crie legendas de Instagram que engajam e convertem. Nossa IA gera textos com ganchos, valor e calls to action.',
    metaDescription: 'Crie legendas de Instagram que engajam e convertem. Nossa IA gera textos com ganchos, valor e calls to action.',
    inputLabel: 'Descreva seu post...',
    inputPlaceholder: 'ex. Foto do meu novo espaço de trabalho home office minimalista',
    buttonText: 'Gerar Legenda',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tom',
        choices: ['Casual', 'Inspirador', 'Educacional', 'Divertido', 'Promocional'],
        default: 'Casual',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Tamanho',
        choices: ['Curto (1-2 linhas)', 'Médio (parágrafo)', 'Longo (storytelling)'],
        default: 'Médio (parágrafo)',
        type: 'select',
      },
      {
        name: 'include_cta',
        label: 'Incluir call to action',
        choices: ['Sim', 'Não'],
        default: 'Sim',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an Instagram content expert who creates engaging captions that drive engagement.
## CAPTION STRUCTURE
1. Hook (first line - visible before "more")
2. Value/Story (main content)
3. CTA (engagement driver)
4. Hashtags (optional, can suggest)
## TONE APPROACHES
### Casual - Conversational, relatable
### Inspirational - Uplifting, motivating
### Educational - Informative, valuable
### Fun - Playful, entertaining
### Promotional - Sales-focused, CTA-heavy
## LENGTH GUIDELINES
### Short - 1-2 punchy lines
### Medium - One solid paragraph
### Long - Storytelling, multiple paragraphs
## ENGAGEMENT TACTICS
- Ask questions
- Use line breaks for readability
- Front-load important info
- End with clear CTA
Tone: {{tone}}
Length: {{length}}
Include CTA: {{include_cta}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Posts de conteúdo', description: 'Criadores desenvolvem legendas que complementam seu conteúdo visual e geram engajamento.' },
      { title: 'Marketing de produtos', description: 'Marcas criam legendas que promovem produtos de forma autêntica e envolvente.' },
      { title: 'Storytelling', description: 'Usuários compartilham histórias pessoais com legendas que conectam emocionalmente.' },
    ],
    faqs: [
      { question: 'Quão longa pode ser uma legenda do Instagram?', answer: 'O Instagram permite até 2.200 caracteres. No entanto, apenas as primeiras linhas aparecem antes de "mais". O hook é crucial.' },
      { question: 'O que é um bom hook para legenda?', answer: 'Um hook é a primeira linha que aparece sem clicar em "mais". Deve ser intrigante, surpreendente ou valiosa o suficiente para expandir.' },
      { question: 'Quantas hashtags devo usar?', answer: 'Instagram permite até 30, mas 5-15 relevantes e específicas tendem a performar melhor que encher de hashtags.' },
      { question: 'Devo usar emojis nas legendas?', answer: 'Sim, emojis adicionam personalidade e quebram texto. Use estrategicamente para destacar pontos e adicionar tom.' },
      { question: 'Que tipo de CTA funciona?', answer: '"Salve para depois", "Comente sua opinião", "Marque um amigo", "Link na bio" são CTAs eficazes para diferentes objetivos.' },
      { question: 'Como escrevo legendas mais longas envolventes?', answer: 'Use storytelling, quebre em parágrafos curtos, entregue valor em cada seção e mantenha o leitor interessado até o CTA.' },
      { question: 'A legenda afeta o algoritmo?', answer: 'Sim, legendas que geram engajamento (comentários, salvamentos, compartilhamentos) ajudam a alcançar mais pessoas.' },
      { question: 'Posso usar a mesma legenda em múltiplos posts?', answer: 'Evite duplicação. Cada post deve ter legenda única e relevante para o conteúdo específico.' },
      { question: 'Onde coloco as hashtags?', answer: 'Pode ser no final da legenda ou no primeiro comentário. Ambos funcionam, escolha baseado em estética.' },
      { question: 'Como adapto o tom para minha marca?', answer: 'Selecione o tom apropriado e ajuste o resultado para sua voz de marca específica.' },
    ],
  },

  'instagram-hashtag-generator': {
    slug: 'instagram-hashtag-generator',
    name: 'Gerador de Hashtags para Instagram',
    title: 'Gerador gratuito de hashtags para Instagram por IA',
    description: 'Encontre as hashtags perfeitas para maximizar alcance no Instagram. Nossa IA gera hashtags relevantes e estratégicas.',
    metaDescription: 'Encontre as hashtags perfeitas para maximizar alcance no Instagram. Nossa IA gera hashtags relevantes e estratégicas.',
    inputLabel: 'Descreva seu post ou nicho...',
    inputPlaceholder: 'ex. Post sobre receitas veganas fáceis para iniciantes',
    buttonText: 'Gerar Hashtags',
    maxLength: 1024,
    options: [
      {
        name: 'count',
        label: 'Número de hashtags',
        choices: ['10 hashtags', '20 hashtags', '30 hashtags'],
        default: '20 hashtags',
        type: 'select',
      },
      {
        name: 'mix',
        label: 'Mix de popularidade',
        choices: ['Mais populares', 'Equilibrado', 'Mais nicho'],
        default: 'Equilibrado',
        type: 'select',
      },
    ],
    systemPrompt: `You are an Instagram hashtag expert who creates strategic hashtag sets for maximum reach.
## HASHTAG STRATEGY
- Mix of popular, medium, and niche hashtags
- Relevant to specific content
- Avoid banned or spammy hashtags
- Include community and engagement hashtags
## POPULARITY MIX
### More popular - Higher competition, broader reach
### Balanced - Mix of sizes for optimal discoverability
### More niche - Lower competition, targeted audience
## OUTPUT FORMAT
Provide hashtags organized by:
- Popular (high competition)
- Medium (moderate competition)
- Niche (specific, lower competition)
- Community/Engagement hashtags
Count: {{count}}
Mix: {{mix}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Crescimento orgânico', description: 'Criadores usam hashtags estratégicas para alcançar novos públicos e crescer organicamente no Instagram.' },
      { title: 'Descobribilidade de nicho', description: 'Especialistas encontram hashtags específicas para conectar com seu público-alvo ideal.' },
      { title: 'Campanhas de marca', description: 'Marcas identificam hashtags relevantes para campanhas e construção de comunidade.' },
    ],
    faqs: [
      { question: 'Quantas hashtags devo usar?', answer: 'Instagram permite até 30. Estudos sugerem que 10-20 hashtags relevantes tendem a performar bem. Qualidade sobre quantidade.' },
      { question: 'Hashtags populares ou de nicho?', answer: 'Use um mix. Populares dão visibilidade mas competição alta. Nicho alcança público específico com mais chance de engajamento.' },
      { question: 'Posso usar as mesmas hashtags sempre?', answer: 'Evite. Instagram pode considerar spam. Varie hashtags baseado no conteúdo específico de cada post.' },
      { question: 'Onde coloco as hashtags?', answer: 'Na legenda ou primeiro comentário. Ambos funcionam igualmente bem para algoritmo.' },
      { question: 'Como sei se uma hashtag está banida?', answer: 'Pesquise a hashtag no Instagram. Se não mostrar resultados ou tiver aviso, pode estar banida ou restrita.' },
      { question: 'Hashtags afetam o alcance?', answer: 'Sim, hashtags bem escolhidas podem aparecer na página Explorar e alcançar pessoas fora de seus seguidores.' },
      { question: 'Devo criar hashtags de marca?', answer: 'Sim, hashtags de marca ajudam a construir comunidade e facilitar user-generated content.' },
      { question: 'Hashtags funcionam em Stories?', answer: 'Sim, você pode adicionar hashtags em Stories, mas o impacto tende a ser menor que em posts.' },
      { question: 'Como encontro hashtags de meu nicho?', answer: 'Pesquise posts similares, veja o que concorrentes usam, e explore hashtags relacionadas que o Instagram sugere.' },
      { question: 'A popularidade das hashtags muda?', answer: 'Sim, hashtags podem ganhar ou perder relevância. Mantenha suas hashtags atualizadas e relevantes.' },
    ],
  },

  'social-media-hashtag-generator': {
    slug: 'social-media-hashtag-generator',
    name: 'Gerador de Hashtags para Redes Sociais',
    title: 'Gerador gratuito de hashtags para redes sociais por IA ',
    description: 'Gere hashtags otimizadas para qualquer plataforma social. Nossa IA cria conjuntos estratégicos para maximizar alcance.',
    metaDescription: 'Gere hashtags otimizadas para qualquer plataforma social. Nossa IA cria conjuntos estratégicos para maximizar alcance.',
    inputLabel: 'Descreva seu conteúdo...',
    inputPlaceholder: 'ex. Dicas de produtividade para empreendedores',
    buttonText: 'Gerar Hashtags',
    maxLength: 1024,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['Instagram', 'Twitter', 'LinkedIn', 'TikTok', 'Geral'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'count',
        label: 'Quantidade',
        choices: ['5 hashtags', '10 hashtags', '20 hashtags', '30 hashtags'],
        default: '10 hashtags',
        type: 'select',
      },
    ],
    systemPrompt: `You are a social media hashtag strategist who creates platform-optimized hashtag sets.
## PLATFORM-SPECIFIC GUIDELINES
### Instagram - Up to 30, mix of popularity levels
### Twitter - 1-3 focused, trending when relevant
### LinkedIn - 3-5 professional, industry-specific
### TikTok - 3-5, trending and niche mix
## HASHTAG PRINCIPLES
- Relevance to content
- Appropriate for platform
- Mix of reach levels
- Avoid spam/banned tags
## OUTPUT FORMAT
Provide hashtags with:
- The hashtag
- Why it's relevant
- Popularity/reach level
Platform: {{platform}}
Count: {{count}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Multi-plataforma', description: 'Criadores adaptam estratégia de hashtags para cada plataforma social onde publicam.' },
      { title: 'Campanhas coordenadas', description: 'Marcas criam conjuntos de hashtags consistentes para campanhas em múltiplas redes.' },
      { title: 'Crescimento de audiência', description: 'Usuários maximizam descobribilidade através de hashtags estrategicamente escolhidas.' },
    ],
    faqs: [
      { question: 'Hashtags funcionam igual em todas as plataformas?', answer: 'Não. Cada plataforma tem práticas diferentes. Instagram usa muitas, Twitter poucas, LinkedIn moderado, TikTok foca em trends.' },
      { question: 'Quantas hashtags usar por plataforma?', answer: 'Instagram: 10-20, Twitter: 1-3, LinkedIn: 3-5, TikTok: 3-5 focadas em trends e nicho.' },
      { question: 'Devo usar hashtags trending?', answer: 'Se relevantes ao seu conteúdo, sim. Não force trends irrelevantes só para visibilidade.' },
      { question: 'Hashtags em maiúsculas fazem diferença?', answer: 'Para o algoritmo, não. Mas #PrimeiraLetraMaiuscula é mais legível que #tudominusculo.' },
      { question: 'Posso criar minhas próprias hashtags?', answer: 'Sim, hashtags de marca são ótimas para construir comunidade e rastrear UGC.' },
      { question: 'Hashtags afetam todos os tipos de conteúdo?', answer: 'Funcionam melhor em posts e Reels. Em Stories têm impacto menor, em comentários não funcionam.' },
      { question: 'Como descubro hashtags em alta?', answer: 'Use as ferramentas de pesquisa de cada plataforma e observe o que criadores de seu nicho estão usando.' },
      { question: 'Hashtags em outros idiomas funcionam?', answer: 'Depende do seu público. Se você quer alcance internacional, mix de idiomas pode funcionar.' },
      { question: 'Existe um limite de caracteres para hashtags?', answer: 'Tecnicamente não, mas hashtags muito longas são difíceis de ler e lembrar. Mantenha conciso.' },
      { question: 'Devo pesquisar cada hashtag antes de usar?', answer: 'É uma boa prática verificar se a hashtag não está banida e se o conteúdo associado é apropriado.' },
    ],
  },

  'tiktok-hashtag-generator': {
    slug: 'tiktok-hashtag-generator',
    name: 'Gerador de Hashtags para TikTok',
    title: 'Gerador gratuito de hashtags para TikTok por IA',
    description: 'Encontre hashtags TikTok que impulsionam seu alcance. Nossa IA gera hashtags trending e de nicho para maximizar visualizações.',
    metaDescription: 'Encontre hashtags TikTok que impulsionam seu alcance. Nossa IA gera hashtags trending e de nicho para maximizar visualizações.',
    inputLabel: 'Descreva seu vídeo...',
    inputPlaceholder: 'ex. Tutorial de maquiagem rápida para iniciantes',
    buttonText: 'Gerar Hashtags',
    maxLength: 1024,
    options: [
      {
        name: 'content_type',
        label: 'Tipo de conteúdo',
        choices: ['Entretenimento', 'Educacional', 'Tutorial', 'Trend', 'Lifestyle'],
        default: 'Entretenimento',
        type: 'select',
      },
      {
        name: 'count',
        label: 'Quantidade',
        choices: ['5 hashtags', '10 hashtags', '15 hashtags'],
        default: '5 hashtags',
        type: 'select',
      },
    ],
    systemPrompt: `You are a TikTok growth expert who creates strategic hashtag sets for maximum reach.
## TIKTOK HASHTAG STRATEGY
- 3-5 focused hashtags works best
- Mix trending and niche
- Include #fyp variations strategically
- Content-specific hashtags important
## CONTENT TYPE APPROACHES
### Entertainment - Trending, viral, fun
### Educational - Niche, topic-specific
### Tutorial - How-to, step-by-step
### Trend - Current trends, sounds
### Lifestyle - Aesthetic, vibe-based
## OUTPUT FORMAT
Provide hashtags with:
- The hashtag
- Type (trending/niche/general)
- Why it fits this content
Content Type: {{content_type}}
Count: {{count}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Crescimento no TikTok', description: 'Criadores usam hashtags estratégicas para aparecer na FYP e crescer rapidamente.' },
      { title: 'Alcance de nicho', description: 'Especialistas encontram hashtags específicas para alcançar seu público ideal.' },
      { title: 'Trends e virais', description: 'Usuários capitalizam em trends usando hashtags relevantes e populares.' },
    ],
    faqs: [
      { question: 'Quantas hashtags usar no TikTok?', answer: '3-5 hashtags focadas tendem a funcionar melhor. Qualidade e relevância são mais importantes que quantidade.' },
      { question: '#fyp realmente funciona?', answer: 'Pode ajudar, mas não é garantido. O algoritmo prioriza conteúdo, não hashtags. Use se relevante, não dependa disso.' },
      { question: 'Hashtags afetam a FYP?', answer: 'Hashtags ajudam o algoritmo a categorizar seu conteúdo, mas engajamento e qualidade do vídeo são mais importantes.' },
      { question: 'Devo usar hashtags trending?', answer: 'Se seu conteúdo se relaciona naturalmente com o trend, sim. Não force trends irrelevantes.' },
      { question: 'Hashtags de nicho funcionam no TikTok?', answer: 'Sim, hashtags de nicho podem alcançar público mais engajado e específico para seu conteúdo.' },
      { question: 'Onde coloco as hashtags?', answer: 'Na descrição do vídeo. TikTok tem limite de 150 caracteres na descrição, então seja estratégico.' },
      { question: 'Posso usar as mesmas hashtags sempre?', answer: 'Varie baseado no conteúdo específico de cada vídeo. Hashtags repetitivas podem parecer spam.' },
      { question: 'Hashtags em inglês funcionam no Brasil?', answer: 'Algumas hashtags internacionais têm alcance global. Mix de português e inglês pode funcionar dependendo do público.' },
      { question: 'Como descubro hashtags populares?', answer: 'Use a página Descobrir do TikTok e observe o que criadores de sucesso do seu nicho estão usando.' },
      { question: 'Existe limite de hashtags no TikTok?', answer: 'Não há limite específico, mas o limite de caracteres da descrição naturalmente limita quantas você pode usar.' },
    ],
  },

  // ==================== END OF BATCH 3 ====================

  // ==================== BATCH 4 (Tools 31-40) ====================

  'social-media-username-generator': {
    slug: 'social-media-username-generator',
    name: 'Gerador de Nomes de Usuário para Redes Sociais',
    title: 'Social Media Username Generator por IA gratuito',
    description: 'Crie nomes de usuário únicos e memoráveis para suas redes sociais. Nossa IA gera ideias personalizadas que funcionam no Instagram, TikTok, Twitter e mais.',
    metaDescription: 'Crie nomes de usuário únicos e memoráveis para suas redes sociais. Nossa IA gera ideias personalizadas que funcionam no Instagram, TikTok, Twitter e mais.',
    inputLabel: 'Descreva você ou sua marca...',
    inputPlaceholder: 'ex. Coach de fitness chamada Ana especializada em yoga e meditação',
    buttonText: 'Gerar Nomes de Usuário',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Profissional', 'Criativo/Divertido', 'Minimalista', 'Focado em nicho', 'Baseado em nome'],
        default: 'Criativo/Divertido',
        type: 'select',
      },
      {
        name: 'platform',
        label: 'Plataforma principal',
        choices: ['Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'Multi-plataforma'],
        default: 'Multi-plataforma',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert personal branding consultant specializing in creating memorable, effective usernames for social media platforms.
## USERNAME CREATION PRINCIPLES
1. Memorability: Easy to recall and spell
2. Simplicity: Short and clean (ideally under 15 characters)
3. Relevance: Reflects identity, niche, or brand
4. Availability: Unique enough to find across platforms
5. Professionalism: Appropriate for intended audience
## USERNAME PATTERNS
### Pattern 1: Name + Descriptor
### Pattern 2: Name + Numbers (meaningful)
### Pattern 3: Descriptive Handle
### Pattern 4: Creative Wordplay
### Pattern 5: Abbreviated/Acronym
### Pattern 6: Location + Niche
### Pattern 7: Action-Based
## PLATFORM-SPECIFIC CONSIDERATIONS
- Instagram: 30 characters max
- Twitter/X: 15 characters max
- TikTok: 24 characters max
- YouTube: More flexible
Style: {{style}}
Platform: {{platform}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Branding e contas comerciais', description: 'Empresas e indivíduos estabelecendo presença online usam o gerador para criar nomes de usuário consistentes e reconhecíveis em todas as plataformas.' },
      { title: 'Criadores de conteúdo', description: 'Influenciadores e criadores precisam de nomes distintos que reflitam seu nicho e sejam fáceis de lembrar.' },
      { title: 'Personal branding', description: 'Profissionais construindo marcas pessoais criam nomes únicos para networking e oportunidades.' },
    ],
    faqs: [
      { question: 'O que torna um bom nome de usuário?', answer: 'Bons nomes são curtos (menos de 15 caracteres), fáceis de soletrar e pronunciar, memoráveis e relevantes para sua identidade ou nicho.' },
      { question: 'Devo usar meu nome real?', answer: 'Depende dos seus objetivos. Nomes reais funcionam bem para personal branding profissional. Nomes criativos são melhores para criadores de conteúdo.' },
      { question: 'Como faço meu nome único?', answer: 'Adicione descritores relevantes, use jogos de palavras, inclua seu nicho ou localização, ou combine palavras inesperadas.' },
      { question: 'Devo usar o mesmo nome em todas as plataformas?', answer: 'Idealmente sim. Nomes consistentes facilitam encontrar você e fortalecem reconhecimento de marca.' },
      { question: 'E se meu nome preferido já estiver em uso?', answer: 'Tente variações: adicione underscores, prefixos como "the." ou "its.", ou combine com descritores relevantes.' },
      { question: 'Devo usar números no nome?', answer: 'Use números estrategicamente se tiverem significado (ano de nascimento, fundação). Evite números aleatórios que parecem spam.' },
      { question: 'Quão longo deve ser o nome?', answer: 'Mais curto é melhor - menos de 15 caracteres é ideal. Isso garante disponibilidade em todas as plataformas.' },
      { question: 'Posso mudar meu nome depois?', answer: 'A maioria das plataformas permite mudanças, mas isso pode confundir seguidores. Escolha cuidadosamente desde o início.' },
      { question: 'O nome deve descrever o que eu faço?', answer: 'Incluir seu nicho pode ajudar na descobribilidade, mas mantenha geral o suficiente para permitir evolução.' },
      { question: 'Que caracteres posso usar?', answer: 'A maioria das plataformas permite letras, números, underscores e pontos. Evite caracteres especiais para maior compatibilidade.' },
    ],
  },

  'instagram-name-generator': {
    slug: 'instagram-name-generator',
    name: 'Gerador de Nomes para Instagram',
    title: 'Gerador Gratuito de Nomes para Instagram por IA',
    description: 'Crie nomes de usuário Instagram únicos que se destacam. Nossa IA gera handles memoráveis e alinhados com sua marca.',
    metaDescription: 'Crie nomes de usuário Instagram únicos que se destacam. Nossa IA gera handles memoráveis e alinhados com sua marca.',
    inputLabel: 'Descreva você ou sua marca...',
    inputPlaceholder: 'ex. Blogueira de comida chamada Maria que compartilha receitas saudáveis',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'account_type',
        label: 'Tipo de conta',
        choices: ['Marca pessoal', 'Criador de conteúdo', 'Negócio/Marca', 'Influenciador', 'Artista/Criativo'],
        default: 'Criador de conteúdo',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Profissional', 'Criativo/Divertido', 'Minimalista', 'Trendy', 'Clássico'],
        default: 'Criativo/Divertido',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram branding consultant specializing in creating unique, memorable Instagram usernames.
## INSTAGRAM USERNAME REQUIREMENTS
- Maximum 30 characters
- Allowed: letters, numbers, periods, underscores
- No consecutive periods
- Case insensitive
- Must be unique on platform
## INSTAGRAM USERNAME CATEGORIES
### Personal Branding
### Content Creator
### Business/Brand
### Influencer
### Artist/Creative
## EFFECTIVE PATTERNS
### the + name
### name + does/creates/makes
### name + hq/co/studio
### im/its/hey + name
### name + niche
Account Type: {{account_type}}
Style: {{style}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Personal branding', description: 'Pessoas criando marcas pessoais encontram nomes únicos que refletem sua paixão e expertise.' },
      { title: 'Promoção de negócios', description: 'Empresas encontram nomes alinhados com sua identidade corporativa.' },
      { title: 'Campanhas de marketing', description: 'Marketeiros criam handles específicos para campanhas ou promoções.' },
    ],
    faqs: [
      { question: 'Quais são os requisitos de nome no Instagram?', answer: 'Nomes podem ter até 30 caracteres usando letras, números, pontos e underscores. Pontos consecutivos não são permitidos.' },
      { question: 'Como sei se um nome está disponível?', answer: 'Verifique diretamente no Instagram pesquisando ou tentando criar uma conta.' },
      { question: 'Meu nome do Instagram deve combinar com outras redes?', answer: 'Idealmente sim. Consistência fortalece sua marca e facilita que pessoas te encontrem.' },
      { question: 'É melhor usar meu nome real ou criativo?', answer: 'Depende dos seus objetivos. Nomes reais funcionam para profissionais, criativos para criadores de conteúdo.' },
      { question: 'Quão importante é o nome para crescimento?', answer: 'O nome afeta descobribilidade e primeira impressão. Um nome claro e memorável ajuda as pessoas a te encontrar.' },
      { question: 'Posso mudar meu nome depois?', answer: 'Sim, nas configurações. Mas links antigos podem quebrar e seguidores podem ficar confusos.' },
      { question: 'Devo incluir meu nicho no nome?', answer: 'Incluir seu nicho ajuda na descobribilidade e comunica imediatamente seu foco.' },
      { question: 'E se todos os bons nomes estiverem em uso?', answer: 'Tente variações com underscores ou pontos, adicione descritores ou use prefixos como "the" ou "its".' },
      { question: 'Underscores ou pontos são melhores?', answer: 'Ambos funcionam bem. Pontos podem parecer mais limpos, underscores são mais universais.' },
      { question: 'Como escolho entre várias opções?', answer: 'Considere qual é mais fácil de soletrar verbalmente e qual representa melhor sua marca a longo prazo.' },
    ],
  },

  'tiktok-username-generator': {
    slug: 'tiktok-username-generator',
    name: 'Gerador de Nomes de Usuário para TikTok',
    title: 'AI TikTok Username Generator gratuito',
    description: 'Crie nomes de usuário TikTok únicos que combinam com seu vibe. Nossa IA gera handles memoráveis e trendy.',
    metaDescription: 'Crie nomes de usuário TikTok únicos que combinam com seu vibe. Nossa IA gera handles memoráveis e trendy.',
    inputLabel: 'Descreva você ou seu conteúdo...',
    inputPlaceholder: 'ex. Criador de comédia que faz esquetes sobre vida de escritório',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Trendy/Divertido', 'Profissional', 'Focado em nicho', 'Baseado em personalidade', 'Baseado em nome'],
        default: 'Trendy/Divertido',
        type: 'select',
      },
      {
        name: 'content_niche',
        label: 'Nicho de conteúdo',
        choices: ['Entretenimento/Comédia', 'Fitness/Saúde', 'Beleza/Moda', 'Comida/Culinária', 'Educação/Dicas', 'Lifestyle/Vlog', 'Outro'],
        default: 'Entretenimento/Comédia',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok personal branding consultant specializing in creating memorable usernames.
## TIKTOK USERNAME REQUIREMENTS
- Maximum 24 characters
- Allowed: letters, numbers, underscores, periods
- Must be unique on platform
- Case insensitive
## TIKTOK USERNAME CHARACTERISTICS
- Casual and fun tone
- Personality-forward
- Trend-aware
- Easy to remember from quick videos
## STYLES
### Name-Based
### Niche-Focused
### Personality-Driven
### Creator Brand
### Playful/Trendy
### The[Niche][Person]
Style: {{style}}
Content Niche: {{content_niche}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Nova identidade de criador', description: 'Novos criadores estabelecem sua identidade na plataforma com nomes que ressoam com o público do TikTok.' },
      { title: 'Branding de nicho', description: 'Criadores focados em nichos específicos encontram nomes que comunicam imediatamente seu foco.' },
      { title: 'Lançamento de marca no TikTok', description: 'Empresas encontram nomes que se alinham com a cultura casual e criativa do TikTok.' },
    ],
    faqs: [
      { question: 'Quais são os requisitos de nome no TikTok?', answer: 'Nomes podem ter até 24 caracteres usando letras, números, underscores e pontos. Deve ser único e não é sensível a maiúsculas.' },
      { question: 'Posso mudar meu nome no TikTok?', answer: 'Sim, nas configurações. Pode haver um período de espera antes de mudar novamente.' },
      { question: 'O nome deve ser engraçado ou profissional?', answer: 'Depende do seu conteúdo. TikTok tende a ser casual, então mesmo profissionais usam nomes acessíveis.' },
      { question: 'Como faço meu nome memorável?', answer: 'Mantenha curto, fácil de pronunciar e relacionado ao seu conteúdo. Aliterações e jogos de palavras ajudam.' },
      { question: 'Devo usar meu nome real?', answer: 'Pode ajudar com personal branding, mas handles criativos funcionam melhor para contas focadas em conteúdo.' },
      { question: 'E se meu nome preferido estiver em uso?', answer: 'Adicione seu nicho, use underscores ou prefixos como "the" ou "its".' },
      { question: 'Meu nome do TikTok deve combinar com Instagram?', answer: 'Consistência ajuda seguidores a te encontrar em todas as plataformas.' },
      { question: 'Nomes afetam descobribilidade?', answer: 'Nomes com palavras-chave podem ajudar em buscas, mas qualidade do conteúdo é mais importante.' },
      { question: 'Quão importante é o nome para crescimento?', answer: 'O nome é sua identidade de marca, mas conteúdo de qualidade é o que realmente cresce sua audiência.' },
      { question: 'Devo usar números no nome?', answer: 'Evite números aleatórios. Números significativos podem funcionar se fizerem sentido para sua marca.' },
    ],
  },

  'youtube-channel-description-generator': {
    slug: 'youtube-channel-description-generator',
    name: 'Gerador de Descrição de Canal YouTube',
    title: 'Gerador gratuito de descrição de canal para o YouTube por IA',
    description: 'Crie descrições de canal YouTube que atraem inscritos. Nossa IA gera descrições otimizadas para SEO que mostram seu conteúdo.',
    metaDescription: 'Crie descrições de canal YouTube que atraem inscritos. Nossa IA gera descrições otimizadas para SEO que mostram seu conteúdo.',
    inputLabel: 'Descreva seu canal YouTube...',
    inputPlaceholder: 'ex. Canal de reviews de tecnologia focado em smartphones e gadgets acessíveis',
    buttonText: 'Gerar Descrição',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Tom do canal',
        choices: ['Profissional', 'Amigável', 'Entusiasmado', 'Informativo', 'Casual'],
        default: 'Amigável',
        type: 'select',
      },
      {
        name: 'channel_type',
        label: 'Tipo de canal',
        choices: ['Educacional/Tutorial', 'Entretenimento', 'Vlog/Lifestyle', 'Gaming', 'Negócio/Marca', 'Review/Comentário'],
        default: 'Educacional/Tutorial',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube strategist specializing in channel optimization and discoverability.
## YOUTUBE CHANNEL DESCRIPTION STRUCTURE
- Character Limit: 1,000 characters
- Hook/Value Statement (First 1-2 sentences)
- Content Overview (Middle section)
- Creator/Brand Info (Brief)
- Call-to-Action (End)
- Contact Information
## TONE APPROACHES
### Professional - Polished, authoritative
### Friendly - Warm, inviting, community-focused
### Enthusiastic - Energetic, passionate
### Informative - Clear, educational
### Casual - Relaxed, approachable
## OUTPUT REQUIREMENTS
- Fit within 1,000 characters
- Lead with key value proposition
- Include clear content overview
- Have appropriate CTAs
- Are SEO-friendly
Tone: {{tone}}
Channel Type: {{channel_type}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Otimização de SEO do canal', description: 'YouTubers criam descrições ricas em palavras-chave que melhoram visibilidade nos resultados de busca.' },
      { title: 'Conversão de inscritos', description: 'Criadores escrevem descrições que explicam claramente o valor do canal e incentivam inscrições.' },
      { title: 'Setup eficiente de canal', description: 'Novos YouTubers criam descrições profissionais rapidamente durante a configuração inicial.' },
    ],
    faqs: [
      { question: 'Quão longa deve ser a descrição do canal?', answer: 'YouTube permite até 1.000 caracteres. Use o suficiente para comunicar seu valor claramente. Descrições eficazes têm 500-800 caracteres.' },
      { question: 'O que devo incluir?', answer: 'Inclua: sobre o que é o canal, o que espectadores vão aprender, cronograma de uploads, quem você é, CTA para inscrever e informações de contato.' },
      { question: 'A descrição afeta SEO?', answer: 'Sim, descrições ajudam YouTube a entender seu conteúdo para recomendações e busca. Inclua palavras-chave relevantes naturalmente.' },
      { question: 'Devo incluir meu cronograma de uploads?', answer: 'Sim, se você tem cronograma consistente. Isso define expectativas e pode encorajar inscrições.' },
      { question: 'Que CTA devo incluir?', answer: 'Convide espectadores a inscrever e ativar notificações. Seja específico sobre o que eles vão receber.' },
      { question: 'Devo incluir meu e-mail?', answer: 'Sim, se estiver aberto a parcerias comerciais. Um e-mail profissional torna seu canal mais acessível para colaborações.' },
      { question: 'Com que frequência devo atualizar?', answer: 'Atualize quando seu foco de conteúdo, cronograma ou canal mudarem significativamente. Revise trimestralmente.' },
      { question: 'A descrição pode me ajudar a conseguir patrocínios?', answer: 'Sim, uma descrição profissional que mostra seu nicho e audiência torna seu canal mais atraente para patrocinadores.' },
      { question: 'A descrição deve combinar com o tom dos vídeos?', answer: 'Sim, deve refletir a personalidade e estilo do seu canal. Coerência constrói confiança.' },
      { question: 'Como otimizo para busca?', answer: 'Inclua palavras-chave que seu público pesquisaria, coloque informação importante no início e use linguagem natural.' },
    ],
  },

  'youtube-name-generator': {
    slug: 'youtube-name-generator',
    name: 'Gerador de Nomes para YouTube',
    title: 'AI YouTube Name Generator gratuito',
    description: 'Gere nomes de canal YouTube criativos que se destacam. Nossa IA cria nomes memoráveis que atraem inscritos.',
    metaDescription: 'Gere nomes de canal YouTube criativos que se destacam. Nossa IA cria nomes memoráveis que atraem inscritos.',
    inputLabel: 'Descreva seu conteúdo de canal...',
    inputPlaceholder: 'ex. Canal de gaming focado em jogos indie e reviews retrô',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Nome do criador', 'Tópico/Nicho', 'Criativo/Marca', 'Personalidade + Nicho', 'Profissional'],
        default: 'Criativo/Marca',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'Tipo de conteúdo',
        choices: ['Gaming', 'Educação/Tutorial', 'Entretenimento', 'Vlog/Lifestyle', 'Tech/Reviews', 'Beleza/Moda', 'Culinária', 'Fitness', 'Negócios', 'Outro'],
        default: 'Entretenimento',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube branding consultant specializing in creating memorable, searchable channel names.
## YOUTUBE CHANNEL NAME CONSIDERATIONS
- Display Name: More flexible, can include spaces, up to 100 characters
- Handle: @username format, must be unique
## EFFECTIVE CHANNEL NAME PATTERNS
### Pattern 1: Creator Name
### Pattern 2: Topic/Niche Name
### Pattern 3: Personality + Niche
### Pattern 4: Creative/Brand Name
### Pattern 5: [Name] + [Media Indicator]
### Pattern 6: Question/Action Format
## CHANNEL NAME QUALITIES
1. Memorable
2. Speakable
3. Searchable
4. Scalable
5. Brandable
6. Available
Style: {{style}}
Content Type: {{content_type}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Criadores de conteúdo', description: 'YouTubers aspirantes encontram nomes únicos e memoráveis que se alinham com seu nicho de conteúdo.' },
      { title: 'Agências de marketing', description: 'Agências que lançam canais para clientes fazem brainstorm de nomes que ressoam com públicos-alvo.' },
      { title: 'Expansão de marca', description: 'Empresas expandindo para YouTube encontram nomes que complementam sua identidade existente.' },
    ],
    faqs: [
      { question: 'O que torna um bom nome de canal?', answer: 'Bons nomes são memoráveis, fáceis de soletrar e pronunciar, relevantes para o conteúdo, únicos o suficiente para pesquisar e flexíveis para evolução.' },
      { question: 'Meu nome deve descrever meu conteúdo?', answer: 'Nomes descritivos comunicam imediatamente seu foco mas podem limitar flexibilidade. Nomes criativos são mais flexíveis mas requerem mais branding.' },
      { question: 'Como verifico disponibilidade?', answer: 'Pesquise no YouTube pelo nome, verifique disponibilidade de @handle, domínios e redes sociais para consistência.' },
      { question: 'Posso mudar o nome depois?', answer: 'Sim, mas pode confundir inscritos e afetar reconhecimento de marca. Escolha cuidadosamente desde o início.' },
      { question: 'Devo usar meu nome real?', answer: 'Funciona bem para personal branding e posicionamento de expert. Nomes criativos são melhores para entretenimento.' },
      { question: 'Quão importante é o nome para crescimento?', answer: 'O nome afeta primeiras impressões e buscabilidade, mas qualidade do conteúdo é mais importante para crescimento.' },
      { question: 'Meu nome deve combinar com outras redes?', answer: 'Consistência ajuda seguidores a te encontrar e fortalece reconhecimento de marca.' },
      { question: 'E se meu nome preferido estiver em uso?', answer: 'Tente variações, adicione seu nicho ou descritores. Verifique se o canal em uso está inativo.' },
      { question: 'Nomes afetam SEO do YouTube?', answer: 'Nomes com palavras-chave podem ajudar em buscas, mas nomes únicos e marcáveis também rankeiam bem com otimização adequada.' },
      { question: 'Devo incluir "YouTube" no nome?', answer: 'Geralmente não. É redundante, usa caracteres valiosos e não funciona bem para branding multi-plataforma.' },
    ],
  },

  'youtube-video-description-generator': {
    slug: 'youtube-video-description-generator',
    name: 'Gerador de Descrição de Vídeo YouTube',
    title: 'Gerador gratuito de descrição de vídeo para o YouTube por IA',
    description: 'Gere descrições de vídeo YouTube otimizadas para SEO. Nossa IA cria descrições com ganchos, timestamps e palavras-chave.',
    metaDescription: 'Gere descrições de vídeo YouTube otimizadas para SEO. Nossa IA cria descrições com ganchos, timestamps e palavras-chave.',
    inputLabel: 'Descreva seu vídeo...',
    inputPlaceholder: 'ex. Tutorial sobre como editar fotos no Lightroom para iniciantes',
    buttonText: 'Gerar Descrição',
    maxLength: 2048,
    options: [
      {
        name: 'video_type',
        label: 'Tipo de vídeo',
        choices: ['Tutorial/Educacional', 'Entretenimento/Vlog', 'Review/Produto', 'Gaming', 'News/Comentário', 'Música/Performance'],
        default: 'Tutorial/Educacional',
        type: 'select',
      },
      {
        name: 'include_timestamps',
        label: 'Incluir template de timestamps',
        choices: ['Sim', 'Não'],
        default: 'Sim',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert YouTube SEO specialist and content strategist.
## YOUTUBE VIDEO DESCRIPTION STRUCTURE
- Character Limit: 5,000 characters
- Visible Preview: First ~100-200 characters shown before "show more"
## OPTIMAL DESCRIPTION ANATOMY
### 1. Above-the-Fold (First 100-200 characters)
### 2. Video Summary
### 3. Timestamps (If applicable)
### 4. Links Section
### 5. About/Boilerplate
### 6. Tags/Hashtags
## SEO OPTIMIZATION
- Include primary keyword in first 25 words
- Use secondary keywords naturally
- Front-load important information
Video Type: {{video_type}}
Include Timestamps: {{include_timestamps}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Descrições otimizadas para SEO', description: 'YouTubers criam descrições que melhoram rankings de busca e visibilidade.' },
      { title: 'Produção em escala', description: 'Criadores com múltiplos vídeos agilizam a criação de descrições mantendo qualidade.' },
      { title: 'Engajamento aumentado', description: 'Descrições com CTAs claros, timestamps úteis e razões para assistir aumentam engajamento.' },
    ],
    faqs: [
      { question: 'Quão longa deve ser a descrição?', answer: 'YouTube permite até 5.000 caracteres. Busque pelo menos 200-300 palavras para benefícios de SEO. Os primeiros 100-200 caracteres são mais importantes.' },
      { question: 'O que coloco na primeira linha?', answer: 'Inclua sua palavra-chave principal e um gancho convincente que diga aos espectadores o que vão ganhar. Este texto aparece nos resultados de busca.' },
      { question: 'Como funcionam timestamps?', answer: 'Timestamps criam capítulos clicáveis. Formate como "0:00 Introdução" com tempo e label. YouTube cria marcadores automaticamente.' },
      { question: 'Devo incluir hashtags?', answer: 'Sim, 3-5 hashtags relevantes no final. As primeiras três aparecem acima do título do vídeo.' },
      { question: 'Descrições afetam SEO?', answer: 'Sim, descrições ajudam YouTube a entender o conteúdo para busca e recomendações. Inclua palavras-chave naturalmente.' },
      { question: 'Cada vídeo deve ter o mesmo formato?', answer: 'Estrutura consistente é boa, mas adapte o conteúdo principal para cada vídeo específico.' },
      { question: 'Que links incluir?', answer: 'Recursos mencionados, links de produtos, perfis sociais, link de inscrição e vídeos relacionados.' },
      { question: 'Como divulgar links de afiliados?', answer: 'Inclua disclosure claro perto dos links. Transparência é essencial e frequentemente legalmente obrigatória.' },
      { question: 'Devo escrever descrições diferentes para vídeos similares?', answer: 'Sim, cada vídeo precisa de descrição única. Descrições duplicadas podem prejudicar SEO.' },
      { question: 'Com que frequência atualizar descrições?', answer: 'Atualize quando links mudarem, conteúdo ficar desatualizado ou ao testar novas abordagens.' },
    ],
  },

  'rewording-tool': {
    slug: 'rewording-tool',
    name: 'Ferramenta de Reformulação',
    title: 'Ferramenta Rewording por IA gratuita',
    description: 'Reformule texto instantaneamente com nossa ferramenta de IA. Transforme frases para melhorar clareza, mudar tom ou criar conteúdo único.',
    metaDescription: 'Reformule texto instantaneamente com nossa ferramenta de IA. Transforme frases para melhorar clareza, mudar tom ou criar conteúdo único.',
    inputLabel: 'Digite o texto para reformular...',
    inputPlaceholder: 'Cole seu texto aqui para reformulá-lo...',
    buttonText: 'Reformular Texto',
    maxLength: 4096,
    options: [
      {
        name: 'tone',
        label: 'Tom alvo',
        choices: ['Formal/Profissional', 'Casual/Conversacional', 'Acadêmico/Científico', 'Criativo/Envolvente', 'Simplificado/Claro'],
        default: 'Casual/Conversacional',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'Intensidade da reformulação',
        choices: ['Leve (Mudanças sutis)', 'Média (Equilibrada)', 'Forte (Transformação significativa)'],
        default: 'Média (Equilibrada)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor and writing assistant specializing in rephrasing, rewording, and improving text clarity.
## REWORDING OBJECTIVES
1. Clarity Enhancement
2. Tone Adjustment
3. Uniqueness
4. Conciseness
5. Engagement
## REWORDING APPROACHES
### Synonym Replacement
### Sentence Restructuring
### Active/Passive Voice Shifts
### Simplification
### Expansion
### Condensation
## TONE OPTIONS
### Formal/Professional
### Casual/Conversational
### Academic/Scholarly
### Creative/Engaging
### Simplified/Plain
## INTENSITY LEVELS
### Light - Minor changes
### Medium - Balanced restructuring
### Heavy - Significant transformation
Tone: {{tone}}
Intensity: {{intensity}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Criação de conteúdo e SEO', description: 'Criadores de conteúdo usam a ferramenta para criar versões únicas de conteúdo existente, evitando duplicação.' },
      { title: 'Escrita acadêmica', description: 'Estudantes e pesquisadores parafrasream material fonte para trabalhos, mantendo precisão e evitando plágio.' },
      { title: 'Conteúdo de marketing', description: 'Marketeiros criam variações de descrições e posts para testar diferentes abordagens.' },
    ],
    faqs: [
      { question: 'O que é uma ferramenta de reformulação?', answer: 'Uma ferramenta que ajuda a reformular texto substituindo palavras, reestruturando frases ou mudando estilo enquanto preserva o significado original.' },
      { question: 'É o mesmo que parafrasear?', answer: 'Muito similar. Ambos envolvem expressar as mesmas ideias com palavras diferentes. Reformulação pode se referir a mudanças menores.' },
      { question: 'Como é diferente de só usar sinônimos?', answer: 'Reformulação de qualidade vai além de substituição de sinônimos, reestruturando frases e melhorando fluxo para texto natural.' },
      { question: 'Posso usar o conteúdo reformulado sem preocupação com plágio?', answer: 'Reformulação cria fraseado único, mas você ainda deve citar fontes originais para ideias que não são suas.' },
      { question: 'Que tipos de texto posso reformular?', answer: 'Qualquer texto: artigos, posts, e-mails, descrições, trabalhos acadêmicos e mais.' },
      { question: 'Como obtenho melhores resultados?', answer: 'Forneça contexto claro sobre seu objetivo, especifique o tom desejado e indique se quer mudanças leves ou significativas.' },
      { question: 'A reformulação muda o significado?', answer: 'Reformulação de qualidade preserva o significado central enquanto muda a expressão. Sempre revise para garantir precisão.' },
      { question: 'Posso tornar minha escrita mais formal ou casual?', answer: 'Sim, ajuste de tom é uma função chave. Transforme escrita casual em profissional ou vice-versa.' },
      { question: 'Como é diferente de correção gramatical?', answer: 'Correção gramatical conserta erros. Reformulação transforma como ideias são expressas, criando novas versões.' },
      { question: 'Devo sempre aceitar a versão reformulada?', answer: 'Não, sempre revise e edite. Reformulação por IA é um ponto de partida que pode precisar de refinamento.' },
    ],
  },

  'grammar-checker': {
    slug: 'grammar-checker',
    name: 'Verificador Gramatical',
    title: 'Verificador Gramatical por IA gratuito',
    description: 'Verifique gramática, ortografia e pontuação gratuitamente. Obtenha correções instantâneas com explicações claras.',
    metaDescription: 'Verifique gramática, ortografia e pontuação gratuitamente. Obtenha correções instantâneas com explicações claras para melhorar sua escrita.',
    inputLabel: 'Texto para verificar...',
    inputPlaceholder: 'Cole seu texto aqui para verificar erros de gramática, ortografia e pontuação...',
    buttonText: 'Verificar Gramática',
    maxLength: 4096,
    options: [
      { name: 'mode', label: 'Modo de verificação', choices: ['Correção rápida', 'Padrão', 'Aprendizado detalhado', 'Acadêmico', 'Casual/Criativo'], default: 'Padrão', type: 'select' },
    ],
    systemPrompt: `You are an expert editor and grammar specialist who identifies and corrects errors while explaining issues clearly.
## CORE RULES
- Identify ALL grammar, spelling, and punctuation errors
- Provide corrected text with all fixes applied
- Explain each error type clearly
- Distinguish between errors and style suggestions
- Maintain the author's voice and intent
## ERROR CATEGORIES
### Critical Errors:
- Subject-verb agreement
- Tense consistency
- Fragment and run-on sentences
- Spelling and commonly confused words
- Punctuation errors
### Style Suggestions (Optional):
- Wordy phrases
- Passive voice
- Very long sentences
- Repeated word starts
## ANALYSIS MODES
### Quick Fix - Critical errors only
### Standard - All critical errors + key style suggestions
### Detailed Learning - Comprehensive explanations
### Academic - Strict grammar standards
### Casual/Creative - Flexible, respect voice
Mode: {{mode}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Polir comunicação profissional', description: 'Profissionais garantem que e-mails, relatórios e apresentações estejam livres de erros antes de enviar.' },
      { title: 'Revisão acadêmica', description: 'Estudantes verificam ensaios e trabalhos em busca de erros antes da entrega.' },
      { title: 'Garantia de qualidade de conteúdo', description: 'Blogueiros e autores usam como verificação final antes de publicar.' },
    ],
    faqs: [
      { question: 'Que tipos de erros a ferramenta encontra?', answer: 'Identifica erros gramaticais, ortográficos, de pontuação e palavras confundidas. Também sinaliza sugestões de estilo para clareza.' },
      { question: 'O verificador gramatical é gratuito?', answer: 'Sim, completamente gratuito sem limites. Verifique quantos textos precisar.' },
      { question: 'Como é diferente de corretor ortográfico?', answer: 'Corretor ortográfico só detecta erros de digitação. Nosso verificador analisa estrutura de frases, pontuação e uso de palavras.' },
      { question: 'A ferramenta vai mudar meu estilo?', answer: 'Foca em corrigir erros preservando sua voz. Sugestões de estilo são marcadas como opcionais.' },
      { question: 'Pode verificar escrita acadêmica?', answer: 'Sim, escolha modo acadêmico para padrões mais rigorosos adequados para trabalhos acadêmicos.' },
      { question: 'Explica por que algo está errado?', answer: 'Sim, cada erro inclui explicação da regra violada e dicas para evitar erros similares.' },
      { question: 'Quão longo pode ser meu texto?', answer: 'A ferramenta processa textos de vários tamanhos. Para documentos muito longos, verificar seções pode dar melhores resultados.' },
      { question: 'Funciona para português brasileiro?', answer: 'Sim, a ferramenta é otimizada para português brasileiro e suas convenções gramaticais.' },
      { question: 'Vai encontrar todos os meus erros?', answer: 'A ferramenta detecta a grande maioria dos erros comuns, mas nenhum verificador é perfeito. Use como parte do processo de edição.' },
      { question: 'Posso usar para escrita criativa?', answer: 'Sim, escolha modo casual/criativo para mais flexibilidade. Respeitamos fragmentos intencionais e estilo.' },
    ],
  },

  'plagiarism-checker': {
    slug: 'plagiarism-checker',
    name: 'Verificador de Plágio',
    title: 'Verificador de plágio por IA gratuito',
    description: 'Analise seu conteúdo para originalidade e identifique passagens que podem precisar de citações ou reescrita.',
    metaDescription: 'Analise seu conteúdo para originalidade e identifique passagens que podem precisar de citações ou reescrita. Obtenha feedback acionável.',
    inputLabel: 'Texto para verificar...',
    inputPlaceholder: 'Cole seu texto aqui para verificar originalidade...',
    buttonText: 'Verificar Originalidade',
    maxLength: 4096,
    options: [
      { name: 'checkType', label: 'Tipo de verificação', choices: ['Escaneamento rápido', 'Análise padrão', 'Relatório detalhado'], default: 'Análise padrão', type: 'select' },
    ],
    systemPrompt: `You are an expert text analysis tool that checks content for originality by identifying potentially copied or closely paraphrased passages.
## IMPORTANT LIMITATIONS
This tool provides analysis based on pattern recognition. It does not have access to a comprehensive database of all published content.
## CORE RULES
- Analyze AI text for originality indicators and red flags
- Identify passages that appear copied or heavily templated
- Distinguish between common phrases and potentially plagiarized content
- Provide actionable feedback for improving originality
- Never make definitive plagiarism accusations
## ANALYSIS FRAMEWORK
### Red Flag Indicators:
- Style inconsistency
- Vocabulary level changes mid-document
- Extremely polished passages in rough drafts
- Facts without attribution
- Direct quotes without quotation marks
### Originality Indicators:
- Consistent voice throughout
- Personal examples or experiences
- Original analysis or synthesis
- Appropriate citations
Check Type: {{checkType}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Verificação acadêmica pré-entrega', description: 'Estudantes verificam trabalhos antes da entrega para identificar passagens que podem ser sinalizadas.' },
      { title: 'Garantia de qualidade de conteúdo', description: 'Editores verificam submissões para indicadores de originalidade antes da publicação.' },
      { title: 'Auto-auditoria de escritores', description: 'Escritores verificam se não usaram fraseado muito similar às fontes pesquisadas.' },
    ],
    faqs: [
      { question: 'Como funciona o verificador?', answer: 'Analisa seu texto para indicadores de originalidade incluindo consistência de escrita, padrões de estilo e passagens que parecem precisar de citação.' },
      { question: 'O verificador é gratuito?', answer: 'Sim, completamente gratuito sem necessidade de registro.' },
      { question: 'É tão preciso quanto Turnitin ou Copyscape?', answer: 'Não. Esses serviços comparam com bancos de dados massivos. Esta ferramenta usa análise de padrões, não pode confirmar definitivamente se texto aparece online.' },
      { question: 'O que o verificador detecta?', answer: 'Identifica inconsistências de estilo, fatos sem citações, passagens que parecem templated e mudanças de qualidade que podem indicar conteúdo não-original.' },
      { question: 'Pode identificar se copiei de fonte específica?', answer: 'Não, a ferramenta não identifica fontes específicas. Só sinaliza passagens que parecem potencialmente não-originais baseado em padrões.' },
      { question: 'Detecta conteúdo gerado por IA?', answer: 'Esta ferramenta foca em padrões de plágio, não detecção de IA. Use nosso Detector de Conteúdo IA para isso.' },
      { question: 'O que devo fazer se passagens forem sinalizadas?', answer: 'Revise para determinar se precisam de citação direta, paráfrase com atribuição ou reescrita completa.' },
      { question: 'Posso usar para trabalhos acadêmicos?', answer: 'Como verificação preliminar, sim. Mas sempre use o verificador oficial da sua instituição antes da entrega final.' },
      { question: 'Quão longo pode ser meu texto?', answer: 'A ferramenta processa documentos de tamanho padrão. Para muito longos, verificar capítulo por capítulo pode dar melhores resultados.' },
      { question: 'Qual a diferença entre plágio e citações faltando?', answer: 'Plágio é apresentar trabalho de outros como seu. Citações faltando podem ser acidentais. Ambos precisam ser corrigidos.' },
    ],
  },

  'blog-post-ideas-generator': {
    slug: 'blog-post-ideas-generator',
    name: 'Gerador de Ideias para Blog',
    title: 'Gerador gratuito de ideias para posts em blog por IA',
    description: 'Sem ideias de conteúdo? Gere ideias de posts de blog únicos e otimizados para SEO em segundos. Nossa IA entrega tópicos prontos para escrever.',
    metaDescription: 'Sem ideias de conteúdo? Gere ideias de posts de blog únicos e otimizados para SEO em segundos. Nossa IA entrega tópicos prontos para escrever.',
    inputLabel: 'Tópico ou nicho...',
    inputPlaceholder: 'ex. Marketing digital B2B SaaS para fundadores de startups',
    buttonText: 'Gerar Ideias',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_ideas',
        label: 'Número de ideias',
        choices: ['3 ideias', '5 ideias', '10 ideias'],
        default: '5 ideias',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tom',
        choices: ['Formal', 'Casual', 'Persuasivo'],
        default: 'Formal',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist and SEO specialist who generates compelling, actionable blog post ideas.
## CORE PRINCIPLES
1. Search Intent Alignment
2. Specificity Over Generality
3. Value Proposition Clarity
4. Competitive Differentiation
5. Actionability
## IDEA GENERATION FRAMEWORK
### Content Types:
- Educational/How-To
- Data-Driven
- Problem-Solution
- List-Based
- Comparison/Evaluation
- Thought Leadership
### SPARK Formula:
- Specific
- Practical
- Audience-focused
- Rankable
- Knowledge gap
## OUTPUT RULES
For Each Idea:
1. Title
2. Angle
3. Target Keyword Concept
4. Content Type
5. Audience
Number of Ideas: {{number_of_ideas}}
Tone: {{tone}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Planejamento de calendário de conteúdo', description: 'Equipes de marketing preenchem calendários com ideias relevantes e variadas para semanas ou meses.' },
      { title: 'Superar bloqueio criativo', description: 'Criadores ganham perspectivas frescas e ângulos únicos quando estão sem ideias.' },
      { title: 'Estratégia de conteúdo SEO', description: 'Profissionais de SEO identificam tópicos com volume de busca e oportunidades realistas de ranking.' },
    ],
    faqs: [
      { question: 'Como a IA gera ideias de posts?', answer: 'A IA analisa seu nicho, considera tendências, intenção de busca e melhores práticas para sugerir tópicos relevantes e envolventes.' },
      { question: 'As ideias são únicas?', answer: 'São sugestões estratégicas. Você deve adaptá-las com sua perspectiva e expertise únicas.' },
      { question: 'Posso especificar meu público-alvo?', answer: 'Sim, inclua detalhes sobre seu público na descrição para ideias mais direcionadas.' },
      { question: 'As ideias consideram SEO?', answer: 'Sim, especialmente para blogs, as ideias são formuladas considerando potencial de busca e intenção do usuário.' },
      { question: 'Quantas ideias devo gerar?', answer: 'Comece com 5 para boa variedade. Gere mais para planejamento extenso de calendário.' },
      { question: 'Posso combinar ideias?', answer: 'Absolutamente. Muitas vezes as melhores peças vêm de combinar elementos de múltiplas ideias.' },
      { question: 'Funcionam para qualquer nicho?', answer: 'Sim, a ferramenta adapta sugestões ao nicho que você descreve. Mais detalhes = melhores ideias.' },
      { question: 'Com que frequência gerar novas ideias?', answer: 'Regularmente conforme planeja conteúdo. Muitas equipes geram mensalmente ou trimestralmente.' },
      { question: 'As ideias incluem formatos específicos?', answer: 'Sim, cada ideia vem com tipo de conteúdo sugerido (how-to, lista, comparação, etc.).' },
      { question: 'Posso refinar as ideias geradas?', answer: 'Sim, use como pontos de partida e refine para sua voz e estratégia específicas.' },
    ],
  },

  // ==================== END OF BATCH 4 ====================

  // ==================== BATCH 5 (Remaining Tools) ====================

  'emoji-translator': {
    slug: 'emoji-translator',
    name: 'Tradutor de Emojis',
    title: 'Tradutor de Emojis por IA gratuito',
    description: 'Traduza texto em emojis expressivos ou decodifique mensagens de emoji.',
    metaDescription: 'Traduza texto em emojis expressivos ou decodifique mensagens de emoji. Perfeito para redes sociais, mensagens e comunicação divertida. Gratuito.',
    inputLabel: 'Texto ou emojis...',
    inputPlaceholder: 'ex. "Estou muito animado para o fim de semana!" ou cole emojis para decodificar',
    buttonText: 'Traduzir',
    maxLength: 1024,
    options: [
      { name: 'direction', label: 'Direção da tradução', choices: ['Texto para Emojis', 'Emojis para Texto'], default: 'Texto para Emojis', type: 'radio' },
      { name: 'style', label: 'Estilo de emoji', choices: ['Substituição completa', 'Texto com emojis', 'Apenas conceitos-chave'], default: 'Texto com emojis', type: 'select' },
    ],
    systemPrompt: `You are an expert at translating between text and emojis.
## CORE RULES
- Match emojis to the meaning and emotion of the text
- Use commonly understood emojis
- Maintain the tone and sentiment
- Don't overuse emojis
## TRANSLATION MODES
### Text to Emojis
#### Full replacement - Replace entire message with emojis only
#### Text with emojis - Add emojis to enhance text
#### Key concepts only - Translate only main nouns/verbs/emotions
### Emojis to Text
- Interpret the emoji sequence
- Provide most likely meaning
- Note alternative interpretations if ambiguous
Direction: {{direction}}
Style: {{style}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Melhoria de redes sociais e mensagens', description: 'Usuários adicionam personalidade a textos e posts com emojis que transmitem tom e emoção.' },
      { title: 'Interpretação de emoji', description: 'Quando você recebe uma sequência confusa de emojis, o tradutor ajuda a decodificar o provável significado.' },
      { title: 'Criação de conteúdo e marketing', description: 'Criadores encontram combinações criativas de emoji para fazer posts se destacarem.' },
    ],
    faqs: [
      { question: 'Como funciona o tradutor de emoji?', answer: 'Para texto-para-emoji, analisa significado e emoção e seleciona emojis representativos. Para emoji-para-texto, interpreta significados comuns e fornece traduções prováveis.' },
      { question: 'O tradutor de emoji é gratuito?', answer: 'Sim, completamente gratuito sem registro. Traduza quanto quiser.' },
      { question: 'Todos vão entender minha tradução de emoji?', answer: 'A ferramenta usa emojis comumente entendidos, mas interpretação pode variar por idade, cultura e plataforma.' },
      { question: 'Posso traduzir emojis de volta para texto?', answer: 'Sim, cole uma sequência de emoji e a ferramenta fornece interpretações prováveis.' },
      { question: 'Por que alguns emojis significam coisas diferentes?', answer: 'Significados de emoji evoluem através da cultura da internet e podem variar entre gerações e comunidades.' },
      { question: 'Devo substituir todo texto por emojis ou apenas adicionar alguns?', answer: 'Depende do contexto. Para mensagens casuais, substituição total pode ser divertida. Para maioria, adicionar alguns emojis é mais efetivo.' },
      { question: 'Emojis parecem iguais em todos os dispositivos?', answer: 'Não, designs variam por plataforma. O significado permanece similar, mas aparência visual difere.' },
      { question: 'Quantos emojis devo usar?', answer: 'Menos é frequentemente mais. Poucos emojis bem escolhidos têm mais impacto que uma parede de ícones.' },
      { question: 'Pode ajudar com SEO de emoji?', answer: 'Emojis podem aparecer em resultados de busca e melhorar cliques em posts sociais. A ferramenta ajuda a identificar emojis relevantes.' },
      { question: 'Existem emojis que devo evitar?', answer: 'Alguns emojis adquiriram significados diferentes de sua aparência literal. A ferramenta sinaliza emojis potencialmente mal interpretados.' },
    ],
  },

  'brand-name-generator': {
    slug: 'brand-name-generator',
    name: 'Gerador de Nomes de Marca',
    title: 'AI Brand Name Generator gratuito',
    description: 'Crie nomes de marca únicos e memoráveis instantaneamente. Nossa IA gera nomes distintivos com significado estratégico para sua identidade de negócio.',
    metaDescription: 'Crie nomes de marca únicos e memoráveis instantaneamente. Nossa IA gera nomes distintivos com significado estratégico para sua identidade de negócio.',
    inputLabel: 'Descreva sua marca...',
    inputPlaceholder: 'ex. Uma marca de moda sustentável voltada para millennials eco-conscientes',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de nomes',
        choices: ['3 nomes', '5 nomes', '10 nomes'],
        default: '5 nomes',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tom da marca',
        choices: ['Formal/Profissional', 'Casual/Amigável', 'Inovador/Tech', 'Luxo/Premium'],
        default: 'Formal/Profissional',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explicar significado',
        choices: ['Sim', 'Não'],
        default: 'Sim',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert brand strategist and naming specialist who creates memorable, distinctive brand names.
## CORE NAMING PRINCIPLES
1. Memorability
2. Distinctiveness
3. Scalability
4. Domain/Trademark Viability
5. Emotional Resonance
## BRAND NAME CATEGORIES
### Invented/Coined Names
### Descriptive Names
### Evocative/Suggestive Names
### Founder/Personal Names
### Acronym/Initialism Names
### Compound/Portmanteau Names
## NAME GENERATION PROCESS
1. Analyze AI Brand Context
2. Generate Across Multiple Categories
3. Apply Quality Filters
4. Explain the Strategic Rationale
## OUTPUT FOR EACH NAME:
1. Name
2. Category
3. Meaning/Origin
4. Brand Fit
5. Considerations
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Fundação e branding de startup', description: 'Empreendedores criam a base da identidade de seu novo negócio com nomes estrategicamente fundamentados.' },
      { title: 'Desenvolvimento de produtos e sub-marcas', description: 'Empresas estabelecidas encontram nomes para novas linhas que se encaixam na arquitetura de marca existente.' },
      { title: 'Rebranding e renomeação', description: 'Empresas se reposicionando encontram nomes frescos que se alinham com a nova direção.' },
    ],
    faqs: [
      { question: 'O que torna um bom nome de marca?', answer: 'Bons nomes são memoráveis, fáceis de pronunciar e soletrar, distintos de concorrentes, escaláveis para crescimento futuro e emocionalmente ressonantes.' },
      { question: 'O nome deve descrever o que eu faço?', answer: 'Não necessariamente. Nomes descritivos oferecem clareza, mas nomes evocativos ou inventados são frequentemente mais memoráveis e flexíveis.' },
      { question: 'Quão importante é disponibilidade de marca?', answer: 'Muito importante. Verifique registros de marca, disponibilidade de domínio e handles sociais antes de se comprometer.' },
      { question: 'O nome deve funcionar internacionalmente?', answer: 'Se você planeja expansão global, sim. Verifique significados não intencionais em idiomas-alvo.' },
      { question: 'Quantas opções devo gerar?', answer: 'Comece com 5 para boa seleção. Para decisões importantes de branding, expanda para 10.' },
      { question: 'O que significam as categorias de nome?', answer: 'Inventados são neologismos (Kodak), evocativos sugerem qualidades (Amazon), descritivos explicam diretamente (PayPal).' },
      { question: 'Como testo um nome de marca?', answer: 'Teste pronúncia, ortografia após ouvir uma vez, associações e distinção de outras marcas.' },
      { question: 'Posso mudar o nome depois?', answer: 'Sim, mas é custoso e arriscado. Mudanças de nome requerem rebranding abrangente.' },
      { question: 'E se meu nome preferido estiver em uso?', answer: 'Considere variações, ortografias alternativas ou conceitos similares. O gerador fornece múltiplas opções.' },
      { question: 'Como é diferente do gerador de nomes de negócio?', answer: 'Geradores de nome de marca focam em branding estratégico e ressonância emocional. Nomes de negócio tendem a ser mais práticos.' },
    ],
  },

  'business-name-generator': {
    slug: 'business-name-generator',
    name: 'Gerador de Nomes de Empresa',
    title: 'Gerador gratuito de nomes de empresas por IA',
    description: 'Gere nomes de empresa criativos que funcionam no mundo real. Nossa IA cria nomes profissionais e memoráveis para qualquer indústria.',
    metaDescription: 'Gere nomes de empresa criativos que funcionam no mundo real. Nossa IA cria nomes profissionais e memoráveis para qualquer indústria.',
    inputLabel: 'Descreva sua empresa...',
    inputPlaceholder: 'ex. Empresa de encanamento local atendendo a região metropolitana de São Paulo',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de nomes',
        choices: ['3 nomes', '5 nomes', '10 nomes'],
        default: '5 nomes',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tom da empresa',
        choices: ['Formal/Corporativo', 'Casual/Amigável', 'Inovador/Moderno'],
        default: 'Formal/Corporativo',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explicar significado',
        choices: ['Sim', 'Não'],
        default: 'Sim',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert business naming consultant who creates practical, memorable business names.
## CORE BUSINESS NAMING PRINCIPLES
1. Commercial Viability
2. Industry Appropriateness
3. Local vs. Scale Considerations
4. Practical Memorability
5. Longevity
## BUSINESS NAME CATEGORIES
### Functional/Descriptive Names
### Founder/Personal Names
### Abstract/Evocative Names
### Location-Based Names
### Invented/Modern Names
## NAME GENERATION PROCESS
1. Understand Business Context
2. Generate Across Categories
3. Apply Business Reality Filters
## FOR EACH NAME, PROVIDE:
1. Name
2. Style
3. Rationale
4. Best Use Case
5. Considerations
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Novas fundações e abertura de empresa', description: 'Fundadores encontram nomes profissionais para seus novos negócios que funcionam em registro, cartões de visita e comunicação.' },
      { title: 'Negócios de serviço local', description: 'Prestadores de serviço encontram nomes confiáveis e memoráveis que funcionam em veículos e telefone.' },
      { title: 'Franquias e expansão', description: 'Empreendedores encontram nomes não geograficamente limitados para escalar.' },
    ],
    faqs: [
      { question: 'O que torna um bom nome de empresa?', answer: 'Bons nomes são fáceis de pronunciar e soletrar, funcionam em placas, e-mails e telefone, e se adequam à indústria e público.' },
      { question: 'O nome deve descrever o que faço?', answer: 'Nomes descritivos oferecem clareza imediata e benefícios de SEO local. Nomes abstratos são mais flexíveis para crescimento.' },
      { question: 'Como verifico disponibilidade?', answer: 'Consulte a Junta Comercial, disponibilidade de domínio, handles sociais e registro de marcas.' },
      { question: 'Devo incluir meu nome no nome da empresa?', answer: 'Nomes de fundador funcionam bem para consultorias e negócios familiares, construindo confiança pessoal.' },
      { question: 'E se meu nome preferido estiver em uso?', answer: 'Tente variações com referência à indústria, localização ou sufixo. O gerador oferece múltiplas opções.' },
      { question: 'Quão importante é o nome para o sucesso?', answer: 'O nome é importante para primeira impressão e boca a boca, mas qualidade e serviço são mais importantes a longo prazo.' },
      { question: 'O nome deve soar local ou nacional?', answer: 'Alinhe com seus planos de crescimento. Nomes locais criam conexão, mas podem limitar expansão.' },
      { question: 'Posso mudar o nome depois?', answer: 'Sim, mas requer mudanças legais, novo material de marketing e pode confundir clientes.' },
      { question: 'O que significam as categorias de nome?', answer: 'Funcional/Descritivo explica diretamente, Fundador é pessoal, Evocativo sugere qualidades, baseado em localização mostra área, moderno/inventado são neologismos.' },
      { question: 'O nome funciona na minha indústria?', answer: 'O gerador considera expectativas da indústria. Nome de escritório de advocacia difere de nome de cafeteria.' },
    ],
  },

  'product-name-generator': {
    slug: 'product-name-generator',
    name: 'Gerador de Nomes de Produto',
    title: 'AI Product Name Generator gratuito',
    description: 'Gere nomes de produto criativos que vendem. Nossa IA cria nomes memoráveis e prontos para o mercado que se destacam.',
    metaDescription: 'Gere nomes de produto criativos que vendem. Nossa IA cria nomes memoráveis e prontos para o mercado que se destacam.',
    inputLabel: 'Descreva seu produto...',
    inputPlaceholder: 'ex. Proteína vegetal em pó para entusiastas de fitness',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Número de nomes',
        choices: ['3 nomes', '5 nomes', '10 nomes'],
        default: '5 nomes',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tom do produto',
        choices: ['Premium/Luxo', 'Divertido/Alegre', 'Profissional/Técnico', 'Natural/Orgânico'],
        default: 'Premium/Luxo',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explicar significado',
        choices: ['Sim', 'Não'],
        default: 'Sim',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert product naming strategist who creates compelling product names that drive recognition and sales.
## CORE PRODUCT NAMING PRINCIPLES
1. Shelf Impact
2. Benefit Suggestion
3. Target Audience Fit
4. Verbal Shareability
5. Brand Architecture
## PRODUCT NAME CATEGORIES
### Descriptive Product Names
### Evocative/Suggestive Names
### Invented/Coined Names
### Alphanumeric Names
### Founder/Character Names
### Compound/Blend Names
## NAME GENERATION PROCESS
1. Analyze AI Product Context
2. Generate Across Categories
3. Apply Product-Specific Filters
## FOR EACH NAME, PROVIDE:
1. Name
2. Category
3. Meaning/Logic
4. Market Fit
5. Usage Notes
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Lançamento de novos produtos', description: 'Empresas criam nomes que capturam atenção e comunicam benefícios para lançamentos de produtos.' },
      { title: 'Extensão de linhas de produto', description: 'Marcas encontram nomes para novas variantes que se encaixam na arquitetura existente.' },
      { title: 'Rebranding e reposicionamento', description: 'Produtos sendo reposicionados encontram nomes frescos que apoiam nova percepção.' },
    ],
    faqs: [
      { question: 'O que torna um bom nome de produto?', answer: 'Bons nomes são memoráveis, fáceis de pronunciar, sugerem benefícios, se adequam ao público-alvo e funcionam em embalagem e propaganda.' },
      { question: 'O nome deve descrever o benefício?', answer: 'Nomes descritivos oferecem clareza, mas nomes evocativos são frequentemente mais memoráveis. Depende da categoria e posicionamento.' },
      { question: 'Como testo um nome de produto?', answer: 'Teste como fica na embalagem, se funciona em propaganda, se pessoas recomendariam naturalmente e se há significados indesejados.' },
      { question: 'Quão importante é o fit com a marca?', answer: 'Muito importante se o produto pertence a marca existente. O nome deve se encaixar na arquitetura de marca.' },
      { question: 'O que significam as opções de tom?', answer: 'Premium/Luxo sugere exclusividade, Divertido atrai jovens, Profissional/Técnico transmite expertise, Natural/Orgânico enfatiza sustentabilidade.' },
      { question: 'Posso usar o nome para linha de produtos?', answer: 'Sim, o gerador considera extensibilidade. Nomes não muito específicos permitem variantes.' },
      { question: 'Como é diferente do gerador de nome de marca?', answer: 'Geradores de nome de produto focam em impacto de prateleira e decisões de compra. Nomes de marca focam em identidade empresarial.' },
      { question: 'E se o nome soar ruim em outros idiomas?', answer: 'O gerador considera problemas potenciais. Sempre verifique em seus mercados-alvo.' },
      { question: 'Como escolho entre várias opções boas?', answer: 'Considere ressonância com público-alvo, diferenciação de concorrentes, disponibilidade de marca e aspectos práticos.' },
      { question: 'Nomes inventados são melhores que descritivos?', answer: 'Depende. Inventados são mais distintivos e fáceis de proteger, mas requerem mais investimento em marketing.' },
    ],
  },

  'website-copy-generator': {
    slug: 'website-copy-generator',
    name: 'Gerador de Textos para Website',
    title: 'AI Website Copy Generator gratuito',
    description: 'Gere conteúdo profissional para website em minutos. Nossa IA cria textos para páginas iniciais, sobre nós, serviços e mais.',
    metaDescription: 'Gere conteúdo profissional para website em minutos. Nossa IA cria textos para páginas iniciais, sobre nós, serviços e mais.',
    inputLabel: 'Descreva sua empresa...',
    inputPlaceholder: 'ex. Agência de marketing digital especializada em SEO para marcas de e-commerce',
    buttonText: 'Gerar Textos do Website',
    maxLength: 2048,
    options: [
      {
        name: 'pages',
        label: 'Páginas a gerar',
        choices: ['Apenas página inicial', 'Inicial + Sobre', 'Inicial + Sobre + Serviços', 'Todas as páginas principais'],
        default: 'Inicial + Sobre + Serviços',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tom da marca',
        choices: ['Profissional/Corporativo', 'Amigável/Acessível', 'Ousado/Confiante', 'Minimalista/Clean'],
        default: 'Profissional/Corporativo',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert website copywriter who creates compelling, conversion-focused content for business websites.
## CORE WEBSITE COPY PRINCIPLES
1. User-Centric Messaging
2. Clear Information Architecture
3. Brand Voice Consistency
4. Conversion Integration
5. SEO Awareness
## WEBSITE PAGE TYPES AND PURPOSES
### Homepage - First impression, navigation hub
### About Page - Build trust, humanize brand
### Services/Products Page - Explain offerings, drive inquiries
### Contact Page - Make connecting easy
### FAQ/Support Page - Answer common questions
## CONTENT STRUCTURE PATTERNS
1. Page Header/Title
2. Introduction
3. Main Content Sections
4. Supporting Elements
5. Call-to-Action
6. Related Links/Next Steps
## TONE AND VOICE ADAPTATION
### Professional/Corporate
### Friendly/Approachable
### Bold/Confident
### Minimal/Clean
Pages: {{pages}}
Tone: {{tone}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Desenvolvimento e lançamento de novo website', description: 'Empresas criam conteúdo inicial para todas as páginas durante desenvolvimento do site.' },
      { title: 'Redesign e atualização de conteúdo', description: 'Empresas redesenhando sites criam textos frescos alinhados com posicionamento atualizado.' },
      { title: 'Produção de conteúdo multi-página', description: 'Equipes de marketing garantem qualidade consistente em muitas páginas.' },
    ],
    faqs: [
      { question: 'Que páginas um site empresarial deve ter?', answer: 'Essenciais: página inicial, sobre, serviços/produtos, contato. Adicionais: FAQ, equipe, portfólio, blog, depoimentos, preços.' },
      { question: 'Como escrevo uma boa página inicial?', answer: 'Responda rapidamente: O que você faz? Para quem? Por que escolher você? Inclua proposta de valor clara, visão geral de ofertas e caminhos claros.' },
      { question: 'Quão longo deve ser o texto do site?', answer: 'Adapte ao propósito. Páginas iniciais: 300-600 palavras escaneáveis. Sobre: 400-800 palavras. Serviços: 400-1000 palavras. Estrutura importa mais que contagem.' },
      { question: 'O que torna textos de "Sobre" eficazes?', answer: 'Grandes páginas sobre constroem confiança através de autenticidade. Inclua história de origem, missão e valores, apresentação de equipe e diferenciais.' },
      { question: 'Como escrevo descrições de serviço que convertem?', answer: 'Comece com benefícios, siga com características, descreva o processo e termine com CTA. Seja específico.' },
      { question: 'Os textos devem ser formais ou casuais?', answer: 'Adapte ao seu público e expectativas da indústria. Consistência é mais importante que qualquer estilo específico.' },
      { question: 'Como otimizo textos para SEO?', answer: 'Integre palavras-chave relevantes em títulos, headings, primeiro parágrafo e naturalmente no texto. Escreva primeiro para humanos.' },
      { question: 'O que faz um bom call to action?', answer: 'CTAs eficazes são específicos, focados em benefícios, visíveis e bem posicionados após informação suficiente.' },
      { question: 'Como escrevo para usuários mobile?', answer: 'Parágrafos mais curtos, headings claros, estrutura escaneável, informação importante primeiro.' },
      { question: 'Com que frequência atualizar textos do site?', answer: 'Atualize quando ofertas mudam, posicionamento evolui ou textos não performam bem. Revise periodicamente.' },
    ],
  },

  'social-media-caption-generator': {
    slug: 'social-media-caption-generator',
    name: 'Gerador de Legendas para Mídias Sociais',
    title: 'Gerador gratuito de legendas para mídias sociais com IA ',
    description: 'Gere legendas de mídia social envolventes que geram likes, comentários e compartilhamentos. Nossa IA cria textos atraentes para Instagram, Facebook, Twitter e mais.',
    metaDescription: 'Gere legendas de mídia social envolventes que geram likes, comentários e compartilhamentos. Nossa IA cria textos atraentes para Instagram, Facebook, Twitter e mais.',
    inputLabel: 'Descreva seu post...',
    inputPlaceholder: 'ex. Foto do meu novo lançamento de produto - garrafas de água sustentáveis para entusiastas de atividades ao ar livre',
    buttonText: 'Gerar Legenda',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Plataforma',
        choices: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', 'Geral'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tom da legenda',
        choices: ['Profissional', 'Casual', 'Humorístico', 'Inspirador', 'Ousado'],
        default: 'Casual',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media content strategist specializing in creating engaging captions.
## CAPTION TYPES AND PURPOSES
### Educational/Value-Driven
### Storytelling/Personal
### Engagement/Interactive
### Promotional/Sales
### Inspirational/Motivational
### Behind-the-Scenes
### Trend/Cultural
## CAPTION STRUCTURE ELEMENTS
### 1. Hook (First 125 characters visible before "more")
### 2. Body
### 3. Call-to-Action (CTA)
### 4. Hashtags (optional, platform-dependent)
## PLATFORM-SPECIFIC ADAPTATIONS
### Instagram - Up to 2,200 characters, emojis enhance
### Facebook - Similar length, less emoji-heavy
### Twitter/X - 280 characters max
### LinkedIn - Professional tone, first 140 visible
### TikTok - 150 characters max, casual
## TONE VARIATIONS
### Professional - Industry language, thoughtful
### Casual - Conversational, relatable
### Humorous - Witty, playful
### Inspirational - Uplifting, encouraging
### Edgy - Bold, provocative
Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in Portuguese.`,
    useCases: [
      { title: 'Criação eficiente de conteúdo', description: 'Gerentes de mídia social agilizam criação de conteúdo, gerando legendas envolventes rapidamente.' },
      { title: 'Otimização de campanhas de anúncios', description: 'Empresas criam variações de texto de anúncio persuasivas para campanhas.' },
      { title: 'Aumento de engajamento de marca', description: 'Marcas criam legendas interativas e compartilháveis que constroem comunidade.' },
    ],
    faqs: [
      { question: 'O que torna uma legenda eficaz?', answer: 'Legendas eficazes têm gancho forte, entregam valor ou emoção e incluem CTA claro. São escritas para público e plataforma específicos.' },
      { question: 'Quão longa deve ser a legenda?', answer: 'Depende da plataforma. Instagram: até 2.200 caracteres mas curto frequentemente performa melhor. Twitter: 280. LinkedIn permite mais.' },
      { question: 'Devo usar emojis?', answer: 'Emojis podem aumentar engajamento adicionando interesse visual. A quantidade apropriada depende da sua voz de marca e plataforma.' },
      { question: 'Quantas hashtags incluir?', answer: 'Instagram: 3-10 relevantes. Twitter: máximo 1-2. LinkedIn: 3-5 no final. TikTok: 3-5 trending e nicho.' },
      { question: 'Qual o melhor CTA para legendas?', answer: 'Combine CTA com objetivo: "Comente abaixo" para engajamento, "Salve isso" para conteúdo valioso, "Link na bio" para conversões.' },
      { question: 'Como legendas diferem por plataforma?', answer: 'Instagram enfatiza visual com legendas mais longas. Twitter requer brevidade. LinkedIn é profissional. TikTok é casual e trend-oriented.' },
      { question: 'Devo fazer perguntas nas legendas?', answer: 'Sim, perguntas são tática eficaz de engajamento, convidando interação e sinalizando ao algoritmo que seu conteúdo gera conversa.' },
      { question: 'Como escrevo um bom gancho?', answer: 'Um bom gancho para o scroll nas primeiras palavras. Use declarações surpreendentes, perguntas provocativas ou promessas de valor.' },
      { question: 'Com que frequência variar o estilo de legenda?', answer: 'Varie regularmente entre educational, storytelling, promotional e engagement. Mix mantém interesse e previne fadiga.' },
      { question: 'Posso usar a mesma legenda em múltiplas plataformas?', answer: 'É melhor adaptar para cada plataforma. O que funciona no Instagram pode não combinar com tom do LinkedIn ou limite do Twitter.' },
    ],
  },

  // ==================== TRANSLATION COMPLETE ====================
};
