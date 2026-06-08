---
type: note
title: ClicksMeGet Backend API Endpoints
source: session-sync
status: active
created: '2026-06-07T03:00:50.000Z'
session_id: session_20260606_201017_b1fbea
captured_at: '2026-06-07T18:22:39.426Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:22:52.374Z'
source_kind: put_page
---

# ClicksMeGet Backend API Endpoints

- `GET /api/health` — service health
- `POST /api/auth/register` — user registration
- `POST /api/auth/login` — JWT auth
- `GET /api/auth/me` — user profile
- `GET /api/services` — 17,289 services across 18 platforms (retail pricing only)
- `GET /api/services/platforms` — platform list with counts
- `GET /api/services/{id}` — single service detail
- `POST /api/orders` — place order (wallet deducted)
- `GET /api/orders` — order history
- `POST /api/orders/{id}/refill` — refill request
- `GET /api/wallet/balance` — wallet balance
- `GET /api/wallet/transactions` — transaction history
