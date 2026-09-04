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

1. **[2026-09-04] GSC average position cannot answer "where do we rank in Kelowna",
   and six months of analysis were built on it.** It averages every impression
   across every city and device. This site showed 15.3 for
   "mobile pre purchase inspection kelowna" while the real Kelowna SERP, in
   incognito, showed **2nd** (Jose, screenshot, 2026-09-02). Both are correct;
   they answer different questions. The average is diluted by impressions in
   Vancouver, Calgary, Toronto and the US, where the business does not operate.
   Two limits verified 2026-09-04: the connected MCP functions take only dates
   and a row limit, with no country/region/city filter at all; and the full GSC
   UI filters by **country only** — no city dimension exists.
   Do instead: for local position use Jose's incognito search from Kelowna or
   Google Business Profile, never GSC's average. Keep using GSC for what it is
   good at: which queries exist, click and impression trends, indexation. When
   quoting any position, always state the source — "GSC worldwide average" or
   "real Kelowna SERP, date" — never a bare "position".

2. **[2026-09-02] Measure the real thing, never a copy of it. Four wrong conclusions in one
   session all came from this single mistake, and each one had to be walked back in front of
   the owner.** Read the repo and got the page wrong (it already had the reviews, the sample
   report and the neighbourhoods). Trusted `img.naturalWidth` from the browser pane (reported
   260px; the file was 695px) and called a correctly-sized image low-resolution. Trusted a GSC
   average position of 15.3 when the live Kelowna SERP showed 2nd. Branched off a **stale local
   `main`** and re-counted internal links against a diagnostic page that had not existed since
   2026-08-18, after having previously counted the correct one and "corrected" it the wrong way.
   Do instead, before any measurement or claim about the site:
   - `git fetch origin` and confirm the base is current. **Never branch off local `main`
     without fetching first.**
   - For anything about a published page, `curl` the live URL or open it. The repo is what we
     intend; the live site is what Google sees.
   - Verify tool output against the source (file on disk, live HTML) before quoting it.
   - Say "I have not verified this" rather than presenting an unverified number as a fact.

3. **[2026-09-02] The rebuild of `services/diagnostic/` on 2026-08-18 silently removed the only
   body link to `/services/pre-purchase/` and left the page with no internal outbound links at
   all except "Home".** A page rebuild is an internal-link event, not only a design one, and no
   one noticed for two weeks.
   Do instead: before merging any page rebuild, diff the body's outbound internal links against
   the version being replaced and re-add any that were dropped on purposeless grounds.

4. **[2026-07-18] Verify behavior, not only static screenshots.**
   Do instead: test responsive state, scroll, DOM position, CTA action, and relevant breakpoints.
5. **[2026-08-05] Never merge a page whose internal links point to pages that don't exist yet.**
   Applies to any hub/index/cluster page built incrementally. Check with a filesystem test
   for every linked slug, not by assuming "they must be done by now".
   Do instead: `for u in <slugs>; do [ -f "path/$u/index.html" ] || echo "404: $u"; done`
   before considering merge. A hub with broken links does more damage than no hub at all —
   it hits the visitor with the most intent to call, and search engines/AI penalize dead
   internal links. Confirmed on field-reports: hub was finished and audited, but the 6
   linked case pages did not exist yet, so merge was correctly held.
6. **[2026-08-13] An AI-writing-pattern audit must cover the whole page, not just the block
   you just wrote.** First pass on the GMC case page checked only the article body and
   assumed headings, badges, and footer were clean; a full-page pass found 24 instances
   where the first pass found 8 — including patterns in text written earlier the same
   session, which needs the same scrutiny as inherited copy.
   Do instead: scan title, meta, every heading, every badge/label, and the footer, not just
   the paragraph currently being edited.
7. **[2026-08-13] Editing an external stylesheet and then measuring "no change" usually
   means browser cache, not a bad edit.** Lost a full measurement cycle assuming a CSS fix
   didn't work before checking cache.
   Do instead: if a measured value doesn't move after an external CSS edit, bust that
   specific `<link>` (`link.href += '?bust=' + Date.now()`) before concluding the edit failed.
8. **[2026-08-13] CSS Grid rows sized `1fr` default to `min-height: auto`, which can push
   the grid taller than an explicit `height` on the container.** Caused a hero to overflow
   its viewport-fit height by 23px despite a fixed `height` being set.
   Do instead: use `minmax(0, 1fr)` for any row that must respect the container's fixed height.

## Copy, Conversion & AEO

1. **[2026-08-14] Case-page content standard, derived from why PPI (pre-purchase) converts best on the site.**
   Comparing GMC against PPI content/structure (not visual design) found 5 content gaps + 3
   technical gaps that explain part of PPI's performance. Applied to GMC first as the
   template; every new case page must include all 8:
   1. Strongest review proof placed right after the hero (card w/ name, stars, quote,
      "Verify on Google" link), not buried mid-article. Never show the same review twice
      on one page — if it's up top, it isn't repeated lower down.
   2. One bolded single-sentence differentiator near the top, built only from facts already
      stated elsewhere on the page (never a new claim).
   3. Mid-page CTA restates the trust numbers (rating + review count) in its own text, not
      just a bare phone number.
   4. "Related Services" is a real `<section>` with its own `<h2>` and a lead paragraph, not
      a bare link list — carries more topical-relevance signal for Google/AI.
   5. Never invent reviewer metadata (photo, "N reviews", "Local Guide"). Check the real
      screenshot/profile first; if the data isn't there, omit the line rather than guess.
   6. Preload the hero image (`<link rel="preload" as="image">` + `fetchpriority="high"` on
      the `<img>`) for LCP.
   7. Prefer an external stylesheet over a large inline `<style>` block on new pages (GMC's
      page still has one — flagged as future cleanup, not blocking).
   8. Do not add a quantified-loss dollar figure unless Jose gives a verified number — reuse
      existing approved copy (e.g. an FAQ answer) for risk framing instead of inventing one.

2. **[2026-07-18] Reducing pogo-sticking is a fundamental operational objective.**
   Do instead: confirm relevance immediately, communicate value, provide proof, create internal depth, and lead to a concrete decision.
3. **[2026-07-18] KPEMM speaks as a company using `we`.**
   Do instead: use `we` for real company actions and standards; support every promise with specifics or evidence.
4. **[2026-07-18] Communicate transformation before listing services.**
   Do instead: lead with what changes for the customer, then service, inclusions, differentiator, proof, and CTA.
5. **[2026-07-18] The homepage maintenance card is BOFU plus a gateway to the maintenance silo.**
   Do instead: make it capable of converting directly while linking to deeper service evidence.
6. **[2026-07-18] Make answers extractable for people and AI.**
   Do instead: state entity, service, location, result, differentiator, evidence, and action in clear self-contained language.
7. **[2026-07-18] Retention is not artificially long text.**
   Do instead: answer quickly, then earn continued attention with useful specifics, proof, comparisons, and internal links.
8. **[2026-07-18] KPEMM is premium, not a commodity.**
   Do instead: communicate personalized on-site care, quality materials, careful work, and why those standards matter.
9. **[2026-07-18] Separate evidence from marketing hypotheses.**
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
