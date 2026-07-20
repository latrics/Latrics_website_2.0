"use client";
import React, { useState } from "react";

export default function FaqSection() {
  const faqs = [
    {
      question: "What certifications does the LiCopter P720 hold?",
      answer: "The platform is DGCA Type-Certified for commercial BVLOS operation under Indian civil aviation regulations, cleared for fleet and field deployment nationwide."
    },
    {
      question: "What is the typical coverage per flight?",
      answer: "With its 60-minute endurance and advanced flight planning software, the LiCopter P720 can typically map up to 1,200 hectares per flight day depending on the payload and mission profile."
    },
    {
      question: "Can payloads be swapped in the field?",
      answer: "Yes, the modular payload bay features a tool-less quick-release mechanism, allowing operators to swap between LiDAR, RGB, and multispectral sensors in under two minutes."
    },
    {
      question: "What training or support is included?",
      answer: "We offer comprehensive pilot and payload operator training, along with 24/7 technical support and access to our Latrics field engineering team for complex deployments."
    },
    {
      question: "Is financing or leasing available?",
      answer: "Yes, we offer flexible leasing and financing options tailored for enterprise and government clients to scale their drone programs efficiently. Contact sales for details."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div id="support" className="w-full py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8 lg:px-12">
        
        <div className="text-center mb-16">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            FAQs
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Common questions
          </h2>
        </div>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <h4 className={`text-sm font-bold pr-8 transition-colors ${isOpen ? 'text-[#da291c]' : 'text-gray-900 group-hover:text-[#da291c]'}`}>
                    {faq.question}
                  </h4>
                  <span className={`text-[#da291c] font-light text-xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-500 text-xs font-medium leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
