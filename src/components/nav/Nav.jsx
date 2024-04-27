import React from 'react'
import { useState } from 'react';
import './nav.css'

import { IoHomeOutline } from "react-icons/io5";
import { LuUser } from "react-icons/lu";
import { GoFileCode } from "react-icons/go";
import { CgWorkAlt } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href='#' onClick={ () => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><IoHomeOutline /></a>
      <a href='#about' onClick={ () => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><LuUser /></a>
      <a href='#experience' onClick={ () => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><CgWorkAlt /></a>
      <a href='#project' onClick={ () => setActiveNav('#project')} className={activeNav === '#project' ? 'active' : ''}><GoFileCode /></a>
      <a href='#resume' onClick={ () => setActiveNav('#resume')} className={activeNav === '#resume' ? 'active' : ''}><IoDocumentTextOutline /></a>
    </nav>
  )
}

export default Nav