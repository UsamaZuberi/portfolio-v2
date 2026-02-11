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
