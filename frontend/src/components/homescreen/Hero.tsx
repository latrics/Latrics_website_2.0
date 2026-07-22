"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[100dvh] flex items-center bg-black overflow-hidden pt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        {/* Gradients for readability */}
        <div className="w-full h-full bg-gradient-to-r from-black/80 via-black/30 to-transparent absolute z-10 pointer-events-none" />
        <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent absolute z-10 pointer-events-none" />

        <video
          className="absolute inset-0 w-full h-full object-cover pointer-events-none -scale-x-100 opacity-90"
          src="/assets/globe_india_v5.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col justify-center min-h-[calc(100vh-5rem)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mt-20 md:mt-0"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[#da291c] text-xs md:text-sm font-semibold tracking-widest uppercase">
              LATRICS INNOVATION GROUP
            </span>
            <span className="text-[#da291c] text-xs md:text-sm">•</span>
            <span className="text-[#da291c] text-xs md:text-sm font-semibold tracking-widest uppercase">
              BUILT FOR THE FUTURE
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering Tomorrow.<br />
            Mapping India.
          </h1>

          <div className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed space-y-4">
            <p>
              Through aerospace innovation, intelligent geospatial technologies, and sustainable energy systems, Latrics is creating a unified digital ecosystem that enables governments, industries, and enterprises to build with confidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#demo-section"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
              }}
              className="bg-[#da291c] text-white px-8 py-3.5 text-sm font-semibold hover:bg-red-700 transition-colors rounded-none inline-block text-center"
            >
              Request a demo
            </a>
            <Link href="/products/licopter-p720" className="bg-transparent border border-gray-400 text-white px-8 py-3.5 text-sm font-semibold hover:border-white transition-colors rounded-none backdrop-blur-sm inline-block text-center">
              Explore the Product
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
