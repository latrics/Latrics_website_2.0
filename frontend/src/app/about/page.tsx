"use client";
import React, { useState, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TypewriterText from '@/components/TypewriterText';
import Image from 'next/image';

export default function AboutPage() {
  const [activeTimelineIdx, setActiveTimelineIdx] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  const teamMembers = [
    { name: "Dr. Prasad Pasam", role: "DIRECTOR", desc: "Key member of the Latrics leadership team.", img: "/assets/prashad_pasam.png" },
    { name: "VH Sundar", role: "DIRECTOR", desc: "Key member of the Latrics leadership team.", img: "/assets/vh_sundar.png" },
    { name: "Abhishek Kasana", role: "CHIEF EXECUTIVE OFFICER", desc: "Key member of the Latrics leadership team.", img: "/assets/abhishek_kasana.jpg" },
    { name: "Sanjay Pathak", role: "CHIEF GROWTH OFFICER", desc: "Key member of the Latrics leadership team.", img: "/assets/Sanjay_pathak.png" },
    { name: "Satish Hosur", role: "DIRECTOR-ENERGY", desc: "Key member of the Latrics leadership team.", img: "/assets/Satish_Hoshur.png" },
    { name: "Sundaravalli Balaji", role: "DIRECTOR-FINANCE", desc: "Key member of the Latrics leadership team.", img: "/assets/sundar_balaji.png" },
    { name: "Suriyaprabha R.", role: "DIRECTOR-OPERATIONS", desc: "Key member of the Latrics leadership team.", img: "/assets/suriya_prabha.png" },
    { name: "Bhargava Ramana", role: "DIRECTOR-STRATEGY", desc: "Key member of the Latrics leadership team.", img: "/assets/bhargava_ramana.jpg" },
    { name: "Sivaram Kumar", role: "DIRECTOR-BD", desc: "Key member of the Latrics leadership team.", img: "/assets/sivaram_kumar.png" },
    { name: "Dr. Mamatha C S", role: "DIRECTOR-HR", desc: "Key member of the Latrics leadership team.", img: "/assets/mamatha_cs.png" }
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative z-10 bg-white flex-1">
        <Navbar />

        {/* Hero Section */}
        <section
          className="relative min-h-screen text-white pt-32 pb-24 px-6 md:px-12 lg:px-16 xl:px-20 flex flex-col justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/vector_grad.png')` }}
        >
          <div className="relative z-10 max-w-[1600px] mx-auto w-full">
            <div className="max-w-4xl">
              <p className="text-orange-500 text-sm font-semibold tracking-wider mb-6 uppercase">ABOUT US</p>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
                Engineering ground truth for India
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                Latrics builds indigenous LiDAR drone platforms and the geospatial intelligence pipeline behind them — from flight to finished deliverable.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-12 lg:py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-white border-b border-gray-100">
          <div className="max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
              <div className="lg:w-1/2">
                <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">MISSION & VISION</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  What we are building, and why
                </h2>
              </div>
              <div className="lg:w-1/3">
                <p className="text-gray-500 leading-relaxed pt-2">
                  Two statements that decide every roadmap call we make — the problem we exist to remove, and the country-scale outcome we are working toward.
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-[#f8f9fa] border border-gray-200 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              <div className="group relative overflow-hidden p-8 lg:p-10 bg-[#f8f9fa] hover:bg-white transition-colors duration-300 cursor-pointer">
                <p className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 relative z-10">MISSION</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight relative z-10">Make survey-grade terrain data ordinary infrastructure.</h3>
                <p className="text-gray-500 leading-relaxed text-sm relative z-10">
                  Accurate 3D capture shouldn't be a bottleneck. We build indigenous LiDAR platforms and the processing pipeline behind them so every field team in India can move from flight to finished deliverable in days, not months.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#da291c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </div>
              <div className="group relative overflow-hidden p-8 lg:p-10 bg-[#f8f9fa] hover:bg-white transition-colors duration-300 cursor-pointer">
                <p className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 relative z-10">VISION</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight relative z-10">A single digital ground truth for the country.</h3>
                <p className="text-gray-500 leading-relaxed text-sm relative z-10">
                  One connected geospatial ecosystem — aerospace, mapping, and sustainable energy systems — that governments, industries, and enterprises can plan, build, and maintain on with confidence.
                </p>
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#da291c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6 md:px-12 lg:px-16 xl:px-20 bg-gradient-to-br from-[#18181b] to-[#3a0d0d]">
          <div className="max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
              <div className="lg:w-1/2">
                <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">VALUES</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                  Three principles we build against
                </h2>
              </div>
              <div className="lg:w-1/3">
                <p className="text-gray-300 leading-relaxed pt-2">
                  They are not posters on a wall — they are the filters we use to accept or reject a feature, a supplier, and a project.
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 bg-white/5 border border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="p-10 lg:p-12">
                <p className="text-[#da291c] text-sm font-bold mb-6">01</p>
                <h3 className="text-2xl font-bold text-white mb-4">Field-first</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  We build for the site, not the slide deck — every feature is validated against real deployments.
                </p>
              </div>
              <div className="p-10 lg:p-12">
                <p className="text-[#da291c] text-sm font-bold mb-6">02</p>
                <h3 className="text-2xl font-bold text-white mb-4">Built in India</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Airframe to payload, engineered and manufactured indigenously — no dependency on imported platforms.
                </p>
              </div>
              <div className="p-10 lg:p-12">
                <p className="text-[#da291c] text-sm font-bold mb-6">03</p>
                <h3 className="text-2xl font-bold text-white mb-4">Precision, always</h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Survey-grade accuracy is non-negotiable — every dataset meets the tolerance the job demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-12 lg:py-16 px-6 md:px-12 lg:px-16 xl:px-20 bg-white border-t border-gray-100">
          <div className="max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-10">
              <div className="lg:w-1/2">
                <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">LEADERSHIP</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  The founder behind the platform
                </h2>
              </div>
              <div className="lg:w-1/3">
                <p className="text-gray-500 leading-relaxed pt-2">
                  Latrics is led from the field. Fifteen years of building ventures shape how the hardware, the pipeline, and the deliverables are designed.
                </p>
              </div>
            </div>

            {/* Content Box */}
            <div className="flex flex-col lg:flex-row border border-gray-200">
              {/* Photo Area */}
              <div className="lg:w-1/3 relative bg-[#ececec] flex flex-col items-center justify-center text-center min-h-[350px] lg:min-h-[auto]">
                <Image src="/assets/Balaji_nagrajan.png" alt="Balaji Nagarajan" fill className="object-cover object-top" />
              </div>
              
              {/* Bio Area */}
              <div className="lg:w-2/3 p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">MANAGING DIRECTOR</p>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">Balaji Nagarajan</h3>
                <p className="text-gray-500 mb-8 text-sm md:text-base">Serial Entrepreneur · 15+ Years Experience</p>
                
                <blockquote className="border-l-2 border-[#da291c] pl-6 py-2 mb-10">
                  <p className="text-2xl font-semibold text-gray-900 leading-snug">
                    "Visionary behind India's next-generation autonomous aerial infrastructure."
                  </p>
                </blockquote>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">15+</p>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">YEARS EXPERIENCE</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">40+</p>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">SURVEY PROGRAMS LED</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">MD</p>
                    <p className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">SERIAL ENTREPRENEUR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6 md:px-12 lg:px-16 xl:px-20 bg-white border-t border-gray-100">
          <div className="max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
              <div className="lg:w-1/2">
                <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">TEAM</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  The people behind the platform
                </h2>
              </div>
              <div className="lg:w-1/3">
                <p className="text-gray-500 leading-relaxed pt-2">
                  A compact team of aerospace engineers, geospatial specialists, and certified pilots — hardware and software under one roof.
                </p>
              </div>
            </div>

            {/* Carousel */}
            <style dangerouslySetInnerHTML={{__html: `
              .hide-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
            <div className="relative group">
              {/* Left Button */}
              <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 z-20 w-12 h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:text-[#da291c] hover:scale-110 transition-all border border-gray-100 hidden md:flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              
              {/* Right Button */}
              <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 z-20 w-12 h-12 bg-white rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center justify-center text-gray-800 hover:text-[#da291c] hover:scale-110 transition-all border border-gray-100 hidden md:flex">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>

              <div ref={carouselRef} className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-8 pt-4 px-2 -mx-2 hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="flex-none w-[85vw] sm:w-[calc(50%-16px)] lg:w-[calc(25%-24px)] flex flex-col border border-gray-200 snap-start bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group/card cursor-pointer">
                    <div className="h-64 bg-[#ececec] flex flex-col items-center justify-center text-center p-6 border-b border-gray-200 transition-colors duration-300 group-hover/card:bg-[#e2e2e2] relative overflow-hidden">
                      {member.img ? (
                        <Image src={member.img} alt={member.name} fill className="object-cover" />
                      ) : (
                        <>
                          <div className="w-12 h-12 mb-3 opacity-20 transition-transform duration-300 group-hover/card:scale-110">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                          </div>
                          <p className="text-sm font-semibold text-gray-600">Drop photo</p>
                          <p className="text-xs text-gray-500 underline">or browse files</p>
                        </>
                      )}
                    </div>
                    <div className="p-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover/card:text-[#da291c] transition-colors">{member.name}</h3>
                      <p className="text-[#da291c] text-[10px] font-bold uppercase tracking-widest mb-4">{member.role}</p>
                      <p className="text-gray-500 leading-relaxed text-sm">
                        {member.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6 md:px-12 lg:px-16 xl:px-20 bg-white border-t border-gray-100">
          <div className="max-w-[1600px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
              <div className="lg:w-1/2">
                <h3 className="text-[#da291c] text-[10px] font-bold uppercase tracking-[0.2em] mb-4">TIMELINE</h3>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
                  From first prototype to fielded fleet
                </h2>
              </div>
              <div className="lg:w-1/3">
                <p className="text-gray-500 leading-relaxed pt-2">
                  Milestones that took Latrics from an idea in Hyderabad to DGCA-certified survey operations across India.
                </p>
              </div>
            </div>

            {/* Grid Timeline */}
            <div className="relative pt-6">
              {/* Connecting Line */}
              <div className="hidden lg:block absolute top-[35px] left-6 right-6 h-[2px] bg-gray-200 z-0"></div>
              {/* Progress Line */}
              <div 
                className="hidden lg:block absolute top-[35px] left-6 h-[2px] bg-[#da291c] z-0 transition-all duration-500 ease-out"
                style={{ width: `calc(${activeTimelineIdx * 33.33}% - 24px)` }}
              ></div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
                {/* 2021 */}
                <div onMouseEnter={() => setActiveTimelineIdx(0)} className="group cursor-default">
                  <div className={`w-6 h-6 mb-8 hidden lg:block border-4 border-white transition-colors duration-500 rounded-sm cursor-pointer relative z-10 ${activeTimelineIdx >= 0 ? 'bg-[#da291c]' : 'bg-gray-300 group-hover:bg-gray-400'}`}></div>
                  <p className="text-[#da291c] text-sm font-bold tracking-widest mb-4 transition-colors duration-300 group-hover:text-red-700">2021</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Founded</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Latrics is founded in Hyderabad to build indigenous drone-based survey technology.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#da291c] rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm">Core aerospace & geospatial team assembled</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#da291c] rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm">First airframe concept validated</span>
                    </li>
                  </ul>
                </div>

                {/* 2023 */}
                <div onMouseEnter={() => setActiveTimelineIdx(1)} className="group cursor-default">
                  <div className={`w-6 h-6 mb-8 hidden lg:block border-4 border-white transition-colors duration-500 rounded-sm cursor-pointer relative z-10 ${activeTimelineIdx >= 1 ? 'bg-[#da291c]' : 'bg-gray-300 group-hover:bg-gray-400'}`}></div>
                  <p className="text-[#da291c] text-sm font-bold tracking-widest mb-4 transition-colors duration-300 group-hover:text-red-700">2023</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">LiCopter P720 takes flight</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    First indigenous LiDAR drone platform completes flight trials.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#da291c] rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm">In-house payload integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#da291c] rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm">Endurance and accuracy benchmarks cleared</span>
                    </li>
                  </ul>
                </div>

                {/* 2024 */}
                <div onMouseEnter={() => setActiveTimelineIdx(2)} className="group cursor-default">
                  <div className={`w-6 h-6 mb-8 hidden lg:block border-4 border-white transition-colors duration-500 rounded-sm cursor-pointer relative z-10 ${activeTimelineIdx >= 2 ? 'bg-[#da291c]' : 'bg-gray-300 group-hover:bg-gray-400'}`}></div>
                  <p className="text-[#da291c] text-sm font-bold tracking-widest mb-4 transition-colors duration-300 group-hover:text-red-700">2024</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">DGCA type certification</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    LiCopter P720 receives DGCA certification, clearing commercial deployment nationwide.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#da291c] rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm">Certified fleet and operator status</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#da291c] rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm">First state-level survey programs delivered</span>
                    </li>
                  </ul>
                </div>

                {/* 2026 */}
                <div onMouseEnter={() => setActiveTimelineIdx(3)} className="group cursor-default">
                  <div className={`w-6 h-6 mb-8 hidden lg:block border-4 border-white transition-colors duration-500 rounded-sm cursor-pointer relative z-10 ${activeTimelineIdx >= 3 ? 'bg-[#da291c]' : 'bg-gray-300 group-hover:bg-gray-400'}`}></div>
                  <p className="text-[#da291c] text-sm font-bold tracking-widest mb-4 transition-colors duration-300 group-hover:text-red-700">2026</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Scaling Terrain Desk</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    Expanding regional offices and the Terrain Desk data pipeline across mining, energy, and infrastructure.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#da291c] rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm">Four offices across India</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-1 h-1 bg-[#da291c] rounded-full mt-2 shrink-0"></span>
                      <span className="text-gray-600 text-sm">Six industries served end to end</span>
                    </li>
                  </ul>
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
