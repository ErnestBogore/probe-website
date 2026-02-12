import { getDataForSeoClient, DataForSeoError } from '@/lib/seo-tools/dataforseo-client';
import { checkRateLimit, getClientIp } from '@/lib/seo-tools/rate-limiter';

export const runtime = 'edge';

interface RankedKeywordsMetrics {
  organic: {
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
  };
}

interface RankedKeywordsResult {
  target: string;
  total_count: number;
  items_count: number;
  metrics: RankedKeywordsMetrics;
  items: unknown[];
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'ai-visibility-checker');
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

    // Two parallel calls: one with AI overview filter, one without
    const [aiResponse, allResponse] = await Promise.all([
      // Call 1: Keywords where AI Overview appears in SERP
      client.post<RankedKeywordsResult>(
        '/dataforseo_labs/google/ranked_keywords/live',
        [{
          target: domain,
          location_code: 2840,
          language_code: 'en',
          filters: ['keyword_data.serp_info.serp_item_types', 'has', 'ai_overview'],
          limit: 1,
        }]
      ),
      // Call 2: All ranked keywords (no filter)
      client.post<RankedKeywordsResult>(
        '/dataforseo_labs/google/ranked_keywords/live',
        [{
          target: domain,
          location_code: 2840,
          language_code: 'en',
          limit: 1,
        }]
      ),
    ]);

    const aiResult = aiResponse.tasks?.[0]?.result?.[0];
    const allResult = allResponse.tasks?.[0]?.result?.[0];

    if (!allResult) {
      return new Response(
        JSON.stringify({ error: 'No data found for this domain.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const totalKeywords = allResult.total_count || 0;
    const aiKeywords = aiResult?.total_count || 0;

    if (totalKeywords === 0) {
      return new Response(
        JSON.stringify({ error: 'This domain has no ranked keywords in our database.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // AI Overview exposure rate
    const exposureRate = Math.round((aiKeywords / totalKeywords) * 1000) / 10; // one decimal

    // Organic metrics for AI-affected keywords
    const aiOrganic = aiResult?.metrics?.organic;
    const allOrganic = allResult.metrics?.organic;

    const aiTraffic = Math.round(aiOrganic?.etv || 0);
    const allTraffic = Math.round(allOrganic?.etv || 0);
    const aiTrafficCost = Math.round(aiOrganic?.estimated_paid_traffic_cost || 0);

    // Position distribution for AI-affected keywords
    const aiPos1 = aiOrganic?.pos_1 || 0;
    const aiPos2_3 = aiOrganic?.pos_2_3 || 0;
    const aiPos4_10 = aiOrganic?.pos_4_10 || 0;
    const aiTop10 = aiPos1 + aiPos2_3 + aiPos4_10;

    // AI Visibility Score (0-100)
    // Higher exposure = more of your keywords face AI Overviews (higher risk but also opportunity)
    // Weighted by: exposure rate (40%), traffic concentration in top 10 for AI keywords (30%), overall scale (30%)
    const exposureComponent = Math.min(40, exposureRate * 0.6);
    const topPositionComponent = aiTop10 > 0
      ? Math.min(30, Math.log10(Math.max(aiTop10, 1)) * 8)
      : 0;
    const scaleComponent = aiTraffic > 0
      ? Math.min(30, Math.log10(Math.max(aiTraffic, 1)) * 5)
      : 0;
    const visibilityScore = Math.min(100, Math.round(exposureComponent + topPositionComponent + scaleComponent));

    const responseData = {
      domainRank: visibilityScore,
      domainName: domain,
      metrics: [
        { label: 'AI Overview Exposure', value: `${exposureRate}%` },
        { label: 'Keywords with AI Overviews', value: aiKeywords },
        { label: 'Traffic at Risk', value: aiTraffic },
      ],
      tableData: [
        { metric: 'Total Ranked Keywords', value: totalKeywords },
        { metric: 'Keywords with AI Overviews', value: aiKeywords },
        { metric: 'AI Overview Exposure Rate', value: `${exposureRate}%` },
        { metric: '#1 Position (AI Keywords)', value: aiPos1 },
        { metric: '#2-3 Position (AI Keywords)', value: aiPos2_3 },
        { metric: '#4-10 Position (AI Keywords)', value: aiPos4_10 },
        { metric: 'Organic Traffic (AI Keywords)', value: aiTraffic },
        { metric: 'Organic Traffic (All)', value: allTraffic },
        { metric: 'Traffic Value (AI Keywords)', value: `$${aiTrafficCost.toLocaleString()}` },
      ],
    };

    return new Response(JSON.stringify(responseData), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=1800',
      },
    });
  } catch (error) {
    console.error('AI visibility checker error:', error);

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
