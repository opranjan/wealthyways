import axios from 'axios'; // For form submission API call
import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap'; // Added Spinner
import './CallbackForm.css';

const CallbackForm = () => {
  const [loading, setLoading] = useState(false); // State to manage loader
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    trading: '',
    segment: '',
    investment: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loader on form submit

    try {
      // Replace this with your actual API endpoint
      await axios.post('https://tradeacebackend.onrender.com/send-email', formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form', error);
      alert('Failed to submit the form.');
    }

    setLoading(false); // Stop loader after form submission
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#E9E7E7', padding: '10px' }}>
      <div className="p-5 m-1 formdivcallback" style={{ backgroundColor: '#fcfcfc', borderRadius: '5px', maxWidth: '98vw', width: '100%' }}>
        <h3 className="text-center mb-4">Request a call back.</h3>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formFirstName">
              <Form.Label>Full Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formLastName">
              <Form.Label>&nbsp;</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formPhone">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Mobile Number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formEmail">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email ID"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formTrading">
            <Form.Label>Are you currently trading? *</Form.Label>
            <Form.Control as="select" name="trading" value={formData.trading} onChange={handleChange} required>
              <option>Select an option</option>
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formSegment">
              <Form.Label>Segment *</Form.Label>
              <Form.Control as="select" name="segment" value={formData.segment} onChange={handleChange} required>
                <option>Select Segment</option>
                <option>Equity Cash/Intraday</option>
                <option>Option (Call/Put)</option>
                <option>Future (Derivatives)</option>
                <option>Index</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formInvestmentAmount">
              <Form.Label>Investment Amount *</Form.Label>
              <Form.Control as="select" name="investment" value={formData.investment} onChange={handleChange} required>
                <option>Select Amount</option>
                <option>Below ₹50,000</option>
                <option>₹50,000 - 1 Lakh</option>
                <option>1 Lakh -3 Lakhs</option>
                <option>3 Lakhs -5 Lakhs</option>
                <option>5 Lakhs & above</option>
              </Form.Control>
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" style={{ backgroundColor: '#3F51B5', width: '100%' }} disabled={loading}>
            {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CallbackForm;
