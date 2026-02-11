/**
 * Vercel Blob Storage Utilities
 *
 * Provides functions to interact with Vercel Blob storage for portfolio images.
 * The blob store name is 'portfolio-v2-images'.
 */

import { list } from '@vercel/blob';
import { isSupportedImageFormat } from '@/lib/utils';

/**
 * Get all images for a specific project from Vercel Blob
 * Images are named with convention: slug-1, slug-2, etc.
 * Example: 7-star-training-1, 7-star-training-2, ehj-and-sj-consultancy-1
 *
 * @param slug - The project slug (from the portfolio data)
 * @returns Array of image URLs from the blob storage, sorted by number
 *
 * @example
 * ```ts
 * const images = await getProjectImages('7-star-training');
 * // Returns: ['https://blob.../7-star-training-1', 'https://blob.../7-star-training-2', ...]
 * ```
 */
export async function getProjectImages(slug: string): Promise<string[]> {
  try {
    const { blobs } = await list({
      token: process.env.portfolio_v2_images_READ_WRITE_TOKEN,
    });

    // Filter blobs that match the pattern: slug-number
    const projectBlobs = blobs.filter((blob) => {
      const filename = blob.pathname.split('/').pop() || '';
      if (!isSupportedImageFormat(filename)) return false;
      const nameWithoutExt = filename.replace(/\.[^/.]+$/, ''); // Remove extension
      return nameWithoutExt.startsWith(`${slug}-`);
    });

    // Sort by number suffix (e.g., project-1, project-2, project-3)
    const sortedBlobs = projectBlobs.sort((a, b) => {
      const getNumber = (pathname: string) => {
        const filename = pathname.split('/').pop() || '';
        const match = filename.match(/-(\d+)(?:\.[^/.]+)?$/);
        return match ? parseInt(match[1], 10) : 0;
      };
      return getNumber(a.pathname) - getNumber(b.pathname);
    });

    return sortedBlobs.map((blob) => blob.url);
  } catch (error) {
    console.error(`Error fetching images for project ${slug}:`, error);
    return [];
  }
}

/**
 * Get all images from the blob storage
 * Images are named with convention: slug-1, slug-2, etc.
 *
 * @returns Object mapping project slugs to their image URLs
 *
 * @example
 * ```ts
 * const allImages = await getAllProjectImages();
 * // Returns: { '7-star-training': ['url1', 'url2'], 'pixtool': ['url3'] }
 * ```
 */
export async function getAllProjectImages(): Promise<Record<string, string[]>> {
  try {
    const { blobs } = await list({
      token: process.env.portfolio_v2_images_READ_WRITE_TOKEN,
    });

    // Group images by project slug extracted from filename
    const imagesByProject: Record<string, string[]> = {};

    blobs.forEach((blob) => {
      const filename = blob.pathname.split('/').pop() || '';
      if (!isSupportedImageFormat(filename)) return;
      const nameWithoutExt = filename.replace(/\.[^/.]+$/, ''); // Remove extension

      // Extract project slug from pattern: slug-number
      const match = nameWithoutExt.match(/^(.+)-(\d+)$/);
      if (match) {
        const slug = match[1];
        const imageNumber = parseInt(match[2], 10);

        if (!imagesByProject[slug]) {
          imagesByProject[slug] = [];
        }
        imagesByProject[slug].push(blob.url);
      }
    });

    // Sort images within each project by number
    Object.keys(imagesByProject).forEach((slug) => {
      imagesByProject[slug].sort((a, b) => {
        const getNumber = (url: string) => {
          const filename = url.split('/').pop() || '';
          const match = filename.match(/-(\d+)(?:\.[^/.]+)?$/);
          return match ? parseInt(match[1], 10) : 0;
        };
        return getNumber(a) - getNumber(b);
      });
    });

    return imagesByProject;
  } catch (error) {
    console.error('Error fetching all project images:', error);
    return {};
  }
}

/**
 * Check if blob storage is configured
 *
 * @returns true if portfolio_v2_images_READ_WRITE_TOKEN is set
 */
export function isBlobConfigured(): boolean {
  return (
    !!process.env.portfolio_v2_images_READ_WRITE_TOKEN &&
    process.env.portfolio_v2_images_READ_WRITE_TOKEN !== 'your-blob-token-here'
  );
}
