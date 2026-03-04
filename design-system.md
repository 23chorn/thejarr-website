# thejarr Design System

Reference for implementing consistent UI across thejarr.co and the Pulse dashboard.

---

## Fonts

Two typefaces. Self-hosted woff2 files live in `website/fonts/`.

| Role | Family | Weights | Variable |
|------|--------|---------|---------|
| Display / headings / logo | **Outfit** | 300–800 | Yes |
| Body / UI text | **DM Sans** | 300–500 | Yes |

```css
--font-display: 'Outfit', sans-serif;
--font-body:    'DM Sans', sans-serif;
```

**Font rendering**
```css
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

---

## Colour Tokens

All tokens are CSS custom properties on `:root`. Dark mode overrides them via `[data-theme="dark"]`.

### Text

| Token | Light | Dark |
|-------|-------|------|
| `--ink` | `#0e0e0e` | `#f0f0f0` |
| `--ink-soft` | `#3a3a3a` | `#a8a8b3` |
| `--ink-muted` | `#888888` | `#5a5a68` |

### Backgrounds

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--canvas` | `#f8fafb` | `#0d1117` | Page background |
| `--white` | `#ffffff` | `#161b26` | Card / panel background |
| `--nav-bg` | `rgba(255,255,255,0.92)` | `rgba(13,17,23,0.92)` | Sticky nav (frosted glass) |
| `--nav-mobile-bg` | `rgba(255,255,255,0.98)` | `rgba(13,17,23,0.98)` | Mobile nav dropdown |
| `--surface-inverse` | `#0e0e0e` | `#1a2030` | Always-dark surfaces (CTA, terminal blocks, phone frame) |

### Brand Accent (Amber)

| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--amber` | `#f5a623` | `#f5a623` | Primary accent, buttons, the dot, progress bars |
| `--amber-deep` | `#d4831a` | `#d4831a` | Hover state, eyebrow labels, text on light bg |
| `--amber-pale` | `#fff8ec` | `rgba(245,166,35,0.12)` | Tinted backgrounds, tag fills |
| `--amber-glow` | `rgba(245,166,35,0.12)` | `rgba(245,166,35,0.15)` | Soft hover backgrounds, focus rings |
| `--accent-border` | `rgba(245,166,35,0.3)` | `rgba(245,166,35,0.35)` | Accent-coloured borders |
| `--green` | `#10b981` | `#10b981` | Semantic positive / success (separate from amber) |

### Borders

| Token | Light | Dark |
|-------|-------|------|
| `--border` | `#e5e7eb` | `rgba(255,255,255,0.08)` |
| `--border-strong` | `#d1d5db` | `rgba(255,255,255,0.16)` |

### Shadows

| Token | Light | Dark |
|-------|-------|------|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)` | heavier (0.4/0.3) |
| `--shadow-md` | `0 4px 16px rgba(0,0,0,0.08), 0 2px 6px rgba(0,0,0,0.04)` | heavier (0.5/0.3) |
| `--shadow-lg` | `0 16px 48px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.06)` | heavier (0.6/0.4) |

---

## Spacing & Radii

```css
--radius-sm: 6px;    /* buttons, tags, small elements */
--radius-md: 12px;   /* icon containers, medium cards */
--radius-lg: 20px;   /* cards, panels, pricing cards */

--max-w:  1120px;    /* max content width */
--nav-h:  68px;      /* sticky nav height */
```

Section padding:
```
.section    → 96px 0   (64px tablet, 48px mobile)
.section-sm → 64px 0   (48px tablet, 36px mobile)
```

Container:
```
padding: 0 32px  (20px on mobile ≤768px)
```

---

## Typography Scale

All headings use `--font-display` (Outfit). Body text uses `--font-body` (DM Sans).

| Class | Size | Weight | Letter-spacing | Notes |
|-------|------|--------|----------------|-------|
| `.display` | `clamp(48px, 6vw, 80px)` | 800 | `-2px` | Hero headline only |
| `.headline` | `clamp(32px, 4vw, 52px)` | 700 | `-1px` | Section headings |
| `.subheadline` | `clamp(20px, 2.5vw, 28px)` | 600 | `-0.5px` | Sub-section headings |
| `.eyebrow` | `11px` | 700 | `2.5px` | All-caps label above headlines |
| `.body-lg` | `18px` | 400 | — | Lead paragraphs, `line-height: 1.7` |
| `.body-md` | `16px` | 400 | — | Standard body, `line-height: 1.7` |

**Eyebrow** colour: `var(--amber-deep)`.

**All h1–h4**: `font-family: var(--font-display); line-height: 1.1; letter-spacing: -0.5px`

**Brand name** inline (`.brand`): Outfit 800, letter-spacing `-0.5px`, size inherits from parent.

**Logo dot** (`.nav-logo-dot`): `8×8px` circle, `background: var(--amber)`, `border-radius: 50%`.

---

## Buttons

```css
/* Base */
.btn        → inline-flex; gap: 8px; padding: 14px 28px;
              border-radius: var(--radius-sm); font-weight: 600; font-size: 15px;
.btn-lg     → padding: 17px 36px; font-size: 16px

/* Primary */
.btn-primary   → background: var(--amber); color: var(--ink)
  :hover       → background: var(--amber-deep); color: #fff;
                 translateY(-2px); box-shadow: 0 8px 24px rgba(245,166,35,0.35)

/* Secondary */
.btn-secondary → border: 1.5px solid var(--border-strong); background: transparent; color: var(--ink)
  :hover       → border-color: var(--amber); color: var(--amber-deep);
                 background: var(--amber-glow)
```

---

## Cards

```css
.card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: 32px;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.2s, transform 0.2s;
}
.card:hover → box-shadow: var(--shadow-md); transform: translateY(-2px)
```

---

## Tags / Badges

```css
.tag {
  background: var(--amber-pale);
  color: var(--amber-deep);
  font-size: 12px; font-weight: 600;
  padding: 4px 10px; border-radius: 999px; letter-spacing: 0.3px;
}
```

---

## Always-Dark Surface (`--surface-inverse`)

CTA blocks, terminal/command blocks, and the phone frame are **always dark** — they do not invert with the theme.

```
Light mode: #0e0e0e
Dark mode:  #1a2030
```

Text on these surfaces:
```
Primary:          #ffffff
Secondary:        rgba(255,255,255,0.6)
Muted/note:       rgba(255,255,255,0.4)
Terminal prompt:  rgba(255,255,255,0.35)
Accent in term:   var(--amber)
Lighter green:    #6ee7a0
```

---

## Inline Code

```css
code {
  font-family: 'Courier New', monospace;
  font-size: 13px; font-weight: 600;
  background: var(--amber-pale);
  color: var(--amber-deep);
  padding: 2px 7px; border-radius: 4px;
}
```

---

## Callout Boxes

```css
/* Default (accent) */
.callout {
  border-left: 3px solid var(--amber);
  background: var(--amber-pale);
  padding: 16px 20px;
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
}

/* Info variant */
.callout.info { border-color: #3b82f6; background: #eff6ff; color: #1e3a5f; }
```

---

## Dark Mode

Theme stored in `localStorage` key `"theme"` (`"light"` | `"dark"`).

**Apply before first paint** (prevent flash):
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

**CSS structure:**
```
theme.css      → :root light tokens
theme-dark.css → [data-theme="dark"] overrides
               + @media (prefers-color-scheme: dark) :root:not([data-theme="light"])
```

**Icon convention:**
```css
.theme-toggle .icon-moon                { display: none; }
[data-theme="dark"] .theme-toggle .icon-sun  { display: none; }
[data-theme="dark"] .theme-toggle .icon-moon { display: block; }
```

---

## WhatsApp Chat Mockup

Always renders as a light WhatsApp-style UI — use **hardcoded** values, not CSS vars:

```css
.phone-header   { background: #075e54; }        /* WhatsApp dark teal */
.phone-screen   { background: #e5ddd5; }         /* WhatsApp beige */
.bubble-in      { background: #ffffff; color: #0e0e0e; }  /* received */
.bubble-out     { background: #dcf8c6; color: #0e0e0e; }  /* sent */
.bubble-time    { color: #888; }
```

Goal name accent inside chat: `color: #d4831a` (amber-deep).

---

## Animations

```css
/* Entrance */
@keyframes fadeUp  { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }

.anim-fade-up              → duration: 0.6s ease
.anim-delay-1/2/3/4        → 0.1 / 0.2 / 0.3 / 0.4s
```

All hover transitions: `0.15–0.2s`. Nothing bounces.

---

## Sidebar Active State

```css
.sidebar-link         { border-left: 2px solid transparent; }
.sidebar-link:hover   { background: var(--amber-glow); border-left-color: var(--amber); }
.sidebar-link.active  { background: var(--amber-pale); color: var(--amber-deep);
                        border-left-color: var(--amber); font-weight: 600; }
```

---

## Quick Reference: Key Hex Values

| Purpose | Value |
|---------|-------|
| Brand accent | `#f5a623` |
| Brand accent hover / text | `#d4831a` |
| Semantic green | `#10b981` |
| Dark page bg | `#0d1117` |
| Dark card bg | `#161b26` |
| Dark inverse surface | `#1a2030` |
| Light page bg | `#f8fafb` |
| Primary text (light) | `#0e0e0e` |
| Primary text (dark) | `#f0f0f0` |
| WhatsApp nav bar | `#075e54` |
| Goal name in chat | `#d4831a` |
