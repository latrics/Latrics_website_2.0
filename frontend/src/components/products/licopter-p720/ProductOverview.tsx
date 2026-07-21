import React from "react";
import Image from "next/image";

export default function ProductOverview() {
  return (
    <div id="overview" className="w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image */}
          <div className="relative w-full lg:w-1/2 aspect-square max-h-[600px] border border-gray-200 p-2">
            <Image src="/assets/product_overview_drone720.jpg" alt="LiCopter P720 drone" fill className="object-cover" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Product Overview
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Multi-sensor intelligence for true 3D reality capture
            </h2>

            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium mb-12 max-w-lg">
              An indigenous, DGCA type-certified LiDAR drone, designed and made in India. The LiCopter P720 pairs an indigenous LiDAR seamlessly integrated with IMU and GPS, deployed across mining, mobility, urban development, energy, water, and emergency response wherever most platforms can&apos;t reach.
            </p>

            <div className="flex flex-wrap gap-x-10 gap-y-6">
              <div>
                <div className="text-[#da291c] text-2xl md:text-3xl font-black mb-1 whitespace-nowrap">45+ min</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">Endurance</div>
              </div>
              <div>
                <div className="text-[#da291c] text-2xl md:text-3xl font-black mb-1 whitespace-nowrap">Foldable</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">Design</div>
              </div>
              <div>
                <div className="text-[#da291c] text-2xl md:text-3xl font-black mb-1 whitespace-nowrap">All-Terrain</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">Flight Capability</div>
              </div>
            </div>
          </div>

        </div>

        {/* Second Block: Field Ready */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mt-24">
          
          {/* Left: Image */}
          <div className="relative w-full lg:w-1/2 aspect-[4/3] max-h-[500px] border border-gray-200 p-2">
            <Image src="/assets/aerospace_1.jpeg" alt="LiCopter P720 flying over remote terrain" fill className="object-cover" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Field-Ready Durability
            </h3>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6">
              Field-ready durability
            </h2>

            <p className="text-gray-500 text-base leading-relaxed font-medium max-w-md">
              Compact foldable design (900mm to 450mm) with an integrated detect-and-avoid system, rated for -20°C to 55°C operation across mines, highways, and remote terrain.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
