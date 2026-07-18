import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SchoolCampusCaseStudy() {
  return (
    <main className="min-h-screen bg-[#faf9f6]">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-[#52595d] text-white pt-32 pb-16 px-8 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex gap-4 mb-10">
            <span className="border border-gray-400 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm">Case Study</span>
            <span className="border border-gray-400 px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-sm">Revenue & Land Records</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Mapping School Campuses <br/>
            with <span className="text-[#e03020]">Centimeter Precision</span> <br/>
            Using LiDAR Drones
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-20">
            How Latrics India modernised land record management for institutional campuses through UAV LiDAR technology — delivering accuracy traditional surveys simply cannot.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-400 pt-8 mt-12 text-left">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Project Type</p>
              <p className="text-sm font-semibold text-gray-200">School Infrastructure Mapping</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Technology</p>
              <p className="text-sm font-semibold text-gray-200">UAV LiDAR · DGPS · WebGIS</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Sector</p>
              <p className="text-sm font-semibold text-gray-200">Government / Education</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-2 font-medium">Output Resolution</p>
              <p className="text-sm font-semibold text-gray-200">2 cm Orthophotos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <div className="bg-white border-b border-gray-200 py-8 px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <div className="w-10 h-10 bg-[#e03020] rounded-full flex items-center justify-center shrink-0 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">
            <strong className="text-gray-800">Latrics India Private Limited</strong> is a leading provider of advanced geospatial and autonomous solutions, specializing in Artificial Intelligence, Drone Technology, IoT, and Sensor Fusion — delivering data-driven solutions that transform governance, infrastructure planning, and societal development.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 lg:px-0">
        
        {/* The Challenge */}
        <div className="flex flex-col md:flex-row py-16 border-b border-gray-200">
          <div className="md:w-1/4 pr-8 shrink-0 mb-8 md:mb-0">
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">01 / The</p>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Challenge</p>
          </div>
          <div className="md:w-3/4">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">When Traditional Surveys Fall Short</h2>
            <p className="text-gray-500 leading-relaxed max-w-3xl text-lg">
              Accurate land records are the backbone of effective governance and infrastructure planning. Yet for institutional campuses like schools, conventional survey methods consistently fall short — delivering imprecise boundary definitions, incomplete asset mapping, and no elevation intelligence. Something had to change.
            </p>
          </div>
        </div>

        {/* Project Snapshot */}
        <div className="flex flex-col md:flex-row py-0 border-b border-gray-200">
          <div className="md:w-1/4 pr-8 shrink-0 py-16">
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">02 / Project</p>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Snapshot</p>
            <h2 className="text-2xl font-bold text-gray-700">At a Glance</h2>
          </div>
          <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-l border-gray-200">
            <div className="p-8 border-b md:border-b-0 border-gray-200">
              <h3 className="text-xs font-semibold text-[#e03020] uppercase tracking-wider mb-4">Technology</h3>
              <p className="font-bold text-gray-700 text-sm">UAV LiDAR & DGPS Ground Control</p>
            </div>
            <div className="p-8 border-b md:border-b-0 md:border-l border-gray-200">
              <h3 className="text-xs font-semibold text-[#e03020] uppercase tracking-wider mb-4">Platform</h3>
              <p className="font-bold text-gray-700 text-sm">Cloud-based WebGIS with Secure Access</p>
            </div>
            <div className="p-8 border-b md:border-b-0 md:border-l border-gray-200">
              <h3 className="text-xs font-semibold text-[#e03020] uppercase tracking-wider mb-4">Map Scale</h3>
              <p className="font-bold text-gray-700 text-sm">1:500 High-Precision Topographic Maps</p>
            </div>
            <div className="p-8 md:border-l border-gray-200">
              <h3 className="text-xs font-semibold text-[#e03020] uppercase tracking-wider mb-4">Key Applications</h3>
              <p className="font-bold text-gray-700 text-sm">Boundary Verification, Asset Inventory, Elevation Mapping</p>
            </div>
          </div>
        </div>

        {/* Tech Deep Dive */}
        <div className="bg-[#52595d] text-white py-16 px-8 md:px-16 border-b border-gray-200 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <p className="text-[#e03020] text-xs font-semibold tracking-widest uppercase mb-4">Technology Deep Dive</p>
            <h2 className="text-4xl font-bold mb-6 text-white">Why LiDAR is a Game-Changer for Land Records</h2>
            <p className="text-gray-300 leading-relaxed mb-8 text-lg">
              LiDAR (Light Detection and Ranging) captures millions of elevation points per second — delivering centimeter-level accuracy that GPS and optical surveys cannot match. For land record applications, this translates to razor-sharp boundary demarcation, reliable terrain analysis, and rapid scalable coverage even in complex, densely-built environments.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 border border-gray-400 rounded-sm text-xs font-medium text-gray-300">Centimeter Accuracy</span>
              <span className="px-4 py-2 border border-gray-400 rounded-sm text-xs font-medium text-gray-300">Point Cloud Processing</span>
              <span className="px-4 py-2 border border-gray-400 rounded-sm text-xs font-medium text-gray-300">DEM & DSM Generation</span>
              <span className="px-4 py-2 border border-gray-400 rounded-sm text-xs font-medium text-gray-300">Scalable Coverage</span>
              <span className="px-4 py-2 border border-gray-400 rounded-sm text-xs font-medium text-gray-300">Anomaly Detection</span>
            </div>
          </div>
        </div>

        {/* Objectives / Challenges */}
        <div className="grid md:grid-cols-2 py-16 border-b border-gray-200">
          <div className="pr-8 md:border-r border-gray-200 mb-12 md:mb-0">
            <p className="text-[#e03020] text-xs font-semibold tracking-widest uppercase mb-4">Objectives</p>
            <h2 className="text-3xl font-bold text-gray-700 mb-8">What We Set Out to Achieve</h2>
            <ul className="space-y-6">
              {[
                "Accurate verification and digitisation of school campus boundaries",
                "Precise measurement of built-up and open areas",
                "Creation of a comprehensive, documented asset inventory",
                "Generation of elevation and contour data for future planning",
                "Development of a fully digital land record system"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-[#e03020] font-bold mt-1 text-xs">•</span>
                  <span className="text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:pl-16">
            <p className="text-[#e03020] text-xs font-semibold tracking-widest uppercase mb-4">Challenges</p>
            <h2 className="text-3xl font-bold text-gray-700 mb-8">The Obstacles on Ground</h2>
            <ul className="space-y-6">
              {[
                "Inconsistent and historically inaccurate boundary records",
                "No reliable data on existing infrastructure or assets",
                "Difficulty capturing precise measurements of structures and utilities",
                "Complete absence of elevation data for drainage and land management",
                "Slow, expensive, and error-prone traditional survey methods"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-[#e03020] font-bold mt-1 text-xs">•</span>
                  <span className="text-gray-500 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Solution */}
        <div className="flex flex-col md:flex-row py-16 border-b border-gray-200">
          <div className="md:w-1/4 pr-8 shrink-0 mb-8 md:mb-0">
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">05 / Our</p>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">Solution</p>
          </div>
          <div className="md:w-3/4 md:border-l border-gray-200 md:pl-12">
            <h2 className="text-3xl font-bold text-gray-700 mb-6">LiDAR-Driven Digital Mapping — End to End</h2>
            <p className="text-gray-500 leading-relaxed max-w-4xl text-lg">
              Latrics deployed a comprehensive LiDAR-based drone survey to capture high-resolution spatial data across school campuses. Using DGPS-enabled ground control points, we processed the data to generate precise boundary maps, orthophotos, and full 3D models. Every output was integrated into a cloud-based WebGIS platform — giving stakeholders instant, secure access to visualise and manage land records from anywhere.
            </p>
          </div>
        </div>

        {/* Execution Methodology */}
        <div className="flex flex-col md:flex-row py-16 border-b border-gray-200">
          <div className="md:w-1/4 pr-8 shrink-0 mb-8 md:mb-0">
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">06 / Execution</p>
            <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Methodology</p>
            <h2 className="text-2xl font-bold text-gray-700">How We Did<br/>It</h2>
          </div>
          <div className="md:w-3/4 md:border-l border-gray-200 md:pl-12">
            <div className="space-y-0">
              {[
                { title: "Ground Truth First", desc: "Establishment of Ground Control Points using DGPS for centimeter-level accuracy before any aerial work begins." },
                { title: "Aerial Data Acquisition", desc: "Deployment of LiDAR-equipped drones over campus boundaries for complete, high-density spatial coverage." },
                { title: "Point Cloud Processing", desc: "Advanced processing of raw LiDAR data to generate DEM, DSM, and publication-ready orthophotos." },
                { title: "Field Verification", desc: "On-ground validation of all outputs against physical landmarks to ensure full real-world accuracy." },
                { title: "Delivery & Training", desc: "Handover of all deliverables and comprehensive stakeholder training on the WebGIS platform." }
              ].map((step, i) => (
                <div key={i} className={`flex gap-8 py-8 ${i !== 0 ? 'border-t border-gray-200' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-[#e03020] text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-sm mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-700 mb-2">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Key Deliverables */}
        <div className="flex flex-col md:flex-row py-16 border-b border-gray-200">
           <div className="md:w-1/4 pr-8 shrink-0 mb-8 md:mb-0">
             <p className="text-xs font-bold text-gray-400 tracking-widest uppercase">07 / Key</p>
             <p className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-6">Deliverables</p>
             <h2 className="text-2xl font-bold text-gray-700 mb-6 pr-4">What Authorities Received</h2>
             <p className="text-gray-500 text-sm leading-relaxed">
               Every output was validated on-ground and delivered through a secure WebGIS platform — giving stakeholders instant access to the complete spatial picture of their campus.
             </p>
           </div>
           
           <div className="md:w-3/4 md:border-l border-gray-200 grid grid-cols-1 sm:grid-cols-2">
             <div className="border-b sm:border-r border-gray-200 border-dashed bg-gray-50/50">
                <div className="h-48 flex flex-col items-center justify-center border-b border-gray-200 border-dashed text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span className="font-medium text-sm text-gray-600">Topographic map</span>
                  <span className="text-xs">or <u className="cursor-pointer">browse files</u></span>
                </div>
                <div className="p-8">
                   <span className="text-[#e03020] text-xs font-semibold tracking-wider uppercase">Topographic Map</span>
                   <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">High-Precision Campus Map</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">1:500 scale topographic map with complete boundary demarcation, asset positions, and spot-level measurements across the school.</p>
                </div>
             </div>
             <div className="border-b border-gray-200 border-dashed bg-gray-50/50">
                <div className="h-48 flex flex-col items-center justify-center border-b border-gray-200 border-dashed text-gray-400 hover:text-gray-600 hover:bg-gray-50 transition-colors cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <span className="font-medium text-sm text-gray-600">Digital elevation model</span>
                  <span className="text-xs">or <u className="cursor-pointer">browse files</u></span>
                </div>
                <div className="p-8">
                   <span className="text-[#e03020] text-xs font-semibold tracking-wider uppercase">DEM</span>
                   <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">Digital Elevation Model</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">Colour-coded elevation model revealing terrain variation across the campus — essential for drainage planning and land management decisions.</p>
                </div>
             </div>
           </div>
        </div>

      </div>
      
      {/* Footer Area - to show completeness */}
      <Footer />
    </main>
  );
}
