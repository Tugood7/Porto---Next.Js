#!/usr/bin/env bash
set -euo pipefail

SERVER_USER="${SERVER_USER:-tubagus}"
SERVER_HOST="${SERVER_HOST:-192.168.32.100}"
REMOTE_DIR="${REMOTE_DIR:-/home/tubagus/apps/portofolio}"
PORT="${PORT:-3011}"

echo "==> 1. Membuat folder tujuan di ${SERVER_USER}@${SERVER_HOST}:${REMOTE_DIR} ..."
ssh "${SERVER_USER}@${SERVER_HOST}" "mkdir -p ${REMOTE_DIR}"

echo "==> 2. Sinkronisasi source code ke ${SERVER_USER}@${SERVER_HOST} ..."
rsync -avz --delete \
  --exclude 'node_modules' \
  --exclude '.next' \
  --exclude '.git' \
  --exclude 'tsconfig.tsbuildinfo' \
  --exclude '.env*' \
  ./ "${SERVER_USER}@${SERVER_HOST}:${REMOTE_DIR}/"

echo "==> 3. Build & jalankan container Docker di ${SERVER_USER}@${SERVER_HOST} (port ${PORT}) ..."
ssh "${SERVER_USER}@${SERVER_HOST}" "cd ${REMOTE_DIR} && docker compose up -d --build"

echo "==> 4. Status container:"
ssh "${SERVER_USER}@${SERVER_HOST}" "cd ${REMOTE_DIR} && docker compose ps"

echo ""
echo "Selesai! Portofolio berjalan di http://${SERVER_HOST}:${PORT} (siap dihubungkan ke https://porto.tugoodly.my.id)."

