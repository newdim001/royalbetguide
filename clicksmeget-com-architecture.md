---
type: concept
title: Clicksmeget.com Architecture
source: session-sync
status: active
created: '2026-06-07T01:29:35.000Z'
session_id: session_20260607_030024_ebc338
captured_at: '2026-06-07T18:29:20.478Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:29:33.464Z'
source_kind: put_page
---

# Clicksmeget.com Architecture

- Two separate apps: Next.js marketing site and Vite/React panel SPA
- Marketing site handles login page; SPA has no login page of its own
- Caddy configured for routing between marketing site and panel SPA
- Backend uses SQLAlchemy with potential model relationship issues
