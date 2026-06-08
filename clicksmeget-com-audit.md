---
type: note
title: ClicksMeGet.com Full Audit
source: session-sync
status: active
created: '2026-06-07T09:30:34.000Z'
session_id: session_20260607_132749_278e38
captured_at: '2026-06-07T18:29:51.041Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:30:04.054Z'
source_kind: put_page
---

# ClicksMeGet.com Full Audit

- Marketing site: 12/12 pages all returning 200 (Home, Services, FAQ, About, Contact, Affiliate, Blog, Terms, Privacy, Refund, API Docs)
- Security headers: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy all excellent
- API backend active on port 9997 (clicksmeget-api.service)
- Order worker active (clicksmeget-worker.service)
- Dashboard SPA serving via Caddy with SPA routing
- Brand: dark theme (#0A0A12), Space Grotesk, all assets deployed
