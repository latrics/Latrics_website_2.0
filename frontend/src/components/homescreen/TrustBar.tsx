import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

export default function TrustBar() {
  return (
    <div className="w-full bg-white border-t border-b border-gray-200">
      <div className="w-full flex flex-col md:flex-row">
        
        {/* Title Block */}
        <div className="w-full md:w-[20%] p-6 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 flex items-center shrink-0">
          <h3 className="text-brand-olive font-heading text-sm tracking-widest font-semibold uppercase leading-relaxed">
            Trusted & <br />
            Certified
          </h3>
        </div>

        {/* DGCA Certified Block */}
        <div className="flex-1 p-6 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 flex items-center gap-4">
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
        <div className="flex-1 p-6 md:p-6 border-b md:border-b-0 md:border-r border-gray-200 flex items-center gap-4">
          <div className="w-12 h-12 relative shrink-0">
            <Image src="/assets/iso 9001.png" alt="ISO 9001" fill className="object-contain" />
          </div>
          <div>
            <h4 className="text-brand-charcoal font-bold text-lg">ISO 9001</h4>
            <p className="text-brand-olive text-xs font-semibold tracking-wider uppercase mt-1">
              Quality Management
            </p>
          </div>
        </div>

        {/* Made in India Block */}
        <div className="flex-1 p-6 md:p-6 flex items-center gap-4 relative">
          <div className="w-12 h-12 relative shrink-0">
            <Image src="/assets/make_in_india_stamp.png" alt="Made in India" fill className="object-contain" />
          </div>
          <div>
            <h4 className="text-brand-charcoal font-bold text-lg">Made in India</h4>
            <p className="text-brand-olive text-xs font-semibold tracking-wider uppercase mt-1">
              Indigenous Manufacturing
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
