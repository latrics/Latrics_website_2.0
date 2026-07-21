import React from "react";
import Image from "next/image";

export default function PerformanceBanner() {
  const stats = [
    {
      value: "±5 cm",
      label: "POSITIONAL ACCURACY"
    },
    {
      value: "99.2%",
      label: "MISSION SUCCESS RATE"
    },
    {
      value: "1,200 ha",
      label: "MAPPED PER FLIGHT DAY"
    },
    {
      value: "500+",
      label: "MISSIONS FLOWN"
    }
  ];

  return (
    <div className="relative w-full py-24 bg-[#fafafa] overflow-hidden border-y border-gray-200">
      {/* Topo Map Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="/assets/topo_map.png" 
          alt="Topo Map Background" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12 text-center">
        
        <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
          Performance & Accuracy
        </h3>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-16">
          Numbers that hold up in the field
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[9px] font-bold tracking-[0.15em] uppercase text-gray-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
