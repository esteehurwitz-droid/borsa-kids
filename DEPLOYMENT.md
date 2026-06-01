# Borsa Kids - Deployment Guide

## Architecture

The app now uses a **realistic market simulation backend**:
- **Frontend**: Static HTML/CSS/JS on GitHub Pages
- **Backend**: Node.js Express server with realistic market simulation
- **Communication**: REST API over CORS

## Features of the New Market Simulation

✅ **Geometric Brownian Motion** - Realistic price movements following GBM model  
✅ **Volatility Clustering** - Volatility varies based on recent activity  
✅ **Mean Reversion** - Stock prices revert to sector averages  
✅ **Trend Following** - Uptrends and downtrends affect future prices  
✅ **Market News Events** - Random news triggers sector-wide moves  
✅ **Real-Time Updates** - Market updates every second (simulated minute)  
✅ **Price History** - Maintains 7-tick history for each stock  
✅ **Top Gainers/Losers** - Live tracking of market leaders  

## Local Setup

### 1. Install Dependencies

```bash
cd C:\Users\DELL\borsa-kids
npm install
```

### 2. Run the Server Locally

```bash
npm start
```

Server will run on `http://localhost:5000`

### 3. Configure Frontend

The app will attempt to fetch from the backend server. By default it looks at `http://localhost:5000`.

To test locally:
- Open `index.html` in a browser (via local server, not file://)
- The app will fetch from `http://localhost:5000/api/stocks`

## Deployment Options

### Option 1: Replit (Easiest, Free)

1. Go to https://replit.com
2. Create a new Node.js project
3. Upload `server.js` and `package.json`
4. Click "Run"
5. Copy the Replit domain (e.g., `https://my-project.replit.dev`)
6. Update the frontend's `MARKET_API` variable in index.html

### Option 2: Railway.app (Free Tier)

1. Go to https://railway.app
2. Create new project from GitHub repo
3. Set root directory to `borsa-kids`
4. Railway auto-deploys on push
5. Copy the Railway domain
6. Update frontend's `MARKET_API`

### Option 3: Heroku (Requires Credit Card)

```bash
heroku login
heroku create borsa-kids-market
git push heroku main
heroku open
```

### Option 4: Vercel Functions (Free)

Create `api/market.js`:
```javascript
export default async (req, res) => {
  // Market simulation logic here
  res.json({...});
};
```

## Update Frontend for Production

Edit `index.html` where the fetch URL is defined:

```javascript
const MARKET_API = 'https://your-deployed-server.com';
```

Or set environment variable during build:
```javascript
const MARKET_API = process.env.REACT_APP_MARKET_API || 'http://localhost:5000';
```

## API Endpoints

### GET /api/stocks
Returns all stocks with current prices, changes, and history.

**Response:**
```json
[
  {
    "symbol": "AAPL",
    "name": "Apple",
    "icon": "🍎",
    "sector": "Technology",
    "price": 185.43,
    "change": 0.43,
    "changePercent": 0.23,
    "history": [185.00, 185.10, 185.30, 185.40, 185.43]
  },
  ...
]
```

### GET /api/stocks/:symbol
Returns a single stock by symbol.

### GET /api/market-status
Returns market status including top gainers and losers.

### GET /api/health
Health check endpoint.

## Environment Variables

- `PORT` - Server port (default: 5000)
- `REACT_APP_MARKET_API` - Frontend's market API URL

## Testing the Integration

1. Start the server: `npm start`
2. Open index.html in browser via local server
3. Check console for any fetch errors
4. Watch the stock prices update in real-time
5. Verify prices match between refreshes (persistent backend state)

## Next Steps

- [ ] Deploy backend to production server
- [ ] Update frontend MARKET_API to production URL
- [ ] Push to GitHub
- [ ] Deploy frontend to GitHub Pages with new backend URL
- [ ] Test multiplayer with friends using the production URL
