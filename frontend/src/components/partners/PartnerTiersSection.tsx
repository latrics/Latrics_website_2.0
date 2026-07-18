import React from "react";
import SectionLayout from "../SectionLayout";

const tiers = [
  {
    tierNum: "TIER 01",
    name: "Reseller",
    desc: "Sell LiCopter P720 hardware & Terrain Desk subscriptions in your region."
  },
  {
    tierNum: "TIER 02",
    name: "Integration partner",
    desc: "Embed Latrics Digital & Geo-AI analytics into your own platform via API."
  },
  {
    tierNum: "TIER 03",
    name: "Strategic / delivery partner",
    desc: "Joint field operations — flight crews, processing & end-to-end delivery."
  }
];

export default function PartnerTiersSection() {
  return (
    <SectionLayout 
      number="02 / PARTNER TIERS" 
      title="" 
      subtitle="Three ways to work with us."
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full h-full">
        {tiers.map((tier, i) => (
          <div 
            key={i} 
            className={`flex flex-col p-8 ${i !== 2 ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''}`}
          >
            <span className="text-brand-red text-xs font-semibold tracking-wider uppercase mb-2">
              {tier.tierNum}
            </span>
            <h4 className="text-brand-charcoal font-bold text-xl mb-4">{tier.name}</h4>
            <p className="text-brand-olive text-sm leading-relaxed">{tier.desc}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
