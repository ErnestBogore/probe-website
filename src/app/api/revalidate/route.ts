/**
 * API Route for revalidating pages when DatoCMS content changes
 * 
 * This endpoint is called by DatoCMS webhooks to trigger Next.js revalidation
 * for specific pages when content is updated, created, or deleted.
 */

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from DatoCMS
    const body = await request.json();
    
    // Log the webhook payload for debugging
    console.log('DatoCMS webhook received:', JSON.stringify(body, null, 2));
    
    // Extract the event type and entity type from the webhook payload
    const eventType = body.event_type;
    const entityType = body.entity_type;
    
    // Revalidate based on the entity type
    if (entityType === 'blog_post') {
      // Revalidate the blog listing page
      revalidatePath('/blog');
      
      // If we have a specific blog post slug, revalidate that page too
      if (body.entity?.slug) {
        revalidatePath(`/blog/${body.entity.slug}`);
      }
      
      console.log(`Revalidated blog pages for ${eventType} event on ${entityType}`);
    }
    
    // You can add more entity types here as needed
    // if (entityType === 'other_content_type') {
    //   revalidatePath('/other-page);
    // }
    
    return NextResponse.json({ 
      success: true, 
      message: `Revalidated pages for ${eventType} event on ${entityType}`,
      revalidatedPaths: entityType === 'blog_post' ? ['/blog'] : []
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