import React from "react";
import SectionLayout from "../SectionLayout";

export default function CaseStudiesSection() {
  return (
    <SectionLayout number="05 / IN THE FIELD" title="">
      <div className="p-8 lg:p-16 border-b border-gray-200">
        <p className="text-brand-olive text-lg leading-relaxed max-w-3xl">
          Real deployments across mining, highways, energy, and emergency response — measured in hours saved, sites covered, and risk removed from hazardous terrain. Every mission ends in a decision-ready digital twin.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full">
        {/* Case Study 1 */}
        <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
          <div className="w-full aspect-video bg-[#181a17] relative flex items-end p-6">
            <span className="text-gray-400 text-xs font-semibold tracking-widest uppercase">HIGHWAY CORRIDOR, AERIAL</span>
          </div>
          <div className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-4">40 km NH corridor mapped 6× faster</h3>
            <div className="flex gap-2 mb-4">
              <span className="text-brand-red text-xs font-semibold uppercase border border-gray-200 px-2 py-1">40 KM / 7 DAYS</span>
              <span className="text-brand-olive text-xs font-semibold uppercase border border-gray-200 px-2 py-1">HIGHWAYS & RAIL</span>
            </div>
            <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase">NHAI • MAHARASHTRA — <span className="text-brand-red cursor-pointer hover:underline">READ CASE →</span></p>
          </div>
        </div>
        
        {/* Case Study 2 */}
        <div className="flex flex-col">
          <div className="w-full aspect-video bg-[#261c18] relative flex items-end p-6">
            <span className="text-brand-red text-xs font-semibold tracking-widest uppercase">FLOOD RESPONSE, DRONE VIEW</span>
          </div>
          <div className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-brand-charcoal mb-4">Flood extent mapped in 4 hrs</h3>
            <div className="flex gap-2 mb-4">
              <span className="text-brand-red text-xs font-semibold uppercase border border-gray-200 px-2 py-1">4 HR RESPONSE</span>
              <span className="text-brand-olive text-xs font-semibold uppercase border border-gray-200 px-2 py-1">EMERGENCY SERVICES</span>
            </div>
            <p className="text-brand-olive text-xs font-semibold tracking-widest uppercase">ASSAM DISASTER CELL — <span className="text-brand-red cursor-pointer hover:underline">READ CASE →</span></p>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
