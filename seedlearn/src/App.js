import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./project/navbar";
import Home from "./project/home";
import About from "./About";
import Education from "./Education";
import Startup from "./project/Startup";
import Login from "./Login";
import Placement from './placement';
import {Helmet} from "react-helmet";
function App () {
  return (
    <div>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Seed Learn</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Title" />
            </Helmet>
        
        <Router>
        <Navbar /> 
        <Routes>
        <Route path="/" exact element={<Home/>} />
        </Routes>
        <Routes>
        <Route path="About" element={<About/>} />
        </Routes>
        <Routes>
        <Route path="Education"  element={<Education/>} />
        </Routes>
        <Routes>
        <Route path="Startup"  element={<Startup/>} />
        </Routes>
        <Routes>
        <Route path="Placement"  element={<Placement/>} />
        </Routes>
        <Routes>
        <Route path="Login"  element={<Login/>} />
        </Routes>
        </Router>
    
    </div>
    
    
    
  )
}



export default App;
