"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  "/assets/latrics charcoal short logo.png",
  "/assets/latrics red short logo.png"
];

// Configuration for the floating logos
const LOGO_COUNT = 15;

export default function FloatingLogos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {[...Array(LOGO_COUNT)].map((_, i) => {
        // Randomize initial properties for each logo
        const logoSrc = logos[i % 2];
        const initialX = Math.random() * 100; // vw
        const initialY = 15 + Math.random() * 85; // vh (offsetting by 15vh to avoid the header)
        const duration = 15 + Math.random() * 20; // 15-35s
        const size = 30 + Math.random() * 60; // 30-90px

        return (
          <motion.div
            key={i}
            className="absolute opacity-[0.04]" // Low opacity
            initial={{
              x: `${initialX}vw`,
              y: `${initialY}vh`,
              rotate: 0,
            }}
            animate={{
              x: [
                `${initialX}vw`,
                `${Math.random() * 100}vw`,
                `${Math.random() * 100}vw`,
                `${initialX}vw`,
              ],
              y: [
                `${initialY}vh`,
                `${15 + Math.random() * 85}vh`,
                `${15 + Math.random() * 85}vh`,
                `${initialY}vh`,
              ],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              width: size,
              height: size,
            }}
          >
            <Image
              src={logoSrc}
              alt="Floating Logo"
              fill
              className="object-contain"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
