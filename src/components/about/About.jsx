import React from 'react'
import './about.css'

const About = () => {
  return (
    <section id='about'>
        <h2>About me</h2>
        <div className='container text__container'>
            <p className='text-medium'>
                Welcome to my web page!
                <br /><br />
                I am a recently graduated student from University of Ottawa, with a Honours Bachelor of Science in Computer Science.
                Coming all the way from South Korea, I have been living in Canada for about 8 years now, mostly living in Toronto. In this website, 
                you can find out what I enjoy doing and what I am good at.
                <br /><br />
                In my spare time, I like to cook while listening to music, most of the time cooking Korean or Italian food. I also enjoy 
                spending time drinking coffee while listening to Jazz. Something about jazz is really soothing and it helps me to relax. 
                Which is why I'll be playing couple Jazz songs in the background while you are here, hoping it does the same to you too! (Currently WIP) 
                <br /><br />
                I have done numerous internships in the past, and I am currently looking for new opportunities as a new grad. I have done couple 
                of personal projects, along with a publication on arXiv. You can find out about all of them below in this site. If you'd like to 
                reach out, check out my socials below my name in <a href='#'>this section.</a>
            </p>
        </div>
        
    </section>
  )
}

export default About