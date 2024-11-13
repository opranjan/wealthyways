import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import './LiveDemo.css'
import { useNavigate } from 'react-router-dom';

const LiveDemoCard = () => {
  const navigate = useNavigate(); 

  const handleWhatsAppClick = () => {
    const phoneNumber = '+919324262969'; // Replace with your phone number in international format
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    window.open(url, '_blank'); // Open WhatsApp Web in a new tab
  };

  return (
    <div className="demo-section">
      <Container className="d-flex justify-content-center align-items-center h-100">
        <Card style={{ width: '25rem', padding: '20px', backgroundColor: 'rgba(0, 0, 0, 0.6)', color: 'white', borderRadius: '10px' }}>
          <Card.Body>
            <Card.Title style={{ fontSize: '24px', fontWeight: 'bold' }}>Need a Live demo call?</Card.Title>
            <Card.Text>
              We are here to provide personalized guidance and help you make informed trading decisions.
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button style={{background:'#c3a34e'}} onClick={()=>handleWhatsAppClick()}>Get Live Demo Call</Button>
              <Button variant="outline-light" onClick={() => navigate("/packages")}>View Pricing</Button>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default LiveDemoCard;
