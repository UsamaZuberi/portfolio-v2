/**
 * API Route: Get Project Images from Vercel Blob
 *
 * Endpoint: /api/projects/[projectId]/images
 * Method: GET
 *
 * Returns all images for a specific project from Vercel Blob storage.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getProjectImages } from '@/lib/blob';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ projectId: string }> }
) {
  try {
    // Note: Despite the route param name, we treat this as a slug
    const { projectId } = await params;
    const slug = projectId;

    if (!slug) {
      return NextResponse.json({ error: 'Project slug is required' }, { status: 400 });
    }

    const images = await getProjectImages(slug);

    return NextResponse.json({
      slug,
      images,
      count: images.length,
    });
  } catch (error) {
    console.error('Error in project images API:', error);
    return NextResponse.json({ error: 'Failed to fetch project images' }, { status: 500 });
  }
}
