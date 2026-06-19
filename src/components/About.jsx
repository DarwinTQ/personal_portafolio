import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrap">
            <img
              src="/images/foto_Carnetdarwin.webp"
              alt="Darwin Turpo"
              className="about-image"
              loading="lazy"
            />
          </div>

          <div className="about-content">
            <div>
              <p className="section-label">{t('about_label')}</p>
              <h2 className="section-title">{t('about_title')}</h2>
            </div>

            <p className="about-text">{t('about_description')}</p>

            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">{t('about_stat1_num')}</span>
                <span className="stat-label">{t('about_stat1_label')}</span>
              </div>
              <div className="stat">
                <span className="stat-num">{t('about_stat2_num')}</span>
                <span className="stat-label">{t('about_stat2_label')}</span>
              </div>
              <div className="stat">
                <span className="stat-num">{t('about_stat3_num')}</span>
                <span className="stat-label">{t('about_stat3_label')}</span>
              </div>
            </div>

            <div>
              <a
                href="/documents/resume.pdf"
                download
                className="btn btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                {t('about_cv')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
