---
type: note
title: ClicksMeGet API Configuration
source: session-sync
status: active
created: '2026-06-07T11:31:16.000Z'
session_id: session_20260607_150614_367f50
captured_at: '2026-06-07T18:17:08.277Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:17:20.897Z'
source_kind: put_page
---

# ClicksMeGet API Configuration

- All dashboard pages used API = "https://app.clicksmeget.com/api"
- app.clicksmeget.com redirects to clicksmeget.com, breaking CORS preflight
- Fixed by changing to same-origin /api
- Admin panel is an SPA inside /dashboard/admin
- Login is unified: one login works for both dashboard and admin panel
