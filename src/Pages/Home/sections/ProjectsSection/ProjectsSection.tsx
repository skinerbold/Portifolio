import { useScrollReveal } from '../../../../hooks/useScrollReveal'

interface Project {
  title: string
  subtitle: string
  srcImg: string
  description: string
  technologies: string[]
  websiteURL: string
}

const projects: Project[] = [
  {
    title: 'Calculadora de Rendimento Universitário',
    subtitle: 'Abril 2025 — hoje',
    srcImg: '/project1.png',
    description:
      'Calculadora de CRA Universitário é uma aplicação web moderna (React + TypeScript) para calcular e simular o desempenho acadêmico, incluindo CRA por período, curso e metas. Possui suporte a diferentes sistemas de avaliação, funciona como PWA (app Android offline) e oferece análise de progresso, persistência de dados e interface responsiva.',
    technologies: ['TypeScript', 'React 18', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    websiteURL: 'https://cruniversitario.vercel.app',
  },
  {
    title: 'Signal Forge',
    subtitle: 'Jul 2024 — Dez 2024',
    srcImg: '/project2.png',
    description:
      'SignalForge é uma ferramenta web em Python (Streamlit) para análise de sinais e sistemas, com suporte aos domínios do tempo e da frequência. Oferece gráficos interativos, cálculos simbólicos e recursos como transformadas de Laplace, diagramas de Bode, análise de polos/zeros e ferramentas auxiliares.',
    technologies: ['Python', 'Streamlit', 'JavaScript', 'HTML', 'CSS'],
    websiteURL: 'https://signalforge.streamlit.app',
  },
  {
    title: 'Plataforma Educacional',
    subtitle: '2024',
    srcImg: '/project3.png',
    description:
      'Plataforma Educacional Interativa completa com dashboard para alunos, gestão de cursos, atividades e acompanhamento de progresso acadêmico. Interface moderna com sidebar responsiva e sistema de notificações.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Canvas Graphics'],
    websiteURL: 'https://pedromendes.github.io/ironhack-project1-craze-maze/index.html',
  },
  {
    title: 'Analisador Bombas d\'água',
    subtitle: '2024',
    srcImg: '/project4.png',
    description:
      'Python, interface gráfica (GUI), processamento e extração de dados de imagens, análise numérica de curvas hidráulicas, aplicação de cálculos de engenharia (como interseções e leis de afinidade) e geração automatizada de relatórios em Excel.',
    technologies: ['Python', 'GUI', 'Data Analysis'],
    websiteURL: 'https://github.com/skinerbold/Graficos_Bomba_d-agua',
  },
  {
    title: 'Plataforma Professor Krambeek',
    subtitle: 'Abril 2026',
    srcImg: '/project5.png',
    description:
      'A plataforma Krambeek se forma como uma landing page profissional, feita para mostrar o trabalho do professor com intuito de divulgação e atração de novos alunos.',
    technologies: ['Vite', 'TypeScript', 'React', 'shadcn-ui', 'Tailwind CSS'],
    websiteURL: 'https://krambeck.netlify.app',
  },
  {
    title: 'Portal Profª Ana Fonseca',
    subtitle: 'Abril 2026',
    srcImg: '/project6.png',
    description:
      'Um portal digital completo e personalizado desenvolvido para centralizar e compartilhar conteúdos especializados em Sociologia e Libras. O projeto integra um portfólio profissional de alto nível com um sistema dinâmico de postagens, permitindo que a professora publique e organize seus materiais didáticos de forma totalmente independente através de um painel administrativo intuitivo.',
    technologies: ['React', 'TypeScript', 'HTML5', 'CSS3', 'SQL'],
    websiteURL: 'https://profanafonseca.netlify.app/',
  },
]

function ProjectShowcase({ project, index }: { project: Project; index: number }) {
  const reveal = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

  return (
    <div
      ref={reveal.ref}
      className={`project-showcase reveal-scale ${reveal.isVisible ? 'visible' : ''}`}
    >
      <div className="project-showcase__image-wrapper">
        <img
          src={project.srcImg}
          alt={project.title}
          className="project-showcase__image"
          loading="lazy"
        />
      </div>

      <div className="project-showcase__info">
        <span className="project-showcase__date">{project.subtitle}</span>
        <h3 className="project-showcase__title">{project.title}</h3>
        <p className="project-showcase__description">{project.description}</p>

        <div className="project-showcase__tech">
          {project.technologies.map((tech) => (
            <span key={tech} className="project-showcase__tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <a
          href={project.websiteURL}
          target="_blank"
          rel="noopener noreferrer"
          className="project-showcase__link"
        >
          View Project
          <svg
            className="project-showcase__link-arrow"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const header = useScrollReveal<HTMLDivElement>()

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div ref={header.ref} className={`projects__header reveal ${header.isVisible ? 'visible' : ''}`}>
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectShowcase key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
