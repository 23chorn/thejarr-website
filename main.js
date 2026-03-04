// ── Config ────────────────────────────────────────────
const CONFIG = {
  waUrl:  'https://wa.me/971502065546',
  email:  'support@thejarr.co',
  year:   '2026',
  brand:  'thejarr.',
  tagline: 'Built in Dubai.',
}

const WA_URL = CONFIG.waUrl  // shorthand used in templates

// ── Shared nav ────────────────────────────────────────
function buildNav() {
  const nav = document.querySelector('nav.nav')
  if (!nav) return

  nav.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">thejarr.<span class="nav-logo-dot"></span></a>
      <div class="nav-links">
        <a href="index.html"    class="nav-link" data-page="index">HOME</a>
        <a href="features.html" class="nav-link" data-page="features">FEATURES</a>
        <a href="pricing.html"  class="nav-link" data-page="pricing">PRICING</a>
        <a href="manual.html"   class="nav-link" data-page="manual">USER MANUAL</a>
        <a href="${WA_URL}" class="nav-cta" target="_blank">Start saving →</a>
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
        <span class="eyebrow" style="color:rgba(245,166,35,0.8);">${eyebrow}</span>
        <h2 class="headline">${headline}</h2>
        <p class="body-lg">${body}</p>
      </div>
      <div class="cta-actions">
        <a href="${WA_URL}" class="btn btn-primary btn-lg" target="_blank">${btnLabel}</a>
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
      <div class="footer-logo">thejarr.<span class="nav-logo-dot" style="width:6px;height:6px;"></span></div>
      <div class="footer-links">
        <a href="index.html"    class="footer-link">HOME</a>
        <a href="features.html" class="footer-link">FEATURES</a>
        <a href="pricing.html"  class="footer-link">PRICING</a>
        <a href="manual.html"   class="footer-link">USER MANUAL</a>
        <a href="mailto:${CONFIG.email}" class="footer-link">CONTACT</a>
      </div>
      <p class="footer-legal">© ${CONFIG.year} ${CONFIG.brand} ${CONFIG.tagline} thejarr.co</p>
    </div>
  `
}

buildNav()
buildCTA()
buildFooter()

// ── Sync any hardcoded WA links in HTML ───────────────
document.querySelectorAll('a[href*="wa.me"]').forEach(a => { a.href = CONFIG.waUrl })

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
