import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';
import { Services } from './components/Services';
import { Footer } from './components/Footer';
import { Service1 } from './components/Service1';
import { DescServices } from './components/DescServices';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './Main';
import { DigitalForensic } from './components/DigitalForensic';
import { AboutUs } from './components/AboutUs';
import { OurServices } from './components/OurServices';
import { About } from './components/About';
import ScrollToTop from './ScrollToTop';
import { ContactUs } from './components/ContactUs';
import {Internship} from './components/Internship';
import { Training } from './components/Training';
import { Workshop } from './components/Workshop';
import { PageNotFound } from './components/PageNotFound';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter >
        <ScrollToTop/>
         <Navbar/>
         <Routes>
           <Route exact path='/' element={<Main/>}></Route>
           <Route  path="/services" exact element={<About/>}></Route>
           <Route  path="/Ourservices" exact element={<OurServices/>}></Route>
           <Route exact path="/Describe" element={<DescServices/>}></Route>
           <Route exact path='/Contactus' element={<ContactUs/>}></Route>
           <Route exact path='/Contact' element={<AboutUs/>}></Route>
           <Route exact path='/about' element={<Service1/>}></Route>
           <Route exact path='/DigitalForensics' element={<DigitalForensic/>}></Route>
           <Route exact path='/Internship' element={<Internship/>}></Route>
           <Route exact path='/Training' element={<Training/>}></Route>
           <Route exact path='/Workshops' element={<Workshop/>}></Route>
           <Route exact path='/AboutUs' element={<AboutUs/>}></Route>
           <Route path='*' element={<PageNotFound/>}></Route> 
         </Routes>
      </BrowserRouter> 
    </div> 
  );
}

export default App;
