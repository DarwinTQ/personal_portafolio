import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'

const NAV_KEYS = ['nav_home', 'nav_about', 'nav_skills', 'nav_projects', 'nav_contact']
const NAV_HREFS = ['#home', '#about', '#skills', '#projects', '#contact']

export default function Navbar() {
  const { lang, toggleLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)

      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function handleNavClick(e, href) {
    e.preventDefault()
    const id = href.replace('#', '')
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner">
          <span className="nav-logo">Darwin Turpo</span>

          <ul className="nav-links">
            {NAV_KEYS.map((key, i) => (
              <li key={key}>
                <a
                  href={NAV_HREFS[i]}
                  className={active === NAV_HREFS[i].replace('#', '') ? 'active' : ''}
                  onClick={(e) => handleNavClick(e, NAV_HREFS[i])}
                >
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <div className="lang-toggle">
              <button
                className={`lang-btn${lang === 'es' ? ' active' : ''}`}
                onClick={() => toggleLang('es')}
              >
                ES
              </button>
              <button
                className={`lang-btn${lang === 'en' ? ' active' : ''}`}
                onClick={() => toggleLang('en')}
              >
                EN
              </button>
            </div>

            <button
              className={`nav-hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {NAV_KEYS.map((key, i) => (
          <a
            key={key}
            href={NAV_HREFS[i]}
            onClick={(e) => handleNavClick(e, NAV_HREFS[i])}
          >
            {t(key)}
          </a>
        ))}
      </div>
    </>
  )
}
