"use client";
import React, { useState, useRef } from "react";
import SectionLayout from "../SectionLayout";

export default function TerrainDeskSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <SectionLayout number="01 / FLAGSHIP" title="Terrain Desk">
      <div className="flex flex-col lg:flex-row gap-12 p-8 lg:p-16">
        <div className="lg:w-1/2 flex flex-col justify-center">
          <p className="text-brand-red font-semibold tracking-widest text-xs uppercase mb-4">Terrain Desk</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-charcoal mb-6 leading-tight">
            Geospatial intelligence platform
          </h2>
          <p className="text-brand-olive text-lg leading-relaxed mb-8">
            Buy, view, and analyse high-precision KML map data across India. Trusted by surveyors, urban planners, and GIS professionals — no flight required.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-red text-white px-8 py-3 text-sm font-semibold hover:bg-red-700 transition-colors">
              Open Terrain Desk
            </button>
            <button className="bg-white border border-gray-300 text-brand-charcoal px-8 py-3 text-sm font-semibold hover:bg-gray-50 transition-colors">
              Browse coverage
            </button>
          </div>
        </div>
        <div className="lg:w-1/2 relative">
          <div className="w-full aspect-[16/10] bg-black relative overflow-hidden border-l-4 border-gray-800">
             <video 
               ref={videoRef}
               src="/assets/Terrain desk intro.mp4" 
               className="w-full h-full object-cover"
               autoPlay
               loop
               muted={isMuted}
               playsInline
             />
             
             {/* Overlay UI */}
             <div className="absolute top-6 left-6 text-xs font-semibold text-white bg-black/50 px-3 py-1 rounded backdrop-blur-sm">
               TERRAIN DESK — COVERAGE ACROSS INDIA
             </div>
             
             <div className="absolute bottom-6 left-6 flex items-center gap-4">
               <button className="bg-white text-black px-6 py-2.5 text-xs font-semibold hover:bg-gray-200 flex items-center gap-2">
                 ▶ Launch live map
               </button>
               
               <button 
                 onClick={toggleMute}
                 className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-colors border border-white/20"
                 aria-label={isMuted ? "Unmute video" : "Mute video"}
               >
                 {isMuted ? (
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                     <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
                   </svg>
                 ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                     <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 1 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                     <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                   </svg>
                 )}
               </button>
             </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
