import React from "react";
import Image from "next/image";

export default function ProductOverview() {
  return (
    <div id="overview" className="w-full pt-16 pb-0 bg-white border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Product Overview
            </h3>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Multi-sensor intelligence for true 3D reality capture
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium mb-12 max-w-lg">
              An indigenous, DGCA type-certified LiDAR drone, designed and made in India. The LiCopter P720 pairs an indigenous LiDAR seamlessly integrated with IMU and GPS, deployed across mining, mobility, urban development, energy, water, and emergency response — wherever most platforms can&apos;t reach.
            </p>

            <div className="grid grid-cols-3 border-t border-l border-gray-200 w-full max-w-lg">
              <div className="p-4 md:p-6 border-b border-r border-gray-200 flex flex-col justify-center bg-[#fafafa]">
                <div className="text-[#da291c] text-xl md:text-2xl font-black mb-1 whitespace-nowrap">45+ min</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">Endurance</div>
              </div>
              <div className="p-4 md:p-6 border-b border-r border-gray-200 flex flex-col justify-center bg-[#fafafa]">
                <div className="text-[#da291c] text-xl md:text-2xl font-black mb-1 whitespace-nowrap">Foldable</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">Design</div>
              </div>
              <div className="p-4 md:p-6 border-b border-r border-gray-200 flex flex-col justify-center bg-[#fafafa]">
                <div className="text-[#da291c] text-xl md:text-2xl font-black mb-1 whitespace-nowrap">All-Terrain</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">Flight Capability</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative w-full lg:w-1/2 aspect-square max-h-[600px] order-1 lg:order-2 overflow-hidden">
            <Image src="/assets/product_overview_drone720.jpg" alt="LiCopter P720 drone" fill className="object-cover mix-blend-multiply scale-125" />
          </div>

        </div>
      </div>

      {/* Second Block: Field Ready - Full Width Banner */}
      <div className="relative w-full py-24 mt-20 min-h-[500px] flex items-center justify-start overflow-hidden border-t border-gray-200">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image src="/assets/aerospace_1.jpeg" alt="Field ready durability background" fill className="object-cover object-right" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-2xl">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              FIELD-READY DURABILITY
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Field-ready durability
            </h2>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
              Compact foldable design (900mm to 450mm) with an integrated detect-and-avoid system, rated for -20°C to 55°C operation across mines, highways, and remote terrain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
