import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiPhoneCall } from 'react-icons/fi'; // Phone Icon from Feather Icons
import { MdVerified } from 'react-icons/md'; // SEBI Registered Icon from Material Design Icons
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Check Circle from Ant Design Icons
import CardItem from './CardItem'; // Import the updated CardItem component
import './TradeAceServices.css'; // Import custom CSS for styling
import '../colors/colors.css';

const TradeAceServices = () => {
  return (
    <Container
      fluid
      className="py-5 text-center"
      style={{ width: '80%', margin: '0 auto' }}
    >
      <h2 className="mb-5">Why Choose Wealthyways Services?</h2>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <CardItem
            icon={FiPhoneCall}
            title="Complete Support on Daily Basis"
            description="Get 24/7 support for all your trading needs."
          />
        </Col>
        <Col md={4} className="mb-4">
          <CardItem
            icon={MdVerified}
            title="SEBI Registered"
            description="We are fully SEBI registered to ensure secure and compliant trading."
          />
        </Col>
        <Col md={4} className="mb-4">
          <CardItem
            icon={AiOutlineCheckCircle}
            title="Risk Managed Calls with Target and Stop Loss"
            description="Our calls come with clear risk management guidelines to protect your investment."
          />
        </Col>
      </Row>



      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <CardItem
            icon={FiPhoneCall}
            title="Complete Support on Daily Basis"
            description="Get 24/7 support for all your trading needs."
          />
        </Col>
        <Col md={4} className="mb-4">
          <CardItem
            icon={MdVerified}
            title="SEBI Registered"
            description="We are fully SEBI registered to ensure secure and compliant trading."
          />
        </Col>
        <Col md={4} className="mb-4">
          <CardItem
            icon={AiOutlineCheckCircle}
            title="Risk Managed Calls with Target and Stop Loss"
            description="Our calls come with clear risk management guidelines to protect your investment."
          />
        </Col>
      </Row>
    </Container>
  );
};

export default TradeAceServices;
