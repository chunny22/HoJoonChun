import React from 'react'
import { motion } from 'framer-motion'

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
      <motion.div
        className='navBar'
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -50, opacity: 0 }}
        transition={{ type: 'tween', duration: 2 }}>
          <Nav />
      </motion.div>
      <About />
      <Experience />
      <Project />
      <Resume />
      <Footer /> 
    </>
  )
}

export default app
