/**
 * Portfolio data loader
 *
 * Loads data from a Vercel Blob JSON file when configured.
 */
import type { PortfolioDataStructure } from '@/types';

const DATA_REVALIDATE_SECONDS = 60;

export type PortfolioDataSource = 'blob' | 'missing' | 'error';

export async function getPortfolioData(): Promise<{
  data: PortfolioDataStructure | null;
  source: PortfolioDataSource;
}> {
  const dataUrl = process.env.NEXT_PUBLIC_PORTFOLIO_DATA_BLOB_URL;

  if (!dataUrl) {
    return { data: null, source: 'missing' };
  }

  try {
    const response = await fetch(dataUrl, {
      next: { revalidate: DATA_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return { data: null, source: 'missing' };
    }

    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const data = (await response.json()) as PortfolioDataStructure;
      return { data, source: 'blob' };
    }

    const text = await response.text();
    try {
      const data = JSON.parse(text) as PortfolioDataStructure;
      return { data, source: 'blob' };
    } catch (parseError) {
      console.error('Portfolio data is not valid JSON.', { contentType, parseError });
      return { data: null, source: 'error' };
    }
  } catch (error) {
    console.error('Failed to load portfolio data from blob:', error);
    return { data: null, source: 'error' };
  }
}
