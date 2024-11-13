import React from 'react';
import DemoRequestForm from '../DemoRequestForm/DemoRequestForm';
import HeroSection from '../HeroSection/HeroSection';
import TradeAceServices from '../TradeAceServices/TradeAceServices';
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'; // Import the ScrollAnimation component

function HomePage() {
  return (
    <div >
      <ScrollAnimation>
        <DemoRequestForm />
      </ScrollAnimation>
      <div style={{background:'#E9E7E7'}}>
      <ScrollAnimation>
        <TradeAceServices />
      </ScrollAnimation>
      </div>
      <ScrollAnimation>
        <HeroSection />
      </ScrollAnimation>
    </div>
  );
}

export default HomePage;
