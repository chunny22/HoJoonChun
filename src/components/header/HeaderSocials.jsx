import React from 'react'
import { motion } from 'framer-motion'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <motion.a 
        href='https://www.linkedin.com/in/justin-chun/' target='_blank' rel='noopener noreferrer' className='hs-button'
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -400, opacity: 0 }}
        transition={{ type: 'spring', damping: 50, stiffness: 500, duration: 1, delay: 1.9 }}>
        <IoLogoLinkedin />
      </motion.a>
      <motion.a 
        href='https://github.com/chunny22' target='_blank' rel='noopener noreferrer' className='hs-button'
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -400, opacity: 0 }}
        transition={{ type: 'spring', damping: 50, stiffness: 500, duration: 1, delay: 1.7 }}>  
          <FaGithub />
      </motion.a>
      <motion.a 
        href='mailto: chunny0501@gmail.com' className='hs-button'
        animate={{ x: 0, opacity: 1 }}
        initial={{ x: -500, opacity: 0 }}
        transition={{ type: 'spring', damping: 50, stiffness: 500, duration: 1, delay: 1.5 }}>
          <MdEmail />
      </motion.a>
    </div>
  )
}

export default HeaderSocials