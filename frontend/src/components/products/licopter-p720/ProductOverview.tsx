import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ProductOverview() {
  return (
    <div id="overview" className="w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 aspect-square max-h-[600px] border border-gray-200 p-2">
            <ImagePlaceholder mainText="Drop a studio product photo" />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Product Overview
            </h3>
            
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
              Engineered from the ground up for the field
            </h2>
            
            <p className="text-gray-500 text-base md:text-lg leading-relaxed font-medium mb-12 max-w-lg">
              The LiCopter P720 pairs a carbon-composite airframe with an indigenously engineered LiDAR and RGB payload, delivering survey-grade point clouds at production scale — across mines, corridors, and terrain most platforms can&apos;t reach.
            </p>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-[#da291c] text-3xl font-black mb-1">60 min</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase">Endurance</div>
              </div>
              <div>
                <div className="text-[#da291c] text-3xl font-black mb-1">2.5 kg</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase">Max Payload</div>
              </div>
              <div>
                <div className="text-[#da291c] text-3xl font-black mb-1">IP54</div>
                <div className="text-gray-400 text-[9px] font-bold tracking-[0.15em] uppercase">Weather Rating</div>
              </div>
            </div>
          </div>

        </div>

        {/* Second Block: Field Ready */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mt-24">
          
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 aspect-[4/3] max-h-[500px] border border-gray-200 p-2">
            <ImagePlaceholder mainText="Field durability photo" />
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
              IP54-rated, carbon-composite airframe engineered for dust, heat, and monsoon conditions across mines, highways, and remote terrain.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
