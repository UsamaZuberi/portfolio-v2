/**
 * Custom Hook: usePortfolioData
 *
 * Fetches the portfolio data from the API with SWR caching.
 * Falls back to local data to avoid UI flicker.
 */

'use client';

import useSWR from 'swr';
import portfolioData from '@/data';
import type { PortfolioDataStructure } from '@/types';

interface PortfolioApiResponse {
  data: PortfolioDataStructure;
  source: 'blob' | 'local';
}

const fetcher = async (url: string): Promise<PortfolioDataStructure> => {
  const response = await fetch(url);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Failed to fetch portfolio data');
  }

  const payload = (await response.json()) as PortfolioApiResponse;
  return payload.data;
};

export function usePortfolioData() {
  const localPortfolioData = portfolioData as PortfolioDataStructure;
  const { data, error, isLoading, isValidating, mutate } = useSWR<PortfolioDataStructure>(
    '/api/portfolio-data',
    fetcher,
    {
      fallbackData: localPortfolioData,
      keepPreviousData: true,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: 60000,
    }
  );

  return {
    data: data ?? localPortfolioData,
    loading: isLoading && !data,
    refreshing: isValidating,
    error: error?.message || null,
    refetch: () => mutate(),
  };
}
