import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'
import './nav.css'
import { scrollToHash } from '../../utils/lenis'

import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { GoFileCode } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

const links = [
  { hash: '#header', label: 'Home', Icon: IoHomeOutline },
  { hash: '#about', label: 'About', Icon: LuUser },
  { hash: '#experience', label: 'Experience', Icon: CgWorkAlt },
  { hash: '#project', label: 'Projects', Icon: GoFileCode },
  { hash: '#resume', label: 'Résumé', Icon: IoDocumentTextOutline },
];

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

  // Highlight whichever section crosses the middle of the viewport
  useEffect(() => {
    const sections = links
      .map(({ hash }) => document.querySelector(hash))
      .filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveNav(`#${entry.target.id}`);
      });
    }, { rootMargin: '-50% 0px -50% 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      className='dock'
      aria-label='Sections'
      animate={showNav ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{ pointerEvents: showNav ? 'auto' : 'none' }}>
      {links.map(({ hash, label, Icon }) => (
        <a
          key={hash}
          href={hash}
          onClick={handleNavClick(hash)}
          aria-label={label}
          title={label}
          aria-current={activeNav === hash ? 'true' : undefined}
          className={activeNav === hash ? 'active' : ''}>
            <Icon />
        </a>
      ))}
    </motion.nav>
  )
}

export default Nav
