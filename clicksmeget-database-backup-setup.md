---
type: note
title: Database Backup System for clicksmeget.com
source: session-sync
status: active
created: '2026-06-07T01:26:36.000Z'
session_id: session_20260607_043713_ecc76e
captured_at: '2026-06-07T18:32:51.757Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:33:04.561Z'
source_kind: put_page
---

# Database Backup System for clicksmeget.com

- Daily cron job set at 3 AM UTC for database and source file backups
- Backup location: /var/backups/clicksmeget/
- 7-day retention policy implemented
- First backup ran successfully: 508KB DB + 2.1MB source
- Cron file: /etc/cron.d/clicksmeget-backup
