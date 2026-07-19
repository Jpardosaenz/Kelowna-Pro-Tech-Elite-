# Napkin Runbook — Website KPEMM

## Curation Rules

- Re-prioritize on every read; keep recurring, high-value guidance only.
- Maximum 10 items per category.
- Every item includes a date and a concrete `Do instead` action.
- This is a runbook, not a timeline, audit report, task list, or PR history.

## Execution & Validation — Highest Priority

1. **[2026-07-19] Una tarea usa una branch y un worktree exclusivos; nadie puede reutilizarlos para otra tarea.**
   Do instead: antes de editar, confirmar branch, status, commits y archivos; si existe trabajo de otra tarea, detenerse y crear una branch y un worktree limpios.
2. **[2026-07-18] Verify branch before every edit; never work directly on `main`.**
   Do instead: run `git branch --show-current` and `git status --short --branch` before changing files.
3. **[2026-07-18] No bulk changes.**
   Do instead: make the smallest viable change, verify it, then continue only after approval.
4. **[2026-07-18] Read repository rules before acting.**
   Do instead: read `AGENTS.md`, `CLAUDE.md`, and relevant `.claude/rules/` files.
5. **[2026-07-18] Present purpose before deliverables.**
   Do instead: state priority, POR QUÉ, PARA QUÉ, QUÉ, and RESULTADO ESPERADO before execution.
6. **[2026-07-18] Review exact scope before commit or handoff.**
   Do instead: run `git status`, inspect the diff, and list only files actually changed.
7. **[2026-07-18] Verify behavior, not only static screenshots.**
   Do instead: test responsive state, scroll, DOM position, CTA action, and relevant breakpoints.

## Copy, Conversion & AEO

1. **[2026-07-18] Reducing pogo-sticking is a fundamental operational objective.**
   Do instead: confirm relevance immediately, communicate value, provide proof, create internal depth, and lead to a concrete decision.
2. **[2026-07-18] KPEMM speaks as a company using `we`.**
   Do instead: use `we` for real company actions and standards; support every promise with specifics or evidence.
3. **[2026-07-18] Communicate transformation before listing services.**
   Do instead: lead with what changes for the customer, then service, inclusions, differentiator, proof, and CTA.
4. **[2026-07-18] The homepage maintenance card is BOFU plus a gateway to the maintenance silo.**
   Do instead: make it capable of converting directly while linking to deeper service evidence.
5. **[2026-07-18] Make answers extractable for people and AI.**
   Do instead: state entity, service, location, result, differentiator, evidence, and action in clear self-contained language.
6. **[2026-07-18] Retention is not artificially long text.**
   Do instead: answer quickly, then earn continued attention with useful specifics, proof, comparisons, and internal links.
7. **[2026-07-18] KPEMM is premium, not a commodity.**
   Do instead: communicate personalized on-site care, quality materials, careful work, and why those standards matter.
8. **[2026-07-18] Separate evidence from marketing hypotheses.**
   Do instead: label claims as confirmed, plausible, anecdotal, or unproven; test before promising outcomes.

## Business Facts & Compliance

1. **[2026-07-18] Never invent business facts, cases, findings, credentials, prices, or review counts.**
   Do instead: verify against current canonical sources or ask Jose.
2. **[2026-07-18] Do not publish prices in public website or social copy.**
   Do instead: use price privately as a qualification tool only when authorized.
3. **[2026-07-18] Use role-based public positioning.**
   Do instead: use `Certified Mechanic` in conversion copy; do not foreground Joseph/Jose unless explicitly requested.
4. **[2026-07-18] Avoid unsupported superiority and fear claims.**
   Do instead: show a verified standard, process, review, or real outcome and let the evidence differentiate KPEMM.
5. **[2026-07-18] Do not frame KPEMM as cheap, affordable, or generic.**
   Do instead: filter for clients who value quality, personalization, convenience, and accountability.

## Repository & Architecture Gotchas

1. **[2026-07-18] Site is static HTML/CSS/vanilla JS on Netlify.**
   Do instead: refine existing patterns and avoid unnecessary frameworks or dependencies.
2. **[2026-07-18] Shared components may be duplicated across pages.**
   Do instead: read `.claude/rules/shared-components.md` and verify each affected page individually.
3. **[2026-07-18] Protected production files require explicit approval.**
   Do instead: do not edit `_headers`, `_redirects`, `robots.txt`, or `sitemap.xml` without the required explanation and approval.
4. **[2026-07-18] Mobile-first behavior can differ from desktop.**
   Do instead: audit both environments before classifying a layout or CTA issue.

## Continuity

1. **[2026-07-18] Create a handoff after every representative activity.**
   Do instead: update `.claude/handoff.md` with decisions, pending work, corrections, files changed, and the exact next start.
2. **[2026-07-18] Keep durable copy knowledge in the living playbook.**
   Do instead: update `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md` when evidence or Jose's corrections change the standard.
3. **[2026-07-18] Do not use the handoff as a permanent knowledge base.**
   Do instead: put recurring rules in this napkin, copy methodology in the playbook, and only current activity state in the handoff.

## Canonical Pointers

- Repository rules: `AGENTS.md`, `CLAUDE.md`, `.claude/rules/`.
- Living copy standard: `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md`.
- Preserved unresolved work: `DOCS/SITE-BACKLOG-2026-07-18.md` (re-verify before execution).
- Business philosophy and current marketing data: `/Users/EPARDOSAENZ/Documents/KPEMM/Mobile Mechanic KPEMM /Marketing workers /02-Marca-y-Contexto/`.
