import React from 'react';
import { Card } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaPinterest } from 'react-icons/fa';
import './AddressCard.css';

const AddressCard = () => {
  return (
    <Card className="address-card shadow-lg">
      <Card.Body>
        <h5>Contact Info</h5>

        <div className="info-section">
          <FaMapMarkerAlt className="icon" />
          <p>Mumbai</p>
        </div>

        <div className="info-section">
          <FaPhoneAlt className="icon" />
          <p>+91 97657 87654</p>
        </div>

        <div className="info-section">
          <FaEnvelope className="icon" />
          <p>wealthyways@gmail.com</p>
          <p>saleswealthyways@gmail.com</p>
        </div>

        <div className="info-section">
          <FaClock className="icon" />
          <div>
            <h5>Monday to Friday</h5>
            <p>09:00 to 06:00 PM</p>
          </div>
        </div>

        <div className="info-section">
          <FaClock className="icon" />
          <div>
            <h5>Saturday</h5>
            <p>09:00 to 06:00 PM</p>
          </div>
        </div>

        <div className="info-section">
          <FaClock className="icon" />
          <div>
            <h5>Sunday</h5>
            <p>Closed</p>
          </div>
        </div>

        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaPinterest /></a>
        </div>

        <button className="enquiry-button">Enquiry Now →</button>
      </Card.Body>
    </Card>
  );
};

export default AddressCard;
