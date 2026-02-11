/**
 * Portfolio data loader
 *
 * Loads data from a Vercel Blob JSON file when configured and falls back to local data.
 */

import portfolioData from '@/data';
import type { PortfolioDataStructure } from '@/types';

const DATA_REVALIDATE_SECONDS = 60;

export type PortfolioDataSource = 'blob' | 'local';

const localPortfolioData = portfolioData as PortfolioDataStructure;

export async function getPortfolioData(): Promise<{
  data: PortfolioDataStructure;
  source: PortfolioDataSource;
}> {
  const dataUrl = process.env.PORTFOLIO_DATA_BLOB_URL;

  if (!dataUrl) {
    return { data: localPortfolioData, source: 'local' };
  }

  try {
    const response = await fetch(dataUrl, {
      next: { revalidate: DATA_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      return { data: localPortfolioData, source: 'local' };
    }

    const data = (await response.json()) as PortfolioDataStructure;
    return { data, source: 'blob' };
  } catch (error) {
    console.error('Failed to load portfolio data from blob:', error);
    return { data: localPortfolioData, source: 'local' };
  }
}
