---
type: note
title: ClicksMeGet API URL Fix
source: session-sync
status: active
created: '2026-06-07T11:01:17.000Z'
session_id: session_20260607_144740_bdd99a
captured_at: '2026-06-07T18:20:08.564Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:20:21.370Z'
source_kind: put_page
---

# ClicksMeGet API URL Fix

- All dashboard pages used `API = "https://app.clicksmeget.com/api"` causing CORS preflight failures
- `app.clicksmeget.com` issues a 302 redirect to `clicksmeget.com`, which breaks CORS preflight (OPTIONS request gets redirected)
- Fix: changed to same-origin `/api` — resolved all CORS errors
- CSP `connect-src` does NOT fix CORS preflight failures; root cause is absolute URLs, not CSP policy
