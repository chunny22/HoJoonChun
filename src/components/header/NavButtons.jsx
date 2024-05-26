import React from 'react'
import { motion } from 'framer-motion'

import './header.css'

const NavButtons = () => {
    return (
        <div className='navbuttons'>
            <a href='#about' className='nav-text'>About Me</a>
            <a href='#experience' className='nav-text'>Experiences</a>
            <a href='#project' className='nav-text'>Projects</a>
            <a href='#resume' className='nav-text'>Resume</a>
        </div>
    )
}

export default NavButtons