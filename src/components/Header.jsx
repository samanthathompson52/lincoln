import React, {useContext} from 'react';
import '../styles/Header.css';
import {
  Link
} from "react-router-dom";
import { Navbar, Container, Nav } from 'react-bootstrap';
import LanguageContext from '../languages/LanguageContext';

const Header = () => {

  const context = useContext(LanguageContext);
  const isSpanish = context.isSpanish;
  const setSpanish = context.setSpanish;

  const onClick = (e) => {
    setSpanish(e.target.checked);
  };

  return (  
  <div className = "header-background">
    <Navbar expand="xl">
      <Container fluid>
        <Navbar.Brand><Link className="navbar-brand" to="/">Lincoln Pediatrics</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="lincoln-header" className="ml-auto"/>
          <Navbar.Collapse id="lincoln-header">
            <Nav className="ml-auto">
              <Link className = "nav-item" to="/">Home</Link>
              <Link className = "nav-item" to="/about">About Us</Link>
              <Link className = "nav-item" to="/services">Services</Link>
              <Link className = "nav-item" to="/education">Education</Link>
              <Link className = "nav-item" to="/immunization">Immunization</Link>
            </Nav>
            <div className="pt-3">
            <label className="switch">
              <input id = "language-toggle" className="check-toggle check-toggle-round-flat " type="checkbox" checked={isSpanish} onChange={onClick}/>
              <label htmlFor="language-toggle"></label>
              <span className="on">En</span>
              <span className="off">ES</span>
            </label>
          </div>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
}


export default Header;