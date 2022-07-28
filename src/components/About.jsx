import React from 'react'
import './About.css'
import ME from '../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
    return (
        <section id='About'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={ME} alt='me'></img>
                    </div>  
                </div>

                <div className='about__content'>
                    <div className='about__cards'>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Bachelours Graduate</h5>
                            <small>Shahid Beheshti University</small>
                        </article>
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <h5>Longman IELTS Certificate</h5>
                            <small>Fluency in English communication</small>
                        </article>
                        

                    </div>

                    <p> 
                        I'm mainly focused on datascience, though i'll enjoy learning new technologies 
                        like react and css which led to this protfolio site as my first frontend project
                        
                    </p>
                    <p> 
                        I try to stay fully commited to the tasks im titled with and though I'm not the most 
                        socialized person but I can adapt quickly and communicate with people with their 
                        own literature and language, I try to keep the team spirit high and running as it leads to the best
                        functionality expected. 
                    </p>

                    
                </div>
            </div>
        </section>
    )
}

export default About
