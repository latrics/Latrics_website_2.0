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
    <div className="w-full py-16 bg-white border-t border-gray-100">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          {/* Glow effects on sides */}
          <div className="absolute top-20 -left-[200px] md:-left-[300px] w-[600px] h-[600px] bg-[#da291c]/10 blur-[150px] rounded-full pointer-events-none" />

          {/* Left Column: Text Content */}
          <div className="flex flex-col text-left">
            <h3 className="text-[#da291c] text-xs font-bold uppercase tracking-[0.2em] mb-6">
              FLAGSHIP PRODUCT
            </h3>

            <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1] max-w-2xl">
              Every square metre of<br />
              India, mapped with <br />
              <span className="text-[#da291c]">survey-grade precision</span>
            </h2>

            <p className="text-gray-500 text-lg md:text-xl max-w-xl mt-8 leading-relaxed">
              Terrain Desk is the geospatial intelligence platform behind India's fastest-growing survey teams - buy, view, and analyse high-precision KML data without ever booking a flight.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4 mt-10">
              <a
                href="https://www.terraindesk.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#da291c] text-white px-8 py-4 text-sm font-bold hover:bg-red-700 transition-colors shadow-[0_4px_20px_rgba(218,41,28,0.4)] hover:shadow-[0_8px_30px_rgba(218,41,28,0.6)]"
              >
                Open Terrain Desk &rarr;
              </a>
              <button className="bg-transparent border border-gray-300 text-gray-900 px-8 py-4 text-sm font-bold hover:bg-gray-50 transition-colors">
                Browse coverage
              </button>
            </div>
          </div>

          {/* Right Column: Video/Card */}
          <div className="w-full aspect-[16/9] lg:aspect-[4/3] bg-gray-900 rounded-none overflow-hidden relative border border-gray-200 shadow-2xl">
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

            {/* Overlay UI - Top Right instead of Top Left for better balance in 2-col? Actually keep it as it was but adjust text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-gray-300 text-xs tracking-widest uppercase font-mono">
                  Terrain Desk — coverage across India
                </span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.terraindesk.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#da291c] text-sm font-bold hover:text-red-400 transition-colors flex items-center"
                >
                  Launch live map &rarr;
                </a>
                <button
                  onClick={toggleMute}
                  className="w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all border border-white/20 hover:scale-105"
                  aria-label={isMuted ? "Unmute video" : "Mute video"}
                >
                  {isMuted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 1 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06Z" />
                      <path d="M15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
