// ── Favicon ───────────────────────────────────────────
;(function() {
  const link = document.createElement('link')
  link.rel  = 'icon'
  link.type = 'image/png'
  link.href = 'app_icon.png'
  document.head.appendChild(link)
})()

// ── Theme ─────────────────────────────────────────────
;(function() {
  const saved = localStorage.getItem('theme')
  document.documentElement.setAttribute('data-theme', saved || 'dark')
})()

// ── Config ────────────────────────────────────────────
const CONFIG = {
  waUrl:        'https://wa.me/971502065546',
  waUrlHello:   'https://wa.me/971502065546?text=Hello',
  waUrlUpgrade: 'https://wa.me/971502065546?text=upgrade',
  email:        'chris@thejarr.co',
  year:         '2026',
  brand:        'thejarr',
  tagline:      'Built in Dubai.',
}

const WA_URL = CONFIG.waUrl  // shorthand used in templates

// ── Shared nav ────────────────────────────────────────
function buildNav() {
  const nav = document.querySelector('nav.nav')
  if (!nav) return

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">thejarr<span class="nav-logo-dot"></span></a>
      <div class="nav-links">
        <a href="index.html"    class="nav-link" data-page="index">HOME</a>
        <a href="features.html" class="nav-link" data-page="features">FEATURES</a>
        <a href="pricing.html"  class="nav-link" data-page="pricing">PRICING</a>
        <a href="manual.html"   class="nav-link" data-page="manual">USER MANUAL</a>
        <a href="${WA_URL}" class="nav-cta" target="_blank">Start saving →</a>
        <button class="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
      </div>
      <button class="nav-toggle" aria-label="Open menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
    <div class="nav-mobile">
      <a href="index.html"    class="nav-link" data-page="index">HOME</a>
      <a href="features.html" class="nav-link" data-page="features">FEATURES</a>
      <a href="pricing.html"  class="nav-link" data-page="pricing">PRICING</a>
      <a href="manual.html"   class="nav-link" data-page="manual">USER MANUAL</a>
      <a href="${WA_URL}" class="nav-mobile-cta" target="_blank">Start saving →</a>
      <button class="theme-toggle theme-toggle-mobile" aria-label="Toggle dark mode" title="Toggle dark mode">
        <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
        <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        <span class="theme-toggle-label">Toggle dark mode</span>
      </button>
    </div>
  `

  // Set active link from current filename
  const file = window.location.pathname.split('/').pop().replace('.html', '') || 'index'
  nav.querySelectorAll(`[data-page="${file}"]`).forEach(el => el.classList.add('active'))
}

// ── Shared CTA block ──────────────────────────────────
function buildCTA() {
  const el = document.querySelector('.cta-block')
  if (!el) return

  const d = el.dataset
  const eyebrow   = d.eyebrow   || 'Get started'
  const headline  = d.headline  || 'Your first goal<br>in 60 seconds.'
  const body      = d.body      || 'Free plan. No card. No app store.'
  const btnLabel  = d.btnLabel  || 'Start for free'
  const note      = d.note      || 'Free forever. No card needed.'
  const secLabel  = d.secLabel  || ''
  const secHref   = d.secHref   || ''

  const secondaryBtn = secLabel
    ? `<a href="${secHref}" class="btn btn-secondary btn-lg" style="color:rgba(255,255,255,0.7);border-color:rgba(255,255,255,0.2);">${secLabel}</a>`
    : ''

  el.outerHTML = `
<section class="section-sm">
  <div class="container">
    <div class="cta-section">
      <div>
        <span class="eyebrow" style="color:var(--amber);">${eyebrow}</span>
        <h2 class="headline">${headline}</h2>
        <p class="body-lg">${body}</p>
      </div>
      <div class="cta-actions">
        <a href="${CONFIG.waUrlHello}" class="btn btn-primary btn-lg" target="_blank">${btnLabel}</a>
        ${secondaryBtn}
        <p class="cta-note">${note}</p>
      </div>
    </div>
  </div>
</section>`
}

// ── Shared footer ─────────────────────────────────────
function buildFooter() {
  const footer = document.querySelector('footer.footer')
  if (!footer) return

  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-logo">thejarr<span class="nav-logo-dot" style="width:6px;height:6px;"></span></div>
      <div class="footer-links">
        <a href="index.html"    class="footer-link">HOME</a>
        <a href="features.html" class="footer-link">FEATURES</a>
        <a href="pricing.html"  class="footer-link">PRICING</a>
        <a href="manual.html"   class="footer-link">USER MANUAL</a>
        <a href="mailto:${CONFIG.email}" class="footer-link">CONTACT</a>
      </div>
      <div class="footer-legal" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <span>© ${CONFIG.year} ${CONFIG.brand} ${CONFIG.tagline} thejarr.co</span>
        <span style="display:flex;gap:20px;">
          <a href="privacy.html"       style="color:var(--amber);text-decoration:none;font-size:13px;">Privacy Policy</a>
          <a href="terms.html"         style="color:var(--amber);text-decoration:none;font-size:13px;">Terms of Service</a>
          <a href="data-deletion.html" style="color:var(--amber);text-decoration:none;font-size:13px;">Data Deletion</a>
        </span>
      </div>
    </div>
  `
}

buildNav()
buildCTA()
buildFooter()

// ── Theme toggle ──────────────────────────────────────
document.querySelectorAll('.theme-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const html = document.documentElement
    const isDark = html.getAttribute('data-theme') === 'dark'
    const next = isDark ? 'light' : 'dark'
    html.setAttribute('data-theme', next)
    localStorage.setItem('theme', next)
  })
})

// ── Sync any hardcoded WA links in HTML ───────────────
document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
  if (a.dataset.wa === 'upgrade') {
    a.href = CONFIG.waUrlUpgrade
  } else if (a.closest('.nav') || a.closest('.nav-mobile')) {
    a.href = CONFIG.waUrl
  } else {
    a.href = CONFIG.waUrlHello
  }
})

// ── Mobile nav toggle (runs after buildNav) ───────────
const navToggle = document.querySelector('.nav-toggle')
const navMobile = document.querySelector('.nav-mobile')

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open')
    navToggle.classList.toggle('open', isOpen)
    navToggle.setAttribute('aria-expanded', String(isOpen))
  })

  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open')
      navToggle.classList.remove('open')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })

  document.addEventListener('click', e => {
    if (!e.target.closest('.nav')) {
      navMobile.classList.remove('open')
      navToggle.classList.remove('open')
      navToggle.setAttribute('aria-expanded', 'false')
    }
  })
}
