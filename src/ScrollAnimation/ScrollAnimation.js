// ScrollAnimation.js
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollAnimation = ({ children, initialY = 20, delay = 0 }) => {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on mount

    // Trigger animation after a delay on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: initialY }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : initialY }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
