import { getDataForSeoClient, DataForSeoError } from '@/lib/seo-tools/dataforseo-client';
import { checkRateLimit, getClientIp } from '@/lib/seo-tools/rate-limiter';

export const runtime = 'edge';

interface DomainRankMetrics {
  pos_1: number;
  pos_2_3: number;
  pos_4_10: number;
  pos_11_20: number;
  pos_21_30: number;
  pos_31_40: number;
  pos_41_50: number;
  pos_51_60: number;
  pos_61_70: number;
  pos_71_80: number;
  pos_81_90: number;
  pos_91_100: number;
  etv: number;
  estimated_paid_traffic_cost: number;
  count: number;
  is_new: number;
  is_up: number;
  is_down: number;
  is_lost: number;
}

interface DomainRankOverviewResult {
  target: string;
  items_count: number;
  items: {
    metrics: {
      organic: DomainRankMetrics;
      paid: DomainRankMetrics;
    };
  }[];
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'website-authority');
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

    const { input } = await req.json();

    if (!input || typeof input !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Please enter a valid domain.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Clean domain input (strip protocol and trailing slash)
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

    const client = getDataForSeoClient();

    const response = await client.post<DomainRankOverviewResult>(
      '/dataforseo_labs/google/domain_rank_overview/live',
      [{
        target: domain,
        language_code: 'en',
        location_code: 2840,
      }]
    );

    const result = response.tasks?.[0]?.result?.[0];
    if (!result || !result.items?.length) {
      return new Response(
        JSON.stringify({ error: 'No data found for this domain.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const organic = result.items[0]?.metrics?.organic;
    if (!organic) {
      return new Response(
        JSON.stringify({ error: 'No organic data found for this domain.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Calculate total ranked keywords
    const totalRanked = organic.count || 0;

    // Top-10 keywords = pos_1 + pos_2_3 + pos_4_10
    const top10Keywords = (organic.pos_1 || 0) + (organic.pos_2_3 || 0) + (organic.pos_4_10 || 0);

    // Compute a domain strength score (0-100) based on organic metrics
    // Uses a logarithmic scale of estimated traffic volume
    const etv = organic.etv || 0;
    const domainScore = Math.min(100, Math.round(Math.log10(Math.max(etv, 1)) * 15));

    const responseData = {
      domainRank: domainScore,
      domainName: domain,
      metrics: [
        { label: 'Organic Traffic', value: Math.round(etv) },
        { label: 'Ranked Keywords', value: totalRanked },
        { label: 'Keywords in Pos. 1-10', value: top10Keywords },
      ],
      tableData: [
        { position: '#1', keywords: organic.pos_1 || 0 },
        { position: '#2-3', keywords: organic.pos_2_3 || 0 },
        { position: '#4-10', keywords: organic.pos_4_10 || 0 },
        { position: '#11-20', keywords: organic.pos_11_20 || 0 },
        { position: '#21-30', keywords: organic.pos_21_30 || 0 },
        { position: '#31-40', keywords: organic.pos_31_40 || 0 },
        { position: '#41-50', keywords: organic.pos_41_50 || 0 },
        { position: '#51-60', keywords: organic.pos_51_60 || 0 },
        { position: '#61-70', keywords: organic.pos_61_70 || 0 },
        { position: '#71-80', keywords: organic.pos_71_80 || 0 },
        { position: '#81-90', keywords: organic.pos_81_90 || 0 },
        { position: '#91-100', keywords: organic.pos_91_100 || 0 },
      ],
      trafficCost: organic.estimated_paid_traffic_cost || 0,
    };

    return new Response(JSON.stringify(responseData), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('Website authority error:', error);

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
