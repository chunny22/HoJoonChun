import { motion } from 'framer-motion'

import './header.css'
import HeaderSocials from './HeaderSocials'
import NavButtons from './NavButtons'
import { scrollToHash } from '../../utils/lenis'

const intro = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const introItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const handleNavClick = (hash) => (event) => {
  event.preventDefault();
  scrollToHash(hash);
};

const Header = () => {
  return (
    <header id='header' className='hero'>
      <div className='hero__bar'>
        <a href='#header' onClick={handleNavClick('#header')} className='hero__logo'>jc.</a>
        <NavButtons />
      </div>

      <motion.div
        className='hero__content'
        variants={intro}
        initial='hidden'
        animate='show'>
          <motion.span className='hero__status' variants={introItem}>
            <span className='hero__status-dot' aria-hidden='true'></span>
            Open to new-grad roles
          </motion.span>
          <motion.h1 variants={introItem}>Justin Chun</motion.h1>
          <motion.p className='hero__lede' variants={introItem}>
            Software developer and uOttawa Computer Science graduate, based in Toronto.
          </motion.p>
          <motion.div className='hero__actions' variants={introItem}>
            <a href='#resume' onClick={handleNavClick('#resume')} className='btn btn--primary'>View résumé</a>
            <a href='mailto:chunny0501@gmail.com' className='btn'>Say hello</a>
            <HeaderSocials />
          </motion.div>
      </motion.div>
    </header>
  )
}

export default Header
