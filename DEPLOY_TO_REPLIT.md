# 🚀 Deploy to Replit - Step by Step (5 Minutes)

## What Replit Does

Replit hosts your backend server for FREE so it runs 24/7 and anyone can play your game from anywhere in the world!

---

## Step 1: Go to Replit (1 minute)

1. Open: **https://replit.com**
2. Click **"Sign up"** (top right)
3. Choose **"Sign up with GitHub"**
4. Click **"Authorize replit"**
5. Done! You're logged in.

---

## Step 2: Create a New Repl from GitHub (2 minutes)

### Back on Replit after signing in:

1. Click **"Create"** button (top left)
2. Click **"Import from GitHub"**
3. Paste this URL:
   ```
   https://github.com/esteehurwitz-droid/borsa-kids.git
   ```
4. Click **"Import from GitHub"**
5. Wait 30 seconds... Replit creates your project!

---

## Step 3: Set Environment Variable (1 minute)

### Your API Key needs to be in Replit:

1. In Replit, look left sidebar → **"Secrets"** (🔒 icon)
2. Click **"New Secret"**
3. **Key:** `FINNHUB_API_KEY`
4. **Value:** `d8et4i1r01qub7kensv0d8et4i1r01qub7kensvg` (your API key)
5. Click **"Add Secret"**

---

## Step 4: Run Your Server (1 minute)

1. Click the big **"Run"** button (top center)
2. Replit installs dependencies and starts your server
3. You'll see:
   ```
   🚀 Stock market server running on port 5000
   ✅ Using REAL LIVE market prices from Finnhub
   ```
4. ✅ Your server is LIVE!

---

## Step 5: Get Your Server URL (30 seconds)

1. Look at the top of the console output
2. You'll see a URL like: `https://borsa-kids.username.repl.co`
3. **COPY THIS URL** - you'll need it next

---

## Step 6: Update Your Frontend (1 minute)

Your game needs to know where the backend is.

### Back on your Computer:

1. Open `C:\Users\DELL\borsa-kids\index.html` in Notepad
2. Find line ~1799: `const MARKET_API = 'http://localhost:5000';`
3. Replace with your Replit URL:
   ```javascript
   const MARKET_API = 'https://borsa-kids.username.repl.co';
   ```
   (Replace `username` with whatever appears in your Replit URL)

4. Save the file (Ctrl+S)

---

## Step 7: Push to GitHub (1 minute)

### In PowerShell:

```powershell
cd C:\Users\DELL\borsa-kids
git add index.html
git commit -m "Update backend URL to production Replit server"
git push origin main
```

---

## Step 8: Verify Everything Works (1 minute)

1. Open: **https://esteehurwitz-droid.github.io/borsa-kids/**
2. Wait 30 seconds for the app to load
3. Check the stock prices
4. They should update from your **LIVE REPLIT SERVER**! 🎉

---

## Done! 🎉

Your game is now:
- ✅ Running 24/7 on Replit
- ✅ Using REAL market prices
- ✅ Playable from anywhere
- ✅ Shareable with friends

---

## Share with Friends

Give them this link:
```
https://esteehurwitz-droid.github.io/borsa-kids/
```

They'll play your game with REAL stock prices from your Replit server! 🚀

---

## Troubleshooting

**Q: Getting "Cannot fetch from server" error?**
A: Make sure you:
1. Updated the URL in index.html correctly
2. Pushed to GitHub
3. The Replit server is still running (click "Run" again)

**Q: Prices not updating?**
A: 
1. Reload the game page (Ctrl+R)
2. Wait 60 seconds (prices update every minute)

**Q: Can't see my Replit URL?**
A: In Replit, click the "Webview" tab - the URL appears at the top.

**Q: Server keeps stopping?**
A: Replit free tier puts servers to sleep after inactivity. Click "Always On" to keep it running (requires paid account) or restart by clicking "Run".

---

## Free vs Paid Replit

**Free (Enough for your game!):**
- ✅ Hosting
- ✅ Real live prices
- ✅ Shareable link
- ❌ Server sleeps after 1 hour inactivity

**Always On ($7/month):**
- ✅ Everything free has
- ✅ Server always running
- ✅ Perfect for multiplayer
- ✅ Friends can play 24/7

For testing: **Free is perfect!**
For production: **Always On recommended**

---

## Next Steps After Deployment

1. ✅ Test with your daughter
2. ✅ Share link with friends
3. ✅ Watch them play with REAL prices!
4. ✅ Consider "Always On" if popular
5. ✅ Plan App Store submission (future phase)

---

## You Now Have:

```
Your Computer (Local Testing)
        ↓
GitHub Pages (Frontend - Global)
        ↓
Replit Server (Backend - 24/7 Real Prices!)
        ↓
Friends Playing Your Game! 🎮
```

**Everything is LIVE!** 🚀

---

## Questions?

See QUICKSTART.md for alternative deployment options (Railway, Heroku, etc.)

**Your app is production-ready!** 🎉
