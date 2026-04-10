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
