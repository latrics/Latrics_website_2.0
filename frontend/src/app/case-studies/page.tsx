import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SchoolCampusCaseStudy() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative z-10 bg-white flex-1">
        <Navbar />

        {/* Hero Section */}
      <section 
        className="relative pt-40 pb-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-white bg-cover bg-center"
        style={{ backgroundImage: `url('/assets/case_study_bg.png')` }}
      >
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="lg:w-3/5">
            <h3 className="text-gray-200 text-sm font-bold uppercase tracking-[0.2em] mb-6">
              CASE STUDY <span className="mx-2">•</span> REVENUE & LAND RECORDS
            </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-8">
              Mapping School<br/>
              Campuses with<br/>
              Centimeter Precision<br/>
              Using LiDAR Drones
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              How Latrics India modernised land record management for institutional campuses through UAV LiDAR technology — delivering accuracy traditional surveys simply cannot.
            </p>
          </div>
          <div className="lg:w-2/5 flex items-end pb-4">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 border-t border-l border-white/10">
              <div className="p-6 border-r border-b border-white/10 bg-white/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">PROJECT TYPE</p>
                <p className="text-sm font-bold text-white">School Infrastructure Mapping</p>
              </div>
              <div className="p-6 border-r border-b border-white/10 bg-white/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">TECHNOLOGY</p>
                <p className="text-sm font-bold text-white">UAV LiDAR · DGPS · WebGIS</p>
              </div>
              <div className="p-6 border-r border-b border-white/10 bg-white/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">SECTOR</p>
                <p className="text-sm font-bold text-white">Government / Education</p>
              </div>
              <div className="p-6 border-r border-b border-white/10 bg-white/5">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">OUTPUT RESOLUTION</p>
                <p className="text-sm font-bold text-white">2 cm Orthophotos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-white border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">CHALLENGE</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 tracking-tight">When traditional surveys fall short</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Accurate land records are the backbone of effective governance and infrastructure planning. Yet for institutional campuses like schools, conventional survey methods consistently fall short — delivering imprecise boundary definitions, incomplete asset mapping, and no elevation intelligence. Something had to change.
            </p>
            <p className="text-gray-500 leading-relaxed">
              <strong className="text-gray-900">Latrics India Private Limited</strong> is a leading provider of advanced geospatial and autonomous solutions, specializing in Artificial Intelligence, Drone Technology, IoT, and Sensor Fusion — delivering data-driven solutions that transform governance, infrastructure planning, and societal development.
            </p>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">SNAPSHOT — AT A GLANCE</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-gray-200">
              <div className="p-8 border-r border-b border-gray-200 bg-[#fafafa]">
                <p className="text-[10px] font-bold text-[#da291c] uppercase tracking-widest mb-4">TECHNOLOGY</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">UAV LiDAR & DGPS Ground Control</p>
              </div>
              <div className="p-8 border-r border-b border-gray-200 bg-[#fafafa]">
                <p className="text-[10px] font-bold text-[#da291c] uppercase tracking-widest mb-4">PLATFORM</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">Cloud-based WebGIS with Secure Access</p>
              </div>
              <div className="p-8 border-r border-b border-gray-200 bg-[#fafafa]">
                <p className="text-[10px] font-bold text-[#da291c] uppercase tracking-widest mb-4">MAP SCALE</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">1:500 High-Precision Topographic Maps</p>
              </div>
              <div className="p-8 border-r border-b border-gray-200 bg-[#fafafa]">
                <p className="text-[10px] font-bold text-[#da291c] uppercase tracking-widest mb-4">KEY APPLICATIONS</p>
                <p className="text-sm font-medium text-gray-700 leading-relaxed">Boundary Verification, Asset Inventory, Elevation Mapping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-[#1a1a1a] overflow-hidden border-y border-[#111]">
        {/* Subtle Red Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#da291c] rounded-full blur-[150px] opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">TECHNOLOGY DEEP DIVE</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">Why LiDAR is a game-changer for land records</h2>
          </div>
          <div className="lg:w-1/2 lg:pt-10">
            <p className="text-gray-300 leading-relaxed mb-8">
              LiDAR captures millions of elevation points per second — delivering centimeter-level accuracy that GPS and optical surveys cannot match. For land record applications, this translates to razor-sharp boundary demarcation, reliable terrain analysis, and rapid scalable coverage even in complex, densely-built environments.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#da291c] text-[10px] font-bold text-white uppercase tracking-widest">CENTIMETER ACCURACY</span>
              <span className="px-4 py-2 bg-[#da291c] text-[10px] font-bold text-white uppercase tracking-widest">POINT CLOUD PROCESSING</span>
              <span className="px-4 py-2 bg-[#da291c] text-[10px] font-bold text-white uppercase tracking-widest">DEM & DSM GENERATION</span>
              <span className="px-4 py-2 bg-[#da291c] text-[10px] font-bold text-white uppercase tracking-widest">SCALABLE COVERAGE</span>
              <span className="px-4 py-2 bg-[#da291c] text-[10px] font-bold text-white uppercase tracking-widest">ANOMALY DETECTION</span>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives & Challenges Section */}
      <section className="py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-white border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">OBJECTIVES</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">What we set out to achieve</h2>
            <div className="border-t border-gray-200">
              {[
                "Accurate verification and digitisation of school campus boundaries",
                "Precise measurement of built-up and open areas",
                "Creation of a comprehensive, documented asset inventory",
                "Generation of elevation and contour data for future planning",
                "Development of a fully digital land record system"
              ].map((item, i) => (
                <div key={i} className="py-5 border-b border-gray-200 bg-[#fafafa] px-6">
                  <p className="text-gray-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">CHALLENGES</h3>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 tracking-tight">The obstacles on ground</h2>
            <div className="border-t border-gray-200">
              {[
                "Inconsistent and historically inaccurate boundary records",
                "No reliable data on existing infrastructure or assets",
                "Difficulty capturing precise measurements of structures and utilities",
                "Complete absence of elevation data for drainage and land management",
                "Slow, expensive, and error-prone traditional survey methods"
              ].map((item, i) => (
                <div key={i} className="py-5 border-b border-gray-200 bg-[#fafafa] px-6">
                  <p className="text-gray-600 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-white border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-16 lg:gap-24">
          <div className="xl:w-1/3">
            <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">SOLUTION</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">LiDAR-driven digital mapping<br className="hidden xl:block"/>— end to end</h2>
            <p className="text-gray-500 leading-relaxed">
              Latrics deployed a comprehensive LiDAR-based drone survey to capture high-resolution spatial data across school campuses. Using DGPS-enabled ground control points, we processed the data to generate precise boundary maps, orthophotos, and full 3D models — all integrated into a cloud-based WebGIS platform.
            </p>
          </div>
          <div className="xl:w-2/3">
            <h3 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">METHODOLOGY — HOW WE DID IT</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 border-t border-l border-gray-200 h-full">
              {[
                { num: "01", title: "Ground Truth First", desc: "Ground Control Points established with DGPS for centimeter-level accuracy before any aerial work." },
                { num: "02", title: "Aerial Data Acquisition", desc: "LiDAR-equipped drones flown over campus boundaries for complete, high-density coverage." },
                { num: "03", title: "Point Cloud Processing", desc: "Advanced processing of raw LiDAR data to generate DEM, DSM, and publication-ready orthophotos." },
                { num: "04", title: "Field Verification", desc: "On-ground validation of all outputs against physical landmarks for real-world accuracy." },
                { num: "05", title: "Delivery & Training", desc: "Handover of deliverables and stakeholder training on the WebGIS platform." }
              ].map((step, i) => (
                <div key={i} className="p-6 border-r border-b border-gray-200 bg-[#fafafa]">
                  <p className="text-[#da291c] text-[10px] font-bold mb-4">{step.num}</p>
                  <h4 className="text-sm font-bold text-gray-900 mb-3">{step.title}</h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-white border-t border-gray-100">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16">
            <div className="lg:w-1/2">
              <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">DELIVERABLES</h3>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">What authorities received</h2>
            </div>
            <div className="lg:w-1/2 lg:pt-10">
              <p className="text-gray-500 leading-relaxed text-lg">
                Every output was validated on-ground and delivered through a secure WebGIS platform — giving stakeholders instant access to the complete spatial picture of their campus.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-200">
            <div className="border-r border-b border-gray-200 bg-[#fafafa]">
              <div className="aspect-[16/9] md:aspect-auto md:h-64 relative overflow-hidden bg-gray-900">
                <Image src="/assets/topo_map.png" alt="Topographic map" fill className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-[#da291c] text-[10px] font-bold uppercase tracking-widest mb-3">TOPOGRAPHIC MAP</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">High-precision campus map</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  1:500 scale topographic map with complete boundary demarcation, asset positions, and spot-level measurements across the school.
                </p>
              </div>
            </div>
            <div className="border-r border-b border-gray-200 bg-[#fafafa]">
              <div className="aspect-[16/9] md:aspect-auto md:h-64 relative overflow-hidden bg-gray-900">
                <Image src="/assets/dem_model.png" alt="Digital elevation model" fill className="object-cover" />
              </div>
              <div className="p-8">
                <p className="text-[#da291c] text-[10px] font-bold uppercase tracking-widest mb-3">DEM</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Digital elevation model</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Colour-coded elevation model revealing terrain variation across the campus — essential for drainage planning and land management decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
      <Footer />
    </main>
  );
}
