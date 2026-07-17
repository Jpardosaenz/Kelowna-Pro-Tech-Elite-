# GA4 Tracking Integrity

**Implemented:** 2026-07-17

**Status:** Ready for review; not merged or deployed

## Purpose

Keep development and test sessions out of the production GA4 property while preserving normal measurement on the public website.

## Production rule

`analytics.js` initializes measurement ID `G-1GDM77733G` only when:

```text
window.location.hostname === kelownaprotechmobilemech.com
```

Consequences:

- `localhost` does not load or initialize GA4.
- Netlify deploy-preview hostnames do not load or initialize GA4.
- The canonical production hostname continues to initialize GA4.

All eight tracked HTML pages use this shared loader. Do not restore page-level copies of the Google tag.

## Call and Text events

`scripts.js` no longer overrides the reserved `page_location` field with `window.location.pathname`. Google Analytics therefore uses its default `document.location` value, which is the full page URL and preserves the hostname.

`phone_click` and `sms_click` remain interaction events. They must not be described as confirmed leads without reconciliation against real calls, messages or CRM records.

## Verification completed

- JavaScript syntax checks passed for `analytics.js` and `scripts.js`.
- Exactly eight HTML pages reference `/analytics.js`.
- No tracked HTML page contains a direct `googletagmanager.com/gtag/js` embed.
- Browser network test: localhost produced no Google Analytics requests.
- Browser network test: a Netlify preview hostname produced no Google Analytics requests.
- Browser network test: `kelownaprotechmobilemech.com` initialized GA4 and requested the configured Google tag.
- Git whitespace validation passed.

## Reporting cutoff

Historical GA4 data remains contaminated and must still be filtered with:

```text
hostName EXACTLY kelownaprotechmobilemech.com
```

Future data can be treated as protected from localhost and preview contamination only from the actual production deployment timestamp onward. Record that timestamp here and in the cross-project analytics baseline after deployment.
