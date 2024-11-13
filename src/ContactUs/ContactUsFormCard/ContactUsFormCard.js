import React, { useState } from 'react';
import { Card, Form, Button, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
import './ContactUsFormCard.css'; // Custom CSS for styling
import { Fade } from 'react-reveal'; // For animation effect

const ContactUsFormCard = () => {
  // States to manage form data and loading state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);  // Show spinner
    setError(null);    // Reset error state

    try {
      const response = await axios.post('https://tradeacebackend.onrender.com/enquiry-now', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setResponseMessage('Your enquiry has been submitted successfully!');
      } else {
        throw new Error('Something went wrong');
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    } finally {
      setLoading(false); // Hide spinner
    }
  };

  return (
    <Fade bottom> {/* Adding animation on card load */}
      <Card className="contact-form-card shadow-lg">
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label className="text-start">Full name*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                className="p-3"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label className="text-start">Active email*</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="p-3"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label className="text-start">Phone number*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your phone number"
                className="p-3"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="subject">
              <Form.Label className="text-start">Subject*</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter subject"
                className="p-3"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Label className="text-start">Message*</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message"
                className="p-3"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            {/* Display loading spinner while submitting */}
            <Button variant="primary" type="submit" className="submit-button mt-3" disabled={loading}>
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                'Submit'
              )}
            </Button>

            {/* Display success or error messages */}
            {responseMessage && <Alert variant="success" className="mt-3">{responseMessage}</Alert>}
            {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
          </Form>
        </Card.Body>
      </Card>
    </Fade>
  );
};

export default ContactUsFormCard;
