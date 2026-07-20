import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProductHero() {
  return (
    <div className="relative w-full h-[85vh] min-h-[600px] flex items-end">
      {/* Background Placeholder */}
      <div className="absolute inset-0 z-0">
        <ImagePlaceholder mainText="Drop a LiCopter P720 hero photo or video still" />
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-8 lg:px-12 pb-16 lg:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#da291c] text-[10px] font-bold uppercase tracking-widest">
              DGCA-CERTIFIED LIDAR DRONE PLATFORM
            </span>
            <span className="w-1 h-1 rounded-full bg-[#da291c]"></span>
            <span className="text-[#da291c] text-[10px] font-bold uppercase tracking-widest">
              MADE IN INDIA
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight leading-none drop-shadow-md">
            LiCopter P720
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-10 max-w-2xl leading-snug drop-shadow-sm">
            Survey-grade LiDAR mapping, engineered for industrial scale — built to fly further, capture finer, and endure the field.
          </p>

          <div className="flex items-center gap-4">
            <a 
              href="#demo"
              className="bg-[#da291c] text-white px-8 py-3.5 text-sm font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              Book a demo
            </a>
            <a 
              href="#downloads"
              className="border border-white text-white px-8 py-3.5 text-sm font-semibold hover:bg-white hover:text-black transition-colors inline-flex items-center justify-center backdrop-blur-sm bg-black/20"
            >
              Download datasheet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
