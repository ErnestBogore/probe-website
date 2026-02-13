import { getDataForSeoClient, DataForSeoError } from '@/lib/seo-tools/dataforseo-client';
import { checkRateLimit, getClientIp } from '@/lib/seo-tools/rate-limiter';
import { getLanguageCodeForCountry } from '@/lib/seo-tools/country-language-map';

export const runtime = 'edge';

interface KeywordSuggestionsResult {
  seed_keyword_data: {
    keyword: string;
    keyword_info: {
      search_volume: number;
      cpc: number;
      competition: number;
      competition_level: string;
    };
    keyword_properties: {
      keyword_difficulty: number;
    };
  } | null;
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'keyword-difficulty');
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
    const languageCode = getLanguageCodeForCountry(locationCode);
    const client = getDataForSeoClient();

    // Split by comma or newline for multiple keywords, max 10
    const keywords = input
      .split(/[,\n]+/)
      .map((k: string) => k.trim())
      .filter((k: string) => k.length > 0)
      .slice(0, 10);

    // Use keyword_suggestions endpoint which returns seed_keyword_data
    // with volume, CPC, competition AND difficulty all in one call
    const responses = await Promise.all(
      keywords.map(kw =>
        client.post<KeywordSuggestionsResult>(
          '/dataforseo_labs/google/keyword_suggestions/live',
          [{
            keyword: kw,
            location_code: locationCode,
            language_code: languageCode,
            include_seed_keyword: true,
            limit: 1, // We only need the seed keyword data
          }]
        )
      )
    );

    const items = responses
      .map(resp => {
        const seed = resp.tasks?.[0]?.result?.[0]?.seed_keyword_data;
        if (!seed) return null;
        return {
          keyword: seed.keyword,
          keyword_difficulty: seed.keyword_properties?.keyword_difficulty || 0,
          search_volume: seed.keyword_info?.search_volume || 0,
          cpc: seed.keyword_info?.cpc || 0,
          competition: seed.keyword_info?.competition
            ? Math.round(seed.keyword_info.competition * 100)
            : 0,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null);

    if (items.length === 0) {
      return new Response(
        JSON.stringify({ error: 'No difficulty data found for this keyword.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Primary keyword metrics (first keyword)
    const primary = items[0];

    const responseData = {
      difficultyScore: primary.keyword_difficulty,
      difficultyKeyword: primary.keyword,
      metrics: [
        { label: 'Search Volume', value: primary.search_volume.toLocaleString() },
        { label: 'CPC', value: `$${primary.cpc.toFixed(2)}` },
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
    console.error('Keyword difficulty error:', error);

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
