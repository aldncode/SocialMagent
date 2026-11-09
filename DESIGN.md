# Social Magent — Design System

The design language for **Social Magent** ([socialmagent.online](https://socialmagent.online)):
a premium, editorial, corporate look in the spirit of large professional-services
websites — confident, restrained and trustworthy — without copying any existing
company's identity.

**Everything visual is driven by `src/styles/tokens.css`.** Change colours, fonts,
spacing or motion there and the whole site follows. No other file hard-codes a brand
value.

---

## 1. Design principles

1. **Content first.** Large type and white space carry the design. No decorative
   gradients, glassmorphism, emoji, neon or stock "AI" imagery.
2. **Restrained.** One signature accent colour, used sparingly — primary buttons,
   links, focus rings and small overline details only.
3. **Editorial.** Serif headlines, sans UI, thin dividers, an insights-style card grid,
   photography-led (placeholder) heroes and a mega-menu for depth.
4. **Strict grid.** 12 columns, 24px gutters, an 8px spacing rhythm, and three
   container widths. Alignment is never accidental.
5. **Sharp, not bubbly.** Hairline 1px borders, radii of 0–4px, minimal or no shadows.
6. **Accessible by default.** WCAG AA contrast everywhere, visible focus rings, 44px
   touch targets, semantic landmarks, skip link, heading order, reduced-motion support.
7. **Fast and static.** No layout shift, self-hosted fonts, lazy-loading below the
   fold, and JavaScript only where a component truly needs it (mega-menu, mobile menu,
   tabs).

---

## 2. Colour palette

All ratios measured with the WCAG relative-luminance formula. Body text requires
4.5:1; large text and UI components require 3:1.

### Neutrals

| Token | Hex | Usage / contrast |
| --- | --- | --- |
| `--color-ink` | `#121216` | Primary text. **18.69:1** on white |
| `--color-white` | `#FFFFFF` | Page surface |
| `--color-off-white` | `#F7F7F8` | Alt section surface. ink on it: **17.45:1** |
| `--color-grey-50` | `#F7F7F8` | Same as off-white (named step) |
| `--color-grey-100` | `#EEEEF0` | Light fills. ink on it: **16.19:1** |
| `--color-grey-200` | `#E1E1E4` | Default hairline borders |
| `--color-grey-300` | `#C7C7CC` | Strong borders, portrait placeholders |
| `--color-grey-400` | `#9A9AA2` | **Decorative only on light** (2.79:1). On dark: **6.21:1** (OK for muted text) |
| `--color-grey-500` | `#6F6F78` | Captions on light: **4.98:1** |
| `--color-grey-600` | `#55555E` | Secondary text: **7.38:1** |
| `--color-grey-700` | `#3E3E46` | Borders on dark |
| `--color-grey-800` | `#2A2A31` | Dark card surfaces |
| `--color-grey-900` | `#1A1A1F` | Dark bands / footer. grey-100 on it: **14.96:1** |

### Signature accent — indigo-violet

Chosen to be confident and distinctive while staying corporate; deliberately **not
green** and not borrowed from any existing firm.

| Token | Hex | Usage / contrast |
| --- | --- | --- |
| `--color-accent-50` | `#F1F0FD` | Tinted surfaces (active chips, info notices) |
| `--color-accent-100` | `#E3E1FB` | Stronger tint. ink on it: **14.62:1** |
| `--color-accent-200` | `#C7C3F6` | Decorative borders |
| `--color-accent-300` | `#A5A0EE` | Accent on dark: **7.32:1** |
| `--color-accent-400` | `#8079E4` | Decorative on light |
| `--color-accent-500` | `#6259D8` | Hover on dark. White on it: **5.33:1** |
| `--color-accent-600` | `#4B43C4` | **Primary accent.** White on it: **7.24:1** |
| `--color-accent-700` | `#3C35A3` | Hover + link text on light: **9.42:1** |
| `--color-accent-800` | `#312C82` | Hero gradients. White on it: **11.58:1** |
| `--color-accent-900` | `#262263` | Deep accent. White on it: **14.08:1** |

### Feedback colours

| Token | Hex | On tint background |
| --- | --- | --- |
| `--color-success` / bg `#E9F5EE` | `#14663B` | **7.02:1** on white · **6.27:1** on tint |
| `--color-warning` / bg `#FBF1E0` | `#8A5300` | **6.33:1** on white · **5.65:1** on tint |
| `--color-error` / bg `#FBEAE9` | `#B3251E` | **6.56:1** on white · **5.64:1** on tint |
| `--color-error-strong` | `#C42B22` | White on it: **5.65:1** |

### Semantic aliases and dark surfaces

Components never use raw palette values directly — they use semantic aliases
(`--color-text`, `--color-text-muted`, `--color-border`, `--color-accent-text`, …).
Adding `data-surface="dark"` to any element re-points those aliases:

| Alias | Light | Dark |
| --- | --- | --- |
| `--color-bg` | `#FFFFFF` | `#1A1A1F` |
| `--color-text` | `#121216` (18.69:1) | `#EEEEF0` (14.96:1) |
| `--color-text-muted` | `#55555E` (7.38:1) | `#C7C7CC` |
| `--color-text-subtle` | `#6F6F78` (4.98:1) | `#9A9AA2` (6.21:1) |
| `--color-border` | `#E1E1E4` | `#3E3E46` |
| `--color-accent-text` | `#3C35A3` (9.42:1) | `#A5A0EE` (7.32:1) |
| `--color-focus` | `#4B43C4` | `#A5A0EE` |

---

## 3. Typography

**Two free, open-licence (SIL OFL) families, self-hosted via Fontsource — no
external font requests:**

- **IBM Plex Sans Variable** — all UI, body, labels, navigation. Precise and
  engineered: corporate without being generic.
- **Source Serif 4 Variable** — editorial headlines and pull quotes only. Gives
  headlines advisory-firm authority while the UI stays clean.

### Fluid type scale (`clamp()` min → max)

| Token | Range | Line height | Use |
| --- | --- | --- | --- |
| `--fs-display` | 48 → 76px | 1.05 | Hero statements |
| `--fs-h1` | 40 → 60px | 1.15 | Page titles |
| `--fs-h2` | 32 → 44px | 1.15 | Section titles |
| `--fs-h3` | 26 → 34px | 1.3 | Subsections |
| `--fs-h4` | 22 → 26px | 1.3 | Card headlines |
| `--fs-h5` | 18 → 20px | 1.3 | Small headlines (sans) |
| `--fs-h6` | 16px | 1.4 | Minor headings (sans) |
| `--fs-lead` | 20 → 24px | 1.5 | Intro paragraphs |
| `--fs-body` | 16px | 1.6 | Body copy |
| `--fs-small` | 14px | 1.55 | UI, secondary text |
| `--fs-caption` | 13px | 1.5 | Helper text, timestamps |
| `--fs-overline` | 12px | 1.4 | Uppercase labels, 0.12em tracking |

- Body measure capped at `--measure: 42rem` (~70 characters).
- Headings use `text-wrap: balance` and `letter-spacing: -0.02em`.

---

## 4. Spacing & layout

**8px base rhythm** (`--space-*`): 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 128px.

**Section padding (fluid):** `--section-y-sm` 32→64px · `--section-y` 48→96px ·
`--section-y-lg` 64→128px.

**Containers:** content **720px** (long-form), standard **1200px** (default),
wide **1440px** (editorial). Side padding `--gutter`: 16→32px.

**Grid:** 12 columns, 24px gap (`.grid-12`).

**Breakpoints (mobile-first):** 640px, 1024px, 1280px.

**Shape:** borders 1px; radii `0` / `2px` (`--radius-sm`) / `4px` (`--radius-md`);
radio dots may be circular. Shadows: `--shadow-1` barely-there, `--shadow-2` menus only.

**Motion:** 150/200/250ms with `cubic-bezier(0.2, 0, 0, 1)`; all motion disabled
under `prefers-reduced-motion: reduce`.

---

## 5. Components

| Area | Files | Notes |
| --- | --- | --- |
| Header | `Header.astro`, `header.css` | Utility bar, main bar, desktop mega-menu (column groups + featured card), full-screen mobile menu, sticky with scroll border. Vanilla JS. |
| Wordmark | `Wordmark.astro` | Typographic only — "Social **Magent**" with accent on the second word. No logo graphic. |
| Heroes | `Hero.astro` | `block` (dark + placeholder image), `editorial` (light, overline/lead/two buttons), `compact` (breadcrumb). |
| Buttons | `Button.astro` | primary, secondary (outline), text+arrow; hover, focus-visible, disabled, loading. |
| Cards | `InsightCard`, `FeatureCard`, `CapabilityCard`, `ListRow` | Flat, thin borders, no shadows. |
| Sections | `SplitSection`, `Capabilities`, `FeaturedInsight`, `CtaBand`, `LeadershipGrid` | CTA band has a dark variant; portraits are abstract CSS placeholders. |
| Forms | `Input`, `Select`, `Textarea`, `Checkbox`, `Radio`, `FileUpload` | Labels, helper text, error/success states, 44px targets, `aria-invalid` + `aria-describedby`. |
| Navigation | `Breadcrumb`, `Pagination`, `Tabs`, `Accordion`, `Chip` | Tabs use ARIA + arrow keys (JS); accordion is native `<details>` (no JS). |
| Footer | `Footer.astro` | Link groups, legal row, social links, light and dark variants. |
| Utilities | `Divider`, `Overline`, `PullQuote`, `Notice`, `DataTable` | Notices: info, success, warning, error. |

**JavaScript is limited to:** mega-menu open/close, mobile menu, sticky header
border, tabs. Nothing else.

---

## 6. Do and don't

**Do**

- ✅ Change brand values only in `src/styles/tokens.css`.
- ✅ Use semantic aliases (`--color-text`, `--color-border`, …) in component CSS so
  light and dark surfaces both work.
- ✅ Keep one primary action per screen; use the accent only for that action, links,
  focus rings and small labels.
- ✅ Keep radii 0–4px, borders 1px, shadows minimal.
- ✅ Label every placeholder image, name, date, quote and statistic as a placeholder.
- ✅ Keep body copy at ~70 characters, headings in the serif, UI in the sans.
- ✅ Provide alt text (or `role="img"` + label) for meaningful images; decorative
  shapes get `aria-hidden`.
- ✅ Preserve focus-visible rings, 44px targets and heading order.

**Don't**

- ❌ Don't add gradients, glassmorphism, emoji, neon, or stock/AI-generated imagery.
- ❌ Don't use more than one accent hue, or introduce a second brand colour.
- ❌ Don't use shadows for ordinary cards — borders carry the separation.
- ❌ Don't use border radii above 4px (except radio dots).
- ❌ Don't set text in `grey-400` on light surfaces (2.79:1 — decorative only).
- ❌ Don't invent testimonials, clients, logos, awards, statistics or income claims.
- ❌ Don't reference or imitate any real consultancy's identity.
- ❌ Don't add a UI framework, CSS framework or component library.
- ❌ Don't ship JavaScript a component doesn't need.

---

## 7. Repository map

```
src/
  styles/
    tokens.css          ← all design tokens (start here)
    base.css            ← reset, typography, layout, a11y, reduced motion
    main.css            ← entry: imports tokens → base → components
    styleguide.css      ← style-guide page scaffolding only
    components/*.css    ← one stylesheet per component area
  components/           ← Astro components (markup + behaviour)
  layouts/BaseLayout.astro
  pages/index.astro     ← minimal homepage: header, hero, footer
  pages/styleguide/index.astro  ← /styleguide/ (noindex)
DESIGN.md               ← this file
```

Build: `npm run build` (Astro static output → `./dist`, served by the existing
`wrangler.jsonc` assets config). Preview: `npm run dev`.
