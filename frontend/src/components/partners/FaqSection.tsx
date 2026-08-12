"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Who can apply?",
    answer: "System integrators, drone-service operators & regional resellers across mining, energy, and infrastructure."
  },
  {
    question: "Is there a cost to join?",
    answer: "No sign-up fee for Reseller tier; Integration & Strategic tiers include an onboarding package."
  },
  {
    question: "How long is the approval process?",
    answer: "Typically 2-3 weeks, including a technical & compliance review."
  },
  {
    question: "What technical support do partners receive?",
    answer: "Partners receive dedicated technical escalation paths and comprehensive documentation for all products."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="faqs" className="w-full py-16 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          
          {/* Header Section */}
          <div className="lg:w-1/3">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              FAQS
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Common questions
            </h2>
          </div>

          {/* FAQs Section */}
          <div className="lg:w-2/3 w-full border-t border-gray-200">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="py-6 border-b border-gray-200 group cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-gray-900 pr-8">
                    {faq.question}
                  </h4>
                  {openIndex === i ? (
                    <Minus className="text-[#da291c] w-4 h-4 shrink-0" />
                  ) : (
                    <Plus className="text-[#da291c] w-4 h-4 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-gray-500 text-xs leading-relaxed max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
