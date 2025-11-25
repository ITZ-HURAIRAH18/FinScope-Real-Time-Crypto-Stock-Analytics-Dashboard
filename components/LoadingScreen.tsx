"use client";

export default function LoadingScreen() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="relative mb-4">
          <div className="w-20 h-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-3xl">F</span>
          </div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-5xl font-bold text-white tracking-tight">
            FinScope
          </h1>
          <p className="text-gray-400 text-base">Real-Time Market Analytics</p>
        </div>

        {/* Loading Spinner */}
        <div className="mt-10">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>

        {/* Loading Text */}
        <div className="text-white text-2xl font-semibold mt-6 animate-pulse">
          Loading...
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </main>
  );
}
