import { getDataForSeoClient, DataForSeoError } from '@/lib/seo-tools/dataforseo-client';
import { checkRateLimit, getClientIp } from '@/lib/seo-tools/rate-limiter';
import { getLanguageCodeForCountry } from '@/lib/seo-tools/country-language-map';

export const runtime = 'edge';

interface RankedKeywordItem {
  keyword_data: {
    keyword: string;
    keyword_info: {
      search_volume: number;
      cpc: number | null;
      competition: number;
      competition_level: string;
    };
  };
  ranked_serp_element: {
    serp_item: {
      rank_absolute: number;
      rank_group: number;
      url: string;
      title: string;
      domain: string;
      etv: number;
      estimated_paid_traffic_cost: number;
    };
  };
}

interface RankedKeywordsResult {
  target: string;
  location_code: number;
  language_code: string;
  total_count: number;
  items_count: number;
  items: RankedKeywordItem[];
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'keyword-rank-checker');
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

    const { input, options, secondaryInput } = await req.json();

    if (!input || typeof input !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid domain.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Clean domain input
    const domain = input
      .replace(/^https?:\/\//, '')
      .replace(/\/.*$/, '')
      .replace(/^www\./, '')
      .trim()
      .toLowerCase();

    if (!domain || domain.length > 253) {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid domain.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const locationCode = Number(options?.country) || 2840;
    const languageCode = getLanguageCodeForCountry(locationCode);
    const client = getDataForSeoClient();

    // Build filters if a keyword is specified
    const requestBody: Record<string, unknown> = {
      target: domain,
      location_code: locationCode,
      language_code: languageCode,
      limit: 50,
      order_by: ['ranked_serp_element.serp_item.rank_group,asc'],
    };

    // If user entered a keyword filter, use it
    if (secondaryInput && typeof secondaryInput === 'string' && secondaryInput.trim()) {
      requestBody.filters = [
        'keyword_data.keyword', 'like', `%${secondaryInput.trim()}%`,
      ];
    }

    const response = await client.post<RankedKeywordsResult>(
      '/dataforseo_labs/google/ranked_keywords/live',
      [requestBody]
    );

    const result = response.tasks?.[0]?.result?.[0];
    if (!result || !result.items?.length) {
      return new Response(
        JSON.stringify({ error: 'No ranking data found for this domain.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const totalRanked = result.total_count || 0;

    const items = result.items.map(item => {
      const kw = item.keyword_data;
      const serp = item.ranked_serp_element?.serp_item;
      return {
        keyword: kw?.keyword || '',
        position: serp?.rank_absolute || 0,
        url: serp?.url || '',
        search_volume: kw?.keyword_info?.search_volume || 0,
        cpc: kw?.keyword_info?.cpc || 0,
        traffic: Math.round(serp?.etv || 0),
      };
    });

    // Count by position buckets
    const top3 = items.filter(i => i.position <= 3).length;
    const top10 = items.filter(i => i.position <= 10).length;
    const top50 = items.filter(i => i.position <= 50).length;

    const responseData = {
      metrics: [
        { label: 'Total Keywords', value: totalRanked },
        { label: 'Top 3', value: top3 },
        { label: 'Top 10', value: top10 },
        { label: 'Top 50', value: top50 },
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
    console.error('Keyword rank checker error:', error);

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
