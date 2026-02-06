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
    description: 'Generate compelling blog titles that drive clicks and rank in search. Our AI creates SEO-optimized headlines using proven psychological triggers.',
    metaDescription: 'Generate compelling blog titles that drive clicks and rank in search. Our AI creates SEO-optimized headlines using proven psychological triggers.',
    inputLabel: 'Blog topic or content...',
    inputPlaceholder: 'e.g. How to improve email open rates for e-commerce stores',
    buttonText: 'Generate Titles',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Number of titles',
        choices: ['3 titles', '5 titles', '10 titles'],
        default: '5 titles',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tone',
        choices: ['Formal', 'Casual', 'Persuasive'],
        default: 'Formal',
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

**Comparison Formula:**
- "[Option A] vs [Option B]: [Deciding Factor]"
- "[Number] [Alternatives] Compared: [Decision Criterion]"
- "Which [Option Type] Is Right for [Specific Situation]?"

**Story/Case Study Formula:**
- "How [Subject] [Achieved Outcome] [Timeframe/Context]"
- "What [Time Period] of [Activity] Taught Me About [Topic]"
- "[Outcome]: A [Timeframe] Case Study"

## SEO TITLE OPTIMIZATION

### Keyword Placement Rules:
- Primary keyword within first 60 characters when possible
- Maintain natural readability—don't sacrifice clarity for keyword stuffing
- Front-load the most important words for truncation resilience

### Length Guidelines:
- Ideal: 50-60 characters for full SERP display
- Maximum: 70 characters before truncation risk
- For social sharing: Can extend to 80-90 characters

### Avoid These SEO Mistakes:
- Keyword repetition in single title
- Unnatural keyword placement that disrupts readability
- Generic modifiers that add length without value ("best," "top" without context)

## OUTPUT RULES

### For Each Title, Provide:
1. **Title**: The complete headline
2. **Character Count**: Total characters
3. **Title Type**: Formula/approach used
4. **Strength**: Why this title works (psychological trigger + SEO element)

### Quantity:
- Generate {{number_of_variants}} title variants
- Each variant should use a different approach/formula
- Vary length—include some short punchy titles and some detailed ones

### Quality Standards:
- NO clickbait that misrepresents content
- NO excessive capitalization or punctuation
- NO generic titles that could describe thousands of posts
- NO titles that bury the value proposition
- YES to specific numbers, timeframes, outcomes
- YES to power words used appropriately
- YES to titles that would stand out in a search result page

## TONE ADAPTATION

### IF tone = "Formal"
- Professional, authoritative language
- Industry-appropriate terminology
- Focus on expertise and outcomes
- Example: "Enterprise Data Migration: A Risk-Mitigation Framework for IT Leaders"

### IF tone = "Casual"
- Conversational, relatable language
- Personal pronouns ("you," "your," "I")
- Accessible examples and references
- Example: "I Finally Fixed My Terrible Sleep Schedule—Here's Exactly How"

### IF tone = "Persuasive"
- Benefit-focused, outcome-driven language
- Strong action verbs
- Urgency and exclusivity elements
- Example: "The Sales Script That Closed $2M in My First Year (Free Template)"

## OUTPUT FORMAT

### Blog Title Options for: [Topic]

**Title 1:** [Title]
- **Characters:** [count]
- **Type:** [Formula used]
- **Strength:** [Why it works]

[Repeat for each variant]

---

**Recommendation:** [Which title is strongest for SEO vs. social sharing, with brief explanation]

## SELF-VALIDATION CHECKLIST

Before outputting each title, verify:
□ Would I click this in search results?
□ Does it accurately represent the content?
□ Is the value proposition clear within 5 seconds?
□ Does it stand out from generic alternatives?
□ Is the primary keyword naturally incorporated?
□ Is it the right length for intended use (SERP vs. social)?

Revise any title that fails these checks.`,
    useCases: [
      {
        title: 'A/B testing headline variations',
        description: 'Content marketers and growth teams use the Blog Title Generator to create multiple headline variants for systematic testing. Instead of relying on intuition, teams can generate 10+ psychologically distinct titles and test them through email subject lines, social posts, or native advertising before committing to a final headline. This data-driven approach consistently improves click-through rates by 15-30% compared to using first-draft titles.',
      },
      {
        title: 'Repurposing and updating existing content',
        description: 'When refreshing older blog posts for SEO or relevance, changing the title can dramatically impact performance. The generator helps content teams develop fresh headlines that better match current search intent, incorporate trending angles, or address evolved audience needs—breathing new life into evergreen content that may have plateaued in performance.',
      },
      {
        title: 'Scaling content production across teams',
        description: 'Content agencies, media companies, and large marketing teams use the generator to maintain headline quality at scale. When multiple writers are producing content, headline quality often varies significantly. The tool provides a baseline of professional-quality title options that ensure consistency, while individual writers can still customize and improve upon the suggestions.',
      },
    ],
    faqs: [
      { question: 'What makes a good blog title?', answer: 'A good blog title accomplishes three things simultaneously: it accurately represents the content (building trust with readers), it incorporates search terms naturally (enabling discovery), and it triggers psychological engagement (compelling the click). The best titles achieve all three without sacrificing any element. They\'re specific rather than generic, benefit-focused rather than feature-focused, and distinctive rather than forgettable.' },
      { question: 'How long should a blog title be?', answer: 'For search engine optimization, keep titles under 60 characters to ensure full display in search results. However, social media sharing can accommodate longer titles (80-90 characters) since truncation rules differ by platform. The generator provides character counts for each title and includes a mix of lengths so you can choose based on your primary distribution channel.' },
      { question: 'Should I include keywords in my blog title?', answer: 'Yes, but naturally. Search engines use titles as ranking signals, and users scan titles for relevance to their query. Place your primary keyword as early in the title as readable, but never force it at the expense of clarity or engagement. "How to Train a Puppy: Complete Guide" is better than "Puppy Training How to Guide Complete Tips"—the latter might technically include more keywords but reads poorly and performs worse.' },
      { question: 'How do I choose between multiple title options?', answer: 'Consider your primary goal and distribution channel. If SEO is paramount, choose the title with the strongest keyword integration and clearest search intent match. If social sharing is primary, choose the title with the strongest curiosity trigger or emotional hook. For balanced performance, test 2-3 top candidates—use one as your H1/SEO title and others as social share variations.' },
      { question: 'Can I modify the generated titles?', answer: 'Absolutely—think of generated titles as professional starting points. The best approach is often to combine elements from multiple suggestions, add brand-specific language, or adjust specificity based on your actual content. A generated title of "7 Email Marketing Mistakes That Kill Conversions" might become "7 Email Marketing Mistakes We Made (And How We Fixed Them)" for a more personal brand voice.' },
      { question: 'Why do numbers work so well in blog titles?', answer: 'Numbers provide specificity (which builds credibility), set expectations (readers know the scope), and create cognitive ease (odd numbers and specific numbers like "7" or "13" perform better than round numbers). However, overuse has created "listicle fatigue" for some audiences. The generator balances numbered titles with other formats to provide variety.' },
      { question: 'What\'s the difference between a blog title and an SEO title?', answer: 'They\'re often the same, but can differ strategically. Your blog title (H1 heading on the page) can be longer and more creative. Your SEO title (meta title in search results) should stay under 60 characters and prioritize keywords. Some publishers use a compelling H1 title for engaged readers and a more keyword-focused meta title for search visibility.' },
      { question: 'How do I avoid clickbait while still creating engaging titles?', answer: 'Clickbait creates a promise the content doesn\'t deliver. Engaging titles create genuine curiosity that the content satisfies. The difference is accuracy, not engagement level. "You Won\'t Believe What Happened" is clickbait. "How We Increased Revenue 340% in 6 Months" is engaging but accurate (assuming the content delivers on that promise). The generator is specifically designed to create high-engagement titles that maintain accuracy.' },
      { question: 'Should my blog title match my URL slug?', answer: 'Not exactly, but they should be related. Your URL slug should be a simplified, keyword-focused version of your title—short, descriptive, and permanent. Your title can be more creative and can change over time for testing. Example: Title "The Counterintuitive Sleep Hack That Finally Cured My Insomnia" → URL slug "sleep-hack-cure-insomnia."' },
      { question: 'How often should I test or change blog titles?', answer: 'For new posts, set your title and give it 2-4 weeks to index and gather initial data. If performance is below expectations, test a new title. For existing posts, consider title refreshes during content updates or when search rankings decline. High-performing evergreen content might benefit from annual title reviews to ensure continued relevance to evolving search patterns.' },
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
    buttonText: 'Analyze AI Text',
    maxLength: 4096,
    options: [
      { name: 'analysisDepth', label: 'Analysis depth', choices: ['Quick scan', 'Standard analysis', 'Detailed breakdown'], default: 'Standard analysis', type: 'select' },
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
    description: 'Analyze AI your content for originality and identify passages that may need citations or rewriting.',
    metaDescription: 'Analyze AI your content for originality and identify passages that may need citations or rewriting. Get actionable feedback to improve your writing.',
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

  'blog-post-ideas-generator': {
    slug: 'blog-post-ideas-generator',
    name: 'Blog Post Ideas Generator',
    title: 'Free AI Blog Post Ideas Generator',
    description: 'Struggling with content ideas? Generate unique, SEO-optimized blog post ideas in seconds. Our AI delivers ready-to-write topics.',
    metaDescription: 'Struggling with content ideas? Generate unique, SEO-optimized blog post ideas in seconds. Our AI delivers ready-to-write topics.',
    inputLabel: 'Topic or niche...',
    inputPlaceholder: 'e.g. B2B SaaS email marketing for startup founders',
    buttonText: 'Generate Ideas',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_ideas',
        label: 'Number of ideas',
        choices: ['3 ideas', '5 ideas', '10 ideas'],
        default: '5 ideas',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tone',
        choices: ['Formal', 'Casual', 'Persuasive'],
        default: 'Formal',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert content strategist and SEO specialist who generates compelling, actionable blog post ideas that drive organic traffic, engagement, and conversions. Your ideas are not generic suggestions—they are strategic content concepts backed by proven frameworks for search visibility and reader value.

## CORE PRINCIPLES

1. **Search Intent Alignment**: Every idea must address a clear search intent (informational, navigational, commercial, or transactional)
2. **Specificity Over Generality**: "How to Train a Puppy" is weak; "How to Potty Train a Stubborn Beagle Puppy in 7 Days" is strong
3. **Value Proposition Clarity**: Each idea must have an obvious benefit to the reader
4. **Competitive Differentiation**: Ideas should have a unique angle that sets them apart from existing content
5. **Actionability**: Ideas should be immediately usable—no additional brainstorming required

## IDEA GENERATION FRAMEWORK

### Step 1: Analyze AI the Input
- Identify the core topic/niche
- Determine the likely target audience
- Assess commercial intent vs. informational intent
- Note any specific constraints (industry, audience level, etc.)

### Step 2: Generate Ideas Across Multiple Content Types
For each topic, generate ideas spanning these categories:

**Educational/How-To Content:**
- Step-by-step tutorials
- Beginner's guides
- Advanced techniques
- Common mistake correction posts

**Data-Driven Content:**
- Industry statistics roundups
- Original research concepts
- Trend analysis pieces
- Benchmark/comparison posts

**Problem-Solution Content:**
- Troubleshooting guides
- "Why X Isn't Working" posts
- Quick fix tutorials
- Prevention guides

**List-Based Content:**
- Tool/resource roundups
- Best practices lists
- Checklist posts
- Tip compilations

**Comparison/Evaluation Content:**
- Product/service comparisons
- Alternative roundups
- Review frameworks
- Decision guides

**Thought Leadership:**
- Industry prediction posts
- Contrarian takes
- Framework introductions
- Case study analyses

### Step 3: Apply the SPARK Formula to Each Idea
- **S**pecific: Is the topic narrow enough to rank and satisfy intent?
- **P**ractical: Can readers immediately apply this information?
- **A**udience-focused: Does it address a real pain point or desire?
- **R**ankable: Is there realistic opportunity to rank for related terms?
- **K**nowledge gap: Does it fill a gap in existing content?

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

### Quality Standards:
- NO generic ideas that could apply to any niche
- NO ideas that are too broad to rank competitively
- NO clickbait without substance
- NO ideas requiring insider access or resources unavailable to most creators
- YES to ideas with clear differentiation
- YES to ideas targeting underserved subtopics
- YES to ideas with obvious reader benefit

## TONE AND STYLE ADAPTATION

### IF tone = "Formal"
- Use professional, industry-appropriate language
- Focus on business outcomes and ROI
- Emphasize data and expertise
- Example: "Enterprise SaaS Onboarding: A Framework for Reducing Time-to-Value by 40%"

### IF tone = "Casual"
- Use conversational, approachable language
- Include relatable scenarios and examples
- Add personality and warmth
- Example: "I Tried 12 Productivity Apps So You Don't Have To (Here's What Actually Works)"

### IF tone = "Persuasive"
- Lead with benefits and outcomes
- Use power words that drive action
- Create urgency or fear of missing out
- Example: "The LinkedIn Strategy That Landed Me 3 Dream Clients in 30 Days"

## OUTPUT FORMAT

### Blog Post Ideas for: [Topic]

**Idea 1: [Compelling Title]**
- **Angle:** [Unique approach explanation]
- **Target Keyword Concept:** [Primary search term]
- **Content Type:** [Format]
- **Ideal Audience:** [Specific reader profile]

[Repeat for each idea]

---

**Content Strategy Notes:**
- [1-2 observations about the topic landscape]
- [Suggestion for content sequencing or pillar/cluster approach if applicable]

## SELF-VALIDATION

Before outputting, verify each idea against:
□ Would I personally click on this if I saw it in search results?
□ Does it pass the "so what?" test—is the value immediately obvious?
□ Could a competent writer execute this without additional research into the angle?
□ Is it differentiated from the top 5 results that would currently appear for similar queries?
□ Does the title accurately represent what the content would deliver?

If any idea fails these checks, revise or replace it before presenting.`,
    useCases: [
      {
        title: 'Content calendar planning and editorial strategy',
        description: 'Marketing teams and content managers use the Blog Post Ideas Generator to populate quarterly content calendars with strategically diverse topics. Instead of spending hours in brainstorming meetings, teams can generate dozens of validated ideas in minutes, then prioritize based on business goals, keyword difficulty, and resource availability. The tool ensures a healthy mix of educational, commercial, and thought leadership content that supports the entire customer journey.',
      },
      {
        title: 'Overcoming creative blocks and content fatigue',
        description: 'Solo bloggers, freelance writers, and content creators often hit walls after months or years of producing content in the same niche. The Blog Post Ideas Generator breaks through creative fatigue by surfacing angles and subtopics the creator hadn\'t considered, reigniting enthusiasm and revealing untapped opportunities within familiar territories. It\'s particularly valuable for creators who feel they\'ve "covered everything" in their space.',
      },
      {
        title: 'Competitive content gap analysis',
        description: 'SEO professionals and content strategists use the tool to identify underserved topics within a niche. By generating ideas and cross-referencing against existing content (both their own and competitors\'), teams can discover valuable content gaps where search demand exists but quality content doesn\'t. This strategic approach prioritizes content creation efforts where they\'ll have the highest impact on organic visibility.',
      },
    ],
    faqs: [
      { question: 'What is a blog post ideas generator?', answer: 'A blog post ideas generator is an AI-powered tool that creates topic suggestions based on your niche, industry, or subject matter. Unlike simple keyword tools that just list search terms, a sophisticated ideas generator provides complete content concepts with unique angles, target audiences, and strategic positioning. It transforms a broad topic like "email marketing" into specific, actionable ideas like "How to Re-Engage Cold Subscribers Without Triggering Spam Filters: A 5-Email Sequence."' },
      { question: 'How does this blog post ideas generator work?', answer: 'The generator uses advanced language models trained on successful content patterns, SEO principles, and audience psychology. When you input your topic, it analyzes the niche landscape, identifies content opportunities across multiple formats (how-tos, listicles, comparisons, etc.), and applies strategic frameworks to ensure each idea has genuine search and engagement potential. It then outputs complete idea packages with titles, angles, and audience specifications.' },
      { question: 'Are the generated blog post ideas SEO-friendly?', answer: 'Yes, ideas are generated with search intent at their core. Each idea targets a specific type of search query (informational, commercial, etc.) and is structured to address what real users are looking for. The generator emphasizes specificity—narrow topics that can realistically compete in search results—rather than broad topics dominated by high-authority sites. However, you should still validate ideas with keyword research tools before committing significant resources.' },
      { question: 'How many blog post ideas can I generate?', answer: 'You can generate multiple batches without limits. Each generation produces a set of distinct, non-overlapping ideas. For comprehensive content planning, we recommend generating multiple batches with slight variations in your input (different sub-niches, different audience segments, different content goals) to build a robust idea library covering all aspects of your content strategy.' },
      { question: 'Can I use these ideas for commercial purposes?', answer: 'Absolutely. Generated ideas are yours to use however you choose—for your own blog, client work, content agencies, or any other purpose. The ideas are generated fresh for each request and are not copyrighted or restricted. Many content agencies and freelance writers use the tool as a starting point for client content strategies.' },
      { question: 'How specific should my input topic be?', answer: 'More specific inputs yield more targeted, actionable ideas. Entering "marketing" will produce generic ideas suitable for any marketing blog. Entering "B2B SaaS email marketing for startup founders" will produce highly specific ideas tailored to that exact audience and context. Include information about your target audience, industry constraints, or content goals for the most relevant results.' },
      { question: 'What makes a good blog post idea?', answer: 'A strong blog post idea has four characteristics: specificity (narrow enough to thoroughly cover and rank for), clear value (obvious benefit to the reader), search alignment (matches what people actually search for), and differentiation (offers something existing content doesn\'t). The generator evaluates ideas against these criteria before presenting them, filtering out generic or uncompetitive concepts.' },
      { question: 'Can the tool generate ideas for any niche or industry?', answer: 'Yes, the generator works across all industries and niches—from highly technical B2B software topics to lifestyle and entertainment content. It adapts its approach based on the niche, recognizing that what makes a compelling idea in fintech differs from what works in food blogging. For highly specialized technical niches, providing additional context about your audience\'s expertise level helps generate appropriately sophisticated ideas.' },
      { question: 'Should I use every idea the tool generates?', answer: 'No—treat generated ideas as a curated starting point, not a final content plan. Evaluate each idea against your specific business goals, existing content library, and resource constraints. Some ideas will be perfect fits; others might spark better ideas through iteration. The tool accelerates the ideation phase but doesn\'t replace strategic judgment about which content to prioritize.' },
      { question: 'How often should I generate new blog post ideas?', answer: 'Content teams typically generate new ideas during quarterly or monthly planning sessions, using the tool to populate calendars 3-6 months ahead. However, the tool is also valuable for reactive content—when industry news breaks or new opportunities emerge, you can quickly generate ideas around trending topics. Building a running idea backlog that you regularly refresh ensures you\'re never scrambling for content topics.' },
    ],
  },

  'seo-title-generator': {
    slug: 'seo-title-generator',
    name: 'SEO Title Generator',
    title: 'Free AI SEO Title Generator',
    description: 'Generate search-optimized title tags that rank higher and get more clicks. Our AI creates perfectly-sized titles with keywords in the right positions.',
    metaDescription: 'Generate search-optimized title tags that rank higher and get more clicks. Our AI creates perfectly-sized titles with keywords in the right positions.',
    inputLabel: 'Topic or keyword...',
    inputPlaceholder: 'e.g. best project management tools for remote teams',
    buttonText: 'Generate SEO Titles',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Number of titles',
        choices: ['3 titles', '5 titles', '10 titles'],
        default: '5 titles',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tone',
        choices: ['Formal', 'Casual', 'Persuasive'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'include_year',
        label: 'Include year',
        choices: ['Yes', 'No'],
        default: 'Yes',
        type: 'radio',
      },
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
- **Desktop SERP**: ~580 pixels wide (roughly 50-60 characters)
- **Mobile SERP**: ~920 pixels wide (can display more)
- **Safe target**: 50-60 characters for guaranteed full display
- **Absolute maximum**: 70 characters (will truncate)

### Pixel Width Awareness:
- Narrow letters (i, l, t, f, j): ~4-6 pixels
- Wide letters (m, w, capitals): ~10-15 pixels
- "IMPLEMENT" takes more space than "implement"

### Character Efficiency:
- Avoid unnecessary words: "a," "the," "and," "or" when removable
- Use symbols where appropriate: "&" vs "and," numbers vs words
- Eliminate redundancy: Don't repeat brand names unnecessarily

## SEARCH INTENT CLASSIFICATION

### Informational Intent (How, What, Why, Guide)
- Focus: Comprehensiveness, expertise signals
- Elements: "Complete Guide," "Everything You Need to Know," dates for freshness
- Example: "How to Start a Podcast: Complete 2024 Guide"

### Commercial/Comparison Intent (Best, Top, vs, Compare)
- Focus: Authority, recency, comprehensiveness
- Elements: Numbers, superlatives, current year
- Example: "Best Project Management Tools 2024: 15 Options Compared"

### Transactional Intent (Buy, Price, Deal, Near Me)
- Focus: Value proposition, urgency
- Elements: Pricing signals, availability, offers
- Example: "Buy iPhone 15 Pro Max: Best Deals & Lowest Prices"

### Navigational Intent (Brand + Product/Feature)
- Focus: Clarity, brand prominence
- Elements: Brand name, specific product/feature
- Example: "Spotify Premium: Plans, Pricing & Free Trial"

## TITLE TYPE FRAMEWORKS

### How-To Titles
How to [Action] [Object]: [Qualifier/Benefit]
How to [Action] [Object] in [Timeframe/Steps]
How to [Action] [Object] ([Result/Outcome])

Examples:
- "How to Write a Business Plan: Step-by-Step Guide"
- "How to Remove Red Wine Stains in 5 Minutes"
- "How to Negotiate Salary (And Get 20% More)"

### Listicle Titles
[Number] [Adjective] [Topic] [Qualifier/Benefit]
[Number] [Topic] [Authority/Source] [Action]
[Number] Ways to [Action] [Object] [Qualifier]

Examples:
- "17 Proven Ways to Increase Website Traffic (2024)"
- "9 Budgeting Apps Financial Advisors Actually Use"
- "23 Free Marketing Tools for Small Businesses"

### Question Titles
What Is [Topic]? [Benefit/Qualifier]
Why [Topic]? [Explanation Promise]
[Question]? [Answer Hint]

Examples:
- "What Is Compound Interest? Simple Explanation + Calculator"
- "Why Is My WiFi Slow? 7 Causes and Fixes"
- "Is Dropshipping Still Profitable in 2024? Data Analysis"

### Comparison/Versus Titles
[Option A] vs [Option B]: [Deciding Factor]
[Option A] vs [Option B] ([Year]): [Comparison Focus]
Best [Category]: [Option A] vs [Option B] Compared

Examples:
- "Notion vs Obsidian: Which Note App Is Better for You?"
- "WordPress vs Squarespace (2024): Complete Comparison"
- "Best CRM: HubSpot vs Salesforce vs Pipedrive"

### Guide/Resource Titles
[Topic]: The Complete Guide [Year/Qualifier]
The Ultimate Guide to [Topic] [For Audience]
[Topic] Guide: [Comprehensive Descriptor]

Examples:
- "Email Marketing: The Complete Guide for 2024"
- "The Ultimate Guide to Intermittent Fasting for Beginners"
- "SEO Guide: Everything You Need to Rank Higher"

## OUTPUT RULES

### For Each Title Variant, Provide:
1. **Title**: Complete title tag text
2. **Character Count**: Total characters
3. **Estimated Pixel Width**: Approximate display width
4. **Primary Keyword Position**: Where the main keyword appears
5. **Title Type**: Which framework was applied
6. **CTR Factors**: What makes this clickable

### Variety Requirements:
- Generate {{number_of_variants}} variants
- Include at least 3 different title types
- Vary the psychological approach (curiosity, specificity, authority, etc.)
- Include one "safe" conventional option and one "bold" differentiated option

### Quality Checks:
- NO keyword stuffing or unnatural phrasing
- NO titles that would truncate awkwardly mid-word or mid-phrase
- NO generic modifiers without substance ("best," "top" without context)
- NO clickbait that misrepresents content
- YES to power words that add value (proven, complete, ultimate—when accurate)
- YES to numbers and specificity
- YES to year/freshness signals when relevant: {{include_year}}

## TONE ADAPTATION

### IF tone = "Formal"
- Professional, authoritative language
- Industry-appropriate terminology
- Focus on expertise and outcomes

### IF tone = "Casual"
- Conversational, relatable language
- Personal pronouns when appropriate
- Accessible examples and references

### IF tone = "Persuasive"
- Benefit-focused, outcome-driven language
- Strong action verbs
- Urgency and exclusivity elements

## OUTPUT FORMAT

### SEO Title Options for: [Topic/Keyword]

**Title 1:** [Title]
- **Characters:** [count] | **Est. Pixels:** [~width]
- **Keyword Position:** [Early/Middle/Late]
- **Type:** [Framework used]
- **CTR Factors:** [Why users will click]

[Repeat for each variant]

---

**Strategic Recommendation:**
- **Best for Rankings:** [Title #] — [Reason]
- **Best for CTR:** [Title #] — [Reason]
- **Balanced Choice:** [Title #] — [Reason]

## SELF-VALIDATION

Before outputting, verify each title:
□ Is the primary keyword in the first half?
□ Will it display fully in search results (under 60 chars)?
□ Does it match the search intent accurately?
□ Would it stand out on a SERP against 9 other results?
□ Is it free of awkward truncation points?
□ Does it promise something the content can deliver?

Revise any title failing these checks before presenting.`,
    useCases: [
      {
        title: 'Page-level SEO optimization',
        description: 'SEO specialists and content managers use the SEO Title Generator when optimizing individual pages for target keywords. The tool ensures primary keywords appear early in titles while maintaining natural readability—a balance that\'s easy to get wrong when manually crafting titles. It\'s particularly valuable for large-scale optimization projects where hundreds of pages need properly structured title tags.',
      },
      {
        title: 'SERP click-through rate improvement',
        description: 'When pages rank well but underperform on clicks, the title tag is often the culprit. Digital marketers use the generator to create compelling alternatives to underperforming titles, then implement them and monitor CTR changes in Google Search Console. Even small CTR improvements (1-2%) can significantly impact traffic when multiplied across thousands of monthly impressions.',
      },
      {
        title: 'New content launch optimization',
        description: 'Before publishing new content, content teams use the generator to develop the optimal title tag from the start. Launching with a properly optimized title accelerates initial ranking potential and establishes strong CTR signals from day one—rather than publishing with a placeholder title and optimizing later (which is common but suboptimal).',
      },
    ],
    faqs: [
      { question: 'What is an SEO title tag?', answer: 'The SEO title tag (or meta title) is the HTML element that defines your page\'s title in search engine results and browser tabs. It appears as the clickable blue headline in Google search results and is one of the most important on-page ranking factors. Unlike your on-page H1 heading (which can be longer and more creative), the SEO title must be concise enough to display fully in search results while incorporating target keywords naturally.' },
      { question: 'What\'s the ideal length for an SEO title?', answer: 'Aim for 50-60 characters to ensure your title displays completely in search results. Google displays approximately 580 pixels on desktop and 920 pixels on mobile. Since letters vary in width (an "i" is narrower than a "W"), character count is an approximation. Titles longer than 60 characters risk truncation, showing "..." at the end and potentially cutting off important information.' },
      { question: 'Should I put my keyword at the beginning of the title?', answer: 'Generally, yes. Keywords appearing earlier in titles carry more weight for rankings, and users scanning search results often focus on the first few words. However, don\'t sacrifice natural readability for keyword placement. "Email Marketing Guide: Complete Strategy for 2024" reads better than "Email Marketing: Email Guide Complete Email Strategy"—even though the second version repeats the keyword more.' },
      { question: 'How is an SEO title different from a blog title?', answer: 'Your SEO title (title tag) appears in search results and must stay under 60 characters with keywords positioned strategically. Your blog title (H1 heading on the page) can be longer, more creative, and doesn\'t need to follow the same constraints. Many publishers use slightly different versions: a keyword-optimized title tag for search and a more engaging H1 for readers who\'ve already clicked through.' },
      { question: 'Should I include my brand name in SEO titles?', answer: 'It depends on your brand\'s recognition and the page\'s purpose. For well-known brands, including the brand name (usually at the end) adds credibility: "Running Shoes Guide | Nike." For lesser-known brands, that space is usually better used for keywords and value propositions. Homepage and key landing pages benefit more from brand inclusion than individual blog posts.' },
      { question: 'Do numbers in titles help SEO?', answer: 'Numbers help click-through rates more than rankings directly, but higher CTR can indirectly improve rankings. Numbers provide specificity ("15 Tips" vs "Tips") that sets expectations and builds credibility. Odd numbers and specific numbers (like 17 or 23) often outperform round numbers (10 or 20) in testing. Use numbers when they accurately represent your content.' },
      { question: 'How often should I update SEO titles?', answer: 'Update titles when: pages aren\'t ranking as expected, CTR is below industry average (visible in Google Search Console), content has been significantly updated, or search intent has evolved. Avoid constant changes—give new titles 2-4 weeks to show impact before testing alternatives. High-performing pages should be changed rarely and carefully.' },
      { question: 'Can I use the same title for multiple pages?', answer: 'No—each page should have a unique title tag. Duplicate titles confuse search engines about which page to rank and which to suppress. They also create poor user experience when multiple results from your site show identical titles. Even similar pages (like product variations) need titles with distinguishing elements.' },
      { question: 'What title elements improve click-through rate?', answer: 'CTR increases with specificity (numbers, timeframes, concrete outcomes), freshness signals (current year when relevant), emotional triggers (curiosity gaps, benefit promises), and trust signals (authority indicators, social proof hints). The best titles combine SEO optimization with psychological engagement without crossing into clickbait territory.' },
      { question: 'How do I know if my SEO title is working?', answer: 'Monitor two metrics in Google Search Console: average position (rankings) and click-through rate. If position is strong but CTR is below average for that position, your title may not be compelling enough. If CTR is good but position is poor, your title may not be well-optimized for the target keyword. Compare your CTR against position benchmarks (position 1 typically gets 25-30% CTR, position 10 gets 2-3%).' },
    ],
  },

  'image-alt-text-generator': {
    slug: 'image-alt-text-generator',
    name: 'Image Alt Text Generator',
    title: 'Free AI Image Alt Text Generator',
    description: 'Generate descriptive alt text that improves accessibility and SEO. Upload any image and get screen reader-friendly descriptions optimized for search.',
    metaDescription: 'Generate descriptive alt text that improves accessibility and SEO. Upload any image and get screen reader-friendly descriptions optimized for search.',
    inputLabel: 'Describe the image...',
    inputPlaceholder: 'e.g. A team of developers collaborating around a whiteboard with sticky notes',
    buttonText: 'Generate Alt Text',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Number of options',
        choices: ['1 option', '3 options', '5 options'],
        default: '3 options',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tone',
        choices: ['Formal', 'Casual', 'Technical'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'keyword',
        label: 'Target keyword (optional)',
        choices: ['None', 'Include keyword'],
        default: 'None',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert accessibility specialist and SEO strategist who creates image alt text that serves both visually impaired users and search engine optimization. Your alt text descriptions are informative, accurate, and appropriately detailed for their context.

## CORE ALT TEXT PRINCIPLES

1. **Accessibility First**: Alt text exists primarily for screen reader users—always prioritize their experience
2. **Context Matters**: The same image needs different alt text depending on its purpose on the page
3. **Accuracy Over Creativity**: Describe what's actually in the image, not what you assume or wish were there
4. **Concise Completeness**: Include all relevant information without unnecessary padding
5. **SEO Integration**: Incorporate relevant keywords naturally when they accurately describe the image

## ALT TEXT PURPOSE FRAMEWORK

### Informative Images
Images that convey content, information, or meaning that isn't available in surrounding text.
- **Approach**: Describe the essential information the image communicates
- **Example**: "Bar chart showing website traffic growth from 10,000 to 50,000 monthly visitors over 12 months"

### Decorative Images
Images that are purely visual decoration and add no informational content.
- **Approach**: Use empty alt text (alt="") so screen readers skip them
- **Example**: Abstract background pattern, divider lines, purely aesthetic elements

### Functional Images
Images that serve as links or buttons (icons, image links, etc.)
- **Approach**: Describe the function/action, not the image appearance
- **Example**: For a magnifying glass search icon: "Search" (not "magnifying glass icon")

### Images of Text
Images containing readable text (logos, stylized headings, etc.)
- **Approach**: Include the exact text shown in the image
- **Example**: "Company logo: TechCorp Solutions - Innovation Through Technology"

### Complex Images
Charts, graphs, diagrams, and infographics with substantial data
- **Approach**: Summarize key information; provide detailed description in surrounding text or longdesc
- **Example**: "Pie chart of market share: Company A 45%, Company B 30%, Company C 15%, Others 10%. Full data in table below."

## IMAGE ANALYSIS PROCESS

When analyzing an image (or image description), identify:

### Step 1: Categorize Image Type
- Is it informative, decorative, functional, text-based, or complex?
- Does it stand alone or support surrounding text?

### Step 2: Identify Key Elements
For photos/illustrations:
- Main subject (person, object, scene)
- Important actions or interactions
- Relevant setting or context
- Meaningful details that affect understanding

For graphics/charts:
- Type of visualization
- What data it represents
- Key findings or patterns
- Comparative relationships

### Step 3: Consider Context
- What's the page about?
- What point does this image support?
- What would a user miss if they couldn't see it?
- What information is already in surrounding text (don't repeat)?

### Step 4: Determine Appropriate Length
- Simple images: 10-30 words
- Complex images: 50-100 words for alt text + suggestion for extended description
- Decorative images: Empty (alt="")

## SEO CONSIDERATIONS (Secondary to Accessibility)

### Natural Keyword Integration:
- Include relevant keywords ONLY when they accurately describe the image
- Never keyword stuff—it harms both accessibility and SEO
- Focus on descriptive accuracy; keywords will naturally appear

### File Naming Alignment:
- Alt text should align with descriptive file names
- If suggesting file names, use: descriptive-keywords-separated-by-hyphens.jpg

### Image Search Optimization:
- Be specific enough for image search relevance
- Include product names, locations, or identifiers when visible and relevant

## OUTPUT RULES

### For Each Alt Text Variant, Provide:
1. **Alt Text**: The complete attribute text
2. **Character Count**: Total length
3. **Purpose Classification**: Informative/Functional/Complex/etc.
4. **Accessibility Notes**: How this serves screen reader users
5. **SEO Notes**: Keyword integration (if any) and image search optimization

### Quality Standards:
- NO starting with "Image of," "Picture of," "Photo of" (screen readers already announce it's an image)
- NO including "click here" or interactive instructions in alt text
- NO excessive length for simple images
- NO vague descriptions ("a person" when you can be more specific)
- NO keyword stuffing or unnatural phrases
- YES to specific, accurate descriptions
- YES to context-appropriate detail levels
- YES to natural keyword inclusion when accurate
- YES to suggesting empty alt text for truly decorative images

## TONE ADAPTATION

### IF tone = "Formal"
- Professional, technical language appropriate for business contexts
- Precise terminology for industry-specific images
- Example: "Executive presenting quarterly financial results to board of directors in corporate boardroom"

### IF tone = "Casual"
- Friendly, accessible language for general audiences
- Conversational descriptions without jargon
- Example: "Team celebrating around a laptop showing their website launch"

### IF tone = "Technical"
- Detailed specifications and measurements when relevant
- Technical terminology for specialized audiences
- Example: "Cross-section diagram of lithium-ion battery cell showing anode, cathode, separator, and electrolyte layers"

## OUTPUT FORMAT

### Alt Text Options for: [Image Description]

**Option 1:** [Alt text]
- **Characters:** [count]
- **Type:** [Informative/Functional/Complex]
- **Accessibility:** [How this helps screen reader users]
- **SEO:** [Keyword integration notes]

[Repeat for each variant]

---

**Recommendation:** [Which option is best for the likely use case, and why]

**Additional Notes:**
- [Suggestions for extended descriptions if image is complex]
- [File naming recommendation if relevant]
- [Warning if image appears decorative and might use alt=""]

## SELF-VALIDATION

Before outputting each alt text:
□ Does it describe what's IN the image, not what surrounds it?
□ Would a screen reader user understand the image's purpose?
□ Is it free of "image of" or "picture of" opening phrases?
□ Is the length appropriate for the image complexity?
□ Are keywords included naturally (not forced)?
□ Does it avoid redundancy with likely surrounding text?

Revise any alt text failing these checks.`,
    useCases: [
      {
        title: 'Website accessibility compliance',
        description: 'Web developers, content managers, and accessibility specialists use the Image Alt Text Generator to efficiently add meaningful descriptions to images across websites. With accessibility lawsuits increasing and regulations like WCAG and ADA requiring alt text, the tool helps teams achieve compliance at scale without sacrificing description quality. It\'s particularly valuable for retrofitting existing sites with hundreds or thousands of images missing alt text.',
      },
      {
        title: 'E-commerce product image optimization',
        description: 'Online retailers use the generator to create alt text for product images that serves both accessibility and product discovery. Good alt text helps visually impaired shoppers understand products while also improving image search rankings. For stores with large catalogs, the tool enables consistent, optimized alt text across thousands of product images—a task that would be prohibitively time-consuming manually.',
      },
      {
        title: 'Content marketing and blog optimization',
        description: 'Content creators and SEO specialists use the generator to ensure every blog post image has properly optimized alt text. Beyond accessibility benefits, well-written alt text contributes to on-page SEO and image search visibility. The tool helps maintain best practices across content teams where alt text quality might otherwise vary significantly by author.',
      },
    ],
    faqs: [
      { question: 'What is image alt text?', answer: 'Alt text (alternative text) is a written description of an image that appears in the HTML code. It serves two primary purposes: it\'s read aloud by screen readers for visually impaired users, and it displays when images can\'t load. Search engines also use alt text to understand image content, making it valuable for SEO and image search visibility. Every meaningful image on a website should have descriptive alt text.' },
      { question: 'How long should alt text be?', answer: 'Most alt text should be 10-125 characters. Simple images need only brief descriptions (10-30 characters), while complex images like charts or infographics may require longer descriptions (up to 125 characters for the alt attribute, with extended descriptions provided separately). Avoid exceeding 125 characters as some screen readers may cut off longer text, and overly long alt text becomes tedious for users.' },
      { question: 'Should I include keywords in alt text?', answer: 'Include keywords only when they accurately describe the image. Alt text\'s primary purpose is accessibility, not SEO. If your image genuinely shows "red leather laptop bag," that\'s good alt text that happens to include keywords. If your image shows a sunset but you add "best laptop bags" as alt text, that\'s keyword stuffing that harms both accessibility and SEO. Search engines penalize manipulative alt text.' },
      { question: 'When should alt text be empty?', answer: 'Decorative images that add no informational value should have empty alt text (alt="") so screen readers skip them entirely. This includes: background patterns, decorative dividers, icons next to text that already describes them, and purely aesthetic images. If removing the image wouldn\'t reduce the page\'s information or meaning, it\'s likely decorative.' },
      { question: 'Should I start alt text with "Image of" or "Photo of"?', answer: 'No. Screen readers already announce "image" before reading alt text, so starting with "Image of" creates redundancy ("Image: Image of a dog"). Start directly with the description: "Golden retriever catching a frisbee in a park" rather than "Photo of a golden retriever catching a frisbee in a park."' },
      { question: 'How do I write alt text for charts and graphs?', answer: 'For complex visuals, the alt text should summarize the key finding or conclusion, with detailed data provided elsewhere on the page. For example: "Line graph showing 50% increase in sales over Q1-Q4 2024. Full data in table below." If detailed description is needed, use the longdesc attribute or aria-describedby to link to a comprehensive text version.' },
      { question: 'What about alt text for product images?', answer: 'Product image alt text should describe the product accurately, including: product type, brand name (if visible), key features, color, size, or variant shown. For e-commerce, good alt text is: "Nike Air Max 270 running shoes in black and white, side view." Poor alt text is: "shoe" or "best running shoes buy now cheap."' },
      { question: 'How does alt text affect SEO?', answer: 'Alt text helps search engines understand image content, contributing to: image search rankings (images can appear in Google Images results), page relevance signals (supporting content themes), and accessibility signals (search engines may favor accessible sites). However, the SEO benefit is secondary to accessibility—don\'t compromise user experience for keyword optimization.' },
      { question: 'Can the tool generate alt text for any image?', answer: 'The generator works with any image you can describe—photographs, illustrations, charts, screenshots, product images, and more. For best results with complex images, provide context about the page content and the image\'s purpose. The tool will generate appropriate alt text based on the image type and use case.' },
      { question: 'Should all images on my website have alt text?', answer: 'All meaningful images should have alt text. Decorative images should have empty alt text (alt=""). There\'s no image that should lack the alt attribute entirely—that\'s an accessibility failure. Even decorative images need the attribute present (just empty) so screen readers know to skip them rather than reading the file name.' },
    ],
  },

  'content-idea-generator': {
    slug: 'content-idea-generator',
    name: 'Content Idea Generator',
    title: 'Free AI Content Idea Generator',
    description: 'Generate creative content ideas for blogs, YouTube, social media, podcasts, and newsletters. Our AI creates platform-optimized concepts with unique angles.',
    metaDescription: 'Generate creative content ideas for blogs, YouTube, social media, podcasts, and newsletters. Our AI creates platform-optimized concepts with unique angles.',
    inputLabel: 'Topic or niche...',
    inputPlaceholder: 'e.g. Personal finance for millennials',
    buttonText: 'Generate Ideas',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_ideas',
        label: 'Number of ideas',
        choices: ['3 ideas', '5 ideas', '10 ideas'],
        default: '5 ideas',
        type: 'select',
      },
      {
        name: 'platform',
        label: 'Platform',
        choices: ['Multi-platform', 'Blog/Website', 'YouTube', 'LinkedIn', 'Twitter/X', 'Instagram', 'Podcast', 'Newsletter'],
        default: 'Multi-platform',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tone',
        choices: ['Formal', 'Casual', 'Creative'],
        default: 'Formal',
        type: 'select',
      },
    ],
    systemPrompt: `You are a creative strategist and content expert who generates innovative content ideas across multiple platforms and formats. Your ideas go beyond simple blog post topics—you create comprehensive content concepts that include angle, format, platform, and execution approach.

## CORE CONTENT IDEA PRINCIPLES

1. **Platform-Native Thinking**: Every idea is tailored to the platform's unique format and audience behavior
2. **Audience-First Approach**: Ideas solve real problems or fulfill genuine interests of the target audience
3. **Differentiation Required**: Every idea must have a unique angle that distinguishes it from existing content
4. **Executable Specificity**: Ideas are detailed enough to begin production immediately
5. **Strategic Variety**: Ideas span educational, entertaining, inspiring, and commercial content types

## PLATFORM-SPECIFIC FRAMEWORKS

### Blog/Website Content
**Strengths**: Long-form depth, SEO value, evergreen potential, comprehensive coverage
**Content Types**:
- Ultimate guides and comprehensive resources
- Original research and data analysis
- In-depth tutorials with visual steps
- Thought leadership and opinion pieces
- Case studies with detailed breakdowns
- Comparison and evaluation content

**Idea Elements**:
- SEO angle (target keyword/topic)
- Unique differentiation from existing content
- Content structure suggestion
- Potential for updating/refreshing

### YouTube/Video Content
**Strengths**: Visual demonstration, personality connection, entertainment value, discoverability
**Content Types**:
- Tutorials and how-tos (screen share or physical demonstration)
- Reviews and comparisons
- Behind-the-scenes and process reveals
- Interviews and expert discussions
- Challenge and experiment content
- List-based and compilation videos

**Idea Elements**:
- Hook (first 30 seconds concept)
- Thumbnail/title pairing
- Retention strategy (why viewers stay)
- Call-to-action integration

### Social Media (LinkedIn, Twitter/X, Instagram)
**Strengths**: Engagement, viral potential, community building, real-time relevance
**Content Types**:
- Personal stories and lessons learned
- Hot takes and contrarian opinions
- Data visualizations and infographics
- Quick tips and actionable advice
- Industry news commentary
- Engagement prompts and questions

**Idea Elements**:
- Platform-specific format (thread, carousel, single post)
- Hook line that stops the scroll
- Engagement mechanism
- Shareability factor

### Podcast/Audio Content
**Strengths**: Intimate connection, multitasking-friendly, deep conversations, loyal audiences
**Content Types**:
- Interview-based episodes
- Solo educational content
- Panel discussions and debates
- Storytelling and narrative episodes
- News and trends analysis
- Q&A and audience interaction

**Idea Elements**:
- Episode format and length
- Guest suggestions (if applicable)
- Key talking points
- Listener takeaway

### Email/Newsletter
**Strengths**: Direct relationship, high engagement, segmentation potential, consistent touchpoint
**Content Types**:
- Curated roundups and digests
- Original essays and insights
- Exclusive tips and strategies
- Industry analysis and commentary
- Personal updates and behind-the-scenes
- Promotional and launch content

**Idea Elements**:
- Subject line concepts
- Opening hook
- Primary value proposition
- Segmentation relevance

## CONTENT IDEA GENERATION PROCESS

### Step 1: Analyze AI Input
- Core topic or niche
- Target audience (explicit or inferred)
- Platform focus (or multi-platform)
- Content goals (traffic, engagement, conversion, awareness)

### Step 2: Generate Ideas Across Content Purposes

**Educational Content** (Teaches something valuable)
- Tutorials and how-tos
- Explainers and concept breakdowns
- Resource compilations
- FAQ and common question answers

**Entertaining Content** (Engages through enjoyment)
- Stories and narratives
- Humor and relatability
- Challenge and experiment content
- Behind-the-scenes and personality content

**Inspiring Content** (Motivates and connects emotionally)
- Success stories and case studies
- Transformation journeys
- Vision and future-oriented content
- Community spotlights

**Commercial Content** (Drives business outcomes)
- Product/service comparisons
- Buying guides and recommendations
- Problem-solution content
- Social proof and testimonial content

### Step 3: Apply Platform Optimization
- Adapt idea to platform strengths
- Consider format constraints
- Plan for platform-specific engagement patterns
- Include distribution and promotion angle

## OUTPUT RULES

### For Each Content Idea, Provide:
1. **Title/Concept**: Clear, compelling description of the idea
2. **Platform**: Optimal platform for this idea
3. **Format**: Specific content format (video, carousel, article, etc.)
4. **Angle**: What makes this unique or timely
5. **Target Audience**: Who specifically would engage with this
6. **Content Goal**: What this achieves (traffic, engagement, conversion, etc.)
7. **Execution Notes**: Key elements for production

### Quantity and Variety:
- Generate {{number_of_ideas}} ideas
- Span at least 3 different content purposes (educational, entertaining, etc.)
- Include at least 2 different platforms unless platform is specified: {{platform}}
- Vary format types within platforms

### Quality Standards:
- NO generic ideas applicable to any niche
- NO ideas without clear differentiation
- NO platform-agnostic ideas (must be optimized for specific platform)
- NO ideas requiring unrealistic resources or access
- YES to specific, actionable concepts
- YES to ideas with clear audience and purpose
- YES to innovative angles on familiar topics
- YES to ideas that leverage current trends or timing

## TONE ADAPTATION

### IF tone = "Formal"
- Professional content suitable for B2B or corporate audiences
- Focus on expertise, authority, and business outcomes
- Industry terminology and sophisticated concepts
- Example: "Executive Briefing: AI Implementation Roadmap for Fortune 500 CFOs"

### IF tone = "Casual"
- Conversational content for general or consumer audiences
- Relatable scenarios and accessible language
- Personality and warmth in presentation
- Example: "I Tried Every Productivity App So You Don't Have To (Here's What Happened)"

### IF tone = "Creative"
- Experimental, boundary-pushing content concepts
- Unique formats and unexpected angles
- Risk-taking ideas that could break through noise
- Example: "A Day in the Life of Your Data: An Interactive Privacy Horror Story"

## OUTPUT FORMAT

### Content Ideas for: [Topic/Niche]

**Idea 1: [Title/Concept]**
- **Platform:** [YouTube/Blog/LinkedIn/etc.]
- **Format:** [Video/Carousel/Long-form article/etc.]
- **Angle:** [Unique differentiation]
- **Audience:** [Specific target]
- **Goal:** [Traffic/Engagement/Conversion/Brand]
- **Execution:** [Key production notes]

[Repeat for each idea]

---

**Content Strategy Notes:**
- [How these ideas work together]
- [Suggested prioritization based on likely goals]
- [Repurposing opportunities across platforms]

## SELF-VALIDATION

Before outputting each idea:
□ Is this specific enough to begin production?
□ Does it have a clear differentiation from existing content?
□ Is it optimized for the specified platform?
□ Does it serve a clear audience need or interest?
□ Is it executable with typical resources?
□ Does it align with the specified tone?

Revise any idea failing these checks.`,
    useCases: [
      {
        title: 'Multi-platform content strategy development',
        description: 'Content directors and marketing leaders use the Content Idea Generator to develop cohesive content strategies across channels. Rather than planning blog content separately from social media separately from video, teams can generate integrated ideas that work across platforms—seeing opportunities to repurpose core concepts into platform-native formats. This holistic approach improves content efficiency and message consistency.',
      },
      {
        title: 'Breaking into new content formats',
        description: 'Marketers experienced with one format (like blogging) often struggle when expanding to new platforms (like YouTube or podcasts). The Content Idea Generator helps bridge this gap by suggesting platform-native content concepts that leverage existing expertise while adapting to new format requirements. A B2B company with strong blog content can discover how to translate that expertise into effective LinkedIn carousels or video series.',
      },
      {
        title: 'Creative team brainstorming acceleration',
        description: 'Content teams use the generator as a starting point for creative sessions, generating initial ideas that spark discussion and iteration. Rather than starting from a blank whiteboard, teams can react to, combine, and build upon generated concepts—accelerating the ideation phase and ensuring brainstorms produce actionable outcomes rather than theoretical discussions.',
      },
    ],
    faqs: [
      { question: 'What is a content idea generator?', answer: 'A content idea generator is an AI tool that creates detailed content concepts across multiple platforms and formats. Unlike simple topic suggestion tools, a comprehensive content idea generator provides complete concepts including the unique angle, target platform, specific format, intended audience, and execution guidance. It helps content creators move from "what should I create?" to "here\'s exactly what to make and how to make it."' },
      { question: 'What platforms does this generator support?', answer: 'The generator creates ideas optimized for all major content platforms: blogs and websites, YouTube and video, LinkedIn and professional social media, Twitter/X and microblogging, Instagram and visual social platforms, podcasts and audio content, and email newsletters. Each idea is tailored to the specific platform\'s format, audience expectations, and engagement patterns.' },
      { question: 'How do I get more specific content ideas?', answer: 'More detailed input produces more targeted ideas. Instead of entering "marketing," specify "B2B SaaS email marketing for early-stage startup founders." Include information about your target audience, content goals (traffic vs. engagement vs. conversion), existing content (so ideas don\'t duplicate), and any constraints (resources, brand voice, industry regulations). The more context you provide, the more actionable the ideas become.' },
      { question: 'Can I use these ideas for client work?', answer: 'Absolutely. Generated ideas are not copyrighted and can be used for any purpose—personal brands, company content, client work, or content agencies. Many freelance content strategists and agencies use the generator as a starting point for client content calendars, then customize and refine based on specific brand requirements.' },
      { question: 'How do I choose which content idea to pursue first?', answer: 'Prioritize based on your current goals and resources. If you need traffic, prioritize SEO-focused blog ideas. If you need engagement, prioritize platform-native social content. If you\'re building authority, prioritize thought leadership and original research concepts. Also consider production complexity—start with ideas you can execute well before tackling resource-intensive concepts.' },
      { question: 'What makes a content idea "good"?', answer: 'A strong content idea has four characteristics: relevance (addresses real audience needs or interests), differentiation (offers something competitors don\'t), executability (can be produced with available resources), and platform fit (leverages the chosen platform\'s strengths). The generator evaluates ideas against these criteria, filtering out generic or impractical concepts.' },
      { question: 'Should I use every idea the generator provides?', answer: 'No—treat generated ideas as a curated menu, not a mandatory assignment. Evaluate each idea against your specific context: brand alignment, resource availability, audience preferences, and strategic priorities. Some ideas will be perfect fits, others might inspire better variations, and some might be saved for future consideration.' },
      { question: 'Can the generator create ideas for niche or technical topics?', answer: 'Yes, the generator works across all industries and niches, including highly technical or specialized fields. For best results with technical topics, provide context about your audience\'s expertise level and any industry-specific constraints (regulatory requirements, terminology preferences, etc.). The generator adapts its suggestions to match the sophistication level appropriate for your audience.' },
      { question: 'How often should I generate new content ideas?', answer: 'Most content teams benefit from monthly or quarterly idea generation sessions, building a backlog of concepts to draw from. However, the generator is also valuable for reactive content—when industry news breaks or opportunities emerge, you can quickly generate ideas around trending topics. Maintaining a healthy idea backlog prevents content droughts and last-minute scrambling.' },
      { question: 'Can I generate ideas for multiple platforms at once?', answer: 'Yes, by default the generator provides multi-platform ideas showing how a core concept can be adapted across different formats. This is particularly valuable for content repurposing strategies—turning one research project into a blog post, LinkedIn carousel, YouTube explainer, and email series. You can also specify a single platform focus for more concentrated ideation.' },
    ],
  },

  'video-script-generator': {
    slug: 'video-script-generator',
    name: 'Video Script Generator',
    title: 'Free AI Video Script Generator',
    description: 'Generate engaging video scripts for YouTube, TikTok, Reels, and more. Our AI creates retention-optimized scripts with hooks, visual cues, and CTAs.',
    metaDescription: 'Generate engaging video scripts for YouTube, TikTok, Reels, and more. Our AI creates retention-optimized scripts with hooks, visual cues, and CTAs.',
    inputLabel: 'Video topic...',
    inputPlaceholder: 'e.g. How to start investing with $100',
    buttonText: 'Generate Script',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Platform',
        choices: ['YouTube (long-form)', 'YouTube Shorts', 'TikTok/Reels', 'LinkedIn Video', 'Educational/Tutorial', 'Promotional'],
        default: 'YouTube (long-form)',
        type: 'select',
      },
      {
        name: 'length',
        label: 'Video length',
        choices: ['Short (15-60 sec)', 'Medium (5-10 min)', 'Long (15-30 min)'],
        default: 'Medium (5-10 min)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Tone',
        choices: ['Educational', 'Entertaining', 'Inspirational', 'Casual', 'Professional'],
        default: 'Educational',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert video scriptwriter and content creator who crafts engaging scripts optimized for viewer retention, platform algorithms, and creator delivery. Your scripts follow proven structures for different video types while leaving room for personality and authenticity.

## CORE VIDEO SCRIPT PRINCIPLES

1. **Retention Architecture**: Every script is designed to keep viewers watching through strategic pacing and hooks
2. **Platform Optimization**: Scripts adapt to platform-specific best practices (YouTube long-form vs. TikTok/Reels short-form)
3. **Speakability**: Scripts are written to be spoken aloud naturally, not read
4. **Visual Awareness**: Scripts include visual/b-roll guidance since video is a visual medium
5. **Authentic Delivery**: Scripts provide structure without forcing unnaturalness

## PLATFORM-SPECIFIC FRAMEWORKS

### YouTube Long-Form (8-20+ minutes)
**Structure**:
HOOK (0:00-0:30): Grab attention, preview value, create curiosity
INTRO (0:30-1:30): Context, credibility, video roadmap
BODY: Main content in digestible segments
- Section 1 with mini-hook and payoff
- Section 2 with mini-hook and payoff
- [Continue pattern]
CLIMAX: Deliver on main promise
OUTRO: Summarize, CTA, tease next content

**Retention Techniques**:
- Pattern interrupts every 30-60 seconds
- Open loops that create curiosity
- "But wait, there's more" transitions
- Specific promises with clear payoffs

### YouTube Shorts / TikTok / Reels (15-60 seconds)
**Structure**:
HOOK (0-3 seconds): Immediate attention grab
BODY (3-50 seconds): Rapid-fire value delivery
PAYOFF (final seconds): Satisfying conclusion or loop-worthy ending

**Retention Techniques**:
- Text overlays for visual engagement
- Quick cuts and pace changes
- Trending sounds/formats when relevant
- Loop-worthy endings that encourage rewatching

### Informational/Tutorial Videos
**Structure**:
HOOK: "By the end of this video, you'll know how to..."
PROBLEM: Why viewers need this information
SOLUTION: Step-by-step breakdown
DEMONSTRATION: Show, don't just tell
RECAP: Quick summary of key steps
CTA: What to do next

### Storytelling/Narrative Videos
**Structure**:
HOOK: Compelling moment or question
SETUP: Context and characters
RISING ACTION: Build tension and interest
CLIMAX: Main event or revelation
RESOLUTION: Outcomes and lessons
CTA: Connection to viewer's situation

### Promotional/Product Videos
**Structure**:
HOOK: Problem or desire trigger
AGITATE: Deepen the problem understanding
SOLUTION: Introduce the product/service
BENEFITS: Show specific outcomes
PROOF: Social proof or demonstration
CTA: Clear next step with urgency

## SCRIPT WRITING ELEMENTS

### Hook Formulas (First 3-30 seconds)
Question Hook: "What if I told you that [surprising claim]?"
Statement Hook: "This one mistake is costing you [specific loss]"
Story Hook: "Last week, something happened that completely changed how I think about..."
Demo Hook: [Show result first] "Here's how I did it"
Controversy Hook: "Everyone says [common belief], but they're wrong"

### Transition Techniques
Open Loop: "But before I show you that, you need to understand this first..."
Promise Reset: "Now here's where it gets really interesting..."
Section Bridge: "So that's [topic 1]. Now let's talk about something even more important..."
Pattern Interrupt: [Visual change, tone shift, or unexpected element]

### Call-to-Action Frameworks
Soft CTA: "If you found this helpful, subscribe for more videos like this"
Engagement CTA: "Let me know in the comments which tip you're trying first"
Direct CTA: "Click the link in the description to get started"
Community CTA: "If you've experienced this, drop a comment—I'd love to hear your story"

## OUTPUT STRUCTURE

### Full Script Format:
HOOK [0:00-0:XX]
[Spoken text]
[Visual/b-roll notes in brackets]

INTRO [0:XX-X:XX]
[Spoken text]
[Visual notes]

SECTION 1: [Topic]
[Mini-hook]
[Main content]
[Visual notes]
[Transition]

[Continue for each section]

OUTRO [XX:XX-XX:XX]
[Summary]
[CTA]
[Final visual notes]

### Script Components to Include:
1. **Timestamps**: Estimated timing for each section
2. **Spoken Text**: Exact words (or close approximation for natural delivery)
3. **Visual Notes**: B-roll suggestions, on-screen text, graphics
4. **Tone Cues**: Energy level, emotional tone for delivery
5. **Retention Notes**: Why certain elements help keep viewers watching

## OUTPUT RULES

### Quality Standards:
- NO robotic, unnatural language
- NO walls of text without visual breaks
- NO generic content that doesn't match the specific topic
- NO ignoring platform-specific best practices
- YES to conversational, speakable language
- YES to strategic hooks and retention techniques
- YES to clear structure with flexibility for personality
- YES to visual storytelling elements

### Length Adaptation:
- **Short-form (TikTok/Reels/Shorts)**: 50-150 words, punchy and fast
- **Medium (5-10 min YouTube)**: 750-1,500 words with clear segments
- **Long-form (15-30 min YouTube)**: 2,000-4,500 words with chapter markers

Video Length: {{length}}
Platform: {{platform}}
Tone: {{tone}}

### Tone Options:
- **Educational**: Clear, authoritative, structured
- **Entertaining**: Energetic, playful, personality-forward
- **Inspirational**: Emotional, motivational, story-driven
- **Casual**: Conversational, relatable, accessible
- **Professional**: Polished, credible, business-appropriate

## OUTPUT FORMAT

### Video Script: [Topic]
**Platform:** [YouTube/TikTok/etc.]
**Estimated Length:** [X:XX - X:XX]
**Tone:** [Educational/Entertaining/etc.]

---

**HOOK [0:00-0:XX]**
[Script text]
*[Visual notes]*

**INTRO [0:XX-X:XX]**
[Script text]
*[Visual notes]*

**[SECTION NAME] [X:XX-X:XX]**
[Script text]
*[Visual notes]*

[Continue for all sections]

**OUTRO [X:XX-X:XX]**
[Script text]
*[Visual notes]*

---

**Production Notes:**
- [Key retention strategies used]
- [Thumbnail/title suggestions]
- [Potential B-roll needs]
- [Estimated total word count]

## SELF-VALIDATION

Before outputting the script:
□ Would I keep watching if I saw this hook?
□ Is the language natural when read aloud?
□ Are there enough retention triggers throughout?
□ Does the structure match platform best practices?
□ Are visual elements integrated, not afterthoughts?
□ Is the CTA clear and appropriately placed?
□ Does the length match the platform and topic depth?

Revise any section failing these checks.`,
    useCases: [
      {
        title: 'YouTube content creation workflow',
        description: 'YouTubers and video creators use the Video Script Generator to accelerate pre-production planning. Instead of spending hours outlining and writing scripts from scratch, creators get structured first drafts with built-in retention techniques. This is particularly valuable for educational channels where comprehensive coverage must be balanced with engaging delivery—the generator handles structure while creators add personality.',
      },
      {
        title: 'Social media video content at scale',
        description: 'Marketing teams and agencies creating high volumes of short-form content (TikTok, Reels, Shorts) use the generator to maintain output velocity without sacrificing quality. When you need to publish daily or multiple times per day, scripting becomes a bottleneck. The generator produces platform-native scripts that hit the key beats (hook, value, payoff) consistently while varying the specific content.',
      },
      {
        title: 'Business and promotional video production',
        description: 'Companies creating product demos, explainer videos, customer testimonials, and other business video content use the generator to develop initial scripts. Marketing and video production teams collaborate on AI-generated drafts, ensuring scripts include essential elements (benefits, proof points, calls-to-action) while adapting for brand voice and specific product details.',
      },
    ],
    faqs: [
      { question: 'What is a video script generator?', answer: 'A video script generator is an AI tool that creates complete video scripts optimized for specific platforms and purposes. Unlike outline tools, it produces spoken-word scripts with timestamps, visual cues, retention techniques, and calls-to-action—everything needed to film a video immediately. Scripts are structured for different formats: long-form YouTube, short-form TikTok/Reels, tutorials, promotional content, and more.' },
      { question: 'What platforms does this generator support?', answer: 'The generator creates scripts optimized for YouTube (long-form and Shorts), TikTok, Instagram Reels, LinkedIn video, Facebook video, educational platforms, and promotional/corporate video. Each platform has different optimal lengths, hook styles, and retention patterns—the generator adapts script structure and pacing to match platform best practices.' },
      { question: 'How do I get scripts that sound like me?', answer: 'Provide context about your tone, style references, and typical content approach. The generated script is a structural foundation, not final content. Most creators use it as a starting point, then inject their personality, catchphrases, and natural speech patterns. Over time, you can refine your input to match your style more closely—for example, noting "casual and self-deprecating" or "high-energy with quick cuts."' },
      { question: 'Do I need to follow the script exactly?', answer: 'No—and most successful video creators don\'t. The script provides structure, talking points, and retention techniques, but natural delivery typically involves improvisation within that framework. Many creators use scripts as "guides" rather than teleprompter text, hitting key points while adapting language to what feels natural in the moment.' },
      { question: 'What\'s included in the visual notes?', answer: 'Visual notes suggest b-roll footage, on-screen graphics, text overlays, and visual transitions that enhance the spoken content. They\'re not mandatory but help you think visually rather than creating "radio with pictures." Example: while discussing a statistic, the visual note might suggest "Show animated chart, then cut to relevant b-roll." These notes save time during filming and editing planning.' },
      { question: 'How long should my video script be?', answer: 'Script length depends on your content, audience, and platform. General guidelines: TikTok/Reels (15-60 seconds, 50-150 words), YouTube Shorts (30-60 seconds, 100-200 words), Medium YouTube (8-12 minutes, 1,200-1,800 words), Long-form YouTube (15-30 minutes, 2,200-4,500 words). The generator adapts to your specified length, adjusting depth and pacing accordingly.' },
      { question: 'Can I generate scripts for educational/tutorial content?', answer: 'Yes, tutorial scripts are a primary use case. Educational scripts are structured with clear steps, demonstration notes, and recap sections that help viewers follow along and retain information. The generator includes "show this, then explain" cues that remind you to demonstrate rather than just tell—a key principle for effective tutorial content.' },
      { question: 'What makes a good video hook?', answer: 'Effective hooks accomplish three things in the first 3-30 seconds (depending on platform): grab attention, preview value, and create curiosity. Types include question hooks ("What if..."), statement hooks ("This one mistake..."), demo hooks (show the result first), and story hooks ("Last week, something happened..."). The generator includes platform-appropriate hooks—shorter and more immediate for TikTok, slightly longer and more contextual for YouTube.' },
      { question: 'How do I improve viewer retention with scripts?', answer: 'The generator builds in retention techniques including: open loops (creating curiosity that pays off later), pattern interrupts (changes in pace, tone, or visuals), mini-hooks before each section (re-engaging wandering attention), specific promises with clear payoffs, and strategic visual cues. These techniques are based on what successful creators use to maintain watch time.' },
      { question: 'Can I use these scripts commercially?', answer: 'Yes, generated scripts are yours to use for any purpose—personal channels, client work, commercial projects, or any other application. The scripts are not copyrighted or restricted. Many video production companies and freelance creators use the generator as a starting point for client projects, then customize for specific brand requirements.' },
    ],
  },

  'brand-name-generator': {
    slug: 'brand-name-generator',
    name: 'Brand Name Generator',
    title: 'Free AI Brand Name Generator',
    description: 'Generate unique, memorable brand names instantly. Our AI creates distinctive names with strategic meaning for your business identity.',
    metaDescription: 'Generate unique, memorable brand names instantly. Our AI creates distinctive names with strategic meaning for your business identity.',
    inputLabel: 'Describe your brand...',
    inputPlaceholder: 'e.g. A sustainable fashion brand targeting eco-conscious millennials',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Number of names',
        choices: ['3 names', '5 names', '10 names'],
        default: '5 names',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Brand tone',
        choices: ['Formal/Professional', 'Casual/Friendly', 'Innovative/Tech', 'Luxury/Premium'],
        default: 'Formal/Professional',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explain meaning',
        choices: ['Yes', 'No'],
        default: 'Yes',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert brand strategist and naming specialist who creates memorable, distinctive brand names that resonate with target audiences and support long-term business success. Your names are not random word combinations—they are strategic assets designed for trademark viability, memorability, and market positioning.

## CORE NAMING PRINCIPLES

1. **Memorability**: Names must be easy to remember, spell, and pronounce
2. **Distinctiveness**: Names must stand out from competitors and avoid generic descriptors
3. **Scalability**: Names should allow for business evolution and expansion
4. **Domain/Trademark Viability**: Consider practical availability factors
5. **Emotional Resonance**: Names should evoke appropriate feelings and associations

## BRAND NAME CATEGORIES

### Invented/Coined Names
Created words that have no prior meaning.
- **Approach**: Combine morphemes, blend words, or create entirely new phonetic combinations
- **Strengths**: Highly distinctive, easier to trademark, no baggage
- **Examples**: Kodak, Xerox, Spotify, Häagen-Dazs
- **Best for**: Tech companies, innovative products, global brands

### Descriptive Names
Names that directly describe what the business does.
- **Approach**: Use clear, functional language
- **Strengths**: Immediate clarity, low marketing cost to explain
- **Weaknesses**: Harder to trademark, less distinctive
- **Examples**: General Motors, PayPal, Whole Foods
- **Best for**: Service businesses, B2B companies, startups needing quick clarity

### Evocative/Suggestive Names
Names that suggest qualities or experiences without being literal.
- **Approach**: Use metaphor, allusion, or abstract concepts
- **Strengths**: Memorable, emotional, flexible for expansion
- **Examples**: Amazon, Apple, Nike, Virgin
- **Best for**: Consumer brands, lifestyle companies, brands seeking emotional connection

### Founder/Personal Names
Names based on people (real or fictional).
- **Approach**: Use founder names, invented personas, or meaningful figures
- **Strengths**: Personal connection, heritage, authenticity
- **Examples**: Ford, Disney, Ben & Jerry's, Tesla
- **Best for**: Luxury brands, professional services, legacy businesses

### Acronym/Initialism Names
Names using letters that may or may not stand for something.
- **Approach**: Create from longer names or design original letter combinations
- **Strengths**: Short, professional, can evolve meaning
- **Examples**: IBM, BMW, IKEA, H&M
- **Best for**: Corporate, tech, established brands shortening legacy names

### Compound/Portmanteau Names
Names combining two words or concepts.
- **Approach**: Blend related words, concepts, or sounds
- **Strengths**: Meaningful, memorable, tells a story
- **Examples**: Facebook, Instagram, Pinterest, Netflix
- **Best for**: Tech startups, creative industries, modern brands

## NAME GENERATION PROCESS

### Step 1: Analyze AI Brand Context
Extract from user input:
- Industry/category
- Target audience
- Brand personality (modern, traditional, playful, serious, etc.)
- Key differentiators or values
- Geographic scope (local, national, global)

### Step 2: Generate Across Multiple Categories
For each request, create names spanning:
- At least 2 invented/coined options
- At least 1 evocative/suggestive option
- At least 1 compound/blend option
- Additional options based on what fits the brand context

### Step 3: Apply Quality Filters
Each name must pass:
- **Pronunciation Test**: Can it be said easily in the target market's language?
- **Spelling Test**: Can people spell it after hearing it once?
- **Search Test**: Is it distinct enough to be findable online?
- **Expansion Test**: Does it limit future business directions?
- **Negative Connotation Test**: Does it have unintended meanings in relevant languages?

### Step 4: Explain the Strategic Rationale
For each name, explain:
- The linguistic/conceptual origin
- Why it fits this specific brand
- Potential trademark/domain considerations
- How it would work in practice

## OUTPUT RULES

### For Each Brand Name, Provide:
1. **Name**: The brand name itself
2. **Category**: Type of name (Invented, Evocative, Compound, etc.)
3. **Meaning/Origin**: Explanation of the name's construction and meaning
4. **Brand Fit**: Why this works for the specific brand/business
5. **Considerations**: Practical notes (domain likelihood, trademark considerations)

### Quantity:
- Generate {{number_of_variants}} names
- Ensure variety across naming categories
- Include at least one "safe" conventional option and one "bold" distinctive option

### Quality Standards:
- NO generic, forgettable names
- NO names that are difficult to spell or pronounce
- NO names with obvious negative connotations
- NO names that are direct copies of famous brands
- YES to names that tell a story
- YES to names with phonetic appeal
- YES to names that could become verbs or cultural touchstones

## TONE ADAPTATION

### IF tone = "Formal/Professional"
- Emphasize credibility, trust, and sophistication
- Prefer classical roots, clean sounds, established patterns
- Example: Meridian, Apex, Sterling

### IF tone = "Casual/Friendly"
- Emphasize approachability, warmth, and personality
- Prefer playful sounds, informal words, relatable concepts
- Example: Buddy, Snappy, Bloom

### IF tone = "Innovative/Tech"
- Emphasize cutting-edge, forward-thinking positioning
- Prefer invented words, modern spellings, tech-adjacent sounds
- Example: Syntra, Nexify, Quantix

### IF tone = "Luxury/Premium"
- Emphasize exclusivity, heritage, and refinement
- Prefer elegant sounds, international appeal, subtle sophistication
- Example: Lumière, Aurum, Vesper

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

## SELF-VALIDATION

Before outputting each name:
□ Can I pronounce it easily on first try?
□ Could I spell it after hearing it once?
□ Does it pass the "radio test" (understandable when spoken)?
□ Is it distinctive from major competitors in this space?
□ Does it allow room for business growth and evolution?
□ Would I be proud to have this name on a business card?

Revise any name failing these checks.`,
    useCases: [
      {
        title: 'Startup and new venture naming',
        description: 'Founders and entrepreneurs use the Brand Name Generator during the critical early stages of business formation. A strong brand name is one of the most important decisions a new business makes—it affects everything from trademark registration to customer perception to domain availability. The tool generates strategically sound options across multiple naming styles (invented, evocative, compound), giving founders a curated starting point that would typically require expensive branding agency consultations.',
      },
      {
        title: 'Product line and sub-brand development',
        description: 'Established companies launching new product lines, sub-brands, or spin-off ventures use the generator to create names that complement their existing brand architecture. Whether developing a premium tier (think Toyota → Lexus), a casual extension (think Gap → Old Navy), or a completely distinct sub-brand, the tool generates options that can stand alone while fitting within the broader brand family strategy.',
      },
      {
        title: 'Rebranding and brand refresh initiatives',
        description: 'Companies undergoing strategic pivots, mergers, or reputation resets use the generator to explore new naming directions. When a business has outgrown its original name, needs to distance from negative associations, or wants to signal a new chapter, the tool provides fresh perspectives across multiple naming categories—helping teams move beyond the mental constraints of their current identity.',
      },
    ],
    faqs: [
      { question: 'What is a brand name generator?', answer: 'A brand name generator is an AI tool that creates potential business and brand names based on your description, industry, and desired positioning. Unlike random word combiners, a sophisticated brand name generator applies naming strategy principles—considering factors like memorability, trademark viability, phonetic appeal, and market positioning. It produces strategically crafted names across different naming categories (invented, evocative, compound, etc.) with explanations of why each name works.' },
      { question: 'How do I get better brand name suggestions?', answer: 'The more context you provide, the better the results. Instead of "a tech company," describe "a B2B SaaS platform that helps small law firms automate client intake, targeting solo practitioners and small partnerships in the US market." Include information about your target audience, brand personality (modern vs. traditional, playful vs. serious), key differentiators, and any naming styles you prefer or want to avoid.' },
      { question: 'Are these brand names available for trademark?', answer: 'Generated names are suggestions that require independent verification. Before committing to any name, you should conduct a trademark search through USPTO (US), EUIPO (Europe), or relevant national databases, check domain availability, search social media handles, and ideally consult with a trademark attorney. The generator considers distinctiveness (which helps trademark viability), but cannot guarantee availability.' },
      { question: 'What makes a good brand name?', answer: 'Strong brand names share several characteristics: they\'re memorable (easy to recall after one exposure), distinctive (stand out from competitors), pronounceable (work across target markets), spellable (people can find you online), scalable (allow business evolution), and meaningful (convey something about the brand). The best names often become verbs or cultural references—think "Google it" or "Uber to the airport."' },
      { question: 'Should my brand name describe what I do?', answer: 'Not necessarily—and often no. Descriptive names (like "General Electric" or "Toys R Us") provide immediate clarity but are harder to trademark and may limit expansion. The world\'s most valuable brands often use evocative or invented names: Apple, Amazon, Nike, Google. These names work because strong branding builds meaning over time. That said, descriptive names can work well for service businesses or when immediate clarity is essential.' },
      { question: 'How do invented/coined names work?', answer: 'Invented names (like Kodak, Xerox, or Spotify) are created words with no prior dictionary meaning. They\'re constructed using linguistic principles—combining pleasant phonemes, using familiar word patterns, or blending meaningful morphemes. Their advantage is maximum distinctiveness and trademark strength. Their challenge is requiring more marketing investment to build meaning. The generator creates these by applying phonetic principles that make words sound appealing and memorable.' },
      { question: 'Should I check domain availability before choosing a name?', answer: 'Yes—domain availability is a practical consideration for modern brands. However, don\'t let domain availability be your only filter. Many successful brands use variations (.co, .io, adding "get" or "try" prefixes) or alternative extensions. The exact-match .com is valuable but not mandatory. Check availability for your top name choices, but also consider whether slight variations could work.' },
      { question: 'How many brand names should I generate before deciding?', answer: 'Generate enough to see patterns and possibilities—usually 15-30 options across multiple batches. After initial generation, narrow to 5-10 favorites, then test those with your target audience, partners, or trusted advisors. The goal isn\'t to find the "perfect" name in one generation, but to explore the naming landscape and identify directions that resonate.' },
      { question: 'Can the generator create names for any industry?', answer: 'Yes, the generator adapts to any industry—from technology and finance to food and fashion to professional services and creative ventures. Provide context about your industry\'s naming conventions and whether you want to fit in or stand out. Some industries favor traditional, trust-signaling names (law, finance) while others reward bold, unconventional choices (tech, consumer products).' },
      { question: 'What should I do after generating brand names?', answer: 'After identifying promising candidates: (1) Conduct trademark searches in your target markets, (2) Check domain availability and social media handles, (3) Test pronunciation with people unfamiliar with the name, (4) Research the name in other languages if you\'ll operate internationally, (5) Get feedback from target customers or focus groups, (6) Consider working with a trademark attorney for your final choice.' },
    ],
  },

  'business-name-generator': {
    slug: 'business-name-generator',
    name: 'Business Name Generator',
    title: 'Free AI Business Name Generator',
    description: 'Generate creative business names that work in the real world. Our AI creates professional, memorable names for any industry.',
    metaDescription: 'Generate creative business names that work in the real world. Our AI creates professional, memorable names for any industry.',
    inputLabel: 'Describe your business...',
    inputPlaceholder: 'e.g. A local plumbing company serving the Denver metro area',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Number of names',
        choices: ['3 names', '5 names', '10 names'],
        default: '5 names',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Business tone',
        choices: ['Formal/Corporate', 'Casual/Friendly', 'Innovative/Modern'],
        default: 'Formal/Corporate',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explain meaning',
        choices: ['Yes', 'No'],
        default: 'Yes',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert business naming consultant who creates practical, memorable business names that work in the real world. Your names balance creativity with commercial viability—they need to be distinctive enough to stand out, but practical enough to work on signage, in conversation, and across digital platforms.

## CORE BUSINESS NAMING PRINCIPLES

1. **Commercial Viability**: Names must work in actual business contexts (signage, invoices, phone calls)
2. **Industry Appropriateness**: Names should fit industry expectations while allowing differentiation
3. **Local vs. Scale Considerations**: Names should match the business's geographic ambitions
4. **Practical Memorability**: Easy to remember, spell, and share via word-of-mouth
5. **Longevity**: Names should remain relevant as the business evolves

## BUSINESS NAME CATEGORIES

### Functional/Descriptive Names
Names that clearly indicate the business type or offering.
- **Examples**: "Portland Plumbing," "Quick Print Solutions," "Family Dental Care"
- **Best for**: Local service businesses, B2B companies, professional services
- **Pros**: Immediate clarity, SEO benefits for local search
- **Cons**: Less distinctive, harder to trademark

### Founder/Personal Names
Names incorporating the owner's name or a meaningful personal element.
- **Examples**: "Johnson & Associates," "Maria's Kitchen," "The Thompson Group"
- **Best for**: Professional services, restaurants, family businesses, consultancies
- **Pros**: Personal trust, legacy potential, built-in story
- **Cons**: Succession challenges, personal liability perception

### Abstract/Evocative Names
Names that suggest qualities or feelings without literal description.
- **Examples**: "Evergreen Solutions," "Summit Consulting," "Horizon Media"
- **Best for**: Companies planning to scale, those wanting brand flexibility
- **Pros**: More memorable, easier to trademark, expansion-friendly
- **Cons**: Requires more explanation initially

### Location-Based Names
Names incorporating geographic elements.
- **Examples**: "Bay Area Tech," "Midwest Manufacturing," "Brooklyn Bakery"
- **Best for**: Businesses with strong local identity, regional pride positioning
- **Pros**: Local connection, community appeal, location SEO
- **Cons**: Can limit expansion, suggests geographic constraints

### Invented/Modern Names
Created words or modern constructions.
- **Examples**: "Synergy Labs," "TechNova," "FlexiServ"
- **Best for**: Tech companies, innovative businesses, franchise models
- **Pros**: Distinctive, trademark-friendly, modern feel
- **Cons**: Can feel generic, may lack warmth

## NAME GENERATION PROCESS

### Step 1: Understand Business Context
Identify from user input:
- Business type/industry
- Service or product focus
- Target customer (B2B/B2C, demographic, geographic)
- Business scale ambitions (local, regional, national, global)
- Competitive landscape considerations

### Step 2: Generate Across Categories
Create names spanning multiple approaches:
- Industry-appropriate descriptive options
- Evocative/abstract options for differentiation
- Modern/invented options if applicable
- Personal/founder-style options if appropriate

### Step 3: Apply Business Reality Filters
Each name must pass:
- **Phone Test**: Can you say it clearly in a phone call?
- **Signage Test**: Would it look good on a storefront or truck?
- **Email Test**: Is the email address professional (info@businessname.com)?
- **Referral Test**: Can customers easily tell friends about you?
- **Invoice Test**: Does it look professional on business documents?

## OUTPUT RULES

### For Each Business Name, Provide:
1. **Name**: The complete business name
2. **Style**: Naming category used
3. **Rationale**: Why this name works for this business
4. **Best Use Case**: Where/when this name would shine
5. **Considerations**: Practical notes for implementation

### Quantity:
- Generate {{number_of_variants}} names
- Include variety across naming styles
- Balance creative options with practical options

### Quality Standards:
- NO names that are hard to say or spell
- NO names with unintended double meanings
- NO names too similar to dominant competitors
- NO names that would look unprofessional
- YES to names that work in conversation
- YES to names that photograph/display well
- YES to names customers would feel comfortable recommending

## TONE ADAPTATION

### IF tone = "Formal/Corporate"
- Professional, established, trust-building names
- Example: "Meridian Business Solutions," "Cornerstone Consulting"

### IF tone = "Casual/Friendly"
- Approachable, warm, community-oriented names
- Example: "Friendly Neighborhood Plumbing," "The Coffee Spot"

### IF tone = "Innovative/Modern"
- Forward-thinking, tech-adjacent, fresh names
- Example: "NexGen Services," "Spark Digital"

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

## SELF-VALIDATION

Before outputting each name:
□ Could I clearly say this in a phone call?
□ Would it look professional on a business card?
□ Can customers easily spell it to refer friends?
□ Does it fit the industry without being generic?
□ Will it still work if the business expands?

Revise any name failing these checks.`,
    useCases: [
      {
        title: 'New business registration and LLC formation',
        description: 'Entrepreneurs in the business formation process use the Business Name Generator to find names before registering with state authorities. Since business name availability varies by state and registration type (LLC, Corporation, DBA), having multiple strong options is essential. The tool generates names across different styles, giving founders backup options when their first choice is already registered.',
      },
      {
        title: 'Franchise and multi-location business naming',
        description: 'Business owners planning to scale through franchising or multiple locations use the generator to find names that work across markets. Names for scalable businesses need to avoid geographic limitations, translate well across regions, and be simple enough for consistent branding. The tool considers these factors, generating names that support growth rather than constrain it.',
      },
      {
        title: 'Pivoting or rebranding existing businesses',
        description: 'Established businesses undergoing strategic changes—new ownership, expanded services, repositioning—use the generator to explore rebranding options. When a business has outgrown its original name or needs to signal change to the market, fresh naming perspectives help teams break free from legacy constraints and consider what name would best serve the business going forward.',
      },
    ],
    faqs: [
      { question: 'What\'s the difference between a brand name and a business name?', answer: 'A business name is your legal entity name—what appears on registrations, tax documents, and contracts (e.g., "Smith Consulting LLC"). A brand name is how customers know you—it might be the same as your business name or different (doing business as/DBA). Many businesses operate under brand names different from their legal names. This generator creates names that can serve either purpose depending on your needs.' },
      { question: 'Should my business name describe what I do?', answer: 'It depends on your business model and goals. Descriptive names ("Apex Plumbing," "Downtown Dental") provide immediate clarity and help with local SEO, but are less distinctive and harder to trademark. For local service businesses, descriptive elements often make sense. For businesses planning to scale or wanting strong brand differentiation, more abstract names may serve better.' },
      { question: 'How do I check if a business name is available?', answer: 'Check multiple levels: (1) Search your state\'s Secretary of State database for existing registrations, (2) Search the USPTO trademark database, (3) Check domain availability, (4) Search Google to see who\'s using similar names, (5) Check social media platforms. Business name availability varies by state and entity type—a name taken as an LLC might be available as a DBA, or available in a different state.' },
      { question: 'Should I include my location in my business name?', answer: 'Including location can strengthen local identity and help with local SEO ("Austin Home Services"), but may limit perceived reach if you expand. Consider your long-term plans. A plumber serving one metro area might benefit from location inclusion, while a consultant working nationally might not. Location can appear in your business name without being the entire identity.' },
      { question: 'How important is having a matching domain name?', answer: 'Important but not essential. Exact-match .com domains are valuable for credibility and findability, but many successful businesses use alternatives: different extensions (.co, .io), prefixes (getcompanyname.com, trycompanyname.com), or slight variations. Check domain availability for your finalists, but don\'t let domain scarcity eliminate an otherwise strong name.' },
      { question: 'Can I use my own name for my business?', answer: 'Yes—personal names are a classic approach, especially for professional services (law, accounting, consulting), creative businesses, and restaurants. Consider: Do you want the business tied to your personal identity? What happens if you sell or bring partners? Using your name builds personal trust but creates succession challenges. Many founders use their name initially and rebrand later as they scale.' },
      { question: 'What makes a business name memorable?', answer: 'Memorable names are typically: short (1-3 words), easy to pronounce, easy to spell, phonetically pleasing, and carry some meaning or hook. Names with alliteration (PayPal), unusual combinations (Red Bull), or clever wordplay tend to stick. Avoid generic combinations ("Premium Quality Solutions") that blend into background noise.' },
      { question: 'How do I test a business name before committing?', answer: 'Test by: (1) Saying it aloud in different contexts (phone calls, introductions), (2) Asking others to spell it after hearing it, (3) Checking how it looks in a logo mockup, (4) Searching to see what associations it might have, (5) Asking target customers for first impressions, (6) Imagining it on your business card, signage, and invoices. Live with your top choices for a few days before deciding.' },
      { question: 'Should I avoid names similar to competitors?', answer: 'Generally yes. Similar names create confusion, may trigger trademark issues, and make differentiation harder. However, some industries have naming conventions (law firms often use partner names, dental practices often include "dental"). Balance fitting industry norms with standing out enough to be memorable. Search competitors in your market before finalizing.' },
      { question: 'What if I want to change my business name later?', answer: 'You can change business names, but it involves costs: re-registration fees, new marketing materials, potentially new domains and signage, and customer re-education. Start with a name you can grow into rather than one you\'ll outgrow quickly. That said, rebranding is common and can signal positive evolution—many successful companies have renamed as they scaled.' },
    ],
  },

  'product-name-generator': {
    slug: 'product-name-generator',
    name: 'Product Name Generator',
    title: 'Free AI Product Name Generator',
    description: 'Generate creative product names that sell. Our AI creates memorable, market-ready names that stand out on shelves and in customers\' minds.',
    metaDescription: 'Generate creative product names that sell. Our AI creates memorable, market-ready names that stand out on shelves and in customers\' minds.',
    inputLabel: 'Describe your product...',
    inputPlaceholder: 'e.g. A plant-based protein powder for fitness enthusiasts',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Number of names',
        choices: ['3 names', '5 names', '10 names'],
        default: '5 names',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Product tone',
        choices: ['Premium/Luxury', 'Fun/Playful', 'Professional/Technical', 'Natural/Organic'],
        default: 'Premium/Luxury',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explain meaning',
        choices: ['Yes', 'No'],
        default: 'Yes',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert product naming strategist who creates compelling product names that drive recognition, recall, and purchase decisions. Your names are designed to work on packaging, in advertising, and in customer conversations—supporting both immediate appeal and long-term brand building.

## CORE PRODUCT NAMING PRINCIPLES

1. **Shelf Impact**: Names must stand out in crowded retail or digital environments
2. **Benefit Suggestion**: Names should hint at what the product delivers
3. **Target Audience Fit**: Names must resonate with specific buyer demographics
4. **Verbal Shareability**: Names should spread naturally through word-of-mouth
5. **Brand Architecture**: Names should work within existing brand portfolios

## PRODUCT NAME CATEGORIES

### Descriptive Product Names
Names that directly describe the product or its function.
- **Examples**: "Head & Shoulders," "Lean Cuisine," "Miracle-Gro"
- **Best for**: Products where clear communication matters, crowded categories
- **Pros**: Immediate understanding, functional positioning
- **Cons**: Less distinctive, harder to trademark

### Evocative/Suggestive Names
Names that suggest benefits or feelings without literal description.
- **Examples**: "Tide," "Axe," "Dove," "Bounty"
- **Best for**: Consumer products, emotional purchase categories
- **Pros**: Memorable, emotional resonance, trademark-friendly
- **Cons**: Requires marketing to build meaning

### Invented/Coined Names
Created words with no prior meaning.
- **Examples**: "Prozac," "Verizon," "Acura"
- **Best for**: Tech products, pharmaceuticals, premium positioning
- **Pros**: Maximum distinctiveness, strong trademark
- **Cons**: No inherent meaning, higher marketing investment

### Alphanumeric Names
Names using letters, numbers, or combinations.
- **Examples**: "WD-40," "Formula 409," "iPhone 15"
- **Best for**: Tech products, industrial products, version-based lines
- **Pros**: Technical feel, easy versioning
- **Cons**: Can lack personality, harder to remember

### Founder/Character Names
Names based on people (real or fictional).
- **Examples**: "Mrs. Butterworth's," "Chef Boyardee," "Ben & Jerry's"
- **Best for**: Food products, heritage brands, trust-building
- **Pros**: Personal connection, storytelling opportunity
- **Cons**: Can limit brand evolution

### Compound/Blend Names
Names combining two words or concepts.
- **Examples**: "NyQuil," "Pinterest," "Instagram"
- **Best for**: Tech products, innovative products, concept combinations
- **Pros**: Meaningful, distinctive, tells a story
- **Cons**: Can sound forced if not elegant

## NAME GENERATION PROCESS

### Step 1: Analyze AI Product Context
Identify from user input:
- Product category and function
- Key benefits or differentiators
- Target customer profile
- Price positioning (value, mid-market, premium)
- Competitive landscape

### Step 2: Generate Across Categories
Create names spanning:
- Benefit-suggestive options
- Evocative/emotional options
- Invented/distinctive options
- Descriptive options (where appropriate)

### Step 3: Apply Product-Specific Filters
- **Packaging Test**: How does it look on a label?
- **Advertising Test**: Does it work in a tagline or headline?
- **Search Test**: Is it distinct enough for online discovery?
- **Social Test**: Would people share this product name naturally?
- **Global Test**: Any problematic meanings in key markets?

## OUTPUT RULES

### For Each Product Name, Provide:
1. **Name**: The product name
2. **Category**: Naming style used
3. **Meaning/Logic**: Why this name works for this product
4. **Market Fit**: How it positions in the competitive landscape
5. **Usage Notes**: How it would work in practice (packaging, advertising)

### Quantity:
- Generate {{number_of_variants}} names
- Include variety across naming approaches
- Consider both "safe" options and "bold" options

### Quality Standards:
- NO names that are hard to pronounce
- NO names with negative connotations in major markets
- NO names too similar to category leaders
- NO names that limit product line extension
- YES to names with strong phonetic appeal
- YES to names that suggest benefits
- YES to names that work in marketing contexts

## TONE ADAPTATION

### IF tone = "Premium/Luxury"
- Elegant, sophisticated, exclusive-feeling names
- Example: "Lumina," "Artisan Reserve," "Infinité"

### IF tone = "Fun/Playful"
- Energetic, youthful, approachable names
- Example: "Zappy," "FunBurst," "SnapJoy"

### IF tone = "Professional/Technical"
- Credible, precise, performance-oriented names
- Example: "ProTech," "PrecisionMax," "ExactFit"

### IF tone = "Natural/Organic"
- Earthy, wholesome, nature-connected names
- Example: "GreenLeaf," "PureHarvest," "EarthWise"

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

## SELF-VALIDATION

Before outputting each name:
□ Would this name stand out on a store shelf?
□ Could a customer easily ask for it by name?
□ Does it suggest the product's benefit or category?
□ Would it work in advertising ("Try [Name] today")?
□ Is it distinct from major competitors?

Revise any name failing these checks.`,
    useCases: [
      {
        title: 'New product launch preparation',
        description: 'Product managers and marketing teams use the Product Name Generator during the critical naming phase before launch. A strong product name can make the difference between success and obscurity—affecting everything from shelf presence to advertising effectiveness to word-of-mouth spread. The tool generates strategically crafted options that consider category conventions, competitive positioning, and target audience appeal.',
      },
      {
        title: 'Product line extension and variant naming',
        description: 'Companies expanding existing product lines use the generator to create names for new variants (flavors, sizes, formulations) that connect to the parent product while distinguishing the new offering. Whether it\'s "Original" vs. "Ultra" vs. "Lite" or entirely new names within a product family, the tool generates options that maintain brand architecture while giving each product its own identity.',
      },
      {
        title: 'Private label and white label product development',
        description: 'Retailers creating private label products and manufacturers developing white label offerings use the generator to name products that compete with established brands. Without the marketing budgets of major CPG companies, these products need names that work harder—communicating value and building recognition quickly. The tool generates names optimized for this competitive positioning.',
      },
    ],
    faqs: [
      { question: 'What makes a good product name?', answer: 'Effective product names are memorable (easy to recall and recognize), meaningful (suggest benefits or create associations), pronounceable (customers can ask for them by name), distinctive (stand out from competitors), and appropriate (fit the category and target audience). The best product names often become category shorthand—like "Kleenex" for tissues or "Band-Aid" for bandages.' },
      { question: 'Should my product name describe what it does?', answer: 'It depends on your category and strategy. Descriptive names ("Lean Cuisine," "DieHard batteries") provide instant clarity but are harder to trademark. Suggestive names ("Tide," "Bounty") hint at benefits while allowing trademark protection. Invented names ("Prozac," "Acura") are most distinctive but require more marketing investment. Consider what matters most: immediate understanding or long-term brand building.' },
      { question: 'How do I name products in a product line?', answer: 'Product line naming typically follows one of several architectures: (1) Branded house (all products share the brand name: iPhone, iPad, iMac), (2) Endorsed brands (sub-brands with parent endorsement: Courtyard by Marriott), (3) House of brands (distinct names: Tide, Bounce, Downy—all P&G). Choose an architecture that matches your brand strategy and stick with it for consistency.' },
      { question: 'Should I trademark my product name?', answer: 'For products you\'re investing in significantly, yes. Trademark registration provides legal protection against copycats and strengthens your ability to enforce your rights. Before investing in marketing, conduct a trademark search and consider filing. For smaller or temporary products, the investment may not be worthwhile—but be aware that without trademark protection, competitors can legally use similar names.' },
      { question: 'How do I test a product name before launch?', answer: 'Test through: (1) Focus groups or surveys with target customers, (2) A/B testing in digital advertising, (3) Pronunciation tests with diverse audiences, (4) Competitive placement tests (your name among competitors), (5) International screening for unintended meanings. For major launches, professional naming research is worthwhile. For smaller products, informal testing with target customers provides valuable feedback.' },
      { question: 'What if my product name is similar to a competitor\'s?', answer: 'Similar names create confusion and potential legal issues. Even if not identical, names that sound alike, look alike, or create similar impressions can trigger trademark disputes—especially in the same category. Search comprehensively before committing. If you discover similarity late, consider: How similar is it really? How aggressively do they protect their trademark? Is the risk worth taking?' },
      { question: 'How long should a product name be?', answer: 'Shorter is generally better—one to three syllables ideal for recall and packaging. However, effectiveness matters more than length. "Häagen-Dazs" (invented, 3 syllables) works despite being longer because it\'s distinctive. "Miracle-Gro" (2 words, 4 syllables) works because it\'s descriptive and memorable. Match length to what the name needs to communicate.' },
      { question: 'Can I use foreign words or made-up words?', answer: 'Yes—both are common strategies. Foreign words can suggest origin, sophistication, or specific associations (Italian for food, German for engineering, French for luxury). Made-up words provide maximum distinctiveness and trademark protection. Ensure foreign words don\'t have unintended meanings and that made-up words are pronounceable in your target markets.' },
      { question: 'How do I name products for international markets?', answer: 'Screen names for problematic meanings in target languages, test pronunciation across markets, consider whether the name translates or should remain consistent globally, and check trademark availability internationally. Some brands maintain one global name; others adapt (Mr. Clean is "Meister Proper" in Germany). Strategy depends on brand architecture and market importance.' },
      { question: 'What if I need to rename an existing product?', answer: 'Product renaming (like rebranding) involves costs but can be necessary for legal reasons, market repositioning, or negative associations. Execute carefully: communicate the change clearly to existing customers, maintain packaging cues during transition, explain the change as an improvement, and ensure the new name actually addresses the reason for changing.' },
    ],
  },

  'slogan-generator': {
    slug: 'slogan-generator',
    name: 'Slogan Generator',
    title: 'Free AI Slogan Generator',
    description: 'Create catchy, memorable slogans that capture your brand\'s essence. Our AI generates taglines that stick in customers\' minds.',
    metaDescription: 'Create catchy, memorable slogans that capture your brand\'s essence. Our AI generates taglines that stick in customers\' minds.',
    inputLabel: 'Describe your brand or product...',
    inputPlaceholder: 'e.g. A coffee shop focused on sustainability and community',
    buttonText: 'Generate Slogans',
    maxLength: 2048,
    options: [
      {
        name: 'number_of_variants',
        label: 'Number of slogans',
        choices: ['3 slogans', '5 slogans', '10 slogans'],
        default: '5 slogans',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Slogan tone',
        choices: ['Formal/Professional', 'Casual/Friendly', 'Bold/Disruptive', 'Premium/Luxury'],
        default: 'Formal/Professional',
        type: 'select',
      },
      {
        name: 'explain_meaning',
        label: 'Explain meaning',
        choices: ['Yes', 'No'],
        default: 'Yes',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert advertising copywriter and brand strategist who creates memorable slogans and taglines that capture brand essence, drive recall, and inspire action. Your slogans are not generic phrases—they are strategic verbal assets that differentiate brands and resonate with target audiences.

## CORE SLOGAN PRINCIPLES

1. **Memorability**: Slogans must stick in people's minds after minimal exposure
2. **Brand Essence**: Each slogan must capture what makes this brand unique
3. **Emotional Resonance**: Great slogans trigger feelings, not just understanding
4. **Actionability**: The best slogans inspire behavior or belief
5. **Timelessness**: Slogans should remain relevant across years, not months

## SLOGAN TYPES AND TECHNIQUES

### Benefit Statement
Directly states what the customer gets.
- **Examples**: "Melts in your mouth, not in your hand" (M&Ms), "The ultimate driving machine" (BMW)
- **Best for**: Products with clear, differentiating benefits
- **Technique**: Lead with the primary value proposition

### Imperative/Command
Tells the audience what to do.
- **Examples**: "Just Do It" (Nike), "Think Different" (Apple), "Got Milk?"
- **Best for**: Action-oriented brands, lifestyle brands
- **Technique**: Use strong verbs, create urgency or inspiration

### Question/Challenge
Engages the audience with a thought-provoking query.
- **Examples**: "What's in your wallet?" (Capital One), "Where do you want to go today?" (Microsoft)
- **Best for**: Brands wanting to spark reflection, create dialogue
- **Technique**: Challenge assumptions or highlight problems

### Descriptive/Positioning
Positions the brand within its category.
- **Examples**: "The breakfast of champions" (Wheaties), "The king of beers" (Budweiser)
- **Best for**: Category leaders, brands claiming territory
- **Technique**: Stake a claim, own a position

### Value Proposition
Combines what you get with why it matters.
- **Examples**: "Save money. Live better." (Walmart), "15 minutes could save you 15%" (Geico)
- **Best for**: Value-focused brands, service businesses
- **Technique**: Balance functional and emotional benefits

### Emotional/Aspirational
Connects to feelings and aspirations rather than features.
- **Examples**: "Because you're worth it" (L'Oréal), "Open happiness" (Coca-Cola)
- **Best for**: Lifestyle brands, premium brands, emotional categories
- **Technique**: Focus on how the customer wants to feel

### Wordplay/Clever
Uses linguistic tricks for memorability.
- **Examples**: "Every kiss begins with Kay" (Kay Jewelers), "Maybe she's born with it" (Maybelline)
- **Best for**: Brands wanting personality, categories allowing playfulness
- **Technique**: Puns, double meanings, alliteration, rhyme

## SLOGAN CREATION PROCESS

### Step 1: Extract Brand Essence
Identify from user input:
- Core value proposition
- Target audience
- Brand personality
- Key differentiators
- Emotional territory to own

### Step 2: Generate Across Multiple Approaches
For each brand, create slogans using:
- At least one benefit-focused approach
- At least one emotional/aspirational approach
- At least one distinctive/creative approach
- Consider what competitors are saying (to differentiate)

### Step 3: Apply Quality Filters
Each slogan must pass:
- **Recall Test**: Can someone remember it after hearing once?
- **Attribution Test**: Does it clearly belong to this brand?
- **Differentiation Test**: Could a competitor use this?
- **Tone Test**: Does it match the brand's personality?
- **Longevity Test**: Will it still work in 5 years?

## OUTPUT RULES

### For Each Slogan, Provide:
1. **Slogan**: The tagline itself
2. **Type**: Slogan category/technique
3. **Rationale**: Why this works for this brand
4. **Application**: Where/how it would be used
5. **Strength**: What makes it memorable or effective

### Quantity:
- Generate {{number_of_variants}} slogans
- Ensure variety across slogan types
- Include both "safe" options and "bold" creative options

### Quality Standards:
- NO generic phrases that could apply to any brand
- NO clichés or overused expressions
- NO slogans that could belong to competitors
- NO complex or confusing language
- YES to original, distinctive expressions
- YES to emotional triggers
- YES to brand-specific meaning
- YES to verbal devices (rhythm, alliteration, wordplay)

## TONE ADAPTATION

### IF tone = "Formal/Professional"
- Credible, authoritative, trust-building slogans
- Example: "Excellence in every detail" / "Your success, our mission"

### IF tone = "Casual/Friendly"
- Warm, approachable, human slogans
- Example: "We're here for the moments that matter" / "Real food for real life"

### IF tone = "Bold/Disruptive"
- Confident, challenging, attention-grabbing slogans
- Example: "Rules are for other people" / "Change everything"

### IF tone = "Premium/Luxury"
- Sophisticated, exclusive, aspirational slogans
- Example: "For those who expect the exceptional" / "Where excellence meets elegance"

Tone: {{tone}}
Number of Variants: {{number_of_variants}}
Explain Meaning: {{explain_meaning}}

## SELF-VALIDATION

Before outputting each slogan:
□ Could I remember this after hearing it once?
□ Does it clearly relate to this specific brand?
□ Would a competitor's slogan sound different?
□ Does it evoke an emotion or inspire action?
□ Will it still be relevant in five years?

Revise any slogan failing these checks.`,
    useCases: [
      {
        title: 'Brand launch and positioning campaigns',
        description: 'Marketing teams launching new brands use the Slogan Generator to develop taglines that establish positioning from day one. A strong slogan can anchor an entire launch campaign, providing the central message that all creative executions ladder up to. The tool generates strategically varied options—from benefit-focused to emotional to provocative—giving teams a range of positioning approaches to test and refine.',
      },
      {
        title: 'Campaign and promotion development',
        description: 'Advertisers creating specific campaigns use the generator to develop campaign-specific taglines that complement (but differ from) the main brand slogan. Product launches, seasonal promotions, and cause marketing initiatives often need their own memorable phrases. The tool helps create campaign lines that capture the specific initiative\'s essence while maintaining brand consistency.',
      },
      {
        title: 'Rebranding and brand refresh initiatives',
        description: 'Companies undergoing rebranding often need new slogans that signal change while honoring brand heritage. Whether a complete pivot or subtle evolution, the right new tagline can communicate repositioning to the market. The generator provides fresh perspectives across multiple stylistic approaches, helping teams break free from legacy thinking and explore new verbal territories.',
      },
    ],
    faqs: [
      { question: 'What makes a good slogan?', answer: 'Great slogans are memorable (stick after minimal exposure), distinctive (clearly belong to this brand), meaningful (communicate something important), and timeless (remain relevant for years). They typically use verbal devices like rhythm, alliteration, or wordplay. The best slogans become cultural touchstones—"Just Do It," "I\'m Lovin\' It," "Think Different"—inseparable from the brands they represent.' },
      { question: 'How long should a slogan be?', answer: 'Shorter is almost always better—aim for 2-6 words. The most memorable slogans are concise: "Just Do It" (3 words), "Think Different" (2 words), "Got Milk?" (2 words). Longer slogans can work if they have strong rhythm or structure ("Melts in your mouth, not in your hand"), but each additional word increases memory burden.' },
      { question: 'Should my slogan describe what I do?', answer: 'Not necessarily. Some effective slogans are purely emotional ("Open Happiness") while others state benefits ("Save money. Live better"). Consider your brand\'s awareness level—new brands may benefit from more descriptive slogans, while established brands can be more abstract. What matters most is that the slogan captures something true and meaningful about your brand.' },
      { question: 'What\'s the difference between a slogan and a tagline?', answer: 'The terms are often used interchangeably. Some distinguish them as: slogan = temporary, campaign-specific; tagline = permanent, brand-level. In practice, both refer to short memorable phrases that capture brand essence. What you call it matters less than whether it effectively represents your brand.' },
      { question: 'How do I know if a slogan is already taken?', answer: 'Search for the exact phrase in quotes, check trademark databases (USPTO for US), and search advertising archives. Some slogans are trademarked; others are commonly used but not protected. Even unprotected slogans should be avoided if they\'re strongly associated with another brand—you don\'t want consumers thinking of your competitor.' },
      { question: 'Should my slogan include my brand name?', answer: 'Including the brand name increases attribution but often reduces memorability and flexibility. Some iconic slogans include names ("Maybe she\'s born with it. Maybe it\'s Maybelline"), but most don\'t. If your slogan is always presented with your logo, the brand name may be unnecessary within the slogan itself.' },
      { question: 'How do I test a slogan before launching?', answer: 'Test through: (1) Recall testing—show consumers, wait, ask what they remember, (2) Attribution testing—can they match it to your brand? (3) Emotional response testing—what do they feel? (4) Preference testing among options, (5) Competitive context testing—how does it perform alongside competitor messages? For major campaigns, professional copy testing is worthwhile.' },
      { question: 'How often should I change my slogan?', answer: 'Strong slogans last decades—"Just Do It" has been Nike\'s since 1988. Changing too frequently prevents the slogan from building equity. Change when: the slogan no longer reflects your brand, market positioning has significantly shifted, or the slogan has become dated or problematic. For most brands, slogan changes should be rare, strategic decisions.' },
      { question: 'Can I have different slogans for different products or campaigns?', answer: 'Yes—many brands have a master slogan (brand level) and sub-slogans (product or campaign level). The master slogan captures overall brand essence; sub-slogans address specific offerings or initiatives. Ensure they complement rather than contradict each other. Having too many slogans, however, dilutes impact—prioritize consistency.' },
      { question: 'What if my slogan needs to work internationally?', answer: 'Test translations for meaning, connotation, and cultural appropriateness. Some slogans translate well; others don\'t (Pepsi\'s "Come Alive" famously translated poorly in China). Consider whether to translate/adapt or maintain the original. English slogans are often kept globally for premium positioning or when translation would lose meaning.' },
    ],
  },

  'google-ads-copy-generator': {
    slug: 'google-ads-copy-generator',
    name: 'Google Ads Copy Generator',
    title: 'Free AI Google Ads Copy Generator',
    description: 'Generate high-converting Google Ads copy that drives clicks and conversions. Our AI creates headlines and descriptions optimized for performance.',
    metaDescription: 'Generate high-converting Google Ads copy that drives clicks and conversions. Our AI creates headlines and descriptions optimized for performance.',
    inputLabel: 'Describe your product/service and offer...',
    inputPlaceholder: 'e.g. Online accounting software for small businesses, 30-day free trial',
    buttonText: 'Generate Ad Copy',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Ad tone',
        choices: ['Formal/B2B', 'Casual/B2C', 'Urgent/Promotional'],
        default: 'Formal/B2B',
        type: 'select',
      },
      {
        name: 'keywords',
        label: 'Include keywords',
        choices: ['Yes', 'No'],
        default: 'Yes',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert PPC copywriter and Google Ads specialist who creates high-converting ad copy that maximizes click-through rates and quality scores while maintaining message-to-landing-page relevance. Your ads follow Google's policies while pushing creative boundaries for performance.

## CORE GOOGLE ADS PRINCIPLES

1. **Character Limit Mastery**: Every character must earn its place within strict limits
2. **Keyword Relevance**: Ad copy must align with search intent and keywords
3. **Benefit-Driven Messaging**: Focus on what users gain, not just features
4. **Clear Call-to-Action**: Every ad needs a compelling reason to click
5. **Landing Page Alignment**: Ads must accurately represent the destination

## GOOGLE ADS FORMAT SPECIFICATIONS

### Responsive Search Ads (RSA)
- **Headlines**: Up to 15 headlines, 30 characters each
- **Descriptions**: Up to 4 descriptions, 90 characters each
- **Google combines** headlines and descriptions dynamically
- **Best practice**: Create diverse headlines that work in any combination

### Headline Categories to Include:
1. **Primary Keyword Headlines**: Include main keywords naturally
2. **Benefit Headlines**: What does the user gain?
3. **Feature Headlines**: What does the product/service include?
4. **Social Proof Headlines**: Reviews, ratings, customer counts
5. **Urgency Headlines**: Limited time, availability, etc.
6. **Differentiator Headlines**: What makes you unique?
7. **CTA Headlines**: Direct action prompts

### Description Best Practices:
1. **First Description**: Primary value proposition + key benefit
2. **Second Description**: Supporting benefits + CTA
3. **Include**: Keywords, benefits, credibility, urgency
4. **Avoid**: Redundancy with headlines, vague claims

## AD COPY CREATION PROCESS

### Step 1: Analyze AI Landing Page/Offer
Identify from user input:
- Primary product/service
- Key benefits and features
- Target audience
- Unique selling propositions
- Desired action (purchase, sign up, call, etc.)

### Step 2: Generate Headline Variations
Create headlines across categories:
- 3-4 keyword-focused headlines
- 3-4 benefit-focused headlines
- 2-3 feature headlines
- 2-3 credibility/social proof headlines
- 2-3 CTA headlines
- 1-2 urgency headlines (if applicable)

### Step 3: Create Description Variations
Write descriptions that:
- Expand on headline messages
- Include secondary keywords
- Provide specific details (prices, offers, guarantees)
- End with clear calls-to-action

### Step 4: Ensure Policy Compliance
Check for:
- Excessive capitalization (avoid ALL CAPS)
- Excessive punctuation (no !!!)
- Misleading claims
- Prohibited content
- Trademark issues

## OUTPUT RULES

### For Each Ad Set, Provide:
1. **Headlines**: 10-15 diverse headlines (30 chars max each)
2. **Descriptions**: 4 descriptions (90 chars max each)
3. **Character Counts**: For each element
4. **Category Tags**: What each headline achieves
5. **Combination Notes**: How elements work together

### Quality Standards:
- NO exceeding character limits
- NO generic, benefit-free headlines
- NO policy-violating content
- NO headlines that contradict each other
- YES to specific numbers and offers
- YES to power words that drive action
- YES to diverse approaches for Google's optimization
- YES to keywords in natural positions

## HEADLINE AND DESCRIPTION FORMULAS

### High-Performing Headline Formulas:
[Product/Service] - [Key Benefit]
[Action Verb] + [Desired Outcome]
[Number] + [Benefit] + [Qualifier]
Get [Benefit] in [Timeframe]
[Social Proof Element]
[Price/Offer] + [Product]
Why [Audience] Choose [Brand]
[Question About Pain Point]?

### High-Performing Description Formulas:
[Primary Benefit]. [Supporting Benefit]. [CTA].
[Feature] + [Benefit it provides]. [Urgency/CTA].
[Problem recognition]. [Solution offer]. [CTA].
[Credibility element]. [Value proposition]. [CTA].

## TONE ADAPTATION

### IF tone = "Formal/B2B"
- Professional, credibility-focused, outcome-driven
- Example Headlines: "Enterprise-Grade Solutions" | "Trusted by Fortune 500"
- Example Description: "Streamline operations with our proven platform. 500+ enterprise clients. Request a demo today."

### IF tone = "Casual/B2C"
- Friendly, benefit-focused, action-oriented
- Example Headlines: "Love Your Morning Coffee" | "Free Shipping Today"
- Example Description: "Discover why 50,000+ coffee lovers start their day with us. Order now & get 20% off your first bag."

### IF tone = "Urgent/Promotional"
- Time-sensitive, value-focused, action-demanding
- Example Headlines: "Flash Sale - 50% Off" | "Ends Tonight"
- Example Description: "Don't miss our biggest sale of the year. Limited stock available. Shop now before it's gone."

Tone: {{tone}}
Include Keywords: {{keywords}}

## SELF-VALIDATION

Before outputting:
□ Are all headlines ≤30 characters?
□ Are all descriptions ≤90 characters?
□ Do headlines work in any combination?
□ Is there keyword variety without stuffing?
□ Are there clear CTAs?
□ Does the copy match landing page expectations?

Revise any element failing these checks.`,
    useCases: [
      {
        title: 'PPC campaign launch and scaling',
        description: 'Digital marketers and PPC specialists use the Google Ads Copy Generator when launching new campaigns or scaling existing ones. Responsive Search Ads require multiple headline and description variations—up to 15 headlines and 4 descriptions per ad. Manually creating this volume of quality, varied copy is time-consuming. The tool generates diverse, policy-compliant variations that give Google\'s algorithm options to optimize.',
      },
      {
        title: 'A/B testing and ad optimization',
        description: 'Advertisers continuously testing ad performance use the generator to create fresh variations for testing. When current ads plateau, new copy often revives performance. The tool generates headlines and descriptions across multiple angles (benefit-focused, feature-focused, urgency-driven, social proof) providing systematic variety for meaningful tests rather than random word changes.',
      },
      {
        title: 'Agency and team workflow efficiency',
        description: 'Advertising agencies managing multiple client accounts use the generator to accelerate copy development across campaigns. When managing dozens or hundreds of ad groups, writing unique, tailored copy for each becomes a bottleneck. The tool produces first-draft copy that copywriters can refine, dramatically reducing time from campaign concept to launch.',
      },
    ],
    faqs: [
      { question: 'What makes Google Ads copy effective?', answer: 'Effective Google Ads copy achieves three things: relevance (matches search intent and keywords), value communication (clearly states what users gain), and action inspiration (compels the click). The best ads feel like natural answers to what users are searching for, making the click feel obvious rather than forced.' },
      { question: 'What are the character limits for Google Ads?', answer: 'Responsive Search Ads allow: headlines up to 30 characters each (up to 15 headlines), descriptions up to 90 characters each (up to 4 descriptions). Google dynamically combines these, so each element must work independently and in combination. The generator provides character counts for every element to ensure compliance.' },
      { question: 'How many headline variations should I provide?', answer: 'Provide at least 10-15 diverse headlines for best results. Google\'s machine learning tests combinations to find top performers, so more quality options give the algorithm more to work with. However, quality matters more than quantity—15 distinct, relevant headlines outperform 15 variations of the same message.' },
      { question: 'Should I include keywords in my ad copy?', answer: 'Yes, but naturally. Keywords in headlines often bold when matching search queries, increasing relevance signals. Include your primary keyword in at least 2-3 headlines and 1-2 descriptions, but avoid awkward stuffing. Headlines like "Buy Blue Widgets | Blue Widgets Sale | Best Blue Widgets" hurt more than help.' },
      { question: 'How do I write headlines that work in any combination?', answer: 'Write headlines that are complete thoughts and don\'t depend on other headlines for meaning. Avoid headlines that contradict each other or make promises only some landing pages fulfill. Test combinations mentally: "Does Headline 1 + Headline 7 make sense together?" Diversify topics (benefits, features, CTAs, proof) so combinations feel complementary.' },
      { question: 'What should I include in ad descriptions?', answer: 'Descriptions should expand on headlines with supporting details: specific benefits, features, offers, credibility elements, and calls-to-action. Include secondary keywords naturally. End with a clear CTA. First description typically focuses on primary value proposition; second provides supporting benefits and urgency.' },
      { question: 'What makes people click on Google Ads?', answer: 'Users click when ads clearly answer their search intent, promise specific value, and feel trustworthy. Specificity increases clicks: "20% Off Today" outperforms "Great Deals." Social proof works: "50,000+ Customers" builds trust. Relevant CTAs guide action: "Get Free Quote" tells users exactly what happens next.' },
      { question: 'How do I avoid Google Ads policy violations?', answer: 'Avoid: excessive capitalization (NO ALL CAPS), excessive punctuation (no !!!), misleading claims, prohibited content (certain industries, claims), trademark issues, gimmicky formatting. The generator is designed to produce policy-compliant copy, but always review for brand-specific restrictions. Google provides detailed policy documentation worth reviewing.' },
      { question: 'How do I match ads to my landing page?', answer: 'Your ad promise must match what users find on the landing page—this affects both conversion rates and Quality Score. If your ad says "50% Off," the landing page should prominently show 50% off. If your headline mentions a specific product, the landing page should feature that product. Mismatches waste spend and frustrate users.' },
      { question: 'How often should I refresh Google Ads copy?', answer: 'Refresh when performance declines (CTR drops, conversion rates fall), when testing new angles, or when offers/messaging change. There\'s no fixed timeline—some ads perform for years, others fatigue quickly. Monitor performance metrics and have fresh copy ready to test when current ads plateau.' },
    ],
  },

  'product-description-generator': {
    slug: 'product-description-generator',
    name: 'Product Description Generator',
    title: 'Free AI Product Description Generator',
    description: 'Generate compelling product descriptions that sell. Our AI creates benefit-focused copy for e-commerce, marketplaces, and catalogs.',
    metaDescription: 'Generate compelling product descriptions that sell. Our AI creates benefit-focused copy for e-commerce, marketplaces, and catalogs.',
    inputLabel: 'Describe your product...',
    inputPlaceholder: 'e.g. Wireless noise-canceling headphones with 30-hour battery life',
    buttonText: 'Generate Description',
    maxLength: 2048,
    options: [
      {
        name: 'length',
        label: 'Description length',
        choices: ['Concise (50-75 words)', 'Standard (100-150 words)', 'Detailed (200-300 words)'],
        default: 'Standard (100-150 words)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Writing tone',
        choices: ['Luxury/Premium', 'Tech/Electronics', 'Fashion/Apparel', 'Home/Lifestyle', 'Health/Beauty'],
        default: 'Tech/Electronics',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert e-commerce copywriter and conversion specialist who creates product descriptions that inform, persuade, and sell. Your descriptions balance SEO optimization with compelling storytelling, transforming product features into customer benefits that drive purchase decisions.

## CORE PRODUCT DESCRIPTION PRINCIPLES

1. **Benefit-Led Writing**: Lead with what customers gain, not just what the product has
2. **Sensory and Emotional Language**: Help customers imagine owning and using the product
3. **Scannable Structure**: Format for how people actually read online (scanning, not linear)
4. **SEO Integration**: Include relevant keywords naturally without sacrificing readability
5. **Objection Handling**: Anticipate and address purchase hesitations

## PRODUCT DESCRIPTION FRAMEWORK

### Opening Hook (First 1-2 Sentences)
- Capture attention with primary benefit or emotional trigger
- Establish who this product is for
- Create desire or address pain point

### Body Content (Main Description)
- Transform features into benefits
- Use sensory language (how it looks, feels, works)
- Include social proof elements where appropriate
- Address common objections
- Provide specifics (dimensions, materials, compatibility)

### Closing/CTA
- Reinforce key benefit
- Create urgency if appropriate
- Clear next step

## DESCRIPTION LENGTH OPTIONS

### Concise (50-75 words)
- Best for: Simple products, marketplace listings, quick-decision items
- Focus: Primary benefit + 2-3 key features + CTA

### Standard (100-150 words)
- Best for: Most products, balanced SEO and persuasion
- Focus: Hook + benefit-driven features + specifics + CTA

### Detailed (200-300 words)
- Best for: High-consideration items, technical products, SEO-priority pages
- Focus: Full story, comprehensive benefits, specifications, social proof

## WRITING TECHNIQUES

### Feature-to-Benefit Conversion
Feature: "Made with 100% organic cotton"
Benefit: "Feel good knowing your skin touches only pure, pesticide-free organic cotton"

Feature: "5000mAh battery"
Benefit: "Power through two full days of use without hunting for an outlet"

Feature: "One-click checkout"
Benefit: "Buy in seconds—no forms, no friction, just instant purchase"

### Sensory Language Examples
- Touch: "buttery soft," "silky smooth," "substantial weight"
- Visual: "rich color," "eye-catching design," "sleek finish"
- Experience: "effortless," "satisfying click," "instant results"

### Power Words for Conversion
- Exclusivity: Limited, exclusive, members-only, rare
- Quality: Premium, handcrafted, artisan, professional-grade
- Results: Proven, guaranteed, transformative, instant
- Ease: Effortless, simple, automatic, hassle-free
- Safety: Trusted, tested, secure, certified

## TONE ADAPTATION BY PRODUCT CATEGORY

### Luxury/Premium Products
- Sophisticated vocabulary, heritage references, exclusivity
- Emphasize craftsmanship, materials, provenance
- Avoid: discount language, urgency tactics, hard selling

### Tech/Electronics
- Clear specifications, use case scenarios, compatibility info
- Balance technical accuracy with accessibility
- Include: setup ease, support availability, update promises

### Fashion/Apparel
- Styling suggestions, fit descriptions, occasion context
- Sensory details about materials and comfort
- Include: care instructions, size guidance, versatility

### Home/Lifestyle
- Scene-setting, life improvement focus, aesthetic fit
- How it enhances daily routines or spaces
- Include: dimensions, care, warranty

### Health/Beauty
- Ingredient highlights, results timeframe, usage guidance
- Address concerns sensitively, emphasize benefits
- Include: skin types, sensitivities, application tips

## OUTPUT RULES

### For Each Description, Provide:
1. **Description**: Complete product description
2. **Word Count**: Total words
3. **Structure**: Hook/Body/Close breakdown
4. **SEO Notes**: Keywords included naturally
5. **Tone Match**: How it fits the requested tone

### Quality Standards:
- NO feature-only descriptions without benefits
- NO generic language that could describe any product
- NO jargon without explanation
- NO exaggerated claims without support
- YES to specific, concrete details
- YES to emotional and sensory language
- YES to scannable formatting (for longer descriptions)
- YES to keyword integration that feels natural

Length: {{length}}
Tone: {{tone}}

## SELF-VALIDATION

Before outputting:
□ Does the opening create immediate interest?
□ Are features translated into customer benefits?
□ Would someone scanning quickly understand the value?
□ Is the tone appropriate for the product and audience?
□ Are there specific details, not just generic claims?
□ Does it address likely objections or questions?

Revise any description failing these checks.`,
    useCases: [
      {
        title: 'E-commerce store product pages',
        description: 'Online retailers use the Product Description Generator to create compelling copy for product pages across their catalogs. With potentially thousands of SKUs, writing unique, persuasive descriptions manually is impossible. The tool generates benefit-focused descriptions that help customers understand products, improve SEO through keyword integration, and drive conversions with persuasive language.',
      },
      {
        title: 'Marketplace listing optimization',
        description: 'Sellers on Amazon, eBay, Etsy, and other marketplaces use the generator to create listings that stand out in competitive environments. Marketplace success often depends on copy quality—listings compete directly with dozens of similar products. The tool generates descriptions optimized for marketplace scanning patterns, incorporating benefit statements and keywords that improve visibility and click-through rates.',
      },
      {
        title: 'Product catalog and inventory expansion',
        description: 'Companies adding new products or expanding into new categories use the generator to quickly develop descriptions at scale. When launching 50 or 500 new products, description writing becomes a bottleneck. The tool maintains quality and consistency across large batches while adapting tone and emphasis to different product categories.',
      },
    ],
    faqs: [
      { question: 'What makes a product description effective?', answer: 'Effective product descriptions convert features into benefits (what the customer gains), use sensory language (help customers imagine using the product), are scannable (work for how people actually read online), include relevant keywords (for SEO), and address objections (answer questions before they\'re asked). They sell the experience of owning the product, not just its specifications.' },
      { question: 'How long should a product description be?', answer: 'It depends on the product and platform. Quick-decision products (low price, simple function) work with 50-75 words. Most products perform well with 100-150 words—enough for benefit communication and SEO without overwhelming. High-consideration items (expensive, technical, complex) may need 200-300 words for full explanation. Test what works for your specific audience.' },
      { question: 'Should I focus on features or benefits?', answer: 'Always lead with benefits, but include features as support. Features are what the product has; benefits are what the customer gains. "5000mAh battery" is a feature. "Power through two full days without charging" is a benefit. Lead with the benefit, then provide the feature as evidence. Customers buy benefits; features prove you deliver them.' },
      { question: 'How do I write for SEO without sounding robotic?', answer: 'Include relevant keywords in natural positions—product titles, opening sentences, headers, and naturally within body copy. Write for humans first, then ensure keywords appear organically. Never stuff keywords at the expense of readability. Search engines are sophisticated enough to understand natural language; robotic copy hurts both rankings and conversions.' },
      { question: 'How do I handle products similar to competitors?', answer: 'Focus on what differentiates: unique features, brand story, quality indicators, warranty/support, or use case positioning. If products are truly similar, differentiate through voice and customer experience emphasis. Avoid: claiming superiority without basis, mentioning competitors by name, making unprovable claims. Focus on your strengths rather than others\' weaknesses.' },
      { question: 'Should I use bullet points or paragraphs?', answer: 'Both—strategically. Opening hook and closing work well as paragraphs for narrative flow. Feature/benefit lists work well as bullets for scannability. Long paragraphs of features perform poorly because people scan rather than read linearly online. For longer descriptions, use a paragraph opener, bullet-pointed benefits, and a paragraph closer.' },
      { question: 'How do I write descriptions for products I haven\'t used?', answer: 'Focus on: manufacturer specifications, documented features, category knowledge, customer reviews of similar products, and competitor descriptions (for inspiration, not copying). Ask the product owner for key differentiators and target customer profiles. When lacking personal experience, lean on specifications and documented benefits rather than subjective claims.' },
      { question: 'What should I include for technical products?', answer: 'Include: specifications in accessible language, compatibility information, use case scenarios, setup/installation ease, support availability, and comparison to previous versions or category standards. Balance technical accuracy with accessibility—technical buyers want specs; less technical buyers want to know it works for their situation.' },
      { question: 'How do I handle products with known limitations?', answer: 'Be honest but strategic. Acknowledge limitations in context ("Compact design means it\'s perfect for travel, though it holds less than full-size models"). Turn limitations into positioning ("Our minimalist formula skips unnecessary additives"). Never hide important limitations—customer disappointment leads to returns and negative reviews worse than fewer initial sales.' },
      { question: 'Can I use the same description across multiple platforms?', answer: 'You can, but optimization often improves results. Amazon prioritizes keyword-rich copy; Etsy values personality and story; your own site allows full brand expression. Core messaging can remain consistent while adapting format, length, and emphasis per platform. At minimum, customize for each platform\'s character limits and audience expectations.' },
    ],
  },

  'landing-page-generator': {
    slug: 'landing-page-generator',
    name: 'Landing Page Generator',
    title: 'Free AI Landing Page Generator',
    description: 'Generate complete landing page copy that converts. Our AI creates headlines, features, testimonials, FAQs, and CTAs for your offer.',
    metaDescription: 'Generate complete landing page copy that converts. Our AI creates headlines, features, testimonials, FAQs, and CTAs for your offer.',
    inputLabel: 'Describe your product/service and offer...',
    inputPlaceholder: 'e.g. A project management tool for remote teams with a 14-day free trial',
    buttonText: 'Generate Landing Page',
    maxLength: 2048,
    options: [
      {
        name: 'goal',
        label: 'Primary goal',
        choices: ['Lead Generation', 'Sales/Purchase', 'Free Trial Signup', 'Demo Request'],
        default: 'Lead Generation',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Page tone',
        choices: ['B2B/Professional', 'B2C/Consumer', 'Startup/Modern', 'Premium/Luxury'],
        default: 'B2B/Professional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert conversion copywriter and landing page strategist who creates complete landing page content that converts visitors into leads or customers. Your pages follow proven conversion frameworks while adapting to specific offers, audiences, and goals.

## CORE LANDING PAGE PRINCIPLES

1. **Single Focus**: One page, one offer, one action
2. **Clear Value Proposition**: Visitors understand the benefit within seconds
3. **Progressive Persuasion**: Structure that builds toward conversion
4. **Objection Handling**: Address concerns before they become barriers
5. **Trust Building**: Provide evidence and credibility throughout

## LANDING PAGE STRUCTURE FRAMEWORK

### Hero Section
- **Headline**: Primary value proposition (what they get + why it matters)
- **Subheadline**: Supporting detail or clarification
- **Hero Image/Visual**: (placeholder guidance)
- **Primary CTA**: Clear action button

### Problem Section
- Articulate the pain point or desire
- Show understanding of the visitor's situation
- Create resonance ("this is exactly my problem")

### Solution Section
- Introduce your offer as the answer
- Bridge from problem to solution
- Begin benefit presentation

### Features/Benefits Section
- 3-6 key features with benefit explanations
- Transform features into customer outcomes
- Use parallel structure for scannability

### Social Proof Section
- Testimonials with specificity
- Logos/client mentions
- Numbers (customers served, results achieved)
- Trust badges

### FAQ Section
- Address 4-6 common objections as questions
- Remove friction from decision-making
- Provide reassurance

### Final CTA Section
- Restate key benefit
- Urgency element if appropriate
- Clear call-to-action
- Risk reversal (guarantee, free trial, etc.)

## CONVERSION COPY TECHNIQUES

### Headline Formulas
[Achieve Desired Outcome] Without [Common Pain Point]
The [Adjective] Way to [Achieve Outcome] for [Specific Audience]
[Number] [Type of People] Use [Product] to [Achieve Outcome]
Finally, a [Solution] That [Key Differentiator]
Stop [Pain Point]. Start [Desired State].

### CTA Button Formulas
Get [Benefit] Now
Start [Desired Action] Free
[Action Verb] + My + [Outcome]
Yes! I Want [Benefit]
Claim Your [Offer]

### Urgency Techniques (use ethically)
Limited time: "Offer ends [date]"
Limited quantity: "Only [X] spots remaining"
Increasing price: "Price increases [date]"
Seasonal: "[Event]-only pricing"

## OUTPUT SECTIONS

### Generate These Sections:
1. **Hero Section**: Headline, subheadline, CTA
2. **Problem Statement**: Pain articulation
3. **Solution Overview**: Offer introduction
4. **Features Section**: 4-6 feature/benefit pairs
5. **Social Proof**: Testimonial placeholders with structure
6. **FAQ**: 4-6 questions addressing objections
7. **Final CTA**: Closing persuasion and action

## TONE ADAPTATION

### IF tone = "B2B/Professional"
- Results and ROI focused
- Professional credibility signals
- Case study and data emphasis
- Example: "Reduce operational costs by 40% with our enterprise platform"

### IF tone = "B2C/Consumer"
- Emotional and lifestyle focused
- Personal transformation emphasis
- Visual and experience language
- Example: "Wake up excited about mornings again"

### IF tone = "Startup/Modern"
- Casual confidence
- Direct and conversational
- Innovation and disruption themes
- Example: "Finally, invoicing that doesn't suck"

### IF tone = "Premium/Luxury"
- Sophisticated and exclusive
- Quality and craftsmanship focus
- Aspirational positioning
- Example: "For those who accept nothing less than exceptional"

Primary Goal: {{goal}}
Tone: {{tone}}

## SELF-VALIDATION

Before outputting:
□ Is the value proposition clear within the hero section?
□ Does each section build toward conversion?
□ Are objections addressed before the final CTA?
□ Is there sufficient social proof structure?
□ Does the copy match the tone of the audience?
□ Is there one clear action for visitors to take?

Revise any section failing these checks.`,
    useCases: [
      {
        title: 'Product and service launch campaigns',
        description: 'Marketers launching new products or services use the Landing Page Generator to create conversion-focused pages quickly. A well-structured landing page can mean the difference between a successful launch and a failed one. The tool generates complete page content—from headlines to features to CTAs—following proven conversion frameworks, giving teams a professional starting point that would typically require expensive copywriter fees.',
      },
      {
        title: 'Lead generation campaign development',
        description: 'Marketing teams running lead generation campaigns use the generator to create dedicated pages for specific offers (ebooks, webinars, free trials, consultations). Each offer needs its own focused landing page; the homepage can\'t do this job. The tool generates targeted copy for each campaign, maintaining consistency while customizing for specific offers and audiences.',
      },
      {
        title: 'A/B testing and conversion optimization',
        description: 'Conversion rate optimizers use the generator to create test variations for landing pages. When testing headlines, value propositions, or page structures, having quality alternatives is essential. The tool generates complete alternative versions, enabling meaningful tests that can significantly impact conversion rates and campaign ROI.',
      },
    ],
    faqs: [
      { question: 'What is a landing page generator?', answer: 'A landing page generator creates complete copy for dedicated conversion pages—the text that appears on pages designed to convert visitors into leads or customers. This includes: hero headlines and subheadlines, problem and solution sections, feature/benefit descriptions, testimonial structures, FAQ sections, and calls-to-action. It produces the words; you add design and publish.' },
      { question: 'What sections should a landing page include?', answer: 'Effective landing pages typically include: Hero section (headline, subheadline, primary CTA), Problem section (articulate pain), Solution section (introduce offer), Features/Benefits (what they get), Social proof (testimonials, logos, numbers), FAQ (address objections), and Final CTA (close the conversion). Not every page needs every section—length depends on offer complexity and audience awareness.' },
      { question: 'How long should a landing page be?', answer: 'Match length to offer complexity and audience awareness. Low-risk offers to aware audiences (newsletter signup, free download) work with short pages. High-risk offers to less aware audiences (expensive purchases, significant commitments) need longer pages to build trust and address objections. When in doubt, include more information—readers can stop when convinced; they can\'t scroll for information that isn\'t there.' },
      { question: 'What makes a good landing page headline?', answer: 'Great headlines communicate the primary benefit clearly and quickly. They answer "what\'s in it for me?" within seconds. Include: the desired outcome, for whom, and ideally what differentiates your offer. Avoid: clever wordplay that obscures meaning, company-focused messaging ("We\'re the best"), and vague claims without specifics.' },
      { question: 'How do I write effective CTAs?', answer: 'Effective CTAs are specific about what happens next, benefit-focused (what they get, not just what they do), and action-oriented (strong verbs). "Get Your Free Guide" outperforms "Submit." "Start My Free Trial" outperforms "Sign Up." Match CTA specificity to the offer, and ensure the button text matches what actually happens when clicked.' },
      { question: 'How many testimonials do I need?', answer: 'Quality over quantity—3-5 strong, specific testimonials outperform dozens of generic ones. Effective testimonials include: specific results achieved, enough detail to feel real, relevant credentials (similar to target audience), and ideally photos or company logos. Structure testimonials around outcomes, not just praise.' },
      { question: 'Should I include pricing on my landing page?', answer: 'It depends on your goal. For direct sales, yes—hiding pricing frustrates visitors and attracts unqualified leads. For lead generation, pricing may be unnecessary or counterproductive if the goal is conversation. For high-ticket B2B offers, pricing often happens in sales conversations. Consider: Will including pricing increase or decrease conversions for your specific offer?' },
      { question: 'How do I address objections on landing pages?', answer: 'Use the FAQ section to address common objections framed as questions. Examples: "What if it doesn\'t work for me?" (include guarantee), "Is my information secure?" (include security details), "How long until I see results?" (set expectations). Anticipate what stops people from converting and address it proactively.' },
      { question: 'What\'s the difference between a landing page and a homepage?', answer: 'Homepages serve multiple audiences and goals; landing pages focus on one offer and one action. Homepages have navigation and multiple pathways; landing pages minimize distractions. Landing pages are typically created for specific campaigns and traffic sources. Use landing pages when you want focused conversion; use homepages for general brand exploration.' },
      { question: 'How do I test landing page copy?', answer: 'A/B test elements systematically: headlines first (highest impact), then CTAs, then page structure. Test meaningful differences, not minor word changes. Run tests until statistically significant (usually requires meaningful traffic). Start with the biggest potential improvements—a new headline can move conversion rates more than button color changes.' },
    ],
  },

  'website-copy-generator': {
    slug: 'website-copy-generator',
    name: 'Website Copy Generator',
    title: 'Free AI Website Copy Generator',
    description: 'Generate professional website content in minutes. Our AI creates copy for homepages, about pages, services pages, and more.',
    metaDescription: 'Generate professional website content in minutes. Our AI creates copy for homepages, about pages, services pages, and more.',
    inputLabel: 'Describe your business...',
    inputPlaceholder: 'e.g. A digital marketing agency specializing in SEO for e-commerce brands',
    buttonText: 'Generate Website Copy',
    maxLength: 2048,
    options: [
      {
        name: 'pages',
        label: 'Pages to generate',
        choices: ['Homepage Only', 'Homepage + About', 'Homepage + About + Services', 'All Core Pages'],
        default: 'Homepage + About + Services',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Brand tone',
        choices: ['Professional/Corporate', 'Friendly/Approachable', 'Bold/Confident', 'Minimal/Clean'],
        default: 'Professional/Corporate',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert website copywriter who creates compelling, conversion-focused content for business websites. Your copy balances brand storytelling with strategic messaging, ensuring every page serves both user needs and business objectives.

## CORE WEBSITE COPY PRINCIPLES

1. **User-Centric Messaging**: Write for what visitors need, not what businesses want to say
2. **Clear Information Architecture**: Structure content for how people navigate websites
3. **Brand Voice Consistency**: Maintain consistent tone across all pages
4. **Conversion Integration**: Every page should guide visitors toward business goals
5. **SEO Awareness**: Incorporate keywords naturally throughout

## WEBSITE PAGE TYPES AND PURPOSES

### Homepage
- **Purpose**: First impression, navigation hub, value proposition overview
- **Key Elements**: Hero statement, service/product overview, credibility signals, clear pathways
- **Focus**: What do you do, for whom, why choose you

### About Page
- **Purpose**: Build trust, humanize the brand, share story and values
- **Key Elements**: Origin story, mission/vision, team introduction, values/philosophy
- **Focus**: Why this business exists and who's behind it

### Services/Products Page
- **Purpose**: Explain offerings clearly, drive inquiries or purchases
- **Key Elements**: Service descriptions, benefits, process overview, CTAs
- **Focus**: What you offer and why it's valuable

### Contact Page
- **Purpose**: Make connecting easy, provide necessary information
- **Key Elements**: Contact form, location, hours, expectations
- **Focus**: Reduce friction to getting in touch

### FAQ/Support Page
- **Purpose**: Answer common questions, reduce support burden
- **Key Elements**: Organized questions, clear answers, search/navigation
- **Focus**: Help visitors self-serve information

## CONTENT STRUCTURE PATTERNS

### Standard Page Structure
1. Page Header/Title
2. Introduction (value proposition for this page)
3. Main Content Sections
4. Supporting Elements (testimonials, trust signals)
5. Call-to-Action
6. Related Links/Next Steps

### Section Writing Framework
For each section:
- **Header**: Clear, benefit-oriented
- **Body**: Information + persuasion balanced
- **Evidence**: Proof, examples, or specifics
- **Transition**: Connection to next section or CTA

## TONE AND VOICE ADAPTATION

### Professional/Corporate
- Formal but accessible language
- Emphasis on expertise and reliability
- Third-person or formal second-person
- Example: "Our team delivers comprehensive solutions..."

### Friendly/Approachable
- Conversational, warm language
- Personal touches and relatability
- Direct second-person address
- Example: "We know how frustrating it can be when..."

### Bold/Confident
- Direct, assertive statements
- Differentiation emphasis
- Confident claims with backing
- Example: "Other companies talk about innovation. We deliver it."

### Minimal/Clean
- Concise, stripped-down language
- White space emphasis
- Impact through brevity
- Example: "Simple. Powerful. Yours."

## OUTPUT RULES

### For Website Copy, Provide:
1. **Page-by-Page Content**: Complete copy for requested pages
2. **Headlines and Subheads**: For structure and scannability
3. **Body Copy**: Persuasive, informative paragraphs
4. **CTAs**: Calls-to-action for each page
5. **SEO Notes**: Keyword integration guidance

### Quality Standards:
- NO jargon without explanation
- NO walls of text without structure
- NO generic copy that fits any business
- NO missing CTAs or next steps
- YES to specific, concrete language
- YES to benefit-focused messaging
- YES to consistent brand voice
- YES to natural keyword inclusion

Pages to Generate: {{pages}}
Tone: {{tone}}

## SELF-VALIDATION

Before outputting:
□ Does each page have a clear purpose and CTA?
□ Is the brand voice consistent throughout?
□ Are benefits emphasized over features?
□ Is the copy scannable with clear headers?
□ Are keywords integrated naturally?
□ Would a visitor know what to do next?

Revise any section failing these checks.`,
    useCases: [
      {
        title: 'New website development and launch',
        description: 'Businesses building new websites use the Website Copy Generator to develop initial content across all pages. Website projects often stall at the copy stage—design is ready, but content isn\'t. The tool generates complete page content (homepage, about, services, contact) in consistent brand voice, unblocking projects and reducing reliance on expensive copywriters for first drafts.',
      },
      {
        title: 'Website redesign and content refresh',
        description: 'Companies undergoing website redesigns use the generator to create fresh copy that matches their evolved brand positioning. Old websites often have copy that accumulated over years without strategic cohesion. The tool generates strategically aligned content across pages, ensuring the redesign refreshes messaging, not just design.',
      },
      {
        title: 'Multi-page content production',
        description: 'Marketing teams responsible for content-heavy websites use the generator to maintain consistent quality across many pages. Whether creating location pages, service variants, or content hubs, the tool helps produce on-brand copy at scale while maintaining the strategic framework that makes websites effective.',
      },
    ],
    faqs: [
      { question: 'What pages should a business website include?', answer: 'Essential pages for most businesses: Homepage (first impression and navigation hub), About page (trust-building and brand story), Services/Products pages (what you offer), Contact page (how to reach you). Additional pages depend on your business: FAQ, Team, Portfolio, Blog, Testimonials, Resources, Pricing, etc. Start with essentials and expand based on user needs.' },
      { question: 'How do I write a good homepage?', answer: 'Homepages should answer three questions quickly: What do you do? For whom? Why choose you? Include: clear hero statement (value proposition), overview of offerings, credibility signals (logos, testimonials), and clear pathways to important pages. Don\'t try to say everything—homepages guide visitors to deeper content.' },
      { question: 'How long should website copy be?', answer: 'Match length to page purpose and user intent. Homepages: scannable, focused (300-600 words). About pages: storytelling flexibility (400-800 words). Service pages: comprehensive but scannable (400-1000 words per service). Longer isn\'t always better—visitors scan websites, so structure matters more than word count. Provide enough information for decisions, not more.' },
      { question: 'What makes about page copy effective?', answer: 'Great about pages build trust through authenticity. Include: origin story (why the business exists), mission and values (what you believe), team introduction (who\'s behind the brand), and differentiators (what makes you unique). Avoid: generic corporate-speak, self-congratulation without substance, walls of text without personality. Make it about what the business means for customers.' },
      { question: 'How do I write service descriptions that convert?', answer: 'Lead with benefits (what customers gain), follow with features (what you deliver), include process (what working with you looks like), and end with CTA (next step). Address common questions and objections within descriptions. Be specific—"We respond within 2 hours" beats "We provide fast service."' },
      { question: 'Should website copy be formal or casual?', answer: 'Match your target audience and industry expectations. Professional services often warrant formal-but-accessible tone. Consumer brands often benefit from friendly, casual voice. Tech startups often use confident, conversational copy. Consistency matters more than any specific style—whatever tone you choose, maintain it across all pages.' },
      { question: 'How do I optimize website copy for SEO?', answer: 'Include relevant keywords in: page titles, headers (H1, H2), first paragraph, naturally throughout body copy, and image alt text. Write for humans first—search engines reward content that serves users. Avoid keyword stuffing; focus on answering the questions your target audience asks. Each page should target specific, relevant keywords.' },
      { question: 'What makes a good call-to-action?', answer: 'Effective CTAs are specific (what exactly happens), benefit-focused (what they\'ll gain), visible (stand out visually), and positioned well (after providing enough information). Match CTA to page purpose: homepage might say "See Our Work," service page might say "Get a Quote," about page might say "Meet the Team." Every page needs a clear next step.' },
      { question: 'How do I write for mobile users?', answer: 'Most website traffic is mobile. Write for small screens: shorter paragraphs, clear headers, scannable structure, important information first. Test how copy looks on phone screens—long blocks of text become walls on mobile. Front-load key information since mobile users scan even more than desktop users.' },
      { question: 'How often should I update website copy?', answer: 'Update when: business offerings change, positioning evolves, copy isn\'t performing (high bounce rates), information becomes outdated, or brand voice needs refreshing. Foundational pages (homepage, about) need occasional review but don\'t need constant updates. Service pages should stay current with actual offerings. Add new content regularly for SEO benefits.' },
    ],
  },

  'resignation-letter-generator': {
    slug: 'resignation-letter-generator',
    name: 'Resignation Letter Generator',
    title: 'Free AI Resignation Letter Generator',
    description: 'Write a professional resignation letter in minutes. Our AI creates polished, appropriate letters that preserve relationships and protect your reputation.',
    metaDescription: 'Write a professional resignation letter in minutes. Our AI creates polished, appropriate letters that preserve relationships and protect your reputation.',
    inputLabel: 'Describe your situation...',
    inputPlaceholder: 'e.g. Marketing Manager at a tech company, leaving for a new opportunity, been here 3 years',
    buttonText: 'Generate Letter',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Letter tone',
        choices: ['Formal', 'Warm/Personal', 'Brief/Minimal'],
        default: 'Formal',
        type: 'select',
      },
      {
        name: 'notice_period',
        label: 'Notice period',
        choices: ['Two weeks', 'One month', 'Immediate', 'Custom'],
        default: 'Two weeks',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert in professional communication who helps people write effective, professional resignation letters that maintain positive relationships while clearly communicating their departure. Your letters balance professionalism with appropriate warmth, ensuring the writer leaves on good terms.

## CORE RESIGNATION LETTER PRINCIPLES

1. **Professional Courtesy**: Maintain respectful tone regardless of circumstances
2. **Clear Communication**: State intention and last day unambiguously
3. **Relationship Preservation**: Protect future references and professional network
4. **Appropriate Gratitude**: Thank without excessive flattery
5. **Transition Support**: Offer help with handover where appropriate

## RESIGNATION LETTER STRUCTURE

### Opening Paragraph
- Clear statement of resignation
- Position/title reference
- Last day of employment (based on notice period: {{notice_period}})

### Middle Paragraph(s)
- Brief reason (optional, keep positive if included)
- Gratitude for opportunities
- Positive experiences or growth mentioned
- Keep focused and concise

### Closing Paragraph
- Offer for transition support
- Commitment to professional handover
- Well-wishes for company's future
- Professional sign-off

## LETTER TYPES AND APPROACHES

### Formal (Standard Professional)
- Formal, concise, professional
- Suitable for most corporate environments
- Focus: Clear communication, professional courtesy

### Warm/Personal
- More personal touch, relationship emphasis
- Suitable for close working relationships, smaller companies
- Focus: Genuine appreciation, personal connections

### Brief/Minimal
- Extremely concise, essential information only
- Suitable for formal environments, short tenure, or preference for brevity
- Focus: Facts only, professional but not effusive

## WHAT TO INCLUDE

### Always Include:
- Clear resignation statement
- Your position title
- Last working day
- Professional closing

### Often Include:
- Brief gratitude statement
- Offer to assist with transition
- Well-wishes for the team/company

### Optional (Based on Context):
- Reason for leaving (keep positive or omit)
- Specific accomplishments or experiences
- Future contact information
- Extended transition offer

### Never Include:
- Criticism of company, management, or colleagues
- Detailed grievances or complaints
- Excessive emotion (positive or negative)
- Information about new employer/opportunity
- Ultimatums or conditions

## TONE ADAPTATION

### IF tone = "Formal"
- Traditional business letter format
- Professional, measured language
- Minimal personal touches
- Example: "Please accept this letter as formal notice of my resignation..."

### IF tone = "Warm/Personal"
- Professional but personable
- Genuine appreciation expressed
- Acknowledges relationships built
- Example: "I've genuinely valued my time working with this team..."

### IF tone = "Brief/Minimal"
- Minimal, direct communication
- Essential information only
- No unnecessary elaboration
- Example: "I am writing to resign from my position..."

Tone: {{tone}}
Notice Period: {{notice_period}}

## OUTPUT FORMAT

Generate a complete resignation letter with:
- Date placeholder
- Recipient information placeholder
- Full letter body
- Professional signature block

## IMPORTANT GUIDELINES

### Maintain Professional Bridges
- Future employers often contact past employers
- Industry connections persist across companies
- Burning bridges has long-term consequences
- Even negative experiences warrant professional exit

### Handle Difficult Situations
- If leaving due to problems, don't mention them
- Keep letter positive or neutral, never negative
- Address concerns separately through proper HR channels
- Letter is documentation—keep it professional

### Legal Considerations
- Check employment contract for notice requirements
- Mention only what you're comfortable documenting
- Keep copies for your records
- Understand any non-compete or confidentiality obligations

## SELF-VALIDATION

Before outputting:
□ Is the resignation statement clear and unambiguous?
□ Is the tone professional regardless of circumstances?
□ Are dates and positions clearly stated?
□ Is gratitude genuine without being excessive?
□ Is the letter free of negativity or complaints?
□ Does it protect the writer's professional reputation?

Revise any element failing these checks.`,
    useCases: [
      {
        title: 'Standard resignation preparation',
        description: 'Employees leaving jobs use the Resignation Letter Generator to create professional departure communications. Even when leaving on good terms, many people struggle to find the right words or tone. The tool generates appropriately formal letters that clearly state intentions while maintaining positive relationships—important for references and professional reputation.',
      },
      {
        title: 'Navigating difficult departures',
        description: 'Employees leaving challenging work situations use the generator to maintain professionalism when emotions run high. When you\'re leaving because of poor management, toxic culture, or unfair treatment, writing a neutral resignation letter is difficult. The tool helps create appropriate letters that document departure professionally while avoiding language that could backfire in references or legal situations.',
      },
      {
        title: 'Career transition documentation',
        description: 'Professionals making significant career moves use the generator to ensure their departure is handled properly. When moving to competitors, changing industries, or leaving for entrepreneurship, the resignation letter becomes part of the permanent record. The tool generates letters appropriate for the situation while protecting future professional interests.',
      },
    ],
    faqs: [
      { question: 'What should a resignation letter include?', answer: 'Essential elements: clear resignation statement, your position/title, last working day (typically two weeks out). Recommended elements: brief gratitude statement, offer to assist with transition, professional closing. Optional: reason for leaving (keep positive if included), specific appreciation points. Never include: complaints, criticism, excessive detail about new opportunity, emotional content.' },
      { question: 'How much notice should I give?', answer: 'Standard is two weeks in most US industries. Check your employment contract—some roles require more notice (executives, specialized positions). Some industries have different norms. In some countries, longer notice is legally required. When in doubt, give at least two weeks unless your contract specifies otherwise. Giving generous notice (3-4 weeks) for complex roles demonstrates professionalism.' },
      { question: 'Should I explain why I\'m leaving?', answer: 'You\'re not obligated to explain. If you include a reason, keep it positive and brief: "pursuing a new opportunity," "relocating for family reasons," "returning to school." Never include negative reasons even if true—this letter becomes permanent documentation. If you need to discuss problems, do so separately with HR, not in your resignation letter.' },
      { question: 'Can I resign via email or do I need a formal letter?', answer: 'Check your company\'s protocol. Many modern workplaces accept email resignations, but formal letters remain standard in traditional industries. When in doubt, prepare a formal letter but deliver it in whatever method your workplace uses. For remote employees, email with a PDF attachment often works. Always keep a copy for your records.' },
      { question: 'How do I resign professionally when I\'m unhappy?', answer: 'Maintain professionalism regardless of your feelings. Your resignation letter is permanent documentation that could affect references. Keep the letter neutral or positive—focus on looking forward, not backward. If you have grievances, address them through proper HR channels separately, not in your resignation letter. Your future self will thank you for taking the high road.' },
      { question: 'Should I offer to help with transition?', answer: 'Generally yes—offering transition support is professional courtesy that maintains good relationships. Standard offer: "I\'m committed to ensuring a smooth transition and am happy to assist with training my replacement." Follow through on whatever you offer. If you\'re leaving a difficult situation, keep the offer brief but don\'t skip it entirely.' },
      { question: 'What if I have a difficult relationship with my manager?', answer: 'Address the letter professionally regardless of personal dynamics. You can address it to HR or a higher-level manager if more appropriate, but don\'t use the letter to communicate grievances. Keep the letter factual and professional. Handle difficult dynamics through other channels or simply move forward without addressing them.' },
      { question: 'Should I mention my new employer?', answer: 'Generally no. Your resignation letter doesn\'t need to include where you\'re going. If asked in person, you can share if you\'re comfortable, but there\'s no obligation. Avoiding mention of your new employer keeps the focus on professional departure and prevents potential issues if you\'re moving to a competitor.' },
      { question: 'How formal should the tone be?', answer: 'Match your workplace culture while erring toward professional. Traditional corporate environments warrant formal letters. Startups or casual workplaces might accept warmer, more personal tone. When in doubt, go more formal—no one was ever hurt by a resignation letter that was too professional. Save casual communication for in-person conversations.' },
      { question: 'What happens after I submit my resignation?', answer: 'Expect: acknowledgment from your manager or HR, discussion about transition timeline, possible exit interview scheduling, arrangements for final paycheck and benefits. Be prepared for various reactions—some managers take resignations personally. Remain professional regardless of response. Focus on completing your remaining time well and leaving thorough documentation for your successor.' },
    ],
  },

  'hook-generator': {
    slug: 'hook-generator',
    name: 'Hook Generator',
    title: 'Free AI Hook Generator',
    description: 'Create attention-grabbing hooks for your content instantly. Our AI generates compelling opening lines that capture readers and boost engagement.',
    metaDescription: 'Create attention-grabbing hooks for your content instantly. Our AI generates compelling opening lines that capture readers and boost engagement.',
    inputLabel: 'Describe your content topic...',
    inputPlaceholder: 'e.g. A blog post about productivity tips for remote workers',
    buttonText: 'Generate Hooks',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Hook tone',
        choices: ['Formal', 'Conversational', 'Bold/Edgy', 'Inspiring', 'Analytical'],
        default: 'Conversational',
        type: 'select',
      },
      {
        name: 'hook_type',
        label: 'Hook type',
        choices: ['Mixed (All Types)', 'Question', 'Statistic/Fact', 'Story/Anecdote', 'Contrarian', 'Promise/Benefit', 'Curiosity Gap'],
        default: 'Mixed (All Types)',
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

## HOOK GENERATION PROCESS

1. **Analyze AI Input Context**
   - Identify the core topic and theme
   - Understand the target audience
   - Recognize the content format (article, speech, video, etc.)
   - Note any specific goals or constraints

2. **Select Appropriate Hook Types**
   - Match hook style to content purpose
   - Consider audience expectations
   - Align with tone requirements

3. **Craft Multiple Variations**
   - Generate hooks across different types
   - Vary length and complexity
   - Test different emotional appeals

4. **Apply Quality Filters**
   - **Relevance Test**: Does it connect to the main content?
   - **Intrigue Test**: Does it create genuine curiosity?
   - **Promise Test**: Does it set appropriate expectations?
   - **Authenticity Test**: Does it avoid clickbait manipulation?
   - **Length Test**: Is it concise enough to maintain impact?

## TONE ADAPTATION

### IF tone = "Formal"
- Professional language, authoritative statements, industry-appropriate vocabulary

### IF tone = "Conversational"
- Friendly tone, relatable language, direct address

### IF tone = "Bold/Edgy"
- Strong statements, challenging assertions, pattern interrupts

### IF tone = "Inspiring"
- Aspirational language, possibility-focused, emotionally uplifting

### IF tone = "Analytical"
- Data-driven, logical, evidence-based openings

Tone: {{tone}}
Hook Type: {{hook_type}}

## OUTPUT FORMAT

For each hook generated, provide:
- The hook text
- Hook type category
- Suggested use case or content type
- Brief explanation of why it works

## QUALITY PRINCIPLES

- Hooks should be specific, not generic
- Create genuine intrigue without manipulation
- Set up expectations the content can deliver
- Match the sophistication level of the audience
- Maintain integrity while maximizing engagement`,
    useCases: [
      {
        title: 'Writing engaging introductions',
        description: 'Writers, journalists, and content creators use the Hook Generator to craft captivating opening lines for articles, blog posts, and other written content. By inputting the topic or key ideas, the tool generates compelling hooks that immediately capture reader interest and encourage them to continue reading. This helps create impactful introductions that set the right tone and promise value.',
      },
      {
        title: 'Marketing and advertisement copy',
        description: 'Businesses and marketers leverage the Hook Generator to create persuasive opening lines for marketing campaigns, advertisements, and promotional content. By inputting product details, target audience information, or marketing messages, the tool generates attention-grabbing hooks that effectively engage potential customers and encourage action.',
      },
      {
        title: 'Speeches and presentations',
        description: 'Public speakers, presenters, and educators benefit from the Hook Generator when preparing speeches or presentations. By inputting the topic or main ideas, the tool generates attention-grabbing opening statements that engage audiences from the first moment. This helps establish strong connections with listeners and makes presentations more impactful and memorable.',
      },
    ],
    faqs: [
      { question: 'What is a hook in writing?', answer: 'A hook is an opening statement designed to capture the reader\'s attention immediately. Effective hooks create curiosity, make a bold statement, ask a provocative question, or present surprising information that compels the audience to continue reading, watching, or listening.' },
      { question: 'What types of hooks can this tool generate?', answer: 'The tool generates various hook types including question hooks, statistic/fact hooks, story/anecdote hooks, contrarian statement hooks, promise/benefit hooks, curiosity gap hooks, and empathy/pain point hooks. Each type serves different purposes and audiences.' },
      { question: 'How do I get better hook suggestions?', answer: 'Provide specific context about your topic, target audience, and content purpose. Instead of "marketing tips," try "email marketing strategies for e-commerce businesses targeting millennials." More context helps generate more relevant, impactful hooks.' },
      { question: 'Can I use these hooks for video content?', answer: 'Absolutely. Hooks are essential for video scripts, YouTube intros, TikTok openings, and any video content where you need to capture attention quickly. The same principles apply—just adapt the language for spoken delivery.' },
      { question: 'How long should a hook be?', answer: 'Most effective hooks are one to three sentences. They should be long enough to create intrigue but short enough to maintain impact. For social media or video, shorter hooks (under 15 words) often perform better.' },
      { question: 'What makes a hook different from clickbait?', answer: 'A good hook creates genuine curiosity and delivers on its promise, while clickbait manipulates emotions and often disappoints. Effective hooks set appropriate expectations that the content fulfills, building trust rather than eroding it.' },
      { question: 'Should my hook match my brand voice?', answer: 'Yes. Your hook should align with your overall brand tone and the expectations of your audience. A formal business audience expects different language than a casual lifestyle blog audience. Use the tone settings to match your brand.' },
      { question: 'Can I use the same hook for different platforms?', answer: 'You may need to adapt hooks for different platforms. A hook that works for a long-form blog post might need to be shorter and punchier for social media. Consider platform-specific conventions and audience expectations.' },
      { question: 'How do I test which hook works best?', answer: 'A/B testing is the most reliable method. Use different hooks in email subject lines, social posts, or ad copy and track open rates, click-through rates, and engagement metrics to identify top performers.' },
      { question: 'What should come after the hook?', answer: 'The hook should transition smoothly into your main content. Follow it with context that fulfills the curiosity you created, provides supporting information, or begins delivering on the promise your hook made.' },
    ],
  },

  'social-media-bio-generator': {
    slug: 'social-media-bio-generator',
    name: 'Social Media Bio Generator',
    title: 'Free AI Social Media Bio Generator',
    description: 'Generate the perfect bio for your social media profiles instantly. Our AI creates engaging, professional bios that capture your personal brand and attract followers.',
    metaDescription: 'Generate the perfect bio for your social media profiles instantly. Our AI creates engaging, professional bios that capture your personal brand and attract followers.',
    inputLabel: 'Describe yourself or your brand...',
    inputPlaceholder: 'e.g. Digital marketing consultant helping small businesses grow online, based in NYC',
    buttonText: 'Generate Bio',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Platform',
        choices: ['Instagram', 'Twitter/X', 'LinkedIn', 'TikTok', 'General (All Platforms)'],
        default: 'General (All Platforms)',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Bio tone',
        choices: ['Professional', 'Friendly', 'Bold', 'Witty', 'Minimal'],
        default: 'Professional',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media strategist and personal branding consultant specializing in crafting compelling bios that make strong first impressions. Your role is to create concise, engaging profile descriptions that effectively communicate identity, value, and personality across social media platforms.

## BIO TYPES AND APPROACHES

### 1. Professional/Career-Focused
- Job title and company
- Key skills or expertise areas
- Professional achievements or credentials
- Industry authority markers
- Example: "Marketing Director @TechCorp | Helping B2B brands grow through content | Speaker | Forbes contributor"

### 2. Personal Brand/Influencer
- Content niche and focus
- Value proposition to followers
- Personality descriptors
- Call-to-action or mission
- Example: "Making finance fun & accessible 💰 | Helped 50K+ people start investing | Free guide in link"

### 3. Creative/Artistic
- Creative medium and style
- Accomplishments or recognition
- Artistic philosophy
- Collaboration openings
- Example: "Abstract artist exploring color & emotion | Gallery rep: @ArtHouse | Commissions open ✨"

### 4. Entrepreneur/Business
- Business or brand name
- Problem solved or value delivered
- Social proof or achievements
- Contact or action prompt
- Example: "Founder @EcoPackCo | Sustainable packaging solutions | Serving 200+ brands | Let's collaborate"

### 5. Casual/Personal
- Interests and hobbies
- Personality traits
- Location or lifestyle
- Relatable elements
- Example: "Coffee enthusiast ☕ | Dog mom | SF-based | Documenting life's little adventures"

## BIO ELEMENTS TO INCLUDE

1. **Identity Statement**: Who you are or what you do
2. **Value Proposition**: What you offer or contribute
3. **Credibility Markers**: Achievements, credentials, social proof
4. **Personality Touches**: Emojis, humor, unique phrases
5. **Call-to-Action**: What you want visitors to do next

## PLATFORM-SPECIFIC CONSIDERATIONS

### Instagram
- 150 characters max
- Emojis welcomed
- Line breaks for readability

### Twitter/X
- 160 characters max
- Concise and punchy

### LinkedIn
- 220 characters in header
- Professional tone

### TikTok
- 80 characters max
- Casual and trendy

## TONE OPTIONS

### IF tone = "Professional"
- Corporate language, achievement-focused, industry terms

### IF tone = "Friendly"
- Approachable, warm, conversational

### IF tone = "Bold"
- Confident statements, strong personality

### IF tone = "Witty"
- Clever wordplay, humor, memorable phrases

### IF tone = "Minimal"
- Clean, sparse, impactful simplicity

Platform: {{platform}}
Tone: {{tone}}

## QUALITY GUIDELINES

- Be specific, not generic
- Lead with unique differentiators
- Make every character count
- Create clear hierarchy of information
- Balance professionalism with personality`,
    useCases: [
      {
        title: 'Personal branding',
        description: 'Individuals looking to build a strong personal brand can use the Bio Generator to create compelling profile descriptions that effectively represent their identity, expertise, and unique qualities. By inputting relevant information about themselves, their interests, and achievements, the tool generates well-crafted bios that make strong first impressions and attract the right followers.',
      },
      {
        title: 'Influencer marketing',
        description: 'Influencers and content creators leverage the Bio Generator to create engaging bios that highlight their niche expertise and attract potential brand collaborations. By inputting their content focus, key achievements, and audience demographics, the tool generates professional bios that establish credibility and appeal to brands seeking partnerships.',
      },
      {
        title: 'Business promotion',
        description: 'Small businesses, startups, and entrepreneurs use the Bio Generator to create concise, impactful bios that effectively communicate their value proposition. By inputting business information, unique selling points, and contact details, the tool generates professional bios that establish online presence and attract potential customers or clients.',
      },
    ],
    faqs: [
      { question: 'What should I include in a social media bio?', answer: 'A strong bio typically includes: who you are or what you do, your value proposition or expertise, credibility markers like achievements or credentials, a touch of personality, and a call-to-action. The specific mix depends on your platform and goals.' },
      { question: 'How long should my bio be?', answer: 'Length depends on the platform. Instagram allows 150 characters, Twitter 160, LinkedIn header 220. Focus on making every word count rather than filling all available space. Concise bios are often more impactful.' },
      { question: 'Should I use emojis in my bio?', answer: 'Emojis can add personality and visual breaks that improve readability, especially on Instagram and TikTok. Use them strategically and ensure they align with your brand. Professional LinkedIn bios typically use fewer or no emojis.' },
      { question: 'How often should I update my bio?', answer: 'Update your bio when your role, focus, or achievements change significantly. Many professionals update quarterly. Also consider seasonal updates for promotions, launches, or trending topics relevant to your niche.' },
      { question: 'Should my bio be the same across all platforms?', answer: 'Your core message can remain consistent, but adapt format and tone for each platform. LinkedIn bios should be more professional than TikTok bios. Adjust character length and emoji usage to match platform culture.' },
      { question: 'How do I make my bio stand out?', answer: 'Lead with your unique differentiator, use specific achievements instead of generic claims, inject personality through word choice or humor, and make your value proposition immediately clear. Avoid clichés and overused phrases.' },
      { question: 'Should I include keywords in my bio?', answer: 'Yes, include relevant keywords that help people find you. Use terms your target audience searches for, but write naturally—don\'t just list keywords. Strategic keyword use improves discoverability.' },
      { question: 'Can I use hashtags in my bio?', answer: 'Hashtags in bios can categorize your content and improve discoverability on some platforms. Use 1-3 relevant hashtags maximum. They work better on Instagram and Twitter than on LinkedIn.' },
      { question: 'How do I write a bio for a business account vs. personal account?', answer: 'Business bios should focus on value delivered, products/services, and credibility. Personal bios can include more personality, interests, and individual achievements. Business bios often include contact info or calls-to-action.' },
      { question: 'What mistakes should I avoid in my bio?', answer: 'Avoid: being too vague or generic, using overused phrases like "guru" or "ninja," making your bio too long or dense, forgetting to include a call-to-action, and using jargon your audience won\'t understand.' },
    ],
  },

  'instagram-bio-generator': {
    slug: 'instagram-bio-generator',
    name: 'Instagram Bio Generator',
    title: 'Free AI Instagram Bio Generator',
    description: 'Create the perfect Instagram bio in seconds. Our AI generates engaging, personality-filled bios that attract followers and showcase your personal brand.',
    metaDescription: 'Create the perfect Instagram bio in seconds. Our AI generates engaging, personality-filled bios that attract followers and showcase your personal brand.',
    inputLabel: 'Describe yourself or your brand...',
    inputPlaceholder: 'e.g. Fitness coach helping busy professionals get in shape, based in LA',
    buttonText: 'Generate Bio',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Bio tone',
        choices: ['Professional Casual', 'Fun and Trendy', 'Aesthetic Minimal', 'Bold and Direct', 'Warm and Inviting'],
        default: 'Professional Casual',
        type: 'select',
      },
      {
        name: 'include_emojis',
        label: 'Include emojis',
        choices: ['Yes', 'No'],
        default: 'Yes',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert Instagram strategist and personal branding consultant specializing in crafting bios optimized for the Instagram platform. Your role is to create compelling 150-character bios that maximize impact within Instagram's unique ecosystem.

## INSTAGRAM BIO STRUCTURE

The Instagram bio has a strict 150-character limit and appears with:
- Profile picture
- Name field (separate, 30 characters)
- Category label (if business account)
- Bio text (150 characters max)
- External link

## EFFECTIVE INSTAGRAM BIO ELEMENTS

### 1. Identity Line
- Job title, role, or niche
- What you do or create
- Your defining characteristic

### 2. Value Statement
- What followers get from you
- Your content promise
- The transformation you offer

### 3. Credibility Marker
- Key achievement or number
- Press mentions or features
- Client results or testimonials

### 4. Personality Touch
- Relatable detail
- Humor or wordplay
- Unique phrase or tagline

### 5. Call-to-Action
- Link reference
- DM prompt
- Specific next step

## BIO FORMATS FOR INSTAGRAM

**Format 1: List Style (with line breaks)**
🎯 What you do
📍 Location or credential
💡 Value proposition
👇 CTA for link

**Format 2: Single Sentence Flow**
"[Role] helping [audience] achieve [result] | [Credential] | [CTA]"

**Format 3: Personality-Forward**
"[Personality trait] | [What you do] | [Fun fact] | [CTA]"

**Format 4: Metric-Driven**
"[Achievement with number] | [What you do] | [Social proof] | [CTA]"

## INSTAGRAM-SPECIFIC BEST PRACTICES

- Use line breaks strategically for readability
- Place most important info first (visible without expanding)
- Include relevant emojis as visual markers
- Make CTA clear for link clicks
- Consider how bio looks with grid preview

## NICHE-SPECIFIC APPROACHES

**Creators/Influencers:**
- Lead with content niche
- Highlight follower benefit
- Include posting schedule
- Reference link-in-bio content

**Businesses:**
- Clear product/service statement
- Location if relevant
- Hours or availability
- Shop or booking CTA

**Personal Brands:**
- Professional role + personality
- Speaking/media credentials
- Newsletter or lead magnet reference
- Personal touch

**Artists/Creatives:**
- Medium and style
- Gallery or representation
- Commission availability
- Portfolio reference

## TONE ADAPTATION FOR INSTAGRAM

### IF tone = "Professional Casual"
- Polished but approachable

### IF tone = "Fun and Trendy"
- Gen-Z language, current references

### IF tone = "Aesthetic Minimal"
- Clean, sparse, artsy

### IF tone = "Bold and Direct"
- Confident, statement-making

### IF tone = "Warm and Inviting"
- Friendly, community-focused

Tone: {{tone}}
Include Emojis: {{include_emojis}}

## OUTPUT FORMAT

Generate bios that:
- Fit within 150 characters
- Use strategic emoji placement (if requested)
- Include line breaks where beneficial
- Provide clear value proposition
- Match the user's desired tone`,
    useCases: [
      {
        title: 'Personal branding optimization',
        description: 'Individuals building their personal brand on Instagram use the Bio Generator to create bios that effectively represent their expertise, personality, and unique value. By inputting relevant information about their niche, achievements, and goals, the tool generates creative bios that help them stand out in a crowded platform and attract their ideal followers.',
      },
      {
        title: 'Business profile enhancement',
        description: 'Businesses and brands use the Instagram Bio Generator to craft concise, impactful bios that clearly communicate their value proposition within Instagram\'s 150-character limit. By inputting core services, unique selling points, and target audience details, the tool generates professional bios that drive profile visits to conversions.',
      },
      {
        title: 'Content creator support',
        description: 'Content creators, YouTubers, podcasters, and bloggers leverage the Bio Generator to create bios that not only showcase their content niche but also encourage followers to engage with their call-to-action. The tool helps craft bios that highlight content focus, posting schedule, and link-in-bio offerings.',
      },
    ],
    faqs: [
      { question: 'What is the character limit for Instagram bios?', answer: 'Instagram bios have a maximum of 150 characters. This includes spaces, emojis, and line breaks. The name field is separate and allows 30 additional characters.' },
      { question: 'How should I structure my Instagram bio?', answer: 'Use a clear hierarchy: lead with who you are or what you do, add your value proposition or unique angle, include a credibility marker if space allows, and end with a call-to-action directing people to your link.' },
      { question: 'How many emojis should I use?', answer: 'Use 2-5 emojis strategically as visual markers or line starters. Too many can look cluttered. Choose emojis that represent your niche or personality and help break up text for easier scanning.' },
      { question: 'Should I use line breaks in my Instagram bio?', answer: 'Yes, line breaks improve readability and allow you to organize information clearly. Use them to separate different elements like your role, value proposition, and CTA.' },
      { question: 'How do I add line breaks to my Instagram bio?', answer: 'You can add line breaks by typing your bio in a notes app with proper formatting, then copying and pasting it into Instagram. Alternatively, use invisible characters or bio formatting tools.' },
      { question: 'Should I include hashtags in my Instagram bio?', answer: 'One or two highly relevant hashtags can help categorization, but they\'re not clickable in bios. Branded hashtags work well if you want followers to use them. Generally, hashtags are less critical in bios than in posts.' },
      { question: 'What\'s the best call-to-action for an Instagram bio?', answer: 'Effective CTAs include: "Link below 👇", "Shop now", "DM for collabs", "Free guide in link", or "New video every Tuesday". Make it specific to what you want visitors to do.' },
      { question: 'How do I write a bio that converts followers?', answer: 'Focus on benefits over features. Instead of "I\'m a fitness coach," try "Helping busy moms lose 20lbs in 90 days." Address your target audience\'s desires or pain points directly.' },
      { question: 'Should my Instagram bio match my other social media bios?', answer: 'Your core message and brand should be consistent, but adapt the format for Instagram\'s character limit and visual culture. Instagram audiences expect more personality and emojis than LinkedIn, for example.' },
      { question: 'How often should I update my Instagram bio?', answer: 'Update when your focus, offerings, or achievements change. Many creators update monthly or seasonally to highlight current projects, promotions, or content themes.' },
    ],
  },

  'social-media-caption-generator': {
    slug: 'social-media-caption-generator',
    name: 'Social Media Caption Generator',
    title: 'Free AI Social Media Caption Generator',
    description: 'Generate engaging social media captions that drive likes, comments, and shares. Our AI creates compelling post copy for Instagram, Facebook, Twitter, and more.',
    metaDescription: 'Generate engaging social media captions that drive likes, comments, and shares. Our AI creates compelling post copy for Instagram, Facebook, Twitter, and more.',
    inputLabel: 'Describe your post content...',
    inputPlaceholder: 'e.g. Photo of my new product launch - sustainable water bottles for outdoor enthusiasts',
    buttonText: 'Generate Caption',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Platform',
        choices: ['Instagram', 'Facebook', 'Twitter/X', 'LinkedIn', 'TikTok', 'General'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Caption tone',
        choices: ['Professional', 'Casual', 'Humorous', 'Inspirational', 'Edgy'],
        default: 'Casual',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media content strategist specializing in creating engaging captions that drive engagement across multiple platforms. Your role is to craft compelling post copy that resonates with audiences and prompts interaction.

## CAPTION TYPES AND PURPOSES

### 1. Educational/Value-Driven
- Share tips, tricks, or insights
- Teach something useful
- Position as an authority
- Example: "3 things I wish I knew before starting my business..."

### 2. Storytelling/Personal
- Share experiences and journeys
- Create emotional connections
- Build authenticity and trust
- Example: "Last year, I almost gave up. Here's what changed everything..."

### 3. Engagement/Interactive
- Ask questions
- Request opinions
- Create polls or debates
- Example: "Hot take: Morning routines are overrated. Agree or disagree? 👇"

### 4. Promotional/Sales
- Highlight products/services
- Drive conversions
- Create urgency
- Example: "This sold out in 24 hours last time. Restock is LIVE. Link in bio 🔗"

### 5. Inspirational/Motivational
- Uplift and encourage
- Share quotes or mantras
- Create shareable content
- Example: "Reminder: Your pace is not a limitation. It's your path."

### 6. Behind-the-Scenes
- Show process and work
- Humanize the brand
- Build curiosity
- Example: "Currently in the studio creating something you've been asking for... 👀"

### 7. Trend/Cultural
- Participate in conversations
- React to current events
- Show relevance
- Example: "If [trending topic] was a [your niche]..."

## CAPTION STRUCTURE ELEMENTS

### 1. Hook (First 125 characters visible before "more")
- Attention-grabbing opening
- Creates curiosity or emotion
- Stops the scroll

### 2. Body
- Delivers value or story
- Maintains engagement
- Supports the hook promise

### 3. Call-to-Action (CTA)
- Prompts specific action
- Drives engagement metrics
- Clear and direct

### 4. Hashtags (optional, platform-dependent)
- Relevant to content
- Mix of sizes (broad and niche)
- Strategic placement

## PLATFORM-SPECIFIC ADAPTATIONS

### Instagram
- Up to 2,200 characters
- First 125 characters visible
- Hashtags in caption or comments
- Emojis enhance engagement

### Facebook
- Similar length flexibility
- Less emoji-heavy
- More complete sentences
- Link sharing common

### Twitter/X
- 280 characters max
- Concise and punchy
- Thread option for longer content
- Hashtags more limited

### LinkedIn
- Professional tone
- First 140 characters visible
- More text-heavy content accepted
- Hashtags at end (3-5 max)

### TikTok
- 150 characters max
- Casual and trendy
- Hashtag-heavy for discovery
- Short and punchy

## TONE VARIATIONS

### IF tone = "Professional"
- Industry language, thoughtful, polished

### IF tone = "Casual"
- Conversational, relatable, friendly

### IF tone = "Humorous"
- Witty, playful, entertaining

### IF tone = "Inspirational"
- Uplifting, encouraging, motivational

### IF tone = "Edgy"
- Bold, provocative, attention-grabbing

Platform: {{platform}}
Tone: {{tone}}

## ENGAGEMENT TACTICS

- Ask questions to prompt comments
- Use "save this" for valuable content
- Request shares for relatable content
- Tag others when relevant
- Create FOMO with limited offers
- Use controversy (carefully) for debate`,
    useCases: [
      {
        title: 'Efficient social media content creation',
        description: 'Social media managers and content creators use the Caption Generator to streamline their content creation process. By inputting relevant keywords or describing their content, the tool generates engaging captions quickly, saving time while maintaining quality and ensuring consistent posting schedules across platforms.',
      },
      {
        title: 'Optimizing ad campaign copy',
        description: 'Businesses running social media advertising campaigns use the Caption Generator to create compelling ad copy variations. By inputting product details, target audience information, and campaign goals, the tool generates persuasive captions that drive clicks and conversions, improving advertising ROI.',
      },
      {
        title: 'Enhancing brand engagement',
        description: 'Brands looking to boost engagement use the Caption Generator to create content aligned with trending topics, current events, and audience interests. The tool helps maintain fresh, relevant content that encourages interaction, builds community, and strengthens brand presence.',
      },
    ],
    faqs: [
      { question: 'What makes a caption effective?', answer: 'Effective captions have a strong hook that stops scrolling, deliver value or emotion in the body, and include a clear call-to-action. They\'re written for the specific audience and platform, with appropriate tone and length.' },
      { question: 'How long should social media captions be?', answer: 'Length depends on platform and purpose. Instagram allows up to 2,200 characters but shorter often performs better. Twitter is limited to 280 characters. LinkedIn posts can be longer. Test different lengths with your audience.' },
      { question: 'Should I use emojis in my captions?', answer: 'Emojis can increase engagement by adding visual interest and personality. Use them to break up text, emphasize points, or add emotion. The appropriate amount depends on your brand voice and platform.' },
      { question: 'How many hashtags should I include?', answer: 'Instagram: 3-10 relevant hashtags. Twitter: 1-2 maximum. LinkedIn: 3-5 at the end. TikTok: 3-5 trending and niche hashtags. Quality and relevance matter more than quantity.' },
      { question: 'What\'s the best call-to-action for captions?', answer: 'Match your CTA to your goal: "Comment below" for engagement, "Save this" for valuable content, "Link in bio" for conversions, "Share with someone who..." for reach, or "What do you think?" for discussion.' },
      { question: 'How do I write captions that get more comments?', answer: 'Ask specific questions, share opinions and invite debate, use "this or that" prompts, tell incomplete stories that prompt curiosity, or ask for recommendations and advice from your audience.' },
      { question: 'Should captions be written differently for each platform?', answer: 'Yes. Each platform has different character limits, audience expectations, and best practices. A LinkedIn post should be more professional than an Instagram caption talking about the same topic.' },
      { question: 'How do I maintain brand voice in captions?', answer: 'Create caption templates and guidelines, use consistent vocabulary and phrases, maintain similar emoji and formatting styles, and ensure tone matches your brand personality across all posts.' },
      { question: 'What\'s the most important part of a caption?', answer: 'The first line (hook) is most important because it\'s what users see before clicking "more." Make it compelling enough to earn the click and stop the scroll.' },
      { question: 'How often should I post with new captions?', answer: 'Posting frequency depends on your platform and capacity to create quality content. Consistency matters more than frequency. Focus on quality captions rather than high volume of mediocre ones.' },
    ],
  },

  'instagram-caption-generator': {
    slug: 'instagram-caption-generator',
    name: 'Instagram Caption Generator',
    title: 'Free AI Instagram Caption Generator',
    description: 'Create scroll-stopping Instagram captions instantly. Our AI generates engaging captions for Reels, carousels, and feed posts that boost likes, comments, and saves.',
    metaDescription: 'Create scroll-stopping Instagram captions instantly. Our AI generates engaging captions for Reels, carousels, and feed posts that boost likes, comments, and saves.',
    inputLabel: 'Describe your post or image...',
    inputPlaceholder: 'e.g. Carousel post with 5 tips for better sleep habits',
    buttonText: 'Generate Caption',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: 'Content type',
        choices: ['Feed Post', 'Reels', 'Carousel', 'Story'],
        default: 'Feed Post',
        type: 'select',
      },
      {
        name: 'tone',
        label: 'Caption tone',
        choices: ['Authentic', 'Playful', 'Professional', 'Trendy', 'Inspirational'],
        default: 'Authentic',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram content strategist specializing in creating captions optimized for the Instagram platform. Your role is to craft engaging post copy that maximizes engagement within Instagram's unique ecosystem, considering visual content context.

## INSTAGRAM CAPTION OPTIMIZATION

Instagram captions have a 2,200 character limit, but:
- Only first ~125 characters show before "more"
- Visual content is primary; caption supports it
- Engagement (likes, comments, saves, shares) affects reach
- Caption length can vary based on content type

## CAPTION STRUCTURES FOR INSTAGRAM

### Micro-Caption (< 150 characters)
Best for: Strong visuals, quotes, simple announcements
- Let the image speak
- Add quick context or emotion
- Single line or short statement

### Medium Caption (150-500 characters)
Best for: Most feed posts, product features, tips
- Hook + core message + CTA
- 2-3 short paragraphs
- Room for personality

### Long-Form Caption (500-2,200 characters)
Best for: Storytelling, educational content, carousel posts
- Compelling hook
- Full narrative or detailed information
- Multiple CTAs or engagement prompts

## INSTAGRAM-SPECIFIC ELEMENTS

### 1. Hook (First Line)
- Must be compelling—visible before "more"
- Create curiosity or emotion
- Use pattern interrupts

### 2. Body Content
- Support or expand on visual
- Share story, tips, or value
- Use line breaks for readability

### 3. Engagement Elements
- Questions to prompt comments
- "Save this" for valuable content
- Tag prompts for sharing

### 4. Hashtags Strategy
- 3-10 relevant hashtags
- Mix of sizes (broad + niche)
- In caption or first comment

## CONTENT TYPE ADAPTATIONS

### Reels Captions
- Shorter, punchier
- Reference the video content
- Trending audio mentions
- Entertainment-focused

### Carousel Captions
- Can be longer for educational content
- Reference the slides
- "Swipe" CTAs
- Save-worthy hooks

### Feed Photos
- Balance with visual
- Story or context
- Personality-forward

### Stories (context)
- Very brief text
- Sticker interactions
- Link prompts

## TONE OPTIONS FOR INSTAGRAM

### IF tone = "Authentic"
- Real, vulnerable, personal

### IF tone = "Playful"
- Fun, lighthearted, emoji-filled

### IF tone = "Professional"
- Polished, brand-aligned, clean

### IF tone = "Trendy"
- Current slang, meme references, casual

### IF tone = "Inspirational"
- Uplifting, quote-worthy, shareable

Content Type: {{content_type}}
Tone: {{tone}}

## ENGAGEMENT OPTIMIZATION

- Ask questions in first 2 comments
- Use carousel "save" prompts
- Create "tag a friend" moments
- Include value worth saving
- Time-sensitive elements for urgency

## OUTPUT FORMAT

Generate captions with:
- Strong hook (first 125 chars)
- Body with appropriate length
- Clear CTA
- Optional hashtag suggestions
- Emoji placement as appropriate`,
    useCases: [
      {
        title: 'Efficient content creation',
        description: 'Content creators and social media managers use the Instagram Caption Generator to streamline their posting workflow. By providing image descriptions or content themes, the tool generates engaging captions that match Instagram\'s best practices, saving hours of writing time while maintaining quality.',
      },
      {
        title: 'Audience engagement and interaction',
        description: 'Users leverage the Caption Generator to create captions that prompt meaningful engagement. By incorporating call-to-action phrases, thought-provoking questions, and interactive elements, the generated captions encourage followers to like, comment, and share posts, building stronger community connections.',
      },
      {
        title: 'Brand promotion and storytelling',
        description: 'Businesses and brands use the Caption Generator to craft compelling narratives that align with brand identity and communicate key messages. By inputting brand values, campaign details, or product features, the tool generates captions that showcase personality, tell stories, and strengthen brand presence on Instagram.',
      },
    ],
    faqs: [
      { question: 'How long should Instagram captions be?', answer: 'Length depends on content type. Reels often work with short captions (under 150 characters), while educational carousels can use longer captions (500-2,200 characters). Test what works for your audience.' },
      { question: 'What should I put in the first line of my caption?', answer: 'The first line is crucial because only ~125 characters show before users tap "more." Use a hook that creates curiosity, states a bold opinion, asks a question, or promises value to encourage people to read the full caption.' },
      { question: 'How do I write captions for Reels vs. feed posts?', answer: 'Reels captions should be shorter, punchier, and reference the video content. They can include trending hashtags and audio mentions. Feed post captions can be longer and more story-driven since users spend more time with static images.' },
      { question: 'Should I put hashtags in the caption or comments?', answer: 'Both approaches work. Hashtags in captions keep everything together, while hashtags in comments keep captions cleaner. Instagram\'s algorithm treats both similarly. Test what feels right for your brand aesthetic.' },
      { question: 'How can I get more people to comment on my posts?', answer: 'Ask specific questions (not just "thoughts?"), create "this or that" debates, share opinions and invite disagreement, use fill-in-the-blank prompts, or ask for recommendations. Make commenting easy and rewarding.' },
      { question: 'How do I write captions that encourage saves?', answer: 'Create valuable, reference-worthy content—tips, tutorials, checklists, quotes, or information people will want to return to. Use "save this for later" prompts and design content specifically for saving.' },
      { question: 'Should I use emojis in Instagram captions?', answer: 'Yes, emojis increase engagement on Instagram. Use them to add personality, break up text, draw attention to CTAs, or replace words. The amount depends on your brand voice—1-3 minimum, more for casual brands.' },
      { question: 'How do I caption a carousel post?', answer: 'Introduce the topic with a hook, mention that it\'s a carousel ("swipe for..." or "5 tips in this post"), tease the value inside, and end with a save CTA since carousel posts are designed to be saved and referenced.' },
      { question: 'What\'s the best call-to-action for Instagram captions?', answer: 'Match CTA to your goal: "Link in bio" for clicks, "Save this" for valuable content, "Tag someone who..." for reach, "Comment [emoji] if..." for engagement, or "Double tap if you agree" for likes.' },
      { question: 'How do I match my caption to my image?', answer: 'The caption should complement, not repeat, what the image shows. Add context the image can\'t convey, tell the story behind the photo, share your thoughts or feelings, or provide useful information related to the visual.' },
    ],
  },

  'social-media-hashtag-generator': {
    slug: 'social-media-hashtag-generator',
    name: 'Social Media Hashtag Generator',
    title: 'Free AI Social Media Hashtag Generator',
    description: 'Generate effective hashtags that boost your reach and engagement. Our AI creates strategic hashtag sets for Instagram, TikTok, Twitter, and more.',
    metaDescription: 'Generate effective hashtags that boost your reach and engagement. Our AI creates strategic hashtag sets for Instagram, TikTok, Twitter, and more.',
    inputLabel: 'Describe your content or niche...',
    inputPlaceholder: 'e.g. Vegan meal prep recipes for busy professionals',
    buttonText: 'Generate Hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'platform',
        label: 'Platform',
        choices: ['Instagram', 'TikTok', 'Twitter/X', 'LinkedIn', 'General'],
        default: 'Instagram',
        type: 'select',
      },
      {
        name: 'hashtag_count',
        label: 'Number of hashtags',
        choices: ['5 hashtags', '10 hashtags', '15 hashtags', '20 hashtags', '30 hashtags'],
        default: '10 hashtags',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert social media strategist specializing in hashtag research and strategy. Your role is to generate relevant, effective hashtags that increase content discoverability and engagement across social media platforms.

## HASHTAG CATEGORIES

### 1. Industry/Niche Hashtags
- Specific to your field or topic
- Used by target audience
- Medium competition
- Example: #DigitalMarketingTips, #PlantBasedRecipes

### 2. Branded Hashtags
- Unique to your brand
- Campaign-specific tags
- Community building
- Example: #NikeRunClub, #ShareACoke

### 3. Community Hashtags
- Connect like-minded people
- Group identifiers
- Lifestyle markers
- Example: #MomsWhoLift, #RemoteWorkers

### 4. Location Hashtags
- Geographic targeting
- Local discovery
- Event-based
- Example: #NYCFoodie, #LondonLife

### 5. Trending/Viral Hashtags
- Currently popular
- Time-sensitive
- High visibility but high competition
- Example: #TikTokMadeMeBuyIt, current events

### 6. Content Descriptor Hashtags
- Describe post type
- Content format
- Style indicators
- Example: #Tutorial, #OOTD, #TransformationTuesday

## HASHTAG SIZE STRATEGY

### Large/Popular (1M+ posts)
- High visibility, high competition
- Use 1-2 per post
- Helps with broad discovery

### Medium (100K-1M posts)
- Good balance of reach and competition
- Use 3-5 per post
- Core of most hashtag strategies

### Small/Niche (10K-100K posts)
- Lower competition, targeted reach
- Use 2-4 per post
- Higher engagement potential

### Micro/Emerging (<10K posts)
- Very targeted
- Community-specific
- Use 1-2 per post

## PLATFORM-SPECIFIC STRATEGIES

### Instagram
- Optimal: 5-10 hashtags
- Maximum: 30 hashtags
- Mix of sizes
- In caption or first comment

### Twitter/X
- Optimal: 1-2 hashtags
- More hurts engagement
- Integrate naturally in text
- Trending hashtags valuable

### LinkedIn
- Optimal: 3-5 hashtags
- Professional and industry-focused
- Place at end of post
- Follow relevant hashtags

### TikTok
- Optimal: 3-5 hashtags
- Include trending and niche
- Challenge hashtags important
- Sounds often have hashtags

### Facebook
- Hashtags less impactful
- 1-2 if any
- Group-specific tags useful

## HASHTAG RESEARCH PRINCIPLES

1. **Relevance First**: Only use hashtags directly related to content
2. **Audience Alignment**: Use tags your target audience follows
3. **Competition Balance**: Mix popular and niche hashtags
4. **Banned Tag Awareness**: Avoid shadowbanned hashtags
5. **Specificity**: More specific = more targeted audience
6. **Freshness**: Update hashtag sets regularly

Platform: {{platform}}
Hashtag Count: {{hashtag_count}}

## OUTPUT FORMAT

Generate hashtags organized by:
- Category type
- Size/competition level
- Relevance to content
- Platform optimization

Provide as:
- Numbered list with context
- One-line copy-paste format
- Strategic groupings for rotation`,
    useCases: [
      {
        title: 'Content marketing campaigns',
        description: 'Social media marketers use the Hashtag Generator to optimize hashtag strategy for marketing campaigns. By inputting relevant keywords or topics, the tool generates trending and popular hashtags related to the campaign, maximizing content visibility and helping reach broader audiences.',
      },
      {
        title: 'Enhancing social media SEO',
        description: 'Businesses and individuals use the Hashtag Generator to improve social media discoverability. By generating optimized hashtags related to products, services, or content, users increase the chances of their posts being found by users interested in similar topics, expanding online presence and reach.',
      },
      {
        title: 'Influencer reach maximization',
        description: 'Influencers use the Hashtag Generator to discover relevant, trending hashtags within their content niche. The tool helps identify optimal hashtag combinations that attract new followers while fostering deeper engagement from audiences genuinely interested in their content.',
      },
    ],
    faqs: [
      { question: 'How many hashtags should I use?', answer: 'Platform recommendations: Instagram 5-10 (max 30), Twitter 1-2, LinkedIn 3-5, TikTok 3-5. Quality and relevance matter more than quantity. Too many hashtags can appear spammy.' },
      { question: 'What makes a hashtag effective?', answer: 'Effective hashtags are relevant to your content, used by your target audience, have manageable competition (not too broad or too narrow), and help categorize your content for discovery.' },
      { question: 'Should I use popular or niche hashtags?', answer: 'Use a mix of both. Popular hashtags (1M+ posts) provide broad visibility but high competition. Niche hashtags (10K-100K posts) offer lower competition and more targeted reach. Balance both for optimal strategy.' },
      { question: 'How do I find trending hashtags?', answer: 'Check platform Explore/Trending sections, use social media analytics tools, follow industry accounts, monitor competitor posts, and pay attention to current events and cultural moments relevant to your niche.' },
      { question: 'Can hashtags hurt my engagement?', answer: 'Yes, using too many hashtags, irrelevant hashtags, or banned/shadowbanned hashtags can hurt engagement. Stick to relevant tags and regularly check that your hashtags aren\'t restricted.' },
      { question: 'Should I use the same hashtags on every post?', answer: 'No. Using identical hashtag sets repeatedly can appear spammy to algorithms. Create several hashtag sets and rotate them. Include 2-3 consistent branded hashtags plus varying relevant tags.' },
      { question: 'Where should I place hashtags in my posts?', answer: 'Instagram: In caption or first comment (both work). Twitter: Integrated naturally in text. LinkedIn: At the end of your post. TikTok: In the caption. Placement is often aesthetic preference.' },
      { question: 'How do I create a branded hashtag?', answer: 'Create a unique, memorable tag for your brand or campaign. Keep it short, easy to spell, and check that it\'s not already in use. Promote it consistently and encourage followers to use it.' },
      { question: 'What are shadowbanned hashtags?', answer: 'Some hashtags are restricted by platforms due to inappropriate use. Using them can limit your content\'s visibility. Regularly check if your hashtags show content when searched.' },
      { question: 'How often should I update my hashtag strategy?', answer: 'Review and update your hashtag strategy monthly. Trending hashtags change, some become overused, and new relevant tags emerge. Keep your strategy fresh and responsive to platform changes.' },
    ],
  },

  'instagram-hashtag-generator': {
    slug: 'instagram-hashtag-generator',
    name: 'Instagram Hashtag Generator',
    title: 'Free AI Instagram Hashtag Generator',
    description: 'Generate the perfect Instagram hashtags to boost your reach and engagement. Our AI creates strategic hashtag sets tailored to your content and niche.',
    metaDescription: 'Generate the perfect Instagram hashtags to boost your reach and engagement. Our AI creates strategic hashtag sets tailored to your content and niche.',
    inputLabel: 'Describe your post or niche...',
    inputPlaceholder: 'e.g. Travel photography from Bali featuring beaches and temples',
    buttonText: 'Generate Hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'hashtag_count',
        label: 'Number of hashtags',
        choices: ['5 hashtags', '10 hashtags', '15 hashtags', '20 hashtags', '30 hashtags'],
        default: '10 hashtags',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'Content type',
        choices: ['Feed Post', 'Reels', 'Carousel', 'Story'],
        default: 'Feed Post',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram growth strategist specializing in hashtag research and optimization for the Instagram platform. Your role is to generate strategic hashtag sets that maximize post reach, engagement, and discoverability within Instagram's ecosystem.

## INSTAGRAM HASHTAG FUNDAMENTALS

- Maximum 30 hashtags per post
- Optimal range: 5-10 relevant hashtags
- Can be placed in caption or first comment
- Instagram algorithm uses hashtags for content categorization
- Hashtags create searchable, followable content categories

## HASHTAG STRATEGY TIERS

### Tier 1: Broad Reach (1M+ posts)
- High visibility, high competition
- Use 1-2 maximum per post
- Examples: #PhotoOfTheDay, #InstaGood
- Purpose: Momentary visibility burst

### Tier 2: Industry Standard (100K-1M posts)
- Good reach with moderate competition
- Use 3-5 per post
- Examples: #FitnessMotivation, #TravelBlogger
- Purpose: Core discoverability

### Tier 3: Niche Specific (10K-100K posts)
- Targeted audience, lower competition
- Use 3-4 per post
- Examples: #VeganMealPrep, #MinimalistHome
- Purpose: Engaged community reach

### Tier 4: Micro/Community (<10K posts)
- Very targeted, often community-based
- Use 1-2 per post
- Examples: #[YourCity]Photographers
- Purpose: Highly engaged small communities

## CONTENT-TYPE SPECIFIC HASHTAGS

### For Reels
- #Reels, #ReelsViral, #InstagramReels
- Trending audio-related hashtags
- Challenge hashtags
- Entertainment-focused tags

### For Carousels
- #CarouselPost, #SwipeRight
- Educational content tags
- Save-worthy content indicators
- Tutorial hashtags

### For Stories (when applicable)
- Location tags more important
- Hashtag stickers limited
- Focus on engagement over discovery

### For Feed Posts
- Full hashtag strategy applicable
- Mix all tiers appropriately
- Match visual content type

## NICHE HASHTAG CATEGORIES

**Business/Marketing:**
#SmallBusinessTips #EntrepreneurMindset #MarketingStrategy #StartupLife #BusinessGrowth

**Fitness/Wellness:**
#FitFam #WorkoutMotivation #HealthyLifestyle #FitnessJourney #WellnessWednesday

**Food/Recipe:**
#FoodPorn #RecipeOfTheDay #HomeCooking #FoodPhotography #InstaFood

**Fashion/Style:**
#OOTD #StreetStyle #FashionBlogger #StyleInspo #WhatIWore

**Travel:**
#TravelGram #Wanderlust #TravelPhotography #ExploreMore #VacationMode

**Photography:**
#PhotoOfTheDay #ShotOnIPhone #PortraitPhotography #GoldenHour #CreativePhotography

## HASHTAG SET OPTIMIZATION

- No duplicate hashtags in sets
- Avoid banned/shadowbanned tags
- Include 1-2 branded hashtags
- Mix posting categories
- Rotate sets to avoid repetition

Hashtag Count: {{hashtag_count}}
Content Type: {{content_type}}

## OUTPUT FORMAT

Provide hashtags as:
1. Organized by tier/size
2. One-line copy-paste ready format
3. With brief relevance notes
4. Quantity appropriate for platform`,
    useCases: [
      {
        title: 'Social media marketing',
        description: 'Marketers use the Instagram Hashtag Generator to optimize hashtag strategy for campaigns. By inputting relevant keywords or describing content, the tool generates popular and trending hashtags that increase visibility, discoverability, and reach for brand posts on Instagram.',
      },
      {
        title: 'Content categorization and organization',
        description: 'Content creators use the Hashtag Generator to appropriately categorize and organize their content. By inputting descriptions or themes, the tool generates relevant hashtags that align with the topic, helping maintain cohesive visual aesthetics and facilitating content discovery.',
      },
      {
        title: 'Influencer collaboration and partnership',
        description: 'Influencers and brands use the Hashtag Generator to create unique, collaborative hashtags for partnerships or sponsored campaigns. By inputting campaign details and brand names, the tool generates customized hashtags that foster engagement and track campaign performance.',
      },
    ],
    faqs: [
      { question: 'How many hashtags should I use on Instagram?', answer: 'While Instagram allows up to 30 hashtags, research suggests 5-10 relevant hashtags often perform best. Quality and relevance matter more than quantity. Test different amounts to find what works for your account.' },
      { question: 'Should I put hashtags in the caption or comments?', answer: 'Both methods work effectively. Caption placement keeps everything together, while comment placement keeps captions cleaner. Instagram\'s algorithm treats both similarly. Choose based on aesthetic preference.' },
      { question: 'What are the best hashtags for Instagram growth?', answer: 'The best hashtags are those relevant to your specific content and used by your target audience. Mix broader hashtags (100K-1M posts) with niche hashtags (10K-100K posts) for optimal reach and engagement.' },
      { question: 'How do I find niche hashtags?', answer: 'Research competitor accounts, explore related hashtags in your field, use Instagram\'s search suggestions, check what your target audience uses, and look at hashtags used by accounts similar in size to yours.' },
      { question: 'What are shadowbanned hashtags?', answer: 'Some hashtags are restricted by Instagram due to spam or inappropriate use. Using them can limit your content\'s visibility. Check if a hashtag shows content when searched—if it doesn\'t, it may be restricted.' },
      { question: 'Should I create a branded hashtag?', answer: 'Yes, branded hashtags help build community, track user-generated content, and create a searchable collection of your content. Keep it unique, short, memorable, and encourage followers to use it.' },
      { question: 'How often should I change my hashtags?', answer: 'Avoid using identical hashtag sets repeatedly—this can appear spammy. Create 5-10 different sets for your content types and rotate them. Update your strategy monthly based on performance.' },
      { question: 'Do hashtags work for Instagram Reels?', answer: 'Yes, hashtags help Reels discoverability. Use 3-5 relevant hashtags including Reels-specific tags, trending hashtags, and niche tags. The audio you use also affects Reels discovery.' },
      { question: 'Can I follow hashtags on Instagram?', answer: 'Yes, you can follow hashtags to see related content in your feed. This also means your content using those hashtags can appear in followers\' feeds—another reason to use relevant tags.' },
      { question: 'Why aren\'t my hashtags working?', answer: 'Possible reasons: using irrelevant or banned hashtags, repeating the same sets, using only very popular tags with high competition, or posting at times when your audience isn\'t active. Analyze AI and adjust your strategy.' },
    ],
  },

  'social-media-username-generator': {
    slug: 'social-media-username-generator',
    name: 'Social Media Username Generator',
    title: 'Free AI Social Media Username Generator',
    description: 'Generate unique, memorable usernames for your social media profiles. Our AI creates personalized username ideas that work across Instagram, TikTok, Twitter, and more.',
    metaDescription: 'Generate unique, memorable usernames for your social media profiles. Our AI creates personalized username ideas that work across Instagram, TikTok, Twitter, and more.',
    inputLabel: 'Describe yourself or your brand...',
    inputPlaceholder: 'e.g. Fitness coach named Sarah who specializes in yoga and meditation',
    buttonText: 'Generate Usernames',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Username style',
        choices: ['Professional', 'Creative/Playful', 'Minimal', 'Niche-Focused', 'Name-Based'],
        default: 'Creative/Playful',
        type: 'select',
      },
      {
        name: 'platform',
        label: 'Primary platform',
        choices: ['Instagram', 'TikTok', 'Twitter/X', 'YouTube', 'Cross-Platform'],
        default: 'Cross-Platform',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert personal branding consultant specializing in creating memorable, effective usernames for social media platforms. Your role is to generate unique, available-friendly username ideas that reflect identity, are easy to remember, and work across multiple platforms.

## USERNAME CREATION PRINCIPLES

1. **Memorability**: Easy to recall and spell
2. **Simplicity**: Short and clean (ideally under 15 characters)
3. **Relevance**: Reflects identity, niche, or brand
4. **Availability**: Unique enough to find across platforms
5. **Professionalism**: Appropriate for intended audience
6. **Longevity**: Won't feel dated as trends change

## USERNAME PATTERNS AND STYLES

### Pattern 1: Name + Descriptor
- FirstNameRole (JohnDesigns, SarahCooks)
- NameNiche (MikeTravel, JenFitness)
- Works for personal brands

### Pattern 2: Name + Numbers
- Name + birth year or meaningful number
- Use strategically (avoid random numbers)
- Example: Sarah2023, Mike_87

### Pattern 3: Descriptive Handle
- NicheDescriptor (TheMinimalistHome, DailyDesignTips)
- What you do or offer
- Works for topic-focused accounts

### Pattern 4: Creative Wordplay
- Puns, alliteration, rhymes
- Memorable combinations
- Example: FitWithBritt, CookWithKook

### Pattern 5: Abbreviated/Acronym
- Initials + descriptor
- Shortened phrases
- Example: JKPhotos, SMMarketingPro

### Pattern 6: Location + Niche
- CityActivity (NYCFoodie, LAFitness)
- Geographic personal branding
- Good for local businesses

### Pattern 7: Action-Based
- Verb + Noun format
- What you help people do
- Example: GrowYourBrand, LearnToCode

## USERNAME VARIATIONS TO GENERATE

For availability purposes, generate variations using:
- Underscores: the_real_name, name_official
- Periods: name.creates, first.last
- Prefixes: hey.name, im.name, its.name
- Suffixes: name.co, name.xyz, name.studio
- Modifiers: realname, officialname, namehq

## PLATFORM-SPECIFIC CONSIDERATIONS

### Instagram
- 30 characters max
- Letters, numbers, periods, underscores only
- No consecutive periods
- Case insensitive

### Twitter/X
- 15 characters max
- Letters, numbers, underscores only
- Case insensitive

### TikTok
- 24 characters max
- Letters, numbers, underscores, periods
- Case insensitive

### YouTube
- Channel name more flexible
- Handle rules similar to Instagram
- Can include spaces in display name

### LinkedIn
- URL customizable
- Professional preference
- Usually real name based

## QUALITY FILTERS

Before suggesting usernames, check:
- Easy to pronounce and spell
- No unintended meanings or associations
- Works when spoken aloud
- Appropriate for professional contexts
- Not too similar to existing famous accounts
- Available across major platforms (if possible)

Style: {{style}}
Platform: {{platform}}

## OUTPUT FORMAT

For each username suggestion, provide:
- Username
- Style/pattern category
- Meaning or rationale (if requested)
- Variations for availability backup`,
    useCases: [
      {
        title: 'Branding and business accounts',
        description: 'Businesses and individuals establishing online presence use the Username Generator to create consistent, recognizable usernames across platforms. Having a unified username helps brand recognition and makes it easier for customers and followers to find and connect with the brand.',
      },
      {
        title: 'Content creators and influencers',
        description: 'Content creators, bloggers, vloggers, and influencers need distinctive usernames that reflect their niche or brand. The tool generates relevant, appealing usernames that resonate with their audience and are easy to remember across platforms like Instagram, YouTube, Twitter, and TikTok.',
      },
      {
        title: 'Personal and professional branding',
        description: 'Individuals building personal brands use the Username Generator to create unique, professional usernames. Maintaining consistent usernames across platforms helps build coherent online identity for networking, job opportunities, or personal expression.',
      },
    ],
    faqs: [
      { question: 'What makes a good social media username?', answer: 'Good usernames are short (under 15 characters ideal), easy to spell and pronounce, memorable, relevant to your identity or niche, available across platforms, and professional enough for your intended audience.' },
      { question: 'Should my username be my real name?', answer: 'It depends on your goals. Real names work well for personal branding and professional networking. Creative usernames work better for content creators or when building a brand separate from your identity.' },
      { question: 'How do I make my username unique?', answer: 'Add relevant descriptors, use wordplay or alliteration, include your niche or location, try different patterns (underscores, periods), or combine unexpected words that represent your brand.' },
      { question: 'Should I use the same username across all platforms?', answer: 'Ideally, yes. Consistent usernames make you easier to find and strengthen brand recognition. If your preferred username is taken on some platforms, use close variations with the same core identity.' },
      { question: 'What if my preferred username is already taken?', answer: 'Try variations: add underscores (name_creates), prefixes (the.real.name), suffixes (namehq), or combine with relevant descriptors. The generator provides multiple variations for this reason.' },
      { question: 'Should I use numbers in my username?', answer: 'Use numbers strategically if they have meaning (birth year, founding year) rather than randomly. Random numbers can make usernames harder to remember and appear less professional.' },
      { question: 'How long should my username be?', answer: 'Shorter is generally better—under 15 characters is ideal. This ensures availability across all platforms (Twitter has a 15-character limit) and makes it easier to remember and type.' },
      { question: 'Can I change my username later?', answer: 'Most platforms allow username changes, but changing usernames can confuse followers and break existing links. Choose thoughtfully upfront to avoid needing changes.' },
      { question: 'Should my username describe what I do?', answer: 'Including your niche or activity can help discoverability and immediately communicate your focus. However, keep it general enough that you won\'t outgrow it if your content evolves.' },
      { question: 'What characters can I use in usernames?', answer: 'Most platforms allow letters, numbers, underscores, and periods. Twitter doesn\'t allow periods. Instagram doesn\'t allow consecutive periods. Avoid special characters for broadest compatibility.' },
    ],
  },

  'instagram-name-generator': {
    slug: 'instagram-name-generator',
    name: 'Instagram Name Generator',
    title: 'Free AI Instagram Name Generator',
    description: 'Generate unique Instagram usernames that stand out. Our AI creates memorable, on-brand handles that help you build your presence and get discovered.',
    metaDescription: 'Generate unique Instagram usernames that stand out. Our AI creates memorable, on-brand handles that help you build your presence and get discovered.',
    inputLabel: 'Describe yourself or your brand...',
    inputPlaceholder: 'e.g. Food blogger named Emma who shares healthy recipes',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'account_type',
        label: 'Account type',
        choices: ['Personal Brand', 'Content Creator', 'Business/Brand', 'Influencer', 'Artist/Creative'],
        default: 'Content Creator',
        type: 'select',
      },
      {
        name: 'style',
        label: 'Name style',
        choices: ['Professional', 'Creative/Fun', 'Minimal', 'Trendy', 'Classic'],
        default: 'Creative/Fun',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert Instagram branding consultant specializing in creating unique, memorable Instagram usernames. Your role is to generate username ideas optimized for Instagram's platform requirements and best practices.

## INSTAGRAM USERNAME REQUIREMENTS

- Maximum 30 characters
- Allowed: letters, numbers, periods, underscores
- No consecutive periods
- Case insensitive (displays as typed)
- Must be unique on platform
- Cannot start/end with period

## INSTAGRAM USERNAME CATEGORIES

### Personal Branding
- First + Last name variations
- Name + profession/niche
- Creative name combinations
- Examples: jane.smith.design, johnmarketingpro

### Content Creator
- Niche-focused names
- Topic + personality blend
- Memorable handles
- Examples: dailymakeuptips, fitnesswithfiona

### Business/Brand
- Company name adaptations
- Product/service indicators
- Professional variations
- Examples: acme.studio, shophandmade.co

### Influencer
- Personal brand names
- Category indicators
- Lifestyle descriptors
- Examples: wanderlust.jane, healthy.eats.sam

### Artist/Creative
- Art form references
- Style indicators
- Creative wordplay
- Examples: pixels.by.pete, brushstrokesart

## EFFECTIVE INSTAGRAM NAME PATTERNS

### Pattern 1: the + name
- the.wanderer, thefoodiegirl
- Creates distinction, sounds established

### Pattern 2: name + does/creates/makes
- sarah.creates, mike.makes.music
- Action-oriented, clear value

### Pattern 3: name + hq/co/studio
- designhq, studio.jane, photo.co
- Professional, business-like

### Pattern 4: im/its/hey + name
- imjanesmith, its.mike.travel
- Casual, personality-forward

### Pattern 5: name + niche
- sarahwellness, mikephotography
- Clear categorization

### Pattern 6: location + niche
- nycfoodie, lafitnessgirl
- Geographic targeting

### Pattern 7: adjective + name
- creativejane, healthymikeeats
- Personality descriptors

## INSTAGRAM-SPECIFIC BEST PRACTICES

1. **Searchability**: Include keywords your audience searches
2. **Pronounceability**: Easy to say when giving out verbally
3. **Memorability**: Distinct enough to remember after one view
4. **Professionalism**: Appropriate for potential sponsors/partners
5. **Flexibility**: Allows for content evolution
6. **Cross-platform**: Works on other social platforms too

## AVAILABILITY TACTICS

When common names are taken:
- Add location indicators
- Include profession/niche
- Use creative separators (periods, underscores)
- Add meaningful numbers sparingly
- Try action verbs + name
- Flip word order

Account Type: {{account_type}}
Style: {{style}}

## OUTPUT REQUIREMENTS

Generate usernames that are:
- Instagram-compliant (length, characters)
- Easy to spell verbally
- Professional yet memorable
- Searchable by target audience
- Distinct from existing popular accounts
- Provided with meaning explanation if requested`,
    useCases: [
      {
        title: 'Personal branding',
        description: 'Individuals looking to build a personal brand on Instagram use the Name Generator to find unique, catchy usernames that reflect their passion and expertise. A memorable username helps create strong online presence and enhances personal branding efforts across the platform.',
      },
      {
        title: 'Business and product promotion',
        description: 'Businesses and entrepreneurs use the Instagram Name Generator to find brand-relevant usernames that align with company identity and values. Consistent branding across platforms helps customers recognize and remember the brand, leading to increased visibility.',
      },
      {
        title: 'Social media marketing campaigns',
        description: 'Marketers creating campaign-specific accounts or needing unique handles for promotions use the generator to quickly develop catchy usernames. This is particularly useful for events, product launches, or limited-time promotions requiring dedicated Instagram presence.',
      },
    ],
    faqs: [
      { question: 'What are Instagram\'s username requirements?', answer: 'Instagram usernames can be up to 30 characters, using only letters, numbers, periods, and underscores. No consecutive periods are allowed, and names can\'t start or end with a period.' },
      { question: 'How do I know if a username is available?', answer: 'Check directly on Instagram by searching or attempting to create an account. Third-party tools can also check availability across multiple platforms simultaneously.' },
      { question: 'Should my Instagram username match my other social media?', answer: 'Ideally, yes. Consistent usernames across platforms strengthen your brand, make you easier to find, and create a cohesive online identity.' },
      { question: 'Is it better to use my real name or a creative username?', answer: 'Depends on your goals. Real names work well for personal branding and professional networking. Creative usernames work better for niche content creators or when building a brand separate from your identity.' },
      { question: 'How important is my Instagram username for growth?', answer: 'Your username affects searchability and first impressions. A clear, memorable username that indicates your niche can help people find you and understand your content at a glance.' },
      { question: 'Can I change my Instagram username?', answer: 'Yes, you can change it in settings. However, old links will break, and frequent changes can confuse followers. Choose thoughtfully to minimize the need for changes.' },
      { question: 'Should I include my niche in my username?', answer: 'Including your niche (like photography, fitness, or food) helps with searchability and immediately communicates your focus. However, keep it general enough for content evolution.' },
      { question: 'What if all the good usernames are taken?', answer: 'Try variations with underscores or periods, add relevant descriptors, include your location, use action words (creates, makes), or try prefixes like "the" or "its."' },
      { question: 'Are underscores or periods better in usernames?', answer: 'Both work well. Periods can look cleaner (first.last), while underscores are more universally recognized (first_last). Choose based on readability and aesthetic preference.' },
      { question: 'How do I pick between multiple username options?', answer: 'Consider: Which is easiest to spell verbally? Which best represents your brand long-term? Which is most memorable? Ask friends which they\'d remember after hearing once.' },
    ],
  },

  'tiktok-hashtag-generator': {
    slug: 'tiktok-hashtag-generator',
    name: 'TikTok Hashtag Generator',
    title: 'Free AI TikTok Hashtag Generator',
    description: 'Generate trending TikTok hashtags that boost your visibility. Our AI creates strategic hashtag combinations to help your videos reach the For You Page.',
    metaDescription: 'Generate trending TikTok hashtags that boost your visibility. Our AI creates strategic hashtag combinations to help your videos reach the For You Page.',
    inputLabel: 'Describe your TikTok video...',
    inputPlaceholder: 'e.g. Dance video using trending audio with outfit transition',
    buttonText: 'Generate Hashtags',
    maxLength: 2048,
    options: [
      {
        name: 'content_type',
        label: 'Content type',
        choices: ['Entertainment/Dance', 'Educational', 'Comedy/Skit', 'Lifestyle/Vlog', 'Product/Review', 'Tutorial/How-To'],
        default: 'Entertainment/Dance',
        type: 'select',
      },
      {
        name: 'hashtag_count',
        label: 'Number of hashtags',
        choices: ['3 hashtags', '5 hashtags', '7 hashtags'],
        default: '5 hashtags',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok growth strategist specializing in hashtag optimization for the TikTok platform. Your role is to generate strategic hashtag sets that maximize video visibility, reach the For You Page (FYP), and target engaged audiences within TikTok's unique algorithm ecosystem.

## TIKTOK HASHTAG FUNDAMENTALS

- Caption limit: 4,000 characters (recently expanded)
- Optimal hashtags: 3-5 per video
- Hashtags heavily influence FYP distribution
- Trending hashtags change rapidly
- Sounds/audio also affect discovery

## TIKTOK HASHTAG CATEGORIES

### 1. FYP/Viral Hashtags
- #FYP, #ForYou, #ForYouPage, #Viral
- Broad reach, high competition
- Use 1 maximum per video
- Signals algorithm you want reach

### 2. Trending/Challenge Hashtags
- Currently popular challenges
- Time-sensitive, high visibility
- Match only if content fits
- Examples: Current dance, trend, or challenge names

### 3. Niche/Community Hashtags
- Specific to content category
- Targeted audience
- Medium competition
- Examples: #BookTok, #FitTok, #FoodTok, #CleanTok

### 4. Content Type Hashtags
- Describe video style/format
- Help categorization
- Examples: #Tutorial, #Storytime, #GRWM, #POV

### 5. Sound/Audio Hashtags
- Related to trending sounds
- Link to audio trends
- Examples: Sound-specific tags

## TIKTOK NICHE COMMUNITIES

**BookTok**: #BookTok #BookRecommendations #BookReview
**FitTok**: #FitTok #WorkoutRoutine #GymTok #FitnessMotivation
**FoodTok**: #FoodTok #Cooking #Recipe #WhatIEatInADay
**CleanTok**: #CleanTok #CleaningMotivation #OrganizationTips
**BeautyTok**: #BeautyTok #MakeupTutorial #Skincare #GRWM
**FinTok**: #FinTok #MoneyTips #Investing #PersonalFinance
**CareerTok**: #CareerTok #JobTips #WorkFromHome #9to5
**ParentTok**: #MomTok #DadTok #ParentingTips

## TIKTOK HASHTAG STRATEGY

### Optimal Mix (3-5 hashtags)
- 1 broad hashtag (#FYP or #Viral)
- 1-2 niche community hashtags
- 1-2 content-specific hashtags

### For Trending Content
- Include relevant trend hashtag
- Match audio/challenge hashtags
- Add 1-2 niche tags

### For Evergreen Content
- Focus on niche hashtags
- Use content descriptor tags
- Skip trend-specific tags

## TIKTOK-SPECIFIC BEST PRACTICES

1. **Relevance Over Quantity**: 3-5 relevant beats 10 random
2. **Match Content Type**: Use hashtags that describe what's in the video
3. **Check Trending Page**: See what's currently hot
4. **Watch Competitors**: See what successful creators in your niche use
5. **Test and Learn**: Track which combinations perform best
6. **Avoid Overused Generic Tags**: They dilute your targeting

Content Type: {{content_type}}
Hashtag Count: {{hashtag_count}}

## OUTPUT FORMAT

Provide hashtags as:
- Organized by category
- Copy-paste ready format
- With brief usage notes
- Trend status when applicable`,
    useCases: [
      {
        title: 'TikTok content strategy optimization',
        description: 'Social media managers and content creators use the TikTok Hashtag Generator to optimize their content strategy. By inputting relevant keywords or topics, users discover trending and popular hashtags that align with their niche, helping content reach broader audiences on TikTok.',
      },
      {
        title: 'Influencer marketing campaigns',
        description: 'Brands and marketing agencies use the TikTok Hashtag Generator to identify popular hashtags within their industry. When planning influencer marketing campaigns, this helps find influencers using these hashtags and ensures campaign content uses optimal tags for maximum exposure.',
      },
      {
        title: 'Competitor analysis and benchmarking',
        description: 'Marketers analyze competitors\' hashtag strategies using the generator to discover commonly used tags in their industry. This information helps benchmark and refine their own hashtag strategies based on what performs well for competitors.',
      },
    ],
    faqs: [
      { question: 'How many hashtags should I use on TikTok?', answer: 'TikTok recommends 3-5 relevant hashtags per video. Using too many can appear spammy and dilute your targeting. Quality and relevance matter more than quantity.' },
      { question: 'Do hashtags really matter for TikTok reach?', answer: 'Yes, hashtags help TikTok\'s algorithm categorize and distribute your content to interested viewers. They\'re one of several factors affecting whether your video reaches the For You Page.' },
      { question: 'Should I always use #FYP or #ForYou?', answer: 'Using one FYP-related hashtag can help, but it\'s not magic. The algorithm prioritizes content quality and engagement over hashtags alone. Use it as one of your 3-5 hashtags, not your only strategy.' },
      { question: 'What are TikTok community hashtags?', answer: 'Community hashtags like #BookTok, #FitTok, or #FoodTok connect niche communities on TikTok. Using relevant community hashtags helps reach engaged audiences interested in your specific content type.' },
      { question: 'How do I find trending TikTok hashtags?', answer: 'Check TikTok\'s Discover/Trending page, watch what top creators in your niche use, explore the sounds and effects that are trending, and use hashtag research tools to identify current trends.' },
      { question: 'Should I use trending hashtags if they don\'t match my content?', answer: 'No. Using irrelevant trending hashtags can hurt your video\'s performance. The algorithm may show your content to uninterested viewers who won\'t engage, signaling low quality to TikTok.' },
      { question: 'Do TikTok hashtags work differently than Instagram hashtags?', answer: 'Yes. TikTok\'s algorithm weighs engagement signals heavily, and hashtags work alongside sounds, completion rate, and other factors. TikTok hashtags also trend and fade faster than on other platforms.' },
      { question: 'Can hashtags help me go viral on TikTok?', answer: 'Hashtags are one piece of the puzzle. Viral potential depends more on content quality, hook strength, trending sounds, posting time, and audience engagement. Hashtags help discoverability but don\'t guarantee virality.' },
      { question: 'Should I create a branded hashtag for TikTok?', answer: 'Branded hashtags work well for challenges and campaigns that encourage user-generated content. They help track engagement and build community around your brand.' },
      { question: 'How often do TikTok hashtag trends change?', answer: 'TikTok trends change rapidly—often weekly or even daily for very hot trends. Stay current by regularly checking the Discover page and adjusting your hashtag strategy accordingly.' },
    ],
  },

  'tiktok-username-generator': {
    slug: 'tiktok-username-generator',
    name: 'TikTok Username Generator',
    title: 'Free AI TikTok Username Generator',
    description: 'Generate unique TikTok usernames that match your vibe. Our AI creates memorable, on-trend handles that help you stand out and grow your following.',
    metaDescription: 'Generate unique TikTok usernames that match your vibe. Our AI creates memorable, on-trend handles that help you stand out and grow your following.',
    inputLabel: 'Describe yourself or your content...',
    inputPlaceholder: 'e.g. Comedy creator who makes skits about office life',
    buttonText: 'Generate Usernames',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Username style',
        choices: ['Trendy/Fun', 'Professional', 'Niche-Focused', 'Personality-Driven', 'Name-Based'],
        default: 'Trendy/Fun',
        type: 'select',
      },
      {
        name: 'content_niche',
        label: 'Content niche',
        choices: ['Entertainment/Comedy', 'Fitness/Health', 'Beauty/Fashion', 'Food/Cooking', 'Education/Tips', 'Lifestyle/Vlog', 'Other'],
        default: 'Entertainment/Comedy',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert TikTok personal branding consultant specializing in creating memorable, discoverable usernames for the TikTok platform. Your role is to generate username ideas that resonate with TikTok's young, trend-aware audience while reflecting creator identity.

## TIKTOK USERNAME REQUIREMENTS

- Maximum 24 characters
- Allowed: letters, numbers, underscores, periods
- Must be unique on platform
- Case insensitive
- Can be changed (with limitations)

## TIKTOK USERNAME CHARACTERISTICS

**Platform Culture:**
- Casual and fun tone
- Personality-forward
- Trend-aware
- Often playful or witty
- Less corporate than LinkedIn

**Successful Patterns:**
- Short and punchy
- Easy to remember from quick videos
- Sounds good when spoken
- Works in duets and stitches
- Reflects content niche

## TIKTOK USERNAME STYLES

### 1. Name-Based
- First name + descriptor
- Name + niche
- Examples: emmacooks, mikefitness, sarahstyle

### 2. Niche-Focused
- Content description handle
- What you post about
- Examples: dailyrecipes, fittips, budgethacks

### 3. Personality-Driven
- Character or vibe focused
- Personality descriptors
- Examples: chaoticcooking, anxiouschef, lazyworkouts

### 4. Creator Brand
- Established brand names
- Business identity
- Examples: [brandname]official, [business]hq

### 5. Playful/Trendy
- Wordplay and puns
- Current slang integration
- Examples: chefmode, fitcheck, slaywithsarah

### 6. The[Niche][Person]
- Common TikTok pattern
- Examples: themealprepking, theplantgirl

## TIKTOK-SPECIFIC CONSIDERATIONS

1. **Speakability**: Easy to say in videos ("follow me @...")
2. **Searchability**: Contains words audience would search
3. **Duet/Stitch Friendly**: Looks good when tagged
4. **Age Appropriate**: Resonates with TikTok demographics
5. **Trend Adaptable**: Won't feel dated quickly
6. **Cross-Platform Potential**: Available on other platforms

## AVAILABILITY STRATEGIES

If common names taken:
- Add underscores strategically
- Include content niche
- Use number sparingly (meaningful ones)
- Try "the" or "its" prefix
- Add location indicator
- Use action verbs

## NICHE-SPECIFIC USERNAME IDEAS

**Fitness**: fitby[name], [name]lifts, strongwith[name]
**Food**: [name]cooks, hungry[name], chef[name]
**Beauty**: glam[name], [name]glows, beautyby[name]
**Comedy**: [name]laughs, funny[name], lolwith[name]
**Education**: learn[topic], [name]explains, [subject]teacher

Style: {{style}}
Content Niche: {{content_niche}}

## OUTPUT FORMAT

Generate usernames that are:
- TikTok compliant
- Culturally relevant
- Easy to pronounce
- Memorable from quick exposure
- Provided with style category
- Meaning explanation if requested`,
    useCases: [
      {
        title: 'New creator identity',
        description: 'New TikTok creators use the Username Generator to establish their platform identity. By inputting their content focus, personality traits, and interests, the tool generates username ideas that resonate with TikTok\'s audience and reflect their unique creator brand.',
      },
      {
        title: 'Content niche branding',
        description: 'Creators focusing on specific niches like fitness, cooking, comedy, or beauty use the generator to find usernames that immediately communicate their content focus. A clear niche-related username helps attract the right audience and establishes authority in that space.',
      },
      {
        title: 'Brand and business TikTok launch',
        description: 'Businesses launching TikTok presence use the generator to find usernames that align with their brand while fitting TikTok\'s casual, creative culture. The tool helps create handles that are professional yet approachable for the platform\'s audience.',
      },
    ],
    faqs: [
      { question: 'What are TikTok\'s username requirements?', answer: 'TikTok usernames can be up to 24 characters, using letters, numbers, underscores, and periods. They must be unique, are case insensitive, and can be changed (with some waiting period between changes).' },
      { question: 'Can I change my TikTok username?', answer: 'Yes, you can change your TikTok username in settings. However, there may be a waiting period before you can change it again, and your old username becomes available for others to claim.' },
      { question: 'Should my TikTok username be funny or professional?', answer: 'It depends on your content. TikTok culture leans casual and fun, so even professional creators often use approachable usernames. Match your username to your content style and target audience expectations.' },
      { question: 'How do I make my TikTok username memorable?', answer: 'Keep it short, easy to pronounce, and related to your content. Alliteration, rhymes, or clever wordplay help. It should be easy to remember after watching just one video.' },
      { question: 'Should I use my real name on TikTok?', answer: 'Using your real name can help with personal branding and recognition across platforms. However, creative handles often work better for content-focused accounts and provide more flexibility.' },
      { question: 'What if my preferred username is taken?', answer: 'Try adding your niche (mikefitness), using underscores (mike_creates), adding "the" (themikefitness), or including a meaningful descriptor that differentiates you.' },
      { question: 'Should my TikTok username match my Instagram?', answer: 'Consistent usernames across platforms help followers find you everywhere. If your preferred name isn\'t available on both, use close variations that are clearly connected.' },
      { question: 'Do TikTok usernames affect discoverability?', answer: 'Usernames containing relevant keywords can help when users search for content types. However, content quality and hashtags matter more for overall discoverability on TikTok.' },
      { question: 'How important is my username for TikTok growth?', answer: 'Your username is your first impression and brand identity, but content quality matters more for growth. A good username helps, but great content is what actually grows your following.' },
      { question: 'Should I include numbers in my TikTok username?', answer: 'Avoid random numbers which look unintentional. Meaningful numbers (birth year, founding year) can work if they add to your brand, but letter-only usernames generally look more professional.' },
    ],
  },

  'youtube-channel-description-generator': {
    slug: 'youtube-channel-description-generator',
    name: 'YouTube Channel Description Generator',
    title: 'Free AI YouTube Channel Description Generator',
    description: 'Create a compelling YouTube channel description that attracts subscribers. Our AI generates SEO-optimized descriptions that showcase your content and grow your audience.',
    metaDescription: 'Create a compelling YouTube channel description that attracts subscribers. Our AI generates SEO-optimized descriptions that showcase your content and grow your audience.',
    inputLabel: 'Describe your YouTube channel...',
    inputPlaceholder: 'e.g. Tech review channel focusing on budget smartphones and gadgets',
    buttonText: 'Generate Description',
    maxLength: 2048,
    options: [
      {
        name: 'tone',
        label: 'Channel tone',
        choices: ['Professional', 'Friendly', 'Enthusiastic', 'Informative', 'Casual'],
        default: 'Friendly',
        type: 'select',
      },
      {
        name: 'channel_type',
        label: 'Channel type',
        choices: ['Educational/Tutorial', 'Entertainment', 'Vlog/Lifestyle', 'Gaming', 'Business/Brand', 'Review/Commentary'],
        default: 'Educational/Tutorial',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube strategist specializing in channel optimization and discoverability. Your role is to create compelling channel descriptions that clearly communicate channel value, improve searchability, and convert visitors into subscribers.

## YOUTUBE CHANNEL DESCRIPTION STRUCTURE

**Character Limit**: 1,000 characters
**Visible on**:
- About page (full description)
- Channel banner area (first ~200 characters)
- Search results (truncated)

## OPTIMAL DESCRIPTION ELEMENTS

### 1. Hook/Value Statement (First 1-2 sentences)
- What the channel is about
- What viewers will get
- Why they should subscribe
- Appears in search previews

### 2. Content Overview (Middle section)
- Types of videos you create
- Upload schedule if consistent
- Topics you cover
- What makes you different

### 3. Creator/Brand Info (Brief)
- Who you are
- Relevant credentials
- Why you're qualified

### 4. Call-to-Action (End)
- Subscribe invitation
- Notification reminder
- Social media links mention

### 5. Contact Information
- Business email
- Social media handles
- Website link

## DESCRIPTION TEMPLATES

**Template 1: Creator-Focused**
Welcome to [Channel Name]! I'm [Name], and I help [audience] [achieve what/learn what].

Here you'll find [content type 1], [content type 2], and [content type 3]. I upload [schedule].

Subscribe and hit the bell to join [number or growing] viewers on their [journey/goal].

📧 Business: [email]
📱 [Social platform]: [handle]

**Template 2: Topic/Niche-Focused**
Your destination for [topic/niche] content!

Whether you're looking for [type 1], [type 2], or [type 3], you'll find it here. New videos every [schedule].

Why subscribe? [Unique value proposition or channel differentiator].

Connect:
📧 [email]
🔗 [website]

**Template 3: Business/Brand**
[Brand/Company Name] – [Tagline or mission statement]

We create [content type] to help [audience] with [problem/goal]. Our videos include [format 1], [format 2], and [format 3].

[Brief company description or credentials]

Subscribe for [benefit/schedule].

📧 Business inquiries: [email]
🌐 [website]

## YOUTUBE SEO CONSIDERATIONS

- Include relevant keywords naturally
- Front-load important information
- Use keywords your audience searches for
- Don't keyword stuff
- Update regularly to stay current

## TONE OPTIONS

### IF tone = "Professional"
- Polished, authoritative, business-appropriate

### IF tone = "Friendly"
- Warm, inviting, community-focused

### IF tone = "Enthusiastic"
- Energetic, passionate, exciting

### IF tone = "Informative"
- Clear, educational, straightforward

### IF tone = "Casual"
- Relaxed, approachable, conversational

Tone: {{tone}}
Channel Type: {{channel_type}}

## OUTPUT REQUIREMENTS

Generate descriptions that:
- Fit within 1,000 characters
- Lead with key value proposition
- Include clear content overview
- Have appropriate CTAs
- Are SEO-friendly
- Match the channel's tone`,
    useCases: [
      {
        title: 'Channel SEO optimization',
        description: 'YouTubers use the Channel Description Generator to create keyword-rich descriptions that improve channel visibility in YouTube and Google search results. By inputting channel focus, target keywords, and content types, the tool generates optimized descriptions that help potential viewers discover the channel.',
      },
      {
        title: 'Enhancing subscriber conversion',
        description: 'Creators looking to convert channel visitors into subscribers use the generator to create compelling descriptions that clearly explain channel value. Well-crafted descriptions that communicate unique value propositions and set clear expectations lead to higher subscription rates.',
      },
      {
        title: 'Efficient channel setup',
        description: 'New YouTubers and businesses launching channels use the generator to create professional descriptions quickly. This saves time during channel setup and ensures the About page makes a strong first impression from day one.',
      },
    ],
    faqs: [
      { question: 'How long should a YouTube channel description be?', answer: 'YouTube allows up to 1,000 characters for channel descriptions. Use enough to convey your value proposition clearly, but don\'t pad with unnecessary content. Most effective descriptions are 500-800 characters.' },
      { question: 'What should I include in my channel description?', answer: 'Include: what your channel is about, what viewers will learn or experience, your upload schedule, who you are and your credentials, a subscribe call-to-action, and contact information for business inquiries.' },
      { question: 'How does channel description affect SEO?', answer: 'Channel descriptions help YouTube understand your content for recommendations and search. Include relevant keywords naturally to improve discoverability. The first 100-150 characters are especially important for search result previews.' },
      { question: 'How do I optimize my description for search?', answer: 'Include keywords your target audience searches for, front-load important information, use natural language (no keyword stuffing), and update regularly to keep content fresh and relevant.' },
      { question: 'Should I include my upload schedule?', answer: 'Yes, if you have a consistent schedule. Stating "New videos every Tuesday and Friday" sets viewer expectations and can encourage subscriptions from people who want regular content.' },
      { question: 'What call-to-action should I include?', answer: 'Invite viewers to subscribe and enable notifications. Be specific about what they\'ll get. Example: "Subscribe and hit the bell for weekly cooking tutorials that simplify dinner prep."' },
      { question: 'Should I include my email in the description?', answer: 'Yes, if you\'re open to business inquiries, collaborations, or sponsorships. A professional email address makes your channel appear more established and accessible to potential partners.' },
      { question: 'How often should I update my channel description?', answer: 'Update whenever your content focus, upload schedule, or channel focus changes significantly. Review quarterly to ensure information stays current and relevant.' },
      { question: 'Can my channel description help me get sponsors?', answer: 'Yes. A professional description that clearly states your niche, audience, and engagement makes your channel more attractive to potential sponsors looking for relevant creators.' },
      { question: 'Should my channel description match my videos\' tone?', answer: 'Yes, your description should reflect your channel\'s personality and content style. A comedy channel should sound fun and engaging; a business education channel should sound professional and authoritative.' },
    ],
  },

  'youtube-name-generator': {
    slug: 'youtube-name-generator',
    name: 'YouTube Name Generator',
    title: 'Free AI YouTube Name Generator',
    description: 'Generate creative YouTube channel names that stand out. Our AI creates memorable, brandable names that attract subscribers and reflect your content niche.',
    metaDescription: 'Generate creative YouTube channel names that stand out. Our AI creates memorable, brandable names that attract subscribers and reflect your content niche.',
    inputLabel: 'Describe your channel content...',
    inputPlaceholder: 'e.g. Gaming channel focused on indie games and retro reviews',
    buttonText: 'Generate Names',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Name style',
        choices: ['Creator Name', 'Topic/Niche', 'Creative/Brand', 'Personality + Niche', 'Professional'],
        default: 'Creative/Brand',
        type: 'select',
      },
      {
        name: 'content_type',
        label: 'Content type',
        choices: ['Gaming', 'Education/Tutorial', 'Entertainment', 'Vlog/Lifestyle', 'Tech/Reviews', 'Beauty/Fashion', 'Cooking/Food', 'Fitness', 'Business', 'Other'],
        default: 'Entertainment',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube branding consultant specializing in creating memorable, searchable channel names. Your role is to generate channel name ideas that reflect content focus, are easy to remember, and help build a recognizable YouTube brand.

## YOUTUBE CHANNEL NAME CONSIDERATIONS

**Display Name vs Handle:**
- Display Name: More flexible, can include spaces, up to 100 characters
- Handle: @username format, similar to other platforms, must be unique
- Both contribute to brand identity

## EFFECTIVE CHANNEL NAME PATTERNS

### Pattern 1: Creator Name
- Full name (John Smith)
- First name only (Peter)
- Stylized name (JohnnyVids)
- Best for personal brands

### Pattern 2: Topic/Niche Name
- Describes content clearly
- Examples: TechReviews, DailyGardening, DIYProjects
- Best for topic-focused channels

### Pattern 3: Personality + Niche
- Combines who with what
- Examples: CrazyRussianHacker, AngryCop, LazyGameReviews
- Memorable and descriptive

### Pattern 4: Creative/Brand Name
- Unique coined names
- Examples: Vsauce, Veritasium, Linus Tech Tips
- Requires more branding effort

### Pattern 5: [Name] + [Media Indicator]
- Shows it's a media channel
- Examples: Philip DeFranco, CNN, Vice News
- Professional appearance

### Pattern 6: Question/Action Format
- Engaging, curiosity-driven
- Examples: How It's Made, What If
- Strong for educational content

## CHANNEL NAME QUALITIES

1. **Memorable**: Easy to recall after one exposure
2. **Speakable**: Easy to tell others ("check out [name] on YouTube")
3. **Searchable**: Contains discoverable keywords or is unique enough to find
4. **Scalable**: Allows for content evolution
5. **Brandable**: Works on merchandise, other platforms
6. **Available**: Domain and social handles available

## NICHE-SPECIFIC APPROACHES

**Gaming**: [Name]Plays, [Game]Master, [Adjective]Gamer
**Beauty**: Glam[Name], [Name]Makeup, BeautyBy[Name]
**Tech**: [Name]Tech, TechWith[Name], [Topic]Explained
**Cooking**: [Name]Cooks, [Style]Kitchen, Chef[Name]
**Fitness**: [Name]Fit, [Type]Workouts, TrainWith[Name]
**Education**: [Name]Explains, Learn[Topic], [Subject]School
**Vlog**: [Name]Vlogs, LifeOf[Name], [Name]Daily

## AVAILABILITY CONSIDERATIONS

Check availability on:
- YouTube (as channel and @handle)
- Domain names (.com, .co)
- Major social platforms
- Trademark databases (for serious ventures)

## QUALITY FILTERS

Avoid names that:
- Are too similar to major channels
- Are difficult to spell
- Have unintended meanings
- Are too generic to search for
- Limit future content options

Style: {{style}}
Content Type: {{content_type}}

## OUTPUT FORMAT

Generate names with:
- Channel name option
- Pattern category
- Brief rationale
- Handle variation suggestion`,
    useCases: [
      {
        title: 'Content creators and YouTubers',
        description: 'Aspiring YouTubers use the Name Generator to find unique, memorable channel names tailored to their content niche. Whether gaming, cooking, tech, or lifestyle vlogging, the tool provides suggestions that align with creator brand identity and help establish strong online presence.',
      },
      {
        title: 'Digital marketing agencies',
        description: 'Marketing agencies working with clients launching YouTube channels use the generator to brainstorm names that resonate with target audiences. The tool helps develop channel name ideas that align with client brand, industry, and content focus.',
      },
      {
        title: 'Business brand expansion',
        description: 'Businesses expanding online presence to YouTube use the generator to explore name options for official channels. The tool helps find names that complement existing brand identity while being optimized for YouTube\'s platform.',
      },
    ],
    faqs: [
      { question: 'What makes a good YouTube channel name?', answer: 'Good channel names are memorable, easy to spell and pronounce, relevant to content, unique enough to search for, and flexible enough to allow content evolution. They should work well spoken aloud and as visual branding.' },
      { question: 'Should my channel name describe my content?', answer: 'Descriptive names (TechReviews, DailyGardening) immediately communicate content focus but may limit flexibility. Creative names (Vsauce, MrBeast) are more flexible but require more branding effort. Choose based on your goals.' },
      { question: 'How do I check if a channel name is available?', answer: 'Search YouTube for the exact name, check YouTube\'s @handle availability, search domain registrars for website availability, and check major social platforms for username consistency.' },
      { question: 'Can I change my YouTube channel name later?', answer: 'Yes, you can change your channel display name and handle (with limitations). However, changing names can confuse existing subscribers and affect brand recognition, so choose thoughtfully initially.' },
      { question: 'Should I use my real name for my channel?', answer: 'Using your real name works well for personal brands, expert positioning, and long-term career building. Creative names work better for entertainment-focused content or when building a brand separate from personal identity.' },
      { question: 'How important is the channel name for growth?', answer: 'Your channel name affects first impressions and searchability, but content quality matters more for growth. A clear, memorable name helps, but great content is what actually grows your subscriber base.' },
      { question: 'Should my channel name match my other social media?', answer: 'Consistency across platforms helps followers find you everywhere and strengthens brand recognition. If exact matches aren\'t available, use close variations that are clearly connected.' },
      { question: 'What if my preferred channel name is taken?', answer: 'Try variations: add your niche (Mike Tech Tips), include a descriptor (The Cooking Channel), or create a unique variation. Check if the taken channel is inactive—names from deleted channels eventually become available.' },
      { question: 'Do channel names affect YouTube SEO?', answer: 'Channel names can affect searchability. Names containing relevant keywords may help when users search for that topic. However, unique, brandable names that don\'t contain keywords can still rank well with proper optimization.' },
      { question: 'Should I include "YouTube" in my channel name?', answer: 'Generally no. It\'s redundant since you\'re on YouTube, uses valuable characters, and doesn\'t work well for cross-platform branding. Keep your name platform-agnostic.' },
    ],
  },

  'youtube-video-description-generator': {
    slug: 'youtube-video-description-generator',
    name: 'YouTube Video Description Generator',
    title: 'Free AI YouTube Video Description Generator',
    description: 'Generate SEO-optimized YouTube descriptions that boost views. Our AI creates compelling descriptions with hooks, timestamps, and keywords that help videos rank higher.',
    metaDescription: 'Generate SEO-optimized YouTube descriptions that boost views. Our AI creates compelling descriptions with hooks, timestamps, and keywords that help videos rank higher.',
    inputLabel: 'Describe your video content...',
    inputPlaceholder: 'e.g. Tutorial on how to edit photos in Lightroom for beginners',
    buttonText: 'Generate Description',
    maxLength: 2048,
    options: [
      {
        name: 'video_type',
        label: 'Video type',
        choices: ['Tutorial/Educational', 'Entertainment/Vlog', 'Review/Product', 'Gaming', 'News/Commentary', 'Music/Performance'],
        default: 'Tutorial/Educational',
        type: 'select',
      },
      {
        name: 'include_timestamps',
        label: 'Include timestamps template',
        choices: ['Yes', 'No'],
        default: 'Yes',
        type: 'radio',
      },
    ],
    systemPrompt: `You are an expert YouTube SEO specialist and content strategist. Your role is to create compelling, optimized video descriptions that improve search rankings, provide value to viewers, and drive engagement actions like likes, subscribes, and clicks.

## YOUTUBE VIDEO DESCRIPTION STRUCTURE

**Character Limit**: 5,000 characters
**Visible Preview**: First ~100-200 characters shown before "show more"
**SEO Impact**: Descriptions affect search rankings and suggested video appearances

## OPTIMAL DESCRIPTION ANATOMY

### 1. Above-the-Fold (First 100-200 characters)
- Hook or key value statement
- Primary keywords included
- Reason to watch
- Appears in search results

### 2. Video Summary (Next 150-300 words)
- What the video covers
- Key topics or chapters
- What viewers will learn/see
- Additional context

### 3. Timestamps (If applicable)
- Chapter markers for longer videos
- Improves viewer experience
- Can appear in search results
- Format: 0:00 Introduction

### 4. Links Section
- Mentioned resources
- Product links
- Social media profiles
- Affiliate/sponsor disclosures

### 5. About/Boilerplate
- Brief channel description
- Subscribe CTA
- Regular links

### 6. Tags/Hashtags
- 3-5 relevant hashtags
- Placed at end
- First 3 appear above title

## DESCRIPTION TEMPLATES

**Template 1: Tutorial/Educational**
[Hook: What you'll learn and why it matters]

In this video, I'll show you [main topic]. You'll learn:
✅ [Key point 1]
✅ [Key point 2]
✅ [Key point 3]

Timestamps:
0:00 Introduction
[time] [Topic]
[etc.]

🔗 Resources mentioned:
[Link 1]
[Link 2]

📺 Related videos:
[Related video link]

👋 About [Channel Name]:
[Brief channel description]

Subscribe for more [content type]: [subscribe link]

#hashtag1 #hashtag2 #hashtag3

**Template 2: Entertainment/Vlog**
[Engaging hook about what happens in the video]

[Brief context or story setup]

Don't forget to LIKE and SUBSCRIBE if you enjoyed!

🎬 Featured in this video:
[Person/thing 1]: [link/handle]
[etc.]

📱 Follow me:
Instagram: [link]
TikTok: [link]
Twitter: [link]

📧 Business inquiries: [email]

#hashtag1 #hashtag2 #hashtag3

**Template 3: Review/Product**
[Product name] Review - [Key verdict or hook]

[What's covered in the review and why it matters]

⏱ Timestamps:
0:00 Introduction
[time] Unboxing
[time] Features
[time] Performance
[time] Verdict

🛒 Where to buy:
[Affiliate link with disclosure]

[FTC disclosure if applicable]

📺 More reviews: [Playlist link]

#hashtag1 #hashtag2 #hashtag3

## SEO OPTIMIZATION

- Include primary keyword in first 25 words
- Use secondary keywords naturally throughout
- Front-load important information
- Include variations and related terms
- Don't keyword stuff—write for humans

Video Type: {{video_type}}
Include Timestamps: {{include_timestamps}}

## OUTPUT OPTIONS

- Include/exclude timestamps template
- Include/exclude hashtags
- Concise vs. detailed format
- Specify link placeholders`,
    useCases: [
      {
        title: 'SEO-optimized video descriptions',
        description: 'YouTubers use the Video Description Generator to create descriptions that improve search rankings and visibility. By inputting video content, target keywords, and key points, the tool generates SEO-friendly descriptions that help videos rank higher in YouTube and Google search results.',
      },
      {
        title: 'Efficient bulk video description creation',
        description: 'Creators managing multiple videos use the generator to streamline description creation. The tool allows inputting basic information and generates customized descriptions for batches of videos, saving time while maintaining consistency and quality across content.',
      },
      {
        title: 'Increased viewer engagement',
        description: 'Creators looking to improve engagement metrics use the generator to create descriptions with clear calls-to-action, helpful timestamps, and compelling reasons to watch. Well-structured descriptions encourage likes, subscribes, and click-through to related content.',
      },
    ],
    faqs: [
      { question: 'How long should a YouTube video description be?', answer: 'YouTube allows up to 5,000 characters. Aim for at least 200-300 words for SEO benefits. The first 100-200 characters are most important as they appear in search results, so front-load key information.' },
      { question: 'What should I put in the first line of my description?', answer: 'Include your primary keyword and a compelling hook that tells viewers what they\'ll get from the video. This text appears in search results and affects click-through rate.' },
      { question: 'How do timestamps in descriptions work?', answer: 'Timestamps create clickable chapters in your video. Format as "0:00 Introduction" with time and label. YouTube automatically creates chapter markers when timestamps are properly formatted.' },
      { question: 'Should I include hashtags in video descriptions?', answer: 'Yes, 3-5 relevant hashtags at the end of your description. The first three hashtags appear above your video title, increasing discoverability for those topics.' },
      { question: 'How do video descriptions affect SEO?', answer: 'Descriptions help YouTube understand your video content for search and recommendations. Including relevant keywords, comprehensive information, and proper formatting improves ranking potential.' },
      { question: 'Should every video have the same description format?', answer: 'Having a consistent structure (like your channel info at the end) is good, but adapt the main description to each video\'s specific content. Avoid copying identical descriptions across videos.' },
      { question: 'What links should I include in descriptions?', answer: 'Include: resources mentioned in the video, relevant product links (with affiliate disclosure if applicable), your social media profiles, subscribe link, and links to related videos or playlists.' },
      { question: 'How do I disclose affiliate links properly?', answer: 'Include clear disclosure like "Some links above are affiliate links, meaning I earn a commission if you purchase at no extra cost to you." Place this near the affiliate links for transparency.' },
      { question: 'Do I need to write different descriptions for similar videos?', answer: 'Yes, each video should have a unique description. Duplicate descriptions across videos can hurt SEO and don\'t provide specific value to viewers of each individual video.' },
      { question: 'How often should I update video descriptions?', answer: 'Update descriptions when links change, content becomes outdated, or you want to add new CTAs. For evergreen content, occasional updates can also refresh SEO performance.' },
    ],
  },

  'rewording-tool': {
    slug: 'rewording-tool',
    name: 'Rewording Tool',
    title: 'Free AI Rewording Tool',
    description: 'Reword and rephrase text instantly with our AI tool. Transform sentences and paragraphs to improve clarity, change tone, or create unique content.',
    metaDescription: 'Reword and rephrase text instantly with our AI tool. Transform sentences and paragraphs to improve clarity, change tone, or create unique content.',
    inputLabel: 'Enter text to reword...',
    inputPlaceholder: 'Paste your text here to reword it...',
    buttonText: 'Reword Text',
    maxLength: 4096,
    options: [
      {
        name: 'tone',
        label: 'Target tone',
        choices: ['Formal/Professional', 'Casual/Conversational', 'Academic/Scholarly', 'Creative/Engaging', 'Simplified/Plain'],
        default: 'Casual/Conversational',
        type: 'select',
      },
      {
        name: 'intensity',
        label: 'Reword intensity',
        choices: ['Light (Subtle changes)', 'Medium (Balanced)', 'Heavy (Significant transformation)'],
        default: 'Medium (Balanced)',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert editor and writing assistant specializing in rephrasing, rewording, and improving text clarity. Your role is to transform input text while preserving meaning, improving readability, and adapting tone as needed.

## REWORDING OBJECTIVES

1. **Clarity Enhancement**: Make complex text more understandable
2. **Tone Adjustment**: Shift between formal, casual, academic, professional
3. **Uniqueness**: Create original phrasing while preserving meaning
4. **Conciseness**: Remove wordiness without losing information
5. **Engagement**: Make text more compelling and readable

## REWORDING APPROACHES

### 1. Synonym Replacement
- Swap words with equivalent alternatives
- Maintain meaning and context
- Improve vocabulary variety

### 2. Sentence Restructuring
- Change sentence construction
- Vary sentence length
- Improve flow and rhythm

### 3. Active/Passive Voice Shifts
- Convert passive to active for directness
- Or active to passive for formal tone
- Based on desired style

### 4. Simplification
- Break complex sentences
- Replace jargon with plain language
- Improve accessibility

### 5. Expansion
- Add detail or explanation
- Enhance sparse content
- Improve comprehensiveness

### 6. Condensation
- Remove redundancy
- Eliminate filler words
- Tighten prose

## TONE OPTIONS

### IF tone = "Formal/Professional"
- Sophisticated vocabulary
- Complete sentences
- No contractions
- Objective language

### IF tone = "Casual/Conversational"
- Natural flow
- Contractions okay
- Relatable language
- Personal pronouns

### IF tone = "Academic/Scholarly"
- Technical precision
- Citation-ready style
- Passive voice acceptable
- Formal structure

### IF tone = "Creative/Engaging"
- Vivid language
- Varied rhythm
- Emotional resonance
- Memorable phrasing

### IF tone = "Simplified/Plain"
- Short sentences
- Common words
- Clear structure
- Easy comprehension

## EDITING OPTIONS

### Light Reword
- Minimal changes
- Key phrase updates
- Subtle improvements

### Medium Reword
- Balanced restructuring
- Moderate phrasing changes
- Noticeable but faithful

### Heavy Reword
- Significant restructuring
- Major phrasing changes
- Complete transformation

Tone: {{tone}}
Intensity: {{intensity}}

## QUALITY GUIDELINES

1. **Preserve Meaning**: Core message must remain intact
2. **Maintain Accuracy**: Facts and data unchanged
3. **Keep Context**: Appropriate for original purpose
4. **Natural Flow**: Should read smoothly
5. **Original Output**: Not just word-for-word synonyms

## OUTPUT FORMAT

Provide reworded text that:
- Matches requested tone
- Achieves specified goal (clarity, uniqueness, etc.)
- Maintains original meaning
- Reads naturally and fluently
- Is ready to use

If multiple variants requested:
- Provide clearly labeled alternatives
- Explain key differences
- Note strengths of each version`,
    useCases: [
      {
        title: 'Content creation and SEO',
        description: 'Content creators and SEO professionals use the Rewording Tool to create unique versions of existing content. This helps avoid duplicate content issues while generating fresh, original pieces that improve website search engine rankings.',
      },
      {
        title: 'Academic and research writing',
        description: 'Students, researchers, and academics use the Rewording Tool to paraphrase content from various sources while conducting research or writing papers. The tool helps rewrite findings, quotes, or information in their own words while maintaining accuracy and avoiding plagiarism.',
      },
      {
        title: 'Social media and marketing content',
        description: 'Marketers and social media managers use the Rewording Tool to create unique variations of product descriptions, promotional content, or social media posts. Rephrasing marketing messages helps capture audience attention and allows testing different approaches across platforms.',
      },
    ],
    faqs: [
      { question: 'What is a rewording tool?', answer: 'A rewording tool helps rephrase text by replacing words with synonyms, restructuring sentences, or changing writing style while preserving the original meaning. It\'s useful for creating unique content, improving clarity, or adapting tone.' },
      { question: 'Is rewording the same as paraphrasing?', answer: 'They\'re very similar. Both involve expressing the same ideas in different words. Rewording often refers to smaller-scale changes (sentences or paragraphs), while paraphrasing sometimes implies summarizing or more significant transformation.' },
      { question: 'How is this different from just using synonyms?', answer: 'Quality rewording goes beyond simple synonym replacement. It restructures sentences, changes grammatical constructions, varies sentence length, and improves flow—resulting in text that reads naturally, not robotically.' },
      { question: 'Can I use reworded content without plagiarism concerns?', answer: 'Rewording helps create unique phrasing, but you should still cite original sources for ideas that aren\'t your own. The tool helps with expression, but proper attribution for concepts and research remains important.' },
      { question: 'What types of text can I reword?', answer: 'You can reword any text: articles, blog posts, essays, product descriptions, emails, social media content, academic papers, marketing copy, and more. The tool adapts to different content types.' },
      { question: 'How do I get better rewording results?', answer: 'Provide clear context about your goal (clarity, formality, uniqueness), specify the desired tone, and indicate whether you want light editing or significant transformation. The more specific your request, the better the output.' },
      { question: 'Will rewording change the meaning of my text?', answer: 'Quality rewording preserves the core meaning while changing expression. However, always review reworded text to ensure it accurately conveys your intended message, especially for technical or specialized content.' },
      { question: 'Can this tool make my writing more formal or casual?', answer: 'Yes, tone adjustment is a key feature. You can transform casual writing into professional language for business documents, or make formal text more conversational for social media and blogs.' },
      { question: 'How is this different from grammar checking?', answer: 'Grammar checkers fix errors in existing text. Rewording tools transform how ideas are expressed, creating new versions of content. They serve different purposes but can be used together for polished results.' },
      { question: 'Should I always accept the reworded version?', answer: 'No, always review and edit. AI rewording is a starting point that may need refinement. Use your judgment to ensure the final version accurately reflects your voice, maintains accuracy, and fits your specific context.' },
    ],
  },

  'youtube-video-title-generator': {
    slug: 'youtube-video-title-generator',
    name: 'YouTube Video Title Generator',
    title: 'Free AI YouTube Video Title Generator',
    description: 'Generate click-worthy YouTube video titles that get views. Our AI creates SEO-optimized titles that attract viewers and boost your video performance.',
    metaDescription: 'Generate click-worthy YouTube video titles that get views. Our AI creates SEO-optimized titles that attract viewers and boost your video performance.',
    inputLabel: 'Describe your video topic...',
    inputPlaceholder: 'e.g. Lightroom tutorial for editing portrait photos',
    buttonText: 'Generate Titles',
    maxLength: 2048,
    options: [
      {
        name: 'style',
        label: 'Title style',
        choices: ['Informative/Clear', 'Catchy/Clickbait', 'Question', 'List/Numbers', 'How-to'],
        default: 'Informative/Clear',
        type: 'select',
      },
      {
        name: 'video_type',
        label: 'Video type',
        choices: ['Tutorial/Educational', 'Entertainment/Vlog', 'Review/Product', 'Gaming', 'News/Commentary'],
        default: 'Tutorial/Educational',
        type: 'select',
      },
    ],
    systemPrompt: `You are an expert YouTube content strategist specializing in creating compelling, click-worthy video titles. Your role is to generate title ideas that maximize click-through rates while accurately representing video content and following YouTube SEO best practices.

## YOUTUBE TITLE FUNDAMENTALS
**Character Limit**: 100 characters (60-70 recommended for full visibility)
**SEO Impact**: Titles are the primary ranking factor for YouTube search
**CTR Impact**: Titles directly affect whether viewers click on your video

## EFFECTIVE TITLE PATTERNS

### Pattern 1: How-To/Tutorial
- "How to [Achieve Result] in [Timeframe]"
- "The Complete Guide to [Topic]"
- "[Number] Ways to [Achieve Result]"

### Pattern 2: List/Number-Based
- "[Number] [Things] You Didn't Know About [Topic]"
- "Top [Number] [Category] of [Year]"
- "[Number] Mistakes to Avoid When [Doing Something]"

### Pattern 3: Question-Based
- "Why Does [Thing] [Do Something]?"
- "Is [Thing] Worth It in [Year]?"
- "What Happens When [Scenario]?"

### Pattern 4: Curiosity/Hook
- "I Tried [Thing] for [Time Period] - Here's What Happened"
- "The Truth About [Topic]"
- "[Unexpected Result] Changed Everything"

### Pattern 5: Direct/Clear
- "[Topic] Explained in [Time]"
- "[Product] Review: [Key Verdict]"
- "[Topic] Tutorial for Beginners"

## TITLE OPTIMIZATION TIPS
1. **Front-load keywords**: Put main keyword in first 3-4 words
2. **Create curiosity**: Make viewers want to know more
3. **Be specific**: Vague titles get fewer clicks
4. **Use numbers**: Specific numbers outperform general claims
5. **Match search intent**: Title should match what people search for
6. **Avoid clickbait**: Title must accurately represent content
7. **Consider thumbnail**: Title + thumbnail work together

## POWER WORDS FOR CTR
- Ultimate, Complete, Essential
- Secrets, Hidden, Unknown
- Mistakes, Avoid, Never
- Easy, Simple, Quick
- Proven, Tested, Works
- Free, Best, Top

Style: {{style}}
Video Type: {{video_type}}

## OUTPUT FORMAT
Generate 8-10 title options that are:
- Under 60 characters when possible
- Keyword-optimized
- Click-worthy but not misleading
- Appropriate for the content type
- Varied in approach

For each title, briefly explain why it works.`,
    useCases: [
      {
        title: 'Click-through rate optimization',
        description: 'YouTube creators use the Video Title Generator to craft titles that maximize click-through rates. By entering video topic and target keywords, the tool generates title options designed to attract viewers while accurately representing content.',
      },
      {
        title: 'Video SEO improvement',
        description: 'YouTubers looking to improve search rankings use the generator to create keyword-optimized titles. The tool helps identify the best ways to structure titles for search visibility while maintaining viewer appeal.',
      },
      {
        title: 'A/B testing titles',
        description: 'Creators testing different title approaches use the generator to produce multiple variations. This enables testing which title styles resonate best with their audience and generate the most views.',
      },
    ],
    faqs: [
      { question: 'How long should a YouTube video title be?', answer: 'YouTube allows up to 100 characters, but aim for 60-70 characters for full visibility in search results. Longer titles may get cut off depending on device and context.' },
      { question: 'How do I create catchy YouTube titles?', answer: 'Use power words, numbers, questions, or curiosity. Be specific about what viewers will get. Combine clarity with intrigue—viewers should know what the video is about while wanting to learn more.' },
      { question: 'Does the title affect YouTube SEO?', answer: 'Yes, titles are one of the most important ranking factors. Include your main keyword in the first 3-4 words and use language that matches what viewers search for.' },
      { question: 'Should I use capitalization in my titles?', answer: 'Title case (capitalizing first letter of each word) is common and professional. ALL CAPS can look spammy. Sentence case works for casual titles. Be consistent with your brand style.' },
      { question: 'How do I avoid clickbait titles?', answer: 'Ensure your title accurately represents the content. Curiosity is fine; deception is not. Viewers who click and leave quickly hurt your ranking.' },
      { question: 'Can I change my YouTube titles after publishing?', answer: 'Yes, you can change titles anytime. Some creators test different titles to optimize performance. However, frequent changes may temporarily affect ranking.' },
      { question: 'Should I include the year in my titles?', answer: 'Including the year (e.g., "Best Tools of 2024") can boost clicks for timely content but will require updates. Use for time-sensitive topics; avoid for evergreen content.' },
      { question: 'How does the title work with the thumbnail?', answer: 'Title and thumbnail should complement each other, not repeat. If your thumbnail shows a reaction, your title can explain why. Together they should tell a compelling story.' },
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
