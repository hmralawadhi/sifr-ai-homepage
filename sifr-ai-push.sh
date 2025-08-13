#!/bin/bash
set -e
REPO="hmralawadhi/sifr-ai-homepage"
BRANCH="main"
TOKEN="${SIFR_AI_TOKEN}"
TMP_DIR=$(mktemp -d)

git clone --depth 1 --branch $BRANCH https://x-access-token:${TOKEN}@github.com/$REPO.git $TMP_DIR
cd $TMP_DIR

cp -R /path/to/generated/files/* .

git config --global user.name "SIFR-AI Bot"
git config --global user.email "bot@sifr-ai.com"
git add .
git commit -m "Autonomous update $(date)" || echo "No changes to commit"
git push origin $BRANCH
