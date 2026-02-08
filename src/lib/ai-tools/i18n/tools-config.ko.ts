// Korean (ko) Tool Configurations
// Auto-generated translations from English source

import { ToolConfig } from '../tools-config';

// Helper functions
export function getToolBySlugKo(slug: string): ToolConfig | undefined {
  return toolsKo[slug];
}

export function getAllToolsKo(): ToolConfig[] {
  return Object.values(toolsKo);
}

// Korean uses English slugs, so no mapping needed - just return the slug as-is
export function getEnglishSlugKo(koreanSlug: string): string {
  return koreanSlug;
}

export const toolsKo: Record<string, ToolConfig> = {
  // ==================== KOREAN TRANSLATION - BATCH 1 (Tools 1-10) ====================
  'paragraph-generator': {
    slug: 'paragraph-generator',
    name: '문단 생성기',
    title: '무료 AI 문단 생성기 | Analyze AI',
    description: '몇 초 만에 잘 구성된 문단을 생성하세요. 블로그 포스트, 에세이, 이메일 등에 완벽합니다. 회원가입 불필요.',
    metaDescription: '무료 AI 문단 생성기로 몇 초 만에 잘 구성된 문단을 생성하세요. 블로그 포스트, 에세이, 이메일 등에 완벽합니다. 회원가입 불필요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '주제...',
    inputPlaceholder: '예: 브로콜리를 먹는 것이 왜 중요한가',
    buttonText: '문단 생성',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: '형식',
        choices: ['문단', '글머리 기호'],
        default: '문단',
        type: 'radio',
      },
      {
        name: 'length',
        label: '분량',
        choices: ['1개 문단', '2개 문단', '3개 문단'],
        default: '1개 문단',
        type: 'select',
      },
      {
        name: 'tone',
        label: '문체',
        choices: ['격식체', '비격식체', '전문적', '친근한'],
        default: '격식체',
        type: 'select',
      },
      {
        name: 'variants',
        label: '생성',
        choices: ['1개 버전', '3개 버전', '5개 버전'],
        default: '1개 버전',
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      {
        title: '콘텐츠 마케팅 및 블로깅',
        description: '작가와 마케터들은 문단 생성기를 사용하여 작가의 블록을 극복하고 초안을 빠르게 작성할 수 있습니다. 블로그 포스트, 랜딩 페이지 카피, 뉴스레터 콘텐츠를 만들든, 이 도구는 주제나 프롬프트를 기반으로 일관된 문단을 생성하여 백지 상태에서 시작하지 않고 편집하고 다듬을 수 있는 견고한 기반을 제공합니다.',
      },
      {
        title: '학술 및 전문 글쓰기',
        description: '에세이를 작업하는 학생, 논문을 작성하는 연구자, 보고서를 준비하는 전문가들은 문단 생성기를 활용하여 복잡한 아이디어를 명확하게 표현할 수 있습니다. 핵심 포인트나 논제문을 입력하면 논리적으로 주장을 제시하는 구조화된 문단을 받아 긴 글쓰기 프로젝트의 추진력을 유지하는 데 도움이 됩니다.',
      },
      {
        title: '일상적인 커뮤니케이션',
        description: '사려 깊은 이메일 작성부터 자기소개서나 커버레터 작성까지, 문단 생성기는 글로 명확하게 소통해야 하는 모든 사람에게 도움이 됩니다. 영어가 모국어가 아닌 사람이나 오랜 시간 작문에 쓰지 않고도 아이디어를 더 유창하게 표현하고 싶은 사람에게 특히 유용합니다.',
      },
    ],
    faqs: [
      {
        question: '문단 생성기란 무엇인가요?',
        answer: '문단 생성기는 제공하는 주제, 프롬프트 또는 지침 세트를 기반으로 일관되고 맥락에 맞는 문단을 생성하는 AI 기반 도구입니다. 자연어 처리를 사용하여 입력을 이해하고 사람처럼 읽히는 텍스트를 생성합니다.',
      },
      {
        question: '이 문단 생성기는 무료인가요?',
        answer: '네, 저희 문단 생성기는 숨겨진 비용 없이 완전히 무료입니다. 계정을 만들거나 결제 정보를 제공하지 않고도 문단을 생성할 수 있습니다.',
      },
      {
        question: 'AI 문단 생성기는 어떻게 작동하나요?',
        answer: '이 도구는 다양한 텍스트 데이터로 훈련된 대규모 언어 모델을 사용합니다. 주제나 프롬프트를 입력하면 AI가 맥락을 분석하고 자연스러운 언어 패턴, 올바른 문법 및 논리적 구조를 따르는 문단을 생성합니다.',
      },
      {
        question: '생성된 문단을 상업적 목적으로 사용할 수 있나요?',
        answer: '네, 생성된 문단은 블로그 포스트, 마케팅 자료, 제품 설명 등 상업적 콘텐츠를 포함하여 원하는 대로 사용할 수 있습니다.',
      },
      {
        question: '도구가 생성하는 문단의 길이는 얼마나 되나요?',
        answer: '생성된 문단은 일반적으로 프롬프트의 복잡성에 따라 3-6문장 정도입니다. 지침에서 선호하는 바를 명시하여 더 길거나 짧은 출력을 요청할 수 있습니다.',
      },
      {
        question: '생성된 콘텐츠는 고유한가요?',
        answer: 'AI는 특정 프롬프트를 기반으로 매번 원본 콘텐츠를 생성합니다. 그러나 게시 전에 출력을 검토하고 편집하여 고유한 목소리를 추가하고 정확성을 확인하는 것을 권장합니다.',
      },
      {
        question: '어떤 주제에 대한 문단을 생성할 수 있나요?',
        answer: '문단 생성기는 비즈니스, 기술, 건강, 교육, 라이프스타일 등 거의 모든 주제에 대한 콘텐츠를 만들 수 있습니다. 명확하고 구체적인 프롬프트를 제공하면 출력 품질이 향상됩니다.',
      },
      {
        question: '한 번에 여러 문단을 생성할 수 있나요?',
        answer: '도구를 여러 번 실행하여 여러 문단을 생성하거나, 프롬프트에서 관련 하위 주제에 대한 여러 문단이 필요하다고 명시할 수 있습니다.',
      },
      {
        question: '생성된 콘텐츠는 SEO 친화적인가요?',
        answer: '도구는 SEO에 적합한 자연스럽고 읽기 쉬운 콘텐츠를 생성합니다. 최상의 결과를 위해 프롬프트에 타겟 키워드를 포함하면 AI가 문단에 자연스럽게 통합합니다.',
      },
      {
        question: '문단 생성 후 편집이 필요한가요?',
        answer: 'AI가 품질 좋은 초안을 생성하지만, 정확성을 보장하고 개인적인 인사이트를 추가하며 특정 청중에 맞게 톤을 조정하기 위해 출력을 검토하고 편집하는 것을 권장합니다.',
      },
    ],
  },
  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: '문단 재작성기',
    title: '무료 AI 문단 재작성기 | Analyze AI',
    description: '명확성 향상, 톤 변경 또는 원본 의미를 유지하면서 텍스트의 고유한 변형을 생성하기 위해 문단을 재작성합니다.',
    metaDescription: '무료 AI 도구로 문단을 재작성하세요. 원본 의미를 유지하면서 명확성을 향상하고 톤을 변경하거나 텍스트의 고유한 변형을 만드세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '재작성할 카피...',
    inputPlaceholder: '재작성할 문단을 여기에 붙여넣으세요',
    buttonText: '문단 재작성',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: '형식',
        choices: ['문단', '글머리 기호'],
        default: '문단',
        type: 'radio',
      },
      {
        name: 'length',
        label: '분량',
        choices: ['1개 문단', '2개 문단', '3개 문단'],
        default: '1개 문단',
        type: 'select',
      },
      {
        name: 'tone',
        label: '문체',
        choices: ['격식체', '비격식체', '전문적', '친근한'],
        default: '격식체',
        type: 'select',
      },
      {
        name: 'variants',
        label: '생성',
        choices: ['1개 버전', '3개 버전', '5개 버전'],
        default: '1개 버전',
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      {
        title: '콘텐츠 명확성 및 가독성 향상',
        description: '작가와 편집자들은 문단 재작성기를 사용하여 밀도 높거나 어색하게 표현된 텍스트를 명확하고 유창한 문장으로 변환합니다. 빠르게 초안을 작성했거나 다듬어야 할 콘텐츠를 받았든, 이 도구는 원본 메시지를 유지하면서 문장 구조와 단어 선택을 개선합니다.',
      },
      {
        title: '고유한 콘텐츠 변형 생성',
        description: '여러 플랫폼을 관리하거나 A/B 테스트를 진행하는 콘텐츠 마케터들은 동일한 핵심 메시지의 다른 버전을 생성할 수 있습니다. 재작성기는 소셜 미디어 포스트, 이메일 캠페인 또는 광고 카피를 위한 새로운 변형을 생성하여 메시지를 유지하면서 채널 간 반복을 피하는 데 도움이 됩니다.',
      },
      {
        title: '표절 방지 및 기존 콘텐츠 새로고침',
        description: '학생, 연구자, 콘텐츠 제작자들은 문단 재작성기를 사용하여 출처 정보를 자신만의 말로 표현하거나 오래된 콘텐츠를 업데이트할 수 있습니다. 이 도구는 핵심 의미와 사실을 보존하면서 원본 작업을 만들 수 있을 만큼 텍스트를 실질적으로 재구성하는 데 도움이 됩니다.',
      },
    ],
    faqs: [
      {
        question: '문단 재작성기는 무엇을 하나요?',
        answer: '문단 재작성기는 기존 텍스트를 가져와 핵심 의미는 유지하면서 다른 단어, 문장 구조 및 표현을 사용하여 재구성합니다. 명확성을 향상하고 반복을 피하거나 콘텐츠의 고유한 버전을 만드는 데 유용합니다.',
      },
      {
        question: '문단 재작성기는 무료인가요?',
        answer: '네, 이 도구는 완전히 무료로 사용할 수 있습니다. 구독, 숨겨진 수수료 또는 결제가 필요한 사용 제한이 없습니다.',
      },
      {
        question: '재작성과 패러프레이징의 차이점은 무엇인가요?',
        answer: '둘 다 텍스트를 다르게 다시 표현하는 것을 포함하지만, 재작성은 일반적으로 구조, 톤 및 스타일에 대한 더 실질적인 변경을 포함합니다. 패러프레이징은 같은 아이디어를 다른 단어로 표현하는 데 중점을 두는 반면, 재작성은 가독성을 향상하고 톤을 조정하거나 정보를 재구성할 수도 있습니다.',
      },
      {
        question: '재작성된 문단은 원본과 같은 의미를 가지나요?',
        answer: 'AI는 표현을 바꾸면서 원본 의미를 보존하도록 설계되었습니다. 그러나 특히 기술적이거나 미묘한 콘텐츠의 경우 재작성된 버전이 의도한 메시지를 정확하게 전달하는지 항상 출력을 검토하세요.',
      },
      {
        question: '재작성된 문단의 톤을 선택할 수 있나요?',
        answer: '네, 지침에서 원하는 톤을 지정할 수 있습니다—텍스트를 더 격식체로, 비격식체로, 설득력 있게 또는 단순하게 원하는지 여부에 따라. AI가 그에 맞게 출력을 조정합니다.',
      },
      {
        question: '재작성된 콘텐츠는 표절 없는 것인가요?',
        answer: '도구는 원본과 다른 새로운 표현과 구조를 생성합니다. 그러나 다른 사람의 콘텐츠를 재작성하는 경우 사용 사례에 따라 적절한 출처 표시가 여전히 필요할 수 있습니다.',
      },
      {
        question: '원본 텍스트가 얼마나 변경되나요?',
        answer: '변경 정도는 지침과 원본 텍스트의 복잡성에 따라 다릅니다. AI는 핵심 메시지가 인식 가능하게 유지되도록 하면서 일반적으로 단어 선택, 문장 구조 및 흐름을 수정합니다.',
      },
      {
        question: '영어 이외의 언어로 콘텐츠를 재작성할 수 있나요?',
        answer: '이 도구는 영어 텍스트에 최적화되어 있습니다. 다른 언어와도 작동할 수 있지만 영어 문단을 재작성할 때 결과가 가장 신뢰할 수 있습니다.',
      },
      {
        question: '한 번에 재작성할 수 있는 최대 길이는 얼마인가요?',
        answer: '도구는 표준 문단(대략 100-300단어)에서 가장 잘 작동합니다. 더 긴 콘텐츠의 경우 최적의 결과를 위해 한 번에 한 문단씩 재작성하는 것을 권장합니다.',
      },
      {
        question: '재작성된 문단을 사용하기 전에 편집해야 하나요?',
        answer: '네, 모든 AI 생성 콘텐츠를 검토하는 것을 권장합니다. 재작성된 버전이 의도한 의미를 정확하게 반영하고 브랜드 목소리에 맞으며 맥락에서 자연스럽게 읽히는지 확인하세요.',
      },
    ],
  },
  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: '메타 설명 생성기',
    title: '무료 AI 메타 설명 생성기',
    description: '클릭률을 높이는 매력적인 메타 설명을 생성합니다. 몇 초 만에 모든 웹 페이지에 최적화된 설명을 생성하세요.',
    metaDescription: '클릭률을 높이는 매력적인 메타 설명을 생성합니다. 무료 AI 도구로 몇 초 만에 모든 웹 페이지에 최적화된 설명을 생성하세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '페이지 주제 또는 제목...',
    inputPlaceholder: '예: 2024년 초보자를 위한 최고의 러닝화',
    buttonText: '메타 설명 생성',
    maxLength: 2048,
    options: [
      {
        name: 'variants',
        label: '생성',
        choices: ['1개 버전', '3개 버전', '5개 버전'],
        default: '3개 버전',
      },
      {
        name: 'tone',
        label: '톤',
        choices: ['전문적', '캐주얼', '설득력 있는'],
        default: '전문적',
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      {
        title: '웹사이트 및 블로그 SEO 최적화',
        description: '웹사이트 소유자와 SEO 전문가들은 메타 설명 생성기를 사용하여 검색 결과에 나타나는 매력적인 스니펫을 만듭니다. 잘 작성된 메타 설명은 검색자에게 페이지 콘텐츠의 명확하고 매력적인 미리보기를 제공하여 클릭률을 높이고 유기적 트래픽에 직접적인 영향을 미칩니다.',
      },
      {
        title: '콘텐츠 생산 확장',
        description: '여러 웹사이트 또는 대규모 콘텐츠 라이브러리를 관리하는 마케팅 팀과 에이전시는 일관되고 품질 좋은 메타 설명을 대규모로 생성할 수 있습니다. 수백 개의 페이지에 대한 설명을 수동으로 작성하는 시간을 절약하고 전략과 분석에 리소스를 투입할 수 있습니다.',
      },
      {
        title: '이커머스 제품 페이지',
        description: '온라인 쇼핑몰 운영자는 주요 특징과 이점을 강조하는 제품 페이지용 고유하고 설득력 있는 메타 설명을 만들 수 있습니다. 검색 결과에서 효과적인 제품 설명은 클릭 전에 쇼핑객이 무엇을 제공하는지 이해하도록 도와 더 적합한 트래픽을 리스팅으로 유도합니다.',
      },
    ],
    faqs: [
      {
        question: '메타 설명이란 무엇인가요?',
        answer: '메타 설명은 웹 페이지 콘텐츠의 간단한 요약을 제공하는 HTML 속성입니다. 검색 엔진 결과에서 페이지 제목 아래에 나타나며 사용자가 사이트를 클릭할지 여부에 영향을 미칩니다.',
      },
      {
        question: '메타 설명이 SEO에 왜 중요한가요?',
        answer: '메타 설명은 직접적인 랭킹 요소는 아니지만 클릭률에 상당한 영향을 미칩니다. 검색 의도와 일치하는 매력적인 설명은 더 많은 클릭을 유도하여 시간이 지남에 따라 간접적으로 검색 성능을 향상시킬 수 있습니다.',
      },
      {
        question: '메타 설명의 적절한 길이는 얼마인가요?',
        answer: '최적의 메타 설명은 150-160자 사이입니다. Google은 일반적으로 160자보다 긴 설명을 검색 결과에서 자르므로 도구는 이 권장 범위 내에서 설명을 생성합니다.',
      },
      {
        question: '이 메타 설명 생성기는 무료인가요?',
        answer: '네, 회원가입 없이 완전히 무료로 사용할 수 있습니다. 비용 없이 필요한 만큼 메타 설명을 생성할 수 있습니다.',
      },
      {
        question: '최상의 결과를 얻으려면 어떤 정보를 제공해야 하나요?',
        answer: '최적의 결과를 위해 페이지의 주요 주제, 타겟 키워드 및 전달하고자 하는 핵심 이점이나 가치 제안을 입력하세요. 더 많은 맥락을 제공할수록 생성된 설명이 더 관련성 있고 매력적일 것입니다.',
      },
      {
        question: '메타 설명에 키워드를 포함할 수 있나요?',
        answer: '네, 그래야 합니다. 타겟 키워드를 포함하면 설명이 검색 쿼리와 일치하는 데 도움이 됩니다. 키워드가 메타 설명에 나타나면 Google은 종종 검색 결과에서 굵게 표시하여 리스팅을 더 눈에 띄게 만듭니다.',
      },
      {
        question: '모든 페이지에 고유한 메타 설명이 있어야 하나요?',
        answer: '네, 각 페이지는 해당 페이지의 특정 콘텐츠를 정확하게 반영하는 고유한 메타 설명이 있어야 합니다. 페이지 간 중복 설명은 검색 엔진을 혼란스럽게 하고 클릭률을 낮출 수 있습니다.',
      },
      {
        question: '도구가 모든 유형의 페이지에 대한 설명을 생성할 수 있나요?',
        answer: '생성기는 블로그 포스트, 제품 페이지, 서비스 페이지, 랜딩 페이지 등 모든 페이지 유형에 작동합니다. 페이지 콘텐츠를 설명하기만 하면 AI가 적절한 설명을 생성합니다.',
      },
      {
        question: '메타 설명을 웹사이트에 어떻게 추가하나요?',
        answer: '대부분의 콘텐츠 관리 시스템(WordPress, Shopify, Wix 등)은 페이지 편집기 또는 Yoast나 Rank Math와 같은 SEO 플러그인을 통해 메타 설명을 위한 전용 필드가 있습니다. 생성된 설명을 복사하여 적절한 필드에 붙여넣으세요.',
      },
      {
        question: '생성된 메타 설명을 편집할 수 있나요?',
        answer: '물론이고, 권장합니다. AI가 강력한 초안을 생성하지만, 브랜드 목소리와 특정 메시징에 맞게 설명을 검토하고 조정하면 최상의 결과를 얻을 수 있습니다.',
      },
    ],
  },
  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: '패러프레이징 도구',
    title: '무료 AI 패러프레이징 도구',
    description: '모든 텍스트를 즉시 패러프레이징합니다. 원본 의미를 유지하면서 문장과 문단을 다시 표현합니다. 학생과 작가에게 완벽합니다.',
    metaDescription: '무료 AI 도구로 모든 텍스트를 즉시 패러프레이징하세요. 원본 의미를 유지하면서 문장과 문단을 다시 표현합니다. 학생과 작가에게 완벽합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '패러프레이징할 텍스트...',
    inputPlaceholder: '패러프레이징할 텍스트를 여기에 붙여넣으세요',
    buttonText: '패러프레이징',
    maxLength: 2048,
    options: [
      {
        name: 'mode',
        label: '모드',
        choices: ['표준', '유창성', '창의적', '격식체', '간단한'],
        default: '표준',
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      {
        title: '학술 무결성 및 연구 작성',
        description: '학생과 연구자들은 패러프레이징 도구를 사용하여 출처의 정보를 자신만의 말로 다시 표현합니다. 이는 표절을 피하는 데 중요한 기술입니다. 이 도구는 학술 논문, 기사 또는 교재의 복잡한 아이디어를 원본 의미와 정확성을 유지하면서 새로운 언어로 표현하는 데 도움이 됩니다.',
      },
      {
        title: '플랫폼 간 콘텐츠 재활용',
        description: '디지털 마케터와 콘텐츠 제작자들은 텍스트를 그대로 복제하지 않고 다른 채널에 맞게 기존 콘텐츠를 조정할 수 있습니다. 블로그 포스트 섹션을 소셜 미디어 카피로 변환하거나, 웹사이트 콘텐츠를 이메일 뉴스레터용으로 재작업하거나, 다른 청중 세그먼트에 맞는 핵심 메시지의 여러 변형을 만들 수 있습니다.',
      },
      {
        title: '복잡한 언어 단순화',
        description: '전문 용어가 많거나 기술적인 텍스트를 접근하기 쉬운 언어로 번역해야 하는 전문가들은 패러프레이징 도구의 혜택을 받습니다. 환자에게 의료 정보를 설명하든, 고객에게 법률 용어를 분해하든, 기술 문서를 사용자 친화적으로 만들든, 이 도구는 복잡한 개념을 명확하게 재구성하는 데 도움이 됩니다.',
      },
    ],
    faqs: [
      {
        question: '패러프레이징이란 무엇인가요?',
        answer: '패러프레이징은 원본 의미를 보존하면서 다른 단어와 문장 구조를 사용하여 텍스트를 다시 표현하는 과정입니다. 이는 이해를 보여주고 표절을 피하는 데 도움이 되는 글쓰기의 기본 기술입니다.',
      },
      {
        question: 'AI 패러프레이징 도구는 어떻게 작동하나요?',
        answer: '도구는 입력 텍스트를 분석하여 그 의미를 이해한 다음 다른 어휘, 문장 구조 및 표현 패턴을 사용하여 동일한 아이디어를 표현하는 대안적인 방법을 생성합니다.',
      },
      {
        question: '이 패러프레이징 도구는 무료인가요?',
        answer: '네, 이 도구는 완전히 무료입니다. 회원가입이나 결제 없이 원하는 만큼 텍스트를 패러프레이징할 수 있습니다.',
      },
      {
        question: '패러프레이징된 콘텐츠는 오리지널로 간주되나요?',
        answer: '제대로 수행되면 패러프레이징된 콘텐츠는 자신만의 말로 아이디어를 표현하며 오리지널로 간주됩니다. 그러나 학술 및 전문적 맥락에서는 다른 출처에서 유래한 패러프레이징된 아이디어도 적절히 인용해야 합니다.',
      },
      {
        question: '모든 유형의 텍스트를 패러프레이징할 수 있나요?',
        answer: '도구는 기사, 에세이, 보고서, 이메일, 웹 콘텐츠를 포함한 대부분의 텍스트 유형에 작동합니다. 간단한 문장부터 기술적 또는 학술적 언어까지 다양한 복잡성 수준을 효과적으로 처리합니다.',
      },
      {
        question: '패러프레이징된 텍스트가 자연스럽게 들리나요?',
        answer: 'AI는 자연스럽게 흐르는 텍스트를 생성하도록 설계되었습니다. 그러나 출력이 자신의 목소리와 일치하고 더 큰 문서에 자연스럽게 맞는지 확인하기 위해 검토하는 것을 권장합니다.',
      },
      {
        question: '최상의 패러프레이징 결과를 얻으려면 어떻게 해야 하나요?',
        answer: '명확하고 완전한 문장이나 문단을 제공하세요. 단편적이거나 불명확한 입력은 덜 정확한 결과를 생성할 수 있습니다. 출력이 더 격식체, 더 간단하거나 특정 스타일이기를 원하면 지정할 수도 있습니다.',
      },
      {
        question: '다른 언어로 텍스트를 패러프레이징할 수 있나요?',
        answer: '도구는 영어에 최적화되어 있습니다. 다른 언어와도 작동할 수 있지만 영어 텍스트를 패러프레이징할 때 정확도와 유창성이 가장 높습니다.',
      },
      {
        question: '패러프레이징과 요약의 차이점은 무엇인가요?',
        answer: '패러프레이징은 비슷한 길이와 세부 사항을 유지하면서 다른 단어로 콘텐츠를 다시 표현합니다. 요약은 텍스트를 핵심 포인트만 포착하는 더 짧은 버전으로 압축합니다.',
      },
      {
        question: '패러프레이징된 콘텐츠를 사용하기 전에 확인해야 하나요?',
        answer: '네, 항상 AI 생성 콘텐츠를 검토하세요. 패러프레이징된 버전이 원본 의미를 정확하게 반영하고 의미에 의도치 않은 변경이 없는지 확인하세요.',
      },
    ],
  },
  'summarizer': {
    slug: 'summarizer',
    name: '요약 도구',
    title: '무료 AI 요약 도구 | Analyze AI',
    description: '긴 기사, 문서 및 텍스트를 명확하고 간결한 요약으로 압축합니다. 몇 초 만에 핵심 포인트를 추출합니다.',
    metaDescription: '긴 기사, 문서 및 텍스트를 명확하고 간결한 요약으로 압축합니다. 무료 AI 요약기로 몇 초 만에 핵심 포인트를 추출합니다. 지금 사용해 보세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '요약할 텍스트...',
    inputPlaceholder: '요약할 텍스트를 여기에 붙여넣으세요',
    buttonText: '요약',
    maxLength: 4096,
    options: [
      {
        name: 'length',
        label: '요약 길이',
        choices: ['간략 (1-2문장)', '짧음 (1개 문단)', '상세 (2-3개 문단)'],
        default: '짧음 (1개 문단)',
      },
      {
        name: 'format',
        label: '형식',
        choices: ['문단', '글머리 기호', '핵심 요점'],
        default: '문단',
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      {
        title: '연구 및 정보 수집',
        description: '대량의 텍스트를 처리하는 학생, 연구자 및 전문가들은 요약기를 사용하여 기사, 논문 및 보고서에서 핵심 인사이트를 빠르게 추출합니다. 모든 문서를 완전히 읽는 대신 요약을 생성하여 필요에 가장 관련 있는 출처를 식별할 수 있습니다.',
      },
      {
        title: '콘텐츠 큐레이션 및 지식 공유',
        description: '팀 리더, 뉴스레터 작성자 및 콘텐츠 큐레이터는 업계 기사, 보고서 또는 회의록을 요약하여 청중과 필수 정보를 공유할 수 있습니다. 이 도구는 바쁜 독자들이 빠르게 흡수할 수 있는 소화하기 쉬운 요점으로 긴 콘텐츠를 압축하는 데 도움이 됩니다.',
      },
      {
        title: '학습 및 복습 효율성',
        description: '시험을 준비하는 학생이나 문서를 검토하는 전문가들은 긴 자료의 간결한 요약을 만들 수 있습니다. 요약기는 교과서, 강의 노트 또는 교육 자료를 가장 중요한 개념을 강조하는 관리 가능한 학습 가이드로 압축하는 데 도움이 됩니다.',
      },
    ],
    faqs: [
      {
        question: '텍스트 요약기란 무엇인가요?',
        answer: '텍스트 요약기는 장문 콘텐츠를 가장 중요한 정보만 포함하는 더 짧은 버전으로 압축하는 AI 도구입니다. 핵심 포인트, 주요 주장 및 필수 세부 사항을 식별하고 중복되거나 덜 중요한 텍스트를 제거합니다.',
      },
      {
        question: 'AI 요약기는 어떻게 작동하나요?',
        answer: '도구는 자연어 처리를 사용하여 텍스트를 분석하고, 중심 주제와 핵심 정보를 식별하며, 원본 콘텐츠의 핵심 의미를 포착하는 압축 버전을 생성합니다.',
      },
      {
        question: '이 요약기 도구는 무료인가요?',
        answer: '네, 요약기는 완전히 무료로 사용할 수 있습니다. 회원가입이 필요 없고 텍스트를 요약할 수 있는 횟수에 제한이 없습니다.',
      },
      {
        question: '도구가 텍스트를 얼마나 줄이나요?',
        answer: '압축 비율은 원본 텍스트와 선호도에 따라 다릅니다. 일반적으로 요약은 원본 길이의 20-30%이지만, 필요에 따라 더 짧거나 긴 요약을 요청할 수 있습니다.',
      },
      {
        question: '어떤 유형의 콘텐츠를 요약할 수 있나요?',
        answer: '도구는 기사, 블로그 포스트, 연구 논문, 보고서, 에세이, 회의록, 이메일 및 대부분의 다른 텍스트 기반 콘텐츠에 작동합니다. 다양한 주제와 복잡성 수준을 효과적으로 처리합니다.',
      },
      {
        question: '요약이 모든 중요한 포인트를 포착하나요?',
        answer: 'AI는 핵심 정보를 식별하고 우선순위를 정하도록 훈련되었습니다. 그러나 "중요한" 것은 주관적일 수 있으므로 요약이 목적에 가장 관련 있는 특정 포인트를 포착하는지 검토하는 것을 권장합니다.',
      },
      {
        question: '다른 언어로 콘텐츠를 요약할 수 있나요?',
        answer: '도구는 영어 텍스트에 최적화되어 있습니다. 다른 언어의 성능은 다를 수 있습니다.',
      },
      {
        question: '요약할 수 있는 텍스트의 최대 길이는 얼마인가요?',
        answer: '도구는 대부분의 표준 문서를 잘 처리합니다. 전체 책이나 광범위한 보고서와 같은 매우 긴 텍스트의 경우 최상의 결과를 위해 장이나 섹션을 개별적으로 요약하는 것을 권장합니다.',
      },
      {
        question: '요약된 콘텐츠는 표절이 없나요?',
        answer: '요약은 AI를 사용하여 생성되고 아이디어를 압축된 형태로 표현합니다. 그러나 다른 사람의 콘텐츠를 출판용으로 요약하는 경우 적절한 출처 표시가 여전히 필요합니다.',
      },
      {
        question: '요약 길이를 사용자 정의할 수 있나요?',
        answer: '네, 간략한 개요 또는 더 상세한 요약을 원하는지 지정할 수 있습니다. "3문장으로 요약" 또는 "상세 요약 제공"과 같은 지침을 포함하면 AI가 출력을 조정하는 데 도움이 됩니다.',
      },
    ],
  },
  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: '블로그 제목 생성기',
    title: '무료 AI 블로그 제목 생성기',
    description: '클릭을 유도하고 검색에서 순위를 매기는 매력적인 블로그 제목을 생성합니다. AI가 검증된 심리적 트리거를 사용하여 SEO 최적화된 헤드라인을 만듭니다.',
    metaDescription: '클릭을 유도하고 검색에서 순위를 매기는 매력적인 블로그 제목을 생성합니다. AI가 검증된 심리적 트리거를 사용하여 SEO 최적화된 헤드라인을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '블로그 주제 또는 콘텐츠...',
    inputPlaceholder: '예: 이커머스 스토어의 이메일 오픈율을 높이는 방법',
    buttonText: '제목 생성',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: '제목 수',
        choices: ['3개 제목', '5개 제목', '10개 제목'],
        default: '5개 제목',
        type: 'select',
      },
      {
        name: 'tone',
        label: '톤',
        choices: ['격식체', '캐주얼', '설득력 있는'],
        default: '격식체',
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
## OUTPUT FORMAT
### Blog Title Options for: [Topic]
**Title 1:** [Title]
- **Characters:** [count]
- **Type:** [Formula used]
- **Strength:** [Why it works]
[Repeat for each variant]
---
**Recommendation:** [Which title is strongest for SEO vs. social sharing, with brief explanation]

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      {
        title: 'A/B 테스트 헤드라인 변형',
        description: '콘텐츠 마케터와 그로스 팀은 블로그 제목 생성기를 사용하여 체계적인 테스트를 위한 여러 헤드라인 변형을 만듭니다. 직감에 의존하는 대신 팀은 10개 이상의 심리적으로 다른 제목을 생성하고 최종 헤드라인을 결정하기 전에 이메일 제목줄, 소셜 포스트 또는 네이티브 광고를 통해 테스트할 수 있습니다. 이 데이터 기반 접근 방식은 초안 제목을 사용하는 것에 비해 일관되게 15-30% 클릭률을 향상시킵니다.',
      },
      {
        title: '기존 콘텐츠 재활용 및 업데이트',
        description: 'SEO 또는 관련성을 위해 오래된 블로그 포스트를 새로고침할 때 제목을 변경하면 성능에 극적인 영향을 미칠 수 있습니다. 생성기는 콘텐츠 팀이 현재 검색 의도에 더 잘 맞거나, 트렌드 앵글을 통합하거나, 진화된 청중 요구에 맞는 새로운 헤드라인을 개발하도록 돕습니다. 이는 성능이 정체된 에버그린 콘텐츠에 새 생명을 불어넣습니다.',
      },
      {
        title: '팀 간 콘텐츠 생산 확장',
        description: '콘텐츠 에이전시, 미디어 회사 및 대규모 마케팅 팀은 생성기를 사용하여 대규모로 헤드라인 품질을 유지합니다. 여러 작가가 콘텐츠를 생산할 때 헤드라인 품질은 종종 크게 다릅니다. 도구는 일관성을 보장하는 전문적인 품질의 제목 옵션 기준선을 제공하면서도 개별 작가가 제안을 사용자 정의하고 개선할 수 있습니다.',
      },
    ],
    faqs: [
      { question: '좋은 블로그 제목의 조건은 무엇인가요?', answer: '좋은 블로그 제목은 세 가지를 동시에 달성합니다: 콘텐츠를 정확하게 나타내고(독자와 신뢰 구축), 검색어를 자연스럽게 통합하며(검색 가능성 활성화), 심리적 참여를 유발합니다(클릭 유도). 최고의 제목은 어떤 요소도 희생하지 않고 세 가지를 모두 달성합니다. 일반적이기보다 구체적이고, 기능 중심이 아닌 혜택 중심이며, 잊혀지기보다 독특합니다.' },
      { question: '블로그 제목의 적절한 길이는 얼마인가요?', answer: '검색 엔진 최적화를 위해 제목을 60자 미만으로 유지하여 검색 결과에서 완전히 표시되도록 하세요. 그러나 소셜 미디어 공유는 플랫폼마다 자르기 규칙이 다르므로 더 긴 제목(80-90자)을 수용할 수 있습니다. 생성기는 각 제목에 대한 문자 수를 제공하고 주요 배포 채널에 따라 선택할 수 있도록 다양한 길이를 포함합니다.' },
      { question: '블로그 제목에 키워드를 포함해야 하나요?', answer: '네, 하지만 자연스럽게. 검색 엔진은 제목을 랭킹 신호로 사용하고 사용자는 제목을 스캔하여 쿼리와의 관련성을 확인합니다. 가능한 한 읽기 쉬운 제목 초반에 기본 키워드를 배치하되, 명확성이나 참여를 위해 강제로 넣지 마세요.' },
      { question: '여러 제목 옵션 중에서 어떻게 선택하나요?', answer: '주요 목표와 배포 채널을 고려하세요. SEO가 중요하다면 가장 강력한 키워드 통합과 명확한 검색 의도 매칭이 있는 제목을 선택하세요. 소셜 공유가 주요 목표라면 가장 강력한 호기심 트리거 또는 감정적 후크가 있는 제목을 선택하세요.' },
      { question: '생성된 제목을 수정할 수 있나요?', answer: '물론입니다—생성된 제목을 전문적인 시작점으로 생각하세요. 가장 좋은 접근 방식은 종종 여러 제안의 요소를 결합하거나, 브랜드별 언어를 추가하거나, 실제 콘텐츠에 따라 구체성을 조정하는 것입니다.' },
      { question: '블로그 제목에 숫자가 왜 잘 작동하나요?', answer: '숫자는 구체성(신뢰성 구축), 기대치 설정(독자가 범위를 알 수 있음), 인지적 용이성(홀수와 "7" 또는 "13"과 같은 특정 숫자가 둥근 숫자보다 더 잘 수행됨)을 제공합니다. 그러나 과도한 사용은 일부 청중에게 "리스티클 피로"를 만들었습니다. 생성기는 다양성을 제공하기 위해 숫자가 있는 제목과 다른 형식의 균형을 맞춥니다.' },
      { question: '블로그 제목과 SEO 제목의 차이점은 무엇인가요?', answer: '종종 동일하지만 전략적으로 다를 수 있습니다. 블로그 제목(페이지의 H1 헤딩)은 더 길고 창의적일 수 있습니다. SEO 제목(검색 결과의 메타 제목)은 60자 미만으로 유지하고 키워드를 우선시해야 합니다.' },
      { question: '여전히 매력적인 제목을 만들면서 클릭베이트를 어떻게 피하나요?', answer: '클릭베이트는 콘텐츠가 전달하지 않는 약속을 만듭니다. 매력적인 제목은 콘텐츠가 충족시키는 진정한 호기심을 만듭니다. 차이점은 참여 수준이 아니라 정확성입니다. 생성기는 정확성을 유지하면서 높은 참여 제목을 만들도록 특별히 설계되었습니다.' },
      { question: '블로그 제목이 URL 슬러그와 일치해야 하나요?', answer: '정확히는 아니지만 관련이 있어야 합니다. URL 슬러그는 제목의 단순화되고 키워드 중심의 버전이어야 합니다—짧고, 설명적이며, 영구적입니다. 제목은 더 창의적일 수 있고 테스트를 위해 시간이 지남에 따라 변경될 수 있습니다.' },
      { question: '블로그 제목을 얼마나 자주 테스트하거나 변경해야 하나요?', answer: '새 포스트의 경우 제목을 설정하고 인덱싱 및 초기 데이터 수집을 위해 2-4주를 주세요. 성능이 기대 이하이면 새 제목을 테스트하세요. 기존 포스트의 경우 콘텐츠 업데이트 중 또는 검색 순위가 하락할 때 제목 새로고침을 고려하세요.' },
    ],
  },
  'outline-generator': {
    slug: 'outline-generator',
    name: '아웃라인 생성기',
    title: '무료 AI 아웃라인 생성기 | Analyze AI',
    description: '몇 초 만에 블로그 포스트, 에세이 및 기사를 위한 구조화된 아웃라인을 생성합니다.',
    metaDescription: '몇 초 만에 블로그 포스트, 에세이 및 기사를 위한 구조화된 아웃라인을 생성합니다. 무료 AI 아웃라인 생성기는 아이디어를 정리하고 더 빨리 작성하도록 도와줍니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '주제 또는 제목...',
    inputPlaceholder: '예: 소규모 비즈니스를 위한 원격 근무의 이점',
    buttonText: '아웃라인 생성',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: '콘텐츠 유형', choices: ['블로그 포스트', '하우투 가이드', '리스티클', '에세이/의견', '제품 리뷰', '연구/보고서'], default: '블로그 포스트', type: 'select' },
      { name: 'depth', label: '아웃라인 깊이', choices: ['기본 (H2만)', '표준 (H2 + H3)', '상세 (H2 + H3 + 노트)'], default: '표준 (H2 + H3)', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '블로그 포스트 및 기사 계획', description: '콘텐츠 제작자와 마케터들은 아웃라인 생성기를 사용하여 대략적인 주제 아이디어를 작성 전에 조직적이고 논리적인 구조로 변환합니다. 빈 페이지를 쳐다보는 대신 각 부분에서 다룰 내용에 대한 메인 섹션, 하위 섹션 및 노트가 있는 명확한 로드맵을 얻어 아이디어에서 초안까지의 시간을 획기적으로 줄입니다.' },
      { title: '학술 에세이 및 연구 논문 구성', description: '학생과 연구자들은 아웃라인 생성기를 사용하여 복잡한 논증을 구조화하고, 포인트 간의 논리적 흐름을 보장하며, 전체 초안을 작성하기 전에 추론의 공백을 식별할 수 있습니다. 이 도구는 논제문, 근거 증거, 반론 및 결론을 일관된 프레임워크로 구성하는 데 도움이 됩니다.' },
      { title: '장문 콘텐츠 및 문서 프로젝트', description: '종합 가이드, 백서 또는 기술 문서 작업 팀은 대규모 프로젝트 전반에 걸쳐 일관성과 완전성을 보장하는 마스터 아웃라인을 생성할 수 있습니다. 이 도구는 복잡한 주제를 관리 가능한 섹션으로 분해하고 작성 과정에서 중요한 내용이 누락되지 않도록 합니다.' },
    ],
    faqs: [
      { question: '아웃라인 생성기란 무엇인가요?', answer: '아웃라인 생성기는 주제나 대략적인 아이디어를 가져와 제목, 하위 제목 및 핵심 포인트가 있는 구조화된 프레임워크로 구성하는 AI 기반 도구입니다. 전체 콘텐츠를 작성할 때 따를 수 있는 논리적 청사진을 만듭니다.' },
      { question: '아웃라인 생성기는 무료인가요?', answer: '네, 아웃라인 생성기는 회원가입 없이 완전히 무료입니다. 비용이나 사용 제한 없이 필요한 만큼 아웃라인을 만들 수 있습니다.' },
      { question: '어떤 유형의 콘텐츠에 대한 아웃라인을 만들 수 있나요?', answer: '도구는 거의 모든 작성된 콘텐츠에 작동합니다: 블로그 포스트, 기사, 에세이, 연구 논문, 하우투 가이드, 리스티클, 제품 리뷰, 보고서, 백서 등. 가장 관련성 있는 구조를 위해 콘텐츠 유형을 지정하기만 하면 됩니다.' },
      { question: '생성된 아웃라인은 얼마나 상세한가요?', answer: '아웃라인에는 메인 섹션(H2 헤딩), 하위 섹션(H3 헤딩) 및 각 부분에서 다룰 내용을 설명하는 간단한 노트가 포함됩니다. 세부 수준은 창의성을 제한하지 않으면서 명확한 방향을 제공하도록 설계되었습니다.' },
      { question: '아웃라인 구조를 사용자 정의할 수 있나요?', answer: '네, 생성된 아웃라인은 시작점입니다. 섹션을 재배열하고, 헤딩을 추가하거나 제거하고, 특정 요구에 맞게 구조를 수정할 수 있습니다. 콘텐츠 아키텍처의 초안으로 생각하세요.' },
      { question: '아웃라인이 SEO에 도움이 되나요?', answer: '아웃라인은 논리적 헤딩 계층(H1, H2, H3) 및 키워드를 자연스럽게 통합할 위치에 대한 제안을 포함하여 SEO 모범 사례를 염두에 두고 구성됩니다. 잘 구조화된 콘텐츠는 검색 결과에서 더 좋은 성과를 내는 경향이 있습니다.' },
      { question: '입력 주제는 얼마나 길어야 하나요?', answer: '간단한 주제 문구("원격 근무의 이점")부터 타겟 청중, 앵글 및 다루고 싶은 핵심 포인트가 있는 더 상세한 브리프까지 무엇이든 입력할 수 있습니다. 더 많은 맥락을 제공할수록 일반적으로 더 맞춤화된 아웃라인이 생성됩니다.' },
      { question: '다른 콘텐츠 길이에 대한 아웃라인을 생성할 수 있나요?', answer: '네, 목표 단어 수를 지정할 수 있으며 도구가 그에 따라 섹션 수와 깊이를 조정합니다. 500단어 블로그 포스트는 3,000단어 종합 가이드보다 더 간단한 구조를 갖습니다.' },
      { question: '아웃라인에 각 섹션의 단어 수가 포함되나요?', answer: '목표 길이를 지정하면 도구가 콘텐츠 균형을 맞추고 각 주제에 적절한 깊이를 할당하도록 각 섹션에 대한 예상 단어 수를 제공합니다.' },
      { question: '팀 협업을 위해 아웃라인 생성기를 사용할 수 있나요?', answer: '물론입니다. 생성된 아웃라인은 작가를 위한 훌륭한 브리프가 되어 작성 시작 전에 모든 사람이 구조와 핵심 포인트를 이해하도록 합니다. 아웃라인을 쉽게 복사하여 팀과 공유할 수 있습니다.' },
    ],
  },
  'ai-content-detector': {
    slug: 'ai-content-detector',
    name: 'AI 콘텐츠 감지기',
    title: '무료 AI 콘텐츠 감지기 | Analyze AI',
    description: 'AI 생성 콘텐츠를 즉시 감지합니다. 상세한 분석을 받고 텍스트가 AI처럼 들리게 하는 요소를 알아보세요.',
    metaDescription: '무료 도구로 AI 생성 콘텐츠를 즉시 감지합니다. 상세한 분석을 받고 텍스트가 AI처럼 들리게 하는 요소를 알아보세요. 회원가입 불필요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '분석할 텍스트...',
    inputPlaceholder: 'AI 생성 여부를 확인할 텍스트를 붙여넣으세요...',
    buttonText: '텍스트 분석',
    maxLength: 4096,
    options: [
      { name: 'analysisDepth', label: '분석 깊이', choices: ['빠른 스캔', '표준 분석', '상세 분석'], default: '표준 분석', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '학술 무결성 검증', description: '교육자와 학생들은 AI 콘텐츠 감지기를 사용하여 작성된 작업의 독창성을 검증합니다. 교사는 제출된 에세이와 과제에서 AI 생성의 징후를 확인할 수 있고, 학생들은 제출 전에 자신의 글이 의도치 않게 AI 패턴을 반영하지 않는지 확인할 수 있습니다.' },
      { title: '출판사를 위한 콘텐츠 품질 보증', description: '편집 팀, 블로그 관리자 및 콘텐츠 에이전시는 감지기를 사용하여 제출물을 검사하고 게시된 콘텐츠가 진정한 인간의 목소리를 유지하도록 합니다. 이는 특히 프리랜서와 협력하거나 품질 표준을 유지하면서 콘텐츠 생산을 확장할 때 유용합니다.' },
      { title: 'SEO 및 콘텐츠 마케팅 준수', description: 'AI 생성 콘텐츠에 대한 검색 엔진 패널티를 우려하는 마케팅 팀은 게시 전에 기사를 스캔할 수 있습니다. 도구는 문제가 되는 패턴을 식별하고 콘텐츠를 더 진정성 있게 인간적으로 만들기 위한 구체적인 권장 사항을 제공하여 사이트의 검색 순위를 보호합니다.' },
    ],
    faqs: [
      { question: 'AI 콘텐츠 감지기는 어떻게 작동하나요?', answer: '감지기는 문장 구조, 어휘 패턴, 문체적 마커 및 콘텐츠 특성을 포함한 텍스트의 여러 차원을 분석합니다. 이를 AI 생성 콘텐츠와 인간이 작성한 콘텐츠의 알려진 패턴과 비교하여 확률 점수를 계산합니다.' },
      { question: 'AI 콘텐츠 감지기는 무료인가요?', answer: '네, 이 도구는 완전히 무료로 사용할 수 있습니다. 계정을 만들거나 수수료를 지불하지 않고 원하는 만큼 텍스트를 확인할 수 있습니다.' },
      { question: 'AI 콘텐츠 감지는 얼마나 정확한가요?', answer: '어떤 AI 감지기도 100% 정확하지 않습니다. 우리 도구는 신뢰 수준과 함께 확률 점수를 제공합니다. 감지는 더 긴 텍스트(300단어 이상)와 편집되지 않은 AI 출력에서 가장 신뢰할 수 있습니다. 많이 편집된 AI 콘텐츠나 자연스럽게 격식체인 인간 글쓰기는 정확도에 영향을 줄 수 있습니다.' },
      { question: '감지기가 어떤 AI 도구가 콘텐츠를 작성했는지 식별할 수 있나요?', answer: '감지기는 콘텐츠가 AI 생성인 것처럼 보이는지 식별하지만 어떤 특정 도구(ChatGPT, Claude 등)가 만들었는지는 신뢰할 수 없게 판단합니다. 다른 AI 모델들은 많은 유사한 패턴을 공유합니다.' },
      { question: '몇 퍼센트 점수가 콘텐츠가 AI 생성임을 의미하나요?', answer: '일반적으로 70% 이상의 점수는 강력한 AI 지표를 나타내고, 40-70%는 혼합된 신호를 나타내며, 40% 미만은 인간 저작일 가능성이 있음을 나타냅니다. 그러나 이는 지침이며—맥락이 중요하고 어떤 임계값도 결정적이지 않습니다.' },
      { question: 'AI 콘텐츠를 감지를 통과하도록 편집할 수 있나요?', answer: '네, 인간이 실질적으로 편집한 AI 콘텐츠는 종종 감소된 AI 지표를 보여줍니다. 감지기는 원시 또는 가볍게 편집된 AI 출력에서 가장 효과적입니다.' },
      { question: '학술 또는 기술적 글쓰기가 오탐지를 유발하나요?', answer: '격식체 글쓰기 스타일은 일관된 구조와 격식체 어휘와 같은 특성을 공유하기 때문에 때때로 AI 지표를 유발할 수 있습니다. 도구는 이를 고려하지만 자연스럽게 격식체인 콘텐츠에 대해 높은 점수를 보여줄 수 있습니다.' },
      { question: '인간이 작성한 콘텐츠가 플래그되면 어떻게 해야 하나요?', answer: '도구는 어떤 요소가 AI 지표를 유발했는지에 대한 구체적인 피드백을 제공합니다. 이를 사용하여 글쓰기 스타일을 조정하거나, 더 많은 개성을 추가하거나, 인간 저작임을 보여주는 구체적인 예시를 포함할 수 있습니다.' },
      { question: '정확한 감지를 위해 텍스트가 얼마나 길어야 하나요?', answer: '길이가 길수록 정확도가 향상됩니다. 100단어 미만의 텍스트는 신뢰할 수 없게 평가하기 어렵습니다. 최상의 결과를 위해 최소 200-300단어를 제출하세요.' },
      { question: '감지기가 제출된 텍스트를 저장하거나 공유하나요?', answer: '아니요, 제출된 텍스트는 실시간으로 처리되며 저장되지 않습니다. 콘텐츠는 비공개로 유지되며 다른 목적으로 사용되지 않습니다.' },
    ],
  },
  'ai-text-humanizer': {
    slug: 'ai-text-humanizer',
    name: 'AI 텍스트 휴머나이저',
    title: '무료 AI 텍스트 휴머나이저',
    description: 'AI 생성 텍스트를 자연스럽고 인간적인 글쓰기로 변환합니다. 의미를 유지하면서 로봇 같은 패턴을 제거합니다.',
    metaDescription: 'AI 생성 텍스트를 자연스럽고 인간적인 글쓰기로 변환합니다. 무료 휴머나이저는 원본 의미를 유지하면서 로봇 같은 패턴을 제거합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '휴머나이즈할 텍스트...',
    inputPlaceholder: 'AI 생성 텍스트를 여기에 붙여넣으세요...',
    buttonText: '텍스트 휴머나이즈',
    maxLength: 4096,
    options: [
      { name: 'level', label: '휴머나이제이션 수준', choices: ['가벼운', '중간', '강한'], default: '중간', type: 'select' },
      { name: 'tone', label: '목표 톤', choices: ['전문적', '캐주얼', '학술적', '대화체'], default: '전문적', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: 'AI 지원으로 확장하는 콘텐츠 제작자', description: 'AI를 사용하여 콘텐츠를 초안 작성하는 작가와 마케터들은 휴머나이저를 통해 최종 작품이 진정성 있고 매력적으로 들리도록 할 수 있습니다. 도구는 핵심 메시지를 보존하면서 특징적인 AI 패턴을 제거하여 목소리를 희생하지 않고 AI 효율성을 활용할 수 있습니다.' },
      { title: 'AI 지원 연구를 다듬는 학생', description: '아이디어를 브레인스토밍하거나 구조화하는 데 AI 도구를 사용하는 학생들은 초안을 휴머나이즈하여 제출물이 자신의 목소리를 반영하고 표절이나 AI 감지 문제를 유발하지 않도록 할 수 있습니다. 도구는 AI 시작점을 진정성 있게 표현된 최종 작업으로 변환하는 데 도움이 됩니다.' },
      { title: 'AI 초안 커뮤니케이션을 다듬는 전문가', description: '이메일, 보고서 또는 제안서 초안을 작성하는 데 AI를 사용하는 비즈니스 전문가들은 텍스트를 휴머나이즈하여 더 자연스럽고 개인적으로 들리게 할 수 있습니다. 이는 고객 커뮤니케이션, 내부 메모 및 전문 문서가 진정한 목소리와 관계 구축 톤을 유지하도록 합니다.' },
    ],
    faqs: [
      { question: 'AI 텍스트 "휴머나이징"이란 무엇을 의미하나요?', answer: '휴머나이징은 AI 생성 텍스트를 편집하여 로봇 같은 패턴을 제거하고, 자연스러운 목소리 변화를 추가하며, 마치 인간이 쓴 것처럼 읽히게 만드는 것을 의미합니다. 여기에는 어휘 변경, 문장 구조 변화 및 개성 요소 추가가 포함됩니다.' },
      { question: 'AI 텍스트 휴머나이저는 무료인가요?', answer: '네, 이 도구는 회원가입 없이 완전히 무료로 사용할 수 있습니다. 비용 없이 원하는 만큼 텍스트를 휴머나이즈할 수 있습니다.' },
      { question: '휴머나이즈된 텍스트가 AI 감지를 통과하나요?', answer: '휴머나이저는 AI 지표를 상당히 줄이지만, 결과는 원본 텍스트와 사용된 감지 도구에 따라 다릅니다. 최상의 결과를 위해 휴머나이제이션과 자신만의 추가 편집 및 개인적 터치를 결합하세요.' },
      { question: '휴머나이징이 텍스트의 의미를 변경하나요?', answer: '아니요, 도구는 원본 의미를 완전히 보존하도록 설계되었습니다. 아이디어가 표현되는 방식만 변경하지 어떤 아이디어가 표현되는지는 변경하지 않습니다. 모든 사실과 핵심 메시지는 그대로 유지됩니다.' },
      { question: '가벼운, 중간, 강한 휴머나이제이션의 차이점은 무엇인가요?', answer: '가벼운 휴머나이제이션은 격식체 콘텐츠에 적합한 최소한의 변경을 합니다. 중간(기본)은 일반 콘텐츠에 더 자연스러운 변화를 추가합니다. 강한 휴머나이제이션은 비격식 콘텐츠에 대해 개성과 캐주얼 톤을 크게 증가시킵니다.' },
      { question: '모든 스타일이나 톤으로 텍스트를 휴머나이즈할 수 있나요?', answer: '네, 선호하는 톤(전문적, 캐주얼, 친근한 등)을 지정할 수 있으며 도구가 그에 따라 휴머나이제이션 접근 방식을 조정하면서 전체적으로 그 톤을 유지합니다.' },
      { question: '휴머나이제이션은 얼마나 걸리나요?', answer: '결과는 텍스트 길이에 관계없이 몇 초 만에 생성됩니다. 더 긴 텍스트는 약간 더 오래 걸릴 수 있지만 프로세스는 거의 즉각적입니다.' },
      { question: '휴머나이즈된 텍스트를 추가로 편집해야 하나요?', answer: '검토하고 자신만의 개인적 터치를 추가하는 것을 권장합니다. 도구는 훌륭한 기반을 제공하지만, 경험에서 나온 구체적인 예시, 개인적 일화 또는 고유한 통찰력을 추가하면 콘텐츠가 더욱 진정성 있게 됩니다.' },
      { question: '어떤 유형의 콘텐츠를 휴머나이즈할 수 있나요?', answer: '도구는 모든 텍스트에 작동합니다: 기사, 블로그 포스트, 에세이, 이메일, 보고서, 소셜 미디어 포스트 등. 콘텐츠 유형과 격식 수준에 따라 접근 방식을 조정합니다.' },
      { question: '다른 언어로 콘텐츠를 휴머나이즈할 수 있나요?', answer: '도구는 영어 텍스트에 최적화되어 있습니다. 다른 언어와도 작동할 수 있지만 영어 콘텐츠에서 결과가 가장 신뢰할 수 있고 자연스럽게 들립니다.' },
    ],
  },
  'conclusion-generator': {
    slug: 'conclusion-generator',
    name: '결론 생성기',
    title: '무료 AI 결론 생성기 | Analyze AI',
    description: '명확한 요점과 CTA가 있는 모든 기사, 에세이 또는 블로그 포스트를 위한 매력적인 결론을 생성합니다.',
    metaDescription: '모든 기사, 에세이 또는 블로그 포스트를 위한 매력적인 결론을 생성합니다. 무료 AI 도구는 명확한 요점과 CTA가 있는 만족스러운 마무리를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '기사 주제와 핵심 포인트...',
    inputPlaceholder: '예: 주제: 명상의 이점. 핵심 포인트: 스트레스 감소, 집중력 향상, 수면 개선',
    buttonText: '결론 생성',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: '콘텐츠 유형', choices: ['블로그 포스트', '하우투 가이드', '리스티클', '에세이/의견', '제품 리뷰', '연구/보고서'], default: '블로그 포스트', type: 'select' },
      { name: 'ctaType', label: '행동 유도', choices: ['소프트 (정보성)', '직접적 (상업적)', '생각을 자극하는', '없음'], default: '소프트 (정보성)', type: 'select' },
      { name: 'tone', label: '톤', choices: ['전문적', '캐주얼', '영감을 주는', '학술적'], default: '전문적', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '블로그 및 콘텐츠 마케팅 마무리', description: '기사를 효과적으로 끝내는 데 어려움을 겪는 콘텐츠 제작자들은 결론 생성기를 사용하여 핵심 포인트를 요약하고 독자 행동을 유도하는 만족스러운 마무리를 만듭니다. 도구는 모든 작품이 흐지부지 끝나지 않고 임팩트 있게 끝나도록 하여 참여도와 전환율을 향상시킵니다.' },
      { title: '학술 에세이 결론', description: '에세이, 연구 논문 또는 논문 장을 작성하는 학생들은 단순히 서론을 반복하지 않고 자신의 주장을 종합하는 잘 구성된 결론을 생성할 수 있습니다. 도구는 기본적인 요약에서 지속적인 인상을 남기는 매력적인 마무리로 마지막 문단을 끌어올리는 데 도움이 됩니다.' },
      { title: '비즈니스 문서 마무리', description: '보고서, 제안서 또는 프레젠테이션을 작성하는 전문가들은 권장 사항, 다음 단계 및 핵심 요점을 명확하게 전달하는 결론을 만들 수 있습니다. 도구는 중요한 문서가 이해 관계자를 위한 명확성과 실행 가능한 방향으로 끝나도록 합니다.' },
    ],
    faqs: [
      { question: '좋은 결론의 조건은 무엇인가요?', answer: '강력한 결론은 핵심 포인트를 종합하고(단순히 반복하지 않고), 주요 메시지를 강화하며, 함의나 이해관계를 다루고, 명확한 다음 단계나 행동 유도를 제공합니다. 독자에게 마무리감과 동기를 부여해야 합니다.' },
      { question: '결론 생성기는 무료인가요?', answer: '네, 회원가입이나 결제 없이 완전히 무료로 사용할 수 있습니다. 비용 없이 필요한 만큼 결론을 생성하세요.' },
      { question: '어떤 정보를 제공해야 하나요?', answer: '최소한 주제와 콘텐츠에서 다룬 핵심 포인트를 제공하세요. 최상의 결과를 위해 콘텐츠 유형(블로그, 에세이, 보고서), 원하는 톤 및 포함하고 싶은 특정 행동 유도도 지정하세요.' },
      { question: '결론이 내 글쓰기 스타일과 일치하나요?', answer: '도구는 지정한 톤(전문적, 캐주얼, 학술적 등)에 맞게 조정하고 콘텐츠 유형에 대한 표준 관례를 따릅니다. 완벽한 스타일 매칭을 위해 개인적인 목소리를 추가하는 가벼운 편집을 권장합니다.' },
      { question: '결론의 적절한 길이는 얼마인가요?', answer: '결론은 일반적으로 전체 콘텐츠 길이의 10-15%입니다. 1,000단어 기사의 경우 100-150단어를 예상하세요. 목표 길이를 지정할 수 있으며 도구가 그에 맞게 조정합니다.' },
      { question: '다른 콘텐츠 유형에 대한 결론을 생성할 수 있나요?', answer: '네, 도구는 블로그 포스트, 에세이, 하우투 가이드, 리스티클, 제품 리뷰, 연구 보고서 등을 처리합니다. 각 유형은 적절한 관례와 구조를 따릅니다.' },
      { question: '결론에 행동 유도를 포함해야 하나요?', answer: '마케팅 콘텐츠의 경우 네—결론은 주요 CTA 위치입니다. 학술적 또는 정보성 콘텐츠의 경우 "CTA"는 상업적 행동보다는 추가 생각을 장려하거나 관련 읽을거리를 제안하는 것일 수 있습니다.' },
      { question: '서론을 단순히 반복하는 결론을 어떻게 피하나요?', answer: '도구는 핵심 포인트를 단순히 반복하지 않고 종합하고 끌어올리도록 설계되었습니다. 서론에서 언급한 것을 넘어서는 새로운 언어와 전망적인 요소로 요점을 프레이밍합니다.' },
      { question: '이메일이나 짧은 콘텐츠에 사용할 수 있나요?', answer: '네, 도구가 긴 형식 콘텐츠에 최적화되어 있지만 가능합니다. 이메일의 경우 매우 짧은 목표 길이를 지정하면 도구가 적절한 CTA가 있는 간결한 마무리를 생성합니다.' },
      { question: '생성된 결론이 마음에 들지 않으면 어떻게 하나요?', answer: '조정된 입력(다른 톤, CTA, 길이)으로 다시 생성하거나 출력을 자신만의 편집의 시작점으로 사용할 수 있습니다. 생성된 결론은 구축할 수 있는 구조와 아이디어를 제공합니다.' },
    ],
  },

  // ==================== KOREAN TRANSLATION - BATCH 2 (Tools 11-20) ====================
  'grammar-checker': {
    slug: 'grammar-checker',
    name: '문법 검사기',
    title: '무료 AI 문법 검사기 | Analyze AI',
    description: '무료로 문법, 맞춤법, 구두점을 확인합니다. 명확한 설명과 함께 즉각적인 수정 사항을 받으세요.',
    metaDescription: '무료로 문법, 맞춤법, 구두점을 확인합니다. 명확한 설명과 함께 즉각적인 수정 사항을 받아 글쓰기 실력을 향상시키세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '확인할 텍스트...',
    inputPlaceholder: '문법, 맞춤법, 구두점 오류를 확인할 텍스트를 여기에 붙여넣으세요...',
    buttonText: '문법 검사',
    maxLength: 4096,
    options: [
      { name: 'mode', label: '검사 모드', choices: ['빠른 수정', '표준', '상세 학습', '학술', '캐주얼/창의'], default: '표준', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '전문적인 커뮤니케이션 다듬기', description: '비즈니스 전문가들은 문법 검사기를 사용하여 동료, 고객 또는 경영진에게 보내기 전에 이메일, 보고서 및 프레젠테이션에 오류가 없는지 확인합니다. 깨끗하고 전문적인 글쓰기는 신뢰성을 구축하고 메시지를 훼손할 수 있는 당혹스러운 실수를 방지합니다.' },
      { title: '학술 글쓰기 교정', description: '학생과 연구자들은 제출 전에 에세이, 논문 및 논문 초안의 문법 및 구두점 오류를 확인할 수 있습니다. 이 도구는 맞춤법 검사가 놓치는 실수를 잡아내고 시간이 지남에 따라 글쓰기 실력을 향상시키는 데 도움이 되는 설명을 제공합니다.' },
      { title: '콘텐츠 제작 품질 보증', description: '블로거, 콘텐츠 마케터 및 작가들은 게시 전 최종 품질 검토로 문법 검사기를 사용합니다. 전문 작가도 자가 편집 중에 오류를 놓치며, 이 도구는 간과된 부분을 잡아내는 새로운 자동화된 검토를 제공합니다.' },
    ],
    faqs: [
      { question: '문법 검사기는 어떤 유형의 오류를 찾나요?', answer: '도구는 문법 오류(주어-동사 일치, 시제 문제, 불완전 문장), 맞춤법 오류, 구두점 문제(쉼표, 아포스트로피, 세미콜론) 및 흔히 혼동되는 단어를 식별합니다. 또한 명확성과 가독성을 위한 스타일 제안도 플래그합니다.' },
      { question: '문법 검사기는 무료인가요?', answer: '네, 도구는 제한 없이 완전히 무료입니다. 회원가입이나 비용 없이 원하는 만큼 텍스트를 확인하세요.' },
      { question: '맞춤법 검사와 어떻게 다른가요?', answer: '표준 맞춤법 검사는 철자 오류만 잡습니다. 문법 검사기는 문장 구조, 구두점, 단어 사용 및 스타일을 분석하여 모든 단어가 올바르게 철자되어 있기 때문에 맞춤법 검사가 놓치는 "그들은 가게에 간다" 같은 오류를 잡습니다.' },
      { question: '도구가 내 글쓰기 스타일을 바꾸나요?', answer: '도구는 목소리를 유지하면서 실제 오류를 수정하는 데 중점을 둡니다. 스타일 제안은 선택 사항으로 명확하게 표시되며 어떤 변경 사항을 수락할지 선택합니다. 글쓰기를 일반적이거나 로봇처럼 들리게 만들지 않습니다.' },
      { question: '학술적 또는 격식체 글쓰기를 확인할 수 있나요?', answer: '네, 학술 글쓰기, 비즈니스 문서 또는 전문적인 커뮤니케이션에 적합한 더 엄격한 문법 표준과 격식 관례를 적용하는 학술 모드를 선택할 수 있습니다.' },
      { question: '왜 잘못된 것인지 설명해 주나요?', answer: '네, 각 오류에는 위반된 규칙에 대한 설명과 유사한 실수를 피하는 방법에 대한 안내가 포함됩니다. 이는 즉각적인 문제를 수정하는 것뿐만 아니라 배우고 개선하는 데 도움이 됩니다.' },
      { question: '텍스트 길이는 얼마나 될 수 있나요?', answer: '도구는 짧은 이메일부터 긴 문서까지 다양한 길이의 텍스트를 처리합니다. 매우 긴 문서의 경우 섹션별로 확인하면 더 좋은 결과를 얻을 수 있습니다.' },
      { question: '영어 이외의 언어도 작동하나요?', answer: '도구는 영어 문법, 맞춤법 및 구두점에 최적화되어 있습니다. 다른 언어에서 일부 오류를 잡을 수 있지만 영어가 아닌 언어에 대한 포괄적인 검사를 위해 설계되지 않았습니다.' },
      { question: '모든 오류를 잡나요?', answer: '도구는 대부분의 일반적인 오류를 잡지만 어떤 자동화된 검사기도 완벽하지 않습니다. 중요한 문서에 대해서는 편집 과정의 일부로 사용하고 인간 교정을 완전히 대체하지 않는 것을 권장합니다.' },
      { question: '창작 글쓰기에 사용할 수 있나요?', answer: '네, 더 많은 유연성을 위해 캐주얼/창의 모드를 선택하세요. 도구는 의도적인 불완전 문장, 비격식적 언어 및 스타일 선택을 존중하면서도 여전히 진정한 오류를 잡습니다.' },
    ],
  },
  'sentence-rewriter': {
    slug: 'sentence-rewriter',
    name: '문장 재작성기',
    title: '무료 AI 문장 재작성 도구',
    description: '명확성, 임팩트 또는 더 나은 톤을 위해 문장을 재작성합니다. 설명과 함께 여러 변형을 받으세요.',
    metaDescription: '명확성, 임팩트 또는 더 나은 톤을 위해 문장을 재작성합니다. 각각을 더 강하게 만드는 이유에 대한 설명과 함께 여러 변형을 받으세요. 무료, 회원가입 불필요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '재작성할 문장...',
    inputPlaceholder: '예: 새 시스템의 구현이 지난주에 팀에 의해 완료되었습니다.',
    buttonText: '문장 재작성',
    maxLength: 1024,
    options: [
      { name: 'goal', label: '개선 목표', choices: ['명확성', '임팩트', '간결함', '더 격식체', '더 캐주얼', '더 자신감 있게'], default: '명확성', type: 'select' },
      { name: 'variants', label: '변형 수', choices: ['2개 변형', '3개 변형', '5개 변형'], default: '3개 변형', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '핵심 메시징 및 헤드라인 다듬기', description: '마케터와 카피라이터들은 문장 재작성기를 사용하여 헤드라인, 태그라인, CTA 및 오프닝 라인과 같은 중요한 문장을 다듬습니다. 하나의 문장이 열심히 일해야 할 때 도구는 여러 변형을 생성하여 가장 임팩트 있는 버전을 선택할 수 있습니다.' },
      { title: '이메일 커뮤니케이션 개선', description: '전문가들은 보내기 전에 중요한 이메일의 어색하거나 불명확한 문장을 재작성할 수 있습니다. 더 자신감 있게, 더 외교적으로 또는 단순히 더 명확하게 들려야 하든, 도구는 의도한 바를 정확히 전달하는 데 도움이 되는 옵션을 제공합니다.' },
      { title: '편집 및 교정 지원', description: '작가와 편집자들은 문장이 작동하지 않지만 어떻게 수정해야 할지 모를 때 도구를 사용합니다. 여러 대안을 생성함으로써 도구는 편집 블록을 극복하고 문제가 있는 문장에 대한 새로운 접근 방식을 제공합니다.' },
    ],
    faqs: [
      { question: '문장 재작성과 패러프레이징의 차이점은 무엇인가요?', answer: '문장 재작성은 같은 의미를 유지하면서 단일 문장의 명확성, 임팩트 또는 톤을 개선하는 데 중점을 둡니다. 패러프레이징은 같은 아이디어를 다른 단어로 표현하는 것으로, 종종 중복을 피하기 위함입니다. 재작성기는 적극적으로 문장을 더 낫게 만들려고 하지, 단지 다르게 만들지 않습니다.' },
      { question: '문장 재작성기는 무료인가요?', answer: '네, 회원가입 없이 완전히 무료입니다. 원하는 만큼 문장을 재작성하세요.' },
      { question: '몇 개의 변형을 받나요?', answer: '도구는 일반적으로 각각 개선에 대한 다른 접근 방식을 취하는 3개의 구별된 변형을 제공합니다. 이를 통해 특정 요구에 따라 선택할 수 있는 옵션을 제공합니다.' },
      { question: '원하는 개선 유형을 지정할 수 있나요?', answer: '네, "더 간결하게," "더 격식체로," "더 자신감 있게," 또는 "더 명확하게"와 같은 특정 목표를 요청할 수 있습니다. 도구는 명시된 목표에 맞게 변형을 조정합니다.' },
      { question: '의미가 변하나요?', answer: '아니요, 모든 변형은 원래 의미를 보존합니다. 도구는 어떤 아이디어가 표현되는지가 아니라 아이디어가 표현되는 방식을 변경합니다. 이것은 재작성 과정의 핵심 규칙입니다.' },
      { question: '문법 검사기가 있는데 왜 이것이 필요한가요?', answer: '문법 검사기는 오류를 수정합니다. 문장 재작성기는 문법적으로 올바르지만 더 명확하거나, 강하거나, 청중에게 더 적합할 수 있는 문장을 개선합니다. 오류 수정이 아닌 품질 향상에 관한 것입니다.' },
      { question: '한 번에 여러 문장을 재작성할 수 있나요?', answer: '도구는 가장 집중된 개선을 위해 한 번에 하나의 문장에 최적화되어 있습니다. 여러 문장의 경우 문단 재작성기를 사용하거나 문장을 개별적으로 실행하세요.' },
      { question: '어떤 재작성이 다른 것보다 더 나은 이유는 무엇인가요?', answer: '목표에 따라 다릅니다. 이메일의 경우 명확성과 적절한 톤이 가장 중요합니다. 마케팅의 경우 임팩트와 기억에 남는 것이 핵심입니다. 도구는 각 변형을 설명하여 특정 맥락에 따라 선택할 수 있습니다.' },
      { question: '영어가 아닌 문장에 도움이 되나요?', answer: '도구는 영어에 최적화되어 있습니다. 다른 언어의 결과는 다를 수 있으며 신뢰할 수 없습니다.' },
      { question: '항상 권장 옵션을 사용해야 하나요?', answer: '권장 사항은 일반적인 선호도를 기반으로 하지만, 맥락을 가장 잘 알고 있습니다. 모든 옵션을 검토하고 특정 청중, 톤 및 목적에 맞는 것을 선택하세요.' },
    ],
  },
  'acronym-generator': {
    slug: 'acronym-generator',
    name: '두문자어 생성기',
    title: '무료 AI 두문자어 생성기 | Analyze AI',
    description: '프로젝트, 제품 및 조직을 위한 영리하고 의미 있는 두문자어를 생성합니다.',
    metaDescription: '프로젝트, 제품 및 조직을 위한 영리하고 의미 있는 두문자어를 생성합니다. 확장된 의미와 함께 여러 옵션을 받으세요. 무료이며 즉각적입니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '주제 또는 개념...',
    inputPlaceholder: '예: 소매업을 위한 고객 피드백 개선 이니셔티브',
    buttonText: '두문자어 생성',
    maxLength: 1024,
    options: [
      { name: 'tone', label: '톤', choices: ['전문적', '창의적', '기술적', '재미있는'], default: '전문적', type: 'select' },
      { name: 'length', label: '선호 길이', choices: ['짧은 (3-4글자)', '중간 (5-6글자)', '모든 길이'], default: '모든 길이', type: 'select' },
      { name: 'variants', label: '옵션 수', choices: ['3개 옵션', '5개 옵션', '10개 옵션'], default: '5개 옵션', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '프로젝트 및 이니셔티브 이름 지정', description: '새 프로젝트, 프로그램 또는 이니셔티브를 시작하는 팀은 두문자어 생성기를 사용하여 목적을 전달하는 기억에 남는 이름을 만듭니다. 강력한 두문자어는 프로젝트를 더 쉽게 참조하고, 기억하고, 결집할 수 있게 만들어—"고객 피드백 개선 프로젝트"를 "VOICE"와 같은 것으로 바꿉니다.' },
      { title: '제품 및 기능 이름 지정', description: '제품 관리자와 마케터들은 가치를 전달하면서도 캐치하고 브랜드화 가능한 제품, 기능 또는 방법론을 위한 두문자어 기반 이름을 생성할 수 있습니다. 올바른 두문자어는 제품의 정체성과 마케팅의 강력한 부분이 될 수 있습니다.' },
      { title: '조직 및 팀 브랜딩', description: '새 팀, 부서, 위원회 또는 작업 그룹을 만드는 리더들은 사명과 가치를 포착하는 두문자어를 찾을 수 있습니다. 사려 깊은 두문자어는 그룹에 정체성을 부여하고 더 넓은 조직에 목적을 전달하는 데 도움이 됩니다.' },
    ],
    faqs: [
      { question: '두문자어 생성기란 무엇인가요?', answer: '두문자어 생성기는 각 글자가 단어를 나타내는 구문의 축약 형태를 만듭니다. 이 도구는 글자가 기억에 남는 것을 철자하면서 확장된 단어가 주제를 정확하게 설명하는 조합을 찾는 데 도움이 됩니다.' },
      { question: '두문자어 생성기는 무료인가요?', answer: '네, 회원가입 없이 완전히 무료입니다. 필요한 만큼 두문자어를 생성하세요.' },
      { question: '두문자어와 이니셜리즘의 차이점은 무엇인가요?', answer: '두문자어는 단어로 발음됩니다(NASA, RADAR), 이니셜리즘은 글자별로 철자됩니다(FBI, CEO). 도구는 주제에 가장 잘 맞는 것에 따라 두 유형 모두 생성합니다.' },
      { question: '두문자어는 몇 글자가 적절한가요?', answer: '3-7글자가 일반적으로 가장 잘 작동합니다. 짧은 두문자어는 기억하기 쉽지만 설명력이 적습니다. 더 긴 것은 더 구체적일 수 있지만 회상하기 어렵습니다. 도구는 다양한 길이의 옵션을 제공합니다.' },
      { question: '특정 단어를 철자하도록 요청할 수 있나요?', answer: '네, 원하는 단어를 지정하고 도구가 각 글자에 맞는 구문을 찾는 "역두문자어"를 요청할 수 있습니다. 단어가 자연스럽게 맞지 않으면 강제된 역두문자어는 때때로 어색하게 느껴질 수 있습니다.' },
      { question: '두문자어가 고유할까요?', answer: '도구는 원래 조합을 생성하지만, 다른 조직에서 이미 사용 중이지 않은지 확인하기 위해 온라인에서 즐겨찾기를 검색하는 것을 권장합니다, 특히 해당 산업에서.' },
      { question: '다른 산업에 대한 두문자어를 생성할 수 있나요?', answer: '네, 산업이나 맥락을 지정하면 도구가 관련 용어를 사용합니다. 의료 이니셔티브를 위한 두문자어는 기술 스타트업과 다른 어휘를 사용합니다.' },
      { question: '제안이 마음에 들지 않으면 어떻게 하나요?', answer: '조정된 입력(다른 톤, 길이 또는 맥락)으로 다시 생성하거나 생성된 옵션을 영감으로 사용하여 자신만의 변형을 만들 수 있습니다. 도구는 또한 교체할 수 있는 대체 단어도 제공합니다.' },
      { question: '두문자어가 실제 단어를 철자해야 하나요?', answer: '반드시 그렇지 않습니다. 실제 단어 두문자어(SMART나 CARE와 같은)는 매우 기억에 남지만, 발음 가능한 비단어(NASA와 같은)나 글자 기반 두문자어(CEO와 같은)도 맥락에 따라 동등하게 잘 작동할 수 있습니다.' },
      { question: '두문자어가 좋은지 어떻게 알 수 있나요?', answer: '좋은 두문자어는 발음하기 쉽고, 기억하기 쉬우며, 확장된 의미를 정확하게 나타냅니다. 자연스럽게 느껴야 하며—강제적이지 않아야 하고—이상적으로는 긍정적인 연상을 만들어야 합니다.' },
    ],
  },
  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-generator',
    name: '로렘 입숨 생성기',
    title: '무료 AI 로렘 입숨 생성기',
    description: '디자인, 목업 및 레이아웃을 위한 로렘 입숨 자리 표시자 텍스트를 생성합니다.',
    metaDescription: '디자인, 목업 및 레이아웃을 위한 로렘 입숨 자리 표시자 텍스트를 생성합니다. 전통적이거나 현대적인 대안을 선택하세요. 복사-붙여넣기 준비 완료. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '필요한 양...',
    inputPlaceholder: '예: 3개 문단, 500단어, 또는 10개 문장',
    buttonText: '텍스트 생성',
    maxLength: 256,
    options: [
      { name: 'type', label: '텍스트 유형', choices: ['전통적 로렘 입숨', '힙스터 입숨', '오피스/비즈니스 입숨', '일반 영어'], default: '전통적 로렘 입숨', type: 'select' },
      { name: 'amount', label: '양', choices: ['1개 문단', '3개 문단', '5개 문단', '500단어', '1000단어'], default: '3개 문단', type: 'select' },
      { name: 'format', label: '형식', choices: ['일반 텍스트', 'HTML 태그 포함'], default: '일반 텍스트', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '웹 및 UI 디자인 목업', description: '디자이너들은 실제 콘텐츠가 작성되기 전에 레이아웃, 와이어프레임 및 목업을 사실적으로 보이는 텍스트로 채우기 위해 로렘 입숨을 사용합니다. 이는 클라이언트와 팀이 실제 텍스트를 읽는 것에 방해받지 않고 콘텐츠가 배치된 최종 디자인이 어떻게 보일지 시각화하는 데 도움이 됩니다.' },
      { title: '개발 및 테스트 자리 표시자', description: '개발자들은 레이아웃, 타이포그래피 설정 및 반응형 디자인을 테스트하기 위해 자리 표시자 텍스트를 사용합니다. 로렘 입숨은 텍스트 컨테이너, 줄 높이 및 오버플로 동작이 다양한 콘텐츠 길이에서 올바르게 작동하는지 확인하는 데 도움이 됩니다.' },
      { title: '인쇄 및 그래픽 디자인 레이아웃', description: '브로셔, 잡지, 포스터 및 기타 인쇄물 작업을 하는 그래픽 디자이너들은 최종 카피가 전달되기 전에 클라이언트 승인을 위한 레이아웃을 완성하기 위해 로렘 입숨을 사용하여 디자인 작업이 콘텐츠 제작과 병행되도록 합니다.' },
    ],
    faqs: [
      { question: '로렘 입숨이란 무엇인가요?', answer: '로렘 입숨은 1500년대부터 디자인 및 출판에서 사용된 뒤섞인 라틴어 기반 자리 표시자 텍스트입니다. 읽을 수 있는 콘텐츠로 시청자를 방해하지 않으면서 레이아웃을 채우기 위해 사실적으로 보이는 텍스트를 제공합니다.' },
      { question: '로렘 입숨 생성기는 무료인가요?', answer: '네, 제한 없이 완전히 무료입니다. 필요한 만큼 자리 표시자 텍스트를 생성하세요.' },
      { question: '실제 텍스트 대신 로렘 입숨을 사용하는 이유는 무엇인가요?', answer: '의미 없는 자리 표시자 텍스트를 사용하면 클라이언트와 검토자가 디자인을 평가해야 할 때 콘텐츠에 집중하는 것을 방지합니다. 또한 최종 카피가 작성되기 전에 디자인 작업을 진행할 수 있습니다.' },
      { question: '로렘 입숨은 실제로 라틴어인가요?', answer: '로렘 입숨은 기원전 45년 키케로의 작품에서 파생되었지만, 너무 많이 뒤섞이고 변경되어 더 이상 적절한 라틴어가 아닙니다. 의미 있는 번역이 없습니다.' },
      { question: '전통적인 로렘 입숨의 대안을 얻을 수 있나요?', answer: '네, 도구는 힙스터 입숨, 오피스 입숨, 베이컨 입숨 및 다양성 또는 주제 적합성을 위한 일반 영어 자리 표시자 텍스트를 포함한 여러 대안을 제공합니다.' },
      { question: '텍스트는 어떤 형식으로 제공되나요?', answer: '텍스트는 복사-붙여넣기할 준비가 된 깨끗한 일반 텍스트로 제공됩니다. 웹 사용을 위해 문단 태그가 있는 HTML 형식 출력도 요청할 수 있습니다.' },
      { question: '필요한 텍스트 양을 정확히 지정할 수 있나요?', answer: '네, 문단 수, 단어 수, 문장 수 또는 문자 수로 특정 양을 요청할 수 있습니다. 도구는 사양에 최대한 가깝게 생성합니다.' },
      { question: '로렘 입숨이 SEO에 영향을 미치나요?', answer: '자리 표시자 텍스트는 게시 전에 항상 교체해야 합니다. 게시된 로렘 입숨은 잠재적으로 SEO에 해를 끼칠 수 있고 비전문적으로 보입니다. 게시 전에 항상 실제 콘텐츠로 교체하세요.' },
      { question: '로렘 입숨이 "Lorem ipsum dolor sit amet"으로 시작하는 이유는 무엇인가요?', answer: '이것은 수세기 동안 전통적인 시작 문구였습니다. 단어들은 키케로의 "de Finibus Bonorum et Malorum"(선과 악의 끝에 관하여)의 뒤섞인 섹션에서 왔습니다.' },
      { question: '모든 프로젝트에 로렘 입숨을 사용할 수 있나요?', answer: '네, 로렘 입숨은 공개 도메인에 있으며 저작권 제한이 없습니다. 모든 디자인, 개발 또는 레이아웃 프로젝트에서 자유롭게 사용할 수 있습니다.' },
    ],
  },
  'emoji-translator': {
    slug: 'emoji-translator',
    name: '이모지 번역기',
    title: '무료 AI 이모지 번역기 | Analyze AI',
    description: '텍스트를 표현력 풍부한 이모지로 번역하거나 이모지 메시지를 해독합니다.',
    metaDescription: '텍스트를 표현력 풍부한 이모지로 번역하거나 이모지 메시지를 해독합니다. 소셜 미디어, 메시징 및 재미있는 커뮤니케이션에 완벽합니다. 무료로 사용하세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '텍스트 또는 이모지...',
    inputPlaceholder: '예: "주말이 너무 기대돼요!" 또는 해독할 이모지를 붙여넣으세요',
    buttonText: '번역',
    maxLength: 1024,
    options: [
      { name: 'direction', label: '번역 방향', choices: ['텍스트를 이모지로', '이모지를 텍스트로'], default: '텍스트를 이모지로', type: 'radio' },
      { name: 'style', label: '이모지 스타일', choices: ['전체 대체', '이모지와 텍스트', '핵심 개념만'], default: '이모지와 텍스트', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '소셜 미디어 및 메시징 향상', description: '텍스트, 트윗 또는 소셜 포스트에 개성을 추가하려는 사용자들은 메시지를 이모지가 향상된 버전으로 번역할 수 있습니다. 도구는 톤과 감정을 전달하는 완벽한 이모지를 찾아 디지털 커뮤니케이션을 더 표현력 있고 매력적으로 만듭니다.' },
      { title: '이모지 해석 및 이해', description: '혼란스러운 이모지 문자열을 받았을 때 번역기는 가능한 의미를 해독하는 데 도움이 됩니다. 이는 세대별 이모지 사용, 플랫폼별 의미 또는 창의적인 이모지 조합을 이해하는 데 특히 유용합니다.' },
      { title: '콘텐츠 제작 및 마케팅', description: '소셜 미디어 관리자와 콘텐츠 제작자들은 포스트를 돋보이게 하는 창의적인 이모지 조합을 찾을 수 있습니다. 도구는 브랜드 메시지를 Instagram 및 Twitter와 같은 시각적 플랫폼에서 잘 수행되는 이모지 친화적 형식으로 번역하는 데 도움이 됩니다.' },
    ],
    faqs: [
      { question: '이모지 번역기는 어떻게 작동하나요?', answer: '텍스트를 이모지로 번역할 때 도구는 메시지의 의미와 감정을 분석하고 해당 개념을 나타내는 이모지를 선택합니다. 이모지를 텍스트로 번역할 때 일반적인 의미를 해석하고 가능한 번역을 제공합니다.' },
      { question: '이모지 번역기는 무료인가요?', answer: '네, 회원가입 없이 완전히 무료입니다. 원하는 만큼 번역하세요.' },
      { question: '모든 사람이 내 이모지 번역을 이해할까요?', answer: '도구는 일반적으로 이해되는 이모지를 사용하지만, 이모지 해석은 나이, 문화 및 플랫폼에 따라 다를 수 있습니다. 여러 일반적인 의미를 가진 이모지를 플래그합니다.' },
      { question: '이모지를 다시 텍스트로 번역할 수 있나요?', answer: '네, 이모지 시퀀스를 붙여넣으면 도구가 이모지가 무엇을 의미하는지에 대한 가능한 해석을 제공하며, 모호한 조합에 대한 대안적 읽기도 포함합니다.' },
      { question: '일부 이모지가 다른 의미를 가지는 이유는 무엇인가요?', answer: '이모지 의미는 인터넷 문화를 통해 진화하며 세대, 커뮤니티 및 플랫폼 간에 다를 수 있습니다. 단일 이모지는 문자 그대로의 의미에 더해 속어나 아이러니한 사용을 가질 수 있습니다. 도구는 이러한 변형을 표시합니다.' },
      { question: '모든 텍스트를 이모지로 대체해야 하나요 아니면 일부만 추가해야 하나요?', answer: '맥락에 따라 다릅니다. 캐주얼 메시지의 경우 전체 이모지 대체가 재미있을 수 있습니다. 대부분의 커뮤니케이션에서는 텍스트를 향상시키기 위해 몇 개의 전략적인 이모지를 추가하는 것이 더 효과적이고 명확합니다.' },
      { question: '이모지가 모든 장치에서 같아 보이나요?', answer: '아니요, 이모지 디자인은 플랫폼(Apple, Google, Samsung 등)에 따라 다릅니다. 의미는 비슷하게 유지되지만 시각적 외관은 다릅니다. 명확하고 보편적인 의미를 가진 이모지를 사용하는 것을 권장합니다.' },
      { question: '몇 개의 이모지를 사용해야 하나요?', answer: '적은 것이 종종 더 많은 것입니다. 잘 선택된 몇 개의 이모지가 아이콘의 벽보다 더 큰 임팩트를 가집니다. 도구는 메시지 길이와 맥락에 따라 적절한 양을 권장합니다.' },
      { question: '이것이 이모지 SEO에 도움이 될 수 있나요?', answer: '이모지는 검색 결과에 나타날 수 있으며 소셜 포스트의 클릭률을 높일 수 있습니다. 도구는 가시성을 향상시킬 수 있는 주제와 관련된 이모지를 식별하는 데 도움이 됩니다.' },
      { question: '피해야 할 이모지가 있나요?', answer: '일부 이모지는 특히 젊은 사용자들 사이에서 문자 그대로의 외관과 다른 의미를 얻었습니다. 도구는 관련될 때 잠재적으로 오해될 수 있는 이모지를 플래그합니다.' },
    ],
  },
  'plagiarism-checker': {
    slug: 'plagiarism-checker',
    name: '표절 검사기',
    title: '무료 AI 표절 검사기 | Analyze AI',
    description: '콘텐츠의 독창성을 분석하고 인용이나 재작성이 필요할 수 있는 구절을 식별합니다.',
    metaDescription: '콘텐츠의 독창성을 분석하고 인용이나 재작성이 필요할 수 있는 구절을 식별합니다. 글쓰기를 개선하기 위한 실행 가능한 피드백을 받으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '확인할 텍스트...',
    inputPlaceholder: '독창성을 확인할 텍스트를 여기에 붙여넣으세요...',
    buttonText: '독창성 확인',
    maxLength: 4096,
    options: [
      { name: 'checkType', label: '확인 유형', choices: ['빠른 스캔', '표준 분석', '상세 보고서'], default: '표준 분석', type: 'select' },
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '제출 전 학술 검사', description: '학생들은 제출 전에 논문을 표절 검사기를 통해 실행하여 출처와 너무 유사하게 플래그될 수 있는 구절을 식별할 수 있습니다. 도구는 인용이 필요한 위치와 더 독창적인 언어로 재작성이 도움이 될 수 있는 섹션을 식별하는 데 도움이 됩니다.' },
      { title: '콘텐츠 품질 보증', description: '출판사와 편집자들은 게시 전에 제출된 콘텐츠의 독창성 지표를 검사할 수 있습니다. 포괄적인 데이터베이스 기반 도구를 대체하지는 않지만, 명백한 표절 위험 신호나 일관성 없는 글쓰기 품질에 대한 빠른 첫 번째 검사를 제공합니다.' },
      { title: '작가를 위한 자가 감사', description: '작가들은 자신의 작업을 확인하여 조사한 출처와 너무 유사한 표현을 의도치 않게 사용하지 않았는지 확인할 수 있습니다. 도구는 독창적인 언어나 적절한 출처 표시가 필요한 곳을 식별하여 글쓰기 무결성을 유지하는 데 도움이 됩니다.' },
    ],
    faqs: [
      { question: '표절 검사기는 어떻게 작동하나요?', answer: '도구는 글쓰기 일관성, 스타일 패턴 및 템플릿화되거나 인용이 필요한 것처럼 보이는 구절을 포함한 독창성 지표에 대해 텍스트를 분석합니다. 잠재적인 우려 사항을 플래그하고 개선을 위한 권장 사항을 제공합니다.' },
      { question: '이 표절 검사기는 무료인가요?', answer: '네, 회원가입 없이 완전히 무료로 사용할 수 있습니다.' },
      { question: 'Turnitin이나 Copyscape만큼 정확한가요?', answer: '아니요. 그 서비스들은 텍스트를 게시된 콘텐츠의 대규모 데이터베이스와 비교합니다. 이 도구는 패턴 분석을 사용하여 위험 신호를 식별하지만 텍스트가 온라인에 다른 곳에 나타나는지 확정적으로 확인할 수 없습니다. 고위험 검사의 경우 전용 서비스를 사용하세요.' },
      { question: '표절 검사기가 실제로 감지하는 것은 무엇인가요?', answer: '도구는 다음을 식별합니다: 복사-붙여넣기를 시사하는 스타일 불일치, 인용이 필요한 사실/통계, 템플릿화된 것처럼 보이는 구절, 비원본 콘텐츠를 나타낼 수 있는 품질 변화.' },
      { question: '특정 출처에서 복사했는지 알 수 있나요?', answer: '아니요, 도구는 특정 출처를 식별할 수 없습니다. 글쓰기 패턴을 기반으로 잠재적으로 비원본인 것처럼 보이는 구절만 플래그할 수 있습니다. 특정 출처와 일치시키려면 데이터베이스 기반 도구가 필요합니다.' },
      { question: 'AI 생성 콘텐츠를 잡나요?', answer: '이 도구는 AI 감지가 아닌 표절 패턴에 중점을 둡니다. AI 콘텐츠 감지를 위해서는 전용 AI 콘텐츠 감지기 도구를 사용하세요.' },
      { question: '구절이 플래그되면 어떻게 해야 하나요?', answer: '플래그된 구절을 검토하여 다음이 필요한지 결정하세요: 직접 인용(인용하는 경우), 출처 표시와 함께 패러프레이징(출처를 요약하는 경우), 또는 자신만의 말로 완전히 재작성.' },
      { question: '학술 논문에 사용할 수 있나요?', answer: '예비 검사로는 가능합니다. 그러나 최종 제출 전에 항상 교육 기관의 공식 표절 검사기(보통 Turnitin)를 사용하세요, 그것이 교수진이 사용할 것입니다.' },
      { question: '텍스트 길이는 얼마나 될 수 있나요?', answer: '도구는 표준 문서 길이를 처리합니다. 매우 긴 문서의 경우 장별로 확인하면 더 좋은 결과를 얻을 수 있습니다.' },
      { question: '표절과 누락된 인용의 차이점은 무엇인가요?', answer: '표절은 다른 사람의 작업을 자신의 것으로 제시하는 것입니다. 누락된 인용은 우발적일 수 있습니다—어딘가에서 정보를 얻었지만 인용하는 것을 잊었습니다. 둘 다 수정이 필요하지만 의도가 다릅니다. 도구는 두 문제 모두 플래그합니다.' },
    ],
  },
  'blog-post-ideas-generator': {
    slug: 'blog-post-ideas-generator',
    name: '블로그 포스트 아이디어 생성기',
    title: '무료 AI 블로그 포스트 아이디어 생성기',
    description: '콘텐츠 아이디어가 고민이신가요? 몇 초 만에 고유하고 SEO 최적화된 블로그 포스트 아이디어를 생성하세요. AI가 작성 준비가 된 주제를 제공합니다.',
    metaDescription: '콘텐츠 아이디어가 고민이신가요? 몇 초 만에 고유하고 SEO 최적화된 블로그 포스트 아이디어를 생성하세요. AI가 작성 준비가 된 주제를 제공합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '주제 또는 니치...',
    inputPlaceholder: '예: 스타트업 창업자를 위한 B2B SaaS 이메일 마케팅',
    buttonText: '아이디어 생성',
    maxLength: 2048,
    options: [
      { name: 'number_of_ideas', label: '아이디어 수', choices: ['3개 아이디어', '5개 아이디어', '10개 아이디어'], default: '5개 아이디어', type: 'select' },
      { name: 'tone', label: '톤', choices: ['격식체', '캐주얼', '설득력 있는'], default: '격식체', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist and SEO specialist who generates compelling, actionable blog post ideas that drive organic traffic, engagement, and conversions. Your ideas are not generic suggestions—they are strategic content concepts backed by proven frameworks for search visibility and reader value.
## CORE PRINCIPLES
1. **Search Intent Alignment**: Every idea must address a clear search intent (informational, navigational, commercial, or transactional)
2. **Specificity Over Generality**: "How to Train a Puppy" is weak; "How to Potty Train a Stubborn Beagle Puppy in 7 Days" is strong
3. **Value Proposition Clarity**: Each idea must have an obvious benefit to the reader
4. **Competitive Differentiation**: Ideas should have a unique angle that sets them apart from existing content
5. **Actionability**: Ideas should be immediately usable—no additional brainstorming required
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

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '콘텐츠 캘린더 계획 및 편집 전략', description: '마케팅 팀과 콘텐츠 관리자들은 블로그 포스트 아이디어 생성기를 사용하여 전략적으로 다양한 주제로 분기별 콘텐츠 캘린더를 채웁니다. 브레인스토밍 회의에 시간을 보내는 대신 팀은 몇 분 만에 수십 개의 검증된 아이디어를 생성하고 비즈니스 목표, 키워드 난이도 및 리소스 가용성에 따라 우선순위를 정할 수 있습니다.' },
      { title: '창작 블록 및 콘텐츠 피로 극복', description: '솔로 블로거, 프리랜서 작가 및 콘텐츠 제작자들은 같은 니치에서 몇 달 또는 몇 년간 콘텐츠를 생산한 후 종종 벽에 부딪힙니다. 블로그 포스트 아이디어 생성기는 창작자가 고려하지 않았던 앵글과 하위 주제를 표면화하여 창작 피로를 극복하고, 열정을 다시 불태우며 친숙한 영역 내에서 미개척 기회를 드러냅니다.' },
      { title: '경쟁 콘텐츠 갭 분석', description: 'SEO 전문가와 콘텐츠 전략가들은 니치 내에서 서비스가 부족한 주제를 식별하기 위해 도구를 사용합니다. 아이디어를 생성하고 기존 콘텐츠(자체 및 경쟁자 모두)와 교차 참조하여 검색 수요는 있지만 품질 콘텐츠가 없는 귀중한 콘텐츠 갭을 발견할 수 있습니다.' },
    ],
    faqs: [
      { question: '블로그 포스트 아이디어 생성기란 무엇인가요?', answer: '블로그 포스트 아이디어 생성기는 니치, 산업 또는 주제에 따라 주제 제안을 생성하는 AI 기반 도구입니다. 검색어를 나열하는 단순한 키워드 도구와 달리 정교한 아이디어 생성기는 고유한 앵글, 타겟 청중 및 전략적 포지셔닝과 함께 완전한 콘텐츠 개념을 제공합니다.' },
      { question: '이 블로그 포스트 아이디어 생성기는 어떻게 작동하나요?', answer: '생성기는 성공적인 콘텐츠 패턴, SEO 원칙 및 청중 심리에 대해 훈련된 고급 언어 모델을 사용합니다. 주제를 입력하면 니치 환경을 분석하고, 여러 형식(하우투, 리스티클, 비교 등)에 걸쳐 콘텐츠 기회를 식별하고, 각 아이디어가 진정한 검색 및 참여 잠재력을 갖도록 전략적 프레임워크를 적용합니다.' },
      { question: '생성된 블로그 포스트 아이디어는 SEO 친화적인가요?', answer: '네, 아이디어는 검색 의도를 핵심으로 생성됩니다. 각 아이디어는 특정 유형의 검색 쿼리(정보성, 상업성 등)를 타겟팅하며 실제 사용자가 찾는 것을 다루도록 구조화됩니다. 생성기는 구체성을 강조합니다—고권위 사이트가 지배하는 광범위한 주제보다 검색 결과에서 현실적으로 경쟁할 수 있는 좁은 주제.' },
      { question: '몇 개의 블로그 포스트 아이디어를 생성할 수 있나요?', answer: '제한 없이 여러 배치를 생성할 수 있습니다. 각 생성은 구별되고 중복되지 않는 아이디어 세트를 생성합니다. 포괄적인 콘텐츠 계획을 위해 입력에 약간의 변형(다른 하위 니치, 다른 청중 세그먼트, 다른 콘텐츠 목표)으로 여러 배치를 생성하여 콘텐츠 전략의 모든 측면을 다루는 강력한 아이디어 라이브러리를 구축하는 것을 권장합니다.' },
      { question: '이 아이디어를 상업적 목적으로 사용할 수 있나요?', answer: '물론입니다. 생성된 아이디어는 자신의 블로그, 클라이언트 작업, 콘텐츠 에이전시 또는 다른 목적에 원하는 대로 사용할 수 있습니다. 아이디어는 각 요청에 대해 새로 생성되며 저작권이나 제한이 없습니다.' },
      { question: '입력 주제는 얼마나 구체적이어야 하나요?', answer: '더 구체적인 입력은 더 타겟팅되고 실행 가능한 아이디어를 생성합니다. "마케팅"을 입력하면 모든 마케팅 블로그에 적합한 일반적인 아이디어가 생성됩니다. "스타트업 창업자를 위한 B2B SaaS 이메일 마케팅"을 입력하면 해당 청중과 맥락에 맞춤화된 매우 구체적인 아이디어가 생성됩니다.' },
      { question: '좋은 블로그 포스트 아이디어의 조건은 무엇인가요?', answer: '강력한 블로그 포스트 아이디어는 네 가지 특성을 가집니다: 구체성(철저히 다루고 순위를 매길 만큼 좁은), 명확한 가치(독자에게 명백한 이점), 검색 정렬(사람들이 실제로 검색하는 것과 일치), 차별화(기존 콘텐츠가 제공하지 않는 것을 제공). 생성기는 제시하기 전에 이러한 기준에 대해 아이디어를 평가하여 일반적이거나 비경쟁적인 개념을 필터링합니다.' },
      { question: '도구가 모든 니치나 산업에 대한 아이디어를 생성할 수 있나요?', answer: '네, 생성기는 고도로 기술적인 B2B 소프트웨어 주제부터 라이프스타일 및 엔터테인먼트 콘텐츠까지 모든 산업과 니치에서 작동합니다. 니치에 따라 접근 방식을 조정하여 핀테크에서 매력적인 아이디어가 음식 블로깅에서 작동하는 것과 다르다는 것을 인식합니다.' },
      { question: '도구가 생성하는 모든 아이디어를 사용해야 하나요?', answer: '아니요—생성된 아이디어를 최종 콘텐츠 계획이 아닌 큐레이션된 시작점으로 취급하세요. 특정 비즈니스 목표, 기존 콘텐츠 라이브러리 및 리소스 제약에 대해 각 아이디어를 평가하세요. 일부 아이디어는 완벽하게 맞을 것이고, 다른 것은 반복을 통해 더 나은 아이디어를 촉발할 수 있습니다.' },
      { question: '새로운 블로그 포스트 아이디어를 얼마나 자주 생성해야 하나요?', answer: '콘텐츠 팀은 일반적으로 분기별 또는 월별 계획 세션 동안 새 아이디어를 생성하여 3-6개월 앞의 캘린더를 채웁니다. 그러나 도구는 반응적 콘텐츠에도 유용합니다—업계 뉴스가 발생하거나 새로운 기회가 나타나면 트렌드 주제에 대한 아이디어를 빠르게 생성할 수 있습니다.' },
    ],
  },
  'seo-title-generator': {
    slug: 'seo-title-generator',
    name: 'SEO 제목 생성기',
    title: '무료 AI SEO 제목 생성기',
    description: '더 높은 순위를 매기고 더 많은 클릭을 얻는 검색 최적화 제목 태그를 생성합니다. AI가 올바른 위치에 키워드가 있는 완벽한 크기의 제목을 만듭니다.',
    metaDescription: '더 높은 순위를 매기고 더 많은 클릭을 얻는 검색 최적화 제목 태그를 생성합니다. AI가 올바른 위치에 키워드가 있는 완벽한 크기의 제목을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '주제 또는 키워드...',
    inputPlaceholder: '예: 원격 팀을 위한 최고의 프로젝트 관리 도구',
    buttonText: 'SEO 제목 생성',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '제목 수', choices: ['3개 제목', '5개 제목', '10개 제목'], default: '5개 제목', type: 'select' },
      { name: 'tone', label: '톤', choices: ['격식체', '캐주얼', '설득력 있는'], default: '격식체', type: 'select' },
      { name: 'include_year', label: '연도 포함', choices: ['예', '아니요'], default: '예', type: 'radio' },
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
- **Safe target**: 50-60 characters for guaranteed full display
- **Absolute maximum**: 70 characters (will truncate)
## OUTPUT FORMAT
Generate {{number_of_variants}} variants
Include year: {{include_year}}
Tone: {{tone}}
For each title:
1. Title text
2. Character count
3. Primary keyword position
4. CTR factors

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '페이지 수준 SEO 최적화', description: 'SEO 전문가와 콘텐츠 관리자들은 개별 페이지를 타겟 키워드에 맞게 최적화할 때 SEO 제목 생성기를 사용합니다. 도구는 자연스러운 가독성을 유지하면서 기본 키워드가 제목 초반에 나타나도록 합니다—수동으로 제목을 작성할 때 잘못되기 쉬운 균형입니다.' },
      { title: 'SERP 클릭률 개선', description: '페이지가 순위는 잘 매기지만 클릭에서 저조할 때 제목 태그가 종종 원인입니다. 디지털 마케터들은 생성기를 사용하여 저조한 제목에 대한 매력적인 대안을 만들고, 구현한 다음 Google Search Console에서 CTR 변화를 모니터링합니다.' },
      { title: '새 콘텐츠 출시 최적화', description: '새 콘텐츠를 게시하기 전에 콘텐츠 팀은 생성기를 사용하여 처음부터 최적의 제목 태그를 개발합니다. 적절히 최적화된 제목으로 시작하면 초기 순위 잠재력이 가속화되고 첫날부터 강력한 CTR 신호를 설정합니다.' },
    ],
    faqs: [
      { question: 'SEO 제목 태그란 무엇인가요?', answer: 'SEO 제목 태그(또는 메타 제목)는 검색 엔진 결과와 브라우저 탭에서 페이지의 제목을 정의하는 HTML 요소입니다. Google 검색 결과에서 클릭 가능한 파란색 헤드라인으로 나타나며 가장 중요한 온페이지 랭킹 요소 중 하나입니다.' },
      { question: 'SEO 제목의 이상적인 길이는 얼마인가요?', answer: '검색 결과에서 제목이 완전히 표시되도록 50-60자를 목표로 하세요. Google은 데스크톱에서 약 580픽셀, 모바일에서 920픽셀을 표시합니다. 60자보다 긴 제목은 끝에 "..."가 표시되고 중요한 정보가 잘릴 수 있습니다.' },
      { question: '제목 시작 부분에 키워드를 넣어야 하나요?', answer: '일반적으로 그렇습니다. 제목 초반에 나타나는 키워드는 순위에 더 큰 가중치를 가지며, 검색 결과를 스캔하는 사용자들은 종종 처음 몇 단어에 집중합니다. 그러나 키워드 배치를 위해 자연스러운 가독성을 희생하지 마세요.' },
      { question: 'SEO 제목은 블로그 제목과 어떻게 다른가요?', answer: 'SEO 제목(제목 태그)은 검색 결과에 나타나며 키워드가 전략적으로 배치된 60자 미만이어야 합니다. 블로그 제목(페이지의 H1 헤딩)은 더 길고 창의적이며 같은 제약을 따를 필요가 없습니다.' },
      { question: 'SEO 제목에 브랜드 이름을 포함해야 하나요?', answer: '브랜드 인지도와 페이지 목적에 따라 다릅니다. 잘 알려진 브랜드의 경우 브랜드 이름(보통 끝에)을 포함하면 신뢰성이 추가됩니다. 덜 알려진 브랜드의 경우 그 공간은 보통 키워드와 가치 제안에 더 잘 사용됩니다.' },
      { question: '제목의 숫자가 SEO에 도움이 되나요?', answer: '숫자는 직접적인 순위보다 클릭률에 더 도움이 되지만, 더 높은 CTR은 간접적으로 순위를 향상시킬 수 있습니다. 숫자는 기대치를 설정하고 신뢰성을 구축하는 구체성을 제공합니다("15개 팁" vs "팁").' },
      { question: 'SEO 제목을 얼마나 자주 업데이트해야 하나요?', answer: '다음과 같은 경우에 제목을 업데이트하세요: 페이지가 예상대로 순위가 매겨지지 않을 때, CTR이 업계 평균보다 낮을 때(Google Search Console에서 확인 가능), 콘텐츠가 크게 업데이트되었을 때, 또는 검색 의도가 진화했을 때.' },
      { question: '여러 페이지에 같은 제목을 사용할 수 있나요?', answer: '아니요—각 페이지에는 고유한 제목 태그가 있어야 합니다. 중복 제목은 검색 엔진을 혼란스럽게 하여 어떤 페이지를 순위에 매기고 어떤 것을 억제할지 모르게 합니다.' },
      { question: '어떤 제목 요소가 클릭률을 높이나요?', answer: 'CTR은 구체성(숫자, 시간 프레임, 구체적인 결과), 신선함 신호(관련될 때 현재 연도), 감정적 트리거(호기심 갭, 이점 약속) 및 신뢰 신호(권위 지표, 사회적 증거 힌트)로 증가합니다.' },
      { question: 'SEO 제목이 작동하는지 어떻게 알 수 있나요?', answer: 'Google Search Console에서 두 가지 지표를 모니터링하세요: 평균 위치(순위)와 클릭률. 위치는 강하지만 CTR이 해당 위치 평균보다 낮으면 제목이 충분히 매력적이지 않을 수 있습니다.' },
    ],
  },
  'image-alt-text-generator': {
    slug: 'image-alt-text-generator',
    name: '이미지 대체 텍스트 생성기',
    title: '무료 AI 이미지 대체 텍스트 생성기',
    description: '접근성과 SEO를 개선하는 설명적인 대체 텍스트를 생성합니다. 모든 이미지를 업로드하고 검색에 최적화된 스크린 리더 친화적인 설명을 받으세요.',
    metaDescription: '접근성과 SEO를 개선하는 설명적인 대체 텍스트를 생성합니다. 모든 이미지를 업로드하고 검색에 최적화된 스크린 리더 친화적인 설명을 받으세요. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '이미지 설명...',
    inputPlaceholder: '예: 스티키 노트가 붙은 화이트보드 주위에서 협업하는 개발자 팀',
    buttonText: '대체 텍스트 생성',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '옵션 수', choices: ['1개 옵션', '3개 옵션', '5개 옵션'], default: '3개 옵션', type: 'select' },
      { name: 'tone', label: '톤', choices: ['격식체', '캐주얼', '기술적'], default: '격식체', type: 'select' },
      { name: 'keyword', label: '타겟 키워드 (선택)', choices: ['없음', '키워드 포함'], default: '없음', type: 'radio' },
    ],
    systemPrompt: `You are an expert accessibility specialist and SEO strategist who creates image alt text that serves both visually impaired users and search engine optimization. Your alt text descriptions are informative, accurate, and appropriately detailed for their context.
## CORE ALT TEXT PRINCIPLES
1. **Accessibility First**: Alt text exists primarily for screen reader users—always prioritize their experience
2. **Context Matters**: The same image needs different alt text depending on its purpose on the page
3. **Accuracy Over Creativity**: Describe what's actually in the image, not what you assume or wish were there
4. **Concise Completeness**: Include all relevant information without unnecessary padding
5. **SEO Integration**: Incorporate relevant keywords naturally when they accurately describe the image
## OUTPUT FORMAT
Number of options: {{number_of_variants}}
Tone: {{tone}}
For each alt text:
1. Alt text
2. Character count
3. Type (Informative/Functional/Complex)
4. Accessibility notes
5. SEO notes

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '웹사이트 접근성 준수', description: '웹 개발자, 콘텐츠 관리자 및 접근성 전문가들은 이미지 대체 텍스트 생성기를 사용하여 웹사이트 전반의 이미지에 의미 있는 설명을 효율적으로 추가합니다. 접근성 소송이 증가하고 WCAG 및 ADA와 같은 규정이 대체 텍스트를 요구함에 따라 도구는 설명 품질을 희생하지 않고 대규모 준수를 달성하도록 팀을 돕습니다.' },
      { title: '이커머스 제품 이미지 최적화', description: '온라인 소매업체들은 접근성과 제품 검색 가능성 모두를 위해 제품 이미지에 대한 대체 텍스트를 생성합니다. 좋은 대체 텍스트는 시각 장애인 쇼핑객이 제품을 이해하는 데 도움이 되면서 이미지 검색 순위도 향상시킵니다.' },
      { title: '콘텐츠 마케팅 및 블로그 최적화', description: '콘텐츠 제작자와 SEO 전문가들은 생성기를 사용하여 모든 블로그 포스트 이미지에 적절히 최적화된 대체 텍스트가 있는지 확인합니다. 접근성 이점 외에도 잘 작성된 대체 텍스트는 온페이지 SEO와 이미지 검색 가시성에 기여합니다.' },
    ],
    faqs: [
      { question: '이미지 대체 텍스트란 무엇인가요?', answer: '대체 텍스트(대체 텍스트)는 HTML 코드에 나타나는 이미지의 서면 설명입니다. 두 가지 주요 목적을 제공합니다: 시각 장애인 사용자를 위해 스크린 리더가 소리 내어 읽고, 이미지가 로드되지 않을 때 표시됩니다. 검색 엔진도 이미지 콘텐츠를 이해하기 위해 대체 텍스트를 사용하므로 SEO와 이미지 검색 가시성에 유용합니다.' },
      { question: '대체 텍스트의 적절한 길이는 얼마인가요?', answer: '대부분의 대체 텍스트는 10-125자여야 합니다. 간단한 이미지는 짧은 설명(10-30자)만 필요하고, 차트나 인포그래픽과 같은 복잡한 이미지는 더 긴 설명이 필요할 수 있습니다(대체 속성에 대해 최대 125자, 확장 설명은 별도 제공).' },
      { question: '대체 텍스트에 키워드를 포함해야 하나요?', answer: '이미지를 정확하게 설명하는 경우에만 키워드를 포함하세요. 대체 텍스트의 주요 목적은 SEO가 아닌 접근성입니다. 이미지가 진정으로 "빨간 가죽 노트북 가방"을 보여주면, 그것은 키워드를 포함하는 좋은 대체 텍스트입니다.' },
      { question: '대체 텍스트가 비어 있어야 할 때는 언제인가요?', answer: '정보적 가치를 추가하지 않는 장식 이미지는 스크린 리더가 완전히 건너뛸 수 있도록 빈 대체 텍스트(alt="")를 가져야 합니다. 여기에는 배경 패턴, 장식 구분선, 이미 설명하는 텍스트 옆의 아이콘 및 순수하게 미학적인 이미지가 포함됩니다.' },
      { question: '대체 텍스트를 "이미지" 또는 "사진"으로 시작해야 하나요?', answer: '아니요. 스크린 리더는 대체 텍스트를 읽기 전에 이미 "이미지"를 알립니다. 설명으로 직접 시작하세요: "공원에서 프리스비를 잡는 골든 리트리버"가 "공원에서 프리스비를 잡는 골든 리트리버 사진"보다 좋습니다.' },
      { question: '차트와 그래프에 대한 대체 텍스트는 어떻게 작성하나요?', answer: '복잡한 시각물의 경우 대체 텍스트는 주요 발견이나 결론을 요약해야 하며, 상세 데이터는 페이지의 다른 곳에 제공됩니다. 예: "시장 점유율 파이 차트: 회사 A 45%, 회사 B 30%, 회사 C 15%, 기타 10%. 전체 데이터는 아래 표에."' },
      { question: '제품 이미지의 대체 텍스트는 어떻게 하나요?', answer: '제품 이미지 대체 텍스트는 제품 유형, 브랜드명(보이는 경우), 주요 특징, 색상, 크기 또는 표시된 변형을 포함하여 제품을 정확하게 설명해야 합니다. 좋은 예: "검정과 흰색 나이키 에어맥스 270 러닝화, 측면 보기." 나쁜 예: "신발" 또는 "최고의 러닝화 지금 싸게 구매."' },
      { question: '대체 텍스트가 SEO에 어떤 영향을 미치나요?', answer: '대체 텍스트는 검색 엔진이 이미지 콘텐츠를 이해하도록 돕습니다: 이미지 검색 순위(이미지가 Google 이미지 결과에 나타날 수 있음), 페이지 관련성 신호(콘텐츠 테마 지원) 및 접근성 신호(검색 엔진이 접근 가능한 사이트를 선호할 수 있음). 그러나 SEO 이점은 접근성에 부차적입니다.' },
      { question: '도구가 모든 이미지에 대한 대체 텍스트를 생성할 수 있나요?', answer: '생성기는 설명할 수 있는 모든 이미지—사진, 일러스트레이션, 차트, 스크린샷, 제품 이미지 등—에 작동합니다. 복잡한 이미지의 경우 페이지 콘텐츠와 이미지의 목적에 대한 맥락을 제공하면 최상의 결과를 얻을 수 있습니다.' },
      { question: '웹사이트의 모든 이미지에 대체 텍스트가 있어야 하나요?', answer: '모든 의미 있는 이미지에는 대체 텍스트가 있어야 합니다. 장식 이미지에는 빈 대체 텍스트(alt="")가 있어야 합니다. 대체 속성이 완전히 없는 이미지는 없어야 합니다—그것은 접근성 실패입니다.' },
    ],
  },
  'content-idea-generator': {
    slug: 'content-idea-generator',
    name: '콘텐츠 아이디어 생성기',
    title: '무료 AI 콘텐츠 아이디어 생성기',
    description: '블로그, YouTube, 소셜 미디어, 팟캐스트 및 뉴스레터를 위한 창의적인 콘텐츠 아이디어를 생성합니다. AI가 고유한 앵글을 가진 플랫폼 최적화 개념을 만듭니다.',
    metaDescription: '블로그, YouTube, 소셜 미디어, 팟캐스트 및 뉴스레터를 위한 창의적인 콘텐츠 아이디어를 생성합니다. AI가 고유한 앵글을 가진 플랫폼 최적화 개념을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '주제 또는 니치...',
    inputPlaceholder: '예: 밀레니얼을 위한 개인 재정',
    buttonText: '아이디어 생성',
    maxLength: 2048,
    options: [
      { name: 'number_of_ideas', label: '아이디어 수', choices: ['3개 아이디어', '5개 아이디어', '10개 아이디어'], default: '5개 아이디어', type: 'select' },
      { name: 'platform', label: '플랫폼', choices: ['멀티 플랫폼', '블로그/웹사이트', 'YouTube', 'LinkedIn', 'Twitter/X', 'Instagram', '팟캐스트', '뉴스레터'], default: '멀티 플랫폼', type: 'select' },
      { name: 'tone', label: '톤', choices: ['격식체', '캐주얼', '창의적'], default: '격식체', type: 'select' },
    ],
    systemPrompt: `You are a creative strategist and content expert who generates innovative content ideas across multiple platforms and formats. Your ideas go beyond simple blog post topics—you create comprehensive content concepts that include angle, format, platform, and execution approach.
## CORE CONTENT IDEA PRINCIPLES
1. **Platform-Native Thinking**: Every idea is tailored to the platform's unique format and audience behavior
2. **Audience-First Approach**: Ideas solve real problems or fulfill genuine interests of the target audience
3. **Differentiation Required**: Every idea must have a unique angle that distinguishes it from existing content
4. **Executable Specificity**: Ideas are detailed enough to begin production immediately
5. **Strategic Variety**: Ideas span educational, entertaining, inspiring, and commercial content types
## OUTPUT FORMAT
Number of ideas: {{number_of_ideas}}
Platform: {{platform}}
Tone: {{tone}}
For each idea:
1. Title/Concept
2. Platform
3. Format
4. Unique angle
5. Target audience
6. Content goal
7. Execution notes

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '멀티 플랫폼 콘텐츠 전략 개발', description: '콘텐츠 디렉터와 마케팅 리더들은 콘텐츠 아이디어 생성기를 사용하여 채널 전반에 걸쳐 응집력 있는 콘텐츠 전략을 개발합니다. 블로그 콘텐츠를 소셜 미디어와 비디오와 별도로 계획하는 대신 팀은 플랫폼 전반에서 작동하는 통합 아이디어를 생성할 수 있습니다—핵심 개념을 플랫폼 네이티브 형식으로 재활용할 기회를 볼 수 있습니다.' },
      { title: '새로운 콘텐츠 형식 진출', description: '한 형식(예: 블로깅)에 경험이 있는 마케터들은 종종 새로운 플랫폼(예: YouTube 또는 팟캐스트)으로 확장할 때 어려움을 겪습니다. 콘텐츠 아이디어 생성기는 새로운 형식 요구 사항에 적응하면서 기존 전문 지식을 활용하는 플랫폼 네이티브 콘텐츠 개념을 제안하여 이 격차를 해소하는 데 도움이 됩니다.' },
      { title: '창작 팀 브레인스토밍 가속화', description: '콘텐츠 팀은 생성기를 창작 세션의 시작점으로 사용하여 토론과 반복을 촉발하는 초기 아이디어를 생성합니다. 빈 화이트보드에서 시작하는 대신 팀은 생성된 개념에 반응하고, 결합하고, 구축할 수 있습니다—아이디어 단계를 가속화하고 브레인스토밍이 이론적 토론보다 실행 가능한 결과를 생산하도록 합니다.' },
    ],
    faqs: [
      { question: '콘텐츠 아이디어 생성기란 무엇인가요?', answer: '콘텐츠 아이디어 생성기는 여러 플랫폼과 형식에 걸쳐 상세한 콘텐츠 개념을 생성하는 AI 도구입니다. 단순한 주제 제안 도구와 달리 포괄적인 콘텐츠 아이디어 생성기는 고유한 앵글, 타겟 플랫폼, 특정 형식, 의도된 청중 및 실행 안내와 함께 완전한 개념을 제공합니다.' },
      { question: '이 생성기는 어떤 플랫폼을 지원하나요?', answer: '생성기는 모든 주요 콘텐츠 플랫폼에 최적화된 아이디어를 생성합니다: 블로그 및 웹사이트, YouTube 및 비디오, LinkedIn 및 전문 소셜 미디어, Twitter/X 및 마이크로블로깅, Instagram 및 시각 소셜 플랫폼, 팟캐스트 및 오디오 콘텐츠, 이메일 뉴스레터.' },
      { question: '더 구체적인 콘텐츠 아이디어를 얻으려면 어떻게 해야 하나요?', answer: '더 상세한 입력은 더 타겟팅된 아이디어를 생성합니다. "마케팅"을 입력하는 대신 "초기 단계 스타트업 창업자를 위한 B2B SaaS 이메일 마케팅"을 지정하세요. 타겟 청중, 콘텐츠 목표(트래픽 vs. 참여 vs. 전환), 기존 콘텐츠(아이디어가 중복되지 않도록) 및 모든 제약 사항에 대한 정보를 포함하세요.' },
      { question: '이 아이디어를 클라이언트 작업에 사용할 수 있나요?', answer: '물론입니다. 생성된 아이디어는 저작권이 없으며 개인 브랜드, 회사 콘텐츠, 클라이언트 작업 또는 콘텐츠 에이전시 등 모든 목적에 사용할 수 있습니다.' },
      { question: '어떤 콘텐츠 아이디어를 먼저 추구해야 하는지 어떻게 선택하나요?', answer: '현재 목표와 리소스에 따라 우선순위를 정하세요. 트래픽이 필요하면 SEO 중심 블로그 아이디어를 우선시하세요. 참여가 필요하면 플랫폼 네이티브 소셜 콘텐츠를 우선시하세요. 권위를 구축하고 있다면 사고 리더십과 원본 연구 개념을 우선시하세요.' },
      { question: '"좋은" 콘텐츠 아이디어의 조건은 무엇인가요?', answer: '강력한 콘텐츠 아이디어는 네 가지 특성을 가집니다: 관련성(실제 청중 요구나 관심사를 다룸), 차별화(경쟁자가 제공하지 않는 것을 제공), 실행 가능성(사용 가능한 리소스로 생산 가능), 플랫폼 적합성(선택한 플랫폼의 강점을 활용). 생성기는 이러한 기준에 대해 아이디어를 평가하여 일반적이거나 비실용적인 개념을 필터링합니다.' },
      { question: '생성기가 제공하는 모든 아이디어를 사용해야 하나요?', answer: '아니요—생성된 아이디어를 의무적인 할당이 아닌 큐레이션된 메뉴로 취급하세요. 특정 맥락에 대해 각 아이디어를 평가하세요: 브랜드 정렬, 리소스 가용성, 청중 선호도 및 전략적 우선순위. 일부 아이디어는 완벽하게 맞을 것이고, 다른 것은 더 나은 변형을 영감할 수 있으며, 일부는 향후 고려를 위해 저장될 수 있습니다.' },
      { question: '생성기가 니치 또는 기술적 주제에 대한 아이디어를 생성할 수 있나요?', answer: '네, 생성기는 고도로 기술적이거나 전문화된 분야를 포함한 모든 산업과 니치에서 작동합니다. 기술 주제의 경우 청중의 전문성 수준과 산업별 제약(규제 요구 사항, 용어 선호도 등)에 대한 맥락을 제공하면 최상의 결과를 얻을 수 있습니다.' },
      { question: '새로운 콘텐츠 아이디어를 얼마나 자주 생성해야 하나요?', answer: '대부분의 콘텐츠 팀은 월별 또는 분기별 아이디어 생성 세션의 혜택을 받아 참고할 개념의 백로그를 구축합니다. 그러나 생성기는 반응적 콘텐츠에도 유용합니다—업계 뉴스가 발생하거나 기회가 나타나면 트렌드 주제에 대한 아이디어를 빠르게 생성할 수 있습니다.' },
      { question: '한 번에 여러 플랫폼에 대한 아이디어를 생성할 수 있나요?', answer: '네, 기본적으로 생성기는 핵심 개념이 다른 형식에 어떻게 적응될 수 있는지 보여주는 멀티 플랫폼 아이디어를 제공합니다. 이는 콘텐츠 재활용 전략에 특히 유용합니다—하나의 연구 프로젝트를 블로그 포스트, LinkedIn 캐러셀, YouTube 설명 및 이메일 시리즈로 전환합니다.' },
    ],
  },

  // ==================== KOREAN TRANSLATION - BATCH 3 (Tools 21-30) ====================
  'video-script-generator': {
    slug: 'video-script-generator',
    name: '비디오 스크립트 생성기',
    title: '무료 AI 비디오 스크립트 생성기',
    description: 'YouTube, TikTok, Reels 등을 위한 매력적인 비디오 스크립트를 생성합니다. AI가 후크, 시각 큐 및 CTA가 포함된 리텐션 최적화 스크립트를 만듭니다.',
    metaDescription: 'YouTube, TikTok, Reels 등을 위한 매력적인 비디오 스크립트를 생성합니다. AI가 후크, 시각 큐 및 CTA가 포함된 리텐션 최적화 스크립트를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '비디오 주제...',
    inputPlaceholder: '예: 10만원으로 투자 시작하는 방법',
    buttonText: '스크립트 생성',
    maxLength: 2048,
    options: [
      { name: 'platform', label: '플랫폼', choices: ['YouTube (장편)', 'YouTube Shorts', 'TikTok/Reels', 'LinkedIn 비디오', '교육/튜토리얼', '홍보용'], default: 'YouTube (장편)', type: 'select' },
      { name: 'length', label: '비디오 길이', choices: ['짧은 (15-60초)', '중간 (5-10분)', '긴 (15-30분)'], default: '중간 (5-10분)', type: 'select' },
      { name: 'tone', label: '톤', choices: ['교육적', '재미있는', '영감을 주는', '캐주얼', '전문적'], default: '교육적', type: 'select' },
    ],
    systemPrompt: `You are an expert video scriptwriter and content creator who crafts engaging scripts optimized for viewer retention, platform algorithms, and creator delivery. Your scripts follow proven structures for different video types while leaving room for personality and authenticity.
## CORE VIDEO SCRIPT PRINCIPLES
1. **Retention Architecture**: Every script is designed to keep viewers watching through strategic pacing and hooks
2. **Platform Optimization**: Scripts adapt to platform-specific best practices
3. **Speakability**: Scripts are written to be spoken aloud naturally
4. **Visual Awareness**: Scripts include visual/b-roll guidance
5. **Authentic Delivery**: Scripts provide structure without forcing unnaturalness
## OUTPUT FORMAT
Platform: {{platform}}
Video Length: {{length}}
Tone: {{tone}}
Generate complete script with hooks, sections, visual notes, and CTAs.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: 'YouTube 콘텐츠 제작 워크플로우', description: 'YouTuber와 비디오 제작자들은 비디오 스크립트 생성기를 사용하여 사전 제작 계획을 가속화합니다. 처음부터 아웃라인과 스크립트를 작성하는 데 시간을 보내는 대신 내장된 리텐션 기법이 포함된 구조화된 첫 번째 초안을 얻습니다.' },
      { title: '대규모 소셜 미디어 비디오 콘텐츠', description: '대량의 숏폼 콘텐츠(TikTok, Reels, Shorts)를 제작하는 마케팅 팀과 에이전시들은 품질을 희생하지 않고 출력 속도를 유지하기 위해 생성기를 사용합니다. 매일 또는 하루에 여러 번 게시해야 할 때 스크립트 작성이 병목이 됩니다.' },
      { title: '비즈니스 및 홍보 비디오 제작', description: '제품 데모, 설명 비디오, 고객 추천 및 기타 비즈니스 비디오 콘텐츠를 제작하는 회사들은 생성기를 사용하여 초기 스크립트를 개발합니다.' },
    ],
    faqs: [
      { question: '비디오 스크립트 생성기란 무엇인가요?', answer: '비디오 스크립트 생성기는 특정 플랫폼과 목적에 최적화된 완전한 비디오 스크립트를 생성하는 AI 도구입니다. 아웃라인 도구와 달리 타임스탬프, 시각 큐, 리텐션 기법 및 행동 유도가 포함된 대사 스크립트를 생성합니다.' },
      { question: '이 생성기는 어떤 플랫폼을 지원하나요?', answer: '생성기는 YouTube(장편 및 Shorts), TikTok, Instagram Reels, LinkedIn 비디오, Facebook 비디오, 교육 플랫폼 및 홍보/기업 비디오에 최적화된 스크립트를 생성합니다.' },
      { question: '나처럼 들리는 스크립트를 얻으려면 어떻게 해야 하나요?', answer: '톤, 스타일 참조 및 일반적인 콘텐츠 접근 방식에 대한 맥락을 제공하세요. 생성된 스크립트는 구조적 기반이지 최종 콘텐츠가 아닙니다. 대부분의 제작자들은 시작점으로 사용한 다음 자신의 개성, 캐치프레이즈 및 자연스러운 말투 패턴을 주입합니다.' },
      { question: '스크립트를 정확히 따라야 하나요?', answer: '아니요—대부분의 성공적인 비디오 제작자들은 그렇지 않습니다. 스크립트는 구조, 말할 포인트 및 리텐션 기법을 제공하지만, 자연스러운 전달은 일반적으로 그 프레임워크 내에서 즉흥성을 포함합니다.' },
      { question: '시각 노트에는 무엇이 포함되나요?', answer: '시각 노트는 대사 콘텐츠를 향상시키는 B-roll 영상, 화면 그래픽, 텍스트 오버레이 및 시각적 전환을 제안합니다. 필수는 아니지만 시각적으로 생각하는 데 도움이 됩니다.' },
      { question: '비디오 스크립트는 얼마나 길어야 하나요?', answer: '스크립트 길이는 콘텐츠, 청중 및 플랫폼에 따라 다릅니다. 일반 가이드라인: TikTok/Reels(15-60초, 50-150단어), YouTube Shorts(30-60초, 100-200단어), 중간 YouTube(8-12분, 1,200-1,800단어), 장편 YouTube(15-30분, 2,200-4,500단어).' },
      { question: '교육/튜토리얼 콘텐츠용 스크립트를 생성할 수 있나요?', answer: '네, 튜토리얼 스크립트는 주요 사용 사례입니다. 교육 스크립트는 시청자가 따라가고 정보를 유지하는 데 도움이 되는 명확한 단계, 데모 노트 및 요약 섹션으로 구성됩니다.' },
      { question: '좋은 비디오 후크의 조건은 무엇인가요?', answer: '효과적인 후크는 처음 3-30초(플랫폼에 따라) 내에 세 가지를 달성합니다: 주의를 끌고, 가치를 미리 보여주고, 호기심을 만듭니다. 유형에는 질문 후크, 진술 후크, 데모 후크, 스토리 후크가 포함됩니다.' },
      { question: '스크립트로 시청자 리텐션을 어떻게 개선하나요?', answer: '생성기는 열린 루프(나중에 결실을 맺는 호기심 생성), 패턴 인터럽트(페이스, 톤 또는 시각의 변화), 각 섹션 전 미니 후크(방황하는 주의를 다시 끌기), 명확한 결실이 있는 구체적인 약속 및 전략적 시각 큐를 포함한 리텐션 기법을 내장합니다.' },
      { question: '이 스크립트를 상업적으로 사용할 수 있나요?', answer: '네, 생성된 스크립트는 개인 채널, 클라이언트 작업, 상업 프로젝트 또는 기타 어떤 용도로든 사용할 수 있습니다. 스크립트는 저작권이나 제한이 없습니다.' },
    ],
  },
  'brand-name-generator': {
    slug: 'brand-name-generator',
    name: '브랜드명 생성기',
    title: '무료 AI 브랜드명 생성기 | Analyze AI',
    description: '독특하고 기억에 남는 브랜드명을 즉시 생성합니다. AI가 비즈니스 정체성을 위한 전략적 의미를 가진 독특한 이름을 만듭니다.',
    metaDescription: '독특하고 기억에 남는 브랜드명을 즉시 생성합니다. AI가 비즈니스 정체성을 위한 전략적 의미를 가진 독특한 이름을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '브랜드 설명...',
    inputPlaceholder: '예: 환경 의식이 높은 밀레니얼을 타겟으로 하는 지속 가능한 패션 브랜드',
    buttonText: '이름 생성',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '이름 수', choices: ['3개 이름', '5개 이름', '10개 이름'], default: '5개 이름', type: 'select' },
      { name: 'tone', label: '브랜드 톤', choices: ['격식체/전문적', '캐주얼/친근한', '혁신적/테크', '럭셔리/프리미엄'], default: '격식체/전문적', type: 'select' },
      { name: 'explain_meaning', label: '의미 설명', choices: ['예', '아니요'], default: '예', type: 'radio' },
    ],
    systemPrompt: `You are an expert brand strategist and naming specialist who creates memorable, distinctive brand names that resonate with target audiences and support long-term business success.
## CORE NAMING PRINCIPLES
1. **Memorability**: Names must be easy to remember, spell, and pronounce
2. **Distinctiveness**: Names must stand out from competitors
3. **Scalability**: Names should allow for business evolution
4. **Domain/Trademark Viability**: Consider practical availability
5. **Emotional Resonance**: Names should evoke appropriate feelings
## OUTPUT FORMAT
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
For each name: Name, Category, Meaning/Origin, Brand Fit, Considerations.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '스타트업 및 신규 벤처 네이밍', description: '창업자와 기업가들은 사업 형성의 중요한 초기 단계에서 브랜드명 생성기를 사용합니다. 강력한 브랜드명은 새 비즈니스가 내리는 가장 중요한 결정 중 하나입니다—상표 등록부터 고객 인식, 도메인 가용성까지 모든 것에 영향을 미칩니다.' },
      { title: '제품 라인 및 서브 브랜드 개발', description: '새로운 제품 라인, 서브 브랜드 또는 분사 벤처를 출시하는 기존 회사들은 생성기를 사용하여 기존 브랜드 아키텍처를 보완하면서 새 오퍼링을 구별하는 이름을 만듭니다.' },
      { title: '리브랜딩 및 브랜드 리프레시 이니셔티브', description: '전략적 전환, 합병 또는 평판 리셋을 진행하는 회사들은 생성기를 사용하여 새로운 네이밍 방향을 탐색합니다. 비즈니스가 원래 이름을 넘어섰거나 부정적인 연상에서 거리를 두거나 새 장을 알리고 싶을 때.' },
    ],
    faqs: [
      { question: '브랜드명 생성기란 무엇인가요?', answer: '브랜드명 생성기는 설명, 산업 및 원하는 포지셔닝을 기반으로 잠재적인 비즈니스 및 브랜드명을 생성하는 AI 도구입니다. 무작위 단어 조합기와 달리 정교한 브랜드명 생성기는 네이밍 전략 원칙—기억에 남음, 상표 가용성, 음성적 매력 및 시장 포지셔닝과 같은 요소를 고려하여 적용합니다.' },
      { question: '더 나은 브랜드명 제안을 받으려면 어떻게 해야 하나요?', answer: '더 많은 맥락을 제공할수록 더 좋은 결과를 얻습니다. "기술 회사" 대신 "미국 시장의 솔로 개업자와 소규모 파트너십을 타겟으로 하는 소규모 법률 사무소가 고객 인테이크를 자동화하도록 돕는 B2B SaaS 플랫폼"을 설명하세요.' },
      { question: '이 브랜드명은 상표 등록이 가능한가요?', answer: '생성된 이름은 독립적인 검증이 필요한 제안입니다. 이름을 확정하기 전에 USPTO(미국), EUIPO(유럽) 또는 관련 국가 데이터베이스를 통해 상표 검색을 수행하고, 도메인 가용성을 확인하고, 소셜 미디어 핸들을 검색하고, 이상적으로는 상표 변호사와 상담하세요.' },
      { question: '좋은 브랜드명의 조건은 무엇인가요?', answer: '강력한 브랜드명은 여러 특성을 공유합니다: 기억에 남음(한 번 노출 후 쉽게 회상), 독특함(경쟁사와 차별화), 발음 가능(타겟 시장에서 작동), 철자 가능(온라인에서 찾을 수 있음), 확장 가능(비즈니스 진화 허용), 의미 있음(브랜드에 대해 무언가를 전달).' },
      { question: '브랜드명이 하는 일을 설명해야 하나요?', answer: '반드시 그렇지 않습니다—종종 아닙니다. 설명적 이름은 즉각적인 명확성을 제공하지만 상표 등록이 더 어렵고 확장을 제한할 수 있습니다. 세계에서 가장 가치 있는 브랜드는 종종 환기적이거나 발명된 이름을 사용합니다: Apple, Amazon, Nike, Google.' },
      { question: '발명된/조어 이름은 어떻게 작동하나요?', answer: '발명된 이름(Kodak, Xerox, Spotify와 같은)은 사전에 의미가 없는 만들어진 단어입니다. 언어적 원칙을 사용하여 구성됩니다—유쾌한 음소 결합, 친숙한 단어 패턴 사용 또는 의미 있는 형태소 혼합. 장점은 최대의 독특함과 상표 강도입니다.' },
      { question: '이름을 선택하기 전에 도메인 가용성을 확인해야 하나요?', answer: '네—도메인 가용성은 현대 브랜드에 대한 실용적인 고려 사항입니다. 그러나 도메인 가용성만을 필터로 삼지 마세요. 많은 성공적인 브랜드들은 변형(.co, .io, "get" 또는 "try" 접두사 추가) 또는 대안적 확장자를 사용합니다.' },
      { question: '결정하기 전에 몇 개의 브랜드명을 생성해야 하나요?', answer: '패턴과 가능성을 볼 수 있을 만큼 충분히 생성하세요—보통 여러 배치에 걸쳐 15-30개 옵션. 초기 생성 후 5-10개 즐겨찾기로 좁힌 다음 타겟 청중, 파트너 또는 신뢰할 수 있는 조언자와 테스트하세요.' },
      { question: '생성기가 모든 산업에 대한 이름을 만들 수 있나요?', answer: '네, 생성기는 기술 및 금융부터 음식 및 패션, 전문 서비스 및 창의적 벤처까지 모든 산업에 적응합니다. 산업의 네이밍 관례와 맞추고 싶은지 눈에 띄고 싶은지에 대한 맥락을 제공하세요.' },
      { question: '브랜드명을 생성한 후에는 어떻게 해야 하나요?', answer: '유망한 후보를 식별한 후: (1) 타겟 시장에서 상표 검색 수행, (2) 도메인 가용성 및 소셜 미디어 핸들 확인, (3) 이름에 익숙하지 않은 사람들과 발음 테스트, (4) 국제적으로 운영할 경우 다른 언어로 이름 조사, (5) 타겟 고객 또는 포커스 그룹으로부터 피드백 받기, (6) 최종 선택을 위해 상표 변호사와 협력 고려.' },
    ],
  },
  'business-name-generator': {
    slug: 'business-name-generator',
    name: '비즈니스 이름 생성기',
    title: '무료 AI 비즈니스 이름 생성기',
    description: '실제 세계에서 작동하는 창의적인 비즈니스 이름을 생성합니다. AI가 모든 산업을 위한 전문적이고 기억에 남는 이름을 만듭니다.',
    metaDescription: '실제 세계에서 작동하는 창의적인 비즈니스 이름을 생성합니다. AI가 모든 산업을 위한 전문적이고 기억에 남는 이름을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '비즈니스 설명...',
    inputPlaceholder: '예: 서울 수도권 지역을 서비스하는 지역 배관 회사',
    buttonText: '이름 생성',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '이름 수', choices: ['3개 이름', '5개 이름', '10개 이름'], default: '5개 이름', type: 'select' },
      { name: 'tone', label: '비즈니스 톤', choices: ['격식체/기업형', '캐주얼/친근한', '혁신적/현대적'], default: '격식체/기업형', type: 'select' },
      { name: 'explain_meaning', label: '의미 설명', choices: ['예', '아니요'], default: '예', type: 'radio' },
    ],
    systemPrompt: `You are an expert business naming consultant who creates practical, memorable business names that work in the real world.
## CORE BUSINESS NAMING PRINCIPLES
1. **Commercial Viability**: Names must work in actual business contexts
2. **Industry Appropriateness**: Names should fit industry expectations
3. **Local vs. Scale Considerations**: Names should match geographic ambitions
4. **Practical Memorability**: Easy to remember, spell, and share
5. **Longevity**: Names should remain relevant as business evolves
## OUTPUT FORMAT
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
For each name: Name, Style, Rationale, Best Use Case, Considerations.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '신규 사업 등록 및 법인 설립', description: '사업 설립 과정에 있는 기업가들은 비즈니스 이름 생성기를 사용하여 주 당국에 등록하기 전에 이름을 찾습니다. 비즈니스 이름 가용성은 주와 등록 유형(LLC, Corporation, DBA)에 따라 다르므로 여러 강력한 옵션을 갖는 것이 필수적입니다.' },
      { title: '프랜차이즈 및 다중 위치 비즈니스 네이밍', description: '프랜차이징이나 다중 위치를 통해 확장을 계획하는 비즈니스 소유자들은 생성기를 사용하여 시장 전반에서 작동하는 이름을 찾습니다. 확장 가능한 비즈니스를 위한 이름은 지리적 제한을 피하고, 지역 간에 잘 번역되며, 일관된 브랜딩을 위해 충분히 단순해야 합니다.' },
      { title: '기존 비즈니스 전환 또는 리브랜딩', description: '전략적 변화(새 소유권, 확장된 서비스, 재포지셔닝)를 겪고 있는 기존 비즈니스들은 생성기를 사용하여 리브랜딩 옵션을 탐색합니다. 비즈니스가 원래 이름을 넘어섰거나 시장에 변화를 알려야 할 때.' },
    ],
    faqs: [
      { question: '브랜드명과 비즈니스 이름의 차이점은 무엇인가요?', answer: '비즈니스 이름은 법적 실체 이름입니다—등록, 세금 서류 및 계약서에 나타나는 것(예: "스미스 컨설팅 LLC"). 브랜드명은 고객이 알고 있는 방식입니다—비즈니스 이름과 같거나 다를 수 있습니다(사업자등록명/DBA). 많은 비즈니스가 법적 이름과 다른 브랜드명으로 운영합니다.' },
      { question: '비즈니스 이름이 하는 일을 설명해야 하나요?', answer: '비즈니스 모델과 목표에 따라 다릅니다. 설명적 이름("정상 배관", "다운타운 치과")은 즉각적인 명확성을 제공하고 로컬 SEO에 도움이 되지만, 덜 독특하고 상표 등록이 더 어렵습니다.' },
      { question: '비즈니스 이름이 사용 가능한지 어떻게 확인하나요?', answer: '여러 수준에서 확인하세요: (1) 주의 기업등기소 데이터베이스에서 기존 등록 검색, (2) USPTO 상표 데이터베이스 검색, (3) 도메인 가용성 확인, (4) Google에서 유사한 이름을 사용하는 사람 검색, (5) 소셜 미디어 플랫폼 확인.' },
      { question: '비즈니스 이름에 위치를 포함해야 하나요?', answer: '위치를 포함하면 지역 정체성을 강화하고 로컬 SEO에 도움이 될 수 있지만("서울 홈 서비스"), 확장 시 인지된 범위를 제한할 수 있습니다. 장기 계획을 고려하세요.' },
      { question: '일치하는 도메인 이름을 갖는 것이 얼마나 중요한가요?', answer: '중요하지만 필수는 아닙니다. 정확히 일치하는 .com 도메인은 신뢰성과 찾기 쉬움에 가치가 있지만, 많은 성공적인 비즈니스들은 대안을 사용합니다: 다른 확장자(.co, .io), 접두사(getcompanyname.com, trycompanyname.com) 또는 약간의 변형.' },
      { question: '비즈니스에 내 이름을 사용할 수 있나요?', answer: '네—개인 이름은 특히 전문 서비스(법률, 회계, 컨설팅), 창의적 비즈니스 및 레스토랑에 대한 고전적인 접근 방식입니다. 고려할 점: 비즈니스를 개인 정체성에 묶고 싶나요? 판매하거나 파트너를 영입하면 어떻게 되나요?' },
      { question: '비즈니스 이름을 기억에 남게 만드는 것은 무엇인가요?', answer: '기억에 남는 이름은 일반적으로: 짧고(1-3단어), 발음하기 쉽고, 철자하기 쉽고, 음성적으로 유쾌하며, 어떤 의미나 후크를 담고 있습니다. 두운(PayPal), 특이한 조합(Red Bull) 또는 영리한 말장난이 있는 이름이 기억에 남는 경향이 있습니다.' },
      { question: '확정하기 전에 비즈니스 이름을 어떻게 테스트하나요?', answer: '테스트 방법: (1) 다양한 맥락(전화 통화, 소개)에서 소리 내어 말하기, (2) 다른 사람들에게 듣고 철자 요청하기, (3) 로고 목업에서 어떻게 보이는지 확인, (4) 어떤 연상이 있을 수 있는지 검색, (5) 타겟 고객에게 첫인상 물어보기, (6) 명함, 간판 및 인보이스에 상상해보기.' },
      { question: '경쟁사와 유사한 이름을 피해야 하나요?', answer: '일반적으로 네. 유사한 이름은 혼란을 일으키고 상표 문제를 유발하며 차별화를 어렵게 만듭니다. 그러나 일부 산업에는 네이밍 관례가 있습니다(법률 사무소는 종종 파트너 이름을 사용, 치과는 종종 "치과"를 포함). 산업 규범에 맞추면서도 기억에 남을 만큼 눈에 띄도록 균형을 맞추세요.' },
      { question: '나중에 비즈니스 이름을 변경하고 싶으면 어떻게 하나요?', answer: '비즈니스 이름을 변경할 수 있지만 비용이 수반됩니다: 재등록 수수료, 새 마케팅 자료, 잠재적으로 새 도메인과 간판, 고객 재교육. 빠르게 넘어설 이름보다 성장할 수 있는 이름으로 시작하세요.' },
    ],
  },
  'product-name-generator': {
    slug: 'product-name-generator',
    name: '제품명 생성기',
    title: '무료 AI 제품명 생성기 | Analyze AI',
    description: '판매하는 창의적인 제품명을 생성합니다. AI가 진열대와 고객 마음에 눈에 띄는 기억에 남고 시장에 출시 가능한 이름을 만듭니다.',
    metaDescription: '판매하는 창의적인 제품명을 생성합니다. AI가 진열대와 고객 마음에 눈에 띄는 기억에 남고 시장에 출시 가능한 이름을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '제품 설명...',
    inputPlaceholder: '예: 피트니스 열정가를 위한 식물성 단백질 파우더',
    buttonText: '이름 생성',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '이름 수', choices: ['3개 이름', '5개 이름', '10개 이름'], default: '5개 이름', type: 'select' },
      { name: 'tone', label: '제품 톤', choices: ['프리미엄/럭셔리', '재미있는/장난스러운', '전문적/기술적', '자연/유기농'], default: '프리미엄/럭셔리', type: 'select' },
      { name: 'explain_meaning', label: '의미 설명', choices: ['예', '아니요'], default: '예', type: 'radio' },
    ],
    systemPrompt: `You are an expert product naming strategist who creates compelling product names that drive recognition, recall, and purchase decisions.
## CORE PRODUCT NAMING PRINCIPLES
1. **Shelf Impact**: Names must stand out in crowded environments
2. **Benefit Suggestion**: Names should hint at what the product delivers
3. **Target Audience Fit**: Names must resonate with specific buyer demographics
4. **Verbal Shareability**: Names should spread naturally through word-of-mouth
5. **Brand Architecture**: Names should work within existing brand portfolios
## OUTPUT FORMAT
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
For each name: Name, Category, Meaning/Logic, Market Fit, Usage Notes.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '신제품 출시 준비', description: '제품 관리자와 마케팅 팀은 출시 전 중요한 네이밍 단계에서 제품명 생성기를 사용합니다. 강력한 제품명은 성공과 무명 사이의 차이를 만들 수 있습니다—진열대 존재감부터 광고 효과, 입소문 확산까지 모든 것에 영향을 미칩니다.' },
      { title: '제품 라인 확장 및 변형 네이밍', description: '기존 제품 라인을 확장하는 회사들은 생성기를 사용하여 상위 제품과 연결하면서 새 오퍼링을 구별하는 새 변형(맛, 크기, 제형)의 이름을 만듭니다. "오리지널" vs. "울트라" vs. "라이트"든 제품 패밀리 내의 완전히 새로운 이름이든.' },
      { title: '프라이빗 라벨 및 화이트 라벨 제품 개발', description: '프라이빗 라벨 제품을 만드는 소매업체와 화이트 라벨 오퍼링을 개발하는 제조업체들은 생성기를 사용하여 기존 브랜드와 경쟁하는 제품에 이름을 붙입니다. 주요 CPG 회사의 마케팅 예산 없이 이러한 제품은 더 열심히 일하는 이름이 필요합니다—가치를 전달하고 빠르게 인지도를 구축합니다.' },
    ],
    faqs: [
      { question: '좋은 제품명의 조건은 무엇인가요?', answer: '효과적인 제품명은 기억에 남고(쉽게 회상하고 인식), 의미 있고(혜택을 제안하거나 연상을 만들고), 발음 가능하고(고객이 이름으로 요청할 수 있고), 독특하고(경쟁사와 차별화), 적절합니다(카테고리와 타겟 청중에 맞음). 최고의 제품명은 종종 카테고리 약어가 됩니다.' },
      { question: '제품명이 하는 일을 설명해야 하나요?', answer: '카테고리와 전략에 따라 다릅니다. 설명적 이름은 즉각적인 명확성을 제공하지만 상표 등록이 더 어렵습니다. 암시적 이름은 혜택을 암시하면서 상표 보호를 허용합니다. 발명된 이름은 가장 독특하지만 더 많은 마케팅 투자가 필요합니다.' },
      { question: '제품 라인의 제품에 어떻게 이름을 붙이나요?', answer: '제품 라인 네이밍은 일반적으로 여러 아키텍처 중 하나를 따릅니다: (1) 브랜드 하우스(모든 제품이 브랜드명을 공유: iPhone, iPad, iMac), (2) 보증 브랜드(상위 보증이 있는 서브 브랜드), (3) 브랜드 하우스(별개 이름). 브랜드 전략에 맞는 아키텍처를 선택하고 일관성을 위해 고수하세요.' },
      { question: '제품명을 상표 등록해야 하나요?', answer: '상당히 투자하는 제품의 경우 그렇습니다. 상표 등록은 모방자에 대한 법적 보호를 제공하고 권리를 행사하는 능력을 강화합니다. 마케팅에 투자하기 전에 상표 검색을 수행하고 출원을 고려하세요.' },
      { question: '출시 전에 제품명을 어떻게 테스트하나요?', answer: '테스트 방법: (1) 타겟 고객과의 포커스 그룹 또는 설문조사, (2) 디지털 광고에서 A/B 테스트, (3) 다양한 청중과의 발음 테스트, (4) 경쟁 배치 테스트(경쟁사 사이에서 당신의 이름), (5) 의도하지 않은 의미에 대한 국제 스크리닝.' },
      { question: '제품명이 경쟁사와 유사하면 어떻게 되나요?', answer: '유사한 이름은 혼란과 잠재적 법적 문제를 만듭니다. 동일하지 않더라도 비슷하게 들리거나 보이거나 유사한 인상을 주는 이름은 상표 분쟁을 유발할 수 있습니다—특히 같은 카테고리에서. 확정하기 전에 포괄적으로 검색하세요.' },
      { question: '제품명은 얼마나 길어야 하나요?', answer: '짧은 것이 일반적으로 더 좋습니다—회상과 패키징을 위해 1-3음절이 이상적입니다. 그러나 효과가 길이보다 더 중요합니다. 독특하기 때문에 더 길어도 작동하는 경우가 있고, 설명적이고 기억에 남기 때문에 작동하는 경우도 있습니다.' },
      { question: '외국어나 만들어진 단어를 사용할 수 있나요?', answer: '네—둘 다 일반적인 전략입니다. 외국어는 출처, 세련됨 또는 특정 연상을 암시할 수 있습니다(음식에 이탈리아어, 엔지니어링에 독일어, 럭셔리에 프랑스어). 만들어진 단어는 최대의 독특함과 상표 보호를 제공합니다.' },
      { question: '국제 시장을 위한 제품에 어떻게 이름을 붙이나요?', answer: '타겟 언어에서 문제가 되는 의미를 스크리닝하고, 시장 전반에서 발음을 테스트하고, 이름이 번역되어야 하는지 전 세계적으로 일관되게 유지되어야 하는지 고려하고, 국제적으로 상표 가용성을 확인하세요.' },
      { question: '기존 제품의 이름을 변경해야 하면 어떻게 하나요?', answer: '제품 리네이밍(리브랜딩과 마찬가지로)은 비용이 수반되지만 법적 이유, 시장 재포지셔닝 또는 부정적 연상을 위해 필요할 수 있습니다. 신중하게 실행하세요: 기존 고객에게 변경 사항을 명확하게 전달하고, 전환 중 패키징 단서를 유지하고, 변경을 개선으로 설명하세요.' },
    ],
  },
  'slogan-generator': {
    slug: 'slogan-generator',
    name: '슬로건 생성기',
    title: '무료 AI 슬로건 생성기 | Analyze AI',
    description: '브랜드의 본질을 포착하는 캐치하고 기억에 남는 슬로건을 만드세요. AI가 고객 마음에 남는 태그라인을 생성합니다.',
    metaDescription: '브랜드의 본질을 포착하는 캐치하고 기억에 남는 슬로건을 만드세요. AI가 고객 마음에 남는 태그라인을 생성합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '브랜드 또는 제품 설명...',
    inputPlaceholder: '예: 지속 가능성과 커뮤니티에 초점을 맞춘 커피숍',
    buttonText: '슬로건 생성',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '슬로건 수', choices: ['3개 슬로건', '5개 슬로건', '10개 슬로건'], default: '5개 슬로건', type: 'select' },
      { name: 'tone', label: '슬로건 톤', choices: ['격식체/전문적', '캐주얼/친근한', '대담한/파괴적', '프리미엄/럭셔리'], default: '격식체/전문적', type: 'select' },
      { name: 'explain_meaning', label: '의미 설명', choices: ['예', '아니요'], default: '예', type: 'radio' },
    ],
    systemPrompt: `You are an expert advertising copywriter and brand strategist who creates memorable slogans and taglines that capture brand essence, drive recall, and inspire action.
## CORE SLOGAN PRINCIPLES
1. **Memorability**: Slogans must stick in people's minds after minimal exposure
2. **Brand Essence**: Each slogan must capture what makes this brand unique
3. **Emotional Resonance**: Great slogans trigger feelings, not just understanding
4. **Actionability**: The best slogans inspire behavior or belief
5. **Timelessness**: Slogans should remain relevant across years
## OUTPUT FORMAT
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}
For each slogan: Slogan, Type, Rationale, Application, Strength.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '브랜드 출시 및 포지셔닝 캠페인', description: '새 브랜드를 출시하는 마케팅 팀은 슬로건 생성기를 사용하여 첫날부터 포지셔닝을 확립하는 태그라인을 개발합니다. 강력한 슬로건은 전체 출시 캠페인을 고정시켜 모든 크리에이티브 실행이 연결되는 중심 메시지를 제공할 수 있습니다.' },
      { title: '캠페인 및 프로모션 개발', description: '특정 캠페인을 만드는 광고주들은 생성기를 사용하여 메인 브랜드 슬로건을 보완하면서(다른) 캠페인별 태그라인을 개발합니다. 제품 출시, 시즌 프로모션 및 사회적 마케팅 이니셔티브는 종종 자체적인 기억에 남는 문구가 필요합니다.' },
      { title: '리브랜딩 및 브랜드 리프레시 이니셔티브', description: '리브랜딩을 진행하는 회사들은 종종 브랜드 유산을 존중하면서 변화를 알리는 새 슬로건이 필요합니다. 완전한 전환이든 미묘한 진화든, 적절한 새 태그라인은 시장에 재포지셔닝을 전달할 수 있습니다.' },
    ],
    faqs: [
      { question: '좋은 슬로건의 조건은 무엇인가요?', answer: '훌륭한 슬로건은 기억에 남고(최소 노출 후에도 남음), 독특하고(분명히 이 브랜드에 속함), 의미 있고(중요한 것을 전달), 시간을 초월합니다(수년간 관련성 유지). 일반적으로 리듬, 두운 또는 말장난과 같은 언어적 장치를 사용합니다.' },
      { question: '슬로건은 얼마나 길어야 하나요?', answer: '짧은 것이 거의 항상 더 좋습니다—2-6단어를 목표로 하세요. 가장 기억에 남는 슬로건은 간결합니다: "Just Do It"(3단어), "Think Different"(2단어), "Got Milk?"(2단어). 더 긴 슬로건도 강한 리듬이나 구조가 있으면 작동할 수 있습니다.' },
      { question: '슬로건이 하는 일을 설명해야 하나요?', answer: '반드시 그렇지 않습니다. 일부 효과적인 슬로건은 순수하게 감정적이고("Open Happiness") 다른 것은 혜택을 진술합니다("Save money. Live better."). 브랜드의 인지도 수준을 고려하세요—새 브랜드는 더 설명적인 슬로건에서 이점을 얻을 수 있고, 기존 브랜드는 더 추상적일 수 있습니다.' },
      { question: '슬로건과 태그라인의 차이점은 무엇인가요?', answer: '용어는 종종 호환 가능하게 사용됩니다. 일부는 다음과 같이 구분합니다: 슬로건 = 일시적, 캠페인별; 태그라인 = 영구적, 브랜드 수준. 실제로 둘 다 브랜드 본질을 포착하는 짧고 기억에 남는 문구를 가리킵니다.' },
      { question: '슬로건이 이미 사용 중인지 어떻게 알 수 있나요?', answer: '정확한 문구를 따옴표로 검색하고, 상표 데이터베이스(미국은 USPTO)를 확인하고, 광고 아카이브를 검색하세요. 일부 슬로건은 상표 등록되어 있고, 다른 것은 일반적으로 사용되지만 보호되지 않습니다.' },
      { question: '슬로건에 브랜드명을 포함해야 하나요?', answer: '브랜드명을 포함하면 귀속이 증가하지만 종종 기억에 남음과 유연성이 감소합니다. 일부 상징적인 슬로건은 이름을 포함하지만 대부분은 포함하지 않습니다. 슬로건이 항상 로고와 함께 제시된다면 슬로건 자체에 브랜드명이 불필요할 수 있습니다.' },
      { question: '출시 전에 슬로건을 어떻게 테스트하나요?', answer: '테스트 방법: (1) 회상 테스트—소비자에게 보여주고, 기다리고, 무엇을 기억하는지 물어보기, (2) 귀속 테스트—브랜드와 매칭할 수 있는지? (3) 감정 반응 테스트—무엇을 느끼는지? (4) 옵션 간 선호도 테스트, (5) 경쟁 맥락 테스트—경쟁사 메시지와 함께 어떻게 수행되는지?' },
      { question: '슬로건을 얼마나 자주 변경해야 하나요?', answer: '강력한 슬로건은 수십 년 지속됩니다—"Just Do It"은 1988년부터 Nike의 것이었습니다. 너무 자주 변경하면 슬로건이 자산을 구축하지 못합니다. 다음과 같은 경우 변경하세요: 슬로건이 더 이상 브랜드를 반영하지 않거나, 시장 포지셔닝이 크게 변했거나, 슬로건이 구식이 되거나 문제가 되었을 때.' },
      { question: '다른 제품이나 캠페인에 대해 다른 슬로건을 가질 수 있나요?', answer: '네—많은 브랜드가 마스터 슬로건(브랜드 수준)과 서브 슬로건(제품 또는 캠페인 수준)을 가지고 있습니다. 마스터 슬로건은 전체 브랜드 본질을 포착하고, 서브 슬로건은 특정 오퍼링이나 이니셔티브를 다룹니다. 서로 보완하도록 하세요.' },
      { question: '슬로건이 국제적으로 작동해야 하면 어떻게 하나요?', answer: '의미, 함축 및 문화적 적절성에 대해 번역을 테스트하세요. 일부 슬로건은 잘 번역되고, 다른 것은 그렇지 않습니다. 번역/적응할지 원본을 유지할지 고려하세요. 영어 슬로건은 종종 프리미엄 포지셔닝을 위해 또는 번역이 의미를 잃을 때 전 세계적으로 유지됩니다.' },
    ],
  },
  'google-ads-copy-generator': {
    slug: 'google-ads-copy-generator',
    name: 'Google 광고 카피 생성기',
    title: '무료 AI Google 광고 카피 생성기',
    description: '클릭과 전환을 유도하는 고전환 Google 광고 카피를 생성합니다. AI가 성과에 최적화된 헤드라인과 설명을 만듭니다.',
    metaDescription: '클릭과 전환을 유도하는 고전환 Google 광고 카피를 생성합니다. AI가 성과에 최적화된 헤드라인과 설명을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '제품/서비스 및 오퍼 설명...',
    inputPlaceholder: '예: 소규모 비즈니스를 위한 온라인 회계 소프트웨어, 30일 무료 체험',
    buttonText: '광고 카피 생성',
    maxLength: 2048,
    options: [
      { name: 'tone', label: '광고 톤', choices: ['격식체/B2B', '캐주얼/B2C', '긴급/프로모션'], default: '격식체/B2B', type: 'select' },
      { name: 'keywords', label: '키워드 포함', choices: ['예', '아니요'], default: '예', type: 'radio' },
    ],
    systemPrompt: `You are an expert PPC copywriter and Google Ads specialist who creates high-converting ad copy that maximizes click-through rates and quality scores.
## CORE GOOGLE ADS PRINCIPLES
1. **Character Limit Mastery**: Every character must earn its place within strict limits
2. **Keyword Relevance**: Ad copy must align with search intent
3. **Benefit-Driven Messaging**: Focus on what users gain
4. **Clear Call-to-Action**: Every ad needs a compelling reason to click
5. **Landing Page Alignment**: Ads must accurately represent the destination
## FORMAT SPECIFICATIONS
- Headlines: Up to 15 headlines, 30 characters each
- Descriptions: Up to 4 descriptions, 90 characters each
## OUTPUT FORMAT
Tone: {{tone}}
Include Keywords: {{keywords}}
Generate diverse headlines (10-15) and descriptions (4) with character counts and category tags.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: 'PPC 캠페인 출시 및 확장', description: '디지털 마케터와 PPC 전문가들은 새 캠페인을 출시하거나 기존 캠페인을 확장할 때 Google 광고 카피 생성기를 사용합니다. 반응형 검색 광고는 여러 헤드라인과 설명 변형이 필요합니다—광고당 최대 15개 헤드라인과 4개 설명. 이 양의 품질 있고 다양한 카피를 수동으로 작성하는 것은 시간이 많이 걸립니다.' },
      { title: 'A/B 테스트 및 광고 최적화', description: '지속적으로 광고 성과를 테스트하는 광고주들은 생성기를 사용하여 테스트를 위한 새 변형을 만듭니다. 현재 광고가 정체될 때 새 카피가 종종 성과를 회복시킵니다. 도구는 의미 있는 테스트를 위해 여러 앵글(혜택 중심, 기능 중심, 긴급성, 사회적 증거)에 걸쳐 헤드라인과 설명을 생성합니다.' },
      { title: '에이전시 및 팀 워크플로우 효율성', description: '여러 클라이언트 계정을 관리하는 광고 에이전시들은 생성기를 사용하여 캠페인 전반에 걸쳐 카피 개발을 가속화합니다. 수십 또는 수백 개의 광고 그룹을 관리할 때 각각에 대해 고유하고 맞춤화된 카피를 작성하는 것이 병목이 됩니다.' },
    ],
    faqs: [
      { question: 'Google 광고 카피를 효과적으로 만드는 것은 무엇인가요?', answer: '효과적인 Google 광고 카피는 세 가지를 달성합니다: 관련성(검색 의도 및 키워드와 일치), 가치 전달(사용자가 얻는 것을 명확하게 진술), 행동 유도(클릭을 강제). 최고의 광고는 사용자가 검색하는 것에 대한 자연스러운 답변처럼 느껴지며 클릭이 강제가 아닌 당연하게 느껴집니다.' },
      { question: 'Google 광고의 문자 제한은 얼마인가요?', answer: '반응형 검색 광고는 다음을 허용합니다: 각각 최대 30자의 헤드라인(최대 15개 헤드라인), 각각 최대 90자의 설명(최대 4개 설명). Google은 이를 동적으로 결합하므로 각 요소는 독립적으로 그리고 조합으로 작동해야 합니다.' },
      { question: '몇 개의 헤드라인 변형을 제공해야 하나요?', answer: '최상의 결과를 위해 최소 10-15개의 다양한 헤드라인을 제공하세요. Google의 머신 러닝은 조합을 테스트하여 최고 성과를 찾으므로 더 많은 품질 옵션이 알고리즘에 더 많은 작업 거리를 제공합니다. 그러나 품질이 양보다 더 중요합니다.' },
      { question: '광고 카피에 키워드를 포함해야 하나요?', answer: '네, 하지만 자연스럽게. 헤드라인의 키워드는 검색 쿼리와 일치할 때 종종 굵게 표시되어 관련성 신호를 높입니다. 최소 2-3개 헤드라인과 1-2개 설명에 기본 키워드를 포함하되 어색한 키워드 스터핑은 피하세요.' },
      { question: '어떤 조합에서도 작동하는 헤드라인을 어떻게 작성하나요?', answer: '완전한 생각이고 의미를 위해 다른 헤드라인에 의존하지 않는 헤드라인을 작성하세요. 서로 모순되거나 일부 랜딩 페이지만 충족하는 약속을 하는 헤드라인을 피하세요. 조합이 보완적으로 느껴지도록 주제(혜택, 기능, CTA, 증거)를 다양화하세요.' },
      { question: '광고 설명에 무엇을 포함해야 하나요?', answer: '설명은 헤드라인을 지원하는 세부 사항으로 확장해야 합니다: 구체적인 혜택, 기능, 오퍼, 신뢰성 요소 및 행동 유도. 보조 키워드를 자연스럽게 포함하세요. 명확한 CTA로 끝내세요.' },
      { question: '사람들이 Google 광고를 클릭하게 만드는 것은 무엇인가요?', answer: '사용자는 광고가 검색 의도에 명확하게 답하고, 구체적인 가치를 약속하고, 신뢰할 수 있게 느껴질 때 클릭합니다. 구체성이 클릭을 증가시킵니다: "오늘 20% 할인"이 "좋은 거래"보다 성과가 좋습니다. 사회적 증거가 효과가 있습니다: "50,000명 이상의 고객"이 신뢰를 구축합니다.' },
      { question: 'Google 광고 정책 위반을 어떻게 피하나요?', answer: '피해야 할 것: 과도한 대문자화(모든 대문자 금지), 과도한 구두점(!!!금지), 오해의 소지가 있는 주장, 금지된 콘텐츠(특정 산업, 주장), 상표 문제, 트릭 포맷. 생성기는 정책 준수 카피를 생성하도록 설계되었지만 항상 브랜드별 제한 사항을 검토하세요.' },
      { question: '광고를 랜딩 페이지와 어떻게 일치시키나요?', answer: '광고 약속은 사용자가 랜딩 페이지에서 찾는 것과 일치해야 합니다—이는 전환율과 품질 점수 모두에 영향을 미칩니다. 광고에서 "50% 할인"이라고 하면 랜딩 페이지에서 50% 할인을 눈에 띄게 표시해야 합니다. 불일치는 지출을 낭비하고 사용자를 좌절시킵니다.' },
      { question: 'Google 광고 카피를 얼마나 자주 새로고침해야 하나요?', answer: '성과가 하락할 때(CTR 감소, 전환율 하락), 새 앵글을 테스트할 때, 또는 오퍼/메시징이 변경될 때 새로고침하세요. 고정된 일정은 없습니다—일부 광고는 수년간 성과를 내고, 다른 것은 빠르게 피로해집니다. 성과 지표를 모니터링하고 현재 광고가 정체될 때 테스트할 새 카피를 준비해 두세요.' },
    ],
  },
  'product-description-generator': {
    slug: 'product-description-generator',
    name: '제품 설명 생성기',
    title: '무료 AI 제품 설명 생성기',
    description: '판매하는 매력적인 제품 설명을 생성합니다. AI가 이커머스, 마켓플레이스 및 카탈로그를 위한 혜택 중심 카피를 만듭니다.',
    metaDescription: '판매하는 매력적인 제품 설명을 생성합니다. AI가 이커머스, 마켓플레이스 및 카탈로그를 위한 혜택 중심 카피를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '제품 설명...',
    inputPlaceholder: '예: 30시간 배터리 수명의 무선 노이즈 캔슬링 헤드폰',
    buttonText: '설명 생성',
    maxLength: 2048,
    options: [
      { name: 'length', label: '설명 길이', choices: ['간결 (50-75단어)', '표준 (100-150단어)', '상세 (200-300단어)'], default: '표준 (100-150단어)', type: 'select' },
      { name: 'tone', label: '작성 톤', choices: ['럭셔리/프리미엄', '테크/전자', '패션/의류', '홈/라이프스타일', '헬스/뷰티'], default: '테크/전자', type: 'select' },
    ],
    systemPrompt: `You are an expert e-commerce copywriter and conversion specialist who creates product descriptions that inform, persuade, and sell.
## CORE PRODUCT DESCRIPTION PRINCIPLES
1. **Benefit-Led Writing**: Lead with what customers gain
2. **Sensory and Emotional Language**: Help customers imagine owning the product
3. **Scannable Structure**: Format for how people actually read online
4. **SEO Integration**: Include relevant keywords naturally
5. **Objection Handling**: Address concerns before they become barriers
## OUTPUT FORMAT
Length: {{length}}
Tone: {{tone}}
Generate complete product description with hook, body, and closing.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '이커머스 스토어 제품 페이지', description: '온라인 소매업체들은 제품 설명 생성기를 사용하여 카탈로그 전반의 제품 페이지에 매력적인 카피를 생성합니다. 잠재적으로 수천 개의 SKU가 있는 경우 고유하고 설득력 있는 설명을 수동으로 작성하는 것은 불가능합니다.' },
      { title: '마켓플레이스 리스팅 최적화', description: 'Amazon, eBay, Etsy 및 기타 마켓플레이스의 판매자들은 생성기를 사용하여 경쟁 환경에서 눈에 띄는 리스팅을 만듭니다. 마켓플레이스 성공은 종종 카피 품질에 달려 있습니다—리스팅은 수십 개의 유사한 제품과 직접 경쟁합니다.' },
      { title: '제품 카탈로그 및 재고 확장', description: '새 제품을 추가하거나 새 카테고리로 확장하는 회사들은 생성기를 사용하여 대규모로 설명을 빠르게 개발합니다. 50개 또는 500개의 새 제품을 출시할 때 설명 작성이 병목이 됩니다.' },
    ],
    faqs: [
      { question: '제품 설명을 효과적으로 만드는 것은 무엇인가요?', answer: '효과적인 제품 설명은 기능을 혜택으로 변환하고(고객이 얻는 것), 감각적 언어를 사용하고(고객이 제품 사용을 상상하도록 도움), 스캔 가능하고(사람들이 실제로 온라인에서 읽는 방식에 맞음), 관련 키워드를 포함하고(SEO를 위해), 이의를 다룹니다(질문되기 전에 답변).' },
      { question: '제품 설명은 얼마나 길어야 하나요?', answer: '제품과 플랫폼에 따라 다릅니다. 빠른 결정 제품(저렴, 단순 기능)은 50-75단어로 작동합니다. 대부분의 제품은 100-150단어로 잘 수행됩니다—혜택 전달과 SEO에 충분하면서 압도하지 않습니다. 고려 사항이 많은 항목(비싼, 기술적, 복잡한)은 전체 설명을 위해 200-300단어가 필요할 수 있습니다.' },
      { question: '기능에 집중해야 하나요 혜택에 집중해야 하나요?', answer: '항상 혜택으로 시작하되 기능을 지원으로 포함하세요. 기능은 제품이 가진 것이고, 혜택은 고객이 얻는 것입니다. "5000mAh 배터리"는 기능입니다. "충전 없이 이틀 종일 사용"은 혜택입니다. 혜택으로 시작한 다음 기능을 증거로 제공하세요.' },
      { question: '로봇처럼 들리지 않고 SEO를 위해 어떻게 작성하나요?', answer: '관련 키워드를 자연스러운 위치에 포함하세요—제품 제목, 오프닝 문장, 헤더, 본문 카피 내에서 자연스럽게. 인간을 위해 먼저 작성한 다음 키워드가 자연스럽게 나타나도록 하세요. 가독성을 희생하면서 키워드를 채우지 마세요.' },
      { question: '경쟁사와 유사한 제품을 어떻게 처리하나요?', answer: '차별화에 집중하세요: 고유한 기능, 브랜드 스토리, 품질 지표, 보증/지원 또는 사용 사례 포지셔닝. 제품이 정말 유사하면 목소리와 고객 경험 강조를 통해 차별화하세요. 경쟁사를 이름으로 언급하거나 증명할 수 없는 주장을 피하세요.' },
      { question: '글머리 기호를 사용해야 하나요 문단을 사용해야 하나요?', answer: '둘 다—전략적으로. 오프닝 후크와 클로징은 서사적 흐름을 위해 문단으로 잘 작동합니다. 기능/혜택 목록은 스캔 가능성을 위해 글머리 기호로 잘 작동합니다. 긴 기능 문단은 사람들이 온라인에서 선형적으로 읽기보다 스캔하기 때문에 성과가 좋지 않습니다.' },
      { question: '사용해보지 않은 제품의 설명을 어떻게 작성하나요?', answer: '집중하세요: 제조업체 사양, 문서화된 기능, 카테고리 지식, 유사 제품의 고객 리뷰, 경쟁사 설명(복사가 아닌 영감을 위해). 제품 소유자에게 핵심 차별화 요소와 타겟 고객 프로필을 물어보세요.' },
      { question: '기술 제품에 무엇을 포함해야 하나요?', answer: '포함하세요: 접근 가능한 언어로 된 사양, 호환성 정보, 사용 사례 시나리오, 설정/설치 용이성, 지원 가용성, 이전 버전 또는 카테고리 표준과의 비교. 기술적 정확성과 접근성의 균형을 맞추세요—기술적 구매자는 사양을 원하고, 덜 기술적인 구매자는 자신의 상황에 맞는지 알고 싶어합니다.' },
      { question: '알려진 제한 사항이 있는 제품을 어떻게 처리하나요?', answer: '정직하되 전략적으로. 맥락에서 제한 사항을 인정하세요("컴팩트한 디자인은 여행에 완벽하지만 풀사이즈 모델보다 용량이 적습니다"). 제한 사항을 포지셔닝으로 전환하세요("미니멀리스트 포뮬러는 불필요한 첨가물을 건너뜁니다"). 중요한 제한 사항을 숨기지 마세요—고객 실망은 초기 판매 감소보다 더 나쁜 반품과 부정적 리뷰로 이어집니다.' },
      { question: '여러 플랫폼에서 같은 설명을 사용할 수 있나요?', answer: '가능하지만 최적화가 종종 결과를 개선합니다. Amazon은 키워드가 풍부한 카피를 우선시하고, Etsy는 개성과 스토리를 중시하며, 자체 사이트는 전체 브랜드 표현을 허용합니다. 핵심 메시징은 일관되게 유지하면서 플랫폼별로 형식, 길이 및 강조점을 조정하세요.' },
    ],
  },
  'landing-page-generator': {
    slug: 'landing-page-generator',
    name: '랜딩 페이지 생성기',
    title: '무료 AI 랜딩 페이지 생성기',
    description: '전환하는 완전한 랜딩 페이지 카피를 생성합니다. AI가 오퍼를 위한 헤드라인, 기능, 추천, FAQ 및 CTA를 만듭니다.',
    metaDescription: '전환하는 완전한 랜딩 페이지 카피를 생성합니다. AI가 오퍼를 위한 헤드라인, 기능, 추천, FAQ 및 CTA를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '제품/서비스 및 오퍼 설명...',
    inputPlaceholder: '예: 14일 무료 체험이 있는 원격 팀을 위한 프로젝트 관리 도구',
    buttonText: '랜딩 페이지 생성',
    maxLength: 2048,
    options: [
      { name: 'goal', label: '주요 목표', choices: ['리드 생성', '판매/구매', '무료 체험 가입', '데모 요청'], default: '리드 생성', type: 'select' },
      { name: 'tone', label: '페이지 톤', choices: ['B2B/전문적', 'B2C/소비자', '스타트업/현대적', '프리미엄/럭셔리'], default: 'B2B/전문적', type: 'select' },
    ],
    systemPrompt: `You are an expert conversion copywriter and landing page strategist who creates complete landing page content that converts visitors into leads or customers.
## CORE LANDING PAGE PRINCIPLES
1. **Single Focus**: One page, one offer, one action
2. **Clear Value Proposition**: Visitors understand the benefit within seconds
3. **Progressive Persuasion**: Structure that builds toward conversion
4. **Objection Handling**: Address concerns before they become barriers
5. **Trust Building**: Provide evidence and credibility throughout
## OUTPUT FORMAT
Primary Goal: {{goal}}
Tone: {{tone}}
Generate complete sections: Hero, Problem, Solution, Features, Social Proof, FAQ, Final CTA.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '제품 및 서비스 출시 캠페인', description: '새 제품이나 서비스를 출시하는 마케터들은 랜딩 페이지 생성기를 사용하여 전환 중심 페이지를 빠르게 만듭니다. 잘 구조화된 랜딩 페이지는 성공적인 출시와 실패한 출시의 차이를 의미할 수 있습니다.' },
      { title: '리드 생성 캠페인 개발', description: '리드 생성 캠페인을 운영하는 마케팅 팀은 생성기를 사용하여 특정 오퍼(전자책, 웨비나, 무료 체험, 상담)를 위한 전용 페이지를 만듭니다. 각 오퍼는 자체 집중된 랜딩 페이지가 필요합니다; 홈페이지는 이 역할을 할 수 없습니다.' },
      { title: 'A/B 테스트 및 전환 최적화', description: '전환율 최적화 담당자들은 생성기를 사용하여 랜딩 페이지의 테스트 변형을 만듭니다. 헤드라인, 가치 제안 또는 페이지 구조를 테스트할 때 품질 있는 대안을 갖는 것이 필수적입니다.' },
    ],
    faqs: [
      { question: '랜딩 페이지 생성기란 무엇인가요?', answer: '랜딩 페이지 생성기는 방문자를 리드나 고객으로 전환하도록 설계된 전용 전환 페이지를 위한 완전한 카피를 생성합니다. 여기에는: 히어로 헤드라인과 서브헤드라인, 문제 및 솔루션 섹션, 기능/혜택 설명, 추천 구조, FAQ 섹션 및 행동 유도가 포함됩니다.' },
      { question: '랜딩 페이지에 어떤 섹션을 포함해야 하나요?', answer: '효과적인 랜딩 페이지는 일반적으로 다음을 포함합니다: 히어로 섹션(헤드라인, 서브헤드라인, 기본 CTA), 문제 섹션(고통을 표현), 솔루션 섹션(오퍼 소개), 기능/혜택(받는 것), 사회적 증거(추천, 로고, 숫자), FAQ(이의 다루기), 최종 CTA(전환 마무리).' },
      { question: '랜딩 페이지는 얼마나 길어야 하나요?', answer: '오퍼 복잡성과 청중 인식에 맞춰 길이를 조정하세요. 인식된 청중에게 저위험 오퍼(뉴스레터 가입, 무료 다운로드)는 짧은 페이지로 작동합니다. 덜 인식된 청중에게 고위험 오퍼(비싼 구매, 중대한 약속)는 신뢰를 구축하고 이의를 다루기 위해 더 긴 페이지가 필요합니다.' },
      { question: '좋은 랜딩 페이지 헤드라인의 조건은 무엇인가요?', answer: '훌륭한 헤드라인은 주요 혜택을 명확하고 빠르게 전달합니다. "나에게 뭐가 좋은데?"에 몇 초 안에 답합니다. 포함하세요: 원하는 결과, 누구를 위한 것인지, 이상적으로는 오퍼를 차별화하는 것. 피하세요: 의미를 모호하게 하는 영리한 말장난, 회사 중심 메시징("우리가 최고"), 구체적이지 않은 모호한 주장.' },
      { question: '효과적인 CTA를 어떻게 작성하나요?', answer: '효과적인 CTA는 다음에 무슨 일이 일어나는지 구체적이고, 혜택 중심(하는 것뿐만 아니라 얻는 것)이며, 행동 지향적(강한 동사)입니다. "무료 가이드 받기"가 "제출"보다 성과가 좋습니다. "무료 체험 시작하기"가 "가입"보다 성과가 좋습니다.' },
      { question: '몇 개의 추천이 필요한가요?', answer: '양보다 품질—3-5개의 강력하고 구체적인 추천이 수십 개의 일반적인 것보다 성과가 좋습니다. 효과적인 추천에는 다음이 포함됩니다: 달성한 구체적 결과, 실제로 느껴지는 충분한 세부 사항, 관련 자격 증명(타겟 청중과 유사), 이상적으로는 사진이나 회사 로고.' },
      { question: '랜딩 페이지에 가격을 포함해야 하나요?', answer: '목표에 따라 다릅니다. 직접 판매의 경우 네—가격 숨기기는 방문자를 좌절시키고 자격 없는 리드를 끌어들입니다. 리드 생성의 경우 대화가 목표라면 가격이 불필요하거나 역효과일 수 있습니다. 고가 B2B 오퍼의 경우 가격은 종종 영업 대화에서 이루어집니다.' },
      { question: '랜딩 페이지에서 이의를 어떻게 다루나요?', answer: 'FAQ 섹션을 사용하여 질문으로 프레이밍된 일반적인 이의를 다루세요. 예: "효과가 없으면 어떻게 하나요?"(보증 포함), "내 정보가 안전한가요?"(보안 세부 사항 포함), "결과를 보기까지 얼마나 걸리나요?"(기대치 설정). 사람들이 전환을 멈추게 하는 것을 예상하고 선제적으로 다루세요.' },
      { question: '랜딩 페이지와 홈페이지의 차이점은 무엇인가요?', answer: '홈페이지는 여러 청중과 목표를 제공하고, 랜딩 페이지는 하나의 오퍼와 하나의 행동에 집중합니다. 홈페이지는 탐색과 여러 경로가 있고, 랜딩 페이지는 방해 요소를 최소화합니다. 랜딩 페이지는 일반적으로 특정 캠페인과 트래픽 소스를 위해 생성됩니다. 집중된 전환을 원할 때 랜딩 페이지를 사용하고, 일반 브랜드 탐색에는 홈페이지를 사용하세요.' },
      { question: '랜딩 페이지 카피를 어떻게 테스트하나요?', answer: '체계적으로 요소를 A/B 테스트하세요: 헤드라인 먼저(가장 큰 영향), 그 다음 CTA, 그 다음 페이지 구조. 사소한 단어 변경이 아닌 의미 있는 차이를 테스트하세요. 통계적으로 유의미할 때까지 테스트를 실행하세요(보통 의미 있는 트래픽이 필요). 가장 큰 잠재적 개선부터 시작하세요—새 헤드라인이 버튼 색상 변경보다 전환율을 더 많이 움직일 수 있습니다.' },
    ],
  },
  'website-copy-generator': {
    slug: 'website-copy-generator',
    name: '웹사이트 카피 생성기',
    title: '무료 AI 웹사이트 카피 생성기',
    description: '몇 분 만에 전문적인 웹사이트 콘텐츠를 생성합니다. AI가 홈페이지, 소개 페이지, 서비스 페이지 등을 위한 카피를 만듭니다.',
    metaDescription: '몇 분 만에 전문적인 웹사이트 콘텐츠를 생성합니다. AI가 홈페이지, 소개 페이지, 서비스 페이지 등을 위한 카피를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '비즈니스 설명...',
    inputPlaceholder: '예: 이커머스 브랜드를 위한 SEO 전문 디지털 마케팅 에이전시',
    buttonText: '웹사이트 카피 생성',
    maxLength: 2048,
    options: [
      { name: 'pages', label: '생성할 페이지', choices: ['홈페이지만', '홈페이지 + 소개', '홈페이지 + 소개 + 서비스', '모든 핵심 페이지'], default: '홈페이지 + 소개 + 서비스', type: 'select' },
      { name: 'tone', label: '브랜드 톤', choices: ['전문적/기업형', '친근한/접근하기 쉬운', '대담한/자신감 있는', '미니멀/깔끔한'], default: '전문적/기업형', type: 'select' },
    ],
    systemPrompt: `You are an expert website copywriter who creates compelling, conversion-focused content for business websites.
## CORE WEBSITE COPY PRINCIPLES
1. **User-Centric Messaging**: Write for what visitors need
2. **Clear Information Architecture**: Structure content for how people navigate
3. **Brand Voice Consistency**: Maintain consistent tone across all pages
4. **Conversion Integration**: Every page should guide visitors toward business goals
5. **SEO Awareness**: Incorporate keywords naturally throughout
## OUTPUT FORMAT
Pages to Generate: {{pages}}
Tone: {{tone}}
Generate complete copy for each requested page with headlines, body copy, and CTAs.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '새 웹사이트 개발 및 출시', description: '새 웹사이트를 구축하는 비즈니스들은 웹사이트 카피 생성기를 사용하여 모든 페이지에 대한 초기 콘텐츠를 개발합니다. 웹사이트 프로젝트는 종종 카피 단계에서 지연됩니다—디자인은 준비되었지만 콘텐츠가 없습니다. 도구는 일관된 브랜드 목소리로 완전한 페이지 콘텐츠(홈페이지, 소개, 서비스, 연락처)를 생성하여 프로젝트를 차단 해제하고 첫 번째 초안에 대한 비싼 카피라이터 의존도를 줄입니다.' },
      { title: '웹사이트 리디자인 및 콘텐츠 새로고침', description: '웹사이트 리디자인을 진행하는 회사들은 생성기를 사용하여 진화된 브랜드 포지셔닝에 맞는 새 카피를 만듭니다. 오래된 웹사이트는 종종 전략적 일관성 없이 수년에 걸쳐 축적된 카피를 가지고 있습니다. 도구는 페이지 전반에 걸쳐 전략적으로 정렬된 콘텐츠를 생성하여 리디자인이 디자인뿐만 아니라 메시징도 새로고침하도록 합니다.' },
      { title: '다중 페이지 콘텐츠 생산', description: '콘텐츠가 많은 웹사이트를 담당하는 마케팅 팀은 생성기를 사용하여 많은 페이지에 걸쳐 일관된 품질을 유지합니다. 위치 페이지, 서비스 변형 또는 콘텐츠 허브를 생성하든 도구는 웹사이트를 효과적으로 만드는 전략적 프레임워크를 유지하면서 브랜드에 맞는 카피를 생산하도록 돕습니다.' },
    ],
    faqs: [
      { question: '비즈니스 웹사이트에 어떤 페이지를 포함해야 하나요?', answer: '대부분의 비즈니스에 필수적인 페이지: 홈페이지(첫인상 및 탐색 허브), 소개 페이지(신뢰 구축 및 브랜드 스토리), 서비스/제품 페이지(제공하는 것), 연락처 페이지(연락 방법). 추가 페이지는 비즈니스에 따라 다릅니다: FAQ, 팀, 포트폴리오, 블로그, 추천, 리소스, 가격 등. 필수부터 시작하고 사용자 요구에 따라 확장하세요.' },
      { question: '좋은 홈페이지를 어떻게 작성하나요?', answer: '홈페이지는 세 가지 질문에 빠르게 답해야 합니다: 무엇을 하나요? 누구를 위해? 왜 선택해야 하나요? 포함하세요: 명확한 히어로 진술(가치 제안), 오퍼링 개요, 신뢰성 신호(로고, 추천), 중요한 페이지로의 명확한 경로. 모든 것을 말하려고 하지 마세요—홈페이지는 방문자를 더 깊은 콘텐츠로 안내합니다.' },
      { question: '웹사이트 카피는 얼마나 길어야 하나요?', answer: '페이지 목적과 사용자 의도에 맞춰 길이를 조정하세요. 홈페이지: 스캔 가능하고 집중된(300-600단어). 소개 페이지: 스토리텔링 유연성(400-800단어). 서비스 페이지: 포괄적이지만 스캔 가능(서비스당 400-1000단어). 더 길다고 항상 좋은 것은 아닙니다—방문자는 웹사이트를 스캔하므로 단어 수보다 구조가 더 중요합니다.' },
      { question: '소개 페이지 카피를 효과적으로 만드는 것은 무엇인가요?', answer: '훌륭한 소개 페이지는 진정성을 통해 신뢰를 구축합니다. 포함하세요: 기원 스토리(비즈니스가 존재하는 이유), 미션과 가치(믿는 것), 팀 소개(브랜드 뒤에 있는 사람), 차별화 요소(독특하게 만드는 것). 피하세요: 일반적인 기업 어투, 실체 없는 자화자찬, 개성 없는 텍스트 블록.' },
      { question: '전환하는 서비스 설명을 어떻게 작성하나요?', answer: '혜택(고객이 얻는 것)으로 시작하고, 기능(제공하는 것)으로 따르고, 프로세스(함께 일하는 것이 어떤 모습인지)를 포함하고, CTA(다음 단계)로 끝내세요. 설명 내에서 일반적인 질문과 이의를 다루세요. 구체적으로 하세요—"2시간 내 응답"이 "빠른 서비스 제공"보다 좋습니다.' },
      { question: '웹사이트 카피가 격식체여야 하나요 캐주얼해야 하나요?', answer: '타겟 청중과 산업 기대에 맞추세요. 전문 서비스는 종종 격식체이면서 접근 가능한 톤이 필요합니다. 소비자 브랜드는 종종 친근하고 캐주얼한 목소리에서 이점을 얻습니다. 기술 스타트업은 종종 자신감 있고 대화적인 카피를 사용합니다. 일관성이 특정 스타일보다 더 중요합니다—어떤 톤을 선택하든 모든 페이지에서 유지하세요.' },
      { question: 'SEO를 위해 웹사이트 카피를 어떻게 최적화하나요?', answer: '관련 키워드를 포함하세요: 페이지 제목, 헤더(H1, H2), 첫 번째 문단, 본문 카피 내 자연스럽게, 이미지 대체 텍스트. 인간을 위해 먼저 작성한 다음 키워드가 자연스럽게 나타나도록 하세요. 가독성을 희생하면서 키워드를 채우지 마세요.' },
      { question: '좋은 행동 유도의 조건은 무엇인가요?', answer: '효과적인 CTA는 구체적(정확히 무슨 일이 일어나는지), 혜택 중심(얻는 것), 눈에 띄게(시각적으로 돋보임), 잘 배치됩니다(충분한 정보 제공 후). 페이지 목적에 맞춰 CTA를 맞추세요: 홈페이지는 "작업 보기"라고 할 수 있고, 서비스 페이지는 "견적 받기"라고 할 수 있고, 소개 페이지는 "팀 만나기"라고 할 수 있습니다. 모든 페이지에는 명확한 다음 단계가 필요합니다.' },
      { question: '모바일 사용자를 위해 어떻게 작성하나요?', answer: '대부분의 웹사이트 트래픽은 모바일입니다. 작은 화면을 위해 작성하세요: 짧은 문단, 명확한 헤더, 스캔 가능한 구조, 중요한 정보 먼저. 전화 화면에서 카피가 어떻게 보이는지 테스트하세요—긴 텍스트 블록은 모바일에서 벽이 됩니다. 핵심 정보를 앞에 두세요 모바일 사용자들은 데스크톱 사용자보다 더 많이 스캔합니다.' },
      { question: '웹사이트 카피를 얼마나 자주 업데이트해야 하나요?', answer: '다음과 같은 경우 업데이트하세요: 비즈니스 오퍼링이 변경되었을 때, 포지셔닝이 진화했을 때, 카피가 성과가 좋지 않을 때(높은 이탈률), 정보가 구식이 되었을 때, 브랜드 목소리를 새로고침해야 할 때. 기본 페이지(홈페이지, 소개)는 가끔 검토가 필요하지만 지속적인 업데이트는 필요 없습니다. 서비스 페이지는 실제 오퍼링과 최신 상태를 유지해야 합니다. SEO 이점을 위해 정기적으로 새 콘텐츠를 추가하세요.' },
    ],
  },
  'resignation-letter-generator': {
    slug: 'resignation-letter-generator',
    name: '퇴직서 생성기',
    title: '무료 AI 퇴직서 생성기 | Analyze AI',
    description: '관계를 유지하면서 전문적인 퇴직서를 작성합니다. AI가 모든 상황에 맞는 퇴직 통보서를 만듭니다.',
    metaDescription: '관계를 유지하면서 전문적인 퇴직서를 작성합니다. AI가 모든 상황에 맞는 퇴직 통보서를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '상황 설명...',
    inputPlaceholder: '예: 마케팅 관리자로 3년 근무 후 퇴직, 새로운 기회를 위해 떠남',
    buttonText: '퇴직서 생성',
    maxLength: 2048,
    options: [
      { name: 'tone', label: '톤', choices: ['격식체', '따뜻한/감사한', '간결한/전문적', '상세한/설명적'], default: '격식체', type: 'select' },
      { name: 'reason', label: '퇴직 사유', choices: ['새로운 기회', '개인적 사유', '경력 변경', '이사', '학업 복귀', '구체적 사유 없음'], default: '새로운 기회', type: 'select' },
    ],
    systemPrompt: `You are an expert HR communication specialist who creates professional resignation letters that maintain relationships while clearly communicating departure.
## CORE RESIGNATION LETTER PRINCIPLES
1. **Professional Tone**: Maintain respect regardless of circumstances
2. **Clear Communication**: State departure date and intentions clearly
3. **Relationship Preservation**: Leave doors open for future connections
4. **Gratitude Expression**: Acknowledge positive experiences appropriately
5. **Transition Readiness**: Offer to help with handover
## ESSENTIAL ELEMENTS
1. Opening statement of resignation
2. Last working day (with notice period)
3. Brief, appropriate reason (optional)
4. Expression of gratitude
5. Offer to assist with transition
6. Professional closing
## OUTPUT FORMAT
Tone: {{tone}}
Reason: {{reason}}
Generate complete resignation letter with all essential elements.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '새로운 기회를 위한 전문적 퇴직', description: '새로운 역할을 위해 떠나는 직원들은 퇴직서 생성기를 사용하여 이전 고용주와의 관계를 유지하면서 전문적으로 소통합니다. 잘 작성된 퇴직서는 퇴직 과정을 원활하게 하고 미래의 추천과 네트워킹을 위한 문을 열어둡니다.' },
      { title: '어려운 상황에서의 퇴직', description: '부정적인 상황(갈등, 불만족, 독성 환경)에서 퇴직하는 직원들은 생성기를 사용하여 다리를 불태우지 않는 전문적인 서신을 작성합니다. 개인적 느낌과 관계없이 서면 퇴직은 중립적이고 전문적으로 유지되어야 합니다.' },
      { title: '빠른 전환 상황', description: '경쟁력 있는 오퍼로 인해 빠르게 행동해야 하는 직원들은 생성기를 사용하여 신속하게 전문적인 서신을 작성합니다. 시간이 중요할 때 도구는 처음부터 작성하지 않고도 적절한 포맷과 톤을 보장합니다.' },
    ],
    faqs: [
      { question: '퇴직서에 무엇을 포함해야 하나요?', answer: '퇴직 선언(직위와 함께), 마지막 근무일, 짧고 적절한 사유(선택), 기회와 경험에 대한 감사 표현, 인수인계 지원 제안, 전문적인 마무리를 포함하세요. 기본에 집중하고—퇴직서는 짧고 전문적으로 유지하세요.' },
      { question: '퇴직서 생성기는 무료인가요?', answer: '네, 도구는 회원가입이나 결제 없이 완전히 무료로 사용할 수 있습니다. 필요한 만큼 퇴직서를 생성하세요.' },
      { question: '퇴직서는 얼마나 길어야 하나요?', answer: '한 페이지 이하로 유지하세요—일반적으로 3-5개 문단. 퇴직서는 문서화 목적입니다. 구두 대화에서 세부 사항을 다루세요. 장황한 설명은 부정적인 인상을 남길 수 있고, 너무 짧으면 무례하게 보일 수 있습니다. 간결하고 완전한 균형을 찾으세요.' },
      { question: '떠나는 이유를 밝혀야 하나요?', answer: '반드시 그렇지 않습니다—그리고 종종 아닙니다. 원하면 간략하고 긍정적인 언급으로 충분합니다("새로운 기회 추구"). 부정적인 이유(관리, 문화, 갈등)는 쓰지 마세요. 떠나더라도 전문적 관계를 유지하는 것이 우선입니다.' },
      { question: '얼마나 미리 통보해야 하나요?', answer: '일반적인 표준은 2주 전 통보입니다. 관리직이나 복잡한 역할은 더 필요할 수 있습니다(3-4주). 계약서나 회사 정책에서 요구 사항을 확인하세요. 최소한을 제공하고—더 길면 불필요한 복잡성을 만들 수 있습니다.' },
      { question: '상사가 싫어도 감사를 표현해야 하나요?', answer: '기회, 성장, 경험에 대한 일반적인 감사는 관계가 어려웠더라도 적절합니다. 진심이 아닌 특정 칭찬을 강요할 필요는 없습니다. "이 역할에서 기회에 감사합니다"와 같은 중립적 문구도 괜찮습니다.' },
      { question: '퇴직서를 언제 제출해야 하나요?', answer: '이상적으로는 직속 상사와 대면(또는 화상) 대화 직후에. 먼저 구두로 알린 다음 서면 문서로 후속 조치하세요. 공식적으로 인정되려면 HR에도 사본을 보내세요. 구두 대화 없이 이메일이나 편지만 보내는 것은 피하세요.' },
      { question: '퇴직서는 이메일이어야 하나요 편지여야 하나요?', answer: '이메일이 가장 일반적인 형식이며 완벽하게 수용됩니다. 원격 근무나 상사가 다른 곳에 있는 경우 이메일이 실용적입니다. 대면 직장에서는 인쇄된 편지가 더 격식체로 느껴질 수 있습니다. 형식보다 내용이 더 중요합니다—전문적이고 명확하면 됩니다.' },
      { question: '부정적으로 떠나도 전문적인 서신을 작성해야 하나요?', answer: '네—항상. 서면 퇴직은 영구 기록입니다. 부정적인 상황은 구두로(퇴직 인터뷰에서) 다루거나 Glassdoor 리뷰에서 익명으로 다룰 수 있습니다. 퇴직서는 중립적이고 전문적으로 유지하세요.' },
      { question: '인수인계를 도와야 하나요?', answer: '통보 기간 동안 합리적인 인수인계 지원을 제공하세요. 문서화, 교육, 정보 전달이 표준입니다. 떠난 후 광범위한 가용성을 약속하지 마세요—깔끔한 단절이 일반적으로 가장 좋습니다. 서신에서 도움을 제안하되 경계를 유지하세요.' },
    ],
  },

  // ==================== KOREAN TRANSLATION - BATCH 4 (Tools 31-40) ====================
  'hook-generator': {
    slug: 'hook-generator',
    name: '훅 생성기',
    title: '무료 AI 훅 생성기 | Analyze AI',
    description: '콘텐츠를 위한 주목을 끄는 훅을 즉시 생성하세요. AI가 독자를 사로잡고 참여도를 높이는 매력적인 첫 문장을 생성합니다.',
    metaDescription: '콘텐츠를 위한 주목을 끄는 훅을 즉시 생성하세요. AI가 독자를 사로잡고 참여도를 높이는 매력적인 첫 문장을 생성합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '콘텐츠 주제를 설명하세요...',
    inputPlaceholder: '예: 원격 근무자를 위한 생산성 팁에 관한 블로그 포스트',
    buttonText: '훅 생성',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: '훅 톤',
        choices: ['격식체', '대화체', '대담/도전적', '영감을 주는', '분석적'],
        default: '대화체',
        type: 'select',
      },
      {
        name: 'hook_type',
        label: '훅 유형',
        choices: ['혼합 (모든 유형)', '질문', '통계/사실', '이야기/일화', '반론', '약속/혜택', '호기심 유발'],
        default: '혼합 (모든 유형)',
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
Tone: {{tone}}
Hook Type: {{hook_type}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '매력적인 도입부 작성', description: '작가, 기자, 콘텐츠 제작자들이 훅 생성기를 사용하여 기사, 블로그 포스트 등을 위한 매력적인 첫 문장을 작성합니다. 주제나 핵심 아이디어를 입력하면 도구가 독자의 관심을 즉시 사로잡는 매력적인 훅을 생성합니다.' },
      { title: '마케팅 및 광고 카피', description: '기업과 마케터들이 훅 생성기를 활용하여 마케팅 캠페인, 광고, 홍보 콘텐츠를 위한 설득력 있는 첫 문장을 만듭니다. 제품 세부 정보와 타겟 오디언스 정보를 입력하면 잠재 고객을 효과적으로 참여시키는 주목을 끄는 훅을 생성합니다.' },
      { title: '연설 및 프레젠테이션', description: '연사, 발표자, 교육자들이 연설이나 프레젠테이션을 준비할 때 훅 생성기를 활용합니다. 주제나 주요 아이디어를 입력하면 처음부터 청중을 참여시키는 주목을 끄는 첫 문장을 생성하여 프레젠테이션을 더 인상적이고 기억에 남게 만듭니다.' },
    ],
    faqs: [
      { question: '글쓰기에서 훅이란 무엇인가요?', answer: '훅은 독자의 주목을 즉시 사로잡도록 설계된 첫 문장입니다. 효과적인 훅은 호기심을 유발하거나, 대담한 주장을 하거나, 도발적인 질문을 하거나, 청중이 계속 읽고, 보고, 듣고 싶게 만드는 놀라운 정보를 제시합니다.' },
      { question: '이 도구는 어떤 유형의 훅을 생성할 수 있나요?', answer: '이 도구는 질문 훅, 통계/사실 훅, 이야기/일화 훅, 반론 훅, 약속/혜택 훅, 호기심 유발 훅, 공감/고통점 훅 등 다양한 훅 유형을 생성합니다. 각 유형은 다른 목적과 청중에게 적합합니다.' },
      { question: '더 나은 훅 제안을 받으려면 어떻게 해야 하나요?', answer: '주제, 타겟 오디언스, 콘텐츠 목적에 대한 구체적인 맥락을 제공하세요. "마케팅 팁" 대신 "밀레니얼을 타겟으로 하는 이커머스 비즈니스를 위한 이메일 마케팅 전략"처럼 시도해 보세요.' },
      { question: '비디오 콘텐츠에도 이 훅을 사용할 수 있나요?', answer: '물론입니다. 훅은 비디오 스크립트, 유튜브 인트로, 틱톡 오프닝 및 빠르게 주목을 끌어야 하는 모든 비디오 콘텐츠에 필수적입니다. 동일한 원칙이 적용됩니다—구어 전달에 맞게 언어를 조정하세요.' },
      { question: '훅은 얼마나 길어야 하나요?', answer: '대부분의 효과적인 훅은 1-3문장입니다. 호기심을 유발할 만큼 길어야 하지만 영향력을 유지할 만큼 짧아야 합니다. 소셜 미디어나 비디오의 경우 더 짧은 훅(15단어 미만)이 종종 더 잘 작동합니다.' },
      { question: '훅과 클릭베이트의 차이점은 무엇인가요?', answer: '좋은 훅은 진정한 호기심을 유발하고 약속을 이행하는 반면, 클릭베이트는 감정을 조작하고 종종 실망시킵니다. 효과적인 훅은 콘텐츠가 충족할 수 있는 적절한 기대를 설정하여 신뢰를 쌓습니다.' },
      { question: '훅은 브랜드 보이스와 일치해야 하나요?', answer: '네. 훅은 전체 브랜드 톤과 청중의 기대에 맞아야 합니다. 격식 있는 비즈니스 청중은 캐주얼한 라이프스타일 블로그 청중과 다른 언어를 기대합니다. 톤 설정을 사용하여 브랜드에 맞추세요.' },
      { question: '같은 훅을 다른 플랫폼에 사용할 수 있나요?', answer: '다른 플랫폼에 맞게 훅을 조정해야 할 수 있습니다. 긴 형식의 블로그 포스트에 효과적인 훅은 소셜 미디어용으로 더 짧고 임팩트 있게 만들어야 할 수 있습니다. 플랫폼별 관례와 청중 기대를 고려하세요.' },
      { question: '어떤 훅이 가장 효과적인지 어떻게 테스트하나요?', answer: 'A/B 테스트가 가장 신뢰할 수 있는 방법입니다. 이메일 제목, 소셜 포스트 또는 광고 카피에서 다른 훅을 사용하고 오픈율, 클릭률, 참여 지표를 추적하여 최고 성과자를 식별하세요.' },
      { question: '훅 다음에는 무엇이 와야 하나요?', answer: '훅은 메인 콘텐츠로 자연스럽게 전환되어야 합니다. 생성한 호기심을 충족시키는 맥락, 지원 정보 제공 또는 훅이 한 약속을 이행하기 시작하는 내용으로 따르세요.' },
    ],
  },
  'social-media-bio-generator': {
    slug: 'social-media-bio-generator',
    name: '소셜 미디어 바이오 생성기',
    title: '무료 AI 소셜 미디어 바이오 생성기',
    description: '소셜 미디어 프로필을 위한 완벽한 바이오를 즉시 생성하세요. AI가 개인 브랜드를 보여주고 팔로워를 유치하는 매력적이고 전문적인 바이오를 만듭니다.',
    metaDescription: '소셜 미디어 프로필을 위한 완벽한 바이오를 즉시 생성하세요. AI가 개인 브랜드를 보여주고 팔로워를 유치하는 매력적이고 전문적인 바이오를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '자신 또는 브랜드를 설명하세요...',
    inputPlaceholder: '예: 뉴욕 기반 소규모 비즈니스의 온라인 성장을 돕는 디지털 마케팅 컨설턴트',
    buttonText: '바이오 생성',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: '플랫폼',
        choices: ['인스타그램', '트위터/X', '링크드인', '틱톡', '일반 (모든 플랫폼)'],
        default: '일반 (모든 플랫폼)',
        type: 'select',
      },
      {
        name: 'tone',
        label: '바이오 톤',
        choices: ['전문적', '친근한', '대담한', '재치있는', '미니멀'],
        default: '전문적',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media strategist and personal branding consultant specializing in crafting compelling bios that make strong first impressions. Your role is to create concise, engaging profile descriptions that effectively communicate identity, value, and personality across social media platforms.
Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '개인 브랜딩', description: '강력한 개인 브랜드를 구축하려는 개인들이 바이오 생성기를 사용하여 자신의 정체성, 전문성, 고유한 특성을 효과적으로 나타내는 매력적인 프로필 설명을 만듭니다. 관련 정보를 입력하면 강한 첫인상을 주고 적합한 팔로워를 유치하는 잘 작성된 바이오를 생성합니다.' },
      { title: '인플루언서 마케팅', description: '인플루언서와 콘텐츠 크리에이터들이 바이오 생성기를 활용하여 니치 전문성을 강조하고 잠재적 브랜드 협업을 유치하는 매력적인 바이오를 만듭니다. 콘텐츠 초점, 주요 성과, 청중 인구 통계를 입력하면 신뢰성을 확립하고 브랜드에 어필하는 전문적인 바이오를 생성합니다.' },
      { title: '비즈니스 홍보', description: '소규모 비즈니스, 스타트업, 기업가들이 바이오 생성기를 사용하여 가치 제안을 효과적으로 전달하는 간결하고 임팩트 있는 바이오를 만듭니다. 비즈니스 정보, 고유한 판매 포인트, 연락처 정보를 입력하면 온라인 존재감을 확립하고 잠재 고객을 유치하는 전문적인 바이오를 생성합니다.' },
    ],
    faqs: [
      { question: '소셜 미디어 바이오에 무엇을 포함해야 하나요?', answer: '강력한 바이오는 일반적으로 포함합니다: 당신이 누구인지 또는 무엇을 하는지, 가치 제안 또는 전문성, 성과나 자격 증명과 같은 신뢰성 마커, 개성 터치, 그리고 콜투액션. 구체적인 조합은 플랫폼과 목표에 따라 다릅니다.' },
      { question: '바이오는 얼마나 길어야 하나요?', answer: '길이는 플랫폼에 따라 다릅니다. 인스타그램은 150자, 트위터 160자, 링크드인 헤더 220자를 허용합니다. 모든 공간을 채우는 것보다 모든 단어가 의미 있게 만드는 데 집중하세요. 간결한 바이오가 종종 더 임팩트 있습니다.' },
      { question: '바이오에 이모지를 사용해야 하나요?', answer: '이모지는 가독성을 높이는 개성과 시각적 구분을 추가할 수 있습니다. 특히 인스타그램과 틱톡에서. 전략적으로 사용하고 브랜드와 일치하는지 확인하세요. 전문적인 링크드인 바이오는 일반적으로 더 적거나 이모지를 사용하지 않습니다.' },
      { question: '바이오를 얼마나 자주 업데이트해야 하나요?', answer: '역할, 초점 또는 성과가 크게 변경될 때 바이오를 업데이트하세요. 많은 전문가들이 분기별로 업데이트합니다. 또한 니치에 관련된 프로모션, 출시 또는 트렌드 주제에 대한 계절별 업데이트를 고려하세요.' },
      { question: '모든 플랫폼에서 바이오가 같아야 하나요?', answer: '핵심 메시지는 일관되게 유지할 수 있지만, 각 플랫폼에 맞게 형식과 톤을 조정하세요. 링크드인 바이오는 틱톡 바이오보다 더 전문적이어야 합니다. 플랫폼 문화에 맞게 글자 수와 이모지 사용을 조정하세요.' },
      { question: '바이오를 돋보이게 하려면 어떻게 해야 하나요?', answer: '고유한 차별화 요소로 시작하고, 일반적인 주장 대신 구체적인 성과를 사용하고, 단어 선택이나 유머로 개성을 주입하고, 가치 제안을 즉시 명확하게 하세요. 진부한 표현과 과도하게 사용된 문구를 피하세요.' },
      { question: '바이오에 키워드를 포함해야 하나요?', answer: '네, 사람들이 당신을 찾는 데 도움이 되는 관련 키워드를 포함하세요. 타겟 청중이 검색하는 용어를 사용하되 자연스럽게 작성하세요—키워드만 나열하지 마세요. 전략적인 키워드 사용은 발견 가능성을 향상시킵니다.' },
      { question: '바이오에 해시태그를 사용할 수 있나요?', answer: '바이오의 해시태그는 일부 플랫폼에서 분류 및 발견 가능성에 도움이 될 수 있습니다. 팔로워가 사용하기를 원하는 경우 브랜드 해시태그가 잘 작동합니다. 최대 1-3개의 관련 해시태그를 사용하세요. 링크드인보다 인스타그램과 트위터에서 더 잘 작동합니다.' },
      { question: '비즈니스 계정과 개인 계정의 바이오는 어떻게 다르게 작성하나요?', answer: '비즈니스 바이오는 전달되는 가치, 제품/서비스, 신뢰성에 초점을 맞춰야 합니다. 개인 바이오는 더 많은 개성, 관심사, 개인 성과를 포함할 수 있습니다. 비즈니스 바이오는 종종 연락처 정보나 콜투액션을 포함합니다.' },
      { question: '바이오에서 피해야 할 실수는 무엇인가요?', answer: '피해야 할 것: 너무 모호하거나 일반적인 것, "구루"나 "닌자" 같은 과도하게 사용된 문구, 너무 길거나 밀집된 바이오, 콜투액션을 포함하는 것을 잊는 것, 청중이 이해하지 못하는 전문 용어 사용.' },
    ],
  },
  'instagram-bio-generator': {
    slug: 'instagram-bio-generator',
    name: '인스타그램 바이오 생성기',
    title: '무료 AI 인스타그램 바이오 생성기',
    description: '몇 초 만에 완벽한 인스타그램 바이오를 만드세요. AI가 팔로워를 유치하고 개인 브랜드를 보여주는 매력적이고 개성 넘치는 바이오를 생성합니다.',
    metaDescription: '몇 초 만에 완벽한 인스타그램 바이오를 만드세요. AI가 팔로워를 유치하고 개인 브랜드를 보여주는 매력적이고 개성 넘치는 바이오를 생성합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '자신 또는 브랜드를 설명하세요...',
    inputPlaceholder: '예: LA 기반 바쁜 직장인들의 건강한 몸 만들기를 돕는 피트니스 코치',
    buttonText: '바이오 생성',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: '바이오 톤',
        choices: ['프로페셔널 캐주얼', '재미있고 트렌디한', '미니멀 에스테틱', '대담하고 직접적인', '따뜻하고 초대하는'],
        default: '프로페셔널 캐주얼',
        type: 'select',
      },
      {
        name: 'include_emojis',
        label: '이모지 포함',
        choices: ['예', '아니오'],
        default: '예',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert Instagram strategist and personal branding consultant specializing in crafting bios optimized for the Instagram platform. Your role is to create compelling 150-character bios that maximize impact within Instagram's unique ecosystem.
Tone: {{tone}}
Include Emojis: {{include_emojis}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '개인 브랜딩 최적화', description: '인스타그램에서 개인 브랜드를 구축하는 개인들이 바이오 생성기를 사용하여 전문성, 개성, 고유한 가치를 효과적으로 나타내는 바이오를 만듭니다. 니치, 성과, 목표에 대한 관련 정보를 입력하면 혼잡한 플랫폼에서 돋보이고 이상적인 팔로워를 유치하는 창의적인 바이오를 생성합니다.' },
      { title: '비즈니스 프로필 향상', description: '비즈니스와 브랜드들이 인스타그램 바이오 생성기를 사용하여 인스타그램의 150자 제한 내에서 가치 제안을 명확하게 전달하는 간결하고 임팩트 있는 바이오를 작성합니다. 핵심 서비스, 고유한 판매 포인트, 타겟 청중 세부 정보를 입력하면 프로필 방문을 전환으로 이끄는 전문적인 바이오를 생성합니다.' },
      { title: '콘텐츠 크리에이터 지원', description: '콘텐츠 크리에이터, 유튜버, 팟캐스터, 블로거들이 바이오 생성기를 활용하여 콘텐츠 니치를 보여줄 뿐만 아니라 팔로워가 콜투액션에 참여하도록 장려하는 바이오를 만듭니다. 도구는 콘텐츠 초점, 게시 일정, 링크인바이오 제공 사항을 강조하는 바이오 작성을 돕습니다.' },
    ],
    faqs: [
      { question: '인스타그램 바이오의 글자 수 제한은 얼마인가요?', answer: '인스타그램 바이오는 최대 150자입니다. 여기에는 공백, 이모지, 줄바꿈이 포함됩니다. 이름 필드는 별도이며 추가로 30자를 허용합니다.' },
      { question: '인스타그램 바이오는 어떻게 구성해야 하나요?', answer: '명확한 계층 구조를 사용하세요: 당신이 누구인지 또는 무엇을 하는지로 시작하고, 가치 제안이나 독특한 각도를 추가하고, 공간이 허락하면 신뢰성 마커를 포함하고, 링크로 사람들을 안내하는 콜투액션으로 마무리하세요.' },
      { question: '이모지를 몇 개 사용해야 하나요?', answer: '시각적 마커나 줄 시작점으로 2-5개의 이모지를 전략적으로 사용하세요. 너무 많으면 어수선해 보일 수 있습니다. 니치나 개성을 나타내고 텍스트를 더 쉽게 스캔할 수 있도록 돕는 이모지를 선택하세요.' },
      { question: '인스타그램 바이오에 줄바꿈을 사용해야 하나요?', answer: '네, 줄바꿈은 가독성을 향상시키고 정보를 명확하게 정리할 수 있게 합니다. 역할, 가치 제안, CTA와 같은 다른 요소를 구분하는 데 사용하세요.' },
      { question: '인스타그램 바이오에 줄바꿈을 어떻게 추가하나요?', answer: '적절한 서식으로 메모 앱에 바이오를 입력한 다음 인스타그램에 복사하여 붙여넣을 수 있습니다. 또는 보이지 않는 문자나 바이오 서식 도구를 사용하세요.' },
      { question: '인스타그램 바이오에 해시태그를 포함해야 하나요?', answer: '매우 관련성 있는 해시태그 1-2개가 분류에 도움이 될 수 있지만 바이오에서는 클릭할 수 없습니다. 팔로워가 사용하기를 원하는 경우 브랜드 해시태그가 잘 작동합니다. 일반적으로 해시태그는 포스트보다 바이오에서 덜 중요합니다.' },
      { question: '인스타그램 바이오에 가장 좋은 콜투액션은 무엇인가요?', answer: '효과적인 CTA 예시: "아래 링크 👇", "지금 쇼핑하기", "콜라보 DM", "링크에서 무료 가이드", "매주 화요일 새 영상". 방문자가 하기를 원하는 것에 맞게 구체적으로 만드세요.' },
      { question: '팔로워를 전환시키는 바이오는 어떻게 작성하나요?', answer: '기능보다 혜택에 초점을 맞추세요. "나는 피트니스 코치입니다" 대신 "바쁜 엄마들이 90일 안에 10kg 감량하도록 돕습니다"를 시도해 보세요. 타겟 청중의 욕구나 고통점을 직접적으로 다루세요.' },
      { question: '인스타그램 바이오는 다른 소셜 미디어 바이오와 일치해야 하나요?', answer: '핵심 메시지와 브랜드는 일관되어야 하지만 인스타그램의 글자 제한과 시각적 문화에 맞게 형식을 조정하세요. 인스타그램 청중은 예를 들어 링크드인보다 더 많은 개성과 이모지를 기대합니다.' },
      { question: '인스타그램 바이오를 얼마나 자주 업데이트해야 하나요?', answer: '초점, 제공 사항 또는 성과가 변경될 때 업데이트하세요. 많은 크리에이터들이 월별 또는 계절별로 업데이트하여 현재 프로젝트, 프로모션 또는 콘텐츠 테마를 강조합니다.' },
    ],
  },
  'social-media-caption-generator': {
    slug: 'social-media-caption-generator',
    name: '소셜 미디어 캡션 생성기',
    title: '무료 AI 소셜 미디어 캡션 생성기',
    description: '좋아요, 댓글, 공유를 유도하는 매력적인 소셜 미디어 캡션을 생성하세요. AI가 인스타그램, 페이스북, 트위터 등을 위한 매력적인 포스트 카피를 만듭니다.',
    metaDescription: '좋아요, 댓글, 공유를 유도하는 매력적인 소셜 미디어 캡션을 생성하세요. AI가 인스타그램, 페이스북, 트위터 등을 위한 매력적인 포스트 카피를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '포스트 내용을 설명하세요...',
    inputPlaceholder: '예: 새로운 제품 출시 사진 - 아웃도어 애호가를 위한 지속 가능한 물병',
    buttonText: '캡션 생성',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: '플랫폼',
        choices: ['인스타그램', '페이스북', '트위터/X', '링크드인', '틱톡', '일반'],
        default: '인스타그램',
        type: 'select',
      },
      {
        name: 'tone',
        label: '캡션 톤',
        choices: ['전문적', '캐주얼', '유머러스', '영감을 주는', '도전적'],
        default: '캐주얼',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media content strategist specializing in creating engaging captions that drive engagement across multiple platforms. Your role is to craft compelling post copy that resonates with audiences and prompts interaction.
Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '효율적인 소셜 미디어 콘텐츠 제작', description: '소셜 미디어 매니저와 콘텐츠 크리에이터들이 캡션 생성기를 사용하여 콘텐츠 제작 프로세스를 간소화합니다. 관련 키워드를 입력하거나 콘텐츠를 설명하면 도구가 빠르게 매력적인 캡션을 생성하여 품질을 유지하면서 시간을 절약하고 플랫폼 전반에서 일관된 게시 일정을 보장합니다.' },
      { title: '광고 캠페인 카피 최적화', description: '소셜 미디어 광고 캠페인을 운영하는 비즈니스들이 캡션 생성기를 사용하여 매력적인 광고 카피 변형을 만듭니다. 제품 세부 정보, 타겟 청중 정보, 캠페인 목표를 입력하면 클릭과 전환을 유도하는 설득력 있는 캡션을 생성하여 광고 ROI를 개선합니다.' },
      { title: '브랜드 참여 향상', description: '참여도를 높이려는 브랜드들이 캡션 생성기를 사용하여 트렌드 주제, 현재 이벤트, 청중 관심사에 맞는 콘텐츠를 만듭니다. 도구는 상호작용을 장려하고, 커뮤니티를 구축하고, 브랜드 존재감을 강화하는 신선하고 관련성 있는 콘텐츠를 유지하는 데 도움을 줍니다.' },
    ],
    faqs: [
      { question: '효과적인 캡션의 요소는 무엇인가요?', answer: '효과적인 캡션은 스크롤을 멈추게 하는 강력한 훅, 본문에서 가치나 감정 전달, 명확한 콜투액션을 갖추고 있습니다. 특정 청중과 플랫폼에 맞게 작성되며, 적절한 톤과 길이를 가집니다.' },
      { question: '소셜 미디어 캡션은 얼마나 길어야 하나요?', answer: '길이는 플랫폼과 목적에 따라 다릅니다. 인스타그램은 최대 2,200자를 허용하지만 더 짧은 것이 종종 더 잘 작동합니다. 트위터는 280자로 제한됩니다. 링크드인 포스트는 더 길 수 있습니다. 청중과 함께 다른 길이를 테스트해 보세요.' },
      { question: '캡션에 이모지를 사용해야 하나요?', answer: '이모지는 시각적 흥미와 개성을 추가하여 참여도를 높일 수 있습니다. 텍스트를 나누고, 포인트를 강조하거나, 감정을 추가하는 데 사용하세요. 적절한 양은 브랜드 보이스와 플랫폼에 따라 다릅니다.' },
      { question: '해시태그를 몇 개 포함해야 하나요?', answer: '인스타그램: 3-10개의 관련 해시태그. 트위터: 최대 1-2개. 링크드인: 끝에 3-5개. 틱톡: 3-5개의 트렌드 및 니치 해시태그. 수량보다 품질과 관련성이 더 중요합니다.' },
      { question: '캡션에 가장 좋은 콜투액션은 무엇인가요?', answer: 'CTA를 목표에 맞추세요: 참여를 위한 "아래에 댓글 달기", 가치 있는 콘텐츠를 위한 "저장하기", 전환을 위한 "바이오 링크", 도달을 위한 "필요한 사람과 공유하기", 토론을 위한 "어떻게 생각하세요?"' },
      { question: '더 많은 댓글을 받는 캡션은 어떻게 작성하나요?', answer: '구체적인 질문을 하고, "이것 vs 저것" 토론을 만들고, 의견을 공유하고 반론을 초대하고, 빈칸 채우기 프롬프트를 사용하거나, 청중에게 추천이나 조언을 요청하세요.' },
      { question: '캡션은 각 플랫폼마다 다르게 작성해야 하나요?', answer: '네. 각 플랫폼은 다른 글자 제한, 청중 기대, 모범 사례가 있습니다. 링크드인 포스트는 같은 주제에 대해 말하는 인스타그램 캡션보다 더 전문적이어야 합니다.' },
      { question: '캡션에서 브랜드 보이스를 어떻게 유지하나요?', answer: '캡션 템플릿과 가이드라인을 만들고, 일관된 어휘와 문구를 사용하고, 유사한 이모지와 서식 스타일을 유지하고, 모든 포스트에서 톤이 브랜드 개성과 일치하도록 하세요.' },
      { question: '캡션에서 가장 중요한 부분은 무엇인가요?', answer: '첫 줄(훅)이 가장 중요합니다. 사용자가 "더 보기"를 클릭하기 전에 보는 것이기 때문입니다. 클릭을 받고 스크롤을 멈추게 할 만큼 매력적으로 만드세요.' },
      { question: '새 캡션으로 얼마나 자주 게시해야 하나요?', answer: '게시 빈도는 플랫폼과 품질 있는 콘텐츠를 만들 수 있는 능력에 따라 다릅니다. 일관성이 빈도보다 중요합니다. 평범한 캡션을 많이 만드는 것보다 품질 있는 캡션에 집중하세요.' },
    ],
  },
  'instagram-caption-generator': {
    slug: 'instagram-caption-generator',
    name: '인스타그램 캡션 생성기',
    title: '무료 AI 인스타그램 캡션 생성기',
    description: '스크롤을 멈추게 하는 인스타그램 캡션을 즉시 생성하세요. AI가 좋아요, 댓글, 저장을 높이는 릴스, 캐러셀, 피드 포스트용 매력적인 캡션을 생성합니다.',
    metaDescription: '스크롤을 멈추게 하는 인스타그램 캡션을 즉시 생성하세요. AI가 좋아요, 댓글, 저장을 높이는 릴스, 캐러셀, 피드 포스트용 매력적인 캡션을 생성합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '포스트 또는 이미지를 설명하세요...',
    inputPlaceholder: '예: 더 나은 수면 습관을 위한 5가지 팁이 담긴 캐러셀 포스트',
    buttonText: '캡션 생성',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: '콘텐츠 유형',
        choices: ['피드 포스트', '릴스', '캐러셀', '스토리'],
        default: '피드 포스트',
        type: 'select',
      },
      {
        name: 'tone',
        label: '캡션 톤',
        choices: ['진정성 있는', '장난스러운', '전문적', '트렌디한', '영감을 주는'],
        default: '진정성 있는',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram content strategist specializing in creating captions optimized for the Instagram platform. Your role is to craft engaging post copy that maximizes engagement within Instagram's unique ecosystem, considering visual content context.
Content Type: {{content_type}}
Tone: {{tone}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '효율적인 콘텐츠 제작', description: '콘텐츠 크리에이터와 소셜 미디어 매니저들이 인스타그램 캡션 생성기를 사용하여 게시 워크플로우를 간소화합니다. 이미지 설명이나 콘텐츠 테마를 제공하면 도구가 인스타그램의 모범 사례에 맞는 매력적인 캡션을 빠르게 생성하여 품질을 유지하면서 시간을 절약합니다.' },
      { title: '청중 참여 및 상호작용', description: '사용자들이 캡션 생성기를 활용하여 의미 있는 참여를 유도하는 캡션을 만듭니다. 콜투액션 문구, 생각을 자극하는 질문, 인터랙티브 요소를 통합하여 생성된 캡션은 팔로워가 포스트에 좋아요, 댓글, 공유하도록 장려하여 더 강한 커뮤니티 연결을 구축합니다.' },
      { title: '브랜드 홍보 및 스토리텔링', description: '비즈니스와 브랜드들이 캡션 생성기를 사용하여 브랜드 정체성에 맞고 핵심 메시지를 전달하는 매력적인 내러티브를 작성합니다. 브랜드 가치, 캠페인 세부 정보 또는 제품 기능을 입력하면 개성을 보여주고, 이야기를 전하고, 인스타그램에서 브랜드 존재감을 강화하는 캡션을 생성합니다.' },
    ],
    faqs: [
      { question: '인스타그램 캡션은 얼마나 길어야 하나요?', answer: '길이는 콘텐츠 유형에 따라 다릅니다. 릴스는 종종 짧은 캡션(150자 미만)으로 잘 작동하고, 교육 캐러셀은 더 긴 캡션(500-2,200자)을 사용할 수 있습니다. 청중에게 무엇이 효과적인지 테스트해 보세요.' },
      { question: '캡션 첫 줄에 무엇을 넣어야 하나요?', answer: '첫 줄은 사용자가 "더 보기"를 탭하기 전에 ~125자만 표시되므로 매우 중요합니다. 호기심을 유발하거나, 대담한 의견을 밝히거나, 질문을 하거나, 가치를 약속하는 훅을 사용하여 전체 캡션을 읽도록 장려하세요.' },
      { question: '릴스 vs 피드 포스트 캡션은 어떻게 작성하나요?', answer: '릴스 캡션은 더 짧고, 임팩트 있어야 하며, 비디오 콘텐츠를 참조해야 합니다. 트렌드 해시태그와 오디오 언급을 포함할 수 있습니다. 피드 포스트 캡션은 사용자가 정적 이미지에 더 많은 시간을 보내므로 더 길고 스토리 중심적일 수 있습니다.' },
      { question: '해시태그는 캡션에 넣어야 하나요 댓글에 넣어야 하나요?', answer: '두 방법 모두 효과적입니다. 캡션의 해시태그는 모든 것을 함께 유지하고, 댓글의 해시태그는 캡션을 더 깔끔하게 유지합니다. 인스타그램 알고리즘은 두 가지를 비슷하게 취급합니다. 브랜드 미학에 맞는 것을 테스트하세요.' },
      { question: '포스트에 더 많은 댓글을 받으려면 어떻게 해야 하나요?', answer: '구체적인 질문을 하고(단순히 "생각은?"이 아니라), "이것 vs 저것" 토론을 만들고, 의견을 공유하고 반론을 초대하고, 빈칸 채우기 프롬프트를 사용하거나, 추천을 요청하세요. 댓글을 쉽고 보람 있게 만드세요.' },
      { question: '저장을 장려하는 캡션은 어떻게 작성하나요?', answer: '가치 있고 참조할 만한 콘텐츠를 만드세요—팁, 튜토리얼, 체크리스트, 인용문, 또는 사람들이 돌아오고 싶어하는 정보. "나중을 위해 저장하세요" 프롬프트를 사용하고 저장을 위해 특별히 콘텐츠를 디자인하세요.' },
      { question: '인스타그램 캡션에 이모지를 사용해야 하나요?', answer: '네, 이모지는 인스타그램에서 참여도를 높입니다. 개성을 추가하고, 텍스트를 나누고, CTA에 주목을 끌거나, 단어를 대체하는 데 사용하세요. 양은 브랜드 보이스에 따라 다릅니다—최소 1-3개, 캐주얼 브랜드는 더 많이.' },
      { question: '캐러셀 포스트 캡션은 어떻게 작성하나요?', answer: '훅으로 주제를 소개하고, 캐러셀임을 언급하고("스와이프..." 또는 "이 포스트에 5가지 팁"), 내부 가치를 티저하고, 캐러셀 포스트는 저장하고 참조하도록 설계되었으므로 저장 CTA로 끝내세요.' },
      { question: '인스타그램 캡션에 가장 좋은 콜투액션은 무엇인가요?', answer: 'CTA를 목표에 맞추세요: 클릭을 위한 "바이오 링크", 가치 있는 콘텐츠를 위한 "저장하기", 도달을 위한 "필요한 사람을 태그하세요...", 참여를 위한 "동의하면 [이모지] 댓글 달기", 좋아요를 위한 "동의하면 더블 탭".' },
      { question: '캡션을 이미지에 어떻게 맞추나요?', answer: '캡션은 이미지가 보여주는 것을 반복하는 것이 아니라 보완해야 합니다. 이미지가 전달할 수 없는 맥락을 추가하고, 사진 뒤의 이야기를 전하고, 생각이나 감정을 공유하거나, 시각적 요소와 관련된 유용한 정보를 제공하세요.' },
    ],
  },
  'social-media-hashtag-generator': {
    slug: 'social-media-hashtag-generator',
    name: '소셜 미디어 해시태그 생성기',
    title: '무료 AI 소셜 미디어 해시태그 생성기',
    description: '도달 범위와 참여도를 높이는 효과적인 해시태그를 생성하세요. AI가 인스타그램, 틱톡, 트위터 등을 위한 전략적인 해시태그 세트를 만듭니다.',
    metaDescription: '도달 범위와 참여도를 높이는 효과적인 해시태그를 생성하세요. AI가 인스타그램, 틱톡, 트위터 등을 위한 전략적인 해시태그 세트를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '콘텐츠 또는 니치를 설명하세요...',
    inputPlaceholder: '예: 바쁜 직장인을 위한 비건 식사 준비 레시피',
    buttonText: '해시태그 생성',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: '플랫폼',
        choices: ['인스타그램', '틱톡', '트위터/X', '링크드인', '일반'],
        default: '인스타그램',
        type: 'select',
      },
      {
        name: 'hashtag_count',
        label: '해시태그 수',
        choices: ['5개 해시태그', '10개 해시태그', '15개 해시태그', '20개 해시태그', '30개 해시태그'],
        default: '10개 해시태그',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media strategist specializing in hashtag research and strategy. Your role is to generate relevant, effective hashtags that increase content discoverability and engagement across social media platforms.
Platform: {{platform}}
Hashtag Count: {{hashtag_count}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '콘텐츠 마케팅 캠페인', description: '소셜 미디어 마케터들이 해시태그 생성기를 사용하여 마케팅 캠페인의 해시태그 전략을 최적화합니다. 관련 키워드나 주제를 입력하면 도구가 캠페인과 관련된 트렌드 및 인기 해시태그를 생성하여 콘텐츠 가시성을 극대화하고 더 넓은 청중에게 도달하도록 돕습니다.' },
      { title: '소셜 미디어 SEO 향상', description: '비즈니스와 개인들이 해시태그 생성기를 사용하여 소셜 미디어 발견 가능성을 개선합니다. 제품, 서비스 또는 콘텐츠와 관련된 최적화된 해시태그를 생성하여 유사한 주제에 관심 있는 사용자가 포스트를 찾을 가능성을 높이고 온라인 존재감과 도달 범위를 확장합니다.' },
      { title: '인플루언서 도달 범위 극대화', description: '인플루언서들이 해시태그 생성기를 사용하여 콘텐츠 니치 내에서 관련성 있고 트렌드인 해시태그를 발견합니다. 도구는 새로운 팔로워를 유치하면서 콘텐츠에 진정으로 관심 있는 청중으로부터 더 깊은 참여를 촉진하는 최적의 해시태그 조합을 식별하는 데 도움을 줍니다.' },
    ],
    faqs: [
      { question: '해시태그를 몇 개 사용해야 하나요?', answer: '플랫폼 권장 사항: 인스타그램 5-10개(최대 30개), 트위터 1-2개, 링크드인 3-5개, 틱톡 3-5개. 수량보다 품질과 관련성이 더 중요합니다. 너무 많은 해시태그는 스팸처럼 보일 수 있습니다.' },
      { question: '효과적인 해시태그의 요소는 무엇인가요?', answer: '효과적인 해시태그는 콘텐츠와 관련이 있고, 타겟 청중이 사용하며, 관리 가능한 경쟁(너무 광범위하거나 너무 좁지 않음)을 가지고, 발견을 위해 콘텐츠를 분류하는 데 도움을 줍니다.' },
      { question: '인기 해시태그를 사용해야 하나요 니치 해시태그를 사용해야 하나요?', answer: '둘 다 혼합하여 사용하세요. 인기 해시태그(1M+ 포스트)는 넓은 가시성을 제공하지만 경쟁이 높습니다. 니치 해시태그(10K-100K 포스트)는 낮은 경쟁과 더 타겟팅된 도달을 제공합니다. 최적의 전략을 위해 둘 다 균형을 맞추세요.' },
      { question: '트렌드 해시태그는 어떻게 찾나요?', answer: '플랫폼 탐색/트렌드 섹션을 확인하고, 소셜 미디어 분석 도구를 사용하고, 업계 계정을 팔로우하고, 경쟁자 포스트를 모니터링하고, 니치에 관련된 현재 이벤트와 문화적 순간에 주목하세요.' },
      { question: '해시태그가 참여도를 해칠 수 있나요?', answer: '네, 너무 많은 해시태그, 관련 없는 해시태그, 또는 금지된/섀도우밴된 해시태그를 사용하면 참여도가 떨어질 수 있습니다. 관련 태그를 고수하고 해시태그가 제한되지 않았는지 정기적으로 확인하세요.' },
      { question: '모든 포스트에 같은 해시태그를 사용해야 하나요?', answer: '아니오. 동일한 해시태그 세트를 반복적으로 사용하면 알고리즘에 스팸처럼 보일 수 있습니다. 여러 해시태그 세트를 만들고 교체하세요. 일관된 브랜드 해시태그 2-3개와 다양한 관련 태그를 포함하세요.' },
      { question: '해시태그는 포스트 어디에 배치해야 하나요?', answer: '인스타그램: 캡션이나 첫 번째 댓글에(둘 다 효과적). 트위터: 텍스트에 자연스럽게 통합. 링크드인: 포스트 끝에. 틱톡: 캡션에. 배치는 종종 미적 선호도입니다.' },
      { question: '브랜드 해시태그는 어떻게 만드나요?', answer: '브랜드나 캠페인을 위한 고유하고 기억에 남는 태그를 만드세요. 짧고 철자하기 쉽게 유지하고 이미 사용 중이 아닌지 확인하세요. 일관되게 홍보하고 팔로워가 사용하도록 장려하세요.' },
      { question: '섀도우밴된 해시태그란 무엇인가요?', answer: '일부 해시태그는 부적절한 사용으로 인해 플랫폼에 의해 제한됩니다. 이를 사용하면 콘텐츠 가시성이 제한될 수 있습니다. 해시태그를 검색했을 때 콘텐츠가 표시되는지 정기적으로 확인하세요.' },
      { question: '해시태그 전략을 얼마나 자주 업데이트해야 하나요?', answer: '매월 해시태그 전략을 검토하고 업데이트하세요. 트렌드 해시태그는 변경되고, 일부는 과도하게 사용되며, 새로운 관련 태그가 등장합니다. 전략을 신선하게 유지하고 플랫폼 변경에 대응하세요.' },
    ],
  },
  'instagram-hashtag-generator': {
    slug: 'instagram-hashtag-generator',
    name: '인스타그램 해시태그 생성기',
    title: '무료 AI 인스타그램 해시태그 생성기',
    description: '도달 범위와 참여도를 높이는 완벽한 인스타그램 해시태그를 생성하세요. AI가 콘텐츠와 니치에 맞춤화된 전략적인 해시태그 세트를 만듭니다.',
    metaDescription: '도달 범위와 참여도를 높이는 완벽한 인스타그램 해시태그를 생성하세요. AI가 콘텐츠와 니치에 맞춤화된 전략적인 해시태그 세트를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '포스트 또는 니치를 설명하세요...',
    inputPlaceholder: '예: 해변과 사원이 있는 발리 여행 사진',
    buttonText: '해시태그 생성',
    maxLength: 2048,
    options: [
      {
        name: 'hashtag_count',
        label: '해시태그 수',
        choices: ['5개 해시태그', '10개 해시태그', '15개 해시태그', '20개 해시태그', '30개 해시태그'],
        default: '10개 해시태그',
        type: 'select',
      },
      {
        name: 'content_type',
        label: '콘텐츠 유형',
        choices: ['피드 포스트', '릴스', '캐러셀', '스토리'],
        default: '피드 포스트',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram growth strategist specializing in hashtag research and optimization for the Instagram platform. Your role is to generate strategic hashtag sets that maximize post reach, engagement, and discoverability within Instagram's ecosystem.
Hashtag Count: {{hashtag_count}}
Content Type: {{content_type}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '소셜 미디어 마케팅', description: '마케터들이 인스타그램 해시태그 생성기를 사용하여 캠페인의 해시태그 전략을 최적화합니다. 관련 키워드를 입력하거나 콘텐츠를 설명하면 도구가 인스타그램에서 브랜드 포스트의 가시성, 발견 가능성, 도달 범위를 높이는 인기 및 트렌드 해시태그를 생성합니다.' },
      { title: '콘텐츠 분류 및 정리', description: '콘텐츠 크리에이터들이 해시태그 생성기를 사용하여 콘텐츠를 적절하게 분류하고 정리합니다. 설명이나 테마를 입력하면 도구가 주제에 맞는 관련 해시태그를 생성하여 일관된 시각적 미학을 유지하고 콘텐츠 발견을 용이하게 합니다.' },
      { title: '인플루언서 협업 및 파트너십', description: '인플루언서와 브랜드들이 해시태그 생성기를 사용하여 파트너십이나 스폰서 캠페인을 위한 고유한 협업 해시태그를 만듭니다. 캠페인 세부 정보와 브랜드명을 입력하면 참여를 촉진하고 캠페인 성과를 추적하는 맞춤형 해시태그를 생성합니다.' },
    ],
    faqs: [
      { question: '인스타그램에서 해시태그를 몇 개 사용해야 하나요?', answer: '인스타그램은 최대 30개의 해시태그를 허용하지만, 연구에 따르면 5-10개의 관련 해시태그가 종종 가장 잘 작동합니다. 수량보다 품질과 관련성이 더 중요합니다. 계정에 맞는 다양한 양을 테스트해 보세요.' },
      { question: '해시태그는 캡션에 넣어야 하나요 댓글에 넣어야 하나요?', answer: '두 방법 모두 효과적으로 작동합니다. 캡션 배치는 모든 것을 함께 유지하고, 댓글 배치는 캡션을 더 깔끔하게 유지합니다. 인스타그램 알고리즘은 둘 다 비슷하게 취급합니다. 미적 선호도에 따라 선택하세요.' },
      { question: '인스타그램 성장에 가장 좋은 해시태그는 무엇인가요?', answer: '가장 좋은 해시태그는 특정 콘텐츠와 관련이 있고 타겟 청중이 사용하는 것입니다. 최적의 도달과 참여를 위해 더 넓은 해시태그(100K-1M 포스트)와 니치 해시태그(10K-100K 포스트)를 혼합하세요.' },
      { question: '니치 해시태그는 어떻게 찾나요?', answer: '경쟁자 계정을 조사하고, 분야의 관련 해시태그를 탐색하고, 인스타그램의 검색 제안을 사용하고, 타겟 청중이 사용하는 것을 확인하고, 크기가 비슷한 계정이 사용하는 해시태그를 살펴보세요.' },
      { question: '섀도우밴된 해시태그란 무엇인가요?', answer: '일부 해시태그는 스팸이나 부적절한 사용으로 인해 인스타그램에 의해 제한됩니다. 이를 사용하면 콘텐츠 가시성이 제한될 수 있습니다. 해시태그를 검색했을 때 콘텐츠가 표시되는지 확인하세요—표시되지 않으면 제한되었을 수 있습니다.' },
      { question: '브랜드 해시태그를 만들어야 하나요?', answer: '네, 브랜드 해시태그는 커뮤니티를 구축하고, 사용자 생성 콘텐츠를 추적하고, 검색 가능한 콘텐츠 컬렉션을 만드는 데 도움이 됩니다. 고유하고 짧고 기억에 남게 유지하고 팔로워가 사용하도록 장려하세요.' },
      { question: '해시태그를 얼마나 자주 변경해야 하나요?', answer: '동일한 해시태그 세트를 반복적으로 사용하는 것을 피하세요—스팸처럼 보일 수 있습니다. 콘텐츠 유형에 맞는 5-10개의 다른 세트를 만들고 교체하세요. 성과에 따라 매월 전략을 업데이트하세요.' },
      { question: '해시태그는 인스타그램 릴스에 효과가 있나요?', answer: '네, 해시태그는 릴스 발견 가능성에 도움이 됩니다. 릴스 전용 태그, 트렌드 해시태그, 니치 태그를 포함한 3-5개의 관련 해시태그를 사용하세요. 사용하는 오디오도 릴스 발견에 영향을 미칩니다.' },
      { question: '인스타그램에서 해시태그를 팔로우할 수 있나요?', answer: '네, 피드에서 관련 콘텐츠를 보기 위해 해시태그를 팔로우할 수 있습니다. 이는 또한 해당 해시태그를 사용하는 콘텐츠가 팔로워의 피드에 나타날 수 있다는 것을 의미합니다—관련 태그를 사용해야 하는 또 다른 이유입니다.' },
      { question: '해시태그가 왜 작동하지 않나요?', answer: '가능한 이유: 관련 없거나 금지된 해시태그 사용, 같은 세트 반복, 경쟁이 높은 매우 인기 있는 태그만 사용, 청중이 활동하지 않는 시간에 게시. 전략을 분석하고 조정하세요.' },
    ],
  },
  'social-media-username-generator': {
    slug: 'social-media-username-generator',
    name: '소셜 미디어 사용자명 생성기',
    title: '무료 AI 소셜 미디어 사용자명 생성기',
    description: '소셜 미디어 프로필을 위한 고유하고 기억에 남는 사용자명을 생성하세요. AI가 인스타그램, 틱톡, 트위터 등에서 작동하는 개인화된 사용자명 아이디어를 만듭니다.',
    metaDescription: '소셜 미디어 프로필을 위한 고유하고 기억에 남는 사용자명을 생성하세요. AI가 인스타그램, 틱톡, 트위터 등에서 작동하는 개인화된 사용자명 아이디어를 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '자신 또는 브랜드를 설명하세요...',
    inputPlaceholder: '예: 요가와 명상을 전문으로 하는 Sarah라는 피트니스 코치',
    buttonText: '사용자명 생성',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '사용자명 스타일',
        choices: ['전문적', '창의적/장난스러운', '미니멀', '니치 중심', '이름 기반'],
        default: '창의적/장난스러운',
        type: 'select',
      },
      {
        name: 'platform',
        label: '주요 플랫폼',
        choices: ['인스타그램', '틱톡', '트위터/X', '유튜브', '크로스 플랫폼'],
        default: '크로스 플랫폼',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert personal branding consultant specializing in creating memorable, effective usernames for social media platforms. Your role is to generate unique, available-friendly username ideas that reflect identity, are easy to remember, and work across multiple platforms.
Style: {{style}}
Platform: {{platform}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '브랜딩 및 비즈니스 계정', description: '온라인 존재감을 확립하는 비즈니스와 개인들이 사용자명 생성기를 사용하여 플랫폼 전반에서 일관되고 인식 가능한 사용자명을 만듭니다. 통일된 사용자명은 브랜드 인식을 돕고 고객과 팔로워가 브랜드를 찾고 연결하기 쉽게 만듭니다.' },
      { title: '콘텐츠 크리에이터 및 인플루언서', description: '콘텐츠 크리에이터, 블로거, 브이로거, 인플루언서들은 니치나 브랜드를 반영하는 독특한 사용자명이 필요합니다. 도구는 청중에게 공감하고 인스타그램, 유튜브, 트위터, 틱톡 같은 플랫폼에서 기억하기 쉬운 관련성 있고 매력적인 사용자명을 생성합니다.' },
      { title: '개인 및 전문 브랜딩', description: '개인 브랜드를 구축하는 개인들이 사용자명 생성기를 사용하여 고유하고 전문적인 사용자명을 만듭니다. 플랫폼 전반에서 일관된 사용자명을 유지하면 네트워킹, 취업 기회 또는 개인적 표현을 위한 일관된 온라인 정체성을 구축하는 데 도움이 됩니다.' },
    ],
    faqs: [
      { question: '좋은 소셜 미디어 사용자명의 요소는 무엇인가요?', answer: '좋은 사용자명은 짧고(15자 미만이 이상적), 철자하고 발음하기 쉽고, 기억에 남고, 정체성이나 니치와 관련이 있고, 플랫폼 전반에서 사용 가능하며, 의도한 청중에게 충분히 전문적입니다.' },
      { question: '사용자명은 실명이어야 하나요?', answer: '목표에 따라 다릅니다. 실명은 개인 브랜딩과 전문 네트워킹에 잘 작동합니다. 창의적인 사용자명은 콘텐츠 크리에이터나 정체성과 별개의 브랜드를 구축할 때 더 잘 작동합니다.' },
      { question: '사용자명을 고유하게 만들려면 어떻게 해야 하나요?', answer: '관련 설명자를 추가하고, 말장난이나 두운을 사용하고, 니치나 위치를 포함하고, 다른 패턴(밑줄, 마침표)을 시도하거나, 브랜드를 나타내는 예상치 못한 단어를 조합하세요.' },
      { question: '모든 플랫폼에서 같은 사용자명을 사용해야 하나요?', answer: '이상적으로는 네. 일관된 사용자명은 찾기 쉽게 하고 브랜드 인식을 강화합니다. 선호하는 사용자명이 일부 플랫폼에서 사용 중이면 같은 핵심 정체성을 가진 유사한 변형을 사용하세요.' },
      { question: '선호하는 사용자명이 이미 사용 중이면 어떻게 하나요?', answer: '변형을 시도하세요: 밑줄 추가(name_creates), 접두사(the.real.name), 접미사(namehq), 또는 관련 설명자와 결합. 생성기는 이러한 이유로 여러 변형을 제공합니다.' },
      { question: '사용자명에 숫자를 사용해야 하나요?', answer: '숫자가 의미가 있는 경우(출생 연도, 설립 연도) 전략적으로 사용하세요. 무작위 숫자는 사용자명을 기억하기 어렵게 만들고 덜 전문적으로 보일 수 있습니다.' },
      { question: '사용자명은 얼마나 길어야 하나요?', answer: '짧을수록 일반적으로 좋습니다—15자 미만이 이상적입니다. 이렇게 하면 모든 플랫폼(트위터는 15자 제한)에서 사용 가능하고 기억하고 입력하기 쉽습니다.' },
      { question: '나중에 사용자명을 변경할 수 있나요?', answer: '대부분의 플랫폼은 사용자명 변경을 허용하지만, 사용자명을 변경하면 팔로워가 혼란스러워하고 기존 링크가 깨질 수 있습니다. 변경할 필요가 없도록 처음부터 신중하게 선택하세요.' },
      { question: '사용자명이 하는 일을 설명해야 하나요?', answer: '니치나 활동을 포함하면 발견 가능성에 도움이 되고 즉시 초점을 전달할 수 있습니다. 하지만 콘텐츠가 발전해도 벗어나지 않을 정도로 일반적으로 유지하세요.' },
      { question: '사용자명에 어떤 문자를 사용할 수 있나요?', answer: '대부분의 플랫폼은 문자, 숫자, 밑줄, 마침표를 허용합니다. 트위터는 마침표를 허용하지 않습니다. 인스타그램은 연속 마침표를 허용하지 않습니다. 가장 넓은 호환성을 위해 특수 문자를 피하세요.' },
    ],
  },
  'instagram-name-generator': {
    slug: 'instagram-name-generator',
    name: '인스타그램 이름 생성기',
    title: '무료 AI 인스타그램 이름 생성기',
    description: '돋보이는 고유한 인스타그램 사용자명을 생성하세요. AI가 존재감을 구축하고 발견되도록 돕는 기억에 남는 온브랜드 핸들을 만듭니다.',
    metaDescription: '돋보이는 고유한 인스타그램 사용자명을 생성하세요. AI가 존재감을 구축하고 발견되도록 돕는 기억에 남는 온브랜드 핸들을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '자신 또는 브랜드를 설명하세요...',
    inputPlaceholder: '예: 건강한 레시피를 공유하는 Emma라는 푸드 블로거',
    buttonText: '이름 생성',
    maxLength: 2048,
    options: [
      {
        name: 'account_type',
        label: '계정 유형',
        choices: ['개인 브랜드', '콘텐츠 크리에이터', '비즈니스/브랜드', '인플루언서', '아티스트/크리에이티브'],
        default: '콘텐츠 크리에이터',
        type: 'select',
      },
      {
        name: 'style',
        label: '이름 스타일',
        choices: ['전문적', '창의적/재미있는', '미니멀', '트렌디한', '클래식'],
        default: '창의적/재미있는',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram branding consultant specializing in creating unique, memorable Instagram usernames. Your role is to generate username ideas optimized for Instagram's platform requirements and best practices.
Account Type: {{account_type}}
Style: {{style}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '개인 브랜딩', description: '인스타그램에서 개인 브랜드를 구축하려는 개인들이 이름 생성기를 사용하여 열정과 전문성을 반영하는 고유하고 매력적인 사용자명을 찾습니다. 기억에 남는 사용자명은 강력한 온라인 존재감을 만들고 플랫폼 전반에서 개인 브랜딩 노력을 향상시킵니다.' },
      { title: '비즈니스 및 제품 홍보', description: '비즈니스와 기업가들이 인스타그램 이름 생성기를 사용하여 회사 정체성과 가치에 맞는 브랜드 관련 사용자명을 찾습니다. 플랫폼 전반에서 일관된 브랜딩은 고객이 브랜드를 인식하고 기억하도록 도와 가시성을 높입니다.' },
      { title: '소셜 미디어 마케팅 캠페인', description: '캠페인별 계정을 만들거나 프로모션을 위한 고유한 핸들이 필요한 마케터들이 생성기를 사용하여 빠르게 매력적인 사용자명을 개발합니다. 이는 특히 전용 인스타그램 존재감이 필요한 이벤트, 제품 출시 또는 기간 한정 프로모션에 유용합니다.' },
    ],
    faqs: [
      { question: '인스타그램의 사용자명 요구 사항은 무엇인가요?', answer: '인스타그램 사용자명은 최대 30자이며, 문자, 숫자, 마침표, 밑줄만 사용할 수 있습니다. 연속 마침표는 허용되지 않으며, 이름은 마침표로 시작하거나 끝날 수 없습니다.' },
      { question: '사용자명이 사용 가능한지 어떻게 확인하나요?', answer: '인스타그램에서 직접 검색하거나 계정 생성을 시도하여 확인하세요. 타사 도구도 여러 플랫폼에서 동시에 사용 가능 여부를 확인할 수 있습니다.' },
      { question: '인스타그램 사용자명이 다른 소셜 미디어와 일치해야 하나요?', answer: '이상적으로는 네. 플랫폼 전반에서 일관된 사용자명은 브랜드를 강화하고, 찾기 쉽게 하며, 일관된 온라인 정체성을 만듭니다.' },
      { question: '실명을 사용하는 것이 좋나요 창의적인 사용자명이 좋나요?', answer: '목표에 따라 다릅니다. 실명은 개인 브랜딩과 전문 네트워킹에 잘 작동합니다. 창의적인 사용자명은 니치 콘텐츠 크리에이터나 정체성과 별개의 브랜드를 구축할 때 더 잘 작동합니다.' },
      { question: '인스타그램 사용자명은 성장에 얼마나 중요한가요?', answer: '사용자명은 첫인상과 검색 가능성에 영향을 미칩니다. 명확하고 기억에 남는 사용자명은 도움이 되지만, 훌륭한 콘텐츠가 실제로 구독자 기반을 성장시킵니다.' },
      { question: '인스타그램 사용자명을 변경할 수 있나요?', answer: '네, 설정에서 변경할 수 있습니다. 하지만 이름을 변경하면 기존 팔로워가 혼란스러워하고 브랜드 인식에 영향을 줄 수 있으므로 처음부터 신중하게 선택하세요.' },
      { question: '사용자명에 니치를 포함해야 하나요?', answer: '니치(예: 사진, 피트니스, 음식)를 포함하면 검색 가능성에 도움이 되고 즉시 초점을 전달합니다. 하지만 콘텐츠가 발전해도 벗어나지 않을 정도로 일반적으로 유지하세요.' },
      { question: '선호하는 사용자명이 사용 중이면 어떻게 하나요?', answer: '변형을 시도하세요: 니치 추가(mike.tech.tips), 설명자 포함(the.cooking.channel), 또는 차별화하는 고유한 변형 생성. 사용된 채널이 비활성 상태인지 확인하세요—삭제된 채널의 이름은 결국 사용 가능해집니다.' },
      { question: '밑줄과 마침표 중 어느 것이 더 좋나요?', answer: '둘 다 잘 작동합니다. 마침표는 더 깔끔해 보일 수 있고(first.last), 밑줄은 더 보편적으로 인식됩니다(first_last). 가독성과 미적 선호도에 따라 선택하세요.' },
      { question: '여러 사용자명 옵션 중 어떻게 선택하나요?', answer: '고려하세요: 구두로 철자하기 가장 쉬운 것은? 장기적으로 브랜드를 가장 잘 나타내는 것은? 가장 기억에 남는 것은? 친구들에게 한 번 듣고 기억할 수 있는 것을 물어보세요.' },
    ],
  },
  'tiktok-hashtag-generator': {
    slug: 'tiktok-hashtag-generator',
    name: '틱톡 해시태그 생성기',
    title: '무료 AI 틱톡 해시태그 생성기',
    description: '가시성을 높이는 트렌드 틱톡 해시태그를 생성하세요. AI가 비디오가 For You 페이지에 도달하도록 돕는 전략적인 해시태그 조합을 만듭니다.',
    metaDescription: '가시성을 높이는 트렌드 틱톡 해시태그를 생성하세요. AI가 비디오가 For You 페이지에 도달하도록 돕는 전략적인 해시태그 조합을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '틱톡 비디오를 설명하세요...',
    inputPlaceholder: '예: 의상 전환이 있는 트렌드 오디오를 사용한 댄스 비디오',
    buttonText: '해시태그 생성',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: '콘텐츠 유형',
        choices: ['엔터테인먼트/댄스', '교육', '코미디/스킷', '라이프스타일/브이로그', '제품/리뷰', '튜토리얼/하우투'],
        default: '엔터테인먼트/댄스',
        type: 'select',
      },
      {
        name: 'hashtag_count',
        label: '해시태그 수',
        choices: ['3개 해시태그', '5개 해시태그', '7개 해시태그'],
        default: '5개 해시태그',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok growth strategist specializing in hashtag optimization for the TikTok platform. Your role is to generate strategic hashtag sets that maximize video visibility, reach the For You Page (FYP), and target engaged audiences within TikTok's unique algorithm ecosystem.
Content Type: {{content_type}}
Hashtag Count: {{hashtag_count}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '틱톡 콘텐츠 전략 최적화', description: '소셜 미디어 매니저와 콘텐츠 크리에이터들이 틱톡 해시태그 생성기를 사용하여 콘텐츠 전략을 최적화합니다. 관련 키워드나 주제를 입력하면 니치에 맞는 트렌드 및 인기 해시태그를 발견하여 콘텐츠가 틱톡에서 더 넓은 청중에게 도달하도록 돕습니다.' },
      { title: '인플루언서 마케팅 캠페인', description: '브랜드와 마케팅 에이전시들이 틱톡 해시태그 생성기를 사용하여 업계 내 인기 해시태그를 식별합니다. 인플루언서 마케팅 캠페인을 계획할 때 이러한 해시태그를 사용하는 인플루언서를 찾고 캠페인 콘텐츠가 최대 노출을 위한 최적의 태그를 사용하도록 합니다.' },
      { title: '경쟁자 분석 및 벤치마킹', description: '마케터들이 생성기를 사용하여 경쟁자의 해시태그 전략을 분석하고 업계에서 일반적으로 사용되는 태그를 발견합니다. 이 정보는 경쟁자에게 잘 작동하는 것을 기반으로 자체 해시태그 전략을 벤치마킹하고 개선하는 데 도움이 됩니다.' },
    ],
    faqs: [
      { question: '틱톡에서 해시태그를 몇 개 사용해야 하나요?', answer: '틱톡은 비디오당 3-5개의 관련 해시태그를 권장합니다. 너무 많이 사용하면 스팸처럼 보이고 타겟팅을 희석시킬 수 있습니다. 수량보다 품질과 관련성이 더 중요합니다.' },
      { question: '해시태그가 틱톡 도달에 정말 중요한가요?', answer: '네, 해시태그는 틱톡 알고리즘이 콘텐츠를 분류하고 관심 있는 시청자에게 배포하는 데 도움을 줍니다. 비디오가 For You 페이지에 도달하는지에 영향을 미치는 여러 요소 중 하나입니다.' },
      { question: '항상 #FYP나 #ForYou를 사용해야 하나요?', answer: 'FYP 관련 해시태그 하나를 사용하면 도움이 될 수 있지만 마법은 아닙니다. 알고리즘은 해시태그보다 콘텐츠 품질과 참여를 우선시합니다. 3-5개 해시태그 중 하나로 사용하되 유일한 전략으로 삼지 마세요.' },
      { question: '틱톡 커뮤니티 해시태그란 무엇인가요?', answer: '#BookTok, #FitTok, #FoodTok 같은 커뮤니티 해시태그는 틱톡의 니치 커뮤니티를 연결합니다. 관련 커뮤니티 해시태그를 사용하면 특정 콘텐츠 유형에 관심 있는 참여도 높은 청중에게 도달하는 데 도움이 됩니다.' },
      { question: '틱톡 트렌드 해시태그는 어떻게 찾나요?', answer: '틱톡의 발견/트렌드 페이지를 확인하고, 니치의 최고 크리에이터가 사용하는 것을 보고, 트렌드인 사운드와 효과를 탐색하고, 해시태그 연구 도구를 사용하여 현재 트렌드를 식별하세요.' },
      { question: '콘텐츠와 맞지 않는 트렌드 해시태그를 사용해야 하나요?', answer: '아니오. 관련 없는 트렌드 해시태그를 사용하면 비디오 성과가 떨어질 수 있습니다. 알고리즘이 콘텐츠를 참여하지 않을 관심 없는 시청자에게 보여줄 수 있어 틱톡에 낮은 품질로 신호를 보낼 수 있습니다.' },
      { question: '틱톡 해시태그는 인스타그램 해시태그와 다르게 작동하나요?', answer: '네. 틱톡 알고리즘은 참여 신호를 크게 가중하며 해시태그는 사운드, 완료율, 기타 요소와 함께 작동합니다. 틱톡 해시태그는 다른 플랫폼보다 더 빨리 트렌드가 되고 사라집니다.' },
      { question: '해시태그가 틱톡에서 바이럴되는 데 도움이 될 수 있나요?', answer: '해시태그는 퍼즐의 한 조각입니다. 바이럴 잠재력은 콘텐츠 품질, 훅 강도, 트렌드 사운드, 게시 시간, 청중 참여에 더 많이 의존합니다. 해시태그는 발견 가능성에 도움이 되지만 바이럴을 보장하지는 않습니다.' },
      { question: '틱톡용 브랜드 해시태그를 만들어야 하나요?', answer: '브랜드 해시태그는 사용자 생성 콘텐츠를 장려하는 챌린지와 캠페인에 잘 작동합니다. 참여를 추적하고 브랜드 주변의 커뮤니티를 구축하는 데 도움이 됩니다.' },
      { question: '틱톡 해시태그 트렌드는 얼마나 자주 변하나요?', answer: '틱톡 트렌드는 빠르게 변합니다—매우 핫한 트렌드의 경우 종종 매주 또는 매일. 발견 페이지를 정기적으로 확인하고 그에 따라 해시태그 전략을 조정하여 최신 상태를 유지하세요.' },
    ],
  },
  // ==================== KOREAN TRANSLATION - BATCH 5 (Tools 41-45) ====================
  'tiktok-username-generator': {
    slug: 'tiktok-username-generator',
    name: '틱톡 사용자명 생성기',
    title: '무료 AI 틱톡 사용자명 생성기',
    description: '분위기에 맞는 고유한 틱톡 사용자명을 생성하세요. AI가 돋보이고 팔로워를 늘리는 데 도움이 되는 기억에 남는 온트렌드 핸들을 만듭니다.',
    metaDescription: '분위기에 맞는 고유한 틱톡 사용자명을 생성하세요. AI가 돋보이고 팔로워를 늘리는 데 도움이 되는 기억에 남는 온트렌드 핸들을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '자신 또는 콘텐츠를 설명하세요...',
    inputPlaceholder: '예: 사무실 생활에 대한 스킷을 만드는 코미디 크리에이터',
    buttonText: '사용자명 생성',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '사용자명 스타일',
        choices: ['트렌디/재미있는', '전문적', '니치 중심', '개성 중심', '이름 기반'],
        default: '트렌디/재미있는',
        type: 'select',
      },
      {
        name: 'content_niche',
        label: '콘텐츠 니치',
        choices: ['엔터테인먼트/코미디', '피트니스/건강', '뷰티/패션', '음식/요리', '교육/팁', '라이프스타일/브이로그', '기타'],
        default: '엔터테인먼트/코미디',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok personal branding consultant specializing in creating memorable, discoverable usernames for the TikTok platform. Your role is to generate username ideas that resonate with TikTok's young, trend-aware audience while reflecting creator identity.
Style: {{style}}
Content Niche: {{content_niche}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '새로운 크리에이터 정체성', description: '새로운 틱톡 크리에이터들이 사용자명 생성기를 사용하여 플랫폼 정체성을 확립합니다. 콘텐츠 초점, 성격 특성, 관심사를 입력하면 틱톡 청중에게 공감하고 고유한 크리에이터 브랜드를 반영하는 사용자명 아이디어를 생성합니다.' },
      { title: '콘텐츠 니치 브랜딩', description: '피트니스, 요리, 코미디, 뷰티 같은 특정 니치에 집중하는 크리에이터들이 생성기를 사용하여 콘텐츠 초점을 즉시 전달하는 사용자명을 찾습니다. 명확한 니치 관련 사용자명은 적합한 청중을 유치하고 해당 분야에서 권위를 확립하는 데 도움이 됩니다.' },
      { title: '브랜드 및 비즈니스 틱톡 런칭', description: '틱톡 존재감을 시작하는 비즈니스들이 생성기를 사용하여 틱톡의 캐주얼하고 창의적인 문화에 맞으면서 브랜드에 맞는 사용자명을 찾습니다. 도구는 플랫폼 청중에게 전문적이면서도 친근한 핸들을 만드는 데 도움이 됩니다.' },
    ],
    faqs: [
      { question: '틱톡의 사용자명 요구 사항은 무엇인가요?', answer: '틱톡 사용자명은 최대 24자이며, 문자, 숫자, 밑줄, 마침표를 사용합니다. 고유해야 하며, 대소문자 구분이 없고, 변경할 수 있습니다(변경 사이에 대기 기간 있음).' },
      { question: '틱톡 사용자명을 변경할 수 있나요?', answer: '네, 설정에서 틱톡 사용자명을 변경할 수 있습니다. 하지만 다시 변경하기 전에 대기 기간이 있을 수 있으며, 이전 사용자명은 다른 사람이 사용할 수 있게 됩니다.' },
      { question: '틱톡 사용자명이 재미있어야 하나요 전문적이어야 하나요?', answer: '콘텐츠에 따라 다릅니다. 틱톡 문화는 캐주얼하고 재미있는 쪽으로 기울기 때문에 전문적인 크리에이터도 종종 친근한 사용자명을 사용합니다. 사용자명을 콘텐츠 스타일과 타겟 청중 기대에 맞추세요.' },
      { question: '틱톡 사용자명을 기억에 남게 만들려면 어떻게 해야 하나요?', answer: '짧고, 발음하기 쉽고, 콘텐츠와 관련 있게 유지하세요. 두운, 라임 또는 영리한 말장난이 도움이 됩니다. 비디오 하나를 보고 기억하기 쉬워야 합니다.' },
      { question: '틱톡에서 실명을 사용해야 하나요?', answer: '실명을 사용하면 개인 브랜딩과 플랫폼 전반의 인식에 도움이 될 수 있습니다. 하지만 창의적인 핸들은 종종 콘텐츠 중심 계정에 더 잘 작동하고 더 많은 유연성을 제공합니다.' },
      { question: '선호하는 사용자명이 사용 중이면 어떻게 하나요?', answer: '니치 추가(mikefitness), 밑줄 사용(mike_creates), "the" 추가(themikefitness), 또는 차별화하는 의미 있는 설명자를 포함해 시도해 보세요.' },
      { question: '틱톡 사용자명이 인스타그램과 일치해야 하나요?', answer: '플랫폼 전반에서 일관된 사용자명은 팔로워가 어디서나 찾을 수 있도록 돕습니다. 선호하는 이름이 둘 다에서 사용 가능하지 않으면 명확하게 연결된 유사한 변형을 사용하세요.' },
      { question: '틱톡 사용자명이 발견 가능성에 영향을 미치나요?', answer: '관련 키워드를 포함하는 사용자명은 사용자가 콘텐츠 유형을 검색할 때 도움이 될 수 있습니다. 하지만 콘텐츠 품질과 해시태그가 틱톡에서 전반적인 발견 가능성에 더 중요합니다.' },
      { question: '틱톡 성장에 사용자명은 얼마나 중요한가요?', answer: '사용자명은 첫인상과 브랜드 정체성이지만, 콘텐츠 품질이 성장에 더 중요합니다. 좋은 사용자명은 도움이 되지만, 훌륭한 콘텐츠가 실제로 팔로워를 늘립니다.' },
      { question: '틱톡 사용자명에 숫자를 포함해야 하나요?', answer: '의도치 않게 보이는 무작위 숫자를 피하세요. 의미 있는 숫자(출생 연도, 설립 연도)는 브랜드에 추가되는 경우 작동할 수 있지만, 문자만 있는 사용자명이 일반적으로 더 전문적으로 보입니다.' },
    ],
  },
  'youtube-channel-description-generator': {
    slug: 'youtube-channel-description-generator',
    name: '유튜브 채널 설명 생성기',
    title: '무료 AI 유튜브 채널 설명 생성기',
    description: '구독자를 유치하는 매력적인 유튜브 채널 설명을 만드세요. AI가 콘텐츠를 보여주고 청중을 늘리는 SEO 최적화된 설명을 생성합니다.',
    metaDescription: '구독자를 유치하는 매력적인 유튜브 채널 설명을 만드세요. AI가 콘텐츠를 보여주고 청중을 늘리는 SEO 최적화된 설명을 생성합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '유튜브 채널을 설명하세요...',
    inputPlaceholder: '예: 예산 스마트폰과 가젯에 초점을 맞춘 테크 리뷰 채널',
    buttonText: '설명 생성',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: '채널 톤',
        choices: ['전문적', '친근한', '열정적', '정보적', '캐주얼'],
        default: '친근한',
        type: 'select',
      },
      {
        name: 'channel_type',
        label: '채널 유형',
        choices: ['교육/튜토리얼', '엔터테인먼트', '브이로그/라이프스타일', '게임', '비즈니스/브랜드', '리뷰/코멘터리'],
        default: '교육/튜토리얼',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube strategist specializing in channel optimization and discoverability. Your role is to create compelling channel descriptions that clearly communicate channel value, improve searchability, and convert visitors into subscribers.
Tone: {{tone}}
Channel Type: {{channel_type}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '채널 SEO 최적화', description: '유튜버들이 채널 설명 생성기를 사용하여 유튜브와 구글 검색 결과에서 채널 가시성을 높이는 키워드가 풍부한 설명을 만듭니다. 채널 초점, 타겟 키워드, 콘텐츠 유형을 입력하면 잠재 시청자가 채널을 발견하는 데 도움이 되는 최적화된 설명을 생성합니다.' },
      { title: '구독자 전환 향상', description: '채널 방문자를 구독자로 전환하려는 크리에이터들이 생성기를 사용하여 채널 가치를 명확하게 설명하는 매력적인 설명을 만듭니다. 고유한 가치 제안을 전달하고 명확한 기대를 설정하는 잘 작성된 설명은 더 높은 구독률로 이어집니다.' },
      { title: '효율적인 채널 설정', description: '새로운 유튜버와 채널을 시작하는 비즈니스들이 생성기를 사용하여 빠르게 전문적인 설명을 만듭니다. 이렇게 하면 채널 설정 시간을 절약하고 정보 페이지가 첫날부터 강한 첫인상을 남기도록 합니다.' },
    ],
    faqs: [
      { question: '유튜브 채널 설명은 얼마나 길어야 하나요?', answer: '유튜브는 채널 설명에 최대 1,000자를 허용합니다. 가치 제안을 명확하게 전달하기에 충분히 사용하되 불필요한 내용으로 채우지 마세요. 대부분의 효과적인 설명은 500-800자입니다.' },
      { question: '채널 설명에 무엇을 포함해야 하나요?', answer: '포함할 것: 채널이 무엇에 관한 것인지, 시청자가 무엇을 배우거나 경험할지, 업로드 일정, 당신이 누구이고 자격이 무엇인지, 구독 콜투액션, 비즈니스 문의를 위한 연락처 정보.' },
      { question: '채널 설명은 SEO에 어떤 영향을 미치나요?', answer: '채널 설명은 유튜브가 추천과 검색을 위해 콘텐츠를 이해하는 데 도움이 됩니다. 발견 가능성을 높이기 위해 관련 키워드를 자연스럽게 포함하세요. 처음 100-150자는 검색 결과 미리보기에 특히 중요합니다.' },
      { question: '검색을 위해 설명을 어떻게 최적화하나요?', answer: '타겟 청중이 검색하는 키워드를 포함하고, 중요한 정보를 앞에 배치하고, 자연스러운 언어를 사용하고(키워드 스터핑 안 함), 콘텐츠를 신선하고 관련성 있게 유지하기 위해 정기적으로 업데이트하세요.' },
      { question: '업로드 일정을 포함해야 하나요?', answer: '네, 일관된 일정이 있다면. "매주 화요일과 금요일 새 비디오"라고 명시하면 시청자 기대를 설정하고 정기적인 콘텐츠를 원하는 사람들의 구독을 장려할 수 있습니다.' },
      { question: '어떤 콜투액션을 포함해야 하나요?', answer: '시청자를 구독하고 알림을 활성화하도록 초대하세요. 무엇을 얻을지 구체적으로 말하세요. 예: "저녁 준비를 간소화하는 주간 요리 튜토리얼을 위해 구독하고 알림을 누르세요."' },
      { question: '설명에 이메일을 포함해야 하나요?', answer: '네, 비즈니스 문의, 협업 또는 스폰서십에 열려 있다면. 전문적인 이메일 주소는 채널이 더 확립되어 보이게 하고 잠재적 파트너에게 접근 가능하게 만듭니다.' },
      { question: '채널 설명을 얼마나 자주 업데이트해야 하나요?', answer: '콘텐츠 초점, 업로드 일정 또는 채널 초점이 크게 변경될 때마다 업데이트하세요. 정보가 현재와 관련성 있게 유지되도록 분기별로 검토하세요.' },
      { question: '채널 설명이 스폰서를 얻는 데 도움이 될 수 있나요?', answer: '네. 니치, 청중, 참여를 명확하게 명시하는 전문적인 설명은 관련 크리에이터를 찾는 잠재적 스폰서에게 채널을 더 매력적으로 만듭니다.' },
      { question: '채널 설명이 비디오 톤과 일치해야 하나요?', answer: '네, 설명은 채널의 개성과 콘텐츠 스타일을 반영해야 합니다. 코미디 채널은 재미있고 매력적으로 들려야 하고, 비즈니스 교육 채널은 전문적이고 권위 있게 들려야 합니다.' },
    ],
  },
  'youtube-name-generator': {
    slug: 'youtube-name-generator',
    name: '유튜브 이름 생성기',
    title: '무료 AI 유튜브 이름 생성기',
    description: '돋보이는 창의적인 유튜브 채널 이름을 생성하세요. AI가 구독자를 유치하고 콘텐츠 니치를 반영하는 기억에 남고 브랜드화 가능한 이름을 만듭니다.',
    metaDescription: '돋보이는 창의적인 유튜브 채널 이름을 생성하세요. AI가 구독자를 유치하고 콘텐츠 니치를 반영하는 기억에 남고 브랜드화 가능한 이름을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '채널 콘텐츠를 설명하세요...',
    inputPlaceholder: '예: 인디 게임과 레트로 리뷰에 초점을 맞춘 게임 채널',
    buttonText: '이름 생성',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: '이름 스타일',
        choices: ['크리에이터 이름', '주제/니치', '크리에이티브/브랜드', '개성 + 니치', '전문적'],
        default: '크리에이티브/브랜드',
        type: 'select',
      },
      {
        name: 'content_type',
        label: '콘텐츠 유형',
        choices: ['게임', '교육/튜토리얼', '엔터테인먼트', '브이로그/라이프스타일', '테크/리뷰', '뷰티/패션', '요리/음식', '피트니스', '비즈니스', '기타'],
        default: '엔터테인먼트',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube branding consultant specializing in creating memorable, searchable channel names. Your role is to generate channel name ideas that reflect content focus, are easy to remember, and help build a recognizable YouTube brand.
Style: {{style}}
Content Type: {{content_type}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '콘텐츠 크리에이터 및 유튜버', description: '유튜브 지망생들이 이름 생성기를 사용하여 콘텐츠 니치에 맞춤화된 고유하고 기억에 남는 채널 이름을 찾습니다. 게임, 요리, 테크, 라이프스타일 브이로그 등 도구가 크리에이터 브랜드 정체성에 맞고 강력한 온라인 존재감을 확립하는 데 도움이 되는 제안을 제공합니다.' },
      { title: '디지털 마케팅 에이전시', description: '유튜브 채널을 시작하는 클라이언트와 함께 일하는 마케팅 에이전시들이 생성기를 사용하여 타겟 청중에게 공감하는 이름을 브레인스토밍합니다. 도구는 클라이언트 브랜드, 업계, 콘텐츠 초점에 맞는 채널 이름 아이디어를 개발하는 데 도움이 됩니다.' },
      { title: '비즈니스 브랜드 확장', description: '유튜브로 온라인 존재감을 확장하는 비즈니스들이 생성기를 사용하여 공식 채널의 이름 옵션을 탐색합니다. 도구는 기존 브랜드 정체성을 보완하면서 유튜브 플랫폼에 최적화된 이름을 찾는 데 도움이 됩니다.' },
    ],
    faqs: [
      { question: '좋은 유튜브 채널 이름의 요소는 무엇인가요?', answer: '좋은 채널 이름은 기억에 남고, 철자하고 발음하기 쉽고, 콘텐츠와 관련이 있고, 검색하기에 충분히 고유하며, 콘텐츠 발전이 가능할 정도로 유연합니다. 구두로 말해도 시각적 브랜딩으로도 잘 작동해야 합니다.' },
      { question: '채널 이름이 콘텐츠를 설명해야 하나요?', answer: '설명적인 이름(TechReviews, DailyGardening)은 콘텐츠 초점을 즉시 전달하지만 유연성을 제한할 수 있습니다. 창의적인 이름(Vsauce, MrBeast)은 더 유연하지만 더 많은 브랜딩 노력이 필요합니다. 목표에 따라 선택하세요.' },
      { question: '채널 이름이 사용 가능한지 어떻게 확인하나요?', answer: '유튜브에서 정확한 이름을 검색하고, 유튜브의 @핸들 가용성을 확인하고, 도메인 등록 사이트에서 웹사이트 가용성을 검색하고, 주요 소셜 플랫폼에서 사용자명 일관성을 확인하세요.' },
      { question: '나중에 유튜브 채널 이름을 변경할 수 있나요?', answer: '네, 채널 표시 이름과 핸들을 변경할 수 있습니다(제한 있음). 하지만 이름을 변경하면 기존 구독자가 혼란스러워하고 브랜드 인식에 영향을 줄 수 있으므로 처음에 신중하게 선택하세요.' },
      { question: '채널에 실명을 사용해야 하나요?', answer: '실명을 사용하면 개인 브랜드, 전문가 포지셔닝, 장기 커리어 구축에 잘 작동합니다. 창의적인 이름은 엔터테인먼트 중심 콘텐츠나 개인 정체성과 별개의 브랜드를 구축할 때 더 잘 작동합니다.' },
      { question: '채널 이름은 성장에 얼마나 중요한가요?', answer: '채널 이름은 첫인상과 검색 가능성에 영향을 미치지만, 콘텐츠 품질이 성장에 더 중요합니다. 명확하고 기억에 남는 이름은 도움이 되지만, 훌륭한 콘텐츠가 실제로 구독자 기반을 늘립니다.' },
      { question: '채널 이름이 다른 소셜 미디어와 일치해야 하나요?', answer: '플랫폼 전반의 일관성은 팔로워가 어디서나 찾을 수 있도록 돕고 브랜드 인식을 강화합니다. 정확히 일치하지 않으면 명확하게 연결된 유사한 변형을 사용하세요.' },
      { question: '선호하는 채널 이름이 사용 중이면 어떻게 하나요?', answer: '변형을 시도하세요: 니치 추가(Mike Tech Tips), 설명자 포함(The Cooking Channel), 또는 고유한 변형 생성. 사용된 채널이 비활성 상태인지 확인하세요—삭제된 채널의 이름은 결국 사용 가능해집니다.' },
      { question: '채널 이름이 유튜브 SEO에 영향을 미치나요?', answer: '채널 이름은 검색 가능성에 영향을 줄 수 있습니다. 관련 키워드를 포함하는 이름은 사용자가 해당 주제를 검색할 때 도움이 될 수 있습니다. 하지만 키워드를 포함하지 않는 고유하고 브랜드화 가능한 이름도 적절한 최적화로 잘 순위를 매길 수 있습니다.' },
      { question: '채널 이름에 "YouTube"를 포함해야 하나요?', answer: '일반적으로 아니요. 유튜브에 있으므로 불필요하고, 귀중한 문자를 사용하며, 크로스 플랫폼 브랜딩에 잘 작동하지 않습니다. 이름을 플랫폼에 구애받지 않게 유지하세요.' },
    ],
  },
  'youtube-video-description-generator': {
    slug: 'youtube-video-description-generator',
    name: '유튜브 비디오 설명 생성기',
    title: '무료 AI 유튜브 비디오 설명 생성기',
    description: '조회수를 높이는 SEO 최적화된 유튜브 설명을 생성하세요. AI가 비디오가 더 높은 순위를 차지하도록 돕는 훅, 타임스탬프, 키워드가 포함된 매력적인 설명을 만듭니다.',
    metaDescription: '조회수를 높이는 SEO 최적화된 유튜브 설명을 생성하세요. AI가 비디오가 더 높은 순위를 차지하도록 돕는 훅, 타임스탬프, 키워드가 포함된 매력적인 설명을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '비디오 콘텐츠를 설명하세요...',
    inputPlaceholder: '예: 초보자를 위한 Lightroom 사진 편집 튜토리얼',
    buttonText: '설명 생성',
    maxLength: 2048,
    options: [
      {
        name: 'video_type',
        label: '비디오 유형',
        choices: ['튜토리얼/교육', '엔터테인먼트/브이로그', '리뷰/제품', '게임', '뉴스/코멘터리', '음악/퍼포먼스'],
        default: '튜토리얼/교육',
        type: 'select',
      },
      {
        name: 'include_timestamps',
        label: '타임스탬프 템플릿 포함',
        choices: ['예', '아니오'],
        default: '예',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert YouTube SEO specialist and content strategist. Your role is to create compelling, optimized video descriptions that improve search rankings, provide value to viewers, and drive engagement actions like likes, subscribes, and clicks.
Video Type: {{video_type}}
Include Timestamps: {{include_timestamps}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: 'SEO 최적화된 비디오 설명', description: '유튜버들이 비디오 설명 생성기를 사용하여 검색 순위와 가시성을 높이는 설명을 만듭니다. 비디오 콘텐츠, 타겟 키워드, 핵심 포인트를 입력하면 유튜브와 구글 검색 결과에서 비디오가 더 높은 순위를 차지하도록 돕는 SEO 친화적인 설명을 생성합니다.' },
      { title: '효율적인 대량 비디오 설명 작성', description: '여러 비디오를 관리하는 크리에이터들이 생성기를 사용하여 설명 작성을 간소화합니다. 도구를 통해 기본 정보를 입력하고 비디오 배치에 대해 맞춤화된 설명을 생성하여 콘텐츠 전반에서 일관성과 품질을 유지하면서 시간을 절약합니다.' },
      { title: '시청자 참여 증가', description: '참여 지표를 개선하려는 크리에이터들이 생성기를 사용하여 명확한 콜투액션, 도움이 되는 타임스탬프, 시청해야 하는 매력적인 이유가 있는 설명을 만듭니다. 잘 구성된 설명은 좋아요, 구독, 관련 콘텐츠 클릭을 장려합니다.' },
    ],
    faqs: [
      { question: '유튜브 비디오 설명은 얼마나 길어야 하나요?', answer: '유튜브는 최대 5,000자를 허용합니다. SEO 혜택을 위해 최소 200-300단어를 목표로 하세요. 처음 100-200자는 검색 결과에 나타나므로 가장 중요하므로 핵심 정보를 앞에 배치하세요.' },
      { question: '설명 첫 줄에 무엇을 넣어야 하나요?', answer: '기본 키워드와 시청자가 비디오에서 얻을 것을 알려주는 매력적인 훅을 포함하세요. 이 텍스트는 검색 결과에 나타나고 클릭률에 영향을 미칩니다.' },
      { question: '설명의 타임스탬프는 어떻게 작동하나요?', answer: '타임스탬프는 비디오에서 클릭 가능한 챕터를 만듭니다. "0:00 소개"처럼 시간과 레이블로 형식을 지정하세요. 타임스탬프가 적절하게 형식화되면 유튜브가 자동으로 챕터 마커를 생성합니다.' },
      { question: '비디오 설명에 해시태그를 포함해야 하나요?', answer: '네, 설명 끝에 3-5개의 관련 해시태그를 넣으세요. 처음 세 개의 해시태그가 비디오 제목 위에 나타나 해당 주제에 대한 발견 가능성을 높입니다.' },
      { question: '비디오 설명은 SEO에 어떤 영향을 미치나요?', answer: '설명은 유튜브가 검색과 추천을 위해 비디오 콘텐츠를 이해하는 데 도움을 줍니다. 관련 키워드, 포괄적인 정보, 적절한 서식을 포함하면 순위 잠재력이 향상됩니다.' },
      { question: '모든 비디오가 같은 설명 형식을 가져야 하나요?', answer: '일관된 구조(예: 끝에 채널 정보)를 갖는 것은 좋지만, 각 비디오의 특정 콘텐츠에 맞게 주요 설명을 조정하세요. 비디오 간에 동일한 설명을 복사하는 것을 피하세요.' },
      { question: '설명에 어떤 링크를 포함해야 하나요?', answer: '포함할 것: 비디오에서 언급된 리소스, 관련 제품 링크(해당되는 경우 제휴 공개와 함께), 소셜 미디어 프로필, 구독 링크, 관련 비디오나 재생목록 링크.' },
      { question: '제휴 링크를 올바르게 공개하려면 어떻게 해야 하나요?', answer: '"위의 일부 링크는 제휴 링크이며, 구매 시 추가 비용 없이 수수료를 받습니다"와 같은 명확한 공개를 포함하세요. 투명성을 위해 제휴 링크 근처에 배치하세요.' },
      { question: '유사한 비디오에 다른 설명을 작성해야 하나요?', answer: '네, 각 비디오에는 고유한 설명이 있어야 합니다. 비디오 간 중복 설명은 SEO를 해치고 각 개별 비디오의 시청자에게 특정 가치를 제공하지 않습니다.' },
      { question: '비디오 설명을 얼마나 자주 업데이트해야 하나요?', answer: '링크가 변경되거나 콘텐츠가 오래되거나 새로운 CTA를 추가하려는 경우 설명을 업데이트하세요. 에버그린 콘텐츠의 경우 가끔 업데이트하면 SEO 성능도 새로고침할 수 있습니다.' },
    ],
  },
  'rewording-tool': {
    slug: 'rewording-tool',
    name: '다시 말하기 도구',
    title: '무료 AI 다시 말하기 도구',
    description: 'AI 도구로 텍스트를 즉시 다시 말하고 바꿔 표현하세요. 명확성을 높이고, 톤을 변경하거나, 고유한 콘텐츠를 만들기 위해 문장과 단락을 변환합니다.',
    metaDescription: 'AI 도구로 텍스트를 즉시 다시 말하고 바꿔 표현하세요. 명확성을 높이고, 톤을 변경하거나, 고유한 콘텐츠를 만들기 위해 문장과 단락을 변환합니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '다시 말할 텍스트를 입력하세요...',
    inputPlaceholder: '다시 말할 텍스트를 여기에 붙여넣으세요...',
    buttonText: '텍스트 다시 말하기',
    maxLength: 4096,
    options: [
      {
        name: 'tone',
        label: '목표 톤',
        choices: ['격식체/전문적', '캐주얼/대화체', '학술적/학문적', '창의적/매력적', '단순화/평이한'],
        default: '캐주얼/대화체',
        type: 'select',
      },
      {
        name: 'intensity',
        label: '다시 말하기 강도',
        choices: ['가벼움 (미묘한 변경)', '중간 (균형 잡힌)', '강함 (상당한 변환)'],
        default: '중간 (균형 잡힌)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor and writing assistant specializing in rephrasing, rewording, and improving text clarity. Your role is to transform input text while preserving meaning, improving readability, and adapting tone as needed.
Tone: {{tone}}
Intensity: {{intensity}}

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '콘텐츠 제작 및 SEO', description: '콘텐츠 크리에이터와 SEO 전문가들이 다시 말하기 도구를 사용하여 기존 콘텐츠의 고유한 버전을 만듭니다. 이렇게 하면 중복 콘텐츠 문제를 피하면서 웹사이트 검색 엔진 순위를 높이는 신선하고 독창적인 콘텐츠를 생성하는 데 도움이 됩니다.' },
      { title: '학술 및 연구 글쓰기', description: '학생, 연구자, 학자들이 다시 말하기 도구를 사용하여 연구를 수행하거나 논문을 작성하는 동안 다양한 출처의 콘텐츠를 바꿔 표현합니다. 도구는 발견, 인용문 또는 정보를 정확성을 유지하고 표절을 피하면서 자신의 말로 다시 작성하는 데 도움이 됩니다.' },
      { title: '소셜 미디어 및 마케팅 콘텐츠', description: '마케터와 소셜 미디어 매니저들이 다시 말하기 도구를 사용하여 제품 설명, 홍보 콘텐츠 또는 소셜 미디어 포스트의 고유한 변형을 만듭니다. 마케팅 메시지를 바꿔 표현하면 청중의 관심을 끌고 플랫폼 전반에서 다양한 접근 방식을 테스트할 수 있습니다.' },
    ],
    faqs: [
      { question: '다시 말하기 도구란 무엇인가요?', answer: '다시 말하기 도구는 단어를 동의어로 대체하거나, 문장 구조를 재구성하거나, 글쓰기 스타일을 변경하면서 원래 의미를 보존하여 텍스트를 바꿔 표현하는 데 도움을 줍니다. 고유한 콘텐츠 생성, 명확성 향상 또는 톤 조정에 유용합니다.' },
      { question: '다시 말하기와 패러프레이징은 같은 건가요?', answer: '매우 비슷합니다. 둘 다 같은 아이디어를 다른 말로 표현하는 것을 포함합니다. 다시 말하기는 종종 더 작은 규모의 변경(문장이나 단락)을 의미하고, 패러프레이징은 때로는 요약이나 더 큰 변환을 의미합니다.' },
      { question: '이것이 단순히 동의어를 사용하는 것과 어떻게 다른가요?', answer: '품질 있는 다시 말하기는 단순한 동의어 대체를 넘어섭니다. 문장을 재구성하고, 문법 구조를 변경하고, 문장 길이를 다양화하고, 흐름을 개선하여 로봇처럼 읽히지 않고 자연스럽게 읽히는 텍스트를 만듭니다.' },
      { question: '다시 말한 콘텐츠를 표절 걱정 없이 사용할 수 있나요?', answer: '다시 말하기는 고유한 표현을 만드는 데 도움이 되지만, 자신의 것이 아닌 아이디어에 대해서는 여전히 원본 출처를 인용해야 합니다. 도구는 표현에 도움이 되지만, 개념과 연구에 대한 적절한 귀속은 여전히 중요합니다.' },
      { question: '어떤 유형의 텍스트를 다시 말할 수 있나요?', answer: '어떤 텍스트든 다시 말할 수 있습니다: 기사, 블로그 포스트, 에세이, 제품 설명, 이메일, 소셜 미디어 콘텐츠, 학술 논문, 마케팅 카피 등. 도구는 다양한 콘텐츠 유형에 적응합니다.' },
      { question: '더 나은 다시 말하기 결과를 얻으려면 어떻게 해야 하나요?', answer: '목표(명확성, 격식, 고유성)에 대한 명확한 맥락을 제공하고, 원하는 톤을 지정하고, 가벼운 편집을 원하는지 상당한 변환을 원하는지 표시하세요. 요청이 구체적일수록 출력이 더 좋아집니다.' },
      { question: '다시 말하기가 텍스트의 의미를 바꾸나요?', answer: '품질 있는 다시 말하기는 표현을 변경하면서 핵심 의미를 보존합니다. 하지만 특히 기술적이거나 전문화된 콘텐츠의 경우 다시 말한 텍스트가 의도한 메시지를 정확하게 전달하는지 항상 검토하세요.' },
      { question: '이 도구가 글을 더 격식체로 또는 캐주얼하게 만들 수 있나요?', answer: '네, 톤 조정은 핵심 기능입니다. 캐주얼한 글을 비즈니스 문서용 전문적 언어로 변환하거나, 격식체 텍스트를 소셜 미디어와 블로그용 대화체로 만들 수 있습니다.' },
      { question: '이것이 문법 검사와 어떻게 다른가요?', answer: '문법 검사기는 기존 텍스트의 오류를 수정합니다. 다시 말하기 도구는 아이디어가 표현되는 방식을 변환하여 콘텐츠의 새로운 버전을 만듭니다. 다른 목적을 제공하지만 세련된 결과를 위해 함께 사용할 수 있습니다.' },
      { question: '다시 말한 버전을 항상 수락해야 하나요?', answer: '아니요, 항상 검토하고 편집하세요. AI 다시 말하기는 개선이 필요할 수 있는 출발점입니다. 최종 버전이 당신의 목소리를 정확하게 반영하고, 정확성을 유지하며, 특정 맥락에 맞는지 확인하기 위해 판단력을 사용하세요.' },
    ],
  },

  'introduction-generator': {
    slug: 'introduction-generator',
    name: '소개글 생성기',
    title: '무료 AI 소개글 생성기',
    description: '첫 문장부터 독자를 사로잡는 매력적인 소개글을 만드세요. 블로그, 에세이, 기사에 완벽합니다.',
    metaDescription: '첫 문장부터 독자를 사로잡는 매력적인 소개글을 만드세요. 무료 AI 도구로 설득력 있는 오프닝을 생성. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '기사 주제와 핵심 포인트...',
    inputPlaceholder: '예: 주제: 원격 근무 생산성. 핵심 포인트: 유연성, 워라밸, 커뮤니케이션 과제',
    buttonText: '소개글 생성',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: '콘텐츠 유형', choices: ['블로그 포스트', '가이드', '리스트 기사', '에세이/의견', '제품 리뷰', '연구/보고서'], default: '블로그 포스트', type: 'select' },
      { name: 'hookType', label: '훅 유형', choices: ['질문', '통계', '이야기', '대담한 주장', '공감'], default: '질문', type: 'select' },
      { name: 'tone', label: '톤', choices: ['전문적', '캐주얼', '영감', '학술적'], default: '전문적', type: 'select' },
    ],
    systemPrompt: `You are an expert content writer specializing in crafting compelling introductions that hook readers.
Content Type: {{contentType}}
Hook Type: {{hookType}}
Tone: {{tone}}
Output only the introduction paragraph(s). No preamble.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '콘텐츠 마케팅 및 블로그 오프닝', description: '기사 시작에 어려움을 겪는 콘텐츠 크리에이터가 독자를 즉시 사로잡는 매력적인 오프닝을 만들기 위해 사용합니다.' },
      { title: '학술 에세이 소개', description: '학생들이 논문을 명확히 확립하는 구조화된 소개를 생성할 수 있습니다.' },
      { title: '비즈니스 문서 오프닝', description: '전문가들이 메시지의 중요성을 즉시 확립하는 소개를 만들 수 있습니다.' },
    ],
    faqs: [
      { question: '좋은 소개글이란?', answer: '강력한 소개글은 독자를 즉시 사로잡고, 관련성을 확립하며, 문제나 기회를 제시하고, 가치를 약속합니다.' },
      { question: '소개글 생성기는 무료인가요?', answer: '네, 가입이나 결제 없이 완전히 무료입니다.' },
      { question: '소개글의 적절한 길이는?', answer: '소개글은 일반적으로 전체 콘텐츠 길이의 10-15%를 차지합니다.' },
    ],
  },

  'text-expander': {
    slug: 'text-expander',
    name: '텍스트 확장기',
    title: '무료 AI 텍스트 확장기',
    description: '짧은 문장이나 단락을 원래 의미를 잃지 않고 더 상세하고 포괄적인 콘텐츠로 확장합니다.',
    metaDescription: '짧은 문장이나 단락을 더 상세한 콘텐츠로 확장. 무료 AI 도구가 의미를 변경하지 않고 깊이를 추가. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '확장할 텍스트...',
    inputPlaceholder: '확장하려는 짧은 텍스트를 여기에 붙여넣으세요',
    buttonText: '텍스트 확장',
    maxLength: 2048,
    options: [
      { name: 'expansionLevel', label: '확장 수준', choices: ['가벼운 (1.5배)', '보통 (2배)', '상당한 (3배)'], default: '보통 (2배)', type: 'select' },
      { name: 'method', label: '확장 방법', choices: ['예시 추가', '설명 추가', '세부사항 추가', '균형'], default: '균형', type: 'select' },
      { name: 'tone', label: '톤', choices: ['격식체', '캐주얼', '학술적', '전문적'], default: '전문적', type: 'select' },
    ],
    systemPrompt: `You are an expert content writer specializing in expanding concise text into more detailed content while maintaining the original meaning.
Expansion Level: {{expansionLevel}}
Method: {{method}}
Tone: {{tone}}
Output only the expanded text. No preamble.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '콘텐츠 개발 및 단어 수 목표', description: '단어 수 요구사항을 충족해야 하는 작가가 간결한 아이디어를 완전한 콘텐츠로 발전시키기 위해 사용합니다.' },
      { title: '핵심 포인트 상세화', description: '전문가들이 글머리 기호나 개요를 완전한 산문으로 확장할 수 있습니다.' },
      { title: '학술 글쓰기', description: '학생들이 초기 논증을 증거와 분석이 포함된 완전히 발전된 단락으로 확장할 수 있습니다.' },
    ],
    faqs: [
      { question: '텍스트 확장기란?', answer: '짧은 콘텐츠를 의미 있는 예시, 설명, 세부사항이 포함된 더 상세하고 포괄적인 텍스트로 확장하는 도구입니다.' },
      { question: '텍스트 확장기는 무료인가요?', answer: '네, 가입 없이 완전히 무료입니다.' },
      { question: '원래 의미가 유지되나요?', answer: '원래 의미 보존은 핵심 규칙입니다.' },
    ],
  },

  'youtube-video-title-generator': {
    slug: 'youtube-video-title-generator',
    name: 'YouTube 동영상 제목 생성기',
    title: '무료 AI YouTube 동영상 제목 생성기',
    description: '조회수를 얻는 클릭력 있는 YouTube 동영상 제목을 생성합니다. AI가 SEO 최적화된 제목을 만듭니다.',
    metaDescription: '조회수를 얻는 YouTube 동영상 제목을 생성. AI가 SEO 최적화된 제목을 만듭니다. 지금 Analyze AI에서 이 무료 도구와 다른 무료 도구를 사용해 보세요.',
    inputLabel: '동영상 주제를 설명하세요...',
    inputPlaceholder: '예: 인물 사진 편집을 위한 Lightroom 튜토리얼',
    buttonText: '제목 생성',
    maxLength: 2048,
    options: [
      { name: 'style', label: '제목 스타일', choices: ['정보적/명확', '캐치/클릭베이트', '질문', '리스트/숫자', '하우투'], default: '정보적/명확', type: 'select' },
      { name: 'video_type', label: '동영상 유형', choices: ['튜토리얼/교육', '엔터테인먼트/Vlog', '리뷰/제품', '게이밍', '뉴스/논평'], default: '튜토리얼/교육', type: 'select' },
    ],
    systemPrompt: `You are an expert YouTube content strategist specializing in creating compelling video titles.
Style: {{style}}
Video Type: {{video_type}}
Generate 8-10 title options under 60 characters when possible. For each title, briefly explain why it works.

IMPORTANT: Generate all output in Korean.`,
    useCases: [
      { title: '클릭률 최적화', description: 'YouTube 크리에이터가 클릭률을 최대화하는 제목을 만들기 위해 사용합니다.' },
      { title: '동영상 SEO 개선', description: '키워드 최적화된 제목으로 검색 가시성을 향상시킵니다.' },
      { title: '제목 A/B 테스트', description: '다양한 제목 접근 방식을 테스트하여 최적의 것을 찾습니다.' },
    ],
    faqs: [
      { question: 'YouTube 동영상 제목의 적절한 길이는?', answer: 'YouTube는 최대 100자를 허용하지만, 검색 결과에서 완전히 표시되려면 60-70자를 목표로 하세요.' },
      { question: '제목이 YouTube SEO에 영향을 미치나요?', answer: '네, 제목은 가장 중요한 랭킹 요소 중 하나입니다.' },
    ],
  },
};
