import axios from 'axios';
import React, { useState } from 'react';
import { Button, Card, Col, Form, Row, Spinner } from 'react-bootstrap';
import './UserConsentForm.css'; // Import custom CSS for further styling

const UserConsentForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    agentAddress: '',
    panCardImage: null,
    aadharFront: null,
    aadharBack: null,
    consent: false,
  });

  const [loading, setLoading] = useState(false); // For loading spinner

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('You must agree to the consent before submitting.');
      return;
    }

    // Prepare the form data to send to the API
    const data = new FormData();
    data.append('fullname', formData.name);
    data.append('email', formData.email);
    data.append('phone', formData.phoneNumber);
    data.append('agentAddress', formData.agentName);
    data.append('panCardImage', formData.panCard);
    data.append('aadharFront', formData.aadharFront);
    data.append('aadharBack', formData.aadharBack);

    try {
      setLoading(true); // Start the spinner

      // Replace the URL with your actual API endpoint
      const response = await axios.post('https://tradeacebackend.onrender.com/user-consent', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Form submitted successfully:', response.data);
      alert('Form submitted successfully! Please check your email for further details');
      // Clear the form after successful submission
      setFormData({
        fullname: '',
        email: '',
        phone: '',
        agentAddress: '',
        panCardImage: null,
        aadharFront: null,
        aadharBack: null,
        consent: false,
      });
    } catch (error) {
      console.error('Error submitting the form:', error);
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false); // Stop the spinner
    }
  };

  return (
    <div className="d-flex justify-content-center mt-1">
      <Card className="custom-card shadow-sm">
        <Card.Header className="text-center bg-grey text-white ">
          <h4 className='text-black'>User Consent Form</h4>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="name">
                  <Form.Label>Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="email">
                  <Form.Label>Email *</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group controlId="phoneNumber" className="mb-3">
              <Form.Label>Phone Number *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="form-input"
              />
              <Form.Text className="text-muted">
                This field is required. Please input a phone number.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="agentName" className="mb-3">
              <Form.Label>Agent's Name *</Form.Label>
              <Form.Control
                type="text"
                placeholder="Agent's Name"
                name="agentName"
                value={formData.agentName}
                onChange={handleChange}
                required
                className="form-input"
              />
              <Form.Text className="text-muted">Name is required.</Form.Text>
            </Form.Group>

            <Row className="mb-3">
              <Col md={12}>
                <Form.Label>Upload PAN Card</Form.Label>
                <Form.Control
                  type="file"
                  name="panCard"
                  onChange={handleChange}
                  required
                  className="file-input"
                />
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={6}>
                <Form.Label>Upload Aadhaar Front</Form.Label>
                <Form.Control
                  type="file"
                  name="aadharFront"
                  onChange={handleChange}
                  required
                  className="file-input"
                />
              </Col>
              <Col md={6}>
                <Form.Label>Upload Aadhaar Back</Form.Label>
                <Form.Control
                  type="file"
                  name="aadharBack"
                  onChange={handleChange}
                  required
                  className="file-input"
                />
              </Col>
            </Row>

            <Form.Group controlId="consent" className="mb-4">
              <Form.Check
                type="checkbox"
                label={
                  <>
                    Yes, I agree with all the policies,{' '}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="/terms-conditions" target="_blank" rel="noopener noreferrer">
                      Terms & Conditions
                    </a>.
                  </>
                }
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
                className="consent-checkbox"
              />
            </Form.Group>

            <Form.Text className="text-muted mb-4 d-block">
              Note: Our Research alerts will be provided only after successful acceptance of User Consent.
            </Form.Text>

            <Button variant="success" type="submit" className="submit-button w-100" disabled={loading}>
              {loading ? (
                <Spinner animation="border" size="sm" role="status" aria-hidden="true" />
              ) : (
                'SUBMIT'
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserConsentForm;
