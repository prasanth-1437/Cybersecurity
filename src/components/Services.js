import React from 'react';
import './Services.css';
import imag from '../cyberSolutions.jpg';
import { Link } from 'react-router-dom';
export const Services=()=>{
    return(<div className='Services'>
        <div className='example'>
        <h1 id="Title">Our Services...</h1>
       
        <Link to='/Describe'> <figure className='card'>
               <div className='image'>
            <img src={imag}></img>
        </div>
        <figcaption>
            <h3>Cyber Security</h3>
            <p>At CyberShield Technologies, we understand the paramount importance of security in today's digital landscape.
           With the ever-evolving threat landscape and increasing cyber-attacks, 
           ensuring the safety and integrity</p>
        </figcaption>
        <a href='#'>Read More</a>
        </figure></Link>

        
        


        </div>
        </div>
    )
}