# 🔥 Get REAL Live Stock Prices

Your app now supports **actual real-time stock market prices** instead of simulated ones!

## Why This Matters

Instead of seeing made-up prices like:
- Apple: ₪194.01 (simulated)
- Google: ₪138.55 (simulated)

You'll see **REAL prices** like:
- Apple: ₪185.50 (REAL - today's actual price)
- Google: ₪140.25 (REAL - what it's trading at now)

Your daughter learns with real market data! 📈

## How to Enable Real Prices (3 minutes)

### Step 1: Get Free API Key

1. Go to https://finnhub.io
2. Click "Sign up for free"
3. Fill in: Name, Email, Password
4. Click "Register"
5. You'll see your **API Key** on the dashboard (long string like `abcd1234...`)
6. Copy it

### Step 2: Set Environment Variable

**On Windows (PowerShell):**
```powershell
$env:FINNHUB_API_KEY = "your-api-key-here"
npm start
```

**On Mac/Linux (Terminal):**
```bash
export FINNHUB_API_KEY="your-api-key-here"
npm start
```

**Or create .env file:**
```bash
echo FINNHUB_API_KEY=your-api-key-here > .env
npm start
```

### Step 3: Verify It's Working

When you start the server, you should see:
```
✅ Using REAL LIVE market prices from Finnhub
🔄 Real prices update every 60 seconds
```

And in the logs:
```
[LIVE] AAPL: $185.50 (+0.32%)
[LIVE] GOOGL: $140.25 (-1.15%)
[LIVE] MSFT: $310.75 (-0.08%)
```

Done! 🎉

## How It Works

```
Finnhub.io (Real Market Data)
         ↓
   Your Backend Server
         ↓
   Fetches real prices every 60 seconds
         ↓
   Frontend App
         ↓
   Shows REAL stock prices to players
```

## Free Tier Limits

Finnhub's free tier includes:
- ✅ Real-time prices
- ✅ 60 requests per minute (plenty!)
- ✅ Basic market data
- ✅ All 25 stocks we're tracking

Perfect for your game!

## Fallback (Demo Mode)

If you don't set an API key:
- Server runs in "demo mode"
- Prices are realistically simulated
- Game still works perfectly
- No actual market data, but realistic patterns

To switch to demo mode (if you get rate limited):
```bash
# Just restart without API key
npm start
```

## Troubleshooting

**Q: Prices not updating?**
A: Check if API key is correct:
```bash
echo $FINNHUB_API_KEY  # Should print your key
```

**Q: Getting "Too many requests" error?**
A: You hit rate limit. Wait 1 minute or use demo mode.

**Q: Want to update more frequently?**
A: Edit `server.js` line ~230:
```javascript
setInterval(updateRealPrices, 30000); // Update every 30 seconds instead of 60
```

Note: Finnhub free tier: 60 requests/minute = can update all 25 stocks every 25 seconds max.

## Deployment with Real Prices

When you deploy to Replit/Railway/Heroku:

**Replit:**
1. Go to Replit project Secrets (🔒 icon)
2. Add: `FINNHUB_API_KEY` = your key
3. Server auto-reads it on startup

**Railway.app:**
1. Go to project settings
2. Add environment variable: `FINNHUB_API_KEY=your-key`

**Heroku:**
```bash
heroku config:set FINNHUB_API_KEY="your-key"
heroku restart
```

## Alternative Data Providers

If Finnhub doesn't work, try:

**IEX Cloud** (https://iexcloud.io)
- Free tier available
- Real market data
- Similar setup

**Polygon.io** (https://polygon.io)
- Free tier
- Professional-grade data
- More complex setup

**Alpha Vantage** (https://www.alphavantage.co)
- Free tier
- Simple REST API
- 5 requests/min limit (slower)

## Cost

- **Finnhub Free Tier**: $0 forever (if you stay within limits)
- **Paid Finnhub**: $9.99/month (unlimited)
- **Other providers**: Similar free/paid options

For your game, **free tier is more than enough!** 🚀

## Next Steps

1. ✅ Get API key from Finnhub (1 minute)
2. ✅ Set environment variable (1 minute)
3. ✅ Restart server (1 minute)
4. ✅ See REAL prices in the game!

**Your daughter's game now uses the same real market data as professional traders.** 📊

---

## Quick Commands

```bash
# Get API key
# → Go to https://finnhub.io → Sign up → Copy key from dashboard

# Set API key (Windows PowerShell)
$env:FINNHUB_API_KEY = "YOUR-KEY-HERE"

# Start server with real prices
npm start

# Test real prices are working
curl http://localhost:5000/api/stocks
# Should show [LIVE] logs if real prices are being fetched
```

That's it! Your app now shows **REAL stock prices** to your daughter. 🎉
