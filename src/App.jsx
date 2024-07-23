import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Experience from './components/experience/Experience'
import Project from './components/project/Project'
import Resume from './components/resume/Resume'
import Footer from './components/footer/Footer'
import About from './components/about/About'

const app = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);

  return (
    <>
      <Header ref={headerRef} />
      <motion.div
        className='navBar'
        animate={{ opacity: isHeaderInView ? 0 : 1, transform: isHeaderInView ? 'translateY(0px)' : 'translateY(-50px)'  }}
        initial={{ opacity: 0, transform: 'translateY(50px)' }}
        transition={{ type: 'spring', duration: 2 }}>
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
