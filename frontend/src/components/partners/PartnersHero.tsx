"use client";

import React from "react";

export default function PartnersHero() {
  const scrollToForm = () => {
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gray-50 pt-32 pb-20 border-b border-gray-200">
      {/* Background Image (Mirrored) */}
      <div 
        className="absolute inset-0 bg-cover bg-center scale-x-[-1]"
        style={{
          backgroundImage: `url('/assets/partners_page_bg.png')`,
        }}
      />
      {/* Background tint overlay removed per user request */}

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-4xl">
          <p className="text-white text-xs md:text-sm font-heading font-semibold tracking-widest uppercase mb-6 drop-shadow-md">
            LATRICS CHANNEL PARTNER PROGRAM
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-sans drop-shadow-md">
            Grow your business with <br />
            autonomous geospatial intelligence
          </h1>
          
          <p className="text-white/90 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Resell, integrate, or deliver Latrics' drone, LiDAR, and Terrain Desk platform — backed by training, marketing, and technical support.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="bg-white border border-transparent text-[#da291c] px-8 py-4 text-sm font-semibold hover:bg-gray-100 transition-colors shadow-sm"
          >
            Apply to become a partner &darr;
          </button>
        </div>
      </div>
    </section>
  );
}
