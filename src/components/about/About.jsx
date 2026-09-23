import { motion } from 'framer-motion'
import './about.css'
import { scrollToHash } from '../../utils/lenis'

const About = () => {
  return (
    <section id='about' className='panel panel--neutral about'>
        <h2 className='panel__heading'>About me</h2>
        <motion.div
          className='about__text'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}>
            <p>Welcome to my web page!</p>
            <p>
                I am a recently graduated student from University of Ottawa, with a Honours Bachelor of Science in Computer Science.
                Coming all the way from South Korea, I have been living in Canada for about 8 years now, mostly living in Toronto. In this website,
                you can find out what I enjoy doing and what I am good at.
            </p>
            <p>
                In my spare time, I like to cook while listening to music, most of the time cooking Korean or Italian food. I also enjoy
                spending time drinking coffee while listening to Jazz. Something about jazz is really soothing and it helps me to relax.
                Which is why I&apos;ll be playing couple Jazz songs in the background while you are here, hoping it does the same to you too! (Currently WIP)
            </p>
            <p>
                I have done numerous internships in the past, and I am currently looking for new opportunities as a new grad. I have done couple
                of personal projects, along with a publication on arXiv. You can find out about all of them below in this site. If you&apos;d like to
                reach out, check out my socials below my name in{' '}
                <a href='#header' onClick={(event) => { event.preventDefault(); scrollToHash('#header'); }}>this section.</a>
            </p>
        </motion.div>
    </section>
  )
}

export default About
