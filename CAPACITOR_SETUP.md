# Capacitor Setup - Build Native iOS & Android Apps

## Overview

This guide converts our web app into native iOS and Android apps using **Capacitor**.

**What is Capacitor?**
- Wraps web apps as native apps
- No need to rewrite code in Swift/Kotlin
- Works with our existing HTML/CSS/JS
- Easy deployment to App Store & Google Play

---

## Prerequisites

```bash
npm install -g @capacitor/cli
npm install @capacitor/core @capacitor/android @capacitor/ios
```

## Step 1: Initialize Capacitor

```bash
cd C:\Users\DELL\borsa-kids
npx cap init "בורסת הילדים" "com.borsaimr.kids" --web-dir=.
```

**Output:** Creates `capacitor.config.ts`

## Step 2: Build Web App

```bash
# No build needed (we're using plain HTML/CSS/JS)
# Just make sure index.html is in root
```

## Step 3: Add Platforms

```bash
npx cap add ios
npx cap add android
```

**Creates:**
- `ios/` folder (Xcode project)
- `android/` folder (Android Studio project)

## Step 4: Sync Changes

After any code changes:
```bash
npx cap sync
```

---

## Building for iOS (Mac Required)

### Option A: Xcode (GUI)
```bash
npx cap open ios
# Opens Xcode → Select "בורסת הילדים" → Product → Archive → Distribute App
```

### Option B: Command Line
```bash
cd ios/App
xcodebuild -workspace App.xcworkspace -scheme App -configuration Release -derivedDataPath build
```

**Output:** `.ipa` file ready for App Store

---

## Building for Android

### Option A: Android Studio (GUI)
```bash
npx cap open android
# Opens Android Studio → Build → Generate Signed Bundle/APK
```

### Option B: Command Line
```bash
cd android
./gradlew assembleRelease
```

**Output:** `.apk` file (or `.aab` for Play Store)

---

## Configuration

### capacitor.config.ts

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.borsaimr.kids',
  appName: 'בורסת הילדים',
  webDir: '.',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;
```

---

## App Store Submission

### iOS (Apple App Store)

1. **Create Apple Developer Account** (https://developer.apple.com)
2. **Create App in App Store Connect** (https://appstoreconnect.apple.com)
3. **Generate Certificates & Provisioning Profiles**
4. **Build with Xcode** (Product → Archive)
5. **Distribute** (TestFlight → Production)
6. **Wait for review** (1-5 days)

### Android (Google Play Store)

1. **Create Google Play Developer Account** (https://play.google.com/console)
2. **Create new app**
3. **Build signed APK/AAB**
4. **Upload to Play Console**
5. **Fill out store listing**
6. **Wait for review** (1-4 hours)

---

## App Store Metadata

### What You Need:

**Logos/Graphics:**
- 192x192 PNG (icon)
- 512x512 PNG (icon for stores)
- 1080x1920 PNG (splash screen)
- 5-8 screenshots (1080x1920 or 1440x2560 for Android)

**Text:**
- App name: "בורסת הילדים"
- Subtitle: "Learn to Invest. Trade with Fake Money. Real Prices. Real Learning."
- Description: (see below)
- Keywords: stocks, trading, education, kids, game, simulator, investment, stock market

**Privacy & Legal:**
- Privacy Policy (see PRIVACY_POLICY.md)
- Terms of Service (see TERMS_OF_SERVICE.md)
- Support email: support@borsakids.dev

### App Description Template

```
🎮 Learn Stock Market Trading - The Safe Way! 📈

בורסת הילדים (Kids Stock Exchange) is an EDUCATIONAL STOCK MARKET SIMULATOR designed for ages 10+.

✨ GAME FEATURES:
🎯 Daily & Weekly Challenges - Complete quests, unlock achievements
💎 League Tiers - Bronze to Diamond ranking system
📈 Real Stock Prices - Live data from Finnhub (prices real, trading simulated)
🏆 Compete on Leaderboards - Challenge friends with friend codes
🎓 22 Interactive Lessons - Learn investing, diversification, risk management
🧠 30 Quiz Questions - Test your knowledge and earn XP
📊 6 Market Indices - S&P 500, Dow Jones, Nasdaq, Russell 2000, VIX, EUR/USD
🌍 4 Languages - Hebrew, English, Arabic, Russian

⚠️ IMPORTANT:
✅ All trading uses PRETEND MONEY (₪100,000 virtual)
✅ NO REAL MONEY involved
✅ NO REAL BROKERAGE ACCOUNT
✅ Stock prices are REAL, trading is SIMULATED
✅ Perfect for learning - zero risk!

🎮 GAMEPLAY:
1. Pick avatar & name
2. Complete daily challenges & quests
3. Buy/sell stocks to practice strategies
4. Build a profitable portfolio
5. Climb from Bronze to Diamond tier
6. Learn real investing concepts risk-free

Perfect for:
• Kids learning about stocks & investing
• Students in economics classes
• Families learning finance together
• Anyone interested in stock market basics

🚀 DOWNLOAD NOW - Learn. Play. Invest (safely)!
```

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Port 5000 already in use" | `lsof -i :5000` then `kill -9 <PID>` |
| Xcode build fails | Update Xcode to latest version |
| Android build fails | Check Java 11+ is installed |
| Assets not loading | Run `npx cap sync` after changes |

---

## Next Steps

1. **Test PWA first** (web version)
2. **Build iOS & Android locally**
3. **Test on simulators**
4. **Create app store accounts**
5. **Submit for review**
6. **Monitor for approval**

---

## Support

- Capacitor Docs: https://capacitorjs.com/docs
- iOS Developer: https://developer.apple.com
- Android Developer: https://developer.android.com
- GitHub Issues: https://github.com/esteehurwitz-droid/borsa-kids/issues

---

**Ready to go native? Run: `npx cap init` 🚀**
