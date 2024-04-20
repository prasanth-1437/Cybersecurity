import React from 'react';
import './AboutUs.css';
import Navbar from './Navbar';
import { Footer } from './Footer';
import obulesh from '../obulesh.jpg'
export const AboutUs=()=>{
    return(<div>
    
        <div className='Aboutus'>
        <h1>About Us...</h1>
        <div className='Abt-para-div'>
          <p className='Abt-para'>
          At <b>Cyber Saviours</b>, we are dedicated to safeguarding businesses and individuals in the ever-evolving digital landscape. With a team of seasoned cybersecurity experts and forensic specialists, we provide comprehensive solutions tailored to meet the unique needs of our clients. Our mission is to empower organizations and individuals with the knowledge, tools, and resources needed to protect their digital assets and mitigate cyber threats effectively.<br/><br/></p>

<p className='Abt-para'>With a commitment to excellence and innovation, we stay at the forefront of cybersecurity trends and technologies, ensuring that our clients receive the most advanced and reliable solutions available. Whether it's conducting digital forensic investigations, providing cybersecurity consulting services, or delivering customized training programs, we strive for excellence in everything we do.<br/><br/></p>

<p className='Abt-para'>At <b>Cyber Saviours</b>, integrity, professionalism, and customer satisfaction are at the core of our values. We prioritize transparency and open communication, working closely with our clients to understand their challenges and deliver tailored solutions that address their specific needs. With a focus on continuous improvement and adaptation, we remain agile and responsive to the evolving threat landscape, providing our clients with the peace of mind they need to navigate the digital world safely and securely. Trust <b>Cyber Saviours</b> as your partner in cybersecurity, and let us help you stay one step ahead of cyber threats.<br/>
          </p></div></div>
          <div className='Abt-footer'>
            <div className='Abt-inner-f'>
             <div className='Abt-img-div'> 
                <img src={obulesh}></img>
             </div>
             <div>
                <h3>Mr.Obulesh</h3>
                <h5>6+ years Experience </h5>
                <h5>in Cyber Security</h5>

             </div>
             <div className='Abt-icons'>
                 <i class="fab fa-linkedin icon"></i>&nbsp;
                 <i class="fab fa-instagram icon"></i>&nbsp;
                 <i class="fab fa-twitter icon"></i>&nbsp;
                 <i class="fab fa-google icon"></i>
             </div>
          </div></div>
    </div>)
}