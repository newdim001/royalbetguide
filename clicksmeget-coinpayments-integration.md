---
type: project
title: Clicksmeget CoinPayments Integration
source: session-sync
status: active
created: '2026-06-07T01:26:29.000Z'
session_id: session_20260607_044311_2f78b3
captured_at: '2026-06-07T18:28:50.329Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:29:02.988Z'
source_kind: put_page
---

# Clicksmeget CoinPayments Integration

- Integrated CoinPayments as payment gateway alongside Cryptomus
- Added COINPAYMENTS_CLIENT_ID and COINPAYMENTS_CLIENT_SECRET to server .env
- Updated config.py with env vars and auto-detect available gateways
- Rewrote coinpayments.py to use env vars (was using truncated hardcoded creds)
- Registered deposits router in main.py and added webhook endpoint
