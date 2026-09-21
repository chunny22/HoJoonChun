import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './nav.css'
import { scrollToHash } from '../../utils/lenis'

import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { GoFileCode } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#header');
  const [showNav, setShowNav] = useState(false);

  const handleNavClick = (hash) => (event) => {
    event.preventDefault();
    setActiveNav(hash);
    scrollToHash(hash);
  };

  useEffect(() => {
    const header = document.querySelector('#header');
    if (!header) return;

    const handleScroll = () => setShowNav(header.getBoundingClientRect().top < 0);
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      animate={showNav ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{ pointerEvents: showNav ? 'auto' : 'none' }}>
      <a href='#header' onClick={handleNavClick('#header')} className={activeNav === '#header' ? 'active' : ''}><IoHomeOutline /></a>
      <a href='#about' onClick={handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}><LuUser /></a>
      <a href='#experience' onClick={handleNavClick('#experience')} className={activeNav === '#experience' ? 'active' : ''}><CgWorkAlt /></a>
      <a href='#project' onClick={handleNavClick('#project')} className={activeNav === '#project' ? 'active' : ''}><GoFileCode /></a>
      <a href='#resume' onClick={handleNavClick('#resume')} className={activeNav === '#resume' ? 'active' : ''}><IoDocumentTextOutline /></a>
    </motion.nav>
  )
}

export default Nav