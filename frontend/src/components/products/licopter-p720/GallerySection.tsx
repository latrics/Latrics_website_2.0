import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import Image from "next/image";

export default function GallerySection() {
  return (
    <div id="gallery" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Gallery
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            In the field
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-px bg-gray-200 border border-gray-200 shadow-sm h-[600px] md:h-[700px]">
          
          {/* Main Large Image */}
          <div className="md:col-span-2 md:row-span-2 bg-white relative overflow-hidden group">
            <Image src="/assets/drone_fly.jpeg" alt="Drone in flight" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>

          {/* Small Images */}
          <div className="md:col-span-1 md:row-span-1 bg-white relative overflow-hidden group">
            <Image src="/assets/drone_white.jpeg" alt="Drone White" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="md:col-span-1 md:row-span-1 bg-white relative overflow-hidden group">
            <Image src="/assets/drone_unfold_white.jpeg" alt="Drone Unfold" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="md:col-span-1 md:row-span-1 bg-white relative overflow-hidden group">
            <Image src="/assets/drone_top_white.jpeg" alt="Drone Top" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="md:col-span-1 md:row-span-1 bg-white relative overflow-hidden group">
            <Image src="/assets/drone 5.png" alt="Drone 5" fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
          </div>

        </div>

      </div>
    </div>
  );
}
