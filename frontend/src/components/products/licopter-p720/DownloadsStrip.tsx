import React from "react";

export default function DownloadsStrip() {
  const downloads = [
    {
      title: "LiCopter P720 Datasheet",
      subtitle: "PDF SPECIFICATIONS",
      url: "#"
    },
    {
      title: "Latrics Brochure",
      subtitle: "PDF PLATFORM OVERVIEW",
      url: "#"
    },
    {
      title: "User & Safety Manual",
      subtitle: "PDF OPERATIONS",
      url: "#"
    }
  ];

  return (
    <div id="downloads" className="w-full bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row">
        
        {/* Label */}
        <div className="py-8 md:py-12 md:w-64 shrink-0 flex items-center border-b md:border-b-0 md:border-r border-gray-200">
          <span className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em]">
            Downloads
          </span>
        </div>

        {/* Links */}
        <div className="flex-1 flex flex-col md:flex-row">
          {downloads.map((item, idx) => (
            <a 
              key={idx} 
              href={item.url}
              className="flex-1 p-8 md:p-12 flex items-center justify-between group hover:bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 last:border-0 transition-colors"
            >
              <div>
                <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#da291c] transition-colors">
                  {item.title}
                </h4>
                <p className="text-[9px] font-bold tracking-[0.1em] uppercase text-gray-400">
                  {item.subtitle}
                </p>
              </div>
              <div className="text-[#da291c] font-light text-xl transition-transform group-hover:translate-y-1">
                &darr;
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
