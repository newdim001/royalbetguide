---
type: note
title: ClicksMeGet Affiliate Dashboard Crash Bug
source: session-sync
status: active
created: '2026-06-07T09:30:34.000Z'
session_id: session_20260607_132749_278e38
captured_at: '2026-06-07T18:14:58.138Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:15:11.009Z'
source_kind: put_page
---

# ClicksMeGet Affiliate Dashboard Crash Bug

- Affiliate dashboard crashes because frontend calls `t.commission_earned.toFixed(2)` but API returns `total_commission`
- Same mismatch for `pending_payouts` vs `pending_commission`
- Quickest fix: add aliases in the API response
- JAP account needs deposit for wholesale funding (order flow works end-to-end but provider balance is empty)
