import React from "react";
import './Footer.css';
export const Footer=()=>{
    return(<div className="Footer">
            <div className="Foot-container">
                <div>
                   <h3>Contact us:</h3>&nbsp;
                   <div className="footer-inner"><p >
                   <i class="fa-sharp fa-solid fa-location-dot" style={{color: '#f70258'}}></i>  &nbsp; Cyber Saviours,<br/>
                        # H.No: 2-5 , Prasanth Nagar,<br/>
                        Vizianagaram , Andhra Pradesh<br/>
                        <i class="fa-regular fa-envelope"></i> <a href="mailto:prasanthkumargudela@gmail.com" style={{textDecorationLine:"none"}}>&nbsp;Email: prasanthkumargudela@gmail.com</a><br/>
                        <i class="fa-sharp fa-solid fa-phone-volume"></i>&nbsp; Ph No: +91 8977263725<br/>
                    </p>
                    </div>
                </div>
                <div>
                    <h3>Follow us:</h3>&nbsp;
                    <div className="footer-inner">
                    <h4><i class="fab fa-instagram icon"></i>&nbsp;Instagram</h4>
                    <h4><i class="fab fa-twitter icon"></i>&nbsp;Twitter</h4>
                    <h4><a href="https://www.linkedin.com/in/obuleshb"><i class="fab fa-linkedin icon"></i>&nbsp;Linked in</a></h4></div>
                </div>
            </div>
    </div>)
}