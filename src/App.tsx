import Navbar from './components/Navbar/Navbar'
import HeroSection from './Pages/Home/sections/HeroSection/HeroSection'
import AboutSection from './Pages/Home/sections/AboutSection/AboutSection'
import SkillsSection from './Pages/Home/sections/SkillsSection/SkillsSection'
import ProjectsSection from './Pages/Home/sections/ProjectsSection/ProjectsSection'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}
