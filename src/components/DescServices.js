import React from "react";
import './DescServices.css';
import photo from '../pentesting.jpg'
export const DescServices=()=>{
    return(<div className="Desc-continer">
           <div className="Each-one">
              <div className="Simg-div">
                 <img src={photo} alt="Pentesting"></img>
              </div>
              <div className="Desc-div">
                <h3><h1>VAPT</h1>(Vulnerability Assessment & Pentesting)</h3>
                <u1>
                    <li>Website</li>
                    <li>Network</li>
                </u1>

              </div>
           </div>

           <div className="Each-two">
              <div className="Desc-div">
                <h1>Auditing</h1>
                <u1>
                    <li>System</li>
                    <li>Firewall</li>
                    <li>Information Security</li>
                    <li>Network Security</li>
                </u1> 
              </div>
              <div className="Simg-div">
                 <img src={photo} alt="Pentesting"></img>
              </div>
           </div>
           <div className="Each-one">
              <div className="Simg-div">
                 <img src={photo} alt="Pentesting"></img>
              </div>
              <div className="Desc-div">
                <h1>Configuration</h1>
                <u1>
                    <li>Firewall</li>
                    <li>IDS</li>
                    <li>IPS</li>
                    <li>SEIM</li>
                    <li>Phishing Detection</li>
                </u1>

              </div>
           </div>

          

    </div>)
}