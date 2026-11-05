#!/usr/bin/env bash
# selfsite-wire: base toolchain, a headless browser for screenshots (optional), then a baseline.
set -euo pipefail
R=$(cd "$(dirname "$0")" && pwd)
bash "$R/bootstrap-base.sh"
mkdir -p "$R/reports/shots"
# optional: playwright + chromium so workers can screenshot their pages. Never fails the bootstrap.
(
  mkdir -p "$HOME/tools/shot" && cd "$HOME/tools/shot" && [ -f package.json ] || npm init -y >/dev/null
  npm i playwright --no-audit --no-fund >/dev/null
  sudo "$(command -v npx)" playwright install-deps chromium >/dev/null 2>&1 || true
  npx playwright install chromium >/dev/null
  ln -sf "$HOME/tools/shot/node_modules" "$R/node_modules"
  node "$R/shot.mjs" "$R/repo/prototype/WIREFRAMES-SPEC.md" /dev/null 2>/dev/null || true
) || echo "screenshots unavailable (workers will skip them)"
cat > "$R/env" <<EOT
PATH=$HOME/.local/bin:/usr/local/bin:/usr/bin:/bin
EOT
cd "$R/repo"
test -s prototype/WIREFRAMES-SPEC.md && test -s DECISIONS.md && test -d prototype/ref/artifact-1/project
python3 -c "import re,sys; sys.exit(0)"
# baseline: the check script itself runs and reports a missing file
python3 "$R/check.py" 1 2>&1 | grep -q missing
echo "BOOTSTRAP OK"
