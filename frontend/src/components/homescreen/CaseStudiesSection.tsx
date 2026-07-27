import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLayout from "../SectionLayout";

export default function CaseStudiesSection() {
  return (
    <div className="w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 relative">
        {/* Glow effects on sides */}
        <div className="absolute top-20 -left-[200px] md:-left-[300px] w-[600px] h-[600px] bg-[#da291c]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-20 -right-[200px] md:-right-[300px] w-[600px] h-[600px] bg-[#da291c]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col items-center text-center mb-12 relative z-10">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            IN THE FIELD
          </h3>
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-gray-900 tracking-tight leading-[1.1] max-w-5xl mx-auto mb-6 text-balance">
            Different terrain, same <span className="text-[#da291c]">Latrics precision</span> — see it hold up on the ground
          </h2>
          
          <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
            Real deployments across mining, highways, energy, and emergency response — measured in hours saved, sites covered, and risk removed from hazardous terrain. Every mission ends in a decision-ready digital twin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-t border-l border-r border-gray-200">
          
          {/* Case Study 1 */}
          <div className="flex flex-col border-b border-gray-200 md:border-r">
            <div className="w-full aspect-video bg-gray-900 relative flex items-end p-6 overflow-hidden">
              <Image src="/assets/Highway.png" alt="Highway mapping" fill className="object-cover opacity-60" />
              <span className="relative z-10 text-white text-xs font-semibold tracking-widest uppercase">HIGHWAY CORRIDOR, AERIAL</span>
            </div>
            <div className="p-8 bg-white flex-1">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">40 km NH corridor mapped 6× faster</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-brand-red text-xs font-semibold uppercase border border-gray-200 px-2 py-1">40 KM / 7 DAYS</span>
                <span className="text-brand-olive text-xs font-semibold uppercase border border-gray-200 px-2 py-1">HIGHWAYS & RAIL</span>
              </div>
              <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase">NHAI • MAHARASHTRA — <Link href="/case-studies" className="text-brand-red cursor-pointer hover:underline">READ CASE →</Link></p>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="flex flex-col border-b border-gray-200">
            <div className="w-full aspect-video bg-gray-900 relative flex items-end p-6 overflow-hidden">
              <Image src="/assets/WATER1.png" alt="Flood response mapping" fill className="object-cover opacity-60" />
              <span className="relative z-10 text-white text-xs font-semibold tracking-widest uppercase">FLOOD RESPONSE, DRONE VIEW</span>
            </div>
            <div className="p-8 bg-white flex-1">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Flood extent mapped in 4 hrs</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-brand-red text-xs font-semibold uppercase border border-gray-200 px-2 py-1">4 HR RESPONSE</span>
                <span className="text-brand-olive text-xs font-semibold uppercase border border-gray-200 px-2 py-1">EMERGENCY SERVICES</span>
              </div>
              <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase">ASSAM DISASTER CELL — <Link href="/case-studies" className="text-brand-red cursor-pointer hover:underline">READ CASE →</Link></p>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="flex flex-col border-b border-gray-200 md:border-b-0 md:border-r">
            <div className="w-full aspect-video bg-gray-900 relative flex items-end p-6 overflow-hidden">
              <Image src="/assets/Mines.png" alt="Mining volumetric analysis" fill className="object-cover opacity-60" />
              <span className="relative z-10 text-white text-xs font-semibold tracking-widest uppercase">MINING, VOLUMETRIC ANALYSIS</span>
            </div>
            <div className="p-8 bg-white flex-1">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">High-precision stockpile measurements</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-brand-red text-xs font-semibold uppercase border border-gray-200 px-2 py-1">99% ACCURACY</span>
                <span className="text-brand-olive text-xs font-semibold uppercase border border-gray-200 px-2 py-1">MINING SECTOR</span>
              </div>
              <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase">ODISHA MINES — <Link href="/case-studies" className="text-brand-red cursor-pointer hover:underline">READ CASE →</Link></p>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="flex flex-col border-b border-gray-200 md:border-b-0">
            <div className="w-full aspect-video bg-gray-900 relative flex items-end p-6 overflow-hidden">
              <Image src="/assets/energy_1.png" alt="Energy sector inspection" fill className="object-cover opacity-60" />
              <span className="relative z-10 text-white text-xs font-semibold tracking-widest uppercase">POWER GRID INSPECTION</span>
            </div>
            <div className="p-8 bg-white flex-1">
              <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Thermal analysis of transmission towers</h3>
              <div className="flex gap-2 mb-4">
                <span className="text-brand-red text-xs font-semibold uppercase border border-gray-200 px-2 py-1">ZERO DOWNTIME</span>
                <span className="text-brand-olive text-xs font-semibold uppercase border border-gray-200 px-2 py-1">ENERGY SECTOR</span>
              </div>
              <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase">POWERGRID CORP — <Link href="/case-studies" className="text-brand-red cursor-pointer hover:underline">READ CASE →</Link></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
