import { motion } from 'framer-motion'
import './experience.css'

const cardReveal = (index) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut', delay: (index % 2) * 0.15 },
})

const experiences = [
  {
    role: 'Quality Engineering Analyst',
    company: 'Royal Bank of Canada',
    location: 'Toronto, Canada',
    url: 'https://www.rbcroyalbank.com',
    dates: 'May 2023 – Aug 2023',
    points: [
      'T&O department, under Risk IT team',
      'Involved with the quality assurance of data management projects',
      'Worked with Python, Tricentis qTest, SQL, and UNIX terminal for testing and data verification',
    ],
  },
  {
    role: 'Product Software Developer',
    company: 'Mitel Networks',
    location: 'Ottawa, Canada',
    url: 'https://www.mitel.com/',
    dates: 'Sep 2022 – Dec 2022',
    points: [
      'Frontend development team of Mitel One, communication software for businesses',
      'Utilizing Node.js, TypeScript, HTML/CSS, and Angular framework',
    ],
  },
  {
    role: 'Software Developer',
    company: 'March Networks',
    location: 'Ottawa, Canada',
    url: 'https://www.marchnetworks.com/',
    dates: 'Jan 2022 – Apr 2022',
    points: [
      'Development team of Evidence Vault and Searchlight, data management services for businesses',
      'Hands on experience with Node.js, TypeScript, HTML/CSS, and React framework',
    ],
  },
  {
    role: 'Business Intelligence Developer',
    company: 'Canadian Food Inspection Agency',
    location: 'Ottawa, Canada',
    url: 'https://inspection.canada.ca/',
    dates: 'May 2021 – Aug 2021 (Intern) / Sep 2021 – Nov 2021 (Part-time)',
    points: [
      'Carried out ETL process, from Oracle databases to enterprise data warehouse',
      'Developed using SQL, Toad, IBM DataStage and Cognos Data Manager',
    ],
  },
  {
    role: 'Software Developer Trainee',
    company: 'Jinione Systems',
    location: 'Seongnam, South Korea',
    dates: 'Jun 2020 – Aug 2020',
    points: [
      'Developed Android application using Android Studio with Java',
      'Transferred data to a MySQL database using PHP based server managed with WAMP program',
    ],
  },
]

const Experience = () => {
  return (
    <section id='experience' className='panel panel--warm'>
      <div className='panel__header'>
        <h2 className='panel__heading'>Experience</h2>
        <span className='panel__meta'>2020 – 2023</span>
      </div>
      <div className='experience__grid'>
        {experiences.map((item, index) => (
          <motion.article className='experience__card' key={item.company} {...cardReveal(index)}>
            <span className='experience__dates'>{item.dates}</span>
            <div className='experience__title'>
              <h3>{item.role}</h3>
              <span className='experience__company'>
                {item.url
                  ? <a href={item.url} target='_blank' rel='noopener noreferrer'>{item.company}</a>
                  : item.company}
                {' · '}{item.location}
              </span>
            </div>
            <ul className='experience__points'>
              {item.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Experience
