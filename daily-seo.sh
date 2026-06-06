#!/bin/bash
# Daily SEO maintenance for royalbetguide.com
# Runs: sitemap regeneration + IndexNow submission

cd /Users/suren/royalbetguide || exit 1

echo "=== $(date) — Starting daily SEO maintenance ==="

# 1. Regenerate sitemap
echo "Regenerating sitemap..."
python3 generate-sitemap.py || { echo "Sitemap generation failed"; exit 1; }

# 2. Rebuild to include updated sitemap in static output
echo "Building Next.js static export..."
npm run build 2>&1 | tail -5 || { echo "Build failed"; exit 1; }

# 3. Deploy (symlink swap — handled by deploy.sh)
echo "Deploying..."
bash deploy.sh 2>&1 | tail -10 || { echo "Deploy failed"; exit 1; }

# 4. Submit to IndexNow
echo "Submitting to IndexNow..."
python3 indexnow-submit.py || { echo "IndexNow submission failed"; exit 1; }

echo "=== $(date) — Daily SEO maintenance complete ==="
