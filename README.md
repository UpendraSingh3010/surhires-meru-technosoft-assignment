# Surhires

A marketing website for **Surhires**, a fictional hiring platform that connects Indian employers with job seekers. It has three pages: **Home**, **Find jobs** (with live filters) and **For employers** (pricing plus a "Post a job" form).

**Live site:** _add the Vercel URL here after deploying_

Built with Next.js 16 (App Router), TypeScript (strict) and Tailwind CSS v4. There is no backend: content comes from typed data files, and the form validates and simulates submission in the browser.

## Getting started

Requires Node.js 20.19+ (or 22.13+).

```bash
npm install      # install dependencies
npm run dev      # start the dev server on http://localhost:3000
npm run build    # production build (also type-checks)
npm run start    # serve the production build
npm run lint     # ESLint (next/core-web-vitals + TypeScript rules)
```

Optional: set `NEXT_PUBLIC_SITE_URL` (e.g. `https://surhires.vercel.app`) in Vercel so canonical URLs, Open Graph tags, the sitemap and robots.txt use the real domain. It falls back to `https://surhires.vercel.app`.

## Design system

All tokens are defined once in [`app/globals.css`](app/globals.css) under `@theme`. Tailwind's default palette is cleared (`--color-*: initial`), so only brand colours can be used and stray colours fail to compile into classes.

### Colours

| Token        | Value     | Used for                                                          |
| ------------ | --------- | ----------------------------------------------------------------- |
| `navy-900`   | `#0B1F3A` | Headings, footer, CTA banner, dark surfaces                       |
| `navy-700`   | `#1E3A5F` | Hover on navy, inner panels on navy                               |
| `navy-100`   | `#C7D2E0` | Secondary text on navy (10.8:1)                                   |
| `teal-700`   | `#0F766E` | Accent text, links, primary button background (white text 5.5:1)  |
| `teal-800`   | `#115E59` | Hover state of primary buttons                                    |
| `teal-500`   | `#14B8A6` | Decorative accents, icons, progress bars (navy text only, 6.6:1)  |
| `teal-50`    | `#F0FDFA` | Tinted section backgrounds                                        |
| `warm-white` | `#FAF8F4` | Page background                                                   |
| `ink`        | `#1F2937` | Body text (13.8:1 on warm-white)                                  |
| `muted`      | `#475569` | Secondary text (7.1:1 on warm-white, 7.3:1 on teal-50)            |
| `border`     | `#E5E1D8` | Dividers and card borders                                         |
| `danger`     | `#B91C1C` | Form error text and borders (6.5:1 on white)                      |

**Why these colours:** deep navy conveys trust, teal gives an energetic accent, and warm white keeps the site friendly and less clinical. Teal is the only accent colour.

Every text/background pair was checked against WCAG AA (4.5:1). The lowest body-text pair is `teal-700` on `warm-white` at 5.16:1. `navy-100`, `teal-800` and `danger` were added to the brief's palette to cover text on navy, button hover and form errors without breaking contrast.

### Typography

- **Plus Jakarta Sans** for headings: geometric and confident, with a recognisable character at large sizes.
- **Inter** for body text: highly legible at small sizes and in form fields.

Both load through `next/font/google` (self-hosted, `display: "swap"`).

The type scale is defined as tokens. Headings use `clamp()`, so a single class scales smoothly from 360px to 1440px:

| Class          | Size                                           |
| -------------- | ---------------------------------------------- |
| `text-display` | 36px → 60px (hero h1)                          |
| `text-h1`      | 32px → 48px (page h1)                          |
| `text-h2`      | 26px → 36px (section headings)                 |
| `text-h3`      | 20px (cards, plans)                            |
| `text-body-lg` | 18px (intros, quotes)                          |
| `text-body`    | 16px (default)                                 |
| `text-small`   | 14px (labels, meta, badges)                    |

### Spacing and layout

- Every page section uses `py-16 md:py-24` through the `Section` component.
- All content sits in `Container`: `max-w-7xl` with `px-4 sm:px-6 lg:px-8` gutters.
- The layout is mobile-first and was checked at 360, 768, 1024 and 1440px with no horizontal scroll.

## Folder structure

```
app/
  layout.tsx            Fonts, skip link, Navbar, Footer, default metadata
  page.tsx              Home (+ Organization JSON-LD)
  jobs/page.tsx         Jobs listing
  employers/page.tsx    Employers: hero, pricing, post-a-job form
  not-found.tsx         Branded 404
  opengraph-image.tsx   Generated 1200×630 share image
  sitemap.ts, robots.ts, icon.svg
components/
  layout/   Navbar, MobileMenu, Footer, Logo, SocialIcons
  ui/       Button/ButtonLink, Card (cardClasses), Section, Container, Badge,
            Accordion, Field, Input/Textarea, Select
  home/     Hero, HowItWorks, FeaturedRoles, LogoStrip, Testimonials, Faq, CtaBanner
  jobs/     JobBoard (filter state), JobFilters, JobCard, EmptyState
  employers/ PricingTable, PostJobForm
lib/
  data/     jobs, plans, faqs, testimonials, nav, companies, home: all copy lives here
  types.ts  Shared content types
  site.ts   Site config + pageMetadata() helper
  format.ts Date formatting
  cn.ts     Tiny class-name joiner
public/images/  Local copy of the Unsplash hero photo
```

Components are **Server Components by default**. Only five files use `"use client"`, because they need state or browser APIs:

- `Navbar`: active link via `usePathname`
- `MobileMenu`
- `Accordion`
- `JobBoard`
- `PostJobForm`

## Assumptions

- **Fictional companies.** All employers (Ledgerleaf, Kitebox Logistics, Orbitmart, Tidepool Health, Greenfold Foods, Brightnest Learning), people and statistics are invented. The logo strip uses styled text wordmarks, not real logos.
- **INR salaries.**
  - Full-time and part-time roles show annual CTC in lakhs (₹18L – ₹26L per year).
  - Contract roles show monthly rates.
  - Internships show monthly stipends.
  - Plan prices exclude 18% GST.
- **"Apply" opens a pre-filled email** (`mailto:`) to a placeholder inbox, since there is no backend or job-detail page.
- **The post-a-job form is simulated.** It validates in the browser, waits 1.2 seconds, then shows a success message. Nothing is sent anywhere.
- **Placeholder links.** The social icons and "Privacy policy" link to `#`. "Contact us" uses a placeholder `mailto:`.
- **Social icons are simple hand-drawn SVGs**, because lucide-react v1 no longer ships brand icons.
- **The footer year** is computed in a cached Server Component (`"use cache"` + `cacheLife("days")`). Under Next 16's Cache Components, `new Date()` must run inside a cached scope to keep pages static.
- **Hero photo.** The Employers photo comes from Unsplash (photo ID `1521737604893-d14cc237f11d`, Unsplash License). It is stored locally and statically imported, so `next/image` knows its size and generates a blur placeholder. This also avoids image-optimizer timeouts on the remote fetch, so `images.remotePatterns` isn't needed.
- **Filters are not synced to the URL.** I kept that optional polish out to keep the jobs page simple (see "With more time").
- **Dark-mode bonus skipped.** I chose not to add the optional bonus, to protect accessibility and Lighthouse scores.

## Accessibility

- **Structure**
  - Semantic landmarks: `header`, `nav` (labelled), `main`, `section` (labelled by its heading), `footer`.
  - A skip-to-content link is the first focusable element.
  - Exactly one `h1` per page, and headings never skip a level.
- **Navigation**
  - Active links use `aria-current="page"`.
- **Mobile menu**
  - The toggle button has `aria-expanded` and `aria-controls`.
  - Opening the menu moves focus to the first link, and Tab is trapped inside the menu.
  - Escape closes it and returns focus to the button.
  - It closes on route change and on resize to desktop, and locks body scroll while open.
- **FAQ accordion**
  - Native `<button>`s inside `h3`s, so Enter and Space work.
  - Each button has `aria-expanded` and `aria-controls`; each panel is a `role="region"` labelled by its button.
- **Job filters**
  - Every control is labelled, and the form has `role="search"`.
  - The results count is announced with `aria-live="polite"`.
  - "Clear filters" moves focus back to the search field, because the clicked button disables or disappears.
- **Post-a-job form**
  - Every field has a real `<label>`, plus `aria-required`.
  - Hints and errors are linked with `aria-describedby`, and invalid fields get `aria-invalid`.
  - Errors appear after the first submit and then update live.
  - Focus moves to the first invalid field.
  - The submit button is disabled while submitting.
  - The success heading receives focus.
- **Interaction states and targets**
  - Every button, link and input has hover, `focus-visible` (2px ring, white on navy surfaces), active and disabled states.
  - Touch targets are at least 44px (`min-h-11`).
- **Motion**
  - Animations use `motion-safe:`, and a global `prefers-reduced-motion: reduce` rule disables transitions.
  - Smooth scrolling only runs when motion is allowed.
- **Images**
  - Decorative SVGs and icons are `aria-hidden`; the hero mockup is hidden from assistive tech.
  - The photo has descriptive alt text.

## SEO

- **Metadata in the root layout:**
  - `metadataBase`.
  - A title template (`%s | Surhires`) with a default title.
  - Default description.
  - Open Graph tags (type, site name, `en_IN` locale).
  - A Twitter `summary_large_image` card.
- **Per-page metadata:** each page has a unique title, description and canonical URL through `pageMetadata()` in `lib/site.ts`. Metadata merges shallowly, so the helper repeats the full Open Graph object, including the share image.
- **Generated files:**
  - A generated OG image (`app/opengraph-image.tsx`).
  - An SVG favicon.
  - `sitemap.xml` and `robots.txt`.
- **Structured data:** Organization JSON-LD on Home.
- **Link text:** descriptive throughout, never "click here". Icon-only links have `aria-label`s.

## Performance

- Every route is prerendered as static HTML.
- Client JavaScript is limited to the five interactive components.
- No animation library is used; the hero float is a CSS keyframe.
- Fonts are self-hosted with `next/font`.
- `next/image` is used with `sizes`, a blur placeholder, and `preload` on the above-the-fold Employers photo. `preload` replaces the deprecated `priority` prop in Next 16.
- `experimental.inlineCss` inlines Tailwind's small stylesheet to remove a render-blocking request.
- CLS is 0 on every page.

## Lighthouse

Local production build (`npm run build && npm run start`), Lighthouse 12, mobile preset:

| Page       | Performance | Accessibility | Best practices | SEO |
| ---------- | ----------- | ------------- | -------------- | --- |
| Home       | 88          | 100           | 100            | 100 |
| Jobs       | 91          | 100           | 100            | 100 |
| Employers  | 88          | 100           | 100            | 100 |

The remaining LCP cost is the web-font swap repainting the hero paragraph. `display: "optional"` would remove it, but the brief asks for `swap`.

_Screenshot of the deployed site's Lighthouse report: add here after deploying._

<!-- ![Lighthouse report](docs/lighthouse.png) -->

## With more time

- **Real data.** Fetch jobs from an API or a headless CMS so content editors can change copy without a deploy.
- **Job pages.** Add a job detail page per role (`/jobs/[id]`) with `JobPosting` JSON-LD and a real application flow.
- **Shareable filters.** Sync filters with URL search params, plus pagination or "load more".
- **Tests.** Unit tests for the filter and validation logic, Playwright tests for the menu, accordion and form, and axe checks in CI.
- **Form backend.** A server action with spam protection.
- **Internationalisation.** Hindi and other Indian languages.
- **Polish.** Richer, still reduced-motion-safe animation, and a contrast-checked dark theme.
