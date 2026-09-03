import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Resume from './components/resume/Resume'
import About from './components/about/About'

const app = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Project />
      <Resume />
    </>
  )
}

export default app
