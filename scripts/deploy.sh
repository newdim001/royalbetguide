#!/bin/bash
# RoyalBetGuide - Staged Deployment
set -euo pipefail
PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/opt/homebrew/sbin:$PATH"
PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SERVER="root@5.78.222.80"
SSH_KEY="-i /Users/suren/Desktop/socialdriv-wireguard.conf"
SSH_OPTS="-o ConnectTimeout=15 -o StrictHostKeyChecking=no"
LIVE_DIR="/var/www/royalbetguide"
STAGING_DIR="/var/www/staging/royalbetguide"
BACKUP_DIR="/var/backups/royalbetguide"
STAGING_URL="http://127.0.0.1:8084"
KEY_PAGES=("/" "/games" "/bonus" "/reviews" "/guides")

case "${1:-}" in
  --status)
    echo "=== RBG - STATUS ==="
    ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "du -sh ${LIVE_DIR} 2>/dev/null || echo EMPTY"
    ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "du -sh ${STAGING_DIR} 2>/dev/null || echo EMPTY"
    ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "ls -lh ${BACKUP_DIR}/ 2>/dev/null | tail -3 || echo None"
    exit 0 ;;
  --swap)
    TS=$(ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "python3 -c 'import time; print(int(time.time()))'")
    ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "mkdir -p ${BACKUP_DIR} && cp -a ${LIVE_DIR} ${BACKUP_DIR}/rbg-${TS} 2>/dev/null; rm -rf ${LIVE_DIR}_old 2>/dev/null; mv ${LIVE_DIR} ${LIVE_DIR}_old 2>/dev/null; cp -a ${STAGING_DIR} ${LIVE_DIR}"
    echo "Swapped. Backup: rbg-${TS}"
    exit 0 ;;
  --rollback)
    ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "ls -d ${LIVE_DIR}_old" || { echo "No rollback"; exit 1; }
    ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "rm -rf ${LIVE_DIR}; mv ${LIVE_DIR}_old ${LIVE_DIR}"
    echo "Rolled back"
    exit 0 ;;
esac

AUTO_APPROVE=false; [[ "${1:-}" == "--yes" ]] && AUTO_APPROVE=true
echo "=== ROYALBETGUIDE - STAGED DEPLOY ==="

echo "[1/6] Building..."
cd "${PROJECT_DIR}"; npm run build 2>&1 | tail -3
if [ ${PIPESTATUS[0]} -ne 0 ]; then echo "FAIL - Build"; exit 1; fi

echo "[2/6] Rsync..."
rsync -avz --delete -e "ssh ${SSH_OPTS} ${SSH_KEY}" "${PROJECT_DIR}/out/" "${SERVER}:${STAGING_DIR}/" 2>&1 | tail -2

echo "[3/6] Validating..."
HTML_COUNT=$(ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "find ${STAGING_DIR} -name '*.html' | wc -l" 2>/dev/null || echo 0)
echo "  HTML: ${HTML_COUNT}"
for page in "${KEY_PAGES[@]}"; do
  CODE=$(ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "curl -s -o /dev/null -w '%{http_code}' --max-time 5 '${STAGING_URL}${page}'" 2>/dev/null || echo "000")
  echo "  ${page} -> ${CODE}"
done

echo "[4/6] Backup..."
TS=$(ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "python3 -c 'import time; print(int(time.time()))'")
ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "mkdir -p ${BACKUP_DIR} && cp -a ${LIVE_DIR} ${BACKUP_DIR}/rbg-${TS} 2>/dev/null || mkdir -p ${BACKUP_DIR}/rbg-${TS}"

if [ "${AUTO_APPROVE}" = false ]; then echo "[5/6] Deploy to LIVE? (yes/no):"; read -r A; if [ "${A}" != "yes" ]; then echo "Cancelled"; exit 0; fi; fi

echo "[6/6] Swapping..."
ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "rm -rf ${LIVE_DIR}_old 2>/dev/null; mv ${LIVE_DIR} ${LIVE_DIR}_old 2>/dev/null; cp -a ${STAGING_DIR} ${LIVE_DIR}"
echo "  Swap done"
sleep 2
LIVE_CODE=$(ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "curl -s -o /dev/null -w '%{http_code}' --max-time 5 'https://royalbetguide.com/'" 2>/dev/null || echo "000")
echo "  Live: ${LIVE_CODE}"
ssh ${SSH_OPTS} ${SSH_KEY} "${SERVER}" "ls -dt ${BACKUP_DIR}/rbg-* 2>/dev/null | tail -n +4 | xargs rm -rf 2>/dev/null || true"
echo "=== DEPLOY COMPLETE ==="
