import './header.css'
import { scrollToHash } from '../../utils/lenis'

const handleNavClick = (hash) => (event) => {
    event.preventDefault();
    scrollToHash(hash);
};

const NavButtons = () => {
    return (
        <nav className='navbuttons' aria-label='Primary'>
            <a href='#about' onClick={handleNavClick('#about')} className='nav-text'>About</a>
            <a href='#experience' onClick={handleNavClick('#experience')} className='nav-text'>Experience</a>
            <a href='#project' onClick={handleNavClick('#project')} className='nav-text'>Projects</a>
            <a href='#resume' onClick={handleNavClick('#resume')} className='nav-text nav-text--pill'>Résumé</a>
        </nav>
    )
}

export default NavButtons
