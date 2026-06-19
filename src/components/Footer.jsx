import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  function scrollTo(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">{t('footer_rights')}</p>
        <nav className="footer-links">
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>{t('nav_about')}</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects') }}>{t('nav_projects')}</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>{t('nav_contact')}</a>
        </nav>
      </div>
    </footer>
  )
}
