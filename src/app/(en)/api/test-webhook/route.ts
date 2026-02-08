/**
 * Test endpoint for webhook functionality
 * 
 * This endpoint can be used to test if the webhook system is working
 * without triggering actual revalidation.
 */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    console.log('Test webhook received:', JSON.stringify(body, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Test webhook received successfully',
      receivedData: body
    });
    
  } catch (error) {
    console.error('Error processing test webhook:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process test webhook' 
      },
      { status:500  }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    message: 'Test webhook endpoint is working',
    usage: 'POST to this endpoint to test webhook functionality'
  });
} 