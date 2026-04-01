import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Calculadora de Rendimento Universitário",
            subtitle: "Abril 2025 - hoje",
            srcImg: "/project1.png",
            description: "Calculadora de CRA Universitário é uma aplicação web moderna (React + TypeScript) para calcular e simular o desempenho acadêmico, incluindo CRA por período, curso e metas. Possui suporte a diferentes sistemas de avaliação, funciona como PWA (app Android offline) e oferece análise de progresso, persistência de dados e interface responsiva.",
            technologies: "Technologies: TypeScript, React 18, Vite, Tailwind CSS, shadcn/ui, Web App Manifest e LocalStorage.",
            websiteURL: "https://cruniversitario.vercel.app",
            codeURL: "https://github.com/",
        },
        {
            title: "Signal Forge",
            subtitle: "Jul 2024 - Dez 2024",
            srcImg: "/project2.png",
            description: "SignalForge é uma ferramenta web em Python (Streamlit) para análise de sinais e sistemas, com suporte aos domínios do tempo e da frequência. Oferece gráficos interativos, cálculos simbólicos e recursos como transformadas de Laplace, diagramas de Bode, análise de polos/zeros e ferramentas auxiliares.",
            technologies: "Technologies: Python, JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://signalforge.streamlit.app",
            codeURL: "https://github.com/",
        },
        {
            title: "Plataforma Educacional",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/project3.png",
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://pedromendes.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/PedroMendes/ironhack-project1-craze-maze",
        },
        {
            title: "Analisador Bombas d'agua",
            subtitle: "Jul 2019 - May 2019",
            srcImg: "/project4.png",
            description: "Python, interface gráfica (GUI), processamento e extração de dados de imagens, análise numérica de curvas hidráulicas, aplicação de cálculos de engenharia (como interseções e leis de afinidade) e geração automatizada de relatórios em Excel.",
            technologies: "Technologies: Python",
            websiteURL: "https://github.com/skinerbold/Graficos_Bomba_d-agua",
            codeURL: "https://github.com/skinerbold/Graficos_Bomba_d-agua",
        },
        {
            title: "Plataforma Professor Krambeek",
            subtitle: "Abril 2026",
            srcImg: "/project5.png",
            description: "A plataforma Krambeek se forma como uma landingpage profissional, feita para mostrar o trabalho do professor com intuito de divulgação e atração de novos alunos",
            technologies: "Technologies: Vite, TypeScript, React, shadcn-ui, Tailwind CSS",
            websiteURL: "https://krambeck.netlify.app",
            codeURL: "",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection
