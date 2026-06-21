# Chicken Fortress — Product / Sales Site (Design Spec)

**Date:** 2026-06-21
**Status:** Approved design, pending spec review
**Repo:** `chicken-ads` (Next.js 16.2.9, React 19, Tailwind v4)

## 1. Goal

A bilingual (EN/VI) product & sales information site for **The Chicken Fortress**,
reusing the exact design pattern of the existing gordon site
(`github.com/luongvietan/gordon`, live at kimvgordon.com). This build drops all
**investment / fundraising** content and presents **product, technical, and buyer-profit**
information only, sourced from `Web Info V3.txt`. Primary call-to-action is **Pre-Order**.

Non-goals: no investor pitch, no fundraising ask, no backend/CMS, no e-commerce checkout.

## 2. Architecture

Port gordon's component architecture into `chicken-ads` and replace content.

- **Framework:** Next.js 16 App Router, **static export** (`output: "export"`, `trailingSlash: true`, `images.unoptimized: true`).
- **Styling:** Tailwind v4 + Material-style color tokens copied verbatim from gordon `globals.css`
  (primary `#012d1d`, background `#fbf9f6`, accent `--color-tertiary-fixed-dim #ffba27`),
  plus the `.landing-grass-bg` SVG texture.
- **Fonts:** `Be_Vietnam_Pro` (`--font-headline`) + `Inter` (`--font-body`) via `next/font/google`,
  subsets `["latin","vietnamese"]`. Material Symbols stylesheet link as in gordon.
- **Motion:** `ScrollEffects.tsx` (GSAP + ScrollTrigger + Lenis) copied as-is; sections use
  `data-animate` / `data-anim` hooks. Respects `prefers-reduced-motion`.
- **Icons:** `lucide-react` via `LandingIcon` wrapper (extend the `switch` with any new icon names).
- **i18n:** routes `/en` and `/vi`; root `/` client-redirects to `/en`. Country-flag toggle
  (`react-country-flag`) in TopNav + Footer. All copy centralized in
  `app/(landing)/content/landingCopy.ts` as `{ en, vi }` pairs.
- **New deps to add to `chicken-ads`:** `gsap`, `lenis`, `lucide-react`, `react-country-flag`.
- **Compliance:** per `AGENTS.md`, read `node_modules/next/dist/docs/` for any changed Next.js
  API before writing routing/config code.

### File layout (target)
```
app/
  layout.tsx                         # fonts + metadata + ScrollEffects
  globals.css                        # tokens + grass texture (from gordon)
  page.tsx                           # redirect -> /en
  en/page.tsx                        # <LandingPage locale="en" />
  vi/page.tsx                        # <LandingPage locale="vi" />
  _components/ScrollEffects.tsx
  (landing)/
    content/landingCopy.ts           # all bilingual copy (V3 content)
    _components/
      LandingPage.tsx                # section composition
      layout/{TopNav,Footer}.tsx
      ui/LandingIcon.tsx
      sections/{Hero,TrustStrip,CompanyOverview,ProductOverview,UniqueValue,
                HowItWorks,WhatsIncluded,FeaturesGrid,TechnicalSpecs,
                ProfitMetrics,FinancialModel,PreOrderCTA}.tsx
public/
  brand/{logo.png,favicon.png}       # reused from gordon
  images/{hero.jpeg,product_detail.png}
  files/Chicken-Coop-Full-Product-Details.pdf
```

## 3. Section map & composition order

`LandingPage` renders, in order:

1. **TopNav** — logo + nav + flag toggle + **Pre-Order** button (was "Invest Now").
   Nav items: Overview · Product · How it works · Features · **Specs** · Economics.
2. **Hero** (`id=top`) — headline/subhead from V3; primary CTA "Explore Product" (→`#products`),
   secondary CTA **"Pre-Order"** (→`#preorder`). Reuses `hero.jpeg`.
3. **TrustStrip** — 4 badges: Zero Odor · 50% Feed Reduction · Circular Farming · Portable.
4. **CompanyOverview** (`id=overview`) — company/product intro.
5. **ProductOverview** (`id=products`) — "The 100-Hen Smart Container", PDF download, 2 stat cards.
6. **UniqueValue** — 4 value bullets (closed-loop vermiculture, feed savings, pasture, portable).
7. **HowItWorks** (`id=how`) — 4-step circular flow (waste → worms/flies → protein → pasture).
8. **WhatsIncluded** (`id=included`) — **NEW**. "What You Get" — 11 inclusion items, ✓-icon grid.
9. **FeaturesGrid** (`id=features`) — 6 "Engineering Excellence" cards.
10. **TechnicalSpecs** (`id=specs`) — **NEW**. Accordion of 9 spec groups (see §5).
11. **ProfitMetrics** (`id=economics`) — former ROIInvestment, reframed as **farmer earnings**
    (4 metrics, 28% ROI highlighted). NOTE: this section owns the `economics` anchor.
12. **FinancialModel** (`id=model`) — per-hen / per-unit math table (V3 numbers).
13. **PreOrderCTA** (`id=preorder`) — **NEW**, replaces FundingCTA (see §6).
14. **Footer** — logo, tagline, quick links (Overview · Product · Features · Specs · Economics · Pre-Order), language toggle, copyright.

**Removed from gordon:** `FundingCTA` (investment ask) and `MarketOpportunity`
("Global Demand for Clean Eggs" — market/investor pitch). Their `demand.png` asset is dropped.

> Anchor note: gordon used `economics` for FinancialModel and `investment` for ROI. Here ROI
> becomes `#economics` (the headline profit section) and the math table becomes `#model`.
> Nav "Economics" points to `#economics`.

## 4. New section — "What You Get" (`WhatsIncluded`)

Pattern: reuse the bordered card style of `UniqueValue` / a ✓-grid like `MarketOpportunity` bullets.
Layout: section heading + responsive grid (1 / 2 / 3 cols) of 11 items, each `check_circle` icon + label.
`data-animate="value"` (or "features") for staggered reveal.

Items (EN, VI to be authored):
1. 18 nesting compartments with roll-away egg collection (harvest from the maintenance room).
2. Overhead perches for up to 100 laying hens.
3. 55-gallon water drum with nipple drinkers.
4. Gravity-fed closed feed hopper and feeding line.
5. Removable slatted flooring over a food-grade epoxy-coated vermiculture pit.
6. Fully self-cleaning integrated vermiculture system (manure processed in 6 days).
7. Automatic electric chicken door — timed pasture access + night predator protection.
8. Large maintenance door for easy access to the supply/egg room.
9. 4 polycarbonate natural daylight openings.
10. Multiple high/low ventilation openings with louvers.
11. Secondary maintenance/supply room (gravity feeder, water system, egg collection tray).

## 5. New section — "Technical Specifications" (`TechnicalSpecs`, accordion)

A client component: 9 collapsible groups. Each open group renders rows in the
`label — value` style of `FinancialModel`'s `Row`. First group open by default; one or
many open allowed; keyboard-accessible (`button` headers, `aria-expanded`, chevron icon).
Intro line: "For farmers, builders, agricultural engineers, and compliance officers."

Groups & key rows (from V3; VI to be authored):

1. **Overall Dimensions & Capacity** — Footprint 6050 mm × 2430 mm (recycled 20 ft container base);
   Capacity 100 laying hens; Room 1 = living + nesting + vermiculture pit; Room 2 = maintenance/supply.
2. **Structural Framework & Materials** — Recycled 20 ft shipping container; internal pine framing
   50×100 mm & 100×100 mm; 30×60 mm steel box frame; PUR-board insulation + plastic-panel finish;
   food-grade epoxy pit coating; aluminum manure deflector + chick panels; 4 polycarbonate panels;
   louvered vents.
3. **Flooring & Vermiculture System** — Removable slatted flooring over full vermiculture zone;
   manure falls through slats; worms + native flies consume waste in ~6 days (95%+ vs composting);
   mature worms spill over as protein (~20% feed replacement); epoxy-coated, zero odor.
4. **Nesting & Egg Collection** — 18 compartments (300 mm); roll-away design; centralized tray in
   maintenance room; harvest without entering the living area; minimizes manure contact.
5. **Feeding System** — Gravity-fed closed hopper; feeding line along the full living area;
   low waste; refilled from maintenance room.
6. **Watering System** — 55-gallon (~208 L) drum on stand; supply pipe to nipple-drinker line;
   gravity / low-pressure delivery.
7. **Ventilation & Airflow** — High + low louvered openings; natural convection (hot air out high,
   fresh air in low); louvers reduce wind/drafts. *Pre-Order bonus: infrared-reflective roof coating
   at no extra cost.*
8. **Lighting & Animal Welfare** — 4 polycarbonate daylight openings; automatic electric door + ramp;
   large maintenance door; perches for 100 birds; daytime pasture / night predator protection;
   aluminum chick-protection panels.
9. **Maintenance & Operation** — Self-cleaning pit, minimal intervention; removable slats for deep
   clean; egg/feed/water serviced from maintenance room; low labor; tropical + temperate climates.

## 6. New section — "Pre-Order / Contact" (`PreOrderCTA`)

Replaces `FundingCTA`. Reuses FundingCTA's dark `bg-primary` rounded panel styling.
- Heading: "Pre-Order The Chicken Fortress" / "Đặt trước The Chicken Fortress".
- Pre-order bonus highlight chip: "Pre-Order customers receive infrared-reflective roof coating
  at no additional cost."
- Contact block: **email / phone / Zalo** (values are placeholders pending client input).
- Primary button = `mailto:` with prefilled subject ("Chicken Fortress Pre-Order Inquiry").
- No form submit (static export). Secondary: "Download full product details (PDF)".

## 7. Content model (`landingCopy.ts`)

Same shape as gordon (`{ en, vi }` pairs, `t(locale, …)` helper). Changes:
- Remove `funding`, `market` keys; remove `nav.investment`, `nav.market`, `nav.investNow` →
  add `nav.specs`, `nav.preOrder`.
- Update `financialModel.rows` + `note` to V3 numbers (add hen purchase $10, total revenue
  ~$62/hen, net profit ~$42/hen, ~$4,200/unit). Drop "investment write-up" wording from note.
- Reframe `roi` → `economics` subtitle to "what the farmer earns (per hen / per unit)".
- Add `included` (11 items), `specs` (9 groups), `preOrder` (heading, bonus, contact, cta) keys.
- VI translations authored for all new technical content; client to review terminology.

## 8. Assets

Reuse from gordon (same brand): `brand/logo.png`, `brand/favicon.png`, `images/hero.jpeg`,
`images/product_detail.png`, `files/Chicken-Coop-Full-Product-Details.pdf`. Drop `images/demand.png`.
`metadata.title` → "The Chicken Fortress | Integrated Poultry–Vermiculture System".

## 9. Verification

- `npm run build` succeeds with static export; `/`, `/en/`, `/vi/` generate.
- Manual: nav anchors scroll to sections (incl. new `#specs`, `#included`, `#preorder`);
  language toggle preserves page; accordion opens/closes + keyboard accessible;
  mailto opens; reduced-motion disables animations; mobile menu works.
- No investment/fundraising copy remains anywhere (grep "invest", "funding", "investor").

## 10. Open items (need client input)
- Real **email / phone / Zalo** for Pre-Order + Footer (placeholders until provided).
- Updated **V3 PDF** if the spec PDF should reflect new details (current PDF reused as-is).
- Confirm VI technical terminology after first draft.

## 11. Out of scope
- Backend, form processing, payment/checkout, CMS, analytics, SEO beyond basic metadata.
- New photography/renders beyond reused gordon assets.
