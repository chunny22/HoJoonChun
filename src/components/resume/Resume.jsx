import React, { useState } from 'react';
import './resume.css';
import ResumePDF from '../../assets/resume.pdf';

const Resume = () => {

  return (
    <section id='resume'>
      <h2>My Resume</h2>
      <div className='container resume__container'>
        <iframe 
          src="https://drive.google.com/file/d/1pHFfu3AVrBZQIehADDa3uwPW3JR0TE79/preview" 
          className='resumeDoc'>
        </iframe> 
        <a href={ResumePDF} download='resume.pdf' className='btn btn-primary'>Download</a>
      </div>
    </section>
  )
}

export default Resume