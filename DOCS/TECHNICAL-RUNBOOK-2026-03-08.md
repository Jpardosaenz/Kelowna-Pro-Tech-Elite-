# Technical Runbook

**Project:** Kelowna Protech Elite Mobile Mechanic  
**Date:** 2026-03-08  
**Purpose:** Minimum technical runbook to start, verify, deploy, and recover the site.

## 1. Source of Truth

This runbook is the operational technical reference for:

- local start
- runtime verification
- deploy basics
- recovery basics

Supporting references:

- `docs/TECHNICAL-DIRECTION-2026-03-08.md`
- `docs/PROJECT_MASTER.md`
- `docs/agents.md`

## 2. Critical Runtime Files

The site depends on these files first:

- `index.html`
- `estilos-header2.css`
- `service-tiles.css`
- `scripts.js`
- `_redirects`
- `_headers`
- `robots.txt`
- `sitemap.xml`

Critical page folders:

- `services/diagnostic/`
- `services/maintenance/`
- `services/pre-purchase/`
- `field-reports/`

## 3. External Dependencies

The site currently depends on:

- GitHub repository
- Netlify deployment
- FormSubmit for lead capture
- Google Analytics 4 (`G-1GDM77733G`)
- Google Search Console

If any of these fail, the site may still load, but conversion, tracking, or discoverability can degrade.

## 4. Clean Start From Repository

Clone and open the project:

```bash
git clone https://github.com/Jpardosaenz/Kelowna-Pro-Tech-Elite-.git
cd Kelowna-Pro-Tech-Elite-
```

Serve locally with a simple static server:

```bash
python3 -m http.server 5500
```

Open:

```text
http://localhost:5500/index.html
```

## 5. Minimum Local Verification

Verify these items first:

- homepage loads
- all service pages load
- CSS loads correctly
- `scripts.js` loads correctly
- mobile menu opens and closes
- floating CTA appears
- diagnostic modal opens
- `tel:` links work
- `sms:` links work
- images load

## 6. Lead Capture Verification

Lead capture depends on FormSubmit in `scripts.js`.

Check:

- modal step flow works
- partial lead submission works
- complete lead submission works
- success feedback appears

If leads do not arrive:

1. verify FormSubmit endpoint in `scripts.js`
2. verify FormSubmit email confirmation is active
3. verify browser console has no submission errors

## 7. Analytics Verification

GA4 must be present on home and service pages.

Check:

- GA4 script loads
- measurement ID is `G-1GDM77733G`
- CTA click events fire
- lead events fire

If tracking seems broken:

1. verify GA4 script exists in the page
2. verify `gtag` is available
3. test without blockers
4. allow a few minutes for GA4 realtime delay

## 8. Deploy Basics

Deployment model:

- static hosting
- Netlify-style redirects and headers
- no build step required

Production-critical files:

- `_redirects`
- `_headers`
- canonical URLs
- sitemap
- metadata

## 9. Recovery Priority Order

Use this order during incidents:

1. production availability
2. call and SMS conversion paths
3. lead capture
4. CSS/JS integrity
5. analytics
6. search enhancements

## 10. Fast Recovery Scenarios

### Site loads poorly or styles are broken

Check:

- `estilos-header2.css`
- `service-tiles.css`
- `_headers`
- `_redirects`
- recent commit history

### Lead capture is broken

Check:

- modal flow
- `scripts.js`
- FormSubmit endpoint
- FormSubmit activation state

### Tracking is broken

Check:

- GA4 tag presence
- measurement ID
- event calls in `scripts.js`

### Full rebuild on new machine

Required minimum:

1. clone repo
2. serve locally
3. verify runtime files
4. verify service pages
5. verify call/SMS paths
6. verify lead capture
7. verify deploy target

## 11. Current Operational Gaps

These gaps still exist and should be resolved in future work:

- documentation naming ambiguity (`docs` vs `DOCS`)
- partial documentation drift
- no clean release tags
- external dependency inventory is still basic
- some operational knowledge remains distributed across multiple docs

## 12. Rule

Do not change architecture before the runbook, traceability, and recovery path are fully trustworthy.
