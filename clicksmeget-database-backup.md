---
type: note
title: ClicksMeGet Database Backup Setup
source: session-sync
status: active
created: '2026-06-07T01:26:06.000Z'
session_id: session_20260607_043713_ecc76e
captured_at: '2026-06-07T18:33:52.091Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:34:04.911Z'
source_kind: put_page
---

# ClicksMeGet Database Backup Setup

- Daily cron backup at 3 AM UTC configured
- Backs up database (.db.gz) and source files (.tar.gz)
- 7-day retention with auto-deletion of old backups
- First backup ran successfully (508KB DB + 2.1MB source)
- Location: /var/backups/clicksmeget/
