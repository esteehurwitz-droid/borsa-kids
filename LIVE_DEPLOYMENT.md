# 🚀 Live Deployment Guide - בורסת הילדים

## Quick Start: Deploy to Replit (5 minutes)

### Step 1: Create Replit Project
1. Go to https://replit.com
2. Click **+ Create** (or "Import from GitHub")
3. Select **Import from GitHub**
4. Paste: `https://github.com/esteehurwitz-droid/borsa-kids`
5. Click **Import from GitHub** → Wait 30 seconds

### Step 2: Run the Server
1. Click **Run** button (top center)
2. Wait for: `🎮 Server listening on port 5000`
3. Copy the **Public URL** (appears at top-right, like `https://borsa-kids.YOUR-USERNAME.repl.co`)

### Step 3: Configure Finnhub API (Optional but Recommended)
For real stock prices instead of simulated:

1. Get free API key: https://finnhub.io (sign up, get key in 30 seconds)
2. In Replit, click **Secrets** (lock icon, left sidebar)
3. Add new secret:
   - Key: `FINNHUB_API_KEY`
   - Value: `Your-API-Key-From-Finnhub`
4. Click **Run** again

### Step 4: Update Frontend with Replit URL
In the repo, edit `index.html` line 2454:

**Find:**
```javascript
let MARKET_API = localStorage.getItem('MARKET_API_URL') || 'http://localhost:5000';
```

**Replace with:**
```javascript
let MARKET_API = localStorage.getItem('MARKET_API_URL') || 'https://borsa-kids.YOUR-USERNAME.repl.co';
```

Or let the app auto-configure:
- Open the app on GitHub Pages
- A popup will ask for the Replit URL
- Paste it once, and it's saved in localStorage

### Step 5: Test Live
1. Open: https://esteehurwitz-droid.github.io/borsa-kids/
2. Hard refresh: **Ctrl+Shift+R**
3. You should see **real stock prices** updating every 60 seconds
4. Prices show in NIS (₪) with live 24h changes

---

## Deployment Checklist

- [ ] Replit project created and running
- [ ] Finnhub API key configured (optional)
- [ ] Frontend URL updated or auto-configured
- [ ] GitHub Pages updated (wait 1-2 min for deploy)
- [ ] Live prices showing on Market tab
- [ ] Language switching works (Hebrew/English/Arabic/Russian)
- [ ] All tabs functional (Market, Watchlist, Courses, Quests, League)
- [ ] Onboarding flow complete (avatars → name → start)

---

## What's Working Now ✅

### Core Features
- ✅ **45+ Real Stocks** organized by 8 sectors
- ✅ **Live Price Updates** every 60 seconds (from Finnhub API via Replit)
- ✅ **Portfolio Tracking** with P/L calculations
- ✅ **Watchlist** - add favorite stocks to track
- ✅ **6 Market Indices** (S&P 500, Dow, Nasdaq, VIX, etc.)

### Game Features
- ✅ **Avatar Selection** (12 animal emojis)
- ✅ **XP Progression** (Bronze → Diamond tier system)
- ✅ **15 Quests** (daily/weekly/seasonal with rewards)
- ✅ **15 Mini Courses** (5 categories × 3 difficulty levels)
- ✅ **League Leaderboard** (compete with friends)
- ✅ **Friend Codes** (trade together via shared codes)

### Multi-Language Support
- ✅ **Hebrew** (עברית) - RTL
- ✅ **English** - LTR
- ✅ **Arabic** (العربية) - RTL
- ✅ **Russian** (Русский) - LTR

---

## Known Limitations

- Market only updates during US market hours (9:30 AM - 4:00 PM ET)
- After hours: uses simulated GBM pricing
- Replit free tier: sleeps after 1 hour of inactivity (see Keep-Alive below)

---

## Keep Replit Running 24/7 (Optional)

Replit free tier sleeps after 1 hour. To keep it running:

### Option 1: Use Uptime Monitor (Free)
1. Go to https://uptimerobot.com
2. Create account, add Monitor
3. URL: `https://YOUR-REPLIT-URL/health`
4. Check every 5 minutes
5. Done! Keeps server awake

### Option 2: Replit Boost
- Upgrade to Replit Boost ($7/month)
- Server stays awake permanently

### Option 3: Manual Keep-Alive
- Visit the Replit URL every hour
- Click "Run" button in Replit manually

---

## Sharing with Others

Share these links:

**Main App (GitHub Pages):**
```
https://esteehurwitz-droid.github.io/borsa-kids/
```

**Backend/API (Replit):**
```
https://borsa-kids.YOUR-USERNAME.repl.co
```

**Share This Guide:**
```
https://github.com/esteehurwitz-droid/borsa-kids/blob/main/LIVE_DEPLOYMENT.md
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Cannot connect to server" | Make sure Replit is running (click Run) |
| Prices not updating | Check Finnhub API key in Replit Secrets |
| 404 errors | Hard refresh (Ctrl+Shift+R) on GitHub Pages |
| Still seeing old version | Clear browser cache or test in incognito window |

---

## Next Steps

1. ✅ Deploy to Replit (this guide)
2. ✅ Test on GitHub Pages with live prices
3. 📱 Deploy to App Store (iOS/Android) via Capacitor
4. 🎮 Add more quests and AI chat feature
5. 🌍 Localize for more languages

---

**Ready to Launch!** 🎉

Questions? Check the GitHub repo issues or README.

Happy investing! 📈
