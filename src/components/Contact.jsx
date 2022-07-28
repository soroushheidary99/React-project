import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from 'react-icons/md'

const Contact = () => {
    return (
        <section id='Contact'>
            <h5>How you can</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>


                <div className='contact__options'>
                    <div className='contact__option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Email</h4>
                        <h5>soroush.h.dev@gmail.com</h5>
                        <a href='mailto:soroush.h.dev@gmail.com'>Send a message</a>
                    </div>
                    <div className='contact__option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+989181099400</h5>
                        <a href='https://api.whatsapp.com/send?phone=+989181099400'>Send a message</a>
                    </div>
                    <div className='contact__option'>
                        <MdOutlineEmail className='contact_option-icon'/>
                        <h4>Github</h4>
                        <h5>soroushheidary99</h5>
                        <a href='https://github.com/soroushheidary99'>Send a message</a>
                    </div>
                </div>


                
                <form id='form_contact' action=''>
                    <input type='text' name='name' placeholder='Full Name' required /> 
                    <input type='email' name='email' placeholder='Email' required />
                    <textarea type='message' rows='7' placeholder='Your Comment' required></textarea> 
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>


        </section>
    )
}

export default Contact
