import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory cache
let newsCache: {
  data: any;
  timestamp: number;
} | null = null;

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const category = searchParams.get('category') || 'general';
    const limit = parseInt(searchParams.get('limit') || '50');

    // Check cache
    if (newsCache && Date.now() - newsCache.timestamp < CACHE_DURATION) {
      return NextResponse.json(newsCache.data);
    }

    const apiKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Fetch news from Finnhub
    let url = `https://finnhub.io/api/v1/news?category=${category}&token=${apiKey}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Finnhub API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform data to match our interface
    const articles = data.slice(0, limit).map((item: any, index: number) => ({
      id: item.id || index,
      headline: item.headline,
      summary: item.summary || '',
      source: item.source,
      url: item.url,
      datetime: item.datetime,
      image: item.image || '/placeholder-news.jpg',
      category: item.category || category,
      related: item.related || undefined,
    }));

    const result = {
      articles,
      total: articles.length,
    };

    // Update cache
    newsCache = {
      data: result,
      timestamp: Date.now(),
    };

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
