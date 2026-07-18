import React from "react";
import SectionLayout from "../SectionLayout";

const solutions = [
  {
    number: "01",
    title: "Aerospace",
    desc: "Autonomous UAV systems, LiDAR mapping platforms & AI-enabled drone intelligence.",
    gradient: "from-sky-500 to-indigo-600",
    image: "/assets/aerospace_1.jpeg",
  },
  {
    number: "02",
    title: "Digital Intelligence",
    desc: "3D digital twins, Geo-AI analytics & cloud-based data platforms.",
    gradient: "from-emerald-400 to-cyan-600",
    image: "/assets/digital_intelligence_1.png",
  },
  {
    number: "03",
    title: "Sustainable Energy",
    desc: "Owning 20 MW solar energy, next-gen energy storage & drone-based solar monitoring.",
    gradient: "from-blue-400 to-green-500",
    image: "/assets/energy_1.png",
  }
];

export default function SolutionsSection() {
  return (
    <SectionLayout number="02 / SOLUTIONS" title="Three solution areas, one platform.">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {solutions.map((sol, i) => (
          <div key={i} className={`flex flex-col ${i !== 2 ? 'border-b lg:border-b-0 lg:border-r border-gray-200' : ''}`}>
            {/* Image Placeholder or Actual Image */}
            <div className={`w-full aspect-video lg:aspect-[4/3] bg-gradient-to-br ${sol.gradient} relative overflow-hidden`}>
              {sol.image && (
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}
            </div>
            <div className="p-8">
              <span className="text-brand-red text-sm font-semibold block mb-2">{sol.number}</span>
              <h3 className="text-xl font-bold text-brand-charcoal mb-4">{sol.title}</h3>
              <p className="text-brand-olive text-sm leading-relaxed">{sol.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
}
