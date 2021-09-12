import React from 'react';
import '../styles/Header.css';
import {
  Link
} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {

  return (  
  <div className = "header-background">
    <Navbar expand="xl">
      <Container fluid>
        <Navbar.Brand><Link className="navbar-brand" to="/">Lincoln Pediatrics</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="lincoln-header" className="ml-auto"/>
          <Navbar.Collapse id="lincoln-header">
            <Nav className="ml-auto">
              <Link class = "nav-item" to="/">Home</Link>
              <Link class = "nav-item" to="/about">About Us</Link>
              <Link class = "nav-item" to="/services">Services</Link>
              <Link class = "nav-item" to="/education">Education</Link>
              <Link class = "nav-item" to="/immunization">Immunization</Link>
            </Nav>
            <div className="pt-3">
            <label class="switch">
              <input id = "language-toggle" class="check-toggle check-toggle-round-flat " type="checkbox" />
              <label for="language-toggle"></label>
              <span class="on">En</span>
            <span class="off">ES</span>
            </label>
          </div>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}


export default Header;