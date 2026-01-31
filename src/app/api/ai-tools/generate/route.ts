import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { getToolBySlug, buildPrompt } from '@/lib/ai-tools/tools-config';
import { getBusinessNameGeneratorBySlug } from '@/lib/ai-tools/business-name-generators-config';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { toolSlug, input, options, locale } = await req.json();

    if (!toolSlug || !input) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: toolSlug and input' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let systemPrompt: string;

    // Check if it's a business name generator tool
    if (toolSlug.startsWith('business-name-generator-')) {
      const generatorSlug = toolSlug.replace('business-name-generator-', '');
      const generator = getBusinessNameGeneratorBySlug(generatorSlug);
      if (!generator) {
        return new Response(
          JSON.stringify({ error: `Tool not found: ${toolSlug}` }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }
      systemPrompt = buildPrompt(generator.systemPrompt, options || {});
    } else {
      const tool = getToolBySlug(toolSlug);
      if (!tool) {
        return new Response(
          JSON.stringify({ error: `Tool not found: ${toolSlug}` }),
          { status: 404, headers: { 'Content-Type': 'application/json' } }
        );
      }
      systemPrompt = buildPrompt(tool.systemPrompt, options || {});
    }

    // Add localized output instruction based on locale
    if (locale === 'fr') {
      systemPrompt += '\n\nIMPORTANT: You MUST generate ALL output content in French (français). All text, titles, descriptions, examples, and explanations must be written in French.';
    } else if (locale === 'de') {
      systemPrompt += '\n\nIMPORTANT: You MUST generate ALL output content in German (Deutsch). All text, titles, descriptions, examples, and explanations must be written in German.';
    } else if (locale === 'es') {
      systemPrompt += '\n\nIMPORTANT: You MUST generate ALL output content in Spanish (español). All text, titles, descriptions, examples, and explanations must be written in Spanish.';
    } else if (locale === 'pt') {
      systemPrompt += '\n\nIMPORTANT: You MUST generate ALL output content in Portuguese (português). All text, titles, descriptions, examples, and explanations must be written in Portuguese.';
    }

    const result = await streamText({
      model: anthropic('claude-haiku-4-5-20251001'),
      system: systemPrompt,
      prompt: input,
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error('AI generation error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to generate content' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
