import React, {useState, useEffect} from 'react';
import './Projects.css';
import proj11 from '../assets/portfolio1.jpg'
import proj12 from '../assets/portfolio2.jpg'



const card_1_p = ['hi', 'bye'];
const card_1_img = [proj11, proj12];
const card_1_len = card_1_p.length;

const card_2_p = ['yay', 'yiy'];
const card_2_img = [proj11, proj12];
const card_2_len = card_2_p.length;

const card_3_p = ['yo', 'yey'];
const card_3_img = [proj11, proj12];
const card_3_len = card_3_p.length;


const Projects = () => {
    const [count_1, set_count_1] = useState(0);
    const [count_2, set_count_2] = useState(0);
    const [count_3, set_count_3] = useState(0);
    


    // useEffect(() => {
    //     document.documentElement.style.setProperty('--color-bg', colors[count_1*3]);
    //   }, [count_1])
    // const colors = ['red', 'blue', 'green'];
    // const [count_2, set_count_2] = useState(0);
    // const card_2_p = ['hi', 'bye'];
    // const card_2_img = [proj21, proj22];
    // const card_2_len = card_2_p.length;

    return (
        <section id='Projects'>
            <h5>Link to</h5>
            <h2>Recent Projects</h2>
            <div className='container projects__container'>
                <div className='project__container' id='ct1'>
                    <div className='project__container__head'>NLP</div>
                    <div className='project__container__img'>
                        <img src={card_1_img[count_1]} alt='proj1'></img>
                    </div>
                    <p> {card_1_p[count_1]} </p>
                    <div className='project__container__buttons'>
                        <button onClick={() => set_count_1((count_1 + 1) % card_1_len)}>decrement me</button>
                        <button onClick={() => set_count_1((count_1 + 1) % card_1_len)}>increament me</button>
                    </div>
                </div>

                <div className='project__container'>
                    <div className='project__container__head'>CV2</div>
                    <div className='project__container__img'>
                        <img src={card_2_img[count_2]} alt='proj1'></img>
                    </div>
                    <p> {card_2_p[count_2]} </p>
                    <div className='project__container__buttons'>
                        <button onClick={() => set_count_2((count_2 + 1) % card_2_len)}>decrement me</button>
                        <button onClick={() => set_count_2((count_2 + 1) % card_2_len)}>increament me</button>
                    </div>
                </div>

                <div className='project__container'>
                    <div className='project__container__head'>Web</div>
                    <div className='project__container__img'>
                        <img src={card_3_img[count_3]} alt='proj1'></img>
                    </div>
                    <p> {card_3_p[count_3]} </p>
                    <div className='project__container__buttons'>
                        <button onClick={() => set_count_3((count_3 + 1) % card_3_len)}>decrement me</button>
                        <button onClick={() => set_count_3((count_3 + 1) % card_3_len)}>increament me</button>
                    </div>
                </div>


                

            </div>
        </section>
    )
}

export default Projects
