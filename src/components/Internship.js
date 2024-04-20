import React, { useState } from 'react';
import './Internship.css';

export const Internship = () => {
    const [change, setChange] = useState(false);

    const toggleApply = () => {
        setChange(!change);
    }

    return (
        <div className="Intern-div">
            <div>
            <p>Welcome to <b>Cyber Saviours,</b> where we offer exciting internship opportunities in the field of cybersecurity!</p>
            <p>Are you passionate about protecting digital assets, thwarting cyber threats, and safeguarding sensitive information? Look no further! Our internship program provides hands-on experience, mentorship from industry experts, and real-world projects that will empower you to make a difference in the ever-evolving landscape of cybersecurity.</p>
            <p>As cyber attacks continue to rise in frequency and sophistication, organizations across industries are seeking skilled professionals who can identify vulnerabilities, implement robust security measures, and respond effectively to incidents. Our internship program equips you with the knowledge, skills, and practical experience needed to excel in this dynamic field.</p>
            <p>Whether you're a student looking to kickstart your career, a recent graduate seeking practical experience, or a career changer exploring new opportunities, our cybersecurity internships offer a supportive environment where you can learn, grow, and contribute to meaningful projects. Join us in the fight against cyber threats and become part of a community dedicated to securing the digital world.</p>
            <p>Ready to embark on your cybersecurity journey? Explore our internship opportunities and take the first step towards a rewarding career in cybersecurity with Cyber Saviours!</p>
            <br/></div><br/>
            <button onClick={toggleApply}>{change ? 'Not Interested' : 'Interested to Apply'}</button><br/>
            <div className={change ? 'show-it' : 'show-off'}>
            <i className="fa-solid fa-xmark fa-xl" onClick={toggleApply}></i>
            
             <div>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf_9PlVohN3tLJjdVzvWaUr-mKMuyOYKdbwhVjn3RgC_uxotw/viewform?usp=pp_url"
                frameborder="0" marginheight="0" marginwidth="0">Loading… </iframe></div>
                </div>
        </div>
    )
}
