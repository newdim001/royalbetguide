---
type: project
title: ClicksMeGet Deploy & Verification
source: session-sync
status: active
created: '2026-06-07T13:40:23.000Z'
session_id: session_20260607_171954_dbf0ca
captured_at: '2026-06-07T18:35:22.340Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:35:34.821Z'
source_kind: put_page
---

# ClicksMeGet Deploy & Verification

- **Pitfall: Browser cache after SPA deploy** — old JS bundle cached, new fixes invisible until hard-refresh. Verify by checking bundle hash in browser devtools.
- **Pitfall: Don't dump raw JSON in production UI** — replaced `<pre>{JSON.stringify(activeDeposit, null, 2)}</pre>` with clean status display. Audit for this pattern before any deploy.
- **Backend recovery from backup** — restored from `/var/backups/clicksmeget/`, recreated venv, installed missing modules (`stripe`, `aiosqlite`), downgraded bcrypt to 4.0.1 for passlib compatibility.
- **CoinPayments verified working** — deposit created successfully, checkout URL generated, status pending.
- **Cryptomus and Network UAE not configured** — missing env vars on server; need merchant UUID + API key for Cryptomus, and API key + URL for Network UAE.
