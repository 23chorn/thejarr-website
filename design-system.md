# Jarr — Design System Reference

This document captures every design token, typographic rule, spacing convention, and component pattern used on thejarr.co. Use it as the source of truth when building the app so the two surfaces feel like the same product.

---

## Fonts

Both fonts are loaded from Google Fonts.

```
https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap
```

| Role | Family | Usage |
|---|---|---|
| Display / headings | **Syne** | All h1–h4, logo, labels, eyebrows, numbers |
| Body / UI | **DM Sans** | Body copy, buttons, nav links, captions |

**Key Syne weights used:** 700 (headlines), 800 (display / logo / big numbers)
**Key DM Sans weights used:** 300 (light body), 400 (regular), 500 (medium / nav links), 600 (buttons / bold UI)

---

## Colour Tokens

### Core palette

| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#0e0e0e` | Primary text, dark backgrounds, icon fills |
| `--ink-soft` | `#3a3a3a` | Secondary text, body copy |
| `--ink-muted` | `#888888` | Tertiary text, timestamps, captions, placeholders |
| `--canvas` | `#fafaf8` | Page background (warm off-white, not pure white) |
| `--white` | `#ffffff` | Card backgrounds, nav, footer |

### Amber (primary brand colour)

| Token | Value | Usage |
|---|---|---|
| `--amber` | `#f5a623` | Primary CTA buttons, logo dot, progress bars, highlights |
| `--amber-deep` | `#d4831a` | Hover state for amber, eyebrow labels, active nav, code text |
| `--amber-pale` | `#fff8ec` | Tinted backgrounds on cards, tag backgrounds, code bg |
| `--amber-glow` | `rgba(245,166,35,0.12)` | Hover state backgrounds (very subtle tint) |

### Supporting

| Token | Hex | Usage |
|---|---|---|
| `--green` | `#1a7f5a` | Success states, WhatsApp-adjacent elements, "free plan" tags |
| `--border` | `#e8e5df` | All dividers and card borders (warm grey) |
| `--border-strong` | `#d0cdc6` | Secondary button borders, stronger dividers |

### One-off colours (not tokenised)

| Value | Used for |
|---|---|
| `#e5ddd5` | WhatsApp chat pane background |
| `#075e54` | WhatsApp header bar |
| `#dcf8c6` | WhatsApp outgoing bubble |
| `#e8f5e9` | WhatsApp pill background |
| `#1b5e20` | WhatsApp pill text |
| `#e8f5f0` | Green tag background |

---

## Shadows

Three levels — always use in order of elevation.

| Token | Value | When to use |
|---|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | Default card rest state |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)` | Hovered cards, dropdowns, mobile nav |
| `--shadow-lg` | `0 16px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)` | Phone mockup, featured pricing card, modals |

**Amber glow shadow** (buttons only):
`0 8px 24px rgba(245,166,35,0.35)` — applied on hover of primary CTA buttons

---

## Border Radius

| Token | Value | Used on |
|---|---|---|
| `--radius-sm` | `6px` | Buttons, nav links, tags, small UI elements |
| `--radius-md` | `12px` | Feature icons, code blocks, input fields |
| `--radius-lg` | `20px` | Cards, pricing cards, large containers, CTA sections |
| `999px` | pill | Tags, progress bars, the WhatsApp pill badge |
| `50%` | circle | Avatars, logo dot |
| `40px` | phone frame outer |
| `30px` | phone screen inner |

---

## Spacing & Layout

### Max content width
```
--max-w: 1120px
```
Always centred with `margin: 0 auto`. Container padding: `0 32px` desktop, `0 20px` mobile.

### Section vertical rhythm

| Class | Padding | Used for |
|---|---|---|
| `.section` | `96px 0` (desktop) / `64px 0` (768px) / `48px 0` (480px) | Standard full sections |
| `.section-sm` | `64px 0` (desktop) / `48px 0` (768px) / `36px 0` (480px) | Tighter sections (CTA, callouts) |

### Nav height
```
--nav-h: 68px
```

### Common gaps
- Between grid cells: `2px` (with background as border trick)
- Between cards in a grid: `20–24px`
- Hero gap (desktop): `64px`; (mobile): `40px`
- Section heading to content: `48–56px`

---

## Typography Scale

### Display (hero headline)
```
font-family: Syne
font-size: clamp(48px, 6vw, 80px)
font-weight: 800
line-height: 1.0
letter-spacing: -2px
```

### Headline (section headings)
```
font-family: Syne
font-size: clamp(32px, 4vw, 52px)
font-weight: 700
line-height: 1.1
letter-spacing: -1px
```

### Subheadline
```
font-family: Syne
font-size: clamp(20px, 2.5vw, 28px)
font-weight: 600
letter-spacing: -0.5px
```

### Eyebrow label (above headings)
```
font-family: Syne
font-size: 11px
font-weight: 700
letter-spacing: 2.5px
text-transform: uppercase
color: --amber-deep
margin-bottom: 16px
```

### Body large
```
font-family: DM Sans
font-size: 18px
line-height: 1.7
color: --ink-soft
```

### Body medium (standard)
```
font-family: DM Sans
font-size: 16px
line-height: 1.6 (base) or 1.7 (paragraph)
color: --ink
```

### Body small / captions
```
font-family: DM Sans
font-size: 13–14px
color: --ink-muted
```

### All headings (h1–h4 base)
```
font-family: Syne
line-height: 1.1
letter-spacing: -0.5px
```

---

## Buttons

All buttons share `.btn` base styles:
```
display: inline-flex
align-items: center
gap: 8px
padding: 14px 28px
border-radius: --radius-sm (6px)
font-weight: 600
font-size: 15px
font-family: DM Sans
transition: all 0.15s
```

### Primary button
```
background: --amber (#f5a623)
color: --ink (#0e0e0e)

hover:
  background: --amber-deep (#d4831a)
  color: #fff
  transform: translateY(-2px)
  box-shadow: 0 8px 24px rgba(245,166,35,0.35)
```

### Secondary button
```
background: transparent
color: --ink
border: 1.5px solid --border-strong (#d0cdc6)

hover:
  border-color: --amber
  color: --amber-deep
  background: --amber-glow
```

### Large modifier `.btn-lg`
```
padding: 17px 36px
font-size: 16px
```

### Button on dark background
```
Adjust secondary border-color to rgba(255,255,255,0.2)
Adjust secondary color to rgba(255,255,255,0.7)
```

---

## Cards

### Standard card
```
background: --white
border: 1px solid --border
border-radius: --radius-lg (20px)
padding: 32px
box-shadow: --shadow-sm

hover:
  box-shadow: --shadow-md
  transform: translateY(-2px)
  transition: 0.2s
```

### Feature grid pattern
Grid cells share a `2px` gap on a `--border`-coloured container background — this creates the illusion of a border between cells without double borders.
```
display: grid
grid-template-columns: repeat(2, 1fr)
gap: 2px
background: --border
border: 1px solid --border
border-radius: --radius-lg
overflow: hidden

Each cell:
  background: --white
  padding: 44px 40px
```

### Dark CTA section
```
background: --ink (#0e0e0e)
border-radius: --radius-lg (20px)
padding: 72px 64px
display: grid
grid-template-columns: 1fr auto
gap: 48px

Text colours on dark:
  headline: #fff
  body: rgba(255,255,255,0.6)
  eyebrow: rgba(245,166,35,0.8)
  note: rgba(255,255,255,0.4)
```

---

## Tags / Badges

### Amber tag (default)
```
background: --amber-pale (#fff8ec)
color: --amber-deep (#d4831a)
font-size: 12px
font-weight: 600
padding: 4px 10px
border-radius: 999px
letter-spacing: 0.3px
```

### Green tag
```
background: #e8f5f0
color: --green (#1a7f5a)
(same size/shape as amber tag)
```

### WhatsApp pill badge
```
display: inline-flex
align-items: center
gap: 8px
background: #e8f5e9
color: #1b5e20
font-size: 13px
font-weight: 600
padding: 6px 14px 6px 10px
border-radius: 999px
```

---

## Animations

### Fade up (page load / scroll into view)
```
@keyframes fadeUp {
  from: opacity 0, translateY(24px)
  to:   opacity 1, translateY(0)
}
duration: 0.6s
easing: ease
fill-mode: both
```

Staggered with delay classes:
```
.anim-delay-1 → 0.1s
.anim-delay-2 → 0.2s
.anim-delay-3 → 0.3s
.anim-delay-4 → 0.4s
```

### Interactive micro-animations
- Button hover lift: `transform: translateY(-2px)`, `0.15s`
- Card hover lift: `transform: translateY(-2px)`, `0.2s`
- Nav CTA hover lift: `transform: translateY(-1px)`, `0.1s`
- Hamburger → close: lines animate via `rotate(45deg)` / `opacity 0` / `rotate(-45deg)`, `0.25s ease`

---

## Nav

```
height: 68px
position: sticky, top: 0, z-index: 100
background: rgba(250,250,248,0.92)   ← frosted glass effect
backdrop-filter: blur(12px)
border-bottom: 1px solid --border

Logo: Syne 800, 22px, letter-spacing -0.5px
  + 8px amber dot (8×8px circle)

Nav links: DM Sans 500, 14px, --ink-soft
  hover: --ink + --amber-glow background
  active: --amber-deep, weight 600

CTA button: standard amber button, 9px 20px padding, no translateY on hover (just -1px)
```

**Mobile** (≤768px): nav links hidden, hamburger shown. Dropdown appears below nav bar with `position: absolute; top: 100%`, same frosted glass background.

---

## Design Principles

### 1. Warm neutrals, not cold greys
The background is `#fafaf8` (warm off-white), borders are `#e8e5df` (warm grey). Never use pure `#f0f0f0` or `#e0e0e0` — everything has a slight warm/cream cast.

### 2. Amber as the only accent
One accent colour. Amber is used for CTAs, progress, highlights, active states, and brand moments. Green is used only for success/WhatsApp-adjacent states. No blues, purples, or reds in the UI (blue is reserved for `.callout.info` boxes only).

### 3. Syne for impact, DM Sans for readability
All "big" text — headings, labels, eyebrows, numbers — uses Syne. All functional/readable text — paragraphs, button labels, nav links, captions — uses DM Sans. Never mix them within the same semantic level.

### 4. Tight negative tracking on headings
Display: `-2px`. Headlines: `-1px`. All headings via base rule: `-0.5px`. This gives the product a sharp, modern feel. Do not use default tracking on Syne headings.

### 5. Section rhythm
Every section starts with an eyebrow label (amber, uppercase, Syne 700) followed by a headline. Consistent `48–56px` gap between heading and content. This creates a predictable, calm reading flow.

### 6. Lift on hover, not colour change
Cards and buttons primarily express interactivity through `translateY(-2px)` + shadow deepening, not just colour change. The movement signals "this is tappable" more clearly.

### 7. Dark sections sparingly
Only one dark section per page (the bottom CTA block). Its `#0e0e0e` background creates a strong visual anchor at the end of each page and drives conversion.

---

## Responsive Breakpoints

| Breakpoint | Behaviour |
|---|---|
| `> 768px` | Full desktop layout |
| `≤ 768px` | Nav collapses to hamburger, single-column layouts, reduced padding |
| `≤ 480px` | Further padding reduction, buttons go full-width, hero text tightens |

---

## Quick Token Reference (copy-paste)

```css
/* Colours */
--ink:          #0e0e0e;
--ink-soft:     #3a3a3a;
--ink-muted:    #888888;
--canvas:       #fafaf8;
--white:        #ffffff;
--amber:        #f5a623;
--amber-deep:   #d4831a;
--amber-pale:   #fff8ec;
--amber-glow:   rgba(245,166,35,0.12);
--green:        #1a7f5a;
--border:       #e8e5df;
--border-strong:#d0cdc6;

/* Shadows */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
--shadow-lg: 0 16px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06);

/* Radius */
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 20px;

/* Fonts */
--font-display: 'Syne', sans-serif;
--font-body:    'DM Sans', sans-serif;

/* Layout */
--max-w:  1120px;
--nav-h:  68px;
```
