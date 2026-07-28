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
    <div id="faq" className="w-full py-16 bg-white border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Heading */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              FAQs
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Common questions
            </h2>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full lg:w-2/3">
            <div className="divide-y divide-gray-100 border-t border-b border-gray-100">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="py-6">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between text-left group"
                    >
                      <h4 className={`text-base font-bold pr-8 transition-colors ${isOpen ? 'text-gray-900' : 'text-gray-900 group-hover:text-[#da291c]'}`}>
                        {faq.question}
                      </h4>
                      <span className="text-[#da291c] font-medium text-xl">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-gray-500 text-sm font-medium leading-relaxed pr-12">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
