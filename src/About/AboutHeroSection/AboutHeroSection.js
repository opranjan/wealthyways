import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import banner  from "../../images/banner1.jpg"

const AboutHeroSection = () => {
  return (
    <Container fluid className="p-0" style={{ margin:'1px',}}>
      {/* Image Section */}
      <Row className="align-items-center justify-content-center hero-image p-3 "
       style={{boxShadow:'4px 4px 15px rgba(0, 0, 0, 0.8)',margin:'10px', borderRadius:'3px'}}>
        <Col xs={12} md={10} lg={8} className="text-center">
          {/* The background image */}
          <Image 
            src={banner}
            alt="graph and hand"
            fluid 
            className="hero-img"
            style={{borderRadius:'5px'}}
          />
        </Col>
      </Row>

      {/* Text Section */}
      <Row className="text-center my-5">
        <Col>
          <h2 className="hero-heading">The trusted analyzer firm by traders.</h2>
          <p className="hero-subheading">
            We offer services in Options trading.
          </p>
          <p className="hero-detail">
            Our research analyst provides recommendation across various segments including Nifty, 
            BankNifty, FinNifty, Midcap, Sensex, and Bankex.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutHeroSection;
