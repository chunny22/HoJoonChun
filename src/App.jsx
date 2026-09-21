import { useEffect } from 'react'
import Lenis from 'lenis'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Resume from './components/resume/Resume'
import About from './components/about/About'
import { setLenis } from './utils/lenis'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 2,
    });
    setLenis(lenis);

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <>
      <Header />
      <About />
      <Experience />
      <Project />
      <Resume />
      <Nav />
    </>
  )
}

export default App
