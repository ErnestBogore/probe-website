export interface ToolOption {
  name: string;
  label: string;
  choices: string[];
  default?: string;
  type?: 'select' | 'radio'; // select = dropdown, radio = radio buttons
}

export interface UseCase {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ToolConfig {
  slug: string;
  name: string;
  title: string;
  description: string;
  metaDescription: string;
  inputLabel: string;
  inputPlaceholder: string;
  buttonText: string;
  maxLength: number;
  options: ToolOption[];
  systemPrompt: string;
  useCases: UseCase[];
  faqs: FAQ[];
}

export const tools: Record<string, ToolConfig> = {
  'paragraph-generator': {
    slug: 'paragraph-generator',
    name: 'Paragraph Generator',
    title: 'Free AI Paragraph Generator',
    description: 'Get your writing process off to a great start by generating fully coherent, compelling paragraphs.',
    metaDescription: 'Generate compelling paragraphs for any topic with our free AI paragraph generator. Perfect for blog posts, articles, and content creation.',
    inputLabel: 'Write about...',
    inputPlaceholder: 'e.g. Why it\'s important to eat broccoli',
    buttonText: 'Generate Paragraph',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Format as',
        choices: ['Paragraphs', 'Bullet points'],
        default: 'Paragraphs',
        type: 'radio',
      },
      {
        name: 'length',
        label: 'Write',
        choices: ['1 paragraph', '2 paragraphs', '3 paragraphs'],
        default: '1 paragraph',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Writing tone',
        choices: ['Formal', 'Casual', 'Professional', 'Friendly'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['1 variant', '3 variants', '5 variants'],
        default: '1 variant',
        type: 'select',
      },
    ],
    systemPrompt: `You are a skilled human writer. Write about the given topic naturally, like a real person would.

Rules:
- Write {{length}} in {{format}} format
- Use a {{tone}} tone
- Generate {{variants}}
- Use simple, clear language. Avoid fancy words like "crucial", "essential", "comprehensive", "robust", "leverage", "utilize", "facilitate"
- Write like you're explaining to a friend. Be direct.
- Vary sentence length. Mix short punchy sentences with longer ones.
- Start sentences differently. Don't start multiple sentences with "The" or "This"
- Use contractions naturally (it's, don't, won't, can't)
- Avoid clichés and overused phrases
- No filler words or unnecessary qualifiers
- Keep the original meaning but make it sound human
- Preserve paragraph breaks between sections

If generating multiple variants, separate each with a blank line and label them (Variant 1:, Variant 2:, etc.)

Output only the content. No preamble, no explanation.`,
    useCases: [
      {
        title: 'Blog post drafting',
        description: 'Kickstart your blog writing by generating opening paragraphs, body sections, or conclusions. Get past writer\'s block and build momentum for your content creation process.',
      },
      {
        title: 'Product descriptions',
        description: 'Create compelling product descriptions for e-commerce listings. Generate multiple variations to A/B test which copy resonates best with your target audience.',
      },
      {
        title: 'Social media content',
        description: 'Produce engaging social media posts and captions. Generate content that captures attention and drives engagement across different platforms.',
      },
    ],
    faqs: [
      {
        question: 'How does the AI Paragraph Generator work?',
        answer: 'Our paragraph generator uses advanced AI to create human-like text based on your topic. Simply enter what you want to write about, select your preferred format and tone, and the AI generates coherent paragraphs tailored to your needs.',
      },
      {
        question: 'Is the generated content unique?',
        answer: 'Yes, each generation produces original content. The AI creates fresh paragraphs based on your specific input, so you\'ll get unique text every time you use the tool.',
      },
      {
        question: 'Can I use the generated content commercially?',
        answer: 'Absolutely. The content generated is yours to use however you like, including for commercial purposes such as blog posts, marketing materials, and product descriptions.',
      },
      {
        question: 'What makes this different from other AI writers?',
        answer: 'Our tool is specifically tuned to produce natural, human-sounding text. We\'ve optimized the prompts to avoid common AI writing patterns and deliver content that reads like it was written by a person.',
      },
    ],
  },

  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: 'Paragraph Rewriter',
    title: 'Free AI Paragraph Rewriter',
    description: 'Improve any paragraph\'s readability and rewrite it to make it sound more human-like with this powerful free tool.',
    metaDescription: 'Rewrite paragraphs to sound more natural and human-like. Free AI paragraph rewriter for essays, articles, and content.',
    inputLabel: 'Rewrite this copy...',
    inputPlaceholder: 'Paste your paragraph here to rewrite it',
    buttonText: 'Rewrite Paragraph',
    maxLength: 2048,
    options: [
      {
        name: 'format',
        label: 'Format as',
        choices: ['Paragraphs', 'Bullet points'],
        default: 'Paragraphs',
        type: 'radio',
      },
      {
        name: 'length',
        label: 'Write',
        choices: ['1 paragraph', '2 paragraphs', '3 paragraphs'],
        default: '1 paragraph',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Writing tone',
        choices: ['Formal', 'Casual', 'Professional', 'Friendly'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'variants',
        label: 'Generate',
        choices: ['1 variant', '3 variants', '5 variants'],
        default: '1 variant',
        type: 'select',
      },
    ],
    systemPrompt: `You are a skilled human editor. Rewrite the given text to sound more natural and human-like.

Rules:
- Output {{length}} in {{format}} format
- Use a {{tone}} tone
- Generate {{variants}}
- Keep the same meaning but improve clarity and flow
- Use simple, everyday words. Avoid: "crucial", "essential", "comprehensive", "robust", "leverage", "utilize", "facilitate", "nuanced", "multifaceted"
- Write like a real person talks. Be direct and clear.
- Vary sentence length naturally
- Use contractions (it's, don't, won't, can't, you're)
- Remove filler words and unnecessary qualifiers
- Preserve the original structure and paragraph breaks

If generating multiple variants, separate each with a blank line and label them (Variant 1:, Variant 2:, etc.)

Output only the rewritten content. No preamble, no explanation.`,
    useCases: [
      {
        title: 'Content editing and revision',
        description: 'Enhance and refine your written content quickly. Get a rewritten version with improved clarity, structure, and flow without spending hours on manual editing.',
      },
      {
        title: 'Avoiding repetitive language',
        description: 'When you\'ve used the same phrasing too many times, the rewriter helps you find fresh ways to express the same ideas while keeping your original meaning intact.',
      },
      {
        title: 'Improving readability',
        description: 'Transform complex or awkward sentences into clear, easy-to-read content. Perfect for making technical content more accessible to general audiences.',
      },
    ],
    faqs: [
      {
        question: 'Will the rewriter change my original meaning?',
        answer: 'No, the rewriter is designed to preserve your original meaning while improving how it\'s expressed. It focuses on clarity, flow, and natural language without altering the core message.',
      },
      {
        question: 'How is this different from the paragraph generator?',
        answer: 'The generator creates new content from a topic, while the rewriter takes your existing text and improves it. Use the generator when starting from scratch, and the rewriter when polishing existing content.',
      },
      {
        question: 'Can I rewrite content in different tones?',
        answer: 'Yes, you can select different tones like Formal, Casual, Professional, or Friendly. The rewriter will adjust the language style while keeping your original message.',
      },
      {
        question: 'Is there a limit to how much text I can rewrite?',
        answer: 'You can rewrite up to 2,048 characters at a time. For longer content, we recommend breaking it into smaller sections for better results.',
      },
    ],
  },

  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: 'Meta Description Generator',
    title: 'Free AI Meta Description Generator',
    description: 'Create SEO-optimized meta descriptions that drive clicks and improve your search rankings.',
    metaDescription: 'Generate compelling meta descriptions for your web pages with our free AI tool. Boost CTR and SEO performance.',
    inputLabel: 'Page topic or title...',
    inputPlaceholder: 'e.g. Best running shoes for beginners in 2024',
    buttonText: 'Generate Meta Description',
    maxLength: 2048,
    options: [
      {
        name: 'variants',
        label: 'Generate',
        choices: ['1 variant', '3 variants', '5 variants'],
        default: '3 variants',
      },
      {
        name: 'tone',
        label: 'Tone',
        choices: ['Professional', 'Casual', 'Persuasive'],
        default: 'Professional',
      },
    ],
    systemPrompt: `You are an SEO expert specializing in meta descriptions. Generate meta descriptions that are:
- Between 150-160 characters
- Include a clear value proposition
- Have a call-to-action when appropriate
- Are compelling and click-worthy

Instructions:
- Number of variants: {{variants}}
- Tone: {{tone}}

Output each meta description on its own line, numbered. Do not include any preamble - just the meta descriptions.`,
    useCases: [
      {
        title: 'SEO optimization',
        description: 'Create compelling meta descriptions that improve click-through rates from search results. Well-crafted descriptions help your pages stand out and attract more organic traffic.',
      },
      {
        title: 'Bulk content updates',
        description: 'Quickly generate meta descriptions for multiple pages when launching a new site or updating existing content. Save hours of manual writing time.',
      },
      {
        title: 'A/B testing variations',
        description: 'Generate multiple description variants to test which messaging resonates best with your audience and drives the highest engagement.',
      },
    ],
    faqs: [
      {
        question: 'What is the ideal meta description length?',
        answer: 'Google typically displays 150-160 characters. Our tool generates descriptions within this range to ensure they display fully in search results without being cut off.',
      },
      {
        question: 'Do meta descriptions affect SEO rankings?',
        answer: 'While meta descriptions don\'t directly impact rankings, they significantly affect click-through rates. A compelling description can increase clicks, which indirectly benefits your SEO.',
      },
      {
        question: 'Should every page have a unique meta description?',
        answer: 'Yes, each page should have a unique description that accurately reflects its content. Duplicate descriptions can confuse search engines and users.',
      },
    ],
  },

  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: 'Paraphrasing Tool',
    title: 'Free AI Paraphrasing Tool',
    description: 'Quickly rephrase and reword any text for essays, articles, emails, and more.',
    metaDescription: 'Paraphrase any text instantly with our free AI paraphrasing tool. Perfect for essays, articles, and content rewriting.',
    inputLabel: 'Text to paraphrase...',
    inputPlaceholder: 'Paste your text here to paraphrase it',
    buttonText: 'Paraphrase',
    maxLength: 2048,
    options: [
      {
        name: 'mode',
        label: 'Mode',
        choices: ['Standard', 'Fluency', 'Creative', 'Formal', 'Simple'],
        default: 'Standard',
      },
    ],
    systemPrompt: `You are an expert editor and writer. Paraphrase the given text while maintaining its original meaning.

Mode: {{mode}}
- Standard: Balanced rewrite maintaining tone and complexity
- Fluency: Focus on smooth, natural flow
- Creative: More varied vocabulary and structure
- Formal: Professional, academic tone
- Simple: Easier to understand, simpler words

Output only the paraphrased text. Do not include any preamble or explanation.`,
    useCases: [
      {
        title: 'Academic writing',
        description: 'Rephrase source material for essays and research papers while maintaining the original meaning. Helps avoid plagiarism while incorporating ideas from your research.',
      },
      {
        title: 'Email and communication',
        description: 'Quickly reword messages to adjust tone or clarity. Perfect for professional emails where you need to strike the right balance.',
      },
      {
        title: 'Content repurposing',
        description: 'Transform existing content for different platforms or audiences. Adapt blog posts for social media, or simplify technical content for general readers.',
      },
    ],
    faqs: [
      {
        question: 'What\'s the difference between paraphrasing and rewriting?',
        answer: 'Paraphrasing focuses on expressing the same ideas in different words while keeping similar length. Rewriting may involve more substantial changes to structure and style.',
      },
      {
        question: 'Which mode should I use?',
        answer: 'Use Standard for general purposes, Fluency for smoother reading, Creative for more varied expression, Formal for professional contexts, and Simple for easier comprehension.',
      },
      {
        question: 'Can I use this for academic work?',
        answer: 'Yes, but always cite your original sources. Paraphrasing helps you express ideas in your own words, but the original author still deserves credit for the concepts.',
      },
    ],
  },

  'summarizer': {
    slug: 'summarizer',
    name: 'Summarizer Tool',
    title: 'Free AI Summarizer Tool',
    description: 'Simplify content and save time with our powerful AI summarizer. Summarize with precision, read smarter.',
    metaDescription: 'Summarize any text instantly with our free AI summarizer. Perfect for articles, documents, and research papers.',
    inputLabel: 'Text to summarize...',
    inputPlaceholder: 'Paste your text here to get a summary',
    buttonText: 'Summarize',
    maxLength: 4096,
    options: [
      {
        name: 'length',
        label: 'Summary length',
        choices: ['Brief (1-2 sentences)', 'Short (1 paragraph)', 'Detailed (2-3 paragraphs)'],
        default: 'Short (1 paragraph)',
      },
      {
        name: 'format',
        label: 'Format',
        choices: ['Paragraph', 'Bullet points', 'Key takeaways'],
        default: 'Paragraph',
      },
    ],
    systemPrompt: `You are an expert at distilling information. Summarize the given text accurately and concisely.

Instructions:
- Length: {{length}}
- Format: {{format}}

Capture the main points and key information. Output only the summary without any preamble.`,
    useCases: [
      {
        title: 'Research and study',
        description: 'Quickly digest long articles, research papers, or reports. Extract key points to understand the main ideas without reading every word.',
      },
      {
        title: 'Meeting preparation',
        description: 'Summarize lengthy documents before meetings to get up to speed quickly. Focus on what matters without getting lost in details.',
      },
      {
        title: 'Content curation',
        description: 'Create brief summaries of articles for newsletters, social media, or content roundups. Help your audience understand the value before they click.',
      },
    ],
    faqs: [
      {
        question: 'How long should my input text be?',
        answer: 'You can summarize text up to 4,096 characters. For longer documents, break them into sections and summarize each part separately.',
      },
      {
        question: 'Will the summary capture all important points?',
        answer: 'The AI identifies and prioritizes the main ideas and key information. For complex documents, you may want to use the "Detailed" length option to capture more nuance.',
      },
      {
        question: 'Can I summarize content in different languages?',
        answer: 'The tool works best with English content. While it may handle other languages, results are most reliable in English.',
      },
    ],
  },

  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: 'Blog Title Generator',
    title: 'Free AI Blog Title Generator',
    description: 'Generate catchy, click-worthy blog titles that drive traffic and engagement.',
    metaDescription: 'Create compelling blog titles with our free AI blog title generator. Get click-worthy headlines in seconds.',
    inputLabel: 'Blog topic...',
    inputPlaceholder: 'e.g. How to start a successful podcast',
    buttonText: 'Generate Titles',
    maxLength: 1024,
    options: [
      {
        name: 'variants',
        label: 'Generate',
        choices: ['5 titles', '10 titles', '15 titles'],
        default: '10 titles',
      },
      {
        name: 'style',
        label: 'Style',
        choices: ['How-to', 'Listicle', 'Question', 'Mixed'],
        default: 'Mixed',
      },
    ],
    systemPrompt: `You are a content strategist expert at creating viral blog titles. Generate blog titles that are:
- Attention-grabbing and click-worthy
- SEO-friendly
- Clear about the value proposition
- Varied in structure

Instructions:
- Number of titles: {{variants}}
- Style preference: {{style}}

Output each title on its own line, numbered. Do not include any preamble - just the titles.`,
    useCases: [
      {
        title: 'Content planning',
        description: 'Generate multiple title options during your content planning phase. Compare different angles and approaches to find the most compelling hook for your audience.',
      },
      {
        title: 'SEO optimization',
        description: 'Create titles that balance reader appeal with search engine optimization. Get variations that include keywords naturally while remaining click-worthy.',
      },
      {
        title: 'Social media headlines',
        description: 'Adapt your blog titles for social media posts. Generate attention-grabbing variations optimized for different platforms and audiences.',
      },
    ],
    faqs: [
      {
        question: 'What makes a good blog title?',
        answer: 'Good titles are specific, promise value, create curiosity, and are optimized for both readers and search engines. They should clearly communicate what the reader will learn or gain.',
      },
      {
        question: 'Should I use the exact title generated?',
        answer: 'Use the generated titles as starting points. Feel free to tweak them to better match your voice, add specific keywords, or adjust for your audience.',
      },
      {
        question: 'How many titles should I generate?',
        answer: 'We recommend generating 10 titles to give yourself plenty of options. You can then pick the best one or combine elements from multiple suggestions.',
      },
    ],
  },
};

export function getToolBySlug(slug: string): ToolConfig | undefined {
  return tools[slug];
}

export function getAllTools(): ToolConfig[] {
  return Object.values(tools);
}

export function buildPrompt(systemPrompt: string, options: Record<string, string>): string {
  let prompt = systemPrompt;
  for (const [key, value] of Object.entries(options)) {
    prompt = prompt.replace(new RegExp(`{{${key}}}`, 'g'), value);
  }
  return prompt;
}
