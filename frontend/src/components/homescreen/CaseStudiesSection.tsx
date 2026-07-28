import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLayout from "../SectionLayout";

export default function CaseStudiesSection() {
  return (
    <div className="w-full py-16 bg-white border-t border-gray-100">
      <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 relative">
        {/* Glow effects on sides */}
        <div className="absolute top-20 -left-[200px] md:-left-[300px] w-[600px] h-[600px] bg-[#da291c]/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute top-20 -right-[200px] md:-right-[300px] w-[600px] h-[600px] bg-[#da291c]/10 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 relative z-10 gap-8">
          <div className="flex flex-col text-left">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
              IN THE FIELD
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-2xl">
              Different terrain, same Latrics precision — see it hold up on the ground
            </h2>
          </div>
          <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed text-left md:pb-2">
            Real deployments across mining, highways, energy, and emergency response — measured in hours saved, sites covered, and risk removed from hazardous terrain. Every mission ends in a decision-ready digital twin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 w-full bg-gray-200 border border-gray-200 p-1">
          
          {/* Case Study 1 */}
          <div className="flex flex-col bg-white">
            <div className="w-full aspect-[4/3] bg-gray-900 relative flex items-end overflow-hidden group cursor-pointer">
              <Image src="/assets/Highway.png" alt="Highway mapping" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">HIGHWAY CORRIDOR, AERIAL</p>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">40 km NH corridor mapped 6× faster</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[#da291c] text-[10px] font-bold uppercase">40 KM / 7 DAYS</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase">HIGHWAYS & RAIL</span>
                </div>
              </div>
              <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase flex items-center justify-between w-full">
                <span>NHAI • MAHARASHTRA</span>
                <Link href="/case-studies" className="text-[#da291c] cursor-pointer hover:text-red-400 transition-colors">READ CASE &rarr;</Link>
              </p>
            </div>
          </div>
          
          {/* Case Study 2 */}
          <div className="flex flex-col bg-white">
            <div className="w-full aspect-[4/3] bg-gray-900 relative flex items-end overflow-hidden group cursor-pointer">
              <Image src="/assets/WATER1.png" alt="Flood response mapping" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">FLOOD RESPONSE, DRONE VIEW</p>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Flood extent mapped in 4 hrs</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[#da291c] text-[10px] font-bold uppercase">4 HR RESPONSE</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase">EMERGENCY SERVICES</span>
                </div>
              </div>
              <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase flex items-center justify-between w-full">
                <span>ASSAM DISASTER CELL</span>
                <Link href="/case-studies" className="text-[#da291c] cursor-pointer hover:text-red-400 transition-colors">READ CASE &rarr;</Link>
              </p>
            </div>
          </div>

          {/* Case Study 3 */}
          <div className="flex flex-col bg-white">
            <div className="w-full aspect-[4/3] bg-gray-900 relative flex items-end overflow-hidden group cursor-pointer">
              <Image src="/assets/Mines.png" alt="Mining volumetric analysis" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">MINING, VOLUMETRIC ANALYSIS</p>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">High-precision stockpile measurements</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[#da291c] text-[10px] font-bold uppercase">99% ACCURACY</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase">MINING SECTOR</span>
                </div>
              </div>
              <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase flex items-center justify-between w-full">
                <span>ODISHA MINES</span>
                <Link href="/case-studies" className="text-[#da291c] cursor-pointer hover:text-red-400 transition-colors">READ CASE &rarr;</Link>
              </p>
            </div>
          </div>

          {/* Case Study 4 */}
          <div className="flex flex-col bg-white">
            <div className="w-full aspect-[4/3] bg-gray-900 relative flex items-end overflow-hidden group cursor-pointer">
              <Image src="/assets/energy_1.png" alt="Energy sector inspection" fill className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-gray-500 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-2">POWER GRID INSPECTION</p>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Thermal analysis of transmission towers</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="text-[#da291c] text-[10px] font-bold uppercase">ZERO DOWNTIME</span>
                  <span className="text-gray-500 text-[10px] font-bold uppercase">ENERGY SECTOR</span>
                </div>
              </div>
              <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase flex items-center justify-between w-full">
                <span>POWERGRID CORP</span>
                <Link href="/case-studies" className="text-[#da291c] cursor-pointer hover:text-red-400 transition-colors">READ CASE &rarr;</Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
