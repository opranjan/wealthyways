import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { FaChevronRight, FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import logo from '../images/wwlogoimg.png';

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px' }}>
      <Row className="d-flex justify-content-between">
        
        {/* Left Column - Logo */}
        <Col xs={12} sm={4} md={3} className="mb-4 mb-sm-0 text-center text-sm-start">
          <img
            src={logo}  // Replace with your logo path
            alt="Logo"
            style={{ width: '150px', marginBottom: '20px' }}
          />
        </Col>

        {/* Middle Column - Quick Links */}
        <Col xs={12} sm={4} md={3} className="mb-4 mb-sm-0 text-center text-sm-start">
          <h5 style={{ color: '#fff', marginBottom: '20px' }}>Quick Links</h5>
          <ListGroup variant="flush">
            <ListGroup.Item
              action href="#home"
              style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', paddingLeft: '0' }}
            >
              <FaChevronRight style={{ marginRight: '10px' }} /> Home
            </ListGroup.Item>
            <ListGroup.Item
              action href="#about"
              style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', paddingLeft: '0' }}
            >
              <FaChevronRight style={{ marginRight: '10px' }} /> About Us
            </ListGroup.Item>
            <ListGroup.Item
              action href="#packages"
              style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', paddingLeft: '0' }}
            >
              <FaChevronRight style={{ marginRight: '10px' }} /> Packages
            </ListGroup.Item>
            <ListGroup.Item
              action href="#refund-policy"
              style={{ backgroundColor: 'transparent', color: '#fff', border: 'none', paddingLeft: '0' }}
            >
              <FaChevronRight style={{ marginRight: '10px' }} /> Refund Policy
            </ListGroup.Item>
            {/* Add more links similarly */}
          </ListGroup>
        </Col>

        {/* Right Column - Contact Info */}
        <Col xs={12} sm={4} md={3} className="text-center text-sm-start">
          <h5 style={{ color: '#fff', marginBottom: '20px' }}>Contact Info</h5>
          <p>
            <FaMapMarkerAlt style={{ marginRight: '10px' }} />
             Navi Mumbai
          </p>
          <p>
            <FaPhoneAlt style={{ marginRight: '10px' }} />
            Free Consultation
          </p>
          <p>
            <FaClock style={{ marginRight: '10px' }} />
            Mon to Fri: 9:00 AM to 06:00 PM
          </p>
        </Col>
      </Row>

      {/* Copyright Section */}
      <Row className="pt-4" >
        <Col xs={12} className="text-center">
          <p style={{ margin: 0 , fontSize:'15px', padding:'30px', color:'grey'}}>Copyright © {new Date().getFullYear()} Wealthy Ways. All Rights Reserved.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
