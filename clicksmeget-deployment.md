---
type: project
title: ClicksMeGet Deployment
source: session-sync
status: active
created: '2026-06-07T01:29:22.000Z'
session_id: session_20260607_031640_f62971
captured_at: '2026-06-07T18:35:52.104Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:36:05.004Z'
source_kind: put_page
---

# ClicksMeGet Deployment

- Domain: clicksmeget.com with app.clicksmeget.com redirecting (302) to main domain
- All routes on main domain: /dashboard, /dashboard/orders, /dashboard/wallet, /dashboard/admin, /dashboard/admin/orders, /dashboard/admin/providers, /dashboard/admin/users
- Auth flow: login at /login saves token to localStorage, full page redirect to /dashboard, cmg_token cookie set as fallback
- No CORS issues (same domain API calls via /api/)
