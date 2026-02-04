import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const symbol = searchParams.get('symbol');
  const interval = searchParams.get('interval');
  const period1 = searchParams.get('period1');
  const period2 = searchParams.get('period2');

  if (!symbol || !interval || !period1 || !period2) {
    return NextResponse.json(
      { error: 'Missing required parameters' },
      { status: 400 }
    );
  }

  // Map symbols if necessary (Finnhub -> Yahoo)
  let querySymbol = symbol;
  if (symbol === 'OANDA:XAU_USD') {
    querySymbol = 'GC=F'; // Gold Futures
  }

  try {
    const response = await fetch(
      `https://query1.finance.yahoo.com/v8/finance/chart/${querySymbol}?interval=${interval}&period1=${period1}&period2=${period2}`,
      {
        headers: {
          'User-Agent': 'Mozilla/5.0',
        },
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch data from Yahoo Finance' },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
