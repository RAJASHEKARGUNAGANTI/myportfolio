import React from 'react'
import CV from '../../assets/cv2.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} downlode className='btn'>Download CV</a>
        <a href="https://rajashekargunaganti.hashnode.dev" className='btn btn-blog'>My Blog</a>
        <a href="https://twitter.com/RAJASHEKARGUNA3" className='btn btn-primary'>Let's connect</a>
    </div>
  )
}

export default CTA