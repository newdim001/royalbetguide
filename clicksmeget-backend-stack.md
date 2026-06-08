---
type: note
title: ClicksMeGet Backend Stack
source: session-sync
status: active
created: '2026-06-07T01:33:30.000Z'
session_id: session_20260606_230629_ea4c17
captured_at: '2026-06-07T18:24:39.629Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:24:52.432Z'
source_kind: put_page
---

# ClicksMeGet Backend Stack

- Backend runs on Python with Uvicorn on port 9997
- Uses FastAPI framework
- Order worker polls every 10 seconds
- Stripe integration for payments
- Deployed at /var/www/clicksmeget/backend on server 5.78.222.80
