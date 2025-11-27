# FinScope Trading Guide

## Overview

FinScope allows you to trade cryptocurrencies and stocks with virtual currency. Each user starts with **$100,000** to practice trading without risk.

---

## Getting Started

### 1. Register an Account
- Navigate to [Register Page](http://localhost:3000/auth/register)
- Create your account with email and password
- You'll automatically receive **$100,000** in virtual currency

### 2. Log In
- Go to [Login Page](http://localhost:3000/auth/login)
- Enter your credentials
- You're ready to start trading!

---

## How to Buy Assets

### Step 1: Navigate to an Asset
**For Cryptocurrency:**
- Go to Markets → Click on any crypto (e.g., Bitcoin)
- Or visit directly: `http://localhost:3000/crypto/btcusdt`

**For Stocks:**
- Go to Markets → Click on any stock (e.g., AAPL)
- Or visit directly: `http://localhost:3000/stocks/AAPL`

### Step 2: Use the Trading Panel

You'll see a **Trading Panel** below the price chart with two tabs: **BUY** and **SELL**.

#### Buying Process:

1. **Select BUY tab** (green button)

2. **Check Available Information:**
   - Current Price: Real-time price of the asset
   - Available Balance: How much cash you have

3. **Enter Quantity:**
   - Type the amount you want to buy
   - Click **MAX** button to buy maximum possible with your balance

4. **Review Total:**
   - The panel shows total cost = quantity × price
   - Make sure it doesn't exceed your balance

5. **Click BUY Button:**
   - Green button at bottom
   - Success message will appear
   - Your balance decreases
   - Asset appears in your portfolio

#### Example: Buying Bitcoin
```
Current Price: $95,000
Available Balance: $100,000
Quantity: 0.5 BTC
Total Cost: $47,500

After buying:
Balance: $52,500
Holdings: 0.5 BTC worth $47,500
```

---

## How to Sell Assets

### Step 1: Go to Asset You Own
- Navigate to the crypto or stock you want to sell
- Example: `/crypto/btcusdt` if you own Bitcoin

### Step 2: Use Sell Tab

1. **Select SELL tab** (red button)

2. **Check Your Holdings:**
   - Panel shows: "Your Holdings: 0.5 BTC"

3. **Enter Quantity to Sell:**
   - Type amount (must be ≤ your holdings)
   - Click **MAX** to sell all

4. **Review Proceeds:**
   - Total = quantity × current price
   - This amount gets added to your balance

5. **Click SELL Button:**
   - Red button at bottom
   - Success message appears
   - Balance increases
   - Holdings decrease

#### Example: Selling Bitcoin
```
Current Price: $98,000
Your Holdings: 0.5 BTC
Quantity to Sell: 0.5 BTC
Total Proceeds: $49,000

After selling:
Balance: $101,500
Holdings: 0 BTC
Profit: $1,500 (bought at $95k, sold at $98k)
```

---

## Portfolio Page

Access at: `http://localhost:3000/portfolio` or click **Portfolio** in navigation.

### What You'll See:

#### 1. Portfolio Overview
- **Total Portfolio Value**: Cash + current value of all holdings
- **Cash Balance**: Available money for buying
- **Holdings Value**: Current market value of your assets
- **Total P&L**: Total profit or loss
  - Green = Profit
  - Red = Loss
  - Shows both $ amount and %

#### 2. Holdings Table
Each row shows:
- **Asset**: Symbol (clickable to go to detail page)
- **Type**: CRYPTO or STOCK
- **Quantity**: How many you own
- **Avg Buy Price**: Your average purchase price
- **Current Price**: Live market price
- **Current Value**: Quantity × Current Price
- **P&L**: Profit/Loss in $ and %

**Example:**
```
Symbol  | Type   | Quantity | Avg Buy | Current | Value    | P&L
--------|--------|----------|---------|---------|----------|----------
BTC     | CRYPTO | 0.5      | $95,000 | $98,000 | $49,000  | +$1,500 (+3.16%)
AAPL    | STOCK  | 10       | $180.00 | $175.00 | $1,750   | -$50 (-2.78%)
```

#### 3. Transaction History
- Complete record of all your trades
- Filter by: All, Crypto, or Stocks
- Each transaction shows:
  - Date & Time
  - Symbol
  - Action (BUY or SELL)
  - Quantity
  - Price
  - Total amount

---

## Real-Time Features

### Live Price Updates
- All prices update automatically via WebSocket
- No need to refresh the page
- Crypto prices update continuously
- Stock prices update during market hours

### Live Portfolio Value
- Your portfolio value changes in real-time
- As prices move up → portfolio value increases
- As prices move down → portfolio value decreases
- P&L updates automatically

---

## Trading Rules & Limits

### ✅ What You CAN Do:
- Buy any crypto or stock with available balance
- Sell any asset you currently own
- Buy fractional amounts (e.g., 0.001 BTC)
- Make unlimited trades
- View complete transaction history

### ❌ What You CANNOT Do:
- Buy more than your available balance
- Sell more than you own
- Short sell (sell assets you don't have)
- Trade without logging in

---

## Error Messages

### "Insufficient Balance"
**Cause**: Trying to buy more than you can afford
**Solution**: 
- Reduce quantity
- Or click MAX to buy maximum possible

### "Insufficient Holdings"
**Cause**: Trying to sell more than you own
**Solution**:
- Check "Your Holdings" display
- Reduce quantity to ≤ your holdings

### "Please log in to start trading"
**Cause**: Not authenticated
**Solution**: Click "Log In" button and sign in

---

## Tips for Success

### 1. Start Small
- Don't invest all $100k at once
- Try buying small amounts first
- Learn how the interface works

### 2. Diversify
- Don't put all money in one asset
- Mix crypto and stocks
- Spread risk across multiple assets

### 3. Watch the Market
- Monitor price changes in real-time
- Check your portfolio P&L regularly
- Look for good entry/exit points

### 4. Use Transaction History
- Review your past trades
- Learn from profitable trades
- Identify patterns

### 5. Understand P&L
- Green P&L = Asset price increased since you bought
- Red P&L = Asset price decreased
- P&L only matters when you sell (realized)

---

## Quick Reference

### Key Pages:
- **Home**: `http://localhost:3000/`
- **Markets**: `http://localhost:3000/dashboard`
- **Portfolio**: `http://localhost:3000/portfolio`
- **Crypto Detail**: `http://localhost:3000/crypto/{symbol}`
  - Example: `/crypto/btcusdt`
- **Stock Detail**: `http://localhost:3000/stocks/{symbol}`
  - Example: `/stocks/AAPL`

### Navigation Links:
- Home
- Markets (Dashboard)
- Analytics
- Watchlist
- **Portfolio** ← View your holdings
- Login/Profile

---

## Frequently Asked Questions

**Q: Is this real money?**
A: No, this is virtual currency for practice trading only.

**Q: Can I add more money?**
A: Currently, you start with $100,000. No deposits/withdrawals.

**Q: Do I lose my progress?**
A: Your portfolio and transactions are saved in the database. Log in anytime to see your progress.

**Q: Can I trade 24/7?**
A: Crypto: Yes, 24/7
Stock prices: Update during market hours, but you can trade anytime with last known price.

**Q: How accurate are the prices?**
A: Prices are real-time from:
- Binance (for crypto)
- Finnhub (for stocks)

**Q: What happens if I run out of money?**
A: You won't be able to buy more until you sell some holdings to free up cash.

---

## API Routes Documentation

For developers: Here are the trading-related API endpoints used by the system.

### Authentication
All trading endpoints require authentication via NextAuth session cookies.

---

### 1. Get Portfolio

**Endpoint**: `GET /api/portfolio`

**Description**: Retrieves user's current balance and all holdings.

**Authentication**: Required

**Request**: No body required

**Response**:
```json
{
  "balance": 96974.57,
  "holdings": [
    {
      "id": "clx...",
      "userId": "user123",
      "symbol": "BTCUSDT",
      "type": "CRYPTO",
      "quantity": 0.5,
      "averageBuyPrice": 95000,
      "createdAt": "2025-11-27T10:00:00Z",
      "updatedAt": "2025-11-27T10:00:00Z"
    }
  ]
}
```

**Usage**: Called automatically when portfolio page loads or after each trade.

---

### 2. Buy Asset

**Endpoint**: `POST /api/trade/buy`

**Description**: Executes a buy order for crypto or stock.

**Authentication**: Required

**Request Body**:
```json
{
  "symbol": "BTCUSDT",
  "type": "CRYPTO",
  "quantity": 0.5,
  "price": 95000
}
```

**Field Descriptions**:
- `symbol`: Asset symbol (e.g., "BTCUSDT", "AAPL")
- `type`: "CRYPTO" or "STOCK"
- `quantity`: Amount to buy (supports decimals)
- `price`: Current market price

**Response** (Success):
```json
{
  "balance": 52500,
  "portfolio": {
    "id": "clx...",
    "userId": "user123",
    "symbol": "BTCUSDT",
    "type": "CRYPTO",
    "quantity": 0.5,
    "averageBuyPrice": 95000
  },
  "transaction": {
    "id": "tx123",
    "userId": "user123",
    "symbol": "BTCUSDT",
    "type": "CRYPTO",
    "action": "BUY",
    "quantity": 0.5,
    "price": 95000,
    "total": 47500,
    "createdAt": "2025-11-27T10:00:00Z"
  }
}
```

**Error Responses**:
- `400`: Missing required fields
- `400`: Quantity or price must be positive
- `400`: Insufficient balance
- `401`: Unauthorized (not logged in)
- `404`: User not found
- `500`: Internal server error

**What Happens**:
1. Validates user has sufficient balance
2. Deducts total cost from balance
3. Creates or updates portfolio holding (calculates new average buy price if adding to existing position)
4. Records transaction in database
5. Returns updated balance and portfolio

---

### 3. Sell Asset

**Endpoint**: `POST /api/trade/sell`

**Description**: Executes a sell order for owned assets.

**Authentication**: Required

**Request Body**:
```json
{
  "symbol": "BTCUSDT",
  "type": "CRYPTO",
  "quantity": 0.5,
  "price": 98000
}
```

**Response** (Success):
```json
{
  "balance": 101500,
  "portfolio": null,
  "transaction": {
    "id": "tx124",
    "userId": "user123",
    "symbol": "BTCUSDT",
    "type": "CRYPTO",
    "action": "SELL",
    "quantity": 0.5,
    "price": 98000,
    "total": 49000,
    "createdAt": "2025-11-27T11:00:00Z"
  }
}
```

**Note**: If selling entire holding, `portfolio` will be `null` (position deleted).

**Error Responses**:
- `400`: You do not own this asset
- `400`: Insufficient holdings
- `401`: Unauthorized
- `500`: Internal server error

**What Happens**:
1. Validates user owns the asset
2. Checks user has sufficient quantity
3. Adds sale proceeds to balance
4. Updates holding (reduces quantity) or deletes if selling all
5. Records transaction
6. Returns updated balance and portfolio

---

### 4. Get Transaction History

**Endpoint**: `GET /api/trade/history`

**Description**: Retrieves user's transaction history with pagination and filtering.

**Authentication**: Required

**Query Parameters**:
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `type` (optional): Filter by "CRYPTO" or "STOCK"

**Example Request**:
```
GET /api/trade/history?page=1&limit=20&type=CRYPTO
```

**Response**:
```json
{
  "transactions": [
    {
      "id": "tx124",
      "userId": "user123",
      "symbol": "BTCUSDT",
      "type": "CRYPTO",
      "action": "SELL",
      "quantity": 0.5,
      "price": 98000,
      "total": 49000,
      "createdAt": "2025-11-27T11:00:00Z"
    },
    {
      "id": "tx123",
      "userId": "user123",
      "symbol": "BTCUSDT",
      "type": "CRYPTO",
      "action": "BUY",
      "quantity": 0.5,
      "price": 95000,
      "total": 47500,
      "createdAt": "2025-11-27T10:00:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 2,
    "totalPages": 1
  }
}
```

**Usage**: Called when viewing transaction history on portfolio page.

---

### API Security Features

✅ **Session-based Authentication**: All endpoints verify user session via NextAuth
✅ **Input Validation**: All inputs are validated before processing
✅ **Database Transactions**: Buy/sell operations use atomic transactions to prevent data inconsistency
✅ **User Isolation**: Users can only access their own portfolio and transactions
✅ **Error Handling**: Comprehensive error messages for debugging

---

### Database Operations

#### Buy Flow:
```
1. Check user balance >= total cost
2. Start database transaction:
   a. Deduct balance from User table
   b. Create/Update Portfolio entry
   c. Create Transaction record
3. Commit transaction
4. Return updated data
```

#### Sell Flow:
```
1. Check user owns asset
2. Check quantity <= holdings
3. Start database transaction:
   a. Add proceeds to User balance
   b. Update/Delete Portfolio entry
   c. Create Transaction record
4. Commit transaction
5. Return updated data
```

---

## Support

For issues or questions:
1. Check this guide first
2. Review the main README.md
3. Look at transaction history to verify trades
4. Check browser console for technical errors

---

**Happy Trading! 📈💰**
