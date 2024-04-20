import {Component} from 'react';  
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends Component{
    state={clicked: false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
    return(
        <>
          <nav>
            
                <h1>Cyber</h1>
            
          <div className='nav-down'>
            <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
            <li><a href="#"><Link to='/'>Home</Link></a></li>
            <li><a href="#"><Link to='/services'>Services</Link></a></li>
            <li><a href="#"><Link to='/Contact'>About us</Link></a></li>
            <li><a href='#'><Link to='/Contactus'>Contact us</Link></a></li>
            </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
              <i id="bar" className={this.state.clicked? "fas fa-times" : "fas fa-bars"}></i>
              
            </div>
          </nav>
        </>
    )
    }
}
export default Navbar;