/**
 * API Route: Get Portfolio Data
 *
 * Endpoint: /api/portfolio-data
 * Method: GET
 */

import { NextResponse } from 'next/server';
import { getPortfolioData } from '@/lib/portfolioData';

export const revalidate = 60;

export async function GET() {
  const { data, source } = await getPortfolioData();

  if (!data) {
    const status = source === 'error' ? 500 : 503;
    return NextResponse.json(
      {
        error: 'Portfolio data is not available yet.',
        source,
      },
      { status }
    );
  }

  return NextResponse.json(
    {
      data,
      source,
    },
    {
      headers: {
        'Cache-Control': 's-maxage=60, stale-while-revalidate=300',
      },
    }
  );
}
