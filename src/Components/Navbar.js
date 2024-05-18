import React from "react";
import "./Navbar.css"; // Utilisation de guillemets doubles pour les chaînes de caractères
import { GiSpellBook } from "react-icons/gi";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h1>CvMaker <GiSpellBook /></h1>
            </div>
            <div className="navbar-right">
                <ul>
                    <li>Accueil</li>
                    <li>Profil</li>
                    <li>About Us</li>
                </ul>
               
            </div>
        </nav>
    );
};

export default Navbar;
