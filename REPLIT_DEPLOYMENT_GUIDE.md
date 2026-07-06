# 🚀 Replit Deployment - Get Live Prices Working

## Problem
GitHub Pages (static hosting) **cannot access localhost:5000**. You need a **public backend URL** for live prices.

**Solution:** Deploy to Replit (free, instant public URL)

---

## Step 1: Create Replit Account (1 min)
1. Go to https://replit.com/signup
2. Sign up with GitHub (use your `esteehurwitz-droid` account)
3. Click "Create" after signup

---

## Step 2: Import Your Repo (2 mins)
1. Click **"+ Create"** button (top-left)
2. Select **"Import from GitHub"**
3. Paste: `https://github.com/esteehurwitz-droid/borsa-kids`
4. Click **"Import from GitHub"**
5. Wait 30 seconds for import to complete

---

## Step 3: Run the Server (1 min)
1. Click **"Run"** button (top-center)
2. Wait 10 seconds for startup
3. You'll see: **"Listening on port 5000"**
4. A public URL appears at top-right, like: `https://borsa-kids.esteehurwitz-droid.repl.co`

---

## Step 4: Configure Frontend to Use Replit URL (2 mins)

### Option A: In-App Setup Wizard (Easiest)
1. Open your app on GitHub Pages
2. When prices don't load, a popup appears asking for Replit URL
3. Paste the URL from Step 3
4. Click OK → Prices load ✅

### Option B: Manual Update (in code)
In `index.html`, find this line (~line 2454):
```javascript
let MARKET_API = localStorage.getItem('MARKET_API_URL') || 'http://localhost:5000';
```

Change to:
```javascript
let MARKET_API = localStorage.getItem('MARKET_API_URL') || 'https://borsa-kids.esteehurwitz-droid.repl.co';
```

Then commit:
```bash
git add index.html
git commit -m "🔧 Update backend URL to Replit"
git push origin main
```

---

## Step 5: Test on GitHub Pages (1 min)
1. Open: https://esteehurwitz-droid.github.io/borsa-kids/
2. Refresh page
3. **Prices should now be LIVE** 🟢 (watch them update every 60 seconds)
4. Indices tab shows real market data ✅

---

## What You Get
✅ **Real-time stock prices** (updates every 60 seconds)  
✅ **6 market indices** (S&P 500, Dow, Nasdaq, VIX, etc.)  
✅ **Live market status** (Open/Closed indicator)  
✅ **Price history charts** (24-hour price trends)  
✅ **Works on mobile** (PWA-ready)

---

## Replit Keep-Alive (Optional)
Replit free tier sleeps after 1 hour idle. To keep it running:
1. In Replit, click **"Secrets"** (left sidebar, lock icon)
2. Add new secret: `KEEP_ALIVE = true`
3. Server stays awake 24/7 ✅

Or just click "Run" every few hours manually.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| "Cannot connect to API" | Wait 30 sec, refresh page |
| Replit won't start | Check `.replit` file has `run = "npm start"` |
| 404 errors | Make sure you're on GitHub Pages (not localhost) |
| Slow prices | Normal (API calls take 2-3 sec, cached for 60 sec) |

---

## Your Public Backend URL
```
https://borsa-kids.YOURUSERNAME.repl.co
```

Replace `YOURUSERNAME` with your Replit username.

**Now share this with friends!** 🎉
- PWA: https://esteehurwitz-droid.github.io/borsa-kids/
- Backend: Your Replit URL
- Play together with friend codes ✅

---

## Next Steps
1. ✅ Deploy backend to Replit
2. ✅ Update frontend URL to Replit
3. ✅ Test live prices
4. ✅ Play with friends (friend codes work!)
5. 🎮 Complete quests to level up
6. 🏆 Compete on leaderboards

**You're ready to launch!** 🚀
