const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// ═══════════════════════════════════════════════════════════════
// STOCK DATA AND MARKET STATE
// ═══════════════════════════════════════════════════════════════

const stocksBase = [
  {symbol:'AAPL',name:'Apple',icon:'🍎',sector:'Technology',price:185,vol:0.018},
  {symbol:'GOOGL',name:'Google',icon:'🔍',sector:'Technology',price:140,vol:0.02},
  {symbol:'MSFT',name:'Microsoft',icon:'🪟',sector:'Technology',price:310,vol:0.016},
  {symbol:'META',name:'Meta',icon:'👓',sector:'Technology',price:200,vol:0.025},
  {symbol:'NFLX',name:'Netflix',icon:'🎬',sector:'Technology',price:450,vol:0.03},
  {symbol:'NVDA',name:'Nvidia',icon:'🤖',sector:'AI',price:480,vol:0.05},
  {symbol:'PLTR',name:'Palantir',icon:'🧠',sector:'AI',price:18,vol:0.065},
  {symbol:'AI',name:'C3.ai',icon:'💡',sector:'AI',price:25,vol:0.07},
  {symbol:'ISRG',name:'Intuitive',icon:'🦾',sector:'Robotics',price:320,vol:0.03},
  {symbol:'ABB',name:'ABB',icon:'🏭',sector:'Robotics',price:28,vol:0.025},
  {symbol:'TER',name:'Teradyne',icon:'🔬',sector:'Robotics',price:110,vol:0.035},
  {symbol:'TSLA',name:'Tesla',icon:'⚡',sector:'Clean Energy',price:800,vol:0.055},
  {symbol:'ENPH',name:'Enphase',icon:'☀️',sector:'Clean Energy',price:125,vol:0.05},
  {symbol:'PLUG',name:'Plug Power',icon:'💧',sector:'Clean Energy',price:12,vol:0.08},
  {symbol:'RBLX',name:'Roblox',icon:'🎮',sector:'Future',price:45,vol:0.055},
  {symbol:'COIN',name:'Coinbase',icon:'₿',sector:'Future',price:68,vol:0.07},
  {symbol:'AMZN',name:'Amazon',icon:'📦',sector:'Traditional',price:178,vol:0.022},
  {symbol:'DIS',name:'Disney',icon:'🏰',sector:'Traditional',price:95,vol:0.02},
  {symbol:'MCD',name:"McDonald's",icon:'🍔',sector:'Traditional',price:275,vol:0.012},
  {symbol:'KO',name:'Coca-Cola',icon:'🥤',sector:'Traditional',price:58,vol:0.01},
  {symbol:'NKE',name:'Nike',icon:'👟',sector:'Traditional',price:105,vol:0.022},
  {symbol:'V',name:'Visa',icon:'💳',sector:'Traditional',price:210,vol:0.014},
  {symbol:'JPM',name:'JP Morgan',icon:'🏦',sector:'Traditional',price:155,vol:0.016},
  {symbol:'TSM',name:'TSMC',icon:'🔧',sector:'International',price:92,vol:0.03},
  {symbol:'ASML',name:'ASML',icon:'🔭',sector:'International',price:680,vol:0.025},
];

// Initialize market state
const marketState = {};
stocksBase.forEach(stock => {
  marketState[stock.symbol] = {
    ...stock,
    change: 0,
    changePercent: 0,
    history: [stock.price],
    trend: 0, // -1 (down), 0 (neutral), +1 (up)
    volatilityCluster: 0,
    lastNewsTime: 0
  };
});

// ═══════════════════════════════════════════════════════════════
// REALISTIC MARKET SIMULATION
// ═══════════════════════════════════════════════════════════════

/**
 * Geometric Brownian Motion: P(t+1) = P(t) * exp((μ - σ²/2)*dt + σ*dW)
 * where:
 *   μ = drift (long-term trend)
 *   σ = volatility
 *   dW = random Wiener process increment
 */
function simulatePrice(stock) {
  const dt = 1; // one tick = 1 minute equivalent
  const volatility = stock.vol;

  // Drift based on sector trends
  let drift = 0.0001; // slight positive drift

  if (stock.trend > 0) drift = 0.0005; // uptrend accelerates
  if (stock.trend < 0) drift = -0.0005; // downtrend accelerates

  // Mean reversion: stocks tend to revert to sector average
  const sectorStocks = Object.values(marketState).filter(s => s.sector === stock.sector);
  if (sectorStocks.length > 0) {
    const avgPrice = sectorStocks.reduce((sum, s) => sum + s.price, 0) / sectorStocks.length;
    const deviation = (stock.price - avgPrice) / avgPrice;
    drift -= deviation * 0.0001; // revert toward sector mean
  }

  // Volatility clustering: if recently volatile, stay volatile
  const volatilityMultiplier = 1 + (stock.volatilityCluster * 0.5);
  const effectiveVol = volatility * volatilityMultiplier;

  // Random shock
  const dW = (Math.random() + Math.random() - 1) * Math.sqrt(dt); // better distribution

  // GBM formula
  const logReturn = (drift - (effectiveVol * effectiveVol) / 2) * dt + effectiveVol * dW;
  const newPrice = stock.price * Math.exp(logReturn);

  // Update volatility cluster
  stock.volatilityCluster = Math.abs(dW) * 0.7 + stock.volatilityCluster * 0.3;

  return newPrice;
}

/**
 * Update trend: if price moving significantly up/down, increase trend
 */
function updateTrend(stock, priceChange) {
  const changePercent = priceChange / stock.price;

  if (changePercent > 0.001) {
    stock.trend = Math.min(1, stock.trend + 0.3);
  } else if (changePercent < -0.001) {
    stock.trend = Math.max(-1, stock.trend - 0.3);
  } else {
    // Mean revert trend back to 0
    stock.trend = stock.trend * 0.85;
  }
}

/**
 * Market news events that affect stock prices
 */
const marketEvents = [
  {prob: 0.02, text: '🚀 Tech rally! Innovation stocks surge!', affected: ['AAPL','MSFT','GOOGL','NVDA'], factor: 1.015},
  {prob: 0.02, text: '⚡ Clean energy breakthrough!', affected: ['TSLA','ENPH','PLUG'], factor: 1.02},
  {prob: 0.02, text: '📉 Market concerns - broad selloff', affected: ['AAPL','MSFT','AMZN','GOOGL'], factor: 0.98},
  {prob: 0.01, text: '🎮 Gaming stocks pop on new releases!', affected: ['RBLX','NFLX','META'], factor: 1.025},
  {prob: 0.01, text: '🤖 AI breakthrough announcement!', affected: ['NVDA','PLTR','AI'], factor: 1.03},
  {prob: 0.015, text: '💰 Corporate earnings beat expectations', affected: ['JPM','V','DIS'], factor: 1.012},
];

function triggerMarketNews() {
  marketEvents.forEach(event => {
    if (Math.random() < event.prob) {
      event.affected.forEach(symbol => {
        const stock = marketState[symbol];
        if (stock) {
          stock.price *= event.factor;
          stock.trend += (event.factor > 1 ? 0.5 : -0.5);
        }
      });
    }
  });
}

/**
 * Main market simulation tick (called every second, simulates 1 minute of market activity)
 */
function simulationTick() {
  Object.values(marketState).forEach(stock => {
    const oldPrice = stock.price;
    const newPrice = simulatePrice(stock);
    const priceChange = newPrice - oldPrice;

    stock.price = Math.round(newPrice * 100) / 100; // 2 decimal places
    stock.change = Math.round(priceChange * 100) / 100;
    stock.changePercent = Math.round((priceChange / oldPrice) * 10000) / 100; // 2 decimal places

    // Update trend
    updateTrend(stock, priceChange);

    // Maintain 7-tick history
    stock.history.push(stock.price);
    if (stock.history.length > 7) {
      stock.history.shift();
    }
  });

  // Occasionally trigger market-wide news
  triggerMarketNews();
}

// Run simulation every second
setInterval(simulationTick, 1000);

// ═══════════════════════════════════════════════════════════════
// API ENDPOINTS
// ═══════════════════════════════════════════════════════════════

/**
 * GET /api/stocks - Get current market state
 */
app.get('/api/stocks', (req, res) => {
  const data = Object.values(marketState).map(stock => ({
    symbol: stock.symbol,
    name: stock.name,
    icon: stock.icon,
    sector: stock.sector,
    price: stock.price,
    change: stock.change,
    changePercent: stock.changePercent,
    history: stock.history
  }));
  res.json(data);
});

/**
 * GET /api/stocks/:symbol - Get single stock
 */
app.get('/api/stocks/:symbol', (req, res) => {
  const stock = marketState[req.params.symbol.toUpperCase()];
  if (!stock) {
    return res.status(404).json({error: 'Stock not found'});
  }
  res.json({
    symbol: stock.symbol,
    name: stock.name,
    icon: stock.icon,
    sector: stock.sector,
    price: stock.price,
    change: stock.change,
    changePercent: stock.changePercent,
    history: stock.history
  });
});

/**
 * GET /api/health - Health check
 */
app.get('/api/health', (req, res) => {
  res.json({status: 'ok', timestamp: new Date().toISOString()});
});

/**
 * GET /api/market-status - Get market status
 */
app.get('/api/market-status', (req, res) => {
  const hour = new Date().getHours();
  const dayOfWeek = new Date().getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const isOpen = !isWeekend && hour >= 9 && hour < 17;

  res.json({
    isOpen,
    timestamp: new Date().toISOString(),
    topGainers: Object.values(marketState)
      .sort((a, b) => b.changePercent - a.changePercent)
      .slice(0, 5)
      .map(s => ({symbol: s.symbol, name: s.name, changePercent: s.changePercent})),
    topLosers: Object.values(marketState)
      .sort((a, b) => a.changePercent - b.changePercent)
      .slice(0, 5)
      .map(s => ({symbol: s.symbol, name: s.name, changePercent: s.changePercent}))
  });
});

// ═══════════════════════════════════════════════════════════════
// SERVER STARTUP
// ═══════════════════════════════════════════════════════════════

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Market simulation server running on port ${PORT}`);
  console.log(`📊 Simulating ${Object.keys(marketState).length} stocks`);
  console.log(`🔄 Market updates every 1 second`);
});
