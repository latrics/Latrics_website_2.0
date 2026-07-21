import React from "react";
import { Clock, ShieldCheck, Compass, Crosshair, Zap, HeartHandshake } from "lucide-react";

export default function KeyHighlights() {
  const highlights = [
    {
      title: "LONG ENDURANCE",
      description: (
        <>
          Up to <strong>45+ minutes of flight time</strong> with LiDAR payload, enabling greater data capture in a single mission.
        </>
      ),
      icon: <Clock className="w-5 h-5" />
    },
    {
      title: "ADVANCED SAFETY",
      description: (
        <>
          Compact foldable design <strong>(900mm to 450mm)</strong> with an integrated detect-and-avoid system for enhanced safety.
        </>
      ),
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      title: "STABLE ORIENTATION",
      description: (
        <>
          Sensor fusion yaw control ensures stable flight, even in high electromagnetic interference environments.
        </>
      ),
      icon: <Compass className="w-5 h-5" />
    },
    {
      title: "INDIGENOUS LIDAR",
      description: (
        <>
          Indigenous LiDAR seamlessly integrated with <strong>IMU and GPS</strong> for precise and reliable data acquisition.
        </>
      ),
      icon: <Crosshair className="w-5 h-5" />
    },
    {
      title: "EASY DEPLOYMENT",
      description: (
        <>
          Terrain Desk Capture enables rapid deployment with user-friendly workflows and proven flight SOPs.
        </>
      ),
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "LIFETIME SUPPORT",
      description: (
        <>
          Flexible multi-year support plans with <strong>lifetime online assistance</strong> for subscribed customers.
        </>
      ),
      icon: <HeartHandshake className="w-5 h-5" />
    }
  ];

  return (
    <div id="specifications" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
            Key Highlights
          </h3>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Built for the demands of industrial mapping
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
          {highlights.map((item, index) => (
            <div key={index} className="bg-white p-10 flex flex-col items-start">
              <div className="w-12 h-12 bg-[#da291c] text-white flex items-center justify-center mb-6 shadow-sm">
                {item.icon}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm leading-relaxed font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
