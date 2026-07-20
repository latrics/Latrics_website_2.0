import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="w-full bg-white border-t border-b border-gray-200">
      <div className="w-full flex flex-col md:flex-row">
        
        {/* Title Block */}
        <div className="w-full md:w-1/4 p-8 border-b md:border-b-0 md:border-r border-gray-200 flex items-center">
          <h3 className="text-brand-olive font-heading text-sm tracking-widest font-semibold uppercase leading-relaxed">
            Trusted & <br />
            Certified
          </h3>
        </div>

        {/* DGCA Certified Block */}
        <div className="w-full md:w-[25%] p-8 border-b md:border-b-0 md:border-r border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 relative shrink-0">
            <Image src="/assets/DGCA Stamp seal.png" alt="DGCA Certified" fill className="object-contain" />
          </div>
          <div>
            <h4 className="text-brand-charcoal font-bold text-lg">DGCA Certified</h4>
            <p className="text-brand-olive text-xs font-semibold tracking-wider uppercase mt-1">
              Fleet & Operator
            </p>
          </div>
        </div>

        {/* ISO 9001 Block */}
        <div className="w-full md:w-[25%] p-8 border-b md:border-b-0 md:border-r border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-brand-red flex items-center justify-center shrink-0">
            <Check className="text-brand-red w-5 h-5" strokeWidth={3} />
          </div>
          <div>
            <h4 className="text-brand-charcoal font-bold text-lg">ISO 9001</h4>
            <p className="text-brand-olive text-xs font-semibold tracking-wider uppercase mt-1">
              Quality Management
            </p>
          </div>
        </div>

        {/* Made in India Block */}
        <div className="w-full md:w-[25%] p-8 flex items-center gap-4 relative overflow-hidden">
          <div className="w-12 h-12 relative shrink-0 z-10">
            <Image src="/assets/make_in_india_stamp.png" alt="Made in India" fill className="object-contain" />
          </div>
          <div className="relative z-10">
            <h4 className="text-brand-charcoal font-bold text-lg">Made in India</h4>
            <p className="text-brand-olive text-xs font-semibold tracking-wider uppercase mt-1">
              Indigenous Manufacturing
            </p>
          </div>
          {/* Logo Watermark Placeholder */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <div className="w-24 h-24 border-[8px] border-brand-charcoal rotate-45"></div>
          </div>
        </div>

      </div>
    </div>
  );
}
