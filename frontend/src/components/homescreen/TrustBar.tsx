"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const badges = [
  {
    icon: "/assets/DGCA Stamp seal.png",
    title: "DGCA Certified",
    subtitle: "Fleet & Operator",
  },
  {
    icon: "/assets/iso 9001.png",
    title: "ISO 9001",
    subtitle: "Quality Management",
  },
  {
    icon: "/assets/make_in_india_stamp.png",
    title: "Made in India",
    subtitle: "Indigenous Manufacturing",
  },
];

export default function TrustBar() {
  const [rotation, setRotation] = useState(0);

  // Advance the rotation so the badge on the right steps into the front/center slot,
  // the front slot's badge steps back to the left, and left steps to the right.
  useEffect(() => {
    const timer = setInterval(() => {
      setRotation((r) => (r + 1) % badges.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const ordered = badges.map((_, i) => badges[(i + rotation) % badges.length]);

  return (
    <div className="w-full bg-white border-t border-b border-gray-200 py-14">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-col items-center text-center">
        <h3 className="text-[#da291c] font-heading text-xs  tracking-widest font-semibold uppercase mb-12">
          Trusted &amp; Certified
        </h3>

        <div className="flex items-center justify-between gap-10 w-full">
          {ordered.map((badge, pos) => {
            const isFront = pos === 1;
            return (
              <motion.div
                key={badge.title}
                layout
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                animate={{ opacity: isFront ? 1 : 0.4 }}
                style={{ zIndex: isFront ? 10 : 1 }}
                className="flex flex-col items-center gap-3"
              >
                {/* Fixed-height slot so the enlarged icon scales in place without shifting the title below */}
                <div className="h-28 w-14 flex items-center justify-center shrink-0">
                  <motion.div
                    animate={{ scale: isFront ? 1.9 : 0.75 }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    className="relative w-14 h-14"
                  >
                    <Image src={badge.icon} alt={badge.title} fill className="object-contain" />
                  </motion.div>
                </div>
                <div>
                  <h4 className="text-brand-charcoal font-bold text-base whitespace-nowrap">{badge.title}</h4>
                  <p className="text-brand-olive text-[10px] font-semibold tracking-wider uppercase mt-1 whitespace-nowrap">
                    {badge.subtitle}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
