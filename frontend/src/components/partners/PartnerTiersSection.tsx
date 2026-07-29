import React from "react";
import { ArrowRight } from "lucide-react";

const tiers = [
  {
    tierNum: "TIER 01",
    name: "Reseller",
    desc: "Sell LiCopter P720 hardware & Terrain Desk subscriptions in your region. Best suited for regional equipment distributors."
  },
  {
    tierNum: "TIER 02",
    name: "Integration partner",
    desc: "Embed Latrics Digital & Geo-AI analytics into your own platform via API. Perfect for software providers and drone tech creators."
  },
  {
    tierNum: "TIER 03",
    name: "Strategic / delivery partner",
    desc: "Joint field operations — flight crews, processing & end-to-end delivery. Designed for mapping agencies and certified pilot teams."
  }
];

export default function PartnerTiersSection() {
  return (
    <div id="partner-tiers" className="w-full py-16 bg-[#fafafa]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16 mb-16">
          <div className="lg:w-1/2">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              02 / PARTNER TIERS
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Three ways to work with us
            </h2>
          </div>
          <div className="lg:w-1/2 lg:pt-8">
            <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed">
              We offer structured partnership tiers tailored to your technical capacity, market presence, and business goals.
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className="bg-white p-8 border border-gray-200 flex flex-col items-start hover:shadow-md transition-shadow duration-300">
              <h4 className="text-[10px] font-bold text-[#da291c] tracking-[0.15em] uppercase mb-4">
                {tier.tierNum}
              </h4>
              <h3 className="text-gray-900 font-bold text-xl mb-4">{tier.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium mb-12 flex-1">
                {tier.desc}
              </p>
              
              <a href="#apply-form" className="group flex items-center justify-between w-full text-[10px] font-bold text-gray-400 hover:text-gray-900 tracking-[0.15em] uppercase transition-colors">
                SELECT THIS TIER
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
