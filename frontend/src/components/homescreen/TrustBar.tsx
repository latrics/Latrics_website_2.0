"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  {
    icon: "/assets/DGCA Stamp seal.png",
    title: "DGCA Certified",
    subtitle: "FLEET & OPERATOR",
    tagline: "DGCA approved for safe, compliant operations.",
  },
  {
    icon: "/assets/iso 9001.png",
    title: "ISO 9001",
    subtitle: "QUALITY MANAGEMENT",
    tagline: "Certified processes for consistent quality.",
  },
  {
    icon: "/assets/make_in_india_stamp.png",
    title: "Made in India",
    subtitle: "ENGINEERED FOR IMPACT",
    tagline: "Designed and built in India to serve the world.",
  },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-[#f8f9fa] border-t border-b border-gray-200 py-6">
      <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col xl:flex-row items-center justify-between gap-6 xl:gap-8">
        {/* Header */}
        <h3 className="text-[#da291c] font-heading text-[10px] md:text-xs tracking-[0.25em] font-bold uppercase whitespace-nowrap shrink-0 text-center xl:text-left xl:mr-4">
          Trusted &amp; Certified
        </h3>

        {/* Badges */}
        {badges.map((badge, idx) => (
          <motion.div
            key={badge.title}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.06 }}
            className="flex items-center gap-4 group cursor-default"
          >
            {/* Badge Icon */}
            <div className="w-20 h-20 md:w-24 md:h-24 relative shrink-0 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={badge.icon}
                alt={badge.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Text Info */}
            <div className="flex flex-col justify-center gap-1">
              <h4 className="text-[#0f172a] font-bold text-sm md:text-base leading-snug">
                {badge.title}
              </h4>
              <p className="text-[#0f172a] text-[9px] md:text-[10px] font-bold uppercase tracking-wider leading-snug">
                {badge.subtitle}
              </p>
              <p className="text-slate-500 text-[10px] md:text-xs font-medium leading-snug">
                {badge.tagline}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}









