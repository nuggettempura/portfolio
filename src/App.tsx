import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.css';


function App() {

  return (
    <div className='app'>
      <Navbar />
      <HeroSection />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
