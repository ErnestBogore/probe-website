import { getDataForSeoClient, DataForSeoError } from '@/lib/seo-tools/dataforseo-client';
import { checkRateLimit, getClientIp } from '@/lib/seo-tools/rate-limiter';
import { getLanguageCodeForCountry } from '@/lib/seo-tools/country-language-map';

export const runtime = 'edge';

interface SerpOrganicItem {
  type: string;
  rank_absolute: number;
  rank_group: number;
  domain: string;
  url: string;
  title: string;
  description: string;
  breadcrumb: string;
}

interface SerpResult {
  keyword: string;
  check_url: string;
  se_results_count: number;
  items_count: number;
  items: SerpOrganicItem[];
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'serp-checker');
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

    const response = await client.post<SerpResult>(
      '/serp/google/organic/live/regular',
      [{
        keyword: input,
        location_code: locationCode,
        language_code: languageCode,
        depth: 10,
      }]
    );

    const result = response.tasks?.[0]?.result?.[0];
    if (!result || !result.items?.length) {
      return new Response(
        JSON.stringify({ error: 'No SERP results found for this keyword.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Filter to organic results only
    const organicItems = result.items
      .filter(item => item.type === 'organic')
      .map((item, idx) => ({
        position: idx + 1,
        title: item.title || '',
        url: item.url || '',
        domain: item.domain || '',
        description: (item.description || '').slice(0, 200),
      }));

    const totalResults = result.se_results_count || 0;

    const responseData = {
      keyword: input,
      totalResults,
      metrics: [
        { label: 'Total Results', value: totalResults },
        { label: 'Organic Results', value: organicItems.length },
      ],
      serpItems: organicItems,
      tableData: organicItems.map(item => ({
        position: item.position,
        title: item.title,
        domain: item.domain,
        url: item.url,
      })),
    };

    return new Response(JSON.stringify(responseData), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('SERP checker error:', error);

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
