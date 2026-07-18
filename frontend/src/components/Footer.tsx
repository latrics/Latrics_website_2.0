import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top CTA Strip */}
      <div className="bg-brand-silver/30 border-t border-gray-200">
        <div className="max-w-7xl mx-auto p-8 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="max-w-xl relative z-10">
            <p className="text-brand-red text-xs font-semibold tracking-widest uppercase mb-4">CHANNEL PARTNER PROGRAM</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Grow your business with Latrics</h2>
            <p className="text-gray-200 text-lg">
              Resell, integrate, or deliver our drone, LiDAR, and Terrain Desk platform — backed by training, marketing, and technical support.
            </p>
          </div>
          <div className="relative z-10">
            <Link 
              href="/partners" 
              className="bg-brand-red text-white px-8 py-4 text-sm font-semibold hover:bg-red-700 transition-colors whitespace-nowrap inline-block"
            >
              Become a partner &rarr;
            </Link>
          </div>
          {/* Logo Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
            <div className="w-[30rem] h-[30rem] border-[32px] border-brand-charcoal rotate-45"></div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-brand-charcoal text-white">
        <div className="max-w-7xl mx-auto p-8 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Column */}
          <div>
            <h4 className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">GET REGULATORY UPDATES & COVERAGE-AREA ALERTS.</h4>
            <p className="text-brand-olive text-sm mb-6 max-w-sm leading-relaxed">
              New Terrain Desk coverage, DGCA/BVLOS rule changes, and flight windows for your region — no spam.
            </p>
            <div className="flex border border-gray-500 rounded-sm overflow-hidden">
              <input 
                type="email" 
                placeholder="Work email — get compliance & coverage alerts" 
                className="bg-transparent px-4 py-3 text-sm w-full outline-none text-white placeholder:text-gray-400"
              />
              <button className="px-4 text-gray-400 hover:text-white transition-colors border-l border-gray-500">
                &rarr;
              </button>
            </div>

            <div className="mt-12">
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-3 text-brand-silver text-sm">
                <li><Link href="#" className="hover:text-white transition-colors">LiCopter P720</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">LiDAR payload</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terrain Desk Capture</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Latrics Digital</Link></li>
              </ul>
            </div>
          </div>

          {/* Middle Column */}
          <div>
            <h4 className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">COMPANY</h4>
            <ul className="space-y-4 text-white text-sm">
              <li><Link href="#" className="hover:text-brand-red transition-colors">Home</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">What We Do</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">Newsroom</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-brand-red transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-4">CONNECT</h4>
            <div className="mb-6">
              <p className="text-white text-sm">info@latrics.com</p>
              <p className="text-white text-sm mt-1">+91 90100 11223</p>
            </div>
            <button className="bg-brand-red text-white px-6 py-2.5 text-sm font-semibold hover:bg-red-700 transition-colors mb-6">
              Request a demo
            </button>
            <div className="flex gap-2 mb-10">
              {['in', 'X', 'IG', 'YT'].map(social => (
                <a key={social} href="#" className="w-8 h-8 border border-gray-500 flex items-center justify-center text-xs text-gray-300 hover:text-white hover:border-white transition-colors">
                  {social}
                </a>
              ))}
            </div>

            <div className="mb-6">
              <h4 className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-2">HYDERABAD (HQ)</h4>
              <p className="text-brand-silver text-sm max-w-[280px] leading-relaxed">
                Plot No. 87, TNGO's Colony Phase 2, Financial District, Gachibowli, Telangana 500046
              </p>
            </div>

            <div>
              <h4 className="text-brand-silver text-xs font-semibold tracking-widest uppercase mb-2">BENGALURU • DELHI NCR • GUWAHATI</h4>
              <p className="text-brand-silver text-sm">Regional offices across India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="bg-[#414446] py-6 px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-end gap-8 text-white text-xs font-semibold tracking-wider">
          <Link href="#" className="hover:text-brand-red transition-colors">PRIVACY POLICY</Link>
          <Link href="#" className="hover:text-brand-red transition-colors">TERMS AND CONDITIONS</Link>
          <button className="hover:text-brand-red transition-colors uppercase tracking-wider">COOKIE SETTINGS</button>
        </div>
      </div>
    </footer>
  );
}
