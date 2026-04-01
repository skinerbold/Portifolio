import { useScrollReveal } from '../../../../hooks/useScrollReveal'

const CodeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
)

const GraduationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 1.66 2.69 3 6 3s6-1.34 6-3v-5" />
  </svg>
)

const CpuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M15 2v2M15 20v2M2 15h2M2 9h2M20 15h2M20 9h2M9 2v2M9 20v2" />
  </svg>
)

const TerminalIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5" />
    <line x1="12" y1="19" x2="20" y2="19" />
  </svg>
)

export default function AboutSection() {
  const header = useScrollReveal<HTMLDivElement>()
  const text1 = useScrollReveal<HTMLParagraphElement>()
  const text2 = useScrollReveal<HTMLParagraphElement>()
  const cards = useScrollReveal<HTMLDivElement>()

  const aboutCards = [
    {
      icon: <CodeIcon />,
      title: 'Experience',
      text: 'More than 3 years of front-end and back-end systems development',
    },
    {
      icon: <GraduationIcon />,
      title: 'Education',
      text: 'Undergraduate in Mechanical Engineering at UFV',
    },
    {
      icon: <CpuIcon />,
      title: 'Innovation',
      text: 'Bridging mechanical engineering with digital solutions',
    },
    {
      icon: <TerminalIcon />,
      title: 'Passion',
      text: 'Turning ideas into reality through modern web technologies',
    },
  ]

  return (
    <section className="about" id="about">
      <div className="container">
        <div ref={header.ref} className={`reveal ${header.isVisible ? 'visible' : ''}`} style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Crafting digital <span className="gradient-text">experiences</span>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <p ref={text1.ref} className={`reveal ${text1.isVisible ? 'visible' : ''}`}>
              Hello! I'm Pedro, better known as <strong>@SkinerBold</strong> on the internet. 
              I'm a Mechanical Engineering student at the Federal University of Viçosa and a 
              Full Stack developer with over 3 years of experience.
            </p>
            <p ref={text2.ref} className={`reveal ${text2.isVisible ? 'visible' : ''} delay-2`}>
              My passion for technology led me to dive into the programming world, 
              where I found a unique way to connect the physical world of engineering 
              with the digital universe. I'm constantly working to create solutions 
              that make a difference and positively impact people's lives.
            </p>
          </div>

          <div ref={cards.ref} className={`about__cards ${cards.isVisible ? 'cards-visible' : ''}`}>
            {aboutCards.map((card, i) => (
              <div
                key={card.title}
                className={`about__card reveal ${cards.isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1 + 0.2}s` }}
              >
                <div className="about__card-icon">{card.icon}</div>
                <div className="about__card-title">{card.title}</div>
                <div className="about__card-text">{card.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
