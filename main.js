// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle')
const navMobile = document.querySelector('.nav-mobile')

if (navToggle && navMobile) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMobile.classList.toggle('open')
    navToggle.classList.toggle('open', isOpen)
    navToggle.setAttribute('aria-expanded', String(isOpen))
  })

  // Close menu when a link is tapped
  navMobile.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navMobile.classList.remove('open')
      navToggle.classList.remove('open')
      navToggle.setAttribute('aria-expanded', 'false')
    })
  })

  // Close menu when clicking outside the nav
  document.addEventListener('click', e => {
    if (!e.target.closest('.nav')) {
      navMobile.classList.remove('open')
      navToggle.classList.remove('open')
      navToggle.setAttribute('aria-expanded', 'false')
    }
  })
}
