"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionLayout from "../SectionLayout";

const industries = [
  {
    imageSubtitle: "OPEN-PIT MINE",
    title: "Mining",
    desc: "STOCKPILE • PIT PROGRESSION",
    bg: "bg-[#0a0a0a]",
    images: [
      "/assets/Mines.png",
      "/assets/Mines1.png",
      "/assets/Mines2.png",
      "/assets/Mines3.png",
      "/assets/Mine4.png",
      "/assets/Mines5.png",
      "/assets/Mines6.png",
      "/assets/Mines7.png"
    ]
  },
  {
    imageSubtitle: "HIGHWAY CORRIDOR",
    title: "Highways & Rail",
    desc: "CORRIDOR • EARTHWORK",
    bg: "bg-[#251e1a]",
    images: [
      "/assets/Highway.png",
      "/assets/Highway1.png",
      "/assets/Highway2.png",
      "/assets/mnext_rail.png",
      "/assets/mnext_rail1.png",
      "/assets/pointcloud.png",
      "/assets/pointcloud1.png"
    ]
  },
  {
    imageSubtitle: "CITY SKYLINE",
    title: "Urban development",
    desc: "BASE MAPS • LAND USE",
    bg: "bg-[#181818]",
    images: [
      "/assets/1.png",
      "/assets/2.png",
      "/assets/SIDE VIEW.png"
    ]
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
    images: [
      "/assets/CONTOUR.png",
      "/assets/DSM_OV.png",
      "/assets/DSM.png",
      "/assets/DTM WITH BATHY.png",
      "/assets/DTM_OV.png",
      "/assets/DTM.png",
      "/assets/ORTHO_OV.png",
      "/assets/ORTHO.png",
      "/assets/ORTHOWITH HYDRO.png",
      "/assets/WATER1.png"
    ]
  },
  {
    imageSubtitle: "FLOOD RESPONSE",
    title: "Emergency services",
    desc: "FLOOD • DISASTER MAPPING",
    bg: "bg-[#261c18]",
  },
];

function IndustryCard({ ind, index }: { ind: any, index: number }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!ind.images || ind.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ind.images.length);
    }, 3000); // 3 seconds per image
    
    return () => clearInterval(interval);
  }, [ind.images]);

  const borderClass = `flex flex-col border-b border-gray-200 ${(index + 1) % 3 !== 0 ? 'lg:border-r' : ''} ${(index + 1) % 2 !== 0 ? 'md:border-r lg:border-r-0' : 'lg:border-r'} lg:[&:nth-child(3n)]:border-r-0`;

  return (
    <div className={borderClass}>
      <div className={`w-full aspect-[4/3] ${ind.bg} relative flex items-end p-6 overflow-hidden`}>
        {ind.images ? (
          <AnimatePresence mode="popLayout">
            <motion.img
              key={currentImageIndex}
              src={ind.images[currentImageIndex]}
              alt={`${ind.title} - ${currentImageIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover z-0"
            />
          </AnimatePresence>
        ) : null}
        
        {/* Overlay for text readability if there's an image */}
        {ind.images && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0 pointer-events-none" />
        )}
        
        <span className="text-gray-200 text-[10px] md:text-xs font-semibold tracking-widest uppercase relative z-10">
          {ind.imageSubtitle}
        </span>
      </div>
      {/* Content */}
      <div className="p-6 bg-white flex-1">
        <h3 className="text-lg font-bold text-brand-charcoal mb-1">{ind.title}</h3>
        <p className="text-brand-olive text-[10px] md:text-xs font-semibold tracking-widest uppercase">{ind.desc}</p>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <SectionLayout number="03 / INDUSTRIES WE SERVE" title="Six sectors served">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-l-0 md:border-l border-gray-200">
        {industries.map((ind, i) => (
          <IndustryCard key={i} ind={ind} index={i} />
        ))}
      </div>
    </SectionLayout>
  );
}
