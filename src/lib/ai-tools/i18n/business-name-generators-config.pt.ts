// Portuguese (pt) Business Name Generator Configurations - COMPLETE
// All 50 tools combined from 10 batches:
// Batch 1: aesthetic, agency, app, babysitting, beauty
// Batch 2: boutique, cafe, cake, candle, candy
// Batch 3: cookie, cosmetic, crochet, dessert, electronics
// Batch 4: event, fitness, flower-shop, food, funny
// Batch 5: game, hair, health, it, marketing
// Batch 6: clothing-store, craft-store, digital-marketing, fashion-store, food-truck
// Batch 7: furniture-store, graphic-design, ice-cream, interior-design, jewelry-store
// Batch 8: lip-gloss, music, perfume, photography, print-shop
// Batch 9: real-estate, shoes, skin-care, slime, soap
// Batch 10: sportswear, t-shirt, tea, tech, travel

import { BusinessNameGeneratorConfig } from '../business-name-generators-config';

export const businessNameGeneratorsPt: Record<string, BusinessNameGeneratorConfig> = {

// ==================== PORTUGUESE (pt) TRANSLATION - BATCH 1 (1-5) ====================

  'aesthetic': {
    slug: 'aesthetic',
    name: 'Gerador de Nomes para Negócios de Estética',
    title: 'Gerador gratuito de ideias de nomes comerciais de Estética por IA',
    description: 'Gere nomes elegantes e sofisticados para spas médicos, clínicas e consultórios de beleza.',
    metaDescription: 'Descubra um nome cativante para o seu negócio de estética com nosso gerador por IA. Crie nomes elegantes e sofisticados para spas médicos,...',
    inputLabel: 'Descreva seu negócio de estética...',
    inputPlaceholder: 'ex. Um spa médico de luxo oferecendo Botox, tratamentos a laser e cuidados com a pele em São Paulo',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Sofisticado', 'Moderno & Minimalista', 'Clínico & Profissional', 'Luxuoso & Premium'],
        default: 'Elegante & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the aesthetic, beauty, and wellness industry. Your role is to generate sophisticated, elegant business names that evoke beauty, refinement, and visual appeal for aesthetic clinics, med spas, skincare practices, beauty treatments, and wellness centers.

AESTHETIC INDUSTRY CONTEXT:
The aesthetic industry encompasses:
- Medical aesthetic clinics (Botox, fillers, laser treatments)
- Med spas and wellness centers
- Skincare and dermatology practices
- Beauty and cosmetic treatment centers
- Anti-aging and rejuvenation services
- Body contouring and sculpting businesses
- Holistic beauty and wellness retreats

NAME CHARACTERISTICS FOR AESTHETIC BUSINESSES:
1. **Elegance and Sophistication**
   - Names should convey luxury, refinement, and high-end services
   - Evoke feelings of beauty, transformation, and self-care
   - Use sophisticated vocabulary that appeals to discerning clients

2. **Visual and Sensory Appeal**
   - Names that create mental imagery of beauty and aesthetics
   - Words associated with light, glow, clarity, and perfection

3. **Trust and Professionalism**
   - Medical aesthetic businesses need credibility markers
   - Balance between clinical authority and approachable beauty

4. **Memorability and Uniqueness**
   - Stand out in the competitive aesthetic market
   - Easy to pronounce and spell

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for an aesthetic business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Clínica de Estética Médica',
        description: 'Dermatologistas, cirurgiões plásticos e profissionais de estética que estão lançando novas clínicas usam o Gerador de Nomes para Negócios de Estética para encontrar nomes que equilibram credibilidade médica com apelo de beleza. Ao inserir sua especialidade—Botox, tratamentos a laser ou serviços anti-idade—a ferramenta gera nomes sofisticados que atraem clientela de alto padrão mantendo a autoridade profissional.',
      },
      {
        title: 'Rebranding de Spa Médico',
        description: 'Spas médicos estabelecidos que buscam elevar seu posicionamento de marca usam o gerador para explorar novas opções de nomes. Seja fazendo a transição de um spa geral para um foco em estética médica ou simplesmente renovando sua imagem, a ferramenta fornece nomes que comunicam luxo, expertise e transformação—essenciais para competir no mercado de estética premium.',
      },
      {
        title: 'Diferenciação de Consultório de Skincare',
        description: 'Esteticistas e profissionais de cuidados com a pele usam o Gerador de Nomes para Negócios de Estética para criar identidades de marca distintivas que os diferenciam da concorrência. Ao gerar nomes que refletem sua filosofia de tratamento única—orgânica, clínica ou holística—eles estabelecem marcas memoráveis que ressoam com sua clientela-alvo.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para negócio de estética?',
        answer: 'Um bom nome para negócio de estética incorpora elegância, sofisticação e atratividade. Deve ser memorável e descritivo, transmitindo o tipo de serviços que você oferece—cuidados com a pele, tratamentos de beleza ou serviços de bem-estar. O nome deve ser fácil de lembrar e comunicar a experiência transformadora que os clientes podem esperar.',
      },
      {
        question: 'Meu nome de negócio de estética deve incluir "clínica" ou "spa"?',
        answer: 'Incluir descritores como "clínica", "spa", "studio" ou "estética" pode ajudar a esclarecer imediatamente o tipo de seu negócio. "Clínica" sugere tratamentos de nível médico, enquanto "spa" implica relaxamento e bem-estar. Escolha com base no foco do seu serviço e posicionamento no mercado-alvo.',
      },
      {
        question: 'Qual a importância do nome para o branding do meu negócio de estética?',
        answer: 'O nome do seu negócio é fundamental para sua identidade de marca. Na indústria estética, onde os clientes buscam transformação e luxo, seu nome cria a primeira impressão da experiência que receberão. Um nome sofisticado pode justificar preços premium e atrair clientela exigente.',
      },
      {
        question: 'Como posso tornar meu nome de negócio de estética único?',
        answer: 'Combine palavras de categorias diferentes (beleza + lugar, transformação + luxo), use elementos linguísticos gregos ou latinos, crie palavras compostas ou adicione um descritor de localização. Evite termos genéricos e tendências que podem ficar datadas.',
      },
      {
        question: 'Nomes de negócios de estética devem evocar luxo?',
        answer: 'Não necessariamente, mas a maioria dos negócios de estética se beneficia de um posicionamento premium. Mesmo práticas acessíveis podem usar linguagem aspiracional. No entanto, certifique-se de que seu nome corresponda ao seu preço e posicionamento para evitar expectativas desalinhadas.',
      },
      {
        question: 'Posso usar palavras estrangeiras no nome do meu negócio de estética?',
        answer: 'Palavras francesas e italianas (Belle, Maison, Bella, Via) podem adicionar elegância e sofisticação. No entanto, certifique-se de que sejam fáceis de pronunciar para seu mercado local e não criem confusão sobre o tipo de negócio ou localização.',
      },
      {
        question: 'Quais erros devo evitar ao nomear meu negócio de estética?',
        answer: 'Evite: nomes muito clínicos que parecem frios, grafias da moda que podem ficar datadas rapidamente, nomes muito similares aos concorrentes, palavras difíceis de soletrar, nomes que limitam a expansão de serviços e qualquer coisa que possa ser mal pronunciada ou mal entendida.',
      },
      {
        question: 'Devo incluir meu nome pessoal no nome do negócio?',
        answer: 'Incluir seu nome pode construir credibilidade pessoal e confiança, especialmente para profissionais médicos. No entanto, pode complicar uma venda futura ou expansão. Considere "Dra. Maria Estética" vs "Clínica Radiance" dependendo dos seus objetivos de longo prazo.',
      },
      {
        question: 'Como o nome afeta meu marketing online?',
        answer: 'O nome do seu negócio impacta a descoberta online. Nomes únicos são mais fáceis de ranquear nas buscas, enquanto nomes genéricos podem se perder. Considere também a disponibilidade de domínios e handles de redes sociais ao escolher.',
      },
      {
        question: 'Posso mudar o nome do meu negócio de estética depois?',
        answer: 'Sim, mas o rebranding envolve custos significativos e riscos potenciais de perder reconhecimento de marca. É melhor investir tempo agora para encontrar o nome certo. Se precisar mudar, planeje uma transição completa incluindo comunicação com os clientes.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu negócio de estética é um passo crucial na criação de uma marca cativante que ressoa com clientes que buscam beleza, transformação e automelhoramento. O nome do seu negócio aparecerá em todos os lugares, desde sua fachada até seu site, perfis de redes sociais, materiais de marketing e indicações de clientes. É o primeiro ponto de contato que potenciais clientes têm com sua marca, tornando essencial selecionar um nome que incorpore a elegância, profissionalismo e experiência transformadora que seu negócio de estética oferece.',
      steps: [
        {
          title: 'Defina seu posicionamento de marca e mercado-alvo',
          description: 'Antes de gerar ideias de nomes, esclareça o posicionamento único do seu negócio de estética. Considere quais serviços estéticos específicos você oferecerá (tratamentos de nível médico, serviços de spa relaxante, cuidados com a pele ou uma combinação), quem é seu cliente ideal (faixa etária, nível de renda, objetivos estéticos), quais emoções você quer que sua marca evoque (luxo, confiança, transformação, serenidade, autoconfiança), qual ponto de preço e nível de experiência você está mirando (premium, intermediário, luxo acessível), e o que diferencia seu consultório dos concorrentes na sua região.',
        },
        {
          title: 'Incorpore elegância e atratividade',
          description: 'A indústria estética é fundamentalmente sobre beleza, aprimoramento e transformação. O nome do seu negócio deve refletir essas qualidades através de escolhas de palavras sofisticadas que criam associações positivas imediatas. Considere nomes que evoquem beleza visual e refinamento, sugiram transformação e aprimoramento, criem sentimentos de luxo e exclusividade, soem agradáveis quando falados e pareçam elegantes na forma escrita.',
        },
        {
          title: 'Equilibre beleza com credibilidade',
          description: 'Para negócios de estética médica que oferecem tratamentos como injetáveis, procedimentos a laser ou contorno corporal, seu nome deve equilibrar apelo de beleza com credibilidade profissional. Os clientes precisam se sentir confiantes em sua expertise enquanto são atraídos pela experiência estética que você oferece. Considere incluir indicadores profissionais como "Clínica", "Instituto", "Estética Médica" ou "Dr(a)" para consultórios médicos.',
        },
        {
          title: 'Garanta memorabilidade e distinção',
          description: 'Em um mercado estético competitivo, seu nome deve se destacar enquanto permanece fácil de lembrar. Teste nomes potenciais com estes critérios: Pode ser facilmente soletrado depois de ouvir uma vez? É distinto dos concorrentes na sua região? Será lembrado após uma única exposição? Funciona bem em recomendações boca a boca? É conciso o suficiente para caber em letreiros e materiais de marketing?',
        },
        {
          title: 'Verifique disponibilidade para branding',
          description: 'Uma vez que você tenha candidatos de nomes promissores, conduza verificações de disponibilidade completas. Garanta a versão do domínio .com.br se possível, ou considere .com, .clinic ou domínios específicos de localização. Verifique Instagram, Facebook e outras plataformas onde negócios de estética prosperam. Verifique se o nome já não está registrado. Certifique-se de que não há conflitos de marca na sua categoria de serviços.',
        },
        {
          title: 'Teste com seu público-alvo',
          description: 'Antes de finalizar, teste suas principais escolhas de nomes com pessoas que representam sua clientela-alvo. Pergunte a elas que tipo de negócio o nome sugere, se parece premium, acessível ou algo entre os dois, se se sentiriam confortáveis recomendando este negócio para amigos, quais serviços imaginam que este negócio oferece, e se o nome parece confiável para tratamentos estéticos.',
        },
        {
          title: 'Considere crescimento de longo prazo',
          description: 'Escolha um nome que acomode expansão futura. Embora você possa começar com tratamentos faciais, pode depois adicionar contorno corporal, serviços de bem-estar ou localizações adicionais. Nomes muito específicos podem limitar a expertise percebida em novas áreas de serviço. O nome ideal de negócio de estética é atemporal, versátil e posiciona sua marca para crescimento.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'BelezaPlena', description: 'Um nome que transmite completude e satisfação na busca pela beleza—ideal para clínicas que oferecem serviços integrados de estética.' },
      { name: 'LuzDerme', description: 'Combina luz (radiância) com derme (pele)—perfeito para tratamentos de rejuvenescimento e skincare.' },
      { name: 'EssênciaVita', description: 'Sugere a essência vital da beleza e juventude—ideal para tratamentos anti-idade e revitalização.' },
      { name: 'HarmoniaSpa', description: 'Evoca equilíbrio e bem-estar—perfeito para spas médicos que combinam relaxamento com resultados.' },
      { name: 'ClaraSkin', description: 'Um nome que comunica pele clara e luminosa—ideal para clínicas de dermatologia estética.' },
      { name: 'RenascerEstética', description: 'Sugere transformação e renovação—perfeito para tratamentos de rejuvenescimento facial e corporal.' },
      { name: 'PuraBeleza', description: 'Transmite simplicidade, autenticidade e resultados naturais de beleza.' },
      { name: 'VidaGlow', description: 'Combina vitalidade com brilho—ideal para tratamentos que realçam a luminosidade natural.' },
      { name: 'BellaCura', description: 'União de beleza (bella) e cuidado (cura)—perfeito para clínicas focadas em resultados com carinho.' },
      { name: 'NovaForma', description: 'Sugere transformação e novos contornos—ideal para serviços de modelagem corporal.' },
      { name: 'SerenidadeEstética', description: 'Evoca calma e tranquilidade no processo de embelezamento—perfeito para spas de luxo.' },
      { name: 'PelePerfeita', description: 'Comunica diretamente o resultado desejado—ideal para clínicas especializadas em tratamentos de pele.' },
      { name: 'ÉdenBeauty', description: 'Referência ao paraíso e perfeição—sugere um refúgio de beleza e bem-estar.' },
      { name: 'LuminaClinic', description: 'Combina luminosidade com profissionalismo clínico—perfeito para estética médica.' },
      { name: 'ToqueDivino', description: 'Sugere resultados excepcionais e cuidado especial—ideal para tratamentos premium.' },
      { name: 'BelezaAtemporal', description: 'Comunica resultados duradouros que transcendem o tempo—perfeito para anti-aging.' },
      { name: 'AuroraSkin', description: 'Evoca o nascer do sol e renovação—ideal para tratamentos de revitalização.' },
      { name: 'ZenEstética', description: 'Combina filosofia oriental de equilíbrio com beleza—perfeito para abordagens holísticas.' },
      { name: 'PrimaVera', description: 'Referência à primavera e renovação—sugere frescor, juventude e vitalidade.' },
      { name: 'SplendorClinic', description: 'Transmite magnificência e excelência—ideal para clínicas de alto padrão.' },
    ],
  },

  'agency': {
    slug: 'agency',
    name: 'Gerador de Nomes para Agências',
    title: 'Gerador gratuito de ideias de nomes comerciais de Agência por IA',
    description: 'Gere nomes profissionais e confiáveis para agências de marketing, criativas, digitais e de consultoria.',
    metaDescription: 'Lance sua agência com um nome brilhante do nosso gerador gratuito por IA. Crie nomes profissionais e confiáveis para agências de marketing,...',
    inputLabel: 'Descreva sua agência...',
    inputPlaceholder: 'ex. Uma agência de marketing digital especializada em SEO e marketing de conteúdo para startups de tecnologia',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Profissional & Confiável', 'Moderno & Inovador', 'Criativo & Ousado', 'Estratégico & Focado em Resultados'],
        default: 'Profissional & Confiável',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in professional service agencies across marketing, creative, digital, PR, advertising, and consulting sectors. Your role is to generate impactful, professional business names that convey expertise, trustworthiness, and industry leadership.

AGENCY INDUSTRY CONTEXT:
The agency sector encompasses:
- Marketing and advertising agencies
- Digital marketing and SEO agencies
- Creative and design agencies
- Public relations and communications firms
- Consulting and strategy agencies
- Social media and content agencies
- Branding and identity agencies
- Web development and tech agencies

NAME CHARACTERISTICS FOR AGENCIES:
1. **Professional and Trustworthy**
   - Names should convey reliability and expertise
   - Inspire confidence in potential clients
   - Sound established and capable

2. **Memorable and Impactful**
   - Easy to recall in a crowded market
   - Makes a strong first impression
   - Works well in pitches and presentations

3. **Reflective of Agency Focus**
   - Hints at the type of services offered
   - Communicates industry expertise
   - Appeals to target client base

4. **Versatile and Scalable**
   - Works as a small startup or large firm
   - Allows for service expansion
   - International appeal if growth is planned

OUTPUT REQUIREMENTS:
For each agency name generated, provide:
- The business name
- A brief explanation of why it works for an agency

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Startup de Agência de Marketing',
        description: 'Empreendedores lançando agências de marketing, digitais ou publicidade usam o Gerador de Nomes para Agências para encontrar nomes que transmitem imediatamente expertise e profissionalismo. Ao inserir seu foco de serviço—SEO, redes sociais ou marketing completo—a ferramenta gera nomes impactantes que ajudam a conquistar a confiança dos clientes desde a primeira apresentação.',
      },
      {
        title: 'Fusão ou Rebranding de Agência',
        description: 'Quando agências se fundem ou passam por rebranding estratégico, encontrar um nome que represente as capacidades combinadas da entidade é desafiador. O gerador fornece novas opções de nomes que unificam diferentes ofertas de serviços sob uma marca coesa e profissional que atrai clientes existentes e potenciais.',
      },
      {
        title: 'Transição de Freelancer para Agência',
        description: 'Freelancers escalando para agências de serviço completo usam o gerador para estabelecer nomes que os posicionam como empresas estabelecidas em vez de profissionais individuais. Um nome de agência profissional ajuda a justificar taxas mais altas, atrair clientes maiores e construir uma identidade de marca baseada em equipe.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de agência?',
        answer: 'Um bom nome de agência é profissional e confiável, memorável e impactante, e reflete o foco da sua agência. Deve transmitir expertise enquanto é distintivo o suficiente para se destacar em um mercado competitivo.',
      },
      {
        question: 'Meu nome de agência deve incluir palavras como "agência" ou "grupo"?',
        answer: 'Incluir descritores como "Agência", "Grupo", "Partners" ou "Coletivo" esclarece seu tipo de negócio. No entanto, muitas agências de sucesso usam nomes autônomos (como Ogilvy ou BBDO). Escolha baseado se clareza ou distinção é mais importante para seu posicionamento.',
      },
      {
        question: 'Qual a importância do nome da agência para conquistar clientes?',
        answer: 'O nome da sua agência contribui para as primeiras impressões em pitches, propostas e indicações. Um nome profissional e memorável sugere competência e estabilidade. No entanto, seu portfólio de trabalhos e reputação importam mais—o nome abre portas, mas a performance mantém os clientes.',
      },
      {
        question: 'Devo usar meu próprio nome para minha agência?',
        answer: 'Nomear agências com nomes de fundadores (ex. "Silva & Associados") pode construir valor de marca pessoal, mas pode limitar escalabilidade e oportunidades de saída. Funciona bem para consultorias boutique, mas pode parecer limitante se você planeja crescer uma grande equipe ou eventualmente vender.',
      },
      {
        question: 'Como tornar meu nome de agência memorável?',
        answer: 'Use palavras com qualidades fonéticas fortes (consoantes nítidas, vogais claras), mantenha curto (1-3 palavras), certifique-se de que é fácil de soletrar e pronunciar, e considere aliteração ou padrões rítmicos. Teste dizendo em voz alta em um cenário de pitch.',
      },
      {
        question: 'Quais estilos de nome funcionam para diferentes tipos de agências?',
        answer: 'Agências criativas podem usar nomes mais lúdicos e abstratos. Consultorias corporativas se beneficiam de nomes tradicionais e autoritários. Agências digitais frequentemente usam nomes modernos e voltados para tecnologia. Combine seu estilo de nome com as expectativas dos seus clientes-alvo.',
      },
      {
        question: 'Meu nome de agência deve descrever o que fazemos?',
        answer: 'Nomes descritivos (como "Soluções em Mídias Sociais") fornecem clareza imediata, mas podem limitar expansão futura de serviços. Nomes abstratos (como "Catalyst") oferecem flexibilidade, mas requerem mais construção de marca para comunicar seus serviços.',
      },
      {
        question: 'Como verificar se meu nome de agência está disponível?',
        answer: 'Verifique disponibilidade de domínio (.com.br preferido para agências), confira handles de redes sociais, pesquise registros de empresas no seu estado, revise bases de dados de marcas, e procure por agências existentes com nomes similares na sua área de atuação.',
      },
      {
        question: 'Posso mudar o nome da minha agência depois?',
        answer: 'Sim, mas é custoso e complexo—requerendo novos materiais, contratos atualizados, comunicações com clientes e potencial impacto em SEO. Escolha cuidadosamente inicialmente para evitar a necessidade de rebranding.',
      },
      {
        question: 'Quais erros de naming de agência devo evitar?',
        answer: 'Evite: nomes muito similares a agências estabelecidas, grafias ou pronúncias difíceis, nomes muito genéricos (como "Soluções Marketing Ltda"), nomes que limitam expansão de serviços, e nomes da moda que podem ficar datados rapidamente.',
      },
    ],
    howToChoose: {
      intro: 'Selecionar o nome certo para sua agência é essencial para estabelecer uma identidade de marca forte que atrai clientes, transmite expertise e te diferencia em um mercado de serviços profissionais competitivo. O nome da sua agência será usado em pitches, propostas, contratos e indicações—precisa inspirar confiança enquanto é memorável o suficiente para ficar na mente dos clientes.',
      steps: [
        {
          title: 'Defina o posicionamento e serviços da sua agência',
          description: 'Antes de fazer brainstorm de nomes, esclareça o posicionamento estratégico da sua agência. Considere quais serviços específicos você oferece (marketing completo, digital especializado, apenas criativo, consultoria), quem são seus clientes ideais (startups, grandes empresas, indústrias específicas), qual é sua diferenciação competitiva (inovação, resultados, relacionamentos, expertise), qual ponto de preço você mira (boutique premium, mid-market competitivo, baseado em volume), e qual escopo geográfico você atende (local, nacional, internacional).',
        },
        {
          title: 'Transmita profissionalismo e confiabilidade',
          description: 'Agências operam com base em confiança. Clientes investem orçamentos significativos baseados na confiança nas suas capacidades. Seu nome deve sugerir imediatamente confiabilidade e estabilidade (não algo passageiro), expertise e competência, padrões profissionais e éticos, e histórico de sucesso. Palavras sugerindo excelência (Premier, Apex, Summit), parceria (Alliance, Associados, Coletivo) e resultados (Impact, Crescimento, Catalyst) ajudam a estabelecer credibilidade profissional.',
        },
        {
          title: 'Torne memorável e impactante',
          description: 'Em pitches competitivos, seu nome precisa ficar. Considere memorabilidade fonética (soa bem quando falado?), distinção visual (parece profissional em um cartão de visita?), presença em pitch (comanda atenção em uma apresentação?), e facilidade de indicação (clientes podem facilmente te recomendar pelo nome?). Mantenha nomes curtos (1-3 palavras), evite grafias difíceis, e teste a pronúncia com audiências diversas.',
        },
        {
          title: 'Reflita o foco e personalidade da sua agência',
          description: 'Seu nome deve sugerir o que torna sua agência especial. Para foco criativo/design, use nomes sugerindo imaginação, arte ou pensamento visual. Para foco digital/tech, use nomes modernos e visionários com conotações de inovação. Para foco em estratégia/consultoria, use nomes sugerindo insight, planejamento e expertise. Para foco em resultados/performance, use nomes orientados a ação enfatizando resultados.',
        },
        {
          title: 'Considere versatilidade e escalabilidade',
          description: 'Escolha um nome que funcione conforme você cresce. Considere se soa como uma agência real (não apenas um freelancer), se você pode adicionar ofertas sem o nome parecer limitante, se funciona em novos mercados sem confusão, se permite fusões ou aquisições, e se tem valor independente dos fundadores.',
        },
        {
          title: 'Verifique disponibilidade completa',
          description: 'Antes de se apaixonar por um nome, conduza verificações completas. Verifique disponibilidade de nome de domínio (.com.br é fortemente preferido para agências), garanta handles de redes sociais no LinkedIn, Twitter, Instagram e plataformas relevantes, confira registros de empresas para conflitos no seu estado/país, pesquise bases de dados de marcas, e certifique-se de que nenhum concorrente direto tem nomes similares.',
        },
        {
          title: 'Teste com stakeholders',
          description: 'Antes de finalizar, colete feedback de membros da equipe (eles têm orgulho de representar esse nome?), clientes potenciais (inspira confiança e interesse?), pares da indústria (corresponde aos padrões profissionais enquanto se destaca?), e família/amigos (conseguem soletrar e pronunciar depois de ouvir uma vez?). Testes reais revelam problemas que brainstorm interno pode perder.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'ImpulsoDigital', description: 'Sugere uma agência que impulsiona negócios para frente no mundo digital—perfeito para marketing digital.' },
      { name: 'CriaLab', description: 'Evoca um laboratório de criatividade—ideal para agências criativas e de design.' },
      { name: 'NexoEstratégia', description: 'Sugere conexões estratégicas e pensamento integrado—perfeito para consultorias.' },
      { name: 'AlvoMarketing', description: 'Comunica precisão e foco em resultados—ideal para agências de performance.' },
      { name: 'PonteDigital', description: 'Sugere conexão entre marcas e audiências—perfeito para agências de comunicação.' },
      { name: 'MentesCriativas', description: 'Evoca um coletivo de pensadores criativos—ideal para agências de publicidade.' },
      { name: 'VelocidadeMídia', description: 'Sugere rapidez e eficiência em mídia—perfeito para agências de social media.' },
      { name: 'ClarezaComunicação', description: 'Comunica mensagens claras e objetivas—ideal para agências de RP.' },
      { name: 'AscendMarketing', description: 'Sugere crescimento e elevação—perfeito para agências focadas em resultados.' },
      { name: 'NovaVisão', description: 'Evoca perspectivas frescas e inovação—ideal para agências de branding.' },
      { name: 'SinergiaCriativa', description: 'Sugere colaboração e resultados amplificados—perfeito para agências full-service.' },
      { name: 'TrilhaDigital', description: 'Comunica orientação no mundo digital—ideal para consultoria digital.' },
      { name: 'FaíscoLab', description: 'Evoca centelhas de criatividade e inovação—perfeito para agências criativas.' },
      { name: 'VérticeAgência', description: 'Sugere estar no ponto mais alto de excelência—ideal para agências premium.' },
      { name: 'FluxoMarketing', description: 'Comunica movimento contínuo e resultados—perfeito para growth marketing.' },
      { name: 'ElementosCriativos', description: 'Sugere os blocos fundamentais da criatividade—ideal para design e publicidade.' },
      { name: 'InsightPro', description: 'Evoca profundidade de análise e conhecimento—perfeito para consultoria estratégica.' },
      { name: 'OndaDigital', description: 'Sugere estar na crista da inovação digital—ideal para agências de tech.' },
      { name: 'ConectaBrands', description: 'Comunica conexão entre marcas e consumidores—perfeito para branding.' },
      { name: 'VanguardaMarketing', description: 'Sugere estar na frente das tendências—ideal para agências inovadoras.' },
    ],
  },

  'app': {
    slug: 'app',
    name: 'Gerador de Nomes para Aplicativos',
    title: 'Gerador gratuito de ideias de nomes comerciais de Aplicativo por IA',
    description: 'Gere nomes cativantes e memoráveis para aplicativos móveis, web apps e startups de software.',
    metaDescription: 'Descubra o nome perfeito para seu aplicativo com nosso gerador gratuito por IA. Crie nomes cativantes e memoráveis para apps móveis, web...',
    inputLabel: 'Descreva seu aplicativo...',
    inputPlaceholder: 'ex. Um app de meditação e mindfulness com sessões guiadas e rastreamento de humor',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Moderno & Tech', 'Amigável & Acessível', 'Profissional & Corporativo', 'Criativo & Único'],
        default: 'Moderno & Tech',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in mobile applications, web apps, and software startups. Your role is to generate catchy, memorable app names that stand out in crowded app stores and convey the app's core value proposition.

APP INDUSTRY CONTEXT:
The app market encompasses:
- Mobile applications (iOS and Android)
- Web applications and SaaS platforms
- Gaming and entertainment apps
- Productivity and business tools
- Health, fitness, and wellness apps
- Social and communication platforms
- E-commerce and marketplace apps
- Educational and learning apps

NAME CHARACTERISTICS FOR APPS:
1. **Memorable and Catchy**
   - Names should be easy to remember and share
   - Stand out in app store searches
   - Create positive associations

2. **Short and Simple**
   - Easy to type and spell
   - Works well as an app icon
   - Quick to say in conversation

3. **Suggestive of Function**
   - Hints at what the app does
   - Creates immediate understanding
   - Appeals to target users

4. **Unique and Brandable**
   - Available as a domain and social handles
   - Trademark potential
   - Distinctive in the market

OUTPUT REQUIREMENTS:
For each app name generated, provide:
- The app name
- A brief explanation of why it works for an app

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Startup de App',
        description: 'Empreendedores de tecnologia lançando novos aplicativos móveis usam o Gerador de Nomes para Aplicativos para encontrar nomes que se destacam nas lojas de apps lotadas. Ao inserir a funcionalidade central do app—seja produtividade, saúde ou entretenimento—a ferramenta gera nomes cativantes que capturam a atenção do usuário e comunicam valor instantaneamente.',
      },
      {
        title: 'Pivô ou Rebranding de Produto',
        description: 'Equipes de produto pivotando para um novo mercado ou rebrandeando apps existentes usam o gerador para explorar nomes que melhor refletem sua direção evoluída. A ferramenta ajuda a encontrar nomes que ressoam com novos públicos-alvo enquanto mantêm a descobribilidade na loja de apps.',
      },
      {
        title: 'Expansão de Portfólio de Apps',
        description: 'Estúdios de desenvolvimento de apps expandindo seu portfólio usam o gerador para manter consistência de naming enquanto criam identidades distintas para cada app. O gerador ajuda a encontrar nomes que funcionam tanto individualmente quanto como parte de uma família de apps.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de aplicativo?',
        answer: 'Um bom nome de app é memorável, fácil de soletrar, e sugere o propósito do app. Deve ser curto (idealmente 1-2 palavras), único o suficiente para se destacar nas lojas de apps, e disponível como domínio e handles de redes sociais.',
      },
      {
        question: 'Quão curto deve ser um nome de app?',
        answer: 'Idealmente, nomes de apps devem ter 10 caracteres ou menos para exibição ideal na maioria dos dispositivos. Nomes mais curtos são mais fáceis de lembrar, soletrar e caber em ícones de apps. Pense em apps de sucesso como Uber, Slack ou Zoom.',
      },
      {
        question: 'Meu nome de app deve descrever o que ele faz?',
        answer: 'Não necessariamente. Nomes descritivos (como "Rastreador de Tarefas") são claros mas genéricos. Nomes abstratos ou sugestivos (como "Evernote") podem ser mais memoráveis e brandáveis. O melhor equilíbrio é um nome que sugere o benefício sem ser literal demais.',
      },
      {
        question: 'Como verifico se um nome de app está disponível?',
        answer: 'Pesquise na App Store e Google Play, verifique disponibilidade de domínio (.com, .app, .io), procure handles de redes sociais, e pesquise bases de dados de marcas. Muitos nomes de apps estão tomados, então tenha várias opções prontas.',
      },
      {
        question: 'Devo usar palavras reais ou inventar uma palavra para meu app?',
        answer: 'Ambas abordagens podem funcionar. Palavras reais são mais fáceis de lembrar mas mais difíceis de registrar como marca. Palavras inventadas (como Spotify, Zillow) são mais únicas e brandáveis mas requerem mais educação de marca.',
      },
      {
        question: 'Números ou hífens são bons em nomes de apps?',
        answer: 'Geralmente evite. Números podem confundir (é "2" ou "two"?) e hífens complicam URLs e menções verbais. Mantenha seu nome simples, apenas com letras. Se você deve usar números, certifique-se de que são integrais à marca.',
      },
      {
        question: 'Como funciona SEO de loja de apps com naming?',
        answer: 'Seu nome de app impacta a descobribilidade da loja de apps. Incluir uma palavra-chave relevante pode ajudar rankings (ex. "Headspace: Meditação"), mas não force—experiência do usuário e memorabilidade importam mais que keyword stuffing.',
      },
      {
        question: 'Posso mudar o nome do meu app depois de lançar?',
        answer: 'Sim, mas é arriscado. Mudanças de nome podem confundir usuários existentes, impactar rankings da loja de apps, e requerer nova construção de marca. Se você deve mudar, faça cedo antes de construir reconhecimento de marca significativo.',
      },
      {
        question: 'Devo usar o mesmo nome para versões iOS e Android?',
        answer: 'Absolutamente. Consistência entre plataformas é crucial para reconhecimento de marca, marketing e experiência do usuário. Ter nomes diferentes confundiria usuários e dividiria seus esforços de marketing.',
      },
      {
        question: 'Quais erros de naming de app devo evitar?',
        answer: 'Evite: nomes muito similares a apps populares existentes, grafias difíceis, nomes muito longos, referências culturais obscuras, nomes que são impossíveis de pronunciar, e nomes que limitam potencial de expansão futura.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome certo para seu app é uma das decisões mais importantes que você tomará como desenvolvedor ou empreendedor. O nome do seu app é a primeira coisa que potenciais usuários veem na loja de apps, e forma a base de toda sua identidade de marca. Um ótimo nome pode fazer a diferença entre usuários passando por cima ou baixando seu app.',
      steps: [
        {
          title: 'Entenda seu público-alvo',
          description: 'Antes de fazer brainstorm de nomes, defina claramente quem usará seu app. Considere dados demográficos (idade, localização, profissão), preferências de linguagem e familiaridade com gírias, problemas que seu app resolve para eles, outros apps que usam e amam, e como descobrirão seu app. Seu nome deve ressoar com as preferências e expectativas do seu público-alvo.',
        },
        {
          title: 'Mantenha curto e memorável',
          description: 'Os melhores nomes de apps são concisos e fáceis de lembrar. Mire em 10 caracteres ou menos para exibição ideal. Certifique-se de que é fácil de soletrar depois de ouvir. Faça fácil de dizer em conversa. Considere como ficará como ícone de app. Teste se é fácil de lembrar depois de uma exposição. Lembre, usuários podem estar recomendando seu app verbalmente—um nome que é fácil de dizer e soletrar se espalha mais rápido.',
        },
        {
          title: 'Sugira seu propósito ou benefício',
          description: 'Enquanto não precisa ser completamente literal, seu nome deve dar aos usuários uma dica do que seu app faz ou como se sentirão usando. Considere evocar a emoção ou resultado (ex. Calm, Shine). Referenciar a atividade central (ex. Shazam, Tinder). Usar metáforas que se relacionam com sua função (ex. Slack, Buffer). Evite ser tão abstrato que usuários não têm ideia do que seu app faz.',
        },
        {
          title: 'Verifique disponibilidade em todos os lugares',
          description: 'Antes de se apegar a um nome, verifique disponibilidade em lojas de apps (iOS App Store e Google Play), domínios (.com, .app, .io sendo mais relevantes), handles de redes sociais (@seunome em todas as plataformas principais), e bases de dados de marcas. Ter presença de marca consistente em todas as plataformas é essencial para marketing e descobribilidade.',
        },
        {
          title: 'Teste com usuários potenciais',
          description: 'Antes de finalizar seu nome, teste-o com pessoas no seu público-alvo. Pergunte a elas o que acham que o app faz baseado apenas no nome, se conseguem soletrar corretamente depois de ouvir, se o nome é memorável depois de uma hora, quais emoções ou associações o nome evoca, e se baixariam um app com esse nome. Feedback do mundo real frequentemente revela problemas que você não antecipou.',
        },
        {
          title: 'Considere crescimento futuro',
          description: 'Escolha um nome que não limitará a evolução do seu app. Evite nomes muito específicos se você planeja adicionar features. Não inclua versão ou números de ano. Considere como o nome funcionará internacionalmente. Pense sobre potencial de marca além do app (merchandising, extensões). Certifique-se de que o nome cresce com seu negócio.',
        },
        {
          title: 'Prepare verificação legal',
          description: 'Antes do lançamento, proteja seu nome legalmente. Realize uma busca completa de marcas em mercados relevantes. Considere registrar sua marca. Consulte um advogado de propriedade intelectual se necessário. Documente seu uso para proteção de common law. Proteção legal antecipada evita disputas custosas depois.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'Fluir', description: 'Sugere movimento suave e facilidade de uso—ideal para apps de produtividade ou bem-estar.' },
      { name: 'Nexo', description: 'Evoca conexão e ligação—perfeito para apps sociais ou de networking.' },
      { name: 'Zênite', description: 'Sugere alcançar o ponto mais alto—ideal para apps de desenvolvimento pessoal.' },
      { name: 'Pulso', description: 'Evoca vitalidade e ritmo—perfeito para apps de saúde ou fitness.' },
      { name: 'Clareza', description: 'Sugere simplicidade e foco—ideal para apps de organização ou meditação.' },
      { name: 'Salto', description: 'Evoca progresso e movimento—perfeito para apps de aprendizado ou games.' },
      { name: 'Aura', description: 'Sugere atmosfera e energia—ideal para apps de bem-estar ou lifestyle.' },
      { name: 'Traço', description: 'Evoca criatividade e expressão—perfeito para apps de arte ou design.' },
      { name: 'Orbita', description: 'Sugere ciclos e sistemas—ideal para apps de hábitos ou produtividade.' },
      { name: 'Spark', description: 'Evoca inspiração e início—perfeito para apps criativos ou de ideação.' },
      { name: 'Guia', description: 'Sugere direcionamento e ajuda—ideal para apps educacionais ou de viagem.' },
      { name: 'Ponte', description: 'Evoca conexão e comunicação—perfeito para apps de colaboração.' },
      { name: 'Ritmo', description: 'Sugere música e movimento—ideal para apps de música ou exercício.' },
      { name: 'Foco', description: 'Evoca concentração e clareza—perfeito para apps de produtividade.' },
      { name: 'Elo', description: 'Sugere ligação e união—ideal para apps de relacionamento ou comunidade.' },
      { name: 'Vivo', description: 'Evoca energia e vida—perfeito para apps de lifestyle ou saúde.' },
      { name: 'Meta', description: 'Sugere objetivos e conquistas—ideal para apps de goals ou finanças.' },
      { name: 'Fluxo', description: 'Evoca continuidade e suavidade—perfeito para apps de streaming ou workflow.' },
      { name: 'Prisma', description: 'Sugere múltiplas perspectivas—ideal para apps de fotografia ou criatividade.' },
      { name: 'Raiz', description: 'Evoca fundação e crescimento—perfeito para apps de finanças ou educação.' },
    ],
  },

  'babysitting': {
    slug: 'babysitting',
    name: 'Gerador de Nomes para Serviços de Babá',
    title: 'Gerador gratuito de ideias de nomes comerciais de Babá por IA',
    description: 'Gere nomes confiáveis e carinhosos para serviços de babá, creches e cuidadores infantis.',
    metaDescription: 'Crie o nome perfeito para seu serviço de babá com nosso gerador gratuito por IA. Gere nomes confiáveis e carinhosos que transmitem...',
    inputLabel: 'Descreva seu serviço de babá...',
    inputPlaceholder: 'ex. Um serviço de babás certificadas para bebês e crianças pequenas com foco em atividades educativas',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Carinhoso & Confiável', 'Profissional & Certificado', 'Divertido & Acolhedor', 'Moderno & Premium'],
        default: 'Carinhoso & Confiável',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in childcare services, babysitting, and family care businesses. Your role is to generate trustworthy, warm names that convey safety, reliability, and genuine care for children.

BABYSITTING INDUSTRY CONTEXT:
The childcare service sector encompasses:
- Individual babysitting services
- Nanny placement agencies
- In-home childcare providers
- After-school care services
- Emergency/on-demand babysitting
- Special needs childcare
- Newborn and infant care specialists
- Family childcare networks

NAME CHARACTERISTICS FOR BABYSITTING BUSINESSES:
1. **Trust and Safety**
   - Names should convey security and reliability
   - Parents must feel confident in your care
   - Suggest professionalism and responsibility

2. **Warmth and Care**
   - Evoke feelings of nurturing and love
   - Create emotional connection with parents
   - Suggest a caring, gentle approach

3. **Professionalism**
   - Balance warmth with competence
   - Suggest trained, qualified caregivers
   - Appeal to discerning parents

4. **Memorability**
   - Easy for parents to remember and recommend
   - Works well in word-of-mouth referrals
   - Simple and approachable

OUTPUT REQUIREMENTS:
For each babysitting business name generated, provide:
- The business name
- A brief explanation of why it works for a babysitting service

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Serviço de Babá Individual',
        description: 'Babás certificadas iniciando seus próprios negócios usam o Gerador de Nomes para Serviços de Babá para criar uma identidade profissional que inspira confiança dos pais. Ao inserir sua especialidade—cuidados com recém-nascidos, atividades educativas ou cuidados noturnos—a ferramenta gera nomes que comunicam expertise e carinho.',
      },
      {
        title: 'Criação de Agência de Babás',
        description: 'Empreendedores lançando agências de colocação de babás usam o gerador para encontrar nomes que transmitem tanto profissionalismo quanto cuidado. O nome certo ajuda a construir uma marca em que os pais confiam para conectá-los com cuidadores qualificados.',
      },
      {
        title: 'Expansão de Serviços de Cuidado Infantil',
        description: 'Cuidadores expandindo de serviços individuais para uma rede de prestadores usam o gerador para criar um nome de marca que engloba múltiplos cuidadores enquanto mantém a sensação pessoal e confiável que os pais valorizam.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de serviço de babá?',
        answer: 'Um bom nome de serviço de babá transmite confiança, segurança e carinho. Deve soar profissional mas acolhedor, ser fácil de lembrar e pronunciar, e sugerir cuidado genuíno com as crianças. Evite nomes muito infantilizados que possam parecer não profissionais.',
      },
      {
        question: 'Meu nome de babá deve incluir meu próprio nome?',
        answer: 'Usar seu nome (ex. "Babá Maria") pode criar conexão pessoal e confiança. No entanto, limita escalabilidade se você planeja expandir ou contratar outras babás. Considere seus objetivos de longo prazo ao decidir.',
      },
      {
        question: 'Como posso transmitir segurança através do nome?',
        answer: 'Use palavras que evocam proteção (Abrigo, Ninho, Refúgio), cuidado (Carinho, Afeto, Ternura), e confiabilidade (Confiança, Certeza, Seguro). Evite palavras que possam soar frias ou impessoais.',
      },
      {
        question: 'Devo incluir "babá" ou "cuidador" no nome?',
        answer: 'Incluir um descritor de serviço ajuda clareza imediata, especialmente para pesquisas online. No entanto, nomes mais brandáveis sem descritor podem parecer mais premium. Considere seu posicionamento de mercado.',
      },
      {
        question: 'Como tornar meu nome memorável para indicações?',
        answer: 'Mantenha simples (2-3 palavras máximo), use palavras familiares, considere aliteração ou ritmo, e teste dizendo em voz alta. Pais devem poder recomendar seu serviço facilmente em conversas.',
      },
      {
        question: 'Palavras em inglês funcionam em nomes de serviços de babá no Brasil?',
        answer: 'Algumas palavras em inglês (como "baby", "kids", "care") são bem compreendidas no Brasil. Use com moderação e certifique-se de que seu público-alvo entenderá. Nomes totalmente em português podem parecer mais acessíveis.',
      },
      {
        question: 'Como verifico se meu nome de babá está disponível?',
        answer: 'Verifique CNPJ e registros de empresas, pesquise redes sociais (especialmente Instagram e Facebook), confira domínios disponíveis, e procure serviços similares na sua área. Consistência online é importante para ser encontrado.',
      },
      {
        question: 'Posso mudar o nome do meu serviço depois?',
        answer: 'Sim, mas considere que indicações são cruciais neste setor. Mudar de nome pode confundir famílias que já te conhecem. Se mudar, faça uma transição gradual comunicando claramente aos clientes existentes.',
      },
      {
        question: 'Quais palavras devo evitar em nomes de serviços de babá?',
        answer: 'Evite palavras muito genéricas (Serviços Gerais), termos que possam soar frios ou corporativos, qualquer coisa que possa ter conotação negativa, e nomes muito similares a concorrentes estabelecidos na sua região.',
      },
      {
        question: 'Como meu nome pode refletir minha especialização?',
        answer: 'Se você se especializa em recém-nascidos, inclua referências sutis (Berço, Primeiro). Para foco educativo, use palavras de aprendizado (Descobertas, Crescer). Para cuidados noturnos, considere referências suaves (Estrelas, Sonhos).',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome certo para seu serviço de babá é crucial para construir uma marca em que os pais confiam. O nome será a primeira impressão que famílias têm do seu serviço, e precisa comunicar instantaneamente que você é confiável, carinhosa e profissional. Em um setor onde confiança é tudo, seu nome desempenha um papel fundamental em conquistar novos clientes.',
      steps: [
        {
          title: 'Defina sua especialização e público-alvo',
          description: 'Antes de escolher um nome, esclareça qual é seu nicho. Considere a faixa etária que você atende (recém-nascidos, bebês, crianças, pré-adolescentes), serviços específicos (cuidados educativos, necessidades especiais, período noturno), seu mercado-alvo (famílias de alta renda, pais que trabalham, ocasiões especiais), e sua área de atuação. Seu nome deve ressoar com o público específico que você quer atrair.',
        },
        {
          title: 'Transmita confiança e segurança',
          description: 'Pais confiam a você seus filhos—seus bens mais preciosos. Seu nome deve imediatamente comunicar que você é confiável e segura. Use palavras que evocam proteção e cuidado, sugira profissionalismo e competência, crie sensação de calma e segurança, e evite qualquer coisa que possa parecer não séria ou irresponsável.',
        },
        {
          title: 'Equilibre carinho com profissionalismo',
          description: 'Os melhores nomes de serviços de babá conseguem ser acolhedores sem parecer amadores. Evite excesso de diminutivos ou linguagem muito infantil, mas mantenha calor e afeto. Pais querem alguém que ame crianças E seja profissionalmente competente. Seu nome deve transmitir ambos.',
        },
        {
          title: 'Considere a descobribilidade online',
          description: 'Hoje, pais frequentemente pesquisam serviços de babá online. Certifique-se de que seu nome funciona bem em buscas incluindo palavras-chave relevantes (babá, cuidador, infantil) quando apropriado, sendo único o suficiente para aparecer em pesquisas, funcionando bem como nome de usuário de Instagram e Facebook, e tendo um domínio disponível.',
        },
        {
          title: 'Teste com pais reais',
          description: 'Antes de finalizar, obtenha feedback de pais no seu público-alvo. Pergunte que impressão o nome dá do serviço, se confiariam seus filhos a um serviço com esse nome, se é fácil de lembrar e pronunciar, e quais serviços imaginam que você oferece. Feedback honesto de pais é inestimável.',
        },
        {
          title: 'Planeje para crescimento',
          description: 'Mesmo que comece individualmente, considere se você pode expandir para uma equipe ou agência, se o nome funciona para diferentes serviços (diurno, noturno, eventos), se permite expansão geográfica, e se tem potencial de marca duradouro. Escolha um nome que cresce com você.',
        },
        {
          title: 'Verifique disponibilidade completa',
          description: 'Antes de se comprometer, verifique registro de CNPJ/MEI na sua cidade/estado, disponibilidade de domínio (.com.br, .com), handles de redes sociais (@seunome), e se não há serviços similares na sua área com nomes parecidos. Proteção de marca é importante mesmo para pequenos negócios.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'NinhoSeguro', description: 'Evoca proteção e aconchego—perfeito para serviços focados em bebês e crianças pequenas.' },
      { name: 'MãosDeCarinho', description: 'Sugere cuidado tátil e afetivo—ideal para serviços de babá personalizados.' },
      { name: 'PequenoRefúgio', description: 'Comunica um espaço seguro e acolhedor para crianças.' },
      { name: 'AnjosDaCasa', description: 'Evoca proteção celestial e cuidado dedicado em domicílio.' },
      { name: 'EstrelinhasCare', description: 'Sugere brilho e cuidado especial—perfeito para cuidados noturnos.' },
      { name: 'LaçosDeAmor', description: 'Comunica conexão afetiva e vínculos duradouros com as famílias.' },
      { name: 'MeuCantinho', description: 'Evoca um espaço próprio e seguro onde a criança se sente em casa.' },
      { name: 'AbraçoQuentinho', description: 'Sugere carinho e conforto—ideal para cuidados com bebês.' },
      { name: 'BabáConfiança', description: 'Comunica diretamente confiabilidade e segurança aos pais.' },
      { name: 'CrescerFeliz', description: 'Evoca desenvolvimento e alegria—perfeito para serviços educativos.' },
      { name: 'PrimeirosPassos', description: 'Sugere acompanhamento nas fases iniciais—ideal para cuidados com bebês e toddlers.' },
      { name: 'PortoSeguro', description: 'Comunica proteção absoluta e tranquilidade para os pais.' },
      { name: 'TernuraCare', description: 'Combina delicadeza com profissionalismo no cuidado infantil.' },
      { name: 'PequenasAlegrias', description: 'Evoca felicidade e momentos especiais com as crianças.' },
      { name: 'CuidarComAmor', description: 'Comunica a essência do serviço de forma direta e calorosa.' },
      { name: 'AsaProtetora', description: 'Sugere cuidado constante e proteção—como uma asa que abriga.' },
      { name: 'SonhosTranquilos', description: 'Perfeito para serviços de babá noturna e cuidados com sono.' },
      { name: 'FlorzinhasKids', description: 'Evoca delicadeza e crescimento—ideal para cuidados com meninas.' },
      { name: 'BerçoDeOuro', description: 'Sugere cuidado premium com recém-nascidos e bebês.' },
      { name: 'AmigosDaInfância', description: 'Comunica companheirismo e diversão—perfeito para cuidados com crianças maiores.' },
    ],
  },

  'beauty': {
    slug: 'beauty',
    name: 'Gerador de Nomes para Negócios de Beleza',
    title: 'Gerador gratuito de ideias de nomes comerciais de Beleza por IA',
    description: 'Gere nomes glamourosos e atraentes para salões de beleza, spas, e negócios de cosméticos.',
    metaDescription: 'Descubra o nome perfeito para seu negócio de beleza com nosso gerador gratuito por IA. Crie nomes glamourosos e atraentes para salões, spas...',
    inputLabel: 'Descreva seu negócio de beleza...',
    inputPlaceholder: 'ex. Um salão de beleza especializado em coloração e tratamentos capilares para cabelos cacheados',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Glamouroso & Luxuoso', 'Natural & Orgânico', 'Moderno & Trendy', 'Clássico & Elegante'],
        default: 'Glamouroso & Luxuoso',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the beauty industry. Your role is to generate glamorous, attractive names that capture the essence of beauty, transformation, and self-care for salons, spas, cosmetic brands, and beauty service businesses.

BEAUTY INDUSTRY CONTEXT:
The beauty industry encompasses:
- Hair salons and barbershops
- Nail salons and nail art studios
- Makeup studios and beauty bars
- Skin care and facial spas
- Cosmetic and beauty product brands
- Beauty supply stores
- Mobile beauty services
- Beauty education and training

NAME CHARACTERISTICS FOR BEAUTY BUSINESSES:
1. **Glamour and Allure**
   - Names should evoke beauty and attractiveness
   - Create aspirational appeal
   - Suggest transformation and enhancement

2. **Memorability**
   - Easy to remember and recommend
   - Stands out in a competitive market
   - Works well for word-of-mouth

3. **Emotional Connection**
   - Appeals to desire for beauty
   - Creates positive associations
   - Evokes confidence and self-care

4. **Versatility**
   - Works across different beauty services
   - Allows for business expansion
   - Appeals to target demographic

OUTPUT REQUIREMENTS:
For each beauty business name generated, provide:
- The business name
- A brief explanation of why it works for a beauty business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Salão de Beleza',
        description: 'Profissionais de beleza abrindo seus próprios salões usam o Gerador de Nomes para Negócios de Beleza para criar uma identidade de marca que atrai clientes. Ao inserir sua especialidade—coloração, tratamentos capilares, ou beleza completa—a ferramenta gera nomes glamourosos que comunicam expertise e estilo.',
      },
      {
        title: 'Lançamento de Marca de Cosméticos',
        description: 'Empreendedores entrando no mercado de cosméticos usam o gerador para encontrar nomes que se destacam nas prateleiras e online. O nome certo captura a essência da marca e cria conexão emocional com consumidores de beleza.',
      },
      {
        title: 'Rebranding de Negócio de Beleza',
        description: 'Salões e spas estabelecidos buscando modernizar sua imagem usam o gerador para explorar nomes que refletem sua evolução. A ferramenta ajuda a encontrar nomes que atraem novos públicos enquanto mantêm a fidelidade de clientes existentes.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de negócio de beleza?',
        answer: 'Um bom nome de negócio de beleza é memorável, evoca glamour e transformação, e ressoa com seu público-alvo. Deve ser fácil de pronunciar, funcionar bem em marketing visual, e sugerir a experiência que os clientes terão.',
      },
      {
        question: 'Meu nome de salão deve ser sofisticado ou acessível?',
        answer: 'Depende do seu posicionamento. Nomes sofisticados (Maison, Atelier, Studio) atraem clientela premium, enquanto nomes mais acessíveis e divertidos funcionam para salões de bairro. Alinhe o tom do nome com seus preços e público-alvo.',
      },
      {
        question: 'Devo usar meu próprio nome para o salão?',
        answer: 'Usar seu nome (ex. "Salão Maria Silva") pode construir marca pessoal e confiança. Porém, pode dificultar venda futura ou expansão com outros profissionais. Considere variações como iniciais ou sobrenome para mais flexibilidade.',
      },
      {
        question: 'Palavras em outros idiomas funcionam em nomes de beleza?',
        answer: 'Sim! Palavras francesas (Belle, Maison, Jolie) e italianas (Bella, Bello, Capelli) são populares na indústria de beleza e adicionam sofisticação. Certifique-se de que são fáceis de pronunciar para seu público local.',
      },
      {
        question: 'Como destacar meu nome em um mercado saturado?',
        answer: 'Seja específico sobre sua especialidade (ex. "Studio Cachos" para cabelos cacheados), use combinações únicas de palavras, considere referências locais ou culturais, e evite nomes genéricos que se perdem entre concorrentes.',
      },
      {
        question: 'Meu nome deve mencionar os serviços oferecidos?',
        answer: 'Pode ajudar com SEO e clareza, mas não é obrigatório. "Salão Glamour" é claro, mas "Éden" é mais brandável. Se optar por nome abstrato, certifique-se de que suas descrições de negócio e hashtags compensem.',
      },
      {
        question: 'Como verificar disponibilidade do nome do salão?',
        answer: 'Pesquise no Google e redes sociais por salões com nomes similares na sua região, verifique disponibilidade de domínio, confira registros de empresa no seu estado, e procure handles de Instagram—essencial para salões de beleza.',
      },
      {
        question: 'Posso mudar o nome do meu salão depois?',
        answer: 'Sim, mas rebranding em salões pode ser complicado—clientes fiéis conhecem você pelo nome atual. Se mudar, faça uma transição clara, mantenha elementos de reconhecimento, e comunique bem aos clientes.',
      },
      {
        question: 'Quais erros evitar em nomes de negócios de beleza?',
        answer: 'Evite: nomes muito longos ou difíceis de soletrar, termos excessivamente genéricos (Beleza Total), gírias datadas que podem parecer antiquadas em breve, e nomes que limitem expansão de serviços.',
      },
      {
        question: 'Como meu nome pode atrair meu público ideal?',
        answer: 'Pesquise o vocabulário e valores do seu público. Clientes jovens respondem a nomes modernos e ousados. Público premium prefere sofisticação. Público eco-consciente se conecta com referências naturais. Escolha palavras que ressoam com quem você quer atrair.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu negócio de beleza é uma decisão que impactará toda sua trajetória empreendedora. O nome certo não só atrai clientes—ele comunica sua identidade, posicionamento e a experiência que você oferece. Em uma indústria onde imagem é tudo, seu nome é o primeiro passo para criar uma marca memorável e desejável.',
      steps: [
        {
          title: 'Defina sua identidade de marca',
          description: 'Antes de escolher um nome, tenha clareza sobre quem você é como negócio. Considere quais serviços de beleza você oferece (cabelo, maquiagem, unhas, pele), quem é seu cliente ideal (idade, estilo, poder aquisitivo), qual atmosfera você quer criar (luxuosa, descontraída, trendy, natural), qual é sua diferenciação (especialidade, técnica, experiência), e quais valores você quer transmitir. Seu nome deve ser uma extensão natural dessa identidade.',
        },
        {
          title: 'Capture a essência da beleza',
          description: 'Negócios de beleza vendem transformação, confiança e autoestima. Seu nome deve evocar esses sentimentos. Considere palavras que sugerem brilho e luminosidade (Glow, Radiance, Luz), transformação e renovação (Renova, Nova, Bloom), elegância e sofisticação (Chic, Luxe, Belle), e bem-estar e cuidado (Care, Zen, Spa). Evite palavras negativas ou que sugiram problemas.',
        },
        {
          title: 'Equilibre criatividade e clareza',
          description: 'Enquanto nomes criativos são memoráveis, clientes também precisam entender o que você faz. Considere incluir uma palavra indicativa (Salão, Studio, Beauty, Hair) ou garantir que suas descrições online complementem um nome mais abstrato. O equilíbrio ideal é ser único e compreensível.',
        },
        {
          title: 'Pense na presença digital',
          description: 'Hoje, sua presença online é crucial para atrair clientes. Verifique disponibilidade de handle no Instagram (essencial para beleza), nome de usuário no TikTok (cada vez mais importante), domínio para site ou link na bio, e pesquise no Google para ver o que aparece com seu nome escolhido. Um nome impossível de encontrar online é um obstáculo.',
        },
        {
          title: 'Teste a sonoridade e memorabilidade',
          description: 'Diga seu nome em voz alta várias vezes. Soa bem? É fácil de pronunciar? Clientes conseguirão lembrar e recomendar? Peça para amigos soletrarem depois de ouvir uma vez. Teste em diferentes contextos: "Vim fazer o cabelo no [nome]" soa natural? A sonoridade importa para indicações.',
        },
        {
          title: 'Considere longevidade e expansão',
          description: 'Escolha um nome que não limite seu crescimento. Evite nomes muito específicos se planeja expandir serviços. Não use tendências que podem parecer datadas. Considere se o nome funciona para outras unidades ou franquias. Pense em 10 anos—seu nome ainda será relevante?',
        },
        {
          title: 'Valide e proteja seu nome',
          description: 'Antes de finalizar, valide com seu público-alvo através de enquetes ou conversas, verifique registros de marca e empresa, garanta handles de redes sociais, e registre o domínio. Proteção antecipada evita problemas futuros. Considere consultar um contador sobre registro de marca.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'DivaBeleza', description: 'Evoca poder feminino e glamour—perfeito para salões focados em empoderamento.' },
      { name: 'BrilhoNatural', description: 'Sugere beleza autêntica e luminosidade—ideal para salões de abordagem natural.' },
      { name: 'StudioGlamour', description: 'Combina sofisticação com modernidade—perfeito para salões premium.' },
      { name: 'EncantoBeleza', description: 'Evoca magia e transformação—ideal para experiências de beleza memoráveis.' },
      { name: 'MaisonBeauté', description: 'Toque francês que sugere elegância e refinamento—perfeito para salões de alto padrão.' },
      { name: 'RadianceHair', description: 'Comunica brilho e vitalidade capilar—ideal para salões especializados em cabelo.' },
      { name: 'BelezaPura', description: 'Sugere simplicidade e resultados genuínos—perfeito para beleza clean.' },
      { name: 'ChicStudio', description: 'Evoca estilo e tendência—ideal para salões modernos e descolados.' },
      { name: 'FloresBeleza', description: 'Referência à natureza e feminilidade—perfeito para ambientes acolhedores.' },
      { name: 'EsplendorSpa', description: 'Comunica magnificência e relaxamento—ideal para spas de beleza.' },
      { name: 'NovaBeleza', description: 'Sugere renovação e transformação—perfeito para makeovers completos.' },
      { name: 'LuxeLooks', description: 'Evoca luxo e visuais impecáveis—ideal para serviços premium de maquiagem.' },
      { name: 'AuroraBeauty', description: 'Referência ao nascer do sol e renovação—perfeito para experiências revitalizantes.' },
      { name: 'VelvetTouch', description: 'Sugere suavidade e cuidado—ideal para tratamentos de pele e cabelo.' },
      { name: 'BelezaViva', description: 'Comunica energia e vitalidade—perfeito para salões dinâmicos e animados.' },
      { name: 'CrystalGlow', description: 'Evoca pureza e brilho cristalino—ideal para skincare e tratamentos faciais.' },
      { name: 'SerenitySpa', description: 'Sugere paz e tranquilidade—perfeito para spas de relaxamento.' },
      { name: 'BloomBeauty', description: 'Referência ao florescer—ideal para salões que celebram transformação.' },
      { name: 'GoldenTouch', description: 'Sugere excelência e resultados preciosos—perfeito para profissionais renomados.' },
      { name: 'BelezaReal', description: 'Comunica autenticidade e beleza verdadeira—ideal para abordagens inclusivas.' },
    ],
  },

// ==================== PORTUGUESE (pt) TRANSLATION - BATCH 2 (6-10) ====================

  'boutique': {
    slug: 'boutique',
    name: 'Gerador de Nomes para Boutiques',
    title: 'Gerador gratuito de ideias de nomes comerciais de Boutique por IA',
    description: 'Gere nomes elegantes e sofisticados para boutiques de moda, lojas de roupas e estabelecimentos de varejo exclusivo.',
    metaDescription: 'Crie o nome perfeito para sua boutique com nosso gerador gratuito por IA. Gere nomes elegantes e sofisticados que transmitem exclusividade,...',
    inputLabel: 'Descreva sua boutique...',
    inputPlaceholder: 'ex. Uma boutique de moda feminina focada em peças exclusivas de designers brasileiros e internacionais',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Sofisticado', 'Moderno & Minimalista', 'Boêmio & Artístico', 'Luxuoso & Premium'],
        default: 'Elegante & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in retail boutiques, fashion stores, and curated shopping experiences. Your role is to generate elegant, sophisticated business names that convey exclusivity, style, and the unique shopping experience boutiques offer.

BOUTIQUE BUSINESS CONTEXT:
The boutique retail industry encompasses:
- Women's fashion boutiques
- Men's fashion boutiques
- Children's clothing boutiques
- Accessories and jewelry boutiques
- Home décor boutiques
- Gift shops and specialty stores
- Vintage and consignment boutiques
- Designer and luxury boutiques
- Bridal boutiques
- Plus-size and specialty fashion

NAME CHARACTERISTICS FOR BOUTIQUE BUSINESSES:
1. **Elegance and Sophistication**
   - Names should convey refined taste and style
   - Evoke feelings of exclusivity and curated selection
   - Use sophisticated vocabulary that appeals to discerning shoppers
   - Examples: Maison, Atelier, Collection, Curated

2. **Uniqueness and Discovery**
   - Names that suggest finding special, unique items
   - Create sense of treasure hunting and discovery
   - Differentiate from mass retail experiences
   - Examples: Hidden, Finds, Treasures, Discovered

3. **Style and Fashion-Forward**
   - Communicate fashion awareness and trend knowledge
   - Appeal to style-conscious consumers
   - Suggest quality and taste
   - Examples: Chic, Mode, Vogue, Style

4. **Intimacy and Personal Service**
   - Convey the personalized boutique experience
   - Suggest attentive, knowledgeable service
   - Create welcoming, approachable feeling
   - Examples: Personal, Curated, Selected, Bespoke

NAMING PATTERNS FOR BOUTIQUES:
**Pattern 1: French/Italian Elegance**
- Using sophisticated European terms
- Examples: Maison, Atelier, Boutique, Belle, La, Le

**Pattern 2: Discovery and Treasure**
- Words suggesting finding special items
- Examples: Finds, Treasures, Gems, Discoveries

**Pattern 3: Style Descriptors**
- Fashion-forward terminology
- Examples: Chic, Mode, Vogue, Luxe, Mod

**Pattern 4: Personal Touch**
- Names suggesting curated, personal service
- Examples: Curated, Selected, Chosen, Picked

OUTPUT REQUIREMENTS:
For each boutique name generated, provide:
- The business name
- A brief explanation of why it works for a boutique

Generate names that are:
- Elegant and sophisticated
- Easy to remember and recommend
- Appropriate for signage and shopping bags
- Versatile for expansion into different product categories
- Distinctive in the local retail market

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Boutique de Moda',
        description: 'Empreendedoras abrindo boutiques de moda feminina ou masculina usam o Gerador de Nomes para Boutiques para criar uma identidade que comunica curadoria, estilo e exclusividade. Ao inserir o nicho específico—moda contemporânea, vintage, luxo acessível ou designers locais—a ferramenta gera nomes sofisticados que atraem clientes que buscam experiências de compra diferenciadas do varejo de massa.',
      },
      {
        title: 'Reposicionamento de Loja de Varejo',
        description: 'Proprietários de lojas de roupas buscando reposicionar seus negócios como boutiques premium usam o gerador para encontrar nomes que elevem a percepção da marca. A transição de "loja" para "boutique" requer um nome que comunique a nova proposta de valor—curadoria cuidadosa, atendimento personalizado e produtos exclusivos.',
      },
      {
        title: 'Criação de Boutique Online',
        description: 'Empreendedores lançando e-commerce de moda como boutiques virtuais usam o gerador para criar nomes que funcionam tanto no digital quanto eventualmente em lojas físicas. O nome certo ajuda a estabelecer credibilidade de boutique online e diferencia de marketplaces genéricos.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de boutique?',
        answer: 'Um bom nome de boutique transmite elegância, exclusividade e curadoria cuidadosa. Deve ser memorável e sofisticado, sugerindo uma experiência de compra diferenciada do varejo de massa. O nome deve evocar descoberta de itens especiais e atendimento personalizado, enquanto permanece fácil de pronunciar e lembrar para recomendações boca a boca.',
      },
      {
        question: 'Devo usar palavras em francês ou italiano no nome da minha boutique?',
        answer: 'Palavras francesas (Maison, Atelier, Jolie, Belle) e italianas (Bella, Dolce, Moda) são tradicionais no mundo da moda e adicionam sofisticação. No entanto, certifique-se de que seu público-alvo compreende e aprecia essas referências. Para mercados mais acessíveis, nomes em português com toque elegante podem ser mais eficazes.',
      },
      {
        question: 'Meu nome de boutique deve indicar o tipo de produtos que vendo?',
        answer: 'Depende da sua estratégia. Nomes específicos como "Boutique Noiva" são claros mas limitantes. Nomes mais abstratos como "Atelier Luxe" permitem expansão para diferentes categorias de produtos. Considere seus planos de longo prazo—se planeja diversificar além de roupas para acessórios e decoração, escolha um nome mais amplo.',
      },
      {
        question: 'Como posso diferenciar minha boutique de lojas de departamento?',
        answer: 'Seu nome deve comunicar o oposto da experiência de varejo de massa. Use palavras que sugerem curadoria (Selecionados, Escolhidos), intimidade (Cantinho, Refúgio), exclusividade (Único, Raro), e descoberta (Achados, Tesouros). Evite nomes que soem corporativos ou genéricos.',
      },
      {
        question: 'É importante que o nome da boutique funcione bem no Instagram?',
        answer: 'Absolutamente. Para boutiques modernas, Instagram é frequentemente o principal canal de marketing. Seu nome deve funcionar como handle (@suaboutique), ser fácil de digitar, fotografar bem em letreiros e sacolas, e ser hashtag-friendly. Nomes muito longos ou com caracteres especiais complicam a presença digital.',
      },
      {
        question: 'Devo incluir meu próprio nome na boutique?',
        answer: 'Nomes pessoais (ex. "Maria Clara Boutique") criam conexão íntima e funcionam bem para boutiques onde a proprietária é a curadora principal. No entanto, podem limitar vendas futuras ou expansão com sócias. Considere se você está construindo uma marca pessoal ou um negócio escalável.',
      },
      {
        question: 'Quais palavras transmitem exclusividade em nomes de boutique?',
        answer: 'Palavras eficazes incluem termos de curadoria (Seleta, Escolhida, Curada), exclusividade (Única, Rara, Premium), sofisticação (Atelier, Maison, Studio), descoberta (Achados, Tesouros, Pérolas), e elegância (Chic, Belle, Luxe). Combine essas palavras para criar nomes únicos.',
      },
      {
        question: 'Como verificar se o nome da minha boutique está disponível?',
        answer: 'Verifique registro de empresas no seu estado, disponibilidade de domínio (.com.br e .com), handles de Instagram e Facebook, e pesquise por boutiques existentes na sua cidade com nomes similares. Para boutiques, presença local é crucial—certifique-se de que seu nome é único na sua área de atuação.',
      },
      {
        question: 'Posso mudar o nome da minha boutique depois?',
        answer: 'Sim, mas rebranding de boutiques pode ser particularmente desafiador porque clientes desenvolvem conexão pessoal com a marca. Mudanças afetam sacolas de compras, etiquetas, decoração da loja, presença online e o relacionamento cultivado com clientes fiéis. Invista tempo para escolher certo desde o início.',
      },
      {
        question: 'Quais erros devo evitar em nomes de boutique?',
        answer: 'Evite: nomes muito longos ou difíceis de soletrar, termos genéricos que soam como varejo de massa ("Loja de Roupas Maria"), grafias da moda que podem ficar datadas, nomes muito similares a boutiques estabelecidas na região, e qualquer coisa que não funcione bem em sacolas de compras e letreiros elegantes.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua boutique é uma decisão estratégica que definirá a percepção da sua marca no competitivo mercado de varejo de moda. O nome da sua boutique aparecerá em letreiros elegantes, sacolas de compras que clientes carregarão pelas ruas, etiquetas de roupas, cartões de visita e em todas as suas comunicações de marketing. É a primeira impressão que potenciais clientes terão da experiência de compra que você oferece—tornando essencial selecionar um nome que comunique curadoria, estilo e a promessa de descobertas únicas.',
      steps: [
        {
          title: 'Defina seu nicho e posicionamento de mercado',
          description: 'Antes de gerar ideias de nomes, tenha clareza absoluta sobre o posicionamento da sua boutique. Considere qual categoria de produtos você oferecerá (moda feminina, masculina, infantil, acessórios, vintage, noivas), quem é sua cliente ideal (idade, estilo de vida, poder aquisitivo, valores estéticos), qual faixa de preço você praticará (luxo, premium acessível, intermediário), qual experiência de compra você proporcionará (atendimento personalizado, ambiente intimista, consultoria de estilo), e o que diferencia sua boutique de concorrentes locais. Seu nome deve ser uma extensão natural desse posicionamento.',
        },
        {
          title: 'Incorpore elegância e sofisticação',
          description: 'Boutiques se diferenciam do varejo de massa através de curadoria, qualidade e estilo. Seu nome deve imediatamente sugerir sensibilidade de moda e tendências, mercadoria de qualidade cuidadosamente selecionada, sofisticação e bom gosto, e expertise e conhecimento em estilo. Considere termos inspirados no vocabulário europeu da moda (francês, italiano), palavras relacionadas a moda, e imagens elegantes que posicionam sua loja como destino para compradores exigentes.',
        },
        {
          title: 'Crie sensação de exclusividade e descoberta',
          description: 'O apelo da boutique está em encontrar itens especiais não disponíveis em outro lugar. Nomes devem evocar unicidade ("Você não encontra isso no shopping"), descoberta ("Tesouros aguardam"), curadoria ("Expertamente selecionado para você"), e intimidade ("Pessoal, não corporativo"). Palavras sugerindo segredos, achados, coleções e tesouros criam essa sensação de descoberta especial que compradores de boutique buscam.',
        },
        {
          title: 'Considere sua presença física e digital',
          description: 'O nome da sua boutique deve funcionar em múltiplos contextos: letreiros de fachada (legível, elegante, cabe em formatos padrão de placas), sacolas de compras (fica lindo quando carregado na rua), cartões de visita (profissional e memorável), website e redes sociais (fácil de digitar, pesquisar e compartilhar), e recomendações boca a boca (fácil de dizer e lembrar). Teste seus candidatos de nome em todos esses contextos antes de finalizar.',
        },
        {
          title: 'Verifique disponibilidade e distinção',
          description: 'Garanta que seu nome escolhido está disponível e é único através de registro de empresas (requisitos estaduais e municipais), nome de domínio (garanta sua presença web), redes sociais (Instagram e Pinterest são cruciais para boutiques), concorrência local (nenhuma loja similar no seu mercado), e pesquisa de marcas (verifique conflitos). Boutiques prosperam na unicidade—seu nome deve ser distintamente seu.',
        },
        {
          title: 'Teste com clientes-alvo',
          description: 'Antes de finalizar, obtenha feedback de pessoas que representam sua clientela ideal. Pergunte qual impressão o nome dá sobre a loja, se parece uma boutique ou uma loja de departamento, que tipo de produtos esperariam encontrar, se lembrariam e recomendariam facilmente, e se visitariam uma loja com esse nome. O feedback de potenciais clientes revela percepções que brainstorming interno pode perder.',
        },
        {
          title: 'Planeje para crescimento e evolução',
          description: 'Escolha um nome que acomode expansão futura. Considere se o nome funciona se você adicionar novas categorias de produtos, se permite abertura de outras unidades ou franquias, se funciona para vendas online além da loja física, e se permanece relevante conforme tendências de moda mudam. O nome ideal de boutique é atemporal, versátil e posiciona sua marca para crescimento sustentável a longo prazo.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'AtelierSeleto', description: 'Combina a sofisticação de um atelier com a ideia de curadoria cuidadosa—perfeito para boutiques que oferecem peças exclusivas selecionadas a dedo.' },
      { name: 'BelleÉpoque', description: 'Referência ao período de elegância e refinamento cultural—ideal para boutiques que celebram moda atemporal e clássica com toque contemporâneo.' },
      { name: 'CantinhoChic', description: 'Evoca intimidade e estilo em um espaço aconchegante—perfeito para pequenas boutiques com atendimento personalizado e ambiente acolhedor.' },
      { name: 'MaisonCurada', description: 'Une o termo francês para "casa" com curadoria—sugere uma coleção cuidadosamente escolhida em ambiente sofisticado e acolhedor.' },
      { name: 'PérolasRaras', description: 'Sugere descobertas preciosas e únicas—ideal para boutiques especializadas em peças exclusivas e difíceis de encontrar.' },
      { name: 'StudioModa', description: 'Combina criatividade com moda—perfeito para boutiques com foco em design contemporâneo e peças de autor.' },
      { name: 'TesourosUrbanos', description: 'Evoca descobertas especiais no contexto metropolitano—ideal para boutiques em centros urbanos com curadoria moderna.' },
      { name: 'VitrineBella', description: 'Sugere beleza exposta como em uma vitrine elegante—perfeito para boutiques que valorizam apresentação visual impecável.' },
      { name: 'RendezVousModa', description: 'Termo francês para encontro—sugere uma experiência especial de compra, como um encontro com o estilo pessoal.' },
      { name: 'EscolhasPreciosas', description: 'Comunica diretamente a curadoria cuidadosa—ideal para boutiques onde cada peça é selecionada com critério e carinho.' },
      { name: 'LaBelleVitrine', description: 'Elegância francesa pura—sugere uma vitrine bonita cheia de itens desejáveis e sofisticados.' },
      { name: 'NichoElegante', description: 'Combina especialização (nicho) com sofisticação—perfeito para boutiques focadas em segmentos específicos de moda.' },
      { name: 'AchadosDeEstilo', description: 'Sugere descobertas de moda emocionantes—ideal para boutiques que garimpa peças únicas e tendências emergentes.' },
      { name: 'SuitePremium', description: 'Evoca exclusividade de alto nível—perfeito para boutiques de luxo com atendimento VIP e peças de grife.' },
      { name: 'ModaCurada', description: 'Comunica diretamente moda selecionada com expertise—simples, elegante e profissional.' },
      { name: 'BoutiqueRefúgio', description: 'Sugere um escape do varejo comum—ideal para lojas que oferecem experiência de compra tranquila e especial.' },
      { name: 'EstiloÚnico', description: 'Promete singularidade e diferenciação—perfeito para boutiques que valorizam originalidade acima de tendências de massa.' },
      { name: 'ColeçãoSecreta', description: 'Evoca exclusividade e descoberta—ideal para boutiques com peças limitadas e coleções especiais.' },
      { name: 'AtelierDeAchados', description: 'Combina criatividade artística com descobertas especiais—perfeito para boutiques com peças únicas e artesanais.' },
      { name: 'ChiqueBrasil', description: 'Celebra elegância com identidade nacional—ideal para boutiques que valorizam design brasileiro e moda local.' },
    ],
  },

  'cafe': {
    slug: 'cafe',
    name: 'Gerador de Nomes para Cafeterias',
    title: 'Gerador gratuito de ideias de nomes comerciais de Café por IA',
    description: 'Gere nomes acolhedores e convidativos para cafeterias, coffee shops e casas de café.',
    metaDescription: 'Encontre o nome perfeito para sua cafeteria com nosso gerador gratuito por IA. Crie nomes acolhedores e memoráveis que atraem amantes de...',
    inputLabel: 'Descreva sua cafeteria...',
    inputPlaceholder: 'ex. Uma cafeteria artesanal com grãos especiais torrados na hora e ambiente aconchegante para trabalho remoto',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Aconchegante & Acolhedor', 'Moderno & Artesanal', 'Clássico & Tradicional', 'Descolado & Urbano'],
        default: 'Aconchegante & Acolhedor',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in coffee shops, cafes, and beverage establishments. Your role is to generate warm, inviting business names that convey the cozy atmosphere, quality coffee, and community gathering space that great cafes provide.

CAFE BUSINESS CONTEXT:
The cafe and coffee shop industry encompasses:
- Specialty coffee shops
- Traditional cafeterias
- Artisan roasters with retail presence
- Cafe-bakery combinations
- Bookstore cafes and literary spaces
- Co-working cafes
- Brunch and breakfast cafes
- Tea and coffee houses
- Drive-through coffee kiosks
- Mobile coffee carts and trucks

NAME CHARACTERISTICS FOR CAFE BUSINESSES:
1. **Warmth and Comfort**
   - Names should evoke cozy, welcoming feelings
   - Create desire to linger and relax
   - Suggest comfort and hospitality
   - Examples: Cozy, Warm, Nest, Haven, Nook

2. **Coffee Culture and Quality**
   - Reference coffee terminology when appropriate
   - Suggest quality and craft
   - Appeal to coffee enthusiasts
   - Examples: Roast, Brew, Bean, Espresso, Grind

3. **Community and Gathering**
   - Cafes are social gathering spaces
   - Names should welcome connection
   - Suggest conversation and community
   - Examples: Commons, Gathering, Meet, Social, Together

4. **Atmosphere and Experience**
   - Convey the cafe experience
   - Suggest the ambiance customers will find
   - Create anticipation of enjoyment
   - Examples: Morning, Aroma, Steam, Corner, Daily

NAMING PATTERNS FOR CAFES:
**Pattern 1: Location + Coffee Term**
- [Place/Corner] + [Coffee Word]
- Examples: Corner Brew, Daily Grind, Morning Bean

**Pattern 2: Atmospheric Description**
- Words evoking the cafe experience
- Examples: Cozy Cup, Steam House, Warm Nook

**Pattern 3: Community Focus**
- Names suggesting gathering and connection
- Examples: Common Grounds, The Gathering Place, Meet & Brew

**Pattern 4: Artisan/Craft Focus**
- Emphasizing quality and craft
- Examples: Roasters Collective, Artisan Brew, Craft Coffee

OUTPUT REQUIREMENTS:
For each cafe name generated, provide:
- The business name
- A brief explanation of why it works for a cafe

Generate names that are:
- Warm and inviting
- Easy to remember and recommend
- Appropriate for signage and coffee cups
- Versatile for morning, afternoon, and evening customers
- Distinctive in the local cafe market

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Cafeteria Artesanal',
        description: 'Empreendedores apaixonados por café abrindo cafeterias especiais usam o Gerador de Nomes para Cafeterias para criar uma identidade que comunica qualidade, craft e paixão pelo café. Ao inserir detalhes como origem dos grãos, método de torra ou atmosfera desejada, a ferramenta gera nomes que atraem entusiastas de café e criam conexão emocional com a marca.',
      },
      {
        title: 'Criação de Café-Coworking',
        description: 'Empreendedores criando espaços híbridos de café e trabalho remoto usam o gerador para encontrar nomes que comunicam tanto a qualidade do café quanto a produtividade do ambiente. O nome certo atrai tanto trabalhadores remotos buscando um espaço inspirador quanto amantes de café procurando experiências diferenciadas.',
      },
      {
        title: 'Expansão de Torrefadora para Varejo',
        description: 'Torrefadoras de café expandindo para espaços de varejo com cafeteria própria usam o gerador para criar nomes que conectam a identidade de produtor artesanal com a experiência de consumo no local. O nome deve honrar a tradição de torra enquanto convida clientes para a experiência completa.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de cafeteria?',
        answer: 'Um bom nome de cafeteria transmite calor, acolhimento e qualidade de café. Deve criar desejo de entrar e ficar, sugerir uma experiência prazerosa, e ser fácil de lembrar e recomendar. Os melhores nomes evocam a atmosfera do espaço—seja aconchegante e intimista ou moderno e energético—enquanto comunicam paixão pelo café.',
      },
      {
        question: 'Devo incluir "café" ou "coffee" no nome?',
        answer: 'Incluir "Café", "Coffee" ou termos relacionados (Brew, Bean, Roast) ajuda na clareza imediata e SEO local. No entanto, nomes mais criativos sem referência direta ao café (como "Ninho Urbano") podem ser mais memoráveis e brandáveis. Considere se clareza ou distinção é mais importante para seu mercado.',
      },
      {
        question: 'Como posso transmitir qualidade artesanal no nome?',
        answer: 'Use palavras que sugerem craft e cuidado: Artesanal, Especial, Selecionado, Torrado, Moído. Referências ao processo (Torra, Grão, Origem) também comunicam conhecimento e qualidade. Evite termos genéricos que poderiam descrever qualquer cafeteria comum.',
      },
      {
        question: 'Meu nome de cafeteria deve refletir a localização?',
        answer: 'Nomes com referência local (ex. "Café do Bairro", "Cantinho da Paulista") criam conexão comunitária e ajudam SEO local, mas limitam expansão. Se planeja uma única unidade hiperlocal, referências de bairro funcionam bem. Para potencial franquia ou múltiplas unidades, escolha nome mais versátil.',
      },
      {
        question: 'Como criar um nome que funciona para manhã e noite?',
        answer: 'Evite nomes muito focados em um período (ex. "Café da Manhã"). Escolha palavras que funcionam em qualquer hora: Aconchego, Pausa, Encontro, Cantinho. Se você serve também vinhos ou cervejas à noite, certifique-se de que o nome não limite essa percepção.',
      },
      {
        question: 'Palavras em inglês funcionam em nomes de cafeterias no Brasil?',
        answer: 'Termos como "Coffee Shop", "Brew", "Roasters" são bem aceitos no Brasil, especialmente entre público jovem e urbano. No entanto, nomes totalmente em inglês podem alienar público mais tradicional. Híbridos (ex. "Cantinho Coffee") podem equilibrar sofisticação com acessibilidade.',
      },
      {
        question: 'Como verificar se o nome da minha cafeteria está disponível?',
        answer: 'Pesquise Google Maps e redes sociais por cafeterias com nomes similares na sua região, verifique disponibilidade de domínio, confira CNPJ/registro de empresas, e procure handles no Instagram—crucial para cafeterias modernas. Distinção local é especialmente importante no ramo de alimentação.',
      },
      {
        question: 'Posso mudar o nome da minha cafeteria depois?',
        answer: 'Sim, mas rebranding de cafeterias é desafiador porque clientes desenvolvem rotinas e conexão emocional com "seu café favorito". Mudanças afetam xícaras, cardápios, fachada, uniformes e toda presença online. Se mudar, mantenha elementos de reconhecimento e comunique bem aos clientes regulares.',
      },
      {
        question: 'Quais erros devo evitar em nomes de cafeteria?',
        answer: 'Evite: nomes muito longos ou difíceis de soletrar, termos genéricos demais ("Cafeteria Maria"), grafias complicadas que clientes errarão ao buscar online, nomes muito similares a grandes redes (evite confusão com Starbucks, etc.), e qualquer coisa que não combine com xícaras e fachadas elegantes.',
      },
      {
        question: 'Como meu nome pode atrair diferentes públicos?',
        answer: 'Nomes acolhedores (Ninho, Refúgio, Cantinho) atraem quem busca conforto. Nomes energéticos (Pulso, Despertar, Rush) atraem quem busca produtividade. Nomes artesanais (Torra, Grão, Origem) atraem entusiastas de café. Escolha baseado no público principal que você quer servir.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua cafeteria é uma decisão que definirá a atmosfera e experiência que você oferece aos clientes. O nome aparecerá em xícaras que pessoas carregarão pelas ruas, em letreiros que atrairão passantes curiosos, em cardápios que clientes fotografarão, e em recomendações boca a boca que construirão sua reputação. Uma cafeteria com um ótimo nome cria expectativa antes mesmo do primeiro gole—tornando essencial selecionar um nome que comunique calor, qualidade e o tipo único de experiência que seu espaço proporcionará.',
      steps: [
        {
          title: 'Defina a atmosfera e experiência da sua cafeteria',
          description: 'Antes de gerar nomes, tenha clareza sobre a experiência que você criará. Considere qual ambiente você oferecerá (aconchegante e intimista, moderno e minimalista, rústico e artesanal, vibrante e social), quem é seu cliente ideal (trabalhadores remotos, estudantes, executivos, famílias, entusiastas de café), que tipo de café você servirá (especiais de origem única, espresso italiano, métodos filtrados, café tradicional brasileiro), quais outros produtos oferecerá (doces artesanais, brunch, refeições leves), e qual diferencial competitivo você terá. Seu nome deve ser uma extensão natural dessa experiência.',
        },
        {
          title: 'Transmita calor e acolhimento',
          description: 'Cafeterias são refúgios do mundo externo—espaços para pausar, conectar e recarregar. Seu nome deve criar sensação de boas-vindas e conforto. Considere palavras que evocam aconchego (Ninho, Cantinho, Refúgio, Abrigo), calor (Quentinho, Aquece, Vapor, Aroma), pausa (Respiro, Momento, Intervalo), e lar (Casa, Lar, Recanto). Evite nomes frios, corporativos ou impessoais que não convidam a ficar.',
        },
        {
          title: 'Comunique qualidade e paixão pelo café',
          description: 'Se café de qualidade é seu diferencial, seu nome pode comunicar isso. Termos relacionados ao café (Grão, Torra, Moagem, Brew, Espresso), referências à origem (Fazenda, Terroir, Colheita), e palavras de craft (Artesanal, Especial, Selecionado) atraem entusiastas que apreciam qualidade. Balance referências técnicas com acessibilidade para não intimidar clientes casuais.',
        },
        {
          title: 'Considere o papel de comunidade',
          description: 'Cafeterias são espaços de encontro e conexão. Nomes que sugerem comunidade (Ponto de Encontro, Comum, Conversa), ritual social (Papo, Prosa, Roda), e pertencimento (Nosso, Do Bairro, Da Esquina) criam senso de lugar e pertencimento. Se seu café será ponto de encontro da vizinhança, considere nomes que celebram essa função social.',
        },
        {
          title: 'Verifique presença digital e local',
          description: 'Sua cafeteria precisa ser encontrada facilmente. Certifique-se de que o nome funciona em buscas do Google Maps (pessoas procuram "café perto de mim"), como handle de Instagram (@suacafeteria—sem underscores complicados), em avaliações (fácil de soletrar para reviews), e em indicações verbais (fácil de dizer e entender ao telefone). Teste pesquisando o nome no Google—se resultados irrelevantes dominam, considere alternativas.',
        },
        {
          title: 'Teste a experiência completa do nome',
          description: 'Imagine seu nome em todos os contextos: escrito em uma xícara para viagem, em um letreiro de fachada atraindo passantes, dito por um cliente recomendando a amigos, em uma hashtag de foto no Instagram, e em um pedido de delivery. Se o nome funciona bem em todos esses contextos e cria a impressão certa, você está no caminho certo.',
        },
        {
          title: 'Valide e proteja seu nome',
          description: 'Antes de finalizar, valide com potenciais clientes do seu público-alvo, verifique registros de empresas e marcas, garanta disponibilidade de domínio e redes sociais, e pesquise cafeterias existentes na sua área. Proteção antecipada evita problemas futuros. Considere também como o nome se traduzirá para embalagens, cardápios e eventualmente produtos de varejo como café em grãos para venda.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'CantinhoDoGrão', description: 'Evoca um espaço aconchegante dedicado ao café de qualidade—perfeito para cafeterias intimistas com foco em grãos especiais.' },
      { name: 'AromaDaManhã', description: 'Sugere a experiência sensorial de um café fresco pela manhã—ideal para cafeterias que celebram o ritual matinal.' },
      { name: 'RefúgioCafé', description: 'Posiciona a cafeteria como escape do mundo externo—perfeito para espaços que oferecem paz e tranquilidade.' },
      { name: 'TorraSelecionada', description: 'Comunica expertise em café e curadoria cuidadosa—ideal para cafeterias especializadas em grãos de origem única.' },
      { name: 'PausaEspresso', description: 'Combina o conceito de intervalo com café italiano—perfeito para cafeterias urbanas focadas em espresso de qualidade.' },
      { name: 'NinhoDoCafé', description: 'Evoca conforto, calor e acolhimento—ideal para cafeterias aconchegantes onde clientes ficam horas.' },
      { name: 'GrãoUrbano', description: 'Combina qualidade de café com identidade metropolitana—perfeito para coffee shops modernos em centros urbanos.' },
      { name: 'DespertarCafé', description: 'Sugere energia e início de dia revigorante—ideal para cafeterias focadas em público matinal e produtivo.' },
      { name: 'MoagemArtesanal', description: 'Comunica processo craft e atenção aos detalhes—perfeito para cafeterias que torram e moem na hora.' },
      { name: 'CaféDaEsquina', description: 'Evoca localidade e conveniência com charme—ideal para cafeterias de bairro com identidade comunitária.' },
      { name: 'VaporEAroma', description: 'Captura a experiência sensorial do café sendo preparado—sugere frescor e qualidade imediata.' },
      { name: 'EncontrosCafé', description: 'Posiciona o espaço como ponto de conexão social—ideal para cafeterias que celebram comunidade e conversa.' },
      { name: 'OrigemEspresso', description: 'Sugere conhecimento de procedência e qualidade—perfeito para cafeterias com foco em cafés de origem rastreável.' },
      { name: 'CasaDaTorra', description: 'Evoca ambiente doméstico combinado com expertise em torra—ideal para torrefadoras com espaço de degustação.' },
      { name: 'ProsaDoCafé', description: 'Celebra conversa e conexão humana ao redor do café—perfeito para cafeterias que valorizam socialização.' },
      { name: 'MomentoCafé', description: 'Sugere pausa e apreciação do presente—ideal para espaços que encorajam desaceleração e mindfulness.' },
      { name: 'BrewBrasil', description: 'Combina termo internacional de café com identidade nacional—perfeito para cafeterias modernas com raízes brasileiras.' },
      { name: 'XícaraQuente', description: 'Evoca conforto imediato e simplicidade—ideal para cafeterias tradicionais com atmosfera acolhedora.' },
      { name: 'ColheitaFina', description: 'Sugere seleção cuidadosa de grãos premium—perfeito para cafeterias especializadas em microlotes.' },
      { name: 'CaféComAlma', description: 'Comunica paixão e autenticidade—ideal para cafeterias onde o amor pelo café é evidente em cada detalhe.' },
    ],
  },

  'cake': {
    slug: 'cake',
    name: 'Gerador de Nomes para Confeitarias',
    title: 'Gerador gratuito de ideias de nomes comerciais de Confeitaria por IA',
    description: 'Gere nomes doces e memoráveis para confeitarias, cake designers e negócios de bolos artesanais.',
    metaDescription: 'Crie o nome perfeito para sua confeitaria com nosso gerador gratuito por IA. Gere nomes doces e irresistíveis que comunicam arte, sabor e...',
    inputLabel: 'Descreva sua confeitaria...',
    inputPlaceholder: 'ex. Uma confeitaria especializada em bolos de casamento personalizados com decoração em fondant e flores de açúcar',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Sofisticado', 'Doce & Acolhedor', 'Artístico & Criativo', 'Moderno & Minimalista'],
        default: 'Elegante & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in bakeries, cake businesses, and dessert establishments. Your role is to generate sweet, memorable business names that convey artistry, quality ingredients, and the celebratory nature of cakes.

CAKE BUSINESS CONTEXT:
The cake and bakery industry encompasses:
- Custom cake designers and decorators
- Wedding cake specialists
- Birthday and celebration cakes
- Artisan bakeries with cake focus
- Home-based cake businesses
- Cake shops and patisseries
- Cupcake boutiques
- Specialty dietary cakes (vegan, gluten-free)
- Cake decorating supplies and classes
- Corporate and event cake services

NAME CHARACTERISTICS FOR CAKE BUSINESSES:
1. **Sweet and Inviting**
   - Names should evoke deliciousness and temptation
   - Create desire and anticipation
   - Suggest quality ingredients and flavors
   - Examples: Sweet, Sugar, Honey, Delicious, Yummy

2. **Artistry and Craftsmanship**
   - Cakes are edible art—names should reflect this
   - Communicate skill and creativity
   - Suggest custom, handcrafted quality
   - Examples: Artisan, Craft, Design, Create, Atelier

3. **Celebration and Joy**
   - Cakes mark special occasions
   - Names should evoke happiness and festivity
   - Connect to milestone moments
   - Examples: Celebrate, Joy, Party, Occasion, Moments

4. **Elegance and Sophistication**
   - For premium cake businesses
   - Suggest luxury and refined taste
   - Appeal to discerning clients
   - Examples: Elegant, Luxe, Refined, Exquisite, Maison

NAMING PATTERNS FOR CAKE BUSINESSES:
**Pattern 1: Sweet + Descriptor**
- [Sweet Word] + [Quality/Style Word]
- Examples: Sugar Dreams, Sweet Artistry, Honey Cakes

**Pattern 2: Celebration Focus**
- Names emphasizing special occasions
- Examples: Celebration Cakes, Party Perfection, Joyful Layers

**Pattern 3: Artisan/Craft Emphasis**
- Highlighting handmade quality
- Examples: Cake Atelier, Frosting Studio, Baking Arts

**Pattern 4: Owner's Touch**
- Personal names with sweet additions
- Examples: Sarah's Sweet Creations, Baker Maria

OUTPUT REQUIREMENTS:
For each cake business name generated, provide:
- The business name
- A brief explanation of why it works for a cake business

Generate names that are:
- Sweet and appetizing
- Memorable and easy to recommend
- Appropriate for elegant cake boxes and displays
- Versatile for weddings, birthdays, and all celebrations
- Professional enough for corporate and upscale clients

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Confeitaria de Bolos de Casamento',
        description: 'Cake designers especializadas em casamentos usam o Gerador de Nomes para Confeitarias para criar uma identidade que comunica elegância, sofisticação e atenção aos detalhes que noivas esperam. Ao inserir o estilo de bolos—clássico, moderno, rústico ou luxuoso—a ferramenta gera nomes que atraem casais planejando seu grande dia.',
      },
      {
        title: 'Profissionalização de Negócio de Bolos Caseiros',
        description: 'Confeiteiras que começaram vendendo bolos de casa e estão formalizando seus negócios usam o gerador para criar uma marca profissional. O nome certo ajuda na transição de "bolos da vizinha" para uma confeitaria reconhecida, justificando preços profissionais e atraindo clientes além do círculo pessoal.',
      },
      {
        title: 'Criação de Marca de Bolos Personalizados',
        description: 'Artistas de bolos personalizados e temáticos usam o gerador para encontrar nomes que comunicam criatividade e capacidade de transformar visões em realidade comestível. O nome deve sugerir tanto habilidade artística quanto deliciosidade, atraindo clientes que buscam criações únicas.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de confeitaria de bolos?',
        answer: 'Um bom nome de confeitaria deve ser apetitoso e convidativo, sugerindo doçura e qualidade. Deve comunicar a natureza artística do trabalho com bolos enquanto evoca celebração e momentos especiais. O nome precisa ser memorável para recomendações boca a boca e funcionar bem em embalagens elegantes e redes sociais.',
      },
      {
        question: 'Devo incluir "bolo" ou "cake" no nome?',
        answer: 'Incluir referências a bolos (Bolo, Cake, Confeitaria, Doceria) fornece clareza imediata sobre o negócio. No entanto, nomes mais criativos como "Camadas de Amor" sugerem bolos sem dizer explicitamente. Considere seu mercado—para SEO local, termos claros ajudam; para branding memorável, criatividade pode se destacar.',
      },
      {
        question: 'Meu nome deve indicar minha especialização (casamento, infantil, etc.)?',
        answer: 'Especialização no nome (ex. "Bolos de Casamento Maria") atrai clientes específicos mas pode limitar oportunidades. Se você também faz aniversários e eventos corporativos, um nome muito específico pode afastar esses clientes. Considere começar com nome versátil e criar linhas específicas dentro da marca.',
      },
      {
        question: 'Como posso transmitir qualidade artesanal no nome?',
        answer: 'Use palavras que sugerem craft e criação manual: Artesanal, Feito à Mão, Atelier, Studio, Criações. Termos de arte (Design, Arte, Escultura) também comunicam que seus bolos são obras de arte. Evite nomes que soem industriais ou de produção em massa.',
      },
      {
        question: 'É importante que o nome funcione bem no Instagram?',
        answer: 'Essencial. Bolos decorados são altamente visuais e Instagram é plataforma chave para confeiteiras. Seu nome deve funcionar como handle (@suaconfeitaria), ser fácil de marcar em posts, e criar hashtags brandadas eficazes. Evite nomes longos demais ou com caracteres especiais problemáticos.',
      },
      {
        question: 'Devo usar meu nome pessoal na confeitaria?',
        answer: 'Nomes pessoais (ex. "Bolos da Ana") criam conexão íntima e funcionam bem para confeitarias onde você é a artista principal. Clientes de bolos personalizados valorizam saber quem está criando suas encomendas. No entanto, pode complicar venda futura ou expansão com equipe.',
      },
      {
        question: 'Quais palavras evocam celebração em nomes de confeitaria?',
        answer: 'Palavras eficazes incluem termos de festa (Festa, Celebração, Comemoração), alegria (Alegria, Sorriso, Felicidade), ocasiões (Momentos, Lembranças, Marcos), e doçura (Doce, Açúcar, Mel). Combine essas palavras para criar nomes que capturam a essência celebratória dos bolos.',
      },
      {
        question: 'Como verificar se o nome da minha confeitaria está disponível?',
        answer: 'Pesquise Instagram e Facebook por confeitarias com nomes similares (especialmente na sua região), verifique disponibilidade de domínio, confira registro de empresas, e procure no Google por conflitos. Para confeitarias, presença em redes sociais é frequentemente mais importante que website.',
      },
      {
        question: 'Posso mudar o nome da minha confeitaria depois?',
        answer: 'Sim, mas rebranding impacta portfólio de fotos existente, avaliações de clientes, materiais de embalagem, e reconhecimento construído. Para confeitarias, onde indicações são cruciais, manter consistência é valioso. Se mudar, mantenha elementos visuais e comunique claramente aos clientes.',
      },
      {
        question: 'Como meu nome pode justificar preços premium?',
        answer: 'Nomes sofisticados (Atelier, Maison, Design) sugerem serviço premium. Termos de arte e exclusividade posicionam seus bolos como obras especiais, não produtos commodity. Evite nomes que soem caseiros ou amadores se você quer cobrar preços profissionais.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua confeitaria de bolos é uma decisão deliciosa que definirá como clientes percebem sua arte comestível. O nome aparecerá em caixas elegantes que transportarão suas criações, em cartões que acompanharão bolos de casamento, em posts do Instagram que inspirarão futuras encomendas, e em recomendações de clientes satisfeitos. Um bolo é muito mais que sobremesa—é celebração, arte e memória. Seu nome deve capturar essa magia e criar desejo antes mesmo do primeiro olhar na criação.',
      steps: [
        {
          title: 'Defina sua especialização e posicionamento',
          description: 'Antes de gerar nomes, tenha clareza sobre seu nicho no mercado de bolos. Considere quais tipos de bolos você especializa (casamento, infantil, corporativo, todos), qual é seu estilo artístico (clássico elegante, moderno minimalista, rústico, fantástico, temático), qual faixa de preço você pratica (acessível, intermediário, premium, luxo), quem é seu cliente ideal (noivas, mães, empresas, planejadores de eventos), e qual seu diferencial (técnica específica, ingredientes especiais, estilo único). Seu nome deve comunicar esse posicionamento claramente.',
        },
        {
          title: 'Transmita doçura e desejo',
          description: 'Confeitarias vendem prazer e indulgência. Seu nome deve criar desejo imediato. Considere palavras doces (Açúcar, Mel, Doce, Delícia), texturas (Cremoso, Macio, Fofinho), sabores (Chocolate, Baunilha, Frutas), e sensações (Irresistível, Tentação, Sonho). Evite nomes secos ou técnicos demais que não despertam apetite. O nome deve fazer pessoas quererem provar.',
        },
        {
          title: 'Comunique artesanato e habilidade',
          description: 'Bolos decorados são obras de arte comestível. Seu nome pode comunicar essa natureza artística através de termos de arte (Atelier, Studio, Design, Criações), referências a craft (Artesanal, Feito à Mão, Esculpido), processos criativos (Moldado, Decorado, Desenhado), e exclusividade (Único, Personalizado, Sob Medida). Balance arte com acessibilidade—você quer parecer talentosa, não inacessível.',
        },
        {
          title: 'Evoque celebração e momentos especiais',
          description: 'Bolos são centrais em comemorações da vida. Nomes que conectam com ocasiões especiais ressoam emocionalmente. Considere palavras de celebração (Festa, Comemoração, Brinde), marcos (Momentos, Lembranças, Histórias), alegria (Sorrisos, Felicidade, Encanto), e união (Família, Amor, Juntos). Seu nome deve lembrar clientes de que você faz parte de seus momentos mais felizes.',
        },
        {
          title: 'Considere presença visual e digital',
          description: 'Confeitarias são negócios extremamente visuais. Seu nome deve funcionar em caixas e embalagens elegantes (fica bonito impresso?), posts de Instagram (funciona como hashtag?), fotos de bolos (complementa a estética visual?), busca online (clientes conseguem te encontrar?), e indicações verbais (fácil de dizer e soletrar?). Teste seu nome em todos esses contextos antes de decidir.',
        },
        {
          title: 'Teste memorabilidade e recomendação',
          description: 'Confeitarias crescem por indicação. Teste seu nome perguntando a pessoas se lembrariam depois de ouvir uma vez, se conseguiriam soletrar corretamente para pesquisar online, se parece uma confeitaria profissional, se recomendariam uma confeitaria com esse nome, e que tipo de bolos imaginam que você faz. Feedback real de potenciais clientes é inestimável.',
        },
        {
          title: 'Valide disponibilidade e proteja sua marca',
          description: 'Antes de finalizar, verifique disponibilidade em redes sociais (Instagram é crucial), domínio web, registro de empresas, e pesquise confeitarias existentes na sua região. Considere também como o nome funcionará em futuros produtos (linha de doces, cursos, franquia). Proteção antecipada evita dores de cabeça quando seu negócio crescer.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'AtelierDoce', description: 'Combina sofisticação artística com doçura—perfeito para confeitarias de bolos personalizados de alto padrão.' },
      { name: 'CamadasDeAmor', description: 'Evoca a construção do bolo (camadas) com emoção—ideal para bolos de casamento e celebrações românticas.' },
      { name: 'AçúcarEArte', description: 'Comunica diretamente a fusão de confeitaria com criatividade artística—versátil e memorável.' },
      { name: 'SonhosDeCobertura', description: 'Sugere bolos dos sonhos com coberturas perfeitas—perfeito para confeitarias focadas em decoração elaborada.' },
      { name: 'DoceMemória', description: 'Conecta bolos com momentos inesquecíveis—ideal para confeitarias de ocasiões especiais.' },
      { name: 'MaisonCake', description: 'Combina elegância francesa com clareza de produto—perfeito para confeitarias premium e sofisticadas.' },
      { name: 'DelíciasEmCamadas', description: 'Comunica sabor irresistível e técnica de construção—ideal para bolos artesanais elaborados.' },
      { name: 'StudioDoçura', description: 'Sugere espaço criativo dedicado a doces—perfeito para cake designers e decoradoras artísticas.' },
      { name: 'EncantoCakes', description: 'Evoca magia e fascínio—ideal para bolos temáticos infantis e criações fantásticas.' },
      { name: 'FornoDaSofisticação', description: 'Combina processo tradicional com resultado elegante—perfeito para confeitarias clássicas de alto padrão.' },
      { name: 'CriaçõesAçucaradas', description: 'Comunica criatividade e doçura—versátil para todos os tipos de bolos personalizados.' },
      { name: 'DoceAtelié', description: 'Variação brasileira do atelier doce—acessível mas sofisticado, ideal para mercado local.' },
      { name: 'BolosDeSonho', description: 'Sugere realizações de desejos e fantasias—perfeito para bolos de casamento e eventos especiais.' },
      { name: 'SaborCelebrar', description: 'Conecta sabor com celebração—ideal para confeitarias focadas em festas e comemorações.' },
      { name: 'MelECanela', description: 'Evoca ingredientes reconfortantes e caseiros—perfeito para confeitarias com estilo acolhedor e tradicional.' },
      { name: 'ArteEmFondant', description: 'Comunica especialização em técnica específica—ideal para cake designers focadas em decoração em pasta.' },
      { name: 'DoceElegância', description: 'Combina indulgência com sofisticação—perfeito para bolos de eventos formais e casamentos.' },
      { name: 'CakeStudioBrasil', description: 'Posiciona como estúdio profissional com identidade nacional—moderno e profissional.' },
      { name: 'SaborArtesanal', description: 'Comunica qualidade handmade e foco em ingredientes—ideal para confeitarias que valorizam tradição.' },
      { name: 'MomentosDeBolo', description: 'Conecta produto com ocasiões especiais da vida—perfeito para confeitarias de celebração.' },
    ],
  },

  'candle': {
    slug: 'candle',
    name: 'Gerador de Nomes para Negócios de Velas',
    title: 'Gerador gratuito de ideias de nomes comerciais de Velas por IA',
    description: 'Gere nomes aromáticos e evocativos para marcas de velas artesanais, aromáticas e decorativas.',
    metaDescription: 'Ilumine sua marca de velas com o nome perfeito do nosso gerador gratuito por IA. Crie nomes aromáticos e evocativos que transmitem...',
    inputLabel: 'Descreva seu negócio de velas...',
    inputPlaceholder: 'ex. Uma marca de velas aromáticas artesanais com cera de soja e óleos essenciais naturais',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Aconchegante & Relaxante', 'Natural & Sustentável', 'Luxuoso & Sofisticado', 'Místico & Espiritual'],
        default: 'Aconchegante & Relaxante',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in candle businesses, home fragrance brands, and artisan craft products. Your role is to generate evocative, aromatic-feeling business names that convey warmth, ambiance, and the sensory experience of beautiful candles.

CANDLE BUSINESS CONTEXT:
The candle industry encompasses:
- Artisan hand-poured candles
- Scented and aromatherapy candles
- Soy, beeswax, and natural wax candles
- Decorative and pillar candles
- Luxury and high-end candle brands
- Spiritual and ritual candles
- Home fragrance products (wax melts, diffusers)
- Custom and personalized candles
- Seasonal and holiday collections
- Candle-making supplies and classes

NAME CHARACTERISTICS FOR CANDLE BUSINESSES:
1. **Warmth and Comfort**
   - Names should evoke cozy, relaxing feelings
   - Create sense of home and sanctuary
   - Suggest comfort and peace
   - Examples: Glow, Warm, Cozy, Haven, Nest

2. **Sensory and Aromatic**
   - Reference scent and fragrance
   - Create olfactory anticipation
   - Suggest pleasant sensory experience
   - Examples: Scent, Aroma, Fragrant, Essence, Notes

3. **Light and Ambiance**
   - Candles create atmosphere
   - Names should evoke soft lighting
   - Suggest mood and ambiance
   - Examples: Glow, Flicker, Flame, Luminous, Radiant

4. **Natural and Artisanal**
   - Many candle buyers value natural ingredients
   - Communicate handcrafted quality
   - Suggest sustainable practices
   - Examples: Pure, Natural, Craft, Artisan, Hand-poured

NAMING PATTERNS FOR CANDLE BUSINESSES:
**Pattern 1: Light + Comfort**
- [Light Word] + [Comfort Word]
- Examples: Glowing Haven, Warm Light, Cozy Flame

**Pattern 2: Scent + Atmosphere**
- Names emphasizing fragrance and mood
- Examples: Scented Sanctuary, Aromatic Bliss, Fragrant Nights

**Pattern 3: Natural + Craft**
- Highlighting natural ingredients and artisanal process
- Examples: Pure Wick, Natural Glow, Artisan Flame

**Pattern 4: Mood + Experience**
- Focusing on the experience candles create
- Examples: Tranquil Moments, Peaceful Glow, Serene Light

OUTPUT REQUIREMENTS:
For each candle business name generated, provide:
- The business name
- A brief explanation of why it works for a candle business

Generate names that are:
- Evocative and sensory
- Warm and inviting
- Appropriate for elegant labels and packaging
- Versatile across different candle types and scents
- Professional enough for retail and wholesale markets

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca de Velas Artesanais',
        description: 'Artesãs lançando marcas de velas feitas à mão usam o Gerador de Nomes para Negócios de Velas para criar uma identidade que comunica craft, qualidade e a experiência sensorial única de suas criações. Ao inserir detalhes sobre ingredientes naturais, aromas ou estilo, a ferramenta gera nomes evocativos que atraem consumidores de produtos artesanais.',
      },
      {
        title: 'Criação de Linha de Velas Premium',
        description: 'Empreendedores entrando no mercado de velas de luxo usam o gerador para encontrar nomes sofisticados que justificam preços premium. O nome certo posiciona a marca ao lado de marcas de fragrância de alta qualidade e atrai consumidores que investem em experiências de casa.',
      },
      {
        title: 'Expansão de Negócio de Home Fragrance',
        description: 'Marcas de velas expandindo para outras categorias de fragrância para casa (difusores, wax melts, sprays) usam o gerador para encontrar nomes que englobam toda a linha de produtos, não apenas velas. O nome certo permite crescimento do portfólio mantendo identidade de marca.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de marca de velas?',
        answer: 'Um bom nome de marca de velas evoca sensações de calor, conforto e experiência sensorial. Deve sugerir a atmosfera que as velas criam—relaxamento, romance, paz ou energia—enquanto comunica qualidade artesanal. O nome deve funcionar bem em etiquetas elegantes e criar associações positivas com fragrância e luz.',
      },
      {
        question: 'Devo incluir "vela" ou "candle" no nome?',
        answer: 'Incluir referência a velas fornece clareza, mas pode limitar expansão futura para outros produtos de fragrância. Marcas de luxo frequentemente usam nomes sem referência direta (ex. Diptyque, Jo Malone). Se planeja apenas velas, clareza ajuda; se planeja expandir para home fragrance completo, considere nome mais amplo.',
      },
      {
        question: 'Como transmitir sustentabilidade no nome?',
        answer: 'Use palavras que sugerem natureza (Natural, Puro, Eco, Terra, Verde), ingredientes limpos (Soja, Cera, Essência), e artesanato responsável (Artesanal, Feito à Mão, Consciente). Evite greenwashing—seu nome deve refletir práticas reais de sustentabilidade.',
      },
      {
        question: 'Meu nome deve refletir aromas específicos?',
        answer: 'Evite nomes muito específicos de aroma (ex. "Lavanda Relaxante") que limitam sua linha. Opte por nomes que evocam a categoria de experiência olfativa (Notas, Essências, Aromas) sem se prender a fragrâncias específicas. Isso permite flexibilidade para criar diferentes linhas e coleções.',
      },
      {
        question: 'Como posso parecer sofisticado sem ser pretensioso?',
        answer: 'Balance elegância com acessibilidade. Termos franceses (Maison, Lumière) adicionam sofisticação, mas use com parcimônia. Palavras em português que evocam calor e conforto (Aconchego, Refúgio, Lar) podem ser igualmente elegantes e mais acessíveis ao público brasileiro.',
      },
      {
        question: 'Nomes espirituais ou místicos funcionam para velas?',
        answer: 'Sim, especialmente se você oferece velas para meditação, rituais ou bem-estar. Palavras como Energia, Aura, Luz Interior, Harmonia atraem esse público. No entanto, se seu foco é decoração ou luxo mainstream, nomes muito espirituais podem limitar seu mercado.',
      },
      {
        question: 'Como verificar se o nome da minha marca de velas está disponível?',
        answer: 'Pesquise Instagram, Etsy, e marketplaces de artesanato por marcas similares, verifique disponibilidade de domínio, confira registro de marcas (importante para velas—muitas marcas nacionais e internacionais), e procure em sites de decoração e lifestyle. O mercado de velas é competitivo—distinção é crucial.',
      },
      {
        question: 'Posso mudar o nome da minha marca de velas depois?',
        answer: 'Sim, mas rebranding afeta etiquetas, embalagens, presença online e reconhecimento construído. Para marcas de velas, design visual e nome estão fortemente conectados—mudança pode requerer redesign completo de identidade. Invista tempo para escolher certo desde o início.',
      },
      {
        question: 'Quais erros evitar em nomes de marcas de velas?',
        answer: 'Evite: nomes muito genéricos ("Velas Perfumadas Brasil"), referências a aromas específicos que limitam sua linha, grafias difíceis que complicam busca online, nomes muito similares a marcas estabelecidas (Yankee Candle, Bath & Body Works), e qualquer coisa que não funcione bem em etiquetas elegantes.',
      },
      {
        question: 'Como meu nome pode justificar preços premium?',
        answer: 'Nomes sofisticados com termos de luxo (Maison, Atelier, Première), referências artesanais (Craft, Artisan, Hand-poured), ou vocabulário de perfumaria (Notes, Essence, Bouquet) sugerem qualidade premium. Evite nomes que soem de produção em massa ou básicos.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua marca de velas é uma decisão que iluminará toda sua jornada empreendedora. O nome aparecerá em etiquetas elegantes que adornarão suas criações, em embalagens de presente que encantarão destinatários, em marketplaces online onde você competirá com milhares de marcas, e em recomendações de clientes que descobriram sua luz especial. Velas são mais que produtos—são experiências sensoriais que transformam espaços e momentos. Seu nome deve capturar essa magia e criar desejo antes mesmo do primeiro acender.',
      steps: [
        {
          title: 'Defina sua essência de marca e posicionamento',
          description: 'Antes de gerar nomes, tenha clareza sobre a identidade da sua marca. Considere qual tipo de velas você oferece (aromáticas, decorativas, rituais, luxo, natural), qual experiência você proporciona (relaxamento, energia, romance, meditação, ambiente), quem é seu cliente ideal (amantes de home décor, praticantes de wellness, presenteadores), qual sua faixa de preço (acessível, intermediário, premium, luxo), e qual seu diferencial (ingredientes naturais, aromas únicos, design, sustentabilidade). Seu nome deve ser uma extensão natural dessa essência.',
        },
        {
          title: 'Evoque calor e experiência sensorial',
          description: 'Velas são sobre sensações—luz suave, aromas envolventes, momentos de paz. Seu nome deve ativar essas associações sensoriais. Considere palavras de luz (Brilho, Chama, Clarão, Lume, Luz), calor (Quentinho, Aconchego, Calor), aroma (Essência, Fragrância, Notas, Aroma), e atmosfera (Ambiente, Clima, Atmosfera, Momento). O nome ideal cria antecipação da experiência sensorial completa.',
        },
        {
          title: 'Comunique qualidade e craft',
          description: 'Se você faz velas artesanais, seu nome pode comunicar esse cuidado. Termos de artesanato (Feito à Mão, Artesanal, Craft), processo (Derramado, Moldado, Criado), ingredientes (Cera de Soja, Natural, Puro), e atenção (Cuidado, Dedicação, Detalhe) sugerem que cada vela recebe atenção especial. Isso justifica preços acima de velas industriais.',
        },
        {
          title: 'Considere o espectro de ocasiões',
          description: 'Velas servem múltiplos propósitos—decoração, presente, relaxamento, meditação, romance. Escolha um nome versátil que funcione para presentes de aniversário e casamento, decoração de casa no dia a dia, momentos de autocuidado e bem-estar, ambientes românticos e especiais, e práticas de meditação e mindfulness. Evite nomes tão específicos que excluam ocasiões importantes.',
        },
        {
          title: 'Visualize em embalagens e etiquetas',
          description: 'Velas são produtos visuais—seu nome precisa ficar lindo impresso. Imagine o nome em etiquetas de vidro de vela (tipografia elegante), caixas de presente (formatação premium), descrições de marketplace (busca e destaque), posts de Instagram (hashtags e mencões), e exposição em loja (prateleiras e displays). O nome deve complementar, não competir com, a estética visual da marca.',
        },
        {
          title: 'Teste disponibilidade e distinção',
          description: 'O mercado de velas é saturado—distinção é crucial. Pesquise Instagram, Etsy, e Amazon por marcas similares, verifique domínio e redes sociais, confira registro de marcas comerciais, e garanta que seu nome se destaca dos concorrentes. Um nome único não só evita confusão legal como ajuda clientes a te encontrarem e lembrarem.',
        },
        {
          title: 'Valide com potenciais clientes',
          description: 'Antes de finalizar, teste com pessoas do seu público-alvo. Pergunte que tipo de velas imaginam que você vende, se o nome parece premium ou básico, se lembrariam para recomendar, se comprariam uma vela com esse nome, e quais aromas ou experiências associam ao nome. O feedback real revela percepções que você pode ter perdido.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'LuzDeSoja', description: 'Combina fonte de luz com ingrediente natural popular—perfeito para marcas de velas naturais e sustentáveis.' },
      { name: 'AconchegoBrasil', description: 'Evoca conforto com identidade nacional—ideal para velas artesanais brasileiras que celebram aromas locais.' },
      { name: 'CheiroDeLar', description: 'Conecta fragrância com sensação de casa—perfeito para velas aromáticas que transformam ambientes em lares.' },
      { name: 'ChamaSerena', description: 'Combina elemento de vela com tranquilidade—ideal para velas de relaxamento e meditação.' },
      { name: 'EssênciaNoturna', description: 'Evoca aromas para momentos de fim de dia—perfeito para velas de relaxamento noturno e romance.' },
      { name: 'BrilhoArtesanal', description: 'Comunica luz e craft—ideal para marcas que valorizam processo artesanal e qualidade handmade.' },
      { name: 'RefúgioAromático', description: 'Sugere escape através de fragrâncias—perfeito para velas de bem-estar e autocuidado.' },
      { name: 'LumeNatural', description: 'Combina luz suave com ingredientes naturais—ideal para velas eco-conscientes e sustentáveis.' },
      { name: 'NotasDeCalor', description: 'Evoca composição aromática e aconchego—perfeito para velas com fragrâncias sofisticadas e complexas.' },
      { name: 'VelaViva', description: 'Sugere energia e vida na iluminação—ideal para velas vibrantes e energizantes.' },
      { name: 'AromaDoPôr', description: 'Evoca aromas de entardecer e relaxamento—perfeito para velas de momentos de descompressão.' },
      { name: 'ClarãoCasa', description: 'Combina luz brilhante com ambiente doméstico—ideal para velas decorativas e funcionais.' },
      { name: 'SentirBem', description: 'Comunica bem-estar e sensação positiva—perfeito para velas aromaterápicas e de wellness.' },
      { name: 'FlamejaArte', description: 'Combina chama com criação artística—ideal para velas decorativas e design diferenciado.' },
      { name: 'HarmoniaAcesa', description: 'Sugere equilíbrio através da luz—perfeito para velas de meditação e práticas espirituais.' },
      { name: 'PuraCera', description: 'Comunica simplicidade e ingrediente de qualidade—ideal para marcas minimalistas e naturais.' },
      { name: 'CantoDaVela', description: 'Evoca espaço especial dedicado a velas—perfeito para marcas com ampla variedade de opções.' },
      { name: 'AromasDoSul', description: 'Combina fragrância com identidade regional—ideal para velas com inspiração brasileira sulista.' },
      { name: 'LuzSuave', description: 'Comunica diretamente a experiência de iluminação delicada—simples, elegante e memorável.' },
      { name: 'VelaAlma', description: 'Sugere profundidade espiritual e conexão—perfeito para velas de rituais e meditação.' },
    ],
  },

  'candy': {
    slug: 'candy',
    name: 'Gerador de Nomes para Lojas de Doces',
    title: 'Gerador gratuito de ideias de nomes comerciais de Doces por IA',
    description: 'Gere nomes doces e divertidos para lojas de doces, confeitarias e negócios de guloseimas.',
    metaDescription: 'Adoce seu negócio com o nome perfeito do nosso gerador gratuito por IA. Crie nomes doces e irresistíveis para lojas de doces, confeitarias...',
    inputLabel: 'Descreva seu negócio de doces...',
    inputPlaceholder: 'ex. Uma loja de doces artesanais especializada em brigadeiros gourmet e trufas premium',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Divertido & Colorido', 'Artesanal & Gourmet', 'Nostálgico & Tradicional', 'Moderno & Sofisticado'],
        default: 'Divertido & Colorido',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in candy shops, confectioneries, and sweet treat businesses. Your role is to generate sweet, playful, and irresistible business names that capture the joy and indulgence of candy.

CANDY BUSINESS CONTEXT:
The candy and confectionery industry encompasses:
- Traditional candy shops
- Gourmet and artisan confectioneries
- Brazilian sweets (brigadeiros, beijinhos, docinhos)
- Chocolate boutiques
- Bulk candy and pick-and-mix stores
- Nostalgic and retro candy shops
- Party and event candy services
- Candy subscription boxes
- Handmade fudge and caramel shops
- Sugar-free and specialty diet candies

NAME CHARACTERISTICS FOR CANDY BUSINESSES:
1. **Sweet and Tempting**
   - Names should evoke deliciousness and desire
   - Create immediate craving
   - Suggest irresistible treats
   - Examples: Sweet, Sugar, Yummy, Delicious, Tempting

2. **Playful and Fun**
   - Candy is about joy and childhood delight
   - Names can be whimsical and lighthearted
   - Appeal to the kid in everyone
   - Examples: Pop, Fizz, Sparkle, Magic, Wonder

3. **Colorful and Vibrant**
   - Candy is visual—bright and appealing
   - Names should evoke colorful imagery
   - Create excitement and energy
   - Examples: Rainbow, Bright, Colorful, Sprinkle, Confetti

4. **Nostalgic and Comforting**
   - Candy connects to happy memories
   - Names can evoke childhood joy
   - Suggest comfort and familiarity
   - Examples: Classic, Vintage, Remember, Old-fashioned, Traditional

NAMING PATTERNS FOR CANDY BUSINESSES:
**Pattern 1: Sweet + Fun**
- [Sweet Word] + [Playful Word]
- Examples: Sugar Pop, Sweet Dreams, Candy Joy

**Pattern 2: Texture/Type Focus**
- Names highlighting candy characteristics
- Examples: Chewy Delights, Crunchy Corner, Gummy World

**Pattern 3: Experience/Emotion**
- Focusing on how candy makes you feel
- Examples: Happy Treats, Joyful Sweets, Blissful Bites

**Pattern 4: Destination/Place**
- Positioning shop as candy destination
- Examples: Candy Kingdom, Sweet Street, Sugar Lane

OUTPUT REQUIREMENTS:
For each candy business name generated, provide:
- The business name
- A brief explanation of why it works for a candy business

Generate names that are:
- Sweet and appetizing
- Fun and memorable
- Appropriate for colorful store signage
- Appealing to children and adults alike
- Versatile for different candy types

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Loja de Doces Artesanais',
        description: 'Empreendedoras abrindo lojas de doces caseiros e artesanais usam o Gerador de Nomes para Lojas de Doces para criar uma identidade que comunica qualidade, carinho e sabor incomparável. Ao inserir especialidades como brigadeiros gourmet, trufas ou doces de festa, a ferramenta gera nomes que atraem clientes buscando doces especiais além do industrial.',
      },
      {
        title: 'Criação de Marca de Brigadeiros Gourmet',
        description: 'Brigadeiristas profissionalizando seus negócios usam o gerador para encontrar nomes que elevam o humilde brigadeiro a status gourmet. O nome certo posiciona os doces como presentes especiais e produtos premium, justificando preços acima das versões tradicionais.',
      },
      {
        title: 'Lançamento de Loja de Doces Nostálgicos',
        description: 'Empreendedores criando experiências de doces retrô e nostálgicos usam o gerador para encontrar nomes que evocam memórias de infância. O nome deve transportar clientes para a alegria de docerias antigas enquanto oferece experiência atualizada.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de loja de doces?',
        answer: 'Um bom nome de loja de doces é doce, divertido e irresistível. Deve evocar desejo imediato, conectar com a alegria de comer doces, e ser fácil de lembrar e pronunciar. Os melhores nomes funcionam para crianças (simples e alegres) e adultos (podem ser sofisticados ou nostálgicos) simultaneamente.',
      },
      {
        question: 'Devo usar palavras em inglês como "candy" ou "sweet"?',
        answer: 'Palavras em inglês podem adicionar apelo moderno, mas considere seu público. Para lojas tradicionais brasileiras focadas em brigadeiros e doces de festa, nomes em português (Doceria, Docinhos, Açúcar) podem conectar melhor. Para marcas premium ou focadas em público jovem, termos em inglês podem funcionar bem.',
      },
      {
        question: 'Como posso parecer artesanal sem parecer amador?',
        answer: 'Use palavras que comunicam craft com sofisticação: Artesanal, Gourmet, Boutique, Atelier, Selecionado. Evite termos excessivamente caseiros que podem sugerir falta de profissionalismo. O equilíbrio é comunicar carinho na produção com padrões profissionais de qualidade.',
      },
      {
        question: 'Meu nome deve indicar os doces que vendo (brigadeiro, trufa, etc.)?',
        answer: 'Nomes específicos (ex. "Casa do Brigadeiro") criam clareza mas limitam expansão. Se você planeja oferecer variedade de doces, escolha nome mais versátil. Você pode criar linhas dentro da marca (ex. "Açúcar & Arte - Linha Brigadeiros") sem limitar o nome principal.',
      },
      {
        question: 'Como atrair tanto crianças quanto adultos?',
        answer: 'Escolha nomes que funcionam em múltiplos níveis: divertidos e coloridos para crianças (Alegria, Festa, Magia), mas não infantilizados demais que afastem adultos. Nomes como "Doce Tentação" ou "Açúcar & Afeto" atraem ambos públicos sem parecer exclusivamente para um ou outro.',
      },
      {
        question: 'Nomes nostálgicos funcionam para lojas de doces?',
        answer: 'Sim, especialmente no Brasil onde doces tradicionais (brigadeiro, beijinho, cajuzinho) têm forte conexão emocional. Nomes que evocam memórias de festas de aniversário, casa da avó, ou infância podem criar conexão poderosa. Considere palavras como Memórias, Tradição, Clássico.',
      },
      {
        question: 'Como verificar se o nome da minha loja de doces está disponível?',
        answer: 'Pesquise Instagram e iFood por docerias com nomes similares na sua região, verifique disponibilidade de domínio, confira registro de empresas, e procure no Google por conflitos. Para docerias, presença em apps de delivery e redes sociais é tão importante quanto presença física.',
      },
      {
        question: 'Posso mudar o nome da minha loja de doces depois?',
        answer: 'Sim, mas considere que clientes de docerias são frequentemente fiéis e desenvolvem conexão emocional com "sua doceria favorita". Mudanças afetam embalagens, presença em delivery apps, e relacionamento com clientes regulares. Se mudar, faça transição clara mantendo elementos de reconhecimento.',
      },
      {
        question: 'Quais erros evitar em nomes de lojas de doces?',
        answer: 'Evite: nomes muito genéricos ("Doces da Maria"), grafias difíceis que complicam pedidos online, termos que não evocam doçura ou alegria, nomes muito longos para embalagens pequenas, e qualquer coisa que possa ter conotação negativa ou não funcione bem com a estética colorida de docerias.',
      },
      {
        question: 'Como meu nome pode ajudar em delivery e encomendas?',
        answer: 'Para delivery, seu nome precisa ser fácil de encontrar no iFood/Rappi, memorável para pedidos recorrentes, e distinguível de concorrentes. Considere como soa quando um cliente diz "pede lá na [seu nome]" e se é fácil de digitar em apps de busca.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua loja de doces é uma decisão deliciosa que adoçará toda sua jornada empreendedora. O nome aparecerá em embalagens que levarão alegria a festas de aniversário, em vitrines que atrairão olhares gulosos, em cardápios de delivery que despertarão desejos, e em recomendações de clientes que descobriram seu sabor especial. Doces são mais que alimentos—são alegria, memórias e celebração. Seu nome deve capturar essa doçura e criar desejo irresistível antes mesmo da primeira mordida.',
      steps: [
        {
          title: 'Defina sua especialidade e posicionamento',
          description: 'Antes de gerar nomes, tenha clareza sobre seu lugar no mercado de doces. Considere quais doces você oferece (brigadeiros, trufas, doces de festa, chocolates, doces regionais), qual é seu estilo (artesanal caseiro, gourmet sofisticado, tradicional nostálgico, moderno criativo), quem é seu cliente ideal (mães de aniversariantes, empresas, presenteadores, consumo pessoal), qual sua faixa de preço (acessível, intermediário, premium), e qual seu diferencial (receita especial, ingredientes premium, apresentação única). Seu nome deve refletir esse posicionamento.',
        },
        {
          title: 'Evoque doçura e desejo irresistível',
          description: 'Lojas de doces vendem prazer e indulgência. Seu nome deve criar desejo imediato. Considere palavras doces (Açúcar, Mel, Doce, Delícia, Gostosura), texturas (Cremoso, Crocante, Macio, Derretido), sabores (Chocolate, Caramelo, Morango), e sensações (Irresistível, Tentação, Pecado). O nome ideal faz pessoas salivarem antes de ver os produtos.',
        },
        {
          title: 'Incorpore alegria e diversão',
          description: 'Doces são sinônimo de celebração e felicidade. Nomes devem evocar alegria (Festa, Sorriso, Alegria, Felicidade), brincadeira (Magia, Encanto, Surpresa), cores (Arco-Íris, Colorido, Brilho), e celebração (Confete, Balão, Comemoração). Mesmo para marcas sofisticadas, um toque de leveza conecta com a essência de prazer que doces representam.',
        },
        {
          title: 'Considere conexão emocional e memórias',
          description: 'No Brasil, doces têm forte conexão com memórias afetivas—festas de infância, casa da avó, momentos especiais. Nomes que evocam nostalgia (Memórias, Tradição, Clássico, Antigamente), afeto (Carinho, Amor, Afeto, Ternura), e lar (Casa, Vó, Família) criam conexão emocional profunda. Considere se seu público valoriza tradição ou inovação.',
        },
        {
          title: 'Pense em presença digital e delivery',
          description: 'Docerias dependem cada vez mais de pedidos online. Seu nome deve ser fácil de encontrar no iFood e Rappi (evite nomes genéricos que se perdem), memorável para pedidos recorrentes (clientes lembram e pedem de novo), claro na comunicação (não confunde com outros tipos de negócio), e funcional em embalagens de delivery (cabe em etiquetas e sacolas). Teste digitando o nome em apps de busca.',
        },
        {
          title: 'Visualize em embalagens e apresentação',
          description: 'Doces são presentes frequentes—sua embalagem importa. Imagine o nome em caixinhas de brigadeiro elegantes, sacolas de doces para festas, etiquetas de potes de trufa, cardápios e displays de vitrine, e posts de Instagram que clientes compartilharão. O nome deve complementar a apresentação visual e parecer apetitoso impresso.',
        },
        {
          title: 'Valide e proteja sua marca doce',
          description: 'Antes de finalizar, teste com potenciais clientes do seu público-alvo, pesquise docerias existentes na sua região e em apps de delivery, verifique disponibilidade de domínio e redes sociais, e confira registro de empresas e marcas. Proteção antecipada é especialmente importante porque o mercado de doces artesanais cresceu muito e nomes bons estão sendo rapidamente ocupados.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'AçúcarEAfeto', description: 'Combina ingrediente principal com emoção—perfeito para docerias artesanais que enfatizam o amor em cada receita.' },
      { name: 'DoceEncanto', description: 'Evoca magia e irresistibilidade—ideal para lojas de doces que criam experiências mágicas para clientes.' },
      { name: 'BrigadeiroDaFelicidade', description: 'Conecta o doce brasileiro mais amado com emoção positiva—perfeito para especialistas em brigadeiros gourmet.' },
      { name: 'CantinhoDosDoces', description: 'Sugere espaço aconchegante dedicado a guloseimas—ideal para pequenas docerias de bairro com variedade.' },
      { name: 'GostosurasFinas', description: 'Combina desejo com sofisticação—perfeito para docerias gourmet e premium.' },
      { name: 'DoceFesta', description: 'Conecta doces com celebração—ideal para especialistas em docinhos para eventos e aniversários.' },
      { name: 'AçúcarMágico', description: 'Evoca transformação e encantamento—perfeito para docerias com criações surpreendentes e criativas.' },
      { name: 'TentaçãoArtesanal', description: 'Comunica desejo irresistível com qualidade handmade—ideal para doces artesanais premium.' },
      { name: 'MemóriasDoces', description: 'Conecta sabor com nostalgia—perfeito para docerias tradicionais com receitas clássicas.' },
      { name: 'PequenosPlaceres', description: 'Sugere indulgências em porções perfeitas—ideal para docinhos finos e trufas individuais.' },
      { name: 'SaborDeCasa', description: 'Evoca autenticidade caseira e conforto—perfeito para doces com sabor de receita de família.' },
      { name: 'DoçuraGourmet', description: 'Combina carinho com sofisticação culinária—ideal para docerias com ingredientes e técnicas premium.' },
      { name: 'AlegriaEmDoces', description: 'Comunica diretamente a emoção que doces proporcionam—versátil e positivo.' },
      { name: 'CasaDoBrigadeiro', description: 'Posiciona como destino especializado no doce brasileiro favorito—claro e focado.' },
      { name: 'DocinhosDaMamãe', description: 'Evoca afeto maternal e tradição—perfeito para docerias com receitas familiares tradicionais.' },
      { name: 'SweetBrasil', description: 'Combina termo internacional com identidade nacional—moderno e versátil para público jovem.' },
      { name: 'AçucareiraDeSonhos', description: 'Sugere lugar onde sonhos doces se realizam—perfeito para docerias criativas e fantásticas.' },
      { name: 'DelíciasCaseiras', description: 'Comunica sabor autêntico e produção artesanal—ideal para doces com qualidade de receita de vó.' },
      { name: 'FestaDeSabor', description: 'Conecta celebração com experiência gustativa—perfeito para doces de festa e eventos.' },
      { name: 'DocesPreciosos', description: 'Sugere valor e qualidade especial—ideal para docerias com criações únicas e ingredientes premium.' },
    ],
  },

// ==================== PORTUGUESE (pt) TRANSLATION - BATCH 3 (11-15) ====================

  'cookie': {
    slug: 'cookie',
    name: 'Gerador de Nomes para Negócios de Biscoitos',
    title: 'Gerador gratuito de ideias de nomes comerciais de Biscoitos por IA',
    description: 'Gere nomes doces e crocantes para padarias de cookies, confeitarias de biscoitos e negócios de biscoitos artesanais.',
    metaDescription: 'Crie o nome perfeito para seu negócio de biscoitos com nosso gerador gratuito por IA. Gere nomes doces e memoráveis que comunicam sabor,...',
    inputLabel: 'Descreva seu negócio de biscoitos...',
    inputPlaceholder: 'ex. Uma confeitaria de cookies americanos artesanais com recheios especiais e massa crocante por fora, macia por dentro',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Aconchegante & Caseiro', 'Gourmet & Artesanal', 'Divertido & Moderno', 'Clássico & Tradicional'],
        default: 'Aconchegante & Caseiro',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in cookie businesses, bakeries, and sweet treat establishments. Your role is to generate warm, appetizing business names that convey the homemade comfort and delicious appeal of freshly baked cookies.

COOKIE BUSINESS CONTEXT:
The cookie and biscuit industry encompasses:
- American-style cookie shops
- Traditional Brazilian biscoito bakeries
- Artisan and gourmet cookie brands
- Decorated and gift cookies
- Cookie subscription services
- Stuffed and specialty cookies
- Gluten-free and dietary cookies
- Cookie dough products
- Corporate gift cookie services
- Cookie cafes and dessert bars

NAME CHARACTERISTICS FOR COOKIE BUSINESSES:
1. **Warm and Comforting**
   - Names should evoke freshly baked goodness
   - Create sense of home and warmth
   - Suggest comfort food appeal
   - Examples: Warm, Fresh, Homemade, Cozy, Comfort

2. **Crunchy and Delicious**
   - Reference texture and taste
   - Create appetite appeal
   - Suggest irresistible quality
   - Examples: Crunchy, Crispy, Golden, Sweet, Yummy

3. **Artisan and Quality**
   - Communicate handcrafted care
   - Suggest premium ingredients
   - Appeal to quality-conscious consumers
   - Examples: Artisan, Craft, Handmade, Premium, Gourmet

4. **Playful and Memorable**
   - Cookies bring joy—names can be fun
   - Easy to remember and share
   - Appeal to all ages
   - Examples: Crumbs, Bite, Chunk, Dough, Batch

NAMING PATTERNS FOR COOKIE BUSINESSES:
**Pattern 1: Texture + Treat**
- [Texture Word] + [Cookie/Sweet Word]
- Examples: Crunchy Delights, Crispy Comfort, Golden Bites

**Pattern 2: Homemade Appeal**
- Names emphasizing fresh-baked quality
- Examples: Fresh from Oven, Grandma's Batch, Home Baked

**Pattern 3: Ingredient/Flavor Focus**
- Highlighting key flavors or ingredients
- Examples: Chocolate Chunk, Butter Bliss, Vanilla Dreams

**Pattern 4: Playful/Fun**
- Lighthearted names with personality
- Examples: Cookie Monster, Crumb Factory, Dough Zone

OUTPUT REQUIREMENTS:
For each cookie business name generated, provide:
- The business name
- A brief explanation of why it works for a cookie business

Generate names that are:
- Warm and appetizing
- Easy to remember and recommend
- Appropriate for packaging and signage
- Appealing to both children and adults
- Versatile for different cookie types

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Cookie Shop Artesanal',
        description: 'Empreendedores abrindo lojas de cookies americanos artesanais usam o Gerador de Nomes para Negócios de Biscoitos para criar uma identidade que comunica qualidade, frescor e sabor irresistível. Ao inserir detalhes sobre estilo de cookie—recheados, gotas de chocolate, decorados—a ferramenta gera nomes que atraem amantes de doces buscando cookies especiais.',
      },
      {
        title: 'Profissionalização de Negócio de Biscoitos Caseiros',
        description: 'Pessoas que fazem biscoitos caseiros para amigos e família e querem transformar em negócio usam o gerador para criar uma marca profissional. O nome certo ajuda na transição de produção caseira para empresa formal, atraindo clientes além do círculo pessoal.',
      },
      {
        title: 'Criação de Marca de Cookies para Presentes',
        description: 'Empreendedores focados em cookies decorados e embalados para presente usam o gerador para encontrar nomes que comunicam tanto sabor quanto apresentação especial. O nome deve sugerir que os cookies são perfeitos para dar de presente em ocasiões especiais.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de negócio de biscoitos/cookies?',
        answer: 'Um bom nome de negócio de cookies deve ser apetitoso e acolhedor, evocando o cheiro e sabor de biscoitos frescos do forno. Deve comunicar qualidade artesanal, ser fácil de lembrar e pronunciar, e funcionar bem em embalagens e redes sociais. Os melhores nomes criam conexão emocional com conforto e prazer.',
      },
      {
        question: 'Devo usar "cookie" ou "biscoito" no nome?',
        answer: '"Cookie" tem apelo moderno e sugere o estilo americano (maiores, macios por dentro). "Biscoito" é mais tradicional brasileiro e abrangente. Escolha baseado no seu produto: se faz cookies americanos, use "cookie"; se faz variedade de biscoitos tradicionais, "biscoito" pode ser mais adequado.',
      },
      {
        question: 'Como posso transmitir frescor e qualidade caseira?',
        answer: 'Use palavras que evocam produção recente e artesanal: Fresquinho, Quentinho, Do Forno, Feito na Hora, Artesanal, Caseiro. Referências ao processo de fazer (Massa, Forno, Assado) também comunicam que seus cookies não são industrializados.',
      },
      {
        question: 'Meu nome deve indicar o tipo de cookie que vendo?',
        answer: 'Nomes específicos (ex. "Casa do Cookie Recheado") criam clareza mas limitam expansão. Se você planeja oferecer variedade—cookies, brownies, blondies—escolha nome mais versátil. Você pode criar linhas específicas dentro de uma marca abrangente.',
      },
      {
        question: 'Nomes em inglês funcionam para cookies no Brasil?',
        answer: 'Sim, especialmente porque "cookie" já é termo popular no Brasil. Palavras como "Cookies", "Bites", "Crumbs" são bem aceitas, especialmente para público jovem e urbano. Híbridos (ex. "Cookie da Vó") combinam apelo internacional com conexão local.',
      },
      {
        question: 'Como posso parecer premium sem perder apelo caseiro?',
        answer: 'Equilibre termos gourmet (Artesanal, Premium, Selecionado) com calor caseiro (Feito com Amor, Receita de Família, Forno de Casa). Nomes como "Cookies Artesanais da Vovó" combinam qualidade premium com afeto caseiro.',
      },
      {
        question: 'Como verificar se o nome do meu negócio de cookies está disponível?',
        answer: 'Pesquise Instagram e iFood por marcas similares, verifique disponibilidade de domínio, confira registro de empresas, e procure no Google. O mercado de cookies artesanais cresceu muito—faça pesquisa completa para garantir distinção.',
      },
      {
        question: 'Posso mudar o nome do meu negócio de cookies depois?',
        answer: 'Sim, mas considere que embalagens, redes sociais, e presença em delivery apps precisarão ser atualizados. Para cookies, onde indicação é importante, manter consistência ajuda. Se mudar, faça transição clara comunicando aos clientes.',
      },
      {
        question: 'Quais erros evitar em nomes de negócios de cookies?',
        answer: 'Evite: nomes muito genéricos ("Biscoitos Maria"), grafias difíceis, nomes que não evocam apetite ou aconchego, termos muito infantilizados se você quer vender para adultos também, e nomes muito similares a marcas conhecidas de cookies.',
      },
      {
        question: 'Como meu nome pode ajudar em vendas por delivery?',
        answer: 'Para delivery, seu nome precisa ser fácil de encontrar em apps, memorável para pedidos recorrentes, e claro sobre o que você vende. Considere como aparecerá em listas de busca e se destaca entre outras opções de sobremesa.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu negócio de cookies é uma decisão que definirá como clientes percebem suas delícias crocantes por fora e macias por dentro. O nome aparecerá em embalagens que levarão alegria a lares e escritórios, em vitrines que atrairão narizes curiosos, em apps de delivery que despertarão desejos noturnos, e em recomendações de amigos que provaram seu sabor especial. Cookies são mais que biscoitos—são conforto, indulgência e memórias de momentos doces. Seu nome deve capturar essa magia e criar desejo irresistível.',
      steps: [
        {
          title: 'Defina seu estilo e posicionamento',
          description: 'Antes de gerar nomes, tenha clareza sobre seu lugar no mercado de cookies. Considere qual estilo de cookie você faz (americano macio, crocante tradicional, recheado, decorado), qual é sua proposta (gourmet premium, acessível diário, presente especial, lanche rápido), quem é seu cliente ideal (jovens, famílias, empresas, presenteadores), qual sua faixa de preço (popular, intermediário, premium), e qual seu diferencial (ingredientes especiais, tamanho, recheios únicos, apresentação). Seu nome deve refletir esse posicionamento.',
        },
        {
          title: 'Evoque calor e frescor de forno',
          description: 'A magia do cookie está no momento que sai do forno—quente, perfumado, irresistível. Seu nome deve evocar essa experiência. Considere palavras de calor (Quentinho, Forno, Assado), frescor (Fresco, Na Hora, Acabou de Sair), aroma (Perfumado, Cheiroso, Aroma), e textura (Crocante, Macio, Derrete). O nome ideal faz pessoas imaginarem o primeiro mordida em um cookie quente.',
        },
        {
          title: 'Comunique qualidade artesanal',
          description: 'Se você faz cookies artesanais, seu nome pode diferenciar de produtos industrializados. Termos de craft (Artesanal, Feito à Mão, De Verdade), ingredientes (Manteiga, Chocolate Real, Sem Conservantes), e processo (Massa Fresca, Assado na Hora, Pequenos Lotes) comunicam que cada cookie recebe atenção especial e usa ingredientes de qualidade.',
        },
        {
          title: 'Balance diversão com profissionalismo',
          description: 'Cookies são produtos alegres, mas seu negócio é sério. Nomes podem ser divertidos (Monstro do Cookie, Fábrica de Migalhas) sem parecer amadores. Evite excesso de diminutivos ou termos muito infantilizados se você também quer vender para empresas e adultos. O equilíbrio ideal é ser memorável e sorridente, mas profissional.',
        },
        {
          title: 'Considere presença em delivery e digital',
          description: 'Cookies são produtos populares em delivery. Seu nome deve funcionar bem em busca do iFood/Rappi (aparece quando buscam "cookie"?), ser memorável para pedidos recorrentes, destacar em listas de resultados, e funcionar como handle de Instagram. Teste digitando o nome em apps e redes para ver como aparece.',
        },
        {
          title: 'Visualize em embalagens e apresentação',
          description: 'Cookies são frequentemente comprados para presente ou compartilhar. Imagine seu nome em caixas de presente elegantes, sacolas para viagem, etiquetas em potes, posts de Instagram que clientes compartilharão, e cardápios de cafeterias parceiras. O nome deve complementar a estética do produto e parecer apetitoso impresso.',
        },
        {
          title: 'Valide e proteja sua marca',
          description: 'Antes de finalizar, teste com potenciais clientes perguntando que tipo de cookie imaginam, pesquise concorrentes em sua região e em apps de delivery, verifique disponibilidade de domínio e redes sociais, e confira registro de marcas. O mercado de cookies artesanais é competitivo—distinção é essencial para sucesso.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'FornoDoCookie', description: 'Evoca frescor direto do forno—perfeito para cookies artesanais que valorizam a experiência de biscoito quentinho.' },
      { name: 'CookieComAmor', description: 'Comunica afeto e dedicação em cada receita—ideal para marcas artesanais que enfatizam o carinho na produção.' },
      { name: 'MigalhasDeOuro', description: 'Sugere valor e qualidade premium—perfeito para cookies gourmet com ingredientes especiais.' },
      { name: 'DoceVício', description: 'Evoca o poder irresistível dos cookies—ideal para produtos tão bons que viciam (de forma positiva).' },
      { name: 'CookieArtesão', description: 'Combina produto internacional com craft brasileiro—perfeito para cookies premium feitos à mão.' },
      { name: 'ReceitaDaVó', description: 'Conecta com tradição familiar e autenticidade—ideal para cookies com sabor caseiro de verdade.' },
      { name: 'CrocanteDentro', description: 'Joga com a textura única do cookie perfeito—crocante por fora, macio por dentro.' },
      { name: 'BitesDeAlegria', description: 'Sugere pequenas mordidas de felicidade—perfeito para cookies que trazem sorrisos.' },
      { name: 'MassaDeSonho', description: 'Evoca a qualidade da massa que faz cookies perfeitos—ideal para marcas focadas em receita especial.' },
      { name: 'CookieLouco', description: 'Nome divertido e memorável—perfeito para marcas com cookies criativos e combinações ousadas.' },
      { name: 'ChocolateChunk', description: 'Referência ao estilo americano com pedaços grandes de chocolate—claro e apetitoso.' },
      { name: 'DoçuraCrocante', description: 'Combina sabor com textura—ideal para cookies que equilibram doçura com crocância perfeita.' },
      { name: 'CantinhoDoCookie', description: 'Evoca espaço aconchegante dedicado a cookies—perfeito para lojas físicas ou marcas que querem parecer locais.' },
      { name: 'CookieGourmet', description: 'Posiciona claramente como premium e sofisticado—ideal para cookies com ingredientes e apresentação especiais.' },
      { name: 'SaborQuente', description: 'Evoca a experiência de cookie fresco do forno—simples, direto e apetitoso.' },
      { name: 'BatchPerfeito', description: 'Sugere cada fornada feita com perfeição—perfeito para marcas que valorizam consistência e qualidade.' },
      { name: 'MeuCookie', description: 'Cria senso de posse e conexão pessoal—ideal para cookies personalizados ou que clientes consideram "seu favorito".' },
      { name: 'DoughHouse', description: 'Nome moderno em inglês que funciona bem no Brasil—perfeito para marca jovem e urbana.' },
      { name: 'CookieFeliz', description: 'Conecta produto com emoção positiva—ideal para marcas que enfatizam a alegria de comer cookies.' },
      { name: 'ArteDoBiscoito', description: 'Eleva cookie a categoria artística—perfeito para cookies decorados e visualmente impressionantes.' },
    ],
  },

  'cosmetic': {
    slug: 'cosmetic',
    name: 'Gerador de Nomes para Marcas de Cosméticos',
    title: 'Gerador gratuito de ideias de nomes comerciais de Cosméticos por IA',
    description: 'Gere nomes glamourosos e memoráveis para marcas de cosméticos, maquiagem e produtos de beleza.',
    metaDescription: 'Lance sua marca de cosméticos com o nome perfeito do nosso gerador gratuito por IA. Crie nomes glamourosos e sofisticados que comunicam...',
    inputLabel: 'Descreva sua marca de cosméticos...',
    inputPlaceholder: 'ex. Uma marca de cosméticos veganos e cruelty-free focada em maquiagem colorida e expressiva para pele negra',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Luxuoso & Sofisticado', 'Natural & Clean', 'Ousado & Expressivo', 'Minimalista & Moderno'],
        default: 'Luxuoso & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in cosmetics, beauty products, and personal care brands. Your role is to generate glamorous, sophisticated business names that convey beauty, quality, and the transformative power of cosmetics.

COSMETIC BUSINESS CONTEXT:
The cosmetics industry encompasses:
- Makeup brands (lipstick, foundation, eyeshadow)
- Skincare and facial care products
- Natural and organic cosmetics
- Vegan and cruelty-free brands
- Luxury and prestige cosmetics
- Indie and artisan beauty brands
- Color cosmetics
- Professional makeup lines
- Men's grooming products
- Inclusive beauty brands

NAME CHARACTERISTICS FOR COSMETIC BUSINESSES:
1. **Glamorous and Aspirational**
   - Names should evoke beauty and allure
   - Create desire and aspiration
   - Suggest transformative results
   - Examples: Glow, Radiance, Luxe, Divine, Enchant

2. **Quality and Sophistication**
   - Communicate premium positioning
   - Suggest high-quality ingredients
   - Appeal to discerning consumers
   - Examples: Pure, Premium, Elite, Refined, Exquisite

3. **Modern and Innovative**
   - Beauty industry is trend-driven
   - Names should feel current and fresh
   - Suggest innovation and science
   - Examples: Lab, Skin, Boost, Pro, Advanced

4. **Inclusive and Empowering**
   - Modern beauty celebrates diversity
   - Names should be welcoming
   - Suggest confidence and self-expression
   - Examples: You, Bold, True, Real, Every

NAMING PATTERNS FOR COSMETIC BRANDS:
**Pattern 1: Beauty + Quality**
- [Beauty Word] + [Quality Word]
- Examples: Glow Lab, Pure Beauty, Radiant Skin

**Pattern 2: Aspirational/Emotional**
- Names evoking feelings and aspirations
- Examples: Confidence, Allure, Divine Beauty

**Pattern 3: Scientific/Clinical**
- Suggesting research and effectiveness
- Examples: Skin Science, Beauty Lab, Derma Pro

**Pattern 4: Natural/Clean**
- Emphasizing natural ingredients
- Examples: Pure Nature, Clean Beauty, Organic Glow

OUTPUT REQUIREMENTS:
For each cosmetic brand name generated, provide:
- The business name
- A brief explanation of why it works for a cosmetics brand

Generate names that are:
- Glamorous and aspirational
- Easy to remember and pronounce
- Appropriate for luxury packaging
- Versatile across product categories
- Appealing to target demographics

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca de Maquiagem Indie',
        description: 'Empreendedoras lançando marcas independentes de maquiagem usam o Gerador de Nomes para Marcas de Cosméticos para criar uma identidade que se destaca em um mercado dominado por grandes marcas. Ao inserir valores como inclusividade, veganismo ou cores ousadas, a ferramenta gera nomes que comunicam a proposta única da marca.',
      },
      {
        title: 'Criação de Linha de Skincare',
        description: 'Empreendedores desenvolvendo linhas de cuidados com a pele usam o gerador para encontrar nomes que comunicam eficácia científica com apelo de beleza. O nome certo posiciona a marca entre resultados comprovados e experiência luxuosa de skincare.',
      },
      {
        title: 'Desenvolvimento de Marca de Cosméticos Naturais',
        description: 'Fundadores de marcas de cosméticos clean e naturais usam o gerador para criar nomes que comunicam pureza e consciência ambiental. O nome deve evocar natureza e eficácia simultaneamente, atraindo consumidores conscientes.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de marca de cosméticos?',
        answer: 'Um bom nome de marca de cosméticos é glamouroso, memorável e evoca beleza e transformação. Deve ser fácil de pronunciar em português e internacionalmente, funcionar bem em embalagens elegantes, e comunicar o posicionamento da marca—seja luxo, natural, científico ou inclusivo.',
      },
      {
        question: 'Devo usar palavras em inglês ou francês no nome?',
        answer: 'Termos em inglês (Glow, Beauty, Skin) e francês (Belle, Luxe, Noir) são comuns em cosméticos e adicionam sofisticação internacional. No entanto, nomes em português podem criar conexão local forte. Considere seu público-alvo e planos de expansão ao decidir.',
      },
      {
        question: 'Como posso comunicar que meus cosméticos são naturais/veganos?',
        answer: 'Use palavras que sugerem natureza (Botânica, Verde, Puro, Natural, Terra) e ética (Consciente, Limpo, Livre). Evite "greenwashing"—seu nome deve refletir práticas reais. Termos como "Clean Beauty" ou "Beleza Limpa" são reconhecidos pelo público consciente.',
      },
      {
        question: 'Meu nome deve funcionar para múltiplas categorias de produtos?',
        answer: 'Se você planeja expandir de maquiagem para skincare, fragrância ou cuidados capilares, escolha nome versátil. Nomes muito específicos ("Batom Bela") limitam expansão. Marcas como "Glow Lab" funcionam para qualquer categoria de beleza.',
      },
      {
        question: 'Como posso parecer premium sem ser inacessível?',
        answer: 'Use termos sofisticados mas não elitistas. "Luxe" soa premium mas acessível. Evite referências excessivas a preço ou exclusividade. Nomes que focam em resultado ("Radiance", "Glow") sugerem qualidade sem arrogância.',
      },
      {
        question: 'É importante que o nome funcione em outros idiomas?',
        answer: 'Se você planeja expansão internacional, verifique se o nome não tem significados negativos em outros idiomas. Nomes inventados (como "Lumina" ou "Dermax") geralmente viajam melhor. Teste pronúncia em inglês e espanhol minimamente.',
      },
      {
        question: 'Como verificar se o nome da minha marca de cosméticos está disponível?',
        answer: 'Pesquise marcas de cosméticos existentes (nacionais e internacionais), verifique registro de marcas no INPI, confira disponibilidade de domínio e redes sociais, e pesquise em marketplaces como Amazon e Sephora. Cosméticos são mercado global—faça pesquisa ampla.',
      },
      {
        question: 'Posso mudar o nome da minha marca de cosméticos depois?',
        answer: 'Sim, mas rebranding em cosméticos é caro—afeta embalagens, displays, materiais de marketing, presença em varejo, e todo brand equity construído. Invista tempo para escolher certo desde o início, especialmente se planeja distribuição em lojas físicas.',
      },
      {
        question: 'Quais erros evitar em nomes de marcas de cosméticos?',
        answer: 'Evite: nomes muito similares a marcas conhecidas (problemas legais), termos difíceis de pronunciar, nomes que limitam expansão de produto, qualquer coisa que soe barato ou industrial, e nomes que não fotografam bem para Instagram e embalagens.',
      },
      {
        question: 'Como meu nome pode comunicar inclusividade?',
        answer: 'Evite termos que sugiram padrão único de beleza. Palavras como "Todo", "Você", "Real", "Verdade" sugerem inclusividade. Nomes que focam em autoexpressão ("Seja Você", "Sua Cor") comunicam que a marca é para todas as pessoas.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua marca de cosméticos é uma decisão que definirá sua identidade no competitivo mundo da beleza. O nome aparecerá em embalagens luxuosas que clientes exibirão em suas penteadeiras, em campanhas de marketing que inspirarão consumidores, em prateleiras de lojas competindo com marcas estabelecidas, e em conversas de influenciadores que podem lançar tendências. Cosméticos são mais que produtos—são autoexpressão, confiança e transformação. Seu nome deve capturar essa magia e criar desejo antes mesmo do primeiro uso.',
      steps: [
        {
          title: 'Defina seu posicionamento e valores de marca',
          description: 'Antes de gerar nomes, tenha absoluta clareza sobre sua marca. Considere qual categoria de cosméticos você oferece (maquiagem, skincare, haircare, fragrância), qual é seu posicionamento (luxo, masstige, acessível, indie), quais valores definem sua marca (sustentabilidade, inclusividade, ciência, natureza), quem é seu consumidor ideal (idade, valores, estilo de vida, poder aquisitivo), e qual seu diferencial no mercado saturado de beleza. Seu nome deve ser extensão natural dessa identidade.',
        },
        {
          title: 'Evoque beleza e transformação',
          description: 'Cosméticos prometem beleza e mudança. Seu nome deve criar essa expectativa. Considere palavras de luminosidade (Glow, Radiance, Brilho, Luz), transformação (Renew, Reveal, Transform, Despertar), beleza (Beauty, Belle, Bela, Glamour), e perfeição (Flawless, Pure, Perfect, Impecável). O nome ideal cria antecipação do resultado que o produto proporcionará.',
        },
        {
          title: 'Comunique qualidade e sofisticação',
          description: 'Mesmo marcas acessíveis precisam parecer de qualidade. Termos de ciência (Lab, Science, Derm, Pro) sugerem eficácia. Referências a ingredientes premium (Botanical, Essence, Extract) comunicam formulação cuidadosa. Vocabulário de luxo (Luxe, Elite, Prestige, Maison) eleva percepção. Balance sofisticação com acessibilidade baseado no seu posicionamento.',
        },
        {
          title: 'Considere tendências e atemporalidade',
          description: 'Beleza é indústria de tendências, mas marcas precisam durar. Evite nomes que pareçam datados em poucos anos. Palavras muito "da moda" (gírias, referências pop) envelhecem rápido. Opte por nomes que pareçam modernos mas atemporais. Marcas clássicas como Chanel e Estée Lauder usam nomes que transcendem décadas.',
        },
        {
          title: 'Visualize em embalagens e marketing',
          description: 'Cosméticos são produtos visuais—seu nome precisa ficar lindo impresso. Imagine o nome em embalagens de produtos (batom, frasco de sérum, caixa), displays de loja (como aparece em prateleira?), Instagram e TikTok (funciona para hashtags?), website e e-commerce (é buscável?), e campanhas publicitárias (soa bem em vídeo?). O nome deve complementar a identidade visual.',
        },
        {
          title: 'Teste pronúncia e memorabilidade',
          description: 'Cosméticos são frequentemente recomendados verbalmente. Seu nome precisa ser fácil de dizer e lembrar. Teste dizendo em voz alta, pedindo para pessoas soletrarem após ouvir, verificando se funciona em diferentes sotaques, e confirmando que não tem sonoridade estranha ou risível. Um nome difícil de pronunciar é barreira para recomendação.',
        },
        {
          title: 'Proteja legalmente antes de investir',
          description: 'Antes de criar embalagens e marketing, proteja seu nome. Faça busca completa de marcas registradas no INPI e internacionalmente, verifique domínios e redes sociais, consulte advogado de propriedade intelectual se necessário, e registre a marca antes de lançar. Conflitos de marca em cosméticos podem ser devastadores—proteção é investimento essencial.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'LuzDaPele', description: 'Evoca luminosidade e saúde da pele—perfeito para marcas de skincare que prometem brilho natural.' },
      { name: 'BelezaConsciente', description: 'Combina apelo de beleza com responsabilidade—ideal para cosméticos sustentáveis e éticos.' },
      { name: 'GlowLab', description: 'Une resultado desejado (glow) com ciência (lab)—perfeito para marcas que equilibram eficácia e glamour.' },
      { name: 'CorViva', description: 'Celebra cores vibrantes e vida—ideal para maquiagem colorida e expressiva.' },
      { name: 'BotânicaBela', description: 'Combina natureza com beleza—perfeito para cosméticos com ingredientes naturais e botânicos.' },
      { name: 'SkinPura', description: 'Comunica limpeza e saúde da pele—ideal para skincare clean e minimalista.' },
      { name: 'TrueBeleza', description: 'Sugere autenticidade e beleza real—perfeito para marcas inclusivas que celebram diversidade.' },
      { name: 'LuxeGlow', description: 'Combina luxo com luminosidade—ideal para cosméticos premium que prometem resultados glamourosos.' },
      { name: 'BelaEssência', description: 'Evoca a essência da beleza individual—perfeito para marcas que valorizam autoexpressão.' },
      { name: 'DermaVida', description: 'Combina termo científico com vitalidade—ideal para skincare com credenciais clínicas.' },
      { name: 'RadianceNatura', description: 'Une brilho com natureza—perfeito para cosméticos naturais que não sacrificam resultados.' },
      { name: 'ConfianteBeleza', description: 'Conecta cosméticos com autoconfiança—ideal para marcas que empoderam consumidores.' },
      { name: 'SuaPele', description: 'Foco no indivíduo e personalização—perfeito para skincare personalizado ou inclusivo.' },
      { name: 'BeautyLab', description: 'Sugere inovação e ciência de beleza—ideal para marcas com foco em pesquisa e eficácia.' },
      { name: 'VerdeGlow', description: 'Combina sustentabilidade com resultado desejado—perfeito para cosméticos eco-conscientes.' },
      { name: 'MaisBela', description: 'Simples e direto sobre o resultado prometido—ideal para marcas acessíveis e claras.' },
      { name: 'SkinElite', description: 'Posiciona como premium e exclusivo—perfeito para skincare de luxo com ingredientes especiais.' },
      { name: 'PigmentoPuro', description: 'Foca na qualidade do produto de maquiagem—ideal para marcas de cor com pigmentação superior.' },
      { name: 'BelezaNua', description: 'Evoca beleza natural e autêntica—perfeito para maquiagem minimalista e "no-makeup makeup".' },
      { name: 'VivaCor', description: 'Celebra cores vibrantes e alegria—ideal para maquiagem colorida e ousada.' },
    ],
  },

  'crochet': {
    slug: 'crochet',
    name: 'Gerador de Nomes para Negócios de Crochê',
    title: 'Gerador gratuito de ideias de nomes comerciais de Crochê por IA',
    description: 'Gere nomes artesanais e acolhedores para negócios de crochê, artesanato em linha e produtos feitos à mão.',
    metaDescription: 'Crie o nome perfeito para seu negócio de crochê com nosso gerador gratuito por IA. Gere nomes artesanais e encantadores que comunicam...',
    inputLabel: 'Descreva seu negócio de crochê...',
    inputPlaceholder: 'ex. Uma marca de amigurumis artesanais e roupinhas de bebê em crochê com fios naturais',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Aconchegante & Artesanal', 'Moderno & Minimalista', 'Fofo & Lúdico', 'Elegante & Sofisticado'],
        default: 'Aconchegante & Artesanal',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in crochet businesses, yarn crafts, and handmade textile products. Your role is to generate warm, artisanal business names that convey the handcrafted love and cozy comfort of crochet creations.

CROCHET BUSINESS CONTEXT:
The crochet and yarn craft industry encompasses:
- Handmade crochet products (blankets, accessories)
- Amigurumi (crocheted stuffed toys)
- Baby items (clothes, blankets, toys)
- Home décor (pillows, baskets, rugs)
- Fashion accessories (bags, scarves, hats)
- Pattern design and sales
- Yarn and supplies retail
- Crochet classes and workshops
- Custom order services
- Wedding and event crochet

NAME CHARACTERISTICS FOR CROCHET BUSINESSES:
1. **Handcrafted and Artisanal**
   - Names should evoke handmade quality
   - Communicate care and attention
   - Suggest unique, one-of-a-kind items
   - Examples: Handmade, Crafted, Artisan, Created

2. **Cozy and Warm**
   - Crochet products provide comfort
   - Names should feel soft and inviting
   - Suggest warmth and coziness
   - Examples: Cozy, Warm, Soft, Snug, Comfort

3. **Creative and Charming**
   - Crochet is creative expression
   - Names can be whimsical and delightful
   - Appeal to craft appreciators
   - Examples: Stitch, Loop, Hook, Yarn, Thread

4. **Traditional and Modern**
   - Honor craft heritage while being fresh
   - Appeal to both traditional and contemporary tastes
   - Balance nostalgia with current trends
   - Examples: Heritage, Contemporary, Classic, Fresh

NAMING PATTERNS FOR CROCHET BUSINESSES:
**Pattern 1: Craft + Comfort**
- [Craft Word] + [Comfort Word]
- Examples: Cozy Stitches, Warm Hooks, Soft Loops

**Pattern 2: Material Focus**
- Names highlighting yarn and fiber
- Examples: Yarn Dreams, Thread Tales, Fiber Love

**Pattern 3: Whimsical/Charming**
- Playful names with personality
- Examples: Happy Hooks, Stitch Magic, Loop Love

**Pattern 4: Personal Touch**
- Names suggesting handmade with love
- Examples: Made with Love, Heart Stitched, Crafted Care

OUTPUT REQUIREMENTS:
For each crochet business name generated, provide:
- The business name
- A brief explanation of why it works for a crochet business

Generate names that are:
- Warm and inviting
- Easy to remember and spell
- Appropriate for handmade product labels
- Appealing to craft appreciators
- Versatile for different crochet products

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca de Amigurumis',
        description: 'Artesãs especializadas em amigurumis (bichinhos de crochê) usam o Gerador de Nomes para Negócios de Crochê para criar uma marca que comunica fofura, qualidade artesanal e carinho em cada peça. Ao inserir o estilo—animais, personagens, decorativos—a ferramenta gera nomes encantadores que atraem colecionadores e presenteadores.',
      },
      {
        title: 'Profissionalização de Artesã de Crochê',
        description: 'Crocheteiras que vendem informalmente para conhecidos e querem criar uma marca profissional usam o gerador para estabelecer uma identidade que justifica preços de artesanato de qualidade. O nome certo ajuda a comunicar que cada peça é obra de arte manual, não produto industrializado.',
      },
      {
        title: 'Criação de Marca de Enxoval de Bebê',
        description: 'Artesãs especializadas em enxoval de bebê em crochê usam o gerador para encontrar nomes que transmitem delicadeza, segurança e amor maternal. O nome deve comunicar que cada peça é feita com carinho para os momentos mais preciosos da vida.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de negócio de crochê?',
        answer: 'Um bom nome de negócio de crochê transmite calor, artesanato e carinho. Deve evocar a qualidade feita à mão, ser fácil de lembrar e soletrar, e comunicar a paixão pelo craft. Os melhores nomes funcionam em etiquetas de produtos e criam conexão emocional com quem valoriza artesanato.',
      },
      {
        question: 'Devo usar "crochê" no nome do meu negócio?',
        answer: 'Incluir "crochê" fornece clareza imediata, especialmente para buscas online. No entanto, se você também trabalha com tricô ou outros artesanatos têxteis, um nome mais amplo (como "Linhas do Coração") permite versatilidade. Considere se quer ser específica ou abrangente.',
      },
      {
        question: 'Como posso transmitir qualidade artesanal no nome?',
        answer: 'Use palavras que evocam produção manual e cuidado: Feito à Mão, Artesanal, Criado com Amor, Ponto a Ponto. Referências ao processo (Agulha, Linha, Ponto) também comunicam autenticidade. Evite termos que poderiam descrever produtos industrializados.',
      },
      {
        question: 'Meu nome deve refletir minha especialização (amigurumi, bebê, decoração)?',
        answer: 'Nomes específicos atraem público-alvo direto mas limitam expansão. Se você só faz amigurumis, um nome específico funciona. Se planeja diversificar, escolha nome versátil que abranja diferentes produtos de crochê. Você pode criar linhas dentro da marca.',
      },
      {
        question: 'Nomes "fofos" funcionam para negócios de crochê?',
        answer: 'Depende do seu público. Para amigurumis e produtos infantis, nomes fofos e lúdicos atraem. Para decoração sofisticada ou moda, algo mais elegante funciona melhor. Considere quem compra seus produtos—mães, decoradores, colecionadores—e adeque o tom.',
      },
      {
        question: 'Como posso parecer profissional sem perder calor artesanal?',
        answer: 'Equilibre termos de craft (Artesanal, Criações, Atelier) com profissionalismo visual (marca consistente, embalagens bonitas). Nomes como "Atelier de Linhas" ou "Studio Crochê" soam profissionais mantendo a essência artesanal.',
      },
      {
        question: 'Como verificar se o nome do meu negócio de crochê está disponível?',
        answer: 'Pesquise Instagram, Elo7, e Etsy por negócios similares, verifique disponibilidade de domínio, confira registro de empresas. Para artesanato, redes sociais são frequentemente mais importantes que website—garanta handles disponíveis.',
      },
      {
        question: 'Posso mudar o nome do meu negócio de crochê depois?',
        answer: 'Sim, mas considere que clientes de artesanato frequentemente desenvolvem relação pessoal com a marca. Mudanças afetam etiquetas em produtos já vendidos, presença online, e relacionamento com clientes fiéis. Se mudar, faça transição clara.',
      },
      {
        question: 'Quais erros evitar em nomes de negócios de crochê?',
        answer: 'Evite: nomes muito longos para etiquetas pequenas, grafias difíceis que complicam buscas, termos que não evocam aconchego ou artesanato, nomes muito infantilizados se você também vende para decoração adulta, e nomes genéricos que se perdem entre concorrentes.',
      },
      {
        question: 'Como meu nome pode ajudar em feiras e eventos de artesanato?',
        answer: 'Para feiras, seu nome precisa ser visualmente atraente em banners, fácil de lembrar após visita ao stand, e comunicar claramente o que você vende. Considere como ficará impresso em materiais e se destaca em ambiente cheio de outros artesãos.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu negócio de crochê é uma decisão que entrelaçará sua identidade com cada ponto que você der. O nome aparecerá em etiquetas costuradas em mantas que aquecerão lares, em cartões que acompanharão presentes especiais, em redes sociais que mostrarão suas criações, e em conversas de clientes encantados. Crochê é mais que artesanato—é amor transformado em linhas, tempo dedicado a criar beleza, tradição que atravessa gerações. Seu nome deve capturar essa essência e criar conexão antes mesmo de tocar suas peças.',
      steps: [
        {
          title: 'Defina sua especialidade e estilo',
          description: 'Antes de gerar nomes, tenha clareza sobre sua identidade artesanal. Considere quais produtos de crochê você faz (amigurumis, roupas, decoração, acessórios), qual é seu estilo estético (fofo, elegante, rústico, moderno, vintage), quem compra suas peças (mães, decoradores, colecionadores, presenteadores), qual sua faixa de preço (acessível, intermediário, premium), e qual seu diferencial (técnica especial, materiais naturais, designs únicos, personalização). Seu nome deve refletir essa identidade.',
        },
        {
          title: 'Evoque calor e aconchego',
          description: 'Crochê é sinônimo de conforto e acolhimento. Seu nome deve transmitir essa sensação. Considere palavras de textura (Macio, Fofo, Quentinho, Aconchego), lar (Casa, Ninho, Cantinho, Lar), cuidado (Carinho, Amor, Abraço, Afago), e conforto (Conforto, Abrigo, Refúgio). O nome ideal faz pessoas imaginarem o calor de um item de crochê bem feito.',
        },
        {
          title: 'Comunique artesanato e dedicação',
          description: 'Crochê artesanal se diferencia de produtos industrializados pelo tempo e amor investidos. Seu nome pode comunicar isso através de termos de craft (Artesanal, Feito à Mão, Criado, Trabalhado), processo (Ponto a Ponto, Linha a Linha, Agulha), dedicação (Com Amor, Com Carinho, Dedicado), e unicidade (Único, Especial, Original). Comunique que cada peça recebe atenção individual.',
        },
        {
          title: 'Considere referências técnicas com charme',
          description: 'Termos de crochê podem criar nomes charmosos: Ponto (ponto alto, baixo), Linha, Novelo, Agulha, Laçada, Carreira. Combinações como "Novelo Encantado", "Pontos de Amor" ou "Linhas do Coração" são claramente sobre crochê mas também evocativas. Use vocabulário técnico de forma poética.',
        },
        {
          title: 'Balance fofura com profissionalismo',
          description: 'Se você vende principalmente produtos fofos (amigurumis, itens de bebê), nomes lúdicos funcionam. Se também vende decoração sofisticada, equilibre. Nomes como "Ateliê de Linhas" funcionam para ambos públicos. Evite ser tão fofa que decoradores não te levem a sério, ou tão séria que compradores de amigurumis não se conectem.',
        },
        {
          title: 'Visualize em etiquetas e embalagens',
          description: 'Produtos de crochê são frequentemente presenteados. Imagine seu nome em etiquetas costuradas na peça (cabe? é legível?), cartões de presente (fica elegante?), embalagens para envio (comunica cuidado?), e posts de Instagram (é "Instagramável"?). O nome deve complementar a apresentação das suas criações.',
        },
        {
          title: 'Valide com público e proteja a marca',
          description: 'Antes de finalizar, teste com potenciais clientes do seu público-alvo, pesquise negócios de crochê similares em plataformas como Elo7 e Instagram, verifique disponibilidade de domínio e redes sociais, e considere registro de marca se planeja crescer significativamente. Um nome bem escolhido e protegido é fundamento para crescimento.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'LinhasDoCoração', description: 'Evoca amor e dedicação em cada linha trabalhada—perfeito para negócios que enfatizam o carinho artesanal.' },
      { name: 'AtelierDePontos', description: 'Combina sofisticação de atelier com técnica de crochê—ideal para marcas que querem parecer profissionais e artísticas.' },
      { name: 'NoveloEncantado', description: 'Sugere magia na transformação de linha em criação—perfeito para amigurumis e peças fantásticas.' },
      { name: 'CrochêComAlma', description: 'Comunica que cada peça tem personalidade e vida—ideal para criações únicas e personalizadas.' },
      { name: 'PontosPreciosos', description: 'Evoca valor e cuidado em cada ponto—perfeito para peças finas e trabalho detalhado.' },
      { name: 'NinhoDeCrochê', description: 'Sugere aconchego e lar—ideal para itens de decoração e produtos que criam sensação de casa.' },
      { name: 'MãosQueTecem', description: 'Foca no processo artesanal manual—perfeito para negócios que valorizam o handmade.' },
      { name: 'LinhaFeliz', description: 'Nome alegre e acessível—ideal para produtos infantis e amigurumis fofos.' },
      { name: 'ArteEmLinhas', description: 'Eleva crochê a categoria artística—perfeito para peças de design diferenciado.' },
      { name: 'QuentinhoCrochê', description: 'Evoca conforto térmico e emocional—ideal para mantas, cachecóis e itens de inverno.' },
      { name: 'CriaçõesDaVovó', description: 'Conecta com tradição familiar—perfeito para quem valoriza receitas e técnicas tradicionais.' },
      { name: 'FioDeAmor', description: 'Sugere conexão emocional através do artesanato—ideal para presentes especiais e peças personalizadas.' },
      { name: 'SoftCraft', description: 'Combina maciez com artesanato—moderno e internacional para público jovem.' },
      { name: 'EntrelaçosArte', description: 'Referência técnica poética—perfeito para trabalhos elaborados e detalhados.' },
      { name: 'AbraçoDeLinha', description: 'Evoca conforto físico e emocional—ideal para mantas, almofadas e itens aconchegantes.' },
      { name: 'MeuCrochê', description: 'Cria senso de posse e conexão pessoal—simples e direto.' },
      { name: 'PontoFofo', description: 'Combina técnica com resultado adorável—perfeito para amigurumis e produtos infantis.' },
      { name: 'LinhasNaturais', description: 'Sugere materiais orgânicos e sustentáveis—ideal para crochê com fios naturais.' },
      { name: 'CrochêArtesanal', description: 'Clareza total sobre produto e qualidade—profissional e direto.' },
      { name: 'MalhasDaAlma', description: 'Poético e profundo—perfeito para criações que expressam emoção e arte.' },
    ],
  },

  'dessert': {
    slug: 'dessert',
    name: 'Gerador de Nomes para Negócios de Sobremesas',
    title: 'Gerador gratuito de ideias de nomes comerciais de Sobremesas por IA',
    description: 'Gere nomes irresistíveis e memoráveis para confeitarias, patisseries e negócios de sobremesas.',
    metaDescription: 'Adoce seu negócio com o nome perfeito do nosso gerador gratuito por IA. Crie nomes irresistíveis para confeitarias, patisseries e negócios...',
    inputLabel: 'Descreva seu negócio de sobremesas...',
    inputPlaceholder: 'ex. Uma patisserie francesa com foco em sobremesas clássicas como macarons, éclairs e tartes',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Francês', 'Doce & Acolhedor', 'Moderno & Criativo', 'Indulgente & Luxuoso'],
        default: 'Elegante & Francês',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in dessert businesses, patisseries, and sweet establishments. Your role is to generate delicious, sophisticated business names that convey the artistry, indulgence, and sweetness of fine desserts.

DESSERT BUSINESS CONTEXT:
The dessert industry encompasses:
- French patisseries and bakeries
- Gourmet dessert shops
- Ice cream and gelato parlors
- Chocolate boutiques
- Dessert bars and cafes
- Wedding and event desserts
- Artisan sweet shops
- Specialty dietary desserts
- Dessert catering services
- Premium dessert delivery

NAME CHARACTERISTICS FOR DESSERT BUSINESSES:
1. **Indulgent and Tempting**
   - Names should evoke irresistible sweetness
   - Create desire and craving
   - Suggest decadent treats
   - Examples: Indulge, Tempt, Crave, Desire, Bliss

2. **Sophisticated and Elegant**
   - Desserts can be high art
   - Names should reflect craftsmanship
   - Appeal to refined palates
   - Examples: Maison, Atelier, Artisan, Patisserie

3. **Sweet and Delicious**
   - Core appeal of desserts
   - Names should be appetizing
   - Suggest wonderful flavors
   - Examples: Sweet, Sugar, Honey, Velvet, Cream

4. **Celebratory and Special**
   - Desserts mark occasions
   - Names can evoke celebration
   - Suggest memorable experiences
   - Examples: Celebrate, Joy, Moment, Special

NAMING PATTERNS FOR DESSERT BUSINESSES:
**Pattern 1: French/European Elegance**
- Using sophisticated European terms
- Examples: Maison Dessert, Patisserie Belle, Atelier Sucré

**Pattern 2: Indulgence Focus**
- Emphasizing decadent pleasure
- Examples: Sweet Indulgence, Decadent Dreams, Guilty Pleasures

**Pattern 3: Ingredient/Texture**
- Highlighting key elements
- Examples: Velvet & Cream, Sugar & Spice, Cocoa Dreams

**Pattern 4: Experience/Emotion**
- Focusing on how desserts make you feel
- Examples: Blissful Bites, Happy Endings, Sweet Moments

OUTPUT REQUIREMENTS:
For each dessert business name generated, provide:
- The business name
- A brief explanation of why it works for a dessert business

Generate names that are:
- Appetizing and sophisticated
- Easy to remember and recommend
- Appropriate for elegant packaging
- Versatile across dessert types
- Professional for high-end clientele

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Patisserie Francesa',
        description: 'Confeiteiros treinados em técnicas francesas abrindo patisseries usam o Gerador de Nomes para Negócios de Sobremesas para criar uma identidade que comunica sofisticação, técnica clássica e elegância européia. Ao inserir especialidades como macarons, éclairs ou tartes, a ferramenta gera nomes que atraem amantes de gastronomia refinada.',
      },
      {
        title: 'Lançamento de Dessert Bar',
        description: 'Empreendedores criando conceitos modernos de dessert bar usam o gerador para encontrar nomes que combinam indulgência com experiência contemporânea. O nome certo atrai público jovem que busca Instagram-worthy desserts em ambientes descolados.',
      },
      {
        title: 'Expansão de Menu de Confeitaria',
        description: 'Confeitarias expandindo de bolos para menu completo de sobremesas usam o gerador para criar ou renomear a marca de forma a englobar a variedade. O nome deve comunicar versatilidade enquanto mantém foco em doces premium.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de negócio de sobremesas?',
        answer: 'Um bom nome de negócio de sobremesas é apetitoso, sofisticado e memorável. Deve evocar indulgência e prazer, comunicar qualidade artesanal, e funcionar bem em embalagens elegantes. Os melhores nomes criam desejo imediato e se destacam no mercado competitivo de doces premium.',
      },
      {
        question: 'Devo usar termos em francês como "patisserie" ou "maison"?',
        answer: 'Termos franceses adicionam sofisticação e conectam com a tradição de confeitaria fina. "Patisserie", "Maison", "Atelier" são reconhecidos no Brasil. No entanto, certifique-se de que seu público entende e aprecia essas referências. Para mercados mais acessíveis, termos em português podem funcionar melhor.',
      },
      {
        question: 'Como posso parecer premium sem ser pretensioso?',
        answer: 'Balance sofisticação com calor. Use termos elegantes (Maison, Atelier) combinados com palavras acolhedoras (Doçura, Sabor, Alegria). Evite excesso de francês ou vocabulário intimidador. O ideal é parecer refinado mas convidativo.',
      },
      {
        question: 'Meu nome deve indicar o tipo de sobremesa que vendo?',
        answer: 'Nomes específicos (ex. "Casa do Macaron") criam foco mas limitam. Se você oferece variedade de sobremesas, escolha nome versátil como "Doce Atelier" que funciona para macarons, tortas, mousses e mais. Específico vs. amplo depende da sua estratégia.',
      },
      {
        question: 'Como atrair tanto eventos quanto consumo diário?',
        answer: 'Escolha nome que funcione para indulgência casual e ocasiões especiais. Evite nomes muito festivos que pareçam só para eventos, ou muito cotidianos que não sirvam para casamentos. "Momentos Doces" funciona para ambos contextos.',
      },
      {
        question: 'É importante que o nome fotografe bem para Instagram?',
        answer: 'Essencial. Sobremesas são altamente visuais e Instagram é plataforma crucial. Seu nome deve funcionar como hashtag, em etiquetas fotogênicas, e complementar a estética visual das suas criações. Considere como aparecerá em posts de clientes.',
      },
      {
        question: 'Como verificar se o nome do meu negócio de sobremesas está disponível?',
        answer: 'Pesquise Instagram, Google Maps, e apps de delivery por estabelecimentos similares, verifique disponibilidade de domínio, confira registro de empresas e marcas. O mercado de confeitaria premium está crescendo—garanta distinção.',
      },
      {
        question: 'Posso mudar o nome do meu negócio de sobremesas depois?',
        answer: 'Sim, mas rebranding em confeitaria afeta embalagens premium, presença em delivery apps, relacionamento com clientes, e todo brand equity. Para negócios com embalagens elaboradas, mudança pode ser especialmente custosa. Escolha certo desde o início.',
      },
      {
        question: 'Quais erros evitar em nomes de negócios de sobremesas?',
        answer: 'Evite: nomes muito genéricos ("Doces Delícia"), excesso de termos em francês que pareça forçado, grafias difíceis, nomes que não evocam apetite, e qualquer coisa que não funcione em embalagens elegantes ou presença digital.',
      },
      {
        question: 'Como meu nome pode justificar preços premium de sobremesas?',
        answer: 'Nomes sofisticados (Maison, Atelier, Patisserie), referências a ingredientes premium (Chocolate Belga, Frutas Frescas), e termos de arte (Criações, Obras) sugerem qualidade que justifica preço. Evite nomes que soem caseiros ou básicos se cobra preços de confeitaria fina.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu negócio de sobremesas é uma decisão que adoçará toda sua trajetória empreendedora. O nome aparecerá em embalagens elegantes que farão clientes se sentirem especiais, em vitrines que atrairão olhares gulosos, em menus de eventos que celebrarão momentos importantes, e em recomendações de quem descobriu sua arte. Sobremesas são mais que doces—são celebração, indulgência permitida, prazer dos sentidos. Seu nome deve capturar essa magia e criar desejo antes mesmo do primeiro olhar na vitrine.',
      steps: [
        {
          title: 'Defina seu estilo e posicionamento',
          description: 'Antes de gerar nomes, tenha clareza sobre sua identidade. Considere qual estilo de sobremesas você oferece (francês clássico, contemporâneo, rústico artesanal, fusion), quem é seu cliente ideal (amantes de gastronomia, festas, consumo diário, presentes), qual sua faixa de preço (premium, intermediário, acessível), quais ocasiões você atende (eventos, dia a dia, presentes corporativos), e qual seu diferencial (técnica, ingredientes, apresentação, sabores únicos). Seu nome deve ser extensão dessa identidade.',
        },
        {
          title: 'Evoque indulgência e desejo',
          description: 'Sobremesas são sobre prazer e permissão para se deliciar. Seu nome deve criar desejo imediato. Considere palavras de indulgência (Pecado, Tentação, Desejo, Prazer), doçura (Doce, Açúcar, Mel, Caramelo), textura (Cremoso, Veludo, Macio, Derrete), e satisfação (Delícia, Sabor, Êxtase). O nome ideal faz pessoas quererem provar antes mesmo de ver o produto.',
        },
        {
          title: 'Comunique sofisticação e arte',
          description: 'Confeitaria fina é forma de arte. Seu nome pode comunicar isso através de termos de craft (Atelier, Maison, Studio, Boutique), referências à tradição (Patisserie, Confiserie, Chocolaterie), artesanato (Artesanal, Criações, Obras), e elegância (Elegante, Fino, Refinado). Balance sofisticação com acessibilidade—você quer parecer especial, não intimidador.',
        },
        {
          title: 'Considere referências culturais',
          description: 'A confeitaria tem tradições ricas de diferentes culturas. Termos franceses (Maison, Atelier, Patisserie) evocam elegância clássica. Italianos (Dolce, Pasticceria) sugerem tradição mediterrânea. Portugueses mantêm conexão local. Escolha baseado no estilo das suas sobremesas e posicionamento desejado.',
        },
        {
          title: 'Visualize em embalagens e ambiente',
          description: 'Sobremesas premium requerem apresentação impecável. Imagine seu nome em caixas elegantes para viagem, vitrines refrigeradas de loja, pratos de sobremesa em restaurante, posts de Instagram que clientes farão, e cardápios de eventos sofisticados. O nome deve complementar a estética visual e parecer delicioso impresso.',
        },
        {
          title: 'Teste memorabilidade e recomendação',
          description: 'Sobremesas são frequentemente indicadas. Teste seu nome perguntando se é fácil de lembrar e pronunciar, se pessoas conseguem soletrar para pesquisar, se parece uma confeitaria de qualidade, se recomendariam para ocasiões especiais, e que tipo de sobremesas imaginam. Feedback real revela percepções importantes.',
        },
        {
          title: 'Proteja sua marca doce',
          description: 'Antes de investir em embalagens e marketing, proteja legalmente seu nome. Faça busca completa de marcas registradas, verifique domínios e redes sociais, e considere registro formal. Para negócios de sobremesas premium com embalagens elaboradas, proteção antecipada evita custos de rebranding futuros.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'MaisonSucré', description: 'Elegância francesa pura—perfeito para patisseries focadas em técnicas e sabores clássicos franceses.' },
      { name: 'DoçuraFina', description: 'Combina doçura com refinamento—ideal para confeitarias premium com sobremesas sofisticadas.' },
      { name: 'AtelierDoDoce', description: 'Posiciona como espaço de criação artística de sobremesas—perfeito para confeitaria de autor.' },
      { name: 'PecadoDoce', description: 'Evoca indulgência irresistível—ideal para sobremesas decadentes e irresistíveis.' },
      { name: 'SaborCeleste', description: 'Sugere sabores divinos e celestiais—perfeito para sobremesas que transcendem o comum.' },
      { name: 'VeludoESabor', description: 'Combina textura luxuosa com gosto—ideal para sobremesas cremosas e refinadas.' },
      { name: 'DoceElegância', description: 'Fusão direta de sabor e sofisticação—versátil para diferentes tipos de sobremesas finas.' },
      { name: 'PatisserieBelle', description: 'Nome francês acessível que comunica beleza e tradição de confeitaria.' },
      { name: 'TentaçãoDoce', description: 'Evoca desejo irresistível—perfeito para sobremesas que ninguém consegue recusar.' },
      { name: 'MomentosSucrés', description: 'Conecta sobremesas com ocasiões especiais—ideal para eventos e celebrações.' },
      { name: 'CremeDeVie', description: 'Sofisticação francesa que sugere o melhor da vida—perfeito para sobremesas de luxo.' },
      { name: 'DelíciasDeAutor', description: 'Posiciona como criação de chef—ideal para confeitaria com sobremesas exclusivas e assinadas.' },
      { name: 'SuaveEncanto', description: 'Evoca delicadeza e magia—perfeito para sobremesas leves e elegantes.' },
      { name: 'DoceBoutique', description: 'Combina doçura com exclusividade de boutique—ideal para confeitarias especializadas.' },
      { name: 'ArteEmAçúcar', description: 'Eleva confeitaria a categoria artística—perfeito para sobremesas visualmente impressionantes.' },
      { name: 'SaborSublime', description: 'Sugere gostos que transcendem—ideal para sobremesas com sabores complexos e memoráveis.' },
      { name: 'MelECanela', description: 'Evoca ingredientes reconfortantes—perfeito para sobremesas com sabor caseiro sofisticado.' },
      { name: 'FimPerfeito', description: 'Referência a sobremesa como final perfeito de refeição—ideal para dessert bars.' },
      { name: 'DoceRefúgio', description: 'Sugere escape através de sabores—perfeito para confeitarias que oferecem experiência completa.' },
      { name: 'LuxePatisserie', description: 'Posicionamento premium claro—ideal para confeitarias de alto padrão com clientela sofisticada.' },
    ],
  },

  'electronics': {
    slug: 'electronics',
    name: 'Gerador de Nomes para Lojas de Eletrônicos',
    title: 'Gerador gratuito de ideias de nomes comerciais de Eletrônicos por IA',
    description: 'Gere nomes modernos e confiáveis para lojas de eletrônicos, tecnologia e gadgets.',
    metaDescription: 'Lance sua loja de eletrônicos com o nome perfeito do nosso gerador gratuito por IA. Crie nomes modernos e confiáveis que comunicam...',
    inputLabel: 'Descreva seu negócio de eletrônicos...',
    inputPlaceholder: 'ex. Uma loja de eletrônicos focada em acessórios para smartphones e gadgets inovadores',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Moderno & Tech', 'Confiável & Profissional', 'Inovador & Futurista', 'Acessível & Amigável'],
        default: 'Moderno & Tech',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in electronics retail, technology stores, and gadget businesses. Your role is to generate modern, trustworthy business names that convey innovation, reliability, and technical expertise.

ELECTRONICS BUSINESS CONTEXT:
The electronics retail industry encompasses:
- Consumer electronics stores
- Smartphone and accessory shops
- Computer and IT equipment retailers
- Gaming and entertainment electronics
- Smart home and IoT devices
- Audio and video equipment
- Electronics repair services
- Online electronics marketplaces
- Wholesale electronics distributors
- Specialty electronics boutiques

NAME CHARACTERISTICS FOR ELECTRONICS BUSINESSES:
1. **Modern and Tech-Forward**
   - Names should feel current and innovative
   - Suggest cutting-edge technology
   - Appeal to tech enthusiasts
   - Examples: Tech, Digital, Smart, Cyber, Pixel

2. **Trustworthy and Reliable**
   - Electronics purchases require trust
   - Names should suggest dependability
   - Communicate quality assurance
   - Examples: Trust, Quality, Pro, Expert, Certified

3. **Innovative and Dynamic**
   - Technology is always evolving
   - Names should suggest progress
   - Communicate forward-thinking
   - Examples: Next, Future, Advance, Evolve, Nova

4. **Clear and Professional**
   - Customers need to understand offerings
   - Names should be professional
   - Build credibility
   - Examples: Solutions, Systems, Tech, Electronics

NAMING PATTERNS FOR ELECTRONICS BUSINESSES:
**Pattern 1: Tech + Descriptor**
- [Tech Word] + [Quality/Service Word]
- Examples: Tech Solutions, Digital Pro, Smart Store

**Pattern 2: Innovation Focus**
- Emphasizing cutting-edge offerings
- Examples: Future Tech, Next Level, Innovation Hub

**Pattern 3: Trust/Reliability**
- Building confidence in purchases
- Examples: Trusted Tech, Quality Electronics, Reliable Digital

**Pattern 4: Specialty Focus**
- Highlighting specific categories
- Examples: Gadget World, Mobile Zone, Gaming Hub

OUTPUT REQUIREMENTS:
For each electronics business name generated, provide:
- The business name
- A brief explanation of why it works for an electronics business

Generate names that are:
- Modern and tech-appropriate
- Trustworthy and professional
- Easy to remember
- Appropriate for signage and digital presence
- Versatile for different electronics categories

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Loja de Eletrônicos',
        description: 'Empreendedores abrindo lojas de eletrônicos usam o Gerador de Nomes para Lojas de Eletrônicos para criar uma identidade que transmite confiabilidade e conhecimento técnico. Ao inserir o foco da loja—smartphones, computadores, áudio, ou variedade geral—a ferramenta gera nomes que atraem clientes buscando produtos de qualidade com suporte especializado.',
      },
      {
        title: 'Lançamento de E-commerce de Tecnologia',
        description: 'Empreendedores criando lojas online de eletrônicos usam o gerador para encontrar nomes que funcionam tanto como domínio quanto como marca memorável. O nome certo ajuda a competir com grandes marketplaces transmitindo especialização e atendimento personalizado.',
      },
      {
        title: 'Especialização em Nicho Tecnológico',
        description: 'Lojas focadas em nichos específicos—gaming, smart home, áudio profissional—usam o gerador para criar nomes que comunicam expertise especializada. O nome deve atrair entusiastas do nicho enquanto permanece acessível para novatos.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de loja de eletrônicos?',
        answer: 'Um bom nome de loja de eletrônicos é moderno, confiável e profissional. Deve comunicar conhecimento técnico e qualidade dos produtos, ser fácil de lembrar e soletrar, e funcionar bem tanto em fachada física quanto em presença online. O nome ideal transmite que você entende de tecnologia e oferece produtos confiáveis.',
      },
      {
        question: 'Devo usar termos em inglês como "tech" ou "digital"?',
        answer: 'Termos em inglês são comuns e bem aceitos no setor de tecnologia brasileiro. "Tech", "Digital", "Smart", "Pro" comunicam modernidade. No entanto, nomes híbridos ou em português podem diferenciar de concorrentes. Considere seu público—geeks preferem termos técnicos, consumidores gerais apreciam clareza.',
      },
      {
        question: 'Como posso transmitir confiabilidade no nome?',
        answer: 'Use palavras que sugerem qualidade e segurança: Confiável, Qualidade, Certificado, Original, Garantido. Referências a expertise (Pro, Expert, Especialista) também constroem confiança. Evite nomes que possam parecer "genéricos" demais, o que pode sugerir produtos de qualidade duvidosa.',
      },
      {
        question: 'Meu nome deve indicar os produtos que vendo?',
        answer: 'Depende da estratégia. Nomes específicos ("Casa do Celular") são claros mas limitantes. Nomes amplos ("TechZone") permitem diversificação. Se você planeja focar em uma categoria, especificidade ajuda SEO e atração de público-alvo. Para variedade, mantenha versatilidade.',
      },
      {
        question: 'Como competir com grandes redes como Magazine Luiza ou Amazon?',
        answer: 'Diferencie através de especialização (expertise em nicho), atendimento personalizado (suporte técnico real), ou curadoria (produtos selecionados). Seu nome pode comunicar esses diferenciais—"TechExpert" sugere conhecimento que grandes redes não oferecem.',
      },
      {
        question: 'É importante que o nome funcione para e-commerce?',
        answer: 'Essencial. Mesmo lojas físicas precisam de presença online. Seu nome deve funcionar como domínio (.com.br disponível), ser fácil de digitar em busca, e não confundir com outras marcas nas pesquisas. Teste digitando no Google antes de decidir.',
      },
      {
        question: 'Como verificar se o nome da minha loja de eletrônicos está disponível?',
        answer: 'Pesquise Google, marketplaces (Mercado Livre, Amazon), e redes sociais por lojas similares, verifique disponibilidade de domínio, confira registro de empresas e marcas. Para eletrônicos, presença em comparadores de preço (Buscapé, Zoom) também deve ser considerada.',
      },
      {
        question: 'Posso mudar o nome da minha loja de eletrônicos depois?',
        answer: 'Sim, mas rebranding em varejo de eletrônicos afeta fachada, presença online, cadastro em marketplaces, e confiança construída. Clientes frequentemente buscam lojas conhecidas para compras de alto valor. Mudança deve ser bem planejada e comunicada.',
      },
      {
        question: 'Quais erros evitar em nomes de lojas de eletrônicos?',
        answer: 'Evite: nomes muito genéricos que parecem não-confiáveis, termos que podem parecer de produtos falsificados, grafias difíceis, nomes muito similares a marcas conhecidas, e qualquer coisa que não transmita profissionalismo e conhecimento técnico.',
      },
      {
        question: 'Como meu nome pode ajudar em SEO local?',
        answer: 'Para SEO local, considere incluir categoria de produto ou cidade se relevante ("TechZone São Paulo"). Nomes únicos rankeiam melhor que genéricos. Garanta que o nome funciona em buscas como "loja de celular [cidade]" e tenha presença consistente em Google Meu Negócio.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua loja de eletrônicos é uma decisão que definirá como clientes percebem sua expertise e confiabilidade no mundo da tecnologia. O nome aparecerá em fachadas que atrairão consumidores buscando as melhores ofertas, em anúncios online competindo por cliques, em comparadores de preço onde confiança é crucial, e em recomendações de clientes satisfeitos. Eletrônicos são compras de valor—consumidores precisam confiar antes de comprar. Seu nome deve construir essa confiança enquanto comunica que você entende de tecnologia.',
      steps: [
        {
          title: 'Defina seu nicho e posicionamento',
          description: 'Antes de gerar nomes, tenha clareza sobre seu lugar no mercado. Considere quais categorias de eletrônicos você vende (smartphones, computadores, áudio, gaming, geral), qual seu público-alvo (consumidores gerais, entusiastas, profissionais, empresas), como você compete (preço, variedade, expertise, atendimento), qual seu diferencial (produtos exclusivos, suporte técnico, garantia estendida), e se atua online, físico ou ambos. Seu nome deve refletir esse posicionamento.',
        },
        {
          title: 'Transmita modernidade e tecnologia',
          description: 'Lojas de eletrônicos precisam parecer atualizadas. Seu nome deve comunicar que você está por dentro das novidades. Considere termos de tecnologia (Tech, Digital, Smart, Cyber, Pixel), inovação (Nova, Future, Next, Advance), e atualidade (Atual, Trend, Now). Evite nomes que possam parecer datados ou desatualizados—em tecnologia, percepção de modernidade é fundamental.',
        },
        {
          title: 'Construa confiabilidade',
          description: 'Eletrônicos são compras de alto valor que requerem confiança. Seu nome pode construir essa confiança através de termos de qualidade (Quality, Premium, Original, Certificado), expertise (Pro, Expert, Especialista, Master), e garantia (Garantido, Seguro, Confiável). Evite nomes que possam sugerir produtos de origem duvidosa ou falta de profissionalismo.',
        },
        {
          title: 'Balance especialização e versatilidade',
          description: 'Nomes muito específicos ("Só Celulares") limitam expansão mas atraem público-alvo direto. Nomes amplos ("TechWorld") permitem diversificação mas competem com mais concorrentes. Considere sua estratégia de longo prazo. Para nichos como gaming ou áudio profissional, especialização pode ser vantagem competitiva.',
        },
        {
          title: 'Considere presença digital e e-commerce',
          description: 'Eletrônicos são categoria forte online. Seu nome deve funcionar como domínio memorável (fácil de digitar), em marketplaces (destaca entre vendedores?), em buscas Google (não confunde com outras marcas?), em redes sociais (handle disponível?), e em comparadores de preço (inspira clique?). Teste em todos esses contextos.',
        },
        {
          title: 'Visualize em fachada e marketing',
          description: 'Se terá loja física, imagine o nome em letreiro de fachada (legível, atraente?), sacolas e embalagens (profissional?), uniformes de funcionários, anúncios impressos e digitais, e cartões de visita e materiais corporativos. O nome deve parecer profissional e inspirar confiança em todos os pontos de contato.',
        },
        {
          title: 'Proteja e valide antes de investir',
          description: 'Antes de criar fachada e presença online, proteja seu nome. Faça busca completa de marcas registradas, verifique domínios (.com.br, .com), garanta handles de redes sociais, e pesquise concorrentes existentes. Para eletrônicos, onde investimento em marca é significativo, proteção antecipada é essencial.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'TechZone', description: 'Nome moderno e abrangente—perfeito para lojas de eletrônicos com variedade de produtos tecnológicos.' },
      { name: 'DigitalPro', description: 'Combina modernidade com expertise—ideal para lojas que oferecem conhecimento técnico diferenciado.' },
      { name: 'SmartStore', description: 'Sugere produtos inteligentes e loja atualizada—perfeito para smart home e gadgets modernos.' },
      { name: 'TechConfiável', description: 'Foca diretamente em confiabilidade—ideal para diferenciar de vendedores duvidosos online.' },
      { name: 'NovaEletrônica', description: 'Combina novidade com categoria clara—perfeito para lojas focadas em lançamentos e produtos recentes.' },
      { name: 'PixelTech', description: 'Referência visual moderna—ideal para lojas de celulares, TVs e produtos com foco em telas.' },
      { name: 'GadgetWorld', description: 'Posiciona como destino completo de gadgets—perfeito para acessórios e eletrônicos inovadores.' },
      { name: 'TechExpert', description: 'Comunica conhecimento técnico—ideal para lojas onde atendimento especializado é diferencial.' },
      { name: 'CyberShop', description: 'Nome moderno com apelo digital—perfeito para e-commerce ou lojas focadas em público jovem.' },
      { name: 'QualityTech', description: 'Enfatiza qualidade dos produtos—ideal para lojas que vendem apenas marcas confiáveis.' },
      { name: 'FutureTec', description: 'Sugere produtos do futuro hoje—perfeito para lojas focadas em inovação e tecnologia de ponta.' },
      { name: 'InfoStore', description: 'Combina informática com loja—clássico e profissional para equipamentos de computação.' },
      { name: 'TechPoint', description: 'Posiciona como ponto de referência em tecnologia—versátil e profissional.' },
      { name: 'ConnectEletrônicos', description: 'Sugere conectividade e produtos que conectam—ideal para smart devices e IoT.' },
      { name: 'TechNova', description: 'Combina tecnologia com novidade—perfeito para lojas que valorizam lançamentos.' },
      { name: 'DigitalBrasil', description: 'Identidade nacional com modernidade—ideal para e-commerce com alcance nacional.' },
      { name: 'GamersHub', description: 'Especializado para comunidade gamer—perfeito para lojas focadas em gaming e eSports.' },
      { name: 'AudioTech', description: 'Especialização clara em áudio—ideal para lojas de som, fones e equipamentos de áudio.' },
      { name: 'MobilePro', description: 'Foco em mobilidade e smartphones—perfeito para lojas especializadas em celulares e acessórios.' },
      { name: 'TechSoluções', description: 'Sugere que resolve problemas tecnológicos—ideal para lojas com serviço técnico agregado.' },
    ],
  },

// ==================== PORTUGUESE (pt) TRANSLATION - BATCH 4 (16-20) ====================

  'event': {
    slug: 'event',
    name: 'Gerador de Nomes para Empresas de Eventos',
    title: 'Gerador gratuito de ideias de nomes comerciais de Eventos por IA',
    description: 'Gere nomes memoráveis e profissionais para empresas de eventos, produtoras e organizadores de festas.',
    metaDescription: 'Lance sua empresa de eventos com o nome perfeito do nosso gerador gratuito por IA. Crie nomes memoráveis que comunicam celebração,...',
    inputLabel: 'Descreva sua empresa de eventos...',
    inputPlaceholder: 'ex. Uma empresa de organização de casamentos e eventos corporativos com foco em experiências personalizadas',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Sofisticado', 'Criativo & Moderno', 'Profissional & Corporativo', 'Festivo & Alegre'],
        default: 'Elegante & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in event planning, production, and celebration businesses. Your role is to generate memorable, professional business names that convey celebration, creativity, and the magic of bringing special moments to life.

EVENT BUSINESS CONTEXT:
The event planning and production industry encompasses:
- Wedding planning and coordination
- Corporate event management
- Birthday and celebration parties
- Conference and convention planning
- Festival and concert production
- Social event coordination
- Destination event planning
- Virtual and hybrid events
- Party rental and decoration services
- Catering and hospitality events

NAME CHARACTERISTICS FOR EVENT BUSINESSES:
1. **Celebratory and Memorable**
   - Names should evoke joy and celebration
   - Create sense of special occasions
   - Suggest memorable experiences
   - Examples: Celebrate, Joy, Moments, Magic, Memories

2. **Professional and Trustworthy**
   - Event planning requires reliability
   - Names should inspire confidence
   - Communicate organizational excellence
   - Examples: Premier, Elite, Professional, Expert

3. **Creative and Unique**
   - Events require creativity and imagination
   - Names should suggest innovation
   - Communicate ability to create unique experiences
   - Examples: Create, Design, Imagine, Craft, Dream

4. **Sophisticated and Elegant**
   - Many events are formal occasions
   - Names should convey elegance when appropriate
   - Appeal to discerning clients
   - Examples: Elegance, Luxe, Fine, Refined, Maison

NAMING PATTERNS FOR EVENT BUSINESSES:
**Pattern 1: Celebration + Quality**
- [Celebration Word] + [Quality Word]
- Examples: Premier Events, Elegant Celebrations, Fine Moments

**Pattern 2: Creative Focus**
- Emphasizing imagination and design
- Examples: Event Creators, Dream Makers, Occasion Design

**Pattern 3: Emotional Connection**
- Focusing on the feelings events create
- Examples: Joyful Events, Memorable Moments, Happy Occasions

**Pattern 4: Specialty Focus**
- Highlighting specific event types
- Examples: Wedding Dreams, Corporate Excellence, Party Perfect

OUTPUT REQUIREMENTS:
For each event business name generated, provide:
- The business name
- A brief explanation of why it works for an event business

Generate names that are:
- Memorable and professional
- Easy to recommend
- Appropriate for business cards and proposals
- Versatile for different event types
- Sophisticated for upscale clientele

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Empresa de Casamentos',
        description: 'Wedding planners e cerimonialistas iniciando seus negócios usam o Gerador de Nomes para Empresas de Eventos para criar uma identidade que comunica elegância, atenção aos detalhes e a capacidade de transformar o sonho do grande dia em realidade. Ao inserir o estilo—clássico, moderno, destination—a ferramenta gera nomes que atraem noivas buscando organização profissional.',
      },
      {
        title: 'Criação de Produtora de Eventos Corporativos',
        description: 'Profissionais estabelecendo empresas de eventos corporativos usam o gerador para encontrar nomes que comunicam profissionalismo, capacidade de execução e entendimento do mundo empresarial. O nome deve inspirar confiança de CEOs e departamentos de marketing que investem budgets significativos.',
      },
      {
        title: 'Expansão de Serviços de Festas',
        description: 'Organizadores de festas expandindo para eventos maiores ou mais sofisticados usam o gerador para criar ou renomear suas marcas. O nome certo permite transição de festas infantis para eventos sociais adultos ou vice-versa, mantendo versatilidade.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de empresa de eventos?',
        answer: 'Um bom nome de empresa de eventos é memorável, profissional e evoca celebração. Deve comunicar capacidade de criar experiências especiais, ser fácil de recomendar boca a boca, e funcionar bem em propostas comerciais e materiais de marketing. O nome ideal inspira confiança enquanto promete momentos inesquecíveis.',
      },
      {
        question: 'Devo especificar o tipo de evento no nome (casamentos, corporativo)?',
        answer: 'Nomes específicos como "Casamentos dos Sonhos" atraem público-alvo direto mas limitam diversificação. Se você planeja atender apenas casamentos, especificidade ajuda posicionamento. Para versatilidade, nomes como "Momentos Especiais" funcionam para qualquer tipo de evento.',
      },
      {
        question: 'Como posso parecer sofisticado para eventos de luxo?',
        answer: 'Use termos que evocam elegância: Maison, Atelier, Première, Luxe, Elite. Referências francesas ou europeias adicionam sofisticação. Evite nomes muito informais ou genéricos. Para eventos de alto padrão, o nome deve justificar investimentos premium.',
      },
      {
        question: 'Meu nome precisa ser divertido para festas ou sério para corporativo?',
        answer: 'Depende do seu foco. Para festas, nomes alegres (Celebrar, Alegria, Festa) funcionam. Para corporativo, profissionalismo é crucial (Produtora, Excellence, Prime). Para ambos, escolha algo versátil como "Eventos & Experiências" ou "Momentos Únicos".',
      },
      {
        question: 'Como transmitir confiabilidade para clientes que contratam eventos importantes?',
        answer: 'Use palavras que sugerem competência e segurança: Profissional, Expert, Especialista, Garantido. Referências a experiência (anos de mercado em descrições) e termos de qualidade (Premium, Excellence) constroem confiança. Evite nomes que possam parecer amadores.',
      },
      {
        question: 'É importante que o nome funcione em redes sociais?',
        answer: 'Essencial. Eventos são visuais e Instagram/Pinterest são plataformas cruciais. Seu nome deve funcionar como hashtag, ser fácil de marcar em fotos de eventos, e parecer bem em portfólios visuais. Considere como clientes compartilharão seu trabalho.',
      },
      {
        question: 'Como verificar se o nome da minha empresa de eventos está disponível?',
        answer: 'Pesquise Google e redes sociais por empresas similares na sua região, verifique disponibilidade de domínio, confira registro de empresas, e procure em sites de casamento (CasamentoscomBr, etc.). Para eventos, presença em diretórios especializados também importa.',
      },
      {
        question: 'Posso mudar o nome da minha empresa de eventos depois?',
        answer: 'Sim, mas considere que eventos são baseados em indicação e portfolio. Mudança afeta depoimentos de clientes anteriores, presença em diretórios, e reconhecimento construído. Se mudar, mantenha continuidade mostrando que é a mesma equipe com nova marca.',
      },
      {
        question: 'Quais erros evitar em nomes de empresas de eventos?',
        answer: 'Evite: nomes muito genéricos ("Eventos Maria"), termos datados ou muito da moda que envelhecem, grafias difíceis, nomes que limitam expansão geográfica se você planeja atender outras cidades, e qualquer coisa que não transmita profissionalismo.',
      },
      {
        question: 'Como meu nome pode ajudar a conseguir clientes corporativos?',
        answer: 'Clientes corporativos valorizam profissionalismo. Nomes com termos como "Produtora", "Grupo", "Soluções" soam empresariais. Evite nomes muito festivos ou informais para esse público. "Eventus Produtora" atrai mais corporativo que "Festas Felizes".',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua empresa de eventos é uma decisão que definirá como clientes percebem sua capacidade de criar momentos inesquecíveis. O nome aparecerá em propostas que competirão por contratos importantes, em créditos de eventos que gerarão indicações, em fotos compartilhadas por milhares de convidados, e em conversas de noivas e executivos planejando seus grandes momentos. Eventos são sobre transformar sonhos em realidade—seu nome deve capturar essa magia enquanto transmite profissionalismo e confiabilidade.',
      steps: [
        {
          title: 'Defina sua especialização e mercado-alvo',
          description: 'Antes de gerar nomes, tenha clareza sobre seu foco. Considere quais tipos de eventos você organiza (casamentos, corporativo, festas, conferências, festivais), qual seu público-alvo (noivas, empresas, famílias, organizações), qual sua faixa de preço (popular, intermediário, luxo), qual região você atende (local, regional, nacional, destination), e qual seu diferencial (criatividade, execução, personalização, nicho específico). Seu nome deve refletir esse posicionamento.',
        },
        {
          title: 'Evoque celebração e momentos especiais',
          description: 'Eventos são sobre criar memórias. Seu nome deve comunicar essa essência. Considere palavras de celebração (Celebrar, Festa, Comemorar, Brindar), momentos (Momentos, Instantes, Lembranças, Memórias), emoção (Alegria, Emoção, Encanto, Magia), e realização (Sonhos, Realizações, Conquistas). O nome ideal cria expectativa de experiências transformadoras.',
        },
        {
          title: 'Construa profissionalismo e confiança',
          description: 'Eventos requerem investimento significativo e confiança. Seu nome pode comunicar competência através de termos de qualidade (Premium, Excellence, Prime, Elite), profissionalismo (Produtora, Grupo, Consultoria), expertise (Expert, Especialista, Pro), e resultados (Sucesso, Perfeito, Impecável). Balance celebração com seriedade profissional.',
        },
        {
          title: 'Considere versatilidade vs. especialização',
          description: 'Nomes específicos ("Casamentos Encantados") atraem nicho mas limitam. Nomes amplos ("Eventos & Experiências") permitem diversificação. Se você quer ser reconhecida como a melhor em casamentos, especialize. Se quer crescer para corporativo e social, mantenha versatilidade. Considere sua visão de 5-10 anos.',
        },
        {
          title: 'Visualize em todos os pontos de contato',
          description: 'Imagine seu nome em propostas comerciais (profissional em documento PDF?), cartões de visita (elegante e legível?), créditos em fotos de eventos (bom para portfolio?), letreiros em feiras do setor, e menções em depoimentos de clientes. O nome deve funcionar perfeitamente em contextos formais e celebratórios.',
        },
        {
          title: 'Teste impacto e memorabilidade',
          description: 'Eventos dependem muito de indicação. Teste se seu nome é fácil de lembrar e recomendar, se transmite o tipo certo de evento que você faz, se soa profissional para contratos grandes, se inspira confiança em clientes investindo valores significativos, e se diferencia de concorrentes na sua região. Feedback de potenciais clientes é valioso.',
        },
        {
          title: 'Proteja sua marca antes de investir',
          description: 'Antes de criar materiais e presença online, proteja seu nome. Faça busca completa de marcas registradas, verifique domínios e redes sociais, garanta que não há conflito com empresas existentes na sua região. Para eventos, onde reputação é tudo, proteção de marca é investimento essencial.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'MomentosÚnicos', description: 'Evoca exclusividade e personalização—perfeito para empresas que criam eventos sob medida para cada cliente.' },
      { name: 'CelebraçõesDeAutor', description: 'Posiciona eventos como criações assinadas—ideal para planejadores com estilo distintivo.' },
      { name: 'EventosPremier', description: 'Comunica excelência e alto padrão—perfeito para mercado de eventos de luxo.' },
      { name: 'SonhosEmFesta', description: 'Conecta realização de sonhos com celebração—ideal para casamentos e festas especiais.' },
      { name: 'ProdutoraElegance', description: 'Combina capacidade de produção com sofisticação—perfeito para eventos corporativos e sociais de alto padrão.' },
      { name: 'MemóriasEternizadas', description: 'Foca no resultado duradouro dos eventos—ideal para casamentos e marcos importantes.' },
      { name: 'FestaCriativa', description: 'Enfatiza criatividade e originalidade—perfeito para festas temáticas e eventos diferenciados.' },
      { name: 'EventosExcellence', description: 'Posicionamento premium claro—ideal para empresa que quer atrair clientes exigentes.' },
      { name: 'ArteDeComemorar', description: 'Eleva eventos a categoria artística—perfeito para planejadores com visão estética diferenciada.' },
      { name: 'OcasiõesEspeciais', description: 'Versátil e elegante—funciona para qualquer tipo de evento importante.' },
      { name: 'CasamentosDosSonhos', description: 'Especialização clara em casamentos—perfeito para wedding planners focados.' },
      { name: 'GrupoEventus', description: 'Som corporativo e profissional—ideal para atrair clientes empresariais.' },
      { name: 'FestaPerfeita', description: 'Promete resultado impecável—perfeito para festas sociais e aniversários.' },
      { name: 'MagiaDeEventos', description: 'Evoca encantamento e surpresa—ideal para eventos que querem surpreender convidados.' },
      { name: 'AltoCelebrações', description: 'Posiciona como alto padrão—perfeito para eventos premium e sofisticados.' },
      { name: 'InstantesFelizes', description: 'Foca nos momentos de alegria criados—ideal para festas familiares e celebrações.' },
      { name: 'ProduçõesEspeciais', description: 'Comunica capacidade de produção e exclusividade—versátil e profissional.' },
      { name: 'DesignDeEventos', description: 'Enfatiza aspecto criativo e estético—perfeito para eventos visualmente impactantes.' },
      { name: 'BrindeMoments', description: 'Combina celebração com momentos especiais—moderno e memorável.' },
      { name: 'ExperiênciasÚnicas', description: 'Promete eventos que são experiências completas—ideal para eventos imersivos e diferenciados.' },
    ],
  },

  'fitness': {
    slug: 'fitness',
    name: 'Gerador de Nomes para Negócios de Fitness',
    title: 'Gerador gratuito de ideias de nomes comerciais de Fitness por IA',
    description: 'Gere nomes energéticos e motivadores para academias, studios de fitness e personal trainers.',
    metaDescription: 'Lance seu negócio fitness com o nome perfeito do nosso gerador gratuito por IA. Crie nomes energéticos e motivadores que inspiram...',
    inputLabel: 'Descreva seu negócio de fitness...',
    inputPlaceholder: 'ex. Um studio de treino funcional e HIIT focado em mulheres que querem resultados rápidos',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Energético & Motivador', 'Premium & Exclusivo', 'Acolhedor & Inclusivo', 'Intenso & Performance'],
        default: 'Energético & Motivador',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in fitness businesses, gyms, and wellness centers. Your role is to generate energetic, motivational business names that convey strength, transformation, and the pursuit of health goals.

FITNESS BUSINESS CONTEXT:
The fitness industry encompasses:
- Traditional gyms and fitness centers
- Boutique fitness studios
- CrossFit and functional training boxes
- Yoga and pilates studios
- Personal training services
- Online fitness coaching
- Sports performance centers
- Women's fitness studios
- Senior fitness programs
- Specialized fitness (martial arts, dance fitness, cycling)

NAME CHARACTERISTICS FOR FITNESS BUSINESSES:
1. **Energetic and Motivational**
   - Names should inspire action
   - Create sense of energy and vitality
   - Motivate transformation
   - Examples: Power, Energy, Drive, Push, Rise

2. **Strength and Achievement**
   - Communicate results and capability
   - Suggest physical improvement
   - Appeal to goal-oriented people
   - Examples: Strong, Fit, Peak, Elite, Champion

3. **Transformation and Progress**
   - Fitness is about change
   - Names should suggest evolution
   - Communicate journey and results
   - Examples: Transform, Evolve, Change, Progress, Results

4. **Community and Support**
   - Many seek fitness community
   - Names can suggest belonging
   - Create welcoming feeling
   - Examples: Team, Tribe, Family, Together, Unite

NAMING PATTERNS FOR FITNESS BUSINESSES:
**Pattern 1: Action + Result**
- [Action Word] + [Outcome Word]
- Examples: Power Fit, Strong Results, Peak Performance

**Pattern 2: Transformation Focus**
- Emphasizing change and progress
- Examples: Body Transform, Fitness Evolution, Change Makers

**Pattern 3: Energy/Intensity**
- High-energy, motivational names
- Examples: Pulse Fitness, Energy Zone, Power Up

**Pattern 4: Community/Identity**
- Creating sense of belonging
- Examples: Fit Tribe, Strength Family, Team Fitness

OUTPUT REQUIREMENTS:
For each fitness business name generated, provide:
- The business name
- A brief explanation of why it works for a fitness business

Generate names that are:
- Energetic and motivational
- Easy to remember and share
- Appropriate for signage and apparel
- Appealing to target fitness audience
- Versatile for different fitness services

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Academia ou Studio',
        description: 'Empreendedores abrindo academias ou studios de fitness usam o Gerador de Nomes para Negócios de Fitness para criar uma identidade que motiva e atrai alunos. Ao inserir o foco—musculação, funcional, crossfit, yoga—a ferramenta gera nomes energéticos que comunicam a experiência de treino oferecida.',
      },
      {
        title: 'Lançamento de Marca de Personal Trainer',
        description: 'Personal trainers estabelecendo suas marcas pessoais usam o gerador para criar nomes que vão além do nome próprio. O nome certo ajuda a construir uma marca que pode escalar com equipe, programas online, ou até franquia futura.',
      },
      {
        title: 'Criação de Programa de Fitness Online',
        description: 'Profissionais de fitness lançando programas digitais usam o gerador para encontrar nomes que funcionam como marca de conteúdo. O nome deve ser memorável, funcionar como hashtag, e criar comunidade de seguidores engajados.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de negócio de fitness?',
        answer: 'Um bom nome de negócio de fitness é energético, motivador e transmite transformação. Deve inspirar ação, ser fácil de lembrar e gritar (sim, pessoas mencionam sua academia em conversas), e funcionar bem em camisetas e materiais promocionais. O nome ideal cria senso de comunidade e pertencimento.',
      },
      {
        question: 'Devo usar termos em inglês como "fitness", "gym", "crossfit"?',
        answer: 'Termos em inglês são muito comuns e aceitos no setor fitness brasileiro. "Fitness", "Gym", "Training", "CrossFit" (marca registrada—cuidado), "HIIT" são bem compreendidos. Nomes híbridos combinando português e inglês também funcionam bem para público fitness.',
      },
      {
        question: 'Como posso transmitir resultados e transformação no nome?',
        answer: 'Use palavras que sugerem mudança e conquista: Transforma, Evolui, Supera, Conquista, Resultado, Performance, Peak, Elite. Evite termos passivos—fitness é sobre ação e conquista. O nome deve fazer pessoas imaginarem a versão melhorada de si mesmas.',
      },
      {
        question: 'Meu nome deve indicar o tipo de treino (funcional, musculação, yoga)?',
        answer: 'Depende da sua estratégia. Nomes específicos ("Box Funcional") atraem público-alvo direto mas limitam diversificação. Nomes amplos ("Studio Fitness") permitem oferecer múltiplas modalidades. Para nicho forte, especialize. Para versatilidade, mantenha abrangência.',
      },
      {
        question: 'Como criar senso de comunidade através do nome?',
        answer: 'Use palavras que sugerem pertencimento: Tribo, Team, Família, União, Juntos, Coletivo. Nomes que criam identidade de grupo ("Guerreiros Fitness", "Tribo Strong") fazem membros se sentirem parte de algo maior que o treino individual.',
      },
      {
        question: 'O nome deve ser agressivo/intenso ou acolhedor?',
        answer: 'Depende do público. Para atletas e quem busca performance, nomes intensos (Beast, Power, Extreme) atraem. Para público geral buscando saúde, algo mais acolhedor (Vida Fit, Bem-Estar) funciona. Para mulheres especificamente, equilibre força com feminilidade se relevante.',
      },
      {
        question: 'Como verificar se o nome do meu negócio de fitness está disponível?',
        answer: 'Pesquise Google Maps e redes sociais por academias similares na sua região, verifique disponibilidade de domínio, confira registro de empresas. Para fitness, Instagram é crucial—garanta que o handle está disponível antes de decidir.',
      },
      {
        question: 'Posso mudar o nome da minha academia depois?',
        answer: 'Sim, mas academias criam comunidade forte—membros se identificam com a marca. Mudança afeta camisetas/uniformes, fachada, presença online, e senso de pertencimento dos alunos. Se mudar, envolva a comunidade no processo para manter engajamento.',
      },
      {
        question: 'Quais erros evitar em nomes de negócios de fitness?',
        answer: 'Evite: nomes muito genéricos ("Academia Fitness"), termos negativos ou que foquem em problemas (evite referências a "gordo" ou "fraco"), grafias difíceis, nomes muito similares a grandes redes, e qualquer coisa que não funcione bem em camisetas de treino.',
      },
      {
        question: 'Como meu nome pode ajudar na retenção de alunos?',
        answer: 'Nomes que criam identidade e comunidade aumentam retenção. Quando alunos se identificam como "membros da Tribo X" ou "atletas do Box Y", a academia vira parte da identidade—não apenas local de treino. Considere como membros se referirão a si mesmos.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu negócio de fitness é uma decisão que definirá a energia e comunidade que você construirá. O nome aparecerá em fachadas que atrairão novos alunos, em camisetas que membros usarão com orgulho, em posts de redes sociais celebrando conquistas, e em conversas motivacionais que inspirarão transformação. Fitness é mais que exercício—é estilo de vida, comunidade e superação pessoal. Seu nome deve capturar essa energia e criar desejo de fazer parte do movimento.',
      steps: [
        {
          title: 'Defina seu nicho e público-alvo',
          description: 'Antes de gerar nomes, tenha clareza sobre seu posicionamento. Considere qual modalidade você oferece (musculação, funcional, crossfit, yoga, pilates, artes marciais), quem é seu público ideal (atletas, iniciantes, mulheres, terceira idade, público específico), qual atmosfera você cria (intensa e competitiva, acolhedora e suportiva, exclusiva e premium), qual sua faixa de preço (popular, intermediário, premium), e qual seu diferencial (metodologia, comunidade, resultados, localização). Seu nome deve ressoar com esse público.',
        },
        {
          title: 'Transmita energia e motivação',
          description: 'Fitness é sobre ação e movimento. Seu nome deve energizar. Considere palavras de ação (Mover, Superar, Conquistar, Acelerar, Empurrar), energia (Energia, Pulso, Força, Power, Intenso), performance (Performance, Peak, Elite, Campeão), e resultado (Resultado, Transformação, Evolução). O nome ideal faz pessoas quererem começar a treinar imediatamente.',
        },
        {
          title: 'Crie identidade e comunidade',
          description: 'Academias de sucesso são comunidades, não apenas espaços de treino. Nomes que criam identidade aumentam engajamento e retenção. Considere termos de grupo (Tribo, Team, Família, Coletivo, União), identidade (Guerreiros, Atletas, Squad, Crew), e pertencimento (Nosso, Juntos, Unidos). Membros devem sentir orgulho de fazer parte.',
        },
        {
          title: 'Balance intensidade e acessibilidade',
          description: 'Nomes muito agressivos podem intimidar iniciantes. Nomes muito suaves podem não atrair quem busca performance. Encontre o equilíbrio certo para seu público. "Power Fit" atrai performance mas acolhe. "Beast Mode" pode afastar iniciantes. "Bem-Estar Fitness" atrai saúde mas pode não motivar atletas.',
        },
        {
          title: 'Visualize em merchandising e presença',
          description: 'Academias vendem identidade—merchandising importa. Imagine seu nome em camisetas de treino (fica bom?), fachada da academia (legível e impactante?), posts de Instagram (funciona como hashtag?), garrafinhas e acessórios, e materiais promocionais. O nome deve ficar ótimo em todos os materiais da marca.',
        },
        {
          title: 'Teste apelo motivacional',
          description: 'Fitness é sobre motivação. Teste se seu nome inspira ação e movimento, cria desejo de fazer parte, soa bem quando gritado em aulas coletivas, funciona como identificação de membros ("Sou do [nome]"), e motiva compartilhamento em redes sociais. Feedback de pessoas fitness é especialmente valioso.',
        },
        {
          title: 'Proteja e estabeleça sua marca',
          description: 'Antes de investir em fachada e materiais, proteja seu nome. Faça busca de marcas registradas (cuidado especial com termos como CrossFit que são protegidos), verifique domínios e redes sociais, garanta distinção de concorrentes locais. Para academias, onde investimento em instalação é alto, proteção de marca é crucial.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'PowerUp', description: 'Evoca aumento de energia e capacidade—perfeito para academias focadas em resultado e performance.' },
      { name: 'TriboFit', description: 'Combina comunidade com fitness—ideal para academias que valorizam senso de pertencimento.' },
      { name: 'TransformBody', description: 'Foca diretamente em transformação—perfeito para academias com foco em resultados visíveis.' },
      { name: 'StudioForce', description: 'Combina sofisticação de studio com força—ideal para studios boutique de treino intenso.' },
      { name: 'PulsoFitness', description: 'Evoca vitalidade e ritmo—perfeito para aulas coletivas e treinos energéticos.' },
      { name: 'EvoluiFit', description: 'Comunica progresso contínuo—ideal para academias com metodologia progressiva.' },
      { name: 'ZonaDeForça', description: 'Delimita espaço dedicado a resultados—perfeito para musculação e treino de força.' },
      { name: 'MovimentoVida', description: 'Conecta exercício com qualidade de vida—ideal para público que busca saúde, não apenas estética.' },
      { name: 'TeamPerformance', description: 'Enfatiza trabalho em equipe e resultado—perfeito para treinos funcionais e HIIT em grupo.' },
      { name: 'AcademiaElite', description: 'Posicionamento premium claro—ideal para academias de alto padrão com público exigente.' },
      { name: 'CorpoAtivo', description: 'Simples e direto sobre objetivo—versátil para diferentes públicos e modalidades.' },
      { name: 'BoxIntensivo', description: 'Referência a espaço de treino com intensidade—perfeito para crossfit e funcional.' },
      { name: 'SuperaFitness', description: 'Foca em superação pessoal—ideal para academias que celebram conquistas individuais.' },
      { name: 'FlowYoga', description: 'Especialização clara com fluidez—perfeito para studios de yoga e práticas contemplativas.' },
      { name: 'ResultadoGarantido', description: 'Promessa direta de resultado—ideal para programas com metodologia e acompanhamento.' },
      { name: 'CoreStrength', description: 'Referência técnica a core com força—perfeito para treino funcional e pilates.' },
      { name: 'BemFitness', description: 'Conecta bem-estar com fitness—acolhedor para público que busca saúde holística.' },
      { name: 'ArenaFit', description: 'Evoca espaço de batalha e conquista—perfeito para treinos intensos e competições internas.' },
      { name: 'MoveUp', description: 'Sugere movimento ascendente e evolução—moderno e motivador.' },
      { name: 'VidaAtiva', description: 'Conecta exercício com estilo de vida—ideal para academias com proposta de bem-estar completo.' },
    ],
  },

  'flower-shop': {
    slug: 'flower-shop',
    name: 'Gerador de Nomes para Floriculturas',
    title: 'Gerador gratuito de ideias de nomes comerciais de Floricultura por IA',
    description: 'Gere nomes encantadores e elegantes para floriculturas, studios florais e serviços de entrega de flores.',
    metaDescription: 'Floresça no mercado com o nome perfeito do nosso gerador gratuito por IA. Crie nomes encantadores e elegantes para floriculturas, studios...',
    inputLabel: 'Descreva sua floricultura...',
    inputPlaceholder: 'ex. Uma floricultura boutique especializada em arranjos para casamentos e eventos com flores de estação',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Romântico & Elegante', 'Natural & Fresco', 'Moderno & Minimalista', 'Artístico & Criativo'],
        default: 'Romântico & Elegante',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in flower shops, floral design studios, and botanical businesses. Your role is to generate charming, elegant business names that convey the beauty, romance, and natural elegance of flowers.

FLOWER SHOP BUSINESS CONTEXT:
The floral industry encompasses:
- Traditional flower shops
- Boutique floral studios
- Wedding and event florists
- Flower delivery services
- Subscription flower services
- Tropical and exotic flower specialists
- Dried and preserved flower businesses
- Garden centers with floral focus
- Floral design education
- Corporate floral services

NAME CHARACTERISTICS FOR FLOWER BUSINESSES:
1. **Romantic and Elegant**
   - Flowers are associated with romance
   - Names should evoke beauty and elegance
   - Create emotional connection
   - Examples: Romance, Beauty, Elegance, Love, Charm

2. **Natural and Fresh**
   - Emphasize freshness and nature
   - Suggest beautiful blooms
   - Connect to botanical world
   - Examples: Bloom, Petal, Garden, Fresh, Botanical

3. **Artistic and Creative**
   - Floral design is art
   - Names can suggest creativity
   - Communicate design expertise
   - Examples: Design, Atelier, Studio, Create, Art

4. **Seasonal and Special**
   - Flowers mark occasions
   - Names can suggest celebration
   - Connect to special moments
   - Examples: Occasion, Celebrate, Season, Moment, Special

NAMING PATTERNS FOR FLOWER BUSINESSES:
**Pattern 1: Flower + Quality**
- [Flower Word] + [Quality Word]
- Examples: Bloom Beautiful, Petal Perfect, Fresh Flora

**Pattern 2: Romantic/Emotional**
- Names evoking feelings flowers inspire
- Examples: Love in Bloom, Garden of Romance, Flower Dreams

**Pattern 3: Artistic/Studio Focus**
- Emphasizing design and creativity
- Examples: Floral Atelier, Bloom Studio, Petal Design

**Pattern 4: Nature/Garden**
- Connecting to natural beauty
- Examples: Secret Garden, Nature's Bouquet, Wild Blooms

OUTPUT REQUIREMENTS:
For each flower business name generated, provide:
- The business name
- A brief explanation of why it works for a flower business

Generate names that are:
- Romantic and elegant
- Easy to remember
- Appropriate for elegant packaging
- Versatile for different occasions
- Professional for weddings and events

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Floricultura Boutique',
        description: 'Floristas abrindo floriculturas diferenciadas usam o Gerador de Nomes para Floriculturas para criar uma identidade que comunica arte, beleza e exclusividade. Ao inserir o estilo—romântico, moderno, rústico, tropical—a ferramenta gera nomes encantadores que atraem clientes buscando flores especiais.',
      },
      {
        title: 'Lançamento de Serviço de Flores para Casamentos',
        description: 'Floristas especializando em casamentos usam o gerador para criar marcas que comunicam romantismo e capacidade de transformar sonhos em realidade floral. O nome certo atrai noivas buscando decoração floral inesquecível para o grande dia.',
      },
      {
        title: 'Criação de Serviço de Assinatura de Flores',
        description: 'Empreendedores lançando serviços de flores por assinatura usam o gerador para encontrar nomes que comunicam frescor recorrente e alegria constante. O nome deve sugerir surpresa e prazer regular, não apenas compra única.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de floricultura?',
        answer: 'Um bom nome de floricultura é encantador, elegante e evoca a beleza natural das flores. Deve comunicar frescor, arte floral, e conexão emocional. O nome ideal funciona tanto para compras do dia a dia quanto para ocasiões especiais como casamentos, criando desejo e confiança.',
      },
      {
        question: 'Devo usar nomes de flores específicas no nome?',
        answer: 'Nomes de flores (Rosa, Lírio, Orquídea) podem funcionar se você se especializa nessa flor. No entanto, podem limitar percepção se você oferece variedade. Nomes mais genéricos como "Bloom", "Pétalas", "Jardim" permitem maior flexibilidade.',
      },
      {
        question: 'Como posso parecer sofisticado para casamentos de luxo?',
        answer: 'Use termos que evocam elegância: Atelier, Studio, Maison, Boutique. Referências francesas adicionam sofisticação. Evite nomes muito cotidianos ou informais. Para mercado de luxo, o nome deve justificar investimentos premium em decoração floral.',
      },
      {
        question: 'Meu nome deve indicar que faço eventos ou entregas?',
        answer: 'Depende do seu foco. Se eventos são seu negócio principal, mencionar pode ajudar (ex. "Flora Eventos"). Para versatilidade, nomes como "Atelier Floral" funcionam para varejo, eventos e entregas sem limitação.',
      },
      {
        question: 'Como transmitir frescor e qualidade no nome?',
        answer: 'Use palavras que sugerem vitalidade e natureza: Fresco, Vivo, Jardim, Bloom, Natural. Referências à origem (Do Campo, Da Fazenda) também comunicam frescor. Evite nomes que possam soar artificiais ou industriais.',
      },
      {
        question: 'É importante que o nome funcione para entregas?',
        answer: 'Se delivery é parte do seu negócio, o nome deve ser fácil de lembrar e digitar para pedidos online. Nomes muito longos ou difíceis de soletrar complicam pedidos. Considere como aparecerá em apps de entrega e buscas.',
      },
      {
        question: 'Como verificar se o nome da minha floricultura está disponível?',
        answer: 'Pesquise Google Maps e redes sociais por floriculturas similares, verifique disponibilidade de domínio, confira registro de empresas. Para floriculturas, Instagram é crucial para portfolio visual—garanta handle disponível.',
      },
      {
        question: 'Posso mudar o nome da minha floricultura depois?',
        answer: 'Sim, mas floriculturas constroem reconhecimento local forte. Mudança afeta fachada, presença online, relacionamento com clientes de casamentos que indicam, e todo material visual. Para eventos, onde portfolio importa, mantenha continuidade.',
      },
      {
        question: 'Quais erros evitar em nomes de floriculturas?',
        answer: 'Evite: nomes muito genéricos ("Floricultura Maria"), termos que não evocam beleza ou natureza, grafias difíceis, nomes muito similares a floriculturas conhecidas, e qualquer coisa que não funcione bem em embalagens elegantes de flores.',
      },
      {
        question: 'Como meu nome pode atrair clientes de casamento?',
        answer: 'Noivas buscam romantismo e confiança. Nomes elegantes (Atelier, Bouquet, Bloom) atraem. Evite nomes muito cotidianos ou comerciais. Presença visual em redes sociais com o nome é fundamental—noivas pesquisam muito antes de escolher.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua floricultura é uma decisão que florescerá em todos os momentos especiais que você ajudará a criar. O nome aparecerá em buquês que comunicarão amor, em decorações que transformarão casamentos em contos de fadas, em arranjos que alegrarão escritórios e lares, e em embalagens que farão entregas se tornarem presentes memoráveis. Flores são poesia visual—seu nome deve capturar essa beleza e criar encantamento antes mesmo do primeiro perfume.',
      steps: [
        {
          title: 'Defina seu estilo e especialização',
          description: 'Antes de gerar nomes, tenha clareza sobre sua identidade floral. Considere qual estilo de arranjos você faz (clássico romântico, moderno minimalista, rústico campestre, tropical exótico), quais ocasiões você atende (casamentos, corporativo, dia a dia, todas), quem é seu cliente ideal (noivas, empresas, presenteadores, amantes de flores), qual sua faixa de preço (popular, intermediário, luxo), e qual seu diferencial (flores de estação, design autoral, flores raras, sustentabilidade). Seu nome deve refletir essa identidade.',
        },
        {
          title: 'Evoque beleza natural e romance',
          description: 'Flores são naturalmente belas e românticas. Seu nome deve capturar essa essência. Considere palavras de natureza (Jardim, Pétala, Bloom, Flor, Botânica), beleza (Bela, Encanto, Charme, Graça), romance (Amor, Romance, Sonho, Desejo), e frescor (Fresco, Vivo, Natural, Puro). O nome ideal cria imagem mental de flores deslumbrantes.',
        },
        {
          title: 'Comunique arte e expertise floral',
          description: 'Design floral é forma de arte. Seu nome pode comunicar isso através de termos de criação (Atelier, Studio, Design, Arte), expertise (Artisan, Mestre, Expert), e curadoria (Selecionado, Especial, Curado). Posicione-se não apenas como vendedor de flores, mas como artista que transforma flores em experiências.',
        },
        {
          title: 'Balance elegância e acessibilidade',
          description: 'Nomes muito sofisticados podem intimidar compradores casuais. Nomes muito simples podem não atrair clientes de casamento de luxo. Encontre equilíbrio baseado no seu público principal. "Atelier Floral" é elegante mas não inacessível. "Flores da Maria" é acessível mas pode não atrair luxo.',
        },
        {
          title: 'Visualize em embalagens e presença',
          description: 'Flores são presentes visuais—apresentação importa. Imagine seu nome em fitas de buquê elegantes, cartões que acompanham arranjos, fachada da loja (atraente?), posts de Instagram (compartilhável?), e site e materiais de casamento. O nome deve complementar a beleza das flores que você cria.',
        },
        {
          title: 'Teste apelo emocional',
          description: 'Flores são compradas para expressar emoções. Teste se seu nome evoca sentimentos positivos, parece apropriado para todas as ocasiões (amor, pêsames, celebração), cria desejo de ter flores dessa floricultura, soa profissional para eventos, e inspira confiança para ocasiões importantes. Feedback de clientes potenciais é valioso.',
        },
        {
          title: 'Proteja e estabeleça sua marca floral',
          description: 'Antes de criar materiais e presença, proteja seu nome. Faça busca de marcas registradas, verifique domínios e redes sociais, garanta distinção de concorrentes locais. Para floriculturas focadas em casamentos, onde portfolio e reputação são cruciais, proteção de marca desde o início é investimento sábio.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'AtelierFloral', description: 'Posiciona como espaço de criação artística de flores—perfeito para design floral sofisticado e casamentos.' },
      { name: 'PétalasDeSonho', description: 'Evoca romantismo e fantasia—ideal para floriculturas focadas em casamentos e ocasiões especiais.' },
      { name: 'JardimSecreto', description: 'Sugere descoberta e encanto—perfeito para floriculturas boutique com seleção especial.' },
      { name: 'BloomStudio', description: 'Combina florescimento com criação—moderno e elegante para design floral contemporâneo.' },
      { name: 'FloresDaEstação', description: 'Comunica frescor e variedade sazonal—ideal para floriculturas que valorizam flores locais e de época.' },
      { name: 'RosasEAmor', description: 'Romance direto e clássico—perfeito para floriculturas focadas em presentes românticos.' },
      { name: 'BuquêEncantado', description: 'Sugere magia e beleza—ideal para arranjos especiais e celebrações.' },
      { name: 'VerdeVivo', description: 'Enfatiza frescor e natureza—perfeito para floriculturas com foco em plantas e folhagens.' },
      { name: 'FloralDesign', description: 'Profissional e contemporâneo—ideal para estúdios focados em eventos e decoração.' },
      { name: 'MaisonFleur', description: 'Elegância francesa sofisticada—perfeito para floriculturas de alto padrão.' },
      { name: 'CampoFlorido', description: 'Evoca naturalidade e abundância—ideal para estilo rústico e campestre.' },
      { name: 'ArteEmFlores', description: 'Eleva flores a categoria artística—perfeito para designers florais com estilo autoral.' },
      { name: 'PrimaveraSempre', description: 'Sugere frescor e renovação constante—ideal para assinaturas e entregas recorrentes.' },
      { name: 'FloristaBoutique', description: 'Combina especialização com exclusividade—versátil e profissional.' },
      { name: 'BelasFlores', description: 'Simples e direto sobre beleza—acessível e memorável.' },
      { name: 'JardimDaNoiva', description: 'Especialização clara em casamentos—perfeito para floristas focados em matrimônios.' },
      { name: 'NaturalBloom', description: 'Enfatiza naturalidade e florescimento—ideal para estilo orgânico e sustentável.' },
      { name: 'PerfumeDeFlor', description: 'Evoca experiência sensorial completa—perfeito para floriculturas que valorizam flores aromáticas.' },
      { name: 'FloresComAlma', description: 'Sugere conexão emocional e dedicação—ideal para floricultura com atendimento personalizado.' },
      { name: 'BotânicaBela', description: 'Combina conhecimento botânico com beleza—perfeito para especialistas em flores raras e especiais.' },
    ],
  },

  'food': {
    slug: 'food',
    name: 'Gerador de Nomes para Negócios de Alimentação',
    title: 'Gerador gratuito de ideias de nomes comerciais de Alimentação por IA',
    description: 'Gere nomes apetitosos e memoráveis para restaurantes, lanchonetes e negócios de comida.',
    metaDescription: 'Crie o nome perfeito para seu negócio de alimentação com nosso gerador gratuito por IA. Gere nomes apetitosos e memoráveis para...',
    inputLabel: 'Descreva seu negócio de alimentação...',
    inputPlaceholder: 'ex. Um restaurante de comida brasileira contemporânea com ingredientes locais e apresentação moderna',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Aconchegante & Caseiro', 'Moderno & Gourmet', 'Divertido & Descolado', 'Tradicional & Autêntico'],
        default: 'Aconchegante & Caseiro',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in food businesses, restaurants, and culinary establishments. Your role is to generate appetizing, memorable business names that convey deliciousness, quality, and the unique dining experience each establishment offers.

FOOD BUSINESS CONTEXT:
The food industry encompasses:
- Restaurants (casual to fine dining)
- Fast food and quick service
- Cafes and bistros
- Food trucks and street food
- Catering services
- Meal prep and delivery
- Specialty food stores
- Bakeries and delis
- Ethnic and regional cuisines
- Health and diet-focused establishments

NAME CHARACTERISTICS FOR FOOD BUSINESSES:
1. **Appetizing and Tempting**
   - Names should make people hungry
   - Create desire and craving
   - Suggest delicious experiences
   - Examples: Tasty, Delicious, Yummy, Savory, Fresh

2. **Authentic and Quality**
   - Communicate food quality
   - Suggest genuine ingredients
   - Build trust in what you serve
   - Examples: Real, True, Honest, Quality, Fresh

3. **Memorable and Distinctive**
   - Stand out in crowded market
   - Easy to remember and recommend
   - Create unique identity
   - Examples: Unique names, wordplay, creative combinations

4. **Appropriate to Cuisine/Style**
   - Match the type of food served
   - Reflect dining atmosphere
   - Appeal to target customers
   - Examples: Regional terms, cultural references, style indicators

NAMING PATTERNS FOR FOOD BUSINESSES:
**Pattern 1: Ingredient/Dish Focus**
- Names highlighting key offerings
- Examples: The Grill House, Pasta Palace, Fresh Catch

**Pattern 2: Experience/Atmosphere**
- Emphasizing dining experience
- Examples: Cozy Kitchen, Family Table, Good Times Grill

**Pattern 3: Quality/Authenticity**
- Building trust in food quality
- Examples: Real Food Co., Honest Eats, True Kitchen

**Pattern 4: Creative/Playful**
- Fun, memorable names
- Examples: Fork Yeah, Bite Me, Belly Full

OUTPUT REQUIREMENTS:
For each food business name generated, provide:
- The business name
- A brief explanation of why it works for a food business

Generate names that are:
- Appetizing and memorable
- Easy to pronounce and spell
- Appropriate for signage and menus
- Versatile for branding
- Appealing to target audience

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Restaurante',
        description: 'Chefs e empreendedores abrindo restaurantes usam o Gerador de Nomes para Negócios de Alimentação para criar uma identidade que comunica o tipo de culinária e experiência oferecida. Ao inserir o estilo—comida brasileira, italiana, contemporânea, comfort food—a ferramenta gera nomes apetitosos que atraem o público certo.',
      },
      {
        title: 'Lançamento de Negócio de Delivery',
        description: 'Empreendedores criando marcas focadas em delivery usam o gerador para encontrar nomes que funcionam perfeitamente em apps de entrega. O nome deve ser memorável em listas de resultados, fácil de digitar, e sugerir a comida antes mesmo de ver o menu.',
      },
      {
        title: 'Criação de Marca de Comida Saudável',
        description: 'Negócios focados em alimentação saudável, fit ou plant-based usam o gerador para criar nomes que comunicam saúde sem parecer sem graça. O nome deve atrair quem busca opções melhores enquanto promete sabor e satisfação.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome de negócio de alimentação?',
        answer: 'Um bom nome de negócio de alimentação é apetitoso, memorável e comunica o tipo de comida ou experiência oferecida. Deve fazer pessoas com fome, ser fácil de lembrar e recomendar, e funcionar bem em fachadas, cardápios e apps de delivery.',
      },
      {
        question: 'Meu nome deve indicar o tipo de comida que sirvo?',
        answer: 'Depende da estratégia. Nomes específicos ("Cantina Italiana") são claros mas limitantes. Nomes abstratos ("Mesa Posta") permitem flexibilidade de cardápio. Para delivery, clareza ajuda buscas. Para restaurantes conceituais, versatilidade pode ser valiosa.',
      },
      {
        question: 'Como posso transmitir qualidade e frescor no nome?',
        answer: 'Use palavras que sugerem ingredientes frescos e preparo cuidadoso: Fresco, Natural, Feito na Hora, Do Dia, Artesanal. Referências à origem (Do Campo, Da Fazenda, Regional) também comunicam autenticidade e qualidade.',
      },
      {
        question: 'Nomes engraçados funcionam para restaurantes?',
        answer: 'Nomes divertidos podem ser memoráveis e virais, mas considere seu público. Para casual dining e público jovem, humor funciona. Para fine dining ou público tradicional, elegância é mais apropriada. O nome deve combinar com a experiência.',
      },
      {
        question: 'Como criar um nome que funciona para delivery?',
        answer: 'Para delivery, o nome precisa se destacar em listas de apps, ser fácil de encontrar em buscas, sugerir o tipo de comida rapidamente, e ser memorável para pedidos recorrentes. Nomes curtos e claros performam melhor em apps.',
      },
      {
        question: 'Devo usar meu nome pessoal no restaurante?',
        answer: 'Nomes pessoais ("Cantina do Zé") criam conexão e funcionam para negócios onde o chef/dono é a estrela. No entanto, podem complicar venda futura ou expansão. Para franquias ou múltiplas unidades, nomes de marca funcionam melhor.',
      },
      {
        question: 'Como verificar se o nome do meu restaurante está disponível?',
        answer: 'Pesquise Google Maps, TripAdvisor, e apps de delivery por restaurantes similares, verifique disponibilidade de domínio, confira registro de empresas, e procure em redes sociais. Para alimentação, presença em apps de delivery é tão importante quanto presença física.',
      },
      {
        question: 'Posso mudar o nome do meu restaurante depois?',
        answer: 'Sim, mas rebranding em alimentação é complexo—afeta cardápios, fachada, presença em delivery apps, avaliações existentes, e toda comunicação. Clientes regulares podem se confundir. Se mudar, comunique bem e mantenha qualidade.',
      },
      {
        question: 'Quais erros evitar em nomes de negócios de alimentação?',
        answer: 'Evite: nomes muito genéricos que se perdem, grafias difíceis que complicam buscas e pedidos, nomes que não evocam apetite, referências negativas acidentais, e nomes muito longos para cardápios e apps.',
      },
      {
        question: 'Como meu nome pode ajudar em avaliações online?',
        answer: 'Nomes únicos e memoráveis são mais fáceis de encontrar e avaliar. Evite nomes muito comuns que confundem buscas. Um nome distintivo ajuda clientes a encontrar você em Google, TripAdvisor e iFood para deixar avaliações positivas.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu negócio de alimentação é uma decisão que temperará todo seu sucesso gastronômico. O nome aparecerá em fachadas que atrairão passantes famintos, em cardápios que despertarão apetite, em apps de delivery que competirão por cliques, e em conversas de amigos compartilhando descobertas deliciosas. Comida é prazer, memória e conexão—seu nome deve abrir o apetite antes mesmo do primeiro aroma.',
      steps: [
        {
          title: 'Defina seu conceito e posicionamento',
          description: 'Antes de gerar nomes, tenha clareza sobre sua identidade gastronômica. Considere qual tipo de comida você serve (brasileira, italiana, japonesa, fusion, comfort food), qual experiência você oferece (casual, gourmet, fast, familiar), quem é seu cliente ideal (jovens, famílias, executivos, foodies), qual seu diferencial (ingredientes, técnica, ambiente, preço), e como você quer ser percebido (tradicional, moderno, divertido, sofisticado). Seu nome deve ser extensão dessa identidade.',
        },
        {
          title: 'Crie apetite e desejo',
          description: 'Negócios de alimentação vendem prazer sensorial. Seu nome deve fazer pessoas quererem comer. Considere palavras de sabor (Saboroso, Delícia, Tempero, Sabor), frescor (Fresco, Natural, Do Dia, Horta), satisfação (Fartura, Cheio, Satisfeito), e prazer (Gostoso, Irresistível, Divino). O nome ideal faz o estômago roncar.',
        },
        {
          title: 'Comunique autenticidade e qualidade',
          description: 'Clientes querem comida de verdade. Seu nome pode comunicar isso através de termos de origem (Do Campo, Da Fazenda, Regional, Local), processo (Caseiro, Artesanal, Feito na Hora, Tradicional), ingredientes (Natural, Orgânico, Fresco, Puro), e honestidade (Real, Verdadeiro, Autêntico, Genuíno). Construa confiança no que serve.',
        },
        {
          title: 'Balance clareza e criatividade',
          description: 'Nomes muito descritivos ("Pizzaria do João") são claros mas comuns. Nomes muito abstratos podem confundir. O equilíbrio ideal sugere o tipo de comida de forma criativa. "Massa Madre" sugere pão/massa artesanal criativamente. "Fogo & Brasa" evoca churrasco sem ser literal.',
        },
        {
          title: 'Considere presença em delivery e digital',
          description: 'Delivery é essencial para alimentação moderna. Seu nome deve aparecer bem em listas de apps (curto, claro), ser fácil de buscar (sem confusão com outros), funcionar como hashtag no Instagram, e ser memorável para pedidos recorrentes. Teste como aparece no iFood e Rappi antes de decidir.',
        },
        {
          title: 'Visualize em todos os pontos de contato',
          description: 'Imagine seu nome em fachada do restaurante (atraente para passantes?), cardápios físicos e digitais, uniformes de funcionários, embalagens de delivery, e avaliações online (fácil de encontrar?). O nome deve funcionar perfeitamente em todos esses contextos.',
        },
        {
          title: 'Proteja antes de investir',
          description: 'Antes de criar fachada e presença, proteja seu nome. Faça busca de marcas registradas, verifique domínios e redes sociais, garanta distinção de concorrentes. Para restaurantes, onde investimento em instalação é significativo, proteção de marca é essencial.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'SaborDaCasa', description: 'Evoca comida caseira e acolhedora—perfeito para restaurantes que valorizam receitas tradicionais.' },
      { name: 'MesaFarta', description: 'Sugere abundância e satisfação—ideal para restaurantes com porções generosas.' },
      { name: 'TemperoNosso', description: 'Comunica identidade brasileira e sabor único—versátil para culinária regional.' },
      { name: 'FrescorNaMesa', description: 'Enfatiza ingredientes frescos—perfeito para comida saudável e natural.' },
      { name: 'FogoEBrasa', description: 'Evoca grelha e churrasco—ideal para carnes e preparos na brasa.' },
      { name: 'CantinhoDoPaladar', description: 'Sugere descoberta de sabores—perfeito para restaurantes intimistas.' },
      { name: 'SaborAutêntico', description: 'Promete comida verdadeira—ideal para culinária tradicional sem atalhos.' },
      { name: 'PanelaDaMamãe', description: 'Evoca comfort food e tradição familiar—perfeito para comida caseira.' },
      { name: 'GourmetUrbano', description: 'Combina sofisticação com acessibilidade urbana—ideal para casual dining moderno.' },
      { name: 'RaízesESabores', description: 'Conecta tradição com prazer gustativo—perfeito para culinária regional autoral.' },
      { name: 'DelíciaExpress', description: 'Combina sabor com rapidez—ideal para fast casual e delivery.' },
      { name: 'AromaDaCozinha', description: 'Evoca experiência sensorial completa—perfeito para restaurantes com cozinha aberta.' },
      { name: 'ComidaDeVerdade', description: 'Promessa direta de autenticidade—ideal para movimentos slow food e natural.' },
      { name: 'FogãoAceso', description: 'Sugere preparo constante e cozinha ativa—perfeito para restaurantes tradicionais.' },
      { name: 'SaborLocal', description: 'Enfatiza ingredientes e identidade regional—ideal para farm-to-table.' },
      { name: 'PratoCheio', description: 'Promete satisfação e generosidade—perfeito para restaurantes com boas porções.' },
      { name: 'CozinhaAberta', description: 'Sugere transparência e frescor—ideal para conceitos com preparo à vista.' },
      { name: 'GulaGourmet', description: 'Combina indulgência com qualidade—perfeito para comfort food premium.' },
      { name: 'SaborEmCasa', description: 'Evoca delivery que traz qualidade de restaurante—ideal para dark kitchens.' },
      { name: 'MesaBoa', description: 'Simples e convidativo—versátil para diferentes tipos de culinária.' },
    ],
  },

  'funny': {
    slug: 'funny',
    name: 'Gerador de Nomes Divertidos para Negócios',
    title: 'Gerador gratuito de ideias de nomes comerciais de Divertidos por IA',
    description: 'Gere nomes engraçados, criativos e memoráveis que fazem seu negócio se destacar com humor.',
    metaDescription: 'Destaque seu negócio com um nome engraçado e memorável do nosso gerador gratuito por IA. Crie nomes divertidos que viralizam, atraem...',
    inputLabel: 'Descreva seu negócio e o tom de humor desejado...',
    inputPlaceholder: 'ex. Uma barbearia descolada para homens modernos que querem um nome que faça rir e seja memorável',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo de humor',
        choices: ['Trocadilho Inteligente', 'Irreverente & Ousado', 'Fofo & Engraçado', 'Criativo & Surpreendente'],
        default: 'Trocadilho Inteligente',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in creative, humorous, and memorable business names. Your role is to generate clever, funny names that make businesses stand out through wit, wordplay, and personality while remaining appropriate and professional.

FUNNY BUSINESS NAME CONTEXT:
Humorous names work for many industries:
- Food and beverage (pun-based restaurant names)
- Personal services (barbershops, salons, pet grooming)
- Retail (quirky boutiques, gift shops)
- Entertainment (comedy clubs, gaming venues)
- Creative services (design, marketing agencies)
- Pet-related businesses
- Casual dining and bars
- Fitness with personality
- Food trucks and casual eateries

NAME CHARACTERISTICS FOR FUNNY BUSINESSES:
1. **Clever Wordplay**
   - Puns that make people smile
   - Double meanings that are relevant
   - Pop culture references
   - Examples: "Curl Up & Dye" (salon), "Lawn & Order" (landscaping)

2. **Memorable and Shareable**
   - Names that people want to tell others
   - Conversation starters
   - Social media friendly
   - Examples: Names people photograph and share

3. **Appropriate Irreverence**
   - Edgy but not offensive
   - Playful not vulgar
   - Bold but still professional
   - Examples: Pushing boundaries tastefully

4. **Industry Relevance**
   - Humor should connect to business
   - The joke should make sense
   - Clever but clear about what you do
   - Examples: Puns using industry terms

NAMING PATTERNS FOR FUNNY BUSINESSES:
**Pattern 1: Puns and Wordplay**
- Clever word substitutions
- Examples: "Bread Pitt" (bakery), "Thai Tanic" (Thai restaurant)

**Pattern 2: Pop Culture References**
- Movie, music, book references
- Examples: "Lord of the Fries", "Brewed Awakening"

**Pattern 3: Self-Deprecating/Ironic**
- Humble humor that charms
- Examples: "Average Joe's", "Nothing Fancy Cafe"

**Pattern 4: Unexpected Combinations**
- Surprising word pairings
- Examples: "Ninja Tacos", "Philosophical Plumbers"

OUTPUT REQUIREMENTS:
For each funny business name generated, provide:
- The business name
- A brief explanation of the humor/wordplay and why it works

Generate names that are:
- Genuinely funny or clever
- Memorable and shareable
- Still professional enough for business
- Relevant to the industry
- Not offensive or inappropriate

IMPORTANT: Generate all output in Portuguese (português brasileiro). Remember that puns should work in Portuguese—don't just translate English puns.`,
    useCases: [
      {
        title: 'Criação de Marca Memorável',
        description: 'Empreendedores que querem se destacar da concorrência usam o Gerador de Nomes Divertidos para criar marcas que viralizam e ficam na memória. Ao inserir o tipo de negócio e tom desejado, a ferramenta gera nomes criativos que fazem pessoas sorrirem e compartilharem.',
      },
      {
        title: 'Branding de Negócio Casual/Descolado',
        description: 'Negócios com público jovem e atmosfera casual—bares, food trucks, barbearias—usam o gerador para encontrar nomes que combinam com sua vibe irreverente. O nome certo atrai clientes que valorizam personalidade e autenticidade.',
      },
      {
        title: 'Diferenciação em Mercado Saturado',
        description: 'Em mercados competitivos, um nome engraçado pode ser o diferencial que faz clientes escolherem você. Negócios que querem fugir de nomes genéricos usam humor para criar identidade única e memorável.',
      },
    ],
    faqs: [
      {
        question: 'Nomes engraçados funcionam para qualquer negócio?',
        answer: 'Não para todos. Humor funciona melhor em negócios casuais, criativos, ou focados em público jovem. Para serviços sérios como advocacia, medicina ou finanças, nomes divertidos podem prejudicar credibilidade. Considere se humor combina com a expectativa dos seus clientes.',
      },
      {
        question: 'Como fazer trocadilhos que funcionam em português?',
        answer: 'Bons trocadilhos em português usam homófonos, palavras com múltiplos sentidos, ou substituições inteligentes. "Cabeleleireiro" (cabelo + leileiro), "Açougue das Carnes Nobres" (irônico). Evite traduzir trocadilhos do inglês—geralmente não funcionam.',
      },
      {
        question: 'Qual o limite entre engraçado e ofensivo?',
        answer: 'Evite humor que possa ser interpretado como preconceituoso, sexual (a menos que seja relevante e aceito no setor), ou que ridicularize grupos. O teste: você ficaria confortável explicando o nome para sua avó ou para um cliente corporativo?',
      },
      {
        question: 'Nomes engraçados atrapalham em contratos formais?',
        answer: 'Pode depender do contexto. "Café Insônia" em um contrato corporativo ainda funciona. "Bêbados Anônimos Bar" pode causar hesitação. Se você atende clientes corporativos, considere se o humor é apropriado para todas as situações.',
      },
      {
        question: 'Como garantir que as pessoas entendam a piada?',
        answer: 'O trocadilho deve ser compreensível para seu público-alvo. Referências muito nichadas podem passar despercebidas. Teste o nome com pessoas fora do seu círculo—se precisar explicar, a piada pode ser obscura demais.',
      },
      {
        question: 'Nomes engraçados são mais difíceis de proteger legalmente?',
        answer: 'Não necessariamente. Nomes únicos (mesmo engraçados) podem ser mais fáceis de registrar que nomes genéricos. No entanto, verifique se o trocadilho não infringe marcas existentes ou referências protegidas por direitos autorais.',
      },
      {
        question: 'Como verificar se meu nome engraçado está disponível?',
        answer: 'Mesma pesquisa de outros nomes: Google, redes sociais, registro de empresas, domínios. Nomes muito populares na internet podem já existir. Verifique também se o trocadilho não existe em outra cidade ou setor.',
      },
      {
        question: 'Posso mudar de nome engraçado para sério depois?',
        answer: 'Sim, mas considere que o humor pode ter sido parte do que atraiu clientes. Se seu negócio crescer para contextos mais formais, um rebranding pode fazer sentido, mas avalie se não perderá a identidade que te diferenciou.',
      },
      {
        question: 'Quais erros evitar em nomes engraçados?',
        answer: 'Evite: piadas que só você entende, humor forçado que parece tentar demais, referências datadas que envelhecem rápido, trocadilhos que parecem erros de português, e qualquer coisa que possa ofender potenciais clientes.',
      },
      {
        question: 'Nomes engraçados ajudam em marketing viral?',
        answer: 'Sim! Nomes memoráveis e shareáveis geram buzz orgânico. Pessoas fotografam fachadas engraçadas, compartilham em redes sociais, e mencionam em conversas. Um bom nome engraçado é ferramenta de marketing gratuita e contínua.',
      },
    ],
    howToChoose: {
      intro: 'Escolher um nome engraçado para seu negócio é uma decisão que pode fazer você se destacar instantaneamente—ou criar problemas se feito incorretamente. O nome aparecerá em fachadas que farão pessoas pararem para fotografar, em conversas onde amigos indicam descobertas divertidas, em redes sociais onde conteúdo engraçado viraliza, e em memórias de clientes que nunca esquecerão sua marca. Humor é ferramenta poderosa de branding—seu nome engraçado deve fazer pessoas sorrirem enquanto ainda comunica profissionalismo.',
      steps: [
        {
          title: 'Avalie se humor combina com seu negócio',
          description: 'Antes de gerar nomes, considere se humor é apropriado para seu contexto. Avalie se seu público-alvo aprecia humor (jovens, criativos, público casual?), se seu setor aceita irreverência (alimentação e entretenimento sim, saúde e finanças talvez não), se você atende clientes corporativos que podem estranhar, se o humor combina com a experiência que você oferece, e se você está confortável explicando o nome em qualquer contexto. Humor forçado em contexto errado pode afastar clientes.',
        },
        {
          title: 'Escolha o tipo certo de humor',
          description: 'Diferentes tipos de humor funcionam para diferentes negócios. Trocadilhos inteligentes (jogos de palavras relacionados ao negócio) são seguros e versáteis. Referências pop culture (filmes, música, memes) atraem público específico mas podem envelhecer. Ironia e auto-depreciação (humor sobre si mesmo) podem ser charmosos. Absurdo e surreal funcionam para marcas muito criativas. Escolha o tom que combina com sua personalidade de marca.',
        },
        {
          title: 'Garanta que a piada seja compreensível',
          description: 'O trocadilho deve funcionar para seu público. Referências muito nichadas podem passar despercebidas. O nome deve fazer sentido mesmo para quem não pega a piada. Teste com pessoas de diferentes idades e backgrounds. Se você precisa explicar, a piada pode ser obscura demais. O ideal é que o nome funcione literalmente E tenha uma camada de humor.',
        },
        {
          title: 'Mantenha profissionalismo mesmo com humor',
          description: 'Engraçado não significa amador. Seu nome divertido deve funcionar em contextos profissionais (cartão de visita, proposta comercial), não ofender nenhum grupo ou indivíduo, ser pronunciável e não constrangedor, funcionar em atendimento telefônico ("Empresa X, bom dia!"), e não criar barreiras para nenhum cliente potencial.',
        },
        {
          title: 'Considere longevidade do humor',
          description: 'Piadas datadas envelhecem mal. Referências a memes, políticos do momento, ou tendências passageiras podem parecer antiquadas em poucos anos. Trocadilhos atemporais baseados em palavras e conceitos duradouros mantêm o charme. Pense se o nome ainda será engraçado em 10 anos.',
        },
        {
          title: 'Teste reação real antes de decidir',
          description: 'O que você acha engraçado pode não ressoar com outros. Teste seu nome com pessoas do público-alvo (riem ou sorriem?), pessoas de fora do seu círculo (entendem?), potenciais clientes (comprariam de negócio com esse nome?), e em voz alta (soa bem quando dito?). Reação genuína é o melhor indicador.',
        },
        {
          title: 'Verifique disponibilidade e proteção',
          description: 'Nomes engraçados populares podem já existir. Faça busca completa em Google, redes sociais, registro de empresas e marcas. Verifique se referências culturais não têm proteção de direitos autorais. Registre seu nome para evitar que alguém copie sua piada em outra cidade.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'BarBaridade', description: 'Trocadilho com "barbaridade" (expressão de espanto)—perfeito para bar ou barbearia descolada.' },
      { name: 'CabeloQueCai', description: 'Ironia sobre calvície—humor auto-depreciativo para barbearia com personalidade.' },
      { name: 'AbaDeCarne', description: 'Trocadilho com "aba de carne" e "abadá"—criativo para açougue ou churrascaria.' },
      { name: 'PãoNaChapa', description: 'Expressão popular brasileira que funciona literalmente—perfeito para padaria ou lanchonete.' },
      { name: 'SushiNãoMorde', description: 'Humor sobre quem tem receio de comida japonesa—acolhedor para restaurante japonês casual.' },
      { name: 'GatoEsparramado', description: 'Referência a gato deitado relaxado—perfeito para pet shop ou hotel de gatos.' },
      { name: 'CaféSemFrescura', description: 'Ironia sobre cafeterias hipster—ideal para café casual e direto ao ponto.' },
      { name: 'OsTeimosos', description: 'Auto-depreciação charmosa—funciona para negócios que persistem apesar de tudo.' },
      { name: 'PizzaNaMadruga', description: 'Direto sobre o serviço oferecido—perfeito para pizzaria delivery noturna.' },
      { name: 'BarDosAmigos', description: 'Irônico porque todo bar diz isso—humor sobre clichês do setor.' },
      { name: 'BurguerDoPecado', description: 'Sugere indulgência prazerosa—perfeito para hamburgueria premium.' },
      { name: 'SalãoDaFofoca', description: 'Abraça o estereótipo com humor—ideal para salão de beleza de bairro.' },
      { name: 'AcademiaDoPreguiçoso', description: 'Ironia sobre quem não gosta de malhar—acolhedor para academia de iniciantes.' },
      { name: 'CervejaSemCrise', description: 'Humor sobre economia com cerveja—perfeito para bar ou distribuidora.' },
      { name: 'PetShopMimado', description: 'Abraça a ideia de pets tratados como reis—ideal para pet shop premium.' },
      { name: 'ComidaDaVóReal', description: 'Promessa de autenticidade com humor—perfeito para restaurante caseiro.' },
      { name: 'NãoÉLanche', description: 'Para hamburguerias que se levam a sério—humor sobre ser mais que fast food.' },
      { name: 'BarDoFimDoMundo', description: 'Dramático e memorável—perfeito para bar de bairro afastado.' },
      { name: 'SorveteDaDepressão', description: 'Humor sobre comer sorvete para se consolar—ice cream therapy.' },
      { name: 'MecânicoSincero', description: 'Ironia sobre fama de mecânicos—diferencial de honestidade com humor.' },
    ],
  },

'game': {
    slug: 'game',
    name: 'Gerador de Nomes para Empresas de Jogos',
    title: 'Gerador gratuito de ideias de nomes comerciais de Jogos por IA',
    description: 'Crie nomes únicos e memoráveis para sua empresa de jogos, estúdio de desenvolvimento ou startup de games. Nossa ferramenta de IA gera sugestões criativas que capturam a essência do universo gamer e ajudam sua marca a se destacar no competitivo mercado de entretenimento digital.',
    metaDescription: 'Gere nomes criativos e impactantes para sua empresa de jogos com nosso gerador gratuito por IA. Crie identidades de marca únicas para...',
    inputLabel: 'Descreva sua empresa de jogos',
    inputPlaceholder: 'ex. Um estúdio indie de desenvolvimento de jogos de aventura e RPG para PC e consoles, focado em narrativas envolventes e gráficos estilizados',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Tipo de empresa',
        choices: ['Estúdio de Desenvolvimento', 'Empresa de E-sports', 'Loja de Games', 'Streaming e Conteúdo', 'Jogos Mobile', 'Realidade Virtual/AR', 'Jogos de Tabuleiro', 'Arcade e Entretenimento'],
        default: 'Estúdio de Desenvolvimento',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro).

You are a creative branding specialist for the gaming industry. Generate unique, memorable business names for gaming companies, game development studios, e-sports organizations, and gaming-related businesses.

Consider these factors when generating names:
- The gaming culture and community terminology
- Appeal to gamers and industry professionals
- Memorability and ease of pronunciation
- Domain name availability potential
- Social media handle availability
- The specific gaming niche or genre focus
- International appeal for global markets

For each name, provide:
1. The business name
2. A brief explanation of why it works for a gaming business
3. The style/vibe it conveys

Generate names that feel authentic to gaming culture while maintaining professionalism for business contexts.`,
    useCases: [
      {
        title: 'Estúdios de Desenvolvimento de Jogos',
        description: 'Ideal para estúdios independentes ou AAA que precisam de um nome que transmita criatividade, inovação técnica e paixão por jogos. Um bom nome de estúdio deve ser memorável para jogadores e atrativo para publishers e investidores.',
      },
      {
        title: 'Organizações de E-sports',
        description: 'Perfeito para times competitivos, ligas de e-sports e organizações que precisam de nomes impactantes que funcionem em transmissões, merchandising e redes sociais, criando uma identidade forte no cenário competitivo.',
      },
      {
        title: 'Lojas e Serviços de Games',
        description: 'Essencial para lojas de jogos, lan houses, serviços de streaming gaming, plataformas de distribuição digital e negócios relacionados que precisam de nomes que ressoem com a comunidade gamer.',
      },
    ],
    faqs: [
      {
        question: 'Como escolher um nome que ressoe com a comunidade gamer?',
        answer: 'Para criar conexão com gamers, use referências sutis à cultura gaming sem ser clichê. Considere termos que evoquem ação, aventura, conquista ou imersão. Evite nomes muito genéricos ou que já estejam saturados no mercado. Teste o nome com seu público-alvo para garantir que transmite a mensagem certa e não tem conotações negativas em diferentes comunidades gaming.',
      },
      {
        question: 'O nome deve indicar o tipo de jogo que desenvolvemos?',
        answer: 'Isso depende da sua estratégia de longo prazo. Se você planeja focar em um gênero específico (como horror ou RPG), um nome temático pode fortalecer sua marca. Porém, se deseja flexibilidade para explorar diferentes gêneros no futuro, escolha um nome mais versátil que não limite suas opções criativas.',
      },
      {
        question: 'Como garantir que o nome funcione internacionalmente?',
        answer: 'Verifique se o nome não tem significados negativos ou embaraçosos em outros idiomas, especialmente inglês, japonês, chinês e coreano (mercados gaming importantes). Prefira nomes curtos, fáceis de pronunciar em diferentes línguas e que funcionem visualmente em alfabetos latinos. Considere também a facilidade de criar hashtags e handles únicos.',
      },
      {
        question: 'Devo usar palavras em inglês ou português?',
        answer: 'Na indústria de games brasileira, nomes em inglês são comuns e bem aceitos, especialmente se você planeja atuar internacionalmente. Porém, nomes em português podem criar identidade única e conexão com o público brasileiro. Uma abordagem híbrida ou um nome inventado também são opções válidas que podem oferecer o melhor dos dois mundos.',
      },
      {
        question: 'Como verificar se o nome já está sendo usado na indústria?',
        answer: 'Pesquise em plataformas como Steam, Epic Games Store, Google Play, App Store e sites de desenvolvedores. Verifique registros de marcas no INPI e em escritórios internacionais (USPTO, EUIPO). Busque em redes sociais, Twitch, YouTube Gaming e Discord. Consulte também listas de estúdios em sites como IGN, GameSpot e bases de dados da indústria.',
      },
      {
        question: 'O nome precisa ter relação com tecnologia?',
        answer: 'Não necessariamente. Muitos estúdios de sucesso têm nomes que evocam emoções, aventuras ou conceitos abstratos em vez de tecnologia. O importante é que o nome seja memorável e transmita a essência da sua marca. Nomes muito tecnológicos podem parecer datados rapidamente conforme a tecnologia evolui.',
      },
      {
        question: 'Como criar um nome que funcione para e-sports?',
        answer: 'Para e-sports, o nome deve ser curto (idealmente 1-2 palavras), fácil de gritar em torcidas, impactante visualmente para logos e jerseys, e único o suficiente para criar hashtags exclusivas. Considere como o nome soará em narrações de partidas e como ficará em rankings e tabelas de competições.',
      },
      {
        question: 'Posso usar números ou caracteres especiais no nome?',
        answer: 'Números podem funcionar se tiverem significado relevante (como referência a um jogo ou conceito específico). Porém, evite substituições óbvias como "4" por "for" que podem parecer amadoras. Caracteres especiais geralmente complicam buscas online, registros de domínio e uso em diferentes plataformas, então use com cautela.',
      },
      {
        question: 'O nome deve refletir o tamanho da empresa?',
        answer: 'Não necessariamente. Muitos estúdios indie começaram com nomes grandiosos e cresceram para corresponder a eles. O importante é que o nome seja autêntico à sua visão e valores. Evite parecer pretensioso, mas também não se limite com nomes que sugiram algo pequeno demais se você tem ambições maiores.',
      },
      {
        question: 'Como proteger legalmente o nome da minha empresa de games?',
        answer: 'Registre a marca no INPI nas classes relevantes (software, entretenimento, serviços digitais). Para atuação internacional, considere registros no USPTO (EUA), EUIPO (Europa) e outros mercados-alvo. Garanta os domínios .com, .com.br e .gg (popular em gaming). Registre handles nas principais redes sociais, Twitch e Discord antes de anunciar publicamente.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua empresa de jogos é uma decisão estratégica que impactará sua presença no mercado, reconhecimento de marca e conexão com a comunidade gamer. Siga este guia para tomar a melhor decisão.',
      steps: [
        {
          title: 'Defina sua identidade e nicho',
          description: 'Antes de gerar nomes, tenha clareza sobre o tipo de jogos que desenvolverá, seu público-alvo principal, valores da empresa e posicionamento no mercado. Um estúdio de horror terá necessidades diferentes de um focado em jogos infantis educativos.',
        },
        {
          title: 'Considere seu alcance geográfico',
          description: 'Se planeja atuar apenas no Brasil, nomes em português podem criar conexão única. Para mercado global, priorize nomes que funcionem internacionalmente, sejam fáceis de pronunciar em inglês e não tenham significados problemáticos em outros idiomas importantes para gaming.',
        },
        {
          title: 'Gere múltiplas opções',
          description: 'Use nosso gerador para criar diversas alternativas. Explore diferentes estilos: épicos, tecnológicos, divertidos, artísticos. Não se limite à primeira ideia boa - tenha pelo menos 10-15 opções para comparar antes de decidir.',
        },
        {
          title: 'Verifique disponibilidade completa',
          description: 'Para cada nome favorito, verifique: domínios (.com, .com.br, .gg, .games), handles em redes sociais (Twitter, Instagram, TikTok), canais no Twitch e YouTube, servidores no Discord, e se não há conflito com outras empresas de games existentes.',
        },
        {
          title: 'Teste com seu público-alvo',
          description: 'Compartilhe suas opções finais com gamers de confiança, outros desenvolvedores e potenciais clientes. Observe reações imediatas, peça associações espontâneas e verifique se há interpretações inesperadas. O feedback da comunidade gaming é invaluável.',
        },
        {
          title: 'Avalie potencial de branding',
          description: 'Imagine o nome em diferentes contextos: logo de splash screen, corner de stream, merchandise, cartões de visita, comunicados de imprensa. O nome deve funcionar visualmente e soar bem em todas essas situações, desde formatos compactos até aplicações expandidas.',
        },
        {
          title: 'Formalize a escolha',
          description: 'Após decidir, aja rapidamente: registre domínios, crie contas em plataformas, inicie processo de registro de marca no INPI. Documente diretrizes de uso do nome e comece a construir presença online antes de anunciar oficialmente sua empresa.',
        },
      ],
    },
    businessNameIdeas: [
      {
        name: 'Nexus Studios',
        description: 'Evoca conexão e pontos de encontro, sugerindo um estúdio que cria experiências que conectam jogadores. O termo "nexus" é familiar na cultura gaming e transmite inovação tecnológica.',
      },
      {
        name: 'Pixel Forge',
        description: 'Combina o elemento visual fundamental dos jogos (pixel) com a ideia de criação artesanal (forge). Transmite dedicação ao craft de fazer jogos com qualidade e atenção aos detalhes.',
      },
      {
        name: 'Aurora Games',
        description: 'Nome elegante que evoca início, luz e esperança. Funciona bem internacionalmente e sugere experiências visuais deslumbrantes e novos começos em cada jogo.',
      },
      {
        name: 'Realm Interactive',
        description: 'Transmite imersão em mundos fantásticos com o toque de interatividade que define games. Ideal para estúdios focados em RPGs, aventuras ou mundos expansivos.',
      },
      {
        name: 'Vortex Entertainment',
        description: 'Sugere experiências envolventes e impossíveis de largar, como um vórtice que puxa os jogadores para dentro. Nome dinâmico e energético que funciona globalmente.',
      },
      {
        name: 'Infinity Code',
        description: 'Combina a ideia de possibilidades infinitas com a base técnica de desenvolvimento. Ideal para estúdios tecnológicos que querem transmitir inovação e profundidade.',
      },
      {
        name: 'Ember Studios',
        description: 'Evoca a faísca da criatividade e a chama da paixão por games. Nome curto, memorável e versátil que funciona para diversos gêneros de jogos.',
      },
      {
        name: 'Quantum Play',
        description: 'Sugere jogos inovadores e experiências que desafiam expectativas, como a física quântica desafia a intuição. Moderno e tecnológico sem ser datado.',
      },
      {
        name: 'Mythic Ventures',
        description: 'Perfeito para estúdios focados em narrativas épicas e mundos fantásticos. Evoca lendas, heróis e aventuras grandiosas que inspiram jogadores.',
      },
      {
        name: 'Echo Games',
        description: 'Nome simples mas evocativo, sugerindo experiências que ressoam com jogadores muito tempo após jogar. Fácil de lembrar e pronunciar em qualquer idioma.',
      },
      {
        name: 'Neon Arcade',
        description: 'Combina nostalgia de arcades clássicos com estética cyberpunk moderna. Ideal para estúdios que celebram tanto o passado quanto o futuro dos games.',
      },
      {
        name: 'Catalyst Studios',
        description: 'Transmite a ideia de jogos que provocam mudanças e reações nos jogadores. Sugere inovação e experiências transformadoras.',
      },
      {
        name: 'Prism Entertainment',
        description: 'Evoca diversidade de experiências e espectro de emoções, como luz passando por um prisma. Elegante e versátil para múltiplos gêneros.',
      },
      {
        name: 'Vertex Gaming',
        description: 'Sugere estar no topo, no ponto mais alto. Nome profissional que funciona tanto para desenvolvimento quanto para e-sports e competições.',
      },
      {
        name: 'Horizon Interactive',
        description: 'Evoca novos horizontes, exploração e descoberta. Ideal para jogos de mundo aberto, aventuras e experiências de exploração.',
      },
      {
        name: 'Pulse Studios',
        description: 'Nome energético que sugere jogos vibrantes e emocionantes. Curto, memorável e transmite vida e dinamismo.',
      },
      {
        name: 'Spectra Games',
        description: 'Evoca diversidade e amplitude de experiências gaming. Nome sofisticado que funciona para estúdios com portfólio variado.',
      },
      {
        name: 'Nova Digital',
        description: 'Combina a ideia de novidade e explosão estelar com o mundo digital. Sugere inovação brilhante e novos começos.',
      },
      {
        name: 'Arcane Works',
        description: 'Perfeito para jogos com elementos de mistério e magia. Transmite craft artesanal e conhecimento especializado em criar experiências envolventes.',
      },
      {
        name: 'Zenith Play',
        description: 'Evoca o ponto mais alto, a excelência. Nome aspiracional que transmite qualidade premium e experiências de pico.',
      },
    ],
  },
  'hair': {
    slug: 'hair',
    name: 'Gerador de Nomes para Salões e Negócios de Cabelo',
    title: 'Gerador gratuito de ideias de nomes comerciais de Cabelo por IA',
    description: 'Crie nomes elegantes e memoráveis para seu salão de beleza, barbearia, clínica capilar ou negócio de produtos para cabelo. Nossa ferramenta de IA gera sugestões criativas que transmitem profissionalismo, estilo e confiança para atrair clientes.',
    metaDescription: 'Gere nomes criativos e sofisticados para seu negócio de cabelo com nosso gerador gratuito por IA. Crie identidades de marca únicas para...',
    inputLabel: 'Descreva seu negócio de cabelo',
    inputPlaceholder: 'ex. Um salão de beleza premium especializado em coloração e tratamentos capilares, com ambiente sofisticado e atendimento personalizado para mulheres executivas',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Tipo de negócio',
        choices: ['Salão de Beleza', 'Barbearia', 'Studio de Coloração', 'Clínica Capilar', 'Produtos Capilares', 'Extensões e Mega Hair', 'Salão Afro', 'Escola de Cabeleireiros'],
        default: 'Salão de Beleza',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro).

You are a creative branding specialist for the hair and beauty industry. Generate unique, memorable business names for hair salons, barbershops, hair clinics, hair product lines, and related businesses.

Consider these factors when generating names:
- The target audience and positioning
- Industry trends and styling culture
- Elegance and sophistication expectations
- Memorability and word-of-mouth potential
- The specific services or specializations
- Local market preferences in Brazil

For each name, provide:
1. The business name
2. A brief explanation of why it works for a hair business
3. The style/vibe it conveys

Generate names that feel professional and appealing to clients while standing out in a competitive market.`,
    useCases: [
      {
        title: 'Salões de Beleza e Cabeleireiros',
        description: 'Perfeito para salões que buscam um nome que transmita profissionalismo, estilo e confiança. Um bom nome ajuda a criar expectativas positivas e diferencia seu espaço em um mercado competitivo com muitas opções.',
      },
      {
        title: 'Barbearias e Espaços Masculinos',
        description: 'Ideal para barbearias que precisam de nomes que comuniquem masculinidade, tradição ou modernidade, dependendo do posicionamento. O nome certo atrai o público masculino e cria uma identidade forte.',
      },
      {
        title: 'Clínicas e Tratamentos Capilares',
        description: 'Essencial para clínicas especializadas em tratamentos, transplantes ou recuperação capilar que precisam transmitir credibilidade médica, expertise técnica e resultados confiáveis.',
      },
    ],
    faqs: [
      {
        question: 'O nome deve incluir palavras relacionadas a cabelo?',
        answer: 'Não necessariamente. Muitos salões de sucesso usam nomes que evocam elegância, estilo ou conceitos abstratos sem mencionar cabelo diretamente. O importante é que o nome transmita a experiência que você oferece. Palavras como "hair", "cabelo" ou "coiffeur" podem deixar claro o segmento, mas também podem limitar se você expandir serviços.',
      },
      {
        question: 'Devo usar meu próprio nome no salão?',
        answer: 'Usar seu nome pessoal é uma estratégia válida que cria conexão pessoal e responsabilidade direta com a qualidade. Porém, considere que isso pode dificultar a venda futura do negócio ou expansão com outros profissionais. Uma alternativa é usar seu sobrenome de forma estilizada ou criar um nome que soe pessoal sem ser literalmente seu.',
      },
      {
        question: 'Como escolher entre um nome em português ou estrangeiro?',
        answer: 'Depende do seu posicionamento e público-alvo. Nomes em francês ou italiano tradicionalmente evocam sofisticação no setor. Inglês pode parecer moderno e internacional. Português pode criar conexão local e autenticidade. Considere também se seu público entenderá e lembrará facilmente de nomes em outros idiomas.',
      },
      {
        question: 'O nome precisa indicar os serviços oferecidos?',
        answer: 'Não é obrigatório, mas pode ser útil para SEO local e clareza. Se você é especializado (como coloração, tranças ou tratamentos), mencionar pode atrair o público certo. Para salões completos, um nome mais genérico oferece flexibilidade. O importante é que sua comunicação visual e descrições complementem o nome.',
      },
      {
        question: 'Como criar um nome que funcione para barbearia?',
        answer: 'Para barbearias, considere nomes que evoquem tradição masculina, craft artesanal ou modernidade urbana, dependendo do seu estilo. Termos como "barber", "studio", "club" ou referências clássicas funcionam bem. Evite nomes muito femininos ou genéricos. O nome deve criar um ambiente onde homens se sintam confortáveis.',
      },
      {
        question: 'Posso usar trocadilhos ou jogos de palavras?',
        answer: 'Trocadilhos podem ser memoráveis e divertidos, mas use com moderação e certifique-se de que funcionem para seu público. Trocadilhos muito elaborados podem ser difíceis de lembrar ou soar pouco profissionais para um salão premium. Se seu posicionamento é descontraído e jovem, podem funcionar muito bem.',
      },
      {
        question: 'Como garantir que o nome transmita qualidade?',
        answer: 'Escolha palavras que evoquem excelência, cuidado, arte ou exclusividade. Evite termos que possam parecer baratos ou genéricos. A sonoridade também importa: nomes mais longos ou com consoantes suaves tendem a soar mais sofisticados. Teste como o nome soa quando dito em voz alta e em diferentes contextos.',
      },
      {
        question: 'Devo considerar o nome para redes sociais?',
        answer: 'Absolutamente. Verifique se o nome está disponível como handle no Instagram (crucial para salões), Facebook, TikTok e outras plataformas relevantes. Nomes muito longos ou com caracteres especiais dificultam a criação de handles consistentes. O Instagram especialmente é vital para marketing de salões.',
      },
      {
        question: 'Como escolher um nome para uma clínica capilar?',
        answer: 'Clínicas capilares precisam transmitir credibilidade médica e científica. Considere termos que evoquem expertise, tecnologia, resultados ou cuidado especializado. Evite nomes muito informais ou que possam parecer promessas exageradas. O nome deve inspirar confiança em pessoas que buscam soluções para problemas capilares.',
      },
      {
        question: 'O nome deve refletir a localização do salão?',
        answer: 'Incluir o bairro ou região pode ajudar no SEO local e criar identificação com a comunidade, mas também pode limitar se você expandir para outras áreas. Uma alternativa é usar o local apenas no nome fantasia inicial e ter uma marca principal mais versátil para crescimento futuro.',
      },
    ],
    howToChoose: {
      intro: 'O nome do seu negócio de cabelo é fundamental para atrair clientes, criar confiança e estabelecer sua identidade no mercado. Um nome bem escolhido pode ser seu melhor investimento em marketing. Siga este guia completo.',
      steps: [
        {
          title: 'Defina seu posicionamento de mercado',
          description: 'Antes de gerar nomes, tenha clareza sobre seu público-alvo (idade, gênero, poder aquisitivo), estilo do espaço (luxuoso, descolado, tradicional), serviços principais e diferenciais competitivos. Um salão de bairro familiar terá necessidades diferentes de um studio de coloração premium.',
        },
        {
          title: 'Analise a concorrência local',
          description: 'Pesquise os nomes de salões e barbearias na sua região e em áreas similares. Identifique padrões, evite nomes muito similares aos existentes e encontre oportunidades para se diferenciar. Observe quais nomes parecem ter sucesso e por quê.',
        },
        {
          title: 'Gere opções variadas',
          description: 'Use nosso gerador para criar diversas alternativas em diferentes estilos: elegantes, modernos, divertidos, clássicos. Experimente combinações com seu nome, conceitos de beleza, referências geográficas ou termos do universo capilar. Tenha pelo menos 15-20 opções para comparar.',
        },
        {
          title: 'Teste a memorabilidade',
          description: 'Para cada nome favorito, faça o teste do telefone: diga o nome em voz alta e veja se a pessoa entende e lembra depois. Nomes muito complicados, longos ou difíceis de pronunciar prejudicam o boca a boca, que é fundamental no setor de beleza.',
        },
        {
          title: 'Verifique disponibilidade digital',
          description: 'Confira se o nome (ou variação próxima) está disponível como handle no Instagram, domínio .com.br, Google Meu Negócio e outras plataformas importantes. A presença consistente em todas as plataformas é essencial para marketing moderno de salões.',
        },
        {
          title: 'Avalie o potencial visual',
          description: 'Imagine o nome na fachada do salão, em cartões de visita, uniformes, produtos e redes sociais. Ele deve funcionar em diferentes formatos e tamanhos. Considere se permite criar um logo atraente e se combina com a estética que você deseja para o espaço.',
        },
        {
          title: 'Finalize e proteja',
          description: 'Após escolher, registre o nome no INPI, garanta os domínios e handles em redes sociais, cadastre no Google Meu Negócio e formalize o registro do negócio. Crie diretrizes básicas de uso do nome e comece a construir sua identidade visual.',
        },
      ],
    },
    businessNameIdeas: [
      {
        name: 'Studio Essence',
        description: 'Nome sofisticado que evoca a essência da beleza e transformação. Transmite um ambiente premium focado na individualidade de cada cliente.',
      },
      {
        name: 'Madame Coiffure',
        description: 'Referência francesa clássica que transmite elegância atemporal e expertise tradicional em cuidados capilares. Ideal para salões femininos sofisticados.',
      },
      {
        name: 'Urban Barber Club',
        description: 'Nome moderno para barbearias que querem transmitir um ambiente masculino contemporâneo, com senso de comunidade e estilo urbano.',
      },
      {
        name: 'Ateliê dos Fios',
        description: 'Evoca trabalho artesanal e atenção aos detalhes, sugerindo que cada cabelo é tratado como obra de arte. Perfeito para salões autorais.',
      },
      {
        name: 'Bellavita Hair',
        description: 'Combinação elegante de italiano e inglês que transmite beleza e vitalidade. Funciona bem para salões que oferecem experiência completa de bem-estar.',
      },
      {
        name: 'Chrome Studio',
        description: 'Nome moderno e clean que evoca brilho e reflexo. Ideal para studios especializados em coloração e acabamentos impecáveis.',
      },
      {
        name: 'Raízes Hair Spa',
        description: 'Conecta cuidado capilar com bem-estar e tratamentos profundos. O conceito de "raízes" sugere atenção à saúde capilar desde a base.',
      },
      {
        name: 'Vintage Barber',
        description: 'Evoca nostalgia e tradição da barbearia clássica. Perfeito para espaços que valorizam técnicas tradicionais com toque contemporâneo.',
      },
      {
        name: 'Glow Beauty Studio',
        description: 'Nome luminoso que transmite resultados radiantes e transformadores. Funciona para salões focados em realçar a beleza natural.',
      },
      {
        name: 'Maison Capelli',
        description: 'Elegante combinação franco-italiana que evoca casa de alta costura capilar. Transmite exclusividade e tratamento personalizado.',
      },
      {
        name: 'Corte & Arte',
        description: 'Nome em português que destaca a habilidade artística do cabeleireiro. Direto, memorável e valoriza o craft do profissional.',
      },
      {
        name: 'Texture Lab',
        description: 'Moderno e técnico, ideal para studios especializados em trabalhar diferentes texturas capilares, cachos, crespos e transformações.',
      },
      {
        name: 'Sublime Hair',
        description: 'Evoca resultados extraordinários e experiência elevada. Nome versátil que funciona para salões de diferentes estilos e portes.',
      },
      {
        name: 'Gentlemen\'s Quarter',
        description: 'Nome premium para barbearias de alto padrão que oferecem experiência completa de grooming masculino em ambiente sofisticado.',
      },
      {
        name: 'Fios de Ouro',
        description: 'Nome brasileiro poético que sugere valorização e cuidado precioso com cada fio. Memorável e transmite qualidade.',
      },
      {
        name: 'Blend Studio',
        description: 'Moderno e versátil, evoca a mistura perfeita de técnicas, cores e estilos. Ideal para studios criativos e inovadores.',
      },
      {
        name: 'La Maison du Cheveux',
        description: 'Nome francês elegante que transmite tradição e sofisticação europeias. Posiciona o salão como destino de expertise capilar.',
      },
      {
        name: 'Noir Beauty',
        description: 'Nome sofisticado que evoca elegância e mistério. O termo francês adiciona toque de refinamento sem ser excessivamente elaborado.',
      },
      {
        name: 'The Curl Bar',
        description: 'Nome específico e moderno para espaços especializados em cachos e texturas. Transmite especialização e conhecimento técnico.',
      },
      {
        name: 'Prisma Hair Studio',
        description: 'Evoca diversidade de cores e estilos, como luz através de um prisma. Ideal para studios especializados em coloração criativa.',
      },
    ],
  },
  'health': {
    slug: 'health',
    name: 'Gerador de Nomes para Empresas de Saúde',
    title: 'Gerador gratuito de ideias de nomes comerciais de Saúde por IA',
    description: 'Crie nomes profissionais e confiáveis para sua empresa de saúde, clínica, consultório ou startup de saúde digital. Nossa ferramenta de IA gera sugestões que transmitem credibilidade, cuidado e competência para conquistar a confiança de pacientes e parceiros.',
    metaDescription: 'Gere nomes profissionais e memoráveis para sua empresa de saúde com nosso gerador gratuito por IA. Crie identidades de marca confiáveis...',
    inputLabel: 'Descreva sua empresa de saúde',
    inputPlaceholder: 'ex. Uma clínica de medicina preventiva e longevidade focada em executivos, oferecendo check-ups completos, acompanhamento personalizado e programas de qualidade de vida',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Tipo de negócio',
        choices: ['Clínica Médica', 'Consultório', 'Laboratório', 'Healthtech/Startup', 'Farmácia', 'Home Care', 'Saúde Mental', 'Medicina do Trabalho'],
        default: 'Clínica Médica',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro).

You are a healthcare branding specialist. Generate professional, trustworthy business names for healthcare companies, clinics, medical practices, health tech startups, and wellness businesses.

Consider these factors when generating names:
- Trust and credibility are paramount in healthcare
- Professional yet approachable tone
- Regulatory considerations for medical businesses
- The specific healthcare specialty or focus
- Patient/client comfort and confidence
- Memorability for referrals and word-of-mouth

For each name, provide:
1. The business name
2. A brief explanation of why it works for a healthcare business
3. The style/vibe it conveys

Generate names that inspire confidence while remaining accessible and memorable.`,
    useCases: [
      {
        title: 'Clínicas e Consultórios Médicos',
        description: 'Perfeito para clínicas multidisciplinares ou consultórios especializados que precisam de nomes que transmitam competência médica, cuidado humanizado e ambiente profissional para conquistar a confiança de pacientes.',
      },
      {
        title: 'Healthtechs e Startups de Saúde',
        description: 'Ideal para empresas de tecnologia em saúde, aplicativos de telemedicina, plataformas de bem-estar e inovações que precisam de nomes que combinem credibilidade médica com modernidade tecnológica.',
      },
      {
        title: 'Laboratórios e Serviços Diagnósticos',
        description: 'Essencial para laboratórios de análises, centros de imagem e serviços diagnósticos que precisam transmitir precisão técnica, confiabilidade dos resultados e atendimento profissional.',
      },
    ],
    faqs: [
      {
        question: 'O nome deve incluir a especialidade médica?',
        answer: 'Depende da sua estratégia. Incluir a especialidade (ex: "Cardiologia", "Ortopedia") torna claro o serviço oferecido e ajuda no SEO, mas pode limitar expansão futura. Nomes mais genéricos permitem adicionar especialidades sem mudar a marca. Considere também regulamentações dos conselhos profissionais sobre uso de termos médicos.',
      },
      {
        question: 'Posso usar nomes de médicos no nome da clínica?',
        answer: 'Sim, usar o nome do médico principal é comum e cria conexão pessoal, especialmente em consultórios. Porém, considere que isso pode complicar a venda ou transição do negócio, e pode parecer menos institucional para clínicas maiores. Verifique também as regras do CRM sobre identificação profissional.',
      },
      {
        question: 'Quais palavras transmitem mais confiança em saúde?',
        answer: 'Termos como "Instituto", "Centro", "Núcleo", "Hospital" (se aplicável) transmitem institucionalidade. Palavras como "Vida", "Saúde", "Cuidar", "Bem-estar" evocam o propósito. Termos em latim ou grego (raízes médicas) podem adicionar credibilidade científica. Evite termos que possam parecer promessas exageradas de cura.',
      },
      {
        question: 'Como escolher um nome para healthtech?',
        answer: 'Para healthtechs, combine credibilidade médica com modernidade tech. Nomes curtos, fáceis de lembrar e que funcionem como app funcionam bem. Evite termos muito clínicos que possam afastar usuários, mas mantenha seriedade suficiente para o setor de saúde. Considere também a escalabilidade do nome para diferentes produtos.',
      },
      {
        question: 'Existem restrições legais para nomes de empresas de saúde?',
        answer: 'Sim. Conselhos profissionais (CRM, CRO, etc.) têm regras sobre uso de termos médicos e identificação. Termos como "Hospital" têm requisitos específicos. Evite promessas de cura ou superlativos que possam ser considerados propaganda médica irregular. Consulte as normas do seu conselho e a legislação sanitária antes de finalizar.',
      },
      {
        question: 'O nome deve ser em português ou pode ser estrangeiro?',
        answer: 'Nomes em português tendem a ser mais acessíveis e transmitir proximidade, especialmente para atendimento ao público geral. Termos em latim/grego são tradicionais na medicina. Inglês pode funcionar para healthtechs ou públicos mais jovens. O importante é que o nome seja compreendido e pronunciado facilmente pelo seu público-alvo.',
      },
      {
        question: 'Como criar um nome humanizado sem perder profissionalismo?',
        answer: 'Equilibre termos técnicos com palavras que evoquem cuidado, acolhimento ou bem-estar. Evite nomes excessivamente frios ou burocráticos. Considere a experiência do paciente: o nome deve fazer a pessoa se sentir em boas mãos, não intimidada. Palavras que sugerem parceria na saúde funcionam bem.',
      },
      {
        question: 'Devo considerar a localização no nome?',
        answer: 'Incluir a região pode ajudar no SEO local e criar identificação comunitária, especialmente para clínicas de bairro. Porém, pode limitar expansão geográfica futura. Uma alternativa é usar a localização apenas no registro comercial e não na marca principal, permitindo flexibilidade.',
      },
      {
        question: 'Como diferenciar minha clínica das concorrentes pelo nome?',
        answer: 'Pesquise os nomes das clínicas na sua área e especialidade. Evite padrões muito comuns (como "[Nome]+Med"). Destaque seu diferencial: se é tecnologia, humanização, especialização única, acessibilidade. Um nome único é mais memorável e facilita buscas online.',
      },
      {
        question: 'O nome precisa indicar que é uma empresa de saúde?',
        answer: 'Não necessariamente, mas para empresas de saúde tradicionais, ter clareza sobre o segmento ajuda pacientes a encontrar você. Para healthtechs ou empresas de bem-estar, nomes mais criativos podem funcionar bem. O contexto (site, materiais, localização) complementará o entendimento do público sobre seus serviços.',
      },
    ],
    howToChoose: {
      intro: 'O nome da sua empresa de saúde precisa equilibrar profissionalismo, confiança e acessibilidade. Em um setor onde credibilidade é essencial, a escolha certa pode ser decisiva para o sucesso do negócio. Siga este guia completo.',
      steps: [
        {
          title: 'Defina seu posicionamento e público',
          description: 'Antes de gerar nomes, tenha clareza sobre sua especialidade, público-alvo (idade, classe social, necessidades específicas), diferencial competitivo e valores da marca. Uma clínica popular terá necessidades diferentes de um centro de medicina de luxo ou uma healthtech inovadora.',
        },
        {
          title: 'Pesquise regulamentações aplicáveis',
          description: 'Consulte as normas do conselho profissional relevante (CRM, CRO, CRN, etc.) sobre uso de termos médicos, identificação profissional e publicidade. Verifique também requisitos da ANVISA e vigilância sanitária que possam impactar o nome ou registro do seu negócio.',
        },
        {
          title: 'Analise o mercado e concorrência',
          description: 'Pesquise nomes de empresas similares na sua região e especialidade. Identifique padrões comuns, oportunidades de diferenciação e nomes que você admira. Evite similaridade excessiva com concorrentes para não confundir pacientes e prevenir problemas legais.',
        },
        {
          title: 'Gere múltiplas opções',
          description: 'Use nosso gerador para criar diversas alternativas em diferentes estilos: profissionais, inovadores, humanizados, técnicos. Explore combinações com termos médicos, conceitos de saúde, seu nome ou sobrenome, e referências à sua especialidade.',
        },
        {
          title: 'Teste confiança e memorabilidade',
          description: 'Para cada nome favorito, pergunte-se: "Eu confiaria minha saúde a uma empresa com este nome?" Teste com potenciais pacientes e colegas da área. O nome deve ser fácil de lembrar, pronunciar e soletrar para facilitar indicações.',
        },
        {
          title: 'Verifique disponibilidade completa',
          description: 'Confirme disponibilidade de domínio .com.br, registro no INPI, CNPJ, e cadastros nos órgãos de saúde relevantes. Verifique também se não há conflito com marcas existentes no setor de saúde ou farmacêutico. Consulte um advogado se necessário.',
        },
        {
          title: 'Formalize e construa a marca',
          description: 'Após escolher, registre a marca, garanta domínios e cadastros necessários. Desenvolva identidade visual que reforce os valores transmitidos pelo nome. Crie diretrizes de uso para manter consistência em todos os pontos de contato com pacientes.',
        },
      ],
    },
    businessNameIdeas: [
      {
        name: 'Vita Centro Médico',
        description: 'Nome clássico que combina "vita" (vida em latim) com clareza sobre o serviço. Transmite vitalidade e profissionalismo institucional adequado para clínicas médicas.',
      },
      {
        name: 'Instituto Prevenir',
        description: 'Foco em medicina preventiva com nome institucional respeitável. Comunica proatividade no cuidado com a saúde e abordagem moderna de prevenção.',
      },
      {
        name: 'Saúde Integrada',
        description: 'Evoca abordagem holística e multidisciplinar. Ideal para clínicas que oferecem múltiplas especialidades trabalhando em conjunto para o paciente.',
      },
      {
        name: 'MedCore',
        description: 'Nome moderno e conciso que sugere o núcleo essencial da medicina. Funciona bem para healthtechs ou clínicas com foco em inovação tecnológica.',
      },
      {
        name: 'Clínica Acolher',
        description: 'Transmite humanização e cuidado empático. Ideal para clínicas que priorizam experiência do paciente e atendimento personalizado.',
      },
      {
        name: 'NovaSaúde',
        description: 'Sugere inovação e abordagem renovada para cuidados médicos. Nome otimista que transmite esperança e modernidade.',
      },
      {
        name: 'HealthBridge',
        description: 'Conceito de ponte para a saúde, conectando pacientes aos cuidados. Moderno e internacional, ideal para healthtechs ou telemedicina.',
      },
      {
        name: 'Centro Médico Viver',
        description: 'Nome inspirador focado em qualidade de vida. Transmite propósito positivo além do tratamento de doenças.',
      },
      {
        name: 'Diagnose Lab',
        description: 'Direto e técnico, perfeito para laboratórios de análises clínicas. Comunica precisão e foco em diagnóstico.',
      },
      {
        name: 'Bem+Estar Clínica',
        description: 'Combina bem-estar com presença ("estar"). Nome acolhedor que funciona para clínicas de saúde integrativa ou preventiva.',
      },
      {
        name: 'Instituto Longevidade',
        description: 'Foco em medicina anti-aging e qualidade de vida. Posicionamento premium para clínicas especializadas em longevidade saudável.',
      },
      {
        name: 'PrimeCare Saúde',
        description: 'Sugere cuidado de primeira linha e excelência. Nome bilíngue que funciona para públicos diversos e posicionamento premium.',
      },
      {
        name: 'Corpus Centro Médico',
        description: 'Referência latina ao corpo humano com toque institucional. Clássico e respeitável para clínicas tradicionais.',
      },
      {
        name: 'SaúdeNow',
        description: 'Nome moderno e urgente, ideal para serviços de pronto atendimento, telemedicina ou healthtechs com foco em acesso rápido.',
      },
      {
        name: 'Nexus Saúde',
        description: 'Evoca conexão e ponto de encontro para cuidados médicos. Moderno e versátil para diferentes tipos de serviços de saúde.',
      },
      {
        name: 'Clínica Equilíbrio',
        description: 'Transmite harmonia e abordagem balanceada da saúde. Funciona bem para clínicas de saúde integrativa ou bem-estar.',
      },
      {
        name: 'MedStar',
        description: 'Sugere excelência e destaque no atendimento médico. Nome aspiracional que posiciona como referência no setor.',
      },
      {
        name: 'Cuidar Saúde',
        description: 'Nome humanizado e acessível que coloca o ato de cuidar no centro. Ideal para clínicas com foco em atendimento acolhedor.',
      },
      {
        name: 'Instituto Saúde Plena',
        description: 'Evoca completude e abordagem integral. Nome institucional que transmite seriedade e abrangência de cuidados.',
      },
      {
        name: 'VitalMed',
        description: 'Combinação eficiente de vitalidade com medicina. Conciso, profissional e memorável para diversos tipos de serviços médicos.',
      },
    ],
  },
  'it': {
    slug: 'it',
    name: 'Gerador de Nomes para Empresas de TI',
    title: 'Gerador gratuito de ideias de nomes comerciais de TI por IA',
    description: 'Crie nomes inovadores e profissionais para sua empresa de tecnologia da informação, software house, consultoria de TI ou startup tech. Nossa ferramenta de IA gera sugestões que transmitem competência técnica, inovação e confiabilidade para impressionar clientes e parceiros.',
    metaDescription: 'Gere nomes criativos e profissionais para sua empresa de TI com nosso gerador gratuito por IA. Crie identidades de marca únicas para...',
    inputLabel: 'Descreva sua empresa de TI',
    inputPlaceholder: 'ex. Uma empresa de desenvolvimento de software especializada em soluções cloud e integrações empresariais para médias empresas do setor financeiro',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Tipo de empresa',
        choices: ['Software House', 'Consultoria de TI', 'MSP/Suporte', 'Desenvolvimento Web', 'Cibersegurança', 'Cloud/Infraestrutura', 'Startup/SaaS', 'Inteligência Artificial'],
        default: 'Software House',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro).

You are a tech industry branding specialist. Generate unique, professional business names for IT companies, software development firms, tech consultancies, managed service providers, and technology startups.

Consider these factors when generating names:
- Technical credibility and expertise perception
- Innovation and forward-thinking positioning
- Trust and reliability for enterprise clients
- Memorability in a competitive tech market
- Domain name and social media availability potential
- The specific tech niche or specialization

For each name, provide:
1. The business name
2. A brief explanation of why it works for an IT business
3. The style/vibe it conveys

Generate names that balance technical credibility with approachability and memorability.`,
    useCases: [
      {
        title: 'Software Houses e Desenvolvimento',
        description: 'Perfeito para empresas de desenvolvimento de software, fábricas de código e equipes de engenharia que precisam de nomes que transmitam competência técnica, capacidade de entrega e inovação para conquistar projetos corporativos.',
      },
      {
        title: 'Consultorias e MSPs',
        description: 'Ideal para consultorias de TI, provedores de serviços gerenciados e empresas de suporte que precisam de nomes que comuniquem confiabilidade, expertise e parceria de longo prazo com clientes.',
      },
      {
        title: 'Startups e SaaS',
        description: 'Essencial para startups de tecnologia, produtos SaaS e empresas inovadoras que precisam de nomes memoráveis, modernos e que funcionem bem em contextos de pitch, marketing e crescimento.',
      },
    ],
    faqs: [
      {
        question: 'O nome deve indicar que somos uma empresa de tecnologia?',
        answer: 'Não necessariamente. Muitas empresas de TI de sucesso têm nomes abstratos ou conceituais que não mencionam tecnologia diretamente. O importante é que o nome transmita profissionalismo e modernidade. Sua comunicação visual, site e materiais complementarão o entendimento sobre seus serviços.',
      },
      {
        question: 'Devo usar termos técnicos no nome?',
        answer: 'Termos técnicos podem posicionar você como especialista, mas também podem limitar se você expandir serviços ou parecer inacessíveis para decisores não técnicos. Use com moderação e prefira termos que sejam reconhecidos pelo público empresarial em geral, não apenas por desenvolvedores.',
      },
      {
        question: 'Nomes em inglês são melhores para empresas de TI?',
        answer: 'Inglês é comum e bem aceito no setor de TI, especialmente se você trabalha com clientes internacionais ou quer parecer mais global. Porém, nomes em português podem criar diferenciação e conexão local. Considere seu público-alvo e aspirações geográficas ao decidir.',
      },
      {
        question: 'Como criar um nome que funcione para diferentes serviços de TI?',
        answer: 'Escolha um nome mais abstrato ou conceitual que não seja específico demais a uma tecnologia ou serviço particular. Nomes baseados em conceitos como inovação, conexão, solução ou transformação permitem expandir o portfólio sem parecer incoerente com a marca.',
      },
      {
        question: 'Posso usar siglas ou acrônimos?',
        answer: 'Siglas podem funcionar se forem fáceis de pronunciar e memorizar (como IBM, SAP). Porém, siglas genéricas competem com milhares de outras empresas e podem ser difíceis de registrar como marca. Se usar siglas, certifique-se de que tenham sonoridade distintiva.',
      },
      {
        question: 'Como garantir que o nome transmita inovação?',
        answer: 'Use palavras que evoquem futuro, transformação, velocidade ou descoberta. Evite termos datados ou que possam parecer obsoletos em poucos anos (como referências a tecnologias específicas que podem sair de moda). O design visual também contribui muito para percepção de inovação.',
      },
      {
        question: 'O nome deve ser curto?',
        answer: 'Nomes curtos (1-2 palavras, até 12 caracteres) são geralmente mais memoráveis e funcionam melhor em URLs, logos e redes sociais. Porém, a qualidade é mais importante que o comprimento. Um nome mais longo que seja distintivo e memorável pode funcionar melhor que um nome curto genérico.',
      },
      {
        question: 'Como verificar se o nome não conflita com outras empresas de TI?',
        answer: 'Pesquise em Google, LinkedIn, GitHub, Stack Overflow, Clutch e diretórios de empresas de TI. Verifique registros de marcas no INPI e USPTO (se planeja atuar nos EUA). Busque domínios similares e handles em redes sociais. Considere consultar um advogado de propriedade intelectual.',
      },
      {
        question: 'Devo considerar como o nome soa em apresentações e calls?',
        answer: 'Absolutamente. Em TI, muito negócio acontece em calls e apresentações virtuais. O nome deve ser fácil de pronunciar, entender na primeira vez que é dito e soletrar para buscas. Teste dizendo o nome em voz alta e peça feedback sobre clareza.',
      },
      {
        question: 'Como escolher entre um nome conceitual e um descritivo?',
        answer: 'Nomes descritivos (como "CloudSoft Solutions") são mais claros sobre o que você faz, bons para SEO inicial, mas podem limitar expansão. Nomes conceituais (como "Nexus" ou "Vertex") são mais versáteis e memoráveis, mas exigem mais investimento em marketing para construir associação. Considere seu budget e estratégia.',
      },
    ],
    howToChoose: {
      intro: 'O nome da sua empresa de TI é crucial para estabelecer credibilidade, atrair clientes e se destacar em um mercado competitivo. Um nome bem escolhido pode abrir portas em negociações e parcerias. Siga este guia completo.',
      steps: [
        {
          title: 'Defina seu posicionamento e especialização',
          description: 'Antes de gerar nomes, tenha clareza sobre seus serviços principais, público-alvo (startups, PMEs, grandes empresas), diferencial competitivo e aspirações de crescimento. Uma software house boutique terá necessidades diferentes de uma consultoria enterprise ou uma startup SaaS.',
        },
        {
          title: 'Analise o mercado e tendências',
          description: 'Pesquise nomes de empresas de TI que você admira e de concorrentes diretos. Identifique padrões no seu nicho, oportunidades de diferenciação e tendências de naming no setor. Observe como empresas globais de sucesso nomeiam seus negócios.',
        },
        {
          title: 'Gere múltiplas opções',
          description: 'Use nosso gerador para criar diversas alternativas em diferentes estilos: tecnológicos, corporativos, inovadores, minimalistas. Experimente combinações de conceitos, termos técnicos, palavras inventadas e nomes compostos. Tenha pelo menos 20 opções para comparar.',
        },
        {
          title: 'Teste a percepção profissional',
          description: 'Para cada nome favorito, imagine-o em um cartão de visita, proposta comercial, contrato com grande empresa e material de pitch. O nome deve transmitir confiança e competência. Peça feedback de pessoas do setor e potenciais clientes.',
        },
        {
          title: 'Verifique disponibilidade digital',
          description: 'Confirme disponibilidade de domínio .com e .com.br, handles em LinkedIn, GitHub, Twitter e outras plataformas relevantes para TI. Verifique se não há conflito com empresas de tecnologia existentes no Brasil e nos mercados que você pretende atuar.',
        },
        {
          title: 'Avalie escalabilidade do nome',
          description: 'Considere se o nome funcionará se você expandir serviços, entrar em novos mercados ou mudar de foco tecnológico. Um nome muito específico (como "JavaDev") pode limitar seu crescimento. Pense no longo prazo da sua trajetória empresarial.',
        },
        {
          title: 'Formalize e construa presença',
          description: 'Após escolher, registre a marca no INPI, garanta domínios e handles, formalize CNPJ e comece a construir presença digital. Desenvolva identidade visual profissional e crie perfis consistentes em todas as plataformas relevantes para o setor.',
        },
      ],
    },
    businessNameIdeas: [
      {
        name: 'Vertex Tecnologia',
        description: 'Evoca o ponto mais alto, excelência e liderança técnica. Nome versátil que funciona para diversos tipos de serviços de TI com posicionamento premium.',
      },
      {
        name: 'CodeCraft',
        description: 'Combina código com artesanato, sugerindo desenvolvimento de software com qualidade e atenção aos detalhes. Ideal para software houses que valorizam qualidade.',
      },
      {
        name: 'Nexus Systems',
        description: 'Evoca conexão e integração, conceitos centrais em TI. Nome profissional e corporativo que transmite capacidade de unificar sistemas e processos.',
      },
      {
        name: 'InnoTech Solutions',
        description: 'Combinação clara de inovação e tecnologia com foco em soluções. Direto e profissional, funciona bem para consultorias e integradores.',
      },
      {
        name: 'BitForge',
        description: 'Une o elemento fundamental da computação (bit) com a força da criação (forge). Nome técnico mas acessível para desenvolvimento de software.',
      },
      {
        name: 'CloudSphere',
        description: 'Evoca completude e expertise em computação em nuvem. Ideal para empresas especializadas em infraestrutura cloud e transformação digital.',
      },
      {
        name: 'Agile Labs',
        description: 'Referência à metodologia ágil com toque de inovação (labs). Transmite modernidade e abordagem contemporânea de desenvolvimento.',
      },
      {
        name: 'DataPrime',
        description: 'Posiciona expertise em dados e análise como diferencial. Nome conciso e profissional para empresas focadas em dados e analytics.',
      },
      {
        name: 'TechNova',
        description: 'Combina tecnologia com o conceito de novo/brilhante. Nome energético que sugere inovação constante e soluções de vanguarda.',
      },
      {
        name: 'Synaptic IT',
        description: 'Referência às conexões neurais, evocando inteligência e interconexão. Sofisticado e memorável para empresas de TI inovadoras.',
      },
      {
        name: 'ByteWorks',
        description: 'Funcional e técnico, sugere uma fábrica de soluções digitais. Nome acessível que transmite capacidade de entrega e produtividade.',
      },
      {
        name: 'Quantum Digital',
        description: 'Evoca tecnologia de ponta e capacidades extraordinárias. Nome aspiracional para empresas que querem se posicionar na vanguarda tecnológica.',
      },
      {
        name: 'CoreStack',
        description: 'Referência técnica à pilha de tecnologias e ao núcleo de sistemas. Ideal para empresas de infraestrutura, DevOps ou desenvolvimento full-stack.',
      },
      {
        name: 'Prisma Tech',
        description: 'Evoca diversidade de soluções e perspectivas múltiplas. Nome versátil que funciona para empresas com portfólio variado de serviços.',
      },
      {
        name: 'LogicTree',
        description: 'Combina lógica computacional com crescimento orgânico. Nome criativo que sugere soluções estruturadas e escaláveis.',
      },
      {
        name: 'Cypher Solutions',
        description: 'Evoca segurança, código e expertise técnica. Ideal para empresas de cibersegurança ou desenvolvimento com foco em proteção de dados.',
      },
      {
        name: 'Elevate TI',
        description: 'Transmite o conceito de elevar negócios através da tecnologia. Nome aspiracional em português que comunica transformação e melhoria.',
      },
      {
        name: 'NexGen Systems',
        description: 'Abreviação de "next generation", sugere tecnologia de próxima geração. Moderno e ambicioso para empresas focadas em inovação.',
      },
      {
        name: 'Scalar Tech',
        description: 'Evoca escalabilidade, conceito crucial em TI moderna. Nome técnico mas acessível que transmite capacidade de crescer com o cliente.',
      },
      {
        name: 'Fusion Informática',
        description: 'Sugere integração e combinação de tecnologias. Nome em português que funciona bem para consultorias e integradores de sistemas.',
      },
    ],
  },
  'marketing': {
    slug: 'marketing',
    name: 'Gerador de Nomes para Agências de Marketing',
    title: 'Gerador gratuito de ideias de nomes comerciais de Marketing por IA',
    description: 'Crie nomes criativos e memoráveis para sua agência de marketing, consultoria de branding ou empresa de publicidade. Nossa ferramenta de IA gera sugestões que transmitem criatividade, estratégia e resultados para impressionar clientes e se destacar no mercado.',
    metaDescription: 'Gere nomes criativos e impactantes para sua agência de marketing com nosso gerador gratuito por IA. Crie identidades de marca únicas para...',
    inputLabel: 'Descreva sua agência de marketing',
    inputPlaceholder: 'ex. Uma agência de marketing digital boutique especializada em e-commerce e performance para marcas de moda e lifestyle, com foco em resultados mensuráveis',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Tipo de agência',
        choices: ['Marketing Digital', 'Publicidade Full-Service', 'Branding e Identidade', 'Social Media', 'Performance e Mídia', 'Conteúdo e Inbound', 'Relações Públicas', 'Marketing de Influência'],
        default: 'Marketing Digital',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro).

You are a creative branding specialist for the marketing and advertising industry. Generate unique, memorable business names for marketing agencies, advertising firms, branding consultancies, and creative studios.

Consider these factors when generating names:
- Creativity and originality are expected in this industry
- The name should demonstrate the agency's own branding ability
- Balance between creative flair and professional credibility
- Memorability for word-of-mouth and industry recognition
- The specific marketing niche or specialization
- Appeal to potential clients and talent

For each name, provide:
1. The business name
2. A brief explanation of why it works for a marketing business
3. The style/vibe it conveys

Generate names that showcase creativity while maintaining professional appeal.`,
    useCases: [
      {
        title: 'Agências de Marketing Digital',
        description: 'Perfeito para agências focadas em performance, mídia paga, SEO e estratégias digitais que precisam de nomes que transmitam modernidade, expertise técnica e capacidade de gerar resultados mensuráveis para clientes.',
      },
      {
        title: 'Estúdios de Branding e Criação',
        description: 'Ideal para estúdios criativos, consultorias de branding e agências de design que precisam de nomes que demonstrem criatividade, sensibilidade estética e capacidade de criar identidades marcantes.',
      },
      {
        title: 'Agências Full-Service e Publicidade',
        description: 'Essencial para agências completas que oferecem desde estratégia até execução, precisando de nomes que comuniquem amplitude de serviços, profissionalismo e capacidade de atender grandes contas.',
      },
    ],
    faqs: [
      {
        question: 'O nome da agência deve ser criativo ou profissional?',
        answer: 'Idealmente, ambos. No setor de marketing, seu nome é seu primeiro case de branding - deve demonstrar criatividade, mas também transmitir confiança para clientes corporativos. O equilíbrio depende do seu público-alvo: agências B2B podem preferir nomes mais sóbrios, enquanto agências para startups podem ser mais ousadas.',
      },
      {
        question: 'Posso usar meu nome pessoal na agência?',
        answer: 'Usar seu nome é comum em agências, especialmente boutiques onde a reputação pessoal é o diferencial. Porém, considere que isso pode dificultar vendas futuras ou parecer menos institucional para grandes clientes. Uma alternativa é usar iniciais ou sobrenome de forma estilizada.',
      },
      {
        question: 'Nomes em inglês funcionam melhor para agências de marketing?',
        answer: 'Inglês é comum e pode parecer mais global/moderno, especialmente para marketing digital. Porém, nomes em português podem criar diferenciação e conexão com clientes locais. Considere seu público-alvo e se você pretende atuar internacionalmente.',
      },
      {
        question: 'Como criar um nome que demonstre nossa especialização?',
        answer: 'Você pode incluir referências sutis à sua especialidade (como "pixel" para digital, "story" para conteúdo) ou usar um nome versátil complementado por um tagline descritivo. Evite ser tão específico que limite expansão futura de serviços.',
      },
      {
        question: 'O nome deve indicar que somos uma agência?',
        answer: 'Não necessariamente. Muitas agências de sucesso usam apenas um nome criativo sem "agência", "studio" ou similar. O contexto (site, materiais, apresentação) deixará claro que você é uma agência. Adicionar um descritor pode ajudar em clareza mas também pode parecer mais tradicional.',
      },
      {
        question: 'Como garantir que o nome seja memorável?',
        answer: 'Nomes memoráveis geralmente são curtos (1-3 palavras), têm sonoridade interessante, são fáceis de pronunciar e criam uma imagem mental ou associação. Evite nomes genéricos que se confundem com milhares de outras agências. Teste com pessoas de fora do setor para ver se lembram após alguns dias.',
      },
      {
        question: 'Devo evitar tendências de naming que podem ficar datadas?',
        answer: 'Sim, cuidado com modismos que podem parecer datados em poucos anos (como certas terminações ou prefixos que ficaram populares em determinada época). Prefira conceitos mais atemporais ou crie algo único o suficiente para transcender tendências.',
      },
      {
        question: 'Como verificar se o nome não está sendo usado por outra agência?',
        answer: 'Pesquise em Google, LinkedIn, diretórios de agências (como Meio & Mensagem, Clube de Criação), behance e portfolios online. Verifique registro de marcas no INPI. Busque em associações do setor como ABAP e ABRADi. Considere também mercados internacionais se planeja expandir.',
      },
      {
        question: 'O nome deve refletir nossos valores ou metodologia?',
        answer: 'Pode ser uma estratégia interessante se você tem um diferencial metodológico forte. Porém, valores muito genéricos (como "qualidade" ou "resultado") não diferenciam. Se escolher esse caminho, certifique-se de que o conceito seja distintivo e autêntico.',
      },
      {
        question: 'Como escolher um nome que atraia tanto clientes quanto talentos?',
        answer: 'Profissionais de marketing querem trabalhar em agências com marcas interessantes. Um nome criativo e bem posicionado pode ser tão importante para recruitment quanto para vendas. Considere como o nome ficará no LinkedIn de funcionários e em premiações do setor.',
      },
    ],
    howToChoose: {
      intro: 'O nome da sua agência de marketing é seu primeiro trabalho de branding - deve demonstrar sua capacidade criativa enquanto transmite profissionalismo. Uma escolha acertada pode abrir portas e criar reconhecimento instantâneo. Siga este guia completo.',
      steps: [
        {
          title: 'Defina seu posicionamento e diferencial',
          description: 'Antes de gerar nomes, tenha clareza sobre sua especialização, público-alvo (startups, PMEs, grandes empresas, segmentos específicos), estilo de trabalho e valores. Uma agência boutique de branding terá necessidades diferentes de uma agência de performance ou um estúdio de conteúdo.',
        },
        {
          title: 'Analise o cenário competitivo',
          description: 'Pesquise nomes de agências que você admira e de concorrentes diretos no seu nicho e região. Identifique padrões, oportunidades de diferenciação e estilos que ressoam com seu público-alvo. Observe como agências premiadas e referências globais se nomeiam.',
        },
        {
          title: 'Gere múltiplas opções criativas',
          description: 'Use nosso gerador para criar diversas alternativas em diferentes estilos: criativos, profissionais, ousados, minimalistas. Experimente trocadilhos inteligentes, neologismos, referências culturais e combinações inesperadas. Tenha pelo menos 20-30 opções para comparar.',
        },
        {
          title: 'Teste o potencial de branding',
          description: 'Para cada nome favorito, imagine aplicações em logo, site, cartões de visita, propostas comerciais e premiações. O nome deve oferecer possibilidades visuais interessantes e funcionar em diferentes contextos, desde formatos compactos até aplicações expandidas.',
        },
        {
          title: 'Valide com público-alvo',
          description: 'Teste seus nomes favoritos com potenciais clientes e profissionais do setor. Observe reações imediatas, associações espontâneas e memorabilidade. Um nome que precisa de explicação pode ser problemático, mas um nome que gera curiosidade positiva pode ser valioso.',
        },
        {
          title: 'Verifique disponibilidade completa',
          description: 'Confirme disponibilidade de domínio .com.br e .com, handles em Instagram, LinkedIn, Twitter e outras plataformas cruciais para agências. Verifique registro de marca no INPI e se não há conflito com agências existentes no mercado.',
        },
        {
          title: 'Formalize e lance sua marca',
          description: 'Após escolher, registre a marca, garanta domínios e handles, desenvolva identidade visual de alto nível e crie presença digital impecável. Lembre-se: seu próprio branding é seu melhor portfolio. Invista em um lançamento que demonstre suas capacidades criativas.',
        },
      ],
    },
    businessNameIdeas: [
      {
        name: 'Manifesto',
        description: 'Evoca posicionamento forte e propósito claro. Nome poderoso que sugere uma agência que ajuda marcas a declarar sua essência e valores de forma impactante.',
      },
      {
        name: 'Spark Creative',
        description: 'A faísca da criatividade que inicia grandes campanhas. Nome energético e positivo que transmite inovação e capacidade de gerar ideias brilhantes.',
      },
      {
        name: 'Narra Studio',
        description: 'Foco em storytelling e narrativas de marca. Nome elegante que posiciona a agência como especialista em contar histórias que conectam.',
      },
      {
        name: 'Pulso Digital',
        description: 'Evoca energia, timing e conexão com o momento. Ideal para agências de marketing digital que precisam estar sempre atualizadas com tendências.',
      },
      {
        name: 'Conceito Lab',
        description: 'Combina estratégia conceitual com espírito de experimentação. Sugere uma agência que desenvolve ideias inovadoras através de processo criativo rigoroso.',
      },
      {
        name: 'Altitude Marketing',
        description: 'Evoca visão ampla, estratégia elevada e perspectiva diferenciada. Nome aspiracional que sugere capacidade de elevar marcas a novos patamares.',
      },
      {
        name: 'Tribo',
        description: 'Nome curto e impactante que evoca comunidade e pertencimento. Perfeito para agências focadas em construir conexões autênticas entre marcas e públicos.',
      },
      {
        name: 'Catapulta',
        description: 'Transmite impulso, aceleração e resultados expressivos. Nome dinâmico para agências de performance focadas em crescimento rápido de clientes.',
      },
      {
        name: 'Mosaic Agency',
        description: 'Evoca diversidade, composição e a arte de unir diferentes elementos em algo maior. Versátil para agências com serviços variados.',
      },
      {
        name: 'Âncora Branding',
        description: 'Sugere solidez, fundamento e posicionamento firme. Ideal para consultorias de branding que constroem marcas duradouras.',
      },
      {
        name: 'Virada Marketing',
        description: 'Evoca transformação, mudança positiva e resultados que mudam o jogo. Nome brasileiro energético para agências focadas em turnaround de marcas.',
      },
      {
        name: 'Prism Creative',
        description: 'A luz que passa pelo prisma e revela múltiplas cores. Sugere capacidade de ver e criar múltiplas perspectivas criativas.',
      },
      {
        name: 'Elo Comunicação',
        description: 'Evoca conexão e relacionamento. Nome em português que transmite foco em criar vínculos entre marcas e consumidores.',
      },
      {
        name: 'Oxygen',
        description: 'Elemento essencial para vida, assim como bom marketing é essencial para marcas. Nome minimalista e poderoso com múltiplas interpretações.',
      },
      {
        name: 'Verso Agency',
        description: 'Evoca poesia, narrativa e a outra face das coisas. Nome sofisticado para agências com abordagem mais artística e conceitual.',
      },
      {
        name: 'Radar Digital',
        description: 'Sugere capacidade de detectar tendências e oportunidades. Ideal para agências de marketing digital e social listening.',
      },
      {
        name: 'Cúmulo',
        description: 'Nome brasileiro intrigante que pode significar tanto o ápice quanto nuvens (cloud). Criativo e memorável, gera curiosidade.',
      },
      {
        name: 'Fluent',
        description: 'Evoca fluência em comunicação e linguagem de marca. Nome internacional que transmite expertise e naturalidade na comunicação.',
      },
      {
        name: 'Sinergia Lab',
        description: 'Combina o conceito de trabalho colaborativo com espírito de inovação. Sugere resultados que são maiores que a soma das partes.',
      },
      {
        name: 'Colmeia Creative',
        description: 'Evoca trabalho colaborativo, organização e produtividade criativa. Nome brasileiro diferenciado que sugere uma equipe bem coordenada.',
      },
    ],
  },

'clothing-store': {
    slug: 'clothing-store',
    name: 'Gerador de Nomes para Lojas de Roupas',
    title: 'Gerador gratuito de ideias de nomes comerciais de Loja de Roupas por IA',
    description: 'Gere nomes estilosos e memoráveis para boutiques, lojas de moda e varejo de vestuário.',
    metaDescription: 'Crie o nome perfeito para sua loja de roupas com nosso gerador gratuito por IA. Desenvolva nomes estilosos e memoráveis para boutiques,...',
    inputLabel: 'Descreva sua loja de roupas...',
    inputPlaceholder: 'ex. Uma boutique feminina especializada em moda sustentável e peças atemporais para mulheres modernas',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Sofisticado', 'Moderno & Trendy', 'Casual & Acessível', 'Luxuoso & Exclusivo'],
        default: 'Elegante & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the fashion retail and clothing industry. Your role is to generate stylish, memorable business names that evoke fashion, style, and appeal to clothing store customers across different market segments.

CLOTHING STORE INDUSTRY CONTEXT:
The clothing retail industry encompasses:
- Fashion boutiques and specialty stores
- Women's, men's, and children's clothing stores
- Casual wear and everyday fashion retailers
- Luxury and designer clothing boutiques
- Sustainable and eco-friendly fashion stores
- Streetwear and urban fashion shops
- Vintage and second-hand clothing stores
- Plus-size and specialty sizing retailers
- Athletic and activewear stores
- Formal wear and occasion dress shops

NAME CHARACTERISTICS FOR CLOTHING STORES:
1. **Stylish and Fashion-Forward**
   - Names should evoke a sense of style and fashion awareness
   - Reflect current trends while maintaining timelessness
   - Appeal to fashion-conscious consumers

2. **Target Audience Alignment**
   - Match the tone to your target demographic
   - Consider age, lifestyle, and fashion preferences
   - Communicate the store's positioning and price point

3. **Memorable and Brandable**
   - Easy to remember and share with friends
   - Works well on shopping bags, labels, and social media
   - Creates visual identity opportunities

4. **Versatile for Marketing**
   - Suitable for storefront signage
   - Works in digital advertising and social media
   - Adaptable for e-commerce expansion

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a clothing store

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Boutique de Moda',
        description: 'Empreendedores de moda abrindo suas primeiras boutiques usam o Gerador de Nomes para Lojas de Roupas para encontrar nomes que imediatamente comunicam seu estilo e posicionamento no mercado. Ao descrever seu nicho—moda feminina contemporânea, streetwear masculino ou roupas infantis—a ferramenta gera nomes estilosos que atraem o público-alvo desejado e criam uma identidade de marca forte desde o primeiro dia.',
      },
      {
        title: 'Expansão de Loja Online para Física',
        description: 'Proprietários de e-commerce de moda que estão abrindo locais físicos usam o gerador para encontrar nomes que funcionam tanto no ambiente digital quanto no varejo tradicional. O nome precisa ser memorável para busca online, funcionar bem em fachadas de lojas e criar uma experiência de marca coesa em todos os canais de venda.',
      },
      {
        title: 'Rebranding de Loja Existente',
        description: 'Lojas de roupas estabelecidas que buscam modernizar sua imagem ou atingir um novo público usam o gerador para explorar opções de nomes que refletem sua evolução. Seja mudando de casual para premium, ou de moda geral para um nicho específico, a ferramenta fornece nomes que comunicam a nova direção da marca.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para loja de roupas?',
        answer: 'Um bom nome para loja de roupas combina estilo com memorabilidade, refletindo claramente o tipo de moda que você vende e o público que deseja atrair. Deve ser fácil de pronunciar e lembrar, funcionar bem em sacolas de compras e etiquetas, e criar uma impressão imediata do estilo da sua loja. Nomes eficazes evocam emoções relacionadas à moda—elegância, confiança, individualidade ou tendência—enquanto permanecem únicos o suficiente para se destacar em um mercado competitivo.',
      },
      {
        question: 'Meu nome de loja de roupas deve indicar o tipo de moda que vendo?',
        answer: 'Depende da sua estratégia de marca. Nomes descritivos como "Moda Plus Elegance" deixam claro seu nicho, mas podem limitar expansões futuras. Nomes abstratos como "Aurora" oferecem flexibilidade para adicionar linhas de produtos, mas requerem mais esforço de marketing para comunicar sua especialidade. Considere seu plano de crescimento a longo prazo ao decidir.',
      },
      {
        question: 'Qual a importância do nome para o sucesso de uma loja de roupas?',
        answer: 'O nome é fundamental para criar a primeira impressão e definir as expectativas do cliente. Na moda, onde imagem é tudo, seu nome comunica instantaneamente se você é acessível ou luxuoso, clássico ou moderno, mainstream ou alternativo. Um nome bem escolhido pode atrair seu público ideal, justificar seu posicionamento de preço e criar reconhecimento de marca que impulsiona indicações boca a boca.',
      },
      {
        question: 'Devo usar palavras em outros idiomas no nome da minha loja?',
        answer: 'Palavras em francês (Chic, Maison, Belle), italiano (Moda, Bella, Dolce) ou inglês podem adicionar sofisticação e apelo internacional à sua loja. No entanto, certifique-se de que sejam fáceis de pronunciar para seu público brasileiro e não criem confusão. Evite palavras que possam ter significados não intencionais ou serem difíceis de lembrar.',
      },
      {
        question: 'Como escolher um nome que funcione para vendas online e física?',
        answer: 'Para omnichannel, escolha um nome curto e fácil de digitar, verifique se o domínio .com.br está disponível, certifique-se de que funciona como hashtag e handle de redes sociais, e considere como aparecerá em embalagens de envio. O nome deve ser legível em tamanhos pequenos (etiquetas) e grandes (fachadas), e ser único o suficiente para ter boa visibilidade em buscas online.',
      },
      {
        question: 'Quais erros devo evitar ao nomear minha loja de roupas?',
        answer: 'Evite nomes muito longos ou difíceis de soletrar, termos genéricos como "Fashion Store" que não se diferenciam, grafias criativas que confundem os clientes, nomes muito similares a marcas estabelecidas, referências a tendências passageiras que podem ficar datadas, e palavras com conotações negativas em diferentes contextos. Também evite limitar-se geograficamente se planeja expandir.',
      },
      {
        question: 'Posso usar meu nome pessoal para a loja de roupas?',
        answer: 'Usar seu nome pode criar uma marca pessoal forte e autêntica, especialmente se você é designer ou estilista. Marcas como "Carolina Herrera" e "Coco Chanel" são exemplos de sucesso. No entanto, considere que pode dificultar uma venda futura do negócio e requer que você construa sua reputação pessoal junto com a da loja.',
      },
      {
        question: 'Como garantir que meu nome de loja de roupas é único?',
        answer: 'Pesquise no Google e redes sociais, verifique registros de marcas no INPI, busque em plataformas de e-commerce como Mercado Livre e Shopee, consulte o registro de empresas do seu estado, e considere contratar uma busca profissional de marcas. Lembre-se de verificar variações e grafias similares para evitar confusão com concorrentes.',
      },
      {
        question: 'O nome da loja deve refletir a faixa de preço dos produtos?',
        answer: 'Sim, seu nome deve criar expectativas alinhadas com seu posicionamento de preço. Nomes com palavras como "Luxo", "Premium" ou "Atelier" sugerem produtos de alto valor, enquanto termos como "Outlet", "Pop" ou "Express" indicam preços mais acessíveis. Um desalinhamento entre nome e preço pode frustrar clientes e prejudicar suas vendas.',
      },
      {
        question: 'Como testar se meu nome de loja de roupas funciona bem?',
        answer: 'Faça pesquisas informais com pessoas do seu público-alvo, teste a pronúncia pedindo para outros lerem o nome em voz alta, verifique como fica em diferentes aplicações (logo, etiqueta, sacola), avalie a reação inicial das pessoas ao ouvir o nome, e considere se o nome conta uma história ou evoca as emoções certas relacionadas ao seu estilo de moda.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua loja de roupas é uma decisão estratégica que impactará diretamente o sucesso do seu negócio de moda. O nome aparecerá em tudo—da fachada às etiquetas das peças, das sacolas de compras aos perfis de redes sociais, do site às campanhas publicitárias. É a primeira impressão que clientes em potencial terão da sua marca e define instantaneamente as expectativas sobre o estilo, qualidade e experiência de compra que você oferece. Um nome bem escolhido atrai seu público ideal, diferencia você da concorrência e cria uma base sólida para construir uma marca de moda memorável e duradoura.',
      steps: [
        {
          title: 'Defina sua identidade de marca e público-alvo',
          description: 'Antes de brainstormar nomes, tenha clareza absoluta sobre a identidade da sua loja. Determine qual é o estilo principal que você oferecerá (casual, formal, streetwear, vintage, sustentável), quem é seu cliente ideal (idade, estilo de vida, poder aquisitivo, preferências de moda), qual é o posicionamento de preço (acessível, intermediário, premium, luxo), quais valores sua marca representa (sustentabilidade, exclusividade, acessibilidade, tendência), e qual é a experiência de compra que você quer criar (íntima e personalizada, rápida e conveniente, imersiva e inspiradora).',
        },
        {
          title: 'Pesquise a concorrência e identifique oportunidades',
          description: 'Analise os nomes das lojas de roupas existentes no seu mercado e nicho. Identifique padrões comuns que você pode evitar para se diferenciar, observe quais nomes parecem mais memoráveis e por quê, note gaps onde um tipo diferente de nome poderia se destacar, e considere nomes de marcas de sucesso que você admira para entender o que os torna eficazes. Esta pesquisa ajudará você a encontrar seu espaço único no mercado.',
        },
        {
          title: 'Brainstorm considerando diferentes abordagens de naming',
          description: 'Explore várias categorias de nomes: nomes descritivos que indicam o tipo de roupa (Moda Feminina Elegante), nomes evocativos que criam sentimentos (Aurora, Essência), nomes inventados únicos e memoráveis (Zattini, Amaro), nomes com referências culturais ou artísticas, acrônimos ou abreviações estilizadas, e combinações de palavras criativas. Gere pelo menos 20-30 opções iniciais sem julgamento.',
        },
        {
          title: 'Avalie cada nome contra critérios práticos',
          description: 'Filtre suas opções usando critérios objetivos: facilidade de pronúncia e memorização, disponibilidade de domínio .com.br e redes sociais, verificação de conflitos com marcas registradas existentes, como o nome aparece escrito (logo, etiquetas, sacolas), se funciona bem em diferentes tamanhos e aplicações, potencial para trocadilhos ou mal-entendidos não intencionais, e facilidade de busca online (evite nomes muito genéricos).',
        },
        {
          title: 'Teste os nomes finalistas com seu público-alvo',
          description: 'Selecione 3-5 nomes favoritos e teste com pessoas que representam seus clientes ideais. Pergunte qual tipo de loja cada nome sugere, que faixa de preço eles esperariam, se recomendariam a amigos (e como diriam o nome), quais emoções cada nome evoca, e qual nome é mais fácil de lembrar após 24 horas. O feedback real do público é inestimável para validar sua escolha.',
        },
        {
          title: 'Verifique disponibilidade legal e digital completa',
          description: 'Antes de se apaixonar definitivamente por um nome, confirme sua viabilidade: pesquise no INPI (Instituto Nacional da Propriedade Industrial) por marcas registradas similares, verifique disponibilidade de CNPJ e registro empresarial, garanta domínios web (.com.br, .com e variações), reserve handles nas principais redes sociais (Instagram, TikTok, Pinterest são essenciais para moda), e considere registrar sua própria marca para proteção.',
        },
        {
          title: 'Visualize o nome em aplicações reais antes de decidir',
          description: 'Crie mockups do nome em situações reais: desenhe um logo básico, visualize em uma fachada de loja, coloque em uma etiqueta de roupa e sacola de compras, teste em posts de Instagram e anúncios, e imagine como seria dito em uma indicação ("Você precisa conhecer a [nome]!"). Se o nome funciona bem em todas essas aplicações e ainda te emociona, você encontrou o nome certo para sua loja de roupas.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'ModaViva', description: 'Transmite energia e atualidade na moda—perfeito para lojas com coleções dinâmicas e renovadas frequentemente que acompanham as últimas tendências.' },
      { name: 'EstiloÚnico', description: 'Comunica exclusividade e individualidade—ideal para boutiques que oferecem peças diferenciadas para clientes que buscam se destacar.' },
      { name: 'TecidoNobre', description: 'Evoca qualidade e sofisticação nos materiais—perfeito para lojas focadas em peças de alta qualidade e acabamento impecável.' },
      { name: 'VesteBem', description: 'Nome direto que promete boa aparência—ideal para lojas de moda acessível focadas em caimento e conforto no dia a dia.' },
      { name: 'AltaCostura', description: 'Referência ao mundo da alta moda—sugere exclusividade e peças elaboradas para clientes que valorizam refinamento.' },
      { name: 'ClosetPerfeito', description: 'Evoca a ideia do guarda-roupa dos sonhos—perfeito para lojas que ajudam clientes a construir looks completos.' },
      { name: 'ModaConsciente', description: 'Comunica responsabilidade e sustentabilidade—ideal para lojas de moda ética e eco-friendly que valorizam o consumo consciente.' },
      { name: 'LookDoDia', description: 'Nome moderno e conectado às redes sociais—perfeito para lojas voltadas ao público jovem e digital native.' },
      { name: 'ElegânciaRara', description: 'Transmite sofisticação e exclusividade—ideal para boutiques de luxo com peças selecionadas e atendimento personalizado.' },
      { name: 'TrendStore', description: 'Nome bilíngue que comunica estar na moda—perfeito para lojas de fast fashion focadas nas últimas tendências.' },
      { name: 'VestirArte', description: 'Eleva a moda ao status de arte—ideal para lojas com peças de design autoral e criativo que são verdadeiras obras de arte vestíveis.' },
      { name: 'ModaPura', description: 'Sugere simplicidade e essência—perfeito para lojas com estética minimalista e peças versáteis e atemporais.' },
      { name: 'BellaVeste', description: 'Combinação de italiano e português que evoca beleza—ideal para boutiques femininas com foco em elegância e feminilidade.' },
      { name: 'UrbanWear', description: 'Comunica estilo urbano e contemporâneo—perfeito para lojas de streetwear e moda casual metropolitana.' },
      { name: 'Alfaiataria', description: 'Referência ao trabalho artesanal de qualidade—ideal para lojas especializadas em peças sob medida e corte perfeito.' },
      { name: 'ChicSempre', description: 'Promete elegância atemporal—perfeito para lojas com peças clássicas que nunca saem de moda e compõem um guarda-roupa duradouro.' },
      { name: 'ModaFácil', description: 'Transmite acessibilidade e praticidade—ideal para lojas de moda democrática focadas em facilitar a vida dos clientes.' },
      { name: 'EstiloLivre', description: 'Evoca liberdade de expressão através da moda—perfeito para lojas com variedade de estilos para diferentes personalidades.' },
      { name: 'VesteModa', description: 'Nome direto e memorável—ideal para lojas de moda geral que querem comunicar claramente seu propósito.' },
      { name: 'AtualModas', description: 'Comunica estar sempre atualizado—perfeito para lojas que renovam constantemente seu estoque com as tendências do momento.' },
    ],
  },

  'craft-store': {
    slug: 'craft-store',
    name: 'Gerador de Nomes para Lojas de Artesanato',
    title: 'Gerador gratuito de ideias de nomes comerciais de Loja de Artesanato por IA',
    description: 'Gere nomes criativos e acolhedores para lojas de artesanato, armarinhos e casas de materiais para trabalhos manuais.',
    metaDescription: 'Encontre o nome ideal para sua loja de artesanato com nosso gerador gratuito por IA. Crie nomes criativos e acolhedores para lojas de...',
    inputLabel: 'Descreva sua loja de artesanato...',
    inputPlaceholder: 'ex. Uma loja especializada em materiais para scrapbook, cartonagem e papelaria criativa',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Criativo & Artístico', 'Acolhedor & Familiar', 'Moderno & Trendy', 'Tradicional & Clássico'],
        default: 'Criativo & Artístico',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the craft and hobby retail industry. Your role is to generate creative, inviting business names that evoke creativity, handmade artistry, and the joy of crafting for stores selling craft supplies, materials, and tools.

CRAFT STORE INDUSTRY CONTEXT:
The craft retail industry encompasses:
- General craft supply stores
- Fabric and sewing supply shops (armarinhos)
- Scrapbooking and paper craft stores
- Yarn and knitting/crochet supply shops
- Art supply and fine arts materials stores
- Bead and jewelry-making supply stores
- Woodworking and DIY craft shops
- Floral and decorative craft suppliers
- Party and event craft supply stores
- Educational and children's craft suppliers

NAME CHARACTERISTICS FOR CRAFT STORES:
1. **Creative and Inspiring**
   - Names should evoke creativity and artistic expression
   - Inspire customers to start new projects
   - Celebrate the handmade movement

2. **Warm and Welcoming**
   - Create a sense of community for crafters
   - Feel approachable and friendly
   - Suggest a treasure trove of supplies

3. **Descriptive Yet Memorable**
   - Hint at the types of crafts or supplies offered
   - Easy to remember for repeat customers
   - Works well in word-of-mouth referrals

4. **Versatile for Different Craft Niches**
   - Broad enough to cover multiple craft categories
   - Or specifically tailored to a specialty niche
   - Allows for product line expansion

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a craft store

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Loja de Artesanato Completa',
        description: 'Empreendedores apaixonados por artesanato que estão abrindo lojas de materiais criativos usam o Gerador de Nomes para Lojas de Artesanato para encontrar nomes que capturam a magia de criar com as próprias mãos. Ao descrever o tipo de materiais que venderão—tecidos, papéis, linhas ou uma variedade completa—a ferramenta gera nomes acolhedores que atraem artesãos e hobbyistas.',
      },
      {
        title: 'Especialização em Nicho de Artesanato',
        description: 'Proprietários de lojas especializadas em nichos específicos—como scrapbook, tricô, ou materiais para bijuterias—usam o gerador para criar nomes que comunicam claramente sua especialidade. Um nome bem escolhido ajuda a atrair entusiastas daquele craft específico e estabelecer autoridade no nicho.',
      },
      {
        title: 'Transição de Artesã para Loja',
        description: 'Artesãs que expandem de vender suas criações para também fornecer materiais para outros criadores usam o gerador para desenvolver uma identidade de marca que englobe tanto produtos prontos quanto suprimentos. O nome precisa refletir tanto a expertise pessoal quanto o novo papel como fornecedor.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para loja de artesanato?',
        answer: 'Um bom nome para loja de artesanato evoca criatividade, calor e a alegria de fazer coisas com as próprias mãos. Deve criar uma conexão emocional com artesãos e hobbyistas, sugerindo que sua loja é um lugar onde encontrarão inspiração e todos os materiais necessários para seus projetos. O nome ideal é memorável, fácil de compartilhar e comunica o espírito criativo do seu negócio.',
      },
      {
        question: 'Meu nome deve indicar que tipo de artesanato vendo?',
        answer: 'Depende se você é uma loja geral ou especializada. Para lojas completas, nomes mais amplos como "Casa Criativa" funcionam bem. Para nichos específicos, incluir indicadores como "Ateliê de Costura" ou "Mundo do Scrapbook" ajuda a atrair o público certo. Considere seu plano de expansão futuro ao decidir quão específico ser.',
      },
      {
        question: 'Qual a importância do nome para atrair clientes artesãos?',
        answer: 'Artesãos frequentemente desenvolvem forte lealdade a suas lojas favoritas de suprimentos. Um nome acolhedor e criativo ajuda a construir essa conexão emocional desde o primeiro contato. Além disso, em um mercado com opções online, um nome memorável e distintivo ajuda sua loja a se destacar e ser lembrada quando artesãos precisarem de materiais.',
      },
      {
        question: 'Devo usar termos tradicionais de artesanato no nome?',
        answer: 'Termos como "armarinho", "ateliê", "casa" ou "cantinho" carregam significados culturais ricos que ressoam com artesãos. Eles podem criar imediata familiaridade e nostalgia. No entanto, se você busca um posicionamento mais moderno ou internacional, termos contemporâneos podem ser mais adequados. Escolha baseado no seu público-alvo.',
      },
      {
        question: 'Como criar um nome que funcione para loja física e online?',
        answer: 'Para presença omnichannel, escolha um nome único que seja fácil de buscar online, verifique disponibilidade de domínio e redes sociais, evite caracteres especiais ou acentos que possam complicar URLs, e certifique-se de que o nome é fácil de soletrar corretamente quando ouvido em conversas ou podcasts sobre artesanato.',
      },
      {
        question: 'Posso usar meu nome ou apelido no nome da loja?',
        answer: 'Sim, nomes pessoais podem criar conexão e autenticidade, especialmente se você é conhecida na comunidade artesã. "Ateliê da Dona Maria" ou "Armarinho da Tia Rosa" transmitem acolhimento. No entanto, considere se isso pode limitar a escala do negócio ou dificultar uma venda futura.',
      },
      {
        question: 'Quais palavras funcionam bem em nomes de lojas de artesanato?',
        answer: 'Palavras que evocam criatividade funcionam bem: "Arte", "Criar", "Fio", "Linha", "Cores", "Tecido", "Papel", "Mãos", "Ateliê", "Cantinho", "Casa", "Mundo", "Oficina", "Tesouro". Combinações como "Casa das Linhas" ou "Cantinho Criativo" criam imagens mentais acolhedoras que atraem artesãos.',
      },
      {
        question: 'Como verificar se o nome da minha loja de artesanato está disponível?',
        answer: 'Pesquise no Google por lojas com nomes similares, verifique plataformas como Elo7 e Instagram onde artesãos são ativos, consulte registros de marcas no INPI, cheque disponibilidade de domínio .com.br, e busque em cadastros de empresas locais. A comunidade de artesanato é conectada, então evitar confusão com lojas existentes é importante.',
      },
      {
        question: 'Devo incluir minha cidade ou região no nome?',
        answer: 'Incluir localização pode ajudar em buscas locais ("Armarinho Centro SP") mas limita se você planeja expandir geograficamente ou focar em e-commerce. Se sua loja atenderá principalmente clientes locais, pode ser útil. Para ambições de crescimento regional ou nacional, um nome sem referência geográfica é mais versátil.',
      },
      {
        question: 'Como escolher um nome que se destaque da concorrência?',
        answer: 'Pesquise os nomes de outras lojas de artesanato na sua área e online. Busque um ângulo único—talvez seu foco em sustentabilidade, sua especialização, ou sua abordagem. Evite nomes muito similares aos existentes e procure comunicar o que torna sua loja especial. Teste com potenciais clientes para ver qual nome é mais memorável.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome ideal para sua loja de artesanato é um passo emocionante que define a identidade do seu negócio criativo. O nome aparecerá em tudo—da fachada acolhedora às sacolas de compras, das etiquetas de preço aos perfis em redes sociais onde artesãos se conectam, das embalagens de envio aos cartões de visita que você distribui em feiras de artesanato. É a primeira impressão que criadores terão da sua loja, comunicando instantaneamente se você é uma fonte confiável de materiais de qualidade e inspiração criativa. Um nome bem escolhido atrai sua comunidade ideal de artesãos e estabelece sua loja como um destino essencial para projetos criativos.',
      steps: [
        {
          title: 'Defina seu nicho e público de artesãos',
          description: 'Antes de escolher um nome, determine claramente o foco da sua loja. Você oferecerá uma variedade completa de materiais de artesanato ou se especializará em um nicho como costura, scrapbook, tricô ou bijuterias? Quem são seus clientes ideais—artesãs profissionais, hobbyistas iniciantes, professoras de artesanato, ou crianças e famílias? Qual é seu diferencial—preços acessíveis, produtos premium importados, variedade, ou conhecimento especializado? Essas definições guiarão as escolhas de nome.',
        },
        {
          title: 'Explore palavras e conceitos do universo artesanal',
          description: 'Faça um brainstorm de palavras relacionadas ao artesanato e à experiência que você quer criar. Inclua termos técnicos do craft (linha, fio, tecido, papel, conta), palavras que evocam criatividade (arte, criar, imaginar, sonhar, inventar), termos que sugerem acolhimento (cantinho, casa, ninho, ateliê), e referências a cores, texturas e materiais. Combine essas palavras de formas criativas para gerar opções de nomes.',
        },
        {
          title: 'Considere o tom e personalidade da marca',
          description: 'Decida qual personalidade seu nome deve transmitir. Um tom tradicional e nostálgico ("Armarinho da Vovó") atrai quem valoriza técnicas clássicas. Um tom moderno e descolado ("Craft Lab") ressoa com artesãos contemporâneos. Um tom acolhedor e comunitário ("Casa das Arteiras") cria sensação de pertencimento. O tom do nome deve combinar com a experiência que você criará na loja.',
        },
        {
          title: 'Avalie praticidade e disponibilidade',
          description: 'Filtre suas opções favoritas verificando: facilidade de pronúncia e memorização, como o nome aparece escrito (logo, letreiro, etiquetas), disponibilidade de domínio para loja online, handles disponíveis no Instagram e outras redes sociais importantes para artesanato, e se não há conflito com lojas existentes na sua região ou no mercado online de artesanato.',
        },
        {
          title: 'Teste com a comunidade artesã',
          description: 'Compartilhe suas opções favoritas com artesãos que representam seu público-alvo. Pergunte qual nome eles achariam mais convidativo para visitar, o que cada nome sugere sobre os produtos disponíveis, se lembrariam do nome para indicar a amigos, e se algum nome cria confusão ou associações negativas. O feedback de verdadeiros artesãos é inestimável.',
        },
        {
          title: 'Verifique questões legais e registro',
          description: 'Antes de finalizar, confirme a viabilidade legal: pesquise marcas registradas no INPI em categorias relacionadas a varejo e artesanato, verifique se o nome permite registro de empresa no seu estado, considere registrar a marca para proteção, e garanta que não há conflito com lojas estabelecidas que poderiam causar confusão ou problemas legais.',
        },
        {
          title: 'Visualize o nome na identidade completa da loja',
          description: 'Antes de decidir definitivamente, imagine o nome em uso real: como ficará na fachada da loja, em sacolas de papel kraft típicas de artesanato, em etiquetas de preço e cartões de visita, no perfil do Instagram com fotos de materiais coloridos, em anúncios de novos produtos, e sendo dito em indicações ("Você precisa ir no [nome]!"). Se o nome funciona lindamente em todos esses contextos e te faz sorrir, você encontrou o nome certo.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'CantinhoCriativo', description: 'Evoca um espaço acolhedor e inspirador para artesãos—perfeito para lojas que querem ser vistas como um refúgio criativo onde ideias ganham vida.' },
      { name: 'ArteEmFios', description: 'Combina arte com materiais de artesanato—ideal para lojas especializadas em linhas, lãs e materiais têxteis para tricô, crochê e bordado.' },
      { name: 'MãosCriativas', description: 'Celebra o fazer manual—perfeito para lojas que valorizam o trabalho artesanal e a tradição de criar com as próprias mãos.' },
      { name: 'AteliêDeCores', description: 'Evoca um espaço vibrante cheio de possibilidades cromáticas—ideal para lojas com grande variedade de materiais coloridos.' },
      { name: 'TesouroArtesanal', description: 'Sugere descobertas preciosas para artesãos—perfeito para lojas com produtos especiais e materiais difíceis de encontrar.' },
      { name: 'CasaDasLinhas', description: 'Nome tradicional e acolhedor—ideal para armarinhos e lojas de aviamentos com foco em costura e trabalhos com linhas.' },
      { name: 'MundoCraft', description: 'Combinação moderna que sugere amplitude—perfeito para lojas com grande variedade de materiais para diferentes tipos de artesanato.' },
      { name: 'OficinaCriativa', description: 'Evoca um espaço de trabalho e aprendizado—ideal para lojas que também oferecem cursos e workshops de artesanato.' },
      { name: 'ArmarinhoEncantado', description: 'Adiciona magia ao tradicional armarinho—perfeito para lojas que querem criar experiências especiais para seus clientes.' },
      { name: 'FazendoArte', description: 'Nome ativo que celebra o ato de criar—ideal para lojas que inspiram clientes a iniciar novos projetos criativos.' },
      { name: 'PapelariaArtística', description: 'Específico para o nicho de papel—perfeito para lojas de scrapbook, cartonagem e papelaria criativa.' },
      { name: 'NinhoDasArteiras', description: 'Cria sensação de comunidade feminina—ideal para lojas que cultivam um ambiente de sororidade entre artesãs.' },
      { name: 'MaterialCriativo', description: 'Direto e descritivo—perfeito para lojas que querem comunicar claramente que vendem suprimentos para artesanato.' },
      { name: 'ArteSãoMãos', description: 'Jogo de palavras com "artesão"—nome criativo que celebra o trabalho manual e a tradição artesanal brasileira.' },
      { name: 'CantoDasCosturas', description: 'Evoca especialização em costura—ideal para lojas focadas em tecidos, aviamentos e materiais de costura.' },
      { name: 'InspiraArte', description: 'Nome motivacional—perfeito para lojas que querem ser fonte de inspiração e ideias para projetos criativos.' },
      { name: 'BalcãoCriativo', description: 'Referência ao tradicional balcão de armarinho—ideal para lojas com atendimento personalizado e consultivo.' },
      { name: 'AtelierDoBem', description: 'Sugere propósito positivo—perfeito para lojas com foco em sustentabilidade ou que apoiam causas sociais.' },
      { name: 'ReceitaDeArte', description: 'Compara artesanato a receitas—nome acolhedor ideal para lojas que ajudam clientes a aprender novas técnicas.' },
      { name: 'EspaçoArtesanal', description: 'Transmite amplitude e possibilidades—perfeito para lojas grandes com variedade completa de materiais para todos os tipos de craft.' },
    ],
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    name: 'Gerador de Nomes para Agências de Marketing Digital',
    title: 'Gerador gratuito de ideias de nomes comerciais de Agência de Marketing Digital por IA',
    description: 'Gere nomes modernos e impactantes para agências de marketing digital, social media e performance.',
    metaDescription: 'Crie um nome marcante para sua agência de marketing digital com nosso gerador gratuito por IA. Desenvolva nomes modernos e impactantes para...',
    inputLabel: 'Descreva sua agência de marketing digital...',
    inputPlaceholder: 'ex. Uma agência especializada em SEO, tráfego pago e estratégias de crescimento para e-commerces',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Moderno & Tech', 'Criativo & Ousado', 'Profissional & Confiável', 'Focado em Resultados'],
        default: 'Moderno & Tech',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the digital marketing industry. Your role is to generate modern, impactful business names that convey digital expertise, innovation, and results-driven marketing capabilities for agencies serving clients in the online space.

DIGITAL MARKETING INDUSTRY CONTEXT:
The digital marketing industry encompasses:
- Full-service digital marketing agencies
- SEO and search engine marketing specialists
- Social media marketing agencies
- Performance marketing and paid media agencies
- Content marketing and inbound agencies
- Email marketing specialists
- Conversion rate optimization (CRO) agencies
- Marketing automation consultancies
- Influencer marketing agencies
- E-commerce marketing specialists

NAME CHARACTERISTICS FOR DIGITAL MARKETING AGENCIES:
1. **Modern and Tech-Savvy**
   - Names should reflect digital innovation
   - Convey understanding of modern marketing channels
   - Sound current and forward-thinking

2. **Results and Growth Oriented**
   - Suggest measurable outcomes and ROI
   - Imply growth, scaling, and performance
   - Appeal to data-driven clients

3. **Professional Yet Creative**
   - Balance business credibility with creative energy
   - Stand out in a competitive industry
   - Memorable in pitches and proposals

4. **Versatile for Service Evolution**
   - Digital marketing evolves rapidly
   - Name should accommodate new services
   - Work across different marketing specialties

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a digital marketing agency

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Agência de Performance',
        description: 'Profissionais de marketing lançando agências especializadas em mídia paga, Google Ads e Facebook Ads usam o Gerador de Nomes para Agências de Marketing Digital para criar identidades que comunicam expertise em resultados mensuráveis. Ao descrever seu foco em ROI e crescimento, a ferramenta gera nomes que atraem clientes orientados por dados e resultados.',
      },
      {
        title: 'Criação de Agência de Social Media',
        description: 'Especialistas em redes sociais transformando seu trabalho freelance em agência completa usam o gerador para desenvolver nomes que capturam a natureza dinâmica e criativa do marketing em plataformas sociais. O nome certo comunica tanto expertise técnica quanto capacidade criativa essencial para o sucesso em social media.',
      },
      {
        title: 'Expansão de Consultoria para Agência Full-Service',
        description: 'Consultores de marketing digital expandindo para oferecer serviços completos usam o gerador para encontrar nomes que reflitam suas capacidades ampliadas. O novo nome precisa posicionar a empresa como parceira estratégica capaz de executar campanhas integradas em múltiplos canais digitais.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para agência de marketing digital?',
        answer: 'Um bom nome para agência de marketing digital combina modernidade com credibilidade profissional. Deve soar tecnologicamente relevante sem ser datado, sugerir capacidade de entregar resultados, e ser memorável o suficiente para se destacar em um mercado altamente competitivo. O nome ideal funciona bem em apresentações para clientes, no LinkedIn, e em materiais de marketing da própria agência.',
      },
      {
        question: 'Meu nome deve indicar especialização em marketing digital?',
        answer: 'Incluir indicadores como "Digital", "Media", "Growth" ou "Performance" pode ajudar clientes a entender imediatamente seu foco. No entanto, nomes mais abstratos oferecem flexibilidade se você planeja expandir para consultoria de negócios mais ampla. Considere se quer ser visto como especialista em digital ou parceiro estratégico de marketing geral.',
      },
      {
        question: 'Nomes em inglês funcionam para agências brasileiras?',
        answer: 'Nomes em inglês são muito comuns e bem aceitos no marketing digital brasileiro, já que o próprio vocabulário do setor é predominantemente inglês. Termos como "Growth", "Performance", "Lab", "Media" comunicam expertise internacional. No entanto, certifique-se de que o nome é fácil de pronunciar para brasileiros.',
      },
      {
        question: 'Como criar um nome que transmita resultados e performance?',
        answer: 'Use palavras que sugiram crescimento, métricas e sucesso: "Growth", "Boost", "Escala", "Impulso", "Resultado", "Performance", "Alavanca". Combinações como "Growth Lab" ou "Impulso Digital" comunicam foco em outcomes mensuráveis. Evite termos vagos que não conectam com a mentalidade orientada a dados dos clientes digitais.',
      },
      {
        question: 'Qual a importância do nome para conquistar clientes?',
        answer: 'Na indústria de marketing digital, seu nome é parte do seu próprio marketing. Um nome moderno e profissional sugere que você entende de branding e comunicação—se você não consegue criar uma boa marca para si mesmo, como fará para clientes? O nome certo gera credibilidade instantânea em propostas e pitches.',
      },
      {
        question: 'Devo evitar termos técnicos como SEO ou Ads no nome?',
        answer: 'Termos muito específicos como "SEO" ou "Ads" podem limitar percepção futura de serviços e parecer muito nichados. É melhor usar termos mais amplos como "Digital", "Performance" ou "Growth" que englobam múltiplas especialidades. Reserve a especificidade para seu posicionamento e copy, não necessariamente para o nome.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado digital?',
        answer: 'Pesquise no Google por agências com nomes similares, verifique LinkedIn onde agências são muito ativas, busque no Instagram e redes sociais, confirme disponibilidade de domínio .com.br e .com, verifique handles de redes sociais, e pesquise em diretórios de agências e plataformas como RD Station Partners ou Google Partners.',
      },
      {
        question: 'Posso usar siglas ou acrônimos no nome da agência?',
        answer: 'Siglas podem funcionar bem se forem pronunciáveis e memoráveis (como "RD" da Resultados Digitais). No entanto, siglas genéricas podem ser esquecíveis e dificultar buscas online. Se usar siglas, certifique-se de que tenham significado e sejam distintas de outras empresas no mercado de marketing.',
      },
      {
        question: 'O nome deve refletir se sou agência pequena ou grande?',
        answer: 'Curiosamente, muitas agências pequenas usam nomes que sugerem maior porte para competir com players estabelecidos. Termos como "Group", "Partners" ou "Collective" podem adicionar peso. No entanto, se seu diferencial é ser boutique e ágil, nomes mais pessoais podem ser mais autênticos ao seu posicionamento.',
      },
      {
        question: 'Como escolher entre um nome criativo e um profissional?',
        answer: 'Depende do seu mercado-alvo. Startups e empresas de tech podem preferir agências com nomes mais ousados e criativos. Empresas tradicionais e corporações podem responder melhor a nomes mais conservadores e profissionais. Conheça seus clientes ideais e escolha um nome que ressoe com suas expectativas e cultura.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua agência de marketing digital é uma decisão estratégica que impacta diretamente sua capacidade de atrair clientes e se posicionar no mercado. O nome aparecerá em propostas comerciais, apresentações de pitch, perfis no LinkedIn, assinaturas de email, cases de sucesso e todo material de marketing da sua própria agência. É irônico mas verdadeiro: uma agência de marketing precisa demonstrar excelência em seu próprio branding para ser levada a sério por clientes potenciais. Um nome bem escolhido comunica expertise digital, capacidade de entregar resultados e posicionamento claro no competitivo mercado de serviços de marketing.',
      steps: [
        {
          title: 'Defina seu posicionamento e especialização',
          description: 'Antes de escolher um nome, tenha clareza sobre o posicionamento da sua agência no mercado. Determine quais serviços serão seu carro-chefe (SEO, mídia paga, social media, inbound, e-commerce), quem são seus clientes ideais (startups, PMEs, grandes empresas, segmento específico), qual é seu diferencial competitivo (especialização, metodologia, tecnologia, resultados), e como quer ser percebido (parceiro estratégico, especialista técnico, criativo inovador). Essas definições informarão o tom e estilo do nome.',
        },
        {
          title: 'Pesquise o mercado e a concorrência',
          description: 'Analise os nomes de outras agências de marketing digital, especialmente aquelas que considera concorrentes diretos ou referências de sucesso. Observe quais padrões de nomenclatura são comuns (uso de inglês, termos técnicos, nomes abstratos), identifique oportunidades para se diferenciar, note quais nomes transmitem mais credibilidade e por quê, e considere como seu nome pode se destacar em uma lista de agências em uma pesquisa de fornecedores.',
        },
        {
          title: 'Brainstorm com diferentes abordagens de naming',
          description: 'Explore múltiplas categorias de nomes: nomes que comunicam resultados (Growth, Boost, Escala), nomes que evocam tecnologia e inovação (Lab, Code, Tech), nomes que sugerem estratégia (Strategy, Insights, Intelligence), nomes criativos e memoráveis (palavras inventadas, combinações únicas), e nomes que comunicam parceria (Partners, Collective, Squad). Gere pelo menos 25-30 opções antes de filtrar.',
        },
        {
          title: 'Avalie cada nome sob perspectiva de marketing',
          description: 'Como agência de marketing, aplique seus próprios critérios de branding aos nomes candidatos: o nome é memorável após uma única exposição? Funciona bem em diferentes contextos (formal e informal)? É fácil de soletrar e buscar online? Tem potencial para criar uma identidade visual forte? Comunica os valores e capacidades da agência? Resiste ao teste do "telefone" (ser entendido quando dito em voz alta)?',
        },
        {
          title: 'Verifique disponibilidade digital extensiva',
          description: 'Para uma agência digital, presença online impecável é obrigatória. Verifique disponibilidade de domínio .com.br e .com (e considere .agency, .digital), handles em todas as plataformas relevantes (LinkedIn, Instagram, Twitter, YouTube, TikTok), pesquise no Google por resultados conflitantes, confirme que não há agências com nomes muito similares em mercados adjacentes, e considere como o nome aparecerá em buscas relacionadas a marketing digital.',
        },
        {
          title: 'Teste com diferentes públicos',
          description: 'Compartilhe suas opções finais com pessoas de diferentes perfis: colegas do mercado de marketing que entendem a indústria, potenciais clientes que representam seu público-alvo, pessoas fora do marketing para testar compreensão geral, e profissionais de RH que podem avaliar apelo para futuros funcionários. Pergunte quais nomes parecem mais profissionais, memoráveis e confiáveis.',
        },
        {
          title: 'Visualize a aplicação completa da marca',
          description: 'Antes de decidir, visualize o nome em uso real: como ficará em um deck de apresentação de proposta, na assinatura de email da equipe, no perfil do LinkedIn da empresa, em um case de sucesso publicado, no site institucional, em materiais de evento ou patrocínio, e sendo mencionado em indicações e referências. O nome deve funcionar impecavelmente em todos esses contextos profissionais.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'ImpulsoDigital', description: 'Comunica aceleração e crescimento online—perfeito para agências focadas em escalar negócios através de estratégias digitais integradas.' },
      { name: 'GrowthLab', description: 'Sugere experimentação científica para crescimento—ideal para agências data-driven focadas em testes e otimização contínua.' },
      { name: 'PerformanceMax', description: 'Transmite foco em resultados máximos—perfeito para agências especializadas em mídia de performance e ROI.' },
      { name: 'EscalaDigital', description: 'Evoca crescimento escalável—ideal para agências que ajudam empresas a expandir sua presença e vendas online.' },
      { name: 'ConexãoMídia', description: 'Sugere relacionamento entre marcas e audiências—perfeito para agências focadas em social media e engajamento.' },
      { name: 'ResultadosOnline', description: 'Nome direto que promete outcomes—ideal para agências que querem comunicar foco claro em métricas e conversões.' },
      { name: 'BoostMarketing', description: 'Combinação dinâmica que sugere impulso—perfeito para agências especializadas em acelerar crescimento de marcas.' },
      { name: 'DataDriven', description: 'Comunica abordagem baseada em dados—ideal para agências que se diferenciam por analytics e decisões fundamentadas.' },
      { name: 'NexoDigital', description: 'Evoca conexão e integração—perfeito para agências full-service que integram múltiplos canais digitais.' },
      { name: 'TrackMedia', description: 'Sugere rastreamento e mensuração—ideal para agências focadas em mídia paga e atribuição de resultados.' },
      { name: 'CreativeFlow', description: 'Combina criatividade com fluidez—perfeito para agências que equilibram estratégia criativa com execução técnica.' },
      { name: 'ConverteLab', description: 'Foco em conversão e experimentação—ideal para agências especializadas em CRO e otimização de funis.' },
      { name: 'ViralMídia', description: 'Evoca alcance massivo e compartilhamento—perfeito para agências focadas em conteúdo e campanhas de grande impacto.' },
      { name: 'EngajaDigital', description: 'Comunica foco em engajamento—ideal para agências especializadas em construir comunidades e relacionamentos online.' },
      { name: 'TráfegoInteligente', description: 'Sugere expertise em aquisição qualificada—perfeito para agências especializadas em mídia paga estratégica.' },
      { name: 'MétricaPlus', description: 'Evoca análise avançada e métricas—ideal para agências que se destacam por reporting e insights acionáveis.' },
      { name: 'AlcanceTotal', description: 'Comunica amplitude de cobertura—perfeito para agências full-service com capacidade omnichannel.' },
      { name: 'DigitalPulse', description: 'Sugere estar no pulso do digital—ideal para agências antenadas nas últimas tendências e plataformas.' },
      { name: 'LeadForce', description: 'Combina geração de leads com força—perfeito para agências B2B focadas em aquisição de clientes.' },
      { name: 'ClickStrategy', description: 'Une ação (click) com planejamento—ideal para agências que combinam execução tática com pensamento estratégico.' },
    ],
  },

  'fashion-store': {
    slug: 'fashion-store',
    name: 'Gerador de Nomes para Lojas de Moda',
    title: 'Gerador gratuito de ideias de nomes comerciais de Loja de Moda por IA',
    description: 'Gere nomes elegantes e sofisticados para lojas de moda, boutiques e marcas de vestuário.',
    metaDescription: 'Lance sua loja de moda com um nome perfeito do nosso gerador gratuito por IA. Crie nomes elegantes e sofisticados para boutiques, marcas de...',
    inputLabel: 'Descreva sua loja de moda...',
    inputPlaceholder: 'ex. Uma marca de moda feminina focada em peças atemporais e elegantes para mulheres executivas',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Sofisticado', 'Moderno & Minimalista', 'Ousado & Fashion-Forward', 'Clássico & Atemporal'],
        default: 'Elegante & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the fashion industry. Your role is to generate elegant, sophisticated business names that evoke style, glamour, and fashion expertise for clothing brands, boutiques, and fashion retail businesses.

FASHION STORE INDUSTRY CONTEXT:
The fashion retail industry encompasses:
- High-end fashion boutiques
- Contemporary fashion brands
- Designer clothing stores
- Fast fashion retailers
- Sustainable fashion brands
- Luxury fashion houses
- Multi-brand fashion retailers
- Fashion concept stores
- Online fashion platforms
- Fashion lifestyle brands

NAME CHARACTERISTICS FOR FASHION STORES:
1. **Elegant and Sophisticated**
   - Names should exude style and refinement
   - Convey fashion expertise and taste
   - Appeal to style-conscious consumers

2. **Brand-Worthy and Memorable**
   - Work as a fashion brand name
   - Look great on labels and marketing
   - Create strong visual identity potential

3. **Emotionally Evocative**
   - Inspire feelings of confidence and beauty
   - Create aspirational associations
   - Connect with fashion lifestyle values

4. **Internationally Appealing**
   - Sound sophisticated across cultures
   - Work for potential global expansion
   - Avoid regional limitations

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a fashion store

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca de Moda Autoral',
        description: 'Designers e estilistas lançando suas próprias marcas usam o Gerador de Nomes para Lojas de Moda para criar identidades que reflitam sua visão criativa única. Ao descrever sua estética—minimalista, boho, avant-garde ou clássica—a ferramenta gera nomes sofisticados que estabelecem a marca no competitivo mundo da moda.',
      },
      {
        title: 'Abertura de Boutique Multimarcas',
        description: 'Empreendedores abrindo boutiques que curarão peças de diferentes marcas usam o gerador para encontrar nomes que comunicam bom gosto e seleção cuidadosa. O nome precisa sugerir curadoria, estilo e uma experiência de compra diferenciada que justifique a visita à loja.',
      },
      {
        title: 'Reposicionamento de Marca de Moda',
        description: 'Marcas de moda existentes que buscam elevar seu posicionamento ou atingir um novo segmento de mercado usam o gerador para explorar nomes que reflitam sua evolução. O novo nome pode comunicar a transição para luxo acessível, sustentabilidade, ou um novo público demográfico.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para loja de moda?',
        answer: 'Um bom nome para loja de moda combina elegância com memorabilidade, criando uma impressão instantânea de estilo e sofisticação. Deve funcionar bem em etiquetas de roupa, sacolas de compras e nas redes sociais onde a moda prospera. O nome ideal evoca emoções de confiança, beleza e aspiração, enquanto permanece único o suficiente para se destacar em um mercado saturado de marcas fashion.',
      },
      {
        question: 'Meu nome de marca de moda deve ser em português ou outro idioma?',
        answer: 'Na moda brasileira, nomes em francês, italiano e inglês são muito comuns e conferem sofisticação internacional. No entanto, nomes em português podem criar forte identidade local e orgulho nacional. A escolha depende do seu posicionamento: marcas que buscam apelo internacional podem preferir nomes estrangeiros, enquanto marcas que celebram brasilidade podem se beneficiar de nomes em português.',
      },
      {
        question: 'Qual a importância do nome para o sucesso de uma marca de moda?',
        answer: 'Na moda, onde percepção é realidade, o nome é crucial. Ele define expectativas antes que o cliente veja qualquer peça, justifica posicionamento de preço, e cria o foundation para toda identidade visual. Marcas de moda de sucesso têm nomes que são instantaneamente associados a um estilo específico. O nome certo pode abrir portas com varejistas, atrair press coverage, e criar desejo nos consumidores.',
      },
      {
        question: 'Devo usar meu nome pessoal para minha marca de moda?',
        answer: 'Nomear a marca com seu nome (como Coco Chanel, Calvin Klein, Alexandre Herchcovitch) é tradição na moda e pode criar forte valor de marca pessoal. Funciona especialmente bem se você é o designer. No entanto, considere que amarra a marca à sua pessoa, pode complicar vendas futuras, e requer que você construa tanto sua reputação pessoal quanto a da marca simultaneamente.',
      },
      {
        question: 'Como escolher um nome que funcione para moda feminina, masculina ou unissex?',
        answer: 'Para moda feminina, nomes com sons suaves e elegantes funcionam bem (Bella, Muse, Flora). Para masculina, sons mais fortes e minimalistas (Edge, Knox, Stone). Para unissex, nomes neutros e modernos são ideais (Verso, Arc, Nova). Considere também que tendências de moda estão tornando muitas marcas mais gender-fluid, então nomes neutros oferecem flexibilidade.',
      },
      {
        question: 'Quais palavras evitar em nomes de marcas de moda?',
        answer: 'Evite termos muito genéricos como "Fashion", "Style", "Clothes" que não diferenciam. Fuja de grafias complicadas que dificultam buscas online. Evite referências a tendências específicas que ficarão datadas. Não use nomes muito similares a marcas estabelecidas. E evite palavras com conotações negativas em outros idiomas se planeja expansão internacional.',
      },
      {
        question: 'Como garantir que meu nome de marca de moda é único?',
        answer: 'Pesquise extensivamente no Google, Instagram, Pinterest e plataformas de moda. Verifique registros de marca no INPI e em mercados internacionais se tiver ambições globais. Busque em varejistas como Farfetch, Net-a-Porter e Dafiti. Considere contratar busca profissional de marcas. Na moda, mesmo nomes apenas similares podem causar confusão e problemas legais.',
      },
      {
        question: 'O nome deve indicar o segmento de moda que atuo?',
        answer: 'Não necessariamente. Muitas marcas de sucesso têm nomes abstratos que não indicam segmento (Zara, H&M, Gucci). Isso oferece flexibilidade para evoluir. No entanto, se você tem um nicho muito específico (moda plus size, sustentável, esportiva), um nome que comunique isso pode ajudar a atrair o público certo mais rapidamente.',
      },
      {
        question: 'Como testar se meu nome de marca de moda funciona?',
        answer: 'Crie mockups do nome em etiquetas de roupa, tags, sacolas e posts de Instagram. Peça feedback de pessoas do seu público-alvo. Teste a pronúncia em voz alta. Avalie se o nome evoca as emoções certas. Considere como influenciadores e mídia de moda falariam sobre a marca. Se o nome cria desejo e se integra naturalmente em conversas sobre moda, você está no caminho certo.',
      },
      {
        question: 'Posso mudar o nome da minha marca de moda depois?',
        answer: 'Rebranding na moda é possível mas desafiador, pois marcas fashion dependem muito de reconhecimento visual e associações emocionais construídas ao longo do tempo. É melhor investir tempo agora para escolher o nome certo. Se precisar mudar, planeje uma transição cuidadosa com comunicação clara aos clientes e timing estratégico, possivelmente alinhado com uma nova coleção ou fase da marca.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua loja ou marca de moda é uma das decisões mais importantes que você tomará como empreendedor fashion. O nome aparecerá em tudo—de etiquetas costuradas em cada peça a sacolas de compras icônicas, de perfis no Instagram onde a moda vive a editoriais em revistas, de lookbooks a e-commerce. É a primeira coisa que estilistas, compradores e consumidores notarão sobre sua marca, criando uma impressão instantânea do seu estilo, posicionamento e valores. Um nome bem escolhido pode elevar uma marca de moda de desconhecida a desejada, abrindo portas com varejistas, atraindo atenção da imprensa e criando conexão emocional com clientes.',
      steps: [
        {
          title: 'Defina a identidade e DNA da sua marca de moda',
          description: 'Antes de pensar em nomes, tenha clareza absoluta sobre a essência da sua marca. Determine seu estilo distintivo (minimalista, romântico, avant-garde, streetwear, clássico), seu público-alvo detalhado (idade, estilo de vida, ocasiões de uso, poder aquisitivo), seus valores de marca (sustentabilidade, craftsmanship, acessibilidade, exclusividade), seu posicionamento de preço e mercado, e a emoção que quer que clientes sintam ao usar suas peças.',
        },
        {
          title: 'Pesquise referências e inspiração no mundo da moda',
          description: 'Estude nomes de marcas de moda que você admira e analise por que funcionam. Observe marcas do seu segmento específico, marcas internacionais que estabelecem tendências, marcas brasileiras de sucesso, e a evolução histórica de naming na moda. Identifique padrões, elementos que ressoam com seu estilo, e oportunidades para criar algo distintivo que dialogue com a linguagem do fashion.',
        },
        {
          title: 'Explore diferentes abordagens criativas de naming',
          description: 'Gere opções usando várias estratégias: seu nome pessoal ou variações (tradição fashion), palavras evocativas que criam mood (Essence, Aura, Muse), termos de outros idiomas que adicionam sofisticação, palavras inventadas únicas e proprietárias, conceitos abstratos que permitem interpretação, referências culturais ou artísticas, e combinações criativas de palavras. Produza muitas opções sem julgamento inicial.',
        },
        {
          title: 'Avalie potencial de branding e identidade visual',
          description: 'Na moda, o nome precisa funcionar visualmente. Avalie como cada nome candidato pode se transformar em logo, como ficaria em uma etiqueta de roupa, como apareceria em uma sacola ou embalagem premium, o potencial para criar iconografia distintiva, e a flexibilidade para diferentes aplicações (minimalista em etiqueta, impactante em outdoor). Nomes que inspiram possibilidades visuais fortes têm vantagem.',
        },
        {
          title: 'Verifique disponibilidade global e proteção legal',
          description: 'Moda é uma indústria global, então verifique disponibilidade amplamente: pesquise marcas registradas no INPI e em mercados-chave (EUA, Europa), garanta domínios em múltiplas extensões, reserve handles no Instagram, TikTok e Pinterest (essenciais para moda), busque em varejistas internacionais e plataformas de moda, e considere registrar sua marca para proteção. Conflitos com marcas existentes podem ser legalmente problemáticos e confusos para consumidores.',
        },
        {
          title: 'Teste com seu público e stakeholders da moda',
          description: 'Compartilhe opções finalistas com pessoas relevantes: consumidores que representam seu público-alvo, profissionais da indústria (estilistas, compradores, editores de moda), potenciais colaboradores e fornecedores. Pergunte que tipo de marca cada nome sugere, qual preço esperariam, se usariam/recomendariam, e quais emoções cada nome evoca. Feedback da comunidade fashion é invaluável.',
        },
        {
          title: 'Visualize o nome em todo ecossistema da marca',
          description: 'Antes de finalizar, imagine o nome vivendo em todos os pontos de contato da moda: na etiqueta costurada na peça, na tag pendurada, na sacola de papel ou tecido, no feed do Instagram com fotos de lookbook, em um editorial de revista, sendo mencionado por um influenciador, em uma reportagem sobre marcas brasileiras, e no boca a boca quando alguém pergunta "onde você comprou?". Se o nome brilha em todos esses contextos, você encontrou o nome certo para sua marca de moda.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'AlturaModas', description: 'Evoca elegância e elevação—perfeito para marcas que vestem mulheres confiantes que querem se destacar com sofisticação.' },
      { name: 'EssênciaFashion', description: 'Combina profundidade com moda—ideal para marcas focadas em peças que capturam a essência do estilo pessoal.' },
      { name: 'VogueAtelier', description: 'Referência à alta costura e tendências—perfeito para boutiques com peças exclusivas e atendimento personalizado.' },
      { name: 'NoirBoutique', description: 'Sofisticação do preto em francês—ideal para marcas com estética elegante, minimalista e atemporal.' },
      { name: 'BelleÉpoque', description: 'Referência a era de elegância—perfeito para marcas que celebram feminilidade clássica e romantismo.' },
      { name: 'ModernaMuse', description: 'Combina contemporaneidade com inspiração—ideal para marcas que vestem mulheres modernas e inspiradoras.' },
      { name: 'SilhouetteStore', description: 'Foco na forma e no caimento—perfeito para marcas conhecidas por cortes impecáveis e modelagem precisa.' },
      { name: 'PuraTendência', description: 'Comunica estar sempre atualizado—ideal para marcas de fast fashion focadas nas últimas tendências.' },
      { name: 'ChicEterno', description: 'Promete elegância duradoura—perfeito para marcas de peças clássicas que transcendem temporadas.' },
      { name: 'GlamourStudio', description: 'Evoca luxo e brilho—ideal para marcas de moda para ocasiões especiais e looks de impacto.' },
      { name: 'LaBellaVita', description: 'Italiano que sugere a bela vida—perfeito para marcas lifestyle que vendem mais que roupas, vendem um estilo de vida.' },
      { name: 'FashionEdge', description: 'Sugere estar na vanguarda—ideal para marcas com estética bold e fashion-forward que definem tendências.' },
      { name: 'MaisonModerna', description: 'Combina tradição francesa com contemporaneidade—perfeito para marcas que equilibram herança com inovação.' },
      { name: 'EstiloAutoral', description: 'Comunica design único e autêntico—ideal para marcas de estilistas com visão criativa distintiva.' },
      { name: 'RefinadaModas', description: 'Transmite sofisticação e bom gosto—perfeito para boutiques de moda premium com curadoria cuidadosa.' },
      { name: 'NovaElegância', description: 'Sugere reinvenção da sofisticação—ideal para marcas que trazem frescor ao conceito de elegância.' },
      { name: 'CoutureContemporânea', description: 'Une alta costura com modernidade—perfeito para marcas de designer com craftsmanship excepcional.' },
      { name: 'MomentumFashion', description: 'Evoca movimento e dinamismo—ideal para marcas ágeis que capturam o espírito do momento.' },
      { name: 'AtelierUrbano', description: 'Combina artesanato com vida na cidade—perfeito para marcas de moda urbana sofisticada.' },
      { name: 'VelvetVogue', description: 'Textura luxuosa com moda—ideal para marcas que focam em materiais premium e toque sensorial.' },
    ],
  },

  'food-truck': {
    slug: 'food-truck',
    name: 'Gerador de Nomes para Food Trucks',
    title: 'Gerador gratuito de ideias de nomes comerciais de Food Truck por IA',
    description: 'Gere nomes criativos e chamativos para food trucks, trailers de comida e negócios de comida de rua.',
    metaDescription: 'Encontre o nome perfeito para seu food truck com nosso gerador gratuito por IA. Crie nomes criativos e chamativos para trailers de comida,...',
    inputLabel: 'Descreva seu food truck...',
    inputPlaceholder: 'ex. Um food truck de hambúrgueres artesanais com blend especial e molhos autorais',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Divertido & Criativo', 'Gourmet & Sofisticado', 'Urbano & Descolado', 'Tradicional & Acolhedor'],
        default: 'Divertido & Criativo',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the food truck and street food industry. Your role is to generate creative, catchy business names that are memorable, fun, and convey the unique personality and cuisine of mobile food businesses.

FOOD TRUCK INDUSTRY CONTEXT:
The food truck industry encompasses:
- Gourmet burger trucks
- Taco and Mexican food trucks
- Asian fusion and specialty cuisine trucks
- BBQ and smoked meat trucks
- Pizza and Italian food trucks
- Dessert and sweet treat trucks
- Coffee and beverage trucks
- Vegan and healthy food trucks
- Breakfast and brunch trucks
- Multi-cuisine food trucks

NAME CHARACTERISTICS FOR FOOD TRUCKS:
1. **Catchy and Memorable**
   - Names should be instantly memorable
   - Easy to spot on a truck from a distance
   - Work well for social media and word-of-mouth

2. **Fun and Personality-Driven**
   - Reflect the fun, informal nature of food trucks
   - Convey the unique personality of the business
   - Create emotional connection with customers

3. **Food-Focused**
   - Hint at the type of cuisine or specialty
   - Create appetite appeal
   - Stand out among other food options

4. **Practical for Mobile Business**
   - Look great on truck signage
   - Easy to remember for repeat customers
   - Work for event bookings and catering

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a food truck

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Food Truck de Especialidade',
        description: 'Chefs e empreendedores gastronômicos lançando food trucks especializados—hambúrgueres artesanais, tacos gourmet ou culinária asiática—usam o Gerador de Nomes para Food Trucks para criar identidades tão memoráveis quanto sua comida. Ao descrever seu conceito culinário único, a ferramenta gera nomes criativos que atraem clientes nas ruas e eventos.',
      },
      {
        title: 'Expansão de Negócio para Food Truck',
        description: 'Restaurantes estabelecidos expandindo para o formato mobile usam o gerador para desenvolver nomes que funcionam para a natureza mais casual e divertida dos food trucks, mantendo conexão com a marca original. O nome precisa comunicar a mesma qualidade em um formato mais acessível e descontraído.',
      },
      {
        title: 'Criação de Marca para Eventos e Festivais',
        description: 'Empreendedores focados em atender festivais, eventos corporativos e feiras gastronômicas usam o gerador para criar nomes que se destacam em ambientes com múltiplas opções de comida. Um nome marcante ajuda a ser lembrado por organizadores de eventos para futuras contratações.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para food truck?',
        answer: 'Um bom nome de food truck é catchy, memorável e transmite personalidade. Deve ser fácil de ler a distância no truck, funcionar bem em hashtags de Instagram, e criar conexão imediata com o tipo de comida oferecida. Os melhores nomes de food truck fazem as pessoas sorrir, criar curiosidade, e são fáceis de recomendar para amigos quando perguntam "onde você comeu isso?"',
      },
      {
        question: 'Meu nome de food truck deve indicar o tipo de comida?',
        answer: 'Indicar a especialidade ajuda clientes a encontrar você quando procuram um tipo específico de comida. Nomes como "Taco Truck" ou "Burger Express" são claros. No entanto, nomes mais criativos e abstratos podem gerar curiosidade e funcionar se você planeja diversificar o menu. Muitos food trucks de sucesso usam trocadilhos ou referências criativas ao tipo de comida.',
      },
      {
        question: 'Trocadilhos funcionam bem para nomes de food truck?',
        answer: 'Sim! Trocadilhos são muito populares na cultura de food trucks porque são memoráveis, divertidos, e refletem a natureza descontraída do negócio. Exemplos como "Grill Murray" ou "Fry Society" são icônicos. No entanto, certifique-se de que o trocadilho é fácil de entender, não é ofensivo, e ainda comunica algo sobre sua comida.',
      },
      {
        question: 'Qual a importância das redes sociais para food trucks?',
        answer: 'Extremamente importante! Food trucks dependem de redes sociais para comunicar localizações, horários, e criar buzz. Seu nome precisa funcionar como hashtag, ser fácil de marcar em posts de clientes, e ser buscável no Instagram e Google. Verifique disponibilidade de handles antes de finalizar o nome.',
      },
      {
        question: 'Como escolher um nome que funcione na lateral do truck?',
        answer: 'Considere legibilidade a distância—nomes curtos com letras claras funcionam melhor. Evite palavras muito longas ou fontes complicadas que serão difíceis de ler enquanto as pessoas passam. O nome deve ter impacto visual forte e funcionar bem em design de adesivagem. Teste visualizando como ficará em um veículo.',
      },
      {
        question: 'Posso usar meu nome pessoal no food truck?',
        answer: 'Sim, especialmente se você é o chef e quer criar conexão pessoal com clientes. "Cozinha do João" ou "Tempero da Maria" criam sensação de comida caseira e autêntica. No entanto, considere que isso amarra o negócio à sua pessoa e pode ser menos divertido que nomes mais criativos que são esperados na cultura de food trucks.',
      },
      {
        question: 'Como criar um nome que funcione para eventos e festivais?',
        answer: 'Para se destacar em festivais gastronômicos com dezenas de opções, seu nome precisa ser memorável e chamar atenção. Nomes divertidos e criativos funcionam melhor que nomes genéricos. Considere também como o nome soará quando anunciado em um evento ou listado em um programa de festival.',
      },
      {
        question: 'Devo incluir palavras como "food truck" no nome?',
        answer: 'Geralmente não é necessário, já que o formato do negócio é visualmente óbvio. Adicionar "Food Truck" ao nome pode torná-lo muito longo para signage. No entanto, pode ser útil para buscas online—você pode usar em perfis sociais e site sem incluir no nome visual principal.',
      },
      {
        question: 'Como verificar se meu nome de food truck é único?',
        answer: 'Pesquise no Google, Instagram e Facebook por food trucks com nomes similares, especialmente na sua região. Verifique grupos e associações de food trucks locais. Busque em apps de delivery e plataformas de eventos gastronômicos. O mercado de food trucks é relativamente local, então verifique principalmente sua cidade e região.',
      },
      {
        question: 'O nome pode limitar minha expansão futura?',
        answer: 'Sim, nomes muito específicos podem limitar. "Taco do Carlos" pode ser estranho se você quiser adicionar hambúrgueres. Pense no longo prazo—você pode querer abrir mais trucks ou um restaurante físico? Nomes flexíveis permitem evolução do negócio sem perder a identidade de marca construída.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu food truck é uma decisão que combina criatividade com estratégia de marketing. Diferente de restaurantes tradicionais, food trucks vivem e morrem pela sua capacidade de criar buzz, ser encontrados, e ser lembrados. Seu nome aparecerá pintado na lateral do veículo, em posts de Instagram de clientes felizes, em listas de festivais gastronômicos, e nas conversas quando amigos recomendam "aquele truck incrível". Um nome bem escolhido não só atrai clientes famintos nas ruas, mas também ajuda organizadores de eventos a lembrar de você e cria uma marca que pode crescer além de um único veículo.',
      steps: [
        {
          title: 'Defina sua identidade gastronômica e personalidade',
          description: 'Antes de brainstormar nomes, tenha clareza sobre o conceito do seu food truck. Qual é sua especialidade culinária (hambúrgueres, tacos, comida asiática, sobremesas)? Qual é o diferencial que torna sua comida única (ingredientes especiais, técnica, receita de família)? Qual é a personalidade da marca (divertida e irreverente, gourmet e sofisticada, nostálgica e caseira)? Quem é seu cliente ideal (jovens urbanos, famílias, público corporativo)? Essas definições guiarão o estilo do nome.',
        },
        {
          title: 'Explore abordagens criativas de naming para food trucks',
          description: 'Food trucks permitem mais criatividade que restaurantes tradicionais. Considere trocadilhos e jogos de palavras relacionados à sua comida, referências culturais pop que seu público entenderia, nomes que criam personagem ou persona para o truck, combinações inesperadas de palavras, nomes que sugerem a experiência (velocidade, sabor, viagem), e aliterações ou rimas que são fáceis de lembrar. Gere muitas opções antes de filtrar.',
        },
        {
          title: 'Priorize memorabilidade e "shareability"',
          description: 'Na cultura de food trucks, word-of-mouth e redes sociais são cruciais. Avalie cada nome perguntando: é fácil de lembrar após uma única vez? É divertido de dizer e compartilhar? Funciona como hashtag no Instagram? Pessoas vão querer tirar foto na frente do truck por causa do nome? Cria curiosidade que faz as pessoas quererem experimentar? Nomes que pessoas querem compartilhar são ouro para food trucks.',
        },
        {
          title: 'Teste a aplicação visual e signage',
          description: 'Diferente de outros negócios, o nome do food truck será literalmente parte do visual do veículo. Considere como o nome ficará pintado ou plotado na lateral do truck, se é legível a distância (imagine alguém vendo de um carro ou do outro lado de um festival), quantas letras e palavras (mais curto geralmente é melhor para signage), potencial para criar um logo ou mascote memorável, e como ficará em cardápios, embalagens e materiais promocionais.',
        },
        {
          title: 'Verifique disponibilidade digital e local',
          description: 'Garanta que seu nome funciona no ecossistema onde food trucks operam. Verifique disponibilidade no Instagram (essencial para food trucks), no Google para não confundir com outros negócios, em apps de delivery como iFood e Rappi se planeja usar, e em grupos e associações de food trucks da sua cidade. Também é importante que não haja outro food truck com nome similar na sua região de operação.',
        },
        {
          title: 'Teste com seu público-alvo real',
          description: 'Compartilhe suas opções favoritas com pessoas que representam seus clientes ideais. Vá além de perguntar se gostam—pergunte qual nome faria eles pararem o carro, qual nome contariam para amigos, qual nome criariam expectativa sobre a comida, e qual nome lembrariam no dia seguinte. Feedback de pessoas que realmente comeriam no seu truck é o mais valioso.',
        },
        {
          title: 'Visualize o nome na jornada completa do cliente',
          description: 'Antes de finalizar, imagine o nome em toda experiência: alguém vê o truck estacionado e o nome chama atenção, tira uma foto para o Instagram com seu nome visível, conta para amigos sobre o truck pelo nome, busca você nas redes sociais usando o nome, e volta a procurar quando quer comer novamente. Se o nome funciona bem em todos esses momentos e te deixa animado, você encontrou o nome certo para seu food truck.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'RodaSabor', description: 'Combina mobilidade com sabor—perfeito para food trucks que querem comunicar que levam comida deliciosa para onde os clientes estão.' },
      { name: 'ChefSobreRodas', description: 'Destaca a qualidade gourmet em formato móvel—ideal para food trucks de chefs com comida de nível restaurante.' },
      { name: 'ComidaNaRua', description: 'Celebra a cultura de street food—perfeito para food trucks que abraçam a autenticidade da comida de rua.' },
      { name: 'GrillMóvel', description: 'Comunica especialização em grelhados—ideal para food trucks de hambúrgueres, churrascos e carnes.' },
      { name: 'SaborExpress', description: 'Sugere rapidez com qualidade—perfeito para food trucks em áreas de alto movimento que servem comida rápida e saborosa.' },
      { name: 'TruckGourmet', description: 'Eleva a comida de truck a status gourmet—ideal para food trucks com propostas culinárias mais sofisticadas.' },
      { name: 'FomeNômade', description: 'Evoca a natureza itinerante do negócio—perfeito para trucks que atendem diferentes locais e eventos.' },
      { name: 'PanelaNaEstrada', description: 'Imagem caseira e itinerante—ideal para food trucks de comida brasileira tradicional e caseira.' },
      { name: 'BocadoUrbano', description: 'Conecta comida com vida na cidade—perfeito para food trucks com estética urbana e contemporânea.' },
      { name: 'TemperoRolante', description: 'Combina sabor com movimento—ideal para trucks com comida bem temperada e personalidade marcante.' },
      { name: 'RuaGastronômica', description: 'Eleva street food a experiência gastronômica—perfeito para trucks de conceito mais elaborado.' },
      { name: 'PitStop Sabores', description: 'Referência automobilística com foco em comida—ideal para trucks que servem refeições rápidas e satisfatórias.' },
      { name: 'VanGourmet', description: 'Simples e descritivo com toque premium—perfeito para trucks que querem equilibrar acessibilidade com qualidade.' },
      { name: 'ComidinhaDeRua', description: 'Carinhoso e acolhedor—ideal para trucks de comfort food e receitas que remetem à casa.' },
      { name: 'FestivalMóvel', description: 'Evoca a energia de festivais gastronômicos—perfeito para trucks com variedade ou presença forte em eventos.' },
      { name: 'SaborSemFronteiras', description: 'Sugere culinária diversa e aventureira—ideal para trucks de fusion ou que exploram diferentes culinárias.' },
      { name: 'ChurrascaRodas', description: 'Específico para churrascos sobre rodas—perfeito para trucks especializados em carnes grelhadas e BBQ.' },
      { name: 'DelíciaMóvel', description: 'Promete prazer gastronômico em formato portátil—ideal para trucks de sobremesas ou comida indulgente.' },
      { name: 'CozinhaItinerante', description: 'Comunica profissionalismo em movimento—perfeito para trucks que querem transmitir seriedade culinária.' },
      { name: 'BiteExpress', description: 'Moderno e dinâmico—ideal para trucks com proposta jovem, rápida e conectada com tendências.' },
    ],
  },

'furniture-store': {
    slug: 'furniture-store',
    name: 'Gerador de Nomes para Lojas de Móveis',
    title: 'Gerador gratuito de ideias de nomes comerciais de Loja de Móveis por IA',
    description: 'Gere nomes elegantes e memoráveis para lojas de móveis, decoração e design de interiores.',
    metaDescription: 'Crie o nome perfeito para sua loja de móveis com nosso gerador gratuito por IA. Desenvolva nomes elegantes e memoráveis para lojas de...',
    inputLabel: 'Descreva sua loja de móveis...',
    inputPlaceholder: 'ex. Uma loja de móveis planejados com design moderno e sustentável para apartamentos compactos',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Sofisticado', 'Moderno & Minimalista', 'Acolhedor & Familiar', 'Rústico & Artesanal'],
        default: 'Elegante & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the furniture retail and home furnishing industry. Your role is to generate elegant, memorable business names that evoke quality craftsmanship, design excellence, and the transformation of houses into homes.

FURNITURE STORE INDUSTRY CONTEXT:
The furniture retail industry encompasses:
- Contemporary and modern furniture stores
- Traditional and classic furniture retailers
- Custom and made-to-order furniture shops
- Office and commercial furniture suppliers
- Outdoor and patio furniture specialists
- Children's and nursery furniture stores
- Sustainable and eco-friendly furniture retailers
- Luxury and designer furniture showrooms
- Budget and discount furniture outlets
- Multi-brand furniture department stores

NAME CHARACTERISTICS FOR FURNITURE STORES:
1. **Quality and Craftsmanship**
   - Names should suggest quality materials and construction
   - Convey durability and lasting value
   - Evoke skilled craftsmanship

2. **Design and Aesthetics**
   - Reflect design sensibility and style
   - Suggest beautiful, well-designed pieces
   - Appeal to design-conscious consumers

3. **Home and Comfort**
   - Create associations with comfortable living
   - Evoke the transformation of spaces
   - Connect with the emotional aspect of furnishing a home

4. **Trust and Reliability**
   - Furniture is a significant purchase
   - Names should inspire confidence
   - Suggest a business that stands behind its products

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a furniture store

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Loja de Móveis Planejados',
        description: 'Empreendedores lançando lojas de móveis sob medida e planejados usam o Gerador de Nomes para Lojas de Móveis para criar identidades que comunicam personalização e design inteligente. Ao descrever seu foco em soluções para espaços modernos e apartamentos compactos, a ferramenta gera nomes que atraem clientes que buscam móveis que se encaixam perfeitamente em suas vidas.',
      },
      {
        title: 'Lançamento de Showroom de Design',
        description: 'Designers e arquitetos abrindo showrooms de móveis de design usam o gerador para encontrar nomes que posicionam a loja como destino para peças de qualidade superior e estética refinada. O nome precisa comunicar curadoria, bom gosto e expertise em design de interiores.',
      },
      {
        title: 'Expansão de Marcenaria para Varejo',
        description: 'Marceneiros e fabricantes expandindo para venda direta ao consumidor usam o gerador para desenvolver nomes que valorizam o artesanato e a qualidade da produção própria. O nome deve transmitir a expertise artesanal que diferencia móveis feitos à mão de opções industrializadas.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para loja de móveis?',
        answer: 'Um bom nome para loja de móveis transmite qualidade, design e confiança. Deve evocar a transformação de espaços em lares acolhedores, sugerir durabilidade e bom gosto, e ser memorável para clientes que pesquisam antes de fazer compras significativas. O nome ideal funciona bem em fachadas de showrooms, sites de e-commerce e em indicações de arquitetos e decoradores.',
      },
      {
        question: 'Meu nome deve indicar o tipo de móveis que vendo?',
        answer: 'Depende da sua estratégia. Nomes específicos como "Móveis Planejados Design" comunicam claramente o foco, mas podem limitar expansão futura. Nomes mais amplos como "Casa & Estilo" permitem diversificação. Considere se quer ser percebido como especialista em um segmento ou como destino completo para mobiliário.',
      },
      {
        question: 'Qual a importância do nome para atrair clientes de móveis?',
        answer: 'Compra de móveis geralmente envolve pesquisa e comparação. Um nome memorável e que transmite qualidade ajuda você a ser lembrado durante o processo de decisão do cliente. Além disso, arquitetos, designers e decoradores frequentemente indicam lojas de móveis—um nome profissional facilita essas indicações.',
      },
      {
        question: 'Devo usar palavras que remetem a design no nome?',
        answer: 'Palavras como "Design", "Studio", "Atelier" ou "Concept" podem elevar a percepção da sua loja, especialmente se você foca em peças de design diferenciado. No entanto, certifique-se de que seu produto corresponde a essa expectativa. Para móveis mais acessíveis, termos como "Casa", "Lar" ou "Móveis" podem ser mais apropriados.',
      },
      {
        question: 'Nomes em outros idiomas funcionam para lojas de móveis?',
        answer: 'Palavras italianas (Casa, Mobili, Arredo), escandinavas (referências a design escandinavo), ou inglesas são comuns e podem adicionar sofisticação. Marcas como "Tok&Stok" e "Etna" usam nomes não-portugueses com sucesso. No entanto, certifique-se de que seja pronunciável e não cause confusão.',
      },
      {
        question: 'Como criar um nome que transmita qualidade e durabilidade?',
        answer: 'Use palavras que evoquem solidez e permanência: "Madeira", "Raiz", "Sólido", "Tradição", "Artesanal", "Atemporal". Referências a materiais nobres e técnicas artesanais também comunicam qualidade. O tom do nome—mais clássico ou contemporâneo—também influencia a percepção de qualidade.',
      },
      {
        question: 'Posso usar meu nome ou sobrenome na loja de móveis?',
        answer: 'Sim, especialmente se você é marceneiro ou designer e quer associar sua reputação aos produtos. "Móveis Ferreira" ou "Atelier Carvalho" criam identidade pessoal. Esta abordagem funciona bem para lojas que valorizam artesanato e relação pessoal, mas pode limitar escalabilidade.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de móveis?',
        answer: 'Pesquise no Google por lojas de móveis com nomes similares, verifique em plataformas como MadeiraMadeira e Mobly, busque em associações do setor moveleiro, confira registros de marcas no INPI na categoria de móveis, e verifique disponibilidade de domínio e redes sociais. O mercado de móveis tem muitos players, então pesquisa cuidadosa é importante.',
      },
      {
        question: 'O nome deve refletir a faixa de preço dos móveis?',
        answer: 'Sim, alinhamento entre nome e posicionamento é crucial. Nomes luxuosos criam expectativas de preços premium—se seus móveis são acessíveis, isso pode afastar clientes. Inversamente, nomes muito simples podem não atrair clientes de alto padrão. O nome deve preparar o cliente para a experiência que encontrará.',
      },
      {
        question: 'Como escolher um nome que funcione para loja física e online?',
        answer: 'Para omnichannel, escolha um nome único e fácil de buscar, verifique disponibilidade de domínio .com.br, considere como aparecerá em embalagens de entrega, certifique-se de que é fácil de soletrar quando alguém ouve em conversa, e pense em como funcionará em campanhas digitais de remarketing.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome ideal para sua loja de móveis é uma decisão estratégica que impactará como clientes percebem a qualidade, estilo e valor dos seus produtos. O nome aparecerá na fachada do showroom, em catálogos e sites, em embalagens de entrega, em indicações de profissionais de design, e nas conversas quando famílias decidem onde comprar os móveis para seu novo lar. É o primeiro elemento que comunica se sua loja é o lugar certo para encontrar peças que transformarão uma casa em um lar. Um nome bem escolhido atrai o público certo, diferencia você da concorrência e cria as bases para uma marca duradoura no mercado moveleiro.',
      steps: [
        {
          title: 'Defina seu posicionamento e proposta de valor',
          description: 'Antes de brainstormar nomes, tenha clareza sobre o posicionamento da sua loja. Determine qual é seu segmento principal (móveis planejados, de design, popular, escritório, infantil), quem é seu cliente ideal (jovens montando primeiro apartamento, famílias, arquitetos e decoradores, empresas), qual é seu diferencial competitivo (preço, design, qualidade, personalização, atendimento), qual faixa de preço você ocupa no mercado, e qual experiência de compra você oferece.',
        },
        {
          title: 'Explore conceitos relacionados a móveis e decoração',
          description: 'Faça brainstorm de palavras e conceitos do universo de móveis e design de interiores. Inclua termos de materiais (madeira, couro, tecido), conceitos de lar (casa, ninho, aconchego, refúgio), elementos de design (forma, linha, espaço, harmonia), referências a estilo (moderno, clássico, rústico, minimalista), e palavras que evocam qualidade (artesanal, sob medida, atemporal). Combine esses elementos criativamente.',
        },
        {
          title: 'Considere o tom e personalidade da marca',
          description: 'Decida qual personalidade seu nome deve transmitir. Um tom sofisticado e minimalista (Forma, Linha, Espaço) atrai público de design. Um tom acolhedor e familiar (Cantinho do Lar, Casa Feliz) ressoa com famílias. Um tom artesanal (Ateliê de Madeira, Oficina) valoriza o trabalho manual. O tom do nome deve combinar com a experiência no showroom e a qualidade dos produtos.',
        },
        {
          title: 'Avalie aplicações práticas do nome',
          description: 'Filtre suas opções considerando aplicações reais: como o nome ficará em uma fachada de loja, legibilidade em catálogos e materiais impressos, funcionamento em site e e-commerce, aparência em etiquetas de produtos e embalagens de entrega, e como será dito em indicações ("comprei meu sofá na [nome]"). Nomes muito longos podem ter problemas práticos.',
        },
        {
          title: 'Verifique disponibilidade legal e digital',
          description: 'Antes de se apegar a um nome, confirme sua viabilidade. Pesquise marcas registradas no INPI em categorias de móveis e decoração, verifique se há outras lojas de móveis com nomes muito similares (nacional e regionalmente), garanta disponibilidade de domínio .com.br, confira handles no Instagram e Pinterest (importantes para decoração), e considere registrar sua marca.',
        },
        {
          title: 'Teste com diferentes públicos relevantes',
          description: 'Compartilhe opções finalistas com pessoas de diferentes perfis: consumidores finais que representam seu público-alvo, arquitetos e designers de interiores que podem indicar, profissionais do setor moveleiro, e pessoas que recentemente compraram móveis. Pergunte qual nome transmite mais qualidade, qual loja visitariam primeiro, e qual nome é mais memorável.',
        },
        {
          title: 'Visualize o nome na identidade completa da loja',
          description: 'Antes de decidir, imagine o nome em todo contexto do negócio: na fachada de um showroom bem iluminado, em um sofá elegante com etiqueta da sua marca, em um caminhão de entrega circulando pela cidade, no perfil do Instagram com fotos de ambientes decorados, em uma indicação de arquiteto para clientes, e em placas de "aqui tem [nome]" em projetos. Se o nome funciona lindamente em todos esses cenários, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'LarPerfeito', description: 'Promete a realização do lar dos sonhos—perfeito para lojas que ajudam clientes a criar ambientes ideais e acolhedores.' },
      { name: 'MóveisDeAutor', description: 'Sugere peças com design assinado—ideal para lojas com móveis de design diferenciado e exclusivo.' },
      { name: 'CasaConceito', description: 'Evoca design conceitual e tendências—perfeito para showrooms de móveis contemporâneos e inovadores.' },
      { name: 'MadeiraViva', description: 'Celebra a matéria-prima nobre—ideal para lojas que valorizam móveis de madeira maciça e trabalho artesanal.' },
      { name: 'EspaçoELinha', description: 'Referência a design minimalista—perfeito para lojas de móveis modernos com linhas limpas e funcionais.' },
      { name: 'AtelierMobiliário', description: 'Combina artesanato com sofisticação—ideal para lojas de móveis sob medida e planejados premium.' },
      { name: 'NinhoDecor', description: 'Evoca aconchego e personalização—perfeito para lojas que criam ambientes acolhedores e personalizados.' },
      { name: 'MóveisHarmonia', description: 'Sugere equilíbrio e composição—ideal para lojas que ajudam clientes a harmonizar seus espaços.' },
      { name: 'DesignEmCasa', description: 'Leva bom design para os lares—perfeito para lojas que democratizam o acesso a móveis bem desenhados.' },
      { name: 'RaizMóveis', description: 'Evoca tradição e solidez—ideal para lojas com móveis de qualidade duradoura e valores familiares.' },
      { name: 'LinhaPura', description: 'Comunica simplicidade elegante—perfeito para lojas de estética minimalista e escandinava.' },
      { name: 'CasaSob Medida', description: 'Destaca personalização—ideal para lojas especializadas em móveis planejados e customizados.' },
      { name: 'MobiliárioContemporâneo', description: 'Posicionamento claro em design atual—perfeito para showrooms de móveis modernos.' },
      { name: 'ConfortoAutêntico', description: 'Promete bem-estar genuíno—ideal para lojas focadas em móveis estofados e confortáveis.' },
      { name: 'ArteDeMorar', description: 'Eleva decoração a status de arte—perfeito para lojas com curadoria de peças especiais.' },
      { name: 'FormaMóveis', description: 'Nome clean que foca no design—ideal para lojas de estética contemporânea e funcional.' },
      { name: 'CasaCompleta', description: 'Sugere solução total—perfeito para lojas que oferecem desde planejados até decoração completa.' },
      { name: 'MóveisEssência', description: 'Comunica foco no essencial—ideal para lojas de estilo minimalista com peças funcionais.' },
      { name: 'AmbientarDecor', description: 'Verbo que indica ação transformadora—perfeito para lojas que criam ambientes completos.' },
      { name: 'NobresMadeiras', description: 'Destaca qualidade dos materiais—ideal para lojas de móveis em madeiras nobres e acabamento premium.' },
    ],
  },

  'graphic-design': {
    slug: 'graphic-design',
    name: 'Gerador de Nomes para Estúdios de Design Gráfico',
    title: 'Gerador gratuito de ideias de nomes comerciais de Design Gráfico por IA',
    description: 'Gere nomes criativos e profissionais para estúdios de design gráfico, agências criativas e freelancers de design.',
    metaDescription: 'Crie um nome marcante para seu estúdio de design gráfico com nosso gerador gratuito por IA. Desenvolva nomes criativos e profissionais para...',
    inputLabel: 'Descreva seu estúdio de design gráfico...',
    inputPlaceholder: 'ex. Um estúdio boutique especializado em identidade visual e branding para startups de tecnologia',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Criativo & Artístico', 'Moderno & Minimalista', 'Profissional & Corporativo', 'Ousado & Experimental'],
        default: 'Criativo & Artístico',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the creative and design industry. Your role is to generate creative, professional business names that convey design expertise, artistic vision, and creative problem-solving capabilities for graphic design studios, agencies, and freelance designers.

GRAPHIC DESIGN INDUSTRY CONTEXT:
The graphic design industry encompasses:
- Brand identity and logo design studios
- Print and publication design firms
- Digital and web design agencies
- Packaging design specialists
- Motion graphics and animation studios
- UI/UX design consultancies
- Illustration and custom artwork studios
- Environmental and signage design firms
- Marketing and advertising design agencies
- Full-service creative studios

NAME CHARACTERISTICS FOR GRAPHIC DESIGN BUSINESSES:
1. **Creative and Artistic**
   - Names should reflect creative vision and artistry
   - Convey design thinking and innovation
   - Stand out with memorable creativity

2. **Professional and Capable**
   - Balance creativity with business credibility
   - Suggest ability to deliver professional results
   - Appeal to corporate and commercial clients

3. **Visually Evocative**
   - Names that create visual associations
   - Reference design elements, colors, or concepts
   - Work well when visualized as a logo

4. **Memorable and Unique**
   - Stand out in a creative industry
   - Easy to remember and recommend
   - Distinctive in portfolio presentations

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a graphic design business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Estúdio de Branding',
        description: 'Designers especializados em identidade visual e branding usam o Gerador de Nomes para Estúdios de Design Gráfico para criar uma identidade própria tão forte quanto as que desenvolvem para clientes. Ao descrever seu foco em estratégia de marca e design conceitual, a ferramenta gera nomes que posicionam o estúdio como parceiro estratégico em branding.',
      },
      {
        title: 'Transição de Freelancer para Estúdio',
        description: 'Designers freelancer escalando para formato de estúdio usam o gerador para desenvolver uma identidade de marca que comunica capacidade ampliada e profissionalismo. O novo nome precisa transcender a pessoa do designer individual e estabelecer uma entidade de negócio que pode crescer.',
      },
      {
        title: 'Reposicionamento de Agência Criativa',
        description: 'Agências de design estabelecidas buscando se reposicionar no mercado—seja para focar em um nicho específico ou modernizar sua imagem—usam o gerador para explorar nomes que reflitam sua nova direção estratégica e atraiam o perfil de cliente desejado.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para estúdio de design gráfico?',
        answer: 'Um bom nome para estúdio de design combina criatividade com profissionalismo. Deve ser visualmente evocativo, memorável, e demonstrar a própria capacidade criativa do estúdio—afinal, se você não consegue criar uma boa marca para si mesmo, como fará para clientes? O nome ideal funciona como uma peça de portfólio, mostrando seu senso estético e originalidade.',
      },
      {
        question: 'Meu nome de estúdio deve ser criativo ou profissional?',
        answer: 'Depende do seu mercado-alvo. Clientes corporativos podem preferir nomes mais sóbrios e profissionais. Startups e empresas de tecnologia frequentemente respondem bem a nomes mais criativos e ousados. Muitos estúdios de sucesso equilibram os dois—um nome criativo com apresentação profissional. Conheça seu cliente ideal ao decidir.',
      },
      {
        question: 'Devo usar meu nome pessoal no estúdio?',
        answer: 'Nomear o estúdio com seu nome (como "Studio Paula Silva") pode construir sua marca pessoal e criar conexão com clientes. No entanto, pode limitar crescimento da equipe e dificultar venda futura do negócio. Se planeja escalar, considere um nome que não dependa da sua presença pessoal.',
      },
      {
        question: 'Nomes em inglês funcionam para estúdios brasileiros?',
        answer: 'Sim, nomes em inglês são muito comuns e aceitos no design brasileiro, já que o vocabulário do setor é fortemente anglicizado. Termos como "Studio", "Design", "Lab", "Creative" comunicam universalidade. Porém, se seu foco é clientes locais ou governo, nomes em português podem ser mais apropriados.',
      },
      {
        question: 'Como criar um nome que funcione como marca visual?',
        answer: 'Pense no potencial de logomark desde o início. Nomes curtos com letras interessantes, iniciais que formam símbolos, ou palavras que evocam formas específicas têm vantagem. Evite nomes muito longos ou complexos que serão difíceis de transformar em logo memorável.',
      },
      {
        question: 'Qual a importância do nome para conseguir clientes?',
        answer: 'Na indústria criativa, seu nome é parte do seu portfólio. Clientes avaliam sua criatividade antes mesmo de ver seu trabalho. Um nome original e bem pensado sugere capacidade criativa; um nome genérico ou mal elaborado pode criar dúvidas. Além disso, nomes memoráveis facilitam indicações boca a boca.',
      },
      {
        question: 'Devo incluir palavras como "design" ou "studio" no nome?',
        answer: 'Descritores como "Design", "Studio", "Creative", "Lab" ajudam a identificar seu negócio rapidamente, especialmente em buscas. No entanto, muitos estúdios de sucesso usam apenas nomes abstratos (como Pentagram ou Wolff Olins). Se seu nome é abstrato, considere usar um tagline descritivo.',
      },
      {
        question: 'Como verificar se o nome está disponível na comunidade de design?',
        answer: 'Pesquise em plataformas onde designers estão presentes: Behance, Dribbble, LinkedIn, Instagram. Verifique diretórios de design e associações como ADG. Busque no Google por estúdios com nomes similares. A comunidade de design é conectada globalmente, então verifique também mercados internacionais se tem ambições de crescimento.',
      },
      {
        question: 'O nome deve indicar especialização em algum tipo de design?',
        answer: 'Nomes específicos como "Brand Studio" ou "Packaging Design" comunicam expertise clara, atraindo clientes que buscam especialistas. Nomes genéricos como "Creative Lab" oferecem flexibilidade. A escolha depende se você quer ser visto como especialista em nicho ou estúdio versátil.',
      },
      {
        question: 'Como testar se meu nome de estúdio funciona bem?',
        answer: 'Crie um logo básico com o nome e veja como fica. Peça feedback a outros designers e potenciais clientes. Teste em diferentes aplicações: cartão de visita, site, proposta comercial. Avalie se o nome gera curiosidade e interesse. Se outros criativos admiram o nome, você está no caminho certo.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu estúdio de design gráfico é uma oportunidade de demonstrar sua própria criatividade e senso estético. O nome aparecerá em propostas comerciais, apresentações de portfólio, cartões de visita, perfis em plataformas criativas, e em todo material que representa seu trabalho. Como designer, você sabe que branding importa—e seu próprio nome de estúdio é a primeira peça do seu portfólio. Um nome bem escolhido não apenas atrai clientes, mas também comunica sua abordagem criativa, estabelece credibilidade profissional e cria uma identidade memorável no competitivo mercado de design.',
      steps: [
        {
          title: 'Defina o posicionamento e especialização do estúdio',
          description: 'Antes de criar nomes, tenha clareza sobre sua proposta de valor. Determine sua especialização principal (branding, web design, embalagem, editorial, motion), quem são seus clientes ideais (startups, corporações, agências, varejo), qual é seu diferencial criativo (estilo, processo, especialização técnica), como quer ser percebido (boutique e exclusivo, ágil e acessível, experimental e inovador), e suas ambições de crescimento (freelancer premium, estúdio boutique, agência em escala).',
        },
        {
          title: 'Explore conceitos do universo visual e criativo',
          description: 'Faça brainstorm de palavras relacionadas a design e criatividade. Inclua termos técnicos (pixel, vetor, tinta, forma, cor), conceitos de design (composição, harmonia, contraste, equilíbrio), referências artísticas e culturais, metáforas visuais (luz, espectro, prisma, lente), e verbos criativos (criar, compor, visualizar, transformar). Combine esses elementos de formas inesperadas.',
        },
        {
          title: 'Avalie potencial visual e de branding do nome',
          description: 'Como estúdio de design, seu nome precisa funcionar visualmente. Para cada opção, considere como se transformaria em logo ou wordmark, se as letras têm potencial para criar símbolo ou monograma, como ficaria em diferentes aplicações (assinatura de email, proposta, Behance), se evoca cores ou formas mentais interessantes, e se outros designers admirariam a escolha.',
        },
        {
          title: 'Balanceie criatividade com acessibilidade',
          description: 'Nomes muito abstratos podem ser memoráveis mas difíceis de encontrar em buscas. Nomes muito descritivos podem ser esquecíveis. Busque equilíbrio: criativo o suficiente para se destacar, acessível o suficiente para ser lembrado e encontrado. Teste pronúncia e ortografia—clientes precisam conseguir digitar seu nome corretamente.',
        },
        {
          title: 'Verifique disponibilidade em plataformas criativas',
          description: 'Pesquise extensivamente onde designers e estúdios existem: Behance, Dribbble, Instagram, LinkedIn, Pinterest, Awwwards, diretórios de design. Verifique disponibilidade de domínio (.com.br, .design, .studio). Confira se não há conflito com estúdios estabelecidos, especialmente se atuam em segmentos similares. A comunidade de design é pequena e conectada.',
        },
        {
          title: 'Teste com a comunidade criativa',
          description: 'Compartilhe opções com outros designers, diretores de arte e potenciais clientes. A opinião de pares criativos é especialmente valiosa nesta indústria. Pergunte qual nome demonstra mais criatividade, qual sugere mais profissionalismo, qual seria mais fácil de indicar, e qual nome eles admirariam se vissem em um portfólio.',
        },
        {
          title: 'Crie uma aplicação visual antes de decidir',
          description: 'Antes de finalizar, faça o exercício que faria para um cliente: desenvolva um logo básico com o nome, aplique em mockups de cartão de visita e site, veja como fica na assinatura de um projeto, e avalie se a marca como um todo te representa. Se você se orgulha de apresentar essa identidade como seu próprio trabalho, encontrou o nome certo para seu estúdio.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'PixelPerfeito', description: 'Comunica precisão e atenção aos detalhes—perfeito para estúdios conhecidos por trabalho meticuloso e acabamento impecável.' },
      { name: 'CriativosUnidos', description: 'Sugere colaboração e força coletiva—ideal para estúdios com equipe multidisciplinar que trabalha em conjunto.' },
      { name: 'FormaEstúdio', description: 'Referência fundamental ao design—perfeito para estúdios com abordagem minimalista e foco em elementos essenciais.' },
      { name: 'DesignComPropósito', description: 'Comunica design estratégico e intencional—ideal para estúdios que focam em resultados, não apenas estética.' },
      { name: 'CoresVivas', description: 'Evoca vibração e energia visual—perfeito para estúdios especializados em trabalhos coloridos e impactantes.' },
      { name: 'LabCriativo', description: 'Sugere experimentação e inovação—ideal para estúdios que exploram novas técnicas e abordagens.' },
      { name: 'LinhaFina', description: 'Referência a precisão e delicadeza—perfeito para estúdios com estética refinada e trabalho detalhado.' },
      { name: 'VisualMente', description: 'Jogo de palavras entre visual e mente—ideal para estúdios que equilibram criatividade com estratégia.' },
      { name: 'ArteFuncional', description: 'Combina estética com propósito—perfeito para estúdios de design que resolvem problemas através da criatividade.' },
      { name: 'EstúdioConceito', description: 'Comunica design conceitual e pensado—ideal para estúdios focados em branding e identidade visual.' },
      { name: 'PixelsELetras', description: 'Abrange digital e tipografia—perfeito para estúdios versáteis em diferentes formatos e mídias.' },
      { name: 'CriativoOfício', description: 'Eleva criatividade a ofício—ideal para estúdios que valorizam artesanato e expertise técnica.' },
      { name: 'TintaDigital', description: 'Une tradicional e contemporâneo—perfeito para estúdios que dominam tanto print quanto digital.' },
      { name: 'NúcleoDesign', description: 'Sugere essência e centralidade—ideal para estúdios que se posicionam como parceiros estratégicos centrais.' },
      { name: 'VetorCriativo', description: 'Referência técnica com criatividade—perfeito para estúdios com forte expertise em ilustração e gráficos.' },
      { name: 'PrismaVisual', description: 'Evoca diversidade de perspectivas—ideal para estúdios com abordagem multifacetada e versátil.' },
      { name: 'OficinaGráfica', description: 'Combina trabalho manual com design—perfeito para estúdios com atmosfera de workshop criativo.' },
      { name: 'DesignEmMovimento', description: 'Sugere dinamismo e evolução—ideal para estúdios especializados em motion e animação.' },
      { name: 'MarcaCriativa', description: 'Foco claro em branding—perfeito para estúdios especializados em identidade visual e construção de marcas.' },
      { name: 'AtelierGráfico', description: 'Combina artesanato com design—ideal para estúdios boutique com trabalho personalizado e exclusivo.' },
    ],
  },

  'ice-cream': {
    slug: 'ice-cream',
    name: 'Gerador de Nomes para Sorveterias',
    title: 'Gerador gratuito de ideias de nomes comerciais de Sorveteria por IA',
    description: 'Gere nomes doces e irresistíveis para sorveterias, gelaterias e negócios de sobremesas geladas.',
    metaDescription: 'Encontre o nome perfeito para sua sorveteria com nosso gerador gratuito por IA. Crie nomes doces e irresistíveis para gelaterias,...',
    inputLabel: 'Descreva sua sorveteria...',
    inputPlaceholder: 'ex. Uma gelateria artesanal com sabores italianos autênticos e ingredientes orgânicos',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Doce & Divertido', 'Artesanal & Premium', 'Refrescante & Tropical', 'Clássico & Nostálgico'],
        default: 'Doce & Divertido',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the ice cream, frozen desserts, and gelato industry. Your role is to generate sweet, irresistible business names that evoke joy, indulgence, and the delightful experience of enjoying frozen treats.

ICE CREAM SHOP INDUSTRY CONTEXT:
The ice cream industry encompasses:
- Traditional ice cream parlors
- Artisan gelato shops (gelaterias)
- Soft serve and frozen yogurt shops
- Açaí and healthy frozen treat stores
- Gourmet and premium ice cream boutiques
- Ice cream food trucks and carts
- Specialty and exotic flavor shops
- Vegan and dairy-free ice cream stores
- Ice cream cake and dessert shops
- Seasonal and beach-location ice cream stands

NAME CHARACTERISTICS FOR ICE CREAM SHOPS:
1. **Sweet and Delightful**
   - Names should evoke sweetness and pleasure
   - Create immediate appetite appeal
   - Sound delicious and inviting

2. **Fun and Joyful**
   - Ice cream is associated with happiness
   - Names should feel lighthearted and enjoyable
   - Appeal to both children and adults

3. **Refreshing and Appealing**
   - Suggest cool, refreshing experiences
   - Evoke creamy, delicious textures
   - Create cravings for frozen treats

4. **Memorable for Families**
   - Easy for children to remember and request
   - Work for family outings and celebrations
   - Create positive associations

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for an ice cream shop

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Gelateria Artesanal',
        description: 'Empreendedores lançando gelaterias com receitas artesanais e sabores diferenciados usam o Gerador de Nomes para Sorveterias para criar identidades que comunicam qualidade premium e tradição. Ao descrever seu foco em ingredientes especiais e técnicas italianas, a ferramenta gera nomes que atraem clientes que apreciam sorvete de verdade.',
      },
      {
        title: 'Criação de Marca de Açaíteria',
        description: 'Proprietários de negócios de açaí e frozen treats saudáveis usam o gerador para desenvolver nomes que comunicam frescor, saúde e sabor tropical brasileiro. O nome precisa capturar a essência refrescante e energizante do açaí enquanto atrai o público fitness e saúde.',
      },
      {
        title: 'Expansão de Negócio Sazonal',
        description: 'Operadores de quiosques de praia ou negócios sazonais de sorvete usam o gerador para criar marcas memoráveis que os clientes lembrarão e procurarão temporada após temporada. Um nome forte ajuda a construir lealdade que sobrevive aos meses de baixa temporada.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para sorveteria?',
        answer: 'Um bom nome de sorveteria é doce, divertido e irresistível—assim como os produtos que você vende. Deve criar associações imediatas com prazer, frescor e indulgência. O nome ideal faz as pessoas sorrirem, desperta vontade de sorvete, e é fácil para crianças e famílias lembrarem quando querem uma sobremesa especial.',
      },
      {
        question: 'Meu nome deve indicar que vendo sorvete?',
        answer: 'Indicadores como "Sorveteria", "Gelateria", "Gelato", "Sorvetes" ajudam em buscas e identificação rápida. No entanto, nomes mais criativos como "Doce Frio" ou "Cremosidade" também comunicam a ideia. Para negócios em locais de alto tráfego onde as pessoas veem a loja, nomes abstratos podem funcionar bem.',
      },
      {
        question: 'Trocadilhos e jogos de palavras funcionam para sorveterias?',
        answer: 'Sim! Sorveterias são negócios divertidos onde nomes criativos e bem-humorados são bem recebidos. Trocadilhos com "gelado", "cremoso", "doce" ou sabores específicos podem criar nomes memoráveis e compartilháveis. Certifique-se de que o trocadilho é fácil de entender e não força demais.',
      },
      {
        question: 'Qual a importância do nome para atrair famílias?',
        answer: 'Muito importante! Sorveterias dependem fortemente de famílias e crianças. Um nome divertido que crianças gostam de dizer e lembrar pode gerar pedidos frequentes: "Mãe, vamos na [nome]!". Nomes com sons agradáveis, palavras doces ou referências a diversão atraem o público familiar.',
      },
      {
        question: 'Devo usar palavras em italiano para uma gelateria?',
        answer: 'Palavras italianas como "Gelato", "Dolce", "Cremeria" adicionam autenticidade e sofisticação para gelaterias que seguem tradições italianas. No entanto, certifique-se de que brasileiros consigam pronunciar facilmente. Para sorveterias tradicionais brasileiras, nomes em português podem criar mais conexão local.',
      },
      {
        question: 'Como criar um nome que funcione no calor e no frio?',
        answer: 'Embora sorvete seja mais associado ao verão, bons nomes funcionam o ano todo. Evite referências diretas demais ao calor ou praia se você opera durante todo o ano. Foque em prazer, indulgência e sabor—experiências desejadas em qualquer estação.',
      },
      {
        question: 'Posso usar cores ou sabores no nome da sorveteria?',
        answer: 'Sim, referências a cores (Rosa, Dourado), sabores (Baunilha, Chocolate) ou ingredientes podem criar nomes apetitosos. No entanto, cuidado para não limitar sua oferta—"Sorveteria Chocolate" pode confundir se você tem 30 sabores. Use referências genéricas ou abstratas que sugiram variedade.',
      },
      {
        question: 'Como verificar se o nome da sorveteria está disponível?',
        answer: 'Pesquise no Google por sorveterias com nomes similares na sua região, verifique apps de delivery como iFood e Rappi, busque no Instagram onde sorveterias são muito ativas, confira registros de marcas no INPI em categorias de alimentos, e verifique disponibilidade de domínio e redes sociais.',
      },
      {
        question: 'O nome deve comunicar se o sorvete é artesanal ou premium?',
        answer: 'Se seu diferencial é qualidade artesanal, o nome pode ajudar a comunicar isso. Palavras como "Artesanal", "Gelateria" (vs sorveteria), "Cremeria" sugerem qualidade superior. Porém, certifique-se de que sua qualidade corresponde à promessa—clientes terão expectativas elevadas.',
      },
      {
        question: 'Como criar um nome que funcione para delivery?',
        answer: 'Para delivery, o nome precisa ser fácil de buscar e lembrar em apps. Evite acentos ou caracteres especiais que complicam buscas. Certifique-se de que o nome aparece bem em listagens pequenas de aplicativo. Nomes curtos e distintos têm vantagem em plataformas de delivery.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome ideal para sua sorveteria é uma decisão deliciosa que impactará como clientes percebem sua marca de sobremesas geladas. O nome aparecerá na fachada colorida da loja, em cardápios irresistíveis, em embalagens de delivery, em avaliações de apps de comida, e nas conversas de famílias decidindo onde tomar sorvete. É a primeira coisa que comunica se você oferece uma experiência doce, divertida e especial. Um nome bem escolhido faz bocas salivarem, atrai famílias e amigos, e cria memórias associadas aos seus sabores—garantindo que clientes voltem sempre que quiserem se refrescar ou se permitir uma indulgência.',
      steps: [
        {
          title: 'Defina o conceito e posicionamento da sorveteria',
          description: 'Antes de escolher um nome, determine o conceito do seu negócio. Você será uma gelateria artesanal italiana, sorveteria tradicional brasileira, açaíteria saudável, ou loja de frozen yogurt? Qual é seu público principal (famílias, jovens, turistas, fitness)? Qual é seu diferencial (sabores únicos, ingredientes orgânicos, receitas tradicionais)? Qual faixa de preço e experiência você oferece? Essas definições guiarão o tom do nome.',
        },
        {
          title: 'Explore palavras do universo de doces e refrescância',
          description: 'Faça brainstorm de palavras relacionadas a sorvete e prazer. Inclua texturas (cremoso, gelado, suave, macio), sabores e ingredientes (frutas, chocolate, baunilha, açaí), sensações (refrescante, doce, irresistível), momentos felizes (festa, alegria, verão, praia), e palavras de outros idiomas que adicionam charme (dolce, gelato, cream). Combine criativamente.',
        },
        {
          title: 'Priorize nomes que criam desejo',
          description: 'Seu nome deve fazer as pessoas quererem sorvete. Avalie cada opção perguntando: este nome abre apetite? Evoca sensações gostosas e refrescantes? Faz pessoas sorrirem? Crianças achariam divertido dizer? Adultos se sentiriam atraídos? Nomes que criam reação emocional positiva e desejo são mais eficazes.',
        },
        {
          title: 'Considere memorabilidade para famílias',
          description: 'Sorveterias dependem muito de clientes recorrentes, especialmente famílias. Escolha um nome que crianças consigam lembrar e pedir, que funcione em frases como "vamos na [nome]", que seja fácil de pronunciar em qualquer idade, e que crie associações positivas com diversão e momentos especiais em família.',
        },
        {
          title: 'Teste aplicações visuais e de marca',
          description: 'Visualize como o nome funcionará na prática: em uma fachada colorida e convidativa, em copos e colheres de sorvete, em embalagens para viagem, em fotos de Instagram que clientes vão postar, em cardápios com descrições de sabores, e em avaliações de apps de delivery. O nome deve ficar lindo e apetitoso em todos esses contextos.',
        },
        {
          title: 'Verifique disponibilidade e registros',
          description: 'Confirme que o nome está livre para uso. Pesquise sorveterias existentes na sua região e cidade, verifique em apps de delivery por nomes similares, busque no Instagram por perfis de sorveterias, confira disponibilidade de domínio .com.br, e considere pesquisar marcas registradas no INPI se planeja expandir.',
        },
        {
          title: 'Teste com clientes potenciais reais',
          description: 'Antes de finalizar, teste suas opções favoritas com pessoas—especialmente famílias com crianças. Pergunte qual nome faria eles escolherem sua sorveteria, qual nome soa mais gostoso e convidativo, qual nome crianças lembrariam facilmente, e se o nome combina com a experiência que você quer criar. Se o nome faz olhos brilharem de vontade, você encontrou o nome certo.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'GeladoPerfeito', description: 'Promete a experiência ideal—perfeito para sorveterias focadas em qualidade e satisfação total do cliente.' },
      { name: 'DoçuraGelada', description: 'Combina doce com gelado—ideal para sorveterias que querem comunicar prazer e refrescância em um nome.' },
      { name: 'CremeDeSonhos', description: 'Evoca fantasia e indulgência—perfeito para sorveterias com sabores especiais e experiência premium.' },
      { name: 'SaborGelato', description: 'Une sabor com tradição italiana—ideal para gelaterias artesanais com receitas autênticas.' },
      { name: 'FrescuraTropical', description: 'Comunica refrescância e Brasil—perfeito para açaíterias e sorveterias de sabores tropicais.' },
      { name: 'SorveteriaAlegria', description: 'Associa diretamente com felicidade—ideal para sorveterias familiares que criam momentos especiais.' },
      { name: 'DolceFreddo', description: 'Italiano elegante (doce gelado)—perfeito para gelaterias sofisticadas com foco em tradição.' },
      { name: 'CascataDeCremes', description: 'Evoca abundância e variedade—ideal para sorveterias com muitos sabores e coberturas.' },
      { name: 'RefrescanteMomento', description: 'Foca na experiência temporal—perfeito para sorveterias em locais de lazer e passeio.' },
      { name: 'ArtigianoGelato', description: 'Italiano para artesanal—ideal para gelaterias que valorizam produção própria e ingredientes especiais.' },
      { name: 'SorveteFeliz', description: 'Direto e alegre—perfeito para sorveterias familiares com ambiente divertido e colorido.' },
      { name: 'CremeriaDoce', description: 'Sugere cremosidade e doçura—ideal para sorveterias com foco em texturas suaves e sabores indulgentes.' },
      { name: 'GeladinhoGourmet', description: 'Eleva o popular geladinho—perfeito para negócios que modernizam sobremesas geladas tradicionais.' },
      { name: 'SaborDeVerão', description: 'Evoca estação do sorvete—ideal para sorveterias em regiões litorâneas ou destinos de verão.' },
      { name: 'AçaíDoSol', description: 'Específico para açaí com energia solar—perfeito para açaíterias focadas em saúde e vitalidade.' },
      { name: 'PalácioDoGelato', description: 'Sugere grandiosidade e variedade—ideal para grandes sorveterias com experiência imersiva.' },
      { name: 'FriozinhoDoce', description: 'Carinhoso e acessível—perfeito para sorveterias de bairro com clima acolhedor.' },
      { name: 'CrémeParadis', description: 'Toque francês de paraíso cremoso—ideal para sorveterias premium com sabores sofisticados.' },
      { name: 'SorveteDaVovó', description: 'Evoca tradição e afeto—perfeito para sorveterias com receitas tradicionais e atmosfera nostálgica.' },
      { name: 'GelateriaEssência', description: 'Comunica pureza e qualidade essencial—ideal para gelaterias com ingredientes puros e sabores autênticos.' },
    ],
  },

  'interior-design': {
    slug: 'interior-design',
    name: 'Gerador de Nomes para Escritórios de Design de Interiores',
    title: 'Gerador gratuito de ideias de nomes comerciais de Design de Interiores por IA',
    description: 'Gere nomes sofisticados e inspiradores para escritórios de design de interiores, decoração e arquitetura.',
    metaDescription: 'Lance seu escritório de design de interiores com um nome perfeito do nosso gerador gratuito por IA. Crie nomes sofisticados e inspiradores...',
    inputLabel: 'Descreva seu escritório de design de interiores...',
    inputPlaceholder: 'ex. Um escritório de design de interiores residencial focado em projetos de alto padrão com estética contemporânea',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Sofisticado & Elegante', 'Moderno & Minimalista', 'Criativo & Artístico', 'Clássico & Atemporal'],
        default: 'Sofisticado & Elegante',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the interior design and architecture industry. Your role is to generate sophisticated, inspiring business names that evoke design excellence, spatial transformation, and the creation of beautiful living and working environments.

INTERIOR DESIGN INDUSTRY CONTEXT:
The interior design industry encompasses:
- Residential interior design firms
- Commercial and corporate interior designers
- Luxury and high-end interior design studios
- Sustainable and eco-conscious design firms
- Hospitality and restaurant design specialists
- Retail and visual merchandising designers
- Healthcare and wellness space designers
- Home staging and real estate design services
- Kitchen and bathroom design specialists
- Interior architecture and renovation firms

NAME CHARACTERISTICS FOR INTERIOR DESIGN BUSINESSES:
1. **Sophisticated and Refined**
   - Names should convey design expertise and taste
   - Evoke sophistication and aesthetic sensibility
   - Appeal to clients seeking quality design

2. **Inspiring and Transformative**
   - Suggest the transformation of spaces
   - Evoke beautiful, well-designed environments
   - Create aspirational associations

3. **Professional and Trustworthy**
   - Interior design involves significant investment
   - Names should inspire confidence
   - Convey expertise and reliability

4. **Visually Evocative**
   - Create mental images of beautiful spaces
   - Reference design elements (light, space, form)
   - Work well with visual branding

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for an interior design business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Escritório de Design Residencial',
        description: 'Designers de interiores abrindo escritórios focados em projetos residenciais usam o Gerador de Nomes para Escritórios de Design de Interiores para criar identidades que comunicam capacidade de transformar casas em lares dos sonhos. Ao descrever seu estilo e público-alvo, a ferramenta gera nomes sofisticados que atraem clientes de alto padrão.',
      },
      {
        title: 'Especialização em Design Comercial',
        description: 'Profissionais especializando em interiores comerciais—escritórios, lojas, restaurantes—usam o gerador para desenvolver nomes que comunicam expertise em criar ambientes que funcionam para negócios. O nome precisa transmitir tanto criatividade quanto entendimento de necessidades empresariais.',
      },
      {
        title: 'Transição de Decorador para Designer',
        description: 'Decoradores evoluindo para design de interiores completo usam o gerador para criar uma nova identidade profissional que reflita suas capacidades expandidas. O novo nome deve comunicar expertise técnica em projetos, especificações e coordenação de obras.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para escritório de design de interiores?',
        answer: 'Um bom nome para escritório de design de interiores combina sofisticação com acessibilidade. Deve evocar beleza, transformação e expertise em criar ambientes especiais. O nome ideal comunica seu senso estético, transmite confiança para projetos que envolvem investimento significativo, e é memorável para indicações de clientes satisfeitos.',
      },
      {
        question: 'Meu nome deve incluir "design de interiores" ou "decoração"?',
        answer: 'Descritores ajudam em buscas e clareza ("Estúdio de Design de Interiores Silva"). No entanto, muitos escritórios de sucesso usam nomes mais abstratos que evocam estilo ("Espaço Luz", "Harmonia Interiores"). Se seu nome é abstrato, use um tagline descritivo. "Design" tende a soar mais profissional que "decoração".',
      },
      {
        question: 'Devo usar meu nome pessoal no escritório?',
        answer: 'Usar seu nome (como "Ana Costa Design de Interiores") é muito comum na indústria e pode construir sua marca pessoal. Funciona bem se você é o principal designer e quer criar relacionamento pessoal com clientes. No entanto, pode limitar escala e dificultar venda futura do negócio.',
      },
      {
        question: 'Nomes em outros idiomas funcionam para design de interiores?',
        answer: 'Palavras em francês (Maison, Atelier), italiano (Casa, Studio), ou inglês (Design, Space, Interior) são comuns e adicionam sofisticação internacional. A indústria de design tem vocabulário globalizado. No entanto, certifique-se de que clientes brasileiros consigam pronunciar facilmente.',
      },
      {
        question: 'Qual a importância do nome para atrair clientes de alto padrão?',
        answer: 'Muito importante. Clientes de alto padrão buscam designers com marca sofisticada que reflita o nível de qualidade que esperam em seus projetos. Um nome elegante e profissional pode ser fator decisivo na contratação. O nome deve estar à altura dos projetos que você quer realizar.',
      },
      {
        question: 'Como criar um nome que reflita meu estilo de design?',
        answer: 'Se você tem um estilo distintivo (minimalista, clássico, contemporâneo, tropical), seu nome pode refletir isso. "Linha Pura Design" sugere minimalismo. "Bela Época Interiores" evoca classicismo. No entanto, nomes muito específicos podem limitar se seu estilo evolui ou diversifica.',
      },
      {
        question: 'Devo diferenciar entre design residencial e comercial no nome?',
        answer: 'Se você atende ambos mercados ou planeja diversificar, um nome neutro é melhor. Se você se especializa exclusivamente em um tipo (só residencial alto padrão, ou só escritórios corporativos), um nome mais específico pode ajudar a atrair o público certo.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de design?',
        answer: 'Pesquise no Google e Instagram por escritórios com nomes similares, verifique em revistas e sites de decoração, busque em associações como ABD (Associação Brasileira de Designers de Interiores), confira registros de marcas no INPI, e verifique disponibilidade de domínio e redes sociais importantes para o setor.',
      },
      {
        question: 'O nome deve comunicar que faço projetos, não só decoração?',
        answer: 'Se você faz projeto completo (layout, especificações, acompanhamento de obra) vs apenas decoração, palavras como "Design", "Arquitetura de Interiores", "Projeto" comunicam escopo mais amplo. "Interiores" ou "Ambientes" são neutros. "Decoração" pode soar mais limitado para alguns clientes.',
      },
      {
        question: 'Como escolher um nome que funcione para portfólio online?',
        answer: 'Para presença digital forte, escolha um nome único e buscável, verifique disponibilidade em Pinterest e Instagram (essenciais para design), considere como aparecerá em features de revistas online, e certifique-se de que o domínio está disponível. Fotos bonitas de projetos serão associadas ao seu nome, então ele deve ser memorável.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu escritório de design de interiores é uma decisão que define como clientes perceberão sua capacidade de transformar espaços em ambientes extraordinários. O nome aparecerá em propostas de projeto, portfólios publicados em revistas, perfis no Instagram e Pinterest onde design de interiores brilha, placas de obra, e nas indicações de clientes encantados com seus projetos. É a primeira impressão que potenciais clientes terão do seu senso estético e capacidade profissional. Um nome bem escolhido comunica sofisticação, inspira confiança para projetos de alto investimento, e cria uma marca memorável no competitivo mercado de design.',
      steps: [
        {
          title: 'Defina seu posicionamento e especialização',
          description: 'Antes de escolher um nome, tenha clareza sobre seu lugar no mercado. Determine seu foco principal (residencial, comercial, hotelaria, corporativo), seu público-alvo (alto padrão, classe média, empresas específicas), seu estilo distintivo (contemporâneo, clássico, minimalista, eclético), seu diferencial competitivo (sustentabilidade, tecnologia, atendimento, estética única), e suas ambições de crescimento (designer solo, estúdio boutique, empresa maior).',
        },
        {
          title: 'Explore conceitos do universo de design e arquitetura',
          description: 'Faça brainstorm de palavras relacionadas a espaços e design. Inclua elementos espaciais (luz, espaço, volume, forma, linha), conceitos de lar (casa, ambiente, refúgio, ninho), termos de design (harmonia, equilíbrio, composição, proporção), materiais e texturas (madeira, pedra, tecido), e sensações desejadas (aconchego, sofisticação, serenidade, elegância). Combine criativamente.',
        },
        {
          title: 'Considere o tom e personalidade da marca',
          description: 'Decida qual personalidade seu escritório deve transmitir. Um tom sofisticado e luxuoso atrai clientes de alto padrão. Um tom acessível e acolhedor ressoa com famílias. Um tom moderno e minimalista atrai clientes contemporâneos. Um tom artístico e ousado posiciona você como visionário. O tom do nome deve combinar com seu estilo de design e tipo de projeto que busca.',
        },
        {
          title: 'Avalie potencial visual e de branding',
          description: 'Design de interiores é visual, então seu nome deve funcionar esteticamente. Considere como o nome pode se transformar em logo elegante, como ficará em um cartão de visita sofisticado, aparência em placas de obra e sinalizações de projeto, potencial para criar uma identidade visual coesa, e como aparecerá em features de revistas e sites de decoração.',
        },
        {
          title: 'Verifique disponibilidade em plataformas relevantes',
          description: 'Design de interiores tem presença forte em plataformas visuais. Pesquise em Pinterest, Instagram, Houzz, e revistas de decoração por escritórios similares. Verifique disponibilidade de domínio .com.br, handles de redes sociais importantes para o setor, e se não há conflito com escritórios estabelecidos. A comunidade de design é conectada.',
        },
        {
          title: 'Teste com diferentes públicos do mercado',
          description: 'Compartilhe opções com pessoas relevantes: potenciais clientes do seu perfil-alvo, outros profissionais de design e arquitetura, fornecedores e parceiros do setor, e profissionais de marketing imobiliário que indicam designers. Pergunte qual nome transmite mais sofisticação, qual escritório eles contratariam, e qual nome é mais memorável.',
        },
        {
          title: 'Visualize o nome em todo ecossistema profissional',
          description: 'Antes de finalizar, imagine o nome em uso real: em uma proposta de projeto para cliente de alto padrão, na legenda de fotos de projeto em revista de decoração, no seu perfil do Instagram com milhares de seguidores, em uma placa discreta em um projeto de reforma, sendo mencionado em indicações entre amigos, e em premiações de design. Se o nome brilha em todos esses contextos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'EspaçosSofisticados', description: 'Comunica elegância e expertise—perfeito para escritórios focados em projetos residenciais de alto padrão.' },
      { name: 'LuzEForma', description: 'Referência a elementos fundamentais do design—ideal para escritórios com abordagem contemporânea e conceitual.' },
      { name: 'AtelierDeAmbientes', description: 'Combina artesanato com espaços—perfeito para escritórios boutique com projetos personalizados e exclusivos.' },
      { name: 'InterioresHarmonia', description: 'Evoca equilíbrio e bem-estar—ideal para designers que criam espaços serenos e funcionais.' },
      { name: 'CasaConceito', description: 'Sugere design conceitual para lares—perfeito para escritórios com abordagem contemporânea em residências.' },
      { name: 'DesignDeViver', description: 'Conecta design com estilo de vida—ideal para escritórios que criam ambientes que melhoram a vida dos moradores.' },
      { name: 'EspaçoArte', description: 'Eleva interiores a status de arte—perfeito para designers com abordagem artística e criativa.' },
      { name: 'ProjetoRefúgio', description: 'Evoca a criação de santuários pessoais—ideal para design residencial focado em bem-estar e conforto.' },
      { name: 'StudioInterior', description: 'Nome clean e profissional—perfeito para escritórios modernos com portfolio diversificado.' },
      { name: 'AmbientarDesign', description: 'Verbo que indica transformação—ideal para escritórios conhecidos por criar atmosferas únicas.' },
      { name: 'LinhasEEspaços', description: 'Referência técnica elegante—perfeito para design de interiores com forte base em arquitetura.' },
      { name: 'VidaEmDesign', description: 'Conecta design com vivência—ideal para escritórios que priorizam funcionalidade e lifestyle.' },
      { name: 'MaisonInteriores', description: 'Toque francês sofisticado—perfeito para escritórios de alto padrão com estética refinada.' },
      { name: 'ProjetosPlenitude', description: 'Sugere completude e satisfação—ideal para escritórios de projetos completos e integrados.' },
      { name: 'EssênciaAmbientes', description: 'Comunica foco no essencial—perfeito para design minimalista e intencional.' },
      { name: 'CasaPerfeita', description: 'Promete o lar ideal—ideal para escritórios residenciais que realizam sonhos de moradia.' },
      { name: 'InterioresPrima', description: 'Sugere qualidade premium—perfeito para escritórios posicionados no mercado de luxo.' },
      { name: 'DesignDeSensações', description: 'Foco na experiência sensorial—ideal para designers que criam ambientes multissensoriais.' },
      { name: 'ArquiteturaDeLar', description: 'Une arquitetura com aconchego—perfeito para projetos que transformam estruturas em lares.' },
      { name: 'EspaçoSutil', description: 'Comunica refinamento discreto—ideal para design minimalista e sofisticado.' },
    ],
  },

  'jewelry-store': {
    slug: 'jewelry-store',
    name: 'Gerador de Nomes para Joalherias',
    title: 'Gerador gratuito de ideias de nomes comerciais de Joalheria por IA',
    description: 'Gere nomes elegantes e luxuosos para joalherias, bijuterias finas e marcas de acessórios preciosos.',
    metaDescription: 'Crie o nome perfeito para sua joalheria com nosso gerador gratuito por IA. Desenvolva nomes elegantes e luxuosos para joalherias,...',
    inputLabel: 'Descreva sua joalheria...',
    inputPlaceholder: 'ex. Uma joalheria autoral com peças em ouro e pedras brasileiras com design contemporâneo',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Luxuoso & Elegante', 'Moderno & Minimalista', 'Artesanal & Autoral', 'Clássico & Tradicional'],
        default: 'Luxuoso & Elegante',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the jewelry and precious accessories industry. Your role is to generate elegant, luxurious business names that evoke beauty, craftsmanship, and the timeless appeal of fine jewelry.

JEWELRY STORE INDUSTRY CONTEXT:
The jewelry industry encompasses:
- Fine jewelry boutiques (gold, diamonds, precious gems)
- Designer and artisan jewelry studios
- Fashion jewelry and accessories stores
- Bridal and engagement ring specialists
- Vintage and antique jewelry dealers
- Custom and bespoke jewelry creators
- Silver and semi-precious jewelry stores
- Luxury watch and jewelry retailers
- Contemporary and modern jewelry brands
- Brazilian gemstone and jewelry specialists

NAME CHARACTERISTICS FOR JEWELRY STORES:
1. **Elegant and Luxurious**
   - Names should convey luxury and refinement
   - Evoke precious materials and craftsmanship
   - Appeal to discerning jewelry buyers

2. **Timeless and Enduring**
   - Jewelry often marks important life moments
   - Names should feel classic and lasting
   - Avoid trendy terms that may date

3. **Beautiful and Precious**
   - Create associations with beauty and value
   - Reference gems, metals, or brilliance
   - Evoke the emotional significance of jewelry

4. **Trustworthy and Established**
   - Jewelry purchases require trust
   - Names should inspire confidence
   - Suggest expertise and authenticity

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a jewelry store

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Joalheria Autoral',
        description: 'Designers de joias lançando suas próprias marcas usam o Gerador de Nomes para Joalherias para criar identidades que refletem sua visão criativa única. Ao descrever seu estilo—contemporâneo, clássico, minimalista ou exuberante—a ferramenta gera nomes que posicionam a marca no competitivo mercado de joias.',
      },
      {
        title: 'Lançamento de Marca de Joias Online',
        description: 'Empreendedores criando marcas de joias para e-commerce usam o gerador para desenvolver nomes que funcionam perfeitamente no ambiente digital. O nome precisa ser único para SEO, memorável para redes sociais, e criar confiança necessária para compras de valor online.',
      },
      {
        title: 'Rebranding de Joalheria Tradicional',
        description: 'Joalherias familiares ou tradicionais buscando modernizar sua imagem usam o gerador para explorar nomes que honram sua herança enquanto atraem uma nova geração de clientes. O novo nome deve equilibrar tradição com contemporaneidade.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para joalheria?',
        answer: 'Um bom nome para joalheria transmite elegância, preciosidade e confiança. Deve evocar a beleza atemporal das joias, sugerir qualidade e craftsmanship, e criar a sensação de que comprar ali é uma experiência especial. O nome ideal funciona tanto para joias do dia a dia quanto para peças que marcam momentos importantes da vida.',
      },
      {
        question: 'Meu nome deve indicar que vendo joias?',
        answer: 'Indicadores como "Joalheria", "Joias", "Ourivesaria" ajudam em buscas e clareza. No entanto, muitas marcas de sucesso usam nomes abstratos que evocam preciosidade (Vivara, H.Stern, Pandora) sem declarar explicitamente. Se seu nome é abstrato, seu branding visual pode comunicar o segmento.',
      },
      {
        question: 'Nomes em outros idiomas funcionam para joalherias brasileiras?',
        answer: 'Sim, palavras em francês (Belle, Or, Bijou), italiano (Oro, Gioielli), ou inglês são comuns e adicionam sofisticação internacional. Muitas das maiores joalherias brasileiras usam nomes estrangeiros. Porém, certifique-se de que o nome é pronunciável e não cria confusão.',
      },
      {
        question: 'Como criar um nome que transmita luxo e exclusividade?',
        answer: 'Use palavras que evoquem preciosidade: referências a ouro (Oro, Dourado), diamantes (Brilliance, Cristal), materiais nobres, ou conceitos de raridade e beleza (Rara, Sublime, Preciosa). O tom e a sonoridade do nome também importam—sons suaves e elegantes comunicam luxo melhor que sons abruptos.',
      },
      {
        question: 'Posso usar meu nome ou sobrenome na joalheria?',
        answer: 'Sim, é muito tradicional na joalheria usar nomes de família (como Cartier, Bulgari, H.Stern). Isso pode criar legado e valor de marca pessoal. Funciona especialmente bem se você é designer ou se a família tem tradição no setor. Considere que amarra a marca à sua pessoa ou família.',
      },
      {
        question: 'Como diferenciar minha joalheria de concorrentes pelo nome?',
        answer: 'Seu nome pode comunicar seu diferencial: foco em pedras brasileiras, design contemporâneo, joias artesanais, peças de noivado, ou bijuterias acessíveis. Pesquise nomes de concorrentes e busque um ângulo único. Se todos usam nomes clássicos, talvez um nome mais moderno se destaque, e vice-versa.',
      },
      {
        question: 'O nome deve indicar minha especialidade em joias?',
        answer: 'Se você tem um nicho forte (alianças de casamento, joias com gemas brasileiras, prata contemporânea), o nome pode comunicar isso. No entanto, nomes muito específicos podem limitar expansão. "Aliança Perfeita" é claro, mas dificulta vender colares. Pense no longo prazo.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de joias?',
        answer: 'Pesquise no Google por joalherias com nomes similares, verifique em marketplaces como Vivara e outras, busque no Instagram onde joalherias são ativas, confira registros de marcas no INPI (especialmente importante para joias), e verifique disponibilidade de domínio e redes sociais.',
      },
      {
        question: 'Qual a importância do nome para criar confiança?',
        answer: 'Extremamente importante. Joias são compras de alto valor emocional e financeiro. Clientes precisam confiar que estão comprando peças autênticas e de qualidade. Um nome que soa estabelecido, profissional e elegante cria confiança necessária para vendas. Nomes muito informais podem criar dúvidas.',
      },
      {
        question: 'Como escolher um nome que funcione para presentes e ocasiões especiais?',
        answer: 'Joias frequentemente marcam momentos importantes. Nomes que evocam amor, celebração, eternidade e beleza ressoam com compradores de presentes. Evite nomes que pareçam utilitários ou comerciais demais. O nome deve soar especial o suficiente para estar em um presente inesquecível.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua joalheria é uma decisão que define como clientes perceberão o valor, a beleza e a autenticidade das suas peças. O nome aparecerá em vitrines elegantes, caixinhas de presente que criam expectativa, certificados de autenticidade, campanhas para datas especiais, e nos momentos mais significativos da vida dos seus clientes—noivados, casamentos, aniversários, conquistas. É a primeira coisa que comunica se suas joias são dignas de marcar esses momentos preciosos. Um nome bem escolhido transmite luxo, inspira confiança, e cria uma marca que clientes escolherão para suas joias mais importantes.',
      steps: [
        {
          title: 'Defina seu posicionamento no mercado de joias',
          description: 'Antes de escolher um nome, tenha clareza sobre seu lugar no mercado. Determine seu segmento (joias finas em ouro e diamantes, prata contemporânea, bijuterias premium, joias autorais), seu público-alvo (jovens, casais, colecionadores, presente executivo), sua faixa de preço e posicionamento (luxo acessível, premium, ultra-luxo), seu diferencial competitivo (design, materiais, exclusividade, tradição), e a ocasião principal de compra (presentes, autocompra, noivado).',
        },
        {
          title: 'Explore conceitos do universo de joias e preciosidade',
          description: 'Faça brainstorm de palavras relacionadas a joias e luxo. Inclua materiais preciosos (ouro, prata, platina, diamante, esmeralda), conceitos de luz e brilho (luminoso, radiante, cintilante, cristalino), palavras de preciosidade (raro, sublime, precioso, eterno), referências a beleza e elegância, e termos em outros idiomas que evocam sofisticação. Combine criativamente.',
        },
        {
          title: 'Priorize atemporalidade e elegância',
          description: 'Joias são símbolos de momentos eternos, então seu nome deve ter qualidade atemporal. Evite gírias, referências a tendências passageiras, ou termos que possam soar datados em 10-20 anos. Escolha palavras clássicas que permanecerão elegantes. Pense: este nome ainda soará sofisticado quando meus clientes passarem as joias para a próxima geração?',
        },
        {
          title: 'Avalie como o nome comunica confiança',
          description: 'Compra de joias envolve confiança significativa. Avalie se cada nome soa estabelecido e confiável, se evoca profissionalismo e expertise, se transmite autenticidade e qualidade, se clientes se sentiriam seguros fazendo compras de alto valor, e se funciona em certificados de garantia e autenticidade. O nome deve inspirar a confiança necessária para vendas de valor.',
        },
        {
          title: 'Verifique disponibilidade e proteção legal',
          description: 'Para joalherias, proteção de marca é especialmente importante. Pesquise extensivamente por nomes similares no mercado de joias, verifique registros de marcas no INPI com cuidado (joias são categoria sensível), confirme disponibilidade de domínio e redes sociais, e considere registrar sua marca antes do lançamento. Conflitos de nome em joalheria podem ser particularmente problemáticos.',
        },
        {
          title: 'Teste com diferentes perfis de clientes',
          description: 'Compartilhe opções com pessoas que representam seus clientes ideais. Inclua quem compra joias para si, quem compra presentes para outros, casais considerando alianças, e pessoas de diferentes faixas etárias. Pergunte qual nome transmite mais elegância e confiança, onde comprariam um presente especial, e qual nome lembrariam para recomendar.',
        },
        {
          title: 'Visualize o nome em experiências de compra memoráveis',
          description: 'Antes de finalizar, imagine o nome nos momentos especiais dos clientes: na caixinha que ele abre para pedir em casamento, no certificado da joia que ela guarda com carinho, na sacola elegante que sai da loja em um aniversário, na história de como encontraram a peça perfeita, e nas indicações para amigos que buscam joias especiais. Se o nome brilha nesses momentos preciosos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'BrilhoEterno', description: 'Combina luminosidade com permanência—perfeito para joalherias que vendem peças que marcam momentos inesquecíveis.' },
      { name: 'OuroPuro', description: 'Transmite qualidade e autenticidade—ideal para joalherias focadas em ouro de alta qualidade e procedência.' },
      { name: 'JoiasDeAutor', description: 'Comunica design exclusivo e assinado—perfeito para marcas de joias com design próprio e diferenciado.' },
      { name: 'PedrasPreciosas', description: 'Direto e descritivo—ideal para joalherias especializadas em gemas e pedras brasileiras.' },
      { name: 'CintilarJoalheria', description: 'Evoca o brilho característico das joias—perfeito para lojas com peças que capturam a luz.' },
      { name: 'RaridadeJoias', description: 'Sugere exclusividade e escassez—ideal para joalherias com peças únicas e colecionáveis.' },
      { name: 'LuzDoDiamante', description: 'Foco na pedra mais preciosa—perfeito para joalherias especializadas em diamantes e noivados.' },
      { name: 'OuroEArte', description: 'Combina material nobre com criatividade—ideal para joalherias com peças artísticas e elaboradas.' },
      { name: 'EternaBijou', description: 'Francês elegante para bijuterias finas—perfeito para marcas de bijuterias premium e acessórias.' },
      { name: 'JoiasSublimes', description: 'Transmite beleza excepcional—ideal para joalherias de alto padrão com atendimento diferenciado.' },
      { name: 'BrilhoDoBrasil', description: 'Celebra gemas brasileiras—perfeito para joalherias que valorizam pedras nacionais como turmalinas e águas-marinhas.' },
      { name: 'CriaçõesPreciosas', description: 'Evoca originalidade e valor—ideal para marcas com joias de design autoral e exclusivo.' },
      { name: 'RelíquiaJoalheria', description: 'Sugere valor histórico e permanente—perfeito para joalherias com peças clássicas e atemporais.' },
      { name: 'DouradoPrecioso', description: 'Combina cor com valor—ideal para joalherias focadas em ouro e acabamentos dourados.' },
      { name: 'JoiasDaAlma', description: 'Conecta joias com emoção e significado—perfeito para marcas que valorizam histórias por trás das peças.' },
      { name: 'EsplendorJoias', description: 'Transmite magnificência—ideal para joalherias de luxo com peças statement e impactantes.' },
      { name: 'PérfeitoBrilho', description: 'Promete excelência—perfeito para joalherias conhecidas por qualidade impecável e acabamento.' },
      { name: 'TesouroJoalheria', description: 'Evoca descoberta e valor—ideal para lojas com variedade e peças para diferentes ocasiões.' },
      { name: 'LuminaJoias', description: 'Referência à luz de forma elegante—perfeito para joalherias com peças que refletem e capturam luz.' },
      { name: 'NobrezaOuro', description: 'Combina status com material—ideal para joalherias tradicionais de alto padrão e clientela estabelecida.' },
    ],
  },

'lip-gloss': {
    slug: 'lip-gloss',
    name: 'Gerador de Nomes para Marcas de Lip Gloss',
    title: 'Gerador gratuito de ideias de nomes comerciais de Lip Gloss por IA',
    description: 'Gere nomes glamourosos e irresistíveis para marcas de lip gloss, batons e cosméticos labiais.',
    metaDescription: 'Crie o nome perfeito para sua marca de lip gloss com nosso gerador gratuito por IA. Desenvolva nomes glamourosos e irresistíveis para lip...',
    inputLabel: 'Descreva sua marca de lip gloss...',
    inputPlaceholder: 'ex. Uma marca de lip glosses veganos e cruelty-free com cores vibrantes para mulheres jovens',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Glamouroso & Luxuoso', 'Jovem & Divertido', 'Clean & Minimalista', 'Ousado & Trendy'],
        default: 'Glamouroso & Luxuoso',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the cosmetics and lip care industry. Your role is to generate glamorous, irresistible business names that evoke beauty, shine, and the transformative power of lip products.

LIP GLOSS INDUSTRY CONTEXT:
The lip gloss and lip cosmetics industry encompasses:
- Luxury lip gloss brands
- Affordable and drugstore lip products
- Vegan and cruelty-free lip cosmetics
- Organic and natural lip care brands
- Indie and artisan lip product creators
- K-beauty and J-beauty lip brands
- Long-wear and transfer-proof lip products
- Lip care and treatment brands
- Teen and Gen-Z focused lip brands
- Professional makeup artist lip lines

NAME CHARACTERISTICS FOR LIP GLOSS BRANDS:
1. **Glamorous and Alluring**
   - Names should evoke beauty and desirability
   - Suggest shine, gloss, and luminosity
   - Create instant appeal and desire

2. **Feminine and Appealing**
   - Connect with beauty consumers emotionally
   - Feel aspirational yet accessible
   - Evoke confidence and self-expression

3. **Memorable for Social Media**
   - Work well on Instagram and TikTok
   - Easy to hashtag and share
   - Create buzz and virality potential

4. **Versatile for Product Lines**
   - Allow for expansion beyond lip gloss
   - Work across different shade collections
   - Support brand storytelling

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a lip gloss brand

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca Indie de Lip Gloss',
        description: 'Empreendedoras criando marcas independentes de cosméticos labiais usam o Gerador de Nomes para Marcas de Lip Gloss para desenvolver identidades que capturam a atenção nas redes sociais. Ao descrever seu diferencial—fórmulas veganas, cores únicas ou acabamentos especiais—a ferramenta gera nomes que ressoam com o público beauty-obsessed.',
      },
      {
        title: 'Expansão de Influenciadora para Produtos',
        description: 'Influenciadoras de beleza lançando suas próprias linhas de lip gloss usam o gerador para criar nomes de marca que funcionam independentemente de seu nome pessoal. O nome precisa capturar sua estética e conectar com sua audiência enquanto constrói uma marca que pode crescer.',
      },
      {
        title: 'Criação de Linha Premium de Lip Care',
        description: 'Empreendedores desenvolvendo linhas de tratamento labial premium usam o gerador para encontrar nomes que comunicam tanto glamour quanto cuidado. O nome deve atrair consumidoras que buscam produtos que embelezam e tratam os lábios simultaneamente.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para marca de lip gloss?',
        answer: 'Um bom nome de marca de lip gloss é glamouroso, feminino e irresistível. Deve evocar brilho, cor e a transformação que um lip gloss proporciona. O nome ideal funciona bem em embalagens pequenas, é compartilhável nas redes sociais, e cria desejo imediato. Deve soar sofisticado o suficiente para produtos premium, mas acessível para o público geral de beleza.',
      },
      {
        question: 'Meu nome deve indicar que vendo lip gloss?',
        answer: 'Não necessariamente. Muitas marcas de sucesso usam nomes abstratos que evocam beleza (Glossier, Fenty Beauty, Rare Beauty) sem mencionar produto específico. Isso permite expansão para outros cosméticos. No entanto, se seu foco é exclusivamente lábios, indicadores como "Lip", "Gloss" ou "Kiss" podem ajudar na identificação.',
      },
      {
        question: 'Nomes em inglês funcionam para marcas brasileiras de lip gloss?',
        answer: 'Sim! O mercado de beleza brasileiro é muito influenciado por tendências internacionais, e nomes em inglês são comuns e bem aceitos. Termos como "Glow", "Shine", "Kiss", "Lip" comunicam universalmente. No entanto, nomes em português podem criar conexão mais forte com o mercado local.',
      },
      {
        question: 'Qual a importância das redes sociais para marcas de lip gloss?',
        answer: 'Extremamente importante! Lip gloss é um produto altamente visual e viral nas redes sociais. Seu nome precisa funcionar como hashtag, ser fácil de marcar em posts, e soar bem quando influenciadoras falam sobre ele. Verifique disponibilidade em Instagram e TikTok antes de finalizar.',
      },
      {
        question: 'Como criar um nome que pareça luxuoso mas seja acessível?',
        answer: 'Use palavras que evocam sofisticação sem serem intimidadoras. Termos como "Glow", "Velvet", "Bloom" ou referências a cores (Rose, Gold) criam percepção de qualidade. Evite termos muito exclusivos ou pretensiosos se seu público é jovem e busca preços acessíveis.',
      },
      {
        question: 'Posso usar meu nome pessoal para a marca de lip gloss?',
        answer: 'Sim, é muito comum no mercado de beleza (como Kylie Cosmetics, Rihanna Fenty). Funciona bem se você é influenciadora ou quer criar marca pessoal. No entanto, considere que amarra a marca à sua identidade e pode limitar venda futura. Variações ou apelidos podem funcionar melhor.',
      },
      {
        question: 'Quais palavras funcionam bem em nomes de marcas de lip gloss?',
        answer: 'Palavras que evocam brilho (Glow, Shine, Gloss, Luminous), cor (Rose, Cherry, Berry), sensação (Velvet, Silk, Butter), emoção (Kiss, Love, Crush), e beleza (Beauty, Glam, Pretty). Combinações criativas dessas palavras podem criar nomes únicos e memoráveis.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de beleza?',
        answer: 'Pesquise no Google e Instagram por marcas de cosméticos com nomes similares, verifique em varejistas como Sephora, Beleza na Web e Amazon, busque registros de marcas no INPI na categoria de cosméticos, e confirme disponibilidade de domínio e redes sociais. O mercado de beleza é competitivo.',
      },
      {
        question: 'O nome deve funcionar para diferentes tons e coleções?',
        answer: 'Sim! Um bom nome de marca permite que você crie coleções temáticas e nomeie tonalidades individuais. O nome guarda-chuva deve ser versátil o suficiente para acomodar "Coleção Verão" ou tons como "Rosa Nude" sem conflitar. Pense no sistema de naming completo.',
      },
      {
        question: 'Como criar um nome que atraia a Gen Z?',
        answer: 'Gen Z valoriza autenticidade, diversidade e sustentabilidade. Nomes que soam genuínos, criativos e não corporativos ressoam melhor. Evite nomes muito tradicionais ou genéricos. Considere nomes que funcionem como identidade de lifestyle, não apenas produto. Teste com pessoas mais jovens.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua marca de lip gloss é uma decisão que define como seu produto será percebido no competitivo mercado de beleza. O nome aparecerá em embalagens compactas que precisam chamar atenção, em feeds de Instagram e TikTok onde beleza viraliza, em reviews de influenciadoras, em prateleiras de farmácias ou boutiques, e nas conversas entre amigas compartilhando descobertas de beleza. É a primeira coisa que comunica se seu lip gloss é glamouroso, divertido, sofisticado ou acessível. Um nome bem escolhido cria desejo instantâneo, funciona nas redes sociais, e estabelece uma marca que consumidoras de beleza vão amar e recomendar.',
      steps: [
        {
          title: 'Defina o posicionamento e público da sua marca',
          description: 'Antes de escolher um nome, tenha clareza sobre sua marca. Determine seu público-alvo (adolescentes, jovens adultas, mulheres maduras, todos), seu posicionamento de preço (acessível, intermediário, premium, luxo), seus diferenciais (vegano, orgânico, longa duração, hidratante), sua estética visual (minimalista, colorida, glamourosa, clean), e os canais de venda principais (online, varejo, ambos).',
        },
        {
          title: 'Explore palavras do universo de beleza e glamour',
          description: 'Faça brainstorm de palavras relacionadas a lip gloss e beleza. Inclua palavras de brilho e luz (glow, shine, gloss, luminous, radiant), referências a cores e tons (rose, berry, nude, coral, blush), texturas e sensações (velvet, silk, butter, cream, matte), emoções e ações (kiss, smile, pout, crush, love), e termos de beleza gerais. Combine criativamente.',
        },
        {
          title: 'Priorize nomes "Instagramáveis" e compartilháveis',
          description: 'No mercado de beleza atual, presença em redes sociais é crucial. Avalie cada nome perguntando: funciona como hashtag? É fácil de marcar em posts? Soa bem quando influenciadoras dizem em vídeos? Cria curiosidade visual? Tem potencial para viralizar? Pessoas vão querer postar segurando o produto? Nomes que funcionam nas redes têm vantagem competitiva.',
        },
        {
          title: 'Considere como o nome funcionará em embalagens',
          description: 'Lip gloss tem embalagem pequena onde o nome precisa se destacar. Avalie como cada nome ficará em um tubo ou wand, se é curto o suficiente para embalagens compactas, como aparecerá em diferentes tamanhos de aplicação, potencial para criar logo ou tipografia distintiva, e se cria identidade visual memorável na prateleira.',
        },
        {
          title: 'Verifique disponibilidade extensivamente',
          description: 'O mercado de beleza é saturado de marcas. Pesquise no Instagram, TikTok e YouTube por marcas de beleza com nomes similares, verifique em varejistas online e físicos de cosméticos, busque registros de marcas no INPI na categoria de cosméticos, confirme disponibilidade de domínio e todas as redes sociais relevantes, e considere mercados internacionais se tiver ambições de exportação.',
        },
        {
          title: 'Teste com seu público-alvo real',
          description: 'Compartilhe opções com pessoas que representam suas consumidoras ideais. Vá às redes sociais se seu público é jovem. Pergunte qual nome faria elas quererem experimentar o produto, qual nome compartilhariam com amigas, qual nome parece mais premium ou mais divertido (dependendo do seu posicionamento), e qual marca seguiriam no Instagram.',
        },
        {
          title: 'Visualize o nome no ecossistema completo da marca',
          description: 'Antes de finalizar, imagine o nome em uso real: em um vídeo de unboxing no TikTok, em uma review de influenciadora, na necessaire de uma cliente satisfeita, em uma prateleira ao lado de concorrentes, no nome de coleções e tons individuais, e nas conversas quando amigas perguntam "que gloss é esse?". Se o nome brilha (literalmente) em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'GlowLips', description: 'Combina brilho com lábios—perfeito para marcas focadas em glosses luminosos e acabamentos radiantes.' },
      { name: 'BeijoBrilhante', description: 'Evoca romance e luminosidade em português—ideal para marcas que querem conexão emocional com público brasileiro.' },
      { name: 'VelvetKiss', description: 'Sugere textura aveludada e romance—perfeito para glosses com acabamento sofisticado e confortável.' },
      { name: 'LábiosDeRosa', description: 'Referência delicada à flor e cor—ideal para marcas com estética feminina e romântica.' },
      { name: 'ShineQueen', description: 'Empodera com brilho—perfeito para marcas com atitude confiante e glamourosa.' },
      { name: 'GlossyVibes', description: 'Moderno e descontraído—ideal para marcas voltadas à Gen Z com estética de lifestyle.' },
      { name: 'LipLuxe', description: 'Comunica sofisticação—perfeito para linhas premium de lip gloss com fórmulas de alta qualidade.' },
      { name: 'BeautyPout', description: 'Referência ao biquinho sedutor—ideal para marcas com estética sensual e fashion.' },
      { name: 'BrilhoNatural', description: 'Evoca beleza autêntica—perfeito para marcas de glosses naturais e clean beauty.' },
      { name: 'KissGlow', description: 'Combina ação com resultado—ideal para marcas que prometem lábios irresistíveis e brilhantes.' },
      { name: 'RosePout', description: 'Elegante e feminino—perfeito para marcas com paleta focada em tons rosados e nudes.' },
      { name: 'LuminousLips', description: 'Promete luminosidade—ideal para glosses com partículas iluminadoras e acabamento espelhado.' },
      { name: 'GlamourGloss', description: 'Direto ao ponto de glamour—perfeito para marcas com estética luxuosa e dramática.' },
      { name: 'SoftSmile', description: 'Suave e acolhedor—ideal para marcas de lip care que combinam tratamento com cor.' },
      { name: 'CrushColor', description: 'Jovem e apaixonado—perfeito para marcas coloridas voltadas ao público jovem e expressivo.' },
      { name: 'LipDream', description: 'Evoca fantasia e desejo—ideal para marcas que prometem lábios dos sonhos.' },
      { name: 'GlossAtitude', description: 'Combina produto com personalidade—perfeito para marcas que celebram autoexpressão.' },
      { name: 'BocaPerfeita', description: 'Promete resultado em português—ideal para marcas brasileiras diretas e confiantes.' },
      { name: 'SilkKiss', description: 'Textura sedosa com romance—perfeito para glosses com fórmula hidratante e confortável.' },
      { name: 'RadiantLips', description: 'Comunica luminosidade—ideal para marcas de glosses que realçam a beleza natural.' },
    ],
  },

  'music': {
    slug: 'music',
    name: 'Gerador de Nomes para Negócios de Música',
    title: 'Gerador gratuito de ideias de nomes comerciais de Música por IA',
    description: 'Gere nomes criativos e memoráveis para estúdios de música, escolas, bandas e negócios musicais.',
    metaDescription: 'Encontre o nome perfeito para seu negócio de música com nosso gerador gratuito por IA. Crie nomes criativos e memoráveis para estúdios,...',
    inputLabel: 'Descreva seu negócio de música...',
    inputPlaceholder: 'ex. Um estúdio de gravação especializado em produção de artistas independentes de música brasileira',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Criativo & Artístico', 'Profissional & Sofisticado', 'Moderno & Urbano', 'Clássico & Tradicional'],
        default: 'Criativo & Artístico',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the music industry. Your role is to generate creative, memorable business names that evoke artistry, sound, and the passion of music for studios, schools, labels, and music-related businesses.

MUSIC BUSINESS INDUSTRY CONTEXT:
The music industry encompasses:
- Recording studios and production houses
- Music schools and academies
- Independent record labels
- Music equipment and instrument stores
- Music streaming and distribution services
- Event production and concert promotion
- Artist management companies
- Music therapy practices
- DJ and entertainment services
- Podcast and audio production studios

NAME CHARACTERISTICS FOR MUSIC BUSINESSES:
1. **Creative and Artistic**
   - Names should reflect creativity and artistry
   - Evoke the emotional power of music
   - Appeal to musicians and music lovers

2. **Memorable and Distinctive**
   - Stand out in a creative industry
   - Easy to remember and recommend
   - Work well for networking and word-of-mouth

3. **Industry-Appropriate**
   - Sound professional for business contexts
   - Also appeal to artists and creatives
   - Fit the specific music niche

4. **Versatile and Evocative**
   - Create sonic or emotional associations
   - Work across different music genres
   - Allow for business growth

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a music business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Estúdio de Gravação',
        description: 'Produtores musicais e engenheiros de som abrindo estúdios de gravação usam o Gerador de Nomes para Negócios de Música para criar identidades que atraem artistas e comunicam qualidade sonora. Ao descrever sua especialidade—rock, MPB, hip-hop ou produções diversas—a ferramenta gera nomes que ressoam com a comunidade musical.',
      },
      {
        title: 'Criação de Escola de Música',
        description: 'Músicos e educadores lançando escolas de música usam o gerador para desenvolver nomes que comunicam tanto expertise musical quanto ambiente acolhedor de aprendizado. O nome precisa atrair desde crianças iniciantes até adultos buscando desenvolvimento musical.',
      },
      {
        title: 'Lançamento de Selo Musical Independente',
        description: 'Empreendedores da música criando selos independentes usam o gerador para encontrar nomes que expressam sua visão artística e atraem talentos alinhados. O nome do selo é parte fundamental do storytelling da marca e da identidade dos artistas que representa.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para negócio de música?',
        answer: 'Um bom nome para negócio de música é criativo, memorável e evoca a arte sonora. Deve comunicar paixão pela música, profissionalismo, e criar conexão com músicos e amantes da música. O nome ideal funciona tanto em contextos artísticos quanto comerciais, e é fácil de recomendar boca a boca na comunidade musical.',
      },
      {
        question: 'Meu nome deve indicar o tipo de negócio musical?',
        answer: 'Depende do contexto. "Estúdio Som Perfeito" é claro sobre a atividade. Nomes mais abstratos como "Harmonia" podem ser mais artísticos mas requerem contexto. Para escolas, indicadores como "Academia" ou "Escola" ajudam. Para selos, nomes abstratos e artísticos são mais comuns.',
      },
      {
        question: 'Posso usar termos musicais no nome?',
        answer: 'Sim! Termos como "Studio", "Records", "Harmonia", "Melodia", "Som", "Acústica", "Ritmo" comunicam claramente o universo musical. No entanto, muitos negócios usam esses termos, então combine com elementos únicos para se diferenciar. Trocadilhos musicais podem ser memoráveis se bem executados.',
      },
      {
        question: 'O nome deve refletir um gênero musical específico?',
        answer: 'Se você se especializa em um gênero (rock, eletrônica, clássica, sertaneja), o nome pode refletir essa identidade para atrair o público certo. No entanto, nomes muito específicos podem limitar expansão. Muitos negócios preferem nomes versáteis que funcionam para diversos gêneros.',
      },
      {
        question: 'Qual a importância do nome para atrair artistas?',
        answer: 'Muito importante! Músicos escolhem estúdios, selos e escolas parcialmente pela vibração da marca. Um nome que soa artístico e profissional atrai talentos sérios. O nome é parte do storytelling—artistas querem se associar a marcas que complementam sua própria identidade.',
      },
      {
        question: 'Nomes em inglês funcionam para negócios de música no Brasil?',
        answer: 'Sim, são muito comuns na indústria musical brasileira. Termos como "Studio", "Records", "Sound", "Music" são universais. No entanto, nomes em português podem criar conexão mais forte com a cena musical brasileira e valorizar a identidade nacional.',
      },
      {
        question: 'Como criar um nome memorável para estúdio de gravação?',
        answer: 'Estúdios de sucesso frequentemente têm nomes que evocam qualidade sonora (Clear Sound), localização icônica (Abbey Road), ou conceitos artísticos. Considere referências a acústica, frequência, ondas sonoras, ou metáforas criativas. O nome deve soar bem quando mencionado em créditos de álbuns.',
      },
      {
        question: 'Como verificar se o nome está disponível na indústria musical?',
        answer: 'Pesquise no Spotify, YouTube e plataformas de streaming, verifique em diretórios de estúdios e selos, busque no Instagram e redes sociais onde músicos são ativos, confirme disponibilidade de domínio, e pesquise marcas registradas. A indústria musical é global, então verifique internacionalmente também.',
      },
      {
        question: 'O nome do selo deve ser diferente do nome do estúdio?',
        answer: 'Se você tem estúdio e selo, pode usar o mesmo nome com variações (Studio X / X Records) ou nomes completamente diferentes para posicionamentos distintos. Selos frequentemente têm nomes mais artísticos e conceituais, enquanto estúdios podem ser mais descritivos.',
      },
      {
        question: 'Como escolher um nome para escola de música?',
        answer: 'Escolas de música precisam equilibrar profissionalismo com acolhimento. Nomes que evocam aprendizado, harmonia e desenvolvimento funcionam bem. Considere se quer soar mais formal (Conservatório, Academia) ou acessível (Espaço, Casa). O nome deve atrair tanto crianças/pais quanto adultos.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu negócio de música é uma decisão que comunica sua paixão pela arte sonora e define como artistas e clientes perceberão seu trabalho. O nome aparecerá em créditos de álbuns, em recomendações boca a boca entre músicos, em playlists e plataformas de streaming, em fachadas de estúdios ou escolas, e nas conversas da comunidade musical. É a primeira coisa que comunica se você é um parceiro criativo sério, um ambiente acolhedor para aprender, ou uma força na indústria. Um nome bem escolhido atrai os artistas e alunos certos, estabelece credibilidade na cena musical, e cria uma marca que ressoa com quem vive de e para a música.',
      steps: [
        {
          title: 'Defina o tipo e posicionamento do seu negócio musical',
          description: 'Antes de escolher um nome, tenha clareza sobre seu negócio. Determine qual é sua atividade principal (estúdio de gravação, escola de música, selo, loja de instrumentos), quem são seus clientes ou artistas ideais (iniciantes, profissionais, gênero específico), qual é seu diferencial competitivo (equipamento, expertise, ambiente, preço), qual é a atmosfera que você cria (profissional corporativo, artístico underground, acolhedor familiar), e suas ambições de crescimento.',
        },
        {
          title: 'Explore o universo sonoro e musical em palavras',
          description: 'Faça brainstorm de palavras relacionadas à música e som. Inclua termos técnicos (frequência, harmonia, acorde, tempo, melodia), conceitos sonoros (eco, ressonância, vibração, onda), emoções musicais (ritmo, alma, paixão, groove), instrumentos e elementos (cordas, teclas, voz), e metáforas criativas que conectam com música. Combine elementos de formas inesperadas.',
        },
        {
          title: 'Considere o tom e cultura do seu nicho musical',
          description: 'Diferentes segmentos da música têm culturas distintas. Rock e indie valorizam nomes irreverentes e underground. Clássica e jazz apreciam sofisticação e tradição. Eletrônica e hip-hop respondem a nomes modernos e urbanos. Música infantil precisa de nomes acolhedores. Escolha um tom que ressoe com a comunidade que você quer atrair.',
        },
        {
          title: 'Avalie como o nome soará e aparecerá',
          description: 'Música é sobre som, então seu nome deve soar bem falado. Teste em voz alta: tem ritmo? É agradável de dizer? Além disso, avalie como aparecerá em créditos de álbuns, em uma fachada de estúdio ou escola, em posts de redes sociais de artistas satisfeitos, e em recomendações verbais. O nome deve funcionar tanto sonora quanto visualmente.',
        },
        {
          title: 'Verifique disponibilidade em plataformas musicais',
          description: 'A música é uma indústria global e digital. Pesquise em plataformas de streaming (Spotify, Apple Music, YouTube), em redes sociais onde músicos são ativos (Instagram, TikTok), em diretórios específicos do setor, confirme disponibilidade de domínio, e verifique registros de marcas. Um nome conflitante pode causar confusão com outros artistas ou negócios.',
        },
        {
          title: 'Teste com a comunidade musical relevante',
          description: 'Compartilhe opções com músicos, produtores ou educadores musicais que representam seu público. Pergunte qual nome soa mais profissional e artístico, qual estúdio eles escolheriam trabalhar, qual escola matriculariam seus filhos, e qual nome é mais memorável para recomendação. Feedback de quem vive música é invaluável.',
        },
        {
          title: 'Visualize o nome no ecossistema musical completo',
          description: 'Antes de finalizar, imagine o nome em contextos reais: nos créditos de um álbum de sucesso ("gravado no [nome]"), em uma indicação entre músicos ("você precisa conhecer o [nome]"), em um post de aluno celebrando sua evolução, em uma reportagem sobre a cena musical local, e nas playlists de artistas que você lançou. Se o nome soa bem em todos esses contextos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'SomPerfeito', description: 'Promete qualidade sonora impecável—perfeito para estúdios de gravação focados em excelência técnica.' },
      { name: 'HarmoniaEstúdio', description: 'Evoca equilíbrio e musicalidade—ideal para estúdios que valorizam colaboração artística.' },
      { name: 'FrequênciaCreativa', description: 'Combina técnica com criatividade—perfeito para estúdios de produção moderna e inovadora.' },
      { name: 'AcademiaDasNotas', description: 'Transmite aprendizado musical—ideal para escolas de música com metodologia estruturada.' },
      { name: 'RitmoVivo', description: 'Evoca energia e vitalidade musical—perfeito para escolas ou estúdios com foco em música popular.' },
      { name: 'EchoRecords', description: 'Nome de selo artístico e sonoro—ideal para gravadoras independentes com identidade marcante.' },
      { name: 'CasaDaMúsica', description: 'Acolhedor e inclusivo—perfeito para escolas de música que criam ambiente familiar.' },
      { name: 'OndasSonoras', description: 'Referência técnica elegante—ideal para estúdios com foco em qualidade de áudio.' },
      { name: 'MelodiaMaestro', description: 'Combina música com expertise—perfeito para escolas ou estúdios com professores renomados.' },
      { name: 'GrooveLab', description: 'Moderno e energético—ideal para estúdios de produção de música urbana e eletrônica.' },
      { name: 'AcordePerfeito', description: 'Promete harmonia musical—perfeito para escolas que ensinam teoria e prática com excelência.' },
      { name: 'StudioSoul', description: 'Evoca a alma da música—ideal para estúdios que valorizam emoção e autenticidade artística.' },
      { name: 'NotasDeOuro', description: 'Sugere excelência e valor—perfeito para escolas de música com histórico de formar talentos.' },
      { name: 'VibraçãoMusical', description: 'Transmite energia positiva—ideal para negócios que celebram a alegria da música.' },
      { name: 'SombraEcords', description: 'Artístico e misterioso—perfeito para selos de música alternativa e underground.' },
      { name: 'CompassoEstúdio', description: 'Referência ao tempo musical—ideal para estúdios com foco em gravações precisas.' },
      { name: 'AltaFidelidade', description: 'Promete qualidade de áudio—perfeito para estúdios de masterização e mixagem premium.' },
      { name: 'ClaveMusical', description: 'Termo musical fundamental—ideal para escolas que ensinam fundamentos com profundidade.' },
      { name: 'SoundFactory', description: 'Moderno e produtivo—perfeito para estúdios de produção em volume e qualidade.' },
      { name: 'TempoRubato', description: 'Sofisticado e artístico—ideal para negócios focados em música clássica ou jazz.' },
    ],
  },

  'perfume': {
    slug: 'perfume',
    name: 'Gerador de Nomes para Marcas de Perfume',
    title: 'Gerador gratuito de ideias de nomes comerciais de Perfumaria por IA',
    description: 'Gere nomes sofisticados e evocativos para marcas de perfumes, fragrâncias e produtos aromáticos.',
    metaDescription: 'Crie o nome perfeito para sua marca de perfumes com nosso gerador gratuito por IA. Desenvolva nomes sofisticados e evocativos para...',
    inputLabel: 'Descreva sua marca de perfumes...',
    inputPlaceholder: 'ex. Uma marca de perfumes artesanais com ingredientes naturais e fragrâncias inspiradas na flora brasileira',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Luxuoso & Sofisticado', 'Natural & Orgânico', 'Moderno & Minimalista', 'Sensual & Misterioso'],
        default: 'Luxuoso & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the fragrance and perfumery industry. Your role is to generate sophisticated, evocative business names that capture the essence of scent, luxury, and the emotional power of fragrance.

PERFUME INDUSTRY CONTEXT:
The perfume and fragrance industry encompasses:
- Luxury and designer fragrance houses
- Niche and artisan perfumeries
- Natural and organic fragrance brands
- Celebrity and influencer fragrance lines
- Home fragrance and aromatherapy brands
- Men's grooming and fragrance companies
- Affordable and mass-market perfumeries
- Brazilian and tropical fragrance specialists
- Custom and bespoke perfume creators
- Fragrance subscription and discovery services

NAME CHARACTERISTICS FOR PERFUME BRANDS:
1. **Sophisticated and Evocative**
   - Names should evoke elegance and refinement
   - Create sensory and emotional associations
   - Suggest the artistry of perfumery

2. **Mysterious and Alluring**
   - Fragrance is about seduction and emotion
   - Names should intrigue and attract
   - Create desire and curiosity

3. **Memorable and Distinctive**
   - Stand out in a crowded luxury market
   - Work well on elegant packaging
   - Create brand recognition

4. **Versatile for Product Lines**
   - Allow for multiple fragrance releases
   - Support storytelling and campaigns
   - Work across price points

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a perfume brand

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Perfumaria Artesanal',
        description: 'Perfumistas e criadores de fragrâncias lançando suas próprias marcas usam o Gerador de Nomes para Marcas de Perfume para desenvolver identidades que comunicam exclusividade e arte olfativa. Ao descrever sua filosofia—ingredientes naturais, inspiração brasileira ou técnicas tradicionais—a ferramenta gera nomes que atraem apreciadores de fragrâncias.',
      },
      {
        title: 'Criação de Marca de Home Fragrance',
        description: 'Empreendedores desenvolvendo linhas de velas perfumadas, difusores e aromatizadores usam o gerador para encontrar nomes que evocam atmosfera e bem-estar. O nome precisa comunicar que os produtos transformam ambientes em experiências sensoriais especiais.',
      },
      {
        title: 'Expansão de Linha de Beleza para Fragrâncias',
        description: 'Marcas de cosméticos expandindo para perfumaria usam o gerador para criar uma sub-marca ou extensão que capture o universo olfativo. O nome pode conectar com a marca mãe ou criar identidade própria para o segmento de fragrâncias.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para marca de perfumes?',
        answer: 'Um bom nome para marca de perfumes é sofisticado, evocativo e misterioso. Deve criar associações sensoriais e emocionais, sugerindo a experiência olfativa sem revelar tudo. O nome ideal funciona em frascos elegantes, evoca luxo e desejo, e permanece memorável muito depois do primeiro contato com a fragrância.',
      },
      {
        question: 'Meu nome deve indicar que vendo perfumes?',
        answer: 'Não necessariamente. Grandes casas de perfumaria frequentemente usam nomes de fundadores (Chanel, Dior) ou conceitos abstratos (Jo Malone, Le Labo) sem mencionar "perfume". Isso permite expansão para outros produtos. No entanto, para marcas menores, indicadores podem ajudar no reconhecimento inicial.',
      },
      {
        question: 'Nomes em francês funcionam para perfumes?',
        answer: 'Sim! O francês é tradicionalmente associado à alta perfumaria. Palavras como "Parfum", "Essence", "Fleur", "Nuit" adicionam sofisticação e tradição. No entanto, o mercado está mais diversificado, e nomes em português ou outras línguas podem criar diferenciação e identidade única.',
      },
      {
        question: 'Como criar um nome que evoque fragrância sem ser literal?',
        answer: 'Use metáforas sensoriais e emocionais em vez de ingredientes literais. Evoque sensações (Velvet, Silk), momentos (Twilight, Dawn), lugares (Costa, Garden), emoções (Desire, Dream), ou conceitos abstratos (Aura, Essence). Esses elementos criam associações olfativas sem serem óbvios.',
      },
      {
        question: 'O nome deve refletir os ingredientes ou notas da fragrância?',
        answer: 'Para a marca guarda-chuva, geralmente não—você quer flexibilidade para criar diferentes fragrâncias. Notas específicas (Rose, Oud, Vanilla) funcionam melhor para nomear perfumes individuais dentro da linha. O nome da marca deve ser versátil o suficiente para acomodar diferentes criações olfativas.',
      },
      {
        question: 'Qual a importância da embalagem para o nome?',
        answer: 'Crucial! Perfumes são vendidos visualmente antes de serem cheirados. Seu nome deve ficar elegante em frascos, funcionar em diferentes tamanhos de embalagem, criar tipografia interessante, e complementar a identidade visual. Nomes muito longos podem ser problemáticos em frascos pequenos.',
      },
      {
        question: 'Como criar um nome para perfumaria natural ou orgânica?',
        answer: 'Evoque pureza e natureza com palavras como "Botanical", "Pure", "Terra", "Flora", "Verde", "Essência". Referências a plantas, elementos naturais e processos artesanais comunicam o posicionamento. Evite termos químicos ou industriais. O tom deve ser fresco e autêntico.',
      },
      {
        question: 'Como verificar se o nome está disponível na indústria de fragrâncias?',
        answer: 'Pesquise em varejistas especializados (Sephora, fragrantica.com, basenotes.com), verifique marcas registradas no INPI na categoria de perfumes e cosméticos, busque no Instagram e redes sociais, confirme disponibilidade de domínio. A indústria de fragrâncias tem marcas globais, então pesquise internacionalmente.',
      },
      {
        question: 'O nome deve ser diferente para homens e mulheres?',
        answer: 'Marcas unissex são tendência atual. Muitas casas modernas criam fragrâncias sem gênero sob uma marca única. Se você quer linhas separadas, pode usar sub-marcas ou nomes de fragrâncias específicos. O nome principal da marca pode ser neutro e sofisticado.',
      },
      {
        question: 'Como escolher um nome que funcione internacionalmente?',
        answer: 'Evite palavras com significados negativos em outros idiomas, escolha sons que funcionem em múltiplas línguas, considere como será pronunciado em mercados-alvo, e verifique disponibilidade de marca em países onde pretende vender. Nomes em francês ou inglês têm apelo universal na perfumaria.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua marca de perfumes é uma decisão que captura em palavras a essência invisível da fragrância. O nome aparecerá em frascos elegantes nas penteadeiras de clientes, em campanhas que vendem sonho e desejo, em reviews apaixonadas de entusiastas de perfumaria, em vitrines de lojas especializadas, e nos momentos íntimos quando alguém escolhe como quer cheirar e se sentir. É a primeira impressão que comunica se suas fragrâncias são luxuosas, naturais, ousadas ou clássicas. Um nome bem escolhido evoca mundos olfativos inteiros, cria desejo antes mesmo do primeiro borrifo, e estabelece uma marca que se torna sinônimo de uma experiência sensorial única.',
      steps: [
        {
          title: 'Defina a filosofia e posicionamento da sua perfumaria',
          description: 'Antes de escolher um nome, tenha clareza sobre a essência da sua marca. Determine seu posicionamento (luxo, nicho, natural, acessível), seu público-alvo (colecionadores, público geral, jovens, conhecedores), sua filosofia olfativa (ingredientes naturais, criações autorais, tradição francesa), seus valores de marca (sustentabilidade, exclusividade, acessibilidade), e o tipo de fragrâncias que criará (femininas, masculinas, unissex, home fragrance).',
        },
        {
          title: 'Explore o vocabulário sensorial e emocional',
          description: 'Faça brainstorm de palavras que evocam o mundo das fragrâncias. Inclua sensações (veludo, seda, névoa, brisa), momentos (amanhecer, crepúsculo, noite), lugares (jardim, costa, floresta), emoções (desejo, mistério, sedução, paz), elementos (flor, madeira, âmbar, musk), e conceitos abstratos (essência, aura, alma, rastro). Combine de formas poéticas.',
        },
        {
          title: 'Considere o tom e universo da marca',
          description: 'Perfumaria é sobre storytelling. Decida qual universo você quer criar: clássico e atemporal (nomes franceses, elegantes), moderno e minimalista (nomes curtos, limpos), natural e orgânico (referências botânicas), misterioso e sensual (nomes evocativos, enigmáticos), ou brasileiro e tropical (flora local, identidade nacional). O tom do nome cria expectativas sobre toda a experiência.',
        },
        {
          title: 'Avalie elegância visual e aplicação em embalagens',
          description: 'Perfumes são objetos de desejo visual. Avalie como cada nome ficará em um frasco elegante, se permite tipografia sofisticada, como aparecerá em diferentes tamanhos de embalagem, se cria potencial para logotipo distintivo, e se complementa a estética visual que você imagina. O nome deve ser tão belo escrito quanto falado.',
        },
        {
          title: 'Verifique disponibilidade global e proteção',
          description: 'Fragrâncias são produtos globais. Pesquise extensivamente em bases de dados de perfumaria (fragrantica, basenotes), verifique marcas registradas no Brasil e mercados-chave internacionais, confirme disponibilidade de domínio e redes sociais, busque por significados problemáticos em outras línguas, e considere registrar sua marca antes do lançamento.',
        },
        {
          title: 'Teste com apreciadores de fragrâncias',
          description: 'Compartilhe opções com pessoas que amam perfumes—colecionadores, profissionais da beleza, consumidores que investem em fragrâncias. Pergunte qual nome evoca mais sofisticação e desejo, qual marca eles gostariam de ter na coleção, qual nome soa mais memorável, e se o nome cria curiosidade sobre as fragrâncias. Feedback de entusiastas é precioso.',
        },
        {
          title: 'Visualize o nome na experiência completa do perfume',
          description: 'Antes de finalizar, imagine o nome em toda jornada do cliente: no frasco na vitrine que atrai o olhar, na experiência de descoberta na loja, na embalagem sendo aberta como presente, na penteadeira junto a outras fragrâncias amadas, em uma review apaixonada, e nas perguntas "que perfume você está usando?". Se o nome evoca desejo e sofisticação em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'EssênciaRara', description: 'Comunica exclusividade e preciosidade—perfeito para marcas de perfumes artesanais e edições limitadas.' },
      { name: 'VéuDourado', description: 'Evoca mistério e luxo—ideal para fragrâncias sofisticadas com apelo sensual.' },
      { name: 'FloraSecreta', description: 'Sugere ingredientes botânicos exclusivos—perfeito para perfumaria natural e orgânica.' },
      { name: 'AuraPerfume', description: 'Referência à energia pessoal—ideal para fragrâncias que prometem transformar presença.' },
      { name: 'NuitÉternelle', description: 'Francês sofisticado (noite eterna)—perfeito para fragrâncias sensuais e noturnas.' },
      { name: 'MistérioOlfativo', description: 'Celebra a arte da perfumaria—ideal para casas de fragrância com abordagem artística.' },
      { name: 'BrisaPerfumada', description: 'Evoca frescor e leveza—perfeito para fragrâncias leves e ideais para o Brasil.' },
      { name: 'ScenteSoul', description: 'Combina aroma com alma—ideal para fragrâncias que expressam identidade pessoal.' },
      { name: 'AmbarVeludo', description: 'Referência a nota clássica e textura—perfeito para fragrâncias quentes e envolventes.' },
      { name: 'JardimSecretto', description: 'Evoca descoberta e natureza—ideal para coleções inspiradas em ingredientes florais.' },
      { name: 'PerfumePoesia', description: 'Eleva fragrância a arte—perfeito para marcas com storytelling elaborado.' },
      { name: 'SilhuetaAromática', description: 'Sugere presença e rastro—ideal para fragrâncias com sillage marcante.' },
      { name: 'EssenceeBotânica', description: 'Combina essência com natureza—perfeito para perfumaria natural e sustentável.' },
      { name: 'NévoaPreciosa', description: 'Evoca delicadeza e valor—ideal para fragrâncias sutis e sofisticadas.' },
      { name: 'AromasDoTempo', description: 'Sugere atemporalidade—perfeito para coleções clássicas e duradouras.' },
      { name: 'VelvetScent', description: 'Textura e aroma combinados—ideal para fragrâncias com acabamento luxuoso.' },
      { name: 'PétalaSecreta', description: 'Referência floral e misteriosa—perfeito para fragrâncias femininas e românticas.' },
      { name: 'MadeiraNobre', description: 'Evoca masculinidade e sofisticação—ideal para fragrâncias amadeiradas e unissex.' },
      { name: 'AromaArtesanal', description: 'Comunica produção cuidadosa—perfeito para perfumaria de pequenos lotes e alta qualidade.' },
      { name: 'LEnvoltura', description: 'Francês elegante (o envolver)—ideal para fragrâncias que abraçam e seduzem.' },
    ],
  },

  'photography': {
    slug: 'photography',
    name: 'Gerador de Nomes para Estúdios de Fotografia',
    title: 'Gerador gratuito de ideias de nomes comerciais de Fotografia por IA',
    description: 'Gere nomes criativos e profissionais para estúdios de fotografia, fotógrafos e negócios de imagem.',
    metaDescription: 'Encontre o nome perfeito para seu estúdio de fotografia com nosso gerador gratuito por IA. Crie nomes criativos e profissionais para...',
    inputLabel: 'Descreva seu estúdio de fotografia...',
    inputPlaceholder: 'ex. Um estúdio de fotografia especializado em casamentos e ensaios de família com estilo fine art',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Artístico & Criativo', 'Profissional & Sofisticado', 'Moderno & Minimalista', 'Emotivo & Acolhedor'],
        default: 'Artístico & Criativo',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the photography industry. Your role is to generate creative, professional business names that capture the art of visual storytelling, light, and the power of captured moments.

PHOTOGRAPHY BUSINESS INDUSTRY CONTEXT:
The photography industry encompasses:
- Wedding and event photographers
- Portrait and family photography studios
- Commercial and product photographers
- Fashion and editorial photography
- Fine art and gallery photographers
- Real estate and architectural photographers
- Newborn and maternity specialists
- Corporate and headshot photographers
- Documentary and photojournalism
- Photography education and workshops

NAME CHARACTERISTICS FOR PHOTOGRAPHY BUSINESSES:
1. **Visual and Artistic**
   - Names should evoke imagery and light
   - Reflect creative vision and artistry
   - Appeal to clients seeking quality visuals

2. **Professional and Trustworthy**
   - Photography captures important moments
   - Names should inspire confidence
   - Suggest expertise and reliability

3. **Memorable and Distinctive**
   - Stand out in a competitive market
   - Easy to recommend to others
   - Work well in portfolios and credits

4. **Versatile for Specialization**
   - Communicate niche if relevant
   - Or remain broad for multiple services
   - Allow for business evolution

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a photography business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Estúdio de Casamentos',
        description: 'Fotógrafos especializando em casamentos e eventos usam o Gerador de Nomes para Estúdios de Fotografia para criar identidades que comunicam romantismo, profissionalismo e capacidade de capturar os momentos mais especiais. Ao descrever seu estilo—fine art, documental ou clássico—a ferramenta gera nomes que atraem noivas e casais.',
      },
      {
        title: 'Criação de Marca de Fotografia Comercial',
        description: 'Fotógrafos focando em clientes corporativos—produtos, arquitetura, retratos executivos—usam o gerador para desenvolver nomes que transmitem profissionalismo e qualidade técnica. O nome precisa funcionar em contextos B2B e inspirar confiança em decisores de marketing.',
      },
      {
        title: 'Transição de Hobby para Profissão',
        description: 'Fotógrafos amadores profissionalizando seu trabalho usam o gerador para criar uma identidade de marca que os posicione como profissionais sérios. Um nome bem escolhido ajuda na transição de "fotógrafo de hobby" para "estúdio profissional de fotografia".',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para estúdio de fotografia?',
        answer: 'Um bom nome para estúdio de fotografia combina criatividade artística com profissionalismo. Deve evocar imagens, luz e a magia de momentos capturados. O nome ideal comunica seu estilo fotográfico, transmite confiança para clientes que confiam momentos importantes a você, e é memorável para indicações e boca a boca.',
      },
      {
        question: 'Devo usar meu nome pessoal no estúdio de fotografia?',
        answer: 'Usar seu nome (como "Fotografia Maria Silva") é muito comum e pode construir sua marca pessoal. Funciona bem para fotógrafos que são a face do negócio e querem relação pessoal com clientes. No entanto, pode limitar escala se você pretende crescer a equipe ou eventualmente vender o negócio.',
      },
      {
        question: 'Meu nome deve indicar especialização (casamentos, produtos, etc.)?',
        answer: 'Depende da sua estratégia. Nomes específicos como "Casamentos Fine Art" atraem claramente seu público-alvo. Nomes genéricos como "Luz Estúdio" permitem flexibilidade. Se você está construindo reputação em um nicho, indicadores podem ajudar; se quer versatilidade, mantenha o nome amplo.',
      },
      {
        question: 'Palavras relacionadas a luz funcionam bem em nomes de fotografia?',
        answer: 'Sim! Fotografia é literalmente "escrever com luz". Termos como "Luz", "Light", "Brilho", "Claridade", "Flash", "Luminous" são muito usados e comunicam instantaneamente o ofício. No entanto, são comuns, então combine com elementos únicos para diferenciar.',
      },
      {
        question: 'Como criar um nome que transmita meu estilo fotográfico?',
        answer: 'Se você tem estilo distintivo (fine art, documental, vintage, minimalista), seu nome pode refletir isso. "Atemporal Fotografia" sugere clássico. "Momento Real" sugere documental. "Arte em Luz" sugere fine art. Considere os adjetivos que usaria para descrever seu trabalho.',
      },
      {
        question: 'Qual a importância do nome para conquistar clientes?',
        answer: 'O nome é parte da primeira impressão junto com seu portfólio. Para casamentos, noivas buscam fotógrafos cujo nome e portfólio combinem com a estética do casamento. Para corporativo, um nome profissional inspira confiança. O nome certo atrai os clientes que valorizam seu estilo.',
      },
      {
        question: 'Nomes em inglês funcionam para fotógrafos brasileiros?',
        answer: 'Sim, termos como "Photography", "Studio", "Light", "Frame" são comuns e internacionalmente reconhecidos. No entanto, nomes em português podem criar conexão mais forte com clientes locais e valorizar identidade brasileira, especialmente para nichos como casamentos e família.',
      },
      {
        question: 'Como verificar se o nome está disponível na fotografia?',
        answer: 'Pesquise no Google por fotógrafos com nomes similares na sua região, verifique em plataformas de casamento (Zankyou, iCasei), busque no Instagram onde fotógrafos são muito ativos, confirme disponibilidade de domínio, e considere pesquisar em associações de fotógrafos.',
      },
      {
        question: 'O nome do estúdio aparece nas fotos?',
        answer: 'Normalmente não nas fotos entregues aos clientes, mas marca d\'água, assinatura em redes sociais, e créditos em publicações usam seu nome. Para fotógrafos editoriais, o nome aparece em créditos de revistas. Certifique-se de que o nome fica bem como assinatura discreta.',
      },
      {
        question: 'Como escolher um nome que funcione para portfólio online?',
        answer: 'Para forte presença online, escolha um nome único e buscável, verifique disponibilidade de domínio .com.br e .com, garanta handles no Instagram e Pinterest (essenciais para fotógrafos), e considere como aparecerá em SEO quando noivas ou clientes buscarem fotógrafos.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para seu estúdio de fotografia é uma decisão que comunica sua visão artística e capacidade de capturar momentos preciosos. O nome aparecerá em seu portfólio que conta histórias visuais, em indicações emocionadas de clientes satisfeitos, em créditos de fotos publicadas, em cartões de visita trocados em eventos, e nos álbuns que famílias guardarão por gerações. É a primeira coisa que comunica se você é o fotógrafo certo para eternizar casamentos, documentar famílias, ou criar imagens comerciais impactantes. Um nome bem escolhido atrai os clientes ideais, estabelece seu posicionamento artístico, e cria uma marca que cresce junto com seu olhar fotográfico.',
      steps: [
        {
          title: 'Defina sua especialização e estilo fotográfico',
          description: 'Antes de escolher um nome, tenha clareza sobre sua identidade como fotógrafo. Determine sua especialização principal (casamentos, família, newborn, comercial, moda), seu estilo visual distintivo (fine art, documental, clássico, contemporâneo), quem são seus clientes ideais (noivas, famílias, empresas, agências), seu diferencial competitivo (estilo, experiência, equipamento, atendimento), e suas ambições de crescimento.',
        },
        {
          title: 'Explore o vocabulário visual e emocional',
          description: 'Faça brainstorm de palavras relacionadas à fotografia e sua arte. Inclua termos técnicos (luz, foco, frame, lente, click), conceitos visuais (momento, instante, retrato, cena), emoções que você captura (amor, alegria, emoção, memória), elementos de luz (brilho, claridade, sombra, dourado), e metáforas para o ato de fotografar. Combine criativamente.',
        },
        {
          title: 'Considere o uso do nome pessoal vs marca abstrata',
          description: 'Decida se quer usar seu nome pessoal (criando marca pessoal e conexão direta) ou criar uma marca abstrata (mais escalável e vendável). Muitos fotógrafos de sucesso usam o próprio nome, especialmente em casamentos onde relação pessoal importa. Para fotografia comercial ou se planeja equipe, marcas abstratas podem funcionar melhor.',
        },
        {
          title: 'Avalie como o nome funcionará visualmente',
          description: 'Fotógrafos são profissionais visuais, então seu nome deve ter potencial estético. Considere como ficará em marca d\'água discreta, em um cartão de visita elegante, no header do seu site de portfólio, como assinatura em redes sociais, e ao lado de suas fotos. O nome deve complementar, não competir com seu trabalho visual.',
        },
        {
          title: 'Verifique disponibilidade em plataformas de fotografia',
          description: 'Fotógrafos dependem de presença online. Pesquise no Google por fotógrafos similares na sua região, verifique disponibilidade no Instagram e Pinterest (críticos para fotografia), busque em plataformas de casamento se esse for seu nicho, confirme disponibilidade de domínio, e certifique-se de que o nome não confunde com fotógrafos estabelecidos.',
        },
        {
          title: 'Teste com clientes potenciais do seu nicho',
          description: 'Compartilhe opções com pessoas que representam seus clientes ideais. Para casamentos, teste com noivas e recém-casados. Para família, com pais de crianças pequenas. Pergunte qual nome transmite mais confiança para capturar seus momentos especiais, qual nome parece mais profissional, e qual nome combina com a estética que buscam.',
        },
        {
          title: 'Visualize o nome no ciclo completo do cliente',
          description: 'Antes de finalizar, imagine o nome em toda experiência: na busca quando um cliente procura fotógrafo, na indicação empolgada de um amigo, no primeiro contato por mensagem ou email, no contrato de prestação de serviço, nas fotos compartilhadas em redes sociais, e na lembrança anos depois quando folheiam o álbum. Se o nome funciona lindamente em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'LuzDoMomento', description: 'Combina elemento técnico com instante capturado—perfeito para fotógrafos que valorizam momentos autênticos.' },
      { name: 'ClickEmoção', description: 'Une ação fotográfica com sentimento—ideal para fotógrafos de casamentos e família que capturam feelings.' },
      { name: 'FramePerfeito', description: 'Promete enquadramento impecável—perfeito para fotógrafos conhecidos por composição cuidadosa.' },
      { name: 'MomentoEterno', description: 'Evoca permanência das memórias—ideal para fotografia de eventos importantes e álbuns de família.' },
      { name: 'ArteDaLuz', description: 'Eleva fotografia a status artístico—perfeito para fotógrafos fine art e conceituais.' },
      { name: 'OlharSensível', description: 'Comunica percepção aguçada—ideal para fotografia documental e retratos emotivos.' },
      { name: 'FocusEstúdio', description: 'Referência técnica e estabelecimento—perfeito para estúdios completos com múltiplos serviços.' },
      { name: 'CapturaVida', description: 'Verbo ativo que promete vitalidade—ideal para fotografia de família e lifestyle.' },
      { name: 'LentePoética', description: 'Sugere visão artística e narrativa—perfeito para fotógrafos com estilo autoral distintivo.' },
      { name: 'InstanteDourado', description: 'Referência à golden hour e preciosidade—ideal para fotografia de casamento e ensaios externos.' },
      { name: 'RetratoDAlma', description: 'Promete capturar essência—perfeito para fotógrafos de retratos profundos e pessoais.' },
      { name: 'LuzNatural', description: 'Evoca preferência por luz ambiente—ideal para fotógrafos com estilo clean e orgânico.' },
      { name: 'MemóriaVisual', description: 'Conecta fotografia com lembrança—perfeito para fotógrafos de eventos e momentos especiais.' },
      { name: 'ObjetivaSensível', description: 'Termo técnico com emoção—ideal para fotógrafos que equilibram técnica com sensibilidade.' },
      { name: 'CenaPorCena', description: 'Sugere narrativa visual—perfeito para fotógrafos documentais e de ensaios storytelling.' },
      { name: 'ClaridadeFotografia', description: 'Evoca nitidez e luz—ideal para fotógrafos com estilo luminoso e arejado.' },
      { name: 'OlharAutoral', description: 'Comunica visão única—perfeito para fotógrafos com estilo distintivo reconhecível.' },
      { name: 'RetratosFinos', description: 'Sugere qualidade e delicadeza—ideal para fotografia fine art e impressões de galeria.' },
      { name: 'LuzEHistória', description: 'Combina elemento técnico com narrativa—perfeito para fotografia documental de casamentos.' },
      { name: 'MomentoLuminoso', description: 'Evoca instantes especiais—ideal para fotografia de família e lifestyle aspiracional.' },
    ],
  },

  'print-shop': {
    slug: 'print-shop',
    name: 'Gerador de Nomes para Gráficas e Print Shops',
    title: 'Gerador gratuito de ideias de nomes comerciais de Gráfica por IA',
    description: 'Gere nomes profissionais e criativos para gráficas, print shops e serviços de impressão.',
    metaDescription: 'Crie o nome perfeito para sua gráfica com nosso gerador gratuito por IA. Desenvolva nomes profissionais e criativos para print shops,...',
    inputLabel: 'Descreva sua gráfica ou print shop...',
    inputPlaceholder: 'ex. Uma gráfica rápida especializada em materiais de marketing para pequenas empresas e empreendedores',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Profissional & Confiável', 'Moderno & Digital', 'Criativo & Colorido', 'Rápido & Eficiente'],
        default: 'Profissional & Confiável',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the printing and graphic services industry. Your role is to generate professional, creative business names that convey quality printing, reliability, and the ability to bring visual ideas to life.

PRINT SHOP INDUSTRY CONTEXT:
The printing industry encompasses:
- Commercial printing companies
- Quick print and copy centers
- Large format and signage printers
- Digital printing specialists
- Offset and traditional printers
- Marketing material printers
- Packaging and label printers
- Photo printing and finishing labs
- 3D printing services
- Print-on-demand businesses

NAME CHARACTERISTICS FOR PRINT SHOPS:
1. **Professional and Reliable**
   - Printing is a service business requiring trust
   - Names should convey quality and dependability
   - Suggest technical capability

2. **Visual and Creative**
   - Printing brings ideas to visual life
   - Names can reference color, image, or design
   - Appeal to creative clients

3. **Efficient and Service-Oriented**
   - Many clients need quick turnaround
   - Names can suggest speed and responsiveness
   - Communicate customer service focus

4. **Modern Yet Established**
   - Balance tradition with modern technology
   - Suggest both digital and print capability
   - Convey staying power in the industry

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a print shop

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Gráfica Rápida',
        description: 'Empreendedores abrindo gráficas rápidas para atender pequenas empresas e profissionais usam o Gerador de Nomes para Gráficas para criar identidades que comunicam agilidade e qualidade. Ao descrever seu foco em materiais de marketing e prazos curtos, a ferramenta gera nomes que atraem clientes que precisam de resultados rápidos.',
      },
      {
        title: 'Especialização em Impressão de Grande Formato',
        description: 'Gráficas especializando em banners, adesivos, sinalização e impressão de grande formato usam o gerador para desenvolver nomes que comunicam capacidade técnica e escala. O nome precisa transmitir que podem executar projetos de qualquer tamanho.',
      },
      {
        title: 'Modernização de Gráfica Tradicional',
        description: 'Gráficas tradicionais se modernizando e expandindo para serviços digitais usam o gerador para rebrandar com nome que comunica evolução tecnológica. O novo nome deve equilibrar a confiabilidade estabelecida com capacidades modernas de impressão digital e online.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para gráfica?',
        answer: 'Um bom nome para gráfica transmite profissionalismo, qualidade e capacidade técnica. Deve criar confiança em clientes que precisam de materiais impressos importantes—seja para seus negócios ou eventos especiais. O nome ideal comunica eficiência, criatividade visual e confiabilidade para cumprir prazos e especificações.',
      },
      {
        question: 'Meu nome deve indicar que sou uma gráfica?',
        answer: 'Indicadores como "Gráfica", "Print", "Impressão" ou "Cópias" ajudam em identificação e buscas. No entanto, se você oferece serviços criativos além de impressão (design, marketing visual), um nome mais amplo pode funcionar. Considere como seus clientes buscam por serviços de impressão.',
      },
      {
        question: 'Nomes que mencionam velocidade são eficazes?',
        answer: 'Sim, para gráficas rápidas. Termos como "Express", "Rápida", "Já" ou "24h" comunicam agilidade que muitos clientes valorizam. No entanto, certifique-se de que pode entregar a promessa. Para gráficas premium focadas em qualidade sobre velocidade, outros atributos podem ser mais relevantes.',
      },
      {
        question: 'Devo usar termos técnicos de impressão no nome?',
        answer: 'Termos como "Digital", "Offset", "Laser" podem comunicar expertise técnica para clientes que entendem as diferenças. No entanto, a maioria dos clientes não conhece termos técnicos. Use apenas se sua especialização técnica é um diferencial real e você atende público que valoriza isso.',
      },
      {
        question: 'Como criar um nome que funcione para impressão digital e tradicional?',
        answer: 'Use termos amplos como "Gráfica", "Print", "Impressões", "Visual" que englobam diferentes técnicas. Evite termos muito específicos que limitam percepção. Nomes que focam em resultado (qualidade, cores, imagens) em vez de método funcionam para qualquer tecnologia.',
      },
      {
        question: 'Posso usar meu nome ou sobrenome na gráfica?',
        answer: 'Sim, é tradição no setor ("Gráfica Santos", "Impressos Oliveira"). Pode criar identidade familiar e confiança local. No entanto, pode parecer menos moderno e limitar escala ou venda futura. Considere seu posicionamento—gráficas de bairro vs empresas de maior porte.',
      },
      {
        question: 'Como criar um nome que atraia clientes corporativos?',
        answer: 'Clientes corporativos buscam profissionalismo, confiabilidade e capacidade de escala. Evite nomes muito informais ou divertidos. Use termos que sugiram eficiência, qualidade e serviço ("Soluções Gráficas", "Print Solutions", "Gráfica Corporativa"). O tom deve ser profissional.',
      },
      {
        question: 'Como verificar se o nome está disponível para gráficas?',
        answer: 'Pesquise no Google por gráficas com nomes similares na sua região, verifique em Google Maps e listas de negócios locais, busque no Instagram e redes sociais, confirme disponibilidade de domínio, e considere pesquisar marcas registradas se planeja expandir.',
      },
      {
        question: 'O nome deve incluir localização (bairro, cidade)?',
        answer: 'Incluir localização pode ajudar em buscas locais ("Gráfica Centro SP") mas limita expansão geográfica. Para gráficas de bairro que dependem de clientes locais, pode ser estratégico. Para ambições maiores ou atendimento online, evite limitação geográfica no nome.',
      },
      {
        question: 'Nomes em inglês funcionam para gráficas no Brasil?',
        answer: 'Termos como "Print", "Express", "Shop" são comuns e bem aceitos. No entanto, o público de gráficas é amplo e inclui pessoas de todas as idades e backgrounds. Certifique-se de que o nome é acessível para todos os potenciais clientes, não apenas jovens ou tech-savvy.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua gráfica é uma decisão que comunica sua capacidade de trazer ideias visuais à realidade. O nome aparecerá em fachadas de loja que clientes visitam com seus projetos, em orçamentos que competem por negócios importantes, em embalagens de materiais entregues, em indicações de clientes satisfeitos, e nas buscas quando empresas precisam de materiais de marketing urgentes. É a primeira coisa que comunica se você é confiável, eficiente e capaz de entregar qualidade. Um nome bem escolhido atrai os clientes certos, diferencia você de concorrentes, e estabelece uma marca que empresas e pessoas confiarão para materializar suas comunicações visuais.',
      steps: [
        {
          title: 'Defina seu posicionamento e especialização',
          description: 'Antes de escolher um nome, tenha clareza sobre seu negócio. Determine seu foco principal (gráfica rápida, grande formato, materiais de marketing, convites, corporativo), quem são seus clientes ideais (pequenas empresas, corporações, pessoas físicas, designers), qual é seu diferencial competitivo (velocidade, qualidade, preço, atendimento, tecnologia), e sua abrangência geográfica (bairro, cidade, regional, online).',
        },
        {
          title: 'Explore vocabulário de impressão e visual',
          description: 'Faça brainstorm de palavras relacionadas à impressão e comunicação visual. Inclua termos técnicos acessíveis (print, cópia, impressão, digital), conceitos visuais (cor, imagem, visual, gráfico), ações do serviço (criar, produzir, materializar, realizar), qualidades valorizadas (rápido, qualidade, preciso, fiel), e metáforas criativas. Combine elementos de formas profissionais.',
        },
        {
          title: 'Considere o tom apropriado para seu público',
          description: 'Diferentes clientes respondem a diferentes tons. Pequenas empresas e empreendedores podem preferir nomes amigáveis e acessíveis. Corporações valorizam nomes profissionais e sérios. Criativos e designers respondem a nomes que sugerem qualidade artística. Escolha um tom que ressoe com seu cliente principal.',
        },
        {
          title: 'Avalie praticidade do nome para operação',
          description: 'Gráficas são negócios operacionais. Considere como o nome ficará em uma fachada visível da rua, se é fácil de dizer ao telefone quando clientes ligam, como aparecerá em orçamentos e notas fiscais, se funciona em carros de entrega ou uniformes, e se é fácil de encontrar em buscas online quando alguém precisa de impressão.',
        },
        {
          title: 'Verifique disponibilidade local e digital',
          description: 'Gráficas competem localmente, então pesquise sua região cuidadosamente. Verifique se há gráficas com nomes similares na sua área de atuação, busque no Google Maps e páginas amarelas, confirme disponibilidade de domínio e redes sociais, e certifique-se de que o nome não será confundido com concorrentes estabelecidos.',
        },
        {
          title: 'Teste com diferentes perfis de clientes',
          description: 'Compartilhe opções com pessoas que representam seus clientes potenciais: donos de pequenas empresas, profissionais de marketing, pessoas planejando eventos, designers. Pergunte qual nome transmite mais confiança para um trabalho importante, qual gráfica escolheriam para um prazo apertado, e qual nome é mais fácil de lembrar para indicar.',
        },
        {
          title: 'Visualize o nome na operação diária',
          description: 'Antes de finalizar, imagine o nome em uso real: na fachada da loja quando um cliente chega com urgência, no atendimento telefônico repetido várias vezes ao dia, em um orçamento competindo com outras gráficas, na embalagem de materiais que o cliente vai distribuir, e na indicação quando alguém pergunta "onde você imprimiu isso?". Se o nome funciona profissionalmente em todos esses contextos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'PrintExpress', description: 'Combina impressão com rapidez—perfeito para gráficas rápidas focadas em agilidade e prazos curtos.' },
      { name: 'GráficaVirtual', description: 'Sugere modernidade e atendimento digital—ideal para gráficas com forte presença online e pedidos remotos.' },
      { name: 'CoresPerfeitas', description: 'Foco na qualidade cromática—perfeito para gráficas conhecidas por fidelidade de cores e acabamento.' },
      { name: 'ImprimaMais', description: 'Convite à ação e quantidade—ideal para gráficas com preços competitivos e alto volume.' },
      { name: 'SoluçõesGráficas', description: 'Posicionamento corporativo—perfeito para gráficas que atendem empresas com projetos complexos.' },
      { name: 'PrintQualidade', description: 'Promessa direta de excelência—ideal para gráficas premium focadas em materiais de alto padrão.' },
      { name: 'GráficaDigital', description: 'Comunica tecnologia moderna—perfeito para gráficas especializadas em impressão digital.' },
      { name: 'ImagemTotal', description: 'Sugere serviço completo de visual—ideal para gráficas que oferecem design além de impressão.' },
      { name: 'PrintCenter', description: 'Nome moderno e estabelecido—perfeito para print shops em áreas comerciais movimentadas.' },
      { name: 'GráficaÁgil', description: 'Destaca velocidade de entrega—ideal para gráficas express com foco em prazos curtos.' },
      { name: 'VisualizePrint', description: 'Da ideia à realização—perfeito para gráficas que ajudam clientes desde o conceito.' },
      { name: 'FolhaCerta', description: 'Referência ao papel com precisão—ideal para gráficas que nunca erram especificações.' },
      { name: 'PrintPro', description: 'Profissionalismo em nome curto—perfeito para gráficas que atendem mercado corporativo.' },
      { name: 'GráficaCriativa', description: 'Além de impressão, design—ideal para gráficas com serviços de criação integrados.' },
      { name: 'ImpressãoFiel', description: 'Promete reprodução exata—perfeito para gráficas especializadas em materiais de alta precisão.' },
      { name: 'ColorPrint', description: 'Foco em cores vibrantes—ideal para gráficas de materiais de marketing coloridos.' },
      { name: 'GráficaConfiança', description: 'Transmite segurança—perfeito para gráficas que constroem relacionamentos de longo prazo.' },
      { name: 'PrintMaster', description: 'Sugere expertise máxima—ideal para gráficas com equipe experiente e técnica apurada.' },
      { name: 'VisualPrint', description: 'Conecta visual com impressão—perfeito para gráficas de materiais de comunicação visual.' },
      { name: 'GráficaJá', description: 'Urgência e disponibilidade—ideal para gráficas 24h ou com entrega expressa.' },
    ],
  },

'real-estate': {
    slug: 'real-estate',
    name: 'Gerador de Nomes para Imobiliárias',
    title: 'Gerador gratuito de ideias de nomes comerciais de Imobiliária por IA',
    description: 'Gere nomes profissionais e confiáveis para imobiliárias, corretoras de imóveis e empresas do setor imobiliário.',
    metaDescription: 'Crie o nome perfeito para sua imobiliária com nosso gerador gratuito por IA. Desenvolva nomes profissionais e confiáveis para corretoras,...',
    inputLabel: 'Descreva sua imobiliária...',
    inputPlaceholder: 'ex. Uma imobiliária boutique especializada em imóveis de alto padrão em bairros nobres de São Paulo',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Profissional & Confiável', 'Moderno & Inovador', 'Tradicional & Estabelecido', 'Premium & Exclusivo'],
        default: 'Profissional & Confiável',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the real estate industry. Your role is to generate professional, trustworthy business names that convey reliability, expertise, and success in helping clients buy, sell, or rent properties.

REAL ESTATE INDUSTRY CONTEXT:
The real estate industry encompasses:
- Residential real estate agencies
- Commercial property brokerages
- Luxury and high-end property specialists
- Property management companies
- Real estate investment firms
- New development sales agencies
- Rental and leasing specialists
- Real estate consulting firms
- Property valuation services
- International real estate agencies

NAME CHARACTERISTICS FOR REAL ESTATE BUSINESSES:
1. **Professional and Trustworthy**
   - Real estate involves major financial decisions
   - Names should inspire confidence and reliability
   - Convey expertise and market knowledge

2. **Established and Credible**
   - Suggest experience and track record
   - Sound like a stable, long-term business
   - Create sense of security for clients

3. **Aspirational and Positive**
   - Connect with dreams of home ownership
   - Evoke positive life transitions
   - Suggest success and achievement

4. **Local Yet Professional**
   - Balance local market expertise
   - With professional, scalable identity
   - Work for regional expansion

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a real estate business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Imobiliária Boutique',
        description: 'Corretores experientes abrindo suas próprias imobiliárias boutique usam o Gerador de Nomes para Imobiliárias para criar identidades que comunicam atendimento personalizado e expertise de mercado. Ao descrever seu foco em segmentos específicos—alto padrão, primeiro imóvel ou investidores—a ferramenta gera nomes que atraem o perfil de cliente desejado.',
      },
      {
        title: 'Expansão de Corretora para Imobiliária',
        description: 'Corretores autônomos expandindo para abrir imobiliárias com equipe usam o gerador para desenvolver uma identidade de marca que transcende a pessoa do fundador. O nome precisa comunicar estrutura profissional e capacidade de atender volume maior de clientes e transações.',
      },
      {
        title: 'Reposicionamento no Mercado Imobiliário',
        description: 'Imobiliárias estabelecidas buscando reposicionar sua marca—seja para entrar no segmento de luxo ou se modernizar digitalmente—usam o gerador para explorar nomes que reflitam sua nova direção estratégica e atraiam diferentes perfis de clientes e corretores.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para imobiliária?',
        answer: 'Um bom nome para imobiliária transmite confiança, profissionalismo e expertise no mercado imobiliário. Deve criar segurança para clientes que estão tomando decisões financeiras significativas—seja comprando sua primeira casa ou investindo em propriedades. O nome ideal é memorável para indicações, funciona bem em placas de "vende-se", e comunica o posicionamento da empresa no mercado.',
      },
      {
        question: 'Meu nome de imobiliária deve indicar a região de atuação?',
        answer: 'Incluir região pode ajudar em buscas locais e estabelecer expertise de mercado ("Imobiliária Zona Sul"). No entanto, pode limitar expansão futura para outras áreas. Se você planeja crescer geograficamente, um nome sem limitação regional é mais versátil. Considere suas ambições de longo prazo.',
      },
      {
        question: 'Posso usar meu nome ou sobrenome na imobiliária?',
        answer: 'Sim, é muito tradicional no setor ("Imobiliária Oliveira", "Santos Imóveis"). Pode criar confiança pessoal e valor de marca. No entanto, considere que amarra a empresa à sua pessoa, pode dificultar venda futura do negócio, e depende da construção da sua reputação pessoal no mercado.',
      },
      {
        question: 'Nomes tradicionais ou modernos funcionam melhor para imobiliárias?',
        answer: 'Depende do seu posicionamento. Clientes de imóveis de alto padrão e mais velhos frequentemente preferem nomes tradicionais que sugerem estabilidade. Jovens compradores e investidores podem responder melhor a nomes modernos e digitais. Analise seu público-alvo para escolher o tom adequado.',
      },
      {
        question: 'Como criar um nome que transmita confiança?',
        answer: 'Use palavras que evocam solidez, segurança e sucesso: "Sólida", "Prime", "Elite", "Confiança", "Patrimônio", "Lar". Evite termos muito informais ou brincalhões. O tom deve ser profissional, pois clientes estão confiando decisões financeiras importantes. Referências a casa e lar também criam conexão emocional.',
      },
      {
        question: 'O nome deve indicar que trabalhamos com compra, venda ou aluguel?',
        answer: 'Geralmente não é necessário especificar no nome, já que imobiliárias tipicamente oferecem múltiplos serviços. Nomes amplos como "Imóveis" ou "Imobiliária" cobrem todas as atividades. Se você se especializa exclusivamente em locação ou vendas, pode considerar indicar, mas isso limita percepção de serviços.',
      },
      {
        question: 'Qual a importância do nome para atrair corretores?',
        answer: 'Corretores escolhem imobiliárias que complementam sua marca pessoal. Um nome profissional e respeitado ajuda a atrair bons profissionais. Se você planeja construir equipe, o nome deve ser prestigioso o suficiente para que corretores se orgulhem de se associar a ele.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado imobiliário?',
        answer: 'Pesquise no Google por imobiliárias com nomes similares na sua região, verifique no CRECI (Conselho Regional de Corretores de Imóveis), busque em portais imobiliários (ZAP, Viva Real, OLX), confira registros de marcas no INPI, e verifique disponibilidade de domínio e redes sociais.',
      },
      {
        question: 'Devo incluir "imobiliária" ou "imóveis" no nome?',
        answer: 'Incluir clarifica imediatamente seu negócio e ajuda em buscas. "Imobiliária Prime" é mais claro que apenas "Prime". No entanto, nomes estabelecidos podem usar apenas sobrenomes ("Lopes", "Coelho da Fonseca"). Para novas empresas, indicadores de setor geralmente ajudam no reconhecimento.',
      },
      {
        question: 'Como escolher um nome que funcione em marketing digital?',
        answer: 'Para presença online forte, escolha um nome único e buscável, verifique disponibilidade de domínio .com.br, garanta handles no Instagram e Facebook (onde imobiliárias são ativas), e considere como aparecerá em anúncios de Google e portais imobiliários. Evite nomes muito genéricos que se perdem em buscas.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua imobiliária é uma decisão estratégica que impacta diretamente a confiança que clientes depositarão em você para uma das maiores decisões financeiras de suas vidas. O nome aparecerá em placas de "vende-se" espalhadas pela cidade, em anúncios de portais imobiliários, em cartões de visita trocados com clientes, em fachadas de escritório, e nas indicações quando alguém pergunta "qual imobiliária você usou?". É a primeira coisa que comunica se você é o parceiro certo para ajudar na compra, venda ou aluguel de um imóvel. Um nome bem escolhido atrai clientes qualificados, inspira confiança, e cria uma marca que cresce através de transações bem-sucedidas e indicações satisfeitas.',
      steps: [
        {
          title: 'Defina seu posicionamento no mercado imobiliário',
          description: 'Antes de escolher um nome, tenha clareza sobre seu lugar no mercado. Determine seu foco principal (residencial, comercial, industrial, rural), seu segmento de preço (econômico, médio, alto padrão, luxo), seu diferencial competitivo (atendimento, tecnologia, expertise de bairro, volume), sua área geográfica de atuação, e se você foca em vendas, locação, ou ambos.',
        },
        {
          title: 'Explore conceitos que evocam confiança e realização',
          description: 'Faça brainstorm de palavras relacionadas a imóveis e as emoções envolvidas. Inclua termos de propriedade (lar, casa, patrimônio, teto), conceitos de confiança (sólida, prime, elite, certeza), palavras de realização (sonho, conquista, futuro, investimento), e referências geográficas se relevante. Combine elementos que transmitam tanto profissionalismo quanto conexão emocional.',
        },
        {
          title: 'Considere o tom apropriado para seu público',
          description: 'Diferentes clientes respondem a diferentes tons. Compradores de primeiro imóvel podem preferir nomes acolhedores e acessíveis. Investidores valorizam nomes que sugerem expertise e retorno. Clientes de luxo esperam sofisticação. Escolha um tom que ressoe com seu cliente ideal e posicionamento de mercado.',
        },
        {
          title: 'Avalie aplicações práticas do nome',
          description: 'Imobiliárias têm aplicações específicas de marca. Considere como o nome ficará em placas de "vende-se/aluga-se" na rua, em anúncios de portais imobiliários com espaço limitado, em fachada de escritório, em cartões de visita de corretores, e em materiais de apresentação de imóveis. O nome deve ser legível e impactante em todos esses contextos.',
        },
        {
          title: 'Verifique disponibilidade regulatória e digital',
          description: 'O setor imobiliário tem regulamentação específica. Verifique se o nome não conflita com imobiliárias registradas no CRECI da sua região, pesquise marcas no INPI, confirme disponibilidade de domínio .com.br, garanta handles em portais imobiliários onde terá perfil, e verifique redes sociais. Conflitos de nome podem causar problemas legais e confusão de mercado.',
        },
        {
          title: 'Teste com diferentes perfis do mercado',
          description: 'Compartilhe opções com pessoas que representam diferentes stakeholders: potenciais clientes compradores e vendedores, corretores que poderiam se juntar à equipe, profissionais do mercado imobiliário, e pessoas que recentemente compraram imóveis. Pergunte qual nome transmite mais confiança, qual imobiliária escolheriam, e qual nome é mais memorável.',
        },
        {
          title: 'Visualize o nome na jornada completa do cliente',
          description: 'Antes de finalizar, imagine o nome em toda experiência: na busca quando alguém procura imobiliária, na placa que atrai atenção de quem passa, na apresentação quando você mostra um imóvel, no contrato de compra e venda, na indicação para amigos e família, e na placa do próximo imóvel que o cliente colocar à venda com você. Se o nome funciona profissionalmente em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'ImóveisSólidos', description: 'Transmite segurança e confiabilidade—perfeito para imobiliárias que querem comunicar estabilidade e transações seguras.' },
      { name: 'LarPerfeito', description: 'Evoca o sonho da casa ideal—ideal para imobiliárias residenciais focadas em ajudar famílias a encontrar seus lares.' },
      { name: 'PrimeImóveis', description: 'Sugere qualidade superior—perfeito para imobiliárias de alto padrão com portfólio selecionado.' },
      { name: 'CasaConquista', description: 'Combina lar com realização—ideal para imobiliárias que atendem compradores de primeiro imóvel.' },
      { name: 'PatrimônioReal', description: 'Evoca valor e investimento—perfeito para imobiliárias focadas em clientes investidores.' },
      { name: 'MoradiaIdeal', description: 'Promete encontrar o imóvel certo—ideal para imobiliárias com amplo portfólio residencial.' },
      { name: 'EliteImobiliária', description: 'Posicionamento premium—perfeito para imobiliárias de luxo com imóveis exclusivos.' },
      { name: 'TetoSeguro', description: 'Transmite proteção e segurança—ideal para imobiliárias que priorizam transparência e confiança.' },
      { name: 'VivaBem Imóveis', description: 'Conecta imóvel com qualidade de vida—perfeito para imobiliárias que valorizam lifestyle.' },
      { name: 'InvestProperty', description: 'Foco em investimento—ideal para imobiliárias especializadas em imóveis para investidores.' },
      { name: 'ChavedOuro', description: 'Referência à entrega das chaves—perfeito para imobiliárias que celebram a conquista do cliente.' },
      { name: 'HabitatImóveis', description: 'Termo técnico acessível—ideal para imobiliárias com abordagem moderna e profissional.' },
      { name: 'SonhoDeCasa', description: 'Evoca aspiração emocional—perfeito para imobiliárias residenciais focadas em famílias.' },
      { name: 'RaízesImobiliária', description: 'Sugere estabelecimento e permanência—ideal para imobiliárias tradicionais com história no mercado.' },
      { name: 'NovaEra Imóveis', description: 'Comunica modernidade—perfeito para imobiliárias digitais com abordagem inovadora.' },
      { name: 'EndereçoCerto', description: 'Promete encontrar a localização ideal—ideal para imobiliárias com expertise em bairros específicos.' },
      { name: 'ValorPatrimonial', description: 'Foco em valor e investimento—perfeito para imobiliárias que atendem perfil de investidor.' },
      { name: 'CasaFeliz Imobiliária', description: 'Acolhedor e positivo—ideal para imobiliárias familiares com atendimento personalizado.' },
      { name: 'PropriedadesPrime', description: 'Sofisticado e premium—perfeito para imobiliárias de imóveis comerciais e alto padrão.' },
      { name: 'MeuCantoImóveis', description: 'Carinhoso e pessoal—ideal para imobiliárias que criam conexão emocional com clientes.' },
    ],
  },

  'shoes': {
    slug: 'shoes',
    name: 'Gerador de Nomes para Lojas de Calçados',
    title: 'Gerador gratuito de ideias de nomes comerciais de Loja de Calçados por IA',
    description: 'Gere nomes estilosos e memoráveis para lojas de calçados, sapatarias e marcas de sapatos.',
    metaDescription: 'Crie o nome perfeito para sua loja de calçados com nosso gerador gratuito por IA. Desenvolva nomes estilosos e memoráveis para sapatarias,...',
    inputLabel: 'Descreva sua loja de calçados...',
    inputPlaceholder: 'ex. Uma loja de tênis esportivos e streetwear focada em sneakers exclusivos para jovens urbanos',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Moderno & Urbano', 'Elegante & Sofisticado', 'Esportivo & Dinâmico', 'Confortável & Acessível'],
        default: 'Moderno & Urbano',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the footwear and shoe retail industry. Your role is to generate stylish, memorable business names that evoke fashion, comfort, and the perfect fit for shoe stores, sneaker boutiques, and footwear brands.

SHOE STORE INDUSTRY CONTEXT:
The footwear retail industry encompasses:
- Fashion shoe boutiques
- Sneaker and streetwear stores
- Athletic and sports footwear retailers
- Comfort and orthopedic shoe stores
- Luxury and designer shoe boutiques
- Children's shoe specialists
- Work and safety footwear stores
- Sandal and casual footwear shops
- Shoe repair and custom services
- Online sneaker and shoe retailers

NAME CHARACTERISTICS FOR SHOE STORES:
1. **Stylish and Fashion-Forward**
   - Names should evoke style and fashion sense
   - Reflect current trends in footwear
   - Appeal to fashion-conscious consumers

2. **Dynamic and Active**
   - Suggest movement and energy
   - Connect with the purpose of shoes
   - Evoke walking, running, dancing

3. **Comfortable and Appealing**
   - Shoes are about comfort and fit
   - Names should feel welcoming
   - Suggest quality and care

4. **Memorable for Retail**
   - Work well on storefronts
   - Easy to remember for repeat visits
   - Support word-of-mouth referrals

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a shoe store

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Sneaker Store',
        description: 'Empreendedores apaixonados por sneakers abrindo lojas especializadas usam o Gerador de Nomes para Lojas de Calçados para criar identidades que ressoam com a cultura sneakerhead. Ao descrever seu foco em tênis exclusivos, lançamentos e streetwear, a ferramenta gera nomes que atraem colecionadores e entusiastas de sneakers.',
      },
      {
        title: 'Lançamento de Marca de Calçados',
        description: 'Designers e empreendedores lançando suas próprias marcas de calçados usam o gerador para desenvolver nomes que funcionam tanto como marca quanto como loja. O nome precisa comunicar a identidade de design e estilo que diferencia os produtos no mercado competitivo de calçados.',
      },
      {
        title: 'Modernização de Sapataria Tradicional',
        description: 'Sapatarias tradicionais buscando se modernizar e atrair público mais jovem usam o gerador para explorar nomes que mantêm credibilidade estabelecida enquanto comunicam renovação. O novo nome deve equilibrar tradição com apelo contemporâneo.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para loja de calçados?',
        answer: 'Um bom nome para loja de calçados é estiloso, memorável e comunica o tipo de calçados que você vende. Deve evocar movimento, estilo ou conforto dependendo do seu posicionamento. O nome ideal funciona bem em fachadas de loja, é fácil de lembrar para clientes que voltam, e cria uma identidade que se destaca no competitivo varejo de calçados.',
      },
      {
        question: 'Meu nome deve indicar o tipo de calçado que vendo?',
        answer: 'Depende da sua especialização. Para lojas de nicho ("Sneaker Store", "Casa dos Tênis"), indicadores ajudam a atrair o público certo. Para lojas de variedade, nomes mais amplos permitem flexibilidade. Considere se quer ser percebido como especialista ou como destino completo para calçados.',
      },
      {
        question: 'Nomes em inglês funcionam para lojas de calçados no Brasil?',
        answer: 'Sim, especialmente para sneaker stores e lojas de streetwear. Termos como "Shoes", "Sneakers", "Step", "Kicks" são populares e comunicam modernidade. Para sapatarias mais tradicionais ou público mais amplo, nomes em português podem criar conexão mais forte.',
      },
      {
        question: 'Como criar um nome que atraia o público sneakerhead?',
        answer: 'A cultura sneaker valoriza autenticidade e exclusividade. Use referências que a comunidade reconhece, termos de street culture, ou nomes que sugiram raridade e colecionismo. Evite nomes corporativos demais. O tom deve ser cool e conectado com a cultura urbana.',
      },
      {
        question: 'O nome deve refletir conforto ou estilo?',
        answer: 'Depende do seu diferencial. Lojas de calçados confortáveis e ortopédicos se beneficiam de nomes que evocam bem-estar. Lojas de moda e sneakers devem priorizar estilo. Muitas lojas tentam equilibrar ambos, mas escolher um foco principal ajuda na clareza da marca.',
      },
      {
        question: 'Posso usar referências a "andar" ou "caminhar" no nome?',
        answer: 'Sim! Referências a movimento como "Passo", "Caminho", "Andar", "Walk", "Step" são muito apropriadas para calçados. Conectam diretamente com o propósito do produto e podem criar nomes criativos e memoráveis. Combinações como "Passo Certo" ou "Walk Style" funcionam bem.',
      },
      {
        question: 'Como verificar se o nome está disponível no varejo de calçados?',
        answer: 'Pesquise no Google por lojas de calçados com nomes similares, verifique em shopping centers da sua região, busque no Instagram onde lojas de sneakers são ativas, confira registros de marcas no INPI na categoria de calçados, e verifique disponibilidade de domínio e redes sociais.',
      },
      {
        question: 'O nome da loja deve ser diferente se também vendo online?',
        answer: 'Não necessariamente, mas o nome deve funcionar bem em ambos os canais. Para e-commerce, priorize nomes únicos e buscáveis, verifique disponibilidade de domínio, e considere como aparecerá em marketplaces. O mesmo nome pode fortalecer a marca em todos os canais.',
      },
      {
        question: 'Devo incluir "calçados" ou "sapatos" no nome?',
        answer: 'Incluir clarifica seu negócio para quem não conhece a marca. "Calçados Style" é imediatamente claro. No entanto, muitas lojas de sucesso usam nomes sem indicador (como "Arezzo", "Schutz"). Para novas lojas, algum indicador geralmente ajuda no reconhecimento inicial.',
      },
      {
        question: 'Como escolher um nome que funcione para diferentes faixas etárias?',
        answer: 'Se você atende público variado, escolha um nome versátil que não seja nem muito jovem nem muito tradicional. Evite gírias que podem envelhecer ou termos que limitam percepção de público. Nomes que focam em qualidade, estilo ou conforto podem ressoar com diferentes idades.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua loja de calçados é uma decisão que comunica estilo, qualidade e a experiência que clientes terão ao encontrar o par perfeito. O nome aparecerá em fachadas de loja que atraem olhares, em sacolas que clientes carregam pelas ruas como propaganda ambulante, em posts de Instagram quando mostram suas novas aquisições, em sites e marketplaces de e-commerce, e nas conversas quando amigos perguntam "onde você comprou esse tênis?". É a primeira coisa que comunica se você é o lugar certo para encontrar sneakers exclusivos, sapatos elegantes, ou calçados confortáveis. Um nome bem escolhido atrai seu público ideal, cria identidade de marca forte, e estabelece sua loja como destino preferido para calçados.',
      steps: [
        {
          title: 'Defina seu nicho e posicionamento no mercado de calçados',
          description: 'Antes de escolher um nome, tenha clareza sobre sua especialização. Determine seu tipo principal de calçado (sneakers, social, esportivo, conforto, infantil), seu público-alvo (jovens urbanos, executivos, famílias, atletas), seu diferencial competitivo (exclusividade, preço, variedade, atendimento), sua faixa de preço (acessível, intermediário, premium), e sua abordagem (loja física, e-commerce, ambos).',
        },
        {
          title: 'Explore o vocabulário de calçados e movimento',
          description: 'Faça brainstorm de palavras relacionadas a calçados e seus significados. Inclua tipos de calçados (tênis, sneaker, sapato, sandália), ações de movimento (passo, caminho, andar, correr, dançar), conceitos de estilo (chic, urban, sport, classic), referências de conforto (fit, soft, comfort, bem-estar), e termos da cultura streetwear se relevante. Combine criativamente.',
        },
        {
          title: 'Considere a cultura e tom do seu público',
          description: 'Diferentes públicos de calçados têm culturas distintas. Sneakerheads valorizam autenticidade e referências culturais. Clientes de calçados sociais apreciam sofisticação. Compradores de conforto buscam acolhimento. Famílias querem praticidade. Escolha um tom de nome que ressoe com a comunidade que você quer construir.',
        },
        {
          title: 'Avalie aplicações de marca para varejo',
          description: 'Lojas de calçados têm aplicações específicas. Considere como o nome ficará em uma fachada de shopping ou rua, em caixas de sapato que clientes guardam, em sacolas que funcionam como propaganda, em etiquetas de preço, e em anúncios digitais. O nome deve ser legível, impactante e funcionar em diferentes tamanhos.',
        },
        {
          title: 'Verifique disponibilidade competitiva',
          description: 'O varejo de calçados é competitivo. Pesquise por lojas com nomes similares na sua região e no e-commerce, verifique marcas de calçados existentes para evitar confusão, busque em marketplaces onde calçados são vendidos, confirme disponibilidade de domínio e redes sociais, e considere registro de marca para proteção.',
        },
        {
          title: 'Teste com seu público-alvo',
          description: 'Compartilhe opções com pessoas que representam seus clientes ideais. Para sneaker store, teste com entusiastas de tênis. Para sapataria, com compradores regulares de calçados. Pergunte qual nome parece mais atrativo, qual loja eles visitariam, qual nome é mais fácil de lembrar e indicar para amigos.',
        },
        {
          title: 'Visualize o nome na experiência completa de compra',
          description: 'Antes de finalizar, imagine o nome em toda jornada: na busca quando alguém procura calçados, na fachada que atrai quem passa, na experiência de experimentar calçados na loja, na caixa que o cliente leva para casa, no post que compartilha sua compra, e na indicação quando perguntam onde comprou. Se o nome funciona lindamente em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'PassoCerto', description: 'Promete encontrar o calçado ideal—perfeito para lojas que valorizam fit perfeito e atendimento consultivo.' },
      { name: 'UrbanKicks', description: 'Moderno e streetwear—ideal para sneaker stores focadas em cultura urbana e tênis exclusivos.' },
      { name: 'CalçadosStyle', description: 'Direto com toque de moda—perfeito para lojas de variedade com foco em estilo atual.' },
      { name: 'SneakerHouse', description: 'Casa dos sneakers—ideal para lojas especializadas em tênis colecionáveis e lançamentos.' },
      { name: 'PéDeAnjo', description: 'Carinhoso e confortável—perfeito para lojas de calçados infantis ou de conforto.' },
      { name: 'WalkFashion', description: 'Combina movimento com moda—ideal para lojas de calçados femininos elegantes.' },
      { name: 'TênisZone', description: 'Específico para tênis—perfeito para lojas especializadas em calçados esportivos e casuais.' },
      { name: 'SoladoNobre', description: 'Foco em qualidade—ideal para sapatarias de calçados masculinos clássicos e premium.' },
      { name: 'StepStore', description: 'Moderno e internacional—perfeito para lojas com mix de estilos contemporâneos.' },
      { name: 'ConfortoTotal', description: 'Promessa de bem-estar—ideal para lojas de calçados ortopédicos e confortáveis.' },
      { name: 'KicksClub', description: 'Comunidade de sneakers—perfeito para lojas que cultivam cultura sneakerhead.' },
      { name: 'SapatoFino', description: 'Elegância e qualidade—ideal para lojas de calçados sociais e de ocasião.' },
      { name: 'MovimentoLivre', description: 'Evoca liberdade e ação—perfeito para lojas de calçados esportivos e outdoor.' },
      { name: 'StreetFeet', description: 'Cultura de rua—ideal para lojas de streetwear e sneakers urbanos.' },
      { name: 'CalceBem', description: 'Foco no fit—perfeito para lojas com ampla numeração e atendimento especializado.' },
      { name: 'ShoesParadise', description: 'Paraíso dos calçados—ideal para lojas com grande variedade e experiência de compra.' },
      { name: 'PésFelizes', description: 'Acolhedor e positivo—perfeito para lojas familiares com foco em conforto.' },
      { name: 'TênisOriginal', description: 'Autenticidade garantida—ideal para lojas que vendem apenas produtos originais.' },
      { name: 'CaminhoStyle', description: 'Jornada com estilo—perfeito para lojas que acompanham clientes em diferentes fases da vida.' },
      { name: 'SneakerVault', description: 'Cofre de tênis raros—ideal para lojas de sneakers exclusivos e colecionáveis.' },
    ],
  },

  'skin-care': {
    slug: 'skin-care',
    name: 'Gerador de Nomes para Marcas de Skincare',
    title: 'Gerador gratuito de ideias de nomes comerciais de Skincare por IA',
    description: 'Gere nomes sofisticados e clean para marcas de skincare, cuidados com a pele e cosméticos dermatológicos.',
    metaDescription: 'Crie o nome perfeito para sua marca de skincare com nosso gerador gratuito por IA. Desenvolva nomes sofisticados e clean para cuidados com...',
    inputLabel: 'Descreva sua marca de skincare...',
    inputPlaceholder: 'ex. Uma marca de skincare natural com ingredientes botânicos brasileiros para peles sensíveis',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Clean & Minimalista', 'Natural & Orgânico', 'Científico & Clínico', 'Luxuoso & Premium'],
        default: 'Clean & Minimalista',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the skincare and dermatological cosmetics industry. Your role is to generate sophisticated, clean business names that evoke skin health, beauty, and the science of effective skincare.

SKINCARE INDUSTRY CONTEXT:
The skincare industry encompasses:
- Clean beauty and natural skincare brands
- Clinical and dermatologist-developed lines
- K-beauty and Asian skincare influences
- Organic and sustainable skincare
- Anti-aging and treatment-focused brands
- Sensitive skin specialists
- Men's skincare brands
- Luxury and prestige skincare
- Indie and artisan skincare creators
- Medical-grade skincare lines

NAME CHARACTERISTICS FOR SKINCARE BRANDS:
1. **Clean and Pure**
   - Names should evoke purity and clarity
   - Suggest clean ingredients and formulas
   - Feel fresh and trustworthy

2. **Scientific Yet Approachable**
   - Balance clinical credibility with accessibility
   - Suggest efficacy and results
   - Appeal to educated consumers

3. **Beautiful and Aspirational**
   - Skincare is about achieving beautiful skin
   - Names should be aesthetically pleasing
   - Create desire for the transformation

4. **Memorable for Brand Building**
   - Work well on minimalist packaging
   - Easy to search and find online
   - Support social media presence

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a skincare brand

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca de Skincare Natural',
        description: 'Empreendedores criando marcas de skincare com ingredientes naturais e botânicos usam o Gerador de Nomes para Marcas de Skincare para desenvolver identidades que comunicam pureza e eficácia. Ao descrever sua filosofia de formulação limpa, a ferramenta gera nomes que ressoam com consumidores de clean beauty.',
      },
      {
        title: 'Criação de Linha Dermocosmética',
        description: 'Dermatologistas e profissionais de estética lançando linhas de dermocosméticos usam o gerador para encontrar nomes que equilibram credibilidade científica com apelo de consumo. O nome precisa comunicar eficácia clínica sem parecer inacessível ou medicinal demais.',
      },
      {
        title: 'Expansão de Clínica para Produtos',
        description: 'Clínicas de estética expandindo para vender produtos de skincare próprios usam o gerador para criar uma marca que funcione independentemente da clínica. O nome deve capturar a expertise desenvolvida no atendimento e transmitir confiança para uso domiciliar.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para marca de skincare?',
        answer: 'Um bom nome de skincare é clean, sofisticado e evoca saúde da pele. Deve soar puro e confiável, sugerindo ingredientes de qualidade e resultados eficazes. O nome ideal funciona em embalagens minimalistas, é memorável para rotinas diárias de beleza, e cria uma identidade que consumidores querem incorporar em suas vidas.',
      },
      {
        question: 'Meu nome deve indicar que é skincare?',
        answer: 'Não necessariamente. Muitas marcas de sucesso usam nomes abstratos (Glossier, Drunk Elephant, The Ordinary) sem mencionar "skin" ou "skincare". Isso permite expansão para outros produtos de beleza. No entanto, se você quer clareza imediata, indicadores podem ajudar no reconhecimento inicial.',
      },
      {
        question: 'Nomes científicos ou naturais funcionam melhor?',
        answer: 'Depende do seu posicionamento. Marcas clínicas se beneficiam de nomes com tom científico. Marcas naturais devem evocar pureza e botânica. Muitas marcas modernas equilibram ambos—natureza apoiada por ciência. Escolha o ângulo que reflete sua filosofia de formulação.',
      },
      {
        question: 'Nomes em inglês são comuns em skincare no Brasil?',
        answer: 'Sim, muito comuns. O mercado de skincare é globalizado e termos como "Skin", "Glow", "Clear", "Pure" são universais. No entanto, nomes em português ou que celebram ingredientes brasileiros podem criar diferenciação e conexão local, especialmente para marcas com foco em botânica nacional.',
      },
      {
        question: 'Como criar um nome que funcione em embalagens minimalistas?',
        answer: 'Skincare frequentemente usa design clean. Escolha nomes curtos ou que funcionem como logo wordmark, evite caracteres especiais ou acentos que complicam design, considere como ficará em frascos pequenos, e teste se o nome mantém legibilidade em diferentes tamanhos.',
      },
      {
        question: 'O nome deve prometer resultados específicos?',
        answer: 'Cuidado com promessas específicas no nome da marca—regulamentações de cosméticos são rigorosas. Nomes que evocam resultados de forma sutil (Glow, Radiance, Clear) funcionam melhor que promessas diretas. Reserve claims específicos para nomes de produtos individuais e comunicação de marketing.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de beleza?',
        answer: 'Pesquise extensivamente: Google, Instagram, Sephora, farmácias e varejistas de beleza, Amazon e marketplaces, bases de dados de marcas registradas no INPI (cosméticos são categoria sensível). O mercado de skincare é saturado, então pesquisa cuidadosa é essencial para evitar conflitos.',
      },
      {
        question: 'Qual a importância das redes sociais para skincare?',
        answer: 'Extremamente importante! Skincare viraliza no Instagram, TikTok e YouTube. Seu nome precisa funcionar como hashtag, ser fácil de marcar em reviews, e soar bem quando influenciadores falam sobre seus produtos. Verifique disponibilidade de handles antes de finalizar.',
      },
      {
        question: 'Posso usar termos como "derma" ou "clinic" no nome?',
        answer: 'Termos como "Derma", "Clinic", "Lab" sugerem credibilidade científica. São apropriados se sua marca tem respaldo de dermatologistas ou fórmulas clinicamente testadas. Use com autenticidade—consumidores de skincare são sofisticados e detectam marketing sem substância.',
      },
      {
        question: 'Como criar um nome que atraia a geração millennial e Gen Z?',
        answer: 'Essas gerações valorizam autenticidade, transparência e sustentabilidade. Evite nomes corporativos ou pretenciosos. Prefira nomes que soem genuínos, modernos e com personalidade. Considere se o nome funciona como identidade de lifestyle, não apenas como produto.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua marca de skincare é uma decisão que comunica sua filosofia de beleza e cuidado com a pele. O nome aparecerá em embalagens elegantes na bancada do banheiro, em routines de skincare compartilhadas nas redes sociais, em reviews de influenciadores de beleza, em prateleiras de farmácias e lojas especializadas, e nas conversas quando alguém pergunta "qual sérum você usa?". É a primeira coisa que comunica se sua marca é natural, científica, luxuosa ou acessível. Um nome bem escolhido cria desejo, estabelece credibilidade, e constrói uma marca que consumidores incorporam em suas rotinas diárias de autocuidado.',
      steps: [
        {
          title: 'Defina a filosofia e posicionamento da sua marca',
          description: 'Antes de escolher um nome, tenha clareza sobre a essência da sua marca de skincare. Determine sua filosofia de formulação (natural, clínica, orgânica, K-beauty), seu público-alvo (pele sensível, anti-aging, acne, todos), seu diferencial competitivo (ingredientes, tecnologia, sustentabilidade, preço), seu posicionamento de preço (acessível, premium, luxo), e os valores que quer comunicar (clean beauty, ciência, simplicidade).',
        },
        {
          title: 'Explore vocabulário de pele, beleza e pureza',
          description: 'Faça brainstorm de palavras relacionadas a skincare e seus valores. Inclua termos de pele (skin, derme, glow, radiance), conceitos de pureza (pure, clean, clear, fresh), referências científicas (lab, clinic, formula, active), elementos naturais (botanical, flora, verde, essência), e sensações desejadas (soft, smooth, luminous). Combine de formas sofisticadas.',
        },
        {
          title: 'Priorize estética e sonoridade clean',
          description: 'Skincare é visual e sensorial. Avalie cada nome pelo som quando falado—deve soar limpo, suave e agradável. Considere como ficará escrito em tipografia minimalista, se evoca sensações de pureza e cuidado, se tem apelo internacional, e se soa sofisticado sem ser pretensioso.',
        },
        {
          title: 'Avalie aplicação em embalagens e branding',
          description: 'Skincare tem embalagens distintivas. Considere como o nome ficará em frascos de soro e potes de creme, se funciona em diferentes tamanhos de embalagem, como aparecerá em sachês de amostra, potencial para criar logo e identidade visual coesa, e se mantém elegância em todas as aplicações.',
        },
        {
          title: 'Verifique disponibilidade extensivamente',
          description: 'O mercado de skincare é saturado. Pesquise em varejistas de beleza (Sephora, farmácias, Beleza na Web), busque em Instagram e TikTok onde skincare viraliza, verifique marcas registradas no INPI com cuidado (cosméticos são sensíveis), confirme disponibilidade de domínio e todas as redes sociais, e considere mercados internacionais se tiver ambições globais.',
        },
        {
          title: 'Teste com consumidores de skincare',
          description: 'Compartilhe opções com pessoas que são entusiastas de skincare—elas são seu melhor termômetro. Pergunte qual nome parece mais premium e confiável, qual marca elas adicionariam à rotina, qual nome é mais memorável, e se o nome sugere eficácia ou apenas estética. Feedback de skincare lovers é invaluável.',
        },
        {
          title: 'Visualize o nome na rotina de autocuidado',
          description: 'Antes de finalizar, imagine o nome em contextos reais de skincare: na bancada do banheiro de uma cliente, sendo aplicado em uma rotina matinal, recomendado por um dermatologista, em um vídeo de "get ready with me", sendo procurado após uma indicação de amiga, e em uma resenha de blog de beleza. Se o nome se encaixa naturalmente em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'PelePura', description: 'Direto e clean—perfeito para marcas de skincare natural focadas em fórmulas limpas e transparentes.' },
      { name: 'DermaGlow', description: 'Combina ciência com luminosidade—ideal para dermocosméticos que prometem pele radiante.' },
      { name: 'BotânicaSkin', description: 'Celebra ingredientes naturais—perfeito para marcas com foco em extratos botânicos e plantas.' },
      { name: 'ClearEssence', description: 'Evoca pureza e essência—ideal para skincare minimalista e clean beauty.' },
      { name: 'RadianceLab', description: 'Combina luminosidade com ciência—perfeito para marcas clinicamente desenvolvidas.' },
      { name: 'VerdeBeauty', description: 'Referência à natureza e sustentabilidade—ideal para skincare eco-friendly e orgânico.' },
      { name: 'SkinBalance', description: 'Promete equilíbrio da pele—perfeito para marcas focadas em saúde e harmonia cutânea.' },
      { name: 'PureFormula', description: 'Comunica limpeza e eficácia—ideal para marcas com fórmulas sem ingredientes controversos.' },
      { name: 'FloraFace', description: 'Botânica para o rosto—perfeito para skincare com ingredientes florais e naturais.' },
      { name: 'GlowScience', description: 'Ciência da luminosidade—ideal para marcas que equilibram natureza com tecnologia.' },
      { name: 'DermaVita', description: 'Combina dermatologia com vitalidade—perfeito para dermocosméticos rejuvenescedores.' },
      { name: 'AquaSkin', description: 'Referência à hidratação—ideal para marcas focadas em hidratação e barreira cutânea.' },
      { name: 'EssênciaNatural', description: 'Pureza em português—perfeito para marcas brasileiras de skincare natural.' },
      { name: 'ClearPath', description: 'Caminho para pele limpa—ideal para marcas focadas em tratamento de acne e oleosidade.' },
      { name: 'SkinRitual', description: 'Eleva skincare a ritual—perfeito para marcas que celebram o autocuidado diário.' },
      { name: 'LuminousDerm', description: 'Dermatologia luminosa—ideal para dermocosméticos de alto desempenho.' },
      { name: 'VerdePele', description: 'Natureza brasileira—perfeito para marcas com ingredientes da biodiversidade nacional.' },
      { name: 'SoftGlow', description: 'Suavidade e brilho—ideal para skincare sensível e gentil.' },
      { name: 'AtivaPele', description: 'Pele ativa e saudável—perfeito para marcas com ingredientes ativos potentes.' },
      { name: 'ClarityCosmetics', description: 'Clareza e transparência—ideal para marcas com comunicação honesta sobre ingredientes.' },
    ],
  },

  'slime': {
    slug: 'slime',
    name: 'Gerador de Nomes para Lojas de Slime',
    title: 'Gerador gratuito de ideias de nomes comerciais de Slime por IA',
    description: 'Gere nomes divertidos e criativos para lojas de slime, slime shops e negócios de massinha sensorial.',
    metaDescription: 'Encontre o nome perfeito para sua loja de slime com nosso gerador gratuito por IA. Crie nomes divertidos e criativos para slime shops,...',
    inputLabel: 'Descreva sua loja de slime...',
    inputPlaceholder: 'ex. Uma loja de slimes artesanais com texturas variadas e aromas deliciosos para crianças e colecionadores',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Divertido & Colorido', 'Satisfatório & Sensorial', 'Fofo & Kawaii', 'Criativo & Único'],
        default: 'Divertido & Colorido',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the slime and sensory toy industry. Your role is to generate fun, creative business names that capture the satisfying, playful, and colorful nature of slime products.

SLIME SHOP INDUSTRY CONTEXT:
The slime industry encompasses:
- Artisan and handmade slime shops
- Sensory play and ASMR slime brands
- Kids' slime and craft stores
- Collector and specialty slime boutiques
- Slime supply and ingredient shops
- DIY slime kit businesses
- Scented and themed slime creators
- Cloud, butter, and specialty texture slimes
- Slime party and event services
- Educational sensory play businesses

NAME CHARACTERISTICS FOR SLIME SHOPS:
1. **Fun and Playful**
   - Names should be enjoyable and lighthearted
   - Appeal to both kids and adult collectors
   - Capture the joy of playing with slime

2. **Sensory and Satisfying**
   - Evoke the textures and sounds of slime
   - Reference the ASMR/satisfying aspect
   - Create sensory associations

3. **Colorful and Creative**
   - Suggest the vibrant, creative nature of slime
   - Stand out with unique personality
   - Work well on social media

4. **Appealing to Target Market**
   - Connect with slime community culture
   - Use language the community understands
   - Create brand recognition in the niche

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a slime shop

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Slime Shop Artesanal',
        description: 'Criadores de slime lançando suas próprias lojas usam o Gerador de Nomes para Lojas de Slime para desenvolver identidades que capturam a diversão e satisfação do produto. Ao descrever suas texturas especiais, aromas e estilos únicos, a ferramenta gera nomes que ressoam com a comunidade slime e atraem colecionadores.',
      },
      {
        title: 'Criação de Marca de Slime Infantil',
        description: 'Empreendedores focando em slimes seguros e divertidos para crianças usam o gerador para criar nomes que atraem pais e encantam crianças. O nome precisa comunicar diversão enquanto sugere segurança e qualidade adequada para brincadeiras infantis.',
      },
      {
        title: 'Expansão de Hobby para Negócio',
        description: 'Entusiastas de slime transformando hobby em negócio usam o gerador para desenvolver uma marca profissional que mantém a essência divertida. O nome deve funcionar tanto para vendas online quanto para presença em feiras e eventos de artesanato.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para loja de slime?',
        answer: 'Um bom nome de slime shop é divertido, criativo e memorável. Deve evocar as sensações satisfatórias de brincar com slime—texturas, sons e cores vibrantes. O nome ideal ressoa com a comunidade slime (crianças, colecionadores, entusiastas de ASMR), funciona bem nas redes sociais onde slimes viralizam, e cria uma identidade de marca cativante.',
      },
      {
        question: 'Meu nome deve incluir a palavra "slime"?',
        answer: 'Incluir "slime" ajuda na identificação imediata e em buscas. Muitas lojas de sucesso usam (como "SlimeDreams", "SlimeFairy"). No entanto, nomes criativos que evocam texturas ("Squish Shop", "Gooey Goods") também funcionam e podem permitir expansão para outros produtos sensoriais.',
      },
      {
        question: 'Nomes em inglês funcionam para slime shops no Brasil?',
        answer: 'Sim, muito bem! A comunidade slime é global e usa muitos termos em inglês. Palavras como "slime", "squish", "glow", "cloud" são universalmente reconhecidas. No entanto, nomes em português ou trocadilhos bilíngues podem criar diferenciação e conexão local.',
      },
      {
        question: 'Como criar um nome que atraia a comunidade ASMR?',
        answer: 'A comunidade ASMR valoriza sensações satisfatórias. Use palavras que evocam texturas e sons: "Crunch", "Pop", "Squish", "Bubble", "Crispy". Referências a satisfação sensorial e relaxamento também ressoam. O nome deve sugerir a experiência tátil e auditiva do slime.',
      },
      {
        question: 'O nome deve ser fofo ou pode ser mais "cool"?',
        answer: 'Depende do seu público. Slimes para crianças pequenas pedem nomes fofos e coloridos. Colecionadores adolescentes e adultos podem preferir estética mais "cool" ou aesthetic. Considere se quer um tom kawaii, tumblr, ou mais neutro. Seu visual de marca deve combinar.',
      },
      {
        question: 'Como verificar se o nome está disponível na comunidade slime?',
        answer: 'Pesquise no Instagram e TikTok onde slime shops são muito ativos, verifique no Etsy e marketplaces de artesanato, busque no YouTube por canais de slime, confira disponibilidade de domínio, e pesquise em grupos de Facebook de slime. A comunidade é conectada e você quer evitar confusão.',
      },
      {
        question: 'Trocadilhos e jogos de palavras funcionam bem?',
        answer: 'Sim! A cultura slime aprecia criatividade e humor. Trocadilhos com "slime" ("Sublime Slime", "Slimey Sunday"), texturas ou referências pop funcionam bem. Certifique-se de que o trocadilho é fácil de entender e funciona nas redes sociais.',
      },
      {
        question: 'O nome deve refletir o tipo de slime que faço?',
        answer: 'Se você se especializa em um tipo (cloud slime, butter slime, clear slime), pode considerar indicar. No entanto, especialização no nome pode limitar se você diversificar. Muitas lojas preferem nomes amplos que permitem vender diferentes tipos e variar com tendências.',
      },
      {
        question: 'Qual a importância do Instagram para slime shops?',
        answer: 'Extremamente importante! Slime é altamente visual e satisfatório de assistir. Instagram e TikTok são onde a comunidade vive. Seu nome precisa funcionar como handle disponível, ser fácil de marcar, e criar uma estética de perfil atraente. Verifique disponibilidade antes de decidir.',
      },
      {
        question: 'Como escolher um nome que funcione para todas as idades?',
        answer: 'Se você atende crianças e colecionadores adultos, escolha um nome que não seja nem muito infantil nem muito sofisticado. Nomes que focam na experiência do slime ("Satisfying Slime", "Textura Mágica") podem atrair diferentes idades. Evite referências muito específicas a uma faixa etária.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua loja de slime é uma decisão divertida que define como a comunidade slime perceberá sua marca. O nome aparecerá em vídeos satisfatórios de Instagram e TikTok, em embalagens coloridas que clientes mal podem esperar para abrir, em reviews de colecionadores entusiastas, em feiras de artesanato e eventos, e nas conversas quando crianças pedem "quero comprar slime da [nome]!". É a primeira coisa que comunica se seus slimes são especiais, satisfatórios e dignos de colecionar. Um nome bem escolhido captura a alegria do produto, ressoa com a comunidade, e cria uma marca que pessoas adoram compartilhar.',
      steps: [
        {
          title: 'Defina seu estilo e público de slime',
          description: 'Antes de escolher um nome, tenha clareza sobre sua marca de slime. Determine seu público principal (crianças, tweens, colecionadores adultos, comunidade ASMR), seus tipos de slime especiais (cloud, butter, clear, floam, crunchy), seu diferencial (texturas únicas, aromas, cores, ingredientes), sua estética visual (kawaii, aesthetic, colorido, minimalista), e onde você vende (online, feiras, ambos).',
        },
        {
          title: 'Explore o vocabulário da cultura slime',
          description: 'Faça brainstorm de palavras do universo slime. Inclua texturas e tipos (cloud, butter, glossy, crunchy, floam), sensações (squish, stretch, pop, crunch, satisfying), cores e visuais (glow, sparkle, rainbow, pastel), referências fofas (kawaii, cute, dreamy), e termos da comunidade. Combine criativamente para criar nomes únicos.',
        },
        {
          title: 'Considere o tom e estética da marca',
          description: 'A comunidade slime tem diferentes estéticas. Decida se quer tom kawaii e fofo (emojis, cores pastel), aesthetic e tumblr (minimalista, sofisticado), colorido e energético (vibrante, divertido), ou científico e experimental (lab, formula). O tom do nome deve combinar com sua identidade visual nas redes sociais.',
        },
        {
          title: 'Priorize potencial para redes sociais',
          description: 'Slime vive nas redes sociais. Avalie cada nome considerando: está disponível como handle no Instagram e TikTok? Funciona como hashtag? É fácil de digitar e marcar? Soa bem quando falado em vídeos? Cria uma estética de perfil atraente? Tem potencial para viralizar?',
        },
        {
          title: 'Verifique disponibilidade na comunidade',
          description: 'A comunidade slime é bem conectada. Pesquise no Instagram por perfis similares, verifique no TikTok, busque no Etsy e marketplaces de artesanato, entre em grupos de Facebook de slime, e confira disponibilidade de domínio. Você quer um nome único que não confunda com outros slimers.',
        },
        {
          title: 'Teste com membros da comunidade slime',
          description: 'Compartilhe opções com pessoas que amam slime—crianças, colecionadores, outros criadores. Pergunte qual nome parece mais atrativo, qual loja eles seguiriam no Instagram, qual nome é mais fácil de lembrar, e se o nome evoca slimes satisfatórios. Feedback da comunidade é essencial.',
        },
        {
          title: 'Visualize o nome na experiência completa',
          description: 'Antes de finalizar, imagine o nome em contextos reais: no handle do Instagram com milhares de seguidores, em um vídeo satisfatório de slime sendo esticado, na etiqueta de um pote colorido, no pedido sendo aberto com entusiasmo, em uma feira com crianças apontando sua barraca, e na indicação para outros fãs de slime. Se o nome captura toda a diversão e satisfação, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'SlimeDreams', description: 'Sonho de slime—perfeito para lojas que criam slimes mágicos e fantásticos que encantam.' },
      { name: 'SquishyShop', description: 'Referência à textura satisfatória—ideal para lojas com variedade de texturas macias.' },
      { name: 'TexturaMágica', description: 'Português encantador—perfeito para lojas brasileiras de slimes com texturas especiais.' },
      { name: 'CloudSlimes', description: 'Especialização em cloud slime—ideal para lojas conhecidas por slimes fofos e aerados.' },
      { name: 'SlimeFairy', description: 'Fofo e mágico—perfeito para slimes com glitter, cores pastel e estética kawaii.' },
      { name: 'GooeyGoods', description: 'Divertido e pegajoso—ideal para lojas com personalidade brincalhona.' },
      { name: 'SatisfyingSlime', description: 'Promessa de satisfação—perfeito para lojas focadas em ASMR e experiência sensorial.' },
      { name: 'RainbowSquish', description: 'Colorido e texturizado—ideal para slimes vibrantes e variados.' },
      { name: 'SlimeParadise', description: 'Paraíso para slime lovers—perfeito para lojas com grande variedade de produtos.' },
      { name: 'CrunchyCloud', description: 'Combinação de texturas—ideal para lojas com slimes de texturas mistas e satisfatórias.' },
      { name: 'BrilhoSlime', description: 'Destaca brilho e glitter—perfeito para slimes com partículas brilhantes e cores vibrantes.' },
      { name: 'SlimeArtesanal', description: 'Comunica qualidade handmade—ideal para lojas que valorizam produção artesanal cuidadosa.' },
      { name: 'PopSquish', description: 'Sons satisfatórios—perfeito para slimes crunchy e com adições que fazem barulho.' },
      { name: 'KawaiiSlimes', description: 'Estética japonesa fofa—ideal para slimes com decorações, charms e visual adorável.' },
      { name: 'GlowyGoo', description: 'Slimes que brilham—perfeito para lojas com slimes glow in the dark e efeitos especiais.' },
      { name: 'SlimeSensation', description: 'Experiência sensorial—ideal para lojas focadas em diferentes texturas e sensações.' },
      { name: 'BubbleSquish', description: 'Bolhas e textura—perfeito para slimes com efeito de bolhas satisfatórias.' },
      { name: 'DoceSlime', description: 'Referência a slimes com aroma doce—ideal para lojas conhecidas por fragrâncias deliciosas.' },
      { name: 'SlimeCreators', description: 'Criadores de slime—perfeito para lojas que se posicionam como artistas de slime.' },
      { name: 'FluffyToys', description: 'Fofo e brincalhão—ideal para slimes butter, fluffy e texturas macias.' },
    ],
  },

  'soap': {
    slug: 'soap',
    name: 'Gerador de Nomes para Saboarias',
    title: 'Gerador gratuito de ideias de nomes comerciais de Saboaria por IA',
    description: 'Gere nomes artesanais e naturais para saboarias, marcas de sabonetes e produtos de banho artesanais.',
    metaDescription: 'Crie o nome perfeito para sua saboaria com nosso gerador gratuito por IA. Desenvolva nomes artesanais e naturais para sabonetes artesanais,...',
    inputLabel: 'Descreva sua saboaria...',
    inputPlaceholder: 'ex. Uma saboaria artesanal com sabonetes veganos feitos com ingredientes orgânicos e óleos essenciais',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Artesanal & Natural', 'Elegante & Sofisticado', 'Fresco & Limpo', 'Rústico & Orgânico'],
        default: 'Artesanal & Natural',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the artisan soap and bath products industry. Your role is to generate artisanal, natural business names that evoke purity, craftsmanship, and the pleasure of luxurious bathing experiences.

SOAP MAKING INDUSTRY CONTEXT:
The soap and bath products industry encompasses:
- Artisan and handmade soap makers
- Natural and organic soap brands
- Vegan and cruelty-free bath products
- Luxury bath and body boutiques
- Cold process and hot process soap crafters
- Bath bomb and bath product creators
- Therapeutic and aromatherapy soaps
- Men's grooming soap specialists
- Gift and specialty soap shops
- Sustainable and zero-waste soap brands

NAME CHARACTERISTICS FOR SOAP BUSINESSES:
1. **Natural and Pure**
   - Names should evoke natural ingredients
   - Suggest cleanliness and freshness
   - Appeal to health-conscious consumers

2. **Artisanal and Crafted**
   - Communicate handmade quality
   - Suggest care and attention to detail
   - Stand apart from mass-produced products

3. **Sensory and Luxurious**
   - Evoke pleasant scents and textures
   - Create associations with self-care
   - Suggest a premium bathing experience

4. **Trustworthy and Wholesome**
   - Soap touches skin—trust is essential
   - Names should feel safe and clean
   - Communicate ingredient quality

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a soap business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Saboaria Artesanal',
        description: 'Artesãos de sabonetes lançando suas próprias marcas usam o Gerador de Nomes para Saboarias para criar identidades que comunicam produção artesanal e ingredientes de qualidade. Ao descrever sua filosofia—cold process, ingredientes orgânicos, óleos essenciais—a ferramenta gera nomes que atraem consumidores de produtos naturais.',
      },
      {
        title: 'Criação de Linha de Produtos de Banho',
        description: 'Empreendedores expandindo de sabonetes para linhas completas de banho (bath bombs, sais, óleos) usam o gerador para desenvolver um nome de marca que englobe toda a experiência de banho. O nome precisa ser versátil para diferentes produtos mantendo identidade coesa.',
      },
      {
        title: 'Profissionalização de Hobby',
        description: 'Hobbyistas de saboaria transformando paixão em negócio usam o gerador para criar uma identidade profissional. O nome deve transmitir qualidade artesanal enquanto posiciona a marca para crescimento além de vendas informais para amigos e família.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para saboaria?',
        answer: 'Um bom nome de saboaria evoca naturalidade, pureza e cuidado artesanal. Deve comunicar que seus produtos são feitos com carinho e ingredientes de qualidade. O nome ideal funciona em rótulos de sabonetes, transmite a experiência sensorial do banho, e cria confiança para produtos que tocam a pele.',
      },
      {
        question: 'Meu nome deve indicar que os sabonetes são artesanais?',
        answer: 'Indicadores como "Artesanal", "Handmade", "Natural" podem ajudar a diferenciar de sabonetes industriais. Muitos consumidores buscam especificamente produtos artesanais. No entanto, você pode comunicar isso através de branding visual e descrições, mantendo o nome mais criativo.',
      },
      {
        question: 'Nomes que evocam ingredientes funcionam bem?',
        answer: 'Sim! Referências a ingredientes naturais (lavanda, mel, aveia, ervas) comunicam qualidade e evocam aromas agradáveis. No entanto, evite nomes muito específicos que limitem sua linha de produtos. Um nome mais amplo permite criar diferentes fragrâncias e fórmulas.',
      },
      {
        question: 'Devo usar "saboaria" ou "sabonetes" no nome?',
        answer: 'Incluir clarifica imediatamente seu produto. "Saboaria" soa mais artesanal e estabelecido. "Sabonetes" é mais direto. Algumas marcas usam apenas nomes de marca sem indicador (como "Lush", "Dr. Bronner\'s"). Considere o nível de reconhecimento que precisa construir.',
      },
      {
        question: 'Nomes em outros idiomas funcionam para saboarias?',
        answer: 'Palavras em francês (Savon, Provence), italiano, ou referências a tradições de saboaria podem adicionar sofisticação. No entanto, certifique-se de que o nome é pronunciável para brasileiros e não cria confusão sobre o produto ou origem.',
      },
      {
        question: 'Como criar um nome que transmita luxo acessível?',
        answer: 'Use palavras que evocam qualidade sem serem pretenciosas: "Puro", "Essência", "Natural", "Artesanal", "Botânico". Evite termos muito exclusivos ou elitistas se seu público é amplo. O tom deve ser premium mas acolhedor.',
      },
      {
        question: 'O nome deve comunicar se os produtos são veganos?',
        answer: 'Se veganismo é seu diferencial principal, incluir no nome ou tagline pode atrair esse público. No entanto, você pode comunicar isso em embalagens e marketing sem estar no nome principal. Considere o quão central esse posicionamento é para sua marca.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de cosméticos?',
        answer: 'Pesquise no Google e Instagram por saboarias com nomes similares, verifique em feiras de artesanato e marketplaces como Elo7, busque registros de marcas no INPI na categoria de cosméticos, e confirme disponibilidade de domínio e redes sociais. O mercado artesanal é grande.',
      },
      {
        question: 'Qual a importância da embalagem para o nome?',
        answer: 'Sabonetes artesanais frequentemente têm embalagens craft e rótulos. Seu nome deve ficar bonito em etiquetas de papel kraft, ser legível em diferentes tamanhos, e combinar com estética artesanal. Considere como o nome funcionará visualmente nas suas embalagens.',
      },
      {
        question: 'Como escolher um nome que funcione para presentes?',
        answer: 'Sabonetes artesanais são frequentemente dados de presente. Escolha um nome que soe especial e presenteável, funcione em embalagens de presente, e seja fácil de recomendar. Nomes que evocam cuidado e carinho ressoam com quem busca presentes significativos.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua saboaria é uma decisão que comunica sua dedicação artesanal e a experiência sensorial que seus produtos proporcionam. O nome aparecerá em rótulos artesanais que contam a história dos seus sabonetes, em feiras de artesanato onde você apresenta seus produtos, em posts de Instagram que mostram a beleza das suas criações, em cestas de presente que alegram quem recebe, e nas conversas quando clientes recomendam seus produtos. É a primeira coisa que comunica se seus sabonetes são especiais, naturais e feitos com amor. Um nome bem escolhido atrai consumidores que valorizam qualidade artesanal e cria uma marca que cresce através de clientes encantados.',
      steps: [
        {
          title: 'Defina sua filosofia e diferencial de saboaria',
          description: 'Antes de escolher um nome, tenha clareza sobre sua marca. Determine sua filosofia de produção (cold process, natural, orgânico, vegano), seus ingredientes especiais (óleos essenciais, manteigas, extratos botânicos), seu público-alvo (consumidores naturais, presentes, luxo acessível), seu diferencial competitivo (ingredientes, processo, fragrâncias), e onde você vende (feiras, online, lojas parceiras).',
        },
        {
          title: 'Explore vocabulário de natureza e cuidado',
          description: 'Faça brainstorm de palavras relacionadas a sabonetes e bem-estar. Inclua ingredientes (ervas, flores, óleos, essências), sensações de limpeza (puro, fresco, limpo, suave), conceitos naturais (botânico, orgânico, natural, verde), referências artesanais (artesanal, handmade, craft), e experiências de banho (espuma, aroma, cuidado). Combine elementos organicamente.',
        },
        {
          title: 'Considere o tom artesanal que deseja transmitir',
          description: 'Saboarias artesanais têm diferentes personalidades. Decida se quer tom rústico e caseiro ("Sabonetes da Fazenda"), sofisticado e premium ("Atelier de Sabonetes"), fresco e moderno ("Pure Soap Co"), ou acolhedor e familiar ("Saboaria da Vovó"). O tom do nome deve combinar com sua identidade visual e posicionamento.',
        },
        {
          title: 'Avalie aplicação em rótulos e embalagens',
          description: 'Sabonetes artesanais têm embalagens distintivas. Considere como o nome ficará em rótulos de papel craft, em etiquetas pequenas em sabonetes individuais, em embalagens de presente, em faixas de papel que envolvem os sabonetes, e em cartões de visita para feiras. O nome deve ser legível e bonito em contextos artesanais.',
        },
        {
          title: 'Verifique disponibilidade no mercado artesanal',
          description: 'O mercado de saboaria artesanal é ativo. Pesquise no Elo7 e marketplaces de artesanato, verifique no Instagram onde saboarias são muito presentes, busque em feiras de artesanato da sua região, confira registros de marcas no INPI, e confirme disponibilidade de domínio e redes sociais.',
        },
        {
          title: 'Teste com potenciais clientes e parceiros',
          description: 'Compartilhe opções com pessoas que compram produtos artesanais, amigos que recebem presentes caseiros, lojistas que poderiam revender, e outros artesãos. Pergunte qual nome parece mais natural e confiável, qual saboaria escolheriam para presente, e qual nome é mais memorável.',
        },
        {
          title: 'Visualize o nome na experiência completa do cliente',
          description: 'Antes de finalizar, imagine o nome em contextos reais: em uma feira de artesanato com sua barraca atraindo visitantes, no banheiro de um cliente com seus sabonetes em destaque, em uma cesta de presente sendo aberta com alegria, em um post de Instagram elogiando suas criações, e na indicação quando perguntam "onde você comprou esses sabonetes?". Se o nome evoca naturalidade e cuidado em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'SaboariaArtesanal', description: 'Direto e claro sobre produção handmade—perfeito para saboarias que valorizam transparência e tradição.' },
      { name: 'EspumaNatural', description: 'Combina produto com pureza—ideal para saboarias com ingredientes 100% naturais.' },
      { name: 'SabonetesPuros', description: 'Promessa de pureza—perfeito para saboarias sem aditivos artificiais ou químicos.' },
      { name: 'BotânicaSabão', description: 'Referência a ingredientes de plantas—ideal para saboarias com foco em extratos botânicos.' },
      { name: 'AromasNaturais', description: 'Destaca fragrâncias verdadeiras—perfeito para saboarias conhecidas por aromas de óleos essenciais.' },
      { name: 'SaboariaVerde', description: 'Evoca sustentabilidade e natureza—ideal para saboarias eco-friendly e veganas.' },
      { name: 'EssênciadoBanho', description: 'Eleva a experiência do banho—perfeito para linhas completas de produtos de banho.' },
      { name: 'PuroSabão', description: 'Simplicidade e qualidade—ideal para saboarias minimalistas com fórmulas simples.' },
      { name: 'SabonetesDoSol', description: 'Evoca natureza e energia—perfeito para saboarias com ingredientes naturais e vibração positiva.' },
      { name: 'AtêlieDeSabonetes', description: 'Posicionamento artístico—ideal para saboarias com sabonetes decorativos e elaborados.' },
      { name: 'VerdeEspuma', description: 'Natureza em cada banho—perfeito para saboarias sustentáveis e ecológicas.' },
      { name: 'SaboariaDosCampos', description: 'Evoca origem rural e natureza—ideal para saboarias com ingredientes de fazenda.' },
      { name: 'PétalaSabonetes', description: 'Delicadeza floral—perfeito para saboarias com foco em fragrâncias de flores.' },
      { name: 'NaturalmentePuro', description: 'Pureza autêntica—ideal para saboarias que evitam todos os ingredientes sintéticos.' },
      { name: 'SaboariaErvas', description: 'Especialização em ervas—perfeito para saboarias com sabonetes terapêuticos e aromáticos.' },
      { name: 'BanhoDeNatureza', description: 'Experiência natural completa—ideal para linhas que incluem sabonetes, sais e óleos.' },
      { name: 'SabãoArteiro', description: 'Artesanato com personalidade—perfeito para saboarias com identidade criativa forte.' },
      { name: 'EssênciaVegetal', description: 'Foco em origem vegetal—ideal para saboarias veganas e plant-based.' },
      { name: 'SabonetesDeAutor', description: 'Criação exclusiva—perfeito para saboarias com receitas próprias e design autoral.' },
      { name: 'PuraEspuma', description: 'Limpeza genuína—ideal para saboarias que comunicam simplicidade e eficácia natural.' },
    ],
  },

'sportswear': {
    slug: 'sportswear',
    name: 'Gerador de Nomes para Marcas de Roupas Esportivas',
    title: 'Gerador gratuito de ideias de nomes comerciais de Roupas Esportivas por IA',
    description: 'Gere nomes dinâmicos e energéticos para marcas de roupas esportivas, activewear e moda fitness.',
    metaDescription: 'Crie o nome perfeito para sua marca de roupas esportivas com nosso gerador gratuito por IA. Desenvolva nomes dinâmicos e energéticos para...',
    inputLabel: 'Descreva sua marca de roupas esportivas...',
    inputPlaceholder: 'ex. Uma marca de leggings e tops de alta performance para mulheres que praticam yoga e pilates',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Dinâmico & Energético', 'Premium & Performance', 'Lifestyle & Athleisure', 'Técnico & Profissional'],
        default: 'Dinâmico & Energético',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the sportswear, activewear, and athletic apparel industry. Your role is to generate dynamic, energetic business names that convey performance, fitness, and the active lifestyle.

SPORTSWEAR INDUSTRY CONTEXT:
The sportswear industry encompasses:
- Performance athletic apparel brands
- Yoga and pilates wear specialists
- Running and endurance sport clothing
- Gym and fitness wear brands
- Athleisure and lifestyle sportswear
- Compression and technical apparel
- Women's fitness fashion brands
- Men's athletic wear lines
- CrossFit and functional fitness apparel
- Sustainable and eco-friendly sportswear

NAME CHARACTERISTICS FOR SPORTSWEAR BRANDS:
1. **Dynamic and Energetic**
   - Names should convey movement and energy
   - Suggest athletic performance
   - Inspire motivation and action

2. **Performance-Oriented**
   - Communicate technical capability
   - Suggest quality materials and design
   - Appeal to serious athletes

3. **Lifestyle and Aspirational**
   - Connect with fitness lifestyle values
   - Be wearable beyond the gym (athleisure)
   - Create community and identity

4. **Modern and Distinctive**
   - Stand out in competitive market
   - Work well on apparel labels
   - Support strong visual branding

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a sportswear brand

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca de Activewear Feminino',
        description: 'Empreendedoras lançando marcas de roupas esportivas para mulheres usam o Gerador de Nomes para Marcas de Roupas Esportivas para criar identidades que empoderam e inspiram. Ao descrever seu foco em yoga, academia ou lifestyle fitness, a ferramenta gera nomes que ressoam com mulheres ativas e conscientes de moda.',
      },
      {
        title: 'Criação de Marca de Performance',
        description: 'Atletas e entusiastas de fitness criando marcas de alta performance usam o gerador para desenvolver nomes que comunicam tecnologia e eficácia. O nome precisa atrair atletas sérios que buscam equipamentos que melhoram sua performance.',
      },
      {
        title: 'Desenvolvimento de Linha Athleisure',
        description: 'Empreendedores identificando a tendência athleisure usam o gerador para criar marcas que funcionam tanto na academia quanto no dia a dia. O nome deve comunicar versatilidade, estilo e o lifestyle ativo que os consumidores querem expressar.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para marca de roupas esportivas?',
        answer: 'Um bom nome de sportswear é dinâmico, energético e evoca movimento e performance. Deve inspirar ação e motivação enquanto comunica qualidade técnica. O nome ideal funciona em etiquetas de roupa, cria identidade de lifestyle, e ressoa com pessoas que vivem um estilo de vida ativo—seja atletas profissionais ou praticantes de fim de semana.',
      },
      {
        question: 'Meu nome deve indicar o tipo de esporte ou atividade?',
        answer: 'Depende do seu foco. Nomes específicos ("Yoga Flow Wear") atraem claramente seu nicho mas limitam expansão. Nomes mais amplos ("Active Motion") permitem diversificar. Muitas marcas de sucesso começam em um nicho e expandem, então considere se quer flexibilidade futura.',
      },
      {
        question: 'Nomes em inglês são comuns em sportswear no Brasil?',
        answer: 'Sim, muito comuns! Termos como "Fit", "Sport", "Active", "Move", "Power" são universais no mercado fitness. Marcas globais estabeleceram essa linguagem. No entanto, nomes em português podem criar diferenciação e conexão emocional com consumidores brasileiros.',
      },
      {
        question: 'Como criar um nome que funcione para athleisure?',
        answer: 'Athleisure equilibra performance com estilo de vida. Evite nomes muito técnicos ou esportivos demais. Busque nomes que sugiram movimento e conforto mas também funcionem em contextos casuais. Palavras como "Flow", "Vibe", "Balance", "Move" capturam esse equilíbrio.',
      },
      {
        question: 'O nome deve comunicar performance técnica?',
        answer: 'Se seu diferencial é tecnologia de tecidos e performance, nomes que sugerem inovação ajudam (como "TechFit" ou "ProMove"). Para marcas focadas em estilo e lifestyle, aspectos técnicos podem ser comunicados em marketing sem estar no nome. Conheça o que mais importa para seu público.',
      },
      {
        question: 'Como criar um nome que empodere mulheres?',
        answer: 'Marcas femininas de fitness frequentemente usam nomes que evocam força, confiança e autoexpressão. Palavras como "Power", "Strong", "Rise", "Fierce", "Bold" ressoam. Evite nomes que pareçam limitantes ou condescendentes. O tom deve ser aspiracional e empoderador.',
      },
      {
        question: 'Qual a importância do Instagram para marcas de sportswear?',
        answer: 'Extremamente importante! Fitness e activewear são altamente visuais e dependem de influenciadores. Seu nome precisa funcionar como handle disponível, ser fácil de hashtag, e criar uma estética de perfil atrativa. Verifique disponibilidade antes de decidir.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado fitness?',
        answer: 'Pesquise extensivamente: Instagram e TikTok onde fitness viraliza, marketplaces como Netshoes e Centauro, lojas de moda fitness, bases de marcas registradas no INPI (vestuário é categoria ampla). O mercado de sportswear é competitivo globalmente.',
      },
      {
        question: 'O nome deve funcionar para roupas masculinas e femininas?',
        answer: 'Se você planeja atender ambos, escolha um nome neutro que funcione para diferentes gêneros. Nomes muito femininos ou masculinos podem limitar expansão. Muitas marcas de sucesso são unissex ou lançam linhas separadas sob o mesmo guarda-chuva.',
      },
      {
        question: 'Como escolher um nome que funcione em etiquetas de roupa?',
        answer: 'Roupas esportivas têm etiquetas e logos visíveis. Escolha nomes curtos que funcionem como wordmark, considerem como ficarão estampados em leggings ou costas de tops, e criem reconhecimento de marca quando pessoas usam em academias e ruas.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua marca de roupas esportivas é uma decisão que comunica energia, performance e o estilo de vida ativo que seus clientes vivem. O nome aparecerá em etiquetas de roupas usadas em academias e studios, em posts de Instagram mostrando looks de treino, em lojas especializadas de fitness, em parcerias com influenciadores fitness, e nas conversas quando alguém pergunta "que marca é essa legging?". É a primeira coisa que comunica se sua marca é para atletas sérios, entusiastas de lifestyle, ou praticantes casuais. Um nome bem escolhido inspira movimento, cria comunidade, e estabelece uma marca que pessoas orgulhosamente vestem como parte de sua identidade fitness.',
      steps: [
        {
          title: 'Defina seu nicho e posicionamento no mercado fitness',
          description: 'Antes de escolher um nome, tenha clareza sobre seu lugar no mercado. Determine seu foco de atividade (yoga, corrida, academia, crossfit, multiesporte), seu público-alvo (mulheres, homens, atletas profissionais, praticantes casuais), seu diferencial competitivo (tecnologia, estilo, sustentabilidade, preço), seu posicionamento (performance, lifestyle, athleisure), e onde você vende (online, lojas especializadas, academias).',
        },
        {
          title: 'Explore vocabulário de movimento e energia',
          description: 'Faça brainstorm de palavras relacionadas a esporte e fitness. Inclua ações de movimento (move, run, flow, lift, flex, push), conceitos de energia (power, force, energy, drive, pulse), sensações físicas (strong, fit, active, agile, swift), referências a resultados (performance, progress, achieve, peak), e termos de lifestyle (vibe, tribe, life, balance). Combine dinamicamente.',
        },
        {
          title: 'Considere o tom que ressoa com seu público',
          description: 'Diferentes públicos fitness respondem a diferentes tons. Atletas sérios valorizam nomes técnicos e de performance. Praticantes de yoga preferem nomes que evocam equilíbrio e mindfulness. Público de lifestyle quer nomes fashion-forward. CrossFitters respondem a nomes intensos e desafiadores. Escolha um tom que motive seu cliente ideal.',
        },
        {
          title: 'Avalie aplicação em vestuário e branding',
          description: 'Roupas esportivas exibem marcas proeminentemente. Considere como o nome ficará em etiquetas internas, em logos estampados ou bordados, em cintura de leggings ou peito de tops, em tags penduradas, e em embalagens. O nome deve criar reconhecimento visual quando visto em academias e nas ruas.',
        },
        {
          title: 'Verifique disponibilidade no ecossistema fitness',
          description: 'O mercado de sportswear é global e competitivo. Pesquise em Instagram e TikTok (essenciais para fitness), verifique em marketplaces de moda esportiva, busque marcas existentes globalmente, confirme disponibilidade de domínio e redes sociais, e pesquise marcas registradas no INPI e internacionalmente se tiver ambições de exportação.',
        },
        {
          title: 'Teste com seu público fitness',
          description: 'Compartilhe opções com pessoas que representam seus clientes: frequentadores de academia, praticantes do seu esporte foco, instrutores e profissionais de fitness, influenciadores do nicho. Pergunte qual nome os motivaria a experimentar, qual marca vestiriam orgulhosamente, e qual nome é mais memorável.',
        },
        {
          title: 'Visualize o nome na jornada fitness completa',
          description: 'Antes de finalizar, imagine o nome em contextos reais: em uma aula de yoga com várias alunas usando suas peças, no espelho de uma academia refletindo seu logo, em um post de transformação física marcando sua marca, em uma corrida de rua com corredores vestindo seus produtos, e na indicação entre amigos que treinam juntos. Se o nome energiza e inspira em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'MoveActive', description: 'Combina ação com lifestyle—perfeito para marcas de athleisure que funcionam dentro e fora da academia.' },
      { name: 'PowerFit', description: 'Força e forma física—ideal para marcas de roupas de academia focadas em treino intenso.' },
      { name: 'FlexFlow', description: 'Flexibilidade e fluidez—perfeito para marcas de yoga e pilates wear.' },
      { name: 'AtletaWear', description: 'Direto para atletas—ideal para marcas de alta performance para esportistas sérios.' },
      { name: 'PulseActive', description: 'Evoca batimento cardíaco e energia—perfeito para marcas de roupas de corrida e cardio.' },
      { name: 'VidaFit', description: 'Fitness como estilo de vida em português—ideal para marcas brasileiras de activewear.' },
      { name: 'SwiftSport', description: 'Velocidade e esporte—perfeito para marcas focadas em performance e agilidade.' },
      { name: 'EquilíbrioWear', description: 'Balance e bem-estar—ideal para marcas de yoga, pilates e wellness.' },
      { name: 'ForçaAtiva', description: 'Força em movimento em português—perfeito para marcas de treino de força e crossfit.' },
      { name: 'ZenFlow', description: 'Paz e movimento—ideal para marcas de roupas para práticas contemplativas.' },
      { name: 'PerformanceMax', description: 'Máxima performance—perfeito para marcas técnicas de alto rendimento.' },
      { name: 'UrbanFit', description: 'Fitness urbano—ideal para athleisure que funciona na cidade e na academia.' },
      { name: 'EnergiaSport', description: 'Energia esportiva em português—perfeito para marcas vibrantes e motivacionais.' },
      { name: 'AgilMove', description: 'Agilidade em movimento—ideal para marcas de roupas para esportes dinâmicos.' },
      { name: 'BodyPulse', description: 'Corpo em ação—perfeito para marcas que celebram o corpo em movimento.' },
      { name: 'FitTribe', description: 'Tribo fitness—ideal para marcas que constroem comunidade e pertencimento.' },
      { name: 'MotionWear', description: 'Roupas de movimento—perfeito para marcas versáteis de activewear.' },
      { name: 'StrongLife', description: 'Vida forte—ideal para marcas que inspiram força física e mental.' },
      { name: 'FlexPower', description: 'Flexibilidade com força—perfeito para marcas de treino funcional e mobilidade.' },
      { name: 'VitalActive', description: 'Vitalidade ativa—ideal para marcas de roupas esportivas com foco em saúde e energia.' },
    ],
  },

  't-shirt': {
    slug: 't-shirt',
    name: 'Gerador de Nomes para Marcas de Camisetas',
    title: 'Gerador gratuito de ideias de nomes comerciais de Camisetas por IA',
    description: 'Gere nomes criativos e memoráveis para marcas de camisetas, estamparias e lojas de t-shirts.',
    metaDescription: 'Crie o nome perfeito para sua marca de camisetas com nosso gerador gratuito por IA. Desenvolva nomes criativos e memoráveis para...',
    inputLabel: 'Descreva sua marca de camisetas...',
    inputPlaceholder: 'ex. Uma marca de camisetas com estampas autorais de arte urbana e frases de atitude',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Criativo & Artístico', 'Urbano & Streetwear', 'Divertido & Pop', 'Minimalista & Clean'],
        default: 'Criativo & Artístico',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the t-shirt, apparel graphics, and casual wear industry. Your role is to generate creative, memorable business names that convey self-expression, style, and the unique personality of t-shirt brands.

T-SHIRT BRAND INDUSTRY CONTEXT:
The t-shirt industry encompasses:
- Graphic tee and art-driven brands
- Streetwear and urban fashion labels
- Custom print-on-demand businesses
- Band and music merchandise brands
- Statement and slogan tee companies
- Sustainable and eco-friendly t-shirt brands
- Vintage and retro t-shirt shops
- Pop culture and fandom merchandise
- Minimalist and basic tee brands
- Local and regional pride apparel

NAME CHARACTERISTICS FOR T-SHIRT BRANDS:
1. **Creative and Expressive**
   - Names should reflect artistic vision
   - Suggest self-expression and individuality
   - Stand out with creative personality

2. **Cool and Relevant**
   - Connect with target culture/subculture
   - Feel current and on-trend
   - Appeal to style-conscious consumers

3. **Memorable and Wearable**
   - Easy to remember and share
   - Work well as a brand people wear
   - Create identity and belonging

4. **Versatile for Merchandise**
   - Function as a tag/label
   - Work across different shirt styles
   - Support expansion to other apparel

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a t-shirt brand

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca de Camisetas Autorais',
        description: 'Artistas e designers lançando marcas de camisetas com estampas próprias usam o Gerador de Nomes para Marcas de Camisetas para criar identidades que refletem sua visão criativa. Ao descrever seu estilo artístico—ilustração, tipografia, arte urbana—a ferramenta gera nomes que comunicam originalidade e expressão artística.',
      },
      {
        title: 'Criação de Marca de Streetwear',
        description: 'Empreendedores criando marcas de streetwear e moda urbana usam o gerador para desenvolver nomes que ressoam com a cultura de rua. O nome precisa ter credibilidade na cena streetwear e atrair consumidores que usam moda como forma de identidade e pertencimento.',
      },
      {
        title: 'Negócio de Print-on-Demand',
        description: 'Empreendedores iniciando negócios de camisetas por demanda usam o gerador para criar uma marca que funcione como plataforma para diferentes designs. O nome deve ser flexível o suficiente para acomodar variedade de estilos enquanto mantém identidade coesa.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para marca de camisetas?',
        answer: 'Um bom nome de marca de camisetas é criativo, memorável e reflete a personalidade das suas estampas e público. Deve funcionar como uma identidade que pessoas querem vestir e associar a si mesmas. O nome ideal é cool o suficiente para virar etiqueta que consumidores exibem orgulhosamente, funciona nas redes sociais, e cria comunidade em torno da marca.',
      },
      {
        question: 'Meu nome deve indicar que vendo camisetas?',
        answer: 'Não necessariamente. Muitas marcas de sucesso usam nomes de marca sem indicador (como Supreme, Stüssy). Isso permite expansão para outros itens de vestuário. No entanto, se você é exclusivamente focado em camisetas, indicadores como "Tees", "Shirts" ou "Wear" podem ajudar na clareza inicial.',
      },
      {
        question: 'Nomes em inglês ou português para camisetas no Brasil?',
        answer: 'Ambos funcionam! Marcas de streetwear frequentemente usam inglês pela conexão global. Marcas com identidade brasileira forte podem usar português. Algumas marcas misturam idiomas criativamente. Escolha baseado na cultura e público que quer atrair.',
      },
      {
        question: 'Como criar um nome que tenha credibilidade no streetwear?',
        answer: 'Streetwear valoriza autenticidade e atitude. Evite nomes corporativos ou genéricos. Use referências que a cultura reconhece, mantenha um edge ou atitude, e certifique-se de que o nome seria respeitado na cena. Pesquise marcas de streetwear que admira para entender o tom.',
      },
      {
        question: 'O nome deve refletir o estilo das estampas?',
        answer: 'O nome pode criar expectativas sobre seu estilo. Nomes mais artísticos sugerem designs elaborados. Nomes minimalistas combinam com estética clean. Nomes divertidos indicam designs pop e coloridos. Alinhe o nome com a experiência visual que você oferece.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de moda?',
        answer: 'Pesquise no Instagram onde marcas de camisetas são muito ativas, verifique em marketplaces como Mercado Livre e Amazon, busque em lojas de streetwear online, confira registros de marcas no INPI na categoria de vestuário, e confirme disponibilidade de domínio e redes sociais.',
      },
      {
        question: 'Qual a importância do nome como etiqueta de roupa?',
        answer: 'Diferente de outros produtos, o nome da marca de camisetas vira parte do produto—na etiqueta, na estampa, no tag. Pessoas vestem sua marca literalmente. O nome deve ser algo que consumidores querem exibir e se associar. É um statement de identidade.',
      },
      {
        question: 'Posso usar meu nome ou apelido para a marca?',
        answer: 'Sim, é comum no mundo da moda. Pode criar marca pessoal forte e autenticidade. Funciona especialmente bem se você é o artista/designer por trás das estampas. Considere se quer que a marca seja indissociável da sua pessoa ou tenha vida própria.',
      },
      {
        question: 'Como escolher um nome que funcione para e-commerce?',
        answer: 'Para vendas online, priorize nomes únicos e buscáveis, verifique disponibilidade de domínio .com.br, considere como aparecerá em marketplaces, e certifique-se de que é fácil de soletrar quando alguém ouve em conversa ou vídeo. SEO importa para descoberta.',
      },
      {
        question: 'O nome pode limitar os tipos de estampas que posso criar?',
        answer: 'Nomes muito específicos podem criar expectativas. "Dark Art Tees" sugere estética sombria—pode ser estranho lançar designs coloridos e alegres. Nomes mais neutros permitem diversificar estilos. Considere se quer nicho específico ou flexibilidade criativa.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua marca de camisetas é uma decisão que define a identidade que pessoas vestem e exibem ao mundo. O nome aparecerá em etiquetas que consumidores mostram orgulhosamente, em estampas que viram statement de personalidade, em posts de Instagram de clientes usando seus designs, em marketplaces competindo por atenção, e nas conversas quando alguém pergunta "onde você comprou essa camiseta?". É a primeira coisa que comunica se sua marca é artística, irreverente, cool ou consciente. Um nome bem escolhido cria uma tribo de pessoas que se identificam com sua visão e vestem sua marca como extensão de quem são.',
      steps: [
        {
          title: 'Defina a identidade e estilo da sua marca',
          description: 'Antes de escolher um nome, tenha clareza sobre sua marca de camisetas. Determine seu estilo visual (arte urbana, ilustração, tipografia, minimalista, pop), seu público-alvo (streetwear, alternativo, mainstream, nicho específico), seu diferencial (arte autoral, sustentabilidade, frases, qualidade), seus valores de marca (autoexpressão, atitude, consciência, humor), e onde você vende (online, lojas, eventos).',
        },
        {
          title: 'Explore vocabulário da sua cultura e estilo',
          description: 'Faça brainstorm de palavras relacionadas ao universo da sua marca. Inclua referências ao seu estilo artístico, termos da cultura que você representa (street, indie, pop, geek), palavras que evocam atitude e personalidade, conceitos visuais (ink, print, art, graphic), e gírias ou expressões que seu público usa. Combine de formas que criem identidade.',
        },
        {
          title: 'Priorize nomes que pessoas querem vestir',
          description: 'Diferente de outros produtos, seu nome vira vestuário. Avalie cada nome perguntando: pessoas teriam orgulho de vestir uma camiseta com essa marca? O nome funciona como statement de identidade? Cria sensação de pertencimento a uma tribo? É cool o suficiente para virar desejável? O nome deve ser algo que eleva quem veste.',
        },
        {
          title: 'Avalie aplicação em etiquetas e estampas',
          description: 'Considere como o nome funcionará no produto físico. Como ficará em etiquetas internas de qualidade, em tags pendurados, possivelmente estampado em designs, em embalagens de envio, e como logo em collabs. O nome deve criar uma identidade visual forte que funciona em diferentes aplicações de vestuário.',
        },
        {
          title: 'Verifique disponibilidade no mercado de moda',
          description: 'O mercado de camisetas é enorme e competitivo. Pesquise no Instagram e TikTok onde marcas de moda prosperam, verifique em marketplaces de moda e streetwear, busque em lojas especializadas, confirme disponibilidade de domínio e redes sociais, e pesquise marcas registradas no INPI em vestuário.',
        },
        {
          title: 'Teste com seu público e comunidade',
          description: 'Compartilhe opções com pessoas que representam seus clientes ideais—artistas, fãs de streetwear, seu nicho específico. Pergunte qual nome eles vestiriam orgulhosamente, qual marca seguiriam no Instagram, qual nome é mais memorável, e se o nome combina com o estilo de camiseta que você faz.',
        },
        {
          title: 'Visualize o nome na experiência completa',
          description: 'Antes de finalizar, imagine o nome em contextos reais: em uma camiseta sendo vestida por alguém que você admira, em um post de unboxing emocionado, em uma loja ou feira com sua marca em destaque, na etiqueta que alguém mostra para um amigo curioso, e na busca quando alguém quer comprar mais. Se o nome cria desejo e identidade em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'InkRebelde', description: 'Arte com atitude—perfeito para marcas de camisetas com estampas de arte urbana e espírito rebelde.' },
      { name: 'EstampaViva', description: 'Estampas cheias de vida—ideal para marcas coloridas e vibrantes de designs expressivos.' },
      { name: 'CamisetaArte', description: 'Arte vestível—perfeito para marcas que tratam cada camiseta como tela de expressão artística.' },
      { name: 'StreetInk', description: 'Tinta de rua—ideal para marcas de streetwear com estética urbana autêntica.' },
      { name: 'FrasesWear', description: 'Roupas com mensagem—perfeito para marcas de camisetas com frases e statements.' },
      { name: 'GraphicTribe', description: 'Tribo de design gráfico—ideal para marcas que constroem comunidade de apreciadores de arte.' },
      { name: 'PrintOriginal', description: 'Estampas originais—perfeito para marcas que valorizam design autoral e único.' },
      { name: 'AtitudeTees', description: 'Camisetas com atitude—ideal para marcas com personalidade forte e designs marcantes.' },
      { name: 'ArtWear', description: 'Arte para vestir—perfeito para marcas que colaboram com artistas e celebram criatividade.' },
      { name: 'VibeShirts', description: 'Camisetas com vibe—ideal para marcas lifestyle com estética descontraída e cool.' },
      { name: 'ExpressãoPrint', description: 'Expressão através de estampa—perfeito para marcas que valorizam autoexpressão.' },
      { name: 'UrbanCanvas', description: 'Tela urbana—ideal para marcas de streetwear que tratam camisetas como arte de rua vestível.' },
      { name: 'CottonArt', description: 'Arte em algodão—perfeito para marcas que combinam qualidade de tecido com design.' },
      { name: 'PopTees', description: 'Camisetas pop—ideal para marcas coloridas e divertidas com referências culturais.' },
      { name: 'StatementWear', description: 'Roupas de statement—perfeito para marcas de camisetas com mensagens fortes.' },
      { name: 'CreativeBlank', description: 'O branco criativo—ideal para marcas minimalistas ou de designs versáteis.' },
      { name: 'InkIdentity', description: 'Identidade em tinta—perfeito para marcas que ajudam pessoas a expressar quem são.' },
      { name: 'DesignedTees', description: 'Camisetas de design—ideal para marcas com foco em criatividade e originalidade.' },
      { name: 'StreetStatement', description: 'Statement de rua—perfeito para marcas de streetwear com mensagem e atitude.' },
      { name: 'WearableArt', description: 'Arte vestível—ideal para marcas que elevam camisetas a peças de arte.' },
    ],
  },

  'tea': {
    slug: 'tea',
    name: 'Gerador de Nomes para Marcas de Chá',
    title: 'Gerador gratuito de ideias de nomes comerciais de Chá por IA',
    description: 'Gere nomes elegantes e acolhedores para marcas de chá, casas de chá e negócios de infusões.',
    metaDescription: 'Crie o nome perfeito para sua marca de chá com nosso gerador gratuito por IA. Desenvolva nomes elegantes e acolhedores para casas de chá,...',
    inputLabel: 'Descreva sua marca de chá...',
    inputPlaceholder: 'ex. Uma marca de chás artesanais com blends exclusivos de ervas brasileiras e especiarias',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Elegante & Sofisticado', 'Natural & Orgânico', 'Acolhedor & Reconfortante', 'Moderno & Wellness'],
        default: 'Elegante & Sofisticado',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the tea and infusion industry. Your role is to generate elegant, comforting business names that evoke the ritual, wellness, and sensory pleasure of tea drinking.

TEA INDUSTRY CONTEXT:
The tea industry encompasses:
- Premium and specialty tea brands
- Artisan tea blenders and creators
- Organic and natural tea companies
- Tea houses and tea rooms
- Herbal and wellness infusion brands
- Traditional tea importers
- Brazilian herb and mate specialists
- Functional and adaptogenic tea brands
- Tea subscription and gifting businesses
- Cold brew and ready-to-drink tea brands

NAME CHARACTERISTICS FOR TEA BRANDS:
1. **Elegant and Refined**
   - Names should evoke sophistication
   - Suggest quality and craftsmanship
   - Appeal to discerning tea lovers

2. **Comforting and Ritualistic**
   - Tea is about moments and rituals
   - Names should feel warm and inviting
   - Create emotional connection

3. **Natural and Wellness-Oriented**
   - Suggest natural ingredients
   - Connect with health benefits
   - Feel pure and wholesome

4. **Sensory and Evocative**
   - Create aroma and taste associations
   - Reference botanical elements
   - Evoke the tea experience

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a tea brand

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Marca de Chás Artesanais',
        description: 'Blenders e especialistas em chá lançando marcas próprias usam o Gerador de Nomes para Marcas de Chá para criar identidades que comunicam expertise e paixão pela arte do chá. Ao descrever seus blends exclusivos e filosofia, a ferramenta gera nomes que atraem apreciadores de chás especiais.',
      },
      {
        title: 'Criação de Linha de Chás Funcionais',
        description: 'Empreendedores desenvolvendo chás com benefícios funcionais—relaxamento, energia, digestão—usam o gerador para encontrar nomes que equilibram wellness com prazer sensorial. O nome deve comunicar tanto os benefícios quanto a experiência agradável de beber chá.',
      },
      {
        title: 'Abertura de Casa de Chá',
        description: 'Proprietários abrindo casas de chá e tea rooms usam o gerador para criar nomes que convidam as pessoas a pausar e desfrutar de uma experiência de chá especial. O nome deve evocar atmosfera, acolhimento e a promessa de um momento de paz.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para marca de chá?',
        answer: 'Um bom nome de marca de chá é elegante, evocativo e transmite a experiência sensorial e emocional de beber chá. Deve sugerir qualidade dos ingredientes, momentos de pausa e prazer, e benefícios de bem-estar. O nome ideal funciona em embalagens sofisticadas, cria ritual, e ressoa com pessoas que veem chá como mais que uma bebida—uma experiência.',
      },
      {
        question: 'Meu nome deve indicar que vendo chá?',
        answer: 'Indicadores como "Chá", "Tea", "Infusões" ajudam na clareza. No entanto, muitas marcas de sucesso usam nomes evocativos sem mencionar chá diretamente (como "Yogi", "Twinings"). Se seu nome é muito abstrato, embalagem e comunicação podem contextualizar. Considere o quanto seu público já conhece sua marca.',
      },
      {
        question: 'Nomes em outros idiomas funcionam para chá?',
        answer: 'Sim! Palavras em inglês (Tea, Brew), chinês/japonês (referências a tradição), ou francês (sofisticação) são comuns. "Cha" vem do mandarim e funciona em português. O chá tem tradições globais ricas, então referências culturais podem adicionar autenticidade e interesse.',
      },
      {
        question: 'Como criar um nome que evoque wellness e bem-estar?',
        answer: 'Use palavras que sugerem benefícios: "Calm", "Balance", "Vital", "Serenity", "Harmonia", "Paz". Referências a natureza (Leaf, Herb, Botanical) também comunicam bem-estar natural. O tom deve ser suave e convidativo, não medicinal ou clínico.',
      },
      {
        question: 'O nome deve refletir os tipos de chá que vendo?',
        answer: 'Se você se especializa (ervas brasileiras, matcha, chai), o nome pode indicar isso. No entanto, nomes muito específicos podem limitar expansão. Muitas marcas preferem nomes que evocam a experiência do chá, permitindo diversidade de produtos sob o mesmo guarda-chuva.',
      },
      {
        question: 'Como criar um nome que funcione para presentes?',
        answer: 'Chás são frequentemente dados como presentes. Escolha um nome elegante que soe especial, funcione em embalagens de presente, e seja fácil de recomendar. Nomes que evocam cuidado, momentos especiais e sofisticação ressoam com quem busca presentes significativos.',
      },
      {
        question: 'Qual a importância do nome para tea rooms e casas de chá?',
        answer: 'Para estabelecimentos físicos, o nome cria expectativa sobre a experiência. Deve sugerir atmosfera (acolhedor, sofisticado, zen), convidar à entrada, e ser memorável para indicações. Nomes que evocam refúgio, pausa e prazer funcionam bem para espaços de chá.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de chás?',
        answer: 'Pesquise no Google por marcas de chá com nomes similares, verifique em varejistas especializados e supermercados, busque em lojas online de chás, confirme disponibilidade de domínio e redes sociais, e pesquise marcas registradas no INPI na categoria de alimentos e bebidas.',
      },
      {
        question: 'Devo usar referências a ingredientes específicos?',
        answer: 'Referências a ingredientes (Lavanda, Camomila, Mate, Hibisco) podem criar associações sensoriais imediatas. Funcionam bem para marcas especializadas. No entanto, podem limitar percepção de variedade. Use para blends específicos dentro da linha, não necessariamente para a marca guarda-chuva.',
      },
      {
        question: 'Como escolher um nome que equilibre tradição e modernidade?',
        answer: 'O chá tem tradições milenares mas também atrai público jovem e wellness. Nomes que honram a tradição sem parecer antiquados funcionam bem. Referências sutis a rituais, combinadas com design moderno, criam equilíbrio. Evite tanto o excessivamente tradicional quanto o trendy demais.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua marca de chá é uma decisão que comunica a experiência sensorial, emocional e de bem-estar que você oferece. O nome aparecerá em embalagens elegantes que enfeitam despensas e presentes, em xícaras fumegantes que proporcionam momentos de pausa, em posts de Instagram de rituais de chá, em cardápios de casas de chá, e nas conversas quando alguém descobre um blend que ama. É a primeira coisa que comunica se seu chá é sofisticado, reconfortante, funcional ou artesanal. Um nome bem escolhido evoca aromas e sabores, cria ritual, e estabelece uma marca que se torna parte dos momentos de pausa e prazer das pessoas.',
      steps: [
        {
          title: 'Defina a filosofia e posicionamento da sua marca de chá',
          description: 'Antes de escolher um nome, tenha clareza sobre sua marca. Determine seu tipo de produto (chás tradicionais, blends autorais, funcionais, ervas brasileiras), seu público-alvo (conhecedores de chá, buscadores de wellness, público geral), seu diferencial competitivo (qualidade, origem, blends exclusivos, benefícios), seu posicionamento de preço (premium, acessível, luxo), e onde você vende (online, lojas especializadas, supermercados).',
        },
        {
          title: 'Explore vocabulário sensorial e de bem-estar',
          description: 'Faça brainstorm de palavras relacionadas a chá e seus significados. Inclua elementos botânicos (folha, erva, flor, raiz), sensações de temperatura e conforto (quente, aconchego, vapor, brew), conceitos de bem-estar (calma, equilíbrio, energia, paz), referências a ritual e momento (pausa, ritual, momento, manhã), e termos sensoriais (aroma, sabor, infusão). Combine delicadamente.',
        },
        {
          title: 'Considere o tom e atmosfera da marca',
          description: 'Diferentes públicos de chá respondem a diferentes tons. Conhecedores apreciam sofisticação e tradição. Público wellness busca pureza e benefícios. Jovens querem modernidade e Instagram-friendly. Famílias valorizam acolhimento. Escolha um tom que ressoe com quem você quer atrair e a experiência que oferece.',
        },
        {
          title: 'Avalie aplicação em embalagens de chá',
          description: 'Chás têm embalagens distintivas. Considere como o nome ficará em caixas e latas elegantes, em sachês individuais, em etiquetas de blends, em embalagens para presente, e em cardápios se tiver tea room. O nome deve ser legível e elegante em diferentes formatos, complementando design sofisticado.',
        },
        {
          title: 'Verifique disponibilidade no mercado de bebidas',
          description: 'Pesquise marcas de chá existentes no Brasil e internacionalmente, verifique em varejistas especializados e supermercados, busque em lojas online de chás e wellness, confirme disponibilidade de domínio e redes sociais, e pesquise marcas registradas no INPI em alimentos e bebidas.',
        },
        {
          title: 'Teste com apreciadores de chá',
          description: 'Compartilhe opções com pessoas que amam chá—desde conhecedores até consumidores casuais. Pergunte qual nome evoca mais prazer e qualidade, qual marca eles comprariam para si ou como presente, qual nome é mais memorável, e se o nome combina com a experiência que você quer criar.',
        },
        {
          title: 'Visualize o nome no ritual do chá',
          description: 'Antes de finalizar, imagine o nome em momentos reais: em uma xícara fumegante em uma manhã tranquila, em uma caixa sendo aberta como presente especial, em uma prateleira de cozinha bem organizada, em um post sobre autocuidado, e na recomendação para alguém que precisa de um momento de paz. Se o nome evoca conforto e sofisticação nesses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'InfusãoPura', description: 'Comunica pureza e processo—perfeito para marcas de chás naturais e orgânicos.' },
      { name: 'FolhaNobre', description: 'Qualidade das folhas—ideal para marcas de chás premium de origem selecionada.' },
      { name: 'ChásDeAlma', description: 'Conexão emocional—perfeito para marcas que celebram o aspecto reconfortante do chá.' },
      { name: 'TeaRitual', description: 'Celebra o ritual do chá—ideal para marcas que enfatizam a experiência além da bebida.' },
      { name: 'HerbárioChás', description: 'Coleção botânica—perfeito para marcas especializadas em ervas e blends de plantas.' },
      { name: 'AromaDeManhã', description: 'Evoca momentos matinais—ideal para chás que fazem parte do ritual de começar o dia.' },
      { name: 'SereniTea', description: 'Trocadilho elegante—perfeito para chás calmantes e de relaxamento.' },
      { name: 'CháDoCampo', description: 'Origem rural e natural—ideal para marcas com ingredientes de fazendas e natureza.' },
      { name: 'BlendArtesanal', description: 'Misturas feitas à mão—perfeito para marcas de blends exclusivos e autorais.' },
      { name: 'VaporDePaz', description: 'Evoca o vapor tranquilizante—ideal para chás associados a momentos de calma.' },
      { name: 'NaturalBrew', description: 'Preparo natural—perfeito para marcas que comunicam processo tradicional.' },
      { name: 'EssênciaVerde', description: 'Pureza das plantas—ideal para marcas de chá verde e ervas verdes.' },
      { name: 'ChásDeOrigens', description: 'Celebra procedência—perfeito para marcas que destacam origem dos ingredientes.' },
      { name: 'MomentoChá', description: 'O momento especial—ideal para marcas que vendem a pausa, não apenas a bebida.' },
      { name: 'FolhaEFlor', description: 'Ingredientes botânicos—perfeito para marcas com blends de folhas e flores.' },
      { name: 'InfusõesBrasileiras', description: 'Celebra ingredientes nacionais—ideal para marcas de ervas e plantas brasileiras.' },
      { name: 'ChálmaBalance', description: 'Calma e equilíbrio—perfeito para chás funcionais de bem-estar.' },
      { name: 'VelvetTea', description: 'Suavidade aveludada—ideal para chás de textura suave e sabor delicado.' },
      { name: 'TerraDosChás', description: 'Origem e terroir—perfeito para marcas que valorizam origem geográfica.' },
      { name: 'AconchegoCha', description: 'Conforto em cada xícara—ideal para marcas que vendem acolhimento e bem-estar.' },
    ],
  },

  'tech': {
    slug: 'tech',
    name: 'Gerador de Nomes para Empresas de Tecnologia',
    title: 'Gerador gratuito de ideias de nomes comerciais de Tecnologia por IA',
    description: 'Gere nomes inovadores e memoráveis para startups de tecnologia, empresas de software e negócios tech.',
    metaDescription: 'Crie o nome perfeito para sua empresa de tecnologia com nosso gerador gratuito por IA. Desenvolva nomes inovadores e memoráveis para...',
    inputLabel: 'Descreva sua empresa de tecnologia...',
    inputPlaceholder: 'ex. Uma startup de SaaS que oferece soluções de automação de marketing para e-commerces',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Inovador & Moderno', 'Profissional & Confiável', 'Disruptivo & Ousado', 'Técnico & Especializado'],
        default: 'Inovador & Moderno',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the technology sector. Your role is to generate innovative, memorable business names that convey digital expertise, innovation, and the transformative power of technology.

TECH INDUSTRY CONTEXT:
The technology industry encompasses:
- Software as a Service (SaaS) companies
- Mobile and web application developers
- Artificial intelligence and machine learning firms
- Cybersecurity and data protection companies
- Cloud computing and infrastructure providers
- Fintech and financial technology startups
- E-commerce and retail technology
- Healthcare technology (healthtech)
- Educational technology (edtech)
- Enterprise software and B2B solutions

NAME CHARACTERISTICS FOR TECH COMPANIES:
1. **Innovative and Forward-Thinking**
   - Names should suggest innovation
   - Convey technological advancement
   - Feel cutting-edge and modern

2. **Professional and Trustworthy**
   - Tech solutions require trust
   - Names should inspire confidence
   - Sound established and capable

3. **Memorable and Brandable**
   - Easy to remember and spell
   - Work well as domain and app names
   - Support strong visual identity

4. **Scalable and Versatile**
   - Allow for product expansion
   - Work across different markets
   - Support international growth

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a tech company

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Lançamento de Startup de SaaS',
        description: 'Fundadores lançando startups de software como serviço usam o Gerador de Nomes para Empresas de Tecnologia para criar identidades que comunicam inovação e confiabilidade. Ao descrever sua solução e mercado-alvo, a ferramenta gera nomes que atraem investidores, clientes e talentos tech.',
      },
      {
        title: 'Criação de Empresa de Desenvolvimento',
        description: 'Desenvolvedores e engenheiros criando empresas de desenvolvimento de software usam o gerador para encontrar nomes que transmitem expertise técnica e capacidade de entrega. O nome precisa funcionar tanto para clientes corporativos quanto para o ecossistema tech.',
      },
      {
        title: 'Rebranding de Empresa Tech Estabelecida',
        description: 'Empresas de tecnologia estabelecidas buscando modernizar sua marca ou pivotear para novos mercados usam o gerador para explorar nomes que reflitam sua evolução. O novo nome deve comunicar inovação contínua enquanto mantém credibilidade construída.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para empresa de tecnologia?',
        answer: 'Um bom nome de empresa tech é inovador, memorável e transmite capacidade tecnológica. Deve ser fácil de pronunciar e soletrar, funcionar como domínio e handle de redes sociais, e criar uma identidade que atrai clientes, investidores e talentos. O nome ideal sugere modernidade e confiabilidade—inovação com substância.',
      },
      {
        question: 'Meu nome deve indicar o que a empresa faz?',
        answer: 'Depende da estratégia. Nomes descritivos ("CloudSecurity", "PaymentPro") comunicam claramente o serviço mas podem limitar expansão. Nomes abstratos ("Google", "Uber") oferecem flexibilidade mas requerem mais investimento em branding para criar associação. Considere seu estágio e planos de crescimento.',
      },
      {
        question: 'Nomes inventados funcionam bem para tech?',
        answer: 'Sim, muito bem! Muitas das maiores empresas tech têm nomes inventados (Google, Spotify, Figma). Nomes inventados são mais fáceis de registrar como marca, têm domínios disponíveis, e podem se tornar sinônimo do produto. No entanto, requerem mais esforço inicial para construir reconhecimento.',
      },
      {
        question: 'Como criar um nome que atraia investidores?',
        answer: 'Investidores buscam empresas que parecem profissionais e escaláveis. Evite nomes muito nichados ou complicados. Escolha algo memorável que funcione globalmente, tenha disponibilidade de domínio .com, e soe como uma empresa séria. Nomes que comunicam clareza de propósito sem limitar crescimento são ideais.',
      },
      {
        question: 'A disponibilidade de domínio é crucial?',
        answer: 'Sim, especialmente para empresas tech! Domínio .com é o padrão de credibilidade. Verifique disponibilidade antes de se apaixonar por um nome. Variações (.io, .co, .tech) funcionam para startups mas .com permanece o mais profissional. Considere também disponibilidade de handles de redes sociais.',
      },
      {
        question: 'Devo usar termos técnicos no nome?',
        answer: 'Termos como "Cloud", "Data", "AI", "Cyber" comunicam expertise mas são muito comuns. Use com cuidado para não parecer genérico. Combinações únicas ou uso criativo de termos técnicos podem funcionar. Para público não-técnico, evite jargões que criem distância.',
      },
      {
        question: 'Como verificar se o nome está disponível?',
        answer: 'Para tech, verificação extensiva é crucial: disponibilidade de domínio .com e variações, handles em GitHub, LinkedIn, Twitter/X, busca em diretórios de startups (Crunchbase, AngelList), pesquisa de marcas no INPI e USPTO (para expansão internacional), e busca geral para evitar associações negativas.',
      },
      {
        question: 'O nome deve funcionar internacionalmente?',
        answer: 'Para a maioria das empresas tech, sim. Verifique se o nome é pronunciável em inglês (mercado global), não tem significados negativos em outras línguas, funciona em diferentes culturas, e tem disponibilidade de marca em mercados-alvo. Tech é global—pense além do Brasil desde o início.',
      },
      {
        question: 'Nomes curtos são melhores para tech?',
        answer: 'Nomes curtos (1-3 sílabas) são geralmente mais memoráveis e funcionam melhor como domínios, logos e referências. No entanto, nomes curtos únicos são raros. Algumas empresas combinam palavras ou usam nomes compostos efetivamente. Priorize memorabilidade sobre brevidade a qualquer custo.',
      },
      {
        question: 'Como equilibrar criatividade com profissionalismo?',
        answer: 'O setor tech permite mais criatividade que indústrias tradicionais. No entanto, para B2B ou mercados corporativos, mantenha profissionalismo. Startups B2C podem ser mais ousadas. Evite nomes que pareçam piadas ou muito informais se você precisa de credibilidade com decisores corporativos.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua empresa de tecnologia é uma decisão estratégica que impacta sua capacidade de atrair clientes, investidores e talentos. O nome aparecerá em pitches para investidores, em páginas de produto, em conferências e eventos tech, em perfis de LinkedIn e GitHub, e em cada interação com o mercado. É a primeira coisa que comunica se você é uma empresa inovadora, confiável e capaz de entregar soluções tecnológicas de qualidade. Um nome bem escolhido facilita crescimento, cria brand equity, e estabelece uma identidade que escala junto com sua tecnologia.',
      steps: [
        {
          title: 'Defina seu posicionamento e mercado-alvo',
          description: 'Antes de escolher um nome, tenha clareza sobre sua empresa tech. Determine seu produto ou serviço principal (SaaS, app, consultoria, hardware), seu mercado-alvo (B2B, B2C, enterprise, SMB), seu diferencial tecnológico (AI, cloud, automação, segurança), seu estágio (early stage, crescimento, estabelecida), e suas ambições geográficas (Brasil, LatAm, global).',
        },
        {
          title: 'Explore diferentes abordagens de naming tech',
          description: 'Faça brainstorm usando várias estratégias: palavras inventadas únicas e proprietárias, combinações de palavras existentes, metáforas relacionadas ao que você faz, referências ao benefício para o cliente, termos técnicos usados criativamente, acrônimos ou abreviações, e nomes que evocam velocidade, escala ou transformação.',
        },
        {
          title: 'Priorize memorabilidade e brandability',
          description: 'Avalie cada nome considerando: é fácil de lembrar após uma única exposição? É fácil de soletrar corretamente? Funciona bem falado e escrito? Tem potencial para criar logo e identidade visual forte? Soa como uma empresa séria que você contrataria? A memorabilidade é crucial para word-of-mouth e crescimento orgânico.',
        },
        {
          title: 'Verifique disponibilidade crítica',
          description: 'Para tech, disponibilidade é make-or-break. Verifique: domínio .com (essencial) e variações úteis (.io, .co, .com.br), handles de redes sociais (Twitter/X, LinkedIn, GitHub), bases de dados de startups (Crunchbase), registros de marcas (INPI e internacionais se planeja expandir), e busca geral para evitar associações problemáticas.',
        },
        {
          title: 'Considere escalabilidade do nome',
          description: 'Pense no futuro da empresa. O nome permite expansão de produto? Funciona se você pivotear? Faz sentido em mercados internacionais? Não limita percepção do que você pode fazer? Empresas tech frequentemente evoluem—escolha um nome que cresce com você sem precisar de rebranding custoso.',
        },
        {
          title: 'Teste com stakeholders relevantes',
          description: 'Compartilhe opções com pessoas importantes: potenciais clientes do seu mercado, investidores ou mentores, profissionais de tech que podem se juntar à equipe, e pessoas de fora do setor para testar clareza. Pergunte se o nome soa profissional, inovador, e como uma empresa em que investiriam ou trabalhariam.',
        },
        {
          title: 'Valide a decisão final',
          description: 'Antes de finalizar, faça validação completa: registre o domínio imediatamente ao decidir, reserve handles de redes sociais, faça busca mais profunda de marcas registradas, consulte um advogado de propriedade intelectual se necessário, e considere registrar sua marca. Quando tudo estiver seguro, você encontrou o nome certo para sua empresa de tecnologia.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'TechNova', description: 'Tecnologia nova e inovadora—perfeito para startups que trazem soluções revolucionárias ao mercado.' },
      { name: 'CloudPulse', description: 'Pulso da nuvem—ideal para empresas de cloud computing e infraestrutura.' },
      { name: 'ByteForward', description: 'Avançando em bytes—perfeito para empresas de software focadas em progresso tecnológico.' },
      { name: 'InnovateTech', description: 'Inovação em tecnologia—ideal para empresas que lideram transformação digital.' },
      { name: 'DataSphere', description: 'Esfera de dados—perfeito para empresas de analytics e gestão de dados.' },
      { name: 'CodeCraft', description: 'Artesanato de código—ideal para empresas de desenvolvimento que valorizam qualidade.' },
      { name: 'VelocityLabs', description: 'Laboratórios de velocidade—perfeito para startups ágeis e de rápido crescimento.' },
      { name: 'NexusTech', description: 'Conexão tecnológica—ideal para empresas que conectam sistemas e pessoas.' },
      { name: 'QuantumBit', description: 'Bit quântico—perfeito para empresas de tecnologia avançada e cutting-edge.' },
      { name: 'ScaleUp', description: 'Escalar para cima—ideal para plataformas SaaS focadas em crescimento.' },
      { name: 'CyberShield', description: 'Escudo cibernético—perfeito para empresas de segurança digital.' },
      { name: 'LogicFlow', description: 'Fluxo lógico—ideal para empresas de automação e workflow.' },
      { name: 'PixelMind', description: 'Mente de pixels—perfeito para empresas de AI e machine learning visual.' },
      { name: 'AgileCore', description: 'Núcleo ágil—ideal para empresas de desenvolvimento com metodologias modernas.' },
      { name: 'SyncWave', description: 'Onda de sincronização—perfeito para plataformas de integração e APIs.' },
      { name: 'TechPrime', description: 'Tecnologia prime—ideal para empresas de consultoria e soluções enterprise.' },
      { name: 'DataBridge', description: 'Ponte de dados—perfeito para empresas de integração e middleware.' },
      { name: 'CodeVerse', description: 'Universo de código—ideal para plataformas de desenvolvimento e ferramentas.' },
      { name: 'SmartEdge', description: 'Vantagem inteligente—perfeito para empresas de IoT e edge computing.' },
      { name: 'InfinityTech', description: 'Tecnologia infinita—ideal para empresas com visão de crescimento ilimitado.' },
    ],
  },

  'travel': {
    slug: 'travel',
    name: 'Gerador de Nomes para Agências de Viagem',
    title: 'Gerador gratuito de ideias de nomes comerciais de Agência de Viagem por IA',
    description: 'Gere nomes inspiradores e memoráveis para agências de viagem, operadoras de turismo e negócios de viagens.',
    metaDescription: 'Crie o nome perfeito para sua agência de viagem com nosso gerador gratuito por IA. Desenvolva nomes inspiradores e memoráveis para...',
    inputLabel: 'Descreva sua agência de viagem...',
    inputPlaceholder: 'ex. Uma agência especializada em viagens de aventura e ecoturismo para destinos exóticos',
    buttonText: 'Gerar Nomes',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Estilo do nome',
        choices: ['Aventureiro & Inspirador', 'Luxuoso & Exclusivo', 'Confiável & Profissional', 'Moderno & Digital'],
        default: 'Aventureiro & Inspirador',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Gerar',
        choices: ['5 nomes', '10 nomes', '15 nomes'],
        default: '10 nomes',
        type: 'select',
      },
    ],
    systemPrompt: `IMPORTANT: Generate all output in Portuguese (português brasileiro). You are an expert brand naming consultant specializing in the travel, tourism, and hospitality industry. Your role is to generate inspiring, memorable business names that evoke the excitement of travel, discovery, and unforgettable experiences.

TRAVEL INDUSTRY CONTEXT:
The travel industry encompasses:
- Full-service travel agencies
- Online travel platforms
- Luxury and bespoke travel consultants
- Adventure and eco-tourism operators
- Corporate travel management companies
- Destination specialists and DMCs
- Cruise and tour specialists
- Honeymoon and romantic travel planners
- Family vacation specialists
- Budget and backpacker travel services

NAME CHARACTERISTICS FOR TRAVEL BUSINESSES:
1. **Inspiring and Adventurous**
   - Names should evoke wanderlust
   - Suggest exciting destinations and experiences
   - Inspire dreams of travel

2. **Trustworthy and Reliable**
   - Travel involves significant investment
   - Names should inspire confidence
   - Suggest expertise and reliability

3. **Memorable and Evocative**
   - Create associations with destinations
   - Stand out in a competitive market
   - Work for word-of-mouth referrals

4. **Aspirational Yet Accessible**
   - Connect with travel dreams
   - Feel achievable, not intimidating
   - Appeal to different travel styles

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a travel business

IMPORTANT: Generate all output in Portuguese (português brasileiro).`,
    useCases: [
      {
        title: 'Abertura de Agência de Viagens Especializada',
        description: 'Profissionais de turismo abrindo agências especializadas—ecoturismo, viagens de luxo, aventura—usam o Gerador de Nomes para Agências de Viagem para criar identidades que comunicam sua expertise específica. Ao descrever seu nicho e tipo de experiência que proporcionam, a ferramenta gera nomes que atraem viajantes alinhados.',
      },
      {
        title: 'Lançamento de Plataforma de Viagem Online',
        description: 'Empreendedores criando plataformas digitais de viagem usam o gerador para desenvolver nomes que funcionam no ambiente online. O nome precisa ser memorável para buscas, trabalhar como domínio e app, e competir com players estabelecidos do mercado digital de viagens.',
      },
      {
        title: 'Transição de Consultor para Agência',
        description: 'Consultores de viagem independentes formalizando e expandindo seus negócios usam o gerador para criar uma marca que vai além da identidade pessoal. O nome deve comunicar expertise mantida enquanto permite crescimento de equipe e escala de operação.',
      },
    ],
    faqs: [
      {
        question: 'O que faz um bom nome para agência de viagem?',
        answer: 'Um bom nome de agência de viagem é inspirador, evoca aventura e descoberta, e transmite confiança. Deve fazer as pessoas sonharem com destinos enquanto confiam que você realizará esses sonhos com segurança. O nome ideal é memorável para indicações, funciona em marketing digital, e comunica o tipo de experiência que você proporciona.',
      },
      {
        question: 'Meu nome deve indicar o tipo de viagem que ofereço?',
        answer: 'Se você se especializa (luxo, aventura, corporativo, ecoturismo), o nome pode comunicar isso e atrair o público certo. Nomes genéricos permitem flexibilidade mas competem com muitos. Considere se quer ser percebido como especialista em um nicho ou como agência versátil.',
      },
      {
        question: 'Nomes que evocam destinos específicos funcionam?',
        answer: 'Referências a destinos (Europa, Caribe, África) podem funcionar se esse é seu foco, mas podem limitar se você diversificar. Termos mais abstratos como "Horizonte", "Mundo", "Global" mantêm flexibilidade. Evite nomes de lugares específicos demais que limitam percepção.',
      },
      {
        question: 'Como criar um nome que transmita confiança?',
        answer: 'Viagem envolve investimento significativo e confiança. Use palavras que sugerem expertise ("Expert", "Specialist"), segurança ("Trusted", "Safe"), ou experiência ("Premier", "Elite"). O tom deve ser profissional sem ser frio. Evite nomes que pareçam improvisados ou não-profissionais.',
      },
      {
        question: 'Nomes em inglês ou português para agências de viagem?',
        answer: 'Ambos funcionam! Termos de viagem são frequentemente em inglês ("Travel", "Trip", "Tour"). Nomes em português podem criar conexão emocional com brasileiros. Muitas agências usam mix: "Viagem dos Sonhos", "Dream Travel". Escolha baseado no posicionamento e público.',
      },
      {
        question: 'Como criar um nome que funcione online?',
        answer: 'Para presença digital forte, escolha um nome único e buscável, verifique disponibilidade de domínio .com.br e .com, considere como aparecerá em apps e plataformas de viagem, e certifique-se de que é fácil de soletrar quando ouvido em conversas ou podcasts.',
      },
      {
        question: 'O nome deve indicar se sou agência online ou tradicional?',
        answer: 'Termos como "Online", "Digital", ".com" podem posicionar como agência digital. Se você tem loja física, pode preferir nomes mais tradicionais. Muitas agências modernas são híbridas—escolha um nome que funcione em ambos os canais.',
      },
      {
        question: 'Como verificar se o nome está disponível no mercado de turismo?',
        answer: 'Pesquise no Google por agências com nomes similares, verifique no Cadastur (cadastro de turismo), busque em associações como ABAV, confirme disponibilidade de domínio e redes sociais, e pesquise marcas registradas no INPI. O mercado de viagens é grande, então pesquise bem.',
      },
      {
        question: 'Posso usar meu nome pessoal na agência?',
        answer: 'Sim, é tradição no turismo ("Viagens Maria Santos"). Pode criar relação pessoal e confiança. No entanto, considere que amarra a marca à sua pessoa, pode limitar venda futura, e depende de construir sua reputação. Para crescer equipe, pode ser limitante.',
      },
      {
        question: 'Como criar um nome que inspire wanderlust?',
        answer: 'Use palavras que evocam movimento e descoberta: "Horizonte", "Aventura", "Descobrir", "Explorar", "Jornada", "Compass". Referências a elementos de viagem (asas, mapa, bússola) também inspiram. O nome deve fazer as pessoas quererem viajar quando ouvem.',
      },
    ],
    howToChoose: {
      intro: 'Escolher o nome perfeito para sua agência de viagem é uma decisão que comunica os sonhos e experiências que você ajuda as pessoas a realizar. O nome aparecerá em propostas de viagens inesquecíveis, em posts de clientes em destinos incríveis, em parcerias com hotéis e operadores, em buscas de pessoas planejando sua próxima aventura, e nas indicações quando alguém conta sobre a viagem perfeita que você organizou. É a primeira coisa que comunica se você proporciona aventura, luxo, economia ou experiências únicas. Um nome bem escolhido inspira confiança, evoca wanderlust, e cria uma marca que pessoas associam aos melhores momentos de suas vidas.',
      steps: [
        {
          title: 'Defina seu nicho e posicionamento no turismo',
          description: 'Antes de escolher um nome, tenha clareza sobre sua agência. Determine seu foco de viagem (lazer, corporativo, grupos, luxo, aventura), seus destinos principais ou especializações, seu público-alvo (famílias, casais, jovens, executivos), seu diferencial competitivo (expertise, preço, serviço, exclusividade), e seu modelo de negócio (online, físico, consultoria).',
        },
        {
          title: 'Explore vocabulário de viagem e descoberta',
          description: 'Faça brainstorm de palavras relacionadas a viagem e turismo. Inclua conceitos de movimento (viagem, jornada, rota, caminho), descoberta (explorar, descobrir, aventura, horizonte), destinos e geografia (mundo, global, compass, mapa), emoções de viagem (sonho, liberdade, escape, wanderlust), e termos do trade (tour, trip, travel, voyage). Combine inspiradoramente.',
        },
        {
          title: 'Considere o tom que ressoa com seus viajantes',
          description: 'Diferentes viajantes respondem a diferentes tons. Aventureiros querem ousadia e emoção. Viajantes de luxo esperam sofisticação. Famílias buscam segurança e diversão. Corporativo precisa de profissionalismo. Escolha um tom que faça seus clientes ideais confiarem em você para suas viagens.',
        },
        {
          title: 'Avalie memorabilidade e indicação',
          description: 'Viagens são frequentemente planejadas por indicação. Avalie cada nome considerando: é fácil de lembrar e repetir? Funciona em frases como "fizemos com a [nome] e foi incrível"? Seria fácil de buscar depois de ouvir em conversa? Cria associação positiva com experiências de viagem? A memorabilidade é crucial para word-of-mouth.',
        },
        {
          title: 'Verifique disponibilidade e regulamentação',
          description: 'O turismo tem regulamentação específica. Verifique disponibilidade de domínio .com.br e .com, handles de redes sociais (Instagram é importante para viagem), se o nome permite registro no Cadastur, marcas registradas no INPI, e se há conflito com agências estabelecidas na sua região.',
        },
        {
          title: 'Teste com viajantes e parceiros',
          description: 'Compartilhe opções com potenciais clientes que representam seu público, operadores e parceiros do trade turístico, amigos que viajaram recentemente. Pergunte qual nome os inspiraria a planejar uma viagem, qual agência escolheriam, e qual nome é mais memorável para indicar a amigos.',
        },
        {
          title: 'Visualize o nome na jornada do viajante',
          description: 'Antes de finalizar, imagine o nome em toda experiência: na busca inicial por agências de viagem, na proposta que faz os olhos brilharem, no voucher de uma viagem dos sonhos, nas fotos de clientes marcando sua agência de destinos incríveis, na volta quando contam para todos sobre a experiência, e na próxima viagem quando voltam a procurar você. Se o nome inspira em todos esses momentos, você encontrou a escolha certa.',
        },
      ],
    },
    businessNameIdeas: [
      { name: 'HorizonteViagens', description: 'Evoca destinos e possibilidades infinitas—perfeito para agências que abrem o mundo para seus clientes.' },
      { name: 'CompassTour', description: 'Referência à bússola e direção—ideal para agências que guiam viajantes aos melhores destinos.' },
      { name: 'DescobrirMundo', description: 'Convite à exploração—perfeito para agências focadas em experiências autênticas e descobertas.' },
      { name: 'ViagemDreams', description: 'Viagens dos sonhos—ideal para agências que realizam desejos de viagem dos clientes.' },
      { name: 'AventureiroTravel', description: 'Para espíritos aventureiros—perfeito para agências de ecoturismo e viagens de aventura.' },
      { name: 'EliteTurismo', description: 'Posicionamento premium—ideal para agências de viagens de luxo e experiências exclusivas.' },
      { name: 'RotaPerfeita', description: 'Promessa de planejamento impecável—perfeito para agências conhecidas por roteiros bem elaborados.' },
      { name: 'MundoAberto', description: 'Mundo de possibilidades—ideal para agências com grande variedade de destinos.' },
      { name: 'VoyagerTurismo', description: 'Sofisticado e internacional—perfeito para agências com foco em destinos internacionais.' },
      { name: 'JornadaViagens', description: 'Celebra a jornada—ideal para agências que valorizam o processo além do destino.' },
      { name: 'DestinoFeliz', description: 'Resultado positivo garantido—perfeito para agências de viagens de lazer e família.' },
      { name: 'ExplorerTour', description: 'Para exploradores—ideal para agências de viagens de descoberta e aventura soft.' },
      { name: 'ViagensAutênticas', description: 'Experiências genuínas—perfeito para agências de turismo local e experiências culturais.' },
      { name: 'GlobalWings', description: 'Asas para o mundo—ideal para agências com foco em viagens aéreas internacionais.' },
      { name: 'PassaporteMundo', description: 'Acesso ao mundo—perfeito para agências que facilitam viagens internacionais.' },
      { name: 'TrilhasEDestinos', description: 'Caminhos e chegadas—ideal para agências de ecoturismo e viagens de natureza.' },
      { name: 'ViagemConfiança', description: 'Segurança e confiabilidade—perfeito para agências que priorizam tranquilidade do viajante.' },
      { name: 'SonhosDeViagem', description: 'Realizador de sonhos—ideal para agências que especializam em viagens especiais como lua de mel.' },
      { name: 'RotaMundo', description: 'Rotas pelo mundo—perfeito para agências com expertise em roteiros complexos.' },
      { name: 'VentureTravel', description: 'Aventura e empreendimento—ideal para agências de viagens de aventura premium.' },
    ],
  },

};

// Export function for getting all Portuguese generators
export function getAllBusinessNameGeneratorsPt(): BusinessNameGeneratorConfig[] {
  return Object.values(businessNameGeneratorsPt);
}

// Export function for getting a specific Portuguese generator by slug
export function getBusinessNameGeneratorPt(slug: string): BusinessNameGeneratorConfig | undefined {
  return Object.values(businessNameGeneratorsPt).find((tool) => tool.slug === slug);
}

// Export function for getting Portuguese generator slugs
export function getBusinessNameGeneratorSlugsPt(): string[] {
  return Object.keys(businessNameGeneratorsPt);
}
