import React from "react";
import Image from "next/image";
import Link from "next/link";
import SectionLayout from "../SectionLayout";

export default function CaseStudiesSection() {
  return (
    <SectionLayout number="05 / IN THE FIELD" title="Case studies">
      <div className="p-8 lg:p-16 border-b border-gray-200">
        <p className="text-brand-olive text-lg leading-relaxed max-w-3xl">
          Real deployments across mining, highways, energy, and emergency response — measured in hours saved, sites covered, and risk removed from hazardous terrain. Every mission ends in a decision-ready digital twin.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        
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
        <div className="flex flex-col">
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
    </SectionLayout>
  );
}
