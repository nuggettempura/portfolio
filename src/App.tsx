import { useEffect, useState } from 'react'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import 'swiper/swiper-bundle.css'
import 'swiper/swiper.css';

type Theme = 'dark' | 'light';

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) ?? 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme])

  const handleToggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <div className='app'>
      <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
      <HeroSection />
      <Skills />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
