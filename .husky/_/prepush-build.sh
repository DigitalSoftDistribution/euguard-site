#!/usr/bin/env bash
# === BUILD-GREEN PRE-PUSH (auto-installed) ===
# Marker: prepush-build-v1
set -e

if [ "${SKIP_BUILD:-0}" = "1" ]; then
  echo "[prepush-build] SKIP_BUILD=1 — skipping (escape hatch)"
  exit 0
fi

# Read stdin from git push (refs being pushed). Skip if no commits — e.g. tag push.
has_commits=0
while read local_ref local_sha remote_ref remote_sha; do
  [ "$local_sha" = "0000000000000000000000000000000000000000" ] && continue
  has_commits=1
done
if [ "$has_commits" = "0" ]; then
  exit 0
fi

START=$(date +%s)
echo "[prepush-build] verifying build green before push…"

# Detect package manager
if [ -f pnpm-lock.yaml ]; then PM=pnpm
elif [ -f yarn.lock ]; then PM=yarn
else PM=npm; fi

# 1. Typecheck (fast)
if grep -q '"typecheck"' package.json 2>/dev/null; then
  echo "[prepush-build] step 1/2: $PM typecheck"
  if [ "$PM" = pnpm ]; then
    pnpm -w typecheck 2>/dev/null || pnpm typecheck
  elif [ "$PM" = yarn ]; then
    yarn typecheck
  else
    npm run typecheck
  fi
fi

# 2. Build
if grep -q '"build"' package.json 2>/dev/null; then
  echo "[prepush-build] step 2/2: $PM build"
  if [ "$PM" = pnpm ]; then
    pnpm build
  elif [ "$PM" = yarn ]; then
    yarn build
  else
    npm run build
  fi
else
  echo "[prepush-build] no build script in package.json — skipping build"
fi

ELAPSED=$(($(date +%s) - START))
echo "[prepush-build] ✓ build green (${ELAPSED}s) — push OK"
