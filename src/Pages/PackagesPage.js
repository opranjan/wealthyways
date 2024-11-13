import React from 'react'
import PricingCard from '../Packages/PricingCard'
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

export default function PackagesPage() {

    const packages = [
        {
          title: "Monthly Package",
          price: "₹69999",
          description: [
            "One research alert per day through WhatsApp broadcast.",
    
            "Every research alert with target and stop loss.",
    
            "Live Market customer support is available.",
    
            "Get Quality Research Alerts of Bank Nifty/Nifty Option per day.",
    
            "Risk Level: - High to Very High"
          ]
        },
        {
          title: "Quarterly Package",
          price: "₹149999",
          description: [
            "One research alert per day through WhatsApp broadcast.",
    
            "Every research alert with target and stop loss.",
    
            "Live Market customer support is available.",
    
            "Get Quality Research Alerts of Bank Nifty/Nifty Option per day.",
    
            "Risk Level: - High to Very High"
          ]
        },
        {
          title: "Half Yearly Package",
          price: "₹275000",
          description: [
            "One research alert per day through WhatsApp broadcast.",
    
            "Every research alert with target and stop loss.",
    
            "Live Market customer support is available.",
    
            "Get Quality Research Alerts of Bank Nifty/Nifty Option per day.",
    
            "Risk Level: - High to Very High"
          ]
        },
        {
          title: "Yearly Package",
          price: "₹500000",
          description: [
            "One research alert per day through WhatsApp broadcast.",
    
            "Every research alert with target and stop loss.",
    
            "Live Market customer support is available.",
    
            "Get Quality Research Alerts of Bank Nifty/Nifty Option per day.",
    
            "Risk Level: - High to Very High"
          ]
        }
      ];






      const packagesPremium = [
        {
          title: "Monthly Package",
          price: "₹125000",
          description: [
            "One research alert per day through WhatsApp broadcast.",
    
            "Get trade alert of Bank Nifty/Nifty/Finnifty Option per day.",
    
            "Get trade alert of Bankex/Sensex/Midcap every week.",
    
            "Get Expiry Special research alerts on every weekly expiry and BTST",
    
            "Get well-researched targets and stop-loss on every research alert.",
            "Risk Level: - High to Very High"
          ]
        },
        {
          title: "Quarterly Package",
          price: "₹₹325000",
          description: [
            "One research alert per day through WhatsApp broadcast.",
    
            "Get trade alert of Bank Nifty/Nifty/Finnifty Option per day",
    
            "Get trade alert of Bankex/Sensex/Midcap every week.",
    
            "Get Expiry Special research alerts on every weekly expiry and BTST",
    
            "Get well-researched targets and stop-loss on every research alert",
            "Risk Level: - High to Very High",
          ]
        },
        {
          title: "Half Yearly Package",
          price: "₹₹610000",
          description: [
            "One to two research alert per day through WhatsApp broadcast.",
    
            "Get trade alert of Bank Nifty/Nifty/Finnifty Option per day.",
    
            "Get trade alert of Bankex/Sensex/Midcap every week",
    
            "Get Expiry Special research alerts on every weekly expiry and BTST",
    
            "Get well-researched targets and stop-loss on every research alert.",
            "Risk Level: - High to Very High"
          ]
        },
        {
          title: "Yearly Package",
          price: "₹1199990",
          description: [
            "One research alert per day through WhatsApp broadcast.",
    
            "Get trade alert of Bank Nifty/Nifty/Finnifty Option per day",
    
            "Get trade alert of Bankex/Sensex/Midcap every week",
    
            "Get Expiry Special research alerts on every weekly expiry and BTST",
    
            "Get well-researched targets and stop-loss on every research alert",
            "Risk Level: - High to Very High"
          ]
        }
      ];
  return (
    <div>
    <ScrollAnimation delay={100}>
    <PricingCard packages={packagesPremium} title={"Index Options (NIFTY / BANK NIFTY/FIN FIFTY) Premium Package"}/>
    </ScrollAnimation>
    <ScrollAnimation delay={100}>
      <PricingCard packages={packages} title={"Index Options (NIFTY / BANK NIFTY/FIN FIFTY) Standard Package"}/>
      </ScrollAnimation>
    </div>
  )
}
 