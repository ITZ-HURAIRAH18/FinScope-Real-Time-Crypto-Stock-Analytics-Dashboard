export interface NewsArticle {
  id: number;
  headline: string;
  summary: string;
  source: string;
  url: string;
  datetime: number;
  image: string;
  category: string;
  related?: string; // Related stock symbol
}

export interface NewsResponse {
  articles: NewsArticle[];
  total: number;
}
