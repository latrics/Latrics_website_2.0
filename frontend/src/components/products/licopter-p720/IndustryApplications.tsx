import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function IndustryApplications() {
  const sectors = [
    {
      title: "Mining",
      tags: "STOCKPILE • PIT PROGRESSION",
      placeholder: "Mining photo"
    },
    {
      title: "Surveying",
      tags: "TOPOGRAPHIC • CADASTRAL",
      placeholder: "Surveying photo"
    },
    {
      title: "Construction",
      tags: "PROGRESS • VOLUMETRIC",
      placeholder: "Construction photo"
    },
    {
      title: "Agriculture",
      tags: "CROP HEALTH • TERRAIN",
      placeholder: "Agriculture photo"
    },
    {
      title: "Energy & Utilities",
      tags: "SOLAR • TRANSMISSION",
      placeholder: "Energy photo"
    },
    {
      title: "Emergency Response",
      tags: "FLOOD • DISASTER MAPPING",
      placeholder: "Emergency photo"
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
            <div key={idx} className="bg-white flex flex-col group">
              <div className="w-full aspect-[4/3] p-1">
                <ImagePlaceholder mainText={sector.placeholder} />
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
