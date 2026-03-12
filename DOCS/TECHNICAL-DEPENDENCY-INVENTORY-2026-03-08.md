# Technical Dependency Inventory

**Project:** Kelowna Protech Elite Mobile Mechanic  
**Date:** 2026-03-08  
**Purpose:** Current technical inventory of external dependencies, operational purpose, failure impact, and verification method.

## 1. Dependency Classification

This inventory separates dependencies into:

- core delivery
- lead capture
- analytics
- search visibility
- source control

## 2. Core Delivery Dependencies

### GitHub

**Role:** Source repository and version history  
**Current use:** Stores site code, docs, branch history, and recovery baseline  
**Criticality:** High  
**If it fails:** Recovery, collaboration, traceability, and clean rebuild become harder  
**Verify:** Confirm repo access, branch history, and latest remote sync  
**Minimum requirement:** Repository must remain reachable and cloneable

### Netlify

**Role:** Static hosting and production delivery  
**Current use:** Hosts site, applies redirects and headers, serves production domain  
**Criticality:** High  
**If it fails:** Site may be unavailable or may lose redirect/header behavior  
**Verify:** Confirm site loads in production and routing behaves correctly  
**Minimum requirement:** Production domain resolves and key pages render correctly

## 3. Lead Capture Dependencies

### FormSubmit

**Role:** Lead form delivery by email  
**Current use:** Receives diagnostic modal submissions from `scripts.js`  
**Criticality:** High  
**If it fails:** Site still loads, but form-based lead capture degrades or stops  
**Verify:** Submit partial and complete test leads and confirm delivery  
**Minimum requirement:** Active endpoint and email confirmation already completed

### Email Inbox (`info@kelownaprotechmobilemech.com`)

**Role:** Receives lead notifications and service confirmations  
**Current use:** Operational inbox for lead capture workflow  
**Criticality:** High  
**If it fails:** Leads may be submitted but not seen or acted on  
**Verify:** Confirm inbox access and receipt of FormSubmit messages  
**Minimum requirement:** Inbox access must remain available to the operator

## 4. Analytics Dependencies

### Google Analytics 4

**Role:** Traffic and conversion tracking  
**Current use:** Page tracking and custom lead / CTA events  
**Criticality:** Medium  
**If it fails:** Site still works, but tracking and optimization visibility degrade  
**Verify:** Confirm `G-1GDM77733G` loads and events appear in realtime  
**Minimum requirement:** Tag present on home and service pages

## 5. Search Visibility Dependencies

### Google Search Console

**Role:** Search indexing and visibility diagnostics  
**Current use:** Sitemap submission, indexing checks, search monitoring  
**Criticality:** Medium  
**If it fails:** Site still works, but visibility diagnostics and indexing control degrade  
**Verify:** Confirm property access and sitemap status  
**Minimum requirement:** Property ownership and sitemap visibility remain active

### Google Search / Rich Results Interpretation

**Role:** Search understanding of pages, metadata, and schema  
**Current use:** Reads canonical, metadata, structured data, and page hierarchy  
**Criticality:** Medium  
**If it fails or degrades:** Rankings, snippets, and discoverability can decline  
**Verify:** Inspect canonical, metadata, schema, and indexed pages  
**Minimum requirement:** Pages remain crawlable, canonicalized, and semantically clear

## 6. AI Discoverability Dependencies

### Public Crawlable HTML

**Role:** Primary machine-readable surface for LLMs and answer engines  
**Current use:** Content, service pages, field reports, internal links, metadata, and schema  
**Criticality:** High  
**If it degrades:** AI systems become less likely to interpret the site clearly or cite it accurately  
**Verify:** Confirm pages are public, readable, internally linked, and semantically consistent  
**Minimum requirement:** Clean HTML, clear service intent, consistent entity signals

## 7. Local Operational Dependencies

### Python HTTP Server or equivalent local static server

**Role:** Local preview for testing  
**Current use:** Manual validation before publishing or review  
**Criticality:** Low  
**If it fails:** Local testing becomes less convenient but not impossible  
**Verify:** Run `python3 -m http.server 5500` successfully  
**Minimum requirement:** At least one local static preview method must remain available

## 8. Dependency Risk Summary

### High Criticality

- GitHub
- Netlify
- FormSubmit
- operational inbox
- public crawlable HTML quality

### Medium Criticality

- Google Analytics 4
- Google Search Console
- search interpretation layer

### Low Criticality

- local preview tooling

## 9. Current Weak Spots

These are not failures, but they are real dependency-management gaps:

- no single credential/access ownership record in the repo docs
- no release tags tied to known-good production states
- Netlify local config is not the canonical shared config source
- lead capture depends on third-party email forwarding instead of owned application logic
- dependency verification is documented, but not yet normalized into one recurring checklist

## 10. Rule For Future Work

Before adding any new external dependency, answer all of these:

1. Does it improve conversion or protect conversion?
2. Does it reduce risk more than it increases complexity?
3. Can the site still function in a degraded mode without it?
4. Is ownership and verification clear?
5. Is recovery documented?

If the answer is not clearly yes, do not add the dependency.
