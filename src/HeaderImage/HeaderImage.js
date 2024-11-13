// HeaderImage.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './HeaderImage.css'; // Custom CSS for image and overlay text
import banner from '../images/bannerstock.jpg'; // Replace with your actual banner image path

const HeaderImage = ({ title }) => {
  return (
    <Container fluid className="p-0" id='headerimgContainer'>
      <Row className="position-relative">
        <Col className="p-0"> {/* Remove any padding or margin */}
          <img
            src={banner} // Replace with your image URL
            alt="Background"
            className="header-image"
          />
          <div className="overlay-text">
            <h1>{title}</h1> {/* Dynamically rendered title */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderImage;
