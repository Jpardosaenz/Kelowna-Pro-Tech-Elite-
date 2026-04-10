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
