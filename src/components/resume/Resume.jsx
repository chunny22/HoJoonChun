import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import './resume.css';
import ResumePDF from '../../assets/resume.pdf';

const Resume = () => {

  return (
    <section id='resume' className='panel resume'>
      <div className='resume__intro'>
        <h2 className='panel__heading'>Résumé</h2>
        <p>Grab a copy of my résumé, or preview it here.</p>
        <div className='resume__actions'>
          <a href={ResumePDF} download='resume.pdf' className='btn btn--primary'>Download PDF<FiDownload /></a>
          <a href={ResumePDF} target='_blank' rel='noopener noreferrer' className='btn'>Open in new tab<FiArrowUpRight /></a>
        </div>
      </div>
      <div className='resume__preview'>
        <iframe
          src="https://drive.google.com/file/d/1pHFfu3AVrBZQIehADDa3uwPW3JR0TE79/preview"
          title='Résumé preview'
          loading='lazy'
          className='resumeDoc'>
        </iframe>
      </div>
    </section>
  )
}

export default Resume
