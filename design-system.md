# thejarr Design System
> Reference for thelid dashboard and any future product surfaces.
> Last updated: March 2026

---

## Brand naming

| Name | Usage |
|---|---|
| **thejarr** | Product name — always lowercase, no spaces, no period |
| **thejarr+** | Paid tier |
| **thelid** | Live dashboard — thejarr+ exclusive feature |

The lowercase `the` prefix is the naming convention. Never capitalise.

### thelid specifics
- Dashboard link delivered via WhatsApp as a one-time secure URL (1-hour expiry)
- WhatsApp command: `lid` — sends fresh link, immediately invalidates previous
- URL pattern: `https://thelid.thejarr.co/<token>`
- No login required — the token is the auth
- Shows: burn-down charts, currency breakdowns, contribution leaderboards, partner stats

---

## Colour Tokens

### Light mode (`:root`)

```css
/* Text */
--ink:              #0e0e0e;
--ink-soft:         #3a3a3a;
--ink-muted:        #888;

/* Backgrounds */
--canvas:           #f8fafb;       /* page background */
--white:            #ffffff;       /* card / section background */
--nav-bg:           rgba(255,255,255,0.92);
--nav-mobile-bg:    rgba(255,255,255,0.98);
--surface-inverse:  #0e0e0e;       /* always-dark surfaces: CTA, code blocks */

/* Brand accent */
--amber:            #f5a623;
--amber-deep:       #d4831a;
--amber-pale:       #fff8ec;
--amber-glow:       rgba(245,166,35,0.12);
--accent-border:    rgba(245,166,35,0.3);

/* Semantic */
--green:            #10b981;

/* Borders */
--border:           #e5e7eb;
--border-strong:    #d1d5db;

/* Shadows */
--shadow-sm: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
--shadow-md: 0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04);
--shadow-lg: 0 16px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06);
```

### Dark mode (`[data-theme="dark"]`)

```css
--ink:              #f0f0f0;
--ink-soft:         #a8a8b3;
--ink-muted:        #5a5a68;
--canvas:           #0d1117;
--white:            #161b26;
--nav-bg:           rgba(13,17,23,0.92);
--nav-mobile-bg:    rgba(13,17,23,0.98);
--surface-inverse:  #1a2030;

/* Accent unchanged in dark mode */
--amber:            #f5a623;
--amber-deep:       #d4831a;
--amber-pale:       rgba(245,166,35,0.12);
--amber-glow:       rgba(245,166,35,0.15);
--accent-border:    rgba(245,166,35,0.35);
--green:            #10b981;

--border:           rgba(255,255,255,0.08);
--border-strong:    rgba(255,255,255,0.16);

--shadow-sm: 0 1px 3px rgba(0,0,0,0.4),  0 1px 2px rgba(0,0,0,0.3);
--shadow-md: 0 4px 16px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3);
--shadow-lg: 0 16px 48px rgba(0,0,0,0.6), 0 4px 12px rgba(0,0,0,0.4);
```

Also apply via `@media (prefers-color-scheme: dark)` when no explicit toggle is set:
```css
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) { /* same tokens as above */ }
}
```

---

## Quick reference: key hex values

| Purpose | Value |
|---|---|
| Brand accent | `#f5a623` |
| Brand accent hover / text | `#d4831a` |
| Semantic green | `#10b981` |
| Light page bg | `#f8fafb` |
| Light card bg | `#ffffff` |
| Dark page bg | `#0d1117` |
| Dark card bg | `#161b26` |
| Dark inverse surface | `#1a2030` |
| Primary text (light) | `#0e0e0e` |
| Primary text (dark) | `#f0f0f0` |

---

## Fonts

| Role | Family | Weights | Usage |
|---|---|---|---|
| Display | `Outfit` | 300–800 | Headings, logo, eyebrows, buttons |
| Body | `DM Sans` | 300–500 | Body copy, UI labels |

```css
--font-display: 'Outfit', sans-serif;
--font-body:    'DM Sans', sans-serif;
```

Self-hosted woff2. Google Fonts fallback:
```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
```

Font rendering:
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

---

## Typography scale

| Role | Size | Weight | Letter-spacing |
|---|---|---|---|
| Display | `clamp(48px, 6vw, 80px)` | 800 | `-2px` |
| Headline | `clamp(32px, 4vw, 52px)` | 700 | `-1px` |
| Subheadline | `clamp(20px, 2.5vw, 28px)` | 600 | `-0.5px` |
| Eyebrow | `11px` | 700 | `2.5px` |
| Body large | `18px` | 400 | — |
| Body medium | `16px` | 400 | — |

All h1–h4: `font-family: var(--font-display); line-height: 1.1; letter-spacing: -0.5px`

Eyebrow: all-caps, `color: var(--amber-deep)`, `display: block`, `margin-bottom: 16px`

Brand inline (`.brand`): Outfit 800, `letter-spacing: -0.5px`, inherits size.

---

## Spacing & layout

```css
--radius-sm: 6px;    /* buttons, tags, inputs */
--radius-md: 12px;   /* icon containers */
--radius-lg: 20px;   /* cards, panels */

--max-w:  1120px;
--nav-h:  68px;
```

Sections: `padding: 96px 0` (full) · `64px 0` (compact)
Container: `max-width: 1120px; margin: 0 auto; padding: 0 32px;`

---

## Buttons

```css
/* Base */
display: inline-flex; align-items: center; gap: 8px;
padding: 14px 28px; border-radius: var(--radius-sm);
font-weight: 600; font-size: 15px; transition: all 0.15s;

/* Large modifier */
padding: 17px 36px; font-size: 16px;

/* Primary — amber fill */
background: var(--amber); color: var(--ink);
/* hover → */
background: var(--amber-deep); color: #fff;
transform: translateY(-2px);
box-shadow: 0 8px 24px rgba(245,166,35,0.35);

/* Secondary — outline */
background: transparent; color: var(--ink);
border: 1.5px solid var(--border-strong);
/* hover → */
border-color: var(--amber); color: var(--amber-deep);
background: var(--amber-glow);
```

---

## Cards

```css
background: var(--white);
border: 1px solid var(--border);
border-radius: var(--radius-lg);
padding: 32px;
box-shadow: var(--shadow-sm);
transition: box-shadow 0.2s, transform 0.2s;

/* hover → */
box-shadow: var(--shadow-md);
transform: translateY(-2px);
```

---

## Tags / badges

```css
/* Default — amber */
background: var(--amber-pale);
color: var(--amber-deep);
font-size: 12px; font-weight: 600;
padding: 4px 10px; border-radius: 999px; letter-spacing: 0.3px;

/* Muted — "coming soon" etc */
background: var(--canvas);
color: var(--ink-muted);
border: 1px solid var(--border);

/* Green — semantic success */
background: #e8f5f0;
color: var(--green);
```

---

## Plan tier colours

| Tier | Ticks | Card border | Badge |
|---|---|---|---|
| thejarr (free) | `color: var(--green)` | `var(--border)` | Neutral |
| thejarr+ (paid) | `background: var(--amber-pale); color: var(--amber-deep)` | `var(--accent-border)` | Amber |

---

## The amber dot (logo mark)

```css
width: 8px; height: 8px;
border-radius: 50%;
background: var(--amber);
display: inline-block;
```

Use after the wordmark in nav/footer. Apply the same pattern in thelid.

---

## Always-dark surface

CTA blocks, terminal/command blocks — never invert with theme.

```css
background: var(--surface-inverse);  /* #0e0e0e light / #1a2030 dark */
color: #ffffff;
border-radius: var(--radius-lg);
```

Text hierarchy on dark surface:
```
Primary:         #ffffff
Secondary:       rgba(255,255,255,0.6)
Muted:           rgba(255,255,255,0.4)
Terminal prompt: rgba(255,255,255,0.35)
Accent:          var(--amber)
Success green:   #6ee7a0
```

---

## Inline code / commands

```css
font-family: 'Courier New', monospace;
font-size: 13px; font-weight: 600;
background: var(--amber-pale);
color: var(--amber-deep);
padding: 2px 7px; border-radius: 4px;
```

WhatsApp command pill variant:
```css
background: rgba(245,166,35,0.08);
color: var(--amber-deep);
border: 1px solid var(--accent-border);
border-radius: 6px;
padding: 2px 8px;
```

---

## Callout boxes

```css
/* Default accent */
border-left: 3px solid var(--amber);
background: var(--amber-pale);
padding: 16px 20px;
border-radius: 0 var(--radius-sm) var(--radius-sm) 0;

/* Info */
border-color: #3b82f6;
background: #eff6ff;
color: #1e3a5f;
```

---

## Sidebar active state

```css
.sidebar-link         { border-left: 2px solid transparent; }
.sidebar-link:hover   { background: var(--amber-glow); border-left-color: var(--amber); }
.sidebar-link.active  { background: var(--amber-pale); color: var(--amber-deep);
                        border-left-color: var(--amber); font-weight: 600; }
```

---

## Dark mode implementation

Apply `data-theme="dark"` to `<html>`. Stored in `localStorage` key `"theme"`.

**Prevent flash — run before first paint:**
```js
;(function() {
  const saved = localStorage.getItem('theme')
  if (saved) document.documentElement.setAttribute('data-theme', saved)
})()
```

**Toggle:**
```js
const isDark = document.documentElement.getAttribute('data-theme') === 'dark'
const next = isDark ? 'light' : 'dark'
document.documentElement.setAttribute('data-theme', next)
localStorage.setItem('theme', next)
```

**Icon convention:**
```css
.icon-moon                               { display: none; }
[data-theme="dark"] .icon-sun            { display: none; }
[data-theme="dark"] .icon-moon           { display: block; }
```

---

## Animations

```css
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* Usage */
animation: fadeUp 0.6s ease both;
/* Delays */
.anim-delay-1 { animation-delay: 0.1s; }
.anim-delay-2 { animation-delay: 0.2s; }
.anim-delay-3 { animation-delay: 0.3s; }
.anim-delay-4 { animation-delay: 0.4s; }
```

All hover transitions: `0.15–0.2s`. Nothing bounces or springs.

---

## WhatsApp phone mockup colours

Hardcoded — do not use CSS vars here.

```css
/* Light */
.phone-header  { background: #075e54; }
.phone-screen  { background: #e5ddd5; }
.bubble-in     { background: #ffffff; color: #0e0e0e; }
.bubble-out    { background: #dcf8c6; color: #0e0e0e; }
.bubble-time   { color: rgba(0,0,0,0.45); font-size: 11px; }

/* Dark (override via [data-theme="dark"]) */
.phone-header  { background: #1f2c34; }
.phone-screen  { background: #0d1821; }
.bubble-in     { background: #202c33; color: #e9edef; }
.bubble-out    { background: #005c4b; color: #e9edef; }
.bubble-time   { color: rgba(255,255,255,0.45); }
```

Goal name accent inside chat: `color: #d4831a`

---

## WhatsApp prefilled links

```js
const waBase    = 'https://wa.me/971502065546'
const waHello   = waBase + '?text=Hello'    // standard onboarding CTA
const waUpgrade = waBase + '?text=upgrade'  // thejarr+ upgrade CTA
```
