import React from 'react'
import './header.css'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href='https://www.linkedin.com/in/justin-chun/' target='_blank' rel='noopener noreferrer' className='hs-button'><IoLogoLinkedin /></a>
        <a href='https://github.com/chunny22' target='_blank' rel='noopener noreferrer' className='hs-button'><FaGithub /></a>
        <a href='mailto: chunny0501@gmail.com' className='hs-button'><MdEmail /></a>
    </div>
  )
}

export default HeaderSocials