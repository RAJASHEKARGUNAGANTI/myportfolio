import React from 'react'
import './about.css'
import ME from '../../assets/me5.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <img src={ME} alt="About Image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward  className='about__icon'/>
              <h5>EXperience</h5>
              <small>3+Years Working</small>
            </article>
            <article className='about__card'>
              <FiUser  className='about__icon'/>
              <h5>Clients</h5>
              <small>30+</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary  className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
          </div>
          <p>I have a strong affinity for Linux and greatly enjoy working with its open-source nature and robust
             command-line interface.I possess potential across a wide range of technical skills, including programming 
            languages such as Python, Java, and C, as well as expertise in utilizing tools and frameworks
             such as Git, Docker, Selenium, Machine Learning and Python Flask 
            for efficient project development and collaboration. Familiarity with database management 
            systems, including SQL and MongoDB. Possess a strong understanding of networking protocols,
             web development technologies (HTML/CSS, JavaScript, React).
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>

    </section>
  )
}

export default About