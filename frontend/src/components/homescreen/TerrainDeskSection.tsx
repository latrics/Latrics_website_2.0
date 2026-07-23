"use client";
import React, { useState, useRef } from "react";

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
    <div className="w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex flex-col items-center text-center relative z-10">
          {/* Glow effect behind text */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#da291c]/5 blur-[120px] rounded-full pointer-events-none" />

          <h3 className="text-[#da291c] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            FLAGSHIP PRODUCT
          </h3>

          <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-gray-900 tracking-tight leading-[1.1] max-w-5xl mx-auto">
            Every square metre of <span className="text-[#da291c]">India</span>,<br className="hidden md:block" />
            mapped with survey-grade<br className="hidden md:block" />
            precision
          </h2>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mt-8 leading-relaxed">
            Terrain Desk is the geospatial intelligence platform behind India's fastest-growing survey teams - buy, view, and analyse high-precision KML data without ever booking a flight.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href="https://www.terraindesk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#da291c] text-white px-8 py-4 text-sm font-bold hover:bg-red-700 transition-colors shadow-[0_4px_20px_rgba(218,41,28,0.4)] hover:shadow-[0_8px_30px_rgba(218,41,28,0.6)]"
            >
              Open Terrain Desk &rarr;
            </a>
            <button className="bg-white border border-gray-200 text-gray-900 px-8 py-4 text-sm font-bold hover:bg-gray-50 transition-colors">
              Browse coverage
            </button>
          </div>
        </div>

        <div className="mt-20 w-full max-w-5xl mx-auto aspect-[16/9] bg-[#0a0a0a] rounded-none overflow-hidden relative border border-gray-800 shadow-2xl">
          {/* subtle grid background overlay if video doesn't cover or while loading */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

          <video
            ref={videoRef}
            src="/assets/Terrain desk intro.mp4"
            className="w-full h-full object-cover opacity-90"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          />

          {/* Overlay UI */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-widest text-white/90 bg-black/60 px-4 py-2.5 rounded-full backdrop-blur-md border border-white/10">
            <div className="w-2.5 h-2.5 rounded-full bg-[#da291c] animate-pulse shadow-[0_0_10px_rgba(218,41,28,0.8)]" />
            TERRAIN DESK — COVERAGE ACROSS INDIA
          </div>

          <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 z-20 flex items-center gap-4">
            <a
              href="https://www.terraindesk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 text-sm font-bold hover:bg-gray-100 flex items-center justify-center transition-colors shadow-lg rounded-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
              </svg>
              Launch live map
            </a>

            <button
              onClick={toggleMute}
              className="w-11 h-11 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/20 hover:scale-105"
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
  );
}
