"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 5 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 5 }}
          transition={{ duration: 0.1, delay: index * 0.015 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
