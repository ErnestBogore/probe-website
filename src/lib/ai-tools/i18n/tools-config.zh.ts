// Chinese (zh) Tool Configurations
// Auto-generated translations from English source

import { ToolConfig } from '../tools-config';

// Helper functions
export function getToolBySlugZh(slug: string): ToolConfig | undefined {
  return toolsZh[slug];
}

export function getAllToolsZh(): ToolConfig[] {
  return Object.values(toolsZh);
}

// Chinese uses English slugs, so no mapping needed - just return the slug as-is
export function getEnglishSlugZh(chineseSlug: string): string {
  return chineseSlug;
}


export const toolsZh: Record<string, ToolConfig> = {

  // ==================== BATCH 1: Tools 1-10 ====================

  'paragraph-generator': {
    slug: 'paragraph-generator',
    name: '段落生成器',
    title: '免费AI段落生成器 | Analyze AI',
    description: '使用AI即时生成清晰、结构良好的段落。非常适合论文、博客文章和专业写作。',
    metaDescription: '使用我们的AI驱动工具即时创建高质量段落。完美适用于论文、博客、电子邮件等。节省时间，提高写作水平。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '段落主题或想法',
    inputPlaceholder: '例如：可再生能源对经济的好处',
    buttonText: '生成段落',
    maxLength: 2048,
    options: [
      { name: 'tone', label: '语气', choices: ['正式', '休闲', '说服性', '信息性', '友好'], default: '正式', type: 'select' },
      { name: 'length', label: '长度', choices: ['短（3-4句）', '中（5-7句）', '长（8-10句）'], default: '中（5-7句）', type: 'select' },
    ],
    systemPrompt: `You are a skilled writer who creates clear, engaging paragraphs.
Write a single well-structured paragraph about the user's topic.
Follow these guidelines:
- Start with a clear topic sentence
- Include 2-4 supporting sentences with specific details
- End with a concluding sentence that reinforces the main point
- Use transitions between ideas
- Match the requested tone and length

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '学术论文写作', description: '学生和研究人员使用段落生成器起草论文、论文和研究报告的部分内容。该工具帮助创建结构良好的段落，遵循学术惯例，保持正式语气，同时确保想法之间的逻辑流畅。' },
      { title: '商业沟通', description: '专业人士利用该工具为电子邮件、提案和报告创建清晰简洁的段落。通过输入关键点，您可以获得有效传达业务需求的精炼内容，同时保持适当的专业语气。' },
      { title: '博客和内容创作', description: '内容创作者使用该工具以不同风格生成引人入胜的段落，用于博客和文章。无论您需要对话式、说服性还是信息性的语气，该工具都能帮助保持整个内容的一致性。' },
    ],
    faqs: [
      { question: 'AI段落生成器是什么？', answer: 'AI段落生成器使用先进的AI技术，根据您选择的主题、语气和长度创建结构良好的段落。它通过提供准备使用或用作起点的内容来节省写作时间。' },
      { question: '这个工具是免费的吗？', answer: '是的，这个工具完全免费使用，无需注册。' },
      { question: '生成的段落是原创的吗？', answer: '是的，每个段落都是根据您的特定输入唯一生成的。我们建议在使用前审查并个性化内容，以确保它完美符合您的需求。' },
      { question: '我可以将这些段落用于学术作业吗？', answer: '虽然该工具可以帮助头脑风暴和起草，但请务必遵守您所在机构的学术诚信政策。我们建议将生成的内容作为起点，然后进行编辑以添加您的原创分析。' },
      { question: '为什么我的段落有时看起来太笼统？', answer: '输入越具体，输出越好。不要输入"气候变化"，而是尝试"气候变化如何影响太平洋岛国的农业实践"。' },
      { question: '这个工具支持哪些语气？', answer: '该工具支持多种语气，包括正式、休闲、说服性、信息性和友好。选择适合您受众和目的的语气。' },
      { question: '对段落长度有限制吗？', answer: '您可以选择短（3-4句）、中（5-7句）或长（8-10句）。对于更长的内容，您可以生成多个段落并将它们组合起来。' },
      { question: '我如何改善结果？', answer: '尽可能具体地描述您的主题，选择合适的语气，并考虑包括您希望涵盖的关键点。输入越详细，段落就越有针对性。' },
      { question: '我可以编辑生成的段落吗？', answer: '当然可以！生成的段落是起点。您应该编辑它们以符合您的声音，添加具体细节，并确保它们完美符合您的要求。' },
      { question: '每天可以生成多少个段落？', answer: '对您可以生成的段落数量没有限制。根据需要尽可能多地使用该工具来进行写作项目。' },
    ],
  },

  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: '段落重写器',
    title: '免费AI段落重写器 | Analyze AI',
    description: '即时改造您的段落。我们的AI提供新鲜的措辞，同时保留您的原始含义和意图。',
    metaDescription: '使用我们的免费AI工具改造段落。获得清晰保留含义的新鲜措辞。非常适合论文、电子邮件和博客。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要重写的段落',
    inputPlaceholder: '将您想要重写的段落粘贴到这里...',
    buttonText: '重写段落',
    maxLength: 4096,
    options: [
      { name: 'mode', label: '重写模式', choices: ['改进清晰度', '更正式', '更休闲', '更简洁', '更详细'], default: '改进清晰度', type: 'select' },
    ],
    systemPrompt: `You are an expert editor who rewrites paragraphs while preserving their core meaning.
Rewrite the user's paragraph according to the selected mode:
- Improve clarity: Make it clearer and easier to understand
- More formal: Use professional, academic language
- More casual: Make it conversational and approachable
- More concise: Reduce word count while keeping key points
- More detailed: Expand with additional context and explanation
Maintain the original message and intent.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '学术写作提升', description: '学生使用段落重写器改进论文和论文的初稿。该工具帮助精炼论点，改善句子结构，并提升学术语气，同时保持原始论点。' },
      { title: '专业文档润色', description: '商业专业人士使用该工具精炼报告、提案和电子邮件。重写器帮助使沟通更清晰、更简洁，并以适当的语气与预期受众交流。' },
      { title: '内容改编', description: '作家和营销人员使用该工具为不同平台改编内容。博客文章可以变得更休闲用于社交媒体，或更正式用于行业出版物，同时保持核心信息。' },
    ],
    faqs: [
      { question: 'AI段落重写器如何工作？', answer: '该工具分析您的输入文本，理解其含义，并根据您选择的模式生成新版本。它保留核心信息，同时改进表达、语气或风格。' },
      { question: '重写的内容会保持原意吗？', answer: '是的，该工具专门设计用于在改变表达方式的同时保持您的原始含义和意图。' },
      { question: '我可以用这个来避免抄袭吗？', answer: '虽然该工具可以帮助重新表达内容，但您应该始终正确引用来源。重写不能替代原创思考和适当的归属。' },
      { question: '不同的重写模式是做什么的？', answer: '每种模式优化不同目标：清晰度使其更易于理解，正式/休闲调整语气，简洁减少长度，详细增加更多深度和上下文。' },
      { question: '有字数限制吗？', answer: '该工具对于单个段落效果最佳。对于较长的内容，我们建议分段重写以获得最佳结果。' },
      { question: '我可以多次重写同一段落吗？', answer: '是的，您可以继续重写，直到对结果满意。每次重写都会给您一个略有不同的版本。' },
      { question: '这个工具适合学术工作吗？', answer: '是的，但请始终确保遵守您所在机构的学术诚信政策，并根据需要添加您自己的分析和观点。' },
      { question: '重写器如何处理技术术语？', answer: '该工具试图保留专业术语和技术术语，因为它们通常对意义至关重要。它专注于改进其周围的结构和流畅性。' },
      { question: '我可以为不同部分使用不同模式吗？', answer: '当然可以！您可以根据您的内容需求运行不同的部分通过不同的模式。例如，引言使用"正式"，主体段落使用"简洁"。' },
      { question: '这与转述工具有什么不同？', answer: '虽然两者都改变措辞，但重写器专注于根据特定目标（清晰度、语气、长度）进行改进，而不仅仅是改变词语。它是一种更有目的性的工具。' },
    ],
  },

  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: '转述工具',
    title: '免费AI转述工具 | Analyze AI',
    description: '使用AI转述工具，轻松用新鲜的词语表达您的想法。保持意义，改变表达。',
    metaDescription: '免费转述文本，同时保留原意。非常适合学生、作家和专业人士。AI驱动的清晰结果。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要转述的文本',
    inputPlaceholder: '在这里输入或粘贴您的文本...',
    buttonText: '转述',
    maxLength: 4096,
    options: [
      { name: 'style', label: '转述风格', choices: ['标准', '流畅', '创意', '学术', '简单'], default: '标准', type: 'select' },
    ],
    systemPrompt: `You are an expert paraphrasing assistant.
Reword the user's text while preserving the original meaning.
Style options:
- Standard: Balanced rewording with clear language
- Fluent: Smooth, natural-sounding language
- Creative: More varied vocabulary and expressions
- Academic: Scholarly tone with precise language
- Simple: Easy-to-understand, straightforward language
Keep the same meaning but express it differently.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '研究论文整合', description: '学生和研究人员在研究论文中整合来源时使用转述工具。它帮助将信息转化为自己的话，同时保持准确性，对于正确的学术写作至关重要。' },
      { title: '内容改进', description: '作家使用该工具找到更好的方式来表达想法。当初稿感觉笨拙或重复时，转述可以帮助发现新的措辞，使内容更流畅。' },
      { title: '语言学习', description: '语言学习者使用该工具查看相同想法可以用不同方式表达。这有助于扩展词汇量并理解不同的句子结构。' },
    ],
    faqs: [
      { question: '转述与改写有什么区别？', answer: '转述专门用不同的词语表达相同的含义，而改写可能涉及改变语气、长度或清晰度。转述专注于用新鲜措辞保持意义。' },
      { question: '使用AI转述是抄袭吗？', answer: '如果您使用该工具来帮助您用自己的话表达想法，这是合法的写作辅助。但是，您仍应正确引用来源，切勿声称别人的想法是您自己的。' },
      { question: '不同的风格选项有什么作用？', answer: '标准提供平衡的改写，流畅创建自然的表达，创意使用更多样化的词汇，学术适合正式写作，简单使文本更易于理解。' },
      { question: '如何获得更好的结果？', answer: '为最佳结果输入清晰、完整的句子或段落。选择与您目标匹配的风格，并审查输出以确保它保持您想要的含义。' },
      { question: '该工具会改变技术术语吗？', answer: '该工具通常保留技术术语和特定术语，因为更改它们会改变含义。它专注于改写非专业语言。' },
      { question: '我可以转述较长的文本吗？', answer: '该工具处理一次几个段落效果最佳。对于较长的文档，分段处理会产生更好的结果。' },
      { question: '该工具如何保持意义？', answer: 'AI分析原始文本的核心概念和关系，然后使用保持这些概念关系的替代措辞重新表达。' },
      { question: '转述对SEO有好处吗？', answer: '虽然转述可以帮助创建独特的内容，但它不应用于复制他人的作品。专注于创建使用您自己见解的原创内容。' },
      { question: '我可以撤销转述吗？', answer: '该工具不存储以前的版本，因此请确保在转述前保留原文。您可以比较两者以确保结果符合您的需求。' },
      { question: '该工具支持哪些语言？', answer: '目前，该工具主要用英语和主要世界语言优化。其他语言的结果可能有所不同。' },
    ],
  },

  'sentence-rewriter': {
    slug: 'sentence-rewriter',
    name: '句子重写器',
    title: '免费AI句子重写器 | Analyze AI',
    description: '使用我们的AI句子重写器改造您的句子以获得更好的清晰度和影响力。保留您的意思，改进您的表达。',
    metaDescription: '使用我们的AI工具免费改写句子。提高清晰度，改变语气，或简化语言，同时保持您的含义。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要重写的句子',
    inputPlaceholder: '输入您要重写的句子...',
    buttonText: '重写句子',
    maxLength: 1024,
    options: [
      { name: 'goal', label: '重写目标', choices: ['改进流畅度', '增加影响力', '简化', '更正式', '更休闲'], default: '改进流畅度', type: 'select' },
    ],
    systemPrompt: `You are an expert sentence editor.
Rewrite the user's sentence according to the selected goal:
- Improve flow: Make it read more smoothly
- Add impact: Make it more powerful and memorable
- Simplify: Make it clearer and easier to understand
- More formal: Use professional language
- More casual: Make it conversational
Preserve the core meaning while improving the expression.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '论文修改', description: '学生使用句子重写器在提交前润色论文。该工具帮助改进句子流畅度，修复尴尬的措辞，并增强整体写作质量。' },
      { title: '专业电子邮件', description: '专业人士使用该工具精炼电子邮件中的关键句子。无论是关键请求还是敏感沟通，重写器帮助找到正确的语气和清晰度。' },
      { title: '社交媒体内容', description: '营销人员使用该工具创建标题和帖子的有影响力版本。将平淡的陈述转变为吸引注意力并驱动参与的引人注目的句子。' },
    ],
    faqs: [
      { question: '句子重写器是做什么的？', answer: '它获取您的原始句子，并根据您选择的目标创建改进版本——无论是更好的流畅度、更多影响力、更简单、或不同的正式程度。' },
      { question: '原始含义会保留吗？', answer: '是的，该工具专门设计用于在改进表达方式的同时保持您的核心信息。' },
      { question: '我可以多次重写同一个句子吗？', answer: '是的，您可以尝试不同的目标或继续重写，直到找到完美的措辞。' },
      { question: '这个适合学术写作吗？', answer: '是的，"更正式"选项对学术写作特别有帮助。始终审查结果以确保它们符合您的学术标准。' },
      { question: '"增加影响力"是做什么的？', answer: '它使句子更强大、更令人难忘、更有说服力。这对于论文陈述、开头句或行动呼吁特别有用。' },
      { question: '有长度限制吗？', answer: '该工具针对单个句子优化。对于较长的文本，请考虑使用我们的段落重写器。' },
      { question: '这个适合非母语人士吗？', answer: '是的，该工具可以通过展示如何用不同方式构造句子同时保持意义来帮助提高写作水平。' },
      { question: '我怎么知道哪个目标适合我？', answer: '考虑您的受众和目的。正式场合使用"更正式"，博客使用"更休闲"，标题使用"增加影响力"，复杂写作使用"简化"。' },
      { question: '该工具会修正语法错误吗？', answer: '虽然该工具经常会在重写时改进语法，但它主要专注于风格和清晰度。对于语法问题，请考虑使用我们的语法检查器。' },
      { question: '我可以将这个用于商业内容吗？', answer: '是的，该工具非常适合改进商业写作、营销文案和专业沟通。' },
    ],
  },

  'summarizer': {
    slug: 'summarizer',
    name: '摘要器',
    title: '免费AI摘要器 | Analyze AI',
    description: '立即将冗长的文本浓缩为简洁、有意义的摘要。我们的AI帮助您快速高效地捕获关键点。',
    metaDescription: '使用AI免费总结文章、论文和文档。获取清晰、简洁的摘要，节省您的时间，同时捕获关键点。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要摘要的文本',
    inputPlaceholder: '粘贴您想要摘要的文本...',
    buttonText: '摘要',
    maxLength: 8192,
    options: [
      { name: 'length', label: '摘要长度', choices: ['极简（1-2句）', '简短（3-5句）', '中等（1段）', '详细（2-3段）'], default: '简短（3-5句）', type: 'select' },
      { name: 'focus', label: '焦点', choices: ['关键点', '行动项目', '事实和数据', '论点和结论'], default: '关键点', type: 'select' },
    ],
    systemPrompt: `You are an expert summarizer who distills texts to their essential points.
Create a summary of the user's text with the specified length and focus:
Length options:
- Bare minimum: Just 1-2 sentences with the absolute core message
- Short: 3-5 sentences covering main points
- Medium: One full paragraph with key details
- Detailed: 2-3 paragraphs with comprehensive coverage
Focus options:
- Key points: Main ideas and takeaways
- Action items: Tasks, recommendations, next steps
- Facts and data: Statistics, numbers, specific information
- Arguments and conclusions: Main arguments and their conclusions
Preserve essential information and maintain accuracy.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '研究和学习', description: '学生使用摘要器将研究材料压缩为可管理的要点。这有助于更快地复习内容，并理解学术论文或教科书章节的核心论点。' },
      { title: '商业情报', description: '专业人士使用该工具总结报告、文章和市场研究。快速提取关键见解，无需阅读完整文档，节省时间，同时保持知情。' },
      { title: '内容策划', description: '内容创作者使用摘要器为其受众提取文章或资源的关键点。这有助于创建简报、总结或社交媒体亮点。' },
    ],
    faqs: [
      { question: 'AI摘要器如何工作？', answer: 'AI分析您的文本以识别主要想法、关键点和重要细节，然后创建保留核心信息的浓缩版本。' },
      { question: '不同的长度选项是什么意思？', answer: '极简给您只有核心信息（1-2句），简短提供主要点（3-5句），中等提供完整段落，详细提供2-3段的全面覆盖。' },
      { question: '焦点选项改变什么？', answer: '焦点选项调整摘要强调的内容。关键点给您主要想法，行动项目列出任务，事实和数据提取统计，论点和结论专注于推理。' },
      { question: '可以摘要的文本有多长？', answer: '该工具处理几页内容表现最佳。对于较长的文档，请考虑分段摘要以获得更准确的结果。' },
      { question: '该工具对技术内容准确吗？', answer: '该工具保留技术术语和关键概念。始终审查摘要以确保技术细节在您的上下文中被准确捕获。' },
      { question: '我可以摘要多种语言吗？', answer: '该工具主要优化英语和主要世界语言。其他语言的结果质量可能有所不同。' },
      { question: '该工具如何决定什么是重要的？', answer: 'AI识别主要想法、重复主题、结论性陈述和关键数据来确定信息的重要性。' },
      { question: '我可以信任摘要用于重要决策吗？', answer: '虽然摘要对于快速理解有帮助，但对于重要决策，始终在原始来源中验证关键细节。' },
      { question: '什么类型的文本摘要效果最好？', answer: '该工具对结构化文本效果极佳：文章、报告、论文和商业文档。高度技术性或创意文本可能需要审查。' },
      { question: '我可以为摘要进一步提炼吗？', answer: '是的，您可以获取一个摘要，然后使用更短的长度设置再次运行以获得更简洁的版本。' },
    ],
  },

  'outline-generator': {
    slug: 'outline-generator',
    name: '大纲生成器',
    title: '免费AI大纲生成器 | Analyze AI',
    description: '为您的论文、文章和演示文稿创建结构化大纲。我们的AI可以帮助您有效地组织和规划您的写作。',
    metaDescription: '使用AI即时生成结构化大纲。组织论文、博客文章和演示文稿。免费且易于使用。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '主题或标题',
    inputPlaceholder: '例如：社交媒体对青少年心理健康的影响',
    buttonText: '生成大纲',
    maxLength: 2048,
    options: [
      { name: 'depth', label: '大纲深度', choices: ['基础（主要部分）', '详细（有子点）', '全面（多级）'], default: '详细（有子点）', type: 'select' },
      { name: 'format', label: '格式类型', choices: ['论文', '博客文章', '演示文稿', '研究论文', '一般'], default: '一般', type: 'select' },
    ],
    systemPrompt: `You are an expert at creating well-organized outlines for various content types.
Generate a structured outline for the user's topic.
Depth options:
- Basic: Main sections only (I, II, III)
- Detailed: Main sections with sub-points (I.A, I.B)
- Comprehensive: Multiple levels of hierarchy
Format the outline appropriately for the specified content type.
Include clear headings that guide the writing process.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '学术论文规划', description: '学生使用大纲生成器规划论文和研究报告。该工具帮助创建遵循学术结构、确保在开始写作之前逻辑有序地涵盖所有必要组成部分的框架。' },
      { title: '演示文稿结构', description: '专业人士使用该工具构建演示文稿和演讲。将复杂主题组织成清晰的章节，帮助受众有效地跟随和保留信息。' },
      { title: '内容策略', description: '作家和营销人员使用大纲来规划博客文章和文章系列。这确保全面覆盖主题，并帮助维护内容之间的逻辑流程。' },
    ],
    faqs: [
      { question: 'AI如何创建大纲？', answer: '该工具分析您的主题，并应用逻辑结构框架来组织信息，考虑主题的自然分组以及针对您选择的格式（论文、博客等）的典型组织。' },
      { question: '不同的深度选项有什么作用？', answer: '基础只给您主要章节，详细添加子点以创建更完整的框架，全面提供完全发展思想的多级层次结构。' },
      { question: '大纲可以用于任何主题吗？', answer: '是的，该工具处理各种主题，从技术主题到创意写作。选择匹配您项目类型的格式选项可获得更量身定制的结果。' },
      { question: '我如何自定义生成的大纲？', answer: '将大纲作为起点。添加与您研究相关的部分，删除不相关的部分，并重新排列元素以更好地匹配您的观点或论点。' },
      { question: '哪种格式最适合我的项目？', answer: '论文格式提供学术结构，博客文章提供引人入胜的章节流，演示文稿创建幻灯片友好的组织，研究论文遵循科学论文结构。' },
      { question: '我可以将大纲转换为完整文档吗？', answer: '大纲作为您写作的蓝图。使用它来指导每个部分的起草，确保您涵盖所有计划的点并保持组织性。' },
      { question: '主题可以有多具体？', answer: '越具体越好。"可再生能源"可以工作，但"中国城市地区的太阳能电池板采用"会产生更量身定制、更有用的大纲。' },
      { question: '大纲对团队项目有帮助吗？', answer: '是的，共享大纲可以帮助团队在结构上保持一致，在成员之间分配部分，并确保在协作内容中实现全面覆盖。' },
      { question: '我应该完全遵循大纲吗？', answer: '将其作为灵活的指南。在写作过程中发现不同结构更有效时，您可以随意修改大纲。' },
      { question: '该工具如何处理复杂主题？', answer: '对于复杂主题，使用全面深度选项。您也可以生成多个大纲来探索组织主题的不同方法。' },
    ],
  },

  'conclusion-generator': {
    slug: 'conclusion-generator',
    name: '结论生成器',
    title: '免费AI结论生成器 | Analyze AI',
    description: '为您的论文、文章和报告创建有力的结束段落。我们的AI帮助您以持久的印象结束。',
    metaDescription: '使用AI即时生成引人注目的结论。完美适用于论文、博客和商业写作。免费且易于使用。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '主要点或内容摘要',
    inputPlaceholder: '描述您内容的主要点或粘贴您的主体段落...',
    buttonText: '生成结论',
    maxLength: 4096,
    options: [
      { name: 'style', label: '结论风格', choices: ['摘要', '行动呼吁', '发人深省', '展望未来', '圆环结构'], default: '摘要', type: 'select' },
      { name: 'length', label: '长度', choices: ['简短（2-3句）', '中等（4-6句）', '完整段落'], default: '中等（4-6句）', type: 'select' },
    ],
    systemPrompt: `You are an expert at writing compelling conclusions.
Create a strong concluding paragraph based on the user's content.
Style options:
- Summary: Synthesize main points without simple repetition
- Call to action: End with a clear recommendation or next step
- Thought-provoking: Leave readers with something to consider
- Forward-looking: Point to future implications or developments
- Circular: Connect back to the introduction's opening hook
Write a memorable ending that reinforces the main message.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '学术论文完成', description: '学生使用结论生成器创建有力的论文结尾。该工具帮助综合论点并强化论点，同时确保结论符合学术写作标准。' },
      { title: '商业报告', description: '专业人士使用该工具为报告和提案创建有影响力的结论。强有力的结尾确保关键建议得到清晰陈述，并驱动预期的行动。' },
      { title: '内容写作', description: '博主和作家使用该工具创建引人注目的结尾，鼓励参与。无论是行动呼吁还是发人深省的陈述，结尾都有助于留下持久印象。' },
    ],
    faqs: [
      { question: '什么是好的结论？', answer: '好的结论综合主要点而不是简单地重复它们，强化主要信息，并给读者一些东西来思考或采取行动。它应该提供完成感。' },
      { question: '不同的结论风格有什么作用？', answer: '摘要综合关键点，行动呼吁给出下一步，发人深省留下问题或想法，展望未来指出影响，圆环结构连接回您的开头。' },
      { question: '我应该输入什么以获得最佳结果？', answer: '输入您文章的主要点，或粘贴您的主体段落。工具获得的上下文越多，结论就会越量身定制和相关。' },
      { question: '这个对论文有好处吗？', answer: '是的，该工具专门设计用于帮助学术写作。对于论文，摘要和发人深省风格通常效果最好。' },
      { question: '我应该添加新信息到结论中吗？', answer: '一般来说，不应该。结论应该综合和加强您主体中呈现的内容，而不是引入新论点或证据。' },
      { question: '行动呼吁结论是什么时候合适的？', answer: '行动呼吁对于说服性文章、商业提案和鼓励读者采取下一步行动的内容非常有效。' },
      { question: '我的结论应该有多长？', answer: '通常占您总内容的10-15%。较短的文章需要较短的结论；较长的论文可以支持更详细的结尾。' },
      { question: '圆环结构风格是如何工作的？', answer: '它连接回您引言中的开头钩子或主题，创造对称和完成的感觉。这对于有强开头的叙事或文章特别有效。' },
      { question: '我可以混合结论风格吗？', answer: '是的，许多有效的结论结合元素。例如，您可以在以前瞻性陈述结束前总结关键点。' },
      { question: '我应该如何以发人深省风格结束？', answer: '用一个更广泛的问题，对意义或影响的反思，或一个鼓励读者继续思考主题的发人深省的陈述结束。' },
    ],
  },

  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum生成器',
    title: '免费AI Lorem Ipsum生成器',
    description: '为您的设计项目生成占位文本。我们的AI创建可自定义长度的专业Lorem Ipsum文本。',
    metaDescription: '为网页设计和布局生成Lorem Ipsum占位文本。可自定义段落、句子或单词数量。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '数量',
    inputPlaceholder: '输入数量（例如，5个段落）',
    buttonText: '生成Lorem Ipsum',
    maxLength: 256,
    options: [
      { name: 'unit', label: '单位', choices: ['段落', '句子', '单词'], default: '段落', type: 'select' },
      { name: 'style', label: '风格', choices: ['经典Lorem Ipsum', '现代变体', '混合'], default: '经典Lorem Ipsum', type: 'select' },
    ],
    systemPrompt: `You are a Lorem Ipsum text generator.
Generate placeholder text based on user specifications.
Style options:
- Classic Lorem Ipsum: Traditional Latin-style placeholder text
- Modern variant: Updated placeholder with more varied vocabulary
- Mixed: Combination of classic and modern elements
Create the specified amount of placeholder text.
Maintain natural text flow and paragraph structure.

IMPORTANT: Generate all output in the requested Lorem Ipsum style.`,
    useCases: [
      { title: '网页设计模型', description: '设计师使用Lorem Ipsum为网站模型创建逼真的文本占位符。这有助于客户可视化最终设计，而不会被临时内容分散注意力。' },
      { title: '印刷布局测试', description: '平面设计师使用占位文本测试印刷材料的排版和布局。这确保设计在最终内容就位之前与任何文本长度都能很好地配合。' },
      { title: '开发测试', description: '开发人员使用生成的文本测试用户界面的不同文本长度表现，确保布局处理边缘情况和不同的内容大小。' },
    ],
    faqs: [
      { question: '什么是Lorem Ipsum？', answer: 'Lorem Ipsum是印刷和设计行业使用的标准占位文本。它源自拉丁语，因为看起来像真实文本且不会分散对设计元素的注意力而被使用。' },
      { question: '为什么使用Lorem Ipsum而不是真实文本？', answer: '它可以防止读者专注于内容而不是设计。因为它是无意义的，它让人们评估视觉元素，而不是分析书面内容。' },
      { question: '不同风格选项有什么区别？', answer: '经典给您传统的拉丁语Lorem Ipsum，现代使用更新的变体，混合结合两者以增加多样性，同时保持熟悉的外观。' },
      { question: '我可以生成多少文本？', answer: '您可以生成从几个单词到多个段落的任何内容。对于非常长的文本需求，您可能需要多次运行。' },
      { question: 'Lorem Ipsum文本是否总是相同的？', answer: '虽然它来自标准源，但该工具生成变体，因此每个输出略有不同，同时保持传统的Lorem Ipsum外观。' },
      { question: '我可以在商业项目中使用Lorem Ipsum吗？', answer: '是的，Lorem Ipsum可以自由用于任何目的。它是公共领域，可以在任何商业或个人项目中使用。' },
      { question: '单位之间有什么区别？', answer: '段落给您完整的文本块，句子提供灵活组合的单独句子，单词给您特定的单词计数。' },
      { question: '我应该何时使用现代变体？', answer: '当您想要看起来略有不同于经典Lorem Ipsum的占位文本时，请使用它，同时仍然具有占位功能。' },
      { question: '有其他语言的Lorem Ipsum吗？', answer: '传统上Lorem Ipsum使用拉丁语。对于本地化占位文本，请考虑使用您目标语言的替代文本。' },
      { question: '我可以为同一项目生成多个集合吗？', answer: '是的，您可以多次运行生成器以为项目的不同部分创建多种变体。' },
    ],
  },

  'seo-title-generator': {
    slug: 'seo-title-generator',
    name: 'SEO标题生成器',
    title: '免费AI SEO标题生成器 | Analyze AI',
    description: '创建吸引点击并排名良好的优化标题。我们的AI帮助您制作引人注目、搜索引擎友好的标题。',
    metaDescription: '使用AI生成SEO优化的标题。提高点击率并提高搜索排名。免费用于博客、文章等。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '主题或关键词',
    inputPlaceholder: '例如：初学者家庭锻炼技巧',
    buttonText: '生成标题',
    maxLength: 1024,
    options: [
      { name: 'count', label: '标题数量', choices: ['3个标题', '5个标题', '10个标题'], default: '5个标题', type: 'select' },
      { name: 'style', label: '标题风格', choices: ['直接', '如何做', '列表/数字', '问题', '混合'], default: '混合', type: 'select' },
    ],
    systemPrompt: `You are an expert SEO copywriter specializing in title optimization.
Generate compelling, SEO-friendly titles for the user's topic.
Style options:
- Straightforward: Clear, direct titles
- How-to: Instructional titles starting with "How to"
- List/Number: Titles with numbers (5 Ways, 10 Tips, etc.)
- Question: Titles phrased as questions
- Mixed: Variety of styles
Follow SEO best practices:
- Keep titles under 60 characters when possible
- Include the main keyword naturally
- Make them compelling and click-worthy
- Balance SEO optimization with readability

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '博客内容优化', description: '博主使用SEO标题生成器创建在搜索结果中表现良好的标题。该工具帮助平衡关键词优化和读者吸引力，以改善流量和点击率。' },
      { title: '内容规划', description: '内容经理使用该工具头脑风暴内容日历的标题想法。为同一主题生成多个选项有助于A/B测试和变体探索。' },
      { title: '标题A/B测试', description: '营销人员生成多个标题版本以测试哪些表现最佳。数据驱动的方法帮助随着时间的推移改进内容策略。' },
    ],
    faqs: [
      { question: '什么是SEO友好的标题？', answer: 'SEO友好的标题自然包含相关关键词，保持在60个字符左右以在搜索结果中完整显示，并且足够引人注目以鼓励点击。' },
      { question: '我的标题应该有多长？', answer: '保持标题在50-60个字符以下，以确保它们在搜索引擎结果中完整显示。该工具按照此指南生成优化长度的标题。' },
      { question: '为什么数字在标题中有效？', answer: '带有数字的标题（如"5种方法..."或"10个技巧"）通常表现良好，因为它们设定明确的期望，并暗示易于消化、可扫描的内容。' },
      { question: '我应该选择哪种风格？', answer: '选择匹配您内容的风格。教程适合如何做，信息性文章适合列表，您需要多样性时选择混合。问题对回答特定查询的内容效果很好。' },
      { question: '我可以编辑生成的标题吗？', answer: '当然可以！将这些作为起点。根据您的写作风格、特定关键词或品牌声音的需要进行调整。' },
      { question: '我怎么知道一个标题是否好？', answer: '好标题描述准确、包含关键词、在60个字符以内、对目标受众引人注目，并清晰传达内容承诺。' },
      { question: '我应该始终使用我的主要关键词吗？', answer: '理想情况下，是的——最好在标题的开头。但是，可读性不应为关键词放置而牺牲。自然整合很重要。' },
      { question: '为什么为一个主题生成多个标题？', answer: '有多个选项允许您A/B测试不同方法，为社交与搜索选择不同的标题，或为不同平台选择最佳匹配。' },
      { question: '情感词会改善标题吗？', answer: '是的，像"终极"、"基本"、"惊人"这样的词可以提高点击率。然而，用得太多会削弱它们的影响力或让您的标题看起来像垃圾邮件。' },
      { question: '我应该经常更新我的标题吗？', answer: '如果您的页面没有很好地排名或获得点击，测试新标题会有所帮助。对于表现良好的内容，没有必要更改有效的内容。' },
    ],
  },

  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: '元描述生成器',
    title: '免费AI元描述生成器 | Analyze AI',
    description: '为更好的搜索可见性创建引人注目的元描述。我们的AI帮助您编写驱动点击的预览片段。',
    metaDescription: '使用AI生成SEO优化的元描述。提高搜索片段的点击率。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '页面主题或内容',
    inputPlaceholder: '描述您页面的内容...',
    buttonText: '生成描述',
    maxLength: 2048,
    options: [
      { name: 'count', label: '描述数量', choices: ['1个描述', '3个描述', '5个描述'], default: '3个描述', type: 'select' },
      { name: 'tone', label: '语气', choices: ['专业', '友好', '紧迫', '信息性'], default: '专业', type: 'select' },
    ],
    systemPrompt: `You are an expert at writing compelling meta descriptions for SEO.
Create meta descriptions that:
- Are between 150-160 characters
- Include the main keyword naturally
- Contain a clear value proposition
- Include a call to action when appropriate
- Accurately represent the page content
Match the specified tone while maintaining professionalism.
Make descriptions compelling enough to drive clicks from search results.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '网站页面优化', description: '网站管理员使用元描述生成器为网站页面创建引人注目的预览。良好的元描述改善搜索结果中的点击率。' },
      { title: '电子商务产品页面', description: '在线卖家为产品页面生成元描述，突出关键功能、优势和行动呼吁，以改善搜索可见性和产品发现。' },
      { title: '内容优化审计', description: '营销人员在内容审计期间使用该工具为现有页面生成更新、优化的元描述，以改善搜索性能。' },
    ],
    faqs: [
      { question: '什么是元描述？', answer: '元描述是出现在搜索引擎结果中页面标题下的简短摘要。它告诉用户在点击之前对页面的期望。' },
      { question: '理想的元描述长度是多少？', answer: '保持在150-160个字符以内。更长的描述在搜索结果中会被截断，可能会切断重要信息。' },
      { question: '元描述如何影响SEO？', answer: '虽然不是直接的排名因素，但好的元描述可以提高点击率，这会向搜索引擎发出您的内容相关且有价值的信号。' },
      { question: '为什么语气选项很重要？', answer: '不同的语气对不同的受众和目的有效。专业适合B2B，友好适合消费者品牌，紧迫适合销售页面，信息性适合教育内容。' },
      { question: '我应该在元描述中包含关键词吗？', answer: '是的，自然地。搜索引擎会在结果中加粗匹配的关键词，使您的列表更可见。但是，不要堆砌关键词——可读性很重要。' },
      { question: '每个页面可以有多个元描述吗？', answer: '不可以——每个页面应该只有一个元描述。该工具生成多个选项供您选择最好的一个。' },
      { question: '元描述中应该包含什么？', answer: '包括主要价值主张，关键关键词，可能的话有行动呼吁，以及页面提供内容的清晰指示。' },
      { question: '我应该在元描述中使用行动呼吁吗？', answer: '是的，当适当时。短语如"了解如何"、"立即发现"或"立即开始"可以鼓励点击，特别是对于商业页面。' },
      { question: '什么使元描述引人注目？', answer: '清晰的利益陈述，具体信息（数字、事实），紧迫感或好奇心驱动因素，以及准确表示页面内容。' },
      { question: '我应该多久更新一次元描述？', answer: '当您注意到低点击率，当您的页面内容发生重大变化时更新，或者作为定期SEO审计的一部分。对于表现良好的页面，稳定性很好。' },
    ],
  },

  // ==================== BATCH 2: Tools 11-20 ====================

  'ai-content-detector': {
    slug: 'ai-content-detector',
    name: 'AI内容检测器',
    title: '免费AI内容检测器 | Analyze AI',
    description: '检查文本是由AI还是人类编写的。我们的检测器分析写作模式以识别AI生成的内容。',
    metaDescription: '免费检测AI生成的内容。分析文本以了解它是由人类还是AI编写的。适用于教育工作者、编辑和内容验证。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要分析的文本',
    inputPlaceholder: '粘贴要检查AI生成内容的文本...',
    buttonText: '检测AI内容',
    maxLength: 8192,
    options: [
      { name: 'sensitivity', label: '检测敏感度', choices: ['标准', '高', '平衡'], default: '平衡', type: 'select' },
    ],
    systemPrompt: `You are an AI content detection specialist. Analyze AI the provided text for indicators of AI-generated content.
Consider these factors:
- Writing pattern consistency
- Vocabulary diversity and complexity
- Sentence structure variation
- Topic coherence and depth
- Common AI writing characteristics
Provide:
1. An overall assessment (Likely AI / Likely Human / Mixed/Uncertain)
2. Confidence level
3. Key indicators that influenced the assessment
4. Specific passages that raised flags (if any)
Be balanced and acknowledge limitations of detection.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '学术诚信', description: '教育工作者使用AI内容检测器来帮助评估学生提交的作业是否有AI生成内容的迹象。这支持学术诚信政策，同时提供有关评估需要更仔细审查的提交的见解。' },
      { title: '内容质量保证', description: '编辑和出版商使用该工具作为其审查过程的一部分，以识别可能是AI生成的内容。这有助于维护内容标准，并确保真实性对其受众很重要的出版物的质量。' },
      { title: '真实性验证', description: '企业使用该工具在发布前检查内容，无论是他们自己创建的还是从自由职业者那里收到的，以确保其符合真实性要求和内容指南。' },
    ],
    faqs: [
      { question: 'AI检测如何工作？', answer: '检测器分析写作模式、词汇选择、句子结构和其他AI生成内容常见的语言标记。它将这些与人类写作的典型特征进行比较。' },
      { question: '检测准确吗？', answer: '没有AI检测器是100%准确的。结果应被视为指标而非确定证明。人类审查仍然是必不可少的，检测应该是更广泛评估过程的一部分。' },
      { question: '检测会产生误报吗？', answer: '是的，技术性或公式化的人类写作有时会被标记为可能由AI生成。相反，编辑过的AI文本可能无法被检测到。始终将结果视为一个因素而不是最终答案。' },
      { question: '敏感度设置有什么作用？', answer: '标准提供平衡检测，高会在更轻微的指标上标记（可能有更多误报），平衡则力求最小化误报和漏检。' },
      { question: '我可以检测哪个AI生成了内容吗？', answer: '该工具检测AI生成内容的迹象，但不能可靠地识别是哪个具体的AI创建了它。不同的AI工具有相似的特征。' },
      { question: '我可以检测编辑过的AI内容吗？', answer: '大量编辑过的AI内容更难检测。工具寻找残留模式，但足够的人工编辑可以去除大多数AI特征。' },
      { question: '这应该是唯一的验证方法吗？', answer: '不应该。AI检测应该是更广泛验证过程的一部分，包括与提交者讨论、检查来源和评估内容真实性。' },
      { question: '为什么要检查我自己的AI辅助写作？', answer: '运行您自己的AI辅助内容可以帮助评估是否需要更多编辑以满足真实性标准或匹配人类写作模式。' },
      { question: '工具会保存分析的文本吗？', answer: '为保护隐私，请查看工具的隐私政策。大多数工具不会永久存储文本，但可能会临时处理文本进行分析。' },
      { question: '我应该多久更新一次关于AI检测的知识？', answer: 'AI能力发展迅速。定期更新有助于您了解最新的检测能力和限制。' },
    ],
  },

  'ai-text-humanizer': {
    slug: 'ai-text-humanizer',
    name: 'AI文本人性化器',
    title: '免费AI文本人性化器 | Analyze AI',
    description: '将AI生成的文本转换为听起来自然、人类化的写作。保持意义的同时添加真实性和个性化特色。',
    metaDescription: '使AI生成的内容听起来更自然和人类化。保留意义的同时改善可读性和真实性。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要人性化的AI文本',
    inputPlaceholder: '粘贴您想使其听起来更人类化的AI生成文本...',
    buttonText: '人性化文本',
    maxLength: 4096,
    options: [
      { name: 'level', label: '人性化程度', choices: ['轻度', '中度', '强度'], default: '中度', type: 'select' },
      { name: 'voice', label: '写作声音', choices: ['中性', '休闲', '专业', '对话'], default: '中性', type: 'select' },
    ],
    systemPrompt: `You are an expert editor specializing in making AI-generated text sound more natural and human.
Transform the text while:
- Maintaining the core meaning and information
- Adding natural variations in sentence structure
- Including more conversational elements where appropriate
- Reducing repetitive patterns common in AI writing
- Adding personality while keeping professionalism
Level options:
- Light: Subtle adjustments for naturalness
- Moderate: Noticeable improvements to flow and voice
- Strong: Significant transformation for a more personal touch
Voice options affect the overall tone of the output.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '内容创作工作流程', description: '内容创作者使用人性化器来精炼AI辅助的初稿。该工具帮助添加自然的语气变化和个人特色，使内容感觉更真实，同时保持生产力优势。' },
      { title: '商业沟通', description: '专业人士使用该工具来精炼AI起草的电子邮件、报告和提案。这确保沟通感觉个人化和真实，同时仍然受益于AI辅助。' },
      { title: '学术写作改进', description: '学生使用该工具来改进AI帮助生成的研究笔记或初稿，确保最终提交反映他们的个人声音和写作风格。' },
    ],
    faqs: [
      { question: '人性化是什么意思？', answer: '人性化将AI生成的文本转换为听起来更自然、更少公式化、更像人类编写的内容。它添加变化，消除重复模式，并注入更多个性。' },
      { question: '人性化程度有什么区别？', answer: '轻度进行微妙调整以保持真实性，中度增加更明显的流畅性和声音改进，强度则为更个人化的感觉进行显著转换。' },
      { question: '原始含义会改变吗？', answer: '该工具专门设计用于在更改表达方式的同时保持核心信息。但是，请始终审查以确保您的意图得到保留。' },
      { question: '人性化的文本能通过AI检测器吗？', answer: '虽然人性化可以降低AI检测的可能性，但不能保证。重点应该是改善质量和真实性，而不是逃避检测。' },
      { question: '声音选项有什么作用？', answer: '声音设置调整整体语气：中性平衡，休闲更友好，专业正式但自然，对话模拟自然语音模式。' },
      { question: '这个适合学术工作吗？', answer: '可以帮助改进初稿，但始终确保最终工作真正代表您的想法和分析。请遵守您机构的AI使用政策。' },
      { question: '哪些类型的文本最受益？', answer: '通用AI输出转换效果最佳：博客文章、电子邮件、社交媒体和商业写作。技术或专业内容可能需要专业编辑。' },
      { question: '我可以多次运行同一文本吗？', answer: '是的，您可以运行多次以尝试不同的程度和声音，或进一步精炼输出。' },
      { question: '这与改写有什么不同？', answer: '改写在保持含义的同时更改措辞。人性化专门针对使AI生成的模式更自然，同时保持质量。' },
      { question: '这有多快？', answer: '处理通常很快，取决于文本长度。较长的文本可能需要稍长的时间。' },
    ],
  },

  'content-idea-generator': {
    slug: 'content-idea-generator',
    name: '内容创意生成器',
    title: '免费AI内容创意生成器 | Analyze AI',
    description: '为您的博客、视频和社交媒体获取无尽的内容创意。我们的AI根据您的利基或主题生成新鲜的话题。',
    metaDescription: '为博客、视频和社交媒体生成创意内容想法。适用于营销人员和创作者的AI驱动建议。免费使用。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '您的利基或主题领域',
    inputPlaceholder: '例如：个人理财给千禧一代',
    buttonText: '生成创意',
    maxLength: 2048,
    options: [
      { name: 'platform', label: '内容平台', choices: ['博客', 'YouTube', 'Instagram', 'TikTok', 'LinkedIn', '一般'], default: '一般', type: 'select' },
      { name: 'count', label: '创意数量', choices: ['5个创意', '10个创意', '20个创意'], default: '10个创意', type: 'select' },
    ],
    systemPrompt: `You are a creative content strategist.
Generate fresh, engaging content ideas for the specified niche and platform.
For each idea, provide:
- A compelling title/concept
- Brief description (1-2 sentences)
- Why it would resonate with the target audience
Consider:
- Current trends in the niche
- Common audience pain points and interests
- Content formats that work well on the platform
- Unique angles that differentiate from existing content
Make ideas specific and actionable.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '内容日历规划', description: '营销人员使用内容创意生成器来填充他们的内容日历。该工具帮助头脑风暴未来几周或几个月的话题，确保一致的发布计划，同时涵盖与受众相关的话题。' },
      { title: '突破创作瓶颈', description: '创作者使用该工具来突破写作障碍，发现新的视角。当感觉在同一利基中的所有内容都被覆盖后，生成器揭示了以前未被探索的未开发角度。' },
      { title: '多平台策略', description: '社交媒体经理为不同平台生成创意，每个都根据该平台的内容格式和受众期望量身定制。' },
    ],
    faqs: [
      { question: '该工具如何生成创意？', answer: '该工具分析您的利基，考虑流行趋势、常见受众兴趣和成功的内容模式，生成可能引起目标受众共鸣的新鲜话题。' },
      { question: '创意是唯一的吗？', answer: '创意根据您的特定输入定制生成，但类似话题可能在其他地方存在。工具专注于独特的角度和呈现方式。' },
      { question: '我应该为更好的结果提供什么？', answer: '提供您的特定利基、目标受众以及任何独特的焦点领域。输入越详细，创意就越有针对性和相关性。' },
      { question: '平台选择如何影响结果？', answer: '每个平台都有不同的内容格式和受众期望。工具根据平台特点调整创意：博客的长篇、TikTok的简短、LinkedIn的专业内容等。' },
      { question: '我可以混合不同利基的创意吗？', answer: '是的，您可以为不同话题生成创意，然后结合或交叉应用它们创建独特的内容策略。' },
      { question: '这些创意是趋势性的吗？', answer: '该工具考虑一般趋势和常青话题。对于非常当前的趋势，结合使用趋势监控工具。' },
      { question: '如何选择最好的创意？', answer: '评估每个创意与您的受众兴趣、您的专业知识和您的内容目标的匹配程度。优先考虑您可以真实创建高质量内容的话题。' },
      { question: '我应该多久生成一次新创意？', answer: '许多创作者每月或每季度进行创意生成会议来填充日历。您也可以根据需要使用它来弥补差距或响应新趋势。' },
      { question: '该工具对每个利基都有效吗？', answer: '是的，它适用于各种主题领域，从高度技术性到生活方式内容。提供特定利基详情以获得更相关的结果。' },
      { question: '我应该自定义生成的创意吗？', answer: '绝对应该！将创意作为起点。添加您自己的专业知识、独特视角和品牌声音，使每个创意真正属于您自己。' },
    ],
  },

  'video-script-generator': {
    slug: 'video-script-generator',
    name: '视频脚本生成器',
    title: '免费AI视频脚本生成器 | Analyze AI',
    description: '为您的视频创建引人入胜的脚本。我们的AI帮助您构建适合YouTube、TikTok和社交媒体的内容。',
    metaDescription: '为YouTube、TikTok和社交媒体生成视频脚本。AI驱动的脚本写作具有引人入胜的结构。免费使用。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '视频主题或概念',
    inputPlaceholder: '例如：iPhone 15与三星Galaxy S24比较测评',
    buttonText: '生成脚本',
    maxLength: 2048,
    options: [
      { name: 'length', label: '视频长度', choices: ['短（30-60秒）', '中（2-5分钟）', '长（10+分钟）'], default: '中（2-5分钟）', type: 'select' },
      { name: 'style', label: '脚本风格', choices: ['教育', '娱乐', '评测', '故事叙述', '教程'], default: '教育', type: 'select' },
    ],
    systemPrompt: `You are an expert video scriptwriter.
Create an engaging video script for the specified topic.
Include:
- Attention-grabbing hook (first 5 seconds)
- Clear introduction of the topic
- Well-structured main content
- Smooth transitions between sections
- Compelling call to action
- Suggested B-roll or visual notes where helpful
Adapt style and pacing for the video length and platform.
Make the script conversational and engaging when read aloud.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: 'YouTube内容创作', description: '内容创作者使用视频脚本生成器来构建YouTube视频。该工具帮助创建保持观众参与的流畅结构，包括吸引力钩子、清晰部分和有效的行动呼吁。' },
      { title: '短视频内容', description: '社交媒体创作者为TikTok、Instagram Reels和YouTube Shorts生成脚本。该工具帮助最大化有限时间的影响力并提供有效的信息传递。' },
      { title: '教育视频', description: '教育工作者和培训师创建教育视频内容的脚本。该工具帮助组织课程、包括有效的解释和维护学习者参与。' },
    ],
    faqs: [
      { question: '视频脚本应该包括什么？', answer: '完整的脚本包括引人入胜的开场（钩子）、明确的主题介绍、组织良好的主体内容、部分之间的过渡以及结尾的行动呼吁。' },
      { question: '不同的视频长度有什么建议？', answer: '短视频（30-60秒）需要即时钩子和简洁信息。中等长度允许更多深度。长视频需要清晰的段落划分和多个参与点来保持观众注意力。' },
      { question: '脚本风格是什么意思？', answer: '教育专注于信息传递，娱乐创造乐趣和参与，评测分析产品或服务，故事叙述使用叙事弧线，教程提供分步指南。' },
      { question: '脚本会包括视觉建议吗？', answer: '是的，对于大多数脚本，工具会包括B-roll建议、视觉提示和屏幕提示，帮助您规划什么在屏幕上显示。' },
      { question: '我如何让脚本听起来自然？', answer: '工具创建对话式语言。练习大声朗读脚本，根据您的说话风格进行调整，并使其与您在镜头前自然说话的方式相匹配。' },
      { question: '我可以为同一主题使用不同的风格吗？', answer: '是的，尝试不同的风格可以帮助您找到最适合您受众的方法。同一主题可以作为教程、娱乐片段或故事叙述来呈现。' },
      { question: '脚本如何帮助SEO？', answer: '好的脚本结构有助于观看时间，YouTube对此进行奖励。脚本也可以用于视频描述、字幕和时间戳，所有这些都有助于发现。' },
      { question: '钩子是什么，为什么重要？', answer: '钩子是视频的前几秒，决定观众是否继续观看。它应该抓住注意力、激发好奇心或承诺价值。' },
      { question: '我应该逐字朗读脚本吗？', answer: '脚本是指南。许多创作者更喜欢使用它们作为概要而非逐字阅读，允许在跟随结构的同时进行自然变化。' },
      { question: '如何处理多部分系列？', answer: '为每个部分生成单独的脚本，确保它们之间有一致的结构。考虑在每个脚本中添加对之前和即将到来的部分的引用。' },
    ],
  },

  'acronym-generator': {
    slug: 'acronym-generator',
    name: '缩写词生成器',
    title: '免费AI缩写词生成器 | Analyze AI',
    description: '为您的项目、产品或概念创建有意义的缩写词。我们的AI设计记忆深刻、相关的缩写。',
    metaDescription: '为项目和想法生成智能、记忆深刻的缩写词。AI驱动的缩写创建。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的概念',
    inputPlaceholder: '例如：一个帮助远程团队保持联系的项目管理工具',
    buttonText: '生成缩写词',
    maxLength: 1024,
    options: [
      { name: 'count', label: '缩写词数量', choices: ['3个缩写词', '5个缩写词', '10个缩写词'], default: '5个缩写词', type: 'select' },
      { name: 'style', label: '缩写词风格', choices: ['专业', '创意', '有趣', '描述性'], default: '专业', type: 'select' },
    ],
    systemPrompt: `You are an expert at creating meaningful acronyms.
Generate memorable acronyms based on the user's concept.
For each acronym:
- Create letters that spell something relevant or memorable
- Provide the full expansion of each letter
- Explain why this acronym fits the concept
Consider:
- Easy pronunciation
- Relevance to the concept
- Memorability
- Professional appropriateness (based on style)
Style options affect the tone and creativity level.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '项目命名', description: '团队使用缩写词生成器为项目和倡议创建记忆深刻的名称。好的缩写词帮助涉众记住和讨论项目，同时传达其目的。' },
      { title: '产品品牌', description: '营销人员为产品和功能创建易于记住、与其功能相关的缩写名称。这有助于市场定位和品牌认知。' },
      { title: '框架和方法论', description: '顾问和培训师开发记忆深刻的缩写词来封装框架、流程或方法论，使其更容易教授和记住。' },
    ],
    faqs: [
      { question: '什么是好的缩写词？', answer: '好的缩写词是可发音的、记忆深刻的、与概念相关的，并且具有有意义的构成词。理想情况下，它拼写成一个加强概念的词或词组。' },
      { question: '缩写词是如何创建的？', answer: '该工具分析您的概念，找到相关的单词来描述它，然后创建拼写成记忆深刻的单词或短语的字母组合。' },
      { question: '风格选项有什么作用？', answer: '专业创建商业适用的缩写词，创意更具想象力，有趣添加幽默或巧妙的双关语，描述性专注于清楚解释概念。' },
      { question: '我可以修改生成的缩写词吗？', answer: '是的，将它们作为起点。您可以调整单词选择以更好地匹配您的具体背景或组织语言。' },
      { question: '我应该如何测试缩写词？', answer: '大声说出来——它容易发音吗？与同事分享——他们能记住吗？检查含义——它是否传达了正确的信息？' },
      { question: '创建缩写词有限制吗？', answer: '非常短（2-3个字母）或非常长（8个以上字母）的缩写词更具挑战性。4-6个字母通常效果最佳，便于记忆和发音。' },
      { question: '该工具对技术概念有效吗？', answer: '是的，该工具适用于技术、商业和创意概念。提供足够的上下文来帮助生成相关的缩写词。' },
      { question: '我可以对缩写词进行商标注册吗？', answer: '缩写词可以注册商标，但您需要验证所选缩写词是否已在您的行业中使用。在承诺之前进行商标检索。' },
      { question: '现有词作为缩写词怎么样？', answer: '使用现有词（如SMART或GROW）可以帮助记忆，但确保它们尚未在您的领域广泛使用。' },
      { question: '我应该生成多少个缩写词？', answer: '生成多个选项来比较，5-10个是好的起点。然后根据记忆性、相关性以及您组织中的接受程度进行筛选。' },
    ],
  },

  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: '博客标题生成器',
    title: '免费AI博客标题生成器 | Analyze AI',
    description: '生成获得点击并提高您SEO的博客标题。我们的AI为您的内容创建优化的、引人注目的标题。',
    metaDescription: '为您的博客文章生成SEO友好的、引人入胜的标题。AI驱动的标题创建。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '博客主题',
    inputPlaceholder: '例如：在家工作的生产力技巧',
    buttonText: '生成标题',
    maxLength: 1024,
    options: [
      { name: 'count', label: '标题数量', choices: ['5个标题', '10个标题', '15个标题'], default: '10个标题', type: 'select' },
      { name: 'style', label: '标题风格', choices: ['如何做', '列表', '问题', '陈述', '混合'], default: '混合', type: 'select' },
    ],
    systemPrompt: `You are an expert blog title writer focused on creating click-worthy, SEO-optimized titles.
Generate compelling blog titles for the given topic.
Include a variety of proven title formats:
- How-to titles: Instructional, problem-solving
- List titles: Numbers that promise specific value
- Question titles: Engage curiosity
- Statement titles: Bold claims or insights
Each title should:
- Be under 60 characters when possible
- Include power words that drive clicks
- Target search intent
- Be specific rather than generic
- Create curiosity or promise clear value

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '内容优化', description: '博主使用博客标题生成器改善其文章标题，以获得更好的点击率。正确的标题可以显著影响流量和读者参与度。' },
      { title: 'A/B测试', description: '营销人员生成多个标题选项来测试不同的方法。数据驱动的标题选择帮助随着时间的推移改进内容策略。' },
      { title: '内容规划', description: '在起草文章之前创建标题可以帮助集中写作并确保内容实现标题承诺的内容。' },
    ],
    faqs: [
      { question: '什么是好的博客标题？', answer: '好的博客标题具体、创造好奇心或承诺价值、包含相关关键词、并且足够简洁以在搜索结果中完整显示（大约60个字符）。' },
      { question: '不同的标题风格是什么？', answer: '如何做标题教授某事，列表标题承诺编号的项目（5种方法...），问题标题引发好奇心，陈述标题做出大胆声明，混合给您多种类型。' },
      { question: '标题应该有多长？', answer: '保持在60个字符以下，以确保在搜索结果中完整显示。该工具优化生成合适长度的标题。' },
      { question: '数字在标题中重要吗？', answer: '是的，带有数字的标题（如"7种方法..."或"10个技巧"）通常表现良好，因为它们设定明确的期望并暗示易于消化的内容。' },
      { question: '我应该在标题中使用关键词吗？', answer: '是的，自然地包含关键词有助于SEO，并帮助搜索者快速了解您的文章涵盖什么。' },
      { question: '这个对社交媒体标题有效吗？', answer: '是的，虽然针对博客优化，但生成的标题在社交媒体上也很有效。您可能想为社交分享调整以获得更多对话语气。' },
      { question: '我应该选择多少个标题来测试？', answer: '为A/B测试，从2-3个强标题开始。这提供了有意义的比较而不会让分析复杂化。' },
      { question: '标题中的"力量词"是什么？', answer: '力量词触发情感反应：终极、基本、惊人、秘密、已验证、简单等。它们可以提高点击率，但应谨慎使用以保持可信度。' },
      { question: '我可以混合不同风格的标题吗？', answer: '是的，结合元素可以创建独特的标题。例如："如何在10分钟内使用经过验证的模板写出完美的电子邮件"结合了如何做和列表风格。' },
      { question: '如果我的标题比内容更具吸引力怎么办？', answer: '始终确保您的内容实现标题承诺的内容。失望的读者会快速离开，损害您的指标和声誉。' },
    ],
  },

  'image-alt-text-generator': {
    slug: 'image-alt-text-generator',
    name: '图片Alt文本生成器',
    title: '免费AI图片Alt文本生成器 | Analyze AI',
    description: '为您的图片创建SEO友好的替代文本描述。改善可访问性并增强搜索引擎可见性。',
    metaDescription: '使用AI为图片生成描述性的alt文本。改善网站可访问性和SEO。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的图片',
    inputPlaceholder: '描述图片中的内容或其用途...',
    buttonText: '生成Alt文本',
    maxLength: 1024,
    options: [
      { name: 'context', label: '图片上下文', choices: ['产品', '博客文章', '信息图表', '照片', '图标/图形', '一般'], default: '一般', type: 'select' },
      { name: 'length', label: 'Alt文本长度', choices: ['简短（几个词）', '描述性（1-2句）', '详细（完整描述）'], default: '描述性（1-2句）', type: 'select' },
    ],
    systemPrompt: `You are an accessibility and SEO specialist for image descriptions.
Create effective alt text based on the image description provided.
Guidelines:
- Be concise but descriptive
- Include relevant keywords naturally
- Describe the content, not just "image of..."
- Consider the image's purpose in context
- Make it useful for screen reader users
Context options help tailor the description:
- Product: Focus on product features and details
- Blog post: Support article content
- Infographic: Summarize key information
- Photo: Describe scene, subjects, mood
- Icon/Graphic: Explain purpose and meaning
- General: Balanced description

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '网站可访问性', description: '网站管理员使用alt文本生成器确保图片对屏幕阅读器用户可访问。良好的alt文本使视觉障碍访问者可以理解内容。' },
      { title: 'SEO优化', description: '营销人员为电子商务网站上的产品图片和博客文章中的内容图片生成alt文本，以改善搜索引擎可见性。' },
      { title: '内容批量更新', description: '当更新缺少alt文本的旧网站时，该工具帮助快速为大量图片生成适当的描述。' },
    ],
    faqs: [
      { question: '什么是alt文本？', answer: 'Alt文本（替代文本）是一种书面描述，描述图片的外观或作用。它被屏幕阅读器读取，当图片无法加载时显示，并帮助搜索引擎理解图片内容。' },
      { question: '为什么alt文本对可访问性很重要？', answer: 'Alt文本使使用屏幕阅读器的视觉障碍用户能够理解您网站上的图片内容，使您的内容对所有人都更具包容性和可访问性。' },
      { question: 'alt文本应该有多长？', answer: '通常，alt文本应该是125个字符或更少。对于复杂图片如信息图表，考虑在附近的文本中提供更长的描述，而不是冗长的alt文本。' },
      { question: '上下文选项有什么影响？', answer: '产品上下文强调功能和细节，博客文章侧重于与文章内容的相关性，信息图表总结关键信息，照片描述场景和主题，图标解释目的。' },
      { question: 'alt文本如何帮助SEO？', answer: '搜索引擎使用alt文本来理解图片内容。包含相关关键词有助于图片出现在图片搜索中并支持整体页面SEO。' },
      { question: '我应该在alt文本中使用关键词吗？', answer: '是的，但要自然地使用。关键词填充会损害可访问性和SEO。将关键词融入准确描述图片的描述中。' },
      { question: '装饰性图片需要alt文本吗？', answer: '纯装饰性图片（不传达信息）应该有空alt属性（alt=""），以便屏幕阅读器跳过它们。' },
      { question: '我应该以"图片的..."开头吗？', answer: '不，屏幕阅读器已经宣布是图片。直接用描述开始，如"团队在现代办公室会议"而不是"团队会议的图片"。' },
      { question: '信息图表怎么处理？', answer: '对于复杂的信息图表，在alt文本中提供简要摘要，并考虑在页面上附近提供更详细的描述或文字记录。' },
      { question: '我应该多久更新一次alt文本？', answer: '当图片改变、页面上下文改变或您更新SEO策略时更新。定期审核有助于确保所有图片有适当的描述。' },
    ],
  },

  'slogan-generator': {
    slug: 'slogan-generator',
    name: '口号生成器',
    title: '免费AI口号生成器 | Analyze AI',
    description: '创建捕捉品牌精髓的朗朗上口、记忆深刻的口号。我们的AI生成留在客户脑海中的标语。',
    metaDescription: '为您的品牌或产品生成朗朗上口的口号和标语。AI驱动的创意口号创建。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的品牌或产品',
    inputPlaceholder: '例如：专注于可持续性和社区的咖啡店',
    buttonText: '生成口号',
    maxLength: 1024,
    options: [
      { name: 'count', label: '口号数量', choices: ['5个口号', '10个口号', '15个口号'], default: '10个口号', type: 'select' },
      { name: 'style', label: '口号风格', choices: ['专业', '有趣', '鼓舞人心', '大胆', '经典'], default: '专业', type: 'select' },
    ],
    systemPrompt: `You are an expert advertising copywriter specializing in brand slogans.
Create memorable, impactful slogans for the described brand or product.
Effective slogans should:
- Be short and memorable (ideally under 10 words)
- Capture the brand's unique value proposition
- Create an emotional connection
- Be easy to say and remember
- Work across different marketing contexts
Style options:
- Professional: Business-appropriate, trustworthy
- Playful: Fun, light-hearted, approachable
- Inspirational: Motivating, aspirational
- Bold: Confident, assertive, attention-grabbing
- Classic: Timeless, elegant, traditional

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '品牌开发', description: '企业家和营销人员使用口号生成器为新品牌或品牌重塑项目创建标语。正确的口号可以成为品牌身份的核心元素。' },
      { title: '营销活动', description: '广告团队为特定活动创建口号，通过记忆深刻的短语捕捉活动的精髓。' },
      { title: '产品推出', description: '产品团队生成口号来定位新产品，创建突出关键优势和差异化的标语。' },
    ],
    faqs: [
      { question: '什么是好的口号？', answer: '好的口号是简短的（通常在10个词以下）、记忆深刻的、独特的、在情感层面与目标受众产生共鸣的，并清晰传达品牌价值或承诺。' },
      { question: '口号应该有多短？', answer: '大多数有效的口号是3-7个词。较短的更容易记住，但要确保它们仍然传达足够的意义和独特性。' },
      { question: '我可以将口号用于商标吗？', answer: '是的，口号可以注册商标。在发布之前进行商标检索以确保您选择的口号尚未被使用。' },
      { question: '不同的风格选项是什么？', answer: '专业适合B2B或严肃品牌，有趣适合消费者品牌，鼓舞人心适合生活方式品牌，大胆适合颠覆者，经典适合传统/奢侈品牌。' },
      { question: '我应该在口号中包含公司名称吗？', answer: '取决于用途。独立口号更灵活，而包含名称的口号可以增强品牌认知。两者都有效。' },
      { question: '如何测试口号？', answer: '与目标受众分享，检查记忆度（人们是否记住它？），评估与品牌价值的一致性，确保它在不同情境中有效，并验证它不会意外冒犯任何人。' },
      { question: '我应该生成多少个口号？', answer: '生成10-15个以获得良好的选择。然后根据影响力、相关性、独特性和与您整体品牌策略的匹配程度进行筛选。' },
      { question: '好的口号有多重要？', answer: '非常重要——口号经常成为您品牌的代名词。想想"Just Do It"或"Think Different"——它们成为了品牌身份的核心。' },
      { question: '我可以混合生成的口号的元素吗？', answer: '当然可以！将它们用作创意起点。结合不同口号的元素来创建完美捕捉您品牌的版本。' },
      { question: '口号和标语有什么区别？', answer: '这些术语经常互换使用。有些人区分口号（更持久，品牌级别）和标语（更临时，活动特定），但没有严格的规则。' },
    ],
  },

  'product-description-generator': {
    slug: 'product-description-generator',
    name: '产品描述生成器',
    title: '免费AI产品描述生成器 | Analyze AI',
    description: '创建销售产品的引人注目的描述。我们的AI编写突出优势并驱动转化的文案。',
    metaDescription: '为电子商务生成有说服力的产品描述。AI驱动的文案改善销售。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '产品详情',
    inputPlaceholder: '描述您的产品、其功能和目标受众...',
    buttonText: '生成描述',
    maxLength: 2048,
    options: [
      { name: 'length', label: '描述长度', choices: ['短（2-3句）', '中（1段）', '长（2-3段）'], default: '中（1段）', type: 'select' },
      { name: 'tone', label: '语气', choices: ['专业', '休闲', '奢华', '有趣', '技术'], default: '专业', type: 'select' },
    ],
    systemPrompt: `You are an expert e-commerce copywriter.
Create compelling product descriptions that drive sales.
Include:
- Attention-grabbing opening
- Key features translated into benefits
- Sensory or emotional language where appropriate
- Clear value proposition
- Subtle call to action
Match the tone to the product type and target audience.
Focus on what the customer gains, not just what the product has.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '电子商务列表', description: '在线卖家使用产品描述生成器为在线商店、市场和产品目录创建引人注目的列表。' },
      { title: '产品发布', description: '营销团队快速生成新产品的多个描述版本，用于不同的营销渠道和受众。' },
      { title: '产品目录更新', description: '需要更新大量产品描述的零售商使用该工具来保持一致性和质量。' },
    ],
    faqs: [
      { question: '什么是好的产品描述？', answer: '好的产品描述清晰地传达产品的好处（不仅仅是功能），使用感官或情感语言，解决客户问题或愿望，并包含微妙的行动呼吁。' },
      { question: '我应该关注功能还是好处？', answer: '两者都要，但强调好处。功能是产品具有的东西；好处是它们如何改善客户的生活。将功能转化为好处："长电池寿命"变成"两周不用充电"。' },
      { question: '不同的语气选项是什么？', answer: '专业适合B2B产品，休闲适合日常消费品，奢华适合高端商品，有趣适合个性品牌，技术适合详细规格的产品。' },
      { question: '我的描述应该有多长？', answer: '根据产品复杂性和销售平台而定。简单产品可能需要2-3句，复杂或高价产品需要更详细的描述来克服购买犹豫。' },
      { question: '我应该在描述中包含关键词吗？', answer: '是的，自然地。相关关键词有助于SEO和市场搜索可见性，但不要牺牲可读性来堆砌关键词。' },
      { question: '我可以为不同渠道使用生成的描述吗？', answer: '是的，但考虑为不同平台调整。网站可能需要SEO优化，市场有格式指南，社交媒体需要更短的版本。' },
      { question: '描述中应该避免什么？', answer: '避免夸大的声明、没有解释的技术术语、专注于功能而非好处、过长的段落以及缺乏行动呼吁。' },
      { question: '如何使描述独特？', answer: '包含您产品的具体细节、您的品牌声音和故事，以及超越基本信息的差异化元素。' },
      { question: '我应该使用项目符号吗？', answer: '项目符号对于功能列表和规格非常有效。结合引人注目的段落介绍和项目符号列表来获得两全其美的效果。' },
      { question: '我应该多久更新一次产品描述？', answer: '当产品更新、市场定位变化或分析显示转化率较低时更新。定期审核您表现最好的产品描述以获取见解。' },
    ],
  },

  'landing-page-generator': {
    slug: 'landing-page-generator',
    name: '落地页生成器',
    title: '免费AI落地页生成器 | Analyze AI',
    description: '为您的产品或服务创建高转化落地页文案。我们的AI帮助您构建有说服力的页面。',
    metaDescription: '生成驱动转化的落地页文案。AI驱动的有说服力写作。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '产品/服务详情',
    inputPlaceholder: '描述您的产品/服务、目标受众和主要优势...',
    buttonText: '生成落地页文案',
    maxLength: 4096,
    options: [
      { name: 'goal', label: '页面目标', choices: ['潜在客户生成', '产品销售', '注册', '预约咨询', '下载'], default: '潜在客户生成', type: 'select' },
      { name: 'sections', label: '包含的部分', choices: ['基础（标题+CTA）', '标准（+功能+好处）', '完整（+客户评价+FAQ）'], default: '标准（+功能+好处）', type: 'select' },
    ],
    systemPrompt: `You are an expert landing page copywriter.
Create high-converting landing page copy for the described offering.
Structure based on sections selected:
Basic:
- Compelling headline
- Supporting subheadline
- Clear call to action
Standard (adds):
- Feature highlights
- Benefit-focused sections
- Secondary CTA
Complete (adds):
- Social proof / testimonials section
- FAQ section
- Trust indicators
Focus on:
- Clear value proposition
- Addressing customer pain points
- Creating urgency or desire
- Guiding toward conversion action

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '产品发布', description: '企业使用落地页生成器为新产品发布创建有说服力的页面。该工具帮助快速构建有效的信息，吸引注册或预订。' },
      { title: '潜在客户生成', description: '营销团队创建落地页来捕获潜在客户，提供有价值的内容或咨询以换取联系信息。' },
      { title: '销售活动', description: '电子商务企业为促销和销售活动创建专注的落地页，有说服力地突出优惠和紧迫性。' },
    ],
    faqs: [
      { question: '什么是落地页？', answer: '落地页是一个独立的网页，专门为营销或广告活动创建。它专注于单一目标（转化），没有普通网页的干扰。' },
      { question: '有效的落地页关键要素是什么？', answer: '必需元素包括：引人注目的标题、清晰的价值主张、好处说明、社会证明/客户评价、清晰的行动呼吁以及解决异议的内容。' },
      { question: '不同的页面目标是什么？', answer: '潜在客户生成捕获联系信息，产品销售驱动直接购买，注册鼓励账户创建，预约咨询获取服务咨询，下载提供内容以换取信息。' },
      { question: '部分选项有什么不同？', answer: '基础给您核心信息，标准添加功能和好处以说服，完整包含社会证明和FAQ以解决异议并建立信任。' },
      { question: '我的标题应该有多长？', answer: '标题应该简短有力——通常在10个词以下。它应该清晰传达主要好处或价值主张。' },
      { question: '什么是好的行动呼吁（CTA）？', answer: '好的CTA具体说明下一步会发生什么，创造紧迫性或渴望，并清晰显示好处。"开始免费试用"比"提交"更好。' },
      { question: '我应该包含多少客户评价？', answer: '2-4个客户评价通常足够。更重要的是它们的质量和相关性而非数量。包含与目标受众相关的评价。' },
      { question: 'FAQ部分有多重要？', answer: '非常重要——FAQ直接解决异议和疑虑，减少转化摩擦。包含真实客户经常问的问题。' },
      { question: '如何测试落地页效果？', answer: '使用A/B测试不同的标题、CTA和布局。追踪转化率、跳出率和页面停留时间。根据数据持续优化。' },
      { question: '移动优化重要吗？', answer: '极其重要。大量流量来自移动设备。确保您的落地页在所有设备上加载快速且易于使用。' },
    ],
  },

  // ==================== BATCH 3: Tools 21-30 ====================

  'google-ads-copy-generator': {
    slug: 'google-ads-copy-generator',
    name: 'Google广告文案生成器',
    title: '免费AI Google广告文案生成器',
    description: '生成驱动点击和转化的高转化Google广告文案。我们的AI创建为效果优化的标题和描述。',
    metaDescription: '创建驱动点击和转化的Google广告文案。AI驱动的广告文案优化。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '产品/服务和优惠',
    inputPlaceholder: '例如：面向小企业的在线会计软件，30天免费试用',
    buttonText: '生成广告文案',
    maxLength: 2048,
    options: [
      { name: 'tone', label: '广告语气', choices: ['正式/B2B', '休闲/B2C', '紧迫/促销'], default: '正式/B2B', type: 'select' },
      { name: 'keywords', label: '包含关键词', choices: ['是', '否'], default: '是', type: 'radio' },
    ],
    systemPrompt: `You are an expert Google Ads copywriter.
Create high-converting ad copy following Google Ads best practices.
Generate:
- Multiple headline options (30 characters max each)
- Description options (90 characters max each)
- Call to action suggestions
Follow guidelines:
- Include keywords naturally
- Highlight unique value propositions
- Create urgency where appropriate
- Focus on benefits, not just features
- Include clear calls to action
Match tone to target audience and offering.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '搜索广告活动', description: '广告商使用Google广告文案生成器创建引人注目的搜索广告。该工具帮助制作符合Google规格同时最大化点击率的标题和描述。' },
      { title: '广告变体测试', description: '营销人员生成多个广告变体进行A/B测试，确定哪些信息与目标受众产生最强共鸣。' },
      { title: '活动扩展', description: '需要快速扩展广告活动的团队使用该工具快速生成多个广告组的新广告文案。' },
    ],
    faqs: [
      { question: 'Google广告的字符限制是多少？', answer: '标题每个最多30个字符（最多15个标题），描述每个最多90个字符（最多4个描述）。该工具生成符合这些限制的文案。' },
      { question: '为什么关键词很重要？', answer: '在广告文案中包含相关关键词可以提高质量得分，可能降低成本并改善广告位置。' },
      { question: '不同的语气选项有什么作用？', answer: '正式/B2B适合专业服务，休闲/B2C适合消费者产品，紧迫/促销适合销售和限时优惠。' },
      { question: '我应该测试多少个变体？', answer: '从每个广告组3-5个广告变体开始。随着数据积累，扩展表现最好的变体并测试新版本。' },
      { question: '什么是好的广告标题？', answer: '好的标题包含相关关键词，突出明确的好处或优惠，并创造点击的紧迫性或渴望——所有这些都在30个字符内。' },
      { question: '描述应该包含什么？', answer: '描述应该扩展标题，包括额外的好处、社会证明、促销或明确的行动呼吁。' },
      { question: '这个工具用于响应式搜索广告吗？', answer: '是的，该工具生成适合响应式搜索广告的多个标题和描述，允许Google测试不同组合。' },
      { question: '我如何改善质量得分？', answer: '广告相关性、预期点击率和落地页体验都影响质量得分。确保广告文案与关键词和落地页匹配。' },
      { question: '我可以为不同的广告组使用相同的文案吗？', answer: '最好根据每个广告组的特定关键词和受众定制文案。该工具可以帮助快速生成自定义变体。' },
      { question: '该工具是否处理政策合规性？', answer: '该工具遵循一般最佳实践，但始终在发布前在Google Ads界面中检查政策合规性。' },
    ],
  },

  'hook-generator': {
    slug: 'hook-generator',
    name: '钩子生成器',
    title: '免费AI钩子生成器 | Analyze AI',
    description: '为您的内容即时创建抓住注意力的钩子。我们的AI生成吸引读者并提高参与度的引人入胜的开场白。',
    metaDescription: '生成抓住注意力的内容钩子。AI驱动的开场白创建。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '内容主题',
    inputPlaceholder: '例如：一篇关于远程工作者生产力技巧的博客文章',
    buttonText: '生成钩子',
    maxLength: 2048,
    options: [
      { name: 'tone', label: '钩子语气', choices: ['正式', '对话', '大胆/前卫', '鼓舞人心', '分析性'], default: '对话', type: 'select' },
      { name: 'hook_type', label: '钩子类型', choices: ['混合（所有类型）', '问题', '统计/事实', '故事/轶事', '反常理', '承诺/好处', '好奇心缺口'], default: '混合（所有类型）', type: 'select' },
    ],
    systemPrompt: `You are an expert at creating attention-grabbing content hooks.
Generate compelling opening statements that:
- Immediately capture reader attention
- Create curiosity or emotional engagement
- Set up the value of continuing to read
- Match the content type and audience
Hook types to consider:
- Question: Provocative questions that engage curiosity
- Statistic/Fact: Surprising data that shocks or intrigues
- Story/Anecdote: Personal or narrative openings
- Contrarian: Challenges conventional wisdom
- Promise/Benefit: Clear value propositions upfront
- Curiosity Gap: Incomplete information that demands resolution
Provide hooks with context on why each works.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '撰写引人入胜的介绍', description: '作家、记者和内容创作者使用钩子生成器为文章、博客文章和其他书面内容制作吸引人的开场白。通过输入主题或关键想法，工具生成引人注目的钩子，立即吸引读者兴趣并鼓励他们继续阅读。' },
      { title: '营销和广告文案', description: '企业和营销人员利用钩子生成器为营销活动、广告和促销内容创建有说服力的开场白。通过输入产品详情、目标受众信息或营销信息，工具生成有效吸引潜在客户并鼓励行动的抓住注意力的钩子。' },
      { title: '演讲和演示', description: '公众演讲者、演示者和教育工作者在准备演讲或演示时受益于钩子生成器。通过输入主题或主要想法，工具生成从第一刻起就吸引观众的抓住注意力的开场陈述。这有助于与听众建立强烈联系，使演示更具影响力和难忘。' },
    ],
    faqs: [
      { question: '写作中的钩子是什么？', answer: '钩子是设计用于立即吸引读者注意力的开场陈述。有效的钩子创造好奇心，做出大胆陈述，提出引人入胜的问题，或呈现令人惊讶的信息，迫使观众继续阅读、观看或聆听。' },
      { question: '这个工具可以生成哪些类型的钩子？', answer: '工具生成各种钩子类型，包括问题钩子、统计/事实钩子、故事/轶事钩子、反常理陈述钩子、承诺/好处钩子和好奇心缺口钩子。每种类型服务于不同的目的和受众。' },
      { question: '如何获得更好的钩子建议？', answer: '提供关于您的主题、目标受众和内容目的的具体背景。不要说"营销技巧"，而是尝试"针对千禧一代的电子商务企业的电子邮件营销策略"。更多背景帮助生成更相关、更有影响力的钩子。' },
      { question: '我可以将这些钩子用于视频内容吗？', answer: '绝对可以。钩子对于视频脚本、YouTube介绍、TikTok开场以及任何需要快速吸引注意力的视频内容都是必不可少的。相同的原则适用——只需为口语表达调整语言。' },
      { question: '钩子应该有多长？', answer: '大多数有效的钩子是一到三句话。它们应该足够长以创造兴趣，但足够短以保持影响力。对于社交媒体或视频，较短的钩子（15个字以下）通常表现更好。' },
      { question: '钩子与点击诱饵有什么区别？', answer: '好的钩子创造真正的好奇心并实现其承诺，而点击诱饵操纵情感并经常让人失望。有效的钩子设定内容能够实现的适当期望，建立信任而不是侵蚀它。' },
      { question: '我的钩子应该与我的品牌声音匹配吗？', answer: '是的。您的钩子应该与您的整体品牌语气和受众期望保持一致。正式的商业受众期望与休闲生活方式博客受众不同的语言。使用语气设置来匹配您的品牌。' },
      { question: '我可以在不同平台使用相同的钩子吗？', answer: '您可能需要为不同平台调整钩子。适用于长篇博客文章的钩子可能需要更短、更有力以适应社交媒体。考虑平台特定的惯例和受众期望。' },
      { question: '如何测试哪个钩子效果最好？', answer: 'A/B测试是最可靠的方法。在电子邮件主题行、社交帖子或广告文案中使用不同的钩子，并追踪打开率、点击率和参与度指标来识别表现最好的。' },
      { question: '钩子之后应该是什么？', answer: '钩子应该平滑过渡到您的主要内容。在它之后提供实现您创造的好奇心的背景，提供支持信息，或开始实现钩子所做的承诺。' },
    ],
  },

  'resignation-letter-generator': {
    slug: 'resignation-letter-generator',
    name: '辞职信生成器',
    title: '免费AI辞职信生成器 | Analyze AI',
    description: '几分钟内写出专业的辞职信。我们的AI创建得体、适当的信函，保护关系并保护您的声誉。',
    metaDescription: '几分钟内写出专业的辞职信。AI驱动的信函撰写。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的情况',
    inputPlaceholder: '例如：科技公司的市场经理，因新机会离职，在这里工作了3年',
    buttonText: '生成信函',
    maxLength: 2048,
    options: [
      { name: 'tone', label: '信函语气', choices: ['正式', '温暖/个人', '简短/最小'], default: '正式', type: 'select' },
      { name: 'notice_period', label: '通知期', choices: ['两周', '一个月', '立即', '自定义'], default: '两周', type: 'select' },
    ],
    systemPrompt: `You are an expert at professional communication, specifically resignation letters.
Create a professional resignation letter that:
- Clearly states the intention to resign
- Includes the last working day based on notice period
- Maintains positive relationships
- Offers appropriate gratitude
- Provides transition assistance offer if appropriate
Tone options:
- Formal: Traditional business letter format
- Warm/Personal: More personable while professional
- Brief/Minimal: Concise, essential information only
Never include negative comments about the company or colleagues.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '标准辞职准备', description: '离职员工使用辞职信生成器创建专业的离职沟通。该工具帮助找到正确的措辞和语气，同时保持积极的关系——这对于推荐和专业声誉很重要。' },
      { title: '处理困难的离职', description: '在具有挑战性的工作环境中离职的员工使用生成器在情绪高涨时保持专业性。当您因为管理不善、文化毒性或不公平对待而离开时，写一封中立的辞职信是困难的。该工具帮助创建适当的信函，专业地记录离职，同时避免可能在推荐或法律情况下产生负面影响的语言。' },
      { title: '职业转型文档', description: '进行重大职业转型的专业人士使用生成器确保其离职得到妥善处理。当转移到竞争对手、更换行业或离职创业时，辞职信成为永久记录的一部分。该工具生成适合情况的信函，同时保护未来的专业利益。' },
    ],
    faqs: [
      { question: '辞职信应该包括什么？', answer: '必需元素：明确的辞职声明、您的职位/头衔、最后工作日（通常提前两周）。推荐元素：简短的感谢声明、提供过渡协助、专业的结束语。可选：离职原因（如果包含请保持积极）、具体的感谢点。永远不要包括：抱怨、批评、过多关于新机会的细节、情感内容。' },
      { question: '我应该给多少通知？', answer: '在大多数美国行业中，标准是两周。检查您的雇佣合同——一些角色需要更多通知（高管、专业职位）。一些国家法律要求更长的通知。如果有疑问，至少给两周，除非您的合同另有规定。对于复杂角色给予慷慨的通知（3-4周）显示专业性。' },
      { question: '我应该解释为什么离开吗？', answer: '您没有义务解释。如果您包含原因，请保持积极和简短："追求新机会"、"因家庭原因搬迁"、"回学校读书"。即使是真实的，也永远不要包括负面原因——这封信成为永久文件。如果您需要讨论问题，请通过适当的HR渠道单独进行，而不是在辞职信中。' },
      { question: '我可以通过电子邮件辞职还是需要正式信函？', answer: '检查您公司的协议。许多现代工作场所接受电子邮件辞职，但在传统行业中正式信函仍然是标准。如有疑问，准备一封正式信函，但以您的工作场所使用的任何方式递送。对于远程员工，带有PDF附件的电子邮件通常有效。始终保留副本作为记录。' },
      { question: '当我不开心时如何专业辞职？', answer: '无论您的感受如何，保持专业性。您的辞职信是永久文件，可能影响推荐。保持信函中立或积极——专注于向前看，而不是向后看。如果您有不满，请通过适当的HR渠道单独解决，而不是在辞职信中。您未来的自己会感谢您采取了高尚的态度。' },
      { question: '我应该提出帮助过渡吗？', answer: '通常是的——提供过渡支持是保持良好关系的专业礼貌。标准提议："我致力于确保平稳过渡，并乐意协助培训我的替代者。"无论您提供什么，都要跟进。如果您在困难的情况下离开，保持提议简短但不要完全跳过。' },
      { question: '如果我与经理关系困难怎么办？', answer: '无论个人动态如何，专业地处理信函。您可以将其发给HR或更高级别的经理（如果更合适），但不要使用信函来传达不满。保持信函真实和专业。通过其他渠道处理困难的动态，或简单地向前走而不解决它们。' },
      { question: '我应该提及我的新雇主吗？', answer: '通常不需要。您的辞职信不需要包括您要去哪里。如果亲自被问到，您可以分享（如果您愿意），但没有义务。避免提及您的新雇主可以将焦点放在专业离职上，并在您转移到竞争对手时防止潜在问题。' },
      { question: '语气应该有多正式？', answer: '匹配您的工作场所文化，同时偏向专业。传统企业环境需要正式信函。初创公司或休闲工作场所可能接受更温暖、更个人的语气。如有疑问，选择更正式——没有人会因为辞职信太专业而受到伤害。将休闲沟通留给面对面的对话。' },
      { question: '提交辞职后会发生什么？', answer: '预期：经理或HR的确认、关于过渡时间表的讨论、可能的离职面谈安排、最终薪水和福利的安排。为各种反应做好准备——一些经理会认真对待辞职。无论反应如何，保持专业。专注于做好剩余时间的工作，并为继任者留下完整的文档。' },
    ],
  },

  'social-media-bio-generator': {
    slug: 'social-media-bio-generator',
    name: '社交媒体简介生成器',
    title: '免费AI社交媒体简介生成器 | Analyze AI',
    description: '即时为您的社交媒体资料生成完美的简介。我们的AI创建引人入胜、专业的简介，捕捉您的个人品牌并吸引关注者。',
    metaDescription: '为社交媒体资料生成引人入胜的简介。AI驱动的个人品牌。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您自己或您的品牌',
    inputPlaceholder: '例如：帮助小企业在线增长的数字营销顾问，总部在纽约',
    buttonText: '生成简介',
    maxLength: 2048,
    options: [
      { name: 'platform', label: '平台', choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', '通用（所有平台）'], default: '通用（所有平台）', type: 'select' },
      { name: 'tone', label: '简介语气', choices: ['专业', '友好', '大胆', '机智', '极简'], default: '专业', type: 'select' },
    ],
    systemPrompt: `You are an expert at crafting compelling social media bios.
Create bios that:
- Capture attention in limited characters
- Clearly communicate who you are/what you do
- Include relevant keywords for discoverability
- Match the platform's conventions
- Reflect the desired tone and personality
Platform-specific considerations:
- Instagram: 150 characters, emojis welcome, link reference
- Twitter/X: 160 characters, hashtags optional, wit appreciated
- LinkedIn: Professional focus, credentials, value proposition
- TikTok: Casual, personality-driven, trend-aware
Provide multiple options when appropriate.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '个人品牌建设', description: '专业人士使用社交媒体简介生成器创建传达其专业知识和价值的简介。良好的简介帮助建立可信度并吸引正确的联系和机会。' },
      { title: '商业资料优化', description: '企业使用该工具为其社交媒体存在创建引人注目的简介，确保在各平台上的信息传递一致，同时适应每个平台的独特格式。' },
      { title: '影响者品牌建设', description: '内容创作者和影响者使用生成器制作反映其利基、个性和价值主张的简介，帮助吸引正确的受众和合作机会。' },
    ],
    faqs: [
      { question: '什么是好的社交媒体简介？', answer: '好的简介清晰传达您是谁或做什么，在有限字符内吸引注意力，包含可发现性的相关关键词，反映您的个性或品牌声音，并包括行动呼吁或价值主张。' },
      { question: '不同的平台有不同的字符限制吗？', answer: '是的。Instagram允许150个字符，Twitter/X允许160个字符，LinkedIn有更多灵活性，TikTok有80个字符。该工具根据您选择的平台优化。' },
      { question: '我应该在简介中使用表情符号吗？', answer: '取决于平台和品牌。Instagram和TikTok欢迎表情符号，LinkedIn更保守，Twitter/X可以两种方式。表情符号增加视觉兴趣，但应该增强而不是取代有意义的内容。' },
      { question: '简介中应该包含关键词吗？', answer: '是的，相关关键词帮助可发现性。在您的利基内自然地包含与您身份或工作相关的术语。不要牺牲可读性来堆砌关键词。' },
      { question: '我应该多久更新一次简介？', answer: '当您的角色、专注或品牌显著变化时更新。定期审查确保信息保持准确和相关。季度审查对大多数人来说是好的实践。' },
      { question: '我可以在所有平台使用相同的简介吗？', answer: '您可以保持核心信息一致，但为每个平台的格式、字符限制和受众期望进行调整。该工具帮助创建平台特定的变体。' },
      { question: '什么使简介"专业"？', answer: '专业的简介清晰陈述您的角色或专业知识，包括相关资质或成就，使用适当的语言作为您的行业，避免过度休闲的语言或过多的表情符号。' },
      { question: '简介中应该包含行动呼吁吗？', answer: '是的，如果合适的话。对于商业或内容创作者资料，指导访问者下一步做什么很有帮助："点击链接开始"或"关注获取每日提示"。' },
      { question: '我如何在简介中脱颖而出？', answer: '在有限空间内具体而独特。不要说"营销人员"，而是说"帮助SaaS初创公司的增长营销人员"。显示个性，在适当时使用数字（"服务了100多个客户"），并清楚传达价值。' },
      { question: '如果我有多个角色或业务怎么办？', answer: '专注于主要角色或最相关于该平台受众的角色。您可以简要提及次要角色，但不要让简介过载。考虑为非常不同的角色使用单独的资料。' },
    ],
  },

  'instagram-bio-generator': {
    slug: 'instagram-bio-generator',
    name: 'Instagram简介生成器',
    title: '免费AI Instagram简介生成器',
    description: '创建脱颖而出的完美Instagram简介。我们的AI帮助您在150个字符内制作引人入胜、吸引粉丝的简介。',
    metaDescription: '生成吸引粉丝的引人入胜的Instagram简介。AI驱动的简介创建。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您自己或您的品牌',
    inputPlaceholder: '例如：专门从事风景和城市景观的旅行摄影师',
    buttonText: '生成简介',
    maxLength: 1024,
    options: [
      { name: 'style', label: '简介风格', choices: ['专业', '创意', '极简', '有趣', '鼓舞人心'], default: '创意', type: 'select' },
      { name: 'include_cta', label: '包含行动呼吁', choices: ['是', '否'], default: '是', type: 'radio' },
    ],
    systemPrompt: `You are an Instagram bio optimization expert.
Create compelling Instagram bios that:
- Fit within 150 characters
- Capture attention and personality
- Include strategic emoji use
- Communicate value or identity clearly
- Include call-to-action if requested
Style options:
- Professional: Clean, credible, business-appropriate
- Creative: Artistic, unique, expressive
- Minimalist: Simple, clean, essential info only
- Fun: Playful, energetic, personality-forward
- Inspirational: Motivating, uplifting, purpose-driven
Consider Instagram's visual, mobile-first nature.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '个人品牌建设', description: '个人使用Instagram简介生成器创建捕捉其个性和目的的引人入胜的简介。一个精心制作的简介帮助吸引正确的粉丝并建立个人品牌。' },
      { title: '商业资料优化', description: '品牌和企业使用该工具创建清晰传达其价值主张并鼓励轮廓访问者采取行动的简介——无论是关注、购物还是点击链接。' },
      { title: '创作者成长', description: '内容创作者和影响者使用生成器制作脱颖而出、清晰传达其利基并帮助吸引相关粉丝和合作机会的简介。' },
    ],
    faqs: [
      { question: 'Instagram简介的最佳长度是多少？', answer: 'Instagram限制为150个字符。最好使用大部分可用空间来传达您的身份和价值，但不要牺牲清晰度来填充限制。' },
      { question: '我应该在简介中使用表情符号吗？', answer: '表情符号在Instagram上效果很好——它们增加视觉兴趣、个性，并帮助分隔信息。战略性地使用它们来增强而不是取代文字。1-4个表情符号通常效果最好。' },
      { question: '什么是好的Instagram简介行动呼吁？', answer: '常见的CTA包括"点击查看最新文章"、"发消息合作"或"购买收藏"。与您想要轮廓访问者采取的主要行动匹配。' },
      { question: '我应该在简介中包含我的位置吗？', answer: '如果位置与您的品牌相关（本地业务、旅行博主），是的。对于在线业务或与地点无关的创作者，空间可能更好用于其他信息。' },
      { question: '简介如何帮助增长？', answer: '您的简介是第一印象。清晰、引人入胜的简介帮助访问者快速了解他们是否想关注您。它影响关注率和整体轮廓吸引力。' },
      { question: '什么使简介"创意"？', answer: '创意简介使用独特的措辞、意外的组合或巧妙的格式来脱颖而出。它们展示个性，同时仍然传达您是谁或做什么。' },
      { question: '我应该多久更改一次简介？', answer: '当您的专注变化、您有新的促销或季节性更新时更新。没有需要的话不要过于频繁更改——一致性帮助品牌认知。' },
      { question: '我可以在简介中使用标签吗？', answer: '您可以，但它们不可点击，空间有限。只有在真正与您身份相关的品牌标签才值得包含。' },
      { question: '极简风格适合谁？', answer: '极简简介适合视觉优先的账户，让工作说话，或与简洁对齐的品牌。它们干净、优雅，专注于必需品。' },
      { question: '如何让我的简介比其他人更好？', answer: '具体而不是通用。使用主动、描述性的语言。包含使您与众不同的独特元素。测试不同版本看什么共鸣。' },
    ],
  },

  'instagram-caption-generator': {
    slug: 'instagram-caption-generator',
    name: 'Instagram标题生成器',
    title: '免费AI Instagram标题生成器',
    description: '即时创建阻止滚动的Instagram标题。我们的AI为Reels、轮播和动态帖子生成引人入胜的标题，提升点赞、评论和保存。',
    metaDescription: '生成驱动参与的Instagram标题。AI驱动的标题创建。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的帖子或图片',
    inputPlaceholder: '例如：包含5个更好睡眠习惯技巧的轮播帖子',
    buttonText: '生成标题',
    maxLength: 2048,
    options: [
      { name: 'content_type', label: '内容类型', choices: ['动态帖子', 'Reels', '轮播', '快拍'], default: '动态帖子', type: 'select' },
      { name: 'tone', label: '标题语气', choices: ['真实', '活泼', '专业', '潮流', '鼓舞人心'], default: '真实', type: 'select' },
    ],
    systemPrompt: `You are an Instagram content expert.
Create engaging captions optimized for Instagram.
Consider:
- First line is crucial (visible before "more")
- Content type (Reels need shorter captions)
- Include engagement prompts (questions, CTAs)
- Strategic emoji placement
- Hashtag considerations
Tone options affect language and approach.
Make captions that encourage saves, shares, and comments.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '高效内容创作', description: '内容创作者和社交媒体经理使用Instagram标题生成器简化发布工作流程。通过提供图片描述或内容主题，工具快速生成匹配Instagram最佳实践的引人入胜标题，节省写作时间的同时保持质量。' },
      { title: '受众参与和互动', description: '用户利用标题生成器创建促进有意义参与的标题。通过融入行动呼吁短语、发人深省的问题和互动元素，生成的标题鼓励粉丝点赞、评论和分享帖子，建立更强的社区联系。' },
      { title: '品牌推广和故事讲述', description: '品牌和企业使用标题生成器制作与品牌身份一致并传达关键信息的引人入胜叙事。通过输入品牌价值、活动详情或产品功能，工具生成展示个性、讲述故事并加强品牌在Instagram上存在的标题。' },
    ],
    faqs: [
      { question: 'Instagram标题应该有多长？', answer: '长度取决于内容类型。Reels通常使用短标题（150字符以下）效果好，而教育性轮播可以使用更长的标题（500-2200字符）。测试什么对您的受众有效。' },
      { question: '标题的第一行应该写什么？', answer: '第一行至关重要，因为用户点击"更多"前只能看到约125个字符。使用创造好奇心的钩子、陈述大胆观点、提出问题或承诺价值来鼓励人们阅读完整标题。' },
      { question: '如何为Reels与动态帖子写标题？', answer: 'Reels标题应该更短、更有力，并引用视频内容。它们可以包括趋势标签和音频提及。动态帖子标题可以更长，更以故事驱动，因为用户花更多时间在静态图片上。' },
      { question: '标签应该放在标题还是评论中？', answer: '两种方法都有效。标题中的标签保持一切在一起，而评论中的标签保持标题更干净。Instagram的算法对两者处理类似。测试什么感觉适合您的品牌审美。' },
      { question: '如何让更多人评论我的帖子？', answer: '提出具体问题（不只是"想法？"），创造"这个或那个"辩论，分享意见并邀请不同意见，使用填空提示，或向受众寻求建议和推荐。使评论变得容易和有价值。' },
      { question: '如何写鼓励保存的标题？', answer: '创造有价值的、值得参考的内容——技巧、教程、清单、引用或人们想要回来查看的信息。使用"保存这个以后用"提示并设计专门用于保存的内容。' },
      { question: 'Instagram标题中应该使用表情符号吗？', answer: '是的，表情符号增加Instagram上的参与度。使用它们增加个性、分隔文本、引起对CTA的注意或替换词语。数量取决于您的品牌声音——休闲品牌最少1-3个，更多。' },
      { question: '如何为轮播帖子写标题？', answer: '用钩子介绍主题，提到这是一个轮播（"滑动看..."或"这个帖子有5个技巧"），预告里面的价值，并以保存CTA结束，因为轮播帖子设计用于被保存和参考。' },
      { question: 'Instagram标题的最佳行动呼吁是什么？', answer: '匹配CTA与您的目标：点击用"链接在简介"，有价值内容用"保存这个"，增加覆盖用"标记某人..."，增加参与用"如果你同意就评论[表情符号]"，增加喜欢用"如果你同意就双击"。' },
      { question: '如何让标题与图片匹配？', answer: '标题应该补充而不是重复图片展示的内容。添加图片无法传达的背景，讲述照片背后的故事，分享您的想法或感受，或提供与视觉相关的有用信息。' },
    ],
  },

  'instagram-hashtag-generator': {
    slug: 'instagram-hashtag-generator',
    name: 'Instagram标签生成器',
    title: '免费AI Instagram标签生成器',
    description: '生成完美的Instagram标签来提升您的覆盖范围和参与度。我们的AI创建根据您的内容和利基定制的战略标签集。',
    metaDescription: '为您的帖子生成战略性Instagram标签。AI驱动的标签优化。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的帖子或利基',
    inputPlaceholder: '例如：来自巴厘岛的旅行摄影，展示海滩和寺庙',
    buttonText: '生成标签',
    maxLength: 1024,
    options: [
      { name: 'hashtag_count', label: '标签数量', choices: ['5个标签', '10个标签', '15个标签', '20个标签', '30个标签'], default: '10个标签', type: 'select' },
      { name: 'content_type', label: '内容类型', choices: ['动态帖子', 'Reels', '轮播', '快拍'], default: '动态帖子', type: 'select' },
    ],
    systemPrompt: `You are an Instagram hashtag strategy expert.
Generate strategic hashtag sets that:
- Mix popular (broad reach) with niche (targeted) hashtags
- Are relevant to the content and audience
- Consider content type (Reels, carousels, etc.)
- Avoid banned or overused hashtags
- Include both English and localized hashtags if relevant
Provide:
- Categorized hashtags (broad, niche, community)
- Copy-paste ready format
- Strategic reasoning

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '内容可发现性', description: '创作者使用Instagram标签生成器改善其帖子被感兴趣用户发现的机会。战略性标签帮助内容出现在相关搜索和探索页面。' },
      { title: '利基社区建设', description: '账户使用目标标签与其利基内的社区建立联系，在志同道合的用户群体中建立存在感。' },
      { title: '增长策略', description: '寻求增加粉丝的账户使用优化的标签策略来提高新用户对潜在关注者的可见性。' },
    ],
    faqs: [
      { question: '我应该使用多少个标签？', answer: 'Instagram每帖允许最多30个。最佳范围是5-15个相关标签。质量和相关性比数量更重要。太多标签可能显得垃圾邮件。' },
      { question: '什么使标签有效？', answer: '有效的标签与您的内容相关、被您的目标受众使用、具有可管理的竞争（不是太宽泛或太窄）、并帮助为发现分类您的内容。' },
      { question: '我应该使用热门还是利基标签？', answer: '两者都用。热门标签（100万以上帖子）提供广泛可见性但竞争激烈。利基标签（1万-10万帖子）提供较低竞争和更有针对性的覆盖。平衡两者以获得最佳策略。' },
      { question: '标签可以损害我的参与度吗？', answer: '是的，使用太多标签、不相关的标签或被禁/影子禁止的标签可能损害参与度。坚持相关标签并定期检查您的标签是否受限。' },
      { question: '我应该在每个帖子上使用相同的标签吗？', answer: '不应该。重复使用相同的标签集可能对算法显得垃圾邮件。创建几个标签集并轮换它们。包含2-3个一致的品牌标签加上不同的相关标签。' },
      { question: '标签应该放在帖子的哪里？', answer: 'Instagram：在标题或第一条评论中（两者都有效）。Twitter：自然地整合在文本中。LinkedIn：在帖子末尾。TikTok：在标题中。位置通常是审美偏好。' },
      { question: '如何创建品牌标签？', answer: '创建一个独特的、易记的标签用于您的品牌或活动。保持简短、易于拼写，并检查它是否尚未被使用。始终如一地推广它并鼓励粉丝使用它。' },
      { question: '什么是影子禁止标签？', answer: '一些标签由于不当使用被平台限制。使用它们可能限制您内容的可见性。定期检查您的标签在搜索时是否显示内容。' },
      { question: '我应该多久更新标签策略？', answer: '每月审查和更新您的标签策略。趋势标签变化，一些变得过度使用，新的相关标签出现。保持策略新鲜并响应平台变化。' },
      { question: '这个工具对其他平台有效吗？', answer: '虽然针对Instagram优化，但生成的标签也可用于TikTok或Twitter，进行适当调整。每个平台有不同的标签文化和最佳实践。' },
    ],
  },

  'social-media-hashtag-generator': {
    slug: 'social-media-hashtag-generator',
    name: '社交媒体标签生成器',
    title: '免费AI社交媒体标签生成器 | Analyze AI',
    description: '生成提升覆盖范围和参与度的有效标签。我们的AI为Instagram、TikTok、Twitter等创建战略标签集。',
    metaDescription: '为所有平台生成战略性社交媒体标签。AI驱动的标签优化。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的内容或利基',
    inputPlaceholder: '例如：为忙碌专业人士准备的素食餐食准备食谱',
    buttonText: '生成标签',
    maxLength: 2048,
    options: [
      { name: 'platform', label: '平台', choices: ['Instagram', 'TikTok', 'Twitter/X', 'LinkedIn', '通用'], default: 'Instagram', type: 'select' },
      { name: 'hashtag_count', label: '标签数量', choices: ['5个标签', '10个标签', '15个标签', '20个标签', '30个标签'], default: '10个标签', type: 'select' },
    ],
    systemPrompt: `You are a social media hashtag strategist.
Generate effective hashtags for the specified platform.
Consider:
- Platform-specific best practices
- Mix of popular and niche hashtags
- Relevance to content and audience
- Current trends in the niche
- Hashtag size (large/medium/small reach)
Platform guidelines:
- Instagram: 5-10 optimal, max 30
- Twitter/X: 1-2 only, more hurts engagement
- LinkedIn: 3-5, professional focus
- TikTok: 3-5, include trending
Provide strategic reasoning with hashtags.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '内容营销活动', description: '社交媒体营销人员使用标签生成器优化营销活动的标签策略。通过输入相关关键词或主题，工具生成与活动相关的趋势和热门标签，最大化内容可见性并帮助触及更广泛的受众。' },
      { title: '增强社交媒体SEO', description: '企业和个人使用标签生成器改善社交媒体可发现性。通过生成与产品、服务或内容相关的优化标签，用户增加其帖子被对类似主题感兴趣的用户发现的机会，扩大在线存在和覆盖范围。' },
      { title: '影响者覆盖最大化', description: '影响者使用标签生成器发现其内容利基内的相关、趋势标签。工具帮助识别吸引新粉丝同时促进对其内容真正感兴趣的受众更深入参与的最佳标签组合。' },
    ],
    faqs: [
      { question: '我应该使用多少个标签？', answer: '平台建议：Instagram 5-10（最多30），Twitter 1-2，LinkedIn 3-5，TikTok 3-5。质量和相关性比数量更重要。太多标签可能显得垃圾邮件。' },
      { question: '什么使标签有效？', answer: '有效标签与您的内容相关、被您的目标受众使用、具有可管理的竞争（不是太宽泛或太窄）、并帮助为发现分类您的内容。' },
      { question: '我应该使用热门还是利基标签？', answer: '两者都用。热门标签（100万以上帖子）提供广泛可见性但竞争激烈。利基标签（1万-10万帖子）提供较低竞争和更有针对性的覆盖。平衡两者以获得最佳策略。' },
      { question: '如何找到趋势标签？', answer: '检查平台探索/趋势部分，使用社交媒体分析工具，关注行业账户，监控竞争对手帖子，并关注与您利基相关的时事和文化时刻。' },
      { question: '标签可以损害我的参与度吗？', answer: '是的，使用太多标签、不相关的标签或被禁/影子禁止的标签可能损害参与度。坚持相关标签并定期检查您的标签是否受限。' },
      { question: '我应该在每个帖子上使用相同的标签吗？', answer: '不应该。重复使用相同的标签集可能对算法显得垃圾邮件。创建几个标签集并轮换它们。包含2-3个一致的品牌标签加上不同的相关标签。' },
      { question: '标签应该放在帖子的哪里？', answer: 'Instagram：在标题或第一条评论中（两者都有效）。Twitter：自然地整合在文本中。LinkedIn：在帖子末尾。TikTok：在标题中。位置通常是审美偏好。' },
      { question: '如何创建品牌标签？', answer: '创建一个独特的、易记的标签用于您的品牌或活动。保持简短、易于拼写，并检查它是否尚未被使用。始终如一地推广它并鼓励粉丝使用它。' },
      { question: '什么是影子禁止标签？', answer: '一些标签由于不当使用被平台限制。使用它们可能限制您内容的可见性。定期检查您的标签在搜索时是否显示内容。' },
      { question: '我应该多久更新标签策略？', answer: '每月审查和更新您的标签策略。趋势标签变化，一些变得过度使用，新的相关标签出现。保持策略新鲜并响应平台变化。' },
    ],
  },

  'tiktok-hashtag-generator': {
    slug: 'tiktok-hashtag-generator',
    name: 'TikTok标签生成器',
    title: '免费AI TikTok标签生成器',
    description: '生成帮助您的TikTok视频走红的完美标签。我们的AI创建针对TikTok可发现性和增长优化的战略标签集。',
    metaDescription: '为您的视频生成走红的TikTok标签。AI驱动的TikTok标签优化。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的TikTok视频',
    inputPlaceholder: '例如：10秒钟健康早餐食谱教程',
    buttonText: '生成标签',
    maxLength: 1024,
    options: [
      { name: 'hashtag_count', label: '标签数量', choices: ['3个标签', '5个标签', '8个标签', '10个标签'], default: '5个标签', type: 'select' },
      { name: 'content_style', label: '内容风格', choices: ['趋势/病毒', '教育', '娱乐', '生活方式', '商业'], default: '趋势/病毒', type: 'select' },
    ],
    systemPrompt: `You are a TikTok hashtag strategy expert.
Generate hashtags optimized for TikTok's algorithm and discovery.
Consider:
- TikTok-specific trends and challenges
- Mix of broad and niche hashtags
- Current trending hashtags in the niche
- Sound/audio-related hashtags if applicable
- FYP optimization strategies
TikTok best practices:
- 3-5 hashtags is optimal
- Include #fyp or #foryou strategically
- Balance trending with niche tags
- Consider challenge-specific hashtags
Provide both hashtag list and strategic reasoning.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '视频可发现性', description: '创作者使用TikTok标签生成器增加其视频出现在相关搜索和For You页面的机会。战略标签帮助TikTok算法正确分类和分发内容。' },
      { title: '趋势参与', description: '用户利用该工具找到与当前趋势、挑战和病毒时刻相关的标签。及时的标签帮助内容在趋势热门时获得可见性。' },
      { title: '利基社区增长', description: '创作者使用目标标签与其利基内的社区建立联系，在分享兴趣和内容偏好的志同道合用户群体中建立存在感。' },
    ],
    faqs: [
      { question: 'TikTok上应该使用多少个标签？', answer: 'TikTok的最佳范围是3-5个标签。与Instagram不同，更多标签不一定更好。专注于相关性和趋势对齐而不是数量。' },
      { question: '我应该总是使用#fyp或#foryou吗？', answer: '这些标签非常热门但竞争激烈。可以战略性地包含它们，但不要仅依赖它们。将它们与利基特定标签混合以获得更好的目标。' },
      { question: '标签如何帮助TikTok算法？', answer: '标签帮助TikTok理解您的内容和目标受众。相关标签改善您的视频被对该主题感兴趣的用户展示的机会。' },
      { question: '挑战标签与常规标签有什么不同？', answer: '挑战标签（如#DanceChallenge）与特定病毒趋势相关。使用这些可以帮助在挑战活跃期间内容被发现。' },
      { question: '我应该使用趋势还是常青标签？', answer: '两者都用。趋势标签在热门时提供即时可见性。常青标签提供一致的发现机会。混合两者以获得平衡的策略。' },
      { question: '如何找到TikTok上的趋势标签？', answer: '检查TikTok的发现页面，关注您利基中的热门创作者，使用TikTok趋势分析工具，并关注平台当前流行的内容。' },
      { question: '声音相关的标签有帮助吗？', answer: '是的，如果您使用趋势声音或音乐，包含相关标签可以帮助视频与该声音趋势一起被发现。' },
      { question: '标签可以帮助我走红吗？', answer: '标签是发现策略的一部分，但病毒性取决于内容质量、时机和参与度。好的标签帮助正确的人发现您的内容，但内容必须能够吸引他们。' },
      { question: '我应该为每个视频更换标签吗？', answer: '根据每个视频的特定内容调整标签。虽然一些核心利基标签可以保持一致，但根据确切主题和任何相关趋势进行调整。' },
      { question: '利基标签对较小账户更好吗？', answer: '是的，利基标签帮助较小账户被目标受众发现而不是在广泛、竞争激烈的标签中丢失。随着增长，逐渐扩展以包括更广泛的标签。' },
    ],
  },

  'social-media-username-generator': {
    slug: 'social-media-username-generator',
    name: '社交媒体用户名生成器',
    title: '免费AI社交媒体用户名生成器 | Analyze AI',
    description: '创建在每个平台上脱颖而出的独特、易记的用户名。我们的AI帮助您找到反映您品牌的完美句柄。',
    metaDescription: '为社交媒体资料生成独特的用户名。AI驱动的用户名建议。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的品牌或个性',
    inputPlaceholder: '例如：专门从事小型犬的宠物摄影师',
    buttonText: '生成用户名',
    maxLength: 1024,
    options: [
      { name: 'style', label: '用户名风格', choices: ['专业', '创意', '有趣', '极简', '品牌'], default: '专业', type: 'select' },
      { name: 'count', label: '用户名数量', choices: ['5个用户名', '10个用户名', '15个用户名'], default: '10个用户名', type: 'select' },
    ],
    systemPrompt: `You are an expert at creating memorable social media usernames.
Generate usernames that:
- Are unique and available-looking
- Easy to remember and spell
- Reflect the user's brand or personality
- Work across multiple platforms
- Are appropriate length (15 characters or less preferred)
Style options:
- Professional: Clean, business-appropriate
- Creative: Artistic, unique expressions
- Playful: Fun, energetic, personality-forward
- Minimalist: Simple, clean, memorable
- Branded: Company/product focused
Include variations like underscores or numbers where helpful.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '个人品牌创建', description: '个人使用用户名生成器为其社交媒体存在创建一致的身份。良好的用户名帮助建立可识别的个人品牌跨平台。' },
      { title: '商业账户设置', description: '企业使用该工具找到可用的、品牌一致的用户名用于社交媒体存在，确保在所有平台上的一致性。' },
      { title: '内容创作者启动', description: '新内容创作者使用生成器找到反映其利基和个性的用户名，帮助从一开始就建立记忆深刻的存在。' },
    ],
    faqs: [
      { question: '什么是好的社交媒体用户名？', answer: '好的用户名易于记忆、拼写和发音。它应该反映您的品牌或个性，短到足以跨平台工作，并且足够独特以至于可用。' },
      { question: '用户名应该有多长？', answer: '更短更好——15个字符或更少是理想的。较长的用户名更难记住，可能在某些平台上被截断。' },
      { question: '我应该在所有平台使用相同的用户名吗？', answer: '是的，如果可能的话。一致的用户名帮助人们跨平台找到您。该工具生成跨平台工作的用户名。' },
      { question: '如果我的首选用户名被占用怎么办？', answer: '尝试变体：添加下划线、数字或前缀/后缀（如"the"、"official"或您的位置）。该工具生成多个选项以增加找到可用的机会。' },
      { question: '我应该在用户名中使用我的真名吗？', answer: '取决于您的目标。真名适合个人品牌和专业使用。创意用户名适合内容创作者或想要匿名的人。' },
      { question: '不同的风格选项有什么作用？', answer: '专业适合商业/职业使用，创意适合艺术家和独特品牌，有趣适合个性驱动的账户，极简适合干净的外观，品牌专注于公司/产品名称。' },
      { question: '用户名中使用数字可以吗？', answer: '如果自然地融入或增加意义可以（如"studio52"或出生年份）。避免只是添加随机数字来使用户名可用——这可能看起来不专业。' },
      { question: '我可以以后更改用户名吗？', answer: '是的，大多数平台允许用户名更改，但频繁更改可能混淆粉丝。从您可以长期坚持的东西开始。' },
      { question: '如何检查用户名可用性？', answer: '在您想使用的每个平台上搜索。一些工具同时检查多个平台。该生成器帮助创建不太可能被占用的独特选项。' },
      { question: '品牌或公司用户名有什么特别之处？', answer: '品牌用户名应该与您的公司名称或产品匹配，跨平台一致，可能可以商标注册，并清晰传达您的业务身份。' },
    ],
  },

  // ==================== BATCH 4: Tools 31-39 ====================

  'instagram-name-generator': {
    slug: 'instagram-name-generator',
    name: 'Instagram名称生成器',
    title: '免费AI Instagram名称生成器',
    description: '创建在Instagram上脱颖而出的独特、难忘的用户名。我们的AI帮助您找到反映您品牌并吸引粉丝的完美句柄。',
    metaDescription: '为您的资料生成独特的Instagram用户名。AI驱动的用户名建议。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的品牌或内容',
    inputPlaceholder: '例如：分享家庭烹饪食谱的美食博主',
    buttonText: '生成名称',
    maxLength: 1024,
    options: [
      { name: 'style', label: '名称风格', choices: ['创意', '专业', '有趣', '极简', '潮流'], default: '创意', type: 'select' },
      { name: 'count', label: '名称数量', choices: ['5个名称', '10个名称', '15个名称'], default: '10个名称', type: 'select' },
    ],
    systemPrompt: `You are an Instagram username expert.
Generate usernames optimized for Instagram.
Consider:
- Instagram's 30 character limit
- Visual appeal of the name
- Easy to tag and mention
- Memorable and brandable
- Reflects the user's niche/content
Style options affect creativity and approach.
Include variations with underscores, periods, or numbers where helpful.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '影响者品牌建设', description: '创作者使用Instagram名称生成器找到反映其利基和个性的用户名。好的用户名帮助建立可识别的品牌并吸引合适的粉丝。' },
      { title: '商业资料设置', description: '企业使用该工具找到可用的、品牌一致的Instagram句柄，与其公司名称和整体社交媒体策略保持一致。' },
      { title: '账户重新品牌化', description: '用户更换利基或重新品牌化其存在时使用生成器找到更好地反映其当前身份和内容的新用户名。' },
    ],
    faqs: [
      { question: 'Instagram用户名应该有多长？', answer: 'Instagram允许最多30个字符，但更短更好。目标是15个字符或更少以便于记忆和标记。' },
      { question: '我可以在用户名中使用表情符号吗？', answer: 'Instagram用户名只允许字母、数字、句点和下划线。不允许表情符号或特殊字符。' },
      { question: '如何使我的用户名易于记忆？', answer: '保持简短、使用真实的词语或可识别的组合、使其易于拼写和发音，并确保它与您的内容相关。' },
      { question: '我应该使用我的真名还是创意名称？', answer: '取决于您的目标。真名适合个人品牌。创意名称适合主题账户或想要隐私的创作者。' },
      { question: '如果我想要的用户名被占用怎么办？', answer: '尝试添加下划线（user_name）、句点（user.name）、前缀（the_username）或后缀（username_official）。该工具生成多个变体以帮助。' },
      { question: '我应该多久更换一次用户名？', answer: '尽量避免频繁更换——这会让粉丝困惑并破坏品牌认知度。只有在有重大原因时才更换。' },
      { question: '用户名会影响我的可发现性吗？', answer: '是的，用户名可以被搜索。包含与您利基相关的关键词可以帮助可发现性。' },
      { question: '不同的风格选项有什么作用？', answer: '创意专注于独特组合，专业适合商业用途，有趣强调个性，极简保持简洁，潮流使用当前流行的模式。' },
      { question: '我可以在用户名中使用数字吗？', answer: '可以，如果数字自然地融入或有意义（如年份或品牌的一部分）。避免只是添加随机数字来使名称可用。' },
      { question: '如何检查Instagram用户名可用性？', answer: '在Instagram搜索栏中搜索，或尝试注册时输入该用户名。该工具生成不太可能被占用的独特选项。' },
    ],
  },

  'tiktok-username-generator': {
    slug: 'tiktok-username-generator',
    name: 'TikTok用户名生成器',
    title: '免费AI TikTok用户名生成器',
    description: '为TikTok创建脱颖而出并难忘的独特用户名。我们的AI帮助您找到反映您的内容风格并吸引粉丝的完美句柄。',
    metaDescription: '为您的资料生成独特的TikTok用户名。AI驱动的用户名建议。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的内容或个性',
    inputPlaceholder: '例如：分享化妆教程和产品评测的美妆创作者',
    buttonText: '生成用户名',
    maxLength: 1024,
    options: [
      { name: 'style', label: '用户名风格', choices: ['潮流', '有趣', '创意', '专业', '独特'], default: '潮流', type: 'select' },
      { name: 'count', label: '用户名数量', choices: ['5个用户名', '10个用户名', '15个用户名'], default: '10个用户名', type: 'select' },
    ],
    systemPrompt: `You are a TikTok username expert.
Generate usernames optimized for TikTok's platform.
Consider:
- TikTok's 24 character limit
- Platform culture and trends
- Youthful, creative energy
- Easy to remember for viral content
- Matches content style/niche
Style options affect the tone and approach.
Include creative variations that stand out.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '新账户创建', description: '新TikTok创作者使用用户名生成器找到反映其内容利基和个性的独特句柄，帮助从一开始就建立可识别的品牌。' },
      { title: '平台扩展', description: '已在其他平台建立存在的创作者使用该工具找到TikTok特定的用户名，可以是其现有品牌的变体或专门针对TikTok受众优化的全新名称。' },
      { title: '品牌一致性', description: '企业使用生成器找到与其公司名称和整体社交媒体策略匹配的可用TikTok句柄。' },
    ],
    faqs: [
      { question: 'TikTok用户名应该有多长？', answer: 'TikTok允许最多24个字符。更短的名称更易于记忆和在口碑分享中提及。目标是15个字符或更少。' },
      { question: 'TikTok用户名可以包含什么？', answer: 'TikTok用户名可以包含字母、数字、下划线和句点。不允许空格或特殊字符。' },
      { question: '什么类型的用户名在TikTok上有效？', answer: '简短、朗朗上口、独特的名称效果最好。反映个性或内容利基的名称有助于吸引正确的受众。' },
      { question: '我可以以后更改TikTok用户名吗？', answer: '是的，TikTok允许更改用户名，但有时间限制。频繁更改可能混淆粉丝。' },
      { question: '如何使我的用户名独特？', answer: '结合不寻常的词语、使用创意拼写、添加与您利基相关的元素，或创建独特的词语混合。' },
      { question: '用户名会影响走红潜力吗？', answer: '一个难忘的用户名帮助人们通过口碑找到您和关注您。好的用户名可以成为您品牌的一部分。' },
      { question: '我应该使用我在其他平台上使用的相同名称吗？', answer: '一致性有助于跨平台品牌建设。如果您的用户名在TikTok上可用，使用它会有所帮助。如果不可用，考虑一个可识别的变体。' },
      { question: '潮流风格是什么意思？', answer: '潮流用户名反映当前TikTok文化和模式——他们可能使用流行格式、词语或适合平台能量的结构。' },
      { question: '生成器如何帮助我找到可用的用户名？', answer: '工具生成多个独特选项，增加找到一个尚未被占用的用户名的机会。您需要在TikTok上检查可用性。' },
      { question: '商业账户有什么不同的考虑？', answer: '商业账户应该使用与其公司名称或产品匹配的用户名，保持专业的外观，同时仍然适合TikTok的休闲文化。' },
    ],
  },

  'youtube-channel-description-generator': {
    slug: 'youtube-channel-description-generator',
    name: 'YouTube频道描述生成器',
    title: '免费AI YouTube频道描述生成器',
    description: '创建吸引订阅者的引人入胜的YouTube频道描述。我们的AI帮助您编写清晰传达您频道价值的描述。',
    metaDescription: '生成驱动订阅的YouTube频道描述。AI驱动的频道描述优化。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的YouTube频道',
    inputPlaceholder: '例如：帮助小型企业主进行数字营销策略的频道',
    buttonText: '生成描述',
    maxLength: 2048,
    options: [
      { name: 'length', label: '描述长度', choices: ['简短（2-3句）', '中等（1段）', '完整（多段）'], default: '中等（1段）', type: 'select' },
      { name: 'tone', label: '语气', choices: ['专业', '友好', '鼓舞人心', '有趣', '权威'], default: '友好', type: 'select' },
    ],
    systemPrompt: `You are a YouTube channel optimization expert.
Create compelling channel descriptions that:
- Clearly communicate what the channel offers
- Include relevant keywords for search
- Appeal to the target audience
- Include upload schedule if relevant
- End with a call to subscribe
Consider:
- YouTube's SEO importance
- The "About" page context
- Viewer decision-making process
Make descriptions that convert visitors to subscribers.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '新频道启动', description: '新YouTuber使用频道描述生成器创建专业的频道介绍。良好的描述帮助设定观众期望并鼓励订阅。' },
      { title: '频道优化', description: '现有创作者使用该工具改进其频道描述以获得更好的搜索可见性和订阅者转化。' },
      { title: '品牌一致性', description: '企业和品牌使用生成器创建与其整体营销信息一致的频道描述。' },
    ],
    faqs: [
      { question: 'YouTube频道描述应该有多长？', answer: 'YouTube允许最多5000个字符，但最重要的信息应该在前200个字符内，因为这是搜索结果中显示的内容。' },
      { question: '我应该在描述中包含关键词吗？', answer: '是的，在描述中自然地包含相关关键词有助于YouTube搜索和Google搜索的可发现性。' },
      { question: '描述应该包含什么？', answer: '包括：您的频道是关于什么的、您发布什么类型的内容、您的上传时间表、您是谁（如果相关）、以及订阅的行动呼吁。' },
      { question: '我可以在描述中添加链接吗？', answer: '是的，您可以添加社交媒体、网站或其他资源的链接。将重要链接放在描述的开头以获得可见性。' },
      { question: '我应该多久更新一次频道描述？', answer: '当您的内容焦点变化、您有新的上传时间表或您想要针对不同的关键词进行优化时更新。' },
      { question: '描述如何帮助我的频道增长？', answer: '良好的描述帮助观众决定是否订阅，改善搜索可发现性，并设定对您内容的明确期望。' },
      { question: '我应该提及我的上传时间表吗？', answer: '如果您有一致的时间表，是的。它设定期望并给观众订阅的理由，知道新内容会定期出现。' },
      { question: '第一句最重要的是什么？', answer: '第一句应该清晰陈述您的频道提供什么价值。这是搜索预览中可见的内容，影响点击率。' },
      { question: '我应该在描述中包含我的社交媒体吗？', answer: '是的，链接您的其他平台有助于跨平台增长并为观众提供其他联系您的方式。' },
      { question: '这个工具帮助进行YouTube SEO吗？', answer: '是的，工具创建包含自然关键词放置的描述，并遵循帮助搜索可发现性的最佳实践。' },
    ],
  },

  'youtube-name-generator': {
    slug: 'youtube-name-generator',
    name: 'YouTube名称生成器',
    title: '免费AI YouTube名称生成器',
    description: '为您的YouTube频道创建独特、难忘的名称。我们的AI帮助您找到反映您内容并吸引订阅者的完美频道名称。',
    metaDescription: '生成独特的YouTube频道名称。AI驱动的频道名称建议。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的频道内容',
    inputPlaceholder: '例如：专注于环保生活提示的生活方式频道',
    buttonText: '生成名称',
    maxLength: 1024,
    options: [
      { name: 'style', label: '名称风格', choices: ['专业', '创意', '有趣', '描述性', '独特'], default: '创意', type: 'select' },
      { name: 'count', label: '名称数量', choices: ['5个名称', '10个名称', '15个名称'], default: '10个名称', type: 'select' },
    ],
    systemPrompt: `You are a YouTube channel naming expert.
Generate channel names that:
- Are memorable and unique
- Reflect the content/niche
- Work well as a brand
- Easy to search and spell
- Appeal to the target audience
Consider:
- YouTube naming conventions
- Brand potential
- Domain availability potential
- Cross-platform consistency
Provide varied options with different approaches.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '新频道创建', description: '新YouTuber使用名称生成器找到反映其内容利基并吸引目标受众的完美频道名称。' },
      { title: '频道重新品牌化', description: '现有创作者更换利基或发展其品牌时使用该工具找到更好的频道名称。' },
      { title: '品牌扩展', description: '企业使用生成器找到与其公司名称一致同时为YouTube优化的频道名称。' },
    ],
    faqs: [
      { question: '好的YouTube频道名称应该有多长？', answer: '更短更好——目标是20个字符或更少。较短的名称更容易记住和搜索。' },
      { question: '我应该使用我的真名作为频道名称吗？', answer: '取决于您的目标。真名适合个人品牌。创意名称适合主题频道或想要隐私的创作者。' },
      { question: '频道名称会影响搜索可见性吗？', answer: '是的，频道名称可以被搜索。包含与您利基相关的关键词可以帮助可发现性，但记忆性和品牌建设更重要。' },
      { question: '我可以以后更改YouTube频道名称吗？', answer: '是的，您可以更改频道名称，但频繁更改可能混淆订阅者并影响品牌认知度。' },
      { question: '如何检查频道名称是否可用？', answer: '在YouTube上搜索并检查类似名称。同时检查社交媒体平台上的可用性以保持一致性。' },
      { question: '不同的风格选项有什么作用？', answer: '专业适合商业用途，创意使用独特组合，有趣强调个性，描述性清楚说明内容，独特追求与众不同。' },
      { question: '频道名称和用户名有什么区别？', answer: '频道名称是显示的名称，可以包含空格和特殊字符。用户名（句柄）是唯一标识符，用于URL和@提及。' },
      { question: '我应该考虑域名可用性吗？', answer: '如果您计划建立网站或品牌，是的。选择一个可能有相应域名的名称可以帮助未来扩展。' },
      { question: '如何使我的频道名称独特？', answer: '结合不寻常的词语、使用创意拼写、添加与您利基相关的元素，或创建独特的词语混合。' },
      { question: '我应该在名称中包含"TV"或"频道"吗？', answer: '这是可选的，可能显得过时。如果它适合您的品牌就包含，但这不是必要的。' },
    ],
  },

  'youtube-video-description-generator': {
    slug: 'youtube-video-description-generator',
    name: 'YouTube视频描述生成器',
    title: '免费AI YouTube视频描述生成器',
    description: '创建为搜索优化并驱动参与的YouTube视频描述。我们的AI帮助您编写提升可见性和观看时间的描述。',
    metaDescription: '生成SEO优化的YouTube视频描述。AI驱动的描述创建。免费且即时。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的视频内容',
    inputPlaceholder: '例如：10分钟教程展示如何在家制作拿铁咖啡艺术',
    buttonText: '生成描述',
    maxLength: 2048,
    options: [
      { name: 'length', label: '描述长度', choices: ['简短（2-3行）', '中等（1段+时间戳）', '完整（多段+时间戳+链接）'], default: '中等（1段+时间戳）', type: 'select' },
      { name: 'include_timestamps', label: '包含时间戳', choices: ['是', '否'], default: '是', type: 'radio' },
    ],
    systemPrompt: `You are a YouTube SEO expert.
Create video descriptions that:
- Start with a compelling hook (first 2 lines visible)
- Include relevant keywords naturally
- Provide useful information about the video
- Include timestamps if requested
- Add calls to action (subscribe, like, comment)
- Leave space for links section
Consider:
- YouTube's search algorithm
- Viewer experience and expectations
- Conversion to subscribers
Make descriptions that improve discoverability.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '视频SEO优化', description: '创作者使用视频描述生成器改善其视频在YouTube搜索中的可见性。良好的描述帮助YouTube理解内容并在相关搜索中显示。' },
      { title: '观众参与', description: 'YouTuber使用该工具创建包含时间戳和行动呼吁的描述，改善观众体验并鼓励互动。' },
      { title: '内容批量创建', description: '需要快速创建多个视频描述的创作者使用该工具保持一致性和质量。' },
    ],
    faqs: [
      { question: 'YouTube视频描述应该有多长？', answer: 'YouTube允许最多5000个字符。最重要的信息应该在前200个字符内，因为这是搜索预览中显示的内容。' },
      { question: '为什么前两行如此重要？', answer: '只有前1-2行在描述展开前可见。这应该包含最引人入胜的信息和关键词。' },
      { question: '我应该在描述中包含时间戳吗？', answer: '时间戳改善观众体验，可以增加观看时间，并可能使您的视频有资格在搜索中显示关键时刻。' },
      { question: '如何格式化时间戳？', answer: '使用格式"0:00 介绍"或"00:00 介绍"。YouTube会自动将这些转换为可点击的章节链接。' },
      { question: '我应该在每个描述中包含关键词吗？', answer: '是的，在描述中自然地包含相关关键词有助于YouTube理解您的视频内容并在相关搜索中显示。' },
      { question: '我可以在描述中添加链接吗？', answer: '是的，您可以添加社交媒体、网站、相关视频或提到的产品的链接。将最重要的链接放在折叠线以上。' },
      { question: '我应该添加什么样的行动呼吁？', answer: '常见的CTA包括：订阅、点赞、评论、分享、查看相关视频或访问您的其他平台。' },
      { question: '描述如何影响我的视频表现？', answer: '良好的描述改善搜索可见性，设定观众期望，增加观看时间（通过时间戳），并驱动订阅和其他参与。' },
      { question: '我应该为每个视频使用模板吗？', answer: '是的，拥有一致的格式（钩子、描述、时间戳、链接、CTA）可以节省时间并保持一致性，同时仍然自定义每个视频的具体内容。' },
      { question: '描述中应该避免什么？', answer: '避免关键词堆砌、误导性信息、过多的链接或CTA、与视频内容无关的内容。' },
    ],
  },

  'rewording-tool': {
    slug: 'rewording-tool',
    name: '改写工具',
    title: '免费AI改写工具 | Analyze AI',
    description: '使用新鲜措辞重述您的文本。我们的AI帮助您以新方式表达想法，同时保持原始含义和意图。',
    metaDescription: '使用AI免费改写文本。保持含义的同时获得新鲜措辞。非常适合论文、电子邮件和博客。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要改写的文本',
    inputPlaceholder: '在这里输入或粘贴您的文本...',
    buttonText: '改写',
    maxLength: 4096,
    options: [
      { name: 'intensity', label: '改写强度', choices: ['轻度', '中度', '强度'], default: '中度', type: 'select' },
      { name: 'tone', label: '语气调整', choices: ['保持相同', '更正式', '更休闲', '更简洁'], default: '保持相同', type: 'select' },
    ],
    systemPrompt: `You are an expert at rewording text while preserving meaning.
Reword the user's text according to the selected intensity:
- Light: Subtle changes, close to original structure
- Moderate: Clear rewording with different phrasing
- Strong: Significant transformation while keeping meaning
Tone adjustments:
- Keep same: Match original tone
- More formal: Elevate language level
- More casual: Make it more conversational
- More concise: Reduce word count
Preserve all original meaning and intent.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '写作改进', description: '作家使用改写工具找到更好的方式来表达他们的想法。当初稿感觉笨拙或重复时，改写可以帮助找到更有效的措辞。' },
      { title: '避免重复', description: '内容创作者使用该工具以新鲜方式表达类似的想法，使内容在多个部分中保持引人入胜，同时避免重复语言。' },
      { title: '语言学习', description: '语言学习者使用该工具查看相同想法可以用不同方式表达，帮助扩展词汇量和理解不同的句子结构。' },
    ],
    faqs: [
      { question: '改写与转述有什么区别？', answer: '这些术语通常可以互换使用。两者都涉及在保持含义的同时改变措辞。改写可能意味着更轻微的调整，而转述可能意味着更大的转换。' },
      { question: '改写强度有什么不同？', answer: '轻度进行微妙调整，中度提供清晰的措辞变化，强度则进行显著转换，同时仍保持原始含义。' },
      { question: '原始含义会改变吗？', answer: '工具专门设计用于在改变措辞的同时保持原始含义和意图。始终审查以确保您的信息被保留。' },
      { question: '这对学术作业有帮助吗？', answer: '虽然该工具可以帮助改进您的写作，但始终确保遵守您机构的学术诚信政策，并正确引用来源。' },
      { question: '语气调整有什么作用？', answer: '语气调整改变正式程度。更正式提升语言，更休闲使其更有对话性，更简洁减少字数。' },
      { question: '我可以改写技术内容吗？', answer: '是的，该工具处理技术内容。它保留专业术语，同时改变周围的措辞。审查以确保技术准确性。' },
      { question: '如何获得更好的结果？', answer: '输入清晰、完整的句子或段落。选择匹配您目标的强度和语气。审查输出以确保它保持您想要的含义。' },
      { question: '该工具会保存我的文本吗？', answer: '为隐私保护，请查看工具的隐私政策。大多数工具不会永久存储文本，但可能临时处理文本进行分析。' },
      { question: '有字数限制吗？', answer: '该工具处理一次几个段落效果最佳。对于较长的内容，分段处理会产生更好的结果。' },
      { question: '我可以撤销改写吗？', answer: '该工具不存储以前的版本，所以确保在改写前保留原文。您可以比较两者以确保结果符合您的需求。' },
    ],
  },

  'grammar-checker': {
    slug: 'grammar-checker',
    name: '语法检查器',
    title: '免费AI语法检查器 | Analyze AI',
    description: '使用我们的AI语法检查器检测并修正语法错误。获得关于语法、标点和写作风格的即时反馈。',
    metaDescription: '使用AI免费检查语法、标点和写作风格。立即改善您的写作。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要检查的文本',
    inputPlaceholder: '在这里输入或粘贴您的文本...',
    buttonText: '检查语法',
    maxLength: 8192,
    options: [
      { name: 'strictness', label: '检查严格程度', choices: ['基础（仅错误）', '标准（错误+建议）', '严格（全面审查）'], default: '标准（错误+建议）', type: 'select' },
      { name: 'style', label: '写作风格', choices: ['一般', '学术', '商业', '休闲'], default: '一般', type: 'select' },
    ],
    systemPrompt: `You are an expert grammar and writing checker.
Analyze AI the text for:
- Grammar errors (subject-verb agreement, tense, etc.)
- Punctuation issues
- Spelling mistakes
- Style improvements (based on selected style)
Strictness levels:
- Basic: Only clear errors
- Standard: Errors plus improvement suggestions
- Strict: Comprehensive review including style
Style options affect what's considered appropriate.
Provide clear explanations for each correction.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '学术写作', description: '学生使用语法检查器确保论文和作业没有错误。该工具帮助识别常见的语法错误并改进整体写作质量。' },
      { title: '专业沟通', description: '专业人士使用该工具检查电子邮件、报告和文档，确保专业、无错误的沟通。' },
      { title: '内容创作', description: '作家和博主使用该工具在发布前润色内容，确保语法正确且可读性强。' },
    ],
    faqs: [
      { question: '语法检查器检查什么？', answer: '该工具检查语法错误（主谓一致、时态等）、标点问题、拼写错误，以及根据设置，还有风格改进。' },
      { question: '不同的严格程度有什么作用？', answer: '基础只检查明确的错误，标准添加改进建议，严格提供包括风格在内的全面审查。' },
      { question: '我应该选择什么写作风格？', answer: '一般适合大多数用途，学术适合论文和研究，商业适合专业文档，休闲适合博客和社交媒体。' },
      { question: '该工具会自动修正错误吗？', answer: '该工具识别错误并提供修正建议。您可以选择接受或修改建议。' },
      { question: '检查器能处理技术或专业术语吗？', answer: '该工具可能会标记不常见的术语。对于高度专业的内容，审查标记并在必要时忽略误报。' },
      { question: '这对非母语者有帮助吗？', answer: '是的，该工具可以帮助识别和解释语法错误，帮助您改进写作并学习正确的结构。' },
      { question: '有文本长度限制吗？', answer: '该工具处理中等长度的文本效果最佳。非常长的文档可能需要分段检查。' },
      { question: '检查器能理解上下文吗？', answer: '是的，该工具分析上下文以提供更准确的建议，但始终审查建议以确保它们适合您的特定用途。' },
      { question: '我应该多久使用一次语法检查？', answer: '在任何重要文档的最终编辑阶段使用。对于日常写作，根据需要使用以捕获错误。' },
      { question: '这可以替代校对吗？', answer: '该工具是一个有用的辅助，但人工审查仍然很重要。自动工具可能会遗漏微妙的问题或误解上下文。' },
    ],
  },

  'plagiarism-checker': {
    slug: 'plagiarism-checker',
    name: '抄袭检查器',
    title: '免费AI抄袭检查器 | Analyze AI',
    description: '分析您的内容的原创性，识别可能需要引用或改写的段落。获得可操作的反馈来改善您的写作。',
    metaDescription: '分析您的内容的原创性，识别可能需要引用或改写的段落。获得可操作的反馈来改善您的写作。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要检查的文本',
    inputPlaceholder: '在这里粘贴您的文本以检查原创性...',
    buttonText: '检查原创性',
    maxLength: 4096,
    options: [
      { name: 'checkType', label: '检查类型', choices: ['快速扫描', '标准分析', '详细报告'], default: '标准分析', type: 'select' },
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
- Style inconsistency (sudden shifts in writing quality)
- Vocabulary level changes mid-document
- Extremely polished passages in otherwise rough drafts
- Facts or statistics without attribution
Check Type: {{checkType}}
Provide originality assessment and recommendations.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '提交前学术检查', description: '学生可以在提交前对论文进行抄袭检查，以识别可能被标记为与来源太相似的段落。该工具帮助识别需要引用的地方以及哪些部分可能需要用更原创的语言改写。' },
      { title: '内容质量保证', description: '出版商和编辑可以在发布前筛选提交的内容是否有原创性指标。虽然不能替代全面的数据库工具，但它提供了对明显抄袭危险信号或不一致写作质量的快速初步检查。' },
      { title: '作者自我审计', description: '作家可以检查自己的作品，确保没有无意中使用与研究来源太相似的措辞。该工具帮助识别需要原创语言或正确归属的地方，保持写作诚信。' },
    ],
    faqs: [
      { question: '抄袭检查器如何工作？', answer: '该工具分析您的文本以查找原创性指标，包括写作一致性、风格模式和看起来模板化或需要引用的段落。' },
      { question: '这个抄袭检查器是免费的吗？', answer: '是的，该工具完全免费使用，无需注册。' },
      { question: '这与Turnitin或Copyscape一样准确吗？', answer: '不。那些服务将您的文本与大量已发布内容数据库进行比较。该工具使用模式分析来识别危险信号，但不能确定文本是否出现在其他网络上。对于高风险检查，请使用专门的服务。' },
      { question: '抄袭检查器实际检测什么？', answer: '该工具识别：表明复制粘贴的风格不一致、需要引用的事实/统计数据、看起来模板化的段落，以及可能表明非原创内容的质量变化。' },
      { question: '它能识别我是否从特定来源复制的吗？', answer: '不，该工具无法识别特定来源。它只能根据写作模式标记看起来可能非原创的段落。您需要使用基于数据库的工具来匹配特定来源。' },
      { question: '它会捕获AI生成的内容吗？', answer: '该工具专注于抄袭模式，而不是AI检测。对于AI内容检测，请使用我们专门的AI内容检测器工具。' },
      { question: '如果段落被标记了我该怎么办？', answer: '审查被标记的段落以确定它们是否需要：直接引用（如果是引述）、带归属的转述（如果是总结来源），或完全用您自己的话改写。' },
      { question: '我可以用这个检查学术论文吗？', answer: '作为初步检查，可以。但始终在最终提交前使用您机构的官方抄袭检查器（通常是Turnitin），因为那是您的导师会使用的。' },
      { question: '我的文本可以有多长？', answer: '该工具处理标准文档长度。对于非常长的文档，您可能通过逐章检查获得更好的结果。' },
      { question: '抄袭和缺少引用有什么区别？', answer: '抄袭是将他人的作品呈现为自己的。缺少引用可能是意外的——您知道信息来自某处但忘记引用。两者都需要修复，但意图不同。该工具标记这两个问题。' },
    ],
  },

  'blog-post-ideas-generator': {
    slug: 'blog-post-ideas-generator',
    name: '博客文章创意生成器',
    title: '免费AI博客文章创意生成器 | Analyze AI',
    description: '为内容创意而苦恼？在几秒钟内生成独特的、SEO优化的博客文章创意。我们的AI提供准备写作的主题。',
    metaDescription: '为内容创意而苦恼？在几秒钟内生成独特的、SEO优化的博客文章创意。我们的AI提供准备写作的主题。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '主题或利基',
    inputPlaceholder: '例如：面向创业创始人的B2B SaaS电子邮件营销',
    buttonText: '生成创意',
    maxLength: 2048,
    options: [
      { name: 'number', label: '创意数量', choices: ['5个创意', '10个创意', '20个创意'], default: '10个创意', type: 'select' },
      { name: 'type', label: '内容类型', choices: ['混合', '如何做/教程', '列表文章', '观点/分析', '案例研究', '新闻/趋势'], default: '混合', type: 'select' },
    ],
    systemPrompt: `You are an expert content strategist specializing in generating blog post ideas that drive traffic and engage audiences.
## IDEA GENERATION APPROACH
- Focus on search-worthy topics
- Consider audience pain points
- Include trending and evergreen topics
- Provide specific, actionable angles
Number: {{number}}
Type: {{type}}

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '内容日历规划', description: '内容营销人员和博主使用博客文章创意生成器创建用于填充内容日历的主题列表。这有助于在保持与读者相关的主题的同时维持一致的发布时间表。' },
      { title: '克服写作障碍', description: '不知道写什么的博主使用生成器获取新鲜的创意和灵感。只需输入您的利基，就可以获得可以立即开始的具体主题。' },
      { title: 'SEO驱动的内容开发', description: '希望增加有机流量的营销人员使用生成器找到具有搜索价值的主题。该工具建议针对受众正在积极搜索的问题和需求的主题。' },
    ],
    faqs: [
      { question: '博客文章创意生成器是什么？', answer: '博客文章创意生成器是一个AI工具，根据您的利基建议具体的博客主题。它不是简单的主题列表，而是提供包含具体角度和方法的完整博客文章概念。' },
      { question: '这个工具是免费的吗？', answer: '是的，该工具完全免费，无需注册。您可以生成任意数量的创意。' },
      { question: '如何获得更具体的创意？', answer: '更详细的输入产生更有针对性的创意。不要输入"营销"，而是具体说明如"针对中小企业的社交媒体营销"。还可以包含关于目标受众或目标的信息。' },
      { question: '我应该使用所有生成的创意吗？', answer: '不，将生成的创意视为策划的菜单。根据您的受众、资源和战略优先级评估每个创意，选择最合适的。' },
      { question: '不同的内容类型选项意味着什么？', answer: '混合提供各种类型的创意。如何做是实用指南。列表文章是列表格式的文章。观点/分析分享观点。案例研究分析具体例子。新闻/趋势涵盖时事话题。' },
      { question: '这些创意适合SEO吗？', answer: '生成器在生成创意时考虑搜索价值，但建议进行实际的关键词研究以确认主题的搜索量和竞争。将创意用作起点，并用SEO数据支持。' },
      { question: '可以为利基或专业主题生成创意吗？', answer: '是的，生成器处理各种利基，包括高度专业化或技术性的领域。对于专业主题，提供关于受众专业水平的背景以获得最佳结果。' },
      { question: '生成的创意是原创的吗？', answer: '创意是根据您的输入独特生成的，但主题本身可能已被其他博主涵盖。差异化来自于您对同一主题的独特方法和视角。' },
      { question: '如何选择首先追求哪个创意？', answer: '根据目标优先排序：如果需要流量，选择SEO价值高的主题；如果需要参与度，选择激发讨论的主题；如果需要转化，选择与产品/服务相关的主题。' },
      { question: '我应该多久生成一次新创意？', answer: '大多数博主受益于每月或每季度的创意生成会议。但是，该工具对于趋势话题或反应性内容也很有价值，可以根据需要快速生成新创意。' },
    ],
  },

  // ==================== BATCH 5: Tools 40-46 ====================

  'emoji-translator': {
    slug: 'emoji-translator',
    name: '表情符号翻译器',
    title: '免费AI表情符号翻译器 | Analyze AI',
    description: '将文本翻译成表达丰富的表情符号或解码表情符号消息。',
    metaDescription: '将文本翻译成表达丰富的表情符号或解码表情符号消息。非常适合社交媒体、消息传递和有趣的沟通。免费使用。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '文本或表情符号...',
    inputPlaceholder: '例如："我太期待周末了！"或粘贴表情符号以解码',
    buttonText: '翻译',
    maxLength: 1024,
    options: [
      { name: 'direction', label: '翻译方向', choices: ['文本到表情符号', '表情符号到文本'], default: '文本到表情符号', type: 'radio' },
      { name: 'style', label: '表情符号风格', choices: ['完全替换', '带表情符号的文本', '仅关键概念'], default: '带表情符号的文本', type: 'select' },
    ],
    systemPrompt: `You are an expert at translating between text and emojis.
## CORE RULES
- Match emojis to the meaning and emotion of the text
- Use commonly understood emojis
- Maintain the tone and sentiment
- Don't overuse emojis—select the most impactful ones
Direction: {{direction}}
Style: {{style}}
Provide the translation with explanation of key emojis used.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '社交媒体和消息增强', description: '希望为文本、推文或社交帖子增添个性的用户可以将消息翻译成表情符号增强版本。该工具帮助找到传达语气和情感的完美表情符号，使数字沟通更加生动和引人入胜。' },
      { title: '表情符号解释和理解', description: '当您收到令人困惑的表情符号字符串时，翻译器帮助解码可能的含义。这对于理解代际表情符号使用、平台特定含义或创意表情符号组合特别有帮助。' },
      { title: '内容创作和营销', description: '社交媒体经理和内容创作者可以找到使帖子脱颖而出的创意表情符号组合。该工具帮助将品牌信息翻译成在Instagram和Twitter等视觉平台上表现良好的表情符号友好格式。' },
    ],
    faqs: [
      { question: '表情符号翻译器如何工作？', answer: '对于文本到表情符号的翻译，工具分析消息的含义和情感并选择代表这些概念的表情符号。对于表情符号到文本的翻译，它解释常见含义并提供可能的翻译。' },
      { question: '表情符号翻译器是免费的吗？', answer: '是的，完全免费，无需注册。您可以翻译任意数量。' },
      { question: '我的表情符号翻译会被所有人理解吗？', answer: '该工具使用常见理解的表情符号，但表情符号解释可能因年龄、文化和平台而异。我们会标记任何具有多种常见含义的表情符号。' },
      { question: '我可以将表情符号翻译回文本吗？', answer: '是的，粘贴表情符号序列，工具会提供表情符号含义的可能解释，包括模糊组合的替代解读。' },
      { question: '为什么有些表情符号有不同的含义？', answer: '表情符号含义通过互联网文化演变，可能因代际、社区和平台而异。单个表情符号可能有其字面含义加上俚语或讽刺用法。工具会注意这些变化。' },
      { question: '我应该用表情符号替换所有文本还是只添加一些？', answer: '取决于情况。对于休闲消息，完全表情符号替换可能很有趣。对于大多数沟通，添加几个战略性表情符号来增强文本更有效且更清晰。' },
      { question: '表情符号在所有设备上看起来一样吗？', answer: '不，表情符号设计因平台（Apple、Google、Samsung等）而异。含义保持相似，但视觉外观不同。我们建议使用具有清晰、通用含义的表情符号。' },
      { question: '我应该使用多少个表情符号？', answer: '少通常就是多。几个精选的表情符号比一堆图标更有影响力。该工具根据消息长度和情境推荐适当的数量。' },
      { question: '这能帮助表情符号SEO吗？', answer: '表情符号可以出现在搜索结果中，可能会提高社交帖子的点击率。该工具帮助识别与您主题相关的表情符号，可能增强可见性。' },
      { question: '有我应该避免的表情符号吗？', answer: '一些表情符号已获得与其字面外观不同的含义，特别是在年轻用户中。该工具在相关时会标记可能被误解的表情符号。' },
    ],
  },

  'brand-name-generator': {
    slug: 'brand-name-generator',
    name: '品牌名称生成器',
    title: '免费AI品牌名称生成器 | Analyze AI',
    description: '即时生成独特、令人难忘的品牌名称。我们的AI为您的商业身份创建具有战略意义的独特名称。',
    metaDescription: '即时生成独特、令人难忘的品牌名称。我们的AI为您的商业身份创建具有战略意义的独特名称。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的品牌...',
    inputPlaceholder: '例如：针对环保意识千禧一代的可持续时尚品牌',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '名称数量', choices: ['3个名称', '5个名称', '10个名称'], default: '5个名称', type: 'select' },
      { name: 'tone', label: '品牌调性', choices: ['正式/专业', '休闲/友好', '创新/科技', '奢华/高端'], default: '正式/专业', type: 'select' },
      { name: 'explain_meaning', label: '解释含义', choices: ['是', '否'], default: '是', type: 'radio' },
    ],
    systemPrompt: `You are an expert brand strategist and naming specialist who creates memorable, distinctive brand names.
## CORE NAMING PRINCIPLES
1. **Memorability**: Names must be easy to remember, spell, and pronounce
2. **Distinctiveness**: Names must stand out from competitors
3. **Scalability**: Names should allow for business evolution
4. **Domain/Trademark Viability**: Consider practical availability
5. **Emotional Resonance**: Names should evoke appropriate feelings
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '创业和新企业命名', description: '创始人和企业家在业务形成的关键早期阶段使用品牌名称生成器。强有力的品牌名称是新企业最重要的决定之一——它影响从商标注册到客户认知再到域名可用性的一切。' },
      { title: '产品线和子品牌开发', description: '推出新产品线、子品牌或衍生企业的成熟公司使用生成器创建与现有品牌架构相辅相成的名称。' },
      { title: '品牌重塑和品牌刷新计划', description: '正在进行战略转型、合并或声誉重置的公司使用生成器探索新的命名方向。' },
    ],
    faqs: [
      { question: '什么是品牌名称生成器？', answer: '品牌名称生成器是一个AI工具，根据您的描述、行业和期望的定位创建潜在的商业和品牌名称。它应用命名策略原则——考虑可记忆性、商标可行性、语音吸引力和市场定位等因素。' },
      { question: '如何获得更好的品牌名称建议？', answer: '提供的背景越多，结果越好。不要说"科技公司"，而是描述"帮助小型律师事务所自动化客户接待的B2B SaaS平台，针对美国市场的个人执业者和小型合伙企业"。' },
      { question: '这些品牌名称可以注册商标吗？', answer: '生成的名称是需要独立验证的建议。在确定任何名称之前，您应该通过USPTO（美国）、EUIPO（欧洲）或相关国家数据库进行商标搜索，检查域名可用性，搜索社交媒体句柄，理想情况下咨询商标律师。' },
      { question: '什么是好的品牌名称？', answer: '强大的品牌名称具有几个特征：令人难忘、独特、可发音、可拼写、可扩展和有意义。最好的名称往往成为动词或文化参考——想想"Google一下"或"打Uber"。' },
      { question: '品牌名称应该描述我做什么吗？', answer: '不一定——通常不是。描述性名称提供即时清晰度但更难注册商标且可能限制扩展。世界上最有价值的品牌通常使用唤起性或创造的名称：Apple、Amazon、Nike、Google。' },
      { question: '创造/造词名称如何工作？', answer: '创造的名称是没有先前字典含义的创建单词。它们使用语言学原则构建——组合愉快的音素、使用熟悉的单词模式或混合有意义的词素。' },
      { question: '选择名称前应该检查域名可用性吗？', answer: '是的——域名可用性是现代品牌的实际考虑。但是，不要让域名可用性成为您唯一的过滤器。许多成功的品牌使用变体。' },
      { question: '决定前应该生成多少个品牌名称？', answer: '生成足够的数量来看到模式和可能性——通常在多个批次中15-30个选项。初次生成后，缩小到5-10个最喜欢的，然后与目标受众测试。' },
      { question: '生成器可以为任何行业创建名称吗？', answer: '是的，生成器适应任何行业——从技术和金融到食品和时尚再到专业服务和创意事业。' },
      { question: '生成品牌名称后应该做什么？', answer: '确定有希望的候选者后：（1）在目标市场进行商标搜索，（2）检查域名可用性和社交媒体句柄，（3）与不熟悉该名称的人测试发音，（4）如果将在国际运营，研究其他语言中的名称，（5）从目标客户获取反馈。' },
    ],
  },

  'business-name-generator': {
    slug: 'business-name-generator',
    name: '企业名称生成器',
    title: '免费AI企业名称生成器 | Analyze AI',
    description: '生成在现实世界中有效的创意企业名称。我们的AI为任何行业创建专业、令人难忘的名称。',
    metaDescription: '生成在现实世界中有效的创意企业名称。我们的AI为任何行业创建专业、令人难忘的名称。立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的企业...',
    inputPlaceholder: '例如：服务丹佛都市区的本地管道公司',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '名称数量', choices: ['3个名称', '5个名称', '10个名称'], default: '5个名称', type: 'select' },
      { name: 'tone', label: '企业调性', choices: ['正式/企业', '休闲/友好', '创新/现代'], default: '正式/企业', type: 'select' },
      { name: 'explain_meaning', label: '解释含义', choices: ['是', '否'], default: '是', type: 'radio' },
    ],
    systemPrompt: `You are an expert business naming consultant who creates practical, memorable business names that work in the real world.
## CORE BUSINESS NAMING PRINCIPLES
1. **Commercial Viability**: Names must work in actual business contexts
2. **Industry Appropriateness**: Names should fit industry expectations
3. **Local vs. Scale Considerations**: Match geographic ambitions
4. **Practical Memorability**: Easy to remember, spell, and share
5. **Longevity**: Names should remain relevant as business evolves
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '新企业注册和LLC设立', description: '处于企业形成过程中的企业家使用企业名称生成器在向州当局注册前找到名称。由于企业名称可用性因州和注册类型（LLC、公司、DBA）而异，拥有多个强有力的选项至关重要。' },
      { title: '特许经营和多地点企业命名', description: '计划通过特许经营或多个地点扩展的企业主使用生成器找到在各市场有效的名称。' },
      { title: '现有企业的转型或品牌重塑', description: '正在进行战略变化的成熟企业使用生成器探索品牌重塑选项。' },
    ],
    faqs: [
      { question: '品牌名称和企业名称有什么区别？', answer: '企业名称是您的法律实体名称——出现在注册、税务文件和合同上的名称（例如"Smith Consulting LLC"）。品牌名称是客户认识您的方式——它可能与您的企业名称相同或不同。' },
      { question: '企业名称应该描述我做什么吗？', answer: '取决于您的商业模式和目标。描述性名称提供即时清晰度并有助于本地SEO，但独特性较低且更难注册商标。' },
      { question: '如何检查企业名称是否可用？', answer: '检查多个层面：（1）搜索您所在州的州务卿数据库查找现有注册，（2）搜索USPTO商标数据库，（3）检查域名可用性，（4）在Google上搜索谁在使用类似名称，（5）检查社交媒体平台。' },
      { question: '应该在企业名称中包含位置吗？', answer: '包含位置可以加强本地身份并有助于本地SEO，但如果扩展可能会限制认知范围。考虑您的长期计划。' },
      { question: '拥有匹配的域名有多重要？', answer: '重要但不是必需的。完全匹配的.com域名对信誉和可发现性有价值，但许多成功的企业使用替代方案。' },
      { question: '我可以用自己的名字作为企业名称吗？', answer: '是的——个人名字是经典的方法，特别适合专业服务、创意企业和餐厅。' },
      { question: '什么使企业名称令人难忘？', answer: '令人难忘的名称通常是：短（1-3个词）、容易发音、容易拼写、语音愉悦、并带有某种意义或钩子。' },
      { question: '如何在承诺前测试企业名称？', answer: '测试方法：（1）在不同情境下大声说出来，（2）让别人听后拼写，（3）检查它在标志模拟中的外观，（4）搜索它可能有的关联，（5）向目标客户询问第一印象。' },
      { question: '应该避免与竞争对手相似的名称吗？', answer: '通常是的。相似的名称会造成混淆，可能引发商标问题，并使差异化更困难。' },
      { question: '如果以后想更改企业名称怎么办？', answer: '您可以更改企业名称，但涉及成本：重新注册费、新营销材料、可能的新域名和标牌，以及客户再教育。从您可以成长的名称开始，而不是很快会超越的名称。' },
    ],
  },

  'product-name-generator': {
    slug: 'product-name-generator',
    name: '产品名称生成器',
    title: '免费AI产品名称生成器 | Analyze AI',
    description: '生成畅销的创意产品名称。我们的AI创建令人难忘、市场就绪的名称，在货架上和客户心中脱颖而出。',
    metaDescription: '生成畅销的创意产品名称。我们的AI创建令人难忘、市场就绪的名称，在货架上和客户心中脱颖而出。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的产品...',
    inputPlaceholder: '例如：面向健身爱好者的植物基蛋白粉',
    buttonText: '生成名称',
    maxLength: 2048,
    options: [
      { name: 'number_of_variants', label: '名称数量', choices: ['3个名称', '5个名称', '10个名称'], default: '5个名称', type: 'select' },
      { name: 'tone', label: '产品调性', choices: ['高端/奢华', '有趣/活泼', '专业/技术', '自然/有机'], default: '高端/奢华', type: 'select' },
      { name: 'explain_meaning', label: '解释含义', choices: ['是', '否'], default: '是', type: 'radio' },
    ],
    systemPrompt: `You are an expert product naming strategist who creates compelling product names that drive recognition, recall, and purchase decisions.
## CORE PRODUCT NAMING PRINCIPLES
1. **Shelf Impact**: Names must stand out in crowded environments
2. **Benefit Suggestion**: Names should hint at what the product delivers
3. **Target Audience Fit**: Names must resonate with specific buyers
4. **Verbal Shareability**: Names should spread through word-of-mouth
5. **Brand Architecture**: Names should work within existing portfolios
Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '新产品发布准备', description: '产品经理和营销团队在发布前的关键命名阶段使用产品名称生成器。强有力的产品名称可以决定成功与默默无闻——影响从货架存在感到广告效果再到口碑传播的一切。' },
      { title: '产品线扩展和变体命名', description: '扩展现有产品线的公司使用生成器为新变体创建名称，这些名称与母产品相连接同时区分新产品。' },
      { title: '自有品牌和白标产品开发', description: '创建自有品牌产品的零售商和开发白标产品的制造商使用生成器为与知名品牌竞争的产品命名。' },
    ],
    faqs: [
      { question: '什么是好的产品名称？', answer: '有效的产品名称是令人难忘的、有意义的、可发音的、独特的和适当的。最好的产品名称往往成为品类的代名词。' },
      { question: '产品名称应该描述它做什么吗？', answer: '取决于您的品类和策略。描述性名称提供即时清晰度但更难注册商标。暗示性名称在允许商标保护的同时暗示好处。创造的名称最独特但需要更多营销投资。' },
      { question: '如何为产品线中的产品命名？', answer: '产品线命名通常遵循几种架构之一：（1）品牌屋（所有产品共享品牌名称），（2）背书品牌（带有母公司背书的子品牌），（3）品牌之家（独立的名称）。' },
      { question: '应该为产品名称注册商标吗？', answer: '对于您大量投资的产品，是的。商标注册提供对仿冒者的法律保护并增强您执行权利的能力。' },
      { question: '发布前如何测试产品名称？', answer: '测试方法：（1）与目标客户的焦点小组或调查，（2）数字广告中的A/B测试，（3）与不同受众的发音测试，（4）竞争定位测试，（5）国际筛查以排除意外含义。' },
      { question: '如果产品名称与竞争对手相似怎么办？', answer: '相似的名称会造成混淆和潜在的法律问题。即使不完全相同，听起来相似、看起来相似或创造相似印象的名称可能引发商标纠纷——特别是在同一品类中。' },
      { question: '产品名称应该有多长？', answer: '通常越短越好——理想情况下1-3个音节便于记忆和包装。但是，效果比长度更重要。' },
      { question: '可以使用外语或造词吗？', answer: '是的——两者都是常见策略。外语可以暗示起源、精致或特定关联。造词提供最大的独特性和商标保护。' },
      { question: '如何为国际市场的产品命名？', answer: '在目标语言中筛查问题含义，在各市场测试发音，考虑名称是否应该翻译或保持全球一致，并在国际上检查商标可用性。' },
      { question: '如果需要重命名现有产品怎么办？', answer: '产品重命名涉及成本但可能因法律原因、市场重新定位或负面关联而必要。谨慎执行：清楚地向现有客户传达变化，在过渡期间保持包装提示，将变化解释为改进。' },
    ],
  },

  'website-copy-generator': {
    slug: 'website-copy-generator',
    name: '网站文案生成器',
    title: '免费AI网站文案生成器 | Analyze AI',
    description: '几分钟内生成专业的网站内容。我们的AI为首页、关于页面、服务页面等创建文案。',
    metaDescription: '几分钟内生成专业的网站内容。我们的AI为首页、关于页面、服务页面等创建文案。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的企业...',
    inputPlaceholder: '例如：专门为电商品牌提供SEO服务的数字营销机构',
    buttonText: '生成网站文案',
    maxLength: 2048,
    options: [
      { name: 'pages', label: '要生成的页面', choices: ['仅首页', '首页+关于', '首页+关于+服务', '所有核心页面'], default: '首页+关于+服务', type: 'select' },
      { name: 'tone', label: '品牌调性', choices: ['专业/企业', '友好/亲切', '大胆/自信', '极简/简洁'], default: '专业/企业', type: 'select' },
    ],
    systemPrompt: `You are an expert website copywriter who creates compelling, conversion-focused content for business websites.
## CORE WEBSITE COPY PRINCIPLES
1. **User-Centric Messaging**: Write for what visitors need
2. **Clear Information Architecture**: Structure for navigation
3. **Brand Voice Consistency**: Maintain consistent tone
4. **Conversion Integration**: Guide toward business goals
5. **SEO Awareness**: Incorporate keywords naturally
Pages to Generate: {{pages}}
Tone: {{tone}}

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '新网站开发和发布', description: '建设新网站的企业使用网站文案生成器开发所有页面的初始内容。网站项目经常在文案阶段停滞——设计准备好了，但内容没有。该工具以一致的品牌声音生成完整的页面内容，解除项目阻塞。' },
      { title: '网站重新设计和内容刷新', description: '进行网站重新设计的公司使用生成器创建与其进化品牌定位匹配的新鲜文案。' },
      { title: '多页面内容制作', description: '负责内容密集型网站的营销团队使用生成器在许多页面上保持一致的质量。' },
    ],
    faqs: [
      { question: '企业网站应该包含哪些页面？', answer: '大多数企业的必需页面：首页（第一印象和导航中心）、关于页面（建立信任和品牌故事）、服务/产品页面（您的提供）、联系页面（如何联系您）。其他页面取决于您的业务。' },
      { question: '如何写好首页？', answer: '首页应该快速回答三个问题：您做什么？为谁？为什么选择您？包括：清晰的主标题（价值主张）、产品概述、信任信号（标志、推荐）和通往重要页面的清晰路径。' },
      { question: '网站文案应该有多长？', answer: '根据页面目的和用户意图匹配长度。首页：可扫描、聚焦（300-600字）。关于页面：故事讲述灵活性（400-800字）。服务页面：全面但可扫描（每项服务400-1000字）。' },
      { question: '什么使关于页面文案有效？', answer: '优秀的关于页面通过真实性建立信任。包括：起源故事、使命和价值观、团队介绍和差异化因素。避免：通用的企业用语、没有实质的自我吹捧。' },
      { question: '如何写转化的服务描述？', answer: '以好处开头（客户获得什么），接着是功能（您提供什么），包括流程（与您合作是什么样子），以CTA结束（下一步）。' },
      { question: '网站文案应该正式还是休闲？', answer: '匹配您的目标受众和行业期望。专业服务通常需要正式但可接近的语气。消费品牌通常受益于友好、休闲的声音。一致性比任何特定风格都重要。' },
      { question: '如何为SEO优化网站文案？', answer: '在以下位置包含相关关键词：页面标题、标题、第一段、正文自然分布、图片alt文本。首先为人类写作——搜索引擎奖励服务用户的内容。' },
      { question: '什么是好的行动呼吁？', answer: '有效的CTA是具体的、以好处为中心的、可见的、位置适当的。匹配CTA与页面目的。每个页面都需要清晰的下一步。' },
      { question: '如何为移动用户写作？', answer: '大多数网站流量来自移动设备。为小屏幕写作：更短的段落、清晰的标题、可扫描的结构、重要信息在前。' },
      { question: '应该多久更新一次网站文案？', answer: '当业务产品变化、定位演变、文案表现不佳或信息过时时更新。基础页面需要偶尔审查但不需要不断更新。' },
    ],
  },

  'social-media-caption-generator': {
    slug: 'social-media-caption-generator',
    name: '社交媒体标题生成器',
    title: '免费AI社交媒体标题生成器 | Analyze AI',
    description: '生成推动点赞、评论和分享的引人入胜的社交媒体标题。我们的AI为Instagram、Facebook、Twitter等创建引人注目的帖子文案。',
    metaDescription: '生成推动点赞、评论和分享的引人入胜的社交媒体标题。我们的AI为Instagram、Facebook、Twitter等创建引人注目的帖子文案。 立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的帖子内容...',
    inputPlaceholder: '例如：我的新产品发布照片 - 面向户外爱好者的可持续水瓶',
    buttonText: '生成标题',
    maxLength: 2048,
    options: [
      { name: 'platform', label: '平台', choices: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', '通用'], default: 'Instagram', type: 'select' },
      { name: 'tone', label: '标题调性', choices: ['专业', '休闲', '幽默', '鼓舞人心', '前卫'], default: '休闲', type: 'select' },
    ],
    systemPrompt: `You are an expert social media content strategist specializing in creating engaging captions that drive engagement across multiple platforms.
## CAPTION TYPES AND PURPOSES
### 1. Educational/Value-Driven
- Share tips, tricks, or insights
- Teach something useful
### 2. Storytelling/Personal
- Share experiences and journeys
- Create emotional connections
### 3. Engagement/Interactive
- Ask questions
- Request opinions
### 4. Promotional/Sales
- Highlight products/services
- Drive conversions
Platform: {{platform}}
Tone: {{tone}}

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '高效社交媒体内容创作', description: '社交媒体经理和内容创作者使用标题生成器简化内容创作流程。通过输入相关关键词或描述内容，工具快速生成引人入胜的标题，在保持质量的同时节省时间，确保跨平台的一致发布计划。' },
      { title: '优化广告活动文案', description: '运行社交媒体广告活动的企业使用标题生成器创建引人注目的广告文案变体。通过输入产品详情、目标受众信息和活动目标，工具生成推动点击和转化的有说服力标题，改善广告ROI。' },
      { title: '增强品牌参与度', description: '希望提升参与度的品牌使用标题生成器创建与趋势话题、时事和受众兴趣一致的内容。工具帮助保持鼓励互动、建立社区和加强品牌存在的新鲜、相关内容。' },
    ],
    faqs: [
      { question: '什么使标题有效？', answer: '有效的标题有强力的钩子来阻止滚动，在正文中传递价值或情感，并包含清晰的行动呼吁。它们为特定受众和平台编写，具有适当的语气和长度。' },
      { question: '社交媒体标题应该有多长？', answer: '长度取决于平台和目的。Instagram允许最多2200个字符但更短通常表现更好。Twitter限制在280个字符。LinkedIn帖子可以更长。与您的受众测试不同长度。' },
      { question: '我应该在标题中使用表情符号吗？', answer: '表情符号可以通过增加视觉兴趣和个性来提高参与度。使用它们来分隔文本、强调要点或增加情感。适当的数量取决于您的品牌声音和平台。' },
      { question: '应该包含多少个标签？', answer: 'Instagram：3-10个相关标签。Twitter：最多1-2个。LinkedIn：最后3-5个。TikTok：3-5个趋势和利基标签。质量和相关性比数量更重要。' },
      { question: '标题的最佳行动呼吁是什么？', answer: '匹配CTA与您的目标：参与用"评论告诉我"，有价值内容用"保存这个"，转化用"链接在简介"，触及用"分享给某人..."，讨论用"你怎么看？"' },
      { question: '如何写获得更多评论的标题？', answer: '提出具体问题，分享意见并邀请辩论，使用"这个或那个"提示，分享激发好奇心的不完整故事，或向受众寻求建议和推荐。' },
      { question: '每个平台的标题应该写得不同吗？', answer: '是的。每个平台都有不同的字符限制、受众期望和最佳实践。谈论同一话题的LinkedIn帖子应该比Instagram标题更专业。' },
      { question: '如何在标题中保持品牌声音？', answer: '创建标题模板和指南，使用一致的词汇和短语，保持类似的表情符号和格式风格，并确保所有帖子的语气与您的品牌个性匹配。' },
      { question: '标题中最重要的部分是什么？', answer: '第一行（钩子）最重要，因为它是用户点击"更多"之前看到的内容。使它足够引人注目以赢得点击并阻止滚动。' },
      { question: '应该多久发布带有新标题的帖子？', answer: '发布频率取决于您的平台和创作优质内容的能力。一致性比频率更重要。专注于优质标题而不是大量平庸的标题。' },
    ],
  },

  // ==================== CHINESE TRANSLATION COMPLETE ====================

  'introduction-generator': {
    slug: 'introduction-generator',
    name: '引言生成器',
    title: '免费AI引言生成器',
    description: '创建从第一句话就吸引读者的引人入胜的引言。适用于博客、论文和文章。',
    metaDescription: '创建从第一句话就吸引读者的引人入胜的引言。我们的免费AI工具生成令人信服的开头。立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '文章主题和关键点...',
    inputPlaceholder: '例如：主题：远程工作生产力。关键点：灵活性、工作生活平衡、沟通挑战',
    buttonText: '生成引言',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: '内容类型', choices: ['博客文章', '操作指南', '列表文章', '论文/观点', '产品评测', '研究/报告'], default: '博客文章', type: 'select' },
      { name: 'hookType', label: '钩子类型', choices: ['问题', '统计数据', '故事', '大胆声明', '共鸣'], default: '问题', type: 'select' },
      { name: 'tone', label: '语气', choices: ['专业', '休闲', '励志', '学术'], default: '专业', type: 'select' },
    ],
    systemPrompt: `You are an expert content writer specializing in crafting compelling introductions that hook readers.
Content Type: {{contentType}}
Hook Type: {{hookType}}
Tone: {{tone}}
Output only the introduction paragraph(s). No preamble.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '内容营销和博客开头', description: '内容创作者使用引言生成器创建立即吸引读者的引人入胜的开头。' },
      { title: '学术论文引言', description: '学生可以生成清晰建立论点的结构化引言。' },
      { title: '商业文档开头', description: '专业人士可以创建立即建立信息重要性的引言。' },
    ],
    faqs: [
      { question: '什么是好的引言？', answer: '强有力的引言立即吸引读者，建立相关性，呈现问题或机会，并承诺价值。' },
      { question: '引言生成器是免费的吗？', answer: '是的，无需注册或付费，完全免费。' },
      { question: '引言应该多长？', answer: '引言通常占总内容长度的10-15%。' },
    ],
  },

  'text-expander': {
    slug: 'text-expander',
    name: '文本扩展器',
    title: '免费AI文本扩展器',
    description: '将短句或段落扩展为更详细、更全面的内容，同时不失去原始含义。',
    metaDescription: '将短句或段落扩展为更详细的内容。我们的免费AI工具在不改变含义的情况下增加深度。立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '要扩展的文本...',
    inputPlaceholder: '在此粘贴您要扩展的短文本',
    buttonText: '扩展文本',
    maxLength: 2048,
    options: [
      { name: 'expansionLevel', label: '扩展级别', choices: ['轻度（1.5倍）', '中度（2倍）', '大幅（3倍）'], default: '中度（2倍）', type: 'select' },
      { name: 'method', label: '扩展方法', choices: ['添加示例', '添加解释', '添加细节', '均衡'], default: '均衡', type: 'select' },
      { name: 'tone', label: '语气', choices: ['正式', '休闲', '学术', '专业'], default: '专业', type: 'select' },
    ],
    systemPrompt: `You are an expert content writer specializing in expanding concise text into more detailed content while maintaining the original meaning.
Expansion Level: {{expansionLevel}}
Method: {{method}}
Tone: {{tone}}
Output only the expanded text. No preamble.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '内容开发', description: '作者使用文本扩展器将简洁的想法发展为包含示例和细节的完整内容。' },
      { title: '要点详述', description: '专业人士可以将要点或大纲扩展为完整的散文。' },
      { title: '学术写作', description: '学生可以将初始论点扩展为包含证据和分析的完整段落。' },
    ],
    faqs: [
      { question: '什么是文本扩展器？', answer: '文本扩展器将简短内容扩展为包含有意义的示例、解释和细节的更详细文本。' },
      { question: '文本扩展器是免费的吗？', answer: '是的，无需注册，完全免费。' },
      { question: '原始含义会保持不变吗？', answer: '保持原始含义是核心规则。' },
    ],
  },

  'youtube-video-title-generator': {
    slug: 'youtube-video-title-generator',
    name: 'YouTube视频标题生成器',
    title: '免费AI YouTube视频标题生成器',
    description: '生成获得观看量的吸引点击的YouTube视频标题。我们的AI创建SEO优化的标题。',
    metaDescription: '生成获得观看量的YouTube视频标题。我们的AI创建SEO优化的标题。立即在Analyze AI上免费试用此工具及更多免费工具。',
    inputLabel: '描述您的视频主题...',
    inputPlaceholder: '例如：人像照片编辑的Lightroom教程',
    buttonText: '生成标题',
    maxLength: 2048,
    options: [
      { name: 'style', label: '标题风格', choices: ['信息性/清晰', '吸引人/标题党', '问题', '列表/数字', '教程'], default: '信息性/清晰', type: 'select' },
      { name: 'video_type', label: '视频类型', choices: ['教程/教育', '娱乐/Vlog', '评测/产品', '游戏', '新闻/评论'], default: '教程/教育', type: 'select' },
    ],
    systemPrompt: `You are an expert YouTube content strategist specializing in creating compelling video titles.
Style: {{style}}
Video Type: {{video_type}}
Generate 8-10 title options under 60 characters when possible. For each title, briefly explain why it works.

IMPORTANT: Generate all output in Chinese.`,
    useCases: [
      { title: '点击率优化', description: 'YouTube创作者使用生成器创建最大化点击率的标题。' },
      { title: '视频SEO改善', description: '通过关键词优化的标题提高搜索可见性。' },
      { title: '标题A/B测试', description: '测试不同的标题方法以找到最佳方案。' },
    ],
    faqs: [
      { question: 'YouTube视频标题应该多长？', answer: 'YouTube允许最多100个字符，但建议60-70个字符以在搜索结果中完全显示。' },
      { question: '标题会影响YouTube SEO吗？', answer: '是的，标题是最重要的排名因素之一。' },
    ],
  },
};
