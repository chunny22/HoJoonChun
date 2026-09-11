import './header.css'
import { scrollToHash } from '../../utils/lenis'

const handleNavClick = (hash) => (event) => {
    event.preventDefault();
    scrollToHash(hash);
};

const NavButtons = () => {
    return (
        <div className='navbuttons'>
            <a href='#about' onClick={handleNavClick('#about')} className='nav-text'>About Me</a>
            <a href='#experience' onClick={handleNavClick('#experience')} className='nav-text'>Experiences</a>
            <a href='#project' onClick={handleNavClick('#project')} className='nav-text'>Projects</a>
            <a href='#resume' onClick={handleNavClick('#resume')} className='nav-text'>Resume</a>
        </div>
    )
}

export default NavButtons
