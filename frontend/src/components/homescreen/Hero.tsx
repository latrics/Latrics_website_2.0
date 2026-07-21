"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: "slide-1",
    type: "video",
    src: "/assets/hero_drone_video.mp4",
    kicker: "DGCA-CERTIFIED LIDAR DRONE PLATFORM • MADE IN INDIA",
    title: "Building Better <br /> Tomorrow",
    description: "LiCopter P720 - India's first indigenous, DGCA-certified LiDAR drone. Multi-sensor intelligence for true 3D reality capture, from the mine to the grid.",
    primaryAction: "Request a demo",
    secondaryAction: "Explore the Product",
    secondaryUrl: "/products/licopter-p720"
  },
  {
    id: "slide-2",
    type: "image",
    src: "/assets/digital_intelligence_1.png",
    kicker: "TERRAIN DESK • DIGITAL INTELLIGENCE",
    title: "Digital Intelligence, <br /> Mapped",
    description: "Survey-grade LiDAR point clouds turned into actionable geospatial intelligence - terrain, assets, and infrastructure in true 3D.",
    primaryAction: "Request a demo",
    secondaryAction: "Explore Solutions",
    secondaryUrl: "#"
  },
  {
    id: "slide-3",
    type: "image",
    src: "/assets/energy_1.png",
    kicker: "LATRICS ENERGY • SUSTAINABLE POWER",
    title: "Powering <br /> Sustainable Energy",
    description: "20+ MW of owned solar capacity, monitored end-to-end - from site survey to asset performance.",
    primaryAction: "Request a demo",
    secondaryAction: "Explore Solutions",
    secondaryUrl: "#"
  }
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);

  const activeSlide = slides[activeIndex];

  // The next two slides for thumbnails
  const thumbnails = [
    slides[(activeIndex + 1) % slides.length],
    slides[(activeIndex + 2) % slides.length]
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-20">

      {/* Background Layer with layout animations */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={`bg-${activeSlide.id}`}
            layoutId={`media-${activeSlide.id}`}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Gradients to ensure text readability */}
            <div className="w-full h-full bg-gradient-to-r from-black/90 via-black/60 to-transparent absolute z-10 pointer-events-none" />
            <div className="w-full h-full bg-gradient-to-t from-black/40 to-transparent absolute z-10 pointer-events-none" />

            {activeSlide.type === "video" ? (
              <video
                className="absolute inset-0 w-full h-full object-cover pointer-events-none -scale-x-100 saturate-[1.2] contrast-110 brightness-75"
                src={activeSlide.src}
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <Image
                src={activeSlide.src}
                alt={activeSlide.title}
                fill
                className="object-cover pointer-events-none brightness-75"
                priority
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex flex-col md:flex-row items-center justify-between min-h-[calc(100vh-5rem)]">

        {/* Left Content Area */}
        <div className="max-w-2xl mt-20 md:mt-0 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${activeSlide.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-brand-red text-xs md:text-sm font-heading font-semibold tracking-widest uppercase">
                  {activeSlide.kicker.split(" • ")[0]}
                </span>
                <span className="text-brand-red text-xs md:text-sm">•</span>
                <span className="text-brand-red text-xs md:text-sm font-heading font-semibold tracking-widest uppercase">
                  {activeSlide.kicker.split(" • ")[1]}
                </span>
              </div>

              <h1
                className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                dangerouslySetInnerHTML={{ __html: activeSlide.title }}
              />

              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-xl leading-relaxed">
                {activeSlide.description}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#demo-section"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                  }}
                  className="bg-brand-red text-white px-8 py-3.5 text-sm font-semibold hover:bg-red-700 transition-colors rounded-none inline-block text-center"
                >
                  {activeSlide.primaryAction}
                </a>
                <Link href={activeSlide.secondaryUrl} className="bg-transparent border border-gray-400 text-white px-8 py-3.5 text-sm font-semibold hover:border-white transition-colors rounded-none backdrop-blur-sm inline-block text-center">
                  {activeSlide.secondaryAction}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Carousel/Thumbnails Area */}
        <div className="hidden md:flex flex-col items-end justify-end self-end pb-12 gap-4">
          <div className="flex items-center gap-4">
            <AnimatePresence mode="popLayout">
              {thumbnails.map((thumb) => (
                <motion.div
                  key={`thumb-${thumb.id}`}
                  layoutId={`media-${thumb.id}`}
                  onClick={() => setActiveIndex(slides.findIndex(s => s.id === thumb.id))}
                  className="w-40 h-24 bg-gray-900 rounded-sm overflow-hidden cursor-pointer relative border border-white/20 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors z-10" />
                  {thumb.type === "video" ? (
                    <video
                      className="w-full h-full object-cover -scale-x-100"
                      src={thumb.src}
                      muted
                      playsInline
                    />
                  ) : (
                    <Image
                      src={thumb.src}
                      alt="thumbnail"
                      fill
                      className="object-cover"
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4 mt-2">
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-[2px] cursor-pointer transition-all ${idx === activeIndex ? 'w-8 bg-white' : 'w-8 bg-gray-600 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-white transition-colors"
              >
                <span className="text-xs">&lt;</span>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:border-white transition-colors"
              >
                <span className="text-xs">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
