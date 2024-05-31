import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio.png'
import IMG2 from '../../assets/acm.png'
import IMG3 from '../../assets/rajPortfolioWeb.png'
import IMG4 from '../../assets/crop.jpg'
import IMG5 from '../../assets/rainfall.jpg'
import IMG6 from '../../assets/ZakopinWibsite.png'
import IMG7 from '../../assets/blogxl.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Rythu Seva (Web Application) </h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RAJASHEKARGUNAGANTI/Rythu-seva.git" className='btn' target='_blank'>Github</a>
            <a href="https://rajashekargunaganti.github.io/rythu_seva/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG7} alt="" />
        </div>
        <h3>BlogXL (Blog wrinting website )</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/RAJASHEKARGUNAGANTI/BlogXL.git" className='btn' target='_blank'>Github</a>
        <a href="https://blogxl.vercel.app" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG3} alt="" />
        </div>
        <h3>MY Portfolio Website</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/RAJASHEKARGUNAGANTI/myportfolio.git" className='btn' target='_blank'>Github</a>
        <a href="https://rajashekargunaganti.github.io/myportfolio/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
        <div className="portfolio__item-image">
        <img src={IMG5} alt="" />
        </div>
        <h3>Rainfall Pridiction (ML model)</h3>
        <div className="portfolio__item-cta">
        <a href="https://github.com/RAJASHEKARGUNAGANTI/Machine-Learing-models.git" className='btn' target='_blank'>Github</a>
        <a href="https://github.com/RAJASHEKARGUNAGANTI/Machine-Learing-models.git" className='btn btn-primary' target='_blank'>Live Demo</a>
        </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>ACM (Web Application)</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RAJASHEKARGUNAGANTI/ACMwesite.git" className='btn' target='_blank'>Github</a>
            <a href="https://acmvjit.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>Zakopin Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/RAJASHEKARGUNAGANTI/Zakopin_Main_Website.git" className='btn' target='_blank'>Github</a>
            <a href="https://rajashekargunaganti.github.io/Zakopin_Main_Website" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default Portfolio