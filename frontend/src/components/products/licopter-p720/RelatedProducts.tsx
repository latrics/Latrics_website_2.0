import React from "react";
import ImagePlaceholder from "./ImagePlaceholder";
import Link from "next/link";

export default function RelatedProducts() {
  const products = [
    {
      title: "LiCopter P720 — Editorial",
      desc: "Spec-sheet product story",
      placeholder: "LiCopter P720 v1",
      url: "#"
    },
    {
      title: "LiCopter P720 — Reference variant",
      desc: "Alternate content layout",
      placeholder: "LiCopter P720 v2",
      url: "#"
    },
    {
      title: "Case Study — School LiDAR Mapping",
      desc: "Deployment in the field",
      placeholder: "School LiDAR case study",
      url: "#"
    }
  ];

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Related Products
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Explore the Latrics platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 shadow-sm">
          {products.map((prod, idx) => (
            <Link key={idx} href={prod.url} className="bg-white flex flex-col group block">
              <div className="w-full aspect-[4/3] p-1">
                <ImagePlaceholder mainText={prod.placeholder} />
              </div>
              <div className="p-6">
                <h4 className="text-sm font-bold text-gray-900 mb-2 group-hover:text-[#da291c] transition-colors">
                  {prod.title}
                </h4>
                <p className="text-[11px] text-gray-500 font-medium leading-relaxed">
                  {prod.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
