import { getDataForSeoClient, DataForSeoError } from '@/lib/seo-tools/dataforseo-client';
import { checkRateLimit, getClientIp } from '@/lib/seo-tools/rate-limiter';

export const runtime = 'edge';

interface BingKeywordResult {
  keyword: string;
  location_code: number;
  language_code: string;
  search_partners: boolean;
  device: string;
  competition: number;
  cpc: number;
  search_volume: number;
  categories: string[] | null;
  monthly_searches: {
    year: number;
    month: number;
    search_volume: number;
  }[];
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'bing-keyword-tool');
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

    // Use Bing-specific keywords_for_keywords endpoint for real Bing data
    const response = await client.post<BingKeywordResult>(
      '/keywords_data/bing/keywords_for_keywords/live',
      [{
        keywords: [input],
        location_code: locationCode,
        language_code: 'en',
        limit: 50,
      }]
    );

    const results = response.tasks?.[0]?.result;
    if (!results || results.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No results found for this keyword on Bing.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Results is an array of keyword objects
    const items = (Array.isArray(results) ? results : [results]).map((item: BingKeywordResult) => ({
      keyword: item.keyword || '',
      search_volume: item.search_volume || 0,
      cpc: item.cpc || 0,
      competition: item.competition ? Math.round(item.competition * 100) : 0,
    }));

    const totalKeywords = items.length;
    const avgVolume = totalKeywords > 0
      ? Math.round(items.reduce((sum: number, i: { search_volume: number }) => sum + i.search_volume, 0) / totalKeywords)
      : 0;

    const responseData = {
      metrics: [
        { label: 'Total Keywords', value: totalKeywords },
        { label: 'Avg. Volume', value: avgVolume },
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
    console.error('Bing keyword tool error:', error);

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
