import './DigitalForensic.css'
export const OurServices=()=>{
    return(<div className='DF'>
    <h1 style={{color:'white',textAlign:'center',fontSize:'3em'}} >Cyber Security Services</h1><br/>
    <h2 className='sub-headings'>Vulnerability Assessment and Penetration Testing</h2>
    <div className='Df-div'>
    
      <article class="Df-card">
        <h3>Website Assessment</h3>
        <p className='Df-para'>
        Thoroughly scan websites to uncover vulnerabilities in code, configurations, and databases, followed by simulated attacks to gauge real-world risks and recommendations for remediation.
        </p>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </article>

      <article class="Df-card">
        <h3>Network Penetration Testing</h3>
        <p className='Df-para'>
        Conduct comprehensive assessments of network infrastructure, including routers, switches, and servers, to identify potential entry points for cyber attackers, followed by simulated attacks to assess security controls and response mechanisms.
        </p>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </article>

    
      </div>

      <h2 className='sub-headings'>Auditing</h2>
    <div className='Df-div'>
    
      <article class="Df-card">
        <h3>System Audits</h3>
        <p className='Df-para'>
        Perform detailed audits of system configurations, access controls, and user permissions to ensure compliance with industry standards and best practices, identifying weaknesses and recommending corrective actions.
        </p>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </article>

      <article class="Df-card">
        <h3>Firewall Assessment</h3>
        <p className='Df-para'>
        Evaluate firewall configurations, rule sets, and logging mechanisms to ensure effective traffic filtering and protection against unauthorized access attempts, with recommendations for enhancing security posture.        </p>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </article>

    
      </div>

      
      <h2 className='sub-headings'>Configuration</h2>
    <div className='Df-div'>
    
      <article class="Df-card">
        <h3>Firewall Configuration</h3>
        <p className='Df-para'>
        Tailor firewall settings to align with organizational security policies and objectives, implementing rulesets that permit legitimate traffic while blocking malicious activity, and continuously monitoring and updating configurations to adapt to evolving threats.        </p>
        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </article>

      <article class="Df-card">
        <h3>IDS/IPS Setup</h3>
        <p className='Df-para'>
        Deploy intrusion detection and prevention systems to monitor network traffic for suspicious behavior, proactively detecting and blocking threats, while fine-tuning settings to minimize false positives and ensure accurate threat identification. </p>
               <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </article>
      
      <article class="Df-card">
        <h3>SIEM Deployment</h3>
        <p className='Df-para'>
        Implement Security Information and Event Management (SIEM) solutions to aggregate, correlate, and analyze security data from various sources, enabling real-time threat detection, incident response, and compliance reporting, with customized configurations to meet specific organizational needs.
        </p>        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </article>
       
      <article class="Df-card">
        <h3>Phishing Detection</h3>
        <p className='Df-para'>
        Deploy advanced phishing detection systems that utilize machine learning algorithms and threat intelligence feeds to identify and mitigate phishing attempts, integrating with email servers and web gateways to prevent malicious emails and URLs from reaching end-users.</p>        <span class="top"></span>
        <span class="right"></span>
        <span class="bottom"></span>
        <span class="left"></span>
      </article>
      </div>


      </div>
)
}