import React from "react";

export default function PartnersFooter() {
  return (
    <footer className="w-full bg-[#111] text-gray-400 py-8 px-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider">
        <div>
          <span className="text-white font-bold mr-2">LATRICS</span>
          <span className="text-gray-600 mr-2">—</span>
          <span>Channel Partner Program</span>
        </div>
        <div className="flex gap-6">
          <a href="mailto:info@latrics.com" className="hover:text-white transition-colors">
            info@latrics.com
          </a>
          <a href="tel:+919010011223" className="hover:text-white transition-colors">
            +91 90100 11223
          </a>
        </div>
      </div>
    </footer>
  );
}
