# Technical Direction

**Project:** Kelowna Protech Elite Mobile Mechanic  
**Date:** 2026-03-08  
**Purpose:** Technical direction for safe growth, conversion support, and low-risk maintenance.

## Decision

The current technical route is valid and should remain the primary architecture.

This project should continue as a static multi-page site built with:

- HTML
- CSS
- vanilla JavaScript
- static hosting

This is the right base for the business because it is:

- fast
- low-risk
- easy to maintain
- easy to audit
- good for SEO
- good for AI-readable content
- strong for local lead conversion

## Keep

- Static site architecture
- Netlify-style static deployment model
- Multi-page service structure
- Direct `Call + SMS` conversion flow
- Lightweight frontend with minimal dependencies
- Direct control over metadata, schema, redirects, and page content

## Correct First

These items should be fixed before major new technical expansion:

1. Create one technical source of truth for recovery and rebuild.
2. Align documentation with the real current state of the repo.
3. Normalize documentation structure and naming so there is no ambiguity.
4. Make branch discipline match the documented workflow.
5. Document external dependencies as an operational inventory.

## Postpone

These items are useful, but not before the operational base is clean:

- major redesign work
- framework migration
- CMS adoption
- advanced automation layers
- non-essential tool integrations

## Never Do

- Do not move to a heavier stack without a proven business need.
- Do not add complexity just to look more modern.
- Do not work directly on `main`.
- Do not treat documentation as optional.
- Do not mix technical recovery procedures with marketing strategy in the same core runbook.
- Do not introduce new conversion channels without evidence they help this market.

## Priority Model

Use this order for technical decisions:

1. Urgent: production breakage, lead capture failure, security exposure, broken core CTA paths
2. Important: traceability, recovery, maintainability, documentation accuracy
3. Strategic: deeper SEO systems, AI discoverability improvements, conversion refinements, advanced content architecture

## Current Technical Position

The site is not in the wrong architecture.

The main weakness is not the frontend stack. The main weakness is operational maturity:

- partial documentation drift
- recovery instructions mixed with non-critical operations
- incomplete technical source-of-truth discipline

## Rule For Future Decisions

Any future technical change should pass all of these tests:

1. Does it improve or protect conversion?
2. Does it reduce or at least not increase operational risk?
3. Does it stay easy to maintain?
4. Does it help Google and AI systems understand the site more clearly?
5. Can it be recovered cleanly if something breaks?

If the answer is not clearly yes to most of these, the change should not be prioritized.

## Next Recommended Step

Build the technical truth map for the project:

- critical runtime files
- external dependencies
- recovery path
- documentation status
- operational gaps

That should happen before any significant code or architecture change.
