import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/wwlogoimg.png';
import './CustomNavbar.css';

function CustomNavbar({ onSelect }) {
  const [expanded, setExpanded] = useState(false); // State to track whether the navbar is expanded

  const handleNavLinkClick = (selectedItem) => {
    onSelect(selectedItem);
    setExpanded(false); // Close the navbar when a link is clicked
  };



  const handleWhatsAppClick = () => {
    const phoneNumber = '+919324262969'; // Replace with your phone number in international format
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank'); // Open WhatsApp Web in a new tab
  };

  return (
    <Navbar expand="lg" bg="white" variant="light" expanded={expanded} onToggle={setExpanded} className="custom-navbar"
    style={{ backgroundImage: 'linear-gradient(to right,white , #FFD700)'}}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '200px', height: 'auto' }}
            className="custom-navbar-logo"
          />
        </Navbar.Brand>
        {/* Toggle for mobile view */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navbar links with onClick handlers to update the selected item */}
          <Nav className="ms-auto text-center text-lg-start">
            <Nav.Link
              as={NavLink}
              to="/"
              onClick={() => handleNavLinkClick('Home')}
              className="custom-navlink text-black"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/aboutus"
              onClick={() => handleNavLinkClick('About Us')}
              className="custom-navlink text-black"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/packages"
              onClick={() => handleNavLinkClick('Packages')}
              className="custom-navlink text-black"
            >
              Packages
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/user-consent"
              onClick={() => handleNavLinkClick('User Consent')}
              className="custom-navlink text-black"
            >
              User Consent
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact-us"
              onClick={() => handleNavLinkClick('Contact Us')}
              className="custom-navlink text-black"
            >
              Contact Us
            </Nav.Link>
          </Nav>
          {/* Button on the right, hidden on mobile */}
          <Button style={{background:'#000'}} className="ms-3 d-none d-lg-block" onClick={()=>handleWhatsAppClick()}>
            Request a Live demo call now!
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
