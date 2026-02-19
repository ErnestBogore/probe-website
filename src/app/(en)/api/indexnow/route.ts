import { NextResponse } from 'next/server';

const INDEXNOW_KEY = '1e26ef4cc4c04a20bed5e68ae36b5aa1';
const HOST = 'www.tryanalyze.ai';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

export async function POST(request: Request) {
  try {
    const { urls } = await request.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json(
        { error: 'Please provide an array of URLs' },
        { status: 400 }
      );
    }

    // IndexNow accepts max 10,000 URLs per request
    const batches: string[][] = [];
    for (let i = 0; i < urls.length; i += 10000) {
      batches.push(urls.slice(i, i + 10000));
    }

    const results = [];

    for (const batch of batches) {
      const response = await fetch(INDEXNOW_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          host: HOST,
          key: INDEXNOW_KEY,
          keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
          urlList: batch,
        }),
      });

      results.push({
        status: response.status,
        statusText: response.statusText,
        urlCount: batch.length,
      });
    }

    return NextResponse.json({
      success: true,
      totalUrls: urls.length,
      batches: results,
    });
  } catch (error) {
    console.error('IndexNow submission error:', error);
    return NextResponse.json(
      { error: 'Failed to submit URLs to IndexNow' },
      { status: 500 }
    );
  }
}
