# 🚀 FinScope – Real-Time Crypto & Stock Analytics Dashboard

> A comprehensive financial analytics platform with real-time trading simulation, portfolio management, and market analytics.

Built with **Next.js 15**, **TypeScript**, **Redux Toolkit**, **Prisma**, and **PostgreSQL** featuring real-time cryptocurrency and stock market data via WebSocket connections.

![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue) ![React](https://img.shields.io/badge/React-19.0-61dafb) ![Prisma](https://img.shields.io/badge/Prisma-5.22-2D3748) ![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Key Features

### 📊 Real-Time Market Data
- **Live Cryptocurrency Prices** - Binance WebSocket integration for real-time crypto updates
- **Live Stock Prices** - Finnhub WebSocket for real-time stock market data
- **Interactive Dashboard** - Toggle between crypto, stocks, or both markets
- **Instant Search** - Search across thousands of assets with real-time filtering

### 💼 Portfolio & Trading Simulation
- **Virtual Trading** - $100,000 starting balance for paper trading
- **Buy/Sell Orders** - Execute simulated trades with real-time prices
- **Portfolio Tracking** - Monitor holdings, P&L, and portfolio value
- **Transaction History** - Complete record of all trades with detailed metrics
- **Live Portfolio Updates** - Real-time portfolio value calculations

### 📈 Analytics & Insights
- **Interactive Charts** - TradingView-style charts with multiple timeframes (1D, 1W, 1M, 3M, 1Y)
- **Market Analytics** - Top gainers, losers, and trending assets
- **News Feed** - Latest financial news with category filtering (General, Crypto, Stock)
- **Watchlists** - Save and track favorite assets across crypto and stocks

### 🔐 User Features
- **Secure Authentication** - NextAuth.js with credential and OAuth support
- **User Profiles** - Personalized profile management with Cloudinary integration
- **Protected Routes** - Middleware-based authentication
- **Session Management** - Persistent login sessions

### 🎨 UI/UX
- **Glassmorphism Design** - Modern, sleek dark theme
- **Responsive Layout** - Optimized for desktop, tablet, and mobile
- **Real-time Updates** - Live price changes with color-coded indicators
- **Loading States** - Skeleton screens and loading animations
- **Error Handling** - Graceful error states and retry mechanisms

## 🛠️ Tech Stack

### Frontend
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript 5.7](https://www.typescriptlang.org/)** - Type-safe development
- **[React 19](https://react.dev/)** - UI library
- **[Redux Toolkit](https://redux-toolkit.js.org/)** - State management
- **[React Query](https://tanstack.com/query)** - Server state management
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[Recharts](https://recharts.org/)** - Data visualization
- **[Lightweight Charts](https://tradingview.github.io/lightweight-charts/)** - Professional trading charts

### Backend
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - RESTful API endpoints
- **[Prisma ORM](https://www.prisma.io/)** - Database toolkit
- **[PostgreSQL](https://www.postgresql.org/)** - Relational database
- **[NextAuth.js](https://next-auth.js.org/)** - Authentication solution
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)** - Password hashing

### Real-Time Data & Integrations
- **[Binance WebSocket API](https://binance-docs.github.io/apidocs/spot/en/)** - Real-time crypto prices
- **[Finnhub WebSocket](https://finnhub.io/docs/api/websocket-trades)** - Real-time stock data
- **[Finnhub REST API](https://finnhub.io/docs/api)** - Stock details, news, and company info
- **[Cloudinary](https://cloudinary.com/)** - Image upload and management

## 📂 Project Structure

```
├── app/                          # Next.js 15 App Router
│   ├── page.tsx                 # Landing page
│   ├── layout.tsx               # Root layout
│   ├── providers.tsx            # Redux & Query providers
│   ├── middleware.ts            # Auth middleware
│   │
│   ├── auth/                    # Authentication
│   │   ├── login/              # Login page
│   │   └── register/           # Registration page
│   │
│   ├── dashboard/              # Markets Dashboard
│   │   └── page.tsx           # Main dashboard with real-time data
│   │
│   ├── crypto/[id]/           # Crypto Detail Pages
│   │   └── page.tsx          # Individual crypto asset details
│   │
│   ├── stocks/[symbol]/       # Stock Detail Pages
│   │   └── page.tsx          # Individual stock details + trading
│   │
│   ├── portfolio/             # Portfolio Management
│   │   └── page.tsx          # Holdings & transaction history
│   │
│   ├── watchlist/             # User Watchlist
│   │   └── page.tsx          # Saved favorite assets
│   │
│   ├── news/                  # Financial News
│   │   └── page.tsx          # News feed with category filters
│   │
│   ├── analytics/             # Market Analytics
│   │   └── page.tsx          # Market insights & trends
│   │
│   ├── profile/               # User Profile
│   │   └── page.tsx          # Profile management
│   │
│   └── api/                   # API Routes
│       ├── auth/             # Authentication endpoints
│       ├── portfolio/        # Portfolio CRUD
│       ├── trade/           # Buy/sell endpoints
│       ├── watchlist/       # Watchlist management
│       ├── news/            # News aggregation
│       └── stock-chart/     # Chart data
│
├── components/                # React Components
│   ├── Header.tsx           # Navigation header
│   ├── LoadingScreen.tsx    # Loading states
│   │
│   ├── auth/               # Auth components
│   │   ├── AuthButton.tsx
│   │   └── ProfileDropdown.tsx
│   │
│   ├── markets/            # Market components
│   │   └── MarketTable.tsx
│   │
│   ├── crypto/             # Crypto components
│   │   └── CryptoChart.tsx
│   │
│   ├── stock/              # Stock components
│   │   └── StockChart.tsx
│   │
│   ├── trading/            # Trading components
│   │   ├── TradingPanel.tsx
│   │   ├── PortfolioSummary.tsx
│   │   └── TransactionHistory.tsx
│   │
│   ├── news/               # News components
│   │   └── NewsCard.tsx
│   │
│   └── watchlist/          # Watchlist components
│       └── WatchlistButton.tsx
│
├── store/                   # Redux Store
│   ├── store.ts           # Store configuration
│   ├── hooks.ts           # Typed hooks
│   └── slices/
│       ├── marketSlice.ts     # Market data state
│       ├── portfolioSlice.ts  # Portfolio state
│       └── themeSlice.ts      # Theme state
│
├── lib/                    # Utility Libraries
│   ├── auth.ts           # NextAuth configuration
│   ├── prisma.ts         # Prisma client
│   ├── binance-websocket.ts  # Binance WS client
│   ├── finnhub-websocket.ts  # Finnhub WS client
│   ├── cloudinary.ts     # Cloudinary config
│   └── utils.ts          # Helper functions
│
├── prisma/
│   └── schema.prisma     # Database schema
│
└── types/                # TypeScript types
    ├── news.ts
    └── next-auth.d.ts
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+** - [Download here](https://nodejs.org/)
- **PostgreSQL Database** - Use free tier from:
  - [Supabase](https://supabase.com/)
  - [Neon](https://neon.tech/)
  - [Railway](https://railway.app/)
  - [Vercel Postgres](https://vercel.com/storage/postgres)
- **Finnhub API Key** - Free from [finnhub.io](https://finnhub.io/register)
- **Cloudinary Account** (Optional) - For profile image uploads from [cloudinary.com](https://cloudinary.com/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ITZ-HURAIRAH18/FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard.git
   cd FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` or `.env.local` file in the root directory:
   ```env
   # Database
   DATABASE_URL="postgresql://user:password@host:5432/finscope"
   DIRECT_URL="postgresql://user:password@host:5432/finscope"

   # NextAuth
   NEXTAUTH_SECRET="your-secret-key"  # Generate: openssl rand -base64 32
   NEXTAUTH_URL="http://localhost:3000"

   # Finnhub API
   FINNHUB_API_KEY="your-finnhub-api-key"
   NEXT_PUBLIC_FINNHUB_API_KEY="your-finnhub-api-key"

   # Cloudinary (Optional - for profile images)
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
   CLOUDINARY_API_KEY="your-api-key"
   CLOUDINARY_API_SECRET="your-api-secret"
   ```

4. **Set up the database**
   ```bash
   # Generate Prisma Client
   npx prisma generate

   # Push schema to database
   npx prisma db push

   # (Optional) Open Prisma Studio to view database
   npx prisma studio
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### First Time Setup

1. **Register an account** at `/auth/register`
2. **Login** with your credentials
3. You'll start with **$100,000** virtual balance
4. Explore the dashboard and start trading!

## 🎯 Usage Guide

### Dashboard
- View real-time crypto and stock prices
- Toggle between **Crypto**, **Stocks**, or **Both** markets
- Search for any asset using the search bar
- Click on any row to view detailed information

### Trading
1. Navigate to a stock detail page (e.g., `/stocks/AAPL`)
2. Use the **Trading Panel** to buy or sell
3. Enter quantity and confirm the trade
4. View your updated portfolio at `/portfolio`

### Portfolio Management
- View all holdings with real-time P&L
- See total portfolio value
- Track transaction history
- Monitor performance metrics

### Watchlist
- Click the ⭐ icon on any asset to add to watchlist
- Access quick overview of favorite assets
- Remove items as needed

### News Feed
- Browse latest financial news
- Filter by **General**, **Crypto**, or **Stock** categories
- Click articles to read full content

## 🔑 API Keys & Configuration

### Finnhub (Stock Data) - **Required**
1. Sign up at [finnhub.io](https://finnhub.io/register)
2. Get your free API key from dashboard
3. Add to `.env`:
   ```env
   FINNHUB_API_KEY="your_key_here"
   NEXT_PUBLIC_FINNHUB_API_KEY="your_key_here"
   ```

### Binance (Crypto Data) - **No Key Required**
- Uses public WebSocket streams
- No registration needed
- Completely free

### Cloudinary (Profile Images) - **Optional**
1. Sign up at [cloudinary.com](https://cloudinary.com/)
2. Get credentials from dashboard
3. Add to `.env`:
   ```env
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your_cloud_name"
   CLOUDINARY_API_KEY="your_key"
   CLOUDINARY_API_SECRET="your_secret"
   ```

## 📊 Available Markets

### Cryptocurrencies (30+ Assets)
| Symbol | Name |
|--------|------|
| BTC | Bitcoin |
| ETH | Ethereum |
| BNB | Binance Coin |
| SOL | Solana |
| XRP | Ripple |
| ADA | Cardano |
| DOGE | Dogecoin |
| MATIC | Polygon |
| DOT | Polkadot |
| SHIB | Shiba Inu |
| And 20+ more... |

### Stocks (Major US Companies)
| Symbol | Company |
|--------|---------|
| AAPL | Apple Inc. |
| GOOGL | Alphabet Inc. |
| MSFT | Microsoft |
| TSLA | Tesla |
| AMZN | Amazon |
| META | Meta Platforms |
| NVDA | NVIDIA |
| AMD | Advanced Micro Devices |
| NFLX | Netflix |
| DIS | Disney |
| JPM | JPMorgan Chase |
| V | Visa |
| And many more... |

## 🎨 Key Features Breakdown

### 🏠 Landing Page
- Modern hero section with gradient effects
- Feature highlights showcase
- Live market preview widget
- Call-to-action for registration
- Responsive design

### 📊 Dashboard (`/dashboard`)
- **Real-time price tables** with color-coded changes
- **Market filters** - Toggle Crypto/Stocks/Both
- **Search functionality** - Instant asset search
- **WebSocket connections** - Live price updates
- **Click-to-detail** - Quick navigation to asset pages

### 💹 Stock Detail Pages (`/stocks/[symbol]`)
- **Live price charts** with TradingView-style interface
- **Multiple timeframes** - 1D, 1W, 1M, 3M, 1Y, ALL
- **Key metrics** - Market cap, volume, P/E ratio, etc.
- **Trading panel** - Buy/sell with real-time prices
- **Company information** - Logo, description, sector
- **Add to watchlist** - Quick save functionality

### 🪙 Crypto Detail Pages (`/crypto/[id]`)
- **Live crypto charts** with price history
- **Market data** - 24h high/low, volume, market cap
- **Price statistics** - Real-time price updates
- **Watchlist integration**

### 💼 Portfolio Page (`/portfolio`)
- **Holdings overview** - All crypto and stock positions
- **Live P&L tracking** - Real-time profit/loss calculations
- **Portfolio summary** - Total value, invested amount, returns
- **Transaction history** - Complete trade log with timestamps
- **Performance metrics** - Gain/loss percentages

### 📰 News Page (`/news`)
- **Latest financial news** from multiple sources
- **Category filters** - General, Crypto, Stock
- **URL-based filtering** - Shareable category links
- **Article cards** - Images, headlines, summaries
- **External links** - Read full articles on source sites

### ⭐ Watchlist (`/watchlist`)
- **Saved favorites** - Quick access to tracked assets
- **Mixed assets** - Crypto and stocks together
- **Live prices** - Real-time watchlist updates
- **Easy management** - Add/remove with one click

### 👤 Profile Page (`/profile`)
- **User information** - Name, email, avatar
- **Profile editing** - Update personal details
- **Image upload** - Cloudinary integration
- **Account balance** - Virtual trading balance display

### 🔐 Authentication
- **Credential login** - Email and password
- **Secure registration** - Password hashing with bcryptjs
- **Session management** - Persistent authentication
- **Protected routes** - Middleware-based protection
- **Profile dropdown** - Quick access to account features

## 🗄️ Database Schema

The application uses PostgreSQL with Prisma ORM. Key models:

- **User** - User accounts with balance ($100k default)
- **Portfolio** - Holdings with quantity and average buy price
- **Transaction** - Trade history (buy/sell records)
- **Watchlist** - Saved favorite assets
- **Session** - NextAuth session management
- **Account** - OAuth provider accounts

## 🛠️ Development

### Development Commands

```bash
# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Generate Prisma Client after schema changes
npx prisma generate

# Push schema changes to database
npx prisma db push

# Open Prisma Studio (Database GUI)
npx prisma studio

# View and manage database records
# Prisma Studio runs at http://localhost:5555
```

### Project Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npx prisma generate` | Generate Prisma Client |
| `npx prisma db push` | Sync Prisma schema with database |
| `npx prisma studio` | Open database GUI |

### Environment Variables

Required variables for development:

```env
# Database (Required)
DATABASE_URL="postgresql://..."
DIRECT_URL="postgresql://..."

# Auth (Required)
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"

# API Keys (Required)
FINNHUB_API_KEY="..."
NEXT_PUBLIC_FINNHUB_API_KEY="..."

# Cloudinary (Optional)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   - Add all variables from `.env.local`
   - Ensure `NEXTAUTH_URL` points to your production domain

4. **Deploy**
   - Vercel will automatically build and deploy
   - Every push to `main` triggers auto-deployment

### Deploy to Railway

1. **Create new project** on [railway.app](https://railway.app)
2. **Add PostgreSQL database** from Railway marketplace
3. **Connect GitHub repository**
4. **Add environment variables** in Railway dashboard
5. **Deploy** - Railway handles build and deployment

### Deploy to Netlify

1. **Push to GitHub**
2. **Import to Netlify** from [netlify.com](https://netlify.com)
3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. **Add environment variables**
5. **Deploy**

### Environment Variables for Production

Make sure to update these for production:

```env
NEXTAUTH_URL="https://your-domain.com"
DATABASE_URL="your-production-db-url"
DIRECT_URL="your-production-db-url"
```

## 📱 Screenshots

### Landing Page
Modern hero section with call-to-action and feature highlights.

### Dashboard
Real-time market data with live WebSocket updates for crypto and stocks.

### Trading Interface
Professional trading panel with buy/sell functionality and live charts.

### Portfolio Management
Track holdings, P&L, and transaction history in real-time.

### News Feed
Latest financial news with category filtering and responsive cards.

## 🔧 Configuration

### Adding More Cryptocurrencies

Edit `lib/binance-websocket.ts` to add more crypto symbols:

```typescript
const cryptoSymbols = [
  'btcusdt', 'ethusdt', 'bnbusdt', 
  'solusdt', 'adausdt', 'xrpusdt',
  // Add more symbols here
];
```

### Adding More Stocks

Edit `lib/finnhub-websocket.ts` to add more stock symbols:

```typescript
const stockSymbols = [
  'AAPL', 'GOOGL', 'MSFT', 
  'TSLA', 'AMZN', 'META',
  // Add more symbols here
];
```

### Configuring Image Domains

For news images, update `next.config.js`:

```javascript
images: {
  domains: [
    'assets.coingecko.com',
    'logo.clearbit.com',
    'static2.finnhub.io',
    'image.cnbcfm.com',
    'data.bloomberglp.com',
    // Add more domains as needed
  ],
}
```

## 🐛 Troubleshooting

### WebSocket Connection Issues
- Check if Finnhub API key is valid
- Ensure WebSocket URLs are correct
- Check browser console for connection errors

### Database Connection Errors
- Verify `DATABASE_URL` is correct
- Ensure PostgreSQL is running
- Run `npx prisma generate` after schema changes

### Image Loading Issues
- Add image hostnames to `next.config.js`
- Check Cloudinary configuration
- Verify image URLs are accessible

### Authentication Problems
- Ensure `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches your domain
- Clear browser cookies and try again

## 📈 Performance Optimization

- **WebSocket Management** - Automatic reconnection and cleanup
- **Redux State** - Optimized state updates with Redux Toolkit
- **Code Splitting** - Dynamic imports for better performance
- **Image Optimization** - Next.js Image component with lazy loading
- **API Caching** - React Query for intelligent data caching
- **Database Indexes** - Optimized Prisma schema for fast queries

## 🔒 Security Features

- **Password Hashing** - bcryptjs with salt rounds
- **Protected Routes** - Middleware-based authentication
- **Session Management** - Secure JWT tokens
- **Input Validation** - Server-side validation for all forms
- **SQL Injection Prevention** - Prisma parameterized queries
- **XSS Protection** - React's built-in escaping
- **CSRF Protection** - NextAuth.js CSRF tokens

## 🎓 Learning Resources

This project demonstrates:
- **Next.js 15 App Router** - Modern React framework patterns
- **WebSocket Integration** - Real-time data streaming
- **Redux Toolkit** - Advanced state management
- **TypeScript** - Type-safe development
- **Prisma ORM** - Modern database toolkit
- **NextAuth.js** - Authentication best practices
- **API Design** - RESTful API architecture
- **Real-time Trading** - Financial application patterns

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Contribution Ideas
- Add more cryptocurrency exchanges
- Implement more chart indicators
- Add price alerts functionality
- Create mobile app version
- Add more market analytics
- Improve UI/UX design
- Write tests
- Add documentation

## 📋 Roadmap

- [ ] Real-time price alerts and notifications
- [ ] Advanced chart indicators (RSI, MACD, Bollinger Bands)
- [ ] Social features (follow traders, share portfolios)
- [ ] Mobile app (React Native)
- [ ] More exchange integrations
- [ ] Options and futures trading simulation
- [ ] AI-powered trading insights
- [ ] Portfolio comparison and benchmarks
- [ ] Tax reporting and export features
- [ ] API for third-party integrations

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

You are free to:
- ✅ Use this project for personal or commercial purposes
- ✅ Modify and customize the code
- ✅ Distribute copies of the software
- ✅ Use for portfolio and educational purposes

## 🙏 Acknowledgments

- **Binance** - For providing free WebSocket API
- **Finnhub** - For comprehensive stock market data
- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment platform
- **Prisma** - For the excellent ORM
- **TradingView** - For chart design inspiration

## 📧 Contact & Support

**Developer**: Muhammad Abu Hurairah

- 🌐 **GitHub**: [@ITZ-HURAIRAH18](https://github.com/ITZ-HURAIRAH18)
- 💼 **LinkedIn**: [Muhammad Abu Hurairah](https://www.linkedin.com/in/muhammad-abu-hurairah-988ba1303/)
- 📧 **Email**: Contact via GitHub profile

### Get Support
- 🐛 **Bug Reports**: [Open an issue](https://github.com/ITZ-HURAIRAH18/FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard/issues)
- 💡 **Feature Requests**: [Create a feature request](https://github.com/ITZ-HURAIRAH18/FinScope-Real-Time-Crypto-Stock-Analytics-Dashboard/issues)
- 📖 **Documentation**: Check out the `/docs` folder (coming soon)

## ⭐ Show Your Support

If you find this project helpful, please consider:
- ⭐ Starring the repository
- 🍴 Forking for your own projects
- 📢 Sharing with others
- 🐛 Reporting bugs
- 💡 Suggesting new features

## 📊 Project Stats

- **Built with**: Next.js 15, TypeScript, Prisma, PostgreSQL
- **Real-time Updates**: WebSocket connections
- **Trading Simulation**: Virtual $100,000 balance
- **Assets Available**: 30+ cryptocurrencies, dozens of stocks
- **Authentication**: Secure with NextAuth.js
- **Deployment Ready**: Optimized for Vercel/Railway/Netlify

---

<div align="center">

### ⚠️ Disclaimer

**This project is for educational and portfolio purposes only.**

This is a **paper trading simulation** and does not involve real money. The trading functionality uses virtual currency for educational purposes. **Not financial advice!** Always do your own research before making any investment decisions.

---

**Made with ❤️ by [Muhammad Abu Hurairah](https://github.com/ITZ-HURAIRAH18)**

**Star ⭐ this repository if you found it helpful!**

</div>
