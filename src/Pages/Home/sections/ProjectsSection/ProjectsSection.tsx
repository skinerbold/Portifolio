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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://cruniversitario.vercel.app",
            codeURL: "https://github.com/",
        },
        {
            title: "Signal Forge",
            subtitle: "Jul 2024 - Dez 2024",
            srcImg: "/project2.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta semper velit vel rutrum. Aliquam vulputate, nisi eget tristique mattis, nisi sem faucibus eros, a auctor felis sem ut mauris. Phasellus a ultrices elit. Curabitur ut diam eu orci auctor pretium.",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
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
            description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game",
            technologies: "Technologies: JavaScript, HTML, CSS, Canvas Graphics",
            websiteURL: "https://pedromendes.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/PedroMendes/ironhack-project1-craze-maze",
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
