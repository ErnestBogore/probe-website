import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { getToolBySlug, buildPrompt } from '@/lib/ai-tools/tools-config';
import { getBusinessNameGeneratorBySlug } from '@/lib/ai-tools/business-name-generators-config';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { toolSlug, input, options } = await req.json();

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
