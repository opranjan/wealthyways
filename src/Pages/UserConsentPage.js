import React from 'react'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation'
import UserConsent from '../userconsent/UserConsent'
import UserConsentForm from '../userconsent/UserConsentForm'

export default function UserConsentPage() {
  return (
    <div style={{background:'#ffffff', padding:'10px'}}>
    <ScrollAnimation delay={100}>
       <UserConsent/>
       </ScrollAnimation>
       <ScrollAnimation delay={100}>
      <UserConsentForm/>
      </ScrollAnimation>
    </div>
  )
}
