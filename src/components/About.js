import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
export const About=()=>{
    return(<div className='OurServices'>
        <h1 style={{color:'White',textAlign:'center',fontSize:'3em'}}>Our Services</h1>
    <div className='services-con'>
        
             <div className='box'>
                <span></span>
                <div className='content'>
                    <h2>Cyber Security Solution</h2>
                    <p>
                    Stay ahead of evolving cyber threats with our cutting-edge security solutions.
Tailored strategies to safeguard your digital assets and ensure business continuity.
                    </p>
                    <Link to='/Ourservices'>Read More</Link>
                </div>
             </div>

             <div className='box'>
                <span></span>
                <div className='content'>
                    <h2>Digital Forensics</h2>
                    <p>
                    Unlock critical insights and evidence with our advanced digital forensic services.
Thorough investigations to uncover digital footprints and support legal proceedings.
                    </p>
                    <Link to='/DigitalForensics'>Read More</Link>
                </div>
             </div>

             <div className='box'>
                <span></span>
                <div className='content'>
                    <h2>Corporate Training</h2>
                    <p>
                    Empower your workforce with practical training on utilizing cyber security tools effectively.
Enhance phishing awareness and equip employees with skills to mitigate cyber risks.
                    </p>
                    <Link to='/Training'>Read More</Link>
                </div>
             </div>
             
             <div className='box'>
                <span></span>
                <div className='content'>
                    <h2>Workshops and MOU's</h2>
                    <p>
                    Stay ahead of the curve with our engaging workshops, fostering collaboration and knowledge-sharing among industry leaders through strategic Memorandums of Understanding (MOUs)
                    </p>
                    <Link to='/Workshops'>Read More</Link>
                </div>
             </div>
             
             <div className='box'>
                <span></span>
                <div className='content'>
                    <h2> Internships</h2>
                    <p>
                    Nurture talent and invest in the future of cyber security through our internship programs.
Provide hands-on experience and mentorship opportunities to aspiring professionals.
                    </p>
                    <Link to='/Internship'>Read More</Link>
                </div>
             </div>
             </div>
    </div>)
}