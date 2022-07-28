import React from 'react'
import './Experience.css'
import {AiOutlineCheck} from 'react-icons/ai'

const Experience = () => {
    return (
        <section id='Experience'>
            <h5>What I Have</h5>
            <h2>Tackled With</h2>
            <div className='container experience__container'>

                <div className='experience__1'>
                    <h3>frontend /game dev</h3>
                    <div className='experience__content'>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>HTML</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>CSS</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>JS</h4>
                                <small className='text_light'>3/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>React</h4>
                                <small className='text_light'>3/5</small>
                            </div>
                        </div>
                    </div>
                </div>  

                <div className='experience__2'>
                    <h3>Data Science</h3>
                    <div className='experience__content'>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>Python</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>Pandas</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>Matplotlib</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>EDA</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>Time-Series Analysis</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>NLP - Doc2Vec</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>NLP - Embeddings</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>NLP - Sec2Sec</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>Computer Vision</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>Recommender Systems</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>EDA</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                        <div className='experience__details'>
                            <AiOutlineCheck class='experience__details-icons'/>
                            <div>
                                <h4>Feature Mining</h4>
                                <small className='text_light'>4/5</small>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default Experience
