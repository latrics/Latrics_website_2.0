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
    <section 
      className="relative min-h-screen flex items-center bg-gray-50 pt-32 pb-20 border-b border-gray-200 bg-cover bg-center"
      style={{
        backgroundImage: `url('/assets/partners_page_bg.png')`,
      }}
    >
      {/* Background tint overlay removed per user request */}

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <p className="text-brand-red text-xs md:text-sm font-heading font-semibold tracking-widest uppercase mb-6">
            LATRICS CHANNEL PARTNER PROGRAM
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-sans">
            Grow your business with <br />
            autonomous geospatial intelligence
          </h1>
          
          <p className="text-brand-olive text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Resell, integrate, or deliver Latrics' drone, LiDAR, and Terrain Desk platform — backed by training, marketing, and technical support.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="bg-[#da291c] border border-transparent text-white px-8 py-4 text-sm font-semibold hover:bg-red-700 transition-colors shadow-sm"
          >
            Apply to become a partner &darr;
          </button>
        </div>
      </div>
    </section>
  );
}
