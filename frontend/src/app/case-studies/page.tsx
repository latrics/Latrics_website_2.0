import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import SectionLayout from '@/components/SectionLayout';

export default function SchoolCampusCaseStudy() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative z-10 bg-white flex-1">
        <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen bg-black text-white pt-32 pb-16 px-8 lg:px-24 flex flex-col justify-center">
        <div className="max-w-6xl mx-auto w-full">
          <div className="flex items-center gap-2 mb-10">
            <span className="text-brand-red text-xs md:text-sm font-heading font-semibold tracking-widest uppercase">Case Study</span>
            <span className="text-brand-red text-xs md:text-sm">•</span>
            <span className="text-brand-red text-xs md:text-sm font-heading font-semibold tracking-widest uppercase">Revenue & Land Records</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Mapping School Campuses <br/>
            with <span className="text-brand-red">Centimeter Precision</span> <br/>
            Using LiDAR Drones
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-20">
            How Latrics India modernised land record management for institutional campuses through UAV LiDAR technology — delivering accuracy traditional surveys simply cannot.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-800 pt-8 mt-12 text-left">
            <div>
              <p className="text-xs text-brand-olive uppercase tracking-widest mb-2 font-heading font-medium">Project Type</p>
              <p className="text-sm font-semibold text-gray-200">School Infrastructure Mapping</p>
            </div>
            <div>
              <p className="text-xs text-brand-olive uppercase tracking-widest mb-2 font-heading font-medium">Technology</p>
              <p className="text-sm font-semibold text-gray-200">UAV LiDAR · DGPS · WebGIS</p>
            </div>
            <div>
              <p className="text-xs text-brand-olive uppercase tracking-widest mb-2 font-heading font-medium">Sector</p>
              <p className="text-sm font-semibold text-gray-200">Government / Education</p>
            </div>
            <div>
              <p className="text-xs text-brand-olive uppercase tracking-widest mb-2 font-heading font-medium">Output Resolution</p>
              <p className="text-sm font-semibold text-gray-200">2 cm Orthophotos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Banner */}
      <div className="bg-white border-b border-gray-200 py-8 px-8">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center shrink-0 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <p className="text-brand-olive text-sm leading-relaxed">
            <strong className="text-brand-charcoal">Latrics India Private Limited</strong> is a leading provider of advanced geospatial and autonomous solutions, specializing in Artificial Intelligence, Drone Technology, IoT, and Sensor Fusion — delivering data-driven solutions that transform governance, infrastructure planning, and societal development.
          </p>
        </div>
      </div>

      {/* The Challenge */}
      <SectionLayout number="01 / THE CHALLENGE" title="Challenge">
        <div className="p-8 lg:p-16">
          <h2 className="text-3xl font-bold text-brand-charcoal mb-6">When Traditional Surveys Fall Short</h2>
          <p className="text-brand-olive leading-relaxed max-w-3xl text-lg">
            Accurate land records are the backbone of effective governance and infrastructure planning. Yet for institutional campuses like schools, conventional survey methods consistently fall short — delivering imprecise boundary definitions, incomplete asset mapping, and no elevation intelligence. Something had to change.
          </p>
        </div>
      </SectionLayout>

      {/* Project Snapshot */}
      <SectionLayout number="02 / PROJECT SNAPSHOT" title="Snapshot" subtitle="At a glance">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t md:border-t-0 border-gray-200">
          <div className="p-8 border-b md:border-b-0 border-gray-200">
            <h3 className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-4">Technology</h3>
            <p className="font-bold text-brand-charcoal text-sm">UAV LiDAR & DGPS Ground Control</p>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-l border-gray-200">
            <h3 className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-4">Platform</h3>
            <p className="font-bold text-brand-charcoal text-sm">Cloud-based WebGIS with Secure Access</p>
          </div>
          <div className="p-8 border-b md:border-b-0 md:border-l border-gray-200">
            <h3 className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-4">Map Scale</h3>
            <p className="font-bold text-brand-charcoal text-sm">1:500 High-Precision Topographic Maps</p>
          </div>
          <div className="p-8 md:border-l border-gray-200">
            <h3 className="text-xs font-semibold text-brand-red uppercase tracking-wider mb-4">Key Applications</h3>
            <p className="font-bold text-brand-charcoal text-sm">Boundary Verification, Asset Inventory, Elevation Mapping</p>
          </div>
        </div>
      </SectionLayout>

      {/* Tech Deep Dive */}
      <SectionLayout number="03 / TECHNOLOGY" title="Deep Dive" dark>
        <div className="py-16 px-8 md:px-16">
          <p className="text-brand-red text-xs font-semibold tracking-widest uppercase mb-4">Technology Deep Dive</p>
          <h2 className="text-4xl font-bold mb-6 text-white">Why LiDAR is a Game-Changer for Land Records</h2>
          <p className="text-gray-300 leading-relaxed mb-8 text-lg max-w-4xl">
            LiDAR (Light Detection and Ranging) captures millions of elevation points per second — delivering centimeter-level accuracy that GPS and optical surveys cannot match. For land record applications, this translates to razor-sharp boundary demarcation, reliable terrain analysis, and rapid scalable coverage even in complex, densely-built environments.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 border border-gray-700 rounded-sm text-xs font-medium text-gray-300">Centimeter Accuracy</span>
            <span className="px-4 py-2 border border-gray-700 rounded-sm text-xs font-medium text-gray-300">Point Cloud Processing</span>
            <span className="px-4 py-2 border border-gray-700 rounded-sm text-xs font-medium text-gray-300">DEM & DSM Generation</span>
            <span className="px-4 py-2 border border-gray-700 rounded-sm text-xs font-medium text-gray-300">Scalable Coverage</span>
            <span className="px-4 py-2 border border-gray-700 rounded-sm text-xs font-medium text-gray-300">Anomaly Detection</span>
          </div>
        </div>
      </SectionLayout>

      {/* Objectives / Challenges */}
      <SectionLayout number="04 / OBJECTIVES & CHALLENGES" title="Objectives & Challenges">
        <div className="grid md:grid-cols-2">
          <div className="p-8 lg:p-16 md:border-r border-gray-200">
            <p className="text-brand-red text-xs font-semibold tracking-widest uppercase mb-4">Objectives</p>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-8">What We Set Out to Achieve</h2>
            <ul className="space-y-6">
              {[
                "Accurate verification and digitisation of school campus boundaries",
                "Precise measurement of built-up and open areas",
                "Creation of a comprehensive, documented asset inventory",
                "Generation of elevation and contour data for future planning",
                "Development of a fully digital land record system"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-brand-red font-bold mt-1 text-xs">•</span>
                  <span className="text-brand-olive leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 lg:p-16">
            <p className="text-brand-red text-xs font-semibold tracking-widest uppercase mb-4">Challenges</p>
            <h2 className="text-3xl font-bold text-brand-charcoal mb-8">The Obstacles on Ground</h2>
            <ul className="space-y-6">
              {[
                "Inconsistent and historically inaccurate boundary records",
                "No reliable data on existing infrastructure or assets",
                "Difficulty capturing precise measurements of structures and utilities",
                "Complete absence of elevation data for drainage and land management",
                "Slow, expensive, and error-prone traditional survey methods"
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-brand-red font-bold mt-1 text-xs">•</span>
                  <span className="text-brand-olive leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionLayout>

      {/* Solution */}
      <SectionLayout number="05 / OUR SOLUTION" title="Solution">
        <div className="p-8 lg:p-16">
          <h2 className="text-3xl font-bold text-brand-charcoal mb-6">LiDAR-Driven Digital Mapping — End to End</h2>
          <p className="text-brand-olive leading-relaxed max-w-4xl text-lg">
            Latrics deployed a comprehensive LiDAR-based drone survey to capture high-resolution spatial data across school campuses. Using DGPS-enabled ground control points, we processed the data to generate precise boundary maps, orthophotos, and full 3D models. Every output was integrated into a cloud-based WebGIS platform — giving stakeholders instant, secure access to visualise and manage land records from anywhere.
          </p>
        </div>
      </SectionLayout>

      {/* Execution Methodology */}
      <SectionLayout number="06 / EXECUTION METHODOLOGY" title="Methodology" subtitle="How we did it">
        <div className="p-8 lg:p-16">
          <div className="space-y-0">
            {[
              { title: "Ground Truth First", desc: "Establishment of Ground Control Points using DGPS for centimeter-level accuracy before any aerial work begins." },
              { title: "Aerial Data Acquisition", desc: "Deployment of LiDAR-equipped drones over campus boundaries for complete, high-density spatial coverage." },
              { title: "Point Cloud Processing", desc: "Advanced processing of raw LiDAR data to generate DEM, DSM, and publication-ready orthophotos." },
              { title: "Field Verification", desc: "On-ground validation of all outputs against physical landmarks to ensure full real-world accuracy." },
              { title: "Delivery & Training", desc: "Handover of all deliverables and comprehensive stakeholder training on the WebGIS platform." }
            ].map((step, i) => (
              <div key={i} className={`flex gap-8 py-8 ${i !== 0 ? 'border-t border-gray-200' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-brand-red text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-sm mt-1">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-charcoal mb-2">{step.title}</h3>
                  <p className="text-brand-olive leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionLayout>

      {/* Key Deliverables */}
      <SectionLayout number="07 / KEY DELIVERABLES" title="Deliverables" subtitle="What authorities received">
        <div>
          <p className="text-brand-olive text-sm leading-relaxed p-8 lg:px-16 lg:pt-16 max-w-2xl">
            Every output was validated on-ground and delivered through a secure WebGIS platform — giving stakeholders instant access to the complete spatial picture of their campus.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-gray-200">
            <div className="border-b sm:border-r border-gray-200 border-dashed bg-gray-50/50 group">
              <div className="h-48 relative overflow-hidden border-b border-gray-200 border-dashed bg-gray-900 cursor-pointer">
                <Image src="/assets/topo_map.png" alt="Topographic map" fill className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8">
                 <span className="text-brand-red text-xs font-semibold tracking-wider uppercase">Topographic Map</span>
                 <h3 className="text-xl font-bold text-brand-charcoal mt-2 mb-3">High-Precision Campus Map</h3>
                 <p className="text-brand-olive text-sm leading-relaxed">1:500 scale topographic map with complete boundary demarcation, asset positions, and spot-level measurements across the school.</p>
              </div>
           </div>
            <div className="border-b border-gray-200 border-dashed bg-gray-50/50 group">
              <div className="h-48 relative overflow-hidden border-b border-gray-200 border-dashed bg-gray-900 cursor-pointer">
                <Image src="/assets/dem_model.png" alt="Digital elevation model" fill className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              <div className="p-8">
                 <span className="text-brand-red text-xs font-semibold tracking-wider uppercase">DEM</span>
                 <h3 className="text-xl font-bold text-brand-charcoal mt-2 mb-3">Digital Elevation Model</h3>
                 <p className="text-brand-olive text-sm leading-relaxed">Colour-coded elevation model revealing terrain variation across the campus — essential for drainage planning and land management decisions.</p>
              </div>
           </div>
          </div>
        </div>
      </SectionLayout>

      </div>
      <Footer />
    </main>
  );
}
