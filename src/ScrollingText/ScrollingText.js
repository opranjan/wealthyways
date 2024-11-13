// ScrollingText.js
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import './ScrollingText.css'; // Custom CSS for scrolling

const ScrollingText = () => {
  useEffect(() => {
    const scrollText = document.getElementById('scrolling-text');
    let scrollPos = 0;

    const scrollEffect = () => {
      scrollPos -= 1; // Adjust this value to control the speed
      scrollText.style.transform = `translateX(${scrollPos}px)`;

      // Reset scroll position to create infinite scrolling effect
      if (Math.abs(scrollPos) >= scrollText.offsetWidth) {
        scrollPos = window.innerWidth;
      }

      requestAnimationFrame(scrollEffect);
    };

    scrollEffect();
  }, []);

  return (
    <div className="scrolling-container bg-black text-white">
      <Container>
        <div id="scrolling-text">
          Before you join us, make sure to carefully read our disclaimer, legal disclaimer, terms and conditions,
          refund policy, and other company policies. Investing in the stock market carries risks. Clients make their
          own trading decisions but it’s not personalized investment advice. We don't offer trade execution services.
        </div>
      </Container>
    </div>
  );
};

export default ScrollingText;
