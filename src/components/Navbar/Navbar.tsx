import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          PM<span className="gradient-text">.</span>
        </a>

        <div className="navbar__links">
          <button className="navbar__link" onClick={() => scrollTo('about')}>About</button>
          <button className="navbar__link" onClick={() => scrollTo('skills')}>Skills</button>
          <button className="navbar__link" onClick={() => scrollTo('projects')}>Projects</button>
          <button className="navbar__link" onClick={() => scrollTo('footer')}>Contact</button>
        </div>

        <div
          className={`navbar__mobile-toggle ${mobileOpen ? 'open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span /><span /><span />
        </div>
      </div>

      <div className={`navbar__mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <button onClick={() => scrollTo('about')}>About</button>
        <button onClick={() => scrollTo('skills')}>Skills</button>
        <button onClick={() => scrollTo('projects')}>Projects</button>
        <button onClick={() => scrollTo('footer')}>Contact</button>
      </div>
    </nav>
  )
}