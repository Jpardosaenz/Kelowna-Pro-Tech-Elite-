# Historial de incidentes — Website KPEMM

Archivo de consulta. **No se carga en cada sesión de IA** — a diferencia de
`CLAUDE.md`, que sí. Vive acá para no gastar memoria de sesión repitiendo
historia ya convertida en reglas.

Formato: `[YYYY-MM-DD] TIPO: descripción — resultado`

---

[2026-04-09] SETUP: Created CLAUDE.md, settings.json, shared-components rule, .gitignore update, fixed double DOMContentLoaded in scripts.js — merged to main via PR #47

[2026-04-09] INCIDENT: Committed sensitive file (protech-analytics-f8110238d804.json, service account key) in branch chore/claude-config — branch never pushed, key rotated in Google Cloud, orphaned commit cleaned with git gc, new key stored in ~/Documents/protech-intelligence/credentials/
→ Regla vigente derivada: "NEVER commit credentials, service account keys, or `.json` auth files" (`CLAUDE.md` § Git staging).

[2026-04-09] INCIDENT: Worked on main directly without verifying branch — caught by owner, rule added to Corrections log
→ Regla vigente derivada: `AGENTS.md` § Non-negotiable workflow rules (branch/worktree isolation).

[2026-04-10] SETUP: Added Mandatory pre-delivery framework, Priority classification, Proactive consent, and Incident log sections to CLAUDE.md

[2026-04-19] INCIDENT: Edited index.html while on main branch without reading website CLAUDE.md — session started from Marketing Workers directory which does not auto-load website CLAUDE.md. Fix: added mandatory cross-reference in Marketing Workers CLAUDE.md + added 6 production safety rules to website CLAUDE.md (staging, prohibited commands, protected files, pre-push checklist).
→ Reglas vigentes derivadas: secciones de seguridad de producción en `CLAUDE.md`.

---

**[2026-07-31]** Este archivo se creó al sacar el "Incident log" de `CLAUDE.md`.
Nada se perdió — se movió. Los incidentes ya estaban convertidos en reglas
activas, así que el relato completo no necesitaba cargarse en cada sesión.
