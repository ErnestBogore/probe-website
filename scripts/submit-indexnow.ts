/**
 * Bulk submit all sitemap URLs to IndexNow (Bing, Yandex, etc.)
 *
 * Usage:
 *   npx tsx scripts/submit-indexnow.ts
 *
 * This script:
 * 1. Fetches the sitemap from tryanalyze.ai
 * 2. Extracts all URLs
 * 3. Submits them to IndexNow in batches of 10,000
 */

const INDEXNOW_KEY = '1e26ef4cc4c04a20bed5e68ae36b5aa1';
const HOST = 'www.tryanalyze.ai';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

async function fetchSitemapUrls(): Promise<string[]> {
  console.log(`📡 Fetching sitemap from ${SITEMAP_URL}...`);
  const response = await fetch(SITEMAP_URL);
  const xml = await response.text();

  // Extract all <loc> URLs from the sitemap XML
  const urls: string[] = [];
  const locRegex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = locRegex.exec(xml)) !== null) {
    urls.push(match[1]);
  }

  console.log(`✅ Found ${urls.length} URLs in sitemap\n`);
  return urls;
}

async function submitToIndexNow(urls: string[]): Promise<void> {
  // IndexNow accepts max 10,000 URLs per request
  const batchSize = 10000;
  const totalBatches = Math.ceil(urls.length / batchSize);

  for (let i = 0; i < urls.length; i += batchSize) {
    const batch = urls.slice(i, i + batchSize);
    const batchNumber = Math.floor(i / batchSize) + 1;

    console.log(
      `📤 Submitting batch ${batchNumber}/${totalBatches} (${batch.length} URLs)...`
    );

    const payload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: batch,
    };

    try {
      const response = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`   Status: ${response.status} ${response.statusText}`);

      if (response.status === 200 || response.status === 202) {
        console.log(`   ✅ Batch ${batchNumber} submitted successfully`);
      } else {
        const body = await response.text();
        console.log(`   ⚠️  Response body: ${body}`);
      }
    } catch (error) {
      console.error(`   ❌ Error submitting batch ${batchNumber}:`, error);
    }

    // Small delay between batches
    if (i + batchSize < urls.length) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}

async function main() {
  console.log('🔍 IndexNow Bulk URL Submission');
  console.log('================================\n');

  const urls = await fetchSitemapUrls();

  if (urls.length === 0) {
    console.log('❌ No URLs found in sitemap. Exiting.');
    return;
  }

  // Show first few URLs as preview
  console.log('Preview of URLs to submit:');
  urls.slice(0, 5).forEach((url) => console.log(`  ${url}`));
  if (urls.length > 5) {
    console.log(`  ... and ${urls.length - 5} more\n`);
  }

  await submitToIndexNow(urls);

  console.log('\n================================');
  console.log(`🎉 Done! Submitted ${urls.length} URLs to IndexNow.`);
  console.log(
    'Bing, Yandex, and other search engines will now crawl these URLs.'
  );
}

main().catch(console.error);
