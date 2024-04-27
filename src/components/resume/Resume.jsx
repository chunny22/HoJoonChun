import React from 'react';
import { Document, Page } from '@react-pdf/renderer';
import './resume.css';
import ResumePDF from '../../assets/resume.pdf';

const Resume = () => {
  console.log(ResumePDF);

  function onDocumentLoadSuccess(params) {
    console.log("LOAD Success ", params);
  }

  return (
    <section id='resume'>
      <h2>My Resume</h2>
      <Document 
        file={ResumePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      ><Page pageNumber={1} /></Document>
      <a href= {ResumePDF} download= 'resume.pdf' className='btn btn-primary'>Download</a>

    </section>
  )
}

export default Resume