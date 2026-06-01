# Borsa Kids - Quick Start Guide

## 🎉 What's New

Your app now has a **real market simulation backend** that creates realistic stock price movements! No more relying on broken API integrations.

### The Problem We Solved
- ❌ Yahoo Finance API: Rate-limited, CORS issues, unreliable
- ✅ Custom Market Simulation Server: Always working, realistic prices, live updates

### What You Get
- **Geometric Brownian Motion**: Professional-grade price simulation used in real trading systems
- **Volatility Clustering**: Volatile stocks stay volatile, stable stocks stay stable
- **Trend Following**: Uptrends and downtrends have momentum
- **Mean Reversion**: Prices revert to sector averages (realistic market behavior)
- **Market News Events**: Random news triggers realistic price spikes
- **Real-Time Updates**: Market updates every second
- **Price History**: 7-tick history for each stock

## 🚀 Get Started in 3 Steps

### Step 1: Run Backend Locally (For Testing)

```bash
cd C:\Users\DELL\borsa-kids
npm install
npm start
```

You'll see:
```
🚀 Market simulation server running on port 5000
📊 Simulating 25 stocks
🔄 Market updates every 1 second
```

### Step 2: Test the App Locally

Open the app in your browser:
```
http://localhost:3456
```

The app will automatically fetch stock data from `http://localhost:5000/api/stocks` and display realistic prices.

### Step 3: Deploy to Production (Choose One)

Pick whichever is easiest for you:

---

## Option A: Deploy to Replit (Easiest, 2 minutes)

1. Go to https://replit.com and sign up (free)
2. Click "Create Repl"
3. Choose "Import from GitHub"
4. Paste: `https://github.com/esteehurwitz-droid/borsa-kids.git`
5. Replit auto-detects Node.js setup and deploys automatically
6. Click "Run" - your server is live!
7. Copy the URL (looks like: `https://my-repl.replit.dev`)

Then update your `index.html`:
```javascript
const MARKET_API = 'https://my-repl.replit.dev'; // Replace with your Replit URL
```

Push to GitHub:
```bash
git add index.html
git commit -m "Update market API URL to production Replit server"
git push origin main
```

---

## Option B: Deploy to Railway.app (Free, 1 minute)

1. Go to https://railway.app and connect your GitHub
2. Create new project → Import from GitHub → select `borsa-kids`
3. Railway automatically deploys within 1 minute
4. Copy your domain from the dashboard

Update `index.html` and push to GitHub (same as Replit).

---

## Option C: Deploy to Heroku (Requires Credit Card)

```bash
npm install -g heroku
heroku login
heroku create borsa-kids-market
git push heroku main
heroku open
```

---

## 📊 API Endpoints

Once deployed, you can check:

### Get All Stocks
```
GET /api/stocks
```
Returns all 25 stocks with current prices, changes, and history.

### Get Market Status
```
GET /api/market-status
```
Returns top gainers and losers.

### Health Check
```
GET /api/health
```
Check if server is running.

---

## 🎮 How It Works

1. **Backend Server** (`server.js`) runs 24/7
2. Every second, it simulates price movements for all 25 stocks
3. **Frontend** fetches `/api/stocks` every 60 seconds
4. Prices update in real-time on the game board
5. Player actions (buy/sell) are logged to localStorage
6. Profit/loss calculates based on real simulated prices

---

## 🧪 Testing

### Test Locally (No Deployment)
```bash
npm start
# Open http://localhost:3456
# Prices should update every minute
```

### Test Deployed Server
```bash
curl https://your-deployed-server.com/api/stocks
# Should see JSON with 25 stocks
```

---

## 📱 Next Steps for App Store

Once the backend is working:

1. **Android (Google Play)**
   - Use Capacitor to wrap web app: `npm install @capacitor/core @capacitor/cli`
   - Build APK and submit to Google Play ($25 one-time fee)

2. **iPhone (Apple App Store)**
   - Use Capacitor/React Native
   - Submit to App Store ($99/year developer account)

3. **Web (Current)**
   - App is already live at: https://esteehurwitz-droid.github.io/borsa-kids/
   - Just update backend URL when you deploy

---

## 🐛 Troubleshooting

**Prices not updating?**
- Check browser console (F12) for errors
- Verify backend URL in `index.html` is correct
- Test API: `curl http://your-backend/api/health`

**Port 5000 already in use?**
```bash
# Kill the process on port 5000 or change:
PORT=5001 npm start
```

**Need to update prices faster?**
Edit `index.html` line ~1872:
```javascript
setInterval(fetchLivePrices, 60000); // Change 60000 to 10000 for every 10 seconds
```

---

## 📞 Support

The app now has everything needed for a real, production-ready stock market game!

Your daughter can:
- ✅ Play with realistic market simulation
- ✅ Share the link with friends to play together
- ✅ Eventually submit to app stores
- ✅ Learn real investing concepts

Enjoy! 🚀

---

**Current Status:**
- ✅ Frontend: Deployed to GitHub Pages
- ⏳ Backend: Ready to deploy (choose your hosting)
- ⏳ Multiplayer: Ready (uses session codes)
- ⏳ App Store: Next phase after backend deployment
