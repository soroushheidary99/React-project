import React from 'react';
import './Services.css';
import {AiOutlineCheck} from 'react-icons/ai'


const Services = () => {
    return (
        <section id='Services'>
        <h5>What Services</h5>
        <h2>I Can Offer You</h2>
        <div className='container service__container'>
            <div id='service1'>
                <button className='service__header' id='door1'>Data Analysis :</button>
                <p>Extracting BI Based EDA of your data depending on the data type using various tools and libraries such as matplotlib and power bi and creating dashboards
using Tableau</p>
            </div>

            <div id='service2'>
                <button className='service__header' id='door2'>Natural Language Proccessing :</button>
                <p>Semantic Extraction & Similarity Analysis of your data with proper Embedding methods, Implementing Sec2Sec models with Deeplearning</p>
            </div>

            <div id='service3'>
                <button className='service__header' id='door3'>Computer Vision :</button>
                <p>Creating Obejct detection models using deep learning libraries such as tensorflow & pytorch, experience with attention mechanisms for segmentations and image labeling</p>
            </div>

            <div id='service4'>
                <button className='service__header' id='door3'>Recommender Systems :</button>
                <p>Creating Collaborative, Content-Based & Hybrid Recommender models evaluating current systems using proper metrics such as rank accuracy</p>
            </div>

            <div id='service5'>
                <button className='service__header' id='door3'>Time Series Analysis :</button>
                <p>Predictive Time-serie based models using well-known libraries such as tsa, prophet ... exprience with alternative methods such as RL for more profitable results in financial models</p>
            </div>

            <div id='service5'>
                <button className='service__header' id='door3'>Game Dev, Web Design & more:</button>
                <p>Game Development using unity engine and responsive frontend development using react.js, SASS & LESS.js, eager to learn new technologies and open to tackle with new challenges</p>
            </div>

            
            
            

        </div>
    </section>
    )
}

export default Services
