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
      className="relative min-h-[70vh] flex items-center bg-gray-50 pt-32 pb-20 border-b border-gray-200"
      style={{
        backgroundImage: `repeating-linear-gradient(
          -45deg,
          #e5e7eb,
          #e5e7eb 1px,
          transparent 1px,
          transparent 20px
        )`,
        backgroundSize: "28px 28px"
      }}
    >
      {/* Background tint overlay */}
      <div className="absolute inset-0 bg-white/60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-4xl">
          <p className="text-brand-red text-xs md:text-sm font-heading font-semibold tracking-widest uppercase mb-6">
            LATRICS CHANNEL PARTNER PROGRAM
          </p>
          
          <h1 className="text-4xl md:text-6xl font-bold text-brand-charcoal mb-6 leading-tight font-sans">
            Grow your business with <br />
            autonomous geospatial intelligence
          </h1>
          
          <p className="text-brand-olive text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
            Resell, integrate, or deliver Latrics' drone, LiDAR, and Terrain Desk platform — backed by training, marketing, and technical support.
          </p>
          
          <button 
            onClick={scrollToForm}
            className="bg-white border border-gray-300 text-brand-charcoal px-8 py-4 text-sm font-semibold hover:bg-gray-50 transition-colors shadow-sm"
          >
            Apply to become a partner &darr;
          </button>
        </div>
      </div>
    </section>
  );
}
