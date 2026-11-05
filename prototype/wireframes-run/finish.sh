#!/usr/bin/env bash
# Runs once when every phase has ended: collects the pages for pull-back.
set -uo pipefail
R=$(cd "$(dirname "$0")" && pwd)
mkdir -p "$R/out"
cp "$R"/reports/nightrun*.html "$R/out/" 2>/dev/null || echo "no pages"
cp "$R/PROGRESS.md" "$R/out/" 2>/dev/null
ls -la "$R/out"
