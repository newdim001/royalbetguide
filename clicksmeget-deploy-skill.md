---
type: skill
title: ClicksMeGet Deploy Skill
source: session-sync
status: active
created: '2026-06-07T02:06:34.000Z'
session_id: session_20260606_213856_e456c5
captured_at: '2026-06-07T18:34:52.342Z'
captured_via: capture-cli
ingested_via: put_page
ingested_at: '2026-06-07T18:35:05.349Z'
source_kind: put_page
---

# ClicksMeGet Deploy Skill

- **SSH**: Prefer public IP over WireGuard (10.0.1.1 frequently down)
- **Caddy reload**: Use `systemctl reload caddy` (systemd-managed, not `caddy reload --config`)
- **Next.js 16 SSG**: HTML at root level (e.g., `faq.html`), not in directories. Caddy needs `try_files {path} {path}.html {path}/ /index.html`
- **Editing Caddyfile**: Use SCP + local file, NOT heredoc (quotes in security headers break heredocs)
- **JSX curly braces build failure**: Use JS template literals stored in variables, not inline `{}`
- **macOS write_file limitation**: Directories must pre-exist; use `execute_code()` with `open()` as workaround
