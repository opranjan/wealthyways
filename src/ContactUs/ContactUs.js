import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddressCard from './AddressCard/AddressCard';
import ContactUsFormCard from './ContactUsFormCard/ContactUsFormCard';


const ContactUs = () => {
  return (
    <Container fluid className="contact-us-section ">
      <Row>
        <Col>
          <AddressCard />
        </Col>
        <Col>
          <ContactUsFormCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
