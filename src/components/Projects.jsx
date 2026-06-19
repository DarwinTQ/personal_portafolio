import { useLang } from '../context/LanguageContext'
import { projects } from '../data/projects'

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  )
}

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="projects">
      <div className="container">
        <p className="section-label">{t('projects_label')}</p>
        <h2 className="section-title">{t('projects_title')}</h2>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article key={project.id} className="project-card">
              <div className="project-img-wrap">
                <img
                  src={project.image}
                  alt={t(`${project.key}_title`)}
                  className="project-img"
                  loading="lazy"
                />
                <div className="project-overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-overlay-link"
                  >
                    <GithubIcon />
                    {t('projects_view_code')}
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="project-overlay-link"
                    >
                      <ExternalIcon />
                      {t('projects_live')}
                    </a>
                  )}
                </div>
              </div>

              <div className="project-body">
                <span className="project-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="project-name">{t(`${project.key}_title`)}</h3>
                <p className="project-desc">{t(`${project.key}_description`)}</p>
                <div className="project-tech">
                  {project.tech.map((tag) => (
                    <span key={tag} className="tech-chip">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
