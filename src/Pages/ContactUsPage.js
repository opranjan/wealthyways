import React from 'react'
import ContactUs from '../ContactUs/ContactUs'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'

export default function ContactUsPage() {
  return (
    <div>
    <ScrollAnimation delay={100}>
      <ContactUs/>
      </ScrollAnimation>
    </div>
  )
}
