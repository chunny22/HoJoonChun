import { FiDownload, FiArrowUpRight } from 'react-icons/fi';
import './resume.css';
import ResumePDF from '../../assets/resume.pdf';
import resumePreview from '../../assets/resume-preview.webp';

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
        <a href={ResumePDF} target='_blank' rel='noopener noreferrer'>
          <img
            src={resumePreview}
            width='1440'
            height='1864'
            alt="Preview of Justin Chun's résumé. Select it to open the PDF."
            loading='lazy'
            decoding='async'
            className='resumeDoc' />
        </a>
      </div>
    </section>
  )
}

export default Resume
