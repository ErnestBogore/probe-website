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
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'traffic-checker');
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
    const paid = result.items[0]?.metrics?.paid;

    if (!organic) {
      return new Response(
        JSON.stringify({ error: 'No traffic data found for this domain.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const organicTraffic = Math.round(organic.etv || 0);
    const paidTraffic = Math.round(paid?.etv || 0);
    const totalKeywords = organic.count || 0;
    const trafficCost = Math.round(organic.estimated_paid_traffic_cost || 0);

    // Keyword movement data
    const newKeywords = organic.is_new || 0;
    const improved = organic.is_up || 0;
    const declined = organic.is_down || 0;
    const lost = organic.is_lost || 0;

    const top3 = (organic.pos_1 || 0) + (organic.pos_2_3 || 0);
    const top10 = top3 + (organic.pos_4_10 || 0);

    const responseData = {
      metrics: [
        { label: 'Organic Traffic', value: organicTraffic },
        { label: 'Paid Traffic', value: paidTraffic },
        { label: 'Total Keywords', value: totalKeywords },
        { label: 'Traffic Value', value: `$${trafficCost.toLocaleString()}` },
      ],
      tableData: [
        { metric: 'Keywords in Top 3', value: top3 },
        { metric: 'Keywords in Top 10', value: top10 },
        { metric: 'New Keywords', value: newKeywords },
        { metric: 'Improved Rankings', value: improved },
        { metric: 'Declined Rankings', value: declined },
        { metric: 'Lost Rankings', value: lost },
      ],
    };

    return new Response(JSON.stringify(responseData), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('Website traffic checker error:', error);

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
