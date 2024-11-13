import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { FaArrowCircleRight } from 'react-icons/fa'; // Importing Font Awesome Icon
import './PricingCard.css'; // Import the CSS file
import '../colors/colors.css'
import colors from '../colors/colors';

const PricingCard = ({packages, title}) => {

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-5">{title}</h2>
      <Row>
        {packages.map((pkg, index) => (
          <Col key={index} lg={3} md={6} sm={12} className="mb-4">
            <Card className="h-100" style={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', backgroundColor: 'white' }}>
              <Card.Header className="text-center" style={{ backgroundColor: colors.primary, color: '#fff', borderRadius: '10px 10px 0 0', fontSize: '18px' }}>
                {pkg.title}
              </Card.Header>
              <Card.Body>
                <h3 className="text-center" style={{ color: colors.primary, fontWeight: 'bold', marginBottom: '20px' }}>{pkg.price}</h3>
                <ul style={{ listStyleType: 'none', padding: '0', fontSize: '14px', lineHeight: '1.7', textAlign: 'left', color: 'black' }}>
                  {pkg.description.map((desc, idx) => (
                    <li key={idx} style={{marginTop:'10px', marginBottom:'10px', fontSize:'15px'}}>{desc}</li>
                  ))}
                </ul>
              </Card.Body>
              <Card.Footer className="text-center" style={{  borderTop: 'none' }}>
                <Button className="custom-btn">
                  Enquire Now <FaArrowCircleRight className="icon" />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PricingCard;
