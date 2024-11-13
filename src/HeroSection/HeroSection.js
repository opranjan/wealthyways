import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import magnifyingGlassImage from '../images/lens.jpg'; // Replace with the correct path to your image

const HeroSection = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <Container fluid className="py-5" style={{ backgroundColor: '#f9f9f9' }}>
      <Row className="text-center mb-5">
        <Col>
          <p className="display-4 ">Uncover Hidden Opportunities: Tap into well-researched services with proper guidance and support.</p>
        </Col>
      </Row>
      
      <Row className="align-items-center">
        <Col lg={6} className="d-flex justify-content-center">
          <img
            src={magnifyingGlassImage}
            alt="Magnifying Glass with Charts"
            className="img-fluid"
            style={{ maxWidth: '80%' }}
          />
        </Col>
        
        <Col lg={6} className="text-center text-lg-start">
          <h4>Invest Wisely with our Affordable Package Options for Maximum Trading Potential</h4>
          <p>
            Explore our thoughtfully curated options, each offering a unique combination of features and benefits.
            Whether you're a beginner seeking guidance or an experienced trader, our packages are tailored to empower
            your trading experience. Choose the package that aligns with your goals and dive into the world of trading
            with confidence.
          </p>
          <Button style={{background:'#c3a34e'}} size="lg" onClick={() => navigate("/packages")}>Explore Packages</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
