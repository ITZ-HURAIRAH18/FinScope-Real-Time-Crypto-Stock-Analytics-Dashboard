"use client";

export default function LoadingScreen() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-75"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-150"></div>
      </div>

      {/* Main Loading Content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Logo with Spin Animation */}
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center animate-bounce">
            <span className="text-white font-bold text-4xl">F</span>
          </div>
          
          {/* Spinning Ring */}
          <div className="absolute inset-0 rounded-2xl border-4 border-transparent border-t-blue-400 border-r-purple-400 animate-spin"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold gradient-text animate-pulse">
            FinScope
          </h1>
          <p className="text-gray-400 text-lg">Real-Time Market Analytics</p>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center space-x-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-gray-300 text-sm animate-pulse">
          Loading your dashboard...
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 animate-loading-progress"></div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center space-y-2">
          <div className="flex items-center justify-center space-x-4 text-gray-500 text-xs">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Connecting to markets</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes loading-progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-loading-progress {
          animation: loading-progress 1.5s ease-in-out infinite;
        }
        .delay-75 {
          animation-delay: 75ms;
        }
        .delay-100 {
          animation-delay: 100ms;
        }
        .delay-150 {
          animation-delay: 150ms;
        }
        .delay-200 {
          animation-delay: 200ms;
        }
      `}</style>
    </main>
  );
}
