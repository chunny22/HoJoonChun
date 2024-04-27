import React from 'react'
import { motion } from 'framer-motion'

import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import NavButtons from './NavButtons'

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <motion.div 
          className='container intro__container'
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -50, opacity: 0 }}
          transition={{ type: 'tween', duration: 1 }}>
            <h5>Hello! My name is</h5>
            <h1>Justin Chun</h1>
        </motion.div>
        
        <motion.div
          className='container cta__container'
          animate={{ x: 0, opacity: 1 }}
          initial={{ x: -50,  opacity: 0 }}
          transition={{ type: 'tween', duration: 1, delay: 0.7 }}
        ><CTA /></motion.div>

        <motion.div className='container socials__container'>
          <HeaderSocials />
        </motion.div>

        <div className='container navbuttons__container'><NavButtons /></div>
      </div>
    </header>
  )
}

export default Header