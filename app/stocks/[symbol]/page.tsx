"use client";

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { updateStockPrices } from '@/store/slices/marketSlice';
import { getFinnhubWS } from '@/lib/finnhub-websocket';
import { formatCurrency, formatPercentage, getPriceChangeColor } from '@/lib/utils';
import WatchlistButton from '@/components/watchlist/WatchlistButton';
import StockChart from '@/components/stock/StockChart';
import LoadingScreen from '@/components/LoadingScreen';
import TradingPanel from '@/components/trading/TradingPanel';

export default function StockDetailPage() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  
  // Clean the symbol from URL encoding
  const rawSymbol = params.symbol as string;
  const symbol = decodeURIComponent(rawSymbol).toUpperCase();
  
  const { stockPrices } = useAppSelector((state) => state.market);
  const priceData = stockPrices[symbol];
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    // Initialize WebSocket connection for this page
    const finnhubAPIKey = process.env.NEXT_PUBLIC_FINNHUB_API_KEY || "";
    const finnhubWS = getFinnhubWS(finnhubAPIKey);
    
    // Connect and subscribe to store
    finnhubWS.connect();
    const unsubFinnhub = finnhubWS.subscribe((prices) => {
      dispatch(updateStockPrices(prices));
      setIsDataLoaded(true);
    });

    // Also check if we already have data
    if (stockPrices[symbol]) {
      setIsDataLoaded(true);
    }

    return () => {
      unsubFinnhub();
    };
  }, [dispatch, symbol]);

  // Fallback for when data is loaded but symbol is not found or waiting for first tick
  const currentPriceData = priceData || {
    symbol: symbol,
    price: 0,
    priceChange: 0,
    priceChangePercent: 0,
    volume: 0,
    lastUpdate: Date.now()
  };

  // Only show loading screen if we really have no data and haven't loaded anything
  if (!priceData && !isDataLoaded) {
    return <LoadingScreen />;
  }

  // Helper for image source
  const getImageSource = (sym: string) => {
    // Check for both encoded and decoded versions just in case
    if (sym === 'OANDA:XAU_USD' || sym === 'OANDA%3AXAU_USD') {
        return 'https://financialmodelingprep.com/image-stock/GLD.png';
    }
    return `https://financialmodelingprep.com/image-stock/${sym}.png`;
  };

  const getDisplayName = (sym: string) => {
      if (sym === 'OANDA:XAU_USD' || sym === 'OANDA%3AXAU_USD') {
          return 'Gold (XAU/USD)';
      }
      return sym;
  }
  
  const getAssetType = (sym: string) => {
      if (sym === 'OANDA:XAU_USD' || sym === 'OANDA%3AXAU_USD') {
          return 'Spot Metal';
      }
      return 'Stock';
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Header */}
      <Header activePage="markets" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <button
          onClick={() => router.push('/dashboard')}
          className="text-gray-400 hover:text-white transition mb-4 sm:mb-6 flex items-center text-sm sm:text-base"
        >
          ← Back to Markets
        </button>

        {/* Header Section */}
        <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl mb-6 sm:mb-8 border border-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center space-x-4">
              <img 
                src={getImageSource(symbol)}
                alt={getDisplayName(symbol)}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <div className="hidden w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">{symbol.substring(0, 2)}</span>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                  {getDisplayName(symbol)}
                </h1>
                <p className="text-gray-400">
                  {getAssetType(symbol)}
                </p>
              </div>
            </div>

            <div className="text-left md:text-right">
              {priceData ? (
                <>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono mb-2">
                    {formatCurrency(priceData.price)}
                  </div>
                  <div className={`text-lg sm:text-xl lg:text-2xl font-semibold ${getPriceChangeColor(priceData.priceChangePercent)}`}>
                    {formatPercentage(priceData.priceChangePercent)}
                    <span className="text-sm sm:text-base lg:text-lg ml-2">({formatCurrency(priceData.priceChange)})</span>
                  </div>
                </>
              ) : (
                <div className="animate-pulse">
                  <div className="h-8 w-32 bg-gray-700 rounded mb-2"></div>
                  <div className="h-6 w-24 bg-gray-700 rounded"></div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <StockChart symbol={symbol} />

        {/* Trading Section */}
        {priceData && (
          <TradingPanel symbol={symbol} type="STOCK" currentPrice={priceData.price} />
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div className="glass-card p-4 sm:p-6 rounded-2xl border border-white">
            <div className="text-gray-400 mb-2 text-sm sm:text-base">Current Price</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">
              {formatCurrency(currentPriceData.price)}
            </div>
          </div>

          <div className="glass-card p-4 sm:p-6 rounded-2xl">
            <div className="text-gray-400 mb-2 text-sm sm:text-base">Volume</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">
              {currentPriceData.volume.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl mb-6 sm:mb-8 border border-white">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Market Information</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Symbol</span>
              <span className="text-white font-semibold">{symbol}</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Current Price</span>
              <span className="text-white font-mono font-semibold">{formatCurrency(currentPriceData.price)}</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Price Change</span>
              <span className={`font-mono font-semibold ${getPriceChangeColor(currentPriceData.priceChange)}`}>
                {formatCurrency(currentPriceData.priceChange)}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Change %</span>
              <span className={`font-mono font-semibold ${getPriceChangeColor(currentPriceData.priceChangePercent)}`}>
                {formatPercentage(currentPriceData.priceChangePercent)}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Volume</span>
              <span className="text-white font-mono font-semibold">{currentPriceData.volume.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Last Update</span>
              <span className="text-white font-mono text-sm">
                {new Date(currentPriceData.lastUpdate).toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>

        {/* Watchlist Button */}
        <div className="flex justify-center">
          <WatchlistButton symbol={symbol} type="STOCK" meta={{ name: symbol }} />
        </div>

        {/* Info Note */}
        <div className="mt-8 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg text-center">
          <p className="text-gray-300">
            💡 Real-time stock data powered by Finnhub WebSocket
          </p>
        </div>
      </div>
    </main>
  );
}
