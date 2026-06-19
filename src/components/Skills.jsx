import { useLang } from '../context/LanguageContext'
import { skillCategories } from '../data/skills'

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="skills">
      <div className="container">
        <p className="section-label">{t('skills_label')}</p>
        <h2 className="section-title">{t('skills_title')}</h2>

        <div className="skills-categories">
          {skillCategories.map((cat) => (
            <div key={cat.key}>
              <p className="skill-category-label">{t(cat.key)}</p>
              <div className="skill-grid">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="skill-tag">
                    <span
                      className="skill-dot"
                      style={{ background: skill.color }}
                    />
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
