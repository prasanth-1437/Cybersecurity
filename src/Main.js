import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Services } from "./components/Services";
import { Service1 } from "./components/Service1";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

function Main(){
    return(<>
         <Home/>
         <About/>
        <Service1/>
      <footer>
      <Footer/>
      </footer>
    </>)
}
export default Main;