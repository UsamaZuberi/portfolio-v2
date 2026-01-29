/**
 * API Route: Get All Project Images from Vercel Blob
 *
 * Endpoint: /api/projects/images
 * Method: GET
 *
 * Returns all images grouped by project from Vercel Blob storage.
 */

import { NextResponse } from 'next/server';
import { getAllProjectImages, isBlobConfigured } from '@/lib/blob';

export async function GET() {
  try {
    // Check if blob is configured
    if (!isBlobConfigured()) {
      return NextResponse.json(
        {
          error:
            'Blob storage is not configured. Please set portfolio_v2_images_READ_WRITE_TOKEN in your environment variables.',
        },
        { status: 503 }
      );
    }

    const images = await getAllProjectImages();

    return NextResponse.json({
      images,
      projectCount: Object.keys(images).length,
    });
  } catch (error) {
    console.error('Error in all project images API:', error);
    return NextResponse.json({ error: 'Failed to fetch project images' }, { status: 500 });
  }
}
