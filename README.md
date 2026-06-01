# 📈 Borsa Kids - Educational Stock Market Game

A beautiful, educational stock market simulation game built for young investors to learn about trading, diversification, and financial concepts.

## 🎮 Features

### 📚 Educational
- Learn about real stocks and companies
- Understand sectors (Technology, AI, Clean Energy, etc.)
- Track profit/loss and portfolio performance
- Study investing lessons with interactive lessons
- Compound interest calculator with real formulas

### 🎯 Gamification
- XP system with 6 levels (Beginner → Mini-Buffett)
- Achievement badges (First Buy, First Sell, Diversified, Profit Goals, etc.)
- Leaderboard with friends/opponents
- Session codes to play with friends
- Night mode market hours

### 💼 Market Features
- 25 real stocks across 7 sectors
- **Realistic market simulation** with professional GBM algorithm
- Price history charts (7-tick)
- Buy/Sell mechanics with realistic price slippage
- Portfolio tracking and analytics
- Top Gainers/Losers dashboard

### 🌍 Multi-Language
- Hebrew (עברית) - RTL support
- English
- Arabic (العربية) - RTL support
- Russian (Русский)

---

## 🏗️ Architecture

```
┌─────────────────────────────────┐
│   Frontend (HTML/CSS/JS)        │
│   GitHub Pages                  │
│   - Single Page App             │
│   - localStorage persistence    │
│   - RTL/LTR support            │
└──────────┬──────────────────────┘
           │
           │ HTTP REST API
           │ /api/stocks
           │ /api/market-status
           │
┌──────────▼──────────────────────┐
│   Backend (Node.js/Express)     │
│   Market Simulation Server      │
│   - GBM Price Simulation        │
│   - Volatility Clustering       │
│   - Market News Events          │
│   - Real-time Updates           │
└─────────────────────────────────┘
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ installed
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start backend server (port 5000)
npm start

# In another terminal, serve frontend (port 3456)
npx serve -l 3456 .

# Open browser
http://localhost:3456
```

### Deploy to Production

See [QUICKSTART.md](./QUICKSTART.md) for deployment options:
- **Replit** (fastest, free)
- **Railway.app** (1-click deployment)
- **Heroku** (traditional option)
- **Vercel Functions** (serverless)

---

## 📁 File Structure

```
borsa-kids/
├── index.html              # Main app (HTML/CSS/JS)
├── server.js              # Backend market simulator
├── package.json           # Node dependencies
├── package-lock.json      # Lock file
├── .gitignore             # Git ignore rules
├── QUICKSTART.md          # Deployment guide
├── DEPLOYMENT.md          # Detailed deployment docs
├── README.md              # This file
└── firebase.json          # Firebase config (optional)
```

---

## 🔍 How the Market Simulation Works

### Geometric Brownian Motion (GBM)
```
P(t+1) = P(t) × exp((μ - σ²/2)×dt + σ×dW)
```

Where:
- **μ** = drift (long-term trend)
- **σ** = volatility (realistic per-stock)
- **dt** = time step (1 = 1 minute equivalent)
- **dW** = random Wiener process

### Smart Features
✅ **Volatility Clustering** - Volatile days cluster together
✅ **Mean Reversion** - Prices revert to sector averages
✅ **Trend Persistence** - Uptrends and downtrends have momentum
✅ **Market News** - Random events cause realistic spikes
✅ **Sector Correlation** - Stocks in same sector move together

---

## 📊 25 Stocks Included

### Technology (5)
- Apple (AAPL) 🍎
- Google (GOOGL) 🔍
- Microsoft (MSFT) 🪟
- Meta (META) 👓
- Netflix (NFLX) 🎬

### AI (3)
- Nvidia (NVDA) 🤖
- Palantir (PLTR) 🧠
- C3.ai (AI) 💡

### Robotics (3)
- Intuitive (ISRG) 🦾
- ABB (ABB) 🏭
- Teradyne (TER) 🔬

### Clean Energy (3)
- Tesla (TSLA) ⚡
- Enphase (ENPH) ☀️
- Plug Power (PLUG) 💧

### Future (2)
- Roblox (RBLX) 🎮
- Coinbase (COIN) ₿

### Traditional (7)
- Amazon (AMZN) 📦
- Disney (DIS) 🏰
- McDonald's (MCD) 🍔
- Coca-Cola (KO) 🥤
- Nike (NKE) 👟
- Visa (V) 💳
- JP Morgan (JPM) 🏦

### International (2)
- TSMC (TSM) 🔧
- ASML (ASML) 🔭

---

## 🎓 Educational Content

The app includes lessons on:
- What are stocks?
- Artificial Intelligence and AI companies
- Key investing terms (portfolio, diversification, dividends)
- Smart investing tips
- Compound interest and long-term wealth building

---

## 🔐 Security & Privacy

- No authentication required (single-device game)
- Game data stored in browser localStorage
- No personal data collection
- Server only provides public market data
- Session codes are just random strings (no user tracking)

---

## 📱 Future: App Store Submission

Once backend is deployed and tested:

### Android (Google Play)
- Cost: $25 one-time
- Tool: Capacitor (wraps web app as native)
- Time: ~1 week approval

### iPhone (App Store)
- Cost: $99/year
- Tool: Capacitor/React Native
- Time: ~3-7 days approval

See [App Store Guide](./APP_STORE.md) for details.

---

## 🤝 Contributing

This is a personal educational project. Feel free to:
- Add more stocks
- Improve the simulation algorithm
- Add new features
- Improve translations
- Create feature branches and PR

---

## 📄 License

MIT License - feel free to use for educational purposes.

---

## 🚀 Roadmap

- [x] Basic stock trading game
- [x] Multi-language support
- [x] Gamification (XP, levels, achievements)
- [x] Realistic market simulation backend
- [ ] Deploy backend to production
- [ ] Multiplayer features (real-time sync)
- [ ] Portfolio analytics dashboard
- [ ] Social features (friend leaderboards)
- [ ] Android app submission
- [ ] iOS app submission
- [ ] In-app purchases for cosmetics

---

## 💡 Tips for Young Investors

1. **Diversify** - Don't put all money in one stock
2. **Think Long-Term** - Short-term volatility is normal
3. **Learn Sectors** - Different sectors perform differently
4. **Follow News** - Real events affect stock prices
5. **Be Patient** - Wealth builds over time

---

## 📞 Questions?

See the [QUICKSTART.md](./QUICKSTART.md) for deployment help.

---

**Built with ❤️ for young investors everywhere** 📈

Deploy your backend today and start playing! 🚀
