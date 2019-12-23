import React from 'react';
import {Navbar} from 'react-bootstrap'; 
import {Nav} from 'react-bootstrap';
import logoNav from '../img/NavbarLogo.svg';


function NavbarWainnakel() {
  return (
    <Navbar className='navbar-custom-color' expand="lg" >
  <Navbar.Brand className="navbar-brand-custom" href="#home"> 
  <img src={logoNav}width="45" height="45" className="d-inline-block align-center"/>
  <span  className='logo-label'>وين ناكل؟</span>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home" className='home-label'>الرئيسية</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavbarWainnakel;
