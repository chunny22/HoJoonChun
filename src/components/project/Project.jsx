import React from 'react'
import './project.css'
import redditLogo from '../../assets/redditlogo.svg'
import metalDetector from '../../assets/metaldetector.png'

const project = () => {
  return (
    <section id='project'>
      <h2>My Projects</h2>
      <div className='container content__container'>
        <div className='project'>
          <h3>Longitudinal Sentiment Classification of Reddit Posts</h3>
          <div className='project-content'>
            <small className='text-light'>Honours Bachelors Project / arXiv Publication</small>
            <div className='image-item'>
              <img src={redditLogo} alt='Reddit Logo'/>
            </div>
            <ul>
              <li>Comprehensive text analysis on Canadian university students with anxiety.</li>
              <li>Dataset extracted from Reddit posts across 4 major universities: Waterloo, McGill, UBC, and UofT.</li>
              <li>Employed sentiment analysis with VADER along with performing classification task using Weka.</li>
              <li>Recorded entire study results in a detailed report.</li>
            </ul>
          </div>
          <a href='https://arxiv.org/abs/2401.12382' target='_blank' className='btn'>View Publication</a>
        </div>
        <div className='project'>
          <h3>Metal Detector</h3>
          <div className='project-content'>
            <small className='text-light'>Side project @ Jinione Systems</small>
            <div className='image-item'>
              <img src={metalDetector} alt='Metal Detector'/>
            </div>
            <ul>
              <li>Android application developed with Android Studio, Java programming language.</li>
              <li>Detects nearby magnetic waves with the device's magnetometer.</li>
            </ul>
          </div>
          <a href='https://github.com/chunny22/Metal_Detector' target='_blank' className='btn'>View Repository</a>
        </div>
        <div className='project'>
          <h3>Space Track</h3>
          <div className='project-content'>
            <small className='text-light'>Pygame Video Game</small>
            <div className='image-item'>
              <image/>
            </div>
            <ul>
              <li>Created using Pygame library.</li>
              <li>Inspired by Galaga, a space shooter game.</li>
              <li>Consists various interactive sprites along with animations applied to each object, playable or non-playable.</li>
            </ul>
          </div>
          <a href='https://github.com/chunny22/Space_Track' target='_blank' className='btn'>View Repository</a>
        </div>
      </div>
    </section>
  )
}

export default project