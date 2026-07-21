import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TypewriterText from '@/components/TypewriterText';
import SectionLayout from '@/components/SectionLayout';

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
        <SectionLayout number="01 / MISSION" title="Mission">
          <div className="p-8 lg:p-16">
            <h2 className="text-3xl lg:text-5xl font-semibold text-brand-charcoal leading-tight">
              <TypewriterText text="We believe accurate terrain data shouldn't be a bottleneck - it should be infrastructure. Latrics exists to make survey-grade 3D capture fast, indigenous, and available to every field team in India." />
            </h2>
          </div>
        </SectionLayout>

        {/* Values Section */}
        <SectionLayout number="02 / VALUES" title="Values">
          <div className="p-8 lg:p-16 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <p className="text-brand-red font-bold mb-4">01</p>
              <h3 className="text-xl font-bold text-brand-charcoal mb-4">Field-first</h3>
              <p className="text-brand-olive leading-relaxed">
                We build for the site, not the slide deck — every feature is validated against real deployments.
              </p>
            </div>
            <div>
              <p className="text-brand-red font-bold mb-4">02</p>
              <h3 className="text-xl font-bold text-brand-charcoal mb-4">Built in India</h3>
              <p className="text-brand-olive leading-relaxed">
                Airframe to payload, engineered and manufactured indigenously — no dependency on imported platforms.
              </p>
            </div>
            <div>
              <p className="text-brand-red font-bold mb-4">03</p>
              <h3 className="text-xl font-bold text-brand-charcoal mb-4">Precision, always</h3>
              <p className="text-brand-olive leading-relaxed">
                Survey-grade accuracy is non-negotiable — every dataset meets the tolerance the job demands.
              </p>
            </div>
          </div>
        </SectionLayout>

        {/* By The Numbers */}
        <SectionLayout number="03 / BY THE NUMBERS" title="By the Numbers" dark>
          <div className="p-8 lg:p-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-800">
            <div>
              <p className="text-5xl font-bold text-brand-red mb-2">4</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Offices Across India</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-brand-red mb-2">1</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">DGCA-Certified Platform</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-brand-red mb-2">6</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Industries Served</p>
            </div>
            <div>
              <p className="text-5xl font-bold text-brand-red mb-2">100%</p>
              <p className="text-xs text-gray-400 font-semibold tracking-wider uppercase">Designed & Built In India</p>
            </div>
          </div>
        </SectionLayout>

        {/* Timeline Section */}
        <SectionLayout number="04 / TIMELINE" title="Timeline" subtitle="Milestones so far.">
          <div className="p-8 lg:p-16 flex flex-col gap-12">
            <div className="flex gap-8 border-b border-gray-200 pb-12">
              <div className="w-24">
                <p className="text-3xl font-bold text-brand-red">2021</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Founded</h3>
                <p className="text-brand-olive">Latrics is founded in Hyderabad to build indigenous drone-based survey technology.</p>
              </div>
            </div>
            <div className="flex gap-8 border-b border-gray-200 pb-12">
              <div className="w-24">
                <p className="text-3xl font-bold text-brand-red">2023</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">LiCopter P720 takes flight</h3>
                <p className="text-brand-olive">First indigenous LiDAR drone platform completes flight trials.</p>
              </div>
            </div>
            <div className="flex gap-8 border-b border-gray-200 pb-12">
              <div className="w-24">
                <p className="text-3xl font-bold text-brand-red">2024</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">DGCA type certification</h3>
                <p className="text-brand-olive">LiCopter P720 receives DGCA certification, clearing commercial deployment nationwide.</p>
              </div>
            </div>
            <div className="flex gap-8">
              <div className="w-24">
                <p className="text-3xl font-bold text-brand-red">2026</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-2">Scaling Terrain Desk</h3>
                <p className="text-brand-olive">Expanding regional offices and the Terrain Desk data pipeline across mining, energy, and infrastructure.</p>
              </div>
            </div>
          </div>
        </SectionLayout>

      </div>
      <Footer />
    </main>
  );
}
