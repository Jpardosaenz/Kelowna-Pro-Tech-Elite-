# Napkin Runbook — Website KPEMM

## Curation Rules

- Re-prioritize on every read; keep recurring, high-value guidance only.
- Maximum 10 items per category.
- Every item includes a date and a concrete `Do instead` action.
- This is a runbook, not a timeline, audit report, task list, or PR history.

## Execution & Validation — Highest Priority

> **[2026-07-31]** Los 6 ítems que estaban acá (branch/worktree exclusivos, verificar branch,
> no hacer cambios masivos, leer las reglas del repo, presentar POR QUÉ/PARA QUÉ/QUÉ/RESULTADO,
> revisar el diff antes del commit) eran copia textual de `AGENTS.md` y `CLAUDE.md`, que se
> cargan igual. Fuente única ahora: esos dos archivos. No volver a copiarlos acá.

1. **[2026-07-18] Verify behavior, not only static screenshots.**
   Do instead: test responsive state, scroll, DOM position, CTA action, and relevant breakpoints.
2. **[2026-08-05] Never merge a page whose internal links point to pages that don't exist yet.**
   Applies to any hub/index/cluster page built incrementally. Check with a filesystem test
   for every linked slug, not by assuming "they must be done by now".
   Do instead: `for u in <slugs>; do [ -f "path/$u/index.html" ] || echo "404: $u"; done`
   before considering merge. A hub with broken links does more damage than no hub at all —
   it hits the visitor with the most intent to call, and search engines/AI penalize dead
   internal links. Confirmed on field-reports: hub was finished and audited, but the 6
   linked case pages did not exist yet, so merge was correctly held.
3. **[2026-08-13] An AI-writing-pattern audit must cover the whole page, not just the block
   you just wrote.** First pass on the GMC case page checked only the article body and
   assumed headings, badges, and footer were clean; a full-page pass found 24 instances
   where the first pass found 8 — including patterns in text written earlier the same
   session, which needs the same scrutiny as inherited copy.
   Do instead: scan title, meta, every heading, every badge/label, and the footer, not just
   the paragraph currently being edited.
4. **[2026-08-13] Editing an external stylesheet and then measuring "no change" usually
   means browser cache, not a bad edit.** Lost a full measurement cycle assuming a CSS fix
   didn't work before checking cache.
   Do instead: if a measured value doesn't move after an external CSS edit, bust that
   specific `<link>` (`link.href += '?bust=' + Date.now()`) before concluding the edit failed.
5. **[2026-08-13] CSS Grid rows sized `1fr` default to `min-height: auto`, which can push
   the grid taller than an explicit `height` on the container.** Caused a hero to overflow
   its viewport-fit height by 23px despite a fixed `height` being set.
   Do instead: use `minmax(0, 1fr)` for any row that must respect the container's fixed height.

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
6. **[2026-08-13] Review count/rating can drift across pages independently — confirmed 5
   different numbers live at once (62/64/59/41/65) before a full-site grep caught it.**
   Do instead: before citing a review count anywhere, `grep -rn` the whole site for the
   pattern and cross-check against `reviews-gbp-v2.md`'s dated header in Marketing workers.
   Never trust any single page as ground truth. Never say "N five-star reviews" unless N
   equals the total — with an average below 5.0, the five-star subset is smaller than the
   total and Google shows the real breakdown.

## Repository & Architecture Gotchas

1. **[2026-07-18] Site is static HTML/CSS/vanilla JS on Netlify.**
   Do instead: refine existing patterns and avoid unnecessary frameworks or dependencies.
2. **[2026-07-18] Shared components may be duplicated across pages.**
   Do instead: read `.claude/rules/shared-components.md` and verify each affected page individually.
3. **[2026-07-18] Mobile-first behavior can differ from desktop.**
   Do instead: audit both environments before classifying a layout or CTA issue.
4. **[2026-08-05] Mobile CTA bar CSS is copy-pasted inline into 6 pages (~21.5 KB duplicated).**
   Measured: `field-reports` 6939 B, `services` 3711 B, `services/maintenance` 3954 B,
   `services/diagnostic` 3712 B, `field-reports/bmw-z3...` 3710 B. Two pages already do it
   right in their own stylesheet (`our-story.css`, `pre-purchase.css`), so the correct
   pattern already exists in this repo.
   Do instead: when touching any of those 6 pages, move that block into a shared
   stylesheet instead of editing the copy in place. Never edit the bar in one page only:
   the other 5 will silently drift.
5. **[2026-08-05] Case photos ship as oversized JPG while the site already uses WebP elsewhere.**
   Measured on the field-reports hub: 6 photos = 625 KB of a ~726 KB page (80% of total
   weight). Files are 600x800 / 450x600 but render at 417x260, roughly double the pixels
   needed. The repo already contains 37 `.webp` images, so the technique is adopted, just
   not applied here.
   Do instead: before adding any new case photo, export WebP at the size it actually
   renders, keep the original JPG as backup, and measure page weight before and after.
6. **[2026-08-05] Page CSS is inlined in `<style>` blocks on the heaviest pages.**
   Measured: home 19.0 KB inline, `services` 18.7 KB, `field-reports` 12.8 KB, while
   `our-story` and `services/pre-purchase` correctly use an external stylesheet.
   Do instead: follow the external-stylesheet pattern for any page you rework, so the
   browser can cache the CSS across pages instead of re-downloading it every visit.

## Continuity

1. **[2026-07-18] Keep durable copy knowledge in the living playbook.**
   Do instead: update `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md` when evidence or Jose's corrections change the standard.
2. **[2026-07-18] Do not use the handoff as a permanent knowledge base.**
   Do instead: put recurring rules in this napkin, copy methodology in the playbook, and only current activity state in the handoff.

## Canonical Pointers

- Repository rules: `AGENTS.md`, `CLAUDE.md`, `.claude/rules/`.
- Living copy standard: `DOCS/COPY-INTENT-TRUST-PLAYBOOK.md`.
- Preserved unresolved work: `DOCS/SITE-BACKLOG-2026-07-18.md` (re-verify before execution).
- Business philosophy and current marketing data: `/Users/EPARDOSAENZ/Documents/KPEMM/Mobile Mechanic KPEMM /Marketing workers /02-Marca-y-Contexto/`.
