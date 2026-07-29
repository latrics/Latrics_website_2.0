import React from "react";
import { ArrowUpRight, Check, Target, Phone } from "lucide-react";

const reasons = [
  {
    icon: <ArrowUpRight className="text-[#da291c] w-5 h-5" strokeWidth={2.5} />,
    title: "REVENUE SHARE",
    desc: "Tiered margins on hardware, software & Terrain Desk data resale."
  },
  {
    icon: <Check className="text-[#da291c] w-5 h-5" strokeWidth={2.5} />,
    title: "CERTIFIED TRAINING",
    desc: "DGCA-aligned pilot & LiDAR-processing certification for your team."
  },
  {
    icon: <Target className="text-[#da291c] w-5 h-5" strokeWidth={2.5} />,
    title: "MARKETING SUPPORT",
    desc: "Co-branded collateral, lead-sharing & joint case studies."
  },
  {
    icon: <Phone className="text-[#da291c] w-5 h-5" strokeWidth={2.5} />,
    title: "DEDICATED SUPPORT",
    desc: "A named partner manager & priority technical escalation."
  }
];

export default function WhyPartnerSection() {
  return (
    <div id="why-partner" className="w-full py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 mb-16">
          <div className="lg:w-1/2">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              WHY PARTNER
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Four reasons partners choose Latrics
            </h2>
          </div>
          <div className="lg:w-1/2 lg:pt-8">
            <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
              Grow your capabilities and offer industry-leading geospatial and LiDAR mapping services powered by our indigenous technology.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-gray-200">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-[#fafafa] p-8 border-r border-b border-gray-200 flex flex-col items-start hover:bg-white transition-colors duration-300">
              <div className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center mb-6">
                {reason.icon}
              </div>
              <h4 className="text-[10px] font-bold text-[#da291c] tracking-[0.15em] uppercase mb-4">
                {reason.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
