import './footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <span>© {new Date().getFullYear()} Justin Chun</span>
      <div className='footer__links'>
        <a href='https://www.linkedin.com/in/justin-chun/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
        <a href='https://github.com/chunny22' target='_blank' rel='noopener noreferrer'>GitHub</a>
        <a href='mailto:chunny0501@gmail.com'>Email</a>
      </div>
    </footer>
  )
}

export default Footer
