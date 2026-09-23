import { motion } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'
import './project.css'

import redditLogo from '../../assets/redditlogo.svg'
import metalDetector from '../../assets/metaldetector.png'
import spaceTrack from '../../assets/SpaceTrack.png'

const cardReveal = (index) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5, ease: 'easeOut', delay: (index % 2) * 0.15 },
})

const projects = [
  {
    title: 'Longitudinal Sentiment Classification of Reddit Posts',
    label: 'Honours Bachelors Project / arXiv Publication',
    image: redditLogo,
    imageAlt: 'Reddit Logo',
    tone: 'reddit',
    link: 'https://arxiv.org/abs/2401.12382',
    linkLabel: 'View Publication',
    points: [
      'Comprehensive text analysis on Canadian university students with anxiety.',
      'Dataset extracted from Reddit posts across 4 major universities: Waterloo, McGill, UBC, and UofT.',
      'Employed sentiment analysis with VADER along with performing classification task using Weka.',
      'Recorded entire study results in a detailed report.',
    ],
  },
  {
    title: 'Metal Detector',
    label: 'Side project @ Jinione Systems',
    image: metalDetector,
    imageAlt: 'Metal Detector',
    tone: 'metal',
    link: 'https://github.com/chunny22/Metal_Detector',
    linkLabel: 'View Repository',
    points: [
      'Android application developed with Android Studio, Java programming language.',
      'Detects nearby magnetic waves with the device’s magnetometer.',
    ],
  },
  {
    title: 'Space Track',
    label: 'Pygame Video Game',
    image: spaceTrack,
    imageAlt: 'Space Track',
    tone: 'space',
    link: 'https://github.com/chunny22/Space_Track',
    linkLabel: 'View Repository',
    points: [
      'Created using Pygame library.',
      'Inspired by Galaga, a space shooter game.',
      'Consists various interactive sprites along with animations applied to each object, playable or non-playable.',
    ],
  },
]

const Project = () => {
  return (
    <section id='project' className='panel panel--neutral'>
      <div className='panel__header'>
        <h2 className='panel__heading'>Projects</h2>
      </div>
      <div className='project__grid'>
        {projects.map((item, index) => (
          <motion.article
            className={index === 0 ? 'project__card project__card--featured' : 'project__card'}
            key={item.title}
            {...cardReveal(index)}>
            <div className={`project__media project__media--${item.tone}`}>
              <img src={item.image} alt={item.imageAlt} />
            </div>
            <div className='project__body'>
              <span className='project__label'>{item.label}</span>
              <h3>{item.title}</h3>
              <ul className='project__points'>
                {item.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <a href={item.link} target='_blank' rel='noopener noreferrer' className='btn btn--primary btn--small project__link'>
                {item.linkLabel}<FiArrowUpRight />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default Project
