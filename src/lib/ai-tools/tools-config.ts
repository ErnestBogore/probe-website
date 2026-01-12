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
    description: 'Generate well-structured paragraphs in seconds. Perfect for blog posts, essays, emails, and more. No signup required.',
    metaDescription: 'Generate well-structured paragraphs in seconds with our free AI paragraph generator. Perfect for blog posts, essays, emails, and more. No signup required.',
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

Self-check before output: Read the paragraph mentally. If any sentence feels like filler or could be deleted without losing meaning, rewrite it. If the paragraph could apply to any generic article, add a specific detail or example.`,
    useCases: [
      {
        title: 'Content marketing and blogging',
        description: 'Writers and marketers can use the Paragraph Generator to overcome writer\'s block and produce first drafts quickly. Whether you\'re creating blog posts, landing page copy, or newsletter content, the tool generates coherent paragraphs based on your topic or prompt, giving you a solid foundation to edit and refine rather than starting from a blank page.',
      },
      {
        title: 'Academic and professional writing',
        description: 'Students working on essays, researchers drafting papers, or professionals preparing reports can leverage the Paragraph Generator to articulate complex ideas clearly. By inputting key points or thesis statements, users receive structured paragraphs that present arguments logically, helping maintain momentum during lengthy writing projects.',
      },
      {
        title: 'Everyday communication',
        description: 'From crafting thoughtful emails to writing personal statements or cover letters, the Paragraph Generator helps anyone who needs to communicate clearly in writing. It\'s particularly useful for non-native English speakers or anyone who wants to express ideas more eloquently without spending hours on composition.',
      },
    ],
    faqs: [
      {
        question: 'What is a paragraph generator?',
        answer: 'A paragraph generator is an AI-powered tool that creates coherent, contextually relevant paragraphs based on a topic, prompt, or set of instructions you provide. It uses natural language processing to understand your input and produce human-like text.',
      },
      {
        question: 'Is this paragraph generator free to use?',
        answer: 'Yes, our paragraph generator is completely free with no hidden costs. You can generate paragraphs without creating an account or providing payment information.',
      },
      {
        question: 'How does the AI paragraph generator work?',
        answer: 'The tool uses a large language model trained on diverse text data. When you enter a topic or prompt, the AI analyzes the context and generates a paragraph that follows natural language patterns, proper grammar, and logical structure.',
      },
      {
        question: 'Can I use the generated paragraphs for commercial purposes?',
        answer: 'Yes, the paragraphs you generate are yours to use however you like, including for commercial content such as blog posts, marketing materials, or product descriptions.',
      },
      {
        question: 'How long are the paragraphs the tool generates?',
        answer: 'Generated paragraphs typically range from 3-6 sentences, though this varies based on the complexity of your prompt. You can request longer or shorter outputs by specifying your preference in the instructions.',
      },
      {
        question: 'Will the generated content be unique?',
        answer: 'The AI creates original content each time based on your specific prompt. However, we recommend reviewing and editing the output to add your unique voice and verify accuracy before publishing.',
      },
      {
        question: 'What topics can I generate paragraphs about?',
        answer: 'The paragraph generator can create content on virtually any topic—business, technology, health, education, lifestyle, and more. The quality of output improves when you provide clear, specific prompts.',
      },
      {
        question: 'Can I generate multiple paragraphs at once?',
        answer: 'You can run the tool multiple times to generate several paragraphs, or specify in your prompt that you need multiple paragraphs on related subtopics.',
      },
      {
        question: 'Is the generated content SEO-friendly?',
        answer: 'The tool produces natural, readable content that works well for SEO. For best results, you can include target keywords in your prompt so the AI incorporates them organically into the paragraph.',
      },
      {
        question: 'Do I need to edit the paragraphs after generating them?',
        answer: 'While the AI produces quality first drafts, we recommend reviewing and editing the output to ensure accuracy, add personal insights, and tailor the tone to your specific audience.',
      },
    ],
  },

  'paragraph-rewriter': {
    slug: 'paragraph-rewriter',
    name: 'Paragraph Rewriter',
    title: 'Free AI Paragraph Rewriter',
    description: 'Rewrite paragraphs to improve clarity, change tone, or create unique variations of your text while preserving the original meaning.',
    metaDescription: 'Rewrite paragraphs with our free AI tool. Improve clarity, change tone, or create unique variations of your text while preserving the original meaning.',
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

Self-check before output: Compare the rewrite to the original. Did you preserve the meaning? Did you actually improve it, or just change it? If the rewrite isn't clearly better, revise again.`,
    useCases: [
      {
        title: 'Improving content clarity and readability',
        description: 'Writers and editors use the Paragraph Rewriter to transform dense or awkwardly worded text into clear, flowing prose. Whether you\'ve drafted something quickly or received content that needs polishing, the tool restructures sentences and improves word choice while maintaining your original message.',
      },
      {
        title: 'Creating unique content variations',
        description: 'Content marketers managing multiple platforms or running A/B tests can generate different versions of the same core message. The rewriter produces fresh variations for social media posts, email campaigns, or ad copy, helping you avoid repetition across channels while staying on message.',
      },
      {
        title: 'Avoiding plagiarism and refreshing existing content',
        description: 'Students, researchers, and content creators can use the Paragraph Rewriter to express sourced information in their own words or update older content. The tool helps you rephrase text substantially enough to create original work while preserving the essential meaning and facts.',
      },
    ],
    faqs: [
      {
        question: 'What does a paragraph rewriter do?',
        answer: 'A paragraph rewriter takes your existing text and reformulates it using different words, sentence structures, and phrasing while keeping the core meaning intact. It\'s useful for improving clarity, avoiding repetition, or creating unique versions of content.',
      },
      {
        question: 'Is the paragraph rewriter free?',
        answer: 'Yes, this tool is completely free to use. There are no subscriptions, hidden fees, or usage limits that require payment.',
      },
      {
        question: 'How is rewriting different from paraphrasing?',
        answer: 'While both involve restating text differently, rewriting typically involves more substantial changes to structure, tone, and style. Paraphrasing focuses on expressing the same idea in different words, while rewriting may also improve readability, adjust the tone, or reorganize information.',
      },
      {
        question: 'Will the rewritten paragraph have the same meaning as the original?',
        answer: 'The AI is designed to preserve your original meaning while changing the expression. However, always review the output to ensure the rewritten version accurately captures your intended message, especially for technical or nuanced content.',
      },
      {
        question: 'Can I choose the tone of the rewritten paragraph?',
        answer: 'Yes, you can specify the desired tone in your instructions—whether you want the text to be more formal, casual, persuasive, or simplified. The AI will adjust its output accordingly.',
      },
      {
        question: 'Is the rewritten content plagiarism-free?',
        answer: 'The tool generates new phrasing and structure, producing text that differs from the original. However, if you\'re rewriting someone else\'s content, proper attribution may still be required depending on your use case.',
      },
      {
        question: 'How much of the original text gets changed?',
        answer: 'The degree of change depends on your instructions and the original text\'s complexity. The AI typically modifies word choice, sentence structure, and flow while ensuring the core message remains recognizable.',
      },
      {
        question: 'Can I rewrite content in languages other than English?',
        answer: 'The tool is optimized for English text. While it may work with other languages, results are most reliable when rewriting English paragraphs.',
      },
      {
        question: 'What\'s the maximum length I can rewrite at once?',
        answer: 'The tool works best with standard paragraphs (roughly 100-300 words). For longer content, we recommend rewriting one paragraph at a time for optimal results.',
      },
      {
        question: 'Should I edit the rewritten paragraph before using it?',
        answer: 'Yes, we recommend reviewing all AI-generated content. Check that the rewritten version accurately reflects your intended meaning, fits your brand voice, and reads naturally in context.',
      },
    ],
  },

  'meta-description-generator': {
    slug: 'meta-description-generator',
    name: 'Meta Description Generator',
    title: 'Free AI Meta Description Generator',
    description: 'Create compelling meta descriptions that improve click-through rates. Generate optimized descriptions for any web page in seconds.',
    metaDescription: 'Create compelling meta descriptions that improve click-through rates. Our free AI tool generates optimized descriptions for any web page in seconds.',
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

Self-check before output: If the description could apply to any generic article on this topic, rewrite it to be specific. If it exceeds 155 characters, trim without losing the core promise.`,
    useCases: [
      {
        title: 'SEO optimization for websites and blogs',
        description: 'Website owners and SEO specialists use the Meta Description Generator to create compelling snippets that appear in search results. Well-crafted meta descriptions improve click-through rates by giving searchers a clear, enticing preview of your page content, directly impacting organic traffic.',
      },
      {
        title: 'Scaling content production',
        description: 'Marketing teams and agencies managing multiple websites or large content libraries can generate consistent, quality meta descriptions at scale. Instead of spending time manually writing descriptions for hundreds of pages, the tool produces optimized descriptions quickly, freeing up resources for strategy and analysis.',
      },
      {
        title: 'E-commerce product pages',
        description: 'Online store owners can create unique, persuasive meta descriptions for product pages that highlight key features and benefits. Effective product descriptions in search results help shoppers understand what you offer before they click, attracting more qualified traffic to your listings.',
      },
    ],
    faqs: [
      {
        question: 'What is a meta description?',
        answer: 'A meta description is an HTML attribute that provides a brief summary of a web page\'s content. It appears below the page title in search engine results and influences whether users click through to your site.',
      },
      {
        question: 'Why are meta descriptions important for SEO?',
        answer: 'While meta descriptions aren\'t a direct ranking factor, they significantly impact click-through rates. A compelling description that matches search intent attracts more clicks, which can indirectly improve your search performance over time.',
      },
      {
        question: 'How long should a meta description be?',
        answer: 'Optimal meta descriptions are between 150-160 characters. Google typically truncates descriptions longer than 160 characters in search results, so the tool generates descriptions within this recommended range.',
      },
      {
        question: 'Is this meta description generator free?',
        answer: 'Yes, the tool is completely free with no signup required. You can generate as many meta descriptions as you need without any cost.',
      },
      {
        question: 'What information should I provide to get the best results?',
        answer: 'For optimal results, input your page\'s main topic, target keyword, and the key benefit or value proposition you want to communicate. The more context you provide, the more relevant and compelling the generated description will be.',
      },
      {
        question: 'Can I include keywords in my meta description?',
        answer: 'Yes, and you should. Including your target keyword helps the description match search queries. When your keyword appears in the meta description, Google often bolds it in search results, making your listing more eye-catching.',
      },
      {
        question: 'Should every page have a unique meta description?',
        answer: 'Yes, each page should have a distinct meta description that accurately reflects that specific page\'s content. Duplicate descriptions across pages can confuse search engines and reduce click-through rates.',
      },
      {
        question: 'Will the tool generate descriptions for any type of page?',
        answer: 'The generator works for all page types—blog posts, product pages, service pages, landing pages, and more. Simply describe your page content and the AI will create an appropriate description.',
      },
      {
        question: 'How do I add the meta description to my website?',
        answer: 'Most content management systems (WordPress, Shopify, Wix, etc.) have a dedicated field for meta descriptions in the page editor or through SEO plugins like Yoast or Rank Math. Copy your generated description and paste it into the appropriate field.',
      },
      {
        question: 'Can I edit the generated meta description?',
        answer: 'Absolutely, and we encourage it. While the AI produces strong first drafts, reviewing and tweaking descriptions to match your brand voice and specific messaging ensures the best results.',
      },
    ],
  },

  'paraphrasing-tool': {
    slug: 'paraphrasing-tool',
    name: 'Paraphrasing Tool',
    title: 'Free AI Paraphrasing Tool',
    description: 'Paraphrase any text instantly. Reword sentences and paragraphs while keeping the original meaning. Perfect for students and writers.',
    metaDescription: 'Paraphrase any text instantly with our free AI tool. Reword sentences and paragraphs while keeping the original meaning. Perfect for students and writers.',
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

Self-check before output: If someone read only the paraphrase, would they understand exactly the same thing as if they read the original? If not, revise. If the paraphrase is too similar (just swapped a few words), transform it more substantially.`,
    useCases: [
      {
        title: 'Academic integrity and research writing',
        description: 'Students and researchers use the Paraphrasing Tool to restate information from sources in their own words, a critical skill for avoiding plagiarism. The tool helps express complex ideas from academic papers, articles, or textbooks in fresh language while maintaining the original meaning and accuracy.',
      },
      {
        title: 'Content repurposing across platforms',
        description: 'Digital marketers and content creators can adapt existing content for different channels without duplicating text verbatim. Transform a blog post section into social media copy, rework website content for email newsletters, or create multiple variations of key messaging for different audience segments.',
      },
      {
        title: 'Simplifying complex language',
        description: 'Professionals who need to translate jargon-heavy or technical text into accessible language benefit from the Paraphrasing Tool. Whether you\'re explaining medical information to patients, breaking down legal terms for clients, or making technical documentation user-friendly, the tool helps reframe complicated concepts clearly.',
      },
    ],
    faqs: [
      {
        question: 'What is paraphrasing?',
        answer: 'Paraphrasing is the process of restating text using different words and sentence structures while preserving the original meaning. It\'s a fundamental skill in writing that demonstrates understanding and helps avoid plagiarism.',
      },
      {
        question: 'How does the AI paraphrasing tool work?',
        answer: 'The tool analyzes your input text to understand its meaning, then generates alternative ways to express the same ideas using different vocabulary, sentence structures, and phrasing patterns.',
      },
      {
        question: 'Is this paraphrasing tool free to use?',
        answer: 'Yes, the tool is completely free. You can paraphrase text as many times as you need without signing up or paying anything.',
      },
      {
        question: 'Is paraphrased content considered original?',
        answer: 'When done properly, paraphrased content expresses ideas in your own words and is considered original. However, even paraphrased ideas that originate from other sources should be properly cited in academic and professional contexts.',
      },
      {
        question: 'Can I paraphrase any type of text?',
        answer: 'The tool works with most text types, including articles, essays, reports, emails, and web content. It handles various complexity levels, from simple sentences to technical or academic language.',
      },
      {
        question: 'Will the paraphrased text sound natural?',
        answer: 'The AI is designed to produce natural-sounding text that flows well. However, we recommend reading through the output to ensure it matches your voice and fits smoothly into your larger document.',
      },
      {
        question: 'How do I get the best paraphrasing results?',
        answer: 'Provide clear, complete sentences or paragraphs. Fragmented or unclear input may produce less accurate results. You can also specify if you want the output to be more formal, simpler, or in a particular style.',
      },
      {
        question: 'Can I paraphrase text in other languages?',
        answer: 'The tool is optimized for English. While it may work with other languages, accuracy and fluency are highest when paraphrasing English text.',
      },
      {
        question: 'What\'s the difference between paraphrasing and summarizing?',
        answer: 'Paraphrasing restates content in different words while maintaining similar length and detail. Summarizing condenses text into a shorter version that captures only the main points.',
      },
      {
        question: 'Should I check the paraphrased content before using it?',
        answer: 'Yes, always review AI-generated content. Verify that the paraphrased version accurately reflects the original meaning and that no unintended changes in meaning have occurred.',
      },
    ],
  },

  'summarizer': {
    slug: 'summarizer',
    name: 'Summarizer Tool',
    title: 'Free AI Summarizer Tool',
    description: 'Condense long articles, documents, and text into clear, concise summaries. Extract key points in seconds.',
    metaDescription: 'Condense long articles, documents, and text into clear, concise summaries. Our free AI summarizer extracts key points in seconds. Try it now.',
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

Self-check before output: Could someone who only reads the summary understand the essential message of the original? Is any critical information missing? Is any included information not actually important? Revise if needed.`,
    useCases: [
      {
        title: 'Research and information gathering',
        description: 'Students, researchers, and professionals processing large volumes of text use the Summarizer to quickly extract key insights from articles, papers, and reports. Instead of reading every document in full, you can generate summaries to identify which sources are most relevant to your needs.',
      },
      {
        title: 'Content curation and knowledge sharing',
        description: 'Team leads, newsletter writers, and content curators can summarize industry articles, reports, or meeting notes to share essential information with their audience. The tool helps you distill lengthy content into digestible takeaways that busy readers can quickly absorb.',
      },
      {
        title: 'Study and revision efficiency',
        description: 'Students preparing for exams or professionals reviewing documentation can create concise summaries of lengthy materials. The Summarizer helps condense textbooks, lecture notes, or training materials into manageable study guides that highlight the most important concepts.',
      },
    ],
    faqs: [
      {
        question: 'What is a text summarizer?',
        answer: 'A text summarizer is an AI tool that condenses long-form content into shorter versions containing only the most important information. It identifies key points, main arguments, and essential details while removing redundant or less critical text.',
      },
      {
        question: 'How does the AI summarizer work?',
        answer: 'The tool uses natural language processing to analyze your text, identify the central themes and key information, and generate a condensed version that captures the essential meaning of the original content.',
      },
      {
        question: 'Is this summarizer tool free?',
        answer: 'Yes, the summarizer is completely free to use. There\'s no signup required and no limit on how many texts you can summarize.',
      },
      {
        question: 'How much does the tool shorten text?',
        answer: 'The compression ratio depends on the original text and your preferences. Typically, summaries are 20-30% of the original length, though you can request shorter or longer summaries based on your needs.',
      },
      {
        question: 'What types of content can I summarize?',
        answer: 'The tool works with articles, blog posts, research papers, reports, essays, meeting notes, emails, and most other text-based content. It handles various subjects and complexity levels effectively.',
      },
      {
        question: 'Does the summary capture all important points?',
        answer: 'The AI is trained to identify and prioritize key information. However, what\'s "important" can be subjective, so we recommend reviewing summaries to ensure they capture the specific points most relevant to your purpose.',
      },
      {
        question: 'Can I summarize content in other languages?',
        answer: 'The tool is optimized for English text. Performance with other languages may vary.',
      },
      {
        question: 'What\'s the maximum length of text I can summarize?',
        answer: 'The tool handles most standard documents well. For very long texts like full books or extensive reports, we recommend summarizing chapters or sections individually for best results.',
      },
      {
        question: 'Is the summarized content plagiarism-free?',
        answer: 'Summaries are generated using AI and express ideas in condensed form. However, if you\'re summarizing someone else\'s content for publication, proper attribution is still necessary.',
      },
      {
        question: 'Can I customize the length of the summary?',
        answer: 'Yes, you can specify whether you want a brief overview or a more detailed summary. Including instructions like "summarize in 3 sentences" or "provide a detailed summary" helps the AI adjust its output accordingly.',
      },
    ],
  },

  'blog-title-generator': {
    slug: 'blog-title-generator',
    name: 'Blog Title Generator',
    title: 'Free AI Blog Title Generator',
    description: 'Generate attention-grabbing blog titles that drive clicks and capture reader interest in seconds.',
    metaDescription: 'Generate attention-grabbing blog titles with our free AI tool. Create headlines that drive clicks and capture reader interest in seconds.',
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
    systemPrompt: `You are an expert SEO copywriter specializing in high-converting blog titles. Generate blog titles based on the user's topic and selected format.

## CORE RULES
- Every title must be ≤60 characters (hard limit)
- Place the primary keyword near the start of the title
- Never use clickbait or vague claims
- Avoid filler words like "the," "a," "and" when possible
- Each title must be distinct in angle—no duplicates

## FORMAT-SPECIFIC INSTRUCTIONS

### IF STYLE = "How-to"
- Start with "How to" followed by a clear action verb
- Promise a specific, measurable outcome
- Angles to cover: fastest path, lowest effort, mistake-avoiding, beginner-friendly, pro shortcut
- Add originality nuggets where natural: year tag, research tag, audience tag, speed tag

### IF STYLE = "Listicle"
- Start with a number (use odd numbers: 7, 9, 11, 13 for higher CTR)
- Include the keyword immediately after the number
- Add originality nuggets: year, audience, budget, alternatives, comparison

### IF STYLE = "Question"
- Start with What, Why, How, or When
- Target informational or pain-point intent
- Make the question mirror what the reader is actually asking
- Add context or specificity to stand out

### IF STYLE = "Mixed"
- Generate a variety covering: outcome-led, pain-first, authority-led, speed/simplicity, risk-reduction, and data-backed angles
- Mix formats (how-to, listicle, question, statement) across the set
- Prioritize titles that signal unique value or a contrarian take

## OUTPUT FORMAT
- Number of titles: {{variants}}
- Style preference: {{style}}

Output each title on its own line, numbered, with character count in parentheses.

Self-check before output: If any title exceeds 60 characters, revise it. If any title sounds generic, rewrite it with a specific angle, audience, or originality nugget.`,
    useCases: [
      {
        title: 'Boosting blog traffic and engagement',
        description: 'Bloggers and content marketers use the Blog Title Generator to create compelling headlines that increase click-through rates from search results and social media. A great title is often the difference between content that gets read and content that gets ignored, making this tool essential for driving traffic.',
      },
      {
        title: 'Overcoming creative blocks',
        description: 'Writers who struggle with crafting the perfect headline can generate multiple title options quickly. Instead of spending time stuck on the title, you can produce a list of possibilities to choose from or use as inspiration, keeping your content creation process moving forward.',
      },
      {
        title: 'A/B testing and optimization',
        description: 'Marketing teams running title experiments can quickly generate multiple headline variations to test against each other. The tool helps you create diverse options—from question-based to list-style to emotional hooks—so you can discover what resonates best with your specific audience.',
      },
    ],
    faqs: [
      {
        question: 'What makes a good blog title?',
        answer: 'Effective blog titles are clear, specific, and create curiosity or promise value. They typically include the main topic, appeal to the reader\'s interests or problems, and stand out in crowded feeds and search results.',
      },
      {
        question: 'How does the blog title generator work?',
        answer: 'The AI analyzes your topic or keywords and generates headline options based on proven title formulas and patterns that drive engagement. It considers factors like emotional appeal, clarity, and click-worthiness.',
      },
      {
        question: 'Is the blog title generator free?',
        answer: 'Yes, the tool is completely free with no signup required. Generate as many title ideas as you need at no cost.',
      },
      {
        question: 'How many title options will I get?',
        answer: 'The tool typically generates multiple title suggestions so you have options to choose from. You can run it again with the same or modified input to get additional ideas.',
      },
      {
        question: 'Can I generate titles for any blog topic?',
        answer: 'Yes, the generator works across all niches and subjects—from business and technology to lifestyle, health, travel, and more. Simply enter your topic and the AI will create relevant title options.',
      },
      {
        question: 'Will the titles be optimized for SEO?',
        answer: 'You can include your target keyword in the prompt, and the AI will incorporate it naturally into the generated titles. This helps create headlines that work for both readers and search engines.',
      },
      {
        question: 'What title formats can the tool generate?',
        answer: 'The generator creates various formats including how-to titles, listicles, questions, statements, and curiosity-driven headlines. You can specify a preferred format in your instructions.',
      },
      {
        question: 'Should I edit the generated titles?',
        answer: 'While the AI produces strong options, tweaking titles to better match your brand voice or specific angle often improves results. Use the generated titles as starting points and customize as needed.',
      },
      {
        question: 'How long should my blog title be?',
        answer: 'Optimal blog titles are typically 50-60 characters to display fully in search results. The generator creates titles within this range, though you can request shorter or longer options.',
      },
      {
        question: 'Can I use the generated titles for other content types?',
        answer: 'Absolutely. While optimized for blog posts, the titles work well for articles, newsletter subjects, social media posts, videos, and other content formats that need compelling headlines.',
      },
    ],
  },

  'outline-generator': {
    slug: 'outline-generator',
    name: 'Outline Generator',
    title: 'Free AI Outline Generator',
    description: 'Generate structured outlines for blog posts, essays, and articles in seconds.',
    metaDescription: 'Generate structured outlines for blog posts, essays, and articles in seconds. Our free AI outline generator helps you organize ideas and write faster.',
    inputLabel: 'Topic or title...',
    inputPlaceholder: 'e.g. The benefits of remote work for small businesses',
    buttonText: 'Generate Outline',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'Content type', choices: ['Blog Post', 'How-to Guide', 'Listicle', 'Essay/Opinion', 'Product Review', 'Research/Report'], default: 'Blog Post', type: 'select' },
      { name: 'depth', label: 'Outline depth', choices: ['Basic (H2s only)', 'Standard (H2s + H3s)', 'Detailed (H2s + H3s + notes)'], default: 'Standard (H2s + H3s)', type: 'select' },
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

Generate a structured outline with headings and brief notes.`,
    useCases: [
      { title: 'Blog post and article planning', description: 'Content creators and marketers use the Outline Generator to transform rough topic ideas into organized, logical structures before writing. Instead of staring at a blank page, you get a clear roadmap with main sections, subsections, and notes on what to cover in each part, dramatically reducing the time from idea to first draft.' },
      { title: 'Academic essay and research paper organization', description: 'Students and researchers can use the Outline Generator to structure complex arguments, ensure logical flow between points, and identify gaps in their reasoning before committing to a full draft. The tool helps organize thesis statements, supporting evidence, counterarguments, and conclusions into a coherent framework.' },
      { title: 'Long-form content and documentation projects', description: 'Teams working on comprehensive guides, whitepapers, or technical documentation can generate master outlines that ensure consistency and completeness across large projects. The tool helps break down complex topics into manageable sections and ensures nothing important gets overlooked during the writing process.' },
    ],
    faqs: [
      { question: 'What is an outline generator?', answer: 'An outline generator is an AI-powered tool that takes your topic or rough ideas and organizes them into a structured framework with headings, subheadings, and key points. It creates a logical blueprint you can follow when writing your full content.' },
      { question: 'Is the outline generator free to use?', answer: 'Yes, our outline generator is completely free with no signup required. You can create as many outlines as you need without any cost or usage limits.' },
      { question: 'What types of content can I create outlines for?', answer: 'The tool works for virtually any written content: blog posts, articles, essays, research papers, how-to guides, listicles, product reviews, reports, whitepapers, and more. Simply specify your content type for the most relevant structure.' },
      { question: 'How detailed are the generated outlines?', answer: 'Outlines include main sections (H2 headings), subsections (H3 headings), and brief notes explaining what to cover in each part. The level of detail is designed to give you clear direction without being so prescriptive that it limits your creativity.' },
      { question: 'Can I customize the outline structure?', answer: 'Yes, the generated outline is a starting point. You can rearrange sections, add or remove headings, and modify the structure to fit your specific needs. Think of it as a first draft of your content\'s architecture.' },
      { question: 'Will the outline help with SEO?', answer: 'Outlines are structured with SEO best practices in mind, including logical heading hierarchy (H1, H2, H3) and suggestions for where to naturally incorporate keywords. Well-structured content tends to perform better in search results.' },
      { question: 'How long should my input topic be?', answer: 'You can input anything from a simple topic phrase ("benefits of remote work") to a more detailed brief with target audience, angle, and key points you want to cover. More context generally produces more tailored outlines.' },
      { question: 'Can I generate outlines for different content lengths?', answer: 'Yes, you can specify your target word count, and the tool will adjust the number of sections and depth accordingly. A 500-word blog post will have a simpler structure than a 3,000-word comprehensive guide.' },
      { question: 'Does the outline include word counts for each section?', answer: 'When you specify a target length, the tool provides estimated word counts for each section to help you balance your content and ensure you\'re allocating appropriate depth to each topic.' },
      { question: 'Can I use the outline generator for team collaboration?', answer: 'Absolutely. Generated outlines make excellent briefs for writers, ensuring everyone understands the structure and key points before writing begins. You can copy and share outlines with your team easily.' },
    ],
  },

  'ai-content-detector': {
    slug: 'ai-content-detector',
    name: 'AI Content Detector',
    title: 'Free AI Content Detector',
    description: 'Detect AI-generated content instantly. Get detailed analysis and learn what makes text sound like AI.',
    metaDescription: 'Detect AI-generated content instantly with our free tool. Get detailed analysis and learn what makes your text sound like AI. No signup required.',
    inputLabel: 'Text to analyze...',
    inputPlaceholder: 'Paste the text you want to check for AI generation...',
    buttonText: 'Analyze Text',
    maxLength: 4096,
    options: [
      { name: 'analysisDepth', label: 'Analysis depth', choices: ['Quick scan', 'Standard analysis', 'Detailed breakdown'], default: 'Standard analysis', type: 'select' },
    ],
    systemPrompt: `You are an expert AI content analyst specializing in detecting whether text was written by a human or generated by AI.

## CORE RULES
- Provide a percentage score indicating likelihood of AI generation
- Analyze multiple dimensions of the text
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

Provide: AI Probability Score, Confidence Level, Analysis breakdown, Specific indicators found, Recommendations.`,
    useCases: [
      { title: 'Academic integrity verification', description: 'Educators and students use the AI Content Detector to verify the originality of written work. Teachers can check submitted essays and assignments for signs of AI generation, while students can ensure their own writing doesn\'t inadvertently mirror AI patterns before submission.' },
      { title: 'Content quality assurance for publishers', description: 'Editorial teams, blog managers, and content agencies use the detector to screen submissions and ensure published content maintains authentic human voice. This is especially valuable when working with freelancers or scaling content production while maintaining quality standards.' },
      { title: 'SEO and content marketing compliance', description: 'Marketing teams concerned about search engine penalties for AI-generated content can scan their articles before publishing. The tool helps identify problematic patterns and provides specific recommendations for making content more authentically human, protecting your site\'s search rankings.' },
    ],
    faqs: [
      { question: 'How does the AI content detector work?', answer: 'The detector analyzes multiple dimensions of your text including sentence structure, vocabulary patterns, stylistic markers, and content characteristics. It compares these against known patterns of AI-generated versus human-written content to calculate a probability score.' },
      { question: 'Is the AI content detector free?', answer: 'Yes, the tool is completely free to use. You can check as many texts as you need without creating an account or paying any fees.' },
      { question: 'How accurate is AI content detection?', answer: 'No AI detector is 100% accurate. Our tool provides probability scores with confidence levels. Detection is most reliable for longer texts (300+ words) and unedited AI outputs. Heavily edited AI content or naturally formal human writing can affect accuracy.' },
      { question: 'Can the detector identify which AI tool wrote the content?', answer: 'The detector identifies whether content appears AI-generated but cannot reliably determine which specific tool (ChatGPT, Claude, etc.) created it. Different AI models share many similar patterns.' },
      { question: 'What percentage score means content is AI-generated?', answer: 'Generally, scores above 70% suggest strong AI indicators, 40-70% indicates mixed signals, and below 40% suggests likely human authorship. However, these are guidelines—context matters, and no threshold is definitive.' },
      { question: 'Can AI content be edited to pass detection?', answer: 'Yes, AI content that has been substantially edited by a human often shows reduced AI indicators. The detector is most effective on raw or lightly edited AI outputs.' },
      { question: 'Will academic or technical writing trigger false positives?', answer: 'Formal writing styles can sometimes trigger AI indicators because they share characteristics like consistent structure and formal vocabulary. The tool accounts for this but may show elevated scores for naturally formal content.' },
      { question: 'What should I do if my human-written content is flagged?', answer: 'The tool provides specific feedback on which elements triggered AI indicators. You can use this to adjust your writing style, add more personality, or include specific examples that demonstrate human authorship.' },
      { question: 'How long does the text need to be for accurate detection?', answer: 'Accuracy improves with length. Texts under 100 words are difficult to assess reliably. For best results, submit at least 200-300 words.' },
      { question: 'Does the detector store or share my submitted text?', answer: 'No, submitted text is processed in real-time and not stored. Your content remains private and is not used for any other purpose.' },
    ],
  },

  'ai-text-humanizer': {
    slug: 'ai-text-humanizer',
    name: 'AI Text Humanizer',
    title: 'Free AI Text Humanizer',
    description: 'Transform AI-generated text into natural, human-like writing. Remove robotic patterns while keeping your meaning.',
    metaDescription: 'Transform AI-generated text into natural, human-like writing. Our free humanizer removes robotic patterns while keeping your original meaning intact.',
    inputLabel: 'Text to humanize...',
    inputPlaceholder: 'Paste your AI-generated text here...',
    buttonText: 'Humanize Text',
    maxLength: 4096,
    options: [
      { name: 'level', label: 'Humanization level', choices: ['Light', 'Medium', 'Heavy'], default: 'Medium', type: 'select' },
      { name: 'tone', label: 'Target tone', choices: ['Professional', 'Casual', 'Academic', 'Conversational'], default: 'Professional', type: 'select' },
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

Output only the humanized text. No preamble.`,
    useCases: [
      { title: 'Content creators scaling with AI assistance', description: 'Writers and marketers who use AI to draft content can run outputs through the humanizer to ensure final pieces sound authentic and engaging. The tool removes telltale AI patterns while preserving your core message, letting you leverage AI efficiency without sacrificing voice.' },
      { title: 'Students refining AI-assisted research', description: 'Students who use AI tools to help brainstorm or structure ideas can humanize their drafts to ensure submissions reflect their own voice and don\'t trigger plagiarism or AI detection concerns. The tool helps transform AI starting points into authentically expressed final work.' },
      { title: 'Professionals polishing AI-drafted communications', description: 'Business professionals who use AI to draft emails, reports, or proposals can humanize the text to sound more natural and personal. This ensures client communications, internal memos, and professional documents maintain authentic voice and relationship-building tone.' },
    ],
    faqs: [
      { question: 'What does "humanizing" AI text mean?', answer: 'Humanizing means editing AI-generated text to remove robotic patterns, add natural voice variation, and make it read as if a human wrote it. This includes changing vocabulary, varying sentence structure, and adding personality elements.' },
      { question: 'Is the AI text humanizer free?', answer: 'Yes, the tool is completely free to use with no signup required. You can humanize as much text as you need at no cost.' },
      { question: 'Will the humanized text pass AI detection?', answer: 'The humanizer significantly reduces AI indicators, but results vary based on the original text and detection tool used. For best results, combine humanization with your own additional edits and personal touches.' },
      { question: 'Does humanizing change the meaning of my text?', answer: 'No, the tool is designed to preserve your original meaning completely. It changes how ideas are expressed, not what ideas are expressed. All facts and core messages remain intact.' },
      { question: 'What\'s the difference between light, medium, and heavy humanization?', answer: 'Light humanization makes minimal changes suitable for formal content. Medium (default) adds more natural variation for general content. Heavy humanization significantly increases personality and casual tone for informal content.' },
      { question: 'Can I humanize text in any style or tone?', answer: 'Yes, you can specify your preferred tone (professional, casual, friendly, etc.) and the tool will adapt its humanization approach accordingly while maintaining that tone throughout.' },
      { question: 'How long does humanization take?', answer: 'Results are generated in seconds, regardless of text length. Longer texts may take slightly more time but the process is nearly instantaneous.' },
      { question: 'Should I edit the humanized text further?', answer: 'We recommend reviewing and adding your own personal touches. The tool provides an excellent foundation, but adding specific examples, personal anecdotes, or unique insights from your experience will make content even more authentically yours.' },
      { question: 'What types of content can I humanize?', answer: 'The tool works with any text: articles, blog posts, essays, emails, reports, social media posts, and more. It adjusts its approach based on the content type and formality level.' },
      { question: 'Can I humanize content in other languages?', answer: 'The tool is optimized for English text. While it may work with other languages, results are most reliable and natural-sounding with English content.' },
    ],
  },

  'conclusion-generator': {
    slug: 'conclusion-generator',
    name: 'Conclusion Generator',
    title: 'Free AI Conclusion Generator',
    description: 'Generate compelling conclusions for any article, essay, or blog post with clear takeaways and CTAs.',
    metaDescription: 'Generate compelling conclusions for any article, essay, or blog post. Our free AI tool creates satisfying endings with clear takeaways and CTAs.',
    inputLabel: 'Article topic and key points...',
    inputPlaceholder: 'e.g. Topic: Benefits of meditation. Key points: stress reduction, improved focus, better sleep',
    buttonText: 'Generate Conclusion',
    maxLength: 2048,
    options: [
      { name: 'contentType', label: 'Content type', choices: ['Blog Post', 'How-to Guide', 'Listicle', 'Essay/Opinion', 'Product Review', 'Research/Report'], default: 'Blog Post', type: 'select' },
      { name: 'ctaType', label: 'Call to action', choices: ['Soft (informational)', 'Direct (commercial)', 'Thought-provoking', 'None'], default: 'Soft (informational)', type: 'select' },
      { name: 'tone', label: 'Tone', choices: ['Professional', 'Casual', 'Inspirational', 'Academic'], default: 'Professional', type: 'select' },
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

Output only the conclusion paragraph(s). No preamble.`,
    useCases: [
      { title: 'Blog and content marketing wrap-ups', description: 'Content creators who struggle to end articles effectively use the Conclusion Generator to craft satisfying closings that summarize key points and drive reader action. The tool ensures every piece ends with impact rather than trailing off, improving engagement and conversion rates.' },
      { title: 'Academic essay conclusions', description: 'Students writing essays, research papers, or thesis chapters can generate well-structured conclusions that synthesize their arguments without simply repeating the introduction. The tool helps elevate final paragraphs from basic summaries to compelling closings that leave a lasting impression.' },
      { title: 'Business document finalization', description: 'Professionals writing reports, proposals, or presentations can create conclusions that clearly communicate recommendations, next steps, and key takeaways. The tool ensures important documents end with clarity and actionable direction for stakeholders.' },
    ],
    faqs: [
      { question: 'What makes a good conclusion?', answer: 'A strong conclusion synthesizes key points (not just repeats them), reinforces the main message, addresses implications or stakes, and provides clear next steps or a call to action. It should leave readers with a sense of closure and motivation.' },
      { question: 'Is the conclusion generator free?', answer: 'Yes, the tool is completely free with no signup or payment required. Generate as many conclusions as you need at no cost.' },
      { question: 'What information do I need to provide?', answer: 'At minimum, provide your topic and the key points covered in your content. For best results, also specify the content type (blog, essay, report), desired tone, and any specific call to action you want included.' },
      { question: 'Will the conclusion match my writing style?', answer: 'The tool adapts to the tone you specify (professional, casual, academic, etc.) and matches standard conventions for your content type. For perfect style matching, we recommend light editing to add your personal voice.' },
      { question: 'How long should a conclusion be?', answer: 'Conclusions typically run 10-15% of total content length. For a 1,000-word article, expect 100-150 words. You can specify your target length and the tool will adjust accordingly.' },
      { question: 'Can I generate conclusions for different content types?', answer: 'Yes, the tool handles blog posts, essays, how-to guides, listicles, product reviews, research reports, and more. Each type follows appropriate conventions and structures.' },
      { question: 'Should conclusions include calls to action?', answer: 'For marketing content, yes—conclusions are prime CTA real estate. For academic or informational content, the "CTA" might be encouraging further thought or suggesting related reading rather than a commercial action.' },
      { question: 'How do I avoid a conclusion that just repeats my introduction?', answer: 'The tool is designed to synthesize and elevate your key points, not repeat them. It frames takeaways in fresh language and adds forward-looking elements that go beyond what your introduction stated.' },
      { question: 'Can I use this for email or short-form content?', answer: 'Yes, though the tool is optimized for longer-form content. For emails, specify a very short target length and the tool will generate concise sign-offs with appropriate CTAs.' },
      { question: 'What if I don\'t like the generated conclusion?', answer: 'You can regenerate with adjusted inputs (different tone, CTA, length) or use the output as a starting point for your own editing. The generated conclusion provides structure and ideas you can build upon.' },
    ],
  },

  'grammar-checker': {
    slug: 'grammar-checker',
    name: 'Grammar Checker',
    title: 'Free AI Grammar Checker',
    description: 'Check your grammar, spelling, and punctuation for free. Get instant corrections with clear explanations.',
    metaDescription: 'Check your grammar, spelling, and punctuation for free. Get instant corrections with clear explanations to improve your writing skills.',
    inputLabel: 'Text to check...',
    inputPlaceholder: 'Paste your text here to check for grammar, spelling, and punctuation errors...',
    buttonText: 'Check Grammar',
    maxLength: 4096,
    options: [
      { name: 'mode', label: 'Check mode', choices: ['Quick Fix', 'Standard', 'Detailed Learning', 'Academic', 'Casual/Creative'], default: 'Standard', type: 'select' },
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
[1-2 personalized tips based on patterns observed]`,
    useCases: [
      { title: 'Professional communication polishing', description: 'Business professionals use the Grammar Checker to ensure emails, reports, and presentations are error-free before sending to colleagues, clients, or executives. Clean, professional writing builds credibility and prevents embarrassing mistakes that can undermine your message.' },
      { title: 'Academic writing proofreading', description: 'Students and researchers can check essays, papers, and thesis drafts for grammar and punctuation errors before submission. The tool catches mistakes that spell-check misses and provides explanations that help improve writing skills over time.' },
      { title: 'Content creation quality assurance', description: 'Bloggers, content marketers, and writers use the Grammar Checker as a final quality pass before publishing. Even professional writers miss errors during self-editing, and the tool provides a fresh automated review that catches oversights.' },
    ],
    faqs: [
      { question: 'What types of errors does the grammar checker find?', answer: 'The tool identifies grammar errors (subject-verb agreement, tense issues, fragments), spelling mistakes, punctuation problems (commas, apostrophes, semicolons), and commonly confused words. It also flags style suggestions for clarity and readability.' },
      { question: 'Is the grammar checker free to use?', answer: 'Yes, the tool is completely free with no limits. Check as many texts as you need without signing up or paying anything.' },
      { question: 'How is this different from spell-check?', answer: 'Standard spell-check only catches misspellings. Our grammar checker analyzes sentence structure, punctuation, word usage, and style—catching errors like "their going to the store" that spell-check misses because all words are spelled correctly.' },
      { question: 'Will the tool change my writing style?', answer: 'The tool focuses on correcting actual errors while preserving your voice. Style suggestions are clearly marked as optional, and you choose which changes to accept. It won\'t make your writing sound generic or robotic.' },
      { question: 'Can it check academic or formal writing?', answer: 'Yes, you can select an academic mode that applies stricter grammar standards and formal conventions appropriate for scholarly writing, business documents, or professional communications.' },
      { question: 'Does it explain why something is wrong?', answer: 'Yes, each error includes an explanation of the rule being violated and guidance on how to avoid similar mistakes. This helps you learn and improve, not just fix the immediate issue.' },
      { question: 'How long can my text be?', answer: 'The tool handles texts of various lengths, from short emails to long documents. For very long documents, you may get better results checking section by section.' },
      { question: 'Does it work for languages other than English?', answer: 'The tool is optimized for English grammar, spelling, and punctuation. It may catch some errors in other languages but is not designed for comprehensive non-English checking.' },
      { question: 'Will it catch all my errors?', answer: 'While the tool catches the vast majority of common errors, no automated checker is perfect. We recommend using it as part of your editing process, not as a complete replacement for human proofreading on critical documents.' },
      { question: 'Can I use it for creative writing?', answer: 'Yes, select casual/creative mode for more flexibility. The tool will respect intentional fragments, informal language, and stylistic choices while still catching genuine errors.' },
    ],
  },

  'sentence-rewriter': {
    slug: 'sentence-rewriter',
    name: 'Sentence Rewriter',
    title: 'Free AI Sentence Rewriter Tool',
    description: 'Rewrite sentences for clarity, impact, or better tone. Get multiple variations with explanations.',
    metaDescription: 'Rewrite sentences for clarity, impact, or better tone. Get multiple variations with explanations of what makes each one stronger. Free, no signup.',
    inputLabel: 'Sentence to rewrite...',
    inputPlaceholder: 'e.g. The implementation of the new system was completed by the team last week.',
    buttonText: 'Rewrite Sentence',
    maxLength: 1024,
    options: [
      { name: 'goal', label: 'Improvement goal', choices: ['Clarity', 'Impact', 'Conciseness', 'More formal', 'More casual', 'More confident'], default: 'Clarity', type: 'select' },
      { name: 'variants', label: 'Number of variations', choices: ['2 variations', '3 variations', '5 variations'], default: '3 variations', type: 'select' },
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

End with recommendation of strongest option.`,
    useCases: [
      { title: 'Refining key messaging and headlines', description: 'Marketers and copywriters use the Sentence Rewriter to polish critical sentences like headlines, taglines, CTAs, and opening lines. When a single sentence needs to work hard, the tool generates multiple variations so you can choose the most impactful version.' },
      { title: 'Improving email communication', description: 'Professionals can rewrite awkward or unclear sentences in important emails before sending. Whether you need to sound more confident, more diplomatic, or simply clearer, the tool provides options that help you communicate exactly what you intend.' },
      { title: 'Editing and proofreading assistance', description: 'Writers and editors use the tool when they know a sentence isn\'t working but can\'t figure out how to fix it. By generating multiple alternatives, the tool breaks through editing blocks and offers fresh approaches to problematic sentences.' },
    ],
    faqs: [
      { question: 'What\'s the difference between sentence rewriting and paraphrasing?', answer: 'Sentence rewriting focuses on improving a single sentence\'s clarity, impact, or tone while keeping the same meaning. Paraphrasing is about expressing the same idea in different words, often to avoid duplication. The rewriter actively tries to make sentences better, not just different.' },
      { question: 'Is the sentence rewriter free?', answer: 'Yes, completely free with no signup required. Rewrite as many sentences as you need.' },
      { question: 'How many variations will I get?', answer: 'The tool typically provides 3 distinct variations, each taking a different approach to improvement. This gives you options to choose from based on your specific needs.' },
      { question: 'Can I specify what kind of improvement I want?', answer: 'Yes, you can request specific goals like "more concise," "more formal," "more confident," or "clearer." The tool will tailor its variations to your stated objective.' },
      { question: 'Will the meaning change?', answer: 'No, all variations preserve your original meaning. The tool changes how the idea is expressed, not what idea is expressed. This is a core rule of the rewriting process.' },
      { question: 'Why do I need this if I have a grammar checker?', answer: 'Grammar checkers fix errors. The sentence rewriter improves sentences that are grammatically correct but could be clearer, stronger, or more appropriate for your audience. It\'s about quality enhancement, not error correction.' },
      { question: 'Can I rewrite multiple sentences at once?', answer: 'The tool is optimized for one sentence at a time for the most focused improvements. For multiple sentences, use the paragraph rewriter or run sentences through individually.' },
      { question: 'What makes one rewrite better than another?', answer: 'It depends on your goal. For emails, clarity and appropriate tone matter most. For marketing, impact and memorability are key. The tool explains each variation so you can choose based on your specific context.' },
      { question: 'Can it help with non-English sentences?', answer: 'The tool is optimized for English. Results with other languages may vary and won\'t be as reliable.' },
      { question: 'Should I always use the recommended option?', answer: 'The recommendation is based on common preferences, but you know your context best. Review all options and choose the one that fits your specific audience, tone, and purpose.' },
    ],
  },

  'acronym-generator': {
    slug: 'acronym-generator',
    name: 'Acronym Generator',
    title: 'Free AI Acronym Generator',
    description: 'Generate clever, meaningful acronyms for projects, products, and organizations.',
    metaDescription: 'Generate clever, meaningful acronyms for projects, products, and organizations. Get multiple options with expanded meanings. Free and instant.',
    inputLabel: 'Subject or concept...',
    inputPlaceholder: 'e.g. Customer feedback improvement initiative for retail',
    buttonText: 'Generate Acronyms',
    maxLength: 1024,
    options: [
      { name: 'tone', label: 'Tone', choices: ['Professional', 'Creative', 'Technical', 'Playful'], default: 'Professional', type: 'select' },
      { name: 'length', label: 'Preferred length', choices: ['Short (3-4 letters)', 'Medium (5-6 letters)', 'Any length'], default: 'Any length', type: 'select' },
      { name: 'variants', label: 'Number of options', choices: ['3 options', '5 options', '10 options'], default: '5 options', type: 'select' },
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

End with recommendation and alternative words to swap in.`,
    useCases: [
      { title: 'Project and initiative naming', description: 'Teams launching new projects, programs, or initiatives use the Acronym Generator to create memorable names that communicate purpose. A strong acronym makes projects easier to reference, remember, and rally around—turning "the customer feedback improvement project" into something like "VOICE."' },
      { title: 'Product and feature naming', description: 'Product managers and marketers can generate acronym-based names for products, features, or methodologies that convey value while being catchy and brandable. The right acronym can become a powerful part of your product\'s identity and marketing.' },
      { title: 'Organizational and team branding', description: 'Leaders creating new teams, departments, committees, or working groups can find acronyms that capture their mission and values. A thoughtful acronym gives groups identity and helps communicate purpose to the broader organization.' },
    ],
    faqs: [
      { question: 'What is an acronym generator?', answer: 'An acronym generator creates shortened forms of phrases where each letter stands for a word. The tool helps you find combinations where the letters spell something memorable while the expanded words accurately describe your subject.' },
      { question: 'Is the acronym generator free?', answer: 'Yes, completely free with no signup required. Generate as many acronyms as you need.' },
      { question: 'What\'s the difference between an acronym and an initialism?', answer: 'Acronyms are pronounced as words (NASA, RADAR), while initialisms are spelled out letter-by-letter (FBI, CEO). The tool generates both types depending on what works best for your subject.' },
      { question: 'How many letters should my acronym be?', answer: '3-7 letters typically work best. Shorter acronyms are easier to remember but offer less descriptive power. Longer ones can be more specific but harder to recall. The tool provides options across different lengths.' },
      { question: 'Can I request a specific word to spell?', answer: 'Yes, you can request a "backronym" where you specify the word you want and the tool finds phrases to match each letter. Just note that forced backronyms can sometimes feel awkward if the words don\'t naturally fit.' },
      { question: 'Will the acronyms be unique?', answer: 'The tool generates original combinations, but we recommend searching your favorites online to ensure they\'re not already in use by other organizations, especially in your industry.' },
      { question: 'Can I generate acronyms for different industries?', answer: 'Yes, specify your industry or context and the tool will use relevant terminology. An acronym for a healthcare initiative will use different vocabulary than one for a tech startup.' },
      { question: 'What if I don\'t like any of the suggestions?', answer: 'You can regenerate with adjusted inputs (different tone, length, or context), or use the generated options as inspiration to create your own variation. The tool also provides alternative words you can swap in.' },
      { question: 'Should the acronym spell a real word?', answer: 'Not necessarily. Real-word acronyms (like SMART or CARE) are very memorable, but pronounceable non-words (like NASA) or letter-based acronyms (like CEO) can work equally well depending on context.' },
      { question: 'How do I know if an acronym is good?', answer: 'Good acronyms are easy to pronounce, easy to remember, and accurately represent their expanded meaning. They should feel natural—not forced—and ideally create positive associations.' },
    ],
  },

  'lorem-ipsum-generator': {
    slug: 'lorem-ipsum-generator',
    name: 'Lorem Ipsum Generator',
    title: 'Free AI Lorem Ipsum Generator',
    description: 'Generate lorem ipsum placeholder text for designs, mockups, and layouts.',
    metaDescription: 'Generate lorem ipsum placeholder text for designs, mockups, and layouts. Choose traditional or modern alternatives. Copy-paste ready.',
    inputLabel: 'Amount needed...',
    inputPlaceholder: 'e.g. 3 paragraphs, 500 words, or 10 sentences',
    buttonText: 'Generate Text',
    maxLength: 256,
    options: [
      { name: 'type', label: 'Text type', choices: ['Traditional Lorem Ipsum', 'Hipster Ipsum', 'Office/Business Ipsum', 'Plain English'], default: 'Traditional Lorem Ipsum', type: 'select' },
      { name: 'amount', label: 'Amount', choices: ['1 paragraph', '3 paragraphs', '5 paragraphs', '500 words', '1000 words'], default: '3 paragraphs', type: 'select' },
      { name: 'format', label: 'Format', choices: ['Plain text', 'With HTML tags'], default: 'Plain text', type: 'select' },
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

Generate the requested placeholder text, ready to copy-paste.`,
    useCases: [
      { title: 'Web and UI design mockups', description: 'Designers use Lorem Ipsum to fill layouts, wireframes, and mockups with realistic-looking text before actual content is written. This helps clients and teams visualize how the final design will look with content in place without getting distracted by reading actual text.' },
      { title: 'Development and testing placeholders', description: 'Developers use placeholder text to test layouts, typography settings, and responsive designs. Lorem ipsum helps verify that text containers, line heights, and overflow behaviors work correctly across different content lengths.' },
      { title: 'Print and graphic design layouts', description: 'Graphic designers working on brochures, magazines, posters, and other print materials use lorem ipsum to complete layouts for client approval before final copy is delivered, allowing design work to proceed in parallel with content creation.' },
    ],
    faqs: [
      { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is scrambled Latin-based placeholder text used in design and publishing since the 1500s. It provides realistic-looking text to fill layouts without distracting viewers with readable content.' },
      { question: 'Is the Lorem Ipsum generator free?', answer: 'Yes, completely free with no limits. Generate as much placeholder text as you need.' },
      { question: 'Why use Lorem Ipsum instead of real text?', answer: 'Using meaningless placeholder text prevents clients and reviewers from focusing on content when they should be evaluating design. It also allows design work to proceed before final copy is written.' },
      { question: 'Is Lorem Ipsum actually Latin?', answer: 'Lorem Ipsum is derived from a work by Cicero from 45 BC, but it\'s been scrambled and altered so much that it\'s no longer proper Latin. It has no meaningful translation.' },
      { question: 'Can I get alternatives to traditional Lorem Ipsum?', answer: 'Yes, the tool offers several alternatives including Hipster Ipsum, Office Ipsum, Bacon Ipsum, and Plain English placeholder text for variety or thematic appropriateness.' },
      { question: 'What format is the text provided in?', answer: 'Text is provided as clean plain text that\'s ready to copy-paste. You can also request HTML-formatted output with paragraph tags for web use.' },
      { question: 'Can I specify exactly how much text I need?', answer: 'Yes, you can request specific amounts by paragraph count, word count, sentence count, or character count. The tool generates as close to your specification as possible.' },
      { question: 'Does Lorem Ipsum affect SEO?', answer: 'Placeholder text should always be replaced before publishing. Published Lorem Ipsum could potentially hurt SEO and looks unprofessional. Always replace with real content before going live.' },
      { question: 'Why does Lorem Ipsum start with "Lorem ipsum dolor sit amet"?', answer: 'This has been the traditional starting phrase for centuries. The words come from a scrambled section of Cicero\'s "de Finibus Bonorum et Malorum" (On the Ends of Good and Evil).' },
      { question: 'Can I use Lorem Ipsum for any project?', answer: 'Yes, Lorem Ipsum is in the public domain and has no copyright restrictions. You can use it freely in any design, development, or layout project.' },
    ],
  },

  'emoji-translator': {
    slug: 'emoji-translator',
    name: 'Emoji Translator',
    title: 'Free AI Emoji Translator',
    description: 'Translate text into expressive emojis or decode emoji messages.',
    metaDescription: 'Translate text into expressive emojis or decode emoji messages. Perfect for social media, messaging, and fun communication. Free to use.',
    inputLabel: 'Text or emojis...',
    inputPlaceholder: 'e.g. "I\'m so excited for the weekend!" or paste emojis to decode',
    buttonText: 'Translate',
    maxLength: 1024,
    options: [
      { name: 'direction', label: 'Translation direction', choices: ['Text to Emojis', 'Emojis to Text'], default: 'Text to Emojis', type: 'radio' },
      { name: 'style', label: 'Emoji style', choices: ['Full replacement', 'Text with emojis', 'Key concepts only'], default: 'Text with emojis', type: 'select' },
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

Provide the translation with explanation of key emojis used.`,
    useCases: [
      { title: 'Social media and messaging enhancement', description: 'Users looking to add personality to their texts, tweets, or social posts can translate messages into emoji-enhanced versions. The tool helps find the perfect emojis to convey tone and emotion, making digital communication more expressive and engaging.' },
      { title: 'Emoji interpretation and understanding', description: 'When you receive a confusing string of emojis, the translator helps decode the likely meaning. This is especially helpful for understanding generational emoji usage, platform-specific meanings, or creative emoji combinations.' },
      { title: 'Content creation and marketing', description: 'Social media managers and content creators can find creative emoji combinations to make posts stand out. The tool helps translate brand messages into emoji-friendly formats that perform well on visual platforms like Instagram and Twitter.' },
    ],
    faqs: [
      { question: 'How does the emoji translator work?', answer: 'For text-to-emoji, the tool analyzes the meaning and emotion of your message and selects emojis that represent those concepts. For emoji-to-text, it interprets common meanings and provides likely translations.' },
      { question: 'Is the emoji translator free?', answer: 'Yes, completely free with no signup required. Translate as much as you want.' },
      { question: 'Will everyone understand my emoji translation?', answer: 'The tool uses commonly understood emojis, but emoji interpretation can vary by age, culture, and platform. We flag any emojis that have multiple common meanings.' },
      { question: 'Can I translate emojis back to text?', answer: 'Yes, paste an emoji sequence and the tool will provide likely interpretations of what the emojis mean, including alternative readings for ambiguous combinations.' },
      { question: 'Why do some emojis mean different things?', answer: 'Emoji meanings evolve through internet culture and can vary between generations, communities, and platforms. A single emoji might have its literal meaning plus slang or ironic uses. The tool notes these variations.' },
      { question: 'Should I replace all text with emojis or just add some?', answer: 'It depends on context. For casual messages, full emoji replacement can be fun. For most communication, adding a few strategic emojis to enhance text is more effective and clearer.' },
      { question: 'Do emojis look the same on all devices?', answer: 'No, emoji designs vary by platform (Apple, Google, Samsung, etc.). The meaning stays similar, but visual appearance differs. We recommend using emojis with clear, universal meanings.' },
      { question: 'How many emojis should I use?', answer: 'Less is often more. A few well-chosen emojis have more impact than a wall of icons. The tool recommends appropriate quantities based on your message length and context.' },
      { question: 'Can this help with emoji SEO?', answer: 'Emojis can appear in search results and may improve click-through rates on social posts. The tool helps identify emojis relevant to your topic that could enhance visibility.' },
      { question: 'Are there emojis I should avoid?', answer: 'Some emojis have acquired meanings that differ from their literal appearance, particularly among younger users. The tool flags potentially misunderstood emojis when relevant.' },
    ],
  },

  'plagiarism-checker': {
    slug: 'plagiarism-checker',
    name: 'Plagiarism Checker',
    title: 'Free AI Plagiarism Checker',
    description: 'Analyze your content for originality and identify passages that may need citations or rewriting.',
    metaDescription: 'Analyze your content for originality and identify passages that may need citations or rewriting. Get actionable feedback to improve your writing.',
    inputLabel: 'Text to check...',
    inputPlaceholder: 'Paste your text here to check for originality...',
    buttonText: 'Check Originality',
    maxLength: 4096,
    options: [
      { name: 'checkType', label: 'Check type', choices: ['Quick scan', 'Standard analysis', 'Detailed report'], default: 'Standard analysis', type: 'select' },
    ],
    systemPrompt: `You are an expert text analysis tool that checks content for originality by identifying potentially copied or closely paraphrased passages.

## IMPORTANT LIMITATIONS
This tool provides analysis based on pattern recognition. It does not have access to a comprehensive database of all published content. For high-stakes situations (academic submission, legal matters), use dedicated plagiarism services with full database access.

## CORE RULES
- Analyze text for originality indicators and red flags
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
This analysis is based on pattern recognition and does not compare against a comprehensive content database.`,
    useCases: [
      { title: 'Pre-submission academic checking', description: 'Students can run papers through the plagiarism checker before submission to identify passages that might be flagged as too similar to sources. The tool helps identify where citations are needed and which sections might benefit from rewriting in more original language.' },
      { title: 'Content quality assurance', description: 'Publishers and editors can screen submitted content for originality indicators before publication. While not a replacement for comprehensive database-based tools, it provides a quick first-pass check for obvious plagiarism red flags or inconsistent writing quality.' },
      { title: 'Self-audit for writers', description: 'Writers can check their own work to ensure they haven\'t inadvertently used phrasing too similar to sources they researched. The tool helps identify where original language or proper attribution is needed, maintaining writing integrity.' },
    ],
    faqs: [
      { question: 'How does the plagiarism checker work?', answer: 'The tool analyzes your text for originality indicators including writing consistency, style patterns, and passages that appear templated or require citation. It flags potential concerns and provides recommendations for improvement.' },
      { question: 'Is this plagiarism checker free?', answer: 'Yes, the tool is completely free to use with no signup required.' },
      { question: 'Is this as accurate as Turnitin or Copyscape?', answer: 'No. Those services compare your text against massive databases of published content. This tool uses pattern analysis to identify red flags but cannot definitively confirm whether text appears elsewhere online. For high-stakes checking, use a dedicated service.' },
      { question: 'What does the plagiarism checker actually detect?', answer: 'The tool identifies: style inconsistencies suggesting copy-paste, facts/statistics needing citations, passages that appear templated, and quality shifts that might indicate non-original content.' },
      { question: 'Can it tell if I copied from a specific source?', answer: 'No, the tool cannot identify specific sources. It can only flag passages that seem potentially non-original based on writing patterns. You\'ll need a database-based tool to match against specific sources.' },
      { question: 'Will it catch AI-generated content?', answer: 'This tool focuses on plagiarism patterns, not AI detection. For AI content detection, use our dedicated AI Content Detector tool.' },
      { question: 'What should I do if passages are flagged?', answer: 'Review flagged passages to determine if they need: direct citation (if quoting), paraphrasing with attribution (if summarizing sources), or complete rewriting in your own words.' },
      { question: 'Can I use this for academic papers?', answer: 'As a preliminary check, yes. But always use your institution\'s official plagiarism checker (usually Turnitin) before final submission, as that\'s what your instructors will use.' },
      { question: 'How long can my text be?', answer: 'The tool handles standard document lengths. For very long documents, you may get better results checking chapter by chapter.' },
      { question: 'What\'s the difference between plagiarism and missing citations?', answer: 'Plagiarism is presenting others\' work as your own. Missing citations might be accidental—you know you got information from somewhere but forgot to cite it. Both need to be fixed, but intent differs. The tool flags both issues.' },
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
