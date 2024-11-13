import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaClock, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import colors from '../colors/colors';

const TopBar = () => {
  return (
    <div className="d-none d-lg-block" style={{ backgroundColor: colors.goldenbrown, padding: '10px 0', color: 'white' }} >
      <Container>
        <Row>
          <Col className="d-flex justify-content-end">
            <div className="d-flex align-items-center me-4">
              <FaMapMarkerAlt className="me-2" />
              <span> Mumbai</span>
            </div>
            <div className="d-flex align-items-center me-4">
              <FaPhoneAlt className="me-2" />
              <span>Free Consultation</span>
            </div>
            <div className="d-flex align-items-center">
              <FaClock className="me-2" />
              <span>Mon to Fri: 9:00 AM to 06:00 PM</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
