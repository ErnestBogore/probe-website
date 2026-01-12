import { anthropic } from '@ai-sdk/anthropic';
import { streamText } from 'ai';
import { getToolBySlug, buildPrompt } from '@/lib/ai-tools/tools-config';

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

    const tool = getToolBySlug(toolSlug);
    if (!tool) {
      return new Response(
        JSON.stringify({ error: `Tool not found: ${toolSlug}` }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const systemPrompt = buildPrompt(tool.systemPrompt, options || {});

    const result = await streamText({
      model: anthropic('claude-3-5-haiku-latest'),
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
