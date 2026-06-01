# 🎯 Setup Real Stock Prices - Step by Step

**Time needed: 3 minutes**

## Current Situation

✅ Your app is running  
✅ Backend server is working  
❌ Prices are simulated (not real)

**After these 3 steps, you'll see REAL market prices!**

---

## Step 1: Get Free API Key (1 minute)

### Go to Finnhub.io

1. Open: https://finnhub.io
2. Click "Sign up" (top right corner)
3. Enter:
   - Email: your email
   - Password: any password
   - Click "Sign up"

### Get Your API Key

4. After signing up, you see your dashboard
5. Look for **API Key** (usually top of page)
6. Copy the long string (looks like: `abcd1234efgh5678...`)
7. **SAVE IT** - paste it somewhere for next step

---

## Step 2: Paste API Key in .env File (1 minute)

### Open .env File

In your `C:\Users\DELL\borsa-kids\` folder, open `.env` file with Notepad

### Replace the Key

**Before:**
```
FINNHUB_API_KEY=demo
```

**After (paste your real key):**
```
FINNHUB_API_KEY=abcd1234efgh5678ijkl9012mnop3456
```

### Save File

Press Ctrl+S to save

---

## Step 3: Restart Server (1 minute)

### Stop Current Server

In PowerShell, press **Ctrl+C** to stop the running server

### Restart with Real Prices

```powershell
cd C:\Users\DELL\borsa-kids
npm start
```

### Verify It Works

You should see:
```
✅ Using REAL LIVE market prices from Finnhub
🔄 Real prices update every 60 seconds
```

If you see this, you're DONE! 🎉

---

## Step 4: See Real Prices in Game

Open app in browser:
```
http://localhost:3456
```

Reload the page (Ctrl+R)

**Now you should see REAL prices!**

Example:
- Apple (AAPL): ₪185.50 ← REAL price today
- Google (GOOGL): ₪140.25 ← REAL price today
- Microsoft (MSFT): ₪310.75 ← REAL price today

---

## Troubleshooting

**Q: Server says "Using demo mode"**
A: API key is wrong or not set. Check:
1. Did you copy key correctly?
2. Did you paste it in .env file?
3. Did you save the .env file (Ctrl+S)?
4. Restart server again

**Q: Server shows error about API**
A: Your API key might be wrong. Get a new one from Finnhub.

**Q: Prices still not updating?**
A: Reload the game (Ctrl+R) in browser

**Q: "Too many requests" error?**
A: You hit rate limit. Wait 1 minute, it fixes itself.

---

## That's It!

Your daughter's game now shows **ACTUAL REAL MARKET PRICES** instead of simulated ones.

She'll learn with real data! 📈

---

## Next: Deploy to Production

Once real prices are working locally:

1. Deploy backend to Replit (see QUICKSTART.md)
2. Update frontend with production URL
3. Share with friends!

---

**Questions?** See GET_REAL_PRICES.md for more details.
