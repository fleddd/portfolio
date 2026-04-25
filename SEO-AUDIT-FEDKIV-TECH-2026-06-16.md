# SEO Audit — fedkiv.tech

**Date:** 2026-06-16  
**Audited scope:** live site `https://fedkiv.tech` / `https://www.fedkiv.tech`, local Next.js codebase, `SEO-WORKFLOW-SYSTEM-2026.md` SOP  
**Project type:** personal/service portfolio for web development, bilingual EN/UA, lead generation  

## Executive Summary

The site has a solid SEO foundation: indexable static pages, server-rendered content, service landing pages, unique metadata for key service URLs, sitemap/robots routes, Open Graph image, FAQ content and FAQPage schema on service pages.

The main SEO risk is canonical inconsistency. The live site resolves to `https://www.fedkiv.tech`, while metadata, sitemap, robots, hreflang and JSON-LD point to `https://fedkiv.tech`. That creates redirected sitemap URLs, conflicting canonical signals, and weaker hreflang/entity consistency.

Priority fixes:

1. Choose one canonical host and align Vercel domain redirects, `NEXT_PUBLIC_SITE_URL`, metadata, sitemap, robots and JSON-LD.
2. Replace the live `307 Temporary Redirect` from non-www to www with a permanent redirect.
3. Fix language handling so `/ua` renders `html lang="uk"` or split layouts by locale.
4. Add missing per-page schema: `Service`, `BreadcrumbList`, and stronger `Person`/service entity details.
5. Add security headers and verify a clean production build after resolving the `.next` lock issue.

## Evidence Snapshot

Live HTTP checks:

| Check | Result | SEO impact |
|---|---:|---|
| `https://fedkiv.tech` | `307 Temporary Redirect` to `https://www.fedkiv.tech/` | Should be permanent for canonical consolidation |
| `http://fedkiv.tech` | `308` to HTTPS, then `307` to www | Redirect chain and temporary second hop |
| `https://www.fedkiv.tech` | `200 OK`, Vercel cache HIT | Live canonical host is www |
| `https://www.fedkiv.tech/robots.txt` | `200 OK` | Points to non-www host and non-www sitemap |
| `https://www.fedkiv.tech/sitemap.xml` | `200 OK` | Contains non-www URLs |
| `https://fedkiv.tech/sitemap.xml` | `307` to www sitemap | robots points to a redirected sitemap URL |
| `https://fedkiv.tech/ua` | `307` to `https://www.fedkiv.tech/ua` | sitemap URLs redirect |
| `https://www.fedkiv.tech/opengraph-image` | `200 OK`, `image/png`, 1200x630 metadata present | Good |
| PageSpeed Insights API | `429 quota exceeded` | CWV/lab score not measured in this audit |

Local verification:

| Command | Result |
|---|---|
| `pnpm lint` | Passed with 3 warnings |
| `pnpm build` | Failed before compilation: `EPERM` unlinking `.next/app-path-routes-manifest.json` |
| `git status --short` | Only `SEO-WORKFLOW-SYSTEM-2026.md` is untracked before this audit file |
| `.env` tracked? | Not tracked; `.env*` is ignored |

## Critical Findings

### 1. Canonical Host Mismatch

**SOP phase:** 1.1 Crawl & Indexability, 1.2 Site Architecture, 2.1 Entity Establishment  
**Severity:** Critical  

Live site resolves to `https://www.fedkiv.tech`, but the code defaults to `https://fedkiv.tech`:

- `app/layout.tsx:8`, `metadataBase`, author URL, canonical, OG and Twitter URLs.
- `app/page.tsx:5`, `app/ua/page.tsx:5`, service pages and legal pages use the same `SITE_URL`.
- `app/robots.ts:12-13` emits `Host: https://fedkiv.tech` and `Sitemap: https://fedkiv.tech/sitemap.xml`.
- `app/sitemap.ts:4` emits all sitemap URLs on non-www.
- `app/components/JsonLd.tsx:1` emits Person/WebSite/ProfessionalService URLs on non-www.

Impact:

- Sitemap URLs are not canonical 200 URLs.
- Search engines receive mixed canonical, redirect and entity signals.
- hreflang points to redirected URLs.
- Link equity consolidation depends on a temporary redirect.

Recommended fix:

- Decide canonical host. Since production currently serves www as `200 OK`, either:
  - set production `NEXT_PUBLIC_SITE_URL=https://www.fedkiv.tech`, update fallback constants, robots, sitemap and JSON-LD to www; or
  - reconfigure Vercel so non-www is primary and www permanently redirects to non-www.
- Make all non-canonical host redirects permanent (`301`/`308`), not `307`.
- Re-submit sitemap in GSC after deployment.

### 2. Temporary Redirect Used for Canonical Domain

**SOP phase:** 1.1 Redirect chains, 1.2 canonical domain  
**Severity:** Critical  

`https://fedkiv.tech` returns `307 Temporary Redirect` to `https://www.fedkiv.tech/`.

Impact:

- A temporary redirect is a weak canonicalization signal.
- `http://fedkiv.tech` currently chains `308 -> 307 -> 200`.

Recommended fix:

- In Vercel domains, set the intended primary domain and enforce permanent redirects.
- After deploy, validate:
  - `curl -IL https://fedkiv.tech`
  - `curl -IL https://www.fedkiv.tech`
  - only one canonical host should return `200`; the other should permanently redirect in one hop.

### 3. Ukrainian Pages Render With `html lang="en"`

**SOP phase:** 1.4 Mobile & Accessibility, multilingual/hreflang checks  
**Severity:** High  

`app/layout.tsx:100` hardcodes:

```tsx
<html lang="en">
```

Live `/ua` HTML also renders `<html lang="en">`.

Impact:

- Incorrect language signal for Ukrainian pages.
- Accessibility and browser translation hints are wrong.
- Weakens consistency with `hreflang="uk-UA"`.

Recommended fix:

- Use route-group layouts or a locale-aware layout so `/ua/*` renders `lang="uk"` or `lang="uk-UA"`.
- Keep English pages as `lang="en"` or `lang="en-US"`.

### 4. Production URL Depends on Environment Variable

**SOP phase:** 1.1 canonical, 9.1 tracking/configuration infrastructure  
**Severity:** High  

Most SEO-critical output depends on `NEXT_PUBLIC_SITE_URL`. Local `.env` currently uses a localhost value, while the code fallback is non-www.

Impact:

- A wrong production env value can generate localhost or non-canonical URLs in metadata, sitemap and JSON-LD.
- This is high blast radius because the variable is used across all SEO surfaces.

Recommended fix:

- Create a single helper, for example `app/lib/site.ts`, that normalizes `SITE_URL` and strips trailing slash.
- Fail loudly in production if `NEXT_PUBLIC_SITE_URL` is missing, localhost, or not the canonical production domain.
- Use the helper in metadata, sitemap, robots and JSON-LD.

## High Findings

### 5. Structured Data Is Present but Too Generic

**SOP phase:** 2.3 Structured Data, 6 AI Search Optimization  
**Severity:** High  

Current schema:

- Global `Person`, `WebSite`, `ProfessionalService` in `app/components/JsonLd.tsx`.
- `FAQPage` on service detail pages in `app/components/ServiceDetailPage.tsx:201`.

Gaps:

- No `BreadcrumbList` on `/services`, `/technical`, legal pages or service detail pages.
- No page-specific `Service` schema for each service URL.
- `ProfessionalService` is global and generic; service pages should describe the current offer.
- `WebSite` lacks `SearchAction`, but this is optional and only useful if site search exists.
- Person schema can be stronger with `image`, `email`, `address` or `homeLocation` where appropriate, and consistent `sameAs`.

Recommended fix:

- Add route-aware JSON-LD:
  - Homepage: `Person`, `WebSite`, `ProfessionalService`.
  - Service hub: `CollectionPage` or `ItemList` of services.
  - Service detail: `Service`, `FAQPage`, `BreadcrumbList`.
  - Technical page: `ProfilePage` or `Person` with `knowsAbout`.
- Use canonical www/non-www consistently inside every schema object.

### 6. Legal Pages Are Thin and Lack Language Alternates

**SOP phase:** 1.5 Security & Trust Signals, 2.2 E-E-A-T  
**Severity:** High  

Privacy and terms pages exist, which is good. Current gaps:

- English legal pages only define canonical, no language alternates.
- Content is minimal and does not describe processors/subprocessors, retention, legal basis, user rights, or contact details in detail.
- No cookie policy or analytics disclosure, while Vercel Analytics and Speed Insights are loaded in `app/layout.tsx`.

Recommended fix:

- Add full privacy/cookie disclosure for contact form, Vercel Analytics, Speed Insights and email provider usage.
- Add alternates between EN/UA legal pages.
- Consider `noindex` only if legal pages are intentionally not SEO targets; otherwise keep indexable and complete.

### 7. Missing Security Headers

**SOP phase:** 1.5 Security & Trust Signals  
**Severity:** High  

Live headers include HSTS from Vercel, but no obvious:

- `X-Content-Type-Options: nosniff`
- `X-Frame-Options` or CSP `frame-ancestors`
- `Referrer-Policy`
- `Permissions-Policy`
- `Content-Security-Policy`

Recommended fix:

- Add `headers()` in `next.config.ts`.
- Start with pragmatic headers:
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `Content-Security-Policy` after testing Vercel Analytics, Speed Insights, Resend/API and inline JSON-LD compatibility.

## Medium Findings

### 8. Sitemap Uses Build-Time `new Date()`

**SOP phase:** 1.1 Sitemap quality  
**Severity:** Medium  

`app/sitemap.ts` uses `lastModified: new Date()` for all URLs.

Impact:

- Every build can mark every page as modified, even when content did not change.
- This reduces the usefulness of `lastmod`.

Recommended fix:

- Use stable content revision dates per page/service.
- For dynamic service content, store `lastModified` in the service config or a route metadata map.

### 9. Metadata Encoding/Console Rendering Should Be Verified

**SOP phase:** 4.1 Metadata, multilingual QA  
**Severity:** Medium  

The live curl output displayed Ukrainian characters as `????` in the terminal. The source files are UTF-8 and this may be a Windows console rendering issue, not necessarily a site issue.

Recommended fix:

- Verify in browser page source, Rich Results Test and GSC URL Inspection.
- Confirm response header stays `Content-Type: text/html; charset=utf-8`.

### 10. Twitter Metadata Is Too Generic on Localized and Service Pages

**SOP phase:** 4.1 On-page SEO, social preview QA  
**Severity:** Medium  

Global `twitter.title` and `twitter.description` in `app/layout.tsx` remain generic. Service pages set Open Graph details but do not override Twitter card text per page.

Recommended fix:

- Add page-specific Twitter metadata for homepage, UA homepage and service pages.
- Use canonical `SITE_URL` for image URLs.

### 11. AI Search / AEO Coverage Is Started but Not Deep Enough

**SOP phase:** 6 GEO/AEO/SGE  
**Severity:** Medium  

Strengths:

- Service pages include FAQ sections and `FAQPage` schema.
- Content is structured with problems, deliverables, process and FAQ.

Gaps:

- FAQ count is 4 per service; SOP target is 5-8.
- No `llms.txt`.
- No concise "Key takeaways" or definition blocks.
- Few external trust citations or case-study proof points.

Recommended fix:

- Add 1-3 more high-intent FAQs per service.
- Add a concise answer block near the top of service pages.
- Add `public/llms.txt` with canonical service/entity summary.
- Add proof-driven case studies with measurable outcomes.

### 12. E-E-A-T Signals Need Stronger Proof

**SOP phase:** 2.2 E-E-A-T  
**Severity:** Medium  

Current strengths:

- Named person entity.
- Social profiles linked.
- Contact email and location visible.
- Service pages describe process and deliverables.

Gaps:

- No dedicated About/Profile page with credentials, project methodology and proof.
- Project cards are useful but not full case studies.
- Testimonials, client logos and measurable before/after results are absent.
- Pricing or engagement model is not explicit.

Recommended fix:

- Add `/about` or enrich homepage with a stronger author/service provider section.
- Convert projects into indexable case-study pages where possible.
- Add testimonials only if real and attributable.
- Add service engagement ranges or "starting from" pricing if commercially acceptable.

## Low / Hygiene Findings

### 13. Lint Warnings

**SOP phase:** technical health  
**Severity:** Low  

`pnpm lint` passes with warnings:

- `app/components/ServiceDetailPage.tsx:18` unused `t`.
- `app/services/page.tsx:7` unused `seo`.
- `app/ua/services/page.tsx:3` unused `getCopy`.

Recommended fix:

- Remove unused imports/variables.

### 14. Build Verification Blocked by Locked `.next` Artifact

**SOP phase:** technical QA  
**Severity:** Low for SEO, High for release confidence  

`pnpm build` failed with:

```text
EPERM: operation not permitted, unlink '.next/app-path-routes-manifest.json'
```

No Node/Next process was visible in the process list. This looks like a Windows file lock, permission or stale artifact issue.

Recommended fix:

- Close editors/watchers that may hold `.next`.
- Remove `.next` manually if safe, then re-run `pnpm build`.
- Add build verification to pre-deploy checklist.

### 15. Local Secret Hygiene

**SOP phase:** security/trust  
**Severity:** Low if local only, High if leaked  

`.env*` is ignored and `.env` is not tracked. It still contains sensitive provider configuration locally.

Recommended fix:

- Do not commit `.env`.
- Rotate keys if the file was shared outside the local machine.
- Keep `.env.example` with placeholders only.

## Positive Findings

- Main and service pages are server-rendered in HTML, not hidden behind client-only rendering.
- The live homepage returns `200 OK` from Vercel cache.
- `robots.txt` allows crawling and blocks `/api/`.
- `sitemap.xml` includes primary EN/UA service and legal pages.
- Open Graph image exists and returns `200 OK`.
- Service pages have unique titles and meta descriptions.
- Service pages include visible FAQ content and matching FAQPage schema.
- Privacy Policy and Terms pages exist.
- Navigation to key SEO pages uses real `<a>` links.
- Vercel Analytics and Speed Insights are installed for ongoing measurement.

## Priority Roadmap

### Week 1 — Technical SEO Stabilization

1. Pick canonical host and fix production domain redirect to one-hop permanent redirect.
2. Set production `NEXT_PUBLIC_SITE_URL` to the canonical host.
3. Update code fallback from `https://fedkiv.tech` to the canonical host.
4. Verify live `robots.txt`, `sitemap.xml`, canonical, hreflang, OG and JSON-LD all use the same host.
5. Fix `/ua` HTML language.
6. Resolve `.next` lock and run `pnpm build`.

### Week 2 — Schema and Trust

1. Add `BreadcrumbList` to all non-home pages.
2. Add page-specific `Service` schema to each service detail page.
3. Add `ItemList` schema to `/services` and `/ua/services`.
4. Improve Person/ProfessionalService schema with accurate contact/entity fields.
5. Expand Privacy Policy and Terms, including analytics and form processing.
6. Add security headers in `next.config.ts`.

### Month 1 — Content and Entity Growth

1. Add service-specific proof blocks: process, timeline, deliverables, risks, examples.
2. Expand FAQs to 5-8 questions per service.
3. Create case-study pages for strong portfolio items.
4. Add `llms.txt`.
5. Add a clearer About/Profile page with credentials and sameAs links.
6. Set up GSC, Bing Webmaster Tools, GA4/GSC connection, and submit canonical sitemap.

## Post-Fix Validation Checklist

- `curl -IL https://fedkiv.tech` and `curl -IL https://www.fedkiv.tech` show one canonical host and permanent redirects.
- Canonical host returns `200 OK` for all sitemap URLs.
- `robots.txt` sitemap URL uses canonical host.
- `sitemap.xml` contains only canonical 200 URLs.
- `/ua` source contains `html lang="uk"` or `uk-UA`.
- Rich Results Test validates `FAQPage`, `Service`, `BreadcrumbList`, `Person`.
- GSC sitemap discovered URL count equals expected canonical page count.
- `pnpm lint` has no warnings.
- `pnpm build` passes.
- PageSpeed/Lighthouse mobile and desktop scores are captured after deploy.

