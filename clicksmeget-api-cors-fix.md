---
type: note
title: ClicksMeGet API CORS Fix
source: session-sync
status: active
created: '2026-06-07T11:30:59.000Z'
session_id: session_20260607_152431_8c746f
captured_at: '2026-06-07T18:17:38.235Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:17:51.117Z'
source_kind: put_page
---

# ClicksMeGet API CORS Fix

- Root cause: All dashboard pages used `API = "https://app.clicksmeget.com/api"` but `app.clicksmeget.com` redirects to `clicksmeget.com`, breaking CORS preflight
- Fix: Changed API calls to use same-origin `/api`
- After fix: Zero errors in console
