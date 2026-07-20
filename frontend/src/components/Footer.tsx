import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="demo-section" className="w-full min-h-screen bg-[#111111] text-white flex flex-col font-sans">
      
      {/* Top CTA Strip (Channel Partner Program) */}
      <div className="bg-[#cfcfcf] relative border-b border-[#111111]/20">
        <div className="max-w-7xl mx-auto p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[#e03020] text-xs font-bold tracking-widest uppercase mb-2">CHANNEL PARTNER PROGRAM</p>
            <h2 className="text-3xl font-bold text-[#111111] mb-3 leading-tight">Grow your business with Latrics</h2>
            <p className="text-gray-700 text-base font-medium">
              Resell, integrate, or deliver our drone, LiDAR, and Terrain Desk platform — backed by training, marketing, and technical support.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              href="/partners" 
              className="bg-[#e03020] text-white px-8 py-3.5 text-sm font-semibold hover:bg-red-700 transition-colors inline-block"
            >
              Become a partner &rarr;
            </Link>
          </div>
        </div>
      </div>
      {/* Top Grid Area */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
        
        {/* Left Column */}
        <div className="p-12 lg:p-16 flex flex-col justify-between">
          <div>
            <h4 className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
              Subscribe to stay in touch.
            </h4>
            <div className="relative mb-16 max-w-sm">
              <input 
                type="email" 
                placeholder="ENTER EMAIL ADDRESS.." 
                className="w-full bg-transparent border border-white/30 rounded-full px-6 py-4 text-xs font-medium text-white placeholder:text-white/40 focus:outline-none focus:border-white transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full border border-white/30 hover:border-white transition-colors">
                <span className="text-white/70 text-sm">&rarr;</span>
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Platform</h4>
            <ul className="space-y-4 text-white/70 text-sm font-medium">
              <li><Link href="#" className="hover:text-white transition-colors">LiCopter P720</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">LiDAR Payload</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terrain Desk Capture</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Latrics Digital</Link></li>
            </ul>
          </div>
        </div>

        {/* Middle Column */}
        <div className="p-12 lg:p-16 flex flex-col">
          <h4 className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
            Company
          </h4>
          <ul className="space-y-6 text-white/90 text-sm font-medium">
            <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">What We Do</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Case Studies</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Newsroom</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="p-12 lg:p-16 flex flex-col">
          <h4 className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
            Connect
          </h4>
          <div className="mb-12">
            <a href="mailto:info@latrics.com" className="text-white/90 text-sm hover:text-white block mb-4">
              info@latrics.com
            </a>
            <a href="#" className="text-white/90 text-sm hover:text-white block">
              Start a project
            </a>
          </div>

          <div className="flex gap-4 mb-16">
            {['in', 'X', 'IG', 'YT'].map(social => (
              <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white hover:bg-white hover:text-black transition-colors">
                {social}
              </a>
            ))}
          </div>

          <div className="space-y-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">🇮🇳</span>
                <h4 className="text-white/70 text-xs font-semibold tracking-[0.1em] uppercase">India</h4>
              </div>
              <p className="text-white/70 text-xs leading-relaxed max-w-[260px]">
                Plot No. 87, TNGO's Colony Phase 2, Financial District, Gachibowli, Telangana 500046
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-sm">🇬🇧</span>
                <h4 className="text-white/70 text-xs font-semibold tracking-[0.1em] uppercase">United Kingdom</h4>
              </div>
              <p className="text-white/70 text-xs leading-relaxed max-w-[260px]">
                Regional offices in London <br/>
                Serving Europe & MENA region
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Logo Strip */}
      <div className="flex flex-col justify-between py-6 px-8 lg:px-10">
        
        <div className="flex justify-end gap-6 text-[10px] font-semibold tracking-[0.1em] uppercase text-white/60 mb-6">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms and Conditions</Link>
          <button className="hover:text-white transition-colors">Cookie Settings</button>
        </div>

        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mt-auto">
          {/* Brand Typography */}
          <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight m-0 p-0 text-white select-none max-w-2xl">
              <span className="text-[#da291c]">Building</span> Better Tomorrow
            </h1>
          </div>

          {/* Certification Badge Style */}
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border border-white/20 flex flex-col items-center justify-center text-center p-3 relative shrink-0">
             <div className="absolute inset-2 border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mb-1 text-white">
               <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
             </svg>
             <span className="text-[10px] font-bold tracking-widest text-white">ISO</span>
             <span className="text-[9px] text-white/50 tracking-widest">27001</span>
          </div>
        </div>

      </div>

    </footer>
  );
}
