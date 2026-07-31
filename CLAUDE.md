# CLAUDE.md

@AGENTS.md

## Local development
Serve locally: `netlify dev --port 8888`
Fallback: `python3 .claude/serve.py` (port 5500, no redirects)

## Build and deploy
No build step. Static HTML/CSS/JS served directly.
Production deploy: push to `main` on GitHub → Netlify auto-deploys.
Redirects: `_redirects`. Headers: `_headers`.

## Branch and task-isolation rules
Canonical source: `AGENTS.md` § "Non-negotiable workflow rules" (imported above via `@AGENTS.md`).
Do not restate those rules here — they were duplicated in this file until 2026-07-31.

## Git staging — the one rule born from a real incident
- NEVER commit credentials, service account keys, or `.json` auth files — even if not in `.gitignore`.
  (2026-04-09: a service account key was committed and had to be rotated. See `docs/HISTORIAL-INCIDENTES.md`.)

## Prohibited commands — require explicit owner approval before running
- `git reset --hard`
- `git push --force` or `git push -f`
- `rm -rf` on any directory
- `git rebase` on shared branches
- Any command that rewrites or deletes git history

## Protected production files — explicit owner approval required before any edit
These files affect Netlify production behavior directly upon push:
- `_headers`
- `_redirects`
- `robots.txt`
- `sitemap.xml`
Do not modify without stating POR QUÉ / PARA QUÉ / QUÉ / RESULTADO ESPERADO and receiving explicit "yes, proceed".

## Before `git push` — the project-specific check
`git remote -v` → origin must be the Jpardosaenz repo.
(The rest of the old checklist was standard git hygiene and lived in three files at once; removed 2026-07-31.)

## Mandatory pre-delivery framework
Before ANY deliverable (code, prompt, message, file change), present:
1. POR QUÉ — what problem this solves
2. PARA QUÉ — what is gained operationally
3. QUÉ — what will be produced
4. RESULTADO ESPERADO — expected outcome
Do not execute without owner approval.

## Priority classification
Before each deliverable, classify:
- URGENTE — solves a problem today
- IMPORTANTE — operational gain
- ESTRATÉGICO — long-term business impact

## Continuity discipline
- Read and curate `.claude/napkin.md` at the beginning of work; it is the recurring runbook, not a session log.
- After every representative activity, update `.claude/handoff.md` with current decisions, pending work, corrections, modified files, and the exact next start.
- Store durable copy methodology in `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md`; do not bury reusable knowledge only in chat or handoff files.

## Incident log
Moved to `docs/HISTORIAL-INCIDENTES.md` on 2026-07-31 — the incidents were already
converted into the active rules above, so the full narrative no longer needs to load
every session. New incidents go in that file, and only the resulting *rule* comes here.
