---
type: note
title: Services API — Remove Wholesale Rate from Customer Response
source: session-sync
status: active
created: '2026-06-07T02:31:11.000Z'
session_id: session_20260606_210036_e78710
captured_at: '2026-06-07T18:19:38.654Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:19:51.297Z'
source_kind: put_page
---

# Services API — Remove Wholesale Rate from Customer Response

- The `/api/services` endpoint was leaking `rate` (wholesale cost) alongside `price` (retail)
- Fixed: customers now only see `{id, name, price, min, max, refill, ...}` — no `rate`
- Ensures wholesale pricing is never exposed to end users
