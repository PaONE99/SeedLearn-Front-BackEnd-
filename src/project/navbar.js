import React from "react"
import "./navbar.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Dropdown,  DropdownButton} from 'react-bootstrap';
import { Link } from "react-router-dom";
function Navbar() {
    return(
        <div >
            
        <nav className="main-nav"> 
            
            <div className="leaf">
            
            </div>
            <div className="one">
                <Link className="one-one" to="/"><h1>Seed Learn</h1></Link>
            </div>
            <div className="menu">
                <ul>
                    
                    <li>
                        <Link className="menu-link" to="/About">About</Link>
                    </li>
                    

                    <Container className="menu-link">
                        <DropdownButton variant="" id="" title={<span className="form-title">Form</span>} className="custom-dropdown">
                     <Dropdown.Item>
                <Link className="menu-link" to="/Education">Education</Link>
                    </Dropdown.Item>
                <Dropdown.Item>
         <Link className="menu-link" to="/Startup">Startup</Link>
            </Dropdown.Item>
            </DropdownButton>
            </Container> 
                    <li>
                        <Link className="menu-link" to="/placement">placement</Link>
                    </li> 
                    <li>
                        <Link className="menu-link" to="/Login">Login</Link>
                    </li>
                </ul>
                

            </div>
           

        </nav>
        
    </div>
    )
}
export default Navbar;
