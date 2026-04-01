import { useScrollReveal } from '../../../../hooks/useScrollReveal'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Python', 'HTML5', 'CSS3', 'Git', 'AWS',
  'Laravel', 'Material UI', 'Tailwind CSS', 'Vite', 'SQL',
]

export default function SkillsSection() {
  const header = useScrollReveal<HTMLDivElement>()

  // Duplicate array for seamless loop
  const row1 = [...skills, ...skills]
  const row2 = [...skills.slice().reverse(), ...skills.slice().reverse()]

  return (
    <section className="skills" id="skills">
      <div ref={header.ref} className={`skills__header reveal ${header.isVisible ? 'visible' : ''}`}>
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title">Skills & <span className="gradient-text">Technologies</span></h2>
      </div>

      <div className="skills__marquee-wrapper">
        <div className="skills__marquee skills__marquee--forward">
          {row1.map((skill, i) => (
            <div key={`f-${i}`} className="skills__badge">
              <span className="skills__badge-dot" />
              {skill}
            </div>
          ))}
        </div>
        <div className="skills__marquee skills__marquee--reverse">
          {row2.map((skill, i) => (
            <div key={`r-${i}`} className="skills__badge">
              <span className="skills__badge-dot" />
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
