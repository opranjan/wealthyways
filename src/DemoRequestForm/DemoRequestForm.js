import axios from "axios"; // Importing axios for API call
import React, { useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row, Spinner } from "react-bootstrap";
// import "./DemoRequestForm.css"; 

const DemoRequestForm = () => {
  const [loading, setLoading] = useState(false); // State to manage the loading state
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    trading: "",
    segment: "",
    investment: "",
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
    setLoading(true); // Set loading to true when submitting the form

    try {
      await axios.post("https://tradeacebackend.onrender.com/send-email", formData);
      alert("Thank you for reaching out to us! Your submission has been received");
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Failed to submit the form.");
    }

    setLoading(false); // Stop the loader after form submission
  };

  return (
    <Container className="my-5" >
      <Row className="justify-content-center">
        {/* Form Section */}
        <Col xs={12} md={6} lg={6} >
          <div className="p-4 bg-light rounded shadow" style={{background:'red', margin:'10px'}}>
            <h3 className="text-center mb-4">Request a Live demo call now!</h3>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formFirstName" className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      value={formData.firstname}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName" className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      value={formData.lastname}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group controlId="formPhoneNumber" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Mobile Number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email ID"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formTradingStatus" className="mb-3">
                <Form.Label>Are you currently trading?</Form.Label>
                <Form.Select
                  name="trading"
                  value={formData.trading}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Option</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Form.Select>
              </Form.Group>

              <Row>
                <Col md={6}>
                  <Form.Group controlId="formSegment" className="mb-3">
                    <Form.Label>Segment</Form.Label>
                    <Form.Select
                      name="segment"
                      value={formData.segment}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Segment</option>
                      <option value="Equity Cash/Intraday">Equity Cash/Intraday</option>
                      <option value="Option (Call/Put)">Option (Call/Put)</option>
                      <option value="Future (Derivatives)">Future (Derivatives)</option>
                      <option value="Index">Index</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formInvestmentAmount" className="mb-3">
                    <Form.Label>Investment Amount</Form.Label>
                    <Form.Control
                      as="select"
                      name="investment"
                      value={formData.investment}
                      onChange={handleChange}
                    >
                      <option value="">Select Amount</option>
                      <option value="Below ₹50,000">Below ₹50,000</option>
                      <option value="₹50,000 - 1 Lakh">₹50,000 - 1 Lakh</option>
                      <option value="1 Lakh -3 Lakhs">1 Lakh -3 Lakhs</option>
                      <option value="3 Lakhs -5 Lakhs">3 Lakhs -5 Lakhs</option>
                      <option value="5 Lakhs & above">5 Lakhs & above</option>
                    </Form.Control>
                  </Form.Group>
                </Col>
              </Row>

              <Button style={{background:'#c3a34e'}} type="submit" className="w-100 my-3" disabled={loading}>
                {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
              </Button>
            </Form>
          </div>
        </Col>

        {/* Features Section */}
        <Col xs={12} md={6} lg={5} className="mt-4 mt-md-0">
          <div className="features-section p-4 bg-light rounded shadow-lg">
            <h4 className="text-center mb-4 gradient-text">
              Options trading with trusted Recommendations
            </h4>
            <ListGroup className="features-list">
              <ListGroup.Item className="feature-item d-flex align-items-center mb-3">
                {/* <BsCheckCircleFill className="icon-feature text-success me-3" /> */}
                <span>
                  Trusted Analyzer Firm: Known for reliability among traders.
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="feature-item d-flex align-items-center mb-3">
                {/* <BsCheckCircleFill className="icon-feature text-success me-3" /> */}
                <span>Services: Specializes in options trading.</span>
              </ListGroup.Item>
              <ListGroup.Item className="feature-item d-flex align-items-center mb-3">
                {/* <BsCheckCircleFill className="icon-feature text-success me-3" /> */}
                <span>
                  Comprehensive Market Coverage: Offers insights on Nifty,
                  BankNifty, FinNifty, Midcap, Sensex, and Bankex.
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="feature-item d-flex align-items-center mb-3">
                {/* <BsCheckCircleFill className="icon-feature text-success me-3" /> */}
                <span>
                  Professional Analysts: Provides researched recommendations
                  across various market segments.
                </span>
              </ListGroup.Item>
              <ListGroup.Item className="feature-item d-flex align-items-center mb-3">
                {/* <BsCheckCircleFill className="icon-feature text-success me-3" /> */}
                <span>
                  Focused on Quality: Committed to delivering highly researched
                  trading services and recommendations.
                </span>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DemoRequestForm;
