# Chicken Fortress Product Site — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a bilingual (EN/VI) product & sales site for The Chicken Fortress in the `chicken-ads` repo by porting the gordon design system and replacing content with Web Info V3, dropping all investment content.

**Architecture:** Next.js 16 App Router static export. Port gordon's tokens/fonts/motion/i18n verbatim; reuse most sections; add 4 new sections (What You Get, Technical Specs accordion, Gallery, Pre-Order); replace FundingCTA, drop MarketOpportunity. All copy centralized in `landingCopy.ts`. Real client photos optimized via a sharp script.

**Tech Stack:** Next.js 16.2.9, React 19, Tailwind v4, GSAP + ScrollTrigger, Lenis, lucide-react, react-country-flag, sharp (build-time image optimization).

**Reference (read-only, already cloned):** `C:\Users\admin\Desktop\chicken\_gordon_ref` — the source design. **Companion spec:** `docs/superpowers/specs/2026-06-21-chicken-fortress-product-site-design.md` (full content/section detail; referenced below instead of duplicated).

**Verification model:** No unit-test framework exists for this static UI. Each task is verified by `npm run lint` + `npx tsc --noEmit` where relevant, and the whole site by `npm run build` (static export) + manual checks. Commit after each green task.

---

## File Structure

| Path | Responsibility |
|---|---|
| `next.config.ts` | Enable static export (`output:"export"`, `trailingSlash`, `images.unoptimized`) |
| `app/globals.css` | Tailwind import + Material tokens + grass texture (from gordon) |
| `app/layout.tsx` | Fonts (Be Vietnam Pro/Inter), metadata, Material Symbols link, mount ScrollEffects |
| `app/page.tsx` | Client redirect `/` → `/en` |
| `app/en/page.tsx`, `app/vi/page.tsx` | Render `<LandingPage locale=… />` |
| `app/_components/ScrollEffects.tsx` | GSAP+Lenis scroll reveals (from gordon, +new section types) |
| `app/(landing)/content/landingCopy.ts` | All bilingual copy (V3 content) |
| `app/(landing)/_components/LandingPage.tsx` | Section composition |
| `app/(landing)/_components/layout/TopNav.tsx`, `Footer.tsx` | Nav + footer (Pre-Order, new links) |
| `app/(landing)/_components/ui/LandingIcon.tsx` | lucide icon wrapper (+ plus/minus/mail) |
| `app/(landing)/_components/sections/*.tsx` | 13 section components |
| `scripts/optimize-images.mjs` | Resize/compress raw photos → `public/images/`, delete originals |
| `public/brand/{logo.png,favicon.png}`, `public/files/*.pdf` | Brand assets from gordon |

---

## Task 1: Scaffold — deps, config, tokens, fonts, motion, routing shell

**Files:**
- Modify: `package.json` (deps), `next.config.ts`, `app/globals.css`, `app/layout.tsx`, `app/page.tsx`
- Create: `app/en/page.tsx`, `app/vi/page.tsx`, `app/_components/ScrollEffects.tsx`, `app/(landing)/_components/LandingPage.tsx`
- Delete: default CNA boilerplate in `app/page.tsx`, unused `public/*.svg`

- [ ] **Step 1: Install runtime deps**

Run: `npm install gsap lenis lucide-react react-country-flag`
Run: `npm install -D sharp`
Expected: added to `package.json`, no peer-dep errors.

- [ ] **Step 2: Read the Next.js docs for changed APIs** (per `AGENTS.md`)

Check `node_modules/next/dist/docs/` for `app-router`, `static-export`, `next-config`, and `font` topics before editing config/routing. Note any deltas from gordon's usage (gordon is 16.2.2, this is 16.2.9).

- [ ] **Step 3: Enable static export**

`next.config.ts`:
```ts
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
```

- [ ] **Step 4: Copy design tokens + texture**

Copy `_gordon_ref/app/globals.css` → `app/globals.css` verbatim (the `@theme inline` token block, `.landing-grass-bg`, body/font rules).

- [ ] **Step 5: Copy ScrollEffects**

Copy `_gordon_ref/app/_components/ScrollEffects.tsx` → `app/_components/ScrollEffects.tsx` verbatim. (New section animation types added in Task 9/10/12 reuse existing `features`/`funding`/`value` types, so no edit needed yet.)

- [ ] **Step 6: layout.tsx (fonts + metadata + ScrollEffects)**

Adapt `_gordon_ref/app/layout.tsx`: keep Be_Vietnam_Pro/Inter font setup, Material Symbols `<link>`, `<ScrollEffects/>`. Change `metadata.title` → `"The Chicken Fortress | Integrated Poultry–Vermiculture System"`, description to a product one-liner, icon `/brand/favicon.png`.

- [ ] **Step 7: Routing shell**

- `app/page.tsx`: copy gordon's client redirect to `/en`.
- `app/en/page.tsx`: `export default () => <LandingPage locale="en" />;`
- `app/vi/page.tsx`: same with `locale="vi"`.
- `app/(landing)/_components/LandingPage.tsx`: create with the section imports/order from spec §3 (sections stubbed as empty exports until built — or build incrementally; final wiring in Task 12). For now import only `TopNav`/`Footer` + a placeholder `<main/>` so it compiles.

- [ ] **Step 8: Bring brand assets**

Copy `_gordon_ref/public/brand/{logo.png,favicon.png}` → `public/brand/`, and `_gordon_ref/public/files/Chicken-Coop-Full-Product-Details.pdf` → `public/files/`. Delete CNA `public/*.svg` (file/globe/next/vercel/window).

- [ ] **Step 9: Verify + commit**

Run: `npx tsc --noEmit` and `npm run lint`
Expected: pass (LandingPage may warn about unused stubs — acceptable until Task 12).
```bash
git add -A
git commit -m "feat: scaffold static-export Next.js with gordon design tokens, fonts, motion, i18n routing"
```

---

## Task 2: Optimize real product photos

**Files:**
- Create: `scripts/optimize-images.mjs`

- [ ] **Step 1: Write the optimization script**

```js
// scripts/optimize-images.mjs
// Resize + recompress raw client photos into public/images/, then delete the originals.
import sharp from "sharp";
import { readFile, unlink, mkdir } from "node:fs/promises";
import path from "node:path";

const PUBLIC = path.join(process.cwd(), "public");
const OUT = path.join(PUBLIC, "images");

const MAP = {
  "IMG_20260620_170105_630.jpg": "exterior-side.jpg",
  "IMG_20260620_171354_262.jpg": "interior-wide.jpg",
  "IMG_20260620_170122_322.jpg": "exterior-door.jpg",
  "IMG_20260620_171149_575.jpg": "exterior-id.jpg",
  "IMG_20260620_171218_390.jpg": "nesting-rollaway.jpg",
  "IMG_20260620_171234_090.jpg": "interior-framing.jpg",
  "IMG_20260620_171243_542.jpg": "floor-drinkers.jpg",
  "IMG_20260620_170239_687.jpg": "vermiculture-pit.jpg",
  "IMG_20260620_170243_119.jpg": "feed-hopper.jpg",
};

await mkdir(OUT, { recursive: true });
for (const [src, dest] of Object.entries(MAP)) {
  const input = await readFile(path.join(PUBLIC, src));
  await sharp(input)
    .rotate() // honor EXIF orientation
    .resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(OUT, dest));
  await unlink(path.join(PUBLIC, src));
  console.log(`✓ ${src} -> images/${dest}`);
}
```

- [ ] **Step 2: Run it**

Run: `node scripts/optimize-images.mjs`
Expected: 9 lines `✓ …`, new files in `public/images/`, raw `IMG_*.jpg` removed from `public/`.

- [ ] **Step 3: Verify sizes**

Run: `du -h public/images/*` (or `ls -l`)
Expected: every optimized file < ~500 KB; no `public/IMG_*` remain.

- [ ] **Step 4: Commit**
```bash
git add scripts/optimize-images.mjs public/images
git commit -m "build: add image optimizer and optimized product photos"
```
> Note: the raw originals are removed (not committed). Keep a local backup outside the repo if the client may want full-res later.

---

## Task 3: Content model `landingCopy.ts`

**Files:**
- Create: `app/(landing)/content/landingCopy.ts`

- [ ] **Step 1: Author the bilingual copy object**

Start from `_gordon_ref/app/(landing)/content/landingCopy.ts`. Keep the `Locale`/`Bi`/`t()` helpers and the `brand`, `nav`, `company`, `valueProp`, `hero`, `trust`, `product`, `how`, `features`, `roi`(→economics), `financialModel` keys. Apply these changes:

- **nav:** remove `investment`, `market`, `investNow`; add `specs`, `gallery`, `preOrder` (EN/VI). Keep overview/products/how/features/economics.
- **hero:** `ctaInvest` → reuse as Pre-Order label; headline/subhead from V3 (product framing; tagline "Zero Waste. Zero Odor. Maximum Profit.").
- **financialModel.rows + note:** update to V3 numbers (per spec §7): add hen purchase $10, total revenue ~$62/hen, net profit ~$42/hen, ~$4,200/unit; drop "investment write-up" wording.
- **roi → economics:** subtitle "what the farmer earns (per hen / per unit)".
- **Remove** `funding` and `market` keys entirely.
- **Add** new keys (full EN below; author VI alongside, client reviews terminology):
  - `included`: `{ title, intro, items: Bi[] }` — 11 items from spec §4.
  - `specs`: `{ title, intro, groups: { title: Bi, rows: { label: Bi, value: Bi }[] }[] }` — 9 groups from spec §5.
  - `gallery`: `{ title, items: { src: string, alt: Bi }[] }` — 7 entries mapping to `public/images/*` per spec §8 table (gallery rows).
  - `preOrder`: `{ title, subtitle, bonus, emailLabel, phoneLabel, zaloLabel, email, phone, zalo, mailSubject, cta, downloadPdf }`. Bonus = "Pre-Order customers receive infrared-reflective roof coating at no additional cost." Contact `email/phone/zalo` = **placeholders** (`preorder@chickenfortress.example`, `+84 ___ ___ ___`, `zalo: ___`) flagged with a `// TODO(client): real contact details` comment.
- **footer:** links → overview/product/features/specs/gallery/preorder; drop investment/market; keep tagline/copyright.

- [ ] **Step 2: Verify types**

Run: `npx tsc --noEmit`
Expected: pass (object is `as const`; ensure `Bi` shape on every leaf).

- [ ] **Step 3: Commit**
```bash
git add "app/(landing)/content/landingCopy.ts"
git commit -m "feat: bilingual content model from Web Info V3 (no investment copy)"
```

---

## Task 4: Icon wrapper + layout (TopNav, Footer)

**Files:**
- Create: `app/(landing)/_components/ui/LandingIcon.tsx`, `layout/TopNav.tsx`, `layout/Footer.tsx`

- [ ] **Step 1: LandingIcon**

Copy gordon's `LandingIcon.tsx`; add cases importing `Plus`, `Minus`, `Mail`, `Images` from lucide-react → names `"plus"`, `"minus"`, `"mail"`, `"gallery"`. Keep existing mappings.

- [ ] **Step 2: TopNav**

Copy gordon's `TopNav.tsx`; edit `navItems` to: overview, products, how, features, **specs**, economics (drop investment/market). Replace the desktop + mobile **"Invest Now"** button (href `#investment`) with **Pre-Order** (`landingCopy.nav.preOrder`, href `/${locale}#preorder`). Keep flag toggle, scroll-spy, mobile panel logic unchanged.

- [ ] **Step 3: Footer**

Copy gordon's `Footer.tsx`; edit quick-links to overview/product/features/specs/gallery/preorder using `landingCopy.footer.links`. Keep logo, language toggle, copyright.

- [ ] **Step 4: Verify + commit**

Run: `npx tsc --noEmit && npm run lint`
```bash
git add "app/(landing)/_components"
git commit -m "feat: nav + footer with Pre-Order CTA and product-only links"
```

---

## Task 5: Carried-over sections (Hero, TrustStrip, CompanyOverview, ProductOverview, UniqueValue, HowItWorks, FeaturesGrid, ProfitMetrics, FinancialModel)

**Files:**
- Create each in `app/(landing)/_components/sections/`

- [ ] **Step 1: Copy + adapt each from gordon**

For each, copy the gordon component and apply changes:
- `Hero.tsx`: image `src="/images/exterior-side.jpg"`; secondary CTA → Pre-Order (`href="#preorder"`, `landingCopy.hero.ctaInvest` label). Keep `data-animate="hero"`.
- `TrustStrip.tsx`: unchanged (reads `landingCopy.trust`).
- `CompanyOverview.tsx`: unchanged structurally (reads `company`).
- `ProductOverview.tsx`: image `src="/images/interior-wide.jpg"`; keep PDF download + 2 stat cards.
- `UniqueValue.tsx`: unchanged (reads `valueProp`).
- `HowItWorks.tsx`: unchanged (reads `how`).
- `FeaturesGrid.tsx`: unchanged (reads `features`).
- `ProfitMetrics.tsx`: copy gordon `ROIInvestment.tsx`, rename component → `ProfitMetrics`, **change `id="investment"` → `id="economics"`**, keep `data-animate="economics"`? (gordon used `data-animate="investment"` — keep that type, it exists in ScrollEffects). Reads `landingCopy.economics` (renamed `roi`).
- `FinancialModel.tsx`: copy gordon; **change `id="economics"` → `id="model"`**; reads updated `financialModel`.

- [ ] **Step 2: Verify + commit**

Run: `npx tsc --noEmit && npm run lint`
```bash
git add "app/(landing)/_components/sections"
git commit -m "feat: port carried-over sections with real photos and renamed anchors"
```

---

## Task 6: New section — WhatsIncluded

**Files:**
- Create: `app/(landing)/_components/sections/WhatsIncluded.tsx`

- [ ] **Step 1: Implement**

```tsx
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

export function WhatsIncluded({ locale }: { locale: Locale }) {
  return (
    <section id="included" data-animate="value" className="bg-surface-container py-16 sm:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-3">
            {t(locale, landingCopy.included.title)}
          </h2>
          <p data-anim="subtitle" className="text-on-surface-variant max-w-2xl mx-auto">
            {t(locale, landingCopy.included.intro)}
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
          {landingCopy.included.items.map((it) => (
            <li key={t(locale, it)} data-anim="card" className="flex gap-3 items-start">
              <LandingIcon name="check_circle" size={22} strokeWidth={2.5} className="text-primary shrink-0 mt-0.5" />
              <span className="text-on-surface">{t(locale, it)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify + commit**

Run: `npx tsc --noEmit`
```bash
git add "app/(landing)/_components/sections/WhatsIncluded.tsx"
git commit -m "feat: What You Get section (11 inclusions)"
```

---

## Task 7: New section — TechnicalSpecs (accordion)

**Files:**
- Create: `app/(landing)/_components/sections/TechnicalSpecs.tsx`

- [ ] **Step 1: Implement (client component, accordion)**

```tsx
"use client";
import { useState } from "react";
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

export function TechnicalSpecs({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <section id="specs" data-animate="features" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-10 sm:mb-12">
        <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-3">
          {t(locale, landingCopy.specs.title)}
        </h2>
        <p data-anim="subtitle" className="text-on-surface-variant max-w-2xl mx-auto">
          {t(locale, landingCopy.specs.intro)}
        </p>
      </div>
      <div className="space-y-3">
        {landingCopy.specs.groups.map((g, i) => {
          const isOpen = open === i;
          return (
            <div key={i} data-anim="card" className="bg-surface-container-lowest border border-outline-variant/15 rounded-xl overflow-hidden">
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-black/[0.02] transition-colors"
              >
                <span className="font-black text-primary">{t(locale, g.title)}</span>
                <LandingIcon name={isOpen ? "minus" : "plus"} size={20} className="text-primary shrink-0" />
              </button>
              {isOpen ? (
                <div className="px-5 pb-5">
                  {g.rows.map((r, j) => (
                    <div key={j} className="flex items-start justify-between gap-6 py-3 border-b border-outline-variant/20 last:border-0">
                      <p className="text-on-surface-variant">{t(locale, r.label)}</p>
                      <p className="font-bold text-primary text-right">{t(locale, r.value)}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify + commit**

Run: `npx tsc --noEmit`
```bash
git add "app/(landing)/_components/sections/TechnicalSpecs.tsx"
git commit -m "feat: Technical Specifications accordion (9 groups)"
```

---

## Task 8: New section — Gallery

**Files:**
- Create: `app/(landing)/_components/sections/Gallery.tsx`

- [ ] **Step 1: Implement**

```tsx
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";

export function Gallery({ locale }: { locale: Locale }) {
  return (
    <section id="gallery" data-animate="features" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h2 data-anim="title" className="text-3xl sm:text-4xl font-black text-primary mb-10 sm:mb-12 text-center">
        {t(locale, landingCopy.gallery.title)}
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {landingCopy.gallery.items.map((img) => (
          <figure key={img.src} data-anim="card" className="group rounded-xl overflow-hidden shadow-sm border border-outline-variant/10 bg-surface-container-lowest">
            <img src={img.src} alt={t(locale, img.alt)} loading="lazy" className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
            <figcaption className="p-3 text-sm text-on-surface-variant">{t(locale, img.alt)}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify + commit**

Run: `npx tsc --noEmit`
```bash
git add "app/(landing)/_components/sections/Gallery.tsx"
git commit -m "feat: Gallery section with real build photos"
```

---

## Task 9: New section — PreOrderCTA

**Files:**
- Create: `app/(landing)/_components/sections/PreOrderCTA.tsx`

- [ ] **Step 1: Implement (adapts FundingCTA styling)**

```tsx
import type { Locale } from "../../content/landingCopy";
import { landingCopy, t } from "../../content/landingCopy";
import { LandingIcon } from "../ui/LandingIcon";

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l-2 border-primary-fixed/30 pl-5">
      <p className="text-xs font-bold uppercase tracking-widest text-primary-fixed-dim">{label}</p>
      <p className="text-lg font-bold break-words">{value}</p>
    </div>
  );
}

export function PreOrderCTA({ locale }: { locale: Locale }) {
  const c = landingCopy.preOrder;
  const mailto = `mailto:${c.email}?subject=${encodeURIComponent(t(locale, c.mailSubject))}`;
  return (
    <section id="preorder" data-animate="funding" className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      <div className="bg-primary text-white p-6 sm:p-10 lg:p-16 rounded-[2rem] space-y-7">
        <h2 data-anim="title" className="text-3xl sm:text-4xl lg:text-5xl font-black">{t(locale, c.title)}</h2>
        <p data-anim="body" className="text-primary-fixed/90 font-semibold max-w-3xl mx-auto leading-relaxed">{t(locale, c.subtitle)}</p>
        <div data-anim="card" className="inline-flex items-center gap-2 bg-tertiary-fixed-dim text-primary px-5 py-2.5 rounded-full font-bold">
          <LandingIcon name="check_circle" size={18} className="text-primary" />
          {t(locale, c.bonus)}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-6 text-left max-w-3xl mx-auto pt-2">
          <ContactItem label={t(locale, c.emailLabel)} value={c.email} />
          <ContactItem label={t(locale, c.phoneLabel)} value={c.phone} />
          <ContactItem label={t(locale, c.zaloLabel)} value={c.zalo} />
        </div>
        <div className="pt-6 flex flex-wrap justify-center gap-4">
          <a href={mailto} data-anim="cta" className="inline-flex items-center gap-2 bg-tertiary-fixed-dim text-primary px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-black text-lg hover:scale-105 transition-transform">
            {t(locale, c.cta)}
            <LandingIcon name="mail" size={20} className="text-primary" />
          </a>
          <a href="/files/Chicken-Coop-Full-Product-Details.pdf" download className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 sm:py-5 rounded-xl font-bold hover:bg-white/20 transition-colors">
            {t(locale, c.downloadPdf)}
            <LandingIcon name="download" size={20} className="text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Verify + commit**

Run: `npx tsc --noEmit`
```bash
git add "app/(landing)/_components/sections/PreOrderCTA.tsx"
git commit -m "feat: Pre-Order/Contact section (mailto + bonus, replaces FundingCTA)"
```

---

## Task 10: Assemble LandingPage + final build/verify

**Files:**
- Modify: `app/(landing)/_components/LandingPage.tsx`

- [ ] **Step 1: Wire all sections in order (spec §3)**

```tsx
// imports for all 13 sections + TopNav/Footer
export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <div className="text-on-surface bg-background landing-grass-bg min-h-screen">
      <TopNav locale={locale} />
      <main className="pt-20 sm:pt-24 overflow-x-hidden">
        <Hero locale={locale} />
        <TrustStrip locale={locale} />
        <CompanyOverview locale={locale} />
        <ProductOverview locale={locale} />
        <UniqueValue locale={locale} />
        <HowItWorks locale={locale} />
        <WhatsIncluded locale={locale} />
        <FeaturesGrid locale={locale} />
        <TechnicalSpecs locale={locale} />
        <Gallery locale={locale} />
        <ProfitMetrics locale={locale} />
        <FinancialModel locale={locale} />
        <PreOrderCTA locale={locale} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
```

- [ ] **Step 2: Static build**

Run: `npm run build`
Expected: success; `out/` contains `index.html`, `en/index.html`, `vi/index.html` and `images/`.

- [ ] **Step 3: Manual verification (serve the export)**

Run: `npx serve out` (or `npm run start`), open `/en/` and `/vi/`. Confirm per spec §9:
- All sections render with real photos; Gallery lazy-loads.
- Nav anchors scroll incl. `#specs`, `#included`, `#gallery`, `#preorder`; scroll-spy highlights.
- Language toggle works both directions; accordion opens/closes + keyboard (Tab/Enter); mailto opens.
- Mobile menu opens/closes; reduced-motion (DevTools emulate) disables animations.

- [ ] **Step 4: No-investment-copy check**

Run: `grep -ri -E "invest|funding|investor|become an investor" app | grep -v node_modules`
Expected: no matches (or only benign). Fix any stragglers.

- [ ] **Step 5: Size check**

Run: `find public out -type f -size +500k`
Expected: no oversized images shipped.

- [ ] **Step 6: Commit**
```bash
git add -A
git commit -m "feat: assemble Chicken Fortress product landing page (EN/VI static export)"
```

---

## Self-Review (completed by author)

**Spec coverage:** §2 architecture → Task 1; §3 section order → Tasks 4–10; §4 What You Get → Task 6; §5 Technical Specs → Task 7; §6 Pre-Order → Task 9; §7 content model → Task 3; §8 assets/optimization/Gallery → Tasks 2, 8; §9 verification → Task 10. No gaps.

**Placeholder scan:** Only intentional client-data placeholders (contact details) flagged with `TODO(client)`; all component code is complete inline; ported components specify exact source + exact edits. OK.

**Type consistency:** `landingCopy` keys referenced by components (`included.items`, `specs.groups[].rows[].{label,value}`, `gallery.items[].{src,alt}`, `preOrder.*`, `economics`, `financialModel`) are all defined in Task 3. Icon names `plus/minus/mail` added in Task 4 before use in Tasks 7/9. Anchors `economics`(ProfitMetrics)/`model`(FinancialModel) consistent with nav. OK.

## Open items (client)
- Real email / phone / Zalo (replace `TODO(client)` placeholders in `landingCopy.preOrder`).
- Updated V3 PDF if the downloadable spec sheet should reflect new details.
- Review VI technical terminology after first draft.
