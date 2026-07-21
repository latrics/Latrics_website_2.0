import React from "react";
import Image from "next/image";

export default function IndustryApplications() {
  const sectors = [
    {
      title: "Mining",
      tags: "STOCKPILE • PIT PROGRESSION",
      image: "/assets/Mines1.png"
    },
    {
      title: "Highways & Railways",
      tags: "CORRIDOR MAPPING • INSPECTION",
      image: "/assets/Highway.png"
    },
    {
      title: "Urban Development",
      tags: "CITY PLANNING • 3D MODELING",
      image: "/assets/SIDE VIEW.png"
    },
    {
      title: "Energy & Utilities",
      tags: "SOLAR • TRANSMISSION",
      image: "/assets/energy_1.png"
    },
    {
      title: "Water Resources",
      tags: "HYDROLOGY • BATHYMETRY",
      image: "/assets/WATER1.png"
    },
    {
      title: "Emergency Services",
      tags: "DISASTER MAPPING • RESPONSE",
      image: "/assets/news_drone.png"
    }
  ];

  return (
    <div id="applications" className="w-full py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        <div className="text-center max-w-7xl mx-auto mb-16">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Industry Applications
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            One platform, Infinite possibilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm">
          {sectors.map((sector, idx) => (
            <div key={idx} className="bg-white flex flex-col group cursor-pointer">
              <div className="w-full aspect-[4/3] relative overflow-hidden">
                <Image src={sector.image} alt={sector.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#da291c] transition-colors">
                  {sector.title}
                </h4>
                <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-gray-400">
                  {sector.tags}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
