#!/usr/bin/env bash
# === BUILD-GREEN PRE-COMMIT TYPECHECK (auto-installed) ===
# Marker: precommit-typecheck-v1
set -e

if [ "${SKIP_TYPECHECK:-0}" = "1" ]; then
  echo "[precommit-typecheck] SKIP_TYPECHECK=1 — skipping"
  exit 0
fi

# Find staged TS/TSX files
staged=$(git diff --cached --name-only --diff-filter=ACMR | grep -E '\.(ts|tsx|mts|cts)$' || true)
if [ -z "$staged" ]; then
  exit 0
fi

echo "[precommit-typecheck] $(echo "$staged" | wc -l) staged TS file(s) — running typecheck..."

# Try monorepo workspace typecheck first, then fallbacks
if grep -q '"typecheck"' package.json 2>/dev/null; then
  if [ -f pnpm-lock.yaml ]; then
    pnpm -w typecheck 2>/dev/null || pnpm typecheck
  else
    npm run typecheck
  fi
elif command -v tsc >/dev/null 2>&1; then
  npx tsc --noEmit
else
  echo "[precommit-typecheck] WARN: no typecheck script and no tsc — skipping"
  exit 0
fi
