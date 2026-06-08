---
type: note
title: Affiliate Dashboard .toFixed() Crash
source: session-sync
status: active
created: '2026-06-07T09:30:56.000Z'
session_id: session_20260607_130920_1c40fc
captured_at: '2026-06-07T18:15:37.871Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:15:50.709Z'
source_kind: put_page
---

# Affiliate Dashboard .toFixed() Crash

- Bug: Affiliate dashboard crashes on load due to .toFixed() on undefined value
- Root cause: earnings data field undefined when no orders yet
- Fix: Add null check before .toFixed() call
- Severity: Critical — blocks affiliate panel entirely
