#!/bin/bash
set -e

SERVER="root@10.0.1.1"
SSH_KEY="${HOME}/.ssh/hermes_deploy"
REMOTE_BASE="/var/www/royalbetguide-builds"
LIVE_SYMLINK="/var/www/royalbetguide"
LOCAL_OUT="out"

PYTHON=$(which python3 2>/dev/null || echo "python3")
BUILD_ID="build-$($PYTHON -c "from datetime import datetime; print(datetime.now().strftime('%Y%m%d-%H%M%S'))")"
REMOTE_PATH="${REMOTE_BASE}/${BUILD_ID}"

# SSH retry helper (rate-limit protection)
ssh_retry() {
  local max=5
  local delay=5
  for i in $(seq 1 $max); do
    ssh -i "$SSH_KEY" "$SERVER" "$1" && return 0
    echo "  SSH attempt $i/$max failed, waiting ${delay}s..."
    sleep $delay
    delay=$((delay * 2))
  done
  echo "  SSH failed after $max attempts"
  return 1
}

echo "Building..."
npm run build

echo "Creating remote directory..."
ssh_retry "mkdir -p $REMOTE_PATH"

echo "Syncing..."
rsync -avz --delete -e "ssh -i $SSH_KEY" "$LOCAL_OUT/" "$SERVER:$REMOTE_PATH/"

echo "Fixing permissions..."
ssh_retry "find $REMOTE_PATH -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.ico' -o -name '*.svg' \) -exec chmod 644 {} +"

echo "Swapping symlink..."
ssh_retry "rm -rf $LIVE_SYMLINK && ln -sfn $REMOTE_PATH $LIVE_SYMLINK"
ssh_retry "find $LIVE_SYMLINK -type f \( -name '*.png' -o -name '*.jpg' -o -name '*.ico' -o -name '*.svg' \) -exec chmod 644 {} +"
ssh_retry "echo '✅ Deployed: $BUILD_ID'"

echo "Cleaning old builds (keep last 5)..."
ssh_retry "cd $REMOTE_BASE && ls -t | tail -n +6 | xargs -r rm -rf"

echo ""
echo "✅ Deploy complete: $BUILD_ID"
