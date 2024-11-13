import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const TradeServiceSection = () => {
  return (
    <Container className="py-5">
      {/* Main Heading */}
      <h1 className="fw-bold mb-4 text-center">Trade with Wealthy Ways Like a Professional</h1>
      
      {/* Grid Layout for Questions */}
      <Row>
        <Col md={6} className="d-flex align-items-center mb-3">
          <span className="text-success fs-2 me-2">?</span>
          <span>Are you overlooking the benefits of professional research services?</span>
        </Col>
        <Col md={6} className="d-flex align-items-center mb-3">
          <span className="text-success fs-2 me-2">?</span>
          <span>Searching for a trustworthy and user-friendly platform for trading in the Indian stock market?</span>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="d-flex align-items-center mb-3">
          <span className="text-success fs-2 me-2">?</span>
          <span>Fed up with receiving empty promises?</span>
        </Col>
        <Col md={6} className="d-flex align-items-center mb-3">
          <span className="text-success fs-2 me-2">?</span>
          <span>Consider opting for Wealthy Ways alerts as your primary choice.</span>
        </Col>
      </Row>
    </Container>
  );
};

export default TradeServiceSection;
