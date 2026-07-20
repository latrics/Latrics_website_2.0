import React from "react";

export default function BottomCtaBanner() {
  return (
    <div id="demo" className="w-full bg-[#4a4a4a] py-20 border-b-4 border-[#da291c]">
      <div className="max-w-6xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="max-w-xl">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Book a demo
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            See LiCopter P720 fly in your terrain
          </h2>
          <p className="text-gray-300 text-sm font-medium leading-relaxed">
            Schedule a live demonstration with our field team, or talk to sales about deployment and pricing.
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-4">
          <a 
            href="#contact"
            className="bg-[#da291c] text-white px-8 py-3.5 text-sm font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
          >
            Book a demo &rarr;
          </a>
          <a 
            href="#sales"
            className="border border-white/30 text-white px-8 py-3.5 text-sm font-semibold hover:border-white transition-colors inline-flex items-center justify-center bg-black/10"
          >
            Contact sales
          </a>
        </div>

      </div>
    </div>
  );
}
