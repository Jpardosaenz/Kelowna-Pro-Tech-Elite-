# KPEMM Website Backlog — preserved from napkin

**Archived:** 2026-07-18
**Purpose:** Preserve unresolved website work that previously lived inside `.claude/napkin.md`.

This is a task inventory, not a source of current business facts. Re-verify every item against code,
Git history, canonical marketing sources, and Jose before execution. Work one micro-change at a time.

## Requires Jose's decision or evidence

1. **Privacy policy:** no verified public policy was linked when last audited. Define content before collecting new personal data.
2. **Public credential evidence:** `Certified Mechanic` lacks an approved public institution, credential number, or verification link. Jose must confirm what may be published.
3. **BMW Z3 case technical correction:** existing narrative connected a cracked vacuum line to a coolant leak. Verify the original repair record and correct the actual component.
4. **Three additional PPI cases:** collect photos, story, finding, decision, and publication approval.
5. **PPI guarantee:** decide duration, coverage, exclusions, and whether KPEMM will publish it.

## Verified technical debt — recheck before changing

1. **PPI LocalBusiness logo:** previous audit found a reference to missing `logo.webp`; homepage used `images/logo-kelowna-protech-eliteV1.webp`.
2. **Organization IDs:** homepage, Our Story, and Field Reports used different `@id` fragments. Select one canonical `#organization` identifier.
3. **`areaServed`:** inspected pages used inconsistent service-area lists. Obtain one approved canonical list before standardizing schema.
4. **Invalid `additionalType`:** homepage previously used `MobileService`, which is not a Schema.org type.
5. **Render-blocking header CSS:** several subpages loaded `estilos-header2.css` synchronously while PPI used the deferred pattern.
6. **Homepage footer NAP:** previous audit found no `site-nap` footer on the homepage.
7. **Credential copy:** `Red Seal` did not appear in inspected HTML. Add only if Jose verifies and authorizes the exact credential.
8. **Case traceability:** Gabe and Sarah examples lacked sufficient visible source/date/authorization evidence.
9. **Sitemap dates:** `lastmod` values did not reflect recent changes. Protected file; requires explicit approval before editing.
10. **Orphaned CSS:** `.lead-feedback-toast` remained after the diagnostic form was removed.

## Content and authority backlog

1. **Dedicated service pages:** brakes, no-start, and battery/starter/alternator remain candidates. Do not create without real KPEMM cases and evidence.
2. **Field Reports depth:** expand with approved real cases; the previous site had too little evidence relative to its experience claims.
3. **Homepage hero CTA:** mobile sticky CTA mitigates the issue; measure before adding another competing CTA.
4. **BMW Z3 resolution:** case study needs the owner's final decision after correcting the technical fact.
5. **Homepage citable answer:** evaluate a concise passage naming KPEMM, service, Kelowna, professional role, transformation, and evidence for AEO.

## Performance backlog

1. **Remaining CLS source:** previous measurement attributed most residual homepage CLS to `hero-fold::before`; inspect the Layout Shift panel before assuming the overlay itself is the cause.
2. **PageSpeed target:** Jose accepted approximately 90 mobile as sufficient at the time. Do not reopen broad performance work unless requested or evidence changes.

## Historical state to verify

- PRs #65, #66, #67, and #69 were recorded as merged into `main`.
- Branch `feat/ppi-top-position`, commit `0575290`, was recorded as pushed without an open PR on 2026-07-14.
- Never assume these states remain current; verify using Git and GitHub before reporting or continuing.
