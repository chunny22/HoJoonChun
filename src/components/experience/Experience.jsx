import React from 'react'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h2>My Experiences</h2>
      <div className='container content__container'>
        <a href='#resume' className='new-experience'>
          <h3>Currently looking for a new opportunity!</h3>
        </a>
        <div className='experience'>
          <h3>Quality Engineering Analyst</h3>
          <div className='experience__content'>
            <h4><a href='https://www.rbcroyalbank.com' target='_blank'>Royal Bank of Canada - Toronto, Canada</a></h4>
            <small className='text-light'>May 2023 - Aug 2023</small>
            <ul>
              <li>T&O department, under Risk IT team</li>
              <li>Involved with the quality assurance of data management projects</li>
              <li>Worked with Python, Tricentis qTest, SQL, and UNIX terminal for testing and data verification</li>
            </ul>
          </div>
        </div>
        <div className='experience'>
          <h3>Product Software Developer</h3>
          <div className='experience__content'>
            <h4><a href='https://www.mitel.com/' target='_blank'>Mitel Networks - Ottawa, Canada</a></h4>
            <small className='text-light'>Sep 2022 - Dec 2022</small>
            <ul>
              <li>Frontend development team of Mitel One, communication software for businesses</li>
              <li>Utilizing Node.js, TypeScript, HTML/CSS, and Angular framework</li>
            </ul>
          </div>
        </div>
        <div className='experience'>
          <h3>Software Developer</h3>
          <div className='experience__content'>
            <h4><a href='https://www.marchnetworks.com/' target='_blank'>March Networks - Ottawa, Canada</a></h4>
            <small className='text-light'>Jan 2022 - Apr 2022</small>
            <ul>
              <li>Development team of Evidence Vault and Searchlight, data management services for businesses</li>
              <li>Hands on experience with Node.js, TypeScript, HTML/CSS, and React framework</li>
            </ul>
          </div>
        </div>
        <div className='experience'>
          <h3>Business Intelligence Developer</h3>
          <div className='experience__content'>
            <h4><a href='https://inspection.canada.ca/' target='_blank'>Canadian Food Inspection Agency - Ottawa, Canada</a></h4>
            <small className='text-light'>May 2021 - Aug 2021 (Intern) / Sep 2021 - Nov 2021 (Part-time)</small>
            <ul>
              <li>Carried out ETL process, from Oracle databases to enterprise data warehouse</li>
              <li>Devloped using SQL, Toad, IBM DataStage and Cognos Data Manager</li>
            </ul>
          </div>
        </div>
        <div className='experience'>
          <h3>Software Developer Trainee</h3>
          <div className='experience__content'>
            <h4>Jinione Systems - Seongnam, South Korea</h4>
            <small className='text-light'>Jun 2020 - Aug 2020</small>
            <ul>
              <li>Developed Android application using Android Studio with Java</li>
              <li>Transferred data to a MySQL database using PHP based server managed with WAMP program</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience