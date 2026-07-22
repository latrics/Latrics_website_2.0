"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Hide if scrolling down past 50px, show if scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between bg-black/50 backdrop-blur-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10">
          <img src="/assets/Latrics_white&red_logo.png" alt="Latrics Logo" className="h-8 object-contain" />
        </Link>

        {/* Navigation Links (Centered) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-6 text-sm text-gray-300 font-medium">
          {[
            { name: "Home", href: "/", exact: true },
            { name: "Products", href: "/products/licopter-p720", match: "/products" },
            { name: "Partners", href: "/partners", match: "/partners" },
            { name: "Case Studies", href: "/case-studies", match: "/case-studies" },
            { name: "About", href: "/about", match: "/about" }
          ].map((link) => {
            const active = link.exact 
              ? pathname === link.href 
              : pathname?.startsWith(link.match || "");

            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-colors py-1 ${active ? "text-white border-b-2 border-[#da291c] font-semibold" : "hover:text-white"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-6 relative z-10">
          <a href="https://www.terraindesk.com/" target="_blank" rel="noopener noreferrer" className="relative group cursor-pointer block">
            {/* Offset Border */}
            <span className="absolute top-1.5 left-1.5 w-full h-full border border-white rounded-none pointer-events-none transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>
            {/* Main Button */}
            <span className="relative inline-block bg-[#da291c] text-white px-6 py-2.5 text-sm font-semibold rounded-none transition-transform group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">
              Open Terrain Desk
            </span>
          </a>

          <button 
            onClick={() => setIsDemoModalOpen(true)}
            className="bg-white text-black px-6 py-2.5 text-sm font-semibold hover:bg-gray-100 transition-colors rounded-none"
          >
            Request a demo
          </button>
        </div>
      </nav>

      {/* Demo Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-white w-full max-w-lg p-10 relative rounded-none shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsDemoModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">Request a Demo</h2>
            <p className="text-sm text-gray-500 mb-8 font-medium">Fill out the form below and our team will get back to you shortly.</p>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); setIsDemoModalOpen(false); }}>
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
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Phone No.</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#da291c] rounded-none transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#da291c] rounded-none transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Company Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#da291c] rounded-none transition-colors"
                  placeholder="Latrics Innovations"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Enquiry Message</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:outline-none focus:border-[#da291c] rounded-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#da291c] text-white py-4 text-sm font-bold uppercase tracking-widest hover:bg-red-700 transition-colors rounded-none mt-4"
              >
                Submit Request
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}
