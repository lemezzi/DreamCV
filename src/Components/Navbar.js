import React from "react";
import "./Navbar.css"; // Utilisation de guillemets doubles pour les chaînes de caractères
import { GiSpellBook } from "react-icons/gi";
import Flag from 'react-world-flags'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>CvMaker <GiSpellBook /></h1>
            </div>
            <div className="navbar-right">
                <ul>
                <li><Flag code="FR" />FRA</li>                   
                <li><Flag code="GB" />Ang</li> 
                  
                </ul>
               
            </div>
        </nav>
    );
};

export default Navbar;
