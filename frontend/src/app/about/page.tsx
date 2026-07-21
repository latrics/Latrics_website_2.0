import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TypewriterText from '@/components/TypewriterText';

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="relative z-10 bg-white flex-1">
        <Navbar />

        {/* Hero Section */}
        <section
          className="relative min-h-screen text-white pt-32 pb-24 px-8 lg:px-24 flex flex-col justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('/assets/vector_grad.png')` }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/60 z-0" />

          <div className="relative z-10 max-w-4xl">
            <p className="text-orange-500 text-sm font-semibold tracking-wider mb-6 uppercase">ABOUT US</p>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
              Engineering ground truth for India
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Latrics builds indigenous LiDAR drone platforms and the geospatial intelligence pipeline behind them — from flight to finished deliverable.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-8 lg:px-24 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            <div className="lg:w-1/4">
              <p className="text-gray-400 text-sm font-medium tracking-wide">01 / MISSION</p>
            </div>
            <div className="lg:w-3/4">
              <h2 className="text-3xl lg:text-5xl font-semibold text-gray-900 leading-tight">
                <TypewriterText text="We believe accurate terrain data shouldn't be a bottleneck — it should be infrastructure. Latrics exists to make survey-grade 3D capture fast, indigenous, and available to every field team in India." />
              </h2>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-8 lg:px-24 bg-gray-50 border-b border-gray-200">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            <div className="lg:w-1/4">
              <p className="text-gray-400 text-sm font-medium tracking-wide">02 / VALUES</p>
            </div>
            <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-12">
              <div>
                <p className="text-orange-500 font-bold mb-4">01</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Field-first</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build for the site, not the slide deck — every feature is validated against real deployments.
                </p>
              </div>
              <div>
                <p className="text-orange-500 font-bold mb-4">02</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Built in India</h3>
                <p className="text-gray-600 leading-relaxed">
                  Airframe to payload, engineered and manufactured indigenously — no dependency on imported platforms.
                </p>
              </div>
              <div>
                <p className="text-orange-500 font-bold mb-4">03</p>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Precision, always</h3>
                <p className="text-gray-600 leading-relaxed">
                  Survey-grade accuracy is non-negotiable — every dataset meets the tolerance the job demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* By The Numbers */}
        <section className="bg-zinc-800 text-white py-16 px-8 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto items-center">
            <div className="lg:w-1/4">
              <p className="text-gray-400 text-sm font-medium tracking-wide">03 / BY THE NUMBERS</p>
            </div>
            <div className="lg:w-3/4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-zinc-700">
              <div>
                <p className="text-5xl font-bold text-red-500 mb-2">4</p>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Offices Across India</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-red-500 mb-2">1</p>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">DGCA-Certified Platform</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-red-500 mb-2">6</p>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Industries Served</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-red-500 mb-2">100%</p>
                <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Designed & Built In India</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 px-8 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
            <div className="lg:w-1/4">
              <p className="text-gray-400 text-sm font-medium tracking-wide">04 / TIMELINE</p>
              <p className="text-gray-500 mt-2 text-sm">Milestones so far.</p>
            </div>
            <div className="lg:w-3/4 flex flex-col gap-12">
              <div className="flex gap-8 border-b border-gray-200 pb-12">
                <div className="w-24">
                  <p className="text-3xl font-bold text-red-500">2021</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Founded</h3>
                  <p className="text-gray-600">Latrics is founded in Hyderabad to build indigenous drone-based survey technology.</p>
                </div>
              </div>
              <div className="flex gap-8 border-b border-gray-200 pb-12">
                <div className="w-24">
                  <p className="text-3xl font-bold text-red-500">2023</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">LiCopter P720 takes flight</h3>
                  <p className="text-gray-600">First indigenous LiDAR drone platform completes flight trials.</p>
                </div>
              </div>
              <div className="flex gap-8 border-b border-gray-200 pb-12">
                <div className="w-24">
                  <p className="text-3xl font-bold text-red-500">2024</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">DGCA type certification</h3>
                  <p className="text-gray-600">LiCopter P720 receives DGCA certification, clearing commercial deployment nationwide.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <div className="w-24">
                  <p className="text-3xl font-bold text-red-500">2026</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scaling Terrain Desk</h3>
                  <p className="text-gray-600">Expanding regional offices and the Terrain Desk data pipeline across mining, energy, and infrastructure.</p>
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
