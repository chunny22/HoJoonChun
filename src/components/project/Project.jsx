import React from 'react'
import './project.css'

const project = () => {
  return (
    <section id='project'>
      <h2>My Projects</h2>
      <div className='container content__container'>
        
        <div className='project'>
          <h3>Longitudinal Sentiment Classification of Reddit Posts</h3>
          <div className='project-content'>
            <small className='text-light'>Honours Bachelors Project / arXiv Publication</small>
            <ul>
              <li>Comprehensive text analysis on Canadian university students with anxiety.</li>
              <li>Dataset extracted from Reddit posts across 5 major universities: Waterloo, McGill, UBC, and UofT.</li>
              <li>Employed sentiment analysis with VADER along with performing classification task using Weka.</li>
              <li>Recorded entire study results in a detailed report.</li>
            </ul>
          </div>
        </div>

        <div className='project'>
          <h3>Metal Detector</h3>
          <div className='project-content'>
            <small className='text-light'>Side project @ Jinione Systems</small>
            <ul>
              <li>Android application developed with Android Studio, Java programming language.</li>
              <li>Detects nearby magnetic waves with the device's magnetometer.</li>
            </ul>
          </div>
        </div>

        <div className='project'>
          <h3>Space Track</h3>
          <div className='project-content'>
            <small className='text-light'>Pygame Video Game</small>
            <ul>
              <li>Created using Pygame library.</li>
              <li>Inspired by Galaga, a space shooter game.</li>
              <li>Consists various interactive sprites along with animations applied to each object, playable or non-playable.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default project