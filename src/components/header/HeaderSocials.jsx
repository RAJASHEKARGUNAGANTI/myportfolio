import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import {SiHashnode} from 'react-icons/si'
import {FaDocker} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/rajashekar-gunaganti-74957721b/" target='_blanl'><BsLinkedin /></a>
        <a href="https://github.com/RAJASHEKARGUNAGANTI" target='_blanl'><FaGithub /></a>
        <a href="https://twitter.com/RAJASHEKARGUNA3"><AiOutlineTwitter /></a>
        <a href="https://rajashekargunaganti.hashnode.dev"><SiHashnode /></a>
        <a href="https://hub.docker.com/u/rajashekargunaganti"><FaDocker /></a>
    </div>
  )
}

export default HeaderSocials 