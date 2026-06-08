---
type: project
title: ClicksMeGet Dashboard Migration to MediaMister Layout
source: session-sync
status: active
created: '2026-06-07T01:32:04.000Z'
session_id: session_20260607_002427_297f8c
captured_at: '2026-06-07T18:31:51.523Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:32:04.332Z'
source_kind: put_page
---

# ClicksMeGet Dashboard Migration to MediaMister Layout

- Migrated dashboard from wallet-based layout to MediaMister-style sidebar
- Renamed 'Wallet' to 'Add Funds' in sidebar and routes
- Implemented shared layout.tsx with sidebar + mobile bottom nav
- Dashboard main page now shows: welcome header, 4 stat cards (Total Orders, Completed, In Progress, Total Spent), gradient balance banner, recent orders table
- Add Funds page at /dashboard/add-funds with payment methods: Bank Transfer, Cryptocurrency, USDT (TRC20)
