/**
 * Custom Hook: useProjectImages
 *
 * Fetches project images from Vercel Blob storage via API with SWR caching.
 * Implements automatic caching, revalidation, and request deduplication.
 */

import useSWR from 'swr';

interface UseProjectImagesResult {
  images: Record<string, string[]>;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

/**
 * SWR fetcher function for API calls
 */
const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'Failed to fetch images');
  }

  const data = await response.json();
  return data.images || {};
};

/**
 * Hook to fetch all project images from Vercel Blob with SWR caching
 *
 * Benefits:
 * - Automatic caching and revalidation
 * - Request deduplication (multiple components using this hook will share one request)
 * - Background data refetching
 * - Focus/online revalidation
 *
 * @returns Object containing images, loading state, error, and refetch function
 *
 * @example
 * ```tsx
 * const { images, loading, error } = useProjectImages();
 *
 * if (loading) return <Spinner />;
 * if (error) return <Error message={error} />;
 *
 * const projectImages = images['pixtool'] || [];
 * ```
 */
export function useProjectImages(): UseProjectImagesResult {
  const { data, error, isLoading, mutate } = useSWR<Record<string, string[]>>(
    '/api/projects/images',
    fetcher,
    {
      revalidateOnFocus: false, // Don't refetch on window focus (images rarely change)
      revalidateOnReconnect: false, // Don't refetch on reconnect
      dedupingInterval: 60000, // Dedupe requests within 60 seconds
      // Cache images for the session
    }
  );

  return {
    images: data || {},
    loading: isLoading,
    error: error?.message || null,
    refetch: () => mutate(),
  };
}

/**
 * Hook to fetch images for a specific project with SWR caching
 *
 * @param slug - The project slug (e.g., '7-star-training', 'pixtool')
 * @returns Object containing images array, loading state, error, and refetch function
 *
 * @example
 * ```tsx
 * const { images, loading, error } = useSingleProjectImages('7-star-training');
 * ```
 */
export function useSingleProjectImages(
  slug: string
): Omit<UseProjectImagesResult, 'images'> & { images: string[] } {
  const { data, error, isLoading, mutate } = useSWR<{ images: string[] }>(
    slug ? `/api/projects/${slug}/images` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
    }
  );

  return {
    images: data?.images || [],
    loading: isLoading,
    error: error?.message || null,
    refetch: () => mutate(),
  };
}
