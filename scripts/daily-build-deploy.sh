#!/bin/bash
# RoyalBetGuide Daily Build + Deploy + IndexNow
# Runs at 06:00 UTC daily

set -e

cd /Users/suren/royalbetguide

echo "[$(date)] Starting daily build..."

# 1. Build
npm run build 2>&1 | tee /tmp/rbg-build.log
if [ ${PIPESTATUS[0]} -ne 0 ]; then
  echo "[$(date)] BUILD FAILED"
  exit 1
fi

echo "[$(date)] Build OK. Deploying..."

# 2. Deploy
bash deploy.sh 2>&1 | tee /tmp/rbg-deploy.log
if [ ${PIPESTATUS[0]} -ne 0 ]; then
  echo "[$(date)] DEPLOY FAILED"
  exit 1
fi

echo "[$(date)] Deploy OK. Submitting to IndexNow..."

# 3. IndexNow submission
python3 indexnow-submit.py 2>&1 | tee /tmp/rbg-indexnow.log

echo "[$(date)] Daily cycle complete."
