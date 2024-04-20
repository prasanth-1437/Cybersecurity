import './Workshop.css';
import './DescServices.css';
import cs from '../cyber-security2.jpg';
import eh from '../cs1.jpg'
import df from '../cyber-forensics2.jpg';
import { Footer } from './Footer';

export const Workshop=()=>{
    return(<><div className="workshop-div">
        <h1>We're Providing Workshops...</h1>
        <p>Stay ahead of the rapidly evolving landscape of cybersecurity with our engaging workshops and strategic Memorandums of Understanding (MOUs). Our workshops provide a platform for industry leaders to collaborate, share insights, and stay informed about the latest trends, technologies, and best practices in cybersecurity. Through our MOUs, we forge partnerships with key stakeholders, organizations, and institutions to drive innovation, promote research, and address pressing challenges in the field of cybersecurity. Join us in shaping the future of cybersecurity through continuous learning, collaboration, and strategic alliances.</p>

    </div>
    <div className="Desc-continer">
    <div className="Each-one">
       <div className="Simg-div">
          <img src={cs} alt="Pentesting"></img>
       </div>
       <div className="Desc-div">
        <h3><b>Cyber Security - Workshop Highlights</b></h3>
         <u1>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Importance of Cyber Security in Our Daily Life</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Data Security & Hide Techniques</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Spyware, Keylogger & Virus Security 
</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Internet Surfing & Download Security 
</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Email Security & Social Networking Website Security- Phishing Attacks 
</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Browser Privacy & Security 
</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;
Experienced Faculty</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Live projects</li>
         </u1>

       </div>
    </div>

    <div className="Each-two">
       <div className="Desc-div">
         <h3>Ethical Hacking - Workshop Highlights</h3>
         <u1>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Be White Hat Hacker 
</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Learn from the basics of Ethical Hacking 
</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Learn to use Backtrack (Linux based Penetration Testing OS)</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Live demonstrations of Various hacking tricks 
</li>
          <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Bug hunting</li>
         </u1> 
       </div>
       <div className="Simg-div">
          <img src={eh} alt="Pentesting"></img>
       </div>
    </div>
    <div className="Each-one">
       <div className="Simg-div">
          <img src={df} alt="Pentesting"></img>
       </div>
       <div className="Desc-div">
         <h3>DigitalForensic - Workshop Highlights</h3>
         <u1>
            <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Cutting-Edge Techniques</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Interfacing I/O devices 
</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Interfacing External Peripherals 
</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Live Projects</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Case Studies</li>
             <li><i class="fa-solid fa-check fa-lg" style={{color: '#2e7bff'}}></i>&nbsp;Investigating</li>
         </u1>

       </div>
    </div>

   

</div>
<Footer/>
</>
)
}