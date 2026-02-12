import { getDataForSeoClient, DataForSeoError } from '@/lib/seo-tools/dataforseo-client';
import { checkRateLimit, getClientIp } from '@/lib/seo-tools/rate-limiter';

export const runtime = 'edge';

interface KeywordIdeasResult {
  seed_keyword: string;
  items_count: number;
  items: {
    keyword: string;
    search_volume: number;
    keyword_info: {
      search_volume: number;
      cpc: number;
      competition: number;
      competition_level: string;
    };
    keyword_properties: {
      keyword_difficulty: number;
    };
  }[];
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'amazon-keyword-tool');
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(Math.ceil((retryAfterMs || 60000) / 1000)),
          },
        }
      );
    }

    const { input, options } = await req.json();

    if (!input || typeof input !== 'string' || input.length > 200) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid keyword (max 200 characters).' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const locationCode = Number(options?.country) || 2840;
    const client = getDataForSeoClient();

    const response = await client.post<KeywordIdeasResult>(
      '/dataforseo_labs/google/keyword_ideas/live',
      [{
        keywords: [input],
        location_code: locationCode,
        language_code: 'en',
        include_seed_keyword: true,
        limit: 50,
      }]
    );

    const result = response.tasks?.[0]?.result?.[0];
    if (!result) {
      return new Response(
        JSON.stringify({ error: 'No results found for this keyword.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const items = (result.items || []).map(item => ({
      keyword: item.keyword,
      search_volume: item.keyword_info?.search_volume || 0,
      keyword_difficulty: item.keyword_properties?.keyword_difficulty || 0,
      cpc: item.keyword_info?.cpc || 0,
      competition: item.keyword_info?.competition ? Math.round(item.keyword_info.competition * 100) : 0,
    }));

    const totalKeywords = items.length;
    const avgVolume = totalKeywords > 0
      ? Math.round(items.reduce((sum, i) => sum + i.search_volume, 0) / totalKeywords)
      : 0;
    const avgDifficulty = totalKeywords > 0
      ? Math.round(items.reduce((sum, i) => sum + i.keyword_difficulty, 0) / totalKeywords)
      : 0;

    const responseData = {
      metrics: [
        { label: 'Total Keywords', value: totalKeywords },
        { label: 'Avg. Volume', value: avgVolume },
        { label: 'Avg. Difficulty', value: avgDifficulty },
      ],
      tableData: items,
    };

    return new Response(JSON.stringify(responseData), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('Amazon keyword tool error:', error);

    if (error instanceof DataForSeoError) {
      return new Response(
        JSON.stringify({ error: `API error: ${error.message}` }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'An unexpected error occurred. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
