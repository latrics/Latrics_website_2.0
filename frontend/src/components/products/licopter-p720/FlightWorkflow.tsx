import React from "react";

export default function FlightWorkflow() {
  const steps = [
    {
      num: 1,
      title: "Plan",
      desc: "Define AOI and flight lines"
    },
    {
      num: 2,
      title: "Pre-flight check",
      desc: "Automated system diagnostics"
    },
    {
      num: 3,
      title: "Autonomous flight",
      desc: "RTK-guided waypoint mission"
    },
    {
      num: 4,
      title: "Data capture",
      desc: "LiDAR + RGB acquisition"
    },
    {
      num: 5,
      title: "Post-processing",
      desc: "Point cloud & deliverables"
    }
  ];

  return (
    <div className="w-full py-24 bg-white">
      <div className="max-w-6xl mx-auto px-8 lg:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Flight Workflow
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            From mission plan to deliverable
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gray-200 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#da291c] bg-white flex items-center justify-center text-[#da291c] font-bold text-lg mb-6 shadow-sm">
                  {step.num}
                </div>
                <h4 className="text-sm font-bold text-gray-900 mb-2">
                  {step.title}
                </h4>
                <p className="text-[10px] text-gray-500 font-medium max-w-[140px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
