# Pedro Mendes — Portfolio

Fundação do novo portfólio pessoal, construída do zero com Astro, TypeScript e CSS. O projeto React/Vite anterior foi usado apenas como fonte de conteúdo e assets.

## Comandos

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

O ambiente local usado nesta etapa possui Node.js 22.14.0. Astro 7 requer Node.js 22.12.0 ou superior.

## Estrutura

```text
src/
├── assets/fonts/       # Geist Sans e Geist Mono auto-hospedadas
├── components/         # Componentes Astro por responsabilidade
├── data/               # Projetos, tecnologias, perfil e links sociais
├── layouts/            # BaseLayout e metadados
├── pages/              # Rotas Astro
├── styles/             # Tokens, tipografia e estilos globais
├── types/              # Contratos TypeScript
└── utils/              # Caminhos compatíveis com base URL

public/
├── icons/
└── images/
    ├── profile/
    └── projects/
```

## GitHub Pages

`site` e `base` permanecem sem valores fixos até o nome do repositório ser definido. Eles podem ser fornecidos no build por `ASTRO_SITE` e `ASTRO_BASE`:

```powershell
$env:ASTRO_SITE='https://usuario.github.io'
$env:ASTRO_BASE='/nome-do-repositorio'
npm run build
```

Os caminhos de assets usam `import.meta.env.BASE_URL`, portanto ficam preparados para publicação em um subdiretório do GitHub Pages.

## Conteúdo migrado

- 9 projetos e seus screenshots.
- 3 projetos marcados com `featured: true`.
- 20 tecnologias/tags normalizadas e agrupadas.
- GitHub, LinkedIn, Instagram, WhatsApp e e-mail.
- Foto de perfil e favicon do projeto anterior.

Normalizações de nomenclatura: `React 18` foi consolidado como `React`; `HTML5`/`HTML` como `HTML`; `CSS3`/`CSS` como `CSS`; e `shadcn-ui` como `shadcn/ui`.

## Pendências de conteúdo

- Derico Music Truck ainda não possui descrição, tecnologias, período ou demais metadados cadastrados.
- Conexões Sociológicas e Larmap possuem apenas as descrições curtas fornecidas nesta etapa; os demais metadados continuam ausentes.
- A URL da “Plataforma Educacional” contém `ironhack-project1-craze-maze`, embora o screenshot e a descrição sejam de uma plataforma educacional.
- O título “Professor Krambeek” diverge da grafia “Krambeck” exibida no screenshot e usada na URL.
- Repositórios GitHub, contribuição individual, categorias e status não estavam disponíveis para a maioria dos projetos; esses campos foram deixados ausentes.
