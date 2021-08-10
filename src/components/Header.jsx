import React from 'react';
import '../styles/Header.css';

const Header = () => {

  return (  
    <div className = "header-background">
      <nav class="navbar sticky-top navbar-expand-lg navbar-light smoothscroll">
    <a class="navbar-brand" href="#home">Lincoln Pediatrics</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar">
        <a class="nav-item nav-link active" href="#home">Welcome <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#home">About Us</a>
        <a class="nav-item nav-link" href="#home">Our Services</a>
        <a class="nav-item nav-link" href="#home">Education</a>
        <a class="nav-item nav-link" href="#home">Immunization</a>

      </div>
    </div>
   </nav>
  </div>
  );
}


export default Header;