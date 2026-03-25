# Branch Checkpoints

## Purpose

This file is the operational continuity log for active branch work.

It exists so that:

- a manager can quickly understand what was done, why it was done, and what comes next
- a senior engineer can resume work without reconstructing context from chat history
- future fixes, audits, and handoffs can start from a precise checkpoint instead of assumptions

This file complements Git history. It does not replace commits.

## What This File Is

This is the checkpoint-by-checkpoint operating log for active branch work.

Use this file to understand:

- where the current branch work stands
- what was approved
- what was changed
- why it was changed
- what remains pending
- what the next recommended step should be

## What This File Is Not

This file is not:

- the complete history of the entire project
- the strategic doctrine of the business
- a replacement for Git commits
- a place for vague notes without branch, commit, or decision context

## When To Update This File

Update this file at the end of every meaningful approved work block.

Each update must leave a usable resume point for:

- a manager
- a senior engineer
- a future AI assistant

## Required Update Rule

Every meaningful approved work block must end with a checkpoint entry in this file.

Do not rely only on:

- chat memory
- commit messages
- personal recollection

Each checkpoint must record:

- exact date and time
- time zone
- active branch
- latest approved commit at that moment
- objective of the work block
- files touched
- business reason for the change
- technical summary of the change
- copy/UX direction used
- what was explicitly approved
- what remains pending
- next recommended step
- whether `main` was touched

## Reading Order

If someone new joins the project, they should read in this order:

1. this file
2. `docs/PROJECT_MASTER.md`
3. `docs/SCRUM_BREADCRUMBS.md`
4. relevant source files

## Terms

- Branch: isolated work line. Used to make changes safely without touching the stable version.
- Commit: saved checkpoint in Git. It is a precise before/after record of a small work unit.
- Checkpoint: human-readable summary of what a commit or group of commits achieved and what should happen next.
- `main`: stable branch. Must not be edited directly unless explicitly approved.
- Copy direction: the messaging strategy used in headlines, subtitles, calls to action, and trust language.

---

## Checkpoint 2026-03-24 16:42:00 PDT

### Branch

- `main`

### Latest approved commit at checkpoint time

- `dbeec69` — `Merge branch 'test/trust-bar-fixes'`

### Main touched?

- Yes. `main` was updated and pushed to origin for production deploy.

### Objective of this work block

Move the approved frontend and backend SEO work from the `test/trust-bar-fixes` branch into production while preserving full Git history and leaving a clear historical record for future operators.

### Files now materially reflected in production

- `index.html`
- `sitemap.xml`
- `field-reports/index.html`
- `field-reports/bmw-z3-kelowna-diagnostic/index.html`
- `scripts.js`
- `estilos-header2.css`
- `DOCS/PROJECT_MASTER.md`
- `DOCS/SCRUM_BREADCRUMBS.md`
- `DOCS/BRANCH_CHECKPOINTS.md`
- `DOCS/GA4-SETUP-GUIDE.md`

### Exact work completed before merge

#### 1. GA4 cleanup + mobile widget protection

- `c932ac6` on `main` already had:
  - removal of duplicate call tracking logic so production uses `phone_click`
  - mobile floating widget hidden on small screens to prevent CTA overlap

Why this matters:

- cleaner analytics
- fewer false lead counts
- better mobile usability

#### 2. Homepage hero and trust-flow production release

Merged through:

- `0cfbce6` and later `dbeec69`

Production homepage now includes:

- mobile CTA bar below header
- trust block above the hero headline
- simplified hero flow without the old moving ticker
- stronger hero copy
- improved support-copy readability
- four value bullets below the hero CTA

Why this matters:

- clearer first impression
- stronger trust hierarchy
- better mobile conversion flow

#### 3. Sticky mobile CTA bar fix

- `c85e453` — `fix: mobile-cta-bar sticky positioning below header`

What changed:

- verified sticky ancestors were not blocked by overflow
- applied real sticky positioning to the blue CTA bar
- aligned `top` offset to the mobile header height

Why this matters:

- the CTA bar now remains visible as intended during mobile scrolling

#### 4. Backend SEO release

- `8d142e5` — `seo: update homepage schema title and sitemap`

What changed:

- homepage `<title>` updated
- homepage AutoRepair schema upgraded and aligned
- `reviewCount` kept at 42
- `sitemap.xml` updated with 2026-03-24 lastmod values and priorities

Why this matters:

- stronger location + service targeting
- cleaner schema consistency
- sitemap now reflects the current release date

#### 5. Editorial rename for case-study section

- `643e1e9` — `content: rename Field Reports to Success Stories (editorial only, URLs unchanged)`

What changed:

- user-facing and SEO-facing labels moved from `Field Reports` to `Success Stories`
- URL paths remained `/field-reports/`

Why this matters:

- better public-facing naming
- no SEO migration risk from path changes

### What was explicitly approved

- release approved work from `test` into `main`
- keep full commit history
- do not squash
- do not delete the test branch
- keep URLs unchanged for `/field-reports/`

### Current production state after this checkpoint

- `main` is live at commit `dbeec69`
- origin/main confirmed updated
- production reflects:
  - trust-first homepage
  - sticky mobile CTA bar
  - updated homepage schema/title/sitemap
  - `Success Stories` editorial naming

### Remaining recommended next step

Use documentation-only time to keep source-of-truth docs aligned with production after significant releases. Future homepage changes should start from this checkpoint and from the current production structure, not from older hero layouts.

### Resume prompt

To resume from this checkpoint in a future conversation, use:

`Resume from main at commit dbeec69. Read DOCS/BRANCH_CHECKPOINTS.md first. Production already includes sticky mobile CTA bar, trust-first hero, homepage SEO backend updates, and Success Stories naming. Do not reopen old homepage layouts without first checking current production state.`

## Checkpoint 2026-03-24 11:16:18 PDT

### Branch

- `feat/trust-bar`

### Latest approved commit at checkpoint time

- `1599355` — `copy(hero): clarify H1 and supporting subtitle`

### Main touched?

- No. `main` remains untouched.

### Objective of this work block

Improve the homepage hero so it converts better on mobile and desktop by simplifying the trust flow, removing visual noise, clarifying the main promise, and making the opening message easier to understand for real customers.

### Files touched in this branch up to this checkpoint

- `index.html`
- `scripts.js`

### Exact work completed

#### 1. Review count synchronization

- `93c7303` — `fix: sync JSON-LD reviewCount to 42 to match visible UI`
- The hidden business data that search engines read now matches the visible review count shown to customers.

Why this matters:

- prevents trust inconsistency between what Google reads and what users see
- protects search credibility and review-star eligibility

#### 2. Critical CSS cleanup

- `94f5ee0` — `perf: remove 632 lines of dead CSS from critical inline block`
- Old hero-related CSS that was no longer active was removed from the inline critical CSS block.

Why this matters:

- less dead code loads on every visit
- easier future maintenance
- lower chance of visual conflicts from unused rules

#### 3. JavaScript cleanup and hardening

- `58c0efb` — `refactor(js): remove dead code, harden security, add passive scroll`
- Removed dead JavaScript that no longer ran
- Moved lead state into a private scope instead of leaving it globally exposed
- Kept only the required public functions for the existing HTML interactions
- Enabled passive scroll listening for smoother scrolling
- Turned form captcha protection back on

Why this matters:

- cleaner code is easier to debug
- fewer exposed globals means lower accidental breakage
- smoother mobile scroll
- better protection against bot submissions

#### 4. Security cleanup and HTML event cleanup

- `ee86ec6` — `security: add security meta headers and remove inline onclick handlers`
- Removed the last inline click handler from the hero CTA
- Reused the existing analytics listener by moving the tracking label into a data attribute
- Added security-related meta instructions in HTML as reinforcement

Important clarification:

- HTML meta security instructions are helpful reinforcement, but they are not the same as full server-level security headers
- real server/CDN security configuration is still a future step

#### 5. Hero trust flow simplification

- `902bea2` — `feat: simplify homepage hero trust flow`
- Removed the moving review ticker from the top of the homepage
- Kept the stronger trust-first hero structure instead of the old moving social proof block
- Adjusted hero flow so trust appears before the main headline

Why this matters:

- less visual noise
- cleaner first impression
- stronger trust emphasis before the main sales message

#### 6. Hero message clarification

- `1599355` — `copy(hero): clarify H1 and supporting subtitle`

Approved `H1`:

- `Get Clear Answers Before You Risk Another Dollar on the Wrong Repair.`

Approved supporting subtitle:

- `Kelowna's mobile diagnostic specialist finds the real problem, gives you a clear next step, and can often repair it on-site the same day.`

Why this matters:

- removes ambiguity around payment
- shifts the promise toward clarity, trust, and decision confidence
- better reflects what customers actually buy: certainty, expertise, and peace of mind

### Current copy and UX direction

- Trust first, then promise
- No ambiguous “free diagnosis” implication
- Positioning focuses on certainty, expertise, and protection from the wrong repair
- Messaging must be understandable to non-technical customers
- Hero should feel like one continuous funnel, not separate disconnected blocks

### What was explicitly approved

- Remove the sticky/moving review ticker
- Keep the CTA bar visible and strong
- Move trust above the `H1`
- Increase trust contrast without using a boxed card style
- Reduce and then rebalance spacing between the blue CTA bar and the hero content
- Replace the hero `H1`
- Replace the hero subtitle

### What is still pending after this checkpoint

1. Replace the final line under the hero CTA

Current issue:

- it still repeats trust/review language instead of reducing friction

Recommended direction:

- use that line to reduce customer hesitation
- for example, reassure the user that diagnosis comes first and they stay in control of the next step

2. Add SMS access below the hero CTA

Why:

- some users prefer texting over calling
- this is especially important on mobile

3. Consolidate gold color values

Why:

- the hero currently uses multiple close gold tones
- this should eventually be simplified into a small token system for easier maintenance

4. Apply real security headers at server/CDN level

Why:

- HTML reinforcement is not enough by itself
- proper security headers should live in Netlify, Cloudflare, or true response-header configuration

### Recommended next step

Update the final micro-copy line under the hero CTA so it becomes a true friction reducer instead of repeating review/social-proof messaging.

### Resume prompt

To resume from this checkpoint in a future conversation, use:

`Resume from branch feat/trust-bar at commit 1599355. Read docs/BRANCH_CHECKPOINTS.md first. Do not touch main. Continue with small approved changes only. Next recommended task: replace the final hero micro-copy with friction-reducing language.`
