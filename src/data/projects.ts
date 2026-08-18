import type { Project } from '../types/project'

export const projects = [
  {
    slug: 'rendimento-universitario',
    title: 'Calculadora de Rendimento Universitário',
    period: {
      start: '2025-04',
      end: 'present',
      label: 'Abril 2025 — hoje',
    },
    shortDescription:
      'Aplicação web para calcular e simular o desempenho acadêmico, incluindo CRA por período, curso e metas.',
    description:
      'Calculadora de CRA Universitário é uma aplicação web moderna (React + TypeScript) para calcular e simular o desempenho acadêmico, incluindo CRA por período, curso e metas. Possui suporte a diferentes sistemas de avaliação, funciona como PWA (app Android offline) e oferece análise de progresso, persistência de dados e interface responsiva.',
    technologies: ['TypeScript', 'React', 'Vite', 'Tailwind CSS', 'shadcn/ui'],
    image: {
      src: 'images/projects/rendimento-universitario/cover.png',
      alt: 'Tela da Calculadora de Rendimento Universitário',
      width: 1518,
      height: 834,
    },
    links: {
      website: 'https://cruniversitario.vercel.app',
    },
    featured: false,
  },
  {
    slug: 'professor-krambeek',
    title: 'Plataforma Professor Krambeek',
    period: {
      start: '2026-04',
      label: 'Abril 2026',
    },
    shortDescription:
      'Landing page profissional criada para divulgar o trabalho do professor e atrair novos alunos.',
    description:
      'A plataforma Krambeek se forma como uma landing page profissional, feita para mostrar o trabalho do professor com intuito de divulgação e atração de novos alunos.',
    technologies: ['Vite', 'TypeScript', 'React', 'shadcn/ui', 'Tailwind CSS'],
    image: {
      src: 'images/projects/professor-krambeek/cover.png',
      alt: 'Página inicial da Plataforma Professor Krambeek',
      width: 1891,
      height: 838,
    },
    links: {
      website: 'https://krambeck.netlify.app',
    },
    featured: false,
  },
  {
    slug: 'plataforma-educacional',
    title: 'Plataforma Educacional',
    period: {
      start: '2024',
      label: '2024',
    },
    shortDescription:
      'Plataforma educacional interativa com dashboard para alunos, gestão de cursos, atividades e acompanhamento de progresso acadêmico.',
    description:
      'Plataforma Educacional Interativa completa com dashboard para alunos, gestão de cursos, atividades e acompanhamento de progresso acadêmico. Interface moderna com sidebar responsiva e sistema de notificações.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Canvas Graphics'],
    image: {
      src: 'images/projects/plataforma-educacional/cover.png',
      alt: 'Dashboard da Plataforma Educacional Interativa',
      width: 1920,
      height: 865,
    },
    links: {
      website: 'https://pedromendes.github.io/ironhack-project1-craze-maze/index.html',
    },
    featured: false,
  },
  {
    slug: 'portal-ana-fonseca',
    title: 'Portal Profª Ana Fonseca',
    period: {
      start: '2026-04',
      label: 'Abril 2026',
    },
    shortDescription:
      'Portal digital para centralizar e compartilhar conteúdos especializados em Sociologia e Libras.',
    description:
      'Um portal digital completo e personalizado desenvolvido para centralizar e compartilhar conteúdos especializados em Sociologia e Libras. O projeto integra um portfólio profissional de alto nível com um sistema dinâmico de postagens, permitindo que a professora publique e organize seus materiais didáticos de forma totalmente independente através de um painel administrativo intuitivo.',
    technologies: ['React', 'TypeScript', 'HTML', 'CSS', 'SQL'],
    image: {
      src: 'images/projects/portal-ana-fonseca/cover.png',
      alt: 'Página Sobre do Portal Profª Ana Fonseca',
      width: 1878,
      height: 866,
    },
    links: {
      website: 'https://profanafonseca.netlify.app/',
    },
    featured: false,
  },
  {
    slug: 'signal-forge',
    title: 'Signal Forge',
    period: {
      start: '2024-07',
      end: '2024-12',
      label: 'Jul 2024 — Dez 2024',
    },
    shortDescription:
      'Ferramenta web em Python para análise de sinais e sistemas nos domínios do tempo e da frequência.',
    description:
      'SignalForge é uma ferramenta web em Python (Streamlit) para análise de sinais e sistemas, com suporte aos domínios do tempo e da frequência. Oferece gráficos interativos, cálculos simbólicos e recursos como transformadas de Laplace, diagramas de Bode, análise de polos/zeros e ferramentas auxiliares.',
    technologies: ['Python', 'Streamlit', 'JavaScript', 'HTML', 'CSS'],
    image: {
      src: 'images/projects/signal-forge/cover.png',
      alt: 'Interface da ferramenta SignalForge',
      width: 1797,
      height: 801,
    },
    links: {
      website: 'https://signalforge.streamlit.app',
    },
    featured: false,
  },
  {
    slug: 'analisador-bombas',
    title: "Analisador de Bombas d'água",
    period: {
      start: '2024',
      label: '2024',
    },
    shortDescription:
      'Aplicação em Python com interface gráfica, extração de dados de imagens, análise de curvas hidráulicas e geração de relatórios em Excel.',
    description:
      'Python, interface gráfica (GUI), processamento e extração de dados de imagens, análise numérica de curvas hidráulicas, aplicação de cálculos de engenharia (como interseções e leis de afinidade) e geração automatizada de relatórios em Excel.',
    technologies: ['Python', 'GUI', 'Data Analysis'],
    image: {
      src: 'images/projects/analisador-bombas/cover.png',
      alt: "Interface do Analisador de Bombas d'água",
      width: 1200,
      height: 800,
    },
    links: {
      github: 'https://github.com/skinerbold/Graficos_Bomba_d-agua',
    },
    featured: true,
    featuredOrder: 4,
  },
  {
    slug: 'derico-music-truck',
    title: 'Derico Music Truck',
    image: {
      src: 'images/projects/Derico Music Truck .png',
      alt: 'Captura de tela do projeto Derico Music Truck',
      width: 1867,
      height: 767,
    },
    links: {
      website: 'https://music-truck-derico.vercel.app/',
    },
    featured: true,
    featuredOrder: 2,
  },
  {
    slug: 'conexoes-sociologicas',
    title: 'Conexões Sociológicas',
    shortDescription: 'Jogo web interativo.',
    image: {
      src: 'images/projects/conexoes sociologicas.png',
      alt: 'Captura de tela do jogo web Conexões Sociológicas',
      width: 1767,
      height: 798,
    },
    links: {
      website: 'https://conexoes-sociologicas.vercel.app/',
    },
    featured: true,
    featuredOrder: 3,
  },
  {
    slug: 'larmap',
    title: 'Larmap',
    shortDescription:
      'Plataforma imobiliária que facilita a descoberta de imóveis por meio de busca geográfica e visualização em mapa interativo.',
    image: {
      src: 'images/projects/Larmap.png',
      alt: 'Captura de tela da plataforma imobiliária Larmap',
      width: 1878,
      height: 804,
    },
    links: {
      website: 'https://larmap.com.br/',
    },
    featured: true,
    featuredOrder: 1,
  },
] satisfies Project[]

export const featuredProjects = projects.filter((project) => project.featured)
