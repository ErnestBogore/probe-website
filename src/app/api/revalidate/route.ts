/**
 * API Route for revalidating pages when DatoCMS content changes
 * 
 * This endpoint is called by DatoCMS webhooks to trigger Next.js revalidation
 * for specific pages when content is updated, created, or deleted.
 * 
 * Setup in DatoCMS:
 * 1. Go to Settings > Webhooks
 * 2. Use a custom payload with { "secret": "...", "revalidatePath": "/blog", "slug": "{{entity.slug}}" }
 * 3. Set REVALIDATION_SECRET env var to match the secret in the payload
 */

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('DatoCMS webhook received:', JSON.stringify(body, null, 2));

    // Verify the secret — check both body.secret (custom payload) and ?secret= (query param)
    const secret = body.secret || request.nextUrl.searchParams.get('secret');
    const expectedSecret = process.env.REVALIDATION_SECRET;
    
    if (expectedSecret && secret !== expectedSecret) {
      return NextResponse.json(
        { success: false, error: 'Invalid secret' },
        { status: 401 }
      );
    }

    const revalidatedPaths: string[] = [];

    // Custom payload format: { secret, revalidatePath, slug }
    if (body.revalidatePath) {
      const basePath = body.revalidatePath;
      revalidatePath(basePath);
      revalidatedPaths.push(basePath);

      if (body.slug) {
        revalidatePath(`${basePath}/${body.slug}`);
        revalidatedPaths.push(`${basePath}/${body.slug}`);
      }
    }

    // Default DatoCMS payload format: { event_type, entity_type, entity }
    if (body.entity_type) {
      const entityType = body.entity_type;

      if (entityType === 'blog_post') {
        revalidatePath('/blog');
        revalidatedPaths.push('/blog');
        if (body.entity?.slug) {
          revalidatePath(`/blog/${body.entity.slug}`);
          revalidatedPaths.push(`/blog/${body.entity.slug}`);
        }
      }

      if (entityType === 'prompt_page') {
        revalidatePath('/prompts', 'layout');
        revalidatedPaths.push('/prompts');
      }

      if (entityType === 'case_study') {
        if (body.entity?.slug) {
          revalidatePath(`/case-study/${body.entity.slug}`);
          revalidatedPaths.push(`/case-study/${body.entity.slug}`);
        }
      }
    }
    
    // Fallback: if nothing matched, revalidate everything
    if (revalidatedPaths.length === 0) {
      revalidatePath('/', 'layout');
      revalidatedPaths.push('/ (all pages)');
    }
    
    console.log('Revalidated paths:', revalidatedPaths);
    
    return NextResponse.json({ 
      success: true, 
      revalidatedPaths
    });
    
  } catch (error) {
    console.error('Error processing revalidation webhook:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process revalidation webhook' 
      },
      { status: 500 }
    );
  }
}

// Also handle GET requests for testing
export async function GET() {
  return NextResponse.json({ 
    message: 'Revalidation endpoint is working',
    usage: 'POST to this endpoint with DatoCMS webhook payload to trigger revalidation'
  });
} 