"use client";
import React, { useState } from "react";
import { ClipboardCheck, Crosshair, Database, MonitorCog, Layers, CloudUpload, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FlightWorkflow() {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const steps = [
    {
      num: "01",
      title: "PLANNING & MISSION PREP",
      icon: <ClipboardCheck className="w-10 h-10 text-gray-800 transition-colors" />,
      bullets: [
        "Site assessment & requirement analysis",
        "Flight planning & area segmentation",
        "Payload selection & configuration",
      ]
    },
    {
      num: "02",
      title: "DATA CAPTURE",
      icon: <Crosshair className="w-10 h-10 text-gray-800 transition-colors" />,
      bullets: [
        "LiDAR & imagery acquisition",
        "Real-time monitoring of flight & sensors",
        "GNSS/IMU data recording",
      ]
    },
    {
      num: "03",
      title: "DATA TRANSFER",
      icon: <Database className="w-10 h-10 text-gray-800 transition-colors" />,
      bullets: [
        "Secure data offload after flight",
        "Data integrity verification",
        "Backup & storage management",
      ]
    },
    {
      num: "04",
      title: "PROCESSING",
      icon: <MonitorCog className="w-10 h-10 text-gray-800 transition-colors" />,
      bullets: [
        "LiDAR point cloud processing",
        "Image alignment & calibration",
        "Georeferencing & product generation",
      ]
    },
    {
      num: "05",
      title: "ANALYSIS & OUTPUTS",
      icon: <Layers className="w-10 h-10 text-gray-800 transition-colors" />,
      bullets: [
        "2D/3D mapping & model generation",
        "Terrain, corridor & structural analysis",
        "Insights & feature extraction",
      ]
    },
    {
      num: "06",
      title: "DELIVERY & INTEGRATION",
      icon: <CloudUpload className="w-10 h-10 text-gray-800 transition-colors" />,
      bullets: [
        "Delivery of final geospatial products",
        "Integration with GIS/CAD platforms",
        "Actionable insights for decision making",
      ]
    }
  ];

  return (
    <div className="w-full py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            FIELD VALIDATED
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6">
            Licopter P720 Workflow
          </h2>
          <p className="text-gray-500 text-base md:text-lg font-medium leading-relaxed max-w-3xl mx-auto">
            End-to-end aerial mapping workflow powered by LiDAR and high-resolution sensors for accurate, reliable geospatial intelligence.
          </p>
        </div>

        {/* Workflow Steps Container */}
        <div className="relative pt-6 pb-48">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-x-2 lg:gap-x-4">
            {steps.map((step, index) => {
              // Highlight this step and all previous steps if this step is hovered
              const isActive = hoveredStep !== null && index <= hoveredStep;
              
              return (
                <div 
                  key={index} 
                  className="relative flex flex-col items-center group cursor-pointer"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  
                  {/* Connecting Arrow Line (Hide on last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-[60%] right-[-40%] z-0 px-2">
                      <div className={`w-full border-t-[3px] border-dotted transition-colors duration-500 ease-in-out ${isActive ? 'border-[#da291c]' : 'border-[#da291c]/30'}`}></div>
                      {/* Arrowhead */}
                      <div className={`absolute right-1 -top-1.5 w-3 h-3 border-t-[3px] border-r-[3px] rotate-45 transition-colors duration-500 ease-in-out ${isActive ? 'border-[#da291c]' : 'border-[#da291c]/30'}`}></div>
                    </div>
                  )}

                  {/* Icon Circle */}
                  <div className={`relative z-10 w-24 h-24 lg:w-28 lg:h-28 rounded-full border-[2px] flex items-center justify-center bg-white transition-all duration-300 mb-6 ${isActive || hoveredStep === null ? 'border-[#da291c] shadow-md' : 'border-[#da291c]/40'}`}>
                    {/* Number Badge */}
                    <div className={`absolute -top-1 -left-1 w-8 h-8 rounded-full bg-[#da291c] flex items-center justify-center text-white text-sm font-bold shadow-md transition-transform duration-300 ${isActive ? 'scale-110' : ''}`}>
                      {step.num}
                    </div>
                    {/* The icon */}
                    <div className={`transition-colors duration-300 ${isActive ? 'text-[#da291c]' : 'text-gray-900'}`}>
                      {step.icon}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h4 className="text-[13px] lg:text-sm font-bold text-gray-900 text-center uppercase tracking-wide px-1 min-h-[40px]">
                    {step.title}
                  </h4>
                  
                  <div className="w-8 h-[2px] bg-[#da291c] my-4 opacity-30 group-hover:opacity-100 transition-opacity" />

                  {/* Bullet Points Container */}
                  {/* Using absolute positioning so the heights don't push the layout down unevenly */}
                  <div className="absolute top-[220px] lg:top-[240px] left-0 right-0 px-2 pointer-events-none">
                    <AnimatePresence>
                      {hoveredStep === index && (
                        <motion.ul 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="space-y-3"
                        >
                          {step.bullets.map((bullet, i) => (
                            <li key={i} className="text-[11px] lg:text-xs text-gray-700 font-medium leading-relaxed flex items-start gap-2">
                              <span className="text-[#da291c] mt-[3px] text-[8px]">●</span>
                              <span className="text-left">{bullet}</span>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Shield Pill */}
        <div className="flex justify-center mt-4">
          <div className="inline-flex items-center gap-3 lg:gap-6 bg-white border border-gray-200 shadow-sm">
            <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#da291c] flex items-center justify-center text-white shrink-0 shadow-sm">
              <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-6 text-xs lg:text-sm font-bold text-gray-800 pr-6 lg:pr-10 pl-2 lg:pl-0">
              <span>High Accuracy</span>
              <span className="text-orange-400 font-light">|</span>
              <span>Reliable Data</span>
              <span className="text-orange-400 font-light">|</span>
              <span>Faster Turnaround</span>
              <span className="text-orange-400 font-light">|</span>
              <span>Field Validated</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
