
import React from 'react'
import CV from '../assets/cv.pdf'

function CTA() {
    return (
        <div className='cta'>
            <a href='#contact' className='btn'>talk no more</a>
            <a href={CV} download className='btn'>Download CV</a>
            
        </div>
    )
}

export default CTA
