import React from "react";
import Image from "next/image";

export default function ModularPayloads() {
  const modules = [
    {
      title: "61MP Camera Payload",
      desc: "Up to 45-min flight time, covering 1.2km² per flight at 100m altitude",
      image: "/assets/61mp_camera.png"
    },
    {
      title: "LiDAR Payload",
      desc: "Up to 40-min flight time, covering 1km² per flight at 100m altitude",
      image: "/assets/lidar.png"
    },
    {
      title: "Oblique Camera Payload",
      desc: "Up to 45-min flight time, covering 1.2km² per flight at 100m altitude",
      image: "/assets/oblique.png"
    }
  ];

  return (
    <div className="w-full py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Accessories & Payloads
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Modular by design
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white flex flex-col group">
              <div className="relative w-full aspect-[4/3] p-1 bg-gray-100">
                <Image src={mod.image} alt={mod.title} fill className="object-contain" />
              </div>
              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#da291c] transition-colors">
                  {mod.title}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  {mod.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
