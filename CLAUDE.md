# CLAUDE.md

@AGENTS.md

## Local development
Serve locally: `netlify dev --port 8888`
Fallback: `python3 .claude/serve.py` (port 5500, no redirects)

## Build and deploy
No build step. Static HTML/CSS/JS served directly.
Production deploy: push to `main` on GitHub → Netlify auto-deploys.
Redirects: `_redirects`. Headers: `_headers`.

## Branch rules
All changes must be made in a test/feature branch first. Never modify `main` directly without explicit owner approval.

## Git staging rules — NEVER violate
- NEVER use `git add .` or `git add -A`. Only stage files explicitly by name: `git add path/to/file`.
- ALWAYS run `git status` before any commit to verify exactly which files are staged.
- ALWAYS run `git diff --staged` before committing to review every line being committed.
- NEVER commit credentials, service account keys, or `.json` auth files — even if not in `.gitignore`.

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

## Pre-push checklist — mandatory before any `git push`
Run these in order and confirm each passes before pushing:
1. `git branch --show-current` → must NOT be `main`
2. `git remote -v` → confirm pushing to correct remote (origin = Jpardosaenz repo)
3. `git status` → no unintended files staged or modified
4. `git diff --staged` → review every line going up
5. No credentials or sensitive files in the diff

## Corrections log
<!-- Add rules here only when Claude makes a real mistake. Format: "- Do X, not Y" -->
- ALWAYS verify current branch before any edit. Run `git branch --show-current` at session start. If on main, switch to test branch before doing anything.

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

## Proactive consent
Propose ideas and alternatives freely. NEVER execute without explicit authorization. Proposing ≠ executing.

## Incident log
<!-- Format: [YYYY-MM-DD HH:MM] TIPO: descripción — resultado -->

[2026-04-09] SETUP: Created CLAUDE.md, settings.json, shared-components rule, .gitignore update, fixed double DOMContentLoaded in scripts.js — merged to main via PR #47
[2026-04-09] INCIDENT: Committed sensitive file (protech-analytics-f8110238d804.json, service account key) in branch chore/claude-config — branch never pushed, key rotated in Google Cloud, orphaned commit cleaned with git gc, new key stored in ~/Documents/protech-intelligence/credentials/
[2026-04-09] INCIDENT: Worked on main directly without verifying branch — caught by owner, rule added to Corrections log
[2026-04-10] SETUP: Added Mandatory pre-delivery framework, Priority classification, Proactive consent, and Incident log sections to CLAUDE.md
[2026-04-19] INCIDENT: Edited index.html while on main branch without reading website CLAUDE.md — session started from Marketing Workers directory which does not auto-load website CLAUDE.md. Fix: added mandatory cross-reference in Marketing Workers CLAUDE.md + added 6 production safety rules to website CLAUDE.md (staging, prohibited commands, protected files, pre-push checklist).
