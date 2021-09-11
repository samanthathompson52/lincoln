import React from 'react';
import '../styles/Header.css';
import {
  Link
} from "react-router-dom";

const Header = () => {

  return (  
    <div className = "header-background">
      <nav class="navbar sticky-top navbar-expand-lg smoothscroll">
        <Link class = "navbar-brand" to="/">Lincoln Pediatrics</Link>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar">
            <Link class = "nav-item nav-link" to="/">Home</Link>
            <Link class = "nav-item nav-link" to="/about">About Us</Link>
            <Link class = "nav-item nav-link" to="/services">Services</Link>
            <Link class = "nav-item nav-link" to="/education">Education</Link>
            <Link class = "nav-item nav-link" to="/immunization">Immunization</Link>
          </div>
          <div>
          <label class="switch">
            <input id = "language-toggle" class="check-toggle check-toggle-round-flat " type="checkbox" />
            <label for="language-toggle"></label>
            <span class="on">En</span>
            <span class="off">ES</span>
          </label>
          </div>
        </div>    
      </nav>
    </div>
  );
}


export default Header;