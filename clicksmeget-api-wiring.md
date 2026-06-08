---
type: note
title: ClicksMeGet API Wiring Status
source: session-sync
status: active
created: '2026-06-07T11:01:05.000Z'
session_id: session_20260607_145945_5dbc40
captured_at: '2026-06-07T18:20:38.587Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:20:51.334Z'
source_kind: put_page
---

# ClicksMeGet API Wiring Status

- Fully wired (works correctly): Login/Register, Dashboard Stats, Orders List, Order Detail, Fulfill Order, Admin Providers, Admin Users, User Role Update, Admin Services, Bulk Fulfill, Bulk Cancel, User Withdrawals
- Field mismatches exist between frontend interfaces and backend responses (e.g., `created_at` vs `createdAt`, `updated_at` vs `updatedAt`)
- Task: fix all field access patterns in frontend SPA pages to match backend response format
