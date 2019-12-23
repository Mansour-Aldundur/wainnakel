import React from 'react';
import {Navbar} from 'react-bootstrap'; 
import {Nav} from 'react-bootstrap';
import logoNav from '../img/NavbarLogo.svg';


function NavbarWainnakel() {
  return (
    <Navbar className='navbar-custom-color' expand='lg  ' >
  <Navbar.Brand className='nav-brand-custom'> 
  <img src={logoNav}width="80" height="80" className=" navbar-brand-custom  mx-auto"/>
  <span  className='logo-label'>وين ناكل؟</span>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-dark'/>
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link  className='home-label light lg' onClick={() => window.location.reload()}>الرئيسية</Nav.Link>
    </Nav>
  
  </Navbar.Collapse>
</Navbar>
  );
}

export default NavbarWainnakel;
