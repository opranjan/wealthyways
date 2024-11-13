import React from 'react'
import CallbackForm from '../About/CallbackForm/CallbackForm'
import TradeServiceSection from '../About/TradeServiceSection/TradeServiceSection'
import AboutHeroSection from '../About/AboutHeroSection/AboutHeroSection'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'


export default function AboutPage() {
  return (
    <div style={{marginTop:'10px',marginBottom:'10px', background:'#fcfcfc'}}>
     <ScrollAnimation delay={100}>
    <AboutHeroSection/>
    </ScrollAnimation>

    <ScrollAnimation delay={100}>
    <TradeServiceSection/>
    </ScrollAnimation>

    <ScrollAnimation delay={100}>
      <CallbackForm/>
      </ScrollAnimation>
    </div>
  )
}
