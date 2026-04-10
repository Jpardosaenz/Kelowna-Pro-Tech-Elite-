---
paths:
  - "**/*.html"
---

# Shared components across HTML pages

The following components are duplicated across multiple HTML pages and MUST be kept in sync.
If you edit any of these in one page, you MUST apply the same edit to ALL pages that contain it.

## Header (7 pages)
Selector: `<header class="kpem-header-mobile">`
Present in: index.html, services/diagnostic/index.html, services/maintenance/index.html, services/pre-purchase/index.html, field-reports/index.html, field-reports/bmw-z3-kelowna-diagnostic/index.html, 404.html
Known variation: field-reports pages have "Success Stories" nav item instead of "Contact" link.

## Footer (6 pages)
Selector: `<footer class="site-nap">`
Present in: all pages EXCEPT 404.html
Content is identical across all 6 pages. No variations.

## Diagnostic modal (6 pages)
Selector: `#diag-modal`
Present in: all pages EXCEPT 404.html
Structure is identical. ONLY the CTA button text in Step 3 varies per page — preserve each page's unique CTA text when syncing.

## Floating CTA (7 pages)
Selector: `.floating-cta-container`
Present in: all 7 pages
Structure is identical. ONLY the button text varies per page — preserve each page's unique button text when syncing.

## Sync rules
- Edit the component in ONE page first, verify it works.
- Then apply the identical change to each remaining page, one page at a time.
- Do NOT batch all pages in a single edit.
- After each page, verify the change is correct before moving to the next.
- Preserve page-specific variations (CTA text, nav items) — do not overwrite them.
