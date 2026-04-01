import { useEffect, useState } from 'react'

export default function HeroSection() {
  const roles = [
    'Full Stack Developer',
    'React Specialist',
    'Python Engineer',
    'UI/UX Enthusiast',
  ]
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const currentRole = roles[roleIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, charIndex + 1))
        setCharIndex(charIndex + 1)
        if (charIndex + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        setDisplayText(currentRole.slice(0, charIndex - 1))
        setCharIndex(charIndex - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setRoleIndex((roleIndex + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, roleIndex])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero__bg-grid" />
      <div className="hero__glow hero__glow--blue" />
      <div className="hero__glow hero__glow--purple" />

      <div className="hero__content">
        <div className="hero__avatar-wrapper">
          <div className="hero__avatar-ring" />
          <img src="/avatar.jpg" alt="Pedro Mendes" className="hero__avatar" />
        </div>

        <p className="hero__greeting">Hello, I'm</p>

        <h1 className="hero__name">
          Pedro <span className="gradient-text">Mendes</span>
        </h1>

        <p className="hero__role">
          <span className="hero__typewriter">{displayText}</span>
        </p>

        <p className="hero__tagline">
          Bridging physical engineering with digital solutions.
          Building modern, performant web experiences.
        </p>

        <div className="hero__cta-group">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <button className="btn-secondary" onClick={() => window.open('mailto:skinerbold@gmail.com')}>
            Contact Me
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="hero__scroll-indicator">
        <span>Scroll</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
