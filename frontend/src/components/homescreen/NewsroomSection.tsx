"use client";
import React, { useState } from "react";
import Image from "next/image";

const newsItems = [
  {
    date: "MAY 2026",
    tag: "AP DRONE CITY INITIATIVE",
    headline: "Latrics Receives Land Allocation to Contribute to Andhra Pradesh Drone City Vision",
    description: "LiCopter P720 deployment and R&D facility established in Kurnool under the AP Drone City initiative, inaugurated in Puttaparthi in the presence of Defence Minister Shri Rajnath Singh and AP Chief Minister Shri Nara Chandrababu Naidu. Delivering precision LiDAR mapping for smart infrastructure, defense readiness, and critical corridor surveying — advancing India's sovereign autonomous ecosystem.",
    image: "/assets/landAllocation_highlights.jpg"
  },
  {
    date: "MAY 2026",
    tag: "KOTAK BIZLABS SEASON 2",
    headline: "Latrics Received ₹30 Lakh Grant Support from Kotak BizLabs Season 2",
    description: "Selected among the top 15 startups from 730+ applications nationwide, receiving grant support to scale India's indigenous LiDAR platform for critical infrastructure operations.",
    image: "/assets/kotakBizlab.jpg"
  },
  {
    date: "JAN 2026",
    tag: "DGCA TYPE CERTIFICATION",
    headline: "Finally, Latrics Now Has India's First DGCA Certified LiDAR Drone",
    description: "LiCopter P720 received DGCA Type Certification as India's first indigenous LiDAR drone platform. Engineered for commercial autonomy, it delivers precise aerial mapping, advanced obstacle avoidance, and secure deployments across mining, infrastructure, and critical operations.",
    image: "/assets/dgca_certified_highlight.jpeg"
  },
  {
    date: "JAN 2025",
    tag: "VIKSIT BHARAT YOUNG LEADER DIALOGUE",
    headline: "Latrics Presents Indigenous LiCopter P720 to PM Modi at Viksit Bharat Young Leader Dialogue 2025",
    description: "LiCopter was showcased to Hon'ble PM Shri Narendra Modi at the Viksit Bharat Young Leader Dialogue 2025, securing national recognition and multi-channel coverage for advancing India's indigenous aerial mapping and autonomous operations.",
    image: "/assets/My%20pitch%20with%20Modi%20ji.jpeg"
  }
];

export default function NewsroomSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = newsItems[activeIndex];

  return (
    <div className="w-full py-16 bg-white border-t border-gray-100">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col text-left mb-12">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            NEWSROOM
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Latest from Latrics
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border border-gray-200 gap-1 bg-gray-200 p-1">
          {/* Left Featured News */}
          <div className="flex flex-col bg-white">
            <div className="w-full aspect-[4/3] bg-gray-900 relative flex items-end p-6 overflow-hidden group cursor-pointer">
              <Image src={active.image} alt={active.headline} fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="p-8 flex-1 flex flex-col justify-center border-t border-gray-200">
              <p className="text-[#da291c] text-xs font-semibold tracking-widest uppercase mb-4">Featured • {active.date} <span className="text-gray-400 mx-2">/</span> {active.tag}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{active.headline}</h3>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">{active.description}</p>
            </div>
          </div>

          {/* Right News List */}
          <div className="flex flex-col bg-white">
            {newsItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-full h-full p-8 flex items-center gap-6 text-left hover:bg-gray-50 transition-colors ${idx < newsItems.length - 1 ? "border-b border-gray-200" : ""} ${idx === activeIndex ? "bg-gray-50" : ""}`}
              >
                <div className="relative w-32 h-20 shrink-0 overflow-hidden border border-gray-200">
                  <Image src={item.image} alt={item.headline} fill className="object-cover" />
                </div>
                <div>
                  <p className="text-gray-500 text-[10px] font-bold tracking-[0.1em] uppercase mb-2">{item.date}</p>
                  <h4 className="text-sm font-bold text-gray-900 leading-snug">{item.headline}</h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
