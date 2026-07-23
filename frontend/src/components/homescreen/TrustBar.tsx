"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  {
    icon: "/assets/DGCA Stamp seal.png",
    title: "DGCA Certified",
    subtitle: "Fleet & Operator",
    tagline: "Govt. Approved Platform",
  },
  {
    icon: "/assets/iso 9001.png",
    title: "ISO 9001",
    subtitle: "Quality Management",
    tagline: "Aerospace Standards",
  },
  {
    icon: "/assets/make_in_india_stamp.png",
    title: "Made in India",
    subtitle: "Indigenous Manufacturing",
    tagline: "100% In-House R&D",
  },
];

export default function TrustBar() {
  return (
    <section className="w-full bg-white border-t border-b border-gray-100 py-6 md:py-7">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        {/* Header - Clean uppercase tracking without dots */}
        <h3 className="text-[#da291c] font-heading text-[10px] md:text-xs tracking-[0.25em] font-bold uppercase mb-5 text-center">
          Trusted &amp; Certified
        </h3>

        {/* 3 Columns: Big Badges + Side-by-Side Condensed Text */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-gray-200/80">
          {badges.map((badge, idx) => (
            <motion.div
              key={badge.title}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="flex items-center gap-4 md:gap-5 px-3 md:px-6 py-3 md:py-0 group cursor-default"
            >
              {/* BIG Badge Icon (96px x 96px on desktop) */}
              <div className="w-20 h-20 md:w-24 md:h-24 relative shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={badge.icon}
                  alt={badge.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Condensed Text Info */}
              <div className="flex flex-col justify-center min-w-0">
                <h4 className="text-gray-900 font-bold text-base md:text-lg leading-snug tracking-tight group-hover:text-[#da291c] transition-colors">
                  {badge.title}
                </h4>
                <p className="text-gray-400 text-[10px] md:text-[11px] font-bold uppercase tracking-wider mt-0.5">
                  {badge.subtitle}
                </p>
                <p className="text-gray-500 text-xs font-medium mt-1">
                  {badge.tagline}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}









