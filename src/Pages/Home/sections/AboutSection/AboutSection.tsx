import { useScrollReveal } from '../../../../hooks/useScrollReveal'

export default function AboutSection() {
  const header = useScrollReveal<HTMLDivElement>()
  const text1 = useScrollReveal<HTMLParagraphElement>()
  const text2 = useScrollReveal<HTMLParagraphElement>()
  const cards = useScrollReveal<HTMLDivElement>()

  const aboutCards = [
    {
      icon: '🏆',
      title: 'Experience',
      text: 'More than 3 years of front-end and back-end systems development',
    },
    {
      icon: '🎓',
      title: 'Education',
      text: 'Undergraduate in Mechanical Engineering at UFV',
    },
    {
      icon: '💡',
      title: 'Innovation',
      text: 'Bridging mechanical engineering with digital solutions',
    },
    {
      icon: '🚀',
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
