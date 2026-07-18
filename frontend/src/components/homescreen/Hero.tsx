import React from "react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-70">
        {/* Dark gradient for left text readability */}
        <div className="w-full h-full bg-gradient-to-r from-black via-black/90 to-transparent absolute z-10 pointer-events-none" />
        {/* Brightening gradient on the right side */}
        <div className="w-full h-full bg-gradient-to-l from-white/40 to-transparent absolute z-10 pointer-events-none mix-blend-overlay" />
        
        <video 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none -scale-x-100 saturate-[1.75] contrast-125 brightness-110"
          src="/assets/hero_drone_video.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between">
        {/* Left Content Area */}
        <div className="max-w-2xl mt-20 md:mt-0">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-brand-red text-xs md:text-sm font-heading font-semibold tracking-widest uppercase">
              DGCA-CERTIFIED LIDAR DRONE PLATFORM
            </span>
            <span className="text-brand-red text-xs md:text-sm">•</span>
            <span className="text-brand-red text-xs md:text-sm font-heading font-semibold tracking-widest uppercase">
              MADE IN INDIA
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Building Better <br /> Tomorrow
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
            LiCopter P720 — India's first indigenous, DGCA-certified LiDAR drone. Multi-sensor intelligence for true 3D reality capture, from the mine to the grid.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-brand-red text-white px-8 py-3.5 text-sm font-semibold hover:bg-red-700 transition-colors">
              Request a demo
            </button>
            <button className="bg-transparent border border-gray-600 text-white px-8 py-3.5 text-sm font-semibold hover:border-white transition-colors">
              Explore the Product
            </button>
          </div>
        </div>

        {/* Right Carousel/Thumbnails Area */}
        <div className="hidden md:flex flex-col items-end justify-end self-end pb-12 gap-4">
          <div className="flex items-center gap-4">
            {/* Thumbnail 1 */}
            <div className="w-40 h-24 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
               <div className="w-full h-full bg-gradient-to-br from-blue-900 to-green-800 opacity-80" />
            </div>
            {/* Thumbnail 2 */}
            <div className="w-40 h-24 bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
               <div className="w-full h-full bg-gradient-to-br from-blue-400 to-gray-200 opacity-80" />
            </div>
          </div>
          
          {/* Carousel Controls */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex gap-2">
              <div className="w-8 h-[2px] bg-white" />
              <div className="w-8 h-[2px] bg-gray-600" />
              <div className="w-8 h-[2px] bg-gray-600" />
            </div>
            <div className="flex gap-2 ml-4">
              <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-white transition-colors">
                <span className="text-xs">&lt;</span>
              </button>
              <button className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-white transition-colors">
                <span className="text-xs">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
