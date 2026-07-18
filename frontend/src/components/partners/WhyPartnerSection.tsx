import React from "react";
import SectionLayout from "../SectionLayout";
import { ArrowUpRight, Check, Target, Phone } from "lucide-react";

const reasons = [
  {
    icon: <ArrowUpRight className="text-brand-red w-6 h-6" strokeWidth={2.5} />,
    title: "Revenue share",
    desc: "Tiered margins on hardware, software & Terrain Desk data resale."
  },
  {
    icon: <Check className="text-brand-red w-6 h-6" strokeWidth={2.5} />,
    title: "Certified training",
    desc: "DGCA-aligned pilot & LiDAR-processing certification for your team."
  },
  {
    icon: <Target className="text-brand-red w-6 h-6" strokeWidth={2.5} />,
    title: "Marketing support",
    desc: "Co-branded collateral, lead-sharing & joint case studies."
  },
  {
    icon: <Phone className="text-brand-red w-6 h-6" strokeWidth={2.5} />,
    title: "Dedicated support",
    desc: "A named partner manager & priority technical escalation."
  }
];

export default function WhyPartnerSection() {
  return (
    <SectionLayout 
      number="01 / WHY PARTNER" 
      title="" 
      subtitle="Four reasons partners choose Latrics."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full h-full">
        {reasons.map((reason, i) => (
          <div 
            key={i} 
            className={`flex flex-col p-8 ${i !== 3 ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''} ${i === 2 ? 'border-b md:border-b-0' : ''}`}
          >
            <div className="mb-6">{reason.icon}</div>
            <h4 className="text-brand-charcoal font-bold text-lg mb-3">{reason.title}</h4>
            <p className="text-brand-olive text-sm leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
