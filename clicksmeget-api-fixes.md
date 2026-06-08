---
type: note
title: ClicksMeGet API Fixes
source: session-sync
status: active
created: '2026-06-07T02:31:17.000Z'
session_id: session_20260606_203753_56f6d5
captured_at: '2026-06-07T18:19:08.945Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:19:21.597Z'
source_kind: put_page
---

# ClicksMeGet API Fixes

- Removed wholesale `rate` field from customer-facing `/api/services` endpoint
- Customers now only see `price` (retail), `name`, `min`, `max`, `refill`
- Order flow: customer orders → wallet deducted at retail → status 'pending'
- Worker submits pending orders to provider at wholesale price
- Route order issue fixed for services endpoint
