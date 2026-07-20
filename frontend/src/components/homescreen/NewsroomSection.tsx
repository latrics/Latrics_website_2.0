import React from "react";
import Image from "next/image";
import SectionLayout from "../SectionLayout";

export default function NewsroomSection() {
  return (
    <SectionLayout number="06 / NEWSROOM" title="Newsroom" subtitle="Latest from Latrics.">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Left Featured News */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-full aspect-[4/3] bg-[#1a1c18] relative flex items-end p-6 overflow-hidden group cursor-pointer">
            <Image src="/assets/news_drone.png" alt="Drone over corridor" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            <span className="relative z-10 text-gray-300 text-xs font-semibold tracking-widest uppercase">BVLOS-APPROVED CORRIDOR MISSION</span>
          </div>
          <div className="p-8 bg-white">
            <p className="text-brand-red text-xs font-semibold tracking-widest uppercase mb-4">FEATURED • JUN 2026</p>
            <h3 className="text-3xl font-bold text-brand-charcoal mb-4 leading-tight">Latrics receives BVLOS approval for corridor operations</h3>
          </div>
        </div>
        
        {/* Right News List */}
        <div className="flex flex-col">
          <div className="p-8 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors relative">
            <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase mb-2">MAY 2026</p>
            <h4 className="text-xl font-bold text-brand-charcoal">Terrain Desk coverage crosses 100 districts</h4>
            {/* Logo Watermark Placeholder */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
              <div className="w-16 h-16 border-4 border-brand-charcoal rotate-45"></div>
            </div>
          </div>
          <div className="p-8 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors">
            <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase mb-2">APR 2026</p>
            <h4 className="text-xl font-bold text-brand-charcoal">New LiDAR payload hits ±15 mm field accuracy</h4>
          </div>
          <div className="p-8 hover:bg-gray-50 cursor-pointer transition-colors">
            <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase mb-2">MAR 2026</p>
            <h4 className="text-xl font-bold text-brand-charcoal">Latrics Energy crosses 20 MW owned solar</h4>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
