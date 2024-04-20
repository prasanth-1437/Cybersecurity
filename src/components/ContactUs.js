import './ContactUs.css';
export const ContactUs=()=>
{
    return(<div className="Contact-div">
        <div className="Contact">
           <table>
            <caption><b>Contact Us</b></caption>
             <tr><td><i class="fa-sharp fa-solid fa-location-dot" style={{color: '#f70258'}}></i></td><td>#plt no 2-5, jagadhambaa,<br/>Vishakapatanam,Andhrapradesh</td></tr>
             <tr><td><i class="fa-sharp fa-solid fa-phone-volume"></i></td><td>+91 8977263725<br/>+91 8985934507</td></tr>
             <tr><td><i class="fa-regular fa-envelope"></i></td><td>prasanthkumargudela@gmail.com</td></tr>
             <tr><td><i class="fa-brands fa-linkedin"></i></td><td>Linke In</td></tr>
           </table> 
        </div>
        <div className='Contact-me'>
           <form action="https://formspree.io/f/mzbnjvvk" method="post" enctype="multipart/form-data">
              <label>Name:</label><br/>
              <input type="text" placeholder="Enter Name" name="name" required/><br/>
              <label>Email:</label><br/>
              <input type="email" placeholder="Enter Email" name="email" required/><br/>
              <label>Phone No:</label><br/>
              <input type="number" placeholder="Phone No." name="phoneNo" required/><br/>
              <p>Note: Don't send confidential information here. You can connect through mail or phone call</p>
              <label>Message:</label><br/>
              <textarea id="message" placeholder="Enter Service you want from us" name="message" rows="4" cols="50" required></textarea><br/><br/>
              <button type="submit">Submit</button> 
         </form>
        </div>
    </div>) 
}