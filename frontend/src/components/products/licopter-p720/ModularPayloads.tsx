import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";

export default function ModularPayloads() {
  const modules = [
    {
      title: "LiDAR Payload Module",
      desc: "Survey-grade point cloud capture, hot-swappable",
      placeholder: "LiDAR module"
    },
    {
      title: "RGB Camera Payload",
      desc: "High-resolution orthomosaic imaging",
      placeholder: "RGB camera"
    },
    {
      title: "Multispectral Sensor",
      desc: "Crop health and vegetation index mapping",
      placeholder: "Multispectral sensor"
    },
    {
      title: "Extra Battery Pack",
      desc: "Hot-swappable, 60-min rated cell",
      placeholder: "Battery pack"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 shadow-sm">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white flex flex-col group">
              <div className="w-full aspect-[4/3] p-1">
                <ImagePlaceholder mainText={mod.placeholder} />
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
