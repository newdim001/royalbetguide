---
type: note
title: Clicksmeget Database Backup System
source: session-sync
status: active
created: '2026-06-07T01:26:23.000Z'
session_id: session_20260607_044730_55dc3d
captured_at: '2026-06-07T18:33:21.901Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:33:34.757Z'
source_kind: put_page
---

# Clicksmeget Database Backup System

- Daily cron at 3 AM UTC (/etc/cron.d/clicksmeget-backup)
- Backs up database (.db.gz) and source files (.tar.gz)
- 7-day retention (older backups auto-deleted)
- First backup ran successfully: 508KB DB + 2.1MB source
- Location: /var/backups/clicksmeget/
