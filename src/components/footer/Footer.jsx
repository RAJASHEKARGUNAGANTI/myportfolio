import React from 'react'
import './footer.css'
//Downlode icons from react icons site
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>RAJ</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#qualification">Qualification</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://github.com/RAJASHEKARGUNAGANTI"><AiFillGithub /></a>
        <a href="https://twitter.com/RAJASHEKARGUNA3"><AiOutlineTwitter /></a>
        <a href="https://www.linkedin.com/in/rajashekar-gunaganti-74957721b/"><AiFillLinkedin /></a>
        <a href="https://mail.google.com/mail/u/1/#inbox"><AiOutlineMail /></a>
        <a href="https://rajashekargunaganti.hashnode.dev"><SiHashnode /></a>

      </div>
      <div className="footer__copyright">
        <small>&copy;Rajashekar Gunaganti. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer