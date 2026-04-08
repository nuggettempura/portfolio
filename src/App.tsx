import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <HeroSection />
      <Skills />
      <WorkExperience />
      <Contact />
    </div>
  )
}

export default App
