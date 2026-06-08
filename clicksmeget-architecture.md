---
type: note
title: ClicksMeGet Architecture
source: session-sync
status: active
created: '2026-06-07T01:29:41.000Z'
session_id: session_20260607_023931_a4a6de
captured_at: '2026-06-07T18:21:08.697Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:21:21.604Z'
source_kind: put_page
---

# ClicksMeGet Architecture

- Two separate apps: Next.js marketing site and Vite/React panel SPA
- Marketing site handles login; panel SPA has no login page
- Caddy config routes requests between the two
- Backend uses SQLAlchemy with potential model relationship issues
