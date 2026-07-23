"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const industries = [
  {
    tag: "OPEN-PIT MINE",
    title: "Mining",
    desc: "STOCKPILE • PIT PROGRESSION",
    fileName: "Open-pit mine — elevation scan",
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
    tag: "HIGHWAY CORRIDOR",
    title: "Highways & Rail",
    desc: "CORRIDOR • EARTHWORK",
    fileName: "Highway corridor — LiDAR point cloud",
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
    tag: "CITY SKYLINE",
    title: "Urban Development",
    desc: "BASE MAPS • LAND USE",
    fileName: "City skyline — aerial base map",
    images: [
      "/assets/1.png",
      "/assets/2.png",
      "/assets/SIDE VIEW.png"
    ]
  },
  {
    tag: "TRANSMISSION LINE",
    title: "Power & Utilities",
    desc: "CORRIDOR THERMAL • VEGETATION",
    fileName: "Transmission line — thermal survey",
    video: "/assets/energy_vid.MP4",
  },
  {
    tag: "FOREST CANOPY",
    title: "Forestry",
    desc: "CANOPY HEIGHT • BIOMASS",
    fileName: "Forest canopy — 3D point cloud",
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
    tag: "RIVER DELTA",
    title: "Water & Flood Risk",
    desc: "WATERSHED • INUNDATION",
    fileName: "River delta — flood risk mapping",
    images: [
      "/assets/emergency1.png",
      "/assets/emergency2.png",
      "/assets/emergency3.png",
      "/assets/emergency4.png",
      "/assets/emergency5.png"
    ]
  }
];

function IndustryCard({ ind }: { ind: typeof industries[0] }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!ind.images || ind.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ind.images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [ind.images]);

  return (
    <div className="flex flex-col bg-white">
      {/* Media area */}
      <div className="w-full aspect-[4/3] bg-[#f8f8f8] flex flex-col items-center justify-center relative overflow-hidden border border-gray-200">
        
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
        ) : ind.video ? (
          <video
            src={ind.video}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
        ) : (
          <div className="flex flex-col items-center text-center gap-2 z-10">
            <svg className="w-8 h-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className="text-sm font-semibold text-gray-700">{ind.fileName}</p>
            <p className="text-xs text-gray-500">
              or <span className="underline cursor-pointer hover:text-gray-700">browse files</span>
            </p>
          </div>
        )}

        {/* Overlay for text readability (only if media is present) */}
        {(ind.images || ind.video) && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-0 pointer-events-none opacity-50" />
        )}

        {/* Tag at bottom left */}
        <div className="absolute bottom-0 left-0 bg-black/80 backdrop-blur-md text-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider z-10">
          {ind.tag}
        </div>
      </div>
      
      {/* Bottom text content */}
      <div className="pt-6 pb-4">
        <h3 className="text-2xl font-black text-black mb-2">{ind.title}</h3>
        <p className="text-[#da291c] text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">{ind.desc}</p>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <div className="w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            INDUSTRIES WE SERVE
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15] max-w-5xl mx-auto mb-6 text-balance">
            Six industries where <span className="text-[#da291c]">Latrics is already reshaping</span> how the ground gets read
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From open-pit mines to river deltas, Latrics turns raw elevation and imagery into decisions your team can act on the same day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full">
          {industries.map((ind, i) => (
            <IndustryCard key={i} ind={ind} />
          ))}
        </div>
      </div>
    </div>
  );
}
