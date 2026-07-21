import React from "react";
import Image from "next/image";

const stats = [
  { value: "±5 cm", label: "POSITIONAL ACCURACY" },
  { value: "99.2%", label: "MISSION SUCCESS RATE" },
  { value: "1,200 ha", label: "MAPPED PER FLIGHT DAY" },
  { value: "500+", label: "MISSIONS FLOWN" },
];

export default function StatsSection() {
  return (
    <section className="relative w-full py-24 bg-gray-100 overflow-hidden flex flex-col items-center justify-center border-b border-gray-200">
      {/* Topo Map Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <Image 
          src="/assets/topo_map.png" 
          alt="Topo Map Background" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center w-full">
        <h4 className="text-brand-red font-bold text-[10px] tracking-widest uppercase mb-4">
          PERFORMANCE & ACCURACY
        </h4>
        <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-16">
          Numbers that hold up in the field
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <h3 className="text-4xl md:text-5xl font-extrabold text-brand-charcoal mb-3">
                {stat.value}
              </h3>
              <p className="text-brand-olive text-[10px] md:text-xs font-bold tracking-widest uppercase text-center max-w-[150px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
