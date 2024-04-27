import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Resume from './components/resume/Resume'
import Footer from './components/footer/Footer'
import About from './components/about/About'

const app = () => {
  return (
    <>
      <Header />
      <div><Nav /></div>
      <About />
      <Experience />
      <Project />
      <Resume />
      <Footer /> 
    </>
  )
}

export default app
