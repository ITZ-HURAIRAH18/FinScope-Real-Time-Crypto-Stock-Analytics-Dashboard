"use client";

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { useAppSelector } from '@/store/hooks';
import { formatCurrency, formatPercentage, getPriceChangeColor } from '@/lib/utils';
import WatchlistButton from '@/components/watchlist/WatchlistButton';
import StockChart from '@/components/stock/StockChart';
import LoadingScreen from '@/components/LoadingScreen';
import TradingPanel from '@/components/trading/TradingPanel';

export default function StockDetailPage() {
  const params = useParams();
  const router = useRouter();
  const symbol = (params.symbol as string).toUpperCase();
  
  const { stockPrices } = useAppSelector((state) => state.market);
  const priceData = stockPrices[symbol];

  // Show page immediately, don't wait for Redux data

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
                src={`https://financialmodelingprep.com/image-stock/${symbol}.png`}
                alt={symbol}
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl">{symbol.substring(0, 2)}</span>
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{symbol}</h1>
                <p className="text-gray-400">Stock</p>
              </div>
            </div>

            {priceData && (
              <div className="text-left md:text-right">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white font-mono mb-2">
                  {formatCurrency(priceData.price)}
                </div>
                <div className={`text-lg sm:text-xl lg:text-2xl font-semibold ${getPriceChangeColor(priceData.priceChangePercent)}`}>
                  {formatPercentage(priceData.priceChangePercent)}
                  <span className="text-sm sm:text-base lg:text-lg ml-2">({formatCurrency(priceData.priceChange)})</span>
                </div>
              </div>
            )}
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
              {formatCurrency(priceData.price)}
            </div>
          </div>

          <div className="glass-card p-4 sm:p-6 rounded-2xl">
            <div className="text-gray-400 mb-2 text-sm sm:text-base">Volume</div>
            <div className="text-xl sm:text-2xl font-bold text-white font-mono">
              {priceData.volume.toLocaleString()}
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
              <span className="text-white font-mono font-semibold">{formatCurrency(priceData.price)}</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Price Change</span>
              <span className={`font-mono font-semibold ${getPriceChangeColor(priceData.priceChange)}`}>
                {formatCurrency(priceData.priceChange)}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Change %</span>
              <span className={`font-mono font-semibold ${getPriceChangeColor(priceData.priceChangePercent)}`}>
                {formatPercentage(priceData.priceChangePercent)}
              </span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Volume</span>
              <span className="text-white font-mono font-semibold">{priceData.volume.toLocaleString()}</span>
            </div>

            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="text-gray-400">Last Update</span>
              <span className="text-white font-mono text-sm">
                {new Date(priceData.lastUpdate).toLocaleTimeString()}
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
