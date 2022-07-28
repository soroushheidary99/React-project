import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../assets/me.png'

function Header() {
    return (
        
        <header>
            <bgrid />
            <div className='container header__container'>
                <h5>Hello I'm</h5>
                <h1>Soroush Heidary</h1>
                <h5 className='text-light'>Datasientist, Fronend newbie</h5>
                <CTA />

                <div className="me">
                    <img src={ME} alt='my pic' id='me_image'></img>
                </div>
 
                
            </div>
            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </header>
    )
}

export default Header
