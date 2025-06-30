import { Box, Card, Container, Grid, Typography, styled } from "@mui/material"
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import SchoolIcon from '@mui/icons-material/School';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Javascript", "Typescript", "React", "Next", "Git", "HTML", "CSS", "Laravel", "AWS", "Python", "Material UI", "NODE JS"
    ]

    return (
        <>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h2" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <WorkspacePremiumIcon />
                                <Typography textAlign="center" fontWeight={600}>Experience</Typography>
                                <Typography textAlign="center">More than 3 years of</Typography>
                                <Typography textAlign="center">front-end and back-end</Typography>
                                <Typography textAlign="center">systems development</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Undergraduate in</Typography>
                                <Typography textAlign="center">Mechanical Engineering</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                    <Grid item xs={9} md={2.5}>
                        <AnimationComponent moveDirection="right">
                            <StyledCard variant="outlined">
                                <EmojiObjectsIcon />
                                <Typography textAlign="center" fontWeight={600}>Innovation</Typography>
                                <Typography textAlign="center">Bridging physical</Typography>
                                <Typography textAlign="center">engineering with</Typography>
                                <Typography textAlign="center">digital solutions</Typography>
                            </StyledCard>
                        </AnimationComponent>
                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography>
                        Hello! I'm Pedro, better known as @SkinerBold on the internet.
                        <br /><br />
                        I'm a Mechanical Engineering student at the Federal University of Viçosa and a Full Stack developer with over 3 years of experience. My passion for technology led me to dive into the programming world, where I found a unique way to connect the physical world of engineering with the digital universe.
                        <br /><br />
                        As a programmer, I have experience in both front-end and back-end development, constantly working to create solutions that make a difference. I believe technology has the power to transform ideas into reality, and that's what motivates me every day to keep learning and evolving.
                        <br /><br />
                        When I'm not coding or studying, I enjoy exploring new technologies and thinking about how I can use my knowledge to solve real problems and positively impact people's lives.
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid item key={index} xs={5} sm={4} md={2} lg={2}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default AboutSection
