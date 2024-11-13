import React from 'react';
import { Button } from 'react-bootstrap'; // Button component from Bootstrap
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon from react-icons package
import './FloatingWhatsapp.css'; // Import CSS for floating effect

const FloatingWhatsapp = () => {
  return (
    <div className="floating-whatsapp">
      <Button
        href="https://wa.me/+919323662969"
        target="_blank"
        className="whatsapp-button"
        style={{ backgroundColor: '#25D366', border: 'none' }}
      >
        <FaWhatsapp size={30} /> {/* WhatsApp icon with size 30 */}
      </Button>
    </div>
  );
};

export default FloatingWhatsapp;
