import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Qualification from './components/qualification/Qualification' 
// import Services from './components/services/Services' 
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ParticlesBG from './components/particles/ParticlesBG'


const App = () => {
  return (
    <>
    <ParticlesBG/>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Qualification />
    {/* <Services /> */}
    {/* <Testimonials /> */}
    <Contact />
    <Footer />
    </>
  )
}

export default App
