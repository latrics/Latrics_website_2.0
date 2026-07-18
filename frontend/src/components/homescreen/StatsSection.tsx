import React from "react";
import SectionLayout from "../SectionLayout";

const stats = [
  { value: "60 min", label: "MAX ENDURANCE" },
  { value: "5 cm", label: "LIDAR ACCURACY" },
  { value: "2.5 kg", label: "MAX PAYLOAD" },
  { value: "10 cm", label: "PRECISION LANDING" },
];

export default function StatsSection() {
  return (
    <SectionLayout number="BY THE NUMBERS" title="">
      <div className="grid grid-cols-2 md:grid-cols-4 w-full h-full">
        {stats.map((stat, i) => (
          <div key={i} className={`flex flex-col items-center justify-center p-8 ${i !== 3 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-red mb-2">{stat.value}</h3>
            <p className="text-brand-olive text-[10px] md:text-xs font-semibold tracking-widest uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
