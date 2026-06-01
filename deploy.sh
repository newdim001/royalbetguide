#!/bin/bash
set -e

SERVER="root@10.0.1.1"
REMOTE_BASE="/var/www/royalbetguide-builds"
LIVE_SYMLINK="/var/www/royalbetguide"
LOCAL_OUT="out"

PYTHON=$(which python3 2>/dev/null || echo "python3")
BUILD_ID="build-$($PYTHON -c "from datetime import datetime; print(datetime.now().strftime('%Y%m%d-%H%M%S'))")"
REMOTE_PATH="${REMOTE_BASE}/${BUILD_ID}"

echo "Building..."
npm run build

echo "Creating remote directory..."
ssh "$SERVER" "mkdir -p $REMOTE_PATH"

echo "Syncing..."
rsync -avz --delete "$LOCAL_OUT/" "$SERVER:$REMOTE_PATH/"

echo "Fixing permissions..."
ssh "$SERVER" "find $REMOTE_PATH -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.ico' -o -name '*.svg' \) -exec chmod 644 {} +"

echo "Swapping symlink..."
ssh "$SERVER" "rm -rf $LIVE_SYMLINK && ln -sfn $REMOTE_PATH $LIVE_SYMLINK"
ssh "$SERVER" "find $LIVE_SYMLINK -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.ico' -o -name '*.svg' \) -exec chmod 644 {} +"
ssh "$SERVER" "echo '✅ Deployed: $BUILD_ID'"

# Clean old builds (keep last 3)
ssh "$SERVER" "cd $REMOTE_BASE && ls -t | tail -n +4 | xargs -r rm -rf"
