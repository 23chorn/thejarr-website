# Jarr Design System

Extracted from the live Pulse dashboard (`web/`). Use this as the reference when building thejarr.co.

---

## Fonts

Two typefaces, each with a distinct role. Load via `next/font/google` (or equivalent).

| Role | Family | Weights | CSS variable |
|---|---|---|---|
| Display / headings | **Syne** | 400, 600, 700, 800 | `--font-display` |
| Body / UI | **DM Sans** | 300, 400, 500 | `--font-body` |

**Usage rules**
- `--font-display` on all `h1`–`h4`, the logo wordmark, section eyebrows, stat values, card headings, and the PIN input digits.
- `--font-body` on all body copy, labels, captions, buttons, and navigation.
- Display headings always get `letter-spacing: -0.5px` (tight). Hero `h1` gets `-1px`.
- Body text at 300 weight for large supporting copy (subtitles, taglines). 400–500 for UI labels.

---

## Colour palette

```css
/* Ink (text) */
--ink:           #0e0e0e;   /* primary text — near-black, not pure black */
--ink-soft:      #3a3a3a;   /* secondary text, button labels */
--ink-muted:     #888888;   /* captions, metadata, timestamps */

/* Canvas (backgrounds) */
--canvas:        #fafaf8;   /* warm off-white — page background */
--white:         #ffffff;   /* card surfaces, inputs */

/* Amber (brand accent) */
--amber:         #f5a623;   /* primary CTA, progress bars, logo dot, highlights */
--amber-deep:    #d4831a;   /* eyebrow labels, links, hover states, error text */
--amber-pale:    #fff8ec;   /* avatar backgrounds, tag fills, soft tints */
--amber-glow:    rgba(245, 166, 35, 0.12);  /* hover overlays, focus rings */

/* Semantic */
--green:         #1a7f5a;   /* completed goals, success states */

/* Borders */
--border:        #e8e5df;   /* default card/divider border — warm grey */
--border-strong: #d0cdc6;   /* input borders, stronger dividers */
```

### Colour usage notes
- The **canvas** (`#fafaf8`) is the page background — a warm off-white, never pure white. Pure white (`#ffffff`) is reserved for card surfaces only.
- **Amber** is the sole brand colour. Use it sparingly and purposefully — progress bars, the logo dot, primary CTAs, and active states.
- **Amber-deep** for text on light backgrounds (eyebrow labels, links). Never use `--amber` for text — it doesn't have enough contrast.
- There is no dark mode. The palette is intentionally warm and light.

---

## Typography scale

| Use | Size | Weight | Family | Notes |
|---|---|---|---|---|
| Hero h1 | `clamp(32px, 5vw, 52px)` | 800 | display | letter-spacing: -1px |
| Section heading | 24px | 700 | display | letter-spacing: -0.5px |
| Card heading | 18px | 700 | display | letter-spacing: -0.5px |
| Stat value (large) | `clamp(18px, 3vw, 26px)` | 800 | display | letter-spacing: -0.5px |
| Eyebrow label | 11px | 700 | display | uppercase, letter-spacing: 2.5px, `--amber-deep` |
| Logo wordmark | 22px | 800 | display | letter-spacing: -0.5px |
| Body / supporting | 18px | 300 | body | subtitles, taglines |
| Body standard | 16px | 400 | body | |
| UI label | 14–15px | 500–600 | body | buttons, nav items |
| Caption | 12–13px | 400–500 | body | metadata, timestamps |

**Line heights**
- Headings: `1.1`
- Body: `1.6`

---

## Spacing & layout

```
Max content width: 680px (centred)
Page padding:      64px top/bottom, 32px left/right
Section gaps:      40–56px between major blocks
Card padding:      28px 32px (goal cards), 24px 28px (stat cards)
```

---

## Shadows

Three levels — use the lowest level that works.

```css
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);   /* resting cards */
--shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);  /* hover, modals */
--shadow-lg: 0 16px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06); /* dropdowns, popovers */
```

---

## Border radius

```css
--radius-sm:  6px;   /* buttons, tags, small inputs */
--radius-md: 12px;   /* input boxes (PIN), medium components */
--radius-lg: 20px;   /* cards, modal sheets */
```

---

## Animations

```css
/* Entrance — fade up from 24px below */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-up       { animation: fadeUp 0.6s ease both; }
.anim-delay-1  { animation-delay: 0.1s; }
.anim-delay-2  { animation-delay: 0.2s; }
.anim-delay-3  { animation-delay: 0.3s; }

/* Progress bar fill — used on hold-to-confirm buttons */
@keyframes fillBar {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
```

Use staggered `.fade-up` + `.anim-delay-N` for any list of cards entering the screen. The delay increments (100ms, 200ms, 300ms) feel natural without being slow.

---

## Components

### Logo lockup

```
thejarr.  ●
```
- Wordmark: `--font-display`, 800 weight, `--ink`, `letter-spacing: -0.5px`
- Dot: 8–9px circle, `border-radius: 50%`, `background: --amber`
- The period is part of the wordmark — always include it
- Gap between wordmark and dot: 8px

### Eyebrow label

Small all-caps label used above section headings and card titles.

```
font-family: --font-display
font-weight: 700
font-size:   11px
letter-spacing: 2.5px
text-transform: uppercase
color: --amber-deep
```

Pairs with a larger heading directly below it.

### Card

White surface on canvas background. Two sizes used in practice:

**Stat card** (Victory Hall, Top Partner):
```css
background:    var(--white);
border:        1px solid var(--border);
border-radius: var(--radius-lg);
padding:       24px 28px;
box-shadow:    var(--shadow-sm);
```

**Goal card** (interactive, links to detail):
```css
background:    var(--white);
border:        1px solid var(--border);
border-radius: var(--radius-lg);
padding:       28px 32px;
box-shadow:    var(--shadow-sm);
transition:    box-shadow 0.2s, transform 0.2s;
```
On hover: `box-shadow: var(--shadow-md)`, `transform: translateY(-2px)`

### Progress bar

```css
/* Track */
height: 6px; border-radius: 999px; background: var(--border);

/* Fill */
height: 100%; border-radius: 999px;
background: var(--amber);           /* in progress */
background: var(--green);           /* completed (≥100%) */
transition: width 0.6s ease;
```

### Deadline badge

Inline pill on goal cards.

```css
font-size:   12px;
font-weight: 600;
padding:     4px 10px;
border-radius: 999px;
letter-spacing: 0.3px;

/* Normal */
background: var(--amber-pale);  color: var(--amber-deep);

/* Overdue */
background: #fff0f0;            color: #b91c1c;
```

### Avatar / initials

Used for partner display.

```css
width: 44px; height: 44px;
border-radius: 50%;
background: var(--amber-pale);
color: var(--amber-deep);
font-family: var(--font-display);
font-weight: 700;
font-size: 15px;
```

### Stat grid (Victory Hall)

Three-column grid with vertical dividers, no outer borders.

```css
display: grid;
grid-template-columns: 1fr 1fr 1fr;
/* Columns 1–2: border-right: 1px solid var(--border); padding: 0 20px; */
/* Column 3: no border; */
```

Stat value: `--font-display`, 800, `clamp(18px, 3vw, 26px)`, `--ink`
Stat label: `--font-body`, 500, 12px, `--ink-muted`

### Primary button

```css
background:    var(--amber);
color:         var(--ink);
border:        none;
border-radius: var(--radius-sm);
padding:       14px;
font-family:   var(--font-body);
font-weight:   600;
font-size:     15px;
cursor:        pointer;
transition:    background 0.15s;

/* Disabled / loading */
background: var(--border);
color:      var(--ink-muted);
cursor:     not-allowed;
```

### Ghost / outline button (destructive)

Used for "Hold to Shatter Session".

```css
background:    transparent;
border:        1.5px solid var(--border-strong);
color:         var(--ink-soft);
border-radius: var(--radius-sm);
padding:       9px 20px;
font-family:   var(--font-body);
font-weight:   600;
font-size:     14px;
transition:    border-color 0.15s, color 0.15s, background 0.15s;

/* Hover */
border-color: var(--amber);
background:   var(--amber-glow);
color:        var(--amber-deep);
```

### Burndown chart

Pure server-rendered SVG. No client-side JS.

- Viewbox: 560 × 200px
- Actual progress line: `--amber` stroke, 2.5px, rounded linecap/join
- Area fill under line: amber at 8% opacity
- Ideal pace line: dashed, `--border-strong`
- Today marker: vertical dashed line, `--border`
- Axes: `--border` colour, minimal — no gridlines
- Labels: 11px, `--font-body`, `--ink-muted`

---

## Design principles

1. **Warm, not cold.** Off-white canvas (`#fafaf8`) and warm greys (`#e8e5df`) instead of pure white and cool neutrals. The palette reads like paper, not a screen.

2. **Amber is precious.** One brand colour, used in one role at a time — never competing instances of amber on the same section. Progress bar or CTA button, not both.

3. **Typography does the work.** Heavy Syne for numbers and headings creates visual hierarchy without decoration. Let weight and size contrast carry the page rather than colour.

4. **Generous whitespace.** 56px between major sections. Cards breathe with 28–32px internal padding. Nothing is cramped.

5. **Subtle motion.** The `fadeUp` entrance animation (0.6s) is the only ambient animation. Everything else (hover lifts, transitions) is 0.15–0.2s. Nothing bounces or spins.

6. **One interactive pattern.** The hold-to-confirm button is the signature interaction — a slow fill bar that requires deliberate commitment. Use it only for irreversible actions.
