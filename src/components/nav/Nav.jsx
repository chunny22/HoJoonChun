import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './nav.css'

import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { GoFileCode } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isPastHeader, setIsPastHeader] = useState(false);

  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHeader(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(header);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      animate={isPastHeader ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 80, mass: 1, duration: 2 }}
      style={{ pointerEvents: isPastHeader ? 'auto' : 'none' }}>
      <a href='#' onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href='#about' onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><LuUser /></a>
      <a href='#experience' onClick={ () => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><CgWorkAlt /></a>
      <a href='#project' onClick={ () => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><GoFileCode /></a>
      <a href='#resume' onClick={ () => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}><IoDocumentTextOutline /></a>
    </motion.nav>
  )
}

export default Nav