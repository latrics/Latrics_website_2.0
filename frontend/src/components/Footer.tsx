import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Top CTA Strip (Channel Partner Program) - This stays in normal flow to act as the "curtain" */}
      <div className="bg-[#cfcfcf] relative z-10 border-b border-[#111111]/20">
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

      {/* Footer Reveal Spacer */}
      <div className="h-[100dvh] w-full pointer-events-none" aria-hidden="true" />

      {/* Fixed Footer */}
      <div className="fixed bottom-0 left-0 w-full h-[100dvh] -z-10">
        <footer id="demo-section" className="relative w-full h-full bg-[#111111] text-white flex flex-col font-sans">

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
                  <li><Link href="#" className="hover:text-white transition-colors">Terrain Desk Data</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Terrain Desk Capture</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Terrain Desk Planning</Link></li>
                </ul>
              </div>
            </div>

            {/* Middle Column */}
            <div className="p-12 lg:p-16 flex flex-col">
              <h4 className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
                Company
              </h4>
              <ul className="space-y-4 text-white/90 text-sm font-medium mb-12">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/products/licopter-p720" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                <li><Link href="/partners" className="hover:text-white transition-colors">Partners</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              </ul>

              <h4 className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                Connect
              </h4>
              <div className="mb-8">
                <a href="mailto:info@latrics.com" className="text-white/90 text-sm hover:text-white block mb-2">
                  info@latrics.com
                </a>
                <a href="#" className="text-white/90 text-sm hover:text-white block">
                  Start a project
                </a>
              </div>

              <div className="flex gap-4">
                {['in', 'X', 'IG', 'YT'].map(social => (
                  <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white hover:bg-white hover:text-black transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="p-12 lg:p-16 flex flex-col">
              <h4 className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-10">
                Offices
              </h4>
              <div className="flex flex-col gap-8">

                {/* Hyderabad HQ */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🇮🇳</span>
                    <h4 className="text-white/70 text-xs font-semibold tracking-[0.1em] uppercase">HQ (Hyderabad)</h4>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed mb-2">
                    Plot No. 87, TNGO's Colony Phase 2, Financial District, Gachibowli, Hyderabad, Telangana 500046
                  </p>
                  <p className="text-white/50 text-xs font-medium">Office: +91 90100 11223</p>
                  <p className="text-white/50 text-xs font-medium">Sivaram Kumar: +91 9908888911</p>
                </div>

                {/* Bangalore */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🇮🇳</span>
                    <h4 className="text-white/70 text-xs font-semibold tracking-[0.1em] uppercase">Bangalore</h4>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed mb-2">
                    Floor No.19th Main, 151/1, 23rd Cross, 2nd Block, Rajajinagar, Bengaluru Urban, 560010
                  </p>
                  <p className="text-white/50 text-xs font-medium">Sureka G: +91 8884952357</p>
                </div>

                {/* Delhi NCR */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🇮🇳</span>
                    <h4 className="text-white/70 text-xs font-semibold tracking-[0.1em] uppercase">Delhi NCR</h4>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed mb-2">
                    sanjay.pathak@latrics.com
                  </p>
                  <p className="text-white/50 text-xs font-medium">Sanjay Pathak: +91 8130532944</p>
                </div>

                {/* North-East */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm">🇮🇳</span>
                    <h4 className="text-white/70 text-xs font-semibold tracking-[0.1em] uppercase">North-East (Assam)</h4>
                  </div>
                  <p className="text-white/70 text-xs leading-relaxed mb-2">
                    Odalbakra, Kahilipara, Guwahati, Assam, 781034
                  </p>
                  <p className="text-white/50 text-xs font-medium">Rajib Saikia: +91 8822332132</p>
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

            <div className="flex items-end mt-auto">
              {/* Brand Typography */}
              <div className="flex items-center w-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight m-0 p-0 text-white select-none max-w-2xl">
                  <span className="text-[#da291c]">Building</span> Better Tomorrow
                </h1>
              </div>
            </div>

          </div>

        </footer>
      </div>
    </>
  );
}
