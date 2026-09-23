import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from 'react-icons/fa';

import './header.css'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
      <a
        href='https://www.linkedin.com/in/justin-chun/' target='_blank' rel='noopener noreferrer'
        className='hs-button' aria-label='LinkedIn'>
          <IoLogoLinkedin />
      </a>
      <a
        href='https://github.com/chunny22' target='_blank' rel='noopener noreferrer'
        className='hs-button' aria-label='GitHub'>
          <FaGithub />
      </a>
    </div>
  )
}

export default HeaderSocials
