import React from "react";
import SectionLayout from "../SectionLayout";

const industries = [
  {
    imageSubtitle: "OPEN-PIT MINE",
    title: "Mining",
    desc: "STOCKPILE • PIT PROGRESSION",
    bg: "bg-[#0a0a0a]",
  },
  {
    imageSubtitle: "HIGHWAY CORRIDOR",
    title: "Highways & Rail",
    desc: "CORRIDOR • EARTHWORK",
    bg: "bg-[#251e1a]",
  },
  {
    imageSubtitle: "CITY SKYLINE",
    title: "Urban development",
    desc: "BASE MAPS • LAND USE",
    bg: "bg-[#181818]",
  },
  {
    imageSubtitle: "SOLAR FARM",
    title: "Energy & Utilities",
    desc: "SOLAR • TRANSMISSION",
    bg: "bg-[#2c241c]",
  },
  {
    imageSubtitle: "RESERVOIR",
    title: "Water resources",
    desc: "DAMS • WATERSHED",
    bg: "bg-[#1f211c]",
  },
  {
    imageSubtitle: "FLOOD RESPONSE",
    title: "Emergency services",
    desc: "FLOOD • DISASTER MAPPING",
    bg: "bg-[#261c18]",
  },
];

export default function IndustriesSection() {
  return (
    <SectionLayout number="03 / INDUSTRIES WE SERVE" title="Six sectors served.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-l-0 md:border-l border-gray-200">
        {industries.map((ind, i) => (
          <div key={i} className={`flex flex-col border-b border-gray-200 ${(i + 1) % 3 !== 0 ? 'lg:border-r' : ''} ${(i + 1) % 2 !== 0 ? 'md:border-r lg:border-r-0' : 'lg:border-r'} lg:[&:nth-child(3n)]:border-r-0`}>
            {/* Image Placeholder */}
            <div className={`w-full aspect-[4/3] ${ind.bg} relative flex items-end p-6`}>
              <span className="text-gray-400 text-[10px] md:text-xs font-semibold tracking-widest uppercase">
                {ind.imageSubtitle}
              </span>
            </div>
            {/* Content */}
            <div className="p-6 bg-white">
              <h3 className="text-lg font-bold text-brand-charcoal mb-1">{ind.title}</h3>
              <p className="text-brand-olive text-[10px] md:text-xs font-semibold tracking-widest uppercase">{ind.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
