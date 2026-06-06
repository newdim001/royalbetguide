#!/bin/bash
# RoyalBetGuide Complete SEO Setup
# Run this after adding credentials to .env

set -e

echo "============================================"
echo "RoyalBetGuide SEO Tools Setup"
echo "============================================"

# Check for required tools
command -v python3 >/dev/null 2>&1 || { echo "python3 required"; exit 1; }

# Source env if exists
if [ -f ~/.hermes/profiles/bet-hermes/.env ]; then
    export $(grep -v '^#' ~/.hermes/profiles/bet-hermes/.env | xargs)
fi

cd /Users/suren/royalbetguide

echo ""
echo "[1/5] Checking credentials..."

# Bing
if [ -n "$BING_WEBMASTER_API_KEY" ]; then
    echo "  Bing API Key: FOUND"
    python3 scripts/bing-webmaster-setup.py
else
    echo "  Bing API Key: MISSING"
    echo "    Get key at: https://www.bing.com/webmasters"
fi

# ahrefs
if [ -n "$AHREFS_API_TOKEN" ]; then
    echo "  ahrefs Token: FOUND"
    python3 scripts/ahrefs-rank-tracker.py
else
    echo "  ahrefs Token: MISSING"
    echo "    Get token at: https://app.ahrefs.com/settings/api"
fi

# SERPAPI
if [ -n "$SERPAPI_KEY" ]; then
    echo "  SERPAPI Key: FOUND"
    python3 scripts/serp-rank-tracker.py
else
    echo "  SERPAPI Key: MISSING (free at serpapi.com)"
fi

echo ""
echo "[2/5] Running SEO Dashboard..."
python3 scripts/seo-dashboard.py

echo ""
echo "[3/5] Submitting URLs to search engines..."
python3 indexnow-submit.py

echo ""
echo "[4/5] Checking sitemap health..."
python3 -c "
import xml.etree.ElementTree as ET
with open('out/sitemap.xml', 'r') as f:
    tree = ET.parse(f)
urls = tree.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}url')
lastmods = tree.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}lastmod')
print(f'  Total URLs: {len(urls)}')
print(f'  With lastmod: {len(lastmods)}')
"

echo ""
echo "[5/5] Cron jobs status..."
crontab -l 2>/dev/null | grep -E "royalbetguide|build-deploy" || echo "  No crontab entries found"

echo ""
echo "============================================"
echo "Setup complete!"
echo "============================================"
