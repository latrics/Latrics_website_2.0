"use client";
import React, { useState } from "react";

export default function BottomCtaBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div id="demo" className="w-full bg-[#4a4a4a] py-20 border-b-4 border-[#da291c]">
        <div className="max-w-6xl mx-auto px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">

          <div className="max-w-xl">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              Book a demo
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              See LiCopter P720 fly in your terrain
            </h2>
            <p className="text-gray-300 text-sm font-medium leading-relaxed">
              Schedule a live demonstration with our field team, or talk to sales about deployment and pricing.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#da291c] text-white px-8 py-3.5 text-sm font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
            >
              Book a demo &rarr;
            </button>
            <a
              href="mailto:info@latrics.com"
              className="border border-white/30 text-white px-8 py-3.5 text-sm font-semibold hover:border-white transition-colors inline-flex items-center justify-center bg-black/10"
            >
              Contact sales
            </a>
          </div>

        </div>
      </div>

      {/* Book a Demo Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg p-10 relative rounded-none shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Book a Demo</h2>
            <p className="text-sm text-gray-500 mb-8 font-medium">
              See LiCopter P720 fly in your terrain — share your details and our field team will schedule a live demonstration.
            </p>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Full Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#da291c] rounded-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#da291c] rounded-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Company Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#da291c] rounded-none transition-colors"
                    placeholder="Latrics Innovations"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#da291c] text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-none mt-4"
              >
                Request Demo
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-gray-500 font-medium leading-relaxed">
                Prefer to talk directly? Email{" "}
                <a href="mailto:info@latrics.com" className="text-[#da291c] font-semibold hover:underline">info@latrics.com</a>
                {" "}or call Sivaram Kumar at{" "}
                <a href="tel:+919908888911" className="text-[#da291c] font-semibold hover:underline">+91 9908888911</a>
              </p>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
