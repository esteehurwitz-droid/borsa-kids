# 🎮 בורסת הילדים - Kids Stock Market Game

> **Live Learning Game for Ages 10+** | Learn Investing by Trading Real Stocks

## 🚀 Live Now!

**Play Online (GitHub Pages):** https://esteehurwitz-droid.github.io/borsa-kids/

**Supports: Hebrew, English, Arabic, Russian**

---

## What Is This?

A **gamified stock market simulator** for kids to learn investing:

- 📈 Trade 45+ real stocks with live prices
- 🎯 Complete daily/weekly quests for XP
- 🏆 Level up through 5 league tiers (Bronze → Diamond)
- 📖 15 free mini-courses (beginner to advanced)
- ❤️ Watchlist to track favorite stocks
- 👥 Play with friends using friend codes
- 🌍 4-language support (Hebrew/English/Arabic/Russian)

**Educational + Fun = Real Learning!**

---

## Quick Start (2 minutes)

### 1. Open the App
→ https://esteehurwitz-droid.github.io/borsa-kids/

### 2. Create Your Profile
- Pick an avatar (12 animal emojis)
- Enter your name
- Click "Let's Start!"

### 3. Play!
- 🏪 **Market**: Buy/sell 45+ real stocks
- ❤️ **Watchlist**: Star favorite stocks
- 📖 **Courses**: Learn investing concepts
- 🎯 **Quests**: Daily challenges for XP
- 🏆 **League**: Climb the leaderboard

---

## Features

### 📊 Real Market Data
- ✅ 45+ stocks from 8 sectors
- ✅ Live prices via Finnhub API (requires Replit deployment)
- ✅ Real 24h price changes
- ✅ 6 major market indices
- ✅ Prices in NIS (Israeli Shekel)

### 🎮 Game Mechanics
- ✅ Start with ₪100,000 (simulated money)
- ✅ Buy low, sell high to earn profits
- ✅ Track portfolio value and P/L
- ✅ XP system (0 → unlimited)
- ✅ 5 league tiers (unlock rewards)

### 📚 Educational Content
- ✅ 15 mini-courses (5 topics × 3 levels)
  - What Are Stocks?
  - Building Your Portfolio
  - Understanding Risk
  - Reading Charts
  - How News Affects Stocks
- ✅ Quiz in each course
- ✅ Real stock examples
- ✅ Progressive learning (Quick → Standard → Deep Dive)

### 👥 Social Features
- ✅ Friend codes (4-digit codes to connect with friends)
- ✅ Trade together
- ✅ Leaderboard (compete on value)
- ✅ Share session codes

### 🌍 Multi-Language
- ✅ Hebrew (עברית) - RTL layout
- ✅ English - Full support
- ✅ Arabic (العربية) - RTL layout
- ✅ Russian (Русский) - Full support

---

## Deploy for Live Prices (5 minutes)

By default, the app shows simulated prices. To get **real live prices**:

### Step 1: Deploy Backend to Replit
See: **[LIVE_DEPLOYMENT.md](LIVE_DEPLOYMENT.md)** (complete guide)

Quick version:
1. Go to https://replit.com
2. Import: `https://github.com/esteehurwitz-droid/borsa-kids`
3. Click **Run**
4. Copy the public URL

### Step 2: Configure Frontend
The app will auto-prompt for the Replit URL on first load, OR edit line 2454 in `index.html`:

```javascript
let MARKET_API = localStorage.getItem('MARKET_API_URL') || 'https://your-replit-url.repl.co';
```

### Step 3: Done!
Prices now update live every 60 seconds from real Finnhub API.

---

## Files in This Repo

```
borsa-kids/
├── index.html                  # Main app (all-in-one file, ~3000 lines)
├── server.js                   # Node.js backend for live prices
├── package.json                # Dependencies (express, cors, etc.)
├── .replit                      # Replit configuration
├── LIVE_DEPLOYMENT.md          # Detailed Replit deployment guide ⭐
├── MINI_COURSES_DATABASE.md    # Course content documentation
├── PROGRESS_SUMMARY.md         # Development progress tracker
├── REDESIGN_PLAN.md            # Feature roadmap
└── README.md                   # Basic project info
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vanilla HTML/CSS/JavaScript (single file) |
| **Backend** | Node.js + Express |
| **API** | Finnhub (stock prices) + Custom API |
| **Hosting** | GitHub Pages (frontend) + Replit (backend) |
| **Language** | 4-language i18n system (Hebrew/English/Arabic/Russian) |

---

## Testing Checklist

- [x] Onboarding flow (avatars → name → start)
- [x] Market tab (stocks load, prices update)
- [x] Watchlist (add/remove favorites)
- [x] Courses (all 15 courses loadable)
- [x] Quests (daily/weekly/seasonal display)
- [x] League (tier display, XP progress)
- [x] Language switching (4 languages work)
- [x] Friend codes (share/join works)
- [x] Portfolio tracking (buy/sell, P/L calculation)
- [x] Real live prices (when Replit deployed)

---

## Known Issues & Fixes

### Fixed in Latest Version ✅
- ✅ Syntax error (duplicate variable declaration)
- ✅ Language detection (respects browser locale)
- ✅ Language buttons (added event listeners as backup)
- ✅ Undefined variables (playerXP → xp)
- ✅ Missing null checks (render functions)

### Not Yet Implemented ⏳
- Saving trading history
- Advanced technical analysis (RSI, MACD, etc.)
- AI chat integration
- Mobile app (iOS/Android via Capacitor)
- Real money integration
- Advanced portfolio analytics

---

## Browser Requirements

- Chrome, Firefox, Safari, Edge (modern versions)
- JavaScript enabled
- ~2MB storage (for localStorage)
- Works on mobile (responsive design)

---

## Privacy & Safety

- ✅ **No real money** - purely educational simulation
- ✅ **No accounts/login** - plays locally via browser storage
- ✅ **No personal data** - just player name and avatar
- ✅ **No ads** - completely free
- ✅ **Open source** - code transparent on GitHub

---

## Future Roadmap

**Phase 4 (Coming Soon):**
- [ ] AI chat for stock questions
- [ ] Advanced quizzes with mini-games
- [ ] Expandable lesson cards with details
- [ ] Stock market simulator for practice trading

**Phase 5 (Later):**
- [ ] Mobile app (iOS/Android)
- [ ] Real-time multiplayer trading
- [ ] League tournaments
- [ ] Educational certificates

---

## Support & Feedback

**Issues?** → https://github.com/esteehurwitz-droid/borsa-kids/issues

**Questions?** → Check README or LIVE_DEPLOYMENT.md

**Want to contribute?** → Fork and submit a PR!

---

## License

Open source - feel free to fork, modify, and deploy!

---

## Credits

Built with ❤️ for young investors everywhere.

**Made with:** HTML5 • CSS3 • Vanilla JavaScript • Express.js • Finnhub API

---

## 🎯 Let's Launch! 

**Step 1:** Open https://esteehurwitz-droid.github.io/borsa-kids/

**Step 2:** Create your profile

**Step 3:** Start trading and learning!

**Step 4 (Optional):** Deploy to Replit for live prices

Happy investing! 📈
