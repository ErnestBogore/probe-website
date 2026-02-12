import { getDataForSeoClient, DataForSeoError } from '@/lib/seo-tools/dataforseo-client';
import { checkRateLimit, getClientIp } from '@/lib/seo-tools/rate-limiter';

export const runtime = 'edge';

interface OnPageChecks {
  canonical: boolean;
  is_https: boolean;
  has_html_doctype: boolean;
  no_content_encoding: boolean;
  high_loading_time: boolean;
  is_redirect: boolean;
  is_4xx_code: boolean;
  is_5xx_code: boolean;
  is_broken: boolean;
  has_redirect: boolean;
  is_www: boolean;
  no_h1_tag: boolean;
  no_image_alt: boolean;
  no_image_title: boolean;
  has_render_blocking_resources: boolean;
  low_content_rate: boolean;
  no_description: boolean;
  no_title: boolean;
  seo_friendly_url: boolean;
  https_to_http_links: boolean;
  has_meta_refresh_redirect: boolean;
  high_waiting_time: boolean;
  no_favicon: boolean;
  large_page_size: boolean;
  no_encoding_meta_tag: boolean;
  title_too_long: boolean;
  title_too_short: boolean;
  low_character_count: boolean;
  low_readability_rate: boolean;
  irrelevant_description: boolean;
  irrelevant_title: boolean;
  irrelevant_meta_keywords: boolean;
  is_orphan_page: boolean;
  [key: string]: boolean;
}

interface OnPageMeta {
  title: string;
  description: string;
  canonical: string;
  internal_links_count: number;
  external_links_count: number;
  images_count: number;
  scripts_count: number;
  title_length: number;
  description_length: number;
  charset: number;
  follow: boolean;
  favicon: string;
  content: {
    plain_text_word_count: number;
    plain_text_rate: number;
    automated_readability_index: number;
    coleman_liau_readability_index: number;
    dale_chall_readability_index: number;
    flesch_kincaid_readability_index: number;
    smog_readability_index: number;
    description_to_content_consistency: number;
    title_to_content_consistency: number;
    meta_keywords_to_content_consistency: number;
  } | null;
}

interface OnPageItem {
  resource_type: string;
  status_code: number;
  url: string;
  meta: OnPageMeta;
  page_timing: {
    time_to_interactive: number;
    dom_complete: number;
    largest_contentful_paint: number;
    connection_time: number;
    waiting_time: number;
    download_time: number;
    duration_time: number;
  };
  onpage_score: number;
  total_dom_size: number;
  broken_resources: boolean;
  broken_links: boolean;
  resource_errors: {
    errors: { line: number; column: number; message: string; status_code: number }[];
    warnings: { line: number; column: number; message: string; status_code: number }[];
  } | null;
  checks: OnPageChecks;
  size: number;
  encoded_size: number;
  content_encoding: string;
  media_type: string;
  server: string;
}

interface OnPageResult {
  crawl_progress: string;
  crawl_status: {
    pages_crawled: number;
  };
  items_count: number;
  items: OnPageItem[];
}

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const { allowed, retryAfterMs } = checkRateLimit(ip, 'broken-link-checker');
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
        JSON.stringify({ error: 'Please enter a valid URL.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Ensure URL has protocol
    let url = input.trim();
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
      url = `https://${url}`;
    }

    const client = getDataForSeoClient();

    const response = await client.post<OnPageResult>(
      '/on_page/instant_pages',
      [{
        url,
        check_spell: false,
        load_resources: true,
        enable_javascript: false,
        return_despite_timeout: true,
      }]
    );

    const result = response.tasks?.[0]?.result?.[0];
    if (!result || !result.items?.length) {
      return new Response(
        JSON.stringify({ error: 'Could not analyze this URL. Make sure it is accessible.' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const item = result.items[0];
    const meta = item.meta;
    const checks = item.checks || {};
    const timing = item.page_timing;

    // Identify issues from checks
    const issues: { issue: string; severity: string; description: string }[] = [];

    if (item.broken_links) {
      issues.push({ issue: 'Broken Links Found', severity: 'error', description: 'This page contains links that lead to non-existent pages (4xx/5xx errors).' });
    }
    if (item.broken_resources) {
      issues.push({ issue: 'Broken Resources', severity: 'error', description: 'Some resources (images, scripts, stylesheets) failed to load.' });
    }
    if (checks.is_4xx_code) {
      issues.push({ issue: 'Page Returns 4xx Error', severity: 'error', description: `The page returned a ${item.status_code} status code.` });
    }
    if (checks.is_5xx_code) {
      issues.push({ issue: 'Page Returns 5xx Error', severity: 'error', description: `The page returned a ${item.status_code} server error.` });
    }
    if (!checks.is_https) {
      issues.push({ issue: 'Not Using HTTPS', severity: 'warning', description: 'This page is not served over HTTPS, which can hurt rankings and user trust.' });
    }
    if (checks.https_to_http_links) {
      issues.push({ issue: 'Mixed Content (HTTPS to HTTP)', severity: 'warning', description: 'This HTTPS page contains links to HTTP resources.' });
    }
    if (checks.no_title || !meta?.title) {
      issues.push({ issue: 'Missing Title Tag', severity: 'error', description: 'This page has no title tag, which is critical for SEO.' });
    }
    if (checks.title_too_long) {
      issues.push({ issue: 'Title Too Long', severity: 'warning', description: `Title is ${meta?.title_length || 0} characters. Keep it under 60 for best display in search results.` });
    }
    if (checks.title_too_short) {
      issues.push({ issue: 'Title Too Short', severity: 'warning', description: 'Title tag is too short. Aim for 30-60 characters for optimal SEO.' });
    }
    if (checks.no_description || !meta?.description) {
      issues.push({ issue: 'Missing Meta Description', severity: 'warning', description: 'This page has no meta description, which can reduce click-through rates from search results.' });
    }
    if (checks.no_h1_tag) {
      issues.push({ issue: 'Missing H1 Tag', severity: 'warning', description: 'This page has no H1 heading tag. Every page should have exactly one H1.' });
    }
    if (checks.no_image_alt) {
      issues.push({ issue: 'Images Missing Alt Text', severity: 'warning', description: 'Some images on this page are missing alt attributes, which hurts accessibility and image SEO.' });
    }
    if (checks.has_render_blocking_resources) {
      issues.push({ issue: 'Render-Blocking Resources', severity: 'info', description: 'This page has render-blocking scripts or stylesheets that may slow initial loading.' });
    }
    if (checks.low_content_rate) {
      issues.push({ issue: 'Low Content Rate', severity: 'info', description: 'The ratio of text content to HTML code is low. Consider adding more meaningful content.' });
    }
    if (checks.no_favicon) {
      issues.push({ issue: 'Missing Favicon', severity: 'info', description: 'No favicon found. Add one for better brand recognition in browser tabs.' });
    }
    if (checks.large_page_size) {
      issues.push({ issue: 'Large Page Size', severity: 'warning', description: `Page size is ${Math.round((item.size || 0) / 1024)}KB. Large pages load slower.` });
    }
    if (checks.high_loading_time) {
      issues.push({ issue: 'Slow Loading Time', severity: 'warning', description: `Page took ${timing?.duration_time || 0}ms to load. Aim for under 3 seconds.` });
    }

    // If no issues found, add a success message
    if (issues.length === 0) {
      issues.push({ issue: 'No Major Issues Found', severity: 'pass', description: 'This page passed all basic SEO and health checks.' });
    }

    // Resource errors
    const resourceErrors = item.resource_errors?.errors || [];

    const responseData = {
      metrics: [
        { label: 'Page Score', value: Math.round(item.onpage_score || 0) },
        { label: 'Issues Found', value: issues.filter(i => i.severity === 'error' || i.severity === 'warning').length },
        { label: 'Internal Links', value: meta?.internal_links_count || 0 },
        { label: 'External Links', value: meta?.external_links_count || 0 },
      ],
      tableData: issues.map(i => ({
        issue: i.issue,
        severity: i.severity,
        description: i.description,
      })),
      pageInfo: {
        url: item.url,
        statusCode: item.status_code,
        title: meta?.title || '',
        description: meta?.description || '',
        loadTime: timing?.duration_time || 0,
        pageSize: item.size || 0,
        server: item.server || '',
        encoding: item.content_encoding || '',
        imagesCount: meta?.images_count || 0,
        resourceErrorsCount: resourceErrors.length,
      },
    };

    return new Response(JSON.stringify(responseData), {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=1800, stale-while-revalidate=900',
      },
    });
  } catch (error) {
    console.error('Broken link checker error:', error);

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
