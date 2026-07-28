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
    title: "Water resources",
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
    title: "Emergency services",
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
    <div className="w-full aspect-[4/3] bg-[#111111] flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-white/10">
      {/* Media area */}
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
            className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
          />
        </AnimatePresence>
      ) : ind.video ? (
        <video
          src={ind.video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-700"
        />
      ) : null}

      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Bottom text content overlay */}
      <div className="relative z-20 p-6 flex flex-col">
        <p className="text-gray-400 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">{ind.tag}</p>
        <h3 className="text-2xl font-bold text-white mb-1">{ind.title}</h3>
        <p className="text-[#da291c] text-[10px] md:text-xs font-bold tracking-widest uppercase">{ind.desc}</p>
      </div>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <div className="w-full py-16 bg-white border-t border-gray-100">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 relative">
        {/* Glow effects on sides */}
        <div className="absolute top-20 -left-[200px] md:-left-[300px] w-[600px] h-[600px] bg-[#da291c]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-20 -right-[200px] md:-right-[300px] w-[600px] h-[600px] bg-[#da291c]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 relative z-10 gap-8">
          <div className="flex flex-col text-left">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              INDUSTRIES WE SERVE
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-2xl">
              Six industries where Latrics is already reshaping how the ground gets read
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed text-left md:pb-2">
            From open-pit mines to river deltas, Latrics turns raw elevation and imagery into decisions your team can act on the same day.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 w-full bg-gray-200 border border-gray-200 p-1">
          {industries.map((ind, i) => (
            <IndustryCard key={i} ind={ind} />
          ))}
        </div>
      </div>
    </div>
  );
}
