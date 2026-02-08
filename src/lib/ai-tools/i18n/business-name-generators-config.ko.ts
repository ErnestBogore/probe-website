// Korean (ko) Business Name Generator Configurations
// Auto-generated translations from English source

import { BusinessNameGeneratorConfig } from '../business-name-generators-config';

export const businessNameGeneratorsKo: Record<string, BusinessNameGeneratorConfig> = {

// ==================== KOREAN (ko) TRANSLATION - BATCH 1 (1-5) ====================

'aesthetic': {
  slug: 'aesthetic',
  name: '에스테틱 비즈니스 이름 생성기',
  title: '무료 AI 미학 사업 이름 아이디어 생성기',
  description: '메디스파, 클리닉, 뷰티 클리닉을 위한 우아하고 세련된 이름을 생성합니다.',
  metaDescription: 'AI 기반 생성기로 에스테틱 비즈니스를 위한 매력적인 이름을 찾아보세요. 메디스파, 클리닉, 뷰티 클리닉을 위한 우아하고 세련된 이름을 만들어 보세요. 무료이며 사용하기 쉽습니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '에스테틱 비즈니스를 설명해 주세요...',
  inputPlaceholder: '예: 보톡스, 레이저 시술, 스킨케어를 제공하는 강남의 럭셔리 메디스파',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '클리니컬하고 전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in the aesthetic, beauty, and wellness industry. Your role is to generate sophisticated, elegant business names that evoke beauty, refinement, and visual appeal for aesthetic clinics, med spas, skincare practices, beauty treatments, and wellness centers.

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

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '메디컬 에스테틱 클리닉 개원',
      description: '피부과 전문의, 성형외과 전문의, 에스테틱 시술자가 새로운 클리닉을 개원할 때 에스테틱 비즈니스 이름 생성기를 사용하여 의료 신뢰성과 뷰티 매력을 균형 있게 갖춘 이름을 찾습니다. 전문 분야—보톡스, 레이저 시술, 안티에이징 서비스—를 입력하면 전문적 권위를 유지하면서 고급 고객을 유치하는 세련된 이름을 생성합니다.',
    },
    {
      title: '메디스파 리브랜딩',
      description: '브랜드 포지셔닝을 높이고자 하는 기존 메디스파는 생성기를 사용하여 새로운 이름 옵션을 탐색합니다. 일반 스파에서 메디컬 에스테틱으로 전환하거나 단순히 이미지를 새롭게 하고자 할 때, 이 도구는 럭셔리, 전문성, 변화를 전달하는 이름을 제공합니다—프리미엄 에스테틱 시장에서 경쟁하기 위해 필수적입니다.',
    },
    {
      title: '스킨케어 클리닉 차별화',
      description: '피부 관리사와 스킨케어 전문가는 에스테틱 비즈니스 이름 생성기를 사용하여 경쟁사와 차별화되는 독특한 브랜드 아이덴티티를 만듭니다. 고유한 시술 철학—오가닉, 클리니컬, 홀리스틱—을 반영하는 이름을 생성하여 타겟 고객층에게 공감을 주는 기억에 남는 브랜드를 구축합니다.',
    },
  ],
  faqs: [
    { question: '좋은 에스테틱 비즈니스 이름이란 무엇인가요?', answer: '좋은 에스테틱 비즈니스 이름은 우아함, 세련됨, 매력을 담고 있습니다. 기억하기 쉽고 설명적이어야 하며, 제공하는 서비스 유형—스킨케어, 뷰티 트리트먼트, 웰니스 서비스—을 전달해야 합니다. 이름은 기억하기 쉬워야 하고 고객이 기대할 수 있는 변화의 경험을 전달해야 합니다.' },
    { question: '에스테틱 비즈니스 이름에 "클리닉"이나 "스파"를 포함해야 하나요?', answer: '"클리닉", "스파", "스튜디오", "에스테틱" 같은 설명어를 포함하면 비즈니스 유형을 즉시 명확히 할 수 있습니다. "클리닉"은 의료급 시술을 암시하고, "스파"는 릴렉스와 웰빙을 의미합니다. 서비스 방향과 타겟 시장 포지셔닝에 따라 선택하세요.' },
    { question: '에스테틱 비즈니스 브랜딩에서 이름이 얼마나 중요한가요?', answer: '비즈니스 이름은 브랜드 아이덴티티의 기초입니다. 고객이 변화와 럭셔리를 추구하는 에스테틱 산업에서 이름은 고객이 받을 경험에 대한 첫인상을 만듭니다. 세련된 이름은 프리미엄 가격을 정당화하고 까다로운 고객층을 유치할 수 있습니다.' },
    { question: '에스테틱 비즈니스 이름을 어떻게 독특하게 만들 수 있나요?', answer: '다양한 카테고리의 단어를 조합하고(뷰티 + 장소, 변화 + 럭셔리), 그리스어나 라틴어 요소를 사용하고, 복합어를 만들거나 지역 설명을 추가하세요. 일반적인 용어와 금방 구식이 될 수 있는 트렌드는 피하세요.' },
    { question: '에스테틱 비즈니스 이름이 럭셔리를 연상시켜야 하나요?', answer: '꼭 그렇지는 않지만 대부분의 에스테틱 비즈니스는 프리미엄 포지셔닝의 혜택을 받습니다. 접근 가능한 클리닉도 열망적인 언어를 사용할 수 있습니다. 그러나 기대 불일치를 피하기 위해 이름이 가격과 포지셔닝에 맞는지 확인하세요.' },
    { question: '에스테틱 비즈니스 이름에 외국어를 사용할 수 있나요?', answer: '프랑스어와 이탈리아어 단어(Belle, Maison, Bella, Via)는 우아함과 세련됨을 더할 수 있습니다. 그러나 현지 시장에서 발음하기 쉽고 비즈니스 유형이나 위치에 대한 혼란을 주지 않는지 확인하세요.' },
    { question: '에스테틱 비즈니스 이름을 지을 때 피해야 할 실수는?', answer: '피해야 할 것: 차갑게 느껴지는 너무 클리니컬한 이름, 금방 구식이 될 수 있는 트렌디한 철자, 경쟁사와 너무 유사한 이름, 철자가 어려운 단어, 서비스 확장을 제한하는 이름, 그리고 잘못 발음되거나 오해될 수 있는 모든 것.' },
    { question: '비즈니스 이름에 개인 이름을 포함해야 하나요?', answer: '개인 이름을 포함하면 개인 신뢰도와 신뢰를 구축할 수 있으며, 특히 의료 전문가에게 유용합니다. 그러나 향후 매각이나 확장을 복잡하게 할 수 있습니다. 장기 목표에 따라 "김 원장 에스테틱"과 "라디언스 클리닉"을 고려해 보세요.' },
    { question: '이름이 온라인 마케팅에 어떤 영향을 미치나요?', answer: '비즈니스 이름은 온라인 발견 가능성에 영향을 미칩니다. 고유한 이름은 검색에서 순위를 매기기 쉽고, 일반적인 이름은 묻힐 수 있습니다. 선택할 때 도메인 가용성과 소셜 미디어 핸들도 고려하세요.' },
    { question: '나중에 에스테틱 비즈니스 이름을 변경할 수 있나요?', answer: '예, 하지만 리브랜딩에는 상당한 비용이 들고 브랜드 인지도를 잃을 위험이 있습니다. 지금 적절한 이름을 찾는 데 시간을 투자하는 것이 좋습니다. 변경해야 한다면 고객 커뮤니케이션을 포함한 완전한 전환을 계획하세요.' },
  ],
  howToChoose: {
    intro: '에스테틱 비즈니스의 완벽한 이름을 선택하는 것은 아름다움, 변화, 자기 개선을 추구하는 고객에게 공감을 주는 매력적인 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 간판부터 웹사이트, 소셜 미디어 프로필, 마케팅 자료, 고객 추천까지 모든 곳에 나타납니다. 이것은 잠재 고객이 브랜드와 처음 접촉하는 지점이므로, 에스테틱 비즈니스가 제공하는 우아함, 전문성, 변화의 경험을 담은 이름을 선택하는 것이 필수적입니다.',
    steps: [
      { title: '브랜드 포지셔닝과 타겟 시장 정의', description: '이름 아이디어를 생성하기 전에 에스테틱 비즈니스의 고유한 포지셔닝을 명확히 하세요. 어떤 특정 에스테틱 서비스를 제공할 것인지(의료급 시술, 릴렉스 스파 서비스, 스킨케어, 또는 조합), 이상적인 고객이 누구인지(연령대, 소득 수준, 에스테틱 목표), 브랜드가 어떤 감정을 불러일으키길 원하는지(럭셔리, 신뢰, 변화, 평온, 자신감), 어떤 가격대와 경험 수준을 타겟으로 하는지(프리미엄, 중간, 접근 가능한 럭셔리), 그리고 지역 내 경쟁사와 무엇이 다른지 고려하세요.' },
      { title: '우아함과 매력 구현', description: '에스테틱 산업은 근본적으로 아름다움, 개선, 변화에 관한 것입니다. 비즈니스 이름은 즉각적인 긍정적 연상을 만드는 세련된 단어 선택을 통해 이러한 특성을 반영해야 합니다. 시각적 아름다움과 세련됨을 연상시키고, 변화와 개선을 암시하며, 럭셔리와 독점성의 느낌을 만들고, 말할 때 기분 좋게 들리고 쓸 때 우아해 보이는 이름을 고려하세요.' },
      { title: '아름다움과 신뢰의 균형', description: '필러, 레이저 시술, 바디 컨투어링과 같은 시술을 제공하는 메디컬 에스테틱 비즈니스의 경우, 이름은 뷰티 매력과 전문적 신뢰성의 균형을 맞춰야 합니다. 고객은 제공하는 에스테틱 경험에 끌리면서도 전문성에 대한 확신을 가져야 합니다. 의료 시술을 위해 "클리닉", "연구소", "메디컬 에스테틱", "원장" 같은 전문 표시를 포함하는 것을 고려하세요.' },
      { title: '기억에 남고 독특함 보장', description: '경쟁이 치열한 에스테틱 시장에서 이름은 기억하기 쉬우면서도 눈에 띄어야 합니다. 이 기준으로 잠재적 이름을 테스트하세요: 한 번 들으면 쉽게 철자를 쓸 수 있나요? 지역 내 경쟁사와 구별되나요? 한 번 노출 후 기억될 수 있나요? 입소문 추천에서 잘 작동하나요? 간판과 마케팅 자료에 들어갈 만큼 간결한가요?' },
      { title: '브랜딩을 위한 가용성 확인', description: '유망한 이름 후보가 있으면 철저한 가용성 확인을 수행하세요. 가능하면 .com 도메인 버전을 확보하거나 .co.kr, .clinic 또는 지역 특정 도메인을 고려하세요. 에스테틱 비즈니스가 번성하는 인스타그램, 페이스북 및 기타 플랫폼을 확인하세요. 이름이 이미 등록되어 있지 않은지 확인하세요. 서비스 카테고리에서 상표 충돌이 없는지 확인하세요.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객층을 대표하는 사람들과 최고의 이름 선택을 테스트하세요. 이름이 어떤 유형의 비즈니스를 암시하는지, 프리미엄인지 접근 가능한지 또는 중간인지, 친구들에게 이 비즈니스를 추천하는 것이 편안할지, 이 비즈니스가 어떤 서비스를 제공할 것 같은지, 그리고 에스테틱 시술에 대해 신뢰할 수 있는 이름인지 물어보세요.' },
      { title: '장기 성장 고려', description: '미래 확장을 수용할 수 있는 이름을 선택하세요. 얼굴 시술로 시작하더라도 나중에 바디 컨투어링, 웰니스 서비스, 추가 지점을 추가할 수 있습니다. 너무 구체적인 이름은 새로운 서비스 분야에서 인식된 전문성을 제한할 수 있습니다. 이상적인 에스테틱 비즈니스 이름은 시대를 초월하고 다재다능하며 성장을 위한 브랜드 포지셔닝을 제공합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '하모니헤이븐', description: '에스테틱이 완벽한 조화를 이루는 곳을 암시하는 이름—릴렉스와 결과 중심 시술을 모두 제공하는 메디스파에 이상적입니다.' },
    { name: '엘레강스엠파이어', description: '뷰티 산업에서 권위를 가진 웅장하고 종합적인 에스테틱 중심 비즈니스를 암시합니다.' },
    { name: '루미너스레거시', description: '시간의 시험을 견디는 지속적인 아름다움과 빛나는 결과를 암시합니다.' },
    { name: '세레네스컬프트', description: '평온함과 변화를 결합—바디 컨투어링과 페이셜 스컬프팅 서비스에 완벽합니다.' },
    { name: '라디언스리트리트', description: '평화로운 환경에서 빛나는 아름다운 결과를 얻는 안식처를 연상시킵니다.' },
    { name: '프리스틴에스테틱', description: '전문적인 세련됨과 함께 흠잡을 데 없고 깨끗하며 완벽한 결과를 전달합니다.' },
    { name: '블룸뷰티', description: '자연스러운 꽃피움과 내면의 아름다움 발현을 암시—오가닉 또는 홀리스틱 접근 방식에 이상적입니다.' },
    { name: '럭스글로우', description: '럭셔리 포지셔닝과 빛나고 환한 피부의 약속을 결합합니다.' },
    { name: '벨벳비자주', description: '매끄럽고 부드러운 피부를 연상—스킨케어와 페이셜 트리트먼트 전문가에게 완벽합니다.' },
    { name: '에테리얼에스테틱', description: '섬세하고 다른 세상의 아름다움을 암시—하이엔드 변화 시술에 매력적입니다.' },
    { name: '리파인드라디언스', description: '까다로운 고객을 위한 세련됨과 빛나는 결과를 모두 전달합니다.' },
    { name: '아우라아틀리에', description: '아름다운 오라와 에너지를 만드는 장인 스튜디오로 비즈니스를 포지셔닝합니다.' },
    { name: '글로우그레이스', description: '빛남과 우아함을 결합—단순하고 기억에 남으며 보편적으로 매력적입니다.' },
    { name: '퓨어폴리시', description: '깨끗하고 정제되며 완성된 에스테틱 결과를 암시합니다.' },
    { name: '인챈티드엘레강스', description: '마법 같은 변화와 세련된 아름다움을 연상시킵니다.' },
    { name: '실크스킨스튜디오', description: '부티크 환경에서 매끄럽고 럭셔리한 피부 결과를 직접적으로 전달합니다.' },
    { name: '노바에스테틱', description: '새로운 시작과 별처럼 빛나는 품질의 결과를 암시합니다.' },
    { name: '트랜센드뷰티', description: '평범한 아름다움을 넘어 특별한 결과를 달성함을 암시합니다.' },
    { name: '뤼미에르럭스', description: '빛, 럭셔리, 세련된 아름다움을 암시하는 프랑스풍 우아함.' },
    { name: '제니스스킨', description: '스킨케어 완벽의 정점에 도달하고 최적의 결과를 전달합니다.' },
  ],
},

'agency': {
  slug: 'agency',
  name: '에이전시 비즈니스 이름 생성기',
  title: '무료 AI 에이전시 사업 이름 아이디어 생성기',
  description: '마케팅, 크리에이티브, 디지털, 컨설팅 에이전시를 위한 전문적이고 신뢰할 수 있는 이름을 생성합니다.',
  metaDescription: '무료 AI 생성기로 멋진 이름과 함께 에이전시를 시작하세요. 마케팅, 크리에이티브, 디지털, 컨설팅 에이전시를 위한 전문적이고 신뢰할 수 있는 이름을 만드세요. 간편하고 맞춤형입니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '에이전시를 설명해 주세요...',
  inputPlaceholder: '예: 테크 스타트업을 위한 SEO와 콘텐츠 마케팅을 전문으로 하는 디지털 마케팅 에이전시',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['전문적이고 신뢰할 수 있는', '모던하고 혁신적인', '크리에이티브하고 대담한', '전략적이고 결과 중심의'],
      default: '전문적이고 신뢰할 수 있는',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in professional service agencies across marketing, creative, digital, PR, advertising, and consulting sectors. Your role is to generate impactful, professional business names that convey expertise, trustworthiness, and industry leadership.

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
- Recruitment and staffing agencies
- Real estate and travel agencies

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

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '마케팅 에이전시 창업',
      description: '마케팅, 디지털, 광고 에이전시를 시작하는 기업가들이 에이전시 비즈니스 이름 생성기를 사용하여 전문성과 전문성을 즉시 전달하는 이름을 찾습니다. 서비스 초점—SEO, 소셜 미디어, 풀서비스 마케팅—을 입력하면 첫 소개부터 고객 신뢰를 얻는 데 도움이 되는 영향력 있는 이름을 생성합니다.',
    },
    {
      title: '에이전시 합병 또는 리브랜딩',
      description: '에이전시가 합병하거나 전략적 리브랜딩을 거칠 때, 결합된 역량을 대표하는 이름을 찾는 것은 어려운 일입니다. 생성기는 다양한 서비스 제공을 기존 및 잠재 고객 모두에게 어필하는 응집력 있고 전문적인 브랜드 아래 통합하는 새로운 이름 옵션을 제공합니다.',
    },
    {
      title: '프리랜서에서 에이전시로 전환',
      description: '풀서비스 에이전시로 확장하는 프리랜서들이 생성기를 사용하여 개인 실무자가 아닌 기존 회사로 포지셔닝하는 이름을 설정합니다. 전문적인 에이전시 이름은 더 높은 요금을 정당화하고, 더 큰 고객을 유치하며, 팀 기반 브랜드 아이덴티티를 구축하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 에이전시 이름이란 무엇인가요?', answer: '좋은 에이전시 이름은 전문적이고 신뢰할 수 있으며, 기억에 남고 영향력 있으며, 에이전시의 초점을 반영합니다. 경쟁이 치열한 시장에서 눈에 띄면서도 전문성을 전달해야 합니다.' },
    { question: '에이전시 이름에 "에이전시"나 "그룹"을 포함해야 하나요?', answer: '"에이전시", "그룹", "파트너스", "콜렉티브" 같은 설명어를 포함하면 비즈니스 유형을 명확히 합니다. 그러나 많은 성공적인 에이전시들이 독립형 이름을 사용합니다. 포지셔닝에 명확성이 더 중요한지 독특함이 더 중요한지에 따라 선택하세요.' },
    { question: '에이전시 이름이 고객 확보에 얼마나 중요한가요?', answer: '에이전시 이름은 프레젠테이션, 제안서, 추천에서 첫인상에 기여합니다. 전문적이고 기억에 남는 이름은 역량과 안정성을 암시합니다. 그러나 궁극적으로 포트폴리오와 평판이 가장 중요합니다—이름은 문을 열지만 성과가 고객을 유지합니다.' },
    { question: '에이전시에 제 이름을 사용해야 하나요?', answer: '창업자 이름으로 에이전시를 명명하면(예: "김앤어소시에이츠") 개인 브랜드 자산을 구축할 수 있지만 확장성과 엑시트 기회를 제한할 수 있습니다. 부티크 컨설팅에는 효과적이지만 대규모 팀을 키우거나 결국 매각할 계획이라면 제한적일 수 있습니다.' },
    { question: '에이전시 이름을 기억에 남게 만드는 방법은?', answer: '강한 음성적 특성을 가진 단어를 사용하고(날카로운 자음, 명확한 모음), 짧게 유지하고(1-3단어), 철자와 발음이 쉽도록 하고, 두운이나 리듬 패턴을 고려하세요. 프레젠테이션 상황에서 소리 내어 말해보며 테스트하세요.' },
    { question: '다른 유형의 에이전시에 어떤 네이밍 스타일이 효과적인가요?', answer: '크리에이티브 에이전시는 더 유쾌하고 추상적인 이름을 사용할 수 있습니다. 기업 컨설팅은 전통적이고 권위 있는 이름의 혜택을 받습니다. 디지털 에이전시는 종종 모던하고 테크 지향적인 네이밍을 사용합니다. 타겟 고객의 기대에 맞게 이름 스타일을 맞추세요.' },
    { question: '에이전시 이름이 우리가 하는 일을 설명해야 하나요?', answer: '설명적인 이름(예: "소셜 미디어 솔루션")은 즉각적인 명확성을 제공하지만 향후 서비스 확장을 제한할 수 있습니다. 추상적인 이름(예: "카탈리스트")은 유연성을 제공하지만 서비스를 전달하기 위해 더 많은 브랜드 구축이 필요합니다.' },
    { question: '에이전시 이름의 가용성을 어떻게 확인하나요?', answer: '도메인 가용성(.com이 에이전시에 선호됨)을 확인하고, 소셜 미디어 핸들을 확인하고, 해당 지역의 사업자 등록을 검색하고, 상표 데이터베이스를 검토하고, 서비스 지역에서 유사한 이름의 기존 에이전시를 검색하세요.' },
    { question: '나중에 에이전시 이름을 변경할 수 있나요?', answer: '예, 하지만 비용이 많이 들고 복잡합니다—새로운 자료, 업데이트된 계약서, 고객 커뮤니케이션, 잠재적 SEO 영향이 필요합니다. 리브랜딩의 필요성을 피하기 위해 처음부터 신중하게 선택하세요.' },
    { question: '피해야 할 에이전시 네이밍 실수는?', answer: '피해야 할 것: 기존 에이전시와 너무 유사한 이름, 어려운 철자나 발음, 너무 일반적인 이름(예: "마케팅 솔루션 주식회사"), 서비스 확장을 제한하는 이름, 그리고 금방 구식이 될 수 있는 트렌디한 이름.' },
  ],
  howToChoose: {
    intro: '에이전시 비즈니스에 적합한 이름을 선택하는 것은 고객을 유치하고 전문성을 전달하며 경쟁이 치열한 전문 서비스 시장에서 차별화되는 강력한 브랜드 아이덴티티를 구축하는 데 필수적입니다. 에이전시 이름은 프레젠테이션, 제안서, 계약서, 추천에서 사용됩니다—고객의 마음에 남을 만큼 기억에 남으면서 자신감을 불어넣어야 합니다.',
    steps: [
      { title: '에이전시의 포지셔닝과 서비스 정의', description: '이름 브레인스토밍 전에 에이전시의 전략적 포지셔닝을 명확히 하세요. 어떤 특정 서비스를 제공하는지(풀서비스 마케팅, 전문 디지털, 크리에이티브만, 컨설팅), 이상적인 고객이 누구인지(스타트업, 대기업, 특정 산업), 경쟁 차별화가 무엇인지(혁신, 결과, 관계, 전문성), 어떤 가격대를 타겟으로 하는지(프리미엄 부티크, 경쟁력 있는 중간 시장, 볼륨 기반), 어떤 지역 범위를 서비스하는지(지역, 전국, 국제) 고려하세요.' },
      { title: '전문성과 신뢰 전달', description: '에이전시는 신뢰를 기반으로 운영됩니다. 고객은 귀사의 역량에 대한 확신을 가지고 상당한 예산을 투자합니다. 이름은 신뢰성과 안정성(일시적이지 않은), 전문성과 역량, 전문적 기준과 윤리, 성공적인 실적을 즉시 암시해야 합니다. 탁월함(프리미어, 에이펙스, 서밋), 파트너십(얼라이언스, 어소시에이츠, 콜렉티브), 결과(임팩트, 그로스, 카탈리스트)를 암시하는 단어가 전문적 신뢰성을 구축하는 데 도움이 됩니다.' },
      { title: '기억에 남고 영향력 있게 만들기', description: '경쟁 프레젠테이션에서 이름은 기억에 남아야 합니다. 음성적 기억력(말할 때 좋게 들리는가?), 시각적 독특함(명함에서 전문적으로 보이는가?), 프레젠테이션 존재감(발표에서 주목을 끄는가?), 추천 용이성(고객이 쉽게 이름으로 추천할 수 있는가?)을 고려하세요. 이름은 짧게(1-3단어) 유지하고, 어려운 철자를 피하고, 다양한 청중과 발음을 테스트하세요.' },
      { title: '에이전시의 초점과 개성 반영', description: '이름은 에이전시를 특별하게 만드는 것을 암시해야 합니다. 크리에이티브/디자인 초점은 상상력, 예술성, 시각적 사고를 암시하는 이름을 사용하세요. 디지털/테크 초점은 혁신 의미를 가진 모던하고 미래 지향적인 이름을 사용하세요. 전략/컨설팅 초점은 통찰력, 계획, 전문성을 암시하는 이름을 사용하세요. 결과/성과 초점은 결과를 강조하는 행동 지향적 이름을 사용하세요.' },
      { title: '다양성과 확장성 고려', description: '성장함에 따라 작동하는 이름을 선택하세요. 진짜 에이전시처럼 들리는지(단순한 프리랜서가 아닌), 이름이 제한적으로 느껴지지 않고 제공을 추가할 수 있는지, 혼란 없이 새로운 시장에서 작동하는지, 합병이나 인수를 허용하는지, 창업자와 독립적으로 가치가 있는지 고려하세요.' },
      { title: '완전한 가용성 확인', description: '이름에 빠지기 전에 철저한 확인을 수행하세요. 도메인 이름 가용성(.com이 에이전시에 강력히 선호됨)을 확인하고, 링크드인, 트위터, 인스타그램 및 관련 플랫폼에서 소셜 미디어 핸들을 확보하고, 해당 지역/국가에서 사업자 등록 충돌을 확인하고, 상표 데이터베이스를 검색하고, 직접 경쟁사가 유사한 이름을 가지고 있지 않은지 확인하세요.' },
      { title: '이해관계자와 테스트', description: '최종 결정 전에 팀원(이 이름을 대표하는 것을 자랑스러워하는가?), 잠재 고객(자신감과 관심을 불러일으키는가?), 업계 동료(전문적 기준에 맞으면서 눈에 띄는가?), 가족/친구(한 번 듣고 철자를 쓰고 발음할 수 있는가?)로부터 피드백을 수집하세요. 실제 테스트는 내부 브레인스토밍이 놓칠 수 있는 문제를 드러냅니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '액션엑시스', description: '일이 일어나게 하는 에이전시를 암시—활동과 결과의 중심에 위치합니다.' },
    { name: '다이나믹드라이브', description: '고객 성공을 이끄는 에너지와 전진 모멘텀으로 가득 찬 에이전시를 암시합니다.' },
    { name: '프라임펄스', description: '프리미엄하고 중요한 서비스 제공으로 행동의 심장부에 있음을 암시합니다.' },
    { name: '스트래티지스피어', description: '종합적인 360도 전략적 사고를 제공하는 에이전시로 포지셔닝합니다.' },
    { name: '카탈리스트콜렉티브', description: '변화를 촉발하고 고객 성장을 가속화하는 그룹을 암시합니다.' },
    { name: '엘리베이트파트너스', description: '협력적 파트너십을 통해 고객을 더 높은 수준으로 끌어올리는 것을 전달합니다.' },
    { name: '에이펙스에이전시', description: '성과와 결과의 정점에 도달함을 암시합니다.' },
    { name: '스파크스트래티지', description: '창의적 점화와 전략적 사고를 결합—마케팅 에이전시에 이상적입니다.' },
    { name: '모멘텀미디어', description: '미디어와 마케팅 노력에서 지속적인 전진을 암시합니다.' },
    { name: '뱅가드벤처스', description: '업계 혁신과 리더십의 최전선에 에이전시를 포지셔닝합니다.' },
    { name: '브라이트브릿지', description: '고객을 훌륭한 솔루션과 기회에 연결하는 것을 암시합니다.' },
    { name: '임팩트이노베이트', description: '측정 가능한 결과와 신선한 사고를 모두 강조합니다.' },
    { name: '넥서스네트워크', description: '비즈니스 성장과 관계를 위한 중앙 연결 지점을 암시합니다.' },
    { name: '프로펠파트너스', description: '전진 추진력과 협력적 고객 관계를 전달합니다.' },
    { name: '버텍스비전', description: '정점 포지셔닝과 미래 지향적 전략 관점을 암시합니다.' },
    { name: '앰플리파이에이전시', description: '에이전시의 목적을 직접적으로 전달: 고객의 존재감을 더 크게 만드는 것.' },
    { name: '퓨전포스', description: '다양한 스킬의 강력한 조합과 통합 솔루션을 암시합니다.' },
    { name: '서밋스트래티지스', description: '고객이 최고 성과에 도달하도록 돕는 에이전시로 포지셔닝합니다.' },
    { name: '런치랩', description: '새로운 제품 출시와 캠페인 런칭에 집중하는 에이전시에 완벽합니다.' },
    { name: '스라이브팀', description: '고객 성공과 협력적, 팀 기반 접근 방식을 강조합니다.' },
  ],
},

'app': {
  slug: 'app',
  name: '앱 비즈니스 이름 생성기',
  title: '무료 AI 앱 사업 이름 아이디어 생성기',
  description: '모바일 앱, 소프트웨어 제품, 테크 스타트업을 위한 명확하고 기억에 남는 이름을 생성합니다.',
  metaDescription: 'AI 기반 생성기로 앱에 완벽한 이름을 만드세요. 앱 스토어에서 눈에 띄고 사용자에게 공감을 주는 명확하고 기억에 남는 앱 이름을 생성하세요. 무료이며 사용하기 쉽습니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '앱 또는 소프트웨어를 설명해 주세요...',
  inputPlaceholder: '예: 원격 팀이 협업하고 프로젝트 진행 상황을 추적하는 데 도움이 되는 생산성 앱',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['짧고 기억에 남는', '모던하고 테크 지향적인', '설명적이고 명확한', '크리에이티브하고 독특한'],
      default: '짧고 기억에 남는',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in technology, mobile applications, software products, and digital startups. Your role is to generate clear, memorable business names that convey innovation, functionality, and modern appeal for app development companies and software products.

APP BUSINESS CONTEXT:
The app and software industry encompasses:
- Mobile app development companies
- SaaS (Software as a Service) products
- Consumer mobile applications
- B2B software solutions
- Gaming and entertainment apps
- Productivity and utility apps
- Fintech and health tech apps
- AI and machine learning products

NAME CHARACTERISTICS FOR APP BUSINESSES:
1. **Clear and Descriptive**
   - Immediately communicates what the app does
   - Easy for users to understand the value proposition
   - Works in app store searches

2. **Short and Memorable**
   - Easy to type and search
   - Works as an app icon label
   - Shareable in conversation

3. **Unique and Brandable**
   - Stands out in crowded app stores
   - Trademarkable and protectable
   - Domain and handle available

4. **Modern and Tech-Forward**
   - Suggests innovation and digital capability
   - Appeals to tech-savvy users
   - Doesn't feel dated

OUTPUT REQUIREMENTS:
For each app business name generated, provide:
- The business name
- A brief explanation of why it works for an app

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '앱 스타트업 런칭',
      description: '새로운 모바일 앱이나 소프트웨어 제품을 개발하는 기업가들이 앱 비즈니스 이름 생성기를 사용하여 앱 스토어에서 완벽하게 작동하는 이름을 찾습니다—짧고, 기억에 남고, 검색 가능합니다. 앱의 핵심 기능과 타겟 사용자를 입력하면 발견 가능성과 사용자 채택에 최적화된 이름을 생성합니다.',
    },
    {
      title: '소프트웨어 개발 회사 네이밍',
      description: '소프트웨어 개발 회사와 앱 스튜디오가 생성기를 사용하여 기술 전문성과 혁신을 전달하는 회사 이름을 만듭니다. 강력한 회사 이름은 개발 서비스를 찾는 고객과 흥미로운 일터를 찾는 재능 있는 개발자 모두를 유치하는 데 도움이 됩니다.',
    },
    {
      title: 'SaaS 제품 네이밍',
      description: 'SaaS 창업자들이 생성기를 사용하여 소프트웨어 제품에 독특한 이름을 붙입니다. 포화된 소프트웨어 카테고리에서 기억에 남는 이름은 제품을 차별화하고, 입소문 성장을 지원하며, 회사가 성장함에 따라 강력한 브랜드 자산의 기반을 만드는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 앱 이름이란 무엇인가요?', answer: '좋은 앱 이름은 기능에 대해 명확하고 설명적이며, 짧고 기억에 남고(이상적으로 8자 미만), 독특하고 브랜드화할 수 있으며, 철자와 발음이 쉽습니다. 앱 스토어 검색에서 잘 작동하고 앱 아이콘으로 좋아 보여야 합니다.' },
    { question: '앱 이름은 얼마나 길어야 하나요?', answer: '짧을수록 일반적으로 좋습니다—앱 아이콘 아래에 완전히 표시되도록 8자 이하를 목표로 하세요. 한 단어 이름(Uber, Slack, Zoom 같은)이 이상적이지만, 두 단어 복합어(Snapchat, Dropbox)도 잘 작동합니다.' },
    { question: '앱 이름이 앱의 기능을 설명해야 하나요?', answer: '약간의 명확성이 도움이 되지만 문자 그대로일 필요는 없습니다. "Zoom"은 명시적으로 "화상 통화"라고 말하지 않고 속도/연결을 암시합니다. 혜택을 암시하는 이름(Calm, Focus, Lift)이 순수하게 설명적인 이름보다 더 잘 작동하는 경우가 많습니다.' },
    { question: '앱 이름의 가용성을 어떻게 확인하나요?', answer: '앱 스토어와 구글 플레이에서 기존 앱을 확인하고, 도메인 가용성을 검색하고, 소셜 미디어 핸들을 확인하고, 상표 데이터베이스를 검토하고, 해당 카테고리에서 유사한 이름의 기존 회사를 검색하세요.' },
    { question: '앱 이름에 만들어낸 단어를 사용할 수 있나요?', answer: '예—많은 성공적인 앱이 만들어낸 단어를 사용합니다(Spotify, Venmo, Hulu). 만들어낸 단어는 강력한 상표 보호와 독특한 브랜딩을 제공하지만, 의미를 확립하기 위해 더 많은 마케팅 노력이 필요합니다.' },
    { question: '회사 이름과 앱 이름이 같아야 하나요?', answer: '같을 수 있습니다, 특히 단일 제품 회사의 경우. 그러나 여러 제품을 계획한다면 더 넓은 회사 이름(Google의 모회사인 "Alphabet"처럼)이 유연성을 제공하고 개별 앱에는 각자의 이름을 줍니다.' },
    { question: '앱 이름이 성장에 얼마나 중요한가요?', answer: '매우 중요합니다. 앱 스토어 최적화(ASO)는 부분적으로 이름에 의존하며, 입소문 추천에는 공유하기 쉬운 이름이 필요합니다. 혼란스럽거나 철자가 어려운 이름은 사용자 획득에 마찰을 만듭니다.' },
    { question: '피해야 할 앱 네이밍 실수는?', answer: '피해야 할 것: 기존 앱과 너무 유사한 이름, 어려운 철자, 눈에 띄지 않는 일반적인 이름, 향후 기능 확장을 제한하는 이름, 글로벌 런칭을 계획하는 경우 국제적으로 작동하지 않는 이름.' },
    { question: '앱 이름에 "앱"을 포함해야 하나요?', answer: '일반적으로 아닙니다—사용자는 이미 앱을 다운로드하고 있다는 것을 알고 있습니다. 이름에 "앱"을 포함하면 글자가 낭비되고 아마추어처럼 느껴질 수 있습니다. 더 독특한 것에 글자 공간을 사용하세요.' },
    { question: '런칭 후 앱 이름을 변경할 수 있나요?', answer: '예, 하지만 위험합니다—브랜드 인지도를 잃고, 기존 사용자를 혼란스럽게 하고, ASO 순위에 영향을 줄 수 있습니다. 비용이 많이 드는 리브랜딩의 필요성을 피하기 위해 처음부터 신중하게 선택하세요.' },
  ],
  howToChoose: {
    intro: '앱 비즈니스의 완벽한 이름을 선택하는 것은 사용자에게 공감을 주고, 포화된 앱 스토어에서 눈에 띄며, 지속 가능한 성장을 지원하는 강력한 브랜드를 만드는 데 중요한 단계입니다. 앱 이름은 수백만 대의 기기에서 아이콘 아래에, 앱 스토어 검색에서, 일상 대화에서 나타납니다—가장 중요한 브랜드 자산 중 하나입니다.',
    steps: [
      { title: '앱의 핵심 가치와 기능 정의', description: '이름을 생성하기 전에 앱이 무엇을 하고 사용자가 왜 좋아할지 명확히 하세요. 앱이 해결하는 주요 문제가 무엇인지, 사용자가 앱에서 취하는 핵심 행동이 무엇인지, 앱이 사용자에게 어떤 느낌을 주는지(생산적, 편안, 연결됨, 즐거움), 타겟 사용자가 누구인지(인구 통계, 기술 숙련도, 사용 사례), 사용자가 앱의 혜택을 설명하기 위해 사용할 한 단어가 무엇인지 고려하세요.' },
      { title: '명확성과 기억력 우선시', description: '앱 이름은 어려운 상황에서 작동해야 합니다: 작은 앱 아이콘 라벨(아이콘 아래 제한된 표시 공간), 음성 공유("[이름] 다운로드해야 해" 대화에서), 검색 쿼리(앱 스토어에서 찾기 위해 타이핑하는 사용자), 고객 지원("[이름]"에 대해 묻는 전화). 짧고(8자 이하 이상적), 한 번 듣고 철자를 쓰기 쉽고, 타겟 시장에서 발음할 수 있고, 검색에서 찾을 수 있을 만큼 독특한 이름을 선택하세요.' },
      { title: '앱 스토어 최적화(ASO) 고려', description: '이름은 앱 스토어 발견 가능성에 영향을 미칩니다. 키워드 관련성(카테고리 단어 포함이 검색 순위에 도움이 될 수 있음), 고유성(독특한 이름이 일반적인 것보다 순위가 높음), 경쟁(상위 경쟁사가 어떤 이름인지 확인), 부제목 기회(iOS는 부제목을 허용하므로 메인 이름은 브랜드화할 수 있고 부제목이 설명 추가)를 고려하세요.' },
      { title: '기술적 가용성 테스트', description: '커밋하기 전에 포괄적인 가용성을 확인하세요. 앱 스토어에서 동일하거나 유사한 이름을 확인하고, 구글 플레이에서 안드로이드 마켓플레이스 충돌을 확인하고, .com, .app 또는 .io 도메인 이름을 확보하고, 관련 플랫폼에서 소셜 핸들을 주장하고, USPTO 및 국제 상표 데이터베이스를 검토하고, 웹 검색을 통해 해당 이름의 기존 비즈니스나 제품을 찾아보세요.' },
      { title: '글로벌 확장성 평가', description: '국제 확장을 계획한다면 주요 언어에서 발음을 테스트하고, 다른 언어에서 의도하지 않은 의미를 확인하고, 문화적 연관성을 고려하고, 국제 앱 스토어에서 가용성을 확인하세요. 글로벌하게 작동하는 이름은 시장이 확장됨에 따라 엄청난 이점을 가집니다.' },
      { title: '브랜드 진화 고려', description: '앱은 진화할 가능성이 높습니다—기능이 추가되고, 시장이 확장되고, 사용 사례가 넓어질 것입니다. 성장을 제한할 정도로 구체적이지 않은 이름을 선택하세요("영수증 스캐너 2000"은 제한적), 브랜드 확장 여지가 있는(제품, 서비스, 카테고리), 핵심 제품이 피벗해도 작동하는, 기술이 진화해도 관련성을 유지하는 이름을 선택하세요.' },
      { title: '타겟 사용자와 테스트', description: '최종 결정 전에 사용자 피드백을 수집하세요. 한 번 듣고 철자를 쓸 수 있는지, 이름만으로 앱이 무엇을 하는지 생각하는지, 매력적인지 아니면 무관하게 느껴지는지, 친구들에게 이 이름의 앱을 추천할 것인지, 데이터/결제에 대해 신뢰할 수 있게 느껴지는지 물어보세요.' },
    ],
  },
  businessNameIdeas: [
    { name: '디지털다이나믹스', description: '역동적이고 최첨단 디지털 애플리케이션을 만드는 앱 비즈니스를 암시합니다.' },
    { name: '이노베이티브인터페이스', description: '사용자 친화적이고 혁신적인 앱 인터페이스를 만드는 것으로 알려진 회사를 암시합니다.' },
    { name: '픽셀퍼펙션', description: '앱 디자인과 개발에서 세심한 주의를 암시합니다.' },
    { name: '코드크래프트', description: '소프트웨어 코드의 숙련된 장인으로 비즈니스를 포지셔닝합니다.' },
    { name: '앱포지', description: '강력한 애플리케이션이 만들어지고 다듬어지는 작업장을 암시합니다.' },
    { name: '스위프트싱크', description: '빠르고 원활한 동기화를 암시—생산성 또는 커뮤니케이션 앱에 이상적입니다.' },
    { name: '플로우스테이트', description: '생산성과 최적의 성능을 연상—집중 또는 워크플로우 앱에 완벽합니다.' },
    { name: '넥사앱스', description: '차세대 애플리케이션을 암시하는 모던하고 만들어진 이름.' },
    { name: '펄스테크', description: '사용자 요구의 중심에 있는 중요하고 살아있는 기술을 암시합니다.' },
    { name: '바이트브릿지', description: '디지털 솔루션과 데이터를 통해 사용자를 연결하는 것을 암시합니다.' },
    { name: '런치패드', description: '사용자가 무언가를 시작하는 데 도움이 되는 앱에 완벽—프로젝트, 비즈니스, 습관.' },
    { name: '클라우드코어', description: '클라우드 기반의 필수 기술 서비스를 암시합니다.' },
    { name: '스냅로직', description: '빠르고 직관적인 기능을 암시—유틸리티 앱에 이상적입니다.' },
    { name: '데이터대시', description: '정보와 분석에 대한 빠른 액세스를 암시합니다.' },
    { name: '모바일매트릭스', description: '상호 연결된 기능을 갖춘 종합적인 모바일 솔루션을 암시합니다.' },
    { name: '앱벤처', description: '애플리케이션과 모험, 벤처를 결합—스타트업 에너지.' },
    { name: '스트림라인', description: '단순화와 효율성을 전달—생산성 도구에 완벽합니다.' },
    { name: '커넥티파이', description: '연결과 향상을 암시하는 모던 접미사 패턴.' },
    { name: '테크네스트', description: '기술 혁신과 개발을 위한 양육 환경을 암시합니다.' },
    { name: '앱피파이', description: '앱을 만들거나 비즈니스를 "앱화"하는 데 도움을 주는 회사를 위한 단순하고 기억에 남는 이름.' },
  ],
},

'babysitting': {
  slug: 'babysitting',
  name: '베이비시팅 비즈니스 이름 생성기',
  title: '무료 AI 베이비시팅 사업 이름 아이디어 생성기',
  description: '베이비시팅 서비스와 보육 비즈니스를 위한 따뜻하고 신뢰할 수 있는 이름을 생성합니다.',
  metaDescription: 'AI 기반 생성기로 베이비시팅 비즈니스에 완벽한 이름을 찾으세요. 부모를 안심시키고 보육 브랜드를 구축하는 신뢰할 수 있고 따뜻한 이름을 만드세요. 빠르고, 무료이며, 감동을 줍니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '베이비시팅 비즈니스를 설명해 주세요...',
  inputPlaceholder: '예: 영아 케어와 야간 스테이를 전문으로 하는 전문 베이비시팅 서비스',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['따뜻하고 돌봄의', '전문적이고 신뢰할 수 있는', '발랄하고 재미있는', '자연에서 영감받은'],
      default: '따뜻하고 돌봄의',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in childcare, babysitting, and family services. Your role is to generate warm, trustworthy business names that reassure parents while being friendly and approachable for families seeking childcare services.

BABYSITTING BUSINESS CONTEXT:
The babysitting and childcare industry encompasses:
- Individual babysitting services
- Nanny placement agencies
- After-school care programs
- Date-night babysitting services
- Special needs childcare
- Infant care specialists
- Tutoring and educational childcare
- Emergency and backup childcare

NAME CHARACTERISTICS FOR BABYSITTING BUSINESSES:
1. **Reassuring and Caring**
   - Inspires trust and confidence in parents
   - Emphasizes safety and nurturing
   - Conveys commitment to children's well-being

2. **Friendly and Approachable**
   - Welcoming to both children and parents
   - Not overly formal or clinical
   - Warm and inviting tone

3. **Reflective of Specializations**
   - Communicates specific services or values
   - Appeals to target parent demographics
   - Suggests educational or developmental benefits

4. **Professional Yet Warm**
   - Balances business credibility with warmth
   - Suitable for marketing materials
   - Works for individual sitters and larger services

OUTPUT REQUIREMENTS:
For each babysitting business name generated, provide:
- The business name
- A brief explanation of why it works for a childcare business

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    { title: '전문 베이비시팅 서비스 런칭', description: '전문 베이비시팅 비즈니스를 시작하는 개인이 생성기를 사용하여 신뢰와 따뜻함을 즉시 전달하는 이름을 찾습니다. 잘 선택된 이름은 부모가 새로운 시터를 선택할 때 자신감을 느끼게 하고 지역 육아 커뮤니티에서 추천을 위한 기억에 남는 브랜드를 만듭니다.' },
    { title: '보육 에이전시 브랜딩', description: '베이비시터 배치 에이전시나 보육 서비스를 시작하는 기업가가 생성기를 사용하여 부모 고객과 취업을 원하는 돌봄 제공자 모두에게 어필하는 브랜드 이름을 만듭니다. 전문적이면서도 따뜻한 이름은 양질의 시터를 유치하고 에이전시의 기준에 대해 부모를 안심시킵니다.' },
    { title: '틈새 보육 전문화', description: '특정 분야—영아 케어, 특수 요구 지원, 교육 튜터링, 야간 서비스—를 전문으로 하는 돌봄 제공자가 생성기를 사용하여 고유한 전문성을 반영하는 이름을 찾습니다. 전문화된 이름은 적합한 가족을 타겟팅하고 적절한 요금을 받는 데 도움이 됩니다.' },
  ],
  faqs: [
    { question: '좋은 베이비시팅 비즈니스 이름이란 무엇인가요?', answer: '좋은 베이비시팅 비즈니스 이름은 안심시키고 돌봄을 주며, 친근하고 접근 가능하며, 전문 분야나 가치를 반영해야 합니다. 따뜻하고 매력적이면서 부모에게 신뢰를 줘야 합니다.' },
    { question: '베이비시팅 비즈니스 이름에 개인 이름을 포함해야 하나요?', answer: '개인 이름을 포함하면("사라의 작은 천사들" 같은) 개인적인 터치를 더하고 개인 브랜드 인지도를 구축합니다. 그러나 추가 시터와 함께 확장할 계획이라면 성장을 제한할 수 있습니다. 개인 브랜드를 구축하는지 확장 가능한 비즈니스를 구축하는지 고려하세요.' },
    { question: '부모와의 신뢰 구축에 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 부모는 자녀를 맡기는 것입니다—이름은 안전과 돌봄의 첫인상을 만듭니다. 전문적이면서도 따뜻하게 들리는 이름은 부모가 선택에 확신을 갖는 데 도움이 됩니다.' },
    { question: '베이비시팅 비즈니스 이름에 잘 맞는 단어는?', answer: '효과적인 단어는 돌봄 관련 용어(Nurture, Tender, Gentle), 안전 단어(Safe, Trust, Guardian), 어린이 중심 단어(Little, Kiddo, Angel), 행복한 이미지(Sunshine, Bright, Joy), 성장 용어(Bloom, Sprout, Grow)를 포함합니다.' },
    { question: '비즈니스 이름에 "베이비시팅"을 포함해야 하나요?', answer: '"베이비시팅", "보육", "시터"를 포함하면 서비스가 즉시 명확해지지만 제한적으로 느껴질 수 있습니다. "리틀 가디언즈" 같은 더 넓은 이름은 확장함에 따라 베이비시팅, 튜터링, 기타 보육 서비스에 작동합니다.' },
    { question: '타겟 가족에게 이름을 어떻게 어필하게 만드나요?', answer: '이상적인 고객의 가치를 고려하세요. 환경 의식이 있는 부모는 자연 용어를 높이 평가합니다. 교육 중심 부모는 학습 관련 이름에 반응합니다. 바쁜 전문직 부모는 신뢰성 지표를 중시합니다. 타겟 시장에 맞게 이름을 맞추세요.' },
    { question: '베이비시팅 비즈니스 이름에서 피해야 할 것은?', answer: '피해야 할 것: 비전문적으로 들리는 이름, 신뢰성을 손상시키는 너무 귀여운 이름, 기존 지역 보육 비즈니스와 유사한 이름, 부정적으로 해석될 수 있는 모든 것, 철자나 발음이 어려운 이름.' },
    { question: '베이비시팅 비즈니스 이름의 가용성을 어떻게 확인하나요?', answer: '지역 사업자 등록을 검색하고, 웹사이트를 위한 도메인이 가용한지 확인하고, 소셜 미디어 핸들을 확인하고, 유사한 이름의 다른 지역 보육 제공자를 검색하세요. 베이비시팅 산업에서 지역적 구별이 중요합니다.' },
    { question: '이름에 서비스 지역이나 전문 분야를 반영해야 하나요?', answer: '위치 기반 이름("웨스트사이드 시터즈" 같은)은 지역 SEO에 도움이 되지만 확장을 제한합니다. 전문화 이름("인펀트 엔젤즈" 같은)은 전문성을 명확히 전달하지만 서비스 제공을 제한할 수 있습니다. 구체성과 성장 잠재력의 균형을 맞추세요.' },
    { question: '좋은 이름이 더 높은 요금을 받는 데 도움이 될 수 있나요?', answer: '예. 전문적이고 신뢰할 수 있는 이름은 프리미엄 포지셔닝을 지원합니다. 품질, 경험, 전문화된 돌봄을 암시하는 이름은 일반적이거나 비전문적으로 들리는 대안에 비해 더 높은 요금을 정당화하는 데 도움이 됩니다.' },
  ],
  howToChoose: {
    intro: '베이비시팅 비즈니스의 완벽한 이름을 선택하는 것은 부모에게 공감을 주는 신뢰할 수 있는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 명함, 웹사이트, 소셜 미디어 프로필, 입소문 추천에 나타납니다—안전, 따뜻함, 신뢰를 전달하는 이름을 선택하는 것이 필수적입니다.',
    steps: [
      { title: '부모가 찾는 것 이해하기', description: '보육 결정을 내리는 부모는 특정 품질을 우선시합니다. 이름은 안전과 보안(자녀가 보호받을 것), 돌봄과 양육(자녀가 사랑받고 보살핌을 받을 것), 전문성(합법적이고 책임감 있는 비즈니스를 운영함), 경험과 역량(무엇을 하고 있는지 알고 있음), 따뜻함과 접근성(자녀가 행복할 것)을 즉시 전달해야 합니다.' },
      { title: '따뜻함으로 안심 만들기', description: '날카롭거나 영리하게 작동하는 많은 비즈니스와 달리, 베이비시팅 이름은 따뜻함과 안심을 우선시해야 합니다. 부드러운 소리(S, L, M, N 같은 부드러운 자음이 더 부드럽게 느껴짐), 양육 단어(Care, Love, Tender, Gentle, Warm), 안전 암시(Trust, Safe, Guardian, Haven), 행복한 연상(Sunny, Bright, Joy, Rainbow)을 고려하세요.' },
      { title: '친근하고 접근 가능하게', description: '이름은 부모와 아이 모두를 환영해야 합니다. 부모가 명함을 읽을 때, 아이가 어디 가는지 들을 때, 한 부모가 다른 부모에게 추천할 때, 소셜 미디어 프로필에서 어떻게 들리는지 고려하세요. 너무 형식적인 이름은 잠재 고객을 위협할 수 있고, 너무 캐주얼한 이름은 비전문적으로 보일 수 있습니다.' },
      { title: '전문 분야나 가치 반영', description: '특정 전문성이나 초점이 있다면 이름이 이를 전달할 수 있습니다. 영아 케어 전문가의 경우 Newborn, Infant, Baby, Cradle 같은 용어를 사용하세요. 교육 초점의 경우 Learning, Discovery, Explorer, Growing Minds를 사용하세요. 특수 요구 경험의 경우 Gentle, Patient, Adaptive, Inclusive를 사용하세요. 야간/긴급 서비스의 경우 Anytime, Night Owl, Reliable을 사용하세요.' },
      { title: '가용성과 지역 차별성 확인', description: '선택한 이름이 사업자 등록(해당 지역 비즈니스 이름 데이터베이스 검색), 지역 경쟁사(다른 보육 제공자가 유사한 이름을 가지고 있지 않은지 확인), 도메인 이름(지역 서비스에도 웹사이트가 신뢰성 추가), 소셜 미디어(Facebook, Instagram, 네이버 밴드에서 프로필 확보)를 통해 가용한지 확인하세요.' },
      { title: '성장과 진화 고려', description: '비즈니스가 어떻게 진화할지 생각하세요: 팀원 추가(여러 시터에게 이름이 작동하는가?), 서비스 확장(튜터링, 교통, 펫 케어를 추가할 수 있는가?), 지리적 성장(인근 지역에서 이름이 작동하는가?), 연령대 변경(나중에 더 큰 아이나 청소년을 돌볼 수 있는가?). 유연한 이름을 선택하면 비즈니스가 성장함에 따라 비용이 많이 드는 리브랜딩을 피할 수 있습니다.' },
      { title: '부모와 테스트', description: '최종 결정 전에 부모(이상적으로 타겟 인구 통계)로부터 피드백을 받으세요. 이름이 신뢰할 수 있게 들리는지, 이 이름의 서비스에 자녀를 맡기는 것이 편안할지, 쉽게 기억하고 철자를 쓸 수 있는지, 다른 부모에게 추천할 것인지, 이 비즈니스 이름에서 어떤 서비스를 기대하는지 물어보세요.' },
    ],
  },
  businessNameIdeas: [
    { name: '키도키퍼스', description: '아이들을 안전하게 지키고 즐겁게 해주는 베이비시팅 비즈니스를 암시합니다.' },
    { name: '체럽샤프롱', description: '소중한 아이들을 위한 천사 같은 돌봄과 안내를 암시합니다.' },
    { name: '타이니트러스티즈', description: '가장 작은 가족 구성원을 위한 신뢰할 수 있는 돌봄을 전달합니다.' },
    { name: '리틀러브벅스', description: '사랑으로 부드러운 돌봄을 암시하는 따뜻하고 애정 어린 이름.' },
    { name: '플레이풀팰스', description: '보육 경험에서 우정과 즐거움을 강조합니다.' },
    { name: '젠틀가디언즈', description: '보호적 안전과 양육하는 부드러움을 결합합니다.' },
    { name: '선샤인시터즈', description: '행복한 돌봄을 암시하는 밝고 쾌활한 이름.' },
    { name: '세이프헤이븐차일드케어', description: '부모가 찾는 안전을 직접적으로 전달합니다.' },
    { name: '그로잉기글즈', description: '기쁨과 웃음이 가득한 발달 돌봄을 암시합니다.' },
    { name: '텐더토츠', description: '어린 아이들을 위한 부드럽고 사랑스러운 돌봄을 암시합니다.' },
    { name: '브라이트비기닝즈', description: '발달을 위한 긍정적인 시작으로 보육을 포지셔닝합니다.' },
    { name: '너처네스트', description: '양육 돌봄과 아늑하고 안전한 이미지를 결합합니다.' },
    { name: '해피핸즈', description: '아이들과 함께하는 돌보고 도움을 주는 지원을 암시합니다.' },
    { name: '리틀레전즈', description: '아이들이 특별하게 느끼게 하면서 양질의 돌봄을 암시합니다.' },
    { name: '커들크루', description: '영아와 유아 케어를 위한 따뜻하고 애정 어린 이름.' },
    { name: '메도우마인더스', description: '야외 놀이와 부드러운 돌봄을 암시하는 자연에서 영감받은 이름.' },
    { name: '스타더스트시터즈', description: '아이들의 상상력에 어필하는 마법 같고 특별한 이름.' },
    { name: '프티패트론즈', description: '작지만 중요한 고객에게 헌신적인 서비스를 암시합니다.' },
    { name: '토트튜터스', description: '보육과 교육 초점 및 학습을 결합합니다.' },
    { name: '엔젤워치', description: '부드럽고 사랑스러운 돌봄과 함께 수호천사 같은 보호를 암시합니다.' },
  ],
},

'beauty': {
  slug: 'beauty',
  name: '뷰티 비즈니스 이름 생성기',
  title: '무료 AI 뷰티 사업 이름 아이디어 생성기',
  description: '살롱, 스튜디오, 화장품 브랜드를 위한 화려하고 세련된 이름을 생성합니다.',
  metaDescription: 'AI 기반 생성기로 뷰티 비즈니스를 위한 매력적인 이름을 만드세요. 살롱, 스튜디오, 화장품 브랜드를 위한 화려하고 세련된 이름을 생성하세요. 무료이며 매력적입니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '뷰티 비즈니스를 설명해 주세요...',
  inputPlaceholder: '예: 컬러 트리트먼트와 브라이덜 스타일링을 전문으로 하는 럭셔리 헤어 살롱',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['화려하고 세련된', '모던하고 트렌디한', '자연스럽고 오가닉한', '파워풀하고 대담한'],
      default: '화려하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in the beauty, cosmetics, and personal care industry. Your role is to generate glamorous, sophisticated business names that convey elegance, allure, and the transformative power of beauty services and products.

BEAUTY BUSINESS CONTEXT:
The beauty industry encompasses:
- Hair salons and styling studios
- Makeup artistry and cosmetics
- Nail salons and nail art
- Skincare and facial treatments
- Spa and wellness centers
- Cosmetics brands and product lines
- Bridal and special occasion beauty
- Barbershops and grooming services

NAME CHARACTERISTICS FOR BEAUTY BUSINESSES:
1. **Glamorous and Appealing**
   - Evokes beauty, elegance, and style
   - Creates aspiration and desire
   - Appeals to clients seeking transformation

2. **Memorable and Distinctive**
   - Stands out in a competitive market
   - Easy to remember and recommend
   - Works well for social media and marketing

3. **Reflective of Services**
   - Hints at the type of beauty services offered
   - Appeals to target clientele
   - Communicates brand personality

4. **Versatile and Timeless**
   - Works across multiple service categories
   - Doesn't feel dated
   - Suitable for growth and expansion

OUTPUT REQUIREMENTS:
For each beauty business name generated, provide:
- The business name
- A brief explanation of why it works for a beauty business

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '헤어 살롱 런칭',
      description: '새로운 헤어 살롱이나 스타일링 스튜디오를 여는 스타일리스트가 뷰티 비즈니스 이름 생성기를 사용하여 아티스트리와 전문성을 전달하는 이름을 찾습니다. 화려하고 기억에 남는 이름은 고객을 유치하고 브랜드 아이덴티티를 구축하며 입소문 추천을 장려합니다.',
    },
    {
      title: '화장품 브랜드 만들기',
      description: '메이크업 라인이나 스킨케어 제품을 출시하는 기업가가 생성기를 사용하여 소매 공간과 온라인 플랫폼에서 눈에 띄는 브랜드 이름을 만듭니다. 강력한 뷰티 브랜드 이름은 즉각적인 인지도를 만들고 제품 포지셔닝을 지원합니다.',
    },
    {
      title: '풀서비스 뷰티 스튜디오',
      description: '헤어, 메이크업, 네일, 스킨케어 같은 여러 뷰티 서비스를 제공하는 비즈니스 오너가 생성기를 사용하여 다양한 제공을 포괄하면서 전문성을 전달하는 이름을 찾습니다. 다재다능한 이름은 제한 없이 확장을 지원합니다.',
    },
  ],
  faqs: [
    { question: '좋은 뷰티 비즈니스 이름이란 무엇인가요?', answer: '좋은 뷰티 비즈니스 이름은 화려하고 매력적이며, 기억에 남고 독특하며, 서비스를 반영하고, 다재다능하고 시대를 초월합니다. 변화를 추구하는 고객에게 어필하면서 경쟁 시장에서 눈에 띄어야 합니다.' },
    { question: '뷰티 비즈니스 이름에 "살롱"이나 "스튜디오"를 포함해야 하나요?', answer: '"살롱", "스튜디오", "뷰티", "스파" 같은 설명어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 뷰티 비즈니스가 독립형 이름을 사용합니다. 포지셔닝에 명확성이 더 중요한지 독특한 브랜딩이 더 중요한지에 따라 선택하세요.' },
    { question: '뷰티 비즈니스 브랜딩에서 이름이 얼마나 중요한가요?', answer: '뷰티 산업에서 브랜딩은 매우 중요합니다—고객은 종종 미학과 감정을 기반으로 선택합니다. 이름은 비즈니스의 스타일, 품질, 개성에 대한 첫인상을 만듭니다. 화려한 이름은 고급 고객을 유치하고 프리미엄 가격을 정당화할 수 있습니다.' },
    { question: '뷰티 비즈니스 이름에 잘 맞는 단어는?', answer: '효과적인 단어는 뷰티 용어(Glow, Radiance, Luxe, Glamour), 변화 단어(Transform, Renew, Enhance), 우아함 용어(Chic, Elite, Pristine), 자연 이미지(Bloom, Petal, Rose, Willow), 색상/감각 단어(Golden, Velvet, Silk)를 포함합니다.' },
    { question: '이름이 특정 서비스를 반영해야 하나요?', answer: '"헤어 아트 스튜디오" 같은 서비스별 이름은 명확성을 제공하지만 확장을 제한합니다. "글램 스튜디오" 같은 더 넓은 이름은 헤어, 메이크업, 기타 서비스에 작동합니다. 비즈니스 계획에 따라 구체성과 유연성의 균형을 맞추세요.' },
    { question: '뷰티 비즈니스에서 어떤 이름이 다른 타겟 고객에게 작동하나요?', answer: '럭셔리/하이엔드 고객에게는 우아함과 독점성을 암시하는 세련된 이름을 사용하세요. 트렌디/젊은 고객에게는 모던하고 장난스러운 이름을 사용하세요. 자연/오가닉 초점의 경우 식물이나 자연 단어를 사용하세요. 전문/기업 고객에게는 깔끔하고 전문적인 이름을 사용하세요.' },
    { question: '뷰티 비즈니스 이름에서 피해야 할 것은?', answer: '피해야 할 것: 너무 일반적인 이름(뷰티 살롱), 철자나 발음이 어려운 이름, 경쟁사와 너무 유사한 이름, 금방 구식이 될 수 있는 트렌디한 단어, 서비스 확장을 제한하는 이름, 긍정적으로 번역되지 않을 수 있는 외국어 단어.' },
    { question: '뷰티 비즈니스 이름의 가용성을 어떻게 확인하나요?', answer: '지역 사업자 등록을 검색하고, 도메인 가용성(.com 또는 .co.kr 선호)을 확인하고, 뷰티 비즈니스가 번성하는 인스타그램과 페이스북 핸들을 확인하고, 상표 데이터베이스를 검토하고, 해당 지역에서 유사한 이름의 뷰티 비즈니스를 검색하세요.' },
    { question: '개인 이름을 뷰티 비즈니스에 사용해야 하나요?', answer: '개인 이름 사용(예: "수진 헤어 스튜디오")은 개인 브랜드와 고객 충성도를 구축합니다. 유명 스타일리스트에게 특히 효과적입니다. 그러나 매각이 복잡해지고 팀 확장이 제한될 수 있습니다. 장기 목표를 고려하세요.' },
    { question: '좋은 이름이 더 높은 가격을 받는 데 도움이 될 수 있나요?', answer: '물론입니다. 세련되고 전문적인 이름은 프리미엄 브랜드 인식을 지원합니다. 럭셔리와 품질을 암시하는 이름은 고객이 더 높은 가격을 기대하고 지불할 용의가 있게 하여 가격 결정력을 향상시킵니다.' },
  ],
  howToChoose: {
    intro: '뷰티 비즈니스의 완벽한 이름을 선택하는 것은 아름다움, 변화, 자기 표현을 추구하는 고객에게 공감을 주는 매력적인 브랜드를 만드는 데 필수적입니다. 비즈니스 이름은 간판부터 명함, 소셜 미디어 프로필, 고객 추천까지 모든 곳에 나타납니다—전문성, 스타일, 제공하는 뷰티 경험을 담은 이름을 선택하는 것이 필수적입니다.',
    steps: [
      { title: '브랜드 아이덴티티와 타겟 고객 정의', description: '이름 브레인스토밍 전에 뷰티 비즈니스의 아이덴티티를 명확히 하세요. 어떤 특정 뷰티 서비스를 제공할 것인지(헤어, 메이크업, 네일, 스킨케어, 또는 조합), 이상적인 고객이 누구인지(연령, 스타일 선호도, 소득 수준), 브랜드가 어떤 분위기를 만들고 싶은지(럭셔리, 트렌디, 자연스러운, 에지 있는), 어떤 가격대를 타겟으로 하는지(하이엔드, 중간, 예산 친화적), 경쟁사와 무엇이 다른지 고려하세요.' },
      { title: '화려함과 매력 창조', description: '뷰티 비즈니스 이름은 포부와 욕망을 불러일으켜야 합니다. 이름은 아름다움과 스타일을 연상시키고, 변화의 약속을 만들고, 말할 때 화려하게 느껴지고, 고객이 자신과 연관시키고 싶게 만들어야 합니다. 럭셔리, 광채, 우아함, 변화를 암시하는 단어를 고려하세요.' },
      { title: '기억력과 독특함 확보', description: '경쟁이 치열한 뷰티 시장에서 이름은 눈에 띄어야 합니다. 이름은 한 번 들으면 기억되고, 고객이 친구들에게 쉽게 추천할 수 있고, 눈에 띄는 시각적 아이덴티티를 만들고, 지역의 다른 살롱이나 스튜디오와 혼동되지 않아야 합니다.' },
      { title: '서비스와 개성 반영', description: '이름이 뷰티 비즈니스를 특별하게 만드는 것을 암시하게 하세요. 럭셔리/하이엔드 포지셔닝의 경우 독점성과 세련됨을 암시하는 우아한 이름을 사용하세요. 트렌디/모던 초점의 경우 에지 있거나 현대적인 이름을 사용하세요. 자연/오가닉 접근의 경우 식물, 자연 요소, 또는 순수 이미지를 사용하세요. 대담/표현적 스타일의 경우 자신감과 창의성을 암시하는 역동적인 이름을 사용하세요.' },
      { title: '소셜 미디어 호환성 확인', description: '뷰티 비즈니스는 인스타그램, 틱톡, 페이스북 같은 시각적 플랫폼에서 번성합니다. 이름은 주요 플랫폼에서 핸들로 사용 가능하고, 해시태그로 잘 작동하고, 소셜 공유에서 철자가 쉽고, 기억에 남을 만큼 독특하면서도 검색 가능해야 합니다.' },
      { title: '가용성 철저히 확인', description: '이름에 빠지기 전에 완전한 가용성을 확인하세요: 사업자 등록(지역 데이터베이스 검색), 도메인 이름(.com 또는 .co.kr 선호), 소셜 미디어 핸들(인스타그램, 페이스북, 틱톡), 상표 충돌, 해당 지역의 유사한 뷰티 비즈니스.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 이상적인 고객을 대표하는 사람들과 최고의 이름 선택을 테스트하세요. 이름이 매력적이고 화려하게 느껴지는지, 어떤 유형의 뷰티 비즈니스를 암시하는지, 친구들에게 추천할 것인지, 프리미엄인지 접근 가능한지 또는 중간으로 느껴지는지, 쉽게 기억하고 철자를 쓸 수 있는지 물어보세요.' },
    ],
  },
  businessNameIdeas: [
    { name: '글래머글로우', description: '화려함과 빛나는 결과를 결합—모든 뷰티 서비스에 매력적입니다.' },
    { name: '엘리트에지스튜디오', description: '프리미엄 포지셔닝과 세련된 스타일을 암시합니다.' },
    { name: '라디언트리플렉션즈', description: '빛나는 아름다움과 변화를 전달합니다.' },
    { name: '벨벳바닐라뷰티', description: '매끄러움과 사치를 연상시키는 럭셔리한 질감의 이름.' },
    { name: '블러쉬앤블룸', description: '자연스러운 뷰티 향상과 성장을 암시합니다.' },
    { name: '골든글램스튜디오', description: '풍요롭고 프리미엄 뷰티 경험을 암시합니다.' },
    { name: '시크시그니처', description: '세련되고 독특한 스타일을 전달합니다.' },
    { name: '럭스러브뷰티', description: '럭셔리와 애정 어린 돌봄을 결합합니다.' },
    { name: '페탈퍼펙션', description: '섬세한 자연미와 흠잡을 데 없는 결과를 암시합니다.' },
    { name: '다이아몬드더스트', description: '희귀하고 빛나는 아름다움의 함축—하이엔드 포지셔닝.' },
    { name: '엔비뷰티바', description: '부러움을 불러일으키는 결과를 암시합니다.' },
    { name: '폴리쉬드펄', description: '정제되고 세련된 아름다움을 전달합니다.' },
    { name: '로즈골드스튜디오', description: '트렌디하고 현대적이며 따뜻한 럭셔리 톤.' },
    { name: '스타라이트스타일', description: '스타 품질의 변화를 암시합니다.' },
    { name: '마제스틱메이크오버', description: '웅장하고 극적인 뷰티 변화를 전달합니다.' },
    { name: '프로스티드팁스', description: '헤어 살롱에 완벽, 하이라이트와 컬러 서비스를 암시합니다.' },
    { name: '실크앤쉬머', description: '매끄러움과 반짝임을 결합—헤어와 메이크업에 이상적입니다.' },
    { name: '오퓰런트옴브레', description: '화려하고 트렌디한 컬러 서비스를 암시합니다.' },
    { name: '프리스틴프리즘', description: '완벽함과 다양한 뷰티 서비스를 암시합니다.' },
    { name: '벨라뷰티콜렉티브', description: '이탈리아풍 우아함과 포괄적인 뷰티 서비스를 결합합니다.' },
  ],
},

// ==================== KOREAN (ko) TRANSLATION - BATCH 2 (6-10) ====================

'boutique': {
  slug: 'boutique',
  name: '부티크 비즈니스 이름 생성기',
  title: '무료 AI 부티크 사업 이름 아이디어 생성기',
  description: '패션샵, 선물 가게, 스페셜티 리테일을 위한 시크하고 독특한 이름을 생성합니다.',
  metaDescription: 'AI 기반 생성기로 시크한 부티크 이름을 찾아보세요. 패션샵, 선물 가게, 스페셜티 리테일을 위한 독특하고 스타일리시한 이름을 만들어 보세요. 빠르고 무료이며 인상적입니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '부티크를 설명해 주세요...',
  inputPlaceholder: '예: 빈티지와 현대 디자이너 제품을 큐레이션한 여성 패션 부티크',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['시크하고 세련된', '기발하고 매력적인', '모던하고 미니멀한', '빈티지하고 클래식한'],
      default: '시크하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in retail boutiques, specialty shops, and curated shopping experiences. Your role is to generate chic, unique business names that convey exclusivity, style, and personalized shopping experiences.

BOUTIQUE BUSINESS CONTEXT:
The boutique retail industry encompasses:
- Fashion and clothing boutiques
- Jewelry and accessory shops
- Home décor and gift boutiques
- Bridal and formalwear shops
- Children's boutiques
- Vintage and consignment stores
- Specialty food boutiques
- Artisan and handmade shops

NAME CHARACTERISTICS FOR BOUTIQUES:
1. **Chic and Stylish**
   - Evokes fashion-forward sophistication
   - Appeals to style-conscious shoppers
   - Suggests curated, trendy selection

2. **Exclusive and Unique**
   - Implies special, hard-to-find items
   - Creates sense of discovery
   - Positions as alternative to mass retail

3. **Personal and Intimate**
   - Conveys boutique shopping experience
   - Warm, welcoming atmosphere

4. **Artisan and Curated**
   - Suggests carefully selected merchandise
   - Quality over quantity

OUTPUT REQUIREMENTS:
For each boutique name generated, provide:
- The business name
- A brief explanation of why it works for a boutique

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '패션 부티크 런칭',
      description: '의류 부티크를 오픈하는 창업자들은 생성기를 사용하여 스타일, 독점성, 큐레이션된 패션을 즉시 전달하는 이름을 찾습니다. 시크한 이름은 패션에 민감한 고객을 유치하고 대중 소매업보다 높은 부티크 가격을 정당화하는 브랜드 아이덴티티를 만드는 데 도움이 됩니다.',
    },
    {
      title: '선물 및 홈 데코 샵 네이밍',
      description: '선물, 홈 데코, 수공예품을 전문으로 하는 상점 주인은 생성기를 사용하여 발견과 독특한 아이템을 암시하는 이름을 만듭니다. 올바른 이름은 체인점에서 찾을 수 없는 특별하고 사려 깊은 아이템을 위한 목적지로 상점을 포지셔닝합니다.',
    },
    {
      title: '온라인 부티크 브랜드 구축',
      description: '온라인 부티크를 런칭하는 이커머스 창업자들은 생성기를 사용하여 디지털 플랫폼 전반에서 작동하는 기억에 남는 이름을 만듭니다. 독특한 이름은 혼잡한 온라인 마켓플레이스에서 브랜드 인지도를 높이고 소셜 미디어 마케팅을 지원합니다.',
    },
  ],
  faqs: [
    { question: '좋은 부티크 이름이란 무엇인가요?', answer: '좋은 부티크 이름은 시크하고 스타일리시하며, 독점적이고 독특하며, 개인적이고 친밀한 쇼핑 경험을 만들어야 합니다. 대중 소매업체와 차별화하고 특별한 아이템을 찾는 고객에게 어필해야 합니다.' },
    { question: '부티크 이름에 판매 상품을 설명해야 하나요?', answer: '미묘한 힌트가 명시적인 설명보다 효과적입니다. "버드나무와 레이스"는 여성스러운 의류를 우아하게 암시하지만, "여성 패션 스토어"는 일반적으로 들립니다. 이름은 구매자에게 미학의 감각을 주면서 호기심을 만들어야 합니다.' },
    { question: '부티크 이름이 고객 유치에 얼마나 중요한가요?', answer: '매우 중요합니다. 부티크 쇼핑객은 일반 소매업 이상의 경험을 추구합니다—이름은 독점성과 스타일의 첫인상을 만듭니다. 매력적인 이름은 사람들을 끌어들이고 내부의 큐레이션된 쇼핑 경험에 대한 기대를 설정합니다.' },
    { question: '어떤 네이밍 스타일이 다른 부티크 유형에 적합한가요?', answer: '패션 부티크는 프랑스어/세련된 이름이 어울립니다. 선물 가게는 기발하거나 매력적일 수 있습니다. 홈 데코는 자연에서 영감을 받은 우아함이 좋습니다. 아동용 부티크는 장난스럽고 달콤할 수 있습니다. 이름 스타일을 상품과 타겟 고객에 맞추세요.' },
    { question: '부티크 비즈니스에 제 이름을 사용해야 하나요?', answer: '개인 이름(예: "수진 스타일")은 친밀감을 만들지만 확장성과 판매 가능성을 제한할 수 있습니다. 개인 서비스가 브랜드인 오너 운영 부티크에 잘 맞습니다. 개인 브랜드를 구축하는지 확장 가능한 브랜드를 구축하는지 고려하세요.' },
    { question: '부티크 이름을 기억에 남게 만드는 방법은?', answer: '연상적인 이미지를 사용하고, 기분 좋은 소리(두운, 리듬)를 만들고, 짧게 유지하고(최대 2-3단어), 긍정적인 연상이 있는 단어를 선택하세요. 한 번 듣고 이름을 기억해달라고 요청하여 테스트하세요.' },
    { question: '부티크 네이밍에서 피해야 할 실수는?', answer: '피해야 할 것: 기존 지역 상점과 너무 유사한 이름, 어려운 철자나 발음, 너무 일반적인 이름, 제품 확장을 제한하는 이름, 할인이나 대량 소매처럼 들리는 모든 것.' },
    { question: '부티크 이름 가용성을 어떻게 확인하나요?', answer: '지역 사업자 등록을 검색하고, 도메인 가용성을 확인하고, 인스타그램과 핀터레스트 핸들을 확인하고, 해당 지역에 유사한 이름의 기존 소매업체를 검색하고, 상표 데이터베이스를 검토하세요.' },
    { question: '부티크 이름이 온라인과 오프라인 모두에서 작동해야 하나요?', answer: '예. 오프라인 부티크도 온라인 존재가 필요합니다. 매장 간판, 웹사이트, 소셜 미디어, 이커머스 플랫폼에서 똑같이 잘 작동하는 이름을 선택하세요.' },
    { question: '부티크 이름이 마케팅에 도움이 될 수 있나요?', answer: '물론입니다. 기억에 남고 매력적인 이름은 입소문을 만들고, 쇼핑백에서 멋지게 보이며(무료 광고), 소셜 미디어 공유 가능성을 만듭니다. 올바른 이름은 마케팅 자산입니다.' },
  ],
  howToChoose: {
    intro: '부티크 비즈니스의 완벽한 이름을 선택하는 것은 독특하고 큐레이션된 경험을 찾는 쇼핑객을 끌어들이는 매력적인 브랜드를 만드는 데 중요한 단계입니다. 이름은 매장 간판, 쇼핑백, 소셜 미디어 프로필, 입소문 추천에 나타납니다—제공하는 독점적이고 스타일리시한 쇼핑 경험을 담은 이름을 선택하는 것이 필수적입니다.',
    steps: [
      { title: '부티크의 고유한 정체성 정의', description: '이름 생성 전에 부티크를 특별하게 만드는 것을 명확히 하세요. 큐레이션하는 제품 유형(패션, 선물, 홈, 주얼리), 이상적인 고객(연령, 스타일, 가치, 소득 수준), 브랜드를 정의하는 미학(모던 미니멀, 로맨틱 빈티지, 보헤미안, 클래식), 쇼핑객이 경험하기를 원하는 것(발견, 럭셔리, 영감), 다른 지역 소매업체와의 차별점을 고려하세요.' },
      { title: '시크한 스타일과 세련됨 구현', description: '부티크는 큐레이션, 품질, 스타일로 대량 소매업과 차별화됩니다. 이름은 패션 포워드 감각, 신중하게 선택된 품질 상품, 세련됨과 취향, 스타일 전문성과 트렌드 인식을 즉시 암시해야 합니다. 유럽에서 영감받은 용어(프랑스어, 이탈리아어), 패션 어휘, 세련된 쇼핑객을 위한 목적지로 상점을 포지셔닝하는 우아한 이미지를 고려하세요.' },
      { title: '독점성과 발견 창조', description: '부티크의 매력은 다른 곳에서 찾을 수 없는 특별한 아이템을 찾는 데 있습니다. 이름은 독특함("쇼핑몰에서는 찾을 수 없는"), 발견("숨겨진 보물이 기다린다"), 큐레이션("당신을 위해 전문적으로 선택됨"), 친밀함("기업이 아닌 개인적인")을 불러일으켜야 합니다. 비밀, 발견, 컬렉션, 보물을 암시하는 단어가 부티크 쇼핑객이 추구하는 특별한 발견의 감각을 만듭니다.' },
      { title: '물리적 및 디지털 존재 고려', description: '부티크 이름은 여러 맥락에서 작동해야 합니다: 매장 간판(읽기 쉽고 우아하며 표준 간판 형식에 맞음), 쇼핑백(거리에서 들고 다닐 때 아름다워 보임), 명함(전문적이고 기억에 남음), 웹사이트와 소셜 미디어(입력, 검색, 공유하기 쉬움), 입소문(추천할 때 말하고 기억하기 쉬움).' },
      { title: '가용성과 독특함 확인', description: '선택한 이름이 사용 가능하고 고유한지 확인하세요: 사업자 등록(지역 요구 사항), 도메인 이름(웹 존재 확보), 소셜 미디어(인스타그램과 핀터레스트는 부티크에 중요), 지역 경쟁(시장에 유사한 상점 없음), 상표 검색(충돌 확인). 부티크는 독특함으로 번성합니다—이름은 분명히 당신 것이어야 합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 이상적인 쇼핑객의 피드백을 모으세요. 이름이 미학적 감각에 어필하는지, 이 이름의 상점에서 쇼핑하고 싶은지, 스타일리시한 친구들과 이름을 공유할 것인지, 내부에 어떤 유형의 제품을 기대하는지, 특별하게 느껴지는지 일반적으로 느껴지는지 물어보세요.' },
      { title: '성장과 진화 고려', description: '부티크의 미래를 생각하세요: 추가 제품 카테고리, 두 번째 매장이나 프랜차이즈 가능성, 온라인 확장, 자체 브랜드 상품. 현재의 본질을 포착하면서 성장을 수용하는 이름을 선택하세요.' },
    ],
  },
  businessNameIdeas: [
    { name: '벨벳바인', description: '럭셔리한 질감과 자연스러운 우아함—세련되면서도 접근하기 쉽습니다.' },
    { name: '큐레이티드참', description: '신중하게 선택되고 매력적인 상품을 직접적으로 전달합니다.' },
    { name: '릴리레인', description: '달콤하고 자연에서 영감받은 이름으로 즐거운 쇼핑 산책을 암시합니다.' },
    { name: '벨라파인즈', description: '이탈리아풍 우아함과 발견의 결합—아름다운 희귀 아이템.' },
    { name: '더스타일드네스트', description: '스타일리시한 홈 및 라이프스타일 제품을 위한 아늑하고 큐레이션된 공간.' },
    { name: '위스퍼윌로우', description: '자연스러운 세련됨이 있는 부드럽고 로맨틱한 이름.' },
    { name: '쁘띠메종', description: '프랑스어로 "작은 집"—친밀하고 우아한 부티크 경험.' },
    { name: '골든스레드', description: '품질, 장인정신, 연결을 암시합니다.' },
    { name: '트레저드파인즈', description: '상품을 가치 있는 발견으로 포지셔닝합니다.' },
    { name: '모던뮤즈', description: '스타일에 민감한 쇼핑객을 위한 현대적 영감.' },
    { name: '레어블룸', description: '독점적이고 꽃피는—특별한 아이템이 번성합니다.' },
    { name: '시크헤이븐', description: '패션 포워드 쇼핑객을 위한 스타일리시한 피난처.' },
    { name: '실버라이닝', description: '귀중한 품질이 있는 낙관적인 우아함.' },
    { name: '아틀리에셰리', description: '프랑스풍 세련됨—특별한 발견을 위한 "사랑하는 작업실".' },
    { name: '히든젬스', description: '특별하고 희귀한 아이템의 발견을 직접적으로 전달합니다.' },
    { name: '매그놀리아마켓', description: '우아하고 자연에서 영감받은 아름다움이 있는 남부 매력.' },
    { name: '더스타일스튜디오', description: '부티크를 개인 스타일을 위한 창의적 공간으로 포지셔닝합니다.' },
    { name: '빈티지벨벳', description: '시대를 초월한 매력이 있는 클래식 럭셔리.' },
    { name: '올리브앤그레이스', description: '세련된 스타일이 있는 자연스러운 우아함.' },
    { name: '앙코르엘레강스', description: '다시 방문할 가치가 있는 스타일—재방문을 암시합니다.' },
  ],
},

'cafe': {
  slug: 'cafe',
  name: '카페 비즈니스 이름 생성기',
  title: '무료 AI 카페 사업 이름 아이디어 생성기',
  description: '커피숍, 베이커리 카페, 브런치 장소를 위한 따뜻하고 환영하는 이름을 생성합니다.',
  metaDescription: '번거로움 없이 완벽한 카페 이름을 얻으세요. AI 도구가 커피숍, 베이커리 카페, 브런치 장소를 위한 독특하고 환영하는 이름을 만들어 드립니다. 무료이며 성공을 위해 설계되었습니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '카페를 설명해 주세요...',
  inputPlaceholder: '예: 장인 페이스트리와 지역 커뮤니티에 초점을 맞춘 아늑한 동네 커피숍',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['따뜻하고 아늑한', '모던하고 장인 스타일', '커뮤니티 중심', '장난스럽고 창의적인'],
      default: '따뜻하고 아늑한',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in cafes, coffee shops, and casual dining establishments. Your role is to generate warm, inviting business names that create welcoming atmospheres and convey the cozy, comfortable experience customers seek.

CAFE BUSINESS CONTEXT:
The cafe industry encompasses:
- Coffee shops and espresso bars
- Tea houses and cafes
- Brunch and breakfast cafes
- Bakery cafes
- Internet cafes and workspaces
- Specialty coffee roasters
- Neighborhood gathering spots
- Artisan and third-wave coffee shops

NAME CHARACTERISTICS FOR CAFES:
1. **Warm and Welcoming**
   - Invites customers to linger
   - Creates sense of comfort
   - Suggests friendly atmosphere

2. **Aromatic and Sensory**
   - Evokes coffee and food aromas
   - Suggests taste and quality

3. **Community and Connection**
   - Positions cafe as gathering place
   - Social, neighborhood feel

4. **Quality and Craft**
   - Suggests artisan approach
   - Quality ingredients and preparation

OUTPUT REQUIREMENTS:
For each cafe name generated, provide:
- The business name
- A brief explanation of why it works for a cafe

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '새 커피숍 런칭',
      description: '커피숍을 오픈하는 창업자들은 카페 비즈니스 이름 생성기를 사용하여 따뜻함, 품질, 커뮤니티를 즉시 전달하는 이름을 찾습니다. 환영하는 이름은 고객이 찾는 분위기—집과 직장 사이의 머물고 싶은 제3의 공간—를 만드는 데 도움이 됩니다.',
    },
    {
      title: '베이커리 카페 브랜딩',
      description: '베이킹과 카페 서비스를 결합하는 베이커리 주인은 생성기를 사용하여 갓 구운 따뜻함과 편안한 모임 공간을 암시하는 이름을 만듭니다. 올바른 이름은 이중 제공을 전달하면서 일관된 브랜드 아이덴티티를 만듭니다.',
    },
    {
      title: '스페셜티 커피 포지셔닝',
      description: '스페셜티 카페를 오픈하는 서드웨이브 커피 애호가들은 생성기를 사용하여 거만하게 들리지 않으면서 장인정신, 품질, 전문성을 전달하는 이름을 찾습니다. 잘 선택된 이름은 커피 감정가를 끌어들이면서도 모든 사람에게 환영하는 느낌을 유지합니다.',
    },
  ],
  faqs: [
    { question: '좋은 카페 이름이란 무엇인가요?', answer: '좋은 카페 이름은 따뜻하고 환영해야 하며, 품질 좋은 커피와 음식을 암시하고, 커뮤니티 모임 공간의 감각을 만들어야 합니다. 사람들이 방문하고, 머물고, 돌아오고 싶게 만들어야 합니다.' },
    { question: '카페 이름에 "커피"나 "카페"를 포함해야 하나요?', answer: '커피 관련 단어를 포함하면 즉각적인 명확성을 제공하지만 필수는 아닙니다. "모닝 브루"는 커피를 명확히 암시하지만 "아늑한 코너"는 추가 맥락이 필요하지만 잘 마케팅되면 효과적입니다. 지역 경쟁과 간판을 고려하세요.' },
    { question: '카페 이름이 고객 유치에 얼마나 중요한가요?', answer: '매우 중요합니다. 이름은 분위기와 경험의 첫인상을 만듭니다. 따뜻하고 환영하는 이름은 편안한 공간을 찾는 사람들을 끌어들입니다. 클리니컬하거나 일반적인 이름은 방문을 유도하지 않습니다.' },
    { question: '어떤 카페 네이밍 트렌드를 고려해야 하나요?', answer: '현재 트렌드는 위치 기반 이름, 장인/아티잔 참조, 아늑한 이미지, 장난스러운 워드플레이를 포함합니다. 창의적으로 결합하지 않는 한 "자바" 같은 과다 사용된 용어는 피하세요. 서드웨이브 커피숍은 종종 추상적이거나 개인적인 이름을 사용합니다.' },
    { question: '카페 이름을 본인 이름이나 가족 이름으로 지어야 하나요?', answer: '개인 이름(예: "로사 카페" 또는 "앤더슨 커피")은 친밀함과 가족적인 느낌을 만듭니다. 동네 카페에 잘 맞지만 확장성을 제한할 수 있습니다. 개인적인 유산을 구축하는지 프랜차이즈 가능한 브랜드를 구축하는지 고려하세요.' },
    { question: '커뮤니티 모임 공간처럼 느껴지는 이름을 어떻게 만드나요?', answer: '모임을 암시하는 단어(커먼스, 콜렉티브, 코너), 동네(로컬, 메인 스트리트), 연결(미트, 게더, 투게더)을 사용하세요. 비인격적으로 느껴지는 기업 느낌의 이름은 피하세요.' },
    { question: '카페 이름에 잘 맞는 단어는?', answer: '효과적인 단어는 커피 용어(빈, 브루, 로스트), 따뜻함 단어(코지, 웜, 하스), 편안함 용어(헤이븐, 네스트, 누크), 시간 참조(모닝, 던, 선라이즈)를 포함합니다.' },
    { question: '카페 이름 가용성을 어떻게 확인하나요?', answer: '지역 사업자 등록을 검색하고, 도메인 가용성을 확인하고, 소셜 미디어 핸들을 확인하고, 해당 지역에 유사한 이름의 다른 카페를 검색하고, 확장을 계획하는 경우 상표 영향을 고려하세요.' },
    { question: '카페 이름이 음식과 커피 모두에 맞아야 하나요?', answer: '커피와 함께 상당한 음식을 제공하는 경우 둘 다 수용하는 이름을 선택하세요. "모닝 브루"는 커피를 암시하고, "선라이즈 키친"은 음식을 암시하고, "더 데일리 그라인드"는 둘 다에 맞습니다.' },
    { question: '좋은 카페 이름이 마케팅에 도움이 될 수 있나요?', answer: '물론입니다. 기억에 남는 이름은 입소문을 만들고, 컵과 굿즈에서 멋지게 보이며, 소셜 미디어 공유 가능성을 만듭니다. 올바른 이름은 사람들이 공유하고 싶어하는 마케팅 자산이 됩니다.' },
  ],
  howToChoose: {
    intro: '카페 비즈니스의 완벽한 이름을 선택하는 것은 따뜻함, 품질, 커뮤니티를 찾는 고객을 끌어들이는 환영하는 브랜드를 만드는 데 필수적인 단계입니다. 이름은 매장 간판, 커피 컵, 메뉴, 소셜 미디어에 나타납니다—내부의 아늑한 경험의 첫인상을 만듭니다.',
    steps: [
      { title: '카페의 개성과 분위기 정의', description: '이름 브레인스토밍 전에 카페의 고유한 특성을 명확히 하세요. 만드는 카페 유형(커피숍, 베이커리 카페, 브런치 장소, 스페셜티 로스터), 원하는 분위기(아늑하고 친밀한, 모던하고 세련된, 소박하고 홈스러운), 이상적인 고객(재택근무자, 동네 가족, 커피 애호가, 학생), 고객이 경험하기를 원하는 것(빠르고 효율적인, 머무르고 여유로운), 다른 지역 카페와의 차별점을 고려하세요.' },
      { title: '따뜻함과 환영 창조', description: '카페는 사람들이 시간을 보내고 싶은 환경을 만들어 성공합니다. 이름은 편안함(휴식과 안식 장소), 환영(모든 사람이 속한다), 따뜻함(물리적이고 감정적인 아늑함), 환대(손님에 대한 배려)를 암시해야 합니다. 집, 모임, 편안함, 따뜻함을 암시하는 단어가 첫인상부터 이 필수적인 카페 분위기를 만드는 데 도움이 됩니다.' },
      { title: '품질과 장인정신 불러일으키기', description: '오늘날 카페 고객은 품질을 중시합니다. 이름은 신선한 재료(소싱과 준비에 대한 관심), 장인적 접근(세부 사항과 전문성에 대한 주의), 진정성(진짜, 진정한 제공), 스페셜티 초점(싱글 오리진이나 특정 로스트 같은 특별한 전문성)을 전달할 수 있습니다. 장인 품질, 수제 관심, 스페셜티 전문성을 암시하는 용어가 프리미엄 가격을 지불할 의향이 있는 까다로운 고객을 끌어들입니다.' },
      { title: '커뮤니티 모임 공간으로 포지셔닝', description: '성공적인 카페는 "제3의 공간"—집도 직장도 아니지만 필수적인 커뮤니티 공간—이 됩니다. 이름은 동네 연결(지역적, 뿌리내린, 커뮤니티의 일부), 모임 기능(사람들이 만나고 연결하는 곳), 규칙성(일상의 일부), 소속감(모두를 위한 장소)을 암시할 수 있습니다.' },
      { title: '가용성과 적합성 확인', description: '선택한 이름이 사용 가능하고 적절한지 확인하세요: 사업자 등록(지역 요구 사항), 도메인 이름(웹사이트와 온라인 주문용), 소셜 미디어(인스타그램은 카페에 중요), 지역 환경(근처에 유사한 카페 없음), 상표 검색(확장 계획 시).' },
      { title: '실용적 적용 테스트', description: '이름이 실제 사용에서 어떻게 작동하는지 고려하세요: 간판(매장 전면에서 읽기 쉽고 매력적), 컵과 포장(테이크아웃 아이템에서 좋아 보임), 메뉴(메뉴 디자인 미학에 맞음), 입소문(친구에게 추천하기 쉬움), 온라인 검색(고객이 검색할 때 찾을 수 있음).' },
      { title: '미래 성장 고려', description: '카페의 잠재적 진화를 생각하세요: 추가 매장, 도매 커피 판매, 케이터링 서비스, 굿즈 라인. 현재의 본질을 포착하면서 성장을 지원하는 이름을 선택하세요.' },
    ],
  },
  businessNameIdeas: [
    { name: '브루드어웨이크닝', description: '"rude awakening"의 장난스러운 변형—아침 커피 장소에 완벽합니다.' },
    { name: '더코지코너', description: '고객이 찾는 따뜻하고 편안한 분위기를 직접 전달합니다.' },
    { name: '모닝머머', description: '아침 카페 활동의 조용한 북적임을 암시합니다.' },
    { name: '골든빈카페', description: '프리미엄 함의가 있는 품질 커피 초점.' },
    { name: '하스하우스', description: '따뜻함과 집이 결합됨—환영하고 편안합니다.' },
    { name: '더게더링그라운즈', description: '커피 그라운즈 워드플레이가 있는 커뮤니티 모임 장소.' },
    { name: '선라이즈시프', description: '밝고 쾌활한 에너지의 아침 커피 의식.' },
    { name: '아티잔로스트', description: '품질 초점의 장인 커피로 포지셔닝합니다.' },
    { name: '네슬드누크', description: '편안함과 친밀함의 아늑하고 숨겨진 느낌.' },
    { name: '데일리리추얼', description: '카페를 고객 일상의 필수적인 부분으로 포지셔닝합니다.' },
    { name: '웜컵카페', description: '단순하고 직접적인 따뜻함과 편안함 전달.' },
    { name: '더스티밍머그', description: '즐길 준비가 된 향기로운 신선한 커피를 연상시킵니다.' },
    { name: '커먼그라운즈', description: '이중 의미—커뮤니티 공간과 커피 그라운즈.' },
    { name: '모닝글로리카페', description: '아침 식사와 커피를 위한 밝고 쾌활한 에너지.' },
    { name: '퍼크업', description: '커피의 각성 효과를 위한 에너지 넘치는 이름.' },
    { name: '더로컬로스트', description: '품질 커피 초점이 있는 동네 포지셔닝.' },
    { name: '브레드앤브루', description: '베이킹과 커피를 결합한 베이커리 카페에 완벽합니다.' },
    { name: '파이어사이드커피', description: '머무르며 대화하는 것을 암시하는 아늑한 따뜻함.' },
    { name: '어반그라인드', description: '모던하고 도시 중심의 커피숍 포지셔닝.' },
    { name: '커파컴포트', description: '편안함을 강조하는 영국 스타일의 따뜻함.' },
  ],
},

'cake': {
  slug: 'cake',
  name: '케이크 비즈니스 이름 생성기',
  title: '무료 AI 케이크 사업 이름 아이디어 생성기',
  description: '베이커리, 웨딩 케이크 디자이너, 축하 케이크 메이커를 위한 유혹적이고 기억에 남는 이름을 생성합니다.',
  metaDescription: '무료 AI 생성기로 환상적인 케이크 비즈니스 이름을 만들어 보세요. 베이커리, 웨딩 케이크 디자이너, 축하 케이크 메이커를 위한 유혹적이고 기억에 남는 이름을 만들어 드립니다. 빠르고 재미있으며 완전 무료입니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '케이크 비즈니스를 설명해 주세요...',
  inputPlaceholder: '예: 우아하고 다층 퐁당 케이크를 전문으로 하는 맞춤 웨딩 케이크 디자이너',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '달콤하고 장난스러운', '장인적이고 수공예', '축하하고 즐거운'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in bakeries, cake businesses, and confectionery enterprises. Your role is to generate tempting, delicious-sounding business names that evoke the sweetness, artistry, and celebration that cakes represent.

CAKE BUSINESS CONTEXT:
The cake and bakery industry encompasses:
- Custom cake designers
- Wedding cake specialists
- Birthday and celebration cakes
- Cupcake bakeries
- Wholesale cake suppliers
- Home-based cake businesses
- Cake decorating studios
- Specialty dietary cakes (vegan, gluten-free)

NAME CHARACTERISTICS FOR CAKE BUSINESSES:
1. **Tempting and Appetizing**
   - Makes mouths water
   - Evokes delicious anticipation

2. **Memorable and Unique**
   - Stands out among bakeries
   - Easy to recommend

3. **Reflective of Cake Specialty**
   - Communicates specific offerings
   - Appeals to target celebrations

4. **Celebratory and Joyful**
   - Cakes mark special occasions
   - Happy, festive associations

OUTPUT REQUIREMENTS:
For each cake business name generated, provide:
- The business name
- A brief explanation of why it works for a cake business

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '맞춤 케이크 비즈니스 런칭',
      description: '맞춤 케이크 비즈니스를 시작하는 제빵사들은 케이크 비즈니스 이름 생성기를 사용하여 예술성, 품질, 축하를 전달하는 이름을 찾습니다. 기억에 남는 이름은 특별한 행사 케이크를 찾는 고객을 끌어들이고 프리미엄 가격을 받을 가치가 있는 브랜드를 구축하는 데 도움이 됩니다.',
    },
    {
      title: '웨딩 케이크 전문화',
      description: '웨딩 케이크를 전문으로 하는 케이크 아티스트들은 생성기를 사용하여 신부와 웨딩 플래너에게 어필하는 우아한 브랜드 이름을 만듭니다. 올바른 이름은 웨딩 과자의 세련됨과 축하적 성격을 전달합니다.',
    },
    {
      title: '홈 베이커리 브랜딩',
      description: '취미에서 비즈니스로 전환하는 홈 베이커들은 생성기를 사용하여 자신의 제공물을 정당화하는 전문적인 브랜드 이름을 만듭니다. 세련된 이름은 고객을 끌어들이고 친구와 가족을 넘어선 성장을 지원합니다.',
    },
  ],
  faqs: [
    { question: '좋은 케이크 비즈니스 이름이란 무엇인가요?', answer: '좋은 케이크 비즈니스 이름은 유혹적이고 맛있어야 하며, 기억에 남고 독특해야 하고, 케이크 전문 분야를 반영해야 합니다. 케이크가 대표하는 달콤함, 축하, 예술성을 연상시켜야 합니다.' },
    { question: '케이크 비즈니스 이름에 "케이크"나 "베이커리"를 포함해야 하나요?', answer: '케이크 관련 단어를 포함하면 제공물에 대한 즉각적인 명확성을 제공합니다. 그러나 "스위트 레이어스" 같은 창의적인 이름은 명시적으로 말하지 않고도 케이크를 암시합니다. 마케팅 전략과 지역 경쟁을 고려하세요.' },
    { question: '이름이 케이크 고객 유치에 얼마나 중요한가요?', answer: '매우 중요합니다. 케이크 고객은 종종 추천과 온라인 검색을 통해 제빵사를 찾습니다. 추천하기 쉬운 기억에 남고 전문적인 이름은 입소문 마케팅을 돕고 특별 행사 케이크에 대한 신뢰성을 구축합니다.' },
    { question: '이름을 전문화해야 하나요(예: "웨딩 케이크 바이...")?', answer: '전문화된 이름은 타겟 고객을 끌어들이지만 확장을 제한할 수 있습니다. 생일, 웨딩, 스페셜티 케이크를 제공할 계획이라면 더 넓은 이름을 선택하세요. 웨딩에만 집중한다면 전문화가 포지셔닝에 도움이 될 수 있습니다.' },
    { question: '케이크 비즈니스에 제 이름을 사용해야 하나요?', answer: '개인 이름(예: "베이커 사라" 또는 "엠마의 케이크")은 친밀함과 개인적 연결을 만듭니다. 제빵사의 예술성이 브랜드인 맞춤 케이크 비즈니스에 잘 맞습니다. 개인 브랜드를 구축하는지 확장 가능한 브랜드를 구축하는지 고려하세요.' },
    { question: '케이크 고객에게 어필하는 단어는?', answer: '효과적인 단어는 달콤함 용어(슈가, 스위트, 허니), 탐닉 단어(데카당트, 디바인, 헤븐리), 베이킹 용어(레이어, 프로스티드, 배터), 축하 단어(조이, 셀러브레이트, 파티)를 포함합니다.' },
    { question: '웨딩과 생일 모두에 맞는 이름을 어떻게 만드나요?', answer: '모든 행사에 맞는 축하 용어를 선택하세요. "스위트 셀러브레이션즈"와 "조이풀 레이어스"는 웨딩과 생일 모두에 맞습니다. 특정 행사 유형에 너무 묶인 이름은 피하세요.' },
    { question: '케이크 비즈니스 이름 가용성을 어떻게 확인하나요?', answer: '지역 사업자 등록을 검색하고, 도메인 가용성을 확인하고, 인스타그램 핸들(케이크 전시에 중요)을 확인하고, 유사한 이름의 지역 베이커리를 검색하고, 상표 데이터베이스를 검토하세요.' },
    { question: '케이크 비즈니스 이름이 사진에 잘 나와야 하나요?', answer: '케이크 비즈니스에서 시각적 프레젠테이션은 매우 중요합니다. 케이크 상자에서 우아하게 보이고, 인스타그램 게시물에서 사진 잘 찍히고, 포트폴리오를 위한 매력적인 브랜딩을 만드는 이름을 선택하세요.' },
    { question: '나중에 케이크 비즈니스 이름을 변경할 수 있나요?', answer: '예, 하지만 리브랜딩은 어렵습니다—특히 입소문 평판을 구축한 경우. 웨딩 산업 추천은 특히 일관된 네이밍에 의존합니다. 처음부터 신중하게 선택하세요.' },
  ],
  howToChoose: {
    intro: '케이크 비즈니스의 완벽한 이름을 선택하는 것은 인생의 가장 달콤한 순간을 축하하는 고객을 끌어들이는 매력적인 브랜드를 만드는 데 중요한 단계입니다. 이름은 케이크 상자, 명함, 소셜 미디어, 입소문 추천에 나타납니다—만드는 맛있는 예술성을 연상시키는 이름을 선택하는 것이 필수적입니다.',
    steps: [
      { title: '케이크 비즈니스 전문 분야 정의', description: '이름 브레인스토밍 전에 고유한 초점을 명확히 하세요. 전문으로 하는 케이크 유형(웨딩, 생일, 맞춤, 컵케이크, 특수 식이), 이상적인 고객(신부, 부모, 이벤트 플래너, 기업), 케이크를 정의하는 스타일(우아한, 기발한, 모던, 클래식, 소박한), 타겟 가격대(프리미엄, 접근 가능, 럭셔리), 케이크를 다른 제빵사와 다르게 만드는 것을 고려하세요.' },
      { title: '유혹과 식욕 어필 창조', description: '케이크는 탐닉 음식입니다—이름은 입에 침이 고이게 해야 합니다. 달콤함(설탕, 꿀, 맛있는 맛을 암시하는 단어), 탐닉(풍부함, 퇴폐, 간식 가치 있는 품질을 암시하는 용어), 기대(욕구와 갈망을 만드는 이름), 감각적 어필(맛, 질감, 향기를 연상시키는 단어)을 고려하세요. 식욕 어필을 만들지 않는 클리니컬하거나 일반적인 이름은 피하세요.' },
      { title: '축하와 기쁨 전달', description: '케이크는 인생의 특별한 순간을 표시합니다. 이름은 축하(파티, 웨딩, 생일, 성취), 기쁨(행복, 축제, 특별한 행사), 추억 만들기(기념할 가치가 있는 순간), 예술성(작업의 장인정신과 창의성)을 전달해야 합니다. 축제적으로 느껴지는 이름은 중요한 이벤트를 계획하는 고객을 끌어들입니다.' },
      { title: '전문성과 전문 지식 반영', description: '이름은 특정 강점을 전달할 수 있습니다. 웨딩 초점의 경우 우아하고 로맨틱한 용어를 사용하세요. 어린이 케이크의 경우 장난스럽고 기발한 언어를 사용하세요. 맞춤 예술성의 경우 장인과 디자인 참조를 사용하세요. 식이 전문의 경우 건강이나 전문 지표를 사용하세요. 그러나 제공물이 성장할 수 있다면 이름이 서비스 확장을 허용하는지 확인하세요.' },
      { title: '가용성과 전문성 확인', description: '선택한 이름이 사용 가능한지 확인하세요: 사업자 등록(지역 요구 사항), 도메인 이름(웹사이트와 온라인 주문용), 소셜 미디어(인스타그램은 케이크 비즈니스에 중요), 지역 경쟁(해당 지역에 유사한 베이커리 없음), 상표 검색(확장 계획 시).' },
      { title: '시각적 및 언어적 어필 테스트', description: '케이크 비즈니스 이름은 포장과 케이크 상자에서 아름다워야 하고, 추천할 때 말하기 쉬워야 하고, 한 번 언급하면 기억에 남아야 하고, 계약서와 청구서에서 전문적이어야 하고, 사진과 소셜 미디어에서 매력적이어야 합니다.' },
      { title: '성장 잠재력 고려', description: '미래 가능성을 생각하세요: 케이크 유형 확장, 매장 오픈, 도매 기회, 케이터링 서비스. 현재의 본질을 포착하면서 성장을 지원하는 이름을 선택하세요.' },
    ],
  },
  businessNameIdeas: [
    { name: '스위트레이어스', description: '아름다운 다층 케이크 예술성을 직접 연상시킵니다.' },
    { name: '버터크림드림즈', description: '특정 프로스팅 참조가 있는 맛있고 꿈같은 품질.' },
    { name: '케이크쿠튀르', description: '케이크를 하이패션, 맞춤 창작물로 포지셔닝합니다.' },
    { name: '티어드트레저스', description: '아름다운 층 배열의 귀중하고 가치 있는 케이크.' },
    { name: '슈가앤스프링클즈', description: '달콤하고 재미있고 장난스러운—축하 케이크에 완벽합니다.' },
    { name: '디바인크럼', description: '베이킹 용어가 있는 천상의 품질.' },
    { name: '프로스티드판타지', description: '아름다운 프로스팅이 있는 마법적이고 상상력 풍부한 케이크.' },
    { name: '벨벳슬라이스', description: '레드 벨벳과 우아함을 암시하는 럭셔리한 질감 참조.' },
    { name: '위스크드원더스', description: '놀라운 결과와 결합된 베이킹 동작.' },
    { name: '셀러브레이션컨펙션즈', description: '특별한 행사 목적에 직접 연결됩니다.' },
    { name: '레이어드러브', description: '아름다운 케이크 층을 통한 감정적 연결.' },
    { name: '더플라워스튜디오', description: '베이킹 예술성을 위한 예술적이고 창의적인 공간.' },
    { name: '스위트엘레강스', description: '맛있는 맛과 세련된 프레젠테이션을 결합합니다.' },
    { name: '배터블리스', description: '즐거운 결과를 만드는 행복한 베이킹 과정.' },
    { name: '데카던트딜라이츠', description: '기쁨을 주는 풍부하고 탐닉적인 간식.' },
    { name: '크럼앤셀러브레이트', description: '축하 초점이 있는 베이킹 참조.' },
    { name: '슈가캔버스', description: '케이크를 달콤한 표면에 만들어진 먹을 수 있는 예술로 포지셔닝합니다.' },
    { name: '플러리쉬드케이크스', description: '아름다운 정교한 장식과 플러리쉬.' },
    { name: '테이스티티어스', description: '맛있는 층 케이크에 대한 단순하고 직접적인 어필.' },
    { name: '조이풀컨펙션즈', description: '특별한 행사를 위한 행복하고 축하하는 과자.' },
  ],
},

'candle': {
  slug: 'candle',
  name: '캔들 비즈니스 이름 생성기',
  title: '무료 AI 캔들 사업 이름 아이디어 생성기',
  description: '캔들 메이커와 홈 프래그런스 브랜드를 위한 연상적이고 분위기 있는 이름을 생성합니다.',
  metaDescription: '완벽한 이름으로 캔들 비즈니스를 빛나게 하세요. AI 생성기가 캔들 메이커와 홈 프래그런스 브랜드를 위한 창의성을 불러일으킵니다. 무료이며 브랜드를 빛나게 하도록 설계되었습니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '캔들 비즈니스를 설명해 주세요...',
  inputPlaceholder: '예: 자연과 웰니스에서 영감받은 천연 향기의 수제 소이 캔들 브랜드',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['따뜻하고 분위기 있는', '자연적이고 친환경적인', '럭셔리하고 세련된', '장인적이고 수공예'],
      default: '따뜻하고 분위기 있는',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in candle businesses, home fragrance, and artisan goods. Your role is to generate evocative, atmospheric business names that capture the warm glow, beautiful scents, and cozy ambiance that candles create.

CANDLE BUSINESS CONTEXT:
The candle industry encompasses:
- Artisan candle makers
- Scented candle brands
- Soy and eco-friendly candles
- Luxury candle lines
- Home fragrance collections
- Seasonal and holiday candles
- Specialty occasion candles
- Custom and personalized candles

NAME CHARACTERISTICS FOR CANDLE BUSINESSES:
1. **Evokes Emotion and Atmosphere**
   - Captures the ambiance candles create
   - Suggests relaxation and comfort

2. **Unique and Memorable**
   - Stands out in crowded candle market
   - Creates strong brand recognition

3. **Reflects Candle Specialty**
   - Communicates unique offerings
   - Appeals to target aesthetic

4. **Sensory and Aromatic**
   - Evokes scent and fragrance
   - Suggests pleasant aromas

OUTPUT REQUIREMENTS:
For each candle business name generated, provide:
- The business name
- A brief explanation of why it works for a candle business

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '아티잔 캔들 브랜드 런칭',
      description: '자체 브랜드를 시작하는 캔들 메이커들은 캔들 비즈니스 이름 생성기를 사용하여 캔들이 만드는 분위기 있고 감각적인 경험을 포착하는 이름을 찾습니다. 연상적인 이름은 품질과 예술성을 전달하여 경쟁 시장에서 프리미엄 가격을 지원합니다.',
    },
    {
      title: '이커머스 캔들 샵 네이밍',
      description: '온라인 캔들 비즈니스를 런칭하는 창업자들은 생성기를 사용하여 이커머스 플랫폼, 소셜 미디어, 포장 전반에서 작동하는 기억에 남는 이름을 만듭니다. 독특한 이름은 브랜드 인지도를 높이고 디지털 마케팅 노력을 지원합니다.',
    },
    {
      title: '친환경 캔들 포지셔닝',
      description: '소이, 친환경, 천연 캔들을 전문으로 하는 메이커들은 생성기를 사용하여 지속 가능한 가치를 전달하는 이름을 찾습니다. 천연 재료와 의식적인 제작을 반영하는 이름은 환경을 생각하는 소비자에게 어필합니다.',
    },
  ],
  faqs: [
    { question: '좋은 캔들 비즈니스 이름이란 무엇인가요?', answer: '좋은 캔들 비즈니스 이름은 감정과 분위기를 연상시키고, 독특하고 기억에 남으며, 캔들 전문 분야를 반영해야 합니다. 캔들이 만드는 따뜻한 빛, 아름다운 향기, 아늑한 분위기를 포착해야 합니다.' },
    { question: '캔들 비즈니스 이름에 "캔들"을 포함해야 하나요?', answer: '"캔들"을 포함하면 즉각적인 명확성을 제공하지만 필수는 아닙니다. "엠버 글로우 캔들 코."는 명확하고, "엠버 & 글로우"는 이미지를 통해 캔들을 암시합니다. 마케팅 전략과 다른 홈 프래그런스 제품으로 확장할 수 있는지 고려하세요.' },
    { question: '이름이 캔들 비즈니스 성공에 얼마나 중요한가요?', answer: '매우 중요합니다. 캔들 시장은 경쟁적이며, 고객은 종종 소셜 미디어와 선물 쇼핑을 통해 브랜드를 발견합니다. 라벨에서 사진 잘 찍히는 기억에 남고 연상적인 이름은 강력한 브랜드 인지도를 만들고 입소문 마케팅을 지원합니다.' },
    { question: '럭셔리 캔들 브랜드에는 어떤 네이밍 스타일이 맞나요?', answer: '럭셔리 캔들은 우아한 단어(루미에르, 에센스, 메종)나 연상적인 단일 단어를 사용한 세련되고 미니멀한 이름이 좋습니다. 프리미엄 포지셔닝을 약화시키는 귀엽거나 너무 캐주얼한 이름은 피하세요.' },
    { question: '친환경 캔들에 자연 단어를 사용해야 하나요?', answer: '자연에서 영감받은 이름(포레스트, 메도우, 윌로우, 세이지)은 친환경 포지셔닝을 효과적으로 전달합니다. 의식적인 소비자가 찾는 천연 재료와 유기적 과정을 암시합니다.' },
    { question: '캔들 비즈니스 이름에 잘 맞는 단어는?', answer: '효과적인 단어는 빛/불 용어(글로우, 플레임, 윅, 엠버), 분위기 단어(코지, 세레네, 웜), 향기 참조(아로마, 프래그런스, 에센스), 자연 용어(가든, 포레스트, 와일드플라워)를 포함합니다.' },
    { question: '모든 향기 컬렉션에 맞는 이름을 어떻게 만드나요?', answer: '특정 향기 이름보다 분위기 있는 이름을 선택하세요. "엠버 글로우"는 모든 향기에 맞고, "라벤더 라이트"는 컬렉션 범위를 제한합니다. 브랜드 이름은 다양하게 사용될 수 있어야 하고 개별 캔들에는 특정 향기 이름을 붙일 수 있습니다.' },
    { question: '캔들 비즈니스 이름 가용성을 어떻게 확인하나요?', answer: '지역 사업자 등록을 검색하고, 도메인 가용성을 확인하고, 인스타그램과 Etsy에서 유사한 이름의 기존 캔들 비즈니스를 확인하고, 상표 데이터베이스를 검토하세요—특히 경쟁이 심한 캔들 시장에서 중요합니다.' },
    { question: '캔들 비즈니스 이름이 사진에 잘 나와야 하나요?', answer: '물론입니다. 캔들 비즈니스는 마케팅에 제품 사진에 크게 의존합니다. 라벨에서 아름답게 보이고, 라이프스타일 사진에서 잘 어울리고, 매력적인 소셜 미디어 콘텐츠를 만드는 이름을 선택하세요.' },
    { question: '좋은 이름이 프리미엄 가격을 받는 데 도움이 될 수 있나요?', answer: '예. 연상적이고 세련된 이름은 프리미엄 포지셔닝을 지원합니다. 장인 품질, 럭셔리, 독특한 분위기를 암시하는 이름은 일반적으로 들리는 대안보다 더 높은 가격을 정당화합니다.' },
  ],
  howToChoose: {
    intro: '캔들 비즈니스의 완벽한 이름을 선택하는 것은 캔들이 만드는 따뜻한 빛, 아름다운 향기, 아늑한 분위기를 포착하는 매력적인 브랜드를 만드는 데 중요한 단계입니다. 이름은 라벨, 포장, 소셜 미디어, 모든 고객 추천에 나타납니다—제공하는 감각적이고 분위기 있는 경험에 공감하는 이름을 선택하는 것이 필수적입니다.',
    steps: [
      { title: '캔들 브랜드 아이덴티티 정의', description: '이름 브레인스토밍 전에 고유한 포지셔닝을 명확히 하세요. 만드는 캔들 유형(소이, 밀랍, 럭셔리, 아로마테라피), 이상적인 고객(웰니스 추구자, 선물 구매자, 홈 데코레이터), 브랜드를 정의하는 미학(미니멀, 보헤미안, 소박한, 럭셔리), 고객이 경험하기를 원하는 것(릴렉스, 로맨스, 에너지, 집중), 경쟁사와의 캔들 차별점을 고려하세요.' },
      { title: '감정과 분위기 연상', description: '캔들은 분위기를 만듭니다—이름은 이것을 포착해야 합니다. 따뜻함(캔들이 제공하는 아늑한 편안함), 빛(공간을 변화시키는 부드러운 빛), 향기(기억을 정의하는 향기로운 경험), 무드(캔들이 만드는 감정적 분위기)를 고려하세요. 깜빡이는 불꽃, 부드러운 빛, 편안한 따뜻함, 감각적 즐거움을 암시하는 단어가 고객이 캔들이 제공하는 경험을 기대하게 합니다.' },
      { title: '독특함과 기억력 창조', description: '캔들 시장은 혼잡합니다—이름은 눈에 띄어야 합니다. 독특함(Etsy와 매장의 많은 캔들 브랜드와 다름), 기억력(추천할 때 고객이 기억하기 쉬움), 검색 가능성(관련 없는 결과와 경쟁하지 않고 온라인에서 찾을 수 있음), 브랜드 적용성(라벨, 포장, 디지털 플랫폼 전반에서 작동)을 고려하세요. 창의적인 조합, 연상적인 이미지, 독특한 워드플레이가 고객이 기억하고 공유하는 이름을 만드는 데 도움이 됩니다.' },
      { title: '전문 분야 반영', description: '이름은 특정 강점을 전달할 수 있습니다. 친환경 초점의 경우 자연 용어와 지속 가능성 참조를 사용하세요. 럭셔리 포지셔닝의 경우 세련되고 우아한 언어를 사용하세요. 장인 수공예의 경우 수제, 핸드포어드, 크래프트 참조를 사용하세요. 아로마테라피 효과의 경우 웰니스, 캄, 감각 용어를 사용하세요. 그러나 제공물이 성장함에 따라 이름이 컬렉션 확장을 허용하는지 확인하세요.' },
      { title: '가용성과 시각적 매력 확인', description: '종합적인 가용성을 확인하세요: 사업자 등록(지역 요구 사항), 도메인 이름(웹사이트용), 소셜 미디어(인스타그램과 핀터레스트는 캔들 브랜드에 중요), Etsy와 이커머스(기존 캔들 비즈니스 검색), 상표 검색(경쟁 시장에서 특히 중요). 또한 이름이 제품 라벨에서 어떻게 보이는지 고려하세요—캔들 포장은 핵심 브랜드 요소입니다.' },
      { title: '브랜드 적용 테스트', description: '캔들 비즈니스 이름은 다양한 크기의 캔들 라벨에서 아름답게 작동하고, 제품 사진에서 잘 나오고, 배송 상자와 포장에서 좋아 보이고, 소셜 미디어 게시물과 스토리에서 효과적이고, 서면 추천에서 잘 읽혀야 합니다. 사진 잘 찍히고 적용 전반에서 우아하게 보이는 이름이 마케팅 노력을 지원합니다.' },
      { title: '컬렉션과 성장 고려', description: '미래 가능성을 생각하세요: 계절 및 휴일 컬렉션, 홈 프래그런스 확장(디퓨저, 스프레이), 기업 및 도매 기회, 자체 브랜드 가능성. 현재의 본질을 포착하면서 성장을 수용하는 이름을 선택하세요.' },
    ],
  },
  businessNameIdeas: [
    { name: '엠버글로우', description: '지속적인 따뜻함과 편안함을 암시하는 따뜻하고 빛나는 불씨.' },
    { name: '플리커앤플레임', description: '춤추는 촛불 움직임을 포착합니다.' },
    { name: '센츠오브세레니티', description: '향기로운 휴식과 평화를 직접 전달합니다.' },
    { name: '윅위스퍼즈', description: '부드러운 촛불의 시적이고 부드러운 암시.' },
    { name: '루미너스네스트', description: '빛과 아늑한 집의 편안함을 결합합니다.' },
    { name: '크래프티드글로우', description: '따뜻한 결과와 함께 수제 품질을 강조합니다.' },
    { name: '트와일라잇윅', description: '저녁 분위기로 휴식을 위한 와인딩 다운.' },
    { name: '메도우플레임', description: '친환경 브랜드에 완벽한 따뜻한 빛이 있는 자연 이미지.' },
    { name: '포어앤폰더', description: '사색적이고 수공예 캔들 경험.' },
    { name: '골든아워캔들즈', description: '일몰의 아름답고 따뜻한 빛을 포착합니다.' },
    { name: '세이지앤스파크', description: '점화 에너지가 있는 자연 향기 참조.' },
    { name: '위스퍼드라이트', description: '부드럽고 온화한 조명과 분위기.' },
    { name: '더글로잉하스', description: '집의 따뜻함과 편안한 벽난로 연상.' },
    { name: '프래그런트플리커', description: '연상적인 이름에 향기와 빛을 결합합니다.' },
    { name: '핸드포어드헤이븐', description: '평화로운 피난처를 만드는 장인 품질.' },
    { name: '코지킨들링', description: '편안한 분위기를 위한 따뜻한 시작 이미지.' },
    { name: '아로마앰비언스', description: '향기와 분위기 창조를 직접 전달합니다.' },
    { name: '일루미네이티드소울', description: '영적이고 의미 있는 빛과 반성.' },
    { name: '와일드플라워윅', description: '캔들 창작을 위한 자연적이고 식물에서 영감받은 것.' },
    { name: '멜티드모먼츠', description: '촛불 아래 시간이 흐르는 경험을 포착합니다.' },
  ],
},

'candy': {
  slug: 'candy',
  name: '캔디 비즈니스 이름 생성기',
  title: '무료 AI 캔디 사업 이름 아이디어 생성기',
  description: '캔디샵, 과자점, 달콤한 간식 브랜드를 위한 달콤하고 장난스러운 이름을 생성합니다.',
  metaDescription: 'AI로 생성된 캔디 비즈니스 이름으로 달콤한 갈망을 충족하세요. 캔디샵, 과자점, 달콤한 간식 브랜드를 위한 달콤하고 장난스러운 이름을 만들어 드립니다. 빠르고 무료이며 성공을 위해 설계되었습니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '캔디 비즈니스를 설명해 주세요...',
  inputPlaceholder: '예: 옛날 사탕과 장인 초콜릿을 선보이는 향수를 불러일으키는 캔디샵',
  buttonText: '이름 생성하기',
  maxLength: 2048,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['달콤하고 장난스러운', '향수적이고 클래식한', '기발하고 마법적인', '모던하고 장인 스타일'],
      default: '달콤하고 장난스러운',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개 이름', '10개 이름', '15개 이름'],
      default: '10개 이름',
      type: 'select',
    },
  ],
  systemPrompt: `CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인 You are an expert brand naming consultant specializing in candy, confectionery, and sweet treat businesses. Your role is to generate playful, delightful business names that capture the joy, sweetness, and irresistible appeal of candy and confections.

CANDY BUSINESS CONTEXT:
The candy and confectionery industry encompasses:
- Candy shops and sweet stores
- Artisan chocolate makers
- Hard candy and lollipop producers
- Gummy and chewy candy creators
- Old-fashioned candy stores
- Modern candy boutiques
- Candy subscription services
- Custom candy for events

NAME CHARACTERISTICS FOR CANDY BUSINESSES:
1. **Sweet and Playful**
   - Evokes delightful, sugary treats
   - Suggests fun and joy

2. **Memorable and Whimsical**
   - Stands out with creative flair
   - Creates sense of wonder

3. **Reflects Candy Assortment**
   - Communicates product variety
   - Appeals to specific candy lovers

4. **Joyful and Nostalgic**
   - Connects to childhood happiness
   - Creates positive emotions

OUTPUT REQUIREMENTS:
For each candy business name generated, provide:
- The business name
- A brief explanation of why it works for a candy business

IMPORTANT: Generate all output in Korean.`,
  useCases: [
    {
      title: '캔디샵 런칭',
      description: '캔디 스토어를 오픈하는 창업자들은 캔디 비즈니스 이름 생성기를 사용하여 달콤함, 재미, 탐닉의 기쁨을 즉시 연상시키는 이름을 찾습니다. 장난스럽고 기억에 남는 이름은 어린이와 향수를 느끼는 어른 모두를 매장으로 끌어들이는 기발한 분위기를 만드는 데 도움이 됩니다.',
    },
    {
      title: '장인 과자 브랜딩',
      description: '자체 브랜드를 런칭하는 장인 캔디 메이커들은 생성기를 사용하여 캔디의 즐겁고 기쁜 본질을 유지하면서 수제 품질을 전달하는 이름을 만듭니다. 올바른 이름은 프리미엄하고 독특한 과자를 찾는 고객을 끌어들입니다.',
    },
    {
      title: '온라인 캔디 비즈니스 네이밍',
      description: '캔디 구독 서비스나 이커머스 캔디 비즈니스를 시작하는 창업자들은 생성기를 사용하여 디지털 플랫폼 전반에서 작동하는 기억에 남는 이름을 만듭니다. 독특한 이름은 브랜드 인지도를 높이고 소셜 미디어 마케팅을 지원합니다.',
    },
  ],
  faqs: [
    { question: '좋은 캔디 비즈니스 이름이란 무엇인가요?', answer: '좋은 캔디 비즈니스 이름은 달콤하고 장난스러워야 하며, 기억에 남고 기발해야 하고, 캔디 구색을 반영해야 합니다. 캔디를 기쁨으로 만드는 즐거움, 달콤함, 거부할 수 없는 매력을 연상시켜야 합니다.' },
    { question: '캔디 비즈니스 이름이 어린이와 어른 모두에게 어필해야 하나요?', answer: '둘 다입니다! 어린이는 장난스럽고 재미있는 이름에 끌리고, 어른은 향수와 품질 단서에 반응합니다. 기발하면서도 세련된—여러 수준에서 작동하는 이름이 가장 넓은 고객층을 끌어들입니다.' },
    { question: '이름이 캔디샵 성공에 얼마나 중요한가요?', answer: '매우 중요합니다. 캔디 쇼핑은 종종 충동적이고 감정적입니다. 재미있고 매력적인 이름은 사람들을 매장으로 끌어들이고, 긍정적인 연상을 만들고, 재방문과 추천을 위해 기억에 남게 합니다.' },
    { question: '비즈니스 이름에 "캔디"를 포함해야 하나요?', answer: '캔디 관련 단어를 포함하면 즉각적인 명확성을 제공하고 검색 발견 가능성에 도움이 됩니다. 그러나 "슈가 러쉬" 같은 창의적인 이름은 명시적으로 말하지 않고도 캔디를 암시합니다. 마케팅 접근 방식을 고려하세요.' },
    { question: '캔디 비즈니스 이름에 잘 맞는 단어는?', answer: '효과적인 단어는 달콤함 용어(슈가, 캔디, 스위트, 트릿), 장난스러운 단어(펀, 조이, 매직, 웜지), 질감 참조(츄이, 거미, 크런치), 향수 용어(빈티지, 클래식, 페니)를 포함합니다.' },
    { question: '이름이 특정 캔디 유형을 반영해야 하나요?', answer: '전문화하는 경우(장인 초콜릿이나 구미처럼) 특정 이름이 포지셔닝에 도움이 됩니다. 다양성을 제공한다면 더 넓은 이름이 유연성을 허용합니다. "거미 갤럭시"는 특정적이고, "스위트 원더스"는 모든 것을 수용합니다.' },
    { question: '향수를 불러일으키는 캔디샵 이름을 어떻게 만드나요?', answer: '빈티지 용어(페니 캔디, 올드패션드, 숍), 클래식 캔디 유형 참조, 어린 시절 기억을 불러일으키세요. 더 단순한 시대와 연결되는 이름이 향수적인 경험을 찾는 어른들에게 어필합니다.' },
    { question: '캔디 비즈니스 이름 가용성을 어떻게 확인하나요?', answer: '지역 사업자 등록을 검색하고, 도메인 가용성을 확인하고, 소셜 미디어 핸들을 확인하고, 유사한 이름의 기존 캔디샵을 검색하고, 상표 데이터베이스를 검토하세요.' },
    { question: '캔디 비즈니스 이름이 사진에 잘 나와야 하나요?', answer: '예! 캔디는 매우 시각적이며, 인스타그램에 어울리는 프레젠테이션이 중요합니다. 간판, 포장, 사진에서 멋지게 보이는 이름을 선택하세요. 밝고 재미있는 이름은 컬러풀한 브랜딩으로 이어집니다.' },
    { question: '좋은 이름이 프리미엄 가격을 받는 데 도움이 될 수 있나요?', answer: '장인이나 스페셜티 캔디의 경우 예. 품질, 장인정신, 독특한 제공물을 암시하는 이름은 프리미엄 포지셔닝을 지원합니다. "수제 과자"는 "할인 캔디"보다 더 높은 가격을 정당화합니다.' },
  ],
  howToChoose: {
    intro: '캔디 비즈니스의 완벽한 이름을 선택하는 것은 모든 연령의 고객을 기쁘게 하는 달콤한 브랜드를 만드는 데 중요한 단계입니다. 이름은 매장 간판, 포장, 소셜 미디어, 즐거운 추천에 나타납니다—캔디가 대표하는 행복, 달콤함, 거부할 수 없는 매력을 포착하는 이름을 선택하는 것이 필수적입니다.',
    steps: [
      { title: '캔디 비즈니스 정체성 정의', description: '이름 브레인스토밍 전에 달콤한 틈새를 명확히 하세요. 전문으로 하는 캔디 유형(초콜릿, 구미, 하드 캔디, 장인 과자), 주요 고객(어린이, 향수를 느끼는 어른, 선물 구매자, 캔디 애호가), 만들고 싶은 경험(향수적, 모던, 기발한, 세련된), 타겟 가격대(대량 캔디, 프리미엄 장인, 접근 가능한 간식), 캔디 비즈니스를 독특하게 만드는 것을 고려하세요.' },
      { title: '달콤함과 장난스러움 포착', description: '캔디는 기쁨과 탐닉에 관한 것입니다. 이름은 달콤함(캔디를 정의하는 맛있는 맛), 재미(간식과 연관된 장난스러운 행복), 탐닉(특별한 것을 즐기는 즐거움), 기쁨(캔디가 가져오는 미소)을 연상시켜야 합니다. 달콤하고 재미있고 기쁜 소리의 이름이 그 기분 전환 간식 경험을 찾는 고객을 끌어들입니다.' },
      { title: '기발함과 기억력 창조', description: '캔디 비즈니스는 마법적이고 기억에 남는 경험으로 번성합니다. 기발한 이름(매혹적이고 환상적으로 느껴지는 이름), 창의적인 워드플레이(장난스러운 말장난과 예상치 못한 조합), 독특함(일반 경쟁사와 차별화), 공유 가능성(사람들이 즐겨 말하고 추천하는 이름)을 고려하세요. 환상적 요소, 장난스러운 말장난, 캔디의 마법적 매력을 포착하는 창의적인 조합을 고려하세요.' },
      { title: '세대를 아우르는 어필', description: '최고의 캔디 비즈니스 이름은 여러 청중에게 작동합니다: 어린이(재미있고 컬러풀하고 장난스러운 이름에 끌림), 부모(적절하게 명명된 매장에 아이를 데려가기 편함), 어른(향수나 프리미엄 품질 단서에 끌림), 선물 구매자(매력적인 브랜딩의 상점을 찾음). 유치하지 않으면서 장난스러운 이름이 가장 넓은 고객층에 도달합니다.' },
      { title: '가용성과 시각적 잠재력 확인', description: '종합적인 가용성을 확인하세요: 사업자 등록(지역 요구 사항), 도메인 이름(온라인 존재와 이커머스용), 소셜 미디어(캔디의 시각적 매력을 위한 인스타그램과 틱톡), 지역 경쟁(시장에 유사한 캔디샵 없음), 상표 검색(브랜드 보호). 또한 이름이 컬러풀하고 매력적인 포장과 간판으로 어떻게 번역되는지 고려하세요.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 피드백을 모으세요. 이름이 매력적이고 재미있게 들리는지, 이 이름의 캔디샵을 방문하고 싶은지, 예상되는 경험에 적절하게 느껴지는지, 쉽게 기억하고 철자를 쓸 수 있는지, 친구들에게 추천할 것인지 물어보세요.' },
      { title: '성장과 확장 고려', description: '미래 가능성을 생각하세요: 온라인 판매와 배송, 이벤트를 위한 맞춤 캔디, 다른 소매업체에 대한 도매, 추가 매장. 현재의 달콤한 본질을 포착하면서 성장을 수용하는 이름을 선택하세요.' },
    ],
  },
  businessNameIdeas: [
    { name: '슈가러쉬', description: '캔디를 즐기는 에너지 넘치는 흥분을 포착합니다.' },
    { name: '캔디코너컨펙션즈', description: '달콤한 간식을 위한 동네 목적지.' },
    { name: '스위트이스케이프', description: '캔디샵을 일상에서 벗어나는 목적지로 포지셔닝합니다.' },
    { name: '거미갤럭시', description: '츄이 캔디 전문가에게 완벽한 장난스럽고 우주적인 이름.' },
    { name: '롤리팝레인', description: '달콤한 간식으로 가는 향수적이고 기발한 길.' },
    { name: '테이스티트레저스', description: '가치 있고 맛있는 발견이 기다립니다.' },
    { name: '슈가스파클', description: '마법적 매력이 있는 반짝이는 달콤함.' },
    { name: '웜지컬스위츠', description: '장난스럽고 상상력 풍부한 캔디 경험.' },
    { name: '캔디킹덤', description: '달콤한 기쁨의 마법 왕국.' },
    { name: '스위트드림즈', description: '꿈같고 멋진 캔디 경험.' },
    { name: '슈가앤스파이스', description: '장난스럽고 풍미 있는 매력이 있는 클래식 문구.' },
    { name: '츄이치어스', description: '츄이하고 기쁜 간식을 통한 축하.' },
    { name: '카라멜코브', description: '카라멜과 달콤한 간식을 위한 아늑한 목적지.' },
    { name: '페니캔디', description: '향수적이고 옛날 캔디샵의 매력.' },
    { name: '조이풀젤리스', description: '행복하고 탱글탱글하고 컬러풀한 캔디 간식.' },
    { name: '스위트센세이션즈', description: '기쁜 맛 경험과 느낌.' },
    { name: '캔디카니발', description: '축제적이고 재미있고 축하하는 캔디 경험.' },
    { name: '슈가플럼숍', description: '환상에서 영감받은 마법적인 달콤한 목적지.' },
    { name: '트릿트로브', description: '맛있는 캔디 발견의 보물 상자.' },
    { name: '딜라이트풀도스', description: '달콤한 행복의 완벽한 양.' },
  ],
},

// ==================== KOREAN (ko) TRANSLATION - BATCH 3 (11-15) ====================

'clothing-store': {
  slug: 'clothing-store',
  name: '의류 사업 이름 생성기',
  title: '무료 AI 의류 사업 이름 아이디어 생성기',
  description: '의류 매장, 패션 부티크, 소매점을 위한 트렌디한 의류 사업 이름을 생성하세요.',
  metaDescription: 'AI 기반 도구로 트렌디한 의류 사업 이름을 손쉽게 생성하세요. 의류 매장, 패션 부티크, 소매점을 위한 스타일리시하고 기억에 남는 이름을 만드세요. 무료로 간편하게 사용 가능! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '의류 매장을 설명하세요...',
  inputPlaceholder: '예: 도시 지역 젊은 전문직을 위한 트렌디한 스트리트웨어 부티크',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['트렌디 & 모던', '클래식 & 우아함', '캐주얼 & 접근성', '럭셔리 & 프리미엄'], default: '트렌디 & 모던', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the fashion and clothing retail industry. Your role is to generate stylish, memorable business names that convey fashion expertise, trendy appeal, and unique shopping experiences for clothing stores, apparel shops, and fashion boutiques.

CLOTHING STORE INDUSTRY CONTEXT:

The clothing store industry encompasses:
- Women's and men's fashion boutiques
- Multi-brand clothing retailers
- Streetwear and urban fashion stores
- Sustainable and ethical fashion retailers
- Vintage and consignment stores
- Online clothing retailers
- Plus-size and specialty stores
- Family clothing stores

NAME CHARACTERISTICS FOR CLOTHING STORES:

1. **Relevance to Fashion and Style**
   - Names should clearly connect to clothing, fashion, or apparel
   - Evoke the style, vibe, or niche of the clothing offered
   - Use vocabulary that resonates with fashion-conscious consumers
   - Examples: Thread, Style, Garment, Attire, Wardrobe, Fashion

2. **Memorable and Easy to Pronounce**
   - Names must be easy to remember and recommend
   - Flow well when spoken aloud
   - Catchy and concise for lasting impression
   - Avoid complicated or obscure words

3. **Uniqueness and Trademark Safety**
   - Stand out from other clothing retailers
   - Avoid names similar to established fashion brands
   - Distinctive enough to establish market identity
   - Safe from potential trademark conflicts

4. **Versatility for Growth**
   - Accommodate expanding product lines
   - Work across different clothing categories
   - Suitable for both physical and online retail
   - Scalable for multiple locations

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a clothing store

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '소매 의류 매장 런칭',
      description: '신규 의류 매장을 오픈하는 창업자들은 의류 사업 이름 생성기를 사용하여 스타일 포커스와 타겟 시장을 전달하는 이름을 찾습니다. 젊은 전문직을 위한 부티크, 가족 의류 매장, 트렌디한 스트리트웨어 숍 등 어떤 것을 런칭하든 생성기는 적합한 고객을 끌어들이고 첫날부터 브랜드 아이덴티티를 확립하는 이름을 제공합니다.',
    },
    {
      title: '온라인 패션 부티크 창업',
      description: '온라인 의류 매장을 구축하는 이커머스 창업자들은 생성기를 활용하여 디지털 플랫폼 전반에서 작동하는 기억에 남는 브랜드 이름을 만듭니다. 도메인 이름과 소셜 미디어 핸들로 사용 가능하면서도 매장의 패션 미학과 제품 포커스를 전달하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '의류 매장 리브랜딩',
      description: '브랜드를 새롭게 하거나 새로운 시장으로 확장하려는 기존 의류 소매업체들은 생성기를 사용하여 업데이트된 네이밍 옵션을 탐색합니다. 빈티지에서 컨템포러리 패션으로 전환하거나 지역에서 전국적 존재로 확장하는 경우 모두 매력을 유지하면서 진화된 포지셔닝을 반영하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 의류 사업 이름이란 무엇인가요?', answer: '좋은 의류 매장 이름은 패션과 스타일에 관련성이 있어야 하고, 기억에 남고 발음하기 쉬워야 하며, 다른 매장과 차별화될 만큼 독특해야 합니다. 잠재 고객에게 빈티지, 트렌디, 럭셔리, 캐주얼 웨어 등 무엇을 기대할 수 있는지 명확한 아이디어를 주면서도 기억하고 추천할 만큼 캐치해야 합니다.' },
    { question: '의류 매장 이름에 "부티크"나 "어패럴" 같은 단어를 포함해야 하나요?', answer: '"부티크", "어패럴", "패션", "의류" 같은 설명어를 포함하면 비즈니스 유형을 즉시 명확히 할 수 있습니다. "부티크"는 큐레이티드되고 독특한 셀렉션을 암시하고, "어패럴"은 더 포괄적으로 들립니다. 명확성과 창의성 중 브랜드에 더 중요한 것을 기반으로 선택하세요.' },
    { question: '의류 매장 이름이 브랜딩에 얼마나 중요한가요?', answer: '비즈니스 이름은 브랜드 아이덴티티의 기초입니다. 매장 전면, 쇼핑백, 영수증, 웹사이트, 소셜 미디어에 나타납니다. 스타일리시하고 기억에 남는 이름은 프리미엄 가격을 정당화하고, 패션에 민감한 고객을 끌어들이며, 소매 성공에 필수적인 입소문 추천을 만들 수 있습니다.' },
    { question: '의류 매장에 인기 있는 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 합성어(스타일스티치, 스레드블렌드), 위치 영감 이름(가먼트 그로브, 패션 하버), 공예 중심 이름(스티치 스튜디오, 테일러 앤 스레드), 미니멀리스트 단일 단어(헤이븐, 모드, 스레드)가 포함됩니다. 최선의 선택은 구체적인 브랜드 포지셔닝에 달려 있습니다.' },
    { question: '의류 매장에 제 이름을 사용해야 하나요?', answer: '이름을 사용하면(예: "마리아스 패션") 개인적 연결을 만들고 개인 브랜드를 구축하는 부티크 소유자에게 잘 맞습니다. 그러나 비개인적 이름은 미래 매각이나 확장에 더 많은 유연성을 제공합니다. 개인 브랜딩과 비즈니스 확장성 중 우선순위를 고려하세요.' },
    { question: '의류 매장 이름 가용성을 어떻게 확인하나요?', answer: '여러 채널을 확인하세요: 주의 사업자 등록, 도메인 이름(.com 선호), 인스타그램 및 기타 소셜 미디어 핸들, 상표 데이터베이스. 패션 소매는 경쟁이 치열하므로 모든 플랫폼에서 일관된 브랜딩이 인지도 구축에 중요합니다.' },
    { question: '의류 매장 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 패션 용어(스레드, 스티치, 패브릭, 가먼트), 스타일 지표(시크, 보그, 모드, 스타일), 품질 암시(큐레이티드, 셀렉트, 비스포크), 환영하는 장소(헤이븐, 코브, 부티크, 엠포리엄)가 포함됩니다. 이를 결합하면 매력적이고 관련성 있는 이름이 만들어집니다.' },
    { question: '이름이 판매하는 특정 의류를 반영해야 하나요?', answer: '너무 구체적인 이름(예: "데님 드림즈")은 미래 확장을 제한할 수 있습니다. 현재 포커스를 전달하면서도 성장을 수용할 만큼 넓은 이름을 선택하세요. "스타일 헤이븐"은 "온리 진즈 숍"보다 다양한 의류 유형에 더 잘 맞습니다.' },
    { question: '의류 매장 이름이 타겟 고객에게 어떻게 어필할 수 있나요?', answer: '타겟 인구의 가치와 선호를 고려하세요. 젊고 트렌디한 고객은 엣지 있고 모던한 이름에 반응합니다. 럭셔리 쇼핑객은 세련되고 정제된 이름을 선호합니다. 가족 중심 고객은 환영하고 접근하기 쉬운 이름을 원합니다. 최종 결정 전에 타겟 시장과 옵션을 테스트하세요.' },
    { question: '의류 매장 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 브랜드와 너무 유사한 이름, 철자가 어려운 단어, 빨리 구식이 되는 트렌디한 철자, 제품 확장을 제한하는 이름, 성장을 제한하는 지리적 이름, 타겟 시장에서 잘못 발음되거나 오해될 수 있는 모든 것.' },
  ],
  howToChoose: {
    intro: '의류 매장의 완벽한 이름을 선택하는 것은 패션에 민감한 고객을 끌어들이고 경쟁적인 소매 시장에서 두드러지는 강력한 브랜드를 구축하는 데 중요한 단계입니다. 비즈니스 이름은 매장 간판부터 쇼핑백, 영수증, 웹사이트, 소셜 미디어 프로필, 마케팅 자료까지 모든 곳에 나타납니다. 잠재 고객이 패션 제공물에 대해 갖는 첫인상이므로 스타일, 품질, 제공하는 독특한 쇼핑 경험을 전달하는 이름을 선택하는 것이 필수적입니다.',
    steps: [
      { title: '브랜드 아이덴티티와 타겟 시장 정의', description: '이름 생성 전에 의류 매장의 포지셔닝을 명확히 하세요. 주로 판매할 의류 유형(캐주얼, 포멀, 운동복, 빈티지, 디자이너), 이상적인 고객(연령대, 스타일 선호도, 예산 수준), 만들고 싶은 쇼핑 경험(부티크 럭셔리, 트렌디하고 재미있는, 실용적이고 접근 가능한), 경쟁사와의 차별점, 온라인, 오프라인 또는 둘 다 운영할 것인지 고려하세요. 답변에 따라 배타적이고 세련된, 젊고 트렌디한, 실용적이고 접근 가능한, 또는 니치 특화된 소리의 이름이 필요한지 결정됩니다.' },
      { title: '패션과 스타일 구현', description: '의류 매장 이름은 패션 세계와 연결되고 스타일을 전달해야 합니다. 패션, 의류, 어패럴을 연상시키는 이름, 특정 스타일 미학을 암시하는 이름, 말할 때 스타일리시하게 들리는 이름, 간판과 마케팅에서 매력적으로 보이는 서면 형태, 잘 차려입는 것과 긍정적인 연관성을 만드는 이름을 고려하세요. 스레드, 스타일, 패션, 가먼트, 어타이어, 앙상블 같은 단어는 독특한 아이덴티티를 확립하는 창의적인 조합을 허용하면서 의류 소매를 즉시 전달합니다.' },
      { title: '기억력과 차별성 창조', description: '붐비는 의류 소매 시장에서 이름은 기억에 남고 차별화되어야 합니다. 한 번 노출 후 기억하기 쉽고, 지역과 온라인에서 경쟁사와 구별되며, 말로 들은 후 철자를 쓰기 쉽고, 입소문 추천에 효과적이고, 간판과 소셜 미디어 핸들에 충분히 간결해야 합니다. 잠재적 이름을 구두로 공유하고 사람들이 올바르게 기억하고 철자를 쓸 수 있는지 테스트하세요.' },
      { title: '고유한 가치 제안 반영', description: '특별한 전문성이나 고유한 판매 포인트가 있다면 이름에 통합하는 것을 고려하세요. 지속 가능한 패션 포커스의 경우 에코스레드나 그린워드로브. 빈티지/중고의 경우 레트로리바이브나 빈티지볼트. 플러스사이즈 전문의 경우 커브스컬렉션이나 올사이즈스타일. 운동복의 경우 액티브어타이어나 핏패션. 그러나 관련 카테고리로의 미래 확장을 수용할 만큼 이름이 넓게 유지되도록 하세요.' },
      { title: '종합적인 가용성 확인', description: '유망한 후보가 있으면 철저한 가용성 검사를 수행하세요. 도메인 이름 가용성(신뢰성을 위해 가능하면 .com 버전 확보), 소셜 미디어 가용성(패션 소매에 중요한 인스타그램, 페이스북, 핀터레스트, 틱톡), 사업자 등록(주에서 이름이 등록되지 않았는지 확인), 상표 검색(패션 소매 카테고리에 충돌이 없는지 확인), 지역 경쟁(근처 경쟁사가 유사한 이름을 가지고 있지 않은지 확인).' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 상위 선택지를 테스트하세요. 이름이 어떤 유형의 의류 매장을 암시하는지, 프리미엄, 접근 가능, 트렌디, 클래식하게 느껴지는지, 이 매장을 발견하면 흥분할 것인지, 친구들에게 추천할 것인지, 어떤 가격대를 예상하는지 물어보세요. 피드백은 놓쳤을 수 있는 인식을 드러냅니다.' },
      { title: '장기 성장과 진화 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 의류 카테고리 추가, 추가 매장 오픈, 오프라인 소매와 함께 이커머스 런칭, 액세서리, 신발 또는 관련 제품으로 확장, 프라이빗 라벨 라인 구축. 이상적인 의류 매장 이름은 스타일리시하고, 기억에 남고, 다재다능하며, 오늘 제공하는 패션 경험을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '스레드블렌드', description: '다양한 의류 스타일이 함께 혼합된 것을 암시합니다—다재다능하고 창의적이며 패션 포워드합니다.' },
    { name: '스타일스티치', description: '장인정신과 스타일을 강조합니다—품질 중심 의류 소매업체에 완벽합니다.' },
    { name: '패션하버', description: '패셔너블한 아이템을 위한 목적지입니다—환영하고 포괄적인 셀렉션을 제공합니다.' },
    { name: '어패럴아치', description: '포괄적인 의류 제공에 대한 건축적이고 구조화된 접근법입니다.' },
    { name: '패브릭퓨전', description: '다양한 원단과 스타일의 혼합을 암시합니다—창의적이고 다양합니다.' },
    { name: '시크쉘터', description: '스타일리시한 옷을 위한 트렌디하고 환영하는 장소입니다—따뜻함이 있는 부티크 매력.' },
    { name: '베스처볼트', description: '의류 보물로 가득 찬 매장을 암시합니다—세련되고 큐레이티드되었습니다.' },
    { name: '클로스코브', description: '의류 애호가를 위한 아늑한 안식처입니다—친밀하고 초대적입니다.' },
    { name: '가먼트그로브', description: '풍부한 의류 셀렉션입니다—자연스럽고 유기적인 성장 이미지를 제공합니다.' },
    { name: '앙상블엠포리엄', description: '완전한 코디 세트의 넓은 배열입니다—포괄적이고 조화롭습니다.' },
    { name: '어타이어앨리', description: '모든 의류 필요를 위한 목적지입니다—접근 가능하고 다양합니다.' },
    { name: '웨어워프', description: '다양한 유형의 옷이 도착하는 곳입니다—역동적이고 끊임없이 변화합니다.' },
    { name: '아웃핏오아시스', description: '스타일리시한 코디를 위한 안식처입니다—상쾌한 패션 목적지입니다.' },
    { name: '워드로브웨이브', description: '의류 스타일의 지속적인 유입입니다—트렌디하고 끊임없이 업데이트됩니다.' },
    { name: '트렌드트로브', description: '트렌디한 옷의 보물 창고입니다—흥미진진한 발견이 기다립니다.' },
    { name: '패션포지', description: '패션이 창조되고 정제되는 곳입니다—혁신적이고 품질 중심입니다.' },
    { name: '대퍼돔', description: '세련되고 스타일리시한 옷을 위한 목적지입니다—세련되고 우아합니다.' },
    { name: '쿠튀르코브', description: '하이 패션의 친밀한 탐험입니다—부티크 럭셔리 매력을 제공합니다.' },
    { name: '모드매너', description: '클래식한 우아함을 가진 세련된 패션 목적지입니다.' },
    { name: '스타일생추어리', description: '스타일 추구자를 위한 전용 공간입니다—집중적이고 패셔너블합니다.' },
  ],
},

'cookie': {
  slug: 'cookie',
  name: '쿠키 사업 이름 생성기',
  title: '무료 AI 쿠키 사업 이름 아이디어 생성기',
  description: '베이커리, 쿠키 샵, 달콤한 간식 사업을 위한 군침 도는 기억에 남는 이름을 생성하세요.',
  metaDescription: '무료 AI 생성기로 맛있는 쿠키 사업 이름을 만드세요. 베이커리, 쿠키 샵, 달콤한 간식 사업을 위한 군침 도는 기억에 남는 이름을 만들어 보세요. 빠르고 재미있고 간편합니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '쿠키 사업을 설명하세요...',
  inputPlaceholder: '예: 고급 풍미와 맞춤 주문을 전문으로 하는 장인 쿠키 베이커리',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['달콤 & 장난스러운', '장인 & 고급', '향수 & 가정적', '모던 & 트렌디'], default: '달콤 & 장난스러운', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the bakery and cookie industry. Your role is to generate tempting, memorable business names that convey deliciousness, quality, and irresistible appeal for cookie shops, bakeries, and sweet treat businesses.

COOKIE BUSINESS INDUSTRY CONTEXT:

The cookie business industry encompasses:
- Artisanal cookie bakeries and shops
- Gourmet cookie companies
- Cookie delivery services
- Wedding and event cookie caterers
- Wholesale cookie suppliers
- Specialty dietary cookie makers (gluten-free, vegan)
- Cookie subscription box services
- Online cookie retailers
- Cookie food trucks and pop-ups

NAME CHARACTERISTICS FOR COOKIE BUSINESSES:

1. **Mouthwatering and Irresistible**
   - Names should evoke deliciousness and temptation
   - Create cravings through sensory language
   - Suggest warmth, comfort, and indulgence
   - Examples: Crumble, Crisp, Golden, Butter, Sweet

2. **Memorable and Catchy**
   - Easy to remember after one exposure
   - Fun to say and share with others
   - Playful personality appropriate to sweet treats
   - Stand out in competitive bakery market

3. **Reflects Cookie Specialty**
   - Communicate the type of cookies offered
   - Suggest quality, freshness, or uniqueness
   - Align with specific cookie style or focus
   - Examples: Gourmet, Artisan, Classic, Homemade

4. **Warmth and Comfort Appeal**
   - Cookies are comfort food—names should feel warm
   - Evoke happy memories and emotions
   - Suggest the joy cookies bring
   - Family-friendly and approachable

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a cookie business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '장인 쿠키 샵 런칭',
      description: '새로운 쿠키 샵을 오픈하는 베이커들은 쿠키 사업 이름 생성기를 사용하여 수제 창작물의 품질과 맛을 전달하는 이름을 찾습니다. 고급 풍미, 클래식 즐겨찾기, 혁신적인 레시피 중 무엇을 전문으로 하든 생성기는 달콤한 것을 좋아하는 고객을 끌어들이고 기억에 남는 브랜드 아이덴티티를 확립하는 유혹적인 이름을 제공합니다.',
    },
    {
      title: '쿠키 배달 또는 구독 서비스',
      description: '쿠키 배달 또는 구독 박스 서비스를 런칭하는 창업자들은 생성기를 사용하여 이커머스와 소셜 미디어 환경에서 작동하는 기억에 남는 브랜드 이름을 만듭니다. 고객이 기대할 수 있는 맛있는 경험을 전달하면서도 바이럴 마케팅에 충분히 캐치한 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '특수 쿠키 사업 차별화',
      description: '식이 특화 쿠키(글루텐프리, 비건, 키토) 또는 행사 특화 제품(웨딩 쿠키, 기업 선물)을 전문으로 하는 베이커들은 생성기를 사용하여 타겟 시장에 폭넓은 매력을 유지하면서 전문성을 전달하는 이름을 찾습니다.',
    },
  ],
  faqs: [
    { question: '좋은 쿠키 사업 이름이란 무엇인가요?', answer: '좋은 쿠키 사업 이름은 군침 돌고 거부할 수 없어야 하며, 이름만 들어도 쿠키가 먹고 싶어져야 합니다. 기억에 남고 캐치해야 하며, 고급, 클래식, 또는 특수 식이 등 전문성을 반영해야 합니다. 이름은 쿠키가 가져다주는 따뜻함, 편안함, 기쁨을 연상시켜야 합니다.' },
    { question: '쿠키 사업 이름에 "쿠키"를 직접 언급해야 하나요?', answer: '"쿠키" 또는 관련 단어(비스킷, 베이커리, 간식)를 포함하면 비즈니스를 즉시 명확히 할 수 있습니다. 그러나 직접 언급 없이도 달콤함과 베이킹을 연상시키는 창의적인 이름도 효과적일 수 있습니다. 명확성과 창의적 브랜딩 중 시장 포지션에 더 중요한 것을 고려하세요.' },
    { question: '쿠키 사업 이름이 마케팅에 얼마나 중요한가요?', answer: '식품 사업에서 매우 중요합니다. 이름은 포장, 매장 전면, 소셜 미디어, 배달 주문에 나타납니다. 유혹적인 이름은 사람들이 쿠키를 맛보기도 전에 갈망하게 만들 수 있습니다. 입소문 추천을 위해 쉽게 공유하고 기억할 수 있어야 합니다.' },
    { question: '현재 인기 있는 쿠키 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 장난스러운 두운(쿠키 크레이즈, 비스킷 블리스), 편안함/향수 테마(할머니의 주방, 홈스타일), 질감 단어(크럼블, 크리스프, 츄이), 합성어(슈가스피어, 도우딜라이트)가 포함됩니다. 정통적이고 장인적인 소리의 이름도 좋은 성과를 냅니다.' },
    { question: '쿠키 사업에 제 이름을 사용해야 하나요?', answer: '이름을 사용하면(예: "사라의 쿠키") 개인적 연결과 진정성을 만들 수 있습니다—홈 베이커와 장인 브랜드에 가치 있습니다. 그러나 매각 가능성을 제한할 수 있습니다. 비개인적 이름은 성장에 더 많은 유연성을 제공합니다. 개인 브랜딩과 비즈니스 확장성 중 더 중요한 것을 고려하세요.' },
    { question: '쿠키 사업 이름 가용성을 어떻게 확인하나요?', answer: '주의 사업자 등록, 도메인 이름, 소셜 미디어 핸들(특히 인스타그램과 페이스북), 상표 데이터베이스를 확인하세요. 또한 지역의 유사한 베이커리 이름도 검색하세요. 식품 사업은 모든 플랫폼에서 일관된 브랜딩으로 큰 이점을 얻습니다.' },
    { question: '쿠키 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 질감 설명(크럼블, 크리스프, 츄이, 멜트), 달콤함 단어(슈가, 스위트, 허니), 베이킹 용어(오븐, 프레시, 배치, 도우), 탐닉 단어(딜라이트, 블리스, 데카던트), 환영하는 장소(코너, 코티지, 키친, 자)가 포함됩니다.' },
    { question: '이름이 쿠키 전문성을 반영해야 하나요?', answer: '독특한 전문성(비건, 글루텐프리, 속 채운 쿠키)이 있다면 반영하면 타겟 시장을 끌어들일 수 있습니다. 그러나 너무 구체적인 이름은 미래 확장을 제한할 수 있습니다. "쿠키 컴포트"는 "오직 오트밀 쿠키"보다 다양한 스타일에 더 잘 맞습니다.' },
    { question: '쿠키 사업 이름이 선물 구매자에게 어떻게 어필할 수 있나요?', answer: '많은 쿠키가 선물로 구매됩니다. 축하, 기쁨, 프리미엄 품질을 암시하는 이름은 선물 구매자에게 어필합니다. "[비즈니스 이름]에서 쿠키를 보내드려요"라고 말할 때 이름이 어떻게 들리는지 고려하세요—관대하고 특별하게 들려야 합니다.' },
    { question: '쿠키 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 맛있게 들리지 않는 이름, 철자가 어려운 단어, 기존 브랜드와 너무 유사한 이름, 빨리 구식이 될 트렌디한 철자, 비식품 사업과 혼동될 수 있는 이름, "갈망 테스트"를 통과하지 못하는 모든 것—들으면 쿠키가 먹고 싶어지나요?' },
  ],
  howToChoose: {
    intro: '쿠키 사업의 완벽한 이름을 선택하는 것은 입에 침이 고이고 마음이 따뜻해지는 유혹적인 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 포장, 매장 전면, 배달 주문, 소셜 미디어, 마케팅 자료에 나타납니다—고객이 쿠키를 맛보기도 전에 브랜드의 첫맛을 경험하는 것입니다. 잘 선택된 이름은 쿠키가 제공하는 맛, 따뜻함, 기쁨을 연상시켜야 합니다.',
    steps: [
      { title: '쿠키 사업 아이덴티티 정의', description: '이름 생성 전에 쿠키 사업의 포지셔닝을 명확히 하세요. 전문으로 할 쿠키 유형(클래식, 고급, 식이 특화, 데코레이션), 이상적인 고객(가족, 기업 고객, 선물 구매자, 건강 의식 소비자), 쿠키를 독특하게 만드는 것(가족 레시피, 프리미엄 재료, 혁신적인 풍미, 편의성), 비즈니스 모델(소매점, 배달, 구독, 도매), 고객이 브랜드와 연관시키길 원하는 느낌을 고려하세요. 답변에 따라 장인적이고 수제, 고급 프리미엄, 재미있고 장난스러운, 또는 건강 중심적인 소리의 이름이 필요한지 안내됩니다.' },
      { title: '군침 도는 매력 연상', description: '쿠키 사업은 식욕 매력에 성패가 달려 있습니다. 이름은 사람들을 배고프게 만들어야 합니다. 맛과 질감을 연상시키고, 감각적 연상을 만들고, 오븐의 따뜻함을 암시하고, 탐닉과 만족을 내포하고, 말할 때 맛있게 들리는 단어를 사용하세요. 크럼블, 골든, 버터리, 스위트, 프레시, 멜트 같은 단어는 즉각적인 갈망과 긍정적인 음식 연상을 만듭니다.' },
      { title: '기억력과 공유성 창조', description: '쿠키 사업은 추천과 선물로 번성합니다. 이름은 한 번 언급 후 기억하기 쉽고, 다른 사람들과 말하고 공유하기 재미있고, 온라인 검색을 위해 철자 쓰기 쉽고, "[이름] 드셔보셨어요?" 대화에서 효과적이고, 소셜 미디어 포스트와 선물 태그에서 공유하기 좋아야 합니다. 친구들이 서로에게 쿠키를 추천하는 것을 상상하며 이름을 테스트하세요—그 맥락에서 자연스럽고 기억에 남아야 합니다.' },
      { title: '전문성 또는 고유 가치 반영', description: '독특한 전문성이 있다면 통합하는 것을 고려하세요. 고급/럭셔리 포커스의 경우 고메이글리나 데카던트딜라이트. 가족/향수 매력의 경우 그랜마스오븐이나 하스앤홈. 건강 의식 옵션의 경우 홀섬스위트나 뉴트리니블스. 맞춤/행사 포커스의 경우 셀러브레이션쿠키나 커스텀크래프트. 그러나 미래 제품 확장을 수용할 만큼 이름이 넓게 유지되도록 하세요.' },
      { title: '종합적인 가용성 확인', description: '유망한 후보가 있으면 도메인 이름(가능하면 신뢰성을 위해 .com 확보), 소셜 미디어(식품 사업에 중요한 인스타그램, 페이스북, 틱톡 확인), 사업자 등록(주에서 이름이 등록되지 않았는지 확인), 상표 검색(식품/베이커리 카테고리에 충돌이 없는지 확인), 지역 경쟁(근처 베이커리가 유사한 이름을 가지고 있지 않은지 확인) 전반에 걸쳐 가용성을 확인하세요. 식품 사업은 특히 강력한 시각적 소셜 미디어 존재가 필요하므로 핸들 가용성이 중요합니다.' },
      { title: '잠재 고객과 테스트', description: '최종 결정 전에 상위 선택지를 테스트하세요. 이름이 쿠키를 먹고 싶게 만드는지, 이 사업이 어떤 유형의 쿠키를 만들 것으로 상상하는지, 이곳에서 쿠키를 받으면 흥분할 것인지, 친구들에게 추천할 것인지, 프리미엄, 가정적, 또는 재미있게 느껴지는지 물어보세요. 피드백은 이름이 올바른 기대와 식욕을 만드는지 드러냅니다.' },
      { title: '성장과 브랜드 확장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 쿠키 외 새로운 구운 제품 추가, 추가 매장 오픈, 배송과 이커머스 런칭, 브랜드 상품 만들기, 케이터링과 기업 서비스. 이상적인 쿠키 사업 이름은 맛있고, 기억에 남고, 다재다능하며, 오늘 쿠키가 제공하는 달콤한 기쁨을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '크럼블코너', description: '맛있게 바삭한 쿠키로 유명한 아늑한 목적지를 암시합니다.' },
    { name: '슈가리스피어', description: '달콤하고 설탕 같은 쿠키 즐거움의 세계입니다—포괄적이고 유혹적입니다.' },
    { name: '크런치코브', description: '바삭한 쿠키 안식처입니다—크리스피한 간식을 좋아하는 사람들에게 완벽합니다.' },
    { name: '비스킷베이', description: '다양한 맛있는 비스킷과 쿠키를 제공하는 목적지입니다.' },
    { name: '쿠키크레이즈', description: '놀라운 쿠키에 대한 흥분과 열정을 연상시킵니다—에너지 넘치고 기억에 남습니다.' },
    { name: '딜라이트도우', description: '마법을 만드는 즐거운 쿠키 반죽을 축하합니다.' },
    { name: '테이스티트릿', description: '단순하고 맛있으며 보편적으로 매력적입니다—간식으로서의 쿠키입니다.' },
    { name: '멜트모먼트', description: '입에서 녹는 쿠키를 포착합니다—감각적이고 탐닉적입니다.' },
    { name: '스위트센세이션', description: '멋진 맛 감각을 만드는 쿠키입니다—경험적이고 맛있습니다.' },
    { name: '초코챔버', description: '초콜릿 쿠키 애호가의 천국입니다—풍부하고 탐닉적입니다.' },
    { name: '바닐라볼트', description: '즐거운 바닐라와 클래식 쿠키 풍미의 보물 상자입니다.' },
    { name: '쿠키크래프트', description: '쿠키 창작에서 장인 정신을 강조합니다.' },
    { name: '고메이그리드', description: '고급 쿠키의 세련된 셀렉션입니다—프리미엄 포지셔닝.' },
    { name: '베이커스바운티', description: '풍부하고 관대한 갓 구운 쿠키 배치를 암시합니다.' },
    { name: '데카던트딜라이트', description: '진정한 간식 애호가를 위한 풍부하고 탐닉적인 쿠키 경험입니다.' },
    { name: '스크럼셔스스위트', description: '거부할 수 없이 맛있는 쿠키 제공물입니다—장난스럽고 맛있습니다.' },
    { name: '비스킷블리스', description: '순수한 쿠키 행복입니다—단순하고 기쁜 브랜딩.' },
    { name: '쿠키카니발', description: '다양한 쿠키 풍미와 스타일의 축제적인 축하입니다.' },
    { name: '골든배치', description: '완벽하게 구워진 황금빛 쿠키 우수성입니다.' },
    { name: '컴포트크럼', description: '모든 부스러기에서 아늑하고 편안한 쿠키 순간입니다.' },
  ],
},

'cosmetic': {
  slug: 'cosmetic',
  name: '화장품 사업 이름 생성기',
  title: '무료 AI 화장품 사업 이름 아이디어 생성기',
  description: '메이크업 브랜드, 스킨케어 라인, 뷰티 제품을 위한 우아하고 세련된 이름을 생성하세요.',
  metaDescription: 'AI 생성기로 화장품 사업에 완벽한 이름을 얻으세요. 메이크업 브랜드, 스킨케어 라인, 뷰티 제품을 위한 우아하고 세련된 이름을 만드세요. 빠르고 무료이며 맞춤화됩니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '화장품 사업을 설명하세요...',
  inputPlaceholder: '예: 천연 유기농 스킨케어 제품에 집중하는 클린 뷰티 브랜드',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['우아 & 럭셔리', '내추럴 & 클린', '볼드 & 바이브런트', '모던 & 미니멀'], default: '우아 & 럭셔리', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the cosmetics and beauty industry. Your role is to generate elegant, alluring business names that convey beauty, quality, and sophistication for cosmetic brands, makeup companies, and beauty product businesses.

COSMETIC BUSINESS INDUSTRY CONTEXT:

The cosmetic business industry encompasses:
- Makeup brands and product lines
- Skincare companies
- Natural and organic beauty brands
- Indie cosmetic startups
- Private label cosmetic businesses
- Color cosmetics (lipstick, eyeshadow, foundation)
- Beauty subscription services
- Professional makeup artistry brands
- Clean beauty and cruelty-free brands

NAME CHARACTERISTICS FOR COSMETIC BUSINESSES:

1. **Beauty and Elegance**
   - Names should embody allure and sophistication
   - Evoke the transformative power of cosmetics
   - Suggest luxury, quality, and desirability
   - Examples: Allure, Radiance, Glamour, Elegance

2. **Memorable and Catchy**
   - Stand out in crowded beauty market
   - Easy to recall and recommend
   - Work well in beauty marketing contexts
   - Suitable for product naming extensions

3. **Reflects Cosmetics Specialty**
   - Communicate your unique beauty focus
   - Whether natural, luxury, colorful, or clinical
   - Align with target customer expectations
   - Examples: Pure, Vibrant, Luxe, Natural

4. **Visual and Aspirational Appeal**
   - Names that look beautiful in packaging
   - Create aspirational associations
   - Work across beauty media and social platforms
   - Evoke the beauty experience itself

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a cosmetic business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '인디 화장품 브랜드 런칭',
      description: '새로운 화장품 브랜드를 런칭하는 창업자들은 화장품 사업 이름 생성기를 사용하여 독특한 뷰티 철학을 전달하는 이름을 찾습니다. 클린 뷰티, 볼드한 색상, 럭셔리 포뮬러 중 무엇에 집중하든 생성기는 뷰티에 민감한 고객을 끌어들이고 강력한 브랜드 아이덴티티를 확립하는 우아한 이름을 제공합니다.',
    },
    {
      title: '프라이빗 라벨 뷰티 라인 창업',
      description: '프라이빗 라벨 화장품 라인을 만드는 뷰티 창업자들은 생성기를 사용하여 소매 선반과 이커머스 플랫폼에 어울리는 브랜드 이름을 개발합니다. 품질과 바람직함을 전달하면서 기존 뷰티 브랜드와 경쟁하는 세련된 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '메이크업 아티스트 사업 브랜딩',
      description: '자체 제품 라인이나 아티스트리 서비스를 런칭하는 전문 메이크업 아티스트들은 생성기를 사용하여 미학과 전문성을 반영하는 기억에 남는 브랜드 이름을 만듭니다. 서비스, 제품, 소셜 미디어 플랫폼 전반에서 작동하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 화장품 사업 이름이란 무엇인가요?', answer: '좋은 화장품 사업 이름은 아름다움과 우아함을 구현하면서 기억에 남고 캐치해야 합니다. 내추럴, 럭셔리, 컬러풀, 클리니컬 등 화장품의 전문성을 반영하고 뷰티 제품이 제공하는 변혁적이고 열망적인 경험을 연상시켜야 합니다.' },
    { question: '화장품 브랜드 이름에 "뷰티"나 "코스메틱"을 포함해야 하나요?', answer: '뷰티 관련 단어를 포함하면 비즈니스 유형을 명확히 할 수 있지만, 많은 성공적인 화장품 브랜드는 추상적이거나 연상적인 이름(글로시어나 펜티 같은)을 사용합니다. 즉각적인 명확성과 더 창의적이고 열망적인 브랜딩 중 원하는 것을 기반으로 선택하세요.' },
    { question: '화장품 브랜드 이름이 마케팅에 얼마나 중요한가요?', answer: '매우 중요합니다. 이름은 모든 제품, 패키지, 소셜 미디어 포스트에 나타납니다. 뷰티 마케팅의 시각적 세계에서 이름은 로고와 패키지에서 우아하게 보이면서 열망적으로 들려야 합니다. 고객이 사랑하는 뷰티 브랜드를 구축하는 기초입니다.' },
    { question: '현재 인기 있는 화장품 브랜드 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 짧고 펀치 있는 이름(밀크, 코사스, 일리아), 모던한 트위스트가 있는 창업자 이름, 자연에서 영감받은 단어(로즈, 페탈, 블룸), 광채 단어(글로우, 레이디언트, 루미너스), 심플한 이름에 반영된 클린/미니멀 미학이 포함됩니다.' },
    { question: '화장품 브랜드에 제 이름을 사용해야 하나요?', answer: '개인 이름은 개인 브랜드를 구축하는 메이크업 아티스트나 강한 개인 팔로잉을 가진 뷰티 창업자에게 잘 맞습니다. 그러나 비개인적 이름은 매각과 확장에 더 많은 유연성을 제공합니다. 장기적인 비즈니스 목표와 개인 브랜딩 전략을 고려하세요.' },
    { question: '화장품 브랜드 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름(.com 및 뷰티 특화 도메인), 소셜 미디어 핸들(인스타그램이 뷰티에 중요), 화장품 카테고리의 상표 데이터베이스를 확인하세요. 뷰티는 경쟁이 치열하므로 종합적인 확인이 필수적입니다.' },
    { question: '화장품 브랜드 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 뷰티와 글로우 용어(레이디언스, 글로우, 루미너스), 우아함 단어(럭스, 시크, 엘레강트), 자연 단어(블로썸, 로즈, 페탈), 색상 단어(팔레트, 스펙트럼, 비비드), 열망 용어(가디스, 디바, 벨)가 포함됩니다.' },
    { question: '이름이 판매하는 특정 제품을 반영해야 하나요?', answer: '너무 제품 특화된 이름(예: "립스틱 럭스")은 미래 확장을 제한합니다. 스킨케어, 메이크업, 잠재적인 새 카테고리를 포괄할 만큼 넓으면서도 뷰티 포커스를 전달하는 이름을 선택하세요.' },
    { question: '화장품 브랜드 이름이 인플루언서에게 어떻게 어필할 수 있나요?', answer: '인플루언서 친화적인 이름은: 비디오에서 발음하기 쉽고, 플랫레이와 패키지 샷에서 사진이 잘 나오고, 추천을 위해 기억에 남고, 소셜 플랫폼 전반에서 공유 가능합니다. "[브랜드] 제품을 사용하고 있어요"라고 말할 때 이름이 어떻게 들리는지 테스트하세요.' },
    { question: '화장품 브랜드 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 뷰티 브랜드와 너무 유사한 이름, 철자가 어려운 단어, 사진이 잘 안 나오는 이름, 빨리 구식이 될 트렌디한 용어, 제품 확장을 제한하는 이름, 아름답고 열망적으로 들리지 않는 모든 것.' },
  ],
  howToChoose: {
    intro: '화장품 사업의 완벽한 이름을 선택하는 것은 변화, 자신감, 자기 표현을 추구하는 고객에게 공감하는 매력적인 뷰티 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 모든 제품, 패키지, 마케팅 자료에 나타납니다—고객이 뷰티 철학과 제품 품질에 대해 갖는 첫인상입니다.',
    steps: [
      { title: '뷰티 브랜드 아이덴티티 정의', description: '이름 생성 전에 화장품 브랜드의 포지셔닝을 명확히 하세요. 제공할 화장품 제품 유형(메이크업, 스킨케어, 하이브리드, 풀 라인), 이상적인 고객(연령, 스타일 선호도, 가치관, 예산), 화장품을 독특하게 만드는 것(클린 성분, 볼드한 색상, 럭셔리 포뮬러, 포용성), 대표하는 뷰티 철학, 제품 사용 시 고객이 느끼길 원하는 감정을 고려하세요. 답변에 따라 클린하고 내추럴, 볼드하고 글래머러스, 럭셔리하고 배타적, 또는 재미있고 접근 가능한 소리의 이름이 필요한지 결정됩니다.' },
      { title: '아름다움과 우아함 구현', description: '화장품 브랜드는 변화와 자신감을 판매합니다. 이름은 아름다움, 매력, 세련됨을 연상시키고, 열망적인 연상을 만들고, 말할 때 우아하게 들리고, 서면 형태와 패키지에서 아름다워 보이고, 제공하는 변혁적인 경험을 암시해야 합니다. 레이디언스, 글로우, 럭스, 블룸, 알루어 같은 단어는 창의적인 브랜드 개발을 허용하면서 즉각적인 뷰티 연상을 만듭니다.' },
      { title: '뷰티 마케팅을 위한 기억력 창조', description: '경쟁적인 뷰티 시장에서 기억력은 필수적입니다. 이름은 재구매와 추천을 위해 기억하기 쉽고, 뷰티 소매 환경에서 두드러지고, 인플루언서 콘텐츠와 리뷰에서 잘 작동하고, 온라인에서 검색하고 찾기 쉽고, 입소문 마케팅에 효과적이어야 합니다. 뷰티 튜토리얼, 리뷰, 친구 추천에서 이름을 상상하며 테스트하세요—그런 맥락에서 자연스럽고 매력적으로 느껴져야 합니다.' },
      { title: '전문성 또는 고유 가치 반영', description: '고유한 포지셔닝을 통합하는 것을 고려하세요. 클린/내추럴 뷰티의 경우 퓨어페탈, 보타니컬뷰티, 그린글로우. 볼드/컬러풀 화장품의 경우 비비드보그, 컬러크래프트, 스펙트럼스타일. 럭셔리 포지셔닝의 경우 오풀런스뷰티, 프레스티지팔레트, 럭스루미너스. 포용적 브랜드의 경우 올글로우, 에브리뷰티, 트루휴. 그러나 미래 제품 확장을 수용할 만큼 이름이 넓게 유지되도록 하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com 확보 및 .beauty 도메인 고려), 소셜 미디어(뷰티 브랜드에 인스타그램 가용성이 중요), 사업자 등록(주에서 확인), 상표 검색(화장품 및 뷰티 카테고리를 주의 깊게 확인), 국제 시장(글로벌 확장 계획이 있다면 국제 가용성 확인) 전반에 걸쳐 철저히 가용성을 확인하세요. 뷰티 브랜드는 시각적 플랫폼에서 살아있으므로 일관된 소셜 미디어 브랜딩이 필수적입니다.' },
      { title: '타겟 뷰티 소비자와 테스트', description: '최종 결정 전에 타겟 시장을 대표하는 사람들과 테스트하세요. 이 이름이 뷰티 브랜드처럼 느껴지는지, 이 이름에서 어떤 유형의 화장품을 상상하는지, 이 브랜드의 제품을 써보고 싶어 흥분할 것인지, 친구들에게 추천할 것인지, 프리미엄, 접근 가능, 또는 엣지 있게 느껴지는지 물어보세요. 피드백은 이름이 올바른 뷰티 기대를 만드는지 드러냅니다.' },
      { title: '브랜드 확장과 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 제품 카테고리 추가, 국제 시장 런칭, 서브 브랜드나 컬렉션 만들기, 라이프스타일 브랜드로 구축, 전문가용 vs. 소비자용 라인 개발. 이상적인 화장품 사업 이름은 아름답고, 기억에 남고, 다재다능하며, 제공하는 뷰티 경험을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '알루어앨리', description: '매혹적인 화장품이 기다리는 목적지입니다—초대적이고 글래머러스합니다.' },
    { name: '뷰티블리스', description: '뷰티 제품을 통한 순수한 행복입니다—단순하고 기쁩니다.' },
    { name: '글래머그로브', description: '글래머러스한 제품으로 가득 찬 세련된 목적지입니다.' },
    { name: '레이디언스리프', description: '자연스러운 광채와 글로우를 높이는 데 집중하는 제품입니다.' },
    { name: '엘레강스엠파이어', description: '정제되고 세련된 제품을 제공하는 그랜드 화장품 사업입니다.' },
    { name: '시크코브', description: '친밀한 환경에서 트렌디하고 스타일리시한 화장품입니다.' },
    { name: '포쉬팔레트', description: '컬러 스펙트럼 전반에 걸친 고품질의 스타일리시한 제품입니다.' },
    { name: '러쉬러스터', description: '풍부하고 럭셔리한 광택과 빛을 제공하는 화장품입니다.' },
    { name: '블로썸뷰티', description: '고객이 꽃피우고 빛나도록 돕는 내추럴 뷰티입니다.' },
    { name: '대즐도메인', description: '고객을 빛나게 하는 눈부신 화장품의 영역입니다.' },
    { name: '바이브런트보그', description: '스타일에 민감한 사람들을 위한 생동감 있고 패셔너블한 화장품입니다.' },
    { name: '피네스파운틴', description: '화장품 전문성과 숙련된 뷰티 제품의 원천입니다.' },
    { name: '스플렌더스프리', description: '모든 행사를 위한 화려한 화장품 제품 범위입니다.' },
    { name: '오풀런스오아시스', description: '프리미엄 화장품으로 가득 찬 럭셔리한 목적지입니다.' },
    { name: '마제스티메이크업', description: '최고의 품질을 추구하는 사람들을 위한 로열 등급 화장품입니다.' },
    { name: '퓨리티팔러', description: '순수하고 천연 성분과 클린 뷰티에 집중하는 화장품입니다.' },
    { name: '글래머러스갤럭시', description: '끝없는 뷰티 탐험을 위한 글래머러스한 화장품의 우주입니다.' },
    { name: '레이디언트랩소디', description: '빛나는 화장품 제품의 아름다운 구성입니다.' },
    { name: '새틴생추어리', description: '실키한 완벽함을 만드는 부드럽고 광택 있는 화장품입니다.' },
    { name: '서린스플렌더', description: '고요하고 아름다운 외모를 만드는 화장품입니다.' },
  ],
},

'craft-store': {
  slug: 'craft-store',
  name: '공예품 매장 사업 이름 생성기',
  title: '무료 AI 공예품 사업 이름 아이디어 생성기',
  description: '미술 용품점, 공예품 매장, 창작 사업을 위한 상상력 넘치고 영감을 주는 이름을 생성하세요.',
  metaDescription: 'AI 기반 생성기로 매장에 완벽한 이름을 만드세요. 미술 용품점, 공예품 매장, 창작 사업을 위한 상상력 넘치고 영감을 주는 이름을 만드세요. 무료로 간편하게 사용 가능! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '공예품 매장을 설명하세요...',
  inputPlaceholder: '예: 초보자를 위한 수업이 있는 특수 실 및 뜨개질 용품점',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['창의적 & 예술적', '아늑 & 환영하는', '모던 & 트렌디', '전문적 & 종합적'], default: '창의적 & 예술적', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the arts, crafts, and creative retail industry. Your role is to generate imaginative, inspiring business names that convey creativity, artistry, and craftsmanship for craft stores, art supply shops, and creative retail businesses.

CRAFT STORE INDUSTRY CONTEXT:

The craft store industry encompasses:
- General craft supply retailers
- Specialty craft stores (knitting, scrapbooking, jewelry-making)
- Art supply shops
- Fabric and sewing stores
- DIY and maker spaces
- Online craft supply retailers
- Handmade marketplace sellers
- Craft workshop studios
- Educational craft businesses

NAME CHARACTERISTICS FOR CRAFT STORE BUSINESSES:

1. **Artistic and Expressive**
   - Names should evoke creativity and artistry
   - Suggest the beauty of handmade creation
   - Appeal to makers, artists, and craft enthusiasts
   - Examples: Create, Craft, Design, Make, Imagine

2. **Memorable and Inspiring**
   - Easy to remember for repeat visits
   - Spark creative inspiration
   - Stand out in retail landscape
   - Encourage sharing among craft communities

3. **Reflects Craft Focus**
   - Communicate your specialty or range
   - Whether general crafts or specific niche
   - Align with target crafter expectations
   - Examples: Yarn, Paper, Bead, Fabric, Thread

4. **Warmth and Community**
   - Craft stores are community gathering places
   - Names should feel welcoming and inclusive
   - Suggest the joy of creative making
   - Appeal to all skill levels

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a craft store

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '공예 용품 매장 오픈',
      description: '공예 용품 매장을 오픈하는 창업자들은 공예품 매장 사업 이름 생성기를 사용하여 창의적인 고객을 끌어들이고 제공물의 폭을 전달하는 이름을 찾습니다. 일반 공예 용품을 제공하든 특정 재료를 전문으로 하든 생성기는 환영하는 브랜드 아이덴티티를 확립하는 영감을 주는 이름을 제공합니다.',
    },
    {
      title: '온라인 공예 사업 런칭',
      description: '온라인 용품 사업이나 엣시 샵을 런칭하는 공예가들은 생성기를 사용하여 이커머스 플랫폼과 소셜 미디어 전반에서 작동하는 기억에 남는 브랜드 이름을 만듭니다. 창의성과 품질을 전달하면서 도메인 이름으로 사용 가능한 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '공예 워크숍 또는 스튜디오 브랜딩',
      description: '공예 교육자와 워크숍 진행자들은 생성기를 사용하여 용품과 수업을 모두 제공하는 사업에 이름을 붙입니다. 재료와 학습 기회를 찾는 고객을 끌어들이며 공예 사업의 소매 및 교육적 측면을 모두 전달하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 공예품 매장 사업 이름이란 무엇인가요?', answer: '좋은 공예품 매장 이름은 예술적이고 표현력이 있어야 하며, 창의성과 만드는 기쁨을 연상시켜야 합니다. 기억에 남고 영감을 주어야 하며, 일반 용품이든 특정 틈새든 공예 포커스를 반영해야 합니다. 이름은 모든 숙련도 수준의 공예가들에게 환영하는 느낌이어야 합니다.' },
    { question: '공예품 매장 이름에 특정 공예를 언급해야 하나요?', answer: '특정 공예(실, 비즈, 종이)를 포함하면 틈새 고객을 끌어들일 수 있지만 인식되는 제공물을 제한할 수 있습니다. 일반 용어(공예, 창작, 디자인)는 더 많은 다재다능함을 제공합니다. 전문 숍이나 종합 공예 목적지 중 어떤 것을 구축하는지에 따라 선택하세요.' },
    { question: '공예품 매장 이름이 커뮤니티 구축에 얼마나 중요한가요?', answer: '매우 중요합니다. 공예품 매장은 종종 공예가들이 모이고, 배우고, 공유하는 커뮤니티 허브가 됩니다. 이름은 환영하고 포용적으로 느껴져야 하며, 고객이 매장을 단순한 공급업체 이상—창작의 집으로 보도록 격려해야 합니다.' },
    { question: '현재 인기 있는 공예품 매장 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 장인/메이커 용어(아티산, 메이커, 핸드메이드), 아늑함/코티지 이미지(코티지, 눅, 헤이븐), 행동 단어(크리에이트, 메이크, 스티치), 커뮤니티 중심 이름(콜렉티브, 스튜디오, 워크숍)이 포함됩니다. 정통적이고 따뜻한 이름이 공예가들에게 공감합니다.' },
    { question: '공예품 매장에 제 이름을 사용해야 하나요?', answer: '이름을 사용하면 개인적 연결을 만들 수 있으며, 특히 소유자 전문성으로 유명한 숍에 좋습니다. 그러나 비개인적 이름은 매각이나 확장에 더 많은 유연성을 제공합니다. 개인 브랜딩과 비즈니스 확장성 중 우선순위를 고려하세요.' },
    { question: '공예품 매장 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(공예에 핀터레스트가 중요), 상표 데이터베이스를 확인하세요. 또한 공예 커뮤니티 플랫폼과 지역 공예품 매장도 검색하세요. 공예가들은 발견을 열정적으로 공유하므로 독특한 네이밍이 중요합니다.' },
    { question: '공예품 매장 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 만들기 단어(크리에이트, 크래프트, 메이크, 디자인), 재료 단어(얀, 스레드, 비드, 페이퍼), 영감 단어(이매진, 드림, 원더), 아늑한 장소(코티지, 코너, 눅), 커뮤니티 단어(스튜디오, 워크숍, 콜렉티브)가 포함됩니다.' },
    { question: '이름이 타겟 공예가 청중을 반영해야 하나요?', answer: '초보자, 고급 공예가, 또는 특정 공예 커뮤니티 중 누구를 타겟으로 하는지 고려하세요. "심플리 크래프트" 같은 이름은 초보자에게 어필하고, "아티산스 워크숍"은 경험 많은 메이커를 끌어들입니다. 이름은 타겟 고객의 아이덴티티와 맞아야 합니다.' },
    { question: '공예품 매장 이름이 창의성을 어떻게 격려할 수 있나요?', answer: '상상력과 창작 용어를 사용하는 이름은 고객에게 영감을 줍니다. "드림", "이매진", "크리에이트", "인스파이어" 같은 단어는 매장이 창의적인 아이디어가 실현되는 곳임을 암시합니다. 이것은 매장을 단순한 용품 이상—영감의 원천으로 포지셔닝합니다.' },
    { question: '공예품 매장 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 공예 체인과 너무 유사한 이름, 성장을 제한하는 너무 구체적인 이름, 철자가 어려운 단어, 환영하기보다 배타적으로 느껴지는 이름, 공예의 기쁨과 창의성을 전달하지 못하는 모든 것.' },
  ],
  howToChoose: {
    intro: '공예품 매장의 완벽한 이름을 선택하는 것은 창의성을 영감 주고 모든 숙련도 수준의 메이커를 환영하는 상상력 넘치는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 매장 전면, 쇼핑백, 소셜 미디어, 마케팅 자료에 나타납니다—고객이 창의적인 브랜드와 갖는 첫 접점입니다.',
    steps: [
      { title: '공예 사업 아이덴티티 정의', description: '이름 생성 전에 공예품 매장의 포지셔닝을 명확히 하세요. 주로 제공할 공예 용품 유형(일반, 실/섬유, 종이, 비즈, 미술 용품), 이상적인 고객(초보자, 고급 공예가, 특정 공예 커뮤니티), 워크숍, 수업, 또는 커뮤니티 공간을 제공할 것인지, 공예 체인과의 차별점, 만들고 싶은 분위기를 고려하세요. 답변에 따라 전문화되거나 일반적인, 전문적이거나 아늑한, 교육적이거나 소매 중심의 소리의 이름이 필요한지 결정됩니다.' },
      { title: '창의성과 예술성 구현', description: '공예품 매장은 창작적 표현의 도구를 판매합니다. 이름은 창의성, 상상력, 예술적 잠재력을 연상시키고, 손으로 무언가를 만드는 기쁨을 암시하고, 영감을 주고 초대적으로 들리고, 고객의 메이커 아이덴티티에 어필하고, 여기서 창의성이 일어난다는 것을 전달해야 합니다. 크리에이트, 크래프트, 디자인, 이매진, 아티산 같은 단어는 독특한 브랜드 개발을 허용하면서 즉각적인 창작 연상을 만듭니다.' },
      { title: '따뜻함과 환영하는 매력 창조', description: '공예품 매장은 커뮤니티 모임 장소로 번성합니다. 이름은 포용적이고 환영하는 느낌이어야 하고, 모든 숙련도 수준을 위한 친근한 목적지를 암시하고, 창작 공간의 아늑한 편안함을 연상시키고, 브라우징, 학습, 커뮤니티를 격려하고, 고객이 소속감을 느끼게 해야 합니다. 장소를 암시하는 단어(코티지, 코너, 헤이븐, 눅)는 영감과 연결을 찾는 공예가를 끌어들이는 따뜻하고 초대적인 이미지를 만듭니다.' },
      { title: '전문성 또는 고유 포커스 반영', description: '독특한 전문성이 있다면 통합하는 것을 고려하세요. 실/섬유 예술의 경우 얀욘더나 파이버포트리스. 종이/스크랩북의 경우 페이퍼파라다이스나 크리에이티브컷. 비즈/주얼리의 경우 비즈베이나 스파클서플라이. 재봉/퀼트의 경우 스티치스튜디오나 패브릭파운틴. 일반/종합 제공의 경우 크래프티코브나 크리에이트코너. 관련 카테고리로의 미래 확장 여지와 구체성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(가능하면 .com 확보), 소셜 미디어(공예 사업에 특히 중요한 핀터레스트), 사업자 등록(주에서 확인), 상표 검색(소매 및 공예 카테고리 확인), 공예 플랫폼 존재(엣시, 라벨리, 공예 커뮤니티 검색) 전반에 걸쳐 가용성을 확인하세요. 공예가들은 시각적 플랫폼에서 발견을 적극적으로 공유하므로 일관된 브랜딩이 필수적입니다.' },
      { title: '공예 커뮤니티와 테스트', description: '최종 결정 전에 타겟 공예가를 대표하는 사람들과 테스트하세요. 이 이름이 창작 목적지처럼 느껴지는지, 어떤 유형의 용품을 찾을 것으로 기대하는지, 숙련도 수준에 관계없이 환영받는 느낌인지, 동료 공예가들에게 이 매장을 추천할 것인지, 창작에 영감을 주는지 물어보세요. 피드백은 이름이 올바른 기대와 감정을 만드는지 드러냅니다.' },
      { title: '성장과 커뮤니티 구축 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 공예 카테고리 추가, 추가 매장 오픈, 이커머스 런칭, 워크숍과 수업 제공 확장, 온라인 커뮤니티와 콘텐츠 구축. 이상적인 공예품 매장 이름은 창의적이고, 환영하고, 다재다능하며, 만들고 창작하는 기쁨을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '아티산아케이드', description: '다양성을 갖춘 장인 품질의 공예 용품을 판매하는 목적지입니다.' },
    { name: '크래프티코브', description: '다양한 공예 아이템과 영감을 제공하는 아늑한 매장입니다.' },
    { name: '크리에이션코너', description: '끝없는 프로젝트를 위한 용품으로 가득 찬 창작 코너입니다.' },
    { name: '핸드메이드헤이븐', description: '수제 창작물을 위한 용품을 제공하는 안식처입니다.' },
    { name: '드리미디자인', description: '꿈 같은 공예 디자인을 영감 주는 것으로 알려진 매장입니다.' },
    { name: '인스퍼레이션아일', description: '창작 영감과 용품을 제공하는 목적지입니다.' },
    { name: '크래프팅코티지', description: '종합적인 공예 용품과 함께 아늑한 코티지 느낌입니다.' },
    { name: '아트풀아크', description: '예술적이고 고품질의 공예 아이템으로 알려졌습니다.' },
    { name: '이매지네이션임펄스', description: '창작 상상력을 자극하는 매장입니다.' },
    { name: '디자이너돔', description: '디자이너 품질의 공예 용품을 제공하는 목적지입니다.' },
    { name: '크리에이티비티크레이즈', description: '창작 만들기의 흥분과 열정을 포착합니다.' },
    { name: '메이크앤몰드', description: '손으로 만들고 형성하는 과정을 격려합니다.' },
    { name: '스티치스피어', description: '스티칭과 재봉 용품을 위한 종합 목적지입니다.' },
    { name: '니트눅', description: '뜨개질 용품을 전문으로 하는 아늑한 코너입니다.' },
    { name: '비즈베이', description: '훌륭한 비즈 셀렉션으로 알려진 목적지입니다.' },
    { name: '소잉생추어리', description: '재봉 애호가를 위한 전용 공간입니다.' },
    { name: '얀야드', description: '섬유 예술가를 위한 풍부한 실 셀렉션입니다.' },
    { name: '펠트포트리스', description: '펠트 공예와 텍스타일 아트를 위한 요새입니다.' },
    { name: '페이퍼팬트리', description: '종이 공예와 용품을 잘 갖춘 원천입니다.' },
    { name: '메이커스메도우', description: '모든 종류의 메이커를 위한 환영하는 공간입니다.' },
  ],
},

'crochet': {
  slug: 'crochet',
  name: '코바늘 사업 이름 생성기',
  title: '무료 AI 코바늘 사업 이름 아이디어 생성기',
  description: '실 가게, 수제 제품, 섬유 예술 사업을 위한 매력적이고 기억에 남는 이름을 생성하세요.',
  metaDescription: 'AI 생성기로 독특한 코바늘 사업 이름을 함께 뜨세요. 실 가게, 수제 제품, 섬유 예술 사업을 위한 매력적이고 기억에 남는 이름을 만드세요. 빠르고 무료이며 창의적입니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '코바늘 사업을 설명하세요...',
  inputPlaceholder: '예: 귀여운 코바늘 인형과 패턴을 판매하는 수제 아미구루미 숍',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['아늑 & 매력적', '모던 & 트렌디', '기발 & 장난스러운', '클래식 & 우아함'], default: '아늑 & 매력적', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the fiber arts and crochet industry. Your role is to generate charming, creative business names that convey handmade quality, craftsmanship, and cozy appeal for crochet businesses, yarn shops, and handmade goods sellers.

CROCHET BUSINESS INDUSTRY CONTEXT:

The crochet business industry encompasses:
- Handmade crochet product sellers
- Crochet pattern designers
- Yarn and fiber supply shops
- Custom crochet order businesses
- Crochet tutorial and course creators
- Amigurumi and toy makers
- Crochet clothing and accessory designers
- Baby and children's crochet specialists
- Home décor crochet artists

NAME CHARACTERISTICS FOR CROCHET BUSINESSES:

1. **Charming and Handmade**
   - Names should highlight the handmade nature of crochet
   - Evoke warmth, personal touch, and care
   - Suggest the time and skill invested in each piece
   - Examples: Handmade, Crafted, Stitched, Hooked

2. **Memorable and Cozy**
   - Easy to remember and share
   - Evoke the comfort of crocheted items
   - Create warm, fuzzy feelings
   - Suggest the tactile pleasure of yarn

3. **Reflects Crochet Style**
   - Communicate your specific crochet focus
   - Whether modern, vintage, whimsical, or classic
   - Align with target customer aesthetics
   - Examples: Bohemian, Classic, Modern, Whimsical

4. **Fiber Arts Community Appeal**
   - Names that resonate with crochet enthusiasts
   - Suggest expertise and passion
   - Work within the broader yarn crafts community
   - Build connection with fellow fiber artists

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a crochet business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '수제 코바늘 제품 사업',
      description: '수제 아이템을 판매하는 사업을 런칭하는 코바늘 뜨개질사들은 코바늘 사업 이름 생성기를 사용하여 각 작품에 투자된 수공예 품질과 정성을 전달하는 이름을 찾습니다. 아미구루미, 담요, 웨어러블 중 무엇을 판매하든 생성기는 독특한 수제 제품을 찾는 고객을 끌어들이는 매력적인 이름을 제공합니다.',
    },
    {
      title: '코바늘 패턴 디자이너 브랜딩',
      description: '코바늘 패턴을 만들고 판매하는 패턴 디자이너들은 생성기를 사용하여 라벨리, 엣시, 자체 웹사이트 등 플랫폼 전반에서 작동하는 브랜드 이름을 개발합니다. 기억에 남고 전문적이면서도 섬유 예술 커뮤니티에 공감하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '실 가게 또는 코바늘 용품 사업',
      description: '실 가게나 코바늘 용품 사업을 오픈하는 창업자들은 생성기를 사용하여 섬유 예술가를 끌어들이는 초대적인 이름을 만듭니다. 모든 숙련도 수준의 코바늘 뜨개질사들에게 환영하는 느낌을 주면서 공예에 대한 전문성을 전달하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 코바늘 사업 이름이란 무엇인가요?', answer: '좋은 코바늘 사업 이름은 매력적이고 제품의 수제 특성을 연상시켜야 합니다. 기억에 남고 아늑해야 하며, 모던, 빈티지, 또는 기발함 등 코바늘 스타일을 반영해야 합니다. 이름은 섬유 예술 커뮤니티에 공감하고 각 창작물에 투자된 정성을 전달해야 합니다.' },
    { question: '코바늘 사업 이름에 "코바늘"이나 "실"을 포함해야 하나요?', answer: '코바늘 특화 단어를 포함하면 고객이 비즈니스를 즉시 이해하는 데 도움이 되며, 특히 엣시 같은 플랫폼에서 그렇습니다. 그러나 더 넓은 섬유 예술 용어는 뜨개질이나 다른 공예로 확장할 경우 유연성을 제공합니다. 장기적인 비즈니스 계획과 타겟 고객을 고려하세요.' },
    { question: '코바늘 사업 이름이 엣시 같은 플랫폼에서 얼마나 중요한가요?', answer: '매우 중요합니다. 엣시와 공예 플랫폼에서 이름은 검색 결과에 나타나고 고객이 숍을 기억하고 재방문하는 데 도움이 됩니다. 독특하고 기억에 남는 이름은 또한 긴밀한 코바늘 커뮤니티 내에서 입소문 추천을 돕습니다.' },
    { question: '현재 인기 있는 코바늘 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 실과 섬유 용어(루프, 스티치, 훅), 아늑함/편안함 이미지(네스트, 헤이븐, 스너그), 수제 강조(크래프티드, 메이드, 아티산), 아미구루미 판매자를 위한 기발한 이름, 현대적인 코바늘 디자인을 위한 모던/미니멀리스트 이름이 포함됩니다.' },
    { question: '코바늘 사업에 제 이름을 사용해야 하나요?', answer: '이름을 사용하면 메이커를 알고 싶어하는 수제 고객이 가치 있게 여기는 개인적 연결을 만들 수 있습니다. 많은 성공적인 섬유 예술가들이 자신의 이름을 사용합니다. 그러나 사업을 매각하거나 개인적 범위를 넘어 브랜드가 성장하기를 원할 수 있는지 고려하세요.' },
    { question: '코바늘 사업 이름 가용성을 어떻게 확인하나요?', answer: '엣시 숍 이름, 라벨리 디자이너 이름, 인스타그램 핸들, 도메인 이름, 사업자 등록을 확인하세요. 또한 일반 공예 플랫폼과 지역 실 가게도 검색하세요. 코바늘 커뮤니티는 연결되어 있으므로 독특한 이름을 갖는 것이 중요합니다.' },
    { question: '코바늘 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 코바늘 용어(훅, 스티치, 루프, 얀, 파이버), 질감 단어(소프트, 코지, 웜, 플러시), 수제 용어(크래프티드, 메이드, 아티산), 편안함 단어(네스트, 헤이븐, 홈), 기발한 용어(원더, 매직, 드림)가 포함됩니다.' },
    { question: '이름이 코바늘 전문성을 반영해야 하나요?', answer: '독특한 전문성(아미구루미, 베이비 아이템, 홈 데코)이 있다면 반영하면 타겟 시장을 끌어들일 수 있습니다. 그러나 너무 구체적인 이름은 미래 확장을 제한할 수 있습니다. "코지 크리에이션즈"는 "온리 블랭킷"보다 다양한 코바늘 아이템에 더 잘 맞습니다.' },
    { question: '코바늘 사업 이름이 선물 구매자에게 어떻게 어필할 수 있나요?', answer: '많은 코바늘 아이템이 의미 있는 선물로 구매됩니다. 정성, 편안함, 수제 품질을 암시하는 이름은 선물 구매자에게 어필합니다. "[비즈니스]에서 선물을 받았어요"라고 말할 때 이름이 어떻게 들리는지 고려하세요—사려 깊고 품질 있게 들려야 합니다.' },
    { question: '코바늘 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 섬유 예술 브랜드와 너무 유사한 이름, 검색에서 타이핑하기 어려운 철자, 수제나 정통적으로 느껴지지 않는 이름, 너무 일반적인 용어, 미래 확장을 제한하는 이름. 이름은 제품처럼 개인적이고 장인적으로 느껴져야 합니다.' },
  ],
  howToChoose: {
    intro: '코바늘 사업의 완벽한 이름을 선택하는 것은 섬유 예술 애호가와 수제 품질을 추구하는 고객에게 공감하는 독특한 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제품 태그, 엣시 숍, 소셜 미디어, 공예 박람회 디스플레이에 나타납니다—고객이 작품을 기억하고 추천하는 방식입니다.',
    steps: [
      { title: '코바늘 사업 아이덴티티 정의', description: '이름 생성 전에 코바늘 사업의 포지셔닝을 명확히 하세요. 만들 코바늘 아이템 유형(아미구루미, 웨어러블, 홈 데코, 베이비 아이템), 완제품, 패턴, 또는 둘 다 판매할 것인지, 이상적인 고객(다른 코바늘 뜨개질사, 선물 구매자, 새 부모, 홈 데코레이터), 코바늘 스타일을 독특하게 만드는 것, 판매할 플랫폼(엣시, 공예 박람회, 자체 웹사이트)을 고려하세요. 답변에 따라 기발하고 귀여운, 세련되고 모던한, 아늑하고 전통적인, 또는 전문적이고 패턴 중심의 소리의 이름이 필요한지 결정됩니다.' },
      { title: '수제 매력 구현', description: '코바늘 고객은 공예의 수제적이고 개인적인 특성을 가치 있게 여깁니다. 이름은 수제 아이템의 따뜻함과 정성을 연상시키고, 각 작품에 투자된 시간과 기술을 암시하고, 개인적이고 정통적으로 들리고, 감정적 연결을 만들고, 품질 장인정신을 전달해야 합니다. 핸드메이드, 크래프티드, 훅드, 스티치드 같은 단어는 수공예 제공물에 대한 즉각적인 이해를 만듭니다.' },
      { title: '아늑하고 기억에 남는 매력 창조', description: '코바늘 아이템은 편안함과 따뜻함과 연관됩니다. 이름은 아늑한 느낌을 연상시키고, 반복 고객을 위해 기억하기 쉽고, 코바늘 커뮤니티 내에서 공유하기 즐겁고, 선물 주는 맥락에서 잘 작동하고, 실의 촉각적 즐거움을 암시해야 합니다. 코지, 웜, 네스트, 헤이븐, 스너그 같은 단어는 코바늘과 연관된 편안한 이미지를 만듭니다.' },
      { title: '고유한 코바늘 스타일 반영', description: '독특한 스타일이 있다면 통합하는 것을 고려하세요. 모던/미니멀리스트의 경우 클린라인즈나 모던루프. 빈티지/향수적의 경우 그랜마스티치나 헤리티지훅. 기발함/귀여움의 경우 훅드온웜지나 얀매직. 보헤미안의 경우 보호스티치나 프리스피릿파이버. 클래식/우아함의 경우 엘레강트스티치나 리파인드훅. 코바늘 관심사가 발전함에 따라 진화할 여지와 스타일 구체성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '엣시(기존 숍 이름 검색), 라벨리(디자이너 이름 확인), 인스타그램(코바늘 사업에 중요), 도메인 이름(자체 웹사이트용), 사업자 등록(주 요구 사항) 전반에 걸쳐 가용성을 확인하세요. 코바늘 커뮤니티는 소셜 플랫폼에서 적극적으로 공유하므로 일관된 네이밍이 필수적입니다.' },
      { title: '섬유 예술 커뮤니티와 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 코바늘 사업처럼 느껴지는지, 이 판매자에게서 어떤 유형의 아이템을 기대하는지, 수제적이고 개인적으로 느껴지는지, 동료 코바늘 뜨개질사들에게 추천할 것인지, 따뜻하고 정통적으로 느껴지는지 물어보세요. 피드백은 이름이 올바른 기대와 연결을 만드는지 드러냅니다.' },
      { title: '섬유 예술 내 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 코바늘 카테고리 추가, 뜨개질이나 다른 섬유 예술로 확장, 제품과 함께 패턴 디자인 런칭, 워크숍이나 코스 가르치기, 엣시를 넘어 자체 이커머스로 성장. 이상적인 코바늘 사업 이름은 매력적이고, 기억에 남고, 정통적이며, 창작물의 수제 따뜻함을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '스티치생추어리', description: '아름다운 스티치와 코바늘 창작물에 전념하는 성소입니다.' },
    { name: '크래프티크로셰', description: '단순하고 명확하며 수제 제품의 공예적 특성을 강조합니다.' },
    { name: '훅헤이븐', description: '코바늘 바늘로 작업하는 것을 좋아하는 사람들을 위한 안식처입니다.' },
    { name: '얀욘더', description: '실의 멋진 세계로의 여행을 암시합니다.' },
    { name: '패턴파라다이스', description: '아름다운 코바늘 패턴과 디자인의 천국입니다.' },
    { name: '루프스럭셔리', description: '프리미엄 코바늘 아이템을 만드는 고급스러운 루프입니다.' },
    { name: '스레드트레저', description: '실과 정성으로 만든 소중한 아이템입니다.' },
    { name: '파이버판타지', description: '섬유 창작물과 가능성의 환상 세계입니다.' },
    { name: '위브원더', description: '실을 엮는 예술을 통해 경이로움을 만듭니다.' },
    { name: '탱글트랭퀼리티', description: '코바늘의 리드미컬한 공예를 통해 평화와 고요함을 찾습니다.' },
    { name: '그래니스퀘어생텀', description: '사랑받는 그래니 스퀘어 패턴 전통을 기념합니다.' },
    { name: '노트네스트', description: '매듭이 아름다운 창작물이 되는 아늑한 둥지입니다.' },
    { name: '펄팰리스', description: '스티치 우수성과 품질을 위한 그랜드한 목적지입니다.' },
    { name: '레이스라군', description: '섬세하고 아름다운 레이스 코바늘 창작물입니다.' },
    { name: '훅드헤이븐', description: '코바늘 예술에 빠진 사람들을 위한 안식처입니다.' },
    { name: '코지크래프트', description: '수제 코바늘 아이템의 아늑한 편안함을 강조합니다.' },
    { name: '우븐웜지', description: '창의성과 정성으로 엮인 기발한 창작물입니다.' },
    { name: '스레디드트레저스', description: '실 한 올 한 올로 만든 소중한 아이템입니다.' },
    { name: '얀야드', description: '실 애호가를 위한 풍부한 셀렉션과 자원입니다.' },
    { name: '스너그스티치', description: '모든 스티치로 포근하고 편안한 아이템을 만듭니다.' },
  ],
},

// ==================== KOREAN (ko) TRANSLATION - BATCH 4 (16-20) ====================

'dessert': {
  slug: 'dessert',
  name: '디저트 사업 이름 생성기',
  title: '무료 AI 디저트 사업 이름 아이디어 생성기',
  description: '베이커리, 파티세리, 스위트 샵을 위한 군침 도는 기억에 남는 이름을 생성하세요.',
  metaDescription: '무료 AI 생성기로 디저트 사업에 완벽한 이름을 달콤하게 만드세요. 베이커리, 파티세리, 스위트 샵을 위한 군침 도는 기억에 남는 이름을 만드세요. 지금 시도해 보세요! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '디저트 사업을 설명하세요...',
  inputPlaceholder: '예: 마카롱과 우아한 페이스트리를 전문으로 하는 프랑스 영감의 파티세리',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['우아 & 세련된', '달콤 & 장난스러운', '탐닉 & 럭셔리', '모던 & 트렌디'], default: '우아 & 세련된', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the dessert and confectionery industry. Your role is to generate tempting, memorable business names that convey indulgence, sweetness, and delicious appeal for dessert shops, bakeries, and sweet treat businesses.

DESSERT BUSINESS INDUSTRY CONTEXT:

The dessert business industry encompasses:
- Dessert cafes and lounges
- Pastry shops and patisseries
- Ice cream parlors and gelaterias
- Cake and cupcake bakeries
- Gourmet dessert bars
- Dessert catering services
- Specialty dessert makers (macarons, churros, etc.)
- Vegan and health-conscious dessert shops
- Dessert food trucks and pop-ups

NAME CHARACTERISTICS FOR DESSERT BUSINESSES:

1. **Delicious and Indulgent**
   - Names should evoke temptation and craving
   - Suggest rich, satisfying sweetness
   - Create appetite appeal
   - Examples: Decadent, Indulgent, Luscious, Rich

2. **Memorable and Crave-Inducing**
   - Easy to remember and share
   - Create lasting impressions
   - Trigger sweet cravings
   - Stand out among sweet shops

3. **Reflects Dessert Variety**
   - Communicate your sweet offerings
   - Whether cakes, pastries, frozen, or mixed
   - Align with target customer expectations
   - Examples: Pastry, Sweet, Sugar, Confection

4. **Celebratory and Joyful**
   - Desserts accompany celebrations
   - Names should feel festive and happy
   - Suggest the joy sweets bring
   - Appeal to gift and occasion buyers

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a dessert business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '디저트 카페 또는 라운지 오픈',
      description: '디저트 카페를 오픈하는 창업자들은 디저트 사업 이름 생성기를 사용하여 제공하는 탐닉적이고 맛있는 경험을 전달하는 이름을 찾습니다. 프랑스 페이스트리, 이국적인 스위트, 인스타그램에 어울리는 창작물 중 무엇을 전문으로 하든 생성기는 단 것을 좋아하는 사람들을 끌어들이고 기억에 남는 브랜드 아이덴티티를 확립하는 유혹적인 이름을 제공합니다.',
    },
    {
      title: '특수 디저트 사업 런칭',
      description: '특정 디저트(마카롱, 치즈케이크, 츄러스)를 전문으로 하는 베이커들은 생성기를 사용하여 디저트 애호가들에게 어필하면서 전문성을 전달하는 기억에 남는 브랜드 이름을 만듭니다. 소셜 미디어, 배달 앱, 매장 전면 전반에서 작동하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '디저트 케이터링 또는 이벤트 서비스',
      description: '디저트 케이터링 및 이벤트 서비스 제공업체들은 생성기를 사용하여 파티 플래너와 이벤트 고객을 끌어들이는 전문적이고 매력적인 이름을 개발합니다. 결혼식, 기업 행사, 특별한 행사에 적합한 축하적이고 프리미엄한 소리의 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 디저트 사업 이름이란 무엇인가요?', answer: '좋은 디저트 사업 이름은 맛있고 탐닉적이어야 하며, 이름만 들어도 간식이 먹고 싶어져야 합니다. 기억에 남고 갈망을 유발해야 하며, 케이크, 페이스트리, 또는 다양한 스위트 등 디저트 다양성을 반영해야 합니다. 이름은 축하적이고 기쁘게 느껴져야 합니다.' },
    { question: '디저트 사업 이름에 특정 디저트를 언급해야 하나요?', answer: '특정 디저트를 포함하면 틈새 고객을 끌어들일 수 있지만 인식되는 제공물을 제한할 수 있습니다. "마카롱 매직"은 마카롱 애호가를 끌어들이지만 케이크도 판매한다는 것을 암시하지 못할 수 있습니다. 일반적인 달콤한 용어는 메뉴 확장 시 더 많은 다재다능함을 제공합니다.' },
    { question: '디저트 사업 이름이 마케팅에 얼마나 중요한가요?', answer: '식품 사업에서 매우 중요합니다. 이름은 포장, 매장 전면, 배달 앱, 소셜 미디어에 나타납니다. 유혹적인 이름은 고객이 디저트를 보기도 전에 갈망을 만듭니다. 입소문 추천을 위해 쉽게 공유해야 합니다.' },
    { question: '현재 인기 있는 디저트 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 탐닉 용어(데카던트, 인덜전트, 럭스), 질감 단어(멜트, 레이어, 크럼블), 프랑스 영감 용어(파티세리, 컨피세리), 소셜 미디어 매력을 위한 장난스러운 이름, 합성어(슈가크래프트, 스위트아트)가 포함됩니다.' },
    { question: '디저트 사업에 제 이름을 사용해야 하나요?', answer: '이름을 사용하면 개인적 연결을 만들 수 있으며, 특히 장인 디저트 사업에 좋습니다. 많은 성공적인 파티셰들이 개인 브랜드를 구축합니다. 그러나 비개인적 이름은 매각이나 확장에 더 많은 유연성을 제공합니다. 장기적인 목표를 고려하세요.' },
    { question: '디저트 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(디저트에 인스타그램이 중요), 음식 배달 앱 목록, 상표 데이터베이스를 확인하세요. 또한 지역의 유사한 디저트 사업도 검색하세요.' },
    { question: '디저트 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 달콤함 용어(슈가, 스위트, 허니), 탐닉 단어(데카던트, 인덜전트, 고메이), 질감 단어(멜트, 크럼블, 크리미), 축하 단어(딜라이트, 조이, 블리스), 전문 용어(파티세리, 컨펙션, 페이스트리)가 포함됩니다.' },
    { question: '이름이 디저트 스타일을 반영해야 하나요?', answer: '독특한 스타일(프랑스, 퓨전, 비건, 레트로)이 있다면 반영하면 타겟 시장을 끌어들일 수 있습니다. 그러나 메뉴 진화를 수용할 만큼 이름이 넓게 유지되도록 하세요. "스위트 헤이븐"은 "프렌치 온리 페이스트리"보다 다양한 디저트에 더 잘 맞습니다.' },
    { question: '디저트 사업 이름이 축하 구매자에게 어떻게 어필할 수 있나요?', answer: '많은 디저트가 축하를 위해 구매됩니다. 기쁨, 탐닉, 특별한 행사를 암시하는 이름은 축하 구매자에게 어필합니다. "[비즈니스]에서 파티용으로 주문하고 있어요"라고 말할 때 이름이 어떻게 들리는지 고려하세요—특별하고 적절하게 들려야 합니다.' },
    { question: '디저트 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 맛있게 들리지 않는 이름, 철자가 어려운 단어, 기존 디저트 브랜드와 너무 유사한 이름, 구식이 될 트렌디한 용어, 메뉴 확장을 제한하는 이름, "갈망 테스트"를 통과하지 못하는 모든 것—들으면 디저트가 먹고 싶어지나요?' },
  ],
  howToChoose: {
    intro: '디저트 사업의 완벽한 이름을 선택하는 것은 입에 침이 고이고 고객이 달콤한 창작물을 갈망하게 만드는 유혹적인 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 포장, 매장 전면, 배달 앱, 소셜 미디어에 나타납니다—고객이 브랜드의 첫맛을 경험하는 것입니다.',
    steps: [
      { title: '디저트 사업 아이덴티티 정의', description: '이름 생성 전에 디저트 사업의 포지셔닝을 명확히 하세요. 전문으로 할 디저트 유형(케이크, 페이스트리, 아이스크림, 다양), 이상적인 고객(디저트 애호가, 축하 구매자, 건강 의식), 디저트를 독특하게 만드는 것(장인 품질, 이국적인 풍미, 식이 옵션), 비즈니스 모델(카페, 베이커리, 배달, 케이터링), 만들고 싶은 분위기나 경험을 고려하세요. 답변에 따라 우아하고 프랑스적인, 재미있고 장난스러운, 탐닉적이고 럭셔리한, 또는 건강하고 자연적인 소리의 이름이 필요한지 결정됩니다.' },
      { title: '맛과 탐닉 연상', description: '디저트 사업은 즐거움과 탐닉을 판매합니다. 이름은 즉각적인 갈망을 만들고, 풍부하고 만족스러운 달콤함을 암시하고, 말할 때 맛있게 들리고, 디저트의 감각적 경험을 연상시키고, 제공하는 간식을 전달해야 합니다. 데카던트, 인덜전트, 스위트, 멜트, 러셔스 같은 단어는 즉각적인 식욕 매력을 만듭니다.' },
      { title: '축하적이고 기쁜 매력 창조', description: '디저트는 인생의 축하에 동반됩니다. 이름은 축제적이고 특별하게 느껴지고, 스위트가 가져다주는 행복을 암시하고, 선물 및 행사 구매에 맞게 작동하고, 축하에 적절하게 들리고, 자신을 대접하는 기쁨을 전달해야 합니다. 파티, 결혼식, 축하 맥락에서 이름이 어떻게 들리는지 고려하세요.' },
      { title: '전문성 또는 고유 가치 반영', description: '독특한 전문성이 있다면 통합하는 것을 고려하세요. 프랑스 파티세리의 경우 파리지엔스위트나 컨피세리크래프트. 아이스크림/냉동의 경우 프로즌판타지나 젤라테리아글리. 케이크의 경우 레이어러브나 케이크크래프트. 건강/비건의 경우 홀섬스위트나 길트프리글리. 퓨전의 경우 플레이버스유나이트나 글로벌스위트. 메뉴 확장 여지와 구체성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(가능하면 .com 확보), 소셜 미디어(디저트 사업에 인스타그램이 중요), 배달 앱(주요 플랫폼의 기존 목록 확인), 사업자 등록(주 요구 사항), 상표 검색(식품 및 베이커리 카테고리) 전반에 걸쳐 가용성을 확인하세요. 디저트 사업은 시각적 플랫폼에서 번성하므로 소셜 미디어 가용성이 특히 중요합니다.' },
      { title: '디저트 애호가와 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 디저트가 먹고 싶게 만드는지, 이 이름에서 어떤 유형의 스위트를 상상하는지, 이곳을 발견하면 흥분할 것인지, 특별한 행사에 추천할 것인지, 프리미엄, 접근 가능, 또는 재미있게 느껴지는지 물어보세요. 피드백은 이름이 올바른 갈망과 기대를 만드는지 드러냅니다.' },
      { title: '성장과 메뉴 진화 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 디저트 카테고리 추가, 추가 매장 오픈, 배달과 케이터링 런칭, 브랜드 상품 만들기, 시그니처 제품 라인 개발. 이상적인 디저트 사업 이름은 맛있고, 기억에 남고, 다재다능하며, 제공하는 달콤한 탐닉을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '스위트센세이션', description: '멋진 맛 감각을 만드는 디저트입니다—경험적이고 맛있습니다.' },
    { name: '딜라이트풀델리커시', description: '정성을 담아 즐거운 디저트 별미를 제공하는 사업입니다.' },
    { name: '플레이버풀퓨전', description: '풍미를 융합하여 독특하고 흥미진진한 디저트를 만듭니다.' },
    { name: '슈가리심포니', description: '완벽하게 조화를 이루는 달콤한 간식의 교향곡입니다.' },
    { name: '고메이글리', description: '절대적인 기쁨과 행복을 가져다주는 고급 디저트입니다.' },
    { name: '인덜전스아일', description: '탐닉적인 디저트 탈출을 위한 섬 목적지입니다.' },
    { name: '데카던트드림', description: '가장 달콤한 꿈에서 나온 데카던트 디저트입니다.' },
    { name: '테이스티트릿', description: '단순하고 맛있으며 보편적으로 매력적인 달콤한 간식입니다.' },
    { name: '파티세리파라다이스', description: '페이스트리 애호가를 위한 프랑스 영감의 천국입니다.' },
    { name: '러셔스레이어', description: '아름답게 러셔스한 풍미 층을 가진 디저트입니다.' },
    { name: '헤븐리헤이븐', description: '신성한 디저트를 위한 천상의 목적지입니다.' },
    { name: '템테이션테라스', description: '거부할 수 없는 유혹적인 디저트의 테라스입니다.' },
    { name: '딜라이트돔', description: '즐거운 디저트 창작물로 가득 찬 돔입니다.' },
    { name: '블리스풀바이트', description: '순수한 디저트 행복의 완벽한 한 입입니다.' },
    { name: '크럼블코너', description: '맛있게 바삭한 디저트로 유명한 아늑한 코너입니다.' },
    { name: '멜트메도우', description: '꿈처럼 입에서 녹는 디저트입니다.' },
    { name: '글리그로브', description: '순수한 행복을 가져다주는 디저트의 숲입니다.' },
    { name: '대즐딜라이트', description: '인상을 주고 기쁘게 하는 눈부신 디저트입니다.' },
    { name: '슈가스프링클', description: '특별한 설탕 뿌림 터치가 있는 디저트입니다.' },
    { name: '조이풀젤리', description: '장난스럽고 컬러풀하고 기쁜 디저트 창작물입니다.' },
  ],
},

'digital-marketing': {
  slug: 'digital-marketing',
  name: '디지털 마케팅 사업 이름 생성기',
  title: '무료 AI 디지털 마케팅 사업 이름 아이디어 생성기',
  description: '마케팅 에이전시, SEO 회사, 광고 사업을 위한 전문적이고 혁신적인 이름을 생성하세요.',
  metaDescription: 'AI 생성 이름으로 디지털 마케팅 벤처를 강화하세요. 마케팅 에이전시, SEO 회사, 광고 사업을 위한 전문적이고 혁신적인 이름을 만드세요. 빠르고 무료이며 맞춤화됩니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '디지털 마케팅 사업을 설명하세요...',
  inputPlaceholder: '예: B2B 기업을 위한 SEO와 콘텐츠 마케팅을 전문으로 하는 풀서비스 디지털 마케팅 에이전시',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['전문적 & 신뢰할 수 있는', '혁신적 & 테크 포워드', '결과 지향 & 역동적', '창의적 & 대담한'], default: '전문적 & 신뢰할 수 있는', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the digital marketing and advertising industry. Your role is to generate professional, innovative business names that convey expertise, results, and cutting-edge capabilities for digital marketing agencies, consultancies, and online advertising businesses.

DIGITAL MARKETING INDUSTRY CONTEXT:

The digital marketing business industry encompasses:
- Full-service digital marketing agencies
- SEO and search marketing specialists
- Social media marketing agencies
- PPC and paid advertising agencies
- Content marketing firms
- Email marketing specialists
- Marketing automation consultancies
- Influencer marketing agencies
- Performance marketing agencies
- Digital analytics and data consultancies

NAME CHARACTERISTICS FOR DIGITAL MARKETING BUSINESSES:

1. **Tech-Savvy and Contemporary**
   - Names should reflect cutting-edge digital capabilities
   - Evoke innovation and modern marketing approaches
   - Suggest data-driven, results-oriented services
   - Examples: Digital, Data, Metric, Pixel, Cloud

2. **Professional and Trustworthy**
   - Communicate expertise and reliability
   - Sound reputable for B2B relationships
   - Instill confidence in marketing capabilities
   - Appeal to businesses seeking partners

3. **Memorable and Clear**
   - Easy to recall in competitive agency landscape
   - Clear communication of marketing focus
   - Professional yet approachable
   - Work well in business development contexts

4. **Results and Growth Focus**
   - Suggest outcomes and ROI
   - Communicate growth and success orientation
   - Appeal to results-focused clients
   - Examples: Growth, Boost, Amplify, Scale

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a digital marketing business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '디지털 마케팅 에이전시 런칭',
      description: '디지털 마케팅 에이전시를 시작하는 창업자들은 디지털 마케팅 사업 이름 생성기를 사용하여 전문성, 혁신, 결과 지향을 전달하는 이름을 찾습니다. 풀서비스 마케팅을 제공하든 특정 채널을 전문으로 하든 생성기는 비즈니스 고객을 끌어들이고 업계 신뢰성을 확립하는 전문적인 이름을 제공합니다.',
    },
    {
      title: '마케팅 컨설팅 브랜딩',
      description: '독립 사업을 런칭하는 마케팅 컨설턴트들은 생성기를 사용하여 디지털 마케팅 분야의 전문가로 포지셔닝하는 기억에 남는 브랜드 이름을 만듭니다. 1인 컨설턴트와 미래 에이전시 성장 모두에 맞는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '특수 마케팅 서비스 포지셔닝',
      description: '마케팅 전문가들(SEO, 소셜 미디어, PPC)은 생성기를 사용하여 서비스 확장 여지를 유지하면서 특정 전문성을 전달하는 이름을 개발합니다. 미래 다각화를 제한하지 않으면서 전문화를 신호하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 디지털 마케팅 사업 이름이란 무엇인가요?', answer: '좋은 디지털 마케팅 사업 이름은 전문적이고 신뢰할 수 있으면서도 테크에 정통하고 현대적이어야 합니다. 기억에 남고 명확해야 하며, 고객이 달성하도록 돕는 결과와 성장을 암시해야 합니다. 이름은 유능한 마케팅 파트너를 찾는 비즈니스에 어필해야 합니다.' },
    { question: '디지털 마케팅 이름에 "에이전시"나 "마케팅"을 포함해야 하나요?', answer: '"에이전시", "마케팅", "미디어", "디지털" 같은 전문 용어를 포함하면 비즈니스 유형을 즉시 명확히 할 수 있습니다. 그러나 일부 성공적인 에이전시는 더 부티크적이거나 창의적으로 느껴지는 추상적인 이름을 사용합니다. 즉각적인 명확성과 창의적 차별화 중 원하는 것을 기반으로 선택하세요.' },
    { question: '에이전시 이름이 고객 확보에 얼마나 중요한가요?', answer: '첫인상에 매우 중요합니다. 이름은 제안서, 프레젠테이션, 링크드인 같은 전문 플랫폼에 나타납니다. 전문적이고 혁신적으로 들리는 이름은 첫 미팅 전에 신뢰성을 확립하는 데 도움이 되며, 나쁜 이름은 역량에 대한 의구심을 만들 수 있습니다.' },
    { question: '현재 인기 있는 디지털 마케팅 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 합성어(클릭크래프트, 데이터드라이브), 성장/결과 용어(그로스 랩스, 부스트 디지털), 테크 용어(픽셀 파트너스, 메트릭 미디어), 스마트/전략 단어(스마트 미디어, 스트래티지 스파크)가 포함됩니다. 모던하고 깔끔하게 들리는 이름이 좋은 성과를 냅니다.' },
    { question: '마케팅 사업에 제 이름을 사용해야 하나요?', answer: '이름을 사용하면 개인 브랜드 컨설턴트에게 잘 맞지만 확장성과 매각 가치를 제한할 수 있습니다. 창업자를 넘어 성장할 계획인 에이전시의 경우 비개인적 이름이 더 많은 유연성을 제공합니다. 개인 사업을 구축하는지 확장 가능한 에이전시를 구축하는지 고려하세요.' },
    { question: '디지털 마케팅 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름(에이전시에 .com 강력 선호), 링크드인 회사 페이지, 에이전시 디렉토리, 상표 데이터베이스를 확인하세요. 마케팅 업계가 경쟁적이고 고객이 유사한 이름을 혼동할 수 있으므로 유사한 에이전시 이름도 검색하세요.' },
    { question: '디지털 마케팅 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 디지털 용어(디지털, 데이터, 픽셀, 온라인), 마케팅 용어(미디어, 브랜드, 콘텐츠, 트래픽), 결과 단어(그로스, 부스트, 컨버트, 스케일), 전략 단어(인사이트, 스트래티지, 스마트), 전문 용어(솔루션스, 파트너스, 랩스)가 포함됩니다.' },
    { question: '이름이 제공하는 특정 서비스를 반영해야 하나요?', answer: '너무 구체적인 이름(예: "SEO 온리 에이전시")은 인식되는 역량과 미래 확장을 제한합니다. 디지털 마케팅 포커스를 전달하면서도 잠재적인 서비스 추가를 포괄할 만큼 넓은 이름을 선택하세요.' },
    { question: '에이전시 이름이 다양한 업종에 어떻게 어필할 수 있나요?', answer: '잠재 고객을 소외시킬 수 있는 업종 특화 용어를 피하세요. "테크 마케팅 온리" 같은 이름은 시장을 제한합니다. "그로스 디지털" 같은 더 넓은 이름은 마케팅 전문성을 전달하면서 업종 전반에 어필합니다.' },
    { question: '디지털 마케팅 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 빨리 구식이 되는 트렌디한 이름, 기존 에이전시와 너무 유사한 이름, 철자가 어렵거나 테크 전문용어, 비전문적으로 들리는 이름, 서비스 확장을 제한하는 이름, 전문성과 결과 지향을 전달하지 못하는 모든 것.' },
  ],
  howToChoose: {
    intro: '디지털 마케팅 사업의 완벽한 이름을 선택하는 것은 고객을 끌어들이고 업계 신뢰성을 확립하는 전문적인 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제안서, 프레젠테이션, 링크드인, 모든 고객 커뮤니케이션에 나타납니다—비즈니스가 역량을 인식하는 방식의 기초입니다.',
    steps: [
      { title: '디지털 마케팅 사업 아이덴티티 정의', description: '이름 생성 전에 디지털 마케팅 사업의 포지셔닝을 명확히 하세요. 제공할 디지털 마케팅 서비스(풀서비스, SEO, 소셜, PPC, 콘텐츠), 이상적인 고객(업종, 회사 규모, 예산 수준), 접근 방식을 독특하게 만드는 것(데이터 기반, 창의적, 기술적, 전략적), 1인 컨설팅 또는 확장 가능한 에이전시 구축 여부, 향후 5-10년의 성장 비전을 고려하세요. 답변에 따라 부티크적이고 창의적인, 엔터프라이즈적이고 기업적인, 기술적이고 데이터 중심적인, 또는 결과와 성장 지향적인 소리의 이름이 필요한지 결정됩니다.' },
      { title: '혁신과 전문성 구현', description: '디지털 마케팅은 최첨단 역량을 요구합니다. 이름은 모던하고 혁신적인 접근 방식을 암시하고, 디지털 전문성을 전달하고, 위협적이지 않으면서 테크에 정통하게 들리고, 현대 마케팅을 이해한다는 것을 전달하고, 앞서가는 것으로 포지셔닝해야 합니다. 디지털, 데이터, 메트릭, 인사이트 같은 단어는 접근 가능하면서도 즉각적인 전문성 연상을 만듭니다.' },
      { title: '전문성과 신뢰 투사', description: 'B2B 고객은 마케팅 파트너에 대한 확신이 필요합니다. 이름은 평판 있고 신뢰할 수 있게 들리고, 기업 관계에 충분히 전문적이고, 마케팅 예산을 다루기에 신뢰할 수 있고, 전략적 권고에 신뢰성 있고, 모든 고객 규모에 적절해야 합니다. 창의성과 전문성의 균형을 맞추세요—너무 캐주얼하면 경험이 없어 보이고, 너무 기업적이면 비인격적으로 들립니다.' },
      { title: '결과와 성장 포커스 전달', description: '고객은 결과를 위해 마케팅 에이전시를 고용합니다. 이름은 달성하도록 돕는 결과를 암시하고, 성장과 성공 지향을 전달하고, ROI와 측정 가능한 영향을 내포하고, 행동 지향적이고 역동적으로 들리고, 결과 중심 비즈니스 리더에게 어필해야 합니다. 그로스, 부스트, 스케일, 컨버트 같은 단어는 고객이 찾는 결과를 전달합니다.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(에이전시에 .com 강력 선호), 링크드인(회사 페이지 가용성), 에이전시 디렉토리(기존 에이전시 목록 확인), 사업자 등록(주 요구 사항), 상표 검색(마케팅 및 광고 카테고리) 전반에 걸쳐 가용성을 확인하세요. 전문적 신뢰성은 모든 비즈니스 플랫폼에서 일관된 브랜딩을 요구합니다.' },
      { title: '비즈니스 의사 결정자와 테스트', description: '최종 결정 전에 잠재 고객을 대표하는 사람들과 테스트하세요. 이 이름이 유능한 디지털 마케팅 에이전시처럼 들리는지, 비즈니스를 위해 이 에이전시를 고려할 것인지, 혁신적으로 느껴지는지 구식으로 느껴지는지, 신뢰할 수 있고 전문적으로 느껴지는지, 이 에이전시가 제공할 것으로 예상되는 서비스가 무엇인지 물어보세요. 피드백은 이름이 올바른 전문적 인상을 만드는지 드러냅니다.' },
      { title: '에이전시 성장과 진화 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 마케팅 서비스 추가, 팀과 역량 성장, 새로운 시장이나 업종으로 확장, 잠재적 인수나 파트너십, 인정받는 업계 브랜드 구축. 이상적인 디지털 마케팅 사업 이름은 전문적이고, 혁신적이고, 다재다능하며, 결과 달성 전문성을 명확히 전달하면서 성장을 위한 에이전시 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '클릭코브', description: '클릭률과 참여도 향상에 집중하는 디지털 마케팅 목적지입니다.' },
    { name: '컨버전코너', description: '전환율과 ROI 증가를 돕는 사업입니다.' },
    { name: '메트릭매트릭스', description: '디지털 마케팅 지표와 데이터 기반 결정의 우수성입니다.' },
    { name: 'SEO스피어', description: '검색 엔진 최적화 전문성의 종합적인 세계입니다.' },
    { name: '픽셀펄스', description: '픽셀 완벽한 정밀함과 역동적인 에너지를 가진 디지털 마케팅입니다.' },
    { name: '트래픽트로브', description: '웹 트래픽과 가시성을 높이는 전략의 보물입니다.' },
    { name: '옵티마이즈드오아시스', description: '디지털 콘텐츠와 캠페인 최적화 전문 목적지입니다.' },
    { name: '스트래티지스피어', description: '비즈니스 성공을 위한 종합적인 디지털 마케팅 전략입니다.' },
    { name: '인게이지먼트엠파이어', description: '고객 참여와 브랜드 충성도의 제국을 구축합니다.' },
    { name: '디지털다이나모', description: '디지털 마케팅 세계의 강력한 힘입니다.' },
    { name: '바이럴볼트', description: '확산되고 전환되는 바이럴 디지털 콘텐츠를 만듭니다.' },
    { name: '미디어매트릭스', description: '채널 전반에 걸친 디지털 미디어 마케팅의 우수성입니다.' },
    { name: '인사이트아일랜드', description: '통찰력 있는 데이터 기반 디지털 마케팅 전략을 제공합니다.' },
    { name: '콘텐츠코브', description: '콘텐츠 제작과 콘텐츠 마케팅 우수성을 위한 안식처입니다.' },
    { name: '그로스그리드', description: '디지털 성장과 스케일링에 대한 체계적인 접근법입니다.' },
    { name: 'ROI렐름', description: '디지털 마케팅에서 투자 수익을 극대화합니다.' },
    { name: '캠페인캐슬', description: '요새처럼 강력하고 성공적인 디지털 캠페인을 관리합니다.' },
    { name: '비저빌리티비스타', description: '디지털 환경 전반에 걸쳐 고객 가시성을 높입니다.' },
    { name: '인플루언스인렛', description: '고객이 타겟 시장에 효과적으로 영향을 미치도록 돕습니다.' },
    { name: '애드어드벤트', description: '디지털 광고의 새로운 모험과 혁신입니다.' },
  ],
},

'electronics': {
  slug: 'electronics',
  name: '전자제품 사업 이름 생성기',
  title: '무료 AI 전자제품 사업 이름 아이디어 생성기',
  description: '테크 스토어, 가젯 샵, 기기 소매업체를 위한 혁신적이고 신뢰할 수 있는 이름을 생성하세요.',
  metaDescription: '무료 AI 생성기로 전자제품 사업에 완벽한 이름을 전기화하세요. 테크 스토어, 가젯 샵, 기기 소매업체를 위한 혁신적이고 신뢰할 수 있는 이름을 만드세요. 지금 시도해 보세요! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '전자제품 사업을 설명하세요...',
  inputPlaceholder: '예: 스마트 홈 기기와 액세서리를 전문으로 하는 소비자 전자제품 매장',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['모던 & 테크 포워드', '전문적 & 신뢰할 수 있는', '혁신적 & 최첨단', '접근 가능 & 친근한'], default: '모던 & 테크 포워드', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the electronics and technology retail industry. Your role is to generate innovative, trustworthy business names that convey technical expertise, quality, and modern appeal for electronics stores, tech shops, and gadget retailers.

ELECTRONICS BUSINESS INDUSTRY CONTEXT:

The electronics business industry encompasses:
- Consumer electronics retailers
- Computer and IT equipment stores
- Mobile phone and accessory shops
- Audio and video equipment specialists
- Gaming electronics retailers
- Smart home technology stores
- Electronics repair and service centers
- Online electronics retailers
- B2B electronics suppliers
- Refurbished and used electronics dealers

NAME CHARACTERISTICS FOR ELECTRONICS BUSINESSES:

1. **Tech-Savvy and Modern**
   - Names should convey cutting-edge technology
   - Evoke innovation and contemporary relevance
   - Suggest expertise in latest electronics
   - Examples: Tech, Digital, Circuit, Chip, Gadget

2. **Professional and Trustworthy**
   - Electronics are significant purchases
   - Communicate reliability and expertise
   - Build confidence in product quality
   - Suggest technical knowledge and support

3. **Easy to Spell and Pronounce**
   - Technology names can be complex
   - Keep it accessible for all customers
   - Work well in both online and offline contexts
   - Memorable for word-of-mouth recommendations

4. **Versatility for Product Range**
   - Electronics categories are diverse
   - Names should accommodate various products
   - Allow for evolution with technology
   - Examples: Electronics, Tech, Digital, Devices

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for an electronics business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '전자제품 소매점 런칭',
      description: '전자제품 매장을 오픈하는 창업자들은 전자제품 사업 이름 생성기를 사용하여 기술 전문성과 제품 품질을 전달하는 이름을 찾습니다. 컴퓨터, 폰, 홈 엔터테인먼트 중 무엇을 제공하든 생성기는 고객 신뢰를 구축하고 시장 존재감을 확립하는 혁신적인 이름을 제공합니다.',
    },
    {
      title: '온라인 전자제품 소매업체 브랜딩',
      description: '온라인 전자제품 사업을 런칭하는 이커머스 창업자들은 생성기를 사용하여 디지털 플랫폼 전반에서 작동하는 기억에 남는 브랜드 이름을 만듭니다. SEO 친화적이고 도메인 이름으로 사용 가능하며 기술 전문성을 전달하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '전자제품 서비스 사업 포지셔닝',
      description: '전자제품 수리 및 서비스 사업들은 생성기를 사용하여 기술적 역량과 신뢰성을 전달하는 이름을 개발합니다. 친근한 접근성을 유지하면서 전문적인 기술 지원이 필요한 고객을 끌어들이는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 전자제품 사업 이름이란 무엇인가요?', answer: '좋은 전자제품 사업 이름은 전문적이고 신뢰할 수 있으면서도 테크에 정통하고 모던해야 합니다. 철자와 발음이 쉬워야 하며, 기술이 발전함에 따라 다양한 전자제품 카테고리를 수용할 수 있는 다재다능함이 있어야 합니다.' },
    { question: '전자제품 매장 이름에 "전자제품"이나 "테크"를 포함해야 하나요?', answer: '테크 관련 단어를 포함하면 고객이 비즈니스를 즉시 이해하는 데 도움이 되며, 특히 지역 검색 가시성에 좋습니다. 그러나 더 짧고 창의적인 이름도 적절하게 기술적으로 들리면 효과적일 수 있습니다. 타겟 시장과 명확성 또는 창의성 중 더 중요한 것을 고려하세요.' },
    { question: '전자제품 매장 이름이 신뢰 구축에 얼마나 중요한가요?', answer: '매우 중요합니다. 전자제품은 고객이 제품 품질과 애프터 서비스 지원에 대한 확신이 필요한 중요한 구매입니다. 전문적이고 신뢰할 수 있게 들리는 이름은 고객 신뢰를 높이고 프리미엄 가격을 정당화할 수 있습니다.' },
    { question: '현재 인기 있는 전자제품 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 합성 테크 단어(테크트로브, 가젯그리드), 혁신 용어(넥스트젠, 퓨처테크), 디지털 용어(디지털 디포, 사이버 코너), 품질 지표(프리미엄 테크, 트러스티드 일렉트로닉스)가 포함됩니다.' },
    { question: '전자제품 사업에 제 이름을 사용해야 하나요?', answer: '개인 이름은 소유자 전문성을 통해 신뢰를 구축하는 수리점과 서비스 사업에 잘 맞습니다. 더 큰 소매 운영의 경우 비개인적 이름이 종종 더 확립되고 확장 가능하게 들립니다. 비즈니스 모델과 성장 계획을 고려하세요.' },
    { question: '전자제품 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 구글 비즈니스 프로필, 소셜 미디어 핸들, 상표 데이터베이스를 확인하세요. 또한 혼란을 피하기 위해 지역 및 전국적으로 유사한 전자제품 소매업체도 검색하세요.' },
    { question: '전자제품 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 테크 용어(테크, 디지털, 서킷, 칩), 기기 단어(가젯, 디바이스, 기어), 혁신 단어(이노베이션, 스마트, 모던), 신뢰 단어(트러스티드, 퀄리티, 익스퍼트), 장소 단어(디포, 허브, 센터, 스토어)가 포함됩니다.' },
    { question: '이름이 판매하는 특정 전자제품을 반영해야 하나요?', answer: '너무 구체적인 이름(예: "폰즈 온리")은 미래 확장을 제한합니다. 기술이 발전함에 따라 제품 추가를 수용할 만큼 넓은 이름을 선택하세요. "테크 허브"는 "저스트 랩탑"보다 다양한 전자제품에 더 잘 맞습니다.' },
    { question: '전자제품 이름이 테크에 정통한 고객과 일반 고객 모두에게 어떻게 어필할 수 있나요?', answer: '기술적 신뢰성과 접근성의 균형을 맞추세요. "스마트 일렉트로닉스" 같은 이름은 위협적이지 않으면서 지식 있게 들립니다. 캐주얼 소비자를 소외시킬 수 있는 과도하게 기술적인 전문용어를 피하면서 전문성을 신호하는 용어를 유지하세요.' },
    { question: '전자제품 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 고객을 혼란스럽게 하는 과도하게 기술적인 전문용어, 주요 전자제품 체인과 너무 유사한 이름, 철자가 어려운 테크 단어, 구식으로 들리는 이름, 제품 카테고리를 제한하는 이름, 품질과 전문성을 전달하지 못하는 모든 것.' },
  ],
  howToChoose: {
    intro: '전자제품 사업의 완벽한 이름을 선택하는 것은 테크에 정통한 소비자와 일반 소비자 모두를 끌어들이는 신뢰할 수 있는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 매장 전면, 웹사이트, 영수증에 나타납니다—고객이 기술 전문성과 제품 품질을 인식하는 방식의 기초입니다.',
    steps: [
      { title: '전자제품 사업 아이덴티티 정의', description: '이름 생성 전에 전자제품 사업의 포지셔닝을 명확히 하세요. 주로 판매할 전자제품 유형(컴퓨터, 폰, 홈 엔터테인먼트, 스마트 홈), 이상적인 고객(테크 애호가, 일반 소비자, 비즈니스), 매장을 차별화하는 것(전문 서비스, 경쟁력 있는 가격, 특수 제품), 수리나 설치 같은 서비스를 제공할 것인지, 지역 매장이나 전국 브랜드를 구축하는지 고려하세요. 답변에 따라 전문화되거나 일반적인, 프리미엄이나 가치 지향적인, 기술적이거나 접근 가능한 소리의 이름이 필요한지 결정됩니다.' },
      { title: '혁신과 기술 구현', description: '전자제품 고객은 최첨단 제품을 기대합니다. 이름은 모던하고 혁신적인 기술을 암시하고, 위협적이지 않으면서 적절하게 기술적으로 들리고, 최신 제품을 제공한다는 것을 전달하고, 기술 트렌드에 대한 이해를 전달하고, 앞서가는 것으로 포지셔닝해야 합니다. 테크, 디지털, 서킷, 스마트 같은 단어는 접근 가능하면서도 즉각적인 기술 연상을 만듭니다.' },
      { title: '신뢰와 신뢰성 구축', description: '전자제품은 신뢰가 필요한 중요한 구매입니다. 이름은 신뢰할 수 있고 전문적으로 들리고, 전문성과 품질을 전달하고, 제품 정품에 대한 확신을 구축하고, 지식 있는 직원과 지원을 암시하고, 보증 및 서비스 맥락에 적절해야 합니다. 혁신과 신뢰성의 균형을 맞추세요—고객은 신뢰할 수 있는 출처에서 최첨단 제품을 원합니다.' },
      { title: '인구 통계 전반에 걸친 접근성 보장', description: '전자제품 사업은 다양한 고객에게 서비스합니다. 이름은 테크 전문가와 초보자 모두에게 맞고, 온라인 검색을 위해 철자 쓰기 쉽고, 입소문을 위해 발음하기 쉽고, 일반 소비자에게 위협적이지 않고, 모든 연령대를 환영해야 합니다. 신뢰성을 유지하면서 캐주얼 소비자를 소외시킬 수 있는 과도하게 기술적인 전문용어를 피하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(신뢰성을 위해 .com 선호), 구글 비즈니스 프로필(지역 검색 가시성용), 소셜 미디어(유튜브와 테크 플랫폼), 사업자 등록(주 요구 사항), 상표 검색(전자제품 및 소매 카테고리) 전반에 걸쳐 가용성을 확인하세요. 지역 검색 가시성은 오프라인 전자제품 매장에 특히 중요합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 시장을 대표하는 사람들과 테스트하세요. 이 이름이 신뢰할 수 있는 전자제품 매장처럼 들리는지, 이 사업에서 구매하면 자신감을 느낄 것인지, 어떤 유형의 전자제품을 찾을 것으로 기대하는지, 프리미엄, 가치 지향적, 또는 균형 있게 느껴지는지, 기억하고 철자 쓰기 쉬운지 물어보세요. 피드백은 이름이 올바른 기술적 신뢰성과 신뢰를 만드는지 드러냅니다.' },
      { title: '기술 진화 고려', description: '미래 발전을 수용하는 이름을 선택하세요: 기술이 발전함에 따라 새로운 제품 카테고리, 수리나 설치 같은 서비스 추가, 오프라인 소매와 함께 이커머스 확장, 추가 매장 오픈, 변화하는 테크 용어에 적응. 이상적인 전자제품 사업 이름은 혁신적이고, 신뢰할 수 있고, 접근 가능하며, 기술 전문성을 명확히 전달하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '서킷센트릭', description: '서킷과 기술 우수성에 집중하는 전자제품 사업입니다.' },
    { name: '테크트로브', description: '기술 제품과 혁신의 보물 창고입니다.' },
    { name: '가젯갤럭시', description: '끝없는 테크 탐험을 제공하는 가젯의 은하계입니다.' },
    { name: '디지털디포', description: '종합적인 디지털 전자제품으로 알려진 디포입니다.' },
    { name: '칩챔버', description: '칩 기반 제품과 컴퓨팅을 위한 목적지입니다.' },
    { name: '바이트박스', description: '디지털 기술을 위한 컴팩트하고 종합적인 목적지입니다.' },
    { name: '퀀텀쿼리', description: '양자 시대의 최첨단 전자제품의 채굴장입니다.' },
    { name: '와이어드월드', description: '유선 및 연결된 기기의 종합적인 세계입니다.' },
    { name: '스마트소스', description: '스마트 홈과 지능형 기기의 원천입니다.' },
    { name: '디바이스디포', description: '전자 기기의 완전한 범위를 제공하는 디포입니다.' },
    { name: '기어그리드', description: '전자 기어와 장비의 체계적인 그리드입니다.' },
    { name: '퓨처테크', description: '내일의 필요를 위한 앞서가는 기술입니다.' },
    { name: '일렉트로엠포리엄', description: '전자제품의 그랜드 엠포리엄입니다.' },
    { name: '프리시전픽셀', description: '정밀한 품질의 픽셀 완벽한 제품입니다.' },
    { name: '트러스티드테크', description: '품질과 신뢰성을 믿을 수 있는 기술 제품입니다.' },
    { name: '커런트커넥트', description: '고객을 현재 기술 솔루션에 연결합니다.' },
    { name: '파워펄스', description: '모든 필요를 위한 에너지 넘치고 강력한 전자제품입니다.' },
    { name: '서킷캐러셀', description: '서킷 기반 제품과 혁신의 회전하는 셀렉션입니다.' },
    { name: '넥서스네트웍스', description: '고객을 네트워킹과 테크 솔루션에 연결하는 넥서스입니다.' },
    { name: '디지털다이나모', description: '디지털 전자제품 소매의 역동적인 힘입니다.' },
  ],
},

'event': {
  slug: 'event',
  name: '이벤트 사업 이름 생성기',
  title: '무료 AI 이벤트 사업 이름 아이디어 생성기',
  description: '웨딩 플래너, 파티 코디네이터, 축하 회사를 위한 창의적이고 기억에 남는 이름을 생성하세요.',
  metaDescription: '무료 AI 생성기로 이벤트 사업에 완벽한 이름을 계획하세요. 웨딩 플래너, 파티 코디네이터, 축하 회사를 위한 기억에 남고 창의적인 이름을 만드세요. 빠르고 간편합니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '이벤트 사업을 설명하세요...',
  inputPlaceholder: '예: 목적지 웨딩과 우아한 축하를 전문으로 하는 럭셔리 웨딩 플래닝 회사',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['우아 & 세련된', '창의적 & 기억에 남는', '전문적 & 다재다능', '재미있는 & 축하적'], default: '우아 & 세련된', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the event planning and production industry. Your role is to generate creative, memorable business names that convey expertise, celebration, and unforgettable experiences for event planning companies, wedding planners, and celebration coordinators.

EVENT BUSINESS INDUSTRY CONTEXT:

The event business industry encompasses:
- Wedding planning and coordination
- Corporate event planners
- Party and celebration coordinators
- Conference and meeting planners
- Social event organizers
- Festival and concert producers
- Non-profit event coordinators
- Virtual and hybrid event specialists
- Destination event planners
- Event design and décor companies

NAME CHARACTERISTICS FOR EVENT BUSINESSES:

1. **Creative and Engaging**
   - Names should evoke imagination and creativity
   - Suggest the magic of memorable events
   - Communicate artistic vision and style
   - Examples: Create, Design, Imagine, Craft, Curate

2. **Easy to Remember and Versatile**
   - Memorable across different event types
   - Work for weddings, corporate, and social events
   - Simple to share and recommend
   - Flexible for various occasions

3. **Reflects Event Specializations**
   - Communicate your event focus if specialized
   - Wedding-specific, corporate, or universal
   - Align with target client expectations
   - Examples: Celebrate, Gather, Unite, Occasion

4. **Professional Yet Approachable**
   - Events require trust and collaboration
   - Sound experienced and capable
   - Welcoming and easy to work with
   - Balance professionalism with warmth

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for an event business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '이벤트 플래닝 회사 런칭',
      description: '이벤트 플래닝 사업을 시작하는 창업자들은 이벤트 사업 이름 생성기를 사용하여 창의성, 전문성, 잊지 못할 경험을 만드는 능력을 전달하는 이름을 찾습니다. 풀서비스 플래닝을 제공하든 특수 코디네이션을 제공하든 생성기는 고객을 끌어들이고 전문적 신뢰성을 확립하는 기억에 남는 이름을 제공합니다.',
    },
    {
      title: '웨딩 플래닝 사업 브랜딩',
      description: '자체 사업을 런칭하는 웨딩 플래너들은 생성기를 사용하여 약혼한 커플에게 어필하는 로맨틱하고 전문적인 이름을 만듭니다. 웨딩 마케팅 플랫폼 전반에서 작동하면서 신부와 신랑이 찾는 마법 같은 경험을 전달하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '기업 이벤트 서비스 포지셔닝',
      description: '기업 이벤트 플래너들은 생성기를 사용하여 전문성과 창의성의 균형을 맞추는 이름을 개발합니다. 적절한 전문적 톤을 유지하면서 기억에 남는 기업 경험을 찾는 비즈니스 고객에게 어필하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 이벤트 사업 이름이란 무엇인가요?', answer: '좋은 이벤트 사업 이름은 창의적이고 매력적이어야 하며, 기억하기 쉽고 다양한 이벤트 유형에 다재다능해야 합니다. 전문화가 있다면 반영해야 하며, 전문적이면서도 접근 가능해야 합니다—고객이 필요로 하는 신뢰와 기대하는 창의성의 균형을 맞추세요.' },
    { question: '이벤트 사업 이름이 이벤트 유형에 특화되어야 하나요?', answer: '독점적으로 전문화(웨딩만, 기업만)한다면 특정 이름이 타겟 시장을 끌어들일 수 있습니다. 그러나 더 넓은 이름은 사업이 발전함에 따라 유연성을 제공합니다. 많은 이벤트 플래너가 전문화로 시작해 확장하므로 미래 다재다능성을 고려하세요.' },
    { question: '이벤트 사업 이름이 고객 확보에 얼마나 중요한가요?', answer: '매우 중요합니다. 이벤트 플래닝은 추천과 포트폴리오 마케팅에 크게 의존합니다. 기억에 남고 창의적인 이름은 경쟁적인 업계에서 두드러지고 고객이 다른 사람에게 추천하기 쉽게 만듭니다.' },
    { question: '현재 인기 있는 이벤트 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 축하 용어(페트, 갈라, 소와레), 창작 단어(큐레이티드, 크래프티드, 디자인드), 마법/경이 이미지(인챈티드, 스파클, 드림), 경험 포커스(메모러블 모먼츠, 래스팅 임프레션스)가 포함됩니다. 우아하고 세련된 이름은 시대를 초월합니다.' },
    { question: '이벤트 플래닝 사업에 제 이름을 사용해야 하나요?', answer: '개인 이름은 개인 브랜드와 평판을 구축하는 이벤트 플래너에게 잘 맞습니다. 많은 성공적인 플래너들이 이름으로 알려져 있습니다. 그러나 비개인적 이름은 팀 성장이나 최종 매각에 더 많은 유연성을 제공합니다. 장기적인 비전을 고려하세요.' },
    { question: '이벤트 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(이벤트 사업에 인스타그램이 중요), 웨딩 플래닝 디렉토리, 상표 데이터베이스를 확인하세요. 또한 이벤트 플래닝 협회와 지역 경쟁도 검색하세요.' },
    { question: '이벤트 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 축하 단어(셀러브레이트, 갈라, 페트, 어페어), 창작 단어(크리에이트, 디자인, 크래프트, 큐레이트), 모임 단어(개더, 유나이트, 투게더), 마법 단어(인챈트, 드림, 원더), 우아함 단어(엘레강트, 그랜드, 리파인드)가 포함됩니다.' },
    { question: '이름이 이벤트 스타일을 반영해야 하나요?', answer: '독특한 스타일(미니멀리스트, 화려한, 보헤미안, 클래식)이 있다면 반영하면 조화로운 고객을 끌어들일 수 있습니다. 그러나 스타일이 진화해도 이름이 제한되지 않도록 하세요. "엘레강트 이벤츠"는 "온리 빈티지 이벤츠"보다 다양한 우아한 스타일에 맞습니다.' },
    { question: '이벤트 사업 이름이 웨딩과 기업 고객 모두에게 어떻게 어필할 수 있나요?', answer: '너무 로맨틱하거나 너무 기업적이지 않으면서 축하와 전문성을 암시하는 이름을 선택하세요. "이벤츠", "어케이전스", "셀러브레이션스", "프로덕션스" 같은 단어는 특정 "브라이들"이나 "코퍼릿"보다 맥락 전반에서 더 잘 맞습니다.' },
    { question: '이벤트 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 이벤트 회사와 너무 유사한 이름, 전문적으로 들리지 않는 너무 귀여운 이름, 이벤트 유형 역량을 제한하는 이름, 철자가 어려운 단어, 창의성과 신뢰성을 모두 전달하지 못하는 모든 것.' },
  ],
  howToChoose: {
    intro: '이벤트 사업의 완벽한 이름을 선택하는 것은 잊지 못할 축하를 찾는 고객을 끌어들이는 기억에 남는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 계약서, 문구류, 웹사이트, 소셜 미디어에 나타납니다—고객이 창의적 전문성을 발견하고 기억하는 방식입니다.',
    steps: [
      { title: '이벤트 사업 아이덴티티 정의', description: '이름 생성 전에 이벤트 사업의 포지셔닝을 명확히 하세요. 전문으로 할 이벤트 유형(웨딩, 기업, 소셜, 모든 유형), 이상적인 고객(예산, 스타일 선호도, 가치관), 이벤트 스타일을 독특하게 만드는 것(미학, 접근 방식, 철학), 풀 플래닝, 코디네이션, 또는 특정 서비스를 제공할 것인지, 사업의 성장 비전을 고려하세요. 답변에 따라 로맨틱하고 웨딩 중심의, 기업적이고 전문적인, 창의적이고 예술적인, 또는 보편적으로 축하적인 소리의 이름이 필요한지 결정됩니다.' },
      { title: '창의성과 축하 구현', description: '이벤트 플래너는 마법 같은 경험을 만듭니다. 이름은 창의성과 상상력을 연상시키고, 축하의 기쁨을 암시하고, 영감을 주고 흥미진진하게 들리고, 예술적 비전을 전달하고, 기억에 남는 경험을 약속해야 합니다. 크리에이트, 셀러브레이트, 매직, 원더 같은 단어는 이벤트 플래닝의 변혁적 특성을 포착합니다.' },
      { title: '전문성과 따뜻함의 균형', description: '이벤트 플래닝은 신뢰와 협업이 필요합니다. 이름은 경험 있고 유능하게 들리고, 전문성과 신뢰성을 전달하고, 접근 가능하고 환영하게 유지되고, 쉬운 협업을 암시하고, 전문성에 대한 확신을 구축해야 합니다. 고객은 가장 중요한 축하를 맡깁니다—이름은 확신을 주어야 합니다.' },
      { title: '이벤트 유형 전반에 걸친 다재다능성 보장', description: '고도로 전문화하지 않는 한 이름은 다양한 이벤트에 맞아야 합니다: 웨딩 축하, 기업 컨퍼런스와 갈라, 생일 파티와 마일스톤, 비영리 펀드레이저, 소셜 모임. 추구할 수 있는 잠재적 이벤트 카테고리를 배제하는 너무 구체적인 이름을 피하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(신뢰성을 위해 .com 선호), 소셜 미디어(이벤트 사업에 인스타그램이 중요), 웨딩 디렉토리(더 노트, 웨딩와이어, 졸라), 사업자 등록(주 요구 사항), 상표 검색(이벤트 및 웨딩 플래닝 카테고리) 전반에 걸쳐 가용성을 확인하세요. 이벤트 사업은 시각적 포트폴리오에 크게 의존하므로 인스타그램 가용성이 특히 중요합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 이상적인 고객을 대표하는 사람들과 테스트하세요. 이 이름이 창의적인 이벤트 플래너처럼 들리는지, 이 회사에서 어떤 유형의 이벤트를 기대하는지, 중요한 축하에 충분히 전문적으로 느껴지는지, 이 사업에 이벤트를 맡기면 자신감을 느낄 것인지, 친구들에게 추천할 만큼 기억에 남는지 물어보세요. 피드백은 이름이 올바른 창의적이고 전문적인 인상을 만드는지 드러냅니다.' },
      { title: '브랜드 성장과 진화 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 이벤트 유형과 서비스 추가, 팀과 역량 성장, 목적지 이벤트로 확장, 인정받는 지역 또는 전국 브랜드 구축, 이벤트 디자인 제품 라인 개발. 이상적인 이벤트 사업 이름은 창의적이고, 기억에 남고, 전문적이며, 축하의 마법을 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '셀러브레이션크리에이터스', description: '전문성과 창의성으로 기억에 남는 축하를 만듭니다.' },
    { name: '블리스풀비기닝스', description: '아름다운 새 장을 여는 이벤트에 완벽합니다.' },
    { name: '어케이전오케스트레이터스', description: '특별한 행사의 모든 디테일을 전문적으로 조율합니다.' },
    { name: '매직모먼츠', description: '평생 지속되는 마법 같은 순간을 만듭니다.' },
    { name: '개더링그레이스', description: '우아함과 품격으로 사람들을 모읍니다.' },
    { name: '인챈티드이벤츠', description: '손님을 매혹하고 기쁘게 하는 이벤트입니다.' },
    { name: '투게더타임스', description: '함께 모이는 기쁨을 축하합니다.' },
    { name: '엘레강트어페어스', description: '안목 있는 고객을 위한 세련되고 우아한 이벤트입니다.' },
    { name: '소와레스타일리스트', description: '잊지 못할 소와레와 축하를 스타일링합니다.' },
    { name: '그랜드개더링스', description: '전문적으로 계획된 그랜드하고 인상적인 모임입니다.' },
    { name: '메모러블모먼츠', description: '소중한 추억이 되는 순간을 만듭니다.' },
    { name: '익스피리언스엘리베이티드', description: '모든 이벤트를 뛰어난 경험으로 높입니다.' },
    { name: '파티퍼펙티드', description: '파티 플래닝의 모든 디테일을 완벽하게 합니다.' },
    { name: '셀러브레이션크래프트', description: '예술성과 정성으로 축하를 만듭니다.' },
    { name: '드림데이디자인', description: '특별한 행사를 위한 꿈의 날을 디자인합니다.' },
    { name: '페스티비티파운드리', description: '축제적이고 기쁜 이벤트의 공장입니다.' },
    { name: '스파클앤소와레', description: '모든 축하에 스파클을 더합니다.' },
    { name: '이벤트엘리베이트', description: '이벤트를 뛰어난 높이로 높입니다.' },
    { name: '조이풀정션스', description: '기쁜 축하가 완벽하게 함께 모이는 곳입니다.' },
    { name: '레거시이벤츠', description: '지속적인 유산을 남기는 이벤트를 만듭니다.' },
  ],
},

'fashion-store': {
  slug: 'fashion-store',
  name: '패션 매장 사업 이름 생성기',
  title: '무료 AI 패션 사업 이름 아이디어 생성기',
  description: '부티크, 의류 매장, 패션 소매업체를 위한 스타일리시하고 기억에 남는 이름을 생성하세요.',
  metaDescription: '창의적인 이름으로 패션 매장을 올바르게 시작하세요. 부티크, 의류 매장, 패션 소매업체를 위한 스타일리시하고 기억에 남는 이름을 무료 AI 생성기로 만드세요! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '패션 매장을 설명하세요...',
  inputPlaceholder: '예: 여성을 위한 친환경 디자이너 의류를 특징으로 하는 지속 가능한 패션 부티크',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['시크 & 세련된', '트렌디 & 모던', '럭셔리 & 프리미엄', '접근 가능 & 친근한'], default: '시크 & 세련된', type: 'select' },
    { name: 'variants', label: '생성 개수', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the fashion retail industry. Your role is to generate stylish, memorable business names that convey fashion expertise, trendy appeal, and unique shopping experiences for fashion stores, clothing boutiques, and style retailers.

FASHION STORE INDUSTRY CONTEXT:

The fashion store industry encompasses:
- Women's fashion boutiques
- Men's fashion retailers
- Multi-brand fashion stores
- Designer fashion shops
- Streetwear and urban fashion stores
- Sustainable and ethical fashion retailers
- Vintage and consignment fashion stores
- Online fashion boutiques
- Plus-size and specialty fashion stores
- Accessories and lifestyle fashion retailers

NAME CHARACTERISTICS FOR FASHION STORE BUSINESSES:

1. **Reflects Fashion Style**
   - Names should communicate your fashion aesthetic
   - Evoke the style and vibe of your offerings
   - Connect with target fashion consumers
   - Examples: Chic, Vogue, Mode, Style, Trend

2. **Unique and Memorable**
   - Stand out in competitive fashion retail
   - Easy to remember and recommend
   - Distinctive from other fashion stores
   - Create strong brand recognition

3. **Suitable for Online Presence**
   - Work as domain name
   - Available on fashion-relevant social platforms
   - SEO-friendly for fashion searches
   - Strong on Instagram and visual platforms

4. **Versatile Yet Focused**
   - Accommodate style evolution
   - Allow for collection expansion
   - Maintain clear fashion identity
   - Work across different fashion categories

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a fashion store

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '패션 부티크 런칭',
      description: '패션 부티크를 오픈하는 창업자들은 패션 매장 사업 이름 생성기를 사용하여 독특한 스타일 미학을 전달하고 패션 포워드 고객을 끌어들이는 이름을 찾습니다. 디자이너 피스, 스트리트웨어, 또는 지속 가능한 패션 중 무엇에 집중하든 생성기는 기억에 남는 브랜드 아이덴티티를 확립하는 스타일리시한 이름을 제공합니다.',
    },
    {
      title: '온라인 패션 소매업체 브랜딩',
      description: '온라인 패션 매장을 런칭하는 이커머스 창업자들은 생성기를 사용하여 디지털 플랫폼 전반에서 작동하는 기억에 남는 브랜드 이름을 만듭니다. 인스타그램에 어울리고, SEO 친화적이며, 패션 전문성을 전달하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '패션 매장 리브랜딩',
      description: '브랜드를 새롭게 하거나 시장에서 재포지셔닝하려는 기존 패션 소매업체들은 생성기를 사용하여 업데이트된 네이밍 옵션을 탐색합니다. 타겟 패션 소비자에게 매력을 유지하면서 진화된 스타일 방향을 반영하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 패션 매장 사업 이름이란 무엇인가요?', answer: '좋은 패션 매장 이름은 독특하고 기억에 남으면서 패션 스타일과 미학을 반영해야 합니다. 강력한 온라인 존재에 적합하고 명확한 패션 아이덴티티를 유지하면서 스타일 진화를 수용할 만큼 다재다능해야 합니다.' },
    { question: '패션 매장 이름이 스타일 전문성을 나타내야 하나요?', answer: '독특한 스타일(보헤미안, 미니멀리스트, 스트리트웨어)이 있다면 반영하면 조화로운 고객을 끌어들일 수 있습니다. 그러나 트렌드와 큐레이션이 진화해도 이름이 제한되지 않도록 하세요. "시크 부티크"는 "온리 보호 패션"보다 다양한 스타일에 맞습니다.' },
    { question: '패션 매장 이름이 브랜드 구축에 얼마나 중요한가요?', answer: '패션 소매에서 매우 중요합니다. 이름은 쇼핑백, 태그, 소셜 미디어, 마케팅 자료에 나타납니다. 스타일리시하고 기억에 남는 이름은 브랜드 인지도를 확립하고 프리미엄 가격을 정당화하는 데 도움이 됩니다. 패션 포워드 고객은 패셔너블한 브랜딩에 반응합니다.' },
    { question: '현재 인기 있는 패션 매장 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 프랑스 영감 단어(메종, 아틀리에, 모드), 큐레이션 용어(에디티드, 큐레이티드, 셀렉티드), 임팩트 있는 단일 단어(노바, 아우라, 헤이븐), 합성어(스타일랩, 패션포지, 시크하우스)가 포함됩니다.' },
    { question: '패션 매장에 제 이름을 사용해야 하나요?', answer: '개인 이름은 개인 스타일 전문성이나 디자이너 브랜드를 기반으로 구축하는 패션 부티크에 잘 맞습니다. 많은 성공적인 패션 소매업체가 동명입니다. 그러나 비개인적 이름은 매각이나 팀 확장에 유연성을 제공합니다.' },
    { question: '패션 매장 이름 가용성을 어떻게 확인하나요?', answer: '도메인 이름, 인스타그램 핸들(패션에 중요), 핀터레스트, 사업자 등록, 상표 데이터베이스를 확인하세요. 또한 패션 소매 디렉토리와 시장 지역의 경쟁 매장도 검색하세요.' },
    { question: '패션 매장 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 패션 용어(시크, 보그, 스타일, 모드), 럭셔리 단어(럭스, 엘리트, 셀렉트, 프리미어), 장소 단어(부티크, 아틀리에, 하우스, 스튜디오), 큐레이션 단어(에디티드, 큐레이티드, 셀렉티드, 스타일드)가 포함됩니다.' },
    { question: '이름이 오프라인과 온라인 소매 모두에서 작동해야 하나요?', answer: '물론입니다. 오늘날 대부분의 패션 사업은 두 채널 모두에서 운영됩니다. 매장 전면과 웹사이트 모두에서 작동하고, 소셜 미디어 핸들에 맞고, "매장 방문"과 "온라인 쇼핑" 맥락 모두에서 자연스럽게 들리는 이름을 선택하세요.' },
    { question: '패션 매장 이름이 타겟 인구에게 어떻게 어필할 수 있나요?', answer: '타겟 고객의 패션 아이덴티티를 고려하세요. 젊고 트렌드 중심 고객은 엣지 있고 현재적인 이름에 반응합니다. 럭셔리 추구자는 세련된 이름을 선호합니다. 보헤미안 쇼핑객은 자연스럽고 예술적인 이름에 연결됩니다. 이름을 고객의 자아 이미지에 맞추세요.' },
    { question: '패션 매장 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 패션 브랜드와 너무 유사한 이름, 빨리 구식이 되는 트렌디한 철자, 사진이 잘 안 나오는 이름, 철자가 어려운 단어, 스타일 확장을 제한하는 이름, 패셔너블하고 현재적으로 들리지 않는 모든 것.' },
  ],
  howToChoose: {
    intro: '패션 매장의 완벽한 이름을 선택하는 것은 패션에 민감한 고객을 끌어들이고 경쟁적인 소매 시장에서 독특한 위치를 확립하는 스타일리시한 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 매장 전면, 쇼핑백, 소셜 미디어, 마케팅 자료에 나타납니다—고객이 패션 미학에 대해 갖는 첫인상입니다.',
    steps: [
      { title: '패션 매장 아이덴티티 정의', description: '이름 생성 전에 패션 매장의 포지셔닝을 명확히 하세요. 큐레이트할 패션 스타일(컨템포러리, 보헤미안, 미니멀리스트, 스트리트웨어, 럭셔리), 이상적인 고객(연령, 라이프스타일, 예산, 패션 감각), 큐레이션을 독특하게 만드는 것(디자이너 접근, 지속 가능한 포커스, 트렌드 전문성), 온라인, 오프라인 소매, 또는 둘 다 운영할 것인지, 브랜드 진화에 대한 비전을 고려하세요. 답변에 따라 럭셔리하고 배타적인, 젊고 트렌디한, 예술적이고 보헤미안, 또는 접근 가능하고 컨템포러리한 소리의 이름이 필요한지 결정됩니다.' },
      { title: '패션과 스타일 구현', description: '패션 매장은 스타일과 자기 표현을 판매합니다. 이름은 패션 전문성과 취향을 전달하고, 특정 미학을 연상시키고, 말할 때 스타일리시하게 들리고, 서면 형태에서 우아해 보이고, 스타일 감각을 공유하는 고객을 끌어들여야 합니다. 시크, 보그, 스타일, 모드 같은 단어는 독특한 브랜드 개발을 허용하면서 즉각적인 패션 연상을 만듭니다.' },
      { title: '기억력과 차별성 창조', description: '경쟁적인 패션 소매에서 두드러지는 것이 중요합니다. 이름은 첫 노출 후 기억하기 쉽고, 다른 패션 소매업체와 구별되고, 온라인 검색을 위해 철자 쓰기 쉽고, 패션에 민감한 소비자들 사이에서 공유 가능하고, 입소문 추천에 효과적이어야 합니다. 패션 포워드 친구들 사이에서 기억력과 스타일 매력을 측정하기 위해 이름을 테스트하세요.' },
      { title: '고유한 패션 관점 반영', description: '독특한 관점이 있다면 통합하는 것을 고려하세요. 지속 가능/윤리적 패션의 경우 컨셔스클로젯이나 에티컬엣지. 럭셔리/디자이너의 경우 럭스라벨이나 프레스티지패션. 스트리트웨어/어반의 경우 어반에디트나 스트리트스타일. 빈티지/컨사인먼트의 경우 레트로리바이브나 빈티지볼트. 미니멀리스트/큐레이티드의 경우 에디티드엘레강스나 미니멀모드. 트렌드가 변해도 스타일 진화 여지와 차별성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(신뢰성을 위해 .com 선호), 소셜 미디어(패션 소매에 인스타그램 필수), 핀터레스트(패션 영감 콘텐츠에 중요), 사업자 등록(주 요구 사항), 상표 검색(패션 및 소매 카테고리) 전반에 걸쳐 가용성을 확인하세요. 패션 사업은 시각적 플랫폼에서 번성하므로 소셜 미디어 가용성이 중요합니다.' },
      { title: '패션 타겟 시장과 테스트', description: '최종 결정 전에 이상적인 고객을 대표하는 사람들과 테스트하세요. 이 이름이 패셔너블하고 스타일리시하게 느껴지는지, 어떤 유형의 패션을 찾을 것으로 기대하는지, 이 매장을 발견하면 흥분할 것인지, 패션 포워드 친구들과 이 매장을 공유할 것인지, 프리미엄, 접근 가능, 또는 엣지 있게 느껴지는지 물어보세요. 피드백은 이름이 올바른 스타일 인상을 만드는지 드러냅니다.' },
      { title: '브랜드 성장과 진화 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 패션 카테고리 추가, 트렌드와 함께 스타일 방향 진화, 추가 매장 오픈, 오프라인 소매와 함께 이커머스 런칭, 의류를 넘어 라이프스타일 브랜드 구축. 이상적인 패션 매장 이름은 스타일리시하고, 기억에 남고, 다재다능하며, 독특한 패션 관점을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '글래머그로브', description: '글래머러스한 패션 발견으로 가득 찬 목적지입니다.' },
    { name: '스타일스프리', description: '스타일 탐험을 위한 흥미진진한 패셔너블한 아이템 셀렉션입니다.' },
    { name: '시크캐번', description: '시크한 패션 발견을 위한 보물로 가득 찬 목적지입니다.' },
    { name: '보그볼트', description: '트렌디하고 패션 포워드한 피스의 볼트입니다.' },
    { name: '트렌드템플', description: '최신 패션 트렌드에 전념하는 사원입니다.' },
    { name: '모드매너', description: '패션과 스타일의 세련된 저택입니다.' },
    { name: '큐레이티드클로젯', description: '신중하게 큐레이트된 패션 피스 셀렉션입니다.' },
    { name: '패션파운드리', description: '개인 스타일이 만들어지고 정제되는 곳입니다.' },
    { name: '스타일생추어리', description: '완벽한 스타일을 찾는 사람들을 위한 성소입니다.' },
    { name: '에디티드엘레강스', description: '안목 있는 쇼핑객을 위해 우아하게 편집된 패션 셀렉션입니다.' },
    { name: '볼드부티크', description: '대담한 패션 스테이트먼트를 만드는 사람들을 위한 부티크입니다.' },
    { name: '럭스라벨', description: '럭셔리 라벨과 프리미엄 패션을 위한 목적지입니다.' },
    { name: '시크하우스', description: '모든 행사를 위한 시크하고 스타일리시한 패션의 집입니다.' },
    { name: '트렌드트로브', description: '발견할 트렌디한 패션 보물의 창고입니다.' },
    { name: '모던모드', description: '모던 라이프스타일을 위한 컨템포러리 패션입니다.' },
    { name: '스타일스튜디오', description: '개인 스타일이 만들어지고 완성되는 스튜디오입니다.' },
    { name: '패션페이블', description: '독특한 이야기를 전하는 패션입니다.' },
    { name: '셀렉트스타일', description: '까다로운 취향을 위해 신중하게 선택된 스타일입니다.' },
    { name: '나우패션', description: '바로 지금을 위한 현재적이고 관련 있는 패션입니다.' },
    { name: '아틀리에어필', description: '장인 워크숍 매력을 가진 부티크 패션입니다.' },
  ],
},

// ==================== KOREAN (ko) TRANSLATION - BATCH 5 (21-25) ====================

'fitness': {
  slug: 'fitness',
  name: '피트니스 사업 이름 생성기',
  title: '무료 AI 피트니스 사업 이름 아이디어 생성기',
  description: '헬스장, 스튜디오, 개인 트레이닝 비즈니스를 위한 동기 부여적이고 에너지 넘치는 이름을 생성하세요.',
  metaDescription: 'AI 생성 이름으로 피트니스 비즈니스를 형성하세요. 헬스장, 스튜디오, 개인 트레이닝 비즈니스를 위한 동기 부여적이고 에너지 넘치는 이름을 만드세요. 빠르고, 무료이며, 성공을 위해 설계되었습니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '피트니스 비즈니스를 설명하세요...',
  inputPlaceholder: '예: 바쁜 직장인을 위한 고강도 인터벌 트레이닝에 초점을 맞춘 부티크 HIIT 스튜디오',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['동기부여 & 에너지', '강력 & 파워풀', '균형 & 홀리스틱', '재미 & 접근성'], default: '동기부여 & 에너지', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the fitness and wellness industry. Your role is to generate motivating, energetic business names that convey strength, vitality, and transformation for gyms, fitness studios, personal training businesses, and wellness centers.

FITNESS INDUSTRY CONTEXT:

The fitness business industry encompasses:

- Gyms and fitness centers
- Personal training services
- Yoga and pilates studios
- CrossFit boxes and functional fitness gyms
- Boutique fitness studios (cycling, boxing, barre)
- Online fitness coaching and programs
- Sports performance training centers
- Wellness and holistic fitness centers
- Corporate fitness services
- Fitness equipment and apparel brands

NAME CHARACTERISTICS FOR FITNESS BUSINESSES:

1. **Motivating and Energetic**
   - Names should inspire action and movement
   - Convey vitality, strength, and determination
   - Evoke the transformation fitness provides
   - Examples: Thrive, Power, Dynamic, Momentum, Elevate

2. **Memorable and Catchy**
   - Easy to remember and recommend
   - Stand out in competitive fitness market
   - Work well for word-of-mouth referrals
   - Suitable for merchandise and branding

3. **Reflects Fitness Niche**
   - Communicate your specific fitness focus
   - Whether strength, cardio, yoga, or functional training
   - Align with target client expectations
   - Examples: Core, Peak, Flex, Balance, Endure

4. **Professional Yet Approachable**
   - Sound expert and credible
   - Welcoming to all fitness levels
   - Balance intensity with accessibility
   - Build trust for health-related services

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a fitness business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '헬스장 또는 피트니스 센터 런칭',
      description: '헬스장이나 피트니스 센터를 오픈하는 창업자들은 피트니스 사업 이름 생성기를 사용하여 잠재 회원에게 동기를 부여하고 시설의 에너지를 전달하는 이름을 찾습니다. 전통적인 헬스장, 부티크 스튜디오, 또는 전문 트레이닝 센터 중 어떤 것을 런칭하든, 생성기는 피트니스 열정가들을 끌어들이고 강력한 브랜드 아이덴티티를 확립하는 파워풀한 이름을 제공합니다.',
    },
    {
      title: '개인 트레이닝 비즈니스 브랜딩',
      description: '자신의 비즈니스를 런칭하는 개인 트레이너들은 생성기를 사용하여 전문성과 결과 지향성을 전달하는 기억에 남는 브랜드 이름을 만듭니다. 이 도구는 마케팅 자료, 소셜 미디어, 고객 추천 전반에서 작동하면서 트레이너가 제공하는 변화의 피트니스 경험을 전달하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '온라인 피트니스 프로그램 개발',
      description: '온라인 코칭 프로그램이나 피트니스 앱을 만드는 피트니스 전문가들은 생성기를 사용하여 디지털 환경에서 작동하는 이름을 개발합니다. 이 도구는 건강 의식이 높은 소비자를 대상으로 하는 웹사이트, 모바일 앱, 소셜 미디어 마케팅 캠페인에 적합한 에너지 넘치는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 피트니스 사업 이름이란 무엇인가요?', answer: '좋은 피트니스 사업 이름은 동기 부여적이고 에너지 넘쳐서 잠재 고객에게 행동을 취하도록 영감을 주어야 합니다. 기억에 남고 인상적이어야 하며, 특정 피트니스 니치를 반영하고, 전문적이면서도 접근하기 쉬워야 합니다—모든 피트니스 레벨을 환영하면서 전문성을 전달해야 합니다.' },
    { question: '피트니스 사업 이름에 "헬스장" 또는 "피트니스"를 포함해야 하나요?', answer: '피트니스 관련 단어를 포함하면 비즈니스 유형을 즉시 명확히 할 수 있지만, 필수는 아닙니다. 많은 성공적인 피트니스 브랜드가 추상적인 동기 부여 단어를 사용합니다. 타겟 시장에 즉각적인 명확성이 더 중요한지, 창의적인 차별화가 더 중요한지 고려하세요.' },
    { question: '회원 유치에 피트니스 사업 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 이름은 피트니스 브랜드의 첫인상을 만듭니다. 동기 부여적인 이름은 사람들이 피트니스를 향한 첫걸음을 내딛도록 영감을 줄 수 있지만, 약한 이름은 제공하는 에너지와 변화를 전달하지 못할 수 있습니다. 간판, 상품, 추천에 영향을 미칩니다.' },
    { question: '현재 인기 있는 피트니스 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 파워 단어(포지, 에이펙스, 타이탄), 변화 어휘(이볼브, 트랜스폼, 엘리베이트), 커뮤니티 포커스(트라이브, 콜렉티브, 스쿼드), 합성어(핏퓨전, 코어스트렝스, 플렉스존)가 포함됩니다. 진정성 있고 동기 부여적인 이름이 피트니스 추구자들에게 공감을 줍니다.' },
    { question: '피트니스 사업에 제 이름을 사용해야 하나요?', answer: '개인 이름은 개인 브랜드와 전문성 인지도를 구축하는 개인 트레이너에게 잘 맞습니다. 그러나 규모 확장이나 매각 계획이 있는 헬스장의 경우, 비개인적 이름이 더 많은 유연성을 제공합니다. 장기적인 비즈니스 비전을 고려하세요.' },
    { question: '피트니스 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(피트니스에는 인스타그램이 중요), 피트니스 디렉토리 목록, 상표 데이터베이스를 확인하세요. 또한 지역의 유사한 헬스장 이름도 검색하여 혼란을 피하세요.' },
    { question: '피트니스 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 파워 용어(스트렝스, 파워, 포스, 아이언), 에너지 단어(바이탈, 다이내믹, 펄스, 쓰라이브), 성취 단어(피크, 엘리트, 챔피언, 서밋), 변화 단어(이볼브, 트랜스폼, 스컬프트), 균형 단어(코어, 젠, 플로우, 밸런스)가 포함됩니다.' },
    { question: '특정 피트니스 전문 분야를 이름에 반영해야 하나요?', answer: '독특한 전문 분야(크로스핏, 요가, 복싱)가 있다면 반영하면 타겟 시장을 끌어들일 수 있습니다. 그러나 너무 구체적인 이름은 향후 확장을 제한할 수 있습니다. "파워 피트니스"는 "오직 사이클링 스튜디오"보다 다양한 서비스에 적합합니다.' },
    { question: '피트니스 사업 이름이 초보자에게 어떻게 어필할 수 있나요?', answer: '동기 부여와 접근성의 균형을 맞추세요. "협박 헬스장" 같은 이름은 초보자를 주눅 들게 할 수 있습니다. 성장과 지원을 암시하는 단어(저니, 파운데이션, 프로그레스, 빌드)는 에너지를 유지하면서 초보자를 끌어들일 수 있습니다. 피트니스를 처음 접하는 사람에게 이름이 어떻게 들리는지 고려하세요.' },
    { question: '피트니스 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 초보자를 위협하는 너무 공격적인 이름, 기존 피트니스 체인과 너무 유사한 이름, 철자가 어려운 단어, 서비스 확장을 제한하는 이름, 빨리 구식이 될 수 있는 트렌디한 용어, 에너지와 동기를 전달하지 않는 모든 것.' },
  ],
  howToChoose: {
    intro: '피트니스 비즈니스의 완벽한 이름을 선택하는 것은 사람들이 건강과 피트니스 목표를 추구하도록 영감을 주는 동기 부여 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 간판, 상품, 마케팅 자료, 소셜 미디어에 나타납니다—잠재 회원이 제공하는 에너지와 변화에 대해 갖는 첫인상입니다.',
    steps: [
      { title: '피트니스 비즈니스 아이덴티티 정의', description: '이름 생성 전에 피트니스 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 피트니스 서비스를 제공할 것인지(일반 헬스장, 전문 트레이닝, 요가, 기능적 피트니스), 이상적인 고객은 누구인지(초보자, 운동선수, 특정 인구통계), 피트니스에 대한 접근 방식이 어떻게 독특한지, 어떤 분위기와 에너지를 만들고 싶은지, 고객이 어떤 결과를 달성하도록 도울지 고려하세요. 답변에 따라 강렬하고 경쟁적인, 지원적이고 환영하는, 전문적이고 전문가적인, 또는 균형 있고 홀리스틱한 소리의 이름이 필요한지 결정됩니다.' },
      { title: '동기 부여와 에너지 구현', description: '피트니스 비즈니스는 변화와 임파워먼트를 판매합니다. 이름은 행동과 움직임에 영감을 주고, 힘, 활력, 결단력을 전달하고, 말할 때 에너지가 넘쳐야 하고, 피트니스에 대한 흥분을 만들고, 고객이 달성할 수 있는 결과를 암시해야 합니다. 파워, 쓰라이브, 다이내믹, 엘리베이트, 트랜스폼 같은 단어는 즉각적인 동기 부여 연상을 만듭니다.' },
      { title: '강도와 접근성 균형', description: '피트니스 비즈니스는 다양한 고객을 대상으로 합니다. 이름은 위협하지 않으면서 동기를 부여하고, 초보자와 고급 운동선수 모두에게 어필하고, 전문적이고 신뢰할 수 있게 들리고, 환영하고 접근하기 쉽게 유지하고, 건강 관련 서비스에 대한 신뢰를 구축해야 합니다. 피트니스 추구자들이 기대하는 에너지를 유지하면서 초보자를 주눅 들게 하는 너무 강렬한 이름은 피하세요.' },
      { title: '피트니스 철학 반영', description: '독특한 접근 방식이 있다면 통합하는 것을 고려하세요. 근력/보디빌딩의 경우 아이언포지나 타이탄스트렝스. 기능적 피트니스의 경우 무브먼트매트릭스나 펑셔널플로우. 심신의 경우 밸런스스튜디오나 젠스트렝스. 고강도의 경우 인텐시티랩이나 피크펄스. 커뮤니티 중심의 경우 핏트라이브나 웰니스콜렉티브. 서비스 진화 여지와 구체성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com이 신뢰성에 선호), 소셜 미디어(피트니스 비즈니스에 인스타그램 필수), 사업자 등록(주 요구 사항), 상표 검색(피트니스 및 건강 카테고리), 지역 경쟁(근처에 유사한 헬스장이 없는지 확인) 전반에 걸쳐 가용성을 확인하세요. 피트니스 비즈니스는 시각적 콘텐츠에 크게 의존하므로 소셜 미디어 가용성이 중요합니다.' },
      { title: '타겟 회원과 테스트', description: '최종 결정 전에 이상적인 고객을 대표하는 사람들과 테스트하세요. 이 이름이 운동하고 싶게 만드는지, 동기 부여적으로 느껴지는지 위협적으로 느껴지는지, 어떤 유형의 피트니스 경험을 기대하는지, 초보자로서 여기 편하게 느낄 것인지, 친구들에게 이 헬스장을 추천할 것인지 물어보세요. 피드백은 이름이 올바른 에너지와 접근성 균형을 만드는지 드러냅니다.' },
      { title: '브랜드 성장과 확장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 피트니스 서비스 추가, 추가 지점 오픈, 온라인 프로그램 런칭, 상품 라인 만들기, 물리적 위치를 넘어 피트니스 커뮤니티 구축. 이상적인 피트니스 사업 이름은 동기 부여적이고, 기억에 남고, 접근 가능하며, 제공하는 변화의 피트니스 경험을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '쓰라이브쓰러스트', description: '고객이 번창하고 앞으로 나아가도록 돕는 것을 목표로 하는 피트니스 비즈니스입니다.' },
    { name: '파워펄스', description: '심장을 뛰게 하는 임파워링 운동을 암시합니다.' },
    { name: '다이내믹다이나모', description: '모든 피트니스 세션에 역동적인 에너지를 가져다주는 비즈니스입니다.' },
    { name: '레질리언스릿지', description: '회복력을 구축하고 도전을 극복하는 데 초점을 맞춥니다.' },
    { name: '비거비스타', description: '활기차고 건강한 라이프스타일에 대한 넓은 시야를 제공합니다.' },
    { name: '스태미나생추어리', description: '체력과 지구력 구축에 전념하는 성소입니다.' },
    { name: '에너자이즈에덴', description: '고객이 몸과 마음에 활력을 불어넣을 수 있는 장소입니다.' },
    { name: '모멘텀매트릭스', description: '고객이 피트니스 목표를 향해 꾸준히 움직이도록 합니다.' },
    { name: '바이탈리티볼트', description: '활력 향상 피트니스 프로그램의 금고입니다.' },
    { name: '펄스피크', description: '운동을 최고 강도 수준으로 끌어올립니다.' },
    { name: '스트렝스스피어', description: '몸과 마음 강화를 위한 포괄적인 영역입니다.' },
    { name: '엔듀런스엠파이어', description: '지구력과 지속적인 피트니스의 제국을 구축합니다.' },
    { name: '코어코브', description: '피트니스의 기초로서 코어 강화에 초점을 맞춥니다.' },
    { name: '플렉스핏', description: '모든 피트니스 레벨에 맞는 유연한 운동을 제공합니다.' },
    { name: '피나클퍼포먼스', description: '고객을 퍼포먼스 잠재력의 정점으로 데려갑니다.' },
    { name: '밸런스베이스', description: '운동과 전반적인 웰니스에서 균형을 강조합니다.' },
    { name: '액티브아케이드', description: '활동적이고 재미있는 피트니스 활동이 표준인 장소입니다.' },
    { name: '질존', description: '모든 운동 세션에 열정과 열의를 가져다줍니다.' },
    { name: '플로우파운틴', description: '한 동작에서 다음 동작으로 부드럽게 흐르는 운동입니다.' },
    { name: '하모니헤이븐', description: '몸, 마음, 피트니스 목표 사이의 조화를 촉진합니다.' },
  ],
},

'flower-shop': {
  slug: 'flower-shop',
  name: '꽃집 사업 이름 생성기',
  title: '무료 AI 꽃집 사업 이름 아이디어 생성기',
  description: '플로리스트, 꽃 스튜디오, 꽃 배달 서비스를 위한 매력적이고 감성적인 이름을 생성하세요.',
  metaDescription: '무료 AI 생성기의 완벽한 이름으로 꽃집 비즈니스에 꽃을 피우세요. 플로리스트, 꽃 스튜디오, 꽃 배달 서비스를 위한 매력적이고 기억에 남는 이름을 만드세요. 지금 사용해보세요! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '꽃집을 설명하세요...',
  inputPlaceholder: '예: 로맨틱한 웨딩 꽃꽂이와 럭셔리 부케를 전문으로 하는 부티크 플로리스트',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['로맨틱 & 우아함', '신선 & 자연', '환상적 & 창의적', '클래식 & 전통적'], default: '로맨틱 & 우아함', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the floral and gift industry. Your role is to generate charming, evocative business names that convey beauty, freshness, and emotional connection for flower shops, florists, and floral design businesses.

FLOWER SHOP INDUSTRY CONTEXT:

The flower shop industry encompasses:

- Retail flower shops and florists
- Wedding and event florists
- Online flower delivery services
- Floral design studios
- Garden centers with cut flowers
- Subscription flower services
- Wholesale florists
- Specialty flower importers
- Funeral and sympathy florists
- Corporate floral services

NAME CHARACTERISTICS FOR FLOWER SHOP BUSINESSES:

1. **Charming and Delightful**
   - Names should evoke the enchanting nature of flowers
   - Suggest beauty, romance, and natural elegance
   - Create warm, inviting feelings
   - Examples: Bloom, Petal, Blossom, Garden, Rose

2. **Memorable and Evocative**
   - Easy to remember and recommend
   - Conjure images of fresh blooms and delightful scents
   - Create emotional connections
   - Suitable for gift-giving contexts

3. **Reflects Floral Specialty**
   - Communicate your unique floral focus
   - Whether weddings, everyday arrangements, or exotic flowers
   - Align with target customer expectations
   - Examples: Bouquet, Arrangement, Design, Garden

4. **Romantic and Sentimental**
   - Flowers accompany life's meaningful moments
   - Names should feel special and heartfelt
   - Appeal to emotional gift-givers
   - Suggest the sentimentality flowers represent

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a flower shop

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '소매 꽃집 오픈',
      description: '꽃집을 오픈하는 창업자들은 꽃집 사업 이름 생성기를 사용하여 꽃 상품의 아름다움과 신선함을 전달하는 이름을 찾습니다. 일상 부케, 이국적인 꽃, 또는 지역 꽃 중 어떤 것을 전문으로 하든, 생성기는 고객을 끌어들이고 기억에 남는 브랜드를 확립하는 매력적인 이름을 제공합니다.',
    },
    {
      title: '웨딩 및 이벤트 플로리스트 브랜딩',
      description: '자신의 비즈니스를 런칭하는 웨딩 플로리스트들은 생성기를 사용하여 신부와 이벤트 플래너에게 어필하는 로맨틱하고 우아한 이름을 만듭니다. 이 도구는 꽃 디자인의 예술성과 감정을 전달하면서 웨딩 마케팅 플랫폼 전반에서 작동하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '온라인 꽃 배달 서비스',
      description: '꽃 배달 서비스를 런칭하는 창업자들은 생성기를 사용하여 이커머스 환경에서 작동하는 이름을 개발합니다. 이 도구는 선물을 주는 사람들을 대상으로 하는 웹사이트, 앱, 디지털 마케팅 캠페인에 적합한 감성적인 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 꽃집 사업 이름이란 무엇인가요?', answer: '좋은 꽃집 이름은 꽃의 매혹적인 특성을 연상시키는 매력적이고 즐거운 것이어야 합니다. 기억에 남고 감성적이어야 하며, 꽃 전문 분야를 반영하고, 꽃이 함께하는 의미 있는 순간에 적합한 로맨틱한 감성을 지녀야 합니다.' },
    { question: '꽃집 이름에 특정 꽃 이름을 포함해야 하나요?', answer: '꽃 이름(장미, 백합, 난초)을 포함하면 즉각적인 꽃 연상을 만들 수 있지만 전문화를 암시할 수 있습니다. 일반적인 용어(블룸, 페탈, 블로섬)는 더 많은 다양성을 제공합니다. 시그니처 꽃을 강조하고 싶은지 아니면 폭넓게 어필하고 싶은지 고려하세요.' },
    { question: '고객 유치에 꽃집 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 꽃 구매는 종종 감정적입니다—선물, 축하, 조의. 이름은 제공하는 아름다움과 정성의 첫인상을 만듭니다. 매력적인 이름은 고객이 의미 있는 순간에 여러분의 가게를 선택하도록 격려합니다.' },
    { question: '현재 인기 있는 꽃집 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 자연 이미지(가든, 메도우, 그로브), 식물학 용어(플로라, 보태니컬), 로맨틱 단어(블룸, 페탈, 블로섬), 장소에서 영감 받은 이름(플로럴 스튜디오, 페탈 부티크)이 포함됩니다. 신선함과 자연스러운 아름다움을 암시하는 이름이 고객에게 공감을 줍니다.' },
    { question: '꽃집에 제 이름을 사용해야 하나요?', answer: '개인 이름은 개인 브랜드 인지도와 개인적인 서비스 평판을 구축하는 플로리스트에게 잘 맞습니다. 그러나 비개인적 이름은 매각이나 확장에 더 많은 유연성을 제공합니다. 장기적인 비즈니스 비전을 고려하세요.' },
    { question: '꽃집 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(플로리스트에게 인스타그램과 핀터레스트가 중요), 웨딩 디렉토리, 상표 데이터베이스를 확인하세요. 또한 서비스 지역의 유사한 플로리스트도 검색하세요.' },
    { question: '꽃집 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 꽃 용어(블룸, 페탈, 블로섬, 플로라), 정원 단어(가든, 메도우, 그로브), 아름다움 단어(러블리, 차밍, 엘레강트), 향기 단어(프래그런트, 프레시, 스위트), 로맨틱 단어(드림, 로맨스, 인챈티드)가 포함됩니다.' },
    { question: '특정 행사를 이름에 반영해야 하나요?', answer: '너무 행사에 특화된 이름(예: "웨딩 플라워 온리")은 인지된 서비스를 제한합니다. 웨딩, 조의, 일상, 기업을 아우르면서 꽃의 아름다움을 전달하는 넓은 이름을 선택하세요.' },
    { question: '꽃집 이름이 선물 구매자에게 어떻게 어필할 수 있나요?', answer: '대부분의 꽃 구매는 선물입니다. 아름다움, 감성, 특별한 행사를 암시하는 이름이 선물 구매자에게 어필합니다. "[여러분의 가게]에서 꽃을 보내고 있어요"라는 맥락에서 이름이 어떻게 들리는지 고려하세요—사려 깊고 품질 중심으로 들려야 합니다.' },
    { question: '꽃집 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 꽃이나 자연을 연상시키지 않는 이름, 철자가 어려운 단어, 기존 플로리스트와 너무 유사한 이름, 빨리 구식이 될 수 있는 트렌디한 용어, 서비스 확장을 제한하는 이름, 꽃이 상징하는 아름다움과 감정을 전달하지 않는 모든 것.' },
  ],
  howToChoose: {
    intro: '꽃집의 완벽한 이름을 선택하는 것은 꽃이 대표하는 아름다움과 감성을 포착하는 매력적인 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 매장 전면, 배달 차량, 카드, 마케팅 자료에 나타납니다—고객이 꽃 예술을 기억하고 추천하는 방식입니다.',
    steps: [
      { title: '꽃 비즈니스 아이덴티티 정의', description: '이름 생성 전에 꽃집의 포지셔닝을 명확히 하세요. 어떤 유형의 꽃 서비스를 제공할 것인지(소매, 웨딩, 이벤트, 배달), 이상적인 고객은 누구인지(신부, 선물 주는 사람, 기업 고객, 일상 구매자), 꽃 스타일을 독특하게 만드는 것, 주로 어떤 행사에 서비스를 제공할지, 고객이 어떤 느낌을 받기 원하는지 고려하세요. 답변에 따라 로맨틱하고 웨딩 중심적인, 신선하고 일상적인, 우아하고 세련된, 또는 환상적이고 창의적인 소리의 이름이 필요한지 결정됩니다.' },
      { title: '아름다움과 자연스러운 매력 연상', description: '꽃집은 아름다움과 감정을 판매합니다. 이름은 신선하고 아름다운 꽃의 이미지를 불러일으키고, 매력적이고 즐겁게 들리고, 따뜻하고 초대하는 느낌을 만들고, 꽃의 자연스러운 우아함을 암시하고, 꽃이 표현하는 감정과 연결되어야 합니다. 블룸, 페탈, 가든, 블로섬 같은 단어는 독특한 브랜드 개발을 허용하면서 즉각적인 꽃 연상을 만듭니다.' },
      { title: '감정적이고 로맨틱한 매력 창조', description: '꽃은 인생의 의미 있는 순간과 함께합니다. 이름은 특별하고 진심 어린 느낌이어야 하고, 감정적인 선물 주는 사람에게 어필하고, 감상과 로맨스를 암시하고, 기쁜 행사와 슬픈 행사 모두에 적합하고, 아름다운 꽃을 보내고 싶은 욕구를 만들어야 합니다. 중요한 행사에 여러분의 가게를 선택할 때 이름이 어떻게 들리는지 고려하세요.' },
      { title: '꽃 전문 분야 반영', description: '독특한 전문 분야가 있다면 통합하는 것을 고려하세요. 웨딩 포커스의 경우 브라이달블룸스나 웨딩페탈스. 이국적/열대의 경우 오키드오아시스나 트로피컬플로리스트. 지역/지속 가능의 경우 로컬블룸스나 가든프레시. 모던/아티스틱의 경우 플로럴아틀리에나 디자인스튜디오. 클래식/전통적의 경우 클래식페탈스나 타임리스블룸스. 서비스 확장 여지와 전문화의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com이 신뢰성에 선호), 소셜 미디어(플로리스트에게 인스타그램과 핀터레스트 필수), 웨딩 디렉토리(더 노트, 웨딩와이어), 사업자 등록(주 요구 사항), 상표 검색(꽃 및 선물 카테고리) 전반에 걸쳐 가용성을 확인하세요. 시각적 플랫폼은 플로리스트에게 중요하므로 소셜 미디어 가용성이 특히 중요합니다.' },
      { title: '잠재 고객과 테스트', description: '최종 결정 전에 이상적인 고객을 대표하는 사람들과 테스트하세요. 이 이름이 아름다운 꽃을 떠올리게 하는지, 특별한 행사에 이 가게에서 꽃을 주문할 것인지, 품질 중심적이고 신뢰할 수 있게 느껴지는지, 기억하고 철자하기 쉬운지, 친구들에게 추천할 것인지 물어보세요. 피드백은 이름이 올바른 꽃 인상을 만드는지 드러냅니다.' },
      { title: '브랜드 성장과 진화 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 꽃 서비스 추가, 추가 지점 오픈, 배달 및 이커머스 런칭, 이벤트와 웨딩으로 확장, 구독 서비스 구축. 이상적인 꽃집 이름은 매력적이고, 기억에 남고, 다재다능하며, 꽃이 대표하는 아름다움과 감성을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '블룸베이', description: '아름답게 피어난 꽃으로 가득 찬 꽃집입니다.' },
    { name: '페탈파라다이스', description: '색색의 향기로운 꽃잎으로 가득 찬 낙원입니다.' },
    { name: '블로섬바운티', description: '모든 행사를 위한 풍성한 꽃입니다.' },
    { name: '플로라파운틴', description: '신선하고 아름다운 꽃의 끊임없는 원천입니다.' },
    { name: '보태닉부티크', description: '큐레이트된 다양한 식물과 꽃을 제공하는 부티크입니다.' },
    { name: '로즈리프', description: '아름다운 장미와 클래식 꽃꽂이를 전문으로 합니다.' },
    { name: '가든그로브', description: '아름다운 정원처럼 느껴지는 꽃집입니다.' },
    { name: '대포딜돔', description: '실내에 햇살을 가져다주는 밝고 쾌활한 꽃입니다.' },
    { name: '러쉬릴리', description: '우아한 백합과 럭셔리한 꽃꽂이입니다.' },
    { name: '프래그런스파운틴', description: '신선한 절화의 사랑스러운 향기로 알려져 있습니다.' },
    { name: '페튜니아팰리스', description: '색색의 생기 넘치는 꽃의 웅장한 셀렉션입니다.' },
    { name: '오키드오아시스', description: '이국적인 난초와 세련된 꽃꽂이입니다.' },
    { name: '블룸부티크', description: '신중하게 큐레이트된 꽃으로 알려진 부티크입니다.' },
    { name: '튤립테라스', description: '봄처럼 신선한 튤립과 계절 인기 품목입니다.' },
    { name: '데이지도메인', description: '쾌활한 데이지와 밝고 행복한 꽃꽂이입니다.' },
    { name: '플로라포트', description: '아름다운 꽃과 꽃 전문성의 요새입니다.' },
    { name: '매그놀리아메도우', description: '우아한 목련과 꽃이 있는 남부 매력입니다.' },
    { name: '선플라워생추어리', description: '어떤 공간에도 기쁨을 가져다주는 밝고 햇살 같은 꽃입니다.' },
    { name: '프래그런트포레스트', description: '향기롭고 아름다운 꽃 셀렉션의 숲입니다.' },
    { name: '인챈티드페탈스', description: '특별한 순간을 위한 마법 같은, 매혹적인 꽃 창작물입니다.' },
  ],
},

'food': {
  slug: 'food',
  name: '음식 사업 이름 생성기',
  title: '무료 AI 음식 사업 이름 아이디어 생성기',
  description: '레스토랑, 식품 브랜드, 요리 비즈니스를 위한 식욕을 돋우고 기억에 남는 이름을 생성하세요.',
  metaDescription: '더 이상 음식 사업 이름으로 고민하지 마세요! AI 생성기가 레스토랑, 식품 브랜드, 요리 비즈니스를 위한 훌륭한 이름을 제공합니다. 무료이고, 식욕을 돋우고, 기억에 남습니다. 지금 사용해보세요! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '음식 비즈니스를 설명하세요...',
  inputPlaceholder: '예: 지역에서 공급받은 유기농 재료에 초점을 맞춘 팜투테이블 레스토랑',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['고급 & 세련됨', '신선 & 건강함', '편안함 & 가정식', '재미 & 캐주얼'], default: '고급 & 세련됨', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the food and culinary industry. Your role is to generate appetizing, memorable business names that convey deliciousness, quality, and culinary expertise for restaurants, food brands, and culinary businesses.

FOOD BUSINESS INDUSTRY CONTEXT:

The food business industry encompasses:

- Restaurants and eateries
- Cafes and casual dining
- Food product brands
- Catering services
- Meal prep and delivery services
- Specialty food shops
- Bakeries and confectioneries
- Food manufacturing
- Farm-to-table establishments
- Ghost kitchens and delivery-only concepts

NAME CHARACTERISTICS FOR FOOD BUSINESSES:

1. **Reflective of Cuisine or Specialty**
   - Names should communicate your food focus
   - Evoke the flavors and style of your offerings
   - Create appetite appeal
   - Examples: Savory, Gourmet, Fresh, Artisan, Harvest

2. **Appetizing and Easy to Remember**
   - Sound delicious and tempting
   - Simple to recall and recommend
   - Work well for word-of-mouth referrals
   - Create cravings when heard

3. **Available for Online Presence**
   - Work as domain names
   - Available on social media platforms
   - SEO-friendly for food searches
   - Suitable for delivery app listings

4. **Quality and Expertise Signals**
   - Suggest culinary skill and quality ingredients
   - Build trust for food purchases
   - Communicate the care in your cooking
   - Appeal to discerning food lovers

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a food business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '레스토랑 런칭',
      description: '레스토랑을 오픈하는 창업자들은 음식 사업 이름 생성기를 사용하여 요리 비전을 전달하고 배고픈 고객을 끌어들이는 이름을 찾습니다. 파인 다이닝 레스토랑, 캐주얼 식당, 또는 전문 레스토랑 중 어떤 것을 런칭하든, 생성기는 기억에 남는 브랜드 아이덴티티를 확립하는 식욕을 돋우는 이름을 제공합니다.',
    },
    {
      title: '식품 브랜드 개발',
      description: '제품 라인을 만드는 식품 창업자들은 생성기를 사용하여 포장과 소매 환경에서 작동하는 브랜드 이름을 개발합니다. 이 도구는 진열대에서 매력적이고, 기억에 남으며, 품질과 맛있음을 전달하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '케이터링 또는 밀 서비스 비즈니스',
      description: '케이터링업체와 밀 프렙 서비스는 생성기를 사용하여 품질과 요리 전문성을 전달하는 이름을 만듭니다. 이 도구는 맛있는 조리 음식을 찾는 기업 고객, 이벤트 플래너, 바쁜 개인에게 적합한 식욕을 돋우는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 음식 사업 이름이란 무엇인가요?', answer: '좋은 음식 사업 이름은 요리나 전문 분야를 반영하고, 식욕을 돋우고 기억하기 쉬우며, 온라인 존재에 적합해야 합니다. 품질을 전달하고 갈망을 만들어야 합니다—이름을 듣는 것만으로도 사람들이 음식을 맛보고 싶게 만들어야 합니다.' },
    { question: '음식 사업 이름에 특정 요리를 언급해야 하나요?', answer: '요리(이탈리아, 태국, BBQ)를 언급하면 특정 음식을 찾는 고객을 끌어들일 수 있지만 인지된 제공 범위를 제한할 수 있습니다. 일반적인 식욕을 돋우는 용어는 더 많은 유연성을 제공합니다. 전문 분야를 강조하고 싶은지 아니면 폭넓게 어필하고 싶은지 고려하세요.' },
    { question: '마케팅에 음식 사업 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 이름은 간판, 메뉴, 포장, 배달 앱, 리뷰에 나타납니다. 식욕을 돋우는 이름은 고객이 음식을 보기 전에 갈망을 만듭니다. 입소문 추천과 온라인 검색 가능성에 영향을 미칩니다.' },
    { question: '현재 인기 있는 음식 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 품질 단어(아티산, 크래프트, 프레시), 합성 이름(테이스트트레일, 플레이버퓨전), 간단한 설명어(더 키친, 테이블), 캐주얼 컨셉을 위한 재미있는 이름이 포함됩니다. 진정성 있고 식욕을 돋우는 이름이 음식 애호가들에게 공감을 줍니다.' },
    { question: '음식 사업에 제 이름을 사용해야 하나요?', answer: '개인 이름은 셰프 주도 컨셉에 잘 맞고 개인적인 평판을 구축합니다. 그러나 비개인적 이름은 확장이나 매각에 더 많은 유연성을 제공합니다. 개인 브랜딩이 더 중요한지 비즈니스 확장성이 더 중요한지 고려하세요.' },
    { question: '음식 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들, 배달 앱 목록(우버이츠, 도어대시), 상표 데이터베이스를 확인하세요. 또한 지역 및 음식 카테고리의 유사한 레스토랑도 검색하세요.' },
    { question: '음식 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 맛 용어(세이버, 플레이버, 딜리셔스), 요리 단어(고르메, 키친, 비스트로), 품질 단어(프레시, 아티산, 프라임), 풍요 단어(바운티, 피스트, 하베스트), 경험 단어(바이트, 피스트, 테이블)가 포함됩니다.' },
    { question: '레스토랑 스타일을 이름에 반영해야 하나요?', answer: '독특한 스타일(팜투테이블, 퓨전, 패밀리 스타일)이 있다면 반영하면 타겟 시장을 끌어들일 수 있습니다. 그러나 너무 구체적인 이름은 향후 메뉴 진화를 제한할 수 있습니다. 구체성과 유연성의 균형을 맞추세요.' },
    { question: '음식 사업 이름이 배달 고객에게 어떻게 어필할 수 있나요?', answer: '배달 앱에서 이름은 목록에서 눈에 띄어야 합니다. 식욕을 돋우고 기억에 남는 이름이 일반적인 것보다 잘 작동합니다. 앱 검색에서 이름이 어떻게 보이는지, 기다리는 맛있는 경험을 암시하는지 고려하세요.' },
    { question: '음식 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 식욕을 돋우지 않는 이름, 철자가 어려운 단어, 기존 레스토랑과 너무 유사한 이름, 빨리 구식이 될 수 있는 트렌디한 용어, 메뉴 확장을 제한하는 이름, 음식의 품질과 맛있음을 전달하지 않는 모든 것.' },
  ],
  howToChoose: {
    intro: '음식 비즈니스의 완벽한 이름을 선택하는 것은 배고픈 고객을 끌어들이고 요리 상품의 품질을 전달하는 식욕을 돋우는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 간판, 메뉴, 포장, 배달 앱에 나타납니다—고객이 음식을 발견하고, 기억하고, 추천하는 방식입니다.',
    steps: [
      { title: '음식 비즈니스 아이덴티티 정의', description: '이름 생성 전에 음식 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 음식을 제공할 것인지(요리 스타일, 전문 분야, 형식), 이상적인 고객은 누구인지(미식가, 가족, 건강 의식, 바쁜 직장인), 음식을 독특하게 만드는 것(재료, 조리법, 경험), 서비스 모델(다인인, 배달, 둘 다), 어떤 분위기나 경험을 만드는지 고려하세요. 답변에 따라 고급스럽고 세련된, 캐주얼하고 재미있는, 건강하고 신선한, 또는 편안하고 가정적인 소리의 이름이 필요한지 결정됩니다.' },
      { title: '식욕 어필 창조', description: '음식 비즈니스는 맛있는 식사 경험을 판매합니다. 이름은 식욕을 돋우고 유혹적으로 들리고, 들을 때 갈망을 만들고, 품질과 맛있음을 암시하고, "[여러분의 레스토랑]이 먹고 싶다" 맥락에서 작동하고, 사람들이 음식을 맛보고 싶게 만들어야 합니다. 세이버리, 고르메, 프레시, 피스트 같은 단어는 즉각적인 식욕 연상을 만듭니다.' },
      { title: '품질과 전문성 전달', description: '음식 구매는 신뢰가 필요합니다. 이름은 요리 기술과 정성을 암시하고, 품질 재료를 전달하고, 음식에 대한 신뢰를 구축하고, 전문적이고 신뢰할 수 있게 들리고, 까다로운 음식 애호가에게 어필해야 합니다. 식욕을 돋우는 매력과 품질 및 전문성 신호의 균형을 맞추세요.' },
      { title: '요리 포커스 반영', description: '독특한 전문 분야가 있다면 통합하는 것을 고려하세요. 고급/파인 다이닝의 경우 에피큐어엠포리엄이나 고르메가든. 캐주얼/컴포트의 경우 코지퀴진이나 컴포트키친. 신선/건강의 경우 프레시페어나 그린고르메. 에스닉/전문의 경우 [요리]키친이나 오센틱잇츠. 팜투테이블의 경우 하베스트헤이븐이나 팜프레시. 메뉴 진화 여지와 구체성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com이 신뢰성에 선호), 소셜 미디어(음식 비즈니스에 인스타그램 중요), 배달 앱(우버이츠, 도어대시, 그럽허브 목록), 사업자 등록(주 요구 사항), 상표 검색(음식 및 레스토랑 카테고리) 전반에 걸쳐 가용성을 확인하세요. 배달과 온라인 주문이 필수이므로 디지털 가용성이 중요합니다.' },
      { title: '잠재 고객과 테스트', description: '최종 결정 전에 타겟 시장을 대표하는 사람들과 테스트하세요. 이 이름이 배고프게 만드는지, 어떤 유형의 음식을 기대하는지, 품질 중심으로 느껴지는지, 이 곳에서 주문할 것인지, 친구들에게 추천할 것인지 물어보세요. 피드백은 이름이 올바른 식욕 어필과 기대를 만드는지 드러냅니다.' },
      { title: '브랜드 성장과 확장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 메뉴 아이템이나 요리 추가, 추가 지점 오픈, 배달 및 케이터링 런칭, 포장 식품 제품 만들기, 레스토랑을 넘어 음식 브랜드 구축. 이상적인 음식 사업 이름은 식욕을 돋우고, 기억에 남고, 다재다능하며, 제공하는 맛있는 경험을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '세이버리생추어리', description: '맛있고 감칠맛 나는 음식이 숭배되는 성소입니다.' },
    { name: '에피큐어엠포리엄', description: '다양한 고급 미식 음식을 제공하는 백화점입니다.' },
    { name: '플레이버파운틴', description: '맛있고 풍미 가득한 요리의 끊임없는 원천입니다.' },
    { name: '팔레트파라다이스', description: '낙원 세팅에서 입맛을 즐겁게 하는 음식입니다.' },
    { name: '딜리쉬돔', description: '맛있는 음식 옵션으로 가득 찬 돔입니다.' },
    { name: '컬리너리코브', description: '음식 애호가를 위한 숨겨진 보석 같은 목적지입니다.' },
    { name: '바이트바운티', description: '즐길 수 있는 맛있는 한 입의 풍요입니다.' },
    { name: '고르메그로브', description: '고품질 고급 음식으로 가득 찬 숲입니다.' },
    { name: '테이스트트레져', description: '미뢰를 즐겁게 하는 소중한 요리입니다.' },
    { name: '피스트필드', description: '진수성찬 같은 요리의 광활한 들판입니다.' },
    { name: '스크럼셔스스프리', description: '즐길 수 있는 맛있는 음식의 풍요입니다.' },
    { name: '딜리셔스덴', description: '맛있는 음식으로 가득 찬 아늑한 굴입니다.' },
    { name: '얌야드', description: '맛있는 음식 옵션으로 가득 찬 마당입니다.' },
    { name: '노시누크', description: '간식으로 먹을 수 있는 맛있는 음식으로 가득 찬 아늑한 구석입니다.' },
    { name: '모셀메도우', description: '맛있는 음식 한 입의 초원입니다.' },
    { name: '바이트블리스', description: '음식 애호가가 탐닉할 수 있는 즐거운 장소입니다.' },
    { name: '개스트로노믹가든', description: '다양한 미식 옵션이 자라는 정원입니다.' },
    { name: '세이버리샤이어', description: '감칠맛 나는 음식 애호가의 커뮤니티입니다.' },
    { name: '플래터플레져', description: '순수한 즐거움을 가져다주는 음식 플래터입니다.' },
    { name: '그럽그로토', description: '즐겁고 만족스러운 음식을 위한 특별한 동굴입니다.' },
  ],
},

'food-truck': {
  slug: 'food-truck',
  name: '푸드트럭 사업 이름 생성기',
  title: '무료 AI 푸드트럭 사업 이름 아이디어 생성기',
  description: '모바일 음식 판매업체와 스트리트 푸드 비즈니스를 위한 인상적이고 기억에 남는 이름을 생성하세요.',
  metaDescription: '푸드트럭 비즈니스를 위한 완벽한 이름으로 도로에 나서세요. 무료 AI 생성기로 모바일 음식 판매업체를 위한 인상적이고 기억에 남는 이름을 만드세요. 빠르고, 식욕을 돋우고, 무료입니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '푸드트럭을 설명하세요...',
  inputPlaceholder: '예: 퓨전 멕시칸-아시안 스트리트 푸드를 제공하는 고급 타코 트럭',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['캐치 & 펀', '고급 & 업스케일', '스트리트 푸드 바이브', '플레이풀 & 크리에이티브'], default: '캐치 & 펀', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the mobile food and street food industry. Your role is to generate catchy, memorable business names that convey deliciousness, mobility, and unique culinary experiences for food trucks, mobile food vendors, and street food businesses.

FOOD TRUCK INDUSTRY CONTEXT:

The food truck business industry encompasses:

- Gourmet food trucks
- Ethnic and specialty cuisine trucks
- Dessert and sweet treat trucks
- Breakfast and coffee trucks
- BBQ and comfort food trucks
- Healthy and vegan food trucks
- Fusion cuisine trucks
- Event and festival food vendors
- Corporate catering trucks
- Late-night food trucks

NAME CHARACTERISTICS FOR FOOD TRUCK BUSINESSES:

1. **Appetizing and Unique**
   - Names should evoke flavor and excitement
   - Suggest the unique mobile food experience
   - Create cravings and curiosity
   - Examples: Flavor, Taste, Gourmet, Street, Rolling

2. **Easy to Remember and Pronounce**
   - Must be catchy and memorable
   - Work in quick street encounters
   - Easy to share and recommend
   - Simple to find on social media

3. **Reflects Cuisine or Theme**
   - Communicate the type of food offered
   - Whether gourmet, ethnic, comfort, or specialty
   - Align with your culinary identity
   - Create expectations that you deliver

4. **Mobile/Movement Element**
   - Names can incorporate mobility concepts
   - Suggest the traveling, street food nature
   - Fun, dynamic vocabulary
   - Examples: Rolling, Cruise, Mobile, Wheels, Transit

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a food truck

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '고급 푸드트럭 런칭',
      description: '고급 푸드트럭을 런칭하는 창업자들은 푸드트럭 사업 이름 생성기를 사용하여 스트리트 푸드의 재미있고 모바일한 특성을 포착하면서 요리 품질을 전달하는 이름을 찾습니다. 생성기는 푸드트럭 페스티벌에서 눈에 띄고 배고픈 고객을 끌어들이는 인상적인 이름을 제공합니다.',
    },
    {
      title: '전문 요리 모바일 판매업체',
      description: '특정 요리(타코, BBQ, 아시안 퓨전)를 전문으로 하는 푸드트럭 소유자들은 생성기를 사용하여 재미있고 접근하기 쉬우면서 전문 분야를 전달하는 기억에 남는 브랜드 이름을 만듭니다. 이 도구는 트럭 랩과 소셜 미디어에서 작동하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '이벤트 및 페스티벌 음식 비즈니스',
      description: '이벤트와 페스티벌에서 서비스를 제공하는 모바일 음식 판매업체들은 생성기를 사용하여 경쟁적인 페스티벌 환경에서 군중을 끌어들이는 주목을 끄는 이름을 개발합니다. 이 도구는 기억하고 공유하기 쉬운 이름을 제공하며, 이는 반복 페스티벌 고객을 구축하는 데 필수적입니다.',
    },
  ],
  faqs: [
    { question: '좋은 푸드트럭 사업 이름이란 무엇인가요?', answer: '좋은 푸드트럭 이름은 식욕을 돋우고 독특하며, 기억하고 발음하기 쉽고, 요리나 테마를 반영해야 합니다. 푸드트럭 문화의 재미있고 여행하는 특성을 포착하는 움직임이나 모바일 요소를 통합하는 것도 종종 도움이 됩니다.' },
    { question: '푸드트럭 이름에 "트럭" 또는 "모바일"을 포함해야 하나요?', answer: '차량 단어를 포함하면 모바일 아이덴티티를 강화할 수 있지만 필수는 아닙니다. 많은 성공적인 푸드트럭이 명시적인 차량 언급 없이 창의적인 이름을 사용합니다. 이동성을 강조하고 싶은지 아니면 순수하게 음식 매력에 초점을 맞추고 싶은지 고려하세요.' },
    { question: '고객 유치에 푸드트럭 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 푸드트럭은 거리와 이벤트에서 빠르게 주목을 끌어야 합니다. 인상적이고 기억에 남는 이름은 고객이 여러분을 찾고, 기억하고, 친구들과 공유하는 데 도움이 됩니다. 이름은 소셜 미디어 추적에도 중요합니다.' },
    { question: '현재 인기 있는 푸드트럭 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 재미있는 두운(타코 트렉, 그릴드 가디스), 말장난과 언어유희, 움직임 단어(롤링, 로밍, 크루징), 요리에 특화된 창의적 이름이 포함됩니다. 재미있고 공유 가능한 이름이 소셜 미디어 바이럴에 가장 잘 작동합니다.' },
    { question: '푸드트럭에 제 이름을 사용해야 하나요?', answer: '개인 이름은 셰프 인지도를 구축할 수 있지만 창의적이고 인상적인 이름을 선호하는 푸드트럭 문화에서는 덜 일반적입니다. 개인 브랜딩이 더 중요한지 기억에 남는 창의성이 비즈니스 목표에 더 적합한지 고려하세요.' },
    { question: '푸드트럭 이름 가용성을 어떻게 확인하나요?', answer: '소셜 미디어 핸들(인스타그램 필수), 푸드트럭 디렉토리, 사업자 등록, 도메인 이름, 지역 푸드트럭 목록을 확인하세요. 또한 인기 있는 푸드트럭 페스티벌과 이벤트에서 유사한 이름도 검색하세요.' },
    { question: '푸드트럭 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 음식 용어(플레이버, 테이스트, 고르메, 그럽), 움직임 단어(롤링, 모바일, 크루즈, 트렉), 차량 단어(트럭, 카트, 익스프레스, 휠스), 재미있는 단어(피스트, 피에스타, 어드벤처, 사파리)가 포함됩니다.' },
    { question: '특정 요리를 이름에 반영해야 하나요?', answer: '특정 요리를 전문으로 한다면 반영하면 올바른 고객을 끌어들이는 데 도움이 됩니다. 그러나 일반적인 이름은 메뉴가 진화해도 유연성을 제공합니다. 요리 전달과 메뉴 변경 가능성의 균형을 맞추세요.' },
    { question: '푸드트럭 이름이 소셜 미디어에서 어떻게 작동하나요?', answer: '해시태그, 철자, 찾기 쉬운 이름을 선택하세요. 짧고 인상적인 이름이 가장 잘 작동합니다. 인스타그램에서 @YourTruckName으로 이름이 어떻게 보이는지, 고객이 쉽게 태그할 수 있는지 고려하세요.' },
    { question: '푸드트럭 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 철자나 발음하기 어려운 이름, 트럭 간판에 너무 긴 이름, 식욕을 돋우지 않는 이름, 다른 지역 트럭과 너무 유사한 이름, 소셜 미디어에서 잘 작동하지 않는 이름.' },
  ],
  howToChoose: {
    intro: '푸드트럭의 완벽한 이름을 선택하는 것은 배고픈 고객을 끌어들이고 활기찬 스트리트 푸드 씬에서 눈에 띄는 인상적인 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 트럭 랩, 소셜 미디어, 이벤트 목록, 입소문 추천에 나타납니다—고객이 모바일 음식 경험을 찾고, 기억하고, 공유하는 방식입니다.',
    steps: [
      { title: '푸드트럭 아이덴티티 정의', description: '이름 생성 전에 푸드트럭의 포지셔닝을 명확히 하세요. 어떤 유형의 요리를 제공할 것인지(전문, 퓨전, 컴포트, 고급), 이상적인 고객은 누구인지(미식가, 점심 군중, 야식 추구자, 가족), 음식을 독특하게 만드는 것, 어떤 이벤트와 장소에서 서비스를 제공할지, 어떤 분위기를 만들고 싶은지 고려하세요. 답변에 따라 고급스럽고 세련된, 재미있고 유쾌한, 에스닉하고 정통한, 또는 빠르고 편리한 소리의 이름이 필요한지 결정됩니다.' },
      { title: '인상적이고 기억에 남는 매력 창조', description: '푸드트럭은 주목을 끄는 이름이 필요합니다. 인상적이고 기억에 남고, 빠른 거리 만남에서 작동하고, 공유하고 추천하기 쉽고, 소셜 미디어에서 찾기 쉽고, 페스티벌과 이벤트에서 눈에 띄어야 합니다. 경쟁적인 푸드트럭 세계에서 잊히기 쉬운 이름은 놓친 고객을 의미합니다.' },
      { title: '이동성과 움직임 고려', description: '푸드트럭은 이동성에서 독특합니다. 이름은 여행하는 특성을 축하하고, 움직임 단어가 역동적인 에너지를 더하고, 차량 언급이 재미있을 수 있고, 스트리트 푸드 문화 어휘가 잘 작동하고, 모바일 다이닝의 모험을 포착할 수 있습니다. 롤링, 크루즈, 모바일, 트렉 같은 단어는 푸드트럭 캐릭터를 더합니다.' },
      { title: '요리 포커스 반영', description: '고객이 무엇을 기대할지 알도록 도와주세요. 적절할 때 요리 힌트를 통합하고, 구체성과 유연성의 균형을 맞추고, 식욕을 돋우는 기대를 만들고, 푸드트럭의 성격에 이름을 맞추고, 품질 수준(고급, 캐주얼 등)을 전달하세요. 이름은 사람들이 메뉴에 대해 궁금하게 만들어야 합니다.' },
      { title: '종합적인 가용성 확인', description: '소셜 미디어(푸드트럭에 인스타그램 필수), 도메인 이름(웹사이트 및 온라인 주문용), 지역 푸드트럭 디렉토리(충돌 없는지 확인), 사업자 등록(도시 요구 사항), 이벤트/페스티벌 목록(프로그램에 어떻게 나타날지) 전반에 걸쳐 가용성을 확인하세요. 소셜 미디어 발견 가능성은 푸드트럭 성공에 중요합니다.' },
      { title: '잠재 고객과 테스트', description: '최종 결정 전에 타겟 시장을 대표하는 사람들과 테스트하세요. 이 이름이 인상적이고 기억에 남는지, 페스티벌에서 이 트럭을 찾을 것인지, 어떤 유형의 음식을 기대하는지, 소셜 미디어에서 이 트럭을 팔로우할 것인지, 친구들에게 추천할 것인지 물어보세요. 피드백은 이름이 필요한 거리 매력을 가지고 있는지 드러냅니다.' },
      { title: '간판과 브랜딩 고려', description: '시각적으로 작동하는 이름을 선택하세요: 대담한 트럭 간판에 충분히 짧고, 로고와 그래픽에서 좋아 보이고, 메뉴와 포장에서 작동하고, 상품에 적합하고, 소셜 미디어 프로필에서 효과적입니다. 이상적인 푸드트럭 이름은 인상적이고, 식욕을 돋우고, 기억에 남으며, 스트리트 푸드의 재미있고 맛있는 경험을 완벽하게 포착하면서 성공을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '플레이버플리트', description: '놀라운 맛의 함대로 알려진 푸드트럭입니다.' },
    { name: '테이스트트랜짓', description: '맛있는 맛을 다양한 장소로 운송합니다.' },
    { name: '밀모바일', description: '배고픈 고객에게 음식을 가져다주는 모바일 식사 서비스입니다.' },
    { name: '컬리너리캐러밴', description: '거리를 여행하는 요리의 향연의 캐러밴입니다.' },
    { name: '고르메거즐러', description: '이동 중에 먹을 수 있는 고급 음식입니다.' },
    { name: '딜리쉬드라이브', description: '맛있는 음식을 드라이브로 고객에게 가져갑니다.' },
    { name: '비스트로버스', description: '레스토랑 품질을 거리로 가져오는 모바일 비스트로입니다.' },
    { name: '에피큐어익스프레스', description: '미식 음식의 익스프레스 서비스입니다.' },
    { name: '푸디프레이트', description: '배고픈 군중에게 미식 음식을 실어 나릅니다.' },
    { name: '테이스티트래블러', description: '필요한 곳 어디든 맛있는 음식 옵션과 함께 여행합니다.' },
    { name: '퀴진캡', description: '이동 중인 요리를 위한 캡 서비스입니다.' },
    { name: '개스트로고', description: '바퀴 위의 미식 음식입니다.' },
    { name: '얌요트', description: '거리를 항해하는 맛있음의 요트입니다.' },
    { name: '세이버리셔틀', description: '배고픈 고객에게 감칠맛 나는 음식 옵션을 셔틀로 운송합니다.' },
    { name: '노시노매드', description: '간식거리 같은 스낵이 있는 노마드 푸드트럭입니다.' },
    { name: '차우카트', description: '빠르고 맛있는 식사를 위한 음식 카트입니다.' },
    { name: '트릿트렉', description: '이벤트와 장소로 트릿을 트레킹합니다.' },
    { name: '그럽집시', description: '훌륭한 음식을 제공하는 집시 스타일의 푸드트럭입니다.' },
    { name: '팔레트필그림', description: '입맛을 즐겁게 하는 음식을 가지고 여정을 떠나는 순례자입니다.' },
    { name: '잇츠엔진', description: '배고픈 고객에게 음식을 몰고 다니는 엔진입니다.' },
  ],
},

'funny': {
  slug: 'funny',
  name: '재미있는 사업 이름 생성기',
  title: '무료 AI 재미있는 사업 이름 아이디어 생성기',
  description: '엔터테인먼트 비즈니스와 펀 브랜드를 위한 재치 있고, 영리하고, 웃음을 유발하는 이름을 생성하세요.',
  metaDescription: 'AI 생성 재미있는 비즈니스 이름으로 브랜드에 유머를 더하세요. 엔터테인먼트 비즈니스와 펀 브랜드를 위한 재치 있고, 영리하고, 웃음을 유발하는 이름을 만드세요. 빠르고, 무료이며, 창의적입니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '비즈니스를 설명하세요...',
  inputPlaceholder: '예: 스탠드업 코미디와 즉흥극 쇼를 위한 코미디 클럽 및 엔터테인먼트 장소',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['재치 & 영리함', '유치 & 장난스러움', '말장난 & 언어유희', '즐거움 & 경쾌함'], default: '재치 & 영리함', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in humor-based branding and comedic business naming. Your role is to generate witty, clever, and laugh-inducing business names that convey humor, fun, and memorable entertainment for comedy clubs, entertainment businesses, novelty shops, and brands that use humor as their identity.

FUNNY BUSINESS INDUSTRY CONTEXT:

The funny/humor business industry encompasses:

- Comedy clubs and venues
- Entertainment and novelty businesses
- Humorous product brands
- Party and celebration companies
- Prank and gag gift shops
- Comedy content creators
- Funny merchandise companies
- Entertainment event planners
- Humor-based services
- Any business wanting a lighthearted, fun brand

NAME CHARACTERISTICS FOR FUNNY BUSINESSES:

1. **Witty and Clever**
   - Names should showcase humor and intelligence
   - Use wordplay, puns, and clever combinations
   - Create immediate smile or chuckle
   - Examples: Giggle, Chuckle, Jest, Wit, Humor

2. **Memorable and Laugh-Inducing**
   - Easy to remember because they're funny
   - Create positive emotional response
   - Shareable and conversation-starting
   - Stand out through humor

3. **Reflects Humor Style**
   - Match your comedy approach
   - Whether silly, clever, or dry humor
   - Align with target audience's sense of humor
   - Create appropriate expectations

4. **Professional Despite Humor**
   - Funny but still businesslike
   - Appropriate for marketing and professional contexts
   - Work in all business situations
   - Balance humor with credibility

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a funny business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '코미디 장소 또는 엔터테인먼트 비즈니스',
      description: '코미디 클럽이나 엔터테인먼트 장소를 오픈하는 창업자들은 재미있는 사업 이름 생성기를 사용하여 제공하는 재미있고 유머러스한 경험을 즉시 전달하는 이름을 찾습니다. 생성기는 코미디 애호가를 끌어들이고 올바른 기대를 설정하는 재치 있는 이름을 제공합니다.',
    },
    {
      title: '노벨티 또는 개그 제품 브랜드',
      description: '유머러스한 제품, 개그 선물, 또는 노벨티 아이템을 만드는 크리에이터들은 생성기를 사용하여 재미있는 제품과 맞는 브랜드 이름을 개발합니다. 이 도구는 비즈니스 운영에 전문적이면서도 기억에 남을 만큼 재미있는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '경쾌한 서비스 비즈니스 브랜딩',
      description: '유머를 통해 차별화하고 싶은 서비스 비즈니스(파티 플래닝, 엔터테인먼트, 크리에이티브 서비스)는 생성기를 사용하여 진지한 경쟁자들과 차별화하고 재미있고 경쾌한 접근 방식을 좋아하는 고객을 끌어들이는 독특한 이름을 만듭니다.',
    },
  ],
  faqs: [
    { question: '좋은 재미있는 사업 이름이란 무엇인가요?', answer: '좋은 재미있는 사업 이름은 재치 있고 영리해서 즉각적인 미소나 웃음을 만들어야 합니다. 유머 때문에 기억에 남고, 특정 유머 스타일을 반영하며, 재미있으면서도 비즈니스 맥락에 충분히 전문적이어야 합니다.' },
    { question: '사업 이름이 재미있으면서도 전문적일 수 있나요?', answer: '물론입니다. 많은 성공적인 브랜드가 전문성을 유지하면서 유머를 효과적으로 사용합니다. 핵심은 저속하거나 공격적인 농담보다 영리하고 적절한 유머를 선택하는 것입니다. 재치와 언어유희는 여전히 재미있으면서 전문적으로 받아들여지는 경향이 있습니다.' },
    { question: '브랜딩에서 유머 일관성이 얼마나 중요한가요?', answer: '매우 중요합니다. 비즈니스 이름이 재미있다면 고객은 경험 전반에 걸쳐 유머를 기대합니다. 재미있는 이름은 기대를 만듭니다—실제 비즈니스가 이름이 약속하는 재미있고 경쾌한 경험을 제공하는지 확인하세요.' },
    { question: '사업 이름에 가장 잘 맞는 유머 유형은 무엇인가요?', answer: '영리한 언어유희와 말장난은 보편적으로 접근 가능하고 적절하기 때문에 잘 작동하는 경향이 있습니다. 두운은 기억에 남고 재미있게 들리는 이름을 만듭니다. 공격적이거나, 구식이거나, 타겟 청중에게 너무 모호한 유머는 피하세요.' },
    { question: '재미있는 사업 이름을 다른 사람들과 테스트해야 하나요?', answer: '반드시요. 유머는 주관적입니다. 다양한 사람들과 이름을 테스트하여 의도한 대로 전달되는지 확인하세요. 여러분에게 웃긴 것이 다른 사람에게는 그렇지 않을 수 있고, 심지어 의도치 않게 공격적일 수도 있습니다.' },
    { question: '재미있으면서 검색 가능한 균형을 어떻게 맞추나요?', answer: '창의성이 중요하지만 재미있는 이름이 여전히 무엇을 하는지 전달하도록 하세요. 코미디 클럽이나 엔터테인먼트를 검색하는 사람들은 "랜덤한 터무니없는 이름"을 쉽게 찾지 못합니다. 가능하면 비즈니스 유형에 대한 힌트를 포함하세요.' },
    { question: '사업 이름에 유머를 만드는 단어는 무엇인가요?', answer: '효과적인 유머 단어에는 웃음 용어(기글, 처클, 스니커), 기쁨 단어(머스, 글리, 졸리), 장난스러운 단어(제스트, 펀, 윗), 재미있는 장소(그로브, 헤이븐, 스피어를 유머 단어와 예상치 않게 조합)가 포함됩니다.' },
    { question: '재미있는 이름이 진지한 산업에서 작동할 수 있나요?', answer: '일부 산업은 유머를 다른 것보다 더 잘 받아들입니다. 엔터테인먼트, 파티, 선물, 크리에이티브 서비스는 유머를 환영합니다. 더 진지한 산업(법률, 의료, 금융)은 일반적으로 더 보수적인 네이밍이 필요하지만, 미묘한 재치는 여전히 작동할 수 있습니다.' },
    { question: '공격적이거나 부적절한 유머를 어떻게 피하나요?', answer: '고정관념, 저속한 농담, 또는 특정 그룹을 공격할 수 있는 것을 기반으로 한 유머를 피하세요. 의심스러우면 엣지 있는 유머보다 영리한 언어유희를 선택하세요. 최종 결정 전에 다양한 사람들이 이름을 검토하도록 하세요.' },
    { question: '재미있는 사업 이름에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 설명이 필요한 농담, 빨리 구식이 되는 유머, 공격적이거나 저속한 언급, 너무 터무니없어서 혼란스러운 이름, 실제 비즈니스와 맞지 않는 유머, 웃음을 위해 전문성을 희생하는 이름.' },
  ],
  howToChoose: {
    intro: '유머 기반 비즈니스의 완벽한 이름을 선택하는 것은 즐거운 창의적 도전입니다. 비즈니스 이름은 고객 기대의 톤을 설정합니다—이름이 재미있다면 고객은 재미있는 경험을 기대합니다. 잘 하면 재미있는 비즈니스 이름은 즉각적인 기억력과 긍정적인 연상을 만듭니다.',
    steps: [
      { title: '유머 스타일 정의', description: '이름 생성 전에 유머에 대한 접근 방식을 명확히 하세요. 브랜드에 맞는 유머 유형(재치, 유치함, 드라이, 영리함), 타겟 청중과 그들이 재미있다고 생각하는 것, 전체 브랜드 아이덴티티에 유머가 얼마나 중요한지, 유지해야 하는 전문성 수준, 피해야 하는 유머 스타일을 고려하세요. 답변에 따라 영리한 언어유희, 유치한 재미, 미묘한 재치, 또는 장난스러운 터무니없음이 필요한지 안내됩니다.' },
      { title: '진정한 유머 창조', description: '이름은 실제로 재미있어야 합니다. 즉각적인 미소나 웃음을 목표로 하고, 영리한 언어유희나 말장난을 사용하고, 예상치 못한 조합을 만들고, 유머를 통해 기억에 남게 하고, 너무 노력하지 마세요—억지 유머는 실패합니다. 잠재적인 이름을 공유하여 테스트하세요—사람들이 미소 짓거나 웃나요?' },
      { title: '유머와 전문성 균형', description: '재미있는 비즈니스도 신뢰성이 필요합니다. 모든 맥락에 적절하고, 전문적인 커뮤니케이션에서 작동하고, 공격할 수 있는 유머를 피하고, 여전히 무엇을 하는지 전달하고, 재미있는 톤에도 불구하고 신뢰를 구축해야 합니다. 최고의 재미있는 이름은 저속하지 않고 영리합니다.' },
      { title: '공유 가능성 보장', description: '재미있는 이름은 퍼져야 합니다. 다른 사람에게 말하기 쉽고, "[이름] 들어봤어?" 맥락에서 작동하고, 소셜 미디어에서 공유 가능하고, 대화 시작이 되고, 한 번 노출 후 기억에 남아야 합니다. 유머는 잘 하면 입소문 마케팅을 촉진합니다.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(재미있는 이름이 온라인에서 사용 가능해야), 소셜 미디어(플랫폼 전반에 걸쳐 일관된 핸들), 사업자 등록(주 요구 사항), 상표 검색(충돌 없는지 확인), 유사한 비즈니스(기존 재미있는 브랜드와 혼란 피하기) 전반에 걸쳐 가용성을 확인하세요. 재미있는 이름은 종종 더 독특하여 가용성 가능성을 높입니다.' },
      { title: '다양한 청중과 테스트', description: '최종 결정 전에 광범위하게 테스트하세요. 다른 사람들을 웃게 하는지, 어떤 그룹에도 공격적인지, 비즈니스 유형을 전달하는지, 한 번 듣고 기억에 남는지, 전문적인 맥락에서 작동하는지 물어보세요. 유머는 주관적입니다—이름이 잘 전달되도록 넓게 테스트하세요.' },
      { title: '장기적인 매력 고려', description: '지속되는 유머를 선택하세요. 빨리 구식이 되는 트렌디한 농담을 피하고, 시대를 초월한 재치가 현재 언급보다 더 오래가고, 유머가 반복 노출 후에도 여전히 재미있는지 확인하고, 수년간 사용 후 이름이 어떻게 느껴지는지 고려하고, 재미있는 약속을 지속하는 브랜드를 구축하세요. 이상적인 재미있는 비즈니스 이름은 진정으로 영리하고, 전문적으로 적절하고, 유머를 통해 기억에 남으며, 만나는 모든 사람에게 미소를 가져다주면서 지속적인 성공을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '기글그로브', description: '킬킬 웃음과 웃음이 풍부하게 자라는 곳입니다.' },
    { name: '처클챔버', description: '낄낄거림과 좋은 유머로 가득 찬 방입니다.' },
    { name: '제스트정션', description: '재치 있는 농담이 모이는 곳입니다.' },
    { name: '메리먼트매트릭스', description: '기쁨, 흥겨움, 웃음의 매트릭스입니다.' },
    { name: '스니커스피어', description: '킥킥거림과 재미있는 순간의 영역입니다.' },
    { name: '래프터라군', description: '웃음이 자유롭게 흐르는 석호입니다.' },
    { name: '윗웨이브', description: '재치와 영리한 유머의 파도를 타고 있습니다.' },
    { name: '유머헤이븐', description: '유머와 코미디 즐거움을 위한 안식처입니다.' },
    { name: '졸리정션', description: '유쾌함과 재미가 모이는 곳입니다.' },
    { name: '힐래리티헛', description: '유쾌한 경험에 전념하는 오두막입니다.' },
    { name: '펀파운틴', description: '재미와 유머가 넘쳐나는 분수입니다.' },
    { name: '그린그리드', description: '웃음과 행복한 표정의 그리드입니다.' },
    { name: '스마일스피어', description: '미소를 멀리 널리 퍼뜨립니다.' },
    { name: '티클스트로브', description: '간지러운 유머와 재미있는 순간의 보물창고입니다.' },
    { name: '머스매트릭스', description: '흥겨움과 즐거운 엔터테인먼트의 매트릭스입니다.' },
    { name: '조이풀제이드', description: '모두에게 기쁨과 행복을 가져다줍니다.' },
    { name: '글리글레이드', description: '기쁨과 쾌활한 순간으로 가득 찬 숲 속 빈터입니다.' },
    { name: '메리먼트메도우', description: '흥겨움과 웃음이 피어나는 초원입니다.' },
    { name: '블리스풀베이', description: '행복하고 복된 경험의 만입니다.' },
    { name: '치어리코브', description: '쾌활함과 경쾌한 재미의 만입니다.' },
  ],
},

// ==================== KOREAN (ko) TRANSLATION - BATCH 6 (26-30) ====================

'furniture-store': {
  slug: 'furniture-store',
  name: '가구 매장 사업 이름 생성기',
  title: '무료 AI 가구 사업 이름 아이디어 생성기',
  description: '가구 매장, 홈 데코 샵, 인테리어 비즈니스를 위한 우아하고 초대하는 이름을 생성하세요.',
  metaDescription: '무료 AI 생성기의 훌륭한 이름으로 가구 매장을 꾸미세요. 가구 매장, 홈 데코 샵, 인테리어 비즈니스를 위한 우아하고 초대하는 이름을 만드세요. 손쉽고 맞춤 제작됩니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '가구 매장을 설명하세요...',
  inputPlaceholder: '예: 스칸디나비아 영감의 미니멀리스트 디자인을 전문으로 하는 모던 가구 쇼룸',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['우아함 & 세련됨', '모던 & 컨템포러리', '아늑함 & 편안함', '클래식 & 전통적'], default: '우아함 & 세련됨', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the home furnishings and furniture retail industry. Your role is to generate elegant, inviting business names that convey style, quality, and comfort for furniture stores, home décor shops, and interior furnishing businesses.

FURNITURE STORE INDUSTRY CONTEXT:

The furniture store industry encompasses:

- Full-service furniture retailers
- Specialty furniture stores (bedroom, office, outdoor)
- Designer furniture showrooms
- Discount and value furniture stores
- Vintage and antique furniture shops
- Custom furniture makers
- Online furniture retailers
- Home décor and accessories stores
- Office furniture suppliers
- Children's furniture specialists

NAME CHARACTERISTICS FOR FURNITURE STORES:

1. **Inviting and Descriptive**
   - Names should evoke a welcoming atmosphere
   - Suggest the comfort and beauty of your furniture
   - Create desire to browse and purchase
   - Examples: Home, Comfort, Living, Style, Design

2. **Memorable and Timeless**
   - Easy to remember for repeat visits
   - Avoid trendy names that date quickly
   - Evoke enduring elegance
   - Work for long-term brand building

3. **Reflects Design Aesthetic**
   - Communicate your furniture style
   - Whether modern, classic, rustic, or eclectic
   - Align with target customer tastes
   - Create appropriate style expectations

4. **Quality and Trust Signals**
   - Furniture is a significant purchase
   - Names should convey quality and reliability
   - Build confidence in your offerings
   - Suggest lasting value

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a furniture store

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '가구 소매점 런칭',
      description: '가구 매장을 오픈하는 창업자들은 가구 매장 사업 이름 생성기를 사용하여 품질, 스타일, 쇼룸의 초대하는 특성을 전달하는 이름을 찾습니다. 모던, 전통적, 또는 절충적 가구 중 어떤 것을 제공하든, 생성기는 홈 쇼퍼를 끌어들이는 우아한 이름을 제공합니다.',
    },
    {
      title: '온라인 가구 비즈니스 브랜딩',
      description: '온라인 가구 매장을 런칭하는 이커머스 창업자들은 생성기를 사용하여 디지털 환경에서 작동하는 기억에 남는 브랜드 이름을 만듭니다. 이 도구는 SEO 친화적이고 온라인에서 찾기 쉬우면서 스타일과 품질을 전달하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '전문 가구 매장 차별화',
      description: '전문 가구 소매업체(빈티지, 커스텀, 사무용)는 생성기를 사용하여 폭넓은 매력을 유지하면서 특정 포커스를 전달하는 이름을 개발합니다. 이 도구는 가구 니치의 전문가로 비즈니스를 포지셔닝하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 가구 매장 사업 이름이란 무엇인가요?', answer: '좋은 가구 매장 이름은 초대하고 설명적이어야 하며, 기억에 남고 시대를 초월하며, 디자인 미학을 반영해야 합니다. 또한 품질과 신뢰성을 신호해야 합니다—중요한 가구 구매에 필수적입니다.' },
    { question: '가구 매장 이름에 스타일 전문 분야를 표시해야 하나요?', answer: '독특한 스타일(모던, 러스틱, 빈티지)이 있다면 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 더 넓은 이름은 디자인 트렌드가 진화해도 유연성을 제공합니다. 스타일 전달과 장기적 다재다능함의 균형을 맞추세요.' },
    { question: '신뢰 구축에 가구 매장 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 가구 구매는 상당한 투자입니다. 전문적이고 품질 있게 들리는 이름은 가구가 잘 만들어지고, 스타일리시하며, 투자할 가치가 있다는 신뢰를 구축합니다. 고객의 지출 의지에 영향을 미칩니다.' },
    { question: '현재 인기 있는 가구 매장 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 홈 중심 단어(헤이븐, 네스트, 어보드), 편안함 어휘(코지, 컴포트, 플러시), 디자인 용어(스튜디오, 디자인, 스타일), 합성 우아함 이름(리빙럭스, 홈하모니)이 포함됩니다. 시대를 초월한 우아한 이름이 가장 오래 지속됩니다.' },
    { question: '가구 매장에 제 이름을 사용해야 하나요?', answer: '개인 이름은 디자이너 가구 쇼룸과 개인 브랜드 인지도를 구축하는 커스텀 가구 제작자에게 잘 맞습니다. 대규모 소매 운영의 경우, 비개인적 이름이 종종 더 확립된 느낌을 주고 더 많은 유연성을 제공합니다.' },
    { question: '가구 매장 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(가구에 인스타그램과 핀터레스트가 중요), 가구 산업 디렉토리, 상표 데이터베이스를 확인하세요. 또한 시장 지역의 유사한 가구 매장도 검색하세요.' },
    { question: '가구 매장 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 홈 용어(홈, 리빙, 네스트, 헤이븐), 편안함 단어(컴포트, 코지, 플러시), 스타일 단어(디자인, 스타일, 데코), 품질 단어(파인, 프리미엄, 엘레강트), 장소 단어(라운지, 에스테이트, 스튜디오)가 포함됩니다.' },
    { question: '이름이 물리적 매장과 온라인 소매 모두에 적합해야 하나요?', answer: '네. 오늘날 대부분의 가구 비즈니스는 두 채널 모두 운영합니다. 매장 전면과 웹사이트에서 모두 작동하고, 디지털 마케팅에 맞고, "쇼룸 방문"과 "온라인 쇼핑" 맥락 모두에서 자연스럽게 들리는 이름을 선택하세요.' },
    { question: '가구 매장 이름이 다양한 예산에 어떻게 어필할 수 있나요?', answer: '"엘레강트"나 "럭셔리" 같은 단어는 예산이 빠듯한 쇼퍼를 주눅 들게 할 수 있고, "디스카운트"는 품질 추구자를 주눅 들게 할 수 있습니다. "홈 헤이븐"이나 "리빙 스타일" 같은 중립적 이름은 예산 전반에 걸쳐 어필합니다. 타겟 시장의 가격 민감도를 고려하세요.' },
    { question: '가구 매장 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 품질을 팔 때 저렴하게 들리는 이름, 빨리 구식이 되는 너무 트렌디한 이름, 철자가 어려운 단어, 가구 카테고리를 제한하는 이름, 기존 체인과 너무 유사한 이름, 홈과 스타일을 전달하지 않는 모든 것.' },
  ],
  howToChoose: {
    intro: '가구 매장의 완벽한 이름을 선택하는 것은 품질, 스타일, 편안함으로 집을 꾸미고자 하는 고객을 끌어들이는 초대하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 매장 전면, 쇼룸, 배달 트럭, 마케팅 자료에 나타납니다—제공하는 가구 경험을 전달합니다.',
    steps: [
      { title: '가구 비즈니스 아이덴티티 정의', description: '이름 생성 전에 가구 매장의 포지셔닝을 명확히 하세요. 주로 어떤 가구 스타일을 제공할 것인지(모던, 전통적, 절충적, 러스틱), 이상적인 고객은 누구인지(젊은 전문가, 가족, 디자이너, 예산 의식), 어떤 가격대와 품질 수준을 타겟으로 하는지, 어떤 쇼핑 경험을 만들고 싶은지, 전문화할 것인지 종합적인 셀렉션을 제공할 것인지 고려하세요. 답변에 따라 럭셔리하고 독점적인, 친근하고 접근하기 쉬운, 트렌디하고 모던한, 또는 클래식하고 시대를 초월한 소리의 이름이 필요한지 결정됩니다.' },
      { title: '초대하고 편안한 매력 창조', description: '가구는 집의 편안함을 대표합니다. 이름은 환영하는 분위기를 연상시키고, 편안함과 살기 좋음을 암시하고, 브라우징하고 구매하고 싶은 욕구를 만들고, 즐겁고 초대하게 들리고, 홈과 리빙과 연결되어야 합니다. 홈, 컴포트, 리빙, 헤이븐 같은 단어는 즉각적인 홈 연상을 만듭니다.' },
      { title: '품질과 스타일 전달', description: '가구 구매에는 신뢰가 필요합니다. 이름은 품질을 전달하고, 지속적인 가치를 암시하고, 스타일 미학을 전달하고, 장인 정신에 대한 신뢰를 구축하고, 디자인 의식이 있는 구매자에게 어필해야 합니다. 따뜻함과 전문성의 균형을 맞춰 품질 추구 고객을 끌어들이세요.' },
      { title: '디자인 미학 반영', description: '독특한 스타일이 있다면 통합하는 것을 고려하세요. 모던/컨템포러리의 경우 모던매너나 컨템포러리컴포트. 전통적/클래식의 경우 클래식홈이나 헤리티지헤이븐. 러스틱/팜하우스의 경우 러스틱리트릿이나 팜하우스퍼니싱스. 럭셔리/디자이너의 경우 럭스리빙이나 디자이너도메인. 예산/가치의 경우 스마트홈이나 밸류비스타. 재고 변경에 대한 유연성과 스타일 구체성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com이 신뢰성에 선호), 소셜 미디어(가구에 핀터레스트와 인스타그램 중요), 사업자 등록(주 요구 사항), 상표 검색(가구 및 홈 상품 카테고리), 지역 경쟁(근처에 유사한 매장이 없는지 확인) 전반에 걸쳐 가용성을 확인하세요. 가구 매장은 시각적 플랫폼의 혜택을 받으므로 소셜 미디어 가용성이 중요합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 이상적인 고객을 대표하는 사람들과 테스트하세요. 이 이름이 가구 쇼핑을 하고 싶게 만드는지, 어떤 스타일과 품질을 기대하는지, 중요한 구매에 신뢰할 만하게 느껴지는지, 친구들에게 이 매장을 추천할 것인지, 기억하고 철자하기 쉬운지 물어보세요. 피드백은 이름이 올바른 홈과 품질 인상을 만드는지 드러냅니다.' },
      { title: '장기적인 브랜드 구축 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 가구 카테고리 추가, 추가 지점 오픈, 이커머스 런칭, 홈 데코와 액세서리로 확장, 인정받는 지역 브랜드 구축. 이상적인 가구 매장 이름은 초대하고, 품질 중심적이고, 기억에 남으며, 제공하는 홈 편안함 경험을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '엘레강트에스테이트', description: '에스테이트급 집에 어울리는 우아한 가구입니다.' },
    { name: '코지코너', description: '아늑하고 편안한 가구 피스로 유명합니다.' },
    { name: '디자인돔', description: '아름다운 가구 디자인을 선보이는 돔입니다.' },
    { name: '라비시라운지', description: '럭셔리한 휴식을 위한 화려한 가구입니다.' },
    { name: '퍼니싱판타지', description: '아름다운 가구의 판타지 컬렉션입니다.' },
    { name: '플러시팰리스', description: '푹신하고 편안한 가구의 궁전입니다.' },
    { name: '컴포트캐슬', description: '모든 가구 피스에서 성 같은 편안함입니다.' },
    { name: '트렌디테라스', description: '모던 테라스와 공간을 위한 트렌디한 가구입니다.' },
    { name: '스타일리시생추어리', description: '스타일리시한 가구 셀렉션의 성소입니다.' },
    { name: '데코도메인', description: '장식 가구와 액세서리의 영역입니다.' },
    { name: '럭셔리어스로프트', description: '로프트 스타일 리빙을 위한 럭셔리한 가구입니다.' },
    { name: '보그빌라', description: '빌라 스타일 집을 위한 보그급 가구입니다.' },
    { name: '쉬크샤토', description: '샤토 우아함을 가진 시크한 가구입니다.' },
    { name: '프리스틴팔러', description: '완벽한 응접실을 위한 깔끔한 가구입니다.' },
    { name: '리걸레지던스', description: '레지던스 정제를 위한 고급스러운 가구입니다.' },
    { name: '하모니헤이븐', description: '안식처 같은 집을 만드는 조화로운 가구입니다.' },
    { name: '오풀런트오아시스', description: '화려한 가구 선택의 오아시스입니다.' },
    { name: '그레이스풀그로브', description: '우아하고 품격 있는 가구의 숲입니다.' },
    { name: '트랭퀼테리토리', description: '평온한 생활 영역을 만드는 가구입니다.' },
    { name: '엘레강트엠포리엄', description: '우아한 홈 퍼니싱의 백화점입니다.' },
  ],
},

'game': {
  slug: 'game',
  name: '게임 사업 이름 생성기',
  title: '무료 AI 게임 사업 이름 아이디어 생성기',
  description: '게임 스튜디오, 게이밍 회사, 인터랙티브 엔터테인먼트를 위한 매력적이고 기억에 남는 이름을 생성하세요.',
  metaDescription: 'AI 생성 이름으로 게임 비즈니스를 레벨업하세요. 게임 스튜디오, 게이밍 회사, 인터랙티브 엔터테인먼트를 위한 매력적이고 기억에 남는 이름을 만드세요. 빠르고, 무료이며, 맞춤 제작됩니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '게임 비즈니스를 설명하세요...',
  inputPlaceholder: '예: 독특한 아트 스타일로 스토리 중심 RPG를 개발하는 인디 게임 스튜디오',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['에픽 & 어드벤처', '테크 & 디지털', '펀 & 플레이풀', '프로페셔널 & 스튜디오'], default: '에픽 & 어드벤처', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the gaming and interactive entertainment industry. Your role is to generate captivating, memorable business names that convey excitement, creativity, and immersive experiences for game development studios, gaming companies, and interactive entertainment businesses.

GAME BUSINESS INDUSTRY CONTEXT:

The game business industry encompasses:

- Video game development studios
- Mobile game companies
- Board game and tabletop publishers
- Gaming cafes and lounges
- Esports organizations
- Game streaming and content creation
- VR/AR gaming companies
- Educational game developers
- Indie game studios
- Gaming merchandise and accessories

NAME CHARACTERISTICS FOR GAME BUSINESSES:

1. **Captivating and Memorable**
   - Names should capture attention instantly
   - Evoke excitement and adventure
   - Be memorable among gamers
   - Examples: Quest, Epic, Adventure, Pixel, Realm

2. **Reflects Game Genre**
   - Communicate your gaming focus
   - Whether action, strategy, casual, or immersive
   - Align with target gamer expectations
   - Create appropriate genre associations

3. **Unique and Brandable**
   - Stand out in crowded gaming market
   - Work as recognizable brand
   - Suitable for games, merchandise, and content
   - Build strong brand recognition

4. **Appeal to Gaming Culture**
   - Resonate with gaming community
   - Use vocabulary gamers appreciate
   - Sound cool and credible
   - Connect with gaming identity

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a game business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '게임 개발 스튜디오 런칭',
      description: '스튜디오를 런칭하는 게임 개발자들은 게임 사업 이름 생성기를 사용하여 게임의 흥분과 창의성을 포착하는 이름을 찾습니다. 액션, 전략, 또는 캐주얼 게임 중 어떤 것을 개발하든, 생성기는 게이밍 청중에게 공감하는 매력적인 이름을 제공합니다.',
    },
    {
      title: '게이밍 카페 또는 엔터테인먼트 장소',
      description: '게이밍 카페나 엔터테인먼트 장소를 오픈하는 창업자들은 생성기를 사용하여 게이머를 끌어들이는 기억에 남는 이름을 만듭니다. 이 도구는 고객이 기대할 수 있는 재미있고 소셜한 게이밍 경험을 전달하는 이름을 제공합니다.',
    },
    {
      title: '인디 게임 스튜디오 브랜딩',
      description: '자신의 스튜디오를 런칭하는 독립 게임 개발자들은 생성기를 사용하여 붐비는 인디 게이밍 시장에서 돋보이는 독특한 브랜드 이름을 개발합니다. 이 도구는 게이밍 청중과 인지도와 신뢰성을 구축하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 게임 사업 이름이란 무엇인가요?', answer: '좋은 게임 사업 이름은 매력적이고 기억에 남아야 하며, 게임 장르나 스타일을 반영하고, 독특하고 브랜드화 가능해야 하며, 게이밍 문화에 어필해야 합니다. 게이밍 커뮤니티 내에서 쿨하고 신뢰할 수 있게 들려야 합니다.' },
    { question: '게임 스튜디오 이름에 만드는 게임 유형을 표시해야 하나요?', answer: '장르 힌트는 올바른 청중을 끌어들이는 데 도움이 될 수 있지만, 많은 성공적인 스튜디오가 특정 장르 언급 없이 연상적인 이름을 사용합니다. 전문화하고 싶은지 다양한 게임 유형에 유연하게 남고 싶은지 고려하세요.' },
    { question: '팬베이스 구축에 게임 사업 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 게이머들은 신뢰하는 스튜디오에 강한 애착을 갖습니다. 기억에 남고 쿨하게 들리는 이름은 브랜드 인지도와 충성도를 구축하는 데 도움이 됩니다. 이름은 게임 타이틀, 상품, 커뮤니티 콘텐츠에 나타납니다.' },
    { question: '현재 인기 있는 게임 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 판타지 어휘(렐름, 킹덤, 퀘스트), 테크 용어(픽셀, 디지털, 버추얼), 합성 이름(게임포지, 픽셀퍼펙트), 커뮤니티 중심 단어(길드, 콜렉티브, 스튜디오)가 포함됩니다. 독특하고 기억에 남는 이름이 가장 잘 공감합니다.' },
    { question: '게임 스튜디오에 제 이름을 사용해야 하나요?', answer: '개인 이름은 게이밍에서 덜 일반적이지만 개인 브랜드를 구축하는 인디 개발자에게 작동할 수 있습니다. "존스 게임즈" 같은 스튜디오 이름은 드뭅니다—창의적이고 연상적인 이름이 게이밍 문화에서 더 효과적인 경향이 있습니다.' },
    { question: '게임 사업 이름 가용성을 어떻게 확인하나요?', answer: '스팀, 앱 스토어, 게이밍 디렉토리, 소셜 미디어(트위치, 디스코드, 트위터), 도메인 이름, 상표 데이터베이스를 확인하세요. 또한 게이밍 뉴스 사이트와 리뷰 플랫폼에서 유사한 이름도 검색하세요.' },
    { question: '게임 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 게이밍 용어(퀘스트, 레벨, 픽셀, 아케이드), 어드벤처 단어(에픽, 히어로, 저니, 배틀), 테크 단어(디지털, 버추얼, 사이버), 판타지 단어(렐름, 킹덤, 매직), 성취 단어(빅토리, 챔피언, 엘리트)가 포함됩니다.' },
    { question: '이름이 캐주얼 게이머와 하드코어 게이머 중 누구에게 어필해야 하나요?', answer: '타겟 청중을 고려하세요. "엘리트"나 "프로" 같은 단어는 하드코어 게이머에게 어필하고, "펀"이나 "플레이" 같은 단어는 더 캐주얼하게 느껴집니다. 이름의 톤을 주요 청중에 맞추세요.' },
    { question: '게임 사업 이름이 상품에 어떻게 작동할 수 있나요?', answer: '상품에서 좋아 보이는 이름을 선택하세요—티셔츠, 포스터, 액세서리. 짧고 시각적으로 독특한 이름이 가장 잘 작동합니다. 이름이 로고와 제품에서 어떻게 보이는지 고려하세요.' },
    { question: '게임 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 게임 회사와 너무 유사한 이름, 돋보이지 않는 지나치게 일반적인 이름, 게임 장르를 제한하는 이름, 철자가 어려운 단어, 게이머에게 쿨하게 들리지 않는 이름, 게이밍 청중이 기대하는 흥분이 부족한 모든 것.' },
  ],
  howToChoose: {
    intro: '게임 비즈니스의 완벽한 이름을 선택하는 것은 게이밍 청중에게 공감하고 경쟁적인 인터랙티브 엔터테인먼트 시장에서 돋보이는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 게임 타이틀, 스토어프론트, 소셜 미디어, 상품에 나타납니다—게이머가 회사를 발견하고 기억하는 방식입니다.',
    steps: [
      { title: '게이밍 비즈니스 아이덴티티 정의', description: '이름 생성 전에 게임 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 게임을 만들거나 제공할 것인지(액션, 전략, 캐주얼, 인디), 타겟 게이머 청중은 누구인지(하드코어, 캐주얼, 모바일, 콘솔), 게이밍 접근 방식을 독특하게 만드는 것, 어떤 게이밍 플랫폼을 타겟으로 하는지, 스튜디오의 성격과 문화가 무엇인지 고려하세요. 답변에 따라 에픽하고 드라마틱한, 재미있고 캐주얼한, 테크 포워드하고 혁신적인, 또는 예술적이고 인디한 소리의 이름이 필요한지 결정됩니다.' },
      { title: '매력적이고 기억에 남는 어필 창조', description: '게이밍은 흥분과 참여에 관한 것입니다. 이름은 즉시 주목을 끌고, 게이밍의 흥분을 연상시키고, 게이머들 사이에서 기억에 남고, 쿨하고 신뢰할 수 있게 들리고, 게임을 탐험하고 싶은 욕구를 만들어야 합니다. 퀘스트, 에픽, 픽셀, 렐름 같은 단어는 즉각적인 게이밍 연상을 만듭니다.' },
      { title: '게이밍 문화와 연결', description: '게이밍에는 고유한 문화와 어휘가 있습니다. 게이머가 감사하는 단어를 사용하고, 게이밍 커뮤니티에 진정성 있게 들리고, 게이밍 아이덴티티와 공감하고, 기업적이거나 일반적인 소리를 피하고, 플레이어와 신뢰성을 구축하세요. 이름은 게이밍 세계에 속한 것처럼 느껴져야 합니다.' },
      { title: '게이밍 포커스 반영', description: '독특한 전문 분야가 있다면 통합하는 것을 고려하세요. 액션/어드벤처의 경우 에픽어드벤처스나 히어로포지. 전략의 경우 스트래티지렐름이나 택티컬게임즈. 캐주얼/모바일의 경우 플레이풀픽셀스나 펀팩토리. 인디/예술적의 경우 드림월드스튜디오스나 아티스틱아케이드. VR/몰입형의 경우 버추얼벤처스나 이머시브렐름스. 다른 장르로 확장할 여지와 구체성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '게이밍 플랫폼(스팀, 앱 스토어, 콘솔 스토어), 소셜 미디어(트위치, 디스코드, 트위터, 유튜브), 도메인 이름(스튜디오 웹사이트용), 상표 검색(게이밍 및 엔터테인먼트 카테고리), 유사한 스튜디오(기존 게임 회사와 혼란 피하기) 전반에 걸쳐 가용성을 확인하세요. 게이밍 비즈니스는 여러 플랫폼에 걸쳐 강력한 존재가 필요합니다.' },
      { title: '게이머와 테스트', description: '최종 결정 전에 타겟 게이머를 대표하는 사람들과 테스트하세요. 이 이름이 쿨한 게임 회사처럼 들리는지, 어떤 유형의 게임을 기대하는지, 소셜 미디어에서 이 스튜디오를 팔로우할 것인지, 한 번 듣고 기억에 남는지, 게임을 확인하고 싶게 만드는지 물어보세요. 피드백은 이름이 필요한 게이밍 어필을 가지고 있는지 드러냅니다.' },
      { title: '게이밍 전반에 걸친 브랜드 구축 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 여러 게임 타이틀과 프랜차이즈, 상품과 브랜드 제품, 콘텐츠 크리에이션과 스트리밍, 커뮤니티 구축과 이벤트, 다양한 게이밍 플랫폼으로 확장. 이상적인 게임 사업 이름은 매력적이고, 기억에 남고, 문화적으로 신뢰할 수 있으며, 만드는 흥미진진한 게이밍 경험을 완벽하게 포착하면서 성공을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '판타지퓨전', description: '판타지 요소를 놀라운 게이밍 경험에 융합합니다.' },
    { name: '플레이파라다이스', description: '플레이와 게이밍 즐거움의 낙원입니다.' },
    { name: '인터랙티브아일랜드', description: '인터랙티브 게이밍 경험의 섬입니다.' },
    { name: '버추얼벤처', description: '플레이어를 이동시키는 가상 게임 벤처입니다.' },
    { name: '픽셀피나클', description: '픽셀화된 게이밍 우수성의 정점에 있습니다.' },
    { name: '스트래티지생추어리', description: '전략 게임 열광자를 위한 성소입니다.' },
    { name: '어드벤처아케이드', description: '어드벤처 게이밍 경험의 아케이드입니다.' },
    { name: '게이밍갤럭시', description: '다양한 게이밍 옵션의 은하계입니다.' },
    { name: '펀퓨전', description: '모든 게이밍 경험에 재미를 융합합니다.' },
    { name: '에픽엘리먼트', description: '에픽한 요소와 경험을 가진 게임입니다.' },
    { name: '데어링다이나믹스', description: '플레이어를 스릴하게 하는 대담한 게임 다이나믹스입니다.' },
    { name: '픽셀플레이그라운드', description: '픽셀 퍼펙트 게이밍의 놀이터입니다.' },
    { name: '퀘스트쿼드런트', description: '퀘스트와 게이밍 어드벤처의 사분면입니다.' },
    { name: '게임그로브', description: '게이밍 경험과 함께 성장하는 숲입니다.' },
    { name: '쓰릴쓰레시홀드', description: '게이밍에서 스릴 임계값을 밀어붙입니다.' },
    { name: '버추얼비스타', description: '가상 게이밍 경험의 전망입니다.' },
    { name: '파워플레이', description: '게이머를 위한 파워풀한 플레이 경험입니다.' },
    { name: '펀피에스타', description: '재미있는 게이밍 순간의 피에스타입니다.' },
    { name: '어드벤처아레나', description: '어드벤처 게이밍 우수성의 아레나입니다.' },
    { name: '에픽엠파이어', description: '에픽 게이밍 경험의 제국입니다.' },
  ],
},

'graphic-design': {
  slug: 'graphic-design',
  name: '그래픽 디자인 사업 이름 생성기',
  title: '무료 AI 그래픽 디자인 사업 이름 아이디어 생성기',
  description: '디자인 스튜디오, 에이전시, 프리랜서를 위한 창의적이고 전문적인 이름을 생성하세요.',
  metaDescription: '매력적인 그래픽 디자인 사업 이름으로 성공을 디자인하세요. 디자인 스튜디오, 에이전시, 프리랜서를 위한 창의적이고 전문적인 이름을 만드세요. AI 도구가 무료로 해드립니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '그래픽 디자인 비즈니스를 설명하세요...',
  inputPlaceholder: '예: 브랜드 아이덴티티와 패키지 디자인을 전문으로 하는 부티크 디자인 스튜디오',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['크리에이티브 & 아티스틱', '프로페셔널 & 코퍼레이트', '모던 & 미니멀', '볼드 & 이노베이티브'], default: '크리에이티브 & 아티스틱', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the creative and design services industry. Your role is to generate creative, professional business names that convey artistic expertise, innovation, and visual excellence for graphic design studios, creative agencies, and design freelancers.

GRAPHIC DESIGN INDUSTRY CONTEXT:

The graphic design business industry encompasses:

- Graphic design studios and agencies
- Freelance graphic designers
- Brand identity specialists
- Web design agencies
- Print design services
- Packaging design studios
- Motion graphics companies
- Illustration services
- UI/UX design firms
- Creative consulting agencies

NAME CHARACTERISTICS FOR GRAPHIC DESIGN BUSINESSES:

1. **Creativity and Originality**
   - Names should showcase creative thinking
   - Suggest innovative, artistic approaches
   - Demonstrate design sensibility
   - Examples: Creative, Artistry, Design, Vision, Imagine

2. **Professional and Trustworthy**
   - Sound credible and reliable
   - Appropriate for business clients
   - Communicate expertise
   - Build confidence in capabilities

3. **Versatile and Timeless**
   - Accommodate business evolution
   - Avoid dating quickly
   - Work across design disciplines
   - Maintain relevance over time

4. **Visual and Aesthetic Appeal**
   - Names that evoke visual beauty
   - Suggest the design work you create
   - Communicate aesthetic sensibility
   - Connect to visual communication

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a graphic design business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '그래픽 디자인 스튜디오 런칭',
      description: '자신의 스튜디오를 런칭하는 디자이너들은 그래픽 디자인 사업 이름 생성기를 사용하여 창의성과 전문성을 전달하는 이름을 찾습니다. 생성기는 스튜디오의 창의적 접근 방식을 보여주면서 품질 디자인 작업을 찾는 고객을 끌어들이는 이름을 제공합니다.',
    },
    {
      title: '프리랜서 디자이너 브랜딩',
      description: '개인 브랜드를 구축하는 프리랜서 그래픽 디자이너들은 생성기를 사용하여 창의적인 전문가로 포지셔닝하는 기억에 남는 사업 이름을 만듭니다. 이 도구는 포트폴리오, 명함, 고객 프레젠테이션 전반에서 작동하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '크리에이티브 에이전시 개발',
      description: '크리에이티브 에이전시를 구축하는 창업자들은 생성기를 사용하여 창의성과 비즈니스 역량을 모두 전달하는 이름을 개발합니다. 이 도구는 예술적 신뢰성을 유지하면서 기업 고객에게 어필하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 그래픽 디자인 사업 이름이란 무엇인가요?', answer: '좋은 그래픽 디자인 사업 이름은 예술적 사고를 보여주는 창의적이고 독창적이어야 합니다. 또한 전문적이고 신뢰할 수 있어야 하며, 다재다능하고 시대를 초월하며, 시각적이고 미적 매력을 가져야 합니다—본질적으로 고객이 디자이너에게 원하는 품질을 구현해야 합니다.' },
    { question: '디자인 사업 이름에 "디자인"이나 "크리에이티브"를 포함해야 하나요?', answer: '디자인 관련 단어를 포함하면 비즈니스 유형을 즉시 명확히 하여 검색 가능성과 첫인상에 도움이 됩니다. 그러나 창의적인 추상 이름도 예술적 감성을 효과적으로 전달하면 작동할 수 있습니다.' },
    { question: '고객 유치에 디자인 사업 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 비즈니스 이름은 종종 고객이 보는 창의적 판단의 첫 번째 예입니다. 잘 만들어진 이름은 디자인 작업에서 기대할 수 있는 창의성과 전문성을 보여줍니다.' },
    { question: '현재 인기 있는 그래픽 디자인 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 복합 창의적 단어(픽셀크래프트, 디자인랩), 단일 연상 단어(에이펙스, 노바, 엠버), 스튜디오/랩 용어, 디자인 미학을 반영하는 미니멀하고 깔끔한 이름이 포함됩니다. 시대를 초월한 전문적인 이름이 가장 잘 유지됩니다.' },
    { question: '디자인 사업에 제 이름을 사용해야 하나요?', answer: '개인 이름은 개인 평판을 구축하는 프리랜서와 디자이너에게 잘 맞습니다. "제인 스미스 디자인" 같은 이름은 개인 브랜드 인지도를 구축할 수 있습니다. 그러나 스튜디오 이름은 성장과 팀 확장에 더 많은 유연성을 제공합니다.' },
    { question: '디자인 사업 이름 가용성을 어떻게 확인하나요?', answer: '도메인 이름(.com과 .design, .studio 같은 디자인 전용 도메인), 소셜 미디어 핸들(비핸스, 드리블, 인스타그램), 사업자 등록, 상표 데이터베이스를 확인하세요. 또한 디자인 디렉토리와 포트폴리오 플랫폼도 검색하세요.' },
    { question: '그래픽 디자인 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 창의적 용어(디자인, 크리에이트, 아티스트리, 크래프트), 시각적 용어(픽셀, 벡터, 팔레트, 휴), 전문 용어(스튜디오, 랩, 에이전시, 웍스), 품질 용어(프리미어, 엘리트, 마스터, 에이펙스)가 포함됩니다.' },
    { question: '이름에 디자인 전문 분야를 반영해야 하나요?', answer: '웹 디자인, 브랜드 아이덴티티, 패키징을 전문으로 한다면 반영하면 특정 고객을 끌어들일 수 있습니다. 그러나 더 넓은 이름은 서비스가 진화해도 유연성을 제공합니다. 전문화 전달과 성장 잠재력의 균형을 맞추세요.' },
    { question: '디자인 사업 이름이 창의성을 어떻게 보여줄 수 있나요?', answer: '창의적인 이름은 예상치 못한 조합, 영리한 언어유희, 또는 연상적인 이미지를 사용합니다. 어떤 비즈니스든 설명할 수 있는 일반적인 용어를 피하세요. 이름은 고객 프로젝트에 가져오는 창의적 사고를 암시해야 합니다.' },
    { question: '디자인 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 창의성을 보여주지 않는 일반적인 이름, 빨리 구식이 되는 과도하게 트렌디한 용어, 철자나 발음하기 어려운 이름, 서비스 확장을 제한하는 이름, 비즈니스 고객에게 너무 캐주얼하거나 창의적 어필에 너무 기업적으로 느껴지는 이름.' },
  ],
  howToChoose: {
    intro: '그래픽 디자인 비즈니스의 완벽한 이름을 선택하는 것은 창의적 우수성을 찾는 고객을 끌어들이는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 포트폴리오, 명함, 제안서, 고객 프레젠테이션에 나타납니다—창의적 판단의 첫 번째 시연입니다.',
    steps: [
      { title: '디자인 비즈니스 아이덴티티 정의', description: '이름 생성 전에 디자인 비즈니스의 포지셔닝을 명확히 하세요. 주로 어떤 디자인 서비스를 제공할 것인지(브랜드, 웹, 프린트, 모션), 이상적인 고객은 누구인지(스타트업, 대기업, 에이전시, 개인), 디자인 접근 방식을 독특하게 만드는 것, 디자인 미학과 철학이 무엇인지, 솔로 프랙티스를 구축하는지 확장 가능한 스튜디오를 구축하는지 고려하세요. 답변에 따라 예술적이고 부티크한, 기업적이고 전문적인, 혁신적이고 최첨단인, 또는 개인적이고 접근하기 쉬운 소리의 이름이 필요한지 결정됩니다.' },
      { title: '창의성과 전문성 균형', description: '디자인 비즈니스는 두 품질 모두 필요합니다. 이름은 창의적 사고를 보여주면서 고객 신뢰도 구축하고, 디자인 감성을 보여주고, 비즈니스 맥락에 적절하게 유지되고, 다양한 고객 유형에 걸쳐 작동해야 합니다. 비전문적으로 보이는 너무 창의적인 이름이나 비창의적으로 보이는 너무 기업적인 이름은 피하세요.' },
      { title: '시각적이고 미적 매력 창조', description: '이름은 디자인 품질을 연상시켜야 합니다. 시각적 아름다움과 미학을 암시하고, 말할 때 좋게 들리고, 서면으로 좋아 보이고, 자신의 브랜딩에서 작동하고, 시각적 커뮤니케이션과 연결되어야 합니다. 이름이 로고와 포트폴리오에 어떻게 나타날지 고려하세요.' },
      { title: '디자인 포커스 반영', description: '전문 분야가 있다면 통합하는 것을 고려하세요. 브랜드/아이덴티티의 경우 브랜드포지나 아이덴티티잉크. 웹/디지털의 경우 픽셀크래프트나 디지털캔버스. 프린트/패키징의 경우 프린트퍼펙트나 패키지디자인코. 모션/애니메이션의 경우 모션메이커스나 애니메이트스튜디오. 일반의 경우 크리에이티브스튜디오나 디자인웍스. 서비스 진화에 대한 유연성과 구체성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com과 .design, .studio 같은 디자인 전용 도메인), 포트폴리오 플랫폼(비핸스, 드리블 가용성), 소셜 미디어(인스타그램, 핀터레스트, 링크드인), 사업자 등록(주 요구 사항), 상표 검색(디자인 및 크리에이티브 서비스 카테고리) 전반에 걸쳐 가용성을 확인하세요. 디자이너는 강력한 시각적 플랫폼 존재가 필요합니다.' },
      { title: '잠재 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 품질 디자인 스튜디오처럼 들리는지, 이 회사에 디자인 작업을 의뢰할 것인지, 창의적이고 전문적으로 느껴지는지, 한 번 듣고 기억에 남는지, 어떤 유형의 디자인 작업을 기대하는지 물어보세요. 피드백은 이름이 올바른 창의적이고 전문적인 인상을 만드는지 드러냅니다.' },
      { title: '브랜드 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 디자인 서비스 추가, 팀과 역량 성장, 관련 크리에이티브 서비스로 확장, 인정받는 크리에이티브 브랜드 구축, 잠재적 에이전시 성장 또는 파트너십. 이상적인 그래픽 디자인 사업 이름은 창의적이고, 전문적이고, 기억에 남으며, 제공하는 디자인 우수성을 완벽하게 보여주면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '픽셀파이오니어', description: '그래픽 디자인에서 혁신을 개척합니다.' },
    { name: '디자인드림스케이프', description: '디자인 꿈이 현실이 되는 곳입니다.' },
    { name: '크리에이티비티코브', description: '창의적인 아이디어가 번성하는 만입니다.' },
    { name: '일러스트레이션아일랜드', description: '일러스트레이션과 디자인 우수성의 허브입니다.' },
    { name: '아티스트리아치', description: '종합적인 디자인 예술성을 선보이는 아치입니다.' },
    { name: '비전보야지', description: '창의적인 디자인 비전으로의 여정입니다.' },
    { name: '에스테틱아크', description: '아름답고 미적인 디자인을 위한 방주입니다.' },
    { name: '팔레트파라다이스', description: '색상이 탁월한 디자인을 만나는 곳입니다.' },
    { name: '스케치생추어리', description: '스케치와 디자인 애호가를 위한 성소입니다.' },
    { name: '그래픽그로브', description: '그래픽 디자인 우수성으로 번성하는 숲입니다.' },
    { name: '렌더리프', description: '렌더링과 디자인의 풍부한 암초입니다.' },
    { name: '벡터볼트', description: '벡터 디자인 보물의 금고입니다.' },
    { name: '이매지네이션임프레션', description: '상상력을 디자인 인상으로 변환합니다.' },
    { name: '포맷포지', description: '전문성으로 디자인 포맷을 단조합니다.' },
    { name: '크리에이티비티크래들', description: '디자인 아이디어를 위한 양육 환경입니다.' },
    { name: '휴하버', description: '다채로운 디자인 컨셉으로 가득 찬 항구입니다.' },
    { name: '디자인듀', description: '신선하고 아침 영감의 디자인 작업입니다.' },
    { name: '비전비스타', description: '디자인 가능성의 넓은 전망입니다.' },
    { name: '픽셀팔러', description: '디자인 열광자를 위한 만남의 장소입니다.' },
    { name: '아티산에이펙스', description: '숙련된 장인 디자인의 정점입니다.' },
  ],
},

'hair': {
  slug: 'hair',
  name: '헤어 사업 이름 생성기',
  title: '무료 AI 헤어 사업 이름 아이디어 생성기',
  description: '살롱, 스타일리스트, 헤어 제품 비즈니스를 위한 스타일리시하고 기억에 남는 이름을 생성하세요.',
  metaDescription: '더 이상 헤어 사업 이름으로 고민하지 마세요! AI 생성기가 살롱, 스타일리스트, 헤어 제품 비즈니스를 위한 독특하고 스타일리시한 이름을 제작합니다. 무료이고, 창의적이고, 기억에 남습니다! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '헤어 비즈니스를 설명하세요...',
  inputPlaceholder: '예: 컬러 트리트먼트와 브라이덜 스타일링을 전문으로 하는 럭셔리 헤어 살롱',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['글래머러스 & 럭스', '트렌디 & 모던', '내추럴 & 오가닉', '클래식 & 엘레강트'], default: '글래머러스 & 럭스', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the beauty and hair care industry. Your role is to generate stylish, memorable business names that convey expertise, beauty, and transformation for hair salons, stylists, and hair product businesses.

HAIR BUSINESS INDUSTRY CONTEXT:

The hair business industry encompasses:

- Hair salons and styling studios
- Barbershops
- Hair product brands and lines
- Hair extension services
- Hair coloring specialists
- Natural and organic hair care
- Mobile hair stylists
- Hair education and training
- Hair accessory businesses
- Specialty hair services (bridal, ethnic hair)

NAME CHARACTERISTICS FOR HAIR BUSINESSES:

1. **Trendy and Chic**
   - Names should evoke modern style
   - Suggest fashionable, current approaches
   - Appeal to style-conscious clients
   - Examples: Chic, Vogue, Style, Glam, Luxe

2. **Memorable and Striking**
   - Stand out in competitive hair market
   - Easy to remember and recommend
   - Create strong first impressions
   - Catch attention effectively

3. **Reflects Hair Expertise**
   - Communicate your hair specialty
   - Whether cutting, coloring, styling, or products
   - Align with target client expectations
   - Build confidence in skills

4. **Beauty and Transformation**
   - Hair services transform clients
   - Names should suggest beauty enhancement
   - Evoke confidence and glamour
   - Connect to self-expression through hair

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a hair business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '헤어 살롱 런칭',
      description: '헤어 살롱을 오픈하는 창업자들은 헤어 사업 이름 생성기를 사용하여 고객이 기대할 수 있는 스타일, 전문성, 변화의 경험을 전달하는 이름을 찾습니다. 부티크 살롱이나 풀 서비스 스튜디오 중 어떤 것을 런칭하든, 생성기는 스타일 의식이 있는 고객을 끌어들이는 인상적인 이름을 제공합니다.',
    },
    {
      title: '독립 스타일리스트 브랜딩',
      description: '자신의 고객 기반을 구축하는 독립 헤어 스타일리스트들은 생성기를 사용하여 숙련된 전문가로 포지셔닝하는 기억에 남는 브랜드 이름을 만듭니다. 이 도구는 명함, 소셜 미디어, 살롱 스위트 간판 전반에서 작동하는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '헤어 제품 라인 개발',
      description: '헤어 케어 제품 라인을 만드는 창업자들은 생성기를 사용하여 품질과 뷰티 결과를 전달하는 브랜드 이름을 개발합니다. 이 도구는 패키징, 소매, 뷰티 마케팅 캠페인에 적합한 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 헤어 사업 이름이란 무엇인가요?', answer: '좋은 헤어 사업 이름은 트렌디하고 시크해야 하며, 기억에 남고 인상적이어야 하며, 헤어 전문성을 반영해야 합니다. 아름다움과 변화를 연상시켜야 합니다—헤어 서비스가 고객에게 제공하는 핵심입니다.' },
    { question: '헤어 살롱 이름에 "살롱"이나 "헤어"를 포함해야 하나요?', answer: '헤어 관련 단어를 포함하면 검색 가시성과 즉각적인 명확성에 도움이 될 수 있습니다. 그러나 많은 성공적인 살롱이 명시적인 헤어 언급 없이 창의적인 이름을 사용합니다. 타겟 시장과 명확성이 더 중요한지 창의성이 더 중요한지 고려하세요.' },
    { question: '고객 유치에 헤어 사업 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 헤어 서비스는 개인적이고 스타일 중심적입니다. 이름은 고객이 기대할 수 있는 경험, 스타일 수준, 전문성에 대한 기대를 만듭니다. 스타일리시한 이름은 스타일 의식이 있는 고객을 끌어들입니다.' },
    { question: '현재 인기 있는 헤어 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 질감 단어(글로시, 실크, 러스트러스), 헤어 특정 용어(트레스, 록스, 메인), 글래머 어휘(글램, 럭스, 쉬크), 변화 단어(리뉴, 트랜스폼, 엘리베이트)가 포함됩니다. 짧고 기억에 남는 이름이 소셜 미디어에서 잘 수행됩니다.' },
    { question: '헤어 사업에 제 이름을 사용해야 하나요?', answer: '개인 이름은 헤어 산업에서 일반적이며 개인 평판 인지도를 구축합니다. "살롱 바이 사라"나 "제니퍼스 헤어 스튜디오"는 개인적인 연결을 만들 수 있습니다. 그러나 비개인적 이름은 매각이나 확장에 유연성을 제공합니다.' },
    { question: '헤어 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(헤어 비즈니스에 인스타그램 필수), 살롱 디렉토리, 상표 데이터베이스를 확인하세요. 또한 지역의 유사한 살롱 이름도 검색하세요.' },
    { question: '헤어 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 헤어 용어(록스, 트레스, 스트랜드, 메인), 뷰티 단어(글래머, 래디언트, 고저스), 질감 단어(실크, 글로스, 러스트러스), 스타일 단어(쉬크, 보그, 엘레강트), 변화 단어(트랜스폼, 리뉴, 퍼펙트)가 포함됩니다.' },
    { question: '이름에 헤어 전문 분야를 반영해야 하나요?', answer: '컬러, 익스텐션, 내추럴 헤어를 전문으로 한다면 반영하면 타겟 시장을 끌어들일 수 있습니다. 그러나 더 넓은 이름은 서비스를 추가해도 유연성을 제공합니다. 전문 분야 전달과 성장 잠재력의 균형을 맞추세요.' },
    { question: '헤어 사업 이름이 타겟 고객에게 어떻게 어필할 수 있나요?', answer: '이상적인 고객의 자기 이미지를 고려하세요. 럭셔리 추구자는 우아한 이름에 반응합니다. 트렌디한 고객은 패션 포워드 이름을 좋아합니다. 내추럴 헤어 고객은 진정성 있고 임파워링한 이름을 감사합니다. 이름을 타겟 고객의 아이덴티티에 맞추세요.' },
    { question: '헤어 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 스타일리시하기보다 구식으로 들리는 이름, 철자가 어려운 단어, 지역 경쟁자와 너무 유사한 이름, 서비스 확장을 제한하는 이름, 지나치게 일반적인 살롱 이름, 스타일과 전문성을 전달하지 않는 모든 것.' },
  ],
  howToChoose: {
    intro: '헤어 비즈니스의 완벽한 이름을 선택하는 것은 헤어 변화와 뷰티 향상을 찾는 고객을 끌어들이는 스타일리시한 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 살롱 간판, 소셜 미디어, 명함, 마케팅 자료에 나타납니다—고객이 기대할 수 있는 스타일 경험을 전달합니다.',
    steps: [
      { title: '헤어 비즈니스 아이덴티티 정의', description: '이름 생성 전에 헤어 비즈니스의 포지셔닝을 명확히 하세요. 주로 어떤 헤어 서비스를 제공할 것인지(커팅, 컬러링, 스타일링, 전문 분야), 이상적인 고객은 누구인지(패션 포워드, 클래식, 내추럴 헤어, 다양성), 헤어 접근 방식을 독특하게 만드는 것, 어떤 살롱 분위기를 만들고 싶은지, 어떤 가격대와 스타일 수준을 타겟으로 하는지 고려하세요. 답변에 따라 럭셔리하고 독점적인, 트렌디하고 엣지 있는, 내추럴하고 오가닉한, 또는 클래식하고 엘레강트한 소리의 이름이 필요한지 결정됩니다.' },
      { title: '스타일과 뷰티 구현', description: '헤어 비즈니스는 변화와 아름다움을 판매합니다. 이름은 모던 스타일을 연상시키고, 제공하는 뷰티 향상을 암시하고, 패셔너블하고 현재적으로 들리고, 변화에 대한 욕구를 만들고, 자기 표현과 연결되어야 합니다. 글램, 럭스, 스타일, 래디언트 같은 단어는 즉각적인 뷰티 연상을 만듭니다.' },
      { title: '기억에 남고 인상적인 어필 창조', description: '경쟁적인 시장에서 돋보이는 것이 중요합니다. 이름은 기억에 남고 인상적이어야 하고, 기억하고 추천하기 쉬워야 하고, 강한 첫인상을 만들고, 입소문 추천에 잘 작동하고, 일반적인 살롱 이름과 차별화되어야 합니다. 기억력을 테스트하세요—한 번 듣고 기억할 수 있나요?' },
      { title: '헤어 전문성 반영', description: '독특한 전문 분야가 있다면 통합하는 것을 고려하세요. 컬러 스페셜리스트의 경우 컬러크래프트나 크로마스튜디오. 내추럴/오가닉의 경우 내추럴트레스나 오가닉글로우. 익스텐션의 경우 럭스렝스나 익스텐션엘레강스. 컬리/텍스처드의 경우 컬코브나 텍스처스튜디오. 브라이덜의 경우 브라이덜뷰티나 웨딩트레시스. 서비스 확장 여지와 전문 분야 표시의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(웹사이트용), 소셜 미디어(헤어 비즈니스에 인스타그램 필수), 살롱 디렉토리(옐프, 스타일시트 등), 사업자 등록(주 요구 사항), 상표 검색(뷰티 및 살롱 카테고리) 전반에 걸쳐 가용성을 확인하세요. 헤어 비즈니스는 시각적 소셜 미디어에 크게 의존하므로 인스타그램 가용성이 중요합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 이상적인 고객을 대표하는 사람들과 테스트하세요. 이 이름이 스타일리시한 살롱처럼 들리는지, 이 이름을 기반으로 예약할 것인지, 어떤 가격 수준을 기대하는지, 기억하고 친구들에게 말하기 쉬운지, 자신의 스타일처럼 느껴지는지 물어보세요. 피드백은 이름이 올바른 스타일 인상을 만드는지 드러냅니다.' },
      { title: '브랜드 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 헤어 서비스 추가, 추가 지점 오픈, 제품 라인 런칭, 교육 및 트레이닝 구축, 인정받는 뷰티 브랜드 창조. 이상적인 헤어 사업 이름은 스타일리시하고, 기억에 남고, 전문성 중심적이며, 제공하는 뷰티 변화 경험을 완벽하게 포착하면서 성장을 위한 브랜드 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '시어샤인', description: '고객에게 빛나고 전문적으로 커팅된 스타일을 제공합니다.' },
    { name: '트레스트레져', description: '머리카락을 그것이 마땅히 받아야 할 보물로 대합니다.' },
    { name: '록스럭셔리', description: '아름다운 머릿결을 위한 럭셔리한 트리트먼트입니다.' },
    { name: '글로시그로브', description: '글로시하고 화려한 머리를 전달하는 것으로 유명합니다.' },
    { name: '스타일스트랜즈', description: '독특하고 매력적인 방식으로 머리카락을 스타일링합니다.' },
    { name: '컬코브', description: '아름다운 컬리 헤어 스타일링을 전문으로 합니다.' },
    { name: '실켄생추어리', description: '실크처럼 부드러운 머리를 달성하기 위한 성소입니다.' },
    { name: '래디언트라푼젤', description: '고객을 빛나는 라푼젤로 변신시킵니다.' },
    { name: '메인매트릭스', description: '종합적인 헤어 서비스의 매트릭스입니다.' },
    { name: '벨벳바인스', description: '벨벳처럼 부드럽고 아름다운 헤어 스타일링입니다.' },
    { name: '포시플레이츠', description: '포시하고 엘레강트한 플레이트 헤어스타일입니다.' },
    { name: '엘레강스에코', description: '모든 헤어스타일에서 엘레강스를 반향합니다.' },
    { name: '스트랜즈스피어', description: '아름다운 헤어 스타일링의 영역입니다.' },
    { name: '러스트러스록스', description: '빛나는 윤기 있는 머릿결을 제공합니다.' },
    { name: '그레이스풀글로스', description: '우아함으로 글로시한 머리를 전달합니다.' },
    { name: '피어스프린지', description: '피어스하고 패셔너블한 앞머리 스타일입니다.' },
    { name: '볼드브레이즈', description: '볼드하고 아름다운 땋은 스타일입니다.' },
    { name: '스타일리시쉬머', description: '아름다운 쉬머가 있는 스타일리시한 머리입니다.' },
    { name: '매그니피선트메인스', description: '머리를 화려한 갈기로 변신시킵니다.' },
    { name: '헤븐리하이라이트', description: '헤븐리한 헤어 하이라이팅 서비스입니다.' },
  ],
},

'health': {
  slug: 'health',
  name: '건강 사업 이름 생성기',
  title: '무료 AI 건강 사업 이름 아이디어 생성기',
  description: '웰니스 센터, 헬스 프랙티스, 헬스케어 서비스를 위한 신뢰할 수 있고 자비로운 이름을 생성하세요.',
  metaDescription: '무료 AI 생성기의 완벽한 이름으로 건강 비즈니스에 활력을 불어넣으세요. 웰니스 센터, 헬스 프랙티스, 헬스케어 서비스를 위한 신뢰할 수 있고 자비로운 이름을 만드세요. 지금 사용해보세요! 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  inputLabel: '건강 비즈니스를 설명하세요...',
  inputPlaceholder: '예: 통합 건강 서비스와 영양 상담을 제공하는 홀리스틱 웰니스 센터',
  buttonText: '이름 생성',
  maxLength: 2048,
  options: [
    { name: 'style', label: '이름 스타일', choices: ['프로페셔널 & 클리니컬', '홀리스틱 & 웰니스', '케어링 & 컴패셔닛', '모던 & 이노베이티브'], default: '프로페셔널 & 클리니컬', type: 'select' },
    { name: 'variants', label: '생성', choices: ['5개 이름', '10개 이름', '15개 이름'], default: '10개 이름', type: 'select' },
  ],
  systemPrompt: `You are an expert brand naming consultant specializing in the health and wellness industry. Your role is to generate credible, compassionate business names that convey expertise, care, and commitment to wellbeing for health practices, wellness centers, and healthcare service businesses.

HEALTH BUSINESS INDUSTRY CONTEXT:

The health business industry encompasses:

- Medical practices and clinics
- Wellness centers and spas
- Mental health practices
- Physical therapy and rehabilitation
- Chiropractic and alternative medicine
- Nutritional counseling services
- Health coaching businesses
- Holistic health practitioners
- Senior health services
- Corporate wellness programs

NAME CHARACTERISTICS FOR HEALTH BUSINESSES:

1. **Credible and Compassionate**
   - Names should convey medical/health expertise
   - Suggest caring, patient-focused approach
   - Build trust for health decisions
   - Examples: Care, Health, Wellness, Vital, Healing

2. **Clear and Concise**
   - Easy to understand and remember
   - Communicate health focus immediately
   - Work in professional healthcare contexts
   - Avoid confusion about services

3. **Reflects Specializations**
   - Communicate your health focus
   - Whether physical, mental, holistic, or specialized
   - Align with target patient expectations
   - Build appropriate service expectations

4. **Trust and Professionalism**
   - Health decisions require trust
   - Names should sound reliable
   - Communicate expertise and qualifications
   - Appropriate for healthcare environments

OUTPUT REQUIREMENTS:
For each name generated, provide:
- The business name
- A brief explanation of why it works for a health business

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  useCases: [
    {
      title: '웰니스 센터 런칭',
      description: '웰니스 센터를 오픈하는 창업자들은 건강 사업 이름 생성기를 사용하여 종합적인 웰빙 서비스를 전달하는 이름을 찾습니다. 통합 건강, 피트니스, 또는 홀리스틱 서비스 중 어떤 것을 제공하든, 생성기는 건강 의식이 있는 고객을 끌어들이는 신뢰할 수 있는 이름을 제공합니다.',
    },
    {
      title: '헬스케어 프랙티스 브랜딩',
      description: '자신의 프랙티스를 런칭하는 헬스케어 전문가들은 생성기를 사용하여 전문성과 자비심을 전달하는 전문적인 이름을 만듭니다. 이 도구는 따뜻하고 접근하기 쉬우면서 의료 맥락에 적절한 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '헬스 코칭 비즈니스 개발',
      description: '헬스 코치와 웰니스 컨설턴트들은 생성기를 사용하여 고객 웰빙에 대한 헌신을 전달하는 이름을 개발합니다. 이 도구는 코칭, 컨설팅, 교육 건강 서비스 전반에 걸쳐 작동하는 이름을 제공합니다.',
    },
  ],
  faqs: [
    { question: '좋은 건강 사업 이름이란 무엇인가요?', answer: '좋은 건강 사업 이름은 신뢰할 수 있고 자비로워야 하며, 명확하고 간결해야 하며, 건강 전문 분야를 반영해야 합니다. 신뢰를 구축해야 합니다—사람들이 중요한 건강 결정을 내리는 비즈니스에 필수적입니다.' },
    { question: '건강 사업 이름에 "건강"이나 "웰니스"를 포함해야 하나요?', answer: '건강 관련 단어를 포함하면 비즈니스 유형을 즉시 명확히 하고 검색 가시성에 도움이 됩니다. 헬스케어 프랙티스의 경우, 건강 서비스의 신뢰 민감한 특성 때문에 명확성이 창의성보다 더 중요한 경우가 많습니다.' },
    { question: '환자 신뢰 구축에 건강 사업 이름이 얼마나 중요한가요?', answer: '매우 중요합니다. 건강 결정에는 신뢰가 필요합니다. 이름은 전문성, 전문 지식, 케어를 전달해야 합니다. 신뢰할 수 있는 이름은 환자가 건강 필요에 대해 서비스를 선택하는 데 자신감을 갖도록 도와줍니다.' },
    { question: '현재 인기 있는 건강 사업 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 웰니스 어휘(웰니스, 웰빙, 쓰라이브), 활력 단어(바이탈, 라이프, 플러리시), 홀리스틱 용어(홀, 밸런스, 하모니), 케어 중심 단어(너처, 서포트, 힐)가 포함됩니다. 전문적이고 신뢰할 수 있는 이름이 가장 잘 수행됩니다.' },
    { question: '건강 프랙티스에 제 이름을 사용해야 하나요?', answer: '개인 이름은 헬스케어에서 일반적이며 의료인 인지도를 구축합니다. "닥터 스미스 웰니스"나 "존슨 헬스"는 개인적인 신뢰를 만듭니다. 그러나 한 의료인을 넘어 확장하려는 비즈니스의 경우, 더 넓은 이름이 더 많은 유연성을 제공합니다.' },
    { question: '건강 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 헬스케어 디렉토리, 전문 라이선스 요구 사항, 소셜 미디어 핸들, 상표 데이터베이스를 확인하세요. 또한 전문 분야 지역에서 기존 프랙티스와 충돌이 없는지 확인하세요.' },
    { question: '건강 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 건강 용어(헬스, 웰니스, 힐링, 케어), 활력 단어(바이탈, 라이프, 쓰라이브, 플러리시), 케어 단어(컴패션, 너처, 서포트), 전문 용어(센터, 클리닉, 파트너스), 긍정적 결과(옵티멀, 베터, 리뉴드)가 포함됩니다.' },
    { question: '이름에 건강 전문 분야를 반영해야 하나요?', answer: '정신 건강, 물리 치료, 영양을 전문으로 한다면 반영하면 올바른 환자를 끌어들일 수 있습니다. 그러나 더 넓은 이름은 서비스를 확장해도 유연성을 제공합니다. 전문 분야 명확성과 성장 잠재력의 균형을 맞추세요.' },
    { question: '건강 사업 이름에 대한 규제 고려 사항이 있나요?', answer: '네. 일부 헬스케어 직업에는 네이밍 규정이 있습니다. 라이선싱 보드에 요구 사항이나 제한 사항이 있는지 확인하세요. 자격이나 서비스에 대해 오해를 줄 수 있는 이름은 피하세요.' },
    { question: '건강 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 비전문적이거나 신뢰할 수 없게 들리는 이름, 환자를 혼란시키는 지나치게 창의적인 이름, 서비스나 자격에 대해 오해를 줄 수 있는 이름, 철자가 어려운 의학 용어, 전문성과 케어를 전달하지 않는 모든 것.' },
  ],
  howToChoose: {
    intro: '건강 비즈니스의 완벽한 이름을 선택하는 것은 사람들이 웰빙에 대해 자신감 있는 결정을 내리도록 돕는 신뢰할 수 있는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 간판, 의뢰 커뮤니케이션, 환자 자료에 나타납니다—사람들이 헬스케어 서비스를 인식하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '건강 비즈니스 아이덴티티 정의', description: '이름 생성 전에 건강 비즈니스의 포지셔닝을 명확히 하세요. 어떤 건강 서비스를 제공할 것인지(의료, 웰니스, 정신 건강, 전문), 이상적인 환자/고객은 누구인지(인구 통계, 건강 필요, 선호도), 건강 접근 방식을 독특하게 만드는 것, 어떤 분위기를 만들고 싶은지, 어느 정도의 임상 대 웰니스 포커스를 가지고 있는지 고려하세요. 답변에 따라 임상적이고 전문적인, 따뜻하고 홀리스틱한, 전문화되고 전문가적인, 또는 접근하기 쉽고 커뮤니티 중심적인 소리의 이름이 필요한지 결정됩니다.' },
      { title: '신뢰와 신뢰성 구축', description: '건강 결정에는 자신감이 필요합니다. 이름은 신뢰할 수 있고 전문가적으로 들리고, 자격을 적절히 전달하고, 건강 역량에 대한 신뢰를 구축하고, 신뢰할 수 있고 전문적인 서비스를 암시하고, 헬스케어 맥락에 적절해야 합니다. 따뜻함과 전문성의 균형을 맞추세요—사람들은 케어하는 전문가를 원합니다.' },
      { title: '자비심과 케어 전달', description: '건강 서비스는 개인적입니다. 이름은 자비로운 케어를 암시하고, 환자 중심적 접근을 전달하고, 환영하고 지지적으로 느껴지고, 치유 관계를 암시하고, 전문성과 함께 감정적 편안함을 구축해야 합니다. 케어, 웰니스, 너처 같은 단어는 신뢰할 수 있는 이름에 따뜻함을 더합니다.' },
      { title: '건강 전문 분야 반영', description: '특정 포커스가 있다면 통합하는 것을 고려하세요. 정신 건강의 경우 마인드웰니스나 클리어마인드케어. 물리 치료의 경우 무브웰이나 리커버리로드. 홀리스틱의 경우 홀헬스나 인테그레이티브웰니스. 영양의 경우 너리시헬스나 바이탈뉴트리션. 일반 웰니스의 경우 웰니스웍스나 쓰라이브헬스. 잠재적 서비스 확장과 전문 분야 명확성의 균형을 맞추세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(프랙티스 웹사이트용), 헬스케어 디렉토리(헬스그레이드, 조닥 등), 전문 라이선싱(네이밍 요구 사항), 사업자 등록(주 요구 사항), 상표 검색(헬스케어 카테고리) 전반에 걸쳐 가용성을 확인하세요. 헬스케어 비즈니스는 전문적인 온라인 존재와 디렉토리 목록이 필요합니다.' },
      { title: '잠재 환자와 테스트', description: '최종 결정 전에 타겟 환자를 대표하는 사람들과 테스트하세요. 이 이름이 신뢰할 수 있는 건강 제공자처럼 들리는지, 이 프랙티스의 전문성에 자신감을 느끼는지, 케어링하고 지지적으로 느껴지는지, 기억하고 추천하기 쉬운지, 어떤 건강 서비스를 기대하는지 물어보세요. 피드백은 이름이 올바른 신뢰와 케어 인상을 만드는지 드러냅니다.' },
      { title: '전문적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 건강 서비스 추가, 의료인 팀 성장, 추가 지점 오픈, 관련 웰니스 서비스로 확장, 인정받는 건강 브랜드 구축. 이상적인 건강 사업 이름은 신뢰할 수 있고, 자비롭고, 명확하며, 제공하는 케어링하고 전문적인 건강 서비스를 완벽하게 포착하면서 성장을 위한 프랙티스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '웰니스원더', description: '웰니스에서 경이로움을 가져다주는 건강 비즈니스입니다.' },
    { name: '바이탈리티비스타', description: '활력 서비스의 넓은 전망을 제공합니다.' },
    { name: '헬스호라이즌스', description: '모든 환자를 위해 건강 지평을 넓힙니다.' },
    { name: '피트니스파운틴', description: '피트니스와 건강 솔루션의 분수입니다.' },
    { name: '바이탈보야지', description: '환자를 활력으로의 여정으로 안내합니다.' },
    { name: '웰니스웨이브', description: '완전한 건강을 위한 웰니스 서비스의 파도입니다.' },
    { name: '헬스헤이븐', description: '종합적인 건강 솔루션을 위한 안식처입니다.' },
    { name: '피트니스퍼마먼트', description: '피트니스와 건강 서비스의 창공입니다.' },
    { name: '바이탈밸리', description: '활력과 웰니스의 계곡입니다.' },
    { name: '웰니스웰스프링', description: '웰니스 서비스의 원천입니다.' },
    { name: '쓰라이브테라피', description: '환자가 번성하도록 돕는 테라피 서비스입니다.' },
    { name: '밸런스베이스', description: '균형 잡힌 건강과 웰니스를 위한 기반입니다.' },
    { name: '힐링하버', description: '치유와 건강 회복을 위한 항구입니다.' },
    { name: '너리시네스트', description: '영양 건강 실천을 위한 둥지입니다.' },
    { name: '리뉴얼릿지', description: '리뉴얼과 회복에 초점을 맞춘 건강 서비스입니다.' },
    { name: '바이브런트바이탈스', description: '활기차고 건강한 활력을 촉진합니다.' },
    { name: '홀웰니스', description: '전인 웰니스 서비스입니다.' },
    { name: '케어컴퍼스', description: '환자를 더 나은 건강으로 안내합니다.' },
    { name: '피크헬스', description: '환자가 최고의 건강에 도달하도록 돕습니다.' },
    { name: '플러리시파운데이션', description: '번성하는 건강을 위한 기반입니다.' },
  ],
},

// =============================================================================
// ICE-CREAM - 아이스크림 사업 이름 생성기
// =============================================================================
'ice-cream': {
  slug: 'ice-cream',
  name: '아이스크림 비즈니스 이름 생성기',
  title: '무료 AI 아이스크림 사업 이름 아이디어 생성기',
  description: '무료 AI 아이스크림 사업 이름 생성기로 달콤하고 기억에 남는 아이스크림 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 아이스크림 사업 이름 생성기로 창의적이고 달콤한 사업 이름을 만드세요. 아이스크림 숍, 젤라토 가게, 프로즌 요거트 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '아이스크림 이름 생성',
  inputLabel: '아이스크림 비즈니스 세부 정보',
  inputPlaceholder: '아이스크림 비즈니스를 설명하세요 (예: 장인 젤라토 숍, 이국적인 맛 전문, 프리미엄 재료 사용)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in ice cream and frozen dessert businesses. Generate unique, memorable business names that evoke sweetness, joy, and delicious frozen treats. Consider these elements:

- Sweet and playful words (Scoop, Swirl, Chill, Frost, Cream)
- Temperature and texture references (Frozen, Cold, Smooth, Creamy)
- Happiness and joy associations (Delight, Joy, Bliss, Happy)
- Flavor and ingredient imagery (Vanilla, Berry, Caramel, Cocoa)
- Whimsical and fun elements (Sprinkles, Sundae, Cone, Twist)

Create names that are fun to say, easy to remember, and capture the delightful experience of enjoying ice cream.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '아이스크림 숍 런칭',
      description: '새로운 아이스크림 숍을 여는 기업가들은 생성기를 사용하여 달콤하고 기억에 남는 이름을 만듭니다. 이 도구는 아이스크림의 즐거움과 행복을 전달하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '젤라토 및 프리미엄 아이스크림 브랜딩',
      description: '프리미엄 젤라토나 장인 아이스크림을 제공하는 사업주들은 생성기를 사용하여 품질과 정교함을 전달하는 이름을 개발합니다. 이 도구는 고급 재료와 장인 정신을 암시하는 이름을 제공합니다.',
    },
    {
      title: '프랜차이즈 및 체인점 개발',
      description: '아이스크림 프랜차이즈를 계획하는 사업가들은 생성기를 사용하여 확장 가능하고 기억에 남는 브랜드 이름을 만듭니다. 이 도구는 여러 지점에서 일관된 브랜드 인식을 구축할 수 있는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 아이스크림 사업 이름이란 무엇인가요?', answer: '좋은 아이스크림 사업 이름은 달콤하고 즐거운 느낌을 전달하며, 발음하기 쉽고 기억에 남아야 합니다. 아이스크림의 차가움, 부드러움, 맛있음을 암시하는 단어를 포함하면 효과적입니다. 또한 타겟 고객층에게 매력적으로 느껴져야 합니다.' },
    { question: '아이스크림 사업 이름에 맛이나 재료를 포함해야 하나요?', answer: '맛이나 재료를 포함하면 비즈니스의 전문성을 즉시 전달할 수 있습니다. 그러나 특정 맛에 국한되지 않는 더 넓은 이름은 메뉴 확장 시 더 많은 유연성을 제공합니다. 비즈니스 전략에 따라 결정하세요.' },
    { question: '어린이 친화적인 이름과 성인 타겟 이름 중 어떤 것을 선택해야 하나요?', answer: '타겟 고객층에 따라 다릅니다. 가족 중심이라면 재미있고 장난스러운 이름이 효과적이고, 프리미엄 성인 시장을 타겟으로 한다면 더 세련되고 정교한 이름이 적합합니다. 많은 성공적인 아이스크림 브랜드는 모든 연령대에 어필하는 이름을 사용합니다.' },
    { question: '현재 인기 있는 아이스크림 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 장인 정신 강조(아르티장, 크래프트, 스몰배치), 건강 의식(오가닉, 내추럴, 플랜트베이스드), 지역 특색(로컬, 팜프레시), 경험 중심(크리에이션, 익스피리언스, 조이)이 포함됩니다. 유니크하고 인스타그램에 적합한 이름도 인기입니다.' },
    { question: '아이스크림 사업 이름에 "아이스크림"을 포함해야 하나요?', answer: '"아이스크림"을 포함하면 비즈니스 유형을 즉시 명확히 하지만, 많은 성공적인 브랜드는 이 단어 없이도 아이스크림을 암시하는 창의적인 이름을 사용합니다. 스쿱, 크림, 프로즌 같은 단어로 충분히 전달할 수 있습니다.' },
    { question: '아이스크림 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들, 상표 데이터베이스를 확인하세요. 또한 지역 내 유사한 이름의 아이스크림 숍이 있는지 확인하고, 배달 앱과 리뷰 사이트에서도 검색해보세요.' },
    { question: '아이스크림 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 온도 관련(프로즌, 칠드, 쿨, 프로스티), 질감 관련(크리미, 스무스, 소프트, 실키), 맛 관련(스위트, 리치, 인덜전트), 행복 관련(조이, 딜라이트, 블리스, 해피), 동작 관련(스쿱, 스월, 트위스트, 딥)이 포함됩니다.' },
    { question: '젤라토와 일반 아이스크림 사업 이름을 다르게 해야 하나요?', answer: '젤라토 비즈니스는 종종 이탈리안 영감을 받은 이름이나 프리미엄/장인 정신을 암시하는 단어를 사용합니다. 일반 아이스크림은 더 장난스럽고 미국적인 느낌의 이름이 일반적입니다. 제품의 포지셔닝에 맞게 선택하세요.' },
    { question: '프랜차이즈 확장을 고려한 이름 선택 팁이 있나요?', answer: '확장을 계획한다면 지역 특정적이지 않고, 발음이 쉬우며, 다양한 문화에서 부정적인 의미가 없는 이름을 선택하세요. 또한 상표 등록이 가능하고 도메인과 소셜 미디어에서 일관된 브랜딩이 가능한지 확인하세요.' },
    { question: '아이스크림 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 발음하기 어려운 이름, 기존 유명 브랜드와 너무 유사한 이름, 특정 맛이나 계절에 국한되는 이름, 타겟 고객층에게 매력적이지 않은 이름, 부정적인 연상을 일으킬 수 있는 단어, 너무 길거나 복잡한 이름.' },
  ],
  howToChoose: {
    intro: '아이스크림 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 달콤한 기쁨과 행복한 경험을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 간판, 메뉴, 포장, 소셜 미디어에 나타납니다—사람들이 브랜드를 인식하고 기억하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '아이스크림 비즈니스 아이덴티티 정의', description: '이름 생성 전에 아이스크림 비즈니스의 포지셔닝을 명확히 하세요. 어떤 종류의 아이스크림을 제공할 것인지(전통적, 젤라토, 프로즌 요거트, 소프트서브), 타겟 고객은 누구인지(가족, 젊은 층, 프리미엄 시장), 분위기는 어떻게 할 것인지(재미있고 장난스러운, 세련되고 고급스러운), 특별한 차별점은 무엇인지(유기농 재료, 독특한 맛, 현지 생산) 고려하세요.' },
      { title: '감정적 연결 구축', description: '아이스크림은 행복, 추억, 축하와 연결됩니다. 이름은 기쁨과 즐거움을 불러일으키고, 달콤한 순간을 암시하고, 편안함과 위안을 전달하고, 특별한 경험을 약속하고, 긍정적인 감정을 자극해야 합니다. 고객이 이름만 들어도 미소 짓게 만드세요.' },
      { title: '감각적 이미지 활용', description: '효과적인 아이스크림 이름은 감각을 자극합니다. 맛(스위트, 리치, 크리미), 온도(쿨, 칠드, 프로스티), 질감(스무스, 벨벳, 실키), 시각(스월, 드리즐, 레이어), 소리(크런치, 팝, 버블)를 연상시키는 단어를 고려하세요. 감각적 단어는 맛있는 경험을 상상하게 합니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 어린이와 가족을 위해서는 재미있고 장난스러운 이름이, 밀레니얼과 Z세대를 위해서는 트렌디하고 인스타그램에 적합한 이름이, 프리미엄 시장을 위해서는 세련되고 고급스러운 이름이 효과적입니다. 타겟 고객의 언어와 가치관을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(온라인 존재용), 소셜 미디어 핸들(인스타그램, 틱톡 등), 배달 앱(배민, 쿠팡이츠 등), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 아이스크림 비즈니스는 소셜 미디어 존재가 특히 중요합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 맛있는 아이스크림을 연상시키는지, 기억하기 쉬운지, 친구에게 추천하고 싶은지, 어떤 종류의 아이스크림 숍을 기대하는지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 맛과 메뉴 추가, 추가 지점 오픈, 도매 및 유통 확장, 관련 디저트 품목 추가, 프랜차이즈 기회. 이상적인 아이스크림 사업 이름은 달콤하고, 기억에 남고, 즐거우며, 맛있는 프로즌 트릿 경험을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '스쿱드림', description: '아이스크림 한 스쿱에 담긴 달콤한 꿈을 전달하는 이름입니다. 고객에게 꿈같은 디저트 경험을 약속합니다.' },
    { name: '프로즌딜라이트', description: '얼어붙은 기쁨을 의미하며, 차갑고 달콤한 아이스크림의 즐거움을 직접적으로 표현합니다.' },
    { name: '크리미헤이븐', description: '크리미한 천국을 의미하여 부드럽고 풍부한 아이스크림 경험의 안식처를 암시합니다.' },
    { name: '스위트스월', description: '달콤한 소용돌이를 의미하며, 아이스크림의 시각적 아름다움과 맛있는 혼합을 표현합니다.' },
    { name: '칠존', description: '시원한 구역을 의미하며, 더운 날 피신처가 되는 시원한 아이스크림 숍을 암시합니다.' },
    { name: '젤라토가든', description: '젤라토 정원을 의미하여 다양한 맛의 젤라토가 피어나는 이탈리안 영감의 공간을 표현합니다.' },
    { name: '블리스바이트', description: '행복의 한 입을 의미하며, 아이스크림 한 입에 담긴 순수한 기쁨을 전달합니다.' },
    { name: '프로스트팩토리', description: '서리 공장을 의미하여 신선한 아이스크림이 만들어지는 창의적인 공간을 암시합니다.' },
    { name: '벨벳쿨', description: '벨벳처럼 부드러운 시원함을 의미하며, 프리미엄 아이스크림의 고급스러운 질감을 표현합니다.' },
    { name: '선데이스카이', description: '선데이와 하늘을 결합하여 무한한 토핑 가능성의 아이스크림 선데이를 암시합니다.' },
    { name: '멜트모먼트', description: '녹는 순간을 의미하며, 입안에서 녹는 아이스크림의 특별한 순간을 포착합니다.' },
    { name: '트위스트트릿', description: '꼬인 트릿을 의미하여 소프트 아이스크림의 특징적인 모양과 즐거움을 표현합니다.' },
    { name: '스프린클스앤스쿱스', description: '스프린클과 스쿱을 결합하여 재미있고 장난스러운 아이스크림 경험을 암시합니다.' },
    { name: '아틱아트', description: '북극 예술을 의미하여 아이스크림 만들기를 예술적 창작 활동으로 승화시킵니다.' },
    { name: '콘코너', description: '콘 코너를 의미하여 아이스크림 콘의 편안한 구석 가게를 암시합니다.' },
    { name: '플레이버피에스타', description: '맛의 축제를 의미하여 다양한 맛의 아이스크림 축제 같은 경험을 표현합니다.' },
    { name: '소프트서브서클', description: '소프트 아이스크림 서클을 의미하여 커뮤니티 중심의 소프트 아이스크림 숍을 암시합니다.' },
    { name: '칠드쵸이스', description: '차가운 선택을 의미하여 다양한 아이스크림 선택지를 제공하는 것을 강조합니다.' },
    { name: '크림크래프터스', description: '크림 장인들을 의미하여 장인 정신으로 만든 프리미엄 아이스크림을 암시합니다.' },
    { name: '해피스쿱스', description: '행복한 스쿱들을 의미하여 모든 아이스크림 스쿱에 담긴 기쁨과 행복을 직접적으로 전달합니다.' },
  ],
},

// =============================================================================
// INTERIOR-DESIGN - 인테리어 사업 이름 생성기
// =============================================================================
'interior-design': {
  slug: 'interior-design',
  name: '인테리어 디자인 비즈니스 이름 생성기',
  title: '무료 AI 인테리어 사업 이름 아이디어 생성기',
  description: '무료 AI 인테리어 사업 이름 생성기로 세련되고 전문적인 인테리어 디자인 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 인테리어 사업 이름 생성기로 전문적이고 창의적인 사업 이름을 만드세요. 인테리어 디자인 스튜디오, 홈 스테이징, 리모델링 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '인테리어 이름 생성',
  inputLabel: '인테리어 비즈니스 세부 정보',
  inputPlaceholder: '인테리어 비즈니스를 설명하세요 (예: 럭셔리 주거 인테리어, 미니멀리스트 디자인 전문, 지속가능한 소재 사용)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in interior design and home decoration businesses. Generate unique, memorable business names that evoke beauty, style, and sophisticated living spaces. Consider these elements:

- Design and aesthetic words (Design, Style, Aesthetic, Atelier, Studio)
- Space and home references (Space, Home, Living, Room, Interior)
- Elegance and luxury terms (Luxe, Elite, Premier, Refined, Curated)
- Transformation concepts (Transform, Reimagine, Revive, Renew)
- Artistic and creative elements (Artistry, Vision, Canvas, Palette)

Create names that are sophisticated, memorable, and convey expertise in creating beautiful living spaces.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '인테리어 디자인 스튜디오 런칭',
      description: '새로운 인테리어 디자인 스튜디오를 여는 디자이너들은 생성기를 사용하여 창의성과 전문성을 전달하는 이름을 만듭니다. 이 도구는 세련된 디자인 감각과 고객 중심의 서비스를 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '홈 스테이징 및 리모델링 서비스',
      description: '홈 스테이징이나 리모델링 서비스를 제공하는 사업주들은 생성기를 사용하여 변화와 가치 향상을 전달하는 이름을 개발합니다. 이 도구는 공간 변환의 전문성을 암시하는 이름을 제공합니다.',
    },
    {
      title: '럭셔리 및 고급 인테리어 브랜딩',
      description: '고급 인테리어 시장을 타겟으로 하는 디자이너들은 생성기를 사용하여 럭셔리와 독점성을 전달하는 이름을 만듭니다. 이 도구는 프리미엄 서비스와 세련된 미적 감각을 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 인테리어 사업 이름이란 무엇인가요?', answer: '좋은 인테리어 사업 이름은 세련되고 전문적이며, 창의성과 디자인 전문 지식을 전달해야 합니다. 기억하기 쉽고, 타겟 시장(주거, 상업, 럭셔리 등)에 적합해야 합니다. 또한 비즈니스의 디자인 철학이나 스타일을 암시할 수 있으면 더욱 효과적입니다.' },
    { question: '인테리어 사업 이름에 "디자인"이나 "인테리어"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 하고 SEO에 도움이 됩니다. 그러나 많은 성공적인 인테리어 브랜드는 이 단어 없이도 스튜디오, 아틀리에, 스페이스 같은 암시적인 단어를 사용하여 업종을 전달합니다.' },
    { question: '개인 이름을 인테리어 사업 이름에 사용해야 하나요?', answer: '개인 이름 사용은 인테리어 업계에서 매우 일반적이며 개인 브랜딩을 구축하는 데 효과적입니다. 그러나 팀이 확장되거나 비즈니스를 매각할 계획이 있다면 개인 이름에 의존하지 않는 것이 좋을 수 있습니다. 비즈니스 목표에 따라 결정하세요.' },
    { question: '현재 인기 있는 인테리어 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 미니멀한 단어 사용(간결하고 우아한 이름), 공간 관련 단어(스페이스, 플레이스, 존), 유럽풍 단어(아틀리에, 메종, 스튜디오), 자연 영감(보태니컬, 내추럴, 오가닉), 경험 중심(리빙, 웰빙, 하비타트)이 포함됩니다.' },
    { question: '인테리어 사업 이름에 스타일을 반영해야 하나요?', answer: '특정 스타일(미니멀리스트, 스칸디나비안, 보헤미안 등)을 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 스타일 트렌드는 변하므로, 더 넓은 이름은 비즈니스 방향 전환 시 유연성을 제공합니다.' },
    { question: '인테리어 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(특히 인스타그램과 핀터레스트), 상표 데이터베이스를 확인하세요. 또한 인테리어 디렉토리와 포트폴리오 사이트에서 유사한 이름이 있는지 검색해보세요.' },
    { question: '인테리어 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 디자인 관련(디자인, 스튜디오, 아틀리에, 크리에이티브), 공간 관련(스페이스, 인테리어, 홈, 리빙), 품질 관련(럭스, 프리미어, 엘리트, 큐레이티드), 변화 관련(트랜스폼, 리뉴, 리바이브, 리이매진), 감각 관련(비전, 팔레트, 텍스처, 톤)이 포함됩니다.' },
    { question: '주거와 상업 인테리어 사업 이름을 다르게 해야 하나요?', answer: '반드시 그럴 필요는 없지만, 주거 인테리어는 따뜻하고 개인적인 느낌의 이름이, 상업 인테리어는 더 전문적이고 기업적인 느낌의 이름이 효과적일 수 있습니다. 두 시장 모두를 타겟으로 한다면 균형 잡힌 이름을 선택하세요.' },
    { question: '지역 기반 인테리어 사업 이름이 좋을까요?', answer: '지역 이름을 포함하면 로컬 SEO에 도움이 되고 지역 커뮤니티 연결을 강조할 수 있습니다. 그러나 다른 지역으로 확장하거나 온라인 서비스를 제공할 계획이라면 제한적일 수 있습니다. 비즈니스 성장 계획을 고려하세요.' },
    { question: '인테리어 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 너무 트렌디해서 빠르게 구식이 될 수 있는 이름, 발음이나 철자가 어려운 이름, 다른 유명 디자인 회사와 너무 유사한 이름, 비즈니스 범위를 제한하는 이름, 타겟 시장에게 적절한 인상을 주지 못하는 이름.' },
  ],
  howToChoose: {
    intro: '인테리어 디자인 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 아름답고 기능적인 공간 창조를 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 포트폴리오, 명함, 웹사이트, 소셜 미디어에 나타납니다—잠재 고객이 디자인 서비스를 인식하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '인테리어 비즈니스 아이덴티티 정의', description: '이름 생성 전에 인테리어 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 인테리어 서비스를 제공할 것인지(주거, 상업, 홈 스테이징, 리모델링), 타겟 고객은 누구인지(고급 주택 소유자, 기업, 부동산 개발업자), 디자인 스타일은 무엇인지(모던, 클래식, 미니멀, 맥시멀), 차별화 포인트는 무엇인지(지속가능성, 스마트 홈, 예산 친화적) 고려하세요.' },
      { title: '전문성과 신뢰 구축', description: '인테리어 디자인은 중요한 투자입니다. 이름은 전문적 역량을 전달하고, 디자인 전문 지식을 암시하고, 신뢰와 신용을 구축하고, 품질 결과물을 약속하고, 업계 경험을 반영해야 합니다. 고객이 자신의 공간을 맡길 수 있다는 자신감을 느끼게 하세요.' },
      { title: '창의성과 비전 표현', description: '인테리어 디자인은 창의적 산업입니다. 이름은 예술적 비전을 암시하고, 창의적 문제 해결을 전달하고, 디자인 감각을 반영하고, 혁신적 접근을 표현하고, 미적 가치를 강조해야 합니다. 비전, 크리에이티브, 아트 같은 단어가 창의성을 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 럭셔리 시장을 위해서는 우아하고 정교한 이름이, 젊은 전문직을 위해서는 현대적이고 트렌디한 이름이, 가족 고객을 위해서는 따뜻하고 접근 가능한 이름이 효과적입니다. 타겟 고객의 취향과 기대를 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(포트폴리오 웹사이트용), 소셜 미디어 핸들(인스타그램, 핀터레스트 특히 중요), 인테리어 디렉토리(후즈, 호미파이 등), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 인테리어 비즈니스는 시각적 플랫폼 존재가 특히 중요합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 전문적인 인테리어 서비스를 연상시키는지, 어떤 스타일의 디자인을 기대하는지, 신뢰할 수 있고 창의적으로 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 디자인 서비스 추가, 디자이너 팀 확장, 다른 지역으로 확장, 온라인 디자인 서비스 제공, 홈 데코 제품 라인 런칭. 이상적인 인테리어 사업 이름은 전문적이고, 창의적이고, 세련되며, 뛰어난 디자인 서비스를 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '스페이스큐레이터', description: '공간을 큐레이팅하는 전문가를 의미하여 신중하게 선별된 인테리어 디자인 서비스를 암시합니다.' },
    { name: '리빙아틀리에', description: '리빙 공간의 아틀리에를 의미하여 예술적이고 장인 정신이 담긴 인테리어 접근 방식을 표현합니다.' },
    { name: '하비타트하모니', description: '서식지의 조화를 의미하여 균형 잡히고 조화로운 생활 공간 창조를 암시합니다.' },
    { name: '디자인드웰링', description: '디자인된 주거를 의미하여 주거 인테리어에 대한 전문성과 헌신을 표현합니다.' },
    { name: '인테리어인사이트', description: '인테리어 통찰력을 의미하여 깊은 디자인 지식과 전문적 관점을 암시합니다.' },
    { name: '엘레강스에센스', description: '우아함의 본질을 의미하여 세련되고 고급스러운 인테리어 디자인 미학을 표현합니다.' },
    { name: '홈하버', description: '홈의 항구를 의미하여 편안하고 안전한 생활 공간 창조에 대한 헌신을 암시합니다.' },
    { name: '룸레볼루션', description: '방의 혁명을 의미하여 공간을 완전히 변화시키는 혁신적인 디자인 접근 방식을 표현합니다.' },
    { name: '스타일스케이프', description: '스타일의 풍경을 의미하여 넓은 디자인 비전과 스타일 전문성을 암시합니다.' },
    { name: '비전벨벳', description: '벨벳 같은 비전을 의미하여 부드럽고 럭셔리한 디자인 접근 방식을 표현합니다.' },
    { name: '아비언트아트', description: '분위기의 예술을 의미하여 공간의 분위기와 감성을 창조하는 예술적 접근을 암시합니다.' },
    { name: '큐레이티드케이브', description: '큐레이팅된 동굴을 의미하여 신중하게 선별된 아늑한 공간 창조를 표현합니다.' },
    { name: '프레임워크플레이스', description: '프레임워크 장소를 의미하여 잘 구조화된 디자인 접근 방식과 공간 계획을 암시합니다.' },
    { name: '넥서스네스트', description: '연결의 둥지를 의미하여 가족과 공간을 연결하는 따뜻한 인테리어 디자인을 표현합니다.' },
    { name: '팔레트퍼펙션', description: '팔레트의 완벽함을 의미하여 색상과 재료 선택의 전문성을 암시합니다.' },
    { name: '리파인드룸스', description: '세련된 방들을 의미하여 정교하고 세련된 공간 디자인에 대한 헌신을 표현합니다.' },
    { name: '상추어리스튜디오', description: '성역 스튜디오를 의미하여 평화롭고 편안한 생활 공간 창조를 암시합니다.' },
    { name: '텍스처트레일', description: '텍스처의 길을 의미하여 다양한 질감과 재료를 탐험하는 디자인 여정을 표현합니다.' },
    { name: '어반에센스', description: '도시의 본질을 의미하여 현대 도시 생활에 적합한 세련된 인테리어 디자인을 암시합니다.' },
    { name: '웰컴웰스', description: '환영하는 우물을 의미하여 따뜻하고 환영하는 생활 공간의 풍요로움을 표현합니다.' },
  ],
},

// =============================================================================
// IT - IT 사업 이름 생성기
// =============================================================================
'it': {
  slug: 'it',
  name: 'IT 비즈니스 이름 생성기',
  title: '무료 AI IT 사업 이름 아이디어 생성기',
  description: '무료 AI IT 사업 이름 생성기로 혁신적이고 전문적인 IT 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI IT 사업 이름 생성기로 혁신적이고 전문적인 사업 이름을 만드세요. IT 서비스, 소프트웨어 개발, 클라우드 솔루션 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: 'IT 이름 생성',
  inputLabel: 'IT 비즈니스 세부 정보',
  inputPlaceholder: 'IT 비즈니스를 설명하세요 (예: 클라우드 인프라 솔루션, 사이버 보안 전문, AI/ML 개발)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in information technology and software businesses. Generate unique, memorable business names that evoke innovation, reliability, and technical expertise. Consider these elements:

- Technology words (Tech, Digital, Cyber, Cloud, Data)
- Innovation concepts (Innovation, Future, Next, Smart, Intelligent)
- Reliability and trust (Secure, Trust, Shield, Guard, Safe)
- Connectivity and networks (Net, Link, Connect, Hub, Node)
- Progress and advancement (Advance, Evolve, Elevate, Accelerate)

Create names that are professional, forward-thinking, and convey technical competence and innovation.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: 'IT 서비스 회사 런칭',
      description: '새로운 IT 서비스 회사를 시작하는 기업가들은 생성기를 사용하여 기술적 전문성과 신뢰성을 전달하는 이름을 만듭니다. 이 도구는 혁신과 솔루션 제공 능력을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '소프트웨어 개발 회사 브랜딩',
      description: '소프트웨어 개발 서비스를 제공하는 회사들은 생성기를 사용하여 기술 혁신과 창의성을 전달하는 이름을 개발합니다. 이 도구는 코딩 전문성과 최신 기술 역량을 암시하는 이름을 제공합니다.',
    },
    {
      title: '사이버 보안 및 클라우드 서비스 회사',
      description: '사이버 보안이나 클라우드 서비스를 전문으로 하는 회사들은 생성기를 사용하여 보안, 신뢰, 첨단 기술을 전달하는 이름을 만듭니다. 이 도구는 데이터 보호와 기술 우수성을 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 IT 사업 이름이란 무엇인가요?', answer: '좋은 IT 사업 이름은 기술적 전문성과 혁신을 전달하며, 전문적이고 신뢰할 수 있어야 합니다. 기억하기 쉽고, 타겟 시장(기업, 스타트업, 중소기업 등)에 적합해야 합니다. 또한 제공하는 서비스(개발, 보안, 클라우드 등)를 암시하거나 기술 미래 지향성을 표현할 수 있으면 효과적입니다.' },
    { question: 'IT 사업 이름에 기술 용어를 포함해야 하나요?', answer: '테크, 디지털, 클라우드 같은 기술 용어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 너무 일반적인 기술 용어는 차별화가 어려울 수 있습니다. 독특한 조합이나 은유적 표현을 사용하면 더 기억에 남는 이름을 만들 수 있습니다.' },
    { question: '약어나 두문자어를 IT 사업 이름에 사용해야 하나요?', answer: '약어는 IT 업계에서 일반적이며 간결하고 기억하기 쉬울 수 있습니다. 그러나 의미 없는 약어는 브랜드 인식을 어렵게 할 수 있습니다. 약어를 사용한다면 발음하기 쉽고 긍정적인 연상을 불러일으키는지 확인하세요.' },
    { question: '현재 인기 있는 IT 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 미래 지향적 단어(넥스트, 퓨처, 포워드), AI/ML 관련(인텔리전트, 스마트, 코그니티브), 클라우드 관련(클라우드, 스카이, 에어), 보안 관련(쉴드, 가드, 세이프), 연결성 관련(넷, 링크, 허브)이 포함됩니다. 간결하고 발음하기 쉬운 이름도 인기입니다.' },
    { question: 'IT 사업 이름에 서비스 영역을 반영해야 하나요?', answer: '특정 서비스(사이버 보안, 클라우드 마이그레이션 등)를 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 서비스 영역이 확장될 수 있다면 더 넓은 이름이 유연성을 제공합니다. 비즈니스 전략에 따라 결정하세요.' },
    { question: 'IT 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름(특히 .com, .io, .tech), 소셜 미디어 핸들(LinkedIn, Twitter, GitHub), 상표 데이터베이스를 확인하세요. 또한 기술 디렉토리(Clutch, G2, Capterra)에서 유사한 이름이 있는지 검색해보세요.' },
    { question: 'IT 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 기술 관련(테크, 디지털, 사이버, 코드, 시스템), 혁신 관련(이노베이션, 스마트, 넥스트, 퓨처), 신뢰 관련(트러스트, 시큐어, 가드, 쉴드), 연결 관련(넷, 링크, 허브, 노드), 성능 관련(퍼포먼스, 옵티마이즈, 엑셀, 파워)가 포함됩니다.' },
    { question: 'B2B와 B2C IT 사업 이름을 다르게 해야 하나요?', answer: 'B2B IT 비즈니스는 전문적이고 신뢰를 강조하는 이름이 효과적이고, B2C 비즈니스는 더 친근하고 접근 가능한 이름이 좋을 수 있습니다. 그러나 많은 성공적인 IT 회사들은 두 시장 모두에 어필하는 균형 잡힌 이름을 사용합니다.' },
    { question: '글로벌 IT 사업을 위한 이름 선택 팁이 있나요?', answer: '글로벌 시장을 타겟으로 한다면 다양한 언어와 문화에서 부정적인 의미가 없는 이름을 선택하세요. 영어 기반 이름이 국제적으로 잘 작동하지만, 발음하기 쉽고 기억하기 쉬운지 확인하세요. 도메인과 상표 글로벌 가용성도 확인하세요.' },
    { question: 'IT 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 너무 기술적이거나 이해하기 어려운 이름, 특정 기술에 국한되어 빠르게 구식이 될 수 있는 이름, 발음이나 철자가 어려운 이름, 기존 IT 회사와 너무 유사한 이름, 부정적인 연상을 일으킬 수 있는 약어나 단어.' },
  ],
  howToChoose: {
    intro: 'IT 비즈니스의 완벽한 이름을 선택하는 것은 기술 전문성과 혁신을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제안서, 웹사이트, 명함, 기술 컨퍼런스에 나타납니다—잠재 고객이 기술 서비스를 인식하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: 'IT 비즈니스 아이덴티티 정의', description: '이름 생성 전에 IT 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 IT 서비스를 제공할 것인지(개발, 컨설팅, 보안, 인프라), 타겟 고객은 누구인지(대기업, SMB, 스타트업, 정부), 기술 전문 분야는 무엇인지(클라우드, AI, 보안, 데이터), 차별화 포인트는 무엇인지(혁신, 신뢰성, 비용 효율성, 속도) 고려하세요.' },
      { title: '기술 전문성과 신뢰 구축', description: 'IT 결정은 중요한 비즈니스 영향을 미칩니다. 이름은 기술적 역량을 전달하고, 전문 지식을 암시하고, 신뢰와 안정성을 구축하고, 성공적 결과물을 약속하고, 업계 경험을 반영해야 합니다. 고객이 중요한 기술 인프라를 맡길 수 있다는 자신감을 느끼게 하세요.' },
      { title: '혁신과 미래 지향성 표현', description: 'IT는 빠르게 진화하는 산업입니다. 이름은 혁신적 접근을 암시하고, 최신 기술 역량을 전달하고, 미래 지향적 비전을 표현하고, 지속적 발전을 약속하고, 기술 리더십을 강조해야 합니다. 넥스트, 이노베이션, 어드밴스 같은 단어가 미래 지향성을 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 대기업을 위해서는 전문적이고 확립된 느낌의 이름이, 스타트업을 위해서는 민첩하고 혁신적인 이름이, 중소기업을 위해서는 접근 가능하고 파트너십 지향적인 이름이 효과적입니다. 타겟 고객의 기대와 언어를 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com, .io, .tech 등), 소셜 미디어 핸들(LinkedIn, Twitter, GitHub), 기술 디렉토리(Clutch, G2, Capterra), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. IT 비즈니스는 온라인 존재와 기술 플랫폼 가시성이 특히 중요합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 전문적인 IT 서비스를 연상시키는지, 어떤 유형의 기술 서비스를 기대하는지, 신뢰할 수 있고 혁신적으로 느껴지는지, 기억하고 추천하기 쉬운지, 기술 역량을 어떻게 평가하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 기술 서비스 추가, 전문가 팀 확장, 글로벌 시장 진출, 새로운 기술 영역 진입, 제품 또는 SaaS 런칭. 이상적인 IT 사업 이름은 전문적이고, 혁신적이고, 신뢰할 수 있으며, 뛰어난 기술 서비스를 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '넥스트웨이브테크', description: '다음 기술 물결을 의미하여 최신 기술 트렌드를 선도하는 혁신적인 IT 서비스를 암시합니다.' },
    { name: '디지털브릿지', description: '디지털 다리를 의미하여 기업과 기술 솔루션을 연결하는 역할을 표현합니다.' },
    { name: '클라우드코어', description: '클라우드의 핵심을 의미하여 클라우드 인프라와 서비스에 대한 깊은 전문성을 암시합니다.' },
    { name: '사이버쉴드', description: '사이버 방패를 의미하여 강력한 사이버 보안 서비스와 데이터 보호를 표현합니다.' },
    { name: '인텔리시스템즈', description: '지능형 시스템들을 의미하여 스마트하고 효율적인 IT 솔루션 제공을 암시합니다.' },
    { name: '이노베이트허브', description: '혁신 허브를 의미하여 기술 혁신의 중심지로서의 역할을 표현합니다.' },
    { name: '퓨처링크', description: '미래 연결을 의미하여 미래 지향적인 기술 연결 서비스를 암시합니다.' },
    { name: '데이터드리븐', description: '데이터 중심을 의미하여 데이터 기반 의사결정과 분석 서비스를 표현합니다.' },
    { name: '넷워크넥서스', description: '네트워크 연결점을 의미하여 복잡한 네트워크 인프라 전문성을 암시합니다.' },
    { name: '코드크래프트', description: '코드 장인을 의미하여 정교하고 품질 높은 소프트웨어 개발 서비스를 표현합니다.' },
    { name: '트러스트테크', description: '신뢰 기술을 의미하여 신뢰할 수 있는 기술 파트너십을 암시합니다.' },
    { name: '어드밴스드솔루션즈', description: '고급 솔루션들을 의미하여 첨단 기술 솔루션 제공에 대한 헌신을 표현합니다.' },
    { name: '옵티마이즈IT', description: 'IT 최적화를 의미하여 시스템 성능과 효율성 최적화 전문성을 암시합니다.' },
    { name: '세이프가드시스템즈', description: '보호 시스템들을 의미하여 안전하고 보호된 IT 인프라 서비스를 표현합니다.' },
    { name: '스마트스택', description: '스마트 스택을 의미하여 지능적인 기술 스택과 아키텍처 설계를 암시합니다.' },
    { name: '디지털다이내믹스', description: '디지털 역동성을 의미하여 빠르게 변화하는 디지털 환경에서의 민첩한 서비스를 표현합니다.' },
    { name: '인피니티IT', description: '무한 IT를 의미하여 끊임없는 기술 지원과 서비스의 무한한 가능성을 암시합니다.' },
    { name: '파워퓨전', description: '파워 융합을 의미하여 강력한 기술 통합과 융합 솔루션을 표현합니다.' },
    { name: '퀀텀퀘스트', description: '퀀텀 탐구를 의미하여 최첨단 기술에 대한 지속적인 탐구와 혁신을 암시합니다.' },
    { name: '벨로시티벤처스', description: '속도 벤처스를 의미하여 빠른 기술 구현과 민첩한 IT 서비스를 표현합니다.' },
  ],
},

// =============================================================================
// JEWELRY-STORE - 주얼리 사업 이름 생성기
// =============================================================================
'jewelry-store': {
  slug: 'jewelry-store',
  name: '주얼리 스토어 비즈니스 이름 생성기',
  title: '무료 AI 주얼리 사업 이름 아이디어 생성기',
  description: '무료 AI 주얼리 사업 이름 생성기로 우아하고 기억에 남는 주얼리 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 주얼리 사업 이름 생성기로 우아하고 럭셔리한 사업 이름을 만드세요. 보석 가게, 주얼리 디자인 스튜디오, 액세서리 브랜드를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '주얼리 이름 생성',
  inputLabel: '주얼리 비즈니스 세부 정보',
  inputPlaceholder: '주얼리 비즈니스를 설명하세요 (예: 핸드메이드 웨딩 주얼리, 빈티지 앤티크 전문, 맞춤 제작 서비스)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in jewelry and accessories businesses. Generate unique, memorable business names that evoke elegance, beauty, and precious craftsmanship. Consider these elements:

- Precious materials (Gold, Silver, Gem, Diamond, Pearl)
- Elegance and luxury (Luxe, Elegance, Grace, Refined, Exquisite)
- Light and sparkle (Sparkle, Shine, Glow, Radiance, Luminous)
- Craftsmanship (Artisan, Craft, Studio, Atelier, Design)
- Beauty and adornment (Beauty, Adorn, Grace, Charm, Treasure)

Create names that are sophisticated, memorable, and convey the beauty and value of fine jewelry.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '주얼리 부티크 런칭',
      description: '새로운 주얼리 부티크를 여는 기업가들은 생성기를 사용하여 우아하고 럭셔리한 이름을 만듭니다. 이 도구는 품질과 세련된 미적 감각을 전달하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '주얼리 디자이너 브랜딩',
      description: '자신만의 주얼리 라인을 런칭하는 디자이너들은 생성기를 사용하여 장인 정신과 독특한 디자인 미학을 전달하는 이름을 개발합니다. 이 도구는 창의적 비전과 장인 기술을 암시하는 이름을 제공합니다.',
    },
    {
      title: '온라인 주얼리 브랜드 개발',
      description: '이커머스 주얼리 브랜드를 시작하는 사업가들은 생성기를 사용하여 기억에 남고 검색에 용이한 이름을 만듭니다. 이 도구는 온라인 존재감을 구축하고 브랜드 인식을 높이는 데 도움이 되는 이름을 식별합니다.',
    },
  ],
  faqs: [
    { question: '좋은 주얼리 사업 이름이란 무엇인가요?', answer: '좋은 주얼리 사업 이름은 우아하고 세련되며, 품질과 아름다움을 전달해야 합니다. 기억하기 쉽고, 타겟 시장(럭셔리, 패션, 웨딩 등)에 적합해야 합니다. 또한 귀금속, 보석, 빛과 반짝임의 이미지를 불러일으키면 더욱 효과적입니다.' },
    { question: '주얼리 사업 이름에 보석이나 금속 이름을 포함해야 하나요?', answer: '골드, 실버, 다이아몬드 같은 단어를 포함하면 비즈니스 유형을 즉시 명확히 하고 럭셔리 이미지를 전달합니다. 그러나 너무 일반적이면 차별화가 어려울 수 있습니다. 독특한 조합이나 은유적 표현을 사용하면 더 기억에 남는 이름을 만들 수 있습니다.' },
    { question: '개인 이름을 주얼리 사업 이름에 사용해야 하나요?', answer: '개인 이름 사용은 주얼리 업계에서 매우 일반적이며 특히 디자이너 브랜드에서 효과적입니다. 개인 브랜딩을 구축하고 독특한 스타일과 비전을 전달하는 데 도움이 됩니다. 그러나 비즈니스 확장 시 제한이 될 수 있으므로 장기 계획을 고려하세요.' },
    { question: '현재 인기 있는 주얼리 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 미니멀한 단어 사용(간결하고 우아한 이름), 자연 영감(문, 스타, 로즈, 리프), 프랑스/이탈리아 영향(아틀리에, 메종, 벨라), 감성적 단어(러브, 그레이스, 조이), 지속가능성 강조(에시컬, 에코)가 포함됩니다.' },
    { question: '주얼리 사업 이름에 스타일이나 전문 분야를 반영해야 하나요?', answer: '웨딩 주얼리, 빈티지 주얼리 등 특정 분야를 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 더 넓은 이름은 비즈니스 확장 시 유연성을 제공합니다. 비즈니스 전략에 따라 결정하세요.' },
    { question: '주얼리 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(특히 인스타그램과 핀터레스트), 상표 데이터베이스를 확인하세요. 또한 온라인 주얼리 마켓플레이스(Etsy, Amazon 등)에서 유사한 이름의 판매자가 있는지 검색해보세요.' },
    { question: '주얼리 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 귀금속(골드, 실버, 플래티넘, 골든), 보석(젬, 다이아몬드, 펄, 사파이어), 빛 관련(스파클, 샤인, 글로우, 레이디언스), 우아함(엘레강스, 그레이스, 럭스, 리파인드), 장인 정신(아틀리에, 크래프트, 아티장, 디자인)이 포함됩니다.' },
    { question: '파인 주얼리와 패션 주얼리 사업 이름을 다르게 해야 하나요?', answer: '파인 주얼리 비즈니스는 럭셔리와 품질을 강조하는 더 세련되고 고급스러운 이름이 효과적이고, 패션 주얼리는 더 트렌디하고 접근 가능한 이름이 좋을 수 있습니다. 제품 포지셔닝과 타겟 고객에 맞게 선택하세요.' },
    { question: '지역 기반 주얼리 사업 이름이 좋을까요?', answer: '특정 지역의 장인 정신이나 전통을 강조하고 싶다면 지역 이름이 독특한 브랜드 스토리를 전달할 수 있습니다. 그러나 온라인 판매나 확장을 계획한다면 지역에 국한되지 않는 이름이 더 유연할 수 있습니다.' },
    { question: '주얼리 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 발음하거나 철자하기 어려운 이름, 기존 유명 주얼리 브랜드와 너무 유사한 이름, 특정 스타일에 국한되어 확장을 제한하는 이름, 타겟 시장에게 럭셔리나 품질을 전달하지 못하는 이름, 부정적인 연상을 일으킬 수 있는 단어.' },
  ],
  howToChoose: {
    intro: '주얼리 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 아름다움, 품질, 그리고 특별한 순간을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제품 태그, 포장, 매장 간판, 온라인 존재에 나타납니다—고객이 브랜드를 인식하고 기억하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '주얼리 비즈니스 아이덴티티 정의', description: '이름 생성 전에 주얼리 비즈니스의 포지셔닝을 명확히 하세요. 어떤 종류의 주얼리를 제공할 것인지(파인 주얼리, 패션 주얼리, 웨딩, 빈티지), 타겟 고객은 누구인지(럭셔리 고객, 젊은 층, 신부), 디자인 스타일은 무엇인지(클래식, 모던, 보헤미안, 미니멀), 차별화 포인트는 무엇인지(핸드메이드, 윤리적 소싱, 맞춤 제작) 고려하세요.' },
      { title: '우아함과 품질 전달', description: '주얼리는 특별한 투자입니다. 이름은 우아함과 세련됨을 전달하고, 품질과 장인 정신을 암시하고, 귀중함과 가치를 표현하고, 신뢰와 전문성을 구축하고, 아름다운 미적 감각을 반영해야 합니다. 고객이 특별한 조각을 발견할 수 있다는 기대감을 느끼게 하세요.' },
      { title: '감정적 연결 구축', description: '주얼리는 사랑, 축하, 추억과 연결됩니다. 이름은 감정적 가치를 불러일으키고, 특별한 순간을 암시하고, 선물과 기념의 기쁨을 전달하고, 자기 표현을 지원하고, 영원한 아름다움을 약속해야 합니다. 러브, 그레이스, 트레저 같은 단어가 감정적 연결을 만들 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 럭셔리 시장을 위해서는 우아하고 정교한 이름이, 젊은 층을 위해서는 현대적이고 트렌디한 이름이, 웨딩 시장을 위해서는 로맨틱하고 영원한 느낌의 이름이 효과적입니다. 타겟 고객의 취향과 기대를 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(이커머스용), 소셜 미디어 핸들(인스타그램, 핀터레스트 특히 중요), 온라인 마켓플레이스(Etsy, Amazon), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 주얼리 비즈니스는 시각적 플랫폼과 온라인 판매 채널이 특히 중요합니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 품질 있는 주얼리를 연상시키는지, 어떤 스타일의 주얼리를 기대하는지, 신뢰할 수 있고 우아하게 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 주얼리 라인 추가, 다양한 가격대 제품 도입, 온라인과 오프라인 채널 확장, 액세서리나 시계로 확장, 인정받는 브랜드 구축. 이상적인 주얼리 사업 이름은 우아하고, 기억에 남고, 품질을 전달하며, 아름다운 주얼리 경험을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '엘레강스젬', description: '우아한 보석을 의미하여 세련되고 품질 높은 주얼리 컬렉션을 암시합니다.' },
    { name: '골든그레이스', description: '황금빛 우아함을 의미하여 럭셔리하고 우아한 금 주얼리를 표현합니다.' },
    { name: '래디언스주얼', description: '빛나는 보석을 의미하여 눈부시게 빛나는 주얼리의 아름다움을 암시합니다.' },
    { name: '스파클스톤', description: '반짝이는 돌을 의미하여 빛나는 보석의 매력을 직접적으로 표현합니다.' },
    { name: '티아라트레저', description: '티아라의 보물을 의미하여 왕관 같은 귀중한 주얼리 컬렉션을 암시합니다.' },
    { name: '루미너스럭스', description: '빛나는 럭셔리를 의미하여 광채나는 고급 주얼리를 표현합니다.' },
    { name: '샤인컬렉션', description: '빛나는 컬렉션을 의미하여 다양한 반짝이는 주얼리 라인업을 암시합니다.' },
    { name: '젬가든', description: '보석 정원을 의미하여 다양한 보석이 피어나는 컬렉션을 표현합니다.' },
    { name: '헤어룸앤하트', description: '가보와 마음을 의미하여 대대로 전해지는 소중한 주얼리를 암시합니다.' },
    { name: '인피니티젬스', description: '무한한 보석들을 의미하여 끝없는 아름다움과 영원한 가치를 표현합니다.' },
    { name: '저니주얼', description: '여정의 보석을 의미하여 삶의 특별한 순간들을 기념하는 주얼리를 암시합니다.' },
    { name: '키스드바이스타즈', description: '별에게 키스받은을 의미하여 천상의 영감을 받은 로맨틱한 주얼리를 표현합니다.' },
    { name: '라벤더럭스', description: '라벤더 럭셔리를 의미하여 우아하고 부드러운 럭셔리 주얼리를 암시합니다.' },
    { name: '문빔아틀리에', description: '달빛 공방을 의미하여 달빛처럼 은은하게 빛나는 장인 주얼리를 표현합니다.' },
    { name: '노블래디언스', description: '고귀한 빛을 의미하여 귀족적인 우아함과 빛나는 아름다움을 암시합니다.' },
    { name: '오퓰런트오리진', description: '풍요로운 기원을 의미하여 럭셔리의 원천으로서의 브랜드 정체성을 표현합니다.' },
    { name: '펄드퍼펙션', description: '진주의 완벽함을 의미하여 진주 주얼리의 완벽한 아름다움을 암시합니다.' },
    { name: '퀸스큐레이션', description: '여왕의 큐레이션을 의미하여 왕실 품질로 선별된 주얼리 컬렉션을 표현합니다.' },
    { name: '로즈앤래디언스', description: '장미와 빛을 의미하여 로맨틱하고 빛나는 주얼리 컬렉션을 암시합니다.' },
    { name: '실버사가', description: '은의 서사시를 의미하여 은 주얼리로 전하는 이야기와 전통을 표현합니다.' },
  ],
},

// =============================================================================
// LIP-GLOSS - 립글로스 사업 이름 생성기
// =============================================================================
'lip-gloss': {
  slug: 'lip-gloss',
  name: '립글로스 비즈니스 이름 생성기',
  title: '무료 AI 립글로스 사업 이름 아이디어 생성기',
  description: '무료 AI 립글로스 사업 이름 생성기로 트렌디하고 매력적인 립글로스 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 립글로스 사업 이름 생성기로 매력적이고 기억에 남는 사업 이름을 만드세요. 립글로스 브랜드, 립 코스메틱, 뷰티 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '립글로스 이름 생성',
  inputLabel: '립글로스 비즈니스 세부 정보',
  inputPlaceholder: '립글로스 비즈니스를 설명하세요 (예: 비건 립글로스, 고광택 포뮬러, 천연 성분 사용)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in lip gloss and lip cosmetics businesses. Generate unique, memorable business names that evoke beauty, glamour, and irresistible shine. Consider these elements:

- Lip and mouth references (Lip, Pout, Kiss, Smile, Glossy)
- Shine and glow terms (Gloss, Shine, Shimmer, Glow, Sparkle)
- Beauty and glamour (Glam, Beauty, Pretty, Gorgeous, Stunning)
- Texture and feel (Smooth, Lush, Velvet, Silky, Luxe)
- Color and vibrancy (Color, Hue, Tint, Pop, Vibrant)

Create names that are fun, trendy, and convey the glamorous appeal of beautiful lip products.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '립글로스 브랜드 런칭',
      description: '새로운 립글로스 브랜드를 런칭하는 기업가들은 생성기를 사용하여 트렌디하고 매력적인 이름을 만듭니다. 이 도구는 브랜드의 독특한 포뮬러와 미적 감각을 전달하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '인디 뷰티 브랜드 개발',
      description: '소규모 배치나 핸드메이드 립글로스를 제공하는 인디 뷰티 창업자들은 생성기를 사용하여 독창성과 장인 정신을 전달하는 이름을 개발합니다. 이 도구는 니치 시장에 어필하는 독특한 이름을 제공합니다.',
    },
    {
      title: '클린 뷰티 립 제품 브랜딩',
      description: '천연, 비건, 클린 뷰티 립글로스를 전문으로 하는 사업주들은 생성기를 사용하여 순수함과 자연적 아름다움을 전달하는 이름을 만듭니다. 이 도구는 의식 있는 소비자에게 어필하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 립글로스 사업 이름이란 무엇인가요?', answer: '좋은 립글로스 사업 이름은 재미있고 트렌디하며, 광택과 아름다움을 전달해야 합니다. 기억하기 쉽고, 타겟 시장(젊은 층, 럭셔리, 클린 뷰티 등)에 적합해야 합니다. 또한 브랜드의 개성과 제품의 특성을 암시할 수 있으면 효과적입니다.' },
    { question: '립글로스 사업 이름에 "글로스"나 "립"을 포함해야 하나요?', answer: '이러한 단어를 포함하면 제품 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 뷰티 브랜드는 이 단어 없이도 제품 범주를 암시하는 창의적인 이름을 사용합니다. 브랜드 확장 계획(다른 립 제품, 메이크업 등)을 고려하세요.' },
    { question: '립글로스 이름에 색상이나 맛을 포함해야 하나요?', answer: '색상이나 맛을 포함하면 특정 제품 라인에 대한 기대를 설정합니다. 그러나 브랜드 전체 이름에는 더 넓은 이름이 다양한 제품 라인을 수용하는 데 유연합니다. 개별 제품명에 색상/맛을 사용하는 것도 좋은 전략입니다.' },
    { question: '현재 인기 있는 립글로스 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 자기 표현 강조(유어글로우, 셀프러브), 질감 관련(벨벳, 버터리, 멜트), 자연 영감(허니, 로즈, 네타르), 글램 강조(글리터, 스파클, 다즐), 간결한 한 단어 이름(푸시, 팝, 글로우)이 포함됩니다.' },
    { question: '립글로스 사업 이름에 타겟 고객층을 반영해야 하나요?', answer: '타겟 고객(Z세대, 밀레니얼, 성숙한 여성 등)에 따라 이름 스타일을 조정할 수 있습니다. 젊은 층에게는 재미있고 트렌디한 이름이, 성숙한 고객에게는 세련되고 우아한 이름이 효과적입니다. 브랜드 정체성과 타겟을 일치시키세요.' },
    { question: '립글로스 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(특히 인스타그램, TikTok), 뷰티 마켓플레이스(세포라, 얼타), 상표 데이터베이스를 확인하세요. 뷰티 업계는 소셜 미디어 존재가 특히 중요합니다.' },
    { question: '립글로스 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 광택 관련(글로스, 샤인, 쉬머, 글로우), 질감 관련(스무스, 러쉬, 벨벳, 실키), 매력 관련(글램, 뷰티, 프리티, 키스), 색상 관련(틴트, 휴, 팝, 블러쉬), 럭셔리 관련(럭스, 오퓰런트, 프레스티지)이 포함됩니다.' },
    { question: '비건/클린 뷰티 립글로스 이름을 다르게 해야 하나요?', answer: '비건이나 클린 뷰티를 강조한다면 이를 반영하는 이름이 의식 있는 소비자를 끌어들일 수 있습니다. 퓨어, 내추럴, 클린, 그린 같은 단어나 식물/자연 영감의 이름이 효과적입니다. 그러나 품질과 효과도 함께 전달해야 합니다.' },
    { question: '립글로스 브랜드에서 제품 라인 확장을 어떻게 고려해야 하나요?', answer: '립글로스에서 시작하지만 립스틱, 립 오일, 립 케어 등으로 확장할 수 있습니다. 너무 좁은 이름(예: "글로스온리")은 확장을 제한할 수 있으므로 더 넓은 립 또는 뷰티 관련 이름을 고려하세요.' },
    { question: '립글로스 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 발음이나 철자가 어려운 이름, 기존 유명 뷰티 브랜드와 너무 유사한 이름, 특정 트렌드에 국한되어 빠르게 구식이 될 수 있는 이름, 타겟 고객에게 적절한 톤을 전달하지 못하는 이름, 부정적인 연상을 일으킬 수 있는 단어.' },
  ],
  howToChoose: {
    intro: '립글로스 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 아름다움, 자신감, 그리고 완벽한 광택을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제품 포장, 소셜 미디어, 뷰티 리테일러, 마케팅 캠페인에 나타납니다—고객이 브랜드를 인식하고 기억하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '립글로스 비즈니스 아이덴티티 정의', description: '이름 생성 전에 립글로스 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 립글로스를 제공할 것인지(하이 샤인, 틴티드, 플럼핑, 매트), 타겟 고객은 누구인지(Z세대, 밀레니얼, 메이크업 아티스트), 브랜드 개성은 무엇인지(재미있고 장난스러운, 세련되고 럭셔리한, 자연스럽고 클린한), 차별화 포인트는 무엇인지(포뮬러, 성분, 가격대) 고려하세요.' },
      { title: '매력과 자신감 전달', description: '립글로스는 자기 표현의 도구입니다. 이름은 아름다움과 매력을 전달하고, 자신감 향상을 암시하고, 광택과 빛남을 표현하고, 섹시함과 매혹을 암시하고, 완벽한 룩 완성을 약속해야 합니다. 고객이 제품을 사용하면 더 아름다워질 것이라는 기대감을 느끼게 하세요.' },
      { title: '브랜드 개성 표현', description: '립글로스 브랜드는 강한 개성이 필요합니다. 재미있고 장난스러운지(팝, 버블, 스위트), 세련되고 럭셔리한지(럭스, 오퓰런트, 프레스티지), 자연스럽고 클린한지(퓨어, 네이처, 오가닉), 대담하고 트렌디한지(보스, 퀸, 슬레이) 결정하세요. 이름이 브랜드 개성을 일관되게 전달해야 합니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. Z세대를 위해서는 재미있고 소셜 미디어 친화적인 이름이, 밀레니얼을 위해서는 트렌디하고 자기 케어 중심의 이름이, 럭셔리 시장을 위해서는 세련되고 고급스러운 이름이 효과적입니다. 타겟 고객의 언어와 가치관을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(이커머스용), 소셜 미디어 핸들(인스타그램, TikTok 특히 중요), 뷰티 마켓플레이스(세포라, 얼타, 아마존), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 뷰티 비즈니스는 소셜 미디어와 인플루언서 마케팅이 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 매력적인 립글로스를 연상시키는지, 어떤 유형의 제품을 기대하는지, 구매하고 싶은 욕구를 느끼는지, 기억하고 친구에게 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 립 제품 라인 추가(립스틱, 립 오일), 다른 메이크업 카테고리 확장, 스킨케어로 확장, 콜라보레이션 및 한정판 출시, 인정받는 뷰티 브랜드 구축. 이상적인 립글로스 사업 이름은 매력적이고, 기억에 남고, 트렌디하며, 완벽한 광택을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '글로시드림', description: '광택의 꿈을 의미하여 꿈같이 완벽한 광택을 선사하는 립글로스를 암시합니다.' },
    { name: '루미너스립', description: '빛나는 입술을 의미하여 환하게 빛나는 입술을 만들어주는 제품을 표현합니다.' },
    { name: '샤인시크릿', description: '빛남의 비밀을 의미하여 완벽한 광택의 비밀을 담은 립글로스를 암시합니다.' },
    { name: '벨벳글로우', description: '벨벳 광택을 의미하여 벨벳처럼 부드러우면서 빛나는 질감을 표현합니다.' },
    { name: '퓨어푸티', description: '순수한 입술을 의미하여 깨끗하고 순수한 아름다움을 강조하는 립글로스를 암시합니다.' },
    { name: '글램글레이즈', description: '글램 글레이즈를 의미하여 화려하게 코팅된 듯한 럭셔리한 광택을 표현합니다.' },
    { name: '허니히로인', description: '꿀 히로인을 의미하여 꿀처럼 달콤하고 영웅적으로 아름다운 입술을 암시합니다.' },
    { name: '아이리스글로스', description: '아이리스 광택을 의미하여 아이리스 꽃처럼 우아하고 빛나는 립글로스를 표현합니다.' },
    { name: '주시조이', description: '과즙 기쁨을 의미하여 과일처럼 촉촉하고 기쁨을 주는 립글로스를 암시합니다.' },
    { name: '키스드컬러', description: '키스받은 색상을 의미하여 키스한 듯 자연스럽게 물든 색감을 표현합니다.' },
    { name: '럭스리키드', description: '럭셔리 리퀴드를 의미하여 고급스러운 액체 질감의 립글로스를 암시합니다.' },
    { name: '멜로우무스', description: '부드러운 무스를 의미하여 무스처럼 가볍고 부드러운 질감을 표현합니다.' },
    { name: '네타글로스', description: '네타(꿀물) 광택을 의미하여 꿀물처럼 달콤하고 윤기나는 립글로스를 암시합니다.' },
    { name: '오퓰런트오라', description: '풍요로운 오라를 의미하여 럭셔리하고 화려한 아우라를 풍기는 립글로스를 표현합니다.' },
    { name: '플럼퍼펙트', description: '플럼 퍼펙트를 의미하여 완벽하게 볼륨감 있는 입술을 만드는 플럼핑 글로스를 암시합니다.' },
    { name: '퀸즈쿠튀르', description: '여왕의 쿠튀르를 의미하여 여왕처럼 고급스럽고 맞춤 제작된 듯한 립글로스를 표현합니다.' },
    { name: '로지레이디언스', description: '장미빛 광채를 의미하여 장미처럼 아름답고 빛나는 입술을 암시합니다.' },
    { name: '실키샤인', description: '실크 광택을 의미하여 실크처럼 매끄럽고 빛나는 질감을 표현합니다.' },
    { name: '트윙클틴트', description: '반짝이는 틴트를 의미하여 반짝임과 함께 자연스러운 색감을 더하는 립글로스를 암시합니다.' },
    { name: '울트라유토피아', description: '궁극의 유토피아를 의미하여 완벽한 입술의 이상향을 실현하는 립글로스를 표현합니다.' },
  ],
},

// =============================================================================
// MARKETING - 마케팅 사업 이름 생성기
// =============================================================================
'marketing': {
  slug: 'marketing',
  name: '마케팅 비즈니스 이름 생성기',
  title: '무료 AI 마케팅 사업 이름 아이디어 생성기',
  description: '무료 AI 마케팅 사업 이름 생성기로 창의적이고 전문적인 마케팅 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 마케팅 사업 이름 생성기로 창의적이고 기억에 남는 사업 이름을 만드세요. 마케팅 에이전시, 디지털 마케팅, 브랜드 컨설팅 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '마케팅 이름 생성',
  inputLabel: '마케팅 비즈니스 세부 정보',
  inputPlaceholder: '마케팅 비즈니스를 설명하세요 (예: 소셜 미디어 전문 에이전시, B2B 마케팅, 브랜드 전략 컨설팅)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in marketing and advertising businesses. Generate unique, memorable business names that evoke creativity, results, and strategic thinking. Consider these elements:

- Marketing concepts (Market, Brand, Campaign, Strategy, Engage)
- Growth and results (Growth, Boost, Amplify, Accelerate, Elevate)
- Creative elements (Creative, Spark, Ignite, Inspire, Vision)
- Digital and modern terms (Digital, Media, Social, Online, Viral)
- Connection and reach (Connect, Reach, Impact, Influence, Network)

Create names that are dynamic, memorable, and convey marketing expertise and innovation.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '마케팅 에이전시 런칭',
      description: '새로운 마케팅 에이전시를 시작하는 기업가들은 생성기를 사용하여 창의성과 결과 지향성을 전달하는 이름을 만듭니다. 이 도구는 전략적 전문성과 혁신적 접근 방식을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '디지털 마케팅 전문 회사',
      description: '디지털 마케팅, 소셜 미디어, 또는 온라인 광고를 전문으로 하는 회사들은 생성기를 사용하여 디지털 전문성과 현대적 접근 방식을 전달하는 이름을 개발합니다. 이 도구는 온라인 마케팅 역량을 암시하는 이름을 제공합니다.',
    },
    {
      title: '브랜드 컨설팅 회사 설립',
      description: '브랜드 전략과 컨설팅 서비스를 제공하는 전문가들은 생성기를 사용하여 전략적 사고와 브랜드 전문성을 전달하는 이름을 만듭니다. 이 도구는 고객의 브랜드 성장을 돕는 파트너십을 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 마케팅 사업 이름이란 무엇인가요?', answer: '좋은 마케팅 사업 이름은 창의적이고 역동적이며, 전문성과 결과를 전달해야 합니다. 기억하기 쉽고, 타겟 시장(스타트업, 대기업, 특정 산업 등)에 적합해야 합니다. 또한 마케팅 전문 분야(디지털, 브랜딩, 콘텐츠 등)를 암시하거나 성장과 성공을 연상시킬 수 있으면 효과적입니다.' },
    { question: '마케팅 사업 이름에 "마케팅"을 포함해야 하나요?', answer: '"마케팅"을 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 에이전시들은 이 단어 없이도 창의적이고 기억에 남는 이름을 사용합니다. 서비스 확장 계획(PR, 브랜딩, 광고 등)을 고려하여 유연한 이름을 선택할 수도 있습니다.' },
    { question: '마케팅 에이전시 이름에 창업자 이름을 사용해야 하나요?', answer: '창업자 이름 사용은 마케팅 업계에서 일반적이며 개인 브랜딩과 전문성을 강조하는 데 효과적입니다. 그러나 팀이 성장하거나 비즈니스를 매각할 계획이 있다면 개인 이름에 의존하지 않는 것이 좋을 수 있습니다. 장기 목표를 고려하세요.' },
    { question: '현재 인기 있는 마케팅 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 성장 관련 단어(그로스, 스케일, 엘리베이트), 연결 관련(커넥트, 인게이지, 리치), 에너지 관련(스파크, 이그나이트, 앰플리파이), 디지털 관련(디지털, 소셜, 바이럴), 간결한 한 단어 이름(허브, 팔스, 플로우)이 포함됩니다.' },
    { question: '마케팅 사업 이름에 전문 분야를 반영해야 하나요?', answer: '특정 분야(소셜 미디어, SEO, 콘텐츠 등)를 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 서비스 영역이 확장될 수 있다면 더 넓은 이름이 유연성을 제공합니다. 비즈니스 전략에 따라 결정하세요.' },
    { question: '마케팅 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름(.com, .agency, .co), 소셜 미디어 핸들(LinkedIn, Instagram, Twitter), 상표 데이터베이스를 확인하세요. 또한 에이전시 디렉토리(Clutch, Agency Spotter)에서 유사한 이름이 있는지 검색해보세요.' },
    { question: '마케팅 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 성장 관련(그로스, 부스트, 스케일, 엘리베이트), 창의성 관련(크리에이티브, 스파크, 비전, 이노베이션), 연결 관련(커넥트, 리치, 인게이지, 임팩트), 전략 관련(스트래티지, 솔루션, 파트너스), 디지털 관련(디지털, 미디어, 소셜, 온라인)이 포함됩니다.' },
    { question: 'B2B와 B2C 마케팅 회사 이름을 다르게 해야 하나요?', answer: 'B2B 마케팅 회사는 전문적이고 결과 중심적인 이름이 효과적이고, B2C나 소비자 브랜드 중심 회사는 더 창의적이고 에너지 넘치는 이름이 좋을 수 있습니다. 그러나 두 시장 모두에 어필하는 균형 잡힌 이름도 효과적입니다.' },
    { question: '지역 기반 마케팅 회사 이름이 좋을까요?', answer: '지역 비즈니스를 타겟으로 한다면 지역 이름이 로컬 연결을 강조할 수 있습니다. 그러나 원격 서비스나 글로벌 확장을 계획한다면 지역에 국한되지 않는 이름이 더 유연합니다. 비즈니스 모델을 고려하세요.' },
    { question: '마케팅 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 너무 일반적이어서 차별화가 안 되는 이름, 특정 기술이나 플랫폼에 국한되어 빠르게 구식이 될 수 있는 이름, 발음이나 철자가 어려운 이름, 기존 유명 에이전시와 너무 유사한 이름, 전문성이나 결과를 전달하지 못하는 이름.' },
  ],
  howToChoose: {
    intro: '마케팅 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 성장, 결과, 그리고 창의적 솔루션을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제안서, 웹사이트, 명함, 케이스 스터디에 나타납니다—잠재 고객이 마케팅 서비스를 인식하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '마케팅 비즈니스 아이덴티티 정의', description: '이름 생성 전에 마케팅 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 마케팅 서비스를 제공할 것인지(디지털, 브랜딩, 콘텐츠, 퍼포먼스), 타겟 고객은 누구인지(스타트업, SMB, 대기업, 특정 산업), 회사 문화는 어떤지(창의적, 데이터 중심, 전략적), 차별화 포인트는 무엇인지(전문성, 결과, 혁신, 파트너십) 고려하세요.' },
      { title: '전문성과 결과 전달', description: '마케팅 투자는 ROI를 기대합니다. 이름은 전문적 역량을 전달하고, 결과 지향성을 암시하고, 성장과 성공을 약속하고, 전략적 사고를 표현하고, 측정 가능한 임팩트를 강조해야 합니다. 고객이 마케팅 목표를 달성할 수 있다는 자신감을 느끼게 하세요.' },
      { title: '창의성과 혁신 표현', description: '마케팅은 창의적 산업입니다. 이름은 창의적 접근을 암시하고, 혁신적 솔루션을 전달하고, 신선한 아이디어를 표현하고, 트렌드 선도를 약속하고, 독특한 관점을 강조해야 합니다. 스파크, 이그나이트, 크리에이티브 같은 단어가 창의성을 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 스타트업을 위해서는 민첩하고 혁신적인 이름이, 대기업을 위해서는 전문적이고 확립된 느낌의 이름이, 크리에이티브 산업을 위해서는 예술적이고 독특한 이름이 효과적입니다. 타겟 고객의 기대와 언어를 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com, .agency, .co 등), 소셜 미디어 핸들(LinkedIn, Instagram, Twitter), 에이전시 디렉토리(Clutch, Agency Spotter), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 마케팅 회사는 자체 온라인 존재가 역량의 증거가 됩니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 전문적인 마케팅 서비스를 연상시키는지, 어떤 유형의 서비스를 기대하는지, 신뢰할 수 있고 창의적으로 느껴지는지, 기억하고 추천하기 쉬운지, 결과를 기대하게 하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 마케팅 서비스 추가, 전문가 팀 확장, 새로운 산업 분야 진출, 글로벌 시장 확대, 인정받는 에이전시 브랜드 구축. 이상적인 마케팅 사업 이름은 창의적이고, 전문적이고, 결과 지향적이며, 뛰어난 마케팅 서비스를 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '그로스엔진', description: '성장 엔진을 의미하여 고객 비즈니스 성장을 추진하는 강력한 마케팅 역량을 암시합니다.' },
    { name: '앰플리파이미디어', description: '증폭 미디어를 의미하여 브랜드 메시지를 확대하고 증폭시키는 미디어 전문성을 표현합니다.' },
    { name: '스파크스트래티지', description: '스파크 전략을 의미하여 영감을 불러일으키는 창의적인 마케팅 전략을 암시합니다.' },
    { name: '리치랩스', description: '도달 연구소를 의미하여 타겟 오디언스 도달을 위한 혁신적인 접근 방식을 표현합니다.' },
    { name: '브랜드부스터', description: '브랜드 부스터를 의미하여 브랜드 인지도와 성장을 촉진하는 서비스를 암시합니다.' },
    { name: '바이럴비전', description: '바이럴 비전을 의미하여 바이럴 콘텐츠와 캠페인에 대한 전문적 비전을 표현합니다.' },
    { name: '커넥트크리에이티브', description: '연결 창의성을 의미하여 창의적인 방식으로 브랜드와 고객을 연결하는 역량을 암시합니다.' },
    { name: '임팩트허브', description: '임팩트 허브를 의미하여 마케팅 임팩트의 중심지로서의 역할을 표현합니다.' },
    { name: '이그나이트에이전시', description: '점화 에이전시를 의미하여 브랜드 성장에 불을 붙이는 열정적인 마케팅 서비스를 암시합니다.' },
    { name: '모멘텀마케팅', description: '모멘텀 마케팅을 의미하여 지속적인 성장 모멘텀을 구축하는 전략적 마케팅을 표현합니다.' },
    { name: '펄스프로모션', description: '맥박 프로모션을 의미하여 시장의 맥박을 읽고 효과적인 프로모션을 제공하는 서비스를 암시합니다.' },
    { name: '엘리베이트엔게이지', description: '상승 참여를 의미하여 브랜드 참여도를 높이고 상승시키는 마케팅 전략을 표현합니다.' },
    { name: '프론티어마케팅', description: '프론티어 마케팅을 의미하여 마케팅의 새로운 영역을 개척하는 혁신적 접근을 암시합니다.' },
    { name: '넥서스네트워크', description: '연결점 네트워크를 의미하여 브랜드와 고객 사이의 강력한 연결을 구축하는 서비스를 표현합니다.' },
    { name: '오퍼스아웃리치', description: '작품 아웃리치를 의미하여 예술적이고 전략적인 아웃리치 캠페인 전문성을 암시합니다.' },
    { name: '퀀텀퀘스트마케팅', description: '퀀텀 탐구 마케팅을 의미하여 혁신적인 마케팅 솔루션 탐구에 대한 헌신을 표현합니다.' },
    { name: '레조넌스리치', description: '공명 도달을 의미하여 타겟 오디언스와 공명하는 효과적인 마케팅 메시지를 암시합니다.' },
    { name: '스케일스파크', description: '스케일 스파크를 의미하여 비즈니스 확장에 불꽃을 일으키는 마케팅 서비스를 표현합니다.' },
    { name: '트렌드터너', description: '트렌드 전환자를 의미하여 시장 트렌드를 이끌고 전환시키는 영향력을 암시합니다.' },
    { name: '업리프트유나이티드', description: '상승 연합을 의미하여 고객과 함께 브랜드를 상승시키는 파트너십 지향적 마케팅을 표현합니다.' },
  ],
},

// =============================================================================
// MUSIC - 음악 사업 이름 생성기
// =============================================================================
'music': {
  slug: 'music',
  name: '음악 비즈니스 이름 생성기',
  title: '무료 AI 음악 사업 이름 아이디어 생성기',
  description: '무료 AI 음악 사업 이름 생성기로 창의적이고 감성적인 음악 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 음악 사업 이름 생성기로 감성적이고 기억에 남는 사업 이름을 만드세요. 음악 스튜디오, 레코드 레이블, 음악 학원 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '음악 이름 생성',
  inputLabel: '음악 비즈니스 세부 정보',
  inputPlaceholder: '음악 비즈니스를 설명하세요 (예: 인디 레코드 레이블, 음악 프로덕션 스튜디오, 어린이 음악 교육)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in music and audio businesses. Generate unique, memorable business names that evoke rhythm, melody, and artistic expression. Consider these elements:

- Musical terms (Melody, Rhythm, Harmony, Beat, Tune)
- Sound references (Sound, Audio, Acoustic, Sonic, Echo)
- Artistic expression (Art, Soul, Vibe, Groove, Flow)
- Instruments and notes (Note, Chord, Key, String, Bass)
- Emotion and feeling (Feel, Move, Inspire, Dream, Rise)

Create names that are memorable, rhythmic, and convey passion for music and sound.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '레코딩 스튜디오 런칭',
      description: '새로운 레코딩 스튜디오를 여는 프로듀서나 엔지니어들은 생성기를 사용하여 전문성과 창의성을 전달하는 이름을 만듭니다. 이 도구는 고품질 사운드와 예술적 환경을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '레코드 레이블 설립',
      description: '독립 레코드 레이블을 시작하는 음악 기업가들은 생성기를 사용하여 독특한 음악적 정체성과 비전을 전달하는 이름을 개발합니다. 이 도구는 레이블의 장르나 철학을 암시하는 기억에 남는 이름을 제공합니다.',
    },
    {
      title: '음악 교육 비즈니스',
      description: '음악 학원이나 교육 서비스를 시작하는 교육자들은 생성기를 사용하여 학습의 기쁨과 음악적 성장을 전달하는 이름을 만듭니다. 이 도구는 학생과 학부모에게 어필하는 환영하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 음악 사업 이름이란 무엇인가요?', answer: '좋은 음악 사업 이름은 음악적 감성과 열정을 전달하며, 기억에 남고 리듬감이 있어야 합니다. 비즈니스 유형(스튜디오, 레이블, 학원 등)에 적합하고, 타겟 고객(아티스트, 학생, 기업 등)에게 어필해야 합니다. 또한 음악 장르나 스타일을 암시할 수 있으면 효과적입니다.' },
    { question: '음악 사업 이름에 음악 용어를 포함해야 하나요?', answer: '멜로디, 리듬, 비트 같은 음악 용어를 포함하면 비즈니스 영역을 즉시 전달합니다. 그러나 너무 일반적이면 차별화가 어려울 수 있습니다. 독특한 조합이나 은유적 표현을 사용하면 더 기억에 남는 이름을 만들 수 있습니다.' },
    { question: '음악 사업 이름에 장르를 반영해야 하나요?', answer: '특정 장르(록, 재즈, 클래식, 힙합 등)를 전문으로 한다면 이를 반영하면 올바른 아티스트나 고객을 끌어들일 수 있습니다. 그러나 다양한 장르를 다루거나 확장할 계획이라면 더 넓은 이름이 유연성을 제공합니다.' },
    { question: '현재 인기 있는 음악 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 사운드 관련 단어(소닉, 에코, 웨이브), 감정 관련(바이브, 소울, 필), 동작 관련(플로우, 그루브, 리프트), 간결한 한 단어 이름(펄스, 노트, 키), 창의적 합성어(사운드스케이프, 비트메이커)가 포함됩니다.' },
    { question: '레코드 레이블과 스튜디오 이름을 다르게 해야 하나요?', answer: '레코드 레이블은 종종 더 예술적이고 브랜드 정체성이 강한 이름을 사용하고, 스튜디오는 전문성과 기술적 역량을 강조하는 이름이 일반적입니다. 그러나 두 역할을 모두 수행한다면 양쪽에 어울리는 유연한 이름을 선택하세요.' },
    { question: '음악 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram, SoundCloud, YouTube, Spotify), 음악 플랫폼, 상표 데이터베이스를 확인하세요. 음악 비즈니스는 스트리밍 플랫폼과 소셜 미디어 존재가 특히 중요합니다.' },
    { question: '음악 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 음악 관련(멜로디, 하모니, 비트, 리듬, 코드), 사운드 관련(사운드, 소닉, 에코, 오디오, 어쿠스틱), 감정 관련(소울, 바이브, 필, 그루브), 동작 관련(플로우, 리프트, 라이즈, 무브), 공간 관련(스튜디오, 랩, 룸, 하우스)이 포함됩니다.' },
    { question: '음악 학원 이름은 어떻게 접근해야 하나요?', answer: '음악 학원 이름은 학습의 기쁨, 음악적 성장, 환영하는 분위기를 전달해야 합니다. 아카데미, 스쿨, 인스티튜트 같은 교육적 단어와 음악 용어를 결합하면 효과적입니다. 학생과 학부모 모두에게 신뢰와 열정을 전달하세요.' },
    { question: '지역 기반 음악 사업 이름이 좋을까요?', answer: '지역 음악 씬을 강조하고 싶다면 지역 이름이 로컬 아이덴티티를 구축할 수 있습니다. 그러나 온라인으로 아티스트와 작업하거나 글로벌 도달을 목표로 한다면 지역에 국한되지 않는 이름이 더 적합합니다.' },
    { question: '음악 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 발음이나 철자가 어려운 이름, 기존 유명 레이블이나 스튜디오와 너무 유사한 이름, 특정 장르에 국한되어 확장을 제한하는 이름, 전문성이나 음악적 열정을 전달하지 못하는 이름, 트렌디해서 빠르게 구식이 될 수 있는 이름.' },
  ],
  howToChoose: {
    intro: '음악 비즈니스의 완벽한 이름을 선택하는 것은 아티스트, 학생, 음악 애호가에게 창의적 표현과 음악적 우수성을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 앨범 크레딧, 웹사이트, 스트리밍 플랫폼, 마케팅 자료에 나타납니다—음악 커뮤니티에서 브랜드가 인식되는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '음악 비즈니스 아이덴티티 정의', description: '이름 생성 전에 음악 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 음악 서비스를 제공할 것인지(레코딩, 프로덕션, 교육, 라이브 이벤트), 타겟 고객은 누구인지(신인 아티스트, 확립된 아티스트, 학생, 기업), 음악 스타일이나 장르는 무엇인지(다양한 장르, 특정 장르 전문), 차별화 포인트는 무엇인지(장비, 전문성, 분위기, 가격) 고려하세요.' },
      { title: '음악적 열정과 전문성 전달', description: '음악 비즈니스는 열정으로 움직입니다. 이름은 음악에 대한 사랑을 전달하고, 전문적 역량을 암시하고, 창의적 환경을 약속하고, 품질에 대한 헌신을 표현하고, 예술적 비전을 반영해야 합니다. 아티스트와 음악 애호가가 공감할 수 있는 이름을 만드세요.' },
      { title: '감정적 연결 구축', description: '음악은 감정의 언어입니다. 이름은 감정적 반응을 불러일으키고, 음악의 힘을 암시하고, 영감과 창의성을 전달하고, 커뮤니티 소속감을 제공하고, 음악적 여정을 약속해야 합니다. 소울, 바이브, 하트 같은 단어가 감정적 연결을 만들 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 인디 아티스트를 위해서는 독립적이고 예술적인 이름이, 상업 프로덕션을 위해서는 전문적이고 현대적인 이름이, 음악 교육을 위해서는 환영하고 성장 지향적인 이름이 효과적입니다. 타겟 고객의 가치관과 열망을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름, 소셜 미디어 핸들(Instagram, YouTube, TikTok), 음악 플랫폼(Spotify, SoundCloud, Apple Music), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 음악 비즈니스는 스트리밍 플랫폼과 소셜 미디어 존재가 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 전문적인 음악 서비스를 연상시키는지, 어떤 장르나 스타일을 기대하는지, 창의적이고 열정적으로 느껴지는지, 기억하고 추천하기 쉬운지, 함께 작업하고 싶은지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 음악 서비스 추가, 다양한 장르 확장, 아티스트 로스터 성장, 관련 미디어 분야 진출, 인정받는 음악 브랜드 구축. 이상적인 음악 사업 이름은 음악적이고, 기억에 남고, 열정적이며, 뛰어난 음악 서비스를 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '하모니하우스', description: '하모니의 집을 의미하여 조화로운 음악이 만들어지는 창의적인 공간을 암시합니다.' },
    { name: '소닉스튜디오', description: '소닉 스튜디오를 의미하여 최첨단 사운드 기술을 갖춘 전문 레코딩 시설을 표현합니다.' },
    { name: '멜로딕마인드', description: '멜로딕한 마음을 의미하여 멜로디에 대한 깊은 이해와 음악적 감성을 암시합니다.' },
    { name: '비트블렌더', description: '비트 블렌더를 의미하여 다양한 비트와 사운드를 혼합하는 프로덕션 전문성을 표현합니다.' },
    { name: '그루브갤러리', description: '그루브 갤러리를 의미하여 다양한 그루브와 리듬이 전시되는 음악적 공간을 암시합니다.' },
    { name: '에코엣지', description: '에코 엣지를 의미하여 반향과 울림이 있는 독특한 사운드 제작을 표현합니다.' },
    { name: '플로우팩토리', description: '플로우 공장을 의미하여 자연스러운 음악적 흐름이 만들어지는 창작 공간을 암시합니다.' },
    { name: '노트네스트', description: '노트의 둥지를 의미하여 음표들이 모여 아름다운 음악이 탄생하는 곳을 표현합니다.' },
    { name: '리듬리프트', description: '리듬 리프트를 의미하여 리듬으로 기분을 고양시키는 음악의 힘을 암시합니다.' },
    { name: '소울사운드', description: '소울 사운드를 의미하여 영혼이 담긴 깊이 있는 음악 제작을 표현합니다.' },
    { name: '튠타워', description: '튠 타워를 의미하여 다양한 곡들이 쌓여가는 음악적 성취를 암시합니다.' },
    { name: '바이브빌리지', description: '바이브 빌리지를 의미하여 좋은 바이브가 넘치는 음악 커뮤니티를 표현합니다.' },
    { name: '웨이브워크샵', description: '웨이브 워크샵을 의미하여 음파와 사운드를 다루는 전문 작업장을 암시합니다.' },
    { name: '어쿠스틱아크', description: '어쿠스틱 아크를 의미하여 어쿠스틱 사운드의 아름다운 호를 표현합니다.' },
    { name: '코드컬렉티브', description: '코드 콜렉티브를 의미하여 함께 코드와 화음을 만드는 음악 집단을 암시합니다.' },
    { name: '드림데시벨', description: '드림 데시벨을 의미하여 꿈같은 사운드와 볼륨의 음악 제작을 표현합니다.' },
    { name: '앙상블엔진', description: '앙상블 엔진을 의미하여 다양한 악기와 사운드가 어우러지는 음악 제작 동력을 암시합니다.' },
    { name: '퓨전프리퀀시', description: '퓨전 주파수를 의미하여 다양한 장르와 주파수가 융합되는 음악 스타일을 표현합니다.' },
    { name: '인스파이어인스트루먼트', description: '영감을 주는 악기를 의미하여 악기를 통해 영감을 전달하는 음악 교육을 암시합니다.' },
    { name: '키앤코드', description: '키와 코드를 의미하여 음악의 기본 요소에 대한 깊은 이해와 전문성을 표현합니다.' },
  ],
},

// =============================================================================
// PERFUME - 향수 사업 이름 생성기
// =============================================================================
'perfume': {
  slug: 'perfume',
  name: '향수 비즈니스 이름 생성기',
  title: '무료 AI 향수 사업 이름 아이디어 생성기',
  description: '무료 AI 향수 사업 이름 생성기로 우아하고 감각적인 향수 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 향수 사업 이름 생성기로 매혹적이고 기억에 남는 사업 이름을 만드세요. 향수 브랜드, 프래그런스 하우스, 아로마 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '향수 이름 생성',
  inputLabel: '향수 비즈니스 세부 정보',
  inputPlaceholder: '향수 비즈니스를 설명하세요 (예: 럭셔리 니치 향수, 천연 에센셜 오일, 맞춤 향수 서비스)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in perfume and fragrance businesses. Generate unique, memorable business names that evoke scent, elegance, and sensory experiences. Consider these elements:

- Scent and aroma (Scent, Aroma, Fragrance, Essence, Bouquet)
- Floral and nature (Rose, Jasmine, Bloom, Petal, Garden)
- Luxury and elegance (Luxe, Elegance, Prestige, Opulent, Refined)
- Sensory experience (Sense, Feel, Allure, Enchant, Captivate)
- Mystery and allure (Mystique, Secret, Whisper, Dream, Veil)

Create names that are elegant, evocative, and convey the art of fragrance.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '향수 브랜드 런칭',
      description: '새로운 향수 브랜드를 런칭하는 기업가들은 생성기를 사용하여 우아하고 감각적인 이름을 만듭니다. 이 도구는 브랜드의 후각적 정체성과 럭셔리한 포지셔닝을 전달하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '니치 프래그런스 하우스',
      description: '독특하고 예술적인 향수를 제공하는 니치 프래그런스 하우스는 생성기를 사용하여 독창성과 장인 정신을 전달하는 이름을 개발합니다. 이 도구는 향수 애호가에게 어필하는 독특한 이름을 제공합니다.',
    },
    {
      title: '홈 프래그런스 및 아로마 비즈니스',
      description: '캔들, 디퓨저, 룸 스프레이 등 홈 프래그런스를 전문으로 하는 사업주들은 생성기를 사용하여 편안함과 분위기를 전달하는 이름을 만듭니다. 이 도구는 가정에 향기로운 경험을 약속하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 향수 사업 이름이란 무엇인가요?', answer: '좋은 향수 사업 이름은 우아하고 감각적이며, 향기와 아름다움을 불러일으켜야 합니다. 기억에 남고 발음하기 쉬우며, 타겟 시장(럭셔리, 니치, 매스 마켓 등)에 적합해야 합니다. 또한 브랜드의 후각적 정체성이나 철학을 암시할 수 있으면 효과적입니다.' },
    { question: '향수 사업 이름에 "퍼퓸"이나 "프래그런스"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 럭셔리 향수 브랜드는 이 단어 없이도 우아하고 암시적인 이름을 사용합니다. 브랜드 확장 계획(스킨케어, 홈 프래그런스 등)을 고려하여 유연한 이름을 선택할 수도 있습니다.' },
    { question: '향수 이름에 특정 향이나 노트를 포함해야 하나요?', answer: '로즈, 자스민 같은 특정 향을 포함하면 브랜드의 후각적 정체성을 전달할 수 있습니다. 그러나 다양한 향수를 제공하거나 확장할 계획이라면 더 넓은 이름이 유연성을 제공합니다. 개별 제품명에 특정 향을 사용하는 것도 좋은 전략입니다.' },
    { question: '현재 인기 있는 향수 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 신비로운 단어(미스틱, 시크릿, 베일), 자연 영감(블룸, 가든, 페탈), 프랑스어 영향(메종, 아뜰리에, 누아), 감각적 단어(센스, 얼루어, 인챈트), 간결한 한 단어 이름(에센스, 오라, 뮤즈)이 포함됩니다.' },
    { question: '럭셔리 향수와 매스 마켓 향수 이름을 다르게 해야 하나요?', answer: '럭셔리 향수 브랜드는 우아하고 정교한 이름이 효과적이고, 매스 마켓 향수는 더 접근 가능하고 친근한 이름이 좋을 수 있습니다. 니치 향수는 종종 독특하고 예술적인 이름을 사용합니다. 타겟 고객과 가격대에 맞게 선택하세요.' },
    { question: '향수 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram, Pinterest), 뷰티 리테일러(세포라, 백화점), 상표 데이터베이스를 확인하세요. 향수 업계는 상표 보호가 특히 중요하므로 철저한 검색이 필요합니다.' },
    { question: '향수 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 향기 관련(센트, 아로마, 프래그런스, 에센스, 부케), 자연 관련(로즈, 자스민, 블룸, 페탈, 가든), 럭셔리 관련(럭스, 엘레강스, 프레스티지, 오퓰런트), 감각 관련(센스, 얼루어, 인챈트, 캡티베이트), 신비 관련(미스틱, 시크릿, 드림, 베일)이 포함됩니다.' },
    { question: '향수 브랜드에 프랑스어나 이탈리아어를 사용해야 하나요?', answer: '프랑스와 이탈리아는 향수의 역사적 중심지이므로 이 언어를 사용하면 럭셔리와 전통을 암시할 수 있습니다. 그러나 올바르게 사용해야 하며, 타겟 고객이 이해하고 발음할 수 있어야 합니다. 잘못 사용하면 역효과가 날 수 있습니다.' },
    { question: '홈 프래그런스 사업 이름은 어떻게 접근해야 하나요?', answer: '홈 프래그런스 이름은 편안함, 분위기, 집의 따뜻함을 전달해야 합니다. 홈, 하우스, 리빙 같은 단어와 향기 관련 용어를 결합하면 효과적입니다. 캔들, 디퓨저, 룸 스프레이 등 다양한 제품에 적용 가능한 이름을 선택하세요.' },
    { question: '향수 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 발음이나 철자가 어려운 이름, 기존 유명 향수 브랜드와 너무 유사한 이름, 특정 향에 국한되어 확장을 제한하는 이름, 럭셔리나 품질을 전달하지 못하는 이름, 타겟 시장에 적절한 톤을 전달하지 못하는 이름.' },
  ],
  howToChoose: {
    intro: '향수 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 감각적 경험, 아름다움, 그리고 자기 표현을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제품 포장, 매장, 웹사이트, 마케팅 캠페인에 나타납니다—고객이 브랜드를 인식하고 기억하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '향수 비즈니스 아이덴티티 정의', description: '이름 생성 전에 향수 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 향수를 제공할 것인지(럭셔리, 니치, 내추럴, 매스 마켓), 타겟 고객은 누구인지(향수 애호가, 일반 소비자, 특정 연령대), 브랜드 철학은 무엇인지(장인 정신, 지속가능성, 혁신), 가격 포지셔닝은 어떤지(프리미엄, 미드레인지, 접근가능) 고려하세요.' },
      { title: '감각적 경험 전달', description: '향수는 감각의 예술입니다. 이름은 후각적 이미지를 불러일으키고, 감각적 경험을 암시하고, 향기의 아름다움을 전달하고, 감정적 반응을 자극하고, 기억에 남는 순간을 약속해야 합니다. 고객이 이름만으로도 향기로운 경험을 상상할 수 있게 하세요.' },
      { title: '우아함과 럭셔리 표현', description: '향수는 럭셔리와 연결됩니다. 이름은 우아함과 세련됨을 전달하고, 품질과 장인 정신을 암시하고, 프레스티지와 독점성을 표현하고, 아름다움에 대한 헌신을 반영하고, 특별한 가치를 약속해야 합니다. 럭스, 엘레강스, 프레스티지 같은 단어가 럭셔리를 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 럭셔리 시장을 위해서는 우아하고 정교한 이름이, 젊은 층을 위해서는 현대적이고 트렌디한 이름이, 천연/오가닉 시장을 위해서는 자연스럽고 순수한 이름이 효과적입니다. 타겟 고객의 취향과 가치관을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름, 소셜 미디어 핸들(Instagram, Pinterest 특히 중요), 뷰티 리테일러, 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 향수 업계는 상표 보호가 특히 중요하므로 국제적인 상표 검색도 고려하세요.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 품질 있는 향수를 연상시키는지, 어떤 유형의 향을 기대하는지, 우아하고 매력적으로 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 향수 라인 추가, 홈 프래그런스로 확장, 스킨케어나 바디케어 제품 추가, 국제 시장 진출, 인정받는 프래그런스 하우스 구축. 이상적인 향수 사업 이름은 우아하고, 감각적이고, 기억에 남으며, 아름다운 향기 경험을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '아로마아틀리에', description: '아로마 공방을 의미하여 장인 정신으로 향수를 만드는 예술적 공간을 암시합니다.' },
    { name: '블루밍에센스', description: '꽃피는 에센스를 의미하여 꽃처럼 피어나는 아름다운 향기를 표현합니다.' },
    { name: '센트소울', description: '향기의 영혼을 의미하여 깊이 있고 영혼이 담긴 향수 창작을 암시합니다.' },
    { name: '베일드뷰티', description: '베일에 싸인 아름다움을 의미하여 신비롭고 매혹적인 향수 경험을 표현합니다.' },
    { name: '페탈프레스티지', description: '꽃잎의 프레스티지를 의미하여 꽃향기의 고급스러운 럭셔리를 암시합니다.' },
    { name: '미스틱뮤즈', description: '신비로운 뮤즈를 의미하여 영감을 주는 신비로운 향수를 표현합니다.' },
    { name: '에센스엘레강스', description: '에센스의 우아함을 의미하여 순수한 향 에센스의 우아한 아름다움을 암시합니다.' },
    { name: '프래그런트가든', description: '향기로운 정원을 의미하여 다양한 향기가 피어나는 정원 같은 컬렉션을 표현합니다.' },
    { name: '골든글로우', description: '황금빛 광채를 의미하여 따뜻하고 빛나는 럭셔리한 향수를 암시합니다.' },
    { name: '하모니향', description: '조화로운 향을 의미하여 완벽하게 조화된 향의 밸런스를 표현합니다.' },
    { name: '인챈티드에어', description: '마법에 걸린 공기를 의미하여 공기를 마법처럼 변화시키는 향수의 힘을 암시합니다.' },
    { name: '자스민저니', description: '자스민 여정을 의미하여 자스민 향과 함께하는 감각적 여정을 표현합니다.' },
    { name: '라벤더럭스', description: '라벤더 럭스를 의미하여 라벤더의 우아하고 럭셔리한 향수 라인을 암시합니다.' },
    { name: '문라이트뮤스크', description: '달빛 머스크를 의미하여 달빛 아래 은은한 머스크 향의 로맨틱함을 표현합니다.' },
    { name: '노블노트', description: '고귀한 노트를 의미하여 고급스럽고 세련된 향의 노트를 암시합니다.' },
    { name: '오퓰런트오리진', description: '풍요로운 기원을 의미하여 최고급 원료에서 비롯된 럭셔리 향수를 표현합니다.' },
    { name: '퓨어파퓸', description: '순수한 향수를 의미하여 순수하고 정제된 향수 에센스를 암시합니다.' },
    { name: '로즈레인', description: '장미 비를 의미하여 장미 향이 내리는 듯한 풍부한 플로럴 향수를 표현합니다.' },
    { name: '세레니티센트', description: '평온한 향을 의미하여 마음을 안정시키는 편안한 향수를 암시합니다.' },
    { name: '베일드바이올렛', description: '베일에 싸인 바이올렛을 의미하여 신비롭고 섬세한 바이올렛 향수를 표현합니다.' },
  ],
},

// =============================================================================
// PHOTOGRAPHY - 사진 사업 이름 생성기
// =============================================================================
'photography': {
  slug: 'photography',
  name: '포토그래피 비즈니스 이름 생성기',
  title: '무료 AI 사진 사업 이름 아이디어 생성기',
  description: '무료 AI 사진 사업 이름 생성기로 창의적이고 전문적인 사진 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 사진 사업 이름 생성기로 예술적이고 기억에 남는 사업 이름을 만드세요. 사진 스튜디오, 웨딩 포토그래피, 상업 촬영 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '사진 이름 생성',
  inputLabel: '사진 비즈니스 세부 정보',
  inputPlaceholder: '사진 비즈니스를 설명하세요 (예: 웨딩 포토그래피, 상업 제품 촬영, 가족 포트레이트 전문)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in photography and visual media businesses. Generate unique, memorable business names that evoke imagery, light, and artistic vision. Consider these elements:

- Photography terms (Photo, Image, Picture, Shot, Frame)
- Light references (Light, Lens, Flash, Bright, Glow)
- Vision and perspective (Vision, View, Focus, Perspective, Eye)
- Memory and moments (Moment, Memory, Capture, Chronicle, Story)
- Artistic expression (Art, Create, Studio, Gallery, Canvas)

Create names that are memorable, visual, and convey photography expertise and artistic vision.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '사진 스튜디오 런칭',
      description: '새로운 사진 스튜디오를 여는 포토그래퍼들은 생성기를 사용하여 전문성과 예술적 비전을 전달하는 이름을 만듭니다. 이 도구는 시각적 스토리텔링 능력과 기술적 전문성을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '웨딩 포토그래피 비즈니스',
      description: '웨딩 포토그래피를 전문으로 하는 포토그래퍼들은 생성기를 사용하여 로맨스, 아름다움, 특별한 순간 포착을 전달하는 이름을 개발합니다. 이 도구는 예비 신랑 신부에게 어필하는 감성적인 이름을 제공합니다.',
    },
    {
      title: '상업 및 제품 촬영 회사',
      description: '상업 사진이나 제품 촬영을 전문으로 하는 회사들은 생성기를 사용하여 전문성과 품질을 전달하는 이름을 만듭니다. 이 도구는 기업 고객에게 신뢰와 결과물의 우수성을 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 사진 사업 이름이란 무엇인가요?', answer: '좋은 사진 사업 이름은 시각적이고 예술적이며, 전문성과 창의성을 전달해야 합니다. 기억하기 쉽고, 전문 분야(웨딩, 포트레이트, 상업 등)에 적합해야 합니다. 또한 빛, 이미지, 순간 포착의 개념을 암시하면 효과적입니다.' },
    { question: '사진 사업 이름에 "포토"나 "포토그래피"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 사진 스튜디오는 이 단어 없이도 시각적이고 암시적인 이름을 사용합니다. 비디오나 다른 미디어로 확장할 계획이라면 더 넓은 이름을 고려하세요.' },
    { question: '사진 사업 이름에 포토그래퍼 이름을 사용해야 하나요?', answer: '개인 이름 사용은 사진 업계에서 매우 일반적이며 개인 브랜딩을 구축하는 데 효과적입니다. 특히 웨딩이나 포트레이트 포토그래피에서 개인적인 연결을 강조합니다. 그러나 팀이 성장하거나 비즈니스를 매각할 계획이라면 제한이 될 수 있습니다.' },
    { question: '현재 인기 있는 사진 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 빛 관련 단어(라이트, 렌즈, 글로우), 시간/순간 관련(모먼트, 캡처, 메모리), 시각 관련(비전, 뷰, 포커스), 간결한 한 단어 이름(프레임, 샷, 플래시), 감성적 단어(스토리, 드림, 에모션)가 포함됩니다.' },
    { question: '사진 사업 이름에 전문 분야를 반영해야 하나요?', answer: '특정 분야(웨딩, 제품, 패션 등)를 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 다양한 분야에서 일하거나 확장할 계획이라면 더 넓은 이름이 유연성을 제공합니다.' },
    { question: '사진 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram 특히 중요), 포토그래피 디렉토리, 상표 데이터베이스를 확인하세요. 사진 비즈니스는 비주얼 플랫폼, 특히 인스타그램 존재가 핵심입니다.' },
    { question: '사진 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 빛 관련(라이트, 렌즈, 플래시, 글로우, 샤인), 이미지 관련(포토, 이미지, 픽처, 샷, 프레임), 시각 관련(비전, 뷰, 포커스, 퍼스펙티브), 순간 관련(모먼트, 캡처, 메모리, 스냅), 예술 관련(아트, 크리에이티브, 스튜디오, 갤러리)이 포함됩니다.' },
    { question: '웨딩과 상업 사진 사업 이름을 다르게 해야 하나요?', answer: '웨딩 사진은 로맨틱하고 감성적인 이름이 효과적이고, 상업 사진은 더 전문적이고 결과 중심적인 이름이 좋을 수 있습니다. 두 분야 모두를 다룬다면 양쪽에 어울리는 균형 잡힌 이름을 선택하세요.' },
    { question: '지역 기반 사진 사업 이름이 좋을까요?', answer: '로컬 고객을 타겟으로 한다면 지역 이름이 로컬 검색에 도움이 되고 커뮤니티 연결을 강조할 수 있습니다. 그러나 다른 지역 고객이나 여행 촬영을 원한다면 지역에 국한되지 않는 이름이 더 유연합니다.' },
    { question: '사진 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 발음이나 철자가 어려운 이름, 기존 유명 포토그래퍼나 스튜디오와 너무 유사한 이름, 특정 분야에 국한되어 확장을 제한하는 이름, 전문성이나 예술적 비전을 전달하지 못하는 이름, 트렌디해서 빠르게 구식이 될 수 있는 이름.' },
  ],
  howToChoose: {
    intro: '사진 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 아름다운 이미지, 특별한 순간의 포착, 그리고 예술적 비전을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 포트폴리오, 웹사이트, 명함, 소셜 미디어에 나타납니다—잠재 고객이 사진 서비스를 인식하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '사진 비즈니스 아이덴티티 정의', description: '이름 생성 전에 사진 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 사진을 제공할 것인지(웨딩, 포트레이트, 상업, 이벤트, 파인 아트), 타겟 고객은 누구인지(예비 부부, 가족, 기업, 브랜드), 사진 스타일은 무엇인지(클래식, 저널리스틱, 아티스틱, 모던), 차별화 포인트는 무엇인지(스타일, 경험, 전문성, 접근방식) 고려하세요.' },
      { title: '예술적 비전 전달', description: '사진은 시각 예술입니다. 이름은 예술적 관점을 전달하고, 창의적 비전을 암시하고, 독특한 스타일을 표현하고, 시각적 스토리텔링을 약속하고, 이미지의 아름다움을 강조해야 합니다. 고객이 특별한 시각적 경험을 기대할 수 있게 하세요.' },
      { title: '감정적 연결 구축', description: '사진은 추억과 감정을 포착합니다. 이름은 감정적 가치를 불러일으키고, 특별한 순간을 암시하고, 영원한 추억의 보존을 전달하고, 스토리텔링의 힘을 표현하고, 의미 있는 연결을 약속해야 합니다. 모먼트, 메모리, 스토리 같은 단어가 감정적 연결을 만들 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 웨딩 고객을 위해서는 로맨틱하고 우아한 이름이, 기업 고객을 위해서는 전문적이고 결과 지향적인 이름이, 가족 고객을 위해서는 따뜻하고 친근한 이름이 효과적입니다. 타겟 고객의 기대와 가치관을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름, 소셜 미디어 핸들(Instagram 특히 중요), 포토그래피 디렉토리(The Knot, WeddingWire 등), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 사진 비즈니스는 비주얼 플랫폼과 온라인 포트폴리오가 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 전문적인 사진 서비스를 연상시키는지, 어떤 스타일의 사진을 기대하는지, 예술적이고 신뢰할 수 있게 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 사진 분야 추가, 비디오 서비스 확장, 교육 프로그램 제공, 프린트나 제품 판매, 인정받는 포토그래피 브랜드 구축. 이상적인 사진 사업 이름은 시각적이고, 예술적이고, 기억에 남으며, 뛰어난 사진 서비스를 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '라이트앤렌즈', description: '빛과 렌즈를 의미하여 사진의 본질적인 요소인 빛과 렌즈에 대한 전문성을 암시합니다.' },
    { name: '모먼트메이커', description: '순간 창조자를 의미하여 특별한 순간을 포착하고 만들어내는 능력을 표현합니다.' },
    { name: '프레임포에버', description: '영원한 프레임을 의미하여 영원히 간직할 순간을 프레임에 담는 서비스를 암시합니다.' },
    { name: '비전비주얼', description: '비전 비주얼을 의미하여 독특한 시각적 비전과 전문성을 표현합니다.' },
    { name: '캡처캔버스', description: '캡처 캔버스를 의미하여 순간을 캔버스에 담듯 포착하는 예술적 접근을 암시합니다.' },
    { name: '포커스팩토리', description: '포커스 팩토리를 의미하여 초점 맞춘 완벽한 사진을 생산하는 전문성을 표현합니다.' },
    { name: '글로우갤러리', description: '빛나는 갤러리를 의미하여 빛나는 사진 작품의 갤러리 같은 컬렉션을 암시합니다.' },
    { name: '이미지인스파이어', description: '영감을 주는 이미지를 의미하여 영감을 불러일으키는 사진 창작을 표현합니다.' },
    { name: '저니즈냅', description: '여정의 스냅을 의미하여 인생 여정의 중요한 순간을 포착하는 서비스를 암시합니다.' },
    { name: '카이로스캡처', description: '카이로스 캡처를 의미하여 결정적 순간(카이로스)을 포착하는 전문성을 표현합니다.' },
    { name: '렌즈레거시', description: '렌즈 유산을 의미하여 렌즈를 통해 세대를 이어 전해질 추억을 만드는 서비스를 암시합니다.' },
    { name: '메모리무드', description: '추억 무드를 의미하여 추억의 분위기와 감성을 포착하는 사진 스타일을 표현합니다.' },
    { name: '노스탈지아네스트', description: '향수의 둥지를 의미하여 향수 어린 추억이 담긴 사진을 제공하는 서비스를 암시합니다.' },
    { name: '옵틱오라', description: '광학 오라를 의미하여 렌즈를 통해 피사체의 아우라를 포착하는 전문성을 표현합니다.' },
    { name: '픽셀퍼펙트', description: '픽셀 완벽을 의미하여 디지털 시대에 완벽한 이미지 품질을 추구하는 서비스를 암시합니다.' },
    { name: '퀵클릭', description: '빠른 클릭을 의미하여 순간을 놓치지 않는 민첩하고 전문적인 촬영을 표현합니다.' },
    { name: '리플렉션루트', description: '반영의 뿌리를 의미하여 깊이 있는 반영과 성찰이 담긴 사진을 암시합니다.' },
    { name: '셔터스토리', description: '셔터 스토리를 의미하여 셔터를 누를 때마다 이야기가 만들어지는 스토리텔링 사진을 표현합니다.' },
    { name: '타임레스터치', description: '시간을 초월한 터치를 의미하여 시간이 지나도 변하지 않는 사진의 가치를 암시합니다.' },
    { name: '언베일드비전', description: '드러난 비전을 의미하여 숨겨진 아름다움과 순간을 드러내는 독특한 시각을 표현합니다.' },
  ],
},

// =============================================================================
// PRINT-SHOP - 인쇄소 사업 이름 생성기
// =============================================================================
'print-shop': {
  slug: 'print-shop',
  name: '인쇄소 비즈니스 이름 생성기',
  title: '무료 AI 인쇄소 사업 이름 아이디어 생성기',
  description: '무료 AI 인쇄소 사업 이름 생성기로 전문적이고 기억에 남는 인쇄 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 인쇄소 사업 이름 생성기로 전문적이고 신뢰할 수 있는 사업 이름을 만드세요. 인쇄소, 복사점, 대형 출력 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '인쇄소 이름 생성',
  inputLabel: '인쇄 비즈니스 세부 정보',
  inputPlaceholder: '인쇄 비즈니스를 설명하세요 (예: 고품질 오프셋 인쇄, 친환경 인쇄, 대형 포맷 전문)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in printing and publishing businesses. Generate unique, memorable business names that evoke quality, precision, and professional output. Consider these elements:

- Printing terms (Print, Press, Ink, Copy, Output)
- Quality references (Quality, Premium, Precision, Sharp, Clear)
- Color and visual (Color, Spectrum, Vivid, Bright, Graphic)
- Speed and efficiency (Express, Quick, Fast, Rapid, Swift)
- Professional service (Pro, Expert, Master, Solutions, Services)

Create names that are professional, reliable, and convey printing expertise and quality.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '인쇄소 런칭',
      description: '새로운 인쇄소를 여는 기업가들은 생성기를 사용하여 품질과 신뢰성을 전달하는 이름을 만듭니다. 이 도구는 전문적인 인쇄 역량과 고객 서비스 헌신을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '디지털 및 주문형 인쇄 서비스',
      description: '디지털 인쇄나 주문형 인쇄를 전문으로 하는 회사들은 생성기를 사용하여 속도, 유연성, 현대적 기술을 전달하는 이름을 개발합니다. 이 도구는 빠른 턴어라운드와 맞춤형 서비스를 암시하는 이름을 제공합니다.',
    },
    {
      title: '특수 및 고급 인쇄 회사',
      description: '특수 인쇄, 고급 마감, 또는 독특한 인쇄 기술을 제공하는 회사들은 생성기를 사용하여 전문성과 프리미엄 품질을 전달하는 이름을 만듭니다. 이 도구는 장인 정신과 우수한 결과물을 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 인쇄소 사업 이름이란 무엇인가요?', answer: '좋은 인쇄소 사업 이름은 전문적이고 신뢰할 수 있으며, 품질과 서비스를 전달해야 합니다. 기억하기 쉽고, 제공하는 서비스 유형(상업, 디지털, 대형 포맷 등)에 적합해야 합니다. 또한 인쇄의 정밀함, 색상, 속도 등의 특성을 암시하면 효과적입니다.' },
    { question: '인쇄소 이름에 "프린트"나 "인쇄"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 하고 검색에 도움이 됩니다. 그러나 디자인 서비스나 마케팅 자료 제작으로 확장할 계획이라면 더 넓은 이름을 고려할 수 있습니다. 대부분의 인쇄 비즈니스는 명확성을 위해 관련 단어를 포함합니다.' },
    { question: '인쇄소 이름에 속도나 품질을 강조해야 하나요?', answer: '속도(익스프레스, 퀵)나 품질(프리미엄, 퀄리티)을 강조하면 비즈니스의 핵심 가치를 즉시 전달합니다. 그러나 약속을 지킬 수 있어야 합니다. 빠른 서비스를 강조하면서 느리면 신뢰를 잃을 수 있습니다. 비즈니스의 실제 강점에 맞춰 선택하세요.' },
    { question: '현재 인기 있는 인쇄 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 디지털 강조(디지털, 온디맨드), 환경 친화적(에코, 그린, 서스테이너블), 품질 강조(프리미엄, 프리시전, 샤프), 현대적 단어(허브, 랩, 스튜디오), 색상 관련(컬러, 스펙트럼, 비비드)이 포함됩니다.' },
    { question: '지역 기반 인쇄소 이름이 좋을까요?', answer: '지역 이름을 포함하면 로컬 검색에 도움이 되고 지역 비즈니스와의 연결을 강조합니다. 인쇄는 종종 지역 기반 서비스이므로 이는 효과적일 수 있습니다. 그러나 온라인 주문이나 전국 배송을 제공한다면 지역에 국한되지 않는 이름이 더 적합합니다.' },
    { question: '인쇄소 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들, 인쇄 업계 디렉토리, 상표 데이터베이스를 확인하세요. 또한 지역 내 유사한 이름의 인쇄소가 있는지 검색하여 혼동을 피하세요.' },
    { question: '인쇄소 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 인쇄 관련(프린트, 프레스, 잉크, 카피, 아웃풋), 품질 관련(퀄리티, 프리미엄, 프리시전, 샤프), 색상 관련(컬러, 스펙트럼, 비비드, 브라이트), 속도 관련(익스프레스, 퀵, 래피드, 스위프트), 서비스 관련(프로, 솔루션, 서비스, 마스터)가 포함됩니다.' },
    { question: '디지털 인쇄와 전통 인쇄 회사 이름을 다르게 해야 하나요?', answer: '디지털 인쇄 회사는 현대적이고 기술적인 이름이 효과적이고, 전통 오프셋 인쇄는 전문성과 품질을 강조하는 이름이 좋을 수 있습니다. 두 서비스 모두 제공한다면 균형 잡힌 이름을 선택하세요.' },
    { question: '친환경 인쇄를 강조하는 이름이 좋을까요?', answer: '친환경 인쇄가 핵심 차별점이라면 에코, 그린, 서스테이너블 같은 단어를 포함하면 환경 의식이 있는 고객을 끌어들일 수 있습니다. 그러나 실제로 친환경 관행을 따라야 하며, 그린워싱은 신뢰를 손상시킵니다.' },
    { question: '인쇄소 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 너무 일반적이어서 차별화가 안 되는 이름, 지킬 수 없는 약속을 암시하는 이름(속도, 품질 등), 발음이나 철자가 어려운 이름, 기존 인쇄소와 너무 유사한 이름, 특정 서비스에 국한되어 확장을 제한하는 이름.' },
  ],
  howToChoose: {
    intro: '인쇄 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 품질, 신뢰성, 그리고 전문적인 결과물을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 간판, 인쇄물, 웹사이트, 견적서에 나타납니다—잠재 고객이 인쇄 서비스를 인식하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '인쇄 비즈니스 아이덴티티 정의', description: '이름 생성 전에 인쇄 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 인쇄 서비스를 제공할 것인지(상업, 디지털, 대형 포맷, 특수), 타겟 고객은 누구인지(기업, 소매, 이벤트 플래너, 마케팅 에이전시), 핵심 강점은 무엇인지(속도, 품질, 가격, 서비스), 차별화 포인트는 무엇인지(기술, 전문성, 친환경) 고려하세요.' },
      { title: '품질과 신뢰성 전달', description: '인쇄는 결과물의 품질이 중요합니다. 이름은 우수한 품질을 전달하고, 전문적 역량을 암시하고, 일관성과 정밀함을 약속하고, 신뢰할 수 있는 서비스를 표현하고, 마감 기한 준수를 강조해야 합니다. 고객이 중요한 인쇄물을 맡길 수 있다는 자신감을 느끼게 하세요.' },
      { title: '서비스 특성 표현', description: '인쇄 비즈니스의 핵심 특성을 전달하세요. 속도가 강점이라면 익스프레스, 퀵, 래피드. 품질이 강점이라면 프리미엄, 프리시전, 마스터. 친환경이 강점이라면 에코, 그린, 서스테이너블. 기술이 강점이라면 디지털, 테크, 이노베이션. 비즈니스의 실제 강점을 반영하세요.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 기업 고객을 위해서는 전문적이고 신뢰할 수 있는 이름이, 소규모 비즈니스를 위해서는 접근 가능하고 친근한 이름이, 고급 마케팅 자료를 원하는 고객을 위해서는 프리미엄하고 창의적인 이름이 효과적입니다.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름, 소셜 미디어 핸들, 인쇄 업계 디렉토리, 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 또한 지역 내 유사한 이름의 인쇄소가 있는지 확인하여 혼동을 피하세요.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 전문적인 인쇄 서비스를 연상시키는지, 어떤 유형의 인쇄를 기대하는지, 신뢰할 수 있고 품질 있게 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 인쇄 서비스 추가, 디자인 서비스 확장, 마케팅 자료 제작 서비스, 추가 지점 오픈, 온라인 주문 시스템 도입. 이상적인 인쇄소 사업 이름은 전문적이고, 신뢰할 수 있고, 품질을 전달하며, 뛰어난 인쇄 서비스를 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '프린트프리시전', description: '인쇄 정밀함을 의미하여 정확하고 정밀한 고품질 인쇄 서비스를 암시합니다.' },
    { name: '컬러캔버스', description: '색상 캔버스를 의미하여 다양한 색상이 펼쳐지는 창의적인 인쇄 서비스를 표현합니다.' },
    { name: '잉크이노베이션', description: '잉크 혁신을 의미하여 혁신적인 인쇄 기술과 접근 방식을 암시합니다.' },
    { name: '퀵퀄리티프레스', description: '빠른 품질 프레스를 의미하여 속도와 품질을 모두 갖춘 인쇄 서비스를 표현합니다.' },
    { name: '비비드프린트', description: '생생한 인쇄를 의미하여 선명하고 생동감 있는 색상의 인쇄 결과물을 암시합니다.' },
    { name: '프레스프로', description: '프레스 프로를 의미하여 인쇄 분야의 전문가 서비스를 표현합니다.' },
    { name: '그래픽글로우', description: '그래픽 광채를 의미하여 빛나는 그래픽 품질의 인쇄물을 암시합니다.' },
    { name: '하이파이프린트', description: '하이파이 인쇄를 의미하여 고충실도의 정확한 인쇄 재현을 표현합니다.' },
    { name: '임프레스잉크', description: '감명 잉크를 의미하여 인상적인 결과물을 만드는 인쇄 서비스를 암시합니다.' },
    { name: '저스트프린트', description: '저스트 프린트를 의미하여 간단하고 직접적인 인쇄 서비스 접근 방식을 표현합니다.' },
    { name: '킨프린트', description: '킨 프린트를 의미하여 예리하고 선명한 인쇄 품질을 암시합니다.' },
    { name: '레터프레스랩', description: '레터프레스 랩을 의미하여 활자 인쇄의 전통과 혁신을 결합한 서비스를 표현합니다.' },
    { name: '마스터마크', description: '마스터 마크를 의미하여 장인 수준의 인쇄 결과물을 암시합니다.' },
    { name: '넥스트젠프린트', description: '넥스트 젠 프린트를 의미하여 차세대 인쇄 기술과 서비스를 표현합니다.' },
    { name: '온포인트프레스', description: '온포인트 프레스를 의미하여 정확하고 목적에 맞는 인쇄 서비스를 암시합니다.' },
    { name: '프리미어프린트', description: '프리미어 프린트를 의미하여 최고 수준의 프리미엄 인쇄 서비스를 표현합니다.' },
    { name: '퀄리티퀘스트', description: '품질 탐구를 의미하여 최고 품질을 향한 지속적인 노력을 암시합니다.' },
    { name: '래피드레플리카', description: '신속한 복제를 의미하여 빠르고 정확한 인쇄 복제 서비스를 표현합니다.' },
    { name: '스펙트럼솔루션', description: '스펙트럼 솔루션을 의미하여 전체 색상 스펙트럼을 아우르는 인쇄 솔루션을 암시합니다.' },
    { name: '트루컬러프레스', description: '트루 컬러 프레스를 의미하여 정확한 색상 재현의 인쇄 전문성을 표현합니다.' },
  ],
},

// =============================================================================
// REAL-ESTATE - 부동산 사업 이름 생성기
// =============================================================================
'real-estate': {
  slug: 'real-estate',
  name: '부동산 비즈니스 이름 생성기',
  title: '무료 AI 부동산 사업 이름 아이디어 생성기',
  description: '무료 AI 부동산 사업 이름 생성기로 전문적이고 신뢰할 수 있는 부동산 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 부동산 사업 이름 생성기로 전문적이고 기억에 남는 사업 이름을 만드세요. 부동산 중개, 개발, 투자 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '부동산 이름 생성',
  inputLabel: '부동산 비즈니스 세부 정보',
  inputPlaceholder: '부동산 비즈니스를 설명하세요 (예: 럭셔리 주거 전문, 상업용 부동산, 투자 컨설팅)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in real estate businesses. Generate unique, memorable business names that evoke trust, property expertise, and successful transactions. Consider these elements:

- Property terms (Realty, Estate, Property, Land, Home)
- Trust and professionalism (Trust, Premier, Elite, Capital, Prestige)
- Location and community (Local, Community, Metro, Urban, Neighborhood)
- Growth and investment (Invest, Growth, Equity, Asset, Value)
- Service excellence (Partners, Associates, Group, Solutions, Advisors)

Create names that are professional, trustworthy, and convey real estate expertise.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '부동산 중개 회사 런칭',
      description: '새로운 부동산 중개 회사를 시작하는 공인중개사들은 생성기를 사용하여 신뢰와 전문성을 전달하는 이름을 만듭니다. 이 도구는 지역 시장 전문 지식과 고객 서비스 헌신을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '부동산 투자 회사 설립',
      description: '부동산 투자나 개발을 전문으로 하는 회사들은 생성기를 사용하여 자본력과 투자 전문성을 전달하는 이름을 개발합니다. 이 도구는 투자자 신뢰를 구축하고 성장 기회를 암시하는 이름을 제공합니다.',
    },
    {
      title: '자산 관리 서비스 회사',
      description: '임대 관리나 자산 관리 서비스를 제공하는 회사들은 생성기를 사용하여 신뢰성과 관리 전문성을 전달하는 이름을 만듭니다. 이 도구는 부동산 소유주에게 안심과 전문 서비스를 약속하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 부동산 사업 이름이란 무엇인가요?', answer: '좋은 부동산 사업 이름은 전문적이고 신뢰할 수 있으며, 부동산 전문 지식을 전달해야 합니다. 기억하기 쉽고, 타겟 시장(주거, 상업, 투자 등)에 적합해야 합니다. 또한 지역 사회 연결이나 성공적인 거래의 이미지를 암시하면 효과적입니다.' },
    { question: '부동산 사업 이름에 "부동산"이나 "리얼티"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 하고 검색에 도움이 됩니다. 많은 성공적인 부동산 회사들이 리얼티, 프로퍼티, 에스테이트 같은 단어를 사용합니다. 그러나 그룹, 어소시에이츠, 파트너스 같은 더 넓은 이름도 전문성을 전달할 수 있습니다.' },
    { question: '부동산 사업 이름에 개인 이름을 사용해야 하나요?', answer: '개인 이름 사용은 부동산 업계에서 매우 일반적이며 개인 브랜딩과 신뢰를 구축하는 데 효과적입니다. 특히 관계 중심적인 부동산 거래에서 개인적인 연결을 강조합니다. 그러나 팀이 성장하거나 비즈니스를 매각할 계획이라면 제한이 될 수 있습니다.' },
    { question: '현재 인기 있는 부동산 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 프리미엄 단어(프리미어, 엘리트, 프레스티지), 투자 관련(캐피탈, 에쿼티, 어셋), 지역 중심(로컬, 커뮤니티, 네이버후드), 서비스 강조(어드바이저스, 파트너스, 솔루션), 간결한 현대적 이름이 포함됩니다.' },
    { question: '지역 기반 부동산 사업 이름이 좋을까요?', answer: '지역 이름을 포함하면 로컬 시장 전문성을 강조하고 지역 SEO에 도움이 됩니다. 부동산은 본질적으로 지역 중심 사업이므로 이는 매우 효과적일 수 있습니다. 그러나 다른 지역으로 확장할 계획이라면 유연성을 위해 지역에 국한되지 않는 이름을 고려하세요.' },
    { question: '부동산 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들, 부동산 협회 등록, 상표 데이터베이스를 확인하세요. 또한 지역 부동산 위원회에서 유사한 이름의 중개업소가 있는지 확인하고, MLS 시스템에서도 검색해보세요.' },
    { question: '부동산 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 부동산 관련(리얼티, 에스테이트, 프로퍼티, 홈, 랜드), 신뢰 관련(트러스트, 프리미어, 엘리트, 프레스티지), 서비스 관련(어소시에이츠, 파트너스, 그룹, 어드바이저스), 성장 관련(캐피탈, 인베스트, 에쿼티, 어셋)이 포함됩니다.' },
    { question: '주거용과 상업용 부동산 사업 이름을 다르게 해야 하나요?', answer: '주거용 부동산은 따뜻하고 가정적인 느낌의 이름이 효과적이고, 상업용 부동산은 더 기업적이고 투자 지향적인 이름이 좋을 수 있습니다. 두 시장 모두를 다룬다면 균형 잡힌 전문적인 이름을 선택하세요.' },
    { question: '부동산 투자 회사 이름은 어떻게 접근해야 하나요?', answer: '부동산 투자 회사는 자본력, 투자 전문성, 수익 잠재력을 암시하는 이름이 효과적입니다. 캐피탈, 인베스트먼츠, 홀딩스, 벤처스 같은 단어가 투자자 신뢰를 구축하는 데 도움이 됩니다. 전문적이고 안정적인 인상을 주는 것이 중요합니다.' },
    { question: '부동산 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 부동산 회사와 너무 유사한 이름, 특정 지역에 국한되어 확장을 제한하는 이름, 비전문적이거나 신뢰를 주지 못하는 이름, 발음이나 철자가 어려운 이름, 부정적인 연상을 일으킬 수 있는 단어.' },
  ],
  howToChoose: {
    intro: '부동산 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 신뢰, 전문성, 그리고 성공적인 부동산 거래를 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 간판, 명함, 리스팅, 마케팅 자료에 나타납니다—잠재 고객이 부동산 서비스를 인식하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '부동산 비즈니스 아이덴티티 정의', description: '이름 생성 전에 부동산 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 부동산 서비스를 제공할 것인지(중개, 투자, 개발, 관리), 타겟 고객은 누구인지(첫 주택 구매자, 투자자, 기업, 럭셔리 구매자), 지역 시장은 어디인지(도시, 교외, 특정 지역), 차별화 포인트는 무엇인지(전문성, 서비스, 기술, 네트워크) 고려하세요.' },
      { title: '신뢰와 전문성 전달', description: '부동산은 인생에서 가장 큰 거래 중 하나입니다. 이름은 신뢰와 안정성을 전달하고, 전문적 역량을 암시하고, 성공적인 거래를 약속하고, 윤리적 비즈니스 관행을 표현하고, 장기적 관계를 강조해야 합니다. 고객이 중요한 부동산 결정을 맡길 수 있다는 자신감을 느끼게 하세요.' },
      { title: '지역 연결 구축', description: '부동산은 본질적으로 지역적입니다. 이름은 지역 시장 전문 지식을 전달하고, 커뮤니티 연결을 암시하고, 지역 가치를 이해함을 표현하고, 네이버후드 전문성을 강조하고, 로컬 존재감을 구축해야 합니다. 지역 이름을 포함하거나 커뮤니티 지향적 단어를 사용하면 효과적입니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 럭셔리 시장을 위해서는 우아하고 프리미엄한 이름이, 첫 주택 구매자를 위해서는 접근 가능하고 친근한 이름이, 투자자를 위해서는 전문적이고 수익 지향적인 이름이 효과적입니다. 타겟 고객의 기대와 가치관을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름, 소셜 미디어 핸들, 부동산 협회 등록, 지역 부동산 위원회, 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 부동산 업계는 라이선스 요구사항이 있으므로 관련 규정도 확인하세요.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 전문적인 부동산 서비스를 연상시키는지, 어떤 유형의 부동산을 기대하는지, 신뢰할 수 있고 경험 있게 느껴지는지, 기억하고 추천하기 쉬운지, 연락하고 싶은지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 부동산 서비스 추가, 에이전트 팀 확장, 다른 지역으로 확장, 투자나 개발로 진출, 인정받는 부동산 브랜드 구축. 이상적인 부동산 사업 이름은 전문적이고, 신뢰할 수 있고, 지역 중심적이며, 뛰어난 부동산 서비스를 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '프리미어프로퍼티', description: '최고의 부동산을 의미하여 프리미엄 부동산 서비스와 고품질 매물을 암시합니다.' },
    { name: '트러스트랜드', description: '신뢰의 땅을 의미하여 부동산 거래에서 고객 신뢰를 최우선시하는 서비스를 표현합니다.' },
    { name: '홈하버리얼티', description: '홈 항구 리얼티를 의미하여 꿈의 집을 찾는 안전한 항구 같은 서비스를 암시합니다.' },
    { name: '에쿼티에스테이트', description: '자산 에스테이트를 의미하여 부동산 자산 가치 증대에 초점을 맞춘 서비스를 표현합니다.' },
    { name: '캐피탈코너', description: '캐피탈 코너를 의미하여 부동산 투자와 자본 성장의 중심지를 암시합니다.' },
    { name: '네이버후드넥서스', description: '이웃 연결점을 의미하여 지역 커뮤니티와의 강한 연결을 강조하는 서비스를 표현합니다.' },
    { name: '드림도어스', description: '꿈의 문을 의미하여 꿈의 집으로 들어가는 문을 여는 서비스를 암시합니다.' },
    { name: '엘리트에스테이트', description: '엘리트 에스테이트를 의미하여 고급 부동산 서비스와 프리미엄 고객층을 표현합니다.' },
    { name: '파운데이션리얼티', description: '기반 리얼티를 의미하여 부동산 결정의 튼튼한 기반을 제공하는 서비스를 암시합니다.' },
    { name: '게이트웨이그룹', description: '관문 그룹을 의미하여 새로운 부동산 기회로의 관문 역할을 표현합니다.' },
    { name: '홈스테드홀딩스', description: '홈스테드 홀딩스를 의미하여 주거 부동산 투자와 관리에 대한 전문성을 암시합니다.' },
    { name: '인베스트아일랜드', description: '투자 섬을 의미하여 부동산 투자의 안전한 피난처 같은 서비스를 표현합니다.' },
    { name: '키스톤리얼티', description: '키스톤 리얼티를 의미하여 부동산 거래에서 핵심적인 역할을 하는 서비스를 암시합니다.' },
    { name: '랜드마크리빙', description: '랜드마크 리빙을 의미하여 기억에 남는 랜드마크 같은 주거 경험을 표현합니다.' },
    { name: '마일스톤프로퍼티', description: '마일스톤 프로퍼티를 의미하여 인생의 중요한 이정표가 되는 부동산 거래를 암시합니다.' },
    { name: '넥스트젠에스테이트', description: '넥스트 젠 에스테이트를 의미하여 차세대 부동산 서비스와 혁신을 표현합니다.' },
    { name: '오픈도어어드바이저스', description: '열린 문 어드바이저스를 의미하여 새로운 기회를 열어주는 부동산 조언 서비스를 암시합니다.' },
    { name: '프레스티지파트너스', description: '프레스티지 파트너스를 의미하여 명성 있는 부동산 파트너십을 표현합니다.' },
    { name: '퀄리티퀘스트리얼티', description: '품질 탐구 리얼티를 의미하여 최고 품질의 부동산을 찾아주는 서비스를 암시합니다.' },
    { name: '루트앤브랜치', description: '뿌리와 가지를 의미하여 지역에 뿌리내린 성장하는 부동산 서비스를 표현합니다.' },
  ],
},

// =============================================================================
// SHOES - 신발 사업 이름 생성기
// =============================================================================
'shoes': {
  slug: 'shoes',
  name: '신발 비즈니스 이름 생성기',
  title: '무료 AI 신발 사업 이름 아이디어 생성기',
  description: '무료 AI 신발 사업 이름 생성기로 스타일리시하고 기억에 남는 신발 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 신발 사업 이름 생성기로 트렌디하고 매력적인 사업 이름을 만드세요. 신발 브랜드, 슈즈 스토어, 커스텀 슈즈 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '신발 이름 생성',
  inputLabel: '신발 비즈니스 세부 정보',
  inputPlaceholder: '신발 비즈니스를 설명하세요 (예: 럭셔리 여성화, 스포츠 스니커즈, 커스텀 수제화)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in footwear and shoe businesses. Generate unique, memorable business names that evoke style, comfort, and quality craftsmanship. Consider these elements:

- Footwear terms (Shoe, Sole, Step, Foot, Walk)
- Movement and action (Stride, Run, Walk, Move, Go)
- Style and fashion (Style, Chic, Trend, Fashion, Luxe)
- Comfort and fit (Comfort, Fit, Ease, Soft, Cushion)
- Craftsmanship (Craft, Artisan, Made, Design, Studio)

Create names that are stylish, memorable, and convey footwear expertise and quality.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '신발 브랜드 런칭',
      description: '새로운 신발 브랜드를 런칭하는 기업가들은 생성기를 사용하여 스타일과 품질을 전달하는 이름을 만듭니다. 이 도구는 브랜드의 독특한 디자인 철학과 타겟 고객층을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '신발 리테일 스토어',
      description: '신발 소매점을 여는 사업주들은 생성기를 사용하여 다양한 선택과 쇼핑 경험을 전달하는 이름을 개발합니다. 이 도구는 고객에게 완벽한 신발을 찾을 수 있다는 기대감을 주는 이름을 제공합니다.',
    },
    {
      title: '커스텀 및 수제화 비즈니스',
      description: '맞춤 제작이나 수제화를 전문으로 하는 장인들은 생성기를 사용하여 장인 정신과 개인화를 전달하는 이름을 만듭니다. 이 도구는 독특한 품질과 맞춤 서비스를 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 신발 사업 이름이란 무엇인가요?', answer: '좋은 신발 사업 이름은 스타일리시하고 기억에 남으며, 품질과 편안함을 전달해야 합니다. 타겟 시장(럭셔리, 스포츠, 캐주얼 등)에 적합하고, 브랜드의 독특한 정체성을 반영해야 합니다. 또한 움직임, 스타일, 편안함의 이미지를 암시하면 효과적입니다.' },
    { question: '신발 사업 이름에 "슈즈"나 "신발"을 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 신발 브랜드는 이 단어 없이도 스타일이나 움직임을 암시하는 창의적인 이름을 사용합니다. 브랜드 확장 계획(의류, 액세서리)을 고려하여 결정하세요.' },
    { question: '신발 브랜드 이름에 특정 스타일을 반영해야 하나요?', answer: '특정 스타일(운동화, 하이힐, 부츠 등)을 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 더 넓은 이름은 다양한 신발 라인으로 확장할 때 유연성을 제공합니다.' },
    { question: '현재 인기 있는 신발 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 움직임 관련(스트라이드, 러너, 무브), 편안함 강조(컴포트, 이지, 쿠션), 스타일 관련(시크, 트렌드, 스타일), 장인 정신(크래프트, 아티장, 메이드), 간결한 한 단어 이름(스텝, 솔, 스트라이드)이 포함됩니다.' },
    { question: '럭셔리와 캐주얼 신발 브랜드 이름을 다르게 해야 하나요?', answer: '럭셔리 신발 브랜드는 우아하고 정교한 이름이 효과적이고, 캐주얼이나 스포츠 신발은 더 활동적이고 접근 가능한 이름이 좋을 수 있습니다. 타겟 고객의 기대와 가격대에 맞게 선택하세요.' },
    { question: '신발 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram 특히 중요), 온라인 마켓플레이스(쿠팡, 무신사 등), 상표 데이터베이스를 확인하세요. 신발 업계는 온라인 존재와 소셜 미디어 마케팅이 중요합니다.' },
    { question: '신발 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 신발 관련(슈, 솔, 스텝, 풋, 워크), 움직임 관련(스트라이드, 런, 무브, 고), 스타일 관련(스타일, 시크, 트렌드, 패션), 편안함 관련(컴포트, 피트, 이지, 소프트), 품질 관련(크래프트, 프리미엄, 럭스, 퀄리티)가 포함됩니다.' },
    { question: '아동화 브랜드 이름은 어떻게 접근해야 하나요?', answer: '아동화 브랜드는 재미있고 장난스러운 이름이 효과적입니다. 아이들과 부모 모두에게 어필해야 하므로 귀엽고 기억하기 쉬우면서도 품질과 안전을 암시하는 이름을 선택하세요. 성장과 활동을 연상시키는 단어도 좋습니다.' },
    { question: '지속가능한 신발 브랜드 이름 팁이 있나요?', answer: '환경 친화적 신발이 핵심이라면 에코, 그린, 서스테이너블, 어스 같은 단어를 포함하면 의식 있는 소비자를 끌어들일 수 있습니다. 그러나 실제로 지속가능한 관행을 따라야 하며, 그린워싱은 브랜드 신뢰를 손상시킵니다.' },
    { question: '신발 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 신발 브랜드와 너무 유사한 이름, 특정 스타일에 국한되어 확장을 제한하는 이름, 발음이나 철자가 어려운 이름, 타겟 고객에게 스타일이나 품질을 전달하지 못하는 이름, 부정적인 연상을 일으킬 수 있는 단어.' },
  ],
  howToChoose: {
    intro: '신발 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 스타일, 편안함, 그리고 품질을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 신발 박스, 매장, 웹사이트, 마케팅 캠페인에 나타납니다—고객이 브랜드를 인식하고 기억하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '신발 비즈니스 아이덴티티 정의', description: '이름 생성 전에 신발 비즈니스의 포지셔닝을 명확히 하세요. 어떤 종류의 신발을 제공할 것인지(럭셔리, 운동화, 캐주얼, 수제화), 타겟 고객은 누구인지(패션 의식 높은 소비자, 운동선수, 아이들), 브랜드 스타일은 무엇인지(클래식, 트렌디, 미니멀, 대담한), 차별화 포인트는 무엇인지(디자인, 편안함, 가격, 지속가능성) 고려하세요.' },
      { title: '스타일과 품질 전달', description: '신발은 패션과 기능의 교차점입니다. 이름은 스타일과 트렌드를 전달하고, 품질과 장인 정신을 암시하고, 독특한 디자인 미학을 표현하고, 편안함과 핏을 약속하고, 브랜드 개성을 반영해야 합니다. 고객이 특별한 신발을 발견할 것이라는 기대감을 느끼게 하세요.' },
      { title: '움직임과 활동 연상', description: '신발은 움직임과 연결됩니다. 이름은 활동적인 라이프스타일을 암시하고, 걸음과 여정을 연상시키고, 자유와 편안한 움직임을 전달하고, 에너지와 역동성을 표현하고, 일상의 모든 순간을 지원함을 약속해야 합니다. 스텝, 스트라이드, 무브 같은 단어가 움직임을 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 럭셔리 고객을 위해서는 우아하고 정교한 이름이, 젊은 층을 위해서는 트렌디하고 대담한 이름이, 스포츠 애호가를 위해서는 활동적이고 에너지 넘치는 이름이 효과적입니다. 타겟 고객의 라이프스타일과 가치관을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(이커머스용), 소셜 미디어 핸들(Instagram 특히 중요), 온라인 마켓플레이스, 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 신발 비즈니스는 온라인 판매와 소셜 미디어 마케팅이 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 스타일리시한 신발을 연상시키는지, 어떤 유형의 신발을 기대하는지, 구매하고 싶은 욕구를 느끼는지, 기억하고 친구에게 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 신발 라인 추가, 의류나 액세서리로 확장, 다양한 고객층 타겟, 온라인과 오프라인 채널 확장, 인정받는 신발 브랜드 구축. 이상적인 신발 사업 이름은 스타일리시하고, 기억에 남고, 품질을 전달하며, 뛰어난 신발 경험을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '스트라이드스타일', description: '걸음 스타일을 의미하여 스타일리시한 걸음걸이를 완성하는 신발을 암시합니다.' },
    { name: '솔메이트슈즈', description: '소울메이트 슈즈를 의미하여 완벽하게 맞는 발의 소울메이트 같은 신발을 표현합니다.' },
    { name: '스텝업', description: '스텝 업을 의미하여 한 단계 높은 신발 경험과 스타일 업그레이드를 암시합니다.' },
    { name: '풋프린트패션', description: '발자국 패션을 의미하여 패셔너블한 발자국을 남기는 신발을 표현합니다.' },
    { name: '워크웨이브', description: '걷기 파도를 의미하여 부드럽고 자연스러운 걸음을 제공하는 신발을 암시합니다.' },
    { name: '컴포트크래프트', description: '편안함 공예를 의미하여 장인 정신으로 만든 편안한 신발을 표현합니다.' },
    { name: '시크스텝스', description: '시크 스텝스를 의미하여 세련된 걸음을 완성하는 스타일리시한 신발을 암시합니다.' },
    { name: '다이나믹드라이브', description: '다이나믹 드라이브를 의미하여 역동적인 움직임을 지원하는 운동화를 표현합니다.' },
    { name: '엘레강스에센스', description: '우아함의 본질을 의미하여 우아함의 정수를 담은 럭셔리 신발을 암시합니다.' },
    { name: '피트퍼펙트', description: '완벽한 핏을 의미하여 완벽하게 맞는 신발 경험을 표현합니다.' },
    { name: '글라이드골드', description: '글라이드 골드를 의미하여 황금 같은 부드러운 걸음을 제공하는 프리미엄 신발을 암시합니다.' },
    { name: '하이라이즈슈즈', description: '하이 라이즈 슈즈를 의미하여 자신감을 높여주는 신발을 표현합니다.' },
    { name: '인스텝인스파이어', description: '인스텝 인스파이어를 의미하여 영감을 주는 걸음을 만드는 신발을 암시합니다.' },
    { name: '저니주얼', description: '여정의 보석을 의미하여 인생 여정의 보석 같은 신발 파트너를 표현합니다.' },
    { name: '킥스타트', description: '킥 스타트를 의미하여 하루를 활기차게 시작하는 신발을 암시합니다.' },
    { name: '럭스로퍼', description: '럭스 로퍼를 의미하여 럭셔리한 편안함을 제공하는 신발을 표현합니다.' },
    { name: '모션마스터', description: '모션 마스터를 의미하여 움직임의 마스터 역할을 하는 기능적 신발을 암시합니다.' },
    { name: '니트앤나이스', description: '니트 앤 나이스를 의미하여 깔끔하고 멋진 신발 디자인을 표현합니다.' },
    { name: '온더고슈즈', description: '온 더 고 슈즈를 의미하여 바쁜 일상을 위한 편안한 신발을 암시합니다.' },
    { name: '페이스세터', description: '페이스 세터를 의미하여 트렌드를 선도하는 신발 브랜드를 표현합니다.' },
  ],
},

// =============================================================================
// SKIN-CARE - 스킨케어 사업 이름 생성기
// =============================================================================
'skin-care': {
  slug: 'skin-care',
  name: '스킨케어 비즈니스 이름 생성기',
  title: '무료 AI 스킨케어 사업 이름 아이디어 생성기',
  description: '무료 AI 스킨케어 사업 이름 생성기로 순수하고 매력적인 스킨케어 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 스킨케어 사업 이름 생성기로 순수하고 효과적인 사업 이름을 만드세요. 스킨케어 브랜드, 에스테틱, 뷰티 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '스킨케어 이름 생성',
  inputLabel: '스킨케어 비즈니스 세부 정보',
  inputPlaceholder: '스킨케어 비즈니스를 설명하세요 (예: 천연 유기농 스킨케어, 안티에이징 전문, K-뷰티 브랜드)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in skincare and beauty businesses. Generate unique, memorable business names that evoke purity, radiance, and healthy skin. Consider these elements:

- Skin and beauty terms (Skin, Glow, Radiance, Beauty, Complexion)
- Natural and pure (Pure, Natural, Organic, Clean, Fresh)
- Treatment and care (Care, Renew, Revive, Restore, Nourish)
- Science and efficacy (Lab, Science, Formula, Active, Clinical)
- Luxury and wellness (Luxe, Spa, Wellness, Elite, Premium)

Create names that are elegant, trustworthy, and convey skincare expertise and effectiveness.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '스킨케어 브랜드 런칭',
      description: '새로운 스킨케어 브랜드를 런칭하는 기업가들은 생성기를 사용하여 순수함과 효과를 전달하는 이름을 만듭니다. 이 도구는 브랜드의 독특한 포뮬러와 피부 철학을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '클린 뷰티 및 천연 스킨케어',
      description: '천연, 유기농, 또는 클린 뷰티 제품을 전문으로 하는 브랜드들은 생성기를 사용하여 순수함과 자연적 성분을 전달하는 이름을 개발합니다. 이 도구는 의식 있는 소비자에게 어필하는 이름을 제공합니다.',
    },
    {
      title: '에스테틱 및 스킨케어 서비스',
      description: '페이셜, 스킨케어 트리트먼트, 피부 상담 서비스를 제공하는 사업주들은 생성기를 사용하여 전문성과 결과를 전달하는 이름을 만듭니다. 이 도구는 고객에게 건강한 피부를 약속하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 스킨케어 사업 이름이란 무엇인가요?', answer: '좋은 스킨케어 사업 이름은 순수하고 신뢰할 수 있으며, 건강한 피부와 효과를 전달해야 합니다. 타겟 시장(천연, 안티에이징, 클리니컬 등)에 적합하고, 브랜드의 철학을 반영해야 합니다. 또한 광채, 순수함, 케어의 이미지를 암시하면 효과적입니다.' },
    { question: '스킨케어 사업 이름에 "스킨"이나 "스킨케어"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 스킨케어 브랜드는 이 단어 없이도 순수함이나 광채를 암시하는 창의적인 이름을 사용합니다. 브랜드 확장 계획(메이크업, 바디케어)을 고려하여 결정하세요.' },
    { question: '스킨케어 브랜드 이름에 성분이나 효과를 반영해야 하나요?', answer: '특정 성분(비타민C, 레티놀 등)이나 효과(안티에이징, 보습 등)를 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 더 넓은 이름은 다양한 제품 라인으로 확장할 때 유연성을 제공합니다.' },
    { question: '현재 인기 있는 스킨케어 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 클린 뷰티 강조(퓨어, 클린, 내추럴), 과학적 접근(랩, 사이언스, 포뮬러), 글로우 관련(글로우, 레이디언스, 루미너스), K-뷰티 영향(한글이나 한국 컨셉), 미니멀한 단어(에센스, 세럼, 토닉)가 포함됩니다.' },
    { question: '천연/유기농과 클리니컬 스킨케어 이름을 다르게 해야 하나요?', answer: '천연/유기농 브랜드는 자연, 순수, 식물을 연상시키는 이름이 효과적이고, 클리니컬 브랜드는 과학, 효능, 연구를 강조하는 이름이 좋을 수 있습니다. 브랜드의 핵심 포지셔닝에 맞게 선택하세요.' },
    { question: '스킨케어 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram 특히 중요), 뷰티 마켓플레이스(올리브영, 세포라 등), 상표 데이터베이스를 확인하세요. 스킨케어 업계는 상표 보호와 온라인 존재가 특히 중요합니다.' },
    { question: '스킨케어 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 피부 관련(스킨, 글로우, 레이디언스, 컴플렉션), 순수함 관련(퓨어, 내추럴, 클린, 프레시), 케어 관련(케어, 리뉴, 리바이브, 너리시), 과학 관련(랩, 사이언스, 포뮬러, 액티브), 럭셔리 관련(럭스, 프리미엄, 엘리트)가 포함됩니다.' },
    { question: 'K-뷰티 브랜드 이름은 어떻게 접근해야 하나요?', answer: 'K-뷰티 브랜드는 한국적 요소(한글, 한국 문화 컨셉)를 포함하거나 K-뷰티의 특징(다단계 루틴, 혁신적 성분, 글래스 스킨)을 암시하는 이름이 효과적입니다. 글로벌 시장을 타겟으로 한다면 발음하기 쉬운 이름을 선택하세요.' },
    { question: '안티에이징 스킨케어 브랜드 이름 팁이 있나요?', answer: '안티에이징 브랜드는 젊음, 활력, 재생을 연상시키는 긍정적인 단어를 사용하세요. "안티에이징"이나 "주름" 같은 직접적인 표현보다 리뉴, 리바이브, 타임리스, 에이지리스 같은 우아한 대안이 더 효과적입니다.' },
    { question: '스킨케어 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 스킨케어 브랜드와 너무 유사한 이름, 과장되거나 입증되지 않은 효과를 약속하는 이름, 발음이나 철자가 어려운 이름, 특정 피부 타입에 국한되어 확장을 제한하는 이름, 신뢰나 순수함을 전달하지 못하는 이름.' },
  ],
  howToChoose: {
    intro: '스킨케어 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 건강한 피부, 순수한 성분, 그리고 효과적인 결과를 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제품 포장, 매장, 웹사이트, 마케팅 캠페인에 나타납니다—고객이 브랜드를 인식하고 신뢰하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '스킨케어 비즈니스 아이덴티티 정의', description: '이름 생성 전에 스킨케어 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 스킨케어를 제공할 것인지(천연, 클리니컬, 안티에이징, K-뷰티), 타겟 고객은 누구인지(특정 피부 타입, 연령대, 피부 고민), 브랜드 철학은 무엇인지(클린 뷰티, 과학 기반, 지속가능성), 차별화 포인트는 무엇인지(성분, 효과, 가격, 경험) 고려하세요.' },
      { title: '순수함과 신뢰 전달', description: '스킨케어는 피부에 직접 닿습니다. 이름은 순수하고 안전함을 전달하고, 품질 성분을 암시하고, 피부 건강에 대한 헌신을 표현하고, 투명성과 정직을 강조하고, 과학적 신뢰를 구축해야 합니다. 고객이 제품을 안심하고 사용할 수 있다는 신뢰를 느끼게 하세요.' },
      { title: '효과와 결과 약속', description: '고객은 결과를 원합니다. 이름은 효과적인 결과를 암시하고, 건강한 광채를 약속하고, 피부 변화를 전달하고, 전문적 역량을 표현하고, 입증된 효능을 강조해야 합니다. 글로우, 레이디언스, 리뉴 같은 단어가 긍정적인 결과를 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 젊은 층을 위해서는 트렌디하고 SNS 친화적인 이름이, 성숙한 고객을 위해서는 우아하고 결과 지향적인 이름이, 민감성 피부 고객을 위해서는 순하고 안심되는 이름이 효과적입니다. 타겟 고객의 피부 고민과 가치관을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(이커머스용), 소셜 미디어 핸들(Instagram 특히 중요), 뷰티 마켓플레이스(올리브영, 세포라), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 스킨케어 업계는 온라인 판매와 소셜 미디어 마케팅이 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 효과적인 스킨케어를 연상시키는지, 어떤 유형의 제품을 기대하는지, 신뢰할 수 있고 순수하게 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 스킨케어 라인 추가, 메이크업이나 바디케어로 확장, 다양한 피부 타입 대응, 글로벌 시장 진출, 인정받는 스킨케어 브랜드 구축. 이상적인 스킨케어 사업 이름은 순수하고, 신뢰할 수 있고, 효과적이며, 건강한 피부를 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '퓨어글로우', description: '순수한 광채를 의미하여 순수한 성분으로 피부 광채를 선사하는 스킨케어를 암시합니다.' },
    { name: '래디언스랩', description: '광채 연구소를 의미하여 과학적으로 연구된 피부 광채 솔루션을 표현합니다.' },
    { name: '스킨소울', description: '피부의 영혼을 의미하여 피부 깊숙이 케어하는 스킨케어 철학을 암시합니다.' },
    { name: '벨벳비욘드', description: '벨벳을 넘어서를 의미하여 벨벳보다 더 부드러운 피부 결을 표현합니다.' },
    { name: '클린캔버스', description: '깨끗한 캔버스를 의미하여 맑고 깨끗한 피부 캔버스를 만드는 스킨케어를 암시합니다.' },
    { name: '듀드롭', description: '이슬 방울을 의미하여 이슬처럼 촉촉하고 신선한 피부를 표현합니다.' },
    { name: '에센스엘릭서', description: '에센스 엘릭서를 의미하여 마법의 묘약 같은 효과적인 스킨케어 에센스를 암시합니다.' },
    { name: '페이스포뮬러', description: '페이스 포뮬러를 의미하여 과학적으로 배합된 얼굴 전용 스킨케어를 표현합니다.' },
    { name: '글래스글로우', description: '유리 광택을 의미하여 유리처럼 맑고 빛나는 글래스 스킨을 암시합니다.' },
    { name: '허브하모니', description: '허브 하모니를 의미하여 천연 허브 성분의 조화로운 스킨케어를 표현합니다.' },
    { name: '일루미네이트', description: '밝히다를 의미하여 피부를 환하게 밝혀주는 스킨케어를 암시합니다.' },
    { name: '주벤일주스', description: '젊음의 주스를 의미하여 젊음을 선사하는 효과적인 스킨케어를 표현합니다.' },
    { name: '키네틱케어', description: '운동학적 케어를 의미하여 피부의 동적인 건강을 지원하는 스킨케어를 암시합니다.' },
    { name: '루미너스랩', description: '빛나는 연구소를 의미하여 과학적으로 빛나는 피부를 연구하는 브랜드를 표현합니다.' },
    { name: '모이스처마인드', description: '보습 마인드를 의미하여 보습에 집중하는 스킨케어 철학을 암시합니다.' },
    { name: '네이처너리시', description: '자연의 영양을 의미하여 자연에서 온 영양 성분의 스킨케어를 표현합니다.' },
    { name: '옵티멀오라', description: '최적의 아우라를 의미하여 최상의 피부 아우라를 만드는 스킨케어를 암시합니다.' },
    { name: '페탈퓨어', description: '꽃잎 순수를 의미하여 꽃잎처럼 순수하고 부드러운 스킨케어를 표현합니다.' },
    { name: '리뉴얼리추얼', description: '재생 의식을 의미하여 피부 재생을 위한 스킨케어 루틴을 암시합니다.' },
    { name: '세레니티스킨', description: '평온한 피부를 의미하여 진정되고 편안한 피부 상태를 선사하는 스킨케어를 표현합니다.' },
  ],
},

// =============================================================================
// SLIME - 슬라임 사업 이름 생성기
// =============================================================================
'slime': {
  slug: 'slime',
  name: '슬라임 비즈니스 이름 생성기',
  title: '무료 AI 슬라임 사업 이름 아이디어 생성기',
  description: '무료 AI 슬라임 사업 이름 생성기로 재미있고 창의적인 슬라임 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 슬라임 사업 이름 생성기로 재미있고 기억에 남는 사업 이름을 만드세요. 슬라임 숍, ASMR 슬라임, DIY 슬라임 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '슬라임 이름 생성',
  inputLabel: '슬라임 비즈니스 세부 정보',
  inputPlaceholder: '슬라임 비즈니스를 설명하세요 (예: 버터 슬라임 전문, ASMR 슬라임, 친환경 슬라임)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in slime and sensory play businesses. Generate unique, memorable business names that evoke fun, texture, and satisfying sensory experiences. Consider these elements:

- Texture words (Slime, Goo, Squish, Stretch, Fluffy)
- Sensory experience (Satisfying, ASMR, Sensory, Soothing, Relaxing)
- Fun and playful (Fun, Play, Pop, Fizz, Bubble)
- Colors and sparkle (Glitter, Sparkle, Rainbow, Neon, Pastel)
- Creative crafts (DIY, Create, Craft, Make, Mix)

Create names that are fun, memorable, and convey the satisfying appeal of slime products.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '슬라임 숍 런칭',
      description: '새로운 슬라임 숍을 여는 기업가들은 생성기를 사용하여 재미있고 매력적인 이름을 만듭니다. 이 도구는 다양한 슬라임 제품의 즐거움과 품질을 전달하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: 'ASMR 및 감각 놀이 브랜드',
      description: 'ASMR 콘텐츠나 감각 놀이를 위한 슬라임을 전문으로 하는 브랜드들은 생성기를 사용하여 만족스러운 감각 경험을 전달하는 이름을 개발합니다. 이 도구는 스트레스 해소와 릴랙싱을 암시하는 이름을 제공합니다.',
    },
    {
      title: 'DIY 슬라임 키트 비즈니스',
      description: 'DIY 슬라임 키트나 재료를 판매하는 사업주들은 생성기를 사용하여 창의성과 만들기의 즐거움을 전달하는 이름을 만듭니다. 이 도구는 어린이와 부모에게 어필하는 재미있는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 슬라임 사업 이름이란 무엇인가요?', answer: '좋은 슬라임 사업 이름은 재미있고 기억에 남으며, 만족스러운 질감과 감각 경험을 전달해야 합니다. 타겟 고객(어린이, ASMR 팬, DIY 애호가)에게 어필하고, 슬라임의 독특한 특성을 반영해야 합니다. 또한 질감, 색상, 재미의 이미지를 암시하면 효과적입니다.' },
    { question: '슬라임 사업 이름에 "슬라임"을 포함해야 하나요?', answer: '슬라임을 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 창의적인 대안 (스퀴시, 구, 플러프)도 재미있고 기억에 남을 수 있습니다. 다른 감각 놀이 제품으로 확장할 계획이라면 더 넓은 이름을 고려하세요.' },
    { question: '슬라임 브랜드 이름에 질감을 반영해야 하나요?', answer: '특정 질감(버터, 클리어, 플러피 등)을 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 다양한 슬라임을 제공한다면 더 넓은 이름이 제품 라인 확장에 유연성을 제공합니다.' },
    { question: '현재 인기 있는 슬라임 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 ASMR 관련(새티스파잉, 수딩, 릴렉싱), 질감 관련(스퀴시, 스트레치, 플러피), 재미 관련(팝, 피즈, 버블), 색상 관련(글리터, 레인보우, 네온), 의성어(슬라임, 구, 플럽)가 포함됩니다.' },
    { question: '어린이 타겟 슬라임 이름은 어떻게 접근해야 하나요?', answer: '어린이 타겟 슬라임은 재미있고 장난스러운 이름이 효과적입니다. 발음하기 쉽고, 기억하기 쉬우며, 부모에게도 안전하고 품질 있게 들려야 합니다. 밝은 색상이나 상상력을 자극하는 단어를 사용하세요.' },
    { question: '슬라임 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram, TikTok 특히 중요), 온라인 마켓플레이스(Etsy 등), 상표 데이터베이스를 확인하세요. 슬라임 비즈니스는 소셜 미디어와 비디오 콘텐츠가 핵심입니다.' },
    { question: '슬라임 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 질감 관련(슬라임, 구, 스퀴시, 스트레치, 플러피), 감각 관련(새티스파잉, ASMR, 센서리, 수딩), 재미 관련(펀, 플레이, 팝, 피즈), 색상 관련(글리터, 스파클, 레인보우, 네온), 창작 관련(DIY, 크리에이트, 믹스, 메이크)가 포함됩니다.' },
    { question: 'ASMR 슬라임 브랜드 이름 팁이 있나요?', answer: 'ASMR 슬라임 브랜드는 만족스러운 감각 경험을 암시하는 이름이 효과적입니다. 새티스파잉, 수딩, 크리스피, 크런치 같은 ASMR 커뮤니티에서 익숙한 단어를 사용하면 타겟 고객에게 즉시 어필할 수 있습니다.' },
    { question: '친환경 슬라임 브랜드 이름을 어떻게 만들 수 있나요?', answer: '친환경 슬라임이 핵심이라면 에코, 그린, 내추럴, 세이프 같은 단어를 포함하면 환경과 안전을 중시하는 부모에게 어필할 수 있습니다. 무독성, 생분해성 등의 특성을 암시하는 이름도 효과적입니다.' },
    { question: '슬라임 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 발음이나 철자가 어려운 이름, 기존 유명 슬라임 브랜드와 너무 유사한 이름, 어린이에게 부적절하거나 부정적인 연상을 일으키는 이름, 특정 질감에 국한되어 확장을 제한하는 이름, 재미나 품질을 전달하지 못하는 이름.' },
  ],
  howToChoose: {
    intro: '슬라임 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 재미, 만족스러운 감각 경험, 그리고 품질 좋은 제품을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제품 포장, 소셜 미디어, 온라인 숍, 마케팅 콘텐츠에 나타납니다—고객이 브랜드를 인식하고 기억하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '슬라임 비즈니스 아이덴티티 정의', description: '이름 생성 전에 슬라임 비즈니스의 포지셔닝을 명확히 하세요. 어떤 종류의 슬라임을 제공할 것인지(버터, 클리어, 플러피, 크런치), 타겟 고객은 누구인지(어린이, ASMR 팬, 수집가, DIY 애호가), 브랜드 개성은 무엇인지(재미있고 장난스러운, 만족스럽고 릴랙싱한, 창의적인), 차별화 포인트는 무엇인지(질감, 향기, 색상, 안전성) 고려하세요.' },
      { title: '재미와 흥미 전달', description: '슬라임은 즐거움을 위한 것입니다. 이름은 재미와 놀이를 전달하고, 흥미와 호기심을 자극하고, 즐거운 경험을 약속하고, 에너지와 활력을 표현하고, 긍정적인 감정을 불러일으켜야 합니다. 고객이 이름만 들어도 슬라임을 만지고 싶어하게 하세요.' },
      { title: '감각적 경험 표현', description: '슬라임은 촉각과 시각의 만족입니다. 이름은 만족스러운 질감을 암시하고, 시각적 매력을 전달하고, ASMR 경험을 표현하고, 스트레스 해소를 약속하고, 감각적 즐거움을 강조해야 합니다. 스퀴시, 스트레치, 새티스파잉 같은 단어가 감각 경험을 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 어린이를 위해서는 재미있고 기억하기 쉬운 이름이, ASMR 팬을 위해서는 만족스럽고 릴랙싱한 이름이, 부모를 위해서는 안전하고 품질 있게 느껴지는 이름이 효과적입니다. 타겟 고객의 기대와 관심사를 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(이커머스용), 소셜 미디어 핸들(Instagram, TikTok 특히 중요), 온라인 마켓플레이스(Etsy 등), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 슬라임 비즈니스는 소셜 미디어와 비디오 콘텐츠 마케팅이 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 재미있는 슬라임을 연상시키는지, 어떤 유형의 슬라임을 기대하는지, 구매하고 싶은 욕구를 느끼는지, 기억하고 친구에게 추천하기 쉬운지, (부모의 경우) 안전하게 느껴지는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 슬라임 종류 추가, DIY 키트나 재료 판매, 다른 감각 놀이 제품 확장, 콘텐츠 크리에이션, 인정받는 슬라임 브랜드 구축. 이상적인 슬라임 사업 이름은 재미있고, 기억에 남고, 만족스러우며, 즐거운 슬라임 경험을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '스퀴시팩토리', description: '스퀴시 공장을 의미하여 만족스러운 질감의 슬라임이 만들어지는 곳을 암시합니다.' },
    { name: '글리터구', description: '글리터 구를 의미하여 반짝이는 글리터가 가득한 슬라임을 표현합니다.' },
    { name: '플러피펀', description: '플러피 펀을 의미하여 푹신한 플러피 슬라임의 재미를 암시합니다.' },
    { name: '슬라임드림', description: '슬라임 꿈을 의미하여 꿈처럼 만족스러운 슬라임 경험을 표현합니다.' },
    { name: '버블버터', description: '버블 버터를 의미하여 버터처럼 부드럽고 버블이 있는 슬라임을 암시합니다.' },
    { name: '새티스파이슬라임', description: '새티스파이 슬라임을 의미하여 ASMR 만족을 주는 슬라임을 표현합니다.' },
    { name: '크런치크래프트', description: '크런치 크래프트를 의미하여 크런치 질감의 슬라임 공예를 암시합니다.' },
    { name: '드립앤드롭', description: '드립 앤 드롭을 의미하여 흘러내리고 떨어지는 슬라임의 특성을 표현합니다.' },
    { name: '에코슬라임', description: '에코 슬라임을 의미하여 환경 친화적이고 안전한 슬라임을 암시합니다.' },
    { name: '피지팝', description: '피지 팝을 의미하여 톡톡 터지는 피지 슬라임의 재미를 표현합니다.' },
    { name: '구글로우', description: '구 글로우를 의미하여 빛나는 글로우 슬라임을 암시합니다.' },
    { name: '헤븐리하이드', description: '천상의 숨김을 의미하여 천국처럼 만족스러운 슬라임 경험을 표현합니다.' },
    { name: '인피니티익스텐드', description: '무한 확장을 의미하여 끝없이 늘어나는 슬라임의 특성을 암시합니다.' },
    { name: '젤리조이', description: '젤리 조이를 의미하여 젤리 같은 슬라임의 기쁨을 표현합니다.' },
    { name: '키네틱킹덤', description: '운동학 왕국을 의미하여 움직임이 있는 슬라임의 왕국을 암시합니다.' },
    { name: '레몬레이어', description: '레몬 레이어를 의미하여 상큼한 색상의 레이어 슬라임을 표현합니다.' },
    { name: '매직믹스', description: '매직 믹스를 의미하여 마법처럼 섞이는 슬라임의 재미를 암시합니다.' },
    { name: '네온너들', description: '네온 너들을 의미하여 밝은 네온 색상의 슬라임을 표현합니다.' },
    { name: '우지월드', description: '우지 월드를 의미하여 끈적이는 슬라임의 세계를 암시합니다.' },
    { name: '파스텔플레이', description: '파스텔 플레이를 의미하여 부드러운 파스텔 색상의 슬라임 놀이를 표현합니다.' },
  ],
},

// =============================================================================
// SOAP - 비누 사업 이름 생성기
// =============================================================================
'soap': {
  slug: 'soap',
  name: '비누 비즈니스 이름 생성기',
  title: '무료 AI 비누 사업 이름 아이디어 생성기',
  description: '무료 AI 비누 사업 이름 생성기로 순수하고 매력적인 비누 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 비누 사업 이름 생성기로 자연스럽고 기억에 남는 사업 이름을 만드세요. 핸드메이드 비누, 천연 비누, 아로마 비누 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '비누 이름 생성',
  inputLabel: '비누 비즈니스 세부 정보',
  inputPlaceholder: '비누 비즈니스를 설명하세요 (예: 천연 수제 비누, 아로마테라피 비누, 유기농 재료 사용)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in soap and bath product businesses. Generate unique, memorable business names that evoke cleanliness, natural ingredients, and luxurious bathing experiences. Consider these elements:

- Cleanliness and purity (Clean, Pure, Fresh, Wash, Cleanse)
- Natural and organic (Natural, Organic, Botanical, Herbal, Plant)
- Luxurious bathing (Luxe, Spa, Bath, Bubble, Lather)
- Scent and aromatherapy (Scent, Aroma, Fragrance, Essential, Bloom)
- Handcrafted and artisan (Craft, Artisan, Handmade, Studio, Batch)

Create names that are fresh, inviting, and convey soap quality and craftsmanship.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '핸드메이드 비누 브랜드 런칭',
      description: '핸드메이드 비누 브랜드를 런칭하는 장인들은 생성기를 사용하여 장인 정신과 품질을 전달하는 이름을 만듭니다. 이 도구는 수제 비누의 독특한 가치와 케어를 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '천연 및 유기농 비누 브랜드',
      description: '천연, 유기농 재료로 비누를 만드는 브랜드들은 생성기를 사용하여 순수함과 자연적 성분을 전달하는 이름을 개발합니다. 이 도구는 환경과 건강을 중시하는 고객에게 어필하는 이름을 제공합니다.',
    },
    {
      title: '아로마테라피 및 스파 비누',
      description: '아로마테라피나 스파 경험을 위한 비누를 전문으로 하는 사업주들은 생성기를 사용하여 릴랙싱과 웰니스를 전달하는 이름을 만듭니다. 이 도구는 럭셔리한 목욕 경험을 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 비누 사업 이름이란 무엇인가요?', answer: '좋은 비누 사업 이름은 깨끗하고 신선하며, 품질과 자연적 성분을 전달해야 합니다. 타겟 시장(핸드메이드, 럭셔리, 천연 등)에 적합하고, 브랜드의 철학을 반영해야 합니다. 또한 순수함, 향기, 목욕의 즐거움을 암시하면 효과적입니다.' },
    { question: '비누 사업 이름에 "비누"나 "소프"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 비누 브랜드는 이 단어 없이도 청결함이나 자연을 암시하는 창의적인 이름을 사용합니다. 바디케어나 바스 제품으로 확장할 계획이라면 더 넓은 이름을 고려하세요.' },
    { question: '비누 브랜드 이름에 향기나 재료를 반영해야 하나요?', answer: '특정 향기(라벤더, 장미 등)나 재료(올리브, 시어버터 등)를 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 다양한 제품을 제공한다면 더 넓은 이름이 제품 라인 확장에 유연성을 제공합니다.' },
    { question: '현재 인기 있는 비누 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 자연 강조(보태니컬, 허벌, 플랜트), 장인 정신(아티장, 크래프트, 핸드메이드), 청결 관련(퓨어, 프레시, 클린), 웰니스 관련(웰니스, 스파, 테라피), 미니멀한 단어(에센셜, 심플, 베이직)가 포함됩니다.' },
    { question: '핸드메이드와 상업용 비누 이름을 다르게 해야 하나요?', answer: '핸드메이드 비누는 장인 정신, 소량 생산, 개인화를 강조하는 이름이 효과적이고, 상업용 비누는 품질과 효과를 강조하는 이름이 좋을 수 있습니다. 브랜드의 생산 방식과 가치 제안에 맞게 선택하세요.' },
    { question: '비누 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram, Pinterest), 온라인 마켓플레이스(Etsy 등), 상표 데이터베이스를 확인하세요. 비누 비즈니스는 시각적 플랫폼과 온라인 판매가 중요합니다.' },
    { question: '비누 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 청결 관련(클린, 퓨어, 프레시, 워시, 클렌즈), 자연 관련(내추럴, 오가닉, 보태니컬, 허벌), 럭셔리 관련(럭스, 스파, 인덜전스), 향기 관련(센트, 아로마, 에센셜, 블룸), 장인 관련(크래프트, 아티장, 핸드메이드, 배치)가 포함됩니다.' },
    { question: '아로마테라피 비누 브랜드 이름 팁이 있나요?', answer: '아로마테라피 비누 브랜드는 향기, 릴랙싱, 웰니스를 암시하는 이름이 효과적입니다. 에센셜, 아로마, 테라피, 젠 같은 단어가 아로마테라피 경험을 전달할 수 있습니다. 특정 에센셜 오일을 브랜드 정체성으로 사용할 수도 있습니다.' },
    { question: '친환경 비누 브랜드 이름을 어떻게 만들 수 있나요?', answer: '친환경이 핵심이라면 에코, 그린, 서스테이너블, 제로웨이스트 같은 단어를 포함하면 환경 의식이 있는 고객을 끌어들일 수 있습니다. 또한 자연 재료, 생분해성, 무포장을 암시하는 이름도 효과적입니다.' },
    { question: '비누 사업 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 비누 브랜드와 너무 유사한 이름, 특정 향기나 재료에 국한되어 확장을 제한하는 이름, 발음이나 철자가 어려운 이름, 청결함이나 품질을 전달하지 못하는 이름, 부정적인 연상을 일으킬 수 있는 단어.' },
  ],
  howToChoose: {
    intro: '비누 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 청결함, 자연적 성분, 그리고 즐거운 목욕 경험을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제품 포장, 라벨, 웹사이트, 마켓플레이스에 나타납니다—고객이 브랜드를 인식하고 신뢰하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '비누 비즈니스 아이덴티티 정의', description: '이름 생성 전에 비누 비즈니스의 포지셔닝을 명확히 하세요. 어떤 종류의 비누를 제공할 것인지(핸드메이드, 천연, 아로마테라피, 럭셔리), 타겟 고객은 누구인지(환경 의식, 민감성 피부, 럭셔리 애호가), 브랜드 철학은 무엇인지(지속가능성, 순수함, 장인 정신), 차별화 포인트는 무엇인지(성분, 향기, 포장, 가격) 고려하세요.' },
      { title: '순수함과 청결 전달', description: '비누는 청결의 상징입니다. 이름은 깨끗하고 신선함을 전달하고, 순수한 성분을 암시하고, 피부에 안전함을 표현하고, 청결한 결과를 약속하고, 건강과 위생을 강조해야 합니다. 고객이 제품의 순수함과 품질을 신뢰할 수 있게 하세요.' },
      { title: '자연과 장인 정신 표현', description: '핸드메이드나 천연 비누는 차별화됩니다. 이름은 자연 재료를 암시하고, 장인 정신을 전달하고, 소량 생산의 가치를 표현하고, 개인적인 케어를 강조하고, 독특한 품질을 약속해야 합니다. 크래프트, 아티장, 보태니컬 같은 단어가 이러한 가치를 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 환경 의식 고객을 위해서는 자연스럽고 지속가능한 이름이, 럭셔리 고객을 위해서는 우아하고 프리미엄한 이름이, 민감성 피부 고객을 위해서는 순하고 안심되는 이름이 효과적입니다. 타겟 고객의 가치관과 필요를 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(이커머스용), 소셜 미디어 핸들(Instagram, Pinterest 중요), 온라인 마켓플레이스(Etsy, 네이버 스마트스토어), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 비누 비즈니스는 시각적 브랜딩과 온라인 판매가 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 품질 좋은 비누를 연상시키는지, 어떤 유형의 비누를 기대하는지, 신뢰할 수 있고 순수하게 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 비누 라인 추가, 바디케어나 바스 제품으로 확장, 스킨케어로 확장, 선물 세트나 구독 서비스, 인정받는 비누 브랜드 구축. 이상적인 비누 사업 이름은 순수하고, 자연스럽고, 신뢰할 수 있으며, 청결하고 즐거운 목욕 경험을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '퓨어래더', description: '순수한 거품을 의미하여 순수한 성분으로 만든 풍성한 거품의 비누를 암시합니다.' },
    { name: '보태니컬배스', description: '식물성 목욕을 의미하여 식물 성분으로 만든 목욕용 비누를 표현합니다.' },
    { name: '클린크래프트', description: '깨끗한 공예를 의미하여 장인 정신으로 만든 청결한 비누를 암시합니다.' },
    { name: '듀프레시', description: '이슬 신선을 의미하여 이슬처럼 신선한 비누 경험을 표현합니다.' },
    { name: '에센셜버블', description: '에센셜 버블을 의미하여 에센셜 오일로 만든 버블 비누를 암시합니다.' },
    { name: '플로랄폼', description: '꽃 거품을 의미하여 꽃 성분과 향기의 거품 비누를 표현합니다.' },
    { name: '그린글로우', description: '그린 글로우를 의미하여 친환경 성분으로 피부를 빛나게 하는 비누를 암시합니다.' },
    { name: '허벌하모니', description: '허벌 하모니를 의미하여 다양한 허브의 조화로운 비누를 표현합니다.' },
    { name: '인덜전스바', description: '인덜전스 바를 의미하여 럭셔리한 목욕 경험을 제공하는 비누를 암시합니다.' },
    { name: '저스트클린', description: '저스트 클린을 의미하여 깨끗함에 집중하는 심플한 비누 철학을 표현합니다.' },
    { name: '킨드클렌즈', description: '친절한 클렌즈를 의미하여 피부에 친절하게 클렌징하는 비누를 암시합니다.' },
    { name: '라벤더래더', description: '라벤더 거품을 의미하여 라벤더 향의 편안한 거품 비누를 표현합니다.' },
    { name: '민트모닝', description: '민트 모닝을 의미하여 상쾌한 민트로 시작하는 아침 비누를 암시합니다.' },
    { name: '내추럴너처', description: '자연의 양육을 의미하여 자연 성분으로 피부를 돌보는 비누를 표현합니다.' },
    { name: '올리브오아시스', description: '올리브 오아시스를 의미하여 올리브 오일의 풍부한 영양 비누를 암시합니다.' },
    { name: '퓨리파이', description: '정화하다를 의미하여 피부를 정화하는 순수한 비누를 표현합니다.' },
    { name: '퀸즈쿼터', description: '퀸즈 쿼터를 의미하여 여왕처럼 럭셔리한 목욕 경험을 암시합니다.' },
    { name: '로즈리추얼', description: '로즈 리추얼을 의미하여 장미 향의 목욕 의식을 표현합니다.' },
    { name: '스무스앤소프트', description: '스무스 앤 소프트를 의미하여 부드럽고 매끄러운 피부를 선사하는 비누를 암시합니다.' },
    { name: '테라클린', description: '테라 클린을 의미하여 대지의 성분으로 깨끗하게 하는 비누를 표현합니다.' },
  ],
},

// =============================================================================
// SPORTSWEAR - 스포츠웨어 사업 이름 생성기
// =============================================================================
'sportswear': {
  slug: 'sportswear',
  name: '스포츠웨어 비즈니스 이름 생성기',
  title: '무료 AI 스포츠웨어 사업 이름 아이디어 생성기',
  description: '무료 AI 스포츠웨어 사업 이름 생성기로 역동적이고 기억에 남는 스포츠 의류 브랜드 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 스포츠웨어 사업 이름 생성기로 역동적이고 영감을 주는 사업 이름을 만드세요. 운동복, 애슬레저, 스포츠 의류 브랜드를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '스포츠웨어 이름 생성',
  inputLabel: '스포츠웨어 비즈니스 세부 정보',
  inputPlaceholder: '스포츠웨어 비즈니스를 설명하세요 (예: 요가웨어 전문, 러닝 의류, 기능성 운동복)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in sportswear and athletic apparel businesses. Generate unique, memorable business names that evoke energy, performance, and athletic excellence. Consider these elements:

- Athletic terms (Sport, Athletic, Active, Fit, Performance)
- Energy and movement (Motion, Velocity, Power, Energy, Dynamic)
- Strength and endurance (Strong, Endure, Force, Peak, Prime)
- Comfort and flexibility (Flex, Comfort, Flow, Move, Swift)
- Victory and achievement (Victory, Champion, Elite, Pro, Winner)

Create names that are energetic, motivational, and convey athletic performance and quality.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '스포츠웨어 브랜드 런칭',
      description: '새로운 스포츠웨어 브랜드를 런칭하는 기업가들은 생성기를 사용하여 에너지와 성능을 전달하는 이름을 만듭니다. 이 도구는 운동 선수와 피트니스 애호가에게 어필하면서 경쟁이 치열한 애슬레틱 의류 시장에서 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '요가 및 필라테스 의류 브랜드',
      description: '요가나 필라테스 의류를 전문으로 하는 브랜드들은 생성기를 사용하여 유연성, 평온함, 마음챙김을 전달하는 이름을 개발합니다. 이 도구는 웰니스 중심의 운동을 즐기는 고객에게 어필하는 이름을 제공합니다.',
    },
    {
      title: '기능성 스포츠 의류 회사',
      description: '고기능성 스포츠 의류를 제조하는 회사들은 생성기를 사용하여 기술, 혁신, 퍼포먼스를 전달하는 이름을 만듭니다. 이 도구는 최첨단 소재와 기능을 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 스포츠웨어 사업 이름이란 무엇인가요?', answer: '좋은 스포츠웨어 사업 이름은 에너지, 역동성, 성능을 전달해야 합니다. 기억하기 쉽고, 짧고 강렬하며, 운동과 피트니스에 대한 열정을 자극해야 합니다. 또한 타겟 스포츠나 활동(러닝, 요가, 헬스 등)에 적합하고, 운동할 때의 자신감과 능력을 암시하면 효과적입니다.' },
    { question: '스포츠웨어 이름에 "스포츠"나 "애슬레틱"을 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 스포츠웨어 브랜드(나이키, 언더아머, 룰루레몬)는 이 단어 없이 역동성이나 움직임을 암시하는 창의적인 이름을 사용합니다. 라이프스타일 브랜드로 확장할 계획이라면 더 넓은 이름을 고려하세요.' },
    { question: '스포츠웨어 브랜드 이름에 특정 스포츠를 반영해야 하나요?', answer: '특정 스포츠(러닝, 요가, 축구 등)를 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 다양한 스포츠에 맞는 의류를 제공한다면 더 넓은 이름이 제품 라인 확장에 유연성을 제공합니다.' },
    { question: '현재 인기 있는 스포츠웨어 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 간결한 한 단어(플렉스, 스위프트, 프라임), 움직임 강조(모션, 플로우, 무브), 성능 강조(퍼포먼스, 엘리트, 프로), 지속가능성(에코, 그린, 서스테이너블), 테크 강조(테크, 프로, 엔지니어드)가 포함됩니다.' },
    { question: '스포츠웨어와 애슬레저 브랜드 이름을 다르게 해야 하나요?', answer: '전통적인 스포츠웨어는 성능과 기능을 강조하고, 애슬레저는 편안함과 스타일을 강조합니다. 두 시장 모두를 타겟으로 한다면 유연하면서도 역동적인 이름을 선택하세요. 애슬레저는 라이프스타일 측면을 더 강조할 수 있습니다.' },
    { question: '스포츠웨어 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram 특히 중요), 온라인 스포츠용품 마켓플레이스, 상표 데이터베이스를 확인하세요. 스포츠웨어 업계는 시각적 마케팅이 중요하므로 소셜 미디어 가용성이 핵심입니다.' },
    { question: '스포츠웨어 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 에너지 관련(에너지, 파워, 포스, 펄스, 부스트), 움직임 관련(모션, 무브, 플로우, 러시, 스위프트), 성능 관련(퍼포먼스, 프로, 엘리트, 프라임, 피크), 신체 관련(핏, 플렉스, 스트롱, 애슬레틱), 성취 관련(챔피언, 빅토리, 위너, 트라이엄프)가 포함됩니다.' },
    { question: '여성 스포츠웨어 브랜드 이름 팁이 있나요?', answer: '여성 스포츠웨어 브랜드는 강인함과 우아함을 결합할 수 있습니다. 엠파워먼트, 그레이스, 밸런스 같은 단어가 여성 운동 선수에게 어필할 수 있습니다. 그러나 성별 중립적인 이름이 더 넓은 시장에 어필하고 향후 확장에 유리할 수 있습니다.' },
    { question: '지속가능한 스포츠웨어 브랜드 이름을 어떻게 만들 수 있나요?', answer: '지속가능성이 핵심이라면 에코, 그린, 리사이클, 오가닉 같은 단어를 포함하면 환경 의식이 있는 고객을 끌어들일 수 있습니다. 그러나 성능과 지속가능성을 모두 전달하는 균형 잡힌 이름이 더 효과적일 수 있습니다.' },
    { question: '스포츠웨어 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 스포츠 브랜드와 너무 유사한 이름(법적 문제 가능), 특정 스포츠에 국한되어 확장을 제한하는 이름, 발음이나 철자가 어려운 이름, 에너지나 역동성을 전달하지 못하는 이름, 부정적인 연상을 일으킬 수 있는 단어.' },
  ],
  howToChoose: {
    intro: '스포츠웨어 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 성능, 스타일, 그리고 운동에 대한 열정을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 의류 태그, 매장, 웹사이트, 광고에 나타납니다—운동 선수와 피트니스 애호가가 브랜드를 인식하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '스포츠웨어 비즈니스 아이덴티티 정의', description: '이름 생성 전에 스포츠웨어 비즈니스의 포지셔닝을 명확히 하세요. 어떤 종류의 스포츠웨어를 제공할 것인지(러닝, 요가, 헬스, 아웃도어, 종합), 타겟 고객은 누구인지(프로 선수, 피트니스 애호가, 캐주얼 운동자), 브랜드 철학은 무엇인지(성능, 스타일, 지속가능성, 혁신), 차별화 포인트는 무엇인지(기술, 디자인, 가격, 기능) 고려하세요.' },
      { title: '에너지와 역동성 전달', description: '스포츠웨어는 활동과 움직임에 관한 것입니다. 이름은 에너지와 활력을 전달하고, 움직임과 역동성을 암시하고, 운동에 대한 열정을 자극하고, 활동적인 라이프스타일을 표현하고, 성취감을 강조해야 합니다. 고객이 제품을 입었을 때 에너지가 넘치고 동기부여 받는 느낌을 기대하게 하세요.' },
      { title: '성능과 품질 표현', description: '스포츠웨어는 기능이 중요합니다. 이름은 고품질 성능을 암시하고, 기술과 혁신을 전달하고, 내구성과 기능성을 약속하고, 전문적 수준을 표현하고, 신뢰할 수 있는 품질을 강조해야 합니다. 퍼포먼스, 프로, 테크 같은 단어가 이러한 가치를 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 프로 선수를 위해서는 성능 중심의 강렬한 이름이, 요가/필라테스 애호가를 위해서는 평온하고 유연한 이름이, 캐주얼 피트니스를 위해서는 접근 가능하고 동기부여 되는 이름이 효과적입니다. 타겟 고객의 운동 스타일과 가치관을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름, 소셜 미디어 핸들(Instagram, YouTube 중요), 온라인 스포츠용품 마켓플레이스, 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 스포츠웨어 업계는 시각적 마케팅과 인플루언서 협업이 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 고품질 스포츠웨어를 연상시키는지, 어떤 유형의 운동을 위한 의류를 기대하는지, 에너지 넘치고 동기부여 되는 느낌인지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 스포츠 카테고리 추가, 액세서리로 확장, 라이프스타일 의류로 확장, 스포츠 장비 진출, 글로벌 브랜드 구축. 이상적인 스포츠웨어 사업 이름은 역동적이고, 동기부여 되고, 기억에 남으며, 뛰어난 운동 성능을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '액티브엣지', description: '활동적인 엣지를 의미하여 운동할 때 경쟁 우위를 제공하는 스포츠웨어를 암시합니다.' },
    { name: '블레이즈모션', description: '불꽃 모션을 의미하여 불타는 열정과 역동적인 움직임을 표현하는 스포츠웨어 브랜드를 암시합니다.' },
    { name: '코어커넥트', description: '코어 연결을 의미하여 신체의 중심과 연결되는 기능성 스포츠웨어를 표현합니다.' },
    { name: '다이나핏', description: '다이나믹 핏을 의미하여 역동적인 움직임에 최적화된 핏을 제공하는 스포츠웨어를 암시합니다.' },
    { name: '엘리트엔듀어', description: '엘리트 엔듀어를 의미하여 최고 수준의 내구성을 갖춘 스포츠웨어를 표현합니다.' },
    { name: '플렉스포스', description: '플렉스 포스를 의미하여 유연성과 힘을 결합한 스포츠웨어를 암시합니다.' },
    { name: '글라이드기어', description: '글라이드 기어를 의미하여 부드러운 움직임을 위한 스포츠 장비를 표현합니다.' },
    { name: '하이퍼액티브', description: '하이퍼 액티브를 의미하여 초활동적인 운동을 위한 스포츠웨어를 암시합니다.' },
    { name: '이그나이트웨어', description: '이그나이트 웨어를 의미하여 운동 열정을 불태우는 스포츠웨어를 표현합니다.' },
    { name: '점프스타트', description: '점프 스타트를 의미하여 운동을 시작하는 에너지를 주는 스포츠웨어를 암시합니다.' },
    { name: '킥모션', description: '킥 모션을 의미하여 역동적인 킥 동작을 위한 스포츠웨어를 표현합니다.' },
    { name: '리프트라인', description: '리프트 라인을 의미하여 몸을 들어올리는 지지력을 제공하는 스포츠웨어를 암시합니다.' },
    { name: '모멘텀무브', description: '모멘텀 무브를 의미하여 운동 모멘텀을 유지시키는 스포츠웨어를 표현합니다.' },
    { name: '넥스트레벨핏', description: '넥스트 레벨 핏을 의미하여 다음 단계의 성능을 위한 스포츠웨어를 암시합니다.' },
    { name: '옵티멀애슬레틱', description: '옵티멀 애슬레틱을 의미하여 최적의 운동 성능을 위한 스포츠웨어를 표현합니다.' },
    { name: '파워펄스', description: '파워 펄스를 의미하여 힘의 맥박을 느끼게 하는 스포츠웨어를 암시합니다.' },
    { name: '퀵스트라이드', description: '퀵 스트라이드를 의미하여 빠른 보폭을 지원하는 스포츠웨어를 표현합니다.' },
    { name: '러쉬기어', description: '러쉬 기어를 의미하여 속도감 넘치는 운동을 위한 스포츠웨어를 암시합니다.' },
    { name: '스프린트스피릿', description: '스프린트 스피릿을 의미하여 전력 질주의 정신을 담은 스포츠웨어를 표현합니다.' },
    { name: '타이탄트레이닝', description: '타이탄 트레이닝을 의미하여 강인한 트레이닝을 위한 스포츠웨어를 암시합니다.' },
  ],
},

// =============================================================================
// T-SHIRT - 티셔츠 사업 이름 생성기
// =============================================================================
't-shirt': {
  slug: 't-shirt',
  name: '티셔츠 비즈니스 이름 생성기',
  title: '무료 AI 티셔츠 사업 이름 아이디어 생성기',
  description: '무료 AI 티셔츠 사업 이름 생성기로 창의적이고 기억에 남는 티셔츠 브랜드 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 독창적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 티셔츠 사업 이름 생성기로 트렌디하고 개성 있는 사업 이름을 만드세요. 커스텀 티셔츠, 그래픽 티, 의류 브랜드를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '티셔츠 이름 생성',
  inputLabel: '티셔츠 비즈니스 세부 정보',
  inputPlaceholder: '티셔츠 비즈니스를 설명하세요 (예: 그래픽 프린트 전문, 친환경 소재, 유머 디자인)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in t-shirt and apparel printing businesses. Generate unique, memorable business names that evoke creativity, self-expression, and fashion-forward thinking. Consider these elements:

- Apparel terms (Tee, Shirt, Thread, Wear, Apparel)
- Creativity and design (Design, Print, Ink, Art, Create)
- Style and fashion (Style, Fresh, Urban, Street, Vibe)
- Personalization (Custom, Original, Unique, Personal, Express)
- Culture and community (Culture, Collective, Crew, Tribe, Squad)

Create names that are trendy, creative, and convey unique personal expression.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '커스텀 티셔츠 비즈니스 런칭',
      description: '커스텀 티셔츠 비즈니스를 시작하는 기업가들은 생성기를 사용하여 창의성과 개성을 전달하는 이름을 만듭니다. 이 도구는 개인화된 디자인 서비스를 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '그래픽 티셔츠 브랜드',
      description: '독특한 그래픽 디자인 티셔츠를 판매하는 브랜드들은 생성기를 사용하여 예술성과 트렌디함을 전달하는 이름을 개발합니다. 이 도구는 창의적인 디자인과 자기 표현을 중시하는 고객에게 어필하는 이름을 제공합니다.',
    },
    {
      title: '친환경 의류 스타트업',
      description: '지속가능한 소재로 티셔츠를 제작하는 스타트업들은 생성기를 사용하여 환경 의식과 스타일을 결합한 이름을 만듭니다. 이 도구는 에코 패션을 추구하는 고객에게 어필하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 티셔츠 사업 이름이란 무엇인가요?', answer: '좋은 티셔츠 사업 이름은 창의적이고 트렌디하며, 브랜드의 스타일과 개성을 전달해야 합니다. 기억하기 쉽고, 타겟 시장(그래픽 티, 스트릿웨어, 친환경 등)에 적합해야 합니다. 또한 자기 표현, 스타일, 창의성을 암시하면 효과적입니다.' },
    { question: '티셔츠 사업 이름에 "티"나 "셔츠"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 티셔츠 브랜드는 이 단어 없이 스타일이나 문화를 암시하는 창의적인 이름을 사용합니다. 다른 의류 아이템으로 확장할 계획이라면 더 넓은 이름을 고려하세요.' },
    { question: '티셔츠 브랜드 이름에 디자인 스타일을 반영해야 하나요?', answer: '특정 스타일(그래픽, 미니멀, 빈티지 등)을 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 다양한 스타일을 제공한다면 더 넓은 이름이 디자인 확장에 유연성을 제공합니다.' },
    { question: '현재 인기 있는 티셔츠 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 스트릿 문화 강조(스트릿, 어반, 크루), 자기 표현(익스프레스, 셀프, 보이스), 간결한 단어(잉크, 티, 웨어), 지속가능성(에코, 그린, 오가닉), 아트 강조(아트, 디자인, 프린트)가 포함됩니다.' },
    { question: '그래픽 티와 무지 티 브랜드 이름을 다르게 해야 하나요?', answer: '그래픽 티 브랜드는 창의성과 아트를 강조하고, 무지/베이직 티 브랜드는 품질과 심플함을 강조합니다. 두 제품 모두 제공한다면 균형 잡힌 이름을 선택하거나 브랜드 철학을 중심으로 이름을 지으세요.' },
    { question: '티셔츠 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram 특히 중요), 온라인 의류 마켓플레이스(Etsy, 스마트스토어 등), 상표 데이터베이스를 확인하세요. 티셔츠 비즈니스는 시각적 마케팅과 이커머스가 핵심입니다.' },
    { question: '티셔츠 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 의류 관련(티, 웨어, 스레드, 패브릭, 코튼), 디자인 관련(프린트, 잉크, 아트, 디자인, 그래픽), 스타일 관련(스타일, 바이브, 프레시, 쿨, 트렌디), 개성 관련(커스텀, 유니크, 오리지널, 퍼스널), 문화 관련(스트릿, 어반, 컬처, 크루)가 포함됩니다.' },
    { question: '스트릿웨어 티셔츠 브랜드 이름 팁이 있나요?', answer: '스트릿웨어 브랜드는 도시 문화, 하위문화, 자기 표현을 강조합니다. 어반, 스트릿, 크루, 스쿼드 같은 단어가 스트릿 문화를 전달할 수 있습니다. 또한 짧고 강렬한 단어나 신조어가 스트릿웨어 브랜드에 효과적입니다.' },
    { question: '친환경 티셔츠 브랜드 이름을 어떻게 만들 수 있나요?', answer: '지속가능성이 핵심이라면 에코, 그린, 오가닉, 서스테이너블 같은 단어를 포함하면 환경 의식이 있는 고객을 끌어들일 수 있습니다. 그러나 스타일과 지속가능성을 모두 전달하는 균형 잡힌 이름이 더 넓은 어필력을 가질 수 있습니다.' },
    { question: '티셔츠 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 의류 브랜드와 너무 유사한 이름(법적 문제 가능), 특정 스타일에 국한되어 확장을 제한하는 이름, 발음이나 철자가 어려운 이름, 창의성이나 스타일을 전달하지 못하는 이름, 트렌디해서 빠르게 구식이 될 수 있는 이름.' },
  ],
  howToChoose: {
    intro: '티셔츠 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 스타일, 창의성, 그리고 자기 표현을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 의류 태그, 포장, 웹사이트, 소셜 미디어에 나타납니다—고객이 브랜드를 인식하고 동일시하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '티셔츠 비즈니스 아이덴티티 정의', description: '이름 생성 전에 티셔츠 비즈니스의 포지셔닝을 명확히 하세요. 어떤 종류의 티셔츠를 제공할 것인지(그래픽, 커스텀, 베이직, 빈티지), 타겟 고객은 누구인지(청소년, 밀레니얼, 특정 하위문화), 브랜드 철학은 무엇인지(자기 표현, 지속가능성, 품질), 차별화 포인트는 무엇인지(디자인, 품질, 가격, 커스터마이징) 고려하세요.' },
      { title: '창의성과 스타일 전달', description: '티셔츠는 자기 표현의 수단입니다. 이름은 창의성과 예술성을 전달하고, 트렌디하고 스타일리시함을 암시하고, 개성과 독창성을 표현하고, 패션 감각을 약속하고, 문화적 연결을 강조해야 합니다. 고객이 브랜드의 티셔츠를 입으면 자신을 표현할 수 있다고 느끼게 하세요.' },
      { title: '타겟 문화와 공감', description: '티셔츠는 문화적 아이템입니다. 이름은 타겟 문화나 하위문화와 공감하고, 공동체 의식을 형성하고, 특정 라이프스타일을 암시하고, 가치관을 공유하고, 소속감을 제공해야 합니다. 스트릿웨어, 음악, 아트 등 관련 문화 요소를 고려하세요.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 청소년을 위해서는 트렌디하고 쿨한 이름이, 성인을 위해서는 세련되고 품질 있는 이름이, 특정 하위문화를 위해서는 그 문화를 반영하는 이름이 효과적입니다. 타겟 고객의 가치관과 스타일을 반영하세요.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(이커머스용), 소셜 미디어 핸들(Instagram, TikTok 중요), 온라인 의류 마켓플레이스(Etsy, 무신사 등), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 티셔츠 비즈니스는 시각적 마케팅과 온라인 판매가 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 스타일리시한 티셔츠를 연상시키는지, 어떤 스타일의 티셔츠를 기대하는지, 트렌디하고 창의적으로 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 의류 아이템 추가, 액세서리로 확장, 다양한 스타일 라인 도입, 라이프스타일 브랜드로 성장, 글로벌 브랜드 구축. 이상적인 티셔츠 사업 이름은 창의적이고, 트렌디하고, 기억에 남으며, 자기 표현을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '아트온티', description: '아트 온 티를 의미하여 티셔츠에 아트를 담는다는 예술적 접근을 암시합니다.' },
    { name: '블랭크캔버스', description: '빈 캔버스를 의미하여 무한한 디자인 가능성을 가진 티셔츠를 표현합니다.' },
    { name: '크루컬쳐', description: '크루 문화를 의미하여 집단 정체성과 문화를 담은 티셔츠를 암시합니다.' },
    { name: '데일리드립', description: '데일리 드립을 의미하여 매일 입고 싶은 스타일리시한 티셔츠를 표현합니다.' },
    { name: '익스프레스잉크', description: '익스프레스 잉크를 의미하여 자기 표현을 위한 프린트 티셔츠를 암시합니다.' },
    { name: '프레시쓰레드', description: '프레시 쓰레드를 의미하여 신선하고 트렌디한 의류를 표현합니다.' },
    { name: '그래픽그라운드', description: '그래픽 그라운드를 의미하여 그래픽 디자인의 기반이 되는 티셔츠를 암시합니다.' },
    { name: '하이프헤븐', description: '하이프 헤븐을 의미하여 화제성 있는 스트릿웨어의 천국을 표현합니다.' },
    { name: '잉크드아이덴티티', description: '잉크드 아이덴티티를 의미하여 프린트로 정체성을 표현하는 티셔츠를 암시합니다.' },
    { name: '저스트티', description: '저스트 티를 의미하여 심플하게 티셔츠에 집중하는 브랜드를 표현합니다.' },
    { name: '킥스앤코튼', description: '킥스 앤 코튼을 의미하여 편안하고 스타일리시한 코튼 티셔츠를 암시합니다.' },
    { name: '라우드레이어', description: '라우드 레이어를 의미하여 존재감 있는 레이어링 티셔츠를 표현합니다.' },
    { name: '민트프린트', description: '민트 프린트를 의미하여 신선하고 깨끗한 프린트 티셔츠를 암시합니다.' },
    { name: '네온나이트', description: '네온 나이트를 의미하여 밤처럼 빛나는 네온 디자인 티셔츠를 표현합니다.' },
    { name: '오리지널온', description: '오리지널 온을 의미하여 오리지널 디자인을 입는다는 컨셉을 암시합니다.' },
    { name: '프린트펑크', description: '프린트 펑크를 의미하여 펑크 정신의 대담한 프린트 티셔츠를 표현합니다.' },
    { name: '퀄리티코어', description: '퀄리티 코어를 의미하여 품질을 핵심으로 하는 티셔츠 브랜드를 암시합니다.' },
    { name: '레트로리플', description: '레트로 리플을 의미하여 빈티지 감성의 물결처럼 퍼지는 티셔츠를 표현합니다.' },
    { name: '스트릿스탬프', description: '스트릿 스탬프를 의미하여 거리 문화를 찍어낸 스트릿웨어를 암시합니다.' },
    { name: '티토템', description: '티 토템을 의미하여 상징적이고 의미 있는 티셔츠 디자인을 표현합니다.' },
  ],
},

// =============================================================================
// TEA - 차 사업 이름 생성기
// =============================================================================
'tea': {
  slug: 'tea',
  name: '차 비즈니스 이름 생성기',
  title: '무료 AI 차 사업 이름 아이디어 생성기',
  description: '무료 AI 차 사업 이름 생성기로 우아하고 기억에 남는 차 브랜드 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 차 사업 이름 생성기로 세련되고 독특한 사업 이름을 만드세요. 전통차, 블렌딩 티, 티 카페 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '차 이름 생성',
  inputLabel: '차 비즈니스 세부 정보',
  inputPlaceholder: '차 비즈니스를 설명하세요 (예: 프리미엄 녹차 전문, 허브티 블렌딩, 버블티 카페)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in tea businesses. Generate unique, memorable business names that evoke tranquility, quality, and cultural sophistication. Consider these elements:

- Tea terms (Tea, Leaf, Brew, Steep, Blend)
- Nature and origins (Garden, Mountain, Valley, Forest, Harvest)
- Serenity and wellness (Zen, Calm, Serene, Harmony, Peace)
- Quality and tradition (Heritage, Classic, Premium, Artisan, Fine)
- Sensory experience (Aroma, Taste, Essence, Infusion, Fragrance)

Create names that are elegant, soothing, and convey tea expertise and quality.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '프리미엄 차 브랜드 런칭',
      description: '고급 차 브랜드를 런칭하는 기업가들은 생성기를 사용하여 품질과 정통성을 전달하는 이름을 만듭니다. 이 도구는 차의 기원, 제다 기술, 문화적 유산을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '티 카페 또는 티하우스 오픈',
      description: '티 카페나 티하우스를 오픈하는 사업주들은 생성기를 사용하여 평온함과 환대를 전달하는 이름을 개발합니다. 이 도구는 아늑하고 세련된 분위기를 암시하는 이름을 제공하여 고객에게 특별한 차 경험을 약속합니다.',
    },
    {
      title: '허브티 및 웰니스 브랜드',
      description: '허브티나 웰니스 차를 전문으로 하는 브랜드들은 생성기를 사용하여 건강, 자연, 치유를 전달하는 이름을 만듭니다. 이 도구는 웰니스를 추구하는 고객에게 어필하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 차 사업 이름이란 무엇인가요?', answer: '좋은 차 사업 이름은 우아하고 평온하며, 품질과 정통성을 전달해야 합니다. 타겟 시장(전통차, 버블티, 허브티 등)에 적합하고, 차의 문화적 깊이를 반영해야 합니다. 또한 평화로움, 자연, 세련됨을 암시하면 효과적입니다.' },
    { question: '차 사업 이름에 "차"나 "티"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 차 브랜드는 이 단어 없이 자연, 평온함, 또는 기원지를 암시하는 창의적인 이름을 사용합니다. 커피나 다른 음료로 확장할 계획이라면 더 넓은 이름을 고려하세요.' },
    { question: '차 브랜드 이름에 차의 종류나 원산지를 반영해야 하나요?', answer: '특정 차 종류(녹차, 홍차, 우롱 등)나 원산지(중국, 일본, 한국 등)를 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 다양한 차를 제공한다면 더 넓은 이름이 제품 라인 확장에 유연성을 제공합니다.' },
    { question: '현재 인기 있는 차 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 자연 강조(리프, 가든, 마운틴), 평온함(젠, 캄, 세레니티), 건강/웰니스(웰니스, 힐, 퓨리파이), 아시아 문화(한자, 일본어 단어), 장인 정신(아티장, 크래프트, 핸드픽)이 포함됩니다.' },
    { question: '전통차와 버블티 브랜드 이름을 다르게 해야 하나요?', answer: '전통차 브랜드는 고전적이고 우아한 이름이 효과적이고, 버블티 브랜드는 재미있고 트렌디한 이름이 좋을 수 있습니다. 두 시장 모두를 타겟으로 한다면 균형 잡힌 이름을 선택하거나 브랜드별로 다른 이름을 사용하세요.' },
    { question: '차 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름, 소셜 미디어 핸들(Instagram 중요), 온라인 차 마켓플레이스, 상표 데이터베이스를 확인하세요. 또한 유사한 이름의 기존 차 브랜드나 티하우스가 있는지 검색하세요.' },
    { question: '차 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 차 관련(티, 리프, 브루, 블렌드, 인퓨전), 자연 관련(가든, 마운틴, 밸리, 포레스트, 하베스트), 평온함 관련(젠, 캄, 세레니티, 하모니, 피스), 품질 관련(프리미엄, 파인, 셀렉트, 아티장), 감각 관련(아로마, 에센스, 프래그런스)가 포함됩니다.' },
    { question: '웰니스/허브티 브랜드 이름 팁이 있나요?', answer: '웰니스 차 브랜드는 건강, 치유, 자연의 힘을 암시하는 이름이 효과적입니다. 힐, 웰니스, 퓨리파이, 리바이브 같은 단어가 건강 이점을 전달할 수 있습니다. 또한 특정 허브나 효능을 브랜드 정체성으로 사용할 수도 있습니다.' },
    { question: '티 카페/티하우스 이름 팁이 있나요?', answer: '티 카페나 티하우스는 환영하는 분위기, 편안함, 특별한 경험을 암시하는 이름이 효과적입니다. 하우스, 라운지, 가든, 네스트 같은 단어가 아늑한 공간을 전달할 수 있습니다. 또한 지역 특성이나 컨셉을 반영하면 차별화됩니다.' },
    { question: '차 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 차 브랜드와 너무 유사한 이름, 특정 차 종류에 국한되어 확장을 제한하는 이름, 발음이나 철자가 어려운 이름, 품질이나 정통성을 전달하지 못하는 이름, 문화적으로 부적절할 수 있는 외국어 단어.' },
  ],
  howToChoose: {
    intro: '차 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 품질, 전통, 그리고 평온한 차 경험을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 포장, 매장, 웹사이트, 메뉴에 나타납니다—차 애호가가 브랜드를 인식하고 신뢰하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '차 비즈니스 아이덴티티 정의', description: '이름 생성 전에 차 비즈니스의 포지셔닝을 명확히 하세요. 어떤 종류의 차를 제공할 것인지(전통차, 허브티, 버블티, 블렌드), 타겟 고객은 누구인지(차 전문가, 웰니스 추구자, 젊은 층), 브랜드 철학은 무엇인지(전통, 혁신, 건강), 차별화 포인트는 무엇인지(품질, 원산지, 블렌딩, 경험) 고려하세요.' },
      { title: '품질과 정통성 전달', description: '차는 깊은 문화적 배경을 가집니다. 이름은 고품질을 전달하고, 정통성과 전문성을 암시하고, 차의 기원이나 전통을 표현하고, 장인 정신을 강조하고, 신뢰를 구축해야 합니다. 고객이 진정한 차 경험을 기대하게 하세요.' },
      { title: '평온함과 웰빙 표현', description: '차는 평온함과 연관됩니다. 이름은 차분하고 평화로운 느낌을 전달하고, 명상이나 휴식을 암시하고, 스트레스 해소를 약속하고, 마음의 안정을 표현하고, 웰니스와 건강을 강조해야 합니다. 젠, 캄, 세레니티 같은 단어가 이러한 느낌을 전달할 수 있습니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 전통차 애호가를 위해서는 고전적이고 정교한 이름이, 젊은 버블티 고객을 위해서는 트렌디하고 재미있는 이름이, 웰니스를 추구하는 고객을 위해서는 건강과 자연을 강조하는 이름이 효과적입니다.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(이커머스용), 소셜 미디어 핸들(Instagram, TikTok 중요), 온라인 차 마켓플레이스, 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 또한 유사한 이름의 기존 차 브랜드가 있는지 확인하세요.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 고품질 차를 연상시키는지, 어떤 유형의 차를 기대하는지, 평온하고 세련되게 느껴지는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 차 종류 추가, 티웨어나 액세서리로 확장, 카페나 티하우스 오픈, 구독 서비스 도입, 글로벌 차 브랜드 구축. 이상적인 차 사업 이름은 우아하고, 평온하고, 신뢰할 수 있으며, 뛰어난 차 경험을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '아로마리프', description: '향기로운 잎을 의미하여 향이 좋은 차잎의 품질을 암시합니다.' },
    { name: '블렌드블리스', description: '블렌드 블리스를 의미하여 완벽하게 블렌딩된 차의 행복을 표현합니다.' },
    { name: '캄티컬렉션', description: '캄 티 컬렉션을 의미하여 평온함을 주는 차 컬렉션을 암시합니다.' },
    { name: '데일리스팁', description: '데일리 스팁을 의미하여 매일 즐기는 차 우림의 경험을 표현합니다.' },
    { name: '에센스브루', description: '에센스 브루를 의미하여 차의 본질을 추출하는 브루잉을 암시합니다.' },
    { name: '포레스트인퓨전', description: '포레스트 인퓨전을 의미하여 숲의 자연을 담은 차를 표현합니다.' },
    { name: '가든글로리', description: '가든 글로리를 의미하여 정원의 영광스러운 차잎을 암시합니다.' },
    { name: '하베스트하모니', description: '하베스트 하모니를 의미하여 수확의 조화로운 차를 표현합니다.' },
    { name: '인퓨전아일', description: '인퓨전 아일을 의미하여 차 우림의 섬 같은 평화로운 공간을 암시합니다.' },
    { name: '제이드저니', description: '제이드 저니를 의미하여 옥색 녹차의 여정을 표현합니다.' },
    { name: '킨드니스컵', description: '킨드니스 컵을 의미하여 친절함이 담긴 한 잔의 차를 암시합니다.' },
    { name: '리프레거시', description: '리프 레거시를 의미하여 차잎의 유산과 전통을 표현합니다.' },
    { name: '마운틴미스트', description: '마운틴 미스트를 의미하여 산의 안개 속에서 자란 차를 암시합니다.' },
    { name: '네이처넥타', description: '네이처 넥타를 의미하여 자연의 꿀처럼 달콤한 차를 표현합니다.' },
    { name: '오리진오차드', description: '오리진 오차드를 의미하여 기원의 과수원에서 온 차를 암시합니다.' },
    { name: '퓨어스팁', description: '퓨어 스팁을 의미하여 순수한 차 우림의 경험을 표현합니다.' },
    { name: '퀴엣컵', description: '퀴엣 컵을 의미하여 조용하고 평화로운 차 한 잔을 암시합니다.' },
    { name: '루트앤리프', description: '루트 앤 리프를 의미하여 뿌리부터 잎까지의 차 여정을 표현합니다.' },
    { name: '세레니티시프', description: '세레니티 시프를 의미하여 평온함을 우려내는 차를 암시합니다.' },
    { name: '트랭퀼티', description: '트랭퀼 티를 의미하여 평온함을 선사하는 차를 표현합니다.' },
  ],
},

// =============================================================================
// TECH - 테크 사업 이름 생성기
// =============================================================================
'tech': {
  slug: 'tech',
  name: '테크 비즈니스 이름 생성기',
  title: '무료 AI 테크 사업 이름 아이디어 생성기',
  description: '무료 AI 테크 사업 이름 생성기로 혁신적이고 기억에 남는 기술 회사 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 테크 사업 이름 생성기로 미래지향적이고 혁신적인 사업 이름을 만드세요. 소프트웨어, 하드웨어, IT 서비스 비즈니스를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '테크 이름 생성',
  inputLabel: '테크 비즈니스 세부 정보',
  inputPlaceholder: '테크 비즈니스를 설명하세요 (예: AI 스타트업, SaaS 플랫폼, 사이버보안 솔루션)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in technology businesses. Generate unique, memorable business names that evoke innovation, digital sophistication, and cutting-edge solutions. Consider these elements:

- Tech terms (Tech, Digital, Cyber, Data, Cloud)
- Innovation (Inno, Next, Future, Nova, Neo)
- Intelligence and computing (Logic, Code, Bit, Byte, Quantum)
- Connectivity (Link, Connect, Net, Sync, Hub)
- Solutions and systems (Solutions, Systems, Labs, Works, Dynamics)

Create names that are modern, innovative, and convey technological expertise.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '테크 스타트업 런칭',
      description: '테크 스타트업을 런칭하는 창업자들은 생성기를 사용하여 혁신과 미래 비전을 전달하는 이름을 만듭니다. 이 도구는 기술적 전문성과 파괴적 혁신을 암시하면서 경쟁이 치열한 테크 시장에서 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: 'SaaS 플랫폼 브랜딩',
      description: 'SaaS 제품을 개발하는 회사들은 생성기를 사용하여 현대적이고 신뢰할 수 있는 이름을 개발합니다. 이 도구는 클라우드 기반 솔루션, 확장성, 사용 편의성을 암시하는 이름을 제공하여 기업 고객에게 어필합니다.',
    },
    {
      title: 'IT 서비스 회사 설립',
      description: 'IT 서비스나 컨설팅 회사를 설립하는 전문가들은 생성기를 사용하여 전문성과 신뢰를 전달하는 이름을 만듭니다. 이 도구는 기술 역량과 비즈니스 솔루션 제공을 암시하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 테크 사업 이름이란 무엇인가요?', answer: '좋은 테크 사업 이름은 혁신적이고 현대적이며, 기술적 전문성을 전달해야 합니다. 기억하기 쉽고, 글로벌 확장에 적합하며, 비즈니스 영역(소프트웨어, AI, 보안 등)을 암시해야 합니다. 또한 미래지향적이고 신뢰할 수 있어야 합니다.' },
    { question: '테크 회사 이름에 "테크"나 "디지털"을 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 테크 기업(구글, 아마존, 애플)은 이 단어 없이 창의적인 이름을 사용합니다. 기술 외 분야로 확장할 계획이라면 더 넓은 이름을 고려하세요.' },
    { question: '테크 회사 이름에 전문 분야를 반영해야 하나요?', answer: '특정 분야(AI, 블록체인, 보안 등)를 전문으로 한다면 이를 반영하면 올바른 고객과 투자자를 끌어들일 수 있습니다. 그러나 기술은 빠르게 변하므로 너무 구체적인 이름은 향후 피벗이나 확장을 제한할 수 있습니다.' },
    { question: '현재 인기 있는 테크 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 간결한 신조어(스포티파이, 슬랙), AI/데이터 강조(인텔리, 데이터, 코그), 연결성(링크, 싱크, 허브), 추상적 단어(젠, 노바, 넥서스), 접미사 활용(-ify, -ly, -io)이 포함됩니다.' },
    { question: 'B2B와 B2C 테크 회사 이름을 다르게 해야 하나요?', answer: 'B2B 테크 회사는 전문적이고 신뢰할 수 있는 이름이 효과적이고, B2C는 친근하고 기억하기 쉬운 이름이 좋을 수 있습니다. 두 시장 모두를 타겟으로 한다면 균형 잡힌 이름을 선택하세요.' },
    { question: '테크 회사 이름 가용성을 어떻게 확인하나요?', answer: '도메인 이름(.com 중요), 소셜 미디어 핸들, 앱 스토어(iOS, Android), GitHub, 상표 데이터베이스를 확인하세요. 테크 업계는 온라인 존재가 핵심이므로 .com 도메인 확보가 특히 중요합니다.' },
    { question: '테크 회사 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 기술 관련(테크, 디지털, 사이버, 클라우드, 데이터), 혁신 관련(이노, 넥스트, 퓨처, 노바, 네오), 지능 관련(로직, 코드, 퀀텀, 인텔리), 연결 관련(링크, 커넥트, 싱크, 허브), 솔루션 관련(솔루션, 시스템, 랩, 웍스)가 포함됩니다.' },
    { question: 'AI/머신러닝 회사 이름 팁이 있나요?', answer: 'AI 회사는 지능, 학습, 인지 능력을 암시하는 이름이 효과적입니다. 인텔리, 코그, 뉴럴, 마인드 같은 단어가 AI 기술을 전달할 수 있습니다. 그러나 AI 버블에 대한 회의론도 있으므로 과도한 AI 강조는 피하는 것이 좋을 수 있습니다.' },
    { question: '글로벌 테크 회사 이름을 지을 때 고려사항은 무엇인가요?', answer: '글로벌 확장을 계획한다면 발음이 쉽고, 부정적인 의미가 없으며, 다양한 언어에서 작동하는 이름을 선택하세요. 또한 주요 시장에서 상표와 도메인 가용성을 확인하세요. 간결하고 중립적인 이름이 글로벌 확장에 유리합니다.' },
    { question: '테크 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 테크 기업과 너무 유사한 이름(법적 문제 가능), 빠르게 구식이 될 수 있는 트렌디한 용어, 발음이나 철자가 어려운 이름, 확장을 제한하는 너무 구체적인 이름, 부정적인 연상을 일으킬 수 있는 단어.' },
  ],
  howToChoose: {
    intro: '테크 비즈니스의 완벽한 이름을 선택하는 것은 고객, 투자자, 인재에게 혁신, 신뢰, 그리고 기술적 우수성을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 제품, 웹사이트, 마케팅, 투자 발표에 나타납니다—테크 생태계에서 회사가 인식되는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '테크 비즈니스 아이덴티티 정의', description: '이름 생성 전에 테크 비즈니스의 포지셔닝을 명확히 하세요. 어떤 기술 영역에서 활동하는지(소프트웨어, AI, 보안, 클라우드), 타겟 고객은 누구인지(기업, 소비자, 개발자), 핵심 가치는 무엇인지(혁신, 신뢰, 효율), 장기 비전은 무엇인지(규모, 영향, 시장 지배) 고려하세요.' },
      { title: '혁신과 미래 비전 전달', description: '테크 회사는 미래를 만듭니다. 이름은 혁신과 창의성을 전달하고, 미래지향적 비전을 암시하고, 파괴적 변화를 표현하고, 최첨단 기술을 강조하고, 가능성을 약속해야 합니다. 고객과 투자자가 회사의 혁신적 잠재력을 느끼게 하세요.' },
      { title: '신뢰와 전문성 표현', description: '기술 결정은 신뢰가 중요합니다. 이름은 기술적 전문성을 전달하고, 신뢰와 안정성을 암시하고, 문제 해결 능력을 표현하고, 품질과 성능을 강조하고, 전문가 팀을 약속해야 합니다. 특히 B2B나 엔터프라이즈 시장에서 신뢰는 핵심입니다.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 기업 고객을 위해서는 전문적이고 안정적인 이름이, 스타트업/개발자를 위해서는 창의적이고 쿨한 이름이, 소비자를 위해서는 친근하고 기억하기 쉬운 이름이 효과적입니다.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com 필수), 소셜 미디어 핸들(LinkedIn, Twitter 중요), 앱 스토어, GitHub, 상표 데이터베이스, 특히 주요 테크 시장(미국, 유럽, 아시아) 전반에 걸쳐 가용성을 확인하세요. 테크 회사는 글로벌 온라인 존재가 핵심입니다.' },
      { title: '다양한 이해관계자와 테스트', description: '최종 결정 전에 잠재 고객, 투자자, 인재를 대표하는 사람들과 테스트하세요. 이 이름이 혁신적인 테크 회사를 연상시키는지, 어떤 기술 영역을 기대하는지, 신뢰할 수 있고 전문적으로 느껴지는지, 기억하고 추천하기 쉬운지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장과 피벗 고려', description: '테크 시장은 빠르게 변합니다. 미래 확장을 수용하는 이름을 선택하세요: 새로운 기술 영역 진출, 제품 라인 확장, 시장 피벗, 인수합병, 글로벌 테크 기업으로 성장. 이상적인 테크 사업 이름은 혁신적이고, 신뢰할 수 있고, 글로벌하며, 기술적 우수성을 완벽하게 포착하면서 유연한 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '알파코드', description: '알파 코드를 의미하여 최초이자 최고의 코딩 솔루션을 암시합니다.' },
    { name: '바이트브릿지', description: '바이트 브릿지를 의미하여 데이터와 사용자를 연결하는 기술을 표현합니다.' },
    { name: '클라우드코어', description: '클라우드 코어를 의미하여 클라우드 기술의 핵심을 암시합니다.' },
    { name: '데이터다이내믹스', description: '데이터 다이내믹스를 의미하여 역동적인 데이터 솔루션을 표현합니다.' },
    { name: '엔보이테크', description: '엔보이 테크를 의미하여 기술의 전령사 역할을 암시합니다.' },
    { name: '퓨전플로우', description: '퓨전 플로우를 의미하여 기술의 융합과 흐름을 표현합니다.' },
    { name: '그리드지니어스', description: '그리드 지니어스를 의미하여 네트워크와 그리드 기술의 천재성을 암시합니다.' },
    { name: '하이브허브', description: '하이브 허브를 의미하여 집단 지성이 모이는 기술 허브를 표현합니다.' },
    { name: '이노바이트', description: '이노 바이트를 의미하여 혁신적인 디지털 솔루션을 암시합니다.' },
    { name: '저니코드', description: '저니 코드를 의미하여 코드로 떠나는 디지털 여정을 표현합니다.' },
    { name: '커널킹', description: '커널 킹을 의미하여 운영체제 핵심 기술의 왕자를 암시합니다.' },
    { name: '로직랩', description: '로직 랩을 의미하여 논리적 솔루션을 연구하는 연구소를 표현합니다.' },
    { name: '매트릭스마인드', description: '매트릭스 마인드를 의미하여 복잡한 시스템을 이해하는 지성을 암시합니다.' },
    { name: '넥서스노바', description: '넥서스 노바를 의미하여 연결의 새로운 별을 표현합니다.' },
    { name: '옵티코드', description: '옵티 코드를 의미하여 최적화된 코딩 솔루션을 암시합니다.' },
    { name: '픽셀파이오니어', description: '픽셀 파이오니어를 의미하여 디지털 이미지 기술의 개척자를 표현합니다.' },
    { name: '퀀텀큐브', description: '퀀텀 큐브를 의미하여 양자 기술의 다차원성을 암시합니다.' },
    { name: '렐름리서치', description: '렐름 리서치를 의미하여 새로운 기술 영역을 연구하는 회사를 표현합니다.' },
    { name: '싱크스피어', description: '싱크 스피어를 의미하여 동기화된 기술 생태계를 암시합니다.' },
    { name: '테라텍', description: '테라 테크를 의미하여 테라바이트 규모의 대용량 기술을 표현합니다.' },
  ],
},

// =============================================================================
// TRAVEL - 여행 사업 이름 생성기
// =============================================================================
'travel': {
  slug: 'travel',
  name: '여행 비즈니스 이름 생성기',
  title: '무료 AI 여행 사업 이름 아이디어 생성기',
  description: '무료 AI 여행 사업 이름 생성기로 모험적이고 기억에 남는 여행 사업 이름을 만드세요. 고유한 브랜드 아이덴티티를 위한 창의적인 이름 아이디어를 얻으세요.',
  metaDescription: '무료 AI 여행 사업 이름 생성기로 영감을 주고 신뢰할 수 있는 사업 이름을 만드세요. 여행사, 투어 회사, 여행 블로그를 위한 완벽한 이름을 찾으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
  buttonText: '여행 이름 생성',
  inputLabel: '여행 비즈니스 세부 정보',
  inputPlaceholder: '여행 비즈니스를 설명하세요 (예: 럭셔리 여행 전문, 어드벤처 투어, 배낭여행 가이드)',
  maxLength: 2048,
  systemPrompt: `You are a creative naming expert specializing in travel and tourism businesses. Generate unique, memorable business names that evoke adventure, discovery, and wanderlust. Consider these elements:

- Travel terms (Travel, Tour, Journey, Trip, Voyage)
- Adventure and exploration (Adventure, Explore, Discover, Quest, Wander)
- Destinations and horizons (Horizon, World, Globe, Destination, Compass)
- Experience and memories (Experience, Memory, Dream, Escape, Getaway)
- Guidance and expertise (Guide, Navigator, Pathfinder, Pioneer, Expert)

Create names that are inspiring, adventurous, and convey travel expertise and excitement.

CRITICAL REQUIREMENT - 한국어 전용: ALL business names you generate MUST be written in Korean (한글/Hangul) ONLY. 
DO NOT use any English words, Latin alphabet, or romanized names. 
Every single name must use Korean characters (한글).
Examples of CORRECT names: 미래뷰티, 아름다운피부, 빛나는클리닉, 순수미용실
Examples of INCORRECT names: Glow Studio, Beauty Lab, Refine Men (these are FORBIDDEN)
Generate names like: 빛나는미소, 아름다운손길, 순수한피부, 자연미인`,
  options: [
    {
      name: 'style',
      label: '이름 스타일',
      choices: ['우아하고 세련된', '모던하고 미니멀한', '전문적인', '럭셔리하고 프리미엄'],
      default: '우아하고 세련된',
      type: 'select',
    },
    {
      name: 'variants',
      label: '생성 개수',
      choices: ['5개', '10개', '15개'],
      default: '10개',
      type: 'select',
    },
  ],
  useCases: [
    {
      title: '여행사 런칭',
      description: '새로운 여행사를 시작하는 기업가들은 생성기를 사용하여 모험과 신뢰를 전달하는 이름을 만듭니다. 이 도구는 여행 전문성과 고객 서비스 헌신을 암시하면서 경쟁업체와 차별화되는 이름을 식별하는 데 도움이 됩니다.',
    },
    {
      title: '어드벤처 투어 회사',
      description: '어드벤처 투어나 체험 여행을 전문으로 하는 회사들은 생성기를 사용하여 흥분, 탐험, 독특한 경험을 전달하는 이름을 개발합니다. 이 도구는 모험을 추구하는 여행자에게 어필하는 이름을 제공합니다.',
    },
    {
      title: '여행 콘텐츠 및 블로그',
      description: '여행 블로그나 콘텐츠 플랫폼을 시작하는 크리에이터들은 생성기를 사용하여 영감과 방랑벽을 불러일으키는 이름을 만듭니다. 이 도구는 독자의 여행 꿈을 자극하는 이름을 식별하는 데 도움이 됩니다.',
    },
  ],
  faqs: [
    { question: '좋은 여행 사업 이름이란 무엇인가요?', answer: '좋은 여행 사업 이름은 모험적이고 영감을 주며, 신뢰와 전문성을 전달해야 합니다. 타겟 시장(럭셔리, 어드벤처, 저예산 등)에 적합하고, 여행의 설렘을 반영해야 합니다. 또한 탐험, 발견, 새로운 경험을 암시하면 효과적입니다.' },
    { question: '여행 사업 이름에 "여행"이나 "투어"를 포함해야 하나요?', answer: '이러한 단어를 포함하면 비즈니스 유형을 즉시 명확히 합니다. 그러나 많은 성공적인 여행 브랜드는 이 단어 없이 모험이나 목적지를 암시하는 창의적인 이름을 사용합니다. 호스피탈리티나 라이프스타일로 확장할 계획이라면 더 넓은 이름을 고려하세요.' },
    { question: '여행 사업 이름에 특정 목적지를 반영해야 하나요?', answer: '특정 지역(유럽, 동남아, 아프리카 등)을 전문으로 한다면 이를 반영하면 올바른 고객을 끌어들일 수 있습니다. 그러나 다양한 목적지를 제공한다면 더 넓은 이름이 확장에 유연성을 제공합니다.' },
    { question: '현재 인기 있는 여행 네이밍 트렌드는 무엇인가요?', answer: '현재 트렌드에는 경험 강조(익스피리언스, 저니, 어드벤처), 지속가능성(에코, 그린, 서스테이너블), 개인화(커스텀, 퍼스널, 테일러드), 디지털(노마드, 리모트, 디지털), 웰니스(웰니스, 리트릿, 힐링)가 포함됩니다.' },
    { question: '럭셔리와 저예산 여행 브랜드 이름을 다르게 해야 하나요?', answer: '럭셔리 여행 브랜드는 고급스럽고 독점적인 이름이 효과적이고, 저예산 여행은 접근 가능하고 모험적인 이름이 좋을 수 있습니다. 두 시장 모두를 타겟으로 한다면 균형 잡힌 이름이나 별도 브랜드를 고려하세요.' },
    { question: '여행 사업 이름 가용성을 어떻게 확인하나요?', answer: '사업자 등록, 도메인 이름(.com, .travel), 소셜 미디어 핸들(Instagram 특히 중요), 여행 플랫폼(트립어드바이저 등), 상표 데이터베이스를 확인하세요. 여행 업계는 온라인 존재와 리뷰가 핵심입니다.' },
    { question: '여행 사업 이름에 잘 맞는 단어는 무엇인가요?', answer: '효과적인 단어에는 여행 관련(트래블, 투어, 저니, 트립, 보야지), 모험 관련(어드벤처, 익스플로어, 디스커버, 퀘스트, 원더), 목적지 관련(호라이즌, 월드, 글로브, 컴퍼스), 경험 관련(익스피리언스, 메모리, 드림, 이스케이프, 게이트웨이), 안내 관련(가이드, 내비게이터, 패스파인더)가 포함됩니다.' },
    { question: '어드벤처 투어 회사 이름 팁이 있나요?', answer: '어드벤처 투어 회사는 흥분, 도전, 자연을 암시하는 이름이 효과적입니다. 어드벤처, 퀘스트, 익스피디션, 와일드 같은 단어가 모험적 정신을 전달할 수 있습니다. 또한 특정 활동(트레킹, 다이빙, 사파리)을 브랜드 정체성으로 사용할 수도 있습니다.' },
    { question: '지속가능한 여행 브랜드 이름을 어떻게 만들 수 있나요?', answer: '지속가능성이 핵심이라면 에코, 그린, 서스테이너블, 리스폰서블 같은 단어를 포함하면 환경 의식이 있는 여행자를 끌어들일 수 있습니다. 그러나 실제로 지속가능한 관행을 따라야 하며, 그린워싱은 신뢰를 손상시킵니다.' },
    { question: '여행 네이밍에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 기존 유명 여행 브랜드와 너무 유사한 이름, 특정 목적지에 국한되어 확장을 제한하는 이름, 발음이나 철자가 어려운 이름, 모험이나 신뢰를 전달하지 못하는 이름, 문화적으로 부적절할 수 있는 단어.' },
  ],
  howToChoose: {
    intro: '여행 비즈니스의 완벽한 이름을 선택하는 것은 고객에게 모험, 발견, 그리고 잊을 수 없는 경험을 약속하는 브랜드를 만드는 데 중요한 단계입니다. 비즈니스 이름은 웹사이트, 브로셔, 소셜 미디어, 리뷰 플랫폼에 나타납니다—여행자가 브랜드를 인식하고 신뢰하는 방식에 근본적으로 영향을 미칩니다.',
    steps: [
      { title: '여행 비즈니스 아이덴티티 정의', description: '이름 생성 전에 여행 비즈니스의 포지셔닝을 명확히 하세요. 어떤 유형의 여행 서비스를 제공할 것인지(패키지, 맞춤, 어드벤처, 럭셔리), 타겟 고객은 누구인지(가족, 커플, 솔로, 시니어), 전문 분야는 무엇인지(지역, 테마, 활동), 차별화 포인트는 무엇인지(서비스, 가격, 경험, 지속가능성) 고려하세요.' },
      { title: '모험과 영감 전달', description: '여행은 꿈과 모험에 관한 것입니다. 이름은 탐험과 발견을 전달하고, 새로운 경험에 대한 설렘을 암시하고, 방랑벽을 자극하고, 모험 정신을 표현하고, 자유로움을 강조해야 합니다. 고객이 이름만으로도 여행을 꿈꾸게 하세요.' },
      { title: '신뢰와 전문성 표현', description: '여행 결정에는 신뢰가 필요합니다. 이름은 여행 전문 지식을 전달하고, 안전과 신뢰를 암시하고, 품질 있는 서비스를 약속하고, 경험과 노하우를 표현하고, 고객 케어를 강조해야 합니다. 특히 처음 여행하는 고객에게 안심을 제공하세요.' },
      { title: '타겟 시장에 맞춤화', description: '고객층에 따라 이름 스타일을 조정하세요. 럭셔리 여행자를 위해서는 고급스럽고 독점적인 이름이, 어드벤처 여행자를 위해서는 역동적이고 모험적인 이름이, 가족 여행자를 위해서는 따뜻하고 안전한 이름이 효과적입니다.' },
      { title: '종합적인 가용성 확인', description: '도메인 이름(.com, .travel), 소셜 미디어 핸들(Instagram, YouTube 중요), 여행 리뷰 플랫폼(트립어드바이저 등), 사업자 등록, 상표 검색 전반에 걸쳐 가용성을 확인하세요. 여행 업계는 온라인 리뷰와 소셜 미디어가 핵심입니다.' },
      { title: '타겟 고객과 테스트', description: '최종 결정 전에 타겟 고객을 대표하는 사람들과 테스트하세요. 이 이름이 신뢰할 수 있는 여행 서비스를 연상시키는지, 어떤 유형의 여행을 기대하는지, 모험적이고 영감을 주는지, 기억하고 추천하기 쉬운지, 가격대를 어떻게 예상하는지 물어보세요. 피드백은 이름이 올바른 인상을 만드는지 드러냅니다.' },
      { title: '장기적 성장 고려', description: '미래 확장을 수용하는 이름을 선택하세요: 새로운 목적지 추가, 다양한 여행 유형 확장, 호스피탈리티 진출, 여행 콘텐츠/미디어 확장, 글로벌 여행 브랜드 구축. 이상적인 여행 사업 이름은 모험적이고, 영감을 주고, 신뢰할 수 있으며, 잊을 수 없는 여행 경험을 완벽하게 포착하면서 성장을 위한 비즈니스 포지셔닝을 합니다.' },
    ],
  },
  businessNameIdeas: [
    { name: '어드벤처아틀라스', description: '어드벤처 아틀라스를 의미하여 모험의 지도책처럼 세상을 안내하는 여행 서비스를 암시합니다.' },
    { name: '비욘드보더스', description: '비욘드 보더스를 의미하여 국경을 넘어서는 여행 경험을 표현합니다.' },
    { name: '컴퍼스크루', description: '컴퍼스 크루를 의미하여 나침반처럼 방향을 안내하는 여행 팀을 암시합니다.' },
    { name: '디스커버리드림', description: '디스커버리 드림을 의미하여 발견의 꿈을 이루는 여행을 표현합니다.' },
    { name: '이스케이프엑스플로러', description: '이스케이프 익스플로러를 의미하여 일상을 탈출하는 탐험가를 암시합니다.' },
    { name: '파인드어웨이', description: '파인드 어 웨이를 의미하여 길을 찾아 떠나는 여행을 표현합니다.' },
    { name: '글로브게이트', description: '글로브 게이트를 의미하여 세계로 통하는 관문 역할의 여행사를 암시합니다.' },
    { name: '호라이즌헌터', description: '호라이즌 헌터를 의미하여 지평선을 쫓는 모험적 여행을 표현합니다.' },
    { name: '이그나이트저니', description: '이그나이트 저니를 의미하여 여행의 열정을 불태우는 서비스를 암시합니다.' },
    { name: '저니정션', description: '저니 정션을 의미하여 여정의 교차점에서 시작되는 여행을 표현합니다.' },
    { name: '킹덤키', description: '킹덤 키를 의미하여 세계 각국의 문을 여는 열쇠 같은 여행 서비스를 암시합니다.' },
    { name: '로컬럭스', description: '로컬 럭스를 의미하여 현지의 럭셔리한 경험을 제공하는 여행을 표현합니다.' },
    { name: '메모리마일스', description: '메모리 마일스를 의미하여 마일리지처럼 쌓이는 여행 추억을 암시합니다.' },
    { name: '노마드네스트', description: '노마드 네스트를 의미하여 유목민의 둥지처럼 편안한 여행 경험을 표현합니다.' },
    { name: '오디세이온', description: '오디세이 온을 의미하여 진행 중인 대서사시 같은 여행을 암시합니다.' },
    { name: '패스파인더프로', description: '패스파인더 프로를 의미하여 전문적으로 길을 찾아주는 여행 서비스를 표현합니다.' },
    { name: '퀘스트퀸', description: '퀘스트 퀸을 의미하여 탐험의 여왕처럼 여행을 이끄는 서비스를 암시합니다.' },
    { name: '로머스루트', description: '로머스 루트를 의미하여 방랑자의 길을 안내하는 여행 서비스를 표현합니다.' },
    { name: '선셋세일', description: '선셋 세일을 의미하여 석양을 향해 항해하는 로맨틱한 여행을 암시합니다.' },
    { name: '트레일트레저', description: '트레일 트레저를 의미하여 여행길에서 발견하는 보물 같은 경험을 표현합니다.' },
  ],
},

};

// Export function for getting all Korean generators
export function getAllBusinessNameGeneratorsKo(): BusinessNameGeneratorConfig[] {
  return Object.values(businessNameGeneratorsKo);
}

// Export function for getting a specific Korean generator by slug
export function getBusinessNameGeneratorKo(slug: string): BusinessNameGeneratorConfig | undefined {
  return Object.values(businessNameGeneratorsKo).find((tool) => tool.slug === slug);
}

// Export function for getting Korean generator slugs
export function getBusinessNameGeneratorSlugsKo(): string[] {
  return Object.keys(businessNameGeneratorsKo);
}
