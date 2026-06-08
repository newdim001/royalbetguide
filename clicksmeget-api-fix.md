---
type: note
title: ClicksMeGet API Fix
source: session-sync
status: active
created: '2026-06-07T11:31:05.000Z'
session_id: session_20260607_151519_ec69ca
captured_at: '2026-06-07T18:18:38.881Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:18:51.746Z'
source_kind: put_page
---

# ClicksMeGet API Fix

- Root cause: All dashboard pages used API = "https://app.clicksmeget.com/api"
- app.clicksmeget.com redirects to clicksmeget.com, breaking CORS preflight
- Fixed by changing to same-origin /api
- Zero errors after fix
