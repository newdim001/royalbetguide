# RoyalBetGuide API Credentials Setup

## What's Already Working
✅ **IndexNow** — 284 URLs submitted to Bing/Yandex/Seznam.cz automatically (daily cron)
✅ **Build + Deploy** — Automated daily at 06:00 UTC
✅ **Keyword Tracking File** — `scripts/rank-tracker-keywords.json` (60 keywords ready to import)

## What Needs Your Action (One-Time Setup)

### 1. Google Search Console
**Why:** So Google indexes all 284 pages and you can monitor performance, clicks, impressions.

**Steps:**
1. Go to https://search.google.com/search-console
2. Click **Add Property** → **Domain** → Enter: `royalbetguide.com`
3. **Verify via DNS:**
   - Copy the TXT record value Google gives you
   - Log into GoDaddy → DNS Management → Add TXT record
   - Wait 5-10 minutes, click Verify in GSC
4. Go to **Sitemaps** → Submit: `https://royalbetguide.com/sitemap.xml`
5. (Optional, for API automation) Create service account at https://console.cloud.google.com/iam-admin/serviceaccounts
   - Download JSON key → Save as `/Users/suren/.gsc-service-account.json`
   - Add service account email as **Owner** in GSC
   - Add to `.env`: `GSC_SERVICE_ACCOUNT_KEY=/Users/suren/.gsc-service-account.json`

### 2. Bing Webmaster Tools
**Why:** Bing powers Yahoo and DuckDuckGo too — ~9% of US search traffic.

**Steps:**
1. Go to https://www.bing.com/webmasters
2. Sign in with Microsoft account (or create one)
3. Add site: `https://royalbetguide.com`
4. **Verify via DNS** (same TXT record as Google, or add a new one)
5. Go to **Sitemaps** → Submit: `https://royalbetguide.com/sitemap.xml`
6. (Optional, for API automation) Go to **Settings** → **API Access** → Copy API Key
   - Add to `.env`: `BING_WEBMASTER_API_KEY=your_key_here`

### 3. ahrefs Rank Tracker
**Why:** Track keyword rankings weekly, monitor competitor movements, find backlink opportunities.

**Steps:**
1. Log into ahrefs at https://app.ahrefs.com
2. Go to **Rank Tracker** → **New Project**
3. Add domain: `royalbetguide.com`
4. Location: **United States**
5. Import keywords from `scripts/rank-tracker-keywords.json`
6. (Optional, for API automation) Go to **Settings** → **API** → Generate Token
   - Add to `.env`: `AHREFS_API_TOKEN=your_token_here`

## After Setup
Once credentials are in `.env`, run:
```bash
cd /Users/suren/royalbetguide && python3 scripts/search-engine-submit.py
```

This will submit sitemaps to Google + Bing + IndexNow and pull ahrefs rankings automatically.

## Time Estimate
- Google Search Console: 10 minutes
- Bing Webmaster Tools: 5 minutes  
- ahrefs Rank Tracker: 5 minutes
- Total: ~20 minutes one-time setup
